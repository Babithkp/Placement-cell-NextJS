"use client";
import React, { useEffect, useState } from "react";
import StudentsDetails from "./StudentsDetails";

export default function JobApplicantion({ jobList ,selected}: any) {
  const [jobDetails, setJobDetails] = useState<any[]>([]);

  useEffect(() => {
    async function fetch() {
      setJobDetails(jobList);      
    }
    fetch();
  }, [jobList]);

  return (
    <div className="w-[90%] ">
      {jobDetails?.map((job) => (
        <div key={job._id}>
          {!selected && job.applicants.length > 0 ? (
            <div>
              <h4 className="text-medium rounded-t-lg bg-[#2560a9] py-1 pl-10 text-white">
                {job.jobtTitle}
              </h4>
              <div>
                <StudentsDetails students={ job.applicants} jobId={job._id} />
              </div>
            </div>
          ) : (
            ""
          )}
          {selected && job.selectApplicants.length > 0 ? (
            <div>
              <h4 className="text-medium rounded-t-lg bg-[#2560a9] py-1 pl-10 text-white">
                {job.jobtTitle}
              </h4>
              <div>
                <StudentsDetails students={ job.selectApplicants} jobId={job._id} selected={selected}/>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
}
