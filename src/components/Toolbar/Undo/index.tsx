import React, { useContext } from 'react';
import { EditorCtx } from '../index';

const Undo = () => {
  const { editorRef } = useContext(EditorCtx);

  const handleClick = () => {
    editorRef.current.undo();
  };

  return (
    <div className="icon-wrapper" onClick={handleClick}>
      <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6863">
        <path
          d="M56.97 56.97L161.3 161.3C251.05 71.534 375.03 16 511.998 16 785.32 16 1008.2 239.05 1008 512.37 1007.8 786.134 785.81 1008 512 1008c-127.852 0-244.404-48.374-332.356-127.816-10.226-9.236-10.706-25.122-0.964-34.866l39.476-39.476c8.996-8.996 23.506-9.57 33.002-1.104C320.426 866.492 411.79 904 512 904c216.642 0 392-175.324 392-392 0-216.642-175.324-392-392-392-108.326 0-206.314 43.846-277.228 114.772l108.256 108.258c15.12 15.12 4.412 40.97-16.97 40.97H40c-13.254 0-24-10.746-24-24V73.942c0-21.382 25.852-32.09 40.97-16.972z"
          p-id="6864"
        ></path>
      </svg>
    </div>
  );
};
export default Undo;
