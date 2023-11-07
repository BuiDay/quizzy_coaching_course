import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../utils/catchAsyncErrors";
import userModel, { IUser } from "../models/user.model";
import ErrorHandler from "../utils/errorHandler";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import sendMail from "../utils/sendMail";
import {
    IActivationRequest,
    IActivationToken,
    ILoginRequest,
    IRegistrationBody,
    IUpdatePassword,
    IUpdateUserInfo,
} from "./interface.controller";
import { accessTokenOptions, refreshTokenOptions, sendToken } from "../utils/jwt";
import { redis } from "../utils/redis";
import { getUserByIdService } from "../services/user.service";

export const registrationUser = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name, email, password } = req.body;
            const isEmailExist = await userModel.findOne({ email });
            if (isEmailExist) {
                return next(new ErrorHandler("Email already exist", 400));
            }

            const user: IRegistrationBody = { name, email, password }; 

            const activationToken = createActivationToken(user);
            const activationCode = activationToken.activationCode;
            const data = { user: { name: user.name }, activationCode };

            try {
                await sendMail({
                    email: user.email,
                    subject: "Activate your account",
                    template: "activation-mail.ejs",
                    data,
                });
                res.status(201).json({
                    success: true,
                    message: `Please check your email:${user.email} to activate your account`,
                    activationToken: activationToken.token,
                });
            } catch (error) {
                return next(new ErrorHandler(error.message, 400));
            }
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

export const createActivationToken = (user: any): IActivationToken => {
    const activationCode = Math.floor(1000 + Math.random() * 9000).toString();
    const token = jwt.sign(
        {
            user,
            activationCode,
        },
        process.env.ACTIVATION_SECRET as Secret,
        {
            expiresIn: "5m",
        }
    );
    return { token, activationCode };
};

export const activateUser = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { activation_token, activation_code } =
                req.body as IActivationRequest;
            const newUser: { user: IUser; activationCode: string } = jwt.verify(
                activation_token,
                process.env.ACTIVATION_SECRET as string
            ) as { user: IUser; activationCode: string };
            if (newUser.activationCode !== activation_code.toString()) {
                return next(new ErrorHandler("Invalid activation code", 400));
            }
            const { name, email, password } = newUser.user;
            const existUser = await userModel.findOne({ email });
            if (existUser) {
                return next(new ErrorHandler("Email already exsit", 400));
            }
            const user = await userModel.create({
                name,
                email,
                password,
            });
            res.status(201).json({
                success: true,
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

export const loginUser = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email, password } = req.body as ILoginRequest;
            if (!email || !password) {
                return next(new ErrorHandler("Please enter email and password", 400));
            }
            const userPassword = await userModel.findOne({ email }).select("+password");
            if (!userPassword) {
                return next(new ErrorHandler("Invalid email or password", 400));
            }
            const isPasswordMatch = await userPassword.comparePassword(password);
            if (!isPasswordMatch) {
                return next(new ErrorHandler("Invalid email or password", 400));
            }
            const user = await userModel.findOne({ email });
            sendToken(user, 200, res);
        } catch (error) {
            console.log(error);
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

export const logoutUser = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.cookie("access_token", "", { maxAge: 1 });
            res.cookie("refresh_token", "", { maxAge: 1 });

            redis.del(req.user._id || "")
            res.status(200).json({
                success:true,
                message:"Loged out sucessfully"
            })
        } catch (error) {
            console.log(error);
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

export const updateAccessToken = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try { 
            const refresh_token = req.cookies.refresh_token as string;
            const decoded = jwt.verify(refresh_token,process.env.REFRESH_TOKEN) as JwtPayload;
            console.log(process.env.REFRESH_TOKEN)
            const message = 'Could not refresh token';
            if(!decoded){
                return  next(new ErrorHandler(message,400));
            }
            const session = await redis.get(decoded.id as string);
            if(!session){
                return next(new ErrorHandler(message,400));
            }
            const user = JSON.parse(session);
            const accessToken = jwt.sign({id:user._id},process.env.ACCESS_TOKEN,{expiresIn:"5m"});
            const refreshToken = jwt.sign({id:user._id},process.env.REFRESH_TOKEN,{expiresIn:"3d"});

            req.user = user;

            res.cookie("access_token",accessToken,accessTokenOptions);
            res.cookie("refresh_token",refreshToken,refreshTokenOptions);

            res.status(200).json({
                success:true,
                accessToken
            })
        } catch (error) {
            console.log(error);
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

export const getUserById = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try { 
           const userId = req.user?._id;
           getUserByIdService(userId,res)
        } catch (error) {
            console.log(error);
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

export const updateUserInfo = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try { 
            const {name, email} = req.body as IUpdateUserInfo;
            const userId = req.user?._id;
            const user = await userModel.findById(userId);

            if(email && user){
                const isEmailExist = await userModel.find({email});
                if(isEmailExist){
                    return next(new ErrorHandler("Email already exist",400))
                }
                user.email = email
            }
            if(name && user){
                user.name = name;
            }
            await user?.save();
            await redis.set(userId,JSON.stringify(user));
            res.status(201).json({
                success:true,
                user,
            })
        } catch (error) {
            console.log(error);
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

export const updatePassword = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try { 
            const {oldPassword, newPassword} = req.body as IUpdatePassword
            const user = await userModel.findById(req?.user._id).select("+password");
            if(user?.password === undefined){
                return next(new ErrorHandler("Invalid user",400))
            }

            const isPasswordMatch = await user?.comparePassword(oldPassword);

            if(isPasswordMatch){
                return next(new ErrorHandler("Invalid old password",400))
            }

            user.password = newPassword;
            await user.save()
            await redis.set(req.user?._id, JSON.stringify(user))
            res.status(201).json({
                success:true,
            })
        } catch (error) {
            console.log(error);
            return next(new ErrorHandler(error.message, 400));
        }
    }
);


