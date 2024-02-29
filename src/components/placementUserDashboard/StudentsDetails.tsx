"use client";
import React, { useEffect, useState } from "react";
import defaultImage from "../../../public/Images/profiles/deafultProfile.jpg";
import Image from "next/image";
import { PiStudentBold } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import SelectStudent from "./SelectStudent";

interface stud{
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
}

export default function StudentsDetails({ students,jobId,selected }: any) {
  const [student, setStudent] = useState<any[]>();

  useEffect(() => {
      setStudent(students);
    console.log(students);
    
  }, [students]);
  return (
    <div>
      {student?.map((student) => (
        <div
          key={student._id}
          className="mb-4 flex border border-[#719CEC] bg-[#FFFFFF]"
        >
          <div className="h-[10rem] w-[13rem]  p-4 ">
            <Image
              src={selected ? student.user.profileUrl : student.profileUrl ? student.profileUrl :defaultImage}
              alt="profile images"
              className="h-full w-full rounded-full"
              width={300}
              height={300}
            />
          </div>
          <div className="flex w-full flex-col justify-around p-4 text-lg">
            <p className=" text-xl font-medium">{selected ? student.user.name : student.name}</p>
            <div className="flex items-center gap-2 border-b">
              <PiStudentBold />
              <span>
                {selected ? student.user.collegeName : student.collegeName}
              </span>
              <p>|</p>
              <p>
                CGPA:{" "}
                <span>{selected ? student.user.BEMarks / 10 : student.BEMarks / 10}</span>
              </p>
            </div>
            <div className="flex items-center gap-2 text-base">
              <p>
                Email:{" "}
                <span className="text-blue-500">
                  <a
                    href={`mailto:${selected ? student.user.user.email : student.user.email}`}
                  >
                    {student.user.email ? student.user.email : "Email Address"}
                  </a>
                </span>
              </p>
              <p>|</p>
              <p>
                No. of backlogs <span>{student.backlogs}</span>
              </p>
              <p>|</p>
              <p>
                Pass out year:{" "}
                <span>
                  {student.passOutYear ? student.passOutYear : "Year"}
                </span>
              </p>
            </div>
          </div>
          <div className="flex  flex-col justify-center gap-2 p-4">
            <Button className="w-full">
              <a
                href={`${student.resumeURL} ? ${student.resumeURL} : Email Address`}
                target="_blank"
              >
                View Resume
              </a>
            </Button>
            <SelectStudent jobId={jobId} userId={student._id} />
          </div>
        </div>
      ))}
    </div>
  );
}
