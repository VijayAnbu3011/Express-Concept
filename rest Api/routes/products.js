const express=require("express")
const router=express.Router()

const productController=require('../controllers/products')

router.get("/products",productController.getAllProducts)
router.post("/add-products",productController.addproduct)
router.put("/edit-products",productController.editproduct)
router.delete("/delete-products",productController.deleteProduct)

module.exports=router