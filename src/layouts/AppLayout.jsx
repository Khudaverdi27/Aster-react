import React from "react";
import { NavbarComponent } from "../components/Navbar/NavbarComponent";

export const AppLayout = () => {
  return (
    <main className="w-[1300px] mx-auto flex">
      <div className="w-[240px]">
        <NavbarComponent />
      </div>
    </main>
  );
};
