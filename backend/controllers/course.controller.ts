import { NextFunction, Response, Request } from "express";
import { CatchAsyncError } from "../utils/catchAsyncErrors";
import ErrorHandler from "../utils/errorHandler";
import cloudinary from 'cloudinary'
import { createCourseService } from "../services/course.service";
import axios from "axios";
require('dotenv').config();

export const createCourse = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body;
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
