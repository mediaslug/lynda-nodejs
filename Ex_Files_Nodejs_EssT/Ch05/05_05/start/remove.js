var fs = require('fs');

// delete the config file synchronously
// because this is synchronous if there are any problems, it will automatically throw an error.
// we can handle that with a try, catch
try {
    fs.unlinkSync('./lib/config.json');
    console.log('config file deleted');
} catch (err) {
    console.log(err);
}

// delete the notes file asynchronously

fs.unlink('notes.md', function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log('notes deleted.')
    }
})
