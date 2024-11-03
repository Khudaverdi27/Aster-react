import React from "react";
import { NavbarComponent } from "../components/Navbar/NavbarComponent";
import { Header } from "../components/common/Header";
export const AppLayout = () => {
  return (
    <main className="w-[1300px] mx-auto flex ">
      <div className="w-[240px]">
        <NavbarComponent />
      </div>
      <div className="relative flex-1 ">
        <Header />
        <div className="w-[200px]">rightBAR</div>
      </div>
    </main>
  );
};
