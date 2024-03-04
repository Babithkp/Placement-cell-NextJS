import mongoose, { Schema } from "mongoose";
import { jobs } from "./jobs";

export interface lastestjobs extends mongoose.Document {
    jobsList: [jobs]
}

const lastestJobListSchema = new mongoose.Schema<lastestjobs>({
    jobsList: [{
        type: Schema.Types.ObjectId, ref: "NewJobs"
    }]
})

export default mongoose.models.Lastestjobs || mongoose.model<lastestjobs>("Lastestjobs", lastestJobListSchema);