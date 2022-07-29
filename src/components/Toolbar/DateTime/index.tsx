import React, { useContext } from 'react';
import { EditorCtx } from '../editorCtx';
import Dayjs from 'dayjs';

const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

const DateTime = () => {
  const { insertText } = useContext(EditorCtx);

  const handleClick = () => {
    const time = `${Dayjs().format('YYYY-MM-DD HH:mm:ss')} ${week[Dayjs().day()]}`;
    insertText(time, false, false);
  };

  return (
    <div className="icon-wrapper" onClick={handleClick}>
      <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7533">
        <path
          d="M512 16C238 16 16 238 16 512s222 496 496 496 496-222 496-496S786 16 512 16z m0 896c-221 0-400-179-400-400S291 112 512 112s400 179 400 400-179 400-400 400z m123.6-208.8l-169.8-123.4c-6.2-4.6-9.8-11.8-9.8-19.4V232c0-13.2 10.8-24 24-24h64c13.2 0 24 10.8 24 24v283.4l133.6 97.2c10.8 7.8 13 22.8 5.2 33.6L669.2 698c-7.8 10.6-22.8 13-33.6 5.2z"
          p-id="7534"
        ></path>
      </svg>
    </div>
  );
};

export default DateTime;
