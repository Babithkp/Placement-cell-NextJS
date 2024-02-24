"use client";
import React, { useEffect, useState } from "react";
import SearchArea from "../SearchArea";
import { FaClockRotateLeft } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { Button } from "../../ui/button";

import { AiOutlineDelete } from "react-icons/ai";
import { deleteAnnouncement, getAccouncementById, setAdmin } from "@/lib/controller/announcement";
import { ScrollArea } from "../../ui/scroll-area";
import EditDialog from "./EditDialog";
import { getJobById } from "@/lib/controller/JobInfo";
import AnnounceSearchArea from "./AnnounceSearchArea";
import DeleteWarning from "../DeleteWarning";

interface accouncementProps {
  title: string;
  validity: Date;
  type: string;
  description: string;
  submittedOn: Date;
}

interface activity {
  status: string;
  date: number;
  month: string;
  year: number;
}

export default function Announcement() {
  const [announcementId, setAnnouncementIsd] = useState<undefined | string>();
  const [announcement, setAnnouncement] = useState<accouncementProps>();
  const [postedOn, setpostedOn] = useState<undefined | number>();
  const [status, setStatus] = useState<undefined | activity>();




  useEffect(() => {
    async function fetch() {
      try {
        if (announcementId) {
          const singleAccouncement = await getAccouncementById(announcementId);
          if (singleAccouncement) {
            const filtered = JSON.parse(singleAccouncement);
            setAnnouncement(filtered);
            const validity = new Date(filtered.validity);
            const postedOn = new Date(filtered.submittedOn);
            const currentTime = new Date();
            const postTimeDifference =
              currentTime.getDate() - postedOn.getDate();
            setpostedOn(postTimeDifference);
            if (validity.getDate() > 0) {
              setStatus({
                status: "Active",
                date: validity.getDate(),
                month: validity.toLocaleString("en-US", { month: "short" }),
                year: validity.getFullYear(),
              });
            } else {
              setStatus({
                status: "Inactive",
                date: validity.getDate(),
                month: validity.toLocaleString("en-US", { month: "short" }),
                year: validity.getFullYear(),
              });
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [announcementId]);

  function getJobId(id: string) {
    setAnnouncementIsd(id);
    console.log(id);
    
  }
  return (
    <section className="flex rounded-lg bg-gray-200 max-sm:text-sm">
      <AnnounceSearchArea getId={getJobId} announcement={true}/> 
      <div className="flex w-full flex-col gap-4 p-4 text-white">
        <div className="rounded-xl bg-black p-2">
          <div>
          <h4 className="text-lg font-medium max-sm:text-xs">
            {announcement?.title ? announcement?.title: "Please select an Announcement"}
          </h4>
          </div>
          <p className="text-xs">
            Posted{" "}
            {postedOn === 0 ? (
              <span>Today</span>
            ) : (
              <span>on {postedOn}+ Days Ago</span>
            )}
          </p>
        </div>
        <div className="rounded-xl bg-black p-4  ">
          <h4 className="mb-3 text-lg font-semibold max-sm:text-base">
            Description
          </h4>
          <ScrollArea className="h-[6rem]">
            <p className="max-sm:text-xs">{announcement?.description ? announcement.description : "Please select an Announcement"}</p>
          </ScrollArea>
        </div>
        <div className="grid  grid-cols-[repeat(2,1fr)] gap-4 text-sm max-sm:text-xs">
          <div className="rounded-xl bg-black p-4  ">
            <FaClockRotateLeft className="my-2 " size={25} />
            <p className="my-2 text-lg font-medium max-sm:text-xs">Activity</p>
            <p>
              Status: <span>{status && status.status}</span>
            </p>
            <p>
              Expires: {status && <span>{`${status.date} ${status.month} ${status.year}`}</span> }
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl bg-black p-4 max-sm:text-xs">
            <BsThreeDots className="mt-2 " size={25} />
            <p className="my-2 text-lg font-medium">Options</p>
            <EditDialog announcement={ announcement} announceId={announcementId}/>
            <DeleteWarning announceId={announcementId}/>
          </div>
        </div>
      </div>
    </section>
  );
}
