const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    res.sendFile(__dirname + "/index.html");
})

app.get('/echo/:word?',(req, res)=>{
    if(req.params.word == null) return res.send("Nothing to echo (echo, echo)");
    console.log(req);
    res.send("Oh! You said " + req.params.word + "?");
})

app.listen(8000,()=>{
    console.log("App is listening on 8000. :-)");
})