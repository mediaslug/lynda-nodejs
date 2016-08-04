var fs = require('fs');

// readfile waits until the entire file is read before invoking the callback function (which makes sense to me)
// it also buffers the entire file in one variable, which could create latency and impact our memory if files are huge (yuge)
//
// fs.readFile('./chat.log','UTF-8',function(err, chatLog){
//     console.log(`file read ${chatLog.length}`);
// })

// so, the solution for handling large files is to use a readable stream.
var stream = fs.createReadStream('./chat.log','UTF-8');

// Great, so now, as opposed to waiting for the entire file to be read, we can use this stream to
// start receiving small chunks of data from this file. So, the very first thing I'm going to
// do is use a variable to concatenate all of those data chunks. So here on line five,
// I've created a data variable and we're going to concatenate the content of the chat log into this variable.
// So, what we can do is listen for data events on our stream.

var data = ";"

// when we receive data, initially we want to have a little heading. the following code is only executed once
stream.once('data', function() {
    console.log("\n\n\n");
    console.log("Started Reading the file");
    console.log("\n\n\n");
})

/*
 * So whenever we raise a data event, what I'm going to go ahead and do is just display the length of each of these file
 * chunks to the terminal. So I will use the standard output write method to do that and we'll also write a template string.
 * So I'm going to let our users know we have a chunk coming. That's the length of the chunk. And then I will put a little
 * pipe in there just to separate further chunks. So as these data events are actually being raised, we also need to
 * concatenate each of these data chunks.
 */

stream.on('data', function(chunk) {
    //process.stdout.write(`    chunk: ${chunk.length} |`);
    // was curious why he chose stdout, rather than console.log. i think it was just for readability. here it is with console.log
    console.log(`    chunk: ${chunk.length} |`);

    data += chunk;
})

// wire up a listener for when this stream has finished reading the entire file, which is known as an "end" event
stream.on('end', function() {
    console.log("\n\n\n");
    console.log(`Finished Reading the file ${data.length}`);
    console.log("\n\n\n");
})
