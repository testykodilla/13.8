var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        response.write('<h1>GITARA SIEMA!</h1>');
        response.end();
    }

           else {
        fs.readFile('./404.jpg', function (err, data) {
            response.statusCode = 404;
            response.setHeader("Content-Type", "image/jpg; charset=utf-8");
            response.write(data);
            response.end();
        })}});

server.listen(8900);