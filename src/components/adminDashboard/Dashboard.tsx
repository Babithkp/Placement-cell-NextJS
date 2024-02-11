import React from 'react'
import { MdPeopleAlt } from "react-icons/md";
import { GrShop } from "react-icons/gr";
import { TbFileDescription } from "react-icons/tb";
import { PiStudentBold } from "react-icons/pi";
export default function Dashboard() {
  return (
    <section className="flex flex-col items-center p-4">

        <h2 className="text-3xl py-4">Admin Dashboard</h2>
        <div className="flex justify-around w-full">
        <div className="bg-green-200 rounded-lg p-4 ">
          <div>
            <MdPeopleAlt size={30}/>
          </div>
          <span>10</span>
          <p>Placement drives</p>
        </div>
        <div className="bg-yellow-200 rounded-lg p-4 ">
          <div>
            <GrShop size={30}/>
          </div>
          <span>10</span>
          <p>Total Job Offers</p>
        </div>
        <div className="bg-orange-200 rounded-lg p-4">
          <div>
            <TbFileDescription size={30}/>
          </div>
          <span>10</span>
          <p>Students Resumes</p>
        </div>
        <div className="bg-violet-200 rounded-lg p-4">
          <div>
            <PiStudentBold size={30}/>
          </div>
          <span>10</span>
          <p>Placed Students</p>
        </div>
        </div>
      </section>
  )
}
