"use client";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { Button } from "../../ui/button";
import { ScrollArea } from "../../ui/scroll-area";
import { getJobById, getJobInfoForAdmin } from "@/lib/controller/JobInfo";
import { jobs } from "@/lib/models/jobs";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  addNewAnnoucement,
  getJobsAnnouncement,
  updateAccouncement,
} from "@/lib/controller/announcement";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

interface Inputs {
  title: string;
  validity: string;
  type: string;
  description: string;
}

interface jobInfo {
  jobTitle: string;
  jobID: string | "null";
}

export default function AnnounceForm({ announcement, announceId }: any) {
  const [isDropped, setIsDropped] = useState(false);
  const [jobList, setJobList] = useState<undefined | jobs[]>([]);
  const [selectedOption, setSelectedOption] = useState<undefined | jobInfo>();
  const [Error, setError] = useState<null | string>(null);
  const router = useRouter();

  const selectHandler = function (jobTitle: string, jobID: string = "null") {
    setIsDropped(false);
    setSelectedOption({ jobTitle, jobID });
    console.log(jobID);
  };

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await getJobInfoForAdmin();
      if (response) {
        const jobs = JSON.parse(response);
        setJobList(jobs);
      }
    };
    fetchJobs();
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    if (!selectedOption) {
      setError("Please select a job");
      return;
    }
    try {
      let response;
      if (announceId) {
        response = await updateAccouncement(
          data,
          selectedOption?.jobID,
          announceId,
        );
        console.log(response);
      } else {
        response = await addNewAnnoucement(data, selectedOption?.jobID);

        if (response) {
          router.refresh();
          router.replace("/adminDashboard");
        }
      }
    } catch (error) {
      setError("Failed to announce" + error);
    }
  };

  useEffect(() => {
    async function fetch() {
      try {
        if (announceId !== "null" && announceId) {
          const jobinfo: any = await getJobsAnnouncement(announceId);
          if (jobinfo) {
            const response = JSON.parse(jobinfo);
            console.log(response);
            setSelectedOption({
              jobTitle: response.jobtTitle,
              jobID: announceId,
            });
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (announcement) {
      const dateObject = new Date(announcement.validity);
      const dateString = format(dateObject, "yyyy-MM-dd");
      setValue("title", announcement.title);
      setValue("validity", dateString);
      console.log(dateString);

      setValue("description", announcement.description);
    }
    fetch();
  }, [announcement, setValue, announceId]);
  return (
    <div className="h-[30rem] w-full overflow-hidden rounded-lg border border-blue-400 bg-white">
      <div className="w-full bg-[#2560a9] text-center">
        <h4 className="text-2xl  text-white">New Announcement</h4>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid h-full w-full grid-cols-[50%,50%] p-8"
      >
        <div className="flex flex-col justify-evenly  pb-10 text-base">
          <div>
            <label>Title </label>
            <span className="text-lg text-red-500">*</span>
            <input
              placeholder="Enter announcement Title"
              className="w-full rounded-lg border border-black bg-slate-50 p-2"
              {...register("title", { required: true, minLength: 5 })}
            />
            {errors.title && (
              <p className="text-red-600">Please enter a vaild Title</p>
            )}
          </div>
          <div>
            <label>Validity </label>
            <span className="text-lg text-red-500">*</span>
            <input
              type="date"
              className="w-full rounded-lg border border-black bg-slate-50 p-2"
              {...register("validity", {
                required: true,
                minLength: 5,
                valueAsDate: true,
              })}
            />
            {errors.validity && (
              <p className="text-red-600">Please enter a vaild Title</p>
            )}
          </div>
          <div>
            <label>Type</label>
            <input
              value="Text"
              className="w-full rounded-lg border border-black bg-slate-50 p-2"
              {...register("type", { required: true })}
            />
          </div>

          <div>
            <label>Description </label>
            <span className="text-lg text-red-500">*</span>
            <textarea
              placeholder="Enter Description"
              rows={3}
              className="w-full rounded-lg border border-black bg-slate-50 p-2"
              {...register("description", { required: true, minLength: 10 })}
            ></textarea>
            {errors.description && (
              <p className="text-red-600">Please enter a vaild Description</p>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end justify-between pb-14">
          <div className="flex w-full flex-col items-end gap-1 px-10 pt-2">
            <h5 className="text-lg font-semibold">Select users</h5>
            <div
              className="flex  h-[2.2rem] w-full cursor-pointer items-center justify-between rounded-lg border border-black bg-slate-50 p-2"
              onClick={() => setIsDropped(!isDropped)}
            >
              <p>
                {selectedOption
                  ? selectedOption.jobTitle
                  : "-----Please Select anyone Option------"}
              </p>
              <FaAngleDown />
            </div>
            {Error && <p className="text-red-600">{Error}</p>}
            {isDropped && (
              <div className="flex w-full items-center justify-between rounded-lg border border-black bg-slate-50 p-2">
                <ScrollArea className="h-[10rem]  w-full rounded-md">
                  <ul>
                    <li
                      onClick={() => selectHandler("Select All")}
                      className="w-full rounded-md p-1 hover:bg-blue-400"
                    >
                      Select All
                    </li>
                    {jobList?.map((job) => (
                      <li
                        onClick={() => selectHandler(job.jobtTitle, job._id)}
                        key={job._id}
                        className="w-full rounded-md p-1 hover:bg-blue-400"
                      >
                        <p>{job.jobtTitle}</p>
                        <span>{job.companyName}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <Button className="rounded-lg bg-[#00448E] px-8">
              {isSubmitting ? "Submitting..." : "Send"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
