import { NextFunction, Response, Request } from "express";
import { CatchAsyncError } from "../utils/catchAsyncErrors";
import ErrorHandler from "../utils/errorHandler";
import cloudinary from 'cloudinary'
import { createCourseService } from "../services/course.service";
import axios from "axios";
import CourseModel from "../models/course.model";
import { redis } from "../utils/redis";
import { IAddAnswerData, IAddQuestionData } from "./interface.controller";
import mongoose from "mongoose";
import ejs from "ejs";
import path from "path";
import sendMail from "../utils/sendMail";

require('dotenv').config();

export const createCourse = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { data } = req.body;
            const thumbnail = data.thumbnail;
            if (thumbnail) {
                await cloudinary.v2.uploader.destroy(thumbnail.public_id)
                const myCloud = await cloudinary.v2.uploader.upload(thumbnail, {
                    folder: "courses",
                });
                data.thumbnail = {
                    public_id: myCloud.public_id,
                    url: myCloud.url
                }
            }
            const courseId = req.params.id;
            const course = await CourseModel.findByIdAndUpdate(
                courseId,
                {
                    $set: data,
                },
                {
                    new: true
                }
            )

            res.status(201).json({
                success: true,
                course
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    }
);

export const editCourse = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { data } = req.body;
            const thumbnail = data.thumbnail;
            if (thumbnail) {
                const myCloud = await cloudinary.v2.uploader.upload(thumbnail, {
                    folder: "courses",
                });
                data.thumbnail = {
                    public_id: myCloud.public_id,
                    url: myCloud.url
                }
            }
            createCourseService(data, res, next)
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    }
);

export const getSingleCourse = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const courseId = req.params.id;
            const isCacheExist = await redis.get(courseId);
            if (isCacheExist) {
                const course = JSON.parse(isCacheExist);
                res.status(200).json({
                    success: true,
                    course
                })
            } else {
                const course = await CourseModel.findById(courseId)
                    .select("-courseData.videoUrl -courseData.suggestion -courseData.questions -courseData.links");
                await redis.set(courseId, JSON.stringify(course))
                res.status(200).json({
                    success: true,
                    course
                })
            }
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    }
);

export const getAllCourse = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const isCacheExist = await redis.get("allCourses");
            if (isCacheExist) {
                const course = JSON.parse(isCacheExist);
                res.status(200).json({
                    success: true,
                    course
                })
            } else {
                const course = await CourseModel.find()
                    .select("-courseData.videoUrl -courseData.suggestion -courseData.questions -courseData.links");
                await redis.set("allCourses", JSON.stringify(course))
                res.status(200).json({
                    success: true,
                    course
                })
            }
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    }
);

export const getCourseByUser = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userCoursesList = req.user?.courses;
            const courseId = req.params.id;

            const courseExists = userCoursesList?.find(
                (course: any) => course._id.toString() === courseId
            );

            if (!courseExists) {
                return next(
                    new ErrorHandler("You are not eligible to access this course", 404)
                )
            }

            const course = await CourseModel.findById(courseId);

            const conent = course?.courseData;

            res.status(200).json({
                success: true,
                conent
            })

        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    }
);

export const addQuestion = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { question, courseId, contentId }: IAddQuestionData = req.body;
            const course = await CourseModel.findById(courseId);

            if (!mongoose.Types.ObjectId.isValid(contentId)) {
                return next(new ErrorHandler("Invalid content id", 400));
            }

            const courseContent = course?.courseData.find((item:any)=>item._id.equals(contentId));
            if(!courseContent){
                return next(new ErrorHandler("Invalid content id",400))
            }

            const newQuestion:any = {
                user:req.user,
                question,
                questionReplies:[]
            }

            courseContent.questions.push(newQuestion)

            await course?.save();
            
            res.status(200).json({
                success: true,
                course
            })

        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    }
);

export const addAnswer = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { answer,questionId, courseId, contentId }: IAddAnswerData = req.body;
            const course = await CourseModel.findById(courseId);

            if (!mongoose.Types.ObjectId.isValid(contentId)) {
                return next(new ErrorHandler("Invalid content id", 400));
            }

            const courseContent = course?.courseData.find((item:any)=>item._id.equals(contentId));
            if(!courseContent){
                return next(new ErrorHandler("Invalid content id",400))
            }

            const question = courseContent?.questions.find((item:any)=>item._id.equals(questionId));
            if(!question){
                return next(new ErrorHandler("Invalid question id",400))
            }

            const newAnswer:any = {
                user:req.user,
                answer
            }

            question.questionReplies.push(newAnswer)
            await course?.save();

            if(req.user?._id === question.user._id){
                //create a notification
            }else{
                const data = {
                    name:question.user.name,
                    title:courseContent.title
                }

                const html = await ejs.renderFile(path.join(__dirname,"../mails/question-reply.ejs"),data);

                try{
                    await sendMail({
                        email:question.user.email,
                        subject:"Question Reply",
                        template:"question-reply.ejs",
                        data
                    })
                }catch(error){
                    return next(new ErrorHandler(error.message, 500))
                }
            }

            res.status(200).json({
                success: true,
                course
            })

        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    }
);

export const generateVideoUrl = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { videoId } = req.body;
            const response = await axios.post(
                `https://dev.vdocipher.com/api/videos/${videoId}/otp`,
                {
                    "ttl": 300
                },
                {
                    headers: {
                        "Authorization": `Apisecret ${process.env.VDOCIPHER_API_SECRET}`,
                        "Content-Type": "application/json"
                    }
                }
            )
            res.json(response.data)
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    }
); 
