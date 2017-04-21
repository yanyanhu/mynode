var assert = require("assert");
var rewire = require("rewire");
var cal = rewire("study/basic/cal.js");

describe("cal", function() {
    describe("add", function() {
        it("Should return the sum of two input value.", function() {
            const add = cal.__get__("add");
            assert.equal(3, add(1, 2));
        });

        it("Should always return mock value", function() {
            const mock_add = function(a, b) {
                return 0;
            };
            const mock_add2 = function(a, b) {
                return 1;
            };
            cal.__set__("add", mock_add);
            assert.equal(0, cal.Add(1, 2));
            cal.__set__("add", mock_add2);
            assert.equal(1, cal.Add(1, 2));
        });
    });
});
