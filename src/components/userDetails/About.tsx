"use client";
import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { Button } from "../ui/button";
import { edituserAddress } from "@/lib/controller/userTask";
import Link from "next/link";
import { BiSolidFilePdf } from "react-icons/bi";

export default function About({
  phone,
  address,
  email,
  DOB,
  gender,
  id,
  resumeURL,
}: any) {
  const [editAddress, setEditAddress] = useState(address);
  const [isAddressEditable, setIsAddressEditable] = useState(false);
  const [Error, setError] = useState<string>();

  const date = new Date(DOB);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  async function editAddressClickHandler() {
    setIsAddressEditable(false);
    try {
      const response = await edituserAddress(editAddress, id);
      if (!response) {
        setError("Couldn't edit user Address, try reloading again");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function editAddressHandler(event: any) {
    setEditAddress(event.target.value);
  }

  return (
    <div className="flex gap-[10rem]">
      <div className="flex w-[25rem] flex-col gap-3">
        <span className="text-sm uppercase text-slate-400">
          contact information
        </span>
        <p className="flex gap-8">
          Phone: <span>+91 {phone ? phone : "0000000000"}</span>
        </p>
        <div className="flex gap-8">
          Address:{" "}
          <div className="flex">
            {isAddressEditable && (
              <textarea
                value={editAddress}
                className="rounded-lg border p-1 outline-1"
                onChange={editAddressHandler}
              ></textarea>
            )}
            {!isAddressEditable && (
              <p>{editAddress ? editAddress : "Address"}</p>
            )}
            {!isAddressEditable && (
              <div
                className="mr-16 flex items-center text-black"
                onClick={() => setIsAddressEditable(true)}
              >
                <MdEdit />
              </div>
            )}
            {isAddressEditable && (
              <div>
                <Button
                  onClick={editAddressClickHandler}
                  type="button"
                  className="ml-2 h-fit rounded-md p-2"
                >
                  save
                </Button>
              </div>
            )}
          </div>
        </div>
        <p className="flex gap-8">
          Email:{" "}
          <span className="text-blue-400">
            {email ? email : "useremail@gmail.com"}
          </span>
        </p>
        {Error && <p className="text-red-500">{Error}</p>}
      </div>
      <div className="">
        <span className="text-sm uppercase text-slate-400">
          Basic information
        </span>
        <p className="flex gap-8 ">
          Birthday:{" "}
          <span>
            {day}-{month}-{year}
          </span>
        </p>
        <p className="flex gap-8">
          Gender: <span>{gender}</span>
        </p>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-sm uppercase text-slate-400">Resume</span>
        {resumeURL && (
          <Link href={resumeURL} target="_blank">
            <BiSolidFilePdf
              size={50}
              className="rounded-lg border drop-shadow-2xl"
            />
          </Link>
        )}
        <p className="text-center  text-sm">Click to View Resume</p>
      </div>
    </div>
  );
}
