import React from "react";
import { useState } from "react";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { projects, skills, contact } from "../../portfolioDetails";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../reduxStore/slices/themeSlice";

export default function Navbar() {
  let dispatch = useDispatch();
  const { themeName } = useSelector((state) => state.theme);

  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  const handleTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <>
      <nav className="center nav">
        <ul
          style={{ display: showNavList ? "flex" : null }}
          className="nav__list"
        >
          {projects.length ? (
            <li className="nav__list-item">
              <a
                href="#projects"
                onClick={toggleNavList}
                className="link link--nav"
              >
                Projects
              </a>
            </li>
          ) : null}

          {skills.length ? (
            <li className="nav__list-item">
              <a
                href="#skills"
                onClick={toggleNavList}
                className="link link--nav"
              >
                Skills
              </a>
            </li>
          ) : null}

          {contact.email ? (
            <li className="nav__list-item">
              <a
                href="#contact"
                onClick={toggleNavList}
                className="link link--nav"
              >
                Contact
              </a>
            </li>
          ) : null}
        </ul>

        <button
          type="button"
          onClick={handleTheme}
          className="btn btn--icon nav__theme"
          aria-label="toggle theme"
        >
          {themeName === "dark" ? <LightModeIcon /> : <Brightness2Icon />}
        </button>

        <button
          type="button"
          onClick={toggleNavList}
          className="btn btn--icon nav__hamburger"
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </>
  );
}
