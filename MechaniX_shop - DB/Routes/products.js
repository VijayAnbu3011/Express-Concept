const express=require('express')
//using express Router function
const router=express.Router()

// import model
let product=require('../models/product')

router.get('/products', async(req, res) => {
    try{
        let products=await product.find().lean()
        res.render("products.handlebars", { products })
    }catch(err){
        res.redirect("/error")
    }
})

router.get("/add-product", (req, res) => {
    res.render("add-product.handlebars")
})

router.post("/add-product", async (req, res) => {
    let { _id, pName, pPrice, pDesc } = req.body
    try{
        await product.insertMany([{pName, pPrice, pDesc}])
        res.redirect('/products/products')
    }catch(err){
        res.redirect("/error")
    }
})
//edit the product send selected product details
router.get("/edit-product/:_id",async (req, res) => {
    console.log(req.params._id);
    try{
        let productToEdit=await product.findOne({_id:req.params._id}).lean()
        res.render("edit-product.handlebars", { selectedProduct : productToEdit})
    }catch(err){
        res.redirect("/error")
    }

})

// finding the edited object and updated the object
router.post("/edit-product",async (req, res) => {
    console.log(req.body);
    let { _id, pName, pPrice, pDesc } = req.body
    try{
        await product.updateOne({_id:_id},{
            $set:{
                pName, pPrice, pDesc
            }
        })
        res.redirect("/products/products")
    }catch(err){
        res.redirect("/error")
    }   
})

//delete product

router.get("/delete-product/:_id",async (req, res) => {
    console.log(req.params._id);
    try{
        await product.deleteOne({_id:req.params._id})
        res.redirect("/products/products")
    }catch(err){
        res.redirect("/error")
    }   
})

module.exports=router