var http = require("http");
var url = require("url");

function start(port, route) {
  function onRequest(request, response) {
    var path = url.parse(request.url).path;
    route(path);
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello, world\n");
  }

  http.createServer(onRequest).listen(port);
  console.log("Server running at http://127.0.0.1:" + port + "/");
}

exports.start = start;
