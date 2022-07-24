import React, { useState } from 'react';
import Popover from '../../Popover';
import './index.css';

const Help = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);

  const profileContent = (
    <div className="help" style={{ color: '#666' }}>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>快捷键</th>
            <th style={{ textAlign: 'left' }}>功能</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'left' }}>Ctrl + S</td>
            <td style={{ textAlign: 'left' }}>保存</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Ctrl + A</td>
            <td style={{ textAlign: 'left' }}>全选</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Ctrl + F</td>
            <td style={{ textAlign: 'left' }}>搜索面板</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Ctrl + Z</td>
            <td style={{ textAlign: 'left' }}>撤销</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Ctrl + Shift + Z</td>
            <td style={{ textAlign: 'left' }}>重做</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Ctrl + D</td>
            <td style={{ textAlign: 'left' }}>删除当前行</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Ctrl + Down</td>
            <td style={{ textAlign: 'left' }}>向下复制当前行</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Alt + Down</td>
            <td style={{ textAlign: 'left' }}>当前行下移</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Alt + Up</td>
            <td style={{ textAlign: 'left' }}>当前行上移</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Shift + Up/Down/Left/Right</td>
            <td style={{ textAlign: 'left' }}>选择文本</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Ctrl + Up/Down/Left/Right</td>
            <td style={{ textAlign: 'left' }}>按单词移动光标</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Alt + Left/Right</td>
            <td style={{ textAlign: 'left' }}>移动光标到当前行头/尾</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Alt + Shift + Left/Right</td>
            <td style={{ textAlign: 'left' }}>选择文本到当前行头/尾</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Ctrl + Home</td>
            <td style={{ textAlign: 'left' }}>跳转到第一行</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Ctrl + End</td>
            <td style={{ textAlign: 'left' }}>跳转到最后一行</td>
          </tr>
        </tbody>
      </table>
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
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="67073">
          <path
            d="M512 16C238.086 16 16 238.166 16 512c0 273.994 222.086 496 496 496s496-222.006 496-496C1008 238.166 785.914 16 512 16z m0 896c-221.064 0-400-178.862-400-400 0-220.99 178.944-400 400-400 220.982 0 400 178.942 400 400 0 221.06-178.862 400-400 400z m0-676c46.392 0 84 37.608 84 84s-37.608 84-84 84-84-37.608-84-84 37.608-84 84-84z m112 508c0 13.254-10.746 24-24 24h-176c-13.254 0-24-10.746-24-24v-48c0-13.254 10.746-24 24-24h24v-128h-24c-13.254 0-24-10.746-24-24v-48c0-13.254 10.746-24 24-24h128c13.254 0 24 10.746 24 24v200h24c13.254 0 24 10.746 24 24v48z"
            p-id="67074"
          ></path>
        </svg>
      </div>
    </Popover>
  );
};

export default Help;
