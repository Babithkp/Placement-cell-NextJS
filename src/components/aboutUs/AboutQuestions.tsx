import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import image from "../../../public/Images/faq.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GoQuestion } from "react-icons/go";


export default function AboutQuestions() {
  return (
    <section>
      <div>
        <div className="flex flex-col items-center my-10">

        <h2 className="my-6 text-4xl font-semibold">
          Explore latest opportunities
        </h2>
        <Button className="rounded-md bg-[#00448E]">Explore</Button>
        </div>
      </div>
      <div className="flex">
        <div className="w-[50%]">
          <h3 className="text-4xl font-semibold my-4">Frequently asked Questions</h3>
          <p className="text-lg my-4">
            Any queries or doubts regrading the Placements Portal will be
            addressed over here students might get confused regarding the
            placement portal and may have queries to be sloved.{" "}
          </p>
          <div>
            <Accordion type="single" collapsible className="bg-[#ffff]">
              <AccordionItem value="item-1">
                <AccordionTrigger><p><GoQuestion className="inline mx-4"/>What is the objectve</p></AccordionTrigger>
                <AccordionContent className="bg-[#bacdef]">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" >
                <AccordionTrigger><p><GoQuestion className="inline mx-4"/>questions 2</p></AccordionTrigger>
                <AccordionContent className="bg-[#bacdef]">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger><p><GoQuestion className="inline mx-4"/>questions 3</p></AccordionTrigger>
                <AccordionContent className="bg-[#bacdef]">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger><p><GoQuestion className="inline mx-4"/>questions 4</p></AccordionTrigger>
                <AccordionContent className="bg-[#bacdef]">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="w-[50%]">
          <Image src={image} alt="Question images" />
        </div>
      </div>
    </section>
  );
}
