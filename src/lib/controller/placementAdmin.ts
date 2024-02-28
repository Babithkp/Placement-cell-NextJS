"use server";
import PlacementUserInfo, {
  placementUserInfo,
} from "../models/placementUserDetail";
import { connectDB } from "../dbConnect";
import { revalidatePath } from "next/cache";
import User, { user } from "../models/user";
import bcrypt from "bcryptjs";


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
        userData : userDetail._id,
        type: user.type
      }
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
    const userDetails = await PlacementUserInfo.findById(id).populate(
      "user",
      "email",
    );
    
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

export const getJobsOfPlacementUser = async (id: string)=>{
  try{
    const userJobList = await PlacementUserInfo.findById(id).populate("jobList");    
    if(userJobList){
      const filterJobs = JSON.stringify(userJobList.jobList);
      return filterJobs
    }
  }catch(error){
    console.log(error);
    
  }
}