import { describe, it } from "mocha";
import Nightmare from "nightmare";

//var nv = Nightmare.version;
//console.log(nv);
const testURL = "http://yahoo.com";

describe("nightmare-try", function() {
    this.timeout(60000);
    it("Search for nightmare github address", async function() {
        const nightmare = Nightmare({ show: true });
        await nightmare
            .goto(testURL)
            .type('form[action*="/search"] [name=p]', "github nightmare")
            .click('form[action*="/search"] [type=submit]')
            .wait("#main")
            .evaluate(function() {
                return document.querySelector(
                    "#main .searchCenterMiddle li a"
                ).href;
            })
            .end()
            .then(function(result) {
                console.log(result);
                assert.equal(result, "https://github.com/segmentio/nightmare");
            })
            .catch(function(error) {
                console.error("Search failed:", error);
            });
    });
});
