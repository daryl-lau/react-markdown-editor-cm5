import React, { useContext, useState } from 'react';
import { EditorCtx } from '../editorCtx';
import Popover from '../../Popover';
import htmlEntitiesJson from './data/full.json';
import './index.css';

const htmlJson: Array<{ name: string; description: string }> = htmlEntitiesJson;

const HtmlEntities = () => {
  const { insertText } = useContext(EditorCtx);
  const [popoverVisible, setPopoverVisible] = useState(false);

  const handleClick = (htmlEntity: string) => {
    setPopoverVisible(false);
    insertText(htmlEntity, false, false);
  };

  const profileContent = (
    <div className="html-container">
      {htmlJson.map((entity, index) => {
        const name = entity.name.replace('&amp;', '&');
        return (
          <div className="html-entity" key={`${name}-${index}`} onClick={() => handleClick(name)} dangerouslySetInnerHTML={{ __html: name }}></div>
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
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="67207">
          <path
            d="M512 16C238.066 16 16 238.066 16 512s222.066 496 496 496 496-222.066 496-496S785.934 16 512 16z m0 896c-221.064 0-400-178.902-400-400 0-221.062 178.902-400 400-400 221.064 0 400 178.902 400 400 0 221.064-178.902 400-400 400z m214.702-202.128c-19.228 19.424-91.06 82.792-208.13 82.792-164.86 0-280.968-122.85-280.968-283.134 0-158.304 120.55-278.802 279.524-278.802 111.062 0 177.476 53.24 195.186 69.558a23.93 23.93 0 0 1 3.872 30.644l-36.31 56.226c-7.682 11.9-23.932 14.564-34.998 5.842-17.19-13.552-63.628-45.076-123.416-45.076-96.606 0-155.832 70.66-155.832 160.164 0 83.178 53.776 167.384 156.554 167.384 65.314 0 113.686-38.078 131.452-54.45 10.54-9.714 27.192-8.078 35.64 3.476l39.73 54.34a23.894 23.894 0 0 1-2.304 31.036z"
            p-id="67208"
          ></path>
        </svg>
      </div>
    </Popover>
  );
};

export default HtmlEntities;
