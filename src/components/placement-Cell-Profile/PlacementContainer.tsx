"use client"
import React, { useEffect, useRef, useState } from "react";
import defaultImage from "../../../public/Images/profiles/deafultProfile.jpg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getPlacementUserDetails, setPlacementUserProfilePic } from "@/lib/controller/placementAdmin";
import { VscLoading } from "react-icons/vsc";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "@/lib/firebase";
import { setUserProfilePIc } from "@/lib/controller/userTask";

interface placementAdminProps{
  _id:string
  user:{
    email:string
  }
  name: String;
  gender: String;
  phone: string;
  companyName: String;
  companyIcon: String;
  twitterLink: String; 
  fackbookLink: String;
  linkdenInLink: String;
  comapanyLink: String;
  aboutCompany: String;
  companyAddress: String;
  profileUrl:string | undefined
}

export default function PlacementContainer() {
  const profilePicRef = useRef<any>(null);
  const [userDetails,setUserDetails] = useState<placementAdminProps>()
  const [Error,setError]= useState<string|null>()
  const [isUploading,setIsUploading] = useState(false)

  const pathUrl = usePathname()
  const path = pathUrl.split("/")[2]




  function profileEditHandler() {
    if (profilePicRef) {
      profilePicRef?.current.click();
    }
  }
  async function profilePicHandler(event: any) {
    event.preventDefault();
    const maxSize = 10 * 1024 * 1024;
    const file = event.target.files?.[0];

    if (file && file.size > maxSize) {
      setError(
        "File size exceeds the limit (10 MB). Please choose a smaller file.",
      );
      return;
    } else if (file) {
      setIsUploading(true);
      setError(null);
      const storageRef = ref(
        storage,
        `PlacementUserProfileImages/${file.name + userDetails?.name + v4()}`,
      );
      const response = await uploadBytes(storageRef, file);
      const snapshot = response.ref;
      const getProfileURL = await getDownloadURL(snapshot);
      if (getProfileURL && userDetails) {
        setIsUploading(false);
        userDetails.profileUrl = getProfileURL;
        const response = await setPlacementUserProfilePic(getProfileURL, userDetails._id);
        if (response) {
        } else {
          setIsUploading(false);
          setError("Falied to upload,try again");
        }
      }
    }
  }

  useEffect(()=>{
    async function fetch(){
      try{
        const response = await getPlacementUserDetails(path)
        if(response){
          const filtered = JSON.parse(response)
          setUserDetails(filtered)
        }
      }catch(error){
        console.log(error);
        
      }
    }
    fetch()
  },[path])


  return (
    <div className="w-[90%] py-10">
      <section className="flex  gap-16 ">
      <div className="relative h-[15rem] w-[20%]">
          {Error && <p className="text-sm text-red-500 ">{Error}</p>}
          <Image
            src={ userDetails?.profileUrl ? userDetails?.profileUrl :defaultImage}
            alt="profile Image "
            className="h-full w-full rounded-lg object-cover drop-shadow-lg"
            width={300}
            height={300}
          />
          {isUploading && (
            <div className="absolute left-[40%] top-[40%]">
              <VscLoading className="animate-spin-z text-blue-400" size={50} />
            </div>
          )}
          <div className="flex flex-col items-center">
            <input
              type="file"
              className="hidden"
              ref={profilePicRef}
              onChange={profilePicHandler}
              accept="image/png, image/gif, image/jpeg"
            />
            <p
              onClick={profileEditHandler}
              className="cursor-pointer text-white hover:text-blue-500 bg-blue-400 m-2 p-2 rounded-xl"
            >
              Change Photo
            </p>
          </div>
        </div>
        <div>
          <div className="w-full border border-blue-400 bg-white p-4 text-lg mb-10 rounded-xl drop-shadow-lg">
            <h3 className="text-lg font-semibold uppercase text-slate-400">User Info</h3>
            <div className="flex flex-col gap-3">
              <p className="font-semibold">
                Name: <span className="font-medium">{userDetails?.name}</span>
              </p>
              <p className="font-semibold">
                Email: <span className="font-medium">{userDetails?.user.email}</span>
              </p>
              <p className="font-semibold">
                Phone: <span className="font-medium">{userDetails?.phone}</span>
              </p>
              <p className="font-semibold">
                Gender: <span className="uppercase font-medium">{userDetails?.gender}</span>
              </p>
            </div>
          </div>
          <section className="border border-blue-400 bg-white rounded-xl p-6 text-lg drop-shadow-lg ">
            <h3 className="text-xl font-semibold uppercase text-slate-400">Company Info</h3>
            <div className="w-[130vh]">
              <p className="font-semibold">
                Company Name: <span>{userDetails?.companyName}</span>
              </p>
              <div className="flex gap-2">
                <p className="font-semibold">

                Twitter Link:
                </p>
                <span className="text-blue-400">
                {userDetails?.twitterLink}
                </span>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">

                Facebook Link:
                </p>
                <span className="text-blue-400">
                {userDetails?.fackbookLink}
                </span>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">

                LinkdIn Link:
                </p>
                <span className="text-blue-400">
                {userDetails?.linkdenInLink}
                </span>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">

                Company Link:
                </p>
                <span className="text-blue-400">{userDetails?.comapanyLink}</span>
              </div>
              <div className="flex ">
                <p className=" w-[20%] font-semibold">
                About Company:
                </p>
                <p className=" ">
                {userDetails?.aboutCompany}
                </p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">

                Address:
                </p>
                <span>
                {userDetails?.companyAddress}
                </span>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
