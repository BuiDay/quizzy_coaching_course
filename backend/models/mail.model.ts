import mongoose, { Model, Schema,Document} from "mongoose";
import bcrypt from 'bcryptjs'
require('dotenv').config();
import jwt from 'jsonwebtoken'

const emailRegexPattern :RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export interface IMail extends Document{
    name:string;
    email:string;
}

const mailSchema:Schema<IMail> = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter your name"],
    },
    email:{
        type:String,
        required:[true, "Please enter your email"],
        validate:{
            validator:function(value:string){
                return emailRegexPattern.test(value)
            },
            message:"please enter a valid email",
        },
        unique:true
    }
},{
    timestamps:true
})

const mailModel: Model<IMail> = mongoose.model("Mail",mailSchema);

export default mailModel;