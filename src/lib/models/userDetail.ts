import mongoose, { Schema } from "mongoose";
import { jobs } from "./jobs";
import User,{user} from "./user";
import {announcement} from "./announcement";

export interface userDetails extends mongoose.Document {
  user: user,
  name: string;
  gender: string;
  phone: Number;
  sslcMarks: Number;
  twelvesMarks: Number;
  BEMarks: Number;
  backlogs: Number;
  collegeName: string;
  historyBacklogs: Number;
  passOutYear: Date;
  batch: String;
  address: string;
  resumeURL: string;
  announcement: [announcement];
  savedJobs: [jobs];
  appliedJobs: [jobs];
}

const UserDetails = new Schema<userDetails>({
  user: {type: Schema.Types.ObjectId,ref: "User"},
  name: {
    type: String,
    required: true,
    minlength: [3, "name cannot be less than 3 characters"],
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  phone: {
    type: Number,
    minlength: [10, "phone cannot be less than 10 characters"],
    maxlength: [10, "phone cannot be more than 10 characters"],
  },
  sslcMarks: {
    type: Number,
    minlength: [1, "Aggregate cannot be less than 1 characters"],
  },
  twelvesMarks: {
    type: Number,
    minlength: [1, "Aggregate cannot be less than 1 characters"],
  },
  BEMarks: {
    type: Number,
    minlength: [1, "BEMarks cannot be less than 1 characters"],
  },
  backlogs: {
    type: Number,
    minlength: [1, "Backlogs cannot be less than 1 characters"],
  },
  collegeName: {
    type: String,
    minlength: [10, "College name cannot be less than 10 characters"],
  },
  historyBacklogs: {
    type: Number,
    minlength: [1, "Backlogs cannot be less than 1 characters"],
  },
  passOutYear: {
    type: Date,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    minlength: [10, "Address cannot be less than 10 characters"],
  },
  resumeURL: {
    type: String,
    required: true,
  },
  announcement:[{
    type: Schema.Types.ObjectId, req: "Announcement"
  }],
  savedJobs:[{
    type: Schema.Types.ObjectId, ref:"Jobs"
  }],
  appliedJobs:[{
    type: Schema.Types.ObjectId,ref: 'Jobs'
  }]
});

export default mongoose.models.UserDetails ||
  mongoose.model<userDetails>("UserDetails", UserDetails);
