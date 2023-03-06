import React, { useState } from "react";


const Box = ({ click }) => {
  const [value, setValue] = useState("");

  return (
    <div
      className="Box"
        onClick={() => {click(setValue, value); }}
    >
      <p> {value} </p>
    </div>
  );
};
export default Box;
