
// construct a web sockets server
var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({port: 3000}); // connect with ws://localhost/yadda/yadda

// fire a call back function when we have a new socket connected

wss.on("connection", function(ws) { // the web socket itself is passed to this function as an argument
    // send a message to the client
    
    ws.send("welcome yadda yadda");
});

console.log('web socket listening on port 3000');