import React, { useState } from "react";
import { Button } from "../ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useGlobalContext } from "@/store/contextForm";
import { IsUserExists, addNewPlacementUser } from "@/lib/controller/userTask";
import { useRouter } from "next/navigation";

interface placedmentInfo {
  name: String;
  gender: String;
  phone: Number;
  companyName: String;
  twitterLink: String;
  fackbookLink: String;
  linkdenInLink: String;
  comapanyLink: String;
  aboutCompany: String;
  companyAddress: String;
}

export default function PlacementRegister() {
  const formCtx = useGlobalContext();
  const [Error, setError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<placedmentInfo>();

  const onSubmit: SubmitHandler<placedmentInfo> = async (data: any) => {
    if (data) {
      const signupinfo = formCtx?.SignUpInfo;
      if (signupinfo) {
        try {
          const isFounded = await IsUserExists(signupinfo.email);
          if (isFounded) {
            setError("User already exists");
            return;
          }
          const response = await addNewPlacementUser(data, signupinfo);
          if (response) {
            const filter = JSON.parse(response);
            const storage = {
              userId: filter.userData,
              type: filter.type,
            };
            const convert = JSON.stringify(storage);
            const value = sessionStorage.setItem("userInfo", convert);
            router.replace(`/placement-Cell-Profile/${storage.userId}`);
          }
        } catch (error) {
          setError("Interwork Error, Try Agian");
        }
      }
    }
  };

  return (
    <div className="rounded-3xl">
      <h3 className="bg-[#2560a9] p-1 text-center text-xl font-medium text-white">
        Create Placement-cell profile
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
            className="w-full rounded-full p-2"
            {...register("gender", { required: true })}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        {errors.gender && (
          <p className="text-sm text-red-500">
            Please select a valid gender Option
          </p>
        )}
        <div>
          <label>
            Phone <span className="text-lg text-red-500">*</span>
          </label>
          <input
            type="number"
            placeholder="9876543210"
            className="w-full rounded-full p-2"
            {...register("phone", { required: true, minLength: 5 })}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">
              Please enter a valid phone no.
            </p>
          )}
        </div>
        <div>
          <label>
            Comapny Name <span className="text-lg text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter company Name"
            className="w-full rounded-full p-2"
            {...register("companyName", { required: true, minLength: 5 })}
          />
          {errors.companyName && (
            <p className="text-sm text-red-500">
              Company Name must be Greater than 5 charactors
            </p>
          )}
        </div>
        <div>
          <label>Twitter Link </label>
          <input
            type="url"
            placeholder="Enter company twitter URL"
            className="w-full rounded-full p-2"
            {...register("twitterLink")}
          />
        </div>
        <div>
          <label>Fackbook Link </label>
          <input
            type="url"
            placeholder="Enter company Fackbook URL"
            className="w-full rounded-full p-2"
            {...register("fackbookLink")}
          />
        </div>
        <div>
          <label>Company Link </label>
          <input
            type="url"
            placeholder="Enter company  URL"
            className="w-full rounded-full p-2"
            {...register("comapanyLink")}
          />
        </div>
        <div>
          <label>LinkedIn Link </label>
          <input
            type="url"
            placeholder="Enter company LinkedIn URL"
            className="w-full rounded-full p-2"
            {...register("linkdenInLink")}
          />
        </div>

        <div>
          <label>
            About Company <span className="text-lg text-red-500">*</span>
          </label>
          <textarea
            rows={3}
            placeholder="About Company"
            className="w-full rounded-3xl p-2"
            {...register("aboutCompany", { required: true, minLength: 10 })}
          />
          {errors.aboutCompany && (
            <p className="text-sm text-red-500">
              About Company must be greater than 10 charactors
            </p>
          )}
        </div>
        <div>
          <label>
            Company Address <span className="text-lg text-red-500">*</span>
          </label>
          <textarea
            rows={3}
            placeholder="Company Address"
            className="w-full rounded-3xl p-2"
            {...register("companyAddress", { required: true, minLength: 10 })}
          />
          {errors.companyAddress && (
            <p className="text-sm text-red-500">
              Company Address must be greater than 10 charactors
            </p>
          )}
        </div>

        <div className="col-span-2  text-right">
          <Button className="rounded-full  bg-[#00448E]">
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
          {Error && <p className="text-sm text-red-500">{Error}</p>}
        </div>
      </form>
    </div>
  );
}
