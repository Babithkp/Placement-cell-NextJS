import React from "react";
import comapanyImg from "../../../public/Images/companies/client-2.png";
import Image from "next/image";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "../ui/button";

export default function Info() {
  return (
    <section className="mb-4 flex flex-col rounded-md bg-slate-500 p-8 text-sm ">
      <div className="flex">
        <span className=" mr-4 flex items-center">
          <Image
            src={comapanyImg}
            alt="image"
            className="h-20 w-20 rounded-lg"
          />
        </span>

        <div className="w-[90%] border-b mb-1">
          <h4 className="text-xl">full stack development</h4>
          <p>company</p>
          <div className="flex gap-2">
            <p className="flex items-center">
              <span>
                <FaIndianRupeeSign className="mr-2" />
              </span>
              <span>Not disclosed</span>
            </p>
            |
            <p className="flex items-center">
              <span>
                <FaLocationDot className="mr-2" />
              </span>
              <span>Bengaluru</span>
            </p>
          </div>
        </div>
        <Button>Apply</Button>
      </div>
      <div className="ml-[6rem] -mb-4">
        <p>
          Posted: <span>30</span>+ Days Ago | Openings <span>100</span>+ seats |
          Applicants: 541
        </p>
      </div>
    </section>
  );
}
