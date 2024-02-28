"use client"
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/deleteDailog";
import { Button } from "../ui/button";
import { getUserDetails } from "@/lib/controller/userTask";


export default function ApplyWarning({ userInfo }: any) {
  const [isLoading,setIsLoading] = useState(false)
  const [isDeleted,setIsDeleted] = useState(false)

  async function ApplyJob(){
    try{
      
    }catch(error){
      console.log(error);
      
    }
  }

  useEffect(()=>{
    async function fetch(){
      const response = await getUserDetails(userInfo.userId)
    }
  },[userInfo])
  return (
    <Dialog>
      { (
        <DialogTrigger>
          <Button className="bg-[#00448E]">Apply</Button>
        </DialogTrigger>
      )}
      <DialogContent className="bg-white  max-sm:ml-[3rem] rounded-lg">
        <DialogHeader className="">
          <DialogTitle className="">Apply Job</DialogTitle>
          <DialogDescription className=" ">
            <div className="flex flex-col items-center gap-2 p-2">
                Selected Announcement will be permanently deleted. Delete this
                Annoucement.
              <div className="flex w-full justify-end gap-2">
                <DialogClose asChild>
                  <Button type="button" variant="secondary" className="bg-slate-300 rounded-lg border-[#719CEC] border">
                    Close
                  </Button>
                </DialogClose>
                {isDeleted ? "": <Button className="rounded-lg bg-[#00448E] " type="button" onClick={()=>ApplyJob()}>
                  {isLoading ? "Appling":"Apply"}
                  </Button>}
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
