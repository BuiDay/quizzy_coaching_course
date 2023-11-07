import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../utils/catchAsyncErrors";
import ErrorHandler from "../utils/errorHandler";
import { IMail } from "./interface.controller";
import mailModel from "../models/mail.model";
import sendMail from "../utils/sendMail";

export const collectionMail = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name, email} = req.body;
            const isEmailExist = await mailModel.findOne({ email });
            if (isEmailExist) {
                return next(new ErrorHandler("Email đã được đăng kí!", 400));
            }
            const user: IMail = { name, email};
            const data  = await mailModel.create(user);
            await sendMail({
                email:email,
                subject: "Quà tặng Template Content Calendar của bạn đây!!!",
                template: "activation-collection-mai.ejs",
                data:user,
            });
            res.status(200).json({
                success: true,
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

export const getCollectionMail = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const page = 1, limit = 100;
            const emails = await mailModel.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();;
            const count = await mailModel.count();
            res.status(200).json({
                success: true,
                totalMails:count,
                totalPages: Math.ceil(count / limit),
                currentPage: page,
                data:emails
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
);