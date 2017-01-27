// var twilio = require('./twilio');
var smsUkraine = require('./sms-ukraine');

var redisOptions = {
    host: '127.0.0.1',
    port: 6379
};

var redis = require("redis"),
    sub = redis.createClient(redisOptions);

sub.on("message", function (channel, message) {
    console.log("sub channel " + channel + ": " + message);

    // twilio.sendMessage(message);

    smsUkraine.sendMessage(message);

});




