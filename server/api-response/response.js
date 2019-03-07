var logging = require("../logging/logging.js");
var settings = require("../settings/settings.js");
const https = require("https");
const http = require("http");
const requester = require("request");
var StringDecoder = require('string_decoder').StringDecoder;
var CryptoJS = require('crypto-js');

/* Steps for altering Player account:
    - Take authority
    - Submit request
    - Release authority
*/

exports.requestApiCall = function(formData, callback) {
    var request = JSON.parse(JSON.stringify(formData.request));
    delete formData.request;
    
    var path = request.uri;

        if (request.authority) { // Any requests that change account data have this authority flag, authority has to be requested before account data can be modified.
            getAuthority(formData.CSAgentId, (response) => {
                if (response['API Response'].Status == "HoldingAuthority") {
                    releaseAuthority(formData.CSAgentId, response['API Response'].AccountId);
                    waitForReleaseAuthority(formData.CSAgentId, 0, (bool) => {
                        if (bool) {
                            requestAuthority(formData.CSAgentId, formData.AccountId);
                            waitForAuthority(formData.CSAgentId, formData.AccountId, 0, (bool) => {
                                if (bool) {
                                    apiCall(path, request.type, formData, (response) => {
                                        logging.logRequest(formData.CSAgentId, formData, request, response);
                                        callback(response);
                                        // release authority
                                        releaseAuthority(formData.CSAgentId, formData.AccountId);
                                    });
                                } else {
                                    var response = {
                                        "Success": false,
                                        "Status Code": "500",
                                        "API Response": "Timed out while requesting authority.",
                                        "Sent Data": request
                                    }
                                    logging.logRequest(formData.CSAgentId, formData, request, response);
                                    callback(response);
                                }
                            });
                        } else {
                            var response = {
                                "Success": false,
                                "Status Code": "500",
                                "API Response": "Timed out while releasing authority.",
                                "Sent Data": request
                            }
                            logging.logRequest(formData.CSAgentId, formData, request, response);
                            callback(response);
                        }
                    });
                } else {
                    requestAuthority(formData.CSAgentId, formData.AccountId);
                    waitForAuthority(formData.CSAgentId, formData.AccountId, 0, (bool) => {
                        if (bool) {
                            apiCall(path, request.type, formData, (response) => {
                                logging.logRequest(formData.CSAgentId, formData, request, response);
                                callback(response);
                                releaseAuthority(formData.CSAgentId, formData.AccountId);
                            });
                        } else {
                            var response = {
                                "Success": false,
                                "Status Code": "500",
                                "API Response": "Timed out while requesting authority.",
                                "Sent Data": request
                            }
                            callback(response);
                        }
                    });
                }
            });
        } else {
            apiCall(path, request.type, formData, (response) => {
                logging.logRequest(formData.CSAgentId, formData, request, response);
                callback(response);
            });
        }
    
}

function apiCall(path, type, requestData, callback) {
    var postData = "";
    if (type == "GET") {
        path += "?";
        Object.keys(requestData).forEach(key => {
            path += key + "=" + requestData[key] + "&";
        });
    } else {
        postData = JSON.stringify(requestData);
    }

    /* HMAC */
    var timeStamp = new Date(new Date().toUTCString());
    var hashedPayload = generate_hmac_payload(postData, type, timeStamp);

    var options = {
        hostname: settings.config.api.url,
        path: path,
        method: type,
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length,
            'Authorization': [settings.config.api.clientkey, type, timeStamp, generate_code(16), hashedPayload].join("")
        }
    }
    var req = https.request(options, (res) => {
        var decoder = new StringDecoder('utf8');
        var apiResponse = "";

        res.on('data', (chunk) => {
            apiResponse += decoder.write(chunk);
        }).on('end', () => {
            /* HMAC */
            var key = CryptoJS.enc.Base64.parse(settings.config.api.secretkey);
            apiResponse = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(apiResponse, key));
            try {
                apiResponse = JSON.parse(apiResponse);
            }
            catch(e) {
                apiResponse = "No data returned";
            }
            finally {
                var response = {
                    "Success": res.statusCode == "200" ? true : false,
                    "Status Code": res.statusCode,
                    "API Response": apiResponse,
                    "Sent Data": requestData
                }
                callback(JSON.stringify(response));
            }
        });
    });

    req.on('error', (e) => {
        var response = {
            error: e
        }
        callback(JSON.stringify(response));
    });
    //req.write(postData);
    req.write(hashedPayload);
    req.end();
}

function generate_hmac_payload(data, type, timeStamp) {
    var hashedPayload = CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(data));
    return hashedPayload
}

function generate_code(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i <= length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

function waitForAuthority(CSAgentId, AccountId, counter, callback) {
    getAuthority(CSAgentId, (response) => {
        if (response['API Response'].AccountId != AccountId && counter <= 10) {
            setTimeout(function() {
                waitForAuthority(CSAgentId, AccountId, counter++, callback);
            }, 1000);
        } else if (response['API Response'].AccountId == AccountId) {
            callback(true);
        } else {
            callback(false);
        }
    });
}

function waitForReleaseAuthority(CSAgentId, counter, callback) {
    getAuthority(CSAgentId, (response) => {
        if (response['API Response'].AccountId != 0 && counter <= 10) {
            setTimeout(function() {
                waitForReleaseAuthority(CSAgentId, counter++, callback);
            }, 1000);
        } else if (response['API Response'].AccountId == 0) {
            callback(true);
        } else {
            callback(false);
        }
    });
}

function requestAuthority(CSAgentId, AccountId) {
    var requestData = {
        CSAgentId: CSAgentId,
        AccountId: AccountId,
        Memo: CSAgentId + " has requested authority."
    };
    apiCall("/api/cs/accountauthority/takecontrol", "POST", requestData, function(response) {
        
    });
}

function releaseAuthority(CSAgentId, AccountId) {
    var requestData = {
        CSAgentId: CSAgentId,
        AccountId: AccountId,
        Memo: CSAgentId + " has released authority."
    };
    apiCall("/api/cs/accountauthority/releasecontrol", "POST", requestData, function(response) {

    });
}

function getAuthority(CSAgentId, callback) {
    var requestData = {
        CSAgentId: CSAgentId
    };
    apiCall("/api/cs/accountauthority/status", "GET", requestData, function(response) {
        callback(JSON.parse(response));
    });
}