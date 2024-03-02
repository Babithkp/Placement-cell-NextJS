"use client"
import { checkIsSavedJobToUser } from '@/lib/controller/JobInfo';
import { addToSavedList, removeFromSavedList } from '@/lib/controller/userTask';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa'

export default function SavedOption({jobId}:any) {
    const [isSaved, setIssaved] = useState(false);
  const router = useRouter();

    async function addToSavedJobList(jobId: string) {
        if (typeof sessionStorage !== "undefined") {
          const value = sessionStorage.getItem("userInfo");
          if (value) {
            const filter = JSON.parse(value);
            const userId = filter.userId;
            try {
              const response = await addToSavedList(userId, jobId);
              if (response) {
                setIssaved(true);
              }
            } catch (error) {
              console.log(error);
            }
          } else {
            router.replace("/signing?sign=true");
          }
        }
      }
    
      async function removeSaved(jobId: string) {
        if (typeof sessionStorage !== "undefined") {
          const value = sessionStorage.getItem("userInfo");
          if (value) {
            const filter = JSON.parse(value);
            const userId = filter.userId;
            try {
              const response = await removeFromSavedList(userId, jobId);
              if (response) {
                setIssaved(false);
              }
            } catch (error) {
              console.log(error);
            }
          }
        }
      }

    useEffect(()=>{
        async function checkSaved() {
            if (typeof sessionStorage !== "undefined") {
              const value = sessionStorage.getItem("userInfo");
              if (value) {
                const filter = JSON.parse(value);
                const userId = filter.userId;
                try {
                  const response = await checkIsSavedJobToUser(jobId,userId);
                  console.log(response);
                  
                  if (response) {
                    setIssaved(true);
                  }
                } catch (error) {
                  console.log(error);
                }
              }
            }
          }
          checkSaved()
    },[jobId])

  return (
    <div>
         <p className="flex items-center gap-1 ">
                {!isSaved && (
                  <p
                    className="flex cursor-pointer items-center justify-center gap-1"
                    onClick={() => addToSavedJobList(jobId)}
                  >
                    <FaRegBookmark />
                    <span>Save</span>
                  </p>
                )}
                {isSaved && (
                  <p className="flex cursor-pointer items-center justify-center gap-1" onClick={() => removeSaved(jobId)}>
                    <FaBookmark />
                    <span>Saved</span>
                  </p>
                )}
              </p>
    </div>
  )
}
