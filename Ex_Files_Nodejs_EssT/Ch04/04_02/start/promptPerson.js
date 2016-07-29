
// readline is a wrapper around standard input and standard output

var readline = require('readline');

// create an instance of the readline object which will create prompt for me by sending it the standard input and standard output objects.
var rl = readline.createInterface(process.stdin, process.stdout);

// an object for a real person where we save the name of the person and what they might say.
var realPerson = {
    name: '',
    sayings: []
};

/*
 * In order to ask a question with readline, all you need to do is invoke rl.question
 * first argument is the question that will show up in the terminal. second argument is the function
 * that is invoked when we have an answer from the terminal
 */
rl.question("What is the name of a real person? ", function(answer) {

    // set the real person's name
    realPerson.name = answer;

    // setPrompt() useful for asking a question over and over again. it literally sets the readline prompt
    rl.setPrompt(`What would ${realPerson.name} say? `);

    // display the prompt
    rl.prompt();

    // this event will fire when the user submits an answer (i think technically when they hit return to enter a "line")
    rl.on('line', function(saying) {

        // add the saying to the array
         realPerson.sayings.push(saying.trim());

        // check to see if the user entered the word exit
        if (saying.toLowerCase().trim() === 'exit') {
            // close the readline instance
            rl.close();
        } else { // keep prompting
            rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
            rl.prompt();
        }

    });

});

// when the realine close event is triggered (when the readline instance is closed)
rl.on('close', function() {

    /*
     * Placing a %s in the console log is a placeholder for a string.
     * So what it will do is it will replace the second argument that we have added with that string.
     * So here I will add realPerson.name. The next thing that we're going to go ahead and do is write a
     * sentence, is a real person that says. And now I'm going to add a %j here.
     * This %j will replace this variable with a JSON String.

      */
    console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
    process.exit();

});



