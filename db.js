const mongoose = require("mongoose")


module.exports = () =>{
  
    try{
        mongoose.connect(process.env.DB)
        console.log("Connected to database successfuly")
    } catch(error) {
        console.log(error)
        console.log("could not connect to database!")
    }
}