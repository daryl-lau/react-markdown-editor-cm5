import { useContext } from 'react';
import { EditorCtx } from '../editorCtx';

const Bold = () => {
  const { wrapTextWith } = useContext(EditorCtx);

  const handleClick = () => {
    wrapTextWith('**');
  };

  return (
    <div className="icon-wrapper" onClick={handleClick}>
      <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6997">
        <path
          d="M757.04 477.56A239.52 239.52 0 0 0 592 64H224a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h32v704H224a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h416a256 256 0 0 0 256-256c0-98.98-56.76-183.84-138.96-226.44zM384 160h176a144 144 0 0 1 0 288h-176z m224 704H384V544h224a160 160 0 0 1 0 320z"
          p-id="6998"
        ></path>
      </svg>
    </div>
  );
};

export default Bold;
