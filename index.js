const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const dbConection = require("./conection/db"); 
const userRouter = require('./routing/user');
dbConection()


app.use(cors())
app.use(express.json({limit:"30mb"}));
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.listen(process.env.PORT,()=>{
    console.log(`this is runing,${process.env.PORT}`)
})


 app.use("/auth",userRouter)

