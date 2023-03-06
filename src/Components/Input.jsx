import React, { useState } from "react";
import Alert from "./Alert";

function Input() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [dStyle, setDStyle] = useState({
    display: "none",
  });

  const [inputTXt, setInputTxt] = useState({
    Fname: "",
    Email: "",
    Number: "",
    Msg: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setInputTxt((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  }
  function expanded() {
    setIsExpanded(false);
  }

  const direct = () => {
    if (inputTXt.Email.length >= 10) {
      setDStyle({
        display: "block",
      });
    }
    setTimeout(() => {
      setDStyle({
        display: "none",
      });
      if (inputTXt.Email.length >= 10) {
      setInputTxt({
        Fname: "",
        Email: "",
        Number: "",
        Msg: "",
      });
        window.location.href = "/";
      }
    }, 2000);
  };

  return (
    <div>
      {isExpanded ? (
        <>
          <input
            className="start-field"
            name="start"
            type="text"
            placeholder="Approach"
            onClick={expanded}
          />
          {/* <input
            className="start-field"
            name="start"
            type="text"
            placeholder="Company"
            onClick={expanded}
          /> */}
        </>
      ) : (
        <form
          className="hire-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="fieldName"
            name="Fname"
            type="text"
            placeholder="Name"
            onChange={changeHandler}
            value={inputTXt.Fname}
            onClick={expanded}
            autoComplete="off"
          />

          <input
            className="fieldName"
            name="Email"
            type="email"
            placeholder="Email"
            onChange={changeHandler}
            value={inputTXt.Email}
            autoComplete="off"
            required
          />

          <input
            className="fieldName"
            name="Number"
            type="number"
            placeholder="(+91)"
            onChange={changeHandler}
            value={inputTXt.Number}
            autoComplete="off"
          />

          <textarea
            style={{ resize: "none" }}
            rows={10}
            cols={70}
            className="fieldName"
            name="Msg"
            type="text"
            placeholder="Expectation"
            onChange={changeHandler}
            value={inputTXt.Msg}
            autoComplete="off"
          />

          <button
            className="submit-btn"
            href="/"
            onClick={direct}
            type="submit"
          >
            Approach
          </button>
        </form>
      )}
      <Alert message="form submitted succesfully" dis={dStyle} />
    </div>
  );
}

export default Input;
