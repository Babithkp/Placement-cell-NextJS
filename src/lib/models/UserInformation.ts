import mongoose, { Schema } from "mongoose";
import { jobs } from "./jobs";
import User, { user } from "./user";
import { announcement } from "./announcement";

export interface userInformations extends mongoose.Document {
  user: user;
  name: string;
  profileUrl: string;
  gender: string;
  phone: Number;
  sslcMarks: Number;
  twelvesMarks: Number;
  BEMarks: Number;
  backlogs: Number;
  collegeName: string;
  historyBacklogs: Number;
  passOutYear: String;
  batch: String;
  address: string;
  profession: String;
  city: string;
  resumeURL: string;
  date_of_birth: Date;
  savedJobs: [jobs];
  appliedJobs: [jobs];
}

const UserInformations = new Schema<userInformations>({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  name: {
    type: String,
    required: true,
    minlength: [3, "name cannot be less than 3 characters"],
  },
  gender: {
    type: String,
    enum: ["MALE", "FEMALE"],
    required: true,
  },
  phone: {
    type: Number,
    minlength: [10, "phone cannot be less than 10 characters"],
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
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  profileUrl: {
    type: String,
  },
  profession: {
    type: String,
  },
  city: {
    type: String,
    minlength: [2, "city cannot be less than 2 characters"],
  },
  address: {
    type: String,
    minlength: [10, "Address cannot be less than 10 characters"],
  },
  resumeURL: {
    type: String,
    required: true,
  },
  savedJobs: [
    {
      type: Schema.Types.ObjectId,
      ref: "JobsInfo",
    },
  ],
  appliedJobs: [
    {
      type: Schema.Types.ObjectId,
      ref: "JobsInfo",
    },
  ],
});

export default mongoose.models.UserInformations ||
  mongoose.model<userInformations>("UserInformations", UserInformations);
