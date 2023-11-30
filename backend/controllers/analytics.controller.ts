import { NextFunction, Response, Request } from "express";
import { CatchAsyncError } from "../utils/catchAsyncErrors";
import ErrorHandler from "../utils/errorHandler";
import { generateLast12MonthsData, generateLastDateData } from "../utils/analytics.generate";
import userModel from "../models/user.model";
import mailModel from "../models/mail.model";

import orderModel from "../models/order.model";
import CourseModel from "../models/course.model";



export const getUserAnalytics = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
          const users = await generateLast12MonthsData(userModel)
          res.status(200).json(
            {
                success:true,
                users
            }
          )
        } catch (error) {
            console.log(error);
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

export const getCoursesAnalytics = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
      try {
        const courses = await generateLast12MonthsData(CourseModel)
        res.status(200).json(
          {
              success:true,
              courses
          }
        )
      } catch (error) {
          console.log(error);
          return next(new ErrorHandler(error.message, 400));
      }
  }
);


export const getOrderAnalytics = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
      try {
        const orders = await generateLast12MonthsData(orderModel)
        res.status(200).json(
          {
              success:true,
              orders
          }
        )
      } catch (error) {
          console.log(error);
          return next(new ErrorHandler(error.message, 400));
      }
  }
);



export const getMailAnalytics = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
          const mails = await generateLastDateData(mailModel)
          res.status(200).json(
            {
                success:true,
                mails
            }
          )
        } catch (error) {
            console.log(error);
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

