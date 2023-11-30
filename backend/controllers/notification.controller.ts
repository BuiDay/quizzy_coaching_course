import { NextFunction, Response, Request } from "express";
import { CatchAsyncError } from "../utils/catchAsyncErrors";
import ErrorHandler from "../utils/errorHandler";
import notificationModel from "../models/notification.model";
import cron from 'node-cron'
export const getAllNotifications = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const nofifications = await notificationModel.find().sort("-createdAt");
            res.status(201).json({
                success: true,
                nofifications
            })
        } catch (error) {
            console.log(error);
            return next(new ErrorHandler(error.message, 400));
        }
    }
);


export const updateNotifications = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req?.params.id
            const nofification = await notificationModel.findById(id);

            if (!nofification) {
                return next(new ErrorHandler("Notification not found!", 404))
            } else {
                nofification.status ? nofification.status = "read" : nofification.status;
            }

            await nofification.save();

            res.status(201).json({
                success: true,
                nofification
            })
        } catch (error) {
            console.log(error);
            return next(new ErrorHandler(error.message, 400));
        }
    }
);
