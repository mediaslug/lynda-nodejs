
// require the Person object from a separate file
var Person = require('./lib/Person')

// create two new people based on the Person object
var ben = new Person("Ben Franklin");
var george = new Person("George Washington");

george.on('speak', function(said) {
	console.log(`${this.name} -> ${said}`);
});

ben.on('speak', function(said) {
	console.log(`${this.name}: ${said}`);
});


// ben emits a speak event
ben.emit('speak', "You may delay, but time will not.");

// george emitting a speak event
george.emit('speak', "It is far better to be alone than to be in bad company.");
