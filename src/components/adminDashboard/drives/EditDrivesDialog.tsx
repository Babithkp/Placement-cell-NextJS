import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaPlus } from "react-icons/fa";
import { ScrollArea } from "@/components/ui/scroll-area";
import AddDrives from "./AddDrives";
import { FiEdit } from "react-icons/fi";


export default function EditDrivesDialog({jobInfo}:any) {
  return (
    <Dialog>
      <DialogTrigger>
        {jobInfo && <FiEdit
          size={28}
          className="cursor-pointer transform  hover:scale-110"
        />}
      </DialogTrigger>
      <DialogContent className=" -ml-[10.5rem] max-sm:ml-[3rem] ">
        <DialogHeader className="w-[100rem]">
          <DialogDescription className=" w-[100rem]  ">
            <ScrollArea className="h-[30rem] w-[50rem] rounded-md border max-sm:w-[25rem]">
              <AddDrives jobInfo={jobInfo}/>
            </ScrollArea>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
