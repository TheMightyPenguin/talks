/* eslint-disable */
import React, { useEffect, useRef, useMemo } from "react";
import { LiveCode as MdxDeckLiveCode } from "mdx-deck-live-code";
import styled from "styled-components";

import VerticalList from "./VerticalList";

const Button = styled.button`
  margin: 0;
  padding: 0;
  outline: none;
  border: 2px solid #074ee8;
  padding: 11px;
  font-size: 20px;
  font-family: "Mali", cursive;
  font-weight: 600;
  background: white;
  border-radius: 4px;
  color: #074ee8;

  &:not(:first-child) {
    background: #074ee8;
    color: white;
  }
`;

const LiveCode = ({ snippet: snippetName, ...rest }) => {
  const hasFocus = useRef(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        hasFocus.current = false;
        return;
      }

      if (hasFocus.current) {
        event.stopImmediatePropagation();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const codeSnippet = require(`!raw-loader!../snippets/${snippetName}`).replace(
    /\/\* eslint-disable \*\/\n/,
    ""
  );
  const isJsSnippet = snippetName.endsWith(".js");

  const providerProps = useMemo(
    () => ({
      scope: { styled, Button, VerticalList },
      noInline: isJsSnippet,
    }),
    [isJsSnippet]
  );

  const editor = useMemo(
    () => (
      <div
        onClick={() => {
          hasFocus.current = true;
        }}
      >
        <MdxDeckLiveCode
          code={codeSnippet}
          providerProps={providerProps}
          previewProps={{
            style: {
              padding: "0.6em",
            },
          }}
          {...rest}
        />
      </div>
    ),
    [codeSnippet, providerProps]
  );

  return editor;
};

export default LiveCode;
