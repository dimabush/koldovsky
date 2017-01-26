/*var redisOptions = {
    host: '127.0.0.1',
    port: 6379
};

var redis = require("redis"),
    redisClient = redis.createClient(redisOptions);*/


var redis = require("redis");
var sub = redis.createClient();



sub.on("message", function (channel, message) {
    console.log("sub channel " + channel + ": " + message);



});

// sub.subscribe("a nice channel");