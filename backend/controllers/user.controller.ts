import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../utils/catchAsyncErrors";
import userModel, { IUser } from "../models/user.model";
import ErrorHandler from "../utils/errorHandler";
import jwt, { Secret } from 'jsonwebtoken'
import ejs from "ejs";
import path from "path";
import sendMail from "../utils/sendMail";
import { IActivationRequest, IActivationToken, IRegistrationBody } from "./interface.controller";


export const registrationUser = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, password } = req.body;
        const isEmailExist = await userModel.findOne({email});
        if(isEmailExist){
            return next(new ErrorHandler("Email already exist",400));
        }

        const user:IRegistrationBody = {name,email,password};

        const activationToken = createActivationToken(user);
        const activationCode = activationToken.activationCode;
        const data = {user:{name:user.name},activationCode}

        try {
            await sendMail({
                email:user.email,
                subject:"Activate your account",
                template:"activation-mail.ejs",
                data
            })
            res.status(201).json({
                success:true,
                message:`Please check your email:${user.email} to activate your account`,
                activationToken:activationToken.token
            })
        } catch (error) {
            return next(new ErrorHandler(error.message,400));
        }
    } catch (error) {
        return next(new ErrorHandler(error.message,400));
    }
})


export const createActivationToken = (user:any):IActivationToken => {
    const activationCode = Math.floor(1000 + Math.random() * 9000).toString();
    const token = jwt.sign({
        user,activationCode
    },process.env.ACTIVATION_SECRET as Secret,{
        expiresIn:"5m"
    })
    return {token, activationCode}
}

export const activateUser = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {activation_token,activation_code}  = req.body as IActivationRequest
        const newUser:{user:IUser; activationCode:string} = jwt.verify(
            activation_token,
            process.env.ACTIVATION_SECRET as string
        ) as {user:IUser; activationCode:string};
        if(newUser.activationCode!== activation_code.toString()){
            return next(new ErrorHandler("Invalid activation code",400));
        }
        const {name, email, password} = newUser.user
        const existUser = await userModel.findOne({email});
        if(existUser){
            return next(new ErrorHandler("Email already exsit",400));
        }
        const user = await userModel.create({
            name,
            email,
            password
        })
        res.status(201).json({
            success:true,
        })
    } catch (error) {
        return next(new ErrorHandler(error.message,400));
    }
})

