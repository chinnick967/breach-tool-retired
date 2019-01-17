var mongo = require('../db/connect.js');

exports.logRequest = function(user, sentData, receivedData) {
    var log = {
        user: user,
        sentData: sentData,
        receivedData: receivedData,
        timeStamp: new Date()
    };
    mongo.db.collection("Logs").insertOne(log);
}