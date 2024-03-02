"use client";
import React, { useState } from "react";
import { Button } from "../../ui/button";
import { selectedStudentForJob } from "@/lib/controller/placementAdmin";

export default function SelectStudent({ jobId, userId,reFetch }: any) {
  const [Error, setError] = useState<string | null>();
  const [isUploading, setIsUploading] = useState(false);

  async function selectStudent() {
    try {
      setIsUploading(true);
      const response = await selectedStudentForJob(userId, jobId);
      if(response){
        reFetch()
      } 
      if (!response) {
        setIsUploading(true);
        setError("Falied select Student, Try again");
      }
      setIsUploading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Button
        type="button"
        className="w-full"
        variant="outline"
        onClick={selectStudent}
      >
        {isUploading ? "Selecting..." : "Select"}
      </Button>
      {Error && <p className="text-sm text-red-500">{Error}</p>}
    </>
  );
}