import React from "react";
import { Link } from "react-router-dom";

export const NewsItem = ({ item }) => {
  return (
    <div className="bg-white p-4 rounded-md">
      <Link to={"item.slug"}>
        <div className="flex space-x-4">
          <div>
            <h4 className="line-clamp-2 font-medium">{item.title}</h4>
            <p className="line-clamp-3 text-gray-500 text-[14px]">
              {item.description}
            </p>
          </div>
          <div>
            <figure className="size-32">
              <img className="object-cover" src={item.photo} alt="" />
            </figure>
          </div>
        </div>
      </Link>
    </div>
  );
};
