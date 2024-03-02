import { useState } from "react";
import { Link } from "react-router-dom";

const BottomBar = () => {
  const menus = [
    {
      name: "home",
      icon: "home-outline",
      dis: "translate-x-0",
    },
    {
      name: "date",
      icon: "calendar-outline",
      dis: "translate-x-16",
    },
    {
      name: "katalog",
      icon: "list-outline",
      dis: "translate-x-32",
    },
    {
      name: "history",
      icon: "time-outline",
      dis: "translate-x-48",
    },
    {
      name: "favorite",
      icon: "bookmark-outline",
      dis: "translate-x-64",
    },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="bg-primary pt-6 w-full overflow-hidden flex justify-center fixed bottom-0">
      <div className="bg-third max-h-[4.4rem] w-full flex justify-center rounded-t-xl">
        <ul className="flex relative">
          <span
            className={`bg-third border-4 border-primary h-16 w-16 absolute -top-5 rounded-full duration-500 ${menus[active].dis}`}
          >
            <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myShadow1"></span>
            <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-myShadow2"></span>
          </span>
          {menus.map((menu, i) => (
            <li key={i} className="w-16">
              <a
                className="flex flex-col text-center pt-6"
                onClick={() => setActive(i)}
              >
                <Link
                  to={`/${menu.name}`}
                  className={`text-2xl cursor-pointer duration-500 ${
                    i === active ? "-mt-6 text-secondary" : "text-white"
                  }`}
                >
                  <ion-icon name={menu.icon}></ion-icon>
                </Link>
                <span
                  className={` text-white text-xs capitalize ${
                    active === i
                      ? "translate-y-5 duration-700 opacity-100"
                      : "opacity-0 translate-y-10"
                  } `}
                >
                  {menu.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default BottomBar;
