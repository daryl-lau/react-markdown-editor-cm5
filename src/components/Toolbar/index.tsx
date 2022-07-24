import React, { useImperativeHandle, useRef } from 'react';
import CodeMirror, { Pos } from 'codemirror';
import Undo from './Undo';
import Redo from './Redo';
import Bold from './Bold';
import Through from './Through';
import Italic from './Italic';
import UpperCase from './UpperCase';
import LowerCase from './LowerCase';
import HumpCase from './HumpCase';
import Quote from './Quote';
import Header from './Header';
import Dividing from './Dividing';
import UnorderedList from './UnorderedList';
import OrderedList from './OrderedList';
import Table from './Table';
import InlineCode from './InlineCode';
import Link from './Link';
import Sub from './Sub';
import Super from './Super';
import Emoji from './Emoji';
import CodeBlock from './CodeBlock';
import HtmlEntities from './HtmlEntities';
import DateTime from './DateTime';
import Theme from './Theme';
import CheckList from './CheckList';
import Clear from './Clear';
import ToggleEditor from './ToggleEditor';
import FullScreen from './FullScreen';
import Help from './Help';
import Image from './Image';
import './index.css';
import { ToolbarProps } from '../../interface';

const toolbarMap = {
  undo: <Undo />,
  redo: <Redo />,
  bold: <Bold />,
  through: <Through />,
  italic: <Italic />,
  upperCase: <UpperCase />,
  lowerCase: <LowerCase />,
  humpCase: <HumpCase />,
  quote: <Quote />,
  dividing: <Dividing />,
  unOrderedList: <UnorderedList />,
  orderedList: <OrderedList />,
  table: <Table />,
  inlineCode: <InlineCode />,
  link: <Link />,
  sub: <Sub />,
  super: <Super />,
  emoji: <Emoji />,
  codeBlock: <CodeBlock />,
  htmlEntities: <HtmlEntities />,
  dateTime: <DateTime />,
  theme: <Theme />,
  checkList: <CheckList />,
  clear: <Clear />,
  toggleEditor: <ToggleEditor />,
  fullScreen: <FullScreen />,
  help: <Help />,
  image: <Image />,
};

export const EditorCtx = React.createContext<any>(null);

