import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bigLaptop:flex justify-between bigLaptop:px-20 px-6 bigLaptop:py-10  py-8 bg-white bigLaptop:pr-20">
      <div className="flex justify-between">
        <div className="text-3xl text-black font-bold">
          <Link href="/">
            <p className="hover:text-blue-300 ">Home</p>
          </Link>
        </div>

        <div className="">
          <GiHamburgerMenu
            className="bigLaptop:hidden cursor-pointer h-10 w-8 "
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      <div
        className={`${
          open ? "block" : "hidden"
        } bigLaptop:flex items-center bigLaptop:justify-end  text-xl bigLaptop:space-x-16 leading-10 text-black font-medium`}
      >
        <Link href="/works">
          <p className="hover:text-blue-300 ">Works</p>
        </Link>
        <Link href="/blog">
          <h1 className="hover:text-blue-300">Blog</h1>
        </Link>
        <Link href="#">
          <h1 className="hover:text-blue-300">Contact</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
