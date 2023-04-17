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
    <div className="grid bigLaptop:flex px-10 bigLaptop:mt-20 bigLaptop:px-40 bigLaptop:space-x-96">
      <div className="mt-6 ">
        <h1 className="text-3xl bigLaptop:text-5xl tablet:4xl text-center bigLaptop:text-left font-bold">
          Hi, I am John, Creative Technologist
        </h1>
        <div className="mt-10 text-center bigLaptop:text-left font-normal test-base bigLaptop:test-lg leading-6">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </div>

        <div className="flex justify-center bigLaptop:justify-start bigLaptop:mb-14 mb-8 mt-7">
          <CustomButton
            customClass="bg-Red-400 rounded-sm border-Red-400 text-white"
            handleClick={() => {}}
            size={ButtonProperties.SIZES.small}
            title="Download Resume"
            variant={ButtonProperties.VARIANT.secondary.name}
          />
        </div>
      </div>

      <div className="relative order-first flex bigLaptop:grid justify-center bigLaptop:justify-end mt-6 bigLaptop:order-none bigLaptop:w-[580px]">
        <Image
          className="absolute ml-1 bigLaptop:ml-2"
          height={250}
          src={HeroTitleData[0].url}
          width={250}
          alt={""}
        />
        <Image
          className="mt-2 bigLaptop:mt-3"
          height={250}
          src={HeroTitleData[1].url}
          width={250}
          alt={""}
        />
      </div>
    </div>
  );
};

export default HeroTitle;
