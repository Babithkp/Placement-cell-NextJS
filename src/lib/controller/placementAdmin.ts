"use server";
import PlacementUserInfo, {
  placementUserInfo,
} from "../models/placementUserDetail";
import { connectDB } from "../dbConnect";
import { revalidatePath } from "next/cache";
import User, { user } from "../models/user";
import bcrypt from "bcryptjs";
import NewJobs from "../models/jobs";
import UserInformation from "../models/UserInformation";

export const placementUserLogin = async (email: string, password: string) => {
  try {
    await connectDB();
    const user = await User.findOne({ email: email });
    const passwordCheck = await bcrypt.compare(password, user.password);
    if (user.length === 0) {
      return false;
    } else if (user.type === "placement-cell" && passwordCheck) {
      const userDetail = await PlacementUserInfo.findOne({ user: user._id });
      const userIndo = {
        userData: userDetail._id,
        type: user.type,
      };
      const filteredUser = JSON.stringify(userIndo);

      return filteredUser;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getPlacementUserDetails = async (id: string) => {
  try {
    await connectDB();
    const userDetails = await PlacementUserInfo.findById(id)
      .populate({path:"jobList",populate:{path:"applicants",model: "UserInformations",populate:{path:"user"}}})
      .populate({path:"jobList",populate:{path:"selectApplicants",model: "UserInformations",populate:{path:"user"}}})
      .exec();
    
    if (userDetails.length === 0) {
      return false;
    } else {
      const filteredUser = JSON.stringify(userDetails);
      return filteredUser;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setPlacementUserProfilePic = async (
  url: string | undefined,
  id: string,
) => {
  try {
    await connectDB();
    const user = await PlacementUserInfo.findByIdAndUpdate(id, {
      $set: { profileUrl: url },
    });
    if (user) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};


export const getJobsApplicantsDetails = async (jobId: string) => {
  try {
    await connectDB();
    const jobinfo = await NewJobs.findById(jobId);
    const userDetail = [];
    for (let job of jobinfo.applicants) {
      const userInfo = await UserInformation.findById(job).populate("user");
      userDetail.push(userInfo);
    }
    if (jobinfo) {
      const filter = JSON.stringify(userDetail);
      return filter;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

export const selectedStudentForJob = async (userId: string, jobId: string) => {
  console.log(userId);

  try {
    const updatedJob = await NewJobs.findByIdAndUpdate(jobId, {
      $push: { selectApplicants: { user: userId } },
    });

    console.log(updatedJob);

    if (updatedJob) {
      console.log("Updated to selected section");
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
