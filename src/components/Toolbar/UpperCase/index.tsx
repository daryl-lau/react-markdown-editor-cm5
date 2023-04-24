import { useContext } from 'react';
import { EditorCtx } from '../editorCtx';

const UpperCase = () => {
  const { switchTextCase } = useContext(EditorCtx);

  const handleClick = () => {
    switchTextCase('upperCase');
  };

  return (
    <div className="icon-wrapper" onClick={handleClick}>
      <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="69758">
        <path
          d="M928 864h-66.64l-270-778.48A32 32 0 0 0 561.1 64h-98.2a32 32 0 0 0-30.24 21.52L162.64 864H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32h-70.88l66.62-192h328.52l66.62 192H672a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32zM381.06 576L512 198.62 642.94 576z"
          p-id="69759"
        ></path>
      </svg>
    </div>
  );
};

export default UpperCase;
