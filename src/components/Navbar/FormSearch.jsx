import { Field, Input } from "@headlessui/react";
import { FaSearch } from "react-icons/fa";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useFetchBySearch } from "../../hooks/useFetch";
import classNames from "classnames";

export default function FormSearch() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [searchRes, fetchSearchRes, searchLoading] = useFetchBySearch(
    text.trim()
  );

  const onSearch = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (text) {
      fetchSearchRes(text);
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [text]);

  return (
    <div className="w-full min-w-[400px] max-w-md px-4 relative">
      <Field className="flex items center rounded-lg border border-gray-500 bg-white/5">
        <Input
          onChange={(e) => onSearch(e)}
          className={clsx(
            " block w-full h-full rounded-lg border border-transparent py-1.5 px-3 text-sm/6 text-black",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-blue-500"
          )}
        />
        <button className="px-2">
          <FaSearch />
        </button>
      </Field>
      <div
        className={`${
          open ? "absolute w-full max-w-[370px] divider  top-10 z-10" : "hidden"
        }`}
      >
        {searchRes.map((sRes, index) => (
          <div
            key={index}
            className="flex border border-gray-400 w-full justify-between items-center bg-white  "
          >
            <p className="truncate">{sRes.title}</p>
            <figure className="size-10 rounded-md">
              <img className="size-full object-cover" src={sRes.photo} />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}
