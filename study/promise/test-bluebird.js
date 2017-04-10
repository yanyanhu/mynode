var Bluebird = require('bluebird')
var fs = require('fs')
var fs = Bluebird.promisifyAll(fs)

var promise = fs.readFileAsync('example_log.txt')

promise.then(console.log, console.error)
