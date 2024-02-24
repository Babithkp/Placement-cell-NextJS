"use client"
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/deleteDailog";
import { FaPlus } from "react-icons/fa";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IoWarningOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteAnnouncement } from "@/lib/controller/announcement";
import { useRouter } from "next/navigation";


export default function DeleteWarning({ announceId }: any) {
  const [isLoading,setIsLoading] = useState(false)
  const [isDeleted,setIsDeleted] = useState(false)
  const router = useRouter()

  async function deleteAnnoucement(){
    try{
      if(announceId){
        setIsLoading(true)
        const response = await deleteAnnouncement(announceId)
        if(response || !response){
          setIsLoading(false)
          setIsDeleted(true)
        }
        if(response){
          router.refresh()
        }
      }
    }catch(error){
      console.log(error);
      
    }
  }
  return (
    <Dialog>
      {announceId && (
        <DialogTrigger>
          <Button
            type="button"
            className="flex w-full gap-2 rounded-full bg-red-400 py-6 text-base font-bold text-black max-sm:text-sm hover:bg-red-500"
          >
            <AiOutlineDelete size={25} />
            Delete
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="  max-sm:ml-[3rem] rounded-lg">
        <DialogHeader className="">
          <DialogDescription className=" bg-white">
            <div className="flex flex-col items-center gap-2 p-2">
              <IoWarningOutline size={40} className="text-red-400" />
              <h4 className="text-lg font-semibold">Delete Announcement</h4>
              <p className="text-center">
                Selected Announcement will be permanently deleted. Delete this
                Annoucement.
              </p>
              <div className="flex w-full justify-end gap-2">
                <DialogClose asChild>
                  <Button type="button" variant="secondary" className="bg-slate-300 rounded-lg border-[#719CEC] border">
                    Close
                  </Button>
                </DialogClose>
                {isDeleted ? "": <Button className="rounded-lg bg-[#00448E] " type="button" onClick={()=>deleteAnnoucement()}>
                  {isLoading ? "Deleting":"Delete"}
                  </Button>}
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
