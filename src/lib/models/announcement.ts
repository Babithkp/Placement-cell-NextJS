import mongoose from "mongoose";

export interface announcement extends mongoose.Document{
    title: string;
    validity: Date;
    type: string;
    description: string;
}

const Announcement = new mongoose.Schema<announcement>({
    title: {
        type: String,
        required: true,
        minlength: [3, "Title can not be lesser than 3 characters"]
    },
    validity:{
        type: Date,
        required: true,
    },
    type: {
        type: String,
        minlength: [3, "Title can not be lesser than 3 characters"]
    },
    description:{
        type: String,
        minlength: [10, "Title can not be lesser than 10 characters"]
    }
})

export default mongoose.models.Announcement || mongoose.model<announcement>("Announcement", Announcement)