import mongoose from "mongoose";

export const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"backenapi",
    }).then((c)=> console.log(`Datebase Connected ${c.connection.host}`))
      .catch((e)=> console.log(e))
}
