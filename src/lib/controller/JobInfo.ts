"use server";
import PlacementUserInfo, {
  placementUserInfo,
} from "../models/placementUserDetail";
import { connectDB } from "../dbConnect";
import NewJobs from "../models/jobs";
import { revalidatePath } from "next/cache";
import { announcement } from "../models/announcement";
import Admin, { admin } from "../models/admin";
import UserInformations from "../models/UserInformation";
import LastestJobs from "../models/lastestJobs";

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
    const isFound = await NewJobs.find({
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
      const newjob = new NewJobs(newJobs);
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
      const checkJobList = await LastestJobs.findOne();
      if (!checkJobList) {
        const createNewJobList = new LastestJobs({
          jobsList: [newjob._id] 
        });
        await createNewJobList.save();
          console.log("newly updated in leatest");
        
      } else {
        if (checkJobList.jobsList.length > 4) {
          const popAndUpdatedInLastesJob = await LastestJobs.findByIdAndUpdate(
            checkJobList._id,
            {
              $pop: { jobsList: -1 },
            },
          );
          if (popAndUpdatedInLastesJob) {
            console.log("Poped old job list and updated leatest job");
          }
        }

        const updatedInLastesJob = await LastestJobs.findByIdAndUpdate(
          checkJobList._id,
          {
            $push: { jobsList: newjob._id },
          },
        );
        if (updatedInLastesJob) {
          console.log("updated in leatest");
        }
      }

      const admin = await Admin.findOne({
        email: "admin@gmail.com",
        password: "admin@123",
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
    const admin = await NewJobs.find();
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
    const job = await NewJobs.findById(jobId);
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
      const response = await NewJobs.findByIdAndUpdate(jobId, jobDetails);
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
    const leatest = await LastestJobs.updateMany({
      $pull: { jobsList: jobId },
    });
    job = await NewJobs.findByIdAndDelete(jobId);
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

export const appyForJob = async (userId: string, jobId: string) => {
  try {
    const isExist = await NewJobs.findOne({
      _id: jobId,
      applicants: { userId: userId },
    });
    if (isExist) {
      return false;
    } else {
      const jobInfo = await NewJobs.findByIdAndUpdate(jobId, {
        $push: { applicants: { userId: userId } },
      });
      if (jobInfo) {
        const userInfo = await UserInformations.findByIdAndUpdate(userId, {
          $push: { appliedJobs: jobId },
        });
        if (userInfo) {
          console.log("updated in user collection");
        }
      }
      if (!jobInfo) {
        return false;
      } else {
        return true;
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeJobFromAppliedList = async (
  jobId: string,
  userId: string,
) => {
  try {
    const userInfo = await UserInformations.findByIdAndUpdate(userId, {
      $pull: { appliedJobs: jobId },
    });
    if (userInfo) {
      console.log("removed job from users applied collection");
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

export const checkIsSavedJobToUser = async (jobId: string, userId: string) => {
  try {
    const user = await UserInformations.findOne({
      _id: userId,
      savedJobs: { $in: [jobId] },
    });
    if (user) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

export const getleatestJob = async () => {
  try {
    const jobs = await LastestJobs.find().populate("jobsList");
    if (jobs) {
      const filter = JSON.stringify(jobs);
      return filter;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};
