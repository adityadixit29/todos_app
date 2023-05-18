import mongoose from "mongoose";

export const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"backenapi"
    }).then(()=> console.log("Datebase Connected"))
      .catch((e)=> console.log(e))
}
