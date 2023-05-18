import express from "express";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
export const app = express();
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middleware/error.js";
config()
//middlewares
app.use(express.json());
app.use(cookieParser())
//routes
app.use("/api/v1/users", userRouter)
app.use("/api/v1/task", taskRouter)

app.use(errorMiddleware);

app.get('/',(req,res)=>{
    res.send("running")
})

