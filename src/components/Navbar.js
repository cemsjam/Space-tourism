import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { data } from "../data/data";
import logo from "../assets/shared/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import "./Navbar.css";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    if (activeIndex === 0) return (document.body.className = "home");
    else {
      return (document.body.className = Object.keys(data).filter(
        (item, index) => item[activeIndex] === item[index + 1]
      ));
    }
  }, [activeIndex]);
  console.log(Object.keys(data), activeIndex);
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
              className={`${
                activeIndex === 0
                  ? "main-nav-list-item selected"
                  : "main-nav-list-item"
              }`}
            >
              <Link
                to="/"
                className="main-nav-link"
                onClick={() => {
                  setActiveIndex(0);
                }}
              >
                <span aria-hidden="true" className="numbered-title">
                  00
                </span>
                Home
              </Link>
            </li>
            {Object.keys(data).map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    activeIndex === index + 1
                      ? "main-nav-list-item selected"
                      : "main-nav-list-item"
                  }`}
                >
                  <Link
                    to={`/${item}`}
                    className="main-nav-link"
                    onClick={() => {
                      setActiveIndex(index + 1);
                    }}
                  >
                    <span aria-hidden="true" className="numbered-title">{`0${
                      index + 1
                    }`}</span>
                    {item}
                  </Link>
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
