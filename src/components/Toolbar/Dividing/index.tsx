import { useContext } from 'react';
import { EditorCtx } from '../editorCtx';

const Dividing = () => {
  const { insertText } = useContext(EditorCtx);

  const handleClick = () => {
    insertText('-----\n', true, false, 3);
  };

  return (
    <div className="icon-wrapper" onClick={handleClick}>
      <svg className="icon" viewBox="0 0 1280 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7667">
        <path d="M1280 495v34a32 32 0 0 1-32 32H32a32 32 0 0 1-32-32v-34a32 32 0 0 1 32-32h1216a32 32 0 0 1 32 32z" p-id="7668"></path>
      </svg>
    </div>
  );
};

export default Dividing;
