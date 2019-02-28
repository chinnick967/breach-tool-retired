var logging = require("../logging/logging.js");
var settings = require("../settings/settings.js");
const https = require("https");
const http = require("http");
const requester = require("request");
var StringDecoder = require('string_decoder').StringDecoder;

/* Steps for altering Player account:
    - Take authority
    - Submit request
    - Release authority
*/

exports.requestApiCall = function(formData, callback) {
    var request = JSON.parse(JSON.stringify(formData.request));
    delete formData.request;
    
    var path = request.uri;
    console.log("REQUEST");
    console.log(request);

        if (request.authority) { // Any requests that change account data have this authority flag, authority has to be requested before account data can be modified.
            requestAuthority(formData.CSAgentId, formData.AccountId, () => {
                apiCall(path, request.type, formData, (response) => {
                    logging.logRequest(formData.CSAgentId, formData, request, response);
                    callback(response);
                    // release authority
                });
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
    var options = {
        hostname: settings.config.api.url,
        path: path,
        method: type,
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length
        }
    }
    var req = https.request(options, (res) => {
        var decoder = new StringDecoder('utf8');
        var apiResponse = "";

        res.on('data', (chunk) => {
            apiResponse += decoder.write(chunk);
        }).on('end', () => {
            if (apiResponse) {
                try {
                    apiResponse = JSON.parse(apiResponse);
                }
                catch(e) {
                    console.log(e);
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
            }
        });
    });

    req.on('error', (e) => {
        var response = {
            error: e
        }
        callback(JSON.stringify(response));
    });

    req.write(postData);
    req.end();
}

function multiRequestAuthority(formData, callback) {
    var counter = 0;
    for (var i = 0; i < formData.AccountIds.length; i++) {
        let accountId = formData.AccountIds[i];
        requestAuthority(formData.CSAgentId, accountId, () => {
            counter++;
            if (counter == formData.AccountIds.length) {
                callback();
            }
        });
    }
}

function multiReleaseAuthority(formData) {
    for (var i = 0; i < formData.AccountIds.length; i++) {
        let accountId = formData.AccountIds[i];
        releaseAuthority(formData.CSAgentId, accountId, () => {

        });
    }
}

function requestAuthority(CSAgentId, AccountId, callback) {
    var requestData = {
        CSAgentId: CSAgentId,
        AccountId: AccountId,
        Memo: CSAgentId + " has requested authority."
    };

    apiCall("/api/cs/accountauthority/takecontrol", "POST", requestData, function(response) {
        callback();
    });
}

function releaseAuthority(CSAgentId, AccountId, callback) {
    var requestData = {
        CSAgentId: CSAgentId,
        AccountId: AccountId,
        Memo: CSAgentId + " has released authority."
    };

    apiCall("/api/cs/accountauthority/releasecontrol", "POST", requestData, function(response) {
        callback();
    });
}