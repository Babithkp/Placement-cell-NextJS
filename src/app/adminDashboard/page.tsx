import AddDrives from "@/components/adminDashboard/drives/AddDrives";
import Announcement from "@/components/adminDashboard/accouncement/Announcement";
import Dashboard from "@/components/Dashboard";
import DriveInfo from "@/components/adminDashboard/drives/DriveInfo";
import React, { Suspense } from "react";
import AnnounceForm from "@/components/adminDashboard/accouncement/AnnounceForm";
import Loading from "./loading";

export default function page() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-[80%]  flex-col gap-8 max-sm:w-[95%]">
        <Dashboard title={"Admin Dashboard"} />
        <Suspense fallback={<Loading/>}>
          <DriveInfo />
          <Announcement />
        </Suspense>
      </div>
    </div>
  );
}
