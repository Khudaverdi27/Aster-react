import React from "react";
import { GoGift } from "react-icons/go";
import { Button } from "./Button";

export const Subscription = () => {
  return (
    <div className="bg-skyBlue rounded-md text-white px-2 py-5  mr-3 ">
      <div className="flex items-center justify-between mb-4">
        <GoGift className="text-2xl" />
        <span>Premiuma abune ol</span>
      </div>
      <div className="flex items-center justify-between ">
        <span className="text-[22px]">
          $8 <small className="">/a</small>
        </span>
        <Button padding={true}>Subscribe</Button>
      </div>
    </div>
  );
};
