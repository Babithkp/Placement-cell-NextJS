import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import homeImg from '../../../public/Images/heroimg.png'

export default function Screen() {
  return (
    <div className="h-screen p-20 flex justify-between bg-white w-[100%] items-center ">
      <div className=" w-[230rem] mb-20 ">
        <h1 className="font-bold text-5xl leading-[55px]">
          Explore the lastest Opportubities - Everything at one place
        </h1>
        <div className="mt-4">
          <Button className="mr-4 bg-[#00448E]">Expore Now!</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
      <div className="">
        <Image src={homeImg} alt="home page image" className="ml-20"/> 
      </div>
    </div>
  );
}
