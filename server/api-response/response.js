var logging = require("../logging/logging.js");

exports.fakeResponse = function(formData) {
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
    logging.logRequest("DummyUser", formData, response);
    return JSON.stringify(response);
}