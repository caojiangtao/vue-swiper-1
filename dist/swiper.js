!function (t, e) {
    if ("object" == typeof exports && "object" == typeof module)module.exports = e(); else if ("function" == typeof define && define.amd)define([], e); else {
        var n = e();
        for (var r in n)("object" == typeof exports ? exports : t)[r] = n[r]
    }
}(this, function () {
    return function (t) {
        function e(r) {
            if (n[r])return n[r].exports;
            var i = n[r] = {exports: {}, id: r, loaded: !1};
            return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
        }

        var n = {};
        return e.m = t, e.c = n, e.p = "/", e(0)
    }([function (t, e, n) {
        var r, i;
        n(1), r = n(5), i = n(6), t.exports = r || {}, t.exports.__esModule && (t.exports = t.exports["default"]), i && (("function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports).template = i)
    }, function (t, e, n) {
        var r = n(2);
        "string" == typeof r && (r = [[t.id, r, ""]]);
        n(4)(r, {});
        r.locals && (t.exports = r.locals)
    }, function (t, e, n) {
        e = t.exports = n(3)(), e.push([t.id, ".swiper{height:100%;overflow:hidden}.swiper .swiper-wrap{-webkit-transition:all .5s ease;transition:all .5s ease;height:100%}.swiper .swiper-wrap.dragging{-webkit-transition:none;transition:none}.swiper .swiper-wrap>div{overflow:hidden;height:100%}", ""])
    }, function (t, e) {
        t.exports = function () {
            var t = [];
            return t.toString = function () {
                for (var t = [], e = 0; e < this.length; e++) {
                    var n = this[e];
                    n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1])
                }
                return t.join("")
            }, t.i = function (e, n) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var r = {}, i = 0; i < this.length; i++) {
                    var s = this[i][0];
                    "number" == typeof s && (r[s] = !0)
                }
                for (i = 0; i < e.length; i++) {
                    var o = e[i];
                    "number" == typeof o[0] && r[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), t.push(o))
                }
            }, t
        }
    }, function (t, e, n) {
        function r(t, e) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n], i = l[r.id];
                if (i) {
                    i.refs++;
                    for (var s = 0; s < i.parts.length; s++)i.parts[s](r.parts[s]);
                    for (; s < r.parts.length; s++)i.parts.push(u(r.parts[s], e))
                } else {
                    for (var o = [], s = 0; s < r.parts.length; s++)o.push(u(r.parts[s], e));
                    l[r.id] = {id: r.id, refs: 1, parts: o}
                }
            }
        }

        function i(t) {
            for (var e = [], n = {}, r = 0; r < t.length; r++) {
                var i = t[r], s = i[0], o = i[1], a = i[2], u = i[3], h = {css: o, media: a, sourceMap: u};
                n[s] ? n[s].parts.push(h) : e.push(n[s] = {id: s, parts: [h]})
            }
            return e
        }

        function s(t, e) {
            var n = f(), r = m[m.length - 1];
            if ("top" === t.insertAt)r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), m.push(e); else {
                if ("bottom" !== t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                n.appendChild(e)
            }
        }

        function o(t) {
            t.parentNode.removeChild(t);
            var e = m.indexOf(t);
            e >= 0 && m.splice(e, 1)
        }

        function a(t) {
            var e = document.createElement("style");
            return e.type = "text/css", s(t, e), e
        }

        function u(t, e) {
            var n, r, i;
            if (e.singleton) {
                var s = v++;
                n = g || (g = a(e)), r = h.bind(null, n, s, !1), i = h.bind(null, n, s, !0)
            } else n = a(e), r = d.bind(null, n), i = function () {
                o(n)
            };
            return r(t), function (e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)return;
                    r(t = e)
                } else i()
            }
        }

        function h(t, e, n, r) {
            var i = n ? "" : r.css;
            if (t.styleSheet)t.styleSheet.cssText = x(e, i); else {
                var s = document.createTextNode(i), o = t.childNodes;
                o[e] && t.removeChild(o[e]), o.length ? t.insertBefore(s, o[e]) : t.appendChild(s)
            }
        }

        function d(t, e) {
            var n = e.css, r = e.media, i = e.sourceMap;
            if (r && t.setAttribute("media", r), i && (n += "\n/*# sourceURL=" + i.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"), t.styleSheet)t.styleSheet.cssText = n; else {
                for (; t.firstChild;)t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n))
            }
        }

        var l = {}, c = function (t) {
            var e;
            return function () {
                return "undefined" == typeof e && (e = t.apply(this, arguments)), e
            }
        }, p = c(function () {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
        }), f = c(function () {
            return document.head || document.getElementsByTagName("head")[0]
        }), g = null, v = 0, m = [];
        t.exports = function (t, e) {
            e = e || {}, "undefined" == typeof e.singleton && (e.singleton = p()), "undefined" == typeof e.insertAt && (e.insertAt = "bottom");
            var n = i(t);
            return r(n, e), function (t) {
                for (var s = [], o = 0; o < n.length; o++) {
                    var a = n[o], u = l[a.id];
                    u.refs--, s.push(u)
                }
                if (t) {
                    var h = i(t);
                    r(h, e)
                }
                for (var o = 0; o < s.length; o++) {
                    var u = s[o];
                    if (0 === u.refs) {
                        for (var d = 0; d < u.parts.length; d++)u.parts[d]();
                        delete l[u.id]
                    }
                }
            }
        };
        var x = function () {
            var t = [];
            return function (e, n) {
                return t[e] = n, t.filter(Boolean).join("\n")
            }
        }()
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = {
            props: {performanceMode: !1},
            data: function () {
                return {currentPage: 1, childrenCount: null, translateY: 0, height: 0, dragging: !1}
            },
            ready: function () {
                this.onTouchMove = this.onTouchMove.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this), this.childrenCount = this.$el.querySelectorAll(".swiper-wrap>div").length, this.height = this.$el.clientHeight
            },
            methods: {
                onTouchStart: function (t) {
                    this.startY = t.touches[0].pageY, this.startTranslateY = this.translateY, this.startTime = (new Date).getTime(), this.dragging = !0, document.addEventListener("touchmove", this.onTouchMove), document.addEventListener("touchend", this.onTouchEnd)
                }, onTouchMove: function (t) {
                    this.deltaY = t.touches[0].pageY - this.startY, this.performanceMode || (this.translateY = this.startTranslateY + this.deltaY)
                }, onTouchEnd: function (t) {
                    this.dragging = !1;
                    var e = (new Date).getTime() - this.startTime < 1e3;
                    this.deltaY < -100 || e && this.deltaY < -15 ? this.next() : (this.deltaY > 100 || e && this.deltaY > 15) && this.prev()
                }, next: function () {
                    var t = this.currentPage;
                    this.currentPage < this.childrenCount && t++, this.setPage(t)
                }, prev: function () {
                    var t = this.currentPage;
                    this.currentPage > 1 && t--, this.setPage(t)
                }, setPage: function (t) {
                    this.currentPage = t, this.translateY = -(this.currentPage - 1) * this.height
                }
            }
        }
    }, function (t, e) {
        t.exports = "<div class=swiper> <div class=swiper-wrap :class=\"{ 'dragging': dragging }\" :style=\"{transform: 'translateY(' + translateY + 'px)'}\" @touchstart=onTouchStart> <slot></slot> </div> </div>"
    }])
});
