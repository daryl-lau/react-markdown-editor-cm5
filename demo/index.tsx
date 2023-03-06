import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import MdEditor from '../src';
import article from './article';

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
  const editorRef = useRef<any>();
  const getValue = () => {
    const values = editorRef.current.getValues();
    console.log(values);
  };

  const fetchArticle = () => {
    setTimeout(() => {
      setData(article);
    }, 1000);
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
      ></MdEditor>
    </>
  );
};

ReactDOM.render(
  <Editor />,

  document.getElementById('root'),
);
