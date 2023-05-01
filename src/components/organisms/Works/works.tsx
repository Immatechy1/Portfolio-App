import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const FeaturedWorksData = [
  {
    id: 0,
    url: "/images/png/dashboard.png",
  },

  {
    id: 1,
    url: "/images/png/illustration.png",
  },
  {
    id: 2,
    url: "/images/png/typography.png",
  },
  {
    id: 3,
    url: "/images/png/component.png",
  },
];

const Works = () => {

  return (
    <div className="bigLaptop:pl-40 pl-8 pr-8 bigLaptop:pr-40 pt-6 pb-10">
      <div className="font-normal">
        <p className="text-3xl bigLaptop: text-5xl font-black">Works</p>
      </div>

      <div className="grid bigLaptop:flex mb-6">
        <div className="bigLaptop:w-[450px] mx-auto flex items-center bigLaptop:justify-start">
          <Image
            className="pt-6 flex "
            height={100}
            src={FeaturedWorksData[0].url}
            width={340}
            alt={""}
          />
        </div>

        <div className="bigLaptop:ml-8 pt-4  ">
          <Link href="/work-details">
            <h1 className="hover:text-blue-300 text-2xl font-bold ">
              Designing Dashboards
            </h1>
          </Link>
          <div className="flex items-center font-normal text-base bigLaptop:text-xl mt-4 bigLaptop: mt-6">
            <button className="bg-Blue-b700 text-white rounded-full w-16 bigLaptop:w-20 mr-4 ">
              2020
            </button>
            <p className="text-Gray-400">Dashboard</p>
          </div>

          <h1 className="font-normal text-base mt-6 bigLaptop:pr-80">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </h1>
        </div>
      </div>
      <hr />

      <div className="grid bigLaptop:flex mb-6">
        <div className="bigLaptop:w-[450px] mx-auto flex items-center bigLaptop:justify-start">
          <Image
            className="pt-6"
            height={100}
            src={FeaturedWorksData[1].url}
            width={340}
            alt={""}
          />
        </div>

        <div className="bigLaptop:ml-8 pt-4">
          <h1 className="font-bold text-2xl">Vibrant Portraits of 2020</h1>
          <div className="flex items-center font-normal text-base bigLaptop:text-xl mt-4 bigLaptop: mt-6">
            <button className="bg-Blue-b700 text-white rounded-full w-16 bigLaptop:w-20 mr-4 ">
              2020
            </button>
            <p className="text-Gray-400">Illustration</p>
          </div>

          <h1 className="font-normal text-base mt-6 bigLaptop:pr-80">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </h1>
        </div>
      </div>
      <hr />

      <div className="grid bigLaptop:flex mb-6">
        <div className="bigLaptop:w-[450px] mx-auto flex items-center bigLaptop:justify-start">
          <Image
            className="pt-6"
            height={100}
            src={FeaturedWorksData[2].url}
            width={340}
            alt={""}
          />
        </div>

        <div className="bigLaptop:ml-8 pt-4">
          <h1 className="font-bold text-2xl">36 Days of Malayalam type</h1>
          <div className="flex items-center font-normal text-base bigLaptop:text-xl mt-4 bigLaptop: mt-6">
            <button className="bg-Blue-b700 text-white rounded-full w-16 bigLaptop:w-20 mr-4 ">
              2020
            </button>
            <p className="text-Gray-400">Typography</p>
          </div>

          <h1 className="font-normal text-base mt-6 bigLaptop:pr-80">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </h1>
        </div>
      </div>
      <hr />

      <div className="grid bigLaptop:flex mb-6">
        <div className="bigLaptop:w-[450px] mx-auto flex items-center bigLaptop:justify-start">
          <Image
            className="pt-6"
            height={100}
            src={FeaturedWorksData[3].url}
            width={340}
            alt={""}
          />
        </div>

        <div className="bigLaptop:ml-8 pt-4">
          <h1 className="font-bold text-2xl">Components</h1>
          <div className="flex items-center font-normal text-base bigLaptop:text-xl mt-4 bigLaptop: mt-6">
            <button className="bg-Blue-b700 text-white rounded-full w-16 bigLaptop:w-20 mr-4 ">
              2020
            </button>
            <p className="text text-Gray-400">Components, Design</p>
          </div>

          <h1 className="font-normal text-base mt-6 bigLaptop:pr-80">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </h1>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Works;
