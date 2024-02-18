import React from "react";
import { FaTwitter } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { jobs } from "@/lib/models/jobs";

export default function Description({job}:any) {
  return (
    <section className="my-4  flex h-fit flex-col rounded-md bg-[#FFFFFF] border-[#719CEC] border p-6">
      <h3 className="text-xl">Job description</h3>
      <article className="prose ">
        {job.jobDescription}
        <div className="font-semibold">
        <div className="mt-4 ">
          Role: <span className="font-normal">{job.role}</span>
        </div>
        <div>
          Industry Type: <span className="font-normal">{job.indrustryType}</span>
        </div>
        <div>
          Department: <span className="font-normal"> {job.department}</span>
        </div>
        <div>
          Employment Type: <span className="font-normal">{job.workMode}</span>
        </div>
        <div>
          Role Category: <span className="font-normal">{job.roleCategory}</span>
        </div>
        <div className="mt-4">
          Education:
          <span className="font-normal">{job.education}</span>
        </div>
        </div>
      </article>
        <div className="flex flex-wrap gap-2 my-4">
          {job.skills?.map((skill:string,i:string,)=>(
            <span key={i} className="bg-slate-100 p-1  rounded-xl">{skill}</span>
          ))}
        </div>
        <div className="border-t-2 p-2">
            <ul className="flex gap-4">
            <li>
                  <a href="#">
                    <FaTwitter size={25} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillFacebook size={25} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin size={25} />
                  </a>
                </li>
            </ul>
        </div>
    </section>
  );
}
