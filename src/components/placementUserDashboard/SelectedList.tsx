"use client";
import React, { useEffect, useState } from "react";
import StudentsDetails from "./StudentsDetails";

export default function SelectedList({ jobList,reFetch}: any) {
  const [jobDetails, setJobDetails] = useState<any[]>([]);

  useEffect(() => {
      setJobDetails(jobList);      
  }, [jobList]);

  return (
    <div className="w-[90%] ">
      {jobDetails?.map((job) => (
        <div key={job._id}>
          {job.selectApplicants.length > 0 ? (
            <div>
              <h4 className="text-medium rounded-t-lg bg-[#2560a9] py-1 pl-10 text-white">
                {job.jobtTitle}
              </h4>
              {job.selectApplicants.map((student:any,i:string)=>(
              <div key={i}>
                <StudentsDetails students={student} selected={true} jobId={job._id} reFetch={reFetch}/>
              </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
}
