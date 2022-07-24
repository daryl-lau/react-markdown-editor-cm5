import React, { useState } from 'react';
import classNames from 'classnames';
import { SqualProps, TableSelectorProps } from '../../interface';
import './index.css';

const Squal: React.FC<SqualProps> = (props) => {
  const { rowIndex, colIndex, onChange, isCovered, onClick } = props;
  const classes = classNames('squal', { isCovered });
  return <div className={classes} onMouseEnter={(e) => onChange(rowIndex, colIndex)} onClick={(e) => onClick(rowIndex, colIndex)}></div>;
};

const TableSelector: React.FC<TableSelectorProps> = (props) => {
  const { row = 5, col = 5, onChange, onClick } = props;
  const [curSelected, setCurSelected] = useState<[number, number]>([0, 0]);
  const isCovered = (rowNumber: number, colNumber: number) => {
    const [rowIndex, colIndex] = curSelected;
    if (rowNumber + 1 <= rowIndex && colNumber + 1 <= colIndex) {
      return true;
    } else {
      return false;
    }
  };
  const handleChange = (rowIndex: number, colIndex: number) => {
    setCurSelected([rowIndex, colIndex]);
    onChange && onChange(rowIndex, colIndex);
  };

  const handleClick = (rowIndex: number, colIndex: number) => {
    onClick && onClick(rowIndex, colIndex);
  };

  return (
    <div>
      {Array.from({ length: row }, (v, k) => k).map((rowNumber) => (
        <div className="horizontal" key={rowNumber}>
          {Array.from({ length: col }, (v, k) => k).map((colNumber) => (
            <Squal
              isCovered={isCovered(rowNumber, colNumber)}
              key={`${rowNumber}-${colNumber}`}
              rowIndex={rowNumber + 1}
              colIndex={colNumber + 1}
              onChange={handleChange}
              onClick={handleClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableSelector;
