import Link from "next/link";
import React from "react";

export default function Dropdown() {
  return (
    <div className="absolute -bottom-[8rem] w-[8rem] bg-slate-500 z-20">
      <ul>
        <li className="p-[1px] text-center hover:bg-slate-100">
          <Link href="/userDetails">my Profile</Link>
        </li>
        <li className="p-[1px] text-center hover:bg-slate-100">
          <Link href="/placementDetails">my DashBoard</Link>
        </li>
        <li className="p-[1px] text-center hover:bg-slate-100">
          <Link href="/placement-Cell-Profile">Placement Profile</Link>
        </li>
        <li className="p-[1px] text-center hover:bg-slate-100">item 4</li>
        <li className="p-[1px] text-center hover:bg-slate-100">item 5</li>
      </ul>
    </div>
  );
}
