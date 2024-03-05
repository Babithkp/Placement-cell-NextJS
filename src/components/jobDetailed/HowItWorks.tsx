import React from "react";
import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";
import { TbCircleNumber4 } from "react-icons/tb";
export default function HowItWorks() {
  return (
    <section className=" ml-4 flex h-fit flex-col rounded-md bg-[#FFFFFF] border-[#719CEC] border p-4 max-sm:m-0 w-[30%]">
      <div className="flex flex-col gap-3 text-xs">
        <h4 className="text-center text-xl font-semibold">How it Works?</h4>
        <div className="flex  items-center justify-between">
          <TbCircleNumber1 size={60} className="w-36 h-12 mr-2 rounded-full bg-white" />
          <div className=" text-center">
            <h6 className=" text-sm font-semibold">Search Jobs</h6>
            <p >
            Use keywords and filters to find jobs that match your skills and interests.
            </p>
          </div>
        </div>
        <div className="flex  items-center justify-between">
          <TbCircleNumber2 size={60} className="w-36 h-12 mr-2 rounded-full bg-white" />
          <div className=" text-center">
            <h6 className=" text-sm font-semibold">Apply Online</h6>
            <p >
            Submit your resume and cover letter through the platform to apply for your chosen positions.
            </p>
          </div>
        </div>
        <div className="flex  items-center justify-between">
          <TbCircleNumber3 size={60} className="w-36 h-12 mr-2 rounded-full bg-white" />
          <div className=" text-center">
            <h6 className=" text-sm font-semibold">Interview Process</h6>
            <p >
            Participate in interviews to discuss your qualifications and learn more about the role.
            </p>
          </div>
        </div>
        <div className="flex  items-center justify-between">
          <TbCircleNumber4 size={60} className="w-36 h-12 mr-2 rounded-full bg-white" />
          <div className=" text-center">
            <h6 className=" text-sm font-semibold">Get Hired</h6>
            <p >
            If selected, receive a job offer and start your new career journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
