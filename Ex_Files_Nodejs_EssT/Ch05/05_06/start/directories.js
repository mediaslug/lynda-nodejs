var fs = require('fs');

// simple example of renaming a dir
// fs.renameSync('./assets/logs', './logs');
// console.log('directory moved');

// removing a dir asynchronously

fs.rmdir('./assets', function(err) {
    if (err) {
        throw err;
    }

    // throwing the error will cause javascript to stop executing, so if we have made it this far, then then was no error so log success
    console.log('assets directory removed');

});

// remove the logs dir (but it is not empty). therefore we need to unlink the files

// first get a list of the files in the dir, then unlink them. there are two ways to do this, both illustrated below.

// more readable
// var files = fs.readdirSync('./logs');
// files.forEach(function(fileName) {
//     fs.unlinkSync('./logs/' + fileName)
// })

// more javascripty
fs.readdirSync('./logs').forEach(function(fileName) {
    fs.unlinkSync('./logs/' + fileName)
})


fs.rmdir('./logs', function(err) {
    if (err) {
        throw err;
    }
    console.log('logs directory removed');

});