import FormSearch from "../Navbar/FormSearch";
import menus from "../../routes/menu";
import { NavLink } from "react-router-dom";

export const Header = () => {
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
      <div>
        <button>Giris</button>
      </div>
    </header>
  );
};
