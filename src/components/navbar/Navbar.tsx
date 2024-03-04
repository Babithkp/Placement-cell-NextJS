"use client";
import { FaAngleDown } from "react-icons/fa6";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/store/contextForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUserDetails } from "@/lib/controller/userTask";
import {
  getPlacementUSerInfo,
  getPlacementUserDetails,
} from "@/lib/controller/placementAdmin";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [userId, setUserId] = useState<string | null>();
  const router = useRouter();
  const userStatesCtx = useGlobalContext();
  const [isUser, setIsUser] = useState(false);
  const [iscompanny, setIscompanny] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userAvatar, setUserAvatar] = useState({
    profileUrl: "https://github.com/shadcn.png",
    name: "User Name",
  });
  const containerRef = useRef(null)

  useGSAP(()=>{
    gsap.from(".navItem",{y:10,opacity:0,duration:0.5,stagger:{
      each:0.2
    },ease:"power2.inOut"})
  },{scope:containerRef})


  async function userInfo(filtered: any) {
    if (filtered.type === "placement-cell") {
      const response = await getPlacementUSerInfo(filtered.userId);
      if (response) {
        const filter = JSON.parse(response);
        setUserAvatar({
          profileUrl: filter.profileUrl ? filter.profileUrl :"https://github.com/shadcn.png",
          name: filter.companyName,
        });
      }
    }
    if (filtered.type === "user") {
      const userResponse = await getUserDetails(filtered.userId);
      if (userResponse) {
        const userFilter = JSON.parse(userResponse);
        setUserAvatar({
          profileUrl: userFilter.profileUrl ? userFilter.profileUrl :"https://github.com/shadcn.png",
          name: userFilter.name,
        });
      }
    }
  }

  useEffect(() => {
    if (typeof sessionStorage !== "undefined") {
      const value = sessionStorage.getItem("userInfo");
      if (value) {
        const filter = JSON.parse(value);
        const userType = filter?.type;
        setIsUser(userType === "user");
        setIscompanny(userType === "placement-cell");
        setIsAdmin(userType === "admin");
        setIsLogin(true);
        if (filter) {
          userInfo(filter);
        }
        setUserId(filter?.userId);
        console.log(filter);
        
      } else {
        setIsUser(false);
        setIsLogin(false);
      }
    }
  }, [userStatesCtx?.userId]);

  function logoutHandler() {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("userInfo");
      setUserId(null);
      setIsLogin(false);
      setIsUser(false);
      setIscompanny(false);
      setIsAdmin(false);
      router.replace("/");
    }
  }

  return (
    <nav ref={containerRef} className="relative flex h-[10vh] w-[100%] items-center justify-between border-b-2 bg-[#2560a9] ">
      <Link href="/" className="ml-8 font-bold ">
        LOGO
      </Link>
      <ul className="flex w-[50%] items-center justify-around font-medium text-white">
        <li className="navItem">
          <Link href="/about-us">About Us</Link>
        </li>
        <li className="navItem">
          <Link href="/contactUs">Contact Us</Link>
        </li>
        {isAdmin && (
          <li className="navItem">
            <Link href="/adminDashboard">Admin Dashboard</Link>
          </li>
        )}
        {iscompanny && (
          <li className="navItem">
            <Link href={`/placementUserDashboard/${userId}`}>My Dashboard</Link>
          </li>
        )}
        <li className="navItem">
          <Link href="/jobListings">Job Listings</Link>
        </li>
        {iscompanny && (
          <li className="navItem">
            <Link
              href={`/placement-Cell-Profile/${userId}`}
              className="flex items-center justify-center gap-3"
            >
              <Avatar>
                <AvatarImage src={userAvatar.profileUrl} />
                <AvatarFallback>PL</AvatarFallback>
              </Avatar>
              <p>{userAvatar.name}</p>
            </Link>
          </li>
        )}
        {isUser && (
          <li className="navItem">
            <Link
              href={`/userDetails/${userId}`}
              className="flex items-center justify-center gap-3"
            >
              <Avatar>
                <AvatarImage src={userAvatar.profileUrl} />
                <AvatarFallback>PL</AvatarFallback>
              </Avatar>
              <p>{userAvatar.name}</p>
            </Link>
          </li>
        )}
        {!isLogin && (
          <li >
            <Link href="/signing?sign=false" className="navItem">
              <Button variant="outline" className="text-black">
                Sign Up
              </Button>
            </Link>
            <Link href="/signing?sign=true" className="ml-4 navItem">
              <Button>Login</Button>
            </Link>
          </li>
        )}
        {isLogin && (
          <li className="navItem">
            <Button onClick={logoutHandler}>Logout</Button>
          </li>
        )}
      </ul>
    </nav>
  );
}
