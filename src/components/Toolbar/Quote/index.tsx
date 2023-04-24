import { useContext } from 'react';
import { EditorCtx } from '../editorCtx';

const Quote = () => {
  const { insertText } = useContext(EditorCtx);

  const handleClick = () => {
    insertText('> ', false, true);
  };

  return (
    <div className="icon-wrapper" onClick={handleClick}>
      <svg className="icon" viewBox="0 0 1152 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="68418">
        <path
          d="M1008 448h-112v-16c0-44.2 35.8-80 80-80h16c53 0 96-43 96-96V160c0-53-43-96-96-96h-16c-203 0-368 165-368 368v384c0 79.4 64.6 144 144 144h256c79.4 0 144-64.6 144-144V592c0-79.4-64.6-144-144-144z m48 368c0 26.4-21.6 48-48 48H752c-26.4 0-48-21.6-48-48V432c0-150 122-272 272-272h16v96h-16c-97 0-176 79-176 176v112h208c26.4 0 48 21.6 48 48v224zM400 448h-112v-16c0-44.2 35.8-80 80-80h16c53 0 96-43 96-96V160c0-53-43-96-96-96h-16C165 64 0 229 0 432v384c0 79.4 64.6 144 144 144h256c79.4 0 144-64.6 144-144V592c0-79.4-64.6-144-144-144z m48 368c0 26.4-21.6 48-48 48H144c-26.4 0-48-21.6-48-48V432c0-150 122-272 272-272h16v96h-16c-97 0-176 79-176 176v112h208c26.4 0 48 21.6 48 48v224z"
          p-id="68419"
        ></path>
      </svg>
    </div>
  );
};

export default Quote;
