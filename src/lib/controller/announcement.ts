"use server"
import { connectDB } from "../dbConnect";
import  Announcement from "../models/announcement"
import JobsInfo from "../models/jobs";

interface Inputs {
    title: string;
    validity: Date;
    type: string;
    description: string;
  }

export const addNewAnnoucement = async(announcementData:Inputs,jobId:string) =>{
    try{
        await connectDB()
        const announcement = new Announcement(announcementData)
        await announcement.save()
        const job = await JobsInfo.findOneAndUpdate({_id:jobId},{$push:{announcement: announcement._id}})
        await job.save()
        console.log(job);
        
    }catch(err){
        console.log(err);
        
    }
}