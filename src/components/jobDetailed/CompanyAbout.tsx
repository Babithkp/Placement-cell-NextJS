import React from 'react'
export default function CompanyAbout({job}:any | []) {
  return (
    <section className="  flex flex-col gap-4 rounded-md bg-[#FFFFFF] border-[#719CEC] border p-4 ">
            <h3 className="font-bold text-lg">About Company</h3>
            <p>
              {job.aboutCompany}
            </p>
          </section>
  )
}
