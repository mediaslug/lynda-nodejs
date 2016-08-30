var http = require('http');
var data = require('./data/inventory');

http.createServer(function(req, res) {

    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(JSON.stringify(data));
    } else if (req.url === '/instock') {
        listInStock(res);
    } else if (req.url === '/onorder') {
        listOnBackOrder(res);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end ('no soup for you');

    }

}).listen(3000);
console.log('listening on port 3000');


// functions to filter data

function listInStock(res) {
    var inStock = data.filter(function(item) { // this function is a Predicate. It should only return True or False. if it returns true, we are going to add this data item to a new array.if it returns false, we will skip addin this inventory to our new array
        // so, what we want to do is return true/false as to whether this item should be added to the array
        return item.avail == "In stock";
    });

    res.end(JSON.stringify(inStock))
}

function listOnBackOrder(res) {
    var onOrder = data.filter(function(item) { // this function is a Predicate. It should only return True or False. if it returns true, we are going to add this data item to a new array.if it returns false, we will skip addin this inventory to our new array
        // so, what we want to do is return true/false as to whether this item should be added to the array
        return item.avail == "On back order";
    });

    res.end(JSON.stringify(onOrder))

}