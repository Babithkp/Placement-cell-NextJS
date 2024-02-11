import React from "react";
import SearchArea from "./SearchArea";
import { FaMoneyBill } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosGitBranch } from "react-icons/io";

export default function DriveInfo() {
  return (
    <section className="rounded-lg flex bg-gray-200">
      <SearchArea/>
      <div className="p-4 text-white w-full flex flex-col gap-4">
        <div className="bg-black p-2 rounded-xl ">
            <h4 className="text-lg">Full Stack Web Development</h4>
            <p className="text-sm">Google</p>
            <p>Posted on <span>30 + </span> Days Ago</p>
        </div>
        <div className="text-sm grid grid-cols-2 gap-4 grid-rows-[repeat(2,10rem)]">
            <div className="bg-black p-2 rounded-xl  ">
            <FaMoneyBill className="my-2" size={25}/>
            <p className="text-lg">Salary</p>
            <p>salary: <span>Not disclosed</span></p>
            </div>
            <div className="bg-black p-2 rounded-xl ">
            <IoEye className="my-2" size={25}/>
            <p className="text-lg">Insights</p>
            <p>impressions: <span>122</span></p>
            <p>Applications received: <span>20</span></p>
            </div>
            <div className="bg-black p-2 rounded-xl">
            <HiMenuAlt2 className="my-2" size={25}/>
            <p className="text-lg">Details</p>
            <p>Application Deadline: <span>20 Days left</span></p>
            <p>Work mode: <span>Hybrid</span></p>
            </div>
            <div className="bg-black p-2 rounded-xl ">
            <IoIosGitBranch className="my-2" size={25}/>
            <p className="text-lg">Required</p>
            <p>Skills: <span>Frontend, Backend</span></p>
            <p>Category: <span> Software Development</span></p>
            </div>
        </div>
      </div>
    </section>
  );
}
