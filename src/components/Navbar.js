import React, { useEffect, useState } from "react";
import db_logo from "../static/db_svg_icon.svg";

import "./styles/navbar.css";
import Button from "./Button";
import { useWindowDimensions } from "../utilities/WindowDimensions.js";

export default function Navbar() {
  const { width } = useWindowDimensions();
  const [collapseNav, setCollapseNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Function to check if the user has scrolled down
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (width < 768) {
      setCollapseNav(true);
    } else {
      setCollapseNav(false);
      setMenuOpen(false);
    }
  }, [width]);

  const onClickHander = () => {
    setMenuOpen(false);
  };
  return (
    <div
      className="navbar"
      style={{
        boxShadow: scrolled ? "0 5px 20px -2px #000000c5" : "",
      }}
    >
      <div
        style={{
          display: menuOpen ? "block" : "none",
        }}
        onClick={() => setMenuOpen(false)}
        className="blur_back"
      ></div>
      <div
        id="sideMenu"
        className={menuOpen ? "side_menu_open" : "side_menu_closed"}
      >
        <a onClick={onClickHander} className="code" href="#experience">
          <p className="blue">01.&nbsp;</p> Experience
        </a>
        <a onClick={onClickHander} className="code" href="#projects">
          <p className="blue">02.&nbsp;</p> Projects
        </a>
        <a onClick={onClickHander} className="code" href="#contact">
          <p className="blue">03.&nbsp;</p> Contact
        </a>

        <a
          href={process.env.PUBLIC_URL + "/Danyal_Babar_Resume.pdf"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Resume</Button>
        </a>
      </div>

      <div className="navbar_content">
        <a
          href="#top"
          className="fade-in-initial-up"
          style={{
            transitionDelay: "0s",
          }}
        >
          <img
            onClick={onClickHander}
            className="icon "
            src={db_logo}
            alt="logo"
          />
        </a>
        <div className="items">
          {collapseNav === false ? (
            <>
              <a
                className="code fade-in-nav"
                href="#experience"
                style={{
                  animationDelay: "0.2s",
                }}
              >
                <p className="blue">01.&nbsp;</p> Experience
              </a>
              <a
                className="code fade-in-nav"
                href="#projects"
                style={{
                  animationDelay: "0.4s",
                }}
              >
                <p className="blue">02.&nbsp;</p> Projects
              </a>
              <a
                className="code fade-in-nav"
                href="#contact"
                style={{
                  animationDelay: "0.6s",
                }}
              >
                <p className="blue">03.&nbsp;</p> Contact
              </a>
              <a
                href={process.env.PUBLIC_URL + "/Danyal_Babar_Resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="fade-in-nav"
                  onClick={() => console.log("as")}
                  style={{
                    animationDelay: "0.8s",
                  }}
                >
                  Resume
                </Button>
              </a>
            </>
          ) : (
            <div
              className="fade-in-nav"
              style={{ zIndex: 1000 }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className={menuOpen ? "close_icon " : "menu_icon"} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
