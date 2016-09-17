var expect = require("chai").expect;
var tools = require("../lib/tools");
var nock  = require("nock");

describe("Tools", function() {
    describe("printName()", function() {
        it("should print the last name first", function() {
            var results = tools.printName({ first: "Alex", last: "Banks"});
            expect(results).to.equal("Banks, Alex");
        });

    });

    describe("loadWiki()", function() {

        before(function() {

            // the code that we want to run before running every test in this suite
            // we want to create a mock webserver for a get request and reply with some simple text and 200 ok

            nock("https://en.wikipedia.org") // any request for this url will hit our mock server
                .get("/wiki/Abraham_Lincoln")
                .reply(200, "Mock Abraham Lincoln Page");

        });

        it("should load abraham lincoln's wikipedia page", function(done) {
            tools.loadWiki({first:"Abraham", last:"Lincoln"}, function(html) {
                // expect(html).to.be.ok;
                // we can be more precise with the mock server and say
                expect(html).to.equal("Mock Abraham Lincoln Page");
                done(); 
            });
        });
    });

});