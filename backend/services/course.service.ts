import { NextFunction,Response } from "express";
import CourseModel, { ICourse } from "../models/course.model";

export const createCourseService = async (data:ICourse, res: Response,next:NextFunction) => {
    const course = await CourseModel.create(data);
    res.status(201).json({
        success:true,
        course
    })
}