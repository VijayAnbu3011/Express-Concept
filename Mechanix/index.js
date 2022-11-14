let express=require('express')
let app=express()
let exphbs=require('express-handlebars')
let port=7000
// set default view engine
app.engine("handlebars",exphbs.engine())
app.set("view engine","handlebars")
// body parse
app.use(express.urlencoded({extended:true}))

// url req to res
app.get('/',(req,res)=>{
    res.render("home.handlebars")
})
app.get('/products/products',(req,res)=>{
    res.render("products.handlebars")
})
app.get('/products/add-product',(req,res)=>{
    res.render("add-product.handlebars")
})
app.listen(port,()=>{
    console.log(port);
})