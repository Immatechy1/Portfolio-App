import React from "react";

const RecentPost = () => {
  return (
    <div className="bg-SkyBlue-300  bigLaptop:px-40  pt-2 bigLaptop:pt-4 pb-4 bigLaptop:pb-10">
      <div className="flex justify-center bigLaptop:justify-between font-normal">
        <p className="text-xl">Recent posts</p>
        <p className="hidden smallLaptop:grid text-base text-Blue-200">
          View all
        </p>
      </div>
      <div className="grid bigLaptop:flex pt-2 bigLaptop:mt-4 p-4  bigLaptop:p-0">
        <div className="bg-white p-3 bigLaptop:p-6 bigLaptop:mr-8 mb-4 bigLaptop:-mb-0 ">
          <h1 className="font-bold text-xl bigLaptop:text-2xl">
            Making a design system from scratch
          </h1>
          <div className="flex space-x-4 divide-black divide-x-2 justify-center bigLaptop:justify-start text-lg font-normal mt-4 bigLaptop:mt-6">
            <p className="">12 Feb 2020</p>
            <p className="pl-4">Design, Pattern</p>
          </div>

          <h1 className="font-normal text-base mt-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </h1>
        </div>

        <div className="bg-white p-3 bigLaptop:p-6 bigLaptop:ml-8">
          <h1 className="font-bold text-xl bigLaptop:text-2xl">
            Making a design system from scratch
          </h1>
          <div className="flex space-x-4 divide-black divide-x-2 justify-center bigLaptop:justify-start text-lg font-normal mt-4 bigLaptop:mt-6">
            <p className="">12 Feb 2020</p>
            <p className="pl-4">Design, Pattern</p>
          </div>

          <h1 className="font-normal text-base mt-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </h1>
        </div>
      </div>
    </div>
  );

}

export default RecentPost;