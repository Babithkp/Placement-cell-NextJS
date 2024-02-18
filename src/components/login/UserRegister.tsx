"use client";
import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import { IoCloudUpload } from "react-icons/io5";
import { SubmitHandler, useForm } from "react-hook-form";
import { useGlobalContext } from "@/store/contextForm";
import { IsUserExists, addNewUser } from "@/lib/controller/userTask";
import { storage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

interface userDetails {
  name: string;
  gender: string;
  phone: Number;
  email: string;
  sslcMarks: Number;
  twelvesMarks: Number;
  BEMarks: Number;
  backlogs: Number;
  collegeName: string;
  historyBacklogs: Number;
  passOutYear: Date;
  batch: String;
  address: string;
  resumeURL: string;
}

export default function UserRegister() {
  const formCtx = useGlobalContext();
  const [selectedPdf, setSelectedPdf] = useState<File | null>(null);
  const [Error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<userDetails>();

  const clickRef = useRef<any>(null);
  const resumeClickHandler = () => {
    clickRef?.current.click();
  };

  const handleFileChange = (e: any) => {
    const maxSize = 5 * 1024 * 1024;
    const file = e.target.files?.[0];
    if (file.size > maxSize) {
      setError(
        "File size exceeds the limit (5 MB). Please choose a smaller file.",
      );
    } else {
      setSelectedPdf(file);
      setError(null);
    }
  };

  const onSubmit: SubmitHandler<any> = async (data) => {
    const signupDetails: any = formCtx?.SignUpInfo;
    try {
      if (selectedPdf) {
        const isFound = await IsUserExists(signupDetails.email);
        if (isFound) {
          setError("User already Exists!");
          return;
        } else {
          setError(null);
          console.log("new user");

          const storageRef = ref(
            storage,
            `userResume/${data.name + selectedPdf.name + v4()}`,
          );

          const response = await uploadBytes(storageRef, selectedPdf);
          const snapshot = response.ref;
          const getResumeURL = await getDownloadURL(snapshot);
          data.resumeURL = getResumeURL;

          const res = await addNewUser(data, signupDetails);
          if (res) {
            setError("User creared!");
          }
        }
      } else {
        setError("No PDF selected");
      }
    } catch (error) {
      setError("Network error: " + error);
    }
  };

  return (
    <div>
      <h3 className="bg-[#2560a9] p-1 text-center text-xl font-medium text-white">
        Create User profile
      </h3>
      <form
        className="grid grid-cols-2 gap-4 p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label>
            Name <span className="text-lg text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-full p-2"
            {...register("name", { required: true, minLength: 5 })}
          />
          {errors.name && (
            <p className="text-sm text-red-500">Please enter a valid Name</p>
          )}
        </div>
        <div>
          <label>
            Gender <span className="text-lg text-red-500">*</span>
          </label>
          <select
            className="w-full rounded-full p-2 "
            {...register("gender", { required: true })}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.name && (
            <p className="text-sm text-red-500">Please select a valid Gender</p>
          )}
        </div>
        <div>
          <label>
            Phone <span className="text-lg text-red-500">*</span>
          </label>
          <input
            type="number"
            placeholder="9876543210"
            className="w-full rounded-full p-2"
            {...register("phone", {
              required: true,
              minLength: 10,
            })}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">
              Please Enter a valid Phone no.
            </p>
          )}
        </div>
        <div>
          <label>
            SSLC/10th Aggregate <span className="text-lg text-red-500">*</span>
          </label>
          <input
            type="number"
            placeholder="--%"
            className="w-full rounded-full p-2"
            {...register("sslcMarks", { required: true, minLength: 1 })}
          />
          {errors.sslcMarks && (
            <p className="text-sm text-red-500">Please Enter a valid Marks</p>
          )}
        </div>
        <div>
          <label>
            12th/Diploma Aggregate{" "}
            <span className="text-lg text-red-500">*</span>
          </label>
          <input
            type="number"
            placeholder="--%"
            className="w-full rounded-full p-2"
            {...register("twelvesMarks", { required: true, minLength: 1 })}
          />
          {errors.twelvesMarks && (
            <p className="text-sm text-red-500">Please Enter a valid Marks</p>
          )}
        </div>
        <div>
          <label>
            BE/BTech Aggregate <span className="text-lg text-red-500">*</span>
          </label>
          <input
            type="number"
            placeholder="--%"
            className="w-full rounded-full p-2"
            {...register("BEMarks", { required: true, minLength: 1 })}
          />
          {errors.BEMarks && (
            <p className="text-sm text-red-500">Please Enter a valid Marks</p>
          )}
        </div>
        <div>
          <label>
            Current Backlogs <span className="text-lg text-red-500">*</span>
          </label>
          <input
            type="number"
            placeholder="0"
            className="w-full rounded-full p-2"
            {...register("backlogs", { required: true, minLength: 1 })}
          />
          {errors.backlogs && (
            <p className="text-sm text-red-500">
              Please select a valid Backlogs
            </p>
          )}
        </div>
        <div>
          <label>
            History of Backlogs <span className="text-lg text-red-500">*</span>
          </label>
          <input
            type="number"
            placeholder="0"
            className="w-full rounded-full p-2"
            {...register("historyBacklogs", { required: true, minLength: 1 })}
          />
          {errors.historyBacklogs && (
            <p className="text-sm text-red-500">
              Please Enter a valid Backlogs
            </p>
          )}
        </div>
        <div>
          <label>
            College Name<span className="text-lg text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="College name"
            className="w-full rounded-full p-2"
            {...register("collegeName", { required: true, minLength: 5 })}
          />
          {errors.collegeName && (
            <p className="text-sm text-red-500">
              Please Enter a valid College Name
            </p>
          )}
        </div>
        <div>
          <label>
            Pass out year <span className="text-lg text-red-500">*</span>
          </label>
          <input
            type="month"
            placeholder="--/--/---"
            className="w-full rounded-full p-2"
            {...register("passOutYear", { required: true })}
          />
          {errors.passOutYear && (
            <p className="text-sm text-red-500">Please Enter a valid Year</p>
          )}
        </div>
        <div>
          <label>
            Batch <span className="text-lg text-red-500">*</span>
          </label>
          <input
            type="month"
            placeholder="2000-2001"
            className="w-full rounded-full p-2"
            {...register("batch", { required: true })}
          />
          {errors.batch && (
            <p className="text-sm text-red-500">
              Please Enter a valid Batch year
            </p>
          )}
        </div>
        <div>
          <label>
            Address <span className="text-lg text-red-500">*</span>
          </label>
          <textarea
            rows={3}
            placeholder="Address"
            className="w-full rounded-3xl p-2"
            {...register("address", { required: true, minLength: 10 })}
          />
          {errors.address && (
            <p className="text-sm text-red-500">Please Enter a valid Address</p>
          )}
        </div>
        <div>
          <label>
            Upload Resume <span className="text-lg text-red-500">*</span>
          </label>
          <input
            type="file"
            placeholder="Upload Resume"
            className="hidden"
            accept=".pdf"
            ref={clickRef}
            onChange={handleFileChange}
          />
          <div
            onClick={() => resumeClickHandler()}
            className="flex h-[100%] w-full cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-dotted border-slate-400 bg-white hover:bg-slate-50"
          >
            <IoCloudUpload size={30} />
            {!selectedPdf && <p>Click to browse and upload</p>}
            {selectedPdf && <p>Pdf Has been selected </p>}
          </div>
          {<p className="text-sm text-red-600">{Error}</p>}
        </div>
        <div className="col-span-2  text-right">
          <Button className="rounded-full  bg-[#00448E]">
            {isSubmitting ? "Uploading..." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
}
