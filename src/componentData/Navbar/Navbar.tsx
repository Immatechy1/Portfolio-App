import Link from "next/link";
import React from "react";


const Navbar = () => {
    return (
      <header className="p-10 bg-gray-800 ">
        <div className="flex items-center justify-between h-16 text-white font-bold">
          <Link href="work">
            <p className="p-10 text-24">Works</p>
          </Link>
          <Link href="/blog">
            <h1 className="">Blog</h1>
          </Link>
          <Link href="/contact">
            <h1 className="">Contact</h1>
          </Link>
        </div>
      </header>
    );
  };

export default Navbar;
  


  