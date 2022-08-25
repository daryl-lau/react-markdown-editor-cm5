import React from 'react';
import ReactDOM from 'react-dom';
import MdEditor from '../src';
import data from './article';

const uploadImageMethod = (file, insertImageCallback) => {
  const uploadApi = 'http://localhost:9000/upload';
  const formData = new FormData();
  formData.append('file', file);

  fetch(uploadApi, {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      const { imgName, imageUrl } = data;
      insertImageCallback(imgName, imageUrl);
    })
    .catch((error) => {
      console.error(error);
    });
};


ReactDOM.render(

 
  <MdEditor
    width={1400}
    height={'1000px'}
    style={{ margin: '0 auto' }}
    initialValue={data}
    withToc={true}
    uploadImageMethod={uploadImageMethod}
    // onSave={(md, html, toc) => {
    //   console.log(md, 'xxx', html, 'yyy', toc);
    // }}
    // onChange={(md, html, toc) => {
    //     console.log(md, 'xxx', html, 'yyy', toc);
    //   }}
  ></MdEditor>,
  document.getElementById('root'),
);
