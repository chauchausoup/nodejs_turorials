require('dotenv').config();
const mysql= require('mysql');



var mysqlConnection= mysql.createConnection({
    host:process.env.HOSTNAME,
    user:JSON.stringify(process.env.USERNAME),
    password:JSON.stringify(process.env.MYSQL_SWORD),
    database:"Animal",
    multipleStatements:true
})






mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Connected!")
        console.log(mysqlConnection.config.host);
    }else{
        console.log("No Connection!")
        console.log(mysqlConnection.config.host);
    }

})


module.exports=mysqlConnection;
