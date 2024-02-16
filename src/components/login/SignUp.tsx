"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { FcGoogle } from "react-icons/fc";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";


export default function SignUp({onClicks}:any) {
  const [admin,setsdmin] = useState(false)

  return (
    <div className=" flex w-[50%] items-center justify-center p-7 rounded-r-3xl">
            <div className="flex w-[60%] flex-col gap-3">
              <h2 className="text-2xl">Sign Up!</h2>
              <p className="text-base">How do I get started ?</p>
              <Button className="flex items-center justify-center gap-3 rounded-full border px-6 py-2 drop-shadow-sm bg-transparent text-black">
                <FcGoogle size={30} />
                <p>Sign in with Google</p>
              </Button>
              <div className="relative py-1">
                <span className=" absolute -top-2 left-16  bg-slate-100 ">
                  Or Sign in with Email
                </span>
                <hr className=""></hr>
              </div>
              <form>
                <div className="my-1 flex flex-col gap-2">
                  <label >Email</label>
                  <input
                    className="w-full rounded-full border bg-transparent p-2 px-4 drop-shadow-sm"
                    placeholder="Enter Your Email address"
                  />
                </div>
                <div className="my-1 flex flex-col gap-2">
                  <label>Password</label>
                  <div className="border-full flex w-full rounded-full border bg-transparent p-2 items-center justify-between px-4 ">
                    <input
                      className="bg-transparent "
                      placeholder="Enter Your Password"
                    />
                    <div >
                      <IoEye size={22}/>
                      {/* <IoEyeOff /> */}
                    </div>
                  </div>
                </div>
                <div className="my-1 flex flex-col gap-2">
                  <label>Confirm Password</label>
                  <div className="border-full flex w-full rounded-full border bg-transparent p-2 items-center justify-between px-4 ">
                    <input
                      className="bg-transparent "
                      placeholder="Enter Your Password again"
                    />
                    <div >
                      <IoEye size={22}/>
                      {/* <IoEyeOff /> */}
                    </div>
                  </div>
                </div>
                <p className="text-right">Forget Password?</p>
                <Button className="w-full rounded-full bg-[#00448E]">
                  {admin ? "Placement-cell Sign Up":"Sign Up"}
                  </Button>
                <p className="text-center text-sm mt-2 hover:underline cursor-pointer"  onClick={()=>onClicks()}>Already a user? Sign in</p>
                <p className="text-center text-sm  hover:underline cursor-pointer"  onClick={()=>setsdmin(!admin)}>
                  
                  {admin? "user? Sign up here":"Placement-cell? Sign up here!"}
                  </p>
              </form>
            </div>
          </div>
  )
}
