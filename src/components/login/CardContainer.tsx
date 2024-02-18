"use client";
import React, { useState } from "react";
import SiginForm from "@/components/login/SiginForm";
import UserRegister from "@/components/login/UserRegister";
import { ScrollArea } from "@/components/ui/scroll-area";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import PlacementRegister from "./PlacementRegister";
import { useGlobalContext } from "@/store/contextForm";

export default function CardContainer() {
  const [flip, setFlip] = useState(false);
  const formCtx = useGlobalContext()
  const state = formCtx?.userRegister
  

   function onFlipHandler(){
    setFlip(!flip)
  }

  return (
    <div className="relative w-[80%] rounded-3xl h-[100vh]  flex flex-col justify-center ">
      <div
        className={clsx(
          " absolute left-0   w-[99%] overflow-hidden rounded-lg bg-slate-200  duration-1000 ",
          flip && "-rotate-y-180",
        )}
      >
        <ScrollArea className="h-[30rem]   rounded-2xl border rotate-y-180 max-sm:w-[25rem]">
          {state && <UserRegister />}
          {!state && <PlacementRegister/>}
        </ScrollArea>
      </div>
      <div
        className={clsx(
          " font  overflow-hidden duration-1000",
          flip && "rotate-y-180",
        )}
      >
        <SiginForm onclicks={onFlipHandler}/>
      </div>
      <Button onClick={() => setFlip(!flip)} className="w-fit">flip</Button>
    </div>
  );
}