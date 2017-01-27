var SmsUkraine = require("node-smsukraine");
var sms = new SmsUkraine({login: "my_login", pass: "my_pass", from: "sender name", name: "my_sms_name"});
    // login - your login in the system;
    // pass - your password;
    // name - your sms name;
    // from - sender name;

function sendMessage(message) {

    var data = {"to": "380970123456", "text": message}; // "to" - receiver the message
    sms.send(data, function (err, sms_data) {
        if (err) return console.log(JSON.stringify(err));
        console.log(JSON.stringify(sms_data));
    });
}

var moduleManager = {
    sendMessage: function (message) {
        return sendMessage(message);
    }
};

module.exports = moduleManager;


