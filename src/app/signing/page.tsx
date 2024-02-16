import { Button } from "@/components/ui/button";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

export default function page() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[80%] py-16">
        <div className=" flex bg-slate-400 w-full">
          <div className=" bg-orange-500 w-[50%]">
            <h2 className="text-2xl">Login!</h2>
            <p className="text-xl">How do I get started ?</p>
            <div className="flex rounded-full border px-6 py-2">
              <FcGoogle size={30} />
              <p>Sign in with Google</p>
            </div>
            <div>
              <span className="relative ">Or Sign in with Email</span>
              <span className="h-[1rem] bg-stone-800 before:absolute before:-inset-1 before:contents after:contents"></span>
            </div>
            <form>
              <div>
                <label>Email</label>
                <input placeholder="Enter Your Email address" />
              </div>
              <div>
                <label>Password</label>
                <div className="border-full flex bg-white">
                  <input placeholder="Enter Your Email address" />
                  <IoEye />
                  <IoEyeOff />
                </div>
              </div>
              <p className="text-right">Forget Password?</p>
              <Button>Login</Button>
              <p className="text-center">NO Account? Create one!</p>
              <p className="text-center">Admin? Login here!</p>
            </form>
          </div>


          <div className="w-[50%] bg-lime-500">
            <h2 className="text-2xl">Sign Up!</h2>
            <p className="text-xl">How do I get started ?</p>
            <div className="flex rounded-full border px-6 py-2">
              <FcGoogle size={30} />
              <p>Sign in with Google</p>
            </div>
            <div>
              <span className="relative ">Or Sign in with Email</span>
              <span className="h-[1rem] bg-stone-800 before:absolute before:-inset-1 before:contents after:contents"></span>
            </div>
            <form>
              <div>
                <label>Email</label>
                <input placeholder="Enter Your Email address" />
              </div>
              <div>
                <label>Password</label>
                <div className="border-full flex bg-white">
                  <input placeholder="Enter Your Email address" />
                  <IoEye />
                  <IoEyeOff />
                </div>
              </div>
              <div>
                <label>Confirm Password</label>
                <div className="border-full flex bg-white">
                  <input placeholder="Enter Your Email address again" />
                  <IoEye />
                  <IoEyeOff />
                </div>
              </div>

              <p className="text-right">Forget Password?</p>
              <Button>Login</Button>
              <p className="text-center">Already user? Sign in</p>
            </form>
          </div>
        </div>
        <div className=" bg-red-400">register form</div>
      </div>
    </div>
  );
}
