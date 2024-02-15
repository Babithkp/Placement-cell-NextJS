"use server";
import { connectDB } from "../dbConnect";
import Jobs, { jobs } from "../models/jobs";
import { revalidatePath } from "next/cache";

export const addNewJobs = async (newJobs: jobs) => {
  try {
    await connectDB();
    const isFound = await Jobs.find({
      jobtTitle: newJobs.jobtTitle,
      companyName: newJobs.companyName,
    });
    if (isFound.length > 0) {
      console.error("JOb Already exists");
      return false;
    } else {
      const newjob = new Jobs(newJobs);
      await newjob.save();
      console.log("data saved!");
      revalidatePath("/jobListings");
      return true
    }
  } catch (err) {
    console.error(err);
  }
};

// export const databaseInital = async () => {
//   try {
//     await connectDB();
//     console.log("connection to database");

//   } catch (err) {
//     console.log(err);
//   }
// };
