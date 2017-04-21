const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("hello, world");
});

const server = app.listen(8081, function() {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Address to access: http://%s:%s", host, port);
});
