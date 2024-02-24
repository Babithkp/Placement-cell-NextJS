"use client";
import React, { useEffect, useMemo, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { getJobInfoForAdmin } from "@/lib/controller/JobInfo";

import { FaClockRotateLeft } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import NewDialog from "./NewDialog";
import { ScrollArea } from "../ui/scroll-area";

export default function SearchArea({ getId, announcement }: any) {
  const [items, setItems] = useState<undefined | any[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchJobsw() {
      if (!announcement) {
        try {
          const job: string | undefined = await getJobInfoForAdmin();
          if (job) {
            const filtered = JSON.parse(job);
            setItems(filtered);
            getId(filtered[0]?._id);
          }
        } catch (error) {
          setError(
            `failed to upload  ${(error as { message?: string })?.message}`,
          );
        }
      }
    }
    fetchJobsw();
  }, []);

  const memoizedJobs = useMemo(() => {
    return items;
  }, [items]);

  return (
    <div className="flex w-[40%] flex-col rounded-lg bg-gray-400 p-4 max-sm:text-xs ">
      <div className=" flex justify-between ">
        <h4 className="text-xl font-semibold max-sm:text-sm">
          {announcement ? "Announcement" : "All drives"}
        </h4>
        <ul className="flex flex-wrap justify-end gap-4">
          <li>
            <BiSearchAlt size={25} />
          </li>
          <li>
            <NewDialog announcement={announcement}/>
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
          <ul className="flex flex-col gap-4 bg-gray-200">
            {items?.map((item, i) => (
              <li 
                onClick={() => getId(item._id)}
                key={i}
                className="flex cursor-pointer items-center justify-between rounded-xl p-2 hover:bg-slate-300 "
              >
                <div>
                  <h5 className="text-lg font-semibold max-sm:text-base">
                    {announcement ? item.title : item.jobtTitle}
                  </h5>
                  {announcement ? "" :<p className="text-sm font-medium">{item.companyName}</p>}
                </div>
                <div className="w-fit">
                  <FaArrowRightLong />
                </div>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>
      {error && <p className="font-medium text-red-600">{error} try again</p>}
    </div>
  );
}
