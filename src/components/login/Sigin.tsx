"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import clsx from "clsx";

export default function Sigin({ onClicks }: any) {
  const [adminState, setAdminState] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [passwordOn,setPasswordOn] = useState(false);

  return (
    <div className=" flex w-[50%] items-center justify-center rounded-l-3xl px-8 py-4">
      <div className="flex w-[60%] flex-col gap-3">
        <h2 className="text-2xl">Login!</h2>
        {admin && (
          <div className="relative flex justify-between rounded-full border">
            <div
              className={clsx(
                "absolute flex h-full w-[50%] transform items-center  justify-center rounded-full bg-[#719CEC] duration-1000 ease-out hover:bg-slate-400 ",
                adminState && "translate-x-[100%]",
              )}
            >
              {adminState ? "Placement Login" : "Admin Login"}
            </div>

            <p
              onClick={() => setAdminState(!adminState)}
              className={clsx("cursor-pointer rounded-full p-2 px-3")}
            >
              Admin Login
            </p>
            <p
              onClick={() => setAdminState(!adminState)}
              className={clsx("cursor-pointer rounded-full p-2  px-3")}
            >
              Placement Login
            </p>
          </div>
        )}
        <p className="text-base">How do I get started ?</p>
        <Button className="flex hover:bg-slate-200 items-center justify-center gap-3 rounded-full border bg-transparent px-6 py-1 text-black drop-shadow-sm">
          <FcGoogle size={30} />
          <p>Sign in with Google</p>
        </Button>
        <div className="relative py-2">
          <span className=" absolute -top-1 left-16  bg-white">
            Or Sign in with Email
          </span>
          <hr className=""></hr>
        </div>
        <form>
          <div className="my-2 flex flex-col gap-2">
            <label>Email</label>
            <input
              className="w-full rounded-full border bg-transparent p-2 px-4 drop-shadow-sm outline-none"
              placeholder="Enter Your Email address"
            />
          </div>
          <div className="my-2 flex flex-col gap-2">
            <label>Password</label>
            <div className="border-full flex w-full items-center justify-between rounded-full border bg-transparent p-2 px-4 ">
              <input
                className="bg-transparent outline-none"
                placeholder="Enter Your Password"
                type={passwordOn ? "password" : "text"}
              />
              <div>
               {!passwordOn && <IoEye size={22} onClick={()=>setPasswordOn(true)}/>}
                {passwordOn && <IoEyeOff size={22} onClick={()=>setPasswordOn(false)}/>}
              </div>
            </div>
          </div>
          <p className="text-right">Forget Password?</p>
          <Button className="w-full rounded-full bg-[#00448E]">
            {admin ? "Admin Login" : "Login"}
          </Button>
          <p
            className="mt-2 cursor-pointer text-center text-sm hover:underline"
            onClick={() => onClicks()}
          >
            NO Account? Create one!
          </p>
          <p
            className="cursor-pointer text-center text-sm hover:underline"
            onClick={() => setAdmin(!admin)}
          >
            {admin ? "User? Login here!" : "Admin? Login here! "}
          </p>
        </form>
      </div>
    </div>
  );
}
