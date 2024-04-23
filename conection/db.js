const mongoose = require("mongoose")
require("dotenv").config()
const dbConection = async()=>{
    try {
        const db = mongoose.connect(process.env.MONGOOURL)
        console.log("mongodb conected successfuly")
    } catch (error) {
     console.log("error ")
    }
        
}
module.exports = dbConection