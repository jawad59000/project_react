import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
          end
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/film/:id"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Movie</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
