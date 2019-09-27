var http = require('http');
var url=require('url');
var fs = require ('fs');

let fac = (n)=>{return (n<2)?n:fac(n-1)*n;}
http.createServer(function (request, response) {
    let rc=JSON.stringify({ k: 0});
    if (url.parse(request.url).pathname==='/fac')
    {
        console.log(request.url);
        if(typeof url.parse(request.url,true).query.k!="undefined")
        {
            let k = parseInt(url.parse(request.url, true).query.k);
            if(Number.isInteger(k))
            {
                response.writeHead(200,{'Content-type':"application/json;charset=utf-8"});
                response.end(JSON.stringify({k:k, fac:fac(k)}));
            }
        }
    }
    else
    {
        response.end(rc);
    }
}).listen(5000);
console.log("Server running at http://localhost:5000/");
