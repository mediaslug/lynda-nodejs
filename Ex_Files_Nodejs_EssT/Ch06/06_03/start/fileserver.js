var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res) {
    console.log(`${req.method} request for ${req.url}`);
    if (req.url === '/') {
        fs.readFile('./public/index.html', 'UTF-8', function(err, html) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(html);
        });
    } else if (req.url.match(/.css$/)) {
        var pathToCSSFile = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(pathToCSSFile, "UTF-8"); // create a read stream to the css file

        // send the header
        res.writeHead(200, {'Content-Type': 'text/css'});

        // pipe the stream along to the response. we can take a readstream and pipe it to a writable stream
        fileStream.pipe(res);


    } else if (req.url.match(/.jpg$/)) {
        var pathToImageFile = path.join(__dirname, 'public', req.url);
        var imageStream = fs.createReadStream(pathToImageFile); // create a read stream to the image file, this is a binary stream, so we remove UTF-8
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        imageStream.pipe(res);
        console.log('a request for a jpeg was made');

    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('no soup for you.')
    }
}).listen(3000);
console.log('server running on port 3000');

