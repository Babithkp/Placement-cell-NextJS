import React from 'react'
import defaultImage from "../../../public/Images/profiles/deafultProfile.jpg";
import Image from "next/image";
import { PiStudentBold } from "react-icons/pi";
import { Button } from "@/components/ui/button";

export default function StudentsDetails({title}:any) {
  return (
    <div className="w-[80%] ">
            <h4 className="rounded-t-lg bg-[#2560a9] py-1 text-center font-medium text-white">
              {title}
            </h4>
            <div className="flex mb-4 border border-[#719CEC] bg-[#FFFFFF]">
              <div className="w-[15%] p-4 ">
                <Image
                  src={defaultImage}
                  alt="profile images"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="p-4 w-full text-lg flex flex-col justify-around">
                <p className=" font-medium text-xl">Ashika M</p>
                <div className="flex gap-2 items-center border-b">
                  <PiStudentBold />
                  <span>East point college of engineering</span>
                  <p>|</p>
                  <p>
                    CGPA: <span>9</span>
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <p>Applied on: <span>01-02-2024</span></p>
                  <p>|</p>
                  <p>No. of backlogs <span>0</span></p>
                  <p>|</p>
                  <p>Pass out year: <span>2025</span></p>
                </div>
              </div>
                <div className="p-4 flex flex-col h-full gap-2">
                  <Button className="w-full">View Resume</Button>
                  <Button className="w-full" variant="outline">Select </Button>
                </div>
            </div>
          </div>
  )
}
