var readline = require('readline');
var fs = require("fs");

var rl = readline.createInterface(process.stdin, process.stdout);

var realPerson = {
	name: '',
	sayings: []
};


rl.question("What is the name of a real person? ", function(answer) {

	realPerson.name = answer;

	// create the markdown file using fs.writeFileSync

	// we're using Sync because  In this case, this application only has one user. It runs in the terminal,
	// so we're not going to have a blocking request that will cause delays for other users. also since we are doing this
	// asynchronously, there is no need to add a callback function. we also want to make sure that we have the file before we prompt the user.
	// need to have the file before we start appending to the file

	fs.writeFileSync(realPerson.name + ".md", `${realPerson.name}\n=======================\n\n`);

	rl.setPrompt(`What would ${realPerson.name} say? `);

	rl.prompt();

	rl.on('line', function(saying) {

		realPerson.sayings.push(saying.trim());

		// append sayings to the file.

		// example given is asynchronously appending, but he mentions that it doesn't matter and
		// also we do not include a call back function. it seems error handling would be good for a callback function though
		// what if we can't append? (he mentions we're just not doing error handling on this iteration

		fs.appendFile(realPerson.name + ".md", `* ${saying.trim()}\n` ) // the * is for the markdown bullet point, not a special symbol in this code

		if (saying.toLowerCase().trim() === 'exit') {
			rl.close();
		} else {
			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
		    rl.prompt();
		}

	});

});


rl.on('close', function() {

	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
	process.exit();
	
});



