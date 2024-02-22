import AddDrives from "@/components/adminDashboard/AddDrives";
import Announcement from "@/components/adminDashboard/Announcement";
import Dashboard from "@/components/Dashboard";
import DriveInfo from "@/components/adminDashboard/DriveInfo";
import React from "react";
import AnnounceForm from "@/components/adminDashboard/AnnounceForm";


export default function page() {
  return (
    <div className="w-[80%] max-sm:w-[95%]  flex flex-col gap-8">
      {/* <Dashboard title={"Admin Dashboard"}/>
      <DriveInfo/> */}
      <Announcement/>
      <AnnounceForm/>
    </div>
  );
}
