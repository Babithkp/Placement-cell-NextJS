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
        <div className="my-10 flex flex-col items-center" id="FAQ">
          <h2 className="my-6 text-4xl font-semibold">
            Explore latest opportunities
          </h2>
          <Button className="rounded-md bg-[#00448E]">Explore</Button>
        </div>
      </div>
      <div className="flex">
        <div className="w-[50%]">
          <h3 className="my-4 text-4xl font-semibold">
            Frequently asked Questions
          </h3>
          <p className="my-4 text-lg">
            Any queries or doubts regrading the Placements Portal will be
            addressed over here students might get confused regarding the
            placement portal and may have queries to be sloved.{" "}
          </p>
          <div>
            <Accordion type="single" collapsible className="bg-[#ffff]">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p>
                    <GoQuestion className="mx-4 inline" />
                    What is the objectve of this portal ?
                  </p>
                </AccordionTrigger>
                <AccordionContent className="bg-[#bacdef] px-12 py-2">
                  The Placement Cell plays a crucial role in locating job
                  opportunities for under graduates and post graduates passing
                  out from the college by keeping in touch with reputed firms
                  and industrial establishments. The placement cell operates
                  round the year to facilitate contacts between companies and
                  graduates. The number of students placed through the campus
                  interviews is continuously rising.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <p>
                    <GoQuestion className="mx-4 inline" />
                    Do you find any problem during login or registration ?
                  </p>
                </AccordionTrigger>
                <AccordionContent className="bg-[#bacdef] px-12 py-2">
                  Try login using your correct credentials. If you are having
                  any trouble during registration, you can reach out to us via
                  the contact page.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  <p>
                    <GoQuestion className="mx-4 inline" />
                    How much time, one need to wait for the account approval ?
                  </p>
                </AccordionTrigger>
                <AccordionContent className="bg-[#bacdef] px-12 py-2">
                  Once the Training and placement officer approves your
                  candidature, then you will be able to login successfully using
                  your credentials.
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
