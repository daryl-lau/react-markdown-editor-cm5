import React, { useEffect, useReducer, useRef, useState } from 'react';
import $ from 'jquery';
import { Resizable, Size } from 're-resizable';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownParser from './components/MarkdownParser';
import Toolbar from './components/Toolbar';
import './index.css';
import { debounce } from 'lodash';
import { Editor } from 'codemirror';
import classNames from 'classnames';
import { MdEditorProps, toolbar, valueProps } from './interface';

const reducer = (state: valueProps, payload: { type: string; value: string }) => {
  switch (payload.type) {
    case 'setMdValue':
      return { ...state, mdValue: payload.value };
    case 'setHtmlValue':
      return { ...state, htmlValue: payload.value };
    default:
      throw new Error();
  }
};

const init = (value: string) => {
  return { mdValue: value, htmlValue: '' };
};

const defaultToolbar: Array<toolbar> = [
  'undo',
  'redo',
  'bold',
  'through',
  'italic',
  'upperCase',
  'humpCase',
  'lowerCase',
  'sub',
  'super',
  'inlineCode',
  'quote',
  'header',
  'unOrderedList',
  'orderedList',
  'checkList',
  'dividing',
  'table',
  'link',
  'image',
  'codeBlock',
  'emoji',
  'htmlEntities',
  'dateTime',
  'clear',
  'theme',
  'toggleEditor',
  'fullScreen',
  'help',
];

