"use client";
import React, { useEffect, useMemo, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { getJobInfoForAdmin } from "@/lib/controller/JobInfo";
import { FaAngleDown } from "react-icons/fa6";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import NewDialog from "../NewDialog";
import { ScrollArea } from "../../ui/scroll-area";
import { getAllAccouncements } from "@/lib/controller/announcement";
import AnnounceSelect from "./AnnounceSelect";

interface annoucementProps {
  _id: string;
  title: string;
  validity: Date;
  type: string;
  description: string;
  submittedOn: Date;
}[]

export default function AnnounceSearchArea({ getId, announcement }: any) {
  const [items, setItems] = useState<undefined | any[]>([]);
  const [error, setError] = useState<string>("");

  async function fetchJobsw() {
    try {
      const accouncement = await getAllAccouncements();
      if (accouncement) {
        const filtered = JSON.parse(accouncement);
        if(filtered.jobs.length === 0){
          setError("No Jobs to Announce")
        }
        setItems(filtered.jobs);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchJobsw();
  }, []);


  const memoizedJobs = useMemo(() => {
    return items;
  }, [items]);

  return (
    <div className="flex w-[40%] flex-col rounded-lg bg-gray-400 p-4 max-sm:text-xs ">
      <div className=" flex justify-between ">
        <h4 className="text-xl font-semibold max-sm:text-sm">Announcement</h4>
        <ul className="flex flex-wrap justify-end gap-4">
          <li>
            <BiSearchAlt size={25} />
          </li>
          <li>
            <NewDialog announcement={announcement} fetchJobsw={fetchJobsw}/>
          </li>
        </ul>
      </div>
      <div>
        <div className="mb-4 flex items-center gap-2 font-medium">
          <span>
            <FaClockRotateLeft />
          </span>
          <p>Recent</p>
        </div>
        <ScrollArea className="h-[22rem]  rounded-md  max-sm:w-[25rem]">
          <ul className="flex flex-col gap-4 bg-gray-200 ">
            {items?.map(
              (item, i) =>
                item.announcement.length > 0 && (
                  <div key={i} >
                    <AnnounceSelect item={item} getId={getId}/>
                  </div>
                ),
            )}
          </ul>
        </ScrollArea>
      </div>
      {error && <p className="font-medium text-red-600">{error}</p>}
    </div>
  );
}
