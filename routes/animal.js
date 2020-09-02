const mySqlConnection = require('../connection');

const express = require('express');
const Router = express.Router();


Router.get('/',(req,res)=>{
    mySqlConnection.query("SELECT * FROM Property",(err,rows,fields)=>{
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
})

module.exports=Router;
