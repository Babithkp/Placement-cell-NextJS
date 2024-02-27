"use server";
import PlacementUserInfo, {
  placementUserInfo,
} from "../models/placementUserDetail";
import { connectDB } from "../dbConnect";
import JobsInfo from "../models/jobs";
import { revalidatePath } from "next/cache";
import { announcement } from "../models/announcement";
import Admin, { admin } from "../models/admin";

interface newJob {
  _id: string;
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
    const placementcellUser = await PlacementUserInfo.findOne({
      companyName: newJobs.companyName,
    });
    if (isFound.length > 0) {
      console.error("JOb Already exists");
      return false;
    } else {
      const newjob = new JobsInfo(newJobs);
      await newjob.save();      
      if (placementcellUser) {
        const updatePlacementJob = await PlacementUserInfo.findByIdAndUpdate(
          placementcellUser._id,
          { $push: { jobList: newjob._id } },
        );
        if (updatePlacementJob) {
          console.log("Job have updated to placement cell user");
        }
      }
      const admin = await Admin.findOne({
        email: "admin@gmail.com",
        password: "admin123",
      });
      if (admin) {
        const updatedAdmin = await Admin.findByIdAndUpdate(admin._id, {
          $push: { jobs: newjob._id },
        });
        if (updatedAdmin) {
          console.log("Job have updated to Admin");
        }
      }

      console.log("data saved!");
      revalidatePath("/jobListings");
      return true;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getAllJobInfo = async () => {
  try {
    await connectDB();
    const admin = await JobsInfo.find();
    const serializedData = JSON.stringify(admin);
    return serializedData;
  } catch (err) {
    console.log(err);
  }
};

export const getJobInfoForAdmin = async () => {
  try {
    await connectDB();
    const admin = await Admin.findOne({ email: "admin@gmail.com" })
      .populate("jobs")
      .exec();
    const serializedData = JSON.stringify(admin.jobs);
    return serializedData;
  } catch (err) {
    console.log(err);
  }
};

export const getJobById = async (jobId: string) => {
  try {
    await connectDB();
    const job = await JobsInfo.findById(jobId);
    if (job.length === 0) {
      console.error("Failed to find job");
      return;
    }
    const serializedData = JSON.stringify(job);
    return serializedData;
  } catch (err) {
    console.log(err);
  }
};

export const updateJobInfo = async (jobDetails: any, jobId: string) => {
  try {
    if (jobDetails && jobId) {
      const response = await JobsInfo.findByIdAndUpdate(jobId, jobDetails);
      if (response) {
        console.log("Data saved");
        return true;
      }
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteJobInfo = async (jobId: string) => {
  let job;
  try {
    const owners = await Admin.updateMany({ $pull: { jobs: jobId } });
    job = await JobsInfo.findByIdAndDelete(jobId);
    console.log("Job deatils have deleted");
    revalidatePath("/adminDashboard");
    if (!job || !owners) {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
  }
};
