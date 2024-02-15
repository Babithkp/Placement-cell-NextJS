import mongoose from "mongoose";
import { jobs } from "./jobs";
import User,{user} from "./user";

export interface placementUserDetais extends mongoose.Document {
  user: user,
  name: String;
  gender: String;
  phone: Number;
  companyName: String;
  companyLocation: String;
  twitterLink: String;
  fackbookLink: String;
  linkdenInLink: String;
  aboutCompany: String;
  companyAddress: String;
  jobList: jobs;
}

const PlacementUserDetais = new mongoose.Schema<placementUserDetais>({
  user: User,
  name: {
    type: String,
    minlength: [3, "name cannot be less than 3 characters"],
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  phone: {
    type: Number,
    minlength: [10, "Phone number must be at least 9 characters"],
    maxlength: [10, "Phone number should not exceed 10 characters"],
  },
  companyName: {
    type: String,
    minlength: [3, "company name cannot be less than 3 characters"],
  },
  companyLocation: {
    type: String,
    minlength: [3, "company location cannot be less than 3 characters"],
  },
  twitterLink: {
    type: String,
    minlength: [5, "twitter link cannot be less than 5 characters"],
  },
  fackbookLink: {
    type: String,
    minlength: [5, "fackbook link cannot be less than 5 characters"],
  },
  linkdenInLink: {
    type: String,
    minlength: [5, "linkdenIn Link cannot be lesser than 5 characters"],
  },
  aboutCompany: {
    type: String,
    minlength: [10, "About Company cannot be lesser than 10 characters"],
  },
  companyAddress: {
    type: String,
    minlength: [10, "Company address cannot be lesser than 10 characters"],
  },
  jobList: [{
    type: mongoose.Types.ObjectId, ref: "Jobs"
  }],
});

export default mongoose.models.PlacementUserDetais ||
  mongoose.model<placementUserDetais>("Announcement", PlacementUserDetais);
