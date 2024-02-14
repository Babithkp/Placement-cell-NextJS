import React from "react";
import { BiSearchAlt } from "react-icons/bi";

import { FaClockRotateLeft } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import NewDialog from "./NewDialog";
export default function SearchArea() {
  return (
    <div className="flex w-[40%] flex-col rounded-lg bg-gray-400 p-4 ">
      <div className=" flex justify-between ">
        <h4 className="text-xl font-semibold max-sm:text-sm">All drives</h4>
        <ul className="flex gap-4">
          <li>
            <BiSearchAlt size={25} />
          </li>
          <li>
            <NewDialog />
          </li>
        </ul>
      </div>
      <div>
        <div className="mb-4 flex items-center gap-2">
          <span>
            <FaClockRotateLeft />
          </span>
          <p>Recent</p>
        </div>
        <ul className="flex flex-col gap-4">
          <li className="flex cursor-pointer items-center justify-between rounded-xl bg-slate-300 p-2">
            <div>
              <h5 className="text-lg max-sm:text-base font-semibold">Full stack wev dev</h5>
              <p className="text-sm">Google</p>
            </div>
            <FaArrowRightLong />
          </li>
          <li className="flex cursor-pointer items-center justify-between rounded-xl p-2 hover:bg-slate-300">
            <div>
              <h5 className="text-lg max-sm:text-base font-semibold">Full stack wev dev</h5>
              <p className="text-sm">Google</p>
            </div>
            <FaArrowRightLong />
          </li>
        </ul>
      </div>
    </div>
  );
}
