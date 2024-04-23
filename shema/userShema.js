const mongoose = require("mongoose")

const userShema = new mongoose.Schema({

    name: {type:String},
    mobile: {type:Number},   
    email: {type:String},
})

const userInfo = mongoose.model("users",userShema)
module.exports = {userInfo}