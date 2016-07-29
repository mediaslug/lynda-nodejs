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

util.inherits(Person, EventEmitter);

var ben = new Person("Ben Franklin");
ben.on('speak', function (said) {
    console.log('the speak event was raised');
    console.log(`${this.name}: ${said}`);
});

/*
 * whenever ben emits a speak event, any listeners that listen for the speak event,
 * like the one we've wired up on line 19, will fire their custom callbacks.
 */
ben.emit('speak', "You may delay, but time will not");