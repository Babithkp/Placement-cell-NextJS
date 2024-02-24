"use server";
import UserDetails, { userDetails } from "../models/userDetail";
import PlacementUserDetais, {
  placementUserDetais,
} from "../models/placementUserDetail";
import { connectDB } from "../dbConnect";
import { revalidatePath } from "next/cache";
import User, { user } from "../models/user";
import bcrypt from "bcryptjs";
import userDetail from "../models/userDetail";


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

export const addNewUser = async (userInfo: userDetails, userSignUp: user) => {
  try {
    await connectDB();
    const hasshedPassword = await bcrypt.hash(userSignUp.password, 12);
    userSignUp.password = hasshedPassword;
    const newUser = new User(userSignUp);
    await newUser.save();
    const userDetails = new UserDetails({
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


export const addNewPlacementUser = async (userInfo: placementUserDetais, userSignUp: {email:string,password:string,type:string})=>{
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
}

export const getUserInfo= async()=>{
  try{
      const userInfo = await UserDetails.findOne({_id:"65d96ff5e684b252436055d2"}).populate({ path: 'user', options: { strictPopulate: false } }).exec()
      console.log(userInfo);
      
  }catch(error){
    console.log(error);
    
  }
}