var mongo = require('../db/connect.js');

exports.logRequest = function(user, sentData, request, receivedData) {
    try {
        if (typeof receivedData == "string") {
            receivedData = JSON.parse(receivedData);
        }
    } catch(e) {
        console.log(e);
    } finally {
        var log = {
            user: user,
            request: request,
            sentData: sentData,
            receivedData: receivedData,
            timeStamp: new Date()
        };
        mongo.db.collection("Logs").insertOne(log);
    }
}

exports.fetchLogs = function(callback) {
    mongo.db.collection("Logs").find({}).toArray(function(err, result) {
        if (!err) {
            callback(result);
        } else {
            callback(false);
        }
    });
}