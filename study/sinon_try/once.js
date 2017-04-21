function once(fn) {
    var returnValue = false;
    var called = false;
    return function() {
        if (!called) {
            called = true;
            returnValue = fn.apply(this, arguments);
        }
        return returnValue;
    };
}

exports.once = once;
