"use client";
import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { getleatestJob } from "@/lib/controller/JobInfo";

interface jobs {
  _id: string;
  jobtTitle: string;
  companyName: string;
  deadline: Date;
  companyWebsite: string;
  comapanyLocation: string;
  role: string;
  indrustryType: string;
  workMode: string;
  department: string;
  roleCategory: string;
  education: string;
  package: string;
  openings: number;
  jobDescription: string;
  aboutCompany: string;
  impressions: number;
}

const availableJobList = [
  {
    title: "Senior Software Engineer",
    type: "Engineering - Software & QA",
    location:
      "Kolkata, Mumbai, New Delhi, Hyderabad/Secunderabad, Pune, Chennai, Bangalore/Bengaluru",
    contract: "Full time | work from Home",
    department: "Auto Components",
  },
  {
    title: "Application Developer: Google Gloud Full Stack",
    type: "Engineering - Software & QA",
    location: "Bangalore/Bengaluru",
    contract: "Full time | work from Home",
    department: "Engineering - Software & QA",
  },
];

export default function AvailableJobs() {
  const [jobList, setJobList] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetch() {
      try {
        const response = await getleatestJob();
        if (response) {
          const filter = JSON.parse(response);
          if(filter.length > 0) {
            setJobList(filter[0].jobsList);
          }          
        }
      } catch (err) {}
    }
    fetch()
  }, []);
  return (
    <section className="mt-8 w-[70%] font-medium">
      <h2 className="text-center text-3xl">Available Jobs</h2>
      <p className="text-center ">
        Explore the latest job postings and find your next opportunity.
      </p>
      <div className="p-4">
        {jobList.map((job:jobs) => (
          <div
            className="mb-4 flex justify-between rounded-lg border border-[#719CEC] bg-[#FFFFFF] p-6 text-sm"
            key={job._id}
          >
            <div className="flex flex-col gap-2 ">
              <h3 className="text-2xl ">{job.jobtTitle} </h3>
              <p>
                Join our team and make a different in the field of {job.indrustryType}
              </p>
              <p className="flex">
                <span>
                  <IoLocationOutline size={20} />
                </span>
                <span className="ml-2">{job.comapanyLocation}</span>
              </p>
              <p className="flex">
                <span>
                  <FaRegClock size={15} />
                </span>
                <span className="ml-2">{job.workMode}</span>
              </p>
              <Button
                className="w-[6rem] bg-[#00448E]"
                onClick={() => router.push(`/detailedPage/${job._id}`)}
              >
                Apply Now
              </Button>
            </div>
            <div>
              <Button
                className="cursor-default bg-[#cad5ea] text-black"
                disabled
              >
                {job.department}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center">
        <Button
          type="button"
          className="bg-[#00448E]"
          onClick={() => router.push("/jobListings")}
        >
          More
        </Button>
      </div>
    </section>
  );
}
