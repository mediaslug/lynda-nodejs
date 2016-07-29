// spawn is made for longer ongoing processes with large amounts of data
// you can communicate with those processes via stdin and stdout


var spawn = require("child_process").spawn;

// equivalent to typing "node alwaysTalking"
var childProcess = spawn("node", ["alwaysTalking"])

childProcess.stdout.on("data", function(data) {
    console.log(`STDOUT: ${data.toString()}` );
});

childProcess.on("close", function() {
    console.log("Child process has ended");

    // when the child process ends, we will also end this process
    process.exit();
})

// let the process run for a few seconds
setTimeout(function() {
    // we can send data to the child process by using the stdin object
    // Any data that we send to the alwaysTalking application will cause
    // it to stop the interval and also exit the application.
    childProcess.stdin.write('stoop'); // purposefully typed stoop, rather than stop to test the assertion that any data stops the process

}, 4000)

