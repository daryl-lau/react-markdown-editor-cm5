import React, { useContext } from 'react';
import { EditorCtx } from '../index';

const Redo = () => {
  const { editorRef } = useContext(EditorCtx);

  const handleClick = () => {
    editorRef.current.redo();
  };

  return (
    <div className="icon-wrapper" onClick={handleClick}>
      <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="68552">
        <path
          d="M967.03 56.97L862.7 161.3C772.95 71.534 648.97 16 512.002 16 238.68 16 15.8 239.05 16 512.37 16.2 786.134 238.19 1008 512 1008c127.852 0 244.404-48.374 332.356-127.816 10.226-9.236 10.706-25.122 0.964-34.866l-39.476-39.476c-8.996-8.996-23.506-9.57-33.002-1.104C703.574 866.492 612.21 904 512 904c-216.642 0-392-175.324-392-392 0-216.642 175.324-392 392-392 108.326 0 206.314 43.846 277.228 114.772l-108.256 108.258c-15.12 15.12-4.412 40.97 16.97 40.97H984c13.254 0 24-10.746 24-24V73.942c0-21.382-25.852-32.09-40.97-16.972z"
          p-id="68553"
        ></path>
      </svg>
    </div>
  );
};

export default Redo;
