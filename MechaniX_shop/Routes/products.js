const express=require('express')
//using express Router function
const router=express.Router()
let products = [
    {
        _id: 1,
        pName: "engine oil",
        pPrice: 1300,
        pDesc: "with friction busters"
    }
]
router.get('/products', (req, res) => {
    res.render("products.handlebars", { products })
})

router.get("/add-product", (req, res) => {
    res.render("add-product.handlebars")
})

router.post("/add-product", (req, res) => {
    // console.log(req.body);
    let { _id, pName, pPrice, pDesc } = req.body
    products.push({ _id, pName, pPrice, pDesc })
    res.redirect('/products/products')
    // res.render("products.handlebars",{products})
})
//edit the product send selected product details
router.get("/edit-product/:_id", (req, res) => {
    console.log(req.params._id);
    let index = products.findIndex((product) => {
        return parseInt(product._id) === parseInt(req.params._id)
    })
    let selectedProduct = products[index]
    // console.log("selectedProduct",selectedProduct);
    // res.send("hello")
    res.render("edit-product.handlebars", { selectedProduct })
})

// finding the edited object and updated the object
router.post("/edit-product", (req, res) => {
    console.log(req.body);
    let { _id, pName, pPrice, pDesc } = req.body
    let index = products.findIndex((product) => {
        return parseInt(product._id) === parseInt(_id)
    })
    products.splice(index, 1, { _id, pName, pPrice, pDesc })
    res.redirect("/products/products")
    // res.send("edited successfully")
})

//delete product

router.get("/delete-product/:_id", (req, res) => {
    console.log(req.params._id);
    let index = products.findIndex((product) => {
        return parseInt(product._id) === parseInt(req.params._id)
    })
    products.splice(index, 1)
    res.redirect("/products/products")
})

module.exports=router