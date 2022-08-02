import React from 'react';
import ReactDOM from 'react-dom';
import MdEditor from '../src';
import data from './article';

ReactDOM.render(
  <MdEditor
    width={1400}
    height={'1000px'}
    style={{ margin: '0 auto' }}
    initialValue={data}
    withToc={true}
    // onSave={(md, html, toc) => {
    //   console.log(md, 'xxx', html, 'yyy', toc);
    // }}
    // onChange={(md, html, toc) => {
    //     console.log(md, 'xxx', html, 'yyy', toc);
    //   }}
  ></MdEditor>,
  document.getElementById('root'),
);
