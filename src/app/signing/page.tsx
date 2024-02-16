
import React from "react";

import Sigining from "@/components/login/SiginForm";
import RegisterForm from "@/components/login/RegisterForm";

export default function page() {

  return (
    <div className="flex items-center justify-center rounded-3xl">
      <div className="w-[80%] py-5 rounded-3xl">
        <Sigining/>
        <div className=" bg-red-400">
          <RegisterForm/>
        </div>
      </div>
    </div>
  );
}
