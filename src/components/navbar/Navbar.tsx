"use client";
import { FaAngleDown } from "react-icons/fa6";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/store/contextForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  getAllAccouncerments,
  getUserDetails,
} from "@/lib/controller/userTask";
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
import logoImg from "../../../public/Images/screen/logo.jpeg";
import { ScrollArea } from "../ui/scroll-area";
import ClickToMore from "./ClickToMore";

export default function Navbar() {
  const containerRef = useRef(null);
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
  const [announcementInfo, setAnnouncementsInfo] = useState<any[]>([]);

  const announcements = [
    {
      title: "Alert Dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
  ];

  function dateToString(date: string) {
    const deadLineDay = new Date(date);
    const today = new Date();

    deadLineDay.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const inputDateMs = deadLineDay.getTime();
    const todayMs = today.getTime();

    const differenceInMilliseconds = todayMs - inputDateMs;
    const differenceInDays = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24),
    );
    return differenceInDays;
  }

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
      gsap.from(".logo", {
        x: -100,
        opacity: 0,
        duration: 1.5,
        ease: "back",
        delay: 1,
      });
    },
    { scope: containerRef },
  );

  async function userInfo(filtered: any) {
    if (filtered.type === "placement-cell") {
      try {
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
      } catch (error) {
        console.log(error);
      }
    }
    if (filtered.type === "user") {
      try {
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
        const announceRes = await getAllAccouncerments(filtered.userId);
        if (announceRes) {
          const announceFilter = JSON.parse(announceRes);
          setAnnouncementsInfo(announceFilter.appliedJobs);
        }
      } catch (error) {
        console.log(error);
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
      <Link href="/" className="logo ml-8 h-[2rem] w-[8rem] font-bold">
        <Image
          src={logoImg}
          alt="logo Image"
          className="h-full w-full object-cover"
        />
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
          <li className="navItem text-white">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
                    <IoMdNotifications size={30} />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid h-[20rem] w-[18rem] gap-3 p-4 ">
                      <ScrollArea className=" h-[18rem]   w-full max-sm:w-[25rem]">
                        {announcementInfo?.map((Company) => (
                          <li key={Company.companyName}>
                            <p className="font-extrabold">
                              {Company.companyName}
                            </p>
                            <p className="text-sm text-slate-400 font-bold">
                              {Company.jobtTitle}
                            </p>
                            {Company.announcement.map(
                              (announce: any, i: string) => (
                                <div key={i}>
                                  <p>{announce.title}</p>
                                  <ClickToMore
                                    description={announce.description}
                                  />
                                  <p className="text-sm text-slate-400">
                                    Sent {dateToString(announce.submittedOn)}{" "}
                                    day back
                                  </p>
                                </div>
                              ),
                            )}
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
