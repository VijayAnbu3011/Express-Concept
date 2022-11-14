const mongoose=require('mongoose')
let Schema = mongoose.Schema
 
let usersSchema=new Schema({
    fname:{
        type:String,
        minlength:1,
        maxlength:50
    },
    lname:{
        type:String,
        minlength:1,
        maxlength:50
    },
    email:{
        type:String,
        minlength:3,
        maxlength:100
    },
    password:{
        type:String,
        minlength:3,
        maxlength:100
    },
    role:{
        type:String,
        minlength:1,
        maxlength:20
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model("users",usersSchema)