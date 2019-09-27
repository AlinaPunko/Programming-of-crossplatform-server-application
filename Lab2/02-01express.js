const express = require("express");
const fs = require ('fs');
const app = express();
app.get("/html", function(request, response){
    let html = fs.readFileSync('./index.html');
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.end(html);
});
app.listen(3000);