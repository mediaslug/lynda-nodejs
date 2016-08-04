// we're going to create a person object that inherits the even emitter

// get the event emitter directly
var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function (name) {
    this.name = name;
}

/*
* The utilities module has an inherits function, and it's a way that we can add a object to the
* prototype of an existing object. That's how JavaScript handles inheritance.
 */

util.inherits(Person, EventEmitter); // so, the person object inherits the eventemitter

// instantiate a new person and send it a name
var ben = new Person("Ben Franklin");

/*
 * if a "speak event is raised, whatever ben said is passed to this function
 */
ben.on('speak', function (said) {
    console.log('the speak event was raised');
    console.log(`${this.name}: ${said}`);
});

/*
 * whenever ben emits a speak event, any listeners that listen for the speak event,
 * like the one we've wired up on line 19, will fire their custom callbacks.
 *
 * In this case, we are passing You may delay, but time will not to that callback function as the said variable.
 * When this happens, we're going to log the name of the person, and we're also going to log what they just said with
 * the recent speak event.
 */
ben.emit('speak', "You may delay, but time will not");