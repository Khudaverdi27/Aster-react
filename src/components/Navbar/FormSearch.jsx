import { Field, Input } from "@headlessui/react";
import { FaSearch } from "react-icons/fa";
import clsx from "clsx";

export default function FormSearch() {
  return (
    <div className="w-full min-w-[400px] max-w-md px-4">
      <Field className="flex items center rounded-lg border border-gray-500 bg-white/5">
        <Input
          className={clsx(
            " block w-full h-full rounded-lg border border-transparent py-1.5 px-3 text-sm/6 text-black",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-blue-500"
          )}
        />
        <button className="px-2">
          <FaSearch />
        </button>
      </Field>
      <div className="relative w-full min-w-[400px] divider">
        <div className="flex w-full justify-between items-center bg-white absolute top-0 z-10">
          <p>text</p>
          <figure className="size-8 rounded-md">
            <img
              className="size-full object cover"
              src="https://aster-news-mu.vercel.app/assets/logo-A7b-lE24.png"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
