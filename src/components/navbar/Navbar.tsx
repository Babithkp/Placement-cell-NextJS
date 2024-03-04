"use client";
import { FaAngleDown } from "react-icons/fa6";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/store/contextForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUserDetails } from "@/lib/controller/userTask";
import { getPlacementUSerInfo } from "@/lib/controller/placementAdmin";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IoMdNotifications } from "react-icons/io";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import logoImg from '../../../public/Images/screen/logo.jpeg'
import { ScrollArea } from "../ui/scroll-area";
import ClickToMore from "./ClickToMore";

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

const announcements = [
  {
    title: "Alert Dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },


]

  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".navItem", {
        y: 10,
        opacity: 0,
        duration: 0.5,
        stagger: {
          each: 0.2,
        },
        ease: "power2.inOut",
      });
      gsap.from(".logo",{x:-100 ,opacity:0,duration:1.5,ease:"back",delay:1})
    },
    { scope: containerRef },
  );

  async function userInfo(filtered: any) {
    if (filtered.type === "placement-cell") {
      const response = await getPlacementUSerInfo(filtered.userId);
      if (response) {
        const filter = JSON.parse(response);
        setUserAvatar({
          profileUrl: filter.profileUrl
            ? filter.profileUrl
            : "https://github.com/shadcn.png",
          name: filter.companyName,
        });
      }
    }
    if (filtered.type === "user") {
      const userResponse = await getUserDetails(filtered.userId);
      if (userResponse) {
        const userFilter = JSON.parse(userResponse);
        setUserAvatar({
          profileUrl: userFilter.profileUrl
            ? userFilter.profileUrl
            : "https://github.com/shadcn.png",
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
    <nav
      ref={containerRef}
      className="relative flex h-[10vh] w-[100%] items-center justify-between border-b-2 bg-[#2560a9]  "
    >
      <Link href="/" className="ml-8 font-bold w-[3.8rem] h-[3.9rem] logo">
        <Image src={logoImg} alt="logo Image" className="object-cover"/>
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
              <li className="text-white navItem">
                <NavigationMenu>
                  <NavigationMenuList >
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
                        <IoMdNotifications size={30} />
                      </NavigationMenuTrigger>
                      <NavigationMenuContent >

                        <ul className="grid gap-3 p-4 w-[18rem] h-[20rem] ">
                      <ScrollArea className=" h-[18rem]   w-full max-sm:w-[25rem]">
                          {announcements.map((announce)=>(
                            <li key={announce.title} title={announce.title} >
                              <p className="font-extrabold">{announce.title}</p>
                              <ClickToMore description={announce.description}/>
                              
                            </li>
                          ))}
                          </ScrollArea>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
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
          <li>
            <Link href="/signing?sign=false" className="navItem">
              <Button variant="outline" className="text-black">
                Sign Up
              </Button>
            </Link>
            <Link href="/signing?sign=true" className="navItem ml-4">
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
