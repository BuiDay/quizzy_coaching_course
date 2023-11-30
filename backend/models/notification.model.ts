import mongoose, { Model, Schema,Document} from "mongoose";

export interface INotification extends Document{
    title:string;
    message:string;
    status:string;
    user:string
}

const notificationSchema:Schema<INotification> = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    user:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
        default:"unread"
    }
},{
    timestamps:true
})

const notificationModel: Model<INotification> = mongoose.model("notification",notificationSchema);

export default notificationModel;