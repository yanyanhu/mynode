import { describe } from "mocha";

function requireAll(r) {
    r.keys().forEach(r);
}
describe("***E2E TEST***", function() {
    requireAll(require.context(".", true, /\.js$/));
});
