import React, { useState } from "react";
import { data } from "../data/data";
import logo from "../assets/shared/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import "./Navbar.css";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <header className="main-header">
        <div className="logo-container">
          <img src={logo} alt="company logo" className="logo" />
        </div>
        <button
          type="button"
          className="btn hamburger-btn"
          aria-label="Main Menu"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-expanded={`${isNavOpen ? "true" : "false"}`}
        >
          {!isNavOpen ? <GiHamburgerMenu /> : <IoCloseSharp />}
        </button>
        <nav className={`${isNavOpen ? "main-nav open" : "main-nav"}`}>
          <ul className="main-nav-list flex">
            <li
              className="main-nav-list-item"
              aria-selected={`${activeIndex === 0 ? "true" : "false"}`}
            >
              <a
                href="#"
                className="main-nav-link"
                onClick={() => {
                  setActiveIndex(0);
                }}
              >
                <span aria-hidden="true" className="numbered-title">
                  00
                </span>
                Home
              </a>
            </li>
            {Object.keys(data).map((item, index) => {
              return (
                <li
                  key={index}
                  className="main-nav-list-item"
                  aria-selected={`${
                    activeIndex === index + 1 ? "true" : "false"
                  }`}
                >
                  <a
                    href="#"
                    className="main-nav-link"
                    onClick={() => {
                      setActiveIndex(index + 1);
                    }}
                  >
                    <span aria-hidden="true" className="numbered-title">{`0${
                      index + 1
                    }`}</span>
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
