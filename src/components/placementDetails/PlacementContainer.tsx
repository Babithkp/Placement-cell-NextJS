"use client";
import React, { useState } from "react";
import Dashboard from "@/components/Dashboard";
import AddDrives from "@/components/adminDashboard/AddDrives";
import Results from "@/components/jobListing/Results";
import PlacementFilter from "@/components/placementDetails/PlacementFilter";
import StudentsDetails from "@/components/placementDetails/StudentsDetails";

export default function PlacementContainer() {

  const [addDrives,setAddDrives] = useState(false)
  const [viewDrives,setViewDrives] = useState(false)
  const [viewApplicants,setViewApplicants] = useState(true)
  const [selectedApplicants,setSelectedApplicants] = useState(false)

  function addDriversHandler() {
    setAddDrives(true)
    setViewDrives(false)
    setViewApplicants(false)
    setSelectedApplicants(false)
  }
  function viewDriversHandler() {
    setAddDrives(false)
    setViewDrives(true)
    setViewApplicants(false)
    setSelectedApplicants(false)
  }
  function viewApplicantsHandler() {
    setAddDrives(false)
    setViewDrives(false)
    setViewApplicants(true)
    setSelectedApplicants(false)
  }
  function selectedApplicantsHandler() {
    setAddDrives(false)
    setViewDrives(false)
    setViewApplicants(false)
    setSelectedApplicants(true)
  }

  return (
    <div>
      <Dashboard title="My Statistics" />
      <PlacementFilter
        addDrives={addDriversHandler}
        viewDrives={viewDriversHandler}
        viewApplicents={viewApplicantsHandler}
        selectedApplicents={selectedApplicantsHandler}
      />
      <div className=" m-10 flex flex-col items-center  transition-all">
        {viewDrives && (
          <div className="w-[80%] transition delay-1000 duration-1000 ease-in-out">
            <h4 className="rounded-t-lg bg-[#2560a9] py-1 text-center font-medium text-white">
              Drives
            </h4>
            <Results />
          </div>
        )}
        {viewApplicants && <StudentsDetails title="All Applicants"/>}
        {selectedApplicants && <StudentsDetails title="Selected Applicants"/>}
      </div>
      {addDrives && (
        <div className="mt-4 ">
          <AddDrives />
        </div>
      )}
    </div>
  );
}
