"use client";
import { FaAngleDown } from "react-icons/fa6";
import { Button } from "../ui/button";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { useState } from "react";

export default function Navbar() {
  const [isDropdown, setISDropdown] = useState(false);

  function dropDownHandler(value: boolean) {
    setISDropdown(value);
  }
  return (
    <nav className="relative flex  w-[100%] items-center justify-between border-b-2 ">
      <Link href="/" className="ml-8 font-bold ">
        LOGO
      </Link>

      <ul className="flex w-[50%] items-center justify-around font-medium">
        <li>
          <Link href="/adminDashboard">Admin Dashboard</Link>
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
          <Link href="/signing">
            <Button variant="outline">Sign Up</Button>
          </Link>
          <Link href="/signing" className="ml-4">
            <Button>Login</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
