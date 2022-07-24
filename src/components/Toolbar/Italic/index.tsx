import React, { useContext } from "react";
import { EditorCtx } from "../index";

const Italic = () => {
  const { wrapTextWith } = useContext(EditorCtx);

  const handleClick = () => {
    wrapTextWith("*");
  };

  return (
    <div className="icon-wrapper" onClick={handleClick}>
      <svg
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="67877"
      >
        <path
          d="M832 96v32a32 32 0 0 1-32 32h-134l-176 704h118a32 32 0 0 1 32 32v32a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32v-32a32 32 0 0 1 32-32h134l176-704h-118a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h384a32 32 0 0 1 32 32z"
          p-id="67878"
        ></path>
      </svg>
    </div>
  );
};

export default Italic;
