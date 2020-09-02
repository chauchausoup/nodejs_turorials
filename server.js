// lets make a server here
require('dotenv').config();

const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const AnimalRoutes = require('./routes/animal');


var app= express();

app.use(bodyParser.json());
app.use('/animal',AnimalRoutes);



app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port ${process.env.PORT}!!!`)
})


