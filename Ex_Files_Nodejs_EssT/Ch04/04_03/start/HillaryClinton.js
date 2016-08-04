/*
* Another powerful feature that ships with NodeJS is the event emitter, which is
* the Node's implementation of the pub/sub design pattern and it allows us
* to create listeners for and emit custom events
* 
 */

var events = require('events');

// the EventEmitter itself is a constructor. So, create a new instance of a variable called emitter.
var emitter = new events.EventEmitter();

/*
 So, every time we use on, we can wire up a custom event. You can name an event whatever you like.
 In this case, I've just called this customEvent. The second argument that the on function takes is a
 callback function that will be invoked when the custom event is raised.
 In this case, our custom event is going to pass a message and a status to this function as arguments.
 So, when our custom event occurs, this callback function will be invoked asynchronously.
 Let's just go ahead and log the status in the message using template string.
 */

emitter.on('customEvent', function(message, status) {
    console.log(`${status}: ${message}`);
});

/*
*  The next part of the EventEmitter is the ability to trigger or emit custom events.
*  We can trigger or emit a custom event with the emit function. So, emitter.emit will fire our custom event.
*
 */

emitter.emit('customEvent', "Deal me in", 200);