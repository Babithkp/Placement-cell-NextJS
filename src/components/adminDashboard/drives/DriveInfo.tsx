"use client";
import SearchArea from "../SearchArea";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosGitBranch } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { getJobById } from "@/lib/controller/JobInfo";
import { jobs } from "@/lib/models/jobs";

 import EditDrivesDialog from "./EditDrivesDialog";
import DeleteDrivesDialog from "./DeleteDrivesDialog";

export default function DriveInfo() {
  const [jobId, setJobId] = useState("");
  const [jobInfo, setJobInfo] = useState<jobs>();
  const [postedDate, setPostedDate] = useState(0);
  const [deadlineDate, setDeadlineDate] = useState(0);
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function jobFetch() {
      if (jobId?.length > 0) {
        try {
          const singleJob = await getJobById(jobId);
          if (singleJob) {
            const filteredJobInfo = await JSON.parse(singleJob);
            setJobInfo(filteredJobInfo);
            const postedOn = new Date(filteredJobInfo.submitOn);
            const deadline = new Date(filteredJobInfo.deadline);
            const currentTime = new Date();
            const postTimeDifference =
              currentTime.getDate() - postedOn.getDate();
            const deadlineTimeDifference =
              deadline.getDate() - currentTime.getDate();

            const daysDifference = Math.floor(
              postTimeDifference / (1000 * 60 * 60 * 24),
            );
            const deadlineDiffrence = Math.floor(
              deadlineTimeDifference / (1000 * 60 * 60 * 24),
            );
            setDeadlineDate(deadlineDiffrence);
            setPostedDate(daysDifference);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    jobFetch();
  }, [jobId]);

  function getJobId(id: string) {
    setJobId(id);
  }
  return (
    <section className="flex rounded-lg bg-gray-200 max-sm:text-sm">
      <SearchArea getId={getJobId} ref={parentRef}/>
      <div className="flex w-full flex-col gap-4 p-4 text-white ">
        <div className="flex justify-between rounded-xl bg-black p-2">
          <div>
            <h4 className="text-lg max-sm:text-base">{jobInfo?.jobtTitle}</h4>
            <p className="text-sm">{jobInfo?.companyName}</p>
            <p className="text-xs">
              Posted{" "}
              {postedDate === 0 ? (
                <span>Today</span>
              ) : (
                <span>on {postedDate}+ Days Ago</span>
              )}
            </p>
          </div>
          <div className="flex gap-2">
            <EditDrivesDialog jobInfo={jobInfo} />
            <DeleteDrivesDialog jobid={jobId} />
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-[repeat(2,10rem)] gap-4 text-sm">
          <div className="rounded-xl bg-black p-2  ">
            <FaRegMoneyBillAlt className="my-2" size={25} />
            <p className="text-lg max-sm:text-base">Salary</p>
            <p>
              salary: <span>{jobInfo?.package}</span>
            </p>
          </div>
          <div className="rounded-xl bg-black p-2 max-sm:text-xs">
            <IoEye className="my-2" size={25} />
            <p className="text-lg max-sm:text-xs">Insights</p>
            <p className="max-sm:text-xs">
              impressions: <span>{jobInfo?.impressions}</span>
            </p>
            <p className="max-sm:text-xs">
              Applications received: <span>{jobInfo?.applicants.length}</span>
            </p>
          </div>
          <div className="rounded-xl bg-black p-2 max-sm:text-xs">
            <HiMenuAlt2 className="my-2" size={25} />
            <p className="text-lg max-sm:text-xs">Details</p>
            <p className="max-sm:text-xs">
              Application Deadline: <span>{deadlineDate} Days left </span>
            </p>
            <p>
              Work mode: <span>{jobInfo?.workMode}</span>
            </p>
          </div>
          <div className="rounded-xl bg-black p-2 max-sm:text-xs">
            <IoIosGitBranch className="my-2 max-sm:my-1" size={25} />
            <p className="text-lg max-sm:text-xs">Required</p>
            <div className="flex">
              <span>Skills:</span>
              <p className="flex flex-wrap">
                {jobInfo?.skills?.map((skill, i) => (
                  <span key={i} className="ml-2">
                    {skill}
                  </span>
                ))}
              </p>
            </div>
            <p>
              Category: <span> {jobInfo?.roleCategory}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
