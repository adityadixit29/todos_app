import express from "express";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
export const app = express();
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middleware/error.js";
import cors from "cors";

config()
//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
//routes
app.use("/api/v1/users", userRouter)
app.use("/api/v1/task", taskRouter)

//using error middleware
app.use(errorMiddleware);

app.get('/',(req,res)=>{
    res.send("running")
})

