import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/errorHandler";

export const Error = (err: any, req: Request, res: Response, next: NextFunction) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server error";

    //wrong mongoDb is error
    if (err.name === 'CastError') {
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }
    // Duplicate key error 
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
        err = new ErrorHandler(message, 400);
    }
    // Jsonweb Token Error
    if (err.name === "JsonwebTokenError") {
        const message = 'Json web token is invalid'
        err = new ErrorHandler(message, 400)
    }
    // Jsonweb Expired error
    if (err.name === "JsonwebExpiredError") {
        const message = 'Json web expired is invalid'
        err = new ErrorHandler(message, 400)
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })
}