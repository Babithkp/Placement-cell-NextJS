"use server";
import { revalidatePath } from "next/cache";
import Announcement, { announcement } from "../models/announcement";
import JobsInfo from "../models/jobs";
import Admin from "../models/admin";

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
    const isFound = await Announcement.find({
      title: announcementData.title,
      description: announcementData.description,
    });
    if (isFound.length > 0) {
      console.log("Announcement is already present");
      return false;
    }
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
      revalidatePath("/adminDashboard");
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getAllAccouncements = async () => {
  try {
    const admin = await Admin.findOne({ email: "admin@gmail.com" })
      .populate({
        path: "jobs",
        populate: {
          path: "announcement",
          model: "Announcement",
        },
        select: "jobtTitle companyName announcement",
      })
      .exec();
    const filtered = JSON.stringify(admin);
    if (admin.length < 0) {
      return false;
    } else {
      return filtered;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getAccouncementById = async (id: string) => {
  try {
    const singleAccouncement = await Announcement.findById(id);
    if (singleAccouncement.length < 0) {
      return false;
    } else {
      const filtered = JSON.stringify(singleAccouncement);
      return filtered;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setAdmin = async () => {
  try {
    const admin = new Admin({
      email: "admin@gmail.com",
      password: "admin123",
    });
    admin.save();
    console.log("Admin created");
  } catch (error) {
    console.log(error);
  }
};

export const getJobsAnnouncement = async (announcementId: string) => {
  try {
    const job = await JobsInfo.findOne({ announcement: announcementId });
    if (job.length < 0) {
      return false;
    } else {
      const filtered = JSON.stringify(job);
      return filtered;
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateAccouncement = async (
  announcementData: announcement,
  jobId: string,
  announceId: string,
) => {
  let job;
  try {
    const isFound = await Announcement.find({
      title: announcementData.title,
      description: announcementData.description,
    });
    if (isFound.length > 0) {
      console.log("Announcement is already present");
      return false;
    }
    const announcement = await Announcement.findOneAndUpdate(
      { _id: announceId },
      announcementData,
    );
    if (jobId === "null") {
      job = await JobsInfo.updateMany({
        $push: { announcement: announcement._id },
      });
    } else {
      job = await JobsInfo.findOneAndUpdate(
        { _id: jobId },
        { $push: { announcement: announcement._id } },
      );
    }
    revalidatePath("/adminDashboard");
    return true;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAnnouncement = async (announceId: string) => {
  let announcement;
  try {
      const job = await JobsInfo.updateMany({$pull: { announcement: announceId }});
      announcement = await Announcement.findOneAndDelete({ _id: announceId });
      console.log("Announcement deleted");
      revalidatePath("/adminDashboard");
      if(!job  || !announcement) {
        return false
      }
      return true;
  } catch (error) {
    console.log(error);
  }
};
