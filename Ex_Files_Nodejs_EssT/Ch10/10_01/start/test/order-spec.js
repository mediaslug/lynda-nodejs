var expect = require("chai").expect;
var rewire = require("rewire")

// use rewire to require our system under test (SUT).
var order = rewire("../lib/order");

var sinon = require("sinon");
describe("ordering items", function() {
    beforeEach(function () {
        this.testData = [
            {sku: "AAA", qty:10},
            {sku: "BBB", qty:0},
            {sku: "CCC", qty:3},
        ];
        // create mock console object
        this.console = {
            log: sinon.spy()
        };

        this.warehouse = {
            packageAndShip: sinon.stub().yields(10987654321)
        };

        order.__set__("inventoryData", this.testData); // replace inventory data with our mock data
        order.__set__("console", this.console); // replace the console with our mock console
        order.__set__("warehouse", this.warehouse); // replace the pacakage and ship function with our sinon stub
    });

    it("Logs when 'item not found'", function() {
        order.orderItem("ZZZ", 10);
        expect(this.console.log.calledWith("Item - ZZZ not found")).to.equal(true);

    });

    it("should order an item when there are enough in stock", function(done) {
        // this to refer to the actual mocha object and the _this is what we can use in the
        // orderItem function because the mocha object falls out of scope as soon as we enter the orderItem function, but we still have it as _this
        var _this = this;
        order.orderItem("CCC", 3, function() {
            expect(_this.console.log.callCount).to.equal(2); // we're expecting that the console log would have been called twice
            done();
        });
    });

    describe("warehouse interaction", function() {

        beforeEach(function() {

            this.callback = sinon.spy();
            // invoke the order item function
            order.orderItem("CCC", 2, this.callback);
        });
        it("receives a tracking number", function() {
            expect(this.callback.calledWith(10987654321))
        });

        it("calls packageAndShip with the correct sku quantity", function() {
            expect(this.warehouse.packageAndShip.calledWith("CCC", 2)).to.equal(true);
        });
    });
});