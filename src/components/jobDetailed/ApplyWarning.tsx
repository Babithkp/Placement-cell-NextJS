"use client";
import React, { useEffect, useRef, useState } from "react";
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
import defaultImage from '../../../public/Images/profiles/deafultProfile.jpg'
import { UpdateUserResume, appyForJob, getUserDetails } from "@/lib/controller/userTask";
import { FcOk } from "react-icons/fc";
import { IoMdAdd } from "react-icons/io";
import { storage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { VscLoading } from "react-icons/vsc";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BiSolidFilePdf } from "react-icons/bi";
import Image from "next/image";

interface userProps {
  _id: string;
  name: string;
  profileUrl: string;
  gender: string;
  phone: Number;
  sslcMarks: Number;
  twelvesMarks: Number;
  BEMarks: Number;
  backlogs: Number;
  collegeName: string;
  historyBacklogs: Number;
  passOutYear: String;
  batch: String;
  address: string;
  profession: String;
  city: string;
  resumeURL: string;
  date_of_birth: Date;
}

export default function ApplyWarning({ userInfo, jobId }: any) {
  const [user, setUser] = useState<userProps>();
  const [isUploaded, setIsuploaded] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const [isApplyed, setIsApplyed] = useState(false);
  const clickRef = useRef<any>(null);
  const [Error, setError] = useState<string | null>();

  async function ApplyJob() {
    try {
      setIsApplying(true);
      const response = await appyForJob(userInfo.userId, jobId);
      if (response) {
        setIsApplying(false);
        setIsApplyed(true);
      }else if(!response){
        setError("Application is already applied or something went wrong")
        setIsApplying(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const resumeClickHandler = () => {
    clickRef?.current.click();
  };

  const handleFileChange = async (e: any) => {
    const maxSize = 5 * 1024 * 1024;
    const file = e.target.files?.[0];
    if (file.size > maxSize) {
      setError(
        "File size exceeds the limit (5 MB). Please choose a smaller file.",
      );
    } else {
      setIsUploading(true);
      setError(null);
      const storageRef = ref(
        storage,
        `userResume/${file.name + user?.name + v4()}`,
      );
      const response = await uploadBytes(storageRef, file);
      const snapshot = response.ref;
      const getResumeURL = await getDownloadURL(snapshot);
      if (getResumeURL && user) {
        user.resumeURL = getResumeURL;
        setIsUploading(false);
        const response = await UpdateUserResume(getResumeURL, user?._id);
        if (response) {
          setIsuploaded(true);
        } else {
          setError("Failed to upload,try again");
        }
      }
    }
  };

  useEffect(() => {
    async function fetch() {
      const response = await getUserDetails(userInfo.userId);
      if (response) {
        const userData = JSON.parse(response);
        setUser(userData);
      }
    }
    fetch();
  }, [userInfo]);
  return (
    <Dialog>
      {
        <DialogTrigger>
          <Button className="bg-[#00448E]">Apply</Button>
        </DialogTrigger>
      }
      <DialogContent className="rounded-lg  bg-white max-sm:ml-[3rem]">
        <DialogHeader className="">
          <DialogTitle className="">Apply Job</DialogTitle>
          <DialogDescription className=" ">
            <div className="relative flex flex-col items-center gap-5 p-2">
              {isApplyed && <div className="flex  flex-col justify-center items-center">
                <div >
                <FcOk size={100}/>
                </div>
                <h4 className="text-lg">Application successfully Submitted</h4>
                <p>Thankyou for subscribing</p>
              </div>}
              {!isApplyed && <div className="flex gap-4">
                <div className="h-[10rem] w-[10rem] ">
                  <Image
                    src={user?.profileUrl ? user?.profileUrl : defaultImage}
                    alt="profile image"
                    width={300}
                    height={300}
                    className="rounded-full border"
                  />
                </div>
                <div className="text-base">
                  <div className="flex gap-3">
                    <p className="text-black">Name:</p> <p>{user?.name}</p>
                  </div>
                  <div className="flex gap-3">
                    <p className="text-black">College:</p>{" "}
                    <p>{user?.collegeName}</p>
                  </div>
                  <div className="flex gap-3">
                    <p className="text-black">Address:</p>{" "}
                    <p>{user?.address}</p>
                  </div>
                  <span className="text-sm font-semibold uppercase text-black">
                    Resume
                  </span>
                  <div className="flex gap-4">
                    <div className="relative flex flex-col items-center rounded-lg border border-blue-400 p-2">
                      <Link href={`${user?.resumeURL}`} target="_blank">
                        <BiSolidFilePdf
                          size={50}
                          className="rounded-lg border drop-shadow-2xl"
                        />
                      </Link>
                      {isUploading && (
                        <div className="absolute left-[30%] top-[30%]">
                          <VscLoading
                            className="animate-spin-z text-blue-400"
                            size={50}
                          />
                        </div>
                      )}

                      <p className="text-center  text-sm">
                        Use {isUploaded ? "New" : "Old"} Resume
                      </p>
                    </div>
                    {!isUploaded && (
                      <div
                        className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dotted border-black p-2"
                        onClick={() => resumeClickHandler()}
                      >
                        <input
                          type="file"
                          placeholder="Upload Resume"
                          className="hidden"
                          accept=".pdf"
                          ref={clickRef}
                          onChange={handleFileChange}
                        />
                        <p>Add Resume</p>
                        <div className="">
                          <IoMdAdd size={40} className=" " />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>}
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
                {!isApplyed && (
                  <Button
                    className="rounded-lg bg-[#00448E] "
                    type="button"
                    onClick={() => ApplyJob()}
                  >
                    {isApplying ? "Appling..." : "Apply"}
                  </Button>
                )}
              </div>
                {Error && <p className="text-sm text-red-500">{Error}</p>}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
