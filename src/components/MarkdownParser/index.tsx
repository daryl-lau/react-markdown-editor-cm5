import React, { useEffect, useState, useRef, useImperativeHandle } from 'react';
import $ from 'jquery';
import hljs from 'highlight.js';
import './index.css';
import 'highlight.js/styles/atom-one-dark.css';
import { MarkdownParserProps } from '../../interface';
import Popover from '../Popover';

const uslug = require('uslug');
const emoji = require('markdown-it-emoji');
const footnote = require('markdown-it-footnote');
const abbr = require('markdown-it-abbr');
const deflist = require('markdown-it-deflist');
const sub = require('markdown-it-sub');
const sup = require('markdown-it-sup');
const inserted = require('markdown-it-ins');
const mark = require('markdown-it-mark');
const alerts = require('markdown-it-alerts');
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

function findExistingIdAttr(token) {
  if (token && token.attrs && token.attrs.length > 0) {
    const idAttr = token.attrs.find((attr) => {
      if (Array.isArray(attr) && attr.length >= 2) {
        return attr[0] === 'id';
      }
      return false;
    });
    if (idAttr && Array.isArray(idAttr) && idAttr.length >= 2) {
      const [key, val] = idAttr;
      return val;
    }
  }
  return null;
}

function findHeadlineElements(levels, tokens, options) {
  const headings = [];
  let currentHeading = null;

  tokens.forEach((token) => {
    if (token.type === 'heading_open') {
      const id = findExistingIdAttr(token);
      const level = parseInt(token.tag.toLowerCase().replace('h', ''), 10);
      if (levels.indexOf(level) >= 0) {
        currentHeading = {
          level: level,
          text: null,
          anchor: id || null,
        };
      }
    } else if (currentHeading && token.type === 'inline') {
      const textContent = token.children
        .filter((childToken) => childToken.type === 'text' || childToken.type === 'code_inline')
        .reduce((acc, t) => acc + t.content, '');
      currentHeading.text = textContent;
    } else if (token.type === 'heading_close') {
      if (currentHeading) {
        headings.push(currentHeading);
      }
      currentHeading = null;
    }
  });

  return headings;
}

function getMinLevel(headlineItems) {
  return Math.min(...headlineItems.map((item) => item.level));
}

function addListItem(level, text, anchor, rootNode) {
  const listItem = { level, text, anchor, children: [], parent: rootNode };
  rootNode.children.push(listItem);
  return listItem;
}

function flatHeadlineItemsToNestedTree(headlineItems) {
  const toc = { level: getMinLevel(headlineItems) - 1, anchor: null, text: null, children: [], parent: null };
  let currentRootNode = toc;
  let prevListItem = currentRootNode;
  headlineItems.forEach((headlineItem) => {
    if (headlineItem.level > prevListItem.level) {
      Array.from({ length: headlineItem.level - prevListItem.level }).forEach((_) => {
        currentRootNode = prevListItem;
        prevListItem = addListItem(headlineItem.level, null, null, currentRootNode);
      });
      prevListItem.text = headlineItem.text;
      prevListItem.anchor = headlineItem.anchor;
    } else if (headlineItem.level === prevListItem.level) {
      prevListItem = addListItem(headlineItem.level, headlineItem.text, headlineItem.anchor, currentRootNode);
    } else if (headlineItem.level < prevListItem.level) {
      for (let i = 0; i < prevListItem.level - headlineItem.level; i++) {
        currentRootNode = currentRootNode.parent;
      }
      prevListItem = addListItem(headlineItem.level, headlineItem.text, headlineItem.anchor, currentRootNode);
    }
  });
  return toc;
}

function tocItemToHtml(tocItem, options, md) {
  const tocResult = tocItem.children
    .map((childItem) => {
      let li = '<li>';
      let anchor = childItem.anchor;
      let text = childItem.text ? md.renderInline(childItem.text) : null;
      li += anchor ? `<a href="#${anchor}">${text}</a>` : text || '';
      return li + (childItem.children.length > 0 ? tocItemToHtml(childItem, options, md) : '') + '</li>';
    })
    .join('');
  return tocResult ? '<ul>' + tocResult + '</ul>' : '';
}

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

md.use(emoji)
  .use(footnote)
  .use(abbr)
  .use(deflist)
  .use(sub)
  .use(sup)
  .use(inserted)
  .use(mark)
  .use(alerts)
  .use(anchor, {
    slugify: (s: string) => uslug(s),
  })
  .use(taskLists);

const MarkdownParser = (props: MarkdownParserProps, ref: React.Ref<unknown> | undefined) => {
  const { state, height, onScroll, onMouseEnter, dispatch, onChange, toolBarHeight, withToc = true } = props;
  const [htmlValue, setHtmlValue] = useState('');
  const [toc, setToc] = useState('');
  const [tocVisible, setTocVisible] = useState(false);
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
    withToc &&
      md.core.ruler.push('generate_toc', function (state) {
        const headlineItems = findHeadlineElements([1, 2, 3, 4, 5, 6], state.tokens, {});
        const toc = flatHeadlineItemsToNestedTree(headlineItems);
        const tocHtml = tocItemToHtml(toc, {}, md);
        dispatch({ type: 'setTocValue', value: tocHtml });
      });
  }, []);

  useEffect(() => {
    const htmlVlaue = md.render(state.mdValue);
    dispatch({ type: 'setHtmlValue', value: htmlVlaue });
    onChange && onChange(state.mdValue, htmlVlaue, state.tocValue);
    setHtmlValue(htmlVlaue);
  }, [state.mdValue, state.tocValue]);

  const renderToc = () => {
    return (
      <div className="toc-list">
        <div dangerouslySetInnerHTML={{ __html: state.tocValue }}></div>
      </div>
    );
  };

  const handleVisibleChange = () => {
    setTocVisible((f) => !f);
  };

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
      {withToc && state.tocValue && (
        <Popover
          content={renderToc()}
          transitionName="popover-fade"
          placement="leftTop"
          showArrow={false}
          trigger="hover"
          visible={tocVisible}
          onVisibleChange={handleVisibleChange}
          overlayClassName="toc-popover-wrap"
          destroyTooltipOnHide
        >
          <div className="icon-wrapper toc-icon" style={{ top: `${toolBarHeight + 10}px` }}>
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="59591">
              <path
                d="M928 848H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32zM118.62 726.6l192-192a32 32 0 0 0 0-45.24l-192-192C98.54 277.32 64 291.56 64 320v384c0 28.62 34.66 42.6 54.62 22.6zM934.34 336H473.66A25.64 25.64 0 0 0 448 361.66v44.68A25.64 25.64 0 0 0 473.66 432h460.68A25.64 25.64 0 0 0 960 406.34v-44.68A25.64 25.64 0 0 0 934.34 336zM928 96H96A32 32 0 0 0 64 128v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32V128a32 32 0 0 0-32-32z m6.34 496H473.66A25.64 25.64 0 0 0 448 617.66v44.68A25.64 25.64 0 0 0 473.66 688h460.68A25.64 25.64 0 0 0 960 662.34v-44.68A25.64 25.64 0 0 0 934.34 592z"
                p-id="59592"
              ></path>
            </svg>
          </div>
        </Popover>
      )}
    </>
  );
};

export default React.forwardRef(MarkdownParser);
