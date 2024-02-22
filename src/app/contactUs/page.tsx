import ContactUSContainer from "@/components/contactUs/ContactUSContainer";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <h2 className="mt-5 text-2xl font-semibold uppercase">Contact us</h2>
        <ContactUSContainer />
      </div>
    </div>
  );
}
