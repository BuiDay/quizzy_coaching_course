import userModel from "../models/user.model";
import { NextFunction, Request, Response } from "express";
import { redis } from "../utils/redis";

export const getUserByIdService = async (id: string, res: Response) => {
    // const user = await userModel.findById(id)
    // res.status(200).json({
    //     success: true,
    //     user
    // })
    const userJson = await redis.get(id);
    if(userJson){
        const user = JSON.parse(userJson);
        res.status(201).json({
            success:true,
            user
        })
    }
}