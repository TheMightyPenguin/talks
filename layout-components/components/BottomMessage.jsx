import React from "react";

const TwitterHandle = ({ message, color = "white" }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "3rem",
        right: "5rem",
        color: color,
        fontFamily: "inherit",
      }}
    >
      {message}
    </div>
  );
};

export default TwitterHandle;
