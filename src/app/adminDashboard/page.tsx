import AddDrives from "@/components/adminDashboard/AddDrives";
import Announcement from "@/components/adminDashboard/Announcement";
import Dashboard from "@/components/Dashboard";
import DriveInfo from "@/components/adminDashboard/DriveInfo";
import React from "react";
import AnnounceForm from "@/components/adminDashboard/AnnounceForm";

export default function page() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-[80%]  flex-col gap-8 max-sm:w-[95%]">
        <Dashboard title={"Admin Dashboard"} />
        <DriveInfo />
        <Announcement />
      </div>
    </div>
  );
}
