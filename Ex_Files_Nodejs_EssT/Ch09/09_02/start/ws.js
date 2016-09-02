// NOTE: this code is not working as described.
// There is no content in the "finished" folder to compare it with.
// in fact the code in the start folder contained all of the completed code, but it still no work


// construct a web sockets server using the native web sockets constructor
var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({ port: 3000 });

wss.on("connection", function(ws) {

	ws.on("message", function(message) {

		if (message === 'exit') {
			ws.close();
		} else {
            // wss.clients is an array of all the connected clients. since it is an array, we can loop through it
            // and forEach takes a callback function that will be invoked once for each of the clients

			wss.clients.forEach(function(client) {
				client.send(message);
			});
		}

	});

	ws.send("Welcome to cyber chat");

});