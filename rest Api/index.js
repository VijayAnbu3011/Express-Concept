const express=require("express")
const app=express()
require('dotenv').config()
let port=process.env.PORT || 8000
require("./config/db")

let productRoutes=require('./routes/products')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("./products",productRoutes)

app.use((err,req,res,next)=>{
    res.status(500).json({
        error:true,
        message:err.message,
        data:null
    })
})
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})