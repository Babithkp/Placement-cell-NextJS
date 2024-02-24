"use client"
import { usePathname } from 'next/navigation'
import CompanyAbout from "@/components/jobDetailed/CompanyAbout";
import Description from "@/components/jobDetailed/Description";
import HowItWorks from "@/components/jobDetailed/HowItWorks";
import Info from "@/components/jobDetailed/Info";
import React, { useEffect, useState } from "react";
import { getJobById } from '@/lib/controller/JobInfo';



export default function Page() {
    const [job,setJob] = useState<any | []>([])
    const params = usePathname()
    const numbersOnly = params.split("/")
    const index = numbersOnly.length
    const jobId = numbersOnly[index-1]
    
    useEffect(()=>{
        async function fetch (){
            const jobInfo : string | undefined = await getJobById(jobId)
            if(jobInfo) {
                const stringtojson = JSON.parse(jobInfo)
                setJob(stringtojson)
            }
        }
        fetch()
    },[jobId])
    return (
        <div className="flex w-full flex-col items-center">
          <div className="mb-4 flex h-[20vh]  w-full items-center justify-center  relative border ">
            <p className=" text-4xl font-bold">
            {job.jobtTitle ? job.jobtTitle : "Explore latest opportunities"}
            </p>
         
          </div>
          <div className="flex w-[80%] max-sm:flex-col ">
            <div>
              <Info job={job}/>
              <CompanyAbout job={job}/>
            <Description job={job}/>
            </div>
            <HowItWorks/>
          </div>
        </div>
      );
}
