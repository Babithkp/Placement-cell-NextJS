import mongoose, { Schema } from "mongoose";
import { jobs } from "./jobs";

export interface admin extends mongoose.Document {
    email: string;
    password: string;
    jobs: [jobs];
}

const Admin = new mongoose.Schema<admin>({
    email:{
        type: String,
        required: true,
        minlength: [5, "email can not be lesser than 5 characters"],
    },
    password:{
        type: String,
        required: true,
        minlength: [5, "Password can not be lesser than 5 characters"],
    },
    jobs: [{
        type: Schema.Types.ObjectId,
        ref: "JobsInfomaton"
    }]
}) 

export default mongoose.models.Admin ||  mongoose.model<admin>("Admin", Admin);