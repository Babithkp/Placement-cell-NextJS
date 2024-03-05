import React, { Suspense } from "react";
import Filters from "@/components/jobListing/Filters";
const Results = React.lazy(() => import("@/components/jobListing/Results"));
import SearchSection from "@/components/jobListing/SearchSection";
import Loading from "./loading";

export default function page() {
  return (
    <div className="flex w-full flex-col items-center justify-center p-8 max-sm:p-0 ">
      <SearchSection />
      <div className="mt-8 flex w-[90%] justify-between  max-sm:w-full max-sm:flex-col max-sm:gap-4 ">
        <Filters />
        <div className="w-[70%] text-[1rem] max-sm:w-full ">
          <Suspense fallback={<Loading/>}>
            <Results />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
