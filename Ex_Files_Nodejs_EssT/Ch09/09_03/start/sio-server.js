var express = require("express");
var http = require("http");
var app = express();

// create an http server and pass it the express app instead of building it with a callback function
// we need this server to work with socket.io
var server = http.createServer(app).listen(3000);

// socket.io is a function and when you refer to it, you need to pass it the server on which it should listen for incoming connections
var io = require("socket.io")(server);


// use the express.static middleware to serve files from the public folder
app.use(express.static("./public"));

io.on("connection", function(socket) { // this callback function has the socket passed to it as an argument

    socket.on("chat", function(message) {
    	socket.broadcast.emit("message", message);
    });

	socket.emit("message", "Welcome to Cyber Chat2");

});

console.log("Starting Socket App - http://localhost:3000");