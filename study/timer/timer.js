function myPrint() {
    console.log("Hello, timer");
}

interval = setInterval(myPrint, 2000);

console.log("====%s %s====", "timer", "test");

console.time("timerTest");

setTimeout(function() {
    clearInterval(interval);
    console.timeEnd("timerTest");
}, 10000);
