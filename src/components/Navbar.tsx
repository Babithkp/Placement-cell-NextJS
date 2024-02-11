import { FaAngleDown } from "react-icons/fa6";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex w-[100%] justify-between  border-b-2 p-2 items-center">
      <Link href="/" className="ml-8 font-bold">LOGO</Link>

      <ul className="flex w-[50%] justify-around font-medium items-center">
        <li>
          <Link href="/adminDashboard">Admin Dashboard</Link>
        </li>
        <li>
          <Link href="/jobListings">Job Listings</Link>
        </li>
        <li className=" flex ">
          <span>More</span>
          <span>
            <FaAngleDown size={20} style={{ marginTop: "4px" }} />
          </span>
        </li>
        <li>
          <span>
            <Button variant="outline">Sign Up</Button>
          </span>
          <span className="ml-4">
            <Button>Login</Button>
          </span>
        </li>
      </ul>
    </nav>
  );
}
