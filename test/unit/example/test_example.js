var assert = require('assert')
var fs = require('fs')


describe('Array', function() {
    describe('#indexOf()', function () {
        it('Should return -1 when the value is not present', function() {
            assert.equal(-1, [1, 2, 3].indexOf(5))
            assert.equal(-1, [1, 2, 3].indexOf(0))
	    })
    })
})

describe('File', function() {
    beforeEach(function() {
        console.log('BeforeEach, File')
    })
    before(function() {
        console.log('Before, File')
    })
    //describe.only('#readFile()', function() {
    describe('#readFile()', function() {
        beforeEach(function() {
    	    console.log('BeforeEach, readFile')
        })
        before(function() {
    	    console.log('Before, readFile')
        })
	    it('Should read tmp without error', function(done) {
	        fs.readFile('test/unit/example/tmp', function(err) {
		    if (err)
		        done(err)
		    else
		        done()
	        })
	    })
        //it.only('Should read tmp2 without error', function(done) {
        it('Should fail to read tmp2', function(done) {
	        fs.readFile('tmp2', function(err) {
	        if (err)
	            done()
	        else
	            done(new Error("tmp2 should not exist!"))
	        })
	    })
    })

    describe('#writeFile()', function() {
        before(function() {
	        console.log('Before, writeFile')
        })
	    after(function() {
    	    console.log('After, writeFile')
	    })
	    it.skip('[WIP]Should write tmp without error', function() {
	        throw err
	    })
    })
})
