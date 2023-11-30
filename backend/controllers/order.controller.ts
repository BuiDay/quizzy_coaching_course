import { NextFunction, Response, Request } from "express";
import { CatchAsyncError } from "../utils/catchAsyncErrors";
import ErrorHandler from "../utils/errorHandler";
import { ICreateOrder } from "./interface.controller";
import userModel from "../models/user.model";
import CourseModel from "../models/course.model";
import { newOrder } from "../services/order.service";
import ejs from "ejs";
import path from "path";
import sendMail from "../utils/sendMail";
import notificationModel from "../models/notification.model";

export const createOrder = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {courseId, payment_info} = req.body as ICreateOrder;
            const user = await userModel.findById(req?.user?._id);

            const courseExists = user?.courses.some((course:any)=>course._id.toString() === courseId);
            if(courseExists){
                return next(new ErrorHandler("You have already purcharse this course",400));
            }

            const course = await CourseModel.findById(courseId);
            if(!course){
                return next(new ErrorHandler("Course not found",400));
            }
            const data: {
                courseId:any, 
                userId:string
                payment_info:object
            } = {
                courseId: course?._id,
                userId: user?._id,
                payment_info
            }

            const mailData = {
                order:{
                    _id:course?._id.toString().slice(0,6),
                    name:course.name,
                    price:course.price,
                    date: new Date().toLocaleString(),
                }
            }

            const html = await ejs.renderFile(path.join(__dirname,"../mails/order.ejs"),{order:mailData});

            try{
                await sendMail({
                    email:user?.email,
                    subject:"Order Confirmation",
                    template:"order.ejs",
                    data:mailData
                })
            }catch(error){
                return next(new ErrorHandler(error.message, 500))
            }
            
            user?.courses.push({courseId:courseId})

            await user?.save();

            await notificationModel.create({
                user:user?._id,
                title:"New order",
                message:`You have a new order from ${course?.name}`
            })

            course.purchased = course ? course.purchased = course.purchased + 1 : course.purchased;

            await course?.save();

            newOrder(data, res, next);

        } catch (error) {
            console.log(error);
            return next(new ErrorHandler(error.message, 400));
        }
    }
);
