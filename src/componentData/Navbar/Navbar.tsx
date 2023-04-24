import Link from "next/link";
import React from "react";


const Navbar = () => {
    return (
      <header className="p-5 bg-white  pr-20">
        <div className="flex items-center text-xl justify-end h-16 space-x-16  text-black font-medium">
          <Link href="work">
            <p className="hover:text-gray-300">Works</p>
          </Link>
          <Link href="/blog">
            <h1 className="hover:text-gray-300">Blog</h1>
          </Link>
          <Link href="/contact">
            <h1 className="hover:text-gray-300">Contact</h1>
          </Link>
        </div>
      </header>
    );
  };

export default Navbar;
  


  