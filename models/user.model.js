const mongoose = require("mongoose")

const userSchema =  new mongoose.Schema({
   username:{
    type:String,
    required:true,
    trim:true,
    lowercase:true,
    unique:true,
    minlength:[3,'Username must be at least 3 characs long']
   },
   email:{
    type:String,
    required:true,
    trim:true,
    lowercase:true,
    unique:true,
    minlength:[13,'Username must be at least 3 characs long']
   },
   password:{
    type:String,
    required:true,
    trim:true,
    minlength:[5,'Username must be at least 3 characs long']
   }

})

const user = mongoose.model('user',userSchema)


module.exports = user;