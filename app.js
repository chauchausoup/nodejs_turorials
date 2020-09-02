//entry point of our app
var express = require('express');
var http = require('http');
var fs = require('fs')
const bodyParser = require('body-parser');




var app = express();
var server = http.createServer(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));



app.get('/',(req,res)=>{
    res.send(`<h1>it works</h1>`);
})


//HTTP along with express

app.get('/places',(req,res)=>{
    fs.readFile('./db.json',(err,data)=>{
        res.send(data.toString())
    })
})

//get request for 

var sub1 = {
    pep:[
        {
            name:"harka"
        }
    ]
};



app.get('/people',(req,res)=>{
    res.json({
        status:200,
        people: sub1
    })
})


//go for POST request

app.post('/people',(req,res)=>{
    //  make sure to send the req from POST using x-www-form-urlencoded

    if(req.body && req.body.name){
        sub1.pep.push({name:req.body.name})
    }
    console.log(sub1); 
    res.json(sub1);
    res.end()
})

// parameters

app.get('/people/:name',(req,res)=>{
    res.json({
        name:req.params.name
    })
})




app.listen(3000,()=>{
    console.log(`Server is listening on port ${3000}!!!`)
})

