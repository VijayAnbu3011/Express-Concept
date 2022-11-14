let product=require("../models/products")

let getAllProducts=async(req,res,next)=>{
    try {
        let products = await product.find().lean()
        res.json({
            error:false,
            message:"All products",
            data:products
        })
    } catch (err) {
       next(err)
    }
}

let addProduct=async(req,res,next)=>{
    let { pName, pPrice, pDesc } = req.body
    try {
        await product.insertMany([{ pName, pPrice, pDesc }])
        res.json({
            error:false,
            message:"Product added successfully",
            data:null
        })
    } catch (err) {
        next(err)
    }
}

let editProduct=async(req,res,next)=>{
    let { _id, pName, pPrice, pDesc } = req.body
    try {
        await product.updateOne({ _id: _id }, {
            $set: {
                pName, pPrice, pDesc
            }
        })
       res.json({
        error:false,
        message:"Product updated successfully",
        data:{pName, pPrice, pDesc}
       })
    } catch (error) {
        next(err)
    }
}

let deleteProduct=async(req,res,next)=>{
    try {
        await product.deleteOne({ _id: req.body._id })
        res.json({
            error:false,
            message:"Product deleted successfully",
            data:null
        })
    } catch (err){
        next(err)
    }
}

module.exports={
    getAllProducts,
    addProduct,
    editProduct,
    deleteProduct
}