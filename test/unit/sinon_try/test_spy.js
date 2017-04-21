var assert = require("assert");
var sinon = require("sinon");
var once = require("study/sinon_try/once.js").once;

describe("sinon", function() {
    describe("spy", function() {
        it("Calls the original function", function() {
            var callback = sinon.spy();
            var proxy = once(callback);
            proxy();
            assert(callback.called);
        });
        it("Calls the original function only once", function() {
            var callback = sinon.spy();
            var proxy = once(callback);
            proxy();
            proxy();
            assert(callback.calledOnce);
        });
        it("Calls the original function with correct `this` and args", function() {
            var callback = sinon.spy();
            var proxy = once(callback);
            var obj = {};
            proxy.call(obj, 1, 2, 3);
            assert(callback.calledOn(obj));
            assert(callback.calledWith(1, 2, 3));
        });
    });
});
