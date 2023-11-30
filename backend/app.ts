require('dotenv').config();
import express, { NextFunction, Request, Response } from "express"
export const app = express();
import { Error } from "./middleware/error";
import cors from 'cors';
import cookieParser from "cookie-parser";
import userRouter from './routes/user.route'
import courseRoute from './routes/course.route'
import orderRoute from './routes/order.route'
import notificationRoute from './routes/notification.route'
import analyticsRoute from './routes/analytics.route'

//body parse
app.use(express.json({ limit: "50mb" }));

app.use(cookieParser());

app.use(cors({
    origin:['http://localhost:3000'],
    credentials:true,
}));

app.use('/api/v1', userRouter);
app.use('/api/v1/course', courseRoute);
app.use('/api/v1/order', orderRoute);
app.use('/api/v1/notification', notificationRoute);
app.use('/api/v1/analytics', analyticsRoute);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.json({
        success: true
    })
})

app.use(Error)