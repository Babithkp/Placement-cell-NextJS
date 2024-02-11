import React from 'react'
import { FaFilter } from "react-icons/fa";

export default function Filters() {
  
  return (
    <section className="w-[25%] h-full  rounded-md bg-stone-200 p-4 flex flex-col gap-4 ">
          <div className="flex w-full justify-between ">
            <h4 className="text-lg">Filter by</h4>
            <span>
              <FaFilter />
            </span>
          </div>
          <div>
            <h5 className="text-lg">Location(s)</h5>
            <ul >
              <li>
                <input type="checkbox" /> <label >Benagluru</label>
              </li>
              <li>
                <input type="checkbox" /> <label>Chennai</label>
              </li>
              <li>
                <input type="checkbox" /> <label>Hyderabad</label>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg">Status(s)</h5>
            <ul>
              <li>
                <input type="checkbox" /> <label>Live</label>
              </li>
              <li>
                <input type="checkbox" /> <label>Closed</label>
              </li>
              <li>
                <input type="checkbox" /> <label>closes soon</label>
              </li>
              <li>
                <input type="checkbox" /> <label>recent</label>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg">Category(s)</h5>
            <ul>
              <li>
                <input type="checkbox" /> <label>Accounts</label>
              </li>
              <li>
                <input type="checkbox" /> <label>Software Engineer</label>
              </li>
              <li>
                <input type="checkbox" /> <label>Web Development</label>
              </li>
              <li>
                <input type="checkbox" /> <label>Ui/UX Development</label>
              </li>
              <li>
                <input type="checkbox" /> <label>Others</label>
              </li>
            </ul>
          </div>
        </section>
  )
}
