import pe, { useRef as ae, useState as B, useEffect as ce, useImperativeHandle as Ge, useContext as q, useReducer as rn, useLayoutEffect as an } from "react";
import Ee from "jquery";
import { Resizable as on } from "re-resizable";
import ie, { Pos as G } from "codemirror";
import dt from "highlight.js";
import sn from "rc-trigger";
import Ve from "classnames";
import ln from "markdown-it-sub";
import cn from "markdown-it-sup";
import pn from "markdown-it-ins";
import un from "markdown-it-mark";
import dn from "markdown-it-alerts";
import mn from "markdown-it-anchor";
import At from "uslug";
import fn from "markdown-it-task-lists";
import hn from "markdown-it-emoji";
import vn from "markdown-it-footnote";
import gn from "markdown-it-abbr";
import xn from "markdown-it-deflist";
import wn from "markdown-it";
import mt from "dayjs";
import { debounce as ft, isString as yn } from "lodash";
var bn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = {}, _n = {
  get exports() {
    return t;
  },
  set exports(e) {
    t = e;
  }
}, Te = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ht;
function jn() {
  if (ht)
    return Te;
  ht = 1;
  var e = pe, n = Symbol.for("react.element"), a = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(c, h, T) {
    var y, g = {}, m = null, x = null;
    T !== void 0 && (m = "" + T), h.key !== void 0 && (m = "" + h.key), h.ref !== void 0 && (x = h.ref);
    for (y in h)
      i.call(h, y) && !l.hasOwnProperty(y) && (g[y] = h[y]);
    if (c && c.defaultProps)
      for (y in h = c.defaultProps, h)
        g[y] === void 0 && (g[y] = h[y]);
    return { $$typeof: n, type: c, key: m, ref: x, props: g, _owner: s.current };
  }
  return Te.Fragment = a, Te.jsx = o, Te.jsxs = o, Te;
}
var Se = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vt;
function Cn() {
  return vt || (vt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = pe, n = Symbol.for("react.element"), a = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), c = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), f = Symbol.iterator, u = "@@iterator";
    function v(r) {
      if (r === null || typeof r != "object")
        return null;
      var p = f && r[f] || r[u];
      return typeof p == "function" ? p : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(r) {
      {
        for (var p = arguments.length, w = new Array(p > 1 ? p - 1 : 0), A = 1; A < p; A++)
          w[A - 1] = arguments[A];
        S("error", r, w);
      }
    }
    function S(r, p, w) {
      {
        var A = _.ReactDebugCurrentFrame, D = A.getStackAddendum();
        D !== "" && (p += "%s", w = w.concat([D]));
        var W = w.map(function($) {
          return String($);
        });
        W.unshift("Warning: " + p), Function.prototype.apply.call(console[r], console, W);
      }
    }
    var j = !1, V = !1, d = !1, E = !1, k = !1, H;
    H = Symbol.for("react.module.reference");
    function N(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === i || r === l || k || r === s || r === T || r === y || E || r === x || j || V || d || typeof r == "object" && r !== null && (r.$$typeof === m || r.$$typeof === g || r.$$typeof === o || r.$$typeof === c || r.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === H || r.getModuleId !== void 0));
    }
    function L(r, p, w) {
      var A = r.displayName;
      if (A)
        return A;
      var D = p.displayName || p.name || "";
      return D !== "" ? w + "(" + D + ")" : w;
    }
    function R(r) {
      return r.displayName || "Context";
    }
    function O(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case i:
          return "Fragment";
        case a:
          return "Portal";
        case l:
          return "Profiler";
        case s:
          return "StrictMode";
        case T:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case c:
            var p = r;
            return R(p) + ".Consumer";
          case o:
            var w = r;
            return R(w._context) + ".Provider";
          case h:
            return L(r, r.render, "ForwardRef");
          case g:
            var A = r.displayName || null;
            return A !== null ? A : O(r.type) || "Memo";
          case m: {
            var D = r, W = D._payload, $ = D._init;
            try {
              return O($(W));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, Z = 0, ee, le, C, P, Q, F, Y;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function oe() {
      {
        if (Z === 0) {
          ee = console.log, le = console.info, C = console.warn, P = console.error, Q = console.group, F = console.groupCollapsed, Y = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: U,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        Z++;
      }
    }
    function X() {
      {
        if (Z--, Z === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, r, {
              value: ee
            }),
            info: z({}, r, {
              value: le
            }),
            warn: z({}, r, {
              value: C
            }),
            error: z({}, r, {
              value: P
            }),
            group: z({}, r, {
              value: Q
            }),
            groupCollapsed: z({}, r, {
              value: F
            }),
            groupEnd: z({}, r, {
              value: Y
            })
          });
        }
        Z < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = _.ReactCurrentDispatcher, ve;
    function ue(r, p, w) {
      {
        if (ve === void 0)
          try {
            throw Error();
          } catch (D) {
            var A = D.stack.trim().match(/\n( *(at )?)/);
            ve = A && A[1] || "";
          }
        return `
` + ve + r;
      }
    }
    var we = !1, ye;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      ye = new Xe();
    }
    function Ce(r, p) {
      if (!r || we)
        return "";
      {
        var w = ye.get(r);
        if (w !== void 0)
          return w;
      }
      var A;
      we = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = he.current, he.current = null, oe();
      try {
        if (p) {
          var $ = function() {
            throw Error();
          };
          if (Object.defineProperty($.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct($, []);
            } catch (me) {
              A = me;
            }
            Reflect.construct(r, [], $);
          } else {
            try {
              $.call();
            } catch (me) {
              A = me;
            }
            r.call($.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (me) {
            A = me;
          }
          r();
        }
      } catch (me) {
        if (me && A && typeof me.stack == "string") {
          for (var M = me.stack.split(`
`), te = A.stack.split(`
`), K = M.length - 1, J = te.length - 1; K >= 1 && J >= 0 && M[K] !== te[J]; )
            J--;
          for (; K >= 1 && J >= 0; K--, J--)
            if (M[K] !== te[J]) {
              if (K !== 1 || J !== 1)
                do
                  if (K--, J--, J < 0 || M[K] !== te[J]) {
                    var re = `
` + M[K].replace(" at new ", " at ");
                    return r.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", r.displayName)), typeof r == "function" && ye.set(r, re), re;
                  }
                while (K >= 1 && J >= 0);
              break;
            }
        }
      } finally {
        we = !1, he.current = W, X(), Error.prepareStackTrace = D;
      }
      var _e = r ? r.displayName || r.name : "", ut = _e ? ue(_e) : "";
      return typeof r == "function" && ye.set(r, ut), ut;
    }
    function Oe(r, p, w) {
      return Ce(r, !1);
    }
    function Ae(r) {
      var p = r.prototype;
      return !!(p && p.isReactComponent);
    }
    function de(r, p, w) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Ce(r, Ae(r));
      if (typeof r == "string")
        return ue(r);
      switch (r) {
        case T:
          return ue("Suspense");
        case y:
          return ue("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case h:
            return Oe(r.render);
          case g:
            return de(r.type, p, w);
          case m: {
            var A = r, D = A._payload, W = A._init;
            try {
              return de(W(D), p, w);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, Ze = {}, et = _.ReactDebugCurrentFrame;
    function Pe(r) {
      if (r) {
        var p = r._owner, w = de(r.type, r._source, p ? p.type : null);
        et.setExtraStackFrame(w);
      } else
        et.setExtraStackFrame(null);
    }
    function Lt(r, p, w, A, D) {
      {
        var W = Function.call.bind(ne);
        for (var $ in r)
          if (W(r, $)) {
            var M = void 0;
            try {
              if (typeof r[$] != "function") {
                var te = Error((A || "React class") + ": " + w + " type `" + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[$] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw te.name = "Invariant Violation", te;
              }
              M = r[$](p, $, A, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (K) {
              M = K;
            }
            M && !(M instanceof Error) && (Pe(D), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", A || "React class", w, $, typeof M), Pe(null)), M instanceof Error && !(M.message in Ze) && (Ze[M.message] = !0, Pe(D), b("Failed %s type: %s", w, M.message), Pe(null));
          }
      }
    }
    var zt = Array.isArray;
    function qe(r) {
      return zt(r);
    }
    function $t(r) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, w = p && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return w;
      }
    }
    function Dt(r) {
      try {
        return tt(r), !1;
      } catch {
        return !0;
      }
    }
    function tt(r) {
      return "" + r;
    }
    function nt(r) {
      if (Dt(r))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $t(r)), tt(r);
    }
    var ke = _.ReactCurrentOwner, It = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rt, at, We;
    We = {};
    function Bt(r) {
      if (ne.call(r, "ref")) {
        var p = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function qt(r) {
      if (ne.call(r, "key")) {
        var p = Object.getOwnPropertyDescriptor(r, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Wt(r, p) {
      if (typeof r.ref == "string" && ke.current && p && ke.current.stateNode !== p) {
        var w = O(ke.current.type);
        We[w] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(ke.current.type), r.ref), We[w] = !0);
      }
    }
    function Ft(r, p) {
      {
        var w = function() {
          rt || (rt = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        w.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function Ut(r, p) {
      {
        var w = function() {
          at || (at = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        w.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var Yt = function(r, p, w, A, D, W, $) {
      var M = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: r,
        key: p,
        ref: w,
        props: $,
        // Record the component responsible for creating this element.
        _owner: W
      };
      return M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(M, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.defineProperty(M, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    };
    function Kt(r, p, w, A, D) {
      {
        var W, $ = {}, M = null, te = null;
        w !== void 0 && (nt(w), M = "" + w), qt(p) && (nt(p.key), M = "" + p.key), Bt(p) && (te = p.ref, Wt(p, D));
        for (W in p)
          ne.call(p, W) && !It.hasOwnProperty(W) && ($[W] = p[W]);
        if (r && r.defaultProps) {
          var K = r.defaultProps;
          for (W in K)
            $[W] === void 0 && ($[W] = K[W]);
        }
        if (M || te) {
          var J = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          M && Ft($, J), te && Ut($, J);
        }
        return Yt(r, M, te, D, A, ke.current, $);
      }
    }
    var Fe = _.ReactCurrentOwner, it = _.ReactDebugCurrentFrame;
    function be(r) {
      if (r) {
        var p = r._owner, w = de(r.type, r._source, p ? p.type : null);
        it.setExtraStackFrame(w);
      } else
        it.setExtraStackFrame(null);
    }
    var Ue;
    Ue = !1;
    function Ye(r) {
      return typeof r == "object" && r !== null && r.$$typeof === n;
    }
    function ot() {
      {
        if (Fe.current) {
          var r = O(Fe.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Jt(r) {
      {
        if (r !== void 0) {
          var p = r.fileName.replace(/^.*[\\\/]/, ""), w = r.lineNumber;
          return `

Check your code at ` + p + ":" + w + ".";
        }
        return "";
      }
    }
    var st = {};
    function Gt(r) {
      {
        var p = ot();
        if (!p) {
          var w = typeof r == "string" ? r : r.displayName || r.name;
          w && (p = `

Check the top-level render call using <` + w + ">.");
        }
        return p;
      }
    }
    function lt(r, p) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var w = Gt(p);
        if (st[w])
          return;
        st[w] = !0;
        var A = "";
        r && r._owner && r._owner !== Fe.current && (A = " It was passed a child from " + O(r._owner.type) + "."), be(r), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, A), be(null);
      }
    }
    function ct(r, p) {
      {
        if (typeof r != "object")
          return;
        if (qe(r))
          for (var w = 0; w < r.length; w++) {
            var A = r[w];
            Ye(A) && lt(A, p);
          }
        else if (Ye(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var D = v(r);
          if (typeof D == "function" && D !== r.entries)
            for (var W = D.call(r), $; !($ = W.next()).done; )
              Ye($.value) && lt($.value, p);
        }
      }
    }
    function Qt(r) {
      {
        var p = r.type;
        if (p == null || typeof p == "string")
          return;
        var w;
        if (typeof p == "function")
          w = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        p.$$typeof === g))
          w = p.propTypes;
        else
          return;
        if (w) {
          var A = O(p);
          Lt(w, r.props, "prop", A, r);
        } else if (p.PropTypes !== void 0 && !Ue) {
          Ue = !0;
          var D = O(p);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xt(r) {
      {
        for (var p = Object.keys(r.props), w = 0; w < p.length; w++) {
          var A = p[w];
          if (A !== "children" && A !== "key") {
            be(r), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", A), be(null);
            break;
          }
        }
        r.ref !== null && (be(r), b("Invalid attribute `ref` supplied to `React.Fragment`."), be(null));
      }
    }
    function pt(r, p, w, A, D, W) {
      {
        var $ = N(r);
        if (!$) {
          var M = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (M += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var te = Jt(D);
          te ? M += te : M += ot();
          var K;
          r === null ? K = "null" : qe(r) ? K = "array" : r !== void 0 && r.$$typeof === n ? (K = "<" + (O(r.type) || "Unknown") + " />", M = " Did you accidentally export a JSX literal instead of a component?") : K = typeof r, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", K, M);
        }
        var J = Kt(r, p, w, D, W);
        if (J == null)
          return J;
        if ($) {
          var re = p.children;
          if (re !== void 0)
            if (A)
              if (qe(re)) {
                for (var _e = 0; _e < re.length; _e++)
                  ct(re[_e], r);
                Object.freeze && Object.freeze(re);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ct(re, r);
        }
        return r === i ? Xt(J) : Qt(J), J;
      }
    }
    function Zt(r, p, w) {
      return pt(r, p, w, !0);
    }
    function en(r, p, w) {
      return pt(r, p, w, !1);
    }
    var tn = en, nn = Zt;
    Se.Fragment = i, Se.jsx = tn, Se.jsxs = nn;
  }()), Se;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = jn() : e.exports = Cn();
})(_n);
const kn = (e, n) => (typeof e == "string" ? e = new RegExp(e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), n ? "g" : "gi") : e.global || (e = new RegExp(e.source, e.ignoreCase ? "gi" : "g")), {
  token: function(a) {
    e.lastIndex = a.pos;
    var i = e.exec(a.string);
    if (i && i.index == a.pos)
      return a.pos += i[0].length || 1, "searching";
    i ? a.pos = i.index : a.skipToEnd();
  }
}), Tn = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), Sn = (e) => {
  let { searchInput: n, editor: a, showPannel: i, setSearchInput: s } = e;
  const l = ae(null), [o, c] = B(), [h, T] = B(), [y, g] = B(), [m, x] = B(), [f, u] = B(""), [v, _] = B(!1), [b, S] = B(!1);
  let j = a;
  const V = () => {
    T(kn(d(n), b));
    const C = d(n);
    x(C);
  };
  ce(() => {
    j.showMatchesOnScrollbar && m && (y && y.clear(), g(j.showMatchesOnScrollbar(m)));
  }, [m]);
  const d = (C) => {
    if (!C)
      return "";
    let P;
    try {
      v ? P = new RegExp(C, b ? "g" : "gi") : P = new RegExp(Tn(C), b ? "g" : "gi");
    } catch {
    }
    return P || "";
  };
  ce(() => {
    h && j.addOverlay(h);
  }, [h, j]);
  const E = () => {
    o && c(void 0), j.operation(function() {
      j.removeOverlay(h);
    }), y && (y.clear(), g(null));
  }, k = () => {
    let C = j.getSearchCursor(d(n), {
      line: 0,
      ch: 0
    });
    C.findNext() && (j.setSelection(C == null ? void 0 : C.from(), C == null ? void 0 : C.to()), j.scrollIntoView({ from: C.from(), to: C.to() }, 100)), c(C);
  };
  ce(() => {
    var F;
    if ((F = l.current) == null || F.focus(), !n) {
      E();
      return;
    }
    const C = j.getCursor();
    let P;
    P = j.getSearchCursor(d(n), {
      line: C.line,
      ch: C.ch - n.length
    }), P.findNext() ? (j.setSelection(P == null ? void 0 : P.from(), P == null ? void 0 : P.to()), j.scrollIntoView({ from: P.from(), to: P.to() }, 40)) : (P = j.getSearchCursor(d(n), {
      line: 0,
      ch: 0
    }), P.findNext() && (j.setSelection(P == null ? void 0 : P.from(), P == null ? void 0 : P.to()), j.scrollIntoView({ from: P.from(), to: P.to() }, 40))), c(P), E(), V();
  }, [n, j]);
  const H = () => {
    if (!(o == null ? void 0 : o.findPrevious())) {
      k();
      return;
    }
    j.setSelection(o == null ? void 0 : o.from(), o == null ? void 0 : o.to()), j.scrollIntoView(
      {
        from: o == null ? void 0 : o.from(),
        to: o == null ? void 0 : o.to()
      },
      40
    );
  }, N = () => {
    if (!(o == null ? void 0 : o.findNext())) {
      k();
      return;
    }
    j.setSelection(o == null ? void 0 : o.from(), o == null ? void 0 : o.to()), j.scrollIntoView(
      {
        from: o == null ? void 0 : o.from(),
        to: o == null ? void 0 : o.to()
      },
      40
    );
  }, L = () => {
    E(), i(!1);
  }, R = () => {
    if (j.getOption("readOnly") || !f)
      return;
    o == null || o.replace(f), (o == null ? void 0 : o.findNext()) && (j.setSelection(o == null ? void 0 : o.from(), o == null ? void 0 : o.to()), j.scrollIntoView(
      {
        from: o == null ? void 0 : o.from(),
        to: o == null ? void 0 : o.to()
      },
      100
    ));
  }, O = () => {
    for (var C = j.getSearchCursor(d(n)); C.findNext(); )
      typeof n != "string" || C.replace(f);
  }, z = (C) => {
    u(C.target.value);
  }, Z = (C) => {
    s(C.target.value), E(), n || V();
  }, ee = () => {
    _((C) => !C);
  }, le = () => {
    S((C) => !C);
  };
  return ce(() => {
    E(), m && (V(), k());
  }, [b, v]), /* @__PURE__ */ t.jsxs("div", { className: "search-replace-pannel", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "search", children: [
      /* @__PURE__ */ t.jsx("div", { className: "search-input", children: /* @__PURE__ */ t.jsx("input", { ref: l, type: "text", value: n, onChange: (C) => Z(C) }) }),
      /* @__PURE__ */ t.jsxs("div", { className: "button-group", children: [
        /* @__PURE__ */ t.jsx("button", { onClick: ee, style: { color: v ? "#e45649" : "" }, children: ".*" }),
        /* @__PURE__ */ t.jsx("button", { onClick: le, style: { color: b ? "#e45649" : "" }, children: "Aa" }),
        /* @__PURE__ */ t.jsx("button", { onClick: H, children: "↑" }),
        /* @__PURE__ */ t.jsx("button", { onClick: N, children: "↓" }),
        /* @__PURE__ */ t.jsx("button", { onClick: L, children: "×" })
      ] })
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: "replace", children: /* @__PURE__ */ t.jsxs("div", { className: "replace-input", children: [
      /* @__PURE__ */ t.jsx("input", { type: "text", value: f, onChange: (C) => z(C) }),
      /* @__PURE__ */ t.jsxs("div", { className: "button-group", children: [
        /* @__PURE__ */ t.jsx("button", { onClick: R, children: "replace" }),
        /* @__PURE__ */ t.jsx("button", { onClick: O, children: "replace all" })
      ] })
    ] }) })
  ] });
};
function gt(e, n) {
  for (var a = e.getCursor(), i = e.lineCount(), s = [], l = a.line + 1; l < i; l++)
    s.push(e.getLine(l));
  return s = e.getLine(a.line).slice(a.ch) + `
` + s.join(`
`), n(s);
}
function xt(e) {
  var n;
  return n = e.match(/`{3,}/g), n && n.length % 2 ? !1 : (n = e.match(/`/g), !(n && n.length % 2));
}
function En(e, n, a) {
  let i = e.getCursor(), s = e.getTokenAt(i);
  const l = a.text;
  let o = "";
  gt(e, xt) && (o = "\n\n```");
  let c = l + o;
  e.replaceRange(c, { line: i.line, ch: 3 }, { line: i.line, ch: s.end }), gt(e, xt) ? e.execCommand("goLineUp") : Promise.resolve().then(() => {
    e.closeHint();
  });
}
function Rn(e, n, a) {
  let i = e.getCursor(), s = e.getTokenAt(i), l = 0, c = s.state.streamSeen.string.match(/^\s+/);
  c && (l = c[0].length);
  const h = a.text;
  let T = ` h${h.length}`, y = h + T;
  e.replaceRange(y, { line: i.line, ch: l }, { line: i.line, ch: s.end }), Promise.resolve().then(() => {
    let g = e.getCursor(), m = e.getTokenAt(g);
    e.setSelection({ line: g.line, ch: m.end }, { line: g.line, ch: m.end - 2 });
  });
}
const On = (e, n) => {
  let a = e.getCursor(), i = e.getTokenAt(a);
  if (i.type && /header\sheader-\d/.test(i.type)) {
    let s = [];
    const l = i.state.streamSeen.string;
    let o = l.trimStart().split(/\s+/);
    if (o.length === 1) {
      for (let h = o[0].length; h <= 6; h++) {
        let T = "#".repeat(h);
        s.push({
          text: `${T}`,
          displayText: `${T} h${T.length}`,
          hint: Rn
        });
      }
      const c = i.end;
      return {
        list: s,
        from: { ch: l.length, line: a.line },
        to: { ch: c, line: a.line }
      };
    }
  }
  if (i.type && i.type === "comment" && !i.start) {
    n = n || ["bash", "javascript", "typescript", "go", "python", "jsx", "tsx", "sql", "markmap"];
    let s = i.state.base.fencedEndRE;
    const l = i.string;
    let o = l.split("```")[1];
    if (l && /^`{3}/.test(l) && s && !n.includes(o)) {
      let c = [];
      n.filter((T) => T.startsWith(o)).forEach(
        (T) => c.push({
          text: T,
          displayText: T,
          hint: En
        })
      );
      const h = i.end;
      return {
        list: c,
        from: { ch: i.string.length, line: a.line },
        to: { ch: h, line: a.line }
      };
    }
  }
};
const An = {
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
}, Pn = (e, n) => {
  const { editorRef: a, onSave: i, uploadImageMethod: s, initialValue: l, options: o, languages: c } = e, h = ae(null), { state: T, onScroll: y, onMouseEnter: g, dispatch: m } = e, x = ae();
  x.current = T;
  const [f, u] = B(!1), [v, _] = B("");
  return ce(() => {
    a.current = ie.fromTextArea(h.current, { ...An, ...o }), a.current.setSize("100%", "100%");
    function b(d, E) {
      if (d.isReadOnly())
        return ie.Pass;
      d.operation(function() {
        for (var k = d.listSelections().length, H = [], N = -1, L = 0; L < k; L++) {
          var R = d.listSelections()[L].head;
          if (!(R.line <= N)) {
            var O = G(R.line + (E ? 0 : 1), 0);
            d.replaceRange(`
`, O, void 0, "+insertLine"), d.indentLine(O.line, void 0), H.push({ head: O, anchor: O }), N = R.line + 1;
          }
        }
        d.setSelections(H);
      }), d.execCommand("indentAuto");
    }
    const S = {
      "Ctrl-Down": function(d) {
        let E = d.listSelections().length;
        for (let H = 0; H < E; H++) {
          var k = d.listSelections()[H];
          k.empty() ? d.replaceRange(d.getLine(k.head.line) + `
`, G(k.head.line, 0)) : d.replaceRange(d.getRange(k.from(), k.to()), k.from());
        }
      },
      "Alt-Up": function(d) {
        if (d.isReadOnly())
          return ie.Pass;
        let E = d.listSelections(), k = [], H = d.firstLine() - 1, N = [];
        for (let L = 0; L < E.length; L++) {
          let R = E[L], O = R.from().line - 1, z = R.to().line;
          N.push({
            anchor: G(R.anchor.line - 1, R.anchor.ch),
            head: G(R.head.line - 1, R.head.ch)
          }), R.to().ch === 0 && !R.empty() && --z, O > H ? k.push(O, z) : k.length && (k[k.length - 1] = z), H = z;
        }
        d.operation(function() {
          for (let L = 0; L < k.length; L += 2) {
            let R = k[L], O = k[L + 1], z = d.getLine(R);
            d.replaceRange("", G(R, 0), G(R + 1, 0), "+swapLine"), O > d.lastLine() ? d.replaceRange(`
` + z, G(d.lastLine()), void 0, "+swapLine") : d.replaceRange(z + `
`, G(O, 0), void 0, "+swapLine");
          }
          d.setSelections(N);
        });
      },
      "Alt-Down": function(d) {
        if (d.isReadOnly())
          return ie.Pass;
        let E = d.listSelections(), k = [], H = d.lastLine() + 1;
        for (let O = E.length - 1; O >= 0; O--) {
          var N = E[O], L = N.to().line + 1, R = N.from().line;
          N.to().ch === 0 && !N.empty() && L--, L < H ? k.push(L, R) : k.length && (k[k.length - 1] = R), H = R;
        }
        d.operation(function() {
          for (var O = k.length - 2; O >= 0; O -= 2) {
            let z = k[O], Z = k[O + 1], ee = d.getLine(z);
            z === d.lastLine() ? d.replaceRange("", G(z - 1), G(z), "+swapLine") : (d.replaceRange("", G(z, 0), G(z + 1, 0), "+swapLine"), d.replaceRange(ee + `
`, G(Z, 0), void 0, "+swapLine"));
          }
          d.scrollIntoView(G(L, 1));
        });
      },
      "Ctrl-Shift-Z": function(d) {
        d.execCommand("Ctrl-Y");
      },
      "Ctrl-Enter": function(d) {
        return b(d, !1);
      },
      "Shift-Ctrl-Enter": function(d) {
        return b(d, !0);
      },
      "Ctrl-S": function() {
        i && i(x.current.mdValue, x.current.htmlValue, x.current.tocValue);
      }
    };
    a.current.getSearchCursor && (S["Ctrl-F"] = function(d) {
      let E = d.getSelection();
      _(E), u(!0);
    }), a.current.setOption("extraKeys", S), a.current.setOption("hintOptions", {
      hint: (d) => On(d, c),
      completeSingle: !1,
      closeOnUnfocus: !1
    }), a.current.on("change", function(d) {
      return m({ type: "setMdValue", value: d.getValue() }), d.showHint && d.showHint(), ie.Pass;
    });
    const j = (d, E, k) => {
      const H = a.current;
      if (!H)
        return ie.Pass;
      H.replaceRange(d, G(E, k));
    }, V = (d, E, k, H) => {
      const N = `![${d || ""}](${E || ""} "${d || ""}")`;
      j(N, k, H);
    };
    a.current.on("scroll", () => y()), a.current.on("paste", (d, E) => {
      if (!(E.clipboardData && E.clipboardData.items)) {
        alert("该浏览器不支持操作");
        return;
      }
      for (var k = 0, H = E.clipboardData.items.length; k < H; k++) {
        var N = E.clipboardData.items[k];
        if (N.kind === "string")
          N.getAsString(function() {
          });
        else if (N.kind === "file") {
          var L = N.getAsFile();
          const R = d.getCursor();
          s && s(L, (O, z) => V(O, z, R.line, R.ch));
        }
      }
    });
  }, []), ce(() => {
    a.current && a.current.setValue(l);
  }, [l]), /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsxs("div", { className: "rmdcm5-editor", onMouseEnter: g, children: [
    f && /* @__PURE__ */ t.jsx(Sn, { searchInput: v, editor: a.current, showPannel: u, setSearchInput: _ }),
    /* @__PURE__ */ t.jsx("textarea", { ref: h })
  ] }) });
}, Hn = pe.forwardRef(Pn);
var Je = {}, Vn = {
  get exports() {
    return Je;
  },
  set exports(e) {
    Je = e;
  }
};
(function(e, n) {
  (function(a, i) {
    e.exports = i(pe);
  })(bn, function(a) {
    function i(g, m, x, f) {
      return m === void 0 && (m = {}), Object.keys(m).reduce(function(u, v) {
        if (/^on.*/.test(v))
          return u;
        var _ = v;
        /^(data|aria)-/.test(v) || x.filter(function(E) {
          return E instanceof RegExp ? E.test(v) : E === v;
        }).length === 0 && (_ = s(v));
        var b, S, j = f(g, _);
        if (j.name === "style")
          u[j.name] = (b = m.style, S = {}, b.split(";").filter(function(E) {
            return E.trim() !== "";
          }).forEach(function(E) {
            var k, H = E.split(":");
            if (H.length > 1) {
              var N = function(R) {
                return /^-ms-/.test(R) && (R = R.substr(1)), R.startsWith("--") ? R : s(R);
              }(H[0].trim()), L = (k = H.slice(1).join(":").trim(), /^\d+$/.test(k) ? Number(k) : k.replace(/'/g, '"'));
              S[N] = L;
            }
          }), S);
        else {
          var V = m[v], d = V === "" || String(V).toLowerCase() === _.toLowerCase();
          u[j.name] = j.isBoolean ? d : V;
        }
        return u;
      }, {});
    }
    function s(g) {
      return g.replace(/(-|:)(.)/g, function(m, x, f) {
        return f.toUpperCase();
      });
    }
    a = a && a.hasOwnProperty("default") ? a.default : a;
    var l = ["table", "tbody", "thead", "tfoot", "tr"], o = { for: "htmlFor", class: "className", allowfullscreen: ["allowFullScreen", "allowFullscreen"], autocomplete: "autoComplete", autofocus: ["autoFocus"], contenteditable: "contentEditable", spellcheck: "spellCheck", srcdoc: "srcDoc", srcset: "srcSet", itemscope: "itemScope", itemprop: "itemProp", itemtype: "itemType" };
    function c(g, m) {
      var x = o[m], f = document.createElement(g);
      if (x)
        return { name: Array.isArray(x) ? x[0] : x, isBoolean: h(f, Array.isArray(x) ? x[1] || m : x) };
      for (var u in f)
        if (u.toLowerCase() === m.toLowerCase())
          return { name: u, isBoolean: h(f, u) };
      return { name: m, isBoolean: h(f, m) };
    }
    function h(g, m) {
      return g.setAttribute(m, ""), g[m] === !0 || T.indexOf(m) > -1;
    }
    var T = ["itemScope"];
    function y(g, m, x, f) {
      f === void 0 && (f = null);
      var u = x[g], v = x._;
      return u ? a.createElement(u, m, f) : v ? v(g, m, f) : a.createElement(g, m, f);
    }
    return function(g, m) {
      if (m === void 0 && (m = {}), typeof g != "string")
        throw new TypeError("Expected HTML string");
      var x = document.createElement("div");
      x.innerHTML = g.trim();
      var f = Array.from(x.childNodes).map(function(u, v) {
        return function _(b, S, j) {
          var V = j.transform || {}, d = j.preserveAttributes || [], E = j.dangerouslySetChildren || ["style"], k = V._;
          if (b.nodeType === 8)
            return null;
          if (b.nodeType === 3) {
            var H = b.textContent;
            return k ? k(H) : H;
          }
          for (var N = {}, L = b.attributes, R = 0; R < L.length; R++)
            N[L[R].name] = L[R].value;
          N.key = S.toString();
          var O = b.tagName.toLowerCase(), z = i(O, N, d, c), Z = Array.from(b.childNodes).map(function(C, P) {
            return l.indexOf(O) > -1 && C.nodeType === 3 && (C.textContent = C.textContent.trim(), C.textContent === "") ? null : _(C, S + "." + P, j);
          }).filter(Boolean);
          if (E.indexOf(O) > -1) {
            var ee = b.innerHTML;
            return ee && (O !== "style" && O !== "script" && (ee = ee.replace(/"/g, "&quot;")), z.dangerouslySetInnerHTML = { __html: ee.trim() }), y(O, z, V);
          }
          var le = Z.length === 0 ? null : Z;
          return y(O, z, V, le);
        }(u, String(v), m);
      }).filter(Boolean);
      return f.length === 1 ? f[0] : f;
    };
  });
})(Vn);
const Nn = Je;
var Qe = {}, Ne = {}, Mn = {
  get exports() {
    return Ne;
  },
  set exports(e) {
    Ne = e;
  }
};
(function(e) {
  function n(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Mn);
var xe = {}, Ln = {
  get exports() {
    return xe;
  },
  set exports(e) {
    xe = e;
  }
};
(function(e) {
  function n(a) {
    return e.exports = n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
      return typeof i;
    } : function(i) {
      return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
    }, e.exports.__esModule = !0, e.exports.default = e.exports, n(a);
  }
  e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Ln);
var Me = {}, zn = {
  get exports() {
    return Me;
  },
  set exports(e) {
    Me = e;
  }
}, wt;
function $n() {
  return wt || (wt = 1, function(e) {
    function n() {
      return e.exports = n = Object.assign ? Object.assign.bind() : function(a) {
        for (var i = 1; i < arguments.length; i++) {
          var s = arguments[i];
          for (var l in s)
            Object.prototype.hasOwnProperty.call(s, l) && (a[l] = s[l]);
        }
        return a;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, n.apply(this, arguments);
    }
    e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(zn)), Me;
}
var Le = {}, Dn = {
  get exports() {
    return Le;
  },
  set exports(e) {
    Le = e;
  }
}, ze = {}, In = {
  get exports() {
    return ze;
  },
  set exports(e) {
    ze = e;
  }
}, $e = {}, Bn = {
  get exports() {
    return $e;
  },
  set exports(e) {
    $e = e;
  }
}, De = {}, qn = {
  get exports() {
    return De;
  },
  set exports(e) {
    De = e;
  }
}, yt;
function Wn() {
  return yt || (yt = 1, function(e) {
    var n = xe.default;
    function a(i, s) {
      if (n(i) !== "object" || i === null)
        return i;
      var l = i[Symbol.toPrimitive];
      if (l !== void 0) {
        var o = l.call(i, s || "default");
        if (n(o) !== "object")
          return o;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (s === "string" ? String : Number)(i);
    }
    e.exports = a, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(qn)), De;
}
var bt;
function Fn() {
  return bt || (bt = 1, function(e) {
    var n = xe.default, a = Wn();
    function i(s) {
      var l = a(s, "string");
      return n(l) === "symbol" ? l : String(l);
    }
    e.exports = i, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Bn)), $e;
}
var _t;
function Un() {
  return _t || (_t = 1, function(e) {
    var n = Fn();
    function a(i, s, l) {
      return s = n(s), s in i ? Object.defineProperty(i, s, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : i[s] = l, i;
    }
    e.exports = a, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(In)), ze;
}
var jt;
function Yn() {
  return jt || (jt = 1, function(e) {
    var n = Un();
    function a(s, l) {
      var o = Object.keys(s);
      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(s);
        l && (c = c.filter(function(h) {
          return Object.getOwnPropertyDescriptor(s, h).enumerable;
        })), o.push.apply(o, c);
      }
      return o;
    }
    function i(s) {
      for (var l = 1; l < arguments.length; l++) {
        var o = arguments[l] != null ? arguments[l] : {};
        l % 2 ? a(Object(o), !0).forEach(function(c) {
          n(s, c, o[c]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o)) : a(Object(o)).forEach(function(c) {
          Object.defineProperty(s, c, Object.getOwnPropertyDescriptor(o, c));
        });
      }
      return s;
    }
    e.exports = i, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Dn)), Le;
}
var Ie = {}, Kn = {
  get exports() {
    return Ie;
  },
  set exports(e) {
    Ie = e;
  }
}, Be = {}, Jn = {
  get exports() {
    return Be;
  },
  set exports(e) {
    Be = e;
  }
}, Ct;
function Gn() {
  return Ct || (Ct = 1, function(e) {
    function n(a, i) {
      if (a == null)
        return {};
      var s = {}, l = Object.keys(a), o, c;
      for (c = 0; c < l.length; c++)
        o = l[c], !(i.indexOf(o) >= 0) && (s[o] = a[o]);
      return s;
    }
    e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Jn)), Be;
}
var kt;
function Qn() {
  return kt || (kt = 1, function(e) {
    var n = Gn();
    function a(i, s) {
      if (i == null)
        return {};
      var l = n(i, s), o, c;
      if (Object.getOwnPropertySymbols) {
        var h = Object.getOwnPropertySymbols(i);
        for (c = 0; c < h.length; c++)
          o = h[c], !(s.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(i, o) && (l[o] = i[o]);
      }
      return l;
    }
    e.exports = a, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Kn)), Ie;
}
var ge = {}, Tt;
function Pt() {
  if (Tt)
    return ge;
  Tt = 1, Object.defineProperty(ge, "__esModule", {
    value: !0
  }), ge.placements = ge.default = void 0;
  var e = {
    adjustX: 1,
    adjustY: 1
  }, n = [0, 0], a = {
    left: {
      points: ["cr", "cl"],
      overflow: e,
      offset: [-4, 0],
      targetOffset: n
    },
    right: {
      points: ["cl", "cr"],
      overflow: e,
      offset: [4, 0],
      targetOffset: n
    },
    top: {
      points: ["bc", "tc"],
      overflow: e,
      offset: [0, -4],
      targetOffset: n
    },
    bottom: {
      points: ["tc", "bc"],
      overflow: e,
      offset: [0, 4],
      targetOffset: n
    },
    topLeft: {
      points: ["bl", "tl"],
      overflow: e,
      offset: [0, -4],
      targetOffset: n
    },
    leftTop: {
      points: ["tr", "tl"],
      overflow: e,
      offset: [-4, 0],
      targetOffset: n
    },
    topRight: {
      points: ["br", "tr"],
      overflow: e,
      offset: [0, -4],
      targetOffset: n
    },
    rightTop: {
      points: ["tl", "tr"],
      overflow: e,
      offset: [4, 0],
      targetOffset: n
    },
    bottomRight: {
      points: ["tr", "br"],
      overflow: e,
      offset: [0, 4],
      targetOffset: n
    },
    rightBottom: {
      points: ["bl", "br"],
      overflow: e,
      offset: [4, 0],
      targetOffset: n
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: e,
      offset: [0, 4],
      targetOffset: n
    },
    leftBottom: {
      points: ["br", "bl"],
      overflow: e,
      offset: [-4, 0],
      targetOffset: n
    }
  };
  ge.placements = a;
  var i = a;
  return ge.default = i, ge;
}
var He = {}, St;
function Xn() {
  if (St)
    return He;
  St = 1;
  var e = Ne, n = xe;
  Object.defineProperty(He, "__esModule", {
    value: !0
  }), He.default = o;
  var a = l(pe), i = e(Ve);
  function s(c) {
    if (typeof WeakMap != "function")
      return null;
    var h = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap();
    return (s = function(g) {
      return g ? T : h;
    })(c);
  }
  function l(c, h) {
    if (!h && c && c.__esModule)
      return c;
    if (c === null || n(c) !== "object" && typeof c != "function")
      return { default: c };
    var T = s(h);
    if (T && T.has(c))
      return T.get(c);
    var y = {}, g = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var m in c)
      if (m !== "default" && Object.prototype.hasOwnProperty.call(c, m)) {
        var x = g ? Object.getOwnPropertyDescriptor(c, m) : null;
        x && (x.get || x.set) ? Object.defineProperty(y, m, x) : y[m] = c[m];
      }
    return y.default = c, T && T.set(c, y), y;
  }
  function o(c) {
    var h = c.showArrow, T = c.arrowContent, y = c.children, g = c.prefixCls, m = c.id, x = c.overlayInnerStyle, f = c.className, u = c.style;
    return /* @__PURE__ */ a.createElement("div", {
      className: (0, i.default)("".concat(g, "-content"), f),
      style: u
    }, h !== !1 && /* @__PURE__ */ a.createElement("div", {
      className: "".concat(g, "-arrow"),
      key: "arrow"
    }, T), /* @__PURE__ */ a.createElement("div", {
      className: "".concat(g, "-inner"),
      id: m,
      role: "tooltip",
      style: x
    }, typeof y == "function" ? y() : y));
  }
  return He;
}
var je = Ne, Zn = xe;
Object.defineProperty(Qe, "__esModule", {
  value: !0
});
var Ht = Qe.default = void 0, er = je($n()), tr = je(xe), nr = je(Yn()), rr = je(Qn()), Re = lr(pe), ar = je(sn), ir = Pt(), or = je(Xn()), sr = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"];
function Vt(e) {
  if (typeof WeakMap != "function")
    return null;
  var n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap();
  return (Vt = function(s) {
    return s ? a : n;
  })(e);
}
function lr(e, n) {
  if (!n && e && e.__esModule)
    return e;
  if (e === null || Zn(e) !== "object" && typeof e != "function")
    return { default: e };
  var a = Vt(n);
  if (a && a.has(e))
    return a.get(e);
  var i = {}, s = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var l in e)
    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
      var o = s ? Object.getOwnPropertyDescriptor(e, l) : null;
      o && (o.get || o.set) ? Object.defineProperty(i, l, o) : i[l] = e[l];
    }
  return i.default = e, a && a.set(e, i), i;
}
var cr = function(n, a) {
  var i = n.overlayClassName, s = n.trigger, l = s === void 0 ? ["hover"] : s, o = n.mouseEnterDelay, c = o === void 0 ? 0 : o, h = n.mouseLeaveDelay, T = h === void 0 ? 0.1 : h, y = n.overlayStyle, g = n.prefixCls, m = g === void 0 ? "rc-tooltip" : g, x = n.children, f = n.onVisibleChange, u = n.afterVisibleChange, v = n.transitionName, _ = n.animation, b = n.motion, S = n.placement, j = S === void 0 ? "right" : S, V = n.align, d = V === void 0 ? {} : V, E = n.destroyTooltipOnHide, k = E === void 0 ? !1 : E, H = n.defaultVisible, N = n.getTooltipContainer, L = n.overlayInnerStyle, R = n.arrowContent, O = n.overlay, z = n.id, Z = n.showArrow, ee = Z === void 0 ? !0 : Z, le = (0, rr.default)(n, sr), C = (0, Re.useRef)(null);
  (0, Re.useImperativeHandle)(a, function() {
    return C.current;
  });
  var P = (0, nr.default)({}, le);
  "visible" in n && (P.popupVisible = n.visible);
  var Q = function() {
    return /* @__PURE__ */ Re.createElement(or.default, {
      showArrow: ee,
      arrowContent: R,
      key: "content",
      prefixCls: m,
      id: z,
      overlayInnerStyle: L
    }, O);
  }, F = !1, Y = !1;
  if (typeof k == "boolean")
    F = k;
  else if (k && (0, tr.default)(k) === "object") {
    var U = k.keepParent;
    F = U === !0, Y = U === !1;
  }
  return /* @__PURE__ */ Re.createElement(ar.default, (0, er.default)({
    popupClassName: i,
    prefixCls: m,
    popup: Q,
    action: l,
    builtinPlacements: ir.placements,
    popupPlacement: j,
    ref: C,
    popupAlign: d,
    getPopupContainer: N,
    onPopupVisibleChange: f,
    afterPopupVisibleChange: u,
    popupTransitionName: v,
    popupAnimation: _,
    popupMotion: b,
    defaultPopupVisible: H,
    destroyPopupOnHide: F,
    autoDestroy: Y,
    mouseLeaveDelay: T,
    popupStyle: y,
    mouseEnterDelay: c
  }, P), x);
}, pr = /* @__PURE__ */ (0, Re.forwardRef)(cr);
Ht = Qe.default = pr;
var ur = Pt();
const dr = {
  adjustX: 1,
  adjustY: 1
}, Et = {
  adjustX: 0,
  adjustY: 0
}, mr = [0, 0];
function Rt(e) {
  return typeof e == "boolean" ? e ? dr : Et : {
    ...Et,
    ...e
  };
}
function fr(e) {
  const { arrowWidth: n = 6, horizontalArrowShift: a = 50, verticalArrowShift: i = 50, autoAdjustOverflow: s } = e, l = {
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
      offset: [-4, -(i + n)]
    },
    topRight: {
      points: ["br", "tc"],
      offset: [a + n, -4]
    },
    rightTop: {
      points: ["tl", "cr"],
      offset: [4, -(i + n)]
    },
    bottomRight: {
      points: ["tr", "bc"],
      offset: [a + n, 4]
    },
    rightBottom: {
      points: ["bl", "cr"],
      offset: [4, i + n]
    },
    bottomLeft: {
      points: ["tl", "bc"],
      offset: [-a, 4]
    },
    leftBottom: {
      points: ["br", "cl"],
      offset: [-4, i + n]
    }
  };
  return Object.keys(l).forEach((o) => {
    l[o] = e.arrowPointAtCenter ? {
      ...l[o],
      overflow: Rt(s),
      targetOffset: mr
    } : {
      ...ur.placements[o],
      overflow: Rt(s)
    }, l[o].ignoreShake = !0;
  }), l;
}
const fe = (e) => {
  const { content: n, children: a, trigger: i, transitionName: s, mouseEnterDelay: l, mouseLeaveDelay: o, ...c } = e, h = () => typeof n == "function" ? n() : n, T = () => {
    const { builtinPlacements: g, arrowPointAtCenter: m, autoAdjustOverflow: x } = e;
    return g || fr({
      arrowPointAtCenter: m,
      autoAdjustOverflow: x
    });
  }, y = (g, m) => {
    const x = T(), f = Object.keys(x).filter(
      (_) => x[_].points[0] === m.points[0] && x[_].points[1] === m.points[1]
    )[0];
    if (!f)
      return;
    const u = g.getBoundingClientRect(), v = {
      top: "50%",
      left: "50%"
    };
    f.indexOf("top") >= 0 || f.indexOf("Bottom") >= 0 ? v.top = `${u.height - m.offset[1]}px` : (f.indexOf("Top") >= 0 || f.indexOf("bottom") >= 0) && (v.top = `${-m.offset[1]}px`), f.indexOf("left") >= 0 || f.indexOf("Right") >= 0 ? v.left = `${u.width - m.offset[0]}px` : (f.indexOf("right") >= 0 || f.indexOf("Left") >= 0) && (v.left = `${-m.offset[0]}px`), g.style.transformOrigin = `${v.left} ${v.top}`;
  };
  return /* @__PURE__ */ t.jsx(
    Ht,
    {
      overlay: h,
      trigger: i || "click",
      prefixCls: "popover",
      transitionName: s,
      mouseEnterDelay: l,
      mouseLeaveDelay: o,
      builtinPlacements: T(),
      onPopupAlign: y,
      arrowContent: /* @__PURE__ */ t.jsx("div", { className: "popover-arrow-inner" }),
      ...c,
      children: a
    }
  );
};
fe.defaultProps = {
  prefixCls: "popover",
  placement: "top",
  transitionName: "popover-zoom",
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: !1,
  autoAdjustOverflow: !0
};
const hr = {
  markmap: "markdown"
};
let se = wn({
  html: !0,
  breaks: !0,
  linkify: !0,
  typographer: !0,
  highlight: function(e, n) {
    const a = hr[n] || n;
    if (a && dt.getLanguage(a))
      try {
        const c = dt.highlight(e, { language: a, ignoreIllegals: !0 }).value;
        return `<pre class="hljs codeWrapper"><table><tbody><tr><td class="gutter"><pre>${c.split(/\n/).slice(0, -1).map((g, m) => `<span class="code-line">${m + 1}</span><br>`).join("")}</pre></td><td><code class=${`language-${n}`}>${c}</code></td></tr></tbody></table></pre>`;
      } catch {
      }
    const i = se.utils.escapeHtml(e);
    return `<pre class="hljs codeWrapper"><table><tbody><tr><td class="gutter"><pre>${i.split(/\n/).slice(0, -1).map((c, h) => `<span class="code-line">${h + 1}</span><br>`).join("")}</pre></td><td><code class=${`language-${n}`}>${i}</code></td></tr></tbody></table></pre>`;
  }
});
function vr(e) {
  if (e && e.attrs && e.attrs.length > 0) {
    const n = e.attrs.find((a) => Array.isArray(a) && a.length >= 2 ? a[0] === "id" : !1);
    if (n && Array.isArray(n) && n.length >= 2) {
      const [a, i] = n;
      return i;
    }
  }
  return null;
}
function gr(e, n) {
  const a = [];
  let i = null;
  return n.forEach((s) => {
    if (s.type === "heading_open") {
      const l = vr(s), o = parseInt(s.tag.toLowerCase().replace("h", ""), 10);
      e.indexOf(o) >= 0 && (i = {
        level: o,
        text: null,
        anchor: l || null
      });
    } else if (i && s.type === "inline") {
      const l = s.children.filter((o) => o.type === "text" || o.type === "code_inline").reduce((o, c) => o + c.content, "");
      i.text = l;
    } else
      s.type === "heading_close" && (i && a.push(i), i = null);
  }), a;
}
function xr(e) {
  return Math.min(...e.map((n) => n.level));
}
function Ke(e, n, a, i) {
  const s = { level: e, text: n, anchor: a, children: [], parent: i };
  return i.children.push(s), s;
}
function wr(e) {
  const n = { level: xr(e) - 1, anchor: null, text: null, children: [], parent: null };
  let a = n, i = a;
  return e.forEach((s) => {
    if (s.level > i.level)
      Array.from({ length: s.level - i.level }).forEach((l) => {
        a = i, i = Ke(s.level, null, null, a);
      }), i.text = s.text, i.anchor = s.anchor;
    else if (s.level === i.level)
      i = Ke(s.level, s.text, s.anchor, a);
    else if (s.level < i.level) {
      for (let l = 0; l < i.level - s.level; l++)
        a = a.parent;
      i = Ke(s.level, s.text, s.anchor, a);
    }
  }), n;
}
function Nt(e, n, a) {
  const i = e.children.map((s) => {
    let l = "<li>", o = s.anchor, c = s.text ? a.renderInline(s.text) : null;
    return l += o ? `<a href="#${o}">${c}</a>` : c || "", l + (s.children.length > 0 ? Nt(s, n, a) : "") + "</li>";
  }).join("");
  return i ? '<ul class="root">' + i + "</ul>" : "";
}
function yr(e, n, a, i, s) {
  var l;
  return e[n].map && e[n].level === 0 && (l = e[n].map[0], e[n].attrJoin("class", "line"), e[n].attrSet("data-line", String(l))), s.renderToken(e, n, a, i, s);
}
se.renderer.rules.paragraph_open = se.renderer.rules.heading_open = yr;
var br = se.renderer.rules.link_open || function(e, n, a, i, s) {
  return s.renderToken(e, n, a);
};
se.renderer.rules.link_open = function(e, n, a, i, s) {
  var l = e[n].attrIndex("target");
  return l < 0 ? e[n].attrPush(["target", "_blank"]) : e[n].attrs[l][1] = "_blank", br(e, n, a, i, s);
};
se.renderer.rules.table_open = function(e, n, a, i, s) {
  var l;
  const { map: o, level: c, type: h } = e[n];
  return o && c === 0 && h === "table_open" ? (l = e[n].map[0], `<div class="table-container line" data-line=${l}>` + s.renderToken(e, n, a, i, s)) : s.renderToken(e, n, a, i, s);
};
se.renderer.rules.table_close = function(e, n, a, i, s) {
  return e[n].type === "table_close" && e[n].level === 0 ? s.renderToken(e, n, a, i, s) + "</div>" : s.renderToken(e, n, a, i, s);
};
se.use(hn).use(vn).use(gn).use(xn).use(ln).use(cn).use(pn).use(un).use(dn).use(mn, {
  slugify: (e) => At(e)
}).use(fn);
const _r = (e, n) => {
  const { state: a, height: i, onScroll: s, onMouseEnter: l, dispatch: o, onChange: c, toolBarHeight: h, withToc: T = !0 } = e, [y, g] = B(""), [m, x] = B(!1), f = ae();
  Ge(n, () => ({
    getScrollTop: () => f.current.scrollTop,
    getOffsetTop: () => f.current.getBoundingClientRect().top,
    getLines: () => Array.from(f.current.getElementsByClassName("line")),
    getScrollHeight: () => f.current.scrollHeight,
    scrollTo: (_) => {
      Ee(f.current).stop(!0).animate(
        {
          scrollTop: _
        },
        100,
        "linear"
      );
    }
  })), ce(() => {
    T && se.core.ruler.push("generate_toc", function(_) {
      const b = gr([1, 2, 3, 4, 5, 6], _.tokens), S = wr(b), j = Nt(S, {}, se);
      o({ type: "setTocValue", value: j });
    });
  }, []), ce(() => {
    const _ = se.render(a.mdValue);
    o({ type: "setHtmlValue", value: _ }), c && c(a.mdValue, _, a.tocValue), g(_);
  }, [a.mdValue, a.tocValue]);
  const u = () => {
    const _ = {
      transform: {
        a: ({ children: b }) => /* @__PURE__ */ t.jsx(
          "a",
          {
            onClick: () => {
              const S = At(b[0]);
              Ee(".rmdcm5-container").stop(!0).animate({
                scrollTop: Ee(`#${S}`)[0].offsetTop - Ee(".rmdcm5-container")[0].offsetTop
              });
            },
            children: b
          }
        )
      }
    };
    return /* @__PURE__ */ t.jsx("div", { className: "toc-list", children: /* @__PURE__ */ t.jsx("div", { children: Nn(a.tocValue, _) }) });
  }, v = () => {
    x((_) => !_);
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(
      "div",
      {
        ref: f,
        style: { height: i },
        className: "rmdcm5-container",
        dangerouslySetInnerHTML: { __html: y },
        onScroll: () => s(),
        onMouseEnter: l
      }
    ),
    T && a.tocValue && /* @__PURE__ */ t.jsx(
      fe,
      {
        content: u(),
        transitionName: "popover-fade",
        placement: "leftTop",
        showArrow: !1,
        trigger: "hover",
        visible: m,
        onVisibleChange: v,
        overlayClassName: "toc-popover-wrap",
        destroyTooltipOnHide: !0,
        children: /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper toc-icon", style: { top: `${h + 10}px` }, children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "59591", children: /* @__PURE__ */ t.jsx(
          "path",
          {
            d: "M928 848H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32zM118.62 726.6l192-192a32 32 0 0 0 0-45.24l-192-192C98.54 277.32 64 291.56 64 320v384c0 28.62 34.66 42.6 54.62 22.6zM934.34 336H473.66A25.64 25.64 0 0 0 448 361.66v44.68A25.64 25.64 0 0 0 473.66 432h460.68A25.64 25.64 0 0 0 960 406.34v-44.68A25.64 25.64 0 0 0 934.34 336zM928 96H96A32 32 0 0 0 64 128v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32V128a32 32 0 0 0-32-32z m6.34 496H473.66A25.64 25.64 0 0 0 448 617.66v44.68A25.64 25.64 0 0 0 473.66 688h460.68A25.64 25.64 0 0 0 960 662.34v-44.68A25.64 25.64 0 0 0 934.34 592z",
            "p-id": "59592"
          }
        ) }) })
      }
    )
  ] });
}, jr = pe.forwardRef(_r), I = pe.createContext(null), Cr = () => {
  const { editorRef: e } = q(I), n = () => {
    e.current.undo();
  };
  return /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", onClick: n, children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "6863", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M56.97 56.97L161.3 161.3C251.05 71.534 375.03 16 511.998 16 785.32 16 1008.2 239.05 1008 512.37 1007.8 786.134 785.81 1008 512 1008c-127.852 0-244.404-48.374-332.356-127.816-10.226-9.236-10.706-25.122-0.964-34.866l39.476-39.476c8.996-8.996 23.506-9.57 33.002-1.104C320.426 866.492 411.79 904 512 904c216.642 0 392-175.324 392-392 0-216.642-175.324-392-392-392-108.326 0-206.314 43.846-277.228 114.772l108.256 108.258c15.12 15.12 4.412 40.97-16.97 40.97H40c-13.254 0-24-10.746-24-24V73.942c0-21.382 25.852-32.09 40.97-16.972z",
      "p-id": "6864"
    }
  ) }) });
}, kr = () => {
  const { editorRef: e } = q(I), n = () => {
    e.current.redo();
  };
  return /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", onClick: n, children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "68552", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M967.03 56.97L862.7 161.3C772.95 71.534 648.97 16 512.002 16 238.68 16 15.8 239.05 16 512.37 16.2 786.134 238.19 1008 512 1008c127.852 0 244.404-48.374 332.356-127.816 10.226-9.236 10.706-25.122 0.964-34.866l-39.476-39.476c-8.996-8.996-23.506-9.57-33.002-1.104C703.574 866.492 612.21 904 512 904c-216.642 0-392-175.324-392-392 0-216.642 175.324-392 392-392 108.326 0 206.314 43.846 277.228 114.772l-108.256 108.258c-15.12 15.12-4.412 40.97 16.97 40.97H984c13.254 0 24-10.746 24-24V73.942c0-21.382-25.852-32.09-40.97-16.972z",
      "p-id": "68553"
    }
  ) }) });
}, Tr = () => {
  const { wrapTextWith: e } = q(I), n = () => {
    e("**");
  };
  return /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", onClick: n, children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "6997", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M757.04 477.56A239.52 239.52 0 0 0 592 64H224a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h32v704H224a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h416a256 256 0 0 0 256-256c0-98.98-56.76-183.84-138.96-226.44zM384 160h176a144 144 0 0 1 0 288h-176z m224 704H384V544h224a160 160 0 0 1 0 320z",
      "p-id": "6998"
    }
  ) }) });
}, Sr = () => {
  const { wrapTextWith: e } = q(I), n = () => {
    e("~~");
  };
  return /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", onClick: n, children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "69356", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M300.78 416h226.34l-92.62-46.32a91.3 91.3 0 0 1 0-163.36A135.86 135.86 0 0 1 495.12 192H620a91.18 91.18 0 0 1 72.98 36.5l30.18 40.26a32 32 0 0 0 44.8 6.42l51.24-38.38a32 32 0 0 0 6.42-44.8L795.4 151.68A218.88 218.88 0 0 0 620.2 64h-125.08a264.98 264.98 0 0 0-117.88 27.82c-80.7 40.34-128.38 124.62-120.36 216 3.52 40.18 20.04 76.74 43.9 108.18zM992 480H32a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h960a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m-185 160h-182.14l28.64 14.32a91.3 91.3 0 0 1 0 163.36 135.86 135.86 0 0 1-60.62 14.32H468a91.18 91.18 0 0 1-72.98-36.5l-30.18-40.26a32 32 0 0 0-44.8-6.42L268.8 787.2a32 32 0 0 0-6.42 44.8l30.22 40.34A218.88 218.88 0 0 0 467.8 960h125.08a264.84 264.84 0 0 0 117.86-27.82c80.72-40.34 128.4-124.62 120.38-216-2.38-27.38-11.78-52.54-24.12-76.18z",
      "p-id": "69357"
    }
  ) }) });
}, Er = () => {
  const { wrapTextWith: e } = q(I), n = () => {
    e("*");
  };
  return /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", onClick: n, children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "67877", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M832 96v32a32 32 0 0 1-32 32h-134l-176 704h118a32 32 0 0 1 32 32v32a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32v-32a32 32 0 0 1 32-32h134l176-704h-118a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h384a32 32 0 0 1 32 32z",
      "p-id": "67878"
    }
  ) }) });
}, Rr = () => {
  const { switchTextCase: e } = q(I), n = () => {
    e("upperCase");
  };
  return /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", onClick: n, children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "69758", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M928 864h-66.64l-270-778.48A32 32 0 0 0 561.1 64h-98.2a32 32 0 0 0-30.24 21.52L162.64 864H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32h-70.88l66.62-192h328.52l66.62 192H672a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32zM381.06 576L512 198.62 642.94 576z",
      "p-id": "69759"
    }
  ) }) });
}, Or = () => {
  const { switchTextCase: e } = q(I), n = () => {
    e("lowerCase");
  };
  return /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", onClick: n, children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "68145", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M216.64 803.2c64.32 0 122.88-33.6 172.8-74.88h2.88l7.68 62.4h72v-320.64c0-128.64-53.76-214.08-180.48-214.08-83.52 0-157.44 37.44-205.44 68.16l34.56 60.48c41.28-27.84 96-55.68 156.48-55.68 85.44 0 107.52 64.32 107.52 131.52C162.88 485.44 64 542.08 64 655.36c0 94.08 65.28 147.84 152.64 147.84z m24.96-70.08c-51.84 0-92.16-24-92.16-83.52 0-67.2 59.52-110.4 235.2-131.52v145.92c-50.88 45.12-92.16 69.12-143.04 69.12z m452.48 70.08c64.32 0 122.88-33.6 172.8-74.88h2.88l7.68 62.4h72v-320.64c0-128.64-53.76-214.08-180.48-214.08-83.52 0-157.44 37.44-205.44 68.16l34.56 60.48c41.28-27.84 96-55.68 156.48-55.68 85.44 0 107.52 64.32 107.52 131.52-221.76 24.96-320.64 81.6-320.64 194.88 0 94.08 65.28 147.84 152.64 147.84z m24.96-70.08c-51.84 0-92.16-24-92.16-83.52 0-67.2 59.52-110.4 235.2-131.52v145.92c-50.88 45.12-92.16 69.12-143.04 69.12z",
      "p-id": "68146"
    }
  ) }) });
}, Ar = () => {
  const { switchTextCase: e } = q(I), n = () => {
    e("humpCase");
  };
  return /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", onClick: n, children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1280 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "67341", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M1248.06176 320h-32a32 32 0 0 0-32 32v25.64C1140.06176 342.14 1084.94176 320 1024.06176 320a256 256 0 0 0-256 256v64a256 256 0 0 0 256 256c60.88 0 116-22.14 160-57.64V864a32 32 0 0 0 32 32h32a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32z m-64 320a160 160 0 0 1-320 0v-64a160 160 0 0 1 320 0zM425.06176 148.7a32 32 0 0 0-30-20.7h-86.06a32 32 0 0 0-30 20.7L2.06176 852.7A32 32 0 0 0 32.06176 896h34.28a32 32 0 0 0 30-20.7L176.50176 672h351.12l80.22 203.3a32 32 0 0 0 30 20.7H672.06176a32 32 0 0 0 30-43.3zM214.38176 576L352.06176 227.16 489.74176 576z",
      "p-id": "67342"
    }
  ) }) });
}, Pr = () => {
  const { insertText: e } = q(I), n = () => {
    e("> ", !1, !0);
  };
  return /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", onClick: n, children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1152 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "68418", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M1008 448h-112v-16c0-44.2 35.8-80 80-80h16c53 0 96-43 96-96V160c0-53-43-96-96-96h-16c-203 0-368 165-368 368v384c0 79.4 64.6 144 144 144h256c79.4 0 144-64.6 144-144V592c0-79.4-64.6-144-144-144z m48 368c0 26.4-21.6 48-48 48H752c-26.4 0-48-21.6-48-48V432c0-150 122-272 272-272h16v96h-16c-97 0-176 79-176 176v112h208c26.4 0 48 21.6 48 48v224zM400 448h-112v-16c0-44.2 35.8-80 80-80h16c53 0 96-43 96-96V160c0-53-43-96-96-96h-16C165 64 0 229 0 432v384c0 79.4 64.6 144 144 144h256c79.4 0 144-64.6 144-144V592c0-79.4-64.6-144-144-144z m48 368c0 26.4-21.6 48-48 48H144c-26.4 0-48-21.6-48-48V432c0-150 122-272 272-272h16v96h-16c-97 0-176 79-176 176v112h208c26.4 0 48 21.6 48 48v224z",
      "p-id": "68419"
    }
  ) }) });
}, Hr = (e) => {
  const { name: n } = e, { insertText: a } = q(I), i = {
    h1: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1152 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "8203", children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M608 192h-197.88A26.12 26.12 0 0 0 384 218.12v43.76A26.12 26.12 0 0 0 410.12 288H464v176H176v-176h53.88A26.12 26.12 0 0 0 256 261.88V224a32 32 0 0 0-32-32H32a32 32 0 0 0-32 32v37.88A26.12 26.12 0 0 0 26.12 288H80v448H26.12A26.12 26.12 0 0 0 0 762.12V800a32 32 0 0 0 32 32h197.88A26.12 26.12 0 0 0 256 805.88v-43.76A26.12 26.12 0 0 0 229.88 736H176v-176h288v176h-53.88A26.12 26.12 0 0 0 384 762.12V800a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-37.88A26.12 26.12 0 0 0 613.88 736H560V288h53.88A26.12 26.12 0 0 0 640 261.88V224a32 32 0 0 0-32-32z m512 544h-112V240a48 48 0 0 0-48-48h-48a48 48 0 0 0-42.88 26.52l-48 96A48 48 0 0 0 864 384h48v352h-112a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h320a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z",
        "p-id": "8204"
      }
    ) }),
    h2: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1152 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "8337", children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M608 192h-197.88A26.12 26.12 0 0 0 384 218.12v43.76A26.12 26.12 0 0 0 410.12 288H464v176H176v-176h53.88A26.12 26.12 0 0 0 256 261.88V224a32 32 0 0 0-32-32H32a32 32 0 0 0-32 32v37.88A26.12 26.12 0 0 0 26.12 288H80v448H26.12A26.12 26.12 0 0 0 0 762.12V800a32 32 0 0 0 32 32h197.88A26.12 26.12 0 0 0 256 805.88v-43.76A26.12 26.12 0 0 0 229.88 736H176v-176h288v176h-53.88A26.12 26.12 0 0 0 384 762.12V800a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-37.88A26.12 26.12 0 0 0 613.88 736H560V288h53.88A26.12 26.12 0 0 0 640 261.88V224a32 32 0 0 0-32-32z m488.28 544.26H821.64c17.04-120.7 292-158.56 292-358.62C1113.6 268.34 1030 192 910.1 192a229.42 229.42 0 0 0-195.84 110.1 23.62 23.62 0 0 0 7.16 31.9L764 362.46a23.78 23.78 0 0 0 32.54-6c26-36.46 63.16-62.7 107.44-62.7 59.14 0 98.86 36.16 98.86 90 0 134-298.9 168-298.9 390.98a274.28 274.28 0 0 0 2.78 36.84 24.36 24.36 0 0 0 23.6 20.42h366A23.7 23.7 0 0 0 1120 808.36V760a23.7 23.7 0 0 0-23.72-23.74z",
        "p-id": "8338"
      }
    ) }),
    h3: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1152 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "8471", children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M960.14 439.56l150.78-171.76a23.64 23.64 0 0 0 5.86-15.52v-36.64A23.78 23.78 0 0 0 1092.88 192H759.74a23.76 23.76 0 0 0-23.88 23.64V264a23.76 23.76 0 0 0 23.88 23.66s204.88-0.22 212-0.5c-5.54 5.76-148.24 171.16-148.24 171.16a23.34 23.34 0 0 0-3.72 24.76l13.42 30.6a25.88 25.88 0 0 0 21.86 14.32h34.16c97.22 0 131.7 54.46 131.7 101.12 0 57.14-49.16 100.26-114.34 100.26-48 0-93.76-20.92-130.58-53.78a24 24 0 0 0-35.52 3.62l-32 44a23.46 23.46 0 0 0 2.8 30.82c49.2 46.68 121.24 78 198.76 78 128.4 0 219.72-92.44 219.72-206.34 0.02-102.2-73.46-168.34-169.62-186.14zM608 192h-197.88A26.12 26.12 0 0 0 384 218.12v43.76A26.12 26.12 0 0 0 410.12 288H464v176H176v-176h53.88A26.12 26.12 0 0 0 256 261.88V224a32 32 0 0 0-32-32H32a32 32 0 0 0-32 32v37.88A26.12 26.12 0 0 0 26.12 288H80v448H26.12A26.12 26.12 0 0 0 0 762.12V800a32 32 0 0 0 32 32h197.88A26.12 26.12 0 0 0 256 805.88v-43.76A26.12 26.12 0 0 0 229.88 736H176v-176h288v176h-53.88A26.12 26.12 0 0 0 384 762.12V800a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-37.88A26.12 26.12 0 0 0 613.88 736H560V288h53.88A26.12 26.12 0 0 0 640 261.88V224a32 32 0 0 0-32-32z",
        "p-id": "8472"
      }
    ) }),
    h4: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1152 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "8605", children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M608 192h-197.88A26.12 26.12 0 0 0 384 218.12v43.76A26.12 26.12 0 0 0 410.12 288H464v176H176v-176h53.88A26.12 26.12 0 0 0 256 261.88V224a32 32 0 0 0-32-32H32a32 32 0 0 0-32 32v37.88A26.12 26.12 0 0 0 26.12 288H80v448H26.12A26.12 26.12 0 0 0 0 762.12V800a32 32 0 0 0 32 32h197.88A26.12 26.12 0 0 0 256 805.88v-43.76A26.12 26.12 0 0 0 229.88 736H176v-176h288v176h-53.88A26.12 26.12 0 0 0 384 762.12V800a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-37.88A26.12 26.12 0 0 0 613.88 736H560V288h53.88A26.12 26.12 0 0 0 640 261.88V224a32 32 0 0 0-32-32z m512 272h-32V224a32 32 0 0 0-32-32h-32a32 32 0 0 0-32 32v240h-192V224a32 32 0 0 0-32-32h-32a32 32 0 0 0-32 32v272a64 64 0 0 0 64 64h224v240a32 32 0 0 0 32 32h32a32 32 0 0 0 32-32V560h32a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z",
        "p-id": "8606"
      }
    ) })
  }, s = () => {
    a(`${"#".repeat(Number(n.slice(1)))} `, !1, !0);
  };
  return /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", onClick: s, children: i[n] });
}, Vr = () => {
  const { insertText: e } = q(I), n = () => {
    e(`-----
`, !0, !1, 3);
  };
  return /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", onClick: n, children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1280 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "7667", children: /* @__PURE__ */ t.jsx("path", { d: "M1280 495v34a32 32 0 0 1-32 32H32a32 32 0 0 1-32-32v-34a32 32 0 0 1 32-32h1216a32 32 0 0 1 32 32z", "p-id": "7668" }) }) });
}, Nr = () => {
  const { insertText: e } = q(I), n = () => {
    e(`- 
- 
- `, !0, !1, 2);
  };
  return /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", onClick: n, children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "69624", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M96 736a96 96 0 1 0 96 96 96 96 0 0 0-96-96z m0-320a96 96 0 1 0 96 96 96 96 0 0 0-96-96z m0-320a96 96 0 1 0 96 96 96 96 0 0 0-96-96z m896 48H352a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32V176a32 32 0 0 0-32-32z m0 320H352a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m0 320H352a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z",
      "p-id": "69625"
    }
  ) }) });
}, Mr = () => {
  const { insertText: e } = q(I), n = () => {
    e(`1. 
2. 
3. `, !0, !1, 2);
  };
  return /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", onClick: n, children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "68284", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M123.54 802l35-40.3a39.84 39.84 0 0 0 10.14-28.38v-6.62C168.68 712 161 704 146 704H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h45.68a309.64 309.64 0 0 0-22 24.62l-11.22 14c-8 10.14-10.5 20.26-5.6 29.76l2.1 3.86c6 11.52 12.6 15.76 24.5 15.76h9.46c20.66 0 31.88 4.88 31.88 18.18 0 9.44-8.4 16.44-28.72 16.44a83.08 83.08 0 0 1-30.94-6.24c-12.98-7.76-23.48-7-31.2 6.24l-11.18 18.62c-7.46 12.26-6.4 23.44 5.24 31.88 15.42 9.38 40.78 18.88 74 18.88 68.32 0 97-45.5 97-88.24-0.06-28.76-18.24-59.52-57.46-69.76zM992 784H352a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m0-640H352a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32V176a32 32 0 0 0-32-32z m0 320H352a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32zM32 320h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H128V80a16 16 0 0 0-16-16H64a16 16 0 0 0-14.28 8.84l-16 32A16 16 0 0 0 48 128h16v128H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16z m-7.8 320H160a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H82.66c6.56-20.58 96.66-37.36 96.66-112.88 0-58.12-50-79.12-88.94-79.12-42.72 0-67.6 20-80.9 37.5-8.76 11.18-6 21.68 5.58 30.74l17.16 13.76c11.22 9.12 22 4.94 32.26-4.88a26.8 26.8 0 0 1 18.9-7.68c6.66 0 18.56 3.12 18.56 17.5C102 496.38 0 514.62 0 609.18v8C0 632 10.16 640 24.2 640z",
      "p-id": "68285"
    }
  ) }) });
};
const Lr = (e) => {
  const { rowIndex: n, colIndex: a, onChange: i, isCovered: s, onClick: l } = e, o = Ve("squal", { isCovered: s });
  return /* @__PURE__ */ t.jsx("div", { className: o, onMouseEnter: () => i(n, a), onClick: () => l(n, a) });
}, zr = (e) => {
  const { row: n = 5, col: a = 5, onChange: i, onClick: s } = e, [l, o] = B([0, 0]), c = (y, g) => {
    const [m, x] = l;
    return y + 1 <= m && g + 1 <= x;
  }, h = (y, g) => {
    o([y, g]), i && i(y, g);
  }, T = (y, g) => {
    s && s(y, g);
  };
  return /* @__PURE__ */ t.jsx("div", { children: Array.from({ length: n }, (y, g) => g).map((y) => /* @__PURE__ */ t.jsx("div", { className: "horizontal", children: Array.from({ length: a }, (g, m) => m).map((g) => /* @__PURE__ */ t.jsx(
    Lr,
    {
      isCovered: c(y, g),
      rowIndex: y + 1,
      colIndex: g + 1,
      onChange: h,
      onClick: T
    },
    `${y}-${g}`
  )) }, y)) });
}, $r = () => {
  const { insertText: e } = q(I), [n, a] = B(!1), [i, s] = B([0, 0]), [l, o] = B("left"), c = (x, f) => {
    s([x, f]);
  }, h = (x, f) => {
    a(!1);
    let u = "";
    const v = "---", _ = {
      justify: v,
      left: ":" + v,
      center: ":" + v + ":",
      right: v + ":"
    };
    if (x > 1 && f > 0)
      for (var b = 0, S = x; b < S; b++) {
        for (var j = [], V = [], d = 0, E = f; d < E; d++)
          b === 1 && V.push(_[l]), j.push(" ");
        b === 1 && (u += "| " + V.join(" | ") + ` |
`), u += "| " + j.join(f === 1 ? "" : " | ") + ` |
`;
      }
    else
      return;
    e(u, !0, !1, 2);
  }, T = (x) => {
    o(x.target.value);
  }, y = {
    justify: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "6491", children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M928 848H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m0-256H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m0-256H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m0-256H96A32 32 0 0 0 64 112v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32V112a32 32 0 0 0-32-32z",
        "p-id": "6492"
      }
    ) }),
    left: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "6625", children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M89.66 688h524.68A25.64 25.64 0 0 0 640 662.34v-44.68A25.64 25.64 0 0 0 614.34 592H89.66A25.64 25.64 0 0 0 64 617.66v44.68A25.64 25.64 0 0 0 89.66 688z m0-512h524.68A25.64 25.64 0 0 0 640 150.34V105.66A25.64 25.64 0 0 0 614.34 80H89.66A25.64 25.64 0 0 0 64 105.66v44.68A25.64 25.64 0 0 0 89.66 176zM928 336H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m0 512H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z",
        "p-id": "6626"
      }
    ) }),
    center: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "6759", children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M280.2 176h463.62A24.18 24.18 0 0 0 768 151.8V104.18A24.18 24.18 0 0 0 743.82 80H280.2A24.18 24.18 0 0 0 256 104.18V151.8A24.2 24.2 0 0 0 280.2 176zM928 848H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m0-512H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m-184.18 352A24.18 24.18 0 0 0 768 663.8v-47.62A24.18 24.18 0 0 0 743.82 592H280.2A24.18 24.18 0 0 0 256 616.18v47.62a24.2 24.2 0 0 0 24.2 24.2z",
        "p-id": "6760"
      }
    ) }),
    right: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "6893", children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M96 432h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32z m832 416H96a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z m6.34-768H409.66A25.64 25.64 0 0 0 384 105.66v44.68A25.64 25.64 0 0 0 409.66 176h524.68A25.64 25.64 0 0 0 960 150.34V105.66A25.64 25.64 0 0 0 934.34 80z m0 512H409.66A25.64 25.64 0 0 0 384 617.66v44.68A25.64 25.64 0 0 0 409.66 688h524.68A25.64 25.64 0 0 0 960 662.34v-44.68A25.64 25.64 0 0 0 934.34 592z",
        "p-id": "6894"
      }
    ) })
  }, g = /* @__PURE__ */ t.jsxs("div", { style: { color: "#666" }, children: [
    /* @__PURE__ */ t.jsxs("div", { style: { display: "flex", alignItems: "center", marginBottom: "5px" }, children: [
      /* @__PURE__ */ t.jsx("div", { children: "对齐方式：" }),
      ["justify", "left", "center", "right"].map((x) => {
        const f = x;
        return /* @__PURE__ */ t.jsxs("div", { style: { display: "flex", margin: "0 5px" }, children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "radio",
              name: "type",
              value: x,
              id: x,
              defaultChecked: x === l,
              style: { marginRight: "3px", cursor: "pointer" },
              onChange: (u) => T(u)
            }
          ),
          /* @__PURE__ */ t.jsx("label", { htmlFor: x, children: y[f] })
        ] }, x);
      })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { children: [
      /* @__PURE__ */ t.jsx("div", { style: { marginBottom: "5px" }, children: /* @__PURE__ */ t.jsx("span", { children: `单元格数：${i[0]} × ${i[1]}` }) }),
      /* @__PURE__ */ t.jsx(zr, { row: 6, col: 11, onChange: c, onClick: h })
    ] })
  ] }), m = (x) => {
    a(x);
  };
  return /* @__PURE__ */ t.jsx(
    fe,
    {
      content: g,
      transitionName: "popover-fade",
      placement: "bottom",
      trigger: "hover",
      visible: n,
      onVisibleChange: m,
      overlayClassName: "profile-popover-wrap",
      children: /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "68954", children: /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M928 64H96C42.98 64 0 106.98 0 160v704c0 53.02 42.98 96 96 96h832c53.02 0 96-42.98 96-96V160c0-53.02-42.98-96-96-96zM464 864H108a12 12 0 0 1-12-12V592h368v272z m0-368H96V224h368v272z m452 368H560V592h368v260a12 12 0 0 1-12 12z m12-368H560V224h368v272z",
          "p-id": "68955"
        }
      ) }) })
    }
  );
}, Dr = () => {
  const { wrapTextWith: e } = q(I), n = () => {
    e("`");
  };
  return /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", onClick: n, children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1152 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "67743", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M469.691369 1023.383271L392.092796 1000.783687c-8.399846-2.399956-13.399754-11.39979-10.999798-19.799636L662.687822 11.601867c2.399956-8.399846 11.39979-13.399754 19.799636-10.999798L760.086032 23.201654c8.399846 2.399956 13.399754 11.39979 10.999798 19.799636L489.491006 1012.383473c-2.399956 8.599842-11.199794 13.399754-19.799637 10.999798z m-166.396941-242.195548l54.399-57.998934c6.199886-6.599879 5.599897-16.999688-0.999982-22.999578L144.497346 511.99267l212.1961-188.196541c6.799875-5.99989 7.199868-16.399699 0.999982-22.999577l-54.399-57.998934c-5.99989-6.399882-16.199702-6.799875-22.599585-0.799986L5.099908 500.392883c-6.799875 6.399882-6.799875 16.999688 0 23.39957L280.694843 781.987708c6.399882 5.99989 16.399699 5.599897 22.599585-0.799985z m568.189557 0.799985l275.394938-258.195255c6.799875-6.399882 6.799875-16.999688 0-23.39957L871.483985 241.997632c-6.399882-5.99989-16.599695-5.799893-22.599585 0.799986l-54.399 57.998934c-6.199886 6.599879-5.599897 16.999688 0.999982 22.999577L1007.681482 511.99267l-212.1961 188.196541c-6.799875 5.99989-7.199868 16.399699-0.999982 22.999578l54.399 57.998934c6.199886 6.399882 16.199702 6.799875 22.599585 0.799985z",
      "p-id": "67744"
    }
  ) }) });
};
const Ir = () => {
  const { insertText: e } = q(I), [n, a] = B(!1), [i, s] = B("http://"), [l, o] = B(""), c = () => {
    a(!1);
    const y = `[${l}](${i} "${l || "title"}")`;
    e(y, !1, !1);
  }, h = /* @__PURE__ */ t.jsxs("div", { style: { color: "#666" }, children: [
    /* @__PURE__ */ t.jsxs("div", { style: { marginBottom: "10px" }, children: [
      /* @__PURE__ */ t.jsx("span", { children: "链接地址：" }),
      /* @__PURE__ */ t.jsx("input", { type: "text", className: "link-input", defaultValue: "http://", onChange: (y) => s(y.target.value) })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { children: [
      /* @__PURE__ */ t.jsx("span", { children: "链接标题：" }),
      /* @__PURE__ */ t.jsx("input", { type: "text", className: "link-input", onChange: (y) => o(y.target.value) })
    ] }),
    /* @__PURE__ */ t.jsx("div", { style: { textAlign: "right", marginTop: "10px" }, children: /* @__PURE__ */ t.jsx("button", { className: "button", onClick: c, children: "确定" }) })
  ] }), T = (y) => {
    a(y);
  };
  return /* @__PURE__ */ t.jsx(
    fe,
    {
      content: h,
      transitionName: "popover-fade",
      placement: "bottom",
      trigger: "click",
      visible: n,
      onVisibleChange: T,
      overlayClassName: "profile-popover-wrap",
      destroyTooltipOnHide: !0,
      children: /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "68011", children: /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M628.443079 395.560181c102.18185 102.18185 108.753841 264.573612 19.499972 374.319451-12.483982 15.459977-5.567992 7.729989-169.879751 172.039748-109.39184 109.39184-286.53158 109.48984-395.97942 0-109.42184-109.37984-109.46784-286.50958 0-395.97942 65.545904-65.545904 103.669848-103.797848 126.817814-126.913814 14.925978-14.903978 40.66194-4.707993 40.97194 16.383976a346.619492 346.619492 0 0 0 9.491986 75.655889c1.931997 8.057988-0.543999 16.537976-6.403991 22.395968L161.263764 625.139844c-65.509904 65.549904-65.773904 171.783748 0 237.599652 65.549904 65.509904 171.783748 65.773904 237.599652 0l150.379779-150.399779c65.435904-65.449904 65.553904-172.025748 0-237.579652a167.443755 167.443755 0 0 0-45.627933-32.457953c-9.245986-4.465993-14.363979-14.499979-13.12198-24.691964 2.711996-22.243967 12.591982-43.769936 29.629956-60.809911l8.749987-8.749987c7.249989-7.251989 18.353973-9.187987 27.51996-4.587993 25.997962 13.047981 50.373926 30.421955 72.049894 52.097924zM941.91462 82.08064c-109.44784-109.48984-286.58758-109.39184-395.97942 0-164.311759 164.311759-157.395769 156.579771-169.879751 172.039748-89.253869 109.745839-82.681879 272.137601 19.499972 374.319451 21.675968 21.675968 46.051933 39.049943 72.049894 52.097924 9.163987 4.599993 20.26797 2.661996 27.51996-4.587993l8.749987-8.749987c17.039975-17.037975 26.917961-38.565944 29.629956-60.809911 1.241998-10.191985-3.875994-20.22597-13.12198-24.691964a167.411755 167.411755 0 0 1-45.627933-32.457953c-65.553904-65.553904-65.435904-172.129748 0-237.579652l150.379779-150.399779c65.815904-65.773904 172.049748-65.509904 237.599652 0 65.773904 65.815904 65.509904 172.049748 0 237.599652l-91.695865 91.679865c-5.859991 5.857991-8.335988 14.337979-6.403991 22.395968a346.619492 346.619492 0 0 1 9.491986 75.655889c0.31 21.091969 26.045962 31.287954 40.97194 16.383976 23.147966-23.115966 61.27191-61.36791 126.817814-126.913814 109.46584-109.46984 109.41984-286.59958-0.002-395.98142z",
          "p-id": "68012"
        }
      ) }) })
    }
  );
}, Br = () => {
  const { wrapTextWith: e } = q(I), n = () => {
    e("~");
  };
  return /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", onClick: n, children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "68686", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M672 128h-104.56a32 32 0 0 0-26.62 14.24L352 425.46 163.18 142.24A32 32 0 0 0 136.56 128H32A32 32 0 0 0 0 160v32a32 32 0 0 0 32 32h70.32l192 288-192 288H32a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h104.56a32 32 0 0 0 26.62-14.24L352 598.54l188.82 283.22a32 32 0 0 0 26.62 14.24H672a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32h-70.32l-192-288 192-288H672a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32z m320 800h-48V608a32 32 0 0 0-32-32h-64a32 32 0 0 0-28.58 17.66l-32 64A32 32 0 0 0 816 704h32v224h-48a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z",
      "p-id": "68687"
    }
  ) }) });
}, qr = () => {
  const { wrapTextWith: e } = q(I), n = () => {
    e("^");
  };
  return /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", onClick: n, children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "68820", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M672 128h-104.56a32 32 0 0 0-26.62 14.24L352 425.46 163.18 142.24A32 32 0 0 0 136.56 128H32A32 32 0 0 0 0 160v32a32 32 0 0 0 32 32h70.32l192 288-192 288H32a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h104.56a32 32 0 0 0 26.62-14.24L352 598.54l188.82 283.22a32 32 0 0 0 26.62 14.24H672a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32h-70.32l-192-288 192-288H672a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32z m320 224h-48V32a32 32 0 0 0-32-32h-64a32 32 0 0 0-28.58 17.66l-32 64A32 32 0 0 0 816 128h32v224h-48a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z",
      "p-id": "68821"
    }
  ) }) });
}, Wr = "😀", Fr = "😃", Ur = "😄", Yr = "😁", Kr = "😆", Jr = "😆", Gr = "😅", Qr = "😂", Xr = "😉", Zr = "😊", ea = "😇", ta = "😍", na = "😘", ra = "😗", aa = "😚", ia = "😙", oa = "😋", sa = "😛", la = "😜", ca = "😝", pa = "😐", ua = "😑", da = "😶", ma = "😏", fa = "😒", ha = "😌", va = "😔", ga = "😪", xa = "😴", wa = "😷", ya = "😵", ba = "😎", _a = "😕", ja = "😟", Ca = "😮", ka = "😯", Ta = "😲", Sa = "😳", Ea = "😦", Ra = "😧", Oa = "😨", Aa = "😰", Pa = "😥", Ha = "😢", Va = "😭", Na = "😱", Ma = "😖", La = "😣", za = "😞", $a = "😓", Da = "😩", Ia = "😫", Ba = "😡", qa = "😡", Wa = "😠", Fa = "😈", Ua = "😺", Ya = "😸", Ka = "😹", Ja = "😻", Ga = "😼", Qa = "😽", Xa = "🙀", Za = "😿", ei = "😾", ti = "❤️", ni = "✋", ri = "✋", ai = "✌️", ii = "☝️", oi = "✊", si = "✊", li = "🐵", ci = "🐱", pi = "🐮", ui = "🐭", di = "☕", mi = "♨️", fi = "⚓", hi = "✈️", vi = "⌛", gi = "⌚", xi = "☀️", wi = "⭐", yi = "☁️", bi = "☔", _i = "⚡", ji = "❄️", Ci = "✨", ki = "🃏", Ti = "🀄", Si = "☎️", Ei = "☎️", Ri = "✉️", Oi = "✏️", Ai = "✒️", Pi = "✂️", Hi = "♿", Vi = "⚠️", Ni = "♈", Mi = "♉", Li = "♊", zi = "♋", $i = "♌", Di = "♍", Ii = "♎", Bi = "♏", qi = "♐", Wi = "♑", Fi = "♒", Ui = "♓", Yi = "✖️", Ki = "➕", Ji = "➖", Gi = "➗", Qi = "‼️", Xi = "⁉️", Zi = "❓", eo = "❔", to = "❕", no = "❗", ro = "❗", ao = "〰️", io = "♻️", oo = "✅", so = "☑️", lo = "✔️", co = "❌", po = "❎", uo = "➰", mo = "➿", fo = "〽️", ho = "✳️", vo = "✴️", go = "❇️", xo = "🌸", wo = "💮", yo = "🌲", bo = "🌳", _o = "🌴", jo = "🌵", Co = "🌾", ko = "🌿", To = "☘️", So = "🍀", Eo = "🍁", Ro = "🍂", Oo = "🍃", Ao = "🍇", Po = "🍈", Ho = "🍉", Vo = "🍊", No = "🍊", Mo = "🍊", Lo = "🍋", zo = "🍌", $o = "🍍", Do = "🥭", Io = "🍎", Bo = "🍏", Mt = {
  grinning: Wr,
  smiley: Fr,
  smile: Ur,
  grin: Yr,
  laughing: Kr,
  satisfied: Jr,
  sweat_smile: Gr,
  joy: Qr,
  wink: Xr,
  blush: Zr,
  innocent: ea,
  heart_eyes: ta,
  kissing_heart: na,
  kissing: ra,
  kissing_closed_eyes: aa,
  kissing_smiling_eyes: ia,
  yum: oa,
  stuck_out_tongue: sa,
  stuck_out_tongue_winking_eye: la,
  stuck_out_tongue_closed_eyes: ca,
  neutral_face: pa,
  expressionless: ua,
  no_mouth: da,
  smirk: ma,
  unamused: fa,
  relieved: ha,
  pensive: va,
  sleepy: ga,
  sleeping: xa,
  mask: wa,
  dizzy_face: ya,
  sunglasses: ba,
  confused: _a,
  worried: ja,
  open_mouth: Ca,
  hushed: ka,
  astonished: Ta,
  flushed: Sa,
  frowning: Ea,
  anguished: Ra,
  fearful: Oa,
  cold_sweat: Aa,
  disappointed_relieved: Pa,
  cry: Ha,
  sob: Va,
  scream: Na,
  confounded: Ma,
  persevere: La,
  disappointed: za,
  sweat: $a,
  weary: Da,
  tired_face: Ia,
  rage: Ba,
  pout: qa,
  angry: Wa,
  smiling_imp: Fa,
  smiley_cat: Ua,
  smile_cat: Ya,
  joy_cat: Ka,
  heart_eyes_cat: Ja,
  smirk_cat: Ga,
  kissing_cat: Qa,
  scream_cat: Xa,
  crying_cat_face: Za,
  pouting_cat: ei,
  heart: ti,
  hand: ni,
  raised_hand: ri,
  v: ai,
  point_up: ii,
  fist_raised: oi,
  fist: si,
  monkey_face: li,
  cat: ci,
  cow: pi,
  mouse: ui,
  coffee: di,
  hotsprings: mi,
  anchor: fi,
  airplane: hi,
  hourglass: vi,
  watch: gi,
  sunny: xi,
  star: wi,
  cloud: yi,
  umbrella: bi,
  zap: _i,
  snowflake: ji,
  sparkles: Ci,
  black_joker: ki,
  mahjong: Ti,
  phone: Si,
  telephone: Ei,
  envelope: Ri,
  pencil2: Oi,
  black_nib: Ai,
  scissors: Pi,
  wheelchair: Hi,
  warning: Vi,
  aries: Ni,
  taurus: Mi,
  gemini: Li,
  cancer: zi,
  leo: $i,
  virgo: Di,
  libra: Ii,
  scorpius: Bi,
  sagittarius: qi,
  capricorn: Wi,
  aquarius: Fi,
  pisces: Ui,
  heavy_multiplication_x: Yi,
  heavy_plus_sign: Ki,
  heavy_minus_sign: Ji,
  heavy_division_sign: Gi,
  bangbang: Qi,
  interrobang: Xi,
  question: Zi,
  grey_question: eo,
  grey_exclamation: to,
  exclamation: no,
  heavy_exclamation_mark: ro,
  wavy_dash: ao,
  recycle: io,
  white_check_mark: oo,
  ballot_box_with_check: so,
  heavy_check_mark: lo,
  x: co,
  negative_squared_cross_mark: po,
  curly_loop: uo,
  loop: mo,
  part_alternation_mark: fo,
  eight_spoked_asterisk: ho,
  eight_pointed_black_star: vo,
  sparkle: go,
  cherry_blossom: xo,
  white_flower: wo,
  evergreen_tree: yo,
  deciduous_tree: bo,
  palm_tree: _o,
  cactus: jo,
  ear_of_rice: Co,
  herb: ko,
  shamrock: To,
  four_leaf_clover: So,
  maple_leaf: Eo,
  fallen_leaf: Ro,
  leaves: Oo,
  grapes: Ao,
  melon: Po,
  watermelon: Ho,
  tangerine: Vo,
  orange: No,
  mandarin: Mo,
  lemon: Lo,
  banana: zo,
  pineapple: $o,
  mango: Do,
  apple: Io,
  green_apple: Bo
};
const qo = Mt, Wo = () => {
  const { insertText: e } = q(I), [n, a] = B(!1), i = (o) => {
    a(!1);
    const c = `:${o}:`;
    e(c, !1, !1);
  }, s = /* @__PURE__ */ t.jsx("div", { className: "emoji-container", children: Object.keys(Mt).map((o) => /* @__PURE__ */ t.jsx("div", { className: "emoji", onClick: () => i(o), children: qo[o] }, o)) }), l = (o) => {
    a(o);
  };
  return /* @__PURE__ */ t.jsx(
    fe,
    {
      content: s,
      transitionName: "popover-fade",
      placement: "bottom",
      trigger: "hover",
      visible: n,
      onVisibleChange: l,
      overlayClassName: "profile-popover-wrap",
      destroyTooltipOnHide: !0,
      children: /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "7801", children: /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M512 16C238 16 16 238 16 512s222 496 496 496 496-222 496-496S786 16 512 16z m282.8 778.8c-75.6 75.6-176 117.2-282.8 117.2s-207.2-41.6-282.8-117.2S112 618.8 112 512s41.6-207.2 117.2-282.8S405.2 112 512 112s207.2 41.6 282.8 117.2S912 405.2 912 512s-41.6 207.2-117.2 282.8zM672 448c35.4 0 64-28.6 64-64s-28.6-64-64-64-64 28.6-64 64 28.6 64 64 64z m-320 0c35.4 0 64-28.6 64-64s-28.6-64-64-64-64 28.6-64 64 28.6 64 64 64z m388.8 128H283.2c-16.4 0-29 14-27 30 15 118.4 117.8 210 242.2 210h27.2c124.4 0 227.2-91.6 242.2-210 2-16-10.6-30-27-30z",
          "p-id": "7802"
        }
      ) }) })
    }
  );
};
const Fo = () => {
  const { insertText: e, languages: n } = q(I), [a, i] = B(!1), s = (c) => {
    i(!1);
    const h = `\`\`\`${c}

\`\`\`
`;
    e(h, !0, !1, 3);
  }, l = /* @__PURE__ */ t.jsx("div", { children: n.map((c) => /* @__PURE__ */ t.jsx("div", { className: "lang-button", onClick: () => s(c), children: c }, c)) }), o = (c) => {
    i(c);
  };
  return /* @__PURE__ */ t.jsx(
    fe,
    {
      content: l,
      transitionName: "popover-fade",
      placement: "bottom",
      trigger: "hover",
      visible: a,
      onVisibleChange: o,
      overlayClassName: "profile-popover-wrap",
      destroyTooltipOnHide: !0,
      children: /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "7399", children: /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M427.741457 698.26362l-0.399922-0.399922-65.58719-57.788713 65.58719-57.788713c7.198594-6.39875 7.998438-17.596563 1.599687-24.795157l-0.399921-0.399922-34.793205-37.192736c-6.798672-7.198594-17.996485-7.398555-24.795157-0.799843l-115.377465 108.178871c-7.398555 6.998633-7.398555 18.796329 0 25.595001l115.377465 108.178871c3.199375 2.999414 7.598516 4.799063 11.997657 4.799063 4.799063 0 9.598125-1.999609 12.7975-5.598907l34.793205-37.192735c6.598711-6.998633 6.198789-18.196446-0.799844-24.795158z m439.914079-502.301894L699.888303 28.194493C681.891818 10.198008 657.496583 0 632.101543 0H223.981254C170.991603 0.199961 128 43.191564 128 96.181215v831.837531c0 52.98965 42.991603 95.981254 95.981254 95.981254h575.887522c52.98965 0 95.981254-42.991603 95.981253-95.981254V263.948448c0-25.39504-10.198008-49.990236-28.194493-67.986722zM639.90002 103.979691l152.170279 152.17028H639.90002zM799.868776 928.018746H223.981254V96.181215h319.937512v207.959383c0 26.594806 21.395821 47.990627 47.990627 47.990626h207.959383zM547.118141 428.116384c-9.398164-2.799453-18.99629 2.599492-21.795743 11.997656L415.943761 816.240578c-2.799453 9.398164 2.599492 19.196251 11.997657 21.795743l48.79047 14.197227c9.398164 2.799453 19.196251-2.799453 21.795743-11.997657L607.906268 463.909393c2.799453-9.398164-2.599492-19.196251-11.997656-21.795743z m48.990432 153.769966l0.399921 0.399922 65.58719 57.788713-65.58719 57.788713c-7.198594 6.39875-7.998438 17.596563-1.599687 24.795158l0.399922 0.399922 34.793204 37.192735c6.598711 6.998633 17.796524 7.398555 24.795157 0.799844l115.377466-108.178871c7.398555-6.998633 7.398555-18.796329 0-25.595001l-115.377466-108.178871c-6.998633-6.598711-18.196446-6.39875-24.795157 0.799843l-34.793204 37.192736c-6.598711 6.998633-6.198789 18.196446 0.799844 24.795157z",
          "p-id": "7400"
        }
      ) }) })
    }
  );
}, Uo = [
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
const Yo = Uo, Ko = () => {
  const { insertText: e } = q(I), [n, a] = B(!1), i = (o) => {
    a(!1), e(o, !1, !1);
  }, s = /* @__PURE__ */ t.jsx("div", { className: "html-container", children: Yo.map((o, c) => {
    const h = o.name.replace("&amp;", "&");
    return /* @__PURE__ */ t.jsx("div", { className: "html-entity", onClick: () => i(h), dangerouslySetInnerHTML: { __html: h } }, `${h}-${c}`);
  }) }), l = (o) => {
    a(o);
  };
  return /* @__PURE__ */ t.jsx(
    fe,
    {
      content: s,
      transitionName: "popover-fade",
      placement: "bottom",
      trigger: "hover",
      visible: n,
      onVisibleChange: l,
      overlayClassName: "profile-popover-wrap",
      destroyTooltipOnHide: !0,
      children: /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "67207", children: /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M512 16C238.066 16 16 238.066 16 512s222.066 496 496 496 496-222.066 496-496S785.934 16 512 16z m0 896c-221.064 0-400-178.902-400-400 0-221.062 178.902-400 400-400 221.064 0 400 178.902 400 400 0 221.064-178.902 400-400 400z m214.702-202.128c-19.228 19.424-91.06 82.792-208.13 82.792-164.86 0-280.968-122.85-280.968-283.134 0-158.304 120.55-278.802 279.524-278.802 111.062 0 177.476 53.24 195.186 69.558a23.93 23.93 0 0 1 3.872 30.644l-36.31 56.226c-7.682 11.9-23.932 14.564-34.998 5.842-17.19-13.552-63.628-45.076-123.416-45.076-96.606 0-155.832 70.66-155.832 160.164 0 83.178 53.776 167.384 156.554 167.384 65.314 0 113.686-38.078 131.452-54.45 10.54-9.714 27.192-8.078 35.64 3.476l39.73 54.34a23.894 23.894 0 0 1-2.304 31.036z",
          "p-id": "67208"
        }
      ) }) })
    }
  );
}, Jo = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], Go = () => {
  const { insertText: e } = q(I), n = () => {
    const a = `${mt().format("YYYY-MM-DD HH:mm:ss")} ${Jo[mt().day()]}`;
    e(a, !1, !1);
  };
  return /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", onClick: n, children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "7533", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M512 16C238 16 16 238 16 512s222 496 496 496 496-222 496-496S786 16 512 16z m0 896c-221 0-400-179-400-400S291 112 512 112s400 179 400 400-179 400-400 400z m123.6-208.8l-169.8-123.4c-6.2-4.6-9.8-11.8-9.8-19.4V232c0-13.2 10.8-24 24-24h64c13.2 0 24 10.8 24 24v283.4l133.6 97.2c10.8 7.8 13 22.8 5.2 33.6L669.2 698c-7.8 10.6-22.8 13-33.6 5.2z",
      "p-id": "7534"
    }
  ) }) });
}, Qo = () => {
  const { editorRef: e } = q(I), [n, a] = B(!0), i = () => {
    a((s) => !s);
  };
  return ce(() => {
    var s, l;
    n ? (s = e.current) == null || s.setOption("theme", "atom-dark") : (l = e.current) == null || l.setOption("theme", "atom-light");
  }, [n]), /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", onClick: i, children: n ? /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "69088", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M811.6 747.6c-2.8 0-5.6 0.6-8.6 1.8-46.4 21-94.6 30.8-141.6 30.8-151.8 0-293.2-101.6-332-258.6-29.2-118.4 8-242.8 97.4-326.6 13.4-12.6 4.2-35-14-35h-1.2c-26.6 1.6-53.2 5.4-79 11.6C98.8 228.2-44.6 462 12.6 694c48.6 197.4 226.8 330 423.2 330 34.2 0 69-4 103.6-12.4C670 980 774.8 892.2 830 776.6c6.8-14.2-4.6-29-18.4-29z m-294.8 170.6c-26.6 6.4-54 9.8-81 9.8-157 0-292.8-105.6-330-257-21.4-86.6-7.6-176.4 38.8-252.8 25.4-41.8 58.8-76.8 98.2-103.6-22.6 73.6-25.6 153-6.6 230 44.8 182 199.6 312.6 384.2 329.6-31.4 20.2-66.2 35-103.6 44z m400.6-555.6L864 256l-53.4 106.6L704 416l106.6 53.4L864 576l53.4-106.6L1024 416l-106.6-53.4zM608 192l32-64 64-32-64-32-32-64-32 64-64 32 64 32 32 64z",
      "p-id": "69089"
    }
  ) }) : /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "69222", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M988.4 443.8l-119.6-81 27.4-142c5.2-26.4-3.2-53.6-22.2-72.8-19.2-19-46.4-27.4-72.4-22.2l-141.8 27.4-80.8-119.8c-30.2-44.6-103.8-44.6-134 0l-80.8 119.8-141.6-27.4C196 120.8 169 129 150 148.2c-19 19.2-27.4 46.2-22.2 72.6l27.4 142-119.6 81C13.2 459 0 484 0 511s13.4 52 35.6 67l119.6 81-27.4 142c-5.2 26.4 3.2 53.6 22.2 72.6 19 19 45.8 27.4 72.6 22.2l141.6-27.4 80.8 119.8C460 1010.6 485.2 1024 512 1024s52-13.4 67-35.6l80.8-119.8 141.8 27.4c26.8 5.4 53.6-3.2 72.6-22.2 19-19 27.2-46.2 22.2-72.6l-27.4-142 119.6-81c22.2-15 35.6-40.2 35.6-67-0.2-27.2-13.4-52.2-35.8-67.4z m-225.8 171.2l35.2 182.4-182-35.2L512 916l-103.8-154-181.8 35.2 35.2-182.4-153.6-104 153.6-104-35.2-182.4 182 35.2L512 106l103.8 153.8 182-35.2-35.2 182.2 153.6 104-153.6 104.2zM512 304c-114.6 0-208 93.4-208 208s93.4 208 208 208 208-93.4 208-208-93.4-208-208-208z m0 320c-61.8 0-112-50.2-112-112s50.2-112 112-112 112 50.2 112 112-50.2 112-112 112z",
      "p-id": "69223"
    }
  ) }) });
}, Xo = () => {
  const { insertText: e } = q(I), n = () => {
    e(`- [ ] list1
- [x] list2
`, !0, !1, 2);
  };
  return /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", onClick: n, children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "7131", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M752 720H464c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16z m-464 112h64c17.6 0 32-14.4 32-32v-64c0-17.6-14.4-32-32-32h-64c-17.6 0-32 14.4-32 32v64c0 17.6 14.4 32 32 32z m0-512h64c17.6 0 32-14.4 32-32v-64c0-17.6-14.4-32-32-32h-64c-17.6 0-32 14.4-32 32v64c0 17.6 14.4 32 32 32z m176-16h288c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H464c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16zM896 0H128C92.6 0 64 28.6 64 64v896c0 35.4 28.6 64 64 64h768c35.4 0 64-28.6 64-64V64c0-35.4-28.6-64-64-64z m-32 928H160V96h704v832zM333.2 572.8c4.2 4.2 11 4.2 15.2 0l128.4-127.2c4.2-4.2 4.2-11 0-15.2l-25.2-25.4c-4.2-4.2-11-4.2-15.2 0l-95.2 94.4-41.2-41.8c-4.2-4.2-11-4.2-15.2 0l-25.4 25.2c-4.2 4.2-4.2 11 0 15.2l73.8 74.8zM752 464H538.8c-3.8 10-9.2 19.4-17 27L452.4 560H752c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16z",
      "p-id": "7132"
    }
  ) }) });
}, Zo = () => {
  const { editorRef: e } = q(I), n = () => {
    e.current.setValue("");
  };
  return /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", onClick: n, children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "7265", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M995.88 547.88a96 96 0 0 0 0-135.76l-320-320a96 96 0 0 0-135.76 0l-512 512a96 96 0 0 0 0 135.76l192 192A96 96 0 0 0 288 960h712a24 24 0 0 0 24-24v-48a24 24 0 0 0-24-24H679.76l316.12-316.12zM608 160l320 320-206 206-320-320zM288 864l-192-192 238-238 320 320-110 110z",
      "p-id": "7266"
    }
  ) }) });
}, e2 = () => {
  const { toggleEditor: e } = q(I), n = () => {
    e();
  };
  return /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", onClick: n, children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "69490", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M928 64H96C42.98 64 0 106.98 0 160v704c0 53.02 42.98 96 96 96h832c53.02 0 96-42.98 96-96V160c0-53.02-42.98-96-96-96zM464 864H108a12 12 0 0 1-12-12V224h368v640z m452 0H560V224h368v628a12 12 0 0 1-12 12z",
      "p-id": "69491"
    }
  ) }) });
}, t2 = () => {
  const { toggleScreen: e } = q(I), n = () => {
    e();
  };
  return /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", onClick: n, children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "7935", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M959.8 664l0.2 272c0 13.2-10.8 24-24 24l-272-0.2c-13.2 0-24-10.8-24-24v-55.6c0-13.4 11-24.2 24.4-24l122.8 4.6 2.8-2.8-278-278L234 858l2.8 2.8 122.8-4.6c13.4-0.2 24.4 10.6 24.4 24v55.6c0 13.2-10.8 24-24 24L88 960c-13.2 0-24-10.8-24-24l0.2-272c0-13.2 10.8-24 24-24h55.6c13.4 0 24.2 11 24 24.4l-4.6 122.8L166 790l278-278L166 234l-2.8 2.8 4.6 122.8c0.2 13.4-10.6 24.4-24 24.4H88.2c-13.2 0-24-10.8-24-24L64 88c0-13.2 10.8-24 24-24l272 0.2c13.2 0 24 10.8 24 24v55.6c0 13.4-11 24.2-24.4 24l-122.8-4.6L234 166l278 278L790 166l-2.8-2.8-122.8 4.6c-13.4 0.2-24.4-10.6-24.4-24V88.2c0-13.2 10.8-24 24-24l272-0.2c13.2 0 24 10.8 24 24l-0.2 272c0 13.2-10.8 24-24 24h-55.6c-13.4 0-24.2-11-24-24.4l4.6-122.8-2.8-2.8-278 278 278 278 2.8-2.8-4.6-122.8c-0.2-13.4 10.6-24.4 24-24.4h55.6c13.2 0 24 10.8 24 24z",
      "p-id": "7936"
    }
  ) }) });
};
const n2 = () => {
  const [e, n] = B(!1), a = [
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
  ], i = /* @__PURE__ */ t.jsx("div", { className: "help", style: { color: "#666" }, children: /* @__PURE__ */ t.jsxs("table", { children: [
    /* @__PURE__ */ t.jsx("thead", { children: /* @__PURE__ */ t.jsxs("tr", { children: [
      /* @__PURE__ */ t.jsx("th", { style: { textAlign: "left" }, children: "快捷键" }),
      /* @__PURE__ */ t.jsx("th", { style: { textAlign: "left" }, children: "功能" })
    ] }) }),
    /* @__PURE__ */ t.jsx("tbody", { children: a.map((l) => /* @__PURE__ */ t.jsxs("tr", { children: [
      /* @__PURE__ */ t.jsx("td", { style: { textAlign: "left" }, children: l.keymap }),
      /* @__PURE__ */ t.jsx("td", { style: { textAlign: "left" }, children: l.desc })
    ] }, l.keymap)) })
  ] }) }), s = (l) => {
    n(l);
  };
  return /* @__PURE__ */ t.jsx(
    fe,
    {
      content: i,
      transitionName: "popover-fade",
      placement: "bottom",
      trigger: "hover",
      visible: e,
      onVisibleChange: s,
      overlayClassName: "profile-popover-wrap",
      destroyTooltipOnHide: !0,
      children: /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "67073", children: /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M512 16C238.086 16 16 238.166 16 512c0 273.994 222.086 496 496 496s496-222.006 496-496C1008 238.166 785.914 16 512 16z m0 896c-221.064 0-400-178.862-400-400 0-220.99 178.944-400 400-400 220.982 0 400 178.942 400 400 0 221.06-178.862 400-400 400z m0-676c46.392 0 84 37.608 84 84s-37.608 84-84 84-84-37.608-84-84 37.608-84 84-84z m112 508c0 13.254-10.746 24-24 24h-176c-13.254 0-24-10.746-24-24v-48c0-13.254 10.746-24 24-24h24v-128h-24c-13.254 0-24-10.746-24-24v-48c0-13.254 10.746-24 24-24h128c13.254 0 24 10.746 24 24v200h24c13.254 0 24 10.746 24 24v48z",
          "p-id": "67074"
        }
      ) }) })
    }
  );
};
const r2 = () => {
  const { editorRef: e, insertImage: n, uploadImageMethod: a } = q(I), [i, s] = B(!1), [l, o] = B("http://"), [c, h] = B(""), T = ae(), y = () => {
    const u = e.current.getCursor();
    s(!1);
    const v = `![${c}](${l} "${c || "title"}")`;
    n(v, u.line, u.ch);
  }, g = (u, v, _, b) => {
    const S = `![${u || ""}](${v || ""} "${u || ""}")`;
    n(S, _, b);
  }, m = () => {
    const u = T.current.files[0], v = e.current.getCursor();
    a(u, (_, b) => g(_, b, v.line, v.ch));
  }, x = /* @__PURE__ */ t.jsxs("div", { style: { color: "#666" }, children: [
    /* @__PURE__ */ t.jsxs("div", { children: [
      /* @__PURE__ */ t.jsx("div", { className: "title", children: "添加图片链接" }),
      /* @__PURE__ */ t.jsxs("div", { style: { marginBottom: "10px" }, children: [
        /* @__PURE__ */ t.jsx("span", { children: "图片地址：" }),
        /* @__PURE__ */ t.jsx("input", { type: "text", className: "link-input", defaultValue: "http://", onChange: (u) => o(u.target.value) })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("span", { children: "图片标题：" }),
        /* @__PURE__ */ t.jsx("input", { type: "text", className: "link-input", onChange: (u) => h(u.target.value) })
      ] }),
      /* @__PURE__ */ t.jsx("div", { style: { textAlign: "right", marginTop: "10px" }, children: /* @__PURE__ */ t.jsx("button", { className: "button", onClick: y, children: "确定" }) })
    ] }),
    a && /* @__PURE__ */ t.jsxs("div", { children: [
      /* @__PURE__ */ t.jsx("div", { className: "title", children: "从本地上传" }),
      /* @__PURE__ */ t.jsxs("span", { className: "file", children: [
        /* @__PURE__ */ t.jsx("input", { type: "file", id: "file", ref: T, onChange: m }),
        /* @__PURE__ */ t.jsx("a", { children: "选择图片" })
      ] })
    ] })
  ] }), f = (u) => {
    s(u);
  };
  return /* @__PURE__ */ t.jsx(
    fe,
    {
      content: x,
      transitionName: "popover-fade",
      placement: "bottom",
      trigger: "click",
      visible: i,
      onVisibleChange: f,
      overlayClassName: "profile-popover-wrap",
      destroyTooltipOnHide: !0,
      children: /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "67609", children: /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M896 64H128A64 64 0 0 0 64 128v768a64 64 0 0 0 64 64h768a64 64 0 0 0 64-64V128a64 64 0 0 0-64-64z m-32 800H160v-128h704z m0-224h-32l-194.14-242c-14.92-18.62-44.8-18.62-59.72 0l-126.76 158-66.1-91.56c-15.84-22-50.72-22-66.56 0L192 640H160V160h704zM352 352a64 64 0 1 0-64-64 64 64 0 0 0 64 64z",
          "p-id": "67610"
        }
      ) }) })
    }
  );
}, a2 = () => {
  const { wrapTextWith: e } = q(I), n = () => {
    e("==");
  };
  return /* @__PURE__ */ t.jsx("div", { className: "icon-wrapper", onClick: n, children: /* @__PURE__ */ t.jsx("svg", { className: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "3245", width: "200", height: "200", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M986.51844 112.52l-75.02-75.02C886.51844 12.5 853.75844 0 820.99844 0s-65.52 12.5-90.52 37.48l-135.74 135.76-79.18-79.18c-31.24-31.24-81.9-31.24-113.12 0L164.85844 331.62c-12.5 12.5-12.5 32.76 0 45.24l22.62 22.62c12.5 12.5 32.76 12.5 45.24 0L458.99844 173.24l67.88 67.88-14.84 14.84L187.91844 580.06A654.076 654.076 0 0 0 0.35844 970.24l-0.06 0.46C-2.88156 999.44 19.77844 1024 47.91844 1024c1.78 0 3.56-0.1 5.38-0.3a654.154 654.154 0 0 0 390.68-187.6L768.05844 512l69.48-69.48 148.98-148.98c50-50 50-131.04 0-181.02zM376.07844 768.22c-74.04 74.04-167.98 125.76-269.48 149.2 23.44-101.48 75.18-195.46 149.2-269.48l324.1-324.1 14.84-14.84 120.28 120.28-14.84 14.84-324.1 324.1z m542.56-542.58l-135.76 135.76-97.64-97.66-22.62-22.62 135.74-135.74c8.16-8.16 17.68-9.38 22.62-9.38 4.94 0 14.48 1.22 22.62 9.38L918.61844 180.4c8.16 8.16 9.38 17.68 9.38 22.62s-1.2 14.48-9.36 22.62z",
      "p-id": "3246"
    }
  ) }) });
};
const i2 = {
  undo: /* @__PURE__ */ t.jsx(Cr, {}),
  redo: /* @__PURE__ */ t.jsx(kr, {}),
  bold: /* @__PURE__ */ t.jsx(Tr, {}),
  through: /* @__PURE__ */ t.jsx(Sr, {}),
  mark: /* @__PURE__ */ t.jsx(a2, {}),
  italic: /* @__PURE__ */ t.jsx(Er, {}),
  upperCase: /* @__PURE__ */ t.jsx(Rr, {}),
  lowerCase: /* @__PURE__ */ t.jsx(Or, {}),
  humpCase: /* @__PURE__ */ t.jsx(Ar, {}),
  quote: /* @__PURE__ */ t.jsx(Pr, {}),
  dividing: /* @__PURE__ */ t.jsx(Vr, {}),
  unOrderedList: /* @__PURE__ */ t.jsx(Nr, {}),
  orderedList: /* @__PURE__ */ t.jsx(Mr, {}),
  table: /* @__PURE__ */ t.jsx($r, {}),
  inlineCode: /* @__PURE__ */ t.jsx(Dr, {}),
  link: /* @__PURE__ */ t.jsx(Ir, {}),
  sub: /* @__PURE__ */ t.jsx(Br, {}),
  super: /* @__PURE__ */ t.jsx(qr, {}),
  emoji: /* @__PURE__ */ t.jsx(Wo, {}),
  codeBlock: /* @__PURE__ */ t.jsx(Fo, {}),
  htmlEntities: /* @__PURE__ */ t.jsx(Ko, {}),
  dateTime: /* @__PURE__ */ t.jsx(Go, {}),
  theme: /* @__PURE__ */ t.jsx(Qo, {}),
  checkList: /* @__PURE__ */ t.jsx(Xo, {}),
  clear: /* @__PURE__ */ t.jsx(Zo, {}),
  toggleEditor: /* @__PURE__ */ t.jsx(e2, {}),
  fullScreen: /* @__PURE__ */ t.jsx(t2, {}),
  help: /* @__PURE__ */ t.jsx(n2, {}),
  image: /* @__PURE__ */ t.jsx(r2, {})
}, o2 = (e, n) => {
  const { editorRef: a, toggleEditor: i, height: s, toggleScreen: l, toolbars: o, uploadImageMethod: c, languages: h } = e, T = ae();
  Ge(n, () => ({
    toolbarHeight: T.current.getBoundingClientRect().height
  }));
  const y = (f) => {
    const u = a.current;
    if (!u)
      return ie.Pass;
    if (!u.getSelection())
      return u.focus(), ie.Pass;
    const v = u.listSelections();
    for (let _ = 0; _ < v.length; _++) {
      const b = v[_], S = f.length;
      if (!b.empty()) {
        const j = b.from(), V = b.to(), d = u.getRange({ ch: j.ch - S, line: j.line }, j), E = u.getRange(V, {
          ch: V.ch + S,
          line: V.line
        });
        if (d === f && E === f) {
          const k = {
            ch: j.ch - S,
            line: j.line
          }, H = { ch: V.ch + S, line: V.line }, N = u.getRange(k, H), L = N.slice(S, N.length - S);
          u.replaceRange(L, k, H, "+input");
          const R = u.indexFromPos(v[_].anchor), O = u.indexFromPos(v[_].head);
          R > O ? (v[_].anchor.ch -= S, v[_].head.ch -= S) : (j.line === V.line && (v[_].head.ch -= S), v[_].anchor.ch -= S);
        } else {
          const k = u.getRange(j, V);
          u.replaceRange(f + k + f, j, V, "+input");
          const H = u.indexFromPos(v[_].anchor), N = u.indexFromPos(v[_].head);
          H > N ? (v[_].anchor.ch += S, v[_].head.ch += S) : (j.line === V.line && (v[_].head.ch += S), v[_].anchor.ch += S);
        }
        u.setSelections(v);
      }
    }
  }, g = (f) => {
    const u = a.current;
    if (!u)
      return ie.Pass;
    if (!u.getSelection())
      return u.focus(), ie.Pass;
    const v = u.listSelections();
    for (let _ = 0; _ < v.length; _++) {
      const b = v[_];
      if (!b.empty()) {
        const S = b.from(), j = b.to(), V = u.getRange(S, j);
        let d = "";
        switch (f) {
          case "upperCase":
            d = V.toLocaleUpperCase();
            break;
          case "lowerCase":
            d = V.toLocaleLowerCase();
            break;
          case "humpCase":
            d = V[0].toLocaleUpperCase() + V.slice(1, V.length).toLocaleLowerCase();
            break;
        }
        u.replaceRange(d, S, j, "+input"), u.setSelections(v);
      }
    }
  }, m = (f, u, v, _) => {
    const b = a.current;
    if (!b)
      return ie.Pass;
    const S = b.getCursor();
    if (v)
      b.getLine(S.line).startsWith(f) ? b.replaceRange("", { ch: 0, line: S.line }, { ch: f.length, line: S.line }) : b.replaceRange(f, { ch: 0, line: S.line });
    else if (u) {
      const j = S.line;
      b.replaceRange(`
` + f + `
`, G(j + 1, 0)), b.setCursor(G(j + _, f.length));
    } else
      b.replaceRange(f, G(S.line, S.ch));
    b.focus();
  }, x = (f, u, v) => {
    const _ = a.current;
    if (!_)
      return ie.Pass;
    _.replaceRange(f, G(u, v));
  };
  return /* @__PURE__ */ t.jsx("div", { ref: T, className: "Toolbar", children: /* @__PURE__ */ t.jsx(
    I.Provider,
    {
      value: {
        editorRef: a,
        wrapTextWith: y,
        switchTextCase: g,
        insertText: m,
        toggleEditor: i,
        toggleScreen: l,
        insertImage: x,
        uploadImageMethod: c,
        languages: h
      },
      children: o && o.map((f) => f === "header" ? ["h1", "h2", "h3", "h4"].map((u, v) => /* @__PURE__ */ t.jsx("div", { style: { height: s }, children: /* @__PURE__ */ t.jsx(Hr, { name: u }, v) }, `${f}-${v}`)) : /* @__PURE__ */ t.jsx("div", { style: { height: s }, children: i2[f] }, f))
    }
  ) });
}, s2 = pe.forwardRef(o2);
const l2 = [
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
], c2 = (e, n) => {
  switch (n.type) {
    case "setMdValue":
      return { ...e, mdValue: n.value };
    case "setHtmlValue":
      return { ...e, htmlValue: n.value };
    case "setTocValue":
      return { ...e, tocValue: n.value };
    default:
      throw new Error();
  }
}, p2 = (e) => ({ mdValue: e, htmlValue: "", tocValue: "" }), Ot = ["bash", "javascript", "typescript", "go", "python", "jsx", "tsx", "sql", "markmap"], u2 = (e, n) => {
  const {
    width: a = "100%",
    height: i = 800,
    toolBarHeight: s = 34,
    onSave: l,
    toolbars: o = l2,
    initialValue: c,
    onChange: h,
    uploadImageMethod: T,
    style: y,
    withToc: g,
    options: m
  } = e, [x, f] = rn(c2, c, p2), u = ae(), v = ae(), _ = ae(), b = ae(), S = ae(), j = ae(""), [V, d] = B(!0), [E, k] = B(!1);
  Ge(n, () => ({
    getValues: () => ({ ...x })
  }));
  const H = () => {
    let C;
    return yn(i) ? C = parseInt(i) : C = i, C - s;
  }, [N, L] = B(H), R = (C) => {
    var Ce, Oe, Ae;
    if (!u.current)
      return;
    let P, Q, F, Y, U, oe, X, he, ve, ue;
    P = v.current.getScrollTop() - v.current.getOffsetTop(), U = [], Q = [], F = [], Y = 0;
    const we = C.split(`
`), ye = (Ce = u.current) == null ? void 0 : Ce.defaultTextHeight();
    for (X = 0; X < we.length; X++) {
      const de = we[X];
      if (F.push(Y), de.length === 0) {
        Y++;
        continue;
      }
      const ne = ((Oe = u.current) == null ? void 0 : Oe.heightAtLine(X + 1)) - ((Ae = u.current) == null ? void 0 : Ae.heightAtLine(X));
      Y += Math.round(ne / ye);
    }
    for (F.push(Y), oe = Y, X = 0; X < oe; X++)
      U.push(-1);
    for (Q.push(0), U[0] = 0, v.current.getLines().forEach((de) => {
      let ne = de.dataset.line;
      ne !== "" && (ne = F[ne], ne !== 0 && Q.push(ne), U[ne] = Math.round(de.getBoundingClientRect().top + P - 10));
    }), Q.push(oe), U[oe] = v.current.getScrollHeight(), he = 0, X = 1; X < oe; X++) {
      if (U[X] !== -1) {
        he++;
        continue;
      }
      ve = Q[he], ue = Q[he + 1], U[X] = Math.round((U[ue] * (X - ve) + U[ve] * (ue - X)) / (ue - ve));
    }
    return U;
  };
  ce(() => {
    S.current = ft(
      () => {
        var Y, U;
        if (j.current !== "editor" || !u.current)
          return;
        let C = R(x.mdValue), P = (Y = u.current) == null ? void 0 : Y.defaultTextHeight(), Q, F;
        Q = Math.floor(((U = u.current) == null ? void 0 : U.getScrollInfo().top) / P), F = C && C[Q], v.current.scrollTo(F);
      },
      50,
      { maxWait: 50 }
    );
  }, [x.mdValue]);
  const O = ft(
    () => {
      var oe;
      if (j.current !== "parser" || !u.current)
        return;
      let C = R(x.mdValue);
      if (!C)
        return;
      let P = v.current.getScrollTop(), Q = parseFloat(String((oe = u.current) == null ? void 0 : oe.defaultTextHeight())), F, Y, U;
      if (F = Object.keys(C), !(F.length < 1)) {
        for (U = F[0], Y = 1; Y < F.length; Y++) {
          if (C[Number(F[Y])] < P) {
            U = F[Y];
            continue;
          }
          break;
        }
        Ee(".CodeMirror-scroll").stop(!0).animate(
          {
            scrollTop: Q * Number(U)
          },
          100,
          "linear"
        );
      }
    },
    50,
    { maxWait: 50 }
  ), z = () => {
    d((C) => !C);
  }, Z = () => {
    k((C) => !C);
  };
  an(() => {
    const C = _.current.toolbarHeight, P = E ? document.documentElement.clientHeight - C : H();
    b.current.updateSize({ width: "50%", height: P }), L(P);
  }, [E]);
  const ee = Ve(V ? "" : "hide-editor"), le = Ve("MdEditor", { "full-screen": E });
  return /* @__PURE__ */ t.jsxs("div", { className: le, style: { width: a, ...y }, children: [
    o && o.length > 0 && /* @__PURE__ */ t.jsx(
      s2,
      {
        ref: _,
        editorRef: u,
        toggleEditor: z,
        toggleScreen: Z,
        height: s,
        toolbars: o,
        uploadImageMethod: T,
        languages: (m == null ? void 0 : m.languages) || Ot
      }
    ),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        style: {
          width: "100%",
          display: "flex",
          overflow: "hidden"
        },
        children: [
          /* @__PURE__ */ t.jsx(
            on,
            {
              ref: b,
              className: ee,
              maxWidth: "60%",
              minWidth: "20%",
              handleStyles: { right: { background: "linear-gradient(to right, #ccc, transparent)", width: "5px" } },
              enable: { right: !0 },
              children: /* @__PURE__ */ t.jsx(
                Hn,
                {
                  initialValue: c,
                  editorRef: u,
                  state: x,
                  dispatch: f,
                  onScroll: () => {
                    S.current();
                  },
                  onMouseEnter: () => {
                    j.current = "editor";
                  },
                  onSave: l,
                  uploadImageMethod: T,
                  languages: (m == null ? void 0 : m.languages) || Ot,
                  options: m
                }
              )
            }
          ),
          /* @__PURE__ */ t.jsx("div", { style: { width: "100%", minWidth: "1px", backgroundColor: "#FFF" }, children: /* @__PURE__ */ t.jsx(
            jr,
            {
              height: N || 800,
              ref: v,
              state: x,
              dispatch: f,
              onScroll: () => {
                O();
              },
              onChange: h,
              onMouseEnter: () => {
                j.current = "parser";
              },
              toolBarHeight: s,
              withToc: g
            }
          ) })
        ]
      }
    )
  ] });
}, V2 = pe.forwardRef(u2);
export {
  V2 as default
};
