import { useState } from 'react';
import Popover from '../../Popover';
import './index.css';

const Help = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const keyMap = [
    { keymap: 'Ctrl + S', desc: '保存' },
    { keymap: 'Ctrl + A', desc: '全选' },
    { keymap: 'Ctrl + F', desc: '搜索面板' },
    { keymap: 'Ctrl + Z', desc: '撤销' },
    { keymap: 'Ctrl + Shift + Z', desc: '重做' },
    { keymap: 'Ctrl + D', desc: '删除当前行' },
    { keymap: 'Ctrl + Down', desc: '向下复制当前行' },
    { keymap: 'Alt + Down', desc: '当前行下移' },
    { keymap: 'Alt + Up', desc: '当前行上移' },
    { keymap: 'Shift + Up/Down/Left/Right', desc: '选择文本' },
    { keymap: 'Ctrl + Up/Down/Left/Right', desc: '按单词移动光标' },
    { keymap: 'Alt + Left/Right', desc: '移动光标到当前行头/尾' },
    { keymap: 'Alt + Shift + Left/Right', desc: '选择文本到当前行头/尾' },
    { keymap: 'Ctrl + Home', desc: '跳转到第一行' },
    { keymap: 'Ctrl + End', desc: '跳转到最后一行' },
  ];

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
          {keyMap.map((item) => (
            <tr key={item.keymap}>
              <td style={{ textAlign: 'left' }}>{item.keymap}</td>
              <td style={{ textAlign: 'left' }}>{item.desc}</td>
            </tr>
          ))}
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
