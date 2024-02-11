import CompanyAbout from "@/components/jobDetailed/CompanyAbout";
import Description from "@/components/jobDetailed/Description";
import HowItWorks from "@/components/jobDetailed/HowItWorks";
import Info from "@/components/jobDetailed/Info";
import Results from "@/components/jobListing/Results";
import React from "react";

export default function page() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="mb-4 flex min-h-[60vh]  w-full items-center justify-center bg-slate-500">
        <p className="w-60 text-2xl font-bold">
          Full Stack Web Developer -
          <span className="text-blue-700"> Google</span>
        </p>
      </div>
      <div className="flex w-[80%] ">
        <div>
          <Info />
          <CompanyAbout/>
        <Description/>
        </div>
        <HowItWorks/>
      </div>
    </div>
  );
}
