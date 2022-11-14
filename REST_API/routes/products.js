const express=require('express')
const router=express.Router()

const productController=require('../controllers/products')
const auth =require("./../middleware/auth")

router.get("/products",auth.authorizeUserAdmin, productController.getAllProducts)

router.post("/add-product",auth.authorizeAdmin ,productController.addProduct)

router.put("/edit-product",auth.authorizeAdmin,productController.editProduct)

router.delete("/delete-product",auth.authorizeAdmin ,productController.deleteProduct)

module.exports=router