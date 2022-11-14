const express=require("express")
const app=express()
const exphbs=require('express-handlebars')
const session=require("express-session")
const port=7000
let uname="vijay"
let pwd="vijay"
let oneDay=24*60*60*1000
app.use(session({
    secret:"thisissecret",
    resave:false,
    saveUninitialized:true,
    coolie:{maxAge:oneDay}
}))
app.engine("handlebars",exphbs.engine())
app.set("view engine","handlebars")
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    if(req.session.userid){
        res.redirect('/user')
    }else
    res.render("login.handlebars")
})

app.post("/login",(req,res)=>{
    let {username,password}=req.body
    if(username===uname && password===pwd){
        console.log(req.session);
        req.session.userid=username
        res.send('Welcome user <a href="/logout">Logout</a>')
    }
})

app.get("/user",(req,res)=>{
    if(req.session.userid){
        res.send('session validated <a href="/logout">logout</a>')
    }else{
        res.redirect("/")
    }
})
app.get("/logout",(req,res)=>{
    req.session.destroy()
    res.redirect("/")
})
app.listen(port,()=>{
    console.log(`listening to ${port}`);
})