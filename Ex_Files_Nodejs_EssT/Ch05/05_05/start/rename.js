var fs = require('fs');

// rename config file
fs.renameSync('./lib/project-config.js', './lib/config.json');
console.log("file renamed")


// rename the notes file, asynchronously

fs.rename('./lib/notes.md', './notes.md', function(err){
    if (err) {
        console.log(err);
    } else {
        console.log('file renamed');
    }
});
