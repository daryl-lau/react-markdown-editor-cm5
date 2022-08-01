import React from 'react';
import ReactDOM from 'react-dom';
import MdEditor from '../src';

ReactDOM.render(
  <MdEditor
    width={1400}
    height={'800px'}
    style={{ margin: '0 auto' }}
    initialValue=""
    // withToc={true}
    // onSave={(md, html, toc) => {
    //   console.log(md, 'xxx', html, 'yyy', toc);
    // }}
    // onChange={(md, html, toc) => {
    //     console.log(md, 'xxx', html, 'yyy', toc);
    //   }}
  ></MdEditor>,
  document.getElementById('root'),
);
