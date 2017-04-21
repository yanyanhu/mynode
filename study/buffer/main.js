buf = new Buffer(128);
len = buf.write("hello, world");

console.log(len);

buf2 = new Buffer(26);

for (var i = 0; i < 26; i++) {
    buf2[i] = i + 97;
}

console.log(buf2.toString("ascii"));
console.log(buf2.toString("ascii", 0, 5));
console.log(buf2.toString("utf8", 0, 5));
console.log(buf2.toString(undefined, 0, 5));

var json = buf2.toJSON(buf);
console.log(json);

buf3 = new Buffer(6);
for (var i = 0; i < 26; i++) {
    buf3[i] += 97;
}

buf4 = Buffer.concat([buf2, buf3]);
console.log(buf4);
