import React from "react";
import { MdPeopleAlt } from "react-icons/md";
import { GrShop } from "react-icons/gr";
import { TbFileDescription } from "react-icons/tb";
import { PiStudentBold } from "react-icons/pi";
export default function Dashboard({title}:any) {
  return (
    <section className="flex flex-col items-center p-4 ">
      <h2 className="py-4 text-3xl">{title}</h2>
      <div className="my-4 grid w-full grid-cols-4  scale-120 justify-items-center max-sm:grid-cols-2 max-sm:gap-4 max-sm:justify-center max-sm: max-sm:scale-110 font-medium">
        <div className="rounded-lg bg-green-200 p-4 ">
          <div>
            <MdPeopleAlt size={30} />
          </div>
          <span>10</span>
          <p>Placement drives</p>
        </div>
        <div className="rounded-lg bg-yellow-200 p-4 ">
          <div>
            <GrShop size={30} />
          </div>
          <span>10</span>
          <p>Total Job Offers</p>
        </div>
        <div className="rounded-lg bg-orange-200 p-4">
          <div>
            <TbFileDescription size={30} />
          </div>
          <span>10</span>
          <p>Students Resumes</p>
        </div>
        <div className="rounded-lg bg-violet-200 p-4">
          <div>
            <PiStudentBold size={30} />
          </div>
          <span>10</span>
          <p>Placed Students</p>
        </div>
      </div>
    </section>
  );
}
