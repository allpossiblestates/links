! function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "89b2a609-7dfb-4619-8ac7-82002b3ceab8", e._sentryDebugIdIdentifier = "sentry-dbid-89b2a609-7dfb-4619-8ac7-82002b3ceab8")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[new _sentryModuleMetadataGlobal.Error().stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[new _sentryModuleMetadataGlobal.Error().stack], {
  "_sentryBundlerPluginAppKey:beacons-sentry-app-key": !0
}), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9745], {
    74781: function (e, t, n) {
      "use strict";
      var r, o = n(60931);

      function u() {
        return (u = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }).apply(null, arguments)
      }
      t.Z = e => o.createElement("svg", u({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 201 200"
      }, e), r || (r = o.createElement("path", {
        d: "M77.742 98.51c21.592 0 39.095-17.47 39.095-39.017 0-21.549-17.503-39.017-39.095-39.017S38.646 37.945 38.646 59.493 56.15 98.509 77.742 98.509M148 73.63c10.848 0 19.642-8.777 19.642-19.603S158.848 34.424 148 34.424s-19.642 8.777-19.642 19.603S137.152 73.629 148 73.629M36.757 131.494c10.848 0 19.642-8.776 19.642-19.602s-8.794-19.603-19.642-19.603-19.642 8.777-19.642 19.603 8.794 19.602 19.642 19.602M143.09 165.611c22.53 0 40.795-18.228 40.795-40.714S165.62 84.184 143.09 84.184s-40.796 18.228-40.796 40.713c0 22.486 18.265 40.714 40.796 40.714M73.398 179.747c13.56 0 24.553-10.971 24.553-24.503s-10.993-24.503-24.553-24.503-24.553 10.97-24.553 24.503 10.993 24.503 24.553 24.503"
      })))
    },
    77819: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 63854)), Promise.resolve().then(n.bind(n, 10551)), Promise.resolve().then(n.bind(n, 43919))
    },
    58936: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u
        }
      });
      var r = n(43536);
      n(84027);
      var o = n(28081);

      function u() {
        return (0, r.jsx)(o.Z, {
          fonts: [{
            font: "Poppins",
            weights: [400, 500, 600, 700]
          }]
        })
      }
    },
    63854: function (e, t, n) {
      "use strict";
      n.d(t, {
        BeaconsGenericErrorPage: function () {
          return d
        }
      });
      var r = n(43536),
        o = n(84027),
        u = n(94349),
        i = n(59655),
        l = n(74781),
        s = n(13565),
        a = n(58936);

      function c(e) {
        let {
          children: t,
          variant: n = "primary",
          as: o,
          className: u = "",
          ...l
        } = e;
        return (0, r.jsx)(o ? ? "button", {
          ...l,
          className: (0, i.Z)(u, "text-md-strong cursor-pointer rounded-full border-none px-6 py-4 font-poppins no-underline", {
            "bg-gray-900 text-white hover:bg-gray-800": "primary" === n,
            "bg-gray-200 text-gray-900 hover:bg-gray-300": "secondary" === n
          }),
          children: t
        })
      }

      function d(e) {
        let {
          error: t,
          children: n,
          title: i,
          reportToSentry: d = !0
        } = e;
        return (0, o.useEffect)(() => {
          t && d && (0, u.Tb)(t)
        }, [t, d]), (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(a.Z, {}), (0, r.jsx)("div", {
            className: "box-border flex h-screen flex-col items-center justify-center gap-4 p-6 font-poppins desktop:p-12",
            children: (0, r.jsxs)("div", {
              className: "flex max-w-md flex-col items-center justify-center gap-2 text-center",
              children: [(0, r.jsx)("a", {
                href: "https://beacons.ai",
                children: (0, r.jsx)(l.Z, {
                  fill: "#1c1c1c",
                  height: 60
                })
              }), (0, r.jsx)("div", {
                className: "title-lg-strong desktop:title-xl-strong pt-4",
                children: i || "Oops! Something went wrong."
              }), (0, r.jsx)("div", {
                className: "text-md-normal desktop:text-lg-normal",
                children: n || "Reload the page to try again. If that doesn't work, our support team would be happy to help!"
              }), (0, r.jsxs)("div", {
                className: "flex flex-wrap items-center justify-center gap-2 pt-2",
                children: [(0, r.jsx)(c, {
                  onClick: () => (0, s.sl)(),
                  children: "Reload Page"
                }), (0, r.jsx)(c, {
                  as: "a",
                  href: "https://help.beacons.ai/",
                  variant: "secondary",
                  children: "Get Help"
                })]
              })]
            })
          })]
        })
      }
    },
    43919: function (e, t, n) {
      "use strict";
      n.d(t, {
        ProfileClientRoot: function () {
          return u
        }
      });
      var r = n(43536);
      n(84027);
      let o = (0, n(13847).default)(() => Promise.all([n.e(5344), n.e(9511), n.e(2345), n.e(9610), n.e(447), n.e(8189), n.e(6040), n.e(6626), n.e(4458), n.e(2006), n.e(9561), n.e(2782), n.e(3374), n.e(8180)]).then(n.bind(n, 88180)), {
        loadableGenerated: {
          webpack: () => [88180]
        },
        ssr: !1
      });

      function u() {
        return (0, r.jsx)(o, {})
      }
    },
    46893: function (e, t, n) {
      "use strict";
      n.d(t, {
        BX: function () {
          return o
        },
        HD: function () {
          return i
        },
        J0: function () {
          return p
        },
        Kn: function () {
          return u
        },
        U4: function () {
          return a
        },
        Zt: function () {
          return f
        },
        f_: function () {
          return b
        },
        hj: function () {
          return l
        },
        kJ: function () {
          return s
        },
        le: function () {
          return r
        },
        nI: function () {
          return c
        },
        vE: function () {
          return g
        },
        zt: function () {
          return d
        }
      });
      let r = e => null == e,
        o = e => null != e,
        u = e => o(e) && "object" == typeof e,
        i = e => o(e) && "string" == typeof e,
        l = e => o(e) && "number" == typeof e,
        s = e => o(e) && Array.isArray(e),
        a = (e, t) => !(r(e) || r(t)) && !!u(e) && t in e,
        c = (e, t) => !(r(e) || r(t)) && !!u(e) && t in e,
        d = e => r(e) ? [] : Object.values(e),
        f = e => r(e) ? [] : Object.keys(e),
        p = e => r(e) ? [] : Object.entries(e);

      function g(e) {
        return `Was not never ${e}`
      }

      function b(e, t) {
        return e.flatMap((n, r) => r === e.length - 1 ? [n] : [n, t])
      }
    },
    17552: function (e, t, n) {
      "use strict";
      n.d(t, {
        $3: function () {
          return c
        },
        BF: function () {
          return s
        },
        C8: function () {
          return l
        },
        Cq: function () {
          return f
        },
        FN: function () {
          return p
        },
        GN: function () {
          return b
        },
        LI: function () {
          return g
        },
        LS: function () {
          return r
        },
        N0: function () {
          return d
        },
        Qi: function () {
          return m
        },
        RJ: function () {
          return u
        },
        Zt: function () {
          return o
        },
        cL: function () {
          return y
        },
        et: function () {
          return a
        },
        i8: function () {
          return h
        },
        ju: function () {
          return i
        }
      });
      let r = "https://cdn.beacons.ai",
        o = `${r}/images`,
        u = `${r}/videos`,
        i = `${o}/logos`,
        l = `${r}/scripts`,
        s = `${o}/beacons_assets`,
        a = `${r}/profile_pictures`,
        c = `${o}/ui_icons`,
        d = `${o}/navigation_icons`,
        f = `${o}/social_icons`,
        p = `${o}/store_icons`,
        g = `${o}/onboarding`,
        b = `${o}/store_assets`,
        y = `${r}/user_content`,
        h = `${o}/website_builder`,
        m = `${o}/app_icons`
    },
    39560: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return r
        }
      });
      let r = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "swap",
          r = e.reduce((e, t) => {
            let n = t.font.replace(/ +/g, "+"),
              r = (t.weights || []).join(",");
            return [...e, n + (r && `:${r}`)]
          }, []).join("|"),
          o = `https://fonts.googleapis.com/css?family=${r}`;
        return t && Array.isArray(t) && t.length > 0 && (o += `&subset=${t.join(",")}`), n && (o += `&display=${n}`), o
      }
    },
    28081: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u
        }
      });
      var r = n(84027),
        o = n(39560);

      function u(e) {
        let {
          fonts: t,
          subsets: n,
          display: u = "swap"
        } = e, i = (0, r.useMemo)(() => (0, o.K)(t, n, u), [t, n, u]);
        return (0, r.useEffect)(() => {
          let e = document.createElement("link");
          return e.href = i, e.rel = "stylesheet", document.head.appendChild(e), () => {
            document.head.removeChild(e)
          }
        }, [i]), null
      }
    },
    6821: function (e, t, n) {
      "use strict";

      function r() {
        window.location.reload()
      }
      n.d(t, {
        Z: function () {
          return r
        }
      })
    },
    13847: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return o.a
        }
      });
      var r = n(59207),
        o = n.n(r)
    },
    59207: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function () {
          return u
        }
      });
      let r = n(68304);
      n(43536), n(84027);
      let o = r._(n(90422));

      function u(e, t) {
        var n;
        let r = {
          loading: e => {
            let {
              error: t,
              isLoading: n,
              pastDelay: r
            } = e;
            return null
          }
        };
        "function" == typeof e && (r.loader = e);
        let u = {
          ...r,
          ...t
        };
        return (0, o.default)({
          ...u,
          modules: null == (n = u.loadableGenerated) ? void 0 : n.modules
        })
      }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    44856: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "BailoutToCSR", {
        enumerable: !0,
        get: function () {
          return o
        }
      });
      let r = n(87540);

      function o(e) {
        let {
          reason: t,
          children: n
        } = e;
        if ("undefined" == typeof window) throw new r.BailoutToCSRError(t);
        return n
      }
    },
    90422: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function () {
          return a
        }
      });
      let r = n(43536),
        o = n(84027),
        u = n(44856),
        i = n(56853);

      function l(e) {
        return {
          default: e && "default" in e ? e.default : e
        }
      }
      let s = {
          loader: () => Promise.resolve(l(() => null)),
          loading: null,
          ssr: !0
        },
        a = function (e) {
          let t = {
              ...s,
              ...e
            },
            n = (0, o.lazy)(() => t.loader().then(l)),
            a = t.loading;

          function c(e) {
            let l = a ? (0, r.jsx)(a, {
                isLoading: !0,
                pastDelay: !0,
                error: null
              }) : null,
              s = t.ssr ? (0, r.jsxs)(r.Fragment, {
                children: ["undefined" == typeof window ? (0, r.jsx)(i.PreloadCss, {
                  moduleIds: t.modules
                }) : null, (0, r.jsx)(n, {
                  ...e
                })]
              }) : (0, r.jsx)(u.BailoutToCSR, {
                reason: "next/dynamic",
                children: (0, r.jsx)(n, {
                  ...e
                })
              });
            return (0, r.jsx)(o.Suspense, {
              fallback: l,
              children: s
            })
          }
          return c.displayName = "LoadableComponent", c
        }
    },
    56853: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "PreloadCss", {
        enumerable: !0,
        get: function () {
          return u
        }
      });
      let r = n(43536),
        o = n(70590);

      function u(e) {
        let {
          moduleIds: t
        } = e;
        if ("undefined" != typeof window) return null;
        let n = (0, o.getExpectedRequestStore)("next/dynamic css"),
          u = [];
        if (n.reactLoadableManifest && t) {
          let e = n.reactLoadableManifest;
          for (let n of t) {
            if (!e[n]) continue;
            let t = e[n].files.filter(e => e.endsWith(".css"));
            u.push(...t)
          }
        }
        return 0 === u.length ? null : (0, r.jsx)(r.Fragment, {
          children: u.map(e => (0, r.jsx)("link", {
            precedence: "dynamic",
            rel: "stylesheet",
            href: n.assetPrefix + "/_next/" + encodeURI(e),
            as: "style"
          }, e))
        })
      }
    },
    10551: function (e, t, n) {
      "use strict";
      n.r(t), t.default = {
        src: "https://beacons.ai/_next/static/media/bw_logo_full.a7c3db4a.png",
        height: 1361,
        width: 2613,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEUcHBwVFRVBQUE8PDwWFhZ+fn5kZGSYmJgo6A05AAAAAnRSTlP+/T+gj6oAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAgSURBVHicFcGJEQAgDAMgTHz239grYA+827Y4J0lgDR8F5ABFj9zCAgAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 4
      }
    }
  },
  function (e) {
    e.O(0, [975, 3565, 8444, 2141, 7641, 1744], function () {
      return e(e.s = 77819)
    }), _N_E = e.O()
  }
]);
//# sourceMappingURL=page-6c346f6685bf532a.js.map
