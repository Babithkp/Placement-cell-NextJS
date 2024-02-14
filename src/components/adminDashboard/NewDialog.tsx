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
import AddDrives from "./AddDrives";
import { ScrollArea } from "@/components/ui/scroll-area"


export default function NewDialog() {
  return (
    <Dialog >
      <DialogTrigger >
      <FaPlus size={25} />
      </DialogTrigger>
      <DialogContent className=" w-100rem -mx-40">
        <DialogHeader className="w-100rem">
          <DialogDescription className=" w-100rem">
          <ScrollArea className="h-[30rem] w-[50rem] rounded-md border ">
            <AddDrives/>
          </ScrollArea>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
