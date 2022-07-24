/* eslint-disable eqeqeq */
/* eslint-disable no-useless-escape */
const queryCaseInsensitive = (query: string) => {
  return typeof query == 'string' && query == query.toLowerCase();
};

const parseString = (string: string) => {
  return string.replace(/\\([nrt\\])/g, function (match: any, ch: string) {
    if (ch == 'n') return '\n';
    if (ch == 'r') return '\r';
    if (ch == 't') return '\t';
    if (ch == '\\') return '\\';
    return match;
  });
};

const parseQuery = (query: any) => {
  var isRE = query.match(/^\/(.*)\/([a-z]*)$/);
  if (isRE) {
    try {
      query = new RegExp(isRE[1], isRE[2].indexOf('i') == -1 ? '' : 'i');
    } catch (e) {} // Not a regular expression after all, do a string search
  } else {
    query = parseString(query);
  }
  if (typeof query == 'string' ? query == '' : query.test('')) query = /x^/;
  return query;
};

const searchOverlay = (query: any, caseSensitive: boolean) => {
  if (typeof query == 'string') query = new RegExp(query.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&'), caseSensitive ? 'g' : 'gi');
  else if (!query.global) query = new RegExp(query.source, query.ignoreCase ? 'gi' : 'g');

  return {
    token: function (stream: { pos: any; string: any; skipToEnd: () => void }) {
      query.lastIndex = stream.pos;
      var match = query.exec(stream.string);
      if (match && match.index == stream.pos) {
        stream.pos += match[0].length || 1;
        return 'searching';
      } else if (match) {
        stream.pos = match.index;
      } else {
        stream.skipToEnd();
      }
    },
  };
};

const parseStr = (str: String) => {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
};

export { queryCaseInsensitive, parseString, parseQuery, searchOverlay, parseStr };
