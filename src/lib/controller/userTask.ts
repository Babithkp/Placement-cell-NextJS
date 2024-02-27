"use server";
import UserInformations, { userInformations } from "../models/UserInformation";
import PlacementUserDetais, {
  placementUserDetais,
} from "../models/placementUserDetail";
import { connectDB } from "../dbConnect";
import { revalidatePath } from "next/cache";
import User, { user } from "../models/user";
import bcrypt from "bcryptjs";

export const IsUserExists = async (email: string) => {
  try {
    await connectDB();
    const isFound = await User.find({
      email: email,
    });
    if (isFound.length > 0) {
      console.error("User Already exists");
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

export const addNewUser = async (
  userInfo: userInformations,
  userSignUp: user,
) => {
  try {
    await connectDB();
    const hashedPassword = await bcrypt.hash(userSignUp.password, 12);
    userSignUp.password = hashedPassword;
    const newUser = new User(userSignUp);
    await newUser.save();
    const userDetails = new UserInformations({
      ...userInfo,
      user: newUser._id,
    });
    await userDetails.save();
    console.log("data saved!");
    revalidatePath("/");
    const filter = JSON.stringify(userDetails);
    return filter;
  } catch (error) {
    console.log(error);
  }
};

export const addNewPlacementUser = async (
  userInfo: placementUserDetais,
  userSignUp: { email: string; password: string; type: string },
) => {
  try {
    await connectDB();
    const hasshedPassword = await bcrypt.hash(userSignUp.password, 12);
    userSignUp.password = hasshedPassword;
    const newUser = new User(userSignUp);
    await newUser.save();
    const userDetails = new PlacementUserDetais({
      ...userInfo,
      user: newUser._id,
    });
    await userDetails.save();
    console.log("data saved!");
    revalidatePath("/");
    return true;
  } catch (error) {
    console.log(error);
  }
};

export const getUserDetails = async (userId: string) => {
  try {
    await connectDB();
    if (userId) {
      const user = await UserInformations.findOne({ _id: userId })
        .populate("user", "email")
        .exec();
      if (user.length === 0) {
        return false;
      } else {
        const filteredUser = JSON.stringify(user);
        return filteredUser;
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async (email: string, password: string) => {
  try {
    await connectDB();
    const user = await User.findOne({ email: email });
    const passwordCheck = await bcrypt.compare(password, user.password);
    if (user.length === 0) {
      return false;
    } else if (user.type === "user" && passwordCheck) {
      const userDetail = await UserInformations.findOne({ user: user._id });
      const filteredUser = JSON.stringify(userDetail);
      return filteredUser;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

export const setUserProfilePIc = async (
  url: string | undefined,
  userId: string,
) => {
  try {
    await connectDB();
    const user = await UserInformations.findById(userId);
    if (user) {
      user.profileUrl = url;
      user.save();
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

export const edituserProfession = async (profession:string, userId:string)=>{
  try{
    const user = await UserInformations.findByIdAndUpdate(userId,{profession: profession});
    if(user.length === 0) {
      return false;
    }
    console.log("updated user details");
    
    return true
  }catch(error){
    console.log(error);
    
  }
}
export const edituserAddress = async (address:string, userId:string)=>{
  try{
    const user = await UserInformations.findByIdAndUpdate(userId,{address: address});
    if(user.length === 0) {
      return false;
    }else{
      console.log("updated user details");
    }
    
    return true
  }catch(error){
    console.log(error);
    
  }
}
export const edituserCollege = async (collegeName:string, userId:string)=>{
  try{
    const user = await UserInformations.findByIdAndUpdate(userId,{collegeName: collegeName});
    if(user.length === 0) {
      return false;
    }else{
      console.log("updated user details");
    }
    
    return true
  }catch(error){
    console.log(error);
    
  }
}
export const edituserBatch = async (batch:string, userId:string)=>{
  try{
    const user = await UserInformations.findByIdAndUpdate(userId,{batch: batch});
    if(user.length === 0) {
      return false;
    }else{
      console.log("updated user details");
    }
    
    return true
  }catch(error){
    console.log(error);
    
  }
}
export const edituserPassOutYear = async (passOutYear:string, userId:string)=>{
  try{
    const user = await UserInformations.findByIdAndUpdate(userId,{passOutYear: passOutYear});
    if(user.length === 0) {
      return false;
    }else{
      console.log("updated user details");
    }
    
    return true
  }catch(error){
    console.log(error);
    
  }
}