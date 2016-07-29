var questions = ["What's your name?",
    "What's your favorite hobby?",
    "What's your preferred programming language?"];

var answers = [];

function ask(i) {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write('   >   ');
}

// add a listener to listen for user input
process.stdin.on('data', function(data) {
    // process.stdout.write('\n' + data.toString().trim() + '\n');
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
})

// add a listener to listen for an exit event to do a couple of things before the script exits
process.on('exit', function() {
    // display the answers back to the user
    process.stdout.write('\n\n\n\n');
    process.stdout.write(`Go ${answers[1]}, ${answers[0]}. You can finish writing ${answers[2]} later.`);
    process.stdout.write('\n\n\n\n');
})

ask(0);