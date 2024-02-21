import React from "react";
import defaultImage from "../../../public/Images/profiles/deafultProfile.jpg";
import Image from "next/image";

export default function PlacementContainer() {
  return (
    <div className="w-[90%] py-10">
      <section className="flex  gap-16 ">
        <div className="w-[20%] drop-shadow-lg">
          <Image
            src={defaultImage}
            alt="profile image"
            className="size-[13rem] rounded-full border border-blue-400"
          />
        </div>
        <div>
          <div className="w-full border border-blue-400 bg-white p-4 text-lg mb-10 rounded-xl drop-shadow-lg">
            <h3 className="text-lg font-semibold">User Info</h3>
            <div className="flex flex-col gap-3">
              <p>
                Name: <span>Ashika M</span>
              </p>
              <p>
                Email: <span>ashikaM@gmail.com</span>
              </p>
              <p>
                Phone: <span>98765423</span>
              </p>
              <p>
                Gender: <span>Female</span>
              </p>
            </div>
          </div>
          <section className="border border-blue-400 bg-white rounded-xl p-6 text-lg drop-shadow-lg">
            <h3 className="text-lg font-semibold">Company Info</h3>
            <div>
              <p>
                Company Name: <span>AGoogle</span>
              </p>
              <p>
                Company Location: <span>Bengaluru</span>
              </p>
              <p>
                Twitter Link:{" "}
                <span className="text-blue-400">
                  https://google/twitter.com
                </span>
              </p>
              <p>
                Facebook Link:{" "}
                <span className="text-blue-400">
                  https://google/facebook.com
                </span>
              </p>
              <p>
                LinkdIn Link:{" "}
                <span className="text-blue-400">
                  https://google/LinkdIn.com
                </span>
              </p>
              <p>
                Company Link:{" "}
                <span className="text-blue-400">https://google.com</span>
              </p>
              <p>
                About Company:{" "}
                <span className="lowercase">
                  TIGER ANALYTICS INDIA CONSULTING PRIVATE LIMITED TIGER
                  ANALYTICS INDIA CONSULTING PRIVATE LIMITED
                </span>
              </p>
              <p>
                Address:{" "}
                <span>
                  Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO
                  65584-5678
                </span>
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
