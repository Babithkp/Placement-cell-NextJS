import React from "react";
import SearchArea from "./SearchArea";
import { FaClockRotateLeft } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { Button } from "../ui/button";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

export default function Announcement() {
  return (
    <section className="flex rounded-lg bg-gray-200 max-sm:text-sm">
      <SearchArea announcement={true} />
      <div className="flex w-full flex-col gap-4 p-4 text-white">
        <div className="flex h-[5rem] justify-between rounded-xl bg-black p-2">
          <h4 className="text-lg font-medium max-sm:text-xs">Full Stack Web Development</h4>
          <p>
            Posted on <span>30 + </span> Days Ago
          </p>
        </div>
        <div className="rounded-xl bg-black p-4  ">
          <h4 className="mb-3 text-lg font-semibold max-sm:text-base">Description</h4>
          <p className="max-sm:text-xs">
            This is Details number one,This is Details number one,This is
            Details number one,This is Details number This is Details number
            one,This is Details number one,This is Details number one,This is
            Details number This is Details number one,This is Details number
            one,This is Details number one,This is Details number This is
            Details number one,This is Details number one,This is Details number
            one,This is Details number{" "}
            <span className="cursor-pointer underline hover:text-yellow-50">
              Read More
            </span>
          </p>
        </div>
        <div className="grid  grid-cols-[repeat(2,1fr)] gap-4 text-sm max-sm:text-xs">
          <div className="rounded-xl bg-black p-4  ">
            <FaClockRotateLeft className="my-2 " size={25} />
            <p className="my-2 text-lg font-medium max-sm:text-xs">Activity</p>
            <p>
              Status: <span>Active</span>
            </p>
            <p>
              Expires: <span>14 Feb 2024</span>
            </p>
          </div>
          <div className="rounded-xl bg-black p-4 flex flex-col gap-2 max-sm:text-xs">
            <BsThreeDots className="mt-2 " size={25} />
            <p className="my-2 text-lg font-medium">Options</p>
            <Button className="w-full rounded-full bg-slate-200 text-black flex gap-2 font-bold max-sm:text-xs">
              <BiEditAlt size={25} />
              Edit
            </Button>
            <Button className="w-full rounded-full bg-red-400 text-black flex gap-2 font-bold max-sm:text-xs">
              <AiOutlineDelete size={25} />
              Delete
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
