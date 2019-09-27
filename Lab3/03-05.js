const http = require('http');
const fs = require('fs');
const url = require("url");

function fac(acc, num, callback) {
    if (num === 0) { callback(acc); }
    else {
        setImmediate(() => fac(acc * num, num - 1, callback));
    }
}

http.createServer(function(req, resp) {
    let request_url = req.url;
    if(url.parse(request_url).pathname === '/fac') {
        if (typeof url.parse(request_url,true).query.k != "undefined"){
            let k = parseInt(url.parse(request_url, true).query.k);
            if (Number.isInteger(k)){
                resp.writeHead(200, {"Content-Type":"application/json; charset=utf-8"});
                fac(1, k, (result) => resp.end(JSON.stringify({k:k, fac: result})));
            }
        }
    } else {
        const fname = 'index.html';
        fs.readFile(fname, (err, data) => {
            resp.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            resp.end(data);
        });
    }
}).listen(5000);

console.log('Server running at http://localhost:5000/');