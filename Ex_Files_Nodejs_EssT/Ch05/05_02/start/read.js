var fs = require("fs");
var path = require("path");

// use file system module to read in a file
// fs.readFile("./lib/sayings.md", "UTF-8", function(err, contents) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(contents);
//     }
// });

// let's combine readdir and readfile
// use readdir and readFile to grab all of the contents of all files in a directory

fs.readdir("./lib", function(err, files) {
    if (err) {
        console.log(err);
    }
    else {
        files.forEach(function(fileName) {
            // generate full path to file
            file = path.join(__dirname, "lib", fileName);

            // get the stats on the file (synchronously), which will tell me if it is a file or a directory (and few other things)
            var stats = fs.statSync(file);

            // determine if the file exists and is not a system file
            if (stats.isFile() && fileName !==".DS_Store") {
                fs.readFile(file, "UTF-8", function(err, contents) {
                    console.log(contents);
                })
            }
        })
    }
})


