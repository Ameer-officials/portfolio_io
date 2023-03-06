import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import "./footer.css";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="call-footer">
        <h1>Let's make something 'AMAZING' together. </h1>
        <div>
          <h2>
            {/* <span className="hide"> */}
            With MERN STACK
            {/* Start by
            <a href="/">
              {" "}
              saying hi<span> &rarr; </span>{" "}
            </a>
            </span> */}
            <div className="mern-links">
              <a
                className="mongodb mern-link"
                href="https://www.mongodb.com"
                rel="noopener noreferrer"
                target={"_blank"}
              >
                <img src="/images/mongodb-icon-1.svg" alt="M" />
              </a>
              <a
                className="express mern-link"
                href="https://expressjs.com"
                rel="noopener noreferrer"
                target={"_blank"}
              >
                <img src="/images/express-109.svg" alt="E" />
              </a>
              <a
                className="react mern-link"
                href="https://reactjs.org "
                rel="noopener noreferrer"
                target={"_blank"}
              >
                <img src="/images/react-2.svg" alt="R" />
              </a>
              <a
                className="node mern-link"
                href="https://nodejs.org/en"
                rel="noopener noreferrer"
                target={"_blank"}
              >
                <img src="/images/nodejs-1.svg" alt="N" />
              </a>
            </div>
          </h2>
        </div>
        <p>
          Ameer <span className="name-span">Makandar</span>
          <span className="copy-span">
            &copy; {date} . All Rights<a href="/login"> Reserved</a>
          </span>
        </p>
      </div>
      <div className="nav-footer">
        <p className="copy-span-2">Information</p>
        <h2>0831 Belgavi, Karnataka, INDIA </h2>
        <h1>
          <a href="/">Ameer.io</a>{" "}
        </h1>
        <div className="nav-footer-links">
          <li>
            {" "}
            <a href="/"> Home</a>{" "}
          </li>
          <li>
            {" "}
            <a href="/form">Hire me</a>{" "}
          </li>
          <li>
            {" "}
            <a href="/about">About me</a>{" "}
          </li>
        </div>
        <div className="personal-link">
          <li>
            {" "}
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/Ameer-officials"
            >
              <FaGithub />
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="mailto:ameerusmanmakandar?subject=hello%20ameer">
              <BiMailSend />
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
            target={"_blank"}
              rel="noreferrer"
              href="https://instagram.com/ameer_makandar?igshid=YmMyMTA2M2Y="
            >
              <FaInstagram />
            </a>{" "}
          </li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
