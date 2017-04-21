const assert = require("assert");
const sinon = require("sinon");
const once = require("../../../../study/sinon_try/once.js").once;

describe("sinon", function() {
    describe("stub", function() {
        it("Returns the return value from the original function", function() {
            const callback = sinon.stub().returns(111);
            const proxy = once(callback);
            assert(111, proxy());
        });
    });
});
