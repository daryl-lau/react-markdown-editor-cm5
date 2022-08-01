import React, { Dispatch, ReducerAction, useCallback, useEffect, useRef, useState } from 'react';
import CodeMirror, { Editor, Pos } from 'codemirror';
import Pannel from './pannel';
import hints from './hints';
// css
import 'codemirror/lib/codemirror.css';
import './theme/atom-light.css';
import './theme/atom-dark.css';
import './theme/basic.css';

// mode
import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/mode/go/go';

// addons
import 'codemirror/addon/edit/matchbrackets'; // 匹配括号
import 'codemirror/addon/edit/matchtags'; // 标签匹配高亮
import 'codemirror/addon/display/placeholder'; // placeholder
import 'codemirror/addon/selection/active-line'; // 高亮当前行

// 代码折叠
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/xml-fold.js';
import 'codemirror/addon/fold/indent-fold.js';
import 'codemirror/addon/fold/markdown-fold.js';
import 'codemirror/addon/fold/comment-fold.js';
import 'codemirror/addon/fold/foldgutter.css';

// 鼠标选中高亮
import 'codemirror/addon/search/match-highlighter';

// 搜素替换
import 'codemirror/addon/scroll/annotatescrollbar.js'; // 滚动条显示匹配标记
import 'codemirror/addon/search/matchesonscrollbar.js';
import 'codemirror/addon/search/matchesonscrollbar.css';
import 'codemirror/addon/search/searchcursor.js';
// import "codemirror/addon/search/search.js";
// import './search'

import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';

// 代码提示
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/show-hint.css';

// 自动闭合括号
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';

import { Config, MarkdownEditorProps } from '../../interface';

const initialOptions: Config = {
  placeholder: '开始输入...',
  mode: 'gfm',
  lineNumbers: true, // 是否显示行号
  theme: 'atom-dark', // 主题
  tabSize: 4, // 默认4
  matchBrackets: true, // 括号匹配
  matchTags: { bothTags: true }, //标签匹配
  singleCursorHeightPerLine: false,
  lineWrapping: true,
  styleActiveLine: { nonEmpty: true }, // 当前行高亮，nonEmpty表示当选择具体文本时是否高亮当前行
  // highlightSelectionMatches: true,
  // 代码折叠
  foldGutter: true,
  gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],

  autoCloseBrackets: true, // 自动闭合括号
  autoCloseTags: true, // 自动闭合标签
  scrollbarStyle: 'overlay', // 滚动条样式
};

const MarkdownEditor = (props: MarkdownEditorProps, ref: React.Ref<Editor>) => {
  const { editorRef, onSave } = props;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { state, onScroll, onMouseEnter, dispatch } = props;
  const valueRef = useRef<any>();
  valueRef.current = state;

  // pannel
  const [isPannelShow, showPannel] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    editorRef.current = CodeMirror.fromTextArea(textareaRef.current as HTMLTextAreaElement, initialOptions);
    editorRef.current.setSize('100%', '100%');
    editorRef.current.setValue(state.mdValue);

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

    editorRef.current.setOption('extraKeys', {
      // search
      'Ctrl-F': function (cm) {
        let selection = cm.getSelection();
        setSearchInput(selection);
        showPannel(true);
      },
      'Ctrl-Down': function (cm) {
        let rangeCount = cm.listSelections().length;
        for (let i = 0; i < rangeCount; i++) {
          var range = cm.listSelections()[i];
          if (range.empty()) cm.replaceRange(cm.getLine(range.head.line) + '\n', Pos(range.head.line, 0));
          else cm.replaceRange(cm.getRange(range.from(), range.to()), range.from());
        }
      },
      'Alt-Up': function (cm) {
        if (cm.isReadOnly()) return CodeMirror.Pass;
        let ranges = cm.listSelections(),
          linesToMove: any[] = [],
          at = cm.firstLine() - 1,
          newSels: { anchor: CodeMirror.Position; head: CodeMirror.Position }[] = [];
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
      'Alt-Down': function (cm) {
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
      'Ctrl-Shift-Z': function (cm) {
        cm.execCommand('Ctrl-Y');
      },
      'Ctrl-Enter': function (cm) {
        return insertLine(cm, false);
      },
      'Shift-Ctrl-Enter': function (cm) {
        return insertLine(cm, true);
      },
      'Ctrl-S': function (cm) {
        onSave && onSave(valueRef.current.mdValue, valueRef.current.htmlValue, valueRef.current.tocValue);
      },
    });

    // hint
    editorRef.current.setOption('hintOptions', {
      hint: hints,
      completeSingle: false,
      closeOnUnfocus: false,
    });

    editorRef.current.on('change', function (cm) {
      dispatch({ type: 'setMdValue', value: cm.getValue() });
      cm.showHint();
      return CodeMirror.Pass;
    });

    editorRef.current.on('scroll', () => onScroll());
  }, []);

  return (
    <>
      <div className="editor" style={{ height: '100%' }} onMouseEnter={onMouseEnter}>
        {isPannelShow && (
          <Pannel searchInput={searchInput} editor={editorRef.current as Editor} showPannel={showPannel} setSearchInput={setSearchInput} />
        )}
        <textarea ref={textareaRef}></textarea>
      </div>
    </>
  );
};

export default React.forwardRef(MarkdownEditor);
