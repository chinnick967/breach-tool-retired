var logging = require("../logging/logging.js");
var settings = require("../settings/settings.js");
const https = require("https");
const requester = require("request");

/* Steps for altering Player account:
    - Take authority
    - Submit request
    - Release authority
*/

exports.fakeResponse = function(formData) {
    var request = JSON.parse(JSON.stringify(formData.request));
    var url = settings.config.api.url;
    var options = {
        url: url + request.uri,
        method: request.type,
        json: true,
        body: request.parameters
    };
    if (formData.accountId) {
        requestAuthority(url, request, function(error, response, body) {
            // send request
            requester(options, function(error, response, body) {
                console.log(response);
                releaseAuthority(url, request, body);
            });
        });
    } else if (formData.accountIds) {
        // Loop above code
    } else {
        // send request without taking account authority
    }
    var req = https.request(options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
        });
    });
    var response = {
        message: "This is a fake response sent by the backend while awaiting a real API. Your sent data is attached.",
        success: true,
        sentData: formData,
        testArray: [
            1,
            "Hello",
            "Testing an array"
        ]
    };
    logging.logRequest("DummyUser", formData, request, response);
    return JSON.stringify(response);
}

function requestAuthority(url, request, callback) {
    requester({
        url: url + "/api/cs/accountauthority/takecontrol",
        method: "POST",
        json: true,
        body: {CSAgentId: request.CSAgentId, AccountId: formData.accountId, Memo: "CSAgent: " + request.CSAgentId + " || Account authority request."}
    },
    function(error, response, body) {
        if (error) {
            console.log("Error: " + error);
        } else {
            callback(error, response, body);
        }
    });
}

function releaseAuthority(url, request) {
    requester({
        url: url + "/api/cs/accountauthority/releasecontrol",
        method: "POST",
        json: true,
        body: {CSAgentId: request.CSAgentId, AccountId: formData.accountId, Memo: "CSAgent: " + request.CSAgentId + " || Account authority release request."}
    }, function(error, response, body){});
}