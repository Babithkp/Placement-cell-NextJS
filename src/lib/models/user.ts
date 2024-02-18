import mongoose from "mongoose";

export interface user extends mongoose.Document{
    email: string;
    password: string;
    type: string;
}

export const UserSchema = new mongoose.Schema<user>({
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
        enum: ["user","placement-cell","admin"],
        required: true,
    }
})

export default mongoose.models.User || mongoose.model<user>("User", UserSchema);