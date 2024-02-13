import Filters from "@/components/jobListing/Filters";
import Results from "@/components/jobListing/Results";
import SearchSection from "@/components/jobListing/SearchSection";

export default function page() {
  return (
    <div className="flex w-full flex-col justify-center p-8 items-center max-sm:p-0 ">
      <SearchSection />
      <div className="flex w-[90%] justify-between mt-8  max-sm:flex-col max-sm:gap-4 max-sm:w-full ">
        <Filters /> 
        <div className="w-[70%] text-[1rem] max-sm:w-full ">
        <Results />
        </div>
      </div>
    </div>
  );
}
