import React from "react";
import { FaTwitter } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <div className="my-8 grid grid-cols-[2rem,1fr,2rem]">
        <div className="col-start-2 flex justify-between border-b-2 p-4">
          <Link href="/" className="text-2xl font-medium">
            LOGO
          </Link>
          <ul className="flex gap-8">
            <li>
              <Link href="/contactUs">Contact US</Link>
            </li>
            <li>FAQ&apos;s</li>
            <li>Support</li>
          </ul>
          <div>
            <p>Follow us for Latest update</p>
            <div>
              <ul className="flex justify-center gap-2">
                <li>
                  <a href="#">
                    <FaTwitter size={25} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillFacebook size={25} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin size={25} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
        <div className="col-start-2 mt-4 flex justify-around">
          <div>&copy; 2024 Eastpoint Placement Cell. All rights reserved.</div>
          <ul className="flex gap-8">
            <li>Privacy Policy</li>
            <li>Term and Conditions</li>
            <li>Cookies Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
