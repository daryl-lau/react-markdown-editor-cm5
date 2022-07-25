# react markdown editor

## Installation

```bash
yarn add react-markdown-editor-cm5
or
npm i react-markdown-editor-cm5
```

## Usage

```tsx
import MdEditor from 'react-markdown-editor-cm5';
import 'react-markdown-editor-cm5/lib/css/main.min.css';

function App() {
  return (
    <>
      <MdEditor value=""></MdEditor>
    </>
  );
}

export default App;
```

## API
### props

> type toolbar = 'bold' | 'checkList'| 'clear'| 'codeBlock'| 'dateTime'| 'dividing'| 'emoji'| 'fullScreen'| 'header'| | 'htmlEntities'| 'humpCase'| 'image' | 'inlineCode'| 'italic'| 'link'| 'lowerCase'| 'orderedList'| 'quote'| 'redo'| 'undo'| 'sub'| 'super'| 'table'| 'theme'| 'through'| 'toggleEditor'| 'unOrderedList'| 'upperCase'

| name  | type  | default  | description  |
| :--- | :--- | :--- | :--- |
|  initialValue | string  |   | initial value of editor  |
|  width  |  number \| string  |  '100%' | width of editor  |
|  height  |  number   |  800 | height of editor, it's only be number, because editor need calculate height automatic  |
|  toolbars | Array\<toolbar\> | all of toolbar | custom toollbar item, if it's a empty array, editor will hide toolbar |
|  toolBarHeight | number  | 34  | height editor toolbar  |
|  onSave | (mdValue?: string, htmlValue?: string): void |   | callback when editor save  |
|  onChange | (mdValue?: string, htmlValue?: string): void |   | callback when editor content change  |
|  uploadImageMethod | (file: string \| Blob, insertImageCallback: (fileName: string, imageUrl: string) => void): void; |   | method of upload image  |


### example of uploadImageMethod
No matter what your upload method is, you just need call insertImageCallback after your upload method, filename param is the title of image, the imageUrl is the image url after upload
```javascript
function App() {
  const uploadImageMethod: uploadImageMethod = (file, insertImageCallback) => {
    const uploadApi = 'http://localhost:8080/upload';
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

  return (
    <div style={{ padding: '50px' }}>
      <MdEditor
        uploadImageMethod={uploadImageMethod}
      />
    </div>
  );
}
export default App;
```

