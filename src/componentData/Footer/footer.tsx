import Icon from "@/src/components/atoms/Icons";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-10 bigLaptop-20  bg-white">
      <div className="flex justify-center space-x-8">
        <div className="">
          <Link href="#">
            <Icon name="facebook" />
          </Link>
        </div>
        <div className="">
          <Link href="#">
            <Icon name="insta" />
          </Link>
        </div>
        <div className="">
          <Link href="#">
            <Icon name="twitter" />
          </Link>
        </div>
        <div className="">
          <Link href="#">
            <Icon name="Linkedin" />
          </Link>
        </div>
      </div>
      <div className="text-center mt-7 text-sm">
        <h1>Copyright ©2020 All rights reserved </h1>
      </div>
    </footer>
  );
};

export default Footer;
