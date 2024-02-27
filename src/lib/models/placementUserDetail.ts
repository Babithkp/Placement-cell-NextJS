import mongoose, { Schema } from "mongoose";
import { jobs } from "./jobs";
import {user} from "./user";
import {userInformations} from "./UserInformation";

export interface placementUserDetais extends mongoose.Document {
  user: user,
  name: String;
  gender: String;
  phone: Number;
  companyName: String;
  companyIcon: String;
  twitterLink: String; 
  fackbookLink: String;
  linkdenInLink: String;
  comapanyLink: String;
  aboutCompany: String;
  companyAddress: String;
  jobList: jobs[];
  applicants: userInformations[];
  selectApplicants: userInformations[]
}

const PlacementUserDetaisSchema = new mongoose.Schema<placementUserDetais>({
  user: {type: Schema.Types.ObjectId,ref: "User"},
  name: {
    type: String,
    minlength: [5, "name cannot be less than 5 characters"],
  },
  gender: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    minlength: [10, "Phone number must be at least 10 characters"],
  },
  companyName: {
    type: String,
    minlength: [5, "company name cannot be less than 5 characters"],
  },
  twitterLink: {
    type: String,
  },
  companyIcon: {
    type: String,
  },
  fackbookLink: {
    type: String,
  },
  linkdenInLink: {
    type: String,
  },
  comapanyLink: {
    type: String,
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
    type: Schema.Types.ObjectId, ref: "Jobs"
  }],
  applicants: [{
    type: Schema.Types.ObjectId, ref: "UserInformations"
  }],
  selectApplicants: [{
    type: Schema.Types.ObjectId, ref: "UserInformations"
  }],
});

export default mongoose.models.PlacementUserDetais ||
  mongoose.model<placementUserDetais>("PlacementUserDetais", PlacementUserDetaisSchema);
