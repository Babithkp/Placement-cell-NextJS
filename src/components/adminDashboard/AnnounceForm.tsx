"use client"
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

export default function AnnounceForm() {
const [isDropped,setIsDropped] = useState(false)
  return (
    <div className="w-full rounded-lg border border-blue-400 bg-white p-4">
      <div>
        <h4 className="text-xl font-semibold">New Accouncement</h4>
      </div>
      <form className="grid w-full grid-cols-[50%,50%] p-8">
        <div className="flex flex-col gap-3">
          <div>
            <label>Title:</label>
            <input
              placeholder="Enter announcement Title"
              className="w-full rounded-lg border border-black bg-slate-50 p-2"
            />
          </div>
          <div>
            <label>Validity</label>
            <input
              type="date"
              className="w-full rounded-lg border border-black bg-slate-50 p-2"
            />
          </div>
          <div>
            <label>Type</label>
            <input
              value="Text"
              className="w-full rounded-lg border border-black bg-slate-50 p-2"
            />
          </div>

          <div>
            <label>Description</label>
            <textarea
              placeholder="Enter Description"
              rows={3}
              className="w-full rounded-lg border border-black bg-slate-50 p-2"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <div className="flex w-full flex-col items-end gap-1 px-10">
            <h5 className="text-lg font-semibold">Select users</h5>
            <div className="flex  h-[2.5rem] w-full items-center justify-between rounded-lg border border-black bg-slate-50 p-2" onClick={()=>setIsDropped(!isDropped)}>
              <p>Select All</p>
              <FaAngleDown />
            </div>
            {isDropped && <div className="flex w-full items-center justify-between rounded-lg border border-black bg-slate-50 p-2">
              <ScrollArea className="h-[10rem]  rounded-md w-full">
                <ul>
                  <li className="w-full rounded-md p-1 hover:bg-slate-500">
                    Select All
                  </li>
                  <li className="w-full rounded-md p-1 hover:bg-slate-500">
                    <p>Frontend Developer</p>
                    <span>Google</span>
                  </li>
                  <li className="w-full rounded-md p-1 hover:bg-slate-500">
                    <p>Frontend Developer</p>
                    <span>Google</span>
                  </li>
                  <li className="w-full rounded-md p-1 hover:bg-slate-500">
                    <p>Frontend Developer</p>
                    <span>Google</span>
                  </li>
                  <li className="w-full rounded-md p-1 hover:bg-slate-500">
                    <p>Frontend Developer</p>
                    <span>Google</span>
                  </li>
                </ul>
              </ScrollArea>
            </div>}
          </div>
          <div className="flex gap-2">
            <Button>Close</Button>
            <Button>Send</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
