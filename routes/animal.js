const mySqlConnection = require('../connection');

const { router } = require('express');


router.get('/',(req,res)=>{
    mySqlConnection.query("SELECT * FROM Animal",(err,rows,fields)=>{
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
})

module.exports=router;
