import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul className="flex gap-4 text-2xl font-semibold text-gray-900 dark:text-gray-300">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/all-images">All Images</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
