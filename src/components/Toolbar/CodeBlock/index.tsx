import React, { useContext, useState } from 'react';
import { EditorCtx } from '../index';
import Popover from '../../Popover';
import './index.css';

const languages = ['javascript', 'typescript', 'go', 'python', 'jsx', 'tsx', 'markmap'];

const CodeBlock = () => {
  const { insertText } = useContext(EditorCtx);
  const [popoverVisible, setPopoverVisible] = useState(false);

  const handleClick = (lang: string) => {
    setPopoverVisible(false);
    const codeBlockText = `\`\`\`${lang}\n\n\`\`\`\n`;
    insertText(codeBlockText, true, false, 3);
  };

  const profileContent = (
    <div>
      {languages.map((lang) => (
        <div className="lang-button" key={lang} onClick={() => handleClick(lang)}>
          {lang}
        </div>
      ))}
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
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7399">
          <path
            d="M427.741457 698.26362l-0.399922-0.399922-65.58719-57.788713 65.58719-57.788713c7.198594-6.39875 7.998438-17.596563 1.599687-24.795157l-0.399921-0.399922-34.793205-37.192736c-6.798672-7.198594-17.996485-7.398555-24.795157-0.799843l-115.377465 108.178871c-7.398555 6.998633-7.398555 18.796329 0 25.595001l115.377465 108.178871c3.199375 2.999414 7.598516 4.799063 11.997657 4.799063 4.799063 0 9.598125-1.999609 12.7975-5.598907l34.793205-37.192735c6.598711-6.998633 6.198789-18.196446-0.799844-24.795158z m439.914079-502.301894L699.888303 28.194493C681.891818 10.198008 657.496583 0 632.101543 0H223.981254C170.991603 0.199961 128 43.191564 128 96.181215v831.837531c0 52.98965 42.991603 95.981254 95.981254 95.981254h575.887522c52.98965 0 95.981254-42.991603 95.981253-95.981254V263.948448c0-25.39504-10.198008-49.990236-28.194493-67.986722zM639.90002 103.979691l152.170279 152.17028H639.90002zM799.868776 928.018746H223.981254V96.181215h319.937512v207.959383c0 26.594806 21.395821 47.990627 47.990627 47.990626h207.959383zM547.118141 428.116384c-9.398164-2.799453-18.99629 2.599492-21.795743 11.997656L415.943761 816.240578c-2.799453 9.398164 2.599492 19.196251 11.997657 21.795743l48.79047 14.197227c9.398164 2.799453 19.196251-2.799453 21.795743-11.997657L607.906268 463.909393c2.799453-9.398164-2.599492-19.196251-11.997656-21.795743z m48.990432 153.769966l0.399921 0.399922 65.58719 57.788713-65.58719 57.788713c-7.198594 6.39875-7.998438 17.596563-1.599687 24.795158l0.399922 0.399922 34.793204 37.192735c6.598711 6.998633 17.796524 7.398555 24.795157 0.799844l115.377466-108.178871c7.398555-6.998633 7.398555-18.796329 0-25.595001l-115.377466-108.178871c-6.998633-6.598711-18.196446-6.39875-24.795157 0.799843l-34.793204 37.192736c-6.598711 6.998633-6.198789 18.196446 0.799844 24.795157z"
            p-id="7400"
          ></path>
        </svg>
      </div>
    </Popover>
  );
};

export default CodeBlock;
