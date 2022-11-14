const mongoose=require('mongoose')
let Schema = mongoose.Schema
 
let productSchema=new Schema({
    pName:{
        type:String,
        minlength:3,
        maxlength:50
    },
    pPrice:{
        type:Number,
        min:1,
        max:10000000
    },
    pDesc:{
        type:String,
        minlength:3,
        maxlength:100
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model("Products",productSchema)