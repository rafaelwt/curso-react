import React, { useLayoutEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

export const Quote = ({ author, quote }) => {
  const [boxSize, setBoxSize] = useState({ with: 0, height: 0 });
  const pRef = useRef();
  useLayoutEffect(() => {
    console.log(pRef.current.getBoundingClientRect());
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({
      width,
      height,
    });
  }, [quote]);
  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef} className="mb-1">
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
