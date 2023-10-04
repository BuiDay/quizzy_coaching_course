require('dotenv').config();
import express,{NextFunction, Request, Response} from "express"
export const app = express();
import { Error } from "./middleware/error";
import cors from 'cors';
import cookieParser from "cookie-parser";
import userRouter from './routes/user.route'

//body parse
app.use(express.json({limit:"50mb"}));

app.use(cookieParser());

app.use(cors({
    origin:process.env.ORIGIN
})); 

app.use('/api/v1',userRouter)

app.get("/",(req:Request,res:Response,next:NextFunction)=>{
    res.json({
        success:true
    })
})

app.use(Error)