"use client"
import React, { useEffect, useMemo, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { getJobInfo } from "@/lib/controller/getJobInfo";

import { FaClockRotateLeft } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import NewDialog from "./NewDialog";
import { jobs } from "@/lib/models/jobs";

export default function SearchArea({getId}:any) {

  const [Jobs,setJobs] = useState<undefined | any[]>([])
  const [error,setError] = useState<string >("")

  useEffect(()=>{
    async function fetchJobsw(){
      try{
        const job:string | undefined = await getJobInfo()
        if(job){
          const filtered = JSON.parse(job)
          setJobs(filtered)
          getId(filtered[0]?._id)
        }
      }catch(error){
        setError(`failed to upload  ${(error as {message?: string })?.message}`);
      }
    }
    fetchJobsw()
  },[])


  const memoizedJobs = useMemo(() => {
    return Jobs;
  }, [Jobs]);


  return (
    <div className="flex w-[40%] flex-col rounded-lg bg-gray-400 p-4 ">
      <div className=" flex justify-between ">
        <h4 className="text-xl font-semibold max-sm:text-sm">All drives</h4>
        <ul className="flex gap-4">
          <li>
            <BiSearchAlt size={25} />
          </li>
          <li>
            <NewDialog />
          </li>
        </ul>
      </div>
      <div>
        <div className="mb-4 flex items-center gap-2">
          <span>
            <FaClockRotateLeft />
          </span>
          <p>Recent</p>
        </div>
        <ul className="flex flex-col gap-4">
          {Jobs?.map((job,i) =>(
          <li onClick={()=>getId(job._id)} key={i} className="flex cursor-pointer items-center justify-between rounded-xl bg-slate-300 p-2">       
            <div>
              <h5 className="text-lg max-sm:text-base font-semibold">{job.jobtTitle}</h5>
              <p className="text-sm">{job.companyName}</p>
              <p className="text-sm">{job._id}</p>
            </div>
            <FaArrowRightLong />
          </li>
          ))}
          <li className="flex cursor-pointer items-center justify-between rounded-xl p-2 hover:bg-slate-300">
            <div>
              <h5 className="text-lg max-sm:text-base font-semibold">Full stack wev dev</h5>
              <p className="text-sm">Google</p>
            </div>
            <FaArrowRightLong />
          </li>
        </ul>
      </div>
       {error && <p className="text-red-600">{error} + try again</p>}
    </div>
  );
}
