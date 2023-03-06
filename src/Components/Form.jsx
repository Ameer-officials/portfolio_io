import React from "react";
import Input from "./Input";


export default function Form() {
  return (
    <div className="form">
      <div className="formjs"></div>
      <div className="form-video">
        <video
          onContextMenu={(event) => {
            event.preventDefault();
          }}
          width="1100"
          height="700"
          autoPlay
          preload="true"
          loop
          muted
          id="form-video"
        >
          <source src="/videos/Compllex_in_sec.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="form-content">
        <div className="p-flex">
          <p>K</p>
          <p>E</p>
          <p>E</p>
          <p>P</p>
          <span></span>
          <p>M</p>
          <p>E</p>
          <span></span>
          <p>I</p>
          <p>N</p>
          <span></span>
          <p>T</p>
          <p>O</p>
          <p>U</p>
          <p>C</p>
          <p>H</p>
        </div>
        <Input />
      </div>
    </div>
  );
}
