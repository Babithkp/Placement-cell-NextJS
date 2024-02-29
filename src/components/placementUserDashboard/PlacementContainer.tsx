"use client";
import React, { useEffect, useState } from "react";
import Dashboard from "@/components/Dashboard";
import Results from "@/components/jobListing/Results";
import PlacementFilter from "@/components/placementUserDashboard/PlacementFilter";
import { usePathname } from "next/navigation";
import { getPlacementUserDetails } from "@/lib/controller/placementAdmin";
import PlacementAddDrives from "./PlacementAddDrives";
import JobApplicantion from "./JobApplicantion";
import PlacementJobResults from "./PlacementJobResults";

interface placementAdminProps{
  _id: string;
  name: String;
  gender: String;
  phone: string;
  companyName: String;
  twitterLink: String; 
  fackbookLink: String;
  linkdenInLink: String;
  comapanyLink: String;
  aboutCompany: String;
  companyAddress: String;
  profileUrl:string | undefined
}

export default function PlacementContainer() {
  const getUrl = usePathname()
  const path = getUrl.split("/")[2]
  const [myJobs,setMyJobs] = useState<any[]>()
  const [addDrives,setAddDrives] = useState(true)
  const [viewDrives,setViewDrives] = useState(false)
  const [viewApplicants,setViewApplicants] = useState(false)
  const [selectedApplicants,setSelectedApplicants] = useState(false)
  const [userInfo,setUserInfo] = useState<placementAdminProps>()

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

  useEffect(()=>{
    async function fetch(){
      const response = await getPlacementUserDetails(path)
      if(response){
        const filtered = JSON.parse(response)
        setUserInfo(filtered) 
        setMyJobs(filtered.jobList)
        console.log(filtered);
        
      }
    }
    fetch()
  },[path])

  return (
    <div>
      <Dashboard title="My Statistics" />
      <PlacementFilter
        addDrives={addDriversHandler}
        viewDrives={viewDriversHandler}
        viewApplicents={viewApplicantsHandler}
        selectedApplicents={selectedApplicantsHandler}
      />
        {addDrives && userInfo &&(
          <div className="mt-4 ">
            <PlacementAddDrives jobInfo={userInfo}/>
          </div>
        )}
      <div className=" m-10 flex flex-col items-center  transition-all">
        {viewDrives && (
          <div className="w-[80%] transition delay-1000 duration-1000 ease-in-out">
            <h4 className="rounded-t-lg bg-[#2560a9] py-1  text-center font-medium text-white">
              Drives
            </h4>
            <PlacementJobResults  myJobs={myJobs}/>
          </div>
        )}
        {viewApplicants && <JobApplicantion  jobList={myJobs} />}
        {selectedApplicants && <JobApplicantion  jobList={myJobs} selected={true}/>}
      </div>
    </div>
  );
}
