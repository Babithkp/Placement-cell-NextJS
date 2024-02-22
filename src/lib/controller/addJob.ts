"use server";
import { connectDB } from "../dbConnect";
import JobsInfo,{ jobs } from "../models/jobs";
import { revalidatePath } from "next/cache";
import { announcement } from "../models/announcement";

interface newJob {
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
  applicationNo: number;
  announcement: [announcement];
  submitOn: Date;
}

export const addNewJobs = async (newJobs: newJob) => {
  try {
    await connectDB();
    const isFound = await JobsInfo.find({
      jobtTitle: newJobs.jobtTitle,
      companyName: newJobs.companyName,
    });
    if (isFound.length > 0) {
      console.error("JOb Already exists");
      return false;
    } else {
      const newjob = new JobsInfo(newJobs);
      await newjob.save();
      console.log("data saved!");
      revalidatePath("/jobListings");
      return true
    }
  } catch (err) {
    console.error(err);
  }
};


