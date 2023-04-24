import { useContext } from 'react';
import { EditorCtx } from '../editorCtx';

const Clear = () => {
  const { editorRef } = useContext(EditorCtx);

  const handleClick = () => {
    editorRef.current.setValue('');
  };

  return (
    <div className="icon-wrapper" onClick={handleClick}>
      <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7265">
        <path
          d="M995.88 547.88a96 96 0 0 0 0-135.76l-320-320a96 96 0 0 0-135.76 0l-512 512a96 96 0 0 0 0 135.76l192 192A96 96 0 0 0 288 960h712a24 24 0 0 0 24-24v-48a24 24 0 0 0-24-24H679.76l316.12-316.12zM608 160l320 320-206 206-320-320zM288 864l-192-192 238-238 320 320-110 110z"
          p-id="7266"
        ></path>
      </svg>
    </div>
  );
};

export default Clear;
