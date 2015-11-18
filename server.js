var http = require('http');

var requestListener = function (req, response) {
    response.end("hello world")
    response.writeHead(200)
    
}

var server = http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP);