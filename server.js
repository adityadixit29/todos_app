import {app} from "./app.js"
import { connectDB } from "./data/database.js"
connectDB()
const port = 3000

app.listen(port, (req,res)=>{
    console.log(`The server is running on port ${port} in ${process.env.NODE_ENV} Mode`);
});