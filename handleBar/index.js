const express=require('express')
const app=express()
const port=7000
const exphbs=require('express-handlebars')

//set up handlebars

app.engine("handlebars",exphbs.engine())
app.set('view engine','handlebars')  

app.get('/',(req,res)=>{
    let person={
        uname:'raju',
        role:'admin'
    }
    let {uname,role}=person;

    res.render("home.handlebars",{uname,role})
})

app.get('/about',(req,res)=>{

    let person=[
        {
            username:'teja',
            role:'admin'
        },
        {
            username:'dhanush',
            role:'!admin'
        },
        {
            username:'uma',
            role:'!admin'
        }
    ]
   
    res.render("about.handlebars",{person})
})
app.get('/contact',(req,res)=>{
   
    res.render("contact.handlebars",{
        username:['raju','rajtogi','shubham'],
        isAdmin:true
    })
})
app.use(express.static(__dirname + '/public'));

app.listen(port,()=>{
    console.log(`listening to port ${port}`)
}) 