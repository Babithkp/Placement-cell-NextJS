import React from "react";
import { Button } from "../ui/button";
import { FaRegPlusSquare } from "react-icons/fa";
import Results from "../jobListing/Results";
import { IoMdEye } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";

export default function PlacementFilter({addDrives,viewApplicents,selectedApplicents,viewDrives}:any) {
  return (
    <section className="rounded-lg bg-[#FFFFFF] border-[#719CEC] border">
      <div>
        <h4 className="rounded-t-lg bg-[#2560a9] py-1 text-center font-medium text-white">
          Dashboad Admin Panel
        </h4>
        <div className="flex justify-around p-4 ">
          <div>
            <Button onClick={()=>addDrives()} className="flex h-full flex-col rounded-md bg-slate-200 p-4 text-lg text-black hover:bg-slate-400 w-[120%]">
              <p>Add Drives</p>
              <FaRegPlusSquare size={30} />
            </Button>
          </div>
          <div>
            <Button onClick={()=>viewDrives()} className="flex h-full flex-col rounded-md bg-slate-200 p-2 text-lg text-black hover:bg-slate-400 w-[120%]">
              <p>View Drives</p>
              <IoMdEye size={30} />
            </Button>
          </div>
          <div>
            <Button onClick={()=>viewApplicents()} className="flex h-full flex-col rounded-md bg-slate-200 p-2 text-lg text-black hover:bg-slate-400">
              <p>View Applicants</p>
              <FaUser size={25} />
            </Button>
          </div>
          <div>
            <Button onClick={()=>selectedApplicents()} className="flex h-full flex-col rounded-md bg-slate-200 p-2 text-lg text-black hover:bg-slate-400">
              <p>Selected Applicants</p>
              <FaUserCheck size={30} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
