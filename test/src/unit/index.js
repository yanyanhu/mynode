import { describe } from "mocha";

function requireAll(r) {
    r.keys().forEach(r);
}
describe("***UNIT TEST***", function() {
    requireAll(require.context(".", true, /\.js$/));
});
