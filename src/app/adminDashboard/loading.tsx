import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
    <>
    <div className="flex  gap-10 animate-pulse ">
      <div>
        <Skeleton className="h-[10rem] w-[10rem] rounded-xl" />
      </div>
      <div className="">
        <Skeleton className="h-4 w-[250px] " />
        <Skeleton className="h-4 w-[50px]" />
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[250px]" />
        <div className="flex">
          <Skeleton className="h-4 w-[20px]" />
          <Skeleton className="h-4 w-[20px]" />
          <Skeleton className="h-4 w-[20px]" />
        </div>
      </div>
      <div className="flex justify-between">
        <Skeleton className="h-4 w-[20px]" />
        <Skeleton className="h-4 w-[20px]" />
      </div>
    </div>
    <div className="flex  gap-10">
      <div>
        <Skeleton className="h-[10rem] w-[10rem] rounded-xl" />
      </div>
      <div className="">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[50px]" />
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[250px]" />
        <div className="flex">
          <Skeleton className="h-4 w-[20px]" />
          <Skeleton className="h-4 w-[20px]" />
          <Skeleton className="h-4 w-[20px]" />
        </div>
      </div>
      <div className="flex w-[10%] justify-between">
        <Skeleton className="h-4 w-[20px]" />
        <Skeleton className="h-4 w-[20px]" />
      </div>
    </div>
    <div className="flex h-[50rem] gap-10">
      <div>
        <Skeleton className="h-[10rem] w-[10rem] rounded-xl" />
      </div>
      <div className="w-[60%]">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[50px]" />
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[250px]" />
        <div className="flex">
          <Skeleton className="h-4 w-[20px]" />
          <Skeleton className="h-4 w-[20px]" />
          <Skeleton className="h-4 w-[20px]" />
        </div>
      </div>
      <div className="flex w-[10%] justify-between">
        <Skeleton className="h-4 w-[20px]" />
        <Skeleton className="h-4 w-[20px]" />
      </div>
    </div>
    <div className="flex h-[50rem] gap-10">
      <div>
        <Skeleton className="h-[10rem] w-[10rem] rounded-xl" />
      </div>
      <div className="w-[60%]">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[50px]" />
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[250px]" />
        <div className="flex">
          <Skeleton className="h-4 w-[20px]" />
          <Skeleton className="h-4 w-[20px]" />
          <Skeleton className="h-4 w-[20px]" />
        </div>
      </div>
      <div className="flex w-[10%] justify-between">
        <Skeleton className="h-4 w-[20px]" />
        <Skeleton className="h-4 w-[20px]" />
      </div>
    </div>
    <div className="flex h-[50rem] gap-10">
      <div>
        <Skeleton className="h-[10rem] w-[10rem] rounded-xl" />
      </div>
      <div className="w-[60%]">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[50px]" />
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[250px]" />
        <div className="flex">
          <Skeleton className="h-4 w-[20px]" />
          <Skeleton className="h-4 w-[20px]" />
          <Skeleton className="h-4 w-[20px]" />
        </div>
      </div>
      <div className="flex w-[10%] justify-between">
        <Skeleton className="h-4 w-[20px]" />
        <Skeleton className="h-4 w-[20px]" />
      </div>
    </div>
    </>
  );
}
