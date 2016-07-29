var fs = require("fs");

// read the contents of the dir synchronously. FYI: reading files synchronously is a blocking operation, so it blocks the single nodejs thread
// this is good for reading configuration files when starting the app
var files = fs.readdirSync('./lib');
console.log(files);


// to read files asynchronously, we'll remove Sync from the function name and use a callback function

fs.readdir('./lib', function(err, files) {
    if (err) {
        throw err; // throwing the error kills the process, simply logging the error with console.log just displays it, but process keeps running
    }
    else {
        console.log(files);
    }

console.log("reading files asynchronously");
});
