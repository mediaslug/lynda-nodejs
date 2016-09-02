var express = require("express");

var app  = express();

// add middleware
// customized plugins that we can use with express to add functionality to our application


// custom middleware function to log the requests, which is a callback function that will be invoked on each request
// each piece of middleware is a function that will have 3 arguments (request, response and the next function that will be invoked once you finish)
app.use(function(req, res, next) {
    console.log(`${req.method} ${req.url}`)

    // invoke the next function to move on to the next piece of middleware
    next();
});

// serve up the public directory
app.use(express.static("./public"));

app.listen(3000);
console.log("express app running on port 3000");
module.exports = app;