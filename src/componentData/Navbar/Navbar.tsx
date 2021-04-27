import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [open, setOpen] = useState(false)
    return (
      <header className="p-5 bg-white mb-10 bigLaptop:mb-0 bigLaptop:pr-20">
        <div className="flex justify-end">
          <GiHamburgerMenu
            className="bigLaptop:hidden cursor-pointer h-10 w-8 "
            onClick={() => setOpen(!open)}
          />
        </div>

        <div
          className={`${
            open ? "block" : "hidden"
          } bigLaptop:flex items-center mb-10 text-xl justify-end h-16 leading-10 bigLaptop:space-x-16  text-black font-medium`}
        >
          <Link href="/">
            <p className="hover:text-blue-300 ">Home</p>
          </Link>
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
  


  