const express=require('express')
const usersRoute=express.Router()
let usersController=require("./../controllers/users")

usersRoute.post("/register",usersController.register)
usersRoute.post("/login",usersController.login)

module.exports=usersRoute