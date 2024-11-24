import React from "react";
import { NavbarComponent } from "../components/Navbar/NavbarComponent";
import { Header } from "../components/common/Header";
import { RightBar } from "../components/RightAside/RightBar";
export const AppLayout = ({ children }) => {
  return (
    <main className="w-[1300px] mx-auto flex space-x-6 bg-mainBg ">
      <div className="w-[240px]">
        <NavbarComponent />
      </div>
      <div className="relative flex-1 ">
        <Header />
        <div className="max-w-[840px]">{children}</div>
      </div>
      <RightBar />
    </main>
  );
};
