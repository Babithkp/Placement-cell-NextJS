"use client";
import React, { useEffect, useRef, useState } from "react";
import defaultImage from "../../../public/Images/profiles/deafultProfile.jpg";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Education from "./Education";
import About from "./About";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { usePathname } from "next/navigation";
import {
  edituserProfession,
  getUserDetails,
  setUserProfilePIc,
} from "@/lib/controller/userTask";
import { storage } from "@/lib/firebase";
import { MdEdit } from "react-icons/md";
import { VscLoading } from "react-icons/vsc";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import Link from "next/link";

interface userDetailsProps {
  _id: string;
  name: string;
  profession: string;
  city: string;
  phone: number;
  address: string;
  date_of_birth: Date;
  gender: string;
  collegeName: string;
  passOutYear: string;
  backlogs: number;
  historyBacklogs: number;
  profileUrl: string | undefined;
  batch: string;
  resumeURL:string;
  user: {
    email: string;
  };
}

interface job{
  _id: string;
  companyName: string;
  jobtTitle: string;
}

export default function Userintro() {
  const [userInfo, setUserInfo] = useState<userDetailsProps>();
  const pathName = usePathname();
  const path = pathName.split("/")[2];
  const profilePicRef = useRef<any>(null);
  const [Error, setError] = useState<null | string>();
  const [isUploading, setIsUploading] = useState(false);
  const [isProfessionEditable, setProfessionEditable] =
    useState<boolean>(false);
  const [editProfession, setEditProfession] = useState(userInfo?.profession);
  const [appliedJobList,setAppliedJobList] = useState<any>([])
  const [savedJobList,setSavedJobList] = useState<any>([])

  async function editProfssionClickHandler() {
    setProfessionEditable(false);
    if (userInfo && editProfession) {
      userInfo.profession = editProfession;
      try {
        const response = await edituserProfession(editProfession, userInfo._id);
        if (!response) {
          setError("Couldn't edit user Profession, try reloading again");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  function editProfsseionHandler(event: any) {
    setEditProfession(event.target.value);
  }

  async function profileDeleteHandler() {
    try {
      if (userInfo) {
        userInfo.profileUrl = undefined;
        const response = await setUserProfilePIc(undefined, userInfo._id);
        setError("");
      }
    } catch (err) {
      console.log(err);
    }
  }

  function profileEditHandler() {
    if (profilePicRef) {
      profilePicRef?.current.click();
    }
  }
  async function profilePicHandler(event: any) {
    event.preventDefault();
    const maxSize = 10 * 1024 * 1024;
    const file = event.target.files?.[0];

    if (file && file.size > maxSize) {
      setError(
        "File size exceeds the limit (10 MB). Please choose a smaller file.",
      );
      return;
    } else if (file) {
      setIsUploading(true);
      setError(null);
      const storageRef = ref(
        storage,
        `userProfileImages/${file.name + userInfo?.name + v4()}`,
      );
      const response = await uploadBytes(storageRef, file);
      const snapshot = response.ref;
      const getProfileURL = await getDownloadURL(snapshot);
      if (getProfileURL && userInfo) {
        setIsUploading(false);
        userInfo.profileUrl = getProfileURL;
        const response = await setUserProfilePIc(getProfileURL, userInfo._id);
        if (response) {
        } else {
          setIsUploading(false);
          setError("Falied to upload,try again");
        }
      }
    }
  }
  useEffect(() => {
    async function fetch() {
      if (path) {
        try{
          const response: any = await getUserDetails(path);
          const filtered = JSON.parse(response);
          setEditProfession(filtered?.profession);
          setUserInfo(filtered);
          setAppliedJobList(filtered.appliedJobs);
          setSavedJobList(filtered.savedJobs)
          console.log(filtered);
          
        }catch(error){
          console.log(error);
          
        }
        
      }
    }
    fetch();
  }, [path]);
  return (
    <div className="flex w-[90%] flex-col ">
      <section className="flex items-center gap-16 py-8">
        <div className="relative h-[15rem] w-[20%]">
          {Error && <p className="text-sm text-red-500 ">{Error}</p>}
          <Image
            src={userInfo?.profileUrl ? userInfo?.profileUrl : defaultImage}
            alt="profile Image "
            className="h-full w-full rounded-lg object-cover drop-shadow-lg"
            width={300}
            height={300}
          />
          {isUploading && (
            <div className="absolute left-[40%] top-[40%]">
              <VscLoading className="animate-spin-z text-blue-400" size={50} />
            </div>
          )}
          <div className="flex flex-col items-center">
            <input
              type="file"
              className="hidden"
              ref={profilePicRef}
              onChange={profilePicHandler}
              accept="image/png, image/gif, image/jpeg"
            />
            <p
              onClick={profileEditHandler}
              className="cursor-pointer text-blue-400 hover:text-blue-500"
            >
              Change Photo
            </p>
            <p
              onClick={profileDeleteHandler}
              className="cursor-pointer text-blue-400 hover:text-blue-500"
            >
              Delete Photo
            </p>
          </div>
        </div>
        <div className="flex w-[80%] flex-col gap-4 rounded-lg border border-blue-400 bg-white p-6 text-lg drop-shadow-lg">
          <div className="flex">
            <div>
              <p className="text-2xl">
                {userInfo ? userInfo.name : "UserName"}
              </p>
              <div className="flex text-[#719CEC]">
                {isProfessionEditable && (
                  <input
                    value={editProfession}
                    className="rounded-lg border p-1 outline-1"
                    onChange={editProfsseionHandler}
                  />
                )}
                {!isProfessionEditable && (
                  <p>{userInfo ? userInfo.profession : "Profession"}</p>
                )}
                {!isProfessionEditable && (
                  <div
                    className="ml-2 flex items-center text-black"
                    onClick={() => setProfessionEditable(true)}
                  >
                    <MdEdit />
                  </div>
                )}
                {isProfessionEditable && (
                  <div>
                    <Button
                      onClick={editProfssionClickHandler}
                      type="button"
                      className="ml-2 h-fit rounded-md p-2"
                    >
                      save
                    </Button>
                  </div>
                )}
              </div>
            </div>
            <div className=" ml-3 mt-3 text-slate-400">
              <p className="flex gap-1">
                <FaLocationDot />{" "}
                <span className="text-sm">
                  {userInfo ? userInfo.city : "City"}
                </span>
              </p>
            </div>
          </div>
          <div className="w-[]">
            <div className="flex items-end  gap-2 border-b-2 pb-2 ">
              <FaUser />
              <p className="-mb-1">About</p>
            </div>
            {userInfo && (
              <About
                phone={userInfo?.phone}
                address={userInfo?.address}
                email={userInfo?.user.email}
                DOB={userInfo?.date_of_birth}
                gender={userInfo?.gender}
                id={userInfo?._id}
                resumeURL= {userInfo?.resumeURL}
              />
            )}
          </div>
          
        </div>
      </section>
      <section className="flex items-start gap-16 rounded-lg border border-blue-400 bg-white px-6 pb-4   drop-shadow-lg">
        {userInfo && (
          <Education
            collegeName={userInfo?.collegeName}
            passOutYear={userInfo?.passOutYear}
            batch={userInfo?.batch}
            hBacklogs={userInfo?.backlogs}
            cBacklogs={userInfo?.historyBacklogs}
            id={userInfo?._id}
          />
        )}
        
        <div>
          {appliedJobList &&<Accordion type="single" collapsible className="w-[20rem] ">
            <AccordionItem value="item-1">
              <AccordionTrigger>Applied Jobs</AccordionTrigger>
              <AccordionContent className="flex items-center justify-between border-b p-0">
                <ScrollArea className=" h-[9rem]   w-full max-sm:w-[25rem]">
                  {appliedJobList.map((job:job)=>(
                  <div key={job._id} className="flex items-center justify-between border-b p-0">
                    <div>
                      <p className="text-base font-semibold">
                        {job.jobtTitle}
                      </p>
                      <p>{job.companyName}</p>
                    </div>
                    <Button className="mr-4 h-fit p-1">
                      <Link href={`/detailedPage/${job._id}`}>
                      View Details
                      </Link>
                      </Button>
                  </div>
                  ))}
                </ScrollArea>
              </AccordionContent>
            </AccordionItem>
          </Accordion>}
        </div>
        <div>
          {savedJobList &&<Accordion type="single" collapsible className="w-[20rem] ">
            <AccordionItem value="item-1">
              <AccordionTrigger>Saved Jobs</AccordionTrigger>
              <AccordionContent className="flex items-center justify-between border-b p-0">
                <ScrollArea className=" h-[9rem]   w-full max-sm:w-[25rem]">
                  {savedJobList.map((job:job)=>(
                  <div key={job._id} className="flex items-center justify-between border-b p-0">
                    <div>
                      <p className="text-base font-semibold">
                        {job.jobtTitle}
                      </p>
                      <p>{job.companyName}</p>
                    </div>
                    <Button className="mr-4 h-fit p-1">
                      <Link href={`/detailedPage/${job._id}`}>
                      View Details
                      </Link>
                      </Button>
                  </div>
                  ))}
                </ScrollArea>
              </AccordionContent>
            </AccordionItem>
          </Accordion>}
        </div>
        
      </section>
    </div>
  );
}
