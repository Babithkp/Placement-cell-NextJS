"use client";
import { FaAngleDown } from "react-icons/fa6";
import { Button } from "../ui/button";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { useGlobalContext } from "@/store/contextForm";

export default function Navbar() {
  const userCtx = useGlobalContext()
  const path = userCtx?.userId
  const [isDropdown, setISDropdown] = useState(false);

  function dropDownHandler(value: boolean) {
    setISDropdown(value);
  }
  return (
    <nav className="relative flex  w-[100%] items-center justify-between border-b-2 bg-[#2560a9] ">
      <Link href="/" className="ml-8 font-bold ">
        LOGO
      </Link>

      <ul className="flex w-[50%] items-center justify-around font-medium text-white">
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
        <li>
          <Link href="/adminDashboard">Admin Dashboard</Link>
        </li>
        <li>
          <Link href={`/placementUserDashboard/${path}`} >My Dashboard</Link>
        </li>
        <li>
          <Link href="/jobListings">Job Listings</Link>
        </li>
        <li
          className=" relative flex h-[3.5rem] cursor-pointer items-center"
          onMouseEnter={() => dropDownHandler(true)}
          onMouseLeave={() => dropDownHandler(false)}
        >
          <span>More</span>
          <span>
            <FaAngleDown size={20} style={{ marginTop: "4px" }} />
          </span>
          {isDropdown && <Dropdown />}
        </li>
        <li>
          <Link href="/signing?sign=false">
            <Button variant="outline" className="text-black">Sign Up</Button>
          </Link>
          <Link href="/signing?sign=true" className="ml-4">
            <Button>Login</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
