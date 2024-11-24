import React from "react";
import { WetaherCard } from "./WetaherCard";
import { SliderCard } from "./SliderCard";

export const RightBar = () => {
  return (
    <div className="mt-28 w-[250px] space-y-3 ">
      <WetaherCard />
      <SliderCard />
    </div>
  );
};
