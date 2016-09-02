var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require('body-parser');

var skierTerms = [
    {
        term: "Rip",
        defined: "To move at a high rate of speed"
    },
    {
        term: "Huck",
        defined: "To throw your body off of something, usually a natural feature like a cliff"
    },
    {
        term: "Chowder",
        defined: "Powder after it has been sufficiently skied"
    }
];

// add body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	next();
});

app.use(express.static("./public"));

app.use(cors());

app.get("/dictionary-api", function(req, res) {
	res.json(skierTerms);
});

app.post("/dictionary-api", function (req, res) {
    skierTerms.push(req.body);
    res.json(skierTerms);
});

app.delete("/dictionary-api/:term", function(req, res) {
    skierTerms = skierTerms.filter(function(definition) { // this call back function is called once for every item in the array. it is a predicate and thus should only return true or false
        // filter out any terms that were sent as a routing parameter
        return definition.term.toLowerCase() !== req.params.term.toLowerCase();
    });

    res.json(skierTerms);
}) ;
app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;