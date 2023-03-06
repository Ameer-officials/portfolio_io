import React from "react";
import Header from "../header/Header";
import "./about.css";

const About = () => {
  return (
    <>
      <Header />
      <div className="about">
        <div className="about-profile">
          <div className="about-web">
            <p>W</p>
            <p>E</p>
            <p>B</p>
            <span style={{ padding: "1rem" }}></span>
            <p>D</p>
            <p>E</p>
            <p>V</p>
            <p>E</p>
            <p>L</p>
            <p>O</p>
            <p>P</p>
            <p>E</p>
            <p>R</p>
          </div>
          <div className="avtar">
            <img
              src="https://avatars.githubusercontent.com/u/123060761?v=4"
              alt=""
            />
          </div>
          <div className="vl"></div>
          <div className="about-profile-content">
            <h3>AMEER MAKANDAR</h3>
            <p className="dev">MERN STACK DEVELOPER</p>
            <p>
              innovative , task-driven Cross-platform responsiveness expert ,
              Branding and sufficient to work with frameworks
            </p>
            <span></span>
            <h4>BELGAVI 590016 , KARNATAKA</h4>
          

          </div>
        </div>
        <div className="about-back"></div>
      </div>
    </>
  );
};

export default About;
