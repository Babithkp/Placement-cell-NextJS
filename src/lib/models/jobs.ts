import mongoose, { Schema } from "mongoose";
import { announcement } from "./announcement";
import {userInformations} from "./UserInformation";
export interface jobs extends mongoose.Document {
    _id: string;
    jobtTitle: string;
    companyName: string;
    deadline: Date;
    companyWebsite: string;
    comapanyLocation: string
    role: string;
    indrustryType: string;
    workMode: string;
    department: string;
    roleCategory: string;
    education: string;
    skills: string[];
    package: string;
    openings: number;
    jobDescription: string;
    aboutCompany: string;
    impressions: number;
    applicants: [userInformations];
    announcement: [announcement];
    submitOn: Date;
}



const JobSchema = new mongoose.Schema<jobs>({
    jobtTitle: {
    type: String,
    required: [true, "Please provide a name for this job Title."],
    minlength: [5, "jobtTitle cannot be lesser than 5 characters"],
  },
  companyName: {
    type: String,
    required: [true, "Please provide the company Name"],
    minlength: [5, "company's Name cannot be lesser than 5 characters"],
  },
  deadline: {
    type: Date,
    required: [true, "Please specify the species of your pet."],
    
  },
  companyWebsite: {
    type: String,
    required: [true, "Please provide the company Website"],
    minlength: [5, "company Website cannot be lesser than 5 characters"],
  },
  comapanyLocation: {
    type: String,
    required: [true, "Please provide the company location"],
    minlength: [3, "company Location cannot be lesser than 3 characters"],

  },
  role: {
    type: String,
    required: [true, "Please provide the role"],
    minlength: [5, "role cannot be lesser than 5 characters"],
    
  },
  indrustryType: {
    type: String,
    required: [true, "Please provide the indrustry Type"],
    minlength: [5, "indrustryType cannot be lesser than 5 characters"],
  },
  workMode: {
    type: String,
    required: [true, "Please provide the workMode"],
    minlength: [5, "workMode cannot be lesser than 5 char acters"],
  },
  department: {
    type: String,
    required: [true, "Please provide the department"],
    minlength: [5, "department cannot be lesser than 5 char acters"],
  },
  roleCategory: {
    type: String,
    required: [true, "Please provide the roleCategory"],
    minlength: [5, "roleCategory cannot be lesser than 5 char acters"],
  },
  education: {
    type: String,
    required: [true, "Please provide the education"],
    minlength: [5, "education cannot be lesser than 5 characters"],
  },
  skills: {
    type: [String],
    required: [true, "Please provide the skills"],
  },
  package: {
    type: String,
    required: [true, "Please provide the package"],
    minlength: [3, "package cannot be lesser than 5 characters"],
  },
  openings: {
    type: Number,
    required: [true, "Please provide the openings"],
  },
  jobDescription: {
    type: String,
    required: [true, "Please provide the jobDescription"],
    minlength: [10, "jobDescription cannot be lesser than 5 characters"],
  },
  aboutCompany: {
    type: String,
    required: [true, "Please provide the aboutCompany"],
    minlength: [10, "aboutCompany cannot be lesser than 5 characters"],
  },
  announcement: [
    {
      type: Schema.Types.ObjectId,
      req: "Announcement",
    },
  ],
  impressions: {
    type: Number,
    default: 0
  },
  applicants: [
    {
      type: Schema.Types.ObjectId,
      req: "UserInformations",
    },
  ],
  submitOn: {
    type: Date,
    default: Date.now
  },
});

export default mongoose.models.JobsInfomaton ||  mongoose.model<jobs>("JobsInfomaton", JobSchema);
