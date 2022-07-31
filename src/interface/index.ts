import React, { Dispatch } from 'react';
import { EditorConfiguration, Editor } from 'codemirror';

export type toolbar =
  | 'bold'
  | 'checkList'
  | 'clear'
  | 'codeBlock'
  | 'dateTime'
  | 'dividing'
  | 'emoji'
  | 'fullScreen'
  | 'header'
  | 'help'
  | 'htmlEntities'
  | 'humpCase'
  | 'image'
  | 'inlineCode'
  | 'italic'
  | 'link'
  | 'lowerCase'
  | 'orderedList'
  | 'quote'
  | 'redo'
  | 'undo'
  | 'sub'
  | 'super'
  | 'table'
  | 'theme'
  | 'through'
  | 'toggleEditor'
  | 'unOrderedList'
  | 'upperCase';

export interface uploadImageMethod {
  (file: string | Blob, insertImageCallback: (fileName: string, imageUrl: string) => void): void;
}

export interface ToolbarProps {
  editorRef: React.MutableRefObject<Editor | undefined>;
  toggleEditor: () => void;
  toggleScreen: () => void;
  height: number;
  toolbars?: Array<toolbar>;
  uploadImageMethod?: uploadImageMethod;
}

export interface valueProps {
  mdValue: string;
  htmlValue: string;
}

export interface callbackFunction {
  (mdValue?: string, htmlValue?: string): void;
}

export interface MdEditorProps {
  width?: number | string;
  height?: number | string;
  toolBarHeight?: number;
  onSave?: callbackFunction;
  toolbars?: Array<toolbar>;
  initialValue: string;
  onChange?: callbackFunction;
  uploadImageMethod?: uploadImageMethod;
  style?: React.CSSProperties
}

export interface Config extends EditorConfiguration {
  singleCursorHeightPerLine?: boolean;
}

export interface MarkdownEditorProps {
  state: { mdValue: string; htmlValue: string };
  onScroll: () => void;
  onMouseEnter: () => void;
  editorRef: React.MutableRefObject<Editor | undefined>;
  onSave?: callbackFunction;
  dispatch: Dispatch<{ type: string; value: string }>;
}

export interface PannelProps {
  searchInput: string;
  editor: Editor;
  showPannel: any;
  setSearchInput: any;
}

export interface MarkdownParserProps {
  value: string;
  height: number;
  onScroll: () => void;
  onChange?: callbackFunction;
  onMouseEnter: () => void;
  dispatch: Dispatch<{ type: string; value: string }>;
}

export interface SqualProps {
  rowIndex: number;
  colIndex: number;
  onChange: (rowIndex: number, colIndex: number) => void;
  onClick: (rowIndex: number, colIndex: number) => void;
  isCovered: boolean;
}

export interface TableSelectorProps {
  row?: number;
  col?: number;
  onChange?: (rowIndex: number, colIndex: number) => void;
  onClick?: (rowIndex: number, colIndex: number) => void;
}
