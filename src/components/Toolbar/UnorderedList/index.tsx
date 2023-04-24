import { useContext } from 'react';
import { EditorCtx } from '../editorCtx';

const UnorderedList = () => {
  const { insertText } = useContext(EditorCtx);

  const handleClick = () => {
    const ul = `- \n- \n- `;
    insertText(ul, true, false, 2);
  };

  return (
    <div className="icon-wrapper" onClick={handleClick}>
      <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="69624">
        <path
          d="M96 736a96 96 0 1 0 96 96 96 96 0 0 0-96-96z m0-320a96 96 0 1 0 96 96 96 96 0 0 0-96-96z m0-320a96 96 0 1 0 96 96 96 96 0 0 0-96-96z m896 48H352a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32V176a32 32 0 0 0-32-32z m0 320H352a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m0 320H352a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z"
          p-id="69625"
        ></path>
      </svg>
    </div>
  );
};

export default UnorderedList;
