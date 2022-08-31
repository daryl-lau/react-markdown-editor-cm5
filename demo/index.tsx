import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import MdEditor from '../src';
import data from './article';

const uploadImageMethod = (file: string | Blob, insertImageCallback: (arg0: any, arg1: any) => void) => {
  const basicUrl = 'http://localhost:8080';
  const uploadApi = basicUrl + '/upload';
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

const Editor = () => {
  const [data, setData] = useState('');

  const fetchArticle = () => {
    const uploadApi = 'http://localhost:8080' + '/article/' + '105565939366';
    fetch(uploadApi, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        const { mdValue } = data;
        setData(mdValue);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
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
      //   console.log(md, 'xxx', html, 'yyy', toc);
      // }}
    ></MdEditor>
  );
};

ReactDOM.render(
  <Editor />,

  document.getElementById('root'),
);
