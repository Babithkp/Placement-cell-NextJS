import React from 'react'
export default function CompanyAbout({job}:any | []) {
  return (
    <section className="  flex flex-col gap-4 rounded-md bg-stone-200 p-4 ">
            <h3 className="font-bold">About Company</h3>
            <p>
              {job.aboutCompany}
            </p>
          </section>
  )
}
