import FeaturedWorks from "@/src/components/organisms/LandingPage/FeaturedWorks";
import HeroTitle from "@/src/components/organisms/LandingPage/HeroTitle";
import RecentPost from "@/src/components/organisms/LandingPage/RecentPost";
import React, { FC } from "react";

export const HomePage: FC = () => (
  <>
    <HeroTitle />
    <RecentPost />
    <FeaturedWorks />
  </>
);
