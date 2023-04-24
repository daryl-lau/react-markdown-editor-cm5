/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { searchOverlay, parseStr } from '../../utils/utils';
import { Position } from 'codemirror';
import { PannelProps } from '../../interface';

const Pannel: React.FC<PannelProps> = (props) => {
  let { searchInput, editor: edit, showPannel, setSearchInput } = props;

  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchCursor, setSearchCursor] = useState<any>();
  const [overlay, setOverlay] = useState<any>();
  const [annotate, setAnnotate] = useState<any>();
  const [query, setQuery] = useState<any>();
  const [replaceInput, setReplaceInput] = useState('');
  const [isRegExp, setRegExp] = useState<Boolean>(false);
  const [isCaseSensitive, setCaseSensitive] = useState<boolean>(false);

  let editor: any = edit;

  const startSearch = () => {
    setOverlay(searchOverlay(parseSearchInput(searchInput), isCaseSensitive));
    const queryStr = parseSearchInput(searchInput);
    setQuery(queryStr);
  };

  useEffect(() => {
    if (editor.showMatchesOnScrollbar && query) {
      if (annotate) {
        annotate.clear();
      }
      setAnnotate(editor.showMatchesOnScrollbar(query));
    }
  }, [query]);

  const parseSearchInput = (query: any) => {
    if (!query) {
      return '';
    }

    let reg;
    try {
      if (isRegExp) {
        reg = new RegExp(query, isCaseSensitive ? 'g' : 'gi');
      } else {
        reg = new RegExp(parseStr(query), isCaseSensitive ? 'g' : 'gi');
      }
    } catch (error) {}

    return reg || '';
  };

  useEffect(() => {
    if (overlay) {
      editor.addOverlay(overlay);
    }
  }, [overlay, editor]);

  const clearSearch = () => {
    if (searchCursor) {
      setSearchCursor(undefined);
    }
    editor.operation(function () {
      editor.removeOverlay(overlay);
    });
    if (annotate) {
      annotate.clear();
      setAnnotate(null);
    }
  };

  const initCursor = () => {
    let cursor = editor.getSearchCursor(parseSearchInput(searchInput), {
      line: 0,
      ch: 0,
    });
    let result = cursor.findNext();
    if (result) {
      editor.setSelection(cursor?.from() as Position, cursor?.to());
      editor.scrollIntoView({ from: cursor.from(), to: cursor.to() }, 100);
    }
    setSearchCursor(cursor);
  };

  useEffect(() => {
    searchInputRef.current?.focus();

    // searchInput为空时特殊处理
    if (!searchInput) {
      clearSearch();
      return;
    }

    const current = editor.getCursor();
    let cursor;
    cursor = editor.getSearchCursor(parseSearchInput(searchInput), {
      line: current.line,
      ch: current.ch - searchInput.length,
    });
    let result = cursor.findNext();
    if (result) {
      editor.setSelection(cursor?.from() as Position, cursor?.to());
      editor.scrollIntoView({ from: cursor.from(), to: cursor.to() }, 40);
    } else {
      cursor = editor.getSearchCursor(parseSearchInput(searchInput), {
        line: 0,
        ch: 0,
      });
      let result = cursor.findNext();
      if (result) {
        editor.setSelection(cursor?.from() as Position, cursor?.to());
        editor.scrollIntoView({ from: cursor.from(), to: cursor.to() }, 40);
      }
    }
    setSearchCursor(cursor);
    clearSearch();
    startSearch();
  }, [searchInput, editor]);

  const handleFindPrev = () => {
    let result = searchCursor?.findPrevious();
    if (!result) {
      initCursor();
      return;
    }
    editor.setSelection(searchCursor?.from() as Position, searchCursor?.to());
    editor.scrollIntoView(
      {
        from: searchCursor?.from() as Position,
        to: searchCursor?.to() as Position,
      },
      40,
    );
  };

  const hanldeFindNext = () => {
    let result = searchCursor?.findNext();
    if (!result) {
      initCursor();
      return;
    }
    editor.setSelection(searchCursor?.from() as Position, searchCursor?.to());
    editor.scrollIntoView(
      {
        from: searchCursor?.from() as Position,
        to: searchCursor?.to() as Position,
      },
      40,
    );
  };

  const closePannel = () => {
    clearSearch();
    showPannel(false);
  };

  // 单个替换
  const handleReplace = () => {
    if (editor.getOption('readOnly')) return;
    if (!replaceInput) return;
    searchCursor?.replace(replaceInput);
    let result = searchCursor?.findNext();
    if (result) {
      editor.setSelection(searchCursor?.from() as Position, searchCursor?.to());
      editor.scrollIntoView(
        {
          from: searchCursor?.from() as Position,
          to: searchCursor?.to() as Position,
        },
        100,
      );
    }
  };

  // 替换所有
  const handleReplaceAll = () => {
    for (var cursor = editor.getSearchCursor(parseSearchInput(searchInput)); cursor.findNext(); ) {
      if (typeof searchInput != 'string') {
      } else cursor.replace(replaceInput);
    }
  };

  const replaceInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReplaceInput(e.target.value);
  };

  const searchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    clearSearch();
    if (!searchInput) {
      startSearch();
    }
  };
  const handleUseRegExp = () => {
    setRegExp((reg) => !reg);
  };

  const handleUseCase = () => {
    setCaseSensitive((isCaseSensitive) => !isCaseSensitive);
  };

  useEffect(() => {
    clearSearch();
    if (query) {
      startSearch();
      initCursor();
    }
  }, [isCaseSensitive, isRegExp]);

  return (
    <div className="search-replace-pannel">
      <div className="search">
        <div className="search-input">
          <input ref={searchInputRef} type="text" value={searchInput} onChange={(e) => searchInputChange(e)} />
        </div>
        <div className="button-group">
          <button onClick={handleUseRegExp} style={{ color: isRegExp ? '#e45649' : '' }}>
            .*
          </button>
          <button onClick={handleUseCase} style={{ color: isCaseSensitive ? '#e45649' : '' }}>
            Aa
          </button>
          <button onClick={handleFindPrev}>↑</button>
          <button onClick={hanldeFindNext}>↓</button>
          <button onClick={closePannel}>×</button>
        </div>
      </div>
      <div className="replace">
        <div className="replace-input">
          <input type="text" value={replaceInput} onChange={(e) => replaceInputChange(e)} />
          <div className="button-group">
            <button onClick={handleReplace}>replace</button>
            <button onClick={handleReplaceAll}>replace all</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pannel;
