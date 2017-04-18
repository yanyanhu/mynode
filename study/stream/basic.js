var fs = require("fs");
var data = "";

var readerStream = fs.createReadStream("input.txt");
var writerStream = fs.createWriteStream("output.txt");

readerStream.setEncoding("UTF8");

readerStream.on("data", function(chunk) {
  data += chunk;
});

readerStream.on("end", function() {
  console.log(data);
  writerStream.write(data, "UTF8");
  writerStream.end();
});

readerStream.on("error", function(err) {
  console.log(err.stack);
});

console.log("Read stream example, done");

writerStream.on("finish", function() {
  console.log("Finish writing");
});

writerStream.on("error", function(err) {
  console.log(err.stack);
});

console.log("Write stream example, done");
