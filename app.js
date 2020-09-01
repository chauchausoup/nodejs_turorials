//entry point of our app
var express = require('express');
var http = require('http');
var fs = require('fs')


var app = express();
var server = http.createServer(app);


app.get('/',(req,res)=>{
    res.send(`<h1>it works</h1>`);
})

app.get('/places',(req,res)=>{
    fs.readFile('./db.json',(err,data)=>{
        res.send(data.toString())
    })
})


app.listen(3000,()=>{
    console.log(`Server is listening on port ${3000}!!!`)
})

