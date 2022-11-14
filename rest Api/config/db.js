const mongoose=require("mongoose")

module.exports.mongoconnect=mongoose.connect(
    process.env.DB_URL,{ useNewUrlParser: true,
        useUnifiedTopology: true},
    (err)=>{
        if(!err){
            console.log("Db connection Successful");
        }else{
            console.log('Db failed to connect',err);
        }
    }
)