
// executing external processes
// processes with small bits of data are perfect for execute where as spawn is made for longer ongoing processes with large amounts of data
// the commands called here give us a small amount of data and then immediately end.

var exec = require("child_process").exec;

// perform a directory listing
exec("dir", function(err, stdout){
   if (err) {
       throw err;
   } else {
       console.log("listing finished");
       console.log(stdout);
   }

});

// check the version of git
exec("git version", function(err, stdout){
    if (err) {
        throw err;
    } else {
        console.log("git version check finished");
        console.log(stdout);
    }

});