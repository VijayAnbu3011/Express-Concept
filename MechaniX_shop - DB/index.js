const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const mongoose=require('mongoose')
const port = 7000

const dburl="mongodb+srv://VijayK:83ndGZ8NGLVB39kw@cluster0.gnx7ui5.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(
    dburl,{ useNewUrlParser: true,
        useUnifiedTopology: true},
    (err)=>{
        if(!err){
            console.log("Db connection Successful");
        }else{
            console.log('Db failed to connect',err);
        }
    }
)
// importing products route
let productRoute=require('./Routes/products')
//setup template engine 
app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")
// body parser middleware used to get data (object) from form body (req.body)
app.use(express.urlencoded({ extended: true }))

// creating routes 
app.use('/products',productRoute)
app.get('/', (req, res) => {
    res.render("home.handlebars")
})
// route for error
app.get("/error",(req,res)=>{
    res.status(500).send("oops something went wrong")
})
app.listen(port, () => {
    console.log(`listening to ${port}`);
})


