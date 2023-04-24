import { useContext } from 'react';
import { EditorCtx } from '../editorCtx';

const CheckList = () => {
  const { insertText } = useContext(EditorCtx);

  const handleClick = () => {
    const ul = `- [ ] list1\n- [x] list2\n`;
    insertText(ul, true, false, 2);
  };

  return (
    <div className="icon-wrapper" onClick={handleClick}>
      <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7131">
        <path
          d="M752 720H464c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16z m-464 112h64c17.6 0 32-14.4 32-32v-64c0-17.6-14.4-32-32-32h-64c-17.6 0-32 14.4-32 32v64c0 17.6 14.4 32 32 32z m0-512h64c17.6 0 32-14.4 32-32v-64c0-17.6-14.4-32-32-32h-64c-17.6 0-32 14.4-32 32v64c0 17.6 14.4 32 32 32z m176-16h288c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H464c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16zM896 0H128C92.6 0 64 28.6 64 64v896c0 35.4 28.6 64 64 64h768c35.4 0 64-28.6 64-64V64c0-35.4-28.6-64-64-64z m-32 928H160V96h704v832zM333.2 572.8c4.2 4.2 11 4.2 15.2 0l128.4-127.2c4.2-4.2 4.2-11 0-15.2l-25.2-25.4c-4.2-4.2-11-4.2-15.2 0l-95.2 94.4-41.2-41.8c-4.2-4.2-11-4.2-15.2 0l-25.4 25.2c-4.2 4.2-4.2 11 0 15.2l73.8 74.8zM752 464H538.8c-3.8 10-9.2 19.4-17 27L452.4 560H752c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16z"
          p-id="7132"
        ></path>
      </svg>
    </div>
  );
};

export default CheckList;
