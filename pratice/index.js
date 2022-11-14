let express=require('express')
let app=express()
let path=require('path')
let port=7000

let getDate=(req,res,next)=>{
    let date=Date.now()
    req.requestDate=date
    console.log(req);
    next()
}
app.use(getDate)
app.get('/',(req,res)=>{
    //   res.send(new Date(req.requestDate))
    res.send('hello')
})
app.get("/add",(req,res)=>{
    res.send(`
    <p>Current Date:</p>
    <h2>${new Date(req.requestDate)}</h2>
    <button onclick="alert('You Clicked Me')">Click Me</button>
    `)
})
app.use(express.static('./public'))
app.get("/user",(request,response)=>{
    response.sendFile(path.join(__dirname,'public/home.html'))
})
app.use("*",(req,res)=>{
    throw new Error("invalid path")
})
app.use((err,req,res,next)=>{
    res.status(500)
    res.send(err.message)
})
app.listen(port,()=>{
    console.log(`Listen to port ${port}`);
})