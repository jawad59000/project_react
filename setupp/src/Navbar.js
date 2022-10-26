import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const menu = useRef(null);
  const list = useRef(null);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    flag
      ? (menu.current.style.height = `${list.current.clientHeight}px`)
      : (menu.current.style.height = "0px");
  }, [flag]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => {
              setFlag(!flag);
            }}
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={menu}>
          <ul className="links" ref={list}>
            {links.map((link) => {
              const { id, url, text } = link;

              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;

            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
