import mongoose, { Schema } from "mongoose";
import { jobs } from "./jobs";

export interface admin extends mongoose.Document {
    email: string;
    password: string;
    type: string;
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
    type: {
        type: String,
        default: "admin"
    },
    jobs: [{
        type: Schema.Types.ObjectId,
        ref: "NewJobs"
    }]
}) 

export default mongoose.models.Admin ||  mongoose.model<admin>("Admin", Admin);