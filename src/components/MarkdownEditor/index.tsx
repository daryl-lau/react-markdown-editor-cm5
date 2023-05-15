import React, { useEffect, useRef, useState } from 'react';
import CodeMirror, { Editor, EditorConfiguration, Pos } from 'codemirror';
import Pannel from './pannel';
import hints from './hints';
import 'codemirror/lib/codemirror.css';
import './theme/atom-light.css';
import './theme/atom-dark.css';
import './theme/basic.css';
import { Options, MarkdownEditorProps } from '../../interface';

const defaultOptions = {
  placeholder: 'write somthing...',
  mode: 'gfm',
  lineNumbers: true, // 是否显示行号
  theme: 'atom-dark', // 主题
  tabSize: 4, // 默认4
  indentUnit: 4, // 代码块中换行缩进大小
  matchBrackets: true, // 括号匹配
  matchTags: { bothTags: true }, //标签匹配
  singleCursorHeightPerLine: false,
  lineWrapping: true,
  styleActiveLine: { nonEmpty: true }, // 当前行高亮，nonEmpty表示当选择具体文本时是否高亮当前行
  foldGutter: true,
  gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
  autoCloseBrackets: true, // 自动闭合括号
  autoCloseTags: true, // 自动闭合标签
};

const MarkdownEditor = (props: MarkdownEditorProps, _ref: React.Ref<Editor>) => {
  const { editorRef, onSave, uploadImageMethod, initialValue, options, languages } = props;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { state, onScroll, onMouseEnter, dispatch } = props;
  const valueRef = useRef<any>();
  valueRef.current = state;

  // pannel
  const [isPannelShow, showPannel] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    editorRef.current = CodeMirror.fromTextArea(textareaRef.current as HTMLTextAreaElement, { ...defaultOptions, ...options } as Options);
    editorRef.current.setSize('100%', '100%');

    function insertLine(cm: Editor, above: boolean) {
      if (cm.isReadOnly()) return CodeMirror.Pass;
      cm.operation(function () {
        var len = cm.listSelections().length,
          newSelection = [],
          last = -1;
        for (var i = 0; i < len; i++) {
          var head = cm.listSelections()[i].head;
          if (head.line <= last) continue;
          var at = Pos(head.line + (above ? 0 : 1), 0);
          cm.replaceRange('\n', at, undefined, '+insertLine');
          cm.indentLine(at.line, undefined);
          newSelection.push({ head: at, anchor: at });
          last = head.line + 1;
        }
        cm.setSelections(newSelection);
      });
      cm.execCommand('indentAuto');
    }

    const extraKeysMap: any = {
      'Ctrl-Down': function (cm: Editor) {
        let rangeCount = cm.listSelections().length;
        for (let i = 0; i < rangeCount; i++) {
          var range = cm.listSelections()[i];
          if (range.empty()) cm.replaceRange(cm.getLine(range.head.line) + '\n', Pos(range.head.line, 0));
          else cm.replaceRange(cm.getRange(range.from(), range.to()), range.from());
        }
      },
      'Alt-Up': function (cm: Editor) {
        if (cm.isReadOnly()) return CodeMirror.Pass;
        let ranges = cm.listSelections(),
          linesToMove: any[] = [],
          at = cm.firstLine() - 1,
          newSels: {
            anchor: CodeMirror.Position;
            head: CodeMirror.Position;
          }[] = [];
        for (let i = 0; i < ranges.length; i++) {
          let range = ranges[i],
            from = range.from().line - 1,
            to = range.to().line;
          newSels.push({
            anchor: Pos(range.anchor.line - 1, range.anchor.ch),
            head: Pos(range.head.line - 1, range.head.ch),
          });
          if (range.to().ch === 0 && !range.empty()) --to;
          if (from > at) linesToMove.push(from, to);
          else if (linesToMove.length) linesToMove[linesToMove.length - 1] = to;
          at = to;
        }
        cm.operation(function () {
          for (let i = 0; i < linesToMove.length; i += 2) {
            let from = linesToMove[i],
              to = linesToMove[i + 1];
            let line = cm.getLine(from);
            cm.replaceRange('', Pos(from, 0), Pos(from + 1, 0), '+swapLine');
            if (to > cm.lastLine()) cm.replaceRange('\n' + line, Pos(cm.lastLine()), undefined, '+swapLine');
            else cm.replaceRange(line + '\n', Pos(to, 0), undefined, '+swapLine');
          }
          cm.setSelections(newSels);
        });
      },
      'Alt-Down': function (cm: Editor) {
        if (cm.isReadOnly()) return CodeMirror.Pass;
        let ranges = cm.listSelections(),
          linesToMove: any[] = [],
          at = cm.lastLine() + 1;
        for (let i = ranges.length - 1; i >= 0; i--) {
          var range = ranges[i],
            from = range.to().line + 1,
            to = range.from().line;
          if (range.to().ch === 0 && !range.empty()) from--;
          if (from < at) linesToMove.push(from, to);
          else if (linesToMove.length) linesToMove[linesToMove.length - 1] = to;
          at = to;
        }
        cm.operation(function () {
          for (var i = linesToMove.length - 2; i >= 0; i -= 2) {
            let from = linesToMove[i],
              to = linesToMove[i + 1];
            let line = cm.getLine(from);
            if (from === cm.lastLine()) {
              cm.replaceRange('', Pos(from - 1), Pos(from), '+swapLine');
            } else {
              cm.replaceRange('', Pos(from, 0), Pos(from + 1, 0), '+swapLine');
              cm.replaceRange(line + '\n', Pos(to, 0), undefined, '+swapLine');
            }
          }
          cm.scrollIntoView(Pos(from, 1));
        });
      },
      'Ctrl-Shift-Z': function (cm: Editor) {
        cm.execCommand('Ctrl-Y');
      },
      'Ctrl-Enter': function (cm: Editor) {
        return insertLine(cm, false);
      },
      'Shift-Ctrl-Enter': function (cm: Editor) {
        return insertLine(cm, true);
      },
      'Ctrl-S': function () {
        onSave && onSave(valueRef.current.markdown, valueRef.current.toc);
      },
    };

    // @ts-ignore
    if (editorRef.current.getSearchCursor) {
      extraKeysMap['Ctrl-F'] = function (cm: Editor) {
        let selection = cm.getSelection();
        setSearchInput(selection);
        showPannel(true);
      };
    }

    editorRef.current.setOption('extraKeys', extraKeysMap);

    // hint
    editorRef.current.setOption('hintOptions' as keyof EditorConfiguration, {
      hint: (cm) => hints(cm, languages),
      completeSingle: false,
      closeOnUnfocus: false,
    });

    editorRef.current.on('change', function (cm: any) {
      dispatch({ type: 'setMarkdown', value: cm.getValue() });
      cm.showHint && cm.showHint();
      return CodeMirror.Pass;
    });

    const insertImage = (text: any, line: number, ch: number) => {
      const editor = editorRef.current;
      if (!editor) {
        return CodeMirror.Pass;
      }
      editor.replaceRange(text, Pos(line, ch));
    };

    const insertImageCallback = (fileName: string, imageUrl: string, line: number, ch: number) => {
      const linkText = `![${fileName || ''}](${imageUrl || ''} "${fileName || ''}")`;
      insertImage(linkText, line, ch);
    };

    editorRef.current.on('scroll', () => onScroll());
    editorRef.current.on('paste', (cm, e) => {
      if (!(e.clipboardData && e.clipboardData.items)) {
        alert('该浏览器不支持操作');
        return;
      }
      for (var i = 0, len = e.clipboardData.items.length; i < len; i++) {
        var item = e.clipboardData.items[i];
        if (item.kind === 'string') {
          item.getAsString(function () {
            // str 是获取到的字符串
          });
        } else if (item.kind === 'file') {
          var pasteFile = item.getAsFile();
          // pasteFile就是获取到的文件
          const cursor = cm.getCursor();
          uploadImageMethod &&
            uploadImageMethod(pasteFile, (fileName: string, imageUrl: string) => insertImageCallback(fileName, imageUrl, cursor.line, cursor.ch));
          // fileUpload(pasteFile);
        }
      }
    });
  }, []);

  useEffect(() => {
    editorRef.current && editorRef.current.setValue(initialValue);
  }, [initialValue]);

  return (
    <>
      <div className="rmdcm5-editor" onMouseEnter={onMouseEnter}>
        {isPannelShow && (
          <Pannel searchInput={searchInput} editor={editorRef.current as Editor} showPannel={showPannel} setSearchInput={setSearchInput} />
        )}
        <textarea ref={textareaRef}></textarea>
      </div>
    </>
  );
};

export default React.forwardRef(MarkdownEditor);
