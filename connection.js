const mysql= require('mysql');


var mysqlConnection= mysql.createConnection({
    host:"chauchausoup",
    user:"root",
    password:"MYSQLhydrogen1@#$",
    databse:"Animal",
    multipleStatements:true
})

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Connected!")
    }else{
        console.log("No Connection!")
    }

})


module.exports=mysqlConnection;

