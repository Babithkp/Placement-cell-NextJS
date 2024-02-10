import React from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdDescription } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import comapanyImg from "../../../public/Images/companies/client-2.png";
import Image from "next/image";

const skillList = [
  "MS SQL",
  "jQuery",
  "GIT",
  "MVVM",
  "coding",
  "MySQL",
  "JavaScript",
  "CMS",
];

const jobLists = [
  {
    title: "Web Full Stack Developer",
    comapany: "Husys Consuling",
    package: "Not disclosed",
    location: "Bengaluru",
    description:
      "Key Responsibilities Participate in product development process architectur...",
    addedOn: 30,
  },
  {
    title: "Web Full Stack Developer",
    comapany: "Husys Consuling",
    package: "Not disclosed",
    location: "Bengaluru",
    description:
      "Key Responsibilities Participate in product development process architectur...",
    addedOn: 30,
  },
  {
    title: "Web Full Stack Developer",
    comapany: "Husys Consuling",
    package: "Not disclosed",
    location: "Bengaluru",
    description:
      "Key Responsibilities Participate in product development process architectur...",
    addedOn: 30,
  },
  {
    title: "Web Full Stack Developer",
    comapany: "Husys Consuling",
    package: "Not disclosed",
    location: "Bengaluru",
    description: "Key Responsibilities Participate in product development process architectur...",
    addedOn: 30
},
{
    title: "Web Full Stack Developer",
    comapany: "Husys Consuling",
    package: "Not disclosed",
    location: "Bengaluru",
    description: "Key Responsibilities Participate in product development process architectur...",
    addedOn: 30
},
];

export default function Results() {
  return (
    <>
      {jobLists.map((job, i) => (
        <section
          key={i}
          className="mb-4 flex rounded-md bg-slate-500 p-8 text-sm "
        >
          <span className=" flex items-center">
            <Image
              src={comapanyImg}
              alt="image"
              className="h-20 w-20 rounded-lg"
            />
          </span>

          <div className="px-4">
            <h4 className="text-xl">{job.title}</h4>
            <p>{job.comapany}</p>
            <div>
              <p className="flex items-center">
                <span>
                  <FaIndianRupeeSign />
                </span>
                <span>{job.package}</span>
              </p>
              <p className="flex items-center">
                <span>
                  <FaLocationDot />
                </span>
                <span>{job.location}</span>
              </p>
            </div>

            <p className="flex items-center">
              <span>
                <MdDescription />
              </span>
              <span>{job.description}</span>
            </p>
            <ul className="flex">
              {skillList.map((skill, i) => (
                <li key={i}>
                  <p className="flex items-center">
                    {skill}
                    <GoDotFill />
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between">
            <p className="flex items-center gap-1">
              <span>
                <FaRegBookmark />
              </span>
              <span>Save</span>
            </p>
            <p>{job.addedOn}+ Days Ago</p>
          </div>
        </section>
      ))}
    </>
  );
}
