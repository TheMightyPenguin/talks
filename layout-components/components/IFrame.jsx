import React from "react";

const BrowserButton = () => {
  return (
    <div
      style={{
        width: "12px",
        height: "12px",
        background: "#767676",
        borderRadius: "50%",
      }}
    />
  );
};

const IFrame = (props) => {
  const displayUrl = props.src.split("?");
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "12px 16px",
            background: "#EEEEEE",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            width: "calc(100%)",
            boxSizing: "border-box",
          }}
        >
          <BrowserButton />
          <div style={{ width: "8px" }} />
          <BrowserButton />
          <div style={{ width: "8px" }} />
          <BrowserButton />
          <div style={{ width: "16px" }} />
          <div
            style={{
              fontSize: "15px",
              background: "white",
              color: "#767676",
              padding: "4px 8px",
              borderRadius: "8px",
              flexGrow: 1,
            }}
          >
            {displayUrl[0]}
          </div>
        </div>
        <iframe
          {...props}
          width="100%"
          height="100%"
          title={props.src}
          style={{
            border: "none",
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
            background: "white",
          }}
        />
      </div>
    </div>
  );
};

export default IFrame;
