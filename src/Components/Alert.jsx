import React from "react";

const Alert = ({ message, dis }) => {
  return (
    <div className="alert" 
    style={dis}
    >
      <p>{message}</p>
    </div>
  );
};
export default Alert;