const MdEditor: React.FC<MdEditorProps> = (props) => {
  const {
    width = '100%',
    height: warpHeight = 800,
    toolBarHeight = 34,
    onSave,
    toolbars = defaultToolbar,
    value,
    onChange,
    uploadImageMethod,
  } = props;
  const [state, dispatch] = useReducer(reducer, value, init);
  const editorRef = useRef<Editor>();
  const parserRef = useRef<any>();
  const toolbarRef = useRef<any>();
  const resizableRef = useRef<any>();
  const syncParserScrollRef = useRef<any>();
  const scrollFlag = useRef<string>('');
  const [isEditorShow, setEditorShow] = useState<boolean>(true);
  const [parserHeight, setParserHeight] = useState(() => {
    return warpHeight - toolBarHeight;
  });
  const [isFullScreen, setFullScreen] = useState<boolean>(false);

  const buildScrollMap = (value: string): { [index: number]: string } | undefined => {
    if (!editorRef.current) {
      return;
    }
    let offset: number, nonEmptyList, lineHeightMap: number[], acc: number, _scrollMap, linesCount, i, pos, a, b;
    offset = parserRef.current.getScrollTop() - parserRef.current.getOffsetTop();
    _scrollMap = [];
    nonEmptyList = [];
    lineHeightMap = [];
    acc = 0;

    const valueLines = value.split('\n');
    const lineHeight = editorRef.current?.defaultTextHeight();
    for (i = 0; i < valueLines.length; i++) {
      const str = valueLines[i];

      lineHeightMap.push(acc);

      if (str.length === 0) {
        acc++;
        continue;
      }

      const h = editorRef.current?.heightAtLine(i + 1) - editorRef.current?.heightAtLine(i);
      acc += Math.round(h / lineHeight);
    }
    lineHeightMap.push(acc);
    linesCount = acc;
    for (i = 0; i < linesCount; i++) {
      _scrollMap.push(-1);
    }
    nonEmptyList.push(0);
    _scrollMap[0] = 0;

    const lines = parserRef.current.getLines();
    lines.forEach((item: any) => {
      let t = item.dataset.line;
      if (t === '') {
        return;
      }
      t = lineHeightMap[t];
      if (t !== 0) {
        nonEmptyList.push(t);
      }
      _scrollMap[t] = Math.round(item.getBoundingClientRect().top + offset - 10);
    });

    nonEmptyList.push(linesCount);
    _scrollMap[linesCount] = parserRef.current.getScrollHeight();

    pos = 0;
    for (i = 1; i < linesCount; i++) {
      if (_scrollMap[i] !== -1) {
        pos++;
        continue;
      }
      a = nonEmptyList[pos];
      b = nonEmptyList[pos + 1];
      _scrollMap[i] = Math.round((_scrollMap[b] * (i - a) + _scrollMap[a] * (b - i)) / (b - a));
    }

    return _scrollMap;
  };

  useEffect(() => {
    syncParserScrollRef.current = debounce(
      () => {
        if (scrollFlag.current !== 'editor' || !editorRef.current) return;
        let scrollMap = buildScrollMap(state.mdValue);
        let lineHeight = editorRef.current?.defaultTextHeight(),
          lineNo: number,
          posTo: any;
        lineNo = Math.floor(editorRef.current?.getScrollInfo().top / lineHeight);
        posTo = scrollMap && scrollMap[lineNo];
        parserRef.current.scrollTo(posTo);
      },
      50,
      { maxWait: 50 },
    );
  }, [state.mdValue]);

  const syncEditorScroll = debounce(
    () => {
      if (scrollFlag.current !== 'parser' || !editorRef.current) return;
      let scrollMap = buildScrollMap(state.mdValue);
      if (!scrollMap) {
        return;
      }
      let scrollTop = parserRef.current.getScrollTop(),
        lineHeight = parseFloat(String(editorRef.current?.defaultTextHeight())),
        lines,
        i,
        line;
      lines = Object.keys(scrollMap);
      if (lines.length < 1) {
        return;
      }
      line = lines[0];
      for (i = 1; i < lines.length; i++) {
        if (scrollMap[Number(lines[i])] < scrollTop) {
          line = lines[i];
          continue;
        }
        break;
      }
      $('.CodeMirror-scroll')
        .stop(true)
        .animate(
          {
            scrollTop: lineHeight * Number(line),
          },
          100,
          'linear',
        );
    },
    50,
    { maxWait: 50 },
  );

  const toggleEditor = () => {
    setEditorShow((show) => !show);
  };

  const toggleScreen = () => {
    setFullScreen((f) => !f);
  };

  useEffect(() => {
    const toolbarHeight = toolbarRef.current.toolbarHeight;
    const height = isFullScreen ? document.documentElement.clientHeight - toolbarHeight : warpHeight - toolbarHeight;
    resizableRef.current.updateSize({ width: '50%', height });
    setParserHeight(height);
  }, [isFullScreen]);

  const classes = classNames(isEditorShow ? '' : 'hide-editor');

  const editorClasses = classNames('MdEditor', { 'full-screen': isFullScreen });

  return (
    <div className={editorClasses} style={{ width }}>
      {toolbars && toolbars.length > 0 && (
        <Toolbar
          ref={toolbarRef}
          editorRef={editorRef}
          toggleEditor={toggleEditor}
          toggleScreen={toggleScreen}
          height={toolBarHeight}
          toolbars={toolbars}
          uploadImageMethod={uploadImageMethod}
        ></Toolbar>
      )}

      <div
        style={{
          width: '100%',
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        <Resizable
          ref={resizableRef}
          className={classes}
          maxWidth="60%"
          minWidth="20%"
          handleStyles={{ right: { boxShadow: '6px 0px 6px #e7e7e7' } }}
        >
          <MarkdownEditor
            editorRef={editorRef}
            state={state}
            dispatch={dispatch}
            onScroll={() => {
              syncParserScrollRef.current();
            }}
            onMouseEnter={() => {
              scrollFlag.current = 'editor';
            }}
            onSave={onSave}
          />
        </Resizable>
        <div style={{ width: '100%', minWidth: '1px' }}>
          <MarkdownParser
            height={parserHeight || 800}
            ref={parserRef}
            value={state.mdValue}
            dispatch={dispatch}
            onScroll={() => {
              syncEditorScroll();
            }}
            onChange={onChange}
            onMouseEnter={() => {
              scrollFlag.current = 'parser';
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MdEditor;
