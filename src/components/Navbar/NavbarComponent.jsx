import React, { useEffect, useState } from "react";
import { Logo } from "../common/Logo";
import { NavLink } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";
import { FaFileContract } from "react-icons/fa";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { Subscription } from "../widget/Subscription";
import { useFetchCategoryList } from "../../hooks/useFetch";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Icon({ slug }) {
  const icons = {
    world: <TfiWorld />,
    politics: <FaFileContract />,
    sports: <MdOutlineSportsKabaddi />,
  };
  return icons[slug];
}

export const NavbarComponent = () => {
  const [categories, fetchCategories, loading] = useFetchCategoryList();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <aside className="pl-8 !bg-white">
      <div>
        <Logo />
      </div>
      <div>
        {loading ? (
          <Skeleton
            style={{
              marginBottom: "1rem",
            }}
            count={10}
            height={"20px"}
          />
        ) : (
          categories.map((c, index) => (
            <NavLink
              key={index}
              to={"#"}
              className={
                "flex items-center h-12 rounded-tr-full rounded-br-full  text-amberBlack space-x-5 "
              }
            >
              <span className="text-2xl">
                <Icon slug={c.slug} />
              </span>
              <span>{c.name}</span>
            </NavLink>
          ))
        )}
        <Subscription />
      </div>
    </aside>
  );
};
