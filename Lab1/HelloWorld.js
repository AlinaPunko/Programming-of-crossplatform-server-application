var http = require('http');

http.createServer(function(request, response)
    {
response.writeHead(200,{'ContentType':'text/html'} );
response.end('<H1>Hello World</H1>\n')
    }
).listen(3000);
console.log('Server is working');
