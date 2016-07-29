var readline = require("readline"); // used to clear the line and set cursor position

var waitTime = 3000; // 3 seconds
var currentTime = 0;
var waitInterval = 10; // half a second
var percentWaited = 0;

// write the percentage over the last line in the terminal
function writeWaitingPercent(p) {
    // approach presented in class
    // process.readline.clearLine(); // clear the last line inside of the terminal
    // process.stdout.cursorTo(0); // move the cursor back to the start of the line

    // approach from stack overflow. due to change in node version
    readline.clearLine (process.stdout);
    readline.cursorTo(process.stdout,0);
    process.stdout.write(`waiting ... ${p}%`);

    // write the percentage

}

// log how long we've been waiting
var interval = setInterval( function() {
    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime/waitTime) * 100);
   // console.log(`waiting ${currentTime/1000}`)

    // display the time as a percentage
    writeWaitingPercent(percentWaited);

}, waitInterval)

// wait for the specified amount of time then fire the callback function
setTimeout(function() {
    clearInterval(interval);
    writeWaitingPercent(100);
    console.log('\n\ndone\n\n');
}, waitTime)

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);