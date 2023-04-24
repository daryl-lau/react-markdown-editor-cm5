import { useContext } from 'react';
import { EditorCtx } from '../editorCtx';

const HumpCase = () => {
  const { switchTextCase } = useContext(EditorCtx);

  const handleClick = () => {
    switchTextCase('humpCase');
  };

  return (
    <div className="icon-wrapper" onClick={handleClick}>
      <svg className="icon" viewBox="0 0 1280 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="67341">
        <path
          d="M1248.06176 320h-32a32 32 0 0 0-32 32v25.64C1140.06176 342.14 1084.94176 320 1024.06176 320a256 256 0 0 0-256 256v64a256 256 0 0 0 256 256c60.88 0 116-22.14 160-57.64V864a32 32 0 0 0 32 32h32a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32z m-64 320a160 160 0 0 1-320 0v-64a160 160 0 0 1 320 0zM425.06176 148.7a32 32 0 0 0-30-20.7h-86.06a32 32 0 0 0-30 20.7L2.06176 852.7A32 32 0 0 0 32.06176 896h34.28a32 32 0 0 0 30-20.7L176.50176 672h351.12l80.22 203.3a32 32 0 0 0 30 20.7H672.06176a32 32 0 0 0 30-43.3zM214.38176 576L352.06176 227.16 489.74176 576z"
          p-id="67342"
        ></path>
      </svg>
    </div>
  );
};
export default HumpCase;
