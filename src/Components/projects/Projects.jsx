import React, { useState } from "react";
import "./projects.css";
import Box from "./Box.jsx";
import Header from "../header/Header"
import Alert from "../Alert";

const Projects = () => {
  const [boolee, setBolee] = useState(true);
  const [dStyle, setDStyle] = useState({
    display: "block",
  });


  // const [box , setBox]= useState(Array(9).fill(""))
  
  const handleClick = (setValue, value) => {
      if (value === "") {
      if (boolee) {
        setValue("X");
        setBolee(false);
      } else {
        setValue("O");
        setBolee(true);
      }
    }
  };
 
  // const handleClick = (i) => {
  //   if (box[i] === "") {
  //     if (boolee) {
  //       const newValue = "X";
  //       setBox[i](newValue)
  //       setBolee(false);
  //     } else {
  //       const newValue = "O";
  //       setBox[i](newValue)
  //       setBolee(true);
  //     }
  //   }
  // }
  
  
  const direct =()=>{
    setTimeout(() => {
      setDStyle({
        display: "none",
      });
    }, 2500);
  }
  
  return (
    <div id="projects" onLoad={direct}>
      <Header />
      <div className="project-2 ">
        <h1 className="top">TIC-TAC-TOE</h1>
        <div className="box-line">
          <Box  click={handleClick} />
          <Box  click={handleClick} />
          <Box  click={handleClick} />
        </div>
        <div className="box-line">
          <Box  click={handleClick} />
          <Box  click={handleClick} />
          <Box  click={handleClick} />
        </div>
         <div className="box-line">
          <Box  click={handleClick} />
          <Box  click={handleClick} />
          <Box  click={handleClick}/>
        </div>
      </div>
      <hr className="line"/>
      <div className="project-3">
        <div className="journal">
        <h1 className="top">PERSONAL JOURNAL</h1>
        <img src="/images/Daily_personal_journal.png" alt="journal-webapp" />
        </div>
      </div>
      <Alert message="Yes begginer, working on profesional projects" dis={dStyle}/>
    </div>
  );
};

export default Projects;
