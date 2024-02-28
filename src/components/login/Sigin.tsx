"use client";
import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import clsx from "clsx";
import { userLogin } from "@/lib/controller/userTask";
import { useRouter } from "next/navigation";
import { VscLoading } from "react-icons/vsc";
import { placementUserLogin } from "@/lib/controller/placementAdmin";

interface userInputsState{
  email: boolean;
  password: boolean;
  error: string | boolean;
}

export default function Sigin({ onClicks }: any) {
  const router = useRouter()
  const [isSubmitting,setIsSubmitting] = useState(false)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [adminState, setAdminState] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [passwordOn,setPasswordOn] = useState(false);
  const [errors,setErrors] = useState<userInputsState>({
    email: false,
    password: false,
    error: false,
  });

  async function formClickHandler(e: any) {
    e.preventDefault();
    const email = emailRef?.current?.value
    const password = passwordRef?.current?.value
    if(email && password){
      if(email?.length < 11){
        setErrors(prev=>({
        ...prev,
        email : true
      }))
    }
    if(email?.length > 11){
      setErrors(prev=>({
        ...prev,
        email : false
      }))
    }
    if(password?.length < 5){
      setErrors(prev=>({
        ...prev,
        password : true
      }))
    }
    if(password?.length > 5){
      setErrors(prev=>({
        ...prev,
        password : false
      }))
    }
    if(email.trim().length < 11 || password.trim().length < 5){
      console.log("return");
      return 
    }
    
    try{
      if(!admin && adminState){
        setIsSubmitting(true)
        const response = await userLogin(email, password)
        if(response){
          setIsSubmitting(false)
          const filter = JSON.parse(response)
          const storage = {
            userId: filter.userData,
            type: filter.type
          }

          const convert = JSON.stringify(storage)
          const value = sessionStorage.setItem("userInfo",convert)
          router.replace(`/userDetails/${filter._id}`)
        }else{
          setErrors(prev=>({
            ...prev,
            error : "Wrong Credentials Failed to login,Try again",
          }))
          setIsSubmitting(false)
          
        }
      }else if(admin && adminState){
        setIsSubmitting(true)
        const response = await placementUserLogin(email, password)
        if(response){
          setIsSubmitting(false)
          
          const filter = JSON.parse(response)
          
          const storage = {
            userId: filter.userData,
            type: filter.type
          }

          const convert = JSON.stringify(storage)
          const value = sessionStorage.setItem("userInfo",convert)
          router.replace(`/placement-Cell-Profile/${storage.userId}`)
        }else{
          setErrors(prev=>({
            ...prev,
            error : "Wrong Credentials Failed to login,Try again", 
          }))
          setIsSubmitting(false)
        }
      }else{
      console.log("Admin "+email,password);
      }
    }catch(error){
      setErrors(prev=>({
        ...prev,
        error : "Wrong Credentials Failed to login,Try again",
      }))
      setIsSubmitting(false)
      
    }
  }else if(!email || !password){
    
    if(!email){
      setErrors(prev=>({
        ...prev,
        email : true,
      }))
    }
    if(!password){
      setErrors(prev=>({
        ...prev,
        password : true
      }))
    }
    if(!password && !email){
      setErrors(prev=>({
        ...prev,
        email: true,
        password : true
      }))
    }
    return 
  }
  }


  
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
        <form >
          <div className="my-2 flex flex-col gap-2">
            <label>Email <span className="text-lg text-red-500">*</span></label>
            <input
              className="w-full rounded-full border bg-transparent p-2 px-4 drop-shadow-sm outline-none"
              placeholder="Enter Your Email address"
              type="email"
              ref={emailRef}
            />
            {errors.email && <p className="text-sm text-red-500">Provide vaild email ID</p>}
          </div>
          <div className="my-2 flex flex-col gap-2">
            <label>Password <span className="text-lg text-red-500">*</span></label>
            <div className="border-full flex w-full items-center justify-between rounded-full border bg-transparent p-2 px-4 ">
              <input
                className="bg-transparent outline-none"
                placeholder="Enter Your Password"
                type={passwordOn ? "password" : "text"}
                ref={passwordRef}
                />
              <div>
               {!passwordOn && <IoEye size={22} onClick={()=>setPasswordOn(true)}/>}
                {passwordOn && <IoEyeOff size={22} onClick={()=>setPasswordOn(false)}/>}
              </div>
            </div>
                {errors.password && <p className="text-sm text-red-500">Provide vaild Password</p>}
          </div>
          <p className="text-right">Forget Password?</p>
          { <Button type="button" onClick={formClickHandler} className="w-full rounded-full bg-[#00448E]">
            {!isSubmitting && <p>
            {admin ? "Admin Login" : "Login"}
            </p>}
          {isSubmitting && <div className="text-center">
          <VscLoading size={25} className="animate-spin-z"/>
          </div>}
          </Button>}
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
          {errors.error && <p className="text-sm text-red-400 mt-2">{errors.error}</p>}
        </form>
      </div>
    </div>
  );
}
