(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[386], {
    9917: function(e, t, n) {
        "use strict";
        var r = n(3848)
          , o = n(3115);
        t.default = function(e) {
            var t = e.src
              , n = e.sizes
              , o = e.unoptimized
              , l = void 0 !== o && o
              , u = e.priority
              , d = void 0 !== u && u
              , g = e.loading
              , v = e.lazyBoundary
              , m = void 0 === v ? "200px" : v
              , y = e.className
              , b = e.quality
              , w = e.width
              , S = e.height
              , O = e.objectFit
              , C = e.objectPosition
              , z = e.onLoadingComplete
              , A = e.loader
              , T = void 0 === A ? _ : A
              , P = e.placeholder
              , k = void 0 === P ? "empty" : P
              , R = e.blurDataURL
              , L = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, o = {}, i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }(e, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"])
              , I = n ? "responsive" : "intrinsic";
            "layout"in L && (L.layout && (I = L.layout),
            delete L.layout);
            var j = "";
            if (function(e) {
                return "object" === typeof e && (h(e) || function(e) {
                    return void 0 !== e.src
                }(e))
            }(t)) {
                var N = h(t) ? t.default : t;
                if (!N.src)
                    throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(N)));
                if (R = R || N.blurDataURL,
                j = N.src,
                (!I || "fill" !== I) && (S = S || N.height,
                w = w || N.width,
                !N.height || !N.width))
                    throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(N)))
            }
            t = "string" === typeof t ? t : j;
            var F = x(w)
              , G = x(S)
              , D = x(b)
              , M = !d && ("lazy" === g || "undefined" === typeof g);
            (t.startsWith("data:") || t.startsWith("blob:")) && (l = !0,
            M = !1);
            p.has(t) && (M = !1);
            0;
            var H, B, W, q = c.useIntersection({
                rootMargin: m,
                disabled: !M
            }), U = r(q, 2), $ = U[0], V = U[1], Z = !M || V, Y = {
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                objectFit: O,
                objectPosition: C
            }, X = "blur" === k ? {
                filter: "blur(20px)",
                backgroundSize: O || "cover",
                backgroundImage: 'url("'.concat(R, '")'),
                backgroundPosition: C || "0% 0%"
            } : {};
            if ("fill" === I)
                H = {
                    display: "block",
                    overflow: "hidden",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    boxSizing: "border-box",
                    margin: 0
                };
            else if ("undefined" !== typeof F && "undefined" !== typeof G) {
                var J = G / F
                  , Q = isNaN(J) ? "100%" : "".concat(100 * J, "%");
                "responsive" === I ? (H = {
                    display: "block",
                    overflow: "hidden",
                    position: "relative",
                    boxSizing: "border-box",
                    margin: 0
                },
                B = {
                    display: "block",
                    boxSizing: "border-box",
                    paddingTop: Q
                }) : "intrinsic" === I ? (H = {
                    display: "inline-block",
                    maxWidth: "100%",
                    overflow: "hidden",
                    position: "relative",
                    boxSizing: "border-box",
                    margin: 0
                },
                B = {
                    boxSizing: "border-box",
                    display: "block",
                    maxWidth: "100%"
                },
                W = '<svg width="'.concat(F, '" height="').concat(G, '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')) : "fixed" === I && (H = {
                    overflow: "hidden",
                    boxSizing: "border-box",
                    display: "inline-block",
                    position: "relative",
                    width: F,
                    height: G
                })
            } else
                0;
            var K = {
                src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                srcSet: void 0,
                sizes: void 0
            };
            Z && (K = E({
                src: t,
                unoptimized: l,
                layout: I,
                width: F,
                quality: D,
                sizes: n,
                loader: T
            }));
            var ee = t;
            return i.default.createElement("div", {
                style: H
            }, B ? i.default.createElement("div", {
                style: B
            }, W ? i.default.createElement("img", {
                style: {
                    maxWidth: "100%",
                    display: "block",
                    margin: 0,
                    border: "none",
                    padding: 0
                },
                alt: "",
                "aria-hidden": !0,
                src: "data:image/svg+xml;base64,".concat(a.toBase64(W))
            }) : null) : null, i.default.createElement("img", Object.assign({}, L, K, {
                decoding: "async",
                "data-nimg": I,
                className: y,
                ref: function(e) {
                    $(e),
                    function(e, t, n, r, o) {
                        if (!e)
                            return;
                        var i = function() {
                            e.src.startsWith("data:") || ("decode"in e ? e.decode() : Promise.resolve()).catch((function() {}
                            )).then((function() {
                                if ("blur" === r && (e.style.filter = "none",
                                e.style.backgroundSize = "none",
                                e.style.backgroundImage = "none"),
                                p.add(t),
                                o) {
                                    var n = e.naturalWidth
                                      , i = e.naturalHeight;
                                    o({
                                        naturalWidth: n,
                                        naturalHeight: i
                                    })
                                }
                            }
                            ))
                        };
                        e.complete ? i() : e.onload = i
                    }(e, ee, 0, k, z)
                },
                style: f({}, Y, X)
            })), i.default.createElement("noscript", null, i.default.createElement("img", Object.assign({}, L, E({
                src: t,
                unoptimized: l,
                layout: I,
                width: F,
                quality: D,
                sizes: n,
                loader: T
            }), {
                decoding: "async",
                "data-nimg": I,
                style: Y,
                className: y,
                loading: g || "lazy"
            }))), d ? i.default.createElement(s.default, null, i.default.createElement("link", {
                key: "__nimg-" + K.src + K.srcSet + K.sizes,
                rel: "preload",
                as: "image",
                href: K.srcSet ? void 0 : K.src,
                imagesrcset: K.srcSet,
                imagesizes: K.sizes
            })) : null)
        }
        ;
        var i = d(n(7294))
          , s = d(n(639))
          , a = n(8997)
          , l = n(5809)
          , c = n(7426);
        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function f(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    u(e, t, n[t])
                }
                ))
            }
            return e
        }
        var p = new Set;
        var g = new Map([["default", function(e) {
            var t = e.root
              , n = e.src
              , r = e.width
              , o = e.quality;
            0;
            return "".concat(t, "?url=").concat(encodeURIComponent(n), "&w=").concat(r, "&q=").concat(o || 75)
        }
        ], ["imgix", function(e) {
            var t = e.root
              , n = e.src
              , r = e.width
              , o = e.quality
              , i = new URL("".concat(t).concat(O(n)))
              , s = i.searchParams;
            s.set("auto", s.get("auto") || "format"),
            s.set("fit", s.get("fit") || "max"),
            s.set("w", s.get("w") || r.toString()),
            o && s.set("q", o.toString());
            return i.href
        }
        ], ["cloudinary", function(e) {
            var t = e.root
              , n = e.src
              , r = e.width
              , o = e.quality
              , i = ["f_auto", "c_limit", "w_" + r, "q_" + (o || "auto")].join(",") + "/";
            return "".concat(t).concat(i).concat(O(n))
        }
        ], ["akamai", function(e) {
            var t = e.root
              , n = e.src
              , r = e.width;
            return "".concat(t).concat(O(n), "?imwidth=").concat(r)
        }
        ], ["custom", function(e) {
            var t = e.src;
            throw new Error('Image with src "'.concat(t, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
        }
        ]]);
        function h(e) {
            return void 0 !== e.default
        }
        var v = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default"
        } || l.imageConfigDefault
          , m = v.deviceSizes
          , y = v.imageSizes
          , b = v.loader
          , w = v.path
          , S = (v.domains,
        [].concat(o(m), o(y)));
        function E(e) {
            var t = e.src
              , n = e.unoptimized
              , r = e.layout
              , i = e.width
              , s = e.quality
              , a = e.sizes
              , l = e.loader;
            if (n)
                return {
                    src: t,
                    srcSet: void 0,
                    sizes: void 0
                };
            var c = function(e, t, n) {
                if (n && ("fill" === t || "responsive" === t)) {
                    for (var r, i = /(^|\s)(1?\d?\d)vw/g, s = []; r = i.exec(n); r)
                        s.push(parseInt(r[2]));
                    if (s.length) {
                        var a = .01 * Math.min.apply(Math, s);
                        return {
                            widths: S.filter((function(e) {
                                return e >= m[0] * a
                            }
                            )),
                            kind: "w"
                        }
                    }
                    return {
                        widths: S,
                        kind: "w"
                    }
                }
                return "number" !== typeof e || "fill" === t || "responsive" === t ? {
                    widths: m,
                    kind: "w"
                } : {
                    widths: o(new Set([e, 2 * e].map((function(e) {
                        return S.find((function(t) {
                            return t >= e
                        }
                        )) || S[S.length - 1]
                    }
                    )))),
                    kind: "x"
                }
            }(i, r, a)
              , u = c.widths
              , d = c.kind
              , f = u.length - 1;
            return {
                sizes: a || "w" !== d ? a : "100vw",
                srcSet: u.map((function(e, n) {
                    return "".concat(l({
                        src: t,
                        quality: s,
                        width: e
                    }), " ").concat("w" === d ? e : n + 1).concat(d)
                }
                )).join(", "),
                src: l({
                    src: t,
                    quality: s,
                    width: u[f]
                })
            }
        }
        function x(e) {
            return "number" === typeof e ? e : "string" === typeof e ? parseInt(e, 10) : void 0
        }
        function _(e) {
            var t = g.get(b);
            if (t)
                return t(f({
                    root: w
                }, e));
            throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "), ". Received: ").concat(b))
        }
        function O(e) {
            return "/" === e[0] ? e.slice(1) : e
        }
        m.sort((function(e, t) {
            return e - t
        }
        )),
        S.sort((function(e, t) {
            return e - t
        }
        ))
    },
    7426: function(e, t, n) {
        "use strict";
        var r = n(3848);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useIntersection = function(e) {
            var t = e.rootMargin
              , n = e.disabled || !s
              , l = o.useRef()
              , c = o.useState(!1)
              , u = r(c, 2)
              , d = u[0]
              , f = u[1]
              , p = o.useCallback((function(e) {
                l.current && (l.current(),
                l.current = void 0),
                n || d || e && e.tagName && (l.current = function(e, t, n) {
                    var r = function(e) {
                        var t = e.rootMargin || ""
                          , n = a.get(t);
                        if (n)
                            return n;
                        var r = new Map
                          , o = new IntersectionObserver((function(e) {
                            e.forEach((function(e) {
                                var t = r.get(e.target)
                                  , n = e.isIntersecting || e.intersectionRatio > 0;
                                t && n && t(n)
                            }
                            ))
                        }
                        ),e);
                        return a.set(t, n = {
                            id: t,
                            observer: o,
                            elements: r
                        }),
                        n
                    }(n)
                      , o = r.id
                      , i = r.observer
                      , s = r.elements;
                    return s.set(e, t),
                    i.observe(e),
                    function() {
                        s.delete(e),
                        i.unobserve(e),
                        0 === s.size && (i.disconnect(),
                        a.delete(o))
                    }
                }(e, (function(e) {
                    return e && f(e)
                }
                ), {
                    rootMargin: t
                }))
            }
            ), [n, t, d]);
            return o.useEffect((function() {
                if (!s && !d) {
                    var e = i.requestIdleCallback((function() {
                        return f(!0)
                    }
                    ));
                    return function() {
                        return i.cancelIdleCallback(e)
                    }
                }
            }
            ), [d]),
            [p, d]
        }
        ;
        var o = n(7294)
          , i = n(3447)
          , s = "undefined" !== typeof IntersectionObserver;
        var a = new Map
    },
    8997: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.toBase64 = function(e) {
            return window.btoa(e)
        }
    },
    5809: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.imageConfigDefault = t.VALID_LOADERS = void 0;
        t.VALID_LOADERS = ["default", "imgix", "cloudinary", "akamai", "custom"];
        t.imageConfigDefault = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60
        }
    },
    9008: function(e, t, n) {
        e.exports = n(639)
    },
    5675: function(e, t, n) {
        e.exports = n(9917)
    },
    4729: function(e, t, n) {
        "use strict";
        n.d(t, {
            Q: function() {
                return g
            },
            x: function() {
                return w
            }
        });
        var r = n(7294)
          , o = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , i = function(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
          , s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
          , l = function(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
          , c = function(e, t) {
            var n = {};
            for (var r in e)
                t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }
          , u = function(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }
          , d = {
            addEventListener: function() {}
        }
          , f = function(e, t) {
            var n = function() {
                a.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")
            };
            n.version = "2.0.7",
            e.addEventListener("mousewheel", (function() {}
            ));
            var r = "data-scrollmagic-pin-spacer";
            n.Controller = function(o) {
                var s, l, c = "ScrollMagic.Controller", u = "REVERSE", d = "PAUSED", f = i.defaults, p = this, g = a.extend({}, f, o), h = [], v = !1, m = 0, y = d, b = !0, w = 0, S = !0, E = function() {
                    g.refreshInterval > 0 && (l = e.setTimeout(T, g.refreshInterval))
                }, x = function() {
                    return g.vertical ? a.get.scrollTop(g.container) : a.get.scrollLeft(g.container)
                }, _ = function() {
                    return g.vertical ? a.get.height(g.container) : a.get.width(g.container)
                }, O = this._setScrollPos = function(t) {
                    g.vertical ? b ? e.scrollTo(a.get.scrollLeft(), t) : g.container.scrollTop = t : b ? e.scrollTo(t, a.get.scrollTop()) : g.container.scrollLeft = t
                }
                , C = function() {
                    if (S && v) {
                        var e = a.type.Array(v) ? v : h.slice(0);
                        v = !1;
                        var t = m
                          , n = (m = p.scrollPos()) - t;
                        0 !== n && (y = n > 0 ? "FORWARD" : u),
                        y === u && e.reverse(),
                        e.forEach((function(t, n) {
                            P(3, "updating Scene " + (n + 1) + "/" + e.length + " (" + h.length + " total)"),
                            t.update(!0)
                        }
                        )),
                        0 === e.length && g.loglevel >= 3 && P(3, "updating 0 Scenes (nothing added to controller)")
                    }
                }, z = function() {
                    s = a.rAF(C)
                }, A = function(e) {
                    P(3, "event fired causing an update:", e.type),
                    "resize" == e.type && (w = _(),
                    y = d),
                    !0 !== v && (v = !0,
                    z())
                }, T = function() {
                    if (!b && w != _()) {
                        var e;
                        try {
                            e = new Event("resize",{
                                bubbles: !1,
                                cancelable: !1
                            })
                        } catch (n) {
                            (e = t.createEvent("Event")).initEvent("resize", !1, !1)
                        }
                        g.container.dispatchEvent(e)
                    }
                    h.forEach((function(e, t) {
                        e.refresh()
                    }
                    )),
                    E()
                }, P = this._log = function(t, n) {
                    g.loglevel >= t && (Array.prototype.splice.call(arguments, 1, 0, "(" + c + ") ->"),
                    a.log.apply(e, arguments))
                }
                ;
                this._options = g;
                var k = function(e) {
                    if (e.length <= 1)
                        return e;
                    var t = e.slice(0);
                    return t.sort((function(e, t) {
                        return e.scrollOffset() > t.scrollOffset() ? 1 : -1
                    }
                    )),
                    t
                };
                return this.addScene = function(e) {
                    if (a.type.Array(e))
                        e.forEach((function(e, t) {
                            p.addScene(e)
                        }
                        ));
                    else if (e instanceof n.Scene) {
                        if (e.controller() !== p)
                            e.addTo(p);
                        else if (h.indexOf(e) < 0) {
                            for (var t in h.push(e),
                            h = k(h),
                            e.on("shift.controller_sort", (function() {
                                h = k(h)
                            }
                            )),
                            g.globalSceneOptions)
                                e[t] && e[t].call(e, g.globalSceneOptions[t]);
                            P(3, "adding Scene (now " + h.length + " total)")
                        }
                    } else
                        P(1, "ERROR: invalid argument supplied for '.addScene()'");
                    return p
                }
                ,
                this.removeScene = function(e) {
                    if (a.type.Array(e))
                        e.forEach((function(e, t) {
                            p.removeScene(e)
                        }
                        ));
                    else {
                        var t = h.indexOf(e);
                        t > -1 && (e.off("shift.controller_sort"),
                        h.splice(t, 1),
                        P(3, "removing Scene (now " + h.length + " left)"),
                        e.remove())
                    }
                    return p
                }
                ,
                this.updateScene = function(e, t) {
                    return a.type.Array(e) ? e.forEach((function(e, n) {
                        p.updateScene(e, t)
                    }
                    )) : t ? e.update(!0) : !0 !== v && e instanceof n.Scene && (-1 == (v = v || []).indexOf(e) && v.push(e),
                    v = k(v),
                    z()),
                    p
                }
                ,
                this.update = function(e) {
                    return A({
                        type: "resize"
                    }),
                    e && C(),
                    p
                }
                ,
                this.scrollTo = function(e, t) {
                    if (a.type.Number(e))
                        O.call(g.container, e, t);
                    else if (e instanceof n.Scene)
                        e.controller() === p ? p.scrollTo(e.scrollOffset(), t) : P(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", e);
                    else if (a.type.Function(e))
                        O = e;
                    else {
                        var o = a.get.elements(e)[0];
                        if (o) {
                            for (; o.parentNode.hasAttribute(r); )
                                o = o.parentNode;
                            var i = g.vertical ? "top" : "left"
                              , s = a.get.offset(g.container)
                              , l = a.get.offset(o);
                            b || (s[i] -= p.scrollPos()),
                            p.scrollTo(l[i] - s[i], t)
                        } else
                            P(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", e)
                    }
                    return p
                }
                ,
                this.scrollPos = function(e) {
                    return arguments.length ? (a.type.Function(e) ? x = e : P(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."),
                    p) : x.call(p)
                }
                ,
                this.info = function(e) {
                    var t = {
                        size: w,
                        vertical: g.vertical,
                        scrollPos: m,
                        scrollDirection: y,
                        container: g.container,
                        isDocument: b
                    };
                    return arguments.length ? void 0 !== t[e] ? t[e] : void P(1, 'ERROR: option "' + e + '" is not available') : t
                }
                ,
                this.loglevel = function(e) {
                    return arguments.length ? (g.loglevel != e && (g.loglevel = e),
                    p) : g.loglevel
                }
                ,
                this.enabled = function(e) {
                    return arguments.length ? (S != e && (S = !!e,
                    p.updateScene(h, !0)),
                    p) : S
                }
                ,
                this.destroy = function(t) {
                    e.clearTimeout(l);
                    for (var n = h.length; n--; )
                        h[n].destroy(t);
                    return g.container.removeEventListener("resize", A),
                    g.container.removeEventListener("scroll", A),
                    a.cAF(s),
                    P(3, "destroyed " + c + " (reset: " + (t ? "true" : "false") + ")"),
                    null
                }
                ,
                function() {
                    for (var r in g)
                        f.hasOwnProperty(r) || (P(2, 'WARNING: Unknown option "' + r + '"'),
                        delete g[r]);
                    if (g.container = a.get.elements(g.container)[0],
                    !g.container)
                        throw P(1, "ERROR creating object " + c + ": No valid scroll container supplied"),
                        c + " init failed.";
                    (b = g.container === e || g.container === t.body || !t.body.contains(g.container)) && (g.container = e),
                    w = _(),
                    g.container.addEventListener("resize", A),
                    g.container.addEventListener("scroll", A);
                    var o = parseInt(g.refreshInterval, 10);
                    g.refreshInterval = a.type.Number(o) ? o : f.refreshInterval,
                    E(),
                    P(3, "added new " + c + " controller (v" + n.version + ")")
                }(),
                p
            }
            ;
            var i = {
                defaults: {
                    container: e,
                    vertical: !0,
                    globalSceneOptions: {},
                    loglevel: 2,
                    refreshInterval: 100
                }
            };
            n.Controller.addOption = function(e, t) {
                i.defaults[e] = t
            }
            ,
            n.Controller.extend = function(e) {
                var t = this;
                n.Controller = function() {
                    return t.apply(this, arguments),
                    this.$super = a.extend({}, this),
                    e.apply(this, arguments) || this
                }
                ,
                a.extend(n.Controller, t),
                n.Controller.prototype = t.prototype,
                n.Controller.prototype.constructor = n.Controller
            }
            ,
            n.Scene = function(o) {
                var i, l, c = "ScrollMagic.Scene", u = "BEFORE", d = "DURING", f = "AFTER", p = s.defaults, g = this, h = a.extend({}, p, o), v = u, m = 0, y = {
                    start: 0,
                    end: 0
                }, b = 0, w = !0, S = {};
                this.on = function(e, t) {
                    return a.type.Function(t) ? (e = e.trim().split(" ")).forEach((function(e) {
                        var n = e.split(".")
                          , r = n[0]
                          , o = n[1];
                        "*" != r && (S[r] || (S[r] = []),
                        S[r].push({
                            namespace: o || "",
                            callback: t
                        }))
                    }
                    )) : E(1, "ERROR when calling '.on()': Supplied callback for '" + e + "' is not a valid function!"),
                    g
                }
                ,
                this.off = function(e, t) {
                    return e ? ((e = e.trim().split(" ")).forEach((function(e, n) {
                        var r = e.split(".")
                          , o = r[0]
                          , i = r[1] || "";
                        ("*" === o ? Object.keys(S) : [o]).forEach((function(e) {
                            for (var n = S[e] || [], r = n.length; r--; ) {
                                var o = n[r];
                                !o || i !== o.namespace && "*" !== i || t && t != o.callback || n.splice(r, 1)
                            }
                            n.length || delete S[e]
                        }
                        ))
                    }
                    )),
                    g) : (E(1, "ERROR: Invalid event name supplied."),
                    g)
                }
                ,
                this.trigger = function(e, t) {
                    if (e) {
                        var r = e.trim().split(".")
                          , o = r[0]
                          , i = r[1]
                          , s = S[o];
                        E(3, "event fired:", o, t ? "->" : "", t || ""),
                        s && s.forEach((function(e, r) {
                            i && i !== e.namespace || e.callback.call(g, new n.Event(o,e.namespace,g,t))
                        }
                        ))
                    } else
                        E(1, "ERROR: Invalid event name supplied.");
                    return g
                }
                ,
                g.on("change.internal", (function(e) {
                    "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? z() : "reverse" === e.what && g.update())
                }
                )).on("shift.internal", (function(e) {
                    O(),
                    g.update()
                }
                ));
                var E = this._log = function(t, n) {
                    h.loglevel >= t && (Array.prototype.splice.call(arguments, 1, 0, "(" + c + ") ->"),
                    a.log.apply(e, arguments))
                }
                ;
                this.addTo = function(e) {
                    return e instanceof n.Controller ? l != e && (l && l.removeScene(g),
                    l = e,
                    P(),
                    C(!0),
                    z(!0),
                    O(),
                    l.info("container").addEventListener("resize", A),
                    e.addScene(g),
                    g.trigger("add", {
                        controller: l
                    }),
                    E(3, "added " + c + " to controller"),
                    g.update()) : E(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),
                    g
                }
                ,
                this.enabled = function(e) {
                    return arguments.length ? (w != e && (w = !!e,
                    g.update(!0)),
                    g) : w
                }
                ,
                this.remove = function() {
                    if (l) {
                        l.info("container").removeEventListener("resize", A);
                        var e = l;
                        l = void 0,
                        e.removeScene(g),
                        g.trigger("remove"),
                        E(3, "removed " + c + " from controller")
                    }
                    return g
                }
                ,
                this.destroy = function(e) {
                    return g.trigger("destroy", {
                        reset: e
                    }),
                    g.remove(),
                    g.off("*.*"),
                    E(3, "destroyed " + c + " (reset: " + (e ? "true" : "false") + ")"),
                    null
                }
                ,
                this.update = function(e) {
                    if (l)
                        if (e)
                            if (l.enabled() && w) {
                                var t, n = l.info("scrollPos");
                                t = h.duration > 0 ? (n - y.start) / (y.end - y.start) : n >= y.start ? 1 : 0,
                                g.trigger("update", {
                                    startPos: y.start,
                                    endPos: y.end,
                                    scrollPos: n
                                }),
                                g.progress(t)
                            } else
                                x && v === d && L(!0);
                        else
                            l.updateScene(g, !1);
                    return g
                }
                ,
                this.refresh = function() {
                    return C(),
                    z(),
                    g
                }
                ,
                this.progress = function(e) {
                    if (arguments.length) {
                        var t = !1
                          , n = v
                          , r = l ? l.info("scrollDirection") : "PAUSED"
                          , o = h.reverse || e >= m;
                        if (0 === h.duration ? (t = m != e,
                        v = 0 === (m = e < 1 && o ? 0 : 1) ? u : d) : e < 0 && v !== u && o ? (m = 0,
                        v = u,
                        t = !0) : e >= 0 && e < 1 && o ? (m = e,
                        v = d,
                        t = !0) : e >= 1 && v !== f ? (m = 1,
                        v = f,
                        t = !0) : v !== d || o || L(),
                        t) {
                            var i = {
                                progress: m,
                                state: v,
                                scrollDirection: r
                            }
                              , s = v != n
                              , a = function(e) {
                                g.trigger(e, i)
                            };
                            s && n !== d && (a("enter"),
                            a(n === u ? "start" : "end")),
                            a("progress"),
                            s && v !== d && (a(v === u ? "start" : "end"),
                            a("leave"))
                        }
                        return g
                    }
                    return m
                }
                ;
                var x, _, O = function() {
                    y = {
                        start: b + h.offset
                    },
                    l && h.triggerElement && (y.start -= l.info("size") * h.triggerHook),
                    y.end = y.start + h.duration
                }, C = function(e) {
                    if (i) {
                        var t = "duration";
                        k(t, i.call(g)) && !e && (g.trigger("change", {
                            what: t,
                            newval: h.duration
                        }),
                        g.trigger("shift", {
                            reason: t
                        }))
                    }
                }, z = function(e) {
                    var t = 0
                      , n = h.triggerElement;
                    if (l && (n || b > 0)) {
                        if (n)
                            if (n.parentNode) {
                                for (var o = l.info(), i = a.get.offset(o.container), s = o.vertical ? "top" : "left"; n.parentNode.hasAttribute(r); )
                                    n = n.parentNode;
                                var c = a.get.offset(n);
                                o.isDocument || (i[s] -= l.scrollPos()),
                                t = c[s] - i[s]
                            } else
                                E(2, "WARNING: triggerElement was removed from DOM and will be reset to", void 0),
                                g.triggerElement(void 0);
                        var u = t != b;
                        b = t,
                        u && !e && g.trigger("shift", {
                            reason: "triggerElementPosition"
                        })
                    }
                }, A = function(e) {
                    h.triggerHook > 0 && g.trigger("shift", {
                        reason: "containerResize"
                    })
                }, T = a.extend(s.validate, {
                    duration: function(e) {
                        if (a.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                            var t = parseFloat(e) / 100;
                            e = function() {
                                return l ? l.info("size") * t : 0
                            }
                        }
                        if (a.type.Function(e)) {
                            i = e;
                            try {
                                e = parseFloat(i.call(g))
                            } catch (n) {
                                e = -1
                            }
                        }
                        if (e = parseFloat(e),
                        !a.type.Number(e) || e < 0)
                            throw i ? (i = void 0,
                            ['Invalid return value of supplied function for option "duration":', e]) : ['Invalid value for option "duration":', e];
                        return e
                    }
                }), P = function(e) {
                    (e = arguments.length ? [e] : Object.keys(T)).forEach((function(e, t) {
                        var n;
                        if (T[e])
                            try {
                                n = T[e](h[e])
                            } catch (o) {
                                n = p[e];
                                var r = a.type.String(o) ? [o] : o;
                                a.type.Array(r) ? (r[0] = "ERROR: " + r[0],
                                r.unshift(1),
                                E.apply(this, r)) : E(1, "ERROR: Problem executing validation callback for option '" + e + "':", o.message)
                            } finally {
                                h[e] = n
                            }
                    }
                    ))
                }, k = function(e, t) {
                    var n = !1
                      , r = h[e];
                    return h[e] != t && (h[e] = t,
                    P(e),
                    n = r != h[e]),
                    n
                }, R = function(e) {
                    g[e] || (g[e] = function(t) {
                        return arguments.length ? ("duration" === e && (i = void 0),
                        k(e, t) && (g.trigger("change", {
                            what: e,
                            newval: h[e]
                        }),
                        s.shifts.indexOf(e) > -1 && g.trigger("shift", {
                            reason: e
                        })),
                        g) : h[e]
                    }
                    )
                };
                this.controller = function() {
                    return l
                }
                ,
                this.state = function() {
                    return v
                }
                ,
                this.scrollOffset = function() {
                    return y.start
                }
                ,
                this.triggerPosition = function() {
                    var e = h.offset;
                    return l && (h.triggerElement ? e += b : e += l.info("size") * g.triggerHook()),
                    e
                }
                ,
                g.on("shift.internal", (function(e) {
                    var t = "duration" === e.reason;
                    (v === f && t || v === d && 0 === h.duration) && L(),
                    t && I()
                }
                )).on("progress.internal", (function(e) {
                    L()
                }
                )).on("add.internal", (function(e) {
                    I()
                }
                )).on("destroy.internal", (function(e) {
                    g.removePin(e.reset)
                }
                ));
                var L = function(e) {
                    if (x && l) {
                        var t = l.info()
                          , n = _.spacer.firstChild;
                        if (e || v !== d) {
                            var r = {
                                position: _.inFlow ? "relative" : "absolute",
                                top: 0,
                                left: 0
                            }
                              , o = a.css(n, "position") != r.position;
                            _.pushFollowers ? h.duration > 0 && (v === f && 0 === parseFloat(a.css(_.spacer, "padding-top")) || v === u && 0 === parseFloat(a.css(_.spacer, "padding-bottom"))) && (o = !0) : r[t.vertical ? "top" : "left"] = h.duration * m,
                            a.css(n, r),
                            o && I()
                        } else {
                            "fixed" != a.css(n, "position") && (a.css(n, {
                                position: "fixed"
                            }),
                            I());
                            var i = a.get.offset(_.spacer, !0)
                              , s = h.reverse || 0 === h.duration ? t.scrollPos - y.start : Math.round(m * h.duration * 10) / 10;
                            i[t.vertical ? "top" : "left"] += s,
                            a.css(_.spacer.firstChild, {
                                top: i.top,
                                left: i.left
                            })
                        }
                    }
                }
                  , I = function() {
                    if (x && l && _.inFlow) {
                        var e = v === d
                          , t = l.info("vertical")
                          , n = _.spacer.firstChild
                          , r = a.isMarginCollapseType(a.css(_.spacer, "display"))
                          , o = {};
                        _.relSize.width || _.relSize.autoFullWidth ? e ? a.css(x, {
                            width: a.get.width(_.spacer)
                        }) : a.css(x, {
                            width: "100%"
                        }) : (o["min-width"] = a.get.width(t ? x : n, !0, !0),
                        o.width = e ? o["min-width"] : "auto"),
                        _.relSize.height ? e ? a.css(x, {
                            height: a.get.height(_.spacer) - (_.pushFollowers ? h.duration : 0)
                        }) : a.css(x, {
                            height: "100%"
                        }) : (o["min-height"] = a.get.height(t ? n : x, !0, !r),
                        o.height = e ? o["min-height"] : "auto"),
                        _.pushFollowers && (o["padding" + (t ? "Top" : "Left")] = h.duration * m,
                        o["padding" + (t ? "Bottom" : "Right")] = h.duration * (1 - m)),
                        a.css(_.spacer, o)
                    }
                }
                  , j = function() {
                    l && x && v === d && !l.info("isDocument") && L()
                }
                  , N = function() {
                    l && x && v === d && ((_.relSize.width || _.relSize.autoFullWidth) && a.get.width(e) != a.get.width(_.spacer.parentNode) || _.relSize.height && a.get.height(e) != a.get.height(_.spacer.parentNode)) && I()
                }
                  , F = function(e) {
                    l && x && v === d && !l.info("isDocument") && (e.preventDefault(),
                    l._setScrollPos(l.info("scrollPos") - ((e.wheelDelta || e[l.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
                };
                this.setPin = function(n, o) {
                    var i = o && o.hasOwnProperty("pushFollowers");
                    if (o = a.extend({}, {
                        pushFollowers: !0,
                        spacerClass: "scrollmagic-pin-spacer"
                    }, o),
                    !(n = a.get.elements(n)[0]))
                        return E(1, "ERROR calling method 'setPin()': Invalid pin element supplied."),
                        g;
                    if ("fixed" === a.css(n, "position"))
                        return E(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),
                        g;
                    if (x) {
                        if (x === n)
                            return g;
                        g.removePin()
                    }
                    var s = (x = n).parentNode.style.display
                      , l = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                    x.parentNode.style.display = "none";
                    var c = "absolute" != a.css(x, "position")
                      , u = a.css(x, l.concat(["display"]))
                      , d = a.css(x, ["width", "height"]);
                    x.parentNode.style.display = s,
                    !c && o.pushFollowers && (E(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."),
                    o.pushFollowers = !1),
                    e.setTimeout((function() {
                        x && 0 === h.duration && i && o.pushFollowers && E(2, "WARNING: pushFollowers =", !0, "has no effect, when scene duration is 0.")
                    }
                    ), 0);
                    var f = x.parentNode.insertBefore(t.createElement("div"), x)
                      , p = a.extend(u, {
                        position: c ? "relative" : "absolute",
                        boxSizing: "content-box",
                        mozBoxSizing: "content-box",
                        webkitBoxSizing: "content-box"
                    });
                    if (c || a.extend(p, a.css(x, ["width", "height"])),
                    a.css(f, p),
                    f.setAttribute(r, ""),
                    a.addClass(f, o.spacerClass),
                    _ = {
                        spacer: f,
                        relSize: {
                            width: "%" === d.width.slice(-1),
                            height: "%" === d.height.slice(-1),
                            autoFullWidth: "auto" === d.width && c && a.isMarginCollapseType(u.display)
                        },
                        pushFollowers: o.pushFollowers,
                        inFlow: c
                    },
                    !x.___origStyle) {
                        x.___origStyle = {};
                        var v = x.style;
                        l.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach((function(e) {
                            x.___origStyle[e] = v[e] || ""
                        }
                        ))
                    }
                    return _.relSize.width && a.css(f, {
                        width: d.width
                    }),
                    _.relSize.height && a.css(f, {
                        height: d.height
                    }),
                    f.appendChild(x),
                    a.css(x, {
                        position: c ? "relative" : "absolute",
                        margin: "auto",
                        top: "auto",
                        left: "auto",
                        bottom: "auto",
                        right: "auto"
                    }),
                    (_.relSize.width || _.relSize.autoFullWidth) && a.css(x, {
                        boxSizing: "border-box",
                        mozBoxSizing: "border-box",
                        webkitBoxSizing: "border-box"
                    }),
                    e.addEventListener("scroll", j),
                    e.addEventListener("resize", j),
                    e.addEventListener("resize", N),
                    x.addEventListener("mousewheel", F),
                    x.addEventListener("DOMMouseScroll", F),
                    E(3, "added pin"),
                    L(),
                    g
                }
                ,
                this.removePin = function(t) {
                    if (x) {
                        if (v === d && L(!0),
                        t || !l) {
                            var n = _.spacer.firstChild;
                            if (n.hasAttribute(r)) {
                                var o = _.spacer.style
                                  , i = {};
                                ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach((function(e) {
                                    i[e] = o[e] || ""
                                }
                                )),
                                a.css(n, i)
                            }
                            _.spacer.parentNode.insertBefore(n, _.spacer),
                            _.spacer.parentNode.removeChild(_.spacer),
                            x.parentNode.hasAttribute(r) || (a.css(x, x.___origStyle),
                            delete x.___origStyle)
                        }
                        e.removeEventListener("scroll", j),
                        e.removeEventListener("resize", j),
                        e.removeEventListener("resize", N),
                        x.removeEventListener("mousewheel", F),
                        x.removeEventListener("DOMMouseScroll", F),
                        x = void 0,
                        E(3, "removed pin (reset: " + (t ? "true" : "false") + ")")
                    }
                    return g
                }
                ;
                var G, D = [];
                return g.on("destroy.internal", (function(e) {
                    g.removeClassToggle(e.reset)
                }
                )),
                this.setClassToggle = function(e, t) {
                    var n = a.get.elements(e);
                    return 0 !== n.length && a.type.String(t) ? (D.length > 0 && g.removeClassToggle(),
                    G = t,
                    D = n,
                    g.on("enter.internal_class leave.internal_class", (function(e) {
                        var t = "enter" === e.type ? a.addClass : a.removeClass;
                        D.forEach((function(e, n) {
                            t(e, G)
                        }
                        ))
                    }
                    )),
                    g) : (E(1, "ERROR calling method 'setClassToggle()': Invalid " + (0 === n.length ? "element" : "classes") + " supplied."),
                    g)
                }
                ,
                this.removeClassToggle = function(e) {
                    return e && D.forEach((function(e, t) {
                        a.removeClass(e, G)
                    }
                    )),
                    g.off("start.internal_class end.internal_class"),
                    G = void 0,
                    D = [],
                    g
                }
                ,
                function() {
                    for (var e in h)
                        p.hasOwnProperty(e) || (E(2, 'WARNING: Unknown option "' + e + '"'),
                        delete h[e]);
                    for (var t in p)
                        R(t);
                    P()
                }(),
                g
            }
            ;
            var s = {
                defaults: {
                    duration: 0,
                    offset: 0,
                    triggerElement: void 0,
                    triggerHook: .5,
                    reverse: !0,
                    loglevel: 2
                },
                validate: {
                    offset: function(e) {
                        if (e = parseFloat(e),
                        !a.type.Number(e))
                            throw ['Invalid value for option "offset":', e];
                        return e
                    },
                    triggerElement: function(e) {
                        if (e = e || void 0) {
                            var t = a.get.elements(e)[0];
                            if (!t || !t.parentNode)
                                throw ['Element defined in option "triggerElement" was not found:', e];
                            e = t
                        }
                        return e
                    },
                    triggerHook: function(e) {
                        var t = {
                            onCenter: .5,
                            onEnter: 1,
                            onLeave: 0
                        };
                        if (a.type.Number(e))
                            e = Math.max(0, Math.min(parseFloat(e), 1));
                        else {
                            if (!(e in t))
                                throw ['Invalid value for option "triggerHook": ', e];
                            e = t[e]
                        }
                        return e
                    },
                    reverse: function(e) {
                        return !!e
                    },
                    loglevel: function(e) {
                        if (e = parseInt(e),
                        !a.type.Number(e) || e < 0 || e > 3)
                            throw ['Invalid value for option "loglevel":', e];
                        return e
                    }
                },
                shifts: ["duration", "offset", "triggerHook"]
            };
            n.Scene.addOption = function(e, t, r, o) {
                e in s.defaults ? n._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + e + "', because it already exists.") : (s.defaults[e] = t,
                s.validate[e] = r,
                o && s.shifts.push(e))
            }
            ,
            n.Scene.extend = function(e) {
                var t = this;
                n.Scene = function() {
                    return t.apply(this, arguments),
                    this.$super = a.extend({}, this),
                    e.apply(this, arguments) || this
                }
                ,
                a.extend(n.Scene, t),
                n.Scene.prototype = t.prototype,
                n.Scene.prototype.constructor = n.Scene
            }
            ,
            n.Event = function(e, t, n, r) {
                for (var o in r = r || {})
                    this[o] = r[o];
                return this.type = e,
                this.target = this.currentTarget = n,
                this.namespace = t || "",
                this.timeStamp = this.timestamp = Date.now(),
                this
            }
            ;
            var a = n._util = function(e) {
                var n, r = {}, i = function(e) {
                    return parseFloat(e) || 0
                }, s = function(t) {
                    return t.currentStyle ? t.currentStyle : e.getComputedStyle(t)
                }, a = function(n, r, o, a) {
                    if ((r = r === t ? e : r) === e)
                        a = !1;
                    else if (!v.DomElement(r))
                        return 0;
                    n = n.charAt(0).toUpperCase() + n.substr(1).toLowerCase();
                    var l = (o ? r["offset" + n] || r["outer" + n] : r["client" + n] || r["inner" + n]) || 0;
                    if (o && a) {
                        var c = s(r);
                        l += "Height" === n ? i(c.marginTop) + i(c.marginBottom) : i(c.marginLeft) + i(c.marginRight)
                    }
                    return l
                }, l = function(e) {
                    return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, (function(e) {
                        return e[1].toUpperCase()
                    }
                    ))
                };
                r.extend = function(e) {
                    for (e = e || {},
                    n = 1; n < arguments.length; n++)
                        if (arguments[n])
                            for (var t in arguments[n])
                                arguments[n].hasOwnProperty(t) && (e[t] = arguments[n][t]);
                    return e
                }
                ,
                r.isMarginCollapseType = function(e) {
                    return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1
                }
                ;
                var c = 0
                  , u = ["ms", "moz", "webkit", "o"]
                  , d = e.requestAnimationFrame
                  , f = e.cancelAnimationFrame;
                for (n = 0; !d && n < u.length; ++n)
                    d = e[u[n] + "RequestAnimationFrame"],
                    f = e[u[n] + "CancelAnimationFrame"] || e[u[n] + "CancelRequestAnimationFrame"];
                d || (d = function(t) {
                    var n = (new Date).getTime()
                      , r = Math.max(0, 16 - (n - c))
                      , o = e.setTimeout((function() {
                        t(n + r)
                    }
                    ), r);
                    return c = n + r,
                    o
                }
                ),
                f || (f = function(t) {
                    e.clearTimeout(t)
                }
                ),
                r.rAF = d.bind(e),
                r.cAF = f.bind(e);
                var p = ["error", "warn", "log"]
                  , g = e.console || {};
                for (g.log = g.log || function() {}
                ,
                n = 0; n < p.length; n++) {
                    var h = p[n];
                    g[h] || (g[h] = g.log)
                }
                r.log = function(e) {
                    (e > p.length || e <= 0) && (e = p.length);
                    var t = new Date
                      , n = ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2) + ":" + ("0" + t.getSeconds()).slice(-2) + ":" + ("00" + t.getMilliseconds()).slice(-3)
                      , r = p[e - 1]
                      , o = Array.prototype.splice.call(arguments, 1)
                      , i = Function.prototype.bind.call(g[r], g);
                    o.unshift(n),
                    i.apply(g, o)
                }
                ;
                var v = r.type = function(e) {
                    return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
                }
                ;
                v.String = function(e) {
                    return "string" === v(e)
                }
                ,
                v.Function = function(e) {
                    return "function" === v(e)
                }
                ,
                v.Array = function(e) {
                    return Array.isArray(e)
                }
                ,
                v.Number = function(e) {
                    return !v.Array(e) && e - parseFloat(e) + 1 >= 0
                }
                ,
                v.DomElement = function(e) {
                    return "object" === ("undefined" === typeof HTMLElement ? "undefined" : o(HTMLElement)) || "function" === typeof HTMLElement ? e instanceof HTMLElement || e instanceof SVGElement : e && "object" === ("undefined" === typeof e ? "undefined" : o(e)) && null !== e && 1 === e.nodeType && "string" === typeof e.nodeName
                }
                ;
                var m = r.get = {};
                return m.elements = function(n) {
                    var r = [];
                    if (v.String(n))
                        try {
                            n = t.querySelectorAll(n)
                        } catch (a) {
                            return r
                        }
                    if ("nodelist" === v(n) || v.Array(n) || n instanceof NodeList)
                        for (var o = 0, i = r.length = n.length; o < i; o++) {
                            var s = n[o];
                            r[o] = v.DomElement(s) ? s : m.elements(s)
                        }
                    else
                        (v.DomElement(n) || n === t || n === e) && (r = [n]);
                    return r
                }
                ,
                m.scrollTop = function(t) {
                    return t && "number" === typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0
                }
                ,
                m.scrollLeft = function(t) {
                    return t && "number" === typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0
                }
                ,
                m.width = function(e, t, n) {
                    return a("width", e, t, n)
                }
                ,
                m.height = function(e, t, n) {
                    return a("height", e, t, n)
                }
                ,
                m.offset = function(e, t) {
                    var n = {
                        top: 0,
                        left: 0
                    };
                    if (e && e.getBoundingClientRect) {
                        var r = e.getBoundingClientRect();
                        n.top = r.top,
                        n.left = r.left,
                        t || (n.top += m.scrollTop(),
                        n.left += m.scrollLeft())
                    }
                    return n
                }
                ,
                r.addClass = function(e, t) {
                    t && (e.classList ? e.classList.add(t) : e.className += " " + t)
                }
                ,
                r.removeClass = function(e, t) {
                    t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)","gi"), " "))
                }
                ,
                r.css = function(e, t) {
                    if (v.String(t))
                        return s(e)[l(t)];
                    if (v.Array(t)) {
                        var n = {}
                          , r = s(e);
                        return t.forEach((function(e, t) {
                            n[e] = r[l(e)]
                        }
                        )),
                        n
                    }
                    for (var o in t) {
                        var i = t[o];
                        i == parseFloat(i) && (i += "px"),
                        e.style[l(o)] = i
                    }
                }
                ,
                r
            }(e || {});
            return n
        }("undefined" === typeof window ? d : window, "undefined" === typeof document ? {} : document)
          , p = r.createContext(null)
          , g = function(e) {
            function t() {
                var e, n, r;
                i(this, t);
                for (var o = arguments.length, s = Array(o), a = 0; a < o; a++)
                    s[a] = arguments[a];
                return n = r = u(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))),
                r.state = {
                    controller: null
                },
                u(r, n)
            }
            return l(t, e),
            s(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props
                      , t = (e.children,
                    c(e, ["children"]));
                    this.setState({
                        controller: new f.Controller(t)
                    })
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.controller = null
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.children
                      , t = this.state.controller;
                    return t ? r.createElement(p.Provider, {
                        value: t
                    }, e) : e
                }
            }]),
            t
        }(r.Component);
        !function(e) {
            var t = "debug.addIndicators";
            if ("undefined" === typeof n)
                var n = {
                    addEventListener: function() {}
                };
            var r = n.console || {}
              , o = Function.prototype.bind.call(r.error || r.log || function() {}
            , r);
            e || o("(" + t + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
            var i = "0.85em"
              , s = "9999"
              , a = e._util
              , l = 0;
            e.Scene.extend((function() {
                var e, t = this;
                t.addIndicators = function(n) {
                    if (!e) {
                        var r = {
                            name: "",
                            indent: 0,
                            parent: void 0,
                            colorStart: "green",
                            colorEnd: "red",
                            colorTrigger: "blue"
                        };
                        n = a.extend({}, r, n),
                        l++,
                        e = new c(t,n),
                        t.on("add.plugin_addIndicators", e.add),
                        t.on("remove.plugin_addIndicators", e.remove),
                        t.on("destroy.plugin_addIndicators", t.removeIndicators),
                        t.controller() && e.add()
                    }
                    return t
                }
                ,
                t.removeIndicators = function() {
                    return e && (e.remove(),
                    this.off("*.plugin_addIndicators"),
                    e = void 0),
                    t
                }
            }
            )),
            e.Controller.addOption("addIndicators", !1),
            e.Controller.extend((function() {
                var r = this
                  , o = r.info()
                  , i = o.container
                  , s = o.isDocument
                  , l = o.vertical
                  , c = {
                    groups: []
                };
                r._indicators && function() {
                    r._log && (Array.prototype.splice.call(arguments, 1, 0, "(" + t + ")", "->"),
                    r._log.apply(this, arguments))
                }(2, "WARNING: Scene already has a property '_indicators', which will be overwritten by plugin."),
                this._indicators = c;
                var u = function() {
                    c.updateBoundsPositions()
                }
                  , d = function() {
                    c.updateTriggerGroupPositions()
                };
                return i.addEventListener("resize", d),
                s || (n.addEventListener("resize", d),
                n.addEventListener("scroll", d)),
                i.addEventListener("resize", u),
                i.addEventListener("scroll", u),
                this._indicators.updateBoundsPositions = function(e) {
                    for (var t, n, r, o = e ? [a.extend({}, e.triggerGroup, {
                        members: [e]
                    })] : c.groups, s = o.length, u = {}, d = l ? "left" : "top", f = l ? "width" : "height", p = l ? a.get.scrollLeft(i) + a.get.width(i) - 15 : a.get.scrollTop(i) + a.get.height(i) - 15; s--; )
                        for (t = (r = o[s]).members.length,
                        n = a.get[f](r.element.firstChild); t--; )
                            u[d] = p - n,
                            a.css(r.members[t].bounds, u)
                }
                ,
                this._indicators.updateTriggerGroupPositions = function(e) {
                    for (var t, n, o, u, d = e ? [e] : c.groups, f = d.length, p = s ? document.body : i, g = s ? {
                        top: 0,
                        left: 0
                    } : a.get.offset(p, !0), h = l ? a.get.width(i) - 15 : a.get.height(i) - 15, v = l ? "width" : "height", m = l ? "Y" : "X"; f--; )
                        n = (t = d[f]).element,
                        u = (o = t.triggerHook * r.info("size")) > a.get[v](n.firstChild.firstChild) ? "translate" + m + "(-100%)" : "",
                        a.css(n, {
                            top: g.top + (l ? o : h - t.members[0].options.indent),
                            left: g.left + (l ? h - t.members[0].options.indent : o)
                        }),
                        a.css(n.firstChild.firstChild, {
                            "-ms-transform": u,
                            "-webkit-transform": u,
                            transform: u
                        })
                }
                ,
                this._indicators.updateTriggerGroupLabel = function(e) {
                    var t = "trigger" + (e.members.length > 1 ? "" : " " + e.members[0].options.name)
                      , n = e.element.firstChild.firstChild;
                    n.textContent !== t && (n.textContent = t,
                    l && c.updateBoundsPositions())
                }
                ,
                this.addScene = function(t) {
                    this._options.addIndicators && t instanceof e.Scene && t.controller() === r && t.addIndicators(),
                    this.$super.addScene.apply(this, arguments)
                }
                ,
                this.destroy = function() {
                    i.removeEventListener("resize", d),
                    s || (n.removeEventListener("resize", d),
                    n.removeEventListener("scroll", d)),
                    i.removeEventListener("resize", u),
                    i.removeEventListener("scroll", u),
                    this.$super.destroy.apply(this, arguments)
                }
                ,
                r
            }
            ));
            var c = function(e, n) {
                var r, o, i = this, s = u.bounds(), c = u.start(n.colorStart), d = u.end(n.colorEnd), f = n.parent && a.get.elements(n.parent)[0], p = function() {
                    e._log && (Array.prototype.splice.call(arguments, 1, 0, "(" + t + ")", "->"),
                    e._log.apply(this, arguments))
                };
                n.name = n.name || l,
                c.firstChild.textContent += " " + n.name,
                d.textContent += " " + n.name,
                s.appendChild(c),
                s.appendChild(d),
                i.options = n,
                i.bounds = s,
                i.triggerGroup = void 0,
                this.add = function() {
                    o = e.controller(),
                    r = o.info("vertical");
                    var t = o.info("isDocument");
                    f || (f = t ? document.body : o.info("container")),
                    t || "static" !== a.css(f, "position") || a.css(f, {
                        position: "relative"
                    }),
                    e.on("change.plugin_addIndicators", h),
                    e.on("shift.plugin_addIndicators", g),
                    b(),
                    m(),
                    setTimeout((function() {
                        o._indicators.updateBoundsPositions(i)
                    }
                    ), 0),
                    p(3, "added indicators")
                }
                ,
                this.remove = function() {
                    if (i.triggerGroup) {
                        if (e.off("change.plugin_addIndicators", h),
                        e.off("shift.plugin_addIndicators", g),
                        i.triggerGroup.members.length > 1) {
                            var t = i.triggerGroup;
                            t.members.splice(t.members.indexOf(i), 1),
                            o._indicators.updateTriggerGroupLabel(t),
                            o._indicators.updateTriggerGroupPositions(t),
                            i.triggerGroup = void 0
                        } else
                            y();
                        v(),
                        p(3, "removed indicators")
                    }
                }
                ;
                var g = function() {
                    m()
                }
                  , h = function(e) {
                    "triggerHook" === e.what && b()
                }
                  , v = function() {
                    s.parentNode.removeChild(s)
                }
                  , m = function() {
                    s.parentNode !== f && function() {
                        var e = o.info("vertical");
                        a.css(c.firstChild, {
                            "border-bottom-width": e ? 1 : 0,
                            "border-right-width": e ? 0 : 1,
                            bottom: e ? -1 : n.indent,
                            right: e ? n.indent : -1,
                            padding: e ? "0 8px" : "2px 4px"
                        }),
                        a.css(d, {
                            "border-top-width": e ? 1 : 0,
                            "border-left-width": e ? 0 : 1,
                            top: e ? "100%" : "",
                            right: e ? n.indent : "",
                            bottom: e ? "" : n.indent,
                            left: e ? "" : "100%",
                            padding: e ? "0 8px" : "2px 4px"
                        }),
                        f.appendChild(s)
                    }();
                    var t = {};
                    t[r ? "top" : "left"] = e.triggerPosition(),
                    t[r ? "height" : "width"] = e.duration(),
                    a.css(s, t),
                    a.css(d, {
                        display: e.duration() > 0 ? "" : "none"
                    })
                }
                  , y = function() {
                    o._indicators.groups.splice(o._indicators.groups.indexOf(i.triggerGroup), 1),
                    i.triggerGroup.element.parentNode.removeChild(i.triggerGroup.element),
                    i.triggerGroup = void 0
                }
                  , b = function() {
                    var t = e.triggerHook()
                      , s = 1e-4;
                    if (!(i.triggerGroup && Math.abs(i.triggerGroup.triggerHook - t) < s)) {
                        for (var l, c = o._indicators.groups, d = c.length; d--; )
                            if (l = c[d],
                            Math.abs(l.triggerHook - t) < s)
                                return i.triggerGroup && (1 === i.triggerGroup.members.length ? y() : (i.triggerGroup.members.splice(i.triggerGroup.members.indexOf(i), 1),
                                o._indicators.updateTriggerGroupLabel(i.triggerGroup),
                                o._indicators.updateTriggerGroupPositions(i.triggerGroup))),
                                l.members.push(i),
                                i.triggerGroup = l,
                                void o._indicators.updateTriggerGroupLabel(l);
                        if (i.triggerGroup) {
                            if (1 === i.triggerGroup.members.length)
                                return i.triggerGroup.triggerHook = t,
                                void o._indicators.updateTriggerGroupPositions(i.triggerGroup);
                            i.triggerGroup.members.splice(i.triggerGroup.members.indexOf(i), 1),
                            o._indicators.updateTriggerGroupLabel(i.triggerGroup),
                            o._indicators.updateTriggerGroupPositions(i.triggerGroup),
                            i.triggerGroup = void 0
                        }
                        !function() {
                            var t = u.trigger(n.colorTrigger)
                              , s = {};
                            s[r ? "right" : "bottom"] = 0,
                            s[r ? "border-top-width" : "border-left-width"] = 1,
                            a.css(t.firstChild, s),
                            a.css(t.firstChild.firstChild, {
                                padding: r ? "0 8px 3px 8px" : "3px 4px"
                            }),
                            document.body.appendChild(t);
                            var l = {
                                triggerHook: e.triggerHook(),
                                element: t,
                                members: [i]
                            };
                            o._indicators.groups.push(l),
                            i.triggerGroup = l,
                            o._indicators.updateTriggerGroupLabel(l),
                            o._indicators.updateTriggerGroupPositions(l)
                        }()
                    }
                }
            }
              , u = {
                start: function(e) {
                    var t = document.createElement("div");
                    t.textContent = "start",
                    a.css(t, {
                        position: "absolute",
                        overflow: "visible",
                        "border-width": 0,
                        "border-style": "solid",
                        color: e,
                        "border-color": e
                    });
                    var n = document.createElement("div");
                    return a.css(n, {
                        position: "absolute",
                        overflow: "visible",
                        width: 0,
                        height: 0
                    }),
                    n.appendChild(t),
                    n
                },
                end: function(e) {
                    var t = document.createElement("div");
                    return t.textContent = "end",
                    a.css(t, {
                        position: "absolute",
                        overflow: "visible",
                        "border-width": 0,
                        "border-style": "solid",
                        color: e,
                        "border-color": e
                    }),
                    t
                },
                bounds: function() {
                    var e = document.createElement("div");
                    return a.css(e, {
                        position: "absolute",
                        overflow: "visible",
                        "white-space": "nowrap",
                        "pointer-events": "none",
                        "font-size": i
                    }),
                    e.style.zIndex = s,
                    e
                },
                trigger: function(e) {
                    var t = document.createElement("div");
                    t.textContent = "trigger",
                    a.css(t, {
                        position: "relative"
                    });
                    var n = document.createElement("div");
                    a.css(n, {
                        position: "absolute",
                        overflow: "visible",
                        "border-width": 0,
                        "border-style": "solid",
                        color: e,
                        "border-color": e
                    }),
                    n.appendChild(t);
                    var r = document.createElement("div");
                    return a.css(r, {
                        position: "fixed",
                        overflow: "visible",
                        "white-space": "nowrap",
                        "pointer-events": "none",
                        "font-size": i
                    }),
                    r.style.zIndex = s,
                    r.appendChild(n),
                    r
                }
            }
        }(f);
        var h = function(e) {
            return !(1 !== r.Children.count(e) || !e.type || "Tween" !== e.type.displayName && "Timeline" !== e.type.displayName)
        }
          , v = function(e, t, n) {
            return e && "function" === typeof e ? e(t, n) : e
        }
          , m = function(e, t, n) {
            return e = function(e, t, n) {
                if (h(e)) {
                    var o = a({}, e.props, {
                        totalProgress: t,
                        paused: !0
                    });
                    return r.createElement("div", null, r.createElement(e.type, o))
                }
                return e
            }(e, t),
            e = v(e, t, n),
            r.Children.only(e)
        }
          , y = function(e) {
            function t() {
                var e, n, r;
                i(this, t);
                for (var o = arguments.length, s = Array(o), a = 0; a < o; a++)
                    s[a] = arguments[a];
                return n = r = u(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))),
                r.state = {
                    event: "init",
                    progress: 0
                },
                u(r, n)
            }
            return l(t, e),
            s(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props
                      , t = (e.children,
                    e.controller)
                      , n = e.classToggle
                      , r = e.pin
                      , o = e.pinSettings
                      , i = e.indicators
                      , s = e.enabled
                      , a = c(e, ["children", "controller", "classToggle", "pin", "pinSettings", "indicators", "enabled"])
                      , l = this.ref;
                    a.triggerElement = null === a.triggerElement ? null : a.triggerElement || l,
                    this.scene = new f.Scene(a),
                    this.initEventHandlers(),
                    n && this.setClassToggle(this.scene, l, n),
                    (r || o) && this.setPin(this.scene, l, r, o),
                    i && this.scene.addIndicators({
                        name: " "
                    }),
                    void 0 !== s && this.scene.enabled(s),
                    this.scene.addTo(t)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props
                      , n = t.duration
                      , r = t.offset
                      , o = t.triggerElement
                      , i = t.triggerHook
                      , s = t.reverse
                      , a = t.enabled;
                    void 0 !== n && n !== e.duration && this.scene.duration(n),
                    void 0 !== r && r !== e.offset && this.scene.offset(r),
                    void 0 !== o && e.triggerElement,
                    void 0 !== i && i !== e.triggerHook && this.scene.triggerHook(i),
                    void 0 !== s && s !== e.reverse && this.scene.reverse(s),
                    void 0 !== a && a !== e.enabled && this.scene.enabled(a)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.scene.destroy()
                }
            }, {
                key: "setClassToggle",
                value: function(e, t, n) {
                    Array.isArray(n) && 2 === n.length ? e.setClassToggle(n[0], n[1]) : e.setClassToggle(t, n)
                }
            }, {
                key: "setPin",
                value: function(e, t, n, r) {
                    t = function(e) {
                        return "string" === typeof e || e instanceof String
                    }(n) ? n : t,
                    e.setPin(t, r)
                }
            }, {
                key: "initEventHandlers",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.children
                      , r = t.progressEvents
                      , o = void 0 === r || r;
                    ("function" === typeof n || h(v(n, 0, "init"))) && (this.scene.on("start end enter leave", (function(t) {
                        e.setState({
                            event: t
                        })
                    }
                    )),
                    o && this.scene.on("progress", (function(t) {
                        e.setState({
                            progress: t.progress
                        })
                    }
                    )))
                }
            }, {
                key: "render",
                value: function() {
                    var e, t, n, o = this, i = this.props.children, s = this.state, a = s.progress, l = s.event, c = m(i, a, l);
                    return r.cloneElement(c, (e = {},
                    t = function(e) {
                        return e.type && e.type.$$typeof && "Symbol(react.forward_ref)" === e.type.$$typeof.toString() ? "ref" : e.type && e.type.styledComponentId ? "innerRef" : "ref"
                    }(c),
                    n = function(e) {
                        return o.ref = e
                    }
                    ,
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n,
                    e))
                }
            }]),
            t
        }(r.PureComponent)
          , b = function(e) {
            function t() {
                return i(this, t),
                u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return l(t, e),
            s(t, [{
                key: "render",
                value: function() {
                    if (!this.props.controller) {
                        var e = this.props.children;
                        return m(e, 0, "init")
                    }
                    return r.createElement(y, this.props)
                }
            }]),
            t
        }(r.PureComponent);
        b.displayName = "Scene";
        var w = function(e) {
            var t = e.children
              , n = c(e, ["children"]);
            return r.createElement(p.Consumer, null, (function(e) {
                return r.createElement(b, a({
                    controller: e
                }, n), t)
            }
            ))
        }
    },
    3967: function(e, t) {
        var n;
        !function() {
            "use strict";
            var r = {}.hasOwnProperty;
            function o() {
                for (var e = "", t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    n && (e = s(e, i(n)))
                }
                return e
            }
            function i(e) {
                if ("string" === typeof e || "number" === typeof e)
                    return e;
                if ("object" !== typeof e)
                    return "";
                if (Array.isArray(e))
                    return o.apply(null, e);
                if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]"))
                    return e.toString();
                var t = "";
                for (var n in e)
                    r.call(e, n) && e[n] && (t = s(t, n));
                return t
            }
            function s(e, t) {
                return t ? e ? e + " " + t : e + t : e
            }
            e.exports ? (o.default = o,
            e.exports = o) : void 0 === (n = function() {
                return o
            }
            .apply(t, [])) || (e.exports = n)
        }()
    },
    8216: function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    5997: function(e, t, n) {
        "use strict";
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function o(e, t, n) {
            return t && r(e.prototype, t),
            n && r(e, n),
            e
        }
        n.d(t, {
            Z: function() {
                return o
            }
        })
    },
    2953: function(e, t, n) {
        "use strict";
        function r(e) {
            return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    3444: function(e, t, n) {
        "use strict";
        function r(e, t) {
            return (r = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function o(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && r(e, t)
        }
        n.d(t, {
            Z: function() {
                return o
            }
        })
    },
    982: function(e, t, n) {
        "use strict";
        function r(e) {
            return (r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function o(e, t) {
            if (t && ("object" === r(t) || "function" === typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        }
        n.d(t, {
            Z: function() {
                return o
            }
        })
    }
}]);
