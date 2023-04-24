import React, { useEffect, useRef, useState } from 'react';
import MdEditor from '../src/index';
import article from './article';

// 滚动调样式，options={{ scrollbarStyle: 'overlay' }} 必须引入
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';

// mode
import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/mode/go/go';

// hint 提示
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/show-hint.css';

// 搜索替换
import 'codemirror/addon/search/searchcursor.js';

// 滚动条显示匹配标记
import 'codemirror/addon/scroll/annotatescrollbar.js';
import 'codemirror/addon/search/matchesonscrollbar.js';
import 'codemirror/addon/search/matchesonscrollbar.css';

// addons
import 'codemirror/addon/edit/matchbrackets'; // 匹配括号
import 'codemirror/addon/edit/matchtags'; // 标签匹配高亮
import 'codemirror/addon/display/placeholder'; // placeholder 当配置使用 placeholder时，需要引入
import 'codemirror/addon/selection/active-line'; // 高亮当前行

// 鼠标选中高亮
import 'codemirror/addon/search/match-highlighter';

// 代码折叠
import 'codemirror/addon/fold/markdown-fold.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/foldgutter.css';

const uploadImageMethod = (file, insertImageCallback: (arg0: any, arg1: any) => void) => {
  const basicUrl = 'http://localhost:8080';
  const uploadApi = basicUrl + '/upload/image';
  const formData = new FormData();
  formData.append('file', file);

  fetch(uploadApi, {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      const { imgName, imgUrl } = data;
      insertImageCallback(imgName, imgUrl);
    })
    .catch((error) => {
      console.error(error);
    });
};

const App = () => {
  const [data, setData] = useState('');
  const editorRef = useRef<any>();
  const getValue = () => {
    const values = editorRef.current.getValues();
    console.log(values);
  };

  const fetchArticle = () => {
    setTimeout(() => {
      setData(article);
    }, 500);
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <>
      <button onClick={getValue}>取值</button>
      <MdEditor
        ref={editorRef}
        width={1400}
        height={'1000px'}
        style={{ margin: '0 auto' }}
        initialValue={data}
        withToc={true}
        uploadImageMethod={uploadImageMethod}
        onSave={(md, html, toc) => {}}
        options={{ scrollbarStyle: 'overlay', placeholder: '写点什么...' }}
      ></MdEditor>
    </>
  );
};

export default App;
