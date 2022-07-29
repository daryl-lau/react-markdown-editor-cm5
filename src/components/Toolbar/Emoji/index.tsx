import React, { useContext, useState } from 'react';
import { EditorCtx } from '../editorCtx';
import Popover from '../../Popover';
import lightJson from './data/light.json';
import './index.css';

const emojiJson: { [index: string]: string } = lightJson;

const Emoji = () => {
  const { insertText } = useContext(EditorCtx);
  const [popoverVisible, setPopoverVisible] = useState(false);

  const handleClick = (emoji: string) => {
    setPopoverVisible(false);
    const linkText = `:${emoji}:`;
    insertText(linkText, false, false);
  };

  const profileContent = (
    <div className="emoji-container">
      {Object.keys(lightJson).map((emoji) => {
        return (
          <div className="emoji" key={emoji} onClick={() => handleClick(emoji)}>
            {emojiJson[emoji]}
          </div>
        );
      })}
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
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7801">
          <path
            d="M512 16C238 16 16 238 16 512s222 496 496 496 496-222 496-496S786 16 512 16z m282.8 778.8c-75.6 75.6-176 117.2-282.8 117.2s-207.2-41.6-282.8-117.2S112 618.8 112 512s41.6-207.2 117.2-282.8S405.2 112 512 112s207.2 41.6 282.8 117.2S912 405.2 912 512s-41.6 207.2-117.2 282.8zM672 448c35.4 0 64-28.6 64-64s-28.6-64-64-64-64 28.6-64 64 28.6 64 64 64z m-320 0c35.4 0 64-28.6 64-64s-28.6-64-64-64-64 28.6-64 64 28.6 64 64 64z m388.8 128H283.2c-16.4 0-29 14-27 30 15 118.4 117.8 210 242.2 210h27.2c124.4 0 227.2-91.6 242.2-210 2-16-10.6-30-27-30z"
            p-id="7802"
          ></path>
        </svg>
      </div>
    </Popover>
  );
};

export default Emoji;
