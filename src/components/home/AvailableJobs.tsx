import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { Button } from "../ui/button";

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
    title: "Senior Software Engineer",
    type: "Engineering - Software & QA",
    location:
      "Kolkata, Mumbai, New Delhi, Hyderabad/Secunderabad, Pune, Chennai, Bangalore/Bengaluru",
    contract: "Full time | work from Home",
    department: "Auto Components",
  },
];

export default function AvailableJobs() {
  return (
    <section className="mt-8 w-[70%] font-medium">
      <h2 className="text-center text-3xl font-medium">Available Jobs</h2>
      <p className="text-center ">
        Explore the latest job postings and find your next opportunity.
      </p>
      <div className="p-4">
        {availableJobList.map((job, i) => (
          <>
            <div className="mb-4 flex border-2 p-6 text-sm">
              <div className="flex flex-col gap-2 " key={i}>
                <h3 className="text-2xl ">{job.title} </h3>
                <p>
                  Join our team and make a different in the field of {job.type}
                </p>
                <p className="flex">
                  <span>
                    <IoLocationOutline size={20} />
                  </span>
                  <span className="ml-2">{job.location}</span>
                </p>
                <p className="flex">
                  <span>
                    <FaRegClock size={15} />
                  </span>
                  <span className="ml-2">{job.contract}</span>
                </p>
                <Button variant="outline" className="w-[6rem]">
                  Apply Now
                </Button>
              </div>
              <div>
                <Button className="cursor-default">{job.department}</Button>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="flex w-full justify-center">
        <Button>More</Button>
      </div>
    </section>
  );
}
