"use client";
import React, { useEffect, useState } from "react";
import StudentsDetails from "./StudentsDetails";

export default function Applicantion({ jobList,reFetch}: any) {
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
          {job.applicants.length > 0 ? (
            <div>
              <h4 className="text-medium rounded-t-lg bg-[#2560a9] py-1 pl-10 text-white">
                {job.jobtTitle}
              </h4>
              <div>
                {job.applicants.map((singStud:any,i:string)=>(
                  <div key={i}>
                    <StudentsDetails students={ singStud} jobId={job._id} reFetch={reFetch}/>
                  </div>
                  ))}
              </div>
            </div>
          ) : (
            <p className="text-center">Applicant List is Empty</p>
          )}
        </div>
      ))}
    </div>
  );
}
