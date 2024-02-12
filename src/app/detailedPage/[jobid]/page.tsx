"use client"
import { usePathname } from 'next/navigation'
import CompanyAbout from "@/components/jobDetailed/CompanyAbout";
import Description from "@/components/jobDetailed/Description";
import HowItWorks from "@/components/jobDetailed/HowItWorks";
import Info from "@/components/jobDetailed/Info";
import React, { useEffect, useState } from "react";
import { getJobById } from '@/lib/controller/getJobInfo';

export default function Page() {
    const [job,setJob] = useState([])
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
                console.log(job);
            }
        }
        fetch()
    },[])
    return (
        <div className="flex w-full flex-col items-center">
          <div className="mb-4 flex min-h-[60vh]  w-full items-center justify-center bg-stone-200">
            <p className="w-[25rem] text-4xl font-bold">
              Full Stack Web Developer -
              <span className="text-blue-700"> Google</span>
            </p>
          </div>
          <div className="flex w-[80%] ">
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
