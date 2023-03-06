import React, { useState } from "react";
import { Link } from "react-router-dom";

// import Projects from "../projects/Projects"
import "./header.css";
import { BsGrid } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { HashLink as Links } from "react-router-hash-link";

const Header = ({ flow }) => {
  const [stylee, setStylee] = useState({
    backdrop: {},
    navlink: {},
    burger: {},
    close: {},
  });

  const navBurger = () => {
    setStylee({
      backdrop: { display: "block" },
      navlink: { top: "250px" },
      burger: { display: "none" },
      close: { display: "block", zIndex: 4 },
    });
    document.body.style.overflowY = "hidden";
  };

  const navClose = () => {
    setStylee({
      backdrop: {
        display: "none",
      },
      navlink: { top: "-250px" },
      burger: { display: "block" },
      close: { display: "none" },
    });
    document.body.style.overflowY = "auto";
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <div className="backdrop" style={stylee.backdrop}></div>
        <div className="header-links" style={stylee.navlink}>
          <Links
            className="header-links-i"
            to="/#work"
            onClick={navClose}
            smooth
          >
            <span> WORK</span>
          </Links>
          <Link
            className="header-links-i"
            to="/projects"
            onClick={navClose}
            smooth="true"
          >
            <span> PROJECTS</span>
          </Link>
          <Link className="header-links-i" to="/form" onClick={navClose}>
            <span> HIRE ME</span>
          </Link>
          {/* <Link className="header-links-i about-link" to="/about" onClick={navClose}>
            <span>ABOUT ME</span>
          </Link> */}
        </div>
        <div className="humburger">
          <span className="burger" style={stylee.burger} onClick={navBurger}>
            <BsGrid />
          </span>
        </div>
        <span className="close" style={stylee.close} onClick={navClose}>
          <CgClose />
        </span>
      </div>
      
    </>
  );
};

export default Header;
