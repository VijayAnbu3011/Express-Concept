const jwt = require('jsonwebtoken')

let authorizeUserAdmin = (req, res,next) => {
    if (req.headers['authorization']) {
        let token = req.headers['authorization'].split(" ")[1]
        let payload=jwt.verify(token,process.env.SECRET_KEY)
        if(payload.role==="admin" || payload.role==="user"){
            next()
        }else{
            res.json({
                error:true,
                message:"not authorized",
                data:null
            })
        }
    }else{
        res.json({
            error:true,
            message:"not authorized",
            data:null
        })
    }                                   
}
let authorizeAdmin = (req, res,next) => {
    if (req.headers['authorization']) {
        let token = req.headers['authorization'].split(" ")[1]
        let payload=jwt.verify(token,process.env.SECRET_KEY)
        if(payload.role==="admin"){
            next()
        }else{
            res.json({
                error:true,
                message:"not authorized",
                data:null
            })
        }
    }else{
        res.json({
            error:true,
            message:"not authorized",
            data:null
        })
    }
}

module.exports={
    authorizeUserAdmin,
    authorizeAdmin
}