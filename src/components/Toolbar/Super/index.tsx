import React, { useContext } from 'react';
import { EditorCtx } from '../index';

const Super = () => {
  const { wrapTextWith } = useContext(EditorCtx);

  const handleClick = () => {
    wrapTextWith('^');
  };

  return (
    <div className="icon-wrapper" onClick={handleClick}>
      <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="68820">
        <path
          d="M672 128h-104.56a32 32 0 0 0-26.62 14.24L352 425.46 163.18 142.24A32 32 0 0 0 136.56 128H32A32 32 0 0 0 0 160v32a32 32 0 0 0 32 32h70.32l192 288-192 288H32a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h104.56a32 32 0 0 0 26.62-14.24L352 598.54l188.82 283.22a32 32 0 0 0 26.62 14.24H672a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32h-70.32l-192-288 192-288H672a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32z m320 224h-48V32a32 32 0 0 0-32-32h-64a32 32 0 0 0-28.58 17.66l-32 64A32 32 0 0 0 816 128h32v224h-48a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z"
          p-id="68821"
        ></path>
      </svg>
    </div>
  );
};

export default Super;
