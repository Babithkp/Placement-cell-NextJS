import CardContainer from "@/components/login/CardContainer";
import React from "react";
import { Suspense } from "react";
export default function page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className='drop-shadow-2xl" flex items-center justify-center rounded-3xl'>
        <CardContainer />
      </div>
    </Suspense>
  );
}
