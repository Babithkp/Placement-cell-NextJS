"use client"
import React, { useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaPlus } from "react-icons/fa";
import AddDrives from "./drives/AddDrives";
import { ScrollArea } from "@/components/ui/scroll-area"
import AnnounceForm from "./accouncement/AnnounceForm";


export default function NewDialog({announcement,fetchJobsw}:any) {
 
  return (
    <Dialog >
      <DialogTrigger >
      <FaPlus size={25} />
      </DialogTrigger>
      <DialogContent className=" -ml-[10.5rem] max-sm:ml-[3rem] ">
        <DialogHeader className="w-[100rem]">
          <DialogDescription className=" w-[100rem]  ">
          <ScrollArea className="h-[30rem] w-[50rem] rounded-md border max-sm:w-[25rem]" >
            {announcement ? <AnnounceForm  fetchJobsw={fetchJobsw}/> : <AddDrives />}
          </ScrollArea>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