const Toolbar = (props: ToolbarProps, ref: React.Ref<any>) => {
  const { editorRef, toggleEditor, height, toggleScreen, toolbars, uploadImageMethod } = props;
  const toolbarRef = useRef<any>();

  useImperativeHandle(ref, () => ({
    toolbarHeight: toolbarRef.current.getBoundingClientRect().height,
  }));

  // 切换文字前后缀，例如 **abc** <=> abc
  const wrapTextWith = (symbol: string) => {
    const editor = editorRef.current;
    if (!editor) {
      return CodeMirror.Pass;
    }
    if (!editor.getSelection()) {
      editor.focus();
      return CodeMirror.Pass;
    }
    const ranges = editor.listSelections();
    for (let i = 0; i < ranges.length; i++) {
      const range = ranges[i];
      const wrapSymbolLength = symbol.length;
      if (!range.empty()) {
        const from = range.from();
        const to = range.to();
        const prevLetter = editor.getRange({ ch: from.ch - wrapSymbolLength, line: from.line }, from);
        const nextLetter = editor.getRange(to, {
          ch: to.ch + wrapSymbolLength,
          line: to.line,
        });
        if (prevLetter === symbol && nextLetter === symbol) {
          const replaceFrom = {
            ch: from.ch - wrapSymbolLength,
            line: from.line,
          };
          const replaceTo = { ch: to.ch + wrapSymbolLength, line: to.line };
          const selection = editor.getRange(replaceFrom, replaceTo);
          const replaceSelection = selection.slice(wrapSymbolLength, selection.length - wrapSymbolLength);
          editor.replaceRange(replaceSelection, replaceFrom, replaceTo, '+input');
          const anchorIndex = editor.indexFromPos(ranges[i].anchor);
          const headIndex = editor.indexFromPos(ranges[i].head);
          if (anchorIndex > headIndex) {
            ranges[i].anchor.ch -= wrapSymbolLength;
            ranges[i].head.ch -= wrapSymbolLength;
          } else {
            if (from.line === to.line) {
              ranges[i].head.ch -= wrapSymbolLength;
            }
            ranges[i].anchor.ch -= wrapSymbolLength;
          }
        } else {
          const selection = editor.getRange(from, to);
          editor.replaceRange(symbol + selection + symbol, from, to, '+input');
          const anchorIndex = editor.indexFromPos(ranges[i].anchor);
          const headIndex = editor.indexFromPos(ranges[i].head);
          if (anchorIndex > headIndex) {
            ranges[i].anchor.ch += wrapSymbolLength;
            ranges[i].head.ch += wrapSymbolLength;
          } else {
            if (from.line === to.line) {
              ranges[i].head.ch += wrapSymbolLength;
            }
            ranges[i].anchor.ch += wrapSymbolLength;
          }
        }
        editor.setSelections(ranges);
      }
    }
  };

  // 大小写切换
  const switchTextCase = (type: string) => {
    const editor = editorRef.current;
    if (!editor) {
      return CodeMirror.Pass;
    }
    if (!editor.getSelection()) {
      editor.focus();
      return CodeMirror.Pass;
    }
    const ranges = editor.listSelections();
    for (let i = 0; i < ranges.length; i++) {
      const range = ranges[i];
      if (!range.empty()) {
        const from = range.from();
        const to = range.to();
        const selection = editor.getRange(from, to);
        let changedSelection = '';
        switch (type) {
          case 'upperCase':
            changedSelection = selection.toLocaleUpperCase();
            break;
          case 'lowerCase':
            changedSelection = selection.toLocaleLowerCase();
            break;
          case 'humpCase':
            changedSelection = selection[0].toLocaleUpperCase() + selection.slice(1, selection.length).toLocaleLowerCase();
            break;
        }
        editor.replaceRange(changedSelection, from, to, '+input');
        editor.setSelections(ranges);
      }
    }
  };

  // 添加文本
  const insertText = (text: string, isNewLine: boolean, isStart: boolean, focusStep: number) => {
    const editor = editorRef.current;
    if (!editor) {
      return CodeMirror.Pass;
    }
    const cursor = editor.getCursor();
    if (isStart) {
      const line = editor.getLine(cursor.line);
      if (line.startsWith(text)) {
        editor.replaceRange('', { ch: 0, line: cursor.line }, { ch: text.length, line: cursor.line });
      } else {
        editor.replaceRange(text, { ch: 0, line: cursor.line });
      }
    } else if (isNewLine) {
      const curLine = cursor.line;
      editor.replaceRange('\n' + text + '\n', Pos(curLine + 1, 0));
      editor.setCursor(Pos(curLine + focusStep, text.length));
    } else {
      editor.replaceRange(text, Pos(cursor.line, cursor.ch));
    }
    editor.focus();
  };

  const insertImage = (text: any, line: number, ch: number) => {
    const editor = editorRef.current;
    if (!editor) {
      return CodeMirror.Pass;
    }
    editor.replaceRange(text, Pos(line, ch));
  };

  return (
    <div ref={toolbarRef} className="Toolbar">
      <EditorCtx.Provider
        value={{
          editorRef,
          wrapTextWith,
          switchTextCase,
          insertText,
          toggleEditor,
          toggleScreen,
          insertImage,
          uploadImageMethod,
        }}
      >
        {toolbars &&
          toolbars.map((item) => {
            if (item === 'header') {
              return ['h1', 'h2', 'h3', 'h4'].map((header, index) => (
                <div key={`${item}-${index}`} style={{ height }}>
                  <Header key={index} name={header as 'h1'} />
                </div>
              ));
            }
            return (
              <div key={item} style={{ height }}>
                {toolbarMap[item]}
              </div>
            );
          })}
      </EditorCtx.Provider>
    </div>
  );
};

export default React.forwardRef(Toolbar);
