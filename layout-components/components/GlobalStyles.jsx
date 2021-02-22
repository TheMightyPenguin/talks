import React from "react";

const styles = `
  pre[class*="language-"] {
    border-radius: 0.5em;
  }

  :not(pre) > code[class*="language-"] {
    border-radius: 0.3em;
  }
`;

const GlobalStyles = () => {
  console.log("render");
  return <style dangerouslySetInnerHTML={{ __html: styles }} />;
};

export default GlobalStyles;
