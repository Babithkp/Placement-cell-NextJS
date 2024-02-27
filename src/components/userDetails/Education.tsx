"use client"
import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { Button } from "../ui/button";
import { edituserBatch, edituserCollege, edituserPassOutYear } from "@/lib/controller/userTask";

export default function Education({collegeName,passOutYear,batch,hBacklogs,cBacklogs,id}:any) {

  const [collegeAddress, setCollegeAddress] = useState(collegeName);
  const [isBatchEditable, setIsBatchEditable] = useState(false);
  const [newbatch, setNewBatch] = useState(batch);
  const [isCollegeEditable, setIsCollegeEditable] = useState(false);
  const [newPassOutYear, setNewPassOutYear] = useState(passOutYear);
  const [isPassOutYearEditable, setIsPassOutYearEditable] = useState(false);
  const [Error, setError] = useState<string>()



  async function editAddressClickHandler() {
    setIsCollegeEditable(false);
      try{
        const response = await edituserCollege(collegeAddress, id)
        if(!response){
          setError("Couldn't edit user College Name, try reloading again")
        }
      }catch(error){
        console.log(error);

      }
    }
  async function editBatchClickHandler() {
    setIsBatchEditable(false);
      try{
        const response = await edituserBatch(newbatch, id)
        if(!response){
          setError("Couldn't edit user Batch Info, try reloading again")
        }
      }catch(error){
        console.log(error);

      }
    }
  async function editPassOutYearClickHandler() {
    setIsPassOutYearEditable(false);
      try{
        const response = await edituserPassOutYear(newPassOutYear, id)
        if(!response){
          setError("Couldn't edit user Batch Info, try reloading again")
        }
      }catch(error){
        console.log(error);

      }
    }

  function editCollegeHandler(event: any) {
    setCollegeAddress(event.target.value);
  }
  function editBatchHandler(event: any) {
    setNewBatch(event.target.value);
  }
  function editPassOutYearHandler(event: any) {
    setNewPassOutYear(event.target.value);
  }
  return (
    <div className="mt-9 ">
      <p className="border-b-[2px]   border-b-slate-300 text-sm uppercase text-slate-400">
        lastest education
      </p>
      <ul className="flex flex-col gap-2">
        <li className="flex gap-8 w-full">
          <p>college:</p>
          <div className="font-semibold flex   w-full ">
          {isCollegeEditable && (
            <textarea value={collegeAddress} className="rounded-lg border p-1 mt-2"  onChange={editCollegeHandler}></textarea>
            )}
            {!isCollegeEditable && <p className="text-right">
            {collegeAddress ? collegeAddress : "College Name"}
            </p>}
            {!isCollegeEditable && (
              <div
                className="ml-4 flex items-center text-black"
                onClick={() => setIsCollegeEditable(true)}
              >
                <MdEdit />
              </div>
            )}
            {isCollegeEditable && (
              <div>
                <Button
                  onClick={editAddressClickHandler}
                  type="button"
                  className="ml-2 h-fit rounded-md p-2 mt-2"
                >
                  save
                </Button>
              </div>
            )}
          </div>
        </li>
        <li className="flex gap-8">
        <p className="w-[10rem]">Batch:</p>
        {isBatchEditable &&  (
          <input value={newbatch} type="month"  className="rounded-lg border p-1 "  onChange={editBatchHandler}/> 
            )}
            {!isBatchEditable && <p>
            {newbatch ? newbatch : "Batch"}
            </p>}

            {!isBatchEditable && (
              <div
                className=" flex items-center text-black"
                onClick={() => setIsBatchEditable(true)}
              >
                <MdEdit />
              </div>
            )}
          {isBatchEditable && (
              <div>
                <Button
                  onClick={editBatchClickHandler}
                  type="button"
                  className="ml-2 h-fit rounded-md p-2 mt-2"
                >
                  save
                </Button>
              </div>
            )}
        </li>
        <li className="flex gap-8">
          <p className="w-[10rem]">Pass out Year:</p>
          {isPassOutYearEditable &&  (
          <input value={newPassOutYear} type="month"  className="rounded-lg border p-1 "  onChange={editPassOutYearHandler}/> 
            )}
            {!isPassOutYearEditable && <p>
            {newPassOutYear}
            </p>}
            {!isPassOutYearEditable && (
              <div
                className=" items-center text-black"
                onClick={() => setIsPassOutYearEditable(true)}
              >
                <MdEdit />
              </div>
            )}
            {isPassOutYearEditable && (
              <div>
                <Button
                  onClick={editPassOutYearClickHandler}
                  type="button"
                  className="ml-2 h-fit rounded-md p-2 mt-2"
                >
                  save
                </Button>
              </div>
            )}
        </li>
        <li className="flex gap-8">
          <p className="w-[10rem]">Current Backlogs:</p>
          <span>{cBacklogs ? cBacklogs : 0}</span>
        </li>
        <li className="flex gap-8">
          <p className="w-[10rem]">History of Backlogs:</p>
          <span>{hBacklogs ? hBacklogs : 0}</span>
        </li>
        <li>
        {Error && <p className="text-red-500">{Error}</p>}
        </li>
      </ul>
    </div>
  );
}
