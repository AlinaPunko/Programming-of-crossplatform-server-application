const express = require("express");
const fs = require ('fs');
const app = express();
app.get("/png", function(request, response){
    const fname='./IMG_20180903_230803_642.jpg';
    let jpg = null;
    fs.stat(fname,(err,stat)=>{
        if(err){console.log("error:", err);}
        else
        {
            jpg=fs.readFileSync(fname);
            response.writeHeader(200, {"Content-Type": "image/jpeg","Content-lenght":stat.size});
            response.end(jpg, 'binary');
        }
    })
});
app.listen(3000);