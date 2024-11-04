import React from "react";
import { Button } from "../../../components/widget/Button";
import { Link } from "react-router-dom";

export const AuthorItem = ({ item }) => {
  return (
    <div className="bg-white p-4 w-[107px]  flex flex-col justify-between">
      <figure className="size-[70px] rounded-full mx-auto overflow-hidden">
        <img className="object-cover" src={item.photo} alt="" />
      </figure>
      <div className="pt-2 flex flex-col">
        <h5 className="text-center font-medium text-black">{item.fullname}</h5>
        <p className="text-center text-sm mb-2 text-gray-500 h-full">
          {item.agency}
        </p>
        <Button padding={true}>
          <Link to={"#"}>Xeberler</Link>
        </Button>
      </div>
    </div>
  );
};
