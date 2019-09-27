const express = require("express");
const app = express();
fs = require('fs');
app.get("/api/name", function(request, response){
    const fname='./02-03.txt';
    let text = null;
    fs.readFile(fname,(err,text)=>{
        if(err){console.log("error:", err);}
        else
        {
            response.writeHeader(200, {"Content-Type": "text/plain"});
            response.end(text, 'text');
        }
});})
app.listen(3000);