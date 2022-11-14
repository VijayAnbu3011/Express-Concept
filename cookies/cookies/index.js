const express = require('express')
const app =express()
const cookieParser=require('cookie-parser')

app.use(cookieParser())

app.get("/read-cookie",(req,res)=>{
    console.log(req.cookies);
    res.send("Reading cookies")
})

app.get("/create-cookie",(req,res)=>{
    res.cookie("myname","Satyam")
    res.send("cookie created")
})

app.get("/create-pcookie",(req,res)=>{
    res.cookie("email","Satyam.s@ty.com",{maxAge:86400000})
    res.send("persistent cookie created")
})

app.get("/create-objcookie",(req,res)=>{
    res.cookie("data",{
        "name":"Teja",
        "age":18
    },{maxAge:86400000})
    res.send("object persistent cookie created")
})

app.get("/clear-cookie",(req,res)=>{
    res.clearCookie("myname")
    res.send("cookie cleared")
})

app.get("/clear-allcookie",(req,res)=>{
    for (let cookie in req.cookies){
        res.clearCookie(cookie)
    }
    res.send("cookie cleared")
})

app.listen(2000,()=>{
    console.log("listening on 2000")
})