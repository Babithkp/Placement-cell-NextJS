import React from "react";
import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";
import { TbCircleNumber4 } from "react-icons/tb";
export default function HowItWorks() {
  return (
    <section className=" ml-4 flex h-fit flex-col rounded-md bg-[#FFFFFF] border-[#719CEC] border p-4 max-sm:m-0">
      <div className="flex flex-col gap-3 text-xs">
        <h4 className="text-center text-xl font-semibold">How it Works?</h4>
        <div className="flex  items-center justify-between">
          <TbCircleNumber1 size={60} className="w-36 h-12 mr-2 rounded-full bg-white" />
          <div className=" text-center">
            <h6 className=" text-sm font-semibold">This is a header</h6>
            <p >
              This step is a dummy step am still waiting my team mates to give
              the description
            </p>
          </div>
        </div>
        <div className="flex  items-center justify-between">
          <TbCircleNumber2 size={60} className="w-36 h-12 mr-2 rounded-full bg-white" />
          <div className=" text-center">
            <h6 className=" text-sm font-semibold">This is a header</h6>
            <p >
              This step is a dummy step am still waiting my team mates to give
              the description
            </p>
          </div>
        </div>
        <div className="flex  items-center justify-between">
          <TbCircleNumber3 size={60} className="w-36 h-12 mr-2 rounded-full bg-white" />
          <div className=" text-center">
            <h6 className=" text-sm font-semibold">This is a header</h6>
            <p >
              This step is a dummy step am still waiting my team mates to give
              the description
            </p>
          </div>
        </div>
        <div className="flex  items-center justify-between">
          <TbCircleNumber4 size={60} className="w-36 h-12 mr-2 rounded-full bg-white" />
          <div className=" text-center">
            <h6 className=" text-sm font-semibold">This is a header</h6>
            <p >
              This step is a dummy step am still waiting my team mates to give
              the description
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
