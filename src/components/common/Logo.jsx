import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to={"/"} className="flex items-center space-x-4">
      <img
        src="https://aster-news-mu.vercel.app/assets/logo-A7b-lE24.png"
        alt=""
      />
      <span className="text-skyBlue font-bold text-[18px]">Aster News</span>
    </Link>
  );
};
