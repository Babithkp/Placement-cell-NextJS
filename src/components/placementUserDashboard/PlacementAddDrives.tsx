"use client";
import React, { useEffect, useRef, useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import { FaPlusCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { addNewJobs, updateJobInfo } from "@/lib/controller/JobInfo";
import { Button } from "../ui/button";

interface Inputs {
  jobtTitle: string;
  companyName: string;
  deadline: string;
  companyWebsite: string;
  comapanyLocation: string;
  role: string;
  indrustryType: string;
  workMode: string;
  department: string;
  roleCategory: string;
  education: string;
  skills: string[];
  package: string;
  openings: number;
  jobDescription: string;
  aboutCompany: string;
}

export default function PlacementAddDrives({ jobInfo }: any) {
  const skillRef = useRef<HTMLInputElement>(null);
  const [newSkills, setSkills] = useState<string[]>([]);
  const [isSkillEntered, setIsSkillEntered] = useState(true);
  const [newError, setNewError] = useState<string>("");

  const [isSubmitted, setisSubmitted] = useState<undefined | Boolean>(
    undefined,
  );
  const router = useRouter();

  const onSkillSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newskill = skillRef.current?.value;
    if (!newskill) {
      setIsSkillEntered(false);
      return;
    } else {
      setSkills([...newSkills, newskill]);
      skillRef.current.value = "";
      setIsSkillEntered(true);
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    data.skills = newSkills;
    if (data.skills.length == 0) {
      setIsSkillEntered(false);
      return;
    }

    try {
      const response = await addNewJobs(data as any);
      if(response){
        setisSubmitted(response);
      }
    } catch (err) {
      if (err) {
        setNewError(
          `failed to upload  ${(err as { message?: string })?.message}`,
        );
      }
    }
  };

  let state;
  if (isSubmitted === false) {
    state = (
      <p className="text-red-600">This Job is already Excist, Try again</p>
    );
  } else if (isSubmitted === true) {
    router.replace("/jobListings");
  }

  useEffect(() => {
    if (jobInfo) {
      setValue("aboutCompany", jobInfo.aboutCompany);
      setValue("companyName", jobInfo.companyName);
      setValue("companyWebsite", jobInfo.profileUrl);
    }
  }, [jobInfo, setValue]);

  return (
    <section className="w-full rounded-lg bg-gray-200 max-sm:w-[25rem] ">
      <div className="w-full rounded-t-lg bg-[#2560a9] text-center text-2xl text-white">
        <h4>Add Drive</h4>
      </div>
      <form
        className="grid w-full grid-cols-2 gap-2 p-6 text-left text-lg max-sm:flex max-sm:flex-col "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col rounded-md bg-gray-300 p-2 ">
          <label>Job Title</label>
          <input
            type="text"
            className="rounded-md border border-black p-2 placeholder:text-base "
            placeholder="Enter Job Title"
            {...register("jobtTitle", { required: true, minLength: 5 })}
          />
          {errors.jobtTitle && (
            <p className="text-red-600">Please enter a vaild Title</p>
          )}
        </div>
        <div className="flex flex-col rounded-md bg-gray-300 p-2">
          <label>Company Name</label>
          <input
            type="text"
            className="rounded-md border border-black p-2 placeholder:text-base"
            placeholder="Infosys..."
            {...register("companyName", { required: true, minLength: 5 })}
          />
          {errors.companyName && (
            <p className="text-red-600">Please enter a vaild Name</p>
          )}
        </div>
        <div className="flex flex-col rounded-md bg-gray-300 p-2">
          <label>Deadline</label>
          <input
            type="date"
            className="rounded-md border border-black p-2 placeholder:text-base"
            placeholder="date"
            {...register("deadline", { required: true, valueAsDate: true })}
          />
          {errors.deadline && (
            <p className="text-red-600">Date cannot be Empty</p>
          )}
        </div>
        <div className="flex flex-col rounded-md bg-gray-300 p-2">
          <label>Company Icon URL</label>
          <input
            type="url"
            className="rounded-md border border-black p-2 placeholder:text-base"
            placeholder="https://www.companyIcon.jpg"
            {...register("companyWebsite")}
          />
          {errors.companyWebsite && (
            <p className="text-red-600">Please enter a vaild image URL</p>
          )}
        </div>
        <div className="flex flex-col rounded-md bg-gray-300 p-2">
          <label>Company Location</label>
          <input
            type="text"
            className="rounded-md border border-black p-2 placeholder:text-base"
            placeholder="Bengaluru / Kolkata"
            {...register("comapanyLocation", { required: true, minLength: 3 })}
          />
          {errors.comapanyLocation && (
            <p className="text-red-600">Please enter a vaild Location</p>
          )}
        </div>
        <div className="flex flex-col rounded-md bg-gray-300 p-2">
          <label>Role</label>
          <input
            type="text"
            className="rounded-md border border-black p-2 placeholder:text-base"
            placeholder="backend / fullstack devloper"
            {...register("role", { required: true, minLength: 3 })}
          />
          {errors.role && (
            <p className="text-red-600">Please enter a vaild Role</p>
          )}
        </div>
        <div className="flex flex-col rounded-md bg-gray-300 p-2">
          <label>Indrustry Type</label>
          <input
            type="text"
            className="rounded-md border border-black p-2 placeholder:text-base"
            placeholder="Recuriment / staffing"
            {...register("indrustryType", { required: true, minLength: 3 })}
          />
          {errors.indrustryType && (
            <p className="text-red-600">Please enter a vaild Input</p>
          )}
        </div>
        <div className="flex flex-col rounded-md bg-gray-300 p-2">
          <label>Work mode</label>
          <input
            type="text"
            className="rounded-md border border-black p-2 placeholder:text-base"
            placeholder="Full time / word from home"
            {...register("workMode", { required: true, minLength: 3 })}
          />
          {errors.workMode && (
            <p className="text-red-600">Please enter a vaild work mode</p>
          )}
        </div>
        <div className="flex flex-col rounded-md bg-gray-300 p-2">
          <label>Department</label>
          <input
            type="text"
            className="rounded-md border border-black p-2 placeholder:text-base"
            placeholder="Engineering"
            {...register("department", { required: true, minLength: 3 })}
          />
          {errors.department && (
            <p className="text-red-600">Please enter a vaild Department</p>
          )}
        </div>
        <div className="flex flex-col rounded-md bg-gray-300 p-2">
          <label>Role category</label>
          <input
            type="text"
            className="rounded-md border border-black p-2 placeholder:text-base"
            placeholder="software development..."
            {...register("roleCategory", { required: true, minLength: 3 })}
          />
          {errors.roleCategory && (
            <p className="text-red-600">Please enter a vaild category</p>
          )}
        </div>
        <div className="flex flex-col rounded-md bg-gray-300 p-2">
          <label>Education</label>
          <textarea
            className="rounded-md border border-black p-2 placeholder:text-base"
            placeholder="UG / B.tech/ BE in any tech"
            {...register("education", { required: true, minLength: 5 })}
          ></textarea>
          {errors.education && (
            <p className="text-red-600">Please enter a vaild category</p>
          )}
        </div>
        <div className="flex flex-col rounded-md bg-gray-300 p-2">
          <label>Key Skills</label>
          <div className="flex items-center">
            <input
              type="text"
              className="w-full rounded-md border border-black p-2 placeholder:text-base"
              placeholder="SQL / data science"
              ref={skillRef}
            />
            <Button
              onClick={onSkillSubmit}
              type="button"
              variant="ghost"
              className="rounded-full "
            >
              <FaPlusCircle size={30} />
            </Button>
          </div>
          <div className="my-2 flex flex-wrap">
            {newSkills.map((skill, index) => (
              <span
                key={index}
                className="m-1 w-fit rounded-full bg-slate-50 p-1 px-2"
              >
                {skill}
              </span>
            ))}
          </div>
          {!isSkillEntered && (
            <p className="text-red-600">Please enter a vaild Skills</p>
          )}
        </div>
        <div className="flex flex-col rounded-md bg-gray-300 p-2">
          <label>Package</label>
          <input
            type="text"
            className="rounded-md border border-black p-2 placeholder:text-base"
            placeholder="Not Disclosed"
            {...register("package", { required: true, minLength: 3 })}
          />
          {errors.package && (
            <p className="text-red-600">Please enter a vaild Package</p>
          )}
        </div>
        <div className="flex flex-col rounded-md bg-gray-300 p-2">
          <label>Openings</label>
          <input
            type="number"
            className="rounded-md border border-black p-2 placeholder:text-base"
            placeholder="100+"
            {...register("openings", { required: true })}
          />
          {errors.openings && (
            <p className="text-red-600">Openings cannot be Empty</p>
          )}
        </div>
        <div className="flex flex-col rounded-md bg-gray-300 p-2">
          <label>Job Description</label>
          <textarea
            rows={3}
            className="rounded-md border border-black p-2 placeholder:text-base"
            placeholder="description about job role"
            {...register("jobDescription", { required: true, minLength: 10 })}
          ></textarea>
          {errors.jobDescription && (
            <p className="text-red-600">
              Description cannot be empty or less than 10 charactor
            </p>
          )}
        </div>
        <div className="flex flex-col rounded-md bg-gray-300 p-2">
          <label>About Company</label>
          <textarea
            rows={3}
            className="rounded-md border border-black p-2 placeholder:text-base"
            placeholder="Company deatils"
            {...register("aboutCompany", { required: true, minLength: 10 })}
          ></textarea>
          {errors.aboutCompany && (
            <p className="text-red-600">
              Description cannot be empty or less than 10 charactor
            </p>
          )}
        </div>
        <div className=" col-start-2 mr-4 pt-8 text-right">
          <Button className="bg-[#00448E]">
            {" "}
            {isSubmitting ? "submitting" : "Submit"}
          </Button>
          {state}
          {newError && <p className="text-red-600">{newError} + try again </p>}
        </div>
      </form>
    </section>
  );
}
