"use client";
import React, { useEffect, useMemo, useState } from "react";
import image from "../../../public/Images/logingImage.png";
import Image from "next/image";
import clsx from "clsx";
import Sigin from "./Sigin";
import SignUp from "./SignUp";
import { useSearchParams } from "next/navigation";

export default function SiginForm({ onclicks }: any) {
  const params = useSearchParams();
  const [sliderState, setSliderState] = useState(false);
  const path = params.get("sign");

  useEffect(() => {
    if (path === "false") {
      setSliderState(true);
    } else {
      setSliderState(false);
    }
  }, [path]);

  function changeSlider(): void {
    setSliderState(!sliderState);
  }
  return (
    <div className=" relative flex w-full  rounded-lg border border-[#719CEC] bg-[#FFFFFF] drop-shadow-2xl">
      <div
        className={clsx(
          "absolute right-0 z-10 h-full w-[50%] drop-shadow-lg duration-2000  ease-in-out transform ",
          sliderState && "-translate-x-[100%]",
        )}
      >
        <Image className={"h-full w-full rounded-lg"} src={image} alt="logging" />
      </div>
      <Sigin onClicks={changeSlider} />
      <SignUp onClicks={changeSlider} onclicking={onclicks} />
    </div>
  );
}
