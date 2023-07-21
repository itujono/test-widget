(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === "childList")
        for (const o of a.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = r(i);
    fetch(i.href, a);
  }
})();
var du =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function he(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mx = { exports: {} },
  Fl = {},
  $x = { exports: {} },
  ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vo = Symbol.for("react.element"),
  dE = Symbol.for("react.portal"),
  hE = Symbol.for("react.fragment"),
  pE = Symbol.for("react.strict_mode"),
  vE = Symbol.for("react.profiler"),
  yE = Symbol.for("react.provider"),
  mE = Symbol.for("react.context"),
  gE = Symbol.for("react.forward_ref"),
  xE = Symbol.for("react.suspense"),
  wE = Symbol.for("react.memo"),
  bE = Symbol.for("react.lazy"),
  Ey = Symbol.iterator;
function _E(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ey && e[Ey]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Ix = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Nx = Object.assign,
  Rx = {};
function ca(e, t, r) {
  (this.props = e), (this.context = t), (this.refs = Rx), (this.updater = r || Ix);
}
ca.prototype.isReactComponent = {};
ca.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ca.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function jx() {}
jx.prototype = ca.prototype;
function Ep(e, t, r) {
  (this.props = e), (this.context = t), (this.refs = Rx), (this.updater = r || Ix);
}
var kp = (Ep.prototype = new jx());
kp.constructor = Ep;
Nx(kp, ca.prototype);
kp.isPureReactComponent = !0;
var ky = Array.isArray,
  Dx = Object.prototype.hasOwnProperty,
  Ap = { current: null },
  Lx = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fx(e, t, r) {
  var n,
    i = {},
    a = null,
    o = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t))
      Dx.call(t, n) && !Lx.hasOwnProperty(n) && (i[n] = t[n]);
  var u = arguments.length - 2;
  if (u === 1) i.children = r;
  else if (1 < u) {
    for (var s = Array(u), l = 0; l < u; l++) s[l] = arguments[l + 2];
    i.children = s;
  }
  if (e && e.defaultProps) for (n in ((u = e.defaultProps), u)) i[n] === void 0 && (i[n] = u[n]);
  return { $$typeof: Vo, type: e, key: a, ref: o, props: i, _owner: Ap.current };
}
function SE(e, t) {
  return { $$typeof: Vo, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Tp(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vo;
}
function OE(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var Ay = /\/+/g;
function Uc(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? OE("" + e.key) : t.toString(36);
}
function zu(e, t, r, n, i) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (a) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Vo:
          case dE:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = n === "" ? "." + Uc(o, 0) : n),
      ky(i)
        ? ((r = ""),
          e != null && (r = e.replace(Ay, "$&/") + "/"),
          zu(i, t, r, "", function (l) {
            return l;
          }))
        : i != null &&
          (Tp(i) &&
            (i = SE(i, r + (!i.key || (o && o.key === i.key) ? "" : ("" + i.key).replace(Ay, "$&/") + "/") + e)),
          t.push(i)),
      1
    );
  if (((o = 0), (n = n === "" ? "." : n + ":"), ky(e)))
    for (var u = 0; u < e.length; u++) {
      a = e[u];
      var s = n + Uc(a, u);
      o += zu(a, t, r, s, i);
    }
  else if (((s = _E(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(a = e.next()).done; ) (a = a.value), (s = n + Uc(a, u++)), (o += zu(a, t, r, s, i));
  else if (a === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return o;
}
function hu(e, t, r) {
  if (e == null) return e;
  var n = [],
    i = 0;
  return (
    zu(e, n, "", "", function (a) {
      return t.call(r, a, i++);
    }),
    n
  );
}
function EE(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = r));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ht = { current: null },
  Wu = { transition: null },
  kE = { ReactCurrentDispatcher: ht, ReactCurrentBatchConfig: Wu, ReactCurrentOwner: Ap };
ie.Children = {
  map: hu,
  forEach: function (e, t, r) {
    hu(
      e,
      function () {
        t.apply(this, arguments);
      },
      r,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      hu(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      hu(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Tp(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
ie.Component = ca;
ie.Fragment = hE;
ie.Profiler = vE;
ie.PureComponent = Ep;
ie.StrictMode = pE;
ie.Suspense = xE;
ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kE;
ie.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = Nx({}, e.props),
    i = e.key,
    a = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (o = Ap.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t) Dx.call(t, s) && !Lx.hasOwnProperty(s) && (n[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) n.children = r;
  else if (1 < s) {
    u = Array(s);
    for (var l = 0; l < s; l++) u[l] = arguments[l + 2];
    n.children = u;
  }
  return { $$typeof: Vo, type: e.type, key: i, ref: a, props: n, _owner: o };
};
ie.createContext = function (e) {
  return (
    (e = {
      $$typeof: mE,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: yE, _context: e }),
    (e.Consumer = e)
  );
};
ie.createElement = Fx;
ie.createFactory = function (e) {
  var t = Fx.bind(null, e);
  return (t.type = e), t;
};
ie.createRef = function () {
  return { current: null };
};
ie.forwardRef = function (e) {
  return { $$typeof: gE, render: e };
};
ie.isValidElement = Tp;
ie.lazy = function (e) {
  return { $$typeof: bE, _payload: { _status: -1, _result: e }, _init: EE };
};
ie.memo = function (e, t) {
  return { $$typeof: wE, type: e, compare: t === void 0 ? null : t };
};
ie.startTransition = function (e) {
  var t = Wu.transition;
  Wu.transition = {};
  try {
    e();
  } finally {
    Wu.transition = t;
  }
};
ie.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
ie.useCallback = function (e, t) {
  return ht.current.useCallback(e, t);
};
ie.useContext = function (e) {
  return ht.current.useContext(e);
};
ie.useDebugValue = function () {};
ie.useDeferredValue = function (e) {
  return ht.current.useDeferredValue(e);
};
ie.useEffect = function (e, t) {
  return ht.current.useEffect(e, t);
};
ie.useId = function () {
  return ht.current.useId();
};
ie.useImperativeHandle = function (e, t, r) {
  return ht.current.useImperativeHandle(e, t, r);
};
ie.useInsertionEffect = function (e, t) {
  return ht.current.useInsertionEffect(e, t);
};
ie.useLayoutEffect = function (e, t) {
  return ht.current.useLayoutEffect(e, t);
};
ie.useMemo = function (e, t) {
  return ht.current.useMemo(e, t);
};
ie.useReducer = function (e, t, r) {
  return ht.current.useReducer(e, t, r);
};
ie.useRef = function (e) {
  return ht.current.useRef(e);
};
ie.useState = function (e) {
  return ht.current.useState(e);
};
ie.useSyncExternalStore = function (e, t, r) {
  return ht.current.useSyncExternalStore(e, t, r);
};
ie.useTransition = function () {
  return ht.current.useTransition();
};
ie.version = "18.2.0";
$x.exports = ie;
var B = $x.exports;
const $ = he(B);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var AE = B,
  TE = Symbol.for("react.element"),
  CE = Symbol.for("react.fragment"),
  PE = Object.prototype.hasOwnProperty,
  ME = AE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  $E = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bx(e, t, r) {
  var n,
    i = {},
    a = null,
    o = null;
  r !== void 0 && (a = "" + r), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (n in t) PE.call(t, n) && !$E.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps) for (n in ((t = e.defaultProps), t)) i[n] === void 0 && (i[n] = t[n]);
  return { $$typeof: TE, type: e, key: a, ref: o, props: i, _owner: ME.current };
}
Fl.Fragment = CE;
Fl.jsx = Bx;
Fl.jsxs = Bx;
Mx.exports = Fl;
var T = Mx.exports,
  Xf = {},
  Ux = { exports: {} },
  $t = {},
  zx = { exports: {} },
  Wx = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, j) {
    var z = P.length;
    P.push(j);
    e: for (; 0 < z; ) {
      var V = (z - 1) >>> 1,
        Q = P[V];
      if (0 < i(Q, j)) (P[V] = j), (P[z] = Q), (z = V);
      else break e;
    }
  }
  function r(P) {
    return P.length === 0 ? null : P[0];
  }
  function n(P) {
    if (P.length === 0) return null;
    var j = P[0],
      z = P.pop();
    if (z !== j) {
      P[0] = z;
      e: for (var V = 0, Q = P.length, X = Q >>> 1; V < X; ) {
        var oe = 2 * (V + 1) - 1,
          $e = P[oe],
          Ae = oe + 1,
          St = P[Ae];
        if (0 > i($e, z))
          Ae < Q && 0 > i(St, $e) ? ((P[V] = St), (P[Ae] = z), (V = Ae)) : ((P[V] = $e), (P[oe] = z), (V = oe));
        else if (Ae < Q && 0 > i(St, z)) (P[V] = St), (P[Ae] = z), (V = Ae);
        else break e;
      }
    }
    return j;
  }
  function i(P, j) {
    var z = P.sortIndex - j.sortIndex;
    return z !== 0 ? z : P.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    l = [],
    c = 1,
    f = null,
    d = 3,
    v = !1,
    y = !1,
    h = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    x = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(P) {
    for (var j = r(l); j !== null; ) {
      if (j.callback === null) n(l);
      else if (j.startTime <= P) n(l), (j.sortIndex = j.expirationTime), t(s, j);
      else break;
      j = r(l);
    }
  }
  function g(P) {
    if (((h = !1), m(P), !y))
      if (r(s) !== null) (y = !0), N(b);
      else {
        var j = r(l);
        j !== null && W(g, j.startTime - P);
      }
  }
  function b(P, j) {
    (y = !1), h && ((h = !1), p(O), (O = -1)), (v = !0);
    var z = d;
    try {
      for (m(j), f = r(s); f !== null && (!(f.expirationTime > j) || (P && !k())); ) {
        var V = f.callback;
        if (typeof V == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var Q = V(f.expirationTime <= j);
          (j = e.unstable_now()), typeof Q == "function" ? (f.callback = Q) : f === r(s) && n(s), m(j);
        } else n(s);
        f = r(s);
      }
      if (f !== null) var X = !0;
      else {
        var oe = r(l);
        oe !== null && W(g, oe.startTime - j), (X = !1);
      }
      return X;
    } finally {
      (f = null), (d = z), (v = !1);
    }
  }
  var _ = !1,
    S = null,
    O = -1,
    E = 5,
    A = -1;
  function k() {
    return !(e.unstable_now() - A < E);
  }
  function C() {
    if (S !== null) {
      var P = e.unstable_now();
      A = P;
      var j = !0;
      try {
        j = S(!0, P);
      } finally {
        j ? M() : ((_ = !1), (S = null));
      }
    } else _ = !1;
  }
  var M;
  if (typeof x == "function")
    M = function () {
      x(C);
    };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(),
      D = I.port2;
    (I.port1.onmessage = C),
      (M = function () {
        D.postMessage(null);
      });
  } else
    M = function () {
      w(C, 0);
    };
  function N(P) {
    (S = P), _ || ((_ = !0), M());
  }
  function W(P, j) {
    O = w(function () {
      P(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), N(b));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (E = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(s);
    }),
    (e.unstable_next = function (P) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = d;
      }
      var z = d;
      d = j;
      try {
        return P();
      } finally {
        d = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, j) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var z = d;
      d = P;
      try {
        return j();
      } finally {
        d = z;
      }
    }),
    (e.unstable_scheduleCallback = function (P, j, z) {
      var V = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? V + z : V))
          : (z = V),
        P)
      ) {
        case 1:
          var Q = -1;
          break;
        case 2:
          Q = 250;
          break;
        case 5:
          Q = 1073741823;
          break;
        case 4:
          Q = 1e4;
          break;
        default:
          Q = 5e3;
      }
      return (
        (Q = z + Q),
        (P = { id: c++, callback: j, priorityLevel: P, startTime: z, expirationTime: Q, sortIndex: -1 }),
        z > V
          ? ((P.sortIndex = z), t(l, P), r(s) === null && P === r(l) && (h ? (p(O), (O = -1)) : (h = !0), W(g, z - V)))
          : ((P.sortIndex = Q), t(s, P), y || v || ((y = !0), N(b))),
        P
      );
    }),
    (e.unstable_shouldYield = k),
    (e.unstable_wrapCallback = function (P) {
      var j = d;
      return function () {
        var z = d;
        d = j;
        try {
          return P.apply(this, arguments);
        } finally {
          d = z;
        }
      };
    });
})(Wx);
zx.exports = Wx;
var IE = zx.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hx = B,
  Mt = IE;
function F(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var qx = new Set(),
  yo = {};
function ii(e, t) {
  Vi(e, t), Vi(e + "Capture", t);
}
function Vi(e, t) {
  for (yo[e] = t, e = 0; e < t.length; e++) qx.add(t[e]);
}
var $r = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  Jf = Object.prototype.hasOwnProperty,
  NE =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ty = {},
  Cy = {};
function RE(e) {
  return Jf.call(Cy, e) ? !0 : Jf.call(Ty, e) ? !1 : NE.test(e) ? (Cy[e] = !0) : ((Ty[e] = !0), !1);
}
function jE(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function DE(e, t, r, n) {
  if (t === null || typeof t > "u" || jE(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pt(e, t, r, n, i, a, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = i),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o);
}
var rt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    rt[e] = new pt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  rt[t] = new pt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  rt[e] = new pt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  rt[e] = new pt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    rt[e] = new pt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  rt[e] = new pt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  rt[e] = new pt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  rt[e] = new pt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  rt[e] = new pt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Cp = /[\-:]([a-z])/g;
function Pp(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cp, Pp);
    rt[t] = new pt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(Cp, Pp);
  rt[t] = new pt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Cp, Pp);
  rt[t] = new pt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  rt[e] = new pt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
rt.xlinkHref = new pt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  rt[e] = new pt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Mp(e, t, r, n) {
  var i = rt.hasOwnProperty(t) ? rt[t] : null;
  (i !== null
    ? i.type !== 0
    : n || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (DE(t, r, i, n) && (r = null),
    n || i === null
      ? RE(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : i.mustUseProperty
      ? (e[i.propertyName] = r === null ? (i.type === 3 ? !1 : "") : r)
      : ((t = i.attributeName),
        (n = i.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (r = i === 3 || (i === 4 && r === !0) ? "" : "" + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var Dr = Hx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  pu = Symbol.for("react.element"),
  _i = Symbol.for("react.portal"),
  Si = Symbol.for("react.fragment"),
  $p = Symbol.for("react.strict_mode"),
  Zf = Symbol.for("react.profiler"),
  Gx = Symbol.for("react.provider"),
  Vx = Symbol.for("react.context"),
  Ip = Symbol.for("react.forward_ref"),
  ed = Symbol.for("react.suspense"),
  td = Symbol.for("react.suspense_list"),
  Np = Symbol.for("react.memo"),
  Vr = Symbol.for("react.lazy"),
  Qx = Symbol.for("react.offscreen"),
  Py = Symbol.iterator;
function Ta(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Py && e[Py]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Me = Object.assign,
  zc;
function Xa(e) {
  if (zc === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      zc = (t && t[1]) || "";
    }
  return (
    `
` +
    zc +
    e
  );
}
var Wc = !1;
function Hc(e, t) {
  if (!e || Wc) return "";
  Wc = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (l) {
          var n = l;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (l) {
          n = l;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l) {
        n = l;
      }
      e();
    }
  } catch (l) {
    if (l && n && typeof l.stack == "string") {
      for (
        var i = l.stack.split(`
`),
          a = n.stack.split(`
`),
          o = i.length - 1,
          u = a.length - 1;
        1 <= o && 0 <= u && i[o] !== a[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (i[o] !== a[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || i[o] !== a[u])) {
                var s =
                  `
` + i[o].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Wc = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? Xa(e) : "";
}
function LE(e) {
  switch (e.tag) {
    case 5:
      return Xa(e.type);
    case 16:
      return Xa("Lazy");
    case 13:
      return Xa("Suspense");
    case 19:
      return Xa("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Hc(e.type, !1)), e;
    case 11:
      return (e = Hc(e.type.render, !1)), e;
    case 1:
      return (e = Hc(e.type, !0)), e;
    default:
      return "";
  }
}
function rd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Si:
      return "Fragment";
    case _i:
      return "Portal";
    case Zf:
      return "Profiler";
    case $p:
      return "StrictMode";
    case ed:
      return "Suspense";
    case td:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Vx:
        return (e.displayName || "Context") + ".Consumer";
      case Gx:
        return (e._context.displayName || "Context") + ".Provider";
      case Ip:
        var t = e.render;
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Np:
        return (t = e.displayName || null), t !== null ? t : rd(e.type) || "Memo";
      case Vr:
        (t = e._payload), (e = e._init);
        try {
          return rd(e(t));
        } catch {}
    }
  return null;
}
function FE(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return rd(t);
    case 8:
      return t === $p ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function pn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Yx(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function BE(e) {
  var t = Yx(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
    var i = r.get,
      a = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (n = "" + o), a.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (o) {
          n = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function vu(e) {
  e._valueTracker || (e._valueTracker = BE(e));
}
function Kx(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return e && (n = Yx(e) ? (e.checked ? "true" : "false") : e.value), (e = n), e !== r ? (t.setValue(e), !0) : !1;
}
function ms(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function nd(e, t) {
  var r = t.checked;
  return Me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function My(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = pn(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
    });
}
function Xx(e, t) {
  (t = t.checked), t != null && Mp(e, "checked", t, !1);
}
function id(e, t) {
  Xx(e, t);
  var r = pn(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ad(e, t.type, r) : t.hasOwnProperty("defaultValue") && ad(e, t.type, pn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function $y(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!((n !== "submit" && n !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    (t = "" + e._wrapperState.initialValue), r || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function ad(e, t, r) {
  (t !== "number" || ms(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Ja = Array.isArray;
function Di(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
    for (r = 0; r < e.length; r++)
      (i = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== i && (e[r].selected = i),
        i && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + pn(r), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === r) {
        (e[i].selected = !0), n && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function od(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(F(91));
  return Me({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Iy(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(F(92));
      if (Ja(r)) {
        if (1 < r.length) throw Error(F(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: pn(r) };
}
function Jx(e, t) {
  var r = pn(t.value),
    n = pn(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n);
}
function Ny(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Zx(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ud(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Zx(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var yu,
  ew = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        yu = yu || document.createElement("div"),
          yu.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = yu.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function mo(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var io = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  UE = ["Webkit", "ms", "Moz", "O"];
Object.keys(io).forEach(function (e) {
  UE.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (io[t] = io[e]);
  });
});
function tw(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (io.hasOwnProperty(e) && io[e])
    ? ("" + t).trim()
    : t + "px";
}
function rw(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        i = tw(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, i) : (e[r] = i);
    }
}
var zE = Me(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function sd(e, t) {
  if (t) {
    if (zE[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(F(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(F(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(F(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(F(62));
  }
}
function ld(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var cd = null;
function Rp(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var fd = null,
  Li = null,
  Fi = null;
function Ry(e) {
  if ((e = Ko(e))) {
    if (typeof fd != "function") throw Error(F(280));
    var t = e.stateNode;
    t && ((t = Hl(t)), fd(e.stateNode, e.type, t));
  }
}
function nw(e) {
  Li ? (Fi ? Fi.push(e) : (Fi = [e])) : (Li = e);
}
function iw() {
  if (Li) {
    var e = Li,
      t = Fi;
    if (((Fi = Li = null), Ry(e), t)) for (e = 0; e < t.length; e++) Ry(t[e]);
  }
}
function aw(e, t) {
  return e(t);
}
function ow() {}
var qc = !1;
function uw(e, t, r) {
  if (qc) return e(t, r);
  qc = !0;
  try {
    return aw(e, t, r);
  } finally {
    (qc = !1), (Li !== null || Fi !== null) && (ow(), iw());
  }
}
function go(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = Hl(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) ||
        ((e = e.type), (n = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(F(231, t, typeof r));
  return r;
}
var dd = !1;
if ($r)
  try {
    var Ca = {};
    Object.defineProperty(Ca, "passive", {
      get: function () {
        dd = !0;
      },
    }),
      window.addEventListener("test", Ca, Ca),
      window.removeEventListener("test", Ca, Ca);
  } catch {
    dd = !1;
  }
function WE(e, t, r, n, i, a, o, u, s) {
  var l = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, l);
  } catch (c) {
    this.onError(c);
  }
}
var ao = !1,
  gs = null,
  xs = !1,
  hd = null,
  HE = {
    onError: function (e) {
      (ao = !0), (gs = e);
    },
  };
function qE(e, t, r, n, i, a, o, u, s) {
  (ao = !1), (gs = null), WE.apply(HE, arguments);
}
function GE(e, t, r, n, i, a, o, u, s) {
  if ((qE.apply(this, arguments), ao)) {
    if (ao) {
      var l = gs;
      (ao = !1), (gs = null);
    } else throw Error(F(198));
    xs || ((xs = !0), (hd = l));
  }
}
function ai(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function sw(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function jy(e) {
  if (ai(e) !== e) throw Error(F(188));
}
function VE(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ai(e)), t === null)) throw Error(F(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var i = r.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (((n = i.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === r) return jy(i), e;
        if (a === n) return jy(i), t;
        a = a.sibling;
      }
      throw Error(F(188));
    }
    if (r.return !== n.return) (r = i), (n = a);
    else {
      for (var o = !1, u = i.child; u; ) {
        if (u === r) {
          (o = !0), (r = i), (n = a);
          break;
        }
        if (u === n) {
          (o = !0), (n = i), (r = a);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = a.child; u; ) {
          if (u === r) {
            (o = !0), (r = a), (n = i);
            break;
          }
          if (u === n) {
            (o = !0), (n = a), (r = i);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(F(189));
      }
    }
    if (r.alternate !== n) throw Error(F(190));
  }
  if (r.tag !== 3) throw Error(F(188));
  return r.stateNode.current === r ? e : t;
}
function lw(e) {
  return (e = VE(e)), e !== null ? cw(e) : null;
}
function cw(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = cw(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var fw = Mt.unstable_scheduleCallback,
  Dy = Mt.unstable_cancelCallback,
  QE = Mt.unstable_shouldYield,
  YE = Mt.unstable_requestPaint,
  Re = Mt.unstable_now,
  KE = Mt.unstable_getCurrentPriorityLevel,
  jp = Mt.unstable_ImmediatePriority,
  dw = Mt.unstable_UserBlockingPriority,
  ws = Mt.unstable_NormalPriority,
  XE = Mt.unstable_LowPriority,
  hw = Mt.unstable_IdlePriority,
  Bl = null,
  pr = null;
function JE(e) {
  if (pr && typeof pr.onCommitFiberRoot == "function")
    try {
      pr.onCommitFiberRoot(Bl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var rr = Math.clz32 ? Math.clz32 : tk,
  ZE = Math.log,
  ek = Math.LN2;
function tk(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ZE(e) / ek) | 0)) | 0;
}
var mu = 64,
  gu = 4194304;
function Za(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function bs(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    i = e.suspendedLanes,
    a = e.pingedLanes,
    o = r & 268435455;
  if (o !== 0) {
    var u = o & ~i;
    u !== 0 ? (n = Za(u)) : ((a &= o), a !== 0 && (n = Za(a)));
  } else (o = r & ~i), o !== 0 ? (n = Za(o)) : a !== 0 && (n = Za(a));
  if (n === 0) return 0;
  if (t !== 0 && t !== n && !(t & i) && ((i = n & -n), (a = t & -t), i >= a || (i === 16 && (a & 4194240) !== 0)))
    return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; ) (r = 31 - rr(t)), (i = 1 << r), (n |= e[r]), (t &= ~i);
  return n;
}
function rk(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function nk(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - rr(a),
      u = 1 << o,
      s = i[o];
    s === -1 ? (!(u & r) || u & n) && (i[o] = rk(u, t)) : s <= t && (e.expiredLanes |= u), (a &= ~u);
  }
}
function pd(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function pw() {
  var e = mu;
  return (mu <<= 1), !(mu & 4194240) && (mu = 64), e;
}
function Gc(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function Qo(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - rr(t)),
    (e[t] = r);
}
function ik(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var i = 31 - rr(r),
      a = 1 << i;
    (t[i] = 0), (n[i] = -1), (e[i] = -1), (r &= ~a);
  }
}
function Dp(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - rr(r),
      i = 1 << n;
    (i & t) | (e[n] & t) && (e[n] |= t), (r &= ~i);
  }
}
var de = 0;
function vw(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var yw,
  Lp,
  mw,
  gw,
  xw,
  vd = !1,
  xu = [],
  rn = null,
  nn = null,
  an = null,
  xo = new Map(),
  wo = new Map(),
  Xr = [],
  ak =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Ly(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rn = null;
      break;
    case "dragenter":
    case "dragleave":
      nn = null;
      break;
    case "mouseover":
    case "mouseout":
      an = null;
      break;
    case "pointerover":
    case "pointerout":
      xo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      wo.delete(t.pointerId);
  }
}
function Pa(e, t, r, n, i, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: a, targetContainers: [i] }),
      t !== null && ((t = Ko(t)), t !== null && Lp(t)),
      e)
    : ((e.eventSystemFlags |= n), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function ok(e, t, r, n, i) {
  switch (t) {
    case "focusin":
      return (rn = Pa(rn, e, t, r, n, i)), !0;
    case "dragenter":
      return (nn = Pa(nn, e, t, r, n, i)), !0;
    case "mouseover":
      return (an = Pa(an, e, t, r, n, i)), !0;
    case "pointerover":
      var a = i.pointerId;
      return xo.set(a, Pa(xo.get(a) || null, e, t, r, n, i)), !0;
    case "gotpointercapture":
      return (a = i.pointerId), wo.set(a, Pa(wo.get(a) || null, e, t, r, n, i)), !0;
  }
  return !1;
}
function ww(e) {
  var t = Ln(e.target);
  if (t !== null) {
    var r = ai(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = sw(r)), t !== null)) {
          (e.blockedOn = t),
            xw(e.priority, function () {
              mw(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Hu(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = yd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (cd = n), r.target.dispatchEvent(n), (cd = null);
    } else return (t = Ko(r)), t !== null && Lp(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function Fy(e, t, r) {
  Hu(e) && r.delete(t);
}
function uk() {
  (vd = !1),
    rn !== null && Hu(rn) && (rn = null),
    nn !== null && Hu(nn) && (nn = null),
    an !== null && Hu(an) && (an = null),
    xo.forEach(Fy),
    wo.forEach(Fy);
}
function Ma(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), vd || ((vd = !0), Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority, uk)));
}
function bo(e) {
  function t(i) {
    return Ma(i, e);
  }
  if (0 < xu.length) {
    Ma(xu[0], e);
    for (var r = 1; r < xu.length; r++) {
      var n = xu[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    rn !== null && Ma(rn, e), nn !== null && Ma(nn, e), an !== null && Ma(an, e), xo.forEach(t), wo.forEach(t), r = 0;
    r < Xr.length;
    r++
  )
    (n = Xr[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Xr.length && ((r = Xr[0]), r.blockedOn === null); ) ww(r), r.blockedOn === null && Xr.shift();
}
var Bi = Dr.ReactCurrentBatchConfig,
  _s = !0;
function sk(e, t, r, n) {
  var i = de,
    a = Bi.transition;
  Bi.transition = null;
  try {
    (de = 1), Fp(e, t, r, n);
  } finally {
    (de = i), (Bi.transition = a);
  }
}
function lk(e, t, r, n) {
  var i = de,
    a = Bi.transition;
  Bi.transition = null;
  try {
    (de = 4), Fp(e, t, r, n);
  } finally {
    (de = i), (Bi.transition = a);
  }
}
function Fp(e, t, r, n) {
  if (_s) {
    var i = yd(e, t, r, n);
    if (i === null) rf(e, t, n, Ss, r), Ly(e, n);
    else if (ok(i, e, t, r, n)) n.stopPropagation();
    else if ((Ly(e, n), t & 4 && -1 < ak.indexOf(e))) {
      for (; i !== null; ) {
        var a = Ko(i);
        if ((a !== null && yw(a), (a = yd(e, t, r, n)), a === null && rf(e, t, n, Ss, r), a === i)) break;
        i = a;
      }
      i !== null && n.stopPropagation();
    } else rf(e, t, n, null, r);
  }
}
var Ss = null;
function yd(e, t, r, n) {
  if (((Ss = null), (e = Rp(n)), (e = Ln(e)), e !== null))
    if (((t = ai(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = sw(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ss = e), null;
}
function bw(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (KE()) {
        case jp:
          return 1;
        case dw:
          return 4;
        case ws:
        case XE:
          return 16;
        case hw:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Zr = null,
  Bp = null,
  qu = null;
function _w() {
  if (qu) return qu;
  var e,
    t = Bp,
    r = t.length,
    n,
    i = "value" in Zr ? Zr.value : Zr.textContent,
    a = i.length;
  for (e = 0; e < r && t[e] === i[e]; e++);
  var o = r - e;
  for (n = 1; n <= o && t[r - n] === i[a - n]; n++);
  return (qu = i.slice(e, 1 < n ? 1 - n : void 0));
}
function Gu(e) {
  var t = e.keyCode;
  return (
    "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function wu() {
  return !0;
}
function By() {
  return !1;
}
function It(e) {
  function t(r, n, i, a, o) {
    (this._reactName = r),
      (this._targetInst = i),
      (this.type = n),
      (this.nativeEvent = a),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e) e.hasOwnProperty(u) && ((r = e[u]), (this[u] = r ? r(a) : a[u]));
    return (
      (this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? wu : By),
      (this.isPropagationStopped = By),
      this
    );
  }
  return (
    Me(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = wu));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = wu));
      },
      persist: function () {},
      isPersistent: wu,
    }),
    t
  );
}
var fa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Up = It(fa),
  Yo = Me({}, fa, { view: 0, detail: 0 }),
  ck = It(Yo),
  Vc,
  Qc,
  $a,
  Ul = Me({}, Yo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zp,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== $a &&
            ($a && e.type === "mousemove"
              ? ((Vc = e.screenX - $a.screenX), (Qc = e.screenY - $a.screenY))
              : (Qc = Vc = 0),
            ($a = e)),
          Vc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Qc;
    },
  }),
  Uy = It(Ul),
  fk = Me({}, Ul, { dataTransfer: 0 }),
  dk = It(fk),
  hk = Me({}, Yo, { relatedTarget: 0 }),
  Yc = It(hk),
  pk = Me({}, fa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vk = It(pk),
  yk = Me({}, fa, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  mk = It(yk),
  gk = Me({}, fa, { data: 0 }),
  zy = It(gk),
  xk = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  wk = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  bk = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function _k(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = bk[e]) ? !!t[e] : !1;
}
function zp() {
  return _k;
}
var Sk = Me({}, Yo, {
    key: function (e) {
      if (e.key) {
        var t = xk[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Gu(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? wk[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zp,
    charCode: function (e) {
      return e.type === "keypress" ? Gu(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? Gu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  Ok = It(Sk),
  Ek = Me({}, Ul, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Wy = It(Ek),
  kk = Me({}, Yo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zp,
  }),
  Ak = It(kk),
  Tk = Me({}, fa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ck = It(Tk),
  Pk = Me({}, Ul, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Mk = It(Pk),
  $k = [9, 13, 27, 32],
  Wp = $r && "CompositionEvent" in window,
  oo = null;
$r && "documentMode" in document && (oo = document.documentMode);
var Ik = $r && "TextEvent" in window && !oo,
  Sw = $r && (!Wp || (oo && 8 < oo && 11 >= oo)),
  Hy = String.fromCharCode(32),
  qy = !1;
function Ow(e, t) {
  switch (e) {
    case "keyup":
      return $k.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ew(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Oi = !1;
function Nk(e, t) {
  switch (e) {
    case "compositionend":
      return Ew(t);
    case "keypress":
      return t.which !== 32 ? null : ((qy = !0), Hy);
    case "textInput":
      return (e = t.data), e === Hy && qy ? null : e;
    default:
      return null;
  }
}
function Rk(e, t) {
  if (Oi) return e === "compositionend" || (!Wp && Ow(e, t)) ? ((e = _w()), (qu = Bp = Zr = null), (Oi = !1), e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Sw && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var jk = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Gy(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!jk[e.type] : t === "textarea";
}
function kw(e, t, r, n) {
  nw(n),
    (t = Os(t, "onChange")),
    0 < t.length && ((r = new Up("onChange", "change", null, r, n)), e.push({ event: r, listeners: t }));
}
var uo = null,
  _o = null;
function Dk(e) {
  Dw(e, 0);
}
function zl(e) {
  var t = Ai(e);
  if (Kx(t)) return e;
}
function Lk(e, t) {
  if (e === "change") return t;
}
var Aw = !1;
if ($r) {
  var Kc;
  if ($r) {
    var Xc = "oninput" in document;
    if (!Xc) {
      var Vy = document.createElement("div");
      Vy.setAttribute("oninput", "return;"), (Xc = typeof Vy.oninput == "function");
    }
    Kc = Xc;
  } else Kc = !1;
  Aw = Kc && (!document.documentMode || 9 < document.documentMode);
}
function Qy() {
  uo && (uo.detachEvent("onpropertychange", Tw), (_o = uo = null));
}
function Tw(e) {
  if (e.propertyName === "value" && zl(_o)) {
    var t = [];
    kw(t, _o, e, Rp(e)), uw(Dk, t);
  }
}
function Fk(e, t, r) {
  e === "focusin" ? (Qy(), (uo = t), (_o = r), uo.attachEvent("onpropertychange", Tw)) : e === "focusout" && Qy();
}
function Bk(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return zl(_o);
}
function Uk(e, t) {
  if (e === "click") return zl(t);
}
function zk(e, t) {
  if (e === "input" || e === "change") return zl(t);
}
function Wk(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ir = typeof Object.is == "function" ? Object.is : Wk;
function So(e, t) {
  if (ir(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!Jf.call(t, i) || !ir(e[i], t[i])) return !1;
  }
  return !0;
}
function Yy(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ky(e, t) {
  var r = Yy(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Yy(r);
  }
}
function Cw(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Cw(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Pw() {
  for (var e = window, t = ms(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = ms(e.document);
  }
  return t;
}
function Hp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Hk(e) {
  var t = Pw(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (t !== r && r && r.ownerDocument && Cw(r.ownerDocument.documentElement, r)) {
    if (n !== null && Hp(r)) {
      if (((t = n.start), (e = n.end), e === void 0 && (e = t), "selectionStart" in r))
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (((e = ((t = r.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var i = r.textContent.length,
          a = Math.min(n.start, i);
        (n = n.end === void 0 ? a : Math.min(n.end, i)),
          !e.extend && a > n && ((i = n), (n = a), (a = i)),
          (i = Ky(r, a));
        var o = Ky(r, n);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          a > n ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var qk = $r && "documentMode" in document && 11 >= document.documentMode,
  Ei = null,
  md = null,
  so = null,
  gd = !1;
function Xy(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  gd ||
    Ei == null ||
    Ei !== ms(n) ||
    ((n = Ei),
    "selectionStart" in n && Hp(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = ((n.ownerDocument && n.ownerDocument.defaultView) || window).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (so && So(so, n)) ||
      ((so = n),
      (n = Os(md, "onSelect")),
      0 < n.length &&
        ((t = new Up("onSelect", "select", null, t, r)), e.push({ event: t, listeners: n }), (t.target = Ei))));
}
function bu(e, t) {
  var r = {};
  return (r[e.toLowerCase()] = t.toLowerCase()), (r["Webkit" + e] = "webkit" + t), (r["Moz" + e] = "moz" + t), r;
}
var ki = {
    animationend: bu("Animation", "AnimationEnd"),
    animationiteration: bu("Animation", "AnimationIteration"),
    animationstart: bu("Animation", "AnimationStart"),
    transitionend: bu("Transition", "TransitionEnd"),
  },
  Jc = {},
  Mw = {};
$r &&
  ((Mw = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ki.animationend.animation, delete ki.animationiteration.animation, delete ki.animationstart.animation),
  "TransitionEvent" in window || delete ki.transitionend.transition);
function Wl(e) {
  if (Jc[e]) return Jc[e];
  if (!ki[e]) return e;
  var t = ki[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in Mw) return (Jc[e] = t[r]);
  return e;
}
var $w = Wl("animationend"),
  Iw = Wl("animationiteration"),
  Nw = Wl("animationstart"),
  Rw = Wl("transitionend"),
  jw = new Map(),
  Jy =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function gn(e, t) {
  jw.set(e, t), ii(t, [e]);
}
for (var Zc = 0; Zc < Jy.length; Zc++) {
  var ef = Jy[Zc],
    Gk = ef.toLowerCase(),
    Vk = ef[0].toUpperCase() + ef.slice(1);
  gn(Gk, "on" + Vk);
}
gn($w, "onAnimationEnd");
gn(Iw, "onAnimationIteration");
gn(Nw, "onAnimationStart");
gn("dblclick", "onDoubleClick");
gn("focusin", "onFocus");
gn("focusout", "onBlur");
gn(Rw, "onTransitionEnd");
Vi("onMouseEnter", ["mouseout", "mouseover"]);
Vi("onMouseLeave", ["mouseout", "mouseover"]);
Vi("onPointerEnter", ["pointerout", "pointerover"]);
Vi("onPointerLeave", ["pointerout", "pointerover"]);
ii("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ii("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ii("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ii("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ii("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ii("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var eo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Qk = new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));
function Zy(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), GE(n, t, void 0, e), (e.currentTarget = null);
}
function Dw(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      i = n.event;
    n = n.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var o = n.length - 1; 0 <= o; o--) {
          var u = n[o],
            s = u.instance,
            l = u.currentTarget;
          if (((u = u.listener), s !== a && i.isPropagationStopped())) break e;
          Zy(i, u, l), (a = s);
        }
      else
        for (o = 0; o < n.length; o++) {
          if (
            ((u = n[o]), (s = u.instance), (l = u.currentTarget), (u = u.listener), s !== a && i.isPropagationStopped())
          )
            break e;
          Zy(i, u, l), (a = s);
        }
    }
  }
  if (xs) throw ((e = hd), (xs = !1), (hd = null), e);
}
function we(e, t) {
  var r = t[Sd];
  r === void 0 && (r = t[Sd] = new Set());
  var n = e + "__bubble";
  r.has(n) || (Lw(t, e, 2, !1), r.add(n));
}
function tf(e, t, r) {
  var n = 0;
  t && (n |= 4), Lw(r, e, n, t);
}
var _u = "_reactListening" + Math.random().toString(36).slice(2);
function Oo(e) {
  if (!e[_u]) {
    (e[_u] = !0),
      qx.forEach(function (r) {
        r !== "selectionchange" && (Qk.has(r) || tf(r, !1, e), tf(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_u] || ((t[_u] = !0), tf("selectionchange", !1, t));
  }
}
function Lw(e, t, r, n) {
  switch (bw(t)) {
    case 1:
      var i = sk;
      break;
    case 4:
      i = lk;
      break;
    default:
      i = Fp;
  }
  (r = i.bind(null, t, r, e)),
    (i = void 0),
    !dd || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (i = !0),
    n
      ? i !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: i })
        : e.addEventListener(t, r, !0)
      : i !== void 0
      ? e.addEventListener(t, r, { passive: i })
      : e.addEventListener(t, r, !1);
}
function rf(e, t, r, n, i) {
  var a = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var o = n.tag;
      if (o === 3 || o === 4) {
        var u = n.stateNode.containerInfo;
        if (u === i || (u.nodeType === 8 && u.parentNode === i)) break;
        if (o === 4)
          for (o = n.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo), s === i || (s.nodeType === 8 && s.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Ln(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            n = a = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      n = n.return;
    }
  uw(function () {
    var l = a,
      c = Rp(r),
      f = [];
    e: {
      var d = jw.get(e);
      if (d !== void 0) {
        var v = Up,
          y = e;
        switch (e) {
          case "keypress":
            if (Gu(r) === 0) break e;
          case "keydown":
          case "keyup":
            v = Ok;
            break;
          case "focusin":
            (y = "focus"), (v = Yc);
            break;
          case "focusout":
            (y = "blur"), (v = Yc);
            break;
          case "beforeblur":
          case "afterblur":
            v = Yc;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Uy;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = dk;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Ak;
            break;
          case $w:
          case Iw:
          case Nw:
            v = vk;
            break;
          case Rw:
            v = Ck;
            break;
          case "scroll":
            v = ck;
            break;
          case "wheel":
            v = Mk;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = mk;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Wy;
        }
        var h = (t & 4) !== 0,
          w = !h && e === "scroll",
          p = h ? (d !== null ? d + "Capture" : null) : d;
        h = [];
        for (var x = l, m; x !== null; ) {
          m = x;
          var g = m.stateNode;
          if (
            (m.tag === 5 && g !== null && ((m = g), p !== null && ((g = go(x, p)), g != null && h.push(Eo(x, g, m)))),
            w)
          )
            break;
          x = x.return;
        }
        0 < h.length && ((d = new v(d, y, null, r, c)), f.push({ event: d, listeners: h }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          d && r !== cd && (y = r.relatedTarget || r.fromElement) && (Ln(y) || y[Ir]))
        )
          break e;
        if (
          (v || d) &&
          ((d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window),
          v
            ? ((y = r.relatedTarget || r.toElement),
              (v = l),
              (y = y ? Ln(y) : null),
              y !== null && ((w = ai(y)), y !== w || (y.tag !== 5 && y.tag !== 6)) && (y = null))
            : ((v = null), (y = l)),
          v !== y)
        ) {
          if (
            ((h = Uy),
            (g = "onMouseLeave"),
            (p = "onMouseEnter"),
            (x = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((h = Wy), (g = "onPointerLeave"), (p = "onPointerEnter"), (x = "pointer")),
            (w = v == null ? d : Ai(v)),
            (m = y == null ? d : Ai(y)),
            (d = new h(g, x + "leave", v, r, c)),
            (d.target = w),
            (d.relatedTarget = m),
            (g = null),
            Ln(c) === l && ((h = new h(p, x + "enter", y, r, c)), (h.target = m), (h.relatedTarget = w), (g = h)),
            (w = g),
            v && y)
          )
            t: {
              for (h = v, p = y, x = 0, m = h; m; m = yi(m)) x++;
              for (m = 0, g = p; g; g = yi(g)) m++;
              for (; 0 < x - m; ) (h = yi(h)), x--;
              for (; 0 < m - x; ) (p = yi(p)), m--;
              for (; x--; ) {
                if (h === p || (p !== null && h === p.alternate)) break t;
                (h = yi(h)), (p = yi(p));
              }
              h = null;
            }
          else h = null;
          v !== null && em(f, d, v, h, !1), y !== null && w !== null && em(f, w, y, h, !0);
        }
      }
      e: {
        if (
          ((d = l ? Ai(l) : window),
          (v = d.nodeName && d.nodeName.toLowerCase()),
          v === "select" || (v === "input" && d.type === "file"))
        )
          var b = Lk;
        else if (Gy(d))
          if (Aw) b = zk;
          else {
            b = Bk;
            var _ = Fk;
          }
        else
          (v = d.nodeName) && v.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (b = Uk);
        if (b && (b = b(e, l))) {
          kw(f, b, r, c);
          break e;
        }
        _ && _(e, d, l),
          e === "focusout" && (_ = d._wrapperState) && _.controlled && d.type === "number" && ad(d, "number", d.value);
      }
      switch (((_ = l ? Ai(l) : window), e)) {
        case "focusin":
          (Gy(_) || _.contentEditable === "true") && ((Ei = _), (md = l), (so = null));
          break;
        case "focusout":
          so = md = Ei = null;
          break;
        case "mousedown":
          gd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (gd = !1), Xy(f, r, c);
          break;
        case "selectionchange":
          if (qk) break;
        case "keydown":
        case "keyup":
          Xy(f, r, c);
      }
      var S;
      if (Wp)
        e: {
          switch (e) {
            case "compositionstart":
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
      else
        Oi ? Ow(e, r) && (O = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (O = "onCompositionStart");
      O &&
        (Sw &&
          r.locale !== "ko" &&
          (Oi || O !== "onCompositionStart"
            ? O === "onCompositionEnd" && Oi && (S = _w())
            : ((Zr = c), (Bp = "value" in Zr ? Zr.value : Zr.textContent), (Oi = !0))),
        (_ = Os(l, O)),
        0 < _.length &&
          ((O = new zy(O, e, null, r, c)),
          f.push({ event: O, listeners: _ }),
          S ? (O.data = S) : ((S = Ew(r)), S !== null && (O.data = S)))),
        (S = Ik ? Nk(e, r) : Rk(e, r)) &&
          ((l = Os(l, "onBeforeInput")),
          0 < l.length &&
            ((c = new zy("onBeforeInput", "beforeinput", null, r, c)),
            f.push({ event: c, listeners: l }),
            (c.data = S)));
    }
    Dw(f, t);
  });
}
function Eo(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Os(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var i = e,
      a = i.stateNode;
    i.tag === 5 &&
      a !== null &&
      ((i = a), (a = go(e, r)), a != null && n.unshift(Eo(e, a, i)), (a = go(e, t)), a != null && n.push(Eo(e, a, i))),
      (e = e.return);
  }
  return n;
}
function yi(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function em(e, t, r, n, i) {
  for (var a = t._reactName, o = []; r !== null && r !== n; ) {
    var u = r,
      s = u.alternate,
      l = u.stateNode;
    if (s !== null && s === n) break;
    u.tag === 5 &&
      l !== null &&
      ((u = l),
      i
        ? ((s = go(r, a)), s != null && o.unshift(Eo(r, s, u)))
        : i || ((s = go(r, a)), s != null && o.push(Eo(r, s, u)))),
      (r = r.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Yk = /\r\n?/g,
  Kk = /\u0000|\uFFFD/g;
function tm(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Yk,
      `
`,
    )
    .replace(Kk, "");
}
function Su(e, t, r) {
  if (((t = tm(t)), tm(e) !== t && r)) throw Error(F(425));
}
function Es() {}
var xd = null,
  wd = null;
function bd(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var _d = typeof setTimeout == "function" ? setTimeout : void 0,
  Xk = typeof clearTimeout == "function" ? clearTimeout : void 0,
  rm = typeof Promise == "function" ? Promise : void 0,
  Jk =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof rm < "u"
      ? function (e) {
          return rm.resolve(null).then(e).catch(Zk);
        }
      : _d;
function Zk(e) {
  setTimeout(function () {
    throw e;
  });
}
function nf(e, t) {
  var r = t,
    n = 0;
  do {
    var i = r.nextSibling;
    if ((e.removeChild(r), i && i.nodeType === 8))
      if (((r = i.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(i), bo(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = i;
  } while (r);
  bo(t);
}
function on(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function nm(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var da = Math.random().toString(36).slice(2),
  lr = "__reactFiber$" + da,
  ko = "__reactProps$" + da,
  Ir = "__reactContainer$" + da,
  Sd = "__reactEvents$" + da,
  eA = "__reactListeners$" + da,
  tA = "__reactHandles$" + da;
function Ln(e) {
  var t = e[lr];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[Ir] || r[lr])) {
      if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
        for (e = nm(e); e !== null; ) {
          if ((r = e[lr])) return r;
          e = nm(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function Ko(e) {
  return (e = e[lr] || e[Ir]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Ai(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(F(33));
}
function Hl(e) {
  return e[ko] || null;
}
var Od = [],
  Ti = -1;
function xn(e) {
  return { current: e };
}
function Se(e) {
  0 > Ti || ((e.current = Od[Ti]), (Od[Ti] = null), Ti--);
}
function ge(e, t) {
  Ti++, (Od[Ti] = e.current), (e.current = t);
}
var vn = {},
  ut = xn(vn),
  wt = xn(!1),
  Qn = vn;
function Qi(e, t) {
  var r = e.type.contextTypes;
  if (!r) return vn;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    a;
  for (a in r) i[a] = t[a];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function bt(e) {
  return (e = e.childContextTypes), e != null;
}
function ks() {
  Se(wt), Se(ut);
}
function im(e, t, r) {
  if (ut.current !== vn) throw Error(F(168));
  ge(ut, t), ge(wt, r);
}
function Fw(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function")) return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in t)) throw Error(F(108, FE(e) || "Unknown", i));
  return Me({}, r, n);
}
function As(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || vn),
    (Qn = ut.current),
    ge(ut, e),
    ge(wt, wt.current),
    !0
  );
}
function am(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(F(169));
  r ? ((e = Fw(e, t, Qn)), (n.__reactInternalMemoizedMergedChildContext = e), Se(wt), Se(ut), ge(ut, e)) : Se(wt),
    ge(wt, r);
}
var Sr = null,
  ql = !1,
  af = !1;
function Bw(e) {
  Sr === null ? (Sr = [e]) : Sr.push(e);
}
function rA(e) {
  (ql = !0), Bw(e);
}
function wn() {
  if (!af && Sr !== null) {
    af = !0;
    var e = 0,
      t = de;
    try {
      var r = Sr;
      for (de = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (Sr = null), (ql = !1);
    } catch (i) {
      throw (Sr !== null && (Sr = Sr.slice(e + 1)), fw(jp, wn), i);
    } finally {
      (de = t), (af = !1);
    }
  }
  return null;
}
var Ci = [],
  Pi = 0,
  Ts = null,
  Cs = 0,
  Ft = [],
  Bt = 0,
  Yn = null,
  Or = 1,
  Er = "";
function Pn(e, t) {
  (Ci[Pi++] = Cs), (Ci[Pi++] = Ts), (Ts = e), (Cs = t);
}
function Uw(e, t, r) {
  (Ft[Bt++] = Or), (Ft[Bt++] = Er), (Ft[Bt++] = Yn), (Yn = e);
  var n = Or;
  e = Er;
  var i = 32 - rr(n) - 1;
  (n &= ~(1 << i)), (r += 1);
  var a = 32 - rr(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    (a = (n & ((1 << o) - 1)).toString(32)),
      (n >>= o),
      (i -= o),
      (Or = (1 << (32 - rr(t) + i)) | (r << i) | n),
      (Er = a + e);
  } else (Or = (1 << a) | (r << i) | n), (Er = e);
}
function qp(e) {
  e.return !== null && (Pn(e, 1), Uw(e, 1, 0));
}
function Gp(e) {
  for (; e === Ts; ) (Ts = Ci[--Pi]), (Ci[Pi] = null), (Cs = Ci[--Pi]), (Ci[Pi] = null);
  for (; e === Yn; )
    (Yn = Ft[--Bt]), (Ft[Bt] = null), (Er = Ft[--Bt]), (Ft[Bt] = null), (Or = Ft[--Bt]), (Ft[Bt] = null);
}
var Pt = null,
  Tt = null,
  Ee = !1,
  tr = null;
function zw(e, t) {
  var r = Ut(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function om(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Pt = e), (Tt = on(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Pt = e), (Tt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = Yn !== null ? { id: Or, overflow: Er } : null),
            (e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }),
            (r = Ut(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (Pt = e),
            (Tt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ed(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function kd(e) {
  if (Ee) {
    var t = Tt;
    if (t) {
      var r = t;
      if (!om(e, t)) {
        if (Ed(e)) throw Error(F(418));
        t = on(r.nextSibling);
        var n = Pt;
        t && om(e, t) ? zw(n, r) : ((e.flags = (e.flags & -4097) | 2), (Ee = !1), (Pt = e));
      }
    } else {
      if (Ed(e)) throw Error(F(418));
      (e.flags = (e.flags & -4097) | 2), (Ee = !1), (Pt = e);
    }
  }
}
function um(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Pt = e;
}
function Ou(e) {
  if (e !== Pt) return !1;
  if (!Ee) return um(e), (Ee = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== "head" && t !== "body" && !bd(e.type, e.memoizedProps))),
    t && (t = Tt))
  ) {
    if (Ed(e)) throw (Ww(), Error(F(418)));
    for (; t; ) zw(e, t), (t = on(t.nextSibling));
  }
  if ((um(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(F(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Tt = on(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Tt = null;
    }
  } else Tt = Pt ? on(e.stateNode.nextSibling) : null;
  return !0;
}
function Ww() {
  for (var e = Tt; e; ) e = on(e.nextSibling);
}
function Yi() {
  (Tt = Pt = null), (Ee = !1);
}
function Vp(e) {
  tr === null ? (tr = [e]) : tr.push(e);
}
var nA = Dr.ReactCurrentBatchConfig;
function Jt(e, t) {
  if (e && e.defaultProps) {
    (t = Me({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var Ps = xn(null),
  Ms = null,
  Mi = null,
  Qp = null;
function Yp() {
  Qp = Mi = Ms = null;
}
function Kp(e) {
  var t = Ps.current;
  Se(Ps), (e._currentValue = t);
}
function Ad(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function Ui(e, t) {
  (Ms = e),
    (Qp = Mi = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (xt = !0), (e.firstContext = null));
}
function Ht(e) {
  var t = e._currentValue;
  if (Qp !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Mi === null)) {
      if (Ms === null) throw Error(F(308));
      (Mi = e), (Ms.dependencies = { lanes: 0, firstContext: e });
    } else Mi = Mi.next = e;
  return t;
}
var Fn = null;
function Xp(e) {
  Fn === null ? (Fn = [e]) : Fn.push(e);
}
function Hw(e, t, r, n) {
  var i = t.interleaved;
  return i === null ? ((r.next = r), Xp(t)) : ((r.next = i.next), (i.next = r)), (t.interleaved = r), Nr(e, n);
}
function Nr(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t), (r = e.alternate), r !== null && (r.childLanes |= t), (r = e), (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var Qr = !1;
function Jp(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function qw(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Cr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function un(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), ae & 2)) {
    var i = n.pending;
    return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (n.pending = t), Nr(e, r);
  }
  return (
    (i = n.interleaved),
    i === null ? ((t.next = t), Xp(n)) : ((t.next = i.next), (i.next = t)),
    (n.interleaved = t),
    Nr(e, r)
  );
}
function Vu(e, t, r) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Dp(e, r);
  }
}
function sm(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var i = null,
      a = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var o = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        a === null ? (i = a = o) : (a = a.next = o), (r = r.next);
      } while (r !== null);
      a === null ? (i = a = t) : (a = a.next = t);
    } else i = a = t;
    (r = { baseState: n.baseState, firstBaseUpdate: i, lastBaseUpdate: a, shared: n.shared, effects: n.effects }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate), e === null ? (r.firstBaseUpdate = t) : (e.next = t), (r.lastBaseUpdate = t);
}
function $s(e, t, r, n) {
  var i = e.updateQueue;
  Qr = !1;
  var a = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    u = i.shared.pending;
  if (u !== null) {
    i.shared.pending = null;
    var s = u,
      l = s.next;
    (s.next = null), o === null ? (a = l) : (o.next = l), (o = s);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (u = c.lastBaseUpdate),
      u !== o && (u === null ? (c.firstBaseUpdate = l) : (u.next = l), (c.lastBaseUpdate = s)));
  }
  if (a !== null) {
    var f = i.baseState;
    (o = 0), (c = l = s = null), (u = a);
    do {
      var d = u.lane,
        v = u.eventTime;
      if ((n & d) === d) {
        c !== null &&
          (c = c.next = { eventTime: v, lane: 0, tag: u.tag, payload: u.payload, callback: u.callback, next: null });
        e: {
          var y = e,
            h = u;
          switch (((d = t), (v = r), h.tag)) {
            case 1:
              if (((y = h.payload), typeof y == "function")) {
                f = y.call(v, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (((y = h.payload), (d = typeof y == "function" ? y.call(v, f, d) : y), d == null)) break e;
              f = Me({}, f, d);
              break e;
            case 2:
              Qr = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64), (d = i.effects), d === null ? (i.effects = [u]) : d.push(u));
      } else
        (v = { eventTime: v, lane: d, tag: u.tag, payload: u.payload, callback: u.callback, next: null }),
          c === null ? ((l = c = v), (s = f)) : (c = c.next = v),
          (o |= d);
      if (((u = u.next), u === null)) {
        if (((u = i.shared.pending), u === null)) break;
        (d = u), (u = d.next), (d.next = null), (i.lastBaseUpdate = d), (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (s = f),
      (i.baseState = s),
      (i.firstBaseUpdate = l),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    (Xn |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function lm(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        i = n.callback;
      if (i !== null) {
        if (((n.callback = null), (n = r), typeof i != "function")) throw Error(F(191, i));
        i.call(n);
      }
    }
}
var Gw = new Hx.Component().refs;
function Td(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : Me({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Gl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ai(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = dt(),
      i = ln(e),
      a = Cr(n, i);
    (a.payload = t), r != null && (a.callback = r), (t = un(e, a, i)), t !== null && (nr(t, e, i, n), Vu(t, e, i));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = dt(),
      i = ln(e),
      a = Cr(n, i);
    (a.tag = 1),
      (a.payload = t),
      r != null && (a.callback = r),
      (t = un(e, a, i)),
      t !== null && (nr(t, e, i, n), Vu(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = dt(),
      n = ln(e),
      i = Cr(r, n);
    (i.tag = 2), t != null && (i.callback = t), (t = un(e, i, n)), t !== null && (nr(t, e, n, r), Vu(t, e, n));
  },
};
function cm(e, t, r, n, i, a, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, a, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !So(r, n) || !So(i, a)
      : !0
  );
}
function Vw(e, t, r) {
  var n = !1,
    i = vn,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = Ht(a))
      : ((i = bt(t) ? Qn : ut.current), (n = t.contextTypes), (a = (n = n != null) ? Qi(e, i) : vn)),
    (t = new t(r, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Gl),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function fm(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Gl.enqueueReplaceState(t, t.state, null);
}
function Cd(e, t, r, n) {
  var i = e.stateNode;
  (i.props = r), (i.state = e.memoizedState), (i.refs = Gw), Jp(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? (i.context = Ht(a)) : ((a = bt(t) ? Qn : ut.current), (i.context = Qi(e, a))),
    (i.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (Td(e, t, a, r), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
      t !== i.state && Gl.enqueueReplaceState(i, i.state, null),
      $s(e, r, i, n),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ia(e, t, r) {
  if (((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(F(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(F(147, e));
      var i = n,
        a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a
        ? t.ref
        : ((t = function (o) {
            var u = i.refs;
            u === Gw && (u = i.refs = {}), o === null ? delete u[a] : (u[a] = o);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error(F(284));
    if (!r._owner) throw Error(F(290, e));
  }
  return e;
}
function Eu(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(F(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
  );
}
function dm(e) {
  var t = e._init;
  return t(e._payload);
}
function Qw(e) {
  function t(p, x) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [x]), (p.flags |= 16)) : m.push(x);
    }
  }
  function r(p, x) {
    if (!e) return null;
    for (; x !== null; ) t(p, x), (x = x.sibling);
    return null;
  }
  function n(p, x) {
    for (p = new Map(); x !== null; ) x.key !== null ? p.set(x.key, x) : p.set(x.index, x), (x = x.sibling);
    return p;
  }
  function i(p, x) {
    return (p = cn(p, x)), (p.index = 0), (p.sibling = null), p;
  }
  function a(p, x, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate), m !== null ? ((m = m.index), m < x ? ((p.flags |= 2), x) : m) : ((p.flags |= 2), x))
        : ((p.flags |= 1048576), x)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, x, m, g) {
    return x === null || x.tag !== 6 ? ((x = df(m, p.mode, g)), (x.return = p), x) : ((x = i(x, m)), (x.return = p), x);
  }
  function s(p, x, m, g) {
    var b = m.type;
    return b === Si
      ? c(p, x, m.props.children, g, m.key)
      : x !== null &&
        (x.elementType === b || (typeof b == "object" && b !== null && b.$$typeof === Vr && dm(b) === x.type))
      ? ((g = i(x, m.props)), (g.ref = Ia(p, x, m)), (g.return = p), g)
      : ((g = Zu(m.type, m.key, m.props, null, p.mode, g)), (g.ref = Ia(p, x, m)), (g.return = p), g);
  }
  function l(p, x, m, g) {
    return x === null ||
      x.tag !== 4 ||
      x.stateNode.containerInfo !== m.containerInfo ||
      x.stateNode.implementation !== m.implementation
      ? ((x = hf(m, p.mode, g)), (x.return = p), x)
      : ((x = i(x, m.children || [])), (x.return = p), x);
  }
  function c(p, x, m, g, b) {
    return x === null || x.tag !== 7
      ? ((x = Gn(m, p.mode, g, b)), (x.return = p), x)
      : ((x = i(x, m)), (x.return = p), x);
  }
  function f(p, x, m) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (x = df("" + x, p.mode, m)), (x.return = p), x;
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case pu:
          return (m = Zu(x.type, x.key, x.props, null, p.mode, m)), (m.ref = Ia(p, null, x)), (m.return = p), m;
        case _i:
          return (x = hf(x, p.mode, m)), (x.return = p), x;
        case Vr:
          var g = x._init;
          return f(p, g(x._payload), m);
      }
      if (Ja(x) || Ta(x)) return (x = Gn(x, p.mode, m, null)), (x.return = p), x;
      Eu(p, x);
    }
    return null;
  }
  function d(p, x, m, g) {
    var b = x !== null ? x.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number") return b !== null ? null : u(p, x, "" + m, g);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case pu:
          return m.key === b ? s(p, x, m, g) : null;
        case _i:
          return m.key === b ? l(p, x, m, g) : null;
        case Vr:
          return (b = m._init), d(p, x, b(m._payload), g);
      }
      if (Ja(m) || Ta(m)) return b !== null ? null : c(p, x, m, g, null);
      Eu(p, m);
    }
    return null;
  }
  function v(p, x, m, g, b) {
    if ((typeof g == "string" && g !== "") || typeof g == "number") return (p = p.get(m) || null), u(x, p, "" + g, b);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case pu:
          return (p = p.get(g.key === null ? m : g.key) || null), s(x, p, g, b);
        case _i:
          return (p = p.get(g.key === null ? m : g.key) || null), l(x, p, g, b);
        case Vr:
          var _ = g._init;
          return v(p, x, m, _(g._payload), b);
      }
      if (Ja(g) || Ta(g)) return (p = p.get(m) || null), c(x, p, g, b, null);
      Eu(x, g);
    }
    return null;
  }
  function y(p, x, m, g) {
    for (var b = null, _ = null, S = x, O = (x = 0), E = null; S !== null && O < m.length; O++) {
      S.index > O ? ((E = S), (S = null)) : (E = S.sibling);
      var A = d(p, S, m[O], g);
      if (A === null) {
        S === null && (S = E);
        break;
      }
      e && S && A.alternate === null && t(p, S),
        (x = a(A, x, O)),
        _ === null ? (b = A) : (_.sibling = A),
        (_ = A),
        (S = E);
    }
    if (O === m.length) return r(p, S), Ee && Pn(p, O), b;
    if (S === null) {
      for (; O < m.length; O++)
        (S = f(p, m[O], g)), S !== null && ((x = a(S, x, O)), _ === null ? (b = S) : (_.sibling = S), (_ = S));
      return Ee && Pn(p, O), b;
    }
    for (S = n(p, S); O < m.length; O++)
      (E = v(S, p, O, m[O], g)),
        E !== null &&
          (e && E.alternate !== null && S.delete(E.key === null ? O : E.key),
          (x = a(E, x, O)),
          _ === null ? (b = E) : (_.sibling = E),
          (_ = E));
    return (
      e &&
        S.forEach(function (k) {
          return t(p, k);
        }),
      Ee && Pn(p, O),
      b
    );
  }
  function h(p, x, m, g) {
    var b = Ta(m);
    if (typeof b != "function") throw Error(F(150));
    if (((m = b.call(m)), m == null)) throw Error(F(151));
    for (var _ = (b = null), S = x, O = (x = 0), E = null, A = m.next(); S !== null && !A.done; O++, A = m.next()) {
      S.index > O ? ((E = S), (S = null)) : (E = S.sibling);
      var k = d(p, S, A.value, g);
      if (k === null) {
        S === null && (S = E);
        break;
      }
      e && S && k.alternate === null && t(p, S),
        (x = a(k, x, O)),
        _ === null ? (b = k) : (_.sibling = k),
        (_ = k),
        (S = E);
    }
    if (A.done) return r(p, S), Ee && Pn(p, O), b;
    if (S === null) {
      for (; !A.done; O++, A = m.next())
        (A = f(p, A.value, g)), A !== null && ((x = a(A, x, O)), _ === null ? (b = A) : (_.sibling = A), (_ = A));
      return Ee && Pn(p, O), b;
    }
    for (S = n(p, S); !A.done; O++, A = m.next())
      (A = v(S, p, O, A.value, g)),
        A !== null &&
          (e && A.alternate !== null && S.delete(A.key === null ? O : A.key),
          (x = a(A, x, O)),
          _ === null ? (b = A) : (_.sibling = A),
          (_ = A));
    return (
      e &&
        S.forEach(function (C) {
          return t(p, C);
        }),
      Ee && Pn(p, O),
      b
    );
  }
  function w(p, x, m, g) {
    if (
      (typeof m == "object" && m !== null && m.type === Si && m.key === null && (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case pu:
          e: {
            for (var b = m.key, _ = x; _ !== null; ) {
              if (_.key === b) {
                if (((b = m.type), b === Si)) {
                  if (_.tag === 7) {
                    r(p, _.sibling), (x = i(_, m.props.children)), (x.return = p), (p = x);
                    break e;
                  }
                } else if (
                  _.elementType === b ||
                  (typeof b == "object" && b !== null && b.$$typeof === Vr && dm(b) === _.type)
                ) {
                  r(p, _.sibling), (x = i(_, m.props)), (x.ref = Ia(p, _, m)), (x.return = p), (p = x);
                  break e;
                }
                r(p, _);
                break;
              } else t(p, _);
              _ = _.sibling;
            }
            m.type === Si
              ? ((x = Gn(m.props.children, p.mode, g, m.key)), (x.return = p), (p = x))
              : ((g = Zu(m.type, m.key, m.props, null, p.mode, g)), (g.ref = Ia(p, x, m)), (g.return = p), (p = g));
          }
          return o(p);
        case _i:
          e: {
            for (_ = m.key; x !== null; ) {
              if (x.key === _)
                if (
                  x.tag === 4 &&
                  x.stateNode.containerInfo === m.containerInfo &&
                  x.stateNode.implementation === m.implementation
                ) {
                  r(p, x.sibling), (x = i(x, m.children || [])), (x.return = p), (p = x);
                  break e;
                } else {
                  r(p, x);
                  break;
                }
              else t(p, x);
              x = x.sibling;
            }
            (x = hf(m, p.mode, g)), (x.return = p), (p = x);
          }
          return o(p);
        case Vr:
          return (_ = m._init), w(p, x, _(m._payload), g);
      }
      if (Ja(m)) return y(p, x, m, g);
      if (Ta(m)) return h(p, x, m, g);
      Eu(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        x !== null && x.tag === 6
          ? (r(p, x.sibling), (x = i(x, m)), (x.return = p), (p = x))
          : (r(p, x), (x = df(m, p.mode, g)), (x.return = p), (p = x)),
        o(p))
      : r(p, x);
  }
  return w;
}
var Ki = Qw(!0),
  Yw = Qw(!1),
  Xo = {},
  vr = xn(Xo),
  Ao = xn(Xo),
  To = xn(Xo);
function Bn(e) {
  if (e === Xo) throw Error(F(174));
  return e;
}
function Zp(e, t) {
  switch ((ge(To, t), ge(Ao, e), ge(vr, Xo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ud(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = ud(t, e));
  }
  Se(vr), ge(vr, t);
}
function Xi() {
  Se(vr), Se(Ao), Se(To);
}
function Kw(e) {
  Bn(To.current);
  var t = Bn(vr.current),
    r = ud(t, e.type);
  t !== r && (ge(Ao, e), ge(vr, r));
}
function ev(e) {
  Ao.current === e && (Se(vr), Se(Ao));
}
var Ce = xn(0);
function Is(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (r !== null && ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var of = [];
function tv() {
  for (var e = 0; e < of.length; e++) of[e]._workInProgressVersionPrimary = null;
  of.length = 0;
}
var Qu = Dr.ReactCurrentDispatcher,
  uf = Dr.ReactCurrentBatchConfig,
  Kn = 0,
  Pe = null,
  Fe = null,
  qe = null,
  Ns = !1,
  lo = !1,
  Co = 0,
  iA = 0;
function nt() {
  throw Error(F(321));
}
function rv(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++) if (!ir(e[r], t[r])) return !1;
  return !0;
}
function nv(e, t, r, n, i, a) {
  if (
    ((Kn = a),
    (Pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Qu.current = e === null || e.memoizedState === null ? sA : lA),
    (e = r(n, i)),
    lo)
  ) {
    a = 0;
    do {
      if (((lo = !1), (Co = 0), 25 <= a)) throw Error(F(301));
      (a += 1), (qe = Fe = null), (t.updateQueue = null), (Qu.current = cA), (e = r(n, i));
    } while (lo);
  }
  if (((Qu.current = Rs), (t = Fe !== null && Fe.next !== null), (Kn = 0), (qe = Fe = Pe = null), (Ns = !1), t))
    throw Error(F(300));
  return e;
}
function iv() {
  var e = Co !== 0;
  return (Co = 0), e;
}
function sr() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return qe === null ? (Pe.memoizedState = qe = e) : (qe = qe.next = e), qe;
}
function qt() {
  if (Fe === null) {
    var e = Pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Fe.next;
  var t = qe === null ? Pe.memoizedState : qe.next;
  if (t !== null) (qe = t), (Fe = e);
  else {
    if (e === null) throw Error(F(310));
    (Fe = e),
      (e = {
        memoizedState: Fe.memoizedState,
        baseState: Fe.baseState,
        baseQueue: Fe.baseQueue,
        queue: Fe.queue,
        next: null,
      }),
      qe === null ? (Pe.memoizedState = qe = e) : (qe = qe.next = e);
  }
  return qe;
}
function Po(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function sf(e) {
  var t = qt(),
    r = t.queue;
  if (r === null) throw Error(F(311));
  r.lastRenderedReducer = e;
  var n = Fe,
    i = n.baseQueue,
    a = r.pending;
  if (a !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = a.next), (a.next = o);
    }
    (n.baseQueue = i = a), (r.pending = null);
  }
  if (i !== null) {
    (a = i.next), (n = n.baseState);
    var u = (o = null),
      s = null,
      l = a;
    do {
      var c = l.lane;
      if ((Kn & c) === c)
        s !== null &&
          (s = s.next =
            { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }),
          (n = l.hasEagerState ? l.eagerState : e(n, l.action));
      else {
        var f = { lane: c, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null };
        s === null ? ((u = s = f), (o = n)) : (s = s.next = f), (Pe.lanes |= c), (Xn |= c);
      }
      l = l.next;
    } while (l !== null && l !== a);
    s === null ? (o = n) : (s.next = u),
      ir(n, t.memoizedState) || (xt = !0),
      (t.memoizedState = n),
      (t.baseState = o),
      (t.baseQueue = s),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    i = e;
    do (a = i.lane), (Pe.lanes |= a), (Xn |= a), (i = i.next);
    while (i !== e);
  } else i === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function lf(e) {
  var t = qt(),
    r = t.queue;
  if (r === null) throw Error(F(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    i = r.pending,
    a = t.memoizedState;
  if (i !== null) {
    r.pending = null;
    var o = (i = i.next);
    do (a = e(a, o.action)), (o = o.next);
    while (o !== i);
    ir(a, t.memoizedState) || (xt = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (r.lastRenderedState = a);
  }
  return [a, n];
}
function Xw() {}
function Jw(e, t) {
  var r = Pe,
    n = qt(),
    i = t(),
    a = !ir(n.memoizedState, i);
  if (
    (a && ((n.memoizedState = i), (xt = !0)),
    (n = n.queue),
    av(tb.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || a || (qe !== null && qe.memoizedState.tag & 1))
  ) {
    if (((r.flags |= 2048), Mo(9, eb.bind(null, r, n, i, t), void 0, null), Ge === null)) throw Error(F(349));
    Kn & 30 || Zw(r, t, i);
  }
  return i;
}
function Zw(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = Pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (Pe.updateQueue = t), (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function eb(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), rb(t) && nb(e);
}
function tb(e, t, r) {
  return r(function () {
    rb(t) && nb(e);
  });
}
function rb(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !ir(e, r);
  } catch {
    return !0;
  }
}
function nb(e) {
  var t = Nr(e, 1);
  t !== null && nr(t, e, 1, -1);
}
function hm(e) {
  var t = sr();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Po, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = uA.bind(null, Pe, e)),
    [t.memoizedState, e]
  );
}
function Mo(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = Pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (Pe.updateQueue = t), (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null ? (t.lastEffect = e.next = e) : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function ib() {
  return qt().memoizedState;
}
function Yu(e, t, r, n) {
  var i = sr();
  (Pe.flags |= e), (i.memoizedState = Mo(1 | t, r, void 0, n === void 0 ? null : n));
}
function Vl(e, t, r, n) {
  var i = qt();
  n = n === void 0 ? null : n;
  var a = void 0;
  if (Fe !== null) {
    var o = Fe.memoizedState;
    if (((a = o.destroy), n !== null && rv(n, o.deps))) {
      i.memoizedState = Mo(t, r, a, n);
      return;
    }
  }
  (Pe.flags |= e), (i.memoizedState = Mo(1 | t, r, a, n));
}
function pm(e, t) {
  return Yu(8390656, 8, e, t);
}
function av(e, t) {
  return Vl(2048, 8, e, t);
}
function ab(e, t) {
  return Vl(4, 2, e, t);
}
function ob(e, t) {
  return Vl(4, 4, e, t);
}
function ub(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function sb(e, t, r) {
  return (r = r != null ? r.concat([e]) : null), Vl(4, 4, ub.bind(null, t, e), r);
}
function ov() {}
function lb(e, t) {
  var r = qt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && rv(t, n[1]) ? n[0] : ((r.memoizedState = [e, t]), e);
}
function cb(e, t) {
  var r = qt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && rv(t, n[1]) ? n[0] : ((e = e()), (r.memoizedState = [e, t]), e);
}
function fb(e, t, r) {
  return Kn & 21
    ? (ir(r, t) || ((r = pw()), (Pe.lanes |= r), (Xn |= r), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (xt = !0)), (e.memoizedState = r));
}
function aA(e, t) {
  var r = de;
  (de = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = uf.transition;
  uf.transition = {};
  try {
    e(!1), t();
  } finally {
    (de = r), (uf.transition = n);
  }
}
function db() {
  return qt().memoizedState;
}
function oA(e, t, r) {
  var n = ln(e);
  if (((r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }), hb(e))) pb(t, r);
  else if (((r = Hw(e, t, r, n)), r !== null)) {
    var i = dt();
    nr(r, e, n, i), vb(r, t, n);
  }
}
function uA(e, t, r) {
  var n = ln(e),
    i = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (hb(e)) pb(t, i);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && ((a = t.lastRenderedReducer), a !== null))
      try {
        var o = t.lastRenderedState,
          u = a(o, r);
        if (((i.hasEagerState = !0), (i.eagerState = u), ir(u, o))) {
          var s = t.interleaved;
          s === null ? ((i.next = i), Xp(t)) : ((i.next = s.next), (s.next = i)), (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (r = Hw(e, t, i, n)), r !== null && ((i = dt()), nr(r, e, n, i), vb(r, t, n));
  }
}
function hb(e) {
  var t = e.alternate;
  return e === Pe || (t !== null && t === Pe);
}
function pb(e, t) {
  lo = Ns = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t);
}
function vb(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Dp(e, r);
  }
}
var Rs = {
    readContext: Ht,
    useCallback: nt,
    useContext: nt,
    useEffect: nt,
    useImperativeHandle: nt,
    useInsertionEffect: nt,
    useLayoutEffect: nt,
    useMemo: nt,
    useReducer: nt,
    useRef: nt,
    useState: nt,
    useDebugValue: nt,
    useDeferredValue: nt,
    useTransition: nt,
    useMutableSource: nt,
    useSyncExternalStore: nt,
    useId: nt,
    unstable_isNewReconciler: !1,
  },
  sA = {
    readContext: Ht,
    useCallback: function (e, t) {
      return (sr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ht,
    useEffect: pm,
    useImperativeHandle: function (e, t, r) {
      return (r = r != null ? r.concat([e]) : null), Yu(4194308, 4, ub.bind(null, t, e), r);
    },
    useLayoutEffect: function (e, t) {
      return Yu(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Yu(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = sr();
      return (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, r) {
      var n = sr();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = oA.bind(null, Pe, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = sr();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: hm,
    useDebugValue: ov,
    useDeferredValue: function (e) {
      return (sr().memoizedState = e);
    },
    useTransition: function () {
      var e = hm(!1),
        t = e[0];
      return (e = aA.bind(null, e[1])), (sr().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = Pe,
        i = sr();
      if (Ee) {
        if (r === void 0) throw Error(F(407));
        r = r();
      } else {
        if (((r = t()), Ge === null)) throw Error(F(349));
        Kn & 30 || Zw(n, t, r);
      }
      i.memoizedState = r;
      var a = { value: r, getSnapshot: t };
      return (
        (i.queue = a),
        pm(tb.bind(null, n, a, e), [e]),
        (n.flags |= 2048),
        Mo(9, eb.bind(null, n, a, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = sr(),
        t = Ge.identifierPrefix;
      if (Ee) {
        var r = Er,
          n = Or;
        (r = (n & ~(1 << (32 - rr(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = Co++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = iA++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  lA = {
    readContext: Ht,
    useCallback: lb,
    useContext: Ht,
    useEffect: av,
    useImperativeHandle: sb,
    useInsertionEffect: ab,
    useLayoutEffect: ob,
    useMemo: cb,
    useReducer: sf,
    useRef: ib,
    useState: function () {
      return sf(Po);
    },
    useDebugValue: ov,
    useDeferredValue: function (e) {
      var t = qt();
      return fb(t, Fe.memoizedState, e);
    },
    useTransition: function () {
      var e = sf(Po)[0],
        t = qt().memoizedState;
      return [e, t];
    },
    useMutableSource: Xw,
    useSyncExternalStore: Jw,
    useId: db,
    unstable_isNewReconciler: !1,
  },
  cA = {
    readContext: Ht,
    useCallback: lb,
    useContext: Ht,
    useEffect: av,
    useImperativeHandle: sb,
    useInsertionEffect: ab,
    useLayoutEffect: ob,
    useMemo: cb,
    useReducer: lf,
    useRef: ib,
    useState: function () {
      return lf(Po);
    },
    useDebugValue: ov,
    useDeferredValue: function (e) {
      var t = qt();
      return Fe === null ? (t.memoizedState = e) : fb(t, Fe.memoizedState, e);
    },
    useTransition: function () {
      var e = lf(Po)[0],
        t = qt().memoizedState;
      return [e, t];
    },
    useMutableSource: Xw,
    useSyncExternalStore: Jw,
    useId: db,
    unstable_isNewReconciler: !1,
  };
function Ji(e, t) {
  try {
    var r = "",
      n = t;
    do (r += LE(n)), (n = n.return);
    while (n);
    var i = r;
  } catch (a) {
    i =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function cf(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function Pd(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var fA = typeof WeakMap == "function" ? WeakMap : Map;
function yb(e, t, r) {
  (r = Cr(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      Ds || ((Ds = !0), (Bd = n)), Pd(e, t);
    }),
    r
  );
}
function mb(e, t, r) {
  (r = Cr(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = t.value;
    (r.payload = function () {
      return n(i);
    }),
      (r.callback = function () {
        Pd(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (r.callback = function () {
        Pd(e, t), typeof n != "function" && (sn === null ? (sn = new Set([this])) : sn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
      }),
    r
  );
}
function vm(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new fA();
    var i = new Set();
    n.set(t, i);
  } else (i = n.get(t)), i === void 0 && ((i = new Set()), n.set(t, i));
  i.has(r) || (i.add(r), (e = EA.bind(null, e, t, r)), t.then(e, e));
}
function ym(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function mm(e, t, r, n, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 && (r.alternate === null ? (r.tag = 17) : ((t = Cr(-1, 1)), (t.tag = 2), un(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var dA = Dr.ReactCurrentOwner,
  xt = !1;
function st(e, t, r, n) {
  t.child = e === null ? Yw(t, null, r, n) : Ki(t, e.child, r, n);
}
function gm(e, t, r, n, i) {
  r = r.render;
  var a = t.ref;
  return (
    Ui(t, i),
    (n = nv(e, t, r, n, a, i)),
    (r = iv()),
    e !== null && !xt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Rr(e, t, i))
      : (Ee && r && qp(t), (t.flags |= 1), st(e, t, n, i), t.child)
  );
}
function xm(e, t, r, n, i) {
  if (e === null) {
    var a = r.type;
    return typeof a == "function" &&
      !pv(a) &&
      a.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), gb(e, t, a, n, i))
      : ((e = Zu(r.type, null, n, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((a = e.child), !(e.lanes & i))) {
    var o = a.memoizedProps;
    if (((r = r.compare), (r = r !== null ? r : So), r(o, n) && e.ref === t.ref)) return Rr(e, t, i);
  }
  return (t.flags |= 1), (e = cn(a, n)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function gb(e, t, r, n, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (So(a, n) && e.ref === t.ref)
      if (((xt = !1), (t.pendingProps = n = a), (e.lanes & i) !== 0)) e.flags & 131072 && (xt = !0);
      else return (t.lanes = e.lanes), Rr(e, t, i);
  }
  return Md(e, t, r, n, i);
}
function xb(e, t, r) {
  var n = t.pendingProps,
    i = n.children,
    a = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), ge(Ii, Et), (Et |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          ge(Ii, Et),
          (Et |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = a !== null ? a.baseLanes : r),
        ge(Ii, Et),
        (Et |= n);
    }
  else a !== null ? ((n = a.baseLanes | r), (t.memoizedState = null)) : (n = r), ge(Ii, Et), (Et |= n);
  return st(e, t, i, r), t.child;
}
function wb(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function Md(e, t, r, n, i) {
  var a = bt(r) ? Qn : ut.current;
  return (
    (a = Qi(t, a)),
    Ui(t, i),
    (r = nv(e, t, r, n, a, i)),
    (n = iv()),
    e !== null && !xt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Rr(e, t, i))
      : (Ee && n && qp(t), (t.flags |= 1), st(e, t, r, i), t.child)
  );
}
function wm(e, t, r, n, i) {
  if (bt(r)) {
    var a = !0;
    As(t);
  } else a = !1;
  if ((Ui(t, i), t.stateNode === null)) Ku(e, t), Vw(t, r, n), Cd(t, r, n, i), (n = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      l = r.contextType;
    typeof l == "object" && l !== null ? (l = Ht(l)) : ((l = bt(r) ? Qn : ut.current), (l = Qi(t, l)));
    var c = r.getDerivedStateFromProps,
      f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function") ||
      ((u !== n || s !== l) && fm(t, o, n, l)),
      (Qr = !1);
    var d = t.memoizedState;
    (o.state = d),
      $s(t, n, o, i),
      (s = t.memoizedState),
      u !== n || d !== s || wt.current || Qr
        ? (typeof c == "function" && (Td(t, r, c, n), (s = t.memoizedState)),
          (u = Qr || cm(t, r, u, n, d, s, l))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = s)),
          (o.props = n),
          (o.state = s),
          (o.context = l),
          (n = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), (n = !1));
  } else {
    (o = t.stateNode),
      qw(e, t),
      (u = t.memoizedProps),
      (l = t.type === t.elementType ? u : Jt(t.type, u)),
      (o.props = l),
      (f = t.pendingProps),
      (d = o.context),
      (s = r.contextType),
      typeof s == "object" && s !== null ? (s = Ht(s)) : ((s = bt(r) ? Qn : ut.current), (s = Qi(t, s)));
    var v = r.getDerivedStateFromProps;
    (c = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function") ||
      ((u !== f || d !== s) && fm(t, o, n, s)),
      (Qr = !1),
      (d = t.memoizedState),
      (o.state = d),
      $s(t, n, o, i);
    var y = t.memoizedState;
    u !== f || d !== y || wt.current || Qr
      ? (typeof v == "function" && (Td(t, r, v, n), (y = t.memoizedState)),
        (l = Qr || cm(t, r, l, n, d, y, s) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(n, y, s),
              typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(n, y, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = y)),
        (o.props = n),
        (o.state = y),
        (o.context = s),
        (n = l))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return $d(e, t, r, n, a, i);
}
function $d(e, t, r, n, i, a) {
  wb(e, t);
  var o = (t.flags & 128) !== 0;
  if (!n && !o) return i && am(t, r, !1), Rr(e, t, a);
  (n = t.stateNode), (dA.current = t);
  var u = o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && o ? ((t.child = Ki(t, e.child, null, a)), (t.child = Ki(t, null, u, a))) : st(e, t, u, a),
    (t.memoizedState = n.state),
    i && am(t, r, !0),
    t.child
  );
}
function bb(e) {
  var t = e.stateNode;
  t.pendingContext ? im(e, t.pendingContext, t.pendingContext !== t.context) : t.context && im(e, t.context, !1),
    Zp(e, t.containerInfo);
}
function bm(e, t, r, n, i) {
  return Yi(), Vp(i), (t.flags |= 256), st(e, t, r, n), t.child;
}
var Id = { dehydrated: null, treeContext: null, retryLane: 0 };
function Nd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function _b(e, t, r) {
  var n = t.pendingProps,
    i = Ce.current,
    a = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    u ? ((a = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
    ge(Ce, i & 1),
    e === null)
  )
    return (
      kd(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((o = n.children),
          (e = n.fallback),
          a
            ? ((n = t.mode),
              (a = t.child),
              (o = { mode: "hidden", children: o }),
              !(n & 1) && a !== null ? ((a.childLanes = 0), (a.pendingProps = o)) : (a = Kl(o, n, 0, null)),
              (e = Gn(e, n, r, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = Nd(r)),
              (t.memoizedState = Id),
              e)
            : uv(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((u = i.dehydrated), u !== null))) return hA(e, t, o, n, u, i, r);
  if (a) {
    (a = n.fallback), (o = t.mode), (i = e.child), (u = i.sibling);
    var s = { mode: "hidden", children: n.children };
    return (
      !(o & 1) && t.child !== i
        ? ((n = t.child), (n.childLanes = 0), (n.pendingProps = s), (t.deletions = null))
        : ((n = cn(i, s)), (n.subtreeFlags = i.subtreeFlags & 14680064)),
      u !== null ? (a = cn(u, a)) : ((a = Gn(a, o, r, null)), (a.flags |= 2)),
      (a.return = t),
      (n.return = t),
      (n.sibling = a),
      (t.child = n),
      (n = a),
      (a = t.child),
      (o = e.child.memoizedState),
      (o = o === null ? Nd(r) : { baseLanes: o.baseLanes | r, cachePool: null, transitions: o.transitions }),
      (a.memoizedState = o),
      (a.childLanes = e.childLanes & ~r),
      (t.memoizedState = Id),
      n
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (n = cn(a, { mode: "visible", children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null && ((r = t.deletions), r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function uv(e, t) {
  return (t = Kl({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function ku(e, t, r, n) {
  return (
    n !== null && Vp(n),
    Ki(t, e.child, null, r),
    (e = uv(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function hA(e, t, r, n, i, a, o) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = cf(Error(F(422)))), ku(e, t, o, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = n.fallback),
        (i = t.mode),
        (n = Kl({ mode: "visible", children: n.children }, i, 0, null)),
        (a = Gn(a, i, o, null)),
        (a.flags |= 2),
        (n.return = t),
        (a.return = t),
        (n.sibling = a),
        (t.child = n),
        t.mode & 1 && Ki(t, e.child, null, o),
        (t.child.memoizedState = Nd(o)),
        (t.memoizedState = Id),
        a);
  if (!(t.mode & 1)) return ku(e, t, o, null);
  if (i.data === "$!") {
    if (((n = i.nextSibling && i.nextSibling.dataset), n)) var u = n.dgst;
    return (n = u), (a = Error(F(419))), (n = cf(a, n, void 0)), ku(e, t, o, n);
  }
  if (((u = (o & e.childLanes) !== 0), xt || u)) {
    if (((n = Ge), n !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (n.suspendedLanes | o) ? 0 : i),
        i !== 0 && i !== a.retryLane && ((a.retryLane = i), Nr(e, i), nr(n, e, i, -1));
    }
    return hv(), (n = cf(Error(F(421)))), ku(e, t, o, n);
  }
  return i.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = kA.bind(null, e)), (i._reactRetry = t), null)
    : ((e = a.treeContext),
      (Tt = on(i.nextSibling)),
      (Pt = t),
      (Ee = !0),
      (tr = null),
      e !== null && ((Ft[Bt++] = Or), (Ft[Bt++] = Er), (Ft[Bt++] = Yn), (Or = e.id), (Er = e.overflow), (Yn = t)),
      (t = uv(t, n.children)),
      (t.flags |= 4096),
      t);
}
function _m(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Ad(e.return, t, r);
}
function ff(e, t, r, n, i) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: i })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = n),
      (a.tail = r),
      (a.tailMode = i));
}
function Sb(e, t, r) {
  var n = t.pendingProps,
    i = n.revealOrder,
    a = n.tail;
  if ((st(e, t, n.children, r), (n = Ce.current), n & 2)) (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && _m(e, r, t);
        else if (e.tag === 19) _m(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((ge(Ce, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (r = t.child, i = null; r !== null; )
          (e = r.alternate), e !== null && Is(e) === null && (i = r), (r = r.sibling);
        (r = i),
          r === null ? ((i = t.child), (t.child = null)) : ((i = r.sibling), (r.sibling = null)),
          ff(t, !1, i, r, a);
        break;
      case "backwards":
        for (r = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Is(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = r), (r = i), (i = e);
        }
        ff(t, !0, r, null, a);
        break;
      case "together":
        ff(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ku(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Rr(e, t, r) {
  if ((e !== null && (t.dependencies = e.dependencies), (Xn |= t.lanes), !(r & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(F(153));
  if (t.child !== null) {
    for (e = t.child, r = cn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
      (e = e.sibling), (r = r.sibling = cn(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function pA(e, t, r) {
  switch (t.tag) {
    case 3:
      bb(t), Yi();
      break;
    case 5:
      Kw(t);
      break;
    case 1:
      bt(t.type) && As(t);
      break;
    case 4:
      Zp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        i = t.memoizedProps.value;
      ge(Ps, n._currentValue), (n._currentValue = i);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (ge(Ce, Ce.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? _b(e, t, r)
          : (ge(Ce, Ce.current & 1), (e = Rr(e, t, r)), e !== null ? e.sibling : null);
      ge(Ce, Ce.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return Sb(e, t, r);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ge(Ce, Ce.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), xb(e, t, r);
  }
  return Rr(e, t, r);
}
var Ob, Rd, Eb, kb;
Ob = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
Rd = function () {};
Eb = function (e, t, r, n) {
  var i = e.memoizedProps;
  if (i !== n) {
    (e = t.stateNode), Bn(vr.current);
    var a = null;
    switch (r) {
      case "input":
        (i = nd(e, i)), (n = nd(e, n)), (a = []);
        break;
      case "select":
        (i = Me({}, i, { value: void 0 })), (n = Me({}, n, { value: void 0 })), (a = []);
        break;
      case "textarea":
        (i = od(e, i)), (n = od(e, n)), (a = []);
        break;
      default:
        typeof i.onClick != "function" && typeof n.onClick == "function" && (e.onclick = Es);
    }
    sd(r, n);
    var o;
    r = null;
    for (l in i)
      if (!n.hasOwnProperty(l) && i.hasOwnProperty(l) && i[l] != null)
        if (l === "style") {
          var u = i[l];
          for (o in u) u.hasOwnProperty(o) && (r || (r = {}), (r[o] = ""));
        } else
          l !== "dangerouslySetInnerHTML" &&
            l !== "children" &&
            l !== "suppressContentEditableWarning" &&
            l !== "suppressHydrationWarning" &&
            l !== "autoFocus" &&
            (yo.hasOwnProperty(l) ? a || (a = []) : (a = a || []).push(l, null));
    for (l in n) {
      var s = n[l];
      if (((u = i != null ? i[l] : void 0), n.hasOwnProperty(l) && s !== u && (s != null || u != null)))
        if (l === "style")
          if (u) {
            for (o in u) !u.hasOwnProperty(o) || (s && s.hasOwnProperty(o)) || (r || (r = {}), (r[o] = ""));
            for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (r || (r = {}), (r[o] = s[o]));
          } else r || (a || (a = []), a.push(l, r)), (r = s);
        else
          l === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (a = a || []).push(l, s))
            : l === "children"
            ? (typeof s != "string" && typeof s != "number") || (a = a || []).push(l, "" + s)
            : l !== "suppressContentEditableWarning" &&
              l !== "suppressHydrationWarning" &&
              (yo.hasOwnProperty(l)
                ? (s != null && l === "onScroll" && we("scroll", e), a || u === s || (a = []))
                : (a = a || []).push(l, s));
    }
    r && (a = a || []).push("style", r);
    var l = a;
    (t.updateQueue = l) && (t.flags |= 4);
  }
};
kb = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function Na(e, t) {
  if (!Ee)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; ) r.alternate !== null && (n = r), (r = r.sibling);
        n === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (n.sibling = null);
    }
}
function it(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags & 14680064),
        (n |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes), (n |= i.subtreeFlags), (n |= i.flags), (i.return = e), (i = i.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function vA(e, t, r) {
  var n = t.pendingProps;
  switch ((Gp(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return it(t), null;
    case 1:
      return bt(t.type) && ks(), it(t), null;
    case 3:
      return (
        (n = t.stateNode),
        Xi(),
        Se(wt),
        Se(ut),
        tv(),
        n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ou(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), tr !== null && (Wd(tr), (tr = null)))),
        Rd(e, t),
        it(t),
        null
      );
    case 5:
      ev(t);
      var i = Bn(To.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        Eb(e, t, r, n, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(F(166));
          return it(t), null;
        }
        if (((e = Bn(vr.current)), Ou(t))) {
          (n = t.stateNode), (r = t.type);
          var a = t.memoizedProps;
          switch (((n[lr] = t), (n[ko] = a), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              we("cancel", n), we("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              we("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < eo.length; i++) we(eo[i], n);
              break;
            case "source":
              we("error", n);
              break;
            case "img":
            case "image":
            case "link":
              we("error", n), we("load", n);
              break;
            case "details":
              we("toggle", n);
              break;
            case "input":
              My(n, a), we("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!a.multiple }), we("invalid", n);
              break;
            case "textarea":
              Iy(n, a), we("invalid", n);
          }
          sd(r, a), (i = null);
          for (var o in a)
            if (a.hasOwnProperty(o)) {
              var u = a[o];
              o === "children"
                ? typeof u == "string"
                  ? n.textContent !== u &&
                    (a.suppressHydrationWarning !== !0 && Su(n.textContent, u, e), (i = ["children", u]))
                  : typeof u == "number" &&
                    n.textContent !== "" + u &&
                    (a.suppressHydrationWarning !== !0 && Su(n.textContent, u, e), (i = ["children", "" + u]))
                : yo.hasOwnProperty(o) && u != null && o === "onScroll" && we("scroll", n);
            }
          switch (r) {
            case "input":
              vu(n), $y(n, a, !0);
              break;
            case "textarea":
              vu(n), Ny(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (n.onclick = Es);
          }
          (n = i), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Zx(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = o.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                ? (e = o.createElement(r, { is: n.is }))
                : ((e = o.createElement(r)),
                  r === "select" && ((o = e), n.multiple ? (o.multiple = !0) : n.size && (o.size = n.size)))
              : (e = o.createElementNS(e, r)),
            (e[lr] = t),
            (e[ko] = n),
            Ob(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ld(r, n)), r)) {
              case "dialog":
                we("cancel", e), we("close", e), (i = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                we("load", e), (i = n);
                break;
              case "video":
              case "audio":
                for (i = 0; i < eo.length; i++) we(eo[i], e);
                i = n;
                break;
              case "source":
                we("error", e), (i = n);
                break;
              case "img":
              case "image":
              case "link":
                we("error", e), we("load", e), (i = n);
                break;
              case "details":
                we("toggle", e), (i = n);
                break;
              case "input":
                My(e, n), (i = nd(e, n)), we("invalid", e);
                break;
              case "option":
                i = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }), (i = Me({}, n, { value: void 0 })), we("invalid", e);
                break;
              case "textarea":
                Iy(e, n), (i = od(e, n)), we("invalid", e);
                break;
              default:
                i = n;
            }
            sd(r, i), (u = i);
            for (a in u)
              if (u.hasOwnProperty(a)) {
                var s = u[a];
                a === "style"
                  ? rw(e, s)
                  : a === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ew(e, s))
                  : a === "children"
                  ? typeof s == "string"
                    ? (r !== "textarea" || s !== "") && mo(e, s)
                    : typeof s == "number" && mo(e, "" + s)
                  : a !== "suppressContentEditableWarning" &&
                    a !== "suppressHydrationWarning" &&
                    a !== "autoFocus" &&
                    (yo.hasOwnProperty(a)
                      ? s != null && a === "onScroll" && we("scroll", e)
                      : s != null && Mp(e, a, s, o));
              }
            switch (r) {
              case "input":
                vu(e), $y(e, n, !1);
                break;
              case "textarea":
                vu(e), Ny(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + pn(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (a = n.value),
                  a != null
                    ? Di(e, !!n.multiple, a, !1)
                    : n.defaultValue != null && Di(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Es);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return it(t), null;
    case 6:
      if (e && t.stateNode != null) kb(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(F(166));
        if (((r = Bn(To.current)), Bn(vr.current), Ou(t))) {
          if (
            ((n = t.stateNode), (r = t.memoizedProps), (n[lr] = t), (a = n.nodeValue !== r) && ((e = Pt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Su(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Su(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)), (n[lr] = t), (t.stateNode = n);
      }
      return it(t), null;
    case 13:
      if (
        (Se(Ce), (n = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ee && Tt !== null && t.mode & 1 && !(t.flags & 128)) Ww(), Yi(), (t.flags |= 98560), (a = !1);
        else if (((a = Ou(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(F(318));
            if (((a = t.memoizedState), (a = a !== null ? a.dehydrated : null), !a)) throw Error(F(317));
            a[lr] = t;
          } else Yi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          it(t), (a = !1);
        } else tr !== null && (Wd(tr), (tr = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || Ce.current & 1 ? Be === 0 && (Be = 3) : hv())),
          t.updateQueue !== null && (t.flags |= 4),
          it(t),
          null);
    case 4:
      return Xi(), Rd(e, t), e === null && Oo(t.stateNode.containerInfo), it(t), null;
    case 10:
      return Kp(t.type._context), it(t), null;
    case 17:
      return bt(t.type) && ks(), it(t), null;
    case 19:
      if ((Se(Ce), (a = t.memoizedState), a === null)) return it(t), null;
      if (((n = (t.flags & 128) !== 0), (o = a.rendering), o === null))
        if (n) Na(a, !1);
        else {
          if (Be !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Is(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Na(a, !1),
                    n = o.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (a = r),
                    (e = n),
                    (a.flags &= 14680066),
                    (o = a.alternate),
                    o === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = o.childLanes),
                        (a.lanes = o.lanes),
                        (a.child = o.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = o.memoizedProps),
                        (a.memoizedState = o.memoizedState),
                        (a.updateQueue = o.updateQueue),
                        (a.type = o.type),
                        (e = o.dependencies),
                        (a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (r = r.sibling);
                return ge(Ce, (Ce.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null && Re() > Zi && ((t.flags |= 128), (n = !0), Na(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = Is(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Na(a, !0),
              a.tail === null && a.tailMode === "hidden" && !o.alternate && !Ee)
            )
              return it(t), null;
          } else
            2 * Re() - a.renderingStartTime > Zi &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), Na(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((r = a.last), r !== null ? (r.sibling = o) : (t.child = o), (a.last = o));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = Re()),
          (t.sibling = null),
          (r = Ce.current),
          ge(Ce, n ? (r & 1) | 2 : r & 1),
          t)
        : (it(t), null);
    case 22:
    case 23:
      return (
        dv(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1 ? Et & 1073741824 && (it(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : it(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function yA(e, t) {
  switch ((Gp(t), t.tag)) {
    case 1:
      return bt(t.type) && ks(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return (
        Xi(), Se(wt), Se(ut), tv(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ev(t), null;
    case 13:
      if ((Se(Ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(F(340));
        Yi();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return Se(Ce), null;
    case 4:
      return Xi(), null;
    case 10:
      return Kp(t.type._context), null;
    case 22:
    case 23:
      return dv(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Au = !1,
  ot = !1,
  mA = typeof WeakSet == "function" ? WeakSet : Set,
  q = null;
function $i(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        Ie(e, t, n);
      }
    else r.current = null;
}
function jd(e, t, r) {
  try {
    r();
  } catch (n) {
    Ie(e, t, n);
  }
}
var Sm = !1;
function gA(e, t) {
  if (((xd = _s), (e = Pw()), Hp(e))) {
    if ("selectionStart" in e) var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var i = n.anchorOffset,
            a = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, a.nodeType;
          } catch {
            r = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            l = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var v;
              f !== r || (i !== 0 && f.nodeType !== 3) || (u = o + i),
                f !== a || (n !== 0 && f.nodeType !== 3) || (s = o + n),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (v = f.firstChild) !== null;

            )
              (d = f), (f = v);
            for (;;) {
              if (f === e) break t;
              if ((d === r && ++l === i && (u = o), d === a && ++c === n && (s = o), (v = f.nextSibling) !== null))
                break;
              (f = d), (d = f.parentNode);
            }
            f = v;
          }
          r = u === -1 || s === -1 ? null : { start: u, end: s };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (wd = { focusedElem: e, selectionRange: r }, _s = !1, q = t; q !== null; )
    if (((t = q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (q = e);
    else
      for (; q !== null; ) {
        t = q;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var h = y.memoizedProps,
                    w = y.memoizedState,
                    p = t.stateNode,
                    x = p.getSnapshotBeforeUpdate(t.elementType === t.type ? h : Jt(t.type, h), w);
                  p.__reactInternalSnapshotBeforeUpdate = x;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(F(163));
            }
        } catch (g) {
          Ie(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (q = e);
          break;
        }
        q = t.return;
      }
  return (y = Sm), (Sm = !1), y;
}
function co(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var i = (n = n.next);
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        (i.destroy = void 0), a !== void 0 && jd(t, r, a);
      }
      i = i.next;
    } while (i !== n);
  }
}
function Ql(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function Dd(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ab(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ab(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[lr], delete t[ko], delete t[Sd], delete t[eA], delete t[tA])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Tb(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Om(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Tb(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ld(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8 ? ((t = r.parentNode), t.insertBefore(e, r)) : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = Es));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Ld(e, t, r), e = e.sibling; e !== null; ) Ld(e, t, r), (e = e.sibling);
}
function Fd(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Fd(e, t, r), e = e.sibling; e !== null; ) Fd(e, t, r), (e = e.sibling);
}
var Xe = null,
  Zt = !1;
function Fr(e, t, r) {
  for (r = r.child; r !== null; ) Cb(e, t, r), (r = r.sibling);
}
function Cb(e, t, r) {
  if (pr && typeof pr.onCommitFiberUnmount == "function")
    try {
      pr.onCommitFiberUnmount(Bl, r);
    } catch {}
  switch (r.tag) {
    case 5:
      ot || $i(r, t);
    case 6:
      var n = Xe,
        i = Zt;
      (Xe = null),
        Fr(e, t, r),
        (Xe = n),
        (Zt = i),
        Xe !== null &&
          (Zt
            ? ((e = Xe), (r = r.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : Xe.removeChild(r.stateNode));
      break;
    case 18:
      Xe !== null &&
        (Zt
          ? ((e = Xe), (r = r.stateNode), e.nodeType === 8 ? nf(e.parentNode, r) : e.nodeType === 1 && nf(e, r), bo(e))
          : nf(Xe, r.stateNode));
      break;
    case 4:
      (n = Xe), (i = Zt), (Xe = r.stateNode.containerInfo), (Zt = !0), Fr(e, t, r), (Xe = n), (Zt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ot && ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))) {
        i = n = n.next;
        do {
          var a = i,
            o = a.destroy;
          (a = a.tag), o !== void 0 && (a & 2 || a & 4) && jd(r, t, o), (i = i.next);
        } while (i !== n);
      }
      Fr(e, t, r);
      break;
    case 1:
      if (!ot && ($i(r, t), (n = r.stateNode), typeof n.componentWillUnmount == "function"))
        try {
          (n.props = r.memoizedProps), (n.state = r.memoizedState), n.componentWillUnmount();
        } catch (u) {
          Ie(r, t, u);
        }
      Fr(e, t, r);
      break;
    case 21:
      Fr(e, t, r);
      break;
    case 22:
      r.mode & 1 ? ((ot = (n = ot) || r.memoizedState !== null), Fr(e, t, r), (ot = n)) : Fr(e, t, r);
      break;
    default:
      Fr(e, t, r);
  }
}
function Em(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new mA()),
      t.forEach(function (n) {
        var i = AA.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(i, i));
      });
  }
}
function Yt(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      try {
        var a = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (Xe = u.stateNode), (Zt = !1);
              break e;
            case 3:
              (Xe = u.stateNode.containerInfo), (Zt = !0);
              break e;
            case 4:
              (Xe = u.stateNode.containerInfo), (Zt = !0);
              break e;
          }
          u = u.return;
        }
        if (Xe === null) throw Error(F(160));
        Cb(a, o, i), (Xe = null), (Zt = !1);
        var s = i.alternate;
        s !== null && (s.return = null), (i.return = null);
      } catch (l) {
        Ie(i, t, l);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Pb(t, e), (t = t.sibling);
}
function Pb(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Yt(t, e), ur(e), n & 4)) {
        try {
          co(3, e, e.return), Ql(3, e);
        } catch (h) {
          Ie(e, e.return, h);
        }
        try {
          co(5, e, e.return);
        } catch (h) {
          Ie(e, e.return, h);
        }
      }
      break;
    case 1:
      Yt(t, e), ur(e), n & 512 && r !== null && $i(r, r.return);
      break;
    case 5:
      if ((Yt(t, e), ur(e), n & 512 && r !== null && $i(r, r.return), e.flags & 32)) {
        var i = e.stateNode;
        try {
          mo(i, "");
        } catch (h) {
          Ie(e, e.return, h);
        }
      }
      if (n & 4 && ((i = e.stateNode), i != null)) {
        var a = e.memoizedProps,
          o = r !== null ? r.memoizedProps : a,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && a.type === "radio" && a.name != null && Xx(i, a), ld(u, o);
            var l = ld(u, a);
            for (o = 0; o < s.length; o += 2) {
              var c = s[o],
                f = s[o + 1];
              c === "style"
                ? rw(i, f)
                : c === "dangerouslySetInnerHTML"
                ? ew(i, f)
                : c === "children"
                ? mo(i, f)
                : Mp(i, c, f, l);
            }
            switch (u) {
              case "input":
                id(i, a);
                break;
              case "textarea":
                Jx(i, a);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!a.multiple;
                var v = a.value;
                v != null
                  ? Di(i, !!a.multiple, v, !1)
                  : d !== !!a.multiple &&
                    (a.defaultValue != null
                      ? Di(i, !!a.multiple, a.defaultValue, !0)
                      : Di(i, !!a.multiple, a.multiple ? [] : "", !1));
            }
            i[ko] = a;
          } catch (h) {
            Ie(e, e.return, h);
          }
      }
      break;
    case 6:
      if ((Yt(t, e), ur(e), n & 4)) {
        if (e.stateNode === null) throw Error(F(162));
        (i = e.stateNode), (a = e.memoizedProps);
        try {
          i.nodeValue = a;
        } catch (h) {
          Ie(e, e.return, h);
        }
      }
      break;
    case 3:
      if ((Yt(t, e), ur(e), n & 4 && r !== null && r.memoizedState.isDehydrated))
        try {
          bo(t.containerInfo);
        } catch (h) {
          Ie(e, e.return, h);
        }
      break;
    case 4:
      Yt(t, e), ur(e);
      break;
    case 13:
      Yt(t, e),
        ur(e),
        (i = e.child),
        i.flags & 8192 &&
          ((a = i.memoizedState !== null),
          (i.stateNode.isHidden = a),
          !a || (i.alternate !== null && i.alternate.memoizedState !== null) || (cv = Re())),
        n & 4 && Em(e);
      break;
    case 22:
      if (
        ((c = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((ot = (l = ot) || c), Yt(t, e), (ot = l)) : Yt(t, e),
        ur(e),
        n & 8192)
      ) {
        if (((l = e.memoizedState !== null), (e.stateNode.isHidden = l) && !c && e.mode & 1))
          for (q = e, c = e.child; c !== null; ) {
            for (f = q = c; q !== null; ) {
              switch (((d = q), (v = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  co(4, d, d.return);
                  break;
                case 1:
                  $i(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (n = d), (r = d.return);
                    try {
                      (t = n), (y.props = t.memoizedProps), (y.state = t.memoizedState), y.componentWillUnmount();
                    } catch (h) {
                      Ie(n, r, h);
                    }
                  }
                  break;
                case 5:
                  $i(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Am(f);
                    continue;
                  }
              }
              v !== null ? ((v.return = d), (q = v)) : Am(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  l
                    ? ((a = i.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((u = f.stateNode),
                      (s = f.memoizedProps.style),
                      (o = s != null && s.hasOwnProperty("display") ? s.display : null),
                      (u.style.display = tw("display", o)));
              } catch (h) {
                Ie(e, e.return, h);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = l ? "" : f.memoizedProps;
              } catch (h) {
                Ie(e, e.return, h);
              }
          } else if (((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) && f.child !== null) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Yt(t, e), ur(e), n & 4 && Em(e);
      break;
    case 21:
      break;
    default:
      Yt(t, e), ur(e);
  }
}
function ur(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (Tb(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(F(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (mo(i, ""), (n.flags &= -33));
          var a = Om(e);
          Fd(e, a, i);
          break;
        case 3:
        case 4:
          var o = n.stateNode.containerInfo,
            u = Om(e);
          Ld(e, u, o);
          break;
        default:
          throw Error(F(161));
      }
    } catch (s) {
      Ie(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function xA(e, t, r) {
  (q = e), Mb(e);
}
function Mb(e, t, r) {
  for (var n = (e.mode & 1) !== 0; q !== null; ) {
    var i = q,
      a = i.child;
    if (i.tag === 22 && n) {
      var o = i.memoizedState !== null || Au;
      if (!o) {
        var u = i.alternate,
          s = (u !== null && u.memoizedState !== null) || ot;
        u = Au;
        var l = ot;
        if (((Au = o), (ot = s) && !l))
          for (q = i; q !== null; )
            (o = q),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null ? Tm(i) : s !== null ? ((s.return = o), (q = s)) : Tm(i);
        for (; a !== null; ) (q = a), Mb(a), (a = a.sibling);
        (q = i), (Au = u), (ot = l);
      }
      km(e);
    } else i.subtreeFlags & 8772 && a !== null ? ((a.return = i), (q = a)) : km(e);
  }
}
function km(e) {
  for (; q !== null; ) {
    var t = q;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ot || Ql(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !ot)
                if (r === null) n.componentDidMount();
                else {
                  var i = t.elementType === t.type ? r.memoizedProps : Jt(t.type, r.memoizedProps);
                  n.componentDidUpdate(i, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
                }
              var a = t.updateQueue;
              a !== null && lm(t, a, n);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                lm(t, o, r);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (r === null && t.flags & 4) {
                r = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && r.focus();
                    break;
                  case "img":
                    s.src && (r.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var l = t.alternate;
                if (l !== null) {
                  var c = l.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && bo(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(F(163));
          }
        ot || (t.flags & 512 && Dd(t));
      } catch (d) {
        Ie(t, t.return, d);
      }
    }
    if (t === e) {
      q = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (q = r);
      break;
    }
    q = t.return;
  }
}
function Am(e) {
  for (; q !== null; ) {
    var t = q;
    if (t === e) {
      q = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (q = r);
      break;
    }
    q = t.return;
  }
}
function Tm(e) {
  for (; q !== null; ) {
    var t = q;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Ql(4, t);
          } catch (s) {
            Ie(t, r, s);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var i = t.return;
            try {
              n.componentDidMount();
            } catch (s) {
              Ie(t, i, s);
            }
          }
          var a = t.return;
          try {
            Dd(t);
          } catch (s) {
            Ie(t, a, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Dd(t);
          } catch (s) {
            Ie(t, o, s);
          }
      }
    } catch (s) {
      Ie(t, t.return, s);
    }
    if (t === e) {
      q = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (q = u);
      break;
    }
    q = t.return;
  }
}
var wA = Math.ceil,
  js = Dr.ReactCurrentDispatcher,
  sv = Dr.ReactCurrentOwner,
  Wt = Dr.ReactCurrentBatchConfig,
  ae = 0,
  Ge = null,
  De = null,
  tt = 0,
  Et = 0,
  Ii = xn(0),
  Be = 0,
  $o = null,
  Xn = 0,
  Yl = 0,
  lv = 0,
  fo = null,
  mt = null,
  cv = 0,
  Zi = 1 / 0,
  _r = null,
  Ds = !1,
  Bd = null,
  sn = null,
  Tu = !1,
  en = null,
  Ls = 0,
  ho = 0,
  Ud = null,
  Xu = -1,
  Ju = 0;
function dt() {
  return ae & 6 ? Re() : Xu !== -1 ? Xu : (Xu = Re());
}
function ln(e) {
  return e.mode & 1
    ? ae & 2 && tt !== 0
      ? tt & -tt
      : nA.transition !== null
      ? (Ju === 0 && (Ju = pw()), Ju)
      : ((e = de), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : bw(e.type))), e)
    : 1;
}
function nr(e, t, r, n) {
  if (50 < ho) throw ((ho = 0), (Ud = null), Error(F(185)));
  Qo(e, r, n),
    (!(ae & 2) || e !== Ge) &&
      (e === Ge && (!(ae & 2) && (Yl |= r), Be === 4 && Jr(e, tt)),
      _t(e, n),
      r === 1 && ae === 0 && !(t.mode & 1) && ((Zi = Re() + 500), ql && wn()));
}
function _t(e, t) {
  var r = e.callbackNode;
  nk(e, t);
  var n = bs(e, e === Ge ? tt : 0);
  if (n === 0) r !== null && Dy(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Dy(r), t === 1))
      e.tag === 0 ? rA(Cm.bind(null, e)) : Bw(Cm.bind(null, e)),
        Jk(function () {
          !(ae & 6) && wn();
        }),
        (r = null);
    else {
      switch (vw(n)) {
        case 1:
          r = jp;
          break;
        case 4:
          r = dw;
          break;
        case 16:
          r = ws;
          break;
        case 536870912:
          r = hw;
          break;
        default:
          r = ws;
      }
      r = Fb(r, $b.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function $b(e, t) {
  if (((Xu = -1), (Ju = 0), ae & 6)) throw Error(F(327));
  var r = e.callbackNode;
  if (zi() && e.callbackNode !== r) return null;
  var n = bs(e, e === Ge ? tt : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = Fs(e, n);
  else {
    t = n;
    var i = ae;
    ae |= 2;
    var a = Nb();
    (Ge !== e || tt !== t) && ((_r = null), (Zi = Re() + 500), qn(e, t));
    do
      try {
        SA();
        break;
      } catch (u) {
        Ib(e, u);
      }
    while (1);
    Yp(), (js.current = a), (ae = i), De !== null ? (t = 0) : ((Ge = null), (tt = 0), (t = Be));
  }
  if (t !== 0) {
    if ((t === 2 && ((i = pd(e)), i !== 0 && ((n = i), (t = zd(e, i)))), t === 1))
      throw ((r = $o), qn(e, 0), Jr(e, n), _t(e, Re()), r);
    if (t === 6) Jr(e, n);
    else {
      if (
        ((i = e.current.alternate),
        !(n & 30) &&
          !bA(i) &&
          ((t = Fs(e, n)), t === 2 && ((a = pd(e)), a !== 0 && ((n = a), (t = zd(e, a)))), t === 1))
      )
        throw ((r = $o), qn(e, 0), Jr(e, n), _t(e, Re()), r);
      switch (((e.finishedWork = i), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          Mn(e, mt, _r);
          break;
        case 3:
          if ((Jr(e, n), (n & 130023424) === n && ((t = cv + 500 - Re()), 10 < t))) {
            if (bs(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & n) !== n)) {
              dt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = _d(Mn.bind(null, e, mt, _r), t);
            break;
          }
          Mn(e, mt, _r);
          break;
        case 4:
          if ((Jr(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, i = -1; 0 < n; ) {
            var o = 31 - rr(n);
            (a = 1 << o), (o = t[o]), o > i && (i = o), (n &= ~a);
          }
          if (
            ((n = i),
            (n = Re() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * wA(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = _d(Mn.bind(null, e, mt, _r), n);
            break;
          }
          Mn(e, mt, _r);
          break;
        case 5:
          Mn(e, mt, _r);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return _t(e, Re()), e.callbackNode === r ? $b.bind(null, e) : null;
}
function zd(e, t) {
  var r = fo;
  return (
    e.current.memoizedState.isDehydrated && (qn(e, t).flags |= 256),
    (e = Fs(e, t)),
    e !== 2 && ((t = mt), (mt = r), t !== null && Wd(t)),
    e
  );
}
function Wd(e) {
  mt === null ? (mt = e) : mt.push.apply(mt, e);
}
function bA(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var i = r[n],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!ir(a(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null)) (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Jr(e, t) {
  for (t &= ~lv, t &= ~Yl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - rr(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function Cm(e) {
  if (ae & 6) throw Error(F(327));
  zi();
  var t = bs(e, 0);
  if (!(t & 1)) return _t(e, Re()), null;
  var r = Fs(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = pd(e);
    n !== 0 && ((t = n), (r = zd(e, n)));
  }
  if (r === 1) throw ((r = $o), qn(e, 0), Jr(e, t), _t(e, Re()), r);
  if (r === 6) throw Error(F(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Mn(e, mt, _r), _t(e, Re()), null;
}
function fv(e, t) {
  var r = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    (ae = r), ae === 0 && ((Zi = Re() + 500), ql && wn());
  }
}
function Jn(e) {
  en !== null && en.tag === 0 && !(ae & 6) && zi();
  var t = ae;
  ae |= 1;
  var r = Wt.transition,
    n = de;
  try {
    if (((Wt.transition = null), (de = 1), e)) return e();
  } finally {
    (de = n), (Wt.transition = r), (ae = t), !(ae & 6) && wn();
  }
}
function dv() {
  (Et = Ii.current), Se(Ii);
}
function qn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), Xk(r)), De !== null))
    for (r = De.return; r !== null; ) {
      var n = r;
      switch ((Gp(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && ks();
          break;
        case 3:
          Xi(), Se(wt), Se(ut), tv();
          break;
        case 5:
          ev(n);
          break;
        case 4:
          Xi();
          break;
        case 13:
          Se(Ce);
          break;
        case 19:
          Se(Ce);
          break;
        case 10:
          Kp(n.type._context);
          break;
        case 22:
        case 23:
          dv();
      }
      r = r.return;
    }
  if (
    ((Ge = e),
    (De = e = cn(e.current, null)),
    (tt = Et = t),
    (Be = 0),
    ($o = null),
    (lv = Yl = Xn = 0),
    (mt = fo = null),
    Fn !== null)
  ) {
    for (t = 0; t < Fn.length; t++)
      if (((r = Fn[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var i = n.next,
          a = r.pending;
        if (a !== null) {
          var o = a.next;
          (a.next = i), (n.next = o);
        }
        r.pending = n;
      }
    Fn = null;
  }
  return e;
}
function Ib(e, t) {
  do {
    var r = De;
    try {
      if ((Yp(), (Qu.current = Rs), Ns)) {
        for (var n = Pe.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), (n = n.next);
        }
        Ns = !1;
      }
      if (
        ((Kn = 0), (qe = Fe = Pe = null), (lo = !1), (Co = 0), (sv.current = null), r === null || r.return === null)
      ) {
        (Be = 1), ($o = t), (De = null);
        break;
      }
      e: {
        var a = e,
          o = r.return,
          u = r,
          s = t;
        if (((t = tt), (u.flags |= 32768), s !== null && typeof s == "object" && typeof s.then == "function")) {
          var l = s,
            c = u,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue), (c.memoizedState = d.memoizedState), (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = ym(o);
          if (v !== null) {
            (v.flags &= -257), mm(v, o, u, a, t), v.mode & 1 && vm(a, l, t), (t = v), (s = l);
            var y = t.updateQueue;
            if (y === null) {
              var h = new Set();
              h.add(s), (t.updateQueue = h);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              vm(a, l, t), hv();
              break e;
            }
            s = Error(F(426));
          }
        } else if (Ee && u.mode & 1) {
          var w = ym(o);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256), mm(w, o, u, a, t), Vp(Ji(s, u));
            break e;
          }
        }
        (a = s = Ji(s, u)), Be !== 4 && (Be = 2), fo === null ? (fo = [a]) : fo.push(a), (a = o);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var p = yb(a, s, t);
              sm(a, p);
              break e;
            case 1:
              u = s;
              var x = a.type,
                m = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof x.getDerivedStateFromError == "function" ||
                  (m !== null && typeof m.componentDidCatch == "function" && (sn === null || !sn.has(m))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var g = mb(a, u, t);
                sm(a, g);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      jb(r);
    } catch (b) {
      (t = b), De === r && r !== null && (De = r = r.return);
      continue;
    }
    break;
  } while (1);
}
function Nb() {
  var e = js.current;
  return (js.current = Rs), e === null ? Rs : e;
}
function hv() {
  (Be === 0 || Be === 3 || Be === 2) && (Be = 4), Ge === null || (!(Xn & 268435455) && !(Yl & 268435455)) || Jr(Ge, tt);
}
function Fs(e, t) {
  var r = ae;
  ae |= 2;
  var n = Nb();
  (Ge !== e || tt !== t) && ((_r = null), qn(e, t));
  do
    try {
      _A();
      break;
    } catch (i) {
      Ib(e, i);
    }
  while (1);
  if ((Yp(), (ae = r), (js.current = n), De !== null)) throw Error(F(261));
  return (Ge = null), (tt = 0), Be;
}
function _A() {
  for (; De !== null; ) Rb(De);
}
function SA() {
  for (; De !== null && !QE(); ) Rb(De);
}
function Rb(e) {
  var t = Lb(e.alternate, e, Et);
  (e.memoizedProps = e.pendingProps), t === null ? jb(e) : (De = t), (sv.current = null);
}
function jb(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = yA(r, t)), r !== null)) {
        (r.flags &= 32767), (De = r);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Be = 6), (De = null);
        return;
      }
    } else if (((r = vA(r, t, Et)), r !== null)) {
      De = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      De = t;
      return;
    }
    De = t = e;
  } while (t !== null);
  Be === 0 && (Be = 5);
}
function Mn(e, t, r) {
  var n = de,
    i = Wt.transition;
  try {
    (Wt.transition = null), (de = 1), OA(e, t, r, n);
  } finally {
    (Wt.transition = i), (de = n);
  }
  return null;
}
function OA(e, t, r, n) {
  do zi();
  while (en !== null);
  if (ae & 6) throw Error(F(327));
  r = e.finishedWork;
  var i = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(F(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = r.lanes | r.childLanes;
  if (
    (ik(e, a),
    e === Ge && ((De = Ge = null), (tt = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Tu ||
      ((Tu = !0),
      Fb(ws, function () {
        return zi(), null;
      })),
    (a = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || a)
  ) {
    (a = Wt.transition), (Wt.transition = null);
    var o = de;
    de = 1;
    var u = ae;
    (ae |= 4),
      (sv.current = null),
      gA(e, r),
      Pb(r, e),
      Hk(wd),
      (_s = !!xd),
      (wd = xd = null),
      (e.current = r),
      xA(r),
      YE(),
      (ae = u),
      (de = o),
      (Wt.transition = a);
  } else e.current = r;
  if (
    (Tu && ((Tu = !1), (en = e), (Ls = i)),
    (a = e.pendingLanes),
    a === 0 && (sn = null),
    JE(r.stateNode),
    _t(e, Re()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (i = t[r]), n(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ds) throw ((Ds = !1), (e = Bd), (Bd = null), e);
  return (
    Ls & 1 && e.tag !== 0 && zi(),
    (a = e.pendingLanes),
    a & 1 ? (e === Ud ? ho++ : ((ho = 0), (Ud = e))) : (ho = 0),
    wn(),
    null
  );
}
function zi() {
  if (en !== null) {
    var e = vw(Ls),
      t = Wt.transition,
      r = de;
    try {
      if (((Wt.transition = null), (de = 16 > e ? 16 : e), en === null)) var n = !1;
      else {
        if (((e = en), (en = null), (Ls = 0), ae & 6)) throw Error(F(331));
        var i = ae;
        for (ae |= 4, q = e.current; q !== null; ) {
          var a = q,
            o = a.child;
          if (q.flags & 16) {
            var u = a.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var l = u[s];
                for (q = l; q !== null; ) {
                  var c = q;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      co(8, c, a);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (q = f);
                  else
                    for (; q !== null; ) {
                      c = q;
                      var d = c.sibling,
                        v = c.return;
                      if ((Ab(c), c === l)) {
                        q = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = v), (q = d);
                        break;
                      }
                      q = v;
                    }
                }
              }
              var y = a.alternate;
              if (y !== null) {
                var h = y.child;
                if (h !== null) {
                  y.child = null;
                  do {
                    var w = h.sibling;
                    (h.sibling = null), (h = w);
                  } while (h !== null);
                }
              }
              q = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) (o.return = a), (q = o);
          else
            e: for (; q !== null; ) {
              if (((a = q), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    co(9, a, a.return);
                }
              var p = a.sibling;
              if (p !== null) {
                (p.return = a.return), (q = p);
                break e;
              }
              q = a.return;
            }
        }
        var x = e.current;
        for (q = x; q !== null; ) {
          o = q;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (q = m);
          else
            e: for (o = x; q !== null; ) {
              if (((u = q), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ql(9, u);
                  }
                } catch (b) {
                  Ie(u, u.return, b);
                }
              if (u === o) {
                q = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (q = g);
                break e;
              }
              q = u.return;
            }
        }
        if (((ae = i), wn(), pr && typeof pr.onPostCommitFiberRoot == "function"))
          try {
            pr.onPostCommitFiberRoot(Bl, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (de = r), (Wt.transition = t);
    }
  }
  return !1;
}
function Pm(e, t, r) {
  (t = Ji(r, t)), (t = yb(e, t, 1)), (e = un(e, t, 1)), (t = dt()), e !== null && (Qo(e, 1, t), _t(e, t));
}
function Ie(e, t, r) {
  if (e.tag === 3) Pm(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Pm(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" && (sn === null || !sn.has(n)))
        ) {
          (e = Ji(r, e)), (e = mb(t, e, 1)), (t = un(t, e, 1)), (e = dt()), t !== null && (Qo(t, 1, e), _t(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function EA(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = dt()),
    (e.pingedLanes |= e.suspendedLanes & r),
    Ge === e &&
      (tt & r) === r &&
      (Be === 4 || (Be === 3 && (tt & 130023424) === tt && 500 > Re() - cv) ? qn(e, 0) : (lv |= r)),
    _t(e, t);
}
function Db(e, t) {
  t === 0 && (e.mode & 1 ? ((t = gu), (gu <<= 1), !(gu & 130023424) && (gu = 4194304)) : (t = 1));
  var r = dt();
  (e = Nr(e, t)), e !== null && (Qo(e, t, r), _t(e, r));
}
function kA(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), Db(e, r);
}
function AA(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        i = e.memoizedState;
      i !== null && (r = i.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(F(314));
  }
  n !== null && n.delete(t), Db(e, r);
}
var Lb;
Lb = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || wt.current) xt = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (xt = !1), pA(e, t, r);
      xt = !!(e.flags & 131072);
    }
  else (xt = !1), Ee && t.flags & 1048576 && Uw(t, Cs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      Ku(e, t), (e = t.pendingProps);
      var i = Qi(t, ut.current);
      Ui(t, r), (i = nv(null, t, n, e, i, r));
      var a = iv();
      return (
        (t.flags |= 1),
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            bt(n) ? ((a = !0), As(t)) : (a = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            Jp(t),
            (i.updater = Gl),
            (t.stateNode = i),
            (i._reactInternals = t),
            Cd(t, n, e, r),
            (t = $d(null, t, n, !0, a, r)))
          : ((t.tag = 0), Ee && a && qp(t), st(null, t, i, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (Ku(e, t),
          (e = t.pendingProps),
          (i = n._init),
          (n = i(n._payload)),
          (t.type = n),
          (i = t.tag = CA(n)),
          (e = Jt(n, e)),
          i)
        ) {
          case 0:
            t = Md(null, t, n, e, r);
            break e;
          case 1:
            t = wm(null, t, n, e, r);
            break e;
          case 11:
            t = gm(null, t, n, e, r);
            break e;
          case 14:
            t = xm(null, t, n, Jt(n.type, e), r);
            break e;
        }
        throw Error(F(306, n, ""));
      }
      return t;
    case 0:
      return (n = t.type), (i = t.pendingProps), (i = t.elementType === n ? i : Jt(n, i)), Md(e, t, n, i, r);
    case 1:
      return (n = t.type), (i = t.pendingProps), (i = t.elementType === n ? i : Jt(n, i)), wm(e, t, n, i, r);
    case 3:
      e: {
        if ((bb(t), e === null)) throw Error(F(387));
        (n = t.pendingProps), (a = t.memoizedState), (i = a.element), qw(e, t), $s(t, n, null, r);
        var o = t.memoizedState;
        if (((n = o.element), a.isDehydrated))
          if (
            ((a = {
              element: n,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (i = Ji(Error(F(423)), t)), (t = bm(e, t, n, r, i));
            break e;
          } else if (n !== i) {
            (i = Ji(Error(F(424)), t)), (t = bm(e, t, n, r, i));
            break e;
          } else
            for (
              Tt = on(t.stateNode.containerInfo.firstChild),
                Pt = t,
                Ee = !0,
                tr = null,
                r = Yw(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((Yi(), n === i)) {
            t = Rr(e, t, r);
            break e;
          }
          st(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Kw(t),
        e === null && kd(t),
        (n = t.type),
        (i = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (o = i.children),
        bd(n, i) ? (o = null) : a !== null && bd(n, a) && (t.flags |= 32),
        wb(e, t),
        st(e, t, o, r),
        t.child
      );
    case 6:
      return e === null && kd(t), null;
    case 13:
      return _b(e, t, r);
    case 4:
      return (
        Zp(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = Ki(t, null, n, r)) : st(e, t, n, r),
        t.child
      );
    case 11:
      return (n = t.type), (i = t.pendingProps), (i = t.elementType === n ? i : Jt(n, i)), gm(e, t, n, i, r);
    case 7:
      return st(e, t, t.pendingProps, r), t.child;
    case 8:
      return st(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return st(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (i = t.pendingProps),
          (a = t.memoizedProps),
          (o = i.value),
          ge(Ps, n._currentValue),
          (n._currentValue = o),
          a !== null)
        )
          if (ir(a.value, o)) {
            if (a.children === i.children && !wt.current) {
              t = Rr(e, t, r);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var u = a.dependencies;
              if (u !== null) {
                o = a.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === n) {
                    if (a.tag === 1) {
                      (s = Cr(-1, r & -r)), (s.tag = 2);
                      var l = a.updateQueue;
                      if (l !== null) {
                        l = l.shared;
                        var c = l.pending;
                        c === null ? (s.next = s) : ((s.next = c.next), (c.next = s)), (l.pending = s);
                      }
                    }
                    (a.lanes |= r), (s = a.alternate), s !== null && (s.lanes |= r), Ad(a.return, r, t), (u.lanes |= r);
                    break;
                  }
                  s = s.next;
                }
              } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((o = a.return), o === null)) throw Error(F(341));
                (o.lanes |= r), (u = o.alternate), u !== null && (u.lanes |= r), Ad(o, r, t), (o = a.sibling);
              } else o = a.child;
              if (o !== null) o.return = a;
              else
                for (o = a; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((a = o.sibling), a !== null)) {
                    (a.return = o.return), (o = a);
                    break;
                  }
                  o = o.return;
                }
              a = o;
            }
        st(e, t, i.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (n = t.pendingProps.children),
        Ui(t, r),
        (i = Ht(i)),
        (n = n(i)),
        (t.flags |= 1),
        st(e, t, n, r),
        t.child
      );
    case 14:
      return (n = t.type), (i = Jt(n, t.pendingProps)), (i = Jt(n.type, i)), xm(e, t, n, i, r);
    case 15:
      return gb(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Jt(n, i)),
        Ku(e, t),
        (t.tag = 1),
        bt(n) ? ((e = !0), As(t)) : (e = !1),
        Ui(t, r),
        Vw(t, n, i),
        Cd(t, n, i, r),
        $d(null, t, n, !0, e, r)
      );
    case 19:
      return Sb(e, t, r);
    case 22:
      return xb(e, t, r);
  }
  throw Error(F(156, t.tag));
};
function Fb(e, t) {
  return fw(e, t);
}
function TA(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ut(e, t, r, n) {
  return new TA(e, t, r, n);
}
function pv(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function CA(e) {
  if (typeof e == "function") return pv(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ip)) return 11;
    if (e === Np) return 14;
  }
  return 2;
}
function cn(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = Ut(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t), (r.type = e.type), (r.flags = 0), (r.subtreeFlags = 0), (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function Zu(e, t, r, n, i, a) {
  var o = 2;
  if (((n = e), typeof e == "function")) pv(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Si:
        return Gn(r.children, i, a, t);
      case $p:
        (o = 8), (i |= 8);
        break;
      case Zf:
        return (e = Ut(12, r, t, i | 2)), (e.elementType = Zf), (e.lanes = a), e;
      case ed:
        return (e = Ut(13, r, t, i)), (e.elementType = ed), (e.lanes = a), e;
      case td:
        return (e = Ut(19, r, t, i)), (e.elementType = td), (e.lanes = a), e;
      case Qx:
        return Kl(r, i, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Gx:
              o = 10;
              break e;
            case Vx:
              o = 9;
              break e;
            case Ip:
              o = 11;
              break e;
            case Np:
              o = 14;
              break e;
            case Vr:
              (o = 16), (n = null);
              break e;
          }
        throw Error(F(130, e == null ? e : typeof e, ""));
    }
  return (t = Ut(o, r, t, i)), (t.elementType = e), (t.type = n), (t.lanes = a), t;
}
function Gn(e, t, r, n) {
  return (e = Ut(7, e, n, t)), (e.lanes = r), e;
}
function Kl(e, t, r, n) {
  return (e = Ut(22, e, n, t)), (e.elementType = Qx), (e.lanes = r), (e.stateNode = { isHidden: !1 }), e;
}
function df(e, t, r) {
  return (e = Ut(6, e, null, t)), (e.lanes = r), e;
}
function hf(e, t, r) {
  return (
    (t = Ut(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function PA(e, t, r, n, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Gc(0)),
    (this.expirationTimes = Gc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Gc(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function vv(e, t, r, n, i, a, o, u, s) {
  return (
    (e = new PA(e, t, r, u, s)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = Ut(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Jp(a),
    e
  );
}
function MA(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: _i, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r };
}
function Bb(e) {
  if (!e) return vn;
  e = e._reactInternals;
  e: {
    if (ai(e) !== e || e.tag !== 1) throw Error(F(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (bt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(F(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (bt(r)) return Fw(e, r, t);
  }
  return t;
}
function Ub(e, t, r, n, i, a, o, u, s) {
  return (
    (e = vv(r, n, !0, e, i, a, o, u, s)),
    (e.context = Bb(null)),
    (r = e.current),
    (n = dt()),
    (i = ln(r)),
    (a = Cr(n, i)),
    (a.callback = t ?? null),
    un(r, a, i),
    (e.current.lanes = i),
    Qo(e, i, n),
    _t(e, n),
    e
  );
}
function Xl(e, t, r, n) {
  var i = t.current,
    a = dt(),
    o = ln(i);
  return (
    (r = Bb(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = Cr(a, o)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = un(i, t, o)),
    e !== null && (nr(e, i, o, a), Vu(e, i, o)),
    o
  );
}
function Bs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Mm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function yv(e, t) {
  Mm(e, t), (e = e.alternate) && Mm(e, t);
}
function $A() {
  return null;
}
var zb =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function mv(e) {
  this._internalRoot = e;
}
Jl.prototype.render = mv.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(F(409));
  Xl(e, t, null, null);
};
Jl.prototype.unmount = mv.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Jn(function () {
      Xl(null, e, null, null);
    }),
      (t[Ir] = null);
  }
};
function Jl(e) {
  this._internalRoot = e;
}
Jl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = gw();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Xr.length && t !== 0 && t < Xr[r].priority; r++);
    Xr.splice(r, 0, e), r === 0 && ww(e);
  }
};
function gv(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Zl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function $m() {}
function IA(e, t, r, n, i) {
  if (i) {
    if (typeof n == "function") {
      var a = n;
      n = function () {
        var l = Bs(o);
        a.call(l);
      };
    }
    var o = Ub(t, n, e, 0, null, !1, !1, "", $m);
    return (e._reactRootContainer = o), (e[Ir] = o.current), Oo(e.nodeType === 8 ? e.parentNode : e), Jn(), o;
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof n == "function") {
    var u = n;
    n = function () {
      var l = Bs(s);
      u.call(l);
    };
  }
  var s = vv(e, 0, !1, null, null, !1, !1, "", $m);
  return (
    (e._reactRootContainer = s),
    (e[Ir] = s.current),
    Oo(e.nodeType === 8 ? e.parentNode : e),
    Jn(function () {
      Xl(t, s, r, n);
    }),
    s
  );
}
function ec(e, t, r, n, i) {
  var a = r._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof i == "function") {
      var u = i;
      i = function () {
        var s = Bs(o);
        u.call(s);
      };
    }
    Xl(t, o, e, i);
  } else o = IA(r, t, e, i, n);
  return Bs(o);
}
yw = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = Za(t.pendingLanes);
        r !== 0 && (Dp(t, r | 1), _t(t, Re()), !(ae & 6) && ((Zi = Re() + 500), wn()));
      }
      break;
    case 13:
      Jn(function () {
        var n = Nr(e, 1);
        if (n !== null) {
          var i = dt();
          nr(n, e, 1, i);
        }
      }),
        yv(e, 1);
  }
};
Lp = function (e) {
  if (e.tag === 13) {
    var t = Nr(e, 134217728);
    if (t !== null) {
      var r = dt();
      nr(t, e, 134217728, r);
    }
    yv(e, 134217728);
  }
};
mw = function (e) {
  if (e.tag === 13) {
    var t = ln(e),
      r = Nr(e, t);
    if (r !== null) {
      var n = dt();
      nr(r, e, t, n);
    }
    yv(e, t);
  }
};
gw = function () {
  return de;
};
xw = function (e, t) {
  var r = de;
  try {
    return (de = e), t();
  } finally {
    de = r;
  }
};
fd = function (e, t, r) {
  switch (t) {
    case "input":
      if ((id(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var i = Hl(n);
            if (!i) throw Error(F(90));
            Kx(n), id(n, i);
          }
        }
      }
      break;
    case "textarea":
      Jx(e, r);
      break;
    case "select":
      (t = r.value), t != null && Di(e, !!r.multiple, t, !1);
  }
};
aw = fv;
ow = Jn;
var NA = { usingClientEntryPoint: !1, Events: [Ko, Ai, Hl, nw, iw, fv] },
  Ra = { findFiberByHostInstance: Ln, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
  RA = {
    bundleType: Ra.bundleType,
    version: Ra.version,
    rendererPackageName: Ra.rendererPackageName,
    rendererConfig: Ra.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Dr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = lw(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ra.findFiberByHostInstance || $A,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Cu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Cu.isDisabled && Cu.supportsFiber)
    try {
      (Bl = Cu.inject(RA)), (pr = Cu);
    } catch {}
}
$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = NA;
$t.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!gv(t)) throw Error(F(200));
  return MA(e, t, null, r);
};
$t.createRoot = function (e, t) {
  if (!gv(e)) throw Error(F(299));
  var r = !1,
    n = "",
    i = zb;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = vv(e, 1, !1, null, null, r, !1, n, i)),
    (e[Ir] = t.current),
    Oo(e.nodeType === 8 ? e.parentNode : e),
    new mv(t)
  );
};
$t.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(F(188)) : ((e = Object.keys(e).join(",")), Error(F(268, e)));
  return (e = lw(t)), (e = e === null ? null : e.stateNode), e;
};
$t.flushSync = function (e) {
  return Jn(e);
};
$t.hydrate = function (e, t, r) {
  if (!Zl(t)) throw Error(F(200));
  return ec(null, e, t, !0, r);
};
$t.hydrateRoot = function (e, t, r) {
  if (!gv(e)) throw Error(F(405));
  var n = (r != null && r.hydratedSources) || null,
    i = !1,
    a = "",
    o = zb;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (i = !0),
      r.identifierPrefix !== void 0 && (a = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (o = r.onRecoverableError)),
    (t = Ub(t, null, e, 1, r ?? null, i, !1, a, o)),
    (e[Ir] = t.current),
    Oo(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (i = r._getVersion),
        (i = i(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, i])
          : t.mutableSourceEagerHydrationData.push(r, i);
  return new Jl(t);
};
$t.render = function (e, t, r) {
  if (!Zl(t)) throw Error(F(200));
  return ec(null, e, t, !1, r);
};
$t.unmountComponentAtNode = function (e) {
  if (!Zl(e)) throw Error(F(40));
  return e._reactRootContainer
    ? (Jn(function () {
        ec(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ir] = null);
        });
      }),
      !0)
    : !1;
};
$t.unstable_batchedUpdates = fv;
$t.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!Zl(r)) throw Error(F(200));
  if (e == null || e._reactInternals === void 0) throw Error(F(38));
  return ec(e, t, r, !1, n);
};
$t.version = "18.2.0-next-9e3b772b8-20220608";
function Wb() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wb);
    } catch (e) {
      console.error(e);
    }
}
Wb(), (Ux.exports = $t);
var Hb = Ux.exports,
  Im = Hb;
(Xf.createRoot = Im.createRoot), (Xf.hydrateRoot = Im.hydrateRoot);
class Jo {
  constructor() {
    (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
  }
  subscribe(t) {
    const r = { listener: t };
    return (
      this.listeners.add(r),
      this.onSubscribe(),
      () => {
        this.listeners.delete(r), this.onUnsubscribe();
      }
    );
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {}
  onUnsubscribe() {}
}
const Io = typeof window > "u" || "Deno" in window;
function Lt() {}
function jA(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Hd(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function qb(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function to(e, t, r) {
  return tc(e) ? (typeof t == "function" ? { ...r, queryKey: e, queryFn: t } : { ...t, queryKey: e }) : e;
}
function Yr(e, t, r) {
  return tc(e) ? [{ ...t, queryKey: e }, r] : [e || {}, t];
}
function Nm(e, t) {
  const { type: r = "all", exact: n, fetchStatus: i, predicate: a, queryKey: o, stale: u } = e;
  if (tc(o)) {
    if (n) {
      if (t.queryHash !== xv(o, t.options)) return !1;
    } else if (!Us(t.queryKey, o)) return !1;
  }
  if (r !== "all") {
    const s = t.isActive();
    if ((r === "active" && !s) || (r === "inactive" && s)) return !1;
  }
  return !(
    (typeof u == "boolean" && t.isStale() !== u) ||
    (typeof i < "u" && i !== t.state.fetchStatus) ||
    (a && !a(t))
  );
}
function Rm(e, t) {
  const { exact: r, fetching: n, predicate: i, mutationKey: a } = e;
  if (tc(a)) {
    if (!t.options.mutationKey) return !1;
    if (r) {
      if (Un(t.options.mutationKey) !== Un(a)) return !1;
    } else if (!Us(t.options.mutationKey, a)) return !1;
  }
  return !((typeof n == "boolean" && (t.state.status === "loading") !== n) || (i && !i(t)));
}
function xv(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Un)(e);
}
function Un(e) {
  return JSON.stringify(e, (t, r) =>
    qd(r)
      ? Object.keys(r)
          .sort()
          .reduce((n, i) => ((n[i] = r[i]), n), {})
      : r,
  );
}
function Us(e, t) {
  return Gb(e, t);
}
function Gb(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((r) => !Gb(e[r], t[r]))
    : !1;
}
function Vb(e, t) {
  if (e === t) return e;
  const r = Dm(e) && Dm(t);
  if (r || (qd(e) && qd(t))) {
    const n = r ? e.length : Object.keys(e).length,
      i = r ? t : Object.keys(t),
      a = i.length,
      o = r ? [] : {};
    let u = 0;
    for (let s = 0; s < a; s++) {
      const l = r ? s : i[s];
      (o[l] = Vb(e[l], t[l])), o[l] === e[l] && u++;
    }
    return n === a && u === n ? e : o;
  }
  return t;
}
function jm(e, t) {
  if ((e && !t) || (t && !e)) return !1;
  for (const r in e) if (e[r] !== t[r]) return !1;
  return !0;
}
function Dm(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function qd(e) {
  if (!Lm(e)) return !1;
  const t = e.constructor;
  if (typeof t > "u") return !0;
  const r = t.prototype;
  return !(!Lm(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function Lm(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function tc(e) {
  return Array.isArray(e);
}
function Qb(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Fm(e) {
  Qb(0).then(e);
}
function DA() {
  if (typeof AbortController == "function") return new AbortController();
}
function Gd(e, t, r) {
  return r.isDataEqual != null && r.isDataEqual(e, t)
    ? e
    : typeof r.structuralSharing == "function"
    ? r.structuralSharing(e, t)
    : r.structuralSharing !== !1
    ? Vb(e, t)
    : t;
}
class LA extends Jo {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!Io && window.addEventListener) {
          const r = () => t();
          return (
            window.addEventListener("visibilitychange", r, !1),
            window.addEventListener("focus", r, !1),
            () => {
              window.removeEventListener("visibilitychange", r), window.removeEventListener("focus", r);
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(t) {
    var r;
    (this.setup = t),
      (r = this.cleanup) == null || r.call(this),
      (this.cleanup = t((n) => {
        typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
      }));
  }
  setFocused(t) {
    this.focused !== t && ((this.focused = t), this.onFocus());
  }
  onFocus() {
    this.listeners.forEach(({ listener: t }) => {
      t();
    });
  }
  isFocused() {
    return typeof this.focused == "boolean"
      ? this.focused
      : typeof document > "u"
      ? !0
      : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
const zs = new LA(),
  Bm = ["online", "offline"];
class FA extends Jo {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!Io && window.addEventListener) {
          const r = () => t();
          return (
            Bm.forEach((n) => {
              window.addEventListener(n, r, !1);
            }),
            () => {
              Bm.forEach((n) => {
                window.removeEventListener(n, r);
              });
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(t) {
    var r;
    (this.setup = t),
      (r = this.cleanup) == null || r.call(this),
      (this.cleanup = t((n) => {
        typeof n == "boolean" ? this.setOnline(n) : this.onOnline();
      }));
  }
  setOnline(t) {
    this.online !== t && ((this.online = t), this.onOnline());
  }
  onOnline() {
    this.listeners.forEach(({ listener: t }) => {
      t();
    });
  }
  isOnline() {
    return typeof this.online == "boolean"
      ? this.online
      : typeof navigator > "u" || typeof navigator.onLine > "u"
      ? !0
      : navigator.onLine;
  }
}
const Ws = new FA();
function BA(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function rc(e) {
  return (e ?? "online") === "online" ? Ws.isOnline() : !0;
}
class Yb {
  constructor(t) {
    (this.revert = t == null ? void 0 : t.revert), (this.silent = t == null ? void 0 : t.silent);
  }
}
function es(e) {
  return e instanceof Yb;
}
function Kb(e) {
  let t = !1,
    r = 0,
    n = !1,
    i,
    a,
    o;
  const u = new Promise((w, p) => {
      (a = w), (o = p);
    }),
    s = (w) => {
      n || (v(new Yb(w)), e.abort == null || e.abort());
    },
    l = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    f = () => !zs.isFocused() || (e.networkMode !== "always" && !Ws.isOnline()),
    d = (w) => {
      n || ((n = !0), e.onSuccess == null || e.onSuccess(w), i == null || i(), a(w));
    },
    v = (w) => {
      n || ((n = !0), e.onError == null || e.onError(w), i == null || i(), o(w));
    },
    y = () =>
      new Promise((w) => {
        (i = (p) => {
          const x = n || !f();
          return x && w(p), x;
        }),
          e.onPause == null || e.onPause();
      }).then(() => {
        (i = void 0), n || e.onContinue == null || e.onContinue();
      }),
    h = () => {
      if (n) return;
      let w;
      try {
        w = e.fn();
      } catch (p) {
        w = Promise.reject(p);
      }
      Promise.resolve(w)
        .then(d)
        .catch((p) => {
          var x, m;
          if (n) return;
          const g = (x = e.retry) != null ? x : 3,
            b = (m = e.retryDelay) != null ? m : BA,
            _ = typeof b == "function" ? b(r, p) : b,
            S = g === !0 || (typeof g == "number" && r < g) || (typeof g == "function" && g(r, p));
          if (t || !S) {
            v(p);
            return;
          }
          r++,
            e.onFail == null || e.onFail(r, p),
            Qb(_)
              .then(() => {
                if (f()) return y();
              })
              .then(() => {
                t ? v(p) : h();
              });
        });
    };
  return (
    rc(e.networkMode) ? h() : y().then(h),
    {
      promise: u,
      cancel: s,
      continue: () => ((i == null ? void 0 : i()) ? u : Promise.resolve()),
      cancelRetry: l,
      continueRetry: c,
    }
  );
}
const wv = console;
function UA() {
  let e = [],
    t = 0,
    r = (c) => {
      c();
    },
    n = (c) => {
      c();
    };
  const i = (c) => {
      let f;
      t++;
      try {
        f = c();
      } finally {
        t--, t || u();
      }
      return f;
    },
    a = (c) => {
      t
        ? e.push(c)
        : Fm(() => {
            r(c);
          });
    },
    o =
      (c) =>
      (...f) => {
        a(() => {
          c(...f);
        });
      },
    u = () => {
      const c = e;
      (e = []),
        c.length &&
          Fm(() => {
            n(() => {
              c.forEach((f) => {
                r(f);
              });
            });
          });
    };
  return {
    batch: i,
    batchCalls: o,
    schedule: a,
    setNotifyFunction: (c) => {
      r = c;
    },
    setBatchNotifyFunction: (c) => {
      n = c;
    },
  };
}
const je = UA();
class Xb {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      Hd(this.cacheTime) &&
        (this.gcTimeout = setTimeout(() => {
          this.optionalRemove();
        }, this.cacheTime));
  }
  updateCacheTime(t) {
    this.cacheTime = Math.max(this.cacheTime || 0, t ?? (Io ? 1 / 0 : 5 * 60 * 1e3));
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
  }
}
class zA extends Xb {
  constructor(t) {
    super(),
      (this.abortSignalConsumed = !1),
      (this.defaultOptions = t.defaultOptions),
      this.setOptions(t.options),
      (this.observers = []),
      (this.cache = t.cache),
      (this.logger = t.logger || wv),
      (this.queryKey = t.queryKey),
      (this.queryHash = t.queryHash),
      (this.initialState = t.state || WA(this.options)),
      (this.state = this.initialState),
      this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(t) {
    (this.options = { ...this.defaultOptions, ...t }), this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && this.cache.remove(this);
  }
  setData(t, r) {
    const n = Gd(this.state.data, t, this.options);
    return (
      this.dispatch({
        data: n,
        type: "success",
        dataUpdatedAt: r == null ? void 0 : r.updatedAt,
        manual: r == null ? void 0 : r.manual,
      }),
      n
    );
  }
  setState(t, r) {
    this.dispatch({ type: "setState", state: t, setStateOptions: r });
  }
  cancel(t) {
    var r;
    const n = this.promise;
    return (r = this.retryer) == null || r.cancel(t), n ? n.then(Lt).catch(Lt) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((t) => t.options.enabled !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return (
      this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((t) => t.getCurrentResult().isStale)
    );
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !qb(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var t;
    const r = this.observers.find((n) => n.shouldFetchOnWindowFocus());
    r && r.refetch({ cancelRefetch: !1 }), (t = this.retryer) == null || t.continue();
  }
  onOnline() {
    var t;
    const r = this.observers.find((n) => n.shouldFetchOnReconnect());
    r && r.refetch({ cancelRefetch: !1 }), (t = this.retryer) == null || t.continue();
  }
  addObserver(t) {
    this.observers.includes(t) ||
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.cache.notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) &&
      ((this.observers = this.observers.filter((r) => r !== t)),
      this.observers.length ||
        (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({ revert: !0 }) : this.retryer.cancelRetry()),
        this.scheduleGc()),
      this.cache.notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.dispatch({ type: "invalidate" });
  }
  fetch(t, r) {
    var n, i;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && r != null && r.cancelRefetch) this.cancel({ silent: !0 });
      else if (this.promise) {
        var a;
        return (a = this.retryer) == null || a.continueRetry(), this.promise;
      }
    }
    if ((t && this.setOptions(t), !this.options.queryFn)) {
      const v = this.observers.find((y) => y.options.queryFn);
      v && this.setOptions(v.options);
    }
    Array.isArray(this.options.queryKey);
    const o = DA(),
      u = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
      s = (v) => {
        Object.defineProperty(v, "signal", {
          enumerable: !0,
          get: () => {
            if (o) return (this.abortSignalConsumed = !0), o.signal;
          },
        });
      };
    s(u);
    const l = () =>
        this.options.queryFn
          ? ((this.abortSignalConsumed = !1), this.options.queryFn(u))
          : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'"),
      c = { fetchOptions: r, options: this.options, queryKey: this.queryKey, state: this.state, fetchFn: l };
    if (
      (s(c),
      (n = this.options.behavior) == null || n.onFetch(c),
      (this.revertState = this.state),
      this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((i = c.fetchOptions) == null ? void 0 : i.meta))
    ) {
      var f;
      this.dispatch({ type: "fetch", meta: (f = c.fetchOptions) == null ? void 0 : f.meta });
    }
    const d = (v) => {
      if (((es(v) && v.silent) || this.dispatch({ type: "error", error: v }), !es(v))) {
        var y, h, w, p;
        (y = (h = this.cache.config).onError) == null || y.call(h, v, this),
          (w = (p = this.cache.config).onSettled) == null || w.call(p, this.state.data, v, this);
      }
      this.isFetchingOptimistic || this.scheduleGc(), (this.isFetchingOptimistic = !1);
    };
    return (
      (this.retryer = Kb({
        fn: c.fetchFn,
        abort: o == null ? void 0 : o.abort.bind(o),
        onSuccess: (v) => {
          var y, h, w, p;
          if (typeof v > "u") {
            d(new Error(this.queryHash + " data is undefined"));
            return;
          }
          this.setData(v),
            (y = (h = this.cache.config).onSuccess) == null || y.call(h, v, this),
            (w = (p = this.cache.config).onSettled) == null || w.call(p, v, this.state.error, this),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        },
        onError: d,
        onFail: (v, y) => {
          this.dispatch({ type: "failed", failureCount: v, error: y });
        },
        onPause: () => {
          this.dispatch({ type: "pause" });
        },
        onContinue: () => {
          this.dispatch({ type: "continue" });
        },
        retry: c.options.retry,
        retryDelay: c.options.retryDelay,
        networkMode: c.options.networkMode,
      })),
      (this.promise = this.retryer.promise),
      this.promise
    );
  }
  dispatch(t) {
    const r = (n) => {
      var i, a;
      switch (t.type) {
        case "failed":
          return { ...n, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
        case "pause":
          return { ...n, fetchStatus: "paused" };
        case "continue":
          return { ...n, fetchStatus: "fetching" };
        case "fetch":
          return {
            ...n,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (i = t.meta) != null ? i : null,
            fetchStatus: rc(this.options.networkMode) ? "fetching" : "paused",
            ...(!n.dataUpdatedAt && { error: null, status: "loading" }),
          };
        case "success":
          return {
            ...n,
            data: t.data,
            dataUpdateCount: n.dataUpdateCount + 1,
            dataUpdatedAt: (a = t.dataUpdatedAt) != null ? a : Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success",
            ...(!t.manual && { fetchStatus: "idle", fetchFailureCount: 0, fetchFailureReason: null }),
          };
        case "error":
          const o = t.error;
          return es(o) && o.revert && this.revertState
            ? { ...this.revertState }
            : {
                ...n,
                error: o,
                errorUpdateCount: n.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: n.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error",
              };
        case "invalidate":
          return { ...n, isInvalidated: !0 };
        case "setState":
          return { ...n, ...t.state };
      }
    };
    (this.state = r(this.state)),
      je.batch(() => {
        this.observers.forEach((n) => {
          n.onQueryUpdate(t);
        }),
          this.cache.notify({ query: this, type: "updated", action: t });
      });
  }
}
function WA(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
    r = typeof t < "u",
    n = r ? (typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt) : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "loading",
    fetchStatus: "idle",
  };
}
class HA extends Jo {
  constructor(t) {
    super(), (this.config = t || {}), (this.queries = []), (this.queriesMap = {});
  }
  build(t, r, n) {
    var i;
    const a = r.queryKey,
      o = (i = r.queryHash) != null ? i : xv(a, r);
    let u = this.get(o);
    return (
      u ||
        ((u = new zA({
          cache: this,
          logger: t.getLogger(),
          queryKey: a,
          queryHash: o,
          options: t.defaultQueryOptions(r),
          state: n,
          defaultOptions: t.getQueryDefaults(a),
        })),
        this.add(u)),
      u
    );
  }
  add(t) {
    this.queriesMap[t.queryHash] ||
      ((this.queriesMap[t.queryHash] = t), this.queries.push(t), this.notify({ type: "added", query: t }));
  }
  remove(t) {
    const r = this.queriesMap[t.queryHash];
    r &&
      (t.destroy(),
      (this.queries = this.queries.filter((n) => n !== t)),
      r === t && delete this.queriesMap[t.queryHash],
      this.notify({ type: "removed", query: t }));
  }
  clear() {
    je.batch(() => {
      this.queries.forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return this.queriesMap[t];
  }
  getAll() {
    return this.queries;
  }
  find(t, r) {
    const [n] = Yr(t, r);
    return typeof n.exact > "u" && (n.exact = !0), this.queries.find((i) => Nm(n, i));
  }
  findAll(t, r) {
    const [n] = Yr(t, r);
    return Object.keys(n).length > 0 ? this.queries.filter((i) => Nm(n, i)) : this.queries;
  }
  notify(t) {
    je.batch(() => {
      this.listeners.forEach(({ listener: r }) => {
        r(t);
      });
    });
  }
  onFocus() {
    je.batch(() => {
      this.queries.forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    je.batch(() => {
      this.queries.forEach((t) => {
        t.onOnline();
      });
    });
  }
}
class qA extends Xb {
  constructor(t) {
    super(),
      (this.defaultOptions = t.defaultOptions),
      (this.mutationId = t.mutationId),
      (this.mutationCache = t.mutationCache),
      (this.logger = t.logger || wv),
      (this.observers = []),
      (this.state = t.state || GA()),
      this.setOptions(t.options),
      this.scheduleGc();
  }
  setOptions(t) {
    (this.options = { ...this.defaultOptions, ...t }), this.updateCacheTime(this.options.cacheTime);
  }
  get meta() {
    return this.options.meta;
  }
  setState(t) {
    this.dispatch({ type: "setState", state: t });
  }
  addObserver(t) {
    this.observers.includes(t) ||
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.mutationCache.notify({ type: "observerAdded", mutation: this, observer: t }));
  }
  removeObserver(t) {
    (this.observers = this.observers.filter((r) => r !== t)),
      this.scheduleGc(),
      this.mutationCache.notify({ type: "observerRemoved", mutation: this, observer: t });
  }
  optionalRemove() {
    this.observers.length || (this.state.status === "loading" ? this.scheduleGc() : this.mutationCache.remove(this));
  }
  continue() {
    var t, r;
    return (t = (r = this.retryer) == null ? void 0 : r.continue()) != null ? t : this.execute();
  }
  async execute() {
    const t = () => {
        var S;
        return (
          (this.retryer = Kb({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(this.state.variables)
                : Promise.reject("No mutationFn found"),
            onFail: (O, E) => {
              this.dispatch({ type: "failed", failureCount: O, error: E });
            },
            onPause: () => {
              this.dispatch({ type: "pause" });
            },
            onContinue: () => {
              this.dispatch({ type: "continue" });
            },
            retry: (S = this.options.retry) != null ? S : 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
          })),
          this.retryer.promise
        );
      },
      r = this.state.status === "loading";
    try {
      var n, i, a, o, u, s, l, c;
      if (!r) {
        var f, d, v, y;
        this.dispatch({ type: "loading", variables: this.options.variables }),
          await ((f = (d = this.mutationCache.config).onMutate) == null
            ? void 0
            : f.call(d, this.state.variables, this));
        const O = await ((v = (y = this.options).onMutate) == null ? void 0 : v.call(y, this.state.variables));
        O !== this.state.context && this.dispatch({ type: "loading", context: O, variables: this.state.variables });
      }
      const S = await t();
      return (
        await ((n = (i = this.mutationCache.config).onSuccess) == null
          ? void 0
          : n.call(i, S, this.state.variables, this.state.context, this)),
        await ((a = (o = this.options).onSuccess) == null
          ? void 0
          : a.call(o, S, this.state.variables, this.state.context)),
        await ((u = (s = this.mutationCache.config).onSettled) == null
          ? void 0
          : u.call(s, S, null, this.state.variables, this.state.context, this)),
        await ((l = (c = this.options).onSettled) == null
          ? void 0
          : l.call(c, S, null, this.state.variables, this.state.context)),
        this.dispatch({ type: "success", data: S }),
        S
      );
    } catch (S) {
      try {
        var h, w, p, x, m, g, b, _;
        throw (
          (await ((h = (w = this.mutationCache.config).onError) == null
            ? void 0
            : h.call(w, S, this.state.variables, this.state.context, this)),
          await ((p = (x = this.options).onError) == null
            ? void 0
            : p.call(x, S, this.state.variables, this.state.context)),
          await ((m = (g = this.mutationCache.config).onSettled) == null
            ? void 0
            : m.call(g, void 0, S, this.state.variables, this.state.context, this)),
          await ((b = (_ = this.options).onSettled) == null
            ? void 0
            : b.call(_, void 0, S, this.state.variables, this.state.context)),
          S)
        );
      } finally {
        this.dispatch({ type: "error", error: S });
      }
    }
  }
  dispatch(t) {
    const r = (n) => {
      switch (t.type) {
        case "failed":
          return { ...n, failureCount: t.failureCount, failureReason: t.error };
        case "pause":
          return { ...n, isPaused: !0 };
        case "continue":
          return { ...n, isPaused: !1 };
        case "loading":
          return {
            ...n,
            context: t.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !rc(this.options.networkMode),
            status: "loading",
            variables: t.variables,
          };
        case "success":
          return {
            ...n,
            data: t.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...n,
            data: void 0,
            error: t.error,
            failureCount: n.failureCount + 1,
            failureReason: t.error,
            isPaused: !1,
            status: "error",
          };
        case "setState":
          return { ...n, ...t.state };
      }
    };
    (this.state = r(this.state)),
      je.batch(() => {
        this.observers.forEach((n) => {
          n.onMutationUpdate(t);
        }),
          this.mutationCache.notify({ mutation: this, type: "updated", action: t });
      });
  }
}
function GA() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
  };
}
class VA extends Jo {
  constructor(t) {
    super(), (this.config = t || {}), (this.mutations = []), (this.mutationId = 0);
  }
  build(t, r, n) {
    const i = new qA({
      mutationCache: this,
      logger: t.getLogger(),
      mutationId: ++this.mutationId,
      options: t.defaultMutationOptions(r),
      state: n,
      defaultOptions: r.mutationKey ? t.getMutationDefaults(r.mutationKey) : void 0,
    });
    return this.add(i), i;
  }
  add(t) {
    this.mutations.push(t), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    (this.mutations = this.mutations.filter((r) => r !== t)), this.notify({ type: "removed", mutation: t });
  }
  clear() {
    je.batch(() => {
      this.mutations.forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(t) {
    return typeof t.exact > "u" && (t.exact = !0), this.mutations.find((r) => Rm(t, r));
  }
  findAll(t) {
    return this.mutations.filter((r) => Rm(t, r));
  }
  notify(t) {
    je.batch(() => {
      this.listeners.forEach(({ listener: r }) => {
        r(t);
      });
    });
  }
  resumePausedMutations() {
    var t;
    return (
      (this.resuming = ((t = this.resuming) != null ? t : Promise.resolve())
        .then(() => {
          const r = this.mutations.filter((n) => n.state.isPaused);
          return je.batch(() => r.reduce((n, i) => n.then(() => i.continue().catch(Lt)), Promise.resolve()));
        })
        .then(() => {
          this.resuming = void 0;
        })),
      this.resuming
    );
  }
}
function QA() {
  return {
    onFetch: (e) => {
      e.fetchFn = () => {
        var t, r, n, i, a, o;
        const u = (t = e.fetchOptions) == null || (r = t.meta) == null ? void 0 : r.refetchPage,
          s = (n = e.fetchOptions) == null || (i = n.meta) == null ? void 0 : i.fetchMore,
          l = s == null ? void 0 : s.pageParam,
          c = (s == null ? void 0 : s.direction) === "forward",
          f = (s == null ? void 0 : s.direction) === "backward",
          d = ((a = e.state.data) == null ? void 0 : a.pages) || [],
          v = ((o = e.state.data) == null ? void 0 : o.pageParams) || [];
        let y = v,
          h = !1;
        const w = (_) => {
            Object.defineProperty(_, "signal", {
              enumerable: !0,
              get: () => {
                var S;
                if ((S = e.signal) != null && S.aborted) h = !0;
                else {
                  var O;
                  (O = e.signal) == null ||
                    O.addEventListener("abort", () => {
                      h = !0;
                    });
                }
                return e.signal;
              },
            });
          },
          p = e.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + e.options.queryHash + "'")),
          x = (_, S, O, E) => ((y = E ? [S, ...y] : [...y, S]), E ? [O, ..._] : [..._, O]),
          m = (_, S, O, E) => {
            if (h) return Promise.reject("Cancelled");
            if (typeof O > "u" && !S && _.length) return Promise.resolve(_);
            const A = { queryKey: e.queryKey, pageParam: O, meta: e.options.meta };
            w(A);
            const k = p(A);
            return Promise.resolve(k).then((M) => x(_, O, M, E));
          };
        let g;
        if (!d.length) g = m([]);
        else if (c) {
          const _ = typeof l < "u",
            S = _ ? l : Um(e.options, d);
          g = m(d, _, S);
        } else if (f) {
          const _ = typeof l < "u",
            S = _ ? l : YA(e.options, d);
          g = m(d, _, S, !0);
        } else {
          y = [];
          const _ = typeof e.options.getNextPageParam > "u";
          g = (u && d[0] ? u(d[0], 0, d) : !0) ? m([], _, v[0]) : Promise.resolve(x([], v[0], d[0]));
          for (let O = 1; O < d.length; O++)
            g = g.then((E) => {
              if (u && d[O] ? u(d[O], O, d) : !0) {
                const k = _ ? v[O] : Um(e.options, E);
                return m(E, _, k);
              }
              return Promise.resolve(x(E, v[O], d[O]));
            });
        }
        return g.then((_) => ({ pages: _, pageParams: y }));
      };
    },
  };
}
function Um(e, t) {
  return e.getNextPageParam == null ? void 0 : e.getNextPageParam(t[t.length - 1], t);
}
function YA(e, t) {
  return e.getPreviousPageParam == null ? void 0 : e.getPreviousPageParam(t[0], t);
}
class KA {
  constructor(t = {}) {
    (this.queryCache = t.queryCache || new HA()),
      (this.mutationCache = t.mutationCache || new VA()),
      (this.logger = t.logger || wv),
      (this.defaultOptions = t.defaultOptions || {}),
      (this.queryDefaults = []),
      (this.mutationDefaults = []),
      (this.mountCount = 0);
  }
  mount() {
    this.mountCount++,
      this.mountCount === 1 &&
        ((this.unsubscribeFocus = zs.subscribe(() => {
          zs.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
        })),
        (this.unsubscribeOnline = Ws.subscribe(() => {
          Ws.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
        })));
  }
  unmount() {
    var t, r;
    this.mountCount--,
      this.mountCount === 0 &&
        ((t = this.unsubscribeFocus) == null || t.call(this),
        (this.unsubscribeFocus = void 0),
        (r = this.unsubscribeOnline) == null || r.call(this),
        (this.unsubscribeOnline = void 0));
  }
  isFetching(t, r) {
    const [n] = Yr(t, r);
    return (n.fetchStatus = "fetching"), this.queryCache.findAll(n).length;
  }
  isMutating(t) {
    return this.mutationCache.findAll({ ...t, fetching: !0 }).length;
  }
  getQueryData(t, r) {
    var n;
    return (n = this.queryCache.find(t, r)) == null ? void 0 : n.state.data;
  }
  ensureQueryData(t, r, n) {
    const i = to(t, r, n),
      a = this.getQueryData(i.queryKey);
    return a ? Promise.resolve(a) : this.fetchQuery(i);
  }
  getQueriesData(t) {
    return this.getQueryCache()
      .findAll(t)
      .map(({ queryKey: r, state: n }) => {
        const i = n.data;
        return [r, i];
      });
  }
  setQueryData(t, r, n) {
    const i = this.queryCache.find(t),
      a = i == null ? void 0 : i.state.data,
      o = jA(r, a);
    if (typeof o > "u") return;
    const u = to(t),
      s = this.defaultQueryOptions(u);
    return this.queryCache.build(this, s).setData(o, { ...n, manual: !0 });
  }
  setQueriesData(t, r, n) {
    return je.batch(() =>
      this.getQueryCache()
        .findAll(t)
        .map(({ queryKey: i }) => [i, this.setQueryData(i, r, n)]),
    );
  }
  getQueryState(t, r) {
    var n;
    return (n = this.queryCache.find(t, r)) == null ? void 0 : n.state;
  }
  removeQueries(t, r) {
    const [n] = Yr(t, r),
      i = this.queryCache;
    je.batch(() => {
      i.findAll(n).forEach((a) => {
        i.remove(a);
      });
    });
  }
  resetQueries(t, r, n) {
    const [i, a] = Yr(t, r, n),
      o = this.queryCache,
      u = { type: "active", ...i };
    return je.batch(
      () => (
        o.findAll(i).forEach((s) => {
          s.reset();
        }),
        this.refetchQueries(u, a)
      ),
    );
  }
  cancelQueries(t, r, n) {
    const [i, a = {}] = Yr(t, r, n);
    typeof a.revert > "u" && (a.revert = !0);
    const o = je.batch(() => this.queryCache.findAll(i).map((u) => u.cancel(a)));
    return Promise.all(o).then(Lt).catch(Lt);
  }
  invalidateQueries(t, r, n) {
    const [i, a] = Yr(t, r, n);
    return je.batch(() => {
      var o, u;
      if (
        (this.queryCache.findAll(i).forEach((l) => {
          l.invalidate();
        }),
        i.refetchType === "none")
      )
        return Promise.resolve();
      const s = { ...i, type: (o = (u = i.refetchType) != null ? u : i.type) != null ? o : "active" };
      return this.refetchQueries(s, a);
    });
  }
  refetchQueries(t, r, n) {
    const [i, a] = Yr(t, r, n),
      o = je.batch(() =>
        this.queryCache
          .findAll(i)
          .filter((s) => !s.isDisabled())
          .map((s) => {
            var l;
            return s.fetch(void 0, {
              ...a,
              cancelRefetch: (l = a == null ? void 0 : a.cancelRefetch) != null ? l : !0,
              meta: { refetchPage: i.refetchPage },
            });
          }),
      );
    let u = Promise.all(o).then(Lt);
    return (a != null && a.throwOnError) || (u = u.catch(Lt)), u;
  }
  fetchQuery(t, r, n) {
    const i = to(t, r, n),
      a = this.defaultQueryOptions(i);
    typeof a.retry > "u" && (a.retry = !1);
    const o = this.queryCache.build(this, a);
    return o.isStaleByTime(a.staleTime) ? o.fetch(a) : Promise.resolve(o.state.data);
  }
  prefetchQuery(t, r, n) {
    return this.fetchQuery(t, r, n).then(Lt).catch(Lt);
  }
  fetchInfiniteQuery(t, r, n) {
    const i = to(t, r, n);
    return (i.behavior = QA()), this.fetchQuery(i);
  }
  prefetchInfiniteQuery(t, r, n) {
    return this.fetchInfiniteQuery(t, r, n).then(Lt).catch(Lt);
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getLogger() {
    return this.logger;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(t) {
    this.defaultOptions = t;
  }
  setQueryDefaults(t, r) {
    const n = this.queryDefaults.find((i) => Un(t) === Un(i.queryKey));
    n ? (n.defaultOptions = r) : this.queryDefaults.push({ queryKey: t, defaultOptions: r });
  }
  getQueryDefaults(t) {
    if (!t) return;
    const r = this.queryDefaults.find((n) => Us(t, n.queryKey));
    return r == null ? void 0 : r.defaultOptions;
  }
  setMutationDefaults(t, r) {
    const n = this.mutationDefaults.find((i) => Un(t) === Un(i.mutationKey));
    n ? (n.defaultOptions = r) : this.mutationDefaults.push({ mutationKey: t, defaultOptions: r });
  }
  getMutationDefaults(t) {
    if (!t) return;
    const r = this.mutationDefaults.find((n) => Us(t, n.mutationKey));
    return r == null ? void 0 : r.defaultOptions;
  }
  defaultQueryOptions(t) {
    if (t != null && t._defaulted) return t;
    const r = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(t == null ? void 0 : t.queryKey),
      ...t,
      _defaulted: !0,
    };
    return (
      !r.queryHash && r.queryKey && (r.queryHash = xv(r.queryKey, r)),
      typeof r.refetchOnReconnect > "u" && (r.refetchOnReconnect = r.networkMode !== "always"),
      typeof r.useErrorBoundary > "u" && (r.useErrorBoundary = !!r.suspense),
      r
    );
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted
      ? t
      : {
          ...this.defaultOptions.mutations,
          ...this.getMutationDefaults(t == null ? void 0 : t.mutationKey),
          ...t,
          _defaulted: !0,
        };
  }
  clear() {
    this.queryCache.clear(), this.mutationCache.clear();
  }
}
class XA extends Jo {
  constructor(t, r) {
    super(),
      (this.client = t),
      (this.options = r),
      (this.trackedProps = new Set()),
      (this.selectError = null),
      this.bindMethods(),
      this.setOptions(r);
  }
  bindMethods() {
    (this.remove = this.remove.bind(this)), (this.refetch = this.refetch.bind(this));
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.currentQuery.addObserver(this),
      zm(this.currentQuery, this.options) && this.executeFetch(),
      this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Vd(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return Vd(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    (this.listeners = new Set()),
      this.clearStaleTimeout(),
      this.clearRefetchInterval(),
      this.currentQuery.removeObserver(this);
  }
  setOptions(t, r) {
    const n = this.options,
      i = this.currentQuery;
    if (
      ((this.options = this.client.defaultQueryOptions(t)),
      jm(n, this.options) ||
        this.client
          .getQueryCache()
          .notify({ type: "observerOptionsUpdated", query: this.currentQuery, observer: this }),
      typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
    )
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = n.queryKey), this.updateQuery();
    const a = this.hasListeners();
    a && Wm(this.currentQuery, i, this.options, n) && this.executeFetch(),
      this.updateResult(r),
      a &&
        (this.currentQuery !== i || this.options.enabled !== n.enabled || this.options.staleTime !== n.staleTime) &&
        this.updateStaleTimeout();
    const o = this.computeRefetchInterval();
    a &&
      (this.currentQuery !== i || this.options.enabled !== n.enabled || o !== this.currentRefetchInterval) &&
      this.updateRefetchInterval(o);
  }
  getOptimisticResult(t) {
    const r = this.client.getQueryCache().build(this.client, t),
      n = this.createResult(r, t);
    return (
      ZA(this, n, t) &&
        ((this.currentResult = n),
        (this.currentResultOptions = this.options),
        (this.currentResultState = this.currentQuery.state)),
      n
    );
  }
  getCurrentResult() {
    return this.currentResult;
  }
  trackResult(t) {
    const r = {};
    return (
      Object.keys(t).forEach((n) => {
        Object.defineProperty(r, n, { configurable: !1, enumerable: !0, get: () => (this.trackedProps.add(n), t[n]) });
      }),
      r
    );
  }
  getCurrentQuery() {
    return this.currentQuery;
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }
  refetch({ refetchPage: t, ...r } = {}) {
    return this.fetch({ ...r, meta: { refetchPage: t } });
  }
  fetchOptimistic(t) {
    const r = this.client.defaultQueryOptions(t),
      n = this.client.getQueryCache().build(this.client, r);
    return (n.isFetchingOptimistic = !0), n.fetch().then(() => this.createResult(n, r));
  }
  fetch(t) {
    var r;
    return this.executeFetch({ ...t, cancelRefetch: (r = t.cancelRefetch) != null ? r : !0 }).then(
      () => (this.updateResult(), this.currentResult),
    );
  }
  executeFetch(t) {
    this.updateQuery();
    let r = this.currentQuery.fetch(this.options, t);
    return (t != null && t.throwOnError) || (r = r.catch(Lt)), r;
  }
  updateStaleTimeout() {
    if ((this.clearStaleTimeout(), Io || this.currentResult.isStale || !Hd(this.options.staleTime))) return;
    const r = qb(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, r);
  }
  computeRefetchInterval() {
    var t;
    return typeof this.options.refetchInterval == "function"
      ? this.options.refetchInterval(this.currentResult.data, this.currentQuery)
      : (t = this.options.refetchInterval) != null
      ? t
      : !1;
  }
  updateRefetchInterval(t) {
    this.clearRefetchInterval(),
      (this.currentRefetchInterval = t),
      !(Io || this.options.enabled === !1 || !Hd(this.currentRefetchInterval) || this.currentRefetchInterval === 0) &&
        (this.refetchIntervalId = setInterval(() => {
          (this.options.refetchIntervalInBackground || zs.isFocused()) && this.executeFetch();
        }, this.currentRefetchInterval));
  }
  updateTimers() {
    this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval());
  }
  clearStaleTimeout() {
    this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
  }
  clearRefetchInterval() {
    this.refetchIntervalId && (clearInterval(this.refetchIntervalId), (this.refetchIntervalId = void 0));
  }
  createResult(t, r) {
    const n = this.currentQuery,
      i = this.options,
      a = this.currentResult,
      o = this.currentResultState,
      u = this.currentResultOptions,
      s = t !== n,
      l = s ? t.state : this.currentQueryInitialState,
      c = s ? this.currentResult : this.previousQueryResult,
      { state: f } = t;
    let { dataUpdatedAt: d, error: v, errorUpdatedAt: y, fetchStatus: h, status: w } = f,
      p = !1,
      x = !1,
      m;
    if (r._optimisticResults) {
      const O = this.hasListeners(),
        E = !O && zm(t, r),
        A = O && Wm(t, n, r, i);
      (E || A) && ((h = rc(t.options.networkMode) ? "fetching" : "paused"), d || (w = "loading")),
        r._optimisticResults === "isRestoring" && (h = "idle");
    }
    if (r.keepPreviousData && !f.dataUpdatedAt && c != null && c.isSuccess && w !== "error")
      (m = c.data), (d = c.dataUpdatedAt), (w = c.status), (p = !0);
    else if (r.select && typeof f.data < "u")
      if (a && f.data === (o == null ? void 0 : o.data) && r.select === this.selectFn) m = this.selectResult;
      else
        try {
          (this.selectFn = r.select),
            (m = r.select(f.data)),
            (m = Gd(a == null ? void 0 : a.data, m, r)),
            (this.selectResult = m),
            (this.selectError = null);
        } catch (O) {
          this.selectError = O;
        }
    else m = f.data;
    if (typeof r.placeholderData < "u" && typeof m > "u" && w === "loading") {
      let O;
      if (a != null && a.isPlaceholderData && r.placeholderData === (u == null ? void 0 : u.placeholderData))
        O = a.data;
      else if (
        ((O = typeof r.placeholderData == "function" ? r.placeholderData() : r.placeholderData),
        r.select && typeof O < "u")
      )
        try {
          (O = r.select(O)), (this.selectError = null);
        } catch (E) {
          this.selectError = E;
        }
      typeof O < "u" && ((w = "success"), (m = Gd(a == null ? void 0 : a.data, O, r)), (x = !0));
    }
    this.selectError && ((v = this.selectError), (m = this.selectResult), (y = Date.now()), (w = "error"));
    const g = h === "fetching",
      b = w === "loading",
      _ = w === "error";
    return {
      status: w,
      fetchStatus: h,
      isLoading: b,
      isSuccess: w === "success",
      isError: _,
      isInitialLoading: b && g,
      data: m,
      dataUpdatedAt: d,
      error: v,
      errorUpdatedAt: y,
      failureCount: f.fetchFailureCount,
      failureReason: f.fetchFailureReason,
      errorUpdateCount: f.errorUpdateCount,
      isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
      isFetchedAfterMount: f.dataUpdateCount > l.dataUpdateCount || f.errorUpdateCount > l.errorUpdateCount,
      isFetching: g,
      isRefetching: g && !b,
      isLoadingError: _ && f.dataUpdatedAt === 0,
      isPaused: h === "paused",
      isPlaceholderData: x,
      isPreviousData: p,
      isRefetchError: _ && f.dataUpdatedAt !== 0,
      isStale: bv(t, r),
      refetch: this.refetch,
      remove: this.remove,
    };
  }
  updateResult(t) {
    const r = this.currentResult,
      n = this.createResult(this.currentQuery, this.options);
    if (((this.currentResultState = this.currentQuery.state), (this.currentResultOptions = this.options), jm(n, r)))
      return;
    this.currentResult = n;
    const i = { cache: !0 },
      a = () => {
        if (!r) return !0;
        const { notifyOnChangeProps: o } = this.options;
        if (o === "all" || (!o && !this.trackedProps.size)) return !0;
        const u = new Set(o ?? this.trackedProps);
        return (
          this.options.useErrorBoundary && u.add("error"),
          Object.keys(this.currentResult).some((s) => {
            const l = s;
            return this.currentResult[l] !== r[l] && u.has(l);
          })
        );
      };
    (t == null ? void 0 : t.listeners) !== !1 && a() && (i.listeners = !0), this.notify({ ...i, ...t });
  }
  updateQuery() {
    const t = this.client.getQueryCache().build(this.client, this.options);
    if (t === this.currentQuery) return;
    const r = this.currentQuery;
    (this.currentQuery = t),
      (this.currentQueryInitialState = t.state),
      (this.previousQueryResult = this.currentResult),
      this.hasListeners() && (r == null || r.removeObserver(this), t.addObserver(this));
  }
  onQueryUpdate(t) {
    const r = {};
    t.type === "success" ? (r.onSuccess = !t.manual) : t.type === "error" && !es(t.error) && (r.onError = !0),
      this.updateResult(r),
      this.hasListeners() && this.updateTimers();
  }
  notify(t) {
    je.batch(() => {
      if (t.onSuccess) {
        var r, n, i, a;
        (r = (n = this.options).onSuccess) == null || r.call(n, this.currentResult.data),
          (i = (a = this.options).onSettled) == null || i.call(a, this.currentResult.data, null);
      } else if (t.onError) {
        var o, u, s, l;
        (o = (u = this.options).onError) == null || o.call(u, this.currentResult.error),
          (s = (l = this.options).onSettled) == null || s.call(l, void 0, this.currentResult.error);
      }
      t.listeners &&
        this.listeners.forEach(({ listener: c }) => {
          c(this.currentResult);
        }),
        t.cache && this.client.getQueryCache().notify({ query: this.currentQuery, type: "observerResultsUpdated" });
    });
  }
}
function JA(e, t) {
  return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1);
}
function zm(e, t) {
  return JA(e, t) || (e.state.dataUpdatedAt > 0 && Vd(e, t, t.refetchOnMount));
}
function Vd(e, t, r) {
  if (t.enabled !== !1) {
    const n = typeof r == "function" ? r(e) : r;
    return n === "always" || (n !== !1 && bv(e, t));
  }
  return !1;
}
function Wm(e, t, r, n) {
  return r.enabled !== !1 && (e !== t || n.enabled === !1) && (!r.suspense || e.state.status !== "error") && bv(e, r);
}
function bv(e, t) {
  return e.isStaleByTime(t.staleTime);
}
function ZA(e, t, r) {
  return r.keepPreviousData ? !1 : r.placeholderData !== void 0 ? t.isPlaceholderData : e.getCurrentResult() !== t;
}
var Jb = { exports: {} },
  Zb = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ea = B;
function eT(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var tT = typeof Object.is == "function" ? Object.is : eT,
  rT = ea.useState,
  nT = ea.useEffect,
  iT = ea.useLayoutEffect,
  aT = ea.useDebugValue;
function oT(e, t) {
  var r = t(),
    n = rT({ inst: { value: r, getSnapshot: t } }),
    i = n[0].inst,
    a = n[1];
  return (
    iT(
      function () {
        (i.value = r), (i.getSnapshot = t), pf(i) && a({ inst: i });
      },
      [e, r, t],
    ),
    nT(
      function () {
        return (
          pf(i) && a({ inst: i }),
          e(function () {
            pf(i) && a({ inst: i });
          })
        );
      },
      [e],
    ),
    aT(r),
    r
  );
}
function pf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !tT(e, r);
  } catch {
    return !0;
  }
}
function uT(e, t) {
  return t();
}
var sT = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? uT : oT;
Zb.useSyncExternalStore = ea.useSyncExternalStore !== void 0 ? ea.useSyncExternalStore : sT;
Jb.exports = Zb;
var lT = Jb.exports;
const cT = lT.useSyncExternalStore,
  Hm = B.createContext(void 0),
  e_ = B.createContext(!1);
function t_(e, t) {
  return (
    e ||
    (t && typeof window < "u"
      ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = Hm), window.ReactQueryClientContext)
      : Hm)
  );
}
const fT = ({ context: e } = {}) => {
    const t = B.useContext(t_(e, B.useContext(e_)));
    if (!t) throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  dT = ({ client: e, children: t, context: r, contextSharing: n = !1 }) => {
    B.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    );
    const i = t_(r, n);
    return B.createElement(e_.Provider, { value: !r && n }, B.createElement(i.Provider, { value: e }, t));
  },
  r_ = B.createContext(!1),
  hT = () => B.useContext(r_);
r_.Provider;
function pT() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
const vT = B.createContext(pT()),
  yT = () => B.useContext(vT);
function mT(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
const gT = (e, t) => {
    (e.suspense || e.useErrorBoundary) && (t.isReset() || (e.retryOnMount = !1));
  },
  xT = (e) => {
    B.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  wT = ({ result: e, errorResetBoundary: t, useErrorBoundary: r, query: n }) =>
    e.isError && !t.isReset() && !e.isFetching && mT(r, [e.error, n]),
  bT = (e) => {
    e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
  },
  _T = (e, t) => e.isLoading && e.isFetching && !t,
  ST = (e, t, r) => (e == null ? void 0 : e.suspense) && _T(t, r),
  OT = (e, t, r) =>
    t
      .fetchOptimistic(e)
      .then(({ data: n }) => {
        e.onSuccess == null || e.onSuccess(n), e.onSettled == null || e.onSettled(n, null);
      })
      .catch((n) => {
        r.clearReset(), e.onError == null || e.onError(n), e.onSettled == null || e.onSettled(void 0, n);
      });
function ET(e, t) {
  const r = fT({ context: e.context }),
    n = hT(),
    i = yT(),
    a = r.defaultQueryOptions(e);
  (a._optimisticResults = n ? "isRestoring" : "optimistic"),
    a.onError && (a.onError = je.batchCalls(a.onError)),
    a.onSuccess && (a.onSuccess = je.batchCalls(a.onSuccess)),
    a.onSettled && (a.onSettled = je.batchCalls(a.onSettled)),
    bT(a),
    gT(a, i),
    xT(i);
  const [o] = B.useState(() => new t(r, a)),
    u = o.getOptimisticResult(a);
  if (
    (cT(
      B.useCallback(
        (s) => {
          const l = n ? () => {} : o.subscribe(je.batchCalls(s));
          return o.updateResult(), l;
        },
        [o, n],
      ),
      () => o.getCurrentResult(),
      () => o.getCurrentResult(),
    ),
    B.useEffect(() => {
      o.setOptions(a, { listeners: !1 });
    }, [a, o]),
    ST(a, u, n))
  )
    throw OT(a, o, i);
  if (wT({ result: u, errorResetBoundary: i, useErrorBoundary: a.useErrorBoundary, query: o.getCurrentQuery() }))
    throw u.error;
  return a.notifyOnChangeProps ? u : o.trackResult(u);
}
function yn(e, t, r) {
  const n = to(e, t, r);
  return ET(n, XA);
}
function n_(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (r = n_(e[t])) && (n && (n += " "), (n += r));
    else for (t in e) e[t] && (n && (n += " "), (n += t));
  return n;
}
function kT() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = n_(e)) && (n && (n += " "), (n += t));
  return n;
}
function AT() {
  for (var e = 0, t, r, n = ""; e < arguments.length; )
    (t = arguments[e++]) && (r = i_(t)) && (n && (n += " "), (n += r));
  return n;
}
function i_(e) {
  if (typeof e == "string") return e;
  for (var t, r = "", n = 0; n < e.length; n++) e[n] && (t = i_(e[n])) && (r && (r += " "), (r += t));
  return r;
}
var _v = "-";
function TT(e) {
  var t = PT(e),
    r = e.conflictingClassGroups,
    n = e.conflictingClassGroupModifiers,
    i = n === void 0 ? {} : n;
  function a(u) {
    var s = u.split(_v);
    return s[0] === "" && s.length !== 1 && s.shift(), a_(s, t) || CT(u);
  }
  function o(u, s) {
    var l = r[u] || [];
    return s && i[u] ? [].concat(l, i[u]) : l;
  }
  return { getClassGroupId: a, getConflictingClassGroupIds: o };
}
function a_(e, t) {
  var o;
  if (e.length === 0) return t.classGroupId;
  var r = e[0],
    n = t.nextPart.get(r),
    i = n ? a_(e.slice(1), n) : void 0;
  if (i) return i;
  if (t.validators.length !== 0) {
    var a = e.join(_v);
    return (o = t.validators.find(function (u) {
      var s = u.validator;
      return s(a);
    })) == null
      ? void 0
      : o.classGroupId;
  }
}
var qm = /^\[(.+)\]$/;
function CT(e) {
  if (qm.test(e)) {
    var t = qm.exec(e)[1],
      r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r) return "arbitrary.." + r;
  }
}
function PT(e) {
  var t = e.theme,
    r = e.prefix,
    n = { nextPart: new Map(), validators: [] },
    i = $T(Object.entries(e.classGroups), r);
  return (
    i.forEach(function (a) {
      var o = a[0],
        u = a[1];
      Qd(u, n, o, t);
    }),
    n
  );
}
function Qd(e, t, r, n) {
  e.forEach(function (i) {
    if (typeof i == "string") {
      var a = i === "" ? t : Gm(t, i);
      a.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (MT(i)) {
        Qd(i(n), t, r, n);
        return;
      }
      t.validators.push({ validator: i, classGroupId: r });
      return;
    }
    Object.entries(i).forEach(function (o) {
      var u = o[0],
        s = o[1];
      Qd(s, Gm(t, u), r, n);
    });
  });
}
function Gm(e, t) {
  var r = e;
  return (
    t.split(_v).forEach(function (n) {
      r.nextPart.has(n) || r.nextPart.set(n, { nextPart: new Map(), validators: [] }), (r = r.nextPart.get(n));
    }),
    r
  );
}
function MT(e) {
  return e.isThemeGetter;
}
function $T(e, t) {
  return t
    ? e.map(function (r) {
        var n = r[0],
          i = r[1],
          a = i.map(function (o) {
            return typeof o == "string"
              ? t + o
              : typeof o == "object"
              ? Object.fromEntries(
                  Object.entries(o).map(function (u) {
                    var s = u[0],
                      l = u[1];
                    return [t + s, l];
                  }),
                )
              : o;
          });
        return [n, a];
      })
    : e;
}
function IT(e) {
  if (e < 1) return { get: function () {}, set: function () {} };
  var t = 0,
    r = new Map(),
    n = new Map();
  function i(a, o) {
    r.set(a, o), t++, t > e && ((t = 0), (n = r), (r = new Map()));
  }
  return {
    get: function (o) {
      var u = r.get(o);
      if (u !== void 0) return u;
      if ((u = n.get(o)) !== void 0) return i(o, u), u;
    },
    set: function (o, u) {
      r.has(o) ? r.set(o, u) : i(o, u);
    },
  };
}
var o_ = "!";
function NT(e) {
  var t = e.separator || ":",
    r = t.length === 1,
    n = t[0],
    i = t.length;
  return function (o) {
    for (var u = [], s = 0, l = 0, c, f = 0; f < o.length; f++) {
      var d = o[f];
      if (s === 0) {
        if (d === n && (r || o.slice(f, f + i) === t)) {
          u.push(o.slice(l, f)), (l = f + i);
          continue;
        }
        if (d === "/") {
          c = f;
          continue;
        }
      }
      d === "[" ? s++ : d === "]" && s--;
    }
    var v = u.length === 0 ? o : o.substring(l),
      y = v.startsWith(o_),
      h = y ? v.substring(1) : v,
      w = c && c > l ? c - l : void 0;
    return { modifiers: u, hasImportantModifier: y, baseClassName: h, maybePostfixModifierPosition: w };
  };
}
function RT(e) {
  if (e.length <= 1) return e;
  var t = [],
    r = [];
  return (
    e.forEach(function (n) {
      var i = n[0] === "[";
      i ? (t.push.apply(t, r.sort().concat([n])), (r = [])) : r.push(n);
    }),
    t.push.apply(t, r.sort()),
    t
  );
}
function jT(e) {
  return { cache: IT(e.cacheSize), splitModifiers: NT(e), ...TT(e) };
}
var DT = /\s+/;
function LT(e, t) {
  var r = t.splitModifiers,
    n = t.getClassGroupId,
    i = t.getConflictingClassGroupIds,
    a = new Set();
  return e
    .trim()
    .split(DT)
    .map(function (o) {
      var u = r(o),
        s = u.modifiers,
        l = u.hasImportantModifier,
        c = u.baseClassName,
        f = u.maybePostfixModifierPosition,
        d = n(f ? c.substring(0, f) : c),
        v = !!f;
      if (!d) {
        if (!f) return { isTailwindClass: !1, originalClassName: o };
        if (((d = n(c)), !d)) return { isTailwindClass: !1, originalClassName: o };
        v = !1;
      }
      var y = RT(s).join(":"),
        h = l ? y + o_ : y;
      return { isTailwindClass: !0, modifierId: h, classGroupId: d, originalClassName: o, hasPostfixModifier: v };
    })
    .reverse()
    .filter(function (o) {
      if (!o.isTailwindClass) return !0;
      var u = o.modifierId,
        s = o.classGroupId,
        l = o.hasPostfixModifier,
        c = u + s;
      return a.has(c)
        ? !1
        : (a.add(c),
          i(s, l).forEach(function (f) {
            return a.add(u + f);
          }),
          !0);
    })
    .reverse()
    .map(function (o) {
      return o.originalClassName;
    })
    .join(" ");
}
function FT() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  var n,
    i,
    a,
    o = u;
  function u(l) {
    var c = t[0],
      f = t.slice(1),
      d = f.reduce(function (v, y) {
        return y(v);
      }, c());
    return (n = jT(d)), (i = n.cache.get), (a = n.cache.set), (o = s), s(l);
  }
  function s(l) {
    var c = i(l);
    if (c) return c;
    var f = LT(l, n);
    return a(l, f), f;
  }
  return function () {
    return o(AT.apply(null, arguments));
  };
}
function xe(e) {
  var t = function (n) {
    return n[e] || [];
  };
  return (t.isThemeGetter = !0), t;
}
var u_ = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  BT = /^\d+\/\d+$/,
  UT = new Set(["px", "full", "screen"]),
  zT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  WT =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  HT = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Kt(e) {
  return zn(e) || UT.has(e) || BT.test(e) || Yd(e);
}
function Yd(e) {
  return oi(e, "length", KT);
}
function qT(e) {
  return oi(e, "size", s_);
}
function GT(e) {
  return oi(e, "position", s_);
}
function VT(e) {
  return oi(e, "url", XT);
}
function Pu(e) {
  return oi(e, "number", zn);
}
function zn(e) {
  return !Number.isNaN(Number(e));
}
function QT(e) {
  return e.endsWith("%") && zn(e.slice(0, -1));
}
function ja(e) {
  return Vm(e) || oi(e, "number", Vm);
}
function ne(e) {
  return u_.test(e);
}
function Da() {
  return !0;
}
function Br(e) {
  return zT.test(e);
}
function YT(e) {
  return oi(e, "", JT);
}
function oi(e, t, r) {
  var n = u_.exec(e);
  return n ? (n[1] ? n[1] === t : r(n[2])) : !1;
}
function KT(e) {
  return WT.test(e);
}
function s_() {
  return !1;
}
function XT(e) {
  return e.startsWith("url(");
}
function Vm(e) {
  return Number.isInteger(Number(e));
}
function JT(e) {
  return HT.test(e);
}
function ZT() {
  var e = xe("colors"),
    t = xe("spacing"),
    r = xe("blur"),
    n = xe("brightness"),
    i = xe("borderColor"),
    a = xe("borderRadius"),
    o = xe("borderSpacing"),
    u = xe("borderWidth"),
    s = xe("contrast"),
    l = xe("grayscale"),
    c = xe("hueRotate"),
    f = xe("invert"),
    d = xe("gap"),
    v = xe("gradientColorStops"),
    y = xe("gradientColorStopPositions"),
    h = xe("inset"),
    w = xe("margin"),
    p = xe("opacity"),
    x = xe("padding"),
    m = xe("saturate"),
    g = xe("scale"),
    b = xe("sepia"),
    _ = xe("skew"),
    S = xe("space"),
    O = xe("translate"),
    E = function () {
      return ["auto", "contain", "none"];
    },
    A = function () {
      return ["auto", "hidden", "clip", "visible", "scroll"];
    },
    k = function () {
      return ["auto", ne, t];
    },
    C = function () {
      return [ne, t];
    },
    M = function () {
      return ["", Kt];
    },
    I = function () {
      return ["auto", zn, ne];
    },
    D = function () {
      return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
    },
    N = function () {
      return ["solid", "dashed", "dotted", "double", "none"];
    },
    W = function () {
      return [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
        "plus-lighter",
      ];
    },
    P = function () {
      return ["start", "end", "center", "between", "around", "evenly", "stretch"];
    },
    j = function () {
      return ["", "0", ne];
    },
    z = function () {
      return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
    },
    V = function () {
      return [zn, Pu];
    },
    Q = function () {
      return [zn, ne];
    };
  return {
    cacheSize: 500,
    theme: {
      colors: [Da],
      spacing: [Kt],
      blur: ["none", "", Br, ne],
      brightness: V(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Br, ne],
      borderSpacing: C(),
      borderWidth: M(),
      contrast: V(),
      grayscale: j(),
      hueRotate: Q(),
      invert: j(),
      gap: C(),
      gradientColorStops: [e],
      gradientColorStopPositions: [QT, Yd],
      inset: k(),
      margin: k(),
      opacity: V(),
      padding: C(),
      saturate: V(),
      scale: V(),
      sepia: j(),
      skew: Q(),
      space: C(),
      translate: C(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", ne] }],
      container: ["container"],
      columns: [{ columns: [Br] }],
      "break-after": [{ "break-after": z() }],
      "break-before": [{ "break-before": z() }],
      "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none"] }],
      clear: [{ clear: ["left", "right", "both", "none"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
      "object-position": [{ object: [].concat(D(), [ne]) }],
      overflow: [{ overflow: A() }],
      "overflow-x": [{ "overflow-x": A() }],
      "overflow-y": [{ "overflow-y": A() }],
      overscroll: [{ overscroll: E() }],
      "overscroll-x": [{ "overscroll-x": E() }],
      "overscroll-y": [{ "overscroll-y": E() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [h] }],
      "inset-x": [{ "inset-x": [h] }],
      "inset-y": [{ "inset-y": [h] }],
      start: [{ start: [h] }],
      end: [{ end: [h] }],
      top: [{ top: [h] }],
      right: [{ right: [h] }],
      bottom: [{ bottom: [h] }],
      left: [{ left: [h] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", ja] }],
      basis: [{ basis: k() }],
      "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", ne] }],
      grow: [{ grow: j() }],
      shrink: [{ shrink: j() }],
      order: [{ order: ["first", "last", "none", ja] }],
      "grid-cols": [{ "grid-cols": [Da] }],
      "col-start-end": [{ col: ["auto", { span: ["full", ja] }, ne] }],
      "col-start": [{ "col-start": I() }],
      "col-end": [{ "col-end": I() }],
      "grid-rows": [{ "grid-rows": [Da] }],
      "row-start-end": [{ row: ["auto", { span: [ja] }, ne] }],
      "row-start": [{ "row-start": I() }],
      "row-end": [{ "row-end": I() }],
      "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", ne] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", ne] }],
      gap: [{ gap: [d] }],
      "gap-x": [{ "gap-x": [d] }],
      "gap-y": [{ "gap-y": [d] }],
      "justify-content": [{ justify: ["normal"].concat(P()) }],
      "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }],
      "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }],
      "align-content": [{ content: ["normal"].concat(P(), ["baseline"]) }],
      "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }],
      "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }],
      "place-content": [{ "place-content": [].concat(P(), ["baseline"]) }],
      "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }],
      "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }],
      p: [{ p: [x] }],
      px: [{ px: [x] }],
      py: [{ py: [x] }],
      ps: [{ ps: [x] }],
      pe: [{ pe: [x] }],
      pt: [{ pt: [x] }],
      pr: [{ pr: [x] }],
      pb: [{ pb: [x] }],
      pl: [{ pl: [x] }],
      m: [{ m: [w] }],
      mx: [{ mx: [w] }],
      my: [{ my: [w] }],
      ms: [{ ms: [w] }],
      me: [{ me: [w] }],
      mt: [{ mt: [w] }],
      mr: [{ mr: [w] }],
      mb: [{ mb: [w] }],
      ml: [{ ml: [w] }],
      "space-x": [{ "space-x": [S] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [S] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", ne, t] }],
      "min-w": [{ "min-w": ["min", "max", "fit", ne, Kt] }],
      "max-w": [{ "max-w": ["0", "none", "full", "min", "max", "fit", "prose", { screen: [Br] }, Br, ne] }],
      h: [{ h: [ne, t, "auto", "min", "max", "fit"] }],
      "min-h": [{ "min-h": ["min", "max", "fit", ne, Kt] }],
      "max-h": [{ "max-h": [ne, t, "min", "max", "fit"] }],
      "font-size": [{ text: ["base", Br, Yd] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        { font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Pu] },
      ],
      "font-family": [{ font: [Da] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ne] }],
      "line-clamp": [{ "line-clamp": ["none", zn, Pu] }],
      leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ne, Kt] }],
      "list-image": [{ "list-image": ["none", ne] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", ne] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [p] }],
      "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [p] }],
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      "text-decoration-style": [{ decoration: [].concat(N(), ["wavy"]) }],
      "text-decoration-thickness": [{ decoration: ["auto", "from-font", Kt] }],
      "underline-offset": [{ "underline-offset": ["auto", ne, Kt] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      indent: [{ indent: C() }],
      "vertical-align": [
        { align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ne] },
      ],
      whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", ne] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [p] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [].concat(D(), [GT]) }],
      "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }],
      "bg-size": [{ bg: ["auto", "cover", "contain", qT] }],
      "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, VT] }],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [y] }],
      "gradient-via-pos": [{ via: [y] }],
      "gradient-to-pos": [{ to: [y] }],
      "gradient-from": [{ from: [v] }],
      "gradient-via": [{ via: [v] }],
      "gradient-to": [{ to: [v] }],
      rounded: [{ rounded: [a] }],
      "rounded-s": [{ "rounded-s": [a] }],
      "rounded-e": [{ "rounded-e": [a] }],
      "rounded-t": [{ "rounded-t": [a] }],
      "rounded-r": [{ "rounded-r": [a] }],
      "rounded-b": [{ "rounded-b": [a] }],
      "rounded-l": [{ "rounded-l": [a] }],
      "rounded-ss": [{ "rounded-ss": [a] }],
      "rounded-se": [{ "rounded-se": [a] }],
      "rounded-ee": [{ "rounded-ee": [a] }],
      "rounded-es": [{ "rounded-es": [a] }],
      "rounded-tl": [{ "rounded-tl": [a] }],
      "rounded-tr": [{ "rounded-tr": [a] }],
      "rounded-br": [{ "rounded-br": [a] }],
      "rounded-bl": [{ "rounded-bl": [a] }],
      "border-w": [{ border: [u] }],
      "border-w-x": [{ "border-x": [u] }],
      "border-w-y": [{ "border-y": [u] }],
      "border-w-s": [{ "border-s": [u] }],
      "border-w-e": [{ "border-e": [u] }],
      "border-w-t": [{ "border-t": [u] }],
      "border-w-r": [{ "border-r": [u] }],
      "border-w-b": [{ "border-b": [u] }],
      "border-w-l": [{ "border-l": [u] }],
      "border-opacity": [{ "border-opacity": [p] }],
      "border-style": [{ border: [].concat(N(), ["hidden"]) }],
      "divide-x": [{ "divide-x": [u] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [u] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [p] }],
      "divide-style": [{ divide: N() }],
      "border-color": [{ border: [i] }],
      "border-color-x": [{ "border-x": [i] }],
      "border-color-y": [{ "border-y": [i] }],
      "border-color-t": [{ "border-t": [i] }],
      "border-color-r": [{ "border-r": [i] }],
      "border-color-b": [{ "border-b": [i] }],
      "border-color-l": [{ "border-l": [i] }],
      "divide-color": [{ divide: [i] }],
      "outline-style": [{ outline: [""].concat(N()) }],
      "outline-offset": [{ "outline-offset": [ne, Kt] }],
      "outline-w": [{ outline: [Kt] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: M() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [p] }],
      "ring-offset-w": [{ "ring-offset": [Kt] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", Br, YT] }],
      "shadow-color": [{ shadow: [Da] }],
      opacity: [{ opacity: [p] }],
      "mix-blend": [{ "mix-blend": W() }],
      "bg-blend": [{ "bg-blend": W() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [r] }],
      brightness: [{ brightness: [n] }],
      contrast: [{ contrast: [s] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", Br, ne] }],
      grayscale: [{ grayscale: [l] }],
      "hue-rotate": [{ "hue-rotate": [c] }],
      invert: [{ invert: [f] }],
      saturate: [{ saturate: [m] }],
      sepia: [{ sepia: [b] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [r] }],
      "backdrop-brightness": [{ "backdrop-brightness": [n] }],
      "backdrop-contrast": [{ "backdrop-contrast": [s] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [l] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
      "backdrop-invert": [{ "backdrop-invert": [f] }],
      "backdrop-opacity": [{ "backdrop-opacity": [p] }],
      "backdrop-saturate": [{ "backdrop-saturate": [m] }],
      "backdrop-sepia": [{ "backdrop-sepia": [b] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [o] }],
      "border-spacing-x": [{ "border-spacing-x": [o] }],
      "border-spacing-y": [{ "border-spacing-y": [o] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ne] }],
      duration: [{ duration: Q() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", ne] }],
      delay: [{ delay: Q() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", ne] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [g] }],
      "scale-x": [{ "scale-x": [g] }],
      "scale-y": [{ "scale-y": [g] }],
      rotate: [{ rotate: [ja, ne] }],
      "translate-x": [{ "translate-x": [O] }],
      "translate-y": [{ "translate-y": [O] }],
      "skew-x": [{ "skew-x": [_] }],
      "skew-y": [{ "skew-y": [_] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            ne,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: ["appearance-none"],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            ne,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": C() }],
      "scroll-mx": [{ "scroll-mx": C() }],
      "scroll-my": [{ "scroll-my": C() }],
      "scroll-ms": [{ "scroll-ms": C() }],
      "scroll-me": [{ "scroll-me": C() }],
      "scroll-mt": [{ "scroll-mt": C() }],
      "scroll-mr": [{ "scroll-mr": C() }],
      "scroll-mb": [{ "scroll-mb": C() }],
      "scroll-ml": [{ "scroll-ml": C() }],
      "scroll-p": [{ "scroll-p": C() }],
      "scroll-px": [{ "scroll-px": C() }],
      "scroll-py": [{ "scroll-py": C() }],
      "scroll-ps": [{ "scroll-ps": C() }],
      "scroll-pe": [{ "scroll-pe": C() }],
      "scroll-pt": [{ "scroll-pt": C() }],
      "scroll-pr": [{ "scroll-pr": C() }],
      "scroll-pb": [{ "scroll-pb": C() }],
      "scroll-pl": [{ "scroll-pl": C() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [
        { touch: ["auto", "none", "pinch-zoom", "manipulation", { pan: ["x", "left", "right", "y", "up", "down"] }] },
      ],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", ne] }],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [Kt, Pu] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
var eC = FT(ZT);
function Vt(...e) {
  return eC(kT(e));
}
const ui = B.forwardRef(({ className: e, ...t }, r) =>
  T.jsx("div", {
    ref: r,
    className: Vt(
      "max-w-lg rounded-2xl border border-gray-100/20 bg-white shadow-md dark:border-gray-100/70 dark:bg-black max-h-[30rem]",
      e,
    ),
    ...t,
  }),
);
ui.displayName = "Card";
const si = B.forwardRef(({ className: e, ...t }, r) =>
  T.jsx("div", { ref: r, className: Vt("flex flex-col space-y-1.5 p-8", e), ...t }),
);
si.displayName = "CardHeader";
const li = B.forwardRef(({ className: e, ...t }, r) =>
  T.jsx("h3", {
    ref: r,
    className: Vt("font-semibold leading-none tracking-tight text-black dark:text-white", e),
    ...t,
  }),
);
li.displayName = "CardTitle";
const tC = B.forwardRef(({ className: e, ...t }, r) =>
  T.jsx("p", { ref: r, className: Vt("text-sm text-gray-200", e), ...t }),
);
tC.displayName = "CardDescription";
const ci = B.forwardRef(({ className: e, ...t }, r) =>
  T.jsx("div", { ref: r, className: Vt("p-8 pt-0 text-black dark:text-white", e), ...t }),
);
ci.displayName = "CardContent";
const fi = B.forwardRef(({ className: e, ...t }, r) =>
  T.jsx("div", {
    ref: r,
    className: Vt(
      " flex items-center border-t border-gray-100/20 px-8 py-4 pt-0 text-black dark:border-gray-100/70 dark:text-white",
      e,
    ),
    ...t,
  }),
);
fi.displayName = "CardFooter";
function ha(e) {
  return T.jsxs("svg", {
    width: "225",
    height: "49",
    viewBox: "0 0 225 49",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: [
      T.jsx("path", {
        d: "M74.297 17.82h3.978v-7.251h7.047v7.25H89.3V.246h-3.978v7.177h-7.047V.246h-3.978v17.573zM94.62 17.82h3.733l1.203-3.909h6.36l1.203 3.908h4.15L105.572.246h-5.181l-5.77 17.573zm8.128-14.33l2.308 7.595h-4.641l2.333-7.595zM122.394 18.09c4.15 0 6.703-2.483 6.703-5.604 0-3.638-2.185-4.793-6.433-5.334-2.701-.393-3.266-.983-3.266-2.236 0-1.18.884-1.991 2.628-1.991 1.743 0 2.676.737 2.922 2.335h3.658c-.319-3.49-2.627-5.26-6.58-5.26-3.88 0-6.385 2.237-6.385 5.235 0 3.392 1.842 4.744 6.335 5.334 2.579.393 3.315.884 3.315 2.285 0 1.377-1.154 2.335-2.897 2.335-2.603 0-3.266-1.302-3.438-2.875h-3.806c.221 3.514 2.431 5.776 7.244 5.776zM134.908 17.82h3.978v-7.251h7.048v7.25h3.978V.246h-3.978v7.177h-7.048V.246h-3.978v17.573zM156.607 17.82h3.953v-6.784h1.719l4.199 6.783h4.224l-4.641-7.472c2.062-.614 3.609-2.015 3.609-4.67V5.58c0-3.637-2.627-5.333-6.777-5.333h-6.286v17.573zm3.953-9.488V3.293h2.235c1.915 0 2.996.615 2.996 2.41V5.8c0 1.696-1.007 2.532-2.996 2.532h-2.235zM174.676 17.82h3.733l1.203-3.909h6.36l1.203 3.908h4.15L185.628.246h-5.181l-5.771 17.573zm8.128-14.33l2.308 7.595h-4.641l2.333-7.595zM198.382 17.82h4.003V3.342h4.739V.246h-13.481v3.097h4.739v14.476zM212.543 17.82h11.835v-3.098h-7.882v-4.375h5.992v-2.9h-5.992V3.343h7.489V.246h-11.442v17.573z",
        className: "fill-black dark:fill-white",
      }),
      T.jsx("path", {
        d: "M74.297 48.584h4.002V31.011h-4.002v17.573zM85.13 48.584h3.536v-12.51l7.318 12.51h3.978V31.011h-3.536v11.576l-6.68-11.576H85.13v17.573zM110.663 45.487v-11.38h1.571c3.708 0 5.255 1.942 5.255 5.555v.197c0 3.637-1.67 5.628-5.205 5.628h-1.621zm-3.978 3.097h5.721c6.164 0 9.233-3.515 9.233-8.774v-.197c0-5.26-3.045-8.602-9.208-8.602h-5.746v17.573zM127.448 48.584h11.836v-3.097h-7.882v-4.375h5.991v-2.9h-5.991v-4.105h7.489v-3.096h-11.443v17.573zM143.844 48.584h4.077l3.781-6.538 3.806 6.538h4.518l-5.549-9.143 5.009-8.43h-4.076l-3.315 5.85-3.339-5.85h-4.494l5.156 8.553-5.574 9.02z",
        fill: "#F2C654",
      }),
      T.jsx("path", {
        d: "M11.691 24.82c1.735-2.874 6.05-2.182 6.816 1.093l4.322 18.455c.553 2.365-1.224 4.632-3.63 4.632H3.735c-2.91 0-4.7-3.216-3.185-5.725L11.69 24.82z",
        fill: "#F0BB31",
      }),
      T.jsx("path", {
        d: "M11.691 24.82c1.735-2.874 6.05-2.182 6.816 1.093l4.322 18.455c.553 2.365-1.224 4.632-3.63 4.632H3.735c-2.91 0-4.7-3.216-3.185-5.725L11.69 24.82z",
        fill: "url(#paint0_radial)",
      }),
      T.jsx("path", {
        d: "M20.742 6.205c-.924-4.075 4.51-6.377 6.8-2.88L53.65 43.2c1.632 2.493-.158 5.8-3.14 5.8H33.45a3.751 3.751 0 01-3.66-2.92L20.742 6.205z",
        fill: "#F0BB31",
      }),
      T.jsx("path", {
        d: "M20.742 6.205c-.924-4.075 4.51-6.377 6.8-2.88L53.65 43.2c1.632 2.493-.158 5.8-3.14 5.8H33.45a3.751 3.751 0 01-3.66-2.92L20.742 6.205z",
        fill: "url(#paint1_radial)",
      }),
      T.jsxs("defs", {
        children: [
          T.jsxs("radialGradient", {
            id: "paint0_radial",
            cx: "0",
            cy: "0",
            r: "1",
            gradientUnits: "userSpaceOnUse",
            gradientTransform: "rotate(97.363 -2.714 18.024) scale(26.3246 23.2276)",
            children: [
              T.jsx("stop", { stopColor: "#E5AA12" }),
              T.jsx("stop", { offset: "1", stopColor: "#fff", stopOpacity: "0" }),
            ],
          }),
          T.jsxs("radialGradient", {
            id: "paint1_radial",
            cx: "0",
            cy: "0",
            r: "1",
            gradientUnits: "userSpaceOnUse",
            gradientTransform: "matrix(17.01393 41.80144 -29.66557 12.07442 20.534 1.61)",
            children: [
              T.jsx("stop", { stopColor: "#E5AA12" }),
              T.jsx("stop", { offset: "1", stopColor: "#fff", stopOpacity: "0" }),
            ],
          }),
        ],
      }),
    ],
  });
}
const nc = async ({ query: e, variables: t }) =>
    await fetch({}.HI_BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-hi-api-key": {}.HI_API_KEY },
      body: JSON.stringify({ query: e, variables: t }),
    }).then((r) => r.json()),
  rC = `query GetHashprice($inputInterval: ChartsInterval!, $inputSlug: String!, $filter: FilterInput) {
  getChartBySlug(inputInterval: $inputInterval, inputSlug: $inputSlug, filter: $filter) {
    metadata {
      accessors
      intervals
    }
    data
  }
}`;
async function l_(e = "_1_DAY") {
  try {
    const t = await nc({ query: rC, variables: { inputInterval: e, inputSlug: "bitcoin-usd-ph-hashprice" } });
    return t.errors
      ? (console.log(t.errors), { success: !1, message: "Error fetching Hashprice data" })
      : { success: !0, data: t };
  } catch (t) {
    return console.error("Error fetching Hashprice data: ", t), null;
  }
}
const nC = `query GetNetworkHashrate($inputInterval: ChartsInterval!, $first: Int!) {
  getNetworkHashrate(inputInterval: $inputInterval, first: $first) {
    nodes {
      timestamp
      networkHashrate
    }
  }
}`;
async function c_(e, t = 300) {
  try {
    const r = await nc({ query: nC, variables: { inputInterval: e, first: t } });
    return r.errors
      ? (console.log(r.errors), { success: !1, message: "Error fetching Network Hashrate data" })
      : { success: !0, data: r };
  } catch (r) {
    return console.error("Error fetching Network Hashrate data: ", r), null;
  }
}
const iC = `query GetBitcoinPrice {
    bitcoinPrices(last: 1) {
      nodes {
        closePrice
      }
    }
  }`;
async function f_() {
  try {
    const e = await nc({ query: iC, variables: {} });
    return e.errors
      ? { success: !1, message: "Error fetching Bitcoin Price data" }
      : { success: !0, data: e.data.bitcoinPrices.nodes[0].closePrice };
  } catch (e) {
    return console.error("Error fetching Bitcoin Price data: ", e), null;
  }
}
const aC = `query GetBitcoinOverviews($last: Int!) {
  bitcoinOverviews(last: $last) {
    nodes {
      timestamp
      hashpriceUsd
      networkHashrate7D
      networkDiff
      estDiffAdj
      coinbaseRewards24H
      feesBlocks24H
      marketcap
      nextHalvingCount
      nextHalvingDate
      txRateAvg7D
      avgBlockTime
      blocksToAdj
    }
  }
}`;
async function d_(e = 1) {
  try {
    const t = await nc({ query: aC, variables: { last: e } });
    return t.errors
      ? (console.log({ error: t.errors }), { success: !1, message: "Error fetching Bitcoin Overviews data" })
      : { success: !0, data: t };
  } catch (t) {
    return console.error("Error fetching Bitcoin Overviews data: ", t), null;
  }
}
function Hs(e) {
  "@babel/helpers - typeof";
  return (
    (Hs =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Hs(e)
  );
}
function Zn(e) {
  if (e === null || e === !0 || e === !1) return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function vt(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function wr(e) {
  vt(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || (Hs(e) === "object" && t === "[object Date]")
    ? new Date(e.getTime())
    : typeof e == "number" || t === "[object Number]"
    ? new Date(e)
    : ((typeof e == "string" || t === "[object String]") &&
        typeof console < "u" &&
        (console.warn(
          "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments",
        ),
        console.warn(new Error().stack)),
      new Date(NaN));
}
function oC(e, t) {
  vt(2, arguments);
  var r = wr(e).getTime(),
    n = Zn(t);
  return new Date(r + n);
}
var uC = {};
function ic() {
  return uC;
}
function sC(e) {
  var t = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds(),
    ),
  );
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function lC(e) {
  return (
    vt(1, arguments), e instanceof Date || (Hs(e) === "object" && Object.prototype.toString.call(e) === "[object Date]")
  );
}
function cC(e) {
  if ((vt(1, arguments), !lC(e) && typeof e != "number")) return !1;
  var t = wr(e);
  return !isNaN(Number(t));
}
function fC(e, t) {
  vt(2, arguments);
  var r = Zn(t);
  return oC(e, -r);
}
var dC = 864e5;
function hC(e) {
  vt(1, arguments);
  var t = wr(e),
    r = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var n = t.getTime(),
    i = r - n;
  return Math.floor(i / dC) + 1;
}
function qs(e) {
  vt(1, arguments);
  var t = 1,
    r = wr(e),
    n = r.getUTCDay(),
    i = (n < t ? 7 : 0) + n - t;
  return r.setUTCDate(r.getUTCDate() - i), r.setUTCHours(0, 0, 0, 0), r;
}
function h_(e) {
  vt(1, arguments);
  var t = wr(e),
    r = t.getUTCFullYear(),
    n = new Date(0);
  n.setUTCFullYear(r + 1, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var i = qs(n),
    a = new Date(0);
  a.setUTCFullYear(r, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var o = qs(a);
  return t.getTime() >= i.getTime() ? r + 1 : t.getTime() >= o.getTime() ? r : r - 1;
}
function pC(e) {
  vt(1, arguments);
  var t = h_(e),
    r = new Date(0);
  r.setUTCFullYear(t, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var n = qs(r);
  return n;
}
var vC = 6048e5;
function yC(e) {
  vt(1, arguments);
  var t = wr(e),
    r = qs(t).getTime() - pC(t).getTime();
  return Math.round(r / vC) + 1;
}
function Gs(e, t) {
  var r, n, i, a, o, u, s, l;
  vt(1, arguments);
  var c = ic(),
    f = Zn(
      (r =
        (n =
          (i =
            (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0
              ? a
              : t == null || (o = t.locale) === null || o === void 0 || (u = o.options) === null || u === void 0
              ? void 0
              : u.weekStartsOn) !== null && i !== void 0
            ? i
            : c.weekStartsOn) !== null && n !== void 0
          ? n
          : (s = c.locale) === null || s === void 0 || (l = s.options) === null || l === void 0
          ? void 0
          : l.weekStartsOn) !== null && r !== void 0
        ? r
        : 0,
    );
  if (!(f >= 0 && f <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var d = wr(e),
    v = d.getUTCDay(),
    y = (v < f ? 7 : 0) + v - f;
  return d.setUTCDate(d.getUTCDate() - y), d.setUTCHours(0, 0, 0, 0), d;
}
function p_(e, t) {
  var r, n, i, a, o, u, s, l;
  vt(1, arguments);
  var c = wr(e),
    f = c.getUTCFullYear(),
    d = ic(),
    v = Zn(
      (r =
        (n =
          (i =
            (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0
              ? a
              : t == null || (o = t.locale) === null || o === void 0 || (u = o.options) === null || u === void 0
              ? void 0
              : u.firstWeekContainsDate) !== null && i !== void 0
            ? i
            : d.firstWeekContainsDate) !== null && n !== void 0
          ? n
          : (s = d.locale) === null || s === void 0 || (l = s.options) === null || l === void 0
          ? void 0
          : l.firstWeekContainsDate) !== null && r !== void 0
        ? r
        : 1,
    );
  if (!(v >= 1 && v <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var y = new Date(0);
  y.setUTCFullYear(f + 1, 0, v), y.setUTCHours(0, 0, 0, 0);
  var h = Gs(y, t),
    w = new Date(0);
  w.setUTCFullYear(f, 0, v), w.setUTCHours(0, 0, 0, 0);
  var p = Gs(w, t);
  return c.getTime() >= h.getTime() ? f + 1 : c.getTime() >= p.getTime() ? f : f - 1;
}
function mC(e, t) {
  var r, n, i, a, o, u, s, l;
  vt(1, arguments);
  var c = ic(),
    f = Zn(
      (r =
        (n =
          (i =
            (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0
              ? a
              : t == null || (o = t.locale) === null || o === void 0 || (u = o.options) === null || u === void 0
              ? void 0
              : u.firstWeekContainsDate) !== null && i !== void 0
            ? i
            : c.firstWeekContainsDate) !== null && n !== void 0
          ? n
          : (s = c.locale) === null || s === void 0 || (l = s.options) === null || l === void 0
          ? void 0
          : l.firstWeekContainsDate) !== null && r !== void 0
        ? r
        : 1,
    ),
    d = p_(e, t),
    v = new Date(0);
  v.setUTCFullYear(d, 0, f), v.setUTCHours(0, 0, 0, 0);
  var y = Gs(v, t);
  return y;
}
var gC = 6048e5;
function xC(e, t) {
  vt(1, arguments);
  var r = wr(e),
    n = Gs(r, t).getTime() - mC(r, t).getTime();
  return Math.round(n / gC) + 1;
}
function fe(e, t) {
  for (var r = e < 0 ? "-" : "", n = Math.abs(e).toString(); n.length < t; ) n = "0" + n;
  return r + n;
}
var wC = {
  y: function (t, r) {
    var n = t.getUTCFullYear(),
      i = n > 0 ? n : 1 - n;
    return fe(r === "yy" ? i % 100 : i, r.length);
  },
  M: function (t, r) {
    var n = t.getUTCMonth();
    return r === "M" ? String(n + 1) : fe(n + 1, 2);
  },
  d: function (t, r) {
    return fe(t.getUTCDate(), r.length);
  },
  a: function (t, r) {
    var n = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  h: function (t, r) {
    return fe(t.getUTCHours() % 12 || 12, r.length);
  },
  H: function (t, r) {
    return fe(t.getUTCHours(), r.length);
  },
  m: function (t, r) {
    return fe(t.getUTCMinutes(), r.length);
  },
  s: function (t, r) {
    return fe(t.getUTCSeconds(), r.length);
  },
  S: function (t, r) {
    var n = r.length,
      i = t.getUTCMilliseconds(),
      a = Math.floor(i * Math.pow(10, n - 3));
    return fe(a, r.length);
  },
};
const Ur = wC;
var mi = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  bC = {
    G: function (t, r, n) {
      var i = t.getUTCFullYear() > 0 ? 1 : 0;
      switch (r) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(i, { width: "abbreviated" });
        case "GGGGG":
          return n.era(i, { width: "narrow" });
        case "GGGG":
        default:
          return n.era(i, { width: "wide" });
      }
    },
    y: function (t, r, n) {
      if (r === "yo") {
        var i = t.getUTCFullYear(),
          a = i > 0 ? i : 1 - i;
        return n.ordinalNumber(a, { unit: "year" });
      }
      return Ur.y(t, r);
    },
    Y: function (t, r, n, i) {
      var a = p_(t, i),
        o = a > 0 ? a : 1 - a;
      if (r === "YY") {
        var u = o % 100;
        return fe(u, 2);
      }
      return r === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : fe(o, r.length);
    },
    R: function (t, r) {
      var n = h_(t);
      return fe(n, r.length);
    },
    u: function (t, r) {
      var n = t.getUTCFullYear();
      return fe(n, r.length);
    },
    Q: function (t, r, n) {
      var i = Math.ceil((t.getUTCMonth() + 1) / 3);
      switch (r) {
        case "Q":
          return String(i);
        case "QQ":
          return fe(i, 2);
        case "Qo":
          return n.ordinalNumber(i, { unit: "quarter" });
        case "QQQ":
          return n.quarter(i, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return n.quarter(i, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return n.quarter(i, { width: "wide", context: "formatting" });
      }
    },
    q: function (t, r, n) {
      var i = Math.ceil((t.getUTCMonth() + 1) / 3);
      switch (r) {
        case "q":
          return String(i);
        case "qq":
          return fe(i, 2);
        case "qo":
          return n.ordinalNumber(i, { unit: "quarter" });
        case "qqq":
          return n.quarter(i, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return n.quarter(i, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return n.quarter(i, { width: "wide", context: "standalone" });
      }
    },
    M: function (t, r, n) {
      var i = t.getUTCMonth();
      switch (r) {
        case "M":
        case "MM":
          return Ur.M(t, r);
        case "Mo":
          return n.ordinalNumber(i + 1, { unit: "month" });
        case "MMM":
          return n.month(i, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return n.month(i, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return n.month(i, { width: "wide", context: "formatting" });
      }
    },
    L: function (t, r, n) {
      var i = t.getUTCMonth();
      switch (r) {
        case "L":
          return String(i + 1);
        case "LL":
          return fe(i + 1, 2);
        case "Lo":
          return n.ordinalNumber(i + 1, { unit: "month" });
        case "LLL":
          return n.month(i, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return n.month(i, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return n.month(i, { width: "wide", context: "standalone" });
      }
    },
    w: function (t, r, n, i) {
      var a = xC(t, i);
      return r === "wo" ? n.ordinalNumber(a, { unit: "week" }) : fe(a, r.length);
    },
    I: function (t, r, n) {
      var i = yC(t);
      return r === "Io" ? n.ordinalNumber(i, { unit: "week" }) : fe(i, r.length);
    },
    d: function (t, r, n) {
      return r === "do" ? n.ordinalNumber(t.getUTCDate(), { unit: "date" }) : Ur.d(t, r);
    },
    D: function (t, r, n) {
      var i = hC(t);
      return r === "Do" ? n.ordinalNumber(i, { unit: "dayOfYear" }) : fe(i, r.length);
    },
    E: function (t, r, n) {
      var i = t.getUTCDay();
      switch (r) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(i, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return n.day(i, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return n.day(i, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return n.day(i, { width: "wide", context: "formatting" });
      }
    },
    e: function (t, r, n, i) {
      var a = t.getUTCDay(),
        o = (a - i.weekStartsOn + 8) % 7 || 7;
      switch (r) {
        case "e":
          return String(o);
        case "ee":
          return fe(o, 2);
        case "eo":
          return n.ordinalNumber(o, { unit: "day" });
        case "eee":
          return n.day(a, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return n.day(a, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return n.day(a, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return n.day(a, { width: "wide", context: "formatting" });
      }
    },
    c: function (t, r, n, i) {
      var a = t.getUTCDay(),
        o = (a - i.weekStartsOn + 8) % 7 || 7;
      switch (r) {
        case "c":
          return String(o);
        case "cc":
          return fe(o, r.length);
        case "co":
          return n.ordinalNumber(o, { unit: "day" });
        case "ccc":
          return n.day(a, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return n.day(a, { width: "narrow", context: "standalone" });
        case "cccccc":
          return n.day(a, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return n.day(a, { width: "wide", context: "standalone" });
      }
    },
    i: function (t, r, n) {
      var i = t.getUTCDay(),
        a = i === 0 ? 7 : i;
      switch (r) {
        case "i":
          return String(a);
        case "ii":
          return fe(a, r.length);
        case "io":
          return n.ordinalNumber(a, { unit: "day" });
        case "iii":
          return n.day(i, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return n.day(i, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return n.day(i, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return n.day(i, { width: "wide", context: "formatting" });
      }
    },
    a: function (t, r, n) {
      var i = t.getUTCHours(),
        a = i / 12 >= 1 ? "pm" : "am";
      switch (r) {
        case "a":
        case "aa":
          return n.dayPeriod(a, { width: "abbreviated", context: "formatting" });
        case "aaa":
          return n.dayPeriod(a, { width: "abbreviated", context: "formatting" }).toLowerCase();
        case "aaaaa":
          return n.dayPeriod(a, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return n.dayPeriod(a, { width: "wide", context: "formatting" });
      }
    },
    b: function (t, r, n) {
      var i = t.getUTCHours(),
        a;
      switch ((i === 12 ? (a = mi.noon) : i === 0 ? (a = mi.midnight) : (a = i / 12 >= 1 ? "pm" : "am"), r)) {
        case "b":
        case "bb":
          return n.dayPeriod(a, { width: "abbreviated", context: "formatting" });
        case "bbb":
          return n.dayPeriod(a, { width: "abbreviated", context: "formatting" }).toLowerCase();
        case "bbbbb":
          return n.dayPeriod(a, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return n.dayPeriod(a, { width: "wide", context: "formatting" });
      }
    },
    B: function (t, r, n) {
      var i = t.getUTCHours(),
        a;
      switch (
        (i >= 17 ? (a = mi.evening) : i >= 12 ? (a = mi.afternoon) : i >= 4 ? (a = mi.morning) : (a = mi.night), r)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(a, { width: "abbreviated", context: "formatting" });
        case "BBBBB":
          return n.dayPeriod(a, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return n.dayPeriod(a, { width: "wide", context: "formatting" });
      }
    },
    h: function (t, r, n) {
      if (r === "ho") {
        var i = t.getUTCHours() % 12;
        return i === 0 && (i = 12), n.ordinalNumber(i, { unit: "hour" });
      }
      return Ur.h(t, r);
    },
    H: function (t, r, n) {
      return r === "Ho" ? n.ordinalNumber(t.getUTCHours(), { unit: "hour" }) : Ur.H(t, r);
    },
    K: function (t, r, n) {
      var i = t.getUTCHours() % 12;
      return r === "Ko" ? n.ordinalNumber(i, { unit: "hour" }) : fe(i, r.length);
    },
    k: function (t, r, n) {
      var i = t.getUTCHours();
      return i === 0 && (i = 24), r === "ko" ? n.ordinalNumber(i, { unit: "hour" }) : fe(i, r.length);
    },
    m: function (t, r, n) {
      return r === "mo" ? n.ordinalNumber(t.getUTCMinutes(), { unit: "minute" }) : Ur.m(t, r);
    },
    s: function (t, r, n) {
      return r === "so" ? n.ordinalNumber(t.getUTCSeconds(), { unit: "second" }) : Ur.s(t, r);
    },
    S: function (t, r) {
      return Ur.S(t, r);
    },
    X: function (t, r, n, i) {
      var a = i._originalDate || t,
        o = a.getTimezoneOffset();
      if (o === 0) return "Z";
      switch (r) {
        case "X":
          return Ym(o);
        case "XXXX":
        case "XX":
          return $n(o);
        case "XXXXX":
        case "XXX":
        default:
          return $n(o, ":");
      }
    },
    x: function (t, r, n, i) {
      var a = i._originalDate || t,
        o = a.getTimezoneOffset();
      switch (r) {
        case "x":
          return Ym(o);
        case "xxxx":
        case "xx":
          return $n(o);
        case "xxxxx":
        case "xxx":
        default:
          return $n(o, ":");
      }
    },
    O: function (t, r, n, i) {
      var a = i._originalDate || t,
        o = a.getTimezoneOffset();
      switch (r) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Qm(o, ":");
        case "OOOO":
        default:
          return "GMT" + $n(o, ":");
      }
    },
    z: function (t, r, n, i) {
      var a = i._originalDate || t,
        o = a.getTimezoneOffset();
      switch (r) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Qm(o, ":");
        case "zzzz":
        default:
          return "GMT" + $n(o, ":");
      }
    },
    t: function (t, r, n, i) {
      var a = i._originalDate || t,
        o = Math.floor(a.getTime() / 1e3);
      return fe(o, r.length);
    },
    T: function (t, r, n, i) {
      var a = i._originalDate || t,
        o = a.getTime();
      return fe(o, r.length);
    },
  };
function Qm(e, t) {
  var r = e > 0 ? "-" : "+",
    n = Math.abs(e),
    i = Math.floor(n / 60),
    a = n % 60;
  if (a === 0) return r + String(i);
  var o = t || "";
  return r + String(i) + o + fe(a, 2);
}
function Ym(e, t) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + fe(Math.abs(e) / 60, 2);
  }
  return $n(e, t);
}
function $n(e, t) {
  var r = t || "",
    n = e > 0 ? "-" : "+",
    i = Math.abs(e),
    a = fe(Math.floor(i / 60), 2),
    o = fe(i % 60, 2);
  return n + a + r + o;
}
const _C = bC;
var Km = function (t, r) {
    switch (t) {
      case "P":
        return r.date({ width: "short" });
      case "PP":
        return r.date({ width: "medium" });
      case "PPP":
        return r.date({ width: "long" });
      case "PPPP":
      default:
        return r.date({ width: "full" });
    }
  },
  v_ = function (t, r) {
    switch (t) {
      case "p":
        return r.time({ width: "short" });
      case "pp":
        return r.time({ width: "medium" });
      case "ppp":
        return r.time({ width: "long" });
      case "pppp":
      default:
        return r.time({ width: "full" });
    }
  },
  SC = function (t, r) {
    var n = t.match(/(P+)(p+)?/) || [],
      i = n[1],
      a = n[2];
    if (!a) return Km(t, r);
    var o;
    switch (i) {
      case "P":
        o = r.dateTime({ width: "short" });
        break;
      case "PP":
        o = r.dateTime({ width: "medium" });
        break;
      case "PPP":
        o = r.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        o = r.dateTime({ width: "full" });
        break;
    }
    return o.replace("{{date}}", Km(i, r)).replace("{{time}}", v_(a, r));
  },
  OC = { p: v_, P: SC };
const EC = OC;
var kC = ["D", "DD"],
  AC = ["YY", "YYYY"];
function TC(e) {
  return kC.indexOf(e) !== -1;
}
function CC(e) {
  return AC.indexOf(e) !== -1;
}
function Xm(e, t, r) {
  if (e === "YYYY")
    throw new RangeError(
      "Use `yyyy` instead of `YYYY` (in `"
        .concat(t, "`) for formatting years to the input `")
        .concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"),
    );
  if (e === "YY")
    throw new RangeError(
      "Use `yy` instead of `YY` (in `"
        .concat(t, "`) for formatting years to the input `")
        .concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"),
    );
  if (e === "D")
    throw new RangeError(
      "Use `d` instead of `D` (in `"
        .concat(t, "`) for formatting days of the month to the input `")
        .concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"),
    );
  if (e === "DD")
    throw new RangeError(
      "Use `dd` instead of `DD` (in `"
        .concat(t, "`) for formatting days of the month to the input `")
        .concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"),
    );
}
var PC = {
    lessThanXSeconds: { one: "less than a second", other: "less than {{count}} seconds" },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: { one: "less than a minute", other: "less than {{count}} minutes" },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  MC = function (t, r, n) {
    var i,
      a = PC[t];
    return (
      typeof a == "string" ? (i = a) : r === 1 ? (i = a.one) : (i = a.other.replace("{{count}}", r.toString())),
      n != null && n.addSuffix ? (n.comparison && n.comparison > 0 ? "in " + i : i + " ago") : i
    );
  };
const $C = MC;
function vf(e) {
  return function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.width ? String(t.width) : e.defaultWidth,
      n = e.formats[r] || e.formats[e.defaultWidth];
    return n;
  };
}
var IC = { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" },
  NC = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" },
  RC = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  jC = {
    date: vf({ formats: IC, defaultWidth: "full" }),
    time: vf({ formats: NC, defaultWidth: "full" }),
    dateTime: vf({ formats: RC, defaultWidth: "full" }),
  };
const DC = jC;
var LC = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  FC = function (t, r, n, i) {
    return LC[t];
  };
const BC = FC;
function La(e) {
  return function (t, r) {
    var n = r != null && r.context ? String(r.context) : "standalone",
      i;
    if (n === "formatting" && e.formattingValues) {
      var a = e.defaultFormattingWidth || e.defaultWidth,
        o = r != null && r.width ? String(r.width) : a;
      i = e.formattingValues[o] || e.formattingValues[a];
    } else {
      var u = e.defaultWidth,
        s = r != null && r.width ? String(r.width) : e.defaultWidth;
      i = e.values[s] || e.values[u];
    }
    var l = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[l];
  };
}
var UC = { narrow: ["B", "A"], abbreviated: ["BC", "AD"], wide: ["Before Christ", "Anno Domini"] },
  zC = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  WC = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  HC = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  },
  qC = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  GC = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  VC = function (t, r) {
    var n = Number(t),
      i = n % 100;
    if (i > 20 || i < 10)
      switch (i % 10) {
        case 1:
          return n + "st";
        case 2:
          return n + "nd";
        case 3:
          return n + "rd";
      }
    return n + "th";
  },
  QC = {
    ordinalNumber: VC,
    era: La({ values: UC, defaultWidth: "wide" }),
    quarter: La({
      values: zC,
      defaultWidth: "wide",
      argumentCallback: function (t) {
        return t - 1;
      },
    }),
    month: La({ values: WC, defaultWidth: "wide" }),
    day: La({ values: HC, defaultWidth: "wide" }),
    dayPeriod: La({ values: qC, defaultWidth: "wide", formattingValues: GC, defaultFormattingWidth: "wide" }),
  };
const YC = QC;
function Fa(e) {
  return function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = r.width,
      i = (n && e.matchPatterns[n]) || e.matchPatterns[e.defaultMatchWidth],
      a = t.match(i);
    if (!a) return null;
    var o = a[0],
      u = (n && e.parsePatterns[n]) || e.parsePatterns[e.defaultParseWidth],
      s = Array.isArray(u)
        ? XC(u, function (f) {
            return f.test(o);
          })
        : KC(u, function (f) {
            return f.test(o);
          }),
      l;
    (l = e.valueCallback ? e.valueCallback(s) : s), (l = r.valueCallback ? r.valueCallback(l) : l);
    var c = t.slice(o.length);
    return { value: l, rest: c };
  };
}
function KC(e, t) {
  for (var r in e) if (e.hasOwnProperty(r) && t(e[r])) return r;
}
function XC(e, t) {
  for (var r = 0; r < e.length; r++) if (t(e[r])) return r;
}
function JC(e) {
  return function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = t.match(e.matchPattern);
    if (!n) return null;
    var i = n[0],
      a = t.match(e.parsePattern);
    if (!a) return null;
    var o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    o = r.valueCallback ? r.valueCallback(o) : o;
    var u = t.slice(i.length);
    return { value: o, rest: u };
  };
}
var ZC = /^(\d+)(th|st|nd|rd)?/i,
  eP = /\d+/i,
  tP = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  rP = { any: [/^b/i, /^(a|c)/i] },
  nP = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
  iP = { any: [/1/i, /2/i, /3/i, /4/i] },
  aP = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  oP = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i],
  },
  uP = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  sP = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  lP = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  cP = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  fP = {
    ordinalNumber: JC({
      matchPattern: ZC,
      parsePattern: eP,
      valueCallback: function (t) {
        return parseInt(t, 10);
      },
    }),
    era: Fa({ matchPatterns: tP, defaultMatchWidth: "wide", parsePatterns: rP, defaultParseWidth: "any" }),
    quarter: Fa({
      matchPatterns: nP,
      defaultMatchWidth: "wide",
      parsePatterns: iP,
      defaultParseWidth: "any",
      valueCallback: function (t) {
        return t + 1;
      },
    }),
    month: Fa({ matchPatterns: aP, defaultMatchWidth: "wide", parsePatterns: oP, defaultParseWidth: "any" }),
    day: Fa({ matchPatterns: uP, defaultMatchWidth: "wide", parsePatterns: sP, defaultParseWidth: "any" }),
    dayPeriod: Fa({ matchPatterns: lP, defaultMatchWidth: "any", parsePatterns: cP, defaultParseWidth: "any" }),
  };
const dP = fP;
var hP = {
  code: "en-US",
  formatDistance: $C,
  formatLong: DC,
  formatRelative: BC,
  localize: YC,
  match: dP,
  options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
};
const pP = hP;
var vP = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  yP = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  mP = /^'([^]*?)'?$/,
  gP = /''/g,
  xP = /[a-zA-Z]/;
function gr(e, t, r) {
  var n, i, a, o, u, s, l, c, f, d, v, y, h, w, p, x, m, g;
  vt(2, arguments);
  var b = String(t),
    _ = ic(),
    S =
      (n = (i = r == null ? void 0 : r.locale) !== null && i !== void 0 ? i : _.locale) !== null && n !== void 0
        ? n
        : pP,
    O = Zn(
      (a =
        (o =
          (u =
            (s = r == null ? void 0 : r.firstWeekContainsDate) !== null && s !== void 0
              ? s
              : r == null || (l = r.locale) === null || l === void 0 || (c = l.options) === null || c === void 0
              ? void 0
              : c.firstWeekContainsDate) !== null && u !== void 0
            ? u
            : _.firstWeekContainsDate) !== null && o !== void 0
          ? o
          : (f = _.locale) === null || f === void 0 || (d = f.options) === null || d === void 0
          ? void 0
          : d.firstWeekContainsDate) !== null && a !== void 0
        ? a
        : 1,
    );
  if (!(O >= 1 && O <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var E = Zn(
    (v =
      (y =
        (h =
          (w = r == null ? void 0 : r.weekStartsOn) !== null && w !== void 0
            ? w
            : r == null || (p = r.locale) === null || p === void 0 || (x = p.options) === null || x === void 0
            ? void 0
            : x.weekStartsOn) !== null && h !== void 0
          ? h
          : _.weekStartsOn) !== null && y !== void 0
        ? y
        : (m = _.locale) === null || m === void 0 || (g = m.options) === null || g === void 0
        ? void 0
        : g.weekStartsOn) !== null && v !== void 0
      ? v
      : 0,
  );
  if (!(E >= 0 && E <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!S.localize) throw new RangeError("locale must contain localize property");
  if (!S.formatLong) throw new RangeError("locale must contain formatLong property");
  var A = wr(e);
  if (!cC(A)) throw new RangeError("Invalid time value");
  var k = sC(A),
    C = fC(A, k),
    M = { firstWeekContainsDate: O, weekStartsOn: E, locale: S, _originalDate: A },
    I = b
      .match(yP)
      .map(function (D) {
        var N = D[0];
        if (N === "p" || N === "P") {
          var W = EC[N];
          return W(D, S.formatLong);
        }
        return D;
      })
      .join("")
      .match(vP)
      .map(function (D) {
        if (D === "''") return "'";
        var N = D[0];
        if (N === "'") return wP(D);
        var W = _C[N];
        if (W)
          return (
            !(r != null && r.useAdditionalWeekYearTokens) && CC(D) && Xm(D, t, String(e)),
            !(r != null && r.useAdditionalDayOfYearTokens) && TC(D) && Xm(D, t, String(e)),
            W(C, D, S.localize, M)
          );
        if (N.match(xP))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + N + "`");
        return D;
      })
      .join("");
  return I;
}
function wP(e) {
  var t = e.match(mP);
  return t ? t[1].replace(gP, "'") : e;
}
var y_ = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function r() {
      for (var n = [], i = 0; i < arguments.length; i++) {
        var a = arguments[i];
        if (a) {
          var o = typeof a;
          if (o === "string" || o === "number") n.push(a);
          else if (Array.isArray(a)) {
            if (a.length) {
              var u = r.apply(null, a);
              u && n.push(u);
            }
          } else if (o === "object") {
            if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]")) {
              n.push(a.toString());
              continue;
            }
            for (var s in a) t.call(a, s) && a[s] && n.push(s);
          }
        }
      }
      return n.join(" ");
    }
    e.exports ? ((r.default = r), (e.exports = r)) : (window.classNames = r);
  })();
})(y_);
var bP = y_.exports;
const Oe = he(bP);
function _P(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var bn = _P;
const pa = he(bn);
function ts(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ts = function (r) {
          return typeof r;
        })
      : (ts = function (r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    ts(e)
  );
}
var SP = ["viewBox", "children"],
  OP = [
    "aria-activedescendant",
    "aria-atomic",
    "aria-autocomplete",
    "aria-busy",
    "aria-checked",
    "aria-colcount",
    "aria-colindex",
    "aria-colspan",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    "aria-disabled",
    "aria-errormessage",
    "aria-expanded",
    "aria-flowto",
    "aria-haspopup",
    "aria-hidden",
    "aria-invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-level",
    "aria-live",
    "aria-modal",
    "aria-multiline",
    "aria-multiselectable",
    "aria-orientation",
    "aria-owns",
    "aria-placeholder",
    "aria-posinset",
    "aria-pressed",
    "aria-readonly",
    "aria-relevant",
    "aria-required",
    "aria-roledescription",
    "aria-rowcount",
    "aria-rowindex",
    "aria-rowspan",
    "aria-selected",
    "aria-setsize",
    "aria-sort",
    "aria-valuemax",
    "aria-valuemin",
    "aria-valuenow",
    "aria-valuetext",
    "className",
    "color",
    "height",
    "id",
    "lang",
    "max",
    "media",
    "method",
    "min",
    "name",
    "style",
    "target",
    "type",
    "width",
    "role",
    "tabIndex",
    "accentHeight",
    "accumulate",
    "additive",
    "alignmentBaseline",
    "allowReorder",
    "alphabetic",
    "amplitude",
    "arabicForm",
    "ascent",
    "attributeName",
    "attributeType",
    "autoReverse",
    "azimuth",
    "baseFrequency",
    "baselineShift",
    "baseProfile",
    "bbox",
    "begin",
    "bias",
    "by",
    "calcMode",
    "capHeight",
    "clip",
    "clipPath",
    "clipPathUnits",
    "clipRule",
    "colorInterpolation",
    "colorInterpolationFilters",
    "colorProfile",
    "colorRendering",
    "contentScriptType",
    "contentStyleType",
    "cursor",
    "cx",
    "cy",
    "d",
    "decelerate",
    "descent",
    "diffuseConstant",
    "direction",
    "display",
    "divisor",
    "dominantBaseline",
    "dur",
    "dx",
    "dy",
    "edgeMode",
    "elevation",
    "enableBackground",
    "end",
    "exponent",
    "externalResourcesRequired",
    "fill",
    "fillOpacity",
    "fillRule",
    "filter",
    "filterRes",
    "filterUnits",
    "floodColor",
    "floodOpacity",
    "focusable",
    "fontFamily",
    "fontSize",
    "fontSizeAdjust",
    "fontStretch",
    "fontStyle",
    "fontVariant",
    "fontWeight",
    "format",
    "from",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyphName",
    "glyphOrientationHorizontal",
    "glyphOrientationVertical",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "hanging",
    "horizAdvX",
    "horizOriginX",
    "href",
    "ideographic",
    "imageRendering",
    "in2",
    "in",
    "intercept",
    "k1",
    "k2",
    "k3",
    "k4",
    "k",
    "kernelMatrix",
    "kernelUnitLength",
    "kerning",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "letterSpacing",
    "lightingColor",
    "limitingConeAngle",
    "local",
    "markerEnd",
    "markerHeight",
    "markerMid",
    "markerStart",
    "markerUnits",
    "markerWidth",
    "mask",
    "maskContentUnits",
    "maskUnits",
    "mathematical",
    "mode",
    "numOctaves",
    "offset",
    "opacity",
    "operator",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "overlinePosition",
    "overlineThickness",
    "paintOrder",
    "panose1",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointerEvents",
    "points",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "r",
    "radius",
    "refX",
    "refY",
    "renderingIntent",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "restart",
    "result",
    "rotate",
    "rx",
    "ry",
    "seed",
    "shapeRendering",
    "slope",
    "spacing",
    "specularConstant",
    "specularExponent",
    "speed",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stemh",
    "stemv",
    "stitchTiles",
    "stopColor",
    "stopOpacity",
    "strikethroughPosition",
    "strikethroughThickness",
    "string",
    "stroke",
    "strokeDasharray",
    "strokeDashoffset",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeMiterlimit",
    "strokeOpacity",
    "strokeWidth",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textAnchor",
    "textDecoration",
    "textLength",
    "textRendering",
    "to",
    "transform",
    "u1",
    "u2",
    "underlinePosition",
    "underlineThickness",
    "unicode",
    "unicodeBidi",
    "unicodeRange",
    "unitsPerEm",
    "vAlphabetic",
    "values",
    "vectorEffect",
    "version",
    "vertAdvY",
    "vertOriginX",
    "vertOriginY",
    "vHanging",
    "vIdeographic",
    "viewTarget",
    "visibility",
    "vMathematical",
    "widths",
    "wordSpacing",
    "writingMode",
    "x1",
    "x2",
    "x",
    "xChannelSelector",
    "xHeight",
    "xlinkActuate",
    "xlinkArcrole",
    "xlinkHref",
    "xlinkRole",
    "xlinkShow",
    "xlinkTitle",
    "xlinkType",
    "xmlBase",
    "xmlLang",
    "xmlns",
    "xmlnsXlink",
    "xmlSpace",
    "y1",
    "y2",
    "y",
    "yChannelSelector",
    "z",
    "zoomAndPan",
    "ref",
    "key",
    "angle",
  ],
  Sv = [
    "dangerouslySetInnerHTML",
    "onCopy",
    "onCopyCapture",
    "onCut",
    "onCutCapture",
    "onPaste",
    "onPasteCapture",
    "onCompositionEnd",
    "onCompositionEndCapture",
    "onCompositionStart",
    "onCompositionStartCapture",
    "onCompositionUpdate",
    "onCompositionUpdateCapture",
    "onFocus",
    "onFocusCapture",
    "onBlur",
    "onBlurCapture",
    "onChange",
    "onChangeCapture",
    "onBeforeInput",
    "onBeforeInputCapture",
    "onInput",
    "onInputCapture",
    "onReset",
    "onResetCapture",
    "onSubmit",
    "onSubmitCapture",
    "onInvalid",
    "onInvalidCapture",
    "onLoad",
    "onLoadCapture",
    "onError",
    "onErrorCapture",
    "onKeyDown",
    "onKeyDownCapture",
    "onKeyPress",
    "onKeyPressCapture",
    "onKeyUp",
    "onKeyUpCapture",
    "onAbort",
    "onAbortCapture",
    "onCanPlay",
    "onCanPlayCapture",
    "onCanPlayThrough",
    "onCanPlayThroughCapture",
    "onDurationChange",
    "onDurationChangeCapture",
    "onEmptied",
    "onEmptiedCapture",
    "onEncrypted",
    "onEncryptedCapture",
    "onEnded",
    "onEndedCapture",
    "onLoadedData",
    "onLoadedDataCapture",
    "onLoadedMetadata",
    "onLoadedMetadataCapture",
    "onLoadStart",
    "onLoadStartCapture",
    "onPause",
    "onPauseCapture",
    "onPlay",
    "onPlayCapture",
    "onPlaying",
    "onPlayingCapture",
    "onProgress",
    "onProgressCapture",
    "onRateChange",
    "onRateChangeCapture",
    "onSeeked",
    "onSeekedCapture",
    "onSeeking",
    "onSeekingCapture",
    "onStalled",
    "onStalledCapture",
    "onSuspend",
    "onSuspendCapture",
    "onTimeUpdate",
    "onTimeUpdateCapture",
    "onVolumeChange",
    "onVolumeChangeCapture",
    "onWaiting",
    "onWaitingCapture",
    "onAuxClick",
    "onAuxClickCapture",
    "onClick",
    "onClickCapture",
    "onContextMenu",
    "onContextMenuCapture",
    "onDoubleClick",
    "onDoubleClickCapture",
    "onDrag",
    "onDragCapture",
    "onDragEnd",
    "onDragEndCapture",
    "onDragEnter",
    "onDragEnterCapture",
    "onDragExit",
    "onDragExitCapture",
    "onDragLeave",
    "onDragLeaveCapture",
    "onDragOver",
    "onDragOverCapture",
    "onDragStart",
    "onDragStartCapture",
    "onDrop",
    "onDropCapture",
    "onMouseDown",
    "onMouseDownCapture",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseMoveCapture",
    "onMouseOut",
    "onMouseOutCapture",
    "onMouseOver",
    "onMouseOverCapture",
    "onMouseUp",
    "onMouseUpCapture",
    "onSelect",
    "onSelectCapture",
    "onTouchCancel",
    "onTouchCancelCapture",
    "onTouchEnd",
    "onTouchEndCapture",
    "onTouchMove",
    "onTouchMoveCapture",
    "onTouchStart",
    "onTouchStartCapture",
    "onPointerDown",
    "onPointerDownCapture",
    "onPointerMove",
    "onPointerMoveCapture",
    "onPointerUp",
    "onPointerUpCapture",
    "onPointerCancel",
    "onPointerCancelCapture",
    "onPointerEnter",
    "onPointerEnterCapture",
    "onPointerLeave",
    "onPointerLeaveCapture",
    "onPointerOver",
    "onPointerOverCapture",
    "onPointerOut",
    "onPointerOutCapture",
    "onGotPointerCapture",
    "onGotPointerCaptureCapture",
    "onLostPointerCapture",
    "onLostPointerCaptureCapture",
    "onScroll",
    "onScrollCapture",
    "onWheel",
    "onWheelCapture",
    "onAnimationStart",
    "onAnimationStartCapture",
    "onAnimationEnd",
    "onAnimationEndCapture",
    "onAnimationIteration",
    "onAnimationIterationCapture",
    "onTransitionEnd",
    "onTransitionEndCapture",
  ],
  le = function (t, r, n) {
    if (!t || typeof t == "function" || typeof t == "boolean") return null;
    var i = t;
    if ((B.isValidElement(t) && (i = t.props), !pa(i))) return null;
    var a = {};
    return (
      Object.keys(i).forEach(function (o) {
        (OP.includes(o) || (n && SP.includes(o)) || (r && Sv.includes(o))) && (a[o] = i[o]);
      }),
      a
    );
  },
  Vs = function (t, r) {
    if (!t || typeof t == "function" || typeof t == "boolean") return null;
    var n = t;
    if ((B.isValidElement(t) && (n = t.props), !pa(n))) return null;
    var i = {};
    return (
      Object.keys(n).forEach(function (a) {
        Sv.includes(a) &&
          (i[a] =
            r ||
            function (o) {
              return n[a](n, o);
            });
      }),
      i
    );
  },
  EP = function (t, r, n) {
    return function (i) {
      return t(r, n, i), null;
    };
  },
  m_ = function (t, r, n) {
    if (!pa(t) || ts(t) !== "object") return null;
    var i = null;
    return (
      Object.keys(t).forEach(function (a) {
        var o = t[a];
        Sv.includes(a) && typeof o == "function" && (i || (i = {}), (i[a] = EP(o, r, n)));
      }),
      i
    );
  };
function Kd() {
  return (
    (Kd =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Kd.apply(this, arguments)
  );
}
function kP(e, t) {
  if (e == null) return {};
  var r = AP(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function AP(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Xd(e) {
  var t = e.children,
    r = e.width,
    n = e.height,
    i = e.viewBox,
    a = e.className,
    o = e.style,
    u = kP(e, ["children", "width", "height", "viewBox", "className", "style"]),
    s = i || { width: r, height: n, x: 0, y: 0 },
    l = Oe("recharts-surface", a);
  return $.createElement(
    "svg",
    Kd({}, le(u, !0, !0), {
      className: l,
      width: r,
      height: n,
      style: o,
      viewBox: "".concat(s.x, " ").concat(s.y, " ").concat(s.width, " ").concat(s.height),
      version: "1.1",
    }),
    t,
  );
}
function Jd() {
  return (
    (Jd =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Jd.apply(this, arguments)
  );
}
function TP(e, t) {
  if (e == null) return {};
  var r = CP(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function CP(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function ct(e) {
  var t = e.children,
    r = e.className,
    n = TP(e, ["children", "className"]),
    i = Oe("recharts-layer", r);
  return $.createElement("g", Jd({ className: i }, le(n, !0)), t);
}
var PP = typeof du == "object" && du && du.Object === Object && du,
  g_ = PP,
  MP = g_,
  $P = typeof self == "object" && self && self.Object === Object && self,
  IP = MP || $P || Function("return this")(),
  br = IP,
  NP = br,
  RP = NP.Symbol,
  Zo = RP,
  Jm = Zo,
  x_ = Object.prototype,
  jP = x_.hasOwnProperty,
  DP = x_.toString,
  Ba = Jm ? Jm.toStringTag : void 0;
function LP(e) {
  var t = jP.call(e, Ba),
    r = e[Ba];
  try {
    e[Ba] = void 0;
    var n = !0;
  } catch {}
  var i = DP.call(e);
  return n && (t ? (e[Ba] = r) : delete e[Ba]), i;
}
var FP = LP,
  BP = Object.prototype,
  UP = BP.toString;
function zP(e) {
  return UP.call(e);
}
var WP = zP,
  Zm = Zo,
  HP = FP,
  qP = WP,
  GP = "[object Null]",
  VP = "[object Undefined]",
  eg = Zm ? Zm.toStringTag : void 0;
function QP(e) {
  return e == null ? (e === void 0 ? VP : GP) : eg && eg in Object(e) ? HP(e) : qP(e);
}
var _n = QP,
  YP = _n,
  KP = bn,
  XP = "[object AsyncFunction]",
  JP = "[object Function]",
  ZP = "[object GeneratorFunction]",
  e2 = "[object Proxy]";
function t2(e) {
  if (!KP(e)) return !1;
  var t = YP(e);
  return t == JP || t == ZP || t == XP || t == e2;
}
var Ov = t2;
const Z = he(Ov);
function r2() {
  (this.__data__ = []), (this.size = 0);
}
var n2 = r2;
function i2(e, t) {
  return e === t || (e !== e && t !== t);
}
var Ev = i2,
  a2 = Ev;
function o2(e, t) {
  for (var r = e.length; r--; ) if (a2(e[r][0], t)) return r;
  return -1;
}
var ac = o2,
  u2 = ac,
  s2 = Array.prototype,
  l2 = s2.splice;
function c2(e) {
  var t = this.__data__,
    r = u2(t, e);
  if (r < 0) return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : l2.call(t, r, 1), --this.size, !0;
}
var f2 = c2,
  d2 = ac;
function h2(e) {
  var t = this.__data__,
    r = d2(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var p2 = h2,
  v2 = ac;
function y2(e) {
  return v2(this.__data__, e) > -1;
}
var m2 = y2,
  g2 = ac;
function x2(e, t) {
  var r = this.__data__,
    n = g2(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
}
var w2 = x2,
  b2 = n2,
  _2 = f2,
  S2 = p2,
  O2 = m2,
  E2 = w2;
function va(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
va.prototype.clear = b2;
va.prototype.delete = _2;
va.prototype.get = S2;
va.prototype.has = O2;
va.prototype.set = E2;
var oc = va,
  k2 = oc;
function A2() {
  (this.__data__ = new k2()), (this.size = 0);
}
var T2 = A2;
function C2(e) {
  var t = this.__data__,
    r = t.delete(e);
  return (this.size = t.size), r;
}
var P2 = C2;
function M2(e) {
  return this.__data__.get(e);
}
var $2 = M2;
function I2(e) {
  return this.__data__.has(e);
}
var N2 = I2,
  R2 = br,
  j2 = R2["__core-js_shared__"],
  D2 = j2,
  yf = D2,
  tg = (function () {
    var e = /[^.]+$/.exec((yf && yf.keys && yf.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
function L2(e) {
  return !!tg && tg in e;
}
var F2 = L2,
  B2 = Function.prototype,
  U2 = B2.toString;
function z2(e) {
  if (e != null) {
    try {
      return U2.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var w_ = z2,
  W2 = Ov,
  H2 = F2,
  q2 = bn,
  G2 = w_,
  V2 = /[\\^$.*+?()[\]{}|]/g,
  Q2 = /^\[object .+?Constructor\]$/,
  Y2 = Function.prototype,
  K2 = Object.prototype,
  X2 = Y2.toString,
  J2 = K2.hasOwnProperty,
  Z2 = RegExp(
    "^" +
      X2.call(J2)
        .replace(V2, "\\$&")
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
      "$",
  );
function eM(e) {
  if (!q2(e) || H2(e)) return !1;
  var t = W2(e) ? Z2 : Q2;
  return t.test(G2(e));
}
var tM = eM;
function rM(e, t) {
  return e == null ? void 0 : e[t];
}
var nM = rM,
  iM = tM,
  aM = nM;
function oM(e, t) {
  var r = aM(e, t);
  return iM(r) ? r : void 0;
}
var di = oM,
  uM = di,
  sM = br,
  lM = uM(sM, "Map"),
  kv = lM,
  cM = di,
  fM = cM(Object, "create"),
  uc = fM,
  rg = uc;
function dM() {
  (this.__data__ = rg ? rg(null) : {}), (this.size = 0);
}
var hM = dM;
function pM(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var vM = pM,
  yM = uc,
  mM = "__lodash_hash_undefined__",
  gM = Object.prototype,
  xM = gM.hasOwnProperty;
function wM(e) {
  var t = this.__data__;
  if (yM) {
    var r = t[e];
    return r === mM ? void 0 : r;
  }
  return xM.call(t, e) ? t[e] : void 0;
}
var bM = wM,
  _M = uc,
  SM = Object.prototype,
  OM = SM.hasOwnProperty;
function EM(e) {
  var t = this.__data__;
  return _M ? t[e] !== void 0 : OM.call(t, e);
}
var kM = EM,
  AM = uc,
  TM = "__lodash_hash_undefined__";
function CM(e, t) {
  var r = this.__data__;
  return (this.size += this.has(e) ? 0 : 1), (r[e] = AM && t === void 0 ? TM : t), this;
}
var PM = CM,
  MM = hM,
  $M = vM,
  IM = bM,
  NM = kM,
  RM = PM;
function ya(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ya.prototype.clear = MM;
ya.prototype.delete = $M;
ya.prototype.get = IM;
ya.prototype.has = NM;
ya.prototype.set = RM;
var jM = ya,
  ng = jM,
  DM = oc,
  LM = kv;
function FM() {
  (this.size = 0), (this.__data__ = { hash: new ng(), map: new (LM || DM)(), string: new ng() });
}
var BM = FM;
function UM(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var zM = UM,
  WM = zM;
function HM(e, t) {
  var r = e.__data__;
  return WM(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var sc = HM,
  qM = sc;
function GM(e) {
  var t = qM(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
var VM = GM,
  QM = sc;
function YM(e) {
  return QM(this, e).get(e);
}
var KM = YM,
  XM = sc;
function JM(e) {
  return XM(this, e).has(e);
}
var ZM = JM,
  e$ = sc;
function t$(e, t) {
  var r = e$(this, e),
    n = r.size;
  return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
}
var r$ = t$,
  n$ = BM,
  i$ = VM,
  a$ = KM,
  o$ = ZM,
  u$ = r$;
function ma(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ma.prototype.clear = n$;
ma.prototype.delete = i$;
ma.prototype.get = a$;
ma.prototype.has = o$;
ma.prototype.set = u$;
var Av = ma,
  s$ = oc,
  l$ = kv,
  c$ = Av,
  f$ = 200;
function d$(e, t) {
  var r = this.__data__;
  if (r instanceof s$) {
    var n = r.__data__;
    if (!l$ || n.length < f$ - 1) return n.push([e, t]), (this.size = ++r.size), this;
    r = this.__data__ = new c$(n);
  }
  return r.set(e, t), (this.size = r.size), this;
}
var h$ = d$,
  p$ = oc,
  v$ = T2,
  y$ = P2,
  m$ = $2,
  g$ = N2,
  x$ = h$;
function ga(e) {
  var t = (this.__data__ = new p$(e));
  this.size = t.size;
}
ga.prototype.clear = v$;
ga.prototype.delete = y$;
ga.prototype.get = m$;
ga.prototype.has = g$;
ga.prototype.set = x$;
var b_ = ga,
  w$ = "__lodash_hash_undefined__";
function b$(e) {
  return this.__data__.set(e, w$), this;
}
var _$ = b$;
function S$(e) {
  return this.__data__.has(e);
}
var O$ = S$,
  E$ = Av,
  k$ = _$,
  A$ = O$;
function Qs(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.__data__ = new E$(); ++t < r; ) this.add(e[t]);
}
Qs.prototype.add = Qs.prototype.push = k$;
Qs.prototype.has = A$;
var __ = Qs;
function T$(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; ) if (t(e[r], r, e)) return !0;
  return !1;
}
var S_ = T$;
function C$(e, t) {
  return e.has(t);
}
var O_ = C$,
  P$ = __,
  M$ = S_,
  $$ = O_,
  I$ = 1,
  N$ = 2;
function R$(e, t, r, n, i, a) {
  var o = r & I$,
    u = e.length,
    s = t.length;
  if (u != s && !(o && s > u)) return !1;
  var l = a.get(e),
    c = a.get(t);
  if (l && c) return l == t && c == e;
  var f = -1,
    d = !0,
    v = r & N$ ? new P$() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < u; ) {
    var y = e[f],
      h = t[f];
    if (n) var w = o ? n(h, y, f, t, e, a) : n(y, h, f, e, t, a);
    if (w !== void 0) {
      if (w) continue;
      d = !1;
      break;
    }
    if (v) {
      if (
        !M$(t, function (p, x) {
          if (!$$(v, x) && (y === p || i(y, p, r, n, a))) return v.push(x);
        })
      ) {
        d = !1;
        break;
      }
    } else if (!(y === h || i(y, h, r, n, a))) {
      d = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), d;
}
var E_ = R$,
  j$ = br,
  D$ = j$.Uint8Array,
  L$ = D$;
function F$(e) {
  var t = -1,
    r = Array(e.size);
  return (
    e.forEach(function (n, i) {
      r[++t] = [i, n];
    }),
    r
  );
}
var B$ = F$;
function U$(e) {
  var t = -1,
    r = Array(e.size);
  return (
    e.forEach(function (n) {
      r[++t] = n;
    }),
    r
  );
}
var Tv = U$,
  ig = Zo,
  ag = L$,
  z$ = Ev,
  W$ = E_,
  H$ = B$,
  q$ = Tv,
  G$ = 1,
  V$ = 2,
  Q$ = "[object Boolean]",
  Y$ = "[object Date]",
  K$ = "[object Error]",
  X$ = "[object Map]",
  J$ = "[object Number]",
  Z$ = "[object RegExp]",
  eI = "[object Set]",
  tI = "[object String]",
  rI = "[object Symbol]",
  nI = "[object ArrayBuffer]",
  iI = "[object DataView]",
  og = ig ? ig.prototype : void 0,
  mf = og ? og.valueOf : void 0;
function aI(e, t, r, n, i, a, o) {
  switch (r) {
    case iI:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
      (e = e.buffer), (t = t.buffer);
    case nI:
      return !(e.byteLength != t.byteLength || !a(new ag(e), new ag(t)));
    case Q$:
    case Y$:
    case J$:
      return z$(+e, +t);
    case K$:
      return e.name == t.name && e.message == t.message;
    case Z$:
    case tI:
      return e == t + "";
    case X$:
      var u = H$;
    case eI:
      var s = n & G$;
      if ((u || (u = q$), e.size != t.size && !s)) return !1;
      var l = o.get(e);
      if (l) return l == t;
      (n |= V$), o.set(e, t);
      var c = W$(u(e), u(t), n, i, a, o);
      return o.delete(e), c;
    case rI:
      if (mf) return mf.call(e) == mf.call(t);
  }
  return !1;
}
var oI = aI;
function uI(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
  return e;
}
var k_ = uI,
  sI = Array.isArray,
  yt = sI;
const Ue = he(yt);
var lI = k_,
  cI = yt;
function fI(e, t, r) {
  var n = t(e);
  return cI(e) ? n : lI(n, r(e));
}
var dI = fI;
function hI(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[i++] = o);
  }
  return a;
}
var pI = hI;
function vI() {
  return [];
}
var yI = vI,
  mI = pI,
  gI = yI,
  xI = Object.prototype,
  wI = xI.propertyIsEnumerable,
  ug = Object.getOwnPropertySymbols,
  bI = ug
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            mI(ug(e), function (t) {
              return wI.call(e, t);
            }));
      }
    : gI,
  _I = bI;
function SI(e, t) {
  for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
  return n;
}
var OI = SI;
function EI(e) {
  return e != null && typeof e == "object";
}
var Sn = EI,
  kI = _n,
  AI = Sn,
  TI = "[object Arguments]";
function CI(e) {
  return AI(e) && kI(e) == TI;
}
var PI = CI,
  sg = PI,
  MI = Sn,
  A_ = Object.prototype,
  $I = A_.hasOwnProperty,
  II = A_.propertyIsEnumerable,
  NI = sg(
    (function () {
      return arguments;
    })(),
  )
    ? sg
    : function (e) {
        return MI(e) && $I.call(e, "callee") && !II.call(e, "callee");
      },
  Cv = NI,
  Ys = { exports: {} };
function RI() {
  return !1;
}
var jI = RI;
Ys.exports;
(function (e, t) {
  var r = br,
    n = jI,
    i = t && !t.nodeType && t,
    a = i && !0 && e && !e.nodeType && e,
    o = a && a.exports === i,
    u = o ? r.Buffer : void 0,
    s = u ? u.isBuffer : void 0,
    l = s || n;
  e.exports = l;
})(Ys, Ys.exports);
var T_ = Ys.exports,
  DI = 9007199254740991,
  LI = /^(?:0|[1-9]\d*)$/;
function FI(e, t) {
  var r = typeof e;
  return (t = t ?? DI), !!t && (r == "number" || (r != "symbol" && LI.test(e))) && e > -1 && e % 1 == 0 && e < t;
}
var Pv = FI,
  BI = 9007199254740991;
function UI(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= BI;
}
var Mv = UI,
  zI = _n,
  WI = Mv,
  HI = Sn,
  qI = "[object Arguments]",
  GI = "[object Array]",
  VI = "[object Boolean]",
  QI = "[object Date]",
  YI = "[object Error]",
  KI = "[object Function]",
  XI = "[object Map]",
  JI = "[object Number]",
  ZI = "[object Object]",
  eN = "[object RegExp]",
  tN = "[object Set]",
  rN = "[object String]",
  nN = "[object WeakMap]",
  iN = "[object ArrayBuffer]",
  aN = "[object DataView]",
  oN = "[object Float32Array]",
  uN = "[object Float64Array]",
  sN = "[object Int8Array]",
  lN = "[object Int16Array]",
  cN = "[object Int32Array]",
  fN = "[object Uint8Array]",
  dN = "[object Uint8ClampedArray]",
  hN = "[object Uint16Array]",
  pN = "[object Uint32Array]",
  be = {};
be[oN] = be[uN] = be[sN] = be[lN] = be[cN] = be[fN] = be[dN] = be[hN] = be[pN] = !0;
be[qI] =
  be[GI] =
  be[iN] =
  be[VI] =
  be[aN] =
  be[QI] =
  be[YI] =
  be[KI] =
  be[XI] =
  be[JI] =
  be[ZI] =
  be[eN] =
  be[tN] =
  be[rN] =
  be[nN] =
    !1;
function vN(e) {
  return HI(e) && WI(e.length) && !!be[zI(e)];
}
var yN = vN;
function mN(e) {
  return function (t) {
    return e(t);
  };
}
var C_ = mN,
  Ks = { exports: {} };
Ks.exports;
(function (e, t) {
  var r = g_,
    n = t && !t.nodeType && t,
    i = n && !0 && e && !e.nodeType && e,
    a = i && i.exports === n,
    o = a && r.process,
    u = (function () {
      try {
        var s = i && i.require && i.require("util").types;
        return s || (o && o.binding && o.binding("util"));
      } catch {}
    })();
  e.exports = u;
})(Ks, Ks.exports);
var gN = Ks.exports,
  xN = yN,
  wN = C_,
  lg = gN,
  cg = lg && lg.isTypedArray,
  bN = cg ? wN(cg) : xN,
  P_ = bN,
  _N = OI,
  SN = Cv,
  ON = yt,
  EN = T_,
  kN = Pv,
  AN = P_,
  TN = Object.prototype,
  CN = TN.hasOwnProperty;
function PN(e, t) {
  var r = ON(e),
    n = !r && SN(e),
    i = !r && !n && EN(e),
    a = !r && !n && !i && AN(e),
    o = r || n || i || a,
    u = o ? _N(e.length, String) : [],
    s = u.length;
  for (var l in e)
    (t || CN.call(e, l)) &&
      !(
        o &&
        (l == "length" ||
          (i && (l == "offset" || l == "parent")) ||
          (a && (l == "buffer" || l == "byteLength" || l == "byteOffset")) ||
          kN(l, s))
      ) &&
      u.push(l);
  return u;
}
var MN = PN,
  $N = Object.prototype;
function IN(e) {
  var t = e && e.constructor,
    r = (typeof t == "function" && t.prototype) || $N;
  return e === r;
}
var NN = IN;
function RN(e, t) {
  return function (r) {
    return e(t(r));
  };
}
var jN = RN,
  DN = jN,
  LN = DN(Object.keys, Object),
  FN = LN,
  BN = NN,
  UN = FN,
  zN = Object.prototype,
  WN = zN.hasOwnProperty;
function HN(e) {
  if (!BN(e)) return UN(e);
  var t = [];
  for (var r in Object(e)) WN.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var qN = HN,
  GN = Ov,
  VN = Mv;
function QN(e) {
  return e != null && VN(e.length) && !GN(e);
}
var eu = QN,
  YN = MN,
  KN = qN,
  XN = eu;
function JN(e) {
  return XN(e) ? YN(e) : KN(e);
}
var lc = JN,
  ZN = dI,
  e3 = _I,
  t3 = lc;
function r3(e) {
  return ZN(e, t3, e3);
}
var n3 = r3,
  fg = n3,
  i3 = 1,
  a3 = Object.prototype,
  o3 = a3.hasOwnProperty;
function u3(e, t, r, n, i, a) {
  var o = r & i3,
    u = fg(e),
    s = u.length,
    l = fg(t),
    c = l.length;
  if (s != c && !o) return !1;
  for (var f = s; f--; ) {
    var d = u[f];
    if (!(o ? d in t : o3.call(t, d))) return !1;
  }
  var v = a.get(e),
    y = a.get(t);
  if (v && y) return v == t && y == e;
  var h = !0;
  a.set(e, t), a.set(t, e);
  for (var w = o; ++f < s; ) {
    d = u[f];
    var p = e[d],
      x = t[d];
    if (n) var m = o ? n(x, p, d, t, e, a) : n(p, x, d, e, t, a);
    if (!(m === void 0 ? p === x || i(p, x, r, n, a) : m)) {
      h = !1;
      break;
    }
    w || (w = d == "constructor");
  }
  if (h && !w) {
    var g = e.constructor,
      b = t.constructor;
    g != b &&
      "constructor" in e &&
      "constructor" in t &&
      !(typeof g == "function" && g instanceof g && typeof b == "function" && b instanceof b) &&
      (h = !1);
  }
  return a.delete(e), a.delete(t), h;
}
var s3 = u3,
  l3 = di,
  c3 = br,
  f3 = l3(c3, "DataView"),
  d3 = f3,
  h3 = di,
  p3 = br,
  v3 = h3(p3, "Promise"),
  y3 = v3,
  m3 = di,
  g3 = br,
  x3 = m3(g3, "Set"),
  M_ = x3,
  w3 = di,
  b3 = br,
  _3 = w3(b3, "WeakMap"),
  S3 = _3,
  Zd = d3,
  eh = kv,
  th = y3,
  rh = M_,
  nh = S3,
  $_ = _n,
  xa = w_,
  dg = "[object Map]",
  O3 = "[object Object]",
  hg = "[object Promise]",
  pg = "[object Set]",
  vg = "[object WeakMap]",
  yg = "[object DataView]",
  E3 = xa(Zd),
  k3 = xa(eh),
  A3 = xa(th),
  T3 = xa(rh),
  C3 = xa(nh),
  In = $_;
((Zd && In(new Zd(new ArrayBuffer(1))) != yg) ||
  (eh && In(new eh()) != dg) ||
  (th && In(th.resolve()) != hg) ||
  (rh && In(new rh()) != pg) ||
  (nh && In(new nh()) != vg)) &&
  (In = function (e) {
    var t = $_(e),
      r = t == O3 ? e.constructor : void 0,
      n = r ? xa(r) : "";
    if (n)
      switch (n) {
        case E3:
          return yg;
        case k3:
          return dg;
        case A3:
          return hg;
        case T3:
          return pg;
        case C3:
          return vg;
      }
    return t;
  });
var P3 = In,
  gf = b_,
  M3 = E_,
  $3 = oI,
  I3 = s3,
  mg = P3,
  gg = yt,
  xg = T_,
  N3 = P_,
  R3 = 1,
  wg = "[object Arguments]",
  bg = "[object Array]",
  Mu = "[object Object]",
  j3 = Object.prototype,
  _g = j3.hasOwnProperty;
function D3(e, t, r, n, i, a) {
  var o = gg(e),
    u = gg(t),
    s = o ? bg : mg(e),
    l = u ? bg : mg(t);
  (s = s == wg ? Mu : s), (l = l == wg ? Mu : l);
  var c = s == Mu,
    f = l == Mu,
    d = s == l;
  if (d && xg(e)) {
    if (!xg(t)) return !1;
    (o = !0), (c = !1);
  }
  if (d && !c) return a || (a = new gf()), o || N3(e) ? M3(e, t, r, n, i, a) : $3(e, t, s, r, n, i, a);
  if (!(r & R3)) {
    var v = c && _g.call(e, "__wrapped__"),
      y = f && _g.call(t, "__wrapped__");
    if (v || y) {
      var h = v ? e.value() : e,
        w = y ? t.value() : t;
      return a || (a = new gf()), i(h, w, r, n, a);
    }
  }
  return d ? (a || (a = new gf()), I3(e, t, r, n, i, a)) : !1;
}
var L3 = D3,
  F3 = L3,
  Sg = Sn;
function I_(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || (!Sg(e) && !Sg(t)) ? e !== e && t !== t : F3(e, t, r, n, I_, i);
}
var $v = I_,
  B3 = b_,
  U3 = $v,
  z3 = 1,
  W3 = 2;
function H3(e, t, r, n) {
  var i = r.length,
    a = i,
    o = !n;
  if (e == null) return !a;
  for (e = Object(e); i--; ) {
    var u = r[i];
    if (o && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
  }
  for (; ++i < a; ) {
    u = r[i];
    var s = u[0],
      l = e[s],
      c = u[1];
    if (o && u[2]) {
      if (l === void 0 && !(s in e)) return !1;
    } else {
      var f = new B3();
      if (n) var d = n(l, c, s, e, t, f);
      if (!(d === void 0 ? U3(c, l, z3 | W3, n, f) : d)) return !1;
    }
  }
  return !0;
}
var q3 = H3,
  G3 = bn;
function V3(e) {
  return e === e && !G3(e);
}
var N_ = V3,
  Q3 = N_,
  Y3 = lc;
function K3(e) {
  for (var t = Y3(e), r = t.length; r--; ) {
    var n = t[r],
      i = e[n];
    t[r] = [n, i, Q3(i)];
  }
  return t;
}
var X3 = K3;
function J3(e, t) {
  return function (r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var R_ = J3,
  Z3 = q3,
  eR = X3,
  tR = R_;
function rR(e) {
  var t = eR(e);
  return t.length == 1 && t[0][2]
    ? tR(t[0][0], t[0][1])
    : function (r) {
        return r === e || Z3(r, e, t);
      };
}
var nR = rR,
  iR = _n,
  aR = Sn,
  oR = "[object Symbol]";
function uR(e) {
  return typeof e == "symbol" || (aR(e) && iR(e) == oR);
}
var wa = uR,
  sR = yt,
  lR = wa,
  cR = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  fR = /^\w*$/;
function dR(e, t) {
  if (sR(e)) return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || lR(e)
    ? !0
    : fR.test(e) || !cR.test(e) || (t != null && e in Object(t));
}
var Iv = dR,
  j_ = Av,
  hR = "Expected a function";
function Nv(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function")) throw new TypeError(hR);
  var r = function () {
    var n = arguments,
      i = t ? t.apply(this, n) : n[0],
      a = r.cache;
    if (a.has(i)) return a.get(i);
    var o = e.apply(this, n);
    return (r.cache = a.set(i, o) || a), o;
  };
  return (r.cache = new (Nv.Cache || j_)()), r;
}
Nv.Cache = j_;
var pR = Nv,
  vR = pR,
  yR = 500;
function mR(e) {
  var t = vR(e, function (n) {
      return r.size === yR && r.clear(), n;
    }),
    r = t.cache;
  return t;
}
var gR = mR,
  xR = gR,
  wR = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  bR = /\\(\\)?/g,
  _R = xR(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(""),
      e.replace(wR, function (r, n, i, a) {
        t.push(i ? a.replace(bR, "$1") : n || r);
      }),
      t
    );
  }),
  SR = _R;
function OR(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; ) i[r] = t(e[r], r, e);
  return i;
}
var Rv = OR,
  Og = Zo,
  ER = Rv,
  kR = yt,
  AR = wa,
  TR = 1 / 0,
  Eg = Og ? Og.prototype : void 0,
  kg = Eg ? Eg.toString : void 0;
function D_(e) {
  if (typeof e == "string") return e;
  if (kR(e)) return ER(e, D_) + "";
  if (AR(e)) return kg ? kg.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -TR ? "-0" : t;
}
var CR = D_,
  PR = CR;
function MR(e) {
  return e == null ? "" : PR(e);
}
var L_ = MR,
  $R = yt,
  IR = Iv,
  NR = SR,
  RR = L_;
function jR(e, t) {
  return $R(e) ? e : IR(e, t) ? [e] : NR(RR(e));
}
var F_ = jR,
  DR = wa,
  LR = 1 / 0;
function FR(e) {
  if (typeof e == "string" || DR(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -LR ? "-0" : t;
}
var cc = FR,
  BR = F_,
  UR = cc;
function zR(e, t) {
  t = BR(t, e);
  for (var r = 0, n = t.length; e != null && r < n; ) e = e[UR(t[r++])];
  return r && r == n ? e : void 0;
}
var jv = zR,
  WR = jv;
function HR(e, t, r) {
  var n = e == null ? void 0 : WR(e, t);
  return n === void 0 ? r : n;
}
var B_ = HR;
const Ze = he(B_);
function qR(e, t) {
  return e != null && t in Object(e);
}
var GR = qR,
  VR = F_,
  QR = Cv,
  YR = yt,
  KR = Pv,
  XR = Mv,
  JR = cc;
function ZR(e, t, r) {
  t = VR(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var o = JR(t[n]);
    if (!(a = e != null && r(e, o))) break;
    e = e[o];
  }
  return a || ++n != i ? a : ((i = e == null ? 0 : e.length), !!i && XR(i) && KR(o, i) && (YR(e) || QR(e)));
}
var ej = ZR,
  tj = GR,
  rj = ej;
function nj(e, t) {
  return e != null && rj(e, t, tj);
}
var ij = nj,
  aj = $v,
  oj = B_,
  uj = ij,
  sj = Iv,
  lj = N_,
  cj = R_,
  fj = cc,
  dj = 1,
  hj = 2;
function pj(e, t) {
  return sj(e) && lj(t)
    ? cj(fj(e), t)
    : function (r) {
        var n = oj(r, e);
        return n === void 0 && n === t ? uj(r, e) : aj(t, n, dj | hj);
      };
}
var vj = pj;
function yj(e) {
  return e;
}
var ba = yj;
function mj(e) {
  return function (t) {
    return t == null ? void 0 : t[e];
  };
}
var gj = mj,
  xj = jv;
function wj(e) {
  return function (t) {
    return xj(t, e);
  };
}
var bj = wj,
  _j = gj,
  Sj = bj,
  Oj = Iv,
  Ej = cc;
function kj(e) {
  return Oj(e) ? _j(Ej(e)) : Sj(e);
}
var Aj = kj,
  Tj = nR,
  Cj = vj,
  Pj = ba,
  Mj = yt,
  $j = Aj;
function Ij(e) {
  return typeof e == "function" ? e : e == null ? Pj : typeof e == "object" ? (Mj(e) ? Cj(e[0], e[1]) : Tj(e)) : $j(e);
}
var On = Ij;
function Nj(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; ) if (t(e[a], a, e)) return a;
  return -1;
}
var U_ = Nj;
function Rj(e) {
  return e !== e;
}
var jj = Rj;
function Dj(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; ) if (e[n] === t) return n;
  return -1;
}
var Lj = Dj,
  Fj = U_,
  Bj = jj,
  Uj = Lj;
function zj(e, t, r) {
  return t === t ? Uj(e, t, r) : Fj(e, Bj, r);
}
var Wj = zj,
  Hj = Wj;
function qj(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && Hj(e, t, 0) > -1;
}
var Gj = qj;
function Vj(e, t, r) {
  for (var n = -1, i = e == null ? 0 : e.length; ++n < i; ) if (r(t, e[n])) return !0;
  return !1;
}
var Qj = Vj;
function Yj() {}
var Kj = Yj,
  xf = M_,
  Xj = Kj,
  Jj = Tv,
  Zj = 1 / 0,
  eD =
    xf && 1 / Jj(new xf([, -0]))[1] == Zj
      ? function (e) {
          return new xf(e);
        }
      : Xj,
  tD = eD,
  rD = __,
  nD = Gj,
  iD = Qj,
  aD = O_,
  oD = tD,
  uD = Tv,
  sD = 200;
function lD(e, t, r) {
  var n = -1,
    i = nD,
    a = e.length,
    o = !0,
    u = [],
    s = u;
  if (r) (o = !1), (i = iD);
  else if (a >= sD) {
    var l = t ? null : oD(e);
    if (l) return uD(l);
    (o = !1), (i = aD), (s = new rD());
  } else s = t ? [] : u;
  e: for (; ++n < a; ) {
    var c = e[n],
      f = t ? t(c) : c;
    if (((c = r || c !== 0 ? c : 0), o && f === f)) {
      for (var d = s.length; d--; ) if (s[d] === f) continue e;
      t && s.push(f), u.push(c);
    } else i(s, f, r) || (s !== u && s.push(f), u.push(c));
  }
  return u;
}
var cD = lD,
  fD = On,
  dD = cD;
function hD(e, t) {
  return e && e.length ? dD(e, fD(t)) : [];
}
var pD = hD;
const Xs = he(pD);
function vD(e, t, r) {
  var n = -1,
    i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t),
    (r = r > i ? i : r),
    r < 0 && (r += i),
    (i = t > r ? 0 : (r - t) >>> 0),
    (t >>>= 0);
  for (var a = Array(i); ++n < i; ) a[n] = e[n + t];
  return a;
}
var yD = vD,
  mD = yD;
function gD(e, t, r) {
  var n = e.length;
  return (r = r === void 0 ? n : r), !t && r >= n ? e : mD(e, t, r);
}
var xD = gD,
  wD = "\\ud800-\\udfff",
  bD = "\\u0300-\\u036f",
  _D = "\\ufe20-\\ufe2f",
  SD = "\\u20d0-\\u20ff",
  OD = bD + _D + SD,
  ED = "\\ufe0e\\ufe0f",
  kD = "\\u200d",
  AD = RegExp("[" + kD + wD + OD + ED + "]");
function TD(e) {
  return AD.test(e);
}
var z_ = TD;
function CD(e) {
  return e.split("");
}
var PD = CD,
  W_ = "\\ud800-\\udfff",
  MD = "\\u0300-\\u036f",
  $D = "\\ufe20-\\ufe2f",
  ID = "\\u20d0-\\u20ff",
  ND = MD + $D + ID,
  RD = "\\ufe0e\\ufe0f",
  jD = "[" + W_ + "]",
  ih = "[" + ND + "]",
  ah = "\\ud83c[\\udffb-\\udfff]",
  DD = "(?:" + ih + "|" + ah + ")",
  H_ = "[^" + W_ + "]",
  q_ = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  G_ = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  LD = "\\u200d",
  V_ = DD + "?",
  Q_ = "[" + RD + "]?",
  FD = "(?:" + LD + "(?:" + [H_, q_, G_].join("|") + ")" + Q_ + V_ + ")*",
  BD = Q_ + V_ + FD,
  UD = "(?:" + [H_ + ih + "?", ih, q_, G_, jD].join("|") + ")",
  zD = RegExp(ah + "(?=" + ah + ")|" + UD + BD, "g");
function WD(e) {
  return e.match(zD) || [];
}
var HD = WD,
  qD = PD,
  GD = z_,
  VD = HD;
function QD(e) {
  return GD(e) ? VD(e) : qD(e);
}
var YD = QD,
  KD = xD,
  XD = z_,
  JD = YD,
  ZD = L_;
function e4(e) {
  return function (t) {
    t = ZD(t);
    var r = XD(t) ? JD(t) : void 0,
      n = r ? r[0] : t.charAt(0),
      i = r ? KD(r, 1).join("") : t.slice(1);
    return n[e]() + i;
  };
}
var t4 = e4,
  r4 = t4,
  n4 = r4("toUpperCase"),
  i4 = n4;
const fc = he(i4),
  oh = Math.PI,
  uh = 2 * oh,
  Nn = 1e-6,
  a4 = uh - Nn;
function sh() {
  (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
}
function dc() {
  return new sh();
}
sh.prototype = dc.prototype = {
  constructor: sh,
  moveTo: function (e, t) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
  },
  closePath: function () {
    this._x1 !== null && ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
  },
  lineTo: function (e, t) {
    this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
  },
  quadraticCurveTo: function (e, t, r, n) {
    this._ += "Q" + +e + "," + +t + "," + (this._x1 = +r) + "," + (this._y1 = +n);
  },
  bezierCurveTo: function (e, t, r, n, i, a) {
    this._ += "C" + +e + "," + +t + "," + +r + "," + +n + "," + (this._x1 = +i) + "," + (this._y1 = +a);
  },
  arcTo: function (e, t, r, n, i) {
    (e = +e), (t = +t), (r = +r), (n = +n), (i = +i);
    var a = this._x1,
      o = this._y1,
      u = r - e,
      s = n - t,
      l = a - e,
      c = o - t,
      f = l * l + c * c;
    if (i < 0) throw new Error("negative radius: " + i);
    if (this._x1 === null) this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
    else if (f > Nn)
      if (!(Math.abs(c * u - s * l) > Nn) || !i) this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var d = r - a,
          v = n - o,
          y = u * u + s * s,
          h = d * d + v * v,
          w = Math.sqrt(y),
          p = Math.sqrt(f),
          x = i * Math.tan((oh - Math.acos((y + f - h) / (2 * w * p))) / 2),
          m = x / p,
          g = x / w;
        Math.abs(m - 1) > Nn && (this._ += "L" + (e + m * l) + "," + (t + m * c)),
          (this._ +=
            "A" +
            i +
            "," +
            i +
            ",0,0," +
            +(c * d > l * v) +
            "," +
            (this._x1 = e + g * u) +
            "," +
            (this._y1 = t + g * s));
      }
  },
  arc: function (e, t, r, n, i, a) {
    (e = +e), (t = +t), (r = +r), (a = !!a);
    var o = r * Math.cos(n),
      u = r * Math.sin(n),
      s = e + o,
      l = t + u,
      c = 1 ^ a,
      f = a ? n - i : i - n;
    if (r < 0) throw new Error("negative radius: " + r);
    this._x1 === null
      ? (this._ += "M" + s + "," + l)
      : (Math.abs(this._x1 - s) > Nn || Math.abs(this._y1 - l) > Nn) && (this._ += "L" + s + "," + l),
      r &&
        (f < 0 && (f = (f % uh) + uh),
        f > a4
          ? (this._ +=
              "A" +
              r +
              "," +
              r +
              ",0,1," +
              c +
              "," +
              (e - o) +
              "," +
              (t - u) +
              "A" +
              r +
              "," +
              r +
              ",0,1," +
              c +
              "," +
              (this._x1 = s) +
              "," +
              (this._y1 = l))
          : f > Nn &&
            (this._ +=
              "A" +
              r +
              "," +
              r +
              ",0," +
              +(f >= oh) +
              "," +
              c +
              "," +
              (this._x1 = e + r * Math.cos(i)) +
              "," +
              (this._y1 = t + r * Math.sin(i))));
  },
  rect: function (e, t, r, n) {
    this._ +=
      "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +r + "v" + +n + "h" + -r + "Z";
  },
  toString: function () {
    return this._;
  },
};
function me(e) {
  return function () {
    return e;
  };
}
var Js = Math.PI,
  hc = 2 * Js;
function Dv(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Y_(e) {
  this._context = e;
}
Y_.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    (this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(), (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  },
};
function pc(e) {
  return new Y_(e);
}
function K_(e) {
  return e[0];
}
function X_(e) {
  return e[1];
}
function J_(e, t) {
  var r = me(!0),
    n = null,
    i = pc,
    a = null;
  (e = typeof e == "function" ? e : e === void 0 ? K_ : me(e)),
    (t = typeof t == "function" ? t : t === void 0 ? X_ : me(t));
  function o(u) {
    var s,
      l = (u = Dv(u)).length,
      c,
      f = !1,
      d;
    for (n == null && (a = i((d = dc()))), s = 0; s <= l; ++s)
      !(s < l && r((c = u[s]), s, u)) === f && ((f = !f) ? a.lineStart() : a.lineEnd()),
        f && a.point(+e(c, s, u), +t(c, s, u));
    if (d) return (a = null), d + "" || null;
  }
  return (
    (o.x = function (u) {
      return arguments.length ? ((e = typeof u == "function" ? u : me(+u)), o) : e;
    }),
    (o.y = function (u) {
      return arguments.length ? ((t = typeof u == "function" ? u : me(+u)), o) : t;
    }),
    (o.defined = function (u) {
      return arguments.length ? ((r = typeof u == "function" ? u : me(!!u)), o) : r;
    }),
    (o.curve = function (u) {
      return arguments.length ? ((i = u), n != null && (a = i(n)), o) : i;
    }),
    (o.context = function (u) {
      return arguments.length ? (u == null ? (n = a = null) : (a = i((n = u))), o) : n;
    }),
    o
  );
}
function $u(e, t, r) {
  var n = null,
    i = me(!0),
    a = null,
    o = pc,
    u = null;
  (e = typeof e == "function" ? e : e === void 0 ? K_ : me(+e)),
    (t = typeof t == "function" ? t : me(t === void 0 ? 0 : +t)),
    (r = typeof r == "function" ? r : r === void 0 ? X_ : me(+r));
  function s(c) {
    var f,
      d,
      v,
      y = (c = Dv(c)).length,
      h,
      w = !1,
      p,
      x = new Array(y),
      m = new Array(y);
    for (a == null && (u = o((p = dc()))), f = 0; f <= y; ++f) {
      if (!(f < y && i((h = c[f]), f, c)) === w)
        if ((w = !w)) (d = f), u.areaStart(), u.lineStart();
        else {
          for (u.lineEnd(), u.lineStart(), v = f - 1; v >= d; --v) u.point(x[v], m[v]);
          u.lineEnd(), u.areaEnd();
        }
      w && ((x[f] = +e(h, f, c)), (m[f] = +t(h, f, c)), u.point(n ? +n(h, f, c) : x[f], r ? +r(h, f, c) : m[f]));
    }
    if (p) return (u = null), p + "" || null;
  }
  function l() {
    return J_().defined(i).curve(o).context(a);
  }
  return (
    (s.x = function (c) {
      return arguments.length ? ((e = typeof c == "function" ? c : me(+c)), (n = null), s) : e;
    }),
    (s.x0 = function (c) {
      return arguments.length ? ((e = typeof c == "function" ? c : me(+c)), s) : e;
    }),
    (s.x1 = function (c) {
      return arguments.length ? ((n = c == null ? null : typeof c == "function" ? c : me(+c)), s) : n;
    }),
    (s.y = function (c) {
      return arguments.length ? ((t = typeof c == "function" ? c : me(+c)), (r = null), s) : t;
    }),
    (s.y0 = function (c) {
      return arguments.length ? ((t = typeof c == "function" ? c : me(+c)), s) : t;
    }),
    (s.y1 = function (c) {
      return arguments.length ? ((r = c == null ? null : typeof c == "function" ? c : me(+c)), s) : r;
    }),
    (s.lineX0 = s.lineY0 =
      function () {
        return l().x(e).y(t);
      }),
    (s.lineY1 = function () {
      return l().x(e).y(r);
    }),
    (s.lineX1 = function () {
      return l().x(n).y(t);
    }),
    (s.defined = function (c) {
      return arguments.length ? ((i = typeof c == "function" ? c : me(!!c)), s) : i;
    }),
    (s.curve = function (c) {
      return arguments.length ? ((o = c), a != null && (u = o(a)), s) : o;
    }),
    (s.context = function (c) {
      return arguments.length ? (c == null ? (a = u = null) : (u = o((a = c))), s) : a;
    }),
    s
  );
}
const Lv = {
    draw: function (e, t) {
      var r = Math.sqrt(t / Js);
      e.moveTo(r, 0), e.arc(0, 0, r, 0, hc);
    },
  },
  o4 = {
    draw: function (e, t) {
      var r = Math.sqrt(t / 5) / 2;
      e.moveTo(-3 * r, -r),
        e.lineTo(-r, -r),
        e.lineTo(-r, -3 * r),
        e.lineTo(r, -3 * r),
        e.lineTo(r, -r),
        e.lineTo(3 * r, -r),
        e.lineTo(3 * r, r),
        e.lineTo(r, r),
        e.lineTo(r, 3 * r),
        e.lineTo(-r, 3 * r),
        e.lineTo(-r, r),
        e.lineTo(-3 * r, r),
        e.closePath();
    },
  };
var Z_ = Math.sqrt(1 / 3),
  u4 = Z_ * 2;
const s4 = {
  draw: function (e, t) {
    var r = Math.sqrt(t / u4),
      n = r * Z_;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  },
};
var l4 = 0.8908130915292852,
  eS = Math.sin(Js / 10) / Math.sin((7 * Js) / 10),
  c4 = Math.sin(hc / 10) * eS,
  f4 = -Math.cos(hc / 10) * eS;
const d4 = {
    draw: function (e, t) {
      var r = Math.sqrt(t * l4),
        n = c4 * r,
        i = f4 * r;
      e.moveTo(0, -r), e.lineTo(n, i);
      for (var a = 1; a < 5; ++a) {
        var o = (hc * a) / 5,
          u = Math.cos(o),
          s = Math.sin(o);
        e.lineTo(s * r, -u * r), e.lineTo(u * n - s * i, s * n + u * i);
      }
      e.closePath();
    },
  },
  h4 = {
    draw: function (e, t) {
      var r = Math.sqrt(t),
        n = -r / 2;
      e.rect(n, n, r, r);
    },
  };
var wf = Math.sqrt(3);
const p4 = {
  draw: function (e, t) {
    var r = -Math.sqrt(t / (wf * 3));
    e.moveTo(0, r * 2), e.lineTo(-wf * r, -r), e.lineTo(wf * r, -r), e.closePath();
  },
};
var Rt = -0.5,
  jt = Math.sqrt(3) / 2,
  lh = 1 / Math.sqrt(12),
  v4 = (lh / 2 + 1) * 3;
const y4 = {
  draw: function (e, t) {
    var r = Math.sqrt(t / v4),
      n = r / 2,
      i = r * lh,
      a = n,
      o = r * lh + r,
      u = -a,
      s = o;
    e.moveTo(n, i),
      e.lineTo(a, o),
      e.lineTo(u, s),
      e.lineTo(Rt * n - jt * i, jt * n + Rt * i),
      e.lineTo(Rt * a - jt * o, jt * a + Rt * o),
      e.lineTo(Rt * u - jt * s, jt * u + Rt * s),
      e.lineTo(Rt * n + jt * i, Rt * i - jt * n),
      e.lineTo(Rt * a + jt * o, Rt * o - jt * a),
      e.lineTo(Rt * u + jt * s, Rt * s - jt * u),
      e.closePath();
  },
};
function m4(e, t) {
  var r = null;
  (e = typeof e == "function" ? e : me(e || Lv)), (t = typeof t == "function" ? t : me(t === void 0 ? 64 : +t));
  function n() {
    var i;
    if ((r || (r = i = dc()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), i))
      return (r = null), i + "" || null;
  }
  return (
    (n.type = function (i) {
      return arguments.length ? ((e = typeof i == "function" ? i : me(i)), n) : e;
    }),
    (n.size = function (i) {
      return arguments.length ? ((t = typeof i == "function" ? i : me(+i)), n) : t;
    }),
    (n.context = function (i) {
      return arguments.length ? ((r = i ?? null), n) : r;
    }),
    n
  );
}
function Zs() {}
function el(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6,
  );
}
function tS(e) {
  this._context = e;
}
tS.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        el(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(), (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        (this._point = 3), this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        el(this, e, t);
        break;
    }
    (this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t);
  },
};
function g4(e) {
  return new tS(e);
}
function rS(e) {
  this._context = e;
}
rS.prototype = {
  areaStart: Zs,
  areaEnd: Zs,
  lineStart: function () {
    (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN),
      (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
          this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
          this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1), (this._x2 = e), (this._y2 = t);
        break;
      case 1:
        (this._point = 2), (this._x3 = e), (this._y3 = t);
        break;
      case 2:
        (this._point = 3),
          (this._x4 = e),
          (this._y4 = t),
          this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        el(this, e, t);
        break;
    }
    (this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t);
  },
};
function x4(e) {
  return new rS(e);
}
function nS(e) {
  this._context = e;
}
nS.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
  },
  lineEnd: function () {
    (this._line || (this._line !== 0 && this._point === 3)) && this._context.closePath(), (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6,
          n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      default:
        el(this, e, t);
        break;
    }
    (this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t);
  },
};
function w4(e) {
  return new nS(e);
}
function iS(e) {
  this._context = e;
}
iS.prototype = {
  areaStart: Zs,
  areaEnd: Zs,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (e, t) {
    (e = +e), (t = +t), this._point ? this._context.lineTo(e, t) : ((this._point = 1), this._context.moveTo(e, t));
  },
};
function b4(e) {
  return new iS(e);
}
function Ag(e) {
  return e < 0 ? -1 : 1;
}
function Tg(e, t, r) {
  var n = e._x1 - e._x0,
    i = t - e._x1,
    a = (e._y1 - e._y0) / (n || (i < 0 && -0)),
    o = (r - e._y1) / (i || (n < 0 && -0)),
    u = (a * i + o * n) / (n + i);
  return (Ag(a) + Ag(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0;
}
function Cg(e, t) {
  var r = e._x1 - e._x0;
  return r ? ((3 * (e._y1 - e._y0)) / r - t) / 2 : t;
}
function bf(e, t, r) {
  var n = e._x0,
    i = e._y0,
    a = e._x1,
    o = e._y1,
    u = (a - n) / 3;
  e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}
function tl(e) {
  this._context = e;
}
tl.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN), (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        bf(this, this._t0, Cg(this, this._t0));
        break;
    }
    (this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(), (this._line = 1 - this._line);
  },
  point: function (e, t) {
    var r = NaN;
    if (((e = +e), (t = +t), !(e === this._x1 && t === this._y1))) {
      switch (this._point) {
        case 0:
          (this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          (this._point = 3), bf(this, Cg(this, (r = Tg(this, e, t))), r);
          break;
        default:
          bf(this, this._t0, (r = Tg(this, e, t)));
          break;
      }
      (this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t), (this._t0 = r);
    }
  },
};
function aS(e) {
  this._context = new oS(e);
}
(aS.prototype = Object.create(tl.prototype)).point = function (e, t) {
  tl.prototype.point.call(this, t, e);
};
function oS(e) {
  this._context = e;
}
oS.prototype = {
  moveTo: function (e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function (e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  },
};
function _4(e) {
  return new tl(e);
}
function S4(e) {
  return new aS(e);
}
function uS(e) {
  this._context = e;
}
uS.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x = []), (this._y = []);
  },
  lineEnd: function () {
    var e = this._x,
      t = this._y,
      r = e.length;
    if (r)
      if ((this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2))
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = Pg(e), i = Pg(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
    (this._line || (this._line !== 0 && r === 1)) && this._context.closePath(),
      (this._line = 1 - this._line),
      (this._x = this._y = null);
  },
  point: function (e, t) {
    this._x.push(+e), this._y.push(+t);
  },
};
function Pg(e) {
  var t,
    r = e.length - 1,
    n,
    i = new Array(r),
    a = new Array(r),
    o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
    (i[t] = 1), (a[t] = 4), (o[t] = 4 * e[t] + 2 * e[t + 1]);
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t)
    (n = i[t] / a[t - 1]), (a[t] -= n), (o[t] -= n * o[t - 1]);
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function O4(e) {
  return new uS(e);
}
function vc(e, t) {
  (this._context = e), (this._t = t);
}
vc.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x = this._y = NaN), (this._point = 0);
  },
  lineEnd: function () {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y),
      (this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(),
      this._line >= 0 && ((this._t = 1 - this._t), (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0) this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    (this._x = e), (this._y = t);
  },
};
function E4(e) {
  return new vc(e, 0.5);
}
function k4(e) {
  return new vc(e, 0);
}
function A4(e) {
  return new vc(e, 1);
}
function ta(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, u = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < u; ++n) a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function ch(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function T4(e, t) {
  return e[t];
}
function C4(e) {
  const t = [];
  return (t.key = e), t;
}
function P4() {
  var e = me([]),
    t = ch,
    r = ta,
    n = T4;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), C4),
      u,
      s = o.length,
      l = -1,
      c;
    for (const f of a) for (u = 0, ++l; u < s; ++u) (o[u][l] = [0, +n(f, o[u].key, l, a)]).data = f;
    for (u = 0, c = Dv(t(o)); u < s; ++u) o[c[u]].index = u;
    return r(o, c), o;
  }
  return (
    (i.keys = function (a) {
      return arguments.length ? ((e = typeof a == "function" ? a : me(Array.from(a))), i) : e;
    }),
    (i.value = function (a) {
      return arguments.length ? ((n = typeof a == "function" ? a : me(+a)), i) : n;
    }),
    (i.order = function (a) {
      return arguments.length ? ((t = a == null ? ch : typeof a == "function" ? a : me(Array.from(a))), i) : t;
    }),
    (i.offset = function (a) {
      return arguments.length ? ((r = a ?? ta), i) : r;
    }),
    i
  );
}
function M4(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    ta(e, t);
  }
}
function $4(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    ta(e, t);
  }
}
function I4(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, s = 0, l = 0; u < o; ++u) {
        for (var c = e[t[u]], f = c[n][1] || 0, d = c[n - 1][1] || 0, v = (f - d) / 2, y = 0; y < u; ++y) {
          var h = e[t[y]],
            w = h[n][1] || 0,
            p = h[n - 1][1] || 0;
          v += w - p;
        }
        (s += f), (l += v * f);
      }
      (i[n - 1][1] += i[n - 1][0] = r), s && (r -= l / s);
    }
    (i[n - 1][1] += i[n - 1][0] = r), ta(e, t);
  }
}
function rs(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (rs = function (r) {
          return typeof r;
        })
      : (rs = function (r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    rs(e)
  );
}
function fh() {
  return (
    (fh =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    fh.apply(this, arguments)
  );
}
function N4(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Mg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function R4(e, t, r) {
  return t && Mg(e.prototype, t), r && Mg(e, r), e;
}
function j4(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    t && dh(e, t);
}
function dh(e, t) {
  return (
    (dh =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    dh(e, t)
  );
}
function D4(e) {
  var t = B4();
  return function () {
    var n = rl(e),
      i;
    if (t) {
      var a = rl(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return L4(this, i);
  };
}
function L4(e, t) {
  return t && (rs(t) === "object" || typeof t == "function") ? t : F4(e);
}
function F4(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function B4() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function rl(e) {
  return (
    (rl = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    rl(e)
  );
}
var sS = {
    symbolCircle: Lv,
    symbolCross: o4,
    symbolDiamond: s4,
    symbolSquare: h4,
    symbolStar: d4,
    symbolTriangle: p4,
    symbolWye: y4,
  },
  U4 = Math.PI / 180,
  z4 = function (t) {
    var r = "symbol".concat(fc(t));
    return sS[r] || Lv;
  },
  W4 = function (t, r, n) {
    if (r === "area") return t;
    switch (n) {
      case "cross":
        return (5 * t * t) / 9;
      case "diamond":
        return (0.5 * t * t) / Math.sqrt(3);
      case "square":
        return t * t;
      case "star": {
        var i = 18 * U4;
        return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
      }
      case "triangle":
        return (Math.sqrt(3) * t * t) / 4;
      case "wye":
        return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
      default:
        return (Math.PI * t * t) / 4;
    }
  },
  Fv = (function (e) {
    j4(r, e);
    var t = D4(r);
    function r() {
      return N4(this, r), t.apply(this, arguments);
    }
    return (
      R4(r, [
        {
          key: "getPath",
          value: function () {
            var i = this.props,
              a = i.size,
              o = i.sizeType,
              u = i.type,
              s = z4(u),
              l = m4()
                .type(s)
                .size(W4(a, o, u));
            return l();
          },
        },
        {
          key: "render",
          value: function () {
            var i = this.props,
              a = i.className,
              o = i.cx,
              u = i.cy,
              s = i.size;
            return o === +o && u === +u && s === +s
              ? $.createElement(
                  "path",
                  fh({}, le(this.props, !0), {
                    className: Oe("recharts-symbols", a),
                    transform: "translate(".concat(o, ", ").concat(u, ")"),
                    d: this.getPath(),
                  }),
                )
              : null;
          },
        },
      ]),
      r
    );
  })(B.PureComponent);
Fv.defaultProps = { type: "circle", size: 64, sizeType: "area" };
Fv.registerSymbol = function (e, t) {
  sS["symbol".concat(fc(e))] = t;
};
function ns(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ns = function (r) {
          return typeof r;
        })
      : (ns = function (r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    ns(e)
  );
}
function hh() {
  return (
    (hh =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    hh.apply(this, arguments)
  );
}
function $g(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function H4(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $g(Object(r), !0).forEach(function (n) {
          ph(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : $g(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function ph(e, t, r) {
  return (
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
  );
}
function q4(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ig(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function G4(e, t, r) {
  return t && Ig(e.prototype, t), r && Ig(e, r), e;
}
function V4(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    t && vh(e, t);
}
function vh(e, t) {
  return (
    (vh =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    vh(e, t)
  );
}
function Q4(e) {
  var t = X4();
  return function () {
    var n = nl(e),
      i;
    if (t) {
      var a = nl(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return Y4(this, i);
  };
}
function Y4(e, t) {
  return t && (ns(t) === "object" || typeof t == "function") ? t : K4(e);
}
function K4(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function X4() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function nl(e) {
  return (
    (nl = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    nl(e)
  );
}
var Dt = 32,
  Bv = (function (e) {
    V4(r, e);
    var t = Q4(r);
    function r() {
      return q4(this, r), t.apply(this, arguments);
    }
    return (
      G4(r, [
        {
          key: "renderIcon",
          value: function (i) {
            var a = this.props.inactiveColor,
              o = Dt / 2,
              u = Dt / 6,
              s = Dt / 3,
              l = i.inactive ? a : i.color;
            if (i.type === "plainline")
              return $.createElement("line", {
                strokeWidth: 4,
                fill: "none",
                stroke: l,
                strokeDasharray: i.payload.strokeDasharray,
                x1: 0,
                y1: o,
                x2: Dt,
                y2: o,
                className: "recharts-legend-icon",
              });
            if (i.type === "line")
              return $.createElement("path", {
                strokeWidth: 4,
                fill: "none",
                stroke: l,
                d: "M0,"
                  .concat(o, "h")
                  .concat(
                    s,
                    `
            A`,
                  )
                  .concat(u, ",")
                  .concat(u, ",0,1,1,")
                  .concat(2 * s, ",")
                  .concat(
                    o,
                    `
            H`,
                  )
                  .concat(Dt, "M")
                  .concat(2 * s, ",")
                  .concat(
                    o,
                    `
            A`,
                  )
                  .concat(u, ",")
                  .concat(u, ",0,1,1,")
                  .concat(s, ",")
                  .concat(o),
                className: "recharts-legend-icon",
              });
            if (i.type === "rect")
              return $.createElement("path", {
                stroke: "none",
                fill: l,
                d: "M0,"
                  .concat(Dt / 8, "h")
                  .concat(Dt, "v")
                  .concat((Dt * 3) / 4, "h")
                  .concat(-Dt, "z"),
                className: "recharts-legend-icon",
              });
            if ($.isValidElement(i.legendIcon)) {
              var c = H4({}, i);
              return delete c.legendIcon, $.cloneElement(i.legendIcon, c);
            }
            return $.createElement(Fv, { fill: l, cx: o, cy: o, size: Dt, sizeType: "diameter", type: i.type });
          },
        },
        {
          key: "renderItems",
          value: function () {
            var i = this,
              a = this.props,
              o = a.payload,
              u = a.iconSize,
              s = a.layout,
              l = a.formatter,
              c = a.inactiveColor,
              f = { x: 0, y: 0, width: Dt, height: Dt },
              d = { display: s === "horizontal" ? "inline-block" : "block", marginRight: 10 },
              v = { display: "inline-block", verticalAlign: "middle", marginRight: 4 };
            return o.map(function (y, h) {
              var w,
                p = y.formatter || l,
                x = Oe(
                  ((w = { "recharts-legend-item": !0 }),
                  ph(w, "legend-item-".concat(h), !0),
                  ph(w, "inactive", y.inactive),
                  w),
                );
              if (y.type === "none") return null;
              var m = y.inactive ? c : y.color;
              return $.createElement(
                "li",
                hh({ className: x, style: d, key: "legend-item-".concat(h) }, m_(i.props, y, h)),
                $.createElement(Xd, { width: u, height: u, viewBox: f, style: v }, i.renderIcon(y)),
                $.createElement(
                  "span",
                  { className: "recharts-legend-item-text", style: { color: m } },
                  p ? p(y.value, y, h) : y.value,
                ),
              );
            });
          },
        },
        {
          key: "render",
          value: function () {
            var i = this.props,
              a = i.payload,
              o = i.layout,
              u = i.align;
            if (!a || !a.length) return null;
            var s = { padding: 0, margin: 0, textAlign: o === "horizontal" ? u : "left" };
            return $.createElement("ul", { className: "recharts-default-legend", style: s }, this.renderItems());
          },
        },
      ]),
      r
    );
  })(B.PureComponent);
Bv.displayName = "Legend";
Bv.defaultProps = {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc",
};
var J4 = _n,
  Z4 = Sn,
  eL = "[object Number]";
function tL(e) {
  return typeof e == "number" || (Z4(e) && J4(e) == eL);
}
var lS = tL;
const rL = he(lS);
var nL = lS;
function iL(e) {
  return nL(e) && e != +e;
}
var aL = iL;
const tu = he(aL);
var oL = _n,
  uL = yt,
  sL = Sn,
  lL = "[object String]";
function cL(e) {
  return typeof e == "string" || (!uL(e) && sL(e) && oL(e) == lL);
}
var fL = cL;
const ru = he(fL);
var fr = function (t) {
    return t === 0 ? 0 : t > 0 ? 1 : -1;
  },
  Wn = function (t) {
    return ru(t) && t.indexOf("%") === t.length - 1;
  },
  H = function (t) {
    return rL(t) && !tu(t);
  },
  ze = function (t) {
    return H(t) || ru(t);
  },
  dL = 0,
  yc = function (t) {
    var r = ++dL;
    return "".concat(t || "").concat(r);
  },
  ra = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if (!H(t) && !ru(t)) return n;
    var a;
    if (Wn(t)) {
      var o = t.indexOf("%");
      a = (r * parseFloat(t.slice(0, o))) / 100;
    } else a = +t;
    return tu(a) && (a = n), i && a > r && (a = r), a;
  },
  Hr = function (t) {
    if (!t) return null;
    var r = Object.keys(t);
    return r && r.length ? t[r[0]] : null;
  },
  hL = function (t) {
    if (!Ue(t)) return !1;
    for (var r = t.length, n = {}, i = 0; i < r; i++)
      if (!n[t[i]]) n[t[i]] = !0;
      else return !0;
    return !1;
  },
  gi = function (t, r) {
    return H(t) && H(r)
      ? function (n) {
          return t + n * (r - t);
        }
      : function () {
          return r;
        };
  };
function il(e, t, r) {
  return !e || !e.length
    ? null
    : e.find(function (n) {
        return n && (typeof t == "function" ? t(n) : Ze(n, t)) === r;
      });
}
function is(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (is = function (r) {
          return typeof r;
        })
      : (is = function (r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    is(e)
  );
}
function Ng(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function xi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ng(Object(r), !0).forEach(function (n) {
          pL(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Ng(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function pL(e, t, r) {
  return (
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
  );
}
function vL(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Rg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function yL(e, t, r) {
  return t && Rg(e.prototype, t), r && Rg(e, r), e;
}
function mL(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    t && yh(e, t);
}
function yh(e, t) {
  return (
    (yh =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    yh(e, t)
  );
}
function gL(e) {
  var t = bL();
  return function () {
    var n = al(e),
      i;
    if (t) {
      var a = al(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return xL(this, i);
  };
}
function xL(e, t) {
  return t && (is(t) === "object" || typeof t == "function") ? t : wL(e);
}
function wL(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bL() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function al(e) {
  return (
    (al = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    al(e)
  );
}
function _L(e, t) {
  if (e == null) return {};
  var r = SL(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function SL(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function OL(e) {
  return e.value;
}
function EL(e, t) {
  return e === !0 ? Xs(t, OL) : Z(e) ? Xs(t, e) : t;
}
function kL(e, t) {
  if ($.isValidElement(e)) return $.cloneElement(e, t);
  if (Z(e)) return $.createElement(e, t);
  t.ref;
  var r = _L(t, ["ref"]);
  return $.createElement(Bv, r);
}
var jg = 1,
  No = (function (e) {
    mL(r, e);
    var t = gL(r);
    function r() {
      var n;
      vL(this, r);
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
      return (
        (n = t.call.apply(t, [this].concat(a))),
        (n.wrapperNode = void 0),
        (n.state = { boxWidth: -1, boxHeight: -1 }),
        n
      );
    }
    return (
      yL(
        r,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "componentDidUpdate",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "getBBox",
            value: function () {
              return this.wrapperNode && this.wrapperNode.getBoundingClientRect
                ? this.wrapperNode.getBoundingClientRect()
                : null;
            },
          },
          {
            key: "getBBoxSnapshot",
            value: function () {
              var i = this.state,
                a = i.boxWidth,
                o = i.boxHeight;
              return a >= 0 && o >= 0 ? { width: a, height: o } : null;
            },
          },
          {
            key: "getDefaultPosition",
            value: function (i) {
              var a = this.props,
                o = a.layout,
                u = a.align,
                s = a.verticalAlign,
                l = a.margin,
                c = a.chartWidth,
                f = a.chartHeight,
                d,
                v;
              if (!i || ((i.left === void 0 || i.left === null) && (i.right === void 0 || i.right === null)))
                if (u === "center" && o === "vertical") {
                  var y = this.getBBoxSnapshot() || { width: 0 };
                  d = { left: ((c || 0) - y.width) / 2 };
                } else d = u === "right" ? { right: (l && l.right) || 0 } : { left: (l && l.left) || 0 };
              if (!i || ((i.top === void 0 || i.top === null) && (i.bottom === void 0 || i.bottom === null)))
                if (s === "middle") {
                  var h = this.getBBoxSnapshot() || { height: 0 };
                  v = { top: ((f || 0) - h.height) / 2 };
                } else v = s === "bottom" ? { bottom: (l && l.bottom) || 0 } : { top: (l && l.top) || 0 };
              return xi(xi({}, d), v);
            },
          },
          {
            key: "updateBBox",
            value: function () {
              var i = this.state,
                a = i.boxWidth,
                o = i.boxHeight,
                u = this.props.onBBoxUpdate;
              if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                var s = this.wrapperNode.getBoundingClientRect();
                (Math.abs(s.width - a) > jg || Math.abs(s.height - o) > jg) &&
                  this.setState({ boxWidth: s.width, boxHeight: s.height }, function () {
                    u && u(s);
                  });
              } else
                (a !== -1 || o !== -1) &&
                  this.setState({ boxWidth: -1, boxHeight: -1 }, function () {
                    u && u(null);
                  });
            },
          },
          {
            key: "render",
            value: function () {
              var i = this,
                a = this.props,
                o = a.content,
                u = a.width,
                s = a.height,
                l = a.wrapperStyle,
                c = a.payloadUniqBy,
                f = a.payload,
                d = xi(
                  xi({ position: "absolute", width: u || "auto", height: s || "auto" }, this.getDefaultPosition(l)),
                  l,
                );
              return $.createElement(
                "div",
                {
                  className: "recharts-legend-wrapper",
                  style: d,
                  ref: function (y) {
                    i.wrapperNode = y;
                  },
                },
                kL(o, xi(xi({}, this.props), {}, { payload: EL(c, f) })),
              );
            },
          },
        ],
        [
          {
            key: "getWithHeight",
            value: function (i, a) {
              var o = i.props.layout;
              return o === "vertical" && H(i.props.height)
                ? { height: i.props.height }
                : o === "horizontal"
                ? { width: i.props.width || a }
                : null;
            },
          },
        ],
      ),
      r
    );
  })(B.PureComponent);
No.displayName = "Legend";
No.defaultProps = { iconSize: 14, layout: "horizontal", align: "center", verticalAlign: "bottom" };
function AL(e) {
  return e == null;
}
var TL = AL;
const Y = he(TL);
var cS = { exports: {} },
  CL = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  PL = CL,
  ML = PL;
function fS() {}
function dS() {}
dS.resetWarningCache = fS;
var $L = function () {
  function e(n, i, a, o, u, s) {
    if (s !== ML) {
      var l = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((l.name = "Invariant Violation"), l);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: dS,
    resetWarningCache: fS,
  };
  return (r.PropTypes = r), r;
};
cS.exports = $L();
var IL = cS.exports;
const ee = he(IL);
var NL = Object.getOwnPropertyNames,
  RL = Object.getOwnPropertySymbols,
  jL = Object.prototype.hasOwnProperty;
function Dg(e, t) {
  return function (n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}
function Iu(e) {
  return function (r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object") return e(r, n, i);
    var a = i.cache,
      o = a.get(r),
      u = a.get(n);
    if (o && u) return o === n && u === r;
    a.set(r, n), a.set(n, r);
    var s = e(r, n, i);
    return a.delete(r), a.delete(n), s;
  };
}
function Lg(e) {
  return NL(e).concat(RL(e));
}
var hS =
  Object.hasOwn ||
  function (e, t) {
    return jL.call(e, t);
  };
function _a(e, t) {
  return e || t ? e === t : e === t || (e !== e && t !== t);
}
var pS = "_owner",
  Fg = Object.getOwnPropertyDescriptor,
  Bg = Object.keys;
function DL(e, t, r) {
  var n = e.length;
  if (t.length !== n) return !1;
  for (; n-- > 0; ) if (!r.equals(e[n], t[n], n, n, e, t, r)) return !1;
  return !0;
}
function LL(e, t) {
  return _a(e.getTime(), t.getTime());
}
function Ug(e, t, r) {
  if (e.size !== t.size) return !1;
  for (var n = {}, i = e.entries(), a = 0, o, u; (o = i.next()) && !o.done; ) {
    for (var s = t.entries(), l = !1, c = 0; (u = s.next()) && !u.done; ) {
      var f = o.value,
        d = f[0],
        v = f[1],
        y = u.value,
        h = y[0],
        w = y[1];
      !l && !n[c] && (l = r.equals(d, h, a, c, e, t, r) && r.equals(v, w, d, h, e, t, r)) && (n[c] = !0), c++;
    }
    if (!l) return !1;
    a++;
  }
  return !0;
}
function FL(e, t, r) {
  var n = Bg(e),
    i = n.length;
  if (Bg(t).length !== i) return !1;
  for (var a; i-- > 0; )
    if (
      ((a = n[i]),
      (a === pS && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof) ||
        !hS(t, a) ||
        !r.equals(e[a], t[a], a, a, e, t, r))
    )
      return !1;
  return !0;
}
function Ua(e, t, r) {
  var n = Lg(e),
    i = n.length;
  if (Lg(t).length !== i) return !1;
  for (var a, o, u; i-- > 0; )
    if (
      ((a = n[i]),
      (a === pS && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof) ||
        !hS(t, a) ||
        !r.equals(e[a], t[a], a, a, e, t, r) ||
        ((o = Fg(e, a)),
        (u = Fg(t, a)),
        (o || u) &&
          (!o ||
            !u ||
            o.configurable !== u.configurable ||
            o.enumerable !== u.enumerable ||
            o.writable !== u.writable)))
    )
      return !1;
  return !0;
}
function BL(e, t) {
  return _a(e.valueOf(), t.valueOf());
}
function UL(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function zg(e, t, r) {
  if (e.size !== t.size) return !1;
  for (var n = {}, i = e.values(), a, o; (a = i.next()) && !a.done; ) {
    for (var u = t.values(), s = !1, l = 0; (o = u.next()) && !o.done; )
      !s && !n[l] && (s = r.equals(a.value, o.value, a.value, o.value, e, t, r)) && (n[l] = !0), l++;
    if (!s) return !1;
  }
  return !0;
}
function zL(e, t) {
  var r = e.length;
  if (t.length !== r) return !1;
  for (; r-- > 0; ) if (e[r] !== t[r]) return !1;
  return !0;
}
var WL = "[object Arguments]",
  HL = "[object Boolean]",
  qL = "[object Date]",
  GL = "[object Map]",
  VL = "[object Number]",
  QL = "[object Object]",
  YL = "[object RegExp]",
  KL = "[object Set]",
  XL = "[object String]",
  JL = Array.isArray,
  Wg = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null,
  Hg = Object.assign,
  ZL = Object.prototype.toString.call.bind(Object.prototype.toString);
function e5(e) {
  var t = e.areArraysEqual,
    r = e.areDatesEqual,
    n = e.areMapsEqual,
    i = e.areObjectsEqual,
    a = e.arePrimitiveWrappersEqual,
    o = e.areRegExpsEqual,
    u = e.areSetsEqual,
    s = e.areTypedArraysEqual;
  return function (c, f, d) {
    if (c === f) return !0;
    if (c == null || f == null || typeof c != "object" || typeof f != "object") return c !== c && f !== f;
    var v = c.constructor;
    if (v !== f.constructor) return !1;
    if (v === Object) return i(c, f, d);
    if (JL(c)) return t(c, f, d);
    if (Wg != null && Wg(c)) return s(c, f, d);
    if (v === Date) return r(c, f, d);
    if (v === RegExp) return o(c, f, d);
    if (v === Map) return n(c, f, d);
    if (v === Set) return u(c, f, d);
    var y = ZL(c);
    return y === qL
      ? r(c, f, d)
      : y === YL
      ? o(c, f, d)
      : y === GL
      ? n(c, f, d)
      : y === KL
      ? u(c, f, d)
      : y === QL
      ? typeof c.then != "function" && typeof f.then != "function" && i(c, f, d)
      : y === WL
      ? i(c, f, d)
      : y === HL || y === VL || y === XL
      ? a(c, f, d)
      : !1;
  };
}
function t5(e) {
  var t = e.circular,
    r = e.createCustomConfig,
    n = e.strict,
    i = {
      areArraysEqual: n ? Ua : DL,
      areDatesEqual: LL,
      areMapsEqual: n ? Dg(Ug, Ua) : Ug,
      areObjectsEqual: n ? Ua : FL,
      arePrimitiveWrappersEqual: BL,
      areRegExpsEqual: UL,
      areSetsEqual: n ? Dg(zg, Ua) : zg,
      areTypedArraysEqual: n ? Ua : zL,
    };
  if ((r && (i = Hg({}, i, r(i))), t)) {
    var a = Iu(i.areArraysEqual),
      o = Iu(i.areMapsEqual),
      u = Iu(i.areObjectsEqual),
      s = Iu(i.areSetsEqual);
    i = Hg({}, i, { areArraysEqual: a, areMapsEqual: o, areObjectsEqual: u, areSetsEqual: s });
  }
  return i;
}
function r5(e) {
  return function (t, r, n, i, a, o, u) {
    return e(t, r, u);
  };
}
function n5(e) {
  var t = e.circular,
    r = e.comparator,
    n = e.createState,
    i = e.equals,
    a = e.strict;
  if (n)
    return function (s, l) {
      var c = n(),
        f = c.cache,
        d = f === void 0 ? (t ? new WeakMap() : void 0) : f,
        v = c.meta;
      return r(s, l, { cache: d, equals: i, meta: v, strict: a });
    };
  if (t)
    return function (s, l) {
      return r(s, l, { cache: new WeakMap(), equals: i, meta: void 0, strict: a });
    };
  var o = { cache: void 0, equals: i, meta: void 0, strict: a };
  return function (s, l) {
    return r(s, l, o);
  };
}
var i5 = En();
En({ strict: !0 });
En({ circular: !0 });
En({ circular: !0, strict: !0 });
En({
  createInternalComparator: function () {
    return _a;
  },
});
En({
  strict: !0,
  createInternalComparator: function () {
    return _a;
  },
});
En({
  circular: !0,
  createInternalComparator: function () {
    return _a;
  },
});
En({
  circular: !0,
  createInternalComparator: function () {
    return _a;
  },
  strict: !0,
});
function En(e) {
  e === void 0 && (e = {});
  var t = e.circular,
    r = t === void 0 ? !1 : t,
    n = e.createInternalComparator,
    i = e.createState,
    a = e.strict,
    o = a === void 0 ? !1 : a,
    u = t5(e),
    s = e5(u),
    l = n ? n(s) : r5(s);
  return n5({ circular: r, comparator: s, createState: i, equals: l, strict: o });
}
function qg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    r = -1,
    n = function i(a) {
      r < 0 && (r = a), a - r > t ? (e(a), (r = -1)) : requestAnimationFrame(i);
    };
  requestAnimationFrame(n);
}
function mh(e) {
  "@babel/helpers - typeof";
  return (
    (mh =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    mh(e)
  );
}
function a5(e) {
  return l5(e) || s5(e) || u5(e) || o5();
}
function o5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function u5(e, t) {
  if (e) {
    if (typeof e == "string") return Gg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Gg(e, t);
  }
}
function Gg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function s5(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
}
function l5(e) {
  if (Array.isArray(e)) return e;
}
function c5() {
  var e = {},
    t = function () {
      return null;
    },
    r = !1,
    n = function i(a) {
      if (!r) {
        if (Array.isArray(a)) {
          if (!a.length) return;
          var o = a,
            u = a5(o),
            s = u[0],
            l = u.slice(1);
          if (typeof s == "number") {
            qg(i.bind(null, l), s);
            return;
          }
          i(s), qg(i.bind(null, l));
          return;
        }
        mh(a) === "object" && ((e = a), t(e)), typeof a == "function" && a();
      }
    };
  return {
    stop: function () {
      r = !0;
    },
    start: function (a) {
      (r = !1), n(a);
    },
    subscribe: function (a) {
      return (
        (t = a),
        function () {
          t = function () {
            return null;
          };
        }
      );
    },
  };
}
function Ro(e) {
  "@babel/helpers - typeof";
  return (
    (Ro =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ro(e)
  );
}
function Vg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function na(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vg(Object(r), !0).forEach(function (n) {
          ol(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Vg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function ol(e, t, r) {
  return (
    (t = f5(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function f5(e) {
  var t = d5(e, "string");
  return Ro(t) === "symbol" ? t : String(t);
}
function d5(e, t) {
  if (Ro(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ro(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var h5 = ["Webkit", "Moz", "O", "ms"],
  p5 = ["-webkit-", "-moz-", "-o-", "-ms-"],
  v5 = ["transform", "transformOrigin", "transition"],
  y5 = function (t, r) {
    return [Object.keys(t), Object.keys(r)].reduce(function (n, i) {
      return n.filter(function (a) {
        return i.includes(a);
      });
    });
  },
  m5 = function (t) {
    return t;
  },
  g5 = function (t) {
    return t.replace(/([A-Z])/g, function (r) {
      return "-".concat(r.toLowerCase());
    });
  },
  x5 = function (t, r) {
    if (v5.indexOf(t) === -1) return ol({}, t, Number.isNaN(r) ? 0 : r);
    var n = t === "transition",
      i = t.replace(/(\w)/, function (o) {
        return o.toUpperCase();
      }),
      a = r;
    return h5.reduce(function (o, u, s) {
      return (
        n && (a = r.replace(/(transform|transform-origin)/gim, "".concat(p5[s], "$1"))),
        na(na({}, o), {}, ol({}, u + i, a))
      );
    }, {});
  },
  po = function (t, r) {
    return Object.keys(r).reduce(function (n, i) {
      return na(na({}, n), {}, ol({}, i, t(i, r[i])));
    }, {});
  },
  gh = function (t) {
    return Object.keys(t).reduce(function (r, n) {
      return na(na({}, r), x5(n, r[n]));
    }, t);
  },
  Qg = function (t, r, n) {
    return t
      .map(function (i) {
        return "".concat(g5(i), " ").concat(r, "ms ").concat(n);
      })
      .join(",");
  };
function w5(e, t) {
  return S5(e) || _5(e, t) || vS(e, t) || b5();
}
function b5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _5(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (c) {
      (l = !0), (i = c);
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function S5(e) {
  if (Array.isArray(e)) return e;
}
function O5(e) {
  return A5(e) || k5(e) || vS(e) || E5();
}
function E5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vS(e, t) {
  if (e) {
    if (typeof e == "string") return xh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return xh(e, t);
  }
}
function k5(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
}
function A5(e) {
  if (Array.isArray(e)) return xh(e);
}
function xh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var ul = 1e-4,
  yS = function (t, r) {
    return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
  },
  mS = function (t, r) {
    return t
      .map(function (n, i) {
        return n * Math.pow(r, i);
      })
      .reduce(function (n, i) {
        return n + i;
      });
  },
  Yg = function (t, r) {
    return function (n) {
      var i = yS(t, r);
      return mS(i, n);
    };
  },
  T5 = function (t, r) {
    return function (n) {
      var i = yS(t, r),
        a = [].concat(
          O5(
            i
              .map(function (o, u) {
                return o * u;
              })
              .slice(1),
          ),
          [0],
        );
      return mS(a, n);
    };
  },
  Kg = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
    var i = r[0],
      a = r[1],
      o = r[2],
      u = r[3];
    if (r.length === 1)
      switch (r[0]) {
        case "linear":
          (i = 0), (a = 0), (o = 1), (u = 1);
          break;
        case "ease":
          (i = 0.25), (a = 0.1), (o = 0.25), (u = 1);
          break;
        case "ease-in":
          (i = 0.42), (a = 0), (o = 1), (u = 1);
          break;
        case "ease-out":
          (i = 0.42), (a = 0), (o = 0.58), (u = 1);
          break;
        case "ease-in-out":
          (i = 0), (a = 0), (o = 0.58), (u = 1);
          break;
        default: {
          var s = r[0].split("(");
          if (s[0] === "cubic-bezier" && s[1].split(")")[0].split(",").length === 4) {
            var l = s[1]
                .split(")")[0]
                .split(",")
                .map(function (w) {
                  return parseFloat(w);
                }),
              c = w5(l, 4);
            (i = c[0]), (a = c[1]), (o = c[2]), (u = c[3]);
          }
        }
      }
    var f = Yg(i, o),
      d = Yg(a, u),
      v = T5(i, o),
      y = function (p) {
        return p > 1 ? 1 : p < 0 ? 0 : p;
      },
      h = function (p) {
        for (var x = p > 1 ? 1 : p, m = x, g = 0; g < 8; ++g) {
          var b = f(m) - x,
            _ = v(m);
          if (Math.abs(b - x) < ul || _ < ul) return d(m);
          m = y(m - b / _);
        }
        return d(m);
      };
    return (h.isStepper = !1), h;
  },
  C5 = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.stiff,
      n = r === void 0 ? 100 : r,
      i = t.damping,
      a = i === void 0 ? 8 : i,
      o = t.dt,
      u = o === void 0 ? 17 : o,
      s = function (c, f, d) {
        var v = -(c - f) * n,
          y = d * a,
          h = d + ((v - y) * u) / 1e3,
          w = (d * u) / 1e3 + c;
        return Math.abs(w - f) < ul && Math.abs(h) < ul ? [f, 0] : [w, h];
      };
    return (s.isStepper = !0), (s.dt = u), s;
  },
  P5 = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
    var i = r[0];
    if (typeof i == "string")
      switch (i) {
        case "ease":
        case "ease-in-out":
        case "ease-out":
        case "ease-in":
        case "linear":
          return Kg(i);
        case "spring":
          return C5();
        default:
          if (i.split("(")[0] === "cubic-bezier") return Kg(i);
      }
    return typeof i == "function" ? i : null;
  };
function jo(e) {
  "@babel/helpers - typeof";
  return (
    (jo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    jo(e)
  );
}
function Xg(e) {
  return I5(e) || $5(e) || gS(e) || M5();
}
function M5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $5(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
}
function I5(e) {
  if (Array.isArray(e)) return bh(e);
}
function Jg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Jg(Object(r), !0).forEach(function (n) {
          wh(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Jg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function wh(e, t, r) {
  return (
    (t = N5(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function N5(e) {
  var t = R5(e, "string");
  return jo(t) === "symbol" ? t : String(t);
}
function R5(e, t) {
  if (jo(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (jo(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function j5(e, t) {
  return F5(e) || L5(e, t) || gS(e, t) || D5();
}
function D5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gS(e, t) {
  if (e) {
    if (typeof e == "string") return bh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return bh(e, t);
  }
}
function bh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function L5(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (c) {
      (l = !0), (i = c);
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function F5(e) {
  if (Array.isArray(e)) return e;
}
var sl = function (t, r, n) {
    return t + (r - t) * n;
  },
  _h = function (t) {
    var r = t.from,
      n = t.to;
    return r !== n;
  },
  B5 = function e(t, r, n) {
    var i = po(function (a, o) {
      if (_h(o)) {
        var u = t(o.from, o.to, o.velocity),
          s = j5(u, 2),
          l = s[0],
          c = s[1];
        return Ke(Ke({}, o), {}, { from: l, velocity: c });
      }
      return o;
    }, r);
    return n < 1
      ? po(function (a, o) {
          return _h(o)
            ? Ke(Ke({}, o), {}, { velocity: sl(o.velocity, i[a].velocity, n), from: sl(o.from, i[a].from, n) })
            : o;
        }, r)
      : e(t, i, n - 1);
  };
const U5 = function (e, t, r, n, i) {
  var a = y5(e, t),
    o = a.reduce(function (w, p) {
      return Ke(Ke({}, w), {}, wh({}, p, [e[p], t[p]]));
    }, {}),
    u = a.reduce(function (w, p) {
      return Ke(Ke({}, w), {}, wh({}, p, { from: e[p], velocity: 0, to: t[p] }));
    }, {}),
    s = -1,
    l,
    c,
    f = function () {
      return null;
    },
    d = function () {
      return po(function (p, x) {
        return x.from;
      }, u);
    },
    v = function () {
      return !Object.values(u).filter(_h).length;
    },
    y = function (p) {
      l || (l = p);
      var x = p - l,
        m = x / r.dt;
      (u = B5(r, u, m)), i(Ke(Ke(Ke({}, e), t), d())), (l = p), v() || (s = requestAnimationFrame(f));
    },
    h = function (p) {
      c || (c = p);
      var x = (p - c) / n,
        m = po(function (b, _) {
          return sl.apply(void 0, Xg(_).concat([r(x)]));
        }, o);
      if ((i(Ke(Ke(Ke({}, e), t), m)), x < 1)) s = requestAnimationFrame(f);
      else {
        var g = po(function (b, _) {
          return sl.apply(void 0, Xg(_).concat([r(1)]));
        }, o);
        i(Ke(Ke(Ke({}, e), t), g));
      }
    };
  return (
    (f = r.isStepper ? y : h),
    function () {
      return (
        requestAnimationFrame(f),
        function () {
          cancelAnimationFrame(s);
        }
      );
    }
  );
};
function ia(e) {
  "@babel/helpers - typeof";
  return (
    (ia =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ia(e)
  );
}
var z5 = [
  "children",
  "begin",
  "duration",
  "attributeName",
  "easing",
  "isActive",
  "steps",
  "from",
  "to",
  "canBegin",
  "onAnimationEnd",
  "shouldReAnimate",
  "onAnimationReStart",
];
function W5(e, t) {
  if (e == null) return {};
  var r = H5(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function H5(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function _f(e) {
  return Q5(e) || V5(e) || G5(e) || q5();
}
function q5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function G5(e, t) {
  if (e) {
    if (typeof e == "string") return Sh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Sh(e, t);
  }
}
function V5(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
}
function Q5(e) {
  if (Array.isArray(e)) return Sh(e);
}
function Sh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Zg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Xt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zg(Object(r), !0).forEach(function (n) {
          ro(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Zg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function ro(e, t, r) {
  return (
    (t = xS(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function Y5(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function e0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, xS(n.key), n);
  }
}
function K5(e, t, r) {
  return t && e0(e.prototype, t), r && e0(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function xS(e) {
  var t = X5(e, "string");
  return ia(t) === "symbol" ? t : String(t);
}
function X5(e, t) {
  if (ia(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ia(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function J5(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Oh(e, t);
}
function Oh(e, t) {
  return (
    (Oh = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    Oh(e, t)
  );
}
function Z5(e) {
  var t = eF();
  return function () {
    var n = ll(e),
      i;
    if (t) {
      var a = ll(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return Eh(this, i);
  };
}
function Eh(e, t) {
  if (t && (ia(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return kh(e);
}
function kh(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function eF() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function ll(e) {
  return (
    (ll = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ll(e)
  );
}
var aa = (function (e) {
  J5(r, e);
  var t = Z5(r);
  function r(n, i) {
    var a;
    Y5(this, r), (a = t.call(this, n, i));
    var o = a.props,
      u = o.isActive,
      s = o.attributeName,
      l = o.from,
      c = o.to,
      f = o.steps,
      d = o.children,
      v = o.duration;
    if (
      ((a.handleStyleChange = a.handleStyleChange.bind(kh(a))),
      (a.changeStyle = a.changeStyle.bind(kh(a))),
      !u || v <= 0)
    )
      return (a.state = { style: {} }), typeof d == "function" && (a.state = { style: c }), Eh(a);
    if (f && f.length) a.state = { style: f[0].style };
    else if (l) {
      if (typeof d == "function") return (a.state = { style: l }), Eh(a);
      a.state = { style: s ? ro({}, s, l) : l };
    } else a.state = { style: {} };
    return a;
  }
  return (
    K5(r, [
      {
        key: "componentDidMount",
        value: function () {
          var i = this.props,
            a = i.isActive,
            o = i.canBegin;
          (this.mounted = !0), !(!a || !o) && this.runAnimation(this.props);
        },
      },
      {
        key: "componentDidUpdate",
        value: function (i) {
          var a = this.props,
            o = a.isActive,
            u = a.canBegin,
            s = a.attributeName,
            l = a.shouldReAnimate,
            c = a.to,
            f = a.from,
            d = this.state.style;
          if (u) {
            if (!o) {
              var v = { style: s ? ro({}, s, c) : c };
              this.state && d && ((s && d[s] !== c) || (!s && d !== c)) && this.setState(v);
              return;
            }
            if (!(i5(i.to, c) && i.canBegin && i.isActive)) {
              var y = !i.canBegin || !i.isActive;
              this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
              var h = y || l ? f : i.to;
              if (this.state && d) {
                var w = { style: s ? ro({}, s, h) : h };
                ((s && [s] !== h) || (!s && d !== h)) && this.setState(w);
              }
              this.runAnimation(Xt(Xt({}, this.props), {}, { from: h, begin: 0 }));
            }
          }
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          (this.mounted = !1),
            this.unSubscribe && this.unSubscribe(),
            this.manager && (this.manager.stop(), (this.manager = null)),
            this.stopJSAnimation && this.stopJSAnimation();
        },
      },
      {
        key: "handleStyleChange",
        value: function (i) {
          this.changeStyle(i);
        },
      },
      {
        key: "changeStyle",
        value: function (i) {
          this.mounted && this.setState({ style: i });
        },
      },
      {
        key: "runJSAnimation",
        value: function (i) {
          var a = this,
            o = i.from,
            u = i.to,
            s = i.duration,
            l = i.easing,
            c = i.begin,
            f = i.onAnimationEnd,
            d = i.onAnimationStart,
            v = U5(o, u, P5(l), s, this.changeStyle),
            y = function () {
              a.stopJSAnimation = v();
            };
          this.manager.start([d, c, y, s, f]);
        },
      },
      {
        key: "runStepAnimation",
        value: function (i) {
          var a = this,
            o = i.steps,
            u = i.begin,
            s = i.onAnimationStart,
            l = o[0],
            c = l.style,
            f = l.duration,
            d = f === void 0 ? 0 : f,
            v = function (h, w, p) {
              if (p === 0) return h;
              var x = w.duration,
                m = w.easing,
                g = m === void 0 ? "ease" : m,
                b = w.style,
                _ = w.properties,
                S = w.onAnimationEnd,
                O = p > 0 ? o[p - 1] : w,
                E = _ || Object.keys(b);
              if (typeof g == "function" || g === "spring")
                return [].concat(_f(h), [
                  a.runJSAnimation.bind(a, { from: O.style, to: b, duration: x, easing: g }),
                  x,
                ]);
              var A = Qg(E, x, g),
                k = Xt(Xt(Xt({}, O.style), b), {}, { transition: A });
              return [].concat(_f(h), [k, x, S]).filter(m5);
            };
          return this.manager.start([s].concat(_f(o.reduce(v, [c, Math.max(d, u)])), [i.onAnimationEnd]));
        },
      },
      {
        key: "runAnimation",
        value: function (i) {
          this.manager || (this.manager = c5());
          var a = i.begin,
            o = i.duration,
            u = i.attributeName,
            s = i.to,
            l = i.easing,
            c = i.onAnimationStart,
            f = i.onAnimationEnd,
            d = i.steps,
            v = i.children,
            y = this.manager;
          if (
            ((this.unSubscribe = y.subscribe(this.handleStyleChange)),
            typeof l == "function" || typeof v == "function" || l === "spring")
          ) {
            this.runJSAnimation(i);
            return;
          }
          if (d.length > 1) {
            this.runStepAnimation(i);
            return;
          }
          var h = u ? ro({}, u, s) : s,
            w = Qg(Object.keys(h), o, l);
          y.start([c, a, Xt(Xt({}, h), {}, { transition: w }), o, f]);
        },
      },
      {
        key: "render",
        value: function () {
          var i = this.props,
            a = i.children;
          i.begin;
          var o = i.duration;
          i.attributeName, i.easing;
          var u = i.isActive;
          i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
          var s = W5(i, z5),
            l = B.Children.count(a),
            c = gh(this.state.style);
          if (typeof a == "function") return a(c);
          if (!u || l === 0 || o <= 0) return a;
          var f = function (v) {
            var y = v.props,
              h = y.style,
              w = h === void 0 ? {} : h,
              p = y.className,
              x = B.cloneElement(v, Xt(Xt({}, s), {}, { style: Xt(Xt({}, w), c), className: p }));
            return x;
          };
          return l === 1
            ? f(B.Children.only(a))
            : $.createElement(
                "div",
                null,
                B.Children.map(a, function (d) {
                  return f(d);
                }),
              );
        },
      },
    ]),
    r
  );
})(B.PureComponent);
aa.displayName = "Animate";
aa.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function () {},
  onAnimationStart: function () {},
};
aa.propTypes = {
  from: ee.oneOfType([ee.object, ee.string]),
  to: ee.oneOfType([ee.object, ee.string]),
  attributeName: ee.string,
  duration: ee.number,
  begin: ee.number,
  easing: ee.oneOfType([ee.string, ee.func]),
  steps: ee.arrayOf(
    ee.shape({
      duration: ee.number.isRequired,
      style: ee.object.isRequired,
      easing: ee.oneOfType([ee.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), ee.func]),
      properties: ee.arrayOf("string"),
      onAnimationEnd: ee.func,
    }),
  ),
  children: ee.oneOfType([ee.node, ee.func]),
  isActive: ee.bool,
  canBegin: ee.bool,
  onAnimationEnd: ee.func,
  shouldReAnimate: ee.bool,
  onAnimationStart: ee.func,
  onAnimationReStart: ee.func,
};
Number.isFinite === void 0 &&
  (Number.isFinite = function (e) {
    return typeof e == "number" && isFinite(e);
  });
ee.object, ee.object, ee.object, ee.element;
ee.object, ee.object, ee.object, ee.oneOfType([ee.array, ee.element]), ee.any;
var t0 = Zo,
  tF = Cv,
  rF = yt,
  r0 = t0 ? t0.isConcatSpreadable : void 0;
function nF(e) {
  return rF(e) || tF(e) || !!(r0 && e && e[r0]);
}
var iF = nF,
  aF = k_,
  oF = iF;
function wS(e, t, r, n, i) {
  var a = -1,
    o = e.length;
  for (r || (r = oF), i || (i = []); ++a < o; ) {
    var u = e[a];
    t > 0 && r(u) ? (t > 1 ? wS(u, t - 1, r, n, i) : aF(i, u)) : n || (i[i.length] = u);
  }
  return i;
}
var bS = wS;
function uF(e) {
  return function (t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), u = o.length; u--; ) {
      var s = o[e ? u : ++i];
      if (r(a[s], s, a) === !1) break;
    }
    return t;
  };
}
var sF = uF,
  lF = sF,
  cF = lF(),
  fF = cF,
  dF = fF,
  hF = lc;
function pF(e, t) {
  return e && dF(e, t, hF);
}
var _S = pF,
  vF = eu;
function yF(e, t) {
  return function (r, n) {
    if (r == null) return r;
    if (!vF(r)) return e(r, n);
    for (var i = r.length, a = t ? i : -1, o = Object(r); (t ? a-- : ++a < i) && n(o[a], a, o) !== !1; );
    return r;
  };
}
var mF = yF,
  gF = _S,
  xF = mF,
  wF = xF(gF),
  Uv = wF,
  bF = Uv,
  _F = eu;
function SF(e, t) {
  var r = -1,
    n = _F(e) ? Array(e.length) : [];
  return (
    bF(e, function (i, a, o) {
      n[++r] = t(i, a, o);
    }),
    n
  );
}
var SS = SF;
function OF(e, t) {
  var r = e.length;
  for (e.sort(t); r--; ) e[r] = e[r].value;
  return e;
}
var EF = OF,
  n0 = wa;
function kF(e, t) {
  if (e !== t) {
    var r = e !== void 0,
      n = e === null,
      i = e === e,
      a = n0(e),
      o = t !== void 0,
      u = t === null,
      s = t === t,
      l = n0(t);
    if ((!u && !l && !a && e > t) || (a && o && s && !u && !l) || (n && o && s) || (!r && s) || !i) return 1;
    if ((!n && !a && !l && e < t) || (l && r && i && !n && !a) || (u && r && i) || (!o && i) || !s) return -1;
  }
  return 0;
}
var AF = kF,
  TF = AF;
function CF(e, t, r) {
  for (var n = -1, i = e.criteria, a = t.criteria, o = i.length, u = r.length; ++n < o; ) {
    var s = TF(i[n], a[n]);
    if (s) {
      if (n >= u) return s;
      var l = r[n];
      return s * (l == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var PF = CF,
  Sf = Rv,
  MF = jv,
  $F = On,
  IF = SS,
  NF = EF,
  RF = C_,
  jF = PF,
  DF = ba,
  LF = yt;
function FF(e, t, r) {
  t.length
    ? (t = Sf(t, function (a) {
        return LF(a)
          ? function (o) {
              return MF(o, a.length === 1 ? a[0] : a);
            }
          : a;
      }))
    : (t = [DF]);
  var n = -1;
  t = Sf(t, RF($F));
  var i = IF(e, function (a, o, u) {
    var s = Sf(t, function (l) {
      return l(a);
    });
    return { criteria: s, index: ++n, value: a };
  });
  return NF(i, function (a, o) {
    return jF(a, o, r);
  });
}
var BF = FF;
function UF(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var zF = UF,
  WF = zF,
  i0 = Math.max;
function HF(e, t, r) {
  return (
    (t = i0(t === void 0 ? e.length - 1 : t, 0)),
    function () {
      for (var n = arguments, i = -1, a = i0(n.length - t, 0), o = Array(a); ++i < a; ) o[i] = n[t + i];
      i = -1;
      for (var u = Array(t + 1); ++i < t; ) u[i] = n[i];
      return (u[t] = r(o)), WF(e, this, u);
    }
  );
}
var qF = HF;
function GF(e) {
  return function () {
    return e;
  };
}
var VF = GF,
  QF = di,
  YF = (function () {
    try {
      var e = QF(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {}
  })(),
  OS = YF,
  KF = VF,
  a0 = OS,
  XF = ba,
  JF = a0
    ? function (e, t) {
        return a0(e, "toString", { configurable: !0, enumerable: !1, value: KF(t), writable: !0 });
      }
    : XF,
  ZF = JF,
  e6 = 800,
  t6 = 16,
  r6 = Date.now;
function n6(e) {
  var t = 0,
    r = 0;
  return function () {
    var n = r6(),
      i = t6 - (n - r);
    if (((r = n), i > 0)) {
      if (++t >= e6) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
var i6 = n6,
  a6 = ZF,
  o6 = i6,
  u6 = o6(a6),
  s6 = u6,
  l6 = ba,
  c6 = qF,
  f6 = s6;
function d6(e, t) {
  return f6(c6(e, t, l6), e + "");
}
var h6 = d6,
  p6 = Ev,
  v6 = eu,
  y6 = Pv,
  m6 = bn;
function g6(e, t, r) {
  if (!m6(r)) return !1;
  var n = typeof t;
  return (n == "number" ? v6(r) && y6(t, r.length) : n == "string" && t in r) ? p6(r[t], e) : !1;
}
var mc = g6,
  x6 = bS,
  w6 = BF,
  b6 = h6,
  o0 = mc,
  _6 = b6(function (e, t) {
    if (e == null) return [];
    var r = t.length;
    return r > 1 && o0(e, t[0], t[1]) ? (t = []) : r > 2 && o0(t[0], t[1], t[2]) && (t = [t[0]]), w6(e, x6(t, 1), []);
  }),
  S6 = _6;
const zv = he(S6);
function as(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (as = function (r) {
          return typeof r;
        })
      : (as = function (r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    as(e)
  );
}
function O6(e, t) {
  return T6(e) || A6(e, t) || k6(e, t) || E6();
}
function E6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function k6(e, t) {
  if (e) {
    if (typeof e == "string") return u0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u0(e, t);
  }
}
function u0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function A6(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), u;
        !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t));
        n = !0
      );
    } catch (s) {
      (i = !0), (a = s);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function T6(e) {
  if (Array.isArray(e)) return e;
}
function s0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Of(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? s0(Object(r), !0).forEach(function (n) {
          C6(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : s0(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function C6(e, t, r) {
  return (
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
  );
}
function P6(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function l0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function M6(e, t, r) {
  return t && l0(e.prototype, t), r && l0(e, r), e;
}
function $6(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    t && Ah(e, t);
}
function Ah(e, t) {
  return (
    (Ah =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    Ah(e, t)
  );
}
function I6(e) {
  var t = j6();
  return function () {
    var n = cl(e),
      i;
    if (t) {
      var a = cl(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return N6(this, i);
  };
}
function N6(e, t) {
  return t && (as(t) === "object" || typeof t == "function") ? t : R6(e);
}
function R6(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function j6() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function cl(e) {
  return (
    (cl = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    cl(e)
  );
}
function D6(e) {
  return Ue(e) && ze(e[0]) && ze(e[1]) ? e.join(" ~ ") : e;
}
var Wv = (function (e) {
  $6(r, e);
  var t = I6(r);
  function r() {
    return P6(this, r), t.apply(this, arguments);
  }
  return (
    M6(r, [
      {
        key: "renderContent",
        value: function () {
          var i = this.props,
            a = i.payload,
            o = i.separator,
            u = i.formatter,
            s = i.itemStyle,
            l = i.itemSorter;
          if (a && a.length) {
            var c = { padding: 0, margin: 0 },
              f = (l ? zv(a, l) : a).map(function (d, v) {
                if (d.type === "none") return null;
                var y = Of({ display: "block", paddingTop: 4, paddingBottom: 4, color: d.color || "#000" }, s),
                  h = d.formatter || u || D6,
                  w = d.name,
                  p = d.value;
                if (h) {
                  var x = h(p, w, d, v, a);
                  if (Array.isArray(x)) {
                    var m = O6(x, 2);
                    (p = m[0]), (w = m[1]);
                  } else p = x;
                }
                return $.createElement(
                  "li",
                  { className: "recharts-tooltip-item", key: "tooltip-item-".concat(v), style: y },
                  ze(w) ? $.createElement("span", { className: "recharts-tooltip-item-name" }, w) : null,
                  ze(w) ? $.createElement("span", { className: "recharts-tooltip-item-separator" }, o) : null,
                  $.createElement("span", { className: "recharts-tooltip-item-value" }, p),
                  $.createElement("span", { className: "recharts-tooltip-item-unit" }, d.unit || ""),
                );
              });
            return $.createElement("ul", { className: "recharts-tooltip-item-list", style: c }, f);
          }
          return null;
        },
      },
      {
        key: "render",
        value: function () {
          var i = this.props,
            a = i.wrapperClassName,
            o = i.contentStyle,
            u = i.labelClassName,
            s = i.labelStyle,
            l = i.label,
            c = i.labelFormatter,
            f = i.payload,
            d = Of(
              { margin: 0, padding: 10, backgroundColor: "#fff", border: "1px solid #ccc", whiteSpace: "nowrap" },
              o,
            ),
            v = Of({ margin: 0 }, s),
            y = !Y(l),
            h = y ? l : "",
            w = Oe("recharts-default-tooltip", a),
            p = Oe("recharts-tooltip-label", u);
          return (
            y && c && f !== void 0 && f !== null && (h = c(l, f)),
            $.createElement(
              "div",
              { className: w, style: d },
              $.createElement("p", { className: p, style: v }, $.isValidElement(h) ? h : "".concat(h)),
              this.renderContent(),
            )
          );
        },
      },
    ]),
    r
  );
})(B.PureComponent);
Wv.displayName = "DefaultTooltipContent";
Wv.defaultProps = { separator: " : ", contentStyle: {}, itemStyle: {}, labelStyle: {} };
var L6 = function () {
    return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
  },
  fn = {
    isSsr: L6(),
    get: function (t) {
      return fn[t];
    },
    set: function (t, r) {
      if (typeof t == "string") fn[t] = r;
      else {
        var n = Object.keys(t);
        n &&
          n.length &&
          n.forEach(function (i) {
            fn[i] = t[i];
          });
      }
    },
  };
function os(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (os = function (r) {
          return typeof r;
        })
      : (os = function (r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    os(e)
  );
}
function c0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Cn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? c0(Object(r), !0).forEach(function (n) {
          no(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : c0(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function no(e, t, r) {
  return (
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
  );
}
function F6(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function f0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function B6(e, t, r) {
  return t && f0(e.prototype, t), r && f0(e, r), e;
}
function U6(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    t && Th(e, t);
}
function Th(e, t) {
  return (
    (Th =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    Th(e, t)
  );
}
function z6(e) {
  var t = q6();
  return function () {
    var n = fl(e),
      i;
    if (t) {
      var a = fl(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return W6(this, i);
  };
}
function W6(e, t) {
  return t && (os(t) === "object" || typeof t == "function") ? t : H6(e);
}
function H6(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function q6() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function fl(e) {
  return (
    (fl = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    fl(e)
  );
}
var za = "recharts-tooltip-wrapper",
  d0 = 1;
function G6(e) {
  return e.dataKey;
}
function V6(e, t) {
  return e === !0 ? Xs(t, G6) : Z(e) ? Xs(t, e) : t;
}
function Q6(e, t) {
  return $.isValidElement(e) ? $.cloneElement(e, t) : Z(e) ? $.createElement(e, t) : $.createElement(Wv, t);
}
var dr = (function (e) {
  U6(r, e);
  var t = z6(r);
  function r() {
    var n;
    F6(this, r);
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
    return (
      (n = t.call.apply(t, [this].concat(a))),
      (n.state = { boxWidth: -1, boxHeight: -1 }),
      (n.wrapperNode = void 0),
      (n.getTranslate = function (u) {
        var s = u.key,
          l = u.tooltipDimension,
          c = u.viewBoxDimension,
          f = n.props,
          d = f.allowEscapeViewBox,
          v = f.coordinate,
          y = f.offset,
          h = f.position,
          w = f.viewBox;
        if (h && H(h[s])) return h[s];
        var p = v[s] - l - y,
          x = v[s] + y;
        if (d[s]) return x;
        var m = v[s] + l + y,
          g = w[s] + c;
        return m > g ? Math.max(p, w[s]) : Math.max(x, w[s]);
      }),
      n
    );
  }
  return (
    B6(r, [
      {
        key: "componentDidMount",
        value: function () {
          this.updateBBox();
        },
      },
      {
        key: "componentDidUpdate",
        value: function () {
          this.updateBBox();
        },
      },
      {
        key: "updateBBox",
        value: function () {
          var i = this.state,
            a = i.boxWidth,
            o = i.boxHeight;
          if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
            var u = this.wrapperNode.getBoundingClientRect();
            (Math.abs(u.width - a) > d0 || Math.abs(u.height - o) > d0) &&
              this.setState({ boxWidth: u.width, boxHeight: u.height });
          } else (a !== -1 || o !== -1) && this.setState({ boxWidth: -1, boxHeight: -1 });
        },
      },
      {
        key: "render",
        value: function () {
          var i,
            a = this,
            o = this.props,
            u = o.payload,
            s = o.isAnimationActive,
            l = o.animationDuration,
            c = o.animationEasing,
            f = o.filterNull,
            d = o.payloadUniqBy,
            v = V6(
              d,
              f && u && u.length
                ? u.filter(function (M) {
                    return !Y(M.value);
                  })
                : u,
            ),
            y = v && v.length,
            h = this.props,
            w = h.content,
            p = h.viewBox,
            x = h.coordinate,
            m = h.position,
            g = h.active,
            b = h.wrapperStyle,
            _ = Cn(
              {
                pointerEvents: "none",
                visibility: g && y ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0,
              },
              b,
            ),
            S,
            O;
          if (m && H(m.x) && H(m.y)) (S = m.x), (O = m.y);
          else {
            var E = this.state,
              A = E.boxWidth,
              k = E.boxHeight;
            A > 0 && k > 0 && x
              ? ((S = this.getTranslate({ key: "x", tooltipDimension: A, viewBoxDimension: p.width })),
                (O = this.getTranslate({ key: "y", tooltipDimension: k, viewBoxDimension: p.height })))
              : (_.visibility = "hidden");
          }
          (_ = Cn(
            Cn(
              {},
              gh({
                transform: this.props.useTranslate3d
                  ? "translate3d(".concat(S, "px, ").concat(O, "px, 0)")
                  : "translate(".concat(S, "px, ").concat(O, "px)"),
              }),
            ),
            _,
          )),
            s && g && (_ = Cn(Cn({}, gh({ transition: "transform ".concat(l, "ms ").concat(c) })), _));
          var C = Oe(
            za,
            ((i = {}),
            no(i, "".concat(za, "-right"), H(S) && x && H(x.x) && S >= x.x),
            no(i, "".concat(za, "-left"), H(S) && x && H(x.x) && S < x.x),
            no(i, "".concat(za, "-bottom"), H(O) && x && H(x.y) && O >= x.y),
            no(i, "".concat(za, "-top"), H(O) && x && H(x.y) && O < x.y),
            i),
          );
          return $.createElement(
            "div",
            {
              className: C,
              style: _,
              ref: function (I) {
                a.wrapperNode = I;
              },
            },
            Q6(w, Cn(Cn({}, this.props), {}, { payload: v })),
          );
        },
      },
    ]),
    r
  );
})(B.PureComponent);
dr.displayName = "Tooltip";
dr.defaultProps = {
  active: !1,
  allowEscapeViewBox: { x: !1, y: !1 },
  offset: 10,
  viewBox: { x1: 0, x2: 0, y1: 0, y2: 0 },
  coordinate: { x: 0, y: 0 },
  cursorStyle: {},
  separator: " : ",
  wrapperStyle: {},
  contentStyle: {},
  itemStyle: {},
  labelStyle: {},
  cursor: !0,
  trigger: "hover",
  isAnimationActive: !fn.isSsr,
  animationEasing: "ease",
  animationDuration: 400,
  filterNull: !0,
  useTranslate3d: !1,
};
var Y6 = br,
  K6 = function () {
    return Y6.Date.now();
  },
  X6 = K6,
  J6 = /\s/;
function Z6(e) {
  for (var t = e.length; t-- && J6.test(e.charAt(t)); );
  return t;
}
var e8 = Z6,
  t8 = e8,
  r8 = /^\s+/;
function n8(e) {
  return e && e.slice(0, t8(e) + 1).replace(r8, "");
}
var i8 = n8,
  a8 = i8,
  h0 = bn,
  o8 = wa,
  p0 = 0 / 0,
  u8 = /^[-+]0x[0-9a-f]+$/i,
  s8 = /^0b[01]+$/i,
  l8 = /^0o[0-7]+$/i,
  c8 = parseInt;
function f8(e) {
  if (typeof e == "number") return e;
  if (o8(e)) return p0;
  if (h0(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = h0(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = a8(e);
  var r = s8.test(e);
  return r || l8.test(e) ? c8(e.slice(2), r ? 2 : 8) : u8.test(e) ? p0 : +e;
}
var ES = f8,
  d8 = bn,
  Ef = X6,
  v0 = ES,
  h8 = "Expected a function",
  p8 = Math.max,
  v8 = Math.min;
function y8(e, t, r) {
  var n,
    i,
    a,
    o,
    u,
    s,
    l = 0,
    c = !1,
    f = !1,
    d = !0;
  if (typeof e != "function") throw new TypeError(h8);
  (t = v0(t) || 0),
    d8(r) &&
      ((c = !!r.leading),
      (f = "maxWait" in r),
      (a = f ? p8(v0(r.maxWait) || 0, t) : a),
      (d = "trailing" in r ? !!r.trailing : d));
  function v(_) {
    var S = n,
      O = i;
    return (n = i = void 0), (l = _), (o = e.apply(O, S)), o;
  }
  function y(_) {
    return (l = _), (u = setTimeout(p, t)), c ? v(_) : o;
  }
  function h(_) {
    var S = _ - s,
      O = _ - l,
      E = t - S;
    return f ? v8(E, a - O) : E;
  }
  function w(_) {
    var S = _ - s,
      O = _ - l;
    return s === void 0 || S >= t || S < 0 || (f && O >= a);
  }
  function p() {
    var _ = Ef();
    if (w(_)) return x(_);
    u = setTimeout(p, h(_));
  }
  function x(_) {
    return (u = void 0), d && n ? v(_) : ((n = i = void 0), o);
  }
  function m() {
    u !== void 0 && clearTimeout(u), (l = 0), (n = s = i = u = void 0);
  }
  function g() {
    return u === void 0 ? o : x(Ef());
  }
  function b() {
    var _ = Ef(),
      S = w(_);
    if (((n = arguments), (i = this), (s = _), S)) {
      if (u === void 0) return y(s);
      if (f) return clearTimeout(u), (u = setTimeout(p, t)), v(s);
    }
    return u === void 0 && (u = setTimeout(p, t)), o;
  }
  return (b.cancel = m), (b.flush = g), b;
}
var kS = y8;
const m8 = he(kS);
var Ch = function (e, t) {
  return (
    (Ch =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (r, n) {
          r.__proto__ = n;
        }) ||
      function (r, n) {
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
      }),
    Ch(e, t)
  );
};
function g8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Ch(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
function x8(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
var Nu =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function w8(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Hv = w8,
  b8 = typeof Nu == "object" && Nu && Nu.Object === Object && Nu,
  _8 = b8,
  S8 = _8,
  O8 = typeof self == "object" && self && self.Object === Object && self,
  E8 = S8 || O8 || Function("return this")(),
  AS = E8,
  k8 = AS,
  A8 = function () {
    return k8.Date.now();
  },
  T8 = A8,
  C8 = /\s/;
function P8(e) {
  for (var t = e.length; t-- && C8.test(e.charAt(t)); );
  return t;
}
var M8 = P8,
  $8 = M8,
  I8 = /^\s+/;
function N8(e) {
  return e && e.slice(0, $8(e) + 1).replace(I8, "");
}
var R8 = N8,
  j8 = AS,
  D8 = j8.Symbol,
  TS = D8,
  y0 = TS,
  CS = Object.prototype,
  L8 = CS.hasOwnProperty,
  F8 = CS.toString,
  Wa = y0 ? y0.toStringTag : void 0;
function B8(e) {
  var t = L8.call(e, Wa),
    r = e[Wa];
  try {
    e[Wa] = void 0;
    var n = !0;
  } catch {}
  var i = F8.call(e);
  return n && (t ? (e[Wa] = r) : delete e[Wa]), i;
}
var U8 = B8,
  z8 = Object.prototype,
  W8 = z8.toString;
function H8(e) {
  return W8.call(e);
}
var q8 = H8,
  m0 = TS,
  G8 = U8,
  V8 = q8,
  Q8 = "[object Null]",
  Y8 = "[object Undefined]",
  g0 = m0 ? m0.toStringTag : void 0;
function K8(e) {
  return e == null ? (e === void 0 ? Y8 : Q8) : g0 && g0 in Object(e) ? G8(e) : V8(e);
}
var X8 = K8;
function J8(e) {
  return e != null && typeof e == "object";
}
var Z8 = J8,
  eB = X8,
  tB = Z8,
  rB = "[object Symbol]";
function nB(e) {
  return typeof e == "symbol" || (tB(e) && eB(e) == rB);
}
var iB = nB,
  aB = R8,
  x0 = Hv,
  oB = iB,
  w0 = 0 / 0,
  uB = /^[-+]0x[0-9a-f]+$/i,
  sB = /^0b[01]+$/i,
  lB = /^0o[0-7]+$/i,
  cB = parseInt;
function fB(e) {
  if (typeof e == "number") return e;
  if (oB(e)) return w0;
  if (x0(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = x0(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = aB(e);
  var r = sB.test(e);
  return r || lB.test(e) ? cB(e.slice(2), r ? 2 : 8) : uB.test(e) ? w0 : +e;
}
var dB = fB,
  hB = Hv,
  kf = T8,
  b0 = dB,
  pB = "Expected a function",
  vB = Math.max,
  yB = Math.min;
function mB(e, t, r) {
  var n,
    i,
    a,
    o,
    u,
    s,
    l = 0,
    c = !1,
    f = !1,
    d = !0;
  if (typeof e != "function") throw new TypeError(pB);
  (t = b0(t) || 0),
    hB(r) &&
      ((c = !!r.leading),
      (f = "maxWait" in r),
      (a = f ? vB(b0(r.maxWait) || 0, t) : a),
      (d = "trailing" in r ? !!r.trailing : d));
  function v(_) {
    var S = n,
      O = i;
    return (n = i = void 0), (l = _), (o = e.apply(O, S)), o;
  }
  function y(_) {
    return (l = _), (u = setTimeout(p, t)), c ? v(_) : o;
  }
  function h(_) {
    var S = _ - s,
      O = _ - l,
      E = t - S;
    return f ? yB(E, a - O) : E;
  }
  function w(_) {
    var S = _ - s,
      O = _ - l;
    return s === void 0 || S >= t || S < 0 || (f && O >= a);
  }
  function p() {
    var _ = kf();
    if (w(_)) return x(_);
    u = setTimeout(p, h(_));
  }
  function x(_) {
    return (u = void 0), d && n ? v(_) : ((n = i = void 0), o);
  }
  function m() {
    u !== void 0 && clearTimeout(u), (l = 0), (n = s = i = u = void 0);
  }
  function g() {
    return u === void 0 ? o : x(kf());
  }
  function b() {
    var _ = kf(),
      S = w(_);
    if (((n = arguments), (i = this), (s = _), S)) {
      if (u === void 0) return y(s);
      if (f) return clearTimeout(u), (u = setTimeout(p, t)), v(s);
    }
    return u === void 0 && (u = setTimeout(p, t)), o;
  }
  return (b.cancel = m), (b.flush = g), b;
}
var PS = mB,
  gB = PS,
  xB = Hv,
  wB = "Expected a function";
function bB(e, t, r) {
  var n = !0,
    i = !0;
  if (typeof e != "function") throw new TypeError(wB);
  return (
    xB(r) && ((n = "leading" in r ? !!r.leading : n), (i = "trailing" in r ? !!r.trailing : i)),
    gB(e, t, { leading: n, maxWait: t, trailing: i })
  );
}
var _B = bB,
  SB = function (e, t, r, n) {
    switch (t) {
      case "debounce":
        return PS(e, r, n);
      case "throttle":
        return _B(e, r, n);
      default:
        return e;
    }
  },
  Ph = function (e) {
    return typeof e == "function";
  },
  Ha = function () {
    return typeof window > "u";
  },
  _0 = function (e) {
    return e instanceof Element || e instanceof HTMLDocument;
  },
  OB = function (e, t, r, n) {
    return function (i) {
      var a = i.width,
        o = i.height;
      t(function (u) {
        return (u.width === a && u.height === o) || (u.width === a && !n) || (u.height === o && !r)
          ? u
          : (e && Ph(e) && e(a, o), { width: a, height: o });
      });
    };
  },
  EB = (function (e) {
    g8(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      (n.cancelHandler = function () {
        n.resizeHandler && n.resizeHandler.cancel && (n.resizeHandler.cancel(), (n.resizeHandler = null));
      }),
        (n.attachObserver = function () {
          var l = n.props,
            c = l.targetRef,
            f = l.observerOptions;
          if (!Ha()) {
            c && c.current && (n.targetRef.current = c.current);
            var d = n.getElement();
            d &&
              ((n.observableElement && n.observableElement === d) ||
                ((n.observableElement = d), n.resizeObserver.observe(d, f)));
          }
        }),
        (n.getElement = function () {
          var l = n.props,
            c = l.querySelector,
            f = l.targetDomEl;
          if (Ha()) return null;
          if (c) return document.querySelector(c);
          if (f && _0(f)) return f;
          if (n.targetRef && _0(n.targetRef.current)) return n.targetRef.current;
          var d = Hb.findDOMNode(n);
          if (!d) return null;
          var v = n.getRenderType();
          switch (v) {
            case "renderProp":
              return d;
            case "childFunction":
              return d;
            case "child":
              return d;
            case "childArray":
              return d;
            default:
              return d.parentElement;
          }
        }),
        (n.createResizeHandler = function (l) {
          var c = n.props,
            f = c.handleWidth,
            d = f === void 0 ? !0 : f,
            v = c.handleHeight,
            y = v === void 0 ? !0 : v,
            h = c.onResize;
          if (!(!d && !y)) {
            var w = OB(h, n.setState.bind(n), d, y);
            l.forEach(function (p) {
              var x = (p && p.contentRect) || {},
                m = x.width,
                g = x.height,
                b = !n.skipOnMount && !Ha();
              b && w({ width: m, height: g }), (n.skipOnMount = !1);
            });
          }
        }),
        (n.getRenderType = function () {
          var l = n.props,
            c = l.render,
            f = l.children;
          return Ph(c)
            ? "renderProp"
            : Ph(f)
            ? "childFunction"
            : B.isValidElement(f)
            ? "child"
            : Array.isArray(f)
            ? "childArray"
            : "parent";
        });
      var i = r.skipOnMount,
        a = r.refreshMode,
        o = r.refreshRate,
        u = o === void 0 ? 1e3 : o,
        s = r.refreshOptions;
      return (
        (n.state = { width: void 0, height: void 0 }),
        (n.skipOnMount = i),
        (n.targetRef = B.createRef()),
        (n.observableElement = null),
        Ha() ||
          ((n.resizeHandler = SB(n.createResizeHandler, a, u, s)),
          (n.resizeObserver = new window.ResizeObserver(n.resizeHandler))),
        n
      );
    }
    return (
      (t.prototype.componentDidMount = function () {
        this.attachObserver();
      }),
      (t.prototype.componentDidUpdate = function () {
        this.attachObserver();
      }),
      (t.prototype.componentWillUnmount = function () {
        Ha() || ((this.observableElement = null), this.resizeObserver.disconnect(), this.cancelHandler());
      }),
      (t.prototype.render = function () {
        var r = this.props,
          n = r.render,
          i = r.children,
          a = r.nodeType,
          o = a === void 0 ? "div" : a,
          u = this.state,
          s = u.width,
          l = u.height,
          c = { width: s, height: l, targetRef: this.targetRef },
          f = this.getRenderType(),
          d;
        switch (f) {
          case "renderProp":
            return n && n(c);
          case "childFunction":
            return (d = i), d(c);
          case "child":
            if (((d = i), d.type && typeof d.type == "string")) {
              c.targetRef;
              var v = x8(c, ["targetRef"]);
              return B.cloneElement(d, v);
            }
            return B.cloneElement(d, c);
          case "childArray":
            return (
              (d = i),
              d.map(function (y) {
                return !!y && B.cloneElement(y, c);
              })
            );
          default:
            return B.createElement(o, null);
        }
      }),
      t
    );
  })(B.PureComponent),
  Wi = function (t, r) {
    for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) i[a - 2] = arguments[a];
  };
function Mh() {
  return (
    (Mh =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Mh.apply(this, arguments)
  );
}
function S0(e, t) {
  return CB(e) || TB(e, t) || AB(e, t) || kB();
}
function kB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function AB(e, t) {
  if (e) {
    if (typeof e == "string") return O0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return O0(e, t);
  }
}
function O0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function TB(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), u;
        !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t));
        n = !0
      );
    } catch (s) {
      (i = !0), (a = s);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function CB(e) {
  if (Array.isArray(e)) return e;
}
var gc = B.forwardRef(function (e, t) {
    var r = e.aspect,
      n = e.width,
      i = n === void 0 ? "100%" : n,
      a = e.height,
      o = a === void 0 ? "100%" : a,
      u = e.minWidth,
      s = e.minHeight,
      l = e.maxHeight,
      c = e.children,
      f = e.debounce,
      d = f === void 0 ? 0 : f,
      v = e.id,
      y = e.className,
      h = B.useState({ containerWidth: -1, containerHeight: -1 }),
      w = S0(h, 2),
      p = w[0],
      x = w[1],
      m = B.useRef(null);
    B.useImperativeHandle(
      t,
      function () {
        return m;
      },
      [m],
    );
    var g = B.useState(!1),
      b = S0(g, 2),
      _ = b[0],
      S = b[1],
      O = function () {
        return m.current ? { containerWidth: m.current.clientWidth, containerHeight: m.current.clientHeight } : null;
      },
      E = function () {
        if (_) {
          var I = O();
          if (I) {
            var D = p.containerWidth,
              N = p.containerHeight,
              W = I.containerWidth,
              P = I.containerHeight;
            (W !== D || P !== N) && x({ containerWidth: W, containerHeight: P });
          }
        }
      },
      A = d > 0 ? m8(E, d) : E,
      k = function () {
        var I = p.containerWidth,
          D = p.containerHeight;
        if (I < 0 || D < 0) return null;
        Wi(
          Wn(i) || Wn(o),
          `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
          i,
          o,
        ),
          Wi(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
        var N = Wn(i) ? I : i,
          W = Wn(o) ? D : o;
        return (
          r && r > 0 && (N ? (W = N / r) : W && (N = W * r), l && W > l && (W = l)),
          Wi(
            N > 0 || W > 0,
            `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
            N,
            W,
            i,
            o,
            u,
            s,
            r,
          ),
          B.cloneElement(c, { width: N, height: W })
        );
      };
    B.useEffect(
      function () {
        if (_) {
          var M = O();
          M && x(M);
        }
      },
      [_],
    ),
      B.useEffect(function () {
        S(!0);
      }, []);
    var C = { width: i, height: o, minWidth: u, minHeight: s, maxHeight: l };
    return $.createElement(
      EB,
      { handleWidth: !0, handleHeight: !0, onResize: A, targetRef: m },
      $.createElement(
        "div",
        Mh({}, v != null ? { id: "".concat(v) } : {}, {
          className: Oe("recharts-responsive-container", y),
          style: C,
          ref: m,
        }),
        k(),
      ),
    );
  }),
  $h = { exports: {} },
  Af = "(".charCodeAt(0),
  Tf = ")".charCodeAt(0),
  Ru = "'".charCodeAt(0),
  Cf = '"'.charCodeAt(0),
  Pf = "\\".charCodeAt(0),
  ju = "/".charCodeAt(0),
  Mf = ",".charCodeAt(0),
  $f = ":".charCodeAt(0),
  E0 = "*".charCodeAt(0),
  PB = function (e) {
    for (
      var t = [],
        r = e,
        n,
        i,
        a,
        o,
        u,
        s,
        l,
        c = 0,
        f = r.charCodeAt(c),
        d = r.length,
        v = [{ nodes: t }],
        y = 0,
        h,
        w = "",
        p = "",
        x = "";
      c < d;

    )
      if (f <= 32) {
        n = c;
        do (n += 1), (f = r.charCodeAt(n));
        while (f <= 32);
        (o = r.slice(c, n)),
          (a = t[t.length - 1]),
          f === Tf && y
            ? (x = o)
            : a && a.type === "div"
            ? (a.after = o)
            : f === Mf || f === $f || (f === ju && r.charCodeAt(n + 1) !== E0)
            ? (p = o)
            : t.push({ type: "space", sourceIndex: c, value: o }),
          (c = n);
      } else if (f === Ru || f === Cf) {
        (n = c), (i = f === Ru ? "'" : '"'), (o = { type: "string", sourceIndex: c, quote: i });
        do
          if (((u = !1), (n = r.indexOf(i, n + 1)), ~n)) for (s = n; r.charCodeAt(s - 1) === Pf; ) (s -= 1), (u = !u);
          else (r += i), (n = r.length - 1), (o.unclosed = !0);
        while (u);
        (o.value = r.slice(c + 1, n)), t.push(o), (c = n + 1), (f = r.charCodeAt(c));
      } else if (f === ju && r.charCodeAt(c + 1) === E0)
        (o = { type: "comment", sourceIndex: c }),
          (n = r.indexOf("*/", c)),
          n === -1 && ((o.unclosed = !0), (n = r.length)),
          (o.value = r.slice(c + 2, n)),
          t.push(o),
          (c = n + 2),
          (f = r.charCodeAt(c));
      else if (f === ju || f === Mf || f === $f)
        (o = r[c]),
          t.push({ type: "div", sourceIndex: c - p.length, value: o, before: p, after: "" }),
          (p = ""),
          (c += 1),
          (f = r.charCodeAt(c));
      else if (Af === f) {
        n = c;
        do (n += 1), (f = r.charCodeAt(n));
        while (f <= 32);
        if (
          ((o = { type: "function", sourceIndex: c - w.length, value: w, before: r.slice(c + 1, n) }),
          (c = n),
          w === "url" && f !== Ru && f !== Cf)
        ) {
          n -= 1;
          do
            if (((u = !1), (n = r.indexOf(")", n + 1)), ~n))
              for (s = n; r.charCodeAt(s - 1) === Pf; ) (s -= 1), (u = !u);
            else (r += ")"), (n = r.length - 1), (o.unclosed = !0);
          while (u);
          l = n;
          do (l -= 1), (f = r.charCodeAt(l));
          while (f <= 32);
          c !== l + 1 ? (o.nodes = [{ type: "word", sourceIndex: c, value: r.slice(c, l + 1) }]) : (o.nodes = []),
            o.unclosed && l + 1 !== n
              ? ((o.after = ""), o.nodes.push({ type: "space", sourceIndex: l + 1, value: r.slice(l + 1, n) }))
              : (o.after = r.slice(l + 1, n)),
            (c = n + 1),
            (f = r.charCodeAt(c)),
            t.push(o);
        } else (y += 1), (o.after = ""), t.push(o), v.push(o), (t = o.nodes = []), (h = o);
        w = "";
      } else if (Tf === f && y)
        (c += 1), (f = r.charCodeAt(c)), (h.after = x), (x = ""), (y -= 1), v.pop(), (h = v[y]), (t = h.nodes);
      else {
        n = c;
        do f === Pf && (n += 1), (n += 1), (f = r.charCodeAt(n));
        while (
          n < d &&
          !(f <= 32 || f === Ru || f === Cf || f === Mf || f === $f || f === ju || f === Af || (f === Tf && y))
        );
        (o = r.slice(c, n)), Af === f ? (w = o) : t.push({ type: "word", sourceIndex: c, value: o }), (c = n);
      }
    for (c = v.length - 1; c; c -= 1) v[c].unclosed = !0;
    return v[0].nodes;
  },
  MB = function e(t, r, n) {
    var i, a, o, u;
    for (i = 0, a = t.length; i < a; i += 1)
      (o = t[i]),
        n || (u = r(o, i, t)),
        u !== !1 && o.type === "function" && Array.isArray(o.nodes) && e(o.nodes, r, n),
        n && r(o, i, t);
  };
function k0(e, t) {
  var r = e.type,
    n = e.value,
    i,
    a;
  return t && (a = t(e)) !== void 0
    ? a
    : r === "word" || r === "space"
    ? n
    : r === "string"
    ? ((i = e.quote || ""), i + n + (e.unclosed ? "" : i))
    : r === "comment"
    ? "/*" + n + (e.unclosed ? "" : "*/")
    : r === "div"
    ? (e.before || "") + n + (e.after || "")
    : Array.isArray(e.nodes)
    ? ((i = MS(e.nodes)),
      r !== "function" ? i : n + "(" + (e.before || "") + i + (e.after || "") + (e.unclosed ? "" : ")"))
    : n;
}
function MS(e, t) {
  var r, n;
  if (Array.isArray(e)) {
    for (r = "", n = e.length - 1; ~n; n -= 1) r = k0(e[n], t) + r;
    return r;
  }
  return k0(e, t);
}
var $B = MS,
  If,
  A0;
function IB() {
  if (A0) return If;
  A0 = 1;
  var e = "-".charCodeAt(0),
    t = "+".charCodeAt(0),
    r = ".".charCodeAt(0),
    n = "e".charCodeAt(0),
    i = "E".charCodeAt(0);
  return (
    (If = function (a) {
      for (var o = 0, u = a.length, s = !1, l = -1, c = !1, f; o < u; ) {
        if (((f = a.charCodeAt(o)), f >= 48 && f <= 57)) c = !0;
        else if (f === n || f === i) {
          if (l > -1) break;
          l = o;
        } else if (f === r) {
          if (s) break;
          s = !0;
        } else if (f === t || f === e) {
          if (o !== 0) break;
        } else break;
        o += 1;
      }
      return l + 1 === o && o--, c ? { number: a.slice(0, o), unit: a.slice(o) } : !1;
    }),
    If
  );
}
var NB = PB,
  $S = MB,
  IS = $B;
function mn(e) {
  return this instanceof mn ? ((this.nodes = NB(e)), this) : new mn(e);
}
mn.prototype.toString = function () {
  return Array.isArray(this.nodes) ? IS(this.nodes) : "";
};
mn.prototype.walk = function (e, t) {
  return $S(this.nodes, e, t), this;
};
mn.unit = IB();
mn.walk = $S;
mn.stringify = IS;
var RB = mn;
function jB(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
  );
}
var NS = {};
(function (e) {
  var t = (function () {
    function r(d, v) {
      Object.defineProperty(this, "name", { enumerable: !1, writable: !1, value: "JisonParserError" }),
        d == null && (d = "???"),
        Object.defineProperty(this, "message", { enumerable: !1, writable: !0, value: d }),
        (this.hash = v);
      var y;
      if (v && v.exception instanceof Error) {
        var h = v.exception;
        (this.message = h.message || d), (y = h.stack);
      }
      y ||
        (Error.hasOwnProperty("captureStackTrace")
          ? Error.captureStackTrace(this, this.constructor)
          : (y = new Error(d).stack)),
        y && Object.defineProperty(this, "stack", { enumerable: !1, writable: !1, value: y });
    }
    typeof Object.setPrototypeOf == "function"
      ? Object.setPrototypeOf(r.prototype, Error.prototype)
      : (r.prototype = Object.create(Error.prototype)),
      (r.prototype.constructor = r),
      (r.prototype.name = "JisonParserError");
    function n(d) {
      for (var v = [], y = d.pop, h = d.rule, w = 0, p = y.length; w < p; w++) v.push([y[w], h[w]]);
      return v;
    }
    function i(d) {
      for (var v = {}, y = d.idx, h = d.goto, w = 0, p = y.length; w < p; w++) {
        var x = y[w];
        v[x] = h[w];
      }
      return v;
    }
    function a(d) {
      for (
        var v = [], y = d.len, h = d.symbol, w = d.type, p = d.state, x = d.mode, m = d.goto, g = 0, b = y.length;
        g < b;
        g++
      ) {
        for (var _ = y[g], S = {}, O = 0; O < _; O++) {
          var E = h.shift();
          switch (w.shift()) {
            case 2:
              S[E] = [x.shift(), m.shift()];
              break;
            case 0:
              S[E] = p.shift();
              break;
            default:
              S[E] = [3];
          }
        }
        v.push(S);
      }
      return v;
    }
    function o(d, v, y) {
      y = y || 0;
      for (var h = 0; h < v; h++) this.push(d), (d += y);
    }
    function u(d, v) {
      for (d = this.length - d, v += d; d < v; d++) this.push(this[d]);
    }
    function s(d) {
      for (var v = [], y = 0, h = d.length; y < h; y++) {
        var w = d[y];
        typeof w == "function" ? (y++, w.apply(v, d[y])) : v.push(w);
      }
      return v;
    }
    var l = {
      trace: function () {},
      JisonParserError: r,
      yy: {},
      options: { type: "lalr", hasPartialLrUpgradeOnConflict: !0, errorRecoveryTokenDiscardCount: 3 },
      symbols_: {
        $accept: 0,
        $end: 1,
        ADD: 3,
        ANGLE: 16,
        CHS: 22,
        COMMA: 14,
        CSS_CPROP: 13,
        CSS_VAR: 12,
        DIV: 6,
        EMS: 20,
        EOF: 1,
        EXS: 21,
        FREQ: 18,
        LENGTH: 15,
        LPAREN: 7,
        MUL: 5,
        NESTED_CALC: 9,
        NUMBER: 11,
        PERCENTAGE: 28,
        PREFIX: 10,
        REMS: 23,
        RES: 19,
        RPAREN: 8,
        SUB: 4,
        TIME: 17,
        VHS: 24,
        VMAXS: 27,
        VMINS: 26,
        VWS: 25,
        css_value: 33,
        css_variable: 32,
        error: 2,
        expression: 29,
        math_expression: 30,
        value: 31,
      },
      terminals_: {
        1: "EOF",
        2: "error",
        3: "ADD",
        4: "SUB",
        5: "MUL",
        6: "DIV",
        7: "LPAREN",
        8: "RPAREN",
        9: "NESTED_CALC",
        10: "PREFIX",
        11: "NUMBER",
        12: "CSS_VAR",
        13: "CSS_CPROP",
        14: "COMMA",
        15: "LENGTH",
        16: "ANGLE",
        17: "TIME",
        18: "FREQ",
        19: "RES",
        20: "EMS",
        21: "EXS",
        22: "CHS",
        23: "REMS",
        24: "VHS",
        25: "VWS",
        26: "VMINS",
        27: "VMAXS",
        28: "PERCENTAGE",
      },
      TERROR: 2,
      EOF: 1,
      originalQuoteName: null,
      originalParseError: null,
      cleanupAfterParse: null,
      constructParseErrorInfo: null,
      yyMergeLocationInfo: null,
      __reentrant_call_depth: 0,
      __error_infos: [],
      __error_recovery_infos: [],
      quoteName: function (v) {
        return '"' + v + '"';
      },
      getSymbolName: function (v) {
        if (this.terminals_[v]) return this.terminals_[v];
        var y = this.symbols_;
        for (var h in y) if (y[h] === v) return h;
        return null;
      },
      describeSymbol: function (v) {
        if (v !== this.EOF && this.terminal_descriptions_ && this.terminal_descriptions_[v])
          return this.terminal_descriptions_[v];
        if (v === this.EOF) return "end of input";
        var y = this.getSymbolName(v);
        return y ? this.quoteName(y) : null;
      },
      collect_expected_token_set: function (v, y) {
        var h = this.TERROR,
          w = [],
          p = {};
        if (!y && this.state_descriptions_ && this.state_descriptions_[v]) return [this.state_descriptions_[v]];
        for (var x in this.table[v])
          if (((x = +x), x !== h)) {
            var m = y ? x : this.describeSymbol(x);
            m && !p[m] && (w.push(m), (p[m] = !0));
          }
        return w;
      },
      productions_: n({
        pop: s([29, o, [30, 10], 31, 31, 32, 32, o, [33, 15]]),
        rule: s([2, o, [3, 5], 4, 7, o, [1, 4], 2, 4, 6, o, [1, 14], 2]),
      }),
      performAction: function (v, y, h) {
        var w = this.yy;
        switch ((w.parser, w.lexer, v)) {
          case 0:
            this.$ = h[y - 1];
            break;
          case 1:
            return (this.$ = h[y - 1]), h[y - 1];
          case 2:
          case 3:
          case 4:
          case 5:
            this.$ = { type: "MathExpression", operator: h[y - 1], left: h[y - 2], right: h[y] };
            break;
          case 6:
            this.$ = h[y - 1];
            break;
          case 7:
            this.$ = { type: "Calc", value: h[y - 1] };
            break;
          case 8:
            this.$ = { type: "Calc", value: h[y - 1], prefix: h[y - 5] };
            break;
          case 9:
          case 10:
          case 11:
            this.$ = h[y];
            break;
          case 12:
            this.$ = { type: "Value", value: parseFloat(h[y]) };
            break;
          case 13:
            this.$ = { type: "Value", value: parseFloat(h[y]) * -1 };
            break;
          case 14:
            this.$ = { type: "CssVariable", value: h[y - 1] };
            break;
          case 15:
            this.$ = { type: "CssVariable", value: h[y - 3], fallback: h[y - 1] };
            break;
          case 16:
            this.$ = { type: "LengthValue", value: parseFloat(h[y]), unit: /[a-z]+/.exec(h[y])[0] };
            break;
          case 17:
            this.$ = { type: "AngleValue", value: parseFloat(h[y]), unit: /[a-z]+/.exec(h[y])[0] };
            break;
          case 18:
            this.$ = { type: "TimeValue", value: parseFloat(h[y]), unit: /[a-z]+/.exec(h[y])[0] };
            break;
          case 19:
            this.$ = { type: "FrequencyValue", value: parseFloat(h[y]), unit: /[a-z]+/.exec(h[y])[0] };
            break;
          case 20:
            this.$ = { type: "ResolutionValue", value: parseFloat(h[y]), unit: /[a-z]+/.exec(h[y])[0] };
            break;
          case 21:
            this.$ = { type: "EmValue", value: parseFloat(h[y]), unit: "em" };
            break;
          case 22:
            this.$ = { type: "ExValue", value: parseFloat(h[y]), unit: "ex" };
            break;
          case 23:
            this.$ = { type: "ChValue", value: parseFloat(h[y]), unit: "ch" };
            break;
          case 24:
            this.$ = { type: "RemValue", value: parseFloat(h[y]), unit: "rem" };
            break;
          case 25:
            this.$ = { type: "VhValue", value: parseFloat(h[y]), unit: "vh" };
            break;
          case 26:
            this.$ = { type: "VwValue", value: parseFloat(h[y]), unit: "vw" };
            break;
          case 27:
            this.$ = { type: "VminValue", value: parseFloat(h[y]), unit: "vmin" };
            break;
          case 28:
            this.$ = { type: "VmaxValue", value: parseFloat(h[y]), unit: "vmax" };
            break;
          case 29:
            this.$ = { type: "PercentageValue", value: parseFloat(h[y]), unit: "%" };
            break;
          case 30:
            var p = h[y];
            (p.value *= -1), (this.$ = p);
            break;
        }
      },
      table: a({
        len: s([
          24,
          1,
          5,
          23,
          1,
          18,
          o,
          [0, 3],
          1,
          o,
          [0, 16],
          o,
          [23, 4],
          u,
          [28, 3],
          0,
          0,
          16,
          1,
          6,
          6,
          o,
          [0, 3],
          5,
          1,
          2,
          u,
          [37, 3],
          u,
          [20, 3],
          5,
          0,
          0,
        ]),
        symbol: s([
          4,
          7,
          9,
          11,
          12,
          o,
          [15, 19, 1],
          1,
          1,
          o,
          [3, 4, 1],
          u,
          [30, 19],
          u,
          [29, 4],
          7,
          4,
          10,
          11,
          u,
          [22, 14],
          u,
          [19, 3],
          u,
          [43, 22],
          u,
          [23, 69],
          u,
          [139, 4],
          8,
          u,
          [51, 24],
          4,
          u,
          [138, 15],
          13,
          u,
          [186, 5],
          8,
          u,
          [6, 6],
          u,
          [5, 5],
          9,
          8,
          14,
          u,
          [159, 47],
          u,
          [60, 10],
        ]),
        type: s([
          o,
          [2, 19],
          o,
          [0, 5],
          1,
          o,
          [2, 24],
          o,
          [0, 4],
          u,
          [22, 19],
          u,
          [43, 42],
          u,
          [23, 70],
          u,
          [28, 25],
          u,
          [45, 25],
          u,
          [113, 54],
        ]),
        state: s([
          1,
          2,
          8,
          6,
          7,
          30,
          u,
          [4, 3],
          33,
          37,
          u,
          [5, 3],
          38,
          u,
          [4, 3],
          39,
          u,
          [4, 3],
          40,
          u,
          [4, 3],
          42,
          u,
          [21, 4],
          50,
          u,
          [5, 3],
          51,
          u,
          [4, 3],
        ]),
        mode: s([o, [1, 179], o, [2, 3], u, [5, 5], u, [6, 4], o, [1, 57]]),
        goto: s([
          5,
          3,
          4,
          24,
          o,
          [9, 15, 1],
          o,
          [25, 5, 1],
          u,
          [24, 19],
          31,
          35,
          32,
          34,
          u,
          [18, 14],
          36,
          u,
          [38, 19],
          u,
          [19, 57],
          u,
          [118, 4],
          41,
          u,
          [24, 19],
          43,
          35,
          u,
          [16, 14],
          44,
          o,
          [2, 3],
          28,
          29,
          2,
          o,
          [3, 3],
          28,
          29,
          3,
          u,
          [53, 4],
          o,
          [45, 5, 1],
          u,
          [100, 42],
          52,
          u,
          [5, 4],
          53,
        ]),
      }),
      defaultActions: i({
        idx: s([6, 7, 8, o, [10, 16, 1], 33, 34, 39, 40, 41, 45, 47, 52, 53]),
        goto: s([9, 10, 11, o, [16, 14, 1], 12, 1, 30, 13, o, [4, 4, 1], 14, 15, 8]),
      }),
      parseError: function (v, y, h) {
        if (y.recoverable) typeof this.trace == "function" && this.trace(v), y.destroy();
        else throw (typeof this.trace == "function" && this.trace(v), h || (h = this.JisonParserError), new h(v, y));
      },
      parse: function (v) {
        var y = this,
          h = new Array(128),
          w = new Array(128),
          p = new Array(128),
          x = this.table,
          m = 0,
          g = 0;
        this.TERROR;
        var b = this.EOF;
        this.options.errorRecoveryTokenDiscardCount | 0;
        var _ = [0, 54],
          S;
        this.__lexer__ ? (S = this.__lexer__) : (S = this.__lexer__ = Object.create(this.lexer));
        var O = {
          parseError: void 0,
          quoteName: void 0,
          lexer: void 0,
          parser: void 0,
          pre_parse: void 0,
          post_parse: void 0,
          pre_lex: void 0,
          post_lex: void 0,
        };
        typeof assert != "function" || assert,
          (this.yyGetSharedState = function () {
            return O;
          });
        function E(te, U) {
          for (var K in U) typeof te[K] > "u" && Object.prototype.hasOwnProperty.call(U, K) && (te[K] = U[K]);
        }
        E(O, this.yy),
          (O.lexer = S),
          (O.parser = this),
          typeof O.parseError == "function"
            ? (this.parseError = function (U, K, J) {
                return J || (J = this.JisonParserError), O.parseError.call(this, U, K, J);
              })
            : (this.parseError = this.originalParseError),
          typeof O.quoteName == "function"
            ? (this.quoteName = function (U) {
                return O.quoteName.call(this, U);
              })
            : (this.quoteName = this.originalQuoteName),
          (this.cleanupAfterParse = function (U, K, J) {
            var L;
            if (K) {
              var ce;
              (O.post_parse || this.post_parse) && (ce = this.constructParseErrorInfo(null, null, null, !1)),
                O.post_parse && ((L = O.post_parse.call(this, O, U, ce)), typeof L < "u" && (U = L)),
                this.post_parse && ((L = this.post_parse.call(this, O, U, ce)), typeof L < "u" && (U = L)),
                ce && ce.destroy && ce.destroy();
            }
            if (this.__reentrant_call_depth > 1) return U;
            if (
              (S.cleanupAfterLex && S.cleanupAfterLex(J),
              O && ((O.lexer = void 0), (O.parser = void 0), S.yy === O && (S.yy = void 0)),
              (O = void 0),
              (this.parseError = this.originalParseError),
              (this.quoteName = this.originalQuoteName),
              (h.length = 0),
              (w.length = 0),
              (p.length = 0),
              (m = 0),
              !J)
            ) {
              for (var re = this.__error_infos.length - 1; re >= 0; re--) {
                var Te = this.__error_infos[re];
                Te && typeof Te.destroy == "function" && Te.destroy();
              }
              this.__error_infos.length = 0;
            }
            return U;
          }),
          (this.constructParseErrorInfo = function (U, K, J, L) {
            var ce = {
              errStr: U,
              exception: K,
              text: S.match,
              value: S.yytext,
              token: this.describeSymbol(g) || g,
              token_id: g,
              line: S.yylineno,
              expected: J,
              recoverable: L,
              state: M,
              action: I,
              new_state: V,
              symbol_stack: h,
              state_stack: w,
              value_stack: p,
              stack_pointer: m,
              yy: O,
              lexer: S,
              parser: this,
              destroy: function () {
                var Te = !!this.recoverable;
                for (var Ne in this) this.hasOwnProperty(Ne) && typeof Ne == "object" && (this[Ne] = void 0);
                this.recoverable = Te;
              },
            };
            return this.__error_infos.push(ce), ce;
          });
        function A() {
          var te = S.lex();
          return typeof te != "number" && (te = y.symbols_[te] || te), te || b;
        }
        function k() {
          var te = S.fastLex();
          return typeof te != "number" && (te = y.symbols_[te] || te), te || b;
        }
        var C = A,
          M,
          I,
          D,
          N,
          W = { $: !0, _$: void 0, yy: O },
          P,
          j,
          z,
          V,
          Q = !1;
        try {
          if ((this.__reentrant_call_depth++, S.setInput(v, O), typeof S.canIUse == "function")) {
            var X = S.canIUse();
            X.fastLex && typeof k == "function" && (C = k);
          }
          for (
            p[m] = null,
              w[m] = 0,
              h[m] = 0,
              ++m,
              this.pre_parse && this.pre_parse.call(this, O),
              O.pre_parse && O.pre_parse.call(this, O),
              V = w[m - 1];
            ;

          ) {
            if (((M = V), this.defaultActions[M])) (I = 2), (V = this.defaultActions[M]);
            else if ((g || (g = C()), (N = (x[M] && x[M][g]) || _), (V = N[1]), (I = N[0]), !I)) {
              var oe,
                $e = this.describeSymbol(g) || g,
                Ae = this.collect_expected_token_set(M);
              typeof S.yylineno == "number"
                ? (oe = "Parse error on line " + (S.yylineno + 1) + ": ")
                : (oe = "Parse error: "),
                typeof S.showPosition == "function" &&
                  (oe +=
                    `
` +
                    S.showPosition(79 - 10, 10) +
                    `
`),
                Ae.length
                  ? (oe += "Expecting " + Ae.join(", ") + ", got unexpected " + $e)
                  : (oe += "Unexpected " + $e),
                (P = this.constructParseErrorInfo(oe, null, Ae, !1)),
                (D = this.parseError(P.errStr, P, this.JisonParserError)),
                typeof D < "u" && (Q = D);
              break;
            }
            switch (I) {
              default:
                if (I instanceof Array) {
                  (P = this.constructParseErrorInfo(
                    "Parse Error: multiple actions possible at state: " + M + ", token: " + g,
                    null,
                    null,
                    !1,
                  )),
                    (D = this.parseError(P.errStr, P, this.JisonParserError)),
                    typeof D < "u" && (Q = D);
                  break;
                }
                (P = this.constructParseErrorInfo(
                  "Parsing halted. No viable error recovery approach available due to internal system failure.",
                  null,
                  null,
                  !1,
                )),
                  (D = this.parseError(P.errStr, P, this.JisonParserError)),
                  typeof D < "u" && (Q = D);
                break;
              case 1:
                (h[m] = g), (p[m] = S.yytext), (w[m] = V), ++m, (g = 0);
                continue;
              case 2:
                if (
                  ((z = this.productions_[V - 1]),
                  (j = z[1]),
                  (D = this.performAction.call(W, V, m - 1, p)),
                  typeof D < "u")
                ) {
                  Q = D;
                  break;
                }
                m -= j;
                var St = z[0];
                (h[m] = St), (p[m] = W.$), (V = x[w[m - 1]][St]), (w[m] = V), ++m;
                continue;
              case 3:
                m !== -2 && ((Q = !0), m--, typeof p[m] < "u" && (Q = p[m]));
                break;
            }
            break;
          }
        } catch (te) {
          if (te instanceof this.JisonParserError) throw te;
          if (S && typeof S.JisonLexerError == "function" && te instanceof S.JisonLexerError) throw te;
          (P = this.constructParseErrorInfo("Parsing aborted due to exception.", te, null, !1)),
            (Q = !1),
            (D = this.parseError(P.errStr, P, this.JisonParserError)),
            typeof D < "u" && (Q = D);
        } finally {
          (Q = this.cleanupAfterParse(Q, !0, !0)), this.__reentrant_call_depth--;
        }
        return Q;
      },
    };
    (l.originalParseError = l.parseError), (l.originalQuoteName = l.quoteName);
    var c = (function () {
      function d(y, h) {
        Object.defineProperty(this, "name", { enumerable: !1, writable: !1, value: "JisonLexerError" }),
          y == null && (y = "???"),
          Object.defineProperty(this, "message", { enumerable: !1, writable: !0, value: y }),
          (this.hash = h);
        var w;
        if (h && h.exception instanceof Error) {
          var p = h.exception;
          (this.message = p.message || y), (w = p.stack);
        }
        w ||
          (Error.hasOwnProperty("captureStackTrace")
            ? Error.captureStackTrace(this, this.constructor)
            : (w = new Error(y).stack)),
          w && Object.defineProperty(this, "stack", { enumerable: !1, writable: !1, value: w });
      }
      typeof Object.setPrototypeOf == "function"
        ? Object.setPrototypeOf(d.prototype, Error.prototype)
        : (d.prototype = Object.create(Error.prototype)),
        (d.prototype.constructor = d),
        (d.prototype.name = "JisonLexerError");
      var v = {
        EOF: 1,
        ERROR: 2,
        __currentRuleSet__: null,
        __error_infos: [],
        __decompressed: !1,
        done: !1,
        _backtrack: !1,
        _input: "",
        _more: !1,
        _signaled_error_token: !1,
        conditionStack: [],
        match: "",
        matched: "",
        matches: !1,
        yytext: "",
        offset: 0,
        yyleng: 0,
        yylineno: 0,
        yylloc: null,
        constructLexErrorInfo: function (h, w, p) {
          if (
            ((h = "" + h),
            p == null &&
              (p = !(
                h.indexOf(`
`) > 0 && h.indexOf("^") > 0
              )),
            this.yylloc && p)
          ) {
            if (typeof this.prettyPrintRange == "function")
              this.prettyPrintRange(this.yylloc),
                /\n\s*$/.test(h) ||
                  (h += `
`),
                (h +=
                  `
  Erroneous area:
` + this.prettyPrintRange(this.yylloc));
            else if (typeof this.showPosition == "function") {
              var x = this.showPosition();
              x &&
                (h.length &&
                h[h.length - 1] !==
                  `
` &&
                x[0] !==
                  `
`
                  ? (h +=
                      `
` + x)
                  : (h += x));
            }
          }
          var m = {
            errStr: h,
            recoverable: !!w,
            text: this.match,
            token: null,
            line: this.yylineno,
            loc: this.yylloc,
            yy: this.yy,
            lexer: this,
            destroy: function () {
              var b = !!this.recoverable;
              for (var _ in this) this.hasOwnProperty(_) && typeof _ == "object" && (this[_] = void 0);
              this.recoverable = b;
            },
          };
          return this.__error_infos.push(m), m;
        },
        parseError: function (h, w, p) {
          if ((p || (p = this.JisonLexerError), this.yy)) {
            if (this.yy.parser && typeof this.yy.parser.parseError == "function")
              return this.yy.parser.parseError.call(this, h, w, p) || this.ERROR;
            if (typeof this.yy.parseError == "function") return this.yy.parseError.call(this, h, w, p) || this.ERROR;
          }
          throw new p(h, w);
        },
        yyerror: function (h) {
          var w = "";
          this.yylloc && (w = " on line " + (this.yylineno + 1));
          var p = this.constructLexErrorInfo("Lexical error" + w + ": " + h, this.options.lexerErrorsAreRecoverable),
            x = Array.prototype.slice.call(arguments, 1);
          return (
            x.length && (p.extra_error_attributes = x), this.parseError(p.errStr, p, this.JisonLexerError) || this.ERROR
          );
        },
        cleanupAfterLex: function (h) {
          if ((this.setInput("", {}), !h)) {
            for (var w = this.__error_infos.length - 1; w >= 0; w--) {
              var p = this.__error_infos[w];
              p && typeof p.destroy == "function" && p.destroy();
            }
            this.__error_infos.length = 0;
          }
          return this;
        },
        clear: function () {
          (this.yytext = ""),
            (this.yyleng = 0),
            (this.match = ""),
            (this.matches = !1),
            (this._more = !1),
            (this._backtrack = !1);
          var h = this.yylloc ? this.yylloc.last_column : 0;
          this.yylloc = {
            first_line: this.yylineno + 1,
            first_column: h,
            last_line: this.yylineno + 1,
            last_column: h,
            range: [this.offset, this.offset],
          };
        },
        setInput: function (h, w) {
          if (((this.yy = w || this.yy || {}), !this.__decompressed)) {
            for (var p = this.rules, x = 0, m = p.length; x < m; x++) {
              var g = p[x];
              typeof g == "number" && (p[x] = p[g]);
            }
            var b = this.conditions;
            for (var _ in b) {
              for (
                var S = b[_], O = S.rules, m = O.length, E = new Array(m + 1), A = new Array(m + 1), x = 0;
                x < m;
                x++
              ) {
                var k = O[x],
                  g = p[k];
                (E[x + 1] = g), (A[x + 1] = k);
              }
              (S.rules = A), (S.__rule_regexes = E), (S.__rule_count = m);
            }
            this.__decompressed = !0;
          }
          return (
            (this._input = h || ""),
            this.clear(),
            (this._signaled_error_token = !1),
            (this.done = !1),
            (this.yylineno = 0),
            (this.matched = ""),
            (this.conditionStack = ["INITIAL"]),
            (this.__currentRuleSet__ = null),
            (this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0, range: [0, 0] }),
            (this.offset = 0),
            this
          );
        },
        editRemainingInput: function (h, w) {
          var p = h.call(this, this._input, w);
          return typeof p != "string" ? p && (this._input = "" + p) : (this._input = p), this;
        },
        input: function () {
          if (!this._input) return null;
          var h = this._input[0];
          (this.yytext += h), this.yyleng++, this.offset++, (this.match += h), (this.matched += h);
          var w = 1,
            p = !1;
          if (
            h ===
            `
`
          )
            p = !0;
          else if (h === "\r") {
            p = !0;
            var x = this._input[1];
            x ===
              `
` &&
              (w++,
              (h += x),
              (this.yytext += x),
              this.yyleng++,
              this.offset++,
              (this.match += x),
              (this.matched += x),
              this.yylloc.range[1]++);
          }
          return (
            p ? (this.yylineno++, this.yylloc.last_line++, (this.yylloc.last_column = 0)) : this.yylloc.last_column++,
            this.yylloc.range[1]++,
            (this._input = this._input.slice(w)),
            h
          );
        },
        unput: function (h) {
          var w = h.length,
            p = h.split(/(?:\r\n?|\n)/g);
          if (
            ((this._input = h + this._input),
            (this.yytext = this.yytext.substr(0, this.yytext.length - w)),
            (this.yyleng = this.yytext.length),
            (this.offset -= w),
            (this.match = this.match.substr(0, this.match.length - w)),
            (this.matched = this.matched.substr(0, this.matched.length - w)),
            p.length > 1)
          ) {
            (this.yylineno -= p.length - 1), (this.yylloc.last_line = this.yylineno + 1);
            var x = this.match,
              m = x.split(/(?:\r\n?|\n)/g);
            m.length === 1 && ((x = this.matched), (m = x.split(/(?:\r\n?|\n)/g))),
              (this.yylloc.last_column = m[m.length - 1].length);
          } else this.yylloc.last_column -= w;
          return (this.yylloc.range[1] = this.yylloc.range[0] + this.yyleng), (this.done = !1), this;
        },
        more: function () {
          return (this._more = !0), this;
        },
        reject: function () {
          if (this.options.backtrack_lexer) this._backtrack = !0;
          else {
            var h = "";
            this.yylloc && (h = " on line " + (this.yylineno + 1));
            var w = this.constructLexErrorInfo(
              "Lexical error" +
                h +
                ": You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).",
              !1,
            );
            this._signaled_error_token = this.parseError(w.errStr, w, this.JisonLexerError) || this.ERROR;
          }
          return this;
        },
        less: function (h) {
          return this.unput(this.match.slice(h));
        },
        pastInput: function (h, w) {
          var p = this.matched.substring(0, this.matched.length - this.match.length);
          h < 0 ? (h = p.length) : h || (h = 20), w < 0 ? (w = p.length) : w || (w = 1), (p = p.substr(-h * 2 - 2));
          var x = p.replace(
            /\r\n|\r/g,
            `
`,
          ).split(`
`);
          return (
            (x = x.slice(-w)),
            (p = x.join(`
`)),
            p.length > h && (p = "..." + p.substr(-h)),
            p
          );
        },
        upcomingInput: function (h, w) {
          var p = this.match;
          h < 0 ? (h = p.length + this._input.length) : h || (h = 20),
            w < 0 ? (w = h) : w || (w = 1),
            p.length < h * 2 + 2 && (p += this._input.substring(0, h * 2 + 2));
          var x = p.replace(
            /\r\n|\r/g,
            `
`,
          ).split(`
`);
          return (
            (x = x.slice(0, w)),
            (p = x.join(`
`)),
            p.length > h && (p = p.substring(0, h) + "..."),
            p
          );
        },
        showPosition: function (h, w) {
          var p = this.pastInput(h).replace(/\s/g, " "),
            x = new Array(p.length + 1).join("-");
          return (
            p +
            this.upcomingInput(w).replace(/\s/g, " ") +
            `
` +
            x +
            "^"
          );
        },
        deriveLocationInfo: function (h, w, p, x) {
          var m = { first_line: 1, first_column: 0, last_line: 1, last_column: 0, range: [0, 0] };
          return (
            h &&
              ((m.first_line = h.first_line | 0),
              (m.last_line = h.last_line | 0),
              (m.first_column = h.first_column | 0),
              (m.last_column = h.last_column | 0),
              h.range && ((m.range[0] = h.range[0] | 0), (m.range[1] = h.range[1] | 0))),
            (m.first_line <= 0 || m.last_line < m.first_line) &&
              (m.first_line <= 0 &&
                w &&
                ((m.first_line = w.last_line | 0),
                (m.first_column = w.last_column | 0),
                w.range && (m.range[0] = h.range[1] | 0)),
              (m.last_line <= 0 || m.last_line < m.first_line) &&
                p &&
                ((m.last_line = p.first_line | 0),
                (m.last_column = p.first_column | 0),
                p.range && (m.range[1] = h.range[0] | 0)),
              m.first_line <= 0 &&
                x &&
                (m.last_line <= 0 || x.last_line <= m.last_line) &&
                ((m.first_line = x.first_line | 0),
                (m.first_column = x.first_column | 0),
                x.range && (m.range[0] = x.range[0] | 0)),
              m.last_line <= 0 &&
                x &&
                (m.first_line <= 0 || x.first_line >= m.first_line) &&
                ((m.last_line = x.last_line | 0),
                (m.last_column = x.last_column | 0),
                x.range && (m.range[1] = x.range[1] | 0))),
            m.last_line <= 0 &&
              (m.first_line <= 0
                ? ((m.first_line = this.yylloc.first_line),
                  (m.last_line = this.yylloc.last_line),
                  (m.first_column = this.yylloc.first_column),
                  (m.last_column = this.yylloc.last_column),
                  (m.range[0] = this.yylloc.range[0]),
                  (m.range[1] = this.yylloc.range[1]))
                : ((m.last_line = this.yylloc.last_line),
                  (m.last_column = this.yylloc.last_column),
                  (m.range[1] = this.yylloc.range[1]))),
            m.first_line <= 0 && ((m.first_line = m.last_line), (m.first_column = 0), (m.range[1] = m.range[0])),
            m.first_column < 0 && (m.first_column = 0),
            m.last_column < 0 && (m.last_column = m.first_column > 0 ? m.first_column : 80),
            m
          );
        },
        prettyPrintRange: function (h, w, p) {
          h = this.deriveLocationInfo(h, w, p);
          const x = 3,
            m = 1,
            g = 2;
          var b = this.matched + this._input,
            _ = b.split(`
`),
            S = Math.max(1, w ? w.first_line : h.first_line - x),
            O = Math.max(1, p ? p.last_line : h.last_line + m),
            E = (1 + Math.log10(O | 1)) | 0,
            A = new Array(E).join(" "),
            k = [],
            C = _.slice(S - 1, O + 1).map(function (W, P) {
              var j = P + S,
                z = (A + j).substr(-E),
                V = z + ": " + W,
                Q = new Array(E + 1).join("^"),
                X = 2 + 1,
                oe = 0;
              if (
                (j === h.first_line
                  ? ((X += h.first_column),
                    (oe = Math.max(2, (j === h.last_line ? h.last_column : W.length) - h.first_column + 1)))
                  : j === h.last_line
                  ? (oe = Math.max(2, h.last_column + 1))
                  : j > h.first_line && j < h.last_line && (oe = Math.max(2, W.length + 1)),
                oe)
              ) {
                var $e = new Array(X).join("."),
                  Ae = new Array(oe).join("^");
                (V +=
                  `
` +
                  Q +
                  $e +
                  Ae),
                  W.trim().length > 0 && k.push(P);
              }
              return (V = V.replace(/\t/g, " ")), V;
            });
          if (k.length > 2 * g) {
            var M = k[g - 1] + 1,
              I = k[k.length - g] - 1,
              D = new Array(E + 1).join(" ") + "  (...continued...)";
            (D +=
              `
` +
              new Array(E + 1).join("-") +
              "  (---------------)"),
              C.splice(M, I - M + 1, D);
          }
          return C.join(`
`);
        },
        describeYYLLOC: function (h, w) {
          var p = h.first_line,
            x = h.last_line,
            m = h.first_column,
            g = h.last_column,
            b = x - p,
            _ = g - m,
            S;
          if (
            (b === 0
              ? ((S = "line " + p + ", "), _ <= 1 ? (S += "column " + m) : (S += "columns " + m + " .. " + g))
              : (S = "lines " + p + "(column " + m + ") .. " + x + "(column " + g + ")"),
            h.range && w)
          ) {
            var O = h.range[0],
              E = h.range[1] - 1;
            E <= O ? (S += " {String Offset: " + O + "}") : (S += " {String Offset range: " + O + " .. " + E + "}");
          }
          return S;
        },
        test_match: function (h, w) {
          var p, x, m, g, b;
          if (
            (this.options.backtrack_lexer &&
              (m = {
                yylineno: this.yylineno,
                yylloc: {
                  first_line: this.yylloc.first_line,
                  last_line: this.yylloc.last_line,
                  first_column: this.yylloc.first_column,
                  last_column: this.yylloc.last_column,
                  range: this.yylloc.range.slice(0),
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done,
              }),
            (g = h[0]),
            (b = g.length),
            (x = g.split(/(?:\r\n?|\n)/g)),
            x.length > 1
              ? ((this.yylineno += x.length - 1),
                (this.yylloc.last_line = this.yylineno + 1),
                (this.yylloc.last_column = x[x.length - 1].length))
              : (this.yylloc.last_column += b),
            (this.yytext += g),
            (this.match += g),
            (this.matched += g),
            (this.matches = h),
            (this.yyleng = this.yytext.length),
            (this.yylloc.range[1] += b),
            (this.offset += b),
            (this._more = !1),
            (this._backtrack = !1),
            (this._input = this._input.slice(b)),
            (p = this.performAction.call(this, this.yy, w, this.conditionStack[this.conditionStack.length - 1])),
            this.done && this._input && (this.done = !1),
            p)
          )
            return p;
          if (this._backtrack) {
            for (var _ in m) this[_] = m[_];
            return (this.__currentRuleSet__ = null), !1;
          } else if (this._signaled_error_token)
            return (p = this._signaled_error_token), (this._signaled_error_token = !1), p;
          return !1;
        },
        next: function () {
          if (this.done) return this.clear(), this.EOF;
          this._input || (this.done = !0);
          var h, w, p, x;
          this._more || this.clear();
          var m = this.__currentRuleSet__;
          if (!m && ((m = this.__currentRuleSet__ = this._currentRules()), !m || !m.rules)) {
            var g = "";
            this.options.trackPosition && (g = " on line " + (this.yylineno + 1));
            var b = this.constructLexErrorInfo(
              "Internal lexer engine error" +
                g +
                ': The lex grammar programmer pushed a non-existing condition name "' +
                this.topState() +
                '"; this is a fatal error and should be reported to the application programmer team!',
              !1,
            );
            return this.parseError(b.errStr, b, this.JisonLexerError) || this.ERROR;
          }
          for (var _ = m.rules, S = m.__rule_regexes, O = m.__rule_count, E = 1; E <= O; E++)
            if (((p = this._input.match(S[E])), p && (!w || p[0].length > w[0].length))) {
              if (((w = p), (x = E), this.options.backtrack_lexer)) {
                if (((h = this.test_match(p, _[E])), h !== !1)) return h;
                if (this._backtrack) {
                  w = void 0;
                  continue;
                } else return !1;
              } else if (!this.options.flex) break;
            }
          if (w) return (h = this.test_match(w, _[x])), h !== !1 ? h : !1;
          if (this._input) {
            var g = "";
            this.options.trackPosition && (g = " on line " + (this.yylineno + 1));
            var b = this.constructLexErrorInfo(
                "Lexical error" + g + ": Unrecognized text.",
                this.options.lexerErrorsAreRecoverable,
              ),
              A = this._input,
              k = this.topState(),
              C = this.conditionStack.length;
            return (
              (h = this.parseError(b.errStr, b, this.JisonLexerError) || this.ERROR),
              h === this.ERROR &&
                !this.matches &&
                A === this._input &&
                k === this.topState() &&
                C === this.conditionStack.length &&
                this.input(),
              h
            );
          } else return (this.done = !0), this.clear(), this.EOF;
        },
        lex: function () {
          var h;
          for (
            typeof this.pre_lex == "function" && (h = this.pre_lex.call(this, 0)),
              typeof this.options.pre_lex == "function" && (h = this.options.pre_lex.call(this, h) || h),
              this.yy && typeof this.yy.pre_lex == "function" && (h = this.yy.pre_lex.call(this, h) || h);
            !h;

          )
            h = this.next();
          return (
            this.yy && typeof this.yy.post_lex == "function" && (h = this.yy.post_lex.call(this, h) || h),
            typeof this.options.post_lex == "function" && (h = this.options.post_lex.call(this, h) || h),
            typeof this.post_lex == "function" && (h = this.post_lex.call(this, h) || h),
            h
          );
        },
        fastLex: function () {
          for (var h; !h; ) h = this.next();
          return h;
        },
        canIUse: function () {
          var h = {
            fastLex:
              !(
                typeof this.pre_lex == "function" ||
                typeof this.options.pre_lex == "function" ||
                (this.yy && typeof this.yy.pre_lex == "function") ||
                (this.yy && typeof this.yy.post_lex == "function") ||
                typeof this.options.post_lex == "function" ||
                typeof this.post_lex == "function"
              ) && typeof this.fastLex == "function",
          };
          return h;
        },
        begin: function (h) {
          return this.pushState(h);
        },
        pushState: function (h) {
          return this.conditionStack.push(h), (this.__currentRuleSet__ = null), this;
        },
        popState: function () {
          var h = this.conditionStack.length - 1;
          return h > 0 ? ((this.__currentRuleSet__ = null), this.conditionStack.pop()) : this.conditionStack[0];
        },
        topState: function (h) {
          return (h = this.conditionStack.length - 1 - Math.abs(h || 0)), h >= 0 ? this.conditionStack[h] : "INITIAL";
        },
        _currentRules: function () {
          return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]
            ? this.conditions[this.conditionStack[this.conditionStack.length - 1]]
            : this.conditions.INITIAL;
        },
        stateStackSize: function () {
          return this.conditionStack.length;
        },
        options: { trackPosition: !0 },
        JisonLexerError: d,
        performAction: function (h, w, p) {
          switch (w) {
            case 1:
              break;
            default:
              return this.simpleCaseActionClusters[w];
          }
        },
        simpleCaseActionClusters: {
          0: 13,
          2: 5,
          3: 6,
          4: 3,
          5: 4,
          6: 15,
          7: 15,
          8: 15,
          9: 15,
          10: 15,
          11: 15,
          12: 16,
          13: 16,
          14: 16,
          15: 16,
          16: 17,
          17: 17,
          18: 18,
          19: 18,
          20: 19,
          21: 19,
          22: 19,
          23: 20,
          24: 21,
          25: 22,
          26: 23,
          27: 25,
          28: 24,
          29: 26,
          30: 27,
          31: 28,
          32: 11,
          33: 9,
          34: 12,
          35: 10,
          36: 7,
          37: 8,
          38: 14,
          39: 1,
        },
        rules: [
          /^(?:(--[\d\-A-Za-z]*))/,
          /^(?:\s+)/,
          /^(?:\*)/,
          /^(?:\/)/,
          /^(?:\+)/,
          /^(?:-)/,
          /^(?:(\d+(\.\d*)?|\.\d+)px\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)cm\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)mm\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)in\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)pt\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)pc\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)deg\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)grad\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)rad\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)turn\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)s\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)ms\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)Hz\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)kHz\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)dpi\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)dpcm\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)dppx\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)em\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)ex\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)ch\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)rem\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)vw\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)vh\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)vmin\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)vmax\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)%)/,
          /^(?:(\d+(\.\d*)?|\.\d+)\b)/,
          /^(?:(calc))/,
          /^(?:(var))/,
          /^(?:([a-z]+))/,
          /^(?:\()/,
          /^(?:\))/,
          /^(?:,)/,
          /^(?:$)/,
        ],
        conditions: {
          INITIAL: {
            rules: [
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
              29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
            ],
            inclusive: !0,
          },
        },
      };
      return v;
    })();
    l.lexer = c;
    function f() {
      this.yy = {};
    }
    return (f.prototype = l), (l.Parser = f), new f();
  })();
  typeof jB < "u" &&
    ((e.parser = t),
    (e.Parser = t.Parser),
    (e.parse = function () {
      return t.parse.apply(t, arguments);
    }));
})(NS);
var nu = {},
  Ih = { exports: {} },
  Nf = {
    px: { px: 1, cm: 96 / 2.54, mm: 96 / 25.4, in: 96, pt: 96 / 72, pc: 16 },
    cm: { px: 2.54 / 96, cm: 1, mm: 0.1, in: 2.54, pt: 2.54 / 72, pc: 2.54 / 6 },
    mm: { px: 25.4 / 96, cm: 10, mm: 1, in: 25.4, pt: 25.4 / 72, pc: 25.4 / 6 },
    in: { px: 1 / 96, cm: 1 / 2.54, mm: 1 / 25.4, in: 1, pt: 1 / 72, pc: 1 / 6 },
    pt: { px: 0.75, cm: 72 / 2.54, mm: 72 / 25.4, in: 72, pt: 1, pc: 12 },
    pc: { px: 6 / 96, cm: 6 / 2.54, mm: 6 / 25.4, in: 6, pt: 6 / 72, pc: 1 },
    deg: { deg: 1, grad: 0.9, rad: 180 / Math.PI, turn: 360 },
    grad: { deg: 400 / 360, grad: 1, rad: 200 / Math.PI, turn: 400 },
    rad: { deg: Math.PI / 180, grad: Math.PI / 200, rad: 1, turn: Math.PI * 2 },
    turn: { deg: 1 / 360, grad: 1 / 400, rad: 0.5 / Math.PI, turn: 1 },
    s: { s: 1, ms: 1 / 1e3 },
    ms: { s: 1e3, ms: 1 },
    Hz: { Hz: 1, kHz: 1e3 },
    kHz: { Hz: 1 / 1e3, kHz: 1 },
    dpi: { dpi: 1, dpcm: 1 / 2.54, dppx: 1 / 96 },
    dpcm: { dpi: 2.54, dpcm: 1, dppx: 2.54 / 96 },
    dppx: { dpi: 96, dpcm: 96 / 2.54, dppx: 1 },
  },
  DB = function (e, t, r, n) {
    if (!Nf.hasOwnProperty(r)) throw new Error("Cannot convert to " + r);
    if (!Nf[r].hasOwnProperty(t)) throw new Error("Cannot convert from " + t + " to " + r);
    var i = Nf[r][t] * e;
    return n !== !1 ? ((n = Math.pow(10, parseInt(n) || 5)), Math.round(i * n) / n) : i;
  };
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var r = DB,
    n = i(r);
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function a(u, s, l) {
    switch (u.type) {
      case "LengthValue":
      case "AngleValue":
      case "TimeValue":
      case "FrequencyValue":
      case "ResolutionValue":
        return o(u, s, l);
      default:
        return { left: u, right: s };
    }
  }
  function o(u, s, l) {
    return (
      s.type === u.type && (s = { type: u.type, value: (0, n.default)(s.value, s.unit, u.unit, l), unit: u.unit }),
      { left: u, right: s }
    );
  }
  (t.default = a), (e.exports = t.default);
})(Ih, Ih.exports);
var LB = Ih.exports;
Object.defineProperty(nu, "__esModule", { value: !0 });
nu.flip = Nh;
var FB = LB,
  Rf = BB(FB);
function BB(e) {
  return e && e.__esModule ? e : { default: e };
}
function at(e, t) {
  return e.type === "MathExpression" ? qB(e, t) : e.type === "Calc" ? at(e.value, t) : e;
}
function T0(e, t) {
  return e.type === t.type && e.value === t.value;
}
function gt(e) {
  switch (e) {
    case "LengthValue":
    case "AngleValue":
    case "TimeValue":
    case "FrequencyValue":
    case "ResolutionValue":
    case "EmValue":
    case "ExValue":
    case "ChValue":
    case "RemValue":
    case "VhValue":
    case "VwValue":
    case "VminValue":
    case "VmaxValue":
    case "PercentageValue":
    case "Value":
      return !0;
  }
  return !1;
}
function UB(e, t) {
  var r = (0, Rf.default)(e.left, e.right, t),
    n = at(r.left, t),
    i = at(r.right, t);
  return (
    n.type === "MathExpression" &&
      i.type === "MathExpression" &&
      ((n.operator === "/" && i.operator === "*") ||
        (n.operator === "-" && i.operator === "+") ||
        (n.operator === "*" && i.operator === "/") ||
        (n.operator === "+" && i.operator === "-")) &&
      (T0(n.right, i.right)
        ? (r = (0, Rf.default)(n.left, i.left, t))
        : T0(n.right, i.left) && (r = (0, Rf.default)(n.left, i.right, t)),
      (n = at(r.left, t)),
      (i = at(r.right, t))),
    (e.left = n),
    (e.right = i),
    e
  );
}
function Nh(e) {
  return e === "+" ? "-" : "+";
}
function Rh(e) {
  return (
    gt(e.type) ? (e.value = -e.value) : e.type == "MathExpression" && ((e.left = Rh(e.left)), (e.right = Rh(e.right))),
    e
  );
}
function zB(e, t) {
  var r = e,
    n = r.left,
    i = r.right,
    a = r.operator;
  if (n.type === "CssVariable" || i.type === "CssVariable") return e;
  if (i.value === 0) return n;
  if (n.value === 0 && a === "+") return i;
  if (n.value === 0 && a === "-") return Rh(i);
  if (
    (n.type === i.type &&
      gt(n.type) &&
      ((e = Object.assign({}, n)), a === "+" ? (e.value = n.value + i.value) : (e.value = n.value - i.value)),
    gt(n.type) && (i.operator === "+" || i.operator === "-") && i.type === "MathExpression")
  ) {
    if (n.type === i.left.type)
      return (
        (e = Object.assign({}, e)),
        (e.left = at({ type: "MathExpression", operator: a, left: n, right: i.left }, t)),
        (e.right = i.right),
        (e.operator = a === "-" ? Nh(i.operator) : i.operator),
        at(e, t)
      );
    if (n.type === i.right.type)
      return (
        (e = Object.assign({}, e)),
        (e.left = at(
          { type: "MathExpression", operator: a === "-" ? Nh(i.operator) : i.operator, left: n, right: i.right },
          t,
        )),
        (e.right = i.left),
        at(e, t)
      );
  }
  if (n.type === "MathExpression" && (n.operator === "+" || n.operator === "-") && gt(i.type)) {
    if (i.type === n.left.type)
      return (
        (e = Object.assign({}, n)),
        (e.left = at({ type: "MathExpression", operator: a, left: n.left, right: i }, t)),
        at(e, t)
      );
    if (i.type === n.right.type)
      return (
        (e = Object.assign({}, n)),
        n.operator === "-"
          ? ((e.right = at({ type: "MathExpression", operator: a === "-" ? "+" : "-", left: i, right: n.right }, t)),
            (e.operator = a === "-" ? "-" : "+"))
          : (e.right = at({ type: "MathExpression", operator: a, left: n.right, right: i }, t)),
        e.right.value < 0 && ((e.right.value *= -1), (e.operator = e.operator === "-" ? "+" : "-")),
        at(e, t)
      );
  }
  return e;
}
function WB(e, t) {
  if (!gt(e.right.type)) return e;
  if (e.right.type !== "Value") throw new Error('Cannot divide by "' + e.right.unit + '", number expected');
  if (e.right.value === 0) throw new Error("Cannot divide by zero");
  return e.left.type === "MathExpression"
    ? gt(e.left.left.type) && gt(e.left.right.type)
      ? ((e.left.left.value /= e.right.value), (e.left.right.value /= e.right.value), at(e.left, t))
      : e
    : gt(e.left.type)
    ? ((e.left.value /= e.right.value), e.left)
    : e;
}
function HB(e) {
  if (e.left.type === "MathExpression" && e.right.type === "Value") {
    if (gt(e.left.left.type) && gt(e.left.right.type))
      return (e.left.left.value *= e.right.value), (e.left.right.value *= e.right.value), e.left;
  } else {
    if (gt(e.left.type) && e.right.type === "Value") return (e.left.value *= e.right.value), e.left;
    if (e.left.type === "Value" && e.right.type === "MathExpression") {
      if (gt(e.right.left.type) && gt(e.right.right.type))
        return (e.right.left.value *= e.left.value), (e.right.right.value *= e.left.value), e.right;
    } else if (e.left.type === "Value" && gt(e.right.type)) return (e.right.value *= e.left.value), e.right;
  }
  return e;
}
function qB(e, t) {
  switch (((e = UB(e, t)), e.operator)) {
    case "+":
    case "-":
      return zB(e, t);
    case "/":
      return WB(e, t);
    case "*":
      return HB(e);
  }
  return e;
}
nu.default = at;
var jh = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.default = function (o, u, s) {
      var l = a(u, s);
      return u.type === "MathExpression" && (l = o + "(" + l + ")"), l;
    });
  var r = nu,
    n = { "*": 0, "/": 0, "+": 1, "-": 1 };
  function i(o, u) {
    if (u !== !1) {
      var s = Math.pow(10, u);
      return Math.round(o * s) / s;
    }
    return o;
  }
  function a(o, u) {
    switch (o.type) {
      case "MathExpression": {
        var s = o.left,
          l = o.right,
          c = o.operator,
          f = "";
        return (
          s.type === "MathExpression" && n[c] < n[s.operator] ? (f += "(" + a(s, u) + ")") : (f += a(s, u)),
          (f += " " + o.operator + " "),
          l.type === "MathExpression" && n[c] < n[l.operator]
            ? (f += "(" + a(l, u) + ")")
            : (l.type === "MathExpression" &&
                c === "-" &&
                ["+", "-"].includes(l.operator) &&
                (l.operator = (0, r.flip)(l.operator)),
              (f += a(l, u))),
          f
        );
      }
      case "Value":
        return i(o.value, u);
      case "CssVariable":
        return o.fallback ? "var(" + o.value + ", " + a(o.fallback, u) + ")" : "var(" + o.value + ")";
      case "Calc":
        return o.prefix ? "-" + o.prefix + "-calc(" + a(o.value, u) + ")" : "calc(" + a(o.value, u) + ")";
      default:
        return i(o.value, u) + o.unit;
    }
  }
  e.exports = t.default;
})(jh, jh.exports);
var GB = jh.exports;
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var r = RB,
    n = l(r),
    i = NS,
    a = nu,
    o = l(a),
    u = GB,
    s = l(u);
  function l(f) {
    return f && f.__esModule ? f : { default: f };
  }
  var c = /((?:\-[a-z]+\-)?calc)/;
  (t.default = function (f) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5;
    return (0, n.default)(f)
      .walk(function (v) {
        if (!(v.type !== "function" || !c.test(v.value))) {
          var y = n.default.stringify(v.nodes);
          if (!(y.indexOf("constant") >= 0 || y.indexOf("env") >= 0)) {
            var h = i.parser.parse(y),
              w = (0, o.default)(h, d);
            (v.type = "word"), (v.value = (0, s.default)(v.value, w, d));
          }
        }
      }, !0)
      .toString();
  }),
    (e.exports = t.default);
})($h, $h.exports);
var VB = $h.exports;
const jf = he(VB);
function C0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function P0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? C0(Object(r), !0).forEach(function (n) {
          QB(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : C0(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function QB(e, t, r) {
  return (
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
  );
}
function M0(e) {
  return JB(e) || XB(e) || KB(e) || YB();
}
function YB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function KB(e, t) {
  if (e) {
    if (typeof e == "string") return Dh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Dh(e, t);
  }
}
function XB(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function JB(e) {
  if (Array.isArray(e)) return Dh(e);
}
function Dh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var wi = { widthCache: {}, cacheCount: 0 },
  ZB = 2e3,
  eU = { position: "absolute", top: "-20000px", left: 0, padding: 0, margin: 0, border: "none", whiteSpace: "pre" },
  tU = [
    "minWidth",
    "maxWidth",
    "width",
    "minHeight",
    "maxHeight",
    "height",
    "top",
    "left",
    "fontSize",
    "lineHeight",
    "padding",
    "margin",
    "paddingLeft",
    "paddingRight",
    "paddingTop",
    "paddingBottom",
    "marginLeft",
    "marginRight",
    "marginTop",
    "marginBottom",
  ],
  $0 = "recharts_measurement_span";
function rU(e, t) {
  return tU.indexOf(e) >= 0 && t === +t ? "".concat(t, "px") : t;
}
function nU(e) {
  var t = e.split(""),
    r = t.reduce(function (n, i) {
      return i === i.toUpperCase() ? [].concat(M0(n), ["-", i.toLowerCase()]) : [].concat(M0(n), [i]);
    }, []);
  return r.join("");
}
var iU = function (t) {
    return Object.keys(t).reduce(function (r, n) {
      return "".concat(r).concat(nU(n), ":").concat(rU(n, t[n]), ";");
    }, "");
  },
  jn = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t == null || fn.isSsr) return { width: 0, height: 0 };
    var n = "".concat(t),
      i = iU(r),
      a = "".concat(n, "-").concat(i);
    if (wi.widthCache[a]) return wi.widthCache[a];
    try {
      var o = document.getElementById($0);
      o ||
        ((o = document.createElement("span")),
        o.setAttribute("id", $0),
        o.setAttribute("aria-hidden", "true"),
        document.body.appendChild(o));
      var u = P0(P0({}, eU), r);
      Object.keys(u).map(function (c) {
        return (o.style[c] = u[c]), c;
      }),
        (o.textContent = n);
      var s = o.getBoundingClientRect(),
        l = { width: s.width, height: s.height };
      return (wi.widthCache[a] = l), ++wi.cacheCount > ZB && ((wi.cacheCount = 0), (wi.widthCache = {})), l;
    } catch {
      return { width: 0, height: 0 };
    }
  },
  aU = function (t) {
    var r = t.ownerDocument.documentElement,
      n = { top: 0, left: 0 };
    return (
      typeof t.getBoundingClientRect < "u" && (n = t.getBoundingClientRect()),
      { top: n.top + window.pageYOffset - r.clientTop, left: n.left + window.pageXOffset - r.clientLeft }
    );
  },
  oU = function (t, r) {
    return { chartX: Math.round(t.pageX - r.left), chartY: Math.round(t.pageY - r.top) };
  };
function us(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (us = function (r) {
          return typeof r;
        })
      : (us = function (r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    us(e)
  );
}
function Lh() {
  return (
    (Lh =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Lh.apply(this, arguments)
  );
}
function uU(e, t) {
  if (e == null) return {};
  var r = sU(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function sU(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function lU(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function I0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function cU(e, t, r) {
  return t && I0(e.prototype, t), r && I0(e, r), e;
}
function fU(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    t && Fh(e, t);
}
function Fh(e, t) {
  return (
    (Fh =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    Fh(e, t)
  );
}
function dU(e) {
  var t = vU();
  return function () {
    var n = dl(e),
      i;
    if (t) {
      var a = dl(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return hU(this, i);
  };
}
function hU(e, t) {
  return t && (us(t) === "object" || typeof t == "function") ? t : pU(e);
}
function pU(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vU() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function dl(e) {
  return (
    (dl = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    dl(e)
  );
}
function N0(e, t) {
  return xU(e) || gU(e, t) || mU(e, t) || yU();
}
function yU() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mU(e, t) {
  if (e) {
    if (typeof e == "string") return R0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return R0(e, t);
  }
}
function R0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function gU(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), u;
        !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t));
        n = !0
      );
    } catch (s) {
      (i = !0), (a = s);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function xU(e) {
  if (Array.isArray(e)) return e;
}
function j0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function D0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? j0(Object(r), !0).forEach(function (n) {
          wU(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : j0(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function wU(e, t, r) {
  return (
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
  );
}
var RS = /[ \f\n\r\t\v\u2028\u2029]+/,
  jS = function (t) {
    try {
      var r = [];
      Y(t.children) || (t.breakAll ? (r = t.children.toString().split("")) : (r = t.children.toString().split(RS)));
      var n = r.map(function (a) {
          return { word: a, width: jn(a, t.style).width };
        }),
        i = t.breakAll ? 0 : jn(" ", t.style).width;
      return { wordsWithComputedWidth: n, spaceWidth: i };
    } catch {
      return null;
    }
  },
  bU = function (t, r, n, i, a) {
    var o = H(t.maxLines),
      u = t.children,
      s = function () {
        var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return k.reduce(function (C, M) {
          var I = M.word,
            D = M.width,
            N = C[C.length - 1];
          if (N && (i == null || a || N.width + D + n < i)) N.words.push(I), (N.width += D + n);
          else {
            var W = { words: [I], width: D };
            C.push(W);
          }
          return C;
        }, []);
      },
      l = s(r),
      c = function (k) {
        return k.reduce(function (C, M) {
          return C.width > M.width ? C : M;
        });
      };
    if (!o) return l;
    for (
      var f = "…",
        d = function (k) {
          var C = u.slice(0, k),
            M = jS(D0(D0({}, t), {}, { children: C + f })).wordsWithComputedWidth,
            I = s(M),
            D = I.length > t.maxLines || c(I).width > i;
          return [D, I];
        },
        v = 0,
        y = u.length - 1,
        h = 0,
        w;
      v <= y && h <= u.length - 1;

    ) {
      var p = Math.floor((v + y) / 2),
        x = p - 1,
        m = d(x),
        g = N0(m, 2),
        b = g[0],
        _ = g[1],
        S = d(p),
        O = N0(S, 1),
        E = O[0];
      if ((!b && !E && (v = p + 1), b && E && (y = p - 1), !b && E)) {
        w = _;
        break;
      }
      h++;
    }
    return w || l;
  },
  L0 = function (t) {
    var r = Y(t) ? [] : t.toString().split(RS);
    return [{ words: r }];
  },
  _U = function (t, r) {
    if ((t.width || t.scaleToFit) && !fn.isSsr) {
      var n, i;
      if (r) {
        var a = jS(t);
        if (a) {
          var o = a.wordsWithComputedWidth,
            u = a.spaceWidth;
          (n = o), (i = u);
        } else return L0(t.children);
        return bU(t, n, i, t.width, t.scaleToFit);
      }
    }
    return L0(t.children);
  },
  Do = (function (e) {
    fU(r, e);
    var t = dU(r);
    function r() {
      var n;
      lU(this, r);
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
      return (n = t.call.apply(t, [this].concat(a))), (n.state = {}), n;
    }
    return (
      cU(
        r,
        [
          {
            key: "render",
            value: function () {
              var i = this.props,
                a = i.dx,
                o = i.dy,
                u = i.textAnchor,
                s = i.verticalAnchor,
                l = i.scaleToFit,
                c = i.angle,
                f = i.lineHeight,
                d = i.capHeight,
                v = i.className,
                y = i.breakAll,
                h = uU(i, [
                  "dx",
                  "dy",
                  "textAnchor",
                  "verticalAnchor",
                  "scaleToFit",
                  "angle",
                  "lineHeight",
                  "capHeight",
                  "className",
                  "breakAll",
                ]),
                w = this.state.wordsByLines;
              if (!ze(h.x) || !ze(h.y)) return null;
              var p = h.x + (H(a) ? a : 0),
                x = h.y + (H(o) ? o : 0),
                m;
              switch (s) {
                case "start":
                  m = jf("calc(".concat(d, ")"));
                  break;
                case "middle":
                  m = jf(
                    "calc("
                      .concat((w.length - 1) / 2, " * -")
                      .concat(f, " + (")
                      .concat(d, " / 2))"),
                  );
                  break;
                default:
                  m = jf("calc(".concat(w.length - 1, " * -").concat(f, ")"));
                  break;
              }
              var g = [];
              if (l) {
                var b = w[0].width,
                  _ = this.props.width;
                g.push("scale(".concat((H(_) ? _ / b : 1) / b, ")"));
              }
              return (
                c && g.push("rotate(".concat(c, ", ").concat(p, ", ").concat(x, ")")),
                g.length && (h.transform = g.join(" ")),
                $.createElement(
                  "text",
                  Lh({}, le(h, !0), { x: p, y: x, className: Oe("recharts-text", v), textAnchor: u }),
                  w.map(function (S, O) {
                    return $.createElement("tspan", { x: p, dy: O === 0 ? m : f, key: O }, S.words.join(y ? "" : " "));
                  }),
                )
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (i, a) {
              if (
                i.width !== a.prevWidth ||
                i.scaleToFit !== a.prevScaleToFit ||
                i.children !== a.prevChildren ||
                i.style !== a.prevStyle ||
                i.breakAll !== a.prevBreakAll
              ) {
                var o = i.children !== a.prevChildren || i.style !== a.prevStyle || i.breakAll !== a.prevBreakAll;
                return {
                  prevWidth: i.width,
                  prevScaleToFit: i.scaleToFit,
                  prevChildren: i.children,
                  prevStyle: i.style,
                  wordsByLines: _U(i, o),
                };
              }
              return null;
            },
          },
        ],
      ),
      r
    );
  })(B.Component);
Do.defaultProps = {
  x: 0,
  y: 0,
  lineHeight: "1em",
  capHeight: "0.71em",
  scaleToFit: !1,
  textAnchor: "start",
  verticalAnchor: "end",
};
var DS = { exports: {} },
  pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ve = typeof Symbol == "function" && Symbol.for,
  qv = Ve ? Symbol.for("react.element") : 60103,
  Gv = Ve ? Symbol.for("react.portal") : 60106,
  xc = Ve ? Symbol.for("react.fragment") : 60107,
  wc = Ve ? Symbol.for("react.strict_mode") : 60108,
  bc = Ve ? Symbol.for("react.profiler") : 60114,
  _c = Ve ? Symbol.for("react.provider") : 60109,
  Sc = Ve ? Symbol.for("react.context") : 60110,
  Vv = Ve ? Symbol.for("react.async_mode") : 60111,
  Oc = Ve ? Symbol.for("react.concurrent_mode") : 60111,
  Ec = Ve ? Symbol.for("react.forward_ref") : 60112,
  kc = Ve ? Symbol.for("react.suspense") : 60113,
  SU = Ve ? Symbol.for("react.suspense_list") : 60120,
  Ac = Ve ? Symbol.for("react.memo") : 60115,
  Tc = Ve ? Symbol.for("react.lazy") : 60116,
  OU = Ve ? Symbol.for("react.block") : 60121,
  EU = Ve ? Symbol.for("react.fundamental") : 60117,
  kU = Ve ? Symbol.for("react.responder") : 60118,
  AU = Ve ? Symbol.for("react.scope") : 60119;
function Nt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case qv:
        switch (((e = e.type), e)) {
          case Vv:
          case Oc:
          case xc:
          case bc:
          case wc:
          case kc:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Sc:
              case Ec:
              case Tc:
              case Ac:
              case _c:
                return e;
              default:
                return t;
            }
        }
      case Gv:
        return t;
    }
  }
}
function LS(e) {
  return Nt(e) === Oc;
}
pe.AsyncMode = Vv;
pe.ConcurrentMode = Oc;
pe.ContextConsumer = Sc;
pe.ContextProvider = _c;
pe.Element = qv;
pe.ForwardRef = Ec;
pe.Fragment = xc;
pe.Lazy = Tc;
pe.Memo = Ac;
pe.Portal = Gv;
pe.Profiler = bc;
pe.StrictMode = wc;
pe.Suspense = kc;
pe.isAsyncMode = function (e) {
  return LS(e) || Nt(e) === Vv;
};
pe.isConcurrentMode = LS;
pe.isContextConsumer = function (e) {
  return Nt(e) === Sc;
};
pe.isContextProvider = function (e) {
  return Nt(e) === _c;
};
pe.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === qv;
};
pe.isForwardRef = function (e) {
  return Nt(e) === Ec;
};
pe.isFragment = function (e) {
  return Nt(e) === xc;
};
pe.isLazy = function (e) {
  return Nt(e) === Tc;
};
pe.isMemo = function (e) {
  return Nt(e) === Ac;
};
pe.isPortal = function (e) {
  return Nt(e) === Gv;
};
pe.isProfiler = function (e) {
  return Nt(e) === bc;
};
pe.isStrictMode = function (e) {
  return Nt(e) === wc;
};
pe.isSuspense = function (e) {
  return Nt(e) === kc;
};
pe.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === xc ||
    e === Oc ||
    e === bc ||
    e === wc ||
    e === kc ||
    e === SU ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Tc ||
        e.$$typeof === Ac ||
        e.$$typeof === _c ||
        e.$$typeof === Sc ||
        e.$$typeof === Ec ||
        e.$$typeof === EU ||
        e.$$typeof === kU ||
        e.$$typeof === AU ||
        e.$$typeof === OU))
  );
};
pe.typeOf = Nt;
DS.exports = pe;
var TU = DS.exports;
function Lo(e, t) {
  for (var r in e) if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r])) return !1;
  for (var n in t) if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n)) return !1;
  return !0;
}
function F0(e, t) {
  if (e == null) return {};
  var r = CU(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function CU(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var B0 = {
    click: "onClick",
    mousedown: "onMouseDown",
    mouseup: "onMouseUp",
    mouseover: "onMouseOver",
    mousemove: "onMouseMove",
    mouseout: "onMouseOut",
    mouseenter: "onMouseEnter",
    mouseleave: "onMouseLeave",
    touchcancel: "onTouchCancel",
    touchend: "onTouchEnd",
    touchmove: "onTouchMove",
    touchstart: "onTouchStart",
  },
  dn = function (t) {
    return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
  },
  U0 = null,
  Df = null,
  Qv = function e(t) {
    if (t === U0 && Ue(Df)) return Df;
    var r = [];
    return (
      B.Children.forEach(t, function (n) {
        Y(n) || (TU.isFragment(n) ? (r = r.concat(e(n.props.children))) : r.push(n));
      }),
      (Df = r),
      (U0 = t),
      r
    );
  },
  Pr = function (t, r) {
    var n = [],
      i = [];
    return (
      Ue(r)
        ? (i = r.map(function (a) {
            return dn(a);
          }))
        : (i = [dn(r)]),
      Qv(t).forEach(function (a) {
        var o = Ze(a, "type.displayName") || Ze(a, "type.name");
        i.indexOf(o) !== -1 && n.push(a);
      }),
      n
    );
  },
  kr = function (t, r) {
    var n = Pr(t, r);
    return n && n[0];
  },
  z0 = function (t) {
    if (!t || !t.props) return !1;
    var r = t.props,
      n = r.width,
      i = r.height;
    return !(!H(n) || n <= 0 || !H(i) || i <= 0);
  },
  PU = [
    "a",
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animate",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "cursor",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColormatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "font",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-url",
    "foreignObject",
    "g",
    "glyph",
    "glyphRef",
    "hkern",
    "image",
    "line",
    "lineGradient",
    "marker",
    "mask",
    "metadata",
    "missing-glyph",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "script",
    "set",
    "stop",
    "style",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "title",
    "tref",
    "tspan",
    "use",
    "view",
    "vkern",
  ],
  MU = function (t) {
    return t && t.type && ru(t.type) && PU.indexOf(t.type) >= 0;
  },
  FS = function e(t, r) {
    if (t === r) return !0;
    var n = B.Children.count(t);
    if (n !== B.Children.count(r)) return !1;
    if (n === 0) return !0;
    if (n === 1) return W0(Ue(t) ? t[0] : t, Ue(r) ? r[0] : r);
    for (var i = 0; i < n; i++) {
      var a = t[i],
        o = r[i];
      if (Ue(a) || Ue(o)) {
        if (!e(a, o)) return !1;
      } else if (!W0(a, o)) return !1;
    }
    return !0;
  },
  W0 = function (t, r) {
    if (Y(t) && Y(r)) return !0;
    if (!Y(t) && !Y(r)) {
      var n = t.props || {},
        i = n.children,
        a = F0(n, ["children"]),
        o = r.props || {},
        u = o.children,
        s = F0(o, ["children"]);
      return i && u ? Lo(a, s) && FS(i, u) : !i && !u ? Lo(a, s) : !1;
    }
    return !1;
  },
  H0 = function (t, r) {
    var n = [],
      i = {};
    return (
      Qv(t).forEach(function (a, o) {
        if (MU(a)) n.push(a);
        else if (a) {
          var u = dn(a.type),
            s = r[u] || {},
            l = s.handler,
            c = s.once;
          if (l && (!c || !i[u])) {
            var f = l(a, u, o);
            n.push(f), (i[u] = !0);
          }
        }
      }),
      n
    );
  },
  $U = function (t) {
    var r = t && t.type;
    return r && B0[r] ? B0[r] : null;
  },
  IU = function (t, r) {
    return Qv(r).indexOf(t);
  },
  NU = $v;
function RU(e, t) {
  return NU(e, t);
}
var jU = RU;
const Bh = he(jU);
var DU = wa;
function LU(e, t, r) {
  for (var n = -1, i = e.length; ++n < i; ) {
    var a = e[n],
      o = t(a);
    if (o != null && (u === void 0 ? o === o && !DU(o) : r(o, u)))
      var u = o,
        s = a;
  }
  return s;
}
var BS = LU;
function FU(e, t) {
  return e > t;
}
var BU = FU,
  UU = BS,
  zU = BU,
  WU = ba;
function HU(e) {
  return e && e.length ? UU(e, WU, zU) : void 0;
}
var qU = HU;
const tn = he(qU);
function GU(e, t) {
  return e < t;
}
var VU = GU,
  QU = BS,
  YU = VU,
  KU = ba;
function XU(e) {
  return e && e.length ? QU(e, KU, YU) : void 0;
}
var JU = XU;
const Cc = he(JU);
var ZU = Rv,
  ez = On,
  tz = SS,
  rz = yt;
function nz(e, t) {
  var r = rz(e) ? ZU : tz;
  return r(e, ez(t));
}
var iz = nz,
  az = bS,
  oz = iz;
function uz(e, t) {
  return az(oz(e, t), 1);
}
var sz = uz;
const lz = he(sz);
var Sa = 1e9,
  cz = {
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
  },
  Kv,
  ke = !0,
  Gt = "[DecimalError] ",
  Vn = Gt + "Invalid argument: ",
  Yv = Gt + "Exponent out of range: ",
  Oa = Math.floor,
  Rn = Math.pow,
  fz = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  At,
  He = 1e7,
  _e = 7,
  US = 9007199254740991,
  hl = Oa(US / _e),
  G = {};
G.absoluteValue = G.abs = function () {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
G.comparedTo = G.cmp = function (e) {
  var t,
    r,
    n,
    i,
    a = this;
  if (((e = new a.constructor(e)), a.s !== e.s)) return a.s || -e.s;
  if (a.e !== e.e) return (a.e > e.e) ^ (a.s < 0) ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return (a.d[t] > e.d[t]) ^ (a.s < 0) ? 1 : -1;
  return n === i ? 0 : (n > i) ^ (a.s < 0) ? 1 : -1;
};
G.decimalPlaces = G.dp = function () {
  var e = this,
    t = e.d.length - 1,
    r = (t - e.e) * _e;
  if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
G.dividedBy = G.div = function (e) {
  return Mr(this, new this.constructor(e));
};
G.dividedToIntegerBy = G.idiv = function (e) {
  var t = this,
    r = t.constructor;
  return ye(Mr(t, new r(e), 0, 1), r.precision);
};
G.equals = G.eq = function (e) {
  return !this.cmp(e);
};
G.exponent = function () {
  return Le(this);
};
G.greaterThan = G.gt = function (e) {
  return this.cmp(e) > 0;
};
G.greaterThanOrEqualTo = G.gte = function (e) {
  return this.cmp(e) >= 0;
};
G.isInteger = G.isint = function () {
  return this.e > this.d.length - 2;
};
G.isNegative = G.isneg = function () {
  return this.s < 0;
};
G.isPositive = G.ispos = function () {
  return this.s > 0;
};
G.isZero = function () {
  return this.s === 0;
};
G.lessThan = G.lt = function (e) {
  return this.cmp(e) < 0;
};
G.lessThanOrEqualTo = G.lte = function (e) {
  return this.cmp(e) < 1;
};
G.logarithm = G.log = function (e) {
  var t,
    r = this,
    n = r.constructor,
    i = n.precision,
    a = i + 5;
  if (e === void 0) e = new n(10);
  else if (((e = new n(e)), e.s < 1 || e.eq(At))) throw Error(Gt + "NaN");
  if (r.s < 1) throw Error(Gt + (r.s ? "NaN" : "-Infinity"));
  return r.eq(At) ? new n(0) : ((ke = !1), (t = Mr(Fo(r, a), Fo(e, a), a)), (ke = !0), ye(t, i));
};
G.minus = G.sub = function (e) {
  var t = this;
  return (e = new t.constructor(e)), t.s == e.s ? HS(t, e) : zS(t, ((e.s = -e.s), e));
};
G.modulo = G.mod = function (e) {
  var t,
    r = this,
    n = r.constructor,
    i = n.precision;
  if (((e = new n(e)), !e.s)) throw Error(Gt + "NaN");
  return r.s ? ((ke = !1), (t = Mr(r, e, 0, 1).times(e)), (ke = !0), r.minus(t)) : ye(new n(r), i);
};
G.naturalExponential = G.exp = function () {
  return WS(this);
};
G.naturalLogarithm = G.ln = function () {
  return Fo(this);
};
G.negated = G.neg = function () {
  var e = new this.constructor(this);
  return (e.s = -e.s || 0), e;
};
G.plus = G.add = function (e) {
  var t = this;
  return (e = new t.constructor(e)), t.s == e.s ? zS(t, e) : HS(t, ((e.s = -e.s), e));
};
G.precision = G.sd = function (e) {
  var t,
    r,
    n,
    i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Vn + e);
  if (((t = Le(i) + 1), (n = i.d.length - 1), (r = n * _e + 1), (n = i.d[n]), n)) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
G.squareRoot = G.sqrt = function () {
  var e,
    t,
    r,
    n,
    i,
    a,
    o,
    u = this,
    s = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new s(0);
    throw Error(Gt + "NaN");
  }
  for (
    e = Le(u),
      ke = !1,
      i = Math.sqrt(+u),
      i == 0 || i == 1 / 0
        ? ((t = hr(u.d)),
          (t.length + e) % 2 == 0 && (t += "0"),
          (i = Math.sqrt(t)),
          (e = Oa((e + 1) / 2) - (e < 0 || e % 2)),
          i == 1 / 0 ? (t = "5e" + e) : ((t = i.toExponential()), (t = t.slice(0, t.indexOf("e") + 1) + e)),
          (n = new s(t)))
        : (n = new s(i.toString())),
      r = s.precision,
      i = o = r + 3;
    ;

  )
    if (((a = n), (n = a.plus(Mr(u, a, o + 2)).times(0.5)), hr(a.d).slice(0, o) === (t = hr(n.d)).slice(0, o))) {
      if (((t = t.slice(o - 3, o + 1)), i == o && t == "4999")) {
        if ((ye(a, r + 1, 0), a.times(a).eq(u))) {
          n = a;
          break;
        }
      } else if (t != "9999") break;
      o += 4;
    }
  return (ke = !0), ye(n, r);
};
G.times = G.mul = function (e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    u,
    s,
    l,
    c = this,
    f = c.constructor,
    d = c.d,
    v = (e = new f(e)).d;
  if (!c.s || !e.s) return new f(0);
  for (
    e.s *= c.s,
      r = c.e + e.e,
      s = d.length,
      l = v.length,
      s < l && ((a = d), (d = v), (v = a), (o = s), (s = l), (l = o)),
      a = [],
      o = s + l,
      n = o;
    n--;

  )
    a.push(0);
  for (n = l; --n >= 0; ) {
    for (t = 0, i = s + n; i > n; ) (u = a[i] + v[n] * d[i - n - 1] + t), (a[i--] = u % He | 0), (t = (u / He) | 0);
    a[i] = (a[i] + t) % He | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), (e.d = a), (e.e = r), ke ? ye(e, f.precision) : e;
};
G.toDecimalPlaces = G.todp = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0 ? r : (xr(e, 0, Sa), t === void 0 ? (t = n.rounding) : xr(t, 0, 8), ye(r, e + Le(r) + 1, t))
  );
};
G.toExponential = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = ei(n, !0))
      : (xr(e, 0, Sa),
        t === void 0 ? (t = i.rounding) : xr(t, 0, 8),
        (n = ye(new i(n), e + 1, t)),
        (r = ei(n, !0, e + 1))),
    r
  );
};
G.toFixed = function (e, t) {
  var r,
    n,
    i = this,
    a = i.constructor;
  return e === void 0
    ? ei(i)
    : (xr(e, 0, Sa),
      t === void 0 ? (t = a.rounding) : xr(t, 0, 8),
      (n = ye(new a(i), e + Le(i) + 1, t)),
      (r = ei(n.abs(), !1, e + Le(n) + 1)),
      i.isneg() && !i.isZero() ? "-" + r : r);
};
G.toInteger = G.toint = function () {
  var e = this,
    t = e.constructor;
  return ye(new t(e), Le(e) + 1, t.rounding);
};
G.toNumber = function () {
  return +this;
};
G.toPower = G.pow = function (e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    u = this,
    s = u.constructor,
    l = 12,
    c = +(e = new s(e));
  if (!e.s) return new s(At);
  if (((u = new s(u)), !u.s)) {
    if (e.s < 1) throw Error(Gt + "Infinity");
    return u;
  }
  if (u.eq(At)) return u;
  if (((n = s.precision), e.eq(At))) return ye(u, n);
  if (((t = e.e), (r = e.d.length - 1), (o = t >= r), (a = u.s), o)) {
    if ((r = c < 0 ? -c : c) <= US) {
      for (
        i = new s(At), t = Math.ceil(n / _e + 4), ke = !1;
        r % 2 && ((i = i.times(u)), G0(i.d, t)), (r = Oa(r / 2)), r !== 0;

      )
        (u = u.times(u)), G0(u.d, t);
      return (ke = !0), e.s < 0 ? new s(At).div(i) : ye(i, n);
    }
  } else if (a < 0) throw Error(Gt + "NaN");
  return (
    (a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1),
    (u.s = 1),
    (ke = !1),
    (i = e.times(Fo(u, n + l))),
    (ke = !0),
    (i = WS(i)),
    (i.s = a),
    i
  );
};
G.toPrecision = function (e, t) {
  var r,
    n,
    i = this,
    a = i.constructor;
  return (
    e === void 0
      ? ((r = Le(i)), (n = ei(i, r <= a.toExpNeg || r >= a.toExpPos)))
      : (xr(e, 1, Sa),
        t === void 0 ? (t = a.rounding) : xr(t, 0, 8),
        (i = ye(new a(i), e, t)),
        (r = Le(i)),
        (n = ei(i, e <= r || r <= a.toExpNeg, e))),
    n
  );
};
G.toSignificantDigits = G.tosd = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (xr(e, 1, Sa), t === void 0 ? (t = n.rounding) : xr(t, 0, 8)),
    ye(new n(r), e, t)
  );
};
G.toString =
  G.valueOf =
  G.val =
  G.toJSON =
  G[Symbol.for("nodejs.util.inspect.custom")] =
    function () {
      var e = this,
        t = Le(e),
        r = e.constructor;
      return ei(e, t <= r.toExpNeg || t >= r.toExpPos);
    };
function zS(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    s,
    l,
    c = e.constructor,
    f = c.precision;
  if (!e.s || !t.s) return t.s || (t = new c(e)), ke ? ye(t, f) : t;
  if (((s = e.d), (l = t.d), (o = e.e), (i = t.e), (s = s.slice()), (a = o - i), a)) {
    for (
      a < 0 ? ((n = s), (a = -a), (u = l.length)) : ((n = l), (i = o), (u = s.length)),
        o = Math.ceil(f / _e),
        u = o > u ? o + 1 : u + 1,
        a > u && ((a = u), (n.length = 1)),
        n.reverse();
      a--;

    )
      n.push(0);
    n.reverse();
  }
  for (u = s.length, a = l.length, u - a < 0 && ((a = u), (n = l), (l = s), (s = n)), r = 0; a; )
    (r = ((s[--a] = s[a] + l[a] + r) / He) | 0), (s[a] %= He);
  for (r && (s.unshift(r), ++i), u = s.length; s[--u] == 0; ) s.pop();
  return (t.d = s), (t.e = i), ke ? ye(t, f) : t;
}
function xr(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(Vn + e);
}
function hr(e) {
  var t,
    r,
    n,
    i = e.length - 1,
    a = "",
    o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++) (n = e[t] + ""), (r = _e - n.length), r && (a += Kr(r)), (a += n);
    (o = e[t]), (n = o + ""), (r = _e - n.length), r && (a += Kr(r));
  } else if (o === 0) return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var Mr = (function () {
  function e(n, i) {
    var a,
      o = 0,
      u = n.length;
    for (n = n.slice(); u--; ) (a = n[u] * i + o), (n[u] = a % He | 0), (o = (a / He) | 0);
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var u, s;
    if (a != o) s = a > o ? 1 : -1;
    else
      for (u = s = 0; u < a; u++)
        if (n[u] != i[u]) {
          s = n[u] > i[u] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(n, i, a) {
    for (var o = 0; a--; ) (n[a] -= o), (o = n[a] < i[a] ? 1 : 0), (n[a] = o * He + n[a] - i[a]);
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, i, a, o) {
    var u,
      s,
      l,
      c,
      f,
      d,
      v,
      y,
      h,
      w,
      p,
      x,
      m,
      g,
      b,
      _,
      S,
      O,
      E = n.constructor,
      A = n.s == i.s ? 1 : -1,
      k = n.d,
      C = i.d;
    if (!n.s) return new E(n);
    if (!i.s) throw Error(Gt + "Division by zero");
    for (s = n.e - i.e, S = C.length, b = k.length, v = new E(A), y = v.d = [], l = 0; C[l] == (k[l] || 0); ) ++l;
    if (
      (C[l] > (k[l] || 0) && --s,
      a == null ? (x = a = E.precision) : o ? (x = a + (Le(n) - Le(i)) + 1) : (x = a),
      x < 0)
    )
      return new E(0);
    if (((x = (x / _e + 2) | 0), (l = 0), S == 1))
      for (c = 0, C = C[0], x++; (l < b || c) && x--; l++)
        (m = c * He + (k[l] || 0)), (y[l] = (m / C) | 0), (c = m % C | 0);
    else {
      for (
        c = (He / (C[0] + 1)) | 0,
          c > 1 && ((C = e(C, c)), (k = e(k, c)), (S = C.length), (b = k.length)),
          g = S,
          h = k.slice(0, S),
          w = h.length;
        w < S;

      )
        h[w++] = 0;
      (O = C.slice()), O.unshift(0), (_ = C[0]), C[1] >= He / 2 && ++_;
      do
        (c = 0),
          (u = t(C, h, S, w)),
          u < 0
            ? ((p = h[0]),
              S != w && (p = p * He + (h[1] || 0)),
              (c = (p / _) | 0),
              c > 1
                ? (c >= He && (c = He - 1),
                  (f = e(C, c)),
                  (d = f.length),
                  (w = h.length),
                  (u = t(f, h, d, w)),
                  u == 1 && (c--, r(f, S < d ? O : C, d)))
                : (c == 0 && (u = c = 1), (f = C.slice())),
              (d = f.length),
              d < w && f.unshift(0),
              r(h, f, w),
              u == -1 && ((w = h.length), (u = t(C, h, S, w)), u < 1 && (c++, r(h, S < w ? O : C, w))),
              (w = h.length))
            : u === 0 && (c++, (h = [0])),
          (y[l++] = c),
          u && h[0] ? (h[w++] = k[g] || 0) : ((h = [k[g]]), (w = 1));
      while ((g++ < b || h[0] !== void 0) && x--);
    }
    return y[0] || y.shift(), (v.e = s), ye(v, o ? a + Le(v) + 1 : a);
  };
})();
function WS(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    s = 0,
    l = 0,
    c = e.constructor,
    f = c.precision;
  if (Le(e) > 16) throw Error(Yv + Le(e));
  if (!e.s) return new c(At);
  for (t == null ? ((ke = !1), (u = f)) : (u = t), o = new c(0.03125); e.abs().gte(0.1); ) (e = e.times(o)), (l += 5);
  for (n = ((Math.log(Rn(2, l)) / Math.LN10) * 2 + 5) | 0, u += n, r = i = a = new c(At), c.precision = u; ; ) {
    if (
      ((i = ye(i.times(e), u)),
      (r = r.times(++s)),
      (o = a.plus(Mr(i, r, u))),
      hr(o.d).slice(0, u) === hr(a.d).slice(0, u))
    ) {
      for (; l--; ) a = ye(a.times(a), u);
      return (c.precision = f), t == null ? ((ke = !0), ye(a, f)) : a;
    }
    a = o;
  }
}
function Le(e) {
  for (var t = e.e * _e, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Lf(e, t, r) {
  if (t > e.LN10.sd()) throw ((ke = !0), r && (e.precision = r), Error(Gt + "LN10 precision limit exceeded"));
  return ye(new e(e.LN10), t);
}
function Kr(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Fo(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    s,
    l,
    c,
    f = 1,
    d = 10,
    v = e,
    y = v.d,
    h = v.constructor,
    w = h.precision;
  if (v.s < 1) throw Error(Gt + (v.s ? "NaN" : "-Infinity"));
  if (v.eq(At)) return new h(0);
  if ((t == null ? ((ke = !1), (l = w)) : (l = t), v.eq(10))) return t == null && (ke = !0), Lf(h, l);
  if (((l += d), (h.precision = l), (r = hr(y)), (n = r.charAt(0)), (a = Le(v)), Math.abs(a) < 15e14)) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); ) (v = v.times(e)), (r = hr(v.d)), (n = r.charAt(0)), f++;
    (a = Le(v)), n > 1 ? ((v = new h("0." + r)), a++) : (v = new h(n + "." + r.slice(1)));
  } else
    return (
      (s = Lf(h, l + 2, w).times(a + "")),
      (v = Fo(new h(n + "." + r.slice(1)), l - d).plus(s)),
      (h.precision = w),
      t == null ? ((ke = !0), ye(v, w)) : v
    );
  for (u = o = v = Mr(v.minus(At), v.plus(At), l), c = ye(v.times(v), l), i = 3; ; ) {
    if (((o = ye(o.times(c), l)), (s = u.plus(Mr(o, new h(i), l))), hr(s.d).slice(0, l) === hr(u.d).slice(0, l)))
      return (
        (u = u.times(2)),
        a !== 0 && (u = u.plus(Lf(h, l + 2, w).times(a + ""))),
        (u = Mr(u, new h(f), l)),
        (h.precision = w),
        t == null ? ((ke = !0), ye(u, w)) : u
      );
    (u = s), (i += 2);
  }
}
function q0(e, t) {
  var r, n, i;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;

  )
    ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (((t = t.slice(n, i)), t)) {
    if (((i -= n), (r = r - n - 1), (e.e = Oa(r / _e)), (e.d = []), (n = (r + 1) % _e), r < 0 && (n += _e), n < i)) {
      for (n && e.d.push(+t.slice(0, n)), i -= _e; n < i; ) e.d.push(+t.slice(n, (n += _e)));
      (t = t.slice(n)), (n = _e - t.length);
    } else n -= i;
    for (; n--; ) t += "0";
    if ((e.d.push(+t), ke && (e.e > hl || e.e < -hl))) throw Error(Yv + r);
  } else (e.s = 0), (e.e = 0), (e.d = [0]);
  return e;
}
function ye(e, t, r) {
  var n,
    i,
    a,
    o,
    u,
    s,
    l,
    c,
    f = e.d;
  for (o = 1, a = f[0]; a >= 10; a /= 10) o++;
  if (((n = t - o), n < 0)) (n += _e), (i = t), (l = f[(c = 0)]);
  else {
    if (((c = Math.ceil((n + 1) / _e)), (a = f.length), c >= a)) return e;
    for (l = a = f[c], o = 1; a >= 10; a /= 10) o++;
    (n %= _e), (i = n - _e + o);
  }
  if (
    (r !== void 0 &&
      ((a = Rn(10, o - i - 1)),
      (u = (l / a) % 10 | 0),
      (s = t < 0 || f[c + 1] !== void 0 || l % a),
      (s =
        r < 4
          ? (u || s) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : u > 5 ||
            (u == 5 &&
              (r == 4 ||
                s ||
                (r == 6 && (n > 0 ? (i > 0 ? l / Rn(10, o - i) : 0) : f[c - 1]) % 10 & 1) ||
                r == (e.s < 0 ? 8 : 7))))),
    t < 1 || !f[0])
  )
    return (
      s
        ? ((a = Le(e)),
          (f.length = 1),
          (t = t - a - 1),
          (f[0] = Rn(10, (_e - (t % _e)) % _e)),
          (e.e = Oa(-t / _e) || 0))
        : ((f.length = 1), (f[0] = e.e = e.s = 0)),
      e
    );
  if (
    (n == 0
      ? ((f.length = c), (a = 1), c--)
      : ((f.length = c + 1), (a = Rn(10, _e - n)), (f[c] = i > 0 ? ((l / Rn(10, o - i)) % Rn(10, i) | 0) * a : 0)),
    s)
  )
    for (;;)
      if (c == 0) {
        (f[0] += a) == He && ((f[0] = 1), ++e.e);
        break;
      } else {
        if (((f[c] += a), f[c] != He)) break;
        (f[c--] = 0), (a = 1);
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (ke && (e.e > hl || e.e < -hl)) throw Error(Yv + Le(e));
  return e;
}
function HS(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    s,
    l,
    c,
    f,
    d = e.constructor,
    v = d.precision;
  if (!e.s || !t.s) return t.s ? (t.s = -t.s) : (t = new d(e)), ke ? ye(t, v) : t;
  if (((s = e.d), (f = t.d), (n = t.e), (l = e.e), (s = s.slice()), (o = l - n), o)) {
    for (
      c = o < 0,
        c ? ((r = s), (o = -o), (u = f.length)) : ((r = f), (n = l), (u = s.length)),
        i = Math.max(Math.ceil(v / _e), u) + 2,
        o > i && ((o = i), (r.length = 1)),
        r.reverse(),
        i = o;
      i--;

    )
      r.push(0);
    r.reverse();
  } else {
    for (i = s.length, u = f.length, c = i < u, c && (u = i), i = 0; i < u; i++)
      if (s[i] != f[i]) {
        c = s[i] < f[i];
        break;
      }
    o = 0;
  }
  for (c && ((r = s), (s = f), (f = r), (t.s = -t.s)), u = s.length, i = f.length - u; i > 0; --i) s[u++] = 0;
  for (i = f.length; i > o; ) {
    if (s[--i] < f[i]) {
      for (a = i; a && s[--a] === 0; ) s[a] = He - 1;
      --s[a], (s[i] += He);
    }
    s[i] -= f[i];
  }
  for (; s[--u] === 0; ) s.pop();
  for (; s[0] === 0; s.shift()) --n;
  return s[0] ? ((t.d = s), (t.e = n), ke ? ye(t, v) : t) : new d(0);
}
function ei(e, t, r) {
  var n,
    i = Le(e),
    a = hr(e.d),
    o = a.length;
  return (
    t
      ? (r && (n = r - o) > 0
          ? (a = a.charAt(0) + "." + a.slice(1) + Kr(n))
          : o > 1 && (a = a.charAt(0) + "." + a.slice(1)),
        (a = a + (i < 0 ? "e" : "e+") + i))
      : i < 0
      ? ((a = "0." + Kr(-i - 1) + a), r && (n = r - o) > 0 && (a += Kr(n)))
      : i >= o
      ? ((a += Kr(i + 1 - o)), r && (n = r - i - 1) > 0 && (a = a + "." + Kr(n)))
      : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)),
        r && (n = r - o) > 0 && (i + 1 === o && (a += "."), (a += Kr(n)))),
    e.s < 0 ? "-" + a : a
  );
}
function G0(e, t) {
  if (e.length > t) return (e.length = t), !0;
}
function qS(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (((o.constructor = i), a instanceof i)) {
      (o.s = a.s), (o.e = a.e), (o.d = (a = a.d) ? a.slice() : a);
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0) throw Error(Vn + a);
      if (a > 0) o.s = 1;
      else if (a < 0) (a = -a), (o.s = -1);
      else {
        (o.s = 0), (o.e = 0), (o.d = [0]);
        return;
      }
      if (a === ~~a && a < 1e7) {
        (o.e = 0), (o.d = [a]);
        return;
      }
      return q0(o, a.toString());
    } else if (typeof a != "string") throw Error(Vn + a);
    if ((a.charCodeAt(0) === 45 ? ((a = a.slice(1)), (o.s = -1)) : (o.s = 1), fz.test(a))) q0(o, a);
    else throw Error(Vn + a);
  }
  if (
    ((i.prototype = G),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.clone = qS),
    (i.config = i.set = dz),
    e === void 0 && (e = {}),
    e)
  )
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
  return i.config(e), i;
}
function dz(e) {
  if (!e || typeof e != "object") throw Error(Gt + "Object expected");
  var t,
    r,
    n,
    i = ["precision", 1, Sa, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[(r = i[t])]) !== void 0)
      if (Oa(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(Vn + r + ": " + n);
  if ((n = e[(r = "LN10")]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Vn + r + ": " + n);
  return this;
}
var Kv = qS(cz);
At = new Kv(1);
const ve = Kv;
function hz(e) {
  return mz(e) || yz(e) || vz(e) || pz();
}
function pz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vz(e, t) {
  if (e) {
    if (typeof e == "string") return Uh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Uh(e, t);
  }
}
function yz(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function mz(e) {
  if (Array.isArray(e)) return Uh(e);
}
function Uh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var gz = function (t) {
    return t;
  },
  GS = { "@@functional/placeholder": !0 },
  VS = function (t) {
    return t === GS;
  },
  V0 = function (t) {
    return function r() {
      return arguments.length === 0 || (arguments.length === 1 && VS(arguments.length <= 0 ? void 0 : arguments[0]))
        ? r
        : t.apply(void 0, arguments);
    };
  },
  xz = function e(t, r) {
    return t === 1
      ? r
      : V0(function () {
          for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
          var o = i.filter(function (u) {
            return u !== GS;
          }).length;
          return o >= t
            ? r.apply(void 0, i)
            : e(
                t - o,
                V0(function () {
                  for (var u = arguments.length, s = new Array(u), l = 0; l < u; l++) s[l] = arguments[l];
                  var c = i.map(function (f) {
                    return VS(f) ? s.shift() : f;
                  });
                  return r.apply(void 0, hz(c).concat(s));
                }),
              );
        });
  },
  Pc = function (t) {
    return xz(t.length, t);
  },
  zh = function (t, r) {
    for (var n = [], i = t; i < r; ++i) n[i - t] = i;
    return n;
  },
  wz = Pc(function (e, t) {
    return Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map(function (r) {
            return t[r];
          })
          .map(e);
  }),
  bz = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
    if (!r.length) return gz;
    var i = r.reverse(),
      a = i[0],
      o = i.slice(1);
    return function () {
      return o.reduce(
        function (u, s) {
          return s(u);
        },
        a.apply(void 0, arguments),
      );
    };
  },
  Wh = function (t) {
    return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
  },
  QS = function (t) {
    var r = null,
      n = null;
    return function () {
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
      return (
        (r &&
          a.every(function (u, s) {
            return u === r[s];
          })) ||
          ((r = a), (n = t.apply(void 0, a))),
        n
      );
    };
  };
function _z(e) {
  var t;
  return e === 0 ? (t = 1) : (t = Math.floor(new ve(e).abs().log(10).toNumber()) + 1), t;
}
function Sz(e, t, r) {
  for (var n = new ve(e), i = 0, a = []; n.lt(t) && i < 1e5; ) a.push(n.toNumber()), (n = n.add(r)), i++;
  return a;
}
var Oz = Pc(function (e, t, r) {
    var n = +e,
      i = +t;
    return n + r * (i - n);
  }),
  Ez = Pc(function (e, t, r) {
    var n = t - +e;
    return (n = n || 1 / 0), (r - e) / n;
  }),
  kz = Pc(function (e, t, r) {
    var n = t - +e;
    return (n = n || 1 / 0), Math.max(0, Math.min(1, (r - e) / n));
  });
const Mc = {
  rangeStep: Sz,
  getDigitCount: _z,
  interpolateNumber: Oz,
  uninterpolateNumber: Ez,
  uninterpolateTruncation: kz,
};
function Hh(e) {
  return Cz(e) || Tz(e) || YS(e) || Az();
}
function Az() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tz(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function Cz(e) {
  if (Array.isArray(e)) return qh(e);
}
function Bo(e, t) {
  return $z(e) || Mz(e, t) || YS(e, t) || Pz();
}
function Pz() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YS(e, t) {
  if (e) {
    if (typeof e == "string") return qh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return qh(e, t);
  }
}
function qh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Mz(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), u;
        !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t));
        n = !0
      );
    } catch (s) {
      (i = !0), (a = s);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function $z(e) {
  if (Array.isArray(e)) return e;
}
function KS(e) {
  var t = Bo(e, 2),
    r = t[0],
    n = t[1],
    i = r,
    a = n;
  return r > n && ((i = n), (a = r)), [i, a];
}
function XS(e, t, r) {
  if (e.lte(0)) return new ve(0);
  var n = Mc.getDigitCount(e.toNumber()),
    i = new ve(10).pow(n),
    a = e.div(i),
    o = n !== 1 ? 0.05 : 0.1,
    u = new ve(Math.ceil(a.div(o).toNumber())).add(r).mul(o),
    s = u.mul(i);
  return t ? s : new ve(Math.ceil(s));
}
function Iz(e, t, r) {
  var n = 1,
    i = new ve(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1
      ? ((n = new ve(10).pow(Mc.getDigitCount(e) - 1)), (i = new ve(Math.floor(i.div(n).toNumber())).mul(n)))
      : a > 1 && (i = new ve(Math.floor(e)));
  } else e === 0 ? (i = new ve(Math.floor((t - 1) / 2))) : r || (i = new ve(Math.floor(e)));
  var o = Math.floor((t - 1) / 2),
    u = bz(
      wz(function (s) {
        return i.add(new ve(s - o).mul(n)).toNumber();
      }),
      zh,
    );
  return u(0, t);
}
function JS(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1))) return { step: new ve(0), tickMin: new ve(0), tickMax: new ve(0) };
  var a = XS(new ve(t).sub(e).div(r - 1), n, i),
    o;
  e <= 0 && t >= 0 ? (o = new ve(0)) : ((o = new ve(e).add(t).div(2)), (o = o.sub(new ve(o).mod(a))));
  var u = Math.ceil(o.sub(e).div(a).toNumber()),
    s = Math.ceil(new ve(t).sub(o).div(a).toNumber()),
    l = u + s + 1;
  return l > r
    ? JS(e, t, r, n, i + 1)
    : (l < r && ((s = t > 0 ? s + (r - l) : s), (u = t > 0 ? u : u + (r - l))),
      { step: a, tickMin: o.sub(new ve(u).mul(a)), tickMax: o.add(new ve(s).mul(a)) });
}
function Nz(e) {
  var t = Bo(e, 2),
    r = t[0],
    n = t[1],
    i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = Math.max(i, 2),
    u = KS([r, n]),
    s = Bo(u, 2),
    l = s[0],
    c = s[1];
  if (l === -1 / 0 || c === 1 / 0) {
    var f =
      c === 1 / 0
        ? [l].concat(
            Hh(
              zh(0, i - 1).map(function () {
                return 1 / 0;
              }),
            ),
          )
        : [].concat(
            Hh(
              zh(0, i - 1).map(function () {
                return -1 / 0;
              }),
            ),
            [c],
          );
    return r > n ? Wh(f) : f;
  }
  if (l === c) return Iz(l, i, a);
  var d = JS(l, c, o, a),
    v = d.step,
    y = d.tickMin,
    h = d.tickMax,
    w = Mc.rangeStep(y, h.add(new ve(0.1).mul(v)), v);
  return r > n ? Wh(w) : w;
}
function Rz(e, t) {
  var r = Bo(e, 2),
    n = r[0],
    i = r[1],
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = KS([n, i]),
    u = Bo(o, 2),
    s = u[0],
    l = u[1];
  if (s === -1 / 0 || l === 1 / 0) return [n, i];
  if (s === l) return [s];
  var c = Math.max(t, 2),
    f = XS(new ve(l).sub(s).div(c - 1), a, 0),
    d = [].concat(Hh(Mc.rangeStep(new ve(s), new ve(l).sub(new ve(0.99).mul(f)), f)), [l]);
  return n > i ? Wh(d) : d;
}
var jz = QS(Nz),
  Dz = QS(Rz);
function iu(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Xv(e) {
  let t = e,
    r = e;
  e.length === 1 && ((t = (o, u) => e(o) - u), (r = Lz(e)));
  function n(o, u, s, l) {
    for (s == null && (s = 0), l == null && (l = o.length); s < l; ) {
      const c = (s + l) >>> 1;
      r(o[c], u) < 0 ? (s = c + 1) : (l = c);
    }
    return s;
  }
  function i(o, u, s, l) {
    for (s == null && (s = 0), l == null && (l = o.length); s < l; ) {
      const c = (s + l) >>> 1;
      r(o[c], u) > 0 ? (l = c) : (s = c + 1);
    }
    return s;
  }
  function a(o, u, s, l) {
    s == null && (s = 0), l == null && (l = o.length);
    const c = n(o, u, s, l - 1);
    return c > s && t(o[c - 1], u) > -t(o[c], u) ? c - 1 : c;
  }
  return { left: n, center: a, right: i };
}
function Lz(e) {
  return (t, r) => iu(e(t), r);
}
function ZS(e) {
  return e === null ? NaN : +e;
}
function* Fz(e, t) {
  if (t === void 0) for (let r of e) r != null && (r = +r) >= r && (yield r);
  else {
    let r = -1;
    for (let n of e) (n = t(n, ++r, e)) != null && (n = +n) >= n && (yield n);
  }
}
const Bz = Xv(iu),
  Uz = Bz.right;
Xv(ZS).center;
const au = Uz;
var Gh = Math.sqrt(50),
  Vh = Math.sqrt(10),
  Qh = Math.sqrt(2);
function Yh(e, t, r) {
  var n,
    i = -1,
    a,
    o,
    u;
  if (((t = +t), (e = +e), (r = +r), e === t && r > 0)) return [e];
  if (((n = t < e) && ((a = e), (e = t), (t = a)), (u = eO(e, t, r)) === 0 || !isFinite(u))) return [];
  if (u > 0) {
    let s = Math.round(e / u),
      l = Math.round(t / u);
    for (s * u < e && ++s, l * u > t && --l, o = new Array((a = l - s + 1)); ++i < a; ) o[i] = (s + i) * u;
  } else {
    u = -u;
    let s = Math.round(e * u),
      l = Math.round(t * u);
    for (s / u < e && ++s, l / u > t && --l, o = new Array((a = l - s + 1)); ++i < a; ) o[i] = (s + i) / u;
  }
  return n && o.reverse(), o;
}
function eO(e, t, r) {
  var n = (t - e) / Math.max(0, r),
    i = Math.floor(Math.log(n) / Math.LN10),
    a = n / Math.pow(10, i);
  return i >= 0
    ? (a >= Gh ? 10 : a >= Vh ? 5 : a >= Qh ? 2 : 1) * Math.pow(10, i)
    : -Math.pow(10, -i) / (a >= Gh ? 10 : a >= Vh ? 5 : a >= Qh ? 2 : 1);
}
function Kh(e, t, r) {
  var n = Math.abs(t - e) / Math.max(0, r),
    i = Math.pow(10, Math.floor(Math.log(n) / Math.LN10)),
    a = n / i;
  return a >= Gh ? (i *= 10) : a >= Vh ? (i *= 5) : a >= Qh && (i *= 2), t < e ? -i : i;
}
function Q0(e, t) {
  let r;
  if (t === void 0) for (const n of e) n != null && (r < n || (r === void 0 && n >= n)) && (r = n);
  else {
    let n = -1;
    for (let i of e) (i = t(i, ++n, e)) != null && (r < i || (r === void 0 && i >= i)) && (r = i);
  }
  return r;
}
function Y0(e, t) {
  let r;
  if (t === void 0) for (const n of e) n != null && (r > n || (r === void 0 && n >= n)) && (r = n);
  else {
    let n = -1;
    for (let i of e) (i = t(i, ++n, e)) != null && (r > i || (r === void 0 && i >= i)) && (r = i);
  }
  return r;
}
function tO(e, t, r = 0, n = e.length - 1, i = iu) {
  for (; n > r; ) {
    if (n - r > 600) {
      const s = n - r + 1,
        l = t - r + 1,
        c = Math.log(s),
        f = 0.5 * Math.exp((2 * c) / 3),
        d = 0.5 * Math.sqrt((c * f * (s - f)) / s) * (l - s / 2 < 0 ? -1 : 1),
        v = Math.max(r, Math.floor(t - (l * f) / s + d)),
        y = Math.min(n, Math.floor(t + ((s - l) * f) / s + d));
      tO(e, t, v, y, i);
    }
    const a = e[t];
    let o = r,
      u = n;
    for (qa(e, r, t), i(e[n], a) > 0 && qa(e, r, n); o < u; ) {
      for (qa(e, o, u), ++o, --u; i(e[o], a) < 0; ) ++o;
      for (; i(e[u], a) > 0; ) --u;
    }
    i(e[r], a) === 0 ? qa(e, r, u) : (++u, qa(e, u, n)), u <= t && (r = u + 1), t <= u && (n = u - 1);
  }
  return e;
}
function qa(e, t, r) {
  const n = e[t];
  (e[t] = e[r]), (e[r] = n);
}
function zz(e, t, r) {
  if (((e = Float64Array.from(Fz(e, r))), !!(n = e.length))) {
    if ((t = +t) <= 0 || n < 2) return Y0(e);
    if (t >= 1) return Q0(e);
    var n,
      i = (n - 1) * t,
      a = Math.floor(i),
      o = Q0(tO(e, a).subarray(0, a + 1)),
      u = Y0(e.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}
function Wz(e, t, r = ZS) {
  if ((n = e.length)) {
    if ((t = +t) <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n,
      i = (n - 1) * t,
      a = Math.floor(i),
      o = +r(e[a], a, e),
      u = +r(e[a + 1], a + 1, e);
    return o + (u - o) * (i - a);
  }
}
function Hz(e, t, r) {
  (e = +e), (t = +t), (r = (i = arguments.length) < 2 ? ((t = e), (e = 0), 1) : i < 3 ? 1 : +r);
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; ) a[n] = e + n * r;
  return a;
}
function Qt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Lr(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const Xh = Symbol("implicit");
function Jv() {
  var e = new Map(),
    t = [],
    r = [],
    n = Xh;
  function i(a) {
    var o = a + "",
      u = e.get(o);
    if (!u) {
      if (n !== Xh) return n;
      e.set(o, (u = t.push(a)));
    }
    return r[(u - 1) % r.length];
  }
  return (
    (i.domain = function (a) {
      if (!arguments.length) return t.slice();
      (t = []), (e = new Map());
      for (const o of a) {
        const u = o + "";
        e.has(u) || e.set(u, t.push(o));
      }
      return i;
    }),
    (i.range = function (a) {
      return arguments.length ? ((r = Array.from(a)), i) : r.slice();
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n;
    }),
    (i.copy = function () {
      return Jv(t, r).unknown(n);
    }),
    Qt.apply(i, arguments),
    i
  );
}
function Uo() {
  var e = Jv().unknown(void 0),
    t = e.domain,
    r = e.range,
    n = 0,
    i = 1,
    a,
    o,
    u = !1,
    s = 0,
    l = 0,
    c = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length,
      v = i < n,
      y = v ? i : n,
      h = v ? n : i;
    (a = (h - y) / Math.max(1, d - s + l * 2)),
      u && (a = Math.floor(a)),
      (y += (h - y - a * (d - s)) * c),
      (o = a * (1 - s)),
      u && ((y = Math.round(y)), (o = Math.round(o)));
    var w = Hz(d).map(function (p) {
      return y + a * p;
    });
    return r(v ? w.reverse() : w);
  }
  return (
    (e.domain = function (d) {
      return arguments.length ? (t(d), f()) : t();
    }),
    (e.range = function (d) {
      return arguments.length ? (([n, i] = d), (n = +n), (i = +i), f()) : [n, i];
    }),
    (e.rangeRound = function (d) {
      return ([n, i] = d), (n = +n), (i = +i), (u = !0), f();
    }),
    (e.bandwidth = function () {
      return o;
    }),
    (e.step = function () {
      return a;
    }),
    (e.round = function (d) {
      return arguments.length ? ((u = !!d), f()) : u;
    }),
    (e.padding = function (d) {
      return arguments.length ? ((s = Math.min(1, (l = +d))), f()) : s;
    }),
    (e.paddingInner = function (d) {
      return arguments.length ? ((s = Math.min(1, d)), f()) : s;
    }),
    (e.paddingOuter = function (d) {
      return arguments.length ? ((l = +d), f()) : l;
    }),
    (e.align = function (d) {
      return arguments.length ? ((c = Math.max(0, Math.min(1, d))), f()) : c;
    }),
    (e.copy = function () {
      return Uo(t(), [n, i]).round(u).paddingInner(s).paddingOuter(l).align(c);
    }),
    Qt.apply(f(), arguments)
  );
}
function rO(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return rO(t());
    }),
    e
  );
}
function vo() {
  return rO(Uo.apply(null, arguments).paddingInner(1));
}
function Zv(e, t, r) {
  (e.prototype = t.prototype = r), (r.constructor = e);
}
function nO(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function ou() {}
var zo = 0.7,
  pl = 1 / zo,
  Hi = "\\s*([+-]?\\d+)\\s*",
  Wo = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  yr = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  qz = /^#([0-9a-f]{3,8})$/,
  Gz = new RegExp("^rgb\\(" + [Hi, Hi, Hi] + "\\)$"),
  Vz = new RegExp("^rgb\\(" + [yr, yr, yr] + "\\)$"),
  Qz = new RegExp("^rgba\\(" + [Hi, Hi, Hi, Wo] + "\\)$"),
  Yz = new RegExp("^rgba\\(" + [yr, yr, yr, Wo] + "\\)$"),
  Kz = new RegExp("^hsl\\(" + [Wo, yr, yr] + "\\)$"),
  Xz = new RegExp("^hsla\\(" + [Wo, yr, yr, Wo] + "\\)$"),
  K0 = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
Zv(ou, Ho, {
  copy: function (e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable: function () {
    return this.rgb().displayable();
  },
  hex: X0,
  formatHex: X0,
  formatHsl: Jz,
  formatRgb: J0,
  toString: J0,
});
function X0() {
  return this.rgb().formatHex();
}
function Jz() {
  return iO(this).formatHsl();
}
function J0() {
  return this.rgb().formatRgb();
}
function Ho(e) {
  var t, r;
  return (
    (e = (e + "").trim().toLowerCase()),
    (t = qz.exec(e))
      ? ((r = t[1].length),
        (t = parseInt(t[1], 16)),
        r === 6
          ? Z0(t)
          : r === 3
          ? new Ct(((t >> 8) & 15) | ((t >> 4) & 240), ((t >> 4) & 15) | (t & 240), ((t & 15) << 4) | (t & 15), 1)
          : r === 8
          ? Du((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, (t & 255) / 255)
          : r === 4
          ? Du(
              ((t >> 12) & 15) | ((t >> 8) & 240),
              ((t >> 8) & 15) | ((t >> 4) & 240),
              ((t >> 4) & 15) | (t & 240),
              (((t & 15) << 4) | (t & 15)) / 255,
            )
          : null)
      : (t = Gz.exec(e))
      ? new Ct(t[1], t[2], t[3], 1)
      : (t = Vz.exec(e))
      ? new Ct((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
      : (t = Qz.exec(e))
      ? Du(t[1], t[2], t[3], t[4])
      : (t = Yz.exec(e))
      ? Du((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
      : (t = Kz.exec(e))
      ? r1(t[1], t[2] / 100, t[3] / 100, 1)
      : (t = Xz.exec(e))
      ? r1(t[1], t[2] / 100, t[3] / 100, t[4])
      : K0.hasOwnProperty(e)
      ? Z0(K0[e])
      : e === "transparent"
      ? new Ct(NaN, NaN, NaN, 0)
      : null
  );
}
function Z0(e) {
  return new Ct((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function Du(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Ct(e, t, r, n);
}
function Zz(e) {
  return e instanceof ou || (e = Ho(e)), e ? ((e = e.rgb()), new Ct(e.r, e.g, e.b, e.opacity)) : new Ct();
}
function Jh(e, t, r, n) {
  return arguments.length === 1 ? Zz(e) : new Ct(e, t, r, n ?? 1);
}
function Ct(e, t, r, n) {
  (this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n);
}
Zv(
  Ct,
  Jh,
  nO(ou, {
    brighter: function (e) {
      return (e = e == null ? pl : Math.pow(pl, e)), new Ct(this.r * e, this.g * e, this.b * e, this.opacity);
    },
    darker: function (e) {
      return (e = e == null ? zo : Math.pow(zo, e)), new Ct(this.r * e, this.g * e, this.b * e, this.opacity);
    },
    rgb: function () {
      return this;
    },
    displayable: function () {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: e1,
    formatHex: e1,
    formatRgb: t1,
    toString: t1,
  }),
);
function e1() {
  return "#" + Ff(this.r) + Ff(this.g) + Ff(this.b);
}
function t1() {
  var e = this.opacity;
  return (
    (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))),
    (e === 1 ? "rgb(" : "rgba(") +
      Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
      ", " +
      Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
      ", " +
      Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
      (e === 1 ? ")" : ", " + e + ")")
  );
}
function Ff(e) {
  return (e = Math.max(0, Math.min(255, Math.round(e) || 0))), (e < 16 ? "0" : "") + e.toString(16);
}
function r1(e, t, r, n) {
  return n <= 0 ? (e = t = r = NaN) : r <= 0 || r >= 1 ? (e = t = NaN) : t <= 0 && (e = NaN), new cr(e, t, r, n);
}
function iO(e) {
  if (e instanceof cr) return new cr(e.h, e.s, e.l, e.opacity);
  if ((e instanceof ou || (e = Ho(e)), !e)) return new cr();
  if (e instanceof cr) return e;
  e = e.rgb();
  var t = e.r / 255,
    r = e.g / 255,
    n = e.b / 255,
    i = Math.min(t, r, n),
    a = Math.max(t, r, n),
    o = NaN,
    u = a - i,
    s = (a + i) / 2;
  return (
    u
      ? (t === a ? (o = (r - n) / u + (r < n) * 6) : r === a ? (o = (n - t) / u + 2) : (o = (t - r) / u + 4),
        (u /= s < 0.5 ? a + i : 2 - a - i),
        (o *= 60))
      : (u = s > 0 && s < 1 ? 0 : o),
    new cr(o, u, s, e.opacity)
  );
}
function e7(e, t, r, n) {
  return arguments.length === 1 ? iO(e) : new cr(e, t, r, n ?? 1);
}
function cr(e, t, r, n) {
  (this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n);
}
Zv(
  cr,
  e7,
  nO(ou, {
    brighter: function (e) {
      return (e = e == null ? pl : Math.pow(pl, e)), new cr(this.h, this.s, this.l * e, this.opacity);
    },
    darker: function (e) {
      return (e = e == null ? zo : Math.pow(zo, e)), new cr(this.h, this.s, this.l * e, this.opacity);
    },
    rgb: function () {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        r = this.l,
        n = r + (r < 0.5 ? r : 1 - r) * t,
        i = 2 * r - n;
      return new Ct(
        Bf(e >= 240 ? e - 240 : e + 120, i, n),
        Bf(e, i, n),
        Bf(e < 120 ? e + 240 : e - 120, i, n),
        this.opacity,
      );
    },
    displayable: function () {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl: function () {
      var e = this.opacity;
      return (
        (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))),
        (e === 1 ? "hsl(" : "hsla(") +
          (this.h || 0) +
          ", " +
          (this.s || 0) * 100 +
          "%, " +
          (this.l || 0) * 100 +
          "%" +
          (e === 1 ? ")" : ", " + e + ")")
      );
    },
  }),
);
function Bf(e, t, r) {
  return (e < 60 ? t + ((r - t) * e) / 60 : e < 180 ? r : e < 240 ? t + ((r - t) * (240 - e)) / 60 : t) * 255;
}
const ey = (e) => () => e;
function t7(e, t) {
  return function (r) {
    return e + r * t;
  };
}
function r7(e, t, r) {
  return (
    (e = Math.pow(e, r)),
    (t = Math.pow(t, r) - e),
    (r = 1 / r),
    function (n) {
      return Math.pow(e + n * t, r);
    }
  );
}
function n7(e) {
  return (e = +e) == 1
    ? aO
    : function (t, r) {
        return r - t ? r7(t, r, e) : ey(isNaN(t) ? r : t);
      };
}
function aO(e, t) {
  var r = t - e;
  return r ? t7(e, r) : ey(isNaN(e) ? t : e);
}
const n1 = (function e(t) {
  var r = n7(t);
  function n(i, a) {
    var o = r((i = Jh(i)).r, (a = Jh(a)).r),
      u = r(i.g, a.g),
      s = r(i.b, a.b),
      l = aO(i.opacity, a.opacity);
    return function (c) {
      return (i.r = o(c)), (i.g = u(c)), (i.b = s(c)), (i.opacity = l(c)), i + "";
    };
  }
  return (n.gamma = e), n;
})(1);
function i7(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0,
    n = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function a7(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function o7(e, t) {
  var r = t ? t.length : 0,
    n = e ? Math.min(r, e.length) : 0,
    i = new Array(n),
    a = new Array(r),
    o;
  for (o = 0; o < n; ++o) i[o] = Ea(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function (u) {
    for (o = 0; o < n; ++o) a[o] = i[o](u);
    return a;
  };
}
function u7(e, t) {
  var r = new Date();
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return r.setTime(e * (1 - n) + t * n), r;
    }
  );
}
function vl(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return e * (1 - r) + t * r;
    }
  );
}
function s7(e, t) {
  var r = {},
    n = {},
    i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t) i in e ? (r[i] = Ea(e[i], t[i])) : (n[i] = t[i]);
  return function (a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var Zh = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Uf = new RegExp(Zh.source, "g");
function l7(e) {
  return function () {
    return e;
  };
}
function c7(e) {
  return function (t) {
    return e(t) + "";
  };
}
function f7(e, t) {
  var r = (Zh.lastIndex = Uf.lastIndex = 0),
    n,
    i,
    a,
    o = -1,
    u = [],
    s = [];
  for (e = e + "", t = t + ""; (n = Zh.exec(e)) && (i = Uf.exec(t)); )
    (a = i.index) > r && ((a = t.slice(r, a)), u[o] ? (u[o] += a) : (u[++o] = a)),
      (n = n[0]) === (i = i[0])
        ? u[o]
          ? (u[o] += i)
          : (u[++o] = i)
        : ((u[++o] = null), s.push({ i: o, x: vl(n, i) })),
      (r = Uf.lastIndex);
  return (
    r < t.length && ((a = t.slice(r)), u[o] ? (u[o] += a) : (u[++o] = a)),
    u.length < 2
      ? s[0]
        ? c7(s[0].x)
        : l7(t)
      : ((t = s.length),
        function (l) {
          for (var c = 0, f; c < t; ++c) u[(f = s[c]).i] = f.x(l);
          return u.join("");
        })
  );
}
function Ea(e, t) {
  var r = typeof t,
    n;
  return t == null || r === "boolean"
    ? ey(t)
    : (r === "number"
        ? vl
        : r === "string"
        ? (n = Ho(t))
          ? ((t = n), n1)
          : f7
        : t instanceof Ho
        ? n1
        : t instanceof Date
        ? u7
        : a7(t)
        ? i7
        : Array.isArray(t)
        ? o7
        : (typeof t.valueOf != "function" && typeof t.toString != "function") || isNaN(t)
        ? s7
        : vl)(e, t);
}
function ty(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return Math.round(e * (1 - r) + t * r);
    }
  );
}
function d7(e, t) {
  t === void 0 && ((t = e), (e = Ea));
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, (i = t[++r]));
  return function (o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor((o *= n))));
    return a[u](o - u);
  };
}
function h7(e) {
  return function () {
    return e;
  };
}
function yl(e) {
  return +e;
}
var i1 = [0, 1];
function ft(e) {
  return e;
}
function ep(e, t) {
  return (t -= e = +e)
    ? function (r) {
        return (r - e) / t;
      }
    : h7(isNaN(t) ? NaN : 0.5);
}
function p7(e, t) {
  var r;
  return (
    e > t && ((r = e), (e = t), (t = r)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function v7(e, t, r) {
  var n = e[0],
    i = e[1],
    a = t[0],
    o = t[1];
  return (
    i < n ? ((n = ep(i, n)), (a = r(o, a))) : ((n = ep(n, i)), (a = r(a, o))),
    function (u) {
      return a(n(u));
    }
  );
}
function y7(e, t, r) {
  var n = Math.min(e.length, t.length) - 1,
    i = new Array(n),
    a = new Array(n),
    o = -1;
  for (e[n] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse())); ++o < n; )
    (i[o] = ep(e[o], e[o + 1])), (a[o] = r(t[o], t[o + 1]));
  return function (u) {
    var s = au(e, u, 1, n) - 1;
    return a[s](i[s](u));
  };
}
function uu(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function $c() {
  var e = i1,
    t = i1,
    r = Ea,
    n,
    i,
    a,
    o = ft,
    u,
    s,
    l;
  function c() {
    var d = Math.min(e.length, t.length);
    return o !== ft && (o = p7(e[0], e[d - 1])), (u = d > 2 ? y7 : v7), (s = l = null), f;
  }
  function f(d) {
    return d == null || isNaN((d = +d)) ? a : (s || (s = u(e.map(n), t, r)))(n(o(d)));
  }
  return (
    (f.invert = function (d) {
      return o(i((l || (l = u(t, e.map(n), vl)))(d)));
    }),
    (f.domain = function (d) {
      return arguments.length ? ((e = Array.from(d, yl)), c()) : e.slice();
    }),
    (f.range = function (d) {
      return arguments.length ? ((t = Array.from(d)), c()) : t.slice();
    }),
    (f.rangeRound = function (d) {
      return (t = Array.from(d)), (r = ty), c();
    }),
    (f.clamp = function (d) {
      return arguments.length ? ((o = d ? !0 : ft), c()) : o !== ft;
    }),
    (f.interpolate = function (d) {
      return arguments.length ? ((r = d), c()) : r;
    }),
    (f.unknown = function (d) {
      return arguments.length ? ((a = d), f) : a;
    }),
    function (d, v) {
      return (n = d), (i = v), c();
    }
  );
}
function ry() {
  return $c()(ft, ft);
}
function m7(e) {
  return Math.abs((e = Math.round(e))) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function ml(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r,
    n = e.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)];
}
function oa(e) {
  return (e = ml(Math.abs(e))), e ? e[1] : NaN;
}
function g7(e, t) {
  return function (r, n) {
    for (
      var i = r.length, a = [], o = 0, u = e[0], s = 0;
      i > 0 &&
      u > 0 &&
      (s + u + 1 > n && (u = Math.max(1, n - s)), a.push(r.substring((i -= u), i + u)), !((s += u + 1) > n));

    )
      u = e[(o = (o + 1) % e.length)];
    return a.reverse().join(t);
  };
}
function x7(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (r) {
      return e[+r];
    });
  };
}
var w7 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function gl(e) {
  if (!(t = w7.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new ny({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
gl.prototype = ny.prototype;
function ny(e) {
  (this.fill = e.fill === void 0 ? " " : e.fill + ""),
    (this.align = e.align === void 0 ? ">" : e.align + ""),
    (this.sign = e.sign === void 0 ? "-" : e.sign + ""),
    (this.symbol = e.symbol === void 0 ? "" : e.symbol + ""),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? "" : e.type + "");
}
ny.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};
function b7(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        n === 0 && (n = r), (i = r);
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var oO;
function _7(e, t) {
  var r = ml(e, t);
  if (!r) return e + "";
  var n = r[0],
    i = r[1],
    a = i - (oO = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = n.length;
  return a === o
    ? n
    : a > o
    ? n + new Array(a - o + 1).join("0")
    : a > 0
    ? n.slice(0, a) + "." + n.slice(a)
    : "0." + new Array(1 - a).join("0") + ml(e, Math.max(0, t + a - 1))[0];
}
function a1(e, t) {
  var r = ml(e, t);
  if (!r) return e + "";
  var n = r[0],
    i = r[1];
  return i < 0
    ? "0." + new Array(-i).join("0") + n
    : n.length > i + 1
    ? n.slice(0, i + 1) + "." + n.slice(i + 1)
    : n + new Array(i - n.length + 2).join("0");
}
const o1 = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: m7,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => a1(e * 100, t),
  r: a1,
  s: _7,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function u1(e) {
  return e;
}
var s1 = Array.prototype.map,
  l1 = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function S7(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? u1 : g7(s1.call(e.grouping, Number), e.thousands + ""),
    r = e.currency === void 0 ? "" : e.currency[0] + "",
    n = e.currency === void 0 ? "" : e.currency[1] + "",
    i = e.decimal === void 0 ? "." : e.decimal + "",
    a = e.numerals === void 0 ? u1 : x7(s1.call(e.numerals, String)),
    o = e.percent === void 0 ? "%" : e.percent + "",
    u = e.minus === void 0 ? "−" : e.minus + "",
    s = e.nan === void 0 ? "NaN" : e.nan + "";
  function l(f) {
    f = gl(f);
    var d = f.fill,
      v = f.align,
      y = f.sign,
      h = f.symbol,
      w = f.zero,
      p = f.width,
      x = f.comma,
      m = f.precision,
      g = f.trim,
      b = f.type;
    b === "n" ? ((x = !0), (b = "g")) : o1[b] || (m === void 0 && (m = 12), (g = !0), (b = "g")),
      (w || (d === "0" && v === "=")) && ((w = !0), (d = "0"), (v = "="));
    var _ = h === "$" ? r : h === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "",
      S = h === "$" ? n : /[%p]/.test(b) ? o : "",
      O = o1[b],
      E = /[defgprs%]/.test(b);
    m = m === void 0 ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, m)) : Math.max(0, Math.min(20, m));
    function A(k) {
      var C = _,
        M = S,
        I,
        D,
        N;
      if (b === "c") (M = O(k) + M), (k = "");
      else {
        k = +k;
        var W = k < 0 || 1 / k < 0;
        if (
          ((k = isNaN(k) ? s : O(Math.abs(k), m)),
          g && (k = b7(k)),
          W && +k == 0 && y !== "+" && (W = !1),
          (C = (W ? (y === "(" ? y : u) : y === "-" || y === "(" ? "" : y) + C),
          (M = (b === "s" ? l1[8 + oO / 3] : "") + M + (W && y === "(" ? ")" : "")),
          E)
        ) {
          for (I = -1, D = k.length; ++I < D; )
            if (((N = k.charCodeAt(I)), 48 > N || N > 57)) {
              (M = (N === 46 ? i + k.slice(I + 1) : k.slice(I)) + M), (k = k.slice(0, I));
              break;
            }
        }
      }
      x && !w && (k = t(k, 1 / 0));
      var P = C.length + k.length + M.length,
        j = P < p ? new Array(p - P + 1).join(d) : "";
      switch ((x && w && ((k = t(j + k, j.length ? p - M.length : 1 / 0)), (j = "")), v)) {
        case "<":
          k = C + k + M + j;
          break;
        case "=":
          k = C + j + k + M;
          break;
        case "^":
          k = j.slice(0, (P = j.length >> 1)) + C + k + M + j.slice(P);
          break;
        default:
          k = j + C + k + M;
          break;
      }
      return a(k);
    }
    return (
      (A.toString = function () {
        return f + "";
      }),
      A
    );
  }
  function c(f, d) {
    var v = l(((f = gl(f)), (f.type = "f"), f)),
      y = Math.max(-8, Math.min(8, Math.floor(oa(d) / 3))) * 3,
      h = Math.pow(10, -y),
      w = l1[8 + y / 3];
    return function (p) {
      return v(h * p) + w;
    };
  }
  return { format: l, formatPrefix: c };
}
var Lu, iy, uO;
O7({ thousands: ",", grouping: [3], currency: ["$", ""] });
function O7(e) {
  return (Lu = S7(e)), (iy = Lu.format), (uO = Lu.formatPrefix), Lu;
}
function E7(e) {
  return Math.max(0, -oa(Math.abs(e)));
}
function k7(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(oa(t) / 3))) * 3 - oa(Math.abs(e)));
}
function A7(e, t) {
  return (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, oa(t) - oa(e)) + 1;
}
function sO(e, t, r, n) {
  var i = Kh(e, t, r),
    a;
  switch (((n = gl(n ?? ",f")), n.type)) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN((a = k7(i, o))) && (n.precision = a), uO(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null &&
        !isNaN((a = A7(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN((a = E7(i))) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return iy(n);
}
function kn(e) {
  var t = e.domain;
  return (
    (e.ticks = function (r) {
      var n = t();
      return Yh(n[0], n[n.length - 1], r ?? 10);
    }),
    (e.tickFormat = function (r, n) {
      var i = t();
      return sO(i[0], i[i.length - 1], r ?? 10, n);
    }),
    (e.nice = function (r) {
      r == null && (r = 10);
      var n = t(),
        i = 0,
        a = n.length - 1,
        o = n[i],
        u = n[a],
        s,
        l,
        c = 10;
      for (u < o && ((l = o), (o = u), (u = l), (l = i), (i = a), (a = l)); c-- > 0; ) {
        if (((l = eO(o, u, r)), l === s)) return (n[i] = o), (n[a] = u), t(n);
        if (l > 0) (o = Math.floor(o / l) * l), (u = Math.ceil(u / l) * l);
        else if (l < 0) (o = Math.ceil(o * l) / l), (u = Math.floor(u * l) / l);
        else break;
        s = l;
      }
      return e;
    }),
    e
  );
}
function xl() {
  var e = ry();
  return (
    (e.copy = function () {
      return uu(e, xl());
    }),
    Qt.apply(e, arguments),
    kn(e)
  );
}
function lO(e) {
  var t;
  function r(n) {
    return n == null || isNaN((n = +n)) ? t : n;
  }
  return (
    (r.invert = r),
    (r.domain = r.range =
      function (n) {
        return arguments.length ? ((e = Array.from(n, yl)), r) : e.slice();
      }),
    (r.unknown = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.copy = function () {
      return lO(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, yl) : [0, 1]),
    kn(r)
  );
}
function cO(e, t) {
  e = e.slice();
  var r = 0,
    n = e.length - 1,
    i = e[r],
    a = e[n],
    o;
  return a < i && ((o = r), (r = n), (n = o), (o = i), (i = a), (a = o)), (e[r] = t.floor(i)), (e[n] = t.ceil(a)), e;
}
function c1(e) {
  return Math.log(e);
}
function f1(e) {
  return Math.exp(e);
}
function T7(e) {
  return -Math.log(-e);
}
function C7(e) {
  return -Math.exp(-e);
}
function P7(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function M7(e) {
  return e === 10
    ? P7
    : e === Math.E
    ? Math.exp
    : function (t) {
        return Math.pow(e, t);
      };
}
function $7(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)),
        function (t) {
          return Math.log(t) / e;
        });
}
function d1(e) {
  return function (t) {
    return -e(-t);
  };
}
function ay(e) {
  var t = e(c1, f1),
    r = t.domain,
    n = 10,
    i,
    a;
  function o() {
    return (i = $7(n)), (a = M7(n)), r()[0] < 0 ? ((i = d1(i)), (a = d1(a)), e(T7, C7)) : e(c1, f1), t;
  }
  return (
    (t.base = function (u) {
      return arguments.length ? ((n = +u), o()) : n;
    }),
    (t.domain = function (u) {
      return arguments.length ? (r(u), o()) : r();
    }),
    (t.ticks = function (u) {
      var s = r(),
        l = s[0],
        c = s[s.length - 1],
        f;
      (f = c < l) && ((d = l), (l = c), (c = d));
      var d = i(l),
        v = i(c),
        y,
        h,
        w,
        p = u == null ? 10 : +u,
        x = [];
      if (!(n % 1) && v - d < p) {
        if (((d = Math.floor(d)), (v = Math.ceil(v)), l > 0)) {
          for (; d <= v; ++d)
            for (h = 1, y = a(d); h < n; ++h)
              if (((w = y * h), !(w < l))) {
                if (w > c) break;
                x.push(w);
              }
        } else
          for (; d <= v; ++d)
            for (h = n - 1, y = a(d); h >= 1; --h)
              if (((w = y * h), !(w < l))) {
                if (w > c) break;
                x.push(w);
              }
        x.length * 2 < p && (x = Yh(l, c, p));
      } else x = Yh(d, v, Math.min(v - d, p)).map(a);
      return f ? x.reverse() : x;
    }),
    (t.tickFormat = function (u, s) {
      if ((s == null && (s = n === 10 ? ".0e" : ","), typeof s != "function" && (s = iy(s)), u === 1 / 0)) return s;
      u == null && (u = 10);
      var l = Math.max(1, (n * u) / t.ticks().length);
      return function (c) {
        var f = c / a(Math.round(i(c)));
        return f * n < n - 0.5 && (f *= n), f <= l ? s(c) : "";
      };
    }),
    (t.nice = function () {
      return r(
        cO(r(), {
          floor: function (u) {
            return a(Math.floor(i(u)));
          },
          ceil: function (u) {
            return a(Math.ceil(i(u)));
          },
        }),
      );
    }),
    t
  );
}
function fO() {
  var e = ay($c()).domain([1, 10]);
  return (
    (e.copy = function () {
      return uu(e, fO()).base(e.base());
    }),
    Qt.apply(e, arguments),
    e
  );
}
function h1(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function p1(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function oy(e) {
  var t = 1,
    r = e(h1(t), p1(t));
  return (
    (r.constant = function (n) {
      return arguments.length ? e(h1((t = +n)), p1(t)) : t;
    }),
    kn(r)
  );
}
function dO() {
  var e = oy($c());
  return (
    (e.copy = function () {
      return uu(e, dO()).constant(e.constant());
    }),
    Qt.apply(e, arguments)
  );
}
function v1(e) {
  return function (t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function I7(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function N7(e) {
  return e < 0 ? -e * e : e * e;
}
function uy(e) {
  var t = e(ft, ft),
    r = 1;
  function n() {
    return r === 1 ? e(ft, ft) : r === 0.5 ? e(I7, N7) : e(v1(r), v1(1 / r));
  }
  return (
    (t.exponent = function (i) {
      return arguments.length ? ((r = +i), n()) : r;
    }),
    kn(t)
  );
}
function sy() {
  var e = uy($c());
  return (
    (e.copy = function () {
      return uu(e, sy()).exponent(e.exponent());
    }),
    Qt.apply(e, arguments),
    e
  );
}
function R7() {
  return sy.apply(null, arguments).exponent(0.5);
}
function y1(e) {
  return Math.sign(e) * e * e;
}
function j7(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function hO() {
  var e = ry(),
    t = [0, 1],
    r = !1,
    n;
  function i(a) {
    var o = j7(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return (
    (i.invert = function (a) {
      return e.invert(y1(a));
    }),
    (i.domain = function (a) {
      return arguments.length ? (e.domain(a), i) : e.domain();
    }),
    (i.range = function (a) {
      return arguments.length ? (e.range((t = Array.from(a, yl)).map(y1)), i) : t.slice();
    }),
    (i.rangeRound = function (a) {
      return i.range(a).round(!0);
    }),
    (i.round = function (a) {
      return arguments.length ? ((r = !!a), i) : r;
    }),
    (i.clamp = function (a) {
      return arguments.length ? (e.clamp(a), i) : e.clamp();
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n;
    }),
    (i.copy = function () {
      return hO(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
    }),
    Qt.apply(i, arguments),
    kn(i)
  );
}
function pO() {
  var e = [],
    t = [],
    r = [],
    n;
  function i() {
    var o = 0,
      u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = Wz(e, o / u);
    return a;
  }
  function a(o) {
    return o == null || isNaN((o = +o)) ? n : t[au(r, o)];
  }
  return (
    (a.invertExtent = function (o) {
      var u = t.indexOf(o);
      return u < 0 ? [NaN, NaN] : [u > 0 ? r[u - 1] : e[0], u < r.length ? r[u] : e[e.length - 1]];
    }),
    (a.domain = function (o) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let u of o) u != null && !isNaN((u = +u)) && e.push(u);
      return e.sort(iu), i();
    }),
    (a.range = function (o) {
      return arguments.length ? ((t = Array.from(o)), i()) : t.slice();
    }),
    (a.unknown = function (o) {
      return arguments.length ? ((n = o), a) : n;
    }),
    (a.quantiles = function () {
      return r.slice();
    }),
    (a.copy = function () {
      return pO().domain(e).range(t).unknown(n);
    }),
    Qt.apply(a, arguments)
  );
}
function vO() {
  var e = 0,
    t = 1,
    r = 1,
    n = [0.5],
    i = [0, 1],
    a;
  function o(s) {
    return s != null && s <= s ? i[au(n, s, 0, r)] : a;
  }
  function u() {
    var s = -1;
    for (n = new Array(r); ++s < r; ) n[s] = ((s + 1) * t - (s - r) * e) / (r + 1);
    return o;
  }
  return (
    (o.domain = function (s) {
      return arguments.length ? (([e, t] = s), (e = +e), (t = +t), u()) : [e, t];
    }),
    (o.range = function (s) {
      return arguments.length ? ((r = (i = Array.from(s)).length - 1), u()) : i.slice();
    }),
    (o.invertExtent = function (s) {
      var l = i.indexOf(s);
      return l < 0 ? [NaN, NaN] : l < 1 ? [e, n[0]] : l >= r ? [n[r - 1], t] : [n[l - 1], n[l]];
    }),
    (o.unknown = function (s) {
      return arguments.length && (a = s), o;
    }),
    (o.thresholds = function () {
      return n.slice();
    }),
    (o.copy = function () {
      return vO().domain([e, t]).range(i).unknown(a);
    }),
    Qt.apply(kn(o), arguments)
  );
}
function yO() {
  var e = [0.5],
    t = [0, 1],
    r,
    n = 1;
  function i(a) {
    return a != null && a <= a ? t[au(e, a, 0, n)] : r;
  }
  return (
    (i.domain = function (a) {
      return arguments.length ? ((e = Array.from(a)), (n = Math.min(e.length, t.length - 1)), i) : e.slice();
    }),
    (i.range = function (a) {
      return arguments.length ? ((t = Array.from(a)), (n = Math.min(e.length, t.length - 1)), i) : t.slice();
    }),
    (i.invertExtent = function (a) {
      var o = t.indexOf(a);
      return [e[o - 1], e[o]];
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((r = a), i) : r;
    }),
    (i.copy = function () {
      return yO().domain(e).range(t).unknown(r);
    }),
    Qt.apply(i, arguments)
  );
}
var zf = new Date(),
  Wf = new Date();
function Qe(e, t, r, n) {
  function i(a) {
    return e((a = arguments.length === 0 ? new Date() : new Date(+a))), a;
  }
  return (
    (i.floor = function (a) {
      return e((a = new Date(+a))), a;
    }),
    (i.ceil = function (a) {
      return e((a = new Date(a - 1))), t(a, 1), e(a), a;
    }),
    (i.round = function (a) {
      var o = i(a),
        u = i.ceil(a);
      return a - o < u - a ? o : u;
    }),
    (i.offset = function (a, o) {
      return t((a = new Date(+a)), o == null ? 1 : Math.floor(o)), a;
    }),
    (i.range = function (a, o, u) {
      var s = [],
        l;
      if (((a = i.ceil(a)), (u = u == null ? 1 : Math.floor(u)), !(a < o) || !(u > 0))) return s;
      do s.push((l = new Date(+a))), t(a, u), e(a);
      while (l < a && a < o);
      return s;
    }),
    (i.filter = function (a) {
      return Qe(
        function (o) {
          if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
        },
        function (o, u) {
          if (o >= o)
            if (u < 0) for (; ++u <= 0; ) for (; t(o, -1), !a(o); );
            else for (; --u >= 0; ) for (; t(o, 1), !a(o); );
        },
      );
    }),
    r &&
      ((i.count = function (a, o) {
        return zf.setTime(+a), Wf.setTime(+o), e(zf), e(Wf), Math.floor(r(zf, Wf));
      }),
      (i.every = function (a) {
        return (
          (a = Math.floor(a)),
          !isFinite(a) || !(a > 0)
            ? null
            : a > 1
            ? i.filter(
                n
                  ? function (o) {
                      return n(o) % a === 0;
                    }
                  : function (o) {
                      return i.count(0, o) % a === 0;
                    },
              )
            : i
        );
      })),
    i
  );
}
var wl = Qe(
  function () {},
  function (e, t) {
    e.setTime(+e + t);
  },
  function (e, t) {
    return t - e;
  },
);
wl.every = function (e) {
  return (
    (e = Math.floor(e)),
    !isFinite(e) || !(e > 0)
      ? null
      : e > 1
      ? Qe(
          function (t) {
            t.setTime(Math.floor(t / e) * e);
          },
          function (t, r) {
            t.setTime(+t + r * e);
          },
          function (t, r) {
            return (r - t) / e;
          },
        )
      : wl
  );
};
const D7 = wl;
wl.range;
const Ar = 1e3,
  zt = Ar * 60,
  Tr = zt * 60,
  ti = Tr * 24,
  ly = ti * 7,
  m1 = ti * 30,
  Hf = ti * 365;
var mO = Qe(
  function (e) {
    e.setTime(e - e.getMilliseconds());
  },
  function (e, t) {
    e.setTime(+e + t * Ar);
  },
  function (e, t) {
    return (t - e) / Ar;
  },
  function (e) {
    return e.getUTCSeconds();
  },
);
const Ni = mO;
mO.range;
var gO = Qe(
  function (e) {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ar);
  },
  function (e, t) {
    e.setTime(+e + t * zt);
  },
  function (e, t) {
    return (t - e) / zt;
  },
  function (e) {
    return e.getMinutes();
  },
);
const xO = gO;
gO.range;
var wO = Qe(
  function (e) {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ar - e.getMinutes() * zt);
  },
  function (e, t) {
    e.setTime(+e + t * Tr);
  },
  function (e, t) {
    return (t - e) / Tr;
  },
  function (e) {
    return e.getHours();
  },
);
const bO = wO;
wO.range;
var _O = Qe(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * zt) / ti,
  (e) => e.getDate() - 1,
);
const Ic = _O;
_O.range;
function hi(e) {
  return Qe(
    function (t) {
      t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)), t.setHours(0, 0, 0, 0);
    },
    function (t, r) {
      t.setDate(t.getDate() + r * 7);
    },
    function (t, r) {
      return (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * zt) / ly;
    },
  );
}
var Nc = hi(0),
  bl = hi(1),
  L7 = hi(2),
  F7 = hi(3),
  ua = hi(4),
  B7 = hi(5),
  U7 = hi(6);
Nc.range;
bl.range;
L7.range;
F7.range;
ua.range;
B7.range;
U7.range;
var SO = Qe(
  function (e) {
    e.setDate(1), e.setHours(0, 0, 0, 0);
  },
  function (e, t) {
    e.setMonth(e.getMonth() + t);
  },
  function (e, t) {
    return t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12;
  },
  function (e) {
    return e.getMonth();
  },
);
const OO = SO;
SO.range;
var cy = Qe(
  function (e) {
    e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
  },
  function (e, t) {
    e.setFullYear(e.getFullYear() + t);
  },
  function (e, t) {
    return t.getFullYear() - e.getFullYear();
  },
  function (e) {
    return e.getFullYear();
  },
);
cy.every = function (e) {
  return !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Qe(
        function (t) {
          t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
        },
        function (t, r) {
          t.setFullYear(t.getFullYear() + r * e);
        },
      );
};
const ri = cy;
cy.range;
var EO = Qe(
  function (e) {
    e.setUTCSeconds(0, 0);
  },
  function (e, t) {
    e.setTime(+e + t * zt);
  },
  function (e, t) {
    return (t - e) / zt;
  },
  function (e) {
    return e.getUTCMinutes();
  },
);
const kO = EO;
EO.range;
var AO = Qe(
  function (e) {
    e.setUTCMinutes(0, 0, 0);
  },
  function (e, t) {
    e.setTime(+e + t * Tr);
  },
  function (e, t) {
    return (t - e) / Tr;
  },
  function (e) {
    return e.getUTCHours();
  },
);
const TO = AO;
AO.range;
var CO = Qe(
  function (e) {
    e.setUTCHours(0, 0, 0, 0);
  },
  function (e, t) {
    e.setUTCDate(e.getUTCDate() + t);
  },
  function (e, t) {
    return (t - e) / ti;
  },
  function (e) {
    return e.getUTCDate() - 1;
  },
);
const Rc = CO;
CO.range;
function pi(e) {
  return Qe(
    function (t) {
      t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)), t.setUTCHours(0, 0, 0, 0);
    },
    function (t, r) {
      t.setUTCDate(t.getUTCDate() + r * 7);
    },
    function (t, r) {
      return (r - t) / ly;
    },
  );
}
var jc = pi(0),
  _l = pi(1),
  z7 = pi(2),
  W7 = pi(3),
  sa = pi(4),
  H7 = pi(5),
  q7 = pi(6);
jc.range;
_l.range;
z7.range;
W7.range;
sa.range;
H7.range;
q7.range;
var PO = Qe(
  function (e) {
    e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
  },
  function (e, t) {
    e.setUTCMonth(e.getUTCMonth() + t);
  },
  function (e, t) {
    return t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12;
  },
  function (e) {
    return e.getUTCMonth();
  },
);
const MO = PO;
PO.range;
var fy = Qe(
  function (e) {
    e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  },
  function (e, t) {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  function (e, t) {
    return t.getUTCFullYear() - e.getUTCFullYear();
  },
  function (e) {
    return e.getUTCFullYear();
  },
);
fy.every = function (e) {
  return !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Qe(
        function (t) {
          t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
        },
        function (t, r) {
          t.setUTCFullYear(t.getUTCFullYear() + r * e);
        },
      );
};
const ni = fy;
fy.range;
function $O(e, t, r, n, i, a) {
  const o = [
    [Ni, 1, Ar],
    [Ni, 5, 5 * Ar],
    [Ni, 15, 15 * Ar],
    [Ni, 30, 30 * Ar],
    [a, 1, zt],
    [a, 5, 5 * zt],
    [a, 15, 15 * zt],
    [a, 30, 30 * zt],
    [i, 1, Tr],
    [i, 3, 3 * Tr],
    [i, 6, 6 * Tr],
    [i, 12, 12 * Tr],
    [n, 1, ti],
    [n, 2, 2 * ti],
    [r, 1, ly],
    [t, 1, m1],
    [t, 3, 3 * m1],
    [e, 1, Hf],
  ];
  function u(l, c, f) {
    const d = c < l;
    d && ([l, c] = [c, l]);
    const v = f && typeof f.range == "function" ? f : s(l, c, f),
      y = v ? v.range(l, +c + 1) : [];
    return d ? y.reverse() : y;
  }
  function s(l, c, f) {
    const d = Math.abs(c - l) / f,
      v = Xv(([, , w]) => w).right(o, d);
    if (v === o.length) return e.every(Kh(l / Hf, c / Hf, f));
    if (v === 0) return D7.every(Math.max(Kh(l, c, f), 1));
    const [y, h] = o[d / o[v - 1][2] < o[v][2] / d ? v - 1 : v];
    return y.every(h);
  }
  return [u, s];
}
const [G7, V7] = $O(ni, MO, jc, Rc, TO, kO),
  [Q7, Y7] = $O(ri, OO, Nc, Ic, bO, xO);
function qf(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Gf(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Ga(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function K7(e) {
  var t = e.dateTime,
    r = e.date,
    n = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    u = e.months,
    s = e.shortMonths,
    l = Va(i),
    c = Qa(i),
    f = Va(a),
    d = Qa(a),
    v = Va(o),
    y = Qa(o),
    h = Va(u),
    w = Qa(u),
    p = Va(s),
    x = Qa(s),
    m = {
      a: W,
      A: P,
      b: j,
      B: z,
      c: null,
      d: S1,
      e: S1,
      f: x9,
      g: C9,
      G: M9,
      H: y9,
      I: m9,
      j: g9,
      L: IO,
      m: w9,
      M: b9,
      p: V,
      q: Q,
      Q: k1,
      s: A1,
      S: _9,
      u: S9,
      U: O9,
      V: E9,
      w: k9,
      W: A9,
      x: null,
      X: null,
      y: T9,
      Y: P9,
      Z: $9,
      "%": E1,
    },
    g = {
      a: X,
      A: oe,
      b: $e,
      B: Ae,
      c: null,
      d: O1,
      e: O1,
      f: j9,
      g: G9,
      G: Q9,
      H: I9,
      I: N9,
      j: R9,
      L: RO,
      m: D9,
      M: L9,
      p: St,
      q: te,
      Q: k1,
      s: A1,
      S: F9,
      u: B9,
      U: U9,
      V: z9,
      w: W9,
      W: H9,
      x: null,
      X: null,
      y: q9,
      Y: V9,
      Z: Y9,
      "%": E1,
    },
    b = {
      a: A,
      A: k,
      b: C,
      B: M,
      c: I,
      d: b1,
      e: b1,
      f: d9,
      g: w1,
      G: x1,
      H: _1,
      I: _1,
      j: s9,
      L: f9,
      m: u9,
      M: l9,
      p: E,
      q: o9,
      Q: p9,
      s: v9,
      S: c9,
      u: t9,
      U: r9,
      V: n9,
      w: e9,
      W: i9,
      x: D,
      X: N,
      y: w1,
      Y: x1,
      Z: a9,
      "%": h9,
    };
  (m.x = _(r, m)), (m.X = _(n, m)), (m.c = _(t, m)), (g.x = _(r, g)), (g.X = _(n, g)), (g.c = _(t, g));
  function _(U, K) {
    return function (J) {
      var L = [],
        ce = -1,
        re = 0,
        Te = U.length,
        Ne,
        or,
        Tn;
      for (J instanceof Date || (J = new Date(+J)); ++ce < Te; )
        U.charCodeAt(ce) === 37 &&
          (L.push(U.slice(re, ce)),
          (or = g1[(Ne = U.charAt(++ce))]) != null ? (Ne = U.charAt(++ce)) : (or = Ne === "e" ? " " : "0"),
          (Tn = K[Ne]) && (Ne = Tn(J, or)),
          L.push(Ne),
          (re = ce + 1));
      return L.push(U.slice(re, ce)), L.join("");
    };
  }
  function S(U, K) {
    return function (J) {
      var L = Ga(1900, void 0, 1),
        ce = O(L, U, (J += ""), 0),
        re,
        Te;
      if (ce != J.length) return null;
      if ("Q" in L) return new Date(L.Q);
      if ("s" in L) return new Date(L.s * 1e3 + ("L" in L ? L.L : 0));
      if (
        (K && !("Z" in L) && (L.Z = 0),
        "p" in L && (L.H = (L.H % 12) + L.p * 12),
        L.m === void 0 && (L.m = "q" in L ? L.q : 0),
        "V" in L)
      ) {
        if (L.V < 1 || L.V > 53) return null;
        "w" in L || (L.w = 1),
          "Z" in L
            ? ((re = Gf(Ga(L.y, 0, 1))),
              (Te = re.getUTCDay()),
              (re = Te > 4 || Te === 0 ? _l.ceil(re) : _l(re)),
              (re = Rc.offset(re, (L.V - 1) * 7)),
              (L.y = re.getUTCFullYear()),
              (L.m = re.getUTCMonth()),
              (L.d = re.getUTCDate() + ((L.w + 6) % 7)))
            : ((re = qf(Ga(L.y, 0, 1))),
              (Te = re.getDay()),
              (re = Te > 4 || Te === 0 ? bl.ceil(re) : bl(re)),
              (re = Ic.offset(re, (L.V - 1) * 7)),
              (L.y = re.getFullYear()),
              (L.m = re.getMonth()),
              (L.d = re.getDate() + ((L.w + 6) % 7)));
      } else
        ("W" in L || "U" in L) &&
          ("w" in L || (L.w = "u" in L ? L.u % 7 : "W" in L ? 1 : 0),
          (Te = "Z" in L ? Gf(Ga(L.y, 0, 1)).getUTCDay() : qf(Ga(L.y, 0, 1)).getDay()),
          (L.m = 0),
          (L.d = "W" in L ? ((L.w + 6) % 7) + L.W * 7 - ((Te + 5) % 7) : L.w + L.U * 7 - ((Te + 6) % 7)));
      return "Z" in L ? ((L.H += (L.Z / 100) | 0), (L.M += L.Z % 100), Gf(L)) : qf(L);
    };
  }
  function O(U, K, J, L) {
    for (var ce = 0, re = K.length, Te = J.length, Ne, or; ce < re; ) {
      if (L >= Te) return -1;
      if (((Ne = K.charCodeAt(ce++)), Ne === 37)) {
        if (((Ne = K.charAt(ce++)), (or = b[Ne in g1 ? K.charAt(ce++) : Ne]), !or || (L = or(U, J, L)) < 0)) return -1;
      } else if (Ne != J.charCodeAt(L++)) return -1;
    }
    return L;
  }
  function E(U, K, J) {
    var L = l.exec(K.slice(J));
    return L ? ((U.p = c.get(L[0].toLowerCase())), J + L[0].length) : -1;
  }
  function A(U, K, J) {
    var L = v.exec(K.slice(J));
    return L ? ((U.w = y.get(L[0].toLowerCase())), J + L[0].length) : -1;
  }
  function k(U, K, J) {
    var L = f.exec(K.slice(J));
    return L ? ((U.w = d.get(L[0].toLowerCase())), J + L[0].length) : -1;
  }
  function C(U, K, J) {
    var L = p.exec(K.slice(J));
    return L ? ((U.m = x.get(L[0].toLowerCase())), J + L[0].length) : -1;
  }
  function M(U, K, J) {
    var L = h.exec(K.slice(J));
    return L ? ((U.m = w.get(L[0].toLowerCase())), J + L[0].length) : -1;
  }
  function I(U, K, J) {
    return O(U, t, K, J);
  }
  function D(U, K, J) {
    return O(U, r, K, J);
  }
  function N(U, K, J) {
    return O(U, n, K, J);
  }
  function W(U) {
    return o[U.getDay()];
  }
  function P(U) {
    return a[U.getDay()];
  }
  function j(U) {
    return s[U.getMonth()];
  }
  function z(U) {
    return u[U.getMonth()];
  }
  function V(U) {
    return i[+(U.getHours() >= 12)];
  }
  function Q(U) {
    return 1 + ~~(U.getMonth() / 3);
  }
  function X(U) {
    return o[U.getUTCDay()];
  }
  function oe(U) {
    return a[U.getUTCDay()];
  }
  function $e(U) {
    return s[U.getUTCMonth()];
  }
  function Ae(U) {
    return u[U.getUTCMonth()];
  }
  function St(U) {
    return i[+(U.getUTCHours() >= 12)];
  }
  function te(U) {
    return 1 + ~~(U.getUTCMonth() / 3);
  }
  return {
    format: function (U) {
      var K = _((U += ""), m);
      return (
        (K.toString = function () {
          return U;
        }),
        K
      );
    },
    parse: function (U) {
      var K = S((U += ""), !1);
      return (
        (K.toString = function () {
          return U;
        }),
        K
      );
    },
    utcFormat: function (U) {
      var K = _((U += ""), g);
      return (
        (K.toString = function () {
          return U;
        }),
        K
      );
    },
    utcParse: function (U) {
      var K = S((U += ""), !0);
      return (
        (K.toString = function () {
          return U;
        }),
        K
      );
    },
  };
}
var g1 = { "-": "", _: " ", 0: "0" },
  Ye = /^\s*\d+/,
  X7 = /^%/,
  J7 = /[\\^$*+?|[\]().{}]/g;
function ue(e, t, r) {
  var n = e < 0 ? "-" : "",
    i = (n ? -e : e) + "",
    a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function Z7(e) {
  return e.replace(J7, "\\$&");
}
function Va(e) {
  return new RegExp("^(?:" + e.map(Z7).join("|") + ")", "i");
}
function Qa(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function e9(e, t, r) {
  var n = Ye.exec(t.slice(r, r + 1));
  return n ? ((e.w = +n[0]), r + n[0].length) : -1;
}
function t9(e, t, r) {
  var n = Ye.exec(t.slice(r, r + 1));
  return n ? ((e.u = +n[0]), r + n[0].length) : -1;
}
function r9(e, t, r) {
  var n = Ye.exec(t.slice(r, r + 2));
  return n ? ((e.U = +n[0]), r + n[0].length) : -1;
}
function n9(e, t, r) {
  var n = Ye.exec(t.slice(r, r + 2));
  return n ? ((e.V = +n[0]), r + n[0].length) : -1;
}
function i9(e, t, r) {
  var n = Ye.exec(t.slice(r, r + 2));
  return n ? ((e.W = +n[0]), r + n[0].length) : -1;
}
function x1(e, t, r) {
  var n = Ye.exec(t.slice(r, r + 4));
  return n ? ((e.y = +n[0]), r + n[0].length) : -1;
}
function w1(e, t, r) {
  var n = Ye.exec(t.slice(r, r + 2));
  return n ? ((e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length) : -1;
}
function a9(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? ((e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length) : -1;
}
function o9(e, t, r) {
  var n = Ye.exec(t.slice(r, r + 1));
  return n ? ((e.q = n[0] * 3 - 3), r + n[0].length) : -1;
}
function u9(e, t, r) {
  var n = Ye.exec(t.slice(r, r + 2));
  return n ? ((e.m = n[0] - 1), r + n[0].length) : -1;
}
function b1(e, t, r) {
  var n = Ye.exec(t.slice(r, r + 2));
  return n ? ((e.d = +n[0]), r + n[0].length) : -1;
}
function s9(e, t, r) {
  var n = Ye.exec(t.slice(r, r + 3));
  return n ? ((e.m = 0), (e.d = +n[0]), r + n[0].length) : -1;
}
function _1(e, t, r) {
  var n = Ye.exec(t.slice(r, r + 2));
  return n ? ((e.H = +n[0]), r + n[0].length) : -1;
}
function l9(e, t, r) {
  var n = Ye.exec(t.slice(r, r + 2));
  return n ? ((e.M = +n[0]), r + n[0].length) : -1;
}
function c9(e, t, r) {
  var n = Ye.exec(t.slice(r, r + 2));
  return n ? ((e.S = +n[0]), r + n[0].length) : -1;
}
function f9(e, t, r) {
  var n = Ye.exec(t.slice(r, r + 3));
  return n ? ((e.L = +n[0]), r + n[0].length) : -1;
}
function d9(e, t, r) {
  var n = Ye.exec(t.slice(r, r + 6));
  return n ? ((e.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
}
function h9(e, t, r) {
  var n = X7.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function p9(e, t, r) {
  var n = Ye.exec(t.slice(r));
  return n ? ((e.Q = +n[0]), r + n[0].length) : -1;
}
function v9(e, t, r) {
  var n = Ye.exec(t.slice(r));
  return n ? ((e.s = +n[0]), r + n[0].length) : -1;
}
function S1(e, t) {
  return ue(e.getDate(), t, 2);
}
function y9(e, t) {
  return ue(e.getHours(), t, 2);
}
function m9(e, t) {
  return ue(e.getHours() % 12 || 12, t, 2);
}
function g9(e, t) {
  return ue(1 + Ic.count(ri(e), e), t, 3);
}
function IO(e, t) {
  return ue(e.getMilliseconds(), t, 3);
}
function x9(e, t) {
  return IO(e, t) + "000";
}
function w9(e, t) {
  return ue(e.getMonth() + 1, t, 2);
}
function b9(e, t) {
  return ue(e.getMinutes(), t, 2);
}
function _9(e, t) {
  return ue(e.getSeconds(), t, 2);
}
function S9(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function O9(e, t) {
  return ue(Nc.count(ri(e) - 1, e), t, 2);
}
function NO(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? ua(e) : ua.ceil(e);
}
function E9(e, t) {
  return (e = NO(e)), ue(ua.count(ri(e), e) + (ri(e).getDay() === 4), t, 2);
}
function k9(e) {
  return e.getDay();
}
function A9(e, t) {
  return ue(bl.count(ri(e) - 1, e), t, 2);
}
function T9(e, t) {
  return ue(e.getFullYear() % 100, t, 2);
}
function C9(e, t) {
  return (e = NO(e)), ue(e.getFullYear() % 100, t, 2);
}
function P9(e, t) {
  return ue(e.getFullYear() % 1e4, t, 4);
}
function M9(e, t) {
  var r = e.getDay();
  return (e = r >= 4 || r === 0 ? ua(e) : ua.ceil(e)), ue(e.getFullYear() % 1e4, t, 4);
}
function $9(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : ((t *= -1), "+")) + ue((t / 60) | 0, "0", 2) + ue(t % 60, "0", 2);
}
function O1(e, t) {
  return ue(e.getUTCDate(), t, 2);
}
function I9(e, t) {
  return ue(e.getUTCHours(), t, 2);
}
function N9(e, t) {
  return ue(e.getUTCHours() % 12 || 12, t, 2);
}
function R9(e, t) {
  return ue(1 + Rc.count(ni(e), e), t, 3);
}
function RO(e, t) {
  return ue(e.getUTCMilliseconds(), t, 3);
}
function j9(e, t) {
  return RO(e, t) + "000";
}
function D9(e, t) {
  return ue(e.getUTCMonth() + 1, t, 2);
}
function L9(e, t) {
  return ue(e.getUTCMinutes(), t, 2);
}
function F9(e, t) {
  return ue(e.getUTCSeconds(), t, 2);
}
function B9(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function U9(e, t) {
  return ue(jc.count(ni(e) - 1, e), t, 2);
}
function jO(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? sa(e) : sa.ceil(e);
}
function z9(e, t) {
  return (e = jO(e)), ue(sa.count(ni(e), e) + (ni(e).getUTCDay() === 4), t, 2);
}
function W9(e) {
  return e.getUTCDay();
}
function H9(e, t) {
  return ue(_l.count(ni(e) - 1, e), t, 2);
}
function q9(e, t) {
  return ue(e.getUTCFullYear() % 100, t, 2);
}
function G9(e, t) {
  return (e = jO(e)), ue(e.getUTCFullYear() % 100, t, 2);
}
function V9(e, t) {
  return ue(e.getUTCFullYear() % 1e4, t, 4);
}
function Q9(e, t) {
  var r = e.getUTCDay();
  return (e = r >= 4 || r === 0 ? sa(e) : sa.ceil(e)), ue(e.getUTCFullYear() % 1e4, t, 4);
}
function Y9() {
  return "+0000";
}
function E1() {
  return "%";
}
function k1(e) {
  return +e;
}
function A1(e) {
  return Math.floor(+e / 1e3);
}
var bi, DO, LO;
K9({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
});
function K9(e) {
  return (bi = K7(e)), (DO = bi.format), bi.parse, (LO = bi.utcFormat), bi.utcParse, bi;
}
function X9(e) {
  return new Date(e);
}
function J9(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function dy(e, t, r, n, i, a, o, u, s, l) {
  var c = ry(),
    f = c.invert,
    d = c.domain,
    v = l(".%L"),
    y = l(":%S"),
    h = l("%I:%M"),
    w = l("%I %p"),
    p = l("%a %d"),
    x = l("%b %d"),
    m = l("%B"),
    g = l("%Y");
  function b(_) {
    return (
      s(_) < _ ? v : u(_) < _ ? y : o(_) < _ ? h : a(_) < _ ? w : n(_) < _ ? (i(_) < _ ? p : x) : r(_) < _ ? m : g
    )(_);
  }
  return (
    (c.invert = function (_) {
      return new Date(f(_));
    }),
    (c.domain = function (_) {
      return arguments.length ? d(Array.from(_, J9)) : d().map(X9);
    }),
    (c.ticks = function (_) {
      var S = d();
      return e(S[0], S[S.length - 1], _ ?? 10);
    }),
    (c.tickFormat = function (_, S) {
      return S == null ? b : l(S);
    }),
    (c.nice = function (_) {
      var S = d();
      return (!_ || typeof _.range != "function") && (_ = t(S[0], S[S.length - 1], _ ?? 10)), _ ? d(cO(S, _)) : c;
    }),
    (c.copy = function () {
      return uu(c, dy(e, t, r, n, i, a, o, u, s, l));
    }),
    c
  );
}
function Z9() {
  return Qt.apply(
    dy(Q7, Y7, ri, OO, Nc, Ic, bO, xO, Ni, DO).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]),
    arguments,
  );
}
function eW() {
  return Qt.apply(
    dy(G7, V7, ni, MO, jc, Rc, TO, kO, Ni, LO).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]),
    arguments,
  );
}
function Dc() {
  var e = 0,
    t = 1,
    r,
    n,
    i,
    a,
    o = ft,
    u = !1,
    s;
  function l(f) {
    return f == null || isNaN((f = +f))
      ? s
      : o(i === 0 ? 0.5 : ((f = (a(f) - r) * i), u ? Math.max(0, Math.min(1, f)) : f));
  }
  (l.domain = function (f) {
    return arguments.length
      ? (([e, t] = f), (r = a((e = +e))), (n = a((t = +t))), (i = r === n ? 0 : 1 / (n - r)), l)
      : [e, t];
  }),
    (l.clamp = function (f) {
      return arguments.length ? ((u = !!f), l) : u;
    }),
    (l.interpolator = function (f) {
      return arguments.length ? ((o = f), l) : o;
    });
  function c(f) {
    return function (d) {
      var v, y;
      return arguments.length ? (([v, y] = d), (o = f(v, y)), l) : [o(0), o(1)];
    };
  }
  return (
    (l.range = c(Ea)),
    (l.rangeRound = c(ty)),
    (l.unknown = function (f) {
      return arguments.length ? ((s = f), l) : s;
    }),
    function (f) {
      return (a = f), (r = f(e)), (n = f(t)), (i = r === n ? 0 : 1 / (n - r)), l;
    }
  );
}
function An(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function FO() {
  var e = kn(Dc()(ft));
  return (
    (e.copy = function () {
      return An(e, FO());
    }),
    Lr.apply(e, arguments)
  );
}
function BO() {
  var e = ay(Dc()).domain([1, 10]);
  return (
    (e.copy = function () {
      return An(e, BO()).base(e.base());
    }),
    Lr.apply(e, arguments)
  );
}
function UO() {
  var e = oy(Dc());
  return (
    (e.copy = function () {
      return An(e, UO()).constant(e.constant());
    }),
    Lr.apply(e, arguments)
  );
}
function hy() {
  var e = uy(Dc());
  return (
    (e.copy = function () {
      return An(e, hy()).exponent(e.exponent());
    }),
    Lr.apply(e, arguments)
  );
}
function tW() {
  return hy.apply(null, arguments).exponent(0.5);
}
function zO() {
  var e = [],
    t = ft;
  function r(n) {
    if (n != null && !isNaN((n = +n))) return t((au(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (r.domain = function (n) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let i of n) i != null && !isNaN((i = +i)) && e.push(i);
      return e.sort(iu), r;
    }),
    (r.interpolator = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.range = function () {
      return e.map((n, i) => t(i / (e.length - 1)));
    }),
    (r.quantiles = function (n) {
      return Array.from({ length: n + 1 }, (i, a) => zz(e, a / n));
    }),
    (r.copy = function () {
      return zO(t).domain(e);
    }),
    Lr.apply(r, arguments)
  );
}
function Lc() {
  var e = 0,
    t = 0.5,
    r = 1,
    n = 1,
    i,
    a,
    o,
    u,
    s,
    l = ft,
    c,
    f = !1,
    d;
  function v(h) {
    return isNaN((h = +h))
      ? d
      : ((h = 0.5 + ((h = +c(h)) - a) * (n * h < n * a ? u : s)), l(f ? Math.max(0, Math.min(1, h)) : h));
  }
  (v.domain = function (h) {
    return arguments.length
      ? (([e, t, r] = h),
        (i = c((e = +e))),
        (a = c((t = +t))),
        (o = c((r = +r))),
        (u = i === a ? 0 : 0.5 / (a - i)),
        (s = a === o ? 0 : 0.5 / (o - a)),
        (n = a < i ? -1 : 1),
        v)
      : [e, t, r];
  }),
    (v.clamp = function (h) {
      return arguments.length ? ((f = !!h), v) : f;
    }),
    (v.interpolator = function (h) {
      return arguments.length ? ((l = h), v) : l;
    });
  function y(h) {
    return function (w) {
      var p, x, m;
      return arguments.length ? (([p, x, m] = w), (l = d7(h, [p, x, m])), v) : [l(0), l(0.5), l(1)];
    };
  }
  return (
    (v.range = y(Ea)),
    (v.rangeRound = y(ty)),
    (v.unknown = function (h) {
      return arguments.length ? ((d = h), v) : d;
    }),
    function (h) {
      return (
        (c = h),
        (i = h(e)),
        (a = h(t)),
        (o = h(r)),
        (u = i === a ? 0 : 0.5 / (a - i)),
        (s = a === o ? 0 : 0.5 / (o - a)),
        (n = a < i ? -1 : 1),
        v
      );
    }
  );
}
function WO() {
  var e = kn(Lc()(ft));
  return (
    (e.copy = function () {
      return An(e, WO());
    }),
    Lr.apply(e, arguments)
  );
}
function HO() {
  var e = ay(Lc()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return An(e, HO()).base(e.base());
    }),
    Lr.apply(e, arguments)
  );
}
function qO() {
  var e = oy(Lc());
  return (
    (e.copy = function () {
      return An(e, qO()).constant(e.constant());
    }),
    Lr.apply(e, arguments)
  );
}
function py() {
  var e = uy(Lc());
  return (
    (e.copy = function () {
      return An(e, py()).exponent(e.exponent());
    }),
    Lr.apply(e, arguments)
  );
}
function rW() {
  return py.apply(null, arguments).exponent(0.5);
}
const T1 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      scaleBand: Uo,
      scaleDiverging: WO,
      scaleDivergingLog: HO,
      scaleDivergingPow: py,
      scaleDivergingSqrt: rW,
      scaleDivergingSymlog: qO,
      scaleIdentity: lO,
      scaleImplicit: Xh,
      scaleLinear: xl,
      scaleLog: fO,
      scaleOrdinal: Jv,
      scalePoint: vo,
      scalePow: sy,
      scaleQuantile: pO,
      scaleQuantize: vO,
      scaleRadial: hO,
      scaleSequential: FO,
      scaleSequentialLog: BO,
      scaleSequentialPow: hy,
      scaleSequentialQuantile: zO,
      scaleSequentialSqrt: tW,
      scaleSequentialSymlog: UO,
      scaleSqrt: R7,
      scaleSymlog: dO,
      scaleThreshold: yO,
      scaleTime: Z9,
      scaleUtc: eW,
      tickFormat: sO,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function C1(e) {
  return oW(e) || aW(e) || iW(e) || nW();
}
function nW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iW(e, t) {
  if (e) {
    if (typeof e == "string") return tp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tp(e, t);
  }
}
function aW(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function oW(e) {
  if (Array.isArray(e)) return tp(e);
}
function tp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function P1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? P1(Object(r), !0).forEach(function (n) {
          qi(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : P1(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function qi(e, t, r) {
  return (
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
  );
}
function jr(e, t, r) {
  return Y(e) || Y(t) ? r : ze(t) ? Ze(e, t, r) : Z(t) ? t(e) : r;
}
function Sl(e, t, r, n) {
  var i = lz(e, function (u) {
    return jr(u, t);
  });
  if (r === "number") {
    var a = i.filter(function (u) {
      return H(u) || parseFloat(u);
    });
    return a.length ? [Cc(a), tn(a)] : [1 / 0, -1 / 0];
  }
  var o = n
    ? i.filter(function (u) {
        return !Y(u);
      })
    : i;
  return o.map(function (u) {
    return ze(u) || u instanceof Date ? u : "";
  });
}
var uW = function (t) {
    var r,
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      i = arguments.length > 2 ? arguments[2] : void 0,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = -1,
      u = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
    if (u > 1) {
      if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
        for (var s = a.range, l = 0; l < u; l++) {
          var c = l > 0 ? i[l - 1].coordinate : i[u - 1].coordinate,
            f = i[l].coordinate,
            d = l >= u - 1 ? i[0].coordinate : i[l + 1].coordinate,
            v = void 0;
          if (fr(f - c) !== fr(d - f)) {
            var y = [];
            if (fr(d - f) === fr(s[1] - s[0])) {
              v = d;
              var h = f + s[1] - s[0];
              (y[0] = Math.min(h, (h + c) / 2)), (y[1] = Math.max(h, (h + c) / 2));
            } else {
              v = c;
              var w = d + s[1] - s[0];
              (y[0] = Math.min(f, (w + f) / 2)), (y[1] = Math.max(f, (w + f) / 2));
            }
            var p = [Math.min(f, (v + f) / 2), Math.max(f, (v + f) / 2)];
            if ((t > p[0] && t <= p[1]) || (t >= y[0] && t <= y[1])) {
              o = i[l].index;
              break;
            }
          } else {
            var x = Math.min(c, d),
              m = Math.max(c, d);
            if (t > (x + f) / 2 && t <= (m + f) / 2) {
              o = i[l].index;
              break;
            }
          }
        }
      else
        for (var g = 0; g < u; g++)
          if (
            (g === 0 && t <= (n[g].coordinate + n[g + 1].coordinate) / 2) ||
            (g > 0 &&
              g < u - 1 &&
              t > (n[g].coordinate + n[g - 1].coordinate) / 2 &&
              t <= (n[g].coordinate + n[g + 1].coordinate) / 2) ||
            (g === u - 1 && t > (n[g].coordinate + n[g - 1].coordinate) / 2)
          ) {
            o = n[g].index;
            break;
          }
    } else o = 0;
    return o;
  },
  vy = function (t) {
    var r = t,
      n = r.type.displayName,
      i = t.props,
      a = i.stroke,
      o = i.fill,
      u;
    switch (n) {
      case "Line":
        u = a;
        break;
      case "Area":
      case "Radar":
        u = a && a !== "none" ? a : o;
        break;
      default:
        u = o;
        break;
    }
    return u;
  },
  GO = function (t) {
    var r = t.children,
      n = t.formattedGraphicalItems,
      i = t.legendWidth,
      a = t.legendContent,
      o = kr(r, No.displayName);
    if (!o) return null;
    var u;
    return (
      o.props && o.props.payload
        ? (u = o.props && o.props.payload)
        : a === "children"
        ? (u = (n || []).reduce(function (s, l) {
            var c = l.item,
              f = l.props,
              d = f.sectors || f.data || [];
            return s.concat(
              d.map(function (v) {
                return { type: o.props.iconType || c.props.legendType, value: v.name, color: v.fill, payload: v };
              }),
            );
          }, []))
        : (u = (n || []).map(function (s) {
            var l = s.item,
              c = l.props,
              f = c.dataKey,
              d = c.name,
              v = c.legendType,
              y = c.hide;
            return {
              inactive: y,
              dataKey: f,
              type: o.props.iconType || v || "square",
              color: vy(l),
              value: d || f,
              payload: l.props,
            };
          })),
      lt(lt(lt({}, o.props), No.getWithHeight(o, i)), {}, { payload: u, item: o })
    );
  },
  sW = function (t) {
    var r = t.barSize,
      n = t.stackGroups,
      i = n === void 0 ? {} : n;
    if (!i) return {};
    for (var a = {}, o = Object.keys(i), u = 0, s = o.length; u < s; u++)
      for (var l = i[o[u]].stackGroups, c = Object.keys(l), f = 0, d = c.length; f < d; f++) {
        var v = l[c[f]],
          y = v.items,
          h = v.cateAxisId,
          w = y.filter(function (m) {
            return dn(m.type).indexOf("Bar") >= 0;
          });
        if (w && w.length) {
          var p = w[0].props.barSize,
            x = w[0].props[h];
          a[x] || (a[x] = []), a[x].push({ item: w[0], stackList: w.slice(1), barSize: Y(p) ? r : p });
        }
      }
    return a;
  },
  lW = function (t) {
    var r = t.barGap,
      n = t.barCategoryGap,
      i = t.bandSize,
      a = t.sizeList,
      o = a === void 0 ? [] : a,
      u = t.maxBarSize,
      s = o.length;
    if (s < 1) return null;
    var l = ra(r, i, 0, !0),
      c;
    if (o[0].barSize === +o[0].barSize) {
      var f = !1,
        d = i / s,
        v = o.reduce(function (m, g) {
          return m + g.barSize || 0;
        }, 0);
      (v += (s - 1) * l),
        v >= i && ((v -= (s - 1) * l), (l = 0)),
        v >= i && d > 0 && ((f = !0), (d *= 0.9), (v = s * d));
      var y = ((i - v) / 2) >> 0,
        h = { offset: y - l, size: 0 };
      c = o.reduce(function (m, g) {
        var b = [].concat(C1(m), [
          { item: g.item, position: { offset: h.offset + h.size + l, size: f ? d : g.barSize } },
        ]);
        return (
          (h = b[b.length - 1].position),
          g.stackList &&
            g.stackList.length &&
            g.stackList.forEach(function (_) {
              b.push({ item: _, position: h });
            }),
          b
        );
      }, []);
    } else {
      var w = ra(n, i, 0, !0);
      i - 2 * w - (s - 1) * l <= 0 && (l = 0);
      var p = (i - 2 * w - (s - 1) * l) / s;
      p > 1 && (p >>= 0);
      var x = u === +u ? Math.min(p, u) : p;
      c = o.reduce(function (m, g, b) {
        var _ = [].concat(C1(m), [{ item: g.item, position: { offset: w + (p + l) * b + (p - x) / 2, size: x } }]);
        return (
          g.stackList &&
            g.stackList.length &&
            g.stackList.forEach(function (S) {
              _.push({ item: S, position: _[_.length - 1].position });
            }),
          _
        );
      }, []);
    }
    return c;
  },
  cW = function (t, r, n, i) {
    var a = n.children,
      o = n.width,
      u = n.margin,
      s = o - (u.left || 0) - (u.right || 0),
      l = GO({ children: a, legendWidth: s }),
      c = t;
    if (l) {
      var f = i || {},
        d = l.align,
        v = l.verticalAlign,
        y = l.layout;
      (y === "vertical" || (y === "horizontal" && v === "center")) &&
        H(t[d]) &&
        (c = lt(lt({}, t), {}, qi({}, d, c[d] + (f.width || 0)))),
        (y === "horizontal" || (y === "vertical" && d === "center")) &&
          H(t[v]) &&
          (c = lt(lt({}, t), {}, qi({}, v, c[v] + (f.height || 0))));
    }
    return c;
  },
  VO = function (t, r, n, i) {
    var a = r.props.children,
      o = Pr(a, "ErrorBar").filter(function (s) {
        var l = s.props.direction;
        return Y(l) || Y(i) ? !0 : i.indexOf(l) >= 0;
      });
    if (o && o.length) {
      var u = o.map(function (s) {
        return s.props.dataKey;
      });
      return t.reduce(
        function (s, l) {
          var c = jr(l, n, 0),
            f = Ue(c) ? [Cc(c), tn(c)] : [c, c],
            d = u.reduce(
              function (v, y) {
                var h = jr(l, y, 0),
                  w = f[0] - Math.abs(Ue(h) ? h[0] : h),
                  p = f[1] + Math.abs(Ue(h) ? h[1] : h);
                return [Math.min(w, v[0]), Math.max(p, v[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(d[0], s[0]), Math.max(d[1], s[1])];
        },
        [1 / 0, -1 / 0],
      );
    }
    return null;
  },
  fW = function (t, r, n, i) {
    var a = r
      .map(function (o) {
        return VO(t, o, n, i);
      })
      .filter(function (o) {
        return !Y(o);
      });
    return a && a.length
      ? a.reduce(
          function (o, u) {
            return [Math.min(o[0], u[0]), Math.max(o[1], u[1])];
          },
          [1 / 0, -1 / 0],
        )
      : null;
  },
  QO = function (t, r, n, i) {
    var a = r.map(function (u) {
      var s = u.props.dataKey;
      return (n === "number" && s && VO(t, u, s)) || Sl(t, s, n, i);
    });
    if (n === "number")
      return a.reduce(
        function (u, s) {
          return [Math.min(u[0], s[0]), Math.max(u[1], s[1])];
        },
        [1 / 0, -1 / 0],
      );
    var o = {};
    return a.reduce(function (u, s) {
      for (var l = 0, c = s.length; l < c; l++) o[s[l]] || ((o[s[l]] = !0), u.push(s[l]));
      return u;
    }, []);
  },
  YO = function (t, r) {
    return (
      (t === "horizontal" && r === "xAxis") ||
      (t === "vertical" && r === "yAxis") ||
      (t === "centric" && r === "angleAxis") ||
      (t === "radial" && r === "radiusAxis")
    );
  },
  M1 = function (t, r, n) {
    var i,
      a,
      o = t.map(function (u) {
        return u.coordinate === r && (i = !0), u.coordinate === n && (a = !0), u.coordinate;
      });
    return i || o.push(r), a || o.push(n), o;
  },
  qr = function (t, r, n) {
    if (!t) return null;
    var i = t.scale,
      a = t.duplicateDomain,
      o = t.type,
      u = t.range,
      s = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2,
      l = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / s : 0;
    return (
      (l = t.axisType === "angleAxis" ? fr(u[0] - u[1]) * 2 * l : l),
      r && (t.ticks || t.niceTicks)
        ? (t.ticks || t.niceTicks).map(function (c) {
            var f = a ? a.indexOf(c) : c;
            return { coordinate: i(f) + l, value: c, offset: l };
          })
        : t.isCategorical && t.categoricalDomain
        ? t.categoricalDomain.map(function (c, f) {
            return { coordinate: i(c) + l, value: c, index: f, offset: l };
          })
        : i.ticks && !n
        ? i.ticks(t.tickCount).map(function (c) {
            return { coordinate: i(c) + l, value: c, offset: l };
          })
        : i.domain().map(function (c, f) {
            return { coordinate: i(c) + l, value: a ? a[c] : c, index: f, offset: l };
          })
    );
  },
  Fu = function (t, r, n) {
    var i;
    return (
      Z(n) ? (i = n) : Z(r) && (i = r),
      Z(t) || i
        ? function (a, o, u, s) {
            Z(t) && t(a, o, u, s), Z(i) && i(a, o, u, s);
          }
        : null
    );
  },
  dW = function (t, r, n) {
    var i = t.scale,
      a = t.type,
      o = t.layout,
      u = t.axisType;
    if (i === "auto")
      return o === "radial" && u === "radiusAxis"
        ? { scale: Uo(), realScaleType: "band" }
        : o === "radial" && u === "angleAxis"
        ? { scale: xl(), realScaleType: "linear" }
        : a === "category" &&
          r &&
          (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || (r.indexOf("ComposedChart") >= 0 && !n))
        ? { scale: vo(), realScaleType: "point" }
        : a === "category"
        ? { scale: Uo(), realScaleType: "band" }
        : { scale: xl(), realScaleType: "linear" };
    if (ru(i)) {
      var s = "scale".concat(fc(i));
      return { scale: (T1[s] || vo)(), realScaleType: T1[s] ? s : "point" };
    }
    return Z(i) ? { scale: i } : { scale: vo(), realScaleType: "point" };
  },
  $1 = 1e-4,
  hW = function (t) {
    var r = t.domain();
    if (!(!r || r.length <= 2)) {
      var n = r.length,
        i = t.range(),
        a = Math.min(i[0], i[1]) - $1,
        o = Math.max(i[0], i[1]) + $1,
        u = t(r[0]),
        s = t(r[n - 1]);
      (u < a || u > o || s < a || s > o) && t.domain([r[0], r[n - 1]]);
    }
  },
  pW = function (t) {
    var r = t.length;
    if (!(r <= 0))
      for (var n = 0, i = t[0].length; n < i; ++n)
        for (var a = 0, o = 0, u = 0; u < r; ++u) {
          var s = tu(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
          s >= 0
            ? ((t[u][n][0] = a), (t[u][n][1] = a + s), (a = t[u][n][1]))
            : ((t[u][n][0] = o), (t[u][n][1] = o + s), (o = t[u][n][1]));
        }
  },
  vW = function (t) {
    var r = t.length;
    if (!(r <= 0))
      for (var n = 0, i = t[0].length; n < i; ++n)
        for (var a = 0, o = 0; o < r; ++o) {
          var u = tu(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
          u >= 0 ? ((t[o][n][0] = a), (t[o][n][1] = a + u), (a = t[o][n][1])) : ((t[o][n][0] = 0), (t[o][n][1] = 0));
        }
  },
  yW = { sign: pW, expand: M4, none: ta, silhouette: $4, wiggle: I4, positive: vW },
  mW = function (t, r, n) {
    var i = r.map(function (o) {
        return o.props.dataKey;
      }),
      a = P4()
        .keys(i)
        .value(function (o, u) {
          return +jr(o, u, 0);
        })
        .order(ch)
        .offset(yW[n]);
    return a(t);
  },
  gW = function (t, r, n, i, a, o) {
    if (!t) return null;
    var u = o ? r.reverse() : r,
      s = u.reduce(function (l, c) {
        var f = c.props,
          d = f.stackId,
          v = f.hide;
        if (v) return l;
        var y = c.props[n],
          h = l[y] || { hasStack: !1, stackGroups: {} };
        if (ze(d)) {
          var w = h.stackGroups[d] || { numericAxisId: n, cateAxisId: i, items: [] };
          w.items.push(c), (h.hasStack = !0), (h.stackGroups[d] = w);
        } else h.stackGroups[yc("_stackId_")] = { numericAxisId: n, cateAxisId: i, items: [c] };
        return lt(lt({}, l), {}, qi({}, y, h));
      }, {});
    return Object.keys(s).reduce(function (l, c) {
      var f = s[c];
      return (
        f.hasStack &&
          (f.stackGroups = Object.keys(f.stackGroups).reduce(function (d, v) {
            var y = f.stackGroups[v];
            return lt(
              lt({}, d),
              {},
              qi({}, v, { numericAxisId: n, cateAxisId: i, items: y.items, stackedData: mW(t, y.items, a) }),
            );
          }, {})),
        lt(lt({}, l), {}, qi({}, c, f))
      );
    }, {});
  },
  xW = function (t, r) {
    return r === "number" ? [Cc(t), tn(t)] : t;
  },
  wW = function (t, r) {
    var n = r.realScaleType,
      i = r.type,
      a = r.tickCount,
      o = r.originalDomain,
      u = r.allowDecimals,
      s = n || r.scale;
    if (s !== "auto" && s !== "linear") return null;
    if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
      var l = t.domain();
      if (!l.length) return null;
      var c = jz(l, a, u);
      return t.domain(xW(c, i)), { niceTicks: c };
    }
    if (a && i === "number") {
      var f = t.domain(),
        d = Dz(f, a, u);
      return { niceTicks: d };
    }
    return null;
  },
  I1 = function (t) {
    var r = t.axis,
      n = t.ticks,
      i = t.bandSize,
      a = t.entry,
      o = t.index,
      u = t.dataKey;
    if (r.type === "category") {
      if (!r.allowDuplicatedCategory && r.dataKey && !Y(a[r.dataKey])) {
        var s = il(n, "value", a[r.dataKey]);
        if (s) return s.coordinate + i / 2;
      }
      return n[o] ? n[o].coordinate + i / 2 : null;
    }
    var l = jr(a, Y(u) ? r.dataKey : u);
    return Y(l) ? null : r.scale(l);
  },
  bW = function (t, r) {
    var n = t.props.stackId;
    if (ze(n)) {
      var i = r[n];
      if (i && i.items.length) {
        for (var a = -1, o = 0, u = i.items.length; o < u; o++)
          if (i.items[o] === t) {
            a = o;
            break;
          }
        return a >= 0 ? i.stackedData[a] : null;
      }
    }
    return null;
  },
  _W = function (t) {
    return t.reduce(
      function (r, n) {
        return [Cc(n.concat([r[0]]).filter(H)), tn(n.concat([r[1]]).filter(H))];
      },
      [1 / 0, -1 / 0],
    );
  },
  KO = function (t, r, n) {
    return Object.keys(t)
      .reduce(
        function (i, a) {
          var o = t[a],
            u = o.stackedData,
            s = u.reduce(
              function (l, c) {
                var f = _W(c.slice(r, n + 1));
                return [Math.min(l[0], f[0]), Math.max(l[1], f[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(s[0], i[0]), Math.max(s[1], i[1])];
        },
        [1 / 0, -1 / 0],
      )
      .map(function (i) {
        return i === 1 / 0 || i === -1 / 0 ? 0 : i;
      });
  },
  N1 = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  R1 = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  XO = function (t, r, n) {
    if (Z(t)) return t(r, n);
    if (!Ue(t)) return r;
    var i = [];
    if (H(t[0])) i[0] = n ? t[0] : Math.min(t[0], r[0]);
    else if (N1.test(t[0])) {
      var a = +N1.exec(t[0])[1];
      i[0] = r[0] - a;
    } else Z(t[0]) ? (i[0] = t[0](r[0])) : (i[0] = r[0]);
    if (H(t[1])) i[1] = n ? t[1] : Math.max(t[1], r[1]);
    else if (R1.test(t[1])) {
      var o = +R1.exec(t[1])[1];
      i[1] = r[1] + o;
    } else Z(t[1]) ? (i[1] = t[1](r[1])) : (i[1] = r[1]);
    return i;
  },
  Ol = function (t, r, n) {
    if (t && t.scale && t.scale.bandwidth) {
      var i = t.scale.bandwidth();
      if (!n || i > 0) return i;
    }
    if (t && r && r.length >= 2) {
      for (
        var a = zv(r, function (f) {
            return f.coordinate;
          }),
          o = 1 / 0,
          u = 1,
          s = a.length;
        u < s;
        u++
      ) {
        var l = a[u],
          c = a[u - 1];
        o = Math.min((l.coordinate || 0) - (c.coordinate || 0), o);
      }
      return o === 1 / 0 ? 0 : o;
    }
    return n ? void 0 : 0;
  },
  j1 = function (t, r, n) {
    return !t || !t.length || Bh(t, Ze(n, "type.defaultProps.domain")) ? r : t;
  },
  SW = function (t, r) {
    var n = t.props,
      i = n.dataKey,
      a = n.name,
      o = n.unit,
      u = n.formatter,
      s = n.tooltipType,
      l = n.chartType;
    return lt(
      lt({}, le(t)),
      {},
      {
        dataKey: i,
        unit: o,
        formatter: u,
        name: a || i,
        color: vy(t),
        value: jr(r, i),
        type: s,
        payload: r,
        chartType: l,
      },
    );
  };
function D1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function L1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? D1(Object(r), !0).forEach(function (n) {
          OW(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : D1(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function OW(e, t, r) {
  return (
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
  );
}
var El = Math.PI / 180,
  EW = function (t) {
    return (t * 180) / Math.PI;
  },
  et = function (t, r, n, i) {
    return { x: t + Math.cos(-El * i) * n, y: r + Math.sin(-El * i) * n };
  },
  kW = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y;
    return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
  },
  AW = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.cx,
      o = r.cy,
      u = kW({ x: n, y: i }, { x: a, y: o });
    if (u <= 0) return { radius: u };
    var s = (n - a) / u,
      l = Math.acos(s);
    return i > o && (l = 2 * Math.PI - l), { radius: u, angle: EW(l), angleInRadian: l };
  },
  TW = function (t) {
    var r = t.startAngle,
      n = t.endAngle,
      i = Math.floor(r / 360),
      a = Math.floor(n / 360),
      o = Math.min(i, a);
    return { startAngle: r - o * 360, endAngle: n - o * 360 };
  },
  CW = function (t, r) {
    var n = r.startAngle,
      i = r.endAngle,
      a = Math.floor(n / 360),
      o = Math.floor(i / 360),
      u = Math.min(a, o);
    return t + u * 360;
  },
  F1 = function (t, r) {
    var n = t.x,
      i = t.y,
      a = AW({ x: n, y: i }, r),
      o = a.radius,
      u = a.angle,
      s = r.innerRadius,
      l = r.outerRadius;
    if (o < s || o > l) return !1;
    if (o === 0) return !0;
    var c = TW(r),
      f = c.startAngle,
      d = c.endAngle,
      v = u,
      y;
    if (f <= d) {
      for (; v > d; ) v -= 360;
      for (; v < f; ) v += 360;
      y = v >= f && v <= d;
    } else {
      for (; v > f; ) v -= 360;
      for (; v < d; ) v += 360;
      y = v >= d && v <= f;
    }
    return y ? L1(L1({}, r), {}, { radius: o, angle: CW(v, r) }) : null;
  };
function PW(e) {
  return NW(e) || IW(e) || $W(e) || MW();
}
function MW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $W(e, t) {
  if (e) {
    if (typeof e == "string") return rp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rp(e, t);
  }
}
function IW(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function NW(e) {
  if (Array.isArray(e)) return rp(e);
}
function rp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function B1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function We(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? B1(Object(r), !0).forEach(function (n) {
          RW(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : B1(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function RW(e, t, r) {
  return (
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
  );
}
function qo() {
  return (
    (qo =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    qo.apply(this, arguments)
  );
}
var jW = function (t) {
    var r = t.value,
      n = t.formatter,
      i = Y(t.children) ? r : t.children;
    return Z(n) ? n(i) : i;
  },
  DW = function (t, r) {
    var n = fr(r - t),
      i = Math.min(Math.abs(r - t), 360);
    return n * i;
  },
  LW = function (t, r, n) {
    var i = t.position,
      a = t.viewBox,
      o = t.offset,
      u = t.className,
      s = a,
      l = s.cx,
      c = s.cy,
      f = s.innerRadius,
      d = s.outerRadius,
      v = s.startAngle,
      y = s.endAngle,
      h = s.clockWise,
      w = (f + d) / 2,
      p = DW(v, y),
      x = p >= 0 ? 1 : -1,
      m,
      g;
    i === "insideStart"
      ? ((m = v + x * o), (g = h))
      : i === "insideEnd"
      ? ((m = y - x * o), (g = !h))
      : i === "end" && ((m = y + x * o), (g = h)),
      (g = p <= 0 ? g : !g);
    var b = et(l, c, w, m),
      _ = et(l, c, w, m + (g ? 1 : -1) * 359),
      S = "M"
        .concat(b.x, ",")
        .concat(
          b.y,
          `
    A`,
        )
        .concat(w, ",")
        .concat(w, ",0,1,")
        .concat(
          g ? 0 : 1,
          `,
    `,
        )
        .concat(_.x, ",")
        .concat(_.y),
      O = Y(t.id) ? yc("recharts-radial-line-") : t.id;
    return $.createElement(
      "text",
      qo({}, n, { dominantBaseline: "central", className: Oe("recharts-radial-bar-label", u) }),
      $.createElement("defs", null, $.createElement("path", { id: O, d: S })),
      $.createElement("textPath", { xlinkHref: "#".concat(O) }, r),
    );
  },
  FW = function (t) {
    var r = t.viewBox,
      n = t.offset,
      i = t.position,
      a = r,
      o = a.cx,
      u = a.cy,
      s = a.innerRadius,
      l = a.outerRadius,
      c = a.startAngle,
      f = a.endAngle,
      d = (c + f) / 2;
    if (i === "outside") {
      var v = et(o, u, l + n, d),
        y = v.x,
        h = v.y;
      return { x: y, y: h, textAnchor: y >= o ? "start" : "end", verticalAnchor: "middle" };
    }
    if (i === "center") return { x: o, y: u, textAnchor: "middle", verticalAnchor: "middle" };
    if (i === "centerTop") return { x: o, y: u, textAnchor: "middle", verticalAnchor: "start" };
    if (i === "centerBottom") return { x: o, y: u, textAnchor: "middle", verticalAnchor: "end" };
    var w = (s + l) / 2,
      p = et(o, u, w, d),
      x = p.x,
      m = p.y;
    return { x, y: m, textAnchor: "middle", verticalAnchor: "middle" };
  },
  BW = function (t) {
    var r = t.viewBox,
      n = t.parentViewBox,
      i = t.offset,
      a = t.position,
      o = r,
      u = o.x,
      s = o.y,
      l = o.width,
      c = o.height,
      f = c >= 0 ? 1 : -1,
      d = f * i,
      v = f > 0 ? "end" : "start",
      y = f > 0 ? "start" : "end",
      h = l >= 0 ? 1 : -1,
      w = h * i,
      p = h > 0 ? "end" : "start",
      x = h > 0 ? "start" : "end";
    if (a === "top") {
      var m = { x: u + l / 2, y: s - f * i, textAnchor: "middle", verticalAnchor: v };
      return We(We({}, m), n ? { height: Math.max(s - n.y, 0), width: l } : {});
    }
    if (a === "bottom") {
      var g = { x: u + l / 2, y: s + c + d, textAnchor: "middle", verticalAnchor: y };
      return We(We({}, g), n ? { height: Math.max(n.y + n.height - (s + c), 0), width: l } : {});
    }
    if (a === "left") {
      var b = { x: u - w, y: s + c / 2, textAnchor: p, verticalAnchor: "middle" };
      return We(We({}, b), n ? { width: Math.max(b.x - n.x, 0), height: c } : {});
    }
    if (a === "right") {
      var _ = { x: u + l + w, y: s + c / 2, textAnchor: x, verticalAnchor: "middle" };
      return We(We({}, _), n ? { width: Math.max(n.x + n.width - _.x, 0), height: c } : {});
    }
    var S = n ? { width: l, height: c } : {};
    return a === "insideLeft"
      ? We({ x: u + w, y: s + c / 2, textAnchor: x, verticalAnchor: "middle" }, S)
      : a === "insideRight"
      ? We({ x: u + l - w, y: s + c / 2, textAnchor: p, verticalAnchor: "middle" }, S)
      : a === "insideTop"
      ? We({ x: u + l / 2, y: s + d, textAnchor: "middle", verticalAnchor: y }, S)
      : a === "insideBottom"
      ? We({ x: u + l / 2, y: s + c - d, textAnchor: "middle", verticalAnchor: v }, S)
      : a === "insideTopLeft"
      ? We({ x: u + w, y: s + d, textAnchor: x, verticalAnchor: y }, S)
      : a === "insideTopRight"
      ? We({ x: u + l - w, y: s + d, textAnchor: p, verticalAnchor: y }, S)
      : a === "insideBottomLeft"
      ? We({ x: u + w, y: s + c - d, textAnchor: x, verticalAnchor: v }, S)
      : a === "insideBottomRight"
      ? We({ x: u + l - w, y: s + c - d, textAnchor: p, verticalAnchor: v }, S)
      : pa(a) && (H(a.x) || Wn(a.x)) && (H(a.y) || Wn(a.y))
      ? We({ x: u + ra(a.x, l), y: s + ra(a.y, c), textAnchor: "end", verticalAnchor: "end" }, S)
      : We({ x: u + l / 2, y: s + c / 2, textAnchor: "middle", verticalAnchor: "middle" }, S);
  },
  UW = function (t) {
    return H(t.cx);
  };
function Je(e) {
  var t = e.viewBox,
    r = e.position,
    n = e.value,
    i = e.children,
    a = e.content,
    o = e.className,
    u = o === void 0 ? "" : o,
    s = e.textBreakAll;
  if (!t || (Y(n) && Y(i) && !B.isValidElement(a) && !Z(a))) return null;
  if (B.isValidElement(a)) return B.cloneElement(a, e);
  var l;
  if (Z(a)) {
    if (((l = B.createElement(a, e)), B.isValidElement(l))) return l;
  } else l = jW(e);
  var c = UW(t),
    f = le(e, !0);
  if (c && (r === "insideStart" || r === "insideEnd" || r === "end")) return LW(e, l, f);
  var d = c ? FW(e) : BW(e);
  return $.createElement(Do, qo({ className: Oe("recharts-label", u) }, f, d, { breakAll: s }), l);
}
Je.displayName = "Label";
Je.defaultProps = { offset: 5 };
var JO = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.angle,
      a = t.startAngle,
      o = t.endAngle,
      u = t.r,
      s = t.radius,
      l = t.innerRadius,
      c = t.outerRadius,
      f = t.x,
      d = t.y,
      v = t.top,
      y = t.left,
      h = t.width,
      w = t.height,
      p = t.clockWise,
      x = t.labelViewBox;
    if (x) return x;
    if (H(h) && H(w)) {
      if (H(f) && H(d)) return { x: f, y: d, width: h, height: w };
      if (H(v) && H(y)) return { x: v, y, width: h, height: w };
    }
    return H(f) && H(d)
      ? { x: f, y: d, width: 0, height: 0 }
      : H(r) && H(n)
      ? {
          cx: r,
          cy: n,
          startAngle: a || i || 0,
          endAngle: o || i || 0,
          innerRadius: l || 0,
          outerRadius: c || s || u || 0,
          clockWise: p,
        }
      : t.viewBox
      ? t.viewBox
      : {};
  },
  zW = function (t, r) {
    return t
      ? t === !0
        ? $.createElement(Je, { key: "label-implicit", viewBox: r })
        : ze(t)
        ? $.createElement(Je, { key: "label-implicit", viewBox: r, value: t })
        : B.isValidElement(t)
        ? t.type === Je
          ? B.cloneElement(t, { key: "label-implicit", viewBox: r })
          : $.createElement(Je, { key: "label-implicit", content: t, viewBox: r })
        : Z(t)
        ? $.createElement(Je, { key: "label-implicit", content: t, viewBox: r })
        : pa(t)
        ? $.createElement(Je, qo({ viewBox: r }, t, { key: "label-implicit" }))
        : null
      : null;
  },
  WW = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!t || (!t.children && n && !t.label)) return null;
    var i = t.children,
      a = JO(t),
      o = Pr(i, Je.displayName).map(function (s, l) {
        return B.cloneElement(s, { viewBox: r || a, key: "label-".concat(l) });
      });
    if (!n) return o;
    var u = zW(t.label, r || a);
    return [u].concat(PW(o));
  };
Je.parseViewBox = JO;
Je.renderCallByParent = WW;
function HW(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var qW = HW;
const GW = he(qW);
function VW(e) {
  return XW(e) || KW(e) || YW(e) || QW();
}
function QW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YW(e, t) {
  if (e) {
    if (typeof e == "string") return np(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return np(e, t);
  }
}
function KW(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function XW(e) {
  if (Array.isArray(e)) return np(e);
}
function np(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function kl() {
  return (
    (kl =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    kl.apply(this, arguments)
  );
}
function U1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function z1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? U1(Object(r), !0).forEach(function (n) {
          JW(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : U1(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function JW(e, t, r) {
  return (
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
  );
}
function ZW(e, t) {
  if (e == null) return {};
  var r = eH(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function eH(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var tH = {
  valueAccessor: function (t) {
    return Ue(t.value) ? GW(t.value) : t.value;
  },
};
function hn(e) {
  var t = e.data,
    r = e.valueAccessor,
    n = e.dataKey,
    i = e.clockWise,
    a = e.id,
    o = e.textBreakAll,
    u = ZW(e, ["data", "valueAccessor", "dataKey", "clockWise", "id", "textBreakAll"]);
  return !t || !t.length
    ? null
    : $.createElement(
        ct,
        { className: "recharts-label-list" },
        t.map(function (s, l) {
          var c = Y(n) ? r(s, l) : jr(s && s.payload, n),
            f = Y(a) ? {} : { id: "".concat(a, "-").concat(l) };
          return $.createElement(
            Je,
            kl({}, le(s, !0), u, f, {
              parentViewBox: s.parentViewBox,
              index: l,
              value: c,
              textBreakAll: o,
              viewBox: Je.parseViewBox(Y(i) ? s : z1(z1({}, s), {}, { clockWise: i })),
              key: "label-".concat(l),
            }),
          );
        }),
      );
}
hn.displayName = "LabelList";
function rH(e, t) {
  return e
    ? e === !0
      ? $.createElement(hn, { key: "labelList-implicit", data: t })
      : $.isValidElement(e) || Z(e)
      ? $.createElement(hn, { key: "labelList-implicit", data: t, content: e })
      : pa(e)
      ? $.createElement(hn, kl({ data: t }, e, { key: "labelList-implicit" }))
      : null
    : null;
}
function nH(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || (!e.children && r && !e.label)) return null;
  var n = e.children,
    i = Pr(n, hn.displayName).map(function (o, u) {
      return B.cloneElement(o, { data: t, key: "labelList-".concat(u) });
    });
  if (!r) return i;
  var a = rH(e.label, t);
  return [a].concat(VW(i));
}
hn.renderCallByParent = nH;
hn.defaultProps = tH;
function ss(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ss = function (r) {
          return typeof r;
        })
      : (ss = function (r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    ss(e)
  );
}
function ip() {
  return (
    (ip =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    ip.apply(this, arguments)
  );
}
function iH(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function W1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function aH(e, t, r) {
  return t && W1(e.prototype, t), r && W1(e, r), e;
}
function oH(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    t && ap(e, t);
}
function ap(e, t) {
  return (
    (ap =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    ap(e, t)
  );
}
function uH(e) {
  var t = cH();
  return function () {
    var n = Al(e),
      i;
    if (t) {
      var a = Al(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return sH(this, i);
  };
}
function sH(e, t) {
  return t && (ss(t) === "object" || typeof t == "function") ? t : lH(e);
}
function lH(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function cH() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function Al(e) {
  return (
    (Al = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Al(e)
  );
}
var fH = function (t, r) {
    var n = fr(r - t),
      i = Math.min(Math.abs(r - t), 359.999);
    return n * i;
  },
  Bu = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.radius,
      a = t.angle,
      o = t.sign,
      u = t.isExternal,
      s = t.cornerRadius,
      l = t.cornerIsExternal,
      c = s * (u ? 1 : -1) + i,
      f = Math.asin(s / c) / El,
      d = l ? a : a + o * f,
      v = et(r, n, c, d),
      y = et(r, n, i, d),
      h = l ? a - o * f : a,
      w = et(r, n, c * Math.cos(f * El), h);
    return { center: v, circleTangency: y, lineTangency: w, theta: f };
  },
  ZO = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.innerRadius,
      a = t.outerRadius,
      o = t.startAngle,
      u = t.endAngle,
      s = fH(o, u),
      l = o + s,
      c = et(r, n, a, o),
      f = et(r, n, a, l),
      d = "M "
        .concat(c.x, ",")
        .concat(
          c.y,
          `
    A `,
        )
        .concat(a, ",")
        .concat(
          a,
          `,0,
    `,
        )
        .concat(+(Math.abs(s) > 180), ",")
        .concat(
          +(o > l),
          `,
    `,
        )
        .concat(f.x, ",")
        .concat(
          f.y,
          `
  `,
        );
    if (i > 0) {
      var v = et(r, n, i, o),
        y = et(r, n, i, l);
      d += "L "
        .concat(y.x, ",")
        .concat(
          y.y,
          `
            A `,
        )
        .concat(i, ",")
        .concat(
          i,
          `,0,
            `,
        )
        .concat(+(Math.abs(s) > 180), ",")
        .concat(
          +(o <= l),
          `,
            `,
        )
        .concat(v.x, ",")
        .concat(v.y, " Z");
    } else d += "L ".concat(r, ",").concat(n, " Z");
    return d;
  },
  dH = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.innerRadius,
      a = t.outerRadius,
      o = t.cornerRadius,
      u = t.forceCornerRadius,
      s = t.cornerIsExternal,
      l = t.startAngle,
      c = t.endAngle,
      f = fr(c - l),
      d = Bu({ cx: r, cy: n, radius: a, angle: l, sign: f, cornerRadius: o, cornerIsExternal: s }),
      v = d.circleTangency,
      y = d.lineTangency,
      h = d.theta,
      w = Bu({ cx: r, cy: n, radius: a, angle: c, sign: -f, cornerRadius: o, cornerIsExternal: s }),
      p = w.circleTangency,
      x = w.lineTangency,
      m = w.theta,
      g = s ? Math.abs(l - c) : Math.abs(l - c) - h - m;
    if (g < 0)
      return u
        ? "M "
            .concat(y.x, ",")
            .concat(
              y.y,
              `
        a`,
            )
            .concat(o, ",")
            .concat(o, ",0,0,1,")
            .concat(
              o * 2,
              `,0
        a`,
            )
            .concat(o, ",")
            .concat(o, ",0,0,1,")
            .concat(
              -o * 2,
              `,0
      `,
            )
        : ZO({ cx: r, cy: n, innerRadius: i, outerRadius: a, startAngle: l, endAngle: c });
    var b = "M "
      .concat(y.x, ",")
      .concat(
        y.y,
        `
    A`,
      )
      .concat(o, ",")
      .concat(o, ",0,0,")
      .concat(+(f < 0), ",")
      .concat(v.x, ",")
      .concat(
        v.y,
        `
    A`,
      )
      .concat(a, ",")
      .concat(a, ",0,")
      .concat(+(g > 180), ",")
      .concat(+(f < 0), ",")
      .concat(p.x, ",")
      .concat(
        p.y,
        `
    A`,
      )
      .concat(o, ",")
      .concat(o, ",0,0,")
      .concat(+(f < 0), ",")
      .concat(x.x, ",")
      .concat(
        x.y,
        `
  `,
      );
    if (i > 0) {
      var _ = Bu({ cx: r, cy: n, radius: i, angle: l, sign: f, isExternal: !0, cornerRadius: o, cornerIsExternal: s }),
        S = _.circleTangency,
        O = _.lineTangency,
        E = _.theta,
        A = Bu({ cx: r, cy: n, radius: i, angle: c, sign: -f, isExternal: !0, cornerRadius: o, cornerIsExternal: s }),
        k = A.circleTangency,
        C = A.lineTangency,
        M = A.theta,
        I = s ? Math.abs(l - c) : Math.abs(l - c) - E - M;
      if (I < 0 && o === 0) return "".concat(b, "L").concat(r, ",").concat(n, "Z");
      b += "L"
        .concat(C.x, ",")
        .concat(
          C.y,
          `
      A`,
        )
        .concat(o, ",")
        .concat(o, ",0,0,")
        .concat(+(f < 0), ",")
        .concat(k.x, ",")
        .concat(
          k.y,
          `
      A`,
        )
        .concat(i, ",")
        .concat(i, ",0,")
        .concat(+(I > 180), ",")
        .concat(+(f > 0), ",")
        .concat(S.x, ",")
        .concat(
          S.y,
          `
      A`,
        )
        .concat(o, ",")
        .concat(o, ",0,0,")
        .concat(+(f < 0), ",")
        .concat(O.x, ",")
        .concat(O.y, "Z");
    } else b += "L".concat(r, ",").concat(n, "Z");
    return b;
  },
  eE = (function (e) {
    oH(r, e);
    var t = uH(r);
    function r() {
      return iH(this, r), t.apply(this, arguments);
    }
    return (
      aH(r, [
        {
          key: "render",
          value: function () {
            var i = this.props,
              a = i.cx,
              o = i.cy,
              u = i.innerRadius,
              s = i.outerRadius,
              l = i.cornerRadius,
              c = i.forceCornerRadius,
              f = i.cornerIsExternal,
              d = i.startAngle,
              v = i.endAngle,
              y = i.className;
            if (s < u || d === v) return null;
            var h = Oe("recharts-sector", y),
              w = s - u,
              p = ra(l, w, 0, !0),
              x;
            return (
              p > 0 && Math.abs(d - v) < 360
                ? (x = dH({
                    cx: a,
                    cy: o,
                    innerRadius: u,
                    outerRadius: s,
                    cornerRadius: Math.min(p, w / 2),
                    forceCornerRadius: c,
                    cornerIsExternal: f,
                    startAngle: d,
                    endAngle: v,
                  }))
                : (x = ZO({ cx: a, cy: o, innerRadius: u, outerRadius: s, startAngle: d, endAngle: v })),
              $.createElement("path", ip({}, le(this.props, !0), { className: h, d: x }))
            );
          },
        },
      ]),
      r
    );
  })(B.PureComponent);
eE.defaultProps = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1,
};
function ls(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ls = function (r) {
          return typeof r;
        })
      : (ls = function (r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    ls(e)
  );
}
function op() {
  return (
    (op =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    op.apply(this, arguments)
  );
}
function H1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function q1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? H1(Object(r), !0).forEach(function (n) {
          hH(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : H1(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function hH(e, t, r) {
  return (
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
  );
}
function pH(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function G1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function vH(e, t, r) {
  return t && G1(e.prototype, t), r && G1(e, r), e;
}
function yH(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    t && up(e, t);
}
function up(e, t) {
  return (
    (up =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    up(e, t)
  );
}
function mH(e) {
  var t = wH();
  return function () {
    var n = Tl(e),
      i;
    if (t) {
      var a = Tl(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return gH(this, i);
  };
}
function gH(e, t) {
  return t && (ls(t) === "object" || typeof t == "function") ? t : xH(e);
}
function xH(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wH() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function Tl(e) {
  return (
    (Tl = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Tl(e)
  );
}
var V1 = {
    curveBasisClosed: x4,
    curveBasisOpen: w4,
    curveBasis: g4,
    curveLinearClosed: b4,
    curveLinear: pc,
    curveMonotoneX: _4,
    curveMonotoneY: S4,
    curveNatural: O4,
    curveStep: E4,
    curveStepAfter: A4,
    curveStepBefore: k4,
  },
  Uu = function (t) {
    return t.x === +t.x && t.y === +t.y;
  },
  Ya = function (t) {
    return t.x;
  },
  Ka = function (t) {
    return t.y;
  },
  bH = function (t, r) {
    if (Z(t)) return t;
    var n = "curve".concat(fc(t));
    return n === "curveMonotone" && r ? V1["".concat(n).concat(r === "vertical" ? "Y" : "X")] : V1[n] || pc;
  },
  Gi = (function (e) {
    yH(r, e);
    var t = mH(r);
    function r() {
      return pH(this, r), t.apply(this, arguments);
    }
    return (
      vH(r, [
        {
          key: "getPath",
          value: function () {
            var i = this.props,
              a = i.type,
              o = i.points,
              u = i.baseLine,
              s = i.layout,
              l = i.connectNulls,
              c = bH(a, s),
              f = l
                ? o.filter(function (h) {
                    return Uu(h);
                  })
                : o,
              d;
            if (Ue(u)) {
              var v = l
                  ? u.filter(function (h) {
                      return Uu(h);
                    })
                  : u,
                y = f.map(function (h, w) {
                  return q1(q1({}, h), {}, { base: v[w] });
                });
              return (
                s === "vertical"
                  ? (d = $u()
                      .y(Ka)
                      .x1(Ya)
                      .x0(function (h) {
                        return h.base.x;
                      }))
                  : (d = $u()
                      .x(Ya)
                      .y1(Ka)
                      .y0(function (h) {
                        return h.base.y;
                      })),
                d.defined(Uu).curve(c),
                d(y)
              );
            }
            return (
              s === "vertical" && H(u)
                ? (d = $u().y(Ka).x1(Ya).x0(u))
                : H(u)
                ? (d = $u().x(Ya).y1(Ka).y0(u))
                : (d = J_().x(Ya).y(Ka)),
              d.defined(Uu).curve(c),
              d(f)
            );
          },
        },
        {
          key: "render",
          value: function () {
            var i = this.props,
              a = i.className,
              o = i.points,
              u = i.path,
              s = i.pathRef;
            if ((!o || !o.length) && !u) return null;
            var l = o && o.length ? this.getPath() : u;
            return $.createElement(
              "path",
              op({}, le(this.props), Vs(this.props), { className: Oe("recharts-curve", a), d: l, ref: s }),
            );
          },
        },
      ]),
      r
    );
  })(B.PureComponent);
Gi.defaultProps = { type: "linear", points: [], connectNulls: !1 };
function cs(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (cs = function (r) {
          return typeof r;
        })
      : (cs = function (r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    cs(e)
  );
}
function Cl() {
  return (
    (Cl =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Cl.apply(this, arguments)
  );
}
function _H(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Q1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function SH(e, t, r) {
  return t && Q1(e.prototype, t), r && Q1(e, r), e;
}
function OH(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    t && sp(e, t);
}
function sp(e, t) {
  return (
    (sp =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    sp(e, t)
  );
}
function EH(e) {
  var t = TH();
  return function () {
    var n = Pl(e),
      i;
    if (t) {
      var a = Pl(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return kH(this, i);
  };
}
function kH(e, t) {
  return t && (cs(t) === "object" || typeof t == "function") ? t : AH(e);
}
function AH(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function TH() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function Pl(e) {
  return (
    (Pl = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Pl(e)
  );
}
var Y1 = function (t, r, n, i, a) {
    var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2),
      u = i >= 0 ? 1 : -1,
      s = n >= 0 ? 1 : -1,
      l = (i >= 0 && n >= 0) || (i < 0 && n < 0) ? 1 : 0,
      c;
    if (o > 0 && a instanceof Array) {
      for (var f = [0, 0, 0, 0], d = 0, v = 4; d < v; d++) f[d] = a[d] > o ? o : a[d];
      (c = "M".concat(t, ",").concat(r + u * f[0])),
        f[0] > 0 &&
          (c += "A "
            .concat(f[0], ",")
            .concat(f[0], ",0,0,")
            .concat(l, ",")
            .concat(t + s * f[0], ",")
            .concat(r)),
        (c += "L ".concat(t + n - s * f[1], ",").concat(r)),
        f[1] > 0 &&
          (c += "A "
            .concat(f[1], ",")
            .concat(f[1], ",0,0,")
            .concat(
              l,
              `,
        `,
            )
            .concat(t + n, ",")
            .concat(r + u * f[1])),
        (c += "L ".concat(t + n, ",").concat(r + i - u * f[2])),
        f[2] > 0 &&
          (c += "A "
            .concat(f[2], ",")
            .concat(f[2], ",0,0,")
            .concat(
              l,
              `,
        `,
            )
            .concat(t + n - s * f[2], ",")
            .concat(r + i)),
        (c += "L ".concat(t + s * f[3], ",").concat(r + i)),
        f[3] > 0 &&
          (c += "A "
            .concat(f[3], ",")
            .concat(f[3], ",0,0,")
            .concat(
              l,
              `,
        `,
            )
            .concat(t, ",")
            .concat(r + i - u * f[3])),
        (c += "Z");
    } else if (o > 0 && a === +a && a > 0) {
      var y = Math.min(o, a);
      c = "M "
        .concat(t, ",")
        .concat(
          r + u * y,
          `
            A `,
        )
        .concat(y, ",")
        .concat(y, ",0,0,")
        .concat(l, ",")
        .concat(t + s * y, ",")
        .concat(
          r,
          `
            L `,
        )
        .concat(t + n - s * y, ",")
        .concat(
          r,
          `
            A `,
        )
        .concat(y, ",")
        .concat(y, ",0,0,")
        .concat(l, ",")
        .concat(t + n, ",")
        .concat(
          r + u * y,
          `
            L `,
        )
        .concat(t + n, ",")
        .concat(
          r + i - u * y,
          `
            A `,
        )
        .concat(y, ",")
        .concat(y, ",0,0,")
        .concat(l, ",")
        .concat(t + n - s * y, ",")
        .concat(
          r + i,
          `
            L `,
        )
        .concat(t + s * y, ",")
        .concat(
          r + i,
          `
            A `,
        )
        .concat(y, ",")
        .concat(y, ",0,0,")
        .concat(l, ",")
        .concat(t, ",")
        .concat(r + i - u * y, " Z");
    } else c = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
    return c;
  },
  CH = function (t, r) {
    if (!t || !r) return !1;
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y,
      u = r.width,
      s = r.height;
    if (Math.abs(u) > 0 && Math.abs(s) > 0) {
      var l = Math.min(a, a + u),
        c = Math.max(a, a + u),
        f = Math.min(o, o + s),
        d = Math.max(o, o + s);
      return n >= l && n <= c && i >= f && i <= d;
    }
    return !1;
  },
  yy = (function (e) {
    OH(r, e);
    var t = EH(r);
    function r() {
      var n;
      _H(this, r);
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
      return (n = t.call.apply(t, [this].concat(a))), (n.state = { totalLength: -1 }), (n.node = void 0), n;
    }
    return (
      SH(r, [
        {
          key: "componentDidMount",
          value: function () {
            if (this.node && this.node.getTotalLength)
              try {
                var i = this.node.getTotalLength();
                i && this.setState({ totalLength: i });
              } catch {}
          },
        },
        {
          key: "render",
          value: function () {
            var i = this,
              a = this.props,
              o = a.x,
              u = a.y,
              s = a.width,
              l = a.height,
              c = a.radius,
              f = a.className,
              d = this.state.totalLength,
              v = this.props,
              y = v.animationEasing,
              h = v.animationDuration,
              w = v.animationBegin,
              p = v.isAnimationActive,
              x = v.isUpdateAnimationActive;
            if (o !== +o || u !== +u || s !== +s || l !== +l || s === 0 || l === 0) return null;
            var m = Oe("recharts-rectangle", f);
            return x
              ? $.createElement(
                  aa,
                  {
                    canBegin: d > 0,
                    from: { width: s, height: l, x: o, y: u },
                    to: { width: s, height: l, x: o, y: u },
                    duration: h,
                    animationEasing: y,
                    isActive: x,
                  },
                  function (g) {
                    var b = g.width,
                      _ = g.height,
                      S = g.x,
                      O = g.y;
                    return $.createElement(
                      aa,
                      {
                        canBegin: d > 0,
                        from: "0px ".concat(d === -1 ? 1 : d, "px"),
                        to: "".concat(d, "px 0px"),
                        attributeName: "strokeDasharray",
                        begin: w,
                        duration: h,
                        isActive: p,
                        easing: y,
                      },
                      $.createElement(
                        "path",
                        Cl({}, le(i.props, !0), {
                          className: m,
                          d: Y1(S, O, b, _, c),
                          ref: function (A) {
                            i.node = A;
                          },
                        }),
                      ),
                    );
                  },
                )
              : $.createElement("path", Cl({}, le(this.props, !0), { className: m, d: Y1(o, u, s, l, c) }));
          },
        },
      ]),
      r
    );
  })(B.PureComponent);
yy.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
};
function fs(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (fs = function (r) {
          return typeof r;
        })
      : (fs = function (r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    fs(e)
  );
}
function lp() {
  return (
    (lp =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    lp.apply(this, arguments)
  );
}
function PH(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function K1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function MH(e, t, r) {
  return t && K1(e.prototype, t), r && K1(e, r), e;
}
function $H(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    t && cp(e, t);
}
function cp(e, t) {
  return (
    (cp =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    cp(e, t)
  );
}
function IH(e) {
  var t = jH();
  return function () {
    var n = Ml(e),
      i;
    if (t) {
      var a = Ml(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return NH(this, i);
  };
}
function NH(e, t) {
  return t && (fs(t) === "object" || typeof t == "function") ? t : RH(e);
}
function RH(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jH() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function Ml(e) {
  return (
    (Ml = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ml(e)
  );
}
var my = (function (e) {
  $H(r, e);
  var t = IH(r);
  function r() {
    return PH(this, r), t.apply(this, arguments);
  }
  return (
    MH(r, [
      {
        key: "render",
        value: function () {
          var i = this.props,
            a = i.cx,
            o = i.cy,
            u = i.r,
            s = i.className,
            l = Oe("recharts-dot", s);
          return a === +a && o === +o && u === +u
            ? $.createElement("circle", lp({}, le(this.props), Vs(this.props), { className: l, cx: a, cy: o, r: u }))
            : null;
        },
      },
    ]),
    r
  );
})(B.PureComponent);
function ds(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ds = function (r) {
          return typeof r;
        })
      : (ds = function (r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    ds(e)
  );
}
function fp() {
  return (
    (fp =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    fp.apply(this, arguments)
  );
}
function DH(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function X1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function LH(e, t, r) {
  return t && X1(e.prototype, t), r && X1(e, r), e;
}
function FH(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    t && dp(e, t);
}
function dp(e, t) {
  return (
    (dp =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    dp(e, t)
  );
}
function BH(e) {
  var t = WH();
  return function () {
    var n = $l(e),
      i;
    if (t) {
      var a = $l(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return UH(this, i);
  };
}
function UH(e, t) {
  return t && (ds(t) === "object" || typeof t == "function") ? t : zH(e);
}
function zH(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function WH() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function $l(e) {
  return (
    ($l = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    $l(e)
  );
}
var tE = (function (e) {
  FH(r, e);
  var t = BH(r);
  function r() {
    return DH(this, r), t.apply(this, arguments);
  }
  return (
    LH(
      r,
      [
        {
          key: "render",
          value: function () {
            var i = this.props,
              a = i.x,
              o = i.y,
              u = i.width,
              s = i.height,
              l = i.top,
              c = i.left,
              f = i.className;
            return !H(a) || !H(o) || !H(u) || !H(s) || !H(l) || !H(c)
              ? null
              : $.createElement(
                  "path",
                  fp({}, le(this.props, !0), { className: Oe("recharts-cross", f), d: r.getPath(a, o, u, s, l, c) }),
                );
          },
        },
      ],
      [
        {
          key: "getPath",
          value: function (i, a, o, u, s, l) {
            return "M".concat(i, ",").concat(s, "v").concat(u, "M").concat(l, ",").concat(a, "h").concat(o);
          },
        },
      ],
    ),
    r
  );
})(B.PureComponent);
tE.defaultProps = { x: 0, y: 0, top: 0, left: 0, width: 0, height: 0 };
var HH = Math.ceil,
  qH = Math.max;
function GH(e, t, r, n) {
  for (var i = -1, a = qH(HH((t - e) / (r || 1)), 0), o = Array(a); a--; ) (o[n ? a : ++i] = e), (e += r);
  return o;
}
var VH = GH,
  QH = ES,
  J1 = 1 / 0,
  YH = 17976931348623157e292;
function KH(e) {
  if (!e) return e === 0 ? e : 0;
  if (((e = QH(e)), e === J1 || e === -J1)) {
    var t = e < 0 ? -1 : 1;
    return t * YH;
  }
  return e === e ? e : 0;
}
var rE = KH,
  XH = VH,
  JH = mc,
  Vf = rE;
function ZH(e) {
  return function (t, r, n) {
    return (
      n && typeof n != "number" && JH(t, r, n) && (r = n = void 0),
      (t = Vf(t)),
      r === void 0 ? ((r = t), (t = 0)) : (r = Vf(r)),
      (n = n === void 0 ? (t < r ? 1 : -1) : Vf(n)),
      XH(t, r, n, e)
    );
  };
}
var eq = ZH,
  tq = eq,
  rq = tq(),
  nq = rq;
const Il = he(nq);
function Z1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ex(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Z1(Object(r), !0).forEach(function (n) {
          nE(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Z1(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function nE(e, t, r) {
  return (
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
  );
}
var iq = ["Webkit", "Moz", "O", "ms"],
  aq = function (t, r) {
    if (!t) return null;
    var n = t.replace(/(\w)/, function (a) {
        return a.toUpperCase();
      }),
      i = iq.reduce(function (a, o) {
        return ex(ex({}, a), {}, nE({}, o + n, r));
      }, {});
    return (i[t] = r), i;
  };
function hs(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (hs = function (r) {
          return typeof r;
        })
      : (hs = function (r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    hs(e)
  );
}
function Nl() {
  return (
    (Nl =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Nl.apply(this, arguments)
  );
}
function tx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Qf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tx(Object(r), !0).forEach(function (n) {
          hp(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : tx(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function hp(e, t, r) {
  return (
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
  );
}
function oq(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function rx(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function uq(e, t, r) {
  return t && rx(e.prototype, t), r && rx(e, r), e;
}
function sq(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    t && pp(e, t);
}
function pp(e, t) {
  return (
    (pp =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    pp(e, t)
  );
}
function lq(e) {
  var t = fq();
  return function () {
    var n = Rl(e),
      i;
    if (t) {
      var a = Rl(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return cq(this, i);
  };
}
function cq(e, t) {
  return t && (hs(t) === "object" || typeof t == "function") ? t : vp(e);
}
function vp(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fq() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function Rl(e) {
  return (
    (Rl = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Rl(e)
  );
}
var dq = function (t) {
    var r = t.data,
      n = t.startIndex,
      i = t.endIndex,
      a = t.x,
      o = t.width,
      u = t.travellerWidth;
    if (!r || !r.length) return {};
    var s = r.length,
      l = vo()
        .domain(Il(0, s))
        .range([a, a + o - u]),
      c = l.domain().map(function (f) {
        return l(f);
      });
    return {
      isTextActive: !1,
      isSlideMoving: !1,
      isTravellerMoving: !1,
      startX: l(n),
      endX: l(i),
      scale: l,
      scaleValues: c,
    };
  },
  nx = function (t) {
    return t.changedTouches && !!t.changedTouches.length;
  },
  Go = (function (e) {
    sq(r, e);
    var t = lq(r);
    function r(n) {
      var i;
      return (
        oq(this, r),
        (i = t.call(this, n)),
        (i.leaveTimer = void 0),
        (i.travellerDragStartHandlers = void 0),
        (i.handleDrag = function (a) {
          i.leaveTimer && (clearTimeout(i.leaveTimer), (i.leaveTimer = null)),
            i.state.isTravellerMoving ? i.handleTravellerMove(a) : i.state.isSlideMoving && i.handleSlideDrag(a);
        }),
        (i.handleTouchMove = function (a) {
          a.changedTouches != null && a.changedTouches.length > 0 && i.handleDrag(a.changedTouches[0]);
        }),
        (i.handleDragEnd = function () {
          i.setState({ isTravellerMoving: !1, isSlideMoving: !1 }), i.detachDragEndListener();
        }),
        (i.handleLeaveWrapper = function () {
          (i.state.isTravellerMoving || i.state.isSlideMoving) &&
            (i.leaveTimer = window.setTimeout(i.handleDragEnd, i.props.leaveTimeOut));
        }),
        (i.handleEnterSlideOrTraveller = function () {
          i.setState({ isTextActive: !0 });
        }),
        (i.handleLeaveSlideOrTraveller = function () {
          i.setState({ isTextActive: !1 });
        }),
        (i.handleSlideDragStart = function (a) {
          var o = nx(a) ? a.changedTouches[0] : a;
          i.setState({ isTravellerMoving: !1, isSlideMoving: !0, slideMoveStartX: o.pageX }), i.attachDragEndListener();
        }),
        (i.travellerDragStartHandlers = {
          startX: i.handleTravellerDragStart.bind(vp(i), "startX"),
          endX: i.handleTravellerDragStart.bind(vp(i), "endX"),
        }),
        (i.state = {}),
        i
      );
    }
    return (
      uq(
        r,
        [
          {
            key: "componentWillUnmount",
            value: function () {
              this.leaveTimer && (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                this.detachDragEndListener();
            },
          },
          {
            key: "getIndex",
            value: function (i) {
              var a = i.startX,
                o = i.endX,
                u = this.state.scaleValues,
                s = this.props,
                l = s.gap,
                c = s.data,
                f = c.length - 1,
                d = Math.min(a, o),
                v = Math.max(a, o),
                y = r.getIndexInRange(u, d),
                h = r.getIndexInRange(u, v);
              return { startIndex: y - (y % l), endIndex: h === f ? f : h - (h % l) };
            },
          },
          {
            key: "getTextOfTick",
            value: function (i) {
              var a = this.props,
                o = a.data,
                u = a.tickFormatter,
                s = a.dataKey,
                l = jr(o[i], s, i);
              return Z(u) ? u(l, i) : l;
            },
          },
          {
            key: "attachDragEndListener",
            value: function () {
              window.addEventListener("mouseup", this.handleDragEnd, !0),
                window.addEventListener("touchend", this.handleDragEnd, !0);
            },
          },
          {
            key: "detachDragEndListener",
            value: function () {
              window.removeEventListener("mouseup", this.handleDragEnd, !0),
                window.removeEventListener("touchend", this.handleDragEnd, !0);
            },
          },
          {
            key: "handleSlideDrag",
            value: function (i) {
              var a = this.state,
                o = a.slideMoveStartX,
                u = a.startX,
                s = a.endX,
                l = this.props,
                c = l.x,
                f = l.width,
                d = l.travellerWidth,
                v = l.startIndex,
                y = l.endIndex,
                h = l.onChange,
                w = i.pageX - o;
              w > 0 ? (w = Math.min(w, c + f - d - s, c + f - d - u)) : w < 0 && (w = Math.max(w, c - u, c - s));
              var p = this.getIndex({ startX: u + w, endX: s + w });
              (p.startIndex !== v || p.endIndex !== y) && h && h(p),
                this.setState({ startX: u + w, endX: s + w, slideMoveStartX: i.pageX });
            },
          },
          {
            key: "handleTravellerDragStart",
            value: function (i, a) {
              var o = nx(a) ? a.changedTouches[0] : a;
              this.setState({
                isSlideMoving: !1,
                isTravellerMoving: !0,
                movingTravellerId: i,
                brushMoveStartX: o.pageX,
              }),
                this.attachDragEndListener();
            },
          },
          {
            key: "handleTravellerMove",
            value: function (i) {
              var a,
                o = this.state,
                u = o.brushMoveStartX,
                s = o.movingTravellerId,
                l = o.endX,
                c = o.startX,
                f = this.state[s],
                d = this.props,
                v = d.x,
                y = d.width,
                h = d.travellerWidth,
                w = d.onChange,
                p = d.gap,
                x = d.data,
                m = { startX: this.state.startX, endX: this.state.endX },
                g = i.pageX - u;
              g > 0 ? (g = Math.min(g, v + y - h - f)) : g < 0 && (g = Math.max(g, v - f)), (m[s] = f + g);
              var b = this.getIndex(m),
                _ = b.startIndex,
                S = b.endIndex,
                O = function () {
                  var A = x.length - 1;
                  return (
                    (s === "startX" && (l > c ? _ % p === 0 : S % p === 0)) ||
                    (l < c && S === A) ||
                    (s === "endX" && (l > c ? S % p === 0 : _ % p === 0)) ||
                    (l > c && S === A)
                  );
                };
              this.setState(((a = {}), hp(a, s, f + g), hp(a, "brushMoveStartX", i.pageX), a), function () {
                w && O() && w(b);
              });
            },
          },
          {
            key: "renderBackground",
            value: function () {
              var i = this.props,
                a = i.x,
                o = i.y,
                u = i.width,
                s = i.height,
                l = i.fill,
                c = i.stroke;
              return $.createElement("rect", { stroke: c, fill: l, x: a, y: o, width: u, height: s });
            },
          },
          {
            key: "renderPanorama",
            value: function () {
              var i = this.props,
                a = i.x,
                o = i.y,
                u = i.width,
                s = i.height,
                l = i.data,
                c = i.children,
                f = i.padding,
                d = B.Children.only(c);
              return d ? $.cloneElement(d, { x: a, y: o, width: u, height: s, margin: f, compact: !0, data: l }) : null;
            },
          },
          {
            key: "renderTravellerLayer",
            value: function (i, a) {
              var o = this.props,
                u = o.y,
                s = o.travellerWidth,
                l = o.height,
                c = o.traveller,
                f = Math.max(i, this.props.x),
                d = Qf(Qf({}, le(this.props)), {}, { x: f, y: u, width: s, height: l });
              return $.createElement(
                ct,
                {
                  className: "recharts-brush-traveller",
                  onMouseEnter: this.handleEnterSlideOrTraveller,
                  onMouseLeave: this.handleLeaveSlideOrTraveller,
                  onMouseDown: this.travellerDragStartHandlers[a],
                  onTouchStart: this.travellerDragStartHandlers[a],
                  style: { cursor: "col-resize" },
                },
                r.renderTraveller(c, d),
              );
            },
          },
          {
            key: "renderSlide",
            value: function (i, a) {
              var o = this.props,
                u = o.y,
                s = o.height,
                l = o.stroke,
                c = o.travellerWidth,
                f = Math.min(i, a) + c,
                d = Math.max(Math.abs(a - i) - c, 0);
              return $.createElement("rect", {
                className: "recharts-brush-slide",
                onMouseEnter: this.handleEnterSlideOrTraveller,
                onMouseLeave: this.handleLeaveSlideOrTraveller,
                onMouseDown: this.handleSlideDragStart,
                onTouchStart: this.handleSlideDragStart,
                style: { cursor: "move" },
                stroke: "none",
                fill: l,
                fillOpacity: 0.2,
                x: f,
                y: u,
                width: d,
                height: s,
              });
            },
          },
          {
            key: "renderText",
            value: function () {
              var i = this.props,
                a = i.startIndex,
                o = i.endIndex,
                u = i.y,
                s = i.height,
                l = i.travellerWidth,
                c = i.stroke,
                f = this.state,
                d = f.startX,
                v = f.endX,
                y = 5,
                h = { pointerEvents: "none", fill: c };
              return $.createElement(
                ct,
                { className: "recharts-brush-texts" },
                $.createElement(
                  Do,
                  Nl({ textAnchor: "end", verticalAnchor: "middle", x: Math.min(d, v) - y, y: u + s / 2 }, h),
                  this.getTextOfTick(a),
                ),
                $.createElement(
                  Do,
                  Nl({ textAnchor: "start", verticalAnchor: "middle", x: Math.max(d, v) + l + y, y: u + s / 2 }, h),
                  this.getTextOfTick(o),
                ),
              );
            },
          },
          {
            key: "render",
            value: function () {
              var i = this.props,
                a = i.data,
                o = i.className,
                u = i.children,
                s = i.x,
                l = i.y,
                c = i.width,
                f = i.height,
                d = i.alwaysShowText,
                v = this.state,
                y = v.startX,
                h = v.endX,
                w = v.isTextActive,
                p = v.isSlideMoving,
                x = v.isTravellerMoving;
              if (!a || !a.length || !H(s) || !H(l) || !H(c) || !H(f) || c <= 0 || f <= 0) return null;
              var m = Oe("recharts-brush", o),
                g = $.Children.count(u) === 1,
                b = aq("userSelect", "none");
              return $.createElement(
                ct,
                {
                  className: m,
                  onMouseMove: this.handleDrag,
                  onMouseLeave: this.handleLeaveWrapper,
                  onTouchMove: this.handleTouchMove,
                  style: b,
                },
                this.renderBackground(),
                g && this.renderPanorama(),
                this.renderSlide(y, h),
                this.renderTravellerLayer(y, "startX"),
                this.renderTravellerLayer(h, "endX"),
                (w || p || x || d) && this.renderText(),
              );
            },
          },
        ],
        [
          {
            key: "renderDefaultTraveller",
            value: function (i) {
              var a = i.x,
                o = i.y,
                u = i.width,
                s = i.height,
                l = i.stroke,
                c = Math.floor(o + s / 2) - 1;
              return $.createElement(
                $.Fragment,
                null,
                $.createElement("rect", { x: a, y: o, width: u, height: s, fill: l, stroke: "none" }),
                $.createElement("line", { x1: a + 1, y1: c, x2: a + u - 1, y2: c, fill: "none", stroke: "#fff" }),
                $.createElement("line", {
                  x1: a + 1,
                  y1: c + 2,
                  x2: a + u - 1,
                  y2: c + 2,
                  fill: "none",
                  stroke: "#fff",
                }),
              );
            },
          },
          {
            key: "renderTraveller",
            value: function (i, a) {
              var o;
              return (
                $.isValidElement(i)
                  ? (o = $.cloneElement(i, a))
                  : Z(i)
                  ? (o = i(a))
                  : (o = r.renderDefaultTraveller(a)),
                o
              );
            },
          },
          {
            key: "getDerivedStateFromProps",
            value: function (i, a) {
              var o = i.data,
                u = i.width,
                s = i.x,
                l = i.travellerWidth,
                c = i.updateId,
                f = i.startIndex,
                d = i.endIndex;
              if (o !== a.prevData || c !== a.prevUpdateId)
                return Qf(
                  { prevData: o, prevTravellerWidth: l, prevUpdateId: c, prevX: s, prevWidth: u },
                  o && o.length
                    ? dq({ data: o, width: u, x: s, travellerWidth: l, startIndex: f, endIndex: d })
                    : { scale: null, scaleValues: null },
                );
              if (a.scale && (u !== a.prevWidth || s !== a.prevX || l !== a.prevTravellerWidth)) {
                a.scale.range([s, s + u - l]);
                var v = a.scale.domain().map(function (y) {
                  return a.scale(y);
                });
                return {
                  prevData: o,
                  prevTravellerWidth: l,
                  prevUpdateId: c,
                  prevX: s,
                  prevWidth: u,
                  startX: a.scale(i.startIndex),
                  endX: a.scale(i.endIndex),
                  scaleValues: v,
                };
              }
              return null;
            },
          },
          {
            key: "getIndexInRange",
            value: function (i, a) {
              for (var o = i.length, u = 0, s = o - 1; s - u > 1; ) {
                var l = Math.floor((u + s) / 2);
                i[l] > a ? (s = l) : (u = l);
              }
              return a >= i[s] ? s : u;
            },
          },
        ],
      ),
      r
    );
  })(B.PureComponent);
Go.displayName = "Brush";
Go.defaultProps = {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: { top: 1, right: 1, bottom: 1, left: 1 },
  leaveTimeOut: 1e3,
  alwaysShowText: !1,
};
var hq = Uv;
function pq(e, t) {
  var r;
  return (
    hq(e, function (n, i, a) {
      return (r = t(n, i, a)), !r;
    }),
    !!r
  );
}
var vq = pq,
  yq = S_,
  mq = On,
  gq = vq,
  xq = yt,
  wq = mc;
function bq(e, t, r) {
  var n = xq(e) ? yq : gq;
  return r && wq(e, t, r) && (t = void 0), n(e, mq(t));
}
var _q = bq;
const Sq = he(_q);
var mr = function (t, r) {
  var n = t.alwaysShow,
    i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
};
function Oq(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; ) if (!t(e[r], r, e)) return !1;
  return !0;
}
var Eq = Oq,
  kq = Uv;
function Aq(e, t) {
  var r = !0;
  return (
    kq(e, function (n, i, a) {
      return (r = !!t(n, i, a)), r;
    }),
    r
  );
}
var Tq = Aq,
  Cq = Eq,
  Pq = Tq,
  Mq = On,
  $q = yt,
  Iq = mc;
function Nq(e, t, r) {
  var n = $q(e) ? Cq : Pq;
  return r && Iq(e, t, r) && (t = void 0), n(e, Mq(t));
}
var Rq = Nq;
const iE = he(Rq);
var ix = OS;
function jq(e, t, r) {
  t == "__proto__" && ix ? ix(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : (e[t] = r);
}
var Dq = jq,
  Lq = Dq,
  Fq = _S,
  Bq = On;
function Uq(e, t) {
  var r = {};
  return (
    (t = Bq(t)),
    Fq(e, function (n, i, a) {
      Lq(r, i, t(n, i, a));
    }),
    r
  );
}
var zq = Uq;
const Wq = he(zq);
function Hq(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function ax(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function qq(e, t, r) {
  return t && ax(e.prototype, t), r && ax(e, r), e;
}
function ox(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function er(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ox(Object(r), !0).forEach(function (n) {
          gy(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ox(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function gy(e, t, r) {
  return (
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
  );
}
var Gq = function (t, r, n, i, a) {
    var o = t.width,
      u = t.height,
      s = t.layout,
      l = t.children,
      c = Object.keys(r),
      f = {
        left: n.left,
        leftMirror: n.left,
        right: o - n.right,
        rightMirror: o - n.right,
        top: n.top,
        topMirror: n.top,
        bottom: u - n.bottom,
        bottomMirror: u - n.bottom,
      },
      d = !!kr(l, "Bar");
    return c.reduce(function (v, y) {
      var h = r[y],
        w = h.orientation,
        p = h.domain,
        x = h.padding,
        m = x === void 0 ? {} : x,
        g = h.mirror,
        b = h.reversed,
        _ = "".concat(w).concat(g ? "Mirror" : ""),
        S,
        O,
        E,
        A,
        k;
      if (h.type === "number" && (h.padding === "gap" || h.padding === "no-gap")) {
        var C = p[1] - p[0],
          M = 1 / 0,
          I = h.categoricalDomain.sort();
        I.forEach(function (oe, $e) {
          $e > 0 && (M = Math.min((oe || 0) - (I[$e - 1] || 0), M));
        });
        var D = M / C,
          N = h.layout === "vertical" ? n.height : n.width;
        if ((h.padding === "gap" && (S = (D * N) / 2), h.padding === "no-gap")) {
          var W = ra(t.barCategoryGap, D * N),
            P = (D * N) / 2;
          S = P - W - ((P - W) / N) * W;
        }
      }
      i === "xAxis"
        ? (O = [n.left + (m.left || 0) + (S || 0), n.left + n.width - (m.right || 0) - (S || 0)])
        : i === "yAxis"
        ? (O =
            s === "horizontal"
              ? [n.top + n.height - (m.bottom || 0), n.top + (m.top || 0)]
              : [n.top + (m.top || 0) + (S || 0), n.top + n.height - (m.bottom || 0) - (S || 0)])
        : (O = h.range),
        b && (O = [O[1], O[0]]);
      var j = dW(h, a, d),
        z = j.scale,
        V = j.realScaleType;
      z.domain(p).range(O), hW(z);
      var Q = wW(z, er(er({}, h), {}, { realScaleType: V }));
      i === "xAxis"
        ? ((k = (w === "top" && !g) || (w === "bottom" && g)), (E = n.left), (A = f[_] - k * h.height))
        : i === "yAxis" && ((k = (w === "left" && !g) || (w === "right" && g)), (E = f[_] - k * h.width), (A = n.top));
      var X = er(
        er(er({}, h), Q),
        {},
        {
          realScaleType: V,
          x: E,
          y: A,
          scale: z,
          width: i === "xAxis" ? n.width : h.width,
          height: i === "yAxis" ? n.height : h.height,
        },
      );
      return (
        (X.bandSize = Ol(X, Q)),
        !h.hide && i === "xAxis" ? (f[_] += (k ? -1 : 1) * X.height) : h.hide || (f[_] += (k ? -1 : 1) * X.width),
        er(er({}, v), {}, gy({}, y, X))
      );
    }, {});
  },
  aE = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y;
    return { x: Math.min(n, a), y: Math.min(i, o), width: Math.abs(a - n), height: Math.abs(o - i) };
  },
  Vq = function (t) {
    var r = t.x1,
      n = t.y1,
      i = t.x2,
      a = t.y2;
    return aE({ x: r, y: n }, { x: i, y: a });
  },
  oE = (function () {
    function e(t) {
      Hq(this, e), (this.scale = void 0), (this.scale = t);
    }
    return (
      qq(
        e,
        [
          {
            key: "domain",
            get: function () {
              return this.scale.domain;
            },
          },
          {
            key: "range",
            get: function () {
              return this.scale.range;
            },
          },
          {
            key: "rangeMin",
            get: function () {
              return this.range()[0];
            },
          },
          {
            key: "rangeMax",
            get: function () {
              return this.range()[1];
            },
          },
          {
            key: "bandwidth",
            get: function () {
              return this.scale.bandwidth;
            },
          },
          {
            key: "apply",
            value: function (r) {
              var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                i = n.bandAware,
                a = n.position;
              if (r !== void 0) {
                if (a)
                  switch (a) {
                    case "start":
                      return this.scale(r);
                    case "middle": {
                      var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                      return this.scale(r) + o;
                    }
                    case "end": {
                      var u = this.bandwidth ? this.bandwidth() : 0;
                      return this.scale(r) + u;
                    }
                    default:
                      return this.scale(r);
                  }
                if (i) {
                  var s = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(r) + s;
                }
                return this.scale(r);
              }
            },
          },
          {
            key: "isInRange",
            value: function (r) {
              var n = this.range(),
                i = n[0],
                a = n[n.length - 1];
              return i <= a ? r >= i && r <= a : r >= a && r <= i;
            },
          },
        ],
        [
          {
            key: "create",
            value: function (r) {
              return new e(r);
            },
          },
        ],
      ),
      e
    );
  })();
oE.EPS = 1e-4;
var xy = function (t) {
  var r = Object.keys(t).reduce(function (n, i) {
    return er(er({}, n), {}, gy({}, i, oE.create(t[i])));
  }, {});
  return er(
    er({}, r),
    {},
    {
      apply: function (i) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          o = a.bandAware,
          u = a.position;
        return Wq(i, function (s, l) {
          return r[l].apply(s, { bandAware: o, position: u });
        });
      },
      isInRange: function (i) {
        return iE(i, function (a, o) {
          return r[o].isInRange(a);
        });
      },
    },
  );
};
function ux(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function sx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ux(Object(r), !0).forEach(function (n) {
          Qq(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ux(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Qq(e, t, r) {
  return (
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
  );
}
function Yq(e, t) {
  return Zq(e) || Jq(e, t) || Xq(e, t) || Kq();
}
function Kq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xq(e, t) {
  if (e) {
    if (typeof e == "string") return lx(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return lx(e, t);
  }
}
function lx(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Jq(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), u;
        !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t));
        n = !0
      );
    } catch (s) {
      (i = !0), (a = s);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function Zq(e) {
  if (Array.isArray(e)) return e;
}
function yp() {
  return (
    (yp =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    yp.apply(this, arguments)
  );
}
var eG = function (t, r) {
    var n;
    return (
      $.isValidElement(t)
        ? (n = $.cloneElement(t, r))
        : Z(t)
        ? (n = t(r))
        : (n = $.createElement("line", yp({}, r, { className: "recharts-reference-line-line" }))),
      n
    );
  },
  tG = function (t, r, n, i, a) {
    var o = a.viewBox,
      u = o.x,
      s = o.y,
      l = o.width,
      c = o.height,
      f = a.position;
    if (n) {
      var d = a.y,
        v = a.yAxis.orientation,
        y = t.y.apply(d, { position: f });
      if (mr(a, "discard") && !t.y.isInRange(y)) return null;
      var h = [
        { x: u + l, y },
        { x: u, y },
      ];
      return v === "left" ? h.reverse() : h;
    }
    if (r) {
      var w = a.x,
        p = a.xAxis.orientation,
        x = t.x.apply(w, { position: f });
      if (mr(a, "discard") && !t.x.isInRange(x)) return null;
      var m = [
        { x, y: s + c },
        { x, y: s },
      ];
      return p === "top" ? m.reverse() : m;
    }
    if (i) {
      var g = a.segment,
        b = g.map(function (_) {
          return t.apply(_, { position: f });
        });
      return mr(a, "discard") &&
        Sq(b, function (_) {
          return !t.isInRange(_);
        })
        ? null
        : b;
    }
    return null;
  };
function wy(e) {
  var t = e.x,
    r = e.y,
    n = e.segment,
    i = e.xAxis,
    a = e.yAxis,
    o = e.shape,
    u = e.className,
    s = e.alwaysShow,
    l = e.clipPathId;
  Wi(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var c = xy({ x: i.scale, y: a.scale }),
    f = ze(t),
    d = ze(r),
    v = n && n.length === 2,
    y = tG(c, f, d, v, e);
  if (!y) return null;
  var h = Yq(y, 2),
    w = h[0],
    p = w.x,
    x = w.y,
    m = h[1],
    g = m.x,
    b = m.y,
    _ = mr(e, "hidden") ? "url(#".concat(l, ")") : void 0,
    S = sx(sx({ clipPath: _ }, le(e, !0)), {}, { x1: p, y1: x, x2: g, y2: b });
  return $.createElement(
    ct,
    { className: Oe("recharts-reference-line", u) },
    eG(o, S),
    Je.renderCallByParent(e, Vq({ x1: p, y1: x, x2: g, y2: b })),
  );
}
wy.displayName = "ReferenceLine";
wy.defaultProps = {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle",
};
function mp() {
  return (
    (mp =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    mp.apply(this, arguments)
  );
}
function cx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function fx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cx(Object(r), !0).forEach(function (n) {
          rG(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : cx(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function rG(e, t, r) {
  return (
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
  );
}
var nG = function (t) {
  var r = t.x,
    n = t.y,
    i = t.xAxis,
    a = t.yAxis,
    o = xy({ x: i.scale, y: a.scale }),
    u = o.apply({ x: r, y: n }, { bandAware: !0 });
  return mr(t, "discard") && !o.isInRange(u) ? null : u;
};
function su(e) {
  var t = e.x,
    r = e.y,
    n = e.r,
    i = e.alwaysShow,
    a = e.clipPathId,
    o = ze(t),
    u = ze(r);
  if ((Wi(i === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !o || !u))
    return null;
  var s = nG(e);
  if (!s) return null;
  var l = s.x,
    c = s.y,
    f = e.shape,
    d = e.className,
    v = mr(e, "hidden") ? "url(#".concat(a, ")") : void 0,
    y = fx(fx({ clipPath: v }, le(e, !0)), {}, { cx: l, cy: c });
  return $.createElement(
    ct,
    { className: Oe("recharts-reference-dot", d) },
    su.renderDot(f, y),
    Je.renderCallByParent(e, { x: l - n, y: c - n, width: 2 * n, height: 2 * n }),
  );
}
su.displayName = "ReferenceDot";
su.defaultProps = {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
};
su.renderDot = function (e, t) {
  var r;
  return (
    $.isValidElement(e)
      ? (r = $.cloneElement(e, t))
      : Z(e)
      ? (r = e(t))
      : (r = $.createElement(my, mp({}, t, { cx: t.cx, cy: t.cy, className: "recharts-reference-dot-dot" }))),
    r
  );
};
function gp() {
  return (
    (gp =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    gp.apply(this, arguments)
  );
}
function dx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function hx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? dx(Object(r), !0).forEach(function (n) {
          iG(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : dx(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function iG(e, t, r) {
  return (
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
  );
}
var aG = function (t, r, n, i, a) {
  var o = a.x1,
    u = a.x2,
    s = a.y1,
    l = a.y2,
    c = a.xAxis,
    f = a.yAxis;
  if (!c || !f) return null;
  var d = xy({ x: c.scale, y: f.scale }),
    v = {
      x: t ? d.x.apply(o, { position: "start" }) : d.x.rangeMin,
      y: n ? d.y.apply(s, { position: "start" }) : d.y.rangeMin,
    },
    y = {
      x: r ? d.x.apply(u, { position: "end" }) : d.x.rangeMax,
      y: i ? d.y.apply(l, { position: "end" }) : d.y.rangeMax,
    };
  return mr(a, "discard") && (!d.isInRange(v) || !d.isInRange(y)) ? null : aE(v, y);
};
function lu(e) {
  var t = e.x1,
    r = e.x2,
    n = e.y1,
    i = e.y2,
    a = e.className,
    o = e.alwaysShow,
    u = e.clipPathId;
  Wi(o === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var s = ze(t),
    l = ze(r),
    c = ze(n),
    f = ze(i),
    d = e.shape;
  if (!s && !l && !c && !f && !d) return null;
  var v = aG(s, l, c, f, e);
  if (!v && !d) return null;
  var y = mr(e, "hidden") ? "url(#".concat(u, ")") : void 0;
  return $.createElement(
    ct,
    { className: Oe("recharts-reference-area", a) },
    lu.renderRect(d, hx(hx({ clipPath: y }, le(e, !0)), v)),
    Je.renderCallByParent(e, v),
  );
}
lu.displayName = "ReferenceArea";
lu.defaultProps = {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1,
};
lu.renderRect = function (e, t) {
  var r;
  return (
    $.isValidElement(e)
      ? (r = $.cloneElement(e, t))
      : Z(e)
      ? (r = e(t))
      : (r = $.createElement(yy, gp({}, t, { className: "recharts-reference-area-rect" }))),
    r
  );
};
function ps(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ps = function (r) {
          return typeof r;
        })
      : (ps = function (r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    ps(e)
  );
}
function Ri() {
  return (
    (Ri =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Ri.apply(this, arguments)
  );
}
function px(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? px(Object(r), !0).forEach(function (n) {
          oG(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : px(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function oG(e, t, r) {
  return (
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
  );
}
function Yf(e, t) {
  if (e == null) return {};
  var r = uG(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function uG(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function sG(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function vx(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function lG(e, t, r) {
  return t && vx(e.prototype, t), r && vx(e, r), e;
}
function cG(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    t && xp(e, t);
}
function xp(e, t) {
  return (
    (xp =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    xp(e, t)
  );
}
function fG(e) {
  var t = pG();
  return function () {
    var n = jl(e),
      i;
    if (t) {
      var a = jl(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return dG(this, i);
  };
}
function dG(e, t) {
  return t && (ps(t) === "object" || typeof t == "function") ? t : hG(e);
}
function hG(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pG() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function jl(e) {
  return (
    (jl = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    jl(e)
  );
}
var Dn = (function (e) {
  cG(r, e);
  var t = fG(r);
  function r() {
    return sG(this, r), t.apply(this, arguments);
  }
  return (
    lG(
      r,
      [
        {
          key: "shouldComponentUpdate",
          value: function (i) {
            var a = i.viewBox,
              o = Yf(i, ["viewBox"]),
              u = this.props,
              s = u.viewBox,
              l = Yf(u, ["viewBox"]);
            return !Lo(a, s) || !Lo(o, l);
          },
        },
        {
          key: "getTickLineCoord",
          value: function (i) {
            var a = this.props,
              o = a.x,
              u = a.y,
              s = a.width,
              l = a.height,
              c = a.orientation,
              f = a.tickSize,
              d = a.mirror,
              v = a.tickMargin,
              y,
              h,
              w,
              p,
              x,
              m,
              g = d ? -1 : 1,
              b = i.tickSize || f,
              _ = H(i.tickCoord) ? i.tickCoord : i.coordinate;
            switch (c) {
              case "top":
                (y = h = i.coordinate), (p = u + +!d * l), (w = p - g * b), (m = w - g * v), (x = _);
                break;
              case "left":
                (w = p = i.coordinate), (h = o + +!d * s), (y = h - g * b), (x = y - g * v), (m = _);
                break;
              case "right":
                (w = p = i.coordinate), (h = o + +d * s), (y = h + g * b), (x = y + g * v), (m = _);
                break;
              default:
                (y = h = i.coordinate), (p = u + +d * l), (w = p + g * b), (m = w + g * v), (x = _);
                break;
            }
            return { line: { x1: y, y1: w, x2: h, y2: p }, tick: { x, y: m } };
          },
        },
        {
          key: "getTickTextAnchor",
          value: function () {
            var i = this.props,
              a = i.orientation,
              o = i.mirror,
              u;
            switch (a) {
              case "left":
                u = o ? "start" : "end";
                break;
              case "right":
                u = o ? "end" : "start";
                break;
              default:
                u = "middle";
                break;
            }
            return u;
          },
        },
        {
          key: "getTickVerticalAnchor",
          value: function () {
            var i = this.props,
              a = i.orientation,
              o = i.mirror,
              u = "end";
            switch (a) {
              case "left":
              case "right":
                u = "middle";
                break;
              case "top":
                u = o ? "start" : "end";
                break;
              default:
                u = o ? "end" : "start";
                break;
            }
            return u;
          },
        },
        {
          key: "renderAxisLine",
          value: function () {
            var i = this.props,
              a = i.x,
              o = i.y,
              u = i.width,
              s = i.height,
              l = i.orientation,
              c = i.mirror,
              f = i.axisLine,
              d = se(se(se({}, le(this.props)), le(f)), {}, { fill: "none" });
            if (l === "top" || l === "bottom") {
              var v = +((l === "top" && !c) || (l === "bottom" && c));
              d = se(se({}, d), {}, { x1: a, y1: o + v * s, x2: a + u, y2: o + v * s });
            } else {
              var y = +((l === "left" && !c) || (l === "right" && c));
              d = se(se({}, d), {}, { x1: a + y * u, y1: o, x2: a + y * u, y2: o + s });
            }
            return $.createElement(
              "line",
              Ri({}, d, { className: Oe("recharts-cartesian-axis-line", Ze(f, "className")) }),
            );
          },
        },
        {
          key: "renderTicks",
          value: function (i) {
            var a = this,
              o = this.props,
              u = o.tickLine,
              s = o.stroke,
              l = o.tick,
              c = o.tickFormatter,
              f = o.unit,
              d = r.getTicks(se(se({}, this.props), {}, { ticks: i })),
              v = this.getTickTextAnchor(),
              y = this.getTickVerticalAnchor(),
              h = le(this.props),
              w = le(l),
              p = se(se({}, h), {}, { fill: "none" }, le(u)),
              x = d.map(function (m, g) {
                var b = a.getTickLineCoord(m),
                  _ = b.line,
                  S = b.tick,
                  O = se(
                    se(se(se({ textAnchor: v, verticalAnchor: y }, h), {}, { stroke: "none", fill: s }, w), S),
                    {},
                    { index: g, payload: m, visibleTicksCount: d.length, tickFormatter: c },
                  );
                return $.createElement(
                  ct,
                  Ri({ className: "recharts-cartesian-axis-tick", key: "tick-".concat(g) }, m_(a.props, m, g)),
                  u &&
                    $.createElement(
                      "line",
                      Ri({}, p, _, { className: Oe("recharts-cartesian-axis-tick-line", Ze(u, "className")) }),
                    ),
                  l && r.renderTickItem(l, O, "".concat(Z(c) ? c(m.value, g) : m.value).concat(f || "")),
                );
              });
            return $.createElement("g", { className: "recharts-cartesian-axis-ticks" }, x);
          },
        },
        {
          key: "render",
          value: function () {
            var i = this.props,
              a = i.axisLine,
              o = i.width,
              u = i.height,
              s = i.ticksGenerator,
              l = i.className,
              c = i.hide;
            if (c) return null;
            var f = this.props,
              d = f.ticks,
              v = Yf(f, ["ticks"]),
              y = d;
            return (
              Z(s) && (y = d && d.length > 0 ? s(this.props) : s(v)),
              o <= 0 || u <= 0 || !y || !y.length
                ? null
                : $.createElement(
                    ct,
                    { className: Oe("recharts-cartesian-axis", l) },
                    a && this.renderAxisLine(),
                    this.renderTicks(y),
                    Je.renderCallByParent(this.props),
                  )
            );
          },
        },
      ],
      [
        {
          key: "getTicks",
          value: function (i) {
            var a = i.tick,
              o = i.ticks,
              u = i.viewBox,
              s = i.minTickGap,
              l = i.orientation,
              c = i.interval,
              f = i.tickFormatter,
              d = i.unit;
            return !o || !o.length || !a
              ? []
              : H(c) || fn.isSsr
              ? r.getNumberIntervalTicks(o, typeof c == "number" && H(c) ? c : 0)
              : c === "preserveStartEnd"
              ? r.getTicksStart({ ticks: o, tickFormatter: f, viewBox: u, orientation: l, minTickGap: s, unit: d }, !0)
              : c === "preserveStart"
              ? r.getTicksStart({ ticks: o, tickFormatter: f, viewBox: u, orientation: l, minTickGap: s, unit: d })
              : r.getTicksEnd({ ticks: o, tickFormatter: f, viewBox: u, orientation: l, minTickGap: s, unit: d });
          },
        },
        {
          key: "getNumberIntervalTicks",
          value: function (i, a) {
            return i.filter(function (o, u) {
              return u % (a + 1) === 0;
            });
          },
        },
        {
          key: "getTicksStart",
          value: function (i, a) {
            var o = i.ticks,
              u = i.tickFormatter,
              s = i.viewBox,
              l = i.orientation,
              c = i.minTickGap,
              f = i.unit,
              d = s.x,
              v = s.y,
              y = s.width,
              h = s.height,
              w = l === "top" || l === "bottom" ? "width" : "height",
              p = (o || []).slice(),
              x = f && w === "width" ? jn(f)[w] : 0,
              m = p.length,
              g = m >= 2 ? fr(p[1].coordinate - p[0].coordinate) : 1,
              b,
              _;
            if (
              (g === 1
                ? ((b = w === "width" ? d : v), (_ = w === "width" ? d + y : v + h))
                : ((b = w === "width" ? d + y : v + h), (_ = w === "width" ? d : v)),
              a)
            ) {
              var S = o[m - 1],
                O = Z(u) ? u(S.value, m - 1) : S.value,
                E = jn(O)[w] + x,
                A = g * (S.coordinate + (g * E) / 2 - _);
              p[m - 1] = S = se(se({}, S), {}, { tickCoord: A > 0 ? S.coordinate - A * g : S.coordinate });
              var k = g * (S.tickCoord - (g * E) / 2 - b) >= 0 && g * (S.tickCoord + (g * E) / 2 - _) <= 0;
              k && ((_ = S.tickCoord - g * (E / 2 + c)), (p[m - 1] = se(se({}, S), {}, { isShow: !0 })));
            }
            for (var C = a ? m - 1 : m, M = 0; M < C; M++) {
              var I = p[M],
                D = Z(u) ? u(I.value, M) : I.value,
                N = jn(D)[w] + x;
              if (M === 0) {
                var W = g * (I.coordinate - (g * N) / 2 - b);
                p[M] = I = se(se({}, I), {}, { tickCoord: W < 0 ? I.coordinate - W * g : I.coordinate });
              } else p[M] = I = se(se({}, I), {}, { tickCoord: I.coordinate });
              var P = g * (I.tickCoord - (g * N) / 2 - b) >= 0 && g * (I.tickCoord + (g * N) / 2 - _) <= 0;
              P && ((b = I.tickCoord + g * (N / 2 + c)), (p[M] = se(se({}, I), {}, { isShow: !0 })));
            }
            return p.filter(function (j) {
              return j.isShow;
            });
          },
        },
        {
          key: "getTicksEnd",
          value: function (i) {
            var a = i.ticks,
              o = i.tickFormatter,
              u = i.viewBox,
              s = i.orientation,
              l = i.minTickGap,
              c = i.unit,
              f = u.x,
              d = u.y,
              v = u.width,
              y = u.height,
              h = s === "top" || s === "bottom" ? "width" : "height",
              w = c && h === "width" ? jn(c)[h] : 0,
              p = (a || []).slice(),
              x = p.length,
              m = x >= 2 ? fr(p[1].coordinate - p[0].coordinate) : 1,
              g,
              b;
            m === 1
              ? ((g = h === "width" ? f : d), (b = h === "width" ? f + v : d + y))
              : ((g = h === "width" ? f + v : d + y), (b = h === "width" ? f : d));
            for (var _ = x - 1; _ >= 0; _--) {
              var S = p[_],
                O = Z(o) ? o(S.value, x - _ - 1) : S.value,
                E = jn(O)[h] + w;
              if (_ === x - 1) {
                var A = m * (S.coordinate + (m * E) / 2 - b);
                p[_] = S = se(se({}, S), {}, { tickCoord: A > 0 ? S.coordinate - A * m : S.coordinate });
              } else p[_] = S = se(se({}, S), {}, { tickCoord: S.coordinate });
              var k = m * (S.tickCoord - (m * E) / 2 - g) >= 0 && m * (S.tickCoord + (m * E) / 2 - b) <= 0;
              k && ((b = S.tickCoord - m * (E / 2 + l)), (p[_] = se(se({}, S), {}, { isShow: !0 })));
            }
            return p.filter(function (C) {
              return C.isShow;
            });
          },
        },
        {
          key: "renderTickItem",
          value: function (i, a, o) {
            var u;
            return (
              $.isValidElement(i)
                ? (u = $.cloneElement(i, a))
                : Z(i)
                ? (u = i(a))
                : (u = $.createElement(Do, Ri({}, a, { className: "recharts-cartesian-axis-tick-value" }), o)),
              u
            );
          },
        },
      ],
    ),
    r
  );
})(B.Component);
Dn.displayName = "CartesianAxis";
Dn.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: { x: 0, y: 0, width: 0, height: 0 },
  orientation: "bottom",
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd",
};
function vs(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (vs = function (r) {
          return typeof r;
        })
      : (vs = function (r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    vs(e)
  );
}
function vG(e, t) {
  if (e == null) return {};
  var r = yG(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function yG(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Hn() {
  return (
    (Hn =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Hn.apply(this, arguments)
  );
}
function yx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Gr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yx(Object(r), !0).forEach(function (n) {
          mG(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : yx(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function mG(e, t, r) {
  return (
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
  );
}
function gG(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function mx(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function xG(e, t, r) {
  return t && mx(e.prototype, t), r && mx(e, r), e;
}
function wG(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    t && wp(e, t);
}
function wp(e, t) {
  return (
    (wp =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    wp(e, t)
  );
}
function bG(e) {
  var t = OG();
  return function () {
    var n = Dl(e),
      i;
    if (t) {
      var a = Dl(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return _G(this, i);
  };
}
function _G(e, t) {
  return t && (vs(t) === "object" || typeof t == "function") ? t : SG(e);
}
function SG(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function OG() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function Dl(e) {
  return (
    (Dl = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Dl(e)
  );
}
var ar = (function (e) {
  wG(r, e);
  var t = bG(r);
  function r() {
    var n;
    gG(this, r);
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
    return (
      (n = t.call.apply(t, [this].concat(a))),
      (n.state = { isAnimationFinished: !0 }),
      (n.id = yc("recharts-area-")),
      (n.handleAnimationEnd = function () {
        var u = n.props.onAnimationEnd;
        n.setState({ isAnimationFinished: !0 }), Z(u) && u();
      }),
      (n.handleAnimationStart = function () {
        var u = n.props.onAnimationStart;
        n.setState({ isAnimationFinished: !1 }), Z(u) && u();
      }),
      n
    );
  }
  return (
    xG(
      r,
      [
        {
          key: "renderDots",
          value: function (i, a) {
            var o = this.props.isAnimationActive,
              u = this.state.isAnimationFinished;
            if (o && !u) return null;
            var s = this.props,
              l = s.dot,
              c = s.points,
              f = s.dataKey,
              d = le(this.props),
              v = le(l, !0),
              y = c.map(function (w, p) {
                var x = Gr(
                  Gr(Gr({ key: "dot-".concat(p), r: 3 }, d), v),
                  {},
                  { dataKey: f, cx: w.x, cy: w.y, index: p, value: w.value, payload: w.payload },
                );
                return r.renderDotItem(l, x);
              }),
              h = { clipPath: i ? "url(#clipPath-".concat(a, ")") : null };
            return $.createElement(ct, Hn({ className: "recharts-area-dots" }, h), y);
          },
        },
        {
          key: "renderHorizontalRect",
          value: function (i) {
            var a = this.props,
              o = a.baseLine,
              u = a.points,
              s = a.strokeWidth,
              l = u[0].x,
              c = u[u.length - 1].x,
              f = i * Math.abs(l - c),
              d = tn(
                u.map(function (v) {
                  return v.y || 0;
                }),
              );
            return (
              H(o) && typeof o == "number"
                ? (d = Math.max(o, d))
                : o &&
                  Ue(o) &&
                  o.length &&
                  (d = Math.max(
                    tn(
                      o.map(function (v) {
                        return v.y || 0;
                      }),
                    ),
                    d,
                  )),
              H(d)
                ? $.createElement("rect", {
                    x: l < c ? l : l - f,
                    y: 0,
                    width: f,
                    height: Math.floor(d + (s ? parseInt("".concat(s), 10) : 1)),
                  })
                : null
            );
          },
        },
        {
          key: "renderVerticalRect",
          value: function (i) {
            var a = this.props,
              o = a.baseLine,
              u = a.points,
              s = a.strokeWidth,
              l = u[0].y,
              c = u[u.length - 1].y,
              f = i * Math.abs(l - c),
              d = tn(
                u.map(function (v) {
                  return v.x || 0;
                }),
              );
            return (
              H(o) && typeof o == "number"
                ? (d = Math.max(o, d))
                : o &&
                  Ue(o) &&
                  o.length &&
                  (d = Math.max(
                    tn(
                      o.map(function (v) {
                        return v.x || 0;
                      }),
                    ),
                    d,
                  )),
              H(d)
                ? $.createElement("rect", {
                    x: 0,
                    y: l < c ? l : l - f,
                    width: d + (s ? parseInt("".concat(s), 10) : 1),
                    height: Math.floor(f),
                  })
                : null
            );
          },
        },
        {
          key: "renderClipRect",
          value: function (i) {
            var a = this.props.layout;
            return a === "vertical" ? this.renderVerticalRect(i) : this.renderHorizontalRect(i);
          },
        },
        {
          key: "renderAreaStatically",
          value: function (i, a, o, u) {
            var s = this.props,
              l = s.layout,
              c = s.type,
              f = s.stroke,
              d = s.connectNulls,
              v = s.isRange;
            s.ref;
            var y = vG(s, ["layout", "type", "stroke", "connectNulls", "isRange", "ref"]);
            return $.createElement(
              ct,
              { clipPath: o ? "url(#clipPath-".concat(u, ")") : null },
              $.createElement(
                Gi,
                Hn({}, le(y, !0), {
                  points: i,
                  connectNulls: d,
                  type: c,
                  baseLine: a,
                  layout: l,
                  stroke: "none",
                  className: "recharts-area-area",
                }),
              ),
              f !== "none" &&
                $.createElement(
                  Gi,
                  Hn({}, le(this.props), {
                    className: "recharts-area-curve",
                    layout: l,
                    type: c,
                    connectNulls: d,
                    fill: "none",
                    points: i,
                  }),
                ),
              f !== "none" &&
                v &&
                $.createElement(
                  Gi,
                  Hn({}, le(this.props), {
                    className: "recharts-area-curve",
                    layout: l,
                    type: c,
                    connectNulls: d,
                    fill: "none",
                    points: a,
                  }),
                ),
            );
          },
        },
        {
          key: "renderAreaWithAnimation",
          value: function (i, a) {
            var o = this,
              u = this.props,
              s = u.points,
              l = u.baseLine,
              c = u.isAnimationActive,
              f = u.animationBegin,
              d = u.animationDuration,
              v = u.animationEasing,
              y = u.animationId,
              h = this.state,
              w = h.prevPoints,
              p = h.prevBaseLine;
            return $.createElement(
              aa,
              {
                begin: f,
                duration: d,
                isActive: c,
                easing: v,
                from: { t: 0 },
                to: { t: 1 },
                key: "area-".concat(y),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (x) {
                var m = x.t;
                if (w) {
                  var g = w.length / s.length,
                    b = s.map(function (E, A) {
                      var k = Math.floor(A * g);
                      if (w[k]) {
                        var C = w[k],
                          M = gi(C.x, E.x),
                          I = gi(C.y, E.y);
                        return Gr(Gr({}, E), {}, { x: M(m), y: I(m) });
                      }
                      return E;
                    }),
                    _;
                  if (H(l) && typeof l == "number") {
                    var S = gi(p, l);
                    _ = S(m);
                  } else if (Y(l) || tu(l)) {
                    var O = gi(p, 0);
                    _ = O(m);
                  } else
                    _ = l.map(function (E, A) {
                      var k = Math.floor(A * g);
                      if (p[k]) {
                        var C = p[k],
                          M = gi(C.x, E.x),
                          I = gi(C.y, E.y);
                        return Gr(Gr({}, E), {}, { x: M(m), y: I(m) });
                      }
                      return E;
                    });
                  return o.renderAreaStatically(b, _, i, a);
                }
                return $.createElement(
                  ct,
                  null,
                  $.createElement(
                    "defs",
                    null,
                    $.createElement("clipPath", { id: "animationClipPath-".concat(a) }, o.renderClipRect(m)),
                  ),
                  $.createElement(
                    ct,
                    { clipPath: "url(#animationClipPath-".concat(a, ")") },
                    o.renderAreaStatically(s, l, i, a),
                  ),
                );
              },
            );
          },
        },
        {
          key: "renderArea",
          value: function (i, a) {
            var o = this.props,
              u = o.points,
              s = o.baseLine,
              l = o.isAnimationActive,
              c = this.state,
              f = c.prevPoints,
              d = c.prevBaseLine,
              v = c.totalLength;
            return l && u && u.length && ((!f && v > 0) || !Bh(f, u) || !Bh(d, s))
              ? this.renderAreaWithAnimation(i, a)
              : this.renderAreaStatically(u, s, i, a);
          },
        },
        {
          key: "render",
          value: function () {
            var i = this.props,
              a = i.hide,
              o = i.dot,
              u = i.points,
              s = i.className,
              l = i.top,
              c = i.left,
              f = i.xAxis,
              d = i.yAxis,
              v = i.width,
              y = i.height,
              h = i.isAnimationActive,
              w = i.id;
            if (a || !u || !u.length) return null;
            var p = this.state.isAnimationFinished,
              x = u.length === 1,
              m = Oe("recharts-area", s),
              g = (f && f.allowDataOverflow) || (d && d.allowDataOverflow),
              b = Y(w) ? this.id : w;
            return $.createElement(
              ct,
              { className: m },
              g
                ? $.createElement(
                    "defs",
                    null,
                    $.createElement(
                      "clipPath",
                      { id: "clipPath-".concat(b) },
                      $.createElement("rect", { x: c, y: l, width: v, height: Math.floor(y) }),
                    ),
                  )
                : null,
              x ? null : this.renderArea(g, b),
              (o || x) && this.renderDots(g, b),
              (!h || p) && hn.renderCallByParent(this.props, u),
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (i, a) {
            return i.animationId !== a.prevAnimationId
              ? {
                  prevAnimationId: i.animationId,
                  curPoints: i.points,
                  curBaseLine: i.baseLine,
                  prevPoints: a.curPoints,
                  prevBaseLine: a.curBaseLine,
                }
              : i.points !== a.curPoints || i.baseLine !== a.curBaseLine
              ? { curPoints: i.points, curBaseLine: i.baseLine }
              : null;
          },
        },
      ],
    ),
    r
  );
})(B.PureComponent);
ar.displayName = "Area";
ar.defaultProps = {
  stroke: "#3182bd",
  fill: "#3182bd",
  fillOpacity: 0.6,
  xAxisId: 0,
  yAxisId: 0,
  legendType: "line",
  connectNulls: !1,
  points: [],
  dot: !1,
  activeDot: !0,
  hide: !1,
  isAnimationActive: !fn.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
};
ar.getBaseValue = function (e, t, r) {
  var n = e.layout,
    i = e.baseValue;
  if (H(i) && typeof i == "number") return i;
  var a = n === "horizontal" ? r : t,
    o = a.scale.domain();
  if (a.type === "number") {
    var u = Math.max(o[0], o[1]),
      s = Math.min(o[0], o[1]);
    return i === "dataMin" ? s : i === "dataMax" || u < 0 ? u : Math.max(Math.min(o[0], o[1]), 0);
  }
  return i === "dataMin" ? o[0] : i === "dataMax" ? o[1] : o[0];
};
ar.getComposedData = function (e) {
  var t = e.props,
    r = e.xAxis,
    n = e.yAxis,
    i = e.xAxisTicks,
    a = e.yAxisTicks,
    o = e.bandSize,
    u = e.dataKey,
    s = e.stackedData,
    l = e.dataStartIndex,
    c = e.displayedData,
    f = e.offset,
    d = t.layout,
    v = s && s.length,
    y = ar.getBaseValue(t, r, n),
    h = !1,
    w = c.map(function (x, m) {
      var g = jr(x, u),
        b;
      v ? (b = s[l + m]) : ((b = g), Ue(b) ? (h = !0) : (b = [y, b]));
      var _ = Y(b[1]) || (v && Y(g));
      return d === "horizontal"
        ? {
            x: I1({ axis: r, ticks: i, bandSize: o, entry: x, index: m }),
            y: _ ? null : n.scale(b[1]),
            value: b,
            payload: x,
          }
        : {
            x: _ ? null : r.scale(b[1]),
            y: I1({ axis: n, ticks: a, bandSize: o, entry: x, index: m }),
            value: b,
            payload: x,
          };
    }),
    p;
  return (
    v || h
      ? (p = w.map(function (x) {
          return d === "horizontal"
            ? { x: x.x, y: !Y(Ze(x, "value[0]")) && !Y(Ze(x, "y")) ? n.scale(Ze(x, "value[0]")) : null }
            : { x: Y(Ze(x, "value[0]")) ? null : r.scale(Ze(x, "value[0]")), y: x.y };
        }))
      : d === "horizontal"
      ? (p = n.scale(y))
      : (p = r.scale(y)),
    Gr({ points: w, baseLine: p, layout: d, isRange: h }, f)
  );
};
ar.renderDotItem = function (e, t) {
  var r;
  return (
    $.isValidElement(e)
      ? (r = $.cloneElement(e, t))
      : Z(e)
      ? (r = e(t))
      : (r = $.createElement(my, Hn({}, t, { className: "recharts-area-dot" }))),
    r
  );
};
var by = function () {
  return null;
};
by.displayName = "XAxis";
by.defaultProps = {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  domain: [0, "auto"],
  padding: { left: 0, right: 0 },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0,
};
var vi = function () {
  return null;
};
vi.displayName = "YAxis";
vi.defaultProps = {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  domain: [0, "auto"],
  padding: { top: 0, bottom: 0 },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
};
var EG = On,
  kG = eu,
  AG = lc;
function TG(e) {
  return function (t, r, n) {
    var i = Object(t);
    if (!kG(t)) {
      var a = EG(r);
      (t = AG(t)),
        (r = function (u) {
          return a(i[u], u, i);
        });
    }
    var o = e(t, r, n);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
var CG = TG,
  PG = rE;
function MG(e) {
  var t = PG(e),
    r = t % 1;
  return t === t ? (r ? t - r : t) : 0;
}
var $G = MG,
  IG = U_,
  NG = On,
  RG = $G,
  jG = Math.max;
function DG(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n) return -1;
  var i = r == null ? 0 : RG(r);
  return i < 0 && (i = jG(n + i, 0)), IG(e, NG(t), i);
}
var LG = DG,
  FG = CG,
  BG = LG,
  UG = FG(BG),
  zG = UG;
const WG = he(zG);
var HG = kS,
  qG = bn,
  GG = "Expected a function";
function VG(e, t, r) {
  var n = !0,
    i = !0;
  if (typeof e != "function") throw new TypeError(GG);
  return (
    qG(r) && ((n = "leading" in r ? !!r.leading : n), (i = "trailing" in r ? !!r.trailing : i)),
    HG(e, t, { leading: n, maxWait: t, trailing: i })
  );
}
var QG = VG;
const YG = he(QG);
var KG = _n,
  XG = Sn,
  JG = "[object Boolean]";
function ZG(e) {
  return e === !0 || e === !1 || (XG(e) && KG(e) == JG);
}
var eV = ZG;
const tV = he(eV);
var bp = function (t, r, n, i, a) {
    var o = Pr(t, wy.displayName),
      u = Pr(t, su.displayName),
      s = o.concat(u),
      l = Pr(t, lu.displayName),
      c = "".concat(i, "Id"),
      f = i[0],
      d = r;
    if (
      (s.length &&
        (d = s.reduce(function (h, w) {
          if (w.props[c] === n && mr(w.props, "extendDomain") && H(w.props[f])) {
            var p = w.props[f];
            return [Math.min(h[0], p), Math.max(h[1], p)];
          }
          return h;
        }, d)),
      l.length)
    ) {
      var v = "".concat(f, "1"),
        y = "".concat(f, "2");
      d = l.reduce(function (h, w) {
        if (w.props[c] === n && mr(w.props, "extendDomain") && H(w.props[v]) && H(w.props[y])) {
          var p = w.props[v],
            x = w.props[y];
          return [Math.min(h[0], p, x), Math.max(h[1], p, x)];
        }
        return h;
      }, d);
    }
    return (
      a &&
        a.length &&
        (d = a.reduce(function (h, w) {
          return H(w) ? [Math.min(h[0], w), Math.max(h[1], w)] : h;
        }, d)),
      d
    );
  },
  uE = { exports: {} };
(function (e) {
  var t = Object.prototype.hasOwnProperty,
    r = "~";
  function n() {}
  Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
  function i(s, l, c) {
    (this.fn = s), (this.context = l), (this.once = c || !1);
  }
  function a(s, l, c, f, d) {
    if (typeof c != "function") throw new TypeError("The listener must be a function");
    var v = new i(c, f || s, d),
      y = r ? r + l : l;
    return (
      s._events[y]
        ? s._events[y].fn
          ? (s._events[y] = [s._events[y], v])
          : s._events[y].push(v)
        : ((s._events[y] = v), s._eventsCount++),
      s
    );
  }
  function o(s, l) {
    --s._eventsCount === 0 ? (s._events = new n()) : delete s._events[l];
  }
  function u() {
    (this._events = new n()), (this._eventsCount = 0);
  }
  (u.prototype.eventNames = function () {
    var l = [],
      c,
      f;
    if (this._eventsCount === 0) return l;
    for (f in (c = this._events)) t.call(c, f) && l.push(r ? f.slice(1) : f);
    return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(c)) : l;
  }),
    (u.prototype.listeners = function (l) {
      var c = r ? r + l : l,
        f = this._events[c];
      if (!f) return [];
      if (f.fn) return [f.fn];
      for (var d = 0, v = f.length, y = new Array(v); d < v; d++) y[d] = f[d].fn;
      return y;
    }),
    (u.prototype.listenerCount = function (l) {
      var c = r ? r + l : l,
        f = this._events[c];
      return f ? (f.fn ? 1 : f.length) : 0;
    }),
    (u.prototype.emit = function (l, c, f, d, v, y) {
      var h = r ? r + l : l;
      if (!this._events[h]) return !1;
      var w = this._events[h],
        p = arguments.length,
        x,
        m;
      if (w.fn) {
        switch ((w.once && this.removeListener(l, w.fn, void 0, !0), p)) {
          case 1:
            return w.fn.call(w.context), !0;
          case 2:
            return w.fn.call(w.context, c), !0;
          case 3:
            return w.fn.call(w.context, c, f), !0;
          case 4:
            return w.fn.call(w.context, c, f, d), !0;
          case 5:
            return w.fn.call(w.context, c, f, d, v), !0;
          case 6:
            return w.fn.call(w.context, c, f, d, v, y), !0;
        }
        for (m = 1, x = new Array(p - 1); m < p; m++) x[m - 1] = arguments[m];
        w.fn.apply(w.context, x);
      } else {
        var g = w.length,
          b;
        for (m = 0; m < g; m++)
          switch ((w[m].once && this.removeListener(l, w[m].fn, void 0, !0), p)) {
            case 1:
              w[m].fn.call(w[m].context);
              break;
            case 2:
              w[m].fn.call(w[m].context, c);
              break;
            case 3:
              w[m].fn.call(w[m].context, c, f);
              break;
            case 4:
              w[m].fn.call(w[m].context, c, f, d);
              break;
            default:
              if (!x) for (b = 1, x = new Array(p - 1); b < p; b++) x[b - 1] = arguments[b];
              w[m].fn.apply(w[m].context, x);
          }
      }
      return !0;
    }),
    (u.prototype.on = function (l, c, f) {
      return a(this, l, c, f, !1);
    }),
    (u.prototype.once = function (l, c, f) {
      return a(this, l, c, f, !0);
    }),
    (u.prototype.removeListener = function (l, c, f, d) {
      var v = r ? r + l : l;
      if (!this._events[v]) return this;
      if (!c) return o(this, v), this;
      var y = this._events[v];
      if (y.fn) y.fn === c && (!d || y.once) && (!f || y.context === f) && o(this, v);
      else {
        for (var h = 0, w = [], p = y.length; h < p; h++)
          (y[h].fn !== c || (d && !y[h].once) || (f && y[h].context !== f)) && w.push(y[h]);
        w.length ? (this._events[v] = w.length === 1 ? w[0] : w) : o(this, v);
      }
      return this;
    }),
    (u.prototype.removeAllListeners = function (l) {
      var c;
      return (
        l ? ((c = r ? r + l : l), this._events[c] && o(this, c)) : ((this._events = new n()), (this._eventsCount = 0)),
        this
      );
    }),
    (u.prototype.off = u.prototype.removeListener),
    (u.prototype.addListener = u.prototype.on),
    (u.prefixed = r),
    (u.EventEmitter = u),
    (e.exports = u);
})(uE);
var rV = uE.exports;
const nV = he(rV);
var Ot = new nV();
Ot.setMaxListeners && Ot.setMaxListeners(10);
var Kf = "recharts.syncMouseEvents";
function ys(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ys = function (r) {
          return typeof r;
        })
      : (ys = function (r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    ys(e)
  );
}
function gx(e, t) {
  return oV(e) || aV(e, t) || sE(e, t) || iV();
}
function iV() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function aV(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), u;
        !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t));
        n = !0
      );
    } catch (s) {
      (i = !0), (a = s);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function oV(e) {
  if (Array.isArray(e)) return e;
}
function ji() {
  return (
    (ji =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    ji.apply(this, arguments)
  );
}
function xx(e, t) {
  if (e == null) return {};
  var r = uV(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function uV(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function sV(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function wx(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function lV(e, t, r) {
  return t && wx(e.prototype, t), r && wx(e, r), e;
}
function cV(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    t && _p(e, t);
}
function _p(e, t) {
  return (
    (_p =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    _p(e, t)
  );
}
function fV(e) {
  var t = hV();
  return function () {
    var n = Ll(e),
      i;
    if (t) {
      var a = Ll(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return dV(this, i);
  };
}
function dV(e, t) {
  return t && (ys(t) === "object" || typeof t == "function") ? t : Sp(e);
}
function Sp(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hV() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function Ll(e) {
  return (
    (Ll = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ll(e)
  );
}
function la(e) {
  return yV(e) || vV(e) || sE(e) || pV();
}
function pV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sE(e, t) {
  if (e) {
    if (typeof e == "string") return Op(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Op(e, t);
  }
}
function vV(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function yV(e) {
  if (Array.isArray(e)) return Op(e);
}
function Op(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function bx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? bx(Object(r), !0).forEach(function (n) {
          kt(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : bx(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function kt(e, t, r) {
  return (
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
  );
}
var mV = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
  lE = { x: 0, y: 0 },
  gV = Number.isFinite ? Number.isFinite : isFinite,
  _x =
    typeof requestAnimationFrame == "function"
      ? requestAnimationFrame
      : typeof setImmediate == "function"
      ? setImmediate
      : setTimeout,
  Sx =
    typeof cancelAnimationFrame == "function"
      ? cancelAnimationFrame
      : typeof clearImmediate == "function"
      ? clearImmediate
      : clearTimeout,
  xV = function (t, r) {
    return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
  },
  wV = function (t, r, n, i) {
    var a = r.find(function (c) {
      return c && c.index === n;
    });
    if (a) {
      if (t === "horizontal") return { x: a.coordinate, y: i.y };
      if (t === "vertical") return { x: i.x, y: a.coordinate };
      if (t === "centric") {
        var o = a.coordinate,
          u = i.radius;
        return R(R(R({}, i), et(i.cx, i.cy, u, o)), {}, { angle: o, radius: u });
      }
      var s = a.coordinate,
        l = i.angle;
      return R(R(R({}, i), et(i.cx, i.cy, s, l)), {}, { angle: l, radius: s });
    }
    return lE;
  },
  Fc = function (t, r, n) {
    var i = r.graphicalItems,
      a = r.dataStartIndex,
      o = r.dataEndIndex,
      u = (i || []).reduce(function (s, l) {
        var c = l.props.data;
        return c && c.length ? [].concat(la(s), la(c)) : s;
      }, []);
    return u && u.length > 0
      ? u
      : n && n.props && n.props.data && n.props.data.length > 0
      ? n.props.data
      : t && t.length && H(a) && H(o)
      ? t.slice(a, o + 1)
      : [];
  },
  cE = function (t, r, n, i) {
    var a = t.graphicalItems,
      o = t.tooltipAxis,
      u = Fc(r, t);
    return n < 0 || !a || !a.length || n >= u.length
      ? null
      : a.reduce(function (s, l) {
          var c = l.props.hide;
          if (c) return s;
          var f = l.props.data,
            d;
          if (o.dataKey && !o.allowDuplicatedCategory) {
            var v = f === void 0 ? u : f;
            d = il(v, o.dataKey, i);
          } else d = (f && f[n]) || u[n];
          return d ? [].concat(la(s), [SW(l, d)]) : s;
        }, []);
  },
  Ox = function (t, r, n, i) {
    var a = i || { x: t.chartX, y: t.chartY },
      o = xV(a, n),
      u = t.orderedTooltipTicks,
      s = t.tooltipAxis,
      l = t.tooltipTicks,
      c = uW(o, u, l, s);
    if (c >= 0 && l) {
      var f = l[c] && l[c].value,
        d = cE(t, r, c, f),
        v = wV(n, u, c, a);
      return { activeTooltipIndex: c, activeLabel: f, activePayload: d, activeCoordinate: v };
    }
    return null;
  },
  bV = function (t, r) {
    var n = r.axes,
      i = r.graphicalItems,
      a = r.axisType,
      o = r.axisIdKey,
      u = r.stackGroups,
      s = r.dataStartIndex,
      l = r.dataEndIndex,
      c = t.layout,
      f = t.children,
      d = t.stackOffset,
      v = YO(c, a),
      y = n.reduce(function (h, w) {
        var p = w.props,
          x = p.type,
          m = p.dataKey,
          g = p.allowDataOverflow,
          b = p.allowDuplicatedCategory,
          _ = p.scale,
          S = p.ticks,
          O = w.props[o],
          E = Fc(t.data, {
            graphicalItems: i.filter(function (P) {
              return P.props[o] === O;
            }),
            dataStartIndex: s,
            dataEndIndex: l,
          }),
          A = E.length;
        if (!h[O]) {
          var k, C, M;
          if (m) {
            if (((k = Sl(E, m, x)), x === "category" && v)) {
              var I = hL(k);
              b && I
                ? ((C = k), (k = Il(0, A)))
                : b ||
                  (k = j1(w.props.domain, k, w).reduce(function (P, j) {
                    return P.indexOf(j) >= 0 ? P : [].concat(la(P), [j]);
                  }, []));
            } else if (x === "category")
              b
                ? (k = k.filter(function (P) {
                    return P !== "" && !Y(P);
                  }))
                : (k = j1(w.props.domain, k, w).reduce(function (P, j) {
                    return P.indexOf(j) >= 0 || j === "" || Y(j) ? P : [].concat(la(P), [j]);
                  }, []));
            else if (x === "number") {
              var D = fW(
                E,
                i.filter(function (P) {
                  return P.props[o] === O && !P.props.hide;
                }),
                m,
                a,
              );
              D && (k = D);
            }
            v && (x === "number" || _ !== "auto") && (M = Sl(E, m, "category"));
          } else
            v
              ? (k = Il(0, A))
              : u && u[O] && u[O].hasStack && x === "number"
              ? (k = d === "expand" ? [0, 1] : KO(u[O].stackGroups, s, l))
              : (k = QO(
                  E,
                  i.filter(function (P) {
                    return P.props[o] === O && !P.props.hide;
                  }),
                  x,
                  !0,
                ));
          if (x === "number") (k = bp(f, k, O, a, S)), w.props.domain && (k = XO(w.props.domain, k, g));
          else if (x === "category" && w.props.domain) {
            var N = w.props.domain,
              W = k.every(function (P) {
                return N.indexOf(P) >= 0;
              });
            W && (k = N);
          }
          return R(
            R({}, h),
            {},
            kt(
              {},
              O,
              R(
                R({}, w.props),
                {},
                {
                  axisType: a,
                  domain: k,
                  categoricalDomain: M,
                  duplicateDomain: C,
                  originalDomain: w.props.domain,
                  isCategorical: v,
                  layout: c,
                },
              ),
            ),
          );
        }
        return h;
      }, {});
    return y;
  },
  _V = function (t, r) {
    var n = r.graphicalItems,
      i = r.Axis,
      a = r.axisType,
      o = r.axisIdKey,
      u = r.stackGroups,
      s = r.dataStartIndex,
      l = r.dataEndIndex,
      c = t.layout,
      f = t.children,
      d = Fc(t.data, { graphicalItems: n, dataStartIndex: s, dataEndIndex: l }),
      v = d.length,
      y = YO(c, a),
      h = -1,
      w = n.reduce(function (p, x) {
        var m = x.props[o];
        if (!p[m]) {
          h++;
          var g;
          return (
            y
              ? (g = Il(0, v))
              : u && u[m] && u[m].hasStack
              ? ((g = KO(u[m].stackGroups, s, l)), (g = bp(f, g, m, a)))
              : ((g = XO(
                  i.defaultProps.domain,
                  QO(
                    d,
                    n.filter(function (b) {
                      return b.props[o] === m && !b.props.hide;
                    }),
                    "number",
                  ),
                  i.defaultProps.allowDataOverflow,
                )),
                (g = bp(f, g, m, a))),
            R(
              R({}, p),
              {},
              kt(
                {},
                m,
                R(
                  R({ axisType: a }, i.defaultProps),
                  {},
                  {
                    hide: !0,
                    orientation: Ze(mV, "".concat(a, ".").concat(h % 2), null),
                    domain: g,
                    originalDomain: i.defaultProps.domain,
                    isCategorical: y,
                    layout: c,
                  },
                ),
              ),
            )
          );
        }
        return p;
      }, {});
    return w;
  },
  SV = function (t, r) {
    var n = r.axisType,
      i = n === void 0 ? "xAxis" : n,
      a = r.AxisComp,
      o = r.graphicalItems,
      u = r.stackGroups,
      s = r.dataStartIndex,
      l = r.dataEndIndex,
      c = t.children,
      f = "".concat(i, "Id"),
      d = Pr(c, a),
      v = {};
    return (
      d && d.length
        ? (v = bV(t, {
            axes: d,
            graphicalItems: o,
            axisType: i,
            axisIdKey: f,
            stackGroups: u,
            dataStartIndex: s,
            dataEndIndex: l,
          }))
        : o &&
          o.length &&
          (v = _V(t, {
            Axis: a,
            graphicalItems: o,
            axisType: i,
            axisIdKey: f,
            stackGroups: u,
            dataStartIndex: s,
            dataEndIndex: l,
          })),
      v
    );
  },
  OV = function (t) {
    var r = Hr(t),
      n = qr(r, !1, !0);
    return {
      tooltipTicks: n,
      orderedTooltipTicks: zv(n, function (i) {
        return i.coordinate;
      }),
      tooltipAxis: r,
      tooltipAxisBandSize: Ol(r, n),
    };
  },
  Ex = function (t) {
    var r = t.children,
      n = t.defaultShowTooltip,
      i = kr(r, Go.displayName),
      a = (i && i.props && i.props.startIndex) || 0,
      o = (i && i.props && i.props.endIndex) || (t.data && t.data.length - 1) || 0;
    return {
      chartX: 0,
      chartY: 0,
      dataStartIndex: a,
      dataEndIndex: o,
      activeTooltipIndex: -1,
      isTooltipActive: Y(n) ? !1 : n,
    };
  },
  EV = function (t) {
    return !t || !t.length
      ? !1
      : t.some(function (r) {
          var n = dn(r && r.type);
          return n && n.indexOf("Bar") >= 0;
        });
  },
  kx = function (t) {
    return t === "horizontal"
      ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
      : t === "vertical"
      ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
      : t === "centric"
      ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
      : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
  },
  kV = function (t, r) {
    var n = t.props,
      i = t.graphicalItems,
      a = t.xAxisMap,
      o = a === void 0 ? {} : a,
      u = t.yAxisMap,
      s = u === void 0 ? {} : u,
      l = n.width,
      c = n.height,
      f = n.children,
      d = n.margin || {},
      v = kr(f, Go.displayName),
      y = kr(f, No.displayName),
      h = Object.keys(s).reduce(
        function (m, g) {
          var b = s[g],
            _ = b.orientation;
          return !b.mirror && !b.hide ? R(R({}, m), {}, kt({}, _, m[_] + b.width)) : m;
        },
        { left: d.left || 0, right: d.right || 0 },
      ),
      w = Object.keys(o).reduce(
        function (m, g) {
          var b = o[g],
            _ = b.orientation;
          return !b.mirror && !b.hide ? R(R({}, m), {}, kt({}, _, Ze(m, "".concat(_)) + b.height)) : m;
        },
        { top: d.top || 0, bottom: d.bottom || 0 },
      ),
      p = R(R({}, w), h),
      x = p.bottom;
    return (
      v && (p.bottom += v.props.height || Go.defaultProps.height),
      y && r && (p = cW(p, i, n, r)),
      R(R({ brushBottom: x }, p), {}, { width: l - p.left - p.right, height: c - p.top - p.bottom })
    );
  },
  AV = function (t) {
    var r,
      n,
      i = t.chartName,
      a = t.GraphicalChild,
      o = t.defaultTooltipEventType,
      u = o === void 0 ? "axis" : o,
      s = t.validateTooltipEventTypes,
      l = s === void 0 ? ["axis"] : s,
      c = t.axisComponents,
      f = t.legendContent,
      d = t.formatAxisMap,
      v = t.defaultProps,
      y = function (p, x) {
        var m = x.graphicalItems,
          g = x.stackGroups,
          b = x.offset,
          _ = x.updateId,
          S = x.dataStartIndex,
          O = x.dataEndIndex,
          E = p.barSize,
          A = p.layout,
          k = p.barGap,
          C = p.barCategoryGap,
          M = p.maxBarSize,
          I = kx(A),
          D = I.numericAxisName,
          N = I.cateAxisName,
          W = EV(m),
          P = W && sW({ barSize: E, stackGroups: g }),
          j = [];
        return (
          m.forEach(function (z, V) {
            var Q = Fc(p.data, { dataStartIndex: S, dataEndIndex: O }, z),
              X = z.props,
              oe = X.dataKey,
              $e = X.maxBarSize,
              Ae = z.props["".concat(D, "Id")],
              St = z.props["".concat(N, "Id")],
              te = c.reduce(function (Aa, cu) {
                var fu,
                  Sy = x["".concat(cu.axisType, "Map")],
                  fE = z.props["".concat(cu.axisType, "Id")],
                  Oy = Sy && Sy[fE];
                return R(
                  R({}, Aa),
                  {},
                  ((fu = {}), kt(fu, cu.axisType, Oy), kt(fu, "".concat(cu.axisType, "Ticks"), qr(Oy)), fu),
                );
              }, {}),
              U = te[N],
              K = te["".concat(N, "Ticks")],
              J = g && g[Ae] && g[Ae].hasStack && bW(z, g[Ae].stackGroups),
              L = dn(z.type).indexOf("Bar") >= 0,
              ce = Ol(U, K),
              re = [];
            if (L) {
              var Te,
                Ne,
                or = Y($e) ? M : $e,
                Tn = (Te = (Ne = Ol(U, K, !0)) !== null && Ne !== void 0 ? Ne : or) !== null && Te !== void 0 ? Te : 0;
              (re = lW({
                barGap: k,
                barCategoryGap: C,
                bandSize: Tn !== ce ? Tn : ce,
                sizeList: P[St],
                maxBarSize: or,
              })),
                Tn !== ce &&
                  (re = re.map(function (Aa) {
                    return R(
                      R({}, Aa),
                      {},
                      { position: R(R({}, Aa.position), {}, { offset: Aa.position.offset - Tn / 2 }) },
                    );
                  }));
            }
            var _y = z && z.type && z.type.getComposedData;
            if (_y) {
              var ka;
              j.push({
                props: R(
                  R(
                    {},
                    _y(
                      R(
                        R({}, te),
                        {},
                        {
                          displayedData: Q,
                          props: p,
                          dataKey: oe,
                          item: z,
                          bandSize: ce,
                          barPosition: re,
                          offset: b,
                          stackedData: J,
                          layout: A,
                          dataStartIndex: S,
                          dataEndIndex: O,
                        },
                      ),
                    ),
                  ),
                  {},
                  ((ka = { key: z.key || "item-".concat(V) }),
                  kt(ka, D, te[D]),
                  kt(ka, N, te[N]),
                  kt(ka, "animationId", _),
                  ka),
                ),
                childIndex: IU(z, p.children),
                item: z,
              });
            }
          }),
          j
        );
      },
      h = function (p, x) {
        var m = p.props,
          g = p.dataStartIndex,
          b = p.dataEndIndex,
          _ = p.updateId;
        if (!z0({ props: m })) return null;
        var S = m.children,
          O = m.layout,
          E = m.stackOffset,
          A = m.data,
          k = m.reverseStackOrder,
          C = kx(O),
          M = C.numericAxisName,
          I = C.cateAxisName,
          D = Pr(S, a),
          N = gW(A, D, "".concat(M, "Id"), "".concat(I, "Id"), E, k),
          W = c.reduce(function (Q, X) {
            var oe = "".concat(X.axisType, "Map");
            return R(
              R({}, Q),
              {},
              kt(
                {},
                oe,
                SV(
                  m,
                  R(
                    R({}, X),
                    {},
                    { graphicalItems: D, stackGroups: X.axisType === M && N, dataStartIndex: g, dataEndIndex: b },
                  ),
                ),
              ),
            );
          }, {}),
          P = kV(R(R({}, W), {}, { props: m, graphicalItems: D }), x == null ? void 0 : x.legendBBox);
        Object.keys(W).forEach(function (Q) {
          W[Q] = d(m, W[Q], P, Q.replace("Map", ""), i);
        });
        var j = W["".concat(I, "Map")],
          z = OV(j),
          V = y(
            m,
            R(
              R({}, W),
              {},
              { dataStartIndex: g, dataEndIndex: b, updateId: _, graphicalItems: D, stackGroups: N, offset: P },
            ),
          );
        return R(R({ formattedGraphicalItems: V, graphicalItems: D, offset: P, stackGroups: N }, z), W);
      };
    return (
      (n = r =
        (function (w) {
          cV(x, w);
          var p = fV(x);
          function x(m) {
            var g;
            return (
              sV(this, x),
              (g = p.call(this, m)),
              (g.uniqueChartId = void 0),
              (g.clipPathId = void 0),
              (g.legendInstance = void 0),
              (g.deferId = void 0),
              (g.container = void 0),
              (g.clearDeferId = function () {
                !Y(g.deferId) && Sx && Sx(g.deferId), (g.deferId = null);
              }),
              (g.handleLegendBBoxUpdate = function (b) {
                if (b) {
                  var _ = g.state,
                    S = _.dataStartIndex,
                    O = _.dataEndIndex,
                    E = _.updateId;
                  g.setState(
                    R(
                      { legendBBox: b },
                      h(
                        { props: g.props, dataStartIndex: S, dataEndIndex: O, updateId: E },
                        R(R({}, g.state), {}, { legendBBox: b }),
                      ),
                    ),
                  );
                }
              }),
              (g.handleReceiveSyncEvent = function (b, _, S) {
                var O = g.props.syncId;
                O === b &&
                  _ !== g.uniqueChartId &&
                  (g.clearDeferId(), (g.deferId = _x && _x(g.applySyncEvent.bind(Sp(g), S))));
              }),
              (g.handleBrushChange = function (b) {
                var _ = b.startIndex,
                  S = b.endIndex;
                if (_ !== g.state.dataStartIndex || S !== g.state.dataEndIndex) {
                  var O = g.state.updateId;
                  g.setState(function () {
                    return R(
                      { dataStartIndex: _, dataEndIndex: S },
                      h({ props: g.props, dataStartIndex: _, dataEndIndex: S, updateId: O }, g.state),
                    );
                  }),
                    g.triggerSyncEvent({ dataStartIndex: _, dataEndIndex: S });
                }
              }),
              (g.handleMouseEnter = function (b) {
                var _ = g.props.onMouseEnter,
                  S = g.getMouseInfo(b);
                if (S) {
                  var O = R(R({}, S), {}, { isTooltipActive: !0 });
                  g.setState(O), g.triggerSyncEvent(O), Z(_) && _(O, b);
                }
              }),
              (g.triggeredAfterMouseMove = function (b) {
                var _ = g.props.onMouseMove,
                  S = g.getMouseInfo(b),
                  O = S ? R(R({}, S), {}, { isTooltipActive: !0 }) : { isTooltipActive: !1 };
                g.setState(O), g.triggerSyncEvent(O), Z(_) && _(O, b);
              }),
              (g.handleItemMouseEnter = function (b) {
                g.setState(function () {
                  return {
                    isTooltipActive: !0,
                    activeItem: b,
                    activePayload: b.tooltipPayload,
                    activeCoordinate: b.tooltipPosition || { x: b.cx, y: b.cy },
                  };
                });
              }),
              (g.handleItemMouseLeave = function () {
                g.setState(function () {
                  return { isTooltipActive: !1 };
                });
              }),
              (g.handleMouseMove = function (b) {
                b && Z(b.persist) && b.persist(), g.triggeredAfterMouseMove(b);
              }),
              (g.handleMouseLeave = function (b) {
                var _ = g.props.onMouseLeave,
                  S = { isTooltipActive: !1 };
                g.setState(S), g.triggerSyncEvent(S), Z(_) && _(S, b), g.cancelThrottledTriggerAfterMouseMove();
              }),
              (g.handleOuterEvent = function (b) {
                var _ = $U(b),
                  S = Ze(g.props, "".concat(_));
                if (_ && Z(S)) {
                  var O;
                  /.*touch.*/i.test(_) ? (O = g.getMouseInfo(b.changedTouches[0])) : (O = g.getMouseInfo(b));
                  var E = S;
                  E(O, b);
                }
              }),
              (g.handleClick = function (b) {
                var _ = g.props.onClick,
                  S = g.getMouseInfo(b);
                if (S) {
                  var O = R(R({}, S), {}, { isTooltipActive: !0 });
                  g.setState(O), g.triggerSyncEvent(O), Z(_) && _(O, b);
                }
              }),
              (g.handleMouseDown = function (b) {
                var _ = g.props.onMouseDown;
                if (Z(_)) {
                  var S = g.getMouseInfo(b);
                  _(S, b);
                }
              }),
              (g.handleMouseUp = function (b) {
                var _ = g.props.onMouseUp;
                if (Z(_)) {
                  var S = g.getMouseInfo(b);
                  _(S, b);
                }
              }),
              (g.handleTouchMove = function (b) {
                b.changedTouches != null && b.changedTouches.length > 0 && g.handleMouseMove(b.changedTouches[0]);
              }),
              (g.handleTouchStart = function (b) {
                b.changedTouches != null && b.changedTouches.length > 0 && g.handleMouseDown(b.changedTouches[0]);
              }),
              (g.handleTouchEnd = function (b) {
                b.changedTouches != null && b.changedTouches.length > 0 && g.handleMouseUp(b.changedTouches[0]);
              }),
              (g.verticalCoordinatesGenerator = function (b) {
                var _ = b.xAxis,
                  S = b.width,
                  O = b.height,
                  E = b.offset;
                return M1(
                  Dn.getTicks(
                    R(
                      R(R({}, Dn.defaultProps), _),
                      {},
                      { ticks: qr(_, !0), viewBox: { x: 0, y: 0, width: S, height: O } },
                    ),
                  ),
                  E.left,
                  E.left + E.width,
                );
              }),
              (g.horizontalCoordinatesGenerator = function (b) {
                var _ = b.yAxis,
                  S = b.width,
                  O = b.height,
                  E = b.offset;
                return M1(
                  Dn.getTicks(
                    R(
                      R(R({}, Dn.defaultProps), _),
                      {},
                      { ticks: qr(_, !0), viewBox: { x: 0, y: 0, width: S, height: O } },
                    ),
                  ),
                  E.top,
                  E.top + E.height,
                );
              }),
              (g.axesTicksGenerator = function (b) {
                return qr(b, !0);
              }),
              (g.renderCursor = function (b) {
                var _ = g.state,
                  S = _.isTooltipActive,
                  O = _.activeCoordinate,
                  E = _.activePayload,
                  A = _.offset,
                  k = _.activeTooltipIndex,
                  C = g.getTooltipEventType();
                if (!b || !b.props.cursor || !S || !O || (i !== "ScatterChart" && C !== "axis")) return null;
                var M = g.props.layout,
                  I,
                  D = Gi;
                if (i === "ScatterChart") (I = O), (D = tE);
                else if (i === "BarChart") (I = g.getCursorRectangle()), (D = yy);
                else if (M === "radial") {
                  var N = g.getCursorPoints(),
                    W = N.cx,
                    P = N.cy,
                    j = N.radius,
                    z = N.startAngle,
                    V = N.endAngle;
                  (I = { cx: W, cy: P, startAngle: z, endAngle: V, innerRadius: j, outerRadius: j }), (D = eE);
                } else (I = { points: g.getCursorPoints() }), (D = Gi);
                var Q = b.key || "_recharts-cursor",
                  X = R(
                    R(R(R({ stroke: "#ccc", pointerEvents: "none" }, A), I), le(b.props.cursor)),
                    {},
                    { payload: E, payloadIndex: k, key: Q, className: "recharts-tooltip-cursor" },
                  );
                return B.isValidElement(b.props.cursor) ? B.cloneElement(b.props.cursor, X) : B.createElement(D, X);
              }),
              (g.renderPolarAxis = function (b, _, S) {
                var O = Ze(b, "type.axisType"),
                  E = Ze(g.state, "".concat(O, "Map")),
                  A = E[b.props["".concat(O, "Id")]];
                return B.cloneElement(
                  b,
                  R(R({}, A), {}, { className: O, key: b.key || "".concat(_, "-").concat(S), ticks: qr(A, !0) }),
                );
              }),
              (g.renderXAxis = function (b, _, S) {
                var O = g.state.xAxisMap,
                  E = O[b.props.xAxisId];
                return g.renderAxis(E, b, _, S);
              }),
              (g.renderYAxis = function (b, _, S) {
                var O = g.state.yAxisMap,
                  E = O[b.props.yAxisId];
                return g.renderAxis(E, b, _, S);
              }),
              (g.renderGrid = function (b) {
                var _ = g.state,
                  S = _.xAxisMap,
                  O = _.yAxisMap,
                  E = _.offset,
                  A = g.props,
                  k = A.width,
                  C = A.height,
                  M = Hr(S),
                  I = WG(O, function (W) {
                    return iE(W.domain, gV);
                  }),
                  D = I || Hr(O),
                  N = b.props || {};
                return B.cloneElement(b, {
                  key: b.key || "grid",
                  x: H(N.x) ? N.x : E.left,
                  y: H(N.y) ? N.y : E.top,
                  width: H(N.width) ? N.width : E.width,
                  height: H(N.height) ? N.height : E.height,
                  xAxis: M,
                  yAxis: D,
                  offset: E,
                  chartWidth: k,
                  chartHeight: C,
                  verticalCoordinatesGenerator: N.verticalCoordinatesGenerator || g.verticalCoordinatesGenerator,
                  horizontalCoordinatesGenerator: N.horizontalCoordinatesGenerator || g.horizontalCoordinatesGenerator,
                });
              }),
              (g.renderPolarGrid = function (b) {
                var _ = b.props,
                  S = _.radialLines,
                  O = _.polarAngles,
                  E = _.polarRadius,
                  A = g.state,
                  k = A.radiusAxisMap,
                  C = A.angleAxisMap,
                  M = Hr(k),
                  I = Hr(C),
                  D = I.cx,
                  N = I.cy,
                  W = I.innerRadius,
                  P = I.outerRadius;
                return B.cloneElement(b, {
                  polarAngles: Ue(O)
                    ? O
                    : qr(I, !0).map(function (j) {
                        return j.coordinate;
                      }),
                  polarRadius: Ue(E)
                    ? E
                    : qr(M, !0).map(function (j) {
                        return j.coordinate;
                      }),
                  cx: D,
                  cy: N,
                  innerRadius: W,
                  outerRadius: P,
                  key: b.key || "polar-grid",
                  radialLines: S,
                });
              }),
              (g.renderLegend = function () {
                var b = g.state.formattedGraphicalItems,
                  _ = g.props,
                  S = _.children,
                  O = _.width,
                  E = _.height,
                  A = g.props.margin || {},
                  k = O - (A.left || 0) - (A.right || 0),
                  C = GO({ children: S, formattedGraphicalItems: b, legendWidth: k, legendContent: f });
                if (!C) return null;
                var M = C.item,
                  I = xx(C, ["item"]);
                return B.cloneElement(
                  M,
                  R(
                    R({}, I),
                    {},
                    {
                      chartWidth: O,
                      chartHeight: E,
                      margin: A,
                      ref: function (N) {
                        g.legendInstance = N;
                      },
                      onBBoxUpdate: g.handleLegendBBoxUpdate,
                    },
                  ),
                );
              }),
              (g.renderTooltip = function () {
                var b = g.props.children,
                  _ = kr(b, dr.displayName);
                if (!_) return null;
                var S = g.state,
                  O = S.isTooltipActive,
                  E = S.activeCoordinate,
                  A = S.activePayload,
                  k = S.activeLabel,
                  C = S.offset;
                return B.cloneElement(_, {
                  viewBox: R(R({}, C), {}, { x: C.left, y: C.top }),
                  active: O,
                  label: k,
                  payload: O ? A : [],
                  coordinate: E,
                });
              }),
              (g.renderBrush = function (b) {
                var _ = g.props,
                  S = _.margin,
                  O = _.data,
                  E = g.state,
                  A = E.offset,
                  k = E.dataStartIndex,
                  C = E.dataEndIndex,
                  M = E.updateId;
                return B.cloneElement(b, {
                  key: b.key || "_recharts-brush",
                  onChange: Fu(g.handleBrushChange, null, b.props.onChange),
                  data: O,
                  x: H(b.props.x) ? b.props.x : A.left,
                  y: H(b.props.y) ? b.props.y : A.top + A.height + A.brushBottom - (S.bottom || 0),
                  width: H(b.props.width) ? b.props.width : A.width,
                  startIndex: k,
                  endIndex: C,
                  updateId: "brush-".concat(M),
                });
              }),
              (g.renderReferenceElement = function (b, _, S) {
                if (!b) return null;
                var O = Sp(g),
                  E = O.clipPathId,
                  A = g.state,
                  k = A.xAxisMap,
                  C = A.yAxisMap,
                  M = A.offset,
                  I = b.props,
                  D = I.xAxisId,
                  N = I.yAxisId;
                return B.cloneElement(b, {
                  key: b.key || "".concat(_, "-").concat(S),
                  xAxis: k[D],
                  yAxis: C[N],
                  viewBox: { x: M.left, y: M.top, width: M.width, height: M.height },
                  clipPathId: E,
                });
              }),
              (g.renderActivePoints = function (b) {
                var _ = b.item,
                  S = b.activePoint,
                  O = b.basePoint,
                  E = b.childIndex,
                  A = b.isRange,
                  k = [],
                  C = _.props.key,
                  M = _.item.props,
                  I = M.activeDot,
                  D = M.dataKey,
                  N = R(
                    R(
                      {
                        index: E,
                        dataKey: D,
                        cx: S.x,
                        cy: S.y,
                        r: 4,
                        fill: vy(_.item),
                        strokeWidth: 2,
                        stroke: "#fff",
                        payload: S.payload,
                        value: S.value,
                        key: "".concat(C, "-activePoint-").concat(E),
                      },
                      le(I),
                    ),
                    Vs(I),
                  );
                return (
                  k.push(x.renderActiveDot(I, N)),
                  O
                    ? k.push(
                        x.renderActiveDot(
                          I,
                          R(R({}, N), {}, { cx: O.x, cy: O.y, key: "".concat(C, "-basePoint-").concat(E) }),
                        ),
                      )
                    : A && k.push(null),
                  k
                );
              }),
              (g.renderGraphicChild = function (b, _, S) {
                var O = g.filterFormatItem(b, _, S);
                if (!O) return null;
                var E = g.getTooltipEventType(),
                  A = g.state,
                  k = A.isTooltipActive,
                  C = A.tooltipAxis,
                  M = A.activeTooltipIndex,
                  I = A.activeLabel,
                  D = g.props.children,
                  N = kr(D, dr.displayName),
                  W = O.props,
                  P = W.points,
                  j = W.isRange,
                  z = W.baseLine,
                  V = O.item.props,
                  Q = V.activeDot,
                  X = V.hide,
                  oe = !X && k && N && Q && M >= 0,
                  $e = {};
                E !== "axis" && N && N.props.trigger === "click"
                  ? ($e = { onClick: Fu(g.handleItemMouseEnter, null, b.props.onCLick) })
                  : E !== "axis" &&
                    ($e = {
                      onMouseLeave: Fu(g.handleItemMouseLeave, null, b.props.onMouseLeave),
                      onMouseEnter: Fu(g.handleItemMouseEnter, null, b.props.onMouseEnter),
                    });
                var Ae = B.cloneElement(b, R(R({}, O.props), $e));
                function St(J) {
                  return typeof C.dataKey == "function" ? C.dataKey(J.payload) : null;
                }
                if (oe) {
                  var te, U;
                  if (C.dataKey && !C.allowDuplicatedCategory) {
                    var K = typeof C.dataKey == "function" ? St : "payload.".concat(C.dataKey.toString());
                    (te = il(P, K, I)), (U = j && z && il(z, K, I));
                  } else (te = P[M]), (U = j && z && z[M]);
                  if (!Y(te))
                    return [Ae].concat(
                      la(g.renderActivePoints({ item: O, activePoint: te, basePoint: U, childIndex: M, isRange: j })),
                    );
                }
                return j ? [Ae, null, null] : [Ae, null];
              }),
              (g.renderCustomized = function (b, _, S) {
                return B.cloneElement(b, R(R({ key: "recharts-customized-".concat(S) }, g.props), g.state));
              }),
              (g.uniqueChartId = Y(m.id) ? yc("recharts") : m.id),
              (g.clipPathId = "".concat(g.uniqueChartId, "-clip")),
              m.throttleDelay && (g.triggeredAfterMouseMove = YG(g.triggeredAfterMouseMove, m.throttleDelay)),
              (g.state = {}),
              g
            );
          }
          return (
            lV(x, [
              {
                key: "componentDidMount",
                value: function () {
                  Y(this.props.syncId) || this.addListener();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (g) {
                  Y(g.syncId) && !Y(this.props.syncId) && this.addListener(),
                    !Y(g.syncId) && Y(this.props.syncId) && this.removeListener();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.clearDeferId(),
                    Y(this.props.syncId) || this.removeListener(),
                    this.cancelThrottledTriggerAfterMouseMove();
                },
              },
              {
                key: "cancelThrottledTriggerAfterMouseMove",
                value: function () {
                  typeof this.triggeredAfterMouseMove.cancel == "function" && this.triggeredAfterMouseMove.cancel();
                },
              },
              {
                key: "getTooltipEventType",
                value: function () {
                  var g = kr(this.props.children, dr.displayName);
                  if (g && tV(g.props.shared)) {
                    var b = g.props.shared ? "axis" : "item";
                    return l.indexOf(b) >= 0 ? b : u;
                  }
                  return u;
                },
              },
              {
                key: "getMouseInfo",
                value: function (g) {
                  if (!this.container) return null;
                  var b = aU(this.container),
                    _ = oU(g, b),
                    S = this.inRange(_.chartX, _.chartY);
                  if (!S) return null;
                  var O = this.state,
                    E = O.xAxisMap,
                    A = O.yAxisMap,
                    k = this.getTooltipEventType();
                  if (k !== "axis" && E && A) {
                    var C = Hr(E).scale,
                      M = Hr(A).scale,
                      I = C && C.invert ? C.invert(_.chartX) : null,
                      D = M && M.invert ? M.invert(_.chartY) : null;
                    return R(R({}, _), {}, { xValue: I, yValue: D });
                  }
                  var N = Ox(this.state, this.props.data, this.props.layout, S);
                  return N ? R(R({}, _), N) : null;
                },
              },
              {
                key: "getCursorRectangle",
                value: function () {
                  var g = this.props.layout,
                    b = this.state,
                    _ = b.activeCoordinate,
                    S = b.offset,
                    O = b.tooltipAxisBandSize,
                    E = O / 2;
                  return {
                    stroke: "none",
                    fill: "#ccc",
                    x: g === "horizontal" ? _.x - E : S.left + 0.5,
                    y: g === "horizontal" ? S.top + 0.5 : _.y - E,
                    width: g === "horizontal" ? O : S.width - 1,
                    height: g === "horizontal" ? S.height - 1 : O,
                  };
                },
              },
              {
                key: "getCursorPoints",
                value: function () {
                  var g = this.props.layout,
                    b = this.state,
                    _ = b.activeCoordinate,
                    S = b.offset,
                    O,
                    E,
                    A,
                    k;
                  if (g === "horizontal") (O = _.x), (A = O), (E = S.top), (k = S.top + S.height);
                  else if (g === "vertical") (E = _.y), (k = E), (O = S.left), (A = S.left + S.width);
                  else if (!Y(_.cx) || !Y(_.cy))
                    if (g === "centric") {
                      var C = _.cx,
                        M = _.cy,
                        I = _.innerRadius,
                        D = _.outerRadius,
                        N = _.angle,
                        W = et(C, M, I, N),
                        P = et(C, M, D, N);
                      (O = W.x), (E = W.y), (A = P.x), (k = P.y);
                    } else {
                      var j = _.cx,
                        z = _.cy,
                        V = _.radius,
                        Q = _.startAngle,
                        X = _.endAngle,
                        oe = et(j, z, V, Q),
                        $e = et(j, z, V, X);
                      return { points: [oe, $e], cx: j, cy: z, radius: V, startAngle: Q, endAngle: X };
                    }
                  return [
                    { x: O, y: E },
                    { x: A, y: k },
                  ];
                },
              },
              {
                key: "inRange",
                value: function (g, b) {
                  var _ = this.props.layout;
                  if (_ === "horizontal" || _ === "vertical") {
                    var S = this.state.offset,
                      O = g >= S.left && g <= S.left + S.width && b >= S.top && b <= S.top + S.height;
                    return O ? { x: g, y: b } : null;
                  }
                  var E = this.state,
                    A = E.angleAxisMap,
                    k = E.radiusAxisMap;
                  if (A && k) {
                    var C = Hr(A);
                    return F1({ x: g, y: b }, C);
                  }
                  return null;
                },
              },
              {
                key: "parseEventsOfWrapper",
                value: function () {
                  var g = this.props.children,
                    b = this.getTooltipEventType(),
                    _ = kr(g, dr.displayName),
                    S = {};
                  _ &&
                    b === "axis" &&
                    (_.props.trigger === "click"
                      ? (S = { onClick: this.handleClick })
                      : (S = {
                          onMouseEnter: this.handleMouseEnter,
                          onMouseMove: this.handleMouseMove,
                          onMouseLeave: this.handleMouseLeave,
                          onTouchMove: this.handleTouchMove,
                          onTouchStart: this.handleTouchStart,
                          onTouchEnd: this.handleTouchEnd,
                        }));
                  var O = Vs(this.props, this.handleOuterEvent);
                  return R(R({}, O), S);
                },
              },
              {
                key: "addListener",
                value: function () {
                  Ot.on(Kf, this.handleReceiveSyncEvent),
                    Ot.setMaxListeners && Ot._maxListeners && Ot.setMaxListeners(Ot._maxListeners + 1);
                },
              },
              {
                key: "removeListener",
                value: function () {
                  Ot.removeListener(Kf, this.handleReceiveSyncEvent),
                    Ot.setMaxListeners && Ot._maxListeners && Ot.setMaxListeners(Ot._maxListeners - 1);
                },
              },
              {
                key: "triggerSyncEvent",
                value: function (g) {
                  var b = this.props.syncId;
                  Y(b) || Ot.emit(Kf, b, this.uniqueChartId, g);
                },
              },
              {
                key: "applySyncEvent",
                value: function (g) {
                  var b = this.props,
                    _ = b.layout,
                    S = b.syncMethod,
                    O = this.state.updateId,
                    E = g.dataStartIndex,
                    A = g.dataEndIndex;
                  if (!Y(g.dataStartIndex) || !Y(g.dataEndIndex))
                    this.setState(
                      R(
                        { dataStartIndex: E, dataEndIndex: A },
                        h({ props: this.props, dataStartIndex: E, dataEndIndex: A, updateId: O }, this.state),
                      ),
                    );
                  else if (Y(g.activeTooltipIndex)) this.setState(g);
                  else {
                    var k = g.chartX,
                      C = g.chartY,
                      M = g.activeTooltipIndex,
                      I = this.state,
                      D = I.offset,
                      N = I.tooltipTicks;
                    if (!D) return;
                    if (typeof S == "function") M = S(N, g);
                    else if (S === "value") {
                      M = -1;
                      for (var W = 0; W < N.length; W++)
                        if (N[W].value === g.activeLabel) {
                          M = W;
                          break;
                        }
                    }
                    var P = R(R({}, D), {}, { x: D.left, y: D.top }),
                      j = Math.min(k, P.x + P.width),
                      z = Math.min(C, P.y + P.height),
                      V = N[M] && N[M].value,
                      Q = cE(this.state, this.props.data, M),
                      X = N[M]
                        ? { x: _ === "horizontal" ? N[M].coordinate : j, y: _ === "horizontal" ? z : N[M].coordinate }
                        : lE;
                    this.setState(
                      R(R({}, g), {}, { activeLabel: V, activeCoordinate: X, activePayload: Q, activeTooltipIndex: M }),
                    );
                  }
                },
              },
              {
                key: "filterFormatItem",
                value: function (g, b, _) {
                  for (var S = this.state.formattedGraphicalItems, O = 0, E = S.length; O < E; O++) {
                    var A = S[O];
                    if (A.item === g || A.props.key === g.key || (b === dn(A.item.type) && _ === A.childIndex))
                      return A;
                  }
                  return null;
                },
              },
              {
                key: "renderAxis",
                value: function (g, b, _, S) {
                  var O = this.props,
                    E = O.width,
                    A = O.height;
                  return $.createElement(
                    Dn,
                    ji({}, g, {
                      className: "recharts-".concat(g.axisType, " ").concat(g.axisType),
                      key: b.key || "".concat(_, "-").concat(S),
                      viewBox: { x: 0, y: 0, width: E, height: A },
                      ticksGenerator: this.axesTicksGenerator,
                    }),
                  );
                },
              },
              {
                key: "renderClipPath",
                value: function () {
                  var g = this.clipPathId,
                    b = this.state.offset,
                    _ = b.left,
                    S = b.top,
                    O = b.height,
                    E = b.width;
                  return $.createElement(
                    "defs",
                    null,
                    $.createElement(
                      "clipPath",
                      { id: g },
                      $.createElement("rect", { x: _, y: S, height: O, width: E }),
                    ),
                  );
                },
              },
              {
                key: "getXScales",
                value: function () {
                  var g = this.state.xAxisMap;
                  return g
                    ? Object.entries(g).reduce(function (b, _) {
                        var S = gx(_, 2),
                          O = S[0],
                          E = S[1];
                        return R(R({}, b), {}, kt({}, O, E.scale));
                      }, {})
                    : null;
                },
              },
              {
                key: "getYScales",
                value: function () {
                  var g = this.state.yAxisMap;
                  return g
                    ? Object.entries(g).reduce(function (b, _) {
                        var S = gx(_, 2),
                          O = S[0],
                          E = S[1];
                        return R(R({}, b), {}, kt({}, O, E.scale));
                      }, {})
                    : null;
                },
              },
              {
                key: "getXScaleByAxisId",
                value: function (g) {
                  var b, _;
                  return (b = this.state.xAxisMap) === null || b === void 0 || (_ = b[g]) === null || _ === void 0
                    ? void 0
                    : _.scale;
                },
              },
              {
                key: "getYScaleByAxisId",
                value: function (g) {
                  var b, _;
                  return (b = this.state.yAxisMap) === null || b === void 0 || (_ = b[g]) === null || _ === void 0
                    ? void 0
                    : _.scale;
                },
              },
              {
                key: "getItemByXY",
                value: function (g) {
                  var b = this.state.formattedGraphicalItems;
                  if (b && b.length)
                    for (var _ = 0, S = b.length; _ < S; _++) {
                      var O = b[_],
                        E = O.props,
                        A = O.item,
                        k = dn(A.type);
                      if (k === "Bar") {
                        var C = (E.data || []).find(function (I) {
                          return CH(g, I);
                        });
                        if (C) return { graphicalItem: O, payload: C };
                      } else if (k === "RadialBar") {
                        var M = (E.data || []).find(function (I) {
                          return F1(g, I);
                        });
                        if (M) return { graphicalItem: O, payload: M };
                      }
                    }
                  return null;
                },
              },
              {
                key: "render",
                value: function () {
                  var g = this;
                  if (!z0(this)) return null;
                  var b = this.props,
                    _ = b.children,
                    S = b.className,
                    O = b.width,
                    E = b.height,
                    A = b.style,
                    k = b.compact,
                    C = xx(b, ["children", "className", "width", "height", "style", "compact"]),
                    M = le(C),
                    I = {
                      CartesianGrid: { handler: this.renderGrid, once: !0 },
                      ReferenceArea: { handler: this.renderReferenceElement },
                      ReferenceLine: { handler: this.renderReferenceElement },
                      ReferenceDot: { handler: this.renderReferenceElement },
                      XAxis: { handler: this.renderXAxis },
                      YAxis: { handler: this.renderYAxis },
                      Brush: { handler: this.renderBrush, once: !0 },
                      Bar: { handler: this.renderGraphicChild },
                      Line: { handler: this.renderGraphicChild },
                      Area: { handler: this.renderGraphicChild },
                      Radar: { handler: this.renderGraphicChild },
                      RadialBar: { handler: this.renderGraphicChild },
                      Scatter: { handler: this.renderGraphicChild },
                      Pie: { handler: this.renderGraphicChild },
                      Funnel: { handler: this.renderGraphicChild },
                      Tooltip: { handler: this.renderCursor, once: !0 },
                      PolarGrid: { handler: this.renderPolarGrid, once: !0 },
                      PolarAngleAxis: { handler: this.renderPolarAxis },
                      PolarRadiusAxis: { handler: this.renderPolarAxis },
                      Customized: { handler: this.renderCustomized },
                    };
                  if (k)
                    return $.createElement(Xd, ji({}, M, { width: O, height: E }), this.renderClipPath(), H0(_, I));
                  var D = this.parseEventsOfWrapper();
                  return $.createElement(
                    "div",
                    ji(
                      {
                        className: Oe("recharts-wrapper", S),
                        style: R({ position: "relative", cursor: "default", width: O, height: E }, A),
                      },
                      D,
                      {
                        ref: function (W) {
                          g.container = W;
                        },
                      },
                    ),
                    $.createElement(Xd, ji({}, M, { width: O, height: E }), this.renderClipPath(), H0(_, I)),
                    this.renderLegend(),
                    this.renderTooltip(),
                  );
                },
              },
            ]),
            x
          );
        })(B.Component)),
      (r.displayName = i),
      (r.defaultProps = R(
        {
          layout: "horizontal",
          stackOffset: "none",
          barCategoryGap: "10%",
          barGap: 4,
          margin: { top: 5, right: 5, bottom: 5, left: 5 },
          reverseStackOrder: !1,
          syncMethod: "index",
        },
        v,
      )),
      (r.getDerivedStateFromProps = function (w, p) {
        var x = w.data,
          m = w.children,
          g = w.width,
          b = w.height,
          _ = w.layout,
          S = w.stackOffset,
          O = w.margin;
        if (Y(p.updateId)) {
          var E = Ex(w);
          return R(
            R(R({}, E), {}, { updateId: 0 }, h(R(R({ props: w }, E), {}, { updateId: 0 }), p)),
            {},
            {
              prevData: x,
              prevWidth: g,
              prevHeight: b,
              prevLayout: _,
              prevStackOffset: S,
              prevMargin: O,
              prevChildren: m,
            },
          );
        }
        if (
          x !== p.prevData ||
          g !== p.prevWidth ||
          b !== p.prevHeight ||
          _ !== p.prevLayout ||
          S !== p.prevStackOffset ||
          !Lo(O, p.prevMargin)
        ) {
          var A = Ex(w),
            k = { chartX: p.chartX, chartY: p.chartY, isTooltipActive: p.isTooltipActive },
            C = R(R({}, Ox(p, x, _)), {}, { updateId: p.updateId + 1 }),
            M = R(R(R({}, A), k), C);
          return R(
            R(R({}, M), h(R({ props: w }, M), p)),
            {},
            {
              prevData: x,
              prevWidth: g,
              prevHeight: b,
              prevLayout: _,
              prevStackOffset: S,
              prevMargin: O,
              prevChildren: m,
            },
          );
        }
        if (!FS(m, p.prevChildren)) {
          var I = !Y(x),
            D = I ? p.updateId : p.updateId + 1;
          return R(R({ updateId: D }, h(R(R({ props: w }, p), {}, { updateId: D }), p)), {}, { prevChildren: m });
        }
        return null;
      }),
      (r.renderActiveDot = function (w, p) {
        var x;
        return (
          B.isValidElement(w) ? (x = B.cloneElement(w, p)) : Z(w) ? (x = w(p)) : (x = $.createElement(my, p)),
          $.createElement(ct, { className: "recharts-active-dot", key: p.key }, x)
        );
      }),
      n
    );
  },
  Bc = AV({
    chartName: "AreaChart",
    GraphicalChild: ar,
    axisComponents: [
      { axisType: "xAxis", AxisComp: by },
      { axisType: "yAxis", AxisComp: vi },
    ],
    formatAxisMap: Gq,
  });
const Ax = "MMMM dd, yyyy HH:mm";
function TV() {
  var o, u, s, l, c, f;
  const r = (
      ((l =
        (s =
          (u = (o = yn({ queryKey: ["hashprice"], queryFn: () => l_() }).data) == null ? void 0 : o.data) == null
            ? void 0
            : u.data) == null
          ? void 0
          : s.getChartBySlug) == null
        ? void 0
        : l.data) || []
    ).map((d) => ({ ...d, timestamp: gr(new Date(d.timestamp), Ax) })),
    n = r[0] || {},
    i = r[r.length - 1] || {},
    a = n.btc_hashprice > i.btc_hashprice ? "text-danger" : "text-success";
  return T.jsxs(ui, {
    className: "rounded-3xl w-full luxor-hi-widget",
    "data-widget": "hashprice",
    children: [
      T.jsxs(si, {
        className: "pb-0 flex justify-between flex-row text-black",
        children: [
          T.jsxs("article", {
            children: [
              T.jsx(li, { className: "flex justify-between text-xl", children: "BTC Hashprice" }),
              T.jsxs("p", {
                className: "dark:text-white",
                children: [
                  T.jsx("span", {
                    className: "text-primary",
                    children: (c = i == null ? void 0 : i.btc_hashprice) == null ? void 0 : c.toFixed(4),
                  }),
                  " BTC/PH/Day",
                ],
              }),
            ],
          }),
          T.jsxs("article", {
            className: "text-right",
            children: [
              T.jsxs("h4", {
                className: Vt("text-xl font-semibold", a),
                children: ["$", (f = i == null ? void 0 : i.usd_hashprice) == null ? void 0 : f.toFixed(4)],
              }),
              T.jsx("p", { children: "USD/PH/Day" }),
            ],
          }),
        ],
      }),
      T.jsx(ci, {
        className: "h-[20rem] w-full px-0 pt-12",
        children: T.jsx(gc, {
          width: "100%",
          height: "100%",
          children: T.jsxs(Bc, {
            width: 500,
            height: 400,
            data: r,
            children: [
              T.jsx("defs", {
                children: T.jsxs("linearGradient", {
                  id: "area-hashprice",
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "3",
                  children: [
                    T.jsx("stop", { offset: "5%", stopColor: "#fed501", stopOpacity: 0.5 }),
                    T.jsx("stop", { offset: "35%", stopColor: "#fed501", stopOpacity: 0 }),
                  ],
                }),
              }),
              T.jsx(dr, {
                content: ({ active: d, payload: v }) => {
                  var y, h;
                  if (d && v && v.length) {
                    const w = (h = (y = v[0]) == null ? void 0 : y.payload) == null ? void 0 : h.timestamp;
                    return T.jsxs("div", {
                      className: "p-4 rounded-xl",
                      children: [
                        T.jsx("p", { children: gr(new Date(w), Ax) }),
                        T.jsxs("p", {
                          className: "font-semibold",
                          children: [Number(v[0].value).toFixed(4), " USD/PH/Day"],
                        }),
                      ],
                    });
                  }
                },
              }),
              T.jsx(vi, { type: "number", hide: !0, domain: ["dataMin", "dataMax"] }),
              T.jsx(ar, {
                type: "monotone",
                dataKey: "usd_hashprice",
                stroke: "#faba00",
                strokeWidth: 3,
                fillOpacity: 1,
                fill: "url(#area-hashprice)",
              }),
            ],
          }),
        }),
      }),
      T.jsx(fi, {
        className: "flex justify-end border-0",
        children: T.jsxs("div", {
          className: "flex items-center gap-x-4",
          children: [T.jsx("p", { className: "text-sm", children: "powered by" }), T.jsx(ha, { className: "w-32" })],
        }),
      }),
    ],
  });
}
const Tx = "MMMM dd, yyyy HH:mm";
function CV() {
  var o, u, s, l, c, f;
  const r = (
      ((l =
        (s =
          (u = (o = yn({ queryKey: ["hashprice"], queryFn: () => l_() }).data) == null ? void 0 : o.data) == null
            ? void 0
            : u.data) == null
          ? void 0
          : s.getChartBySlug) == null
        ? void 0
        : l.data) || []
    ).map((d) => ({ ...d, timestamp: gr(new Date(d.timestamp), Tx) })),
    n = r[0] || {},
    i = r[r.length - 1] || {},
    a = n.btc_hashprice > i.btc_hashprice ? "text-danger" : "text-success";
  return T.jsxs(ui, {
    className: "rounded-3xl w-full bg-black luxor-hi-widget",
    "data-widget": "hashprice-dark",
    children: [
      T.jsxs(si, {
        className: "pb-0 flex justify-between flex-row text-white",
        children: [
          T.jsxs("article", {
            children: [
              T.jsx(li, { className: "flex justify-between text-xl text-white", children: "BTC Hashprice" }),
              T.jsxs("p", {
                className: "dark:text-white",
                children: [
                  T.jsx("span", {
                    className: "text-primary",
                    children: (c = i == null ? void 0 : i.btc_hashprice) == null ? void 0 : c.toFixed(4),
                  }),
                  " BTC/PH/Day",
                ],
              }),
            ],
          }),
          T.jsxs("article", {
            className: "text-right",
            children: [
              T.jsxs("h4", {
                className: Vt("text-xl font-semibold", a),
                children: ["$", (f = i == null ? void 0 : i.usd_hashprice) == null ? void 0 : f.toFixed(4)],
              }),
              T.jsx("p", { className: "dark:text-white", children: "USD/PH/Day" }),
            ],
          }),
        ],
      }),
      T.jsx(ci, {
        className: "h-[20rem] w-full px-0 pt-12 text-white",
        children: T.jsx(gc, {
          width: "100%",
          height: "100%",
          children: T.jsxs(Bc, {
            width: 500,
            height: 400,
            data: r,
            children: [
              T.jsx("defs", {
                children: T.jsxs("linearGradient", {
                  id: "area-hashprice",
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "3",
                  children: [
                    T.jsx("stop", { offset: "5%", stopColor: "#fed501", stopOpacity: 0.5 }),
                    T.jsx("stop", { offset: "35%", stopColor: "#fed501", stopOpacity: 0 }),
                  ],
                }),
              }),
              T.jsx(dr, {
                content: ({ active: d, payload: v }) => {
                  var y, h;
                  if (d && v && v.length) {
                    const w = (h = (y = v[0]) == null ? void 0 : y.payload) == null ? void 0 : h.timestamp;
                    return T.jsxs("div", {
                      className: "p-4 rounded-xl",
                      children: [
                        T.jsx("p", { children: gr(new Date(w), Tx) }),
                        T.jsxs("p", {
                          className: "font-semibold",
                          children: [Number(v[0].value).toFixed(4), " USD/PH/Day"],
                        }),
                      ],
                    });
                  }
                },
              }),
              T.jsx(vi, { type: "number", hide: !0, domain: ["dataMin", "dataMax"] }),
              T.jsx(ar, {
                type: "monotone",
                dataKey: "usd_hashprice",
                stroke: "#faba00",
                strokeWidth: 3,
                fillOpacity: 1,
                fill: "url(#area-hashprice)",
              }),
            ],
          }),
        }),
      }),
      T.jsx(fi, {
        className: "flex justify-end border-0 text-white",
        children: T.jsxs("div", {
          className: "flex items-center gap-x-4",
          children: [T.jsx("p", { className: "text-sm", children: "powered by" }), T.jsx(ha, { className: "w-32" })],
        }),
      }),
    ],
  });
}
function PV() {
  var o, u, s, l, c;
  const e = yn({ queryKey: ["btcPrice"], queryFn: f_ }),
    t = yn({ queryKey: ["btcOverview"], queryFn: () => d_() }),
    r = (o = e.data) == null ? void 0 : o.data,
    n =
      (c =
        (l = (s = (u = t.data) == null ? void 0 : u.data) == null ? void 0 : s.data) == null
          ? void 0
          : l.bitcoinOverviews) == null
        ? void 0
        : c.nodes[0],
    i = ((Number(n == null ? void 0 : n.hashpriceUsd) || 0) / ((r == null ? void 0 : r.data) || 0)) * 1e3,
    a = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(r || 0);
  return T.jsxs(ui, {
    className: "rounded-3xl luxor-hi-widget",
    "data-widget": "kpi",
    children: [
      T.jsx(si, {
        children: T.jsxs(li, {
          className: "flex items-center gap-x-4",
          children: [
            T.jsx("img", {
              src: "https://lux-assets.b-cdn.net/new-landing/coins/btc.png?width=640",
              alt: "Bitcoin logo",
              width: 32,
              height: 32,
            }),
            T.jsxs("span", { className: "text-2xl", children: ["1 BTC = ", a, " USD"] }),
          ],
        }),
      }),
      T.jsxs(ci, {
        className: "grid grid-cols-2 gap-6",
        children: [
          T.jsx(zr, { title: "Market Cap", description: (n == null ? void 0 : n.marketcap) || "" }),
          T.jsx(zr, {
            title: "Network Hashrate (7D)",
            description: String(n == null ? void 0 : n.networkHashrate7D) + " EH/s",
          }),
          T.jsx(zr, {
            title: "Hashprice USD",
            description: `${Number(n == null ? void 0 : n.hashpriceUsd).toFixed(7)} $/PH/Day`,
          }),
          T.jsx(zr, { title: "Hashprice BTC", description: `${i ? i.toFixed(7) : 0} BTC/PH/Day` }),
          T.jsx(zr, { title: "Network Difficulty", description: `${n == null ? void 0 : n.networkDiff} T` }),
          T.jsx(zr, { title: "Est. Difficulty Adjustment", description: `${n == null ? void 0 : n.estDiffAdj}%` }),
          T.jsx(zr, { title: "Blocks in Epoch", description: `${n == null ? void 0 : n.blocksToAdj}/2016` }),
          T.jsx(zr, { title: "Average Block Time", description: `${n == null ? void 0 : n.avgBlockTime} min` }),
        ],
      }),
      T.jsxs(fi, {
        className: "flex justify-between py-2",
        children: [
          T.jsx("p", {
            className: "text-sm",
            children: gr(new Date((n == null ? void 0 : n.timestamp) || new Date()), "MMMM dd, yyyy h:mm a"),
          }),
          T.jsx(ha, { className: "w-32" }),
        ],
      }),
    ],
  });
}
function zr({ title: e, description: t, className: r }) {
  return T.jsxs("div", {
    className: Vt("flex flex-col space-y-1.5", r),
    children: [
      T.jsx("h3", { className: "font-semibold leading-none tracking-tight", children: e }),
      T.jsx("p", { className: "text-primary break-words text-xl font-semibold leading-5", children: t }),
    ],
  });
}
function MV() {
  var o, u, s, l, c;
  const e = yn({ queryKey: ["btcPrice"], queryFn: f_ }),
    t = yn({ queryKey: ["btcOverview"], queryFn: () => d_() }),
    r = (o = e.data) == null ? void 0 : o.data,
    n =
      (c =
        (l = (s = (u = t.data) == null ? void 0 : u.data) == null ? void 0 : s.data) == null
          ? void 0
          : l.bitcoinOverviews) == null
        ? void 0
        : c.nodes[0],
    i = ((Number(n == null ? void 0 : n.hashpriceUsd) || 0) / ((r == null ? void 0 : r.data) || 0)) * 1e3,
    a = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(r || 0);
  return T.jsxs(ui, {
    className: "rounded-3xl bg-black luxor-hi-widget",
    "data-widget": "kpi-dark",
    children: [
      T.jsx(si, {
        className: "text-white",
        children: T.jsxs(li, {
          className: "flex items-center gap-x-4 text-white",
          children: [
            T.jsx("img", {
              src: "https://lux-assets.b-cdn.net/new-landing/coins/btc.png?width=640",
              alt: "Bitcoin logo",
              width: 32,
              height: 32,
            }),
            T.jsxs("span", { className: "text-2xl", children: ["1 BTC = ", a, " USD"] }),
          ],
        }),
      }),
      T.jsxs(ci, {
        className: "grid grid-cols-2 gap-6 text-white",
        children: [
          T.jsx(Wr, { title: "Market Cap", description: (n == null ? void 0 : n.marketcap) || "" }),
          T.jsx(Wr, {
            title: "Network Hashrate (7D)",
            description: String(n == null ? void 0 : n.networkHashrate7D) + " EH/s",
          }),
          T.jsx(Wr, {
            title: "Hashprice USD",
            description: `${Number(n == null ? void 0 : n.hashpriceUsd).toFixed(7)} $/PH/Day`,
          }),
          T.jsx(Wr, { title: "Hashprice BTC", description: `${i ? i.toFixed(7) : 0} BTC/PH/Day` }),
          T.jsx(Wr, { title: "Network Difficulty", description: `${n == null ? void 0 : n.networkDiff} T` }),
          T.jsx(Wr, { title: "Est. Difficulty Adjustment", description: `${n == null ? void 0 : n.estDiffAdj}%` }),
          T.jsx(Wr, { title: "Blocks in Epoch", description: `${n == null ? void 0 : n.blocksToAdj}/2016` }),
          T.jsx(Wr, { title: "Average Block Time", description: `${n == null ? void 0 : n.avgBlockTime} min` }),
        ],
      }),
      T.jsxs(fi, {
        className: "flex justify-between py-2 text-white",
        children: [
          T.jsx("p", {
            className: "text-sm",
            children: gr(new Date((n == null ? void 0 : n.timestamp) || new Date()), "MMMM dd, yyyy h:mm a"),
          }),
          T.jsx(ha, { className: "w-32" }),
        ],
      }),
    ],
  });
}
function Wr({ title: e, description: t, className: r }) {
  return T.jsxs("div", {
    className: Vt("flex flex-col space-y-1.5", r),
    children: [
      T.jsx("h3", { className: "font-semibold leading-none tracking-tight", children: e }),
      T.jsx("p", { className: "text-primary break-words text-xl font-semibold leading-5", children: t }),
    ],
  });
}
const Cx = "MMMM dd, yyyy HH:mm";
function $V() {
  var o, u, s, l;
  const r = (
      ((l =
        (s =
          (u =
            (o = yn({ queryKey: ["networkHashrate"], queryFn: () => c_("_1_DAY") }).data) == null ? void 0 : o.data) ==
          null
            ? void 0
            : u.data) == null
          ? void 0
          : s.getNetworkHashrate) == null
        ? void 0
        : l.nodes) || []
    ).map((c) => ({ networkHashrate: Number(c.networkHashrate.toFixed(4)), timestamp: gr(new Date(c.timestamp), Cx) })),
    n = r[0] || {},
    i = r[r.length - 1] || {},
    a = n.networkHashrate > i.networkHashrate ? "text-danger" : "text-success";
  return T.jsxs(ui, {
    className: "rounded-3xl w-full luxor-hi-widget",
    "data-widget": "network-hashrate",
    children: [
      T.jsxs(si, {
        className: "pb-0 flex justify-between flex-row",
        children: [
          T.jsx(li, { className: "text-xl", children: "BTC Network Hashrate" }),
          T.jsxs("article", {
            className: "leading-5 flex flex-col text-right text-black",
            children: [
              T.jsx("span", {
                className: Vt("text-xl font-semibold transition-colors duration-300", a),
                children: i == null ? void 0 : i.networkHashrate,
              }),
              T.jsx("p", { children: "EH/s" }),
            ],
          }),
        ],
      }),
      T.jsx(ci, {
        className: "h-[20rem] w-full px-0",
        children: T.jsx(gc, {
          width: "100%",
          height: "100%",
          children: T.jsxs(Bc, {
            width: 500,
            height: 400,
            data: r,
            margin: { bottom: 15, top: 15 },
            children: [
              T.jsx("defs", {
                children: T.jsxs("linearGradient", {
                  id: "area-network",
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "4",
                  children: [
                    T.jsx("stop", { offset: "5%", stopColor: "#fed501", stopOpacity: 0.5 }),
                    T.jsx("stop", { offset: "25%", stopColor: "#fed501", stopOpacity: 0 }),
                  ],
                }),
              }),
              T.jsx(dr, {
                content: ({ active: c, payload: f }) => {
                  var d, v;
                  if (c && f && f.length) {
                    const y = (v = (d = f[0]) == null ? void 0 : d.payload) == null ? void 0 : v.timestamp;
                    return T.jsxs("div", {
                      className: "p-4 rounded-xl",
                      children: [
                        T.jsx("p", { children: gr(new Date(y), Cx) }),
                        T.jsxs("p", { className: "font-semibold", children: [f[0].value, " EH/s"] }),
                      ],
                    });
                  }
                },
              }),
              T.jsx(vi, { type: "number", hide: !0, domain: ["dataMin", "dataMax"] }),
              T.jsx(ar, {
                type: "monotone",
                dataKey: "networkHashrate",
                stroke: "#faba00",
                strokeWidth: 3,
                fillOpacity: 1,
                fill: "url(#area-network)",
              }),
            ],
          }),
        }),
      }),
      T.jsx(fi, {
        className: "flex justify-end border-0",
        children: T.jsxs("div", {
          className: "flex items-center gap-x-4",
          children: [T.jsx("p", { className: "text-sm", children: "powered by" }), T.jsx(ha, { className: "w-32" })],
        }),
      }),
    ],
  });
}
const Px = "MMMM dd, yyyy HH:mm";
function IV() {
  var o, u, s, l;
  const r = (
      ((l =
        (s =
          (u =
            (o = yn({ queryKey: ["networkHashrate"], queryFn: () => c_("_1_DAY") }).data) == null ? void 0 : o.data) ==
          null
            ? void 0
            : u.data) == null
          ? void 0
          : s.getNetworkHashrate) == null
        ? void 0
        : l.nodes) || []
    ).map((c) => ({ networkHashrate: Number(c.networkHashrate.toFixed(4)), timestamp: gr(new Date(c.timestamp), Px) })),
    n = r[0] || {},
    i = r[r.length - 1] || {},
    a = n.networkHashrate > i.networkHashrate ? "text-danger" : "text-success";
  return T.jsxs(ui, {
    className: "rounded-3xl w-full bg-black luxor-hi-widget",
    "data-widget": "network-hashrate-dark",
    children: [
      T.jsxs(si, {
        className: "pb-0 flex justify-between flex-row text-white",
        children: [
          T.jsx(li, { className: "text-xl text-white", children: "BTC Network Hashrate" }),
          T.jsxs("article", {
            className: "leading-5 flex flex-col text-right",
            children: [
              T.jsx("span", {
                className: Vt("text-xl font-semibold transition-colors duration-300", a),
                children: i == null ? void 0 : i.networkHashrate,
              }),
              T.jsx("p", { children: "EH/s" }),
            ],
          }),
        ],
      }),
      T.jsx(ci, {
        className: "h-[20rem] w-full px-0 text-white",
        children: T.jsx(gc, {
          width: "100%",
          height: "100%",
          children: T.jsxs(Bc, {
            width: 500,
            height: 400,
            data: r,
            margin: { bottom: 15, top: 15 },
            children: [
              T.jsx("defs", {
                children: T.jsxs("linearGradient", {
                  id: "area-network",
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "4",
                  children: [
                    T.jsx("stop", { offset: "5%", stopColor: "#fed501", stopOpacity: 0.5 }),
                    T.jsx("stop", { offset: "25%", stopColor: "#fed501", stopOpacity: 0 }),
                  ],
                }),
              }),
              T.jsx(dr, {
                content: ({ active: c, payload: f }) => {
                  var d, v;
                  if (c && f && f.length) {
                    const y = (v = (d = f[0]) == null ? void 0 : d.payload) == null ? void 0 : v.timestamp;
                    return T.jsxs("div", {
                      className: "p-4 rounded-xl",
                      children: [
                        T.jsx("p", { children: gr(new Date(y), Px) }),
                        T.jsxs("p", { className: "font-semibold", children: [f[0].value, " EH/s"] }),
                      ],
                    });
                  }
                },
              }),
              T.jsx(vi, { type: "number", hide: !0, domain: ["dataMin", "dataMax"] }),
              T.jsx(ar, {
                type: "monotone",
                dataKey: "networkHashrate",
                stroke: "#faba00",
                strokeWidth: 3,
                fillOpacity: 1,
                fill: "url(#area-network)",
              }),
            ],
          }),
        }),
      }),
      T.jsx(fi, {
        className: "flex justify-end border-0 text-white",
        children: T.jsxs("div", {
          className: "flex items-center gap-x-4",
          children: [T.jsx("p", { className: "text-sm", children: "powered by" }), T.jsx(ha, { className: "w-32" })],
        }),
      }),
    ],
  });
}
const NV = new KA();
function RV({ widget: e }) {
  return T.jsxs(dT, {
    client: NV,
    children: [
      e === "kpi" && T.jsx(PV, {}),
      e === "kpi-dark" && T.jsx(MV, {}),
      e === "hashprice" && T.jsx(TV, {}),
      e === "hashprice-dark" && T.jsx(CV, {}),
      e === "network-hashrate" && T.jsx($V, {}),
      e === "network-hashrate-dark" && T.jsx(IV, {}),
    ],
  });
}
const jV = document.querySelectorAll(".luxor-hi-widget");
jV.forEach((e) => {
  const t = e.getAttribute("data-widget");
  Xf.createRoot(e).render(T.jsx($.StrictMode, { children: T.jsx(RV, { widget: t }) }));
});
