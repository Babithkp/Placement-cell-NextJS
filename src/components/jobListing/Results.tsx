"use client"
import React, { useEffect, useState } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdDescription } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import { getAllJobInfo } from "@/lib/controller/JobInfo";
import defaultImg from "../../../public/Images/companies/default.jpg"

interface Job {
  _id: string;
  companyWebsite: string;
  jobtTitle: string;
  companyName: string;
  package: string;
  comapanyLocation: string;
  jobDescription: string;
  skills: string[];
}

export default function Results() {
  const [jobList,setJobList] = useState<Job[]>([])
  useEffect(()=>{
    const fetch =async()=>{
      const newjob:any = await getAllJobInfo()
      const response = JSON.parse(newjob)
      setJobList(response)
    }
    
    fetch()
  },[])
  return (
    <>
      {jobList && jobList.map((job, i) => (
        <Link href={`/detailedPage/${job._id}`}
          key={i}
          className="mb-4 flex rounded-md bg-[#FFFFFF] border-[#719CEC] border p-8 text-sm justify-between max-sm:p-3"
        >
          <span className=" flex items-center w-[10rem]">
            <Image
              src={job.companyWebsite || defaultImg}
              alt="image"
              className="rounded-lg object-cover max-sm:w-[10rem]"
              width={120}
              height={100}
            />
          </span>

          <div className="px-4 w-[80%]">
            <h4 className="text-xl max-sm:text-base max-sm:font-semibold">{job.jobtTitle}</h4>
            <p>{job.companyName}</p>
            <div>
              <p className="flex items-center gap-2">
                <span>
                  <FaIndianRupeeSign />
                </span>
                <span>{job.package}</span>
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <FaLocationDot />
                </span>
                <span>{job.comapanyLocation}</span>
              </p>
            </div>

            <p className="flex items-center gap-2 max-sm:hidden">
              <span>
                <MdDescription />
              </span>
              <span >{job.jobDescription.substring(0, 70)}...</span>
            </p>
            <ul className="flex flex-wrap">
              {job.skills.map((skill, i) => (
                <li key={i}>
                  <p className="flex">
                    {skill}
                    <GoDotFill />
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between w-[5.5rem] max-sm:text-xs max-sm:w-[7rem]">
            <p className="flex items-center gap-1 ">
              <span>
                <FaRegBookmark />
              </span>
              <span>Save</span>
            </p>
            <p>30+ Days Ago</p>
          </div>
        </Link>
      ))}
    </>
  );
}
