import React from "react";
import comapanyImg from "../../../public/Images/companies/client-2.png";
import Image from "next/image";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "../ui/button";
import { jobs } from "@/lib/models/jobs";


export default function Info({job}:any) {
  return (
    <section className="mb-4 flex flex-col rounded-md bg-[#FFFFFF] border-[#719CEC] border p-8 text-sm ">
      <div className="flex">
        <span className=" mr-4 flex items-center">
          <Image
            src={job.companyWebsite}
            alt="image"
            className="h-20 w-20 rounded-lg"
            width={50}
            height={50}
          />
        </span>

        <div className="w-[90%] border-b mb-1">
          <h4 className="text-xl">{job.jobtTitle}</h4>
          <p>{job.companyName}</p>
          <div className="flex gap-2">
            <p className="flex items-center">
              <span>
                <FaIndianRupeeSign className="mr-2" />
              </span>
              <span>{job.package}</span>
            </p>
            |
            <p className="flex items-center">
              <span>
                <FaLocationDot className="mr-2" />
              </span>
              <span>{job.comapanyLocation}</span>
            </p>
          </div>
        </div>
        <Button className="bg-[#00448E]">Apply</Button>
      </div>
      <div className="ml-[6rem] -mb-4">
        <p>
          Posted: <span>30</span>+ Days Ago | Openings <span>{job.openings}</span>+ seats |
          Applicants: 541
        </p>
      </div>
    </section>
  );
}
