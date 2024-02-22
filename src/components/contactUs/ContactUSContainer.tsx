"use client";
import React, { FormEvent, useRef, useState } from "react";
import { Button } from "../ui/button";
import { sendContactusMessage } from "@/lib/mail/contactusFrom";

interface SomeType {
  reset: () => void;
}
export default function ContactUSContainer() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await sendContactusMessage(event);
    setIsSubmitting(true);
    try {
      const result = await response.json();
      setIsSubmitting(false);
      if (result.success) {
        if (formRef.current !== undefined && formRef.current !== null) {
          (formRef.current as SomeType).reset();
        }
        alert("Thanks for submitting");
      } else {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex w-[40%] flex-col gap-2  rounded-lg border border-blue-400 px-16 py-6 drop-shadow-md  max-sm:w-[80%] bg-white"
    >
      <div>
        <label htmlFor="address">Your Email Address</label>
        <input
          id="address"
          name="email"
          className="w-full rounded-lg border border-black p-2 bg-slate-50"
          placeholder="Enter your email address"
          required
        />
      </div>
      <div>
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          className="w-full rounded-lg border border-black p-2 bg-slate-50"
          placeholder="Enter your subject"
          required
        />
      </div>
      <div>
        <label htmlFor="textArea">How can we help ?</label>
        <textarea
          rows={3}
          id="textArea"
          name="message"
          className="w-full rounded-lg  border border-black p-2 bg-slate-50"
          placeholder="Enter your message"
          required
        ></textarea>
      </div>
      <Button className="w-fit rounded-lg bg-[#00448E] px-8" type="submit">
        {isSubmitting ? "Sending..." : "Send"}
      </Button>
    </form>
  );
}
