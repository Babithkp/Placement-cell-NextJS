import React from "react";
import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";
import { TbCircleNumber4 } from "react-icons/tb";
export default function HowItWorks() {
  return (
    <section className=" ml-4 flex h-fit flex-col rounded-md bg-stone-200 p-6">
      <div className="flex flex-col gap-3 text-xs">
        <h4 className="text-center font-semibold text-xl">How it Works?</h4>
        <div className="flex items-center justify-between">
          <TbCircleNumber1 size={50} className="rounded-full bg-white mr-2" />
          <p className="w-[70%] text-center">
            This step is a dummy step am still waiting my team mates to give the
            description
          </p>
        </div>
        <div className="flex items-center justify-between">
          <TbCircleNumber2 size={50} className="rounded-full bg-white mr-2" />
          <p className="w-[70%] text-center">
            This step is a dummy step am still waiting my team mates to give the
            description
          </p>
        </div>
        <div className="flex items-center justify-between">
          <TbCircleNumber3 size={50} className="rounded-full bg-white mr-2" />
          <p className="w-[70%] text-center">
            This step is a dummy step am still waiting my team mates to give the
            description
          </p>
        </div>
        <div className="flex items-center justify-between">
          <TbCircleNumber4 size={50} className="rounded-full bg-white mr-2" />
          <p className="w-[70%] text-center">
            This step is a dummy step am still waiting my team mates to give the
            description
          </p>
        </div>
      </div>
      
    </section>
  );
}
