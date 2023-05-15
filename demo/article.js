const data = `# react markdown editor
A react markdown editor based on codemirror5
## demo online

http://baihuzi.com/editor-demo

## Installation

\`\`\`bash
npm i react-markdown-editor-cm5
or
yarn add react-markdown-editor-cm5
\`\`\`

## Usage

### basic usage

\`\`\`tsx
import MdEditor from 'react-markdown-editor-cm5';
import 'react-markdown-editor-cm5/lib/style.css';

function App() {
  return (
    <>
      <MdEditor initialValue=""></MdEditor>
    </>
  );
}

export default App;
\`\`\`

### Config editor by codemirror

Use codemirror mode, just need import codemirror mode plugins, like:

\`\`\`js
import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/mode/go/go';
\`\`\`

set scroll bar style

\`\`\`js
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';

// editor config
<MdEditor initialValue="" options={{ scrollbarStyle: 'overlay' }}></MdEditor>;
\`\`\`

react-markdown-editor-cm5 preset some hint, you need import codemirror addon

\`\`\`js
// hint
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/show-hint.css';
\`\`\`

Search and replace, need import \`searchcursor.js\`

\`\`\`js
import 'codemirror/addon/search/searchcursor.js';
\`\`\`

Scroll bar display matching markers, need import some addon and css

\`\`\`js
import 'codemirror/addon/scroll/annotatescrollbar.js';
import 'codemirror/addon/search/matchesonscrollbar.js';
import 'codemirror/addon/search/matchesonscrollbar.css';
\`\`\`

Some other addons

\`\`\`js
import 'codemirror/addon/edit/matchbrackets'; // match brackets
import 'codemirror/addon/edit/matchtags'; // match html tags
import 'codemirror/addon/display/placeholder'; // placeholder, if you set options.placeholder, need import this addon
import 'codemirror/addon/selection/active-line'; // line light current line
import 'codemirror/addon/search/match-highlighter';
\`\`\`

Code fold, if you need fold others mode, just import their addon from \`codemirror/addon/fold/...\`

\`\`\`js
// code fold
import 'codemirror/addon/fold/markdown-fold.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/foldgutter.css';
\`\`\`

More usage visit [codemirror.net](https://codemirror.net/5/doc/manual.html#overview)

## API

### props

> type toolbar = 'bold' | 'checkList'| 'clear'| 'codeBlock'| 'dateTime'| 'dividing'| 'emoji'| 'fullScreen'| 'header'| | 'htmlEntities'| 'humpCase'| 'image' | 'inlineCode'| 'italic'| 'link'| 'lowerCase'| 'orderedList'| 'quote'| 'redo'| 'undo'| 'sub'| 'super'| 'table'| 'theme'| 'through'| 'toggleEditor'| 'unOrderedList'| 'upperCase'

Options interface:

\`\`\`ts
interface Options extends EditorConfiguration {
  singleCursorHeightPerLine?: boolean;
  languages?: string[];
}
\`\`\`

| name              | type                                                                                             | default        | description                                                           |
| :---------------- | :----------------------------------------------------------------------------------------------- | :------------- | :-------------------------------------------------------------------- |
| initialValue      | string                                                                                           |                | initial value of editor                                               |
| width             | number \\| string                                                                                 | '100%'         | width of editor                                                       |
| height            | number                                                                                           | 800            | height of editor,                                                     |
| toolbars          | Array\\<toolbar\\>                                                                                 | all of toolbar | custom toollbar item, if it's a empty array, editor will hide toolbar |
| toolBarHeight     | number                                                                                           | 34             | height editor toolbar                                                 |
| onSave            | (markdown?: string, toc?: string): void                                                     |                | callback when editor save                                             |
| onChange          | (markdown?: string, toc?: string): void                                                     |                | callback when editor content change                                   |
| uploadImageMethod | (file: string \\| Blob, insertImageCallback: (fileName: string, imageUrl: string) => void): void; |                | method of upload image                                                |
| options           | Options                                                                                          |                | codsmirror options                                                    |

### example of uploadImageMethod

No matter what your upload method is, you just need call insertImageCallback after your upload method, filename param is the title of image, the imageUrl is the image url after upload

\`\`\`javascript
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
      <MdEditor uploadImageMethod={uploadImageMethod} />
    </div>
  );
}
export default App;
\`\`\`

# Features

## headers

# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Footnotes

Footnote 1 link[^first].
Footnote 2 link[^second].
Inline footnote^[Text of inline footnote] definition.
Duplicated footnote reference[^second].

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Right aligned columns

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |

Left aligned columns

| Option | Description                                                               |
| :----- | :------------------------------------------------------------------------ |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Center aligned columns

| Option |                                Description                                |
| :----: | :-----------------------------------------------------------------------: |
|  data  | path to data files to supply the data that will be passed into templates. |
| engine |  engine to be used for processing templates. Handlebars is the default.   |
|  ext   |                   extension to be used for dest files.                    |

## Emoji

You can type any emoji like this :smile: :smiley: :cry: :wink:

> See full emoji list [here](http://www.emoji-cheat-sheet.com/).

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ 'title text!')

Autoconverted link https://github.com/nodeca/pica

## Images

![Minion](https://octodex.github.com/images/minion.png)

## ToDo List:

- [ ] ToDos
  - [x] Buy some salad
  - [ ] Brush teeth
  - [x] Drink some water

## Alert Area

:::success
Yes :tada:
:::

:::info
This is a message :mega:
:::

:::warning
Watch out :zap:
:::

## Emphasis

**This is bold text**

_This is italic text_

~~Deleted text~~

lu~lala~

Superscript: 19^th^

Subscript: H~2~O

++Inserted text++

==Marked text==

## Syntax highlighting

\`\`\`js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

## Lists

### Unordered

- Create a list by starting a line with \` +
  \`, \` -
  \`, or \` *
    \`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

### Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

[^first]:
    Footnote **can have markup**
    and multiple paragraphs.

[^second]: Footnote text.

## Mathjax
$$\\begin{bmatrix}
{a_{11}}&{a_{12}}&{\\cdots}&{a_{1n}}\\\\
{a_{21}}&{a_{22}}&{\\cdots}&{a_{2n}}\\\\
{\\vdots}&{\\vdots}&{\\ddots}&{\\vdots}\\\\
{a_{m1}}&{a_{m2}}&{\\cdots}&{a_{mn}}\\\\
\\end{bmatrix}$$

$$\\begin{cases}
a_1x+b_1y+c_1z=d_1\\\\
a_2x+b_2y+c_2z=d_2\\\\
a_3x+b_3y+c_3z=d_3\\\\
\\end{cases}
$$

$$
x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.
$$

$$
\\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}dt\\,.
$$

## Mermaid
To improve rendering performance,  you need to provide an unique ID for each mermaid block. Like mermaid=ID
### sequenceDiagram
\`\`\`mermaid=1
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
\`\`\`


### gantt
\`\`\`mermaid=2
gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
\`\`\`


### flowchart
\`\`\`mermaid=3
flowchart TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
\`\`\`

### class
\`\`\`mermaid=4
classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
      +String beakColor
      +swim()
      +quack()
    }
    class Fish{
      -int sizeInFeet
      -canEat()
    }
    class Zebra{
      +bool is_wild
      +run()
    }
\`\`\`

### state
\`\`\`mermaid=5
stateDiagram-v2
    [*] --> Still
    Still --> [*]
    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
\`\`\`

### er
\`\`\`mermaid=6
erDiagram
    CUSTOMER }|..|{ DELIVERY-ADDRESS : has
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER ||--o{ INVOICE : "liable for"
    DELIVERY-ADDRESS ||--o{ ORDER : receives
    INVOICE ||--|{ ORDER : covers
    ORDER ||--|{ ORDER-ITEM : includes
    PRODUCT-CATEGORY ||--|{ PRODUCT : contains
    PRODUCT ||--o{ ORDER-ITEM : "ordered in"
\`\`\`

### journey
\`\`\`mermaid=7
journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 3: Me
\`\`\`


### gitGraph
\`\`\`mermaid=8
gitGraph
    commit
    commit
    branch develop
    checkout develop
    commit
    commit
    checkout main
    merge develop
    commit
    commit
\`\`\`

### pie
\`\`\`mermaid=9
pie title Pets adopted by volunteers
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15
\`\`\`

### mindmap
\`\`\`mermaid=10
mindmap
  root((mindmap))
    Origins
      Long history
      ::icon(fa fa-book)
      Popularisation
        British popular psychology author Tony Buzan
    Research
      On effectivness<br/>and features
      On Automatic creation
        Uses
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaid
\`\`\`
`;

export default data;
