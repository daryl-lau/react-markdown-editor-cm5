import React, { useContext, useState } from 'react';
import { EditorCtx } from '../editorCtx';
import Popover from '../../Popover';
import TableSelector from '../../TableSelector';

const Table = () => {
  const { insertText } = useContext(EditorCtx);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [curSelected, setCurSelected] = useState<[number, number]>([0, 0]);
  const [alignType, setAlignType] = useState('left');

  const handleChange = (rowIndex: number, colIndex: number) => {
    setCurSelected([rowIndex, colIndex]);
  };

  const handleClick = (rowIndex: number, colIndex: number) => {
    setPopoverVisible(false);

    let table = '';
    const hrLine = '---';

    const alignSign: { [index: string]: string } = {
      justify: hrLine,
      left: ':' + hrLine,
      center: ':' + hrLine + ':',
      right: hrLine + ':',
    };

    if (rowIndex > 1 && colIndex > 0) {
      for (var r = 0, len = rowIndex; r < len; r++) {
        var row = [];
        var head = [];

        for (var c = 0, len2 = colIndex; c < len2; c++) {
          if (r === 1) {
            head.push(alignSign[alignType]);
          }
          row.push(' ');
        }
        if (r === 1) {
          table += '| ' + head.join(' | ') + ' |' + '\n';
        }

        table += '| ' + row.join(colIndex === 1 ? '' : ' | ') + ' |' + '\n';
      }
    } else {
      return;
    }
    insertText(table, true, false, 2);
  };

  const getAlignType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlignType(e.target.value);
  };

  const alignMap: { justify: JSX.Element; left: JSX.Element; center: JSX.Element; right: JSX.Element } = {
    justify: (
      <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6491">
        <path
          d="M928 848H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m0-256H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m0-256H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m0-256H96A32 32 0 0 0 64 112v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32V112a32 32 0 0 0-32-32z"
          p-id="6492"
        ></path>
      </svg>
    ),
    left: (
      <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6625">
        <path
          d="M89.66 688h524.68A25.64 25.64 0 0 0 640 662.34v-44.68A25.64 25.64 0 0 0 614.34 592H89.66A25.64 25.64 0 0 0 64 617.66v44.68A25.64 25.64 0 0 0 89.66 688z m0-512h524.68A25.64 25.64 0 0 0 640 150.34V105.66A25.64 25.64 0 0 0 614.34 80H89.66A25.64 25.64 0 0 0 64 105.66v44.68A25.64 25.64 0 0 0 89.66 176zM928 336H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m0 512H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z"
          p-id="6626"
        ></path>
      </svg>
    ),
    center: (
      <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6759">
        <path
          d="M280.2 176h463.62A24.18 24.18 0 0 0 768 151.8V104.18A24.18 24.18 0 0 0 743.82 80H280.2A24.18 24.18 0 0 0 256 104.18V151.8A24.2 24.2 0 0 0 280.2 176zM928 848H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m0-512H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m-184.18 352A24.18 24.18 0 0 0 768 663.8v-47.62A24.18 24.18 0 0 0 743.82 592H280.2A24.18 24.18 0 0 0 256 616.18v47.62a24.2 24.2 0 0 0 24.2 24.2z"
          p-id="6760"
        ></path>
      </svg>
    ),
    right: (
      <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6893">
        <path
          d="M96 432h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32z m832 416H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m6.34-768H409.66A25.64 25.64 0 0 0 384 105.66v44.68A25.64 25.64 0 0 0 409.66 176h524.68A25.64 25.64 0 0 0 960 150.34V105.66A25.64 25.64 0 0 0 934.34 80z m0 512H409.66A25.64 25.64 0 0 0 384 617.66v44.68A25.64 25.64 0 0 0 409.66 688h524.68A25.64 25.64 0 0 0 960 662.34v-44.68A25.64 25.64 0 0 0 934.34 592z"
          p-id="6894"
        ></path>
      </svg>
    ),
  };

  const profileContent = (
    <div style={{ color: '#666' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <div>对齐方式：</div>
        {['justify', 'left', 'center', 'right'].map((item) => {
          const ritem = item as 'justify' | 'left' | 'center' | 'right';
          return (
            <div style={{ display: 'flex', margin: '0 5px' }} key={item}>
              <input
                type="radio"
                name="type"
                value={item}
                id={item}
                defaultChecked={item === alignType}
                style={{ marginRight: '3px', cursor: 'pointer' }}
                onChange={(e) => getAlignType(e)}
              />
              <label htmlFor={item}>{alignMap[ritem]}</label>
            </div>
          );
        })}
      </div>
      <div>
        <div style={{ marginBottom: '5px' }}>
          <span>{`单元格数：${curSelected[0]} × ${curSelected[1]}`}</span>
        </div>
        <TableSelector row={6} col={11} onChange={handleChange} onClick={handleClick}></TableSelector>
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
    >
      <div className="icon-wrapper">
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="68954">
          <path
            d="M928 64H96C42.98 64 0 106.98 0 160v704c0 53.02 42.98 96 96 96h832c53.02 0 96-42.98 96-96V160c0-53.02-42.98-96-96-96zM464 864H108a12 12 0 0 1-12-12V592h368v272z m0-368H96V224h368v272z m452 368H560V592h368v260a12 12 0 0 1-12 12z m12-368H560V224h368v272z"
            p-id="68955"
          ></path>
        </svg>
      </div>
    </Popover>
  );
};

export default Table;
