import React from "react";
import Image from "next/image";


const WorkDetailsData = [
  {
    id: 0,
    url: "/images/png/experience.png",
  },
  {
    id: 1,
    url: "/images/png/headings.png",
  },
  {
    id: 2,
    url: "/images/png/orders.png",
  },
];


const WorkDetails = () => {
  return (
    <div className="pl-5 bigLaptop:pl-80 pr-5 bigLaptop:pr-40 pb-4 bigLaptop:pb-8 pt-4 bigLaptop:pt-6">
      <div className="">
        <h1 className="text-3xl font-bold flex text-center justify-start">
          Designing Dashboards with usability in mind
        </h1>
      </div>
      <div className="flex justify-start rounded-sm   mt-8 bigLaptop: mt-6">
        <button className="bg-Red-400 text-white text-xl  rounded-full w-24 h-8 bigLaptop:w-20 mr-4 ">
          2020
        </button>
        <p className="text-xl font-normal">Dashboard, User Experience Design</p>
      </div>

      <h1 className="font-normal text-base mt-8 bigLaptop:pr-80">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </h1>

      <div className="bigLaptop:w-[100em]">
        <Image
          className="pt-8 "
          height={10}
          src={WorkDetailsData[0].url}
          width={700}
          alt={""}
        />
      </div>

      <div className="mt-12">
        <h1 className="text-3xl font-medium ">Heading 1</h1>
        <p className="text-2xl font-normal mt-6">Heading 2</p>
        <h1 className="font-normal text-base mt-6 bigLaptop:pr-80">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </h1>
      </div>

      <div className="bigLaptop:w-[100em]">
        <Image
          className="pt-8 "
          height={10}
          src={WorkDetailsData[1].url}
          width={700}
          alt={""}
        />
      </div>

      <div className="bigLaptop:w-[100em]">
        <Image
          className="pt-8 "
          height={10}
          src={WorkDetailsData[2].url}
          width={700}
          alt={""}
        />
      </div>
    </div>
  );
};

export default WorkDetails;