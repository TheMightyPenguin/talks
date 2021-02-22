import React from "react";

const spacingScale = {
  xsmall: 4,
  small: 8,
  medium: 16,
  large: 32,
  xlarge: 64,
};

const SpacingScale = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ marginTop: "-5px" }}>
        {Object.keys(spacingScale).map((spaceKey) => (
          <div
            key={spaceKey}
            style={{
              marginBottom: "20px",
              fontSize: "20px",
              fontFamily: "inherit",
            }}
          >
            {spaceKey}
          </div>
        ))}
      </div>
      <div>
        {Object.values(spacingScale).map((spaceValue) => (
          <div
            key={spaceValue}
            style={{
              height: "20px",
              marginBottom: "27px",
              marginLeft: "40px",
              width: spaceValue,
              background: "white",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SpacingScale;
