import React from "react";
import image from "../../../public/Images/profiles/michael.jpg";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Education from "./Education";
import About from "./About";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

export default function Userintro() {
  return (
    <div className="flex w-[90%] flex-col ">
      <section className="flex gap-16 py-8 items-center">
        <div className="h-[15rem] w-[20%] ">
          <Image
            src={image}
            alt="profile Image "
            className="h-full w-full object-cover rounded-lg drop-shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-4 w-[80%] bg-white p-6 text-lg border border-blue-400 rounded-lg drop-shadow-lg">
          <div className="flex">
            <div>
              <p className="text-2xl">Ashika M</p>
              <p className="text-[#719CEC]">Frontend Developer</p>
            </div>
            <div className=" ml-3 mt-3 text-slate-400">
              <p className="flex gap-1">
                <FaLocationDot /> <span className="text-sm">bangaluru</span>
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex items-end  gap-2 border-b-2 pb-2 ">
              <FaUser />
              <p className="-mb-1">About</p>
            </div>
            <About />
          </div>
        </div>
      </section>
      <section className="flex items-start gap-20 bg-white px-6 pb-4 border border-blue-400 rounded-lg drop-shadow-lg">
            <Education />
        <div>
          <Accordion type="single" collapsible className="w-[25rem] ">
            <AccordionItem value="item-1">
              <AccordionTrigger>Favourite Jobs</AccordionTrigger>
                <AccordionContent className="flex items-center justify-between border-b p-0">
              <ScrollArea className=" h-[9rem]   max-sm:w-[25rem] w-full">
                  <div className="flex items-center justify-between border-b p-0">
                    <div>
                      <p className="text-base font-semibold">
                        Frontend Developer
                      </p>
                      <p>Company name</p>
                    </div>
                    <Button className="h-fit p-1 mr-4">View Details</Button>
                  </div>
                  <div className="flex items-center justify-between border-b p-0">
                    <div>
                      <p className="text-base font-semibold">
                        Frontend Developer
                      </p>
                      <p>Company name</p>
                    </div>
                    <Button className="h-fit p-1 mr-4">View Details</Button>
                  </div>
                  <div className="flex items-center justify-between border-b p-0">
                    <div>
                      <p className="text-base font-semibold">
                        Frontend Developer
                      </p>
                      <p>Company name</p>
                    </div>
                    <Button className="h-fit p-1 mr-4">View Details</Button>
                  </div>
              </ScrollArea>
                </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
        <Accordion type="single" collapsible className="w-[25rem] ">
            <AccordionItem value="item-1">
              <AccordionTrigger>Applied Jobs</AccordionTrigger>
                <AccordionContent className="flex items-center justify-between border-b p-0">
              <ScrollArea className=" h-[9rem]   max-sm:w-[25rem] w-full">
                  <div className="flex items-center justify-between border-b p-0">
                    <div>
                      <p className="text-base font-semibold">
                        Frontend Developer
                      </p>
                      <p>Company name</p>
                    </div>
                    <Button className="h-fit p-1 mr-4">View Details</Button>
                  </div>
                  <div className="flex items-center justify-between border-b p-0">
                    <div>
                      <p className="text-base font-semibold">
                        Frontend Developer
                      </p>
                      <p>Company name</p>
                    </div>
                    <Button className="h-fit p-1 mr-4">View Details</Button>
                  </div>
                  <div className="flex items-center justify-between border-b p-0">
                    <div>
                      <p className="text-base font-semibold">
                        Frontend Developer
                      </p>
                      <p>Company name</p>
                    </div>
                    <Button className="h-fit p-1 mr-4">View Details</Button>
                  </div>
              </ScrollArea>
                </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
