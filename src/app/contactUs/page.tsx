import ContactUSContainer from "@/components/contactUs/ContactUSContainer";
import React from "react";

export default function page() {
  return (
    <div className="flex items-center justify-center flex-col gap-4 w-[90%]">
        <h2 className="text-2xl font-semibold mt-5 uppercase">Contact us</h2>
      <ContactUSContainer />
    </div>
  );
}
