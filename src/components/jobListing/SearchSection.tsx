import { Button } from "@/components/ui/button";
import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchSection() {
  return (
    <section className=" w-[90%] rounded-md bg-slate-500 py-8">
      <div className="flex items-center justify-around">
        <div className="flex">
          <label htmlFor="search" className="mr-4 text-lg">
            Job,Title,Keywords, or Company:
          </label>
          <span className="flex h-[2rem] w-[30rem] items-center border-b-2 bg-white ">
            <FaSearch className="ml-2" />
            <input
              id="search"
              type="text"
              placeholder="Filter has Your requirments"
              className="ml-4"
            />
          </span>
        </div>
        <Button>Find jobs</Button>
      </div>
    </section>
  );
}