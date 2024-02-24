"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/deleteDailog";
import { IoWarningOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MdDelete } from "react-icons/md";
import { deleteJobInfo } from "@/lib/controller/JobInfo";

export default function DeleteDrivesDialog({ jobid }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const router = useRouter();

  async function deleteAnnoucement() {
    try {
      if (jobid) {
        setIsLoading(true);
        const response = await deleteJobInfo(jobid);
        if (response || !response) {
          setIsLoading(false);
          setIsDeleted(true);
        }
        if (response) {
          router.refresh();
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Dialog>
      {jobid && (
        <DialogTrigger>
          <MdDelete
            size={30}
            className="cursor-pointer transform hover:text-red-500 hover:scale-110"
          />
        </DialogTrigger>
      )}
      <DialogContent className="  rounded-lg max-sm:ml-[3rem]">
        <DialogHeader className="">
          <DialogDescription className=" bg-white">
            <div className="flex flex-col items-center gap-2 p-2">
              <IoWarningOutline size={40} className="text-red-400" />
              <h4 className="text-lg font-semibold">Delete Job Details!</h4>
              <p className="text-center">
                Selected Job details will be permanently deleted. Delete this
                Job details.
              </p>
              <div className="flex w-full justify-end gap-2">
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="secondary"
                    className="rounded-lg border border-[#719CEC] bg-slate-300"
                  >
                    Close
                  </Button>
                </DialogClose>
                {isDeleted ? (
                  ""
                ) : (
                  <Button
                    className="rounded-lg bg-[#00448E] "
                    type="button"
                    onClick={() => deleteAnnoucement()}
                  >
                    {isLoading ? "Deleting" : "Delete"}
                  </Button>
                )}
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
