import React from "react";

const TwitterHandle = ({ color = "white", text }) => {
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
      @MightyPenguinV {text}
    </div>
  );
};

export default TwitterHandle;
