"use server";
import { connectDB } from "../dbConnect";
import JobsInfo from "../models/jobs";

export const getJobInfo = async () => {
  try {
    await connectDB();
    const allJobs = await JobsInfo.find();
    const serializedData = JSON.stringify(allJobs);
    return serializedData;
  } catch (err) {
    console.log(err);
  }
};

export const getJobById = async (jobId:string) => {
  try{
    await connectDB();
    const job = await JobsInfo.findById(jobId)
    if(job.length === 0) {
      console.error("Failed to find job");
      return
    }
    const serializedData = JSON.stringify(job);
    return serializedData;
  }catch(err){
    console.log(err);
    
  }
}