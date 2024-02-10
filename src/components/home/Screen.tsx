import React from "react";
import { Button } from "../ui/button";

export default function Screen() {
  return (
    <div className="h-screen p-20 flex justify-between bg-white w-[100%] items-center ">
      <div className=" w-[60%] mb-20 ">
        <h1 className="font-bold text-5xl leading-[55px]">
          Explore the lastest Opportubities - Everything at one place
        </h1>
        <div className="mt-4">
          <Button className="mr-4">Expore Now!</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
