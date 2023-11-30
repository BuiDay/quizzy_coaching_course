import mongoose, { Model, Schema,Document} from "mongoose";

export interface IOrder extends Document{
    courseId:string;
    userId:string;
    payment_info:object
}

const orderSchema:Schema<IOrder> = new mongoose.Schema({
    courseId:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    },
    payment_info:{
        type:Object,
    }
},{
    timestamps:true
})

const orderModel: Model<IOrder> = mongoose.model("Order",orderSchema);

export default orderModel;