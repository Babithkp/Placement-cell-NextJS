"use server";
import { revalidatePath } from "next/cache";
import Announcement from "../models/announcement";
import JobsInfo from "../models/jobs";

interface Inputs {
  title: string;
  validity: Date;
  type: string;
  description: string;
}

export const addNewAnnoucement = async (
  announcementData: Inputs,
  jobId: string,
) => {
  let job;
  try {
    const announcement = new Announcement(announcementData);
    await announcement.save();
    if (jobId === "null") {
      job = await JobsInfo.updateMany({
        $push: { announcement: announcement._id },
      });
    } else {
      job = await JobsInfo.findOneAndUpdate(
        { _id: jobId },
        { $push: { announcement: announcement._id } },
      );
      await job.save();
    }
    if (job) {
      console.log("data saved");
      revalidatePath("/");
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};
