import React from "react";
import Typical from "react-typical";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="home-left-content">
        <span className="dev-span">WEB DEVELOPER</span>
        <div className="typical-content">
          <span className="h1-span" smooth="true">
            <Typical
              steps={[
                "MERN Stack Developer",
                1500,
                "Front-End Developer",
                1500,
                "React / Redux",
                // React-Native",
                1500,
                "Full Stack Developer",
                1500,
                "Cross-Platform Expert",
                1500,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </span>
          <p className="about-span">
            Savvy of building application with great Cross-Platform
            responsiveness
          </p>
        </div>
        <div className="button-nav">
          <Link to="/form">
            <button className="button-nav-hire">HIRE ME</button>
          </Link>
          <button href="/images/Ameer_resume.pdf" className="button-nav-resume">
            <Link target={"_blank"} to="/images/Ameer_resume.pdf" download>
              {" "}
              GET RESUME{" "}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
