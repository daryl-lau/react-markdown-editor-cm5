import React, { Dispatch } from 'react';
import { EditorConfiguration, Editor } from 'codemirror';

export type toolbar =
  | 'bold'
  | 'checkList'
  | 'clear'
  | 'mark'
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
  (file: File | null, insertImageCallback: (fileName: string, imageUrl: string) => void): void;
}

export interface ToolbarProps {
  editorRef: React.MutableRefObject<Editor | undefined>;
  toggleEditor: () => void;
  toggleScreen: () => void;
  height: number;
  toolbars?: Array<toolbar>;
  uploadImageMethod?: uploadImageMethod;
  languages?: string[];
}

export interface valueProps {
  mdValue: string;
  htmlValue: string;
  tocValue: string;
}

export interface callbackFunction {
  (mdValue?: string, htmlValue?: string, tocValue?: string): void;
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
  style?: React.CSSProperties;
  withToc?: boolean;
  ref?: React.MutableRefObject<any>;
  options: Options;
}

export interface themeOption {
  dark?: string;
  light?: string;
}

export interface Options extends EditorConfiguration {
  singleCursorHeightPerLine?: boolean;
  languages?: string[];
}

export interface MarkdownEditorProps {
  state: { mdValue: string; htmlValue: string };
  onScroll: () => void;
  onMouseEnter: () => void;
  editorRef: React.MutableRefObject<Editor | undefined>;
  onSave?: callbackFunction;
  dispatch: Dispatch<{ type: string; value: string }>;
  uploadImageMethod?: uploadImageMethod;
  initialValue: string;
  languages?: string[];
  options: Options;
}

export interface PannelProps {
  searchInput: string;
  editor: Editor;
  showPannel: any;
  setSearchInput: any;
}

export interface MarkdownParserProps {
  state: valueProps;
  height: number;
  onScroll: () => void;
  onChange?: callbackFunction;
  onMouseEnter: () => void;
  dispatch: Dispatch<{ type: string; value: string }>;
  toolBarHeight: number;
  withToc?: boolean;
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
