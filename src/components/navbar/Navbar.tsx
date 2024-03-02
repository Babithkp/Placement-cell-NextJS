"use client";
import { FaAngleDown } from "react-icons/fa6";
import { Button } from "../ui/button";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/store/contextForm";

export default function Navbar() {
const [isLogin,setIsLogin] = useState(false)
const [userId,setUserId] = useState('')
  const router = useRouter()
  const userStatesCtx = useGlobalContext()

  const newUserId = userStatesCtx?.userId

  

  function logoutHandler() {
    if (typeof sessionStorage !== 'undefined'){
      const value = sessionStorage.removeItem("userInfo")
      router.replace("/")
      setIsLogin(false)
    }
  }
  return (
    <nav className="relative flex h-[10vh] w-[100%] items-center justify-between border-b-2 bg-[#2560a9] ">
      <Link href="/" className="ml-8 font-bold ">
        LOGO
      </Link>

      <ul className="flex w-[70%] items-center justify-around font-medium text-white">
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
        <li>
          <Link href="/adminDashboard">Admin Dashboard</Link>
        </li>
        <li>
          <Link href={`/placementUserDashboard/${newUserId}`} >My Dashboard</Link>
        </li>
        <li>
          <Link href={`/userDetails/${newUserId}`} >My Profile</Link>
        </li>
        <li>
          <Link href={`/placement-Cell-Profile/${newUserId}`} >OUR profile</Link>
        </li>
        <li>
          <Link href="/jobListings">Job Listings</Link>
        </li>
        {!newUserId && <li>
          <Link href="/signing?sign=false">
            <Button variant="outline" className="text-black">Sign Up</Button>
          </Link>
          <Link href="/signing?sign=true" className="ml-4">
            <Button>Login</Button>
          </Link>
        </li>}
        {newUserId && <li>
            <Button onClick={logoutHandler}>Logout</Button>
        </li>}
      </ul>
    </nav>
  );
}
