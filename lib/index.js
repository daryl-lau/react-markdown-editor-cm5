import xe, { useRef as se, useState as D, useEffect as pe, useImperativeHandle as Be, useContext as F, useReducer as Lt, useLayoutEffect as Mt } from "react";
import Ae from "jquery";
import { Resizable as Pt } from "re-resizable";
import oe, { Pos as K } from "codemirror";
import tt from "highlight.js";
import $t from "rc-tooltip/lib/Tooltip";
import Bt from "markdown-it-sub";
import It from "markdown-it-sup";
import Dt from "markdown-it-ins";
import Ft from "markdown-it-mark";
import Wt from "markdown-it-alerts";
import Ut from "markdown-it-anchor";
import dt from "uslug";
import qt from "markdown-it-task-lists";
import Yt from "markdown-it-emoji";
import Jt from "markdown-it-footnote";
import Gt from "markdown-it-abbr";
import Kt from "markdown-it-deflist";
import Qt from "markdown-it";
import Pe from "classnames";
import nt from "dayjs";
import { debounce as rt, isString as Xt } from "lodash";
var Zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, e = {}, en = {
  get exports() {
    return e;
  },
  set exports(n) {
    e = n;
  }
}, ke = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var at;
function tn() {
  if (at)
    return ke;
  at = 1;
  var n = xe, r = Symbol.for("react.element"), a = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(g, _, S) {
    var C, j = {}, h = null, y = null;
    S !== void 0 && (h = "" + S), _.key !== void 0 && (h = "" + _.key), _.ref !== void 0 && (y = _.ref);
    for (C in _)
      s.call(_, C) && !l.hasOwnProperty(C) && (j[C] = _[C]);
    if (g && g.defaultProps)
      for (C in _ = g.defaultProps, _)
        j[C] === void 0 && (j[C] = _[C]);
    return { $$typeof: r, type: g, key: h, ref: y, props: j, _owner: o.current };
  }
  return ke.Fragment = a, ke.jsx = i, ke.jsxs = i, ke;
}
var Te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var it;
function nn() {
  return it || (it = 1, process.env.NODE_ENV !== "production" && function() {
    var n = xe, r = Symbol.for("react.element"), a = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), g = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), u = Symbol.iterator, p = "@@iterator";
    function m(t) {
      if (t === null || typeof t != "object")
        return null;
      var c = u && t[u] || t[p];
      return typeof c == "function" ? c : null;
    }
    var x = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(t) {
      {
        for (var c = arguments.length, f = new Array(c > 1 ? c - 1 : 0), R = 1; R < c; R++)
          f[R - 1] = arguments[R];
        T("error", t, f);
      }
    }
    function T(t, c, f) {
      {
        var R = x.ReactDebugCurrentFrame, B = R.getStackAddendum();
        B !== "" && (c += "%s", f = f.concat([B]));
        var W = f.map(function(M) {
          return String(M);
        });
        W.unshift("Warning: " + c), Function.prototype.apply.call(console[t], console, W);
      }
    }
    var w = !1, z = !1, d = !1, A = !1, k = !1, N;
    N = Symbol.for("react.module.reference");
    function L(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === s || t === l || k || t === o || t === S || t === C || A || t === y || w || z || d || typeof t == "object" && t !== null && (t.$$typeof === h || t.$$typeof === j || t.$$typeof === i || t.$$typeof === g || t.$$typeof === _ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === N || t.getModuleId !== void 0));
    }
    function P(t, c, f) {
      var R = t.displayName;
      if (R)
        return R;
      var B = c.displayName || c.name || "";
      return B !== "" ? f + "(" + B + ")" : f;
    }
    function E(t) {
      return t.displayName || "Context";
    }
    function H(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case s:
          return "Fragment";
        case a:
          return "Portal";
        case l:
          return "Profiler";
        case o:
          return "StrictMode";
        case S:
          return "Suspense";
        case C:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case g:
            var c = t;
            return E(c) + ".Consumer";
          case i:
            var f = t;
            return E(f._context) + ".Provider";
          case _:
            return P(t, t.render, "ForwardRef");
          case j:
            var R = t.displayName || null;
            return R !== null ? R : H(t.type) || "Memo";
          case h: {
            var B = t, W = B._payload, M = B._init;
            try {
              return H(M(W));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, ee = 0, te, fe, b, V, X, q, G;
    function Y() {
    }
    Y.__reactDisabledLog = !0;
    function le() {
      {
        if (ee === 0) {
          te = console.log, fe = console.info, b = console.warn, V = console.error, X = console.group, q = console.groupCollapsed, G = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Y,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        ee++;
      }
    }
    function Q() {
      {
        if (ee--, ee === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, t, {
              value: te
            }),
            info: $({}, t, {
              value: fe
            }),
            warn: $({}, t, {
              value: b
            }),
            error: $({}, t, {
              value: V
            }),
            group: $({}, t, {
              value: X
            }),
            groupCollapsed: $({}, t, {
              value: q
            }),
            groupEnd: $({}, t, {
              value: G
            })
          });
        }
        ee < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ve = x.ReactCurrentDispatcher, ge;
    function de(t, c, f) {
      {
        if (ge === void 0)
          try {
            throw Error();
          } catch (B) {
            var R = B.stack.trim().match(/\n( *(at )?)/);
            ge = R && R[1] || "";
          }
        return `
` + ge + t;
      }
    }
    var we = !1, ye;
    {
      var Ie = typeof WeakMap == "function" ? WeakMap : Map;
      ye = new Ie();
    }
    function _e(t, c) {
      if (!t || we)
        return "";
      {
        var f = ye.get(t);
        if (f !== void 0)
          return f;
      }
      var R;
      we = !0;
      var B = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = ve.current, ve.current = null, le();
      try {
        if (c) {
          var M = function() {
            throw Error();
          };
          if (Object.defineProperty(M.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(M, []);
            } catch (me) {
              R = me;
            }
            Reflect.construct(t, [], M);
          } else {
            try {
              M.call();
            } catch (me) {
              R = me;
            }
            t.call(M.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (me) {
            R = me;
          }
          t();
        }
      } catch (me) {
        if (me && R && typeof me.stack == "string") {
          for (var O = me.stack.split(`
`), Z = R.stack.split(`
`), U = O.length - 1, J = Z.length - 1; U >= 1 && J >= 0 && O[U] !== Z[J]; )
            J--;
          for (; U >= 1 && J >= 0; U--, J--)
            if (O[U] !== Z[J]) {
              if (U !== 1 || J !== 1)
                do
                  if (U--, J--, J < 0 || O[U] !== Z[J]) {
                    var re = `
` + O[U].replace(" at new ", " at ");
                    return t.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", t.displayName)), typeof t == "function" && ye.set(t, re), re;
                  }
                while (U >= 1 && J >= 0);
              break;
            }
        }
      } finally {
        we = !1, ve.current = W, Q(), Error.prepareStackTrace = B;
      }
      var je = t ? t.displayName || t.name : "", et = je ? de(je) : "";
      return typeof t == "function" && ye.set(t, et), et;
    }
    function Se(t, c, f) {
      return _e(t, !1);
    }
    function Ee(t) {
      var c = t.prototype;
      return !!(c && c.isReactComponent);
    }
    function ue(t, c, f) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return _e(t, Ee(t));
      if (typeof t == "string")
        return de(t);
      switch (t) {
        case S:
          return de("Suspense");
        case C:
          return de("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case _:
            return Se(t.render);
          case j:
            return ue(t.type, c, f);
          case h: {
            var R = t, B = R._payload, W = R._init;
            try {
              return ue(W(B), c, f);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, De = {}, Fe = x.ReactDebugCurrentFrame;
    function He(t) {
      if (t) {
        var c = t._owner, f = ue(t.type, t._source, c ? c.type : null);
        Fe.setExtraStackFrame(f);
      } else
        Fe.setExtraStackFrame(null);
    }
    function vt(t, c, f, R, B) {
      {
        var W = Function.call.bind(ne);
        for (var M in t)
          if (W(t, M)) {
            var O = void 0;
            try {
              if (typeof t[M] != "function") {
                var Z = Error((R || "React class") + ": " + f + " type `" + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[M] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Z.name = "Invariant Violation", Z;
              }
              O = t[M](c, M, R, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (U) {
              O = U;
            }
            O && !(O instanceof Error) && (He(B), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", f, M, typeof O), He(null)), O instanceof Error && !(O.message in De) && (De[O.message] = !0, He(B), v("Failed %s type: %s", f, O.message), He(null));
          }
      }
    }
    var gt = Array.isArray;
    function Ve(t) {
      return gt(t);
    }
    function xt(t) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, f = c && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return f;
      }
    }
    function wt(t) {
      try {
        return We(t), !1;
      } catch {
        return !0;
      }
    }
    function We(t) {
      return "" + t;
    }
    function Ue(t) {
      if (wt(t))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xt(t)), We(t);
    }
    var Ce = x.ReactCurrentOwner, yt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, qe, Ye, Ne;
    Ne = {};
    function bt(t) {
      if (ne.call(t, "ref")) {
        var c = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function jt(t) {
      if (ne.call(t, "key")) {
        var c = Object.getOwnPropertyDescriptor(t, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function _t(t, c) {
      if (typeof t.ref == "string" && Ce.current && c && Ce.current.stateNode !== c) {
        var f = H(Ce.current.type);
        Ne[f] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(Ce.current.type), t.ref), Ne[f] = !0);
      }
    }
    function Ct(t, c) {
      {
        var f = function() {
          qe || (qe = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        f.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: f,
          configurable: !0
        });
      }
    }
    function kt(t, c) {
      {
        var f = function() {
          Ye || (Ye = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        f.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var Tt = function(t, c, f, R, B, W, M) {
      var O = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: c,
        ref: f,
        props: M,
        // Record the component responsible for creating this element.
        _owner: W
      };
      return O._store = {}, Object.defineProperty(O._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(O, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.defineProperty(O, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.freeze && (Object.freeze(O.props), Object.freeze(O)), O;
    };
    function At(t, c, f, R, B) {
      {
        var W, M = {}, O = null, Z = null;
        f !== void 0 && (Ue(f), O = "" + f), jt(c) && (Ue(c.key), O = "" + c.key), bt(c) && (Z = c.ref, _t(c, B));
        for (W in c)
          ne.call(c, W) && !yt.hasOwnProperty(W) && (M[W] = c[W]);
        if (t && t.defaultProps) {
          var U = t.defaultProps;
          for (W in U)
            M[W] === void 0 && (M[W] = U[W]);
        }
        if (O || Z) {
          var J = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          O && Ct(M, J), Z && kt(M, J);
        }
        return Tt(t, O, Z, B, R, Ce.current, M);
      }
    }
    var ze = x.ReactCurrentOwner, Je = x.ReactDebugCurrentFrame;
    function be(t) {
      if (t) {
        var c = t._owner, f = ue(t.type, t._source, c ? c.type : null);
        Je.setExtraStackFrame(f);
      } else
        Je.setExtraStackFrame(null);
    }
    var Oe;
    Oe = !1;
    function Le(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Ge() {
      {
        if (ze.current) {
          var t = H(ze.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Rt(t) {
      {
        if (t !== void 0) {
          var c = t.fileName.replace(/^.*[\\\/]/, ""), f = t.lineNumber;
          return `

Check your code at ` + c + ":" + f + ".";
        }
        return "";
      }
    }
    var Ke = {};
    function St(t) {
      {
        var c = Ge();
        if (!c) {
          var f = typeof t == "string" ? t : t.displayName || t.name;
          f && (c = `

Check the top-level render call using <` + f + ">.");
        }
        return c;
      }
    }
    function Qe(t, c) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var f = St(c);
        if (Ke[f])
          return;
        Ke[f] = !0;
        var R = "";
        t && t._owner && t._owner !== ze.current && (R = " It was passed a child from " + H(t._owner.type) + "."), be(t), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, R), be(null);
      }
    }
    function Xe(t, c) {
      {
        if (typeof t != "object")
          return;
        if (Ve(t))
          for (var f = 0; f < t.length; f++) {
            var R = t[f];
            Le(R) && Qe(R, c);
          }
        else if (Le(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var B = m(t);
          if (typeof B == "function" && B !== t.entries)
            for (var W = B.call(t), M; !(M = W.next()).done; )
              Le(M.value) && Qe(M.value, c);
        }
      }
    }
    function Et(t) {
      {
        var c = t.type;
        if (c == null || typeof c == "string")
          return;
        var f;
        if (typeof c == "function")
          f = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === _ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === j))
          f = c.propTypes;
        else
          return;
        if (f) {
          var R = H(c);
          vt(f, t.props, "prop", R, t);
        } else if (c.PropTypes !== void 0 && !Oe) {
          Oe = !0;
          var B = H(c);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", B || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ht(t) {
      {
        for (var c = Object.keys(t.props), f = 0; f < c.length; f++) {
          var R = c[f];
          if (R !== "children" && R !== "key") {
            be(t), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), be(null);
            break;
          }
        }
        t.ref !== null && (be(t), v("Invalid attribute `ref` supplied to `React.Fragment`."), be(null));
      }
    }
    function Ze(t, c, f, R, B, W) {
      {
        var M = L(t);
        if (!M) {
          var O = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (O += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Z = Rt(B);
          Z ? O += Z : O += Ge();
          var U;
          t === null ? U = "null" : Ve(t) ? U = "array" : t !== void 0 && t.$$typeof === r ? (U = "<" + (H(t.type) || "Unknown") + " />", O = " Did you accidentally export a JSX literal instead of a component?") : U = typeof t, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", U, O);
        }
        var J = At(t, c, f, B, W);
        if (J == null)
          return J;
        if (M) {
          var re = c.children;
          if (re !== void 0)
            if (R)
              if (Ve(re)) {
                for (var je = 0; je < re.length; je++)
                  Xe(re[je], t);
                Object.freeze && Object.freeze(re);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xe(re, t);
        }
        return t === s ? Ht(J) : Et(J), J;
      }
    }
    function Vt(t, c, f) {
      return Ze(t, c, f, !0);
    }
    function Nt(t, c, f) {
      return Ze(t, c, f, !1);
    }
    var zt = Nt, Ot = Vt;
    Te.Fragment = s, Te.jsx = zt, Te.jsxs = Ot;
  }()), Te;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = tn() : n.exports = nn();
})(en);
const rn = (n, r) => (typeof n == "string" ? n = new RegExp(n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), r ? "g" : "gi") : n.global || (n = new RegExp(n.source, n.ignoreCase ? "gi" : "g")), {
  token: function(a) {
    n.lastIndex = a.pos;
    var s = n.exec(a.string);
    if (s && s.index == a.pos)
      return a.pos += s[0].length || 1, "searching";
    s ? a.pos = s.index : a.skipToEnd();
  }
}), an = (n) => n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), sn = (n) => {
  let { searchInput: r, editor: a, showPannel: s, setSearchInput: o } = n;
  const l = se(null), [i, g] = D(), [_, S] = D(), [C, j] = D(), [h, y] = D(), [u, p] = D(""), [m, x] = D(!1), [v, T] = D(!1);
  let w = a;
  const z = () => {
    S(rn(d(r), v));
    const b = d(r);
    y(b);
  };
  pe(() => {
    w.showMatchesOnScrollbar && h && (C && C.clear(), j(w.showMatchesOnScrollbar(h)));
  }, [h]);
  const d = (b) => {
    if (!b)
      return "";
    let V;
    try {
      m ? V = new RegExp(b, v ? "g" : "gi") : V = new RegExp(an(b), v ? "g" : "gi");
    } catch {
    }
    return V || "";
  };
  pe(() => {
    _ && w.addOverlay(_);
  }, [_, w]);
  const A = () => {
    i && g(void 0), w.operation(function() {
      w.removeOverlay(_);
    }), C && (C.clear(), j(null));
  }, k = () => {
    let b = w.getSearchCursor(d(r), {
      line: 0,
      ch: 0
    });
    b.findNext() && (w.setSelection(b == null ? void 0 : b.from(), b == null ? void 0 : b.to()), w.scrollIntoView({ from: b.from(), to: b.to() }, 100)), g(b);
  };
  pe(() => {
    var q;
    if ((q = l.current) == null || q.focus(), !r) {
      A();
      return;
    }
    const b = w.getCursor();
    let V;
    V = w.getSearchCursor(d(r), {
      line: b.line,
      ch: b.ch - r.length
    }), V.findNext() ? (w.setSelection(V == null ? void 0 : V.from(), V == null ? void 0 : V.to()), w.scrollIntoView({ from: V.from(), to: V.to() }, 40)) : (V = w.getSearchCursor(d(r), {
      line: 0,
      ch: 0
    }), V.findNext() && (w.setSelection(V == null ? void 0 : V.from(), V == null ? void 0 : V.to()), w.scrollIntoView({ from: V.from(), to: V.to() }, 40))), g(V), A(), z();
  }, [r, w]);
  const N = () => {
    if (!(i == null ? void 0 : i.findPrevious())) {
      k();
      return;
    }
    w.setSelection(i == null ? void 0 : i.from(), i == null ? void 0 : i.to()), w.scrollIntoView(
      {
        from: i == null ? void 0 : i.from(),
        to: i == null ? void 0 : i.to()
      },
      40
    );
  }, L = () => {
    if (!(i == null ? void 0 : i.findNext())) {
      k();
      return;
    }
    w.setSelection(i == null ? void 0 : i.from(), i == null ? void 0 : i.to()), w.scrollIntoView(
      {
        from: i == null ? void 0 : i.from(),
        to: i == null ? void 0 : i.to()
      },
      40
    );
  }, P = () => {
    A(), s(!1);
  }, E = () => {
    if (w.getOption("readOnly") || !u)
      return;
    i == null || i.replace(u), (i == null ? void 0 : i.findNext()) && (w.setSelection(i == null ? void 0 : i.from(), i == null ? void 0 : i.to()), w.scrollIntoView(
      {
        from: i == null ? void 0 : i.from(),
        to: i == null ? void 0 : i.to()
      },
      100
    ));
  }, H = () => {
    for (var b = w.getSearchCursor(d(r)); b.findNext(); )
      typeof r != "string" || b.replace(u);
  }, $ = (b) => {
    p(b.target.value);
  }, ee = (b) => {
    o(b.target.value), A(), r || z();
  }, te = () => {
    x((b) => !b);
  }, fe = () => {
    T((b) => !b);
  };
  return pe(() => {
    A(), h && (z(), k());
  }, [v, m]), /* @__PURE__ */ e.jsxs("div", { className: "search-replace-pannel", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "search", children: [
      /* @__PURE__ */ e.jsx("div", { className: "search-input", children: /* @__PURE__ */ e.jsx("input", { ref: l, type: "text", value: r, onChange: (b) => ee(b) }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "button-group", children: [
        /* @__PURE__ */ e.jsx("button", { onClick: te, style: { color: m ? "#e45649" : "" }, children: ".*" }),
        /* @__PURE__ */ e.jsx("button", { onClick: fe, style: { color: v ? "#e45649" : "" }, children: "Aa" }),
        /* @__PURE__ */ e.jsx("button", { onClick: N, children: "↑" }),
        /* @__PURE__ */ e.jsx("button", { onClick: L, children: "↓" }),
        /* @__PURE__ */ e.jsx("button", { onClick: P, children: "×" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "replace", children: /* @__PURE__ */ e.jsxs("div", { className: "replace-input", children: [
      /* @__PURE__ */ e.jsx("input", { type: "text", value: u, onChange: (b) => $(b) }),
      /* @__PURE__ */ e.jsxs("div", { className: "button-group", children: [
        /* @__PURE__ */ e.jsx("button", { onClick: E, children: "replace" }),
        /* @__PURE__ */ e.jsx("button", { onClick: H, children: "replace all" })
      ] })
    ] }) })
  ] });
};
function st(n, r) {
  for (var a = n.getCursor(), s = n.lineCount(), o = [], l = a.line + 1; l < s; l++)
    o.push(n.getLine(l));
  return o = n.getLine(a.line).slice(a.ch) + `
` + o.join(`
`), r(o);
}
function ot(n) {
  var r;
  return r = n.match(/`{3,}/g), r && r.length % 2 ? !1 : (r = n.match(/`/g), !(r && r.length % 2));
}
function on(n, r, a) {
  let s = n.getCursor(), o = n.getTokenAt(s);
  const l = a.text;
  let i = "";
  st(n, ot) && (i = "\n\n```");
  let g = l + i;
  n.replaceRange(g, { line: s.line, ch: 3 }, { line: s.line, ch: o.end }), st(n, ot) ? n.execCommand("goLineUp") : Promise.resolve().then(() => {
    n.closeHint();
  });
}
function cn(n, r, a) {
  let s = n.getCursor(), o = n.getTokenAt(s), l = 0, g = o.state.streamSeen.string.match(/^\s+/);
  g && (l = g[0].length);
  const _ = a.text;
  let S = ` h${_.length}`, C = _ + S;
  n.replaceRange(C, { line: s.line, ch: l }, { line: s.line, ch: o.end }), Promise.resolve().then(() => {
    let j = n.getCursor(), h = n.getTokenAt(j);
    n.setSelection({ line: j.line, ch: h.end }, { line: j.line, ch: h.end - 2 });
  });
}
const ln = (n, r) => {
  let a = n.getCursor(), s = n.getTokenAt(a);
  if (s.type && /header\sheader-\d/.test(s.type)) {
    let o = [];
    const l = s.state.streamSeen.string;
    let i = l.trimStart().split(/\s+/);
    if (i.length === 1) {
      for (let _ = i[0].length; _ <= 6; _++) {
        let S = "#".repeat(_);
        o.push({
          text: `${S}`,
          displayText: `${S} h${S.length}`,
          hint: cn
        });
      }
      const g = s.end;
      return {
        list: o,
        from: { ch: l.length, line: a.line },
        to: { ch: g, line: a.line }
      };
    }
  }
  if (s.type && s.type === "comment" && !s.start) {
    r = r || ["bash", "javascript", "typescript", "go", "python", "jsx", "tsx", "sql", "markmap"];
    let o = s.state.base.fencedEndRE;
    const l = s.string;
    let i = l.split("```")[1];
    if (l && /^`{3}/.test(l) && o && !r.includes(i)) {
      let g = [];
      r.filter((S) => S.startsWith(i)).forEach(
        (S) => g.push({
          text: S,
          displayText: S,
          hint: on
        })
      );
      const _ = s.end;
      return {
        list: g,
        from: { ch: s.string.length, line: a.line },
        to: { ch: _, line: a.line }
      };
    }
  }
};
const pn = {
  placeholder: "write somthing...",
  mode: "gfm",
  lineNumbers: !0,
  // 是否显示行号
  theme: "atom-dark",
  // 主题
  tabSize: 4,
  // 默认4
  indentUnit: 4,
  // 代码块中换行缩进大小
  matchBrackets: !0,
  // 括号匹配
  matchTags: { bothTags: !0 },
  //标签匹配
  singleCursorHeightPerLine: !1,
  lineWrapping: !0,
  styleActiveLine: { nonEmpty: !0 },
  // 当前行高亮，nonEmpty表示当选择具体文本时是否高亮当前行
  foldGutter: !0,
  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
  autoCloseBrackets: !0,
  // 自动闭合括号
  autoCloseTags: !0
  // 自动闭合标签
}, dn = (n, r) => {
  const { editorRef: a, onSave: s, uploadImageMethod: o, initialValue: l, options: i, languages: g } = n, _ = se(null), { state: S, onScroll: C, onMouseEnter: j, dispatch: h } = n, y = se();
  y.current = S;
  const [u, p] = D(!1), [m, x] = D("");
  return pe(() => {
    a.current = oe.fromTextArea(_.current, { ...pn, ...i }), a.current.setSize("100%", "100%");
    function v(d, A) {
      if (d.isReadOnly())
        return oe.Pass;
      d.operation(function() {
        for (var k = d.listSelections().length, N = [], L = -1, P = 0; P < k; P++) {
          var E = d.listSelections()[P].head;
          if (!(E.line <= L)) {
            var H = K(E.line + (A ? 0 : 1), 0);
            d.replaceRange(`
`, H, void 0, "+insertLine"), d.indentLine(H.line, void 0), N.push({ head: H, anchor: H }), L = E.line + 1;
          }
        }
        d.setSelections(N);
      }), d.execCommand("indentAuto");
    }
    const T = {
      "Ctrl-Down": function(d) {
        let A = d.listSelections().length;
        for (let N = 0; N < A; N++) {
          var k = d.listSelections()[N];
          k.empty() ? d.replaceRange(d.getLine(k.head.line) + `
`, K(k.head.line, 0)) : d.replaceRange(d.getRange(k.from(), k.to()), k.from());
        }
      },
      "Alt-Up": function(d) {
        if (d.isReadOnly())
          return oe.Pass;
        let A = d.listSelections(), k = [], N = d.firstLine() - 1, L = [];
        for (let P = 0; P < A.length; P++) {
          let E = A[P], H = E.from().line - 1, $ = E.to().line;
          L.push({
            anchor: K(E.anchor.line - 1, E.anchor.ch),
            head: K(E.head.line - 1, E.head.ch)
          }), E.to().ch === 0 && !E.empty() && --$, H > N ? k.push(H, $) : k.length && (k[k.length - 1] = $), N = $;
        }
        d.operation(function() {
          for (let P = 0; P < k.length; P += 2) {
            let E = k[P], H = k[P + 1], $ = d.getLine(E);
            d.replaceRange("", K(E, 0), K(E + 1, 0), "+swapLine"), H > d.lastLine() ? d.replaceRange(`
` + $, K(d.lastLine()), void 0, "+swapLine") : d.replaceRange($ + `
`, K(H, 0), void 0, "+swapLine");
          }
          d.setSelections(L);
        });
      },
      "Alt-Down": function(d) {
        if (d.isReadOnly())
          return oe.Pass;
        let A = d.listSelections(), k = [], N = d.lastLine() + 1;
        for (let H = A.length - 1; H >= 0; H--) {
          var L = A[H], P = L.to().line + 1, E = L.from().line;
          L.to().ch === 0 && !L.empty() && P--, P < N ? k.push(P, E) : k.length && (k[k.length - 1] = E), N = E;
        }
        d.operation(function() {
          for (var H = k.length - 2; H >= 0; H -= 2) {
            let $ = k[H], ee = k[H + 1], te = d.getLine($);
            $ === d.lastLine() ? d.replaceRange("", K($ - 1), K($), "+swapLine") : (d.replaceRange("", K($, 0), K($ + 1, 0), "+swapLine"), d.replaceRange(te + `
`, K(ee, 0), void 0, "+swapLine"));
          }
          d.scrollIntoView(K(P, 1));
        });
      },
      "Ctrl-Shift-Z": function(d) {
        d.execCommand("Ctrl-Y");
      },
      "Ctrl-Enter": function(d) {
        return v(d, !1);
      },
      "Shift-Ctrl-Enter": function(d) {
        return v(d, !0);
      },
      "Ctrl-S": function() {
        s && s(y.current.mdValue, y.current.htmlValue, y.current.tocValue);
      }
    };
    a.current.getSearchCursor && (T["Ctrl-F"] = function(d) {
      let A = d.getSelection();
      x(A), p(!0);
    }), a.current.setOption("extraKeys", T), a.current.setOption("hintOptions", {
      hint: (d) => ln(d, g),
      completeSingle: !1,
      closeOnUnfocus: !1
    }), a.current.on("change", function(d) {
      return h({ type: "setMdValue", value: d.getValue() }), d.showHint && d.showHint(), oe.Pass;
    });
    const w = (d, A, k) => {
      const N = a.current;
      if (!N)
        return oe.Pass;
      N.replaceRange(d, K(A, k));
    }, z = (d, A, k, N) => {
      const L = `![${d || ""}](${A || ""} "${d || ""}")`;
      w(L, k, N);
    };
    a.current.on("scroll", () => C()), a.current.on("paste", (d, A) => {
      if (!(A.clipboardData && A.clipboardData.items)) {
        alert("该浏览器不支持操作");
        return;
      }
      for (var k = 0, N = A.clipboardData.items.length; k < N; k++) {
        var L = A.clipboardData.items[k];
        if (L.kind === "string")
          L.getAsString(function() {
          });
        else if (L.kind === "file") {
          var P = L.getAsFile();
          const E = d.getCursor();
          o && o(P, (H, $) => z(H, $, E.line, E.ch));
        }
      }
    });
  }, []), pe(() => {
    a.current && a.current.setValue(l);
  }, [l]), /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: "rmdcm5-editor", onMouseEnter: j, children: [
    u && /* @__PURE__ */ e.jsx(sn, { searchInput: m, editor: a.current, showPannel: p, setSearchInput: x }),
    /* @__PURE__ */ e.jsx("textarea", { ref: _ })
  ] }) });
}, un = xe.forwardRef(dn);
var $e = {}, mn = {
  get exports() {
    return $e;
  },
  set exports(n) {
    $e = n;
  }
};
(function(n, r) {
  (function(a, s) {
    n.exports = s(xe);
  })(Zt, function(a) {
    function s(j, h, y, u) {
      return h === void 0 && (h = {}), Object.keys(h).reduce(function(p, m) {
        if (/^on.*/.test(m))
          return p;
        var x = m;
        /^(data|aria)-/.test(m) || y.filter(function(A) {
          return A instanceof RegExp ? A.test(m) : A === m;
        }).length === 0 && (x = o(m));
        var v, T, w = u(j, x);
        if (w.name === "style")
          p[w.name] = (v = h.style, T = {}, v.split(";").filter(function(A) {
            return A.trim() !== "";
          }).forEach(function(A) {
            var k, N = A.split(":");
            if (N.length > 1) {
              var L = function(E) {
                return /^-ms-/.test(E) && (E = E.substr(1)), E.startsWith("--") ? E : o(E);
              }(N[0].trim()), P = (k = N.slice(1).join(":").trim(), /^\d+$/.test(k) ? Number(k) : k.replace(/'/g, '"'));
              T[L] = P;
            }
          }), T);
        else {
          var z = h[m], d = z === "" || String(z).toLowerCase() === x.toLowerCase();
          p[w.name] = w.isBoolean ? d : z;
        }
        return p;
      }, {});
    }
    function o(j) {
      return j.replace(/(-|:)(.)/g, function(h, y, u) {
        return u.toUpperCase();
      });
    }
    a = a && a.hasOwnProperty("default") ? a.default : a;
    var l = ["table", "tbody", "thead", "tfoot", "tr"], i = { for: "htmlFor", class: "className", allowfullscreen: ["allowFullScreen", "allowFullscreen"], autocomplete: "autoComplete", autofocus: ["autoFocus"], contenteditable: "contentEditable", spellcheck: "spellCheck", srcdoc: "srcDoc", srcset: "srcSet", itemscope: "itemScope", itemprop: "itemProp", itemtype: "itemType" };
    function g(j, h) {
      var y = i[h], u = document.createElement(j);
      if (y)
        return { name: Array.isArray(y) ? y[0] : y, isBoolean: _(u, Array.isArray(y) ? y[1] || h : y) };
      for (var p in u)
        if (p.toLowerCase() === h.toLowerCase())
          return { name: p, isBoolean: _(u, p) };
      return { name: h, isBoolean: _(u, h) };
    }
    function _(j, h) {
      return j.setAttribute(h, ""), j[h] === !0 || S.indexOf(h) > -1;
    }
    var S = ["itemScope"];
    function C(j, h, y, u) {
      u === void 0 && (u = null);
      var p = y[j], m = y._;
      return p ? a.createElement(p, h, u) : m ? m(j, h, u) : a.createElement(j, h, u);
    }
    return function(j, h) {
      if (h === void 0 && (h = {}), typeof j != "string")
        throw new TypeError("Expected HTML string");
      var y = document.createElement("div");
      y.innerHTML = j.trim();
      var u = Array.from(y.childNodes).map(function(p, m) {
        return function x(v, T, w) {
          var z = w.transform || {}, d = w.preserveAttributes || [], A = w.dangerouslySetChildren || ["style"], k = z._;
          if (v.nodeType === 8)
            return null;
          if (v.nodeType === 3) {
            var N = v.textContent;
            return k ? k(N) : N;
          }
          for (var L = {}, P = v.attributes, E = 0; E < P.length; E++)
            L[P[E].name] = P[E].value;
          L.key = T.toString();
          var H = v.tagName.toLowerCase(), $ = s(H, L, d, g), ee = Array.from(v.childNodes).map(function(b, V) {
            return l.indexOf(H) > -1 && b.nodeType === 3 && (b.textContent = b.textContent.trim(), b.textContent === "") ? null : x(b, T + "." + V, w);
          }).filter(Boolean);
          if (A.indexOf(H) > -1) {
            var te = v.innerHTML;
            return te && (H !== "style" && H !== "script" && (te = te.replace(/"/g, "&quot;")), $.dangerouslySetInnerHTML = { __html: te.trim() }), C(H, $, z);
          }
          var fe = ee.length === 0 ? null : ee;
          return C(H, $, z, fe);
        }(p, String(m), h);
      }).filter(Boolean);
      return u.length === 1 ? u[0] : u;
    };
  });
})(mn);
const hn = $e;
var Re = {};
Object.defineProperty(Re, "__esModule", {
  value: !0
});
var ut = Re.placements = Re.default = void 0, ae = {
  adjustX: 1,
  adjustY: 1
}, ie = [0, 0], mt = {
  left: {
    points: ["cr", "cl"],
    overflow: ae,
    offset: [-4, 0],
    targetOffset: ie
  },
  right: {
    points: ["cl", "cr"],
    overflow: ae,
    offset: [4, 0],
    targetOffset: ie
  },
  top: {
    points: ["bc", "tc"],
    overflow: ae,
    offset: [0, -4],
    targetOffset: ie
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: ae,
    offset: [0, 4],
    targetOffset: ie
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: ae,
    offset: [0, -4],
    targetOffset: ie
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: ae,
    offset: [-4, 0],
    targetOffset: ie
  },
  topRight: {
    points: ["br", "tr"],
    overflow: ae,
    offset: [0, -4],
    targetOffset: ie
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: ae,
    offset: [4, 0],
    targetOffset: ie
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: ae,
    offset: [0, 4],
    targetOffset: ie
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: ae,
    offset: [4, 0],
    targetOffset: ie
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: ae,
    offset: [0, 4],
    targetOffset: ie
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: ae,
    offset: [-4, 0],
    targetOffset: ie
  }
};
ut = Re.placements = mt;
var fn = mt;
Re.default = fn;
const vn = {
  adjustX: 1,
  adjustY: 1
}, ct = {
  adjustX: 0,
  adjustY: 0
}, gn = [0, 0];
function lt(n) {
  return typeof n == "boolean" ? n ? vn : ct : {
    ...ct,
    ...n
  };
}
function xn(n) {
  const { arrowWidth: r = 6, horizontalArrowShift: a = 50, verticalArrowShift: s = 50, autoAdjustOverflow: o } = n, l = {
    left: {
      points: ["cr", "cl"],
      offset: [-4, 0]
    },
    right: {
      points: ["cl", "cr"],
      offset: [4, 0]
    },
    top: {
      points: ["bc", "tc"],
      offset: [0, -4]
    },
    bottom: {
      points: ["tc", "bc"],
      offset: [0, 4]
    },
    topLeft: {
      points: ["bl", "tc"],
      offset: [-a, -4]
    },
    leftTop: {
      points: ["tr", "cl"],
      offset: [-4, -(s + r)]
    },
    topRight: {
      points: ["br", "tc"],
      offset: [a + r, -4]
    },
    rightTop: {
      points: ["tl", "cr"],
      offset: [4, -(s + r)]
    },
    bottomRight: {
      points: ["tr", "bc"],
      offset: [a + r, 4]
    },
    rightBottom: {
      points: ["bl", "cr"],
      offset: [4, s + r]
    },
    bottomLeft: {
      points: ["tl", "bc"],
      offset: [-a, 4]
    },
    leftBottom: {
      points: ["br", "cl"],
      offset: [-4, s + r]
    }
  };
  return Object.keys(l).forEach((i) => {
    l[i] = n.arrowPointAtCenter ? {
      ...l[i],
      overflow: lt(o),
      targetOffset: gn
    } : {
      ...ut[i],
      overflow: lt(o)
    }, l[i].ignoreShake = !0;
  }), l;
}
const he = (n) => {
  const { content: r, children: a, trigger: s, transitionName: o, mouseEnterDelay: l, mouseLeaveDelay: i, ...g } = n, _ = () => typeof r == "function" ? r() : r, S = () => {
    const { builtinPlacements: j, arrowPointAtCenter: h, autoAdjustOverflow: y } = n;
    return j || xn({
      arrowPointAtCenter: h,
      autoAdjustOverflow: y
    });
  }, C = (j, h) => {
    const y = S(), u = Object.keys(y).filter(
      (x) => y[x].points[0] === h.points[0] && y[x].points[1] === h.points[1]
    )[0];
    if (!u)
      return;
    const p = j.getBoundingClientRect(), m = {
      top: "50%",
      left: "50%"
    };
    u.indexOf("top") >= 0 || u.indexOf("Bottom") >= 0 ? m.top = `${p.height - h.offset[1]}px` : (u.indexOf("Top") >= 0 || u.indexOf("bottom") >= 0) && (m.top = `${-h.offset[1]}px`), u.indexOf("left") >= 0 || u.indexOf("Right") >= 0 ? m.left = `${p.width - h.offset[0]}px` : (u.indexOf("right") >= 0 || u.indexOf("Left") >= 0) && (m.left = `${-h.offset[0]}px`), j.style.transformOrigin = `${m.left} ${m.top}`;
  };
  return /* @__PURE__ */ e.jsx(
    $t,
    {
      overlay: _,
      trigger: s || "click",
      prefixCls: "popover",
      transitionName: o,
      mouseEnterDelay: l,
      mouseLeaveDelay: i,
      builtinPlacements: S(),
      onPopupAlign: C,
      arrowContent: /* @__PURE__ */ e.jsx("div", { className: "popover-arrow-inner" }),
      ...g,
      children: a
    }
  );
};
he.defaultProps = {
  prefixCls: "popover",
  placement: "top",
  transitionName: "popover-zoom",
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: !1,
  autoAdjustOverflow: !0
};
const wn = {
  markmap: "markdown"
};
let ce = Qt({
  html: !0,
  breaks: !0,
  linkify: !0,
  typographer: !0,
  highlight: function(n, r) {
    const a = wn[r] || r;
    if (a && tt.getLanguage(a))
      try {
        const g = tt.highlight(n, { language: a, ignoreIllegals: !0 }).value;
        return `<pre class="hljs codeWrapper"><table><tbody><tr><td class="gutter"><pre>${g.split(/\n/).slice(0, -1).map((j, h) => `<span class="code-line">${h + 1}</span><br>`).join("")}</pre></td><td><code class=${`language-${r}`}>${g}</code></td></tr></tbody></table></pre>`;
      } catch {
      }
    const s = ce.utils.escapeHtml(n);
    return `<pre class="hljs codeWrapper"><table><tbody><tr><td class="gutter"><pre>${s.split(/\n/).slice(0, -1).map((g, _) => `<span class="code-line">${_ + 1}</span><br>`).join("")}</pre></td><td><code class=${`language-${r}`}>${s}</code></td></tr></tbody></table></pre>`;
  }
});
function yn(n) {
  if (n && n.attrs && n.attrs.length > 0) {
    const r = n.attrs.find((a) => Array.isArray(a) && a.length >= 2 ? a[0] === "id" : !1);
    if (r && Array.isArray(r) && r.length >= 2) {
      const [a, s] = r;
      return s;
    }
  }
  return null;
}
function bn(n, r) {
  const a = [];
  let s = null;
  return r.forEach((o) => {
    if (o.type === "heading_open") {
      const l = yn(o), i = parseInt(o.tag.toLowerCase().replace("h", ""), 10);
      n.indexOf(i) >= 0 && (s = {
        level: i,
        text: null,
        anchor: l || null
      });
    } else if (s && o.type === "inline") {
      const l = o.children.filter((i) => i.type === "text" || i.type === "code_inline").reduce((i, g) => i + g.content, "");
      s.text = l;
    } else
      o.type === "heading_close" && (s && a.push(s), s = null);
  }), a;
}
function jn(n) {
  return Math.min(...n.map((r) => r.level));
}
function Me(n, r, a, s) {
  const o = { level: n, text: r, anchor: a, children: [], parent: s };
  return s.children.push(o), o;
}
function _n(n) {
  const r = { level: jn(n) - 1, anchor: null, text: null, children: [], parent: null };
  let a = r, s = a;
  return n.forEach((o) => {
    if (o.level > s.level)
      Array.from({ length: o.level - s.level }).forEach((l) => {
        a = s, s = Me(o.level, null, null, a);
      }), s.text = o.text, s.anchor = o.anchor;
    else if (o.level === s.level)
      s = Me(o.level, o.text, o.anchor, a);
    else if (o.level < s.level) {
      for (let l = 0; l < s.level - o.level; l++)
        a = a.parent;
      s = Me(o.level, o.text, o.anchor, a);
    }
  }), r;
}
function ht(n, r, a) {
  const s = n.children.map((o) => {
    let l = "<li>", i = o.anchor, g = o.text ? a.renderInline(o.text) : null;
    return l += i ? `<a href="#${i}">${g}</a>` : g || "", l + (o.children.length > 0 ? ht(o, r, a) : "") + "</li>";
  }).join("");
  return s ? '<ul class="root">' + s + "</ul>" : "";
}
function Cn(n, r, a, s, o) {
  var l;
  return n[r].map && n[r].level === 0 && (l = n[r].map[0], n[r].attrJoin("class", "line"), n[r].attrSet("data-line", String(l))), o.renderToken(n, r, a, s, o);
}
ce.renderer.rules.paragraph_open = ce.renderer.rules.heading_open = Cn;
var kn = ce.renderer.rules.link_open || function(n, r, a, s, o) {
  return o.renderToken(n, r, a);
};
ce.renderer.rules.link_open = function(n, r, a, s, o) {
  var l = n[r].attrIndex("target");
  return l < 0 ? n[r].attrPush(["target", "_blank"]) : n[r].attrs[l][1] = "_blank", kn(n, r, a, s, o);
};
ce.renderer.rules.table_open = function(n, r, a, s, o) {
  var l;
  const { map: i, level: g, type: _ } = n[r];
  return i && g === 0 && _ === "table_open" ? (l = n[r].map[0], `<div class="table-container line" data-line=${l}>` + o.renderToken(n, r, a, s, o)) : o.renderToken(n, r, a, s, o);
};
ce.renderer.rules.table_close = function(n, r, a, s, o) {
  return n[r].type === "table_close" && n[r].level === 0 ? o.renderToken(n, r, a, s, o) + "</div>" : o.renderToken(n, r, a, s, o);
};
ce.use(Yt).use(Jt).use(Gt).use(Kt).use(Bt).use(It).use(Dt).use(Ft).use(Wt).use(Ut, {
  slugify: (n) => dt(n)
}).use(qt);
const Tn = (n, r) => {
  const { state: a, height: s, onScroll: o, onMouseEnter: l, dispatch: i, onChange: g, toolBarHeight: _, withToc: S = !0 } = n, [C, j] = D(""), [h, y] = D(!1), u = se();
  Be(r, () => ({
    getScrollTop: () => u.current.scrollTop,
    getOffsetTop: () => u.current.getBoundingClientRect().top,
    getLines: () => Array.from(u.current.getElementsByClassName("line")),
    getScrollHeight: () => u.current.scrollHeight,
    scrollTo: (x) => {
      Ae(u.current).stop(!0).animate(
        {
          scrollTop: x
        },
        100,
        "linear"
      );
    }
  })), pe(() => {
    S && ce.core.ruler.push("generate_toc", function(x) {
      const v = bn([1, 2, 3, 4, 5, 6], x.tokens), T = _n(v), w = ht(T, {}, ce);
      i({ type: "setTocValue", value: w });
    });
  }, []), pe(() => {
    const x = ce.render(a.mdValue);
    i({ type: "setHtmlValue", value: x }), g && g(a.mdValue, x, a.tocValue), j(x);
  }, [a.mdValue, a.tocValue]);
  const p = () => {
    const x = {
      transform: {
        a: ({ children: v }) => /* @__PURE__ */ e.jsx(
          "a",
          {
            onClick: () => {
              const T = dt(v[0]);
              Ae(".rmdcm5-container").stop(!0).animate({
                scrollTop: Ae(`#${T}`)[0].offsetTop - Ae(".rmdcm5-container")[0].offsetTop
              });
            },
            children: v
          }
        )
      }
    };
    return /* @__PURE__ */ e.jsx("div", { className: "toc-list", children: /* @__PURE__ */ e.jsx("div", { children: hn(a.tocValue, x) }) });
  }, m = () => {
    y((x) => !x);
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        ref: u,
        style: { height: s },
        className: "rmdcm5-container",
        dangerouslySetInnerHTML: { __html: C },
        onScroll: () => o(),
        onMouseEnter: l
      }
    ),
    S && a.tocValue && /* @__PURE__ */ e.jsx(
      he,
      {
        content: p(),
        transitionName: "popover-fade",
        placement: "leftTop",
        showArrow: !1,
        trigger: "hover",
        visible: h,
        onVisibleChange: m,
        overlayClassName: "toc-popover-wrap",
        destroyTooltipOnHide: !0,
        children: /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper toc-icon", style: { top: `${_ + 10}px` }, children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "59591", children: /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M928 848H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32zM118.62 726.6l192-192a32 32 0 0 0 0-45.24l-192-192C98.54 277.32 64 291.56 64 320v384c0 28.62 34.66 42.6 54.62 22.6zM934.34 336H473.66A25.64 25.64 0 0 0 448 361.66v44.68A25.64 25.64 0 0 0 473.66 432h460.68A25.64 25.64 0 0 0 960 406.34v-44.68A25.64 25.64 0 0 0 934.34 336zM928 96H96A32 32 0 0 0 64 128v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32V128a32 32 0 0 0-32-32z m6.34 496H473.66A25.64 25.64 0 0 0 448 617.66v44.68A25.64 25.64 0 0 0 473.66 688h460.68A25.64 25.64 0 0 0 960 662.34v-44.68A25.64 25.64 0 0 0 934.34 592z",
            "p-id": "59592"
          }
        ) }) })
      }
    )
  ] });
}, An = xe.forwardRef(Tn), I = xe.createContext(null), Rn = () => {
  const { editorRef: n } = F(I), r = () => {
    n.current.undo();
  };
  return /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", onClick: r, children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "6863", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M56.97 56.97L161.3 161.3C251.05 71.534 375.03 16 511.998 16 785.32 16 1008.2 239.05 1008 512.37 1007.8 786.134 785.81 1008 512 1008c-127.852 0-244.404-48.374-332.356-127.816-10.226-9.236-10.706-25.122-0.964-34.866l39.476-39.476c8.996-8.996 23.506-9.57 33.002-1.104C320.426 866.492 411.79 904 512 904c216.642 0 392-175.324 392-392 0-216.642-175.324-392-392-392-108.326 0-206.314 43.846-277.228 114.772l108.256 108.258c15.12 15.12 4.412 40.97-16.97 40.97H40c-13.254 0-24-10.746-24-24V73.942c0-21.382 25.852-32.09 40.97-16.972z",
      "p-id": "6864"
    }
  ) }) });
}, Sn = () => {
  const { editorRef: n } = F(I), r = () => {
    n.current.redo();
  };
  return /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", onClick: r, children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "68552", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M967.03 56.97L862.7 161.3C772.95 71.534 648.97 16 512.002 16 238.68 16 15.8 239.05 16 512.37 16.2 786.134 238.19 1008 512 1008c127.852 0 244.404-48.374 332.356-127.816 10.226-9.236 10.706-25.122 0.964-34.866l-39.476-39.476c-8.996-8.996-23.506-9.57-33.002-1.104C703.574 866.492 612.21 904 512 904c-216.642 0-392-175.324-392-392 0-216.642 175.324-392 392-392 108.326 0 206.314 43.846 277.228 114.772l-108.256 108.258c-15.12 15.12-4.412 40.97 16.97 40.97H984c13.254 0 24-10.746 24-24V73.942c0-21.382-25.852-32.09-40.97-16.972z",
      "p-id": "68553"
    }
  ) }) });
}, En = () => {
  const { wrapTextWith: n } = F(I), r = () => {
    n("**");
  };
  return /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", onClick: r, children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "6997", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M757.04 477.56A239.52 239.52 0 0 0 592 64H224a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h32v704H224a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h416a256 256 0 0 0 256-256c0-98.98-56.76-183.84-138.96-226.44zM384 160h176a144 144 0 0 1 0 288h-176z m224 704H384V544h224a160 160 0 0 1 0 320z",
      "p-id": "6998"
    }
  ) }) });
}, Hn = () => {
  const { wrapTextWith: n } = F(I), r = () => {
    n("~~");
  };
  return /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", onClick: r, children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "69356", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M300.78 416h226.34l-92.62-46.32a91.3 91.3 0 0 1 0-163.36A135.86 135.86 0 0 1 495.12 192H620a91.18 91.18 0 0 1 72.98 36.5l30.18 40.26a32 32 0 0 0 44.8 6.42l51.24-38.38a32 32 0 0 0 6.42-44.8L795.4 151.68A218.88 218.88 0 0 0 620.2 64h-125.08a264.98 264.98 0 0 0-117.88 27.82c-80.7 40.34-128.38 124.62-120.36 216 3.52 40.18 20.04 76.74 43.9 108.18zM992 480H32a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h960a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m-185 160h-182.14l28.64 14.32a91.3 91.3 0 0 1 0 163.36 135.86 135.86 0 0 1-60.62 14.32H468a91.18 91.18 0 0 1-72.98-36.5l-30.18-40.26a32 32 0 0 0-44.8-6.42L268.8 787.2a32 32 0 0 0-6.42 44.8l30.22 40.34A218.88 218.88 0 0 0 467.8 960h125.08a264.84 264.84 0 0 0 117.86-27.82c80.72-40.34 128.4-124.62 120.38-216-2.38-27.38-11.78-52.54-24.12-76.18z",
      "p-id": "69357"
    }
  ) }) });
}, Vn = () => {
  const { wrapTextWith: n } = F(I), r = () => {
    n("*");
  };
  return /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", onClick: r, children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "67877", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M832 96v32a32 32 0 0 1-32 32h-134l-176 704h118a32 32 0 0 1 32 32v32a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32v-32a32 32 0 0 1 32-32h134l176-704h-118a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h384a32 32 0 0 1 32 32z",
      "p-id": "67878"
    }
  ) }) });
}, Nn = () => {
  const { switchTextCase: n } = F(I), r = () => {
    n("upperCase");
  };
  return /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", onClick: r, children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "69758", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M928 864h-66.64l-270-778.48A32 32 0 0 0 561.1 64h-98.2a32 32 0 0 0-30.24 21.52L162.64 864H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32h-70.88l66.62-192h328.52l66.62 192H672a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32zM381.06 576L512 198.62 642.94 576z",
      "p-id": "69759"
    }
  ) }) });
}, zn = () => {
  const { switchTextCase: n } = F(I), r = () => {
    n("lowerCase");
  };
  return /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", onClick: r, children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "68145", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M216.64 803.2c64.32 0 122.88-33.6 172.8-74.88h2.88l7.68 62.4h72v-320.64c0-128.64-53.76-214.08-180.48-214.08-83.52 0-157.44 37.44-205.44 68.16l34.56 60.48c41.28-27.84 96-55.68 156.48-55.68 85.44 0 107.52 64.32 107.52 131.52C162.88 485.44 64 542.08 64 655.36c0 94.08 65.28 147.84 152.64 147.84z m24.96-70.08c-51.84 0-92.16-24-92.16-83.52 0-67.2 59.52-110.4 235.2-131.52v145.92c-50.88 45.12-92.16 69.12-143.04 69.12z m452.48 70.08c64.32 0 122.88-33.6 172.8-74.88h2.88l7.68 62.4h72v-320.64c0-128.64-53.76-214.08-180.48-214.08-83.52 0-157.44 37.44-205.44 68.16l34.56 60.48c41.28-27.84 96-55.68 156.48-55.68 85.44 0 107.52 64.32 107.52 131.52-221.76 24.96-320.64 81.6-320.64 194.88 0 94.08 65.28 147.84 152.64 147.84z m24.96-70.08c-51.84 0-92.16-24-92.16-83.52 0-67.2 59.52-110.4 235.2-131.52v145.92c-50.88 45.12-92.16 69.12-143.04 69.12z",
      "p-id": "68146"
    }
  ) }) });
}, On = () => {
  const { switchTextCase: n } = F(I), r = () => {
    n("humpCase");
  };
  return /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", onClick: r, children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1280 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "67341", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M1248.06176 320h-32a32 32 0 0 0-32 32v25.64C1140.06176 342.14 1084.94176 320 1024.06176 320a256 256 0 0 0-256 256v64a256 256 0 0 0 256 256c60.88 0 116-22.14 160-57.64V864a32 32 0 0 0 32 32h32a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32z m-64 320a160 160 0 0 1-320 0v-64a160 160 0 0 1 320 0zM425.06176 148.7a32 32 0 0 0-30-20.7h-86.06a32 32 0 0 0-30 20.7L2.06176 852.7A32 32 0 0 0 32.06176 896h34.28a32 32 0 0 0 30-20.7L176.50176 672h351.12l80.22 203.3a32 32 0 0 0 30 20.7H672.06176a32 32 0 0 0 30-43.3zM214.38176 576L352.06176 227.16 489.74176 576z",
      "p-id": "67342"
    }
  ) }) });
}, Ln = () => {
  const { insertText: n } = F(I), r = () => {
    n("> ", !1, !0);
  };
  return /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", onClick: r, children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1152 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "68418", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M1008 448h-112v-16c0-44.2 35.8-80 80-80h16c53 0 96-43 96-96V160c0-53-43-96-96-96h-16c-203 0-368 165-368 368v384c0 79.4 64.6 144 144 144h256c79.4 0 144-64.6 144-144V592c0-79.4-64.6-144-144-144z m48 368c0 26.4-21.6 48-48 48H752c-26.4 0-48-21.6-48-48V432c0-150 122-272 272-272h16v96h-16c-97 0-176 79-176 176v112h208c26.4 0 48 21.6 48 48v224zM400 448h-112v-16c0-44.2 35.8-80 80-80h16c53 0 96-43 96-96V160c0-53-43-96-96-96h-16C165 64 0 229 0 432v384c0 79.4 64.6 144 144 144h256c79.4 0 144-64.6 144-144V592c0-79.4-64.6-144-144-144z m48 368c0 26.4-21.6 48-48 48H144c-26.4 0-48-21.6-48-48V432c0-150 122-272 272-272h16v96h-16c-97 0-176 79-176 176v112h208c26.4 0 48 21.6 48 48v224z",
      "p-id": "68419"
    }
  ) }) });
}, Mn = (n) => {
  const { name: r } = n, { insertText: a } = F(I), s = {
    h1: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1152 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "8203", children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M608 192h-197.88A26.12 26.12 0 0 0 384 218.12v43.76A26.12 26.12 0 0 0 410.12 288H464v176H176v-176h53.88A26.12 26.12 0 0 0 256 261.88V224a32 32 0 0 0-32-32H32a32 32 0 0 0-32 32v37.88A26.12 26.12 0 0 0 26.12 288H80v448H26.12A26.12 26.12 0 0 0 0 762.12V800a32 32 0 0 0 32 32h197.88A26.12 26.12 0 0 0 256 805.88v-43.76A26.12 26.12 0 0 0 229.88 736H176v-176h288v176h-53.88A26.12 26.12 0 0 0 384 762.12V800a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-37.88A26.12 26.12 0 0 0 613.88 736H560V288h53.88A26.12 26.12 0 0 0 640 261.88V224a32 32 0 0 0-32-32z m512 544h-112V240a48 48 0 0 0-48-48h-48a48 48 0 0 0-42.88 26.52l-48 96A48 48 0 0 0 864 384h48v352h-112a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h320a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z",
        "p-id": "8204"
      }
    ) }),
    h2: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1152 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "8337", children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M608 192h-197.88A26.12 26.12 0 0 0 384 218.12v43.76A26.12 26.12 0 0 0 410.12 288H464v176H176v-176h53.88A26.12 26.12 0 0 0 256 261.88V224a32 32 0 0 0-32-32H32a32 32 0 0 0-32 32v37.88A26.12 26.12 0 0 0 26.12 288H80v448H26.12A26.12 26.12 0 0 0 0 762.12V800a32 32 0 0 0 32 32h197.88A26.12 26.12 0 0 0 256 805.88v-43.76A26.12 26.12 0 0 0 229.88 736H176v-176h288v176h-53.88A26.12 26.12 0 0 0 384 762.12V800a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-37.88A26.12 26.12 0 0 0 613.88 736H560V288h53.88A26.12 26.12 0 0 0 640 261.88V224a32 32 0 0 0-32-32z m488.28 544.26H821.64c17.04-120.7 292-158.56 292-358.62C1113.6 268.34 1030 192 910.1 192a229.42 229.42 0 0 0-195.84 110.1 23.62 23.62 0 0 0 7.16 31.9L764 362.46a23.78 23.78 0 0 0 32.54-6c26-36.46 63.16-62.7 107.44-62.7 59.14 0 98.86 36.16 98.86 90 0 134-298.9 168-298.9 390.98a274.28 274.28 0 0 0 2.78 36.84 24.36 24.36 0 0 0 23.6 20.42h366A23.7 23.7 0 0 0 1120 808.36V760a23.7 23.7 0 0 0-23.72-23.74z",
        "p-id": "8338"
      }
    ) }),
    h3: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1152 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "8471", children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M960.14 439.56l150.78-171.76a23.64 23.64 0 0 0 5.86-15.52v-36.64A23.78 23.78 0 0 0 1092.88 192H759.74a23.76 23.76 0 0 0-23.88 23.64V264a23.76 23.76 0 0 0 23.88 23.66s204.88-0.22 212-0.5c-5.54 5.76-148.24 171.16-148.24 171.16a23.34 23.34 0 0 0-3.72 24.76l13.42 30.6a25.88 25.88 0 0 0 21.86 14.32h34.16c97.22 0 131.7 54.46 131.7 101.12 0 57.14-49.16 100.26-114.34 100.26-48 0-93.76-20.92-130.58-53.78a24 24 0 0 0-35.52 3.62l-32 44a23.46 23.46 0 0 0 2.8 30.82c49.2 46.68 121.24 78 198.76 78 128.4 0 219.72-92.44 219.72-206.34 0.02-102.2-73.46-168.34-169.62-186.14zM608 192h-197.88A26.12 26.12 0 0 0 384 218.12v43.76A26.12 26.12 0 0 0 410.12 288H464v176H176v-176h53.88A26.12 26.12 0 0 0 256 261.88V224a32 32 0 0 0-32-32H32a32 32 0 0 0-32 32v37.88A26.12 26.12 0 0 0 26.12 288H80v448H26.12A26.12 26.12 0 0 0 0 762.12V800a32 32 0 0 0 32 32h197.88A26.12 26.12 0 0 0 256 805.88v-43.76A26.12 26.12 0 0 0 229.88 736H176v-176h288v176h-53.88A26.12 26.12 0 0 0 384 762.12V800a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-37.88A26.12 26.12 0 0 0 613.88 736H560V288h53.88A26.12 26.12 0 0 0 640 261.88V224a32 32 0 0 0-32-32z",
        "p-id": "8472"
      }
    ) }),
    h4: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1152 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "8605", children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M608 192h-197.88A26.12 26.12 0 0 0 384 218.12v43.76A26.12 26.12 0 0 0 410.12 288H464v176H176v-176h53.88A26.12 26.12 0 0 0 256 261.88V224a32 32 0 0 0-32-32H32a32 32 0 0 0-32 32v37.88A26.12 26.12 0 0 0 26.12 288H80v448H26.12A26.12 26.12 0 0 0 0 762.12V800a32 32 0 0 0 32 32h197.88A26.12 26.12 0 0 0 256 805.88v-43.76A26.12 26.12 0 0 0 229.88 736H176v-176h288v176h-53.88A26.12 26.12 0 0 0 384 762.12V800a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-37.88A26.12 26.12 0 0 0 613.88 736H560V288h53.88A26.12 26.12 0 0 0 640 261.88V224a32 32 0 0 0-32-32z m512 272h-32V224a32 32 0 0 0-32-32h-32a32 32 0 0 0-32 32v240h-192V224a32 32 0 0 0-32-32h-32a32 32 0 0 0-32 32v272a64 64 0 0 0 64 64h224v240a32 32 0 0 0 32 32h32a32 32 0 0 0 32-32V560h32a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z",
        "p-id": "8606"
      }
    ) })
  }, o = () => {
    a(`${"#".repeat(Number(r.slice(1)))} `, !1, !0);
  };
  return /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", onClick: o, children: s[r] });
}, Pn = () => {
  const { insertText: n } = F(I), r = () => {
    n(`-----
`, !0, !1, 3);
  };
  return /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", onClick: r, children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1280 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "7667", children: /* @__PURE__ */ e.jsx("path", { d: "M1280 495v34a32 32 0 0 1-32 32H32a32 32 0 0 1-32-32v-34a32 32 0 0 1 32-32h1216a32 32 0 0 1 32 32z", "p-id": "7668" }) }) });
}, $n = () => {
  const { insertText: n } = F(I), r = () => {
    n(`- 
- 
- `, !0, !1, 2);
  };
  return /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", onClick: r, children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "69624", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M96 736a96 96 0 1 0 96 96 96 96 0 0 0-96-96z m0-320a96 96 0 1 0 96 96 96 96 0 0 0-96-96z m0-320a96 96 0 1 0 96 96 96 96 0 0 0-96-96z m896 48H352a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32V176a32 32 0 0 0-32-32z m0 320H352a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m0 320H352a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z",
      "p-id": "69625"
    }
  ) }) });
}, Bn = () => {
  const { insertText: n } = F(I), r = () => {
    n(`1. 
2. 
3. `, !0, !1, 2);
  };
  return /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", onClick: r, children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "68284", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M123.54 802l35-40.3a39.84 39.84 0 0 0 10.14-28.38v-6.62C168.68 712 161 704 146 704H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h45.68a309.64 309.64 0 0 0-22 24.62l-11.22 14c-8 10.14-10.5 20.26-5.6 29.76l2.1 3.86c6 11.52 12.6 15.76 24.5 15.76h9.46c20.66 0 31.88 4.88 31.88 18.18 0 9.44-8.4 16.44-28.72 16.44a83.08 83.08 0 0 1-30.94-6.24c-12.98-7.76-23.48-7-31.2 6.24l-11.18 18.62c-7.46 12.26-6.4 23.44 5.24 31.88 15.42 9.38 40.78 18.88 74 18.88 68.32 0 97-45.5 97-88.24-0.06-28.76-18.24-59.52-57.46-69.76zM992 784H352a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m0-640H352a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32V176a32 32 0 0 0-32-32z m0 320H352a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32zM32 320h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H128V80a16 16 0 0 0-16-16H64a16 16 0 0 0-14.28 8.84l-16 32A16 16 0 0 0 48 128h16v128H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16z m-7.8 320H160a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H82.66c6.56-20.58 96.66-37.36 96.66-112.88 0-58.12-50-79.12-88.94-79.12-42.72 0-67.6 20-80.9 37.5-8.76 11.18-6 21.68 5.58 30.74l17.16 13.76c11.22 9.12 22 4.94 32.26-4.88a26.8 26.8 0 0 1 18.9-7.68c6.66 0 18.56 3.12 18.56 17.5C102 496.38 0 514.62 0 609.18v8C0 632 10.16 640 24.2 640z",
      "p-id": "68285"
    }
  ) }) });
};
const In = (n) => {
  const { rowIndex: r, colIndex: a, onChange: s, isCovered: o, onClick: l } = n, i = Pe("squal", { isCovered: o });
  return /* @__PURE__ */ e.jsx("div", { className: i, onMouseEnter: () => s(r, a), onClick: () => l(r, a) });
}, Dn = (n) => {
  const { row: r = 5, col: a = 5, onChange: s, onClick: o } = n, [l, i] = D([0, 0]), g = (C, j) => {
    const [h, y] = l;
    return C + 1 <= h && j + 1 <= y;
  }, _ = (C, j) => {
    i([C, j]), s && s(C, j);
  }, S = (C, j) => {
    o && o(C, j);
  };
  return /* @__PURE__ */ e.jsx("div", { children: Array.from({ length: r }, (C, j) => j).map((C) => /* @__PURE__ */ e.jsx("div", { className: "horizontal", children: Array.from({ length: a }, (j, h) => h).map((j) => /* @__PURE__ */ e.jsx(
    In,
    {
      isCovered: g(C, j),
      rowIndex: C + 1,
      colIndex: j + 1,
      onChange: _,
      onClick: S
    },
    `${C}-${j}`
  )) }, C)) });
}, Fn = () => {
  const { insertText: n } = F(I), [r, a] = D(!1), [s, o] = D([0, 0]), [l, i] = D("left"), g = (y, u) => {
    o([y, u]);
  }, _ = (y, u) => {
    a(!1);
    let p = "";
    const m = "---", x = {
      justify: m,
      left: ":" + m,
      center: ":" + m + ":",
      right: m + ":"
    };
    if (y > 1 && u > 0)
      for (var v = 0, T = y; v < T; v++) {
        for (var w = [], z = [], d = 0, A = u; d < A; d++)
          v === 1 && z.push(x[l]), w.push(" ");
        v === 1 && (p += "| " + z.join(" | ") + ` |
`), p += "| " + w.join(u === 1 ? "" : " | ") + ` |
`;
      }
    else
      return;
    n(p, !0, !1, 2);
  }, S = (y) => {
    i(y.target.value);
  }, C = {
    justify: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "6491", children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M928 848H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m0-256H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m0-256H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m0-256H96A32 32 0 0 0 64 112v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32V112a32 32 0 0 0-32-32z",
        "p-id": "6492"
      }
    ) }),
    left: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "6625", children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M89.66 688h524.68A25.64 25.64 0 0 0 640 662.34v-44.68A25.64 25.64 0 0 0 614.34 592H89.66A25.64 25.64 0 0 0 64 617.66v44.68A25.64 25.64 0 0 0 89.66 688z m0-512h524.68A25.64 25.64 0 0 0 640 150.34V105.66A25.64 25.64 0 0 0 614.34 80H89.66A25.64 25.64 0 0 0 64 105.66v44.68A25.64 25.64 0 0 0 89.66 176zM928 336H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m0 512H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z",
        "p-id": "6626"
      }
    ) }),
    center: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "6759", children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M280.2 176h463.62A24.18 24.18 0 0 0 768 151.8V104.18A24.18 24.18 0 0 0 743.82 80H280.2A24.18 24.18 0 0 0 256 104.18V151.8A24.2 24.2 0 0 0 280.2 176zM928 848H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m0-512H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m-184.18 352A24.18 24.18 0 0 0 768 663.8v-47.62A24.18 24.18 0 0 0 743.82 592H280.2A24.18 24.18 0 0 0 256 616.18v47.62a24.2 24.2 0 0 0 24.2 24.2z",
        "p-id": "6760"
      }
    ) }),
    right: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "6893", children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M96 432h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32z m832 416H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m6.34-768H409.66A25.64 25.64 0 0 0 384 105.66v44.68A25.64 25.64 0 0 0 409.66 176h524.68A25.64 25.64 0 0 0 960 150.34V105.66A25.64 25.64 0 0 0 934.34 80z m0 512H409.66A25.64 25.64 0 0 0 384 617.66v44.68A25.64 25.64 0 0 0 409.66 688h524.68A25.64 25.64 0 0 0 960 662.34v-44.68A25.64 25.64 0 0 0 934.34 592z",
        "p-id": "6894"
      }
    ) })
  }, j = /* @__PURE__ */ e.jsxs("div", { style: { color: "#666" }, children: [
    /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", marginBottom: "5px" }, children: [
      /* @__PURE__ */ e.jsx("div", { children: "对齐方式：" }),
      ["justify", "left", "center", "right"].map((y) => {
        const u = y;
        return /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", margin: "0 5px" }, children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "radio",
              name: "type",
              value: y,
              id: y,
              defaultChecked: y === l,
              style: { marginRight: "3px", cursor: "pointer" },
              onChange: (p) => S(p)
            }
          ),
          /* @__PURE__ */ e.jsx("label", { htmlFor: y, children: C[u] })
        ] }, y);
      })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("div", { style: { marginBottom: "5px" }, children: /* @__PURE__ */ e.jsx("span", { children: `单元格数：${s[0]} × ${s[1]}` }) }),
      /* @__PURE__ */ e.jsx(Dn, { row: 6, col: 11, onChange: g, onClick: _ })
    ] })
  ] }), h = (y) => {
    a(y);
  };
  return /* @__PURE__ */ e.jsx(
    he,
    {
      content: j,
      transitionName: "popover-fade",
      placement: "bottom",
      trigger: "hover",
      visible: r,
      onVisibleChange: h,
      overlayClassName: "profile-popover-wrap",
      children: /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "68954", children: /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M928 64H96C42.98 64 0 106.98 0 160v704c0 53.02 42.98 96 96 96h832c53.02 0 96-42.98 96-96V160c0-53.02-42.98-96-96-96zM464 864H108a12 12 0 0 1-12-12V592h368v272z m0-368H96V224h368v272z m452 368H560V592h368v260a12 12 0 0 1-12 12z m12-368H560V224h368v272z",
          "p-id": "68955"
        }
      ) }) })
    }
  );
}, Wn = () => {
  const { wrapTextWith: n } = F(I), r = () => {
    n("`");
  };
  return /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", onClick: r, children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1152 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "67743", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M469.691369 1023.383271L392.092796 1000.783687c-8.399846-2.399956-13.399754-11.39979-10.999798-19.799636L662.687822 11.601867c2.399956-8.399846 11.39979-13.399754 19.799636-10.999798L760.086032 23.201654c8.399846 2.399956 13.399754 11.39979 10.999798 19.799636L489.491006 1012.383473c-2.399956 8.599842-11.199794 13.399754-19.799637 10.999798z m-166.396941-242.195548l54.399-57.998934c6.199886-6.599879 5.599897-16.999688-0.999982-22.999578L144.497346 511.99267l212.1961-188.196541c6.799875-5.99989 7.199868-16.399699 0.999982-22.999577l-54.399-57.998934c-5.99989-6.399882-16.199702-6.799875-22.599585-0.799986L5.099908 500.392883c-6.799875 6.399882-6.799875 16.999688 0 23.39957L280.694843 781.987708c6.399882 5.99989 16.399699 5.599897 22.599585-0.799985z m568.189557 0.799985l275.394938-258.195255c6.799875-6.399882 6.799875-16.999688 0-23.39957L871.483985 241.997632c-6.399882-5.99989-16.599695-5.799893-22.599585 0.799986l-54.399 57.998934c-6.199886 6.599879-5.599897 16.999688 0.999982 22.999577L1007.681482 511.99267l-212.1961 188.196541c-6.799875 5.99989-7.199868 16.399699-0.999982 22.999578l54.399 57.998934c6.199886 6.399882 16.199702 6.799875 22.599585 0.799985z",
      "p-id": "67744"
    }
  ) }) });
};
const Un = () => {
  const { insertText: n } = F(I), [r, a] = D(!1), [s, o] = D("http://"), [l, i] = D(""), g = () => {
    a(!1);
    const C = `[${l}](${s} "${l || "title"}")`;
    n(C, !1, !1);
  }, _ = /* @__PURE__ */ e.jsxs("div", { style: { color: "#666" }, children: [
    /* @__PURE__ */ e.jsxs("div", { style: { marginBottom: "10px" }, children: [
      /* @__PURE__ */ e.jsx("span", { children: "链接地址：" }),
      /* @__PURE__ */ e.jsx("input", { type: "text", className: "link-input", defaultValue: "http://", onChange: (C) => o(C.target.value) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("span", { children: "链接标题：" }),
      /* @__PURE__ */ e.jsx("input", { type: "text", className: "link-input", onChange: (C) => i(C.target.value) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { style: { textAlign: "right", marginTop: "10px" }, children: /* @__PURE__ */ e.jsx("button", { className: "button", onClick: g, children: "确定" }) })
  ] }), S = (C) => {
    a(C);
  };
  return /* @__PURE__ */ e.jsx(
    he,
    {
      content: _,
      transitionName: "popover-fade",
      placement: "bottom",
      trigger: "click",
      visible: r,
      onVisibleChange: S,
      overlayClassName: "profile-popover-wrap",
      destroyTooltipOnHide: !0,
      children: /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "68011", children: /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M628.443079 395.560181c102.18185 102.18185 108.753841 264.573612 19.499972 374.319451-12.483982 15.459977-5.567992 7.729989-169.879751 172.039748-109.39184 109.39184-286.53158 109.48984-395.97942 0-109.42184-109.37984-109.46784-286.50958 0-395.97942 65.545904-65.545904 103.669848-103.797848 126.817814-126.913814 14.925978-14.903978 40.66194-4.707993 40.97194 16.383976a346.619492 346.619492 0 0 0 9.491986 75.655889c1.931997 8.057988-0.543999 16.537976-6.403991 22.395968L161.263764 625.139844c-65.509904 65.549904-65.773904 171.783748 0 237.599652 65.549904 65.509904 171.783748 65.773904 237.599652 0l150.379779-150.399779c65.435904-65.449904 65.553904-172.025748 0-237.579652a167.443755 167.443755 0 0 0-45.627933-32.457953c-9.245986-4.465993-14.363979-14.499979-13.12198-24.691964 2.711996-22.243967 12.591982-43.769936 29.629956-60.809911l8.749987-8.749987c7.249989-7.251989 18.353973-9.187987 27.51996-4.587993 25.997962 13.047981 50.373926 30.421955 72.049894 52.097924zM941.91462 82.08064c-109.44784-109.48984-286.58758-109.39184-395.97942 0-164.311759 164.311759-157.395769 156.579771-169.879751 172.039748-89.253869 109.745839-82.681879 272.137601 19.499972 374.319451 21.675968 21.675968 46.051933 39.049943 72.049894 52.097924 9.163987 4.599993 20.26797 2.661996 27.51996-4.587993l8.749987-8.749987c17.039975-17.037975 26.917961-38.565944 29.629956-60.809911 1.241998-10.191985-3.875994-20.22597-13.12198-24.691964a167.411755 167.411755 0 0 1-45.627933-32.457953c-65.553904-65.553904-65.435904-172.129748 0-237.579652l150.379779-150.399779c65.815904-65.773904 172.049748-65.509904 237.599652 0 65.773904 65.815904 65.509904 172.049748 0 237.599652l-91.695865 91.679865c-5.859991 5.857991-8.335988 14.337979-6.403991 22.395968a346.619492 346.619492 0 0 1 9.491986 75.655889c0.31 21.091969 26.045962 31.287954 40.97194 16.383976 23.147966-23.115966 61.27191-61.36791 126.817814-126.913814 109.46584-109.46984 109.41984-286.59958-0.002-395.98142z",
          "p-id": "68012"
        }
      ) }) })
    }
  );
}, qn = () => {
  const { wrapTextWith: n } = F(I), r = () => {
    n("~");
  };
  return /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", onClick: r, children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "68686", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M672 128h-104.56a32 32 0 0 0-26.62 14.24L352 425.46 163.18 142.24A32 32 0 0 0 136.56 128H32A32 32 0 0 0 0 160v32a32 32 0 0 0 32 32h70.32l192 288-192 288H32a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h104.56a32 32 0 0 0 26.62-14.24L352 598.54l188.82 283.22a32 32 0 0 0 26.62 14.24H672a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32h-70.32l-192-288 192-288H672a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32z m320 800h-48V608a32 32 0 0 0-32-32h-64a32 32 0 0 0-28.58 17.66l-32 64A32 32 0 0 0 816 704h32v224h-48a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z",
      "p-id": "68687"
    }
  ) }) });
}, Yn = () => {
  const { wrapTextWith: n } = F(I), r = () => {
    n("^");
  };
  return /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", onClick: r, children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "68820", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M672 128h-104.56a32 32 0 0 0-26.62 14.24L352 425.46 163.18 142.24A32 32 0 0 0 136.56 128H32A32 32 0 0 0 0 160v32a32 32 0 0 0 32 32h70.32l192 288-192 288H32a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h104.56a32 32 0 0 0 26.62-14.24L352 598.54l188.82 283.22a32 32 0 0 0 26.62 14.24H672a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32h-70.32l-192-288 192-288H672a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32z m320 224h-48V32a32 32 0 0 0-32-32h-64a32 32 0 0 0-28.58 17.66l-32 64A32 32 0 0 0 816 128h32v224h-48a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z",
      "p-id": "68821"
    }
  ) }) });
}, Jn = "😀", Gn = "😃", Kn = "😄", Qn = "😁", Xn = "😆", Zn = "😆", er = "😅", tr = "😂", nr = "😉", rr = "😊", ar = "😇", ir = "😍", sr = "😘", or = "😗", cr = "😚", lr = "😙", pr = "😋", dr = "😛", ur = "😜", mr = "😝", hr = "😐", fr = "😑", vr = "😶", gr = "😏", xr = "😒", wr = "😌", yr = "😔", br = "😪", jr = "😴", _r = "😷", Cr = "😵", kr = "😎", Tr = "😕", Ar = "😟", Rr = "😮", Sr = "😯", Er = "😲", Hr = "😳", Vr = "😦", Nr = "😧", zr = "😨", Or = "😰", Lr = "😥", Mr = "😢", Pr = "😭", $r = "😱", Br = "😖", Ir = "😣", Dr = "😞", Fr = "😓", Wr = "😩", Ur = "😫", qr = "😡", Yr = "😡", Jr = "😠", Gr = "😈", Kr = "😺", Qr = "😸", Xr = "😹", Zr = "😻", ea = "😼", ta = "😽", na = "🙀", ra = "😿", aa = "😾", ia = "❤️", sa = "✋", oa = "✋", ca = "✌️", la = "☝️", pa = "✊", da = "✊", ua = "🐵", ma = "🐱", ha = "🐮", fa = "🐭", va = "☕", ga = "♨️", xa = "⚓", wa = "✈️", ya = "⌛", ba = "⌚", ja = "☀️", _a = "⭐", Ca = "☁️", ka = "☔", Ta = "⚡", Aa = "❄️", Ra = "✨", Sa = "🃏", Ea = "🀄", Ha = "☎️", Va = "☎️", Na = "✉️", za = "✏️", Oa = "✒️", La = "✂️", Ma = "♿", Pa = "⚠️", $a = "♈", Ba = "♉", Ia = "♊", Da = "♋", Fa = "♌", Wa = "♍", Ua = "♎", qa = "♏", Ya = "♐", Ja = "♑", Ga = "♒", Ka = "♓", Qa = "✖️", Xa = "➕", Za = "➖", e2 = "➗", t2 = "‼️", n2 = "⁉️", r2 = "❓", a2 = "❔", i2 = "❕", s2 = "❗", o2 = "❗", c2 = "〰️", l2 = "♻️", p2 = "✅", d2 = "☑️", u2 = "✔️", m2 = "❌", h2 = "❎", f2 = "➰", v2 = "➿", g2 = "〽️", x2 = "✳️", w2 = "✴️", y2 = "❇️", b2 = "🌸", j2 = "💮", _2 = "🌲", C2 = "🌳", k2 = "🌴", T2 = "🌵", A2 = "🌾", R2 = "🌿", S2 = "☘️", E2 = "🍀", H2 = "🍁", V2 = "🍂", N2 = "🍃", z2 = "🍇", O2 = "🍈", L2 = "🍉", M2 = "🍊", P2 = "🍊", $2 = "🍊", B2 = "🍋", I2 = "🍌", D2 = "🍍", F2 = "🥭", W2 = "🍎", U2 = "🍏", ft = {
  grinning: Jn,
  smiley: Gn,
  smile: Kn,
  grin: Qn,
  laughing: Xn,
  satisfied: Zn,
  sweat_smile: er,
  joy: tr,
  wink: nr,
  blush: rr,
  innocent: ar,
  heart_eyes: ir,
  kissing_heart: sr,
  kissing: or,
  kissing_closed_eyes: cr,
  kissing_smiling_eyes: lr,
  yum: pr,
  stuck_out_tongue: dr,
  stuck_out_tongue_winking_eye: ur,
  stuck_out_tongue_closed_eyes: mr,
  neutral_face: hr,
  expressionless: fr,
  no_mouth: vr,
  smirk: gr,
  unamused: xr,
  relieved: wr,
  pensive: yr,
  sleepy: br,
  sleeping: jr,
  mask: _r,
  dizzy_face: Cr,
  sunglasses: kr,
  confused: Tr,
  worried: Ar,
  open_mouth: Rr,
  hushed: Sr,
  astonished: Er,
  flushed: Hr,
  frowning: Vr,
  anguished: Nr,
  fearful: zr,
  cold_sweat: Or,
  disappointed_relieved: Lr,
  cry: Mr,
  sob: Pr,
  scream: $r,
  confounded: Br,
  persevere: Ir,
  disappointed: Dr,
  sweat: Fr,
  weary: Wr,
  tired_face: Ur,
  rage: qr,
  pout: Yr,
  angry: Jr,
  smiling_imp: Gr,
  smiley_cat: Kr,
  smile_cat: Qr,
  joy_cat: Xr,
  heart_eyes_cat: Zr,
  smirk_cat: ea,
  kissing_cat: ta,
  scream_cat: na,
  crying_cat_face: ra,
  pouting_cat: aa,
  heart: ia,
  hand: sa,
  raised_hand: oa,
  v: ca,
  point_up: la,
  fist_raised: pa,
  fist: da,
  monkey_face: ua,
  cat: ma,
  cow: ha,
  mouse: fa,
  coffee: va,
  hotsprings: ga,
  anchor: xa,
  airplane: wa,
  hourglass: ya,
  watch: ba,
  sunny: ja,
  star: _a,
  cloud: Ca,
  umbrella: ka,
  zap: Ta,
  snowflake: Aa,
  sparkles: Ra,
  black_joker: Sa,
  mahjong: Ea,
  phone: Ha,
  telephone: Va,
  envelope: Na,
  pencil2: za,
  black_nib: Oa,
  scissors: La,
  wheelchair: Ma,
  warning: Pa,
  aries: $a,
  taurus: Ba,
  gemini: Ia,
  cancer: Da,
  leo: Fa,
  virgo: Wa,
  libra: Ua,
  scorpius: qa,
  sagittarius: Ya,
  capricorn: Ja,
  aquarius: Ga,
  pisces: Ka,
  heavy_multiplication_x: Qa,
  heavy_plus_sign: Xa,
  heavy_minus_sign: Za,
  heavy_division_sign: e2,
  bangbang: t2,
  interrobang: n2,
  question: r2,
  grey_question: a2,
  grey_exclamation: i2,
  exclamation: s2,
  heavy_exclamation_mark: o2,
  wavy_dash: c2,
  recycle: l2,
  white_check_mark: p2,
  ballot_box_with_check: d2,
  heavy_check_mark: u2,
  x: m2,
  negative_squared_cross_mark: h2,
  curly_loop: f2,
  loop: v2,
  part_alternation_mark: g2,
  eight_spoked_asterisk: x2,
  eight_pointed_black_star: w2,
  sparkle: y2,
  cherry_blossom: b2,
  white_flower: j2,
  evergreen_tree: _2,
  deciduous_tree: C2,
  palm_tree: k2,
  cactus: T2,
  ear_of_rice: A2,
  herb: R2,
  shamrock: S2,
  four_leaf_clover: E2,
  maple_leaf: H2,
  fallen_leaf: V2,
  leaves: N2,
  grapes: z2,
  melon: O2,
  watermelon: L2,
  tangerine: M2,
  orange: P2,
  mandarin: $2,
  lemon: B2,
  banana: I2,
  pineapple: D2,
  mango: F2,
  apple: W2,
  green_apple: U2
};
const q2 = ft, Y2 = () => {
  const { insertText: n } = F(I), [r, a] = D(!1), s = (i) => {
    a(!1);
    const g = `:${i}:`;
    n(g, !1, !1);
  }, o = /* @__PURE__ */ e.jsx("div", { className: "emoji-container", children: Object.keys(ft).map((i) => /* @__PURE__ */ e.jsx("div", { className: "emoji", onClick: () => s(i), children: q2[i] }, i)) }), l = (i) => {
    a(i);
  };
  return /* @__PURE__ */ e.jsx(
    he,
    {
      content: o,
      transitionName: "popover-fade",
      placement: "bottom",
      trigger: "hover",
      visible: r,
      onVisibleChange: l,
      overlayClassName: "profile-popover-wrap",
      destroyTooltipOnHide: !0,
      children: /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "7801", children: /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M512 16C238 16 16 238 16 512s222 496 496 496 496-222 496-496S786 16 512 16z m282.8 778.8c-75.6 75.6-176 117.2-282.8 117.2s-207.2-41.6-282.8-117.2S112 618.8 112 512s41.6-207.2 117.2-282.8S405.2 112 512 112s207.2 41.6 282.8 117.2S912 405.2 912 512s-41.6 207.2-117.2 282.8zM672 448c35.4 0 64-28.6 64-64s-28.6-64-64-64-64 28.6-64 64 28.6 64 64 64z m-320 0c35.4 0 64-28.6 64-64s-28.6-64-64-64-64 28.6-64 64 28.6 64 64 64z m388.8 128H283.2c-16.4 0-29 14-27 30 15 118.4 117.8 210 242.2 210h27.2c124.4 0 227.2-91.6 242.2-210 2-16-10.6-30-27-30z",
          "p-id": "7802"
        }
      ) }) })
    }
  );
};
const J2 = () => {
  const { insertText: n, languages: r } = F(I), [a, s] = D(!1), o = (g) => {
    s(!1);
    const _ = `\`\`\`${g}

\`\`\`
`;
    n(_, !0, !1, 3);
  }, l = /* @__PURE__ */ e.jsx("div", { children: r.map((g) => /* @__PURE__ */ e.jsx("div", { className: "lang-button", onClick: () => o(g), children: g }, g)) }), i = (g) => {
    s(g);
  };
  return /* @__PURE__ */ e.jsx(
    he,
    {
      content: l,
      transitionName: "popover-fade",
      placement: "bottom",
      trigger: "hover",
      visible: a,
      onVisibleChange: i,
      overlayClassName: "profile-popover-wrap",
      destroyTooltipOnHide: !0,
      children: /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "7399", children: /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M427.741457 698.26362l-0.399922-0.399922-65.58719-57.788713 65.58719-57.788713c7.198594-6.39875 7.998438-17.596563 1.599687-24.795157l-0.399921-0.399922-34.793205-37.192736c-6.798672-7.198594-17.996485-7.398555-24.795157-0.799843l-115.377465 108.178871c-7.398555 6.998633-7.398555 18.796329 0 25.595001l115.377465 108.178871c3.199375 2.999414 7.598516 4.799063 11.997657 4.799063 4.799063 0 9.598125-1.999609 12.7975-5.598907l34.793205-37.192735c6.598711-6.998633 6.198789-18.196446-0.799844-24.795158z m439.914079-502.301894L699.888303 28.194493C681.891818 10.198008 657.496583 0 632.101543 0H223.981254C170.991603 0.199961 128 43.191564 128 96.181215v831.837531c0 52.98965 42.991603 95.981254 95.981254 95.981254h575.887522c52.98965 0 95.981254-42.991603 95.981253-95.981254V263.948448c0-25.39504-10.198008-49.990236-28.194493-67.986722zM639.90002 103.979691l152.170279 152.17028H639.90002zM799.868776 928.018746H223.981254V96.181215h319.937512v207.959383c0 26.594806 21.395821 47.990627 47.990627 47.990626h207.959383zM547.118141 428.116384c-9.398164-2.799453-18.99629 2.599492-21.795743 11.997656L415.943761 816.240578c-2.799453 9.398164 2.599492 19.196251 11.997657 21.795743l48.79047 14.197227c9.398164 2.799453 19.196251-2.799453 21.795743-11.997657L607.906268 463.909393c2.799453-9.398164-2.599492-19.196251-11.997656-21.795743z m48.990432 153.769966l0.399921 0.399922 65.58719 57.788713-65.58719 57.788713c-7.198594 6.39875-7.998438 17.596563-1.599687 24.795158l0.399922 0.399922 34.793204 37.192735c6.598711 6.998633 17.796524 7.398555 24.795157 0.799844l115.377466-108.178871c7.398555-6.998633 7.398555-18.796329 0-25.595001l-115.377466-108.178871c-6.998633-6.598711-18.196446-6.39875-24.795157 0.799843l-34.793204 37.192736c-6.598711 6.998633-6.198789 18.196446 0.799844 24.795157z",
          "p-id": "7400"
        }
      ) }) })
    }
  );
}, G2 = [
  {
    name: "&amp;#64;",
    description: "at symbol"
  },
  {
    name: "&amp;copy;",
    description: "copyright symbol"
  },
  {
    name: "&amp;reg;",
    description: "registered symbol"
  },
  {
    name: "&amp;trade;",
    description: "trademark symbol"
  },
  {
    name: "&amp;hearts;",
    description: "heart"
  },
  {
    name: "&amp;nbsp;",
    description: "Inserts a non-breaking blank space"
  },
  {
    name: "&amp;amp;",
    description: "Ampersand"
  },
  {
    name: "&amp;#36;",
    description: "dollar symbol"
  },
  {
    name: "&amp;cent;",
    description: "Cent symbol"
  },
  {
    name: "&amp;pound;",
    description: "Pound"
  },
  {
    name: "&amp;yen;",
    description: "Yen"
  },
  {
    name: "&amp;euro;",
    description: "Euro symbol"
  },
  {
    name: "&amp;quot;",
    description: "quotation mark"
  },
  {
    name: "&amp;ldquo;",
    description: "Opening Double Quotes "
  },
  {
    name: "&amp;rdquo;",
    description: "Closing Double Quotes "
  },
  {
    name: "&amp;lsquo;",
    description: "Opening Single Quote Mark "
  },
  {
    name: "&amp;rsquo;",
    description: "Closing Single Quote Mark "
  },
  {
    name: "&amp;laquo;",
    description: "angle quotation mark (left)"
  },
  {
    name: "&amp;raquo;",
    description: "angle quotation mark (right)"
  },
  {
    name: "&amp;lsaquo;",
    description: "single left angle quotation"
  },
  {
    name: "&amp;rsaquo;",
    description: "single right angle quotation"
  },
  {
    name: "&amp;sect;",
    description: "Section Symbol"
  },
  {
    name: "&amp;micro;",
    description: "micro sign"
  },
  {
    name: "&amp;para;",
    description: "Paragraph symbol"
  },
  {
    name: "&amp;bull;",
    description: "Big List Dot"
  },
  {
    name: "&amp;middot;",
    description: "Medium List Dot"
  },
  {
    name: "&amp;hellip;",
    description: "horizontal ellipsis"
  },
  {
    name: "&amp;#124;",
    description: "vertical bar"
  },
  {
    name: "&amp;brvbar;",
    description: "broken vertical bar"
  },
  {
    name: "&amp;ndash;",
    description: "en-dash"
  },
  {
    name: "&amp;mdash;",
    description: "em-dash"
  },
  {
    name: "&amp;curren;",
    description: "Generic currency symbol"
  },
  {
    name: "&amp;#33;",
    description: "exclamation point"
  },
  {
    name: "&amp;#35;",
    description: "number sign"
  },
  {
    name: "&amp;#39;",
    description: "single quote"
  },
  {
    name: "&amp;#40;",
    description: ""
  },
  {
    name: "&amp;#41;",
    description: ""
  },
  {
    name: "&amp;#42;",
    description: "asterisk"
  },
  {
    name: "&amp;#43;",
    description: "plus sign"
  },
  {
    name: "&amp;#44;",
    description: "comma"
  },
  {
    name: "&amp;#45;",
    description: "minus sign - hyphen"
  },
  {
    name: "&amp;#46;",
    description: "period"
  },
  {
    name: "&amp;#47;",
    description: "slash"
  },
  {
    name: "&amp;#48;",
    description: "0"
  },
  {
    name: "&amp;#49;",
    description: "1"
  },
  {
    name: "&amp;#50;",
    description: "2"
  },
  {
    name: "&amp;#51;",
    description: "3"
  },
  {
    name: "&amp;#52;",
    description: "4"
  },
  {
    name: "&amp;#53;",
    description: "5"
  },
  {
    name: "&amp;#54;",
    description: "6"
  },
  {
    name: "&amp;#55;",
    description: "7"
  },
  {
    name: "&amp;#56;",
    description: "8"
  },
  {
    name: "&amp;#57;",
    description: "9"
  },
  {
    name: "&amp;#58;",
    description: "colon"
  },
  {
    name: "&amp;#59;",
    description: "semicolon"
  },
  {
    name: "&amp;#61;",
    description: "equal sign"
  },
  {
    name: "&amp;#63;",
    description: "question mark"
  },
  {
    name: "&amp;lt;",
    description: "Less than"
  },
  {
    name: "&amp;gt;",
    description: "Greater than"
  },
  {
    name: "&amp;le;",
    description: "Less than or Equal to"
  },
  {
    name: "&amp;ge;",
    description: "Greater than or Equal to"
  },
  {
    name: "&amp;times;",
    description: "Multiplication symbol"
  },
  {
    name: "&amp;divide;",
    description: "Division symbol"
  },
  {
    name: "&amp;minus;",
    description: "Minus symbol"
  },
  {
    name: "&amp;plusmn;",
    description: "Plus/minus symbol"
  },
  {
    name: "&amp;ne;",
    description: "Not Equal"
  },
  {
    name: "&amp;sup1;",
    description: "Superscript 1"
  },
  {
    name: "&amp;sup2;",
    description: "Superscript 2"
  },
  {
    name: "&amp;sup3;",
    description: "Superscript 3"
  },
  {
    name: "&amp;frac12;",
    description: "Fraction ½"
  },
  {
    name: "&amp;frac14;",
    description: "Fraction ¼"
  },
  {
    name: "&amp;frac34;",
    description: "Fraction ¾"
  },
  {
    name: "&amp;permil;",
    description: "per mille"
  },
  {
    name: "&amp;deg;",
    description: "Degree symbol"
  },
  {
    name: "&amp;radic;",
    description: "square root"
  },
  {
    name: "&amp;infin;",
    description: "Infinity"
  },
  {
    name: "&amp;larr;",
    description: "left arrow"
  },
  {
    name: "&amp;uarr;",
    description: "up arrow"
  },
  {
    name: "&amp;rarr;",
    description: "right arrow"
  },
  {
    name: "&amp;darr;",
    description: "down arrow"
  },
  {
    name: "&amp;harr;",
    description: "left right arrow"
  },
  {
    name: "&amp;crarr;",
    description: "carriage return arrow"
  },
  {
    name: "&amp;lceil;",
    description: "left ceiling"
  },
  {
    name: "&amp;rceil;",
    description: "right ceiling"
  },
  {
    name: "&amp;lfloor;",
    description: "left floor"
  },
  {
    name: "&amp;rfloor;",
    description: "right floor"
  },
  {
    name: "&amp;spades;",
    description: "spade"
  },
  {
    name: "&amp;clubs;",
    description: "club"
  },
  {
    name: "&amp;hearts;",
    description: "heart"
  },
  {
    name: "&amp;diams;",
    description: "diamond"
  },
  {
    name: "&amp;loz;",
    description: "lozenge"
  },
  {
    name: "&amp;dagger;",
    description: "dagger"
  },
  {
    name: "&amp;Dagger;",
    description: "double dagger"
  },
  {
    name: "&amp;iexcl;",
    description: "inverted exclamation mark"
  },
  {
    name: "&amp;iquest;",
    description: "inverted question mark"
  },
  {
    name: "&amp;#338;",
    description: "latin capital letter OE"
  },
  {
    name: "&amp;#339;",
    description: "latin small letter oe"
  },
  {
    name: "&amp;#352;",
    description: "latin capital letter S with caron"
  },
  {
    name: "&amp;#353;",
    description: "latin small letter s with caron"
  },
  {
    name: "&amp;#376;",
    description: "latin capital letter Y with diaeresis"
  },
  {
    name: "&amp;#402;",
    description: "latin small f with hook - function"
  },
  {
    name: "&amp;not;",
    description: "not sign"
  },
  {
    name: "&amp;ordf;",
    description: "feminine ordinal indicator"
  },
  {
    name: "&amp;uml;",
    description: "spacing diaeresis - umlaut"
  },
  {
    name: "&amp;macr;",
    description: "spacing macron - overline"
  },
  {
    name: "&amp;acute;",
    description: "acute accent - spacing acute"
  },
  {
    name: "&amp;Agrave;",
    description: "latin capital letter A with grave"
  },
  {
    name: "&amp;Aacute;",
    description: "latin capital letter A with acute"
  },
  {
    name: "&amp;Acirc;",
    description: "latin capital letter A with circumflex"
  },
  {
    name: "&amp;Atilde;",
    description: "latin capital letter A with tilde"
  },
  {
    name: "&amp;Auml;",
    description: "latin capital letter A with diaeresis"
  },
  {
    name: "&amp;Aring;",
    description: "latin capital letter A with ring above"
  },
  {
    name: "&amp;AElig;",
    description: "latin capital letter AE"
  },
  {
    name: "&amp;Ccedil;",
    description: "latin capital letter C with cedilla"
  },
  {
    name: "&amp;Egrave;",
    description: "latin capital letter E with grave"
  },
  {
    name: "&amp;Eacute;",
    description: "latin capital letter E with acute"
  },
  {
    name: "&amp;Ecirc;",
    description: "latin capital letter E with circumflex"
  },
  {
    name: "&amp;Euml;",
    description: "latin capital letter E with diaeresis"
  },
  {
    name: "&amp;Igrave;",
    description: "latin capital letter I with grave"
  },
  {
    name: "&amp;Iacute;",
    description: "latin capital letter I with acute"
  },
  {
    name: "&amp;Icirc;",
    description: "latin capital letter I with circumflex"
  },
  {
    name: "&amp;Iuml;",
    description: "latin capital letter I with diaeresis"
  },
  {
    name: "&amp;ETH;",
    description: "latin capital letter ETH"
  },
  {
    name: "&amp;Ntilde;",
    description: "latin capital letter N with tilde"
  },
  {
    name: "&amp;Ograve;",
    description: "latin capital letter O with grave"
  },
  {
    name: "&amp;Oacute;",
    description: "latin capital letter O with acute"
  },
  {
    name: "&amp;Ocirc;",
    description: "latin capital letter O with circumflex"
  },
  {
    name: "&amp;Otilde;",
    description: "latin capital letter O with tilde"
  },
  {
    name: "&amp;Ouml;",
    description: "latin capital letter O with diaeresis"
  },
  {
    name: "&amp;times;",
    description: "multiplication sign"
  },
  {
    name: "&amp;Oslash;",
    description: "latin capital letter O with slash"
  },
  {
    name: "&amp;Ugrave;",
    description: "latin capital letter U with grave"
  },
  {
    name: "&amp;Uacute;",
    description: "latin capital letter U with acute"
  },
  {
    name: "&amp;Ucirc;",
    description: "latin capital letter U with circumflex"
  },
  {
    name: "&amp;Uuml;",
    description: "latin capital letter U with diaeresis"
  },
  {
    name: "&amp;Yacute;",
    description: "latin capital letter Y with acute"
  },
  {
    name: "&amp;THORN;",
    description: "latin capital letter THORN"
  },
  {
    name: "&amp;szlig;",
    description: "latin small letter sharp s - ess-zed"
  },
  {
    name: "&amp;eth;",
    description: "latin capital letter eth"
  },
  {
    name: "&amp;ntilde;",
    description: "latin capital letter n with tilde"
  },
  {
    name: "&amp;ograve;",
    description: "latin capital letter o with grave"
  },
  {
    name: "&amp;oacute;",
    description: "latin capital letter o with acute"
  },
  {
    name: "&amp;ocirc;",
    description: "latin capital letter o with circumflex"
  },
  {
    name: "&amp;otilde;",
    description: "latin capital letter o with tilde"
  },
  {
    name: "&amp;ouml;",
    description: "latin capital letter o with diaeresis"
  },
  {
    name: "&amp;times;",
    description: "multiplication sign"
  },
  {
    name: "&amp;oslash;",
    description: "latin capital letter o with slash"
  },
  {
    name: "&amp;ugrave;",
    description: "latin capital letter u with grave"
  },
  {
    name: "&amp;uacute;",
    description: "latin capital letter u with acute"
  },
  {
    name: "&amp;ucirc;",
    description: "latin capital letter u with circumflex"
  },
  {
    name: "&amp;uuml;",
    description: "latin capital letter u with diaeresis"
  },
  {
    name: "&amp;yacute;",
    description: "latin capital letter y with acute"
  },
  {
    name: "&amp;thorn;",
    description: "latin capital letter thorn"
  },
  {
    name: "&amp;yuml;",
    description: "latin small letter y with diaeresis"
  },
  {
    name: "&amp;agrave;",
    description: "latin capital letter a with grave"
  },
  {
    name: "&amp;aacute;",
    description: "latin capital letter a with acute"
  },
  {
    name: "&amp;acirc;",
    description: "latin capital letter a with circumflex"
  },
  {
    name: "&amp;atilde;",
    description: "latin capital letter a with tilde"
  },
  {
    name: "&amp;auml;",
    description: "latin capital letter a with diaeresis"
  },
  {
    name: "&amp;aring;",
    description: "latin capital letter a with ring above"
  },
  {
    name: "&amp;aelig;",
    description: "latin capital letter ae"
  },
  {
    name: "&amp;ccedil;",
    description: "latin capital letter c with cedilla"
  },
  {
    name: "&amp;egrave;",
    description: "latin capital letter e with grave"
  },
  {
    name: "&amp;eacute;",
    description: "latin capital letter e with acute"
  },
  {
    name: "&amp;ecirc;",
    description: "latin capital letter e with circumflex"
  },
  {
    name: "&amp;euml;",
    description: "latin capital letter e with diaeresis"
  },
  {
    name: "&amp;igrave;",
    description: "latin capital letter i with grave"
  },
  {
    name: "&amp;Iacute;",
    description: "latin capital letter i with acute"
  },
  {
    name: "&amp;icirc;",
    description: "latin capital letter i with circumflex"
  },
  {
    name: "&amp;iuml;",
    description: "latin capital letter i with diaeresis"
  },
  {
    name: "&amp;#65;",
    description: "A"
  },
  {
    name: "&amp;#66;",
    description: "B"
  },
  {
    name: "&amp;#67;",
    description: "C"
  },
  {
    name: "&amp;#68;",
    description: "D"
  },
  {
    name: "&amp;#69;",
    description: "E"
  },
  {
    name: "&amp;#70;",
    description: "F"
  },
  {
    name: "&amp;#71;",
    description: "G"
  },
  {
    name: "&amp;#72;",
    description: "H"
  },
  {
    name: "&amp;#73;",
    description: "I"
  },
  {
    name: "&amp;#74;",
    description: "J"
  },
  {
    name: "&amp;#75;",
    description: "K"
  },
  {
    name: "&amp;#76;",
    description: "L"
  },
  {
    name: "&amp;#77;",
    description: "M"
  },
  {
    name: "&amp;#78;",
    description: "N"
  },
  {
    name: "&amp;#79;",
    description: "O"
  },
  {
    name: "&amp;#80;",
    description: "P"
  },
  {
    name: "&amp;#81;",
    description: "Q"
  },
  {
    name: "&amp;#82;",
    description: "R"
  },
  {
    name: "&amp;#83;",
    description: "S"
  },
  {
    name: "&amp;#84;",
    description: "T"
  },
  {
    name: "&amp;#85;",
    description: "U"
  },
  {
    name: "&amp;#86;",
    description: "V"
  },
  {
    name: "&amp;#87;",
    description: "W"
  },
  {
    name: "&amp;#88;",
    description: "X"
  },
  {
    name: "&amp;#89;",
    description: "Y"
  },
  {
    name: "&amp;#90;",
    description: "Z"
  },
  {
    name: "&amp;#91;",
    description: "opening bracket"
  },
  {
    name: "&amp;#92;",
    description: "backslash"
  },
  {
    name: "&amp;#93;",
    description: "closing bracket"
  },
  {
    name: "&amp;#94;",
    description: "caret - circumflex"
  },
  {
    name: "&amp;#95;",
    description: "underscore"
  },
  {
    name: "&amp;#96;",
    description: "grave accent"
  },
  {
    name: "&amp;#97;",
    description: "a"
  },
  {
    name: "&amp;#98;",
    description: "b"
  },
  {
    name: "&amp;#99;",
    description: "c"
  },
  {
    name: "&amp;#100;",
    description: "d"
  },
  {
    name: "&amp;#101;",
    description: "e"
  },
  {
    name: "&amp;#102;",
    description: "f"
  },
  {
    name: "&amp;#103;",
    description: "g"
  },
  {
    name: "&amp;#104;",
    description: "h"
  },
  {
    name: "&amp;#105;",
    description: "i"
  },
  {
    name: "&amp;#106;",
    description: "j"
  },
  {
    name: "&amp;#107;",
    description: "k"
  },
  {
    name: "&amp;#108;",
    description: "l"
  },
  {
    name: "&amp;#109;",
    description: "m"
  },
  {
    name: "&amp;#110;",
    description: "n"
  },
  {
    name: "&amp;#111;",
    description: "o"
  },
  {
    name: "&amp;#112;",
    description: "p"
  },
  {
    name: "&amp;#113;",
    description: "q"
  },
  {
    name: "&amp;#114;",
    description: "r"
  },
  {
    name: "&amp;#115;",
    description: "s"
  },
  {
    name: "&amp;#116;",
    description: "t"
  },
  {
    name: "&amp;#117;",
    description: "u"
  },
  {
    name: "&amp;#118;",
    description: "v"
  },
  {
    name: "&amp;#119;",
    description: "w"
  },
  {
    name: "&amp;#120;",
    description: "x"
  },
  {
    name: "&amp;#121;",
    description: "y"
  },
  {
    name: "&amp;#122;",
    description: "z"
  },
  {
    name: "&amp;#123;",
    description: "opening brace"
  },
  {
    name: "&amp;#124;",
    description: "vertical bar"
  },
  {
    name: "&amp;#125;",
    description: "closing brace"
  },
  {
    name: "&amp;#126;",
    description: "equivalency sign - tilde"
  }
];
const K2 = G2, Q2 = () => {
  const { insertText: n } = F(I), [r, a] = D(!1), s = (i) => {
    a(!1), n(i, !1, !1);
  }, o = /* @__PURE__ */ e.jsx("div", { className: "html-container", children: K2.map((i, g) => {
    const _ = i.name.replace("&amp;", "&");
    return /* @__PURE__ */ e.jsx("div", { className: "html-entity", onClick: () => s(_), dangerouslySetInnerHTML: { __html: _ } }, `${_}-${g}`);
  }) }), l = (i) => {
    a(i);
  };
  return /* @__PURE__ */ e.jsx(
    he,
    {
      content: o,
      transitionName: "popover-fade",
      placement: "bottom",
      trigger: "hover",
      visible: r,
      onVisibleChange: l,
      overlayClassName: "profile-popover-wrap",
      destroyTooltipOnHide: !0,
      children: /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "67207", children: /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M512 16C238.066 16 16 238.066 16 512s222.066 496 496 496 496-222.066 496-496S785.934 16 512 16z m0 896c-221.064 0-400-178.902-400-400 0-221.062 178.902-400 400-400 221.064 0 400 178.902 400 400 0 221.064-178.902 400-400 400z m214.702-202.128c-19.228 19.424-91.06 82.792-208.13 82.792-164.86 0-280.968-122.85-280.968-283.134 0-158.304 120.55-278.802 279.524-278.802 111.062 0 177.476 53.24 195.186 69.558a23.93 23.93 0 0 1 3.872 30.644l-36.31 56.226c-7.682 11.9-23.932 14.564-34.998 5.842-17.19-13.552-63.628-45.076-123.416-45.076-96.606 0-155.832 70.66-155.832 160.164 0 83.178 53.776 167.384 156.554 167.384 65.314 0 113.686-38.078 131.452-54.45 10.54-9.714 27.192-8.078 35.64 3.476l39.73 54.34a23.894 23.894 0 0 1-2.304 31.036z",
          "p-id": "67208"
        }
      ) }) })
    }
  );
}, X2 = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], Z2 = () => {
  const { insertText: n } = F(I), r = () => {
    const a = `${nt().format("YYYY-MM-DD HH:mm:ss")} ${X2[nt().day()]}`;
    n(a, !1, !1);
  };
  return /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", onClick: r, children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "7533", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M512 16C238 16 16 238 16 512s222 496 496 496 496-222 496-496S786 16 512 16z m0 896c-221 0-400-179-400-400S291 112 512 112s400 179 400 400-179 400-400 400z m123.6-208.8l-169.8-123.4c-6.2-4.6-9.8-11.8-9.8-19.4V232c0-13.2 10.8-24 24-24h64c13.2 0 24 10.8 24 24v283.4l133.6 97.2c10.8 7.8 13 22.8 5.2 33.6L669.2 698c-7.8 10.6-22.8 13-33.6 5.2z",
      "p-id": "7534"
    }
  ) }) });
}, ei = () => {
  const { editorRef: n } = F(I), [r, a] = D(!0), s = () => {
    a((o) => !o);
  };
  return pe(() => {
    var o, l;
    r ? (o = n.current) == null || o.setOption("theme", "atom-dark") : (l = n.current) == null || l.setOption("theme", "atom-light");
  }, [r]), /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", onClick: s, children: r ? /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "69088", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M811.6 747.6c-2.8 0-5.6 0.6-8.6 1.8-46.4 21-94.6 30.8-141.6 30.8-151.8 0-293.2-101.6-332-258.6-29.2-118.4 8-242.8 97.4-326.6 13.4-12.6 4.2-35-14-35h-1.2c-26.6 1.6-53.2 5.4-79 11.6C98.8 228.2-44.6 462 12.6 694c48.6 197.4 226.8 330 423.2 330 34.2 0 69-4 103.6-12.4C670 980 774.8 892.2 830 776.6c6.8-14.2-4.6-29-18.4-29z m-294.8 170.6c-26.6 6.4-54 9.8-81 9.8-157 0-292.8-105.6-330-257-21.4-86.6-7.6-176.4 38.8-252.8 25.4-41.8 58.8-76.8 98.2-103.6-22.6 73.6-25.6 153-6.6 230 44.8 182 199.6 312.6 384.2 329.6-31.4 20.2-66.2 35-103.6 44z m400.6-555.6L864 256l-53.4 106.6L704 416l106.6 53.4L864 576l53.4-106.6L1024 416l-106.6-53.4zM608 192l32-64 64-32-64-32-32-64-32 64-64 32 64 32 32 64z",
      "p-id": "69089"
    }
  ) }) : /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "69222", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M988.4 443.8l-119.6-81 27.4-142c5.2-26.4-3.2-53.6-22.2-72.8-19.2-19-46.4-27.4-72.4-22.2l-141.8 27.4-80.8-119.8c-30.2-44.6-103.8-44.6-134 0l-80.8 119.8-141.6-27.4C196 120.8 169 129 150 148.2c-19 19.2-27.4 46.2-22.2 72.6l27.4 142-119.6 81C13.2 459 0 484 0 511s13.4 52 35.6 67l119.6 81-27.4 142c-5.2 26.4 3.2 53.6 22.2 72.6 19 19 45.8 27.4 72.6 22.2l141.6-27.4 80.8 119.8C460 1010.6 485.2 1024 512 1024s52-13.4 67-35.6l80.8-119.8 141.8 27.4c26.8 5.4 53.6-3.2 72.6-22.2 19-19 27.2-46.2 22.2-72.6l-27.4-142 119.6-81c22.2-15 35.6-40.2 35.6-67-0.2-27.2-13.4-52.2-35.8-67.4z m-225.8 171.2l35.2 182.4-182-35.2L512 916l-103.8-154-181.8 35.2 35.2-182.4-153.6-104 153.6-104-35.2-182.4 182 35.2L512 106l103.8 153.8 182-35.2-35.2 182.2 153.6 104-153.6 104.2zM512 304c-114.6 0-208 93.4-208 208s93.4 208 208 208 208-93.4 208-208-93.4-208-208-208z m0 320c-61.8 0-112-50.2-112-112s50.2-112 112-112 112 50.2 112 112-50.2 112-112 112z",
      "p-id": "69223"
    }
  ) }) });
}, ti = () => {
  const { insertText: n } = F(I), r = () => {
    n(`- [ ] list1
- [x] list2
`, !0, !1, 2);
  };
  return /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", onClick: r, children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "7131", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M752 720H464c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16z m-464 112h64c17.6 0 32-14.4 32-32v-64c0-17.6-14.4-32-32-32h-64c-17.6 0-32 14.4-32 32v64c0 17.6 14.4 32 32 32z m0-512h64c17.6 0 32-14.4 32-32v-64c0-17.6-14.4-32-32-32h-64c-17.6 0-32 14.4-32 32v64c0 17.6 14.4 32 32 32z m176-16h288c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H464c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16zM896 0H128C92.6 0 64 28.6 64 64v896c0 35.4 28.6 64 64 64h768c35.4 0 64-28.6 64-64V64c0-35.4-28.6-64-64-64z m-32 928H160V96h704v832zM333.2 572.8c4.2 4.2 11 4.2 15.2 0l128.4-127.2c4.2-4.2 4.2-11 0-15.2l-25.2-25.4c-4.2-4.2-11-4.2-15.2 0l-95.2 94.4-41.2-41.8c-4.2-4.2-11-4.2-15.2 0l-25.4 25.2c-4.2 4.2-4.2 11 0 15.2l73.8 74.8zM752 464H538.8c-3.8 10-9.2 19.4-17 27L452.4 560H752c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16z",
      "p-id": "7132"
    }
  ) }) });
}, ni = () => {
  const { editorRef: n } = F(I), r = () => {
    n.current.setValue("");
  };
  return /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", onClick: r, children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "7265", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M995.88 547.88a96 96 0 0 0 0-135.76l-320-320a96 96 0 0 0-135.76 0l-512 512a96 96 0 0 0 0 135.76l192 192A96 96 0 0 0 288 960h712a24 24 0 0 0 24-24v-48a24 24 0 0 0-24-24H679.76l316.12-316.12zM608 160l320 320-206 206-320-320zM288 864l-192-192 238-238 320 320-110 110z",
      "p-id": "7266"
    }
  ) }) });
}, ri = () => {
  const { toggleEditor: n } = F(I), r = () => {
    n();
  };
  return /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", onClick: r, children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "69490", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M928 64H96C42.98 64 0 106.98 0 160v704c0 53.02 42.98 96 96 96h832c53.02 0 96-42.98 96-96V160c0-53.02-42.98-96-96-96zM464 864H108a12 12 0 0 1-12-12V224h368v640z m452 0H560V224h368v628a12 12 0 0 1-12 12z",
      "p-id": "69491"
    }
  ) }) });
}, ai = () => {
  const { toggleScreen: n } = F(I), r = () => {
    n();
  };
  return /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", onClick: r, children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "7935", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M959.8 664l0.2 272c0 13.2-10.8 24-24 24l-272-0.2c-13.2 0-24-10.8-24-24v-55.6c0-13.4 11-24.2 24.4-24l122.8 4.6 2.8-2.8-278-278L234 858l2.8 2.8 122.8-4.6c13.4-0.2 24.4 10.6 24.4 24v55.6c0 13.2-10.8 24-24 24L88 960c-13.2 0-24-10.8-24-24l0.2-272c0-13.2 10.8-24 24-24h55.6c13.4 0 24.2 11 24 24.4l-4.6 122.8L166 790l278-278L166 234l-2.8 2.8 4.6 122.8c0.2 13.4-10.6 24.4-24 24.4H88.2c-13.2 0-24-10.8-24-24L64 88c0-13.2 10.8-24 24-24l272 0.2c13.2 0 24 10.8 24 24v55.6c0 13.4-11 24.2-24.4 24l-122.8-4.6L234 166l278 278L790 166l-2.8-2.8-122.8 4.6c-13.4 0.2-24.4-10.6-24.4-24V88.2c0-13.2 10.8-24 24-24l272-0.2c13.2 0 24 10.8 24 24l-0.2 272c0 13.2-10.8 24-24 24h-55.6c-13.4 0-24.2-11-24-24.4l4.6-122.8-2.8-2.8-278 278 278 278 2.8-2.8-4.6-122.8c-0.2-13.4 10.6-24.4 24-24.4h55.6c13.2 0 24 10.8 24 24z",
      "p-id": "7936"
    }
  ) }) });
};
const ii = () => {
  const [n, r] = D(!1), a = [
    { keymap: "Ctrl + S", desc: "保存" },
    { keymap: "Ctrl + A", desc: "全选" },
    { keymap: "Ctrl + F", desc: "搜索面板" },
    { keymap: "Ctrl + Z", desc: "撤销" },
    { keymap: "Ctrl + Shift + Z", desc: "重做" },
    { keymap: "Ctrl + D", desc: "删除当前行" },
    { keymap: "Ctrl + Down", desc: "向下复制当前行" },
    { keymap: "Alt + Down", desc: "当前行下移" },
    { keymap: "Alt + Up", desc: "当前行上移" },
    { keymap: "Shift + Up/Down/Left/Right", desc: "选择文本" },
    { keymap: "Ctrl + Up/Down/Left/Right", desc: "按单词移动光标" },
    { keymap: "Alt + Left/Right", desc: "移动光标到当前行头/尾" },
    { keymap: "Alt + Shift + Left/Right", desc: "选择文本到当前行头/尾" },
    { keymap: "Ctrl + Home", desc: "跳转到第一行" },
    { keymap: "Ctrl + End", desc: "跳转到最后一行" }
  ], s = /* @__PURE__ */ e.jsx("div", { className: "help", style: { color: "#666" }, children: /* @__PURE__ */ e.jsxs("table", { children: [
    /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsxs("tr", { children: [
      /* @__PURE__ */ e.jsx("th", { style: { textAlign: "left" }, children: "快捷键" }),
      /* @__PURE__ */ e.jsx("th", { style: { textAlign: "left" }, children: "功能" })
    ] }) }),
    /* @__PURE__ */ e.jsx("tbody", { children: a.map((l) => /* @__PURE__ */ e.jsxs("tr", { children: [
      /* @__PURE__ */ e.jsx("td", { style: { textAlign: "left" }, children: l.keymap }),
      /* @__PURE__ */ e.jsx("td", { style: { textAlign: "left" }, children: l.desc })
    ] }, l.keymap)) })
  ] }) }), o = (l) => {
    r(l);
  };
  return /* @__PURE__ */ e.jsx(
    he,
    {
      content: s,
      transitionName: "popover-fade",
      placement: "bottom",
      trigger: "hover",
      visible: n,
      onVisibleChange: o,
      overlayClassName: "profile-popover-wrap",
      destroyTooltipOnHide: !0,
      children: /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "67073", children: /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M512 16C238.086 16 16 238.166 16 512c0 273.994 222.086 496 496 496s496-222.006 496-496C1008 238.166 785.914 16 512 16z m0 896c-221.064 0-400-178.862-400-400 0-220.99 178.944-400 400-400 220.982 0 400 178.942 400 400 0 221.06-178.862 400-400 400z m0-676c46.392 0 84 37.608 84 84s-37.608 84-84 84-84-37.608-84-84 37.608-84 84-84z m112 508c0 13.254-10.746 24-24 24h-176c-13.254 0-24-10.746-24-24v-48c0-13.254 10.746-24 24-24h24v-128h-24c-13.254 0-24-10.746-24-24v-48c0-13.254 10.746-24 24-24h128c13.254 0 24 10.746 24 24v200h24c13.254 0 24 10.746 24 24v48z",
          "p-id": "67074"
        }
      ) }) })
    }
  );
};
const si = () => {
  const { editorRef: n, insertImage: r, uploadImageMethod: a } = F(I), [s, o] = D(!1), [l, i] = D("http://"), [g, _] = D(""), S = se(), C = () => {
    const p = n.current.getCursor();
    o(!1);
    const m = `![${g}](${l} "${g || "title"}")`;
    r(m, p.line, p.ch);
  }, j = (p, m, x, v) => {
    const T = `![${p || ""}](${m || ""} "${p || ""}")`;
    r(T, x, v);
  }, h = () => {
    const p = S.current.files[0], m = n.current.getCursor();
    a(p, (x, v) => j(x, v, m.line, m.ch));
  }, y = /* @__PURE__ */ e.jsxs("div", { style: { color: "#666" }, children: [
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("div", { className: "title", children: "添加图片链接" }),
      /* @__PURE__ */ e.jsxs("div", { style: { marginBottom: "10px" }, children: [
        /* @__PURE__ */ e.jsx("span", { children: "图片地址：" }),
        /* @__PURE__ */ e.jsx("input", { type: "text", className: "link-input", defaultValue: "http://", onChange: (p) => i(p.target.value) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("span", { children: "图片标题：" }),
        /* @__PURE__ */ e.jsx("input", { type: "text", className: "link-input", onChange: (p) => _(p.target.value) })
      ] }),
      /* @__PURE__ */ e.jsx("div", { style: { textAlign: "right", marginTop: "10px" }, children: /* @__PURE__ */ e.jsx("button", { className: "button", onClick: C, children: "确定" }) })
    ] }),
    a && /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("div", { className: "title", children: "从本地上传" }),
      /* @__PURE__ */ e.jsxs("span", { className: "file", children: [
        /* @__PURE__ */ e.jsx("input", { type: "file", id: "file", ref: S, onChange: h }),
        /* @__PURE__ */ e.jsx("a", { children: "选择图片" })
      ] })
    ] })
  ] }), u = (p) => {
    o(p);
  };
  return /* @__PURE__ */ e.jsx(
    he,
    {
      content: y,
      transitionName: "popover-fade",
      placement: "bottom",
      trigger: "click",
      visible: s,
      onVisibleChange: u,
      overlayClassName: "profile-popover-wrap",
      destroyTooltipOnHide: !0,
      children: /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "67609", children: /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M896 64H128A64 64 0 0 0 64 128v768a64 64 0 0 0 64 64h768a64 64 0 0 0 64-64V128a64 64 0 0 0-64-64z m-32 800H160v-128h704z m0-224h-32l-194.14-242c-14.92-18.62-44.8-18.62-59.72 0l-126.76 158-66.1-91.56c-15.84-22-50.72-22-66.56 0L192 640H160V160h704zM352 352a64 64 0 1 0-64-64 64 64 0 0 0 64 64z",
          "p-id": "67610"
        }
      ) }) })
    }
  );
}, oi = () => {
  const { wrapTextWith: n } = F(I), r = () => {
    n("==");
  };
  return /* @__PURE__ */ e.jsx("div", { className: "icon-wrapper", onClick: r, children: /* @__PURE__ */ e.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "3245", width: "200", height: "200", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M986.51844 112.52l-75.02-75.02C886.51844 12.5 853.75844 0 820.99844 0s-65.52 12.5-90.52 37.48l-135.74 135.76-79.18-79.18c-31.24-31.24-81.9-31.24-113.12 0L164.85844 331.62c-12.5 12.5-12.5 32.76 0 45.24l22.62 22.62c12.5 12.5 32.76 12.5 45.24 0L458.99844 173.24l67.88 67.88-14.84 14.84L187.91844 580.06A654.076 654.076 0 0 0 0.35844 970.24l-0.06 0.46C-2.88156 999.44 19.77844 1024 47.91844 1024c1.78 0 3.56-0.1 5.38-0.3a654.154 654.154 0 0 0 390.68-187.6L768.05844 512l69.48-69.48 148.98-148.98c50-50 50-131.04 0-181.02zM376.07844 768.22c-74.04 74.04-167.98 125.76-269.48 149.2 23.44-101.48 75.18-195.46 149.2-269.48l324.1-324.1 14.84-14.84 120.28 120.28-14.84 14.84-324.1 324.1z m542.56-542.58l-135.76 135.76-97.64-97.66-22.62-22.62 135.74-135.74c8.16-8.16 17.68-9.38 22.62-9.38 4.94 0 14.48 1.22 22.62 9.38L918.61844 180.4c8.16 8.16 9.38 17.68 9.38 22.62s-1.2 14.48-9.36 22.62z",
      "p-id": "3246"
    }
  ) }) });
};
const ci = {
  undo: /* @__PURE__ */ e.jsx(Rn, {}),
  redo: /* @__PURE__ */ e.jsx(Sn, {}),
  bold: /* @__PURE__ */ e.jsx(En, {}),
  through: /* @__PURE__ */ e.jsx(Hn, {}),
  mark: /* @__PURE__ */ e.jsx(oi, {}),
  italic: /* @__PURE__ */ e.jsx(Vn, {}),
  upperCase: /* @__PURE__ */ e.jsx(Nn, {}),
  lowerCase: /* @__PURE__ */ e.jsx(zn, {}),
  humpCase: /* @__PURE__ */ e.jsx(On, {}),
  quote: /* @__PURE__ */ e.jsx(Ln, {}),
  dividing: /* @__PURE__ */ e.jsx(Pn, {}),
  unOrderedList: /* @__PURE__ */ e.jsx($n, {}),
  orderedList: /* @__PURE__ */ e.jsx(Bn, {}),
  table: /* @__PURE__ */ e.jsx(Fn, {}),
  inlineCode: /* @__PURE__ */ e.jsx(Wn, {}),
  link: /* @__PURE__ */ e.jsx(Un, {}),
  sub: /* @__PURE__ */ e.jsx(qn, {}),
  super: /* @__PURE__ */ e.jsx(Yn, {}),
  emoji: /* @__PURE__ */ e.jsx(Y2, {}),
  codeBlock: /* @__PURE__ */ e.jsx(J2, {}),
  htmlEntities: /* @__PURE__ */ e.jsx(Q2, {}),
  dateTime: /* @__PURE__ */ e.jsx(Z2, {}),
  theme: /* @__PURE__ */ e.jsx(ei, {}),
  checkList: /* @__PURE__ */ e.jsx(ti, {}),
  clear: /* @__PURE__ */ e.jsx(ni, {}),
  toggleEditor: /* @__PURE__ */ e.jsx(ri, {}),
  fullScreen: /* @__PURE__ */ e.jsx(ai, {}),
  help: /* @__PURE__ */ e.jsx(ii, {}),
  image: /* @__PURE__ */ e.jsx(si, {})
}, li = (n, r) => {
  const { editorRef: a, toggleEditor: s, height: o, toggleScreen: l, toolbars: i, uploadImageMethod: g, languages: _ } = n, S = se();
  Be(r, () => ({
    toolbarHeight: S.current.getBoundingClientRect().height
  }));
  const C = (u) => {
    const p = a.current;
    if (!p)
      return oe.Pass;
    if (!p.getSelection())
      return p.focus(), oe.Pass;
    const m = p.listSelections();
    for (let x = 0; x < m.length; x++) {
      const v = m[x], T = u.length;
      if (!v.empty()) {
        const w = v.from(), z = v.to(), d = p.getRange({ ch: w.ch - T, line: w.line }, w), A = p.getRange(z, {
          ch: z.ch + T,
          line: z.line
        });
        if (d === u && A === u) {
          const k = {
            ch: w.ch - T,
            line: w.line
          }, N = { ch: z.ch + T, line: z.line }, L = p.getRange(k, N), P = L.slice(T, L.length - T);
          p.replaceRange(P, k, N, "+input");
          const E = p.indexFromPos(m[x].anchor), H = p.indexFromPos(m[x].head);
          E > H ? (m[x].anchor.ch -= T, m[x].head.ch -= T) : (w.line === z.line && (m[x].head.ch -= T), m[x].anchor.ch -= T);
        } else {
          const k = p.getRange(w, z);
          p.replaceRange(u + k + u, w, z, "+input");
          const N = p.indexFromPos(m[x].anchor), L = p.indexFromPos(m[x].head);
          N > L ? (m[x].anchor.ch += T, m[x].head.ch += T) : (w.line === z.line && (m[x].head.ch += T), m[x].anchor.ch += T);
        }
        p.setSelections(m);
      }
    }
  }, j = (u) => {
    const p = a.current;
    if (!p)
      return oe.Pass;
    if (!p.getSelection())
      return p.focus(), oe.Pass;
    const m = p.listSelections();
    for (let x = 0; x < m.length; x++) {
      const v = m[x];
      if (!v.empty()) {
        const T = v.from(), w = v.to(), z = p.getRange(T, w);
        let d = "";
        switch (u) {
          case "upperCase":
            d = z.toLocaleUpperCase();
            break;
          case "lowerCase":
            d = z.toLocaleLowerCase();
            break;
          case "humpCase":
            d = z[0].toLocaleUpperCase() + z.slice(1, z.length).toLocaleLowerCase();
            break;
        }
        p.replaceRange(d, T, w, "+input"), p.setSelections(m);
      }
    }
  }, h = (u, p, m, x) => {
    const v = a.current;
    if (!v)
      return oe.Pass;
    const T = v.getCursor();
    if (m)
      v.getLine(T.line).startsWith(u) ? v.replaceRange("", { ch: 0, line: T.line }, { ch: u.length, line: T.line }) : v.replaceRange(u, { ch: 0, line: T.line });
    else if (p) {
      const w = T.line;
      v.replaceRange(`
` + u + `
`, K(w + 1, 0)), v.setCursor(K(w + x, u.length));
    } else
      v.replaceRange(u, K(T.line, T.ch));
    v.focus();
  }, y = (u, p, m) => {
    const x = a.current;
    if (!x)
      return oe.Pass;
    x.replaceRange(u, K(p, m));
  };
  return /* @__PURE__ */ e.jsx("div", { ref: S, className: "Toolbar", children: /* @__PURE__ */ e.jsx(
    I.Provider,
    {
      value: {
        editorRef: a,
        wrapTextWith: C,
        switchTextCase: j,
        insertText: h,
        toggleEditor: s,
        toggleScreen: l,
        insertImage: y,
        uploadImageMethod: g,
        languages: _
      },
      children: i && i.map((u) => u === "header" ? ["h1", "h2", "h3", "h4"].map((p, m) => /* @__PURE__ */ e.jsx("div", { style: { height: o }, children: /* @__PURE__ */ e.jsx(Mn, { name: p }, m) }, `${u}-${m}`)) : /* @__PURE__ */ e.jsx("div", { style: { height: o }, children: ci[u] }, u))
    }
  ) });
}, pi = xe.forwardRef(li);
const di = [
  "undo",
  "redo",
  "bold",
  "through",
  "italic",
  "mark",
  "upperCase",
  "humpCase",
  "lowerCase",
  "sub",
  "super",
  "inlineCode",
  "quote",
  "header",
  "unOrderedList",
  "orderedList",
  "checkList",
  "dividing",
  "table",
  "link",
  "image",
  "codeBlock",
  "emoji",
  "htmlEntities",
  "dateTime",
  "clear",
  "theme",
  "toggleEditor",
  "fullScreen",
  "help"
], ui = (n, r) => {
  switch (r.type) {
    case "setMdValue":
      return { ...n, mdValue: r.value };
    case "setHtmlValue":
      return { ...n, htmlValue: r.value };
    case "setTocValue":
      return { ...n, tocValue: r.value };
    default:
      throw new Error();
  }
}, mi = (n) => ({ mdValue: n, htmlValue: "", tocValue: "" }), pt = ["bash", "javascript", "typescript", "go", "python", "jsx", "tsx", "sql", "markmap"], hi = (n, r) => {
  const {
    width: a = "100%",
    height: s = 800,
    toolBarHeight: o = 34,
    onSave: l,
    toolbars: i = di,
    initialValue: g,
    onChange: _,
    uploadImageMethod: S,
    style: C,
    withToc: j,
    options: h
  } = n, [y, u] = Lt(ui, g, mi), p = se(), m = se(), x = se(), v = se(), T = se(), w = se(""), [z, d] = D(!0), [A, k] = D(!1);
  Be(r, () => ({
    getValues: () => ({ ...y })
  }));
  const N = () => {
    let b;
    return Xt(s) ? b = parseInt(s) : b = s, b - o;
  }, [L, P] = D(N), E = (b) => {
    var _e, Se, Ee;
    if (!p.current)
      return;
    let V, X, q, G, Y, le, Q, ve, ge, de;
    V = m.current.getScrollTop() - m.current.getOffsetTop(), Y = [], X = [], q = [], G = 0;
    const we = b.split(`
`), ye = (_e = p.current) == null ? void 0 : _e.defaultTextHeight();
    for (Q = 0; Q < we.length; Q++) {
      const ue = we[Q];
      if (q.push(G), ue.length === 0) {
        G++;
        continue;
      }
      const ne = ((Se = p.current) == null ? void 0 : Se.heightAtLine(Q + 1)) - ((Ee = p.current) == null ? void 0 : Ee.heightAtLine(Q));
      G += Math.round(ne / ye);
    }
    for (q.push(G), le = G, Q = 0; Q < le; Q++)
      Y.push(-1);
    for (X.push(0), Y[0] = 0, m.current.getLines().forEach((ue) => {
      let ne = ue.dataset.line;
      ne !== "" && (ne = q[ne], ne !== 0 && X.push(ne), Y[ne] = Math.round(ue.getBoundingClientRect().top + V - 10));
    }), X.push(le), Y[le] = m.current.getScrollHeight(), ve = 0, Q = 1; Q < le; Q++) {
      if (Y[Q] !== -1) {
        ve++;
        continue;
      }
      ge = X[ve], de = X[ve + 1], Y[Q] = Math.round((Y[de] * (Q - ge) + Y[ge] * (de - Q)) / (de - ge));
    }
    return Y;
  };
  pe(() => {
    T.current = rt(
      () => {
        var G, Y;
        if (w.current !== "editor" || !p.current)
          return;
        let b = E(y.mdValue), V = (G = p.current) == null ? void 0 : G.defaultTextHeight(), X, q;
        X = Math.floor(((Y = p.current) == null ? void 0 : Y.getScrollInfo().top) / V), q = b && b[X], m.current.scrollTo(q);
      },
      50,
      { maxWait: 50 }
    );
  }, [y.mdValue]);
  const H = rt(
    () => {
      var le;
      if (w.current !== "parser" || !p.current)
        return;
      let b = E(y.mdValue);
      if (!b)
        return;
      let V = m.current.getScrollTop(), X = parseFloat(String((le = p.current) == null ? void 0 : le.defaultTextHeight())), q, G, Y;
      if (q = Object.keys(b), !(q.length < 1)) {
        for (Y = q[0], G = 1; G < q.length; G++) {
          if (b[Number(q[G])] < V) {
            Y = q[G];
            continue;
          }
          break;
        }
        Ae(".CodeMirror-scroll").stop(!0).animate(
          {
            scrollTop: X * Number(Y)
          },
          100,
          "linear"
        );
      }
    },
    50,
    { maxWait: 50 }
  ), $ = () => {
    d((b) => !b);
  }, ee = () => {
    k((b) => !b);
  };
  Mt(() => {
    const b = x.current.toolbarHeight, V = A ? document.documentElement.clientHeight - b : N();
    v.current.updateSize({ width: "50%", height: V }), P(V);
  }, [A]);
  const te = Pe(z ? "" : "hide-editor"), fe = Pe("MdEditor", { "full-screen": A });
  return /* @__PURE__ */ e.jsxs("div", { className: fe, style: { width: a, ...C }, children: [
    i && i.length > 0 && /* @__PURE__ */ e.jsx(
      pi,
      {
        ref: x,
        editorRef: p,
        toggleEditor: $,
        toggleScreen: ee,
        height: o,
        toolbars: i,
        uploadImageMethod: S,
        languages: (h == null ? void 0 : h.languages) || pt
      }
    ),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        style: {
          width: "100%",
          display: "flex",
          overflow: "hidden"
        },
        children: [
          /* @__PURE__ */ e.jsx(
            Pt,
            {
              ref: v,
              className: te,
              maxWidth: "60%",
              minWidth: "20%",
              handleStyles: { right: { background: "linear-gradient(to right, #ccc, transparent)", width: "5px" } },
              enable: { right: !0 },
              children: /* @__PURE__ */ e.jsx(
                un,
                {
                  initialValue: g,
                  editorRef: p,
                  state: y,
                  dispatch: u,
                  onScroll: () => {
                    T.current();
                  },
                  onMouseEnter: () => {
                    w.current = "editor";
                  },
                  onSave: l,
                  uploadImageMethod: S,
                  languages: (h == null ? void 0 : h.languages) || pt,
                  options: h
                }
              )
            }
          ),
          /* @__PURE__ */ e.jsx("div", { style: { width: "100%", minWidth: "1px", backgroundColor: "#FFF" }, children: /* @__PURE__ */ e.jsx(
            An,
            {
              height: L || 800,
              ref: m,
              state: y,
              dispatch: u,
              onScroll: () => {
                H();
              },
              onChange: _,
              onMouseEnter: () => {
                w.current = "parser";
              },
              toolBarHeight: o,
              withToc: j
            }
          ) })
        ]
      }
    )
  ] });
}, Mi = xe.forwardRef(hi);
export {
  Mi as default
};
