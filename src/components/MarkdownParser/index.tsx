import React, { useEffect, useState, useRef, useImperativeHandle } from 'react';
import $ from 'jquery';
import hljs from 'highlight.js';
import './index.css';
import 'highlight.js/styles/atom-one-dark.css';
import { MarkdownParserProps } from '../../interface';

const emoji = require('markdown-it-emoji');
const footnote = require('markdown-it-footnote');
const abbr = require('markdown-it-abbr');
const deflist = require('markdown-it-deflist');
const sub = require('markdown-it-sub');
const sup = require('markdown-it-sup');
const inserted = require('markdown-it-ins');
const mark = require('markdown-it-mark');
const alerts = require('markdown-it-alerts');
const toc = require('markdown-it-table-of-contents');
const anchor = require('markdown-it-anchor').default;
const taskLists = require('markdown-it-task-lists');

const fenceCodeAlias: { [index: string]: string } = {
  markmap: 'markdown',
};

let md = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
  highlight: function (str: string, lang: string) {
    const language = fenceCodeAlias[lang] || lang;
    if (language && hljs.getLanguage(language)) {
      try {
        const parsedCode = hljs.highlight(str, { language, ignoreIllegals: true }).value;
        const lines = parsedCode.split(/\n/).slice(0, -1);
        const gutter = lines.map((item, index) => `<span class="code-line">${index + 1}</span><br>`).join('');
        const html = `<pre class="hljs codeWrapper"><table><tbody><tr><td class="gutter"><pre>${gutter}</pre></td><td><code class=${`language-${lang}`}>${parsedCode}</code></td></tr></tbody></table></pre>`;
        return html;
      } catch (__) {}
    }

    const parsedCode = md.utils.escapeHtml(str);
    const lines = parsedCode.split(/\n/).slice(0, -1);
    const gutter = lines.map((item: string, index: number) => `<span class="code-line">${index + 1}</span><br>`).join('');
    const html = `<pre class="hljs codeWrapper"><table><tbody><tr><td class="gutter"><pre>${gutter}</pre></td><td><code class=${`language-${lang}`}>${parsedCode}</code></td></tr></tbody></table></pre>`;
    return html;
  },
});

// 添加行号以进行精确滚动匹配
function injectLineNumbers(tokens: any, idx: number, options: any, env: any, slf: any) {
  var line;
  if (tokens[idx].map && tokens[idx].level === 0) {
    line = tokens[idx].map[0];
    tokens[idx].attrJoin('class', 'line');
    tokens[idx].attrSet('data-line', String(line));
  }
  return slf.renderToken(tokens, idx, options, env, slf);
}
md.renderer.rules.paragraph_open = md.renderer.rules.heading_open = injectLineNumbers;

// 添加a标签 target="_blank"
var defaultRender =
  md.renderer.rules.link_open ||
  function (tokens: any, idx: number, options: any, env: any, slf: any) {
    return slf.renderToken(tokens, idx, options);
  };
md.renderer.rules.link_open = function (tokens: any, idx: number, options: any, env: any, slf: any) {
  var aIndex = tokens[idx].attrIndex('target');
  if (aIndex < 0) {
    tokens[idx].attrPush(['target', '_blank']);
  } else {
    tokens[idx].attrs[aIndex][1] = '_blank';
  }
  return defaultRender(tokens, idx, options, env, slf);
};

// 表格外面包一层，使其可以横向滚动
md.renderer.rules.table_open = function (tokens: any, idx: number, options: any, env: any, slf: any) {
  var line: number;
  const { map, level, type } = tokens[idx];
  if (map && level === 0 && type === 'table_open') {
    line = tokens[idx].map[0];
    return `<div class="table-container line" data-line=${line}>` + slf.renderToken(tokens, idx, options, env, slf);
  }
  return slf.renderToken(tokens, idx, options, env, slf);
};

md.renderer.rules.table_close = function (tokens: any, idx: number, options: any, env: any, slf: any) {
  if (tokens[idx].type === 'table_close' && tokens[idx].level === 0) {
    return slf.renderToken(tokens, idx, options, env, slf) + '</div>';
  }
  return slf.renderToken(tokens, idx, options, env, slf);
};

const tocConfig = {
  includeLevel: [1, 2, 3, 4, 5, 6],
};

md.use(emoji)
  .use(footnote)
  .use(abbr)
  .use(deflist)
  .use(sub)
  .use(sup)
  .use(inserted)
  .use(mark)
  .use(alerts)
  .use(toc, tocConfig)
  .use(anchor)
  .use(taskLists);

const MarkdownParser = (props: MarkdownParserProps, ref: React.Ref<unknown> | undefined) => {
  const { value, height, onScroll, onMouseEnter, dispatch, onChange } = props;
  const [htmlValue, setHtmlValue] = useState('');
  const markdownParserRef = useRef<any>();

  useImperativeHandle(ref, () => ({
    getScrollTop: () => markdownParserRef.current.scrollTop,
    getOffsetTop: () => markdownParserRef.current.getBoundingClientRect().top,
    getLines: () => Array.from(markdownParserRef.current.getElementsByClassName('line')),
    getScrollHeight: () => markdownParserRef.current.scrollHeight,
    scrollTo: (pos: number) => {
      $(markdownParserRef.current).stop(true).animate(
        {
          scrollTop: pos,
        },
        100,
        'linear',
      );
    },
  }));

  useEffect(() => {
    const htmlVlaue = md.render(value);
    dispatch({ type: 'setHtmlValue', value: htmlVlaue });
    onChange && onChange(value, htmlVlaue);
    setHtmlValue(htmlVlaue);
  }, [value]);

  return (
    <>
      <div
        ref={markdownParserRef}
        style={{ height }}
        className="container"
        dangerouslySetInnerHTML={{ __html: htmlValue }}
        onScroll={() => onScroll()}
        onMouseEnter={onMouseEnter}
      ></div>
    </>
  );
};

export default React.forwardRef(MarkdownParser);
