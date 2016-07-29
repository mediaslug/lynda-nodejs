var fs = require("fs");
var path = require("path");
var md = `
Sample Markdown Title
=====================

Sample Title
------------

* point 
* point 
* point 
* point 
`;
// the callback function will fire once we have created the file or if there was an error
fs.writeFile("sample.md", md.trim(), function(err) {
    if (err) {
       console.log("an error occurred. ")
    } else {
        console.log("file created");

    }
});