"use client";
import React, { useEffect, useState } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdDescription } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import { checkIsSavedJobToUser, getAllJobInfo } from "@/lib/controller/JobInfo";
import defaultImg from "../../../public/Images/companies/default.jpg";
import { FaBookmark } from "react-icons/fa";
import { addToSavedList, removeFromSavedList } from "@/lib/controller/userTask";
import { useRouter } from "next/navigation";
import SavedOption from "./SavedOption";

interface Job {
  _id: string;
  companyWebsite: string;
  jobtTitle: string;
  companyName: string;
  package: string;
  comapanyLocation: string;
  jobDescription: string;
  skills: string[];
  deadline:string
}

export default function Results() {
  const [jobList, setJobList] = useState<Job[]>([]);
  

  function dateToString(date:string){
    const deadLineDay = new Date(date)
    const today = new Date()

    deadLineDay.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const inputDateMs = deadLineDay.getTime();
    const todayMs = today.getTime();

    const differenceInMilliseconds = inputDateMs - todayMs;
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    return differenceInDays
  }

  



  useEffect(() => {
    const fetch = async () => {
      const newjob: any = await getAllJobInfo();
      const response = JSON.parse(newjob);
      setJobList(response);
    };

    fetch();
  }, []);
  return (
    <>
      {jobList &&
        jobList.map((job, i) => (
          <div
            key={i}
            className="mb-4 flex justify-between rounded-md border border-[#719CEC] bg-[#FFFFFF] p-8 text-sm max-sm:p-3"
          >
            <Link href={`/detailedPage/${job._id}`} className="flex">
              <span className=" flex w-[10rem] items-center">
                <Image
                  src={job.companyWebsite || defaultImg}
                  alt="image"
                  className="rounded-lg object-cover max-sm:w-[10rem]"
                  width={120}
                  height={100}
                />
              </span>

              <div className="w-[80%] px-4">
                <h4 className="text-xl max-sm:text-base max-sm:font-semibold">
                  {job.jobtTitle}
                </h4>
                <p className="text-base">{job.companyName}</p>
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
                  <span>{job.jobDescription.substring(0, 70)}...</span>
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
            </Link>
            <div className="flex w-[5.5rem] flex-col justify-between max-sm:w-[7rem] max-sm:text-xs">
             <SavedOption jobId={job._id} />
              <p>{dateToString(job.deadline)} days left</p> 
            </div>
          </div>
        ))}
    </>
  );
}
