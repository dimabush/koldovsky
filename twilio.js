var client = require('twilio')('ACCOUNT_SID', 'AUTH_TOKEN');
    // ACCOUNT_SID & AUTH_TOKEN taken from your account from https://www.twilio.com/console

function sendMessage(message) {

    client.sendMessage({

        to: '+380960123456', // receiver the message
        from: '+14253583337 ', // a number you bought from Twilio and can use for outbound communication
        body: message

    }, function (err, responseData) {
        if (!err) {
            console.log(responseData.from);
            console.log(responseData.body);
        } else {
            console.log(err);
        }
    });
}

var moduleManager = {
    sendMessage: function (message) {
        return sendMessage(message);
    }
};

module.exports = moduleManager;