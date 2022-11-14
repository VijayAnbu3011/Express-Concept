const { response } = require('express')
const express=require('express')
const path=require('path')
const app=express()
let port=7000
// 2nd middleware to get date
let getDate=(req,res,next)=>{
    let date=Date.now()
    // to modify req and resp object
    req.requestDate=date
    console.log("modified req",req);
    next()
}
// using the middleWare
app.use(getDate)
// 1
// app.get('/',(request,response)=>{
//         response.send("hello "+new Date(request.requestDate))
// })
// 4
// app.get('/add',(request,response)=>{
//     response.send("get add" )
// })
// task for get date on click
app.get('/addDate',(req,res)=>{
    res.send(`
    <p>Current Date:</P>
    <h2>${new Date(req.requestDate)}</h2>
    <button onClick="alert('u clicked me')">Click me</button>
    `)
})
// 6
// inbuild middle _provide location of static web resource
// to access it from the browser
app.use(express.static('./public'))
// // to add one more folder to server static files
// app.use(express.static('./files'))
// 6
// t0 create dummy path
// app.use('/briyani',express.static('./files'))
// 5
app.post('/add',(request,response)=>{
    response.send("post add")
})
// using path module
app.get("/",(request,response)=>{
    response.sendFile(path.join(__dirname,'public/home.html'))
})
// create err
app.use("*",(req,res)=>{
    throw new Error("Path doesn't exists")
})
// error handling middleware write at last
app.use((err,req,res,next)=>{
    res.status(500);
    res.send(err.message)
})

app.listen(port,()=>{
    console.log(`listen on port ${port}`);
})



