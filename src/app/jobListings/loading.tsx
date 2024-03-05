import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
   
     <div className="flex h-[50rem] gap-10 animate-pulse ">
     <div className="w-[40%]">
       <Skeleton className="h-4 w-[50px]" />
       <Skeleton className="h-4 w-[20px]" />
       <Skeleton className="h-[200px] w-[200px]" />
     </div>
     <div>
       <Skeleton className="h-[20px] w-[550px]" />
       <div>
       <Skeleton className="h-[50px] w-[250px]" />
       <Skeleton className="h-[50px] w-[250px]" />
       </div>
       <div>
       <Skeleton className="h-[50px] w-[250px]" />
       <Skeleton className="h-[50px] w-[250px]" />
       </div>
     </div>
   </div>
  );
}
