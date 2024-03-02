import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaPlus } from "react-icons/fa";
import { ScrollArea } from "@/components/ui/scroll-area"
import AnnounceForm from "./AnnounceForm";
import { BiEditAlt } from "react-icons/bi";


export default function EditDialog({announcement,announceId,fetch}:any) {    
  return (
    <Dialog >
      {announcement && <DialogTrigger >
      <p className="bg-slate-300 flex items-center justify-center gap-2 rounded-full py-2 text-black"><BiEditAlt size={30}/> <span className="text-base font-semibold">Edit</span></p>
      </DialogTrigger>}
      <DialogContent className=" -ml-[10.5rem] max-sm:ml-[3rem] ">
        <DialogHeader className="w-[100rem]">
          <DialogDescription className=" w-[100rem]  ">
          <ScrollArea className="h-[30rem] w-[50rem] rounded-md border max-sm:w-[25rem]">
             <AnnounceForm announcement={announcement} announceId={announceId} refetch={fetch}/>
          </ScrollArea>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
