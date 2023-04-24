import { Editor } from 'codemirror';

function checkBelow(editor: Editor, method: (text: any) => boolean) {
  var cursor = editor.getCursor();
  var count = editor.lineCount();
  var text = [];
  for (var i = cursor.line + 1; i < count; i++) {
    text.push(editor.getLine(i));
  }
  text = (editor.getLine(cursor.line).slice(cursor.ch) + '\n' + text.join('\n')) as any;
  return method(text);
}

function matchInCode(text: string) {
  var match;
  match = text.match(/`{3,}/g);
  if (match && match.length % 2) {
    return false;
  } else {
    match = text.match(/`/g);
    if (match && match.length % 2) {
      return false;
    } else {
      return true;
    }
  }
}

function completeHint(cm: any, _: any, data: any) {
  let cursor = cm.getCursor();
  let token = cm.getTokenAt(cursor);
  const lang = data.text;
  let endText = '';
  if (checkBelow(cm, matchInCode)) {
    endText = '\n\n```';
  }
  let placement = lang + endText;
  cm.replaceRange(placement, { line: cursor.line, ch: 3 }, { line: cursor.line, ch: token.end });
  if (checkBelow(cm, matchInCode)) {
    cm.execCommand('goLineUp');
  } else {
    Promise.resolve().then(() => {
      cm.closeHint();
    });
  }
}

function headerHint(cm: Editor, _: any, data: any) {
  let cursor = cm.getCursor();
  let token = cm.getTokenAt(cursor);
  let start = 0;
  const currentHeader = token.state.streamSeen.string;
  let startSpace = currentHeader.match(/^\s+/);
  if (startSpace) {
    start = startSpace[0].length;
  }
  const header = data.text;
  let endText = ` h${header.length}`;
  let placement = header + endText;
  cm.replaceRange(placement, { line: cursor.line, ch: start }, { line: cursor.line, ch: token.end });
  Promise.resolve().then(() => {
    let cursor = cm.getCursor();
    let token = cm.getTokenAt(cursor);
    cm.setSelection({ line: cursor.line, ch: token.end }, { line: cursor.line, ch: token.end - 2 });
  });
}

const hints: any = (cm: Editor, languages: string[] | undefined) => {
  let cursor = cm.getCursor();
  let token = cm.getTokenAt(cursor);

  // Header Hint
  if (token.type && /header\sheader-\d/.test(token.type)) {
    let list = [];
    const currentHeader = token.state.streamSeen.string;
    let headerSplit = currentHeader.trimStart().split(/\s+/);
    if (headerSplit.length === 1) {
      for (let i = headerSplit[0].length; i <= 6; i++) {
        let header = '#'.repeat(i);
        list.push({
          text: `${header}`,
          displayText: `${header} h${header.length}`,
          hint: headerHint,
        });
      }
      const end = token.end;
      return {
        list,
        from: { ch: currentHeader.length, line: cursor.line },
        to: { ch: end, line: cursor.line },
      };
    }
  }

  // Codeblock Hint
  if (token.type && token.type === 'comment' && !token.start) {
    languages = languages || ['bash', 'javascript', 'typescript', 'go', 'python', 'jsx', 'tsx', 'sql', 'markmap'];
    let fencedEndRE = token.state.base.fencedEndRE;
    const current = token.string;
    let commentType = current.split('```')[1];
    if (current && /^`{3}/.test(current) && fencedEndRE && !languages.includes(commentType)) {
      let list: any[] = [];
      languages
        .filter((lang) => lang.startsWith(commentType))
        .forEach((item) =>
          list.push({
            text: item,
            displayText: item,
            hint: completeHint,
          }),
        );
      const end = token.end;
      return {
        list,
        from: { ch: token.string.length, line: cursor.line },
        to: { ch: end, line: cursor.line },
      };
    }
  }
};

export default hints;
