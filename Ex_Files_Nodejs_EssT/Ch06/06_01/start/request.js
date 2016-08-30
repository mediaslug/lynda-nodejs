var https = require('https');
var fs = require('fs');

// create an "object literal for the options" that we will pass to the request
var options = {
    hostname: "en.wikipedia.org",
    port:4433,
    path:"/wiki/George_Washington",
    method:'GET'
};

// start http request
var req = https.request(options, function(res){

    var responseBody = ""; // for the response body. chunks will be concatenated into this var
    console.log("response from the server is started");
    console.log(`Server status: ${res.statusCode}`);
    console.log("Response Headers %j", res.headers);

    res.setEncoding("UTF-8"); // set encoding on the response

    // log the first chunk only
    res.once("data", function(chunk) {
        console.log(chunk);
    });

    // log chunk length and concat with body for all chunks
    res.on('data', function(chunk) {
        console.log(`--chunk--  ${chunk.length}`);
        responseBody += chunk;
    });

    // at the end of the response, write out the file
    res.on("end", function() {
        fs.writeFile("george-washington.html", responseBody, function(err) {
            if (err) {
                throw err;
            }
            console.log('file downloaded');
        });
    });

});

// check for errors
req.on("error", function (err)  {
    console.log(`problem with request ${err.message}`);
    console.log(err.message);
});

// end the request
req.end();