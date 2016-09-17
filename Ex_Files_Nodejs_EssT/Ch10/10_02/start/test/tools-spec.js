var expect = require("chai").expect;
var tools = require("../lib/tools");

describe("Tools", function() {
	describe("printName()", function() {
		it("should print the last name first", function() {
			var results = tools.printName({ first: "Alex", last: "Banks"});
			expect(results).to.equal("Banks, Alex");
		});

	});

	describe(loadWiki(), function() {
		it("should load abraham lincoln's wikipedia page");
	});

});
