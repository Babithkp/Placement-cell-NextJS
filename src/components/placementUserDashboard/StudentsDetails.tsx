"use client";
import React, { useEffect, useState } from "react";
import defaultImage from "../../../public/Images/profiles/deafultProfile.jpg";
import Image from "next/image";
import { PiStudentBold } from "react-icons/pi";
import { Button } from "@/components/ui/button";

import { getUserDetails } from "@/lib/controller/userTask";
import SelectStudent from "./helper/SelectStudent";
import DeleteStudent from "./helper/DeleteStudent";

interface stud {
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

export default function StudentsDetails({
  students,
  selected,
  removeSelected,
  reFetch,
  selectedStudentList,
  studentDetails,
  jobId,
}: any) {
  const [student, setStudent] = useState<any>();
  const [onSubmit, setOnSubmit] = useState("");

  function removeFromApplicants() {
    selectedStudentList(student);
  }

  function dateToday(date: string) {
    const newDate = new Date(date);
    const dates = newDate.toLocaleDateString();
    setOnSubmit(dates);
  }

  useEffect(() => {
    if (!selected) {
      dateToday(students.submittedOn);
    }
    if (studentDetails && selected) {
      setStudent(studentDetails);
      return;
    }
    async function fetch() {
      try {
        if (selected) {
          const response = await getUserDetails(students);
          if (response) {
            const filter = JSON.parse(response);
            setStudent(filter);
          }
        } else {
          const response = await getUserDetails(students.userId);
          if (response) {
            const filter = JSON.parse(response);
            setStudent(filter);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [students, selected, studentDetails]);
  return (
    <div>
      {students && (
        <div className="mb-4 flex border border-[#719CEC] bg-[#FFFFFF]">
          <div className="h-[10rem] w-[13rem]  p-4 ">
            <Image
              src={student ? student.profileUrl : defaultImage}
              alt="profile images"
              className="h-full w-full rounded-full"
              width={300}
              height={300}
            />
          </div>
          <div className="flex w-full flex-col justify-around p-4 text-lg">
            <p className=" text-xl font-medium">
              {student ? student.name : "name"}
            </p>
            <div className="flex items-center gap-2 border-b">
              <PiStudentBold />
              <span>{student ? student.collegeName : "collegeName"}</span>
              <p>|</p>
              <p>
                CGPA: <span>{student ? student.BEMarks : "BEMarks"}</span>
              </p>
              <p>|</p>
              <p>
                Email:{" "}
                <span className="text-blue-500">
                  <a href={`mailto:${student ? student.user.email : "email"}`}>
                    {student ? student.user.email : "email"}
                  </a>
                </span>
              </p>
            </div>
            <div className="flex items-center gap-2 text-base">
              <p>
                No. of backlogs{" "}
                <span>
                  {student ? student.backlogs : "tudent.userId.backlogs"}
                </span>
              </p>
              <p>|</p>
              <p>
                Pass out year:{" "}
                <span>
                  {student ? student.passOutYear : "tudent.userId.passOutYear"}
                </span>
              </p>
              {!selected && (
                <div className="flex gap-2">
                  <p>|</p>
                  <p>
                    Submited on: <span>{onSubmit}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex  flex-col justify-center gap-2 p-4">
            <Button className="w-full">
              <a
                href={student ? student.resumeURL : "resumeURL"}
                target="_blank"
              >
                View Resume
              </a>
            </Button>
            {!selected && student && (
              <SelectStudent
                jobId={jobId}
                userId={student._id}
                reFetch={reFetch}
              />
            )}
            {selected &&student && (
              <DeleteStudent
                jobId={jobId}
                reFetch={reFetch}
                userId={student._id}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
