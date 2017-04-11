var assert = require('assert')
var rewire = require('rewire')
var cal = rewire('study/basic/cal.js')


describe('cal', function() {
    describe('add', function () {
        it('Should return the sum of two input value.', function() {
            add = cal.__get__('add')
            assert.equal(3, add(1, 2))
        })

        it('Should always return 0', function () {
            mock_add = function(a, b) {
                return 0
            }
            cal.__set__('add', mock_add)
            assert.equal(0, cal.Add(1, 2))
        })
    })
})
