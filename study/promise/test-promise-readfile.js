fs = require('fs')

function readFileAsync(file, encoding, cb) {
    if (cb) return fs.readFile(file, encoding, cb)

    return new Promise(function(resolve, reject) {
        fs.readFile(file, encoding, function(err, data) {
            if (err) return reject(err)
            resolve(data)
        })
    })
}

// Try to read file using promise way
readFileAsync('example_log.txt').then(console.log, console.error)

// Try to read file using callback way
readFileAsync('example_log.txt', 'utf8', function(err, data) {
    if (err) console.error(err)
    console.log(data)
})

//function doExtraOp(data) {
//    return new Promise(function(resolve, reject) {
//        console.log("Do extra operation")
//        return resolve(data)
//        //return reject(new Error('Error happened for doing extra operation.'))
//    })
//}

function doExtraOp(data) {
    console.log("Do extra operation")
    return data
}

// Promise chain
readFileAsync('example_log.txt').then(doExtraOp, console.error).then(console.log, console.error)

// Parallel operations
//var allPromise = Promise.all([readFileAsync('example_log.txt'), readFileAsync('example_log.txt')])
//allPromise.then(console.log, console.error)
