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
      .populate({path:"jobList"})
      .exec();
    
    if (userDetails.length === 0) {
      return false;
    } else {
      const filteredUser = JSON.stringify(userDetails);
      revalidatePath("/placementUserDashboard")
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
      revalidatePath("/userDetails");
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};


// export const getJobsApplicantsDetails = async (jobId: string) => {
//   try {
//     await connectDB();
//     const jobinfo = await NewJobs.findById(jobId);
//     const userDetail = [];
//     for (let job of jobinfo.applicants) {
//       const userInfo = await UserInformation.findById(job).populate("user");
//       userDetail.push(userInfo);
//     }
//     if (jobinfo) {
//       const filter = JSON.stringify(userDetail);
//       revalidatePath("/placementUserDashboard")
//       return filter;
//     } else {
//       return false;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

export const selectedStudentForJob = async (userId: string, jobId: string) => {

  try {
    const isFound = await NewJobs.findOne({ "selectApplicants" :userId })
    if(isFound) {
      console.log("User already selected");
      return 
    }
    const removeFromAplicant = await NewJobs.findByIdAndUpdate(jobId, {
      $pull: { "applicants" :{userId:userId} },
    }
    );

    if(removeFromAplicant){
      console.log("removed From Aplicant");
      
    }
    const updatedJob = await NewJobs.findByIdAndUpdate(jobId, {
      $push: { selectApplicants:userId },
    });
    if (updatedJob) {
      console.log("Updated to selected section");
      revalidatePath("/placementUserDashboard")
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getPlacementUSerInfo = async(userId:string)=>{
  try{
    const jobDetails = await PlacementUserInfo.findById(userId).populate("user")
    if(jobDetails){
      const filtered = JSON.stringify(jobDetails);
      revalidatePath("/placementUserDashboard")
      return filtered
    }else{
      return false
    }

  }catch(error){
    console.log(error);
    
  }
}

export const deleteFromSelected = async(jobId:string,userId:string)=>{
  
  try{
    const jobDetails = await NewJobs.findByIdAndUpdate(jobId,{$pull: { selectApplicants:userId }})
    if(jobDetails){
      console.log("delete From Selected");
      revalidatePath("/placementUserDashboard")
      return true
    }else{
      return false
    }
  }catch(error){
    console.log(error);
    
  }
}