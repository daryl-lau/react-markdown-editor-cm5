import { EditorConfiguration } from 'codemirror';

declare type toolbar =
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

declare interface uploadImageMethod {
  (file: string | Blob, insertImageCallback: (fileName: string, imageUrl: string) => void): void;
}

declare interface callbackFunction {
  (markdown?: string, toc?: string): void;
}

export interface Options extends EditorConfiguration {
  singleCursorHeightPerLine?: boolean;
  languages?: string[];
}

declare interface MdEditorProps {
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
  options?: Options;
}

declare function MdEditor(props: MdEditorProps): any;
export default MdEditor;
