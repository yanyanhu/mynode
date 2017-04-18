var assert = require("assert");
var sinon = require("sinon");
var once = require("study/sinon_try/once.js").once;

describe("sinon", function() {
  describe("stub", function() {
    it("Returns the return value from the original function", function() {
      var callback = sinon.stub().returns(111);
      var proxy = once(callback);
      assert(111, proxy());
    });
  });
});
