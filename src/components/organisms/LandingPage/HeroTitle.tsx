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
    <div className="flex">
      <div className=" mt-28 ml-40 mr-10">
        <h1 className="text-5xl font-bold leading-tight">
          Hi, I am John, Creative Technologist
        </h1>
        <div className="mt-10 font-normal test-lg leading-6">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </div>

        <div className=" mb-14 mt-7">
          <CustomButton
            customClass="bg-red-400 rounded-sm border-red-400 text-white"
            handleClick={() => {}}
            size={ButtonProperties.SIZES.small}
            title="Download Resume"
            variant={ButtonProperties.VARIANT.secondary.name}
          />
        </div>
      </div>

      <div className="relative mt-24 mr-60 ml-60">
        <Image
          className="absolute  ml-2 "
          height={600}
          src={HeroTitleData[0].url}
          width={600}
          alt={""}
        />
        <Image
          className="mt-3"
          height={600}
          src={HeroTitleData[1].url}
          width={600}
          alt={""}
        />
      </div>
    </div>
  );
};

export default HeroTitle;
