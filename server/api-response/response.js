exports.fakeResponse = function(formData) {
    return JSON.stringify({
        message: "This is a fake response sent by the backend while awaiting a real API. Your sent data is attached.",
        success: true,
        sentData: formData,
        testArray: [
            1,
            "Hello",
            "Testing an array"
        ]
    });
}