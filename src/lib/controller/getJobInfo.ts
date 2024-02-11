"use server";
import { connectDB } from "../dbConnect";
import Jobs from "../models/newForm";

export const getJobInfo = async () => {
  try {
    await connectDB();
    const allJobs = await Jobs.find();
    const serializedData = JSON.stringify(allJobs);
    return serializedData;
  } catch (err) {
    console.log(err);
  }
};
