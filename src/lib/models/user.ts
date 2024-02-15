import mongoose from "mongoose";

export interface user extends mongoose.Document{
    email: string;
    password: string;
    type: string;
}

export const User = new mongoose.Schema<user>({
    email: {
        type: String,
        minlength:[5,"email cannot be less than 5 characters"]
    },
    password:{
        type: String,
        minlength:[5,"password cannot be less than 5 characters"]
    },
    type: {
        type: String,
        enum: ["user", "placement-cell","admin"]
    }
})

export default mongoose.models.User || mongoose.model<user>("User", User);