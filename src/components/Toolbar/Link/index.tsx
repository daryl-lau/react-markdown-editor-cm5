import React, { useContext, useState } from 'react';
import { EditorCtx } from '../editorCtx';
import Popover from '../../Popover';
import './index.css';

const Link = () => {
  const { insertText } = useContext(EditorCtx);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [address, setAddress] = useState('http://');
  const [title, setTitle] = useState('');

  const handleClick = () => {
    setPopoverVisible(false);
    const linkText = `[${title}](${address} "${title || 'title'}")`;
    insertText(linkText, false, false);
  };

  const profileContent = (
    <div style={{ color: '#666' }}>
      <div style={{ marginBottom: '10px' }}>
        <span>链接地址：</span>
        <input type="text" className="link-input" defaultValue={'http://'} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <span>链接标题：</span>
        <input type="text" className="link-input" onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div style={{ textAlign: 'right', marginTop: '10px' }}>
        <button className="button" onClick={handleClick}>
          确定
        </button>
      </div>
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
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="68011">
          <path
            d="M628.443079 395.560181c102.18185 102.18185 108.753841 264.573612 19.499972 374.319451-12.483982 15.459977-5.567992 7.729989-169.879751 172.039748-109.39184 109.39184-286.53158 109.48984-395.97942 0-109.42184-109.37984-109.46784-286.50958 0-395.97942 65.545904-65.545904 103.669848-103.797848 126.817814-126.913814 14.925978-14.903978 40.66194-4.707993 40.97194 16.383976a346.619492 346.619492 0 0 0 9.491986 75.655889c1.931997 8.057988-0.543999 16.537976-6.403991 22.395968L161.263764 625.139844c-65.509904 65.549904-65.773904 171.783748 0 237.599652 65.549904 65.509904 171.783748 65.773904 237.599652 0l150.379779-150.399779c65.435904-65.449904 65.553904-172.025748 0-237.579652a167.443755 167.443755 0 0 0-45.627933-32.457953c-9.245986-4.465993-14.363979-14.499979-13.12198-24.691964 2.711996-22.243967 12.591982-43.769936 29.629956-60.809911l8.749987-8.749987c7.249989-7.251989 18.353973-9.187987 27.51996-4.587993 25.997962 13.047981 50.373926 30.421955 72.049894 52.097924zM941.91462 82.08064c-109.44784-109.48984-286.58758-109.39184-395.97942 0-164.311759 164.311759-157.395769 156.579771-169.879751 172.039748-89.253869 109.745839-82.681879 272.137601 19.499972 374.319451 21.675968 21.675968 46.051933 39.049943 72.049894 52.097924 9.163987 4.599993 20.26797 2.661996 27.51996-4.587993l8.749987-8.749987c17.039975-17.037975 26.917961-38.565944 29.629956-60.809911 1.241998-10.191985-3.875994-20.22597-13.12198-24.691964a167.411755 167.411755 0 0 1-45.627933-32.457953c-65.553904-65.553904-65.435904-172.129748 0-237.579652l150.379779-150.399779c65.815904-65.773904 172.049748-65.509904 237.599652 0 65.773904 65.815904 65.509904 172.049748 0 237.599652l-91.695865 91.679865c-5.859991 5.857991-8.335988 14.337979-6.403991 22.395968a346.619492 346.619492 0 0 1 9.491986 75.655889c0.31 21.091969 26.045962 31.287954 40.97194 16.383976 23.147966-23.115966 61.27191-61.36791 126.817814-126.913814 109.46584-109.46984 109.41984-286.59958-0.002-395.98142z"
            p-id="68012"
          ></path>
        </svg>
      </div>
    </Popover>
  );
};

export default Link;
