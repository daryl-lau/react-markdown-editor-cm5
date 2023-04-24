import { useContext } from 'react';
import { EditorCtx } from '../editorCtx';

const ToggleEditor = () => {
  const { toggleEditor } = useContext(EditorCtx);

  const handleClick = () => {
    toggleEditor();
  };

  return (
    <div className="icon-wrapper" onClick={handleClick}>
      <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="69490">
        <path
          d="M928 64H96C42.98 64 0 106.98 0 160v704c0 53.02 42.98 96 96 96h832c53.02 0 96-42.98 96-96V160c0-53.02-42.98-96-96-96zM464 864H108a12 12 0 0 1-12-12V224h368v640z m452 0H560V224h368v628a12 12 0 0 1-12 12z"
          p-id="69491"
        ></path>
      </svg>
    </div>
  );
};

export default ToggleEditor;
