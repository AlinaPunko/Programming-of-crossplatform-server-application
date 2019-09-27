const express = require("express");
const app = express();
fs = require('fs');
app.get("/xmlhttprequest", function(request, response){
    let html = fs.readFileSync('./xmlhttprequest.html');
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.end(html);
}).listen(5000);