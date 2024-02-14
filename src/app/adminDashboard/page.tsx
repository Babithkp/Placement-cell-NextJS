import AddDrives from "@/components/adminDashboard/AddDrives";
import Dashboard from "@/components/adminDashboard/Dashboard";
import DriveInfo from "@/components/adminDashboard/DriveInfo";
import React from "react";


export default function page() {
  return (
    <div className="w-full flex justify-center">
    <div className="w-[80%] flex flex-col gap-8">
      <Dashboard/>
      <DriveInfo/>
    </div>
    </div>
  );
}
