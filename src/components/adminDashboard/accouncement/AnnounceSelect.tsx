"use client";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

interface annoucementProps {
  jobtTitle: string;
  _id: string;
  title: string;
  validity: Date;
  type: string;
  description: string;
  submittedOn: Date;
  announcement: string[];
}

export default function AnnounceSelect({ item,getId }: any) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <li
      onClick={()=>setIsOpened(!isOpened)}
      className="flex cursor-pointer flex-col   rounded-xl p-2 hover:bg-slate-300 "
    >
      <div className="flex items-center justify-between">
        <div>
          <h5 className="text-lg font-semibold max-sm:text-base">
            {item.jobtTitle}
          </h5>

          <p className="text-sm font-medium">{item.companyName}</p>
        </div>
        <div className="w-fit">
          <FaAngleDown size={20} />
        </div>
      </div>
      {isOpened && (
        <ul>
          {item.announcement.map((announcement: annoucementProps) => (
            <li
              key={announcement._id}
              className=" mb-2 rounded-lg bg-slate-50  p-2"
              onClick={()=>getId(announcement._id)}
            >
              <p className="flex items-center justify-between">
                {announcement.title}
                <FaArrowRightLong />
              </p>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
