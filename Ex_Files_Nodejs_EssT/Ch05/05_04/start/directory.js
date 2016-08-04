var fs = require('fs');

if (fs.existsSync('lib')) {
    console.log('directory exists already');
} else {
    fs.mkdir('lib', function(err) { // if it can't create a directory, an error is passed to my callback function
        if (err) {
            console.log(err);
        } else {
            console.log("directory created.")
        }
    })
}
