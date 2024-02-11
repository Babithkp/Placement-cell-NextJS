import mongoose from "mongoose";

export interface jobs extends mongoose.Document {
    jobtTitle: string;
    companyName: string;
    deadline: Date;
    companyWebsite: string;
    comapanyLocation: string;
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
    submitOn: Date
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const JobSchema = new mongoose.Schema<jobs>({
  _id: mongoose.Schema.Types.ObjectId,
    jobtTitle: {
    type: String,
    required: [true, "Please provide a name for this job Title."],
    // maxlength: [10, "jobtTitle cannot be more than 10 characters"],
  },
  companyName: {
    type: String,
    required: [true, "Please provide the company Name"],
    // maxlength: [8, "Owner's Name cannot be more than 60 characters"],
  },
  deadline: {

    type: Date,
    required: [true, "Please specify the species of your pet."],
  },
  companyWebsite: {
    type: String,
    required: [true, "Please provide the company Website"],
  },
  comapanyLocation: {
    type: String,
    required: [true, "Please provide the company location"],
  },
  role: {
    type: String,
    required: [true, "Please provide the role"],
  },
  indrustryType: {
    type: String,
    required: [true, "Please provide the indrustry Type"],
  },
  workMode: {
    type: String,
    required: [true, "Please provide the workMode"],
  },
  department: {
    type: String,
    required: [true, "Please provide the department"],
  },
  roleCategory: {
    type: String,
    required: [true, "Please provide the roleCategory"],
  },
  education: {
    type: String,
    required: [true, "Please provide the education"],
  },
  skills: {
    type: [String],
    required: [true, "Please provide the skills"],
  },
  package: {
    type: String,
    required: [true, "Please provide the package"],
  },
  openings: {
    type: Number,
    required: [true, "Please provide the openings"],
  },
  jobDescription: {
    type: String,
    required: [true, "Please provide the jobDescription"],
  },
  aboutCompany: {
    type: String,
    required: [true, "Please provide the aboutCompany"],
  },
  submitOn: {
    type: Date,
    default: Date.now
  },
});

export default mongoose.models.Jobs ||  mongoose.model<jobs>("Jobs", JobSchema);
