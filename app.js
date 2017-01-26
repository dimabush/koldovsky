var accountSid = '{{ ACcd73821130e1c91f263171c6e3771018 }}';
var authToken = '{{ 6e4ccd6ca0591ff66e8615ce05a7af4f }}';
var redisOptions = {
    host: '127.0.0.1',
    port: 6379
};

var twilio = require('twilio');
var client = new twilio.RestClient(accountSid, authToken);
var redis = require("redis"),
    sub = redis.createClient(redisOptions);

sub.on("message", function (channel, message) {
    console.log("sub channel " + channel + ": " + message);

    client.messages.create({
        body: message,
        to: '+380639900996',  // Text this number
        from: '01234567890' // a valid Twilio number
    }, function (err, message) {
        console.log(message.sid);
    });
});