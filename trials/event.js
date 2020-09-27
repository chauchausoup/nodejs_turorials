// lets study about the events in NodeJS

var fs=require('fs');
var event = require('events');

const myEmitter= new event.EventEmitter();

fs.readFile('some',(err,data)=>{
    console.log(data);
    myEmitter.emit('readFile')//event emitter only works for event
})


//event receiver

myEmitter.on('readFile',()=>{
    console.log('\n Read Event Occured')
})

