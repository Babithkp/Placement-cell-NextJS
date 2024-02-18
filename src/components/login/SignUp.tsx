"use client";
import React, { useContext, useState } from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { SubmitHandler, useForm } from "react-hook-form";
import FormContextProps, { useGlobalContext } from "@/store/contextForm";

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
  type: string;
};

export default function SignUp({ onClicks, onclicking }: any) {
  const [admin, setsdmin] = useState(false);
  const [passwordOn, setPasswordOn] = useState(false);
  const [confirmpasswordOn, setConfirmpasswordOn] = useState(false);
  const formCtx = useGlobalContext();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.password !== data.confirmPassword) {
      throw new Error("Password and Confirm Password must be the same");
    }

    if (admin && data) {
      formCtx?.addPlacementUserSignUpInfo(data.email, data.password);
      formCtx?.changeUserRegiter(false);
      onclicking()
    } else {
      formCtx?.addUserSignUpInfo(data.email, data.password);
      formCtx?.changeUserRegiter(true);
      onclicking()
    }
  };

  return (
    <div className=" flex w-[50%] items-center justify-center rounded-r-3xl p-7 px-8 py-4">
      <div className="flex w-[60%] flex-col gap-3">
        <h2 className="text-2xl">Sign Up!</h2>
        <p className="text-base">How do I get started ?</p>
        <Button className="flex items-center justify-center gap-3 rounded-full border bg-transparent px-6 py-2 text-black drop-shadow-sm hover:bg-slate-200">
          <FcGoogle size={30} />
          <p>Sign in with Google</p>
        </Button>
        <div className="relative py-1">
          <span className=" absolute -top-2 left-16  bg-slate-100 ">
            Or Sign in with Email
          </span>
          <hr className=""></hr>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-1 flex flex-col gap-2">
            <label>Email</label>
            <input
              className="w-full rounded-full border bg-transparent p-2 px-4 drop-shadow-sm"
              placeholder="Enter Your Email address"
              type="email"
              {...register("email", { required: true, minLength: 2 })}
            />
            {errors.email && (
              <p className="text-sm text-red-500">Please enter a valid Email</p>
            )}
          </div>
          <div className="my-1 flex flex-col gap-2">
            <label>Password</label>
            <div className="border-full flex w-full items-center justify-between rounded-full border bg-transparent p-2 px-4 ">
              <input
                className="bg-transparent outline-none"
                placeholder="Enter Your Password"
                type={passwordOn ? "password" : "text"}
                {...register("password", { required: true, minLength: 6 })}
              />

              <div>
                {!passwordOn && (
                  <IoEye size={22} onClick={() => setPasswordOn(true)} />
                )}
                {passwordOn && (
                  <IoEyeOff size={22} onClick={() => setPasswordOn(false)} />
                )}
              </div>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">
                Password should more than 6 charactor
              </p>
            )}
          </div>
          <div className="my-1 flex flex-col gap-2">
            <label>Confirm Password</label>
            <div className="border-full flex w-full items-center justify-between rounded-full border bg-transparent p-2 px-4 ">
              <input
                className="bg-transparent outline-none"
                placeholder="Enter Your Password again"
                type={confirmpasswordOn ? "password" : "text"}
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />

              <div>
                {!confirmpasswordOn && (
                  <IoEye size={22} onClick={() => setConfirmpasswordOn(true)} />
                )}
                {confirmpasswordOn && (
                  <IoEyeOff
                    size={22}
                    onClick={() => setConfirmpasswordOn(false)}
                  />
                )}
              </div>
            </div>
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">
                {errors.confirmPassword.message ||
                  "Please enter a valid password"}
              </p>
            )}
          </div>
          <p className="text-right">Forget Password?</p>
          <Button className="w-full rounded-full bg-[#00448E]">
            {admin ? "Placement-cell Sign Up" : "Sign Up"}
          </Button>
          <p
            className="mt-2 cursor-pointer text-center text-sm hover:underline"
            onClick={() => onClicks()}
          >
            Already a user? Sign in
          </p>
          <p
            className="cursor-pointer text-center  text-sm hover:underline"
            onClick={() => setsdmin(!admin)}
          >
            {admin ? "user? Sign up here" : "Placement-cell? Sign up here!"}
          </p>
        </form>
      </div>
    </div>
  );
}
