import React from "react";

const Image = ({ src, width, height, ...rest }) => {
  const computedWidth = (() => {
    if (typeof width === "number" && width <= 1) {
      return `${width * 100}%`;
    }
    return width || "auto";
  })();
  const computedHeight = (() => {
    if (typeof height === "number" && height <= 1) {
      return `${height * 100}%`;
    }
    return height || "auto";
  })();

  return (
    <img
      style={{
        width: computedWidth,
        height: computedHeight,
        display: "block",
        margin: "0 auto",
        borderRadius: "0.3em",
      }}
      alt={src}
      src={src}
      {...rest}
    />
  );
};

export default Image;
