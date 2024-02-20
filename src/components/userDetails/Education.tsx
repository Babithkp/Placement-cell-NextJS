import React from "react";

export default function Education() {
  return (
    <div className="mt-9 ">
      <p className="border-b-[2px]   border-b-slate-300 text-sm uppercase text-slate-400">
        education
      </p>
      <ul className="flex flex-col gap-2">
        <li className="flex gap-8">
          <p>college:</p>
          <span className="font-semibold">
            East point college of engneening{" "}
          </span>
        </li>

        <li className="flex gap-8">
          <p className="w-[10rem]">Batch:</p>
          <span>2021</span>
        </li>
        <li className="flex gap-8">
          <p className="w-[10rem]">Pass out Year:</p>
          <span>2025</span>
        </li>
        <li className="flex gap-8">
          <p className="w-[10rem]">Current Backlogs:</p>
          <span>0</span>
        </li>
        <li className="flex gap-8">
          <p className="w-[10rem]">History of Backlogs:</p>
          <span>0</span>
        </li>
      </ul>
    </div>
  );
}
