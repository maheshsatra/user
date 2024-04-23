const mongoose = require("mongoose")

const wishlistShema = new mongoose.Schema({

    name: {type:String},
    mobile: {type:Number},   
    email: {type:String},
})

const wishlistItems = mongoose.model("users",wishlistShema)
module.exports = {wishlistItems}