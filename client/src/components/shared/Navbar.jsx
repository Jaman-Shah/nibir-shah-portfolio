import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeClass = ({ isActive }) =>
    `py-3 px-4 hover:text-red-400 hover:border-l  hover:border-l-[12px]  transition ease-in-out delay-150  ${
      isActive ? "text-red-400" : ""
    }`;
  return (
    <div>
      <div className="flex justify-between p-4 ">
        <div>Logo</div>
        <div>
          <NavLink
            data-tooltip-content="Go to Home"
            to="/"
            className={activeClass}
          >
            HOME
          </NavLink>
        </div>
        <div>Right</div>
      </div>
    </div>
  );
};

export default Navbar;
