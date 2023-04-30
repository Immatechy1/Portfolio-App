import Image from "next/image";
import React from "react";
import CustomButton from "../../CustomButton/CustomButton";
import { ButtonProperties } from "@/src/shared/libs/helpers";

const HeroTitleData = [
  {
    id: 0,
    url: "/images/png/profile.png",
  },

  {
    id: 1,
    url: "/images/png/circle.png",
  },
];

const HeroTitle = () => {
  return (
    <div className="grid bigLaptop:flex">
      <div className="mt-6 bigLaptop:mt-28 ml-6 bigLaptop:ml-40 mr-6 bigLaptop: mr-10">
        <h1 className="text-3xl bigLaptop:text-5xl text-center bigLaptop:text-left font-bold leading-tight">
          Hi, I am John, Creative Technologist
        </h1>
        <div className="mt-10 text-center bigLaptop:text-left font-normal test-base bigLaptop:test-lg leading-6">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </div>

        <div className="ml-20 bigLaptop:ml-0 mb-14 mt-7">
          <CustomButton
            customClass="bg-Red-400 rounded-sm border-Red-400 text-white"
            handleClick={() => {}}
            size={ButtonProperties.SIZES.small}
            title="Download Resume"
            variant={ButtonProperties.VARIANT.secondary.name}
          />
        </div>
      </div>

      <div className="order-first bigLaptop:order-none relative mt-4 bigLaptop:mt-24 ml-20 bigLaptop:mr-40 bigLaptop:ml-40 bigLaptop:w-[400px] ">
        <Image
          className="absolute ml-1 bigLaptop: ml-2 "
          height={200}
          src={HeroTitleData[0].url}
          width={200}
          alt={""}
        />
        <Image
          className="mt-2 bigLaptop:mt-3"
          height={200}
          src={HeroTitleData[1].url}
          width={200}
          alt={""}
        />
      </div>
    </div>
  );
};

export default HeroTitle;
