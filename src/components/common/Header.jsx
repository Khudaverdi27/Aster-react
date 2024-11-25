import FormSearch from "../Navbar/FormSearch";
import menus from "../../routes/menu";
import { NavLink } from "react-router-dom";
import Login from "./Modal";
import { getStorage, removeStorage } from "../../utils/helper";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useEffect } from "react";

export const Header = () => {
  const user = getStorage("user");
  const token = getStorage("token");

  const handleLogOut = () => {
    removeStorage("token");
    removeStorage("user");
    location.reload();
  };
  return (
    <header
      className="pt-6 pb-10 flex justify-between fixed bg-mainBg  z-50  top-0
    w-[1082px] "
    >
      <div className="flex">
        <FormSearch />
        <button>Mode</button>
      </div>

      <div className="menu-link flex items-center space-x-2">
        {menus.map((item, index) => (
          <NavLink className="flex items-center " to={item.path} key={index}>
            <span>{item.icon}</span>
            <span className="flex items-center px-1 whitespace-nowrap">
              {item.name}
            </span>
          </NavLink>
        ))}
      </div>
      <div className="w-32">
        {token ? (
          <div>
            <Menu>
              <MenuButton className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold ">
                <figure className="size-10  ">
                  <img
                    className="size-full rounded-full object-cover"
                    src={user?.user?.photo}
                  />
                </figure>
                <p>{user?.user?.name}</p>
              </MenuButton>

              <MenuItems
                transition
                anchor="bottom end"
                className="fixed top-0 z-50 bg-red-500 origin-top-right rounded-xl border border-white/5 p-1 text-sm/6  transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
              >
                <MenuItem>
                  <button
                    onClick={handleLogOut}
                    className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                  >
                    Log out
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        ) : (
          <Login />
        )}
      </div>
    </header>
  );
};
