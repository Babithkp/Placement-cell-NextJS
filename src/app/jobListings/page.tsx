import Filters from "@/components/jobListing/Filters";
import Results from "@/components/jobListing/Results";
import SearchSection from "@/components/jobListing/SearchSection";

export default function page() {
  return (
    <div className="flex w-full flex-col justify-center p-8 items-center">
      <SearchSection />
      <div className="flex w-[90%] justify-between mt-8">
        <Filters /> 
        <div className="w-[70%]">
        <Results />
        </div>
      </div>
    </div>
  );
}
