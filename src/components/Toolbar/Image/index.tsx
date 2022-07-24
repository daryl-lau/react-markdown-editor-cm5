import React, { useContext, useState, useRef } from 'react';
import { EditorCtx } from '../index';
import Popover from '../../Popover';
import './index.css';

const Image = () => {
  const { editorRef, insertImage, uploadImageMethod } = useContext(EditorCtx);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [address, setAddress] = useState('http://');
  const [title, setTitle] = useState('');
  const fileRef = useRef<any>();

  const handleClick = () => {
    const cursor = editorRef.current.getCursor();
    setPopoverVisible(false);
    const linkText = `![${title}](${address} "${title || 'title'}")`;
    insertImage(linkText, cursor.line, cursor.ch);
  };

  const insertImageCallback = (fileName: string, imageUrl: string, line: number, ch: number) => {
    const linkText = `![${fileName || ''}](${imageUrl || ''} "${fileName || ''}")`;
    insertImage(linkText, line, ch);
  };

  const handleFileChange = () => {
    const file = fileRef.current.files[0];
    const cursor = editorRef.current.getCursor();
    uploadImageMethod(file, (fileName: string, imageUrl: string) => insertImageCallback(fileName, imageUrl, cursor.line, cursor.ch));
  };

  const profileContent = (
    <div style={{ color: '#666' }}>
      <div>
        <div className="title">添加图片链接</div>
        <div style={{ marginBottom: '10px' }}>
          <span>图片地址：</span>
          <input type="text" className="link-input" defaultValue={'http://'} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
          <span>图片标题：</span>
          <input type="text" className="link-input" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div style={{ textAlign: 'right', marginTop: '10px' }}>
          <button className="button" onClick={handleClick}>
            确定
          </button>
        </div>
      </div>
      {uploadImageMethod && (
        <div>
          <div className="title">从本地上传</div>
          <span className="file">
            <input type="file" id="file" ref={fileRef} onChange={handleFileChange} />
            <a>选择图片</a>
          </span>
        </div>
      )}
    </div>
  );

  const handleVisibleChange = (visible: boolean) => {
    setPopoverVisible(visible);
  };

  return (
    <Popover
      content={profileContent}
      transitionName="popover-fade"
      placement="bottom"
      trigger="hover"
      visible={popoverVisible}
      onVisibleChange={handleVisibleChange}
      overlayClassName="profile-popover-wrap"
      destroyTooltipOnHide
    >
      <div className="icon-wrapper">
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="67609">
          <path
            d="M896 64H128A64 64 0 0 0 64 128v768a64 64 0 0 0 64 64h768a64 64 0 0 0 64-64V128a64 64 0 0 0-64-64z m-32 800H160v-128h704z m0-224h-32l-194.14-242c-14.92-18.62-44.8-18.62-59.72 0l-126.76 158-66.1-91.56c-15.84-22-50.72-22-66.56 0L192 640H160V160h704zM352 352a64 64 0 1 0-64-64 64 64 0 0 0 64 64z"
            p-id="67610"
          ></path>
        </svg>
      </div>
    </Popover>
  );
};

export default Image;
