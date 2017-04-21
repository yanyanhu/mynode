var events = require("events");
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log("Connection building succeeded.");
    setTimeout(function() {
        eventEmitter.emit("data_received", "UserA");
    }, 3000);
};

eventEmitter.on("connection", connectHandler);

data_receiver1 = function(user) {
    console.log(user);
    console.log("Data receiving succeeded.");
};

data_receiver2 = function() {
    console.log("Data receiving succeeded too.");
};

eventEmitter.on("data_received", data_receiver1);
eventEmitter.addListener("data_received", data_receiver2);

numListeners1 = events.EventEmitter.listenerCount(eventEmitter, "connection");
numListeners2 = events.EventEmitter.listenerCount(
    eventEmitter,
    "data_received"
);
console.log(numListeners1, numListeners2);

eventEmitter.emit("connection");

console.log("======================");

var t = setTimeout(function() {
    console.log("Remove one listener on data_received");
    eventEmitter.removeListener("data_received", data_receiver2);
    numListeners1 = events.EventEmitter.listenerCount(
        eventEmitter,
        "connection"
    );
    numListeners2 = events.EventEmitter.listenerCount(
        eventEmitter,
        "data_received"
    );
    console.log(numListeners1, numListeners2);
    eventEmitter.emit("connection");
}, 10000);

//clearTimeout(t)

eventEmitter.emit("data_received", "UserB");
console.log("-----------------------");

//while (true) {
//    1 + 1
//}
