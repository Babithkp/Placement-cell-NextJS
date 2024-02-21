import React from 'react'

export default function About() {
  return (
    <div className="flex gap-[10rem]">
              <div className="flex w-[25rem] flex-col gap-3">
                <span className="text-sm uppercase text-slate-400">
                  contact information
                </span>
                <p className="flex gap-8">
                  Phone: <span>+91 9876543210</span>
                </p>
                <p className="flex gap-8">
                  Address:{" "}
                  <span>525 6th street Bangaluru, karnataka 578123</span>
                </p>
                <p className="flex gap-8">
                  Email:{" "}
                  <span className="text-blue-400">useremail@gmail.com</span>
                </p>
              </div>
              <div className="">
                <span className="text-sm uppercase text-slate-400">
                  Basic information
                </span>
                <p className="flex gap-8 ">
                  Birthday: <span>20-05-1998</span>
                </p>
                <p className="flex gap-8">
                  Gender: <span>FEMALE</span>
                </p>
              </div>
            </div>
  )
}
