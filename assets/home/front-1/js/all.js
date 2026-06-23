if (function(e, n) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? n(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return n(e)
    } : n(e)
}("undefined" != typeof window ? window : this, function(e, n) {
    var t = [],
        a = e.document,
        i = t.slice,
        r = t.concat,
        o = t.push,
        s = t.indexOf,
        m = {},
        u = m.toString,
        l = m.hasOwnProperty,
        c = {},
        v = "1.12.4",
        d = function(e, n) {
            return new d.fn.init(e, n)
        },
        h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        f = /-([\da-z])/gi,
        S = function(e, n) {
            return n.toUpperCase()
        };

    function g(e) {
        var n = !!e && "length" in e && e.length,
            t = d.type(e);
        return "function" !== t && !d.isWindow(e) && ("array" === t || 0 === n || "number" == typeof n && n > 0 && n - 1 in e)
    }
    d.fn = d.prototype = {
        jquery: v,
        constructor: d,
        selector: "",
        length: 0,
        toArray: function() {
            return i.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : i.call(this)
        },
        pushStack: function(e) {
            var n = d.merge(this.constructor(), e);
            return n.prevObject = this, n.context = this.context, n
        },
        each: function(e) {
            return d.each(this, e)
        },
        map: function(e) {
            return this.pushStack(d.map(this, function(n, t) {
                return e.call(n, t, n)
            }))
        },
        slice: function() {
            return this.pushStack(i.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var n = this.length,
                t = +e + (0 > e ? n : 0);
            return this.pushStack(t >= 0 && n > t ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: o,
        sort: t.sort,
        splice: t.splice
    }, d.extend = d.fn.extend = function() {
        var e, n, t, a, i, r, o = arguments[0] || {},
            s = 1,
            m = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || d.isFunction(o) || (o = {}), s === m && (o = this, s--); m > s; s++)
            if (null != (i = arguments[s]))
                for (a in i) e = o[a], o !== (t = i[a]) && (u && t && (d.isPlainObject(t) || (n = d.isArray(t))) ? (n ? (n = !1, r = e && d.isArray(e) ? e : []) : r = e && d.isPlainObject(e) ? e : {}, o[a] = d.extend(u, r, t)) : void 0 !== t && (o[a] = t));
        return o
    }, d.extend({
        expando: "jQuery" + (v + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === d.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === d.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var n = e && e.toString();
            return !d.isArray(e) && n - parseFloat(n) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var n;
            for (n in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== d.type(e) || e.nodeType || d.isWindow(e)) return !1;
            try {
                if (e.constructor && !l.call(e, "constructor") && !l.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            if (!c.ownFirst)
                for (n in e) return l.call(e, n);
            for (n in e);
            return void 0 === n || l.call(e, n)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? m[u.call(e)] || "object" : typeof e
        },
        globalEval: function(n) {
            n && d.trim(n) && (e.execScript || function(n) {
                e.eval.call(e, n)
            })(n)
        },
        camelCase: function(e) {
            return e.replace(p, "ms-").replace(f, S)
        },
        nodeName: function(e, n) {
            return e.nodeName && e.nodeName.toLowerCase() === n.toLowerCase()
        },
        each: function(e, n) {
            var t, a = 0;
            if (g(e))
                for (t = e.length; t > a && !1 !== n.call(e[a], a, e[a]); a++);
            else
                for (a in e)
                    if (!1 === n.call(e[a], a, e[a])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(h, "")
        },
        makeArray: function(e, n) {
            var t = n || [];
            return null != e && (g(Object(e)) ? d.merge(t, "string" == typeof e ? [e] : e) : o.call(t, e)), t
        },
        inArray: function(e, n, t) {
            var a;
            if (n) {
                if (s) return s.call(n, e, t);
                for (a = n.length, t = t ? 0 > t ? Math.max(0, a + t) : t : 0; a > t; t++)
                    if (t in n && n[t] === e) return t
            }
            return -1
        },
        merge: function(e, n) {
            for (var t = +n.length, a = 0, i = e.length; t > a;) e[i++] = n[a++];
            if (t != t)
                for (; void 0 !== n[a];) e[i++] = n[a++];
            return e.length = i, e
        },
        grep: function(e, n, t) {
            for (var a = [], i = 0, r = e.length, o = !t; r > i; i++) !n(e[i], i) !== o && a.push(e[i]);
            return a
        },
        map: function(e, n, t) {
            var a, i, o = 0,
                s = [];
            if (g(e))
                for (a = e.length; a > o; o++) null != (i = n(e[o], o, t)) && s.push(i);
            else
                for (o in e) null != (i = n(e[o], o, t)) && s.push(i);
            return r.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) {
            var t, a, r;
            return "string" == typeof n && (r = e[n], n = e, e = r), d.isFunction(e) ? (t = i.call(arguments, 2), (a = function() {
                return e.apply(n || this, t.concat(i.call(arguments)))
            }).guid = e.guid = e.guid || d.guid++, a) : void 0
        },
        now: function() {
            return +new Date
        },
        support: c
    }), "function" == typeof Symbol && (d.fn[Symbol.iterator] = t[Symbol.iterator]), d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, n) {
        m["[object " + n + "]"] = n.toLowerCase()
    });
    var N = function(e) {
        var n, t, a, i, r, o, s, m, u, l, c, v, d, h, p, f, S, g, N, G = "sizzle" + 1 * new Date,
            y = e.document,
            b = 0,
            w = 0,
            k = re(),
            x = re(),
            C = re(),
            _ = function(e, n) {
                return e === n && (c = !0), 0
            },
            T = 1 << 31,
            E = {}.hasOwnProperty,
            A = [],
            M = A.pop,
            I = A.push,
            z = A.push,
            L = A.slice,
            D = function(e, n) {
                for (var t = 0, a = e.length; a > t; t++)
                    if (e[t] === n) return t;
                return -1
            },
            j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            B = "[\\x20\\t\\r\\n\\f]",
            P = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            H = "\\[" + B + "*(" + P + ")(?:" + B + "*([*^$|!~]?=)" + B + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + B + "*\\]",
            O = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
            R = new RegExp(B + "+", "g"),
            $ = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
            F = new RegExp("^" + B + "*," + B + "*"),
            K = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
            W = new RegExp("=" + B + "*([^\\]'\"]*?)" + B + "*\\]", "g"),
            q = new RegExp(O),
            J = new RegExp("^" + P + "$"),
            V = {
                ID: new RegExp("^#(" + P + ")"),
                CLASS: new RegExp("^\\.(" + P + ")"),
                TAG: new RegExp("^(" + P + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + j + ")$", "i"),
                needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
            },
            U = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            X = /[+~]/,
            ee = /'|\\/g,
            ne = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
            te = function(e, n, t) {
                var a = "0x" + n - 65536;
                return a != a || t ? n : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
            },
            ae = function() {
                v()
            };
        try {
            z.apply(A = L.call(y.childNodes), y.childNodes), A[y.childNodes.length].nodeType
        } catch (e) {
            z = {
                apply: A.length ? function(e, n) {
                    I.apply(e, L.call(n))
                } : function(e, n) {
                    for (var t = e.length, a = 0; e[t++] = n[a++];);
                    e.length = t - 1
                }
            }
        }

        function ie(e, n, a, i) {
            var r, s, u, l, c, h, S, g, b = n && n.ownerDocument,
                w = n ? n.nodeType : 9;
            if (a = a || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return a;
            if (!i && ((n ? n.ownerDocument || n : y) !== d && v(n), n = n || d, p)) {
                if (11 !== w && (h = Q.exec(e)))
                    if (r = h[1]) {
                        if (9 === w) {
                            if (!(u = n.getElementById(r))) return a;
                            if (u.id === r) return a.push(u), a
                        } else if (b && (u = b.getElementById(r)) && N(n, u) && u.id === r) return a.push(u), a
                    } else {
                        if (h[2]) return z.apply(a, n.getElementsByTagName(e)), a;
                        if ((r = h[3]) && t.getElementsByClassName && n.getElementsByClassName) return z.apply(a, n.getElementsByClassName(r)), a
                    }
                if (t.qsa && !C[e + " "] && (!f || !f.test(e))) {
                    if (1 !== w) b = n, g = e;
                    else if ("object" !== n.nodeName.toLowerCase()) {
                        for ((l = n.getAttribute("id")) ? l = l.replace(ee, "\\$&") : n.setAttribute("id", l = G), s = (S = o(e)).length, c = J.test(l) ? "#" + l : "[id='" + l + "']"; s--;) S[s] = c + " " + pe(S[s]);
                        g = S.join(","), b = X.test(e) && de(n.parentNode) || n
                    }
                    if (g) try {
                        return z.apply(a, b.querySelectorAll(g)), a
                    } catch (e) {} finally {
                        l === G && n.removeAttribute("id")
                    }
                }
            }
            return m(e.replace($, "$1"), n, a, i)
        }

        function re() {
            var e = [];
            return function n(t, i) {
                return e.push(t + " ") > a.cacheLength && delete n[e.shift()], n[t + " "] = i
            }
        }

        function oe(e) {
            return e[G] = !0, e
        }

        function se(e) {
            var n = d.createElement("div");
            try {
                return !!e(n)
            } catch (e) {
                return !1
            } finally {
                n.parentNode && n.parentNode.removeChild(n), n = null
            }
        }

        function me(e, n) {
            for (var t = e.split("|"), i = t.length; i--;) a.attrHandle[t[i]] = n
        }

        function ue(e, n) {
            var t = n && e,
                a = t && 1 === e.nodeType && 1 === n.nodeType && (~n.sourceIndex || T) - (~e.sourceIndex || T);
            if (a) return a;
            if (t)
                for (; t = t.nextSibling;)
                    if (t === n) return -1;
            return e ? 1 : -1
        }

        function le(e) {
            return function(n) {
                return "input" === n.nodeName.toLowerCase() && n.type === e
            }
        }

        function ce(e) {
            return function(n) {
                var t = n.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && n.type === e
            }
        }

        function ve(e) {
            return oe(function(n) {
                return n = +n, oe(function(t, a) {
                    for (var i, r = e([], t.length, n), o = r.length; o--;) t[i = r[o]] && (t[i] = !(a[i] = t[i]))
                })
            })
        }

        function de(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (n in t = ie.support = {}, r = ie.isXML = function(e) {
                var n = e && (e.ownerDocument || e).documentElement;
                return !!n && "HTML" !== n.nodeName
            }, v = ie.setDocument = function(e) {
                var n, i, o = e ? e.ownerDocument || e : y;
                return o !== d && 9 === o.nodeType && o.documentElement ? (h = (d = o).documentElement, p = !r(d), (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ae, !1) : i.attachEvent && i.attachEvent("onunload", ae)), t.attributes = se(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), t.getElementsByTagName = se(function(e) {
                    return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
                }), t.getElementsByClassName = Y.test(d.getElementsByClassName), t.getById = se(function(e) {
                    return h.appendChild(e).id = G, !d.getElementsByName || !d.getElementsByName(G).length
                }), t.getById ? (a.find.ID = function(e, n) {
                    if (void 0 !== n.getElementById && p) {
                        var t = n.getElementById(e);
                        return t ? [t] : []
                    }
                }, a.filter.ID = function(e) {
                    var n = e.replace(ne, te);
                    return function(e) {
                        return e.getAttribute("id") === n
                    }
                }) : (delete a.find.ID, a.filter.ID = function(e) {
                    var n = e.replace(ne, te);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }), a.find.TAG = t.getElementsByTagName ? function(e, n) {
                    return void 0 !== n.getElementsByTagName ? n.getElementsByTagName(e) : t.qsa ? n.querySelectorAll(e) : void 0
                } : function(e, n) {
                    var t, a = [],
                        i = 0,
                        r = n.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; t = r[i++];) 1 === t.nodeType && a.push(t);
                        return a
                    }
                    return r
                }, a.find.CLASS = t.getElementsByClassName && function(e, n) {
                    return void 0 !== n.getElementsByClassName && p ? n.getElementsByClassName(e) : void 0
                }, S = [], f = [], (t.qsa = Y.test(d.querySelectorAll)) && (se(function(e) {
                    h.appendChild(e).innerHTML = "<a id='" + G + "'></a><select id='" + G + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && f.push("[*^$]=" + B + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || f.push("\\[" + B + "*(?:value|" + j + ")"), e.querySelectorAll("[id~=" + G + "-]").length || f.push("~="), e.querySelectorAll(":checked").length || f.push(":checked"), e.querySelectorAll("a#" + G + "+*").length || f.push(".#.+[+~]")
                }), se(function(e) {
                    var n = d.createElement("input");
                    n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && f.push("name" + B + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || f.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), f.push(",.*:")
                })), (t.matchesSelector = Y.test(g = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && se(function(e) {
                    t.disconnectedMatch = g.call(e, "div"), g.call(e, "[s!='']:x"), S.push("!=", O)
                }), f = f.length && new RegExp(f.join("|")), S = S.length && new RegExp(S.join("|")), n = Y.test(h.compareDocumentPosition), N = n || Y.test(h.contains) ? function(e, n) {
                    var t = 9 === e.nodeType ? e.documentElement : e,
                        a = n && n.parentNode;
                    return e === a || !(!a || 1 !== a.nodeType || !(t.contains ? t.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a)))
                } : function(e, n) {
                    if (n)
                        for (; n = n.parentNode;)
                            if (n === e) return !0;
                    return !1
                }, _ = n ? function(e, n) {
                    if (e === n) return c = !0, 0;
                    var a = !e.compareDocumentPosition - !n.compareDocumentPosition;
                    return a || (1 & (a = (e.ownerDocument || e) === (n.ownerDocument || n) ? e.compareDocumentPosition(n) : 1) || !t.sortDetached && n.compareDocumentPosition(e) === a ? e === d || e.ownerDocument === y && N(y, e) ? -1 : n === d || n.ownerDocument === y && N(y, n) ? 1 : l ? D(l, e) - D(l, n) : 0 : 4 & a ? -1 : 1)
                } : function(e, n) {
                    if (e === n) return c = !0, 0;
                    var t, a = 0,
                        i = e.parentNode,
                        r = n.parentNode,
                        o = [e],
                        s = [n];
                    if (!i || !r) return e === d ? -1 : n === d ? 1 : i ? -1 : r ? 1 : l ? D(l, e) - D(l, n) : 0;
                    if (i === r) return ue(e, n);
                    for (t = e; t = t.parentNode;) o.unshift(t);
                    for (t = n; t = t.parentNode;) s.unshift(t);
                    for (; o[a] === s[a];) a++;
                    return a ? ue(o[a], s[a]) : o[a] === y ? -1 : s[a] === y ? 1 : 0
                }, d) : d
            }, ie.matches = function(e, n) {
                return ie(e, null, null, n)
            }, ie.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== d && v(e), n = n.replace(W, "='$1']"), t.matchesSelector && p && !C[n + " "] && (!S || !S.test(n)) && (!f || !f.test(n))) try {
                    var a = g.call(e, n);
                    if (a || t.disconnectedMatch || e.document && 11 !== e.document.nodeType) return a
                } catch (e) {}
                return ie(n, d, null, [e]).length > 0
            }, ie.contains = function(e, n) {
                return (e.ownerDocument || e) !== d && v(e), N(e, n)
            }, ie.attr = function(e, n) {
                (e.ownerDocument || e) !== d && v(e);
                var i = a.attrHandle[n.toLowerCase()],
                    r = i && E.call(a.attrHandle, n.toLowerCase()) ? i(e, n, !p) : void 0;
                return void 0 !== r ? r : t.attributes || !p ? e.getAttribute(n) : (r = e.getAttributeNode(n)) && r.specified ? r.value : null
            }, ie.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ie.uniqueSort = function(e) {
                var n, a = [],
                    i = 0,
                    r = 0;
                if (c = !t.detectDuplicates, l = !t.sortStable && e.slice(0), e.sort(_), c) {
                    for (; n = e[r++];) n === e[r] && (i = a.push(r));
                    for (; i--;) e.splice(a[i], 1)
                }
                return l = null, e
            }, i = ie.getText = function(e) {
                var n, t = "",
                    a = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) t += i(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; n = e[a++];) t += i(n);
                return t
            }, (a = ie.selectors = {
                cacheLength: 50,
                createPseudo: oe,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ne, te), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var n, t = !e[6] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : t && q.test(t) && (n = o(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (e[0] = e[0].slice(0, n), e[2] = t.slice(0, n)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var n = e.replace(ne, te).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === n
                        }
                    },
                    CLASS: function(e) {
                        var n = k[e + " "];
                        return n || (n = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) && k(e, function(e) {
                            return n.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, t) {
                        return function(a) {
                            var i = ie.attr(a, e);
                            return null == i ? "!=" === n : !n || (i += "", "=" === n ? i === t : "!=" === n ? i !== t : "^=" === n ? t && 0 === i.indexOf(t) : "*=" === n ? t && i.indexOf(t) > -1 : "$=" === n ? t && i.slice(-t.length) === t : "~=" === n ? (" " + i.replace(R, " ") + " ").indexOf(t) > -1 : "|=" === n && (i === t || i.slice(0, t.length + 1) === t + "-"))
                        }
                    },
                    CHILD: function(e, n, t, a, i) {
                        var r = "nth" !== e.slice(0, 3),
                            o = "last" !== e.slice(-4),
                            s = "of-type" === n;
                        return 1 === a && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(n, t, m) {
                            var u, l, c, v, d, h, p = r !== o ? "nextSibling" : "previousSibling",
                                f = n.parentNode,
                                S = s && n.nodeName.toLowerCase(),
                                g = !m && !s,
                                N = !1;
                            if (f) {
                                if (r) {
                                    for (; p;) {
                                        for (v = n; v = v[p];)
                                            if (s ? v.nodeName.toLowerCase() === S : 1 === v.nodeType) return !1;
                                        h = p = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [o ? f.firstChild : f.lastChild], o && g) {
                                    for (N = (d = (u = (l = (c = (v = f)[G] || (v[G] = {}))[v.uniqueID] || (c[v.uniqueID] = {}))[e] || [])[0] === b && u[1]) && u[2], v = d && f.childNodes[d]; v = ++d && v && v[p] || (N = d = 0) || h.pop();)
                                        if (1 === v.nodeType && ++N && v === n) {
                                            l[e] = [b, d, N];
                                            break
                                        }
                                } else if (g && (N = d = (u = (l = (c = (v = n)[G] || (v[G] = {}))[v.uniqueID] || (c[v.uniqueID] = {}))[e] || [])[0] === b && u[1]), !1 === N)
                                    for (;
                                        (v = ++d && v && v[p] || (N = d = 0) || h.pop()) && ((s ? v.nodeName.toLowerCase() !== S : 1 !== v.nodeType) || !++N || (g && ((l = (c = v[G] || (v[G] = {}))[v.uniqueID] || (c[v.uniqueID] = {}))[e] = [b, N]), v !== n)););
                                return (N -= i) === a || N % a == 0 && N / a >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var t, i = a.pseudos[e] || a.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                        return i[G] ? i(n) : i.length > 1 ? (t = [e, e, "", n], a.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, t) {
                            for (var a, r = i(e, n), o = r.length; o--;) e[a = D(e, r[o])] = !(t[a] = r[o])
                        }) : function(e) {
                            return i(e, 0, t)
                        }) : i
                    }
                },
                pseudos: {
                    not: oe(function(e) {
                        var n = [],
                            t = [],
                            a = s(e.replace($, "$1"));
                        return a[G] ? oe(function(e, n, t, i) {
                            for (var r, o = a(e, null, i, []), s = e.length; s--;)(r = o[s]) && (e[s] = !(n[s] = r))
                        }) : function(e, i, r) {
                            return n[0] = e, a(n, null, r, t), n[0] = null, !t.pop()
                        }
                    }),
                    has: oe(function(e) {
                        return function(n) {
                            return ie(e, n).length > 0
                        }
                    }),
                    contains: oe(function(e) {
                        return e = e.replace(ne, te),
                            function(n) {
                                return (n.textContent || n.innerText || i(n)).indexOf(e) > -1
                            }
                    }),
                    lang: oe(function(e) {
                        return J.test(e || "") || ie.error("unsupported lang: " + e), e = e.replace(ne, te).toLowerCase(),
                            function(n) {
                                var t;
                                do {
                                    if (t = p ? n.lang : n.getAttribute("xml:lang") || n.getAttribute("lang")) return (t = t.toLowerCase()) === e || 0 === t.indexOf(e + "-")
                                } while ((n = n.parentNode) && 1 === n.nodeType);
                                return !1
                            }
                    }),
                    target: function(n) {
                        var t = e.location && e.location.hash;
                        return t && t.slice(1) === n.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var n = e.nodeName.toLowerCase();
                        return "input" === n && !!e.checked || "option" === n && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !a.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Z.test(e.nodeName)
                    },
                    input: function(e) {
                        return U.test(e.nodeName)
                    },
                    button: function(e) {
                        var n = e.nodeName.toLowerCase();
                        return "input" === n && "button" === e.type || "button" === n
                    },
                    text: function(e) {
                        var n;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (n = e.getAttribute("type")) || "text" === n.toLowerCase())
                    },
                    first: ve(function() {
                        return [0]
                    }),
                    last: ve(function(e, n) {
                        return [n - 1]
                    }),
                    eq: ve(function(e, n, t) {
                        return [0 > t ? t + n : t]
                    }),
                    even: ve(function(e, n) {
                        for (var t = 0; n > t; t += 2) e.push(t);
                        return e
                    }),
                    odd: ve(function(e, n) {
                        for (var t = 1; n > t; t += 2) e.push(t);
                        return e
                    }),
                    lt: ve(function(e, n, t) {
                        for (var a = 0 > t ? t + n : t; --a >= 0;) e.push(a);
                        return e
                    }),
                    gt: ve(function(e, n, t) {
                        for (var a = 0 > t ? t + n : t; ++a < n;) e.push(a);
                        return e
                    })
                }
            }).pseudos.nth = a.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) a.pseudos[n] = le(n);
        for (n in {
                submit: !0,
                reset: !0
            }) a.pseudos[n] = ce(n);

        function he() {}

        function pe(e) {
            for (var n = 0, t = e.length, a = ""; t > n; n++) a += e[n].value;
            return a
        }

        function fe(e, n, t) {
            var a = n.dir,
                i = t && "parentNode" === a,
                r = w++;
            return n.first ? function(n, t, r) {
                for (; n = n[a];)
                    if (1 === n.nodeType || i) return e(n, t, r)
            } : function(n, t, o) {
                var s, m, u, l = [b, r];
                if (o) {
                    for (; n = n[a];)
                        if ((1 === n.nodeType || i) && e(n, t, o)) return !0
                } else
                    for (; n = n[a];)
                        if (1 === n.nodeType || i) {
                            if ((s = (m = (u = n[G] || (n[G] = {}))[n.uniqueID] || (u[n.uniqueID] = {}))[a]) && s[0] === b && s[1] === r) return l[2] = s[2];
                            if (m[a] = l, l[2] = e(n, t, o)) return !0
                        }
            }
        }

        function Se(e) {
            return e.length > 1 ? function(n, t, a) {
                for (var i = e.length; i--;)
                    if (!e[i](n, t, a)) return !1;
                return !0
            } : e[0]
        }

        function ge(e, n, t, a, i) {
            for (var r, o = [], s = 0, m = e.length, u = null != n; m > s; s++)(r = e[s]) && (t && !t(r, a, i) || (o.push(r), u && n.push(s)));
            return o
        }

        function Ne(e, n, t, a, i, r) {
            return a && !a[G] && (a = Ne(a)), i && !i[G] && (i = Ne(i, r)), oe(function(r, o, s, m) {
                var u, l, c, v = [],
                    d = [],
                    h = o.length,
                    p = r || function(e, n, t) {
                        for (var a = 0, i = n.length; i > a; a++) ie(e, n[a], t);
                        return t
                    }(n || "*", s.nodeType ? [s] : s, []),
                    f = !e || !r && n ? p : ge(p, v, e, s, m),
                    S = t ? i || (r ? e : h || a) ? [] : o : f;
                if (t && t(f, S, s, m), a)
                    for (u = ge(S, d), a(u, [], s, m), l = u.length; l--;)(c = u[l]) && (S[d[l]] = !(f[d[l]] = c));
                if (r) {
                    if (i || e) {
                        if (i) {
                            for (u = [], l = S.length; l--;)(c = S[l]) && u.push(f[l] = c);
                            i(null, S = [], u, m)
                        }
                        for (l = S.length; l--;)(c = S[l]) && (u = i ? D(r, c) : v[l]) > -1 && (r[u] = !(o[u] = c))
                    }
                } else S = ge(S === o ? S.splice(h, S.length) : S), i ? i(null, o, S, m) : z.apply(o, S)
            })
        }

        function Ge(e) {
            for (var n, t, i, r = e.length, o = a.relative[e[0].type], s = o || a.relative[" "], m = o ? 1 : 0, l = fe(function(e) {
                    return e === n
                }, s, !0), c = fe(function(e) {
                    return D(n, e) > -1
                }, s, !0), v = [function(e, t, a) {
                    var i = !o && (a || t !== u) || ((n = t).nodeType ? l(e, t, a) : c(e, t, a));
                    return n = null, i
                }]; r > m; m++)
                if (t = a.relative[e[m].type]) v = [fe(Se(v), t)];
                else {
                    if ((t = a.filter[e[m].type].apply(null, e[m].matches))[G]) {
                        for (i = ++m; r > i && !a.relative[e[i].type]; i++);
                        return Ne(m > 1 && Se(v), m > 1 && pe(e.slice(0, m - 1).concat({
                            value: " " === e[m - 2].type ? "*" : ""
                        })).replace($, "$1"), t, i > m && Ge(e.slice(m, i)), r > i && Ge(e = e.slice(i)), r > i && pe(e))
                    }
                    v.push(t)
                }
            return Se(v)
        }

        function ye(e, n) {
            var t = n.length > 0,
                i = e.length > 0,
                r = function(r, o, s, m, l) {
                    var c, h, f, S = 0,
                        g = "0",
                        N = r && [],
                        G = [],
                        y = u,
                        w = r || i && a.find.TAG("*", l),
                        k = b += null == y ? 1 : Math.random() || .1,
                        x = w.length;
                    for (l && (u = o === d || o || l); g !== x && null != (c = w[g]); g++) {
                        if (i && c) {
                            for (h = 0, o || c.ownerDocument === d || (v(c), s = !p); f = e[h++];)
                                if (f(c, o || d, s)) {
                                    m.push(c);
                                    break
                                }
                            l && (b = k)
                        }
                        t && ((c = !f && c) && S--, r && N.push(c))
                    }
                    if (S += g, t && g !== S) {
                        for (h = 0; f = n[h++];) f(N, G, o, s);
                        if (r) {
                            if (S > 0)
                                for (; g--;) N[g] || G[g] || (G[g] = M.call(m));
                            G = ge(G)
                        }
                        z.apply(m, G), l && !r && G.length > 0 && S + n.length > 1 && ie.uniqueSort(m)
                    }
                    return l && (b = k, u = y), N
                };
            return t ? oe(r) : r
        }
        return he.prototype = a.filters = a.pseudos, a.setFilters = new he, o = ie.tokenize = function(e, n) {
            var t, i, r, o, s, m, u, l = x[e + " "];
            if (l) return n ? 0 : l.slice(0);
            for (s = e, m = [], u = a.preFilter; s;) {
                for (o in t && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), m.push(r = [])), t = !1, (i = K.exec(s)) && (t = i.shift(), r.push({
                        value: t,
                        type: i[0].replace($, " ")
                    }), s = s.slice(t.length)), a.filter) !(i = V[o].exec(s)) || u[o] && !(i = u[o](i)) || (t = i.shift(), r.push({
                    value: t,
                    type: o,
                    matches: i
                }), s = s.slice(t.length));
                if (!t) break
            }
            return n ? s.length : s ? ie.error(e) : x(e, m).slice(0)
        }, s = ie.compile = function(e, n) {
            var t, a = [],
                i = [],
                r = C[e + " "];
            if (!r) {
                for (n || (n = o(e)), t = n.length; t--;)(r = Ge(n[t]))[G] ? a.push(r) : i.push(r);
                (r = C(e, ye(i, a))).selector = e
            }
            return r
        }, m = ie.select = function(e, n, i, r) {
            var m, u, l, c, v, d = "function" == typeof e && e,
                h = !r && o(e = d.selector || e);
            if (i = i || [], 1 === h.length) {
                if ((u = h[0] = h[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && t.getById && 9 === n.nodeType && p && a.relative[u[1].type]) {
                    if (!(n = (a.find.ID(l.matches[0].replace(ne, te), n) || [])[0])) return i;
                    d && (n = n.parentNode), e = e.slice(u.shift().value.length)
                }
                for (m = V.needsContext.test(e) ? 0 : u.length; m-- && (l = u[m], !a.relative[c = l.type]);)
                    if ((v = a.find[c]) && (r = v(l.matches[0].replace(ne, te), X.test(u[0].type) && de(n.parentNode) || n))) {
                        if (u.splice(m, 1), !(e = r.length && pe(u))) return z.apply(i, r), i;
                        break
                    }
            }
            return (d || s(e, h))(r, n, !p, i, !n || X.test(e) && de(n.parentNode) || n), i
        }, t.sortStable = G.split("").sort(_).join("") === G, t.detectDuplicates = !!c, v(), t.sortDetached = se(function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("div"))
        }), se(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || me("type|href|height|width", function(e, n, t) {
            return t ? void 0 : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        }), t.attributes && se(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || me("value", function(e, n, t) {
            return t || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), se(function(e) {
            return null == e.getAttribute("disabled")
        }) || me(j, function(e, n, t) {
            var a;
            return t ? void 0 : !0 === e[n] ? n.toLowerCase() : (a = e.getAttributeNode(n)) && a.specified ? a.value : null
        }), ie
    }(e);
    d.find = N, d.expr = N.selectors, d.expr[":"] = d.expr.pseudos, d.uniqueSort = d.unique = N.uniqueSort, d.text = N.getText, d.isXMLDoc = N.isXML, d.contains = N.contains;
    var G = function(e, n, t) {
            for (var a = [], i = void 0 !== t;
                (e = e[n]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && d(e).is(t)) break;
                    a.push(e)
                }
            return a
        },
        y = function(e, n) {
            for (var t = []; e; e = e.nextSibling) 1 === e.nodeType && e !== n && t.push(e);
            return t
        },
        b = d.expr.match.needsContext,
        w = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        k = /^.[^:#\[\.,]*$/;

    function x(e, n, t) {
        if (d.isFunction(n)) return d.grep(e, function(e, a) {
            return !!n.call(e, a, e) !== t
        });
        if (n.nodeType) return d.grep(e, function(e) {
            return e === n !== t
        });
        if ("string" == typeof n) {
            if (k.test(n)) return d.filter(n, e, t);
            n = d.filter(n, e)
        }
        return d.grep(e, function(e) {
            return d.inArray(e, n) > -1 !== t
        })
    }
    d.filter = function(e, n, t) {
        var a = n[0];
        return t && (e = ":not(" + e + ")"), 1 === n.length && 1 === a.nodeType ? d.find.matchesSelector(a, e) ? [a] : [] : d.find.matches(e, d.grep(n, function(e) {
            return 1 === e.nodeType
        }))
    }, d.fn.extend({
        find: function(e) {
            var n, t = [],
                a = this,
                i = a.length;
            if ("string" != typeof e) return this.pushStack(d(e).filter(function() {
                for (n = 0; i > n; n++)
                    if (d.contains(a[n], this)) return !0
            }));
            for (n = 0; i > n; n++) d.find(e, a[n], t);
            return (t = this.pushStack(i > 1 ? d.unique(t) : t)).selector = this.selector ? this.selector + " " + e : e, t
        },
        filter: function(e) {
            return this.pushStack(x(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(x(this, e || [], !0))
        },
        is: function(e) {
            return !!x(this, "string" == typeof e && b.test(e) ? d(e) : e || [], !1).length
        }
    });
    var C, _ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (d.fn.init = function(e, n, t) {
        var i, r;
        if (!e) return this;
        if (t = t || C, "string" == typeof e) {
            if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : _.exec(e)) || !i[1] && n) return !n || n.jquery ? (n || t).find(e) : this.constructor(n).find(e);
            if (i[1]) {
                if (n = n instanceof d ? n[0] : n, d.merge(this, d.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), w.test(i[1]) && d.isPlainObject(n))
                    for (i in n) d.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                return this
            }
            if ((r = a.getElementById(i[2])) && r.parentNode) {
                if (r.id !== i[2]) return C.find(e);
                this.length = 1, this[0] = r
            }
            return this.context = a, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : d.isFunction(e) ? void 0 !== t.ready ? t.ready(e) : e(d) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), d.makeArray(e, this))
    }).prototype = d.fn, C = d(a);
    var T = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function A(e, n) {
        do {
            e = e[n]
        } while (e && 1 !== e.nodeType);
        return e
    }
    d.fn.extend({
        has: function(e) {
            var n, t = d(e, this),
                a = t.length;
            return this.filter(function() {
                for (n = 0; a > n; n++)
                    if (d.contains(this, t[n])) return !0
            })
        },
        closest: function(e, n) {
            for (var t, a = 0, i = this.length, r = [], o = b.test(e) || "string" != typeof e ? d(e, n || this.context) : 0; i > a; a++)
                for (t = this[a]; t && t !== n; t = t.parentNode)
                    if (t.nodeType < 11 && (o ? o.index(t) > -1 : 1 === t.nodeType && d.find.matchesSelector(t, e))) {
                        r.push(t);
                        break
                    }
            return this.pushStack(r.length > 1 ? d.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? d.inArray(this[0], d(e)) : d.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, n) {
            return this.pushStack(d.uniqueSort(d.merge(this.get(), d(e, n))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), d.each({
        parent: function(e) {
            var n = e.parentNode;
            return n && 11 !== n.nodeType ? n : null
        },
        parents: function(e) {
            return G(e, "parentNode")
        },
        parentsUntil: function(e, n, t) {
            return G(e, "parentNode", t)
        },
        next: function(e) {
            return A(e, "nextSibling")
        },
        prev: function(e) {
            return A(e, "previousSibling")
        },
        nextAll: function(e) {
            return G(e, "nextSibling")
        },
        prevAll: function(e) {
            return G(e, "previousSibling")
        },
        nextUntil: function(e, n, t) {
            return G(e, "nextSibling", t)
        },
        prevUntil: function(e, n, t) {
            return G(e, "previousSibling", t)
        },
        siblings: function(e) {
            return y((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return y(e.firstChild)
        },
        contents: function(e) {
            return d.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : d.merge([], e.childNodes)
        }
    }, function(e, n) {
        d.fn[e] = function(t, a) {
            var i = d.map(this, n, t);
            return "Until" !== e.slice(-5) && (a = t), a && "string" == typeof a && (i = d.filter(a, i)), this.length > 1 && (E[e] || (i = d.uniqueSort(i)), T.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var M, I, z = /\S+/g;

    function L() {
        a.addEventListener ? (a.removeEventListener("DOMContentLoaded", D), e.removeEventListener("load", D)) : (a.detachEvent("onreadystatechange", D), e.detachEvent("onload", D))
    }

    function D() {
        (a.addEventListener || "load" === e.event.type || "complete" === a.readyState) && (L(), d.ready())
    }
    for (I in d.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) {
                var n = {};
                return d.each(e.match(z) || [], function(e, t) {
                    n[t] = !0
                }), n
            }(e) : d.extend({}, e);
            var n, t, a, i, r = [],
                o = [],
                s = -1,
                m = function() {
                    for (i = e.once, a = n = !0; o.length; s = -1)
                        for (t = o.shift(); ++s < r.length;) !1 === r[s].apply(t[0], t[1]) && e.stopOnFalse && (s = r.length, t = !1);
                    e.memory || (t = !1), n = !1, i && (r = t ? [] : "")
                },
                u = {
                    add: function() {
                        return r && (t && !n && (s = r.length - 1, o.push(t)), function n(t) {
                            d.each(t, function(t, a) {
                                d.isFunction(a) ? e.unique && u.has(a) || r.push(a) : a && a.length && "string" !== d.type(a) && n(a)
                            })
                        }(arguments), t && !n && m()), this
                    },
                    remove: function() {
                        return d.each(arguments, function(e, n) {
                            for (var t;
                                (t = d.inArray(n, r, t)) > -1;) r.splice(t, 1), s >= t && s--
                        }), this
                    },
                    has: function(e) {
                        return e ? d.inArray(e, r) > -1 : r.length > 0
                    },
                    empty: function() {
                        return r && (r = []), this
                    },
                    disable: function() {
                        return i = o = [], r = t = "", this
                    },
                    disabled: function() {
                        return !r
                    },
                    lock: function() {
                        return i = !0, t || u.disable(), this
                    },
                    locked: function() {
                        return !!i
                    },
                    fireWith: function(e, t) {
                        return i || (t = [e, (t = t || []).slice ? t.slice() : t], o.push(t), n || m()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!a
                    }
                };
            return u
        }, d.extend({
            Deferred: function(e) {
                var n = [
                        ["resolve", "done", d.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", d.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", d.Callbacks("memory")]
                    ],
                    t = "pending",
                    a = {
                        state: function() {
                            return t
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return d.Deferred(function(t) {
                                d.each(n, function(n, r) {
                                    var o = d.isFunction(e[n]) && e[n];
                                    i[r[1]](function() {
                                        var e = o && o.apply(this, arguments);
                                        e && d.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this === a ? t.promise() : this, o ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? d.extend(e, a) : a
                        }
                    },
                    i = {};
                return a.pipe = a.then, d.each(n, function(e, r) {
                    var o = r[2],
                        s = r[3];
                    a[r[1]] = o.add, s && o.add(function() {
                        t = s
                    }, n[1 ^ e][2].disable, n[2][2].lock), i[r[0]] = function() {
                        return i[r[0] + "With"](this === i ? a : this, arguments), this
                    }, i[r[0] + "With"] = o.fireWith
                }), a.promise(i), e && e.call(i, i), i
            },
            when: function(e) {
                var n, t, a, r = 0,
                    o = i.call(arguments),
                    s = o.length,
                    m = 1 !== s || e && d.isFunction(e.promise) ? s : 0,
                    u = 1 === m ? e : d.Deferred(),
                    l = function(e, t, a) {
                        return function(r) {
                            t[e] = this, a[e] = arguments.length > 1 ? i.call(arguments) : r, a === n ? u.notifyWith(t, a) : --m || u.resolveWith(t, a)
                        }
                    };
                if (s > 1)
                    for (n = new Array(s), t = new Array(s), a = new Array(s); s > r; r++) o[r] && d.isFunction(o[r].promise) ? o[r].promise().progress(l(r, t, n)).done(l(r, a, o)).fail(u.reject) : --m;
                return m || u.resolveWith(a, o), u.promise()
            }
        }), d.fn.ready = function(e) {
            return d.ready.promise().done(e), this
        }, d.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? d.readyWait++ : d.ready(!0)
            },
            ready: function(e) {
                (!0 === e ? --d.readyWait : d.isReady) || (d.isReady = !0, !0 !== e && --d.readyWait > 0 || (M.resolveWith(a, [d]), d.fn.triggerHandler && (d(a).triggerHandler("ready"), d(a).off("ready"))))
            }
        }), d.ready.promise = function(n) {
            if (!M)
                if (M = d.Deferred(), "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll) e.setTimeout(d.ready);
                else if (a.addEventListener) a.addEventListener("DOMContentLoaded", D), e.addEventListener("load", D);
            else {
                a.attachEvent("onreadystatechange", D), e.attachEvent("onload", D);
                var t = !1;
                try {
                    t = null == e.frameElement && a.documentElement
                } catch (e) {}
                t && t.doScroll && function n() {
                    if (!d.isReady) {
                        try {
                            t.doScroll("left")
                        } catch (t) {
                            return e.setTimeout(n, 50)
                        }
                        L(), d.ready()
                    }
                }()
            }
            return M.promise(n)
        }, d.ready.promise(), d(c)) break;
    c.ownFirst = "0" === I, c.inlineBlockNeedsLayout = !1, d(function() {
            var e, n, t, i;
            (t = a.getElementsByTagName("body")[0]) && t.style && (n = a.createElement("div"), (i = a.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(i).appendChild(n), void 0 !== n.style.zoom && (n.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", c.inlineBlockNeedsLayout = e = 3 === n.offsetWidth, e && (t.style.zoom = 1)), t.removeChild(i))
        }),
        function() {
            var e = a.createElement("div");
            c.deleteExpando = !0;
            try {
                delete e.test
            } catch (e) {
                c.deleteExpando = !1
            }
            e = null
        }();
    var j = function(e) {
            var n = d.noData[(e.nodeName + " ").toLowerCase()],
                t = +e.nodeType || 1;
            return (1 === t || 9 === t) && (!n || !0 !== n && e.getAttribute("classid") === n)
        },
        B = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        P = /([A-Z])/g;

    function H(e, n, t) {
        if (void 0 === t && 1 === e.nodeType) {
            var a = "data-" + n.replace(P, "-$1").toLowerCase();
            if ("string" == typeof(t = e.getAttribute(a))) {
                try {
                    t = "true" === t || "false" !== t && ("null" === t ? null : +t + "" === t ? +t : B.test(t) ? d.parseJSON(t) : t)
                } catch (e) {}
                d.data(e, n, t)
            } else t = void 0
        }
        return t
    }

    function O(e) {
        var n;
        for (n in e)
            if (("data" !== n || !d.isEmptyObject(e[n])) && "toJSON" !== n) return !1;
        return !0
    }

    function R(e, n, a, i) {
        if (j(e)) {
            var r, o, s = d.expando,
                m = e.nodeType,
                u = m ? d.cache : e,
                l = m ? e[s] : e[s] && s;
            if (l && u[l] && (i || u[l].data) || void 0 !== a || "string" != typeof n) return l || (l = m ? e[s] = t.pop() || d.guid++ : s), u[l] || (u[l] = m ? {} : {
                toJSON: d.noop
            }), "object" != typeof n && "function" != typeof n || (i ? u[l] = d.extend(u[l], n) : u[l].data = d.extend(u[l].data, n)), o = u[l], i || (o.data || (o.data = {}), o = o.data), void 0 !== a && (o[d.camelCase(n)] = a), "string" == typeof n ? null == (r = o[n]) && (r = o[d.camelCase(n)]) : r = o, r
        }
    }

    function $(e, n, t) {
        if (j(e)) {
            var a, i, r = e.nodeType,
                o = r ? d.cache : e,
                s = r ? e[d.expando] : d.expando;
            if (o[s]) {
                if (n && (a = t ? o[s] : o[s].data)) {
                    d.isArray(n) ? n = n.concat(d.map(n, d.camelCase)) : n in a ? n = [n] : n = (n = d.camelCase(n)) in a ? [n] : n.split(" "), i = n.length;
                    for (; i--;) delete a[n[i]];
                    if (t ? !O(a) : !d.isEmptyObject(a)) return
                }(t || (delete o[s].data, O(o[s]))) && (r ? d.cleanData([e], !0) : c.deleteExpando || o != o.window ? delete o[s] : o[s] = void 0)
            }
        }
    }
    d.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return !!(e = e.nodeType ? d.cache[e[d.expando]] : e[d.expando]) && !O(e)
            },
            data: function(e, n, t) {
                return R(e, n, t)
            },
            removeData: function(e, n) {
                return $(e, n)
            },
            _data: function(e, n, t) {
                return R(e, n, t, !0)
            },
            _removeData: function(e, n) {
                return $(e, n, !0)
            }
        }), d.fn.extend({
            data: function(e, n) {
                var t, a, i, r = this[0],
                    o = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (i = d.data(r), 1 === r.nodeType && !d._data(r, "parsedAttrs"))) {
                        for (t = o.length; t--;) o[t] && (0 === (a = o[t].name).indexOf("data-") && H(r, a = d.camelCase(a.slice(5)), i[a]));
                        d._data(r, "parsedAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() {
                    d.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    d.data(this, e, n)
                }) : r ? H(r, e, d.data(r, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    d.removeData(this, e)
                })
            }
        }), d.extend({
            queue: function(e, n, t) {
                var a;
                return e ? (n = (n || "fx") + "queue", a = d._data(e, n), t && (!a || d.isArray(t) ? a = d._data(e, n, d.makeArray(t)) : a.push(t)), a || []) : void 0
            },
            dequeue: function(e, n) {
                n = n || "fx";
                var t = d.queue(e, n),
                    a = t.length,
                    i = t.shift(),
                    r = d._queueHooks(e, n);
                "inprogress" === i && (i = t.shift(), a--), i && ("fx" === n && t.unshift("inprogress"), delete r.stop, i.call(e, function() {
                    d.dequeue(e, n)
                }, r)), !a && r && r.empty.fire()
            },
            _queueHooks: function(e, n) {
                var t = n + "queueHooks";
                return d._data(e, t) || d._data(e, t, {
                    empty: d.Callbacks("once memory").add(function() {
                        d._removeData(e, n + "queue"), d._removeData(e, t)
                    })
                })
            }
        }), d.fn.extend({
            queue: function(e, n) {
                var t = 2;
                return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? d.queue(this[0], e) : void 0 === n ? this : this.each(function() {
                    var t = d.queue(this, e, n);
                    d._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && d.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    d.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, n) {
                var t, a = 1,
                    i = d.Deferred(),
                    r = this,
                    o = this.length,
                    s = function() {
                        --a || i.resolveWith(r, [r])
                    };
                for ("string" != typeof e && (n = e, e = void 0), e = e || "fx"; o--;)(t = d._data(r[o], e + "queueHooks")) && t.empty && (a++, t.empty.add(s));
                return s(), i.promise(n)
            }
        }),
        function() {
            var e;
            c.shrinkWrapBlocks = function() {
                return null != e ? e : (e = !1, (t = a.getElementsByTagName("body")[0]) && t.style ? (n = a.createElement("div"), (i = a.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(i).appendChild(n), void 0 !== n.style.zoom && (n.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", n.appendChild(a.createElement("div")).style.width = "5px", e = 3 !== n.offsetWidth), t.removeChild(i), e) : void 0);
                var n, t, i
            }
        }();
    var F = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        K = new RegExp("^(?:([+-])=|)(" + F + ")([a-z%]*)$", "i"),
        W = ["Top", "Right", "Bottom", "Left"],
        q = function(e, n) {
            return e = n || e, "none" === d.css(e, "display") || !d.contains(e.ownerDocument, e)
        };

    function J(e, n, t, a) {
        var i, r = 1,
            o = 20,
            s = a ? function() {
                return a.cur()
            } : function() {
                return d.css(e, n, "")
            },
            m = s(),
            u = t && t[3] || (d.cssNumber[n] ? "" : "px"),
            l = (d.cssNumber[n] || "px" !== u && +m) && K.exec(d.css(e, n));
        if (l && l[3] !== u) {
            u = u || l[3], t = t || [], l = +m || 1;
            do {
                l /= r = r || ".5", d.style(e, n, l + u)
            } while (r !== (r = s() / m) && 1 !== r && --o)
        }
        return t && (l = +l || +m || 0, i = t[1] ? l + (t[1] + 1) * t[2] : +t[2], a && (a.unit = u, a.start = l, a.end = i)), i
    }
    var V = function(e, n, t, a, i, r, o) {
            var s = 0,
                m = e.length,
                u = null == t;
            if ("object" === d.type(t))
                for (s in i = !0, t) V(e, n, s, t[s], !0, r, o);
            else if (void 0 !== a && (i = !0, d.isFunction(a) || (o = !0), u && (o ? (n.call(e, a), n = null) : (u = n, n = function(e, n, t) {
                    return u.call(d(e), t)
                })), n))
                for (; m > s; s++) n(e[s], t, o ? a : a.call(e[s], s, n(e[s], t)));
            return i ? e : u ? n.call(e) : m ? n(e[0], t) : r
        },
        U = /^(?:checkbox|radio)$/i,
        Z = /<([\w:-]+)/,
        Y = /^$|\/(?:java|ecma)script/i,
        Q = /^\s+/,
        X = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ee(e) {
        var n = X.split("|"),
            t = e.createDocumentFragment();
        if (t.createElement)
            for (; n.length;) t.createElement(n.pop());
        return t
    }! function() {
        var e = a.createElement("div"),
            n = a.createDocumentFragment(),
            t = a.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c.leadingWhitespace = 3 === e.firstChild.nodeType, c.tbody = !e.getElementsByTagName("tbody").length, c.htmlSerialize = !!e.getElementsByTagName("link").length, c.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), c.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", c.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), (t = a.createElement("input")).setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), c.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, c.noCloneEvent = !!e.addEventListener, e[d.expando] = 1, c.attributes = !e.getAttribute(d.expando)
    }();
    var ne = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: c.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };

    function te(e, n) {
        var t, a, i = 0,
            r = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(n || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(n || "*") : void 0;
        if (!r)
            for (r = [], t = e.childNodes || e; null != (a = t[i]); i++) !n || d.nodeName(a, n) ? r.push(a) : d.merge(r, te(a, n));
        return void 0 === n || n && d.nodeName(e, n) ? d.merge([e], r) : r
    }

    function ae(e, n) {
        for (var t, a = 0; null != (t = e[a]); a++) d._data(t, "globalEval", !n || d._data(n[a], "globalEval"))
    }
    ne.optgroup = ne.option, ne.tbody = ne.tfoot = ne.colgroup = ne.caption = ne.thead, ne.th = ne.td;
    var ie = /<|&#?\w+;/,
        re = /<tbody/i;

    function oe(e) {
        U.test(e.type) && (e.defaultChecked = e.checked)
    }

    function se(e, n, t, a, i) {
        for (var r, o, s, m, u, l, v, h = e.length, p = ee(n), f = [], S = 0; h > S; S++)
            if ((o = e[S]) || 0 === o)
                if ("object" === d.type(o)) d.merge(f, o.nodeType ? [o] : o);
                else if (ie.test(o)) {
            for (m = m || p.appendChild(n.createElement("div")), u = (Z.exec(o) || ["", ""])[1].toLowerCase(), v = ne[u] || ne._default, m.innerHTML = v[1] + d.htmlPrefilter(o) + v[2], r = v[0]; r--;) m = m.lastChild;
            if (!c.leadingWhitespace && Q.test(o) && f.push(n.createTextNode(Q.exec(o)[0])), !c.tbody)
                for (r = (o = "table" !== u || re.test(o) ? "<table>" !== v[1] || re.test(o) ? 0 : m : m.firstChild) && o.childNodes.length; r--;) d.nodeName(l = o.childNodes[r], "tbody") && !l.childNodes.length && o.removeChild(l);
            for (d.merge(f, m.childNodes), m.textContent = ""; m.firstChild;) m.removeChild(m.firstChild);
            m = p.lastChild
        } else f.push(n.createTextNode(o));
        for (m && p.removeChild(m), c.appendChecked || d.grep(te(f, "input"), oe), S = 0; o = f[S++];)
            if (a && d.inArray(o, a) > -1) i && i.push(o);
            else if (s = d.contains(o.ownerDocument, o), m = te(p.appendChild(o), "script"), s && ae(m), t)
            for (r = 0; o = m[r++];) Y.test(o.type || "") && t.push(o);
        return m = null, p
    }! function() {
        var n, t, i = a.createElement("div");
        for (n in {
                submit: !0,
                change: !0,
                focusin: !0
            }) t = "on" + n, (c[n] = t in e) || (i.setAttribute(t, "t"), c[n] = !1 === i.attributes[t].expando);
        i = null
    }();
    var me = /^(?:input|select|textarea)$/i,
        ue = /^key/,
        le = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ce = /^(?:focusinfocus|focusoutblur)$/,
        ve = /^([^.]*)(?:\.(.+)|)/;

    function de() {
        return !0
    }

    function he() {
        return !1
    }

    function pe() {
        try {
            return a.activeElement
        } catch (e) {}
    }

    function fe(e, n, t, a, i, r) {
        var o, s;
        if ("object" == typeof n) {
            for (s in "string" != typeof t && (a = a || t, t = void 0), n) fe(e, s, t, a, n[s], r);
            return e
        }
        if (null == a && null == i ? (i = t, a = t = void 0) : null == i && ("string" == typeof t ? (i = a, a = void 0) : (i = a, a = t, t = void 0)), !1 === i) i = he;
        else if (!i) return e;
        return 1 === r && (o = i, (i = function(e) {
            return d().off(e), o.apply(this, arguments)
        }).guid = o.guid || (o.guid = d.guid++)), e.each(function() {
            d.event.add(this, n, i, a, t)
        })
    }
    d.event = {
        global: {},
        add: function(e, n, t, a, i) {
            var r, o, s, m, u, l, c, v, h, p, f, S = d._data(e);
            if (S) {
                for (t.handler && (t = (m = t).handler, i = m.selector), t.guid || (t.guid = d.guid++), (o = S.events) || (o = S.events = {}), (l = S.handle) || ((l = S.handle = function(e) {
                        return void 0 === d || e && d.event.triggered === e.type ? void 0 : d.event.dispatch.apply(l.elem, arguments)
                    }).elem = e), s = (n = (n || "").match(z) || [""]).length; s--;) h = f = (r = ve.exec(n[s]) || [])[1], p = (r[2] || "").split(".").sort(), h && (u = d.event.special[h] || {}, h = (i ? u.delegateType : u.bindType) || h, u = d.event.special[h] || {}, c = d.extend({
                    type: h,
                    origType: f,
                    data: a,
                    handler: t,
                    guid: t.guid,
                    selector: i,
                    needsContext: i && d.expr.match.needsContext.test(i),
                    namespace: p.join(".")
                }, m), (v = o[h]) || ((v = o[h] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, a, p, l) || (e.addEventListener ? e.addEventListener(h, l, !1) : e.attachEvent && e.attachEvent("on" + h, l))), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = t.guid)), i ? v.splice(v.delegateCount++, 0, c) : v.push(c), d.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, n, t, a, i) {
            var r, o, s, m, u, l, c, v, h, p, f, S = d.hasData(e) && d._data(e);
            if (S && (l = S.events)) {
                for (u = (n = (n || "").match(z) || [""]).length; u--;)
                    if (h = f = (s = ve.exec(n[u]) || [])[1], p = (s[2] || "").split(".").sort(), h) {
                        for (c = d.event.special[h] || {}, v = l[h = (a ? c.delegateType : c.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), m = r = v.length; r--;) o = v[r], !i && f !== o.origType || t && t.guid !== o.guid || s && !s.test(o.namespace) || a && a !== o.selector && ("**" !== a || !o.selector) || (v.splice(r, 1), o.selector && v.delegateCount--, c.remove && c.remove.call(e, o));
                        m && !v.length && (c.teardown && !1 !== c.teardown.call(e, p, S.handle) || d.removeEvent(e, h, S.handle), delete l[h])
                    } else
                        for (h in l) d.event.remove(e, h + n[u], t, a, !0);
                d.isEmptyObject(l) && (delete S.handle, d._removeData(e, "events"))
            }
        },
        trigger: function(n, t, i, r) {
            var o, s, m, u, c, v, h, p = [i || a],
                f = l.call(n, "type") ? n.type : n,
                S = l.call(n, "namespace") ? n.namespace.split(".") : [];
            if (m = v = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !ce.test(f + d.event.triggered) && (f.indexOf(".") > -1 && (S = f.split("."), f = S.shift(), S.sort()), s = f.indexOf(":") < 0 && "on" + f, (n = n[d.expando] ? n : new d.Event(f, "object" == typeof n && n)).isTrigger = r ? 2 : 3, n.namespace = S.join("."), n.rnamespace = n.namespace ? new RegExp("(^|\\.)" + S.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = void 0, n.target || (n.target = i), t = null == t ? [n] : d.makeArray(t, [n]), c = d.event.special[f] || {}, r || !c.trigger || !1 !== c.trigger.apply(i, t))) {
                if (!r && !c.noBubble && !d.isWindow(i)) {
                    for (u = c.delegateType || f, ce.test(u + f) || (m = m.parentNode); m; m = m.parentNode) p.push(m), v = m;
                    v === (i.ownerDocument || a) && p.push(v.defaultView || v.parentWindow || e)
                }
                for (h = 0;
                    (m = p[h++]) && !n.isPropagationStopped();) n.type = h > 1 ? u : c.bindType || f, (o = (d._data(m, "events") || {})[n.type] && d._data(m, "handle")) && o.apply(m, t), (o = s && m[s]) && o.apply && j(m) && (n.result = o.apply(m, t), !1 === n.result && n.preventDefault());
                if (n.type = f, !r && !n.isDefaultPrevented() && (!c._default || !1 === c._default.apply(p.pop(), t)) && j(i) && s && i[f] && !d.isWindow(i)) {
                    (v = i[s]) && (i[s] = null), d.event.triggered = f;
                    try {
                        i[f]()
                    } catch (e) {}
                    d.event.triggered = void 0, v && (i[s] = v)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = d.event.fix(e);
            var n, t, a, r, o, s = [],
                m = i.call(arguments),
                u = (d._data(this, "events") || {})[e.type] || [],
                l = d.event.special[e.type] || {};
            if (m[0] = e, e.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (s = d.event.handlers.call(this, e, u), n = 0;
                    (r = s[n++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, t = 0;
                        (o = r.handlers[t++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (a = ((d.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, m)) && !1 === (e.result = a) && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, n) {
            var t, a, i, r, o = [],
                s = n.delegateCount,
                m = e.target;
            if (s && m.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; m != this; m = m.parentNode || this)
                    if (1 === m.nodeType && (!0 !== m.disabled || "click" !== e.type)) {
                        for (a = [], t = 0; s > t; t++) void 0 === a[i = (r = n[t]).selector + " "] && (a[i] = r.needsContext ? d(i, this).index(m) > -1 : d.find(i, this, null, [m]).length), a[i] && a.push(r);
                        a.length && o.push({
                            elem: m,
                            handlers: a
                        })
                    }
            return s < n.length && o.push({
                elem: this,
                handlers: n.slice(s)
            }), o
        },
        fix: function(e) {
            if (e[d.expando]) return e;
            var n, t, i, r = e.type,
                o = e,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = le.test(r) ? this.mouseHooks : ue.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new d.Event(o), n = i.length; n--;) e[t = i[n]] = o[t];
            return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, n) {
                return null == e.which && (e.which = null != n.charCode ? n.charCode : n.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var t, i, r, o = n.button,
                    s = n.fromElement;
                return null == e.pageX && null != n.clientX && (r = (i = e.target.ownerDocument || a).documentElement, t = i.body, e.pageX = n.clientX + (r && r.scrollLeft || t && t.scrollLeft || 0) - (r && r.clientLeft || t && t.clientLeft || 0), e.pageY = n.clientY + (r && r.scrollTop || t && t.scrollTop || 0) - (r && r.clientTop || t && t.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== pe() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === pe() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return d.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return d.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, n, t) {
            var a = d.extend(new d.Event, t, {
                type: e,
                isSimulated: !0
            });
            d.event.trigger(a, null, n), a.isDefaultPrevented() && t.preventDefault()
        }
    }, d.removeEvent = a.removeEventListener ? function(e, n, t) {
        e.removeEventListener && e.removeEventListener(n, t)
    } : function(e, n, t) {
        var a = "on" + n;
        e.detachEvent && (void 0 === e[a] && (e[a] = null), e.detachEvent(a, t))
    }, d.Event = function(e, n) {
        return this instanceof d.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? de : he) : this.type = e, n && d.extend(this, n), this.timeStamp = e && e.timeStamp || d.now(), void(this[d.expando] = !0)) : new d.Event(e, n)
    }, d.Event.prototype = {
        constructor: d.Event,
        isDefaultPrevented: he,
        isPropagationStopped: he,
        isImmediatePropagationStopped: he,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = de, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = de, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = de, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, d.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, n) {
        d.event.special[e] = {
            delegateType: n,
            bindType: n,
            handle: function(e) {
                var t, a = e.relatedTarget,
                    i = e.handleObj;
                return a && (a === this || d.contains(this, a)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = n), t
            }
        }
    }), c.submit || (d.event.special.submit = {
        setup: function() {
            return !d.nodeName(this, "form") && void d.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target,
                    t = d.nodeName(n, "input") || d.nodeName(n, "button") ? d.prop(n, "form") : void 0;
                t && !d._data(t, "submit") && (d.event.add(t, "submit._submit", function(e) {
                    e._submitBubble = !0
                }), d._data(t, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && d.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            return !d.nodeName(this, "form") && void d.event.remove(this, "._submit")
        }
    }), c.change || (d.event.special.change = {
        setup: function() {
            return me.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (d.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), d.event.add(this, "click._change", function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), d.event.simulate("change", this, e)
            })), !1) : void d.event.add(this, "beforeactivate._change", function(e) {
                var n = e.target;
                me.test(n.nodeName) && !d._data(n, "change") && (d.event.add(n, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || d.event.simulate("change", this.parentNode, e)
                }), d._data(n, "change", !0))
            })
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return d.event.remove(this, "._change"), !me.test(this.nodeName)
        }
    }), c.focusin || d.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, n) {
        var t = function(e) {
            d.event.simulate(n, e.target, d.event.fix(e))
        };
        d.event.special[n] = {
            setup: function() {
                var a = this.ownerDocument || this,
                    i = d._data(a, n);
                i || a.addEventListener(e, t, !0), d._data(a, n, (i || 0) + 1)
            },
            teardown: function() {
                var a = this.ownerDocument || this,
                    i = d._data(a, n) - 1;
                i ? d._data(a, n, i) : (a.removeEventListener(e, t, !0), d._removeData(a, n))
            }
        }
    }), d.fn.extend({
        on: function(e, n, t, a) {
            return fe(this, e, n, t, a)
        },
        one: function(e, n, t, a) {
            return fe(this, e, n, t, a, 1)
        },
        off: function(e, n, t) {
            var a, i;
            if (e && e.preventDefault && e.handleObj) return a = e.handleObj, d(e.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, n, e[i]);
                return this
            }
            return !1 !== n && "function" != typeof n || (t = n, n = void 0), !1 === t && (t = he), this.each(function() {
                d.event.remove(this, e, t, n)
            })
        },
        trigger: function(e, n) {
            return this.each(function() {
                d.event.trigger(e, n, this)
            })
        },
        triggerHandler: function(e, n) {
            var t = this[0];
            return t ? d.event.trigger(e, n, t, !0) : void 0
        }
    });
    var Se = / jQuery\d+="(?:null|\d+)"/g,
        ge = new RegExp("<(?:" + X + ")[\\s/>]", "i"),
        Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Ge = /<script|<style|<link/i,
        ye = /checked\s*(?:[^=]|=\s*.checked.)/i,
        be = /^true\/(.*)/,
        we = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ke = ee(a).appendChild(a.createElement("div"));

    function xe(e, n) {
        return d.nodeName(e, "table") && d.nodeName(11 !== n.nodeType ? n : n.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Ce(e) {
        return e.type = (null !== d.find.attr(e, "type")) + "/" + e.type, e
    }

    function _e(e) {
        var n = be.exec(e.type);
        return n ? e.type = n[1] : e.removeAttribute("type"), e
    }

    function Te(e, n) {
        if (1 === n.nodeType && d.hasData(e)) {
            var t, a, i, r = d._data(e),
                o = d._data(n, r),
                s = r.events;
            if (s)
                for (t in delete o.handle, o.events = {}, s)
                    for (a = 0, i = s[t].length; i > a; a++) d.event.add(n, t, s[t][a]);
            o.data && (o.data = d.extend({}, o.data))
        }
    }

    function Ee(e, n) {
        var t, a, i;
        if (1 === n.nodeType) {
            if (t = n.nodeName.toLowerCase(), !c.noCloneEvent && n[d.expando]) {
                for (a in (i = d._data(n)).events) d.removeEvent(n, a, i.handle);
                n.removeAttribute(d.expando)
            }
            "script" === t && n.text !== e.text ? (Ce(n).text = e.text, _e(n)) : "object" === t ? (n.parentNode && (n.outerHTML = e.outerHTML), c.html5Clone && e.innerHTML && !d.trim(n.innerHTML) && (n.innerHTML = e.innerHTML)) : "input" === t && U.test(e.type) ? (n.defaultChecked = n.checked = e.checked, n.value !== e.value && (n.value = e.value)) : "option" === t ? n.defaultSelected = n.selected = e.defaultSelected : "input" !== t && "textarea" !== t || (n.defaultValue = e.defaultValue)
        }
    }

    function Ae(e, n, t, a) {
        n = r.apply([], n);
        var i, o, s, m, u, l, v = 0,
            h = e.length,
            p = h - 1,
            f = n[0],
            S = d.isFunction(f);
        if (S || h > 1 && "string" == typeof f && !c.checkClone && ye.test(f)) return e.each(function(i) {
            var r = e.eq(i);
            S && (n[0] = f.call(this, i, r.html())), Ae(r, n, t, a)
        });
        if (h && (i = (l = se(n, e[0].ownerDocument, !1, e, a)).firstChild, 1 === l.childNodes.length && (l = i), i || a)) {
            for (s = (m = d.map(te(l, "script"), Ce)).length; h > v; v++) o = l, v !== p && (o = d.clone(o, !0, !0), s && d.merge(m, te(o, "script"))), t.call(e[v], o, v);
            if (s)
                for (u = m[m.length - 1].ownerDocument, d.map(m, _e), v = 0; s > v; v++) o = m[v], Y.test(o.type || "") && !d._data(o, "globalEval") && d.contains(u, o) && (o.src ? d._evalUrl && d._evalUrl(o.src) : d.globalEval((o.text || o.textContent || o.innerHTML || "").replace(we, "")));
            l = i = null
        }
        return e
    }

    function Me(e, n, t) {
        for (var a, i = n ? d.filter(n, e) : e, r = 0; null != (a = i[r]); r++) t || 1 !== a.nodeType || d.cleanData(te(a)), a.parentNode && (t && d.contains(a.ownerDocument, a) && ae(te(a, "script")), a.parentNode.removeChild(a));
        return e
    }
    d.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ne, "<$1></$2>")
        },
        clone: function(e, n, t) {
            var a, i, r, o, s, m = d.contains(e.ownerDocument, e);
            if (c.html5Clone || d.isXMLDoc(e) || !ge.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (ke.innerHTML = e.outerHTML, ke.removeChild(r = ke.firstChild)), !(c.noCloneEvent && c.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || d.isXMLDoc(e)))
                for (a = te(r), s = te(e), o = 0; null != (i = s[o]); ++o) a[o] && Ee(i, a[o]);
            if (n)
                if (t)
                    for (s = s || te(e), a = a || te(r), o = 0; null != (i = s[o]); o++) Te(i, a[o]);
                else Te(e, r);
            return (a = te(r, "script")).length > 0 && ae(a, !m && te(e, "script")), a = s = i = null, r
        },
        cleanData: function(e, n) {
            for (var a, i, r, o, s = 0, m = d.expando, u = d.cache, l = c.attributes, v = d.event.special; null != (a = e[s]); s++)
                if ((n || j(a)) && (o = (r = a[m]) && u[r])) {
                    if (o.events)
                        for (i in o.events) v[i] ? d.event.remove(a, i) : d.removeEvent(a, i, o.handle);
                    u[r] && (delete u[r], l || void 0 === a.removeAttribute ? a[m] = void 0 : a.removeAttribute(m), t.push(r))
                }
        }
    }), d.fn.extend({
        domManip: Ae,
        detach: function(e) {
            return Me(this, e, !0)
        },
        remove: function(e) {
            return Me(this, e)
        },
        text: function(e) {
            return V(this, function(e) {
                return void 0 === e ? d.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return Ae(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || xe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Ae(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var n = xe(this, e);
                    n.insertBefore(e, n.firstChild)
                }
            })
        },
        before: function() {
            return Ae(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Ae(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, n = 0; null != (e = this[n]); n++) {
                for (1 === e.nodeType && d.cleanData(te(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && d.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, n) {
            return e = null != e && e, n = null == n ? e : n, this.map(function() {
                return d.clone(this, e, n)
            })
        },
        html: function(e) {
            return V(this, function(e) {
                var n = this[0] || {},
                    t = 0,
                    a = this.length;
                if (void 0 === e) return 1 === n.nodeType ? n.innerHTML.replace(Se, "") : void 0;
                if ("string" == typeof e && !Ge.test(e) && (c.htmlSerialize || !ge.test(e)) && (c.leadingWhitespace || !Q.test(e)) && !ne[(Z.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = d.htmlPrefilter(e);
                    try {
                        for (; a > t; t++) 1 === (n = this[t] || {}).nodeType && (d.cleanData(te(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (e) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Ae(this, arguments, function(n) {
                var t = this.parentNode;
                d.inArray(this, e) < 0 && (d.cleanData(te(this)), t && t.replaceChild(n, this))
            }, e)
        }
    }), d.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, n) {
        d.fn[e] = function(e) {
            for (var t, a = 0, i = [], r = d(e), s = r.length - 1; s >= a; a++) t = a === s ? this : this.clone(!0), d(r[a])[n](t), o.apply(i, t.get());
            return this.pushStack(i)
        }
    });
    var Ie, ze = {
        HTML: "block",
        BODY: "block"
    };

    function Le(e, n) {
        var t = d(n.createElement(e)).appendTo(n.body),
            a = d.css(t[0], "display");
        return t.detach(), a
    }

    function De(e) {
        var n = a,
            t = ze[e];
        return t || ("none" !== (t = Le(e, n)) && t || ((n = ((Ie = (Ie || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(n.documentElement))[0].contentWindow || Ie[0].contentDocument).document).write(), n.close(), t = Le(e, n), Ie.detach()), ze[e] = t), t
    }
    var je = /^margin/,
        Be = new RegExp("^(" + F + ")(?!px)[a-z%]+$", "i"),
        Pe = function(e, n, t, a) {
            var i, r, o = {};
            for (r in n) o[r] = e.style[r], e.style[r] = n[r];
            for (r in i = t.apply(e, a || []), n) e.style[r] = o[r];
            return i
        },
        He = a.documentElement;
    ! function() {
        var n, t, i, r, o, s, m = a.createElement("div"),
            u = a.createElement("div");
        if (u.style) {
            function l() {
                var l, c, v = a.documentElement;
                v.appendChild(m), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = i = s = !1, t = o = !0, e.getComputedStyle && (c = e.getComputedStyle(u), n = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, i = "4px" === (c || {
                    width: "4px"
                }).width, u.style.marginRight = "50%", t = "4px" === (c || {
                    marginRight: "4px"
                }).marginRight, (l = u.appendChild(a.createElement("div"))).style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", l.style.marginRight = l.style.width = "0", u.style.width = "1px", o = !parseFloat((e.getComputedStyle(l) || {}).marginRight), u.removeChild(l)), u.style.display = "none", (r = 0 === u.getClientRects().length) && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", (l = u.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (r = 0 === l[0].offsetHeight) && (l[0].style.display = "", l[1].style.display = "none", r = 0 === l[0].offsetHeight)), v.removeChild(m)
            }
            u.style.cssText = "float:left;opacity:.5", c.opacity = "0.5" === u.style.opacity, c.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", c.clearCloneStyle = "content-box" === u.style.backgroundClip, (m = a.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", m.appendChild(u), c.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, d.extend(c, {
                reliableHiddenOffsets: function() {
                    return null == n && l(), r
                },
                boxSizingReliable: function() {
                    return null == n && l(), i
                },
                pixelMarginRight: function() {
                    return null == n && l(), t
                },
                pixelPosition: function() {
                    return null == n && l(), n
                },
                reliableMarginRight: function() {
                    return null == n && l(), o
                },
                reliableMarginLeft: function() {
                    return null == n && l(), s
                }
            })
        }
    }();
    var Oe, Re, $e = /^(top|right|bottom|left)$/;

    function Fe(e, n) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = n).apply(this, arguments)
            }
        }
    }
    e.getComputedStyle ? (Oe = function(n) {
        var t = n.ownerDocument.defaultView;
        return t && t.opener || (t = e), t.getComputedStyle(n)
    }, Re = function(e, n, t) {
        var a, i, r, o, s = e.style;
        return "" !== (o = (t = t || Oe(e)) ? t.getPropertyValue(n) || t[n] : void 0) && void 0 !== o || d.contains(e.ownerDocument, e) || (o = d.style(e, n)), t && !c.pixelMarginRight() && Be.test(o) && je.test(n) && (a = s.width, i = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = t.width, s.width = a, s.minWidth = i, s.maxWidth = r), void 0 === o ? o : o + ""
    }) : He.currentStyle && (Oe = function(e) {
        return e.currentStyle
    }, Re = function(e, n, t) {
        var a, i, r, o, s = e.style;
        return null == (o = (t = t || Oe(e)) ? t[n] : void 0) && s && s[n] && (o = s[n]), Be.test(o) && !$e.test(n) && (a = s.left, (r = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left), s.left = "fontSize" === n ? "1em" : o, o = s.pixelLeft + "px", s.left = a, r && (i.left = r)), void 0 === o ? o : o + "" || "auto"
    });
    var Ke = /alpha\([^)]*\)/i,
        We = /opacity\s*=\s*([^)]*)/i,
        qe = /^(none|table(?!-c[ea]).+)/,
        Je = new RegExp("^(" + F + ")(.*)$", "i"),
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ue = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ze = ["Webkit", "O", "Moz", "ms"],
        Ye = a.createElement("div").style;

    function Qe(e) {
        if (e in Ye) return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), t = Ze.length; t--;)
            if ((e = Ze[t] + n) in Ye) return e
    }

    function Xe(e, n) {
        for (var t, a, i, r = [], o = 0, s = e.length; s > o; o++)(a = e[o]).style && (r[o] = d._data(a, "olddisplay"), t = a.style.display, n ? (r[o] || "none" !== t || (a.style.display = ""), "" === a.style.display && q(a) && (r[o] = d._data(a, "olddisplay", De(a.nodeName)))) : (i = q(a), (t && "none" !== t || !i) && d._data(a, "olddisplay", i ? t : d.css(a, "display"))));
        for (o = 0; s > o; o++)(a = e[o]).style && (n && "none" !== a.style.display && "" !== a.style.display || (a.style.display = n ? r[o] || "" : "none"));
        return e
    }

    function en(e, n, t) {
        var a = Je.exec(n);
        return a ? Math.max(0, a[1] - (t || 0)) + (a[2] || "px") : n
    }

    function nn(e, n, t, a, i) {
        for (var r = t === (a ? "border" : "content") ? 4 : "width" === n ? 1 : 0, o = 0; 4 > r; r += 2) "margin" === t && (o += d.css(e, t + W[r], !0, i)), a ? ("content" === t && (o -= d.css(e, "padding" + W[r], !0, i)), "margin" !== t && (o -= d.css(e, "border" + W[r] + "Width", !0, i))) : (o += d.css(e, "padding" + W[r], !0, i), "padding" !== t && (o += d.css(e, "border" + W[r] + "Width", !0, i)));
        return o
    }

    function tn(e, n, t) {
        var a = !0,
            i = "width" === n ? e.offsetWidth : e.offsetHeight,
            r = Oe(e),
            o = c.boxSizing && "border-box" === d.css(e, "boxSizing", !1, r);
        if (0 >= i || null == i) {
            if ((0 > (i = Re(e, n, r)) || null == i) && (i = e.style[n]), Be.test(i)) return i;
            a = o && (c.boxSizingReliable() || i === e.style[n]), i = parseFloat(i) || 0
        }
        return i + nn(e, n, t || (o ? "border" : "content"), a, r) + "px"
    }

    function an(e, n, t, a, i) {
        return new an.prototype.init(e, n, t, a, i)
    }
    d.extend({
        cssHooks: {
            opacity: {
                get: function(e, n) {
                    if (n) {
                        var t = Re(e, "opacity");
                        return "" === t ? "1" : t
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: c.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, t, a) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, r, o, s = d.camelCase(n),
                    m = e.style;
                if (n = d.cssProps[s] || (d.cssProps[s] = Qe(s) || s), o = d.cssHooks[n] || d.cssHooks[s], void 0 === t) return o && "get" in o && void 0 !== (i = o.get(e, !1, a)) ? i : m[n];
                if ("string" === (r = typeof t) && (i = K.exec(t)) && i[1] && (t = J(e, n, i), r = "number"), null != t && t == t && ("number" === r && (t += i && i[3] || (d.cssNumber[s] ? "" : "px")), c.clearCloneStyle || "" !== t || 0 !== n.indexOf("background") || (m[n] = "inherit"), !(o && "set" in o && void 0 === (t = o.set(e, t, a))))) try {
                    m[n] = t
                } catch (e) {}
            }
        },
        css: function(e, n, t, a) {
            var i, r, o, s = d.camelCase(n);
            return n = d.cssProps[s] || (d.cssProps[s] = Qe(s) || s), (o = d.cssHooks[n] || d.cssHooks[s]) && "get" in o && (r = o.get(e, !0, t)), void 0 === r && (r = Re(e, n, a)), "normal" === r && n in Ue && (r = Ue[n]), "" === t || t ? (i = parseFloat(r), !0 === t || isFinite(i) ? i || 0 : r) : r
        }
    }), d.each(["height", "width"], function(e, n) {
        d.cssHooks[n] = {
            get: function(e, t, a) {
                return t ? qe.test(d.css(e, "display")) && 0 === e.offsetWidth ? Pe(e, Ve, function() {
                    return tn(e, n, a)
                }) : tn(e, n, a) : void 0
            },
            set: function(e, t, a) {
                var i = a && Oe(e);
                return en(0, t, a ? nn(e, n, a, c.boxSizing && "border-box" === d.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), c.opacity || (d.cssHooks.opacity = {
        get: function(e, n) {
            return We.test((n && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : n ? "1" : ""
        },
        set: function(e, n) {
            var t = e.style,
                a = e.currentStyle,
                i = d.isNumeric(n) ? "alpha(opacity=" + 100 * n + ")" : "",
                r = a && a.filter || t.filter || "";
            t.zoom = 1, (n >= 1 || "" === n) && "" === d.trim(r.replace(Ke, "")) && t.removeAttribute && (t.removeAttribute("filter"), "" === n || a && !a.filter) || (t.filter = Ke.test(r) ? r.replace(Ke, i) : r + " " + i)
        }
    }), d.cssHooks.marginRight = Fe(c.reliableMarginRight, function(e, n) {
        return n ? Pe(e, {
            display: "inline-block"
        }, Re, [e, "marginRight"]) : void 0
    }), d.cssHooks.marginLeft = Fe(c.reliableMarginLeft, function(e, n) {
        return n ? (parseFloat(Re(e, "marginLeft")) || (d.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - Pe(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), d.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, n) {
        d.cssHooks[e + n] = {
            expand: function(t) {
                for (var a = 0, i = {}, r = "string" == typeof t ? t.split(" ") : [t]; 4 > a; a++) i[e + W[a] + n] = r[a] || r[a - 2] || r[0];
                return i
            }
        }, je.test(e) || (d.cssHooks[e + n].set = en)
    }), d.fn.extend({
        css: function(e, n) {
            return V(this, function(e, n, t) {
                var a, i, r = {},
                    o = 0;
                if (d.isArray(n)) {
                    for (a = Oe(e), i = n.length; i > o; o++) r[n[o]] = d.css(e, n[o], !1, a);
                    return r
                }
                return void 0 !== t ? d.style(e, n, t) : d.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return Xe(this, !0)
        },
        hide: function() {
            return Xe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                q(this) ? d(this).show() : d(this).hide()
            })
        }
    }), d.Tween = an, an.prototype = {
        constructor: an,
        init: function(e, n, t, a, i, r) {
            this.elem = e, this.prop = t, this.easing = i || d.easing._default, this.options = n, this.start = this.now = this.cur(), this.end = a, this.unit = r || (d.cssNumber[t] ? "" : "px")
        },
        cur: function() {
            var e = an.propHooks[this.prop];
            return e && e.get ? e.get(this) : an.propHooks._default.get(this)
        },
        run: function(e) {
            var n, t = an.propHooks[this.prop];
            return this.options.duration ? this.pos = n = d.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = n = e, this.now = (this.end - this.start) * n + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : an.propHooks._default.set(this), this
        }
    }, an.prototype.init.prototype = an.prototype, an.propHooks = {
        _default: {
            get: function(e) {
                var n;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (n = d.css(e.elem, e.prop, "")) && "auto" !== n ? n : 0
            },
            set: function(e) {
                d.fx.step[e.prop] ? d.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[d.cssProps[e.prop]] && !d.cssHooks[e.prop] ? e.elem[e.prop] = e.now : d.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, an.propHooks.scrollTop = an.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, d.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, d.fx = an.prototype.init, d.fx.step = {};
    var rn, on, sn = /^(?:toggle|show|hide)$/,
        mn = /queueHooks$/;

    function un() {
        return e.setTimeout(function() {
            rn = void 0
        }), rn = d.now()
    }

    function ln(e, n) {
        var t, a = {
                height: e
            },
            i = 0;
        for (n = n ? 1 : 0; 4 > i; i += 2 - n) a["margin" + (t = W[i])] = a["padding" + t] = e;
        return n && (a.opacity = a.width = e), a
    }

    function cn(e, n, t) {
        for (var a, i = (vn.tweeners[n] || []).concat(vn.tweeners["*"]), r = 0, o = i.length; o > r; r++)
            if (a = i[r].call(t, n, e)) return a
    }

    function vn(e, n, t) {
        var a, i, r = 0,
            o = vn.prefilters.length,
            s = d.Deferred().always(function() {
                delete m.elem
            }),
            m = function() {
                if (i) return !1;
                for (var n = rn || un(), t = Math.max(0, u.startTime + u.duration - n), a = 1 - (t / u.duration || 0), r = 0, o = u.tweens.length; o > r; r++) u.tweens[r].run(a);
                return s.notifyWith(e, [u, a, t]), 1 > a && o ? t : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: d.extend({}, n),
                opts: d.extend(!0, {
                    specialEasing: {},
                    easing: d.easing._default
                }, t),
                originalProperties: n,
                originalOptions: t,
                startTime: rn || un(),
                duration: t.duration,
                tweens: [],
                createTween: function(n, t) {
                    var a = d.Tween(e, u.opts, n, t, u.opts.specialEasing[n] || u.opts.easing);
                    return u.tweens.push(a), a
                },
                stop: function(n) {
                    var t = 0,
                        a = n ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; a > t; t++) u.tweens[t].run(1);
                    return n ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, n])) : s.rejectWith(e, [u, n]), this
                }
            }),
            l = u.props;
        for (function(e, n) {
                var t, a, i, r, o;
                for (t in e)
                    if (i = n[a = d.camelCase(t)], r = e[t], d.isArray(r) && (i = r[1], r = e[t] = r[0]), t !== a && (e[a] = r, delete e[t]), (o = d.cssHooks[a]) && "expand" in o)
                        for (t in r = o.expand(r), delete e[a], r) t in e || (e[t] = r[t], n[t] = i);
                    else n[a] = i
            }(l, u.opts.specialEasing); o > r; r++)
            if (a = vn.prefilters[r].call(u, e, l, u.opts)) return d.isFunction(a.stop) && (d._queueHooks(u.elem, u.opts.queue).stop = d.proxy(a.stop, a)), a;
        return d.map(l, cn, u), d.isFunction(u.opts.start) && u.opts.start.call(e, u), d.fx.timer(d.extend(m, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    d.Animation = d.extend(vn, {
            tweeners: {
                "*": [function(e, n) {
                    var t = this.createTween(e, n);
                    return J(t.elem, e, K.exec(n), t), t
                }]
            },
            tweener: function(e, n) {
                d.isFunction(e) ? (n = e, e = ["*"]) : e = e.match(z);
                for (var t, a = 0, i = e.length; i > a; a++) t = e[a], vn.tweeners[t] = vn.tweeners[t] || [], vn.tweeners[t].unshift(n)
            },
            prefilters: [function(e, n, t) {
                var a, i, r, o, s, m, u, l = this,
                    v = {},
                    h = e.style,
                    p = e.nodeType && q(e),
                    f = d._data(e, "fxshow");
                for (a in t.queue || (null == (s = d._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, m = s.empty.fire, s.empty.fire = function() {
                        s.unqueued || m()
                    }), s.unqueued++, l.always(function() {
                        l.always(function() {
                            s.unqueued--, d.queue(e, "fx").length || s.empty.fire()
                        })
                    })), 1 === e.nodeType && ("height" in n || "width" in n) && (t.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (u = d.css(e, "display")) ? d._data(e, "olddisplay") || De(e.nodeName) : u) && "none" === d.css(e, "float") && (c.inlineBlockNeedsLayout && "inline" !== De(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), t.overflow && (h.overflow = "hidden", c.shrinkWrapBlocks() || l.always(function() {
                        h.overflow = t.overflow[0], h.overflowX = t.overflow[1], h.overflowY = t.overflow[2]
                    })), n)
                    if (i = n[a], sn.exec(i)) {
                        if (delete n[a], r = r || "toggle" === i, i === (p ? "hide" : "show")) {
                            if ("show" !== i || !f || void 0 === f[a]) continue;
                            p = !0
                        }
                        v[a] = f && f[a] || d.style(e, a)
                    } else u = void 0;
                if (d.isEmptyObject(v)) "inline" === ("none" === u ? De(e.nodeName) : u) && (h.display = u);
                else
                    for (a in f ? "hidden" in f && (p = f.hidden) : f = d._data(e, "fxshow", {}), r && (f.hidden = !p), p ? d(e).show() : l.done(function() {
                            d(e).hide()
                        }), l.done(function() {
                            var n;
                            for (n in d._removeData(e, "fxshow"), v) d.style(e, n, v[n])
                        }), v) o = cn(p ? f[a] : 0, a, l), a in f || (f[a] = o.start, p && (o.end = o.start, o.start = "width" === a || "height" === a ? 1 : 0))
            }],
            prefilter: function(e, n) {
                n ? vn.prefilters.unshift(e) : vn.prefilters.push(e)
            }
        }), d.speed = function(e, n, t) {
            var a = e && "object" == typeof e ? d.extend({}, e) : {
                complete: t || !t && n || d.isFunction(e) && e,
                duration: e,
                easing: t && n || n && !d.isFunction(n) && n
            };
            return a.duration = d.fx.off ? 0 : "number" == typeof a.duration ? a.duration : a.duration in d.fx.speeds ? d.fx.speeds[a.duration] : d.fx.speeds._default, null != a.queue && !0 !== a.queue || (a.queue = "fx"), a.old = a.complete, a.complete = function() {
                d.isFunction(a.old) && a.old.call(this), a.queue && d.dequeue(this, a.queue)
            }, a
        }, d.fn.extend({
            fadeTo: function(e, n, t, a) {
                return this.filter(q).css("opacity", 0).show().end().animate({
                    opacity: n
                }, e, t, a)
            },
            animate: function(e, n, t, a) {
                var i = d.isEmptyObject(e),
                    r = d.speed(n, t, a),
                    o = function() {
                        var n = vn(this, d.extend({}, e), r);
                        (i || d._data(this, "finish")) && n.stop(!0)
                    };
                return o.finish = o, i || !1 === r.queue ? this.each(o) : this.queue(r.queue, o)
            },
            stop: function(e, n, t) {
                var a = function(e) {
                    var n = e.stop;
                    delete e.stop, n(t)
                };
                return "string" != typeof e && (t = n, n = e, e = void 0), n && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var n = !0,
                        i = null != e && e + "queueHooks",
                        r = d.timers,
                        o = d._data(this);
                    if (i) o[i] && o[i].stop && a(o[i]);
                    else
                        for (i in o) o[i] && o[i].stop && mn.test(i) && a(o[i]);
                    for (i = r.length; i--;) r[i].elem !== this || null != e && r[i].queue !== e || (r[i].anim.stop(t), n = !1, r.splice(i, 1));
                    !n && t || d.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var n, t = d._data(this),
                        a = t[e + "queue"],
                        i = t[e + "queueHooks"],
                        r = d.timers,
                        o = a ? a.length : 0;
                    for (t.finish = !0, d.queue(this, e, []), i && i.stop && i.stop.call(this, !0), n = r.length; n--;) r[n].elem === this && r[n].queue === e && (r[n].anim.stop(!0), r.splice(n, 1));
                    for (n = 0; o > n; n++) a[n] && a[n].finish && a[n].finish.call(this);
                    delete t.finish
                })
            }
        }), d.each(["toggle", "show", "hide"], function(e, n) {
            var t = d.fn[n];
            d.fn[n] = function(e, a, i) {
                return null == e || "boolean" == typeof e ? t.apply(this, arguments) : this.animate(ln(n, !0), e, a, i)
            }
        }), d.each({
            slideDown: ln("show"),
            slideUp: ln("hide"),
            slideToggle: ln("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, n) {
            d.fn[e] = function(e, t, a) {
                return this.animate(n, e, t, a)
            }
        }), d.timers = [], d.fx.tick = function() {
            var e, n = d.timers,
                t = 0;
            for (rn = d.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || d.fx.stop(), rn = void 0
        }, d.fx.timer = function(e) {
            d.timers.push(e), e() ? d.fx.start() : d.timers.pop()
        }, d.fx.interval = 13, d.fx.start = function() {
            on || (on = e.setInterval(d.fx.tick, d.fx.interval))
        }, d.fx.stop = function() {
            e.clearInterval(on), on = null
        }, d.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, d.fn.delay = function(n, t) {
            return n = d.fx && d.fx.speeds[n] || n, t = t || "fx", this.queue(t, function(t, a) {
                var i = e.setTimeout(t, n);
                a.stop = function() {
                    e.clearTimeout(i)
                }
            })
        },
        function() {
            var e, n = a.createElement("input"),
                t = a.createElement("div"),
                i = a.createElement("select"),
                r = i.appendChild(a.createElement("option"));
            (t = a.createElement("div")).setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = t.getElementsByTagName("a")[0], n.setAttribute("type", "checkbox"), t.appendChild(n), (e = t.getElementsByTagName("a")[0]).style.cssText = "top:1px", c.getSetAttribute = "t" !== t.className, c.style = /top/.test(e.getAttribute("style")), c.hrefNormalized = "/a" === e.getAttribute("href"), c.checkOn = !!n.value, c.optSelected = r.selected, c.enctype = !!a.createElement("form").enctype, i.disabled = !0, c.optDisabled = !r.disabled, (n = a.createElement("input")).setAttribute("value", ""), c.input = "" === n.getAttribute("value"), n.value = "t", n.setAttribute("type", "radio"), c.radioValue = "t" === n.value
        }();
    var dn = /\r/g,
        hn = /[\x20\t\r\n\f]+/g;
    d.fn.extend({
        val: function(e) {
            var n, t, a, i = this[0];
            return arguments.length ? (a = d.isFunction(e), this.each(function(t) {
                var i;
                1 === this.nodeType && (null == (i = a ? e.call(this, t, d(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : d.isArray(i) && (i = d.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), (n = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, i, "value") || (this.value = i))
            })) : i ? (n = d.valHooks[i.type] || d.valHooks[i.nodeName.toLowerCase()]) && "get" in n && void 0 !== (t = n.get(i, "value")) ? t : "string" == typeof(t = i.value) ? t.replace(dn, "") : null == t ? "" : t : void 0
        }
    }), d.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var n = d.find.attr(e, "value");
                    return null != n ? n : d.trim(d.text(e)).replace(hn, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var n, t, a = e.options, i = e.selectedIndex, r = "select-one" === e.type || 0 > i, o = r ? null : [], s = r ? i + 1 : a.length, m = 0 > i ? s : r ? i : 0; s > m; m++)
                        if (((t = a[m]).selected || m === i) && (c.optDisabled ? !t.disabled : null === t.getAttribute("disabled")) && (!t.parentNode.disabled || !d.nodeName(t.parentNode, "optgroup"))) {
                            if (n = d(t).val(), r) return n;
                            o.push(n)
                        }
                    return o
                },
                set: function(e, n) {
                    for (var t, a, i = e.options, r = d.makeArray(n), o = i.length; o--;)
                        if (a = i[o], d.inArray(d.valHooks.option.get(a), r) > -1) try {
                            a.selected = t = !0
                        } catch (e) {
                            a.scrollHeight
                        } else a.selected = !1;
                    return t || (e.selectedIndex = -1), i
                }
            }
        }
    }), d.each(["radio", "checkbox"], function() {
        d.valHooks[this] = {
            set: function(e, n) {
                return d.isArray(n) ? e.checked = d.inArray(d(e).val(), n) > -1 : void 0
            }
        }, c.checkOn || (d.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var pn, fn, Sn = d.expr.attrHandle,
        gn = /^(?:checked|selected)$/i,
        Nn = c.getSetAttribute,
        Gn = c.input;
    d.fn.extend({
        attr: function(e, n) {
            return V(this, d.attr, e, n, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                d.removeAttr(this, e)
            })
        }
    }), d.extend({
        attr: function(e, n, t) {
            var a, i, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? d.prop(e, n, t) : (1 === r && d.isXMLDoc(e) || (n = n.toLowerCase(), i = d.attrHooks[n] || (d.expr.match.bool.test(n) ? fn : pn)), void 0 !== t ? null === t ? void d.removeAttr(e, n) : i && "set" in i && void 0 !== (a = i.set(e, t, n)) ? a : (e.setAttribute(n, t + ""), t) : i && "get" in i && null !== (a = i.get(e, n)) ? a : null == (a = d.find.attr(e, n)) ? void 0 : a)
        },
        attrHooks: {
            type: {
                set: function(e, n) {
                    if (!c.radioValue && "radio" === n && d.nodeName(e, "input")) {
                        var t = e.value;
                        return e.setAttribute("type", n), t && (e.value = t), n
                    }
                }
            }
        },
        removeAttr: function(e, n) {
            var t, a, i = 0,
                r = n && n.match(z);
            if (r && 1 === e.nodeType)
                for (; t = r[i++];) a = d.propFix[t] || t, d.expr.match.bool.test(t) ? Gn && Nn || !gn.test(t) ? e[a] = !1 : e[d.camelCase("default-" + t)] = e[a] = !1 : d.attr(e, t, ""), e.removeAttribute(Nn ? t : a)
        }
    }), fn = {
        set: function(e, n, t) {
            return !1 === n ? d.removeAttr(e, t) : Gn && Nn || !gn.test(t) ? e.setAttribute(!Nn && d.propFix[t] || t, t) : e[d.camelCase("default-" + t)] = e[t] = !0, t
        }
    }, d.each(d.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var t = Sn[n] || d.find.attr;
        Gn && Nn || !gn.test(n) ? Sn[n] = function(e, n, a) {
            var i, r;
            return a || (r = Sn[n], Sn[n] = i, i = null != t(e, n, a) ? n.toLowerCase() : null, Sn[n] = r), i
        } : Sn[n] = function(e, n, t) {
            return t ? void 0 : e[d.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), Gn && Nn || (d.attrHooks.value = {
        set: function(e, n, t) {
            return d.nodeName(e, "input") ? void(e.defaultValue = n) : pn && pn.set(e, n, t)
        }
    }), Nn || (pn = {
        set: function(e, n, t) {
            var a = e.getAttributeNode(t);
            return a || e.setAttributeNode(a = e.ownerDocument.createAttribute(t)), a.value = n += "", "value" === t || n === e.getAttribute(t) ? n : void 0
        }
    }, Sn.id = Sn.name = Sn.coords = function(e, n, t) {
        var a;
        return t ? void 0 : (a = e.getAttributeNode(n)) && "" !== a.value ? a.value : null
    }, d.valHooks.button = {
        get: function(e, n) {
            var t = e.getAttributeNode(n);
            return t && t.specified ? t.value : void 0
        },
        set: pn.set
    }, d.attrHooks.contenteditable = {
        set: function(e, n, t) {
            pn.set(e, "" !== n && n, t)
        }
    }, d.each(["width", "height"], function(e, n) {
        d.attrHooks[n] = {
            set: function(e, t) {
                return "" === t ? (e.setAttribute(n, "auto"), t) : void 0
            }
        }
    })), c.style || (d.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, n) {
            return e.style.cssText = n + ""
        }
    });
    var yn = /^(?:input|select|textarea|button|object)$/i,
        bn = /^(?:a|area)$/i;
    d.fn.extend({
        prop: function(e, n) {
            return V(this, d.prop, e, n, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = d.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (e) {}
            })
        }
    }), d.extend({
        prop: function(e, n, t) {
            var a, i, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && d.isXMLDoc(e) || (n = d.propFix[n] || n, i = d.propHooks[n]), void 0 !== t ? i && "set" in i && void 0 !== (a = i.set(e, t, n)) ? a : e[n] = t : i && "get" in i && null !== (a = i.get(e, n)) ? a : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = d.find.attr(e, "tabindex");
                    return n ? parseInt(n, 10) : yn.test(e.nodeName) || bn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), c.hrefNormalized || d.each(["href", "src"], function(e, n) {
        d.propHooks[n] = {
            get: function(e) {
                return e.getAttribute(n, 4)
            }
        }
    }), c.optSelected || (d.propHooks.selected = {
        get: function(e) {
            var n = e.parentNode;
            return n && (n.selectedIndex, n.parentNode && n.parentNode.selectedIndex), null
        },
        set: function(e) {
            var n = e.parentNode;
            n && (n.selectedIndex, n.parentNode && n.parentNode.selectedIndex)
        }
    }), d.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        d.propFix[this.toLowerCase()] = this
    }), c.enctype || (d.propFix.enctype = "encoding");
    var wn = /[\t\r\n\f]/g;

    function kn(e) {
        return d.attr(e, "class") || ""
    }
    d.fn.extend({
        addClass: function(e) {
            var n, t, a, i, r, o, s, m = 0;
            if (d.isFunction(e)) return this.each(function(n) {
                d(this).addClass(e.call(this, n, kn(this)))
            });
            if ("string" == typeof e && e)
                for (n = e.match(z) || []; t = this[m++];)
                    if (i = kn(t), a = 1 === t.nodeType && (" " + i + " ").replace(wn, " ")) {
                        for (o = 0; r = n[o++];) a.indexOf(" " + r + " ") < 0 && (a += r + " ");
                        i !== (s = d.trim(a)) && d.attr(t, "class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var n, t, a, i, r, o, s, m = 0;
            if (d.isFunction(e)) return this.each(function(n) {
                d(this).removeClass(e.call(this, n, kn(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (n = e.match(z) || []; t = this[m++];)
                    if (i = kn(t), a = 1 === t.nodeType && (" " + i + " ").replace(wn, " ")) {
                        for (o = 0; r = n[o++];)
                            for (; a.indexOf(" " + r + " ") > -1;) a = a.replace(" " + r + " ", " ");
                        i !== (s = d.trim(a)) && d.attr(t, "class", s)
                    }
            return this
        },
        toggleClass: function(e, n) {
            var t = typeof e;
            return "boolean" == typeof n && "string" === t ? n ? this.addClass(e) : this.removeClass(e) : d.isFunction(e) ? this.each(function(t) {
                d(this).toggleClass(e.call(this, t, kn(this), n), n)
            }) : this.each(function() {
                var n, a, i, r;
                if ("string" === t)
                    for (a = 0, i = d(this), r = e.match(z) || []; n = r[a++];) i.hasClass(n) ? i.removeClass(n) : i.addClass(n);
                else void 0 !== e && "boolean" !== t || ((n = kn(this)) && d._data(this, "__className__", n), d.attr(this, "class", n || !1 === e ? "" : d._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var n, t, a = 0;
            for (n = " " + e + " "; t = this[a++];)
                if (1 === t.nodeType && (" " + kn(t) + " ").replace(wn, " ").indexOf(n) > -1) return !0;
            return !1
        }
    }), d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        d.fn[n] = function(e, t) {
            return arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), d.fn.extend({
        hover: function(e, n) {
            return this.mouseenter(e).mouseleave(n || e)
        }
    });
    var xn = e.location,
        Cn = d.now(),
        _n = /\?/,
        Tn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    d.parseJSON = function(n) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(n + "");
        var t, a = null,
            i = d.trim(n + "");
        return i && !d.trim(i.replace(Tn, function(e, n, i, r) {
            return t && n && (a = 0), 0 === a ? e : (t = i || n, a += !r - !i, "")
        })) ? Function("return " + i)() : d.error("Invalid JSON: " + n)
    }, d.parseXML = function(n) {
        var t;
        if (!n || "string" != typeof n) return null;
        try {
            e.DOMParser ? t = (new e.DOMParser).parseFromString(n, "text/xml") : ((t = new e.ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(n))
        } catch (e) {
            t = void 0
        }
        return t && t.documentElement && !t.getElementsByTagName("parsererror").length || d.error("Invalid XML: " + n), t
    };
    var En = /#.*$/,
        An = /([?&])_=[^&]*/,
        Mn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        In = /^(?:GET|HEAD)$/,
        zn = /^\/\//,
        Ln = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Dn = {},
        jn = {},
        Bn = "*/".concat("*"),
        Pn = xn.href,
        Hn = Ln.exec(Pn.toLowerCase()) || [];

    function On(e) {
        return function(n, t) {
            "string" != typeof n && (t = n, n = "*");
            var a, i = 0,
                r = n.toLowerCase().match(z) || [];
            if (d.isFunction(t))
                for (; a = r[i++];) "+" === a.charAt(0) ? (a = a.slice(1) || "*", (e[a] = e[a] || []).unshift(t)) : (e[a] = e[a] || []).push(t)
        }
    }

    function Rn(e, n, t, a) {
        var i = {},
            r = e === jn;

        function o(s) {
            var m;
            return i[s] = !0, d.each(e[s] || [], function(e, s) {
                var u = s(n, t, a);
                return "string" != typeof u || r || i[u] ? r ? !(m = u) : void 0 : (n.dataTypes.unshift(u), o(u), !1)
            }), m
        }
        return o(n.dataTypes[0]) || !i["*"] && o("*")
    }

    function $n(e, n) {
        var t, a, i = d.ajaxSettings.flatOptions || {};
        for (a in n) void 0 !== n[a] && ((i[a] ? e : t || (t = {}))[a] = n[a]);
        return t && d.extend(!0, e, t), e
    }

    function Fn(e) {
        return e.style && e.style.display || d.css(e, "display")
    }
    d.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Pn,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Hn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": d.parseJSON,
                "text xml": d.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, n) {
            return n ? $n($n(e, d.ajaxSettings), n) : $n(d.ajaxSettings, e)
        },
        ajaxPrefilter: On(Dn),
        ajaxTransport: On(jn),
        ajax: function(n, t) {
            "object" == typeof n && (t = n, n = void 0), t = t || {};
            var a, i, r, o, s, m, u, l, c = d.ajaxSetup({}, t),
                v = c.context || c,
                h = c.context && (v.nodeType || v.jquery) ? d(v) : d.event,
                p = d.Deferred(),
                f = d.Callbacks("once memory"),
                S = c.statusCode || {},
                g = {},
                N = {},
                G = 0,
                y = "canceled",
                b = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var n;
                        if (2 === G) {
                            if (!l)
                                for (l = {}; n = Mn.exec(o);) l[n[1].toLowerCase()] = n[2];
                            n = l[e.toLowerCase()]
                        }
                        return null == n ? null : n
                    },
                    getAllResponseHeaders: function() {
                        return 2 === G ? o : null
                    },
                    setRequestHeader: function(e, n) {
                        var t = e.toLowerCase();
                        return G || (e = N[t] = N[t] || e, g[e] = n), this
                    },
                    overrideMimeType: function(e) {
                        return G || (c.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var n;
                        if (e)
                            if (2 > G)
                                for (n in e) S[n] = [S[n], e[n]];
                            else b.always(e[b.status]);
                        return this
                    },
                    abort: function(e) {
                        var n = e || y;
                        return u && u.abort(n), w(0, n), this
                    }
                };
            if (p.promise(b).complete = f.add, b.success = b.done, b.error = b.fail, c.url = ((n || c.url || Pn) + "").replace(En, "").replace(zn, Hn[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = d.trim(c.dataType || "*").toLowerCase().match(z) || [""], null == c.crossDomain && (a = Ln.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === Hn[1] && a[2] === Hn[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (Hn[3] || ("http:" === Hn[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = d.param(c.data, c.traditional)), Rn(Dn, c, t, b), 2 === G) return b;
            for (i in (m = d.event && c.global) && 0 == d.active++ && d.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !In.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (_n.test(r) ? "&" : "?") + c.data, delete c.data), !1 === c.cache && (c.url = An.test(r) ? r.replace(An, "$1_=" + Cn++) : r + (_n.test(r) ? "&" : "?") + "_=" + Cn++)), c.ifModified && (d.lastModified[r] && b.setRequestHeader("If-Modified-Since", d.lastModified[r]), d.etag[r] && b.setRequestHeader("If-None-Match", d.etag[r])), (c.data && c.hasContent && !1 !== c.contentType || t.contentType) && b.setRequestHeader("Content-Type", c.contentType), b.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Bn + "; q=0.01" : "") : c.accepts["*"]), c.headers) b.setRequestHeader(i, c.headers[i]);
            if (c.beforeSend && (!1 === c.beforeSend.call(v, b, c) || 2 === G)) return b.abort();
            for (i in y = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) b[i](c[i]);
            if (u = Rn(jn, c, t, b)) {
                if (b.readyState = 1, m && h.trigger("ajaxSend", [b, c]), 2 === G) return b;
                c.async && c.timeout > 0 && (s = e.setTimeout(function() {
                    b.abort("timeout")
                }, c.timeout));
                try {
                    G = 1, u.send(g, w)
                } catch (e) {
                    if (!(2 > G)) throw e;
                    w(-1, e)
                }
            } else w(-1, "No Transport");

            function w(n, t, a, i) {
                var l, g, N, y, w, k = t;
                2 !== G && (G = 2, s && e.clearTimeout(s), u = void 0, o = i || "", b.readyState = n > 0 ? 4 : 0, l = n >= 200 && 300 > n || 304 === n, a && (y = function(e, n, t) {
                    for (var a, i, r, o, s = e.contents, m = e.dataTypes;
                        "*" === m[0];) m.shift(), void 0 === i && (i = e.mimeType || n.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in s)
                            if (s[o] && s[o].test(i)) {
                                m.unshift(o);
                                break
                            }
                    if (m[0] in t) r = m[0];
                    else {
                        for (o in t) {
                            if (!m[0] || e.converters[o + " " + m[0]]) {
                                r = o;
                                break
                            }
                            a || (a = o)
                        }
                        r = r || a
                    }
                    return r ? (r !== m[0] && m.unshift(r), t[r]) : void 0
                }(c, b, a)), y = function(e, n, t, a) {
                    var i, r, o, s, m, u = {},
                        l = e.dataTypes.slice();
                    if (l[1])
                        for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
                    for (r = l.shift(); r;)
                        if (e.responseFields[r] && (t[e.responseFields[r]] = n), !m && a && e.dataFilter && (n = e.dataFilter(n, e.dataType)), m = r, r = l.shift())
                            if ("*" === r) r = m;
                            else if ("*" !== m && m !== r) {
                        if (!(o = u[m + " " + r] || u["* " + r]))
                            for (i in u)
                                if ((s = i.split(" "))[1] === r && (o = u[m + " " + s[0]] || u["* " + s[0]])) {
                                    !0 === o ? o = u[i] : !0 !== u[i] && (r = s[0], l.unshift(s[1]));
                                    break
                                }
                        if (!0 !== o)
                            if (o && e.throws) n = o(n);
                            else try {
                                n = o(n)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: o ? e : "No conversion from " + m + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: n
                    }
                }(c, y, b, l), l ? (c.ifModified && ((w = b.getResponseHeader("Last-Modified")) && (d.lastModified[r] = w), (w = b.getResponseHeader("etag")) && (d.etag[r] = w)), 204 === n || "HEAD" === c.type ? k = "nocontent" : 304 === n ? k = "notmodified" : (k = y.state, g = y.data, l = !(N = y.error))) : (N = k, !n && k || (k = "error", 0 > n && (n = 0))), b.status = n, b.statusText = (t || k) + "", l ? p.resolveWith(v, [g, k, b]) : p.rejectWith(v, [b, k, N]), b.statusCode(S), S = void 0, m && h.trigger(l ? "ajaxSuccess" : "ajaxError", [b, c, l ? g : N]), f.fireWith(v, [b, k]), m && (h.trigger("ajaxComplete", [b, c]), --d.active || d.event.trigger("ajaxStop")))
            }
            return b
        },
        getJSON: function(e, n, t) {
            return d.get(e, n, t, "json")
        },
        getScript: function(e, n) {
            return d.get(e, void 0, n, "script")
        }
    }), d.each(["get", "post"], function(e, n) {
        d[n] = function(e, t, a, i) {
            return d.isFunction(t) && (i = i || a, a = t, t = void 0), d.ajax(d.extend({
                url: e,
                type: n,
                dataType: i,
                data: t,
                success: a
            }, d.isPlainObject(e) && e))
        }
    }), d._evalUrl = function(e) {
        return d.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, d.fn.extend({
        wrapAll: function(e) {
            if (d.isFunction(e)) return this.each(function(n) {
                d(this).wrapAll(e.call(this, n))
            });
            if (this[0]) {
                var n = d(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && n.insertBefore(this[0]), n.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return d.isFunction(e) ? this.each(function(n) {
                d(this).wrapInner(e.call(this, n))
            }) : this.each(function() {
                var n = d(this),
                    t = n.contents();
                t.length ? t.wrapAll(e) : n.append(e)
            })
        },
        wrap: function(e) {
            var n = d.isFunction(e);
            return this.each(function(t) {
                d(this).wrapAll(n ? e.call(this, t) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
            }).end()
        }
    }), d.expr.filters.hidden = function(e) {
        return c.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : function(e) {
            if (!d.contains(e.ownerDocument || a, e)) return !0;
            for (; e && 1 === e.nodeType;) {
                if ("none" === Fn(e) || "hidden" === e.type) return !0;
                e = e.parentNode
            }
            return !1
        }(e)
    }, d.expr.filters.visible = function(e) {
        return !d.expr.filters.hidden(e)
    };
    var Kn = /%20/g,
        Wn = /\[\]$/,
        qn = /\r?\n/g,
        Jn = /^(?:submit|button|image|reset|file)$/i,
        Vn = /^(?:input|select|textarea|keygen)/i;

    function Un(e, n, t, a) {
        var i;
        if (d.isArray(n)) d.each(n, function(n, i) {
            t || Wn.test(e) ? a(e, i) : Un(e + "[" + ("object" == typeof i && null != i ? n : "") + "]", i, t, a)
        });
        else if (t || "object" !== d.type(n)) a(e, n);
        else
            for (i in n) Un(e + "[" + i + "]", n[i], t, a)
    }
    d.param = function(e, n) {
        var t, a = [],
            i = function(e, n) {
                n = d.isFunction(n) ? n() : null == n ? "" : n, a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(n)
            };
        if (void 0 === n && (n = d.ajaxSettings && d.ajaxSettings.traditional), d.isArray(e) || e.jquery && !d.isPlainObject(e)) d.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (t in e) Un(t, e[t], n, i);
        return a.join("&").replace(Kn, "+")
    }, d.fn.extend({
        serialize: function() {
            return d.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = d.prop(this, "elements");
                return e ? d.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !d(this).is(":disabled") && Vn.test(this.nodeName) && !Jn.test(e) && (this.checked || !U.test(e))
            }).map(function(e, n) {
                var t = d(this).val();
                return null == t ? null : d.isArray(t) ? d.map(t, function(e) {
                    return {
                        name: n.name,
                        value: e.replace(qn, "\r\n")
                    }
                }) : {
                    name: n.name,
                    value: t.replace(qn, "\r\n")
                }
            }).get()
        }
    }), d.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return this.isLocal ? et() : a.documentMode > 8 ? Xn() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Xn() || et()
    } : Xn;
    var Zn = 0,
        Yn = {},
        Qn = d.ajaxSettings.xhr();

    function Xn() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }

    function et() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Yn) Yn[e](void 0, !0)
    }), c.cors = !!Qn && "withCredentials" in Qn, (Qn = c.ajax = !!Qn) && d.ajaxTransport(function(n) {
        var t;
        if (!n.crossDomain || c.cors) return {
            send: function(a, i) {
                var r, o = n.xhr(),
                    s = ++Zn;
                if (o.open(n.type, n.url, n.async, n.username, n.password), n.xhrFields)
                    for (r in n.xhrFields) o[r] = n.xhrFields[r];
                for (r in n.mimeType && o.overrideMimeType && o.overrideMimeType(n.mimeType), n.crossDomain || a["X-Requested-With"] || (a["X-Requested-With"] = "XMLHttpRequest"), a) void 0 !== a[r] && o.setRequestHeader(r, a[r] + "");
                o.send(n.hasContent && n.data || null), t = function(e, a) {
                    var r, m, u;
                    if (t && (a || 4 === o.readyState))
                        if (delete Yn[s], t = void 0, o.onreadystatechange = d.noop, a) 4 !== o.readyState && o.abort();
                        else {
                            u = {}, r = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                            try {
                                m = o.statusText
                            } catch (e) {
                                m = ""
                            }
                            r || !n.isLocal || n.crossDomain ? 1223 === r && (r = 204) : r = u.text ? 200 : 404
                        }
                    u && i(r, m, u, o.getAllResponseHeaders())
                }, n.async ? 4 === o.readyState ? e.setTimeout(t) : o.onreadystatechange = Yn[s] = t : t()
            },
            abort: function() {
                t && t(void 0, !0)
            }
        }
    }), d.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return d.globalEval(e), e
            }
        }
    }), d.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), d.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, t = a.head || d("head")[0] || a.documentElement;
            return {
                send: function(i, r) {
                    (n = a.createElement("script")).async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || r(200, "success"))
                    }, t.insertBefore(n, t.firstChild)
                },
                abort: function() {
                    n && n.onload(void 0, !0)
                }
            }
        }
    });
    var nt = [],
        tt = /(=)\?(?=&|$)|\?\?/;
    d.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = nt.pop() || d.expando + "_" + Cn++;
            return this[e] = !0, e
        }
    }), d.ajaxPrefilter("json jsonp", function(n, t, a) {
        var i, r, o, s = !1 !== n.jsonp && (tt.test(n.url) ? "url" : "string" == typeof n.data && 0 === (n.contentType || "").indexOf("application/x-www-form-urlencoded") && tt.test(n.data) && "data");
        return s || "jsonp" === n.dataTypes[0] ? (i = n.jsonpCallback = d.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, s ? n[s] = n[s].replace(tt, "$1" + i) : !1 !== n.jsonp && (n.url += (_n.test(n.url) ? "&" : "?") + n.jsonp + "=" + i), n.converters["script json"] = function() {
            return o || d.error(i + " was not called"), o[0]
        }, n.dataTypes[0] = "json", r = e[i], e[i] = function() {
            o = arguments
        }, a.always(function() {
            void 0 === r ? d(e).removeProp(i) : e[i] = r, n[i] && (n.jsonpCallback = t.jsonpCallback, nt.push(i)), o && d.isFunction(r) && r(o[0]), o = r = void 0
        }), "script") : void 0
    }), d.parseHTML = function(e, n, t) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof n && (t = n, n = !1), n = n || a;
        var i = w.exec(e),
            r = !t && [];
        return i ? [n.createElement(i[1])] : (i = se([e], n, r), r && r.length && d(r).remove(), d.merge([], i.childNodes))
    };
    var at = d.fn.load;

    function it(e) {
        return d.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    d.fn.load = function(e, n, t) {
        if ("string" != typeof e && at) return at.apply(this, arguments);
        var a, i, r, o = this,
            s = e.indexOf(" ");
        return s > -1 && (a = d.trim(e.slice(s, e.length)), e = e.slice(0, s)), d.isFunction(n) ? (t = n, n = void 0) : n && "object" == typeof n && (i = "POST"), o.length > 0 && d.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: n
        }).done(function(e) {
            r = arguments, o.html(a ? d("<div>").append(d.parseHTML(e)).find(a) : e)
        }).always(t && function(e, n) {
            o.each(function() {
                t.apply(this, r || [e.responseText, n, e])
            })
        }), this
    }, d.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, n) {
        d.fn[n] = function(e) {
            return this.on(n, e)
        }
    }), d.expr.filters.animated = function(e) {
        return d.grep(d.timers, function(n) {
            return e === n.elem
        }).length
    }, d.offset = {
        setOffset: function(e, n, t) {
            var a, i, r, o, s, m, u = d.css(e, "position"),
                l = d(e),
                c = {};
            "static" === u && (e.style.position = "relative"), s = l.offset(), r = d.css(e, "top"), m = d.css(e, "left"), ("absolute" === u || "fixed" === u) && d.inArray("auto", [r, m]) > -1 ? (o = (a = l.position()).top, i = a.left) : (o = parseFloat(r) || 0, i = parseFloat(m) || 0), d.isFunction(n) && (n = n.call(e, t, d.extend({}, s))), null != n.top && (c.top = n.top - s.top + o), null != n.left && (c.left = n.left - s.left + i), "using" in n ? n.using.call(e, c) : l.css(c)
        }
    }, d.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(n) {
                d.offset.setOffset(this, e, n)
            });
            var n, t, a = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                r = i && i.ownerDocument;
            return r ? (n = r.documentElement, d.contains(n, i) ? (void 0 !== i.getBoundingClientRect && (a = i.getBoundingClientRect()), t = it(r), {
                top: a.top + (t.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: a.left + (t.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : a) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, n, t = {
                        top: 0,
                        left: 0
                    },
                    a = this[0];
                return "fixed" === d.css(a, "position") ? n = a.getBoundingClientRect() : (e = this.offsetParent(), n = this.offset(), d.nodeName(e[0], "html") || (t = e.offset()), t.top += d.css(e[0], "borderTopWidth", !0), t.left += d.css(e[0], "borderLeftWidth", !0)), {
                    top: n.top - t.top - d.css(a, "marginTop", !0),
                    left: n.left - t.left - d.css(a, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !d.nodeName(e, "html") && "static" === d.css(e, "position");) e = e.offsetParent;
                return e || He
            })
        }
    }), d.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var t = /Y/.test(n);
        d.fn[e] = function(a) {
            return V(this, function(e, a, i) {
                var r = it(e);
                return void 0 === i ? r ? n in r ? r[n] : r.document.documentElement[a] : e[a] : void(r ? r.scrollTo(t ? d(r).scrollLeft() : i, t ? i : d(r).scrollTop()) : e[a] = i)
            }, e, a, arguments.length, null)
        }
    }), d.each(["top", "left"], function(e, n) {
        d.cssHooks[n] = Fe(c.pixelPosition, function(e, t) {
            return t ? (t = Re(e, n), Be.test(t) ? d(e).position()[n] + "px" : t) : void 0
        })
    }), d.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        d.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(t, a) {
            d.fn[a] = function(a, i) {
                var r = arguments.length && (t || "boolean" != typeof a),
                    o = t || (!0 === a || !0 === i ? "margin" : "border");
                return V(this, function(n, t, a) {
                    var i;
                    return d.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (i = n.documentElement, Math.max(n.body["scroll" + e], i["scroll" + e], n.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === a ? d.css(n, t, o) : d.style(n, t, a, o)
                }, n, r ? a : void 0, r, null)
            }
        })
    }), d.fn.extend({
        bind: function(e, n, t) {
            return this.on(e, null, n, t)
        },
        unbind: function(e, n) {
            return this.off(e, null, n)
        },
        delegate: function(e, n, t, a) {
            return this.on(n, e, t, a)
        },
        undelegate: function(e, n, t) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(n, e || "**", t)
        }
    }), d.fn.size = function() {
        return this.length
    }, d.fn.andSelf = d.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return d
    });
    var rt = e.jQuery,
        ot = e.$;
    return d.noConflict = function(n) {
        return e.$ === d && (e.$ = ot), n && e.jQuery === d && (e.jQuery = rt), d
    }, n || (e.jQuery = e.$ = d), d
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function(e) {
"use strict";
var n = jQuery.fn.jquery.split(" ")[0].split(".");
if (n[0] < 2 && n[1] < 9 || 1 == n[0] && 9 == n[1] && n[2] < 1 || n[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
function(e) {
"use strict";
e.fn.emulateTransitionEnd = function(n) {
    var t = !1,
        a = this;
    e(this).one("bsTransitionEnd", function() {
        t = !0
    });
    return setTimeout(function() {
        t || e(a).trigger(e.support.transition.end)
    }, n), this
}, e(function() {
    e.support.transition = function() {
        var e = document.createElement("bootstrap"),
            n = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var t in n)
            if (void 0 !== e.style[t]) return {
                end: n[t]
            };
        return !1
    }(), e.support.transition && (e.event.special.bsTransitionEnd = {
        bindType: e.support.transition.end,
        delegateType: e.support.transition.end,
        handle: function(n) {
            if (e(n.target).is(this)) return n.handleObj.handler.apply(this, arguments)
        }
    })
})
}(jQuery),
function(e) {
"use strict";
var n = '[data-dismiss="alert"]',
    t = function(t) {
        e(t).on("click", n, this.close)
    };
t.VERSION = "3.3.7", t.TRANSITION_DURATION = 150, t.prototype.close = function(n) {
    function a() {
        o.detach().trigger("closed.bs.alert").remove()
    }
    var i = e(this),
        r = i.attr("data-target");
    r || (r = (r = i.attr("href")) && r.replace(/.*(?=#[^\s]*$)/, ""));
    var o = e("#" === r ? [] : r);
    n && n.preventDefault(), o.length || (o = i.closest(".alert")), o.trigger(n = e.Event("close.bs.alert")), n.isDefaultPrevented() || (o.removeClass("in"), e.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", a).emulateTransitionEnd(t.TRANSITION_DURATION) : a())
};
var a = e.fn.alert;
e.fn.alert = function(n) {
    return this.each(function() {
        var a = e(this),
            i = a.data("bs.alert");
        i || a.data("bs.alert", i = new t(this)), "string" == typeof n && i[n].call(a)
    })
}, e.fn.alert.Constructor = t, e.fn.alert.noConflict = function() {
    return e.fn.alert = a, this
}, e(document).on("click.bs.alert.data-api", n, t.prototype.close)
}(jQuery),
function(e) {
"use strict";

function n(n) {
    return this.each(function() {
        var a = e(this),
            i = a.data("bs.button"),
            r = "object" == typeof n && n;
        i || a.data("bs.button", i = new t(this, r)), "toggle" == n ? i.toggle() : n && i.setState(n)
    })
}
var t = function(n, a) {
    this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, a), this.isLoading = !1
};
t.VERSION = "3.3.7", t.DEFAULTS = {
    loadingText: "loading..."
}, t.prototype.setState = function(n) {
    var t = "disabled",
        a = this.$element,
        i = a.is("input") ? "val" : "html",
        r = a.data();
    n += "Text", null == r.resetText && a.data("resetText", a[i]()), setTimeout(e.proxy(function() {
        a[i](null == r[n] ? this.options[n] : r[n]), "loadingText" == n ? (this.isLoading = !0, a.addClass(t).attr(t, t).prop(t, !0)) : this.isLoading && (this.isLoading = !1, a.removeClass(t).removeAttr(t).prop(t, !1))
    }, this), 0)
}, t.prototype.toggle = function() {
    var e = !0,
        n = this.$element.closest('[data-toggle="buttons"]');
    if (n.length) {
        var t = this.$element.find("input");
        "radio" == t.prop("type") ? (t.prop("checked") && (e = !1), n.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == t.prop("type") && (t.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), t.prop("checked", this.$element.hasClass("active")), e && t.trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
};
var a = e.fn.button;
e.fn.button = n, e.fn.button.Constructor = t, e.fn.button.noConflict = function() {
    return e.fn.button = a, this
}, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
    var a = e(t.target).closest(".btn");
    n.call(a, "toggle"), e(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), a.is("input,button") ? a.trigger("focus") : a.find("input:visible,button:visible").first().trigger("focus"))
}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(n) {
    e(n.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(n.type))
})
}(jQuery),
function(e) {
"use strict";

function n(n) {
    return this.each(function() {
        var a = e(this),
            i = a.data("bs.carousel"),
            r = e.extend({}, t.DEFAULTS, a.data(), "object" == typeof n && n),
            o = "string" == typeof n ? n : r.slide;
        i || a.data("bs.carousel", i = new t(this, r)), "number" == typeof n ? i.to(n) : o ? i[o]() : r.interval && i.pause().cycle()
    })
}
var t = function(n, t) {
    this.$element = e(n), this.$indicators = this.$element.find(".carousel-indicators"), this.options = t, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
};
t.VERSION = "3.3.7", t.TRANSITION_DURATION = 600, t.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
}, t.prototype.keydown = function(e) {
    if (!/input|textarea/i.test(e.target.tagName)) {
        switch (e.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        e.preventDefault()
    }
}, t.prototype.cycle = function(n) {
    return n || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
}, t.prototype.getItemIndex = function(e) {
    return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
}, t.prototype.getItemForDirection = function(e, n) {
    var t = this.getItemIndex(n);
    if (("prev" == e && 0 === t || "next" == e && t == this.$items.length - 1) && !this.options.wrap) return n;
    var a = (t + ("prev" == e ? -1 : 1)) % this.$items.length;
    return this.$items.eq(a)
}, t.prototype.to = function(e) {
    var n = this,
        t = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
        n.to(e)
    }) : t == e ? this.pause().cycle() : this.slide(e > t ? "next" : "prev", this.$items.eq(e))
}, t.prototype.pause = function(n) {
    return n || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
}, t.prototype.next = function() {
    if (!this.sliding) return this.slide("next")
}, t.prototype.prev = function() {
    if (!this.sliding) return this.slide("prev")
}, t.prototype.slide = function(n, a) {
    var i = this.$element.find(".item.active"),
        r = a || this.getItemForDirection(n, i),
        o = this.interval,
        s = "next" == n ? "left" : "right",
        m = this;
    if (r.hasClass("active")) return this.sliding = !1;
    var u = r[0],
        l = e.Event("slide.bs.carousel", {
            relatedTarget: u,
            direction: s
        });
    if (this.$element.trigger(l), !l.isDefaultPrevented()) {
        if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            var c = e(this.$indicators.children()[this.getItemIndex(r)]);
            c && c.addClass("active")
        }
        var v = e.Event("slid.bs.carousel", {
            relatedTarget: u,
            direction: s
        });
        return e.support.transition && this.$element.hasClass("slide") ? (r.addClass(n), r[0].offsetWidth, i.addClass(s), r.addClass(s), i.one("bsTransitionEnd", function() {
            r.removeClass([n, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), m.sliding = !1, setTimeout(function() {
                m.$element.trigger(v)
            }, 0)
        }).emulateTransitionEnd(t.TRANSITION_DURATION)) : (i.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(v)), o && this.cycle(), this
    }
};
var a = e.fn.carousel;
e.fn.carousel = n, e.fn.carousel.Constructor = t, e.fn.carousel.noConflict = function() {
    return e.fn.carousel = a, this
};
var i = function(t) {
    var a, i = e(this),
        r = e(i.attr("data-target") || (a = i.attr("href")) && a.replace(/.*(?=#[^\s]+$)/, ""));
    if (r.hasClass("carousel")) {
        var o = e.extend({}, r.data(), i.data()),
            s = i.attr("data-slide-to");
        s && (o.interval = !1), n.call(r, o), s && r.data("bs.carousel").to(s), t.preventDefault()
    }
};
e(document).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i), e(window).on("load", function() {
    e('[data-ride="carousel"]').each(function() {
        var t = e(this);
        n.call(t, t.data())
    })
})
}(jQuery),
function(e) {
"use strict";

function n(n) {
    var t, a = n.attr("data-target") || (t = n.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, "");
    return e(a)
}

function t(n) {
    return this.each(function() {
        var t = e(this),
            i = t.data("bs.collapse"),
            r = e.extend({}, a.DEFAULTS, t.data(), "object" == typeof n && n);
        !i && r.toggle && /show|hide/.test(n) && (r.toggle = !1), i || t.data("bs.collapse", i = new a(this, r)), "string" == typeof n && i[n]()
    })
}
var a = function(n, t) {
    this.$element = e(n), this.options = e.extend({}, a.DEFAULTS, t), this.$trigger = e('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
};
a.VERSION = "3.3.7", a.TRANSITION_DURATION = 350, a.DEFAULTS = {
    toggle: !0
}, a.prototype.dimension = function() {
    return this.$element.hasClass("width") ? "width" : "height"
}, a.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
        var n, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
        if (!(i && i.length && (n = i.data("bs.collapse"), n && n.transitioning))) {
            var r = e.Event("show.bs.collapse");
            if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                i && i.length && (t.call(i, "hide"), n || i.data("bs.collapse", null));
                var o = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                var s = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!e.support.transition) return s.call(this);
                var m = e.camelCase(["scroll", o].join("-"));
                this.$element.one("bsTransitionEnd", e.proxy(s, this)).emulateTransitionEnd(a.TRANSITION_DURATION)[o](this.$element[0][m])
            }
        }
    }
}, a.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
        var n = e.Event("hide.bs.collapse");
        if (this.$element.trigger(n), !n.isDefaultPrevented()) {
            var t = this.dimension();
            this.$element[t](this.$element[t]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
            var i = function() {
                this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
            };
            return e.support.transition ? void this.$element[t](0).one("bsTransitionEnd", e.proxy(i, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : i.call(this)
        }
    }
}, a.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
}, a.prototype.getParent = function() {
    return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(t, a) {
        var i = e(a);
        this.addAriaAndCollapsedClass(n(i), i)
    }, this)).end()
}, a.prototype.addAriaAndCollapsedClass = function(e, n) {
    var t = e.hasClass("in");
    e.attr("aria-expanded", t), n.toggleClass("collapsed", !t).attr("aria-expanded", t)
};
var i = e.fn.collapse;
e.fn.collapse = t, e.fn.collapse.Constructor = a, e.fn.collapse.noConflict = function() {
    return e.fn.collapse = i, this
}, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(a) {
    var i = e(this);
    i.attr("data-target") || a.preventDefault();
    var r = n(i),
        o = r.data("bs.collapse") ? "toggle" : i.data();
    t.call(r, o)
})
}(jQuery),
function(e) {
"use strict";

function n(n) {
    var t = n.attr("data-target");
    t || (t = (t = n.attr("href")) && /#[A-Za-z]/.test(t) && t.replace(/.*(?=#[^\s]*$)/, ""));
    var a = t && e(t);
    return a && a.length ? a : n.parent()
}

function t(t) {
    t && 3 === t.which || (e(a).remove(), e(i).each(function() {
        var a = e(this),
            i = n(a),
            r = {
                relatedTarget: this
            };
        i.hasClass("open") && (t && "click" == t.type && /input|textarea/i.test(t.target.tagName) && e.contains(i[0], t.target) || (i.trigger(t = e.Event("hide.bs.dropdown", r)), t.isDefaultPrevented() || (a.attr("aria-expanded", "false"), i.removeClass("open").trigger(e.Event("hidden.bs.dropdown", r)))))
    }))
}
var a = ".dropdown-backdrop",
    i = '[data-toggle="dropdown"]',
    r = function(n) {
        e(n).on("click.bs.dropdown", this.toggle)
    };
r.VERSION = "3.3.7", r.prototype.toggle = function(a) {
    var i = e(this);
    if (!i.is(".disabled, :disabled")) {
        var r = n(i),
            o = r.hasClass("open");
        if (t(), !o) {
            "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", t);
            var s = {
                relatedTarget: this
            };
            if (r.trigger(a = e.Event("show.bs.dropdown", s)), a.isDefaultPrevented()) return;
            i.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(e.Event("shown.bs.dropdown", s))
        }
        return !1
    }
}, r.prototype.keydown = function(t) {
    if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
        var a = e(this);
        if (t.preventDefault(), t.stopPropagation(), !a.is(".disabled, :disabled")) {
            var r = n(a),
                o = r.hasClass("open");
            if (!o && 27 != t.which || o && 27 == t.which) return 27 == t.which && r.find(i).trigger("focus"), a.trigger("click");
            var s = r.find(".dropdown-menu li:not(.disabled):visible a");
            if (s.length) {
                var m = s.index(t.target);
                38 == t.which && m > 0 && m--, 40 == t.which && m < s.length - 1 && m++, ~m || (m = 0), s.eq(m).trigger("focus")
            }
        }
    }
};
var o = e.fn.dropdown;
e.fn.dropdown = function(n) {
    return this.each(function() {
        var t = e(this),
            a = t.data("bs.dropdown");
        a || t.data("bs.dropdown", a = new r(this)), "string" == typeof n && a[n].call(t)
    })
}, e.fn.dropdown.Constructor = r, e.fn.dropdown.noConflict = function() {
    return e.fn.dropdown = o, this
}, e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
    e.stopPropagation()
}).on("click.bs.dropdown.data-api", i, r.prototype.toggle).on("keydown.bs.dropdown.data-api", i, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
}(jQuery),
function(e) {
"use strict";

function n(n, a) {
    return this.each(function() {
        var i = e(this),
            r = i.data("bs.modal"),
            o = e.extend({}, t.DEFAULTS, i.data(), "object" == typeof n && n);
        r || i.data("bs.modal", r = new t(this, o)), "string" == typeof n ? r[n](a) : o.show && r.show(a)
    })
}
var t = function(n, t) {
    this.options = t, this.$body = e(document.body), this.$element = e(n), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
        this.$element.trigger("loaded.bs.modal")
    }, this))
};
t.VERSION = "3.3.7", t.TRANSITION_DURATION = 300, t.BACKDROP_TRANSITION_DURATION = 150, t.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
}, t.prototype.toggle = function(e) {
    return this.isShown ? this.hide() : this.show(e)
}, t.prototype.show = function(n) {
    var a = this,
        i = e.Event("show.bs.modal", {
            relatedTarget: n
        });
    this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
        a.$element.one("mouseup.dismiss.bs.modal", function(n) {
            e(n.target).is(a.$element) && (a.ignoreBackdropClick = !0)
        })
    }), this.backdrop(function() {
        var i = e.support.transition && a.$element.hasClass("fade");
        a.$element.parent().length || a.$element.appendTo(a.$body), a.$element.show().scrollTop(0), a.adjustDialog(), i && a.$element[0].offsetWidth, a.$element.addClass("in"), a.enforceFocus();
        var r = e.Event("shown.bs.modal", {
            relatedTarget: n
        });
        i ? a.$dialog.one("bsTransitionEnd", function() {
            a.$element.trigger("focus").trigger(r)
        }).emulateTransitionEnd(t.TRANSITION_DURATION) : a.$element.trigger("focus").trigger(r)
    }))
}, t.prototype.hide = function(n) {
    n && n.preventDefault(), n = e.Event("hide.bs.modal"), this.$element.trigger(n), this.isShown && !n.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
}, t.prototype.enforceFocus = function() {
    e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
        document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
    }, this))
}, t.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
        27 == e.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
}, t.prototype.resize = function() {
    this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
}, t.prototype.hideModal = function() {
    var e = this;
    this.$element.hide(), this.backdrop(function() {
        e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
    })
}, t.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
}, t.prototype.backdrop = function(n) {
    var a = this,
        i = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
        var r = e.support.transition && i;
        if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !n) return;
        r ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : n()
    } else if (!this.isShown && this.$backdrop) {
        this.$backdrop.removeClass("in");
        var o = function() {
            a.removeBackdrop(), n && n()
        };
        e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : o()
    } else n && n()
}, t.prototype.handleUpdate = function() {
    this.adjustDialog()
}, t.prototype.adjustDialog = function() {
    var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
        paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
        paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
    })
}, t.prototype.resetAdjustments = function() {
    this.$element.css({
        paddingLeft: "",
        paddingRight: ""
    })
}, t.prototype.checkScrollbar = function() {
    var e = window.innerWidth;
    if (!e) {
        var n = document.documentElement.getBoundingClientRect();
        e = n.right - Math.abs(n.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
}, t.prototype.setScrollbar = function() {
    var e = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
}, t.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", this.originalBodyPad)
}, t.prototype.measureScrollbar = function() {
    var e = document.createElement("div");
    e.className = "modal-scrollbar-measure", this.$body.append(e);
    var n = e.offsetWidth - e.clientWidth;
    return this.$body[0].removeChild(e), n
};
var a = e.fn.modal;
e.fn.modal = n, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function() {
    return e.fn.modal = a, this
}, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
    var a = e(this),
        i = a.attr("href"),
        r = e(a.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
        o = r.data("bs.modal") ? "toggle" : e.extend({
            remote: !/#/.test(i) && i
        }, r.data(), a.data());
    a.is("a") && t.preventDefault(), r.one("show.bs.modal", function(e) {
        e.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
            a.is(":visible") && a.trigger("focus")
        })
    }), n.call(r, o, this)
})
}(jQuery),
function(e) {
"use strict";
var n = function(e, n) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, n)
};
n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
        selector: "body",
        padding: 0
    }
}, n.prototype.init = function(n, t, a) {
    if (this.enabled = !0, this.type = n, this.$element = e(t), this.options = this.getOptions(a), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var i = this.options.trigger.split(" "), r = i.length; r--;) {
        var o = i[r];
        if ("click" == o) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
        else if ("manual" != o) {
            var s = "hover" == o ? "mouseenter" : "focusin",
                m = "hover" == o ? "mouseleave" : "focusout";
            this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(m + "." + this.type, this.options.selector, e.proxy(this.leave, this))
        }
    }
    this.options.selector ? this._options = e.extend({}, this.options, {
        trigger: "manual",
        selector: ""
    }) : this.fixTitle()
}, n.prototype.getDefaults = function() {
    return n.DEFAULTS
}, n.prototype.getOptions = function(n) {
    return (n = e.extend({}, this.getDefaults(), this.$element.data(), n)).delay && "number" == typeof n.delay && (n.delay = {
        show: n.delay,
        hide: n.delay
    }), n
}, n.prototype.getDelegateOptions = function() {
    var n = {},
        t = this.getDefaults();
    return this._options && e.each(this._options, function(e, a) {
        t[e] != a && (n[e] = a)
    }), n
}, n.prototype.enter = function(n) {
    var t = n instanceof this.constructor ? n : e(n.currentTarget).data("bs." + this.type);
    return t || (t = new this.constructor(n.currentTarget, this.getDelegateOptions()), e(n.currentTarget).data("bs." + this.type, t)), n instanceof e.Event && (t.inState["focusin" == n.type ? "focus" : "hover"] = !0), t.tip().hasClass("in") || "in" == t.hoverState ? void(t.hoverState = "in") : (clearTimeout(t.timeout), t.hoverState = "in", t.options.delay && t.options.delay.show ? void(t.timeout = setTimeout(function() {
        "in" == t.hoverState && t.show()
    }, t.options.delay.show)) : t.show())
}, n.prototype.isInStateTrue = function() {
    for (var e in this.inState)
        if (this.inState[e]) return !0;
    return !1
}, n.prototype.leave = function(n) {
    var t = n instanceof this.constructor ? n : e(n.currentTarget).data("bs." + this.type);
    if (t || (t = new this.constructor(n.currentTarget, this.getDelegateOptions()), e(n.currentTarget).data("bs." + this.type, t)), n instanceof e.Event && (t.inState["focusout" == n.type ? "focus" : "hover"] = !1), !t.isInStateTrue()) return clearTimeout(t.timeout), t.hoverState = "out", t.options.delay && t.options.delay.hide ? void(t.timeout = setTimeout(function() {
        "out" == t.hoverState && t.hide()
    }, t.options.delay.hide)) : t.hide()
}, n.prototype.show = function() {
    var t = e.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
        this.$element.trigger(t);
        var a = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
        if (t.isDefaultPrevented() || !a) return;
        var i = this,
            r = this.tip(),
            o = this.getUID(this.type);
        this.setContent(), r.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && r.addClass("fade");
        var s = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
            m = /\s?auto?\s?/i,
            u = m.test(s);
        u && (s = s.replace(m, "") || "top"), r.detach().css({
            top: 0,
            left: 0,
            display: "block"
        }).addClass(s).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
        var l = this.getPosition(),
            c = r[0].offsetWidth,
            v = r[0].offsetHeight;
        if (u) {
            var d = s,
                h = this.getPosition(this.$viewport);
            s = "bottom" == s && l.bottom + v > h.bottom ? "top" : "top" == s && l.top - v < h.top ? "bottom" : "right" == s && l.right + c > h.width ? "left" : "left" == s && l.left - c < h.left ? "right" : s, r.removeClass(d).addClass(s)
        }
        var p = this.getCalculatedOffset(s, l, c, v);
        this.applyPlacement(p, s);
        var f = function() {
            var e = i.hoverState;
            i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == e && i.leave(i)
        };
        e.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", f).emulateTransitionEnd(n.TRANSITION_DURATION) : f()
    }
}, n.prototype.applyPlacement = function(n, t) {
    var a = this.tip(),
        i = a[0].offsetWidth,
        r = a[0].offsetHeight,
        o = parseInt(a.css("margin-top"), 10),
        s = parseInt(a.css("margin-left"), 10);
    isNaN(o) && (o = 0), isNaN(s) && (s = 0), n.top += o, n.left += s, e.offset.setOffset(a[0], e.extend({
        using: function(e) {
            a.css({
                top: Math.round(e.top),
                left: Math.round(e.left)
            })
        }
    }, n), 0), a.addClass("in");
    var m = a[0].offsetWidth,
        u = a[0].offsetHeight;
    "top" == t && u != r && (n.top = n.top + r - u);
    var l = this.getViewportAdjustedDelta(t, n, m, u);
    l.left ? n.left += l.left : n.top += l.top;
    var c = /top|bottom/.test(t),
        v = c ? 2 * l.left - i + m : 2 * l.top - r + u,
        d = c ? "offsetWidth" : "offsetHeight";
    a.offset(n), this.replaceArrow(v, a[0][d], c)
}, n.prototype.replaceArrow = function(e, n, t) {
    this.arrow().css(t ? "left" : "top", 50 * (1 - e / n) + "%").css(t ? "top" : "left", "")
}, n.prototype.setContent = function() {
    var e = this.tip(),
        n = this.getTitle();
    e.find(".tooltip-inner")[this.options.html ? "html" : "text"](n), e.removeClass("fade in top bottom left right")
}, n.prototype.hide = function(t) {
    function a() {
        "in" != i.hoverState && r.detach(), i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), t && t()
    }
    var i = this,
        r = e(this.$tip),
        o = e.Event("hide.bs." + this.type);
    if (this.$element.trigger(o), !o.isDefaultPrevented()) return r.removeClass("in"), e.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", a).emulateTransitionEnd(n.TRANSITION_DURATION) : a(), this.hoverState = null, this
}, n.prototype.fixTitle = function() {
    var e = this.$element;
    (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
}, n.prototype.hasContent = function() {
    return this.getTitle()
}, n.prototype.getPosition = function(n) {
    var t = (n = n || this.$element)[0],
        a = "BODY" == t.tagName,
        i = t.getBoundingClientRect();
    null == i.width && (i = e.extend({}, i, {
        width: i.right - i.left,
        height: i.bottom - i.top
    }));
    var r = window.SVGElement && t instanceof window.SVGElement,
        o = a ? {
            top: 0,
            left: 0
        } : r ? null : n.offset(),
        s = {
            scroll: a ? document.documentElement.scrollTop || document.body.scrollTop : n.scrollTop()
        },
        m = a ? {
            width: e(window).width(),
            height: e(window).height()
        } : null;
    return e.extend({}, i, s, m, o)
}, n.prototype.getCalculatedOffset = function(e, n, t, a) {
    return "bottom" == e ? {
        top: n.top + n.height,
        left: n.left + n.width / 2 - t / 2
    } : "top" == e ? {
        top: n.top - a,
        left: n.left + n.width / 2 - t / 2
    } : "left" == e ? {
        top: n.top + n.height / 2 - a / 2,
        left: n.left - t
    } : {
        top: n.top + n.height / 2 - a / 2,
        left: n.left + n.width
    }
}, n.prototype.getViewportAdjustedDelta = function(e, n, t, a) {
    var i = {
        top: 0,
        left: 0
    };
    if (!this.$viewport) return i;
    var r = this.options.viewport && this.options.viewport.padding || 0,
        o = this.getPosition(this.$viewport);
    if (/right|left/.test(e)) {
        var s = n.top - r - o.scroll,
            m = n.top + r - o.scroll + a;
        s < o.top ? i.top = o.top - s : m > o.top + o.height && (i.top = o.top + o.height - m)
    } else {
        var u = n.left - r,
            l = n.left + r + t;
        u < o.left ? i.left = o.left - u : l > o.right && (i.left = o.left + o.width - l)
    }
    return i
}, n.prototype.getTitle = function() {
    var e = this.$element,
        n = this.options;
    return e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
}, n.prototype.getUID = function(e) {
    do {
        e += ~~(1e6 * Math.random())
    } while (document.getElementById(e));
    return e
}, n.prototype.tip = function() {
    if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
}, n.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
}, n.prototype.enable = function() {
    this.enabled = !0
}, n.prototype.disable = function() {
    this.enabled = !1
}, n.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
}, n.prototype.toggle = function(n) {
    var t = this;
    n && ((t = e(n.currentTarget).data("bs." + this.type)) || (t = new this.constructor(n.currentTarget, this.getDelegateOptions()), e(n.currentTarget).data("bs." + this.type, t))), n ? (t.inState.click = !t.inState.click, t.isInStateTrue() ? t.enter(t) : t.leave(t)) : t.tip().hasClass("in") ? t.leave(t) : t.enter(t)
}, n.prototype.destroy = function() {
    var e = this;
    clearTimeout(this.timeout), this.hide(function() {
        e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null
    })
};
var t = e.fn.tooltip;
e.fn.tooltip = function(t) {
    return this.each(function() {
        var a = e(this),
            i = a.data("bs.tooltip"),
            r = "object" == typeof t && t;
        !i && /destroy|hide/.test(t) || (i || a.data("bs.tooltip", i = new n(this, r)), "string" == typeof t && i[t]())
    })
}, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
    return e.fn.tooltip = t, this
}
}(jQuery),
function(e) {
"use strict";
var n = function(e, n) {
    this.init("popover", e, n)
};
if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
n.VERSION = "3.3.7", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
}), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
    return n.DEFAULTS
}, n.prototype.setContent = function() {
    var e = this.tip(),
        n = this.getTitle(),
        t = this.getContent();
    e.find(".popover-title")[this.options.html ? "html" : "text"](n), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof t ? "html" : "append" : "text"](t), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
}, n.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
}, n.prototype.getContent = function() {
    var e = this.$element,
        n = this.options;
    return e.attr("data-content") || ("function" == typeof n.content ? n.content.call(e[0]) : n.content)
}, n.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
};
var t = e.fn.popover;
e.fn.popover = function(t) {
    return this.each(function() {
        var a = e(this),
            i = a.data("bs.popover"),
            r = "object" == typeof t && t;
        !i && /destroy|hide/.test(t) || (i || a.data("bs.popover", i = new n(this, r)), "string" == typeof t && i[t]())
    })
}, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
    return e.fn.popover = t, this
}
}(jQuery),
function(e) {
"use strict";

function n(t, a) {
    this.$body = e(document.body), this.$scrollElement = e(e(t).is(document.body) ? window : t), this.options = e.extend({}, n.DEFAULTS, a), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
}

function t(t) {
    return this.each(function() {
        var a = e(this),
            i = a.data("bs.scrollspy"),
            r = "object" == typeof t && t;
        i || a.data("bs.scrollspy", i = new n(this, r)), "string" == typeof t && i[t]()
    })
}
n.VERSION = "3.3.7", n.DEFAULTS = {
    offset: 10
}, n.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
}, n.prototype.refresh = function() {
    var n = this,
        t = "offset",
        a = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (t = "position", a = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
        var n = e(this),
            i = n.data("target") || n.attr("href"),
            r = /^#./.test(i) && e(i);
        return r && r.length && r.is(":visible") && [
            [r[t]().top + a, i]
        ] || null
    }).sort(function(e, n) {
        return e[0] - n[0]
    }).each(function() {
        n.offsets.push(this[0]), n.targets.push(this[1])
    })
}, n.prototype.process = function() {
    var e, n = this.$scrollElement.scrollTop() + this.options.offset,
        t = this.getScrollHeight(),
        a = this.options.offset + t - this.$scrollElement.height(),
        i = this.offsets,
        r = this.targets,
        o = this.activeTarget;
    if (this.scrollHeight != t && this.refresh(), n >= a) return o != (e = r[r.length - 1]) && this.activate(e);
    if (o && n < i[0]) return this.activeTarget = null, this.clear();
    for (e = i.length; e--;) o != r[e] && n >= i[e] && (void 0 === i[e + 1] || n < i[e + 1]) && this.activate(r[e])
}, n.prototype.activate = function(n) {
    this.activeTarget = n, this.clear();
    var t = this.selector + '[data-target="' + n + '"],' + this.selector + '[href="' + n + '"]',
        a = e(t).parents("li").addClass("active");
    a.parent(".dropdown-menu").length && (a = a.closest("li.dropdown").addClass("active")), a.trigger("activate.bs.scrollspy")
}, n.prototype.clear = function() {
    e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
};
var a = e.fn.scrollspy;
e.fn.scrollspy = t, e.fn.scrollspy.Constructor = n, e.fn.scrollspy.noConflict = function() {
    return e.fn.scrollspy = a, this
}, e(window).on("load.bs.scrollspy.data-api", function() {
    e('[data-spy="scroll"]').each(function() {
        var n = e(this);
        t.call(n, n.data())
    })
})
}(jQuery),
function(e) {
"use strict";

function n(n) {
    return this.each(function() {
        var a = e(this),
            i = a.data("bs.tab");
        i || a.data("bs.tab", i = new t(this)), "string" == typeof n && i[n]()
    })
}
var t = function(n) {
    this.element = e(n)
};
t.VERSION = "3.3.7", t.TRANSITION_DURATION = 150, t.prototype.show = function() {
    var n = this.element,
        t = n.closest("ul:not(.dropdown-menu)"),
        a = n.data("target");
    if (a || (a = (a = n.attr("href")) && a.replace(/.*(?=#[^\s]*$)/, "")), !n.parent("li").hasClass("active")) {
        var i = t.find(".active:last a"),
            r = e.Event("hide.bs.tab", {
                relatedTarget: n[0]
            }),
            o = e.Event("show.bs.tab", {
                relatedTarget: i[0]
            });
        if (i.trigger(r), n.trigger(o), !o.isDefaultPrevented() && !r.isDefaultPrevented()) {
            var s = e(a);
            this.activate(n.closest("li"), t), this.activate(s, s.parent(), function() {
                i.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: n[0]
                }), n.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: i[0]
                })
            })
        }
    }
}, t.prototype.activate = function(n, a, i) {
    function r() {
        o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), n.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (n[0].offsetWidth, n.addClass("in")) : n.removeClass("fade"), n.parent(".dropdown-menu").length && n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
    }
    var o = a.find("> .active"),
        s = i && e.support.transition && (o.length && o.hasClass("fade") || !!a.find("> .fade").length);
    o.length && s ? o.one("bsTransitionEnd", r).emulateTransitionEnd(t.TRANSITION_DURATION) : r(), o.removeClass("in")
};
var a = e.fn.tab;
e.fn.tab = n, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function() {
    return e.fn.tab = a, this
};
var i = function(t) {
    t.preventDefault(), n.call(e(this), "show")
};
e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery),
function(e) {
"use strict";

function n(n) {
    return this.each(function() {
        var a = e(this),
            i = a.data("bs.affix"),
            r = "object" == typeof n && n;
        i || a.data("bs.affix", i = new t(this, r)), "string" == typeof n && i[n]()
    })
}
var t = function(n, a) {
    this.options = e.extend({}, t.DEFAULTS, a), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(n), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
};
t.VERSION = "3.3.7", t.RESET = "affix affix-top affix-bottom", t.DEFAULTS = {
    offset: 0,
    target: window
}, t.prototype.getState = function(e, n, t, a) {
    var i = this.$target.scrollTop(),
        r = this.$element.offset(),
        o = this.$target.height();
    if (null != t && "top" == this.affixed) return i < t && "top";
    if ("bottom" == this.affixed) return null != t ? !(i + this.unpin <= r.top) && "bottom" : !(i + o <= e - a) && "bottom";
    var s = null == this.affixed,
        m = s ? i : r.top;
    return null != t && i <= t ? "top" : null != a && m + (s ? o : n) >= e - a && "bottom"
}, t.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(t.RESET).addClass("affix");
    var e = this.$target.scrollTop(),
        n = this.$element.offset();
    return this.pinnedOffset = n.top - e
}, t.prototype.checkPositionWithEventLoop = function() {
    setTimeout(e.proxy(this.checkPosition, this), 1)
}, t.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
        var n = this.$element.height(),
            a = this.options.offset,
            i = a.top,
            r = a.bottom,
            o = Math.max(e(document).height(), e(document.body).height());
        "object" != typeof a && (r = i = a), "function" == typeof i && (i = a.top(this.$element)), "function" == typeof r && (r = a.bottom(this.$element));
        var s = this.getState(o, n, i, r);
        if (this.affixed != s) {
            null != this.unpin && this.$element.css("top", "");
            var m = "affix" + (s ? "-" + s : ""),
                u = e.Event(m + ".bs.affix");
            if (this.$element.trigger(u), u.isDefaultPrevented()) return;
            this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(t.RESET).addClass(m).trigger(m.replace("affix", "affixed") + ".bs.affix")
        }
        "bottom" == s && this.$element.offset({
            top: o - n - r
        })
    }
};
var a = e.fn.affix;
e.fn.affix = n, e.fn.affix.Constructor = t, e.fn.affix.noConflict = function() {
    return e.fn.affix = a, this
}, e(window).on("load", function() {
    e('[data-spy="affix"]').each(function() {
        var t = e(this),
            a = t.data();
        a.offset = a.offset || {}, null != a.offsetBottom && (a.offset.bottom = a.offsetBottom), null != a.offsetTop && (a.offset.top = a.offsetTop), n.call(t, a)
    })
})
}(jQuery),
function(e) {
"use strict";
e(document).on("ready", function() {
    jQuery.fn.extend({
        equalHeights: function(n) {
            var t = this;
            n = e.extend({
                innerItem: !1,
                parent: e(this).parent(),
                perRow: !0
            }, n), this.setItemsWithInner = function(n, t, a, i) {
                a ? "auto" == t ? e(n).find(a).height(t) : e(n).find(a).each(function() {
                    var n = t;
                    e(this).siblings().each(function() {
                        n -= e(this).outerHeight()
                    }), a = this;
                    do {
                        var a = e(a).parent();
                        n -= parseInt(e(a).css("padding-top")), n -= parseInt(e(a).css("padding-bottom"))
                    } while (!e(a).is(i));
                    e(this).height(n)
                }) : e(n).height(t)
            };
            var a = e(this);
            return e(n.parent).each(function() {
                var i, r = [],
                    o = 0,
                    s = 0,
                    m = this;
                i = n.parent.length > 1 ? e(this).find(a) : a, t.setItemsWithInner(i, "auto", n.innerItem), e(i).each(function() {
                    var a = e(this).outerWidth(!0),
                        i = e(this).height();
                    if (a + o > e(m).width() && r.length > 0 && n.perRow) return t.setItemsWithInner(r, s, n.innerItem, m), r = [this], s = i, void(o = a);
                    s < i && (s = i), r.push(this), o += a
                }), r.length > 0 && (t.setItemsWithInner(r, s, n.innerItem, m), r = [])
            }), this
        }
    }), e(document).ready(function() {
        e("[data-equalheights]").each(function() {
            var n = e(this).attr("data-equalheights"),
                t = e(this).find(n);
            e(t).equalHeights(), e(window).resize(function() {
                e(t).equalHeights()
            })
        })
    })
})
}(jQuery),
function(e) {
"use strict";
e.fn.appear = function(n, t) {
    var a = e.extend({
        data: void 0,
        one: !0,
        accX: 0,
        accY: 0
    }, t);
    return this.each(function() {
        var t = e(this);
        if (t.appeared = !1, n) {
            var i = e(window),
                r = function() {
                    if (t.is(":visible")) {
                        var e = i.scrollLeft(),
                            n = i.scrollTop(),
                            r = t.offset(),
                            o = r.left,
                            s = r.top,
                            m = a.accX,
                            u = a.accY,
                            l = t.height(),
                            c = i.height(),
                            v = t.width(),
                            d = i.width();
                        s + l + u >= n && s <= n + c + u && o + v + m >= e && o <= e + d + m ? t.appeared || t.trigger("appear", a.data) : t.appeared = !1
                    } else t.appeared = !1
                },
                o = function() {
                    if (t.appeared = !0, a.one) {
                        i.unbind("scroll", r);
                        var o = e.inArray(r, e.fn.appear.checks);
                        o >= 0 && e.fn.appear.checks.splice(o, 1)
                    }
                    n.apply(this, arguments)
                };
            a.one ? t.one("appear", a.data, o) : t.bind("appear", a.data, o), i.scroll(r), e.fn.appear.checks.push(r), r()
        } else t.trigger("appear", a.data)
    })
}, e.extend(e.fn.appear, {
    checks: [],
    timeout: null,
    checkAll: function() {
        var n = e.fn.appear.checks.length;
        if (n > 0)
            for (; n--;) e.fn.appear.checks[n]()
    },
    run: function() {
        e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout), e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
    }
}), e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(n, t) {
    var a = e.fn[t];
    a && (e.fn[t] = function() {
        var n = a.apply(this, arguments);
        return e.fn.appear.run(), n
    })
})
}(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, n, t, a, i) {
        return jQuery.easing[jQuery.easing.def](e, n, t, a, i)
    },
    easeInQuad: function(e, n, t, a, i) {
        return a * (n /= i) * n + t
    },
    easeOutQuad: function(e, n, t, a, i) {
        return -a * (n /= i) * (n - 2) + t
    },
    easeInOutQuad: function(e, n, t, a, i) {
        return (n /= i / 2) < 1 ? a / 2 * n * n + t : -a / 2 * (--n * (n - 2) - 1) + t
    },
    easeInCubic: function(e, n, t, a, i) {
        return a * (n /= i) * n * n + t
    },
    easeOutCubic: function(e, n, t, a, i) {
        return a * ((n = n / i - 1) * n * n + 1) + t
    },
    easeInOutCubic: function(e, n, t, a, i) {
        return (n /= i / 2) < 1 ? a / 2 * n * n * n + t : a / 2 * ((n -= 2) * n * n + 2) + t
    },
    easeInQuart: function(e, n, t, a, i) {
        return a * (n /= i) * n * n * n + t
    },
    easeOutQuart: function(e, n, t, a, i) {
        return -a * ((n = n / i - 1) * n * n * n - 1) + t
    },
    easeInOutQuart: function(e, n, t, a, i) {
        return (n /= i / 2) < 1 ? a / 2 * n * n * n * n + t : -a / 2 * ((n -= 2) * n * n * n - 2) + t
    },
    easeInQuint: function(e, n, t, a, i) {
        return a * (n /= i) * n * n * n * n + t
    },
    easeOutQuint: function(e, n, t, a, i) {
        return a * ((n = n / i - 1) * n * n * n * n + 1) + t
    },
    easeInOutQuint: function(e, n, t, a, i) {
        return (n /= i / 2) < 1 ? a / 2 * n * n * n * n * n + t : a / 2 * ((n -= 2) * n * n * n * n + 2) + t
    },
    easeInSine: function(e, n, t, a, i) {
        return -a * Math.cos(n / i * (Math.PI / 2)) + a + t
    },
    easeOutSine: function(e, n, t, a, i) {
        return a * Math.sin(n / i * (Math.PI / 2)) + t
    },
    easeInOutSine: function(e, n, t, a, i) {
        return -a / 2 * (Math.cos(Math.PI * n / i) - 1) + t
    },
    easeInExpo: function(e, n, t, a, i) {
        return 0 == n ? t : a * Math.pow(2, 10 * (n / i - 1)) + t
    },
    easeOutExpo: function(e, n, t, a, i) {
        return n == i ? t + a : a * (1 - Math.pow(2, -10 * n / i)) + t
    },
    easeInOutExpo: function(e, n, t, a, i) {
        return 0 == n ? t : n == i ? t + a : (n /= i / 2) < 1 ? a / 2 * Math.pow(2, 10 * (n - 1)) + t : a / 2 * (2 - Math.pow(2, -10 * --n)) + t
    },
    easeInCirc: function(e, n, t, a, i) {
        return -a * (Math.sqrt(1 - (n /= i) * n) - 1) + t
    },
    easeOutCirc: function(e, n, t, a, i) {
        return a * Math.sqrt(1 - (n = n / i - 1) * n) + t
    },
    easeInOutCirc: function(e, n, t, a, i) {
        return (n /= i / 2) < 1 ? -a / 2 * (Math.sqrt(1 - n * n) - 1) + t : a / 2 * (Math.sqrt(1 - (n -= 2) * n) + 1) + t
    },
    easeInElastic: function(e, n, t, a, i) {
        var r = 1.70158,
            o = 0,
            s = a;
        if (0 == n) return t;
        if (1 == (n /= i)) return t + a;
        if (o || (o = .3 * i), s < Math.abs(a)) {
            s = a;
            r = o / 4
        } else r = o / (2 * Math.PI) * Math.asin(a / s);
        return -s * Math.pow(2, 10 * (n -= 1)) * Math.sin((n * i - r) * (2 * Math.PI) / o) + t
    },
    easeOutElastic: function(e, n, t, a, i) {
        var r = 1.70158,
            o = 0,
            s = a;
        if (0 == n) return t;
        if (1 == (n /= i)) return t + a;
        if (o || (o = .3 * i), s < Math.abs(a)) {
            s = a;
            r = o / 4
        } else r = o / (2 * Math.PI) * Math.asin(a / s);
        return s * Math.pow(2, -10 * n) * Math.sin((n * i - r) * (2 * Math.PI) / o) + a + t
    },
    easeInOutElastic: function(e, n, t, a, i) {
        var r = 1.70158,
            o = 0,
            s = a;
        if (0 == n) return t;
        if (2 == (n /= i / 2)) return t + a;
        if (o || (o = i * (.3 * 1.5)), s < Math.abs(a)) {
            s = a;
            r = o / 4
        } else r = o / (2 * Math.PI) * Math.asin(a / s);
        return n < 1 ? s * Math.pow(2, 10 * (n -= 1)) * Math.sin((n * i - r) * (2 * Math.PI) / o) * -.5 + t : s * Math.pow(2, -10 * (n -= 1)) * Math.sin((n * i - r) * (2 * Math.PI) / o) * .5 + a + t
    },
    easeInBack: function(e, n, t, a, i, r) {
        return null == r && (r = 1.70158), a * (n /= i) * n * ((r + 1) * n - r) + t
    },
    easeOutBack: function(e, n, t, a, i, r) {
        return null == r && (r = 1.70158), a * ((n = n / i - 1) * n * ((r + 1) * n + r) + 1) + t
    },
    easeInOutBack: function(e, n, t, a, i, r) {
        return null == r && (r = 1.70158), (n /= i / 2) < 1 ? a / 2 * (n * n * ((1 + (r *= 1.525)) * n - r)) + t : a / 2 * ((n -= 2) * n * ((1 + (r *= 1.525)) * n + r) + 2) + t
    },
    easeInBounce: function(e, n, t, a, i) {
        return a - jQuery.easing.easeOutBounce(e, i - n, 0, a, i) + t
    },
    easeOutBounce: function(e, n, t, a, i) {
        return (n /= i) < 1 / 2.75 ? a * (7.5625 * n * n) + t : n < 2 / 2.75 ? a * (7.5625 * (n -= 1.5 / 2.75) * n + .75) + t : n < 2.5 / 2.75 ? a * (7.5625 * (n -= 2.25 / 2.75) * n + .9375) + t : a * (7.5625 * (n -= 2.625 / 2.75) * n + .984375) + t
    },
    easeInOutBounce: function(e, n, t, a, i) {
        return n < i / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * n, 0, a, i) + t : .5 * jQuery.easing.easeOutBounce(e, 2 * n - i, 0, a, i) + .5 * a + t
    }
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(e) {
    var n, t, a, i, r, o, s = "Close",
        m = "BeforeClose",
        u = "MarkupParse",
        l = "Open",
        c = "Change",
        v = "mfp",
        d = "." + v,
        h = "mfp-ready",
        p = "mfp-removing",
        f = "mfp-prevent-close",
        S = function() {},
        g = !!window.jQuery,
        N = e(window),
        G = function(e, t) {
            n.ev.on(v + e + d, t)
        },
        y = function(n, t, a, i) {
            var r = document.createElement("div");
            return r.className = "mfp-" + n, a && (r.innerHTML = a), i ? t && t.appendChild(r) : (r = e(r), t && r.appendTo(t)), r
        },
        b = function(t, a) {
            n.ev.triggerHandler(v + t, a), n.st.callbacks && (t = t.charAt(0).toLowerCase() + t.slice(1), n.st.callbacks[t] && n.st.callbacks[t].apply(n, e.isArray(a) ? a : [a]))
        },
        w = function(t) {
            return t === o && n.currTemplate.closeBtn || (n.currTemplate.closeBtn = e(n.st.closeMarkup.replace("%title%", n.st.tClose)), o = t), n.currTemplate.closeBtn
        },
        k = function() {
            e.magnificPopup.instance || ((n = new S).init(), e.magnificPopup.instance = n)
        };
    S.prototype = {
        constructor: S,
        init: function() {
            var t = navigator.appVersion;
            n.isLowIE = n.isIE8 = document.all && !document.addEventListener, n.isAndroid = /android/gi.test(t), n.isIOS = /iphone|ipad|ipod/gi.test(t), n.supportsTransition = function() {
                var e = document.createElement("p").style,
                    n = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== e.transition) return !0;
                for (; n.length;)
                    if (n.pop() + "Transition" in e) return !0;
                return !1
            }(), n.probablyMobile = n.isAndroid || n.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), a = e(document), n.popupsCache = {}
        },
        open: function(t) {
            var i;
            if (!1 === t.isObj) {
                n.items = t.items.toArray(), n.index = 0;
                var o, s = t.items;
                for (i = 0; i < s.length; i++)
                    if ((o = s[i]).parsed && (o = o.el[0]), o === t.el[0]) {
                        n.index = i;
                        break
                    }
            } else n.items = e.isArray(t.items) ? t.items : [t.items], n.index = t.index || 0;
            if (!n.isOpen) {
                n.types = [], r = "", t.mainEl && t.mainEl.length ? n.ev = t.mainEl.eq(0) : n.ev = a, t.key ? (n.popupsCache[t.key] || (n.popupsCache[t.key] = {}), n.currTemplate = n.popupsCache[t.key]) : n.currTemplate = {}, n.st = e.extend(!0, {}, e.magnificPopup.defaults, t), n.fixedContentPos = "auto" === n.st.fixedContentPos ? !n.probablyMobile : n.st.fixedContentPos, n.st.modal && (n.st.closeOnContentClick = !1, n.st.closeOnBgClick = !1, n.st.showCloseBtn = !1, n.st.enableEscapeKey = !1), n.bgOverlay || (n.bgOverlay = y("bg").on("click" + d, function() {
                    n.close()
                }), n.wrap = y("wrap").attr("tabindex", -1).on("click" + d, function(e) {
                    n._checkIfClose(e.target) && n.close()
                }), n.container = y("container", n.wrap)), n.contentContainer = y("content"), n.st.preloader && (n.preloader = y("preloader", n.container, n.st.tLoading));
                var m = e.magnificPopup.modules;
                for (i = 0; i < m.length; i++) {
                    var c = m[i];
                    c = c.charAt(0).toUpperCase() + c.slice(1), n["init" + c].call(n)
                }
                b("BeforeOpen"), n.st.showCloseBtn && (n.st.closeBtnInside ? (G(u, function(e, n, t, a) {
                    t.close_replaceWith = w(a.type)
                }), r += " mfp-close-btn-in") : n.wrap.append(w())), n.st.alignTop && (r += " mfp-align-top"), n.fixedContentPos ? n.wrap.css({
                    overflow: n.st.overflowY,
                    overflowX: "hidden",
                    overflowY: n.st.overflowY
                }) : n.wrap.css({
                    top: N.scrollTop(),
                    position: "absolute"
                }), (!1 === n.st.fixedBgPos || "auto" === n.st.fixedBgPos && !n.fixedContentPos) && n.bgOverlay.css({
                    height: a.height(),
                    position: "absolute"
                }), n.st.enableEscapeKey && a.on("keyup" + d, function(e) {
                    27 === e.keyCode && n.close()
                }), N.on("resize" + d, function() {
                    n.updateSize()
                }), n.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && n.wrap.addClass(r);
                var v = n.wH = N.height(),
                    p = {};
                if (n.fixedContentPos && n._hasScrollBar(v)) {
                    var f = n._getScrollbarSize();
                    f && (p.marginRight = f)
                }
                n.fixedContentPos && (n.isIE7 ? e("body, html").css("overflow", "hidden") : p.overflow = "hidden");
                var S = n.st.mainClass;
                return n.isIE7 && (S += " mfp-ie7"), S && n._addClassToMFP(S), n.updateItemHTML(), b("BuildControls"), e("html").css(p), n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo || e(document.body)), n._lastFocusedEl = document.activeElement, setTimeout(function() {
                    n.content ? (n._addClassToMFP(h), n._setFocus()) : n.bgOverlay.addClass(h), a.on("focusin" + d, n._onFocusIn)
                }, 16), n.isOpen = !0, n.updateSize(v), b(l), t
            }
            n.updateItemHTML()
        },
        close: function() {
            n.isOpen && (b(m), n.isOpen = !1, n.st.removalDelay && !n.isLowIE && n.supportsTransition ? (n._addClassToMFP(p), setTimeout(function() {
                n._close()
            }, n.st.removalDelay)) : n._close())
        },
        _close: function() {
            b(s);
            var t = p + " " + h + " ";
            if (n.bgOverlay.detach(), n.wrap.detach(), n.container.empty(), n.st.mainClass && (t += n.st.mainClass + " "), n._removeClassFromMFP(t), n.fixedContentPos) {
                var i = {
                    marginRight: ""
                };
                n.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i)
            }
            a.off("keyup.mfp focusin" + d), n.ev.off(d), n.wrap.attr("class", "mfp-wrap").removeAttr("style"), n.bgOverlay.attr("class", "mfp-bg"), n.container.attr("class", "mfp-container"), !n.st.showCloseBtn || n.st.closeBtnInside && !0 !== n.currTemplate[n.currItem.type] || n.currTemplate.closeBtn && n.currTemplate.closeBtn.detach(), n.st.autoFocusLast && n._lastFocusedEl && e(n._lastFocusedEl).focus(), n.currItem = null, n.content = null, n.currTemplate = null, n.prevHeight = 0, b("AfterClose")
        },
        updateSize: function(e) {
            if (n.isIOS) {
                var t = document.documentElement.clientWidth / window.innerWidth,
                    a = window.innerHeight * t;
                n.wrap.css("height", a), n.wH = a
            } else n.wH = e || N.height();
            n.fixedContentPos || n.wrap.css("height", n.wH), b("Resize")
        },
        updateItemHTML: function() {
            var t = n.items[n.index];
            n.contentContainer.detach(), n.content && n.content.detach(), t.parsed || (t = n.parseEl(n.index));
            var a = t.type;
            if (b("BeforeChange", [n.currItem ? n.currItem.type : "", a]), n.currItem = t, !n.currTemplate[a]) {
                var r = !!n.st[a] && n.st[a].markup;
                b("FirstMarkupParse", r), n.currTemplate[a] = !r || e(r)
            }
            i && i !== t.type && n.container.removeClass("mfp-" + i + "-holder");
            var o = n["get" + a.charAt(0).toUpperCase() + a.slice(1)](t, n.currTemplate[a]);
            n.appendContent(o, a), t.preloaded = !0, b(c, t), i = t.type, n.container.prepend(n.contentContainer), b("AfterChange")
        },
        appendContent: function(e, t) {
            n.content = e, e ? n.st.showCloseBtn && n.st.closeBtnInside && !0 === n.currTemplate[t] ? n.content.find(".mfp-close").length || n.content.append(w()) : n.content = e : n.content = "", b("BeforeAppend"), n.container.addClass("mfp-" + t + "-holder"), n.contentContainer.append(n.content)
        },
        parseEl: function(t) {
            var a, i = n.items[t];
            if (i.tagName ? i = {
                    el: e(i)
                } : (a = i.type, i = {
                    data: i,
                    src: i.src
                }), i.el) {
                for (var r = n.types, o = 0; o < r.length; o++)
                    if (i.el.hasClass("mfp-" + r[o])) {
                        a = r[o];
                        break
                    }
                i.src = i.el.attr("data-mfp-src"), i.src || (i.src = i.el.attr("href"))
            }
            return i.type = a || n.st.type || "inline", i.index = t, i.parsed = !0, n.items[t] = i, b("ElementParse", i), n.items[t]
        },
        addGroup: function(e, t) {
            var a = function(a) {
                a.mfpEl = this, n._openClick(a, e, t)
            };
            t || (t = {});
            var i = "click.magnificPopup";
            t.mainEl = e, t.items ? (t.isObj = !0, e.off(i).on(i, a)) : (t.isObj = !1, t.delegate ? e.off(i).on(i, t.delegate, a) : (t.items = e, e.off(i).on(i, a)))
        },
        _openClick: function(t, a, i) {
            if ((void 0 !== i.midClick ? i.midClick : e.magnificPopup.defaults.midClick) || !(2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey)) {
                var r = void 0 !== i.disableOn ? i.disableOn : e.magnificPopup.defaults.disableOn;
                if (r)
                    if (e.isFunction(r)) {
                        if (!r.call(n)) return !0
                    } else if (N.width() < r) return !0;
                t.type && (t.preventDefault(), n.isOpen && t.stopPropagation()), i.el = e(t.mfpEl), i.delegate && (i.items = a.find(i.delegate)), n.open(i)
            }
        },
        updateStatus: function(e, a) {
            if (n.preloader) {
                t !== e && n.container.removeClass("mfp-s-" + t), a || "loading" !== e || (a = n.st.tLoading);
                var i = {
                    status: e,
                    text: a
                };
                b("UpdateStatus", i), e = i.status, a = i.text, n.preloader.html(a), n.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }), n.container.addClass("mfp-s-" + e), t = e
            }
        },
        _checkIfClose: function(t) {
            if (!e(t).hasClass(f)) {
                var a = n.st.closeOnContentClick,
                    i = n.st.closeOnBgClick;
                if (a && i) return !0;
                if (!n.content || e(t).hasClass("mfp-close") || n.preloader && t === n.preloader[0]) return !0;
                if (t === n.content[0] || e.contains(n.content[0], t)) {
                    if (a) return !0
                } else if (i && e.contains(document, t)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            n.bgOverlay.addClass(e), n.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e), n.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (n.isIE7 ? a.height() : document.body.scrollHeight) > (e || N.height())
        },
        _setFocus: function() {
            (n.st.focus ? n.content.find(n.st.focus).eq(0) : n.wrap).focus()
        },
        _onFocusIn: function(t) {
            return t.target === n.wrap[0] || e.contains(n.wrap[0], t.target) ? void 0 : (n._setFocus(), !1)
        },
        _parseMarkup: function(n, t, a) {
            var i;
            a.data && (t = e.extend(a.data, t)), b(u, [n, t, a]), e.each(t, function(t, a) {
                if (void 0 === a || !1 === a) return !0;
                if ((i = t.split("_")).length > 1) {
                    var r = n.find(d + "-" + i[0]);
                    if (r.length > 0) {
                        var o = i[1];
                        "replaceWith" === o ? r[0] !== a[0] && r.replaceWith(a) : "img" === o ? r.is("img") ? r.attr("src", a) : r.replaceWith(e("<img>").attr("src", a).attr("class", r.attr("class"))) : r.attr(i[1], a)
                    }
                } else n.find(d + "-" + t).html(a)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === n.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), n.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return n.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: S.prototype,
        modules: [],
        open: function(n, t) {
            return k(), (n = n ? e.extend(!0, {}, n) : {}).isObj = !0, n.index = t || 0, this.instance.open(n)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(n, t) {
            t.options && (e.magnificPopup.defaults[n] = t.options), e.extend(this.proto, t.proto), this.modules.push(n)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, e.fn.magnificPopup = function(t) {
        k();
        var a = e(this);
        if ("string" == typeof t)
            if ("open" === t) {
                var i, r = g ? a.data("magnificPopup") : a[0].magnificPopup,
                    o = parseInt(arguments[1], 10) || 0;
                r.items ? i = r.items[o] : (i = a, r.delegate && (i = i.find(r.delegate)), i = i.eq(o)), n._openClick({
                    mfpEl: i
                }, a, r)
            } else n.isOpen && n[t].apply(n, Array.prototype.slice.call(arguments, 1));
        else t = e.extend(!0, {}, t), g ? a.data("magnificPopup", t) : a[0].magnificPopup = t, n.addGroup(a, t);
        return a
    };
    var x, C, _, T = "inline",
        E = function() {
            _ && (C.after(_.addClass(x)).detach(), _ = null)
        };
    e.magnificPopup.registerModule(T, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                n.types.push(T), G(s + "." + T, function() {
                    E()
                })
            },
            getInline: function(t, a) {
                if (E(), t.src) {
                    var i = n.st.inline,
                        r = e(t.src);
                    if (r.length) {
                        var o = r[0].parentNode;
                        o && o.tagName && (C || (x = i.hiddenClass, C = y(x), x = "mfp-" + x), _ = r.after(C).detach().removeClass(x)), n.updateStatus("ready")
                    } else n.updateStatus("error", i.tNotFound), r = e("<div>");
                    return t.inlineElement = r, r
                }
                return n.updateStatus("ready"), n._parseMarkup(a, {}, t), a
            }
        }
    });
    var A, M = "ajax",
        I = function() {
            A && e(document.body).removeClass(A)
        },
        z = function() {
            I(), n.req && n.req.abort()
        };
    e.magnificPopup.registerModule(M, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                n.types.push(M), A = n.st.ajax.cursor, G(s + "." + M, z), G("BeforeChange." + M, z)
            },
            getAjax: function(t) {
                A && e(document.body).addClass(A), n.updateStatus("loading");
                var a = e.extend({
                    url: t.src,
                    success: function(a, i, r) {
                        var o = {
                            data: a,
                            xhr: r
                        };
                        b("ParseAjax", o), n.appendContent(e(o.data), M), t.finished = !0, I(), n._setFocus(), setTimeout(function() {
                            n.wrap.addClass(h)
                        }, 16), n.updateStatus("ready"), b("AjaxContentAdded")
                    },
                    error: function() {
                        I(), t.finished = t.loadError = !0, n.updateStatus("error", n.st.ajax.tError.replace("%url%", t.src))
                    }
                }, n.st.ajax.settings);
                return n.req = e.ajax(a), ""
            }
        }
    });
    var L, D = function(t) {
        if (t.data && void 0 !== t.data.title) return t.data.title;
        var a = n.st.image.titleSrc;
        if (a) {
            if (e.isFunction(a)) return a.call(n, t);
            if (t.el) return t.el.attr(a) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var t = n.st.image,
                    a = ".image";
                n.types.push("image"), G(l + a, function() {
                    "image" === n.currItem.type && t.cursor && e(document.body).addClass(t.cursor)
                }), G(s + a, function() {
                    t.cursor && e(document.body).removeClass(t.cursor), N.off("resize" + d)
                }), G("Resize" + a, n.resizeImage), n.isLowIE && G("AfterChange", n.resizeImage)
            },
            resizeImage: function() {
                var e = n.currItem;
                if (e && e.img && n.st.image.verticalFit) {
                    var t = 0;
                    n.isLowIE && (t = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", n.wH - t)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0, L && clearInterval(L), e.isCheckingImgSize = !1, b("ImageHasSize", e), e.imgHidden && (n.content && n.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var t = 0,
                    a = e.img[0],
                    i = function(r) {
                        L && clearInterval(L), L = setInterval(function() {
                            return a.naturalWidth > 0 ? void n._onImageHasSize(e) : (t > 200 && clearInterval(L), void(3 === ++t ? i(10) : 40 === t ? i(50) : 100 === t && i(500)))
                        }, r)
                    };
                i(1)
            },
            getImage: function(t, a) {
                var i = 0,
                    r = function() {
                        t && (t.img[0].complete ? (t.img.off(".mfploader"), t === n.currItem && (n._onImageHasSize(t), n.updateStatus("ready")), t.hasSize = !0, t.loaded = !0, b("ImageLoadComplete")) : 200 > ++i ? setTimeout(r, 100) : o())
                    },
                    o = function() {
                        t && (t.img.off(".mfploader"), t === n.currItem && (n._onImageHasSize(t), n.updateStatus("error", s.tError.replace("%url%", t.src))), t.hasSize = !0, t.loaded = !0, t.loadError = !0)
                    },
                    s = n.st.image,
                    m = a.find(".mfp-img");
                if (m.length) {
                    var u = document.createElement("img");
                    u.className = "mfp-img", t.el && t.el.find("img").length && (u.alt = t.el.find("img").attr("alt")), t.img = e(u).on("load.mfploader", r).on("error.mfploader", o), u.src = t.src, m.is("img") && (t.img = t.img.clone()), (u = t.img[0]).naturalWidth > 0 ? t.hasSize = !0 : u.width || (t.hasSize = !1)
                }
                return n._parseMarkup(a, {
                    title: D(t),
                    img_replaceWith: t.img
                }, t), n.resizeImage(), t.hasSize ? (L && clearInterval(L), t.loadError ? (a.addClass("mfp-loading"), n.updateStatus("error", s.tError.replace("%url%", t.src))) : (a.removeClass("mfp-loading"), n.updateStatus("ready")), a) : (n.updateStatus("loading"), t.loading = !0, t.hasSize || (t.imgHidden = !0, a.addClass("mfp-loading"), n.findImageSize(t)), a)
            }
        }
    });
    var j;
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, t = n.st.zoom,
                    a = ".zoom";
                if (t.enabled && n.supportsTransition) {
                    var i, r, o = t.duration,
                        u = function(e) {
                            var n = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                a = "all " + t.duration / 1e3 + "s " + t.easing,
                                i = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                r = "transition";
                            return i["-webkit-" + r] = i["-moz-" + r] = i["-o-" + r] = i[r] = a, n.css(i), n
                        },
                        l = function() {
                            n.content.css("visibility", "visible")
                        };
                    G("BuildControls" + a, function() {
                        if (n._allowZoom()) {
                            if (clearTimeout(i), n.content.css("visibility", "hidden"), !(e = n._getItemToZoom())) return void l();
                            (r = u(e)).css(n._getOffset()), n.wrap.append(r), i = setTimeout(function() {
                                r.css(n._getOffset(!0)), i = setTimeout(function() {
                                    l(), setTimeout(function() {
                                        r.remove(), e = r = null, b("ZoomAnimationEnded")
                                    }, 16)
                                }, o)
                            }, 16)
                        }
                    }), G(m + a, function() {
                        if (n._allowZoom()) {
                            if (clearTimeout(i), n.st.removalDelay = o, !e) {
                                if (!(e = n._getItemToZoom())) return;
                                r = u(e)
                            }
                            r.css(n._getOffset(!0)), n.wrap.append(r), n.content.css("visibility", "hidden"), setTimeout(function() {
                                r.css(n._getOffset())
                            }, 16)
                        }
                    }), G(s + a, function() {
                        n._allowZoom() && (l(), r && r.remove(), e = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === n.currItem.type
            },
            _getItemToZoom: function() {
                return !!n.currItem.hasSize && n.currItem.img
            },
            _getOffset: function(t) {
                var a, i = (a = t ? n.currItem.img : n.st.zoom.opener(n.currItem.el || n.currItem)).offset(),
                    r = parseInt(a.css("padding-top"), 10),
                    o = parseInt(a.css("padding-bottom"), 10);
                i.top -= e(window).scrollTop() - r;
                var s = {
                    width: a.width(),
                    height: (g ? a.innerHeight() : a[0].offsetHeight) - o - r
                };
                return void 0 === j && (j = void 0 !== document.createElement("p").style.MozTransform), j ? s["-moz-transform"] = s.transform = "translate(" + i.left + "px," + i.top + "px)" : (s.left = i.left, s.top = i.top), s
            }
        }
    });
    var B = "iframe",
        P = function(e) {
            if (n.currTemplate[B]) {
                var t = n.currTemplate[B].find("iframe");
                t.length && (e || (t[0].src = "//about:blank"), n.isIE8 && t.css("display", e ? "block" : "none"))
            }
        };
    e.magnificPopup.registerModule(B, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                n.types.push(B), G("BeforeChange", function(e, n, t) {
                    n !== t && (n === B ? P() : t === B && P(!0))
                }), G(s + "." + B, function() {
                    P()
                })
            },
            getIframe: function(t, a) {
                var i = t.src,
                    r = n.st.iframe;
                e.each(r.patterns, function() {
                    return i.indexOf(this.index) > -1 ? (this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)), i = this.src.replace("%id%", i), !1) : void 0
                });
                var o = {};
                return r.srcAction && (o[r.srcAction] = i), n._parseMarkup(a, o, t), n.updateStatus("ready"), a
            }
        }
    });
    var H = function(e) {
            var t = n.items.length;
            return e > t - 1 ? e - t : 0 > e ? t + e : e
        },
        O = function(e, n, t) {
            return e.replace(/%curr%/gi, n + 1).replace(/%total%/gi, t)
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var t = n.st.gallery,
                    i = ".mfp-gallery";
                return n.direction = !0, !(!t || !t.enabled) && (r += " mfp-gallery", G(l + i, function() {
                    t.navigateByImgClick && n.wrap.on("click" + i, ".mfp-img", function() {
                        return n.items.length > 1 ? (n.next(), !1) : void 0
                    }), a.on("keydown" + i, function(e) {
                        37 === e.keyCode ? n.prev() : 39 === e.keyCode && n.next()
                    })
                }), G("UpdateStatus" + i, function(e, t) {
                    t.text && (t.text = O(t.text, n.currItem.index, n.items.length))
                }), G(u + i, function(e, a, i, r) {
                    var o = n.items.length;
                    i.counter = o > 1 ? O(t.tCounter, r.index, o) : ""
                }), G("BuildControls" + i, function() {
                    if (n.items.length > 1 && t.arrows && !n.arrowLeft) {
                        var a = t.arrowMarkup,
                            i = n.arrowLeft = e(a.replace(/%title%/gi, t.tPrev).replace(/%dir%/gi, "left")).addClass(f),
                            r = n.arrowRight = e(a.replace(/%title%/gi, t.tNext).replace(/%dir%/gi, "right")).addClass(f);
                        i.click(function() {
                            n.prev()
                        }), r.click(function() {
                            n.next()
                        }), n.container.append(i.add(r))
                    }
                }), G(c + i, function() {
                    n._preloadTimeout && clearTimeout(n._preloadTimeout), n._preloadTimeout = setTimeout(function() {
                        n.preloadNearbyImages(), n._preloadTimeout = null
                    }, 16)
                }), void G(s + i, function() {
                    a.off(i), n.wrap.off("click" + i), n.arrowRight = n.arrowLeft = null
                }))
            },
            next: function() {
                n.direction = !0, n.index = H(n.index + 1), n.updateItemHTML()
            },
            prev: function() {
                n.direction = !1, n.index = H(n.index - 1), n.updateItemHTML()
            },
            goTo: function(e) {
                n.direction = e >= n.index, n.index = e, n.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, t = n.st.gallery.preload,
                    a = Math.min(t[0], n.items.length),
                    i = Math.min(t[1], n.items.length);
                for (e = 1; e <= (n.direction ? i : a); e++) n._preloadItem(n.index + e);
                for (e = 1; e <= (n.direction ? a : i); e++) n._preloadItem(n.index - e)
            },
            _preloadItem: function(t) {
                if (t = H(t), !n.items[t].preloaded) {
                    var a = n.items[t];
                    a.parsed || (a = n.parseEl(t)), b("LazyLoad", a), "image" === a.type && (a.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        a.hasSize = !0
                    }).on("error.mfploader", function() {
                        a.hasSize = !0, a.loadError = !0, b("LazyLoadError", a)
                    }).attr("src", a.src)), a.preloaded = !0
                }
            }
        }
    });
    var R = "retina";
    e.magnificPopup.registerModule(R, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var e = n.st.retina,
                        t = e.ratio;
                    (t = isNaN(t) ? t() : t) > 1 && (G("ImageHasSize." + R, function(e, n) {
                        n.img.css({
                            "max-width": n.img[0].naturalWidth / t,
                            width: "100%"
                        })
                    }), G("ElementParse." + R, function(n, a) {
                        a.src = e.replaceSrc(a, t)
                    }))
                }
            }
        }
    }), k()
}), window.Modernizr = function(e, n, t) {
    function a(e) {
        p.cssText = e
    }

    function i(e, n) {
        return typeof e === n
    }

    function r(e, n) {
        return !!~("" + e).indexOf(n)
    }

    function o(e, n) {
        for (var a in e) {
            var i = e[a];
            if (!r(i, "-") && p[i] !== t) return "pfx" != n || i
        }
        return !1
    }

    function s(e, n, a) {
        for (var r in e) {
            var o = n[e[r]];
            if (o !== t) return !1 === a ? e[r] : i(o, "function") ? o.bind(a || n) : o
        }
        return !1
    }

    function m(e, n, t) {
        var a = e.charAt(0).toUpperCase() + e.slice(1),
            r = (e + " " + y.join(a + " ") + a).split(" ");
        return i(n, "string") || i(n, "undefined") ? o(r, n) : s(r = (e + " " + b.join(a + " ") + a).split(" "), n, t)
    }
    var u, l, c = {},
        v = n.documentElement,
        d = "modernizr",
        h = n.createElement(d),
        p = h.style,
        f = n.createElement("input"),
        S = ":)",
        g = {}.toString,
        N = " -webkit- -moz- -o- -ms- ".split(" "),
        G = "Webkit Moz O ms",
        y = G.split(" "),
        b = G.toLowerCase().split(" "),
        w = "http://www.w3.org/2000/svg",
        k = {},
        x = {},
        C = {},
        _ = [],
        T = _.slice,
        E = function(e, t, a, i) {
            var r, o, s, m, u = n.createElement("div"),
                l = n.body,
                c = l || n.createElement("body");
            if (parseInt(a, 10))
                for (; a--;)(s = n.createElement("div")).id = i ? i[a] : d + (a + 1), u.appendChild(s);
            return r = ["&#173;", '<style id="s', d, '">', e, "</style>"].join(""), u.id = d, (l ? u : c).innerHTML += r, c.appendChild(u), l || (c.style.background = "", c.style.overflow = "hidden", m = v.style.overflow, v.style.overflow = "hidden", v.appendChild(c)), o = t(u, e), l ? u.parentNode.removeChild(u) : (c.parentNode.removeChild(c), v.style.overflow = m), !!o
        },
        A = function() {
            var e = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return function(a, r) {
                r = r || n.createElement(e[a] || "div");
                var o = (a = "on" + a) in r;
                return o || (r.setAttribute || (r = n.createElement("div")), r.setAttribute && r.removeAttribute && (r.setAttribute(a, ""), o = i(r[a], "function"), i(r[a], "undefined") || (r[a] = t), r.removeAttribute(a))), r = null, o
            }
        }(),
        M = {}.hasOwnProperty;
    for (var I in l = i(M, "undefined") || i(M.call, "undefined") ? function(e, n) {
            return n in e && i(e.constructor.prototype[n], "undefined")
        } : function(e, n) {
            return M.call(e, n)
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var n = this;
            if ("function" != typeof n) throw new TypeError;
            var t = T.call(arguments, 1),
                a = function() {
                    if (this instanceof a) {
                        var i = function() {};
                        i.prototype = n.prototype;
                        var r = new i,
                            o = n.apply(r, t.concat(T.call(arguments)));
                        return Object(o) === o ? o : r
                    }
                    return n.apply(e, t.concat(T.call(arguments)))
                };
            return a
        }), k.flexbox = function() {
            return m("flexWrap")
        }, k.canvas = function() {
            var e = n.createElement("canvas");
            return !!e.getContext && !!e.getContext("2d")
        }, k.canvastext = function() {
            return !!c.canvas && !!i(n.createElement("canvas").getContext("2d").fillText, "function")
        }, k.webgl = function() {
            return !!e.WebGLRenderingContext
        }, k.touch = function() {
            var t;
            return "ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch ? t = !0 : E(["@media (", N.join("touch-enabled),("), d, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
                t = 9 === e.offsetTop
            }), t
        }, k.geolocation = function() {
            return "geolocation" in navigator
        }, k.postmessage = function() {
            return !!e.postMessage
        }, k.websqldatabase = function() {
            return !!e.openDatabase
        }, k.indexedDB = function() {
            return !!m("indexedDB", e)
        }, k.hashchange = function() {
            return A("hashchange", e) && (n.documentMode === t || n.documentMode > 7)
        }, k.history = function() {
            return !!e.history && !!history.pushState
        }, k.draganddrop = function() {
            var e = n.createElement("div");
            return "draggable" in e || "ondragstart" in e && "ondrop" in e
        }, k.websockets = function() {
            return "WebSocket" in e || "MozWebSocket" in e
        }, k.rgba = function() {
            return a("background-color:rgba(150,255,150,.5)"), r(p.backgroundColor, "rgba")
        }, k.hsla = function() {
            return a("background-color:hsla(120,40%,100%,.5)"), r(p.backgroundColor, "rgba") || r(p.backgroundColor, "hsla")
        }, k.multiplebgs = function() {
            return a("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(p.background)
        }, k.backgroundsize = function() {
            return m("backgroundSize")
        }, k.borderimage = function() {
            return m("borderImage")
        }, k.borderradius = function() {
            return m("borderRadius")
        }, k.boxshadow = function() {
            return m("boxShadow")
        }, k.textshadow = function() {
            return "" === n.createElement("div").style.textShadow
        }, k.opacity = function() {
            return e = "opacity:.55", a(N.join(e + ";") + (n || "")), /^0.55$/.test(p.opacity);
            var e, n
        }, k.cssanimations = function() {
            return m("animationName")
        }, k.csscolumns = function() {
            return m("columnCount")
        }, k.cssgradients = function() {
            var e = "background-image:";
            return a((e + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + e) + N.join("linear-gradient(left top,#9f9, white);" + e)).slice(0, -e.length)), r(p.backgroundImage, "gradient")
        }, k.cssreflections = function() {
            return m("boxReflect")
        }, k.csstransforms = function() {
            return !!m("transform")
        }, k.csstransforms3d = function() {
            var e = !!m("perspective");
            return e && "webkitPerspective" in v.style && E("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(n, t) {
                e = 9 === n.offsetLeft && 3 === n.offsetHeight
            }), e
        }, k.csstransitions = function() {
            return m("transition")
        }, k.fontface = function() {
            var e;
            return E('@font-face {font-family:"font";src:url("https://")}', function(t, a) {
                var i = n.getElementById("smodernizr"),
                    r = i.sheet || i.styleSheet,
                    o = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : "";
                e = /src/i.test(o) && 0 === o.indexOf(a.split(" ")[0])
            }), e
        }, k.generatedcontent = function() {
            var e;
            return E(["#", d, "{font:0/0 a}#", d, ':after{content:"', S, '";visibility:hidden;font:3px/1 a}'].join(""), function(n) {
                e = n.offsetHeight >= 3
            }), e
        }, k.video = function() {
            var e = n.createElement("video"),
                t = !1;
            try {
                (t = !!e.canPlayType) && ((t = new Boolean(t)).ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (e) {}
            return t
        }, k.audio = function() {
            var e = n.createElement("audio"),
                t = !1;
            try {
                (t = !!e.canPlayType) && ((t = new Boolean(t)).ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (e) {}
            return t
        }, k.localstorage = function() {
            try {
                return localStorage.setItem(d, d), localStorage.removeItem(d), !0
            } catch (e) {
                return !1
            }
        }, k.sessionstorage = function() {
            try {
                return sessionStorage.setItem(d, d), sessionStorage.removeItem(d), !0
            } catch (e) {
                return !1
            }
        }, k.webworkers = function() {
            return !!e.Worker
        }, k.applicationcache = function() {
            return !!e.applicationCache
        }, k.svg = function() {
            return !!n.createElementNS && !!n.createElementNS(w, "svg").createSVGRect
        }, k.inlinesvg = function() {
            var e = n.createElement("div");
            return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == w
        }, k.smil = function() {
            return !!n.createElementNS && /SVGAnimate/.test(g.call(n.createElementNS(w, "animate")))
        }, k.svgclippaths = function() {
            return !!n.createElementNS && /SVGClipPath/.test(g.call(n.createElementNS(w, "clipPath")))
        }, k) l(k, I) && (u = I.toLowerCase(), c[u] = k[I](), _.push((c[u] ? "" : "no-") + u));
    return c.input || (c.input = function(t) {
            for (var a = 0, i = t.length; a < i; a++) C[t[a]] = t[a] in f;
            return C.list && (C.list = !!n.createElement("datalist") && !!e.HTMLDataListElement), C
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), c.inputtypes = function(e) {
            for (var a, i, r, o = 0, s = e.length; o < s; o++) f.setAttribute("type", i = e[o]), (a = "text" !== f.type) && (f.value = S, f.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(i) && f.style.WebkitAppearance !== t ? (v.appendChild(f), a = (r = n.defaultView).getComputedStyle && "textfield" !== r.getComputedStyle(f, null).WebkitAppearance && 0 !== f.offsetHeight, v.removeChild(f)) : /^(search|tel)$/.test(i) || (a = /^(url|email)$/.test(i) ? f.checkValidity && !1 === f.checkValidity() : f.value != S)), x[e[o]] = !!a;
            return x
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))), c.addTest = function(e, n) {
            if ("object" == typeof e)
                for (var a in e) l(e, a) && c.addTest(a, e[a]);
            else {
                if (e = e.toLowerCase(), c[e] !== t) return c;
                n = "function" == typeof n ? n() : n, v.className += " " + (n ? "" : "no-") + e, c[e] = n
            }
            return c
        }, a(""), h = f = null,
        function(e, n) {
            function t() {
                var e = h.elements;
                return "string" == typeof e ? e.split(" ") : e
            }

            function a(e) {
                var n = d[e[c]];
                return n || (n = {}, v++, e[c] = v, d[v] = n), n
            }

            function i(e, t, i) {
                return t || (t = n), s ? t.createElement(e) : (i || (i = a(t)), !(r = i.cache[e] ? i.cache[e].cloneNode() : l.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e)).canHaveChildren || u.test(e) || r.tagUrn ? r : i.frag.appendChild(r));
                var r
            }

            function r(e) {
                e || (e = n);
                var r = a(e);
                return h.shivCSS && !o && !r.hasCSS && (r.hasCSS = !! function(e, n) {
                    var t = e.createElement("p"),
                        a = e.getElementsByTagName("head")[0] || e.documentElement;
                    return t.innerHTML = "x<style>" + n + "</style>", a.insertBefore(t.lastChild, a.firstChild)
                }(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), s || function(e, n) {
                    n.cache || (n.cache = {}, n.createElem = e.createElement, n.createFrag = e.createDocumentFragment, n.frag = n.createFrag()), e.createElement = function(t) {
                        return h.shivMethods ? i(t, e, n) : n.createElem(t)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + t().join().replace(/[\w\-]+/g, function(e) {
                        return n.createElem(e), n.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(h, n.frag)
                }(e, r), e
            }
            var o, s, m = e.html5 || {},
                u = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                l = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                c = "_html5shiv",
                v = 0,
                d = {};
            ! function() {
                try {
                    var e = n.createElement("a");
                    e.innerHTML = "<xyz></xyz>", o = "hidden" in e, s = 1 == e.childNodes.length || function() {
                        n.createElement("a");
                        var e = n.createDocumentFragment();
                        return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
                    }()
                } catch (e) {
                    o = !0, s = !0
                }
            }();
            var h = {
                elements: m.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                version: "3.7.0",
                shivCSS: !1 !== m.shivCSS,
                supportsUnknownElements: s,
                shivMethods: !1 !== m.shivMethods,
                type: "default",
                shivDocument: r,
                createElement: i,
                createDocumentFragment: function(e, i) {
                    if (e || (e = n), s) return e.createDocumentFragment();
                    for (var r = (i = i || a(e)).frag.cloneNode(), o = 0, m = t(), u = m.length; o < u; o++) r.createElement(m[o]);
                    return r
                }
            };
            e.html5 = h, r(n)
        }(this, n), c._version = "2.8.3", c._prefixes = N, c._domPrefixes = b, c._cssomPrefixes = y, c.hasEvent = A, c.testProp = function(e) {
            return o([e])
        }, c.testAllProps = m, c.testStyles = E, c.prefixed = function(e, n, t) {
            return n ? m(e, n, t) : m(e, "pfx")
        }, v.className = v.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + _.join(" "), c
}(this, this.document),
function(e, n, t) {
    function a(e) {
        return "[object Function]" == f.call(e)
    }

    function i(e) {
        return "string" == typeof e
    }

    function r() {}

    function o(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e
    }

    function s() {
        var e = S.shift();
        g = 1, e ? e.t ? h(function() {
            ("c" == e.t ? v.injectCss : v.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }, 0) : (e(), s()) : g = 0
    }

    function m(e, t, a, i, r, m, u) {
        function l(n) {
            if (!d && o(c.readyState) && (N.r = d = 1, !g && s(), c.onload = c.onreadystatechange = null, n))
                for (var a in "img" != e && h(function() {
                        y.removeChild(c)
                    }, 50), C[t]) C[t].hasOwnProperty(a) && C[t][a].onload()
        }
        u = u || v.errorTimeout;
        var c = n.createElement(e),
            d = 0,
            f = 0,
            N = {
                t: a,
                s: t,
                e: r,
                a: m,
                x: u
            };
        1 === C[t] && (f = 1, C[t] = []), "object" == e ? c.data = t : (c.src = t, c.type = e), c.width = c.height = "0", c.onerror = c.onload = c.onreadystatechange = function() {
            l.call(this, f)
        }, S.splice(i, 0, N), "img" != e && (f || 2 === C[t] ? (y.insertBefore(c, G ? null : p), h(l, u)) : C[t].push(c))
    }

    function u(e, n, t, a, r) {
        return g = 0, n = n || "j", i(e) ? m("c" == n ? w : b, e, n, this.i++, t, a, r) : (S.splice(this.i++, 0, e), 1 == S.length && s()), this
    }

    function l() {
        var e = v;
        return e.loader = {
            load: u,
            i: 0
        }, e
    }
    var c, v, d = n.documentElement,
        h = e.setTimeout,
        p = n.getElementsByTagName("script")[0],
        f = {}.toString,
        S = [],
        g = 0,
        N = "MozAppearance" in d.style,
        G = N && !!n.createRange().compareNode,
        y = G ? d : p.parentNode,
        b = (d = e.opera && "[object Opera]" == f.call(e.opera), d = !!n.attachEvent && !d, N ? "object" : d ? "script" : "img"),
        w = d ? "script" : b,
        k = Array.isArray || function(e) {
            return "[object Array]" == f.call(e)
        },
        x = [],
        C = {},
        _ = {
            timeout: function(e, n) {
                return n.length && (e.timeout = n[0]), e
            }
        };
    (v = function(e) {
        function n(e, n, i, r, o) {
            var s = function(e) {
                    e = e.split("!");
                    var n, t, a, i = x.length,
                        r = e.pop(),
                        o = e.length;
                    for (r = {
                            url: r,
                            origUrl: r,
                            prefixes: e
                        }, t = 0; t < o; t++) a = e[t].split("="), (n = _[a.shift()]) && (r = n(r, a));
                    for (t = 0; t < i; t++) r = x[t](r);
                    return r
                }(e),
                m = s.autoCallback;
            s.url.split(".").pop().split("?").shift(), s.bypass || (n && (n = a(n) ? n : n[e] || n[r] || n[e.split("/").pop().split("?")[0]]), s.instead ? s.instead(e, n, i, r, o) : (C[s.url] ? s.noexec = !0 : C[s.url] = 1, i.load(s.url, s.forceCSS || !s.forceJS && "css" == s.url.split(".").pop().split("?").shift() ? "c" : t, s.noexec, s.attrs, s.timeout), (a(n) || a(m)) && i.load(function() {
                l(), n && n(s.origUrl, o, r), m && m(s.origUrl, o, r), C[s.url] = 2
            })))
        }

        function o(e, t) {
            function o(e, r) {
                if (e) {
                    if (i(e)) r || (c = function() {
                        var e = [].slice.call(arguments);
                        v.apply(this, e), d()
                    }), n(e, c, t, 0, u);
                    else if (Object(e) === e)
                        for (m in s = function() {
                                var n, t = 0;
                                for (n in e) e.hasOwnProperty(n) && t++;
                                return t
                            }(), e) e.hasOwnProperty(m) && (!r && !--s && (a(c) ? c = function() {
                            var e = [].slice.call(arguments);
                            v.apply(this, e), d()
                        } : c[m] = function(e) {
                            return function() {
                                var n = [].slice.call(arguments);
                                e && e.apply(this, n), d()
                            }
                        }(v[m])), n(e[m], c, t, m, u))
                } else !r && d()
            }
            var s, m, u = !!e.test,
                l = e.load || e.both,
                c = e.callback || r,
                v = c,
                d = e.complete || r;
            o(u ? e.yep : e.nope, !!l), l && o(l)
        }
        var s, m, u = this.yepnope.loader;
        if (i(e)) n(e, 0, u, 0);
        else if (k(e))
            for (s = 0; s < e.length; s++) i(m = e[s]) ? n(m, 0, u, 0) : k(m) ? v(m) : Object(m) === m && o(m, u);
        else Object(e) === e && o(e, u)
    }).addPrefix = function(e, n) {
        _[e] = n
    }, v.addFilter = function(e) {
        x.push(e)
    }, v.errorTimeout = 1e4, null == n.readyState && n.addEventListener && (n.readyState = "loading", n.addEventListener("DOMContentLoaded", c = function() {
        n.removeEventListener("DOMContentLoaded", c, 0), n.readyState = "complete"
    }, 0)), e.yepnope = l(), e.yepnope.executeStack = s, e.yepnope.injectJs = function(e, t, a, i, m, u) {
        var l, c, d = n.createElement("script");
        i = i || v.errorTimeout;
        for (c in d.src = e, a) d.setAttribute(c, a[c]);
        t = u ? s : t || r, d.onreadystatechange = d.onload = function() {
            !l && o(d.readyState) && (l = 1, t(), d.onload = d.onreadystatechange = null)
        }, h(function() {
            l || (l = 1, t(1))
        }, i), m ? d.onload() : p.parentNode.insertBefore(d, p)
    }, e.yepnope.injectCss = function(e, t, a, i, o, m) {
        var u;
        i = n.createElement("link"), t = m ? s : t || r;
        for (u in i.href = e, i.rel = "stylesheet", i.type = "text/css", a) i.setAttribute(u, a[u]);
        o || (p.parentNode.insertBefore(i, p), h(t, 0))
    }
}(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
},
function(e, n, t, a) {
    function i(n, t) {
        this.settings = null, this.options = e.extend({}, i.Defaults, t), this.$element = e(n), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, e.each(["onResize", "onThrottledResize"], e.proxy(function(n, t) {
            this._handlers[t] = e.proxy(this[t], this)
        }, this)), e.each(i.Plugins, e.proxy(function(e, n) {
            this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new n(this)
        }, this)), e.each(i.Workers, e.proxy(function(n, t) {
            this._pipe.push({
                filter: t.filter,
                run: e.proxy(t.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    i.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: n,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, i.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, i.Type = {
        Event: "event",
        State: "state"
    }, i.Plugins = {}, i.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            e.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            var n = this.settings.margin || "",
                t = !this.settings.autoWidth,
                a = this.settings.rtl,
                i = {
                    width: "auto",
                    "margin-left": a ? n : "",
                    "margin-right": a ? "" : n
                };
            !t && this.$stage.children().css(i), e.css = i
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            var n = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                t = null,
                a = this._items.length,
                i = !this.settings.autoWidth,
                r = [];
            for (e.items = {
                    merge: !1,
                    width: n
                }; a--;) t = this._mergers[a], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, e.items.merge = t > 1 || e.items.merge, r[a] = i ? n * t : this._items[a].width();
            this._widths = r
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var n = [],
                t = this._items,
                a = this.settings,
                i = Math.max(2 * a.items, 4),
                r = 2 * Math.ceil(t.length / 2),
                o = a.loop && t.length ? a.rewind ? i : Math.max(i, r) : 0,
                s = "",
                m = "";
            for (o /= 2; o--;) n.push(this.normalize(n.length / 2, !0)), s += t[n[n.length - 1]][0].outerHTML, n.push(this.normalize(t.length - 1 - (n.length - 1) / 2, !0)), m = t[n[n.length - 1]][0].outerHTML + m;
            this._clones = n, e(s).addClass("cloned").appendTo(this.$stage), e(m).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var e = this.settings.rtl ? 1 : -1, n = this._clones.length + this._items.length, t = -1, a = 0, i = 0, r = []; ++t < n;) a = r[t - 1] || 0, i = this._widths[this.relative(t)] + this.settings.margin, r.push(a + i * e);
            this._coordinates = r
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var e = this.settings.stagePadding,
                n = this._coordinates,
                t = {
                    width: Math.ceil(Math.abs(n[n.length - 1])) + 2 * e,
                    "padding-left": e || "",
                    "padding-right": e || ""
                };
            this.$stage.css(t)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            var n = this._coordinates.length,
                t = !this.settings.autoWidth,
                a = this.$stage.children();
            if (t && e.items.merge)
                for (; n--;) e.css.width = this._widths[this.relative(n)], a.eq(n).css(e.css);
            else t && (e.css.width = e.items.width, a.css(e.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            e.current = e.current ? this.$stage.children().index(e.current) : 0, e.current = Math.max(this.minimum(), Math.min(this.maximum(), e.current)), this.reset(e.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var e, n, t, a, i = this.settings.rtl ? 1 : -1,
                r = 2 * this.settings.stagePadding,
                o = this.coordinates(this.current()) + r,
                s = o + this.width() * i,
                m = [];
            for (t = 0, a = this._coordinates.length; t < a; t++) e = this._coordinates[t - 1] || 0, n = Math.abs(this._coordinates[t]) + r * i, (this.op(e, "<=", o) && this.op(e, ">", s) || this.op(n, "<", o) && this.op(n, ">", s)) && m.push(t);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + m.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], i.prototype.initialize = function() {
        var n, t, i;
        (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (n = this.$element.find("img"), t = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : a, i = this.$element.children(t).width(), n.length && i <= 0 && this.preloadAutoWidthImages(n));
        this.$element.addClass(this.options.loadingClass), this.$stage = e("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, i.prototype.setup = function() {
        var n = this.viewport(),
            t = this.options.responsive,
            a = -1,
            i = null;
        t ? (e.each(t, function(e) {
            e <= n && e > a && (a = Number(e))
        }), "function" == typeof(i = e.extend({}, this.options, t[a])).stagePadding && (i.stagePadding = i.stagePadding()), delete i.responsive, i.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + a))) : i = e.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: i
            }
        }), this._breakpoint = a, this.settings = i, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, i.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, i.prototype.prepare = function(n) {
        var t = this.trigger("prepare", {
            content: n
        });
        return t.data || (t.data = e("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(n)), this.trigger("prepared", {
            content: t.data
        }), t.data
    }, i.prototype.update = function() {
        for (var n = 0, t = this._pipe.length, a = e.proxy(function(e) {
                return this[e]
            }, this._invalidated), i = {}; n < t;)(this._invalidated.all || e.grep(this._pipe[n].filter, a).length > 0) && this._pipe[n].run(i), n++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, i.prototype.width = function(e) {
        switch (e = e || i.Width.Default) {
            case i.Width.Inner:
            case i.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, i.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, i.prototype.onThrottledResize = function() {
        n.clearTimeout(this.resizeTimer), this.resizeTimer = n.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, i.prototype.onResize = function() {
        return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, i.prototype.registerEventHandlers = function() {
        e.support.transition && this.$stage.on(e.support.transition.end + ".owl.core", e.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(n, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", e.proxy(this.onDragEnd, this)))
    }, i.prototype.onDragStart = function(n) {
        var a = null;
        3 !== n.which && (e.support.transform ? a = {
            x: (a = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === a.length ? 12 : 4],
            y: a[16 === a.length ? 13 : 5]
        } : (a = this.$stage.position(), a = {
            x: this.settings.rtl ? a.left + this.$stage.width() - this.width() + this.settings.margin : a.left,
            y: a.top
        }), this.is("animating") && (e.support.transform ? this.animate(a.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === n.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = e(n.target), this._drag.stage.start = a, this._drag.stage.current = a, this._drag.pointer = this.pointer(n), e(t).on("mouseup.owl.core touchend.owl.core", e.proxy(this.onDragEnd, this)), e(t).one("mousemove.owl.core touchmove.owl.core", e.proxy(function(n) {
            var a = this.difference(this._drag.pointer, this.pointer(n));
            e(t).on("mousemove.owl.core touchmove.owl.core", e.proxy(this.onDragMove, this)), Math.abs(a.x) < Math.abs(a.y) && this.is("valid") || (n.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, i.prototype.onDragMove = function(e) {
        var n = null,
            t = null,
            a = null,
            i = this.difference(this._drag.pointer, this.pointer(e)),
            r = this.difference(this._drag.stage.start, i);
        this.is("dragging") && (e.preventDefault(), this.settings.loop ? (n = this.coordinates(this.minimum()), t = this.coordinates(this.maximum() + 1) - n, r.x = ((r.x - n) % t + t) % t + n) : (n = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), t = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), a = this.settings.pullDrag ? -1 * i.x / 5 : 0, r.x = Math.max(Math.min(r.x, n + a), t + a)), this._drag.stage.current = r, this.animate(r.x))
    }, i.prototype.onDragEnd = function(n) {
        var a = this.difference(this._drag.pointer, this.pointer(n)),
            i = this._drag.stage.current,
            r = a.x > 0 ^ this.settings.rtl ? "left" : "right";
        e(t).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== a.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(i.x, 0 !== a.x ? r : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = r, (Math.abs(a.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, i.prototype.closest = function(n, t) {
        var a = -1,
            i = this.width(),
            r = this.coordinates();
        return this.settings.freeDrag || e.each(r, e.proxy(function(e, o) {
            return "left" === t && n > o - 30 && n < o + 30 ? a = e : "right" === t && n > o - i - 30 && n < o - i + 30 ? a = e + 1 : this.op(n, "<", o) && this.op(n, ">", r[e + 1] || o - i) && (a = "left" === t ? e + 1 : e), -1 === a
        }, this)), this.settings.loop || (this.op(n, ">", r[this.minimum()]) ? a = n = this.minimum() : this.op(n, "<", r[this.maximum()]) && (a = n = this.maximum())), a
    }, i.prototype.animate = function(n) {
        var t = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), t && (this.enter("animating"), this.trigger("translate")), e.support.transform3d && e.support.transition ? this.$stage.css({
            transform: "translate3d(" + n + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : t ? this.$stage.animate({
            left: n + "px"
        }, this.speed(), this.settings.fallbackEasing, e.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: n + "px"
        })
    }, i.prototype.is = function(e) {
        return this._states.current[e] && this._states.current[e] > 0
    }, i.prototype.current = function(e) {
        if (e === a) return this._current;
        if (0 === this._items.length) return a;
        if (e = this.normalize(e), this._current !== e) {
            var n = this.trigger("change", {
                property: {
                    name: "position",
                    value: e
                }
            });
            n.data !== a && (e = this.normalize(n.data)), this._current = e, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, i.prototype.invalidate = function(n) {
        return "string" === e.type(n) && (this._invalidated[n] = !0, this.is("valid") && this.leave("valid")), e.map(this._invalidated, function(e, n) {
            return n
        })
    }, i.prototype.reset = function(e) {
        (e = this.normalize(e)) !== a && (this._speed = 0, this._current = e, this.suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this.release(["translate", "translated"]))
    }, i.prototype.normalize = function(e, n) {
        var t = this._items.length,
            i = n ? 0 : this._clones.length;
        return !this.isNumeric(e) || t < 1 ? e = a : (e < 0 || e >= t + i) && (e = ((e - i / 2) % t + t) % t + i / 2), e
    }, i.prototype.relative = function(e) {
        return e -= this._clones.length / 2, this.normalize(e, !0)
    }, i.prototype.maximum = function(e) {
        var n, t, a, i = this.settings,
            r = this._coordinates.length;
        if (i.loop) r = this._clones.length / 2 + this._items.length - 1;
        else if (i.autoWidth || i.merge) {
            for (n = this._items.length, t = this._items[--n].width(), a = this.$element.width(); n-- && !((t += this._items[n].width() + this.settings.margin) > a););
            r = n + 1
        } else r = i.center ? this._items.length - 1 : this._items.length - i.items;
        return e && (r -= this._clones.length / 2), Math.max(r, 0)
    }, i.prototype.minimum = function(e) {
        return e ? 0 : this._clones.length / 2
    }, i.prototype.items = function(e) {
        return e === a ? this._items.slice() : (e = this.normalize(e, !0), this._items[e])
    }, i.prototype.mergers = function(e) {
        return e === a ? this._mergers.slice() : (e = this.normalize(e, !0), this._mergers[e])
    }, i.prototype.clones = function(n) {
        var t = this._clones.length / 2,
            i = t + this._items.length,
            r = function(e) {
                return e % 2 == 0 ? i + e / 2 : t - (e + 1) / 2
            };
        return n === a ? e.map(this._clones, function(e, n) {
            return r(n)
        }) : e.map(this._clones, function(e, t) {
            return e === n ? r(t) : null
        })
    }, i.prototype.speed = function(e) {
        return e !== a && (this._speed = e), this._speed
    }, i.prototype.coordinates = function(n) {
        var t, i = 1,
            r = n - 1;
        return n === a ? e.map(this._coordinates, e.proxy(function(e, n) {
            return this.coordinates(n)
        }, this)) : (this.settings.center ? (this.settings.rtl && (i = -1, r = n + 1), t = this._coordinates[n], t += (this.width() - t + (this._coordinates[r] || 0)) / 2 * i) : t = this._coordinates[r] || 0, t = Math.ceil(t))
    }, i.prototype.duration = function(e, n, t) {
        return 0 === t ? 0 : Math.min(Math.max(Math.abs(n - e), 1), 6) * Math.abs(t || this.settings.smartSpeed)
    }, i.prototype.to = function(e, n) {
        var t = this.current(),
            a = null,
            i = e - this.relative(t),
            r = (i > 0) - (i < 0),
            o = this._items.length,
            s = this.minimum(),
            m = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(i) > o / 2 && (i += -1 * r * o), (a = (((e = t + i) - s) % o + o) % o + s) !== e && a - i <= m && a - i > 0 && (t = a - i, e = a, this.reset(t))) : this.settings.rewind ? e = (e % (m += 1) + m) % m : e = Math.max(s, Math.min(m, e)), this.speed(this.duration(t, e, n)), this.current(e), this.$element.is(":visible") && this.update()
    }, i.prototype.next = function(e) {
        e = e || !1, this.to(this.relative(this.current()) + 1, e)
    }, i.prototype.prev = function(e) {
        e = e || !1, this.to(this.relative(this.current()) - 1, e)
    }, i.prototype.onTransitionEnd = function(e) {
        if (e !== a && (e.stopPropagation(), (e.target || e.srcElement || e.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, i.prototype.viewport = function() {
        var a;
        return this.options.responsiveBaseElement !== n ? a = e(this.options.responsiveBaseElement).width() : n.innerWidth ? a = n.innerWidth : t.documentElement && t.documentElement.clientWidth ? a = t.documentElement.clientWidth : console.warn("Can not detect viewport width."), a
    }, i.prototype.replace = function(n) {
        this.$stage.empty(), this._items = [], n && (n = n instanceof jQuery ? n : e(n)), this.settings.nestedItemSelector && (n = n.find("." + this.settings.nestedItemSelector)), n.filter(function() {
            return 1 === this.nodeType
        }).each(e.proxy(function(e, n) {
            n = this.prepare(n), this.$stage.append(n), this._items.push(n), this._mergers.push(1 * n.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, i.prototype.add = function(n, t) {
        var i = this.relative(this._current);
        t = t === a ? this._items.length : this.normalize(t, !0), n = n instanceof jQuery ? n : e(n), this.trigger("add", {
            content: n,
            position: t
        }), n = this.prepare(n), 0 === this._items.length || t === this._items.length ? (0 === this._items.length && this.$stage.append(n), 0 !== this._items.length && this._items[t - 1].after(n), this._items.push(n), this._mergers.push(1 * n.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[t].before(n), this._items.splice(t, 0, n), this._mergers.splice(t, 0, 1 * n.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[i] && this.reset(this._items[i].index()), this.invalidate("items"), this.trigger("added", {
            content: n,
            position: t
        })
    }, i.prototype.remove = function(e) {
        (e = this.normalize(e, !0)) !== a && (this.trigger("remove", {
            content: this._items[e],
            position: e
        }), this._items[e].remove(), this._items.splice(e, 1), this._mergers.splice(e, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: e
        }))
    }, i.prototype.preloadAutoWidthImages = function(n) {
        n.each(e.proxy(function(n, t) {
            this.enter("pre-loading"), t = e(t), e(new Image).one("load", e.proxy(function(e) {
                t.attr("src", e.target.src), t.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", t.attr("src") || t.attr("data-src") || t.attr("data-src-retina"))
        }, this))
    }, i.prototype.destroy = function() {
        for (var a in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), e(t).off(".owl.core"), !1 !== this.settings.responsive && (n.clearTimeout(this.resizeTimer), this.off(n, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[a].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, i.prototype.op = function(e, n, t) {
        var a = this.settings.rtl;
        switch (n) {
            case "<":
                return a ? e > t : e < t;
            case ">":
                return a ? e < t : e > t;
            case ">=":
                return a ? e <= t : e >= t;
            case "<=":
                return a ? e >= t : e <= t
        }
    }, i.prototype.on = function(e, n, t, a) {
        e.addEventListener ? e.addEventListener(n, t, a) : e.attachEvent && e.attachEvent("on" + n, t)
    }, i.prototype.off = function(e, n, t, a) {
        e.removeEventListener ? e.removeEventListener(n, t, a) : e.detachEvent && e.detachEvent("on" + n, t)
    }, i.prototype.trigger = function(n, t, a, r, o) {
        var s = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            m = e.camelCase(e.grep(["on", n, a], function(e) {
                return e
            }).join("-").toLowerCase()),
            u = e.Event([n, "owl", a || "carousel"].join(".").toLowerCase(), e.extend({
                relatedTarget: this
            }, s, t));
        return this._supress[n] || (e.each(this._plugins, function(e, n) {
            n.onTrigger && n.onTrigger(u)
        }), this.register({
            type: i.Type.Event,
            name: n
        }), this.$element.trigger(u), this.settings && "function" == typeof this.settings[m] && this.settings[m].call(this, u)), u
    }, i.prototype.enter = function(n) {
        e.each([n].concat(this._states.tags[n] || []), e.proxy(function(e, n) {
            this._states.current[n] === a && (this._states.current[n] = 0), this._states.current[n]++
        }, this))
    }, i.prototype.leave = function(n) {
        e.each([n].concat(this._states.tags[n] || []), e.proxy(function(e, n) {
            this._states.current[n]--
        }, this))
    }, i.prototype.register = function(n) {
        if (n.type === i.Type.Event) {
            if (e.event.special[n.name] || (e.event.special[n.name] = {}), !e.event.special[n.name].owl) {
                var t = e.event.special[n.name]._default;
                e.event.special[n.name]._default = function(e) {
                    return !t || !t.apply || e.namespace && -1 !== e.namespace.indexOf("owl") ? e.namespace && e.namespace.indexOf("owl") > -1 : t.apply(this, arguments)
                }, e.event.special[n.name].owl = !0
            }
        } else n.type === i.Type.State && (this._states.tags[n.name] ? this._states.tags[n.name] = this._states.tags[n.name].concat(n.tags) : this._states.tags[n.name] = n.tags, this._states.tags[n.name] = e.grep(this._states.tags[n.name], e.proxy(function(t, a) {
            return e.inArray(t, this._states.tags[n.name]) === a
        }, this)))
    }, i.prototype.suppress = function(n) {
        e.each(n, e.proxy(function(e, n) {
            this._supress[n] = !0
        }, this))
    }, i.prototype.release = function(n) {
        e.each(n, e.proxy(function(e, n) {
            delete this._supress[n]
        }, this))
    }, i.prototype.pointer = function(e) {
        var t = {
            x: null,
            y: null
        };
        return (e = (e = e.originalEvent || e || n.event).touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e).pageX ? (t.x = e.pageX, t.y = e.pageY) : (t.x = e.clientX, t.y = e.clientY), t
    }, i.prototype.isNumeric = function(e) {
        return !isNaN(parseFloat(e))
    }, i.prototype.difference = function(e, n) {
        return {
            x: e.x - n.x,
            y: e.y - n.y
        }
    }, e.fn.owlCarousel = function(n) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var a = e(this),
                r = a.data("owl.carousel");
            r || (r = new i(this, "object" == typeof n && n), a.data("owl.carousel", r), e.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(n, t) {
                r.register({
                    type: i.Type.Event,
                    name: t
                }), r.$element.on(t + ".owl.carousel.core", e.proxy(function(e) {
                    e.namespace && e.relatedTarget !== this && (this.suppress([t]), r[t].apply(this, [].slice.call(arguments, 1)), this.release([t]))
                }, r))
            })), "string" == typeof n && "_" !== n.charAt(0) && r[n].apply(r, t)
        })
    }, e.fn.owlCarousel.Constructor = i
}(window.Zepto || window.jQuery, window, document),
function(e, n, t, a) {
    var i = function(n) {
        this._core = n, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": e.proxy(function(e) {
                e.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = e.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    i.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, i.prototype.watch = function() {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = n.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, i.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, i.prototype.destroy = function() {
        var e, t;
        for (e in n.clearInterval(this._interval), this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = i
}(window.Zepto || window.jQuery, window, document),
function(e, n, t, a) {
    var i = function(n) {
        this._core = n, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": e.proxy(function(n) {
                if (n.namespace && this._core.settings && this._core.settings.lazyLoad && (n.property && "position" == n.property.name || "initialized" == n.type))
                    for (var t = this._core.settings, a = t.center && Math.ceil(t.items / 2) || t.items, i = t.center && -1 * a || 0, r = (n.property && void 0 !== n.property.value ? n.property.value : this._core.current()) + i, o = this._core.clones().length, s = e.proxy(function(e, n) {
                            this.load(n)
                        }, this); i++ < a;) this.load(o / 2 + this._core.relative(r)), o && e.each(this._core.clones(this._core.relative(r)), s), r++
            }, this)
        }, this._core.options = e.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    i.Defaults = {
        lazyLoad: !1
    }, i.prototype.load = function(t) {
        var a = this._core.$stage.children().eq(t),
            i = a && a.find(".owl-lazy");
        !i || e.inArray(a.get(0), this._loaded) > -1 || (i.each(e.proxy(function(t, a) {
            var i, r = e(a),
                o = n.devicePixelRatio > 1 && r.attr("data-src-retina") || r.attr("data-src");
            this._core.trigger("load", {
                element: r,
                url: o
            }, "lazy"), r.is("img") ? r.one("load.owl.lazy", e.proxy(function() {
                r.css("opacity", 1), this._core.trigger("loaded", {
                    element: r,
                    url: o
                }, "lazy")
            }, this)).attr("src", o) : ((i = new Image).onload = e.proxy(function() {
                r.css({
                    "background-image": 'url("' + o + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: r,
                    url: o
                }, "lazy")
            }, this), i.src = o)
        }, this)), this._loaded.push(a.get(0)))
    }, i.prototype.destroy = function() {
        var e, n;
        for (e in this.handlers) this._core.$element.off(e, this.handlers[e]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Lazy = i
}(window.Zepto || window.jQuery, window, document),
function(e, n, t, a) {
    var i = function(n) {
        this._core = n, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": e.proxy(function(e) {
                e.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": e.proxy(function(e) {
                e.namespace && this._core.settings.autoHeight && "position" == e.property.name && this.update()
            }, this),
            "loaded.owl.lazy": e.proxy(function(e) {
                e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = e.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    i.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, i.prototype.update = function() {
        var n, t = this._core._current,
            a = t + this._core.settings.items,
            i = this._core.$stage.children().toArray().slice(t, a),
            r = [];
        e.each(i, function(n, t) {
            r.push(e(t).height())
        }), n = Math.max.apply(null, r), this._core.$stage.parent().height(n).addClass(this._core.settings.autoHeightClass)
    }, i.prototype.destroy = function() {
        var e, n;
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.AutoHeight = i
}(window.Zepto || window.jQuery, window, document),
function(e, n, t, a) {
    var i = function(n) {
        this._core = n, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": e.proxy(function(e) {
                e.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": e.proxy(function(e) {
                e.namespace && this._core.settings.video && this.isInFullScreen() && e.preventDefault()
            }, this),
            "refreshed.owl.carousel": e.proxy(function(e) {
                e.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": e.proxy(function(e) {
                e.namespace && "position" === e.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": e.proxy(function(n) {
                if (n.namespace) {
                    var t = e(n.content).find(".owl-video");
                    t.length && (t.css("display", "none"), this.fetch(t, e(n.content)))
                }
            }, this)
        }, this._core.options = e.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", e.proxy(function(e) {
            this.play(e)
        }, this))
    };
    i.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, i.prototype.fetch = function(e, n) {
        var t = e.attr("data-vimeo-id") ? "vimeo" : e.attr("data-vzaar-id") ? "vzaar" : "youtube",
            a = e.attr("data-vimeo-id") || e.attr("data-youtube-id") || e.attr("data-vzaar-id"),
            i = e.attr("data-width") || this._core.settings.videoWidth,
            r = e.attr("data-height") || this._core.settings.videoHeight,
            o = e.attr("href");
        if (!o) throw new Error("Missing video URL.");
        if ((a = o.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) t = "youtube";
        else if (a[3].indexOf("vimeo") > -1) t = "vimeo";
        else {
            if (!(a[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            t = "vzaar"
        }
        a = a[6], this._videos[o] = {
            type: t,
            id: a,
            width: i,
            height: r
        }, n.attr("data-video", o), this.thumbnail(e, this._videos[o])
    }, i.prototype.thumbnail = function(n, t) {
        var a, i, r = t.width && t.height ? 'style="width:' + t.width + "px;height:" + t.height + 'px;"' : "",
            o = n.find("img"),
            s = "src",
            m = "",
            u = this._core.settings,
            l = function(e) {
                '<div class="owl-video-play-icon"></div>',
                a = u.lazyLoad ? '<div class="owl-video-tn ' + m + '" ' + s + '="' + e + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + e + ')"></div>',
                n.after(a),
                n.after('<div class="owl-video-play-icon"></div>')
            };
        if (n.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (s = "data-src", m = "owl-lazy"), o.length) return l(o.attr(s)), o.remove(), !1;
        "youtube" === t.type ? (i = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg", l(i)) : "vimeo" === t.type ? e.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + t.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(e) {
                i = e[0].thumbnail_large, l(i)
            }
        }) : "vzaar" === t.type && e.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + t.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(e) {
                i = e.framegrab_url, l(i)
            }
        })
    }, i.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, i.prototype.play = function(n) {
        var t, a = e(n.target).closest("." + this._core.settings.itemClass),
            i = this._videos[a.attr("data-video")],
            r = i.width || "100%",
            o = i.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), a = this._core.items(this._core.relative(a.index())), this._core.reset(a.index()), "youtube" === i.type ? t = '<iframe width="' + r + '" height="' + o + '" src="//www.youtube.com/embed/' + i.id + "?autoplay=1&rel=0&v=" + i.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === i.type ? t = '<iframe src="//player.vimeo.com/video/' + i.id + '?autoplay=1" width="' + r + '" height="' + o + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === i.type && (t = '<iframe frameborder="0"height="' + o + '"width="' + r + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + i.id + '/player?autoplay=true"></iframe>'), e('<div class="owl-video-frame">' + t + "</div>").insertAfter(a.find(".owl-video")), this._playing = a.addClass("owl-video-playing"))
    }, i.prototype.isInFullScreen = function() {
        var n = t.fullscreenElement || t.mozFullScreenElement || t.webkitFullscreenElement;
        return n && e(n).parent().hasClass("owl-video-frame")
    }, i.prototype.destroy = function() {
        var e, n;
        for (e in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Video = i
}(window.Zepto || window.jQuery, window, document),
function(e, n, t, a) {
    var i = function(n) {
        this.core = n, this.core.options = e.extend({}, i.Defaults, this.core.options), this.swapping = !0, this.previous = a, this.next = a, this.handlers = {
            "change.owl.carousel": e.proxy(function(e) {
                e.namespace && "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": e.proxy(function(e) {
                e.namespace && (this.swapping = "translated" == e.type)
            }, this),
            "translate.owl.carousel": e.proxy(function(e) {
                e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    i.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, i.prototype.swap = function() {
        if (1 === this.core.settings.items && e.support.animation && e.support.transition) {
            this.core.speed(0);
            var n, t = e.proxy(this.clear, this),
                a = this.core.$stage.children().eq(this.previous),
                i = this.core.$stage.children().eq(this.next),
                r = this.core.settings.animateIn,
                o = this.core.settings.animateOut;
            this.core.current() !== this.previous && (o && (n = this.core.coordinates(this.previous) - this.core.coordinates(this.next), a.one(e.support.animation.end, t).css({
                left: n + "px"
            }).addClass("animated owl-animated-out").addClass(o)), r && i.one(e.support.animation.end, t).addClass("animated owl-animated-in").addClass(r))
        }
    }, i.prototype.clear = function(n) {
        e(n.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, i.prototype.destroy = function() {
        var e, n;
        for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Animate = i
}(window.Zepto || window.jQuery, window, document),
function(e, n, t, a) {
    var i = function(n) {
        this._core = n, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": e.proxy(function(e) {
                e.namespace && "settings" === e.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : e.namespace && "position" === e.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this),
            "initialized.owl.carousel": e.proxy(function(e) {
                e.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": e.proxy(function(e, n, t) {
                e.namespace && this.play(n, t)
            }, this),
            "stop.owl.autoplay": e.proxy(function(e) {
                e.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": e.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": e.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": e.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": e.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = e.extend({}, i.Defaults, this._core.options)
    };
    i.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, i.prototype.play = function(e, n) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, i.prototype._getNextTimeout = function(a, i) {
        return this._timeout && n.clearTimeout(this._timeout), n.setTimeout(e.proxy(function() {
            this._paused || this._core.is("busy") || this._core.is("interacting") || t.hidden || this._core.next(i || this._core.settings.autoplaySpeed)
        }, this), a || this._core.settings.autoplayTimeout)
    }, i.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout()
    }, i.prototype.stop = function() {
        this._core.is("rotating") && (n.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, i.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0)
    }, i.prototype.destroy = function() {
        var e, n;
        for (e in this.stop(), this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.autoplay = i
}(window.Zepto || window.jQuery, window, document),
function(e, n, t, a) {
    "use strict";
    var i = function(n) {
        this._core = n, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": e.proxy(function(n) {
                n.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + e(n.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": e.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": e.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 1)
            }, this),
            "changed.owl.carousel": e.proxy(function(e) {
                e.namespace && "position" == e.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": e.proxy(function(e) {
                e.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": e.proxy(function(e) {
                e.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = e.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    i.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, i.prototype.initialize = function() {
        var n, t = this._core.settings;
        for (n in this._controls.$relative = (t.navContainer ? e(t.navContainer) : e("<div>").addClass(t.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = e("<" + t.navElement + ">").addClass(t.navClass[0]).html(t.navText[0]).prependTo(this._controls.$relative).on("click", e.proxy(function(e) {
                this.prev(t.navSpeed)
            }, this)), this._controls.$next = e("<" + t.navElement + ">").addClass(t.navClass[1]).html(t.navText[1]).appendTo(this._controls.$relative).on("click", e.proxy(function(e) {
                this.next(t.navSpeed)
            }, this)), t.dotsData || (this._templates = [e("<div>").addClass(t.dotClass).append(e("<span>")).prop("outerHTML")]), this._controls.$absolute = (t.dotsContainer ? e(t.dotsContainer) : e("<div>").addClass(t.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", e.proxy(function(n) {
                var a = e(n.target).parent().is(this._controls.$absolute) ? e(n.target).index() : e(n.target).parent().index();
                n.preventDefault(), this.to(a, t.dotsSpeed)
            }, this)), this._overrides) this._core[n] = e.proxy(this[n], this)
    }, i.prototype.destroy = function() {
        var e, n, t, a;
        for (e in this._handlers) this.$element.off(e, this._handlers[e]);
        for (n in this._controls) this._controls[n].remove();
        for (a in this.overides) this._core[a] = this._overrides[a];
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, i.prototype.update = function() {
        var e, n, t = this._core.clones().length / 2,
            a = t + this._core.items().length,
            i = this._core.maximum(!0),
            r = this._core.settings,
            o = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
        if ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || "page" == r.slideBy)
            for (this._pages = [], e = t, n = 0, 0; e < a; e++) {
                if (n >= o || 0 === n) {
                    if (this._pages.push({
                            start: Math.min(i, e - t),
                            end: e - t + o - 1
                        }), Math.min(i, e - t) === i) break;
                    n = 0, 0
                }
                n += this._core.mergers(this._core.relative(e))
            }
    }, i.prototype.draw = function() {
        var n, t = this._core.settings,
            a = this._core.items().length <= t.items,
            i = this._core.relative(this._core.current()),
            r = t.loop || t.rewind;
        this._controls.$relative.toggleClass("disabled", !t.nav || a), t.nav && (this._controls.$previous.toggleClass("disabled", !r && i <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !r && i >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !t.dots || a), t.dots && (n = this._pages.length - this._controls.$absolute.children().length, t.dotsData && 0 !== n ? this._controls.$absolute.html(this._templates.join("")) : n > 0 ? this._controls.$absolute.append(new Array(n + 1).join(this._templates[0])) : n < 0 && this._controls.$absolute.children().slice(n).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(e.inArray(this.current(), this._pages)).addClass("active"))
    }, i.prototype.onTrigger = function(n) {
        var t = this._core.settings;
        n.page = {
            index: e.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: t && (t.center || t.autoWidth || t.dotsData ? 1 : t.dotsEach || t.items)
        }
    }, i.prototype.current = function() {
        var n = this._core.relative(this._core.current());
        return e.grep(this._pages, e.proxy(function(e, t) {
            return e.start <= n && e.end >= n
        }, this)).pop()
    }, i.prototype.getPosition = function(n) {
        var t, a, i = this._core.settings;
        return "page" == i.slideBy ? (t = e.inArray(this.current(), this._pages), a = this._pages.length, n ? ++t : --t, t = this._pages[(t % a + a) % a].start) : (t = this._core.relative(this._core.current()), a = this._core.items().length, n ? t += i.slideBy : t -= i.slideBy), t
    }, i.prototype.next = function(n) {
        e.proxy(this._overrides.to, this._core)(this.getPosition(!0), n)
    }, i.prototype.prev = function(n) {
        e.proxy(this._overrides.to, this._core)(this.getPosition(!1), n)
    }, i.prototype.to = function(n, t, a) {
        var i;
        !a && this._pages.length ? (i = this._pages.length, e.proxy(this._overrides.to, this._core)(this._pages[(n % i + i) % i].start, t)) : e.proxy(this._overrides.to, this._core)(n, t)
    }, e.fn.owlCarousel.Constructor.Plugins.Navigation = i
}(window.Zepto || window.jQuery, window, document),
function(e, n, t, a) {
    "use strict";
    var i = function(t) {
        this._core = t, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": e.proxy(function(t) {
                t.namespace && "URLHash" === this._core.settings.startPosition && e(n).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": e.proxy(function(n) {
                if (n.namespace) {
                    var t = e(n.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!t) return;
                    this._hashes[t] = n.content
                }
            }, this),
            "changed.owl.carousel": e.proxy(function(t) {
                if (t.namespace && "position" === t.property.name) {
                    var a = this._core.items(this._core.relative(this._core.current())),
                        i = e.map(this._hashes, function(e, n) {
                            return e === a ? n : null
                        }).join();
                    if (!i || n.location.hash.slice(1) === i) return;
                    n.location.hash = i
                }
            }, this)
        }, this._core.options = e.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), e(n).on("hashchange.owl.navigation", e.proxy(function(e) {
            var t = n.location.hash.substring(1),
                a = this._core.$stage.children(),
                i = this._hashes[t] && a.index(this._hashes[t]);
            void 0 !== i && i !== this._core.current() && this._core.to(this._core.relative(i), !1, !0)
        }, this))
    };
    i.Defaults = {
        URLhashListener: !1
    }, i.prototype.destroy = function() {
        var t, a;
        for (t in e(n).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (a in Object.getOwnPropertyNames(this)) "function" != typeof this[a] && (this[a] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Hash = i
}(window.Zepto || window.jQuery, window, document),
function(e, n, t, a) {
    function i(n, t) {
        var i = !1,
            r = n.charAt(0).toUpperCase() + n.slice(1);
        return e.each((n + " " + s.join(r + " ") + r).split(" "), function(e, n) {
            if (o[n] !== a) return i = !t || n, !1
        }), i
    }

    function r(e) {
        return i(e, !0)
    }
    var o = e("<support>").get(0).style,
        s = "Webkit Moz O ms".split(" "),
        m = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        u = function() {
            return !!i("transform")
        },
        l = function() {
            return !!i("perspective")
        },
        c = function() {
            return !!i("animation")
        };
    (function() {
        return !!i("transition")
    })() && (e.support.transition = new String(r("transition")), e.support.transition.end = m.transition.end[e.support.transition]), c() && (e.support.animation = new String(r("animation")), e.support.animation.end = m.animation.end[e.support.animation]), u() && (e.support.transform = new String(r("transform")), e.support.transform3d = l())
}(window.Zepto || window.jQuery, window, document),
function() {
    var e, n, t, a, i, r = function(e, n) {
            return function() {
                return e.apply(n, arguments)
            }
        },
        o = [].indexOf || function(e) {
            for (var n = 0, t = this.length; t > n; n++)
                if (n in this && this[n] === e) return n;
            return -1
        };
    n = function() {
        function e() {}
        return e.prototype.extend = function(e, n) {
            var t, a;
            for (t in n) a = n[t], null == e[t] && (e[t] = a);
            return e
        }, e.prototype.isMobile = function(e) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
        }, e.prototype.createEvent = function(e, n, t, a) {
            var i;
            return null == n && (n = !1), null == t && (t = !1), null == a && (a = null), null != document.createEvent ? (i = document.createEvent("CustomEvent")).initCustomEvent(e, n, t, a) : null != document.createEventObject ? (i = document.createEventObject()).eventType = e : i.eventName = e, i
        }, e.prototype.emitEvent = function(e, n) {
            return null != e.dispatchEvent ? e.dispatchEvent(n) : n in (null != e) ? e[n]() : "on" + n in (null != e) ? e["on" + n]() : void 0
        }, e.prototype.addEvent = function(e, n, t) {
            return null != e.addEventListener ? e.addEventListener(n, t, !1) : null != e.attachEvent ? e.attachEvent("on" + n, t) : e[n] = t
        }, e.prototype.removeEvent = function(e, n, t) {
            return null != e.removeEventListener ? e.removeEventListener(n, t, !1) : null != e.detachEvent ? e.detachEvent("on" + n, t) : delete e[n]
        }, e.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, e
    }(), t = this.WeakMap || this.MozWeakMap || (t = function() {
        function e() {
            this.keys = [], this.values = []
        }
        return e.prototype.get = function(e) {
            var n, t, a, i;
            for (n = t = 0, a = (i = this.keys).length; a > t; n = ++t)
                if (i[n] === e) return this.values[n]
        }, e.prototype.set = function(e, n) {
            var t, a, i, r;
            for (t = a = 0, i = (r = this.keys).length; i > a; t = ++a)
                if (r[t] === e) return void(this.values[t] = n);
            return this.keys.push(e), this.values.push(n)
        }, e
    }()), e = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (e = function() {
        function e() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return e.notSupported = !0, e.prototype.observe = function() {}, e
    }()), a = this.getComputedStyle || function(e, n) {
        return this.getPropertyValue = function(n) {
            var t;
            return "float" === n && (n = "styleFloat"), i.test(n) && n.replace(i, function(e, n) {
                return n.toUpperCase()
            }), (null != (t = e.currentStyle) ? t[n] : void 0) || null
        }, this
    }, i = /(\-([a-z]){1})/g, this.WOW = function() {
        function i(e) {
            null == e && (e = {}), this.scrollCallback = r(this.scrollCallback, this), this.scrollHandler = r(this.scrollHandler, this), this.resetAnimation = r(this.resetAnimation, this), this.start = r(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), null != e.scrollContainer && (this.config.scrollContainer = document.querySelector(e.scrollContainer)), this.animationNameCache = new t, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return i.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, i.prototype.init = function() {
            var e;
            return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, i.prototype.start = function() {
            var n, t, a, i;
            if (this.stopped = !1, this.boxes = function() {
                    var e, t, a, i;
                    for (i = [], e = 0, t = (a = this.element.querySelectorAll("." + this.config.boxClass)).length; t > e; e++) n = a[e], i.push(n);
                    return i
                }.call(this), this.all = function() {
                    var e, t, a, i;
                    for (i = [], e = 0, t = (a = this.boxes).length; t > e; e++) n = a[e], i.push(n);
                    return i
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (t = 0, a = (i = this.boxes).length; a > t; t++) n = i[t], this.applyStyle(n, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new e(function(e) {
                return function(n) {
                    var t, a, i, r, o;
                    for (o = [], t = 0, a = n.length; a > t; t++) r = n[t], o.push(function() {
                        var e, n, t, a;
                        for (a = [], e = 0, n = (t = r.addedNodes || []).length; n > e; e++) i = t[e], a.push(this.doSync(i));
                        return a
                    }.call(e));
                    return o
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, i.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, i.prototype.sync = function(n) {
            return e.notSupported ? this.doSync(this.element) : void 0
        }, i.prototype.doSync = function(e) {
            var n, t, a, i, r;
            if (null == e && (e = this.element), 1 === e.nodeType) {
                for (r = [], t = 0, a = (i = (e = e.parentNode || e).querySelectorAll("." + this.config.boxClass)).length; a > t; t++) n = i[t], o.call(this.all, n) < 0 ? (this.boxes.push(n), this.all.push(n), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(n, !0), r.push(this.scrolled = !0)) : r.push(void 0);
                return r
            }
        }, i.prototype.show = function(e) {
            return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(e), this.util().emitEvent(e, this.wowEvent), this.util().addEvent(e, "animationend", this.resetAnimation), this.util().addEvent(e, "oanimationend", this.resetAnimation), this.util().addEvent(e, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation), e
        }, i.prototype.applyStyle = function(e, n) {
            var t, a, i, r;
            return a = e.getAttribute("data-wow-duration"), t = e.getAttribute("data-wow-delay"), i = e.getAttribute("data-wow-iteration"), this.animate((r = this, function() {
                return r.customStyle(e, n, a, t, i)
            }))
        }, i.prototype.animate = "requestAnimationFrame" in window ? function(e) {
            return window.requestAnimationFrame(e)
        } : function(e) {
            return e()
        }, i.prototype.resetStyle = function() {
            var e, n, t, a, i;
            for (i = [], n = 0, t = (a = this.boxes).length; t > n; n++) e = a[n], i.push(e.style.visibility = "visible");
            return i
        }, i.prototype.resetAnimation = function(e) {
            var n;
            return e.type.toLowerCase().indexOf("animationend") >= 0 ? (n = e.target || e.srcElement).className = n.className.replace(this.config.animateClass, "").trim() : void 0
        }, i.prototype.customStyle = function(e, n, t, a, i) {
            return n && this.cacheAnimationName(e), e.style.visibility = n ? "hidden" : "visible", t && this.vendorSet(e.style, {
                animationDuration: t
            }), a && this.vendorSet(e.style, {
                animationDelay: a
            }), i && this.vendorSet(e.style, {
                animationIterationCount: i
            }), this.vendorSet(e.style, {
                animationName: n ? "none" : this.cachedAnimationName(e)
            }), e
        }, i.prototype.vendors = ["moz", "webkit"], i.prototype.vendorSet = function(e, n) {
            var t, a, i, r;
            for (t in a = [], n) i = n[t], e["" + t] = i, a.push(function() {
                var n, a, o, s;
                for (s = [], n = 0, a = (o = this.vendors).length; a > n; n++) r = o[n], s.push(e["" + r + t.charAt(0).toUpperCase() + t.substr(1)] = i);
                return s
            }.call(this));
            return a
        }, i.prototype.vendorCSS = function(e, n) {
            var t, i, r, o, s, m;
            for (o = (s = a(e)).getPropertyCSSValue(n), t = 0, i = (r = this.vendors).length; i > t; t++) m = r[t], o = o || s.getPropertyCSSValue("-" + m + "-" + n);
            return o
        }, i.prototype.animationName = function(e) {
            var n;
            try {
                n = this.vendorCSS(e, "animation-name").cssText
            } catch (t) {
                n = a(e).getPropertyValue("animation-name")
            }
            return "none" === n ? "" : n
        }, i.prototype.cacheAnimationName = function(e) {
            return this.animationNameCache.set(e, this.animationName(e))
        }, i.prototype.cachedAnimationName = function(e) {
            return this.animationNameCache.get(e)
        }, i.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, i.prototype.scrollCallback = function() {
            var e;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var n, t, a, i;
                for (i = [], n = 0, t = (a = this.boxes).length; t > n; n++)(e = a[n]) && (this.isVisible(e) ? this.show(e) : i.push(e));
                return i
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, i.prototype.offsetTop = function(e) {
            for (var n; void 0 === e.offsetTop;) e = e.parentNode;
            for (n = e.offsetTop; e = e.offsetParent;) n += e.offsetTop;
            return n
        }, i.prototype.isVisible = function(e) {
            var n, t, a, i, r;
            return t = e.getAttribute("data-wow-offset") || this.config.offset, i = (r = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - t, n = (a = this.offsetTop(e)) + e.clientHeight, i >= a && n >= r
        }, i.prototype.util = function() {
            return null != this._util ? this._util : this._util = new n
        }, i.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, i
    }()
}.call(this);
var ProgressBar = function() {
"use strict";
return {
    init: function() {
        $(document).ready(function() {
            $(".progress").each(function() {
                $(this).appear(function() {
                    $(this).animate({
                        opacity: 1,
                        left: "0px"
                    }, 800);
                    var e = $(this).find(".progress-bar").attr("data-width"),
                        n = $(this).find(".progress-bar").attr("data-height");
                    $(this).find(".progress-bar").animate({
                        width: e + "%",
                        height: n + "%"
                    }, 100, "linear")
                })
            })
        })
    }
}
}();
$(document).ready(function() {
    ProgressBar.init()
}),
function(e, n) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(t) {
        return n(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = n(e, require("jquery")) : e.jQueryBridget = n(e, e.jQuery)
}(window, function(e, n) {
    "use strict";

    function t(t, r, s) {
        (s = s || n || e.jQuery) && (r.prototype.option || (r.prototype.option = function(e) {
            s.isPlainObject(e) && (this.options = s.extend(!0, this.options, e))
        }), s.fn[t] = function(e) {
            return "string" == typeof e ? function(e, n, a) {
                var i, r = "$()." + t + '("' + n + '")';
                return e.each(function(e, m) {
                    var u = s.data(m, t);
                    if (u) {
                        var l = u[n];
                        if (l && "_" != n.charAt(0)) {
                            var c = l.apply(u, a);
                            i = void 0 === i ? c : i
                        } else o(r + " is not a valid method")
                    } else o(t + " not initialized. Cannot call methods, i.e. " + r)
                }), void 0 !== i ? i : e
            }(this, e, i.call(arguments, 1)) : (function(e, n) {
                e.each(function(e, a) {
                    var i = s.data(a, t);
                    i ? (i.option(n), i._init()) : (i = new r(a, n), s.data(a, t, i))
                })
            }(this, e), this)
        }, a(s))
    }

    function a(e) {
        !e || e && e.bridget || (e.bridget = t)
    }
    var i = Array.prototype.slice,
        r = e.console,
        o = void 0 === r ? function() {} : function(e) {
            r.error(e)
        };
    return a(n || e.jQuery), t
}),
function(e, n) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", n) : "object" == typeof module && module.exports ? module.exports = n() : e.EvEmitter = n()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var n = e.prototype;
    return n.on = function(e, n) {
        if (e && n) {
            var t = this._events = this._events || {},
                a = t[e] = t[e] || [];
            return -1 == a.indexOf(n) && a.push(n), this
        }
    }, n.once = function(e, n) {
        if (e && n) {
            this.on(e, n);
            var t = this._onceEvents = this._onceEvents || {};
            return (t[e] = t[e] || {})[n] = !0, this
        }
    }, n.off = function(e, n) {
        var t = this._events && this._events[e];
        if (t && t.length) {
            var a = t.indexOf(n);
            return -1 != a && t.splice(a, 1), this
        }
    }, n.emitEvent = function(e, n) {
        var t = this._events && this._events[e];
        if (t && t.length) {
            var a = 0,
                i = t[a];
            n = n || [];
            for (var r = this._onceEvents && this._onceEvents[e]; i;) {
                var o = r && r[i];
                o && (this.off(e, i), delete r[i]), i.apply(this, n), i = t[a += o ? 0 : 1]
            }
            return this
        }
    }, e
}),
function(e, n) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return n()
    }) : "object" == typeof module && module.exports ? module.exports = n() : e.getSize = n()
}(window, function() {
    "use strict";

    function e(e) {
        var n = parseFloat(e);
        return -1 == e.indexOf("%") && !isNaN(n) && n
    }

    function n(e) {
        var n = getComputedStyle(e);
        return n || r("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), n
    }

    function t() {
        if (!m) {
            m = !0;
            var t = document.createElement("div");
            t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
            var r = document.body || document.documentElement;
            r.appendChild(t);
            var o = n(t);
            a.isBoxSizeOuter = i = 200 == e(o.width), r.removeChild(t)
        }
    }

    function a(a) {
        if (t(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
            var r = n(a);
            if ("none" == r.display) return function() {
                for (var e = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, n = 0; n < s; n++) e[o[n]] = 0;
                return e
            }();
            var m = {};
            m.width = a.offsetWidth, m.height = a.offsetHeight;
            for (var u = m.isBorderBox = "border-box" == r.boxSizing, l = 0; l < s; l++) {
                var c = o[l],
                    v = r[c],
                    d = parseFloat(v);
                m[c] = isNaN(d) ? 0 : d
            }
            var h = m.paddingLeft + m.paddingRight,
                p = m.paddingTop + m.paddingBottom,
                f = m.marginLeft + m.marginRight,
                S = m.marginTop + m.marginBottom,
                g = m.borderLeftWidth + m.borderRightWidth,
                N = m.borderTopWidth + m.borderBottomWidth,
                G = u && i,
                y = e(r.width);
            !1 !== y && (m.width = y + (G ? 0 : h + g));
            var b = e(r.height);
            return !1 !== b && (m.height = b + (G ? 0 : p + N)), m.innerWidth = m.width - (h + g), m.innerHeight = m.height - (p + N), m.outerWidth = m.width + f, m.outerHeight = m.height + S, m
        }
    }
    var i, r = "undefined" == typeof console ? function() {} : function(e) {
            console.error(e)
        },
        o = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        s = o.length,
        m = !1;
    return a
}),
function(e, n) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", n) : "object" == typeof module && module.exports ? module.exports = n() : e.matchesSelector = n()
}(window, function() {
    "use strict";
    var e = function() {
        var e = window.Element.prototype;
        if (e.matches) return "matches";
        if (e.matchesSelector) return "matchesSelector";
        for (var n = ["webkit", "moz", "ms", "o"], t = 0; t < n.length; t++) {
            var a = n[t] + "MatchesSelector";
            if (e[a]) return a
        }
    }();
    return function(n, t) {
        return n[e](t)
    }
}),
function(e, n) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(t) {
        return n(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = n(e, require("desandro-matches-selector")) : e.fizzyUIUtils = n(e, e.matchesSelector)
}(window, function(e, n) {
    var t = {
            extend: function(e, n) {
                for (var t in n) e[t] = n[t];
                return e
            },
            modulo: function(e, n) {
                return (e % n + n) % n
            },
            makeArray: function(e) {
                var n = [];
                if (Array.isArray(e)) n = e;
                else if (e && "object" == typeof e && "number" == typeof e.length)
                    for (var t = 0; t < e.length; t++) n.push(e[t]);
                else n.push(e);
                return n
            },
            removeFrom: function(e, n) {
                var t = e.indexOf(n); - 1 != t && e.splice(t, 1)
            },
            getParent: function(e, t) {
                for (; e.parentNode && e != document.body;)
                    if (e = e.parentNode, n(e, t)) return e
            },
            getQueryElement: function(e) {
                return "string" == typeof e ? document.querySelector(e) : e
            },
            handleEvent: function(e) {
                var n = "on" + e.type;
                this[n] && this[n](e)
            },
            filterFindElements: function(e, a) {
                e = t.makeArray(e);
                var i = [];
                return e.forEach(function(e) {
                    if (e instanceof HTMLElement) {
                        if (!a) return void i.push(e);
                        n(e, a) && i.push(e);
                        for (var t = e.querySelectorAll(a), r = 0; r < t.length; r++) i.push(t[r])
                    }
                }), i
            },
            debounceMethod: function(e, n, t) {
                var a = e.prototype[n],
                    i = n + "Timeout";
                e.prototype[n] = function() {
                    var e = this[i];
                    e && clearTimeout(e);
                    var n = arguments,
                        r = this;
                    this[i] = setTimeout(function() {
                        a.apply(r, n), delete r[i]
                    }, t || 100)
                }
            },
            docReady: function(e) {
                var n = document.readyState;
                "complete" == n || "interactive" == n ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
            },
            toDashed: function(e) {
                return e.replace(/(.)([A-Z])/g, function(e, n, t) {
                    return n + "-" + t
                }).toLowerCase()
            }
        },
        a = e.console;
    return t.htmlInit = function(n, i) {
        t.docReady(function() {
            var r = t.toDashed(i),
                o = "data-" + r,
                s = document.querySelectorAll("[" + o + "]"),
                m = document.querySelectorAll(".js-" + r),
                u = t.makeArray(s).concat(t.makeArray(m)),
                l = o + "-options",
                c = e.jQuery;
            u.forEach(function(e) {
                var t, r = e.getAttribute(o) || e.getAttribute(l);
                try {
                    t = r && JSON.parse(r)
                } catch (n) {
                    return void(a && a.error("Error parsing " + o + " on " + e.className + ": " + n))
                }
                var s = new n(e, t);
                c && c.data(e, i, s)
            })
        })
    }, t
}),
function(e, n) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], n) : "object" == typeof module && module.exports ? module.exports = n(require("ev-emitter"), require("get-size")) : (e.Outlayer = {}, e.Outlayer.Item = n(e.EvEmitter, e.getSize))
}(window, function(e, n) {
    "use strict";

    function t(e, n) {
        e && (this.element = e, this.layout = n, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }
    var a = document.documentElement.style,
        i = "string" == typeof a.transition ? "transition" : "WebkitTransition",
        r = "string" == typeof a.transform ? "transform" : "WebkitTransform",
        o = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[i],
        s = {
            transform: r,
            transition: i,
            transitionDuration: i + "Duration",
            transitionProperty: i + "Property",
            transitionDelay: i + "Delay"
        },
        m = t.prototype = Object.create(e.prototype);
    m.constructor = t, m._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, m.handleEvent = function(e) {
        var n = "on" + e.type;
        this[n] && this[n](e)
    }, m.getSize = function() {
        this.size = n(this.element)
    }, m.css = function(e) {
        var n = this.element.style;
        for (var t in e) {
            n[s[t] || t] = e[t]
        }
    }, m.getPosition = function() {
        var e = getComputedStyle(this.element),
            n = this.layout._getOption("originLeft"),
            t = this.layout._getOption("originTop"),
            a = e[n ? "left" : "right"],
            i = e[t ? "top" : "bottom"],
            r = this.layout.size,
            o = -1 != a.indexOf("%") ? parseFloat(a) / 100 * r.width : parseInt(a, 10),
            s = -1 != i.indexOf("%") ? parseFloat(i) / 100 * r.height : parseInt(i, 10);
        o = isNaN(o) ? 0 : o, s = isNaN(s) ? 0 : s, o -= n ? r.paddingLeft : r.paddingRight, s -= t ? r.paddingTop : r.paddingBottom, this.position.x = o, this.position.y = s
    }, m.layoutPosition = function() {
        var e = this.layout.size,
            n = {},
            t = this.layout._getOption("originLeft"),
            a = this.layout._getOption("originTop"),
            i = t ? "paddingLeft" : "paddingRight",
            r = t ? "left" : "right",
            o = t ? "right" : "left",
            s = this.position.x + e[i];
        n[r] = this.getXValue(s), n[o] = "";
        var m = a ? "paddingTop" : "paddingBottom",
            u = a ? "top" : "bottom",
            l = a ? "bottom" : "top",
            c = this.position.y + e[m];
        n[u] = this.getYValue(c), n[l] = "", this.css(n), this.emitEvent("layout", [this])
    }, m.getXValue = function(e) {
        var n = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !n ? e / this.layout.size.width * 100 + "%" : e + "px"
    }, m.getYValue = function(e) {
        var n = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && n ? e / this.layout.size.height * 100 + "%" : e + "px"
    }, m._transitionTo = function(e, n) {
        this.getPosition();
        var t = this.position.x,
            a = this.position.y,
            i = parseInt(e, 10),
            r = parseInt(n, 10),
            o = i === this.position.x && r === this.position.y;
        if (this.setPosition(e, n), !o || this.isTransitioning) {
            var s = e - t,
                m = n - a,
                u = {};
            u.transform = this.getTranslate(s, m), this.transition({
                to: u,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        } else this.layoutPosition()
    }, m.getTranslate = function(e, n) {
        return "translate3d(" + (e = this.layout._getOption("originLeft") ? e : -e) + "px, " + (n = this.layout._getOption("originTop") ? n : -n) + "px, 0)"
    }, m.goTo = function(e, n) {
        this.setPosition(e, n), this.layoutPosition()
    }, m.moveTo = m._transitionTo, m.setPosition = function(e, n) {
        this.position.x = parseInt(e, 10), this.position.y = parseInt(n, 10)
    }, m._nonTransition = function(e) {
        for (var n in this.css(e.to), e.isCleaning && this._removeStyles(e.to), e.onTransitionEnd) e.onTransitionEnd[n].call(this)
    }, m.transition = function(e) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var n = this._transn;
            for (var t in e.onTransitionEnd) n.onEnd[t] = e.onTransitionEnd[t];
            for (t in e.to) n.ingProperties[t] = !0, e.isCleaning && (n.clean[t] = !0);
            if (e.from) {
                this.css(e.from);
                this.element.offsetHeight;
                null
            }
            this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
        } else this._nonTransition(e)
    };
    var u = "opacity," + function(e) {
        return e.replace(/([A-Z])/g, function(e) {
            return "-" + e.toLowerCase()
        })
    }(r);
    m.enableTransition = function() {
        if (!this.isTransitioning) {
            var e = this.layout.options.transitionDuration;
            e = "number" == typeof e ? e + "ms" : e, this.css({
                transitionProperty: u,
                transitionDuration: e,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(o, this, !1)
        }
    }, m.onwebkitTransitionEnd = function(e) {
        this.ontransitionend(e)
    }, m.onotransitionend = function(e) {
        this.ontransitionend(e)
    };
    var l = {
        "-webkit-transform": "transform"
    };
    m.ontransitionend = function(e) {
        if (e.target === this.element) {
            var n = this._transn,
                t = l[e.propertyName] || e.propertyName;
            if (delete n.ingProperties[t], function(e) {
                    for (var n in e) return !1;
                    return !0
                }(n.ingProperties) && this.disableTransition(), t in n.clean && (this.element.style[e.propertyName] = "", delete n.clean[t]), t in n.onEnd) n.onEnd[t].call(this), delete n.onEnd[t];
            this.emitEvent("transitionEnd", [this])
        }
    }, m.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
    }, m._removeStyles = function(e) {
        var n = {};
        for (var t in e) n[t] = "";
        this.css(n)
    };
    var c = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return m.removeTransitionStyles = function() {
        this.css(c)
    }, m.stagger = function(e) {
        e = isNaN(e) ? 0 : e, this.staggerDelay = e + "ms"
    }, m.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, m.remove = function() {
        return i && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, m.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var e = this.layout.options,
            n = {};
        n[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
            from: e.hiddenStyle,
            to: e.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: n
        })
    }, m.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, m.getHideRevealTransitionEndProperty = function(e) {
        var n = this.layout.options[e];
        if (n.opacity) return "opacity";
        for (var t in n) return t
    }, m.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var e = this.layout.options,
            n = {};
        n[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
            from: e.visibleStyle,
            to: e.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: n
        })
    }, m.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, m.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, t
}),
function(e, n) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(t, a, i, r) {
        return n(e, t, a, i, r)
    }) : "object" == typeof module && module.exports ? module.exports = n(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : e.Outlayer = n(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, e.Outlayer.Item)
}(window, function(e, n, t, a, i) {
    "use strict";

    function r(e, n) {
        var t = a.getQueryElement(e);
        if (t) {
            this.element = t, m && (this.$element = m(this.element)), this.options = a.extend({}, this.constructor.defaults), this.option(n);
            var i = ++l;
            this.element.outlayerGUID = i, c[i] = this, this._create(), this._getOption("initLayout") && this.layout()
        } else s && s.error("Bad element for " + this.constructor.namespace + ": " + (t || e))
    }

    function o(e) {
        function n() {
            e.apply(this, arguments)
        }
        return n.prototype = Object.create(e.prototype), n.prototype.constructor = n, n
    }
    var s = e.console,
        m = e.jQuery,
        u = function() {},
        l = 0,
        c = {};
    r.namespace = "outlayer", r.Item = i, r.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var v = r.prototype;
    a.extend(v, n.prototype), v.option = function(e) {
        a.extend(this.options, e)
    }, v._getOption = function(e) {
        var n = this.constructor.compatOptions[e];
        return n && void 0 !== this.options[n] ? this.options[n] : this.options[e]
    }, r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, v._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), a.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
    }, v.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, v._itemize = function(e) {
        for (var n = this._filterFindItemElements(e), t = this.constructor.Item, a = [], i = 0; i < n.length; i++) {
            var r = new t(n[i], this);
            a.push(r)
        }
        return a
    }, v._filterFindItemElements = function(e) {
        return a.filterFindElements(e, this.options.itemSelector)
    }, v.getItemElements = function() {
        return this.items.map(function(e) {
            return e.element
        })
    }, v.layout = function() {
        this._resetLayout(), this._manageStamps();
        var e = this._getOption("layoutInstant"),
            n = void 0 !== e ? e : !this._isLayoutInited;
        this.layoutItems(this.items, n), this._isLayoutInited = !0
    }, v._init = v.layout, v._resetLayout = function() {
        this.getSize()
    }, v.getSize = function() {
        this.size = t(this.element)
    }, v._getMeasurement = function(e, n) {
        var a, i = this.options[e];
        i ? ("string" == typeof i ? a = this.element.querySelector(i) : i instanceof HTMLElement && (a = i), this[e] = a ? t(a)[n] : i) : this[e] = 0
    }, v.layoutItems = function(e, n) {
        e = this._getItemsForLayout(e), this._layoutItems(e, n), this._postLayout()
    }, v._getItemsForLayout = function(e) {
        return e.filter(function(e) {
            return !e.isIgnored
        })
    }, v._layoutItems = function(e, n) {
        if (this._emitCompleteOnItems("layout", e), e && e.length) {
            var t = [];
            e.forEach(function(e) {
                var a = this._getItemLayoutPosition(e);
                a.item = e, a.isInstant = n || e.isLayoutInstant, t.push(a)
            }, this), this._processLayoutQueue(t)
        }
    }, v._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, v._processLayoutQueue = function(e) {
        this.updateStagger(), e.forEach(function(e, n) {
            this._positionItem(e.item, e.x, e.y, e.isInstant, n)
        }, this)
    }, v.updateStagger = function() {
        var e = this.options.stagger;
        return null == e ? void(this.stagger = 0) : (this.stagger = function(e) {
            if ("number" == typeof e) return e;
            var n = e.match(/(^\d*\.?\d*)(\w*)/),
                t = n && n[1],
                a = n && n[2];
            return t.length ? (t = parseFloat(t)) * (d[a] || 1) : 0
        }(e), this.stagger)
    }, v._positionItem = function(e, n, t, a, i) {
        a ? e.goTo(n, t) : (e.stagger(i * this.stagger), e.moveTo(n, t))
    }, v._postLayout = function() {
        this.resizeContainer()
    }, v.resizeContainer = function() {
        if (this._getOption("resizeContainer")) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, v._getContainerSize = u, v._setContainerMeasure = function(e, n) {
        if (void 0 !== e) {
            var t = this.size;
            t.isBorderBox && (e += n ? t.paddingLeft + t.paddingRight + t.borderLeftWidth + t.borderRightWidth : t.paddingBottom + t.paddingTop + t.borderTopWidth + t.borderBottomWidth), e = Math.max(e, 0), this.element.style[n ? "width" : "height"] = e + "px"
        }
    }, v._emitCompleteOnItems = function(e, n) {
        function t() {
            i.dispatchEvent(e + "Complete", null, [n])
        }

        function a() {
            ++o == r && t()
        }
        var i = this,
            r = n.length;
        if (n && r) {
            var o = 0;
            n.forEach(function(n) {
                n.once(e, a)
            })
        } else t()
    }, v.dispatchEvent = function(e, n, t) {
        var a = n ? [n].concat(t) : t;
        if (this.emitEvent(e, a), m)
            if (this.$element = this.$element || m(this.element), n) {
                var i = m.Event(n);
                i.type = e, this.$element.trigger(i, t)
            } else this.$element.trigger(e, t)
    }, v.ignore = function(e) {
        var n = this.getItem(e);
        n && (n.isIgnored = !0)
    }, v.unignore = function(e) {
        var n = this.getItem(e);
        n && delete n.isIgnored
    }, v.stamp = function(e) {
        (e = this._find(e)) && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this))
    }, v.unstamp = function(e) {
        (e = this._find(e)) && e.forEach(function(e) {
            a.removeFrom(this.stamps, e), this.unignore(e)
        }, this)
    }, v._find = function(e) {
        if (e) return "string" == typeof e && (e = this.element.querySelectorAll(e)), a.makeArray(e)
    }, v._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, v._getBoundingRect = function() {
        var e = this.element.getBoundingClientRect(),
            n = this.size;
        this._boundingRect = {
            left: e.left + n.paddingLeft + n.borderLeftWidth,
            top: e.top + n.paddingTop + n.borderTopWidth,
            right: e.right - (n.paddingRight + n.borderRightWidth),
            bottom: e.bottom - (n.paddingBottom + n.borderBottomWidth)
        }
    }, v._manageStamp = u, v._getElementOffset = function(e) {
        var n = e.getBoundingClientRect(),
            a = this._boundingRect,
            i = t(e);
        return {
            left: n.left - a.left - i.marginLeft,
            top: n.top - a.top - i.marginTop,
            right: a.right - n.right - i.marginRight,
            bottom: a.bottom - n.bottom - i.marginBottom
        }
    }, v.handleEvent = a.handleEvent, v.bindResize = function() {
        e.addEventListener("resize", this), this.isResizeBound = !0
    }, v.unbindResize = function() {
        e.removeEventListener("resize", this), this.isResizeBound = !1
    }, v.onresize = function() {
        this.resize()
    }, a.debounceMethod(r, "onresize", 100), v.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, v.needsResizeLayout = function() {
        var e = t(this.element);
        return this.size && e && e.innerWidth !== this.size.innerWidth
    }, v.addItems = function(e) {
        var n = this._itemize(e);
        return n.length && (this.items = this.items.concat(n)), n
    }, v.appended = function(e) {
        var n = this.addItems(e);
        n.length && (this.layoutItems(n, !0), this.reveal(n))
    }, v.prepended = function(e) {
        var n = this._itemize(e);
        if (n.length) {
            var t = this.items.slice(0);
            this.items = n.concat(t), this._resetLayout(), this._manageStamps(), this.layoutItems(n, !0), this.reveal(n), this.layoutItems(t)
        }
    }, v.reveal = function(e) {
        if (this._emitCompleteOnItems("reveal", e), e && e.length) {
            var n = this.updateStagger();
            e.forEach(function(e, t) {
                e.stagger(t * n), e.reveal()
            })
        }
    }, v.hide = function(e) {
        if (this._emitCompleteOnItems("hide", e), e && e.length) {
            var n = this.updateStagger();
            e.forEach(function(e, t) {
                e.stagger(t * n), e.hide()
            })
        }
    }, v.revealItemElements = function(e) {
        var n = this.getItems(e);
        this.reveal(n)
    }, v.hideItemElements = function(e) {
        var n = this.getItems(e);
        this.hide(n)
    }, v.getItem = function(e) {
        for (var n = 0; n < this.items.length; n++) {
            var t = this.items[n];
            if (t.element == e) return t
        }
    }, v.getItems = function(e) {
        e = a.makeArray(e);
        var n = [];
        return e.forEach(function(e) {
            var t = this.getItem(e);
            t && n.push(t)
        }, this), n
    }, v.remove = function(e) {
        var n = this.getItems(e);
        this._emitCompleteOnItems("remove", n), n && n.length && n.forEach(function(e) {
            e.remove(), a.removeFrom(this.items, e)
        }, this)
    }, v.destroy = function() {
        var e = this.element.style;
        e.height = "", e.position = "", e.width = "", this.items.forEach(function(e) {
            e.destroy()
        }), this.unbindResize();
        var n = this.element.outlayerGUID;
        delete c[n], delete this.element.outlayerGUID, m && m.removeData(this.element, this.constructor.namespace)
    }, r.data = function(e) {
        var n = (e = a.getQueryElement(e)) && e.outlayerGUID;
        return n && c[n]
    }, r.create = function(e, n) {
        var t = o(r);
        return t.defaults = a.extend({}, r.defaults), a.extend(t.defaults, n), t.compatOptions = a.extend({}, r.compatOptions), t.namespace = e, t.data = r.data, t.Item = o(i), a.htmlInit(t, e), m && m.bridget && m.bridget(e, t), t
    };
    var d = {
        ms: 1,
        s: 1e3
    };
    return r.Item = i, r
}),
function(e, n) {
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], n) : "object" == typeof module && module.exports ? module.exports = n(require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.Item = n(e.Outlayer))
}(window, function(e) {
    "use strict";

    function n() {
        e.Item.apply(this, arguments)
    }
    var t = n.prototype = Object.create(e.Item.prototype),
        a = t._create;
    t._create = function() {
        this.id = this.layout.itemGUID++, a.call(this), this.sortData = {}
    }, t.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var e = this.layout.options.getSortData,
                n = this.layout._sorters;
            for (var t in e) {
                var a = n[t];
                this.sortData[t] = a(this.element, this)
            }
        }
    };
    var i = t.destroy;
    return t.destroy = function() {
        i.apply(this, arguments), this.css({
            display: ""
        })
    }, n
}),
function(e, n) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], n) : "object" == typeof module && module.exports ? module.exports = n(require("get-size"), require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.LayoutMode = n(e.getSize, e.Outlayer))
}(window, function(e, n) {
    "use strict";

    function t(e) {
        this.isotope = e, e && (this.options = e.options[this.namespace], this.element = e.element, this.items = e.filteredItems, this.size = e.size)
    }
    var a = t.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(e) {
        a[e] = function() {
            return n.prototype[e].apply(this.isotope, arguments)
        }
    }), a.needsVerticalResizeLayout = function() {
        var n = e(this.isotope.element);
        return this.isotope.size && n && n.innerHeight != this.isotope.size.innerHeight
    }, a._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }, a.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }, a.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }, a.getSegmentSize = function(e, n) {
        var t = e + n,
            a = "outer" + n;
        if (this._getMeasurement(t, a), !this[t]) {
            var i = this.getFirstItemSize();
            this[t] = i && i[a] || this.isotope.size["inner" + n]
        }
    }, a.getFirstItemSize = function() {
        var n = this.isotope.filteredItems[0];
        return n && n.element && e(n.element)
    }, a.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }, a.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size
    }, t.modes = {}, t.create = function(e, n) {
        function i() {
            t.apply(this, arguments)
        }
        return i.prototype = Object.create(a), i.prototype.constructor = i, n && (i.options = n), i.prototype.namespace = e, t.modes[e] = i, i
    }, t
}),
function(e, n) {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], n) : "object" == typeof module && module.exports ? module.exports = n(require("outlayer"), require("get-size")) : e.Masonry = n(e.Outlayer, e.getSize)
}(window, function(e, n) {
    var t = e.create("masonry");
    t.compatOptions.fitWidth = "isFitWidth";
    var a = t.prototype;
    return a._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var e = 0; e < this.cols; e++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, a.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var e = this.items[0],
                t = e && e.element;
            this.columnWidth = t && n(t).outerWidth || this.containerWidth
        }
        var a = this.columnWidth += this.gutter,
            i = this.containerWidth + this.gutter,
            r = i / a,
            o = a - i % a;
        r = Math[o && o < 1 ? "round" : "floor"](r), this.cols = Math.max(r, 1)
    }, a.getContainerWidth = function() {
        var e = this._getOption("fitWidth") ? this.element.parentNode : this.element,
            t = n(e);
        this.containerWidth = t && t.innerWidth
    }, a._getItemLayoutPosition = function(e) {
        e.getSize();
        var n = e.size.outerWidth % this.columnWidth,
            t = Math[n && n < 1 ? "round" : "ceil"](e.size.outerWidth / this.columnWidth);
        t = Math.min(t, this.cols);
        for (var a = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](t, e), i = {
                x: this.columnWidth * a.col,
                y: a.y
            }, r = a.y + e.size.outerHeight, o = t + a.col, s = a.col; s < o; s++) this.colYs[s] = r;
        return i
    }, a._getTopColPosition = function(e) {
        var n = this._getTopColGroup(e),
            t = Math.min.apply(Math, n);
        return {
            col: n.indexOf(t),
            y: t
        }
    }, a._getTopColGroup = function(e) {
        if (e < 2) return this.colYs;
        for (var n = [], t = this.cols + 1 - e, a = 0; a < t; a++) n[a] = this._getColGroupY(a, e);
        return n
    }, a._getColGroupY = function(e, n) {
        if (n < 2) return this.colYs[e];
        var t = this.colYs.slice(e, e + n);
        return Math.max.apply(Math, t)
    }, a._getHorizontalColPosition = function(e, n) {
        var t = this.horizontalColIndex % this.cols;
        t = e > 1 && t + e > this.cols ? 0 : t;
        var a = n.size.outerWidth && n.size.outerHeight;
        return this.horizontalColIndex = a ? t + e : this.horizontalColIndex, {
            col: t,
            y: this._getColGroupY(t, e)
        }
    }, a._manageStamp = function(e) {
        var t = n(e),
            a = this._getElementOffset(e),
            i = this._getOption("originLeft") ? a.left : a.right,
            r = i + t.outerWidth,
            o = Math.floor(i / this.columnWidth);
        o = Math.max(0, o);
        var s = Math.floor(r / this.columnWidth);
        s -= r % this.columnWidth ? 0 : 1, s = Math.min(this.cols - 1, s);
        for (var m = (this._getOption("originTop") ? a.top : a.bottom) + t.outerHeight, u = o; u <= s; u++) this.colYs[u] = Math.max(m, this.colYs[u])
    }, a._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var e = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e
    }, a._getContainerFitWidth = function() {
        for (var e = 0, n = this.cols; --n && 0 === this.colYs[n];) e++;
        return (this.cols - e) * this.columnWidth - this.gutter
    }, a.needsResizeLayout = function() {
        var e = this.containerWidth;
        return this.getContainerWidth(), e != this.containerWidth
    }, t
}),
function(e, n) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], n) : "object" == typeof module && module.exports ? module.exports = n(require("../layout-mode"), require("masonry-layout")) : n(e.Isotope.LayoutMode, e.Masonry)
}(window, function(e, n) {
    "use strict";
    var t = e.create("masonry"),
        a = t.prototype,
        i = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var r in n.prototype) i[r] || (a[r] = n.prototype[r]);
    var o = a.measureColumns;
    a.measureColumns = function() {
        this.items = this.isotope.filteredItems, o.call(this)
    };
    var s = a._getOption;
    return a._getOption = function(e) {
        return "fitWidth" == e ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : s.apply(this.isotope, arguments)
    }, t
}),
function(e, n) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], n) : "object" == typeof exports ? module.exports = n(require("../layout-mode")) : n(e.Isotope.LayoutMode)
}(window, function(e) {
    "use strict";
    var n = e.create("fitRows"),
        t = n.prototype;
    return t._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, t._getItemLayoutPosition = function(e) {
        e.getSize();
        var n = e.size.outerWidth + this.gutter,
            t = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && n + this.x > t && (this.x = 0, this.y = this.maxY);
        var a = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + e.size.outerHeight), this.x += n, a
    }, t._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }, n
}),
function(e, n) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], n) : "object" == typeof module && module.exports ? module.exports = n(require("../layout-mode")) : n(e.Isotope.LayoutMode)
}(window, function(e) {
    "use strict";
    var n = e.create("vertical", {
            horizontalAlignment: 0
        }),
        t = n.prototype;
    return t._resetLayout = function() {
        this.y = 0
    }, t._getItemLayoutPosition = function(e) {
        e.getSize();
        var n = (this.isotope.size.innerWidth - e.size.outerWidth) * this.options.horizontalAlignment,
            t = this.y;
        return this.y += e.size.outerHeight, {
            x: n,
            y: t
        }
    }, t._getContainerSize = function() {
        return {
            height: this.y
        }
    }, n
}),
function(e, n) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(t, a, i, r, o, s) {
        return n(e, t, a, i, r, o, s)
    }) : "object" == typeof module && module.exports ? module.exports = n(e, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : e.Isotope = n(e, e.Outlayer, e.getSize, e.matchesSelector, e.fizzyUIUtils, e.Isotope.Item, e.Isotope.LayoutMode)
}(window, function(e, n, t, a, i, r, o) {
    var s = e.jQuery,
        m = String.prototype.trim ? function(e) {
            return e.trim()
        } : function(e) {
            return e.replace(/^\s+|\s+$/g, "")
        },
        u = n.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    u.Item = r, u.LayoutMode = o;
    var l = u.prototype;
    l._create = function() {
        for (var e in this.itemGUID = 0, this._sorters = {}, this._getSorters(), n.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], o.modes) this._initLayoutMode(e)
    }, l.reloadItems = function() {
        this.itemGUID = 0, n.prototype.reloadItems.call(this)
    }, l._itemize = function() {
        for (var e = n.prototype._itemize.apply(this, arguments), t = 0; t < e.length; t++) {
            e[t].id = this.itemGUID++
        }
        return this._updateItemsSortData(e), e
    }, l._initLayoutMode = function(e) {
        var n = o.modes[e],
            t = this.options[e] || {};
        this.options[e] = n.options ? i.extend(n.options, t) : t, this.modes[e] = new n(this)
    }, l.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, l._layout = function() {
        var e = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, e), this._isLayoutInited = !0
    }, l.arrange = function(e) {
        this.option(e), this._getIsInstant();
        var n = this._filter(this.items);
        this.filteredItems = n.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [n]) : this._hideReveal(n), this._sort(), this._layout()
    }, l._init = l.arrange, l._hideReveal = function(e) {
        this.reveal(e.needReveal), this.hide(e.needHide)
    }, l._getIsInstant = function() {
        var e = this._getOption("layoutInstant"),
            n = void 0 !== e ? e : !this._isLayoutInited;
        return this._isInstant = n, n
    }, l._bindArrangeComplete = function() {
        function e() {
            n && t && a && i.dispatchEvent("arrangeComplete", null, [i.filteredItems])
        }
        var n, t, a, i = this;
        this.once("layoutComplete", function() {
            n = !0, e()
        }), this.once("hideComplete", function() {
            t = !0, e()
        }), this.once("revealComplete", function() {
            a = !0, e()
        })
    }, l._filter = function(e) {
        var n = this.options.filter;
        n = n || "*";
        for (var t = [], a = [], i = [], r = this._getFilterTest(n), o = 0; o < e.length; o++) {
            var s = e[o];
            if (!s.isIgnored) {
                var m = r(s);
                m && t.push(s), m && s.isHidden ? a.push(s) : m || s.isHidden || i.push(s)
            }
        }
        return {
            matches: t,
            needReveal: a,
            needHide: i
        }
    }, l._getFilterTest = function(e) {
        return s && this.options.isJQueryFiltering ? function(n) {
            return s(n.element).is(e)
        } : "function" == typeof e ? function(n) {
            return e(n.element)
        } : function(n) {
            return a(n.element, e)
        }
    }, l.updateSortData = function(e) {
        var n;
        e ? (e = i.makeArray(e), n = this.getItems(e)) : n = this.items, this._getSorters(), this._updateItemsSortData(n)
    }, l._getSorters = function() {
        var e = this.options.getSortData;
        for (var n in e) {
            var t = e[n];
            this._sorters[n] = c(t)
        }
    }, l._updateItemsSortData = function(e) {
        for (var n = e && e.length, t = 0; n && t < n; t++) {
            e[t].updateSortData()
        }
    };
    var c = function() {
        return function(e) {
            if ("string" != typeof e) return e;
            var n = m(e).split(" "),
                t = n[0],
                a = t.match(/^\[(.+)\]$/),
                i = function(e, n) {
                    return e ? function(n) {
                        return n.getAttribute(e)
                    } : function(e) {
                        var t = e.querySelector(n);
                        return t && t.textContent
                    }
                }(a && a[1], t),
                r = u.sortDataParsers[n[1]];
            return r ? function(e) {
                return e && r(i(e))
            } : function(e) {
                return e && i(e)
            }
        }
    }();
    u.sortDataParsers = {
        parseInt: function(e) {
            return parseInt(e, 10)
        },
        parseFloat: function(e) {
            return parseFloat(e)
        }
    }, l._sort = function() {
        if (this.options.sortBy) {
            var e = i.makeArray(this.options.sortBy);
            this._getIsSameSortBy(e) || (this.sortHistory = e.concat(this.sortHistory));
            var n = function(e, n) {
                return function(t, a) {
                    for (var i = 0; i < e.length; i++) {
                        var r = e[i],
                            o = t.sortData[r],
                            s = a.sortData[r];
                        if (o > s || o < s) return (o > s ? 1 : -1) * ((void 0 !== n[r] ? n[r] : n) ? 1 : -1)
                    }
                    return 0
                }
            }(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(n)
        }
    }, l._getIsSameSortBy = function(e) {
        for (var n = 0; n < e.length; n++)
            if (e[n] != this.sortHistory[n]) return !1;
        return !0
    }, l._mode = function() {
        var e = this.options.layoutMode,
            n = this.modes[e];
        if (!n) throw new Error("No layout mode: " + e);
        return n.options = this.options[e], n
    }, l._resetLayout = function() {
        n.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, l._getItemLayoutPosition = function(e) {
        return this._mode()._getItemLayoutPosition(e)
    }, l._manageStamp = function(e) {
        this._mode()._manageStamp(e)
    }, l._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }, l.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }, l.appended = function(e) {
        var n = this.addItems(e);
        if (n.length) {
            var t = this._filterRevealAdded(n);
            this.filteredItems = this.filteredItems.concat(t)
        }
    }, l.prepended = function(e) {
        var n = this._itemize(e);
        if (n.length) {
            this._resetLayout(), this._manageStamps();
            var t = this._filterRevealAdded(n);
            this.layoutItems(this.filteredItems), this.filteredItems = t.concat(this.filteredItems), this.items = n.concat(this.items)
        }
    }, l._filterRevealAdded = function(e) {
        var n = this._filter(e);
        return this.hide(n.needHide), this.reveal(n.matches), this.layoutItems(n.matches, !0), n.matches
    }, l.insert = function(e) {
        var n = this.addItems(e);
        if (n.length) {
            var t, a, i = n.length;
            for (t = 0; t < i; t++) a = n[t], this.element.appendChild(a.element);
            var r = this._filter(n).matches;
            for (t = 0; t < i; t++) n[t].isLayoutInstant = !0;
            for (this.arrange(), t = 0; t < i; t++) delete n[t].isLayoutInstant;
            this.reveal(r)
        }
    };
    var v = l.remove;
    return l.remove = function(e) {
        e = i.makeArray(e);
        var n = this.getItems(e);
        v.call(this, e);
        for (var t = n && n.length, a = 0; t && a < t; a++) {
            var r = n[a];
            i.removeFrom(this.filteredItems, r)
        }
    }, l.shuffle = function() {
        for (var e = 0; e < this.items.length; e++) {
            this.items[e].sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, l._noTransition = function(e, n) {
        var t = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var a = e.apply(this, n);
        return this.options.transitionDuration = t, a
    }, l.getFilteredItemElements = function() {
        return this.filteredItems.map(function(e) {
            return e.element
        })
    }, u
}),
function(e, n) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", n) : "object" == typeof module && module.exports ? module.exports = n() : e.EvEmitter = n()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var n = e.prototype;
    return n.on = function(e, n) {
        if (e && n) {
            var t = this._events = this._events || {},
                a = t[e] = t[e] || [];
            return -1 == a.indexOf(n) && a.push(n), this
        }
    }, n.once = function(e, n) {
        if (e && n) {
            this.on(e, n);
            var t = this._onceEvents = this._onceEvents || {};
            return (t[e] = t[e] || {})[n] = !0, this
        }
    }, n.off = function(e, n) {
        var t = this._events && this._events[e];
        if (t && t.length) {
            var a = t.indexOf(n);
            return -1 != a && t.splice(a, 1), this
        }
    }, n.emitEvent = function(e, n) {
        var t = this._events && this._events[e];
        if (t && t.length) {
            var a = 0,
                i = t[a];
            n = n || [];
            for (var r = this._onceEvents && this._onceEvents[e]; i;) {
                var o = r && r[i];
                o && (this.off(e, i), delete r[i]), i.apply(this, n), i = t[a += o ? 0 : 1]
            }
            return this
        }
    }, e
}),
function(e, n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(t) {
        return n(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = n(e, require("ev-emitter")) : e.imagesLoaded = n(e, e.EvEmitter)
}(window, function(e, n) {
    function t(e, n) {
        for (var t in n) e[t] = n[t];
        return e
    }

    function a(e, n, i) {
        return this instanceof a ? ("string" == typeof e && (e = document.querySelectorAll(e)), this.elements = function(e) {
            var n = [];
            if (Array.isArray(e)) n = e;
            else if ("number" == typeof e.length)
                for (var t = 0; t < e.length; t++) n.push(e[t]);
            else n.push(e);
            return n
        }(e), this.options = t({}, this.options), "function" == typeof n ? i = n : t(this.options, n), i && this.on("always", i), this.getImages(), o && (this.jqDeferred = new o.Deferred), void setTimeout(function() {
            this.check()
        }.bind(this))) : new a(e, n, i)
    }

    function i(e) {
        this.img = e
    }

    function r(e, n) {
        this.url = e, this.element = n, this.img = new Image
    }
    var o = e.jQuery,
        s = e.console;
    a.prototype = Object.create(n.prototype), a.prototype.options = {}, a.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, a.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
        var n = e.nodeType;
        if (n && m[n]) {
            for (var t = e.querySelectorAll("img"), a = 0; a < t.length; a++) {
                var i = t[a];
                this.addImage(i)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (a = 0; a < r.length; a++) {
                    var o = r[a];
                    this.addElementBackgroundImages(o)
                }
            }
        }
    };
    var m = {
        1: !0,
        9: !0,
        11: !0
    };
    return a.prototype.addElementBackgroundImages = function(e) {
        var n = getComputedStyle(e);
        if (n)
            for (var t = /url\((['"])?(.*?)\1\)/gi, a = t.exec(n.backgroundImage); null !== a;) {
                var i = a && a[2];
                i && this.addBackground(i, e), a = t.exec(n.backgroundImage)
            }
    }, a.prototype.addImage = function(e) {
        var n = new i(e);
        this.images.push(n)
    }, a.prototype.addBackground = function(e, n) {
        var t = new r(e, n);
        this.images.push(t)
    }, a.prototype.check = function() {
        function e(e, t, a) {
            setTimeout(function() {
                n.progress(e, t, a)
            })
        }
        var n = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(n) {
            n.once("progress", e), n.check()
        }) : void this.complete()
    }, a.prototype.progress = function(e, n, t) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, n]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && s && s.log("progress: " + t, e, n)
    }, a.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var n = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[n](this)
        }
    }, i.prototype = Object.create(n.prototype), i.prototype.check = function() {
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, i.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, i.prototype.confirm = function(e, n) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, n])
    }, i.prototype.handleEvent = function(e) {
        var n = "on" + e.type;
        this[n] && this[n](e)
    }, i.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, i.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, i.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, r.prototype = Object.create(i.prototype), r.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, r.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, r.prototype.confirm = function(e, n) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, n])
    }, a.makeJQueryPlugin = function(n) {
        (n = n || e.jQuery) && ((o = n).fn.imagesLoaded = function(e, n) {
            return new a(this, e, n).jqDeferred.promise(o(this))
        })
    }, a.makeJQueryPlugin(), a
}),
function(e) {
    e.fn.countTo = function(n) {
        return n = n || {}, e(this).each(function() {
            var t = e.extend({}, e.fn.countTo.defaults, {
                    from: e(this).data("from"),
                    to: e(this).data("to"),
                    speed: e(this).data("speed"),
                    refreshInterval: e(this).data("refresh-interval"),
                    decimals: e(this).data("decimals")
                }, n),
                a = Math.ceil(t.speed / t.refreshInterval),
                i = (t.to - t.from) / a,
                r = this,
                o = e(this),
                s = 0,
                m = t.from,
                u = o.data("countTo") || {};

            function l(e) {
                var n = t.formatter.call(r, e, t);
                o.html(n)
            }
            o.data("countTo", u), u.interval && clearInterval(u.interval), u.interval = setInterval(function() {
                s++, l(m += i), "function" == typeof t.onUpdate && t.onUpdate.call(r, m);
                s >= a && (o.removeData("countTo"), clearInterval(u.interval), m = t.to, "function" == typeof t.onComplete && t.onComplete.call(r, m))
            }, t.refreshInterval), l(m)
        })
    }, e.fn.countTo.defaults = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: function(e, n) {
            return e.toFixed(n.decimals)
        },
        onUpdate: null,
        onComplete: null
    }
}(jQuery),
function(e) {
    "use strict";
    var n = {
        initialize: function() {
            this.event(), this.hoverDropdown(), this.navbarSticky(), this.navbarScrollspy()
        },
        event: function() {
            var n = e("nav.navbar.bootsnav");
            if (n.hasClass("navbar-sticky") && n.wrap("<div class='wrap-sticky'></div>"), n.hasClass("brand-center")) {
                var t = new Array,
                    a = e("nav.brand-center"),
                    i = a.find("ul.navbar-nav");
                a.prepend("<span class='storage-name' style='display:none;'></span>"), a.find("ul.navbar-nav > li").each(function() {
                    if (e(this).hasClass("active")) {
                        var n = e("a", this).eq(0).text();
                        e(".storage-name").html(n)
                    }
                    t.push(e(this).html())
                });
                var r = t.splice(0, Math.round(t.length / 2)),
                    o = t,
                    s = "",
                    m = function(e) {
                        s = "";
                        for (var n = 0; n < e.length; n++) s += "<li>" + e[n] + "</li>"
                    };
                m(r), i.html(s), a.find("ul.nav").first().addClass("navbar-left"), m(o), i.after('<ul class="nav navbar-nav"></ul>').next().html(s), a.find("ul.nav").last().addClass("navbar-right"), a.find("ul.nav.navbar-left").wrap("<div class='col-half left'></div>"), a.find("ul.nav.navbar-right").wrap("<div class='col-half right'></div>"), a.find("ul.navbar-nav > li").each(function() {
                    var n = e("ul.dropdown-menu", this),
                        t = e("ul.megamenu-content", this);
                    n.closest("li").addClass("dropdown"), t.closest("li").addClass("megamenu-fw")
                });
                var u = e(".storage-name").html();
                "" == !u && e("ul.navbar-nav > li:contains('" + u + "')").addClass("active")
            }
            n.hasClass("navbar-sidebar") ? (e("body").addClass("wrap-nav-sidebar"), n.wrapInner("<div class='scroller'></div>")) : e(".bootsnav").addClass("on"), n.find("ul.nav").hasClass("navbar-center") && n.addClass("menu-center"), n.hasClass("navbar-full") ? (e("nav.navbar.bootsnav").find("ul.nav").wrap("<div class='wrap-full-menu'></div>"), e(".wrap-full-menu").wrap("<div class='nav-full'></div>"), e("ul.nav.navbar-nav").prepend("<li class='close-full-menu'><a href='#'><i class='fa fa-times'></i></a></li>")) : n.hasClass("navbar-mobile") ? n.removeClass("no-full") : n.addClass("no-full"), n.hasClass("navbar-mobile") && (e(".navbar-collapse").on("shown.bs.collapse", function() {
                e("body").addClass("side-right")
            }), e(".navbar-collapse").on("hide.bs.collapse", function() {
                e("body").removeClass("side-right")
            }), e(window).on("resize", function() {
                e("body").removeClass("side-right")
            })), n.hasClass("no-background") && e(window).on("scroll", function() {
                e(window).scrollTop() > 34 ? e(".navbar-fixed").removeClass("no-background") : e(".navbar-fixed").addClass("no-background")
            }), n.hasClass("navbar-transparent") && e(window).on("scroll", function() {
                e(window).scrollTop() > 34 ? e(".navbar-fixed").removeClass("navbar-transparent") : e(".navbar-fixed").addClass("navbar-transparent")
            }), e(".btn-cart").on("click", function(e) {
                e.stopPropagation()
            }), e("nav.navbar.bootsnav .attr-nav").each(function() {
                e("li.search > a", this).on("click", function(n) {
                    n.preventDefault(), e(".top-search").slideToggle()
                })
            }), e(".input-group-addon.close-search").on("click", function() {
                e(".top-search").slideUp()
            }), e("nav.navbar.bootsnav .attr-nav").each(function() {
                e("li.side-menu > a", this).on("click", function(n) {
                    n.preventDefault(), e("nav.navbar.bootsnav > .side").toggleClass("on"), e("body").toggleClass("on-side")
                })
            }), e(".side .close-side").on("click", function(n) {
                n.preventDefault(), e("nav.navbar.bootsnav > .side").removeClass("on"), e("body").removeClass("on-side")
            }), e("body").wrapInner("<div class='wrapper'></div>")
        },
        hoverDropdown: function() {
            var n = e("nav.navbar.bootsnav"),
                t = e(window).width(),
                a = e(window).height(),
                i = n.find("ul.nav").data("in"),
                r = n.find("ul.nav").data("out");
            if (t < 991) {
                e(".scroller").css("height", "auto"), e("nav.navbar.bootsnav ul.nav").find("li.dropdown").off("mouseenter"), e("nav.navbar.bootsnav ul.nav").find("li.dropdown").off("mouseleave"), e("nav.navbar.bootsnav ul.nav").find(".title").off("mouseenter"), e("nav.navbar.bootsnav ul.nav").off("mouseleave"), e(".navbar-collapse").removeClass("animated"), e("nav.navbar.bootsnav ul.nav").each(function() {
                    e(".dropdown-menu", this).addClass("animated"), e(".dropdown-menu", this).removeClass(r), e("a.dropdown-toggle", this).off("click"), e("a.dropdown-toggle", this).on("click", function(n) {
                        return n.stopPropagation(), e(this).closest("li.dropdown").find(".dropdown-menu").first().stop().fadeToggle().toggleClass(i), e(this).closest("li.dropdown").first().toggleClass("on"), !1
                    }), e("li.dropdown", this).each(function() {
                        return e(this).find(".dropdown-menu").stop().fadeOut(), e(this).on("hidden.bs.dropdown", function() {
                            e(this).find(".dropdown-menu").stop().fadeOut()
                        }), !1
                    }), e(".megamenu-fw", this).each(function() {
                        e(".col-menu", this).each(function() {
                            e(".content", this).addClass("animated"), e(".content", this).stop().fadeOut(), e(".title", this).off("click"), e(".title", this).on("click", function() {
                                return e(this).closest(".col-menu").find(".content").stop().fadeToggle().addClass(i), e(this).closest(".col-menu").toggleClass("on"), !1
                            }), e(".content", this).on("click", function(e) {
                                e.stopPropagation()
                            })
                        })
                    })
                });
                var o = function() {
                    e("li.dropdown", this).removeClass("on"), e(".dropdown-menu", this).stop().fadeOut(), e(".dropdown-menu", this).removeClass(i), e(".col-menu", this).removeClass("on"), e(".col-menu .content", this).stop().fadeOut(), e(".col-menu .content", this).removeClass(i)
                };
                e("nav.navbar.bootsnav").on("mouseleave", function() {
                    o()
                }), e("nav.navbar.bootsnav .attr-nav").each(function() {
                    e(".dropdown-menu", this).removeClass("animated"), e("li.dropdown", this).off("mouseenter"), e("li.dropdown", this).off("mouseleave"), e("a.dropdown-toggle", this).off("click"), e("a.dropdown-toggle", this).on("click", function(n) {
                        n.stopPropagation(), e(this).closest("li.dropdown").find(".dropdown-menu").first().stop().fadeToggle(), e(".navbar-toggle").each(function() {
                            e(".fa", this).removeClass("fa-times"), e(".fa", this).addClass("fa-bars"), e(".navbar-collapse").removeClass("in"), e(".navbar-collapse").removeClass("on")
                        })
                    }), e(this).on("mouseleave", function() {
                        return e(".dropdown-menu", this).stop().fadeOut(), e("li.dropdown", this).removeClass("on"), !1
                    })
                }), e(".navbar-toggle").each(function() {
                    e(this).off("click"), e(this).on("click", function() {
                        e(".fa", this).toggleClass("fa-bars"), e(".fa", this).toggleClass("fa-times"), o()
                    })
                })
            } else t > 991 && (e(".scroller").css("height", a + "px"), n.hasClass("navbar-sidebar") ? e("nav.navbar.bootsnav ul.nav").each(function() {
                e("a.dropdown-toggle", this).off("click"), e("a.dropdown-toggle", this).on("click", function(e) {
                    e.stopPropagation()
                }), e(".dropdown-menu", this).addClass("animated"), e("li.dropdown", this).on("mouseenter", function() {
                    return e(".dropdown-menu", this).eq(0).removeClass(r), e(".dropdown-menu", this).eq(0).stop().fadeIn().addClass(i), e(this).addClass("on"), !1
                }), e(".col-menu").each(function() {
                    e(".content", this).addClass("animated"), e(".title", this).on("mouseenter", function() {
                        return e(this).closest(".col-menu").find(".content").stop().fadeIn().addClass(i), e(this).closest(".col-menu").addClass("on"), !1
                    })
                }), e(this).on("mouseleave", function() {
                    return e(".dropdown-menu", this).stop().removeClass(i), e(".dropdown-menu", this).stop().addClass(r).fadeOut(), e(".col-menu", this).find(".content").stop().fadeOut().removeClass(i), e(".col-menu", this).removeClass("on"), e("li.dropdown", this).removeClass("on"), !1
                })
            }) : e("nav.navbar.bootsnav ul.nav").each(function() {
                e("a.dropdown-toggle", this).off("click"), e("a.dropdown-toggle", this).on("click", function(e) {
                    e.stopPropagation()
                }), e(".megamenu-fw", this).each(function() {
                    e(".title", this).off("click"), e("a.dropdown-toggle", this).off("click"), e(".content").removeClass("animated")
                }), e(".dropdown-menu", this).addClass("animated"), e("li.dropdown", this).on("mouseenter", function() {
                    return e(".dropdown-menu", this).eq(0).removeClass(r), e(".dropdown-menu", this).eq(0).stop().fadeIn().addClass(i), e(this).addClass("on"), !1
                }), e("li.dropdown", this).on("mouseleave", function() {
                    e(".dropdown-menu", this).eq(0).removeClass(i), e(".dropdown-menu", this).eq(0).stop().fadeOut().addClass(r), e(this).removeClass("on")
                }), e(this).on("mouseleave", function() {
                    return e(".dropdown-menu", this).removeClass(i), e(".dropdown-menu", this).eq(0).stop().fadeOut().addClass(r), e("li.dropdown", this).removeClass("on"), !1
                })
            }), e("nav.navbar.bootsnav .attr-nav").each(function() {
                e("a.dropdown-toggle", this).off("click"), e("a.dropdown-toggle", this).on("click", function(e) {
                    e.stopPropagation()
                }), e(".dropdown-menu", this).addClass("animated"), e("li.dropdown", this).on("mouseenter", function() {
                    return e(".dropdown-menu", this).eq(0).removeClass(r), e(".dropdown-menu", this).eq(0).stop().fadeIn().addClass(i), e(this).addClass("on"), !1
                }), e("li.dropdown", this).on("mouseleave", function() {
                    e(".dropdown-menu", this).eq(0).removeClass(i), e(".dropdown-menu", this).eq(0).stop().fadeOut().addClass(r), e(this).removeClass("on")
                }), e(this).on("mouseleave", function() {
                    return e(".dropdown-menu", this).removeClass(i), e(".dropdown-menu", this).eq(0).stop().fadeOut().addClass(r), e("li.dropdown", this).removeClass("on"), !1
                })
            }));
            if (n.hasClass("navbar-full")) {
                var s = e(window).height(),
                    m = e(window).width();
                e(".nav-full").css("height", s + "px"), e(".wrap-full-menu").css("height", s + "px"), e(".wrap-full-menu").css("width", m + "px"), e(".navbar-collapse").addClass("animated"), e(".navbar-toggle").each(function() {
                    var n = e(this).data("target");
                    e(this).off("click"), e(this).on("click", function(t) {
                        return t.preventDefault(), e(n).removeClass(r), e(n).addClass("in"), e(n).addClass(i), !1
                    }), e("li.close-full-menu").on("click", function(t) {
                        return t.preventDefault(), e(n).addClass(r), setTimeout(function() {
                            e(n).removeClass("in"), e(n).removeClass(i)
                        }, 500), !1
                    })
                })
            }
        },
        navbarSticky: function() {
            var n = e("nav.navbar.bootsnav");
            if (n.hasClass("navbar-sticky")) {
                var t = n.height();
                e(".wrap-sticky").height(t);
                var a = e(".wrap-sticky").offset().top;
                e(window).on("scroll", function() {
                    e(window).scrollTop() > a ? n.addClass("sticked") : n.removeClass("sticked")
                })
            }
        },
        navbarScrollspy: function() {
            var n = e(".navbar-scrollspy"),
                t = e("body"),
                a = e("nav.navbar.bootsnav"),
                i = a.outerHeight();
            if (n.length) {
                t.scrollspy({
                    target: ".navbar",
                    offset: i
                }), e(".scroll").on("click", function(n) {
                    n.preventDefault(), e(".scroll").removeClass("active"), e(this).addClass("active"), e(".navbar-collapse").removeClass("in"), e(".navbar-toggle").each(function() {
                        e(".fa", this).removeClass("fa-times"), e(".fa", this).addClass("fa-bars")
                    });
                    e(window).scrollTop();
                    var t = e(this).find("a"),
                        i = e(t.attr("href")).offset().top,
                        r = e(window).width(),
                        o = a.data("minus-value-desktop"),
                        s = a.data("minus-value-mobile"),
                        m = a.data("speed");
                    if (r > 992) var u = i - o;
                    else u = i - s;
                    e("html, body").stop().animate({
                        scrollTop: u
                    }, m)
                });
                var r = function() {
                    var e = t.data("bs.scrollspy");
                    e && (i = a.outerHeight(), e.options.offset = i, t.data("bs.scrollspy", e), t.scrollspy("refresh"))
                };
                e(window).on("resize", function() {
                    clearTimeout(e);
                    var e = setTimeout(r, 200)
                })
            }
        }
    };
    e(document).ready(function() {
        n.initialize()
    }), e(window).on("resize", function() {
        n.hoverDropdown(), setTimeout(function() {
            n.navbarSticky()
        }, 500), e(".navbar-toggle").each(function() {
            e(".fa", this).removeClass("fa-times"), e(".fa", this).addClass("fa-bars"), e(this).removeClass("fixed")
        }), e(".navbar-collapse").removeClass("in"), e(".navbar-collapse").removeClass("on"), e(".navbar-collapse").removeClass("bounceIn")
    })
}(jQuery),
function(e) {
    "use strict";
    e(document).on("ready", function() {
        function n(n) {
            n.each(function() {
                var n = e(this),
                    t = n.data("animation");
                n.addClass(t).one("webkitAnimationEnd animationend", function() {
                    n.removeClass(t)
                })
            })
        }
        new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0
        }).init(), e("body").scrollspy({
            target: ".navbar-collapse",
            offset: 200
        }), e("a.smooth-menu").on("click", function(n) {
            var t = e(this);
            e("html, body").stop().animate({
                scrollTop: e(t.attr("href")).offset().top - "75" + "px"
            }, 1500, "easeInOutExpo"), n.preventDefault()
        });
        var t = e(".animate_text"),
            a = t.find(".item:first").find("[data-animation ^= 'animated']");
        t.carousel(), n(a), t.on("slide.bs.carousel", function(t) {
            n(e(t.relatedTarget).find("[data-animation ^= 'animated']"))
        }), e(window).on("resize", function() {
            e(".equal-height").equalHeights()
        }), e(".equal-height").equalHeights().find("img, iframe, object").on("load", function() {
            e(".equal-height").equalHeights()
        }), e("#portfolio-grid,.blog-masonry").imagesLoaded(function() {
            e(".mix-item-menu").on("click", "button", function() {
                var t = e(this).attr("data-filter");
                n.isotope({
                    filter: t
                })
            }), e(".mix-item-menu button").on("click", function(n) {
                e(this).siblings(".active").removeClass("active"), e(this).addClass("active"), n.preventDefault()
            });
            var n = e("#portfolio-grid").isotope({
                itemSelector: ".pf-item",
                percentPosition: !0,
                masonry: {
                    columnWidth: ".pf-item"
                }
            });
            e(".blog-masonry").isotope({
                itemSelector: ".blog-item",
                percentPosition: !0,
                masonry: {
                    columnWidth: ".blog-item"
                }
            })
        }), e(".timer").countTo(), e(".fun-fact").appear(function() {
            e(".timer").countTo()
        }, {
            accY: -100
        }), e(".popup-link").magnificPopup({
            type: "image"
        }), e(".popup-gallery").magnificPopup({
            type: "image",
            gallery: {
                enabled: !0
            }
        }), e(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        }), e(".magnific-mix-gallery").each(function() {
            var n = e(this).find(".item"),
                t = [];
            n.each(function() {
                var n = e(this),
                    a = "image";
                n.hasClass("magnific-iframe") && (a = "iframe");
                var i = {
                    src: n.attr("href"),
                    type: a
                };
                i.title = n.data("title"), t.push(i)
            }), n.magnificPopup({
                mainClass: "mfp-fade",
                items: t,
                gallery: {
                    enabled: !0,
                    tPrev: e(this).data("prev-text"),
                    tNext: e(this).data("next-text")
                },
                type: "image",
                callbacks: {
                    beforeOpen: function() {
                        var e = n.index(this.st.el); - 1 !== e && this.goTo(e)
                    }
                }
            })
        }), e(".management-carousel").owlCarousel({
            loop: !1,
            nav: !1,
            dots: !0,
            autoplay: !0,
            items: 1,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        }), e(".workplace-carousel").owlCarousel({
            loop: !1,
            nav: !0,
            dots: !1,
            autoplay: !0,
            items: 1,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        }), e(".team-carousel").owlCarousel({
            loop: !1,
            margin: 30,
            nav: !0,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: !1,
            autoplay: !0,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        }), e(".blog-carousel").owlCarousel({
            loop: !1,
            margin: 30,
            nav: !0,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: !1,
            autoplay: !0,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        }), e(".services-carousel").owlCarousel({
            loop: !1,
            margin: 30,
            nav: !0,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: !1,
            autoplay: !0,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        }), e(".portfolio-carousel").owlCarousel({
            loop: !1,
            margin: 1,
            nav: !0,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: !1,
            autoplay: !0,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 5
                }
            }
        }), e(".clients-items").owlCarousel({
            loop: !1,
            margin: 30,
            nav: !1,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: !1,
            autoplay: !0,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        }), e(window).on("load", function() {
            // e(".se-pre-con").fadeOut("slow")
        }), e(".contact-form").each(function() {
            e(this).submit(function() {
                var n = e(this).attr("action");
                return e("#message").slideUp(750, function() {
                    e("#message").hide(), e("#submit").after('<img src="assets/img/ajax-loader.gif" class="loader" />').attr("disabled", "disabled"), e.post(n, {
                        name: e("#name").val(),
                        email: e("#email").val(),
                        phone: e("#phone").val(),
                        comments: e("#comments").val()
                    }, function(n) {
                        document.getElementById("message").innerHTML = n, e("#message").slideDown("slow"), e(".contact-form img.loader").fadeOut("slow", function() {
                            e(this).remove()
                        }), e("#submit").removeAttr("disabled")
                    })
                }), !1
            })
        })
    })
}(jQuery);
var pJS = function(e, n) {
var t = document.querySelector("#" + e + " > .particles-js-canvas-el");
this.pJS = {
    canvas: {
        el: t,
        w: t.offsetWidth,
        h: t.offsetHeight
    },
    particles: {
        number: {
            value: 400,
            density: {
                enable: !0,
                value_area: 800
            }
        },
        color: {
            value: "#fff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#ff0000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 1,
            random: !1,
            anim: {
                enable: !1,
                speed: 2,
                opacity_min: 0,
                sync: !1
            }
        },
        size: {
            value: 20,
            random: !1,
            anim: {
                enable: !1,
                speed: 20,
                size_min: 0,
                sync: !1
            }
        },
        line_linked: {
            enable: !0,
            distance: 100,
            color: "#fff",
            opacity: 1,
            width: 1
        },
        move: {
            enable: !0,
            speed: 2,
            direction: "none",
            random: !1,
            straight: !1,
            out_mode: "out",
            bounce: !1,
            attract: {
                enable: !1,
                rotateX: 3e3,
                rotateY: 3e3
            }
        },
        array: []
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: !0,
                mode: "grab"
            },
            onclick: {
                enable: !0,
                mode: "push"
            },
            resize: !0
        },
        modes: {
            grab: {
                distance: 100,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 200,
                size: 80,
                duration: .4
            },
            repulse: {
                distance: 200,
                duration: .4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        },
        mouse: {}
    },
    retina_detect: !1,
    fn: {
        interact: {},
        modes: {},
        vendors: {}
    },
    tmp: {}
};
var a = this.pJS;
n && Object.deepExtend(a, n), a.tmp.obj = {
    size_value: a.particles.size.value,
    size_anim_speed: a.particles.size.anim.speed,
    move_speed: a.particles.move.speed,
    line_linked_distance: a.particles.line_linked.distance,
    line_linked_width: a.particles.line_linked.width,
    mode_grab_distance: a.interactivity.modes.grab.distance,
    mode_bubble_distance: a.interactivity.modes.bubble.distance,
    mode_bubble_size: a.interactivity.modes.bubble.size,
    mode_repulse_distance: a.interactivity.modes.repulse.distance
}, a.fn.retinaInit = function() {
    a.retina_detect && window.devicePixelRatio > 1 ? (a.canvas.pxratio = window.devicePixelRatio, a.tmp.retina = !0) : (a.canvas.pxratio = 1, a.tmp.retina = !1), a.canvas.w = a.canvas.el.offsetWidth * a.canvas.pxratio, a.canvas.h = a.canvas.el.offsetHeight * a.canvas.pxratio, a.particles.size.value = a.tmp.obj.size_value * a.canvas.pxratio, a.particles.size.anim.speed = a.tmp.obj.size_anim_speed * a.canvas.pxratio, a.particles.move.speed = a.tmp.obj.move_speed * a.canvas.pxratio, a.particles.line_linked.distance = a.tmp.obj.line_linked_distance * a.canvas.pxratio, a.interactivity.modes.grab.distance = a.tmp.obj.mode_grab_distance * a.canvas.pxratio, a.interactivity.modes.bubble.distance = a.tmp.obj.mode_bubble_distance * a.canvas.pxratio, a.particles.line_linked.width = a.tmp.obj.line_linked_width * a.canvas.pxratio, a.interactivity.modes.bubble.size = a.tmp.obj.mode_bubble_size * a.canvas.pxratio, a.interactivity.modes.repulse.distance = a.tmp.obj.mode_repulse_distance * a.canvas.pxratio
}, a.fn.canvasInit = function() {
    a.canvas.ctx = a.canvas.el.getContext("2d")
}, a.fn.canvasSize = function() {
    a.canvas.el.width = a.canvas.w, a.canvas.el.height = a.canvas.h, a && a.interactivity.events.resize && window.addEventListener("resize", function() {
        a.canvas.w = a.canvas.el.offsetWidth, a.canvas.h = a.canvas.el.offsetHeight, a.tmp.retina && (a.canvas.w *= a.canvas.pxratio, a.canvas.h *= a.canvas.pxratio), a.canvas.el.width = a.canvas.w, a.canvas.el.height = a.canvas.h, a.particles.move.enable || (a.fn.particlesEmpty(), a.fn.particlesCreate(), a.fn.particlesDraw(), a.fn.vendors.densityAutoParticles()), a.fn.vendors.densityAutoParticles()
    })
}, a.fn.canvasPaint = function() {
    a.canvas.ctx.fillRect(0, 0, a.canvas.w, a.canvas.h)
}, a.fn.canvasClear = function() {
    a.canvas.ctx.clearRect(0, 0, a.canvas.w, a.canvas.h)
}, a.fn.particle = function(e, n, t) {
    if (this.radius = (a.particles.size.random ? Math.random() : 1) * a.particles.size.value, a.particles.size.anim.enable && (this.size_status = !1, this.vs = a.particles.size.anim.speed / 100, a.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = t ? t.x : Math.random() * a.canvas.w, this.y = t ? t.y : Math.random() * a.canvas.h, this.x > a.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > a.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), a.particles.move.bounce && a.fn.vendors.checkOverlap(this, t), this.color = {}, "object" == typeof e.value)
        if (e.value instanceof Array) {
            var i = e.value[Math.floor(Math.random() * a.particles.color.value.length)];
            this.color.rgb = hexToRgb(i)
        } else null != e.value.r && null != e.value.g && null != e.value.b && (this.color.rgb = {
            r: e.value.r,
            g: e.value.g,
            b: e.value.b
        }), null != e.value.h && null != e.value.s && null != e.value.l && (this.color.hsl = {
            h: e.value.h,
            s: e.value.s,
            l: e.value.l
        });
    else "random" == e.value ? this.color.rgb = {
        r: Math.floor(256 * Math.random()) + 0,
        g: Math.floor(256 * Math.random()) + 0,
        b: Math.floor(256 * Math.random()) + 0
    } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
    this.opacity = (a.particles.opacity.random ? Math.random() : 1) * a.particles.opacity.value, a.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = a.particles.opacity.anim.speed / 100, a.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
    var r = {};
    switch (a.particles.move.direction) {
        case "top":
            r = {
                x: 0,
                y: -1
            };
            break;
        case "top-right":
            r = {
                x: .5,
                y: -.5
            };
            break;
        case "right":
            r = {
                x: 1,
                y: -0
            };
            break;
        case "bottom-right":
            r = {
                x: .5,
                y: .5
            };
            break;
        case "bottom":
            r = {
                x: 0,
                y: 1
            };
            break;
        case "bottom-left":
            r = {
                x: -.5,
                y: 1
            };
            break;
        case "left":
            r = {
                x: -1,
                y: 0
            };
            break;
        case "top-left":
            r = {
                x: -.5,
                y: -.5
            };
            break;
        default:
            r = {
                x: 0,
                y: 0
            }
    }
    a.particles.move.straight ? (this.vx = r.x, this.vy = r.y, a.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = r.x + Math.random() - .5, this.vy = r.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
    var o = a.particles.shape.type;
    if ("object" == typeof o) {
        if (o instanceof Array) {
            var s = o[Math.floor(Math.random() * o.length)];
            this.shape = s
        }
    } else this.shape = o;
    if ("image" == this.shape) {
        var m = a.particles.shape;
        this.img = {
            src: m.image.src,
            ratio: m.image.width / m.image.height
        }, this.img.ratio || (this.img.ratio = 1), "svg" == a.tmp.img_type && null != a.tmp.source_svg && (a.fn.vendors.createSvgImg(this), a.tmp.pushing && (this.img.loaded = !1))
    }
}, a.fn.particle.prototype.draw = function() {
    var e = this;
    if (null != e.radius_bubble) var n = e.radius_bubble;
    else n = e.radius;
    if (null != e.opacity_bubble) var t = e.opacity_bubble;
    else t = e.opacity;
    if (e.color.rgb) var i = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + t + ")";
    else i = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + t + ")";
    switch (a.canvas.ctx.fillStyle = i, a.canvas.ctx.beginPath(), e.shape) {
        case "circle":
            a.canvas.ctx.arc(e.x, e.y, n, 0, 2 * Math.PI, !1);
            break;
        case "edge":
            a.canvas.ctx.rect(e.x - n, e.y - n, 2 * n, 2 * n);
            break;
        case "triangle":
            a.fn.vendors.drawShape(a.canvas.ctx, e.x - n, e.y + n / 1.66, 2 * n, 3, 2);
            break;
        case "polygon":
            a.fn.vendors.drawShape(a.canvas.ctx, e.x - n / (a.particles.shape.polygon.nb_sides / 3.5), e.y - n / .76, 2.66 * n / (a.particles.shape.polygon.nb_sides / 3), a.particles.shape.polygon.nb_sides, 1);
            break;
        case "star":
            a.fn.vendors.drawShape(a.canvas.ctx, e.x - 2 * n / (a.particles.shape.polygon.nb_sides / 4), e.y - n / 1.52, 2 * n * 2.66 / (a.particles.shape.polygon.nb_sides / 3), a.particles.shape.polygon.nb_sides, 2);
            break;
        case "image":
            ;
            if ("svg" == a.tmp.img_type) var r = e.img.obj;
            else r = a.tmp.img_obj;
            r && a.canvas.ctx.drawImage(r, e.x - n, e.y - n, 2 * n, 2 * n / e.img.ratio)
    }
    a.canvas.ctx.closePath(), a.particles.shape.stroke.width > 0 && (a.canvas.ctx.strokeStyle = a.particles.shape.stroke.color, a.canvas.ctx.lineWidth = a.particles.shape.stroke.width, a.canvas.ctx.stroke()), a.canvas.ctx.fill()
}, a.fn.particlesCreate = function() {
    for (var e = 0; e < a.particles.number.value; e++) a.particles.array.push(new a.fn.particle(a.particles.color, a.particles.opacity.value))
}, a.fn.particlesUpdate = function() {
    for (var e = 0; e < a.particles.array.length; e++) {
        var n = a.particles.array[e];
        if (a.particles.move.enable) {
            var t = a.particles.move.speed / 2;
            n.x += n.vx * t, n.y += n.vy * t
        }
        if (a.particles.opacity.anim.enable && (1 == n.opacity_status ? (n.opacity >= a.particles.opacity.value && (n.opacity_status = !1), n.opacity += n.vo) : (n.opacity <= a.particles.opacity.anim.opacity_min && (n.opacity_status = !0), n.opacity -= n.vo), n.opacity < 0 && (n.opacity = 0)), a.particles.size.anim.enable && (1 == n.size_status ? (n.radius >= a.particles.size.value && (n.size_status = !1), n.radius += n.vs) : (n.radius <= a.particles.size.anim.size_min && (n.size_status = !0), n.radius -= n.vs), n.radius < 0 && (n.radius = 0)), "bounce" == a.particles.move.out_mode) var i = {
            x_left: n.radius,
            x_right: a.canvas.w,
            y_top: n.radius,
            y_bottom: a.canvas.h
        };
        else i = {
            x_left: -n.radius,
            x_right: a.canvas.w + n.radius,
            y_top: -n.radius,
            y_bottom: a.canvas.h + n.radius
        };
        switch (n.x - n.radius > a.canvas.w ? (n.x = i.x_left, n.y = Math.random() * a.canvas.h) : n.x + n.radius < 0 && (n.x = i.x_right, n.y = Math.random() * a.canvas.h), n.y - n.radius > a.canvas.h ? (n.y = i.y_top, n.x = Math.random() * a.canvas.w) : n.y + n.radius < 0 && (n.y = i.y_bottom, n.x = Math.random() * a.canvas.w), a.particles.move.out_mode) {
            case "bounce":
                n.x + n.radius > a.canvas.w ? n.vx = -n.vx : n.x - n.radius < 0 && (n.vx = -n.vx), n.y + n.radius > a.canvas.h ? n.vy = -n.vy : n.y - n.radius < 0 && (n.vy = -n.vy)
        }
        if (isInArray("grab", a.interactivity.events.onhover.mode) && a.fn.modes.grabParticle(n), (isInArray("bubble", a.interactivity.events.onhover.mode) || isInArray("bubble", a.interactivity.events.onclick.mode)) && a.fn.modes.bubbleParticle(n), (isInArray("repulse", a.interactivity.events.onhover.mode) || isInArray("repulse", a.interactivity.events.onclick.mode)) && a.fn.modes.repulseParticle(n), a.particles.line_linked.enable || a.particles.move.attract.enable)
            for (var r = e + 1; r < a.particles.array.length; r++) {
                var o = a.particles.array[r];
                a.particles.line_linked.enable && a.fn.interact.linkParticles(n, o), a.particles.move.attract.enable && a.fn.interact.attractParticles(n, o), a.particles.move.bounce && a.fn.interact.bounceParticles(n, o)
            }
    }
}, a.fn.particlesDraw = function() {
    a.canvas.ctx.clearRect(0, 0, a.canvas.w, a.canvas.h), a.fn.particlesUpdate();
    for (var e = 0; e < a.particles.array.length; e++) {
        a.particles.array[e].draw()
    }
}, a.fn.particlesEmpty = function() {
    a.particles.array = []
}, a.fn.particlesRefresh = function() {
    cancelRequestAnimFrame(a.fn.checkAnimFrame), cancelRequestAnimFrame(a.fn.drawAnimFrame), a.tmp.source_svg = void 0, a.tmp.img_obj = void 0, a.tmp.count_svg = 0, a.fn.particlesEmpty(), a.fn.canvasClear(), a.fn.vendors.start()
}, a.fn.interact.linkParticles = function(e, n) {
    var t = e.x - n.x,
        i = e.y - n.y,
        r = Math.sqrt(t * t + i * i);
    if (r <= a.particles.line_linked.distance) {
        var o = a.particles.line_linked.opacity - r / (1 / a.particles.line_linked.opacity) / a.particles.line_linked.distance;
        if (o > 0) {
            var s = a.particles.line_linked.color_rgb_line;
            a.canvas.ctx.strokeStyle = "rgba(" + s.r + "," + s.g + "," + s.b + "," + o + ")", a.canvas.ctx.lineWidth = a.particles.line_linked.width, a.canvas.ctx.beginPath(), a.canvas.ctx.moveTo(e.x, e.y), a.canvas.ctx.lineTo(n.x, n.y), a.canvas.ctx.stroke(), a.canvas.ctx.closePath()
        }
    }
}, a.fn.interact.attractParticles = function(e, n) {
    var t = e.x - n.x,
        i = e.y - n.y;
    if (Math.sqrt(t * t + i * i) <= a.particles.line_linked.distance) {
        var r = t / (1e3 * a.particles.move.attract.rotateX),
            o = i / (1e3 * a.particles.move.attract.rotateY);
        e.vx -= r, e.vy -= o, n.vx += r, n.vy += o
    }
}, a.fn.interact.bounceParticles = function(e, n) {
    var t = e.x - n.x,
        a = e.y - n.y;
    Math.sqrt(t * t + a * a) <= e.radius + n.radius && (e.vx = -e.vx, e.vy = -e.vy, n.vx = -n.vx, n.vy = -n.vy)
}, a.fn.modes.pushParticles = function(e, n) {
    a.tmp.pushing = !0;
    for (var t = 0; t < e; t++) a.particles.array.push(new a.fn.particle(a.particles.color, a.particles.opacity.value, {
        x: n ? n.pos_x : Math.random() * a.canvas.w,
        y: n ? n.pos_y : Math.random() * a.canvas.h
    })), t == e - 1 && (a.particles.move.enable || a.fn.particlesDraw(), a.tmp.pushing = !1)
}, a.fn.modes.removeParticles = function(e) {
    a.particles.array.splice(0, e), a.particles.move.enable || a.fn.particlesDraw()
}, a.fn.modes.bubbleParticle = function(e) {
    if (a.interactivity.events.onhover.enable && isInArray("bubble", a.interactivity.events.onhover.mode)) {
        var n = e.x - a.interactivity.mouse.pos_x,
            t = e.y - a.interactivity.mouse.pos_y,
            i = 1 - (u = Math.sqrt(n * n + t * t)) / a.interactivity.modes.bubble.distance;

        function r() {
            e.opacity_bubble = e.opacity, e.radius_bubble = e.radius
        }
        if (u <= a.interactivity.modes.bubble.distance) {
            if (i >= 0 && "mousemove" == a.interactivity.status) {
                if (a.interactivity.modes.bubble.size != a.particles.size.value)
                    if (a.interactivity.modes.bubble.size > a.particles.size.value) {
                        (s = e.radius + a.interactivity.modes.bubble.size * i) >= 0 && (e.radius_bubble = s)
                    } else {
                        var o = e.radius - a.interactivity.modes.bubble.size,
                            s = e.radius - o * i;
                        e.radius_bubble = s > 0 ? s : 0
                    }
                var m;
                if (a.interactivity.modes.bubble.opacity != a.particles.opacity.value)
                    if (a.interactivity.modes.bubble.opacity > a.particles.opacity.value)(m = a.interactivity.modes.bubble.opacity * i) > e.opacity && m <= a.interactivity.modes.bubble.opacity && (e.opacity_bubble = m);
                    else(m = e.opacity - (a.particles.opacity.value - a.interactivity.modes.bubble.opacity) * i) < e.opacity && m >= a.interactivity.modes.bubble.opacity && (e.opacity_bubble = m)
            }
        } else r();
        "mouseleave" == a.interactivity.status && r()
    } else if (a.interactivity.events.onclick.enable && isInArray("bubble", a.interactivity.events.onclick.mode)) {
        if (a.tmp.bubble_clicking) {
            n = e.x - a.interactivity.mouse.click_pos_x, t = e.y - a.interactivity.mouse.click_pos_y;
            var u = Math.sqrt(n * n + t * t),
                l = ((new Date).getTime() - a.interactivity.mouse.click_time) / 1e3;
            l > a.interactivity.modes.bubble.duration && (a.tmp.bubble_duration_end = !0), l > 2 * a.interactivity.modes.bubble.duration && (a.tmp.bubble_clicking = !1, a.tmp.bubble_duration_end = !1)
        }

        function c(n, t, i, r, o) {
            if (n != t)
                if (a.tmp.bubble_duration_end) null != i && (m = n + (n - (r - l * (r - n) / a.interactivity.modes.bubble.duration)), "size" == o && (e.radius_bubble = m), "opacity" == o && (e.opacity_bubble = m));
                else if (u <= a.interactivity.modes.bubble.distance) {
                if (null != i) var s = i;
                else s = r;
                if (s != n) {
                    var m = r - l * (r - n) / a.interactivity.modes.bubble.duration;
                    "size" == o && (e.radius_bubble = m), "opacity" == o && (e.opacity_bubble = m)
                }
            } else "size" == o && (e.radius_bubble = void 0), "opacity" == o && (e.opacity_bubble = void 0)
        }
        a.tmp.bubble_clicking && (c(a.interactivity.modes.bubble.size, a.particles.size.value, e.radius_bubble, e.radius, "size"), c(a.interactivity.modes.bubble.opacity, a.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"))
    }
}, a.fn.modes.repulseParticle = function(e) {
    if (a.interactivity.events.onhover.enable && isInArray("repulse", a.interactivity.events.onhover.mode) && "mousemove" == a.interactivity.status) {
        var n = e.x - a.interactivity.mouse.pos_x,
            t = e.y - a.interactivity.mouse.pos_y,
            i = Math.sqrt(n * n + t * t),
            r = {
                x: n / i,
                y: t / i
            },
            o = clamp(1 / (m = a.interactivity.modes.repulse.distance) * (-1 * Math.pow(i / m, 2) + 1) * m * 100, 0, 50),
            s = {
                x: e.x + r.x * o,
                y: e.y + r.y * o
            };
        "bounce" == a.particles.move.out_mode ? (s.x - e.radius > 0 && s.x + e.radius < a.canvas.w && (e.x = s.x), s.y - e.radius > 0 && s.y + e.radius < a.canvas.h && (e.y = s.y)) : (e.x = s.x, e.y = s.y)
    } else if (a.interactivity.events.onclick.enable && isInArray("repulse", a.interactivity.events.onclick.mode))
        if (a.tmp.repulse_finish || (a.tmp.repulse_count++, a.tmp.repulse_count == a.particles.array.length && (a.tmp.repulse_finish = !0)), a.tmp.repulse_clicking) {
            var m = Math.pow(a.interactivity.modes.repulse.distance / 6, 3),
                u = a.interactivity.mouse.click_pos_x - e.x,
                l = a.interactivity.mouse.click_pos_y - e.y,
                c = u * u + l * l,
                v = -m / c * 1;
            c <= m && function() {
                var n = Math.atan2(l, u);
                if (e.vx = v * Math.cos(n), e.vy = v * Math.sin(n), "bounce" == a.particles.move.out_mode) {
                    var t = {
                        x: e.x + e.vx,
                        y: e.y + e.vy
                    };
                    t.x + e.radius > a.canvas.w ? e.vx = -e.vx : t.x - e.radius < 0 && (e.vx = -e.vx), t.y + e.radius > a.canvas.h ? e.vy = -e.vy : t.y - e.radius < 0 && (e.vy = -e.vy)
                }
            }()
        } else 0 == a.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i)
}, a.fn.modes.grabParticle = function(e) {
    if (a.interactivity.events.onhover.enable && "mousemove" == a.interactivity.status) {
        var n = e.x - a.interactivity.mouse.pos_x,
            t = e.y - a.interactivity.mouse.pos_y,
            i = Math.sqrt(n * n + t * t);
        if (i <= a.interactivity.modes.grab.distance) {
            var r = a.interactivity.modes.grab.line_linked.opacity - i / (1 / a.interactivity.modes.grab.line_linked.opacity) / a.interactivity.modes.grab.distance;
            if (r > 0) {
                var o = a.particles.line_linked.color_rgb_line;
                a.canvas.ctx.strokeStyle = "rgba(" + o.r + "," + o.g + "," + o.b + "," + r + ")", a.canvas.ctx.lineWidth = a.particles.line_linked.width, a.canvas.ctx.beginPath(), a.canvas.ctx.moveTo(e.x, e.y), a.canvas.ctx.lineTo(a.interactivity.mouse.pos_x, a.interactivity.mouse.pos_y), a.canvas.ctx.stroke(), a.canvas.ctx.closePath()
            }
        }
    }
}, a.fn.vendors.eventsListeners = function() {
    "window" == a.interactivity.detect_on ? a.interactivity.el = window : a.interactivity.el = a.canvas.el, (a.interactivity.events.onhover.enable || a.interactivity.events.onclick.enable) && (a.interactivity.el.addEventListener("mousemove", function(e) {
        if (a.interactivity.el == window) var n = e.clientX,
            t = e.clientY;
        else n = e.offsetX || e.clientX, t = e.offsetY || e.clientY;
        a.interactivity.mouse.pos_x = n, a.interactivity.mouse.pos_y = t, a.tmp.retina && (a.interactivity.mouse.pos_x *= a.canvas.pxratio, a.interactivity.mouse.pos_y *= a.canvas.pxratio), a.interactivity.status = "mousemove"
    }), a.interactivity.el.addEventListener("mouseleave", function(e) {
        a.interactivity.mouse.pos_x = null, a.interactivity.mouse.pos_y = null, a.interactivity.status = "mouseleave"
    })), a.interactivity.events.onclick.enable && a.interactivity.el.addEventListener("click", function() {
        if (a.interactivity.mouse.click_pos_x = a.interactivity.mouse.pos_x, a.interactivity.mouse.click_pos_y = a.interactivity.mouse.pos_y, a.interactivity.mouse.click_time = (new Date).getTime(), a.interactivity.events.onclick.enable) switch (a.interactivity.events.onclick.mode) {
            case "push":
                a.particles.move.enable ? a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb, a.interactivity.mouse) : 1 == a.interactivity.modes.push.particles_nb ? a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb, a.interactivity.mouse) : a.interactivity.modes.push.particles_nb > 1 && a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb);
                break;
            case "remove":
                a.fn.modes.removeParticles(a.interactivity.modes.remove.particles_nb);
                break;
            case "bubble":
                a.tmp.bubble_clicking = !0;
                break;
            case "repulse":
                a.tmp.repulse_clicking = !0, a.tmp.repulse_count = 0, a.tmp.repulse_finish = !1, setTimeout(function() {
                    a.tmp.repulse_clicking = !1
                }, 1e3 * a.interactivity.modes.repulse.duration)
        }
    })
}, a.fn.vendors.densityAutoParticles = function() {
    if (a.particles.number.density.enable) {
        var e = a.canvas.el.width * a.canvas.el.height / 1e3;
        a.tmp.retina && (e /= 2 * a.canvas.pxratio);
        var n = e * a.particles.number.value / a.particles.number.density.value_area,
            t = a.particles.array.length - n;
        t < 0 ? a.fn.modes.pushParticles(Math.abs(t)) : a.fn.modes.removeParticles(t)
    }
}, a.fn.vendors.checkOverlap = function(e, n) {
    for (var t = 0; t < a.particles.array.length; t++) {
        var i = a.particles.array[t],
            r = e.x - i.x,
            o = e.y - i.y;
        Math.sqrt(r * r + o * o) <= e.radius + i.radius && (e.x = n ? n.x : Math.random() * a.canvas.w, e.y = n ? n.y : Math.random() * a.canvas.h, a.fn.vendors.checkOverlap(e))
    }
}, a.fn.vendors.createSvgImg = function(e) {
    var n = a.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, function(n, t, a, i) {
            if (e.color.rgb) var r = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";
            else r = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
            return r
        }),
        t = new Blob([n], {
            type: "image/svg+xml;charset=utf-8"
        }),
        i = window.URL || window.webkitURL || window,
        r = i.createObjectURL(t),
        o = new Image;
    o.addEventListener("load", function() {
        e.img.obj = o, e.img.loaded = !0, i.revokeObjectURL(r), a.tmp.count_svg++
    }), o.src = r
}, a.fn.vendors.destroypJS = function() {
    cancelAnimationFrame(a.fn.drawAnimFrame), t.remove(), pJSDom = null
}, a.fn.vendors.drawShape = function(e, n, t, a, i, r) {
    var o = i * r,
        s = i / r,
        m = 180 * (s - 2) / s,
        u = Math.PI - Math.PI * m / 180;
    e.save(), e.beginPath(), e.translate(n, t), e.moveTo(0, 0);
    for (var l = 0; l < o; l++) e.lineTo(a, 0), e.translate(a, 0), e.rotate(u);
    e.fill(), e.restore()
}, a.fn.vendors.exportImg = function() {
    window.open(a.canvas.el.toDataURL("image/png"), "_blank")
}, a.fn.vendors.loadImg = function(e) {
    if (a.tmp.img_error = void 0, "" != a.particles.shape.image.src)
        if ("svg" == e) {
            var n = new XMLHttpRequest;
            n.open("GET", a.particles.shape.image.src), n.onreadystatechange = function(e) {
                4 == n.readyState && (200 == n.status ? (a.tmp.source_svg = e.currentTarget.response, a.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), a.tmp.img_error = !0))
            }, n.send()
        } else {
            var t = new Image;
            t.addEventListener("load", function() {
                a.tmp.img_obj = t, a.fn.vendors.checkBeforeDraw()
            }), t.src = a.particles.shape.image.src
        }
    else console.log("Error pJS - No image.src"), a.tmp.img_error = !0
}, a.fn.vendors.draw = function() {
    "image" == a.particles.shape.type ? "svg" == a.tmp.img_type ? a.tmp.count_svg >= a.particles.number.value ? (a.fn.particlesDraw(), a.particles.move.enable ? a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw) : cancelRequestAnimFrame(a.fn.drawAnimFrame)) : a.tmp.img_error || (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw)) : null != a.tmp.img_obj ? (a.fn.particlesDraw(), a.particles.move.enable ? a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw) : cancelRequestAnimFrame(a.fn.drawAnimFrame)) : a.tmp.img_error || (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw)) : (a.fn.particlesDraw(), a.particles.move.enable ? a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw) : cancelRequestAnimFrame(a.fn.drawAnimFrame))
}, a.fn.vendors.checkBeforeDraw = function() {
    "image" == a.particles.shape.type ? "svg" == a.tmp.img_type && null == a.tmp.source_svg ? a.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(a.tmp.checkAnimFrame), a.tmp.img_error || (a.fn.vendors.init(), a.fn.vendors.draw())) : (a.fn.vendors.init(), a.fn.vendors.draw())
}, a.fn.vendors.init = function() {
    a.fn.retinaInit(), a.fn.canvasInit(), a.fn.canvasSize(), a.fn.canvasPaint(), a.fn.particlesCreate(), a.fn.vendors.densityAutoParticles(), a.particles.line_linked.color_rgb_line = hexToRgb(a.particles.line_linked.color)
}, a.fn.vendors.start = function() {
    isInArray("image", a.particles.shape.type) ? (a.tmp.img_type = a.particles.shape.image.src.substr(a.particles.shape.image.src.length - 3), a.fn.vendors.loadImg(a.tmp.img_type)) : a.fn.vendors.checkBeforeDraw()
}, a.fn.vendors.eventsListeners(), a.fn.vendors.start()
};

function hexToRgb(e) {
e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, n, t, a) {
    return n + n + t + t + a + a
});
var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
return n ? {
    r: parseInt(n[1], 16),
    g: parseInt(n[2], 16),
    b: parseInt(n[3], 16)
} : null
}

function clamp(e, n, t) {
return Math.min(Math.max(e, n), t)
}

function isInArray(e, n) {
return n.indexOf(e) > -1
}
Object.deepExtend = function(e, n) {
for (var t in n) n[t] && n[t].constructor && n[t].constructor === Object ? (e[t] = e[t] || {}, arguments.callee(e[t], n[t])) : e[t] = n[t];
return e
}, window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
window.setTimeout(e, 1e3 / 60)
}, window.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout, window.pJSDom = [], window.particlesJS = function(e, n) {
"string" != typeof e && (n = e, e = "particles-js"), e || (e = "particles-js");
var t = document.getElementById(e),
    a = t.getElementsByClassName("particles-js-canvas-el");
if (a.length)
    for (; a.length > 0;) t.removeChild(a[0]);
var i = document.createElement("canvas");
i.className = "particles-js-canvas-el", i.style.width = "100%", i.style.height = "100%", null != document.getElementById(e).appendChild(i) && pJSDom.push(new pJS(e, n))
}, window.particlesJS.load = function(e, n, t) {
var a = new XMLHttpRequest;
a.open("GET", n), a.onreadystatechange = function(n) {
    if (4 == a.readyState)
        if (200 == a.status) {
            var i = JSON.parse(n.currentTarget.response);
            window.particlesJS(e, i), t && t()
        } else console.log("Error pJS - XMLHttpRequest status: " + a.status), console.log("Error pJS - File config not found")
}, a.send()
}, particlesJS("particles-js", {
particles: {
    number: {
        value: 80,
        density: {
            enable: !0,
            value_area: 800
        }
    },
    color: {
        value: "#ffffff"
    },
    shape: {
        type: "circle",
        stroke: {
            width: 0,
            color: "#000000"
        },
        polygon: {
            nb_sides: 5
        },
        image: {
            src: "img/github.svg",
            width: 100,
            height: 100
        }
    },
    opacity: {
        value: .5,
        random: !1,
        anim: {
            enable: !1,
            speed: 1,
            opacity_min: .1,
            sync: !1
        }
    },
    size: {
        value: 5,
        random: !0,
        anim: {
            enable: !1,
            speed: 40,
            size_min: .1,
            sync: !1
        }
    },
    line_linked: {
        enable: !0,
        distance: 150,
        color: "#ffffff",
        opacity: .4,
        width: 1
    },
    move: {
        enable: !0,
        speed: 6,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        attract: {
            enable: !1,
            rotateX: 600,
            rotateY: 1200
        }
    }
},
interactivity: {
    detect_on: "canvas",
    events: {
        onhover: {
            enable: !0,
            mode: "repulse"
        },
        onclick: {
            enable: !0,
            mode: "push"
        },
        resize: !0
    },
    modes: {
        grab: {
            distance: 400,
            line_linked: {
                opacity: 1
            }
        },
        bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
        },
        repulse: {
            distance: 200
        },
        push: {
            particles_nb: 4
        },
        remove: {
            particles_nb: 2
        }
    }
},
retina_detect: !0,
config_demo: {
    hide_card: !1,
    background_color: "#b61924",
    background_image: "",
    background_position: "50% 50%",
    background_repeat: "no-repeat",
    background_size: "cover"
}
});
jQuery(document).ready(function() {
const e = [{
    GivenName: "Milan",
    Surname: "Nikitina"
}, {
    GivenName: "Bella",
    Surname: "Duncombe"
}, {
    GivenName: "Carl",
    Surname: "Voronov"
}, {
    GivenName: "Hana",
    Surname: "Danielsson"
}, {
    GivenName: "Закир",
    Surname: "Сухоруков"
}, {
    GivenName: "Clementina",
    Surname: "Lombardo"
}, {
    GivenName: "Ziemowit",
    Surname: "Kwiatkowski"
}, {
    GivenName: "Rinkimirikutataku",
    Surname: ""
}, {
    GivenName: "Белла",
    Surname: "Бирюкова"
}, {
    GivenName: "L Gara",
    Surname: "Mentori"
}, {
    GivenName: "Danilo",
    Surname: "Porras"
}, {
    GivenName: "Þorgils",
    Surname: "Unnsteinsson"
}, {
    GivenName: "Eve",
    Surname: "Sharpe"
}, {
    GivenName: "舞",
    Surname: "高遠"
}, {
    GivenName: "Erla",
    Surname: "Indriðadóttir"
}, {
    GivenName: "Alena",
    Surname: "Stejskalová"
}, {
    GivenName: "Frici",
    Surname: "Csonka"
}, {
    GivenName: "Kristjana",
    Surname: "Hólmsteinsdóttir"
}, {
    GivenName: "重子",
    Surname: "津曲"
}, {
    GivenName: "Cailyn",
    Surname: "Craig"
}, {
    GivenName: "Melchior",
    Surname: "Saldana"
}, {
    GivenName: "Lin",
    Surname: "Yang"
}, {
    GivenName: "Tristan",
    Surname: "Lassen"
}, {
    GivenName: "Søren",
    Surname: "Tobiassen"
}, {
    GivenName: "Annelou",
    Surname: "Peterson"
}, {
    GivenName: "شایا",
    Surname: "خالقی"
}, {
    GivenName: "Серафима",
    Surname: "Игнатьева"
}, {
    GivenName: "Tomohiko",
    Surname: "Iida"
}, {
    GivenName: "Taghrid",
    Surname: "Mikhail"
}, {
    GivenName: "Kevin",
    Surname: "Duncan"
}, {
    GivenName: "Yandar",
    Surname: "Panova"
}, {
    GivenName: "Bellisima",
    Surname: "Hayward"
}, {
    GivenName: "Sarah",
    Surname: "Christiansen"
}, {
    GivenName: "Alexandra",
    Surname: "Szarka"
}, {
    GivenName: "Minik",
    Surname: "Petrussen"
}, {
    GivenName: "Лариса",
    Surname: "Юдина"
}, {
    GivenName: "Roda",
    Surname: "Amexar"
}, {
    GivenName: "Gabriel",
    Surname: "Laisné"
}, {
    GivenName: "Friðberg",
    Surname: "Matthíasson"
}, {
    GivenName: "จีระพัฒน์",
    Surname: "สุขสวัสดิ์"
}, {
    GivenName: "Mette",
    Surname: "Johansen"
}, {
    GivenName: "Koroth",
    Surname: "Zulor"
}, {
    GivenName: "Keishuu",
    Surname: "Kamimura"
}, {
    GivenName: "Fiacre",
    Surname: "Couturier"
}, {
    GivenName: "Onyekachukwu",
    Surname: "Madukaife"
}, {
    GivenName: "نیما",
    Surname: "مرادعلی"
}, {
    GivenName: "Bitsi",
    Surname: "Bataev"
}, {
    GivenName: "Patrick",
    Surname: "Hussain"
}, {
    GivenName: "Jasmina",
    Surname: "Pustišek"
}, {
    GivenName: "Aza",
    Surname: "Arsanukayev"
}, {
    GivenName: "Astrea",
    Surname: "Guajardo"
}, {
    GivenName: "Garland",
    Surname: "Beaujolie"
}, {
    GivenName: "Kristine",
    Surname: "Filemonsen"
}, {
    GivenName: "Nilas",
    Surname: "Åberg"
}, {
    GivenName: "Torben",
    Surname: "Thygesen"
}, {
    GivenName: "陽菜",
    Surname: "井門"
}, {
    GivenName: "Bartosz",
    Surname: "Miller"
}, {
    GivenName: "和美",
    Surname: "西見"
}, {
    GivenName: "Robert",
    Surname: "Brinson"
}, {
    GivenName: "Dilibe",
    Surname: "Ogochukwu"
}, {
    GivenName: "ชากีรีน",
    Surname: "พ้องเสียง"
}, {
    GivenName: "Felicia",
    Surname: "Calderón"
}, {
    GivenName: "G Naana",
    Surname: "Darj"
}, {
    GivenName: "Ela",
    Surname: "Christiansen"
}, {
    GivenName: "کیانوش",
    Surname: "شادین"
}, {
    GivenName: "Jeffrey",
    Surname: "Berlanga"
}, {
    GivenName: "Gulnaz",
    Surname: "Kirillova"
}, {
    GivenName: "Bayhas",
    Surname: "Sayegh"
}, {
    GivenName: "Mario",
    Surname: "Winkel"
}, {
    GivenName: "Timur",
    Surname: "Inarkaevich"
}, {
    GivenName: "D Vekma",
    Surname: "Demma"
}, {
    GivenName: "Tougo",
    Surname: "Sumita"
}, {
    GivenName: "Samuel",
    Surname: "Pinto"
}, {
    GivenName: "Kaja",
    Surname: "Adamska"
}, {
    GivenName: "สุลักคนาพร",
    Surname: "แก้ววิชิต"
}, {
    GivenName: "จูม",
    Surname: "จีนประชา"
}, {
    GivenName: "Caitlyn",
    Surname: "Gale"
}, {
    GivenName: "بامشاد",
    Surname: "بهمنش"
}, {
    GivenName: "Mirna",
    Surname: "Lučić"
}, {
    GivenName: "Akhil",
    Surname: "Lustra"
}, {
    GivenName: "Mette",
    Surname: "Kleist"
}, {
    GivenName: "Gracie",
    Surname: "Smith"
}, {
    GivenName: "Karla",
    Surname: "Gregersen"
}, {
    GivenName: "Thije",
    Surname: "van Hulst"
}, {
    GivenName: "Любовь",
    Surname: "Корни́лова"
}, {
    GivenName: "Nils",
    Surname: "Luhtanen"
}, {
    GivenName: "Nashita",
    Surname: "Basara"
}, {
    GivenName: "Philipp",
    Surname: "Mueller"
}, {
    GivenName: "Albek",
    Surname: "Eldarkhanov"
}, {
    GivenName: "Hans",
    Surname: "Jørgensen"
}, {
    GivenName: "فریده",
    Surname: "مدرس"
}, {
    GivenName: "Rory",
    Surname: "Victor"
}, {
    GivenName: "Ravenna",
    Surname: "Limmen"
}, {
    GivenName: "淑惠",
    Surname: "郝"
}, {
    GivenName: "Johan",
    Surname: "Lied"
}, {
    GivenName: "Austin",
    Surname: "Harpur"
}, {
    GivenName: "Lola",
    Surname: "Ham"
}, {
    GivenName: "Suvi",
    Surname: "Hartonen"
}, {
    GivenName: "Gabriela",
    Surname: "Cunha"
}, {
    GivenName: "Tekutotokiari",
    Surname: ""
}, {
    GivenName: "Nikolaj",
    Surname: "Knudsen"
}, {
    GivenName: "Božidar",
    Surname: "Mihaljević"
}, {
    GivenName: "Mei",
    Surname: "Georgievska"
}, {
    GivenName: "Jacob",
    Surname: "Åkesson"
}, {
    GivenName: "Tristan",
    Surname: "Christensen"
}, {
    GivenName: "Yohannes",
    Surname: "Semere"
}, {
    GivenName: "Peter",
    Surname: "Kristoffersen"
}, {
    GivenName: "Mai",
    Surname: "Pettersson"
}, {
    GivenName: "Liam",
    Surname: "Goddard"
}, {
    GivenName: "Vilijan",
    Surname: "Pejak"
}, {
    GivenName: "Salman",
    Surname: "Bataev"
}, {
    GivenName: "จรงค์พันธ์",
    Surname: "ปรีดีวงศ์"
}, {
    GivenName: "Jan",
    Surname: "Mendl"
}, {
    GivenName: "Iris",
    Surname: "Wallin"
}, {
    GivenName: "Hendricus",
    Surname: "Hubers"
}, {
    GivenName: "Rašeljka",
    Surname: "Ivančić"
}, {
    GivenName: "Dennis",
    Surname: "Frederiksen"
}, {
    GivenName: "Roderic",
    Surname: "Sandheaver"
}, {
    GivenName: "Davet",
    Surname: "Roy"
}, {
    GivenName: "Sebastian",
    Surname: "Ankudinov"
}, {
    GivenName: "Eva",
    Surname: "Winston"
}, {
    GivenName: "Debra",
    Surname: "Campbell"
}, {
    GivenName: "筱涵",
    Surname: "韋"
}, {
    GivenName: "Petrine",
    Surname: "Brandt"
}, {
    GivenName: "Sophia",
    Surname: "Heath"
}, {
    GivenName: "Iryna",
    Surname: "Suklan"
}, {
    GivenName: "Софья",
    Surname: "Ибрагимова"
}, {
    GivenName: "Steve",
    Surname: "Pagan"
}, {
    GivenName: "Nino",
    Surname: "Varga"
}, {
    GivenName: "Bianka",
    Surname: "Erdôs"
}, {
    GivenName: "Nicolash",
    Surname: "Pinto"
}, {
    GivenName: "Sergey",
    Surname: "Karbič"
}, {
    GivenName: "Flynn",
    Surname: "Simpson"
}, {
    GivenName: "Dexter",
    Surname: "Courtois"
}, {
    GivenName: "Shidochiri",
    Surname: ""
}, {
    GivenName: "Daniela",
    Surname: "Holtzmann"
}, {
    GivenName: "Tsugumi",
    Surname: "Kawaguchi"
}, {
    GivenName: "Stephen",
    Surname: "Milne"
}, {
    GivenName: "پری",
    Surname: "نوری"
}, {
    GivenName: "Wilma",
    Surname: "Gracia"
}, {
    GivenName: "Olejuru",
    Surname: "Chinagorom"
}, {
    GivenName: "Kamisa",
    Surname: "Chichigov"
}, {
    GivenName: "Aririkutatakufu",
    Surname: ""
}, {
    GivenName: "یاسمینا",
    Surname: "آزاد"
}, {
    GivenName: "สุนวนพิทักษ์",
    Surname: "ปิตาฝ้าย"
}, {
    GivenName: "Tomáš",
    Surname: "Hozman"
}, {
    GivenName: "Bibulat",
    Surname: "Chichigov"
}, {
    GivenName: "Orane",
    Surname: "David"
}, {
    GivenName: "Li",
    Surname: "Meng"
}, {
    GivenName: "Archer",
    Surname: "Fitzgibbons"
}, {
    GivenName: "Casey",
    Surname: "Grant"
}, {
    GivenName: "Leo",
    Surname: "Svensson"
}, {
    GivenName: "Seth",
    Surname: "Wortman"
}, {
    GivenName: "Movladi",
    Surname: "Kadyrov"
}, {
    GivenName: "Conor",
    Surname: "Ferguson"
}, {
    GivenName: "Sara",
    Surname: "Karlsen"
}, {
    GivenName: "Emeryk",
    Surname: "Kowalczyk"
}, {
    GivenName: "Nikolaj",
    Surname: "Møller"
}, {
    GivenName: "Sopuluchukwu",
    Surname: "Nweke"
}, {
    GivenName: "Anenechukwu",
    Surname: "Ukaegbunam"
}, {
    GivenName: "Asphodel",
    Surname: "Bolger"
}, {
    GivenName: "Jade",
    Surname: "Faulkner"
}, {
    GivenName: "Honoré",
    Surname: "Lanctot"
}, {
    GivenName: "Emilly",
    Surname: "Santos"
}, {
    GivenName: "Itsumi",
    Surname: "Kanou"
}, {
    GivenName: "Sam",
    Surname: "Wrench"
}, {
    GivenName: "Henny",
    Surname: "Gustavsson"
}, {
    GivenName: "Pipaluk",
    Surname: "Petrussen"
}, {
    GivenName: "Nguyện",
    Surname: "Huỳnh"
}, {
    GivenName: "یگانه",
    Surname: "غلامی"
}, {
    GivenName: "Tekashishikutata",
    Surname: ""
}, {
    GivenName: "Piotr",
    Surname: "Duda"
}, {
    GivenName: "Marco",
    Surname: "Longhole"
}, {
    GivenName: "Simone",
    Surname: "Lauridsen"
}, {
    GivenName: "静香",
    Surname: "能城"
}, {
    GivenName: "Khasurt",
    Surname: "Dratchev"
}, {
    GivenName: "Melissa",
    Surname: "Cavalcanti"
}, {
    GivenName: "Julie",
    Surname: "Clausen"
}, {
    GivenName: "Alyssa",
    Surname: "Simonov"
}, {
    GivenName: "Maire",
    Surname: "Varis"
}, {
    GivenName: "Bazyli",
    Surname: "Maciejewski"
}, {
    GivenName: "Nina",
    Surname: "Møller"
}, {
    GivenName: "大輔",
    Surname: "石下"
}, {
    GivenName: "Lubomír",
    Surname: "Kučera"
}, {
    GivenName: "Kinga",
    Surname: "Kamińska"
}, {
    GivenName: "偉廷",
    Surname: "韋"
}, {
    GivenName: "Tinna",
    Surname: "Björnsdóttir"
}, {
    GivenName: "Mason",
    Surname: "Mills"
}, {
    GivenName: "Kikuyo",
    Surname: "Kishita"
}, {
    GivenName: "Dahlak",
    Surname: "Muhammed"
}, {
    GivenName: "Amalda",
    Surname: "Hayward"
}, {
    GivenName: "ماکان",
    Surname: "کاهکش"
}, {
    GivenName: "Ellie-louise",
    Surname: "Brown"
}, {
    GivenName: "Elias",
    Surname: "Alexander"
}, {
    GivenName: "Ghaniyah",
    Surname: "Assaf"
}, {
    GivenName: "Eva",
    Surname: "Halámková"
}, {
    GivenName: "Maximilian",
    Surname: "Schroeder"
}, {
    GivenName: "Marilu",
    Surname: "Sisneros"
}, {
    GivenName: "Natasha",
    Surname: "Rubeo"
}, {
    GivenName: "Liya",
    Surname: "Gebre"
}, {
    GivenName: "Zdeněk",
    Surname: "Martinák"
}, {
    GivenName: "Joseph",
    Surname: "Mills"
}, {
    GivenName: "Facino",
    Surname: "Toscani"
}, {
    GivenName: "Domenica",
    Surname: "Nucci"
}, {
    GivenName: "Fausto",
    Surname: "Romano"
}, {
    GivenName: "Demi",
    Surname: "Ahmed"
}, {
    GivenName: "Bryndís",
    Surname: "Arnórsdóttir"
}, {
    GivenName: "Constance",
    Surname: "Burns"
}, {
    GivenName: "Muhammed",
    Surname: "Lund"
}, {
    GivenName: "Imogen",
    Surname: "Doherty"
}, {
    GivenName: "Frédérique",
    Surname: "Gosselin"
}, {
    GivenName: "Mariana",
    Surname: "Costa"
}, {
    GivenName: "Makaarim",
    Surname: "Sleiman"
}, {
    GivenName: "Niệm",
    Surname: "Huỳnh"
}, {
    GivenName: "Dewy",
    Surname: "Vianen"
}, {
    GivenName: "Márkó",
    Surname: "Bernát"
}, {
    GivenName: "Mustafa",
    Surname: "Tewolde"
}, {
    GivenName: "Fen",
    Surname: "Wu"
}, {
    GivenName: "Lucia",
    Surname: "Kapustina"
}, {
    GivenName: "Định",
    Surname: "Thủy"
}, {
    GivenName: "Anastazja",
    Surname: "Olszewska"
}, {
    GivenName: "Ukaegbulam",
    Surname: "Ajuluchukwu"
}, {
    GivenName: "Lily",
    Surname: "Goodbody"
}, {
    GivenName: "Verna",
    Surname: "Davis"
}, {
    GivenName: "Yu Jie",
    Surname: "Hsü"
}, {
    GivenName: "Алла",
    Surname: "Крыло́ва"
}, {
    GivenName: "Yumihiko",
    Surname: "Tani"
}, {
    GivenName: "Elís",
    Surname: "Sigvaldason"
}, {
    GivenName: "Visangiri",
    Surname: "Batukayev"
}, {
    GivenName: "良子",
    Surname: "宇井"
}, {
    GivenName: "拓海",
    Surname: "入井"
}, {
    GivenName: "Brygida",
    Surname: "Wiśniewska"
}, {
    GivenName: "Zsa-zsa",
    Surname: "Bognár"
}, {
    GivenName: "Anh",
    Surname: "Chung"
}, {
    GivenName: "Agnes",
    Surname: "Pavlova"
}, {
    GivenName: "Jaroslav",
    Surname: "Zítko"
}, {
    GivenName: "Arvin",
    Surname: "Nilsson"
}, {
    GivenName: "Kalim",
    Surname: "Kruge"
}, {
    GivenName: "Oronzo",
    Surname: "Trevisan"
}, {
    GivenName: "Melania",
    Surname: "Pučnik"
}, {
    GivenName: "Donato",
    Surname: "Pagnotto"
}, {
    GivenName: "Farid",
    Surname: "Yermakov"
}, {
    GivenName: "Shelby",
    Surname: "Johnston"
}, {
    GivenName: "Aamos",
    Surname: "Lenho"
}, {
    GivenName: "Robyn",
    Surname: "Thomson"
}, {
    GivenName: "Venla",
    Surname: "Puurunen"
}, {
    GivenName: "Юлиан",
    Surname: "Зуев"
}, {
    GivenName: "Sunčana",
    Surname: "Kovačić"
}, {
    GivenName: "Kamilla",
    Surname: "Kárpáty"
}, {
    GivenName: "Gi ral",
    Surname: "Unarrh"
}, {
    GivenName: "สุชญาดา",
    Surname: "สันทอง"
}, {
    GivenName: "Matilda",
    Surname: "Hope"
}, {
    GivenName: "Zaur",
    Surname: "Akhtakhanov"
}, {
    GivenName: "Stephanie",
    Surname: "Saldana"
}, {
    GivenName: "Otto",
    Surname: "Nielsen"
}, {
    GivenName: "淑惠",
    Surname: "金"
}, {
    GivenName: "Nokachishikimikika",
    Surname: ""
}, {
    GivenName: "Kathleen",
    Surname: "Tate"
}, {
    GivenName: "Danielle",
    Surname: "Harrison"
}, {
    GivenName: "Olivia",
    Surname: "Kirkpatrick"
}, {
    GivenName: "Jensine",
    Surname: "Rasmussen"
}, {
    GivenName: "Elijo",
    Surname: "Milisavljević"
}, {
    GivenName: "ขวัญชาติ",
    Surname: "พุทธิมา"
}, {
    GivenName: "Ryan",
    Surname: "Akhtar"
}, {
    GivenName: "Noriaki",
    Surname: "Tanikawa"
}, {
    GivenName: "Hưng",
    Surname: "Lê"
}, {
    GivenName: "Banazir",
    Surname: "Roper"
}, {
    GivenName: "Jan",
    Surname: "Moravec"
}, {
    GivenName: "Ania",
    Surname: "Adamczyk"
}, {
    GivenName: "Boldizsar",
    Surname: "Györfi"
}, {
    GivenName: "Nadine",
    Surname: "Abrahamsson"
}, {
    GivenName: "Libby",
    Surname: "Alexander"
}, {
    GivenName: "Omar",
    Surname: "Rushisvili"
}, {
    GivenName: "Nicoline",
    Surname: "Brandt"
}, {
    GivenName: "Chen",
    Surname: "Tien"
}, {
    GivenName: "Daniel",
    Surname: "Sørensen"
}, {
    GivenName: "Chizuoke",
    Surname: "Okwuoma"
}, {
    GivenName: "Maria",
    Surname: "Austerlitz"
}, {
    GivenName: "Anna",
    Surname: "Pilátová"
}, {
    GivenName: "Erik",
    Surname: "Johansen"
}, {
    GivenName: "Rajko",
    Surname: "Đurić"
}, {
    GivenName: "Renata",
    Surname: "Agapova"
}, {
    GivenName: "Roman",
    Surname: "Ignatiev"
}, {
    GivenName: "Fernanda",
    Surname: "Cavalcanti"
}, {
    GivenName: "Abdul-Muttalib",
    Surname: "Fakhoury"
}, {
    GivenName: "مهشاد",
    Surname: "تقوایی"
}, {
    GivenName: "Xiong",
    Surname: "Hsiung"
}, {
    GivenName: "雅玲",
    Surname: "龍"
}, {
    GivenName: "K Deka",
    Surname: "Karg"
}, {
    GivenName: "Zahwah",
    Surname: "Ghannam"
}, {
    GivenName: "Laurits",
    Surname: "Winther"
}, {
    GivenName: "Vesna",
    Surname: "Čoko"
}, {
    GivenName: "Beverly",
    Surname: "Duggan"
}, {
    GivenName: "Lok",
    Surname: "Ch en"
}, {
    GivenName: "Kris",
    Surname: "Watt"
}, {
    GivenName: "Kathrine",
    Surname: "Enoksen"
}, {
    GivenName: "Wawrzyniec",
    Surname: "Czarnecki"
}, {
    GivenName: "Reece",
    Surname: "Potts"
}, {
    GivenName: "Daniel",
    Surname: "Kapustin"
}, {
    GivenName: "Cong",
    Surname: "Kê"
}, {
    GivenName: "Keram",
    Surname: "Ibragimov"
}, {
    GivenName: "Neci",
    Surname: "Schulteisz"
}, {
    GivenName: "Tuula",
    Surname: "Lankila"
}, {
    GivenName: "Adam",
    Surname: "Vasiliev"
}, {
    GivenName: "Jaromir",
    Surname: "Vassiliev"
}, {
    GivenName: "Vidor",
    Surname: "Szücs"
}, {
    GivenName: "Maia",
    Surname: "Markussen"
}, {
    GivenName: "Pekka",
    Surname: "Peltosaari"
}, {
    GivenName: "Vlasta",
    Surname: "Stanković"
}, {
    GivenName: "Samuel",
    Surname: "Idris"
}, {
    GivenName: "Millie",
    Surname: "White"
}, {
    GivenName: "Aureliano",
    Surname: "Cepeda"
}, {
    GivenName: "Bailey",
    Surname: "Jull"
}, {
    GivenName: "大輝",
    Surname: "向笠"
}, {
    GivenName: "Macy",
    Surname: "Fleming"
}, {
    GivenName: "Teca",
    Surname: "Sándor"
}, {
    GivenName: "三郎",
    Surname: "梅川"
}, {
    GivenName: "Xiong",
    Surname: "Liu"
}, {
    GivenName: "Bent",
    Surname: "Klausen"
}, {
    GivenName: "Taiga",
    Surname: "Morikawa"
}, {
    GivenName: "Georgia",
    Surname: "Fairthorne"
}, {
    GivenName: "Łukasz",
    Surname: "Wiśniewski"
}, {
    GivenName: "Betty",
    Surname: "Settles"
}, {
    GivenName: "March",
    Surname: "Lebedeva"
}, {
    GivenName: "Ildar",
    Surname: "Yevseyev"
}, {
    GivenName: "Domagoj",
    Surname: "Posavec"
}, {
    GivenName: "Rita",
    Surname: "Puikkonen"
}, {
    GivenName: "Talia",
    Surname: "Hunter"
}, {
    GivenName: "Birkir",
    Surname: "Ellertsson"
}, {
    GivenName: "Adolfo",
    Surname: "Beneventi"
}, {
    GivenName: "Dafna",
    Surname: "Menchaca"
}, {
    GivenName: "Christian",
    Surname: "Aasen"
}, {
    GivenName: "Jay",
    Surname: "Ali"
}, {
    GivenName: "จร",
    Surname: "ประสานวรรณ"
}, {
    GivenName: "Раиса",
    Surname: "Ибрагимова"
}, {
    GivenName: "Austin",
    Surname: "Williams"
}, {
    GivenName: "Gregory",
    Surname: "Chenault"
}, {
    GivenName: "Mira",
    Surname: "van Hest"
}, {
    GivenName: "Julian",
    Surname: "Frydenlund"
}, {
    GivenName: "Marius",
    Surname: "Bak"
}, {
    GivenName: "Evdokim",
    Surname: "Pokrovskii"
}, {
    GivenName: "Helena",
    Surname: "Lauritsen"
}, {
    GivenName: "Thorsten",
    Surname: "Fuerst"
}, {
    GivenName: "گودرز",
    Surname: "غایی"
}, {
    GivenName: "Eliza",
    Surname: "Indahl"
}, {
    GivenName: "Ngọt",
    Surname: "Thủy"
}, {
    GivenName: "رامبد",
    Surname: "نوریانی"
}, {
    GivenName: "David",
    Surname: "Eisenhower"
}, {
    GivenName: "กิตติภณ",
    Surname: "หีมโต๊ะเต๊ะ"
}, {
    GivenName: "Jennifer",
    Surname: "McCarthy"
}, {
    GivenName: "Augusta",
    Surname: "Baresi"
}, {
    GivenName: "Armando",
    Surname: "Endrizzi"
}, {
    GivenName: "Sóley",
    Surname: "Ottarsdóttir"
}, {
    GivenName: "Janez Peter",
    Surname: "Schwed"
}, {
    GivenName: "Christopher",
    Surname: "Cameron"
}, {
    GivenName: "سالار",
    Surname: "خانلو"
}, {
    GivenName: "Orsolya",
    Surname: "Pete"
}, {
    GivenName: "Helene",
    Surname: "Jakobsen"
}, {
    GivenName: "Brady",
    Surname: "Idema"
}, {
    GivenName: "Hamfast",
    Surname: "Chubb"
}, {
    GivenName: "Costante",
    Surname: "Siciliano"
}, {
    GivenName: "Elechi",
    Surname: "Iloerika"
}, {
    GivenName: "Shovda",
    Surname: "Ibragimov"
}, {
    GivenName: "Серафима",
    Surname: "Черкасова"
}, {
    GivenName: "Aryan",
    Surname: "Andresen"
}, {
    GivenName: "Dyta",
    Surname: "Wieczorek"
}, {
    GivenName: "Lễ",
    Surname: "Trịnh"
}, {
    GivenName: "Rosalinde",
    Surname: "Valk"
}, {
    GivenName: "Mutsuo",
    Surname: "Daijou"
}, {
    GivenName: "Brock",
    Surname: "Knox"
}, {
    GivenName: "Steingrímur",
    Surname: "Konráðsson"
}, {
    GivenName: "Goldilocks",
    Surname: "Smallburrow"
}, {
    GivenName: "Felix",
    Surname: "Holmen"
}, {
    GivenName: "Ute",
    Surname: "Fischer"
}, {
    GivenName: "Emmi",
    Surname: "Kulmala"
}, {
    GivenName: "Tuân",
    Surname: "Hàn"
}, {
    GivenName: "Gabrysia",
    Surname: "Kwiatkowska"
}, {
    GivenName: "小百合",
    Surname: "宮岡"
}, {
    GivenName: "Tyson",
    Surname: "Slade"
}, {
    GivenName: "Borivoj",
    Surname: "Koberski"
}, {
    GivenName: "Robel",
    Surname: "Girma"
}, {
    GivenName: "Natsuo",
    Surname: "Matsuoka"
}, {
    GivenName: "Voislav",
    Surname: "Abidović"
}, {
    GivenName: "Yseult",
    Surname: "Rocheleau"
}, {
    GivenName: "Gebre",
    Surname: "Sheshy"
}, {
    GivenName: "Jackson",
    Surname: "Watt"
}, {
    GivenName: "Busana",
    Surname: "Desheriyev"
}, {
    GivenName: "Meneaduc",
    Surname: "Rumble"
}, {
    GivenName: "Gitta",
    Surname: "Thimár"
}, {
    GivenName: "Fulvus",
    Surname: "Hogpen"
}, {
    GivenName: "Mikaela",
    Surname: "Ekström"
}, {
    GivenName: "Ellak",
    Surname: "Gannik"
}, {
    GivenName: "Juwain",
    Surname: "Aswad"
}, {
    GivenName: "Petr",
    Surname: "Mach"
}, {
    GivenName: "Shikarinmoto",
    Surname: ""
}, {
    GivenName: "Kauã",
    Surname: "Goncalves"
}, {
    GivenName: "Iloerika",
    Surname: "Chinedum"
}, {
    GivenName: "Crescente",
    Surname: "Gallo"
}, {
    GivenName: "聆",
    Surname: "李"
}, {
    GivenName: "Kristin",
    Surname: "Hoffmann"
}, {
    GivenName: "Bulat",
    Surname: "Khadzhiev"
}, {
    GivenName: "Ch Gira",
    Surname: "Porus"
}, {
    GivenName: "Mike",
    Surname: "Brandt"
}, {
    GivenName: "Krzysztof",
    Surname: "Majewski"
}, {
    GivenName: "Belinda",
    Surname: "Fairbairn"
}, {
    GivenName: "Azuka",
    Surname: "Okechukwu"
}, {
    GivenName: "Prunella",
    Surname: "Boivin"
}, {
    GivenName: "Hope",
    Surname: "Muravyova"
}, {
    GivenName: "Halette",
    Surname: "Primeau"
}, {
    GivenName: "Midas",
    Surname: "Madrid"
}, {
    GivenName: "สุธนิสร",
    Surname: "วรรณรังษี"
}, {
    GivenName: "Azzam",
    Surname: "Ganem"
}, {
    GivenName: "Yakha",
    Surname: "Ryzaev"
}, {
    GivenName: "Adony",
    Surname: "Halász"
}, {
    GivenName: "Лия",
    Surname: "Кузнецова"
}, {
    GivenName: "Dalma",
    Surname: "Nagy"
}, {
    GivenName: "Marcsa",
    Surname: "Szôlôssy"
}, {
    GivenName: "Matija",
    Surname: "Herceg"
}, {
    GivenName: "Ryan",
    Surname: "Wood"
}, {
    GivenName: "Shishay",
    Surname: "Tewelde"
}, {
    GivenName: "Áshildur",
    Surname: "Gísladóttir"
}, {
    GivenName: "Jie",
    Surname: "Kang"
}, {
    GivenName: "Zlata",
    Surname: "Bunta"
}, {
    GivenName: "Tzigane",
    Surname: "Boross"
}, {
    GivenName: "Angela",
    Surname: "Sandström"
}, {
    GivenName: "Idris",
    Surname: "Schneiders"
}, {
    GivenName: "Rinkimirikutataku",
    Surname: ""
}, {
    GivenName: "Liisa",
    Surname: "Kankaanperä"
}, {
    GivenName: "Topias",
    Surname: "Honkasalo"
}, {
    GivenName: "Geoffrey",
    Surname: "Charpie"
}, {
    GivenName: "Ngọc",
    Surname: "Hà"
}, {
    GivenName: "Adonis",
    Surname: "Esquivel"
}, {
    GivenName: "Radomiła",
    Surname: "Zielinska"
}, {
    GivenName: "康平",
    Surname: "橘内"
}, {
    GivenName: "Clyde",
    Surname: "Hearne"
}, {
    GivenName: "Emese",
    Surname: "Petö"
}, {
    GivenName: "Tekuzumoshikari",
    Surname: ""
}, {
    GivenName: "Koichi",
    Surname: "Kikuchi"
}, {
    GivenName: "Na",
    Surname: "Ting"
}, {
    GivenName: "Hưng",
    Surname: "Tạ"
}, {
    GivenName: "Haakon",
    Surname: "Adolfsen"
}, {
    GivenName: "Kinu",
    Surname: "Kodou"
}, {
    GivenName: "Mia",
    Surname: "Mustar"
}, {
    GivenName: "Vitór",
    Surname: "Silva"
}, {
    GivenName: "Linette",
    Surname: "Trépanier"
}, {
    GivenName: "Destiny",
    Surname: "Hill"
}, {
    GivenName: "Ellie",
    Surname: "Connor"
}, {
    GivenName: "Sam",
    Surname: "Pickering"
}, {
    GivenName: "Jikashifu",
    Surname: ""
}, {
    GivenName: "Satsita",
    Surname: "Usamov"
}, {
    GivenName: "太陽",
    Surname: "郭"
}, {
    GivenName: "Ava",
    Surname: "Nordström"
}, {
    GivenName: "Charles",
    Surname: "Milne"
}, {
    GivenName: "良子",
    Surname: "岩山"
}, {
    GivenName: "Grant",
    Surname: "Robertson"
}, {
    GivenName: "Kader",
    Surname: "Verstegen"
}, {
    GivenName: "Mezan",
    Surname: "Mewael"
}, {
    GivenName: "依婷",
    Surname: "彭"
}, {
    GivenName: "Igor",
    Surname: "Carvalho"
}, {
    GivenName: "Dimitrije",
    Surname: "Blažej"
}, {
    GivenName: "Jayden",
    Surname: "Mocatta"
}, {
    GivenName: "Brandon",
    Surname: "Crumpler"
}, {
    GivenName: "陸",
    Surname: "白瀬"
}, {
    GivenName: "Gemma",
    Surname: "King"
}, {
    GivenName: "Fric",
    Surname: "Žerovc"
}, {
    GivenName: "Iiro",
    Surname: "Kasvio"
}, {
    GivenName: "K retok",
    Surname: "Linarack"
}, {
    GivenName: "Júlio",
    Surname: "Gomes"
}, {
    GivenName: "Marcus",
    Surname: "Lundqvist"
}, {
    GivenName: "Alla",
    Surname: "Bogdanova"
}, {
    GivenName: "D Leyra",
    Surname: "Kenka"
}, {
    GivenName: "Rosa",
    Surname: "Christensen"
}, {
    GivenName: "Kell",
    Surname: "Restagh"
}, {
    GivenName: "Sulaiman",
    Surname: "Hadad"
}, {
    GivenName: "Rukushitekiku",
    Surname: ""
}, {
    GivenName: "家綺",
    Surname: "倪"
}, {
    GivenName: "Udobata",
    Surname: "Zikoranachidimma"
}, {
    GivenName: "De",
    Surname: "Hsueh"
}, {
    GivenName: "勤曜",
    Surname: "方"
}, {
    GivenName: "Breno",
    Surname: "Barros"
}, {
    GivenName: "برنا",
    Surname: "پزشکیان"
}, {
    GivenName: "Jiří",
    Surname: "Šimek"
}, {
    GivenName: "Piera",
    Surname: "Li Fonti"
}, {
    GivenName: "Tekarukite",
    Surname: ""
}, {
    GivenName: "Fleurette",
    Surname: "Paiement"
}, {
    GivenName: "Ármann",
    Surname: "Þorgeirsson"
}, {
    GivenName: "Maryse",
    Surname: "Brunault"
}, {
    GivenName: "Xue Fang",
    Surname: "Ts ui"
}, {
    GivenName: "Amanda",
    Surname: "Åsheim"
}, {
    GivenName: "Camila",
    Surname: "Lima"
}, {
    GivenName: "Kushitokuarichikitoka",
    Surname: ""
}, {
    GivenName: "Aubrey",
    Surname: "Charest"
}, {
    GivenName: "Shinichi",
    Surname: "Yoshimoto"
}, {
    GivenName: "Ezimma",
    Surname: "Ositadimma"
}, {
    GivenName: "Phê",
    Surname: "Phùng"
}, {
    GivenName: "Hysen",
    Surname: "Neković"
}, {
    GivenName: "Cora",
    Surname: "Twofoot"
}, {
    GivenName: "Anja",
    Surname: "Virtanen"
}, {
    GivenName: "Ayna",
    Surname: "Kishiev"
}, {
    GivenName: "Luis",
    Surname: "Melo"
}, {
    GivenName: "Guan-yin",
    Surname: "Ko"
}, {
    GivenName: "逸華",
    Surname: "高"
}, {
    GivenName: "Aaron",
    Surname: "Deutsch"
}, {
    GivenName: "Ba el",
    Surname: "Renjar"
}, {
    GivenName: "Aza",
    Surname: "Korgay"
}, {
    GivenName: "Khalil",
    Surname: "Kozak"
}, {
    GivenName: "Codi",
    Surname: "McIntyre"
}, {
    GivenName: "Ida",
    Surname: "Berdal"
}, {
    GivenName: "Samid",
    Surname: "Predikaka"
}, {
    GivenName: "Xuyến",
    Surname: "Lý"
}, {
    GivenName: "Kara",
    Surname: "Harry"
}, {
    GivenName: "Christoffer",
    Surname: "Bertelsen"
}, {
    GivenName: "Carl",
    Surname: "Jones"
}, {
    GivenName: "Sofia",
    Surname: "Berg"
}, {
    GivenName: "Piroska",
    Surname: "Sántha"
}, {
    GivenName: "Feliks",
    Surname: "Chmielewski"
}, {
    GivenName: "Azime",
    Surname: "Skočaj"
}, {
    GivenName: "Rinkimirikakuta",
    Surname: ""
}, {
    GivenName: "Leoncia",
    Surname: "Meraz"
}, {
    GivenName: "Simon",
    Surname: "Bergum"
}, {
    GivenName: "Élodie",
    Surname: "Lemelin"
}, {
    GivenName: "Dorina",
    Surname: "Csontos"
}, {
    GivenName: "Một",
    Surname: "Cao"
}, {
    GivenName: "Lushikute",
    Surname: ""
}, {
    GivenName: "Karhammur",
    Surname: "Amerex"
}, {
    GivenName: "Zoran",
    Surname: "Barić"
}, {
    GivenName: "Muhammad",
    Surname: "Moore"
}, {
    GivenName: "Wiola",
    Surname: "Chmielewska"
}, {
    GivenName: "Савва",
    Surname: "Дегтярёв"
}, {
    GivenName: "Barbea",
    Surname: "Ochoa"
}, {
    GivenName: "Senta",
    Surname: "Nishizawa"
}, {
    GivenName: "สุมุ้ยเซียม",
    Surname: "กุลทนทัด"
}, {
    GivenName: "ดวงสมร",
    Surname: "ทักษิณ"
}, {
    GivenName: "Zara",
    Surname: "Austin"
}, {
    GivenName: "Kristian",
    Surname: "Sankt"
}, {
    GivenName: "Árni",
    Surname: "Þórhallsson"
}, {
    GivenName: "Jens",
    Surname: "Abelsen"
}, {
    GivenName: "Barakah",
    Surname: "Morcos"
}, {
    GivenName: "Pamela",
    Surname: "Ardoin"
}, {
    GivenName: "Nina",
    Surname: "Villadsen"
}, {
    GivenName: "Eve",
    Surname: "Henderson"
}, {
    GivenName: "คัมภีร์",
    Surname: "พิมพุฒ"
}, {
    GivenName: "Inger",
    Surname: "Mikaelsen"
}, {
    GivenName: "João",
    Surname: "Gomes"
}, {
    GivenName: "Athanasius",
    Surname: "Pokrovski"
}, {
    GivenName: "Petimat",
    Surname: "Gairbekov"
}, {
    GivenName: "Angelika",
    Surname: "Schweitzer"
}, {
    GivenName: "Anja",
    Surname: "Fenstermacher"
}, {
    GivenName: "Nokashimekushi",
    Surname: ""
}, {
    GivenName: "Celeste",
    Surname: "Russo"
}, {
    GivenName: "ชยุดา",
    Surname: "สมพงศ์"
}, {
    GivenName: "تیام",
    Surname: "طاهباز"
}, {
    GivenName: "Novella",
    Surname: "Thomson"
}, {
    GivenName: "啟業",
    Surname: "陳"
}, {
    GivenName: "Ia",
    Surname: "Artemieva"
}, {
    GivenName: "Koli",
    Surname: "Formorax"
}, {
    GivenName: "Tamim",
    Surname: "Bata"
}, {
    GivenName: "Егор",
    Surname: "Третьяков"
}, {
    GivenName: "大翔",
    Surname: "末田"
}, {
    GivenName: "Petrine",
    Surname: "Geisler"
}, {
    GivenName: "Bi",
    Surname: "Wei"
}, {
    GivenName: "Raka",
    Surname: "Drexa"
}, {
    GivenName: "Abdul-Aziz",
    Surname: "Boutros"
}, {
    GivenName: "Madoka",
    Surname: "Kashiwagi"
}, {
    GivenName: "Mahbub",
    Surname: "Bitar"
}, {
    GivenName: "Mohamed",
    Surname: "Bak"
}, {
    GivenName: "Элеонора",
    Surname: "Евсеева"
}, {
    GivenName: "ดลเลาะห์",
    Surname: "พึ่งแก้ว"
}, {
    GivenName: "David",
    Surname: "Frederiksen"
}, {
    GivenName: "Väinö",
    Surname: "Lenkkeri"
}, {
    GivenName: "Evike",
    Surname: "Rigó"
}, {
    GivenName: "Giuseppina",
    Surname: "Bianchi"
}, {
    GivenName: "Đa",
    Surname: "Huỳnh"
}, {
    GivenName: "Zikoranachidimma",
    Surname: "Okwudilichukwu"
}, {
    GivenName: "Nuka",
    Surname: "Johansen"
}, {
    GivenName: "Temotamoshikuari",
    Surname: ""
}, {
    GivenName: "Flóra",
    Surname: "Rátz"
}, {
    GivenName: "Pál",
    Surname: "Soltész"
}, {
    GivenName: "Dilan",
    Surname: "Halman"
}, {
    GivenName: "Charline",
    Surname: "Baril"
}, {
    GivenName: "Тереза",
    Surname: "Невзорова"
}, {
    GivenName: "Lauren",
    Surname: "Parkin"
}, {
    GivenName: "آزاد",
    Surname: "پایدار زاده"
}, {
    GivenName: "Tuất",
    Surname: "Phạm"
}, {
    GivenName: "Isa",
    Surname: "Norberg"
}, {
    GivenName: "Tobias",
    Surname: "Petrussen"
}, {
    GivenName: "Fredek",
    Surname: "Lôrincz"
}, {
    GivenName: "Harvey",
    Surname: "Dale"
}, {
    GivenName: "Ralf",
    Surname: "Freytag"
}, {
    GivenName: "Jake",
    Surname: "Astley"
}, {
    GivenName: "Maria Grazia",
    Surname: "Sabbatini"
}, {
    GivenName: "روژین",
    Surname: "میرهاشمی"
}, {
    GivenName: "Taylor",
    Surname: "Cartwright"
}, {
    GivenName: "Christin",
    Surname: "Kappel"
}, {
    GivenName: "Olo",
    Surname: "Lothran"
}, {
    GivenName: "Isabella",
    Surname: "McDonald"
}, {
    GivenName: "Otávio",
    Surname: "Pereira"
}, {
    GivenName: "Leah",
    Surname: "Faber"
}, {
    GivenName: "Elsa",
    Surname: "Davidson"
}, {
    GivenName: "Ираклий",
    Surname: "Афо́нин"
}, {
    GivenName: "Alla",
    Surname: "Križevnik"
}, {
    GivenName: "Yuri",
    Surname: "Bogdanov"
}, {
    GivenName: "Cody",
    Surname: "Hildreth"
}, {
    GivenName: "Elisha",
    Surname: "Alekseeva"
}, {
    GivenName: "Vladica",
    Surname: "Tonejec"
}, {
    GivenName: "Osman",
    Surname: "Pettersson"
}, {
    GivenName: "優月",
    Surname: "栗岡"
}, {
    GivenName: "Börkur",
    Surname: "Þormóðsson"
}, {
    GivenName: "Eric",
    Surname: "Persson"
}, {
    GivenName: "Brahim",
    Surname: "van der Pas"
}, {
    GivenName: "Christine",
    Surname: "Olesen"
}, {
    GivenName: "Gabriela",
    Surname: "Billings"
}, {
    GivenName: "Mia",
    Surname: "Syvertsen"
}, {
    GivenName: "Didiane",
    Surname: "Croquetaigne"
}, {
    GivenName: "Shamil",
    Surname: "Desheriyev"
}, {
    GivenName: "Kaj",
    Surname: "Surn"
}, {
    GivenName: "Omar",
    Surname: "Tewolde"
}, {
    GivenName: "Seweryna",
    Surname: "Pawlak"
}, {
    GivenName: "Martin",
    Surname: "Vobr"
}, {
    GivenName: "Kordite",
    Surname: "Nivalli"
}, {
    GivenName: "Petr",
    Surname: "Šlégr"
}, {
    GivenName: "Einar",
    Surname: "Baeza"
}, {
    GivenName: "Fleur",
    Surname: "Labelle"
}, {
    GivenName: "Anthony",
    Surname: "Garza"
}, {
    GivenName: "Jucika",
    Surname: "Rácz"
}, {
    GivenName: "Eliza",
    Surname: "Nilsson"
}, {
    GivenName: "Larisa",
    Surname: "Ryzaev"
}, {
    GivenName: "Callum",
    Surname: "Talbot"
}, {
    GivenName: "Nadia",
    Surname: "Bruns"
}, {
    GivenName: "Shawn",
    Surname: "Leusink"
}, {
    GivenName: "György",
    Surname: "Tolnay"
}, {
    GivenName: "อัศวโกวิท",
    Surname: "ชูนุกิจ"
}, {
    GivenName: "Kristinn",
    Surname: "Arnfinnsson"
}, {
    GivenName: "Nona",
    Surname: "Kor"
}, {
    GivenName: "Gabriëla",
    Surname: "van Eijck"
}, {
    GivenName: "Judyta",
    Surname: "Borkowska"
}, {
    GivenName: "Laurette",
    Surname: "Audet"
}, {
    GivenName: "Tekameito",
    Surname: ""
}, {
    GivenName: "Marius",
    Surname: "Reitan"
}, {
    GivenName: "Paulino",
    Surname: "Alonso"
}, {
    GivenName: "Vasilisa",
    Surname: "Agapova"
}, {
    GivenName: "Azim",
    Surname: "Tannous"
}, {
    GivenName: "Shawna",
    Surname: "Ames"
}, {
    GivenName: "Hiroko",
    Surname: "Yoshikawa"
}, {
    GivenName: "Sigurd",
    Surname: "Brox"
}, {
    GivenName: "Giovana",
    Surname: "Cavalcanti"
}, {
    GivenName: "Stephen",
    Surname: "McIntosh"
}, {
    GivenName: "Baku",
    Surname: "Doi"
}, {
    GivenName: "Signe",
    Surname: "Öberg"
}, {
    GivenName: "Lucas",
    Surname: "Baader"
}, {
    GivenName: "Veljko",
    Surname: "Fischione"
}, {
    GivenName: "Tanguy",
    Surname: "Riquier"
}, {
    GivenName: "Lê",
    Surname: "Tôn"
}, {
    GivenName: "Grace",
    Surname: "Adams"
}, {
    GivenName: "Melvin",
    Surname: "Jonsson"
}, {
    GivenName: "สุบุญฮอง",
    Surname: "ผ่อนผัน"
}, {
    GivenName: "Tesfalem",
    Surname: "Ermias"
}, {
    GivenName: "K retok",
    Surname: "Subaiesh"
}, {
    GivenName: "Petr",
    Surname: "Bajgar"
}, {
    GivenName: "Baldassarre",
    Surname: "Costa"
}, {
    GivenName: "Dukath",
    Surname: "Elas"
}, {
    GivenName: "Peregrin",
    Surname: "Burrowes"
}, {
    GivenName: "Malte",
    Surname: "Berglund"
}, {
    GivenName: "Fre-Swera",
    Surname: "Mebrahtu"
}, {
    GivenName: "Pejo",
    Surname: "Zagorec"
}, {
    GivenName: "Manuela",
    Surname: "Rocha"
}, {
    GivenName: "Michal",
    Surname: "Růžička"
}, {
    GivenName: "Borhala",
    Surname: "Puskás"
}, {
    GivenName: "Ivan",
    Surname: "Evseev"
}, {
    GivenName: "Chirimorinkaari",
    Surname: ""
}, {
    GivenName: "Senja",
    Surname: "Kuusisto"
}, {
    GivenName: "Arcángel",
    Surname: "Macías"
}, {
    GivenName: "Joseph",
    Surname: "Funk"
}, {
    GivenName: "Muslim",
    Surname: "Abramov"
}, {
    GivenName: "Mikkel",
    Surname: "Schmidt"
}, {
    GivenName: "Zvjezdana",
    Surname: "Matić"
}, {
    GivenName: "Kateřina",
    Surname: "Malíková"
}, {
    GivenName: "Jouko",
    Surname: "Viljanen"
}, {
    GivenName: "Quintilio",
    Surname: "Rivera"
}, {
    GivenName: "Vrenn",
    Surname: "Grunnil"
}, {
    GivenName: "Charles",
    Surname: "Sharpe"
}, {
    GivenName: "惠雯",
    Surname: "倪"
}, {
    GivenName: "Rasmus",
    Surname: "Villadsen"
}, {
    GivenName: "ماندانا",
    Surname: "علوی"
}, {
    GivenName: "Iggi",
    Surname: "Iggi"
}, {
    GivenName: "Marcell",
    Surname: "Erôss"
}, {
    GivenName: "Szczepan",
    Surname: "Majewski"
}, {
    GivenName: "Mirosław",
    Surname: "Walczak"
}, {
    GivenName: "Kateřina",
    Surname: "Lazarová"
}, {
    GivenName: "Hideyo",
    Surname: "Oogusuku"
}, {
    GivenName: "曉彤",
    Surname: "譚"
}, {
    GivenName: "Kawthar",
    Surname: "Abadi"
}, {
    GivenName: "Gilmar",
    Surname: "van der Rest"
}, {
    GivenName: "Kateka",
    Surname: ""
}, {
    GivenName: "Asayo",
    Surname: "Inada"
}, {
    GivenName: "香",
    Surname: "村杉"
}, {
    GivenName: "Delmo",
    Surname: "Lombardi"
}, {
    GivenName: "Martin",
    Surname: "Josefsen"
}, {
    GivenName: "کاووس",
    Surname: "طاهری"
}, {
    GivenName: "Thalia",
    Surname: "Delgadillo"
}, {
    GivenName: "Helen",
    Surname: "Aman"
}, {
    GivenName: "Arthur",
    Surname: "Ribeiro"
}, {
    GivenName: "Зиновий",
    Surname: "Ибрагимов"
}, {
    GivenName: "緑",
    Surname: "溝添"
}, {
    GivenName: "Yuan",
    Surname: "She"
}, {
    GivenName: "Florian",
    Surname: "Loewe"
}, {
    GivenName: "Josué",
    Surname: "Baca"
}, {
    GivenName: "Khasbulat",
    Surname: "Eldarkhanov"
}, {
    GivenName: "Toya",
    Surname: "Noll"
}, {
    GivenName: "Ba",
    Surname: "Quynh"
}, {
    GivenName: "Uwe",
    Surname: "Jager"
}, {
    GivenName: "Stefanie",
    Surname: "Woutersen"
}, {
    GivenName: "Shi",
    Surname: "Chia"
}, {
    GivenName: "Una",
    Surname: "Mudge"
}, {
    GivenName: "Ban",
    Surname: "Hồ"
}, {
    GivenName: "Gebre",
    Surname: "Russom"
}, {
    GivenName: "聆",
    Surname: "顧"
}, {
    GivenName: "Embla",
    Surname: "Åström"
}, {
    GivenName: "Polycarp",
    Surname: "Galkin"
}, {
    GivenName: "Matilde",
    Surname: "Carvalho"
}, {
    GivenName: "Ra id",
    Surname: "Qureshi"
}, {
    GivenName: "Daisy",
    Surname: "Townsend"
}, {
    GivenName: "Gấm",
    Surname: "Luong"
}, {
    GivenName: "Lựu",
    Surname: "Hoàng"
}, {
    GivenName: "Segundino",
    Surname: "Quintanilla"
}, {
    GivenName: "Alexander",
    Surname: "Wurfel"
}, {
    GivenName: "Diamanda",
    Surname: "Proudfoot"
}, {
    GivenName: "Robyn",
    Surname: "Walker"
}, {
    GivenName: "Yên",
    Surname: "Chung"
}, {
    GivenName: "Marisa",
    Surname: "Barros"
}, {
    GivenName: "Koroth",
    Surname: "Martok"
}, {
    GivenName: "Chineze",
    Surname: "Obioma"
}, {
    GivenName: "Dan",
    Surname: "Chiu"
}, {
    GivenName: "Tuula",
    Surname: "Katajisto"
}, {
    GivenName: "雪子",
    Surname: "栗岡"
}, {
    GivenName: "Bekhan",
    Surname: "Sultanovich"
}, {
    GivenName: "Karima",
    Surname: "Beijersbergen"
}, {
    GivenName: "詩婕",
    Surname: "馮"
}, {
    GivenName: "Victor",
    Surname: "Walker"
}, {
    GivenName: "Manabu",
    Surname: "Sakai"
}, {
    GivenName: "Shikimirikashite",
    Surname: ""
}, {
    GivenName: "Dina",
    Surname: "Lund"
}, {
    GivenName: "Khalimat",
    Surname: "Batukayev"
}, {
    GivenName: "สุนลินพร",
    Surname: "อุ่นสา"
}, {
    GivenName: "สุนงนภัส",
    Surname: "คำสิงห์"
}, {
    GivenName: "Hải",
    Surname: "Hà"
}, {
    GivenName: "Kedar",
    Surname: "Kattan"
}, {
    GivenName: "Hjalte",
    Surname: "Frederiksen"
}, {
    GivenName: "Andrea",
    Surname: "Norris"
}, {
    GivenName: "Ameen",
    Surname: "Nader"
}, {
    GivenName: "You",
    Surname: "Lu"
}, {
    GivenName: "郁雯",
    Surname: "方"
}, {
    GivenName: "Marthijs",
    Surname: "Stokman"
}, {
    GivenName: "Ghusoon",
    Surname: "Masih"
}, {
    GivenName: "Gíslína",
    Surname: "Jensdóttir"
}, {
    GivenName: "Henry",
    Surname: "Buttenshaw"
}, {
    GivenName: "Fulgenzia",
    Surname: "Toscano"
}, {
    GivenName: "Melody",
    Surname: "Ruiz"
}, {
    GivenName: "Orri",
    Surname: "Edgarsson"
}, {
    GivenName: "Miller",
    Surname: "Dickson"
}, {
    GivenName: "Esther",
    Surname: "Bocharova"
}, {
    GivenName: "Ninni",
    Surname: "Gustavsson"
}, {
    GivenName: "舜文",
    Surname: "符"
}, {
    GivenName: "Silja",
    Surname: "Vallestad"
}, {
    GivenName: "Grali",
    Surname: "Kallatar"
}, {
    GivenName: "Muhammad",
    Surname: "Stokes"
}, {
    GivenName: "Alona",
    Surname: "Bedeč"
}, {
    GivenName: "Sự",
    Surname: "Lê"
}, {
    GivenName: "Stéphanie",
    Surname: "Robillard"
}, {
    GivenName: "Oriel",
    Surname: "de Brisay"
}, {
    GivenName: "An",
    Surname: "Ch eng"
}, {
    GivenName: "Rob",
    Surname: "Donovan"
}, {
    GivenName: "曉彤",
    Surname: "潘"
}, {
    GivenName: "بهزاد",
    Surname: "علایی"
}, {
    GivenName: "Össur",
    Surname: "Guðnason"
}, {
    GivenName: "Massawa",
    Surname: "Berhane"
}, {
    GivenName: "Lutamofute",
    Surname: ""
}, {
    GivenName: "Глеб",
    Surname: "Фёдоров"
}, {
    GivenName: "Odila",
    Surname: "Alba"
}, {
    GivenName: "Зиновий",
    Surname: "Кольцов"
}, {
    GivenName: "Roderick",
    Surname: "van Noorloos"
}, {
    GivenName: "Brigitta",
    Surname: "Gyarmaty"
}, {
    GivenName: "Shinshuu",
    Surname: "Daikawa"
}, {
    GivenName: "Onwudiwe",
    Surname: "Okoli"
}, {
    GivenName: "Yamal",
    Surname: "Rojas"
}, {
    GivenName: "Wisława",
    Surname: "Piotrowska"
}, {
    GivenName: "Rinkashizumoshikiku",
    Surname: ""
}, {
    GivenName: "Khavazh",
    Surname: "Vizirov"
}, {
    GivenName: "Blandina",
    Surname: "Pina"
}, {
    GivenName: " Udayl",
    Surname: "Shalhoub"
}, {
    GivenName: "Elissa",
    Surname: "Forsberg"
}, {
    GivenName: "淑茹",
    Surname: "馬"
}, {
    GivenName: "Medhane",
    Surname: "Abraham"
}, {
    GivenName: "Игнат",
    Surname: "Поляко́в"
}, {
    GivenName: "Meikitatakikarin",
    Surname: ""
}, {
    GivenName: "Milan",
    Surname: "Mikeš"
}, {
    GivenName: "Genovefa",
    Surname: "Rosenstein"
}, {
    GivenName: "彩花",
    Surname: "青沼"
}, {
    GivenName: "Aaron",
    Surname: "Allen"
}, {
    GivenName: "Otto",
    Surname: "Andersen"
}, {
    GivenName: "Julian",
    Surname: "Cunha"
}, {
    GivenName: "Ancelote",
    Surname: "Lécuyer"
}, {
    GivenName: "Kalman",
    Surname: "Sæmundsson"
}, {
    GivenName: "Tranquillino",
    Surname: "Conti"
}, {
    GivenName: "禹凡",
    Surname: "謝"
}, {
    GivenName: "Eilidh",
    Surname: "Findlay"
}, {
    GivenName: "Erik",
    Surname: "Winther"
}, {
    GivenName: "Vlasta",
    Surname: "Hladíková"
}, {
    GivenName: "Константин",
    Surname: "Некрасов"
}, {
    GivenName: "Lukutekushikimimo",
    Surname: ""
}, {
    GivenName: "Fortinbras",
    Surname: "Tûk"
}, {
    GivenName: "Laura",
    Surname: "Fabinyi"
}, {
    GivenName: "Anna",
    Surname: "Šmídová"
}, {
    GivenName: "Faas",
    Surname: "van Santvoort"
}, {
    GivenName: "Hui",
    Surname: "Nielen"
}, {
    GivenName: "Naja",
    Surname: "Broberg"
}, {
    GivenName: "Batta",
    Surname: "Shishani"
}, {
    GivenName: "Nương",
    Surname: "Nguyễn"
}, {
    GivenName: "Aaliyah",
    Surname: "Leonard"
}, {
    GivenName: "Franc Peter",
    Surname: "Slivnjak"
}, {
    GivenName: "Kishirinka",
    Surname: ""
}, {
    GivenName: "Karlassa",
    Surname: "Mnetic"
}, {
    GivenName: "Beniko",
    Surname: "Araya"
}, {
    GivenName: "Rami",
    Surname: "Berg"
}, {
    GivenName: "Neil",
    Surname: "Henderson"
}, {
    GivenName: "Borbála",
    Surname: "Lendvai"
}, {
    GivenName: "Sara",
    Surname: "Gersten"
}, {
    GivenName: "Fesahaye",
    Surname: "Idris"
}, {
    GivenName: "Jacob",
    Surname: "Woolcock"
}, {
    GivenName: "Mia",
    Surname: "Singh"
}, {
    GivenName: "大輝",
    Surname: "坂戸"
}, {
    GivenName: "Ilse",
    Surname: "Olofsson"
}, {
    GivenName: "Hollie",
    Surname: "Marshall"
}, {
    GivenName: "Johan",
    Surname: "Jeremiassen"
}, {
    GivenName: "Samantha",
    Surname: "Alexander"
}, {
    GivenName: "Rana",
    Surname: "Kaneda"
}, {
    GivenName: "Erminij",
    Surname: "Bornšek"
}, {
    GivenName: "Yul",
    Surname: "Chuang"
}, {
    GivenName: "Paige",
    Surname: "Forster"
}, {
    GivenName: "Takadoshika",
    Surname: ""
}, {
    GivenName: "治杰",
    Surname: "田"
}, {
    GivenName: "Nu daq",
    Surname: "Treth"
}, {
    GivenName: "Tần",
    Surname: "Võ"
}, {
    GivenName: "Ranger",
    Surname: "Lambert"
}, {
    GivenName: "Eugenio",
    Surname: "Iadanza"
}, {
    GivenName: "Nicoline",
    Surname: "Jeppesen"
}, {
    GivenName: "惠如",
    Surname: "彭"
}, {
    GivenName: "Carla",
    Surname: "Lima"
}, {
    GivenName: "彩乃",
    Surname: "本柳"
}, {
    GivenName: "Rumailah",
    Surname: "Shamoun"
}, {
    GivenName: "優太",
    Surname: "和多田"
}, {
    GivenName: "Roemer",
    Surname: "van  t Westeinde"
}, {
    GivenName: "Lalita",
    Surname: "Akhtakhanov"
}, {
    GivenName: "Daaf",
    Surname: "Markus"
}, {
    GivenName: "Marla",
    Surname: "Caxel"
}, {
    GivenName: "Kinga",
    Surname: "Kowalska"
}, {
    GivenName: "Luan",
    Surname: "Souza"
}, {
    GivenName: "Mariana",
    Surname: "Correia"
}, {
    GivenName: "กิตติชัย",
    Surname: "มุสิกะวงศ์"
}, {
    GivenName: "Hartman",
    Surname: "Almonte"
}, {
    GivenName: "Kuzma",
    Surname: "Sokolov"
}, {
    GivenName: "Eva",
    Surname: "Ptáčková"
}, {
    GivenName: "Ngọc",
    Surname: "Trần"
}, {
    GivenName: "Basso",
    Surname: "Capon"
}, {
    GivenName: "Novella",
    Surname: "Milano"
}, {
    GivenName: "Per",
    Surname: "Filemonsen"
}, {
    GivenName: "Afamefuna",
    Surname: "Chiagoziem"
}, {
    GivenName: "Nydia",
    Surname: "Lozano"
}, {
    GivenName: "Cẩn",
    Surname: "Nghiêm"
}, {
    GivenName: "Jiří",
    Surname: "Zadák"
}, {
    GivenName: "Ethan",
    Surname: "Humphrey"
}, {
    GivenName: "Quinzio",
    Surname: "Ferri"
}, {
    GivenName: "Iskander",
    Surname: "Repin"
}, {
    GivenName: "Peter",
    Surname: "Jepsen"
}, {
    GivenName: "Margrét",
    Surname: "Þráinsdóttir"
}, {
    GivenName: "Ivalu",
    Surname: "Karlsen"
}, {
    GivenName: "Aririkishitakufu",
    Surname: ""
}, {
    GivenName: "Koraljka",
    Surname: "Bradelj"
}, {
    GivenName: "Родион",
    Surname: "Сухоруков"
}, {
    GivenName: "梅子",
    Surname: "西浦"
}, {
    GivenName: "Lalita",
    Surname: "Kadiev"
}, {
    GivenName: "Devlin",
    Surname: "Hekkert"
}, {
    GivenName: "Rafael",
    Surname: "Gomes"
}, {
    GivenName: "Anas",
    Surname: "Gjengstø"
}, {
    GivenName: "文子",
    Surname: "青柳"
}, {
    GivenName: "Sólborg",
    Surname: "Gunnarsdóttir"
}, {
    GivenName: "Medhane",
    Surname: "Medhanie"
}, {
    GivenName: "Evelyn",
    Surname: "Gavrilova"
}, {
    GivenName: "Adiam",
    Surname: "Michael"
}, {
    GivenName: "小百合",
    Surname: "浜平"
}, {
    GivenName: "Morath",
    Surname: "Moctos"
}, {
    GivenName: "กิตติพัฒน์",
    Surname: "มะประสิทธิ์"
}, {
    GivenName: "Jelena",
    Surname: "Jagesar"
}, {
    GivenName: "庭碩",
    Surname: "薛"
}, {
    GivenName: "Mikihisa",
    Surname: "Haraguchi"
}, {
    GivenName: "Sabrina",
    Surname: "Kunze"
}, {
    GivenName: "Anja",
    Surname: "Jung"
}, {
    GivenName: "Huyền",
    Surname: "Bùi"
}, {
    GivenName: "Kitti",
    Surname: "Dudás"
}, {
    GivenName: "Jesse",
    Surname: "Stirling"
}, {
    GivenName: "Wen",
    Surname: "Yang"
}, {
    GivenName: "Oriel",
    Surname: "Jardine"
}, {
    GivenName: "Tom",
    Surname: "Booth"
}, {
    GivenName: "Silje",
    Surname: "Ringstad"
}, {
    GivenName: "Lealdo",
    Surname: "Udinese"
}, {
    GivenName: "Philip",
    Surname: "Nielsen"
}, {
    GivenName: "Joel",
    Surname: "Hasu"
}, {
    GivenName: "Kelli",
    Surname: "Rodriguez"
}, {
    GivenName: "Amy",
    Surname: "Cran"
}, {
    GivenName: "Nado",
    Surname: "Protić"
}, {
    GivenName: "Du",
    Surname: "Nguyễn"
}, {
    GivenName: "Juan",
    Surname: "Meng"
}, {
    GivenName: "Gang",
    Surname: "Kang"
}, {
    GivenName: "Леонид",
    Surname: "Безру́ков"
}, {
    GivenName: "Uffo",
    Surname: "Zaragamba"
}, {
    GivenName: "Rafik",
    Surname: "Koeman"
}, {
    GivenName: "Chơn",
    Surname: "La"
}, {
    GivenName: "بهارک",
    Surname: "تاجیک"
}, {
    GivenName: "Anders",
    Surname: "Koch"
}, {
    GivenName: "Akulina",
    Surname: "Ershova"
}, {
    GivenName: "Daniel",
    Surname: "Zahradník"
}, {
    GivenName: "Khairy",
    Surname: "Haddad"
}, {
    GivenName: "فرزین",
    Surname: "شاهنده"
}, {
    GivenName: "Zerind",
    Surname: "Máthé"
}, {
    GivenName: "Erick",
    Surname: "Barros"
}, {
    GivenName: "Alexander",
    Surname: "Kristiansen"
}, {
    GivenName: "Maureen",
    Surname: "Jacques"
}, {
    GivenName: "Ellen",
    Surname: "Óðinsdóttir"
}, {
    GivenName: "Jouichirou",
    Surname: "Azuma"
}, {
    GivenName: "Hansine",
    Surname: "Lange"
}, {
    GivenName: "Гаврила",
    Surname: "Голова́нов"
}, {
    GivenName: "Libera Maria",
    Surname: "Pinto"
}, {
    GivenName: "Karlo",
    Surname: "Barišić"
}, {
    GivenName: "Tokimimotaku",
    Surname: ""
}, {
    GivenName: "Sighvatur",
    Surname: "Auðunsson"
}, {
    GivenName: "Nelma",
    Surname: "Haatainen"
}, {
    GivenName: "آرین",
    Surname: "شاهدباز"
}, {
    GivenName: "Jasmin",
    Surname: "Craig"
}, {
    GivenName: "Titusz",
    Surname: "Szôlösi"
}, {
    GivenName: "Sebastiano",
    Surname: "Beneventi"
}, {
    GivenName: "Frutos",
    Surname: "Rivera"
}, {
    GivenName: "Moos",
    Surname: "van Vught"
}, {
    GivenName: "Margeir",
    Surname: "Ottósson"
}, {
    GivenName: "Ikedinachukwu",
    Surname: "Echezonachukwu"
}, {
    GivenName: "Hoshiyo",
    Surname: "Yamanaka"
}, {
    GivenName: "Kikuyo",
    Surname: "Ogata"
}, {
    GivenName: "Chinwemma",
    Surname: "Elewechi"
}, {
    GivenName: "Sigþóra",
    Surname: "Böðvarsdóttir"
}, {
    GivenName: "Rega",
    Surname: "Kruge"
}, {
    GivenName: "Zezig",
    Surname: "Batukayev"
}, {
    GivenName: "آزاده",
    Surname: "محربی"
}, {
    GivenName: "Edelmira",
    Surname: "Torres"
}, {
    GivenName: "Hui",
    Surname: "Chung"
}, {
    GivenName: "Cai",
    Surname: "Kung"
}, {
    GivenName: "Graciela",
    Surname: "Smith"
}, {
    GivenName: "Crescent",
    Surname: "Beaupré"
}, {
    GivenName: "Julie",
    Surname: "Rossignol"
}, {
    GivenName: "Airi",
    Surname: "Miyabara"
}, {
    GivenName: "Shi",
    Surname: "Wan"
}, {
    GivenName: "Marijana",
    Surname: "Mikulić"
}, {
    GivenName: "Greg",
    Surname: "Shaw"
}, {
    GivenName: "Sebastian",
    Surname: "Husby"
}, {
    GivenName: "Melinda",
    Surname: "Blomqvist"
}, {
    GivenName: "Arlette",
    Surname: "Austin"
}, {
    GivenName: "Tadzio",
    Surname: "Nowak"
}, {
    GivenName: "Marcus",
    Surname: "Arvidsson"
}, {
    GivenName: "Murron",
    Surname: "Macleod"
}, {
    GivenName: "Arron",
    Surname: "Aitken"
}, {
    GivenName: "Laura",
    Surname: "Hertzog"
}, {
    GivenName: "Ines",
    Surname: "Bruno"
}, {
    GivenName: "Birk",
    Surname: "Aarskog"
}, {
    GivenName: "Oliverio",
    Surname: "Meza"
}, {
    GivenName: "Dinka",
    Surname: "Bačić"
}, {
    GivenName: "Nikica",
    Surname: "Živković"
}, {
    GivenName: "Konstancja",
    Surname: "Walczak"
}, {
    GivenName: "กิตติพัทธ์",
    Surname: "เฉลยขุน"
}, {
    GivenName: "Ditte",
    Surname: "Berg"
}, {
    GivenName: "育嘉",
    Surname: "麥"
}, {
    GivenName: "Deborah",
    Surname: "Samuelsson"
}, {
    GivenName: "Malika",
    Surname: "Kadyrov"
}, {
    GivenName: "Bell",
    Surname: "Lightfoot"
}, {
    GivenName: "May",
    Surname: "Isa"
}, {
    GivenName: "Tewolde",
    Surname: "Yohannes"
}, {
    GivenName: "Gilly",
    Surname: "Gammidge"
}, {
    GivenName: "Pepica",
    Surname: "Janičijević"
}, {
    GivenName: "Madukwe",
    Surname: "Chiefo"
}, {
    GivenName: "Bekbuzar",
    Surname: "Kadyrov"
}, {
    GivenName: "Laura",
    Surname: "Goncalves"
}, {
    GivenName: "Greta",
    Surname: "Håkansson"
}, {
    GivenName: "Martin",
    Surname: "Tobiassen"
}, {
    GivenName: "Tám",
    Surname: "Phùng"
}, {
    GivenName: "Matthias",
    Surname: "Papst"
}, {
    GivenName: "清",
    Surname: "光島"
}, {
    GivenName: "Arkadiusz",
    Surname: "Sawicki"
}, {
    GivenName: "Lâm",
    Surname: "Tạ"
}, {
    GivenName: "Anna",
    Surname: "Silva"
}, {
    GivenName: "Malcolm",
    Surname: "Hughes"
}, {
    GivenName: "Sophia",
    Surname: "Almeida"
}, {
    GivenName: "Rafael",
    Surname: "Holloway"
}, {
    GivenName: "Josh",
    Surname: "Gilbert"
}, {
    GivenName: "Kisanet",
    Surname: "Tewelde"
}, {
    GivenName: "Leontina",
    Surname: "Navarrete"
}, {
    GivenName: "Ingþór",
    Surname: "Oddsson"
}, {
    GivenName: "Ch Kala",
    Surname: "Laggal"
}, {
    GivenName: "Alana",
    Surname: "Allen"
}, {
    GivenName: "Abdoel",
    Surname: "Veenema"
}, {
    GivenName: "Земфира",
    Surname: "Воронова"
}, {
    GivenName: "Miyako",
    Surname: "Arai"
}, {
    GivenName: "Kalil",
    Surname: "Masih"
}, {
    GivenName: "Bunka",
    Surname: "Matsuoka"
}, {
    GivenName: "Ryan",
    Surname: "Karlsson"
}, {
    GivenName: "Nicodemo",
    Surname: "Olivárez"
}, {
    GivenName: "Růžena",
    Surname: "Zikmundová"
}, {
    GivenName: "Emilie",
    Surname: "Zeeb"
}, {
    GivenName: "Cong",
    Surname: "Hsu"
}, {
    GivenName: "ทวนชัย",
    Surname: "สายสุวรรณ"
}, {
    GivenName: "Dilara",
    Surname: "Henriksson"
}, {
    GivenName: "恵",
    Surname: "蜷川"
}, {
    GivenName: "Pavel",
    Surname: "Nosek"
}, {
    GivenName: "Souma",
    Surname: "Ishikawa"
}, {
    GivenName: "Karmen",
    Surname: "Radić"
}, {
    GivenName: "Tereza",
    Surname: "Altmannová"
}, {
    GivenName: "Ofodile",
    Surname: "Chibuzo"
}, {
    GivenName: "مهرنوش",
    Surname: "نافی"
}, {
    GivenName: "Kretorg",
    Surname: "Limmrii"
}, {
    GivenName: "Mamerto",
    Surname: "Cordova"
}, {
    GivenName: "Ruby",
    Surname: "Strangways"
}, {
    GivenName: "Joel",
    Surname: "Forlong"
}, {
    GivenName: "Tryggvi",
    Surname: "Baldursson"
}, {
    GivenName: "Radomír",
    Surname: "Pokorný"
}, {
    GivenName: "Anabel",
    Surname: "Cazares"
}, {
    GivenName: "Louis",
    Surname: "Mills"
}, {
    GivenName: "Ziyauddi",
    Surname: "Barsukov"
}, {
    GivenName: "Radka",
    Surname: "Bednářová"
}, {
    GivenName: "Shen",
    Surname: "Chuang"
}, {
    GivenName: "Fuki",
    Surname: "Ootsuka"
}, {
    GivenName: "Ra id",
    Surname: "Morcos"
}, {
    GivenName: "Dylan",
    Surname: "Candler"
}, {
    GivenName: "Mbanefo",
    Surname: "Chibueze"
}, {
    GivenName: "Kong",
    Surname: "K ung"
}, {
    GivenName: "家茜",
    Surname: "段"
}, {
    GivenName: "Barbara",
    Surname: "Ackermann"
}, {
    GivenName: "Summer",
    Surname: "Kaeppel"
}, {
    GivenName: "Alexandra",
    Surname: "Dahl"
}, {
    GivenName: "Anne-Lise",
    Surname: "Olesen"
}, {
    GivenName: " Atikah",
    Surname: "Shamoun"
}, {
    GivenName: "Nkemakolam",
    Surname: "Olisanugo"
}, {
    GivenName: "Joseph",
    Surname: "Franklin"
}, {
    GivenName: "Sofia",
    Surname: "McGarvie"
}, {
    GivenName: "Marijanka",
    Surname: "Ferčec"
}, {
    GivenName: "Lauren",
    Surname: "Waters"
}, {
    GivenName: "Guðbjörg",
    Surname: "Sverrisdóttir"
}, {
    GivenName: "Lexi",
    Surname: "Campbell"
}, {
    GivenName: "Ifesinachi",
    Surname: "Chiwetelu"
}, {
    GivenName: "Kifah",
    Surname: "Cham"
}, {
    GivenName: "雪子",
    Surname: "百井"
}, {
    GivenName: "Bogumila",
    Surname: "Barišić"
}, {
    GivenName: "涼",
    Surname: "吉間"
}, {
    GivenName: "Валентин",
    Surname: "Успе́нский"
}, {
    GivenName: "Rory",
    Surname: "Bendrodt"
}, {
    GivenName: "Renata",
    Surname: "Hájková"
}, {
    GivenName: "Seiko",
    Surname: "Yamanaka"
}, {
    GivenName: "Iivari",
    Surname: "Raita"
}, {
    GivenName: "Moltas",
    Surname: "Bergman"
}, {
    GivenName: "Tristan",
    Surname: "Robillard"
}, {
    GivenName: "正男",
    Surname: "相模"
}, {
    GivenName: "خشایار",
    Surname: "تقوایی"
}, {
    GivenName: "Eneas",
    Surname: "Escamilla"
}, {
    GivenName: "Kirsten",
    Surname: "Olsen"
}, {
    GivenName: "Cibor",
    Surname: "Zając"
}, {
    GivenName: "Aksel",
    Surname: "Sjaastad"
}, {
    GivenName: "Konli",
    Surname: "Vrag"
}, {
    GivenName: "Abeba",
    Surname: "Ali"
}, {
    GivenName: "Doede",
    Surname: "Schevers"
}, {
    GivenName: "Sarah",
    Surname: "Williamson"
}, {
    GivenName: "W Anar",
    Surname: "Caxel"
}, {
    GivenName: "Tanang",
    Surname: "Kanff"
}, {
    GivenName: "Marie",
    Surname: "Kristiansen"
}, {
    GivenName: "Nikita",
    Surname: "Kirillov"
}, {
    GivenName: "Kang",
    Surname: "Tu"
}, {
    GivenName: "Kidane",
    Surname: "Samuel"
}, {
    GivenName: "Abrha",
    Surname: "Berhane"
}, {
    GivenName: "Lukas",
    Surname: "Wirth"
}, {
    GivenName: "Eðvaldína",
    Surname: "Böðvarsdóttir"
}, {
    GivenName: "Sasha",
    Surname: "Docherty"
}, {
    GivenName: "Sonja",
    Surname: "Hentinen"
}, {
    GivenName: "Julie",
    Surname: "Jensen"
}, {
    GivenName: "Phoebe",
    Surname: "Polini"
}, {
    GivenName: "Elisa",
    Surname: "Myllylä"
}, {
    GivenName: "Piusz",
    Surname: "Németh"
}, {
    GivenName: "Obialo",
    Surname: "Ifesinachi"
}, {
    GivenName: "Vala",
    Surname: "Einarsdóttir"
}, {
    GivenName: "Arkadiusz",
    Surname: "Borkowski"
}, {
    GivenName: "Johanna",
    Surname: "Traugott"
}, {
    GivenName: "Macaria",
    Surname: "Trentino"
}, {
    GivenName: "John",
    Surname: "Egede"
}, {
    GivenName: "Klonimir",
    Surname: "Pejić"
}, {
    GivenName: "Sandra",
    Surname: "Pfeifer"
}, {
    GivenName: "德依",
    Surname: "張"
}, {
    GivenName: "Olivia",
    Surname: "Hansen"
}, {
    GivenName: "Ярополк",
    Surname: "Логинов"
}, {
    GivenName: "Karla",
    Surname: "Klobučar"
}, {
    GivenName: "Krysia",
    Surname: "Sokołowska"
}, {
    GivenName: "منوچهر",
    Surname: "کریمی زاده"
}, {
    GivenName: "Mads",
    Surname: "Solberg"
}, {
    GivenName: "Saidali",
    Surname: "Chichigov"
}, {
    GivenName: "K trelan",
    Surname: "Malok"
}, {
    GivenName: "Inaya",
    Surname: "Guirguis"
}, {
    GivenName: "家銘",
    Surname: "徐"
}, {
    GivenName: "Brooke",
    Surname: "Hopkins"
}, {
    GivenName: "Julia",
    Surname: "Ebersbach"
}, {
    GivenName: "Sævar",
    Surname: "Oddgeirsson"
}, {
    GivenName: "Bailey",
    Surname: "Boyle"
}, {
    GivenName: "Alambek",
    Surname: "Timayev"
}, {
    GivenName: "Risako",
    Surname: "Ogasahara"
}, {
    GivenName: "Fabiano",
    Surname: "Barese"
}, {
    GivenName: "Hiewan",
    Surname: "Tesmi"
}, {
    GivenName: "Tobias",
    Surname: "Østrem"
}, {
    GivenName: "Zafir",
    Surname: "Bata"
}, {
    GivenName: "Roni",
    Surname: "Ocasio"
}, {
    GivenName: "Алиса",
    Surname: "Юсупова"
}, {
    GivenName: "Егор",
    Surname: "Прохоров"
}, {
    GivenName: "Sigfús",
    Surname: "Arnmundsson"
}, {
    GivenName: "Sofie",
    Surname: "Sandgreen"
}, {
    GivenName: "雅萱",
    Surname: "黎"
}, {
    GivenName: "Silje",
    Surname: "Aarseth"
}, {
    GivenName: "Bote",
    Surname: "Heuver"
}, {
    GivenName: "Павел",
    Surname: "Муравьёв"
}, {
    GivenName: "Laurits",
    Surname: "Henriksen"
}, {
    GivenName: "Hanno",
    Surname: "Nikula"
}, {
    GivenName: "Angelina",
    Surname: "Seleznyova"
}, {
    GivenName: "政宏",
    Surname: "段"
}, {
    GivenName: "Tyra",
    Surname: "Aune"
}, {
    GivenName: "Chow",
    Surname: "Kê"
}, {
    GivenName: "Maroš",
    Surname: "Karlík"
}, {
    GivenName: "Þórólfur",
    Surname: "Ástþórsson"
}, {
    GivenName: "Клавдия",
    Surname: "Евдокимова"
}, {
    GivenName: "家儀",
    Surname: "廖"
}, {
    GivenName: "Arabella",
    Surname: "Bolger"
}, {
    GivenName: "Nasih",
    Surname: "Tesmi"
}, {
    GivenName: "Takito",
    Surname: "Kishi"
}, {
    GivenName: "Dina",
    Surname: "Sandyman"
}, {
    GivenName: "Girzie",
    Surname: "Olmos"
}, {
    GivenName: "Donat",
    Surname: "Kozłowski"
}, {
    GivenName: "Yul",
    Surname: "Yü"
}, {
    GivenName: "ترلان",
    Surname: "رازی"
}, {
    GivenName: "Naeema",
    Surname: "Touma"
}, {
    GivenName: "Park",
    Surname: "Hung"
}, {
    GivenName: "Ifeoma",
    Surname: "Nkemakonam"
}, {
    GivenName: "Mila",
    Surname: "Babić"
}, {
    GivenName: "Alexsandra",
    Surname: "Jönsson"
}, {
    GivenName: "Khumid",
    Surname: "Panova"
}, {
    GivenName: "映梅",
    Surname: "孟"
}, {
    GivenName: "Albina",
    Surname: "Ignatyeva"
}, {
    GivenName: "Egyed",
    Surname: "Kádár"
}, {
    GivenName: "Spomenko",
    Surname: "Blažević"
}, {
    GivenName: "Elisa",
    Surname: "Robel"
}, {
    GivenName: "Kiruka",
    Surname: ""
}, {
    GivenName: "Misayo",
    Surname: "Yoshii"
}, {
    GivenName: "Tarık",
    Surname: "Rooijakkers"
}, {
    GivenName: "Martin",
    Surname: "Pšenička"
}, {
    GivenName: "Benedykta",
    Surname: "Dąbrowski"
}, {
    GivenName: "Guan-yin",
    Surname: "Tung"
}, {
    GivenName: "Marcus",
    Surname: "Smith"
}, {
    GivenName: "Yobachi",
    Surname: "Azubuike"
}, {
    GivenName: "Elias",
    Surname: "Iversen"
}, {
    GivenName: "Joshua",
    Surname: "Paine"
}, {
    GivenName: "Moos",
    Surname: "Walravens"
}, {
    GivenName: "Kitti",
    Surname: "Kovách"
}, {
    GivenName: "Lydia",
    Surname: "Mann"
}, {
    GivenName: "Chidimma",
    Surname: "Chidalu"
}, {
    GivenName: "Melita",
    Surname: "Čeh"
}, {
    GivenName: "Hedda",
    Surname: "Brevik"
}, {
    GivenName: "Lowell",
    Surname: "Gingras"
}, {
    GivenName: "Ola",
    Surname: "Eriksen"
}, {
    GivenName: "Vasja",
    Surname: "Bračanov"
}, {
    GivenName: "Amanda",
    Surname: "Dam"
}, {
    GivenName: "Патриция",
    Surname: "Миронова"
}, {
    GivenName: "Bodo",
    Surname: "Labingi"
}, {
    GivenName: "Lél",
    Surname: "Nagy"
}, {
    GivenName: "Dominic",
    Surname: "Melanson"
}, {
    GivenName: "Porphyry",
    Surname: "Fedorov"
}, {
    GivenName: "Belle",
    Surname: "Váradi"
}, {
    GivenName: "Pasi",
    Surname: "Sumiala"
}, {
    GivenName: "Sumaiyah",
    Surname: "Naifeh"
}, {
    GivenName: "Mary",
    Surname: "Cunder"
}, {
    GivenName: "Jana",
    Surname: "Lončar"
}, {
    GivenName: "Vittore",
    Surname: "Li Fonti"
}, {
    GivenName: "Majken",
    Surname: "Lund"
}, {
    GivenName: "Mayo",
    Surname: "Yamazaki"
}, {
    GivenName: "Lempi",
    Surname: "Pakarinen"
}, {
    GivenName: "Judyta",
    Surname: "Woźniak"
}, {
    GivenName: "John",
    Surname: "Løvstrøm"
}, {
    GivenName: "Mirrin",
    Surname: "Thompson"
}, {
    GivenName: "Martine",
    Surname: "Aasen"
}, {
    GivenName: "Christie",
    Surname: "Morgan"
}, {
    GivenName: "André",
    Surname: "Pinto"
}, {
    GivenName: "Roswitha",
    Surname: "Kolačko"
}, {
    GivenName: "Madison",
    Surname: "Sanches"
}, {
    GivenName: "Ivica",
    Surname: "Vukelić"
}, {
    GivenName: "Marius",
    Surname: "Gustavsson"
}, {
    GivenName: "Kurn",
    Surname: "Kerpach"
}, {
    GivenName: "Kikuno",
    Surname: "Daijou"
}, {
    GivenName: "Yonas",
    Surname: "Goytiom"
}, {
    GivenName: "Leah",
    Surname: "Benson"
}, {
    GivenName: "Shigeta",
    Surname: "Saitou"
}, {
    GivenName: "振翔",
    Surname: "蕭"
}, {
    GivenName: "Brooke",
    Surname: "Kitamura"
}, {
    GivenName: "Julie",
    Surname: "Petersen"
}, {
    GivenName: "Sebastian",
    Surname: "Bieber"
}, {
    GivenName: "Thi",
    Surname: "Hồ"
}, {
    GivenName: "Lidya",
    Surname: "Ali"
}, {
    GivenName: "Arcelia",
    Surname: "Vergara"
}, {
    GivenName: "Hessa",
    Surname: "Baz"
}, {
    GivenName: "Steinn",
    Surname: "Hauksson"
}, {
    GivenName: "Devin",
    Surname: "Wallin"
}, {
    GivenName: "Norris",
    Surname: "Raymond"
}, {
    GivenName: "Lilly",
    Surname: "Kyllingstad"
}, {
    GivenName: "Nicole",
    Surname: "Macdonald"
}, {
    GivenName: "Mikkel",
    Surname: "Lien"
}, {
    GivenName: "Jie",
    Surname: "Tsou"
}, {
    GivenName: "Nolan",
    Surname: "Urena"
}, {
    GivenName: "James",
    Surname: "McIntyre"
}, {
    GivenName: "สุยิ่งหทัย",
    Surname: "ท้าวนิล"
}, {
    GivenName: "Семен",
    Surname: "Озеров"
}, {
    GivenName: "Jan",
    Surname: "Dresdner"
}, {
    GivenName: "Ernest",
    Surname: "Laderoute"
}, {
    GivenName: "Deonilde",
    Surname: "Ponce"
}, {
    GivenName: "Hana",
    Surname: "Gazdíková"
}, {
    GivenName: "Sean",
    Surname: "Kennerley"
}, {
    GivenName: "Joshua",
    Surname: "Turnbull"
}, {
    GivenName: "Bellina",
    Surname: "Angelo"
}, {
    GivenName: "淑慧",
    Surname: "萬"
}, {
    GivenName: "Zakiya",
    Surname: "Kishiev"
}, {
    GivenName: "Nokarinkutaka",
    Surname: ""
}, {
    GivenName: "Kinga",
    Surname: "Schmit"
}, {
    GivenName: "Jaromír",
    Surname: "Maršálek"
}, {
    GivenName: "Lok",
    Surname: "Hsieh"
}, {
    GivenName: "Francesca",
    Surname: "Harper"
}, {
    GivenName: "Filip",
    Surname: "Marchetti"
}, {
    GivenName: "Andarbek",
    Surname: "Arsanukayev"
}, {
    GivenName: "Lina",
    Surname: "Langseth"
}, {
    GivenName: "K ehleyr",
    Surname: "Mi Qogh"
}, {
    GivenName: "Višeslav",
    Surname: "Matić"
}, {
    GivenName: "Christine",
    Surname: "Carvajal"
}, {
    GivenName: "Spencer",
    Surname: "Lloyd"
}, {
    GivenName: "Emilie",
    Surname: "Jørgensen"
}, {
    GivenName: "Goran",
    Surname: "Ćosić"
}, {
    GivenName: "Katokaarichikaarikika",
    Surname: ""
}, {
    GivenName: "Trinette",
    Surname: "Marcil"
}, {
    GivenName: "Валерий",
    Surname: "Артёмов"
}, {
    GivenName: "Mišel",
    Surname: "Albiani"
}, {
    GivenName: "Radoslava",
    Surname: "Micková"
}, {
    GivenName: "Martha",
    Surname: "Marshall"
}, {
    GivenName: "Loet",
    Surname: "Buijsse"
}, {
    GivenName: "Chung",
    Surname: "Ngô"
}, {
    GivenName: "Taylor",
    Surname: "Diaz"
}, {
    GivenName: "Guo",
    Surname: "Hsüeh"
}, {
    GivenName: "Mirikushifuta",
    Surname: ""
}, {
    GivenName: "Lời",
    Surname: "Nguyễn"
}, {
    GivenName: "Morath",
    Surname: "Nizhisht"
}, {
    GivenName: "Mariyo",
    Surname: "Aoyama"
}, {
    GivenName: "Zdeněk",
    Surname: "Chaloupka"
}, {
    GivenName: "Rashidah",
    Surname: "Abboud"
}, {
    GivenName: "Hartmann",
    Surname: "Jónsson"
}, {
    GivenName: "Johannes",
    Surname: "Nielsen"
}, {
    GivenName: "Josefine",
    Surname: "Engelstad"
}, {
    GivenName: "Juliska",
    Surname: "Fazakas"
}, {
    GivenName: "گودرز",
    Surname: "ذاکری"
}, {
    GivenName: "Henry",
    Surname: "Oliversen"
}, {
    GivenName: "Dante",
    Surname: "Vukelić"
}, {
    GivenName: "Asmara",
    Surname: "Simon"
}, {
    GivenName: "Carla",
    Surname: "Sjöberg"
}, {
    GivenName: "Ive",
    Surname: "Ibrišimović"
}, {
    GivenName: "Rinkashifu",
    Surname: ""
}, {
    GivenName: "ดนุวัศ",
    Surname: "เหรียญจินดา"
}, {
    GivenName: "Takashishifu",
    Surname: ""
}, {
    GivenName: "Laila",
    Surname: "Møller"
}, {
    GivenName: "珮瑄",
    Surname: "陸"
}, {
    GivenName: "Shirly",
    Surname: "Armas"
}, {
    GivenName: "Tekle",
    Surname: "Filmon"
}, {
    GivenName: "Otutodilichukwu",
    Surname: "Sopuluchukwu"
}, {
    GivenName: "مهرزاد",
    Surname: "خانه ساز"
}, {
    GivenName: "Jenete",
    Surname: "Onwuemelie"
}, {
    GivenName: "志宏",
    Surname: "胡"
}, {
    GivenName: "Albert",
    Surname: "Takách"
}, {
    GivenName: "Tráng",
    Surname: "Trịnh"
}, {
    GivenName: "คง",
    Surname: "วิชัยรัมย์"
}, {
    GivenName: "Garry",
    Surname: "Docherty"
}, {
    GivenName: "Ritva",
    Surname: "Jehkinen"
}, {
    GivenName: "Abdul-Mu id",
    Surname: "Mustafa"
}, {
    GivenName: "Jesusa",
    Surname: "Puente"
}, {
    GivenName: "J Eval",
    Surname: "Gannik"
}, {
    GivenName: "Cunibaldo",
    Surname: "Zayas"
}, {
    GivenName: "Arandú",
    Surname: "Ramón"
}, {
    GivenName: "Mstislav",
    Surname: "Shubin"
}, {
    GivenName: "Simret",
    Surname: "Simon"
}, {
    GivenName: "Funato",
    Surname: "Hakui"
}, {
    GivenName: "Kutakizikazukuchiri",
    Surname: ""
}, {
    GivenName: "Elliot",
    Surname: "Persson"
}, {
    GivenName: "Ting",
    Surname: "Tang"
}, {
    GivenName: "Laura",
    Surname: "Carlson"
}, {
    GivenName: "Sharon",
    Surname: "Doan"
}, {
    GivenName: "Onyeorulu",
    Surname: "Ozoemena"
}, {
    GivenName: "R Tori",
    Surname: "Abarsha"
}, {
    GivenName: "Renata",
    Surname: "Svobodová"
}, {
    GivenName: "Darin",
    Surname: "Jakobsson"
}, {
    GivenName: "Goldilocks",
    Surname: "Oldbuck"
}, {
    GivenName: "Zafirah",
    Surname: "Shadid"
}, {
    GivenName: "Aurora",
    Surname: "Olsson"
}, {
    GivenName: "Bao",
    Surname: "Lei"
}, {
    GivenName: "Eira",
    Surname: "Nordström"
}, {
    GivenName: "Fesahaye",
    Surname: "Tekle"
}, {
    GivenName: "Camilla",
    Surname: "Grigoryeva"
}, {
    GivenName: "Ayden",
    Surname: "Martin"
}, {
    GivenName: "Albert",
    Surname: "Jespersen"
}, {
    GivenName: "Caitlyn",
    Surname: "Hugo"
}, {
    GivenName: "Ethan",
    Surname: "Burke"
}, {
    GivenName: "Onaedo",
    Surname: "Onyekachukwu"
}, {
    GivenName: "Danuše",
    Surname: "Křiváková"
}, {
    GivenName: "翼",
    Surname: "津久井"
}, {
    GivenName: "真弓",
    Surname: "小井土"
}, {
    GivenName: "مازیار",
    Surname: "کریمی زاده"
}, {
    GivenName: "Shikatanori",
    Surname: ""
}, {
    GivenName: "Qiong",
    Surname: "Yeh"
}, {
    GivenName: "ฐานิต",
    Surname: "วรเนตรสุดาทิพย์"
}, {
    GivenName: "Ditte",
    Surname: "Bertelsen"
}, {
    GivenName: "Věra",
    Surname: "Novotná"
}, {
    GivenName: "Buchi",
    Surname: "Chidiebele"
}, {
    GivenName: "คนิตสาต",
    Surname: "โนนสุวรรณ"
}, {
    GivenName: "Nikolaj",
    Surname: "Krogh"
}, {
    GivenName: "Flynn",
    Surname: "Chamberlain"
}, {
    GivenName: "Björn",
    Surname: "Strömberg"
}, {
    GivenName: "Cho",
    Surname: "Lâm"
}, {
    GivenName: "Trước",
    Surname: "Cao"
}, {
    GivenName: "正博",
    Surname: "類家"
}, {
    GivenName: "Manfred",
    Surname: "Strömberg"
}, {
    GivenName: "Rukimimeki",
    Surname: ""
}, {
    GivenName: "匠",
    Surname: "小櫃"
}, {
    GivenName: "Rive",
    Surname: "Ménard"
}, {
    GivenName: "Robi",
    Surname: "Makay"
}, {
    GivenName: "文帝",
    Surname: "賴"
}, {
    GivenName: "Mus ad",
    Surname: "Touma"
}, {
    GivenName: "Пантелеймон",
    Surname: "Фокин"
}, {
    GivenName: "Andrea",
    Surname: "Hansen"
}, {
    GivenName: "Chizumi",
    Surname: "Shirakawa"
}, {
    GivenName: "Amanda",
    Surname: "Almeida"
}, {
    GivenName: "Tommy",
    Surname: "Douglas"
}, {
    GivenName: "Hana",
    Surname: "Vošahlíková"
}, {
    GivenName: "Diana",
    Surname: "Dodd"
}, {
    GivenName: "四郎",
    Surname: "稲塚"
}, {
    GivenName: "Anastazja",
    Surname: "Ostrowska"
}, {
    GivenName: "Jikumoshijiku",
    Surname: ""
}, {
    GivenName: "Radim",
    Surname: "Blažek"
}, {
    GivenName: "Pavla",
    Surname: "Nováková"
}, {
    GivenName: "Veli-Pekka",
    Surname: "Enckelman"
}, {
    GivenName: "Signe",
    Surname: "Lund"
}, {
    GivenName: "Земфира",
    Surname: "Воронина"
}, {
    GivenName: "Kushikimi",
    Surname: ""
}, {
    GivenName: "شهرام",
    Surname: "شاه سیاه"
}, {
    GivenName: "Nhựt",
    Surname: "Phạm"
}, {
    GivenName: "Unnþór",
    Surname: "Svavarsson"
}, {
    GivenName: "Laufey",
    Surname: "Þorgrímsdóttir"
}, {
    GivenName: "Anthony",
    Surname: "Anderson"
}, {
    GivenName: "Nhị",
    Surname: "Đinh"
}, {
    GivenName: "Shimotokatate",
    Surname: ""
}, {
    GivenName: "Angelina",
    Surname: "Greco"
}, {
    GivenName: "Abdul-Hakim",
    Surname: "Antoun"
}, {
    GivenName: "Anthony",
    Surname: "Low"
}, {
    GivenName: "Mathias",
    Surname: "Fuhrmann"
}, {
    GivenName: "Ruža",
    Surname: "Crnić"
}, {
    GivenName: "Nisim",
    Surname: "Menéndez"
}, {
    GivenName: "Nudhar",
    Surname: "Masih"
}, {
    GivenName: "Ifeoma",
    Surname: "Chidiegwu"
}, {
    GivenName: "بامداد",
    Surname: "کفاش"
}, {
    GivenName: "Нелли",
    Surname: "Токарева"
}, {
    GivenName: "Sulimbek",
    Surname: "Chichigov"
}, {
    GivenName: "Pribislav",
    Surname: "Radić"
}, {
    GivenName: "Chikitoka",
    Surname: ""
}, {
    GivenName: "Aririkishitakufu",
    Surname: ""
}, {
    GivenName: "آنیسا",
    Surname: "شالچی"
}, {
    GivenName: "Owen",
    Surname: "Wall"
}, {
    GivenName: "Olga",
    Surname: "Marjanović"
}, {
    GivenName: "Leonor",
    Surname: "Alves"
}, {
    GivenName: "Noel",
    Surname: "Gjernes"
}, {
    GivenName: "Bradley",
    Surname: "Giles"
}, {
    GivenName: "Viktoria",
    Surname: "Gyôrfy"
}, {
    GivenName: "Jasper",
    Surname: "Marina"
}, {
    GivenName: "Christina",
    Surname: "Olsen"
}, {
    GivenName: "Andrew",
    Surname: "Raiwala"
}, {
    GivenName: "Charo",
    Surname: "Coronado"
}, {
    GivenName: "Tomoyuki",
    Surname: "Iwase"
}, {
    GivenName: "Mary",
    Surname: "Lebedeva"
}, {
    GivenName: "Vladimír",
    Surname: "Březina"
}, {
    GivenName: "Valkra",
    Surname: "Majjas"
}, {
    GivenName: "Senad",
    Surname: "Lučić"
}, {
    GivenName: "Pearl",
    Surname: "Hogpen"
}, {
    GivenName: "Soltamurd",
    Surname: "Kadiev"
}, {
    GivenName: "Belinda",
    Surname: "Gamgee"
}, {
    GivenName: "Anke",
    Surname: "Bosch"
}, {
    GivenName: "Emilia",
    Surname: "Alexeyeva"
}, {
    GivenName: "Jiřina",
    Surname: "Němečková"
}, {
    GivenName: "Федот",
    Surname: "Харламов"
}, {
    GivenName: "Caia",
    Surname: "van Laarhoven"
}, {
    GivenName: "Abraham",
    Surname: "Omar"
}, {
    GivenName: "Kaisa",
    Surname: "Kankaanpää"
}, {
    GivenName: "Kuba",
    Surname: "Piotrowski"
}, {
    GivenName: "Oldřich",
    Surname: "Nejedlý"
}, {
    GivenName: "Bogumił",
    Surname: "Nowak"
}, {
    GivenName: "Sancho",
    Surname: "Hornblower"
}, {
    GivenName: "ชุลีจันทร์",
    Surname: "ศรีโสภณ"
}, {
    GivenName: "Liisi",
    Surname: "Lumme"
}, {
    GivenName: "Georgina",
    Surname: "Révész"
}, {
    GivenName: "Sofia",
    Surname: "Souza"
}, {
    GivenName: "恵介",
    Surname: "須本"
}, {
    GivenName: "Mirosława",
    Surname: "Nowak"
}, {
    GivenName: "Sverrir",
    Surname: "Sigþórsson"
}, {
    GivenName: "Azhurlar",
    Surname: "Kang"
}, {
    GivenName: "Leontina",
    Surname: "Segura"
}, {
    GivenName: "Яна",
    Surname: "Балашова"
}, {
    GivenName: "Poul",
    Surname: "Abelsen"
}, {
    GivenName: "Есения",
    Surname: "Волкова"
}, {
    GivenName: "Mohamed",
    Surname: "Holm"
}, {
    GivenName: "Cecilie",
    Surname: "Christensen"
}, {
    GivenName: "Andrea",
    Surname: "Borbély"
}, {
    GivenName: "กุ้ง",
    Surname: "เรืองเนตร์"
}, {
    GivenName: "Hannah",
    Surname: "Lauridsen"
}, {
    GivenName: "Парамон",
    Surname: "Юсупов"
}, {
    GivenName: "Sibaal",
    Surname: "Zogby"
}, {
    GivenName: "Christophe",
    Surname: "Barteaux"
}, {
    GivenName: "James",
    Surname: "Cameron"
}, {
    GivenName: "Cory",
    Surname: "Wallis"
}, {
    GivenName: "Shikimirikashite",
    Surname: ""
}, {
    GivenName: "Chơi",
    Surname: "Nghiêm"
}, {
    GivenName: "Mikael",
    Surname: "Kilpi"
}, {
    GivenName: "Chelsea",
    Surname: "Newman-Morris"
}, {
    GivenName: "Aimee",
    Surname: "Birch"
}, {
    GivenName: "Jóna",
    Surname: "Sigmundsdóttir"
}, {
    GivenName: "Iwan",
    Surname: "Pawłowski"
}, {
    GivenName: "Zukukato",
    Surname: ""
}, {
    GivenName: "Aloisio",
    Surname: "Rossi"
}, {
    GivenName: "Li",
    Surname: "P eng"
}, {
    GivenName: "Tiziano",
    Surname: "Udinese"
}, {
    GivenName: "Kang",
    Surname: "Tang"
}, {
    GivenName: "Lestav",
    Surname: "Onnak"
}, {
    GivenName: "Svea",
    Surname: "Carlsson"
}, {
    GivenName: "Xue",
    Surname: "Fu"
}, {
    GivenName: "Matilda",
    Surname: "Barišić"
}, {
    GivenName: "Roger",
    Surname: "Nyström"
}, {
    GivenName: "Hitomi",
    Surname: "Takuda"
}, {
    GivenName: "Natasja",
    Surname: "Andreasen"
}, {
    GivenName: "怡伶",
    Surname: "袁"
}, {
    GivenName: "Alan",
    Surname: "Babić"
}, {
    GivenName: "Erzebet",
    Surname: "Szôlôssi"
}, {
    GivenName: "Safiyyah",
    Surname: "Mikhail"
}, {
    GivenName: "Wolfgang",
    Surname: "Pfaff"
}, {
    GivenName: "Анатолий",
    Surname: "Дми́триев"
}, {
    GivenName: "Bội",
    Surname: "Đào"
}, {
    GivenName: "شرمین",
    Surname: "کریمی"
}, {
    GivenName: "Lilja",
    Surname: "Birkeland"
}, {
    GivenName: "Бронислава",
    Surname: "Кулико́ва"
}, {
    GivenName: "Jaime",
    Surname: "Martin"
}, {
    GivenName: "Akiyo",
    Surname: "Murai"
}, {
    GivenName: "Karin",
    Surname: "Müller"
}, {
    GivenName: "สุยอดไผ่",
    Surname: "วรามิตร"
}, {
    GivenName: "Edith",
    Surname: "Kazantseva"
}, {
    GivenName: "Daisy",
    Surname: "Goodchild"
}, {
    GivenName: "Daphne",
    Surname: "Castiglione"
}, {
    GivenName: "Benedykt",
    Surname: "Kucharski"
}, {
    GivenName: "Oskar",
    Surname: "Aas"
}, {
    GivenName: "Arjun",
    Surname: "Hoogers"
}, {
    GivenName: "Kazuhiko",
    Surname: "Iguchi"
}, {
    GivenName: "Anasztaizia",
    Surname: "Szegedi"
}, {
    GivenName: "Lân",
    Surname: "Lạc"
}, {
    GivenName: "Георгий",
    Surname: "Третьяков"
}, {
    GivenName: "Huan Yue",
    Surname: "Han"
}, {
    GivenName: "念平",
    Surname: "路"
}, {
    GivenName: "Regina",
    Surname: "Grubb"
}, {
    GivenName: "กิติคุณ",
    Surname: "ไพลดี"
}, {
    GivenName: "Sofia",
    Surname: "Mäki"
}, {
    GivenName: "Jørgen",
    Surname: "Mikaelsen"
}, {
    GivenName: "Arikarindokuta",
    Surname: ""
}, {
    GivenName: "Susan",
    Surname: "Pena"
}, {
    GivenName: "Erzsok",
    Surname: "Béres"
}, {
    GivenName: "Yumeko",
    Surname: "Hasegawa"
}, {
    GivenName: "Lourn",
    Surname: "Limur"
}, {
    GivenName: "Kashichidoshimo",
    Surname: ""
}, {
    GivenName: "Chelsea",
    Surname: "Morley"
}, {
    GivenName: "Hương",
    Surname: "Đỗ"
}, {
    GivenName: "Abbie",
    Surname: "Wallace"
}, {
    GivenName: "Samra",
    Surname: "Špicar"
}, {
    GivenName: "Pamphila",
    Surname: "Hogpen"
}, {
    GivenName: "Wilcome",
    Surname: "Grubb"
}, {
    GivenName: "Martine",
    Surname: "Kristoffersen"
}, {
    GivenName: "Cecilia",
    Surname: "Jonsson"
}, {
    GivenName: "Edith",
    Surname: "Fredriksson"
}, {
    GivenName: "Jure",
    Surname: "Matijević"
}, {
    GivenName: "Juliane",
    Surname: "Beckenbauer"
}, {
    GivenName: "Shikafurinmotote",
    Surname: ""
}, {
    GivenName: "Skye",
    Surname: "Barker"
}, {
    GivenName: "B Togho",
    Surname: "Araxa"
}, {
    GivenName: "M Lestav",
    Surname: "Rannuf"
}, {
    GivenName: "Mekutotokuchiri",
    Surname: ""
}, {
    GivenName: "和子",
    Surname: "土橋"
}, {
    GivenName: "Vilde",
    Surname: "Holand"
}, {
    GivenName: "Blake",
    Surname: "Starr"
}, {
    GivenName: "Liam",
    Surname: "Boyle"
}, {
    GivenName: "Lei",
    Surname: "Teng"
}, {
    GivenName: "Jamie",
    Surname: "Anderson"
}, {
    GivenName: "Livia",
    Surname: "Siciliani"
}, {
    GivenName: "Khaza",
    Surname: "Kadiev"
}, {
    GivenName: "Motoyo",
    Surname: "Oikawa"
}, {
    GivenName: "Sebestyen",
    Surname: "Benkó"
}, {
    GivenName: "Ruby",
    Surname: "Took"
}, {
    GivenName: "Gilda",
    Surname: "Onio"
}, {
    GivenName: "پیروز",
    Surname: "معظمی"
}, {
    GivenName: "Imam",
    Surname: "Halabi"
}, {
    GivenName: "Pavel",
    Surname: "Pavlík"
}, {
    GivenName: "Jade",
    Surname: "Savage"
}, {
    GivenName: "Fahrudin",
    Surname: "Drvodel"
}, {
    GivenName: "映梅",
    Surname: "賈"
}, {
    GivenName: "Satoru",
    Surname: "Shinohara"
}, {
    GivenName: "Tülay",
    Surname: "Wennink"
}, {
    GivenName: "Iveta",
    Surname: "Krajníková"
}, {
    GivenName: "Thi",
    Surname: "Kim"
}, {
    GivenName: "Freya",
    Surname: "Gardiner"
}, {
    GivenName: "Jan",
    Surname: "Nielsen"
}, {
    GivenName: "Carmen",
    Surname: "Taylor"
}, {
    GivenName: "Gebre",
    Surname: "Tewolde"
}, {
    GivenName: "Methena",
    Surname: "Ouellet"
}, {
    GivenName: "Elísabet",
    Surname: "Ingvarsdóttir"
}, {
    GivenName: "Samppa",
    Surname: "Parnela"
}, {
    GivenName: "สุธุรีพร",
    Surname: "สาโช"
}, {
    GivenName: "Louise",
    Surname: "Hermansen"
}, {
    GivenName: "Mirela",
    Surname: "Kostojčinoski"
}, {
    GivenName: "Fawza",
    Surname: "Bitar"
}, {
    GivenName: "Taeko",
    Surname: "Kudo"
}, {
    GivenName: "Петр",
    Surname: "Ибрагимов"
}, {
    GivenName: "Echezonachukwu",
    Surname: "Ejikemeifeuwa"
}, {
    GivenName: "Tri",
    Surname: "Lâm"
}, {
    GivenName: "ทวัฒชัย",
    Surname: "แซ่หลั่น"
}, {
    GivenName: "J Eneth",
    Surname: "Venonn"
}, {
    GivenName: "Darda",
    Surname: "Sebestyén"
}, {
    GivenName: "Ali",
    Surname: "Kinfe"
}, {
    GivenName: "Jonathan",
    Surname: "Edvardsen"
}, {
    GivenName: "Anastasie",
    Surname: "Fréchette"
}, {
    GivenName: "Chris",
    Surname: "Klos"
}, {
    GivenName: "Simon",
    Surname: "McDonald"
}, {
    GivenName: "Byron",
    Surname: "Lachance"
}, {
    GivenName: "คณิช",
    Surname: "น่วมไม้พุ่ม"
}, {
    GivenName: "Sebhat",
    Surname: "Idris"
}, {
    GivenName: "Ryuuta",
    Surname: "Iida"
}, {
    GivenName: "Muhammed",
    Surname: "Selam"
}, {
    GivenName: "Felicienne",
    Surname: "Gervais"
}, {
    GivenName: "Laura",
    Surname: "Winther"
}, {
    GivenName: "Johnny",
    Surname: "McMillan"
}, {
    GivenName: "Somerville",
    Surname: "Dubeau"
}, {
    GivenName: "Leah",
    Surname: "McCormick"
}, {
    GivenName: "Morag",
    Surname: "Kanff"
}, {
    GivenName: "Adelina",
    Surname: "Mårtensson"
}, {
    GivenName: "Vidko",
    Surname: "Utranker"
}, {
    GivenName: "Chirimorinkaari",
    Surname: ""
}, {
    GivenName: "Krisztina",
    Surname: "Lörinc"
}, {
    GivenName: "بهار",
    Surname: "چرمشیر"
}, {
    GivenName: "Marphisa",
    Surname: "Collin"
}, {
    GivenName: "Jozef",
    Surname: "Kubička"
}, {
    GivenName: "Fumotakatoteka",
    Surname: ""
}, {
    GivenName: "Laerke",
    Surname: "Nygaard"
}, {
    GivenName: "Eino",
    Surname: "Pöyry"
}, {
    GivenName: "Soňa",
    Surname: "Patočková"
}, {
    GivenName: "Gabrielle",
    Surname: "Santos"
}, {
    GivenName: "Victoria",
    Surname: "McComas"
}, {
    GivenName: "Władysława",
    Surname: "Adamska"
}, {
    GivenName: "Tomás",
    Surname: "Melo"
}, {
    GivenName: "Aaran",
    Surname: "Watt"
}, {
    GivenName: "Else",
    Surname: "Egede"
}, {
    GivenName: "Sửu",
    Surname: "Phạm"
}, {
    GivenName: "George",
    Surname: "Najar"
}, {
    GivenName: "Chica",
    Surname: "Bunce"
}, {
    GivenName: "Wakana",
    Surname: "Noda"
}, {
    GivenName: "Burtuka",
    Surname: "Awet"
}, {
    GivenName: "Casper",
    Surname: "Kjerstad"
}, {
    GivenName: "依珊",
    Surname: "張"
}, {
    GivenName: "Kata",
    Surname: "Bányai"
}, {
    GivenName: "Borka",
    Surname: "Szöllössi"
}, {
    GivenName: "Philippine",
    Surname: "Cantin"
}, {
    GivenName: "Zula",
    Surname: "Alem"
}, {
    GivenName: "Adaku",
    Surname: "Elechi"
}, {
    GivenName: "J Gira",
    Surname: "D Ghor"
}, {
    GivenName: "Lulwa",
    Surname: "Botros"
}, {
    GivenName: "Nastia",
    Surname: "Zabukošek"
}, {
    GivenName: "Dorottya",
    Surname: "Kárpáti"
}, {
    GivenName: "Sjöfn",
    Surname: "Bryndísardóttir"
}, {
    GivenName: "Zenobio",
    Surname: "Briones"
}, {
    GivenName: "Carlos",
    Surname: "Araujo"
}, {
    GivenName: "Lea",
    Surname: "Mondragón"
}, {
    GivenName: "Sigurd",
    Surname: "Wangberg"
}, {
    GivenName: "Robinia",
    Surname: "Took"
}, {
    GivenName: "Luisa",
    Surname: "Bataev"
}, {
    GivenName: "桐子",
    Surname: "鴻巣"
}, {
    GivenName: "Hyiab",
    Surname: "Yonatan"
}, {
    GivenName: "Gróa",
    Surname: "Áskelsdóttir"
}, {
    GivenName: "Emppu",
    Surname: "Mäkinen"
}, {
    GivenName: "Rinkatekutakitoku",
    Surname: ""
}, {
    GivenName: "立承",
    Surname: "廖"
}, {
    GivenName: "Alberte",
    Surname: "Danielsen"
}, {
    GivenName: "Marius",
    Surname: "Ulstein"
}, {
    GivenName: "Sakinah",
    Surname: "Baba"
}, {
    GivenName: "Bego",
    Surname: "Mom"
}, {
    GivenName: "George",
    Surname: "Tiegs"
}, {
    GivenName: "Enzo",
    Surname: "Santos"
}, {
    GivenName: "Zufan",
    Surname: "Fesahaye"
}, {
    GivenName: "Iggi",
    Surname: "Luwam"
}, {
    GivenName: "Halette",
    Surname: "Gosselin"
}, {
    GivenName: "Qiang",
    Surname: "Yeh"
}, {
    GivenName: "David",
    Surname: "Moore"
}, {
    GivenName: "Tomoharu",
    Surname: "Ochi"
}, {
    GivenName: "安庭",
    Surname: "佘"
}, {
    GivenName: "Thorsten",
    Surname: "Zimmermann"
}, {
    GivenName: "Ursula",
    Surname: "Faerber"
}, {
    GivenName: " Itaf",
    Surname: "Gaber"
}, {
    GivenName: "Felix",
    Surname: "Carlsen"
}, {
    GivenName: "Jude",
    Surname: "Green"
}, {
    GivenName: "勝",
    Surname: "坂村"
}, {
    GivenName: "Chijindum",
    Surname: "Iloabuchi"
}, {
    GivenName: "Andrea",
    Surname: "Friðbjarnardóttir"
}, {
    GivenName: "佳芳",
    Surname: "姜"
}, {
    GivenName: "Florian",
    Surname: "Junker"
}, {
    GivenName: "Dylan",
    Surname: "Jackson"
}, {
    GivenName: "美優",
    Surname: "向畑"
}, {
    GivenName: "Olga",
    Surname: "Fedorova"
}, {
    GivenName: "Golibe",
    Surname: "Iroawuchi"
}, {
    GivenName: "Þormar",
    Surname: "Diðriksson"
}, {
    GivenName: "Chiebuka",
    Surname: "Osinachi"
}, {
    GivenName: "Lucas",
    Surname: "Valstad"
}, {
    GivenName: "Khuyến",
    Surname: "Nguyễn"
}, {
    GivenName: "Lily",
    Surname: "Fredriksson"
}, {
    GivenName: "Ezinwa",
    Surname: "Chizoba"
}, {
    GivenName: "Yong",
    Surname: "She"
}, {
    GivenName: "Hafiz",
    Surname: "Touma"
}, {
    GivenName: "สุนวล",
    Surname: "หมัดร่าหมาน"
}, {
    GivenName: "Dwight",
    Surname: "Schakelaar"
}, {
    GivenName: "Mewael",
    Surname: "Daniel"
}, {
    GivenName: "Anita",
    Surname: "Tolnay"
}, {
    GivenName: "Mateja",
    Surname: "Novaković"
}, {
    GivenName: "Ashlee",
    Surname: "Tracy"
}, {
    GivenName: "Marc",
    Surname: "Williamson"
}, {
    GivenName: "Thắm",
    Surname: "Hàn"
}, {
    GivenName: "Lydia",
    Surname: "Uspenskaya"
}, {
    GivenName: "بهرنگ",
    Surname: "کوشا"
}, {
    GivenName: "Sandia",
    Surname: "Hanse"
}, {
    GivenName: "Uranio",
    Surname: "Boni"
}, {
    GivenName: "Isaiah",
    Surname: "Kapustin"
}, {
    GivenName: "Kusama",
    Surname: "Musliyevich"
}, {
    GivenName: "Holly",
    Surname: "Jamieson"
}, {
    GivenName: "ดนุพล",
    Surname: "มะละสี"
}, {
    GivenName: "Laurent",
    Surname: "Lauzier"
}, {
    GivenName: "Krševan",
    Surname: "Šimunović"
}, {
    GivenName: "Jasenko",
    Surname: "Vuković"
}, {
    GivenName: "Прохор",
    Surname: "Никитин"
}, {
    GivenName: "Hát",
    Surname: "Lưu"
}, {
    GivenName: "Харитон",
    Surname: "Алиев"
}, {
    GivenName: "Igor",
    Surname: "Araujo"
}, {
    GivenName: "Élodie",
    Surname: "Moreau"
}, {
    GivenName: "An",
    Surname: "Chao"
}, {
    GivenName: "陽子",
    Surname: "村橋"
}, {
    GivenName: "Marie",
    Surname: "Mocová"
}, {
    GivenName: "Michelle",
    Surname: "Verheij"
}, {
    GivenName: "Vinicius",
    Surname: "Alves"
}, {
    GivenName: "Keppa",
    Surname: "Hinori"
}, {
    GivenName: "Jin",
    Surname: "Wei"
}, {
    GivenName: "Ei",
    Surname: "Souma"
}, {
    GivenName: "Valdemar",
    Surname: "Frederiksen"
}, {
    GivenName: "Sakuya",
    Surname: "Meshizuka"
}, {
    GivenName: "Philemon",
    Surname: "Vassiliev"
}, {
    GivenName: "Daria",
    Surname: "Palermo"
}, {
    GivenName: "Mahbub",
    Surname: "Antoun"
}, {
    GivenName: "Arichikunorikatokiku",
    Surname: ""
}, {
    GivenName: "Vsevolod",
    Surname: "Avdeev"
}, {
    GivenName: "Muhammad",
    Surname: "Bruce"
}, {
    GivenName: "Natasha",
    Surname: "Broadhurst"
}, {
    GivenName: "Ingeborg",
    Surname: "Vu"
}, {
    GivenName: "Hayden",
    Surname: "Dunbabin"
}, {
    GivenName: "Roko",
    Surname: "Ilić"
}, {
    GivenName: "Przemko",
    Surname: "Borkowski"
}, {
    GivenName: "สุยวนใจ",
    Surname: "สงวนตระกูล"
}, {
    GivenName: "Zumoarikunori",
    Surname: ""
}, {
    GivenName: "Zakiyyah",
    Surname: "Arian"
}, {
    GivenName: "Hội",
    Surname: "Dương"
}, {
    GivenName: "Chi",
    Surname: "Wei"
}, {
    GivenName: "Andrea",
    Surname: "Ottarsdóttir"
}, {
    GivenName: "Veronika",
    Surname: "Veverková"
}, {
    GivenName: "Jeanne",
    Surname: "Yefremova"
}, {
    GivenName: "Tóbias",
    Surname: "Bracegirdle"
}, {
    GivenName: "Gerald",
    Surname: "Ladd"
}, {
    GivenName: "Bethany",
    Surname: "Carey"
}, {
    GivenName: "Ruta",
    Surname: "Haylom"
}, {
    GivenName: "Len",
    Surname: "Archuleta"
}, {
    GivenName: "Adonay",
    Surname: "Mustafa"
}, {
    GivenName: "Otitodilinna",
    Surname: "Muomelu"
}, {
    GivenName: "Dylan",
    Surname: "Barnett"
}, {
    GivenName: "Ilaz",
    Surname: "Pokeršnik"
}, {
    GivenName: "Katrine",
    Surname: "Mikaelsen"
}, {
    GivenName: "Barakah",
    Surname: "Khoury"
}, {
    GivenName: "柏翰",
    Surname: "葉"
}, {
    GivenName: "瑋婷",
    Surname: "許"
}, {
    GivenName: "Patrik",
    Surname: "Trifunović"
}, {
    GivenName: "Stefanie",
    Surname: "Achen"
}, {
    GivenName: "Thawban",
    Surname: "Handal"
}, {
    GivenName: "直子",
    Surname: "影井"
}, {
    GivenName: "Celestyna",
    Surname: "Szczepańska"
}, {
    GivenName: "Ta",
    Surname: "Thủy"
}, {
    GivenName: "Freddie",
    Surname: "Clark"
}, {
    GivenName: "Elena",
    Surname: "Padovesi"
}, {
    GivenName: "Henrik",
    Surname: "Jeremiassen"
}, {
    GivenName: "真弓",
    Surname: "水城"
}, {
    GivenName: "Benedetto",
    Surname: "Zito"
}, {
    GivenName: "Lauri",
    Surname: "Päätalo"
}, {
    GivenName: "Donovan",
    Surname: "Kužet"
}, {
    GivenName: "Arto",
    Surname: "Mäkilä"
}, {
    GivenName: "Nina",
    Surname: "Taylor"
}, {
    GivenName: "Morten",
    Surname: "Thorsen"
}, {
    GivenName: "Sesuna",
    Surname: "Girmay"
}, {
    GivenName: "文子",
    Surname: "根木"
}, {
    GivenName: "Semret",
    Surname: "Zula"
}, {
    GivenName: "Lavinia",
    Surname: "Araujo"
}, {
    GivenName: "Tamara",
    Surname: "Repina"
}, {
    GivenName: "Rifat",
    Surname: "Avsenak"
}, {
    GivenName: "ณัฐฐานิสร",
    Surname: "แสงดี"
}, {
    GivenName: "Mirte",
    Surname: "Aelmans"
}, {
    GivenName: "Amelia",
    Surname: "Robinson"
}, {
    GivenName: "Eliza",
    Surname: "Tarrant"
}, {
    GivenName: "Yoshio",
    Surname: "Uchiumi"
}, {
    GivenName: "Matilda",
    Surname: "Goold"
}, {
    GivenName: "Leonardo",
    Surname: "Santos"
}, {
    GivenName: "Salvia",
    Surname: "Twofoot"
}, {
    GivenName: "Nethuss",
    Surname: "Demma"
}, {
    GivenName: "Drugi",
    Surname: "Wysocki"
}, {
    GivenName: "Mike",
    Surname: "Kohler"
}, {
    GivenName: "Omeokachie",
    Surname: "Nkemakolam"
}, {
    GivenName: "Gestur",
    Surname: "Hinriksson"
}, {
    GivenName: "Zlate",
    Surname: "Čurman"
}, {
    GivenName: "Astolpho",
    Surname: "DuLin"
}, {
    GivenName: "Soma",
    Surname: "Berki"
}, {
    GivenName: "Marie",
    Surname: "Bieber"
}, {
    GivenName: "Gaetane",
    Surname: "Pelland"
}, {
    GivenName: "Belladonna",
    Surname: "Banks"
}, {
    GivenName: "Gayr",
    Surname: "Dratchev"
}, {
    GivenName: "Hannah",
    Surname: "Groom"
}, {
    GivenName: "Ines",
    Surname: "Blomqvist"
}, {
    GivenName: "Tekataku",
    Surname: ""
}, {
    GivenName: "Božena",
    Surname: "Matković"
}, {
    GivenName: "Bogumił",
    Surname: "Kalinowski"
}, {
    GivenName: "Derek",
    Surname: "Lockwood"
}, {
    GivenName: "Wielisław",
    Surname: "Michalski"
}, {
    GivenName: "政宏",
    Surname: "任"
}, {
    GivenName: "Linda",
    Surname: "Cramer"
}, {
    GivenName: "Nasri",
    Surname: "Sleiman"
}, {
    GivenName: "شیفته",
    Surname: "علیزاده"
}, {
    GivenName: "Niklas",
    Surname: "Eberhart"
}, {
    GivenName: "Leonie",
    Surname: "Amsel"
}, {
    GivenName: "Chinwendu",
    Surname: "Chinwendu"
}, {
    GivenName: "Laerke",
    Surname: "Johansen"
}, {
    GivenName: "Stefan",
    Surname: "Jönsson"
}, {
    GivenName: "Rajko",
    Surname: "Crnić"
}, {
    GivenName: "Kirima",
    Surname: "Ojima"
}, {
    GivenName: "Jukka-Pekk",
    Surname: "Vanhanen"
}, {
    GivenName: "Anu",
    Surname: "Tuimala"
}, {
    GivenName: "Karen",
    Surname: "Wurst"
}, {
    GivenName: "کسرا",
    Surname: "میرهاشمی"
}, {
    GivenName: "Nuka",
    Surname: "Petrussen"
}, {
    GivenName: "Juergen",
    Surname: "Hitij"
}, {
    GivenName: "佳慧",
    Surname: "尹"
}, {
    GivenName: "Benjamin",
    Surname: "Nørgaard"
}, {
    GivenName: "学",
    Surname: "内記"
}, {
    GivenName: "Cecil",
    Surname: "Figueroa"
}, {
    GivenName: "Sofia",
    Surname: "Abakumova"
}, {
    GivenName: "Shing",
    Surname: "Chia"
}, {
    GivenName: "Polo",
    Surname: "Bolger-Baggins"
}, {
    GivenName: "Mathias",
    Surname: "Theiss"
}, {
    GivenName: "和也",
    Surname: "今若"
}, {
    GivenName: "Madueke",
    Surname: "Egobudike"
}, {
    GivenName: "Lian",
    Surname: "Tsai"
}, {
    GivenName: "Marya",
    Surname: "Dubinina"
}, {
    GivenName: "Armen",
    Surname: "Klanfar"
}, {
    GivenName: "Vappu",
    Surname: "Mäenpää"
}, {
    GivenName: "Marino",
    Surname: "Varga"
}, {
    GivenName: "Алла",
    Surname: "Васильева"
}, {
    GivenName: "Hỷ",
    Surname: "Tôn"
}, {
    GivenName: "Rós",
    Surname: "Finnbogadóttir"
}, {
    GivenName: "致堯",
    Surname: "丁"
}, {
    GivenName: "正男",
    Surname: "船崎"
}, {
    GivenName: "Ianina",
    Surname: "Agosto"
}, {
    GivenName: "Bayan",
    Surname: "Hadad"
}, {
    GivenName: "Lucie",
    Surname: "Giňová"
}, {
    GivenName: "Pavia",
    Surname: "Jakobsen"
}, {
    GivenName: "Zufan",
    Surname: "Abraham"
}, {
    GivenName: "Bogdan",
    Surname: "Pivc"
}, {
    GivenName: "Nicolas",
    Surname: "Azevedo"
}, {
    GivenName: "Sophie",
    Surname: "Murray"
}, {
    GivenName: "Colombano",
    Surname: "Manna"
}, {
    GivenName: "Ngà",
    Surname: "Quynh"
}, {
    GivenName: "Erick",
    Surname: "Silva"
}, {
    GivenName: "Paula",
    Surname: "Öhman"
}, {
    GivenName: "曉彤",
    Surname: "楊"
}, {
    GivenName: "Gabriela",
    Surname: "Silva"
}, {
    GivenName: "Inunnguaq",
    Surname: "Mikaelsen"
}, {
    GivenName: "Ulpu",
    Surname: "Soranen"
}, {
    GivenName: "Kintata",
    Surname: "T var"
}, {
    GivenName: "آناهیتا",
    Surname: "خویینی"
}, {
    GivenName: "Vera Frančiška",
    Surname: "Homovc"
}, {
    GivenName: "Gertruda",
    Surname: "Walczak"
}, {
    GivenName: "Minik",
    Surname: "Lundblad"
}, {
    GivenName: "Taylor",
    Surname: "Sykes"
}, {
    GivenName: "Madihah",
    Surname: "Habte"
}, {
    GivenName: "Zinat",
    Surname: "Hajjar"
}, {
    GivenName: "Tochukwu",
    Surname: "Chizoba"
}, {
    GivenName: "Jian",
    Surname: "Ts ai"
}, {
    GivenName: "Lois",
    Surname: "Walker"
}, {
    GivenName: "Hans",
    Surname: "Nyberg"
}, {
    GivenName: "貿昌",
    Surname: "鍾"
}, {
    GivenName: "節子",
    Surname: "奥宮"
}, {
    GivenName: "Matthew",
    Surname: "Vincent"
}, {
    GivenName: "Sigurður",
    Surname: "Harðarson"
}, {
    GivenName: "Jan",
    Surname: "Král"
}, {
    GivenName: "Leah",
    Surname: "Hastings"
}, {
    GivenName: "Koli",
    Surname: "Karat"
}, {
    GivenName: "ทรงภพ",
    Surname: "บุญแสน"
}, {
    GivenName: "Pimpernel",
    Surname: "Clayhanger"
}, {
    GivenName: "Cưu",
    Surname: "Kim"
}, {
    GivenName: "哲揚",
    Surname: "程"
}, {
    GivenName: "Sebastian",
    Surname: "Nilsen"
}, {
    GivenName: "Umberto",
    Surname: "Colombo"
}, {
    GivenName: "Asfaha",
    Surname: "Samuel"
}, {
    GivenName: "Zukushifuta",
    Surname: ""
}, {
    GivenName: "Harley",
    Surname: "Chapman"
}, {
    GivenName: "روشنک",
    Surname: "طاهباز"
}, {
    GivenName: "Mike",
    Surname: "Hermansen"
}, {
    GivenName: "Aririkutatakufu",
    Surname: ""
}, {
    GivenName: "Helena",
    Surname: "Männikkö"
}, {
    GivenName: "Mette",
    Surname: "Sørensen"
}, {
    GivenName: "Carlos",
    Surname: "Castro"
}, {
    GivenName: "Neptuno",
    Surname: "Tamayo"
}, {
    GivenName: "Arman",
    Surname: "Amdal"
}, {
    GivenName: "Dominik",
    Surname: "Srčnik"
}, {
    GivenName: "Наум",
    Surname: "Глазков"
}, {
    GivenName: "Akwaugo",
    Surname: "Onyemachukwu"
}, {
    GivenName: "直樹",
    Surname: "羽場"
}, {
    GivenName: "Snješka",
    Surname: "Posavec"
}, {
    GivenName: "Stephen",
    Surname: "Brand"
}, {
    GivenName: "Justin",
    Surname: "Lempriere"
}, {
    GivenName: "Shozo",
    Surname: "Takahasi"
}, {
    GivenName: "Khaza",
    Surname: "Sultanovich"
}, {
    GivenName: "Martin",
    Surname: "Iversen"
}, {
    GivenName: "Usam",
    Surname: "Vedzizhev"
}, {
    GivenName: "Rorg",
    Surname: "Zu ud"
}, {
    GivenName: "Awet",
    Surname: "Girmay"
}, {
    GivenName: "Havanna",
    Surname: "Nyberg"
}, {
    GivenName: "Zumoto",
    Surname: ""
}, {
    GivenName: "桐子",
    Surname: "花澤"
}, {
    GivenName: "Isabella",
    Surname: "Kjær"
}, {
    GivenName: "Shadin",
    Surname: "Halabi"
}, {
    GivenName: "Mojmira",
    Surname: "Brajković"
}, {
    GivenName: "สุลักษ์ศิกา",
    Surname: "มาบัณฑิตย์"
}, {
    GivenName: "K Ellal",
    Surname: "Pallara"
}, {
    GivenName: "Donnamira",
    Surname: "Took"
}, {
    GivenName: "Khazimat",
    Surname: "Sheripov"
}, {
    GivenName: "Эдита",
    Surname: "Евсеева"
}, {
    GivenName: "Vinicius",
    Surname: "Ribeiro"
}, {
    GivenName: "Caoimhe",
    Surname: "Muir"
}, {
    GivenName: "Dorene",
    Surname: "Chassé"
}, {
    GivenName: "สุนงค์ลักษ์",
    Surname: "กิจกาญจนไพบูลย์"
}, {
    GivenName: "Jesse",
    Surname: "Virtanen"
}, {
    GivenName: "Licia",
    Surname: "Pirozzi"
}, {
    GivenName: "Shimozukushichi",
    Surname: ""
}, {
    GivenName: "Jishikujimoshifu",
    Surname: ""
}, {
    GivenName: "Duqyaha",
    Surname: "Sultygov"
}, {
    GivenName: "جهاندار",
    Surname: "خاکباز"
}, {
    GivenName: "Bailey",
    Surname: "Kidman"
}, {
    GivenName: "Age",
    Surname: "Dobriković"
}, {
    GivenName: "Rowan",
    Surname: "Bracegirdle"
}, {
    GivenName: "Arsi",
    Surname: "Meriluoto"
}, {
    GivenName: "Xinh",
    Surname: "Đỗ"
}, {
    GivenName: "Swen",
    Surname: "Berg"
}, {
    GivenName: "Franciszka",
    Surname: "Sokołowska"
}, {
    GivenName: "Alfa",
    Surname: "Bryndísardóttir"
}, {
    GivenName: "Вероника",
    Surname: "Сергеева"
}, {
    GivenName: "Harun",
    Surname: "Löfgren"
}, {
    GivenName: "Thomas",
    Surname: "Tobiassen"
}, {
    GivenName: "Mafumi",
    Surname: "Minami"
}, {
    GivenName: "Zsombor",
    Surname: "Borsos"
}, {
    GivenName: "Tracy",
    Surname: "Lane"
}, {
    GivenName: "Juliane",
    Surname: "Lyberth"
}, {
    GivenName: "Jeppe",
    Surname: "Laursen"
}, {
    GivenName: "Hidetoshi",
    Surname: "Sahaku"
}, {
    GivenName: "Vlatka",
    Surname: "Ilić"
}, {
    GivenName: "Xinh",
    Surname: "Ngô"
}, {
    GivenName: "Tyko",
    Surname: "Sirviö"
}, {
    GivenName: "Nathan",
    Surname: "MacDonald"
}, {
    GivenName: "Jože Peter",
    Surname: "Zelcer"
}, {
    GivenName: "Teresa",
    Surname: "Ibragimova"
}, {
    GivenName: "Mounssif",
    Surname: "Robben"
}, {
    GivenName: "Tamara",
    Surname: "Akhtakhanov"
}, {
    GivenName: "R Ryna",
    Surname: "Axenni"
}, {
    GivenName: "Andrew",
    Surname: "Grant"
}, {
    GivenName: "Branivoj",
    Surname: "Brod"
}, {
    GivenName: "Ксения",
    Surname: "Зубарева"
}, {
    GivenName: "My",
    Surname: "Eriksson"
}, {
    GivenName: "Kras",
    Surname: "Riskadh"
}, {
    GivenName: "Ахмет",
    Surname: "Ибрагимов"
}, {
    GivenName: "آزاده",
    Surname: "مرادی"
}, {
    GivenName: "緑",
    Surname: "貴島"
}, {
    GivenName: "Kang",
    Surname: "Chuang"
}, {
    GivenName: "Nwanneka",
    Surname: "Mamelu"
}, {
    GivenName: "Zarita",
    Surname: "Arsanukayev"
}, {
    GivenName: "Chanh",
    Surname: "Văn"
}, {
    GivenName: "Naurbi",
    Surname: "Ryzaev"
}, {
    GivenName: "Dawit",
    Surname: "Daniel"
}, {
    GivenName: "Hafliði",
    Surname: "Sigþórsson"
}, {
    GivenName: "Thomas",
    Surname: "Cobbett"
}, {
    GivenName: "Artur",
    Surname: "Hill"
}, {
    GivenName: "Mai",
    Surname: "van Iersel"
}, {
    GivenName: "Isaias",
    Surname: "Russom"
}, {
    GivenName: "Iveta",
    Surname: "Fryčová"
}, {
    GivenName: "Lars",
    Surname: "Lynge"
}, {
    GivenName: "Yi Jie",
    Surname: "Fu"
}, {
    GivenName: "Erzumane",
    Surname: "Padovac"
}, {
    GivenName: "Sigurlaug",
    Surname: "Valbergsdóttir"
}, {
    GivenName: "Connor",
    Surname: "Robinson"
}, {
    GivenName: "Mirosław",
    Surname: "Wojciechowski"
}, {
    GivenName: "Martha",
    Surname: "Mikaelsen"
}, {
    GivenName: "กุมพล",
    Surname: "มาศรี"
}, {
    GivenName: "Izsak",
    Surname: "Erdey"
}, {
    GivenName: "Marius",
    Surname: "Jespersen"
}, {
    GivenName: "Siro",
    Surname: "Schiavone"
}, {
    GivenName: "James",
    Surname: "McMullen"
}, {
    GivenName: "Jacopo",
    Surname: "Greco"
}, {
    GivenName: "Kamal",
    Surname: "Attia"
}, {
    GivenName: "ขวัญชาติ",
    Surname: "ไหมพุ่ม"
}, {
    GivenName: "Tellervo",
    Surname: "Kojonkoski"
}, {
    GivenName: "Sienna",
    Surname: "Barton"
}, {
    GivenName: "Sesuna",
    Surname: "Asfaha"
}, {
    GivenName: "Alma",
    Surname: "Bech"
}, {
    GivenName: "Fredek",
    Surname: "Máthé"
}, {
    GivenName: "Winesh",
    Surname: "Offringa"
}, {
    GivenName: "Maik",
    Surname: "Achen"
}, {
    GivenName: "Zuhdija",
    Surname: "Girotto"
}, {
    GivenName: "Isaias",
    Surname: "Tekle"
}, {
    GivenName: "Naoharu",
    Surname: "Higa"
}, {
    GivenName: "Naoaki",
    Surname: "Nagano"
}, {
    GivenName: "Sự",
    Surname: "Chung"
}, {
    GivenName: "Natali",
    Surname: "Söderberg"
}, {
    GivenName: "Zudokato",
    Surname: ""
}, {
    GivenName: "Lựu",
    Surname: "Nghiêm"
}, {
    GivenName: "Savely",
    Surname: "Aksenov"
}, {
    GivenName: "Christopher",
    Surname: "Zotov"
}, {
    GivenName: "Dawit",
    Surname: "Hagos"
}, {
    GivenName: "Gundolpho",
    Surname: "Noakes"
}, {
    GivenName: "Михаил",
    Surname: "Успе́нский"
}, {
    GivenName: "Erik",
    Surname: "Moench"
}, {
    GivenName: "Jens",
    Surname: "Kaiser"
}, {
    GivenName: "Milenko",
    Surname: "Vidaković"
}, {
    GivenName: "Angelico",
    Surname: "Bianchi"
}, {
    GivenName: "Manu",
    Surname: "Pihlava"
}, {
    GivenName: "Connor",
    Surname: "Prevost"
}, {
    GivenName: "Mgborie",
    Surname: "Yobachi"
}, {
    GivenName: "Polla",
    Surname: "Vizirov"
}, {
    GivenName: "Jitka",
    Surname: "Zetochová"
}, {
    GivenName: "Haile",
    Surname: "Mewael"
}, {
    GivenName: "František",
    Surname: "Havel"
}, {
    GivenName: "Michal",
    Surname: "Procházka"
}, {
    GivenName: "Ibtisam",
    Surname: "Issa"
}, {
    GivenName: "ชัยวุทธ",
    Surname: "ชูติวิศุทธิ์"
}, {
    GivenName: "Nuiko",
    Surname: "Kurosawa"
}, {
    GivenName: "Oliver",
    Surname: "Winter"
}, {
    GivenName: "Chigbogu",
    Surname: "Obioma"
}, {
    GivenName: "Ellinor",
    Surname: "Hauge"
}, {
    GivenName: "Turner",
    Surname: "Rancourt"
}, {
    GivenName: "William",
    Surname: "Andreassen"
}, {
    GivenName: "Jean",
    Surname: "Lang"
}, {
    GivenName: "優太",
    Surname: "兼次"
}, {
    GivenName: "Lois",
    Surname: "Burns"
}, {
    GivenName: "آفرینش",
    Surname: "آسایش"
}, {
    GivenName: "Pervinca",
    Surname: "Gamgee"
}, {
    GivenName: "Duco",
    Surname: "Lo"
}, {
    GivenName: "Obialo",
    Surname: "Okeke"
}, {
    GivenName: "Philipp",
    Surname: "Nussbaum"
}, {
    GivenName: "Elihu",
    Surname: "Hernandes"
}, {
    GivenName: "Gautur",
    Surname: "Símonarson"
}, {
    GivenName: "Komimasa",
    Surname: "Iwase"
}, {
    GivenName: "Abigail",
    Surname: "Cooke"
}, {
    GivenName: "Zoárd",
    Surname: "Sinku"
}, {
    GivenName: "Arikashikari",
    Surname: ""
}, {
    GivenName: "Lucas",
    Surname: "Rose"
}, {
    GivenName: "Zakiyat",
    Surname: "Sultygov"
}, {
    GivenName: "Thắng",
    Surname: "Thủy"
}, {
    GivenName: "豊",
    Surname: "本宮"
}, {
    GivenName: "Hannele",
    Surname: "Jokela"
}, {
    GivenName: "Tranquillina",
    Surname: "Trevisano"
}, {
    GivenName: "Kristine",
    Surname: "Dam"
}, {
    GivenName: "Jordan",
    Surname: "Nicholls"
}, {
    GivenName: "逸華",
    Surname: "余"
}, {
    GivenName: "Nhu",
    Surname: "Võ"
}, {
    GivenName: "Abdul-Aziz",
    Surname: "Seif"
}, {
    GivenName: "Kenneth",
    Surname: "Olivo"
}, {
    GivenName: "Edward",
    Surname: "Souter"
}, {
    GivenName: "Valeria",
    Surname: "Isayeva"
}, {
    GivenName: "Ellinore",
    Surname: "Martinsson"
}, {
    GivenName: "Rindoshikikuta",
    Surname: ""
}, {
    GivenName: "Lei",
    Surname: "Tien"
}, {
    GivenName: "Ratka",
    Surname: "Kovačević"
}, {
    GivenName: "Felix",
    Surname: "Laursen"
}, {
    GivenName: "Thọ",
    Surname: "Cao"
}, {
    GivenName: "Habte",
    Surname: "Selam"
}, {
    GivenName: "Thierry",
    Surname: "Souplet"
}, {
    GivenName: "Salvia",
    Surname: "Chubb"
}, {
    GivenName: "Ibrakhim",
    Surname: "Kadyrov"
}, {
    GivenName: "Серафима",
    Surname: "Сорокина"
}, {
    GivenName: "Courtland",
    Surname: "Asselin"
}, {
    GivenName: "Zite",
    Surname: "Briseño"
}, {
    GivenName: "Abby",
    Surname: "Kirsova"
}, {
    GivenName: "Auður",
    Surname: "Guðgeirsdóttir"
}, {
    GivenName: "Alexander",
    Surname: "MacDonald"
}, {
    GivenName: "Nhường",
    Surname: "Huỳnh"
}, {
    GivenName: "Spencer",
    Surname: "Jess"
}, {
    GivenName: " Azab",
    Surname: "Quraishi"
}, {
    GivenName: "ท้วน",
    Surname: "ถวิลหวัง"
}, {
    GivenName: "Zufan",
    Surname: "Amanuel"
}, {
    GivenName: "Bethan",
    Surname: "Hughes"
}, {
    GivenName: "Gwamniru",
    Surname: "Golibe"
}, {
    GivenName: "Eerik",
    Surname: "Hahli"
}, {
    GivenName: "Aubrey",
    Surname: "Cormier"
}, {
    GivenName: "Kaja",
    Surname: "Friðleifsdóttir"
}, {
    GivenName: "Christophe",
    Surname: "Reséndez"
}, {
    GivenName: "Rebeca",
    Surname: "Fernandes"
}, {
    GivenName: "Guðjóna",
    Surname: "Agnarsdóttir"
}, {
    GivenName: "Rinkashijikiku",
    Surname: ""
}, {
    GivenName: "Edvin",
    Surname: "Arvidsson"
}, {
    GivenName: "Júlia",
    Surname: "Silva"
}, {
    GivenName: "康平",
    Surname: "音田"
}, {
    GivenName: "Caspar",
    Surname: "Lindström"
}, {
    GivenName: "Henio",
    Surname: "Nowak"
}, {
    GivenName: "Sævar",
    Surname: "Sigmarsson"
}, {
    GivenName: "Amelie",
    Surname: "Pollak"
}, {
    GivenName: "Fethawit",
    Surname: "Tewelde"
}, {
    GivenName: "L Tava",
    Surname: "K mpec"
}, {
    GivenName: "Chandler",
    Surname: "de Chateaub"
}, {
    GivenName: "Kim",
    Surname: "Ngô"
}, {
    GivenName: "B elanna",
    Surname: "Demma"
}, {
    GivenName: "Hipolit",
    Surname: "Kamiński"
}, {
    GivenName: "Adelinda",
    Surname: "Costa"
}, {
    GivenName: "Leonti",
    Surname: "Boholyubov"
}, {
    GivenName: "L Tali",
    Surname: "Ozhpri"
}, {
    GivenName: "Sigurborg",
    Surname: "Steindórsdóttir"
}, {
    GivenName: "Wolfgang",
    Surname: "Kunze"
}, {
    GivenName: "Lubor",
    Surname: "Kahoun"
}, {
    GivenName: "Nicholas",
    Surname: "Mercier"
}, {
    GivenName: "Jonathan",
    Surname: "Williams"
}, {
    GivenName: "Leo",
    Surname: "Miller"
}, {
    GivenName: "Cecilie",
    Surname: "Andersen"
}, {
    GivenName: "Rhys",
    Surname: "Barnett"
}, {
    GivenName: "Cecilie",
    Surname: "Møller"
}, {
    GivenName: "Uruahia",
    Surname: "Ibeabuchi"
}, {
    GivenName: "Igor",
    Surname: "Konovalov"
}, {
    GivenName: "Ola",
    Surname: "Norberg"
}, {
    GivenName: "Lamara",
    Surname: "Khadzhiyev"
}, {
    GivenName: "Johannes",
    Surname: "Mathiassen"
}, {
    GivenName: "Jonathon",
    Surname: "Roberson"
}, {
    GivenName: "Rinat",
    Surname: "Fomin"
}, {
    GivenName: "Klaudia",
    Surname: "Paulussen"
}, {
    GivenName: "Inez",
    Surname: "Steere"
}, {
    GivenName: "Maci",
    Surname: "McGregor"
}, {
    GivenName: "Mandel",
    Surname: "Lessard"
}, {
    GivenName: "Blake",
    Surname: "Mundy"
}, {
    GivenName: "Enmanuel",
    Surname: "Rentería"
}, {
    GivenName: "شهباز",
    Surname: "گلی"
}, {
    GivenName: "Panteleimon",
    Surname: "Matveyev"
}, {
    GivenName: "Ante",
    Surname: "Matić"
}, {
    GivenName: "育秋",
    Surname: "邢"
}, {
    GivenName: "Карл",
    Surname: "Агафо́нов"
}, {
    GivenName: "Semhar",
    Surname: "Abraham"
}, {
    GivenName: "Brodie",
    Surname: "Allen"
}, {
    GivenName: "فردین",
    Surname: "پایدار زاده"
}, {
    GivenName: "Николай",
    Surname: "Пирогов"
}, {
    GivenName: "Kristine",
    Surname: "Madsen"
}, {
    GivenName: "Sighvatr",
    Surname: "Felixson"
}, {
    GivenName: "Bojan Janez",
    Surname: "Stišovič"
}, {
    GivenName: "امید",
    Surname: "شالچی"
}, {
    GivenName: "Roma",
    Surname: "Michael"
}, {
    GivenName: "Carolina",
    Surname: "Araujo"
}, {
    GivenName: "Esomchi",
    Surname: "Osonduagwuike"
}, {
    GivenName: "法子",
    Surname: "上里"
}, {
    GivenName: "Jort",
    Surname: "Robbertsen"
}, {
    GivenName: "Nasa",
    Surname: "Unagroth"
}, {
    GivenName: "軒銘",
    Surname: "毛"
}, {
    GivenName: "شیرین",
    Surname: "پارسافر"
}, {
    GivenName: "Mijal",
    Surname: "Prieto"
}, {
    GivenName: "Urunna",
    Surname: "Ugorji"
}, {
    GivenName: "Nilas",
    Surname: "Lundström"
}, {
    GivenName: "จิรเกียรติ",
    Surname: "ผลาผล"
}, {
    GivenName: "Negisti",
    Surname: "Nasih"
}, {
    GivenName: "Teppei",
    Surname: "Nemoto"
}, {
    GivenName: "Alberte",
    Surname: "Karlsen"
}, {
    GivenName: "Urjasz",
    Surname: "Kowalczyk"
}, {
    GivenName: "Renata",
    Surname: "Stojanović"
}, {
    GivenName: "Katja",
    Surname: "Varvio"
}, {
    GivenName: "Harley",
    Surname: "Howard"
}, {
    GivenName: "Mochihiro",
    Surname: "Kitamura"
}, {
    GivenName: "Wincenty",
    Surname: "Wojciechowski"
}, {
    GivenName: "Zhen",
    Surname: "Hsing"
}, {
    GivenName: "Mamelu",
    Surname: "Nkemdirim"
}, {
    GivenName: "Timothée",
    Surname: "Bonami"
}, {
    GivenName: "Charlotte",
    Surname: "Fleischer"
}, {
    GivenName: "Sargent",
    Surname: "Lamarre"
}, {
    GivenName: "Brayden",
    Surname: "Dwyer"
}, {
    GivenName: "Harley",
    Surname: "Cox"
}, {
    GivenName: "สุนัชชา",
    Surname: "สุภาพ"
}, {
    GivenName: "Carly",
    Surname: "Johnstone"
}, {
    GivenName: "Luan",
    Surname: "Rodrigues"
}, {
    GivenName: "Dobrivoj",
    Surname: "Grubešić"
}, {
    GivenName: "Nwanyibuife",
    Surname: "Iheatu"
}, {
    GivenName: "Liv",
    Surname: "Haugen"
}, {
    GivenName: "کامران",
    Surname: "ذوالفعلی"
}, {
    GivenName: "Patryk",
    Surname: "Ross"
}, {
    GivenName: "Diðrik",
    Surname: "Valdimarsson"
}, {
    GivenName: "สุศิริกาญญา",
    Surname: "ดีพรม"
}, {
    GivenName: "Lei",
    Surname: "Kang"
}, {
    GivenName: "Shidochiri",
    Surname: ""
}, {
    GivenName: "拓也",
    Surname: "宮瀬"
}, {
    GivenName: "Bernardo",
    Surname: "Napolitano"
}, {
    GivenName: "Lien",
    Surname: "Ting"
}, {
    GivenName: "Isaac",
    Surname: "Marcheterre"
}, {
    GivenName: "Olivia",
    Surname: "Frederiksen"
}, {
    GivenName: "陸",
    Surname: "一之瀬"
}, {
    GivenName: "Julius",
    Surname: "Klausen"
}, {
    GivenName: "Faizan",
    Surname: "Kelly"
}, {
    GivenName: "Mahoma",
    Surname: "Gastelum"
}, {
    GivenName: "สุธัญพิชชา",
    Surname: "เดิมศรีภูมิ ณ สกลนคร"
}, {
    GivenName: "Feng",
    Surname: "Hsu"
}, {
    GivenName: "Ágatha",
    Surname: "Souza"
}, {
    GivenName: "Hudhaifah",
    Surname: "Safar"
}, {
    GivenName: "อัศธศิษฐิ์",
    Surname: "กิจเอื้อวิริยะ"
}, {
    GivenName: "Tânia",
    Surname: "Dias"
}, {
    GivenName: "恵美",
    Surname: "石鍋"
}, {
    GivenName: "Marisa",
    Surname: "Khadzhiev"
}, {
    GivenName: "Ronja",
    Surname: "Tveter"
}, {
    GivenName: "Yun",
    Surname: "Hung"
}, {
    GivenName: "Shifumi",
    Surname: "Arakawa"
}, {
    GivenName: "Sheshy",
    Surname: "Goytiom"
}, {
    GivenName: "Károly",
    Surname: "Borbás"
}, {
    GivenName: "直子",
    Surname: "仁部"
}, {
    GivenName: "Julia",
    Surname: "Zaytseva"
}, {
    GivenName: "Zobor",
    Surname: "Bence"
}, {
    GivenName: "Gerth",
    Surname: "Kleist"
}, {
    GivenName: "Silvia",
    Surname: "Þórólfsdóttir"
}, {
    GivenName: "Szervác",
    Surname: "Smitt"
}, {
    GivenName: "Sawa",
    Surname: "Volkov"
}, {
    GivenName: "Jan",
    Surname: "Rosing"
}, {
    GivenName: "Nkemdirim",
    Surname: "Ejikemeifeuwa"
}, {
    GivenName: "Meth",
    Surname: "Klasq"
}, {
    GivenName: "Hiền",
    Surname: "Bùi"
}, {
    GivenName: "Júlio",
    Surname: "Oliveira"
}, {
    GivenName: "陽子",
    Surname: "大地"
}, {
    GivenName: "Holly",
    Surname: "Wood"
}, {
    GivenName: "Beatrice",
    Surname: "Araujo"
}, {
    GivenName: "Rabi ah",
    Surname: "Aswad"
}, {
    GivenName: "Teresio",
    Surname: "Calabresi"
}, {
    GivenName: "Ane",
    Surname: "Enoksen"
}, {
    GivenName: "Guang",
    Surname: "Kang"
}, {
    GivenName: "昭安",
    Surname: "徐"
}, {
    GivenName: "Anunciación",
    Surname: "Tirado"
}, {
    GivenName: "Tian",
    Surname: "Jeleč"
}, {
    GivenName: "Zossima",
    Surname: "Butusov"
}, {
    GivenName: "Zoyrbek",
    Surname: "Desheriyev"
}, {
    GivenName: "Alfrida",
    Surname: "Mugwort"
}, {
    GivenName: "Naflah",
    Surname: "Tannous"
}, {
    GivenName: "Itsuko",
    Surname: "Oike"
}, {
    GivenName: "Cornelia",
    Surname: "Sætra"
}, {
    GivenName: "Shinki",
    Surname: "Sanya"
}, {
    GivenName: "Urunna",
    Surname: "Onyekaozulu"
}, {
    GivenName: "Аким",
    Surname: "Авдеев"
}, {
    GivenName: "Leona",
    Surname: "Gustafsson"
}, {
    GivenName: "Rosa",
    Surname: "Jeremiassen"
}, {
    GivenName: "Tel peh",
    Surname: "Mogodush"
}, {
    GivenName: "Kai",
    Surname: "Melo"
}, {
    GivenName: "Frediana",
    Surname: "Sal"
}, {
    GivenName: "Thùy",
    Surname: "Vương"
}, {
    GivenName: "Targho",
    Surname: "Zulor"
}, {
    GivenName: "Temoshikiari",
    Surname: ""
}, {
    GivenName: "Hana",
    Surname: "Musilová"
}, {
    GivenName: "Takara",
    Surname: "Asada"
}, {
    GivenName: "Tharwah",
    Surname: "Antar"
}, {
    GivenName: "Atsuko",
    Surname: "Oouchi"
}, {
    GivenName: "Ella",
    Surname: "Eade"
}, {
    GivenName: "Ruby",
    Surname: "Cameron"
}, {
    GivenName: "Viktor",
    Surname: "Blom"
}, {
    GivenName: "Robert",
    Surname: "Shiner"
}, {
    GivenName: "盈均",
    Surname: "袁"
}, {
    GivenName: "Sanelma",
    Surname: "Perälä"
}, {
    GivenName: "Nancy",
    Surname: "Sample"
}, {
    GivenName: "Hadi",
    Surname: "Petersson"
}, {
    GivenName: "David",
    Surname: "Hobson"
}, {
    GivenName: "Rodrigo",
    Surname: "Almeida"
}, {
    GivenName: "Ancilla",
    Surname: "Verhoek"
}, {
    GivenName: "W Lika",
    Surname: "Rejac"
}, {
    GivenName: "Dora",
    Surname: "Bilić"
}, {
    GivenName: "Borys",
    Surname: "Jasiński"
}, {
    GivenName: "Judyta",
    Surname: "Pawłowska"
}, {
    GivenName: "Anna",
    Surname: "Martins"
}, {
    GivenName: "Batir",
    Surname: "Gairbekov"
}, {
    GivenName: "Ulrike",
    Surname: "Koehler"
}, {
    GivenName: "Jarno",
    Surname: "Niinimaa"
}, {
    GivenName: "Mikael",
    Surname: "Lundblad"
}, {
    GivenName: "Elisa",
    Surname: "Dragičević"
}, {
    GivenName: "Yeter",
    Surname: "Blik"
}, {
    GivenName: "Sara",
    Surname: "Ziegler"
}, {
    GivenName: "Dženan",
    Surname: "Kržovski"
}, {
    GivenName: "Chirimorinkaari",
    Surname: ""
}, {
    GivenName: "Ifeyinwa",
    Surname: "Onyemauchechi"
}, {
    GivenName: "Kauko",
    Surname: "Jokela"
}, {
    GivenName: "Tereza",
    Surname: "Kolar"
}, {
    GivenName: "Zukarinkiku",
    Surname: ""
}, {
    GivenName: "Valentina",
    Surname: "Třísková"
}, {
    GivenName: "Jasmine",
    Surname: "Ožanič"
}, {
    GivenName: "Vojo",
    Surname: "Poharc"
}, {
    GivenName: "Tanta",
    Surname: "Boffin"
}, {
    GivenName: "Minto",
    Surname: "Lothran"
}, {
    GivenName: "Mandel",
    Surname: "Sicard"
}, {
    GivenName: "ดารินทร์",
    Surname: "รากพุดซา"
}, {
    GivenName: "Cherique",
    Surname: "Overweg"
}, {
    GivenName: "Tawbah",
    Surname: "Shalhoub"
}, {
    GivenName: "Jesse",
    Surname: "Wisdom"
}, {
    GivenName: "Aleksandrija",
    Surname: "Blagovič"
}, {
    GivenName: "Emile",
    Surname: "Henriksen"
}, {
    GivenName: "Petrine",
    Surname: "Lundblad"
}, {
    GivenName: "Venerando",
    Surname: "Lucciano"
}, {
    GivenName: "Cui",
    Surname: "T ao"
}, {
    GivenName: "Yasin",
    Surname: "Ottersen"
}, {
    GivenName: "Roby",
    Surname: "Goudriaan"
}, {
    GivenName: "Jaroslav",
    Surname: "Kadlec"
}, {
    GivenName: "ตันหยง",
    Surname: "คำโฮง"
}, {
    GivenName: "Loke",
    Surname: "Lindberg"
}, {
    GivenName: "Linneo",
    Surname: "Munguia"
}, {
    GivenName: "Andrea",
    Surname: "Unger"
}, {
    GivenName: "Francis",
    Surname: "Gardner"
}, {
    GivenName: "Megan",
    Surname: "Nagle"
}, {
    GivenName: "Dominique",
    Surname: "Gerrits"
}, {
    GivenName: "Erin",
    Surname: "Ifould"
}, {
    GivenName: "กีติ",
    Surname: "กวักแก้ว"
}, {
    GivenName: "Amelie",
    Surname: "Strömberg"
}, {
    GivenName: "Pázmán",
    Surname: "Benczik"
}, {
    GivenName: "ทวีเกียรติ",
    Surname: "สนามทอง"
}, {
    GivenName: "Elisa",
    Surname: "Ali"
}, {
    GivenName: "Isa",
    Surname: "Kishiev"
}, {
    GivenName: "Shen",
    Surname: "Hsiao"
}, {
    GivenName: "Nathanel",
    Surname: "Jaimes"
}, {
    GivenName: "Afifah",
    Surname: "Cham"
}, {
    GivenName: "Rachael",
    Surname: "Cameron"
}, {
    GivenName: "Kifle",
    Surname: "Sebhat"
}, {
    GivenName: "Malene",
    Surname: "Dahl"
}, {
    GivenName: "คมณรงค์",
    Surname: "บัวบางกรูด"
}, {
    GivenName: "Anila",
    Surname: "Milijić"
}, {
    GivenName: "Tyler",
    Surname: "Dodd"
}, {
    GivenName: "Chiemenam",
    Surname: "Chiazagomekpele"
}, {
    GivenName: "Lịch",
    Surname: "Đinh"
}, {
    GivenName: "Cara",
    Surname: "Button"
}, {
    GivenName: "آویژه",
    Surname: "بهمنش"
}, {
    GivenName: "Thi",
    Surname: "Phùng"
}, {
    GivenName: "Bartlett",
    Surname: "LaCaille"
}, {
    GivenName: "Bent",
    Surname: "Bertelsen"
}, {
    GivenName: "Yui",
    Surname: "Watanabe"
}, {
    GivenName: "Simret",
    Surname: "Medhane"
}, {
    GivenName: "Kristinn",
    Surname: "Harðarson"
}, {
    GivenName: "Anděla",
    Surname: "Krotilová"
}, {
    GivenName: "Leonie",
    Surname: "van de Griendt"
}, {
    GivenName: "Megan",
    Surname: "Forbes"
}, {
    GivenName: "Mikkel",
    Surname: "Mathiasen"
}, {
    GivenName: "Slovenko",
    Surname: "Jakoš"
}, {
    GivenName: "Michèle",
    Surname: "Lalonde"
}, {
    GivenName: "Nnenna",
    Surname: "Anenechi"
}, {
    GivenName: "Gabriela",
    Surname: "Michalska"
}, {
    GivenName: "Ka Ra",
    Surname: "Kamril"
}, {
    GivenName: "Zayndi",
    Surname: "Vizirov"
}, {
    GivenName: "由美",
    Surname: "酒谷"
}, {
    GivenName: "Amber",
    Surname: "Gonzalez"
}, {
    GivenName: "Ryder",
    Surname: "Cronin"
}, {
    GivenName: "Lanh",
    Surname: "Ngô"
}, {
    GivenName: "پرشان",
    Surname: "رازی"
}, {
    GivenName: "Sieuwerd",
    Surname: "Kruidhof"
}, {
    GivenName: "Selina",
    Surname: "Nyberg"
}, {
    GivenName: "Asphodel",
    Surname: "Puddifoot"
}, {
    GivenName: "Stefan",
    Surname: "Hovland"
}, {
    GivenName: "Jai",
    Surname: "Massina"
}, {
    GivenName: "Kamato",
    Surname: "Araxa"
}, {
    GivenName: "Vadim",
    Surname: "Tokaryev"
}, {
    GivenName: "František",
    Surname: "Zahradník"
}, {
    GivenName: "中薇",
    Surname: "郝"
}, {
    GivenName: "Matija",
    Surname: "Topić"
}, {
    GivenName: "Sverrir",
    Surname: "Fróðason"
}, {
    GivenName: "Haile",
    Surname: "Idris"
}, {
    GivenName: "Bradley",
    Surname: "Allan"
}, {
    GivenName: "Adalfredo",
    Surname: "Rossi"
}, {
    GivenName: "สุนัฐนิภา",
    Surname: "เอติรัตน์"
}, {
    GivenName: "Scarlet",
    Surname: "McDonald"
}, {
    GivenName: "匠",
    Surname: "藤城"
}, {
    GivenName: "Ask",
    Surname: "Larsen"
}, {
    GivenName: "Alda",
    Surname: "Moretti"
}, {
    GivenName: "Udokamma",
    Surname: "Obialo"
}, {
    GivenName: "Glen",
    Surname: "Smith"
}, {
    GivenName: "Anthonie",
    Surname: "Sneep"
}, {
    GivenName: "Nhuận",
    Surname: "Nguyễn"
}, {
    GivenName: "Hội",
    Surname: "Hoàng"
}, {
    GivenName: "Regan",
    Surname: "Bell"
}, {
    GivenName: "太陽",
    Surname: "藤垣"
}, {
    GivenName: "Sylvía",
    Surname: "Grímsdóttir"
}, {
    GivenName: "Yuan",
    Surname: "Chen"
}, {
    GivenName: "Henedina",
    Surname: "Santana"
}, {
    GivenName: "Farihah",
    Surname: "Masih"
}, {
    GivenName: "Klara",
    Surname: "Mahamed"
}, {
    GivenName: "Rachel",
    Surname: "McMeckan"
}, {
    GivenName: "Markus",
    Surname: "Lindal"
}, {
    GivenName: "Klemens",
    Surname: "Wieczorek"
}, {
    GivenName: "Merlina",
    Surname: "Barajas"
}, {
    GivenName: "Tearlach",
    Surname: "D Aoust"
}, {
    GivenName: "Cora",
    Surname: "Yermolayeva"
}, {
    GivenName: "Tatsurou",
    Surname: "Numata"
}, {
    GivenName: "Alena",
    Surname: "Tvrzová"
}, {
    GivenName: "Sascha",
    Surname: "Sikora"
}, {
    GivenName: "Agnieszka",
    Surname: "Nowak"
}, {
    GivenName: "To Ka",
    Surname: "Bolloch"
}, {
    GivenName: "Dennis",
    Surname: "Olesen"
}, {
    GivenName: "K trok",
    Surname: "Kellein"
}, {
    GivenName: "Julia",
    Surname: "Forssell"
}, {
    GivenName: "Ekwueme",
    Surname: "Nwokike"
}, {
    GivenName: "Isabella",
    Surname: "O Neill"
}, {
    GivenName: "Nkiruka",
    Surname: "Chukwuhaenye"
}, {
    GivenName: "Shu Fang",
    Surname: "Lo"
}, {
    GivenName: "Jay",
    Surname: "Owen"
}, {
    GivenName: "Niklas",
    Surname: "Leminen"
}, {
    GivenName: "Edina",
    Surname: "Herczeg"
}, {
    GivenName: "雅芳",
    Surname: "史"
}, {
    GivenName: "Eldar",
    Surname: "Alekseyeva"
}, {
    GivenName: "Nikolaj",
    Surname: "Simonsen"
}, {
    GivenName: "Hiroto",
    Surname: "Arakaki"
}, {
    GivenName: "Cameron",
    Surname: "Moreno"
}, {
    GivenName: "Hoài",
    Surname: "Mai"
}, {
    GivenName: "Honore",
    Surname: "Monrency"
}, {
    GivenName: "Božidar",
    Surname: "Matković"
}, {
    GivenName: "Iselin",
    Surname: "Lund"
}, {
    GivenName: "ขวัญเพชร",
    Surname: "เกิดลาภ"
}, {
    GivenName: "Rosa",
    Surname: "Puddifoot"
}, {
    GivenName: "Zarina",
    Surname: "Konovalova"
}, {
    GivenName: "Afamefuna",
    Surname: "Chialuka"
}, {
    GivenName: "彥廷",
    Surname: "方"
}, {
    GivenName: "Malik",
    Surname: "Jørgensen"
}, {
    GivenName: "Christina",
    Surname: "Kjær"
}, {
    GivenName: "Sabiha",
    Surname: "Nijholt"
}, {
    GivenName: "Kai",
    Surname: "Pereira"
}, {
    GivenName: "Dorota",
    Surname: "Kucharska"
}, {
    GivenName: "Eufemio",
    Surname: "Botello"
}, {
    GivenName: "Karita",
    Surname: "Hautaniemi"
}, {
    GivenName: "Faith",
    Surname: "Abakumova"
}, {
    GivenName: "Chimotofuka",
    Surname: ""
}, {
    GivenName: "Chúc",
    Surname: "Vũ"
}, {
    GivenName: "Ali",
    Surname: "Ganim"
}, {
    GivenName: "Rosa",
    Surname: "Sjöberg"
}, {
    GivenName: "Evelyn",
    Surname: "Artyomova"
}, {
    GivenName: "Ping",
    Surname: "Yen"
}, {
    GivenName: "Christine",
    Surname: "Dresdner"
}, {
    GivenName: "Romance",
    Surname: "Loera"
}, {
    GivenName: "Klaudia",
    Surname: "Mahler"
}, {
    GivenName: "Stefan",
    Surname: "Meister"
}, {
    GivenName: "Michael",
    Surname: "Jager"
}, {
    GivenName: "Miia",
    Surname: "Warelius"
}, {
    GivenName: "Amadeusz",
    Surname: "Piotrowski"
}, {
    GivenName: "Marcel",
    Surname: "Zelinka"
}, {
    GivenName: "Patony",
    Surname: "Bencik"
}, {
    GivenName: "Amechi",
    Surname: "Dike"
}, {
    GivenName: "Denis",
    Surname: "Jakšić"
}, {
    GivenName: "Hamdija",
    Surname: "Kamili"
}, {
    GivenName: "Jun",
    Surname: "Hou"
}, {
    GivenName: "Patrick",
    Surname: "May"
}, {
    GivenName: "آرش",
    Surname: "قزوینی"
}, {
    GivenName: "Claudia",
    Surname: "Lemann"
}, {
    GivenName: "Quy",
    Surname: "Trương"
}, {
    GivenName: "สุปดิวรัดดา",
    Surname: "อยู่เนาวรัตน์"
}, {
    GivenName: "Kieran",
    Surname: "Sanderson"
}, {
    GivenName: "Eugenie",
    Surname: "Serné"
}, {
    GivenName: "Emy",
    Surname: "Lindström"
}, {
    GivenName: "Eglantine",
    Surname: "Took"
}, {
    GivenName: "螢",
    Surname: "豊留"
}, {
    GivenName: "Leifur",
    Surname: "Benediktsson"
}, {
    GivenName: "Jan",
    Surname: "Oster"
}, {
    GivenName: "Alice",
    Surname: "Michaud"
}, {
    GivenName: "L Aren",
    Surname: "Lackoi"
}, {
    GivenName: "Jukka",
    Surname: "Nikkola"
}, {
    GivenName: "Rebecca",
    Surname: "Domínguez"
}, {
    GivenName: "Egill",
    Surname: "Arnkelsson"
}, {
    GivenName: "Guo",
    Surname: "Chen"
}, {
    GivenName: "Leon",
    Surname: "Horvat"
}, {
    GivenName: "Hamza",
    Surname: "Moore"
}, {
    GivenName: "Wen",
    Surname: "Hung"
}, {
    GivenName: "Bruna",
    Surname: "Cardoso"
}, {
    GivenName: "Belonwu",
    Surname: "Chiebuka"
}, {
    GivenName: "Eva",
    Surname: "Horáková"
}, {
    GivenName: "Ágúst",
    Surname: "Róbertsson"
}, {
    GivenName: "Tokatomifu",
    Surname: ""
}, {
    GivenName: "J Grala",
    Surname: "Regoric"
}, {
    GivenName: "Bekbulat",
    Surname: "Ibragimov"
}, {
    GivenName: "Bruno",
    Surname: "Folliero"
}, {
    GivenName: "Sebastian",
    Surname: "Stephens"
}, {
    GivenName: "Maddison",
    Surname: "Feetham"
}, {
    GivenName: "Sveinbjörn",
    Surname: "Sumarliðason"
}, {
    GivenName: "Joe",
    Surname: "Parsons"
}, {
    GivenName: "Ariosto",
    Surname: "Fiorentini"
}, {
    GivenName: "Michael",
    Surname: "Lange"
}, {
    GivenName: "Carola",
    Surname: "Katajisto"
}, {
    GivenName: "Ruman",
    Surname: "Kadyrov"
}, {
    GivenName: "Rolla",
    Surname: "Sørensen"
}, {
    GivenName: "فرشته",
    Surname: "ساوجی"
}, {
    GivenName: "Natsuhisa",
    Surname: "Yamashita"
}, {
    GivenName: "Rościsław",
    Surname: "Kucharski"
}, {
    GivenName: "Mbanefo",
    Surname: "Onwuemelie"
}, {
    GivenName: "Tuyet",
    Surname: "Bieshaar"
}, {
    GivenName: "Thiemo",
    Surname: "Schippers"
}, {
    GivenName: "Pauline",
    Surname: "Josefsen"
}, {
    GivenName: "Mitrofan",
    Surname: "Lavrentiev"
}, {
    GivenName: "Ea",
    Surname: "Madsen"
}, {
    GivenName: "Alžběta",
    Surname: "Tvrzníková"
}, {
    GivenName: "Марианна",
    Surname: "Дегтярёва"
}, {
    GivenName: "بهناز",
    Surname: "سمیع نژاد"
}, {
    GivenName: "Kosisochukwu",
    Surname: "Uwakwe"
}, {
    GivenName: "Sara",
    Surname: "Björnsdóttir"
}, {
    GivenName: "Generosa",
    Surname: "Gallo"
}, {
    GivenName: "میشا",
    Surname: "طاهرنژاد"
}, {
    GivenName: "Darcie",
    Surname: "Murray"
}, {
    GivenName: "Paweł",
    Surname: "Kowalczyk"
}, {
    GivenName: "สุนัญชลิฎา",
    Surname: "พิมิตร"
}, {
    GivenName: "Севастьян",
    Surname: "Беляков"
}, {
    GivenName: "Anselma",
    Surname: "Armijo"
}, {
    GivenName: "Bo",
    Surname: "Yen"
}, {
    GivenName: "雅恩",
    Surname: "林"
}, {
    GivenName: "คนองฤทธิ์",
    Surname: "ยิม"
}, {
    GivenName: "Shahab",
    Surname: "Bazhaev"
}, {
    GivenName: "育德",
    Surname: "汪"
}, {
    GivenName: "Logistilla",
    Surname: "Clavette"
}, {
    GivenName: "Bildat",
    Surname: "Goodchild"
}, {
    GivenName: "Laila",
    Surname: "Groop"
}, {
    GivenName: "Garry",
    Surname: "de Kuiper"
}, {
    GivenName: "家銘",
    Surname: "劉"
}, {
    GivenName: "実",
    Surname: "早船"
}, {
    GivenName: "Isabela",
    Surname: "Prus"
}, {
    GivenName: "Nick",
    Surname: "Oldbuck"
}, {
    GivenName: "Jan",
    Surname: "Biermann"
}, {
    GivenName: "Kosisochukwu",
    Surname: "Chikelu"
}, {
    GivenName: "Frej",
    Surname: "Berglund"
}, {
    GivenName: "Christine",
    Surname: "Hahn"
}, {
    GivenName: "Antonín",
    Surname: "Mikš"
}, {
    GivenName: "Charlot",
    Surname: "Lamare"
}, {
    GivenName: "Tomáš",
    Surname: "Němec"
}, {
    GivenName: "Nooh",
    Surname: "Naser"
}, {
    GivenName: "Kutaarikiku",
    Surname: ""
}, {
    GivenName: "Camilla",
    Surname: "Agapova"
}, {
    GivenName: "Fanni",
    Surname: "Sallay"
}, {
    GivenName: "Lloyd",
    Surname: "Walstra"
}, {
    GivenName: "Basia",
    Surname: "Jasińska"
}, {
    GivenName: "愛子",
    Surname: "鳴島"
}, {
    GivenName: "Eiður",
    Surname: "Gissurarson"
}, {
    GivenName: "Eva",
    Surname: "Šmídová"
}, {
    GivenName: "Chiazagomekpele",
    Surname: "Onyemaechi"
}, {
    GivenName: "Kristine",
    Surname: "Toft"
}, {
    GivenName: "Dodinas",
    Surname: "Hornblower"
}, {
    GivenName: "Suzanne",
    Surname: "McGee"
}, {
    GivenName: "Awa",
    Surname: "van Druten"
}, {
    GivenName: "Maslin",
    Surname: "Riquier"
}, {
    GivenName: "Gabrysia",
    Surname: "Zawadzka"
}, {
    GivenName: "Gayr",
    Surname: "Eldarkhanov"
}, {
    GivenName: "آرمینا",
    Surname: "خویینی"
}, {
    GivenName: "Dahlia",
    Surname: "Murillo"
}, {
    GivenName: "Evelina",
    Surname: "Leiva"
}, {
    GivenName: "Poul",
    Surname: "Berthelsen"
}, {
    GivenName: "Rudi",
    Surname: "McDonald"
}, {
    GivenName: "Petimat",
    Surname: "Batukayev"
}, {
    GivenName: "Wang",
    Surname: "Fu"
}, {
    GivenName: "Lenka",
    Surname: "Hlaváčová"
}, {
    GivenName: "Michelle",
    Surname: "Gathers"
}, {
    GivenName: "Octave",
    Surname: "Thibodeau"
}, {
    GivenName: "Léanne",
    Surname: "Roordink"
}, {
    GivenName: "Anders",
    Surname: "Løvstrøm"
}, {
    GivenName: "Khava",
    Surname: "Panova"
}, {
    GivenName: "Merlín",
    Surname: "Pedroza"
}, {
    GivenName: "Ekwutosi",
    Surname: "Okoli"
}, {
    GivenName: "Đào",
    Surname: "Tạ"
}, {
    GivenName: "Jørgen",
    Surname: "Jakobsen"
}, {
    GivenName: "Oskar",
    Surname: "Henriksen"
}, {
    GivenName: "Tibor",
    Surname: "Gáll"
}, {
    GivenName: "Tosh",
    Surname: "Holst"
}, {
    GivenName: "Suzie",
    Surname: "Verduijn"
}, {
    GivenName: "Fumiyo",
    Surname: "Inoue"
}, {
    GivenName: "Scott",
    Surname: "Howard"
}, {
    GivenName: "Kazimir",
    Surname: "Stipanov"
}, {
    GivenName: "Rân",
    Surname: "Thủy"
}, {
    GivenName: "Marisa",
    Surname: "Dias"
}, {
    GivenName: "Susanne",
    Surname: "Christensen"
}, {
    GivenName: "Joao",
    Surname: "Lima"
}, {
    GivenName: "Roza",
    Surname: "Godina"
}, {
    GivenName: "Patony",
    Surname: "Smitt"
}, {
    GivenName: "Isengar",
    Surname: "Lightfoot"
}, {
    GivenName: "خسرو",
    Surname: "تقوی"
}, {
    GivenName: "Summer",
    Surname: "Fryer"
}, {
    GivenName: "Hanna",
    Surname: "Zálešáková"
}, {
    GivenName: "Jaroslav",
    Surname: "Bittner"
}, {
    GivenName: "Dušan",
    Surname: "Smíšek"
}, {
    GivenName: "Elias",
    Surname: "Kildahl"
}, {
    GivenName: "Bronislav",
    Surname: "Němec"
}, {
    GivenName: "Claudia",
    Surname: "Ilyina"
}, {
    GivenName: "Manchu",
    Surname: "Ch ang"
}, {
    GivenName: "Joško",
    Surname: "Novak"
}, {
    GivenName: "孝慈",
    Surname: "金"
}, {
    GivenName: "Michael",
    Surname: "Kovalev"
}, {
    GivenName: "Felix",
    Surname: "Sinclair"
}, {
    GivenName: "Sajidah",
    Surname: "Abboud"
}, {
    GivenName: "Alicia",
    Surname: "Rivett"
}, {
    GivenName: "Anna",
    Surname: "Heilmann"
}, {
    GivenName: "Gabriel",
    Surname: "Hickson"
}, {
    GivenName: "Tómas",
    Surname: "Arnoldsson"
}, {
    GivenName: "فرحناز",
    Surname: "پرویزی"
}, {
    GivenName: "智子",
    Surname: "今村"
}, {
    GivenName: "Edgar",
    Surname: "Johnson"
}, {
    GivenName: "Heribald",
    Surname: "Goldworthy"
}, {
    GivenName: "Rinkutakiariarika",
    Surname: ""
}, {
    GivenName: "Summer",
    Surname: "Faulkner"
}, {
    GivenName: "Neiber",
    Surname: "Rodarte"
}, {
    GivenName: "Gergely",
    Surname: "Szôllösi"
}, {
    GivenName: "Obiuto",
    Surname: "Kamdibe"
}, {
    GivenName: "Linah",
    Surname: "Moghadam"
}, {
    GivenName: "正博",
    Surname: "花村"
}, {
    GivenName: "W Mara",
    Surname: "Seeth"
}, {
    GivenName: "Nicodemus",
    Surname: "Bazarov"
}, {
    GivenName: "Virginia",
    Surname: "Rousey"
}, {
    GivenName: "Safa",
    Surname: "Tuma"
}, {
    GivenName: "Ludvig",
    Surname: "Christensen"
}, {
    GivenName: "Jana",
    Surname: "Borovská"
}, {
    GivenName: "Mubin",
    Surname: "Kouri"
}, {
    GivenName: "Harvey",
    Surname: "Marshall"
}, {
    GivenName: "Andrea",
    Surname: "Novak"
}, {
    GivenName: "Madihah",
    Surname: "Hagos"
}, {
    GivenName: "Lucas",
    Surname: "Fassbinder"
}, {
    GivenName: "Saul",
    Surname: "Ruijters"
}, {
    GivenName: "Taj",
    Surname: "Nassar"
}, {
    GivenName: "Axel",
    Surname: "Þórisson"
}, {
    GivenName: "Michael",
    Surname: "Mathiassen"
}, {
    GivenName: "Sherip",
    Surname: "Sultanovich"
}, {
    GivenName: "Eliezer",
    Surname: "Montalvo"
}, {
    GivenName: "مهشاد",
    Surname: "خدابنده لو"
}, {
    GivenName: "Bernard",
    Surname: "Poulin"
}, {
    GivenName: "豪霈",
    Surname: "雷"
}, {
    GivenName: "Truyền",
    Surname: "Ngô"
}, {
    GivenName: "Ellen",
    Surname: "Björk"
}, {
    GivenName: "J Rena",
    Surname: "Paswut"
}, {
    GivenName: "Nadia",
    Surname: "Toft"
}, {
    GivenName: "Hending",
    Surname: "Burrows"
}, {
    GivenName: "Antje",
    Surname: "Achen"
}, {
    GivenName: "Rinkashiaririka",
    Surname: ""
}, {
    GivenName: "Wiktor",
    Surname: "Piotrowski"
}, {
    GivenName: "Onodugoadiegbemma",
    Surname: "Egobudike"
}, {
    GivenName: "Ramzan",
    Surname: "Karataev"
}, {
    GivenName: "Bruna",
    Surname: "Castro"
}, {
    GivenName: "Jonah",
    Surname: "Sánchez"
}, {
    GivenName: "ทวพล",
    Surname: "เสมอพบ"
}, {
    GivenName: "Drago",
    Surname: "Bilić"
}, {
    GivenName: "淑芬",
    Surname: "呂"
}, {
    GivenName: "Frydrych",
    Surname: "Woźniak"
}, {
    GivenName: "Vitalii",
    Surname: "Válek"
}, {
    GivenName: "Kevin",
    Surname: "Berg"
}, {
    GivenName: "Gabriel",
    Surname: "Alves"
}, {
    GivenName: "美優",
    Surname: "五味淵"
}, {
    GivenName: "Želimir",
    Surname: "Mađar"
}, {
    GivenName: "Stanislav",
    Surname: "Pokora"
}, {
    GivenName: "Tristan",
    Surname: "Johnstone"
}, {
    GivenName: "Zarifa",
    Surname: "Mejovšek"
}, {
    GivenName: "Eva",
    Surname: "Finková"
}, {
    GivenName: "Helena",
    Surname: "Hrvat"
}, {
    GivenName: "Aleksander",
    Surname: "Salinas"
}, {
    GivenName: "Onyekachi",
    Surname: "Ogochukwu"
}, {
    GivenName: "Bronisława",
    Surname: "Kalinowska"
}, {
    GivenName: "Antonín",
    Surname: "Kovář"
}, {
    GivenName: "پیمانه",
    Surname: "بنفشه خواه"
}, {
    GivenName: "Park",
    Surname: "Hsüeh"
}, {
    GivenName: "Andrea",
    Surname: "Kovářová"
}, {
    GivenName: "Jiang Li",
    Surname: "Pan"
}, {
    GivenName: "Monika",
    Surname: "Bisselink"
}, {
    GivenName: "Kristian",
    Surname: "Beckenbauer"
}, {
    GivenName: "Mika-Matti",
    Surname: "Harila"
}, {
    GivenName: "Sago",
    Surname: "Brandagamba"
}, {
    GivenName: "Senka",
    Surname: "Antunović"
}, {
    GivenName: "Guylian",
    Surname: "Derkx"
}, {
    GivenName: "Rikke",
    Surname: "Christoffersen"
}, {
    GivenName: "Анфиса",
    Surname: "Жданова"
}, {
    GivenName: "Anenechi",
    Surname: "Akubundu"
}, {
    GivenName: "Yakha",
    Surname: "Panova"
}, {
    GivenName: "Okimi",
    Surname: "Aoki"
}, {
    GivenName: "Finn",
    Surname: "Nordnes"
}, {
    GivenName: "Samuel",
    Surname: "Ločičnik"
}, {
    GivenName: "Ayden",
    Surname: "Alexander"
}, {
    GivenName: "Eleanor",
    Surname: "Mills"
}, {
    GivenName: "Dirk",
    Surname: "Pfeiffer"
}, {
    GivenName: "Yuuichi",
    Surname: "Amano"
}, {
    GivenName: "Jens",
    Surname: "Andersen"
}, {
    GivenName: "Zane",
    Surname: "Watson"
}, {
    GivenName: "海斗",
    Surname: "窪園"
}, {
    GivenName: "Родион",
    Surname: "Пахло"
}, {
    GivenName: "Sebastian",
    Surname: "Goold"
}, {
    GivenName: "Anita",
    Surname: "Davide"
}, {
    GivenName: "Tseard",
    Surname: "van Ouwerkerk"
}, {
    GivenName: " Ubaidah",
    Surname: "Haik"
}, {
    GivenName: "Dugan",
    Surname: "Lemus"
}, {
    GivenName: "Rommy",
    Surname: "van der Zwaag"
}, {
    GivenName: "Jasna",
    Surname: "Jelić"
}, {
    GivenName: "Pandora",
    Surname: "Chubb"
}, {
    GivenName: "Moses",
    Surname: "Loginov"
}, {
    GivenName: "Matilda",
    Surname: "Baldwin"
}, {
    GivenName: "Suliman",
    Surname: "Chichigov"
}, {
    GivenName: "شهرداد",
    Surname: "رازی"
}, {
    GivenName: "Исаия",
    Surname: "Володин"
}, {
    GivenName: "Yue You",
    Surname: "Hou"
}, {
    GivenName: "Fealty",
    Surname: "Lamour"
}, {
    GivenName: "Shi",
    Surname: "Ko"
}, {
    GivenName: "Beniko",
    Surname: "Seki"
}, {
    GivenName: "Gidon",
    Surname: "Verburgt"
}, {
    GivenName: "Lennaert",
    Surname: "Zegveld"
}, {
    GivenName: "Ivan",
    Surname: "Eck"
}, {
    GivenName: "Freddie",
    Surname: "Hobbs"
}, {
    GivenName: "Lars",
    Surname: "Heilmann"
}, {
    GivenName: "Joso",
    Surname: "Stanić"
}, {
    GivenName: "Takase",
    Surname: "Sahaku"
}, {
    GivenName: "Ester",
    Surname: "Hrafnsdóttir"
}, {
    GivenName: "Tâm",
    Surname: "Trịnh"
}, {
    GivenName: "Aguri",
    Surname: "Niiya"
}, {
    GivenName: "Muflih",
    Surname: "Kassab"
}, {
    GivenName: "Laetitia",
    Surname: "Lachapelle"
}, {
    GivenName: "Bi",
    Surname: "Shen"
}, {
    GivenName: "Eta",
    Surname: "Hlebčar"
}, {
    GivenName: "Josef",
    Surname: "Chmelař"
}, {
    GivenName: "Olga",
    Surname: "Řehořová"
}, {
    GivenName: "Joao",
    Surname: "Rocha"
}, {
    GivenName: "Natsue",
    Surname: "Mizokuchi"
}, {
    GivenName: "Bastiana",
    Surname: "Wesselius"
}, {
    GivenName: "Valdemar",
    Surname: "Chubb-Baggins"
}, {
    GivenName: "晨書",
    Surname: "田"
}, {
    GivenName: "小百合",
    Surname: "城地"
}, {
    GivenName: "Ozioma",
    Surname: "Iloabuchi"
}, {
    GivenName: "Angelika",
    Surname: "Neustadt"
}, {
    GivenName: "Xiuxiu",
    Surname: "Chuang"
}, {
    GivenName: "Cecilie",
    Surname: "Egede"
}, {
    GivenName: "Niamh",
    Surname: "Walker"
}, {
    GivenName: "Evelyn",
    Surname: "Carvalho"
}, {
    GivenName: "Brooke",
    Surname: "Johnston"
}, {
    GivenName: "Gerontius",
    Surname: "Longhole"
}, {
    GivenName: "R Kana",
    Surname: "Mogh"
}, {
    GivenName: "Jiří",
    Surname: "Novotný"
}, {
    GivenName: "Faramond",
    Surname: "Gawkroger"
}, {
    GivenName: "Самира",
    Surname: "Матвеева"
}, {
    GivenName: "Ali",
    Surname: "Khadzhiev"
}, {
    GivenName: "Abdulmezhid",
    Surname: "Gairbekov"
}, {
    GivenName: "Simon",
    Surname: "Osman"
}, {
    GivenName: "Kemal",
    Surname: "Campos"
}, {
    GivenName: "Tobias",
    Surname: "Daecher"
}, {
    GivenName: "Rushdi",
    Surname: "Masih"
}, {
    GivenName: "Евдоким",
    Surname: "Артемьев"
}, {
    GivenName: "Orzsebet",
    Surname: "Söröss"
}, {
    GivenName: "Tekatoka",
    Surname: ""
}, {
    GivenName: "Stephanie",
    Surname: "Drechsler"
}, {
    GivenName: "Hava",
    Surname: "van Ooijen"
}, {
    GivenName: "Mette",
    Surname: "Lundblad"
}, {
    GivenName: "Abdul-Sabur",
    Surname: "Sabbag"
}, {
    GivenName: "Rainero",
    Surname: "Carrasquill"
}, {
    GivenName: "Dagmara",
    Surname: "Arsanukayev"
}, {
    GivenName: "Oliwia",
    Surname: "Pawłowska"
}, {
    GivenName: "Asmara",
    Surname: "Omar"
}, {
    GivenName: "Amanda",
    Surname: "Hill"
}, {
    GivenName: "Matilda",
    Surname: "Brown"
}, {
    GivenName: "Iines",
    Surname: "Ruoho"
}, {
    GivenName: "Wan",
    Surname: "Hsueh"
}, {
    GivenName: "L Kola",
    Surname: "Rannic"
}, {
    GivenName: "Milvi",
    Surname: "Kellein"
}, {
    GivenName: "Daniel",
    Surname: "Bach"
}, {
    GivenName: "姿君",
    Surname: "馮"
}, {
    GivenName: "Faye",
    Surname: "Watt"
}, {
    GivenName: "Ümmügülsüm",
    Surname: "Hesp"
}, {
    GivenName: "Silas",
    Surname: "Kjær"
}, {
    GivenName: "Santo",
    Surname: "Lettiere"
}, {
    GivenName: "Grace",
    Surname: "Hyde"
}, {
    GivenName: "Gerontius",
    Surname: "Took-Took"
}, {
    GivenName: "Natsumi",
    Surname: "Takenaka"
}, {
    GivenName: "佳慧",
    Surname: "錢"
}, {
    GivenName: "Gojislav",
    Surname: "Matijević"
}, {
    GivenName: "Bella",
    Surname: "Fekete"
}, {
    GivenName: "Triều",
    Surname: "Phan"
}, {
    GivenName: "Toby",
    Surname: "Tûk"
}, {
    GivenName: "Kaitlyn",
    Surname: "Beale"
}, {
    GivenName: "Arvid",
    Surname: "Hakola"
}, {
    GivenName: "Piero",
    Surname: "Fanucci"
}, {
    GivenName: "Andrine",
    Surname: "Brekke"
}, {
    GivenName: "Espedito",
    Surname: "Lorenzo"
}, {
    GivenName: "Thiery",
    Surname: "Coudert"
}, {
    GivenName: "Gorbadoc",
    Surname: "Bracegirdle"
}, {
    GivenName: "Khả",
    Surname: "Triệu"
}, {
    GivenName: "Beksolta",
    Surname: "Kadiev"
}, {
    GivenName: "Ophelia",
    Surname: "Courtois"
}, {
    GivenName: "Dianne",
    Surname: "Colvin"
}, {
    GivenName: "Katharina",
    Surname: "Nimani"
}, {
    GivenName: "Shuang",
    Surname: "Hsiao"
}, {
    GivenName: "Antje",
    Surname: "Ebersbacher"
}, {
    GivenName: "Temodoji",
    Surname: ""
}, {
    GivenName: "سیاوش",
    Surname: "کاسه کار"
}, {
    GivenName: "จิตติศักดิ์",
    Surname: "เกิดโภคา"
}, {
    GivenName: "Bela",
    Surname: "Jónás"
}, {
    GivenName: "Lolita",
    Surname: "Aleksandrova"
}, {
    GivenName: "Jan",
    Surname: "Farber"
}, {
    GivenName: "瑋",
    Surname: "龍"
}, {
    GivenName: "Silas",
    Surname: "Nygaard"
}, {
    GivenName: "Abdulla",
    Surname: "Melikov"
}, {
    GivenName: "Milko",
    Surname: "Savenije"
}, {
    GivenName: "Amanda",
    Surname: "Oliveira"
}, {
    GivenName: "Chikao",
    Surname: "Imamura"
}, {
    GivenName: "Sigurósk",
    Surname: "Sigfúsdóttir"
}, {
    GivenName: "Alexander",
    Surname: "Carruthers"
}, {
    GivenName: "Werner",
    Surname: "Štromajer"
}, {
    GivenName: "Okoli",
    Surname: "Muomelu"
}, {
    GivenName: "Yến",
    Surname: "Phùng"
}, {
    GivenName: "Rory",
    Surname: "Annand"
}, {
    GivenName: "皐",
    Surname: "赤須"
}, {
    GivenName: "淑惠",
    Surname: "宋"
}, {
    GivenName: "Esam",
    Surname: "Essa"
}, {
    GivenName: "Charles",
    Surname: "Boyland"
}, {
    GivenName: "Lucas",
    Surname: "Dahl"
}, {
    GivenName: "Rikushizukushichi",
    Surname: ""
}, {
    GivenName: "Vanesa",
    Surname: "Abrahamsson"
}, {
    GivenName: "Grant",
    Surname: "Morrison"
}, {
    GivenName: "Mgbeke",
    Surname: "Onwuamaeze"
}, {
    GivenName: "Tuyến",
    Surname: "Bùi"
}, {
    GivenName: "Kia",
    Surname: "Saisio"
}, {
    GivenName: "Нестор",
    Surname: "Кузнецов"
}, {
    GivenName: "Hussein",
    Surname: "Touma"
}, {
    GivenName: "Dunja",
    Surname: "Martinović"
}, {
    GivenName: "Petra",
    Surname: "Øien"
}, {
    GivenName: "فرزام",
    Surname: "خانلو"
}, {
    GivenName: "Jonas",
    Surname: "Vold"
}, {
    GivenName: "Si",
    Surname: "Hartmans"
}, {
    GivenName: "Aldin",
    Surname: "Sundberg"
}, {
    GivenName: "Maja",
    Surname: "Hermansen"
}, {
    GivenName: "Chiekwugo",
    Surname: "Nwora"
}, {
    GivenName: "Kristinn",
    Surname: "Þorgeirsson"
}, {
    GivenName: "Eva",
    Surname: "Galkina"
}, {
    GivenName: "Милена",
    Surname: "Герасимова"
}, {
    GivenName: "Andrée",
    Surname: "Majory"
}, {
    GivenName: "Arikashika",
    Surname: ""
}, {
    GivenName: "Eldar",
    Surname: "Uspensky"
}, {
    GivenName: "Gloria",
    Surname: "Burgess"
}, {
    GivenName: "Ksenia",
    Surname: "Kowalczyk"
}, {
    GivenName: "بهاره",
    Surname: "صادقی"
}, {
    GivenName: "Marcus",
    Surname: "Stace"
}, {
    GivenName: "Charli",
    Surname: "Hose"
}, {
    GivenName: "Lixue",
    Surname: "Tien"
}, {
    GivenName: "Shaiming",
    Surname: "Ts ai"
}, {
    GivenName: "Piotr",
    Surname: "Jabłoński"
}, {
    GivenName: "Mislav",
    Surname: "Zagorec"
}, {
    GivenName: "Sevad",
    Surname: "Linhard"
}, {
    GivenName: "G Nara",
    Surname: "Pallara"
}, {
    GivenName: "Thoại",
    Surname: "Bùi"
}, {
    GivenName: "August",
    Surname: "Olsen"
}, {
    GivenName: "Aaron",
    Surname: "Olden"
}, {
    GivenName: "Magnus",
    Surname: "Winther"
}, {
    GivenName: "Shirvan",
    Surname: "Eldarkhanov"
}, {
    GivenName: "Avguština",
    Surname: "Mavrič"
}, {
    GivenName: "Chineze",
    Surname: "Ikemefuna"
}, {
    GivenName: "Milen",
    Surname: "Muhammed"
}, {
    GivenName: "Andreas",
    Surname: "Sørensen"
}, {
    GivenName: "清",
    Surname: "在原"
}, {
    GivenName: "Marcus",
    Surname: "Skjæveland"
}, {
    GivenName: "Alexis",
    Surname: "Gresham"
}, {
    GivenName: "Simret",
    Surname: "Alem"
}, {
    GivenName: "Ashwin",
    Surname: "Schets"
}, {
    GivenName: "Matilda",
    Surname: "Hartigan"
}, {
    GivenName: "逸華",
    Surname: "熊"
}, {
    GivenName: "Estevan",
    Surname: "Correia"
}, {
    GivenName: "Chirikutarinka",
    Surname: ""
}, {
    GivenName: "Nuka",
    Surname: "Rasmussen"
}, {
    GivenName: "Chibuzo",
    Surname: "Udokamma"
}, {
    GivenName: "G Gira",
    Surname: "Graf"
}, {
    GivenName: "Malkh",
    Surname: "Vizirov"
}, {
    GivenName: "Gerolamo",
    Surname: "Marchesi"
}, {
    GivenName: "Omar",
    Surname: "Shervashidze"
}, {
    GivenName: "Chijindum",
    Surname: "Nebechi"
}, {
    GivenName: "Henry",
    Surname: "Murphy"
}, {
    GivenName: "Lilly",
    Surname: "Rhodes"
}, {
    GivenName: "Yue You",
    Surname: "Ch iu"
}, {
    GivenName: "Diane",
    Surname: "Dumont"
}, {
    GivenName: "Bonnie",
    Surname: "Hobson"
}, {
    GivenName: "Mackenzie",
    Surname: "Hartung"
}, {
    GivenName: "Pantaleone",
    Surname: "Ferri"
}, {
    GivenName: "Love",
    Surname: "Kalinina"
}, {
    GivenName: "Li Ming",
    Surname: "Shen"
}, {
    GivenName: "Kogwar",
    Surname: "Torin"
}, {
    GivenName: "Yusra",
    Surname: "Larsen"
}, {
    GivenName: "Zosia",
    Surname: "Sobczak"
}, {
    GivenName: "Laura",
    Surname: "Cameron"
}, {
    GivenName: "Edmondo",
    Surname: "Longo"
}, {
    GivenName: "Romanela",
    Surname: "Magana"
}, {
    GivenName: "Julcsa",
    Surname: "Polak"
}, {
    GivenName: "Josefine",
    Surname: "Aasland"
}, {
    GivenName: "Klara Marija",
    Surname: "Vukoja"
}, {
    GivenName: "Zossima",
    Surname: "Lavrov"
}, {
    GivenName: "Ryan",
    Surname: "Musquito"
}, {
    GivenName: "Gousuke",
    Surname: "Katagiri"
}, {
    GivenName: "Antero",
    Surname: "Suorsa"
}, {
    GivenName: "Zorán",
    Surname: "Sinka"
}, {
    GivenName: "Lava",
    Surname: "Gustavsson"
}, {
    GivenName: "Trước",
    Surname: "Quynh"
}, {
    GivenName: "Tuva",
    Surname: "Sundberg"
}, {
    GivenName: "Živan",
    Surname: "Suklan"
}, {
    GivenName: "Bettina",
    Surname: "Kállai"
}, {
    GivenName: "Nicanor",
    Surname: "Vassiliev"
}, {
    GivenName: "Dean",
    Surname: "Harding"
}, {
    GivenName: "Jaroslav",
    Surname: "Abramoff"
}, {
    GivenName: "Arikatotefu",
    Surname: ""
}, {
    GivenName: "Samuel",
    Surname: "Amanuel"
}, {
    GivenName: "恆慈",
    Surname: "常"
}, {
    GivenName: "勝",
    Surname: "駒津"
}, {
    GivenName: "Niklas",
    Surname: "Holappa"
}, {
    GivenName: "Sulisław",
    Surname: "Pawłowski"
}, {
    GivenName: "Amanda",
    Surname: "Pettersen"
}, {
    GivenName: "Rinkashifukatoto",
    Surname: ""
}, {
    GivenName: "Namihiko",
    Surname: "Hatakenaka"
}, {
    GivenName: "جهاندار",
    Surname: "بهمنش"
}, {
    GivenName: "Zovra",
    Surname: "Khadzhiev"
}, {
    GivenName: "Song",
    Surname: "Kuo"
}, {
    GivenName: "Simon",
    Surname: "Henriksson"
}, {
    GivenName: "Ingþór",
    Surname: "Fróðason"
}, {
    GivenName: "Madison",
    Surname: "Weston"
}, {
    GivenName: "Chinh",
    Surname: "Chu"
}, {
    GivenName: "Nasa",
    Surname: "Khemara"
}, {
    GivenName: "Trijnie",
    Surname: "Kösters"
}, {
    GivenName: "Sophia",
    Surname: "Bates"
}, {
    GivenName: "Alain",
    Surname: "Bodrova"
}, {
    GivenName: "Bogumila",
    Surname: "Mihaljević"
}, {
    GivenName: "Marit",
    Surname: "Dahl"
}, {
    GivenName: "郁婷",
    Surname: "江"
}, {
    GivenName: "Nnonso",
    Surname: "Chiabuotu"
}, {
    GivenName: "Nwebube",
    Surname: "Chukwunonso"
}, {
    GivenName: "Sari",
    Surname: "Öhman"
}, {
    GivenName: "Jerry",
    Surname: "Isaksson"
}, {
    GivenName: "Cody",
    Surname: "Wijs"
}, {
    GivenName: "پیمانه",
    Surname: "میرهاشمی"
}, {
    GivenName: "จุรี้",
    Surname: "รามจันทร์"
}, {
    GivenName: "Zalina",
    Surname: "Godina"
}, {
    GivenName: "Oscar",
    Surname: "Rason"
}, {
    GivenName: "Jan",
    Surname: "Kuefer"
}, {
    GivenName: "Rikard",
    Surname: "Lendvay"
}, {
    GivenName: "Nwamaka",
    Surname: "Iloerika"
}, {
    GivenName: "Nivi",
    Surname: "Kristiansen"
}, {
    GivenName: "پارمیدا",
    Surname: "شادین"
}, {
    GivenName: "Jens",
    Surname: "Mortensen"
}, {
    GivenName: "Melas",
    Surname: "Cintrón"
}, {
    GivenName: "Anisa",
    Surname: "Bocharova"
}, {
    GivenName: "Эльвира",
    Surname: "Лаврентьева"
}, {
    GivenName: "Temodoji",
    Surname: ""
}, {
    GivenName: "Tomoka",
    Surname: "Hosokawa"
}, {
    GivenName: "Samuel",
    Surname: "Geelen"
}, {
    GivenName: "Nidija",
    Surname: "Čobal"
}, {
    GivenName: "Laura",
    Surname: "Beike"
}, {
    GivenName: "Emile",
    Surname: "Brandt"
}, {
    GivenName: "กิตติพัทธ์",
    Surname: "บัวหนอง"
}, {
    GivenName: "Brynhildur",
    Surname: "Sigmarsdóttir"
}, {
    GivenName: "Klementyna",
    Surname: "Zawadzka"
}, {
    GivenName: "Alberta",
    Surname: "Salai"
}, {
    GivenName: "書媺",
    Surname: "江"
}, {
    GivenName: "Zikoranaudodimma",
    Surname: "Ijendu"
}, {
    GivenName: "Анастасия",
    Surname: "Гаврилова"
}, {
    GivenName: "Chifo",
    Surname: "Omeokachie"
}, {
    GivenName: "Arthur",
    Surname: "Sousa"
}, {
    GivenName: "Кора",
    Surname: "Александрова"
}, {
    GivenName: "美羽",
    Surname: "北沢"
}, {
    GivenName: "مهر انگیز",
    Surname: "خالدی"
}, {
    GivenName: "Melanie",
    Surname: "Maclean"
}, {
    GivenName: "Martinus",
    Surname: "Tuin"
}, {
    GivenName: "Anna",
    Surname: "Válková"
}, {
    GivenName: "Maarit",
    Surname: "Mäntylä"
}, {
    GivenName: "Ilyas",
    Surname: "Gundersen"
}, {
    GivenName: "Linda",
    Surname: "Smallburrow"
}, {
    GivenName: "Arne",
    Surname: "Rosing"
}, {
    GivenName: "ลอ",
    Surname: "มานาดี"
}, {
    GivenName: "Erzebet",
    Surname: "Szöke"
}, {
    GivenName: "Antero",
    Surname: "Pokka"
}, {
    GivenName: "文子",
    Surname: "蜂谷"
}, {
    GivenName: "David",
    Surname: "Johnsen"
}, {
    GivenName: "Masanobu",
    Surname: "Chida"
}, {
    GivenName: "Tehuel",
    Surname: "Griego"
}, {
    GivenName: "Romualdo",
    Surname: "Mondragón"
}, {
    GivenName: "Petra",
    Surname: "Hrdá"
}, {
    GivenName: "Raja ",
    Surname: "Shamoon"
}, {
    GivenName: "Tahlia",
    Surname: "Hoadley"
}, {
    GivenName: "Aidan",
    Surname: "Breen"
}, {
    GivenName: "Kutakukatomoshi",
    Surname: ""
}, {
    GivenName: "Guðni",
    Surname: "Jóhannsson"
}, {
    GivenName: "Hunter",
    Surname: "Bindon"
}, {
    GivenName: "Valdemar",
    Surname: "Bech"
}, {
    GivenName: "Alfred",
    Surname: "Padilla"
}, {
    GivenName: "Клим",
    Surname: "Сазонов"
}, {
    GivenName: "ขันสิทธิ์",
    Surname: "แป้นเพ็ชร"
}, {
    GivenName: "Hiromi",
    Surname: "Higashi"
}, {
    GivenName: "Rakel",
    Surname: "Martinsson"
}, {
    GivenName: "Visa",
    Surname: "Bisliev"
}, {
    GivenName: "Ríkey",
    Surname: "Áskelsdóttir"
}, {
    GivenName: "Takuei",
    Surname: "Seto"
}, {
    GivenName: "Peter",
    Surname: "Poulsen"
}, {
    GivenName: "千代子",
    Surname: "安嶋"
}, {
    GivenName: "สุสงค์ประครอง",
    Surname: "คุณวุฒิ"
}, {
    GivenName: "Vekma",
    Surname: "Treth"
}, {
    GivenName: "Afamefula",
    Surname: "Eluemuno"
}, {
    GivenName: "مونا",
    Surname: "کامکار"
}, {
    GivenName: "Onuchukwu",
    Surname: "Chinweuba"
}, {
    GivenName: "Есения",
    Surname: "Зуева"
}, {
    GivenName: "Jože",
    Surname: "Rajzman"
}, {
    GivenName: "Ruman",
    Surname: "Kishiev"
}, {
    GivenName: "Khamzat",
    Surname: "Kishiev"
}, {
    GivenName: "On",
    Surname: "Han"
}, {
    GivenName: "Cleopatra",
    Surname: "Aksakova"
}, {
    GivenName: "Beaufort",
    Surname: "Thivierge"
}, {
    GivenName: "Tuukka",
    Surname: "Hatakka"
}, {
    GivenName: "雅芳",
    Surname: "麥"
}, {
    GivenName: "Vanessa",
    Surname: "Frey"
}, {
    GivenName: "Esmeralda",
    Surname: "Gawkroger"
}, {
    GivenName: "Amra",
    Surname: "Jerovšek"
}, {
    GivenName: "Ifesinachi",
    Surname: "Onwumelu"
}, {
    GivenName: "Henryka",
    Surname: "Pawłowska"
}, {
    GivenName: "Hal",
    Surname: "Oldbuck"
}, {
    GivenName: "Vojmil",
    Surname: "Jerković"
}, {
    GivenName: "Yuji",
    Surname: "Shikikawa"
}, {
    GivenName: "Peng",
    Surname: "Hsü"
}, {
    GivenName: "Boris",
    Surname: "Volbeda"
}, {
    GivenName: "روژان",
    Surname: "ثانی"
}, {
    GivenName: "Ifeoma",
    Surname: "Onodugoadiegbemma"
}, {
    GivenName: "Luana",
    Surname: "Martins"
}, {
    GivenName: "翔",
    Surname: "幸田"
}, {
    GivenName: "Yuri",
    Surname: "Uspensky"
}, {
    GivenName: "Прохор",
    Surname: "Деми́довы"
}, {
    GivenName: "Milojko",
    Surname: "Čerkez"
}, {
    GivenName: "Zdeněk",
    Surname: "Horák"
}, {
    GivenName: "Tom",
    Surname: "Lightfoot"
}, {
    GivenName: "Илья",
    Surname: "Ва́син"
}, {
    GivenName: "Meaza",
    Surname: "Filmon"
}, {
    GivenName: "Asta",
    Surname: "Olofsson"
}, {
    GivenName: "Medoro",
    Surname: "Costa"
}, {
    GivenName: "Ireneusz",
    Surname: "Kucharski"
}, {
    GivenName: "Torsten",
    Surname: "Friedman"
}, {
    GivenName: "Sebhat",
    Surname: "Selassie"
}, {
    GivenName: "Belle",
    Surname: "Johnston"
}, {
    GivenName: "Kauan",
    Surname: "Pinto"
}, {
    GivenName: "Yasmin",
    Surname: "Howe"
}, {
    GivenName: "Milislava",
    Surname: "Sarhatlić"
}, {
    GivenName: "Tamar",
    Surname: "Ocasio"
}, {
    GivenName: "Sultanbek",
    Surname: "Kishiev"
}, {
    GivenName: "Angela",
    Surname: "Santos"
}, {
    GivenName: "靜宜",
    Surname: "顧"
}, {
    GivenName: "Bernharð",
    Surname: "Birgisson"
}, {
    GivenName: "Марта",
    Surname: "Соломина"
}, {
    GivenName: "สุนวม",
    Surname: "ทับสอน"
}, {
    GivenName: "Lubomir",
    Surname: "Sokołowski"
}, {
    GivenName: "Stefania",
    Surname: "Ostrowska"
}, {
    GivenName: "Nurishat",
    Surname: "Ibragimov"
}, {
    GivenName: "Hector",
    Surname: "Lindgren"
}, {
    GivenName: "Charles",
    Surname: "Seymour"
}, {
    GivenName: "Gabriel",
    Surname: "Pinto"
}, {
    GivenName: "Vjeran",
    Surname: "Bosanac"
}, {
    GivenName: "Novel",
    Surname: "Vavilov"
}, {
    GivenName: "دارا",
    Surname: "علادی"
}, {
    GivenName: "Ilkka",
    Surname: "Äijälä"
}, {
    GivenName: "Aksel",
    Surname: "Fosse"
}, {
    GivenName: "Klara",
    Surname: "Jaworska"
}, {
    GivenName: "Fulvus",
    Surname: "Grubb"
}, {
    GivenName: "Laerke",
    Surname: "Dam"
}, {
    GivenName: "Иветта",
    Surname: "Иса́ева"
}, {
    GivenName: "Garðar",
    Surname: "Arnfinnsson"
}, {
    GivenName: "Fiori",
    Surname: "Abaalom"
}, {
    GivenName: "Bohumil",
    Surname: "Schindler"
}, {
    GivenName: "正男",
    Surname: "右田"
}, {
    GivenName: "Adlan",
    Surname: "Shishani"
}, {
    GivenName: "Katherine",
    Surname: "Bishop"
}, {
    GivenName: "Nkemdilim",
    Surname: "Madueke"
}, {
    GivenName: "Vanya",
    Surname: "Velez"
}, {
    GivenName: "สุไข่สอน",
    Surname: "ไชยธรรมมา"
}, {
    GivenName: "Dionisia",
    Surname: "Calabrese"
}, {
    GivenName: "Tokimimotaku",
    Surname: ""
}, {
    GivenName: "Goldilocks",
    Surname: "Bracegirdle"
}, {
    GivenName: "Ch Vana",
    Surname: "Kardis"
}, {
    GivenName: "Cody",
    Surname: "Bosworth"
}, {
    GivenName: "Daniela",
    Surname: "Zimmermann"
}, {
    GivenName: "Ida",
    Surname: "Lauridsen"
}, {
    GivenName: "Tomica",
    Surname: "Ivanec"
}, {
    GivenName: "Lila",
    Surname: "Magdaleno"
}, {
    GivenName: "Majid",
    Surname: "Maroun"
}, {
    GivenName: "Zukukatotoku",
    Surname: ""
}, {
    GivenName: "Avelaine",
    Surname: "Lavallée"
}, {
    GivenName: "Thức",
    Surname: "Nghiêm"
}, {
    GivenName: "Cassandre",
    Surname: "Maestas"
}, {
    GivenName: "Gabriel",
    Surname: "Pereira"
}, {
    GivenName: "Nadežda",
    Surname: "Lambergar"
}, {
    GivenName: "Isak",
    Surname: "Olsen"
}, {
    GivenName: "Jarmila",
    Surname: "Hellerová"
}, {
    GivenName: "Manville",
    Surname: "Berthelette"
}, {
    GivenName: "Ena",
    Surname: "Middendorp"
}, {
    GivenName: "Tekarukite",
    Surname: ""
}, {
    GivenName: "Tatiana",
    Surname: "Mishina"
}, {
    GivenName: "Mekutatafu",
    Surname: ""
}, {
    GivenName: "仕達",
    Surname: "嚴"
}, {
    GivenName: "Joy",
    Surname: "Martineau"
}, {
    GivenName: "Radigoj",
    Surname: "Požauko"
}, {
    GivenName: "Beatrice",
    Surname: "Rosario"
}, {
    GivenName: "Ines",
    Surname: "Schuster"
}, {
    GivenName: "J Tali",
    Surname: "Gordek"
}, {
    GivenName: "Balqis",
    Surname: "Maroun"
}, {
    GivenName: "Zac",
    Surname: "Dudley"
}, {
    GivenName: "Amanda",
    Surname: "Kristensen"
}, {
    GivenName: "Omar",
    Surname: "Kelly"
}, {
    GivenName: "Muhibb",
    Surname: "Mustafa"
}, {
    GivenName: "Ubanwa",
    Surname: "Zikoranaudodimma"
}, {
    GivenName: "Laura",
    Surname: "Schweitzer"
}, {
    GivenName: "Iida",
    Surname: "Aaltonen"
}, {
    GivenName: "Celeste",
    Surname: "Barese"
}, {
    GivenName: "Takiyah",
    Surname: "Essa"
}, {
    GivenName: "巧欣",
    Surname: "杜"
}, {
    GivenName: "Kolbeinn",
    Surname: "Sigurðarson"
}, {
    GivenName: "Инга",
    Surname: "Муравьёва"
}, {
    GivenName: "Fehret",
    Surname: "Čič"
}, {
    GivenName: "Amy",
    Surname: "Wilkins"
}, {
    GivenName: "Amaranth",
    Surname: "Rumble"
}, {
    GivenName: "Maro",
    Surname: "Covarrubias"
}, {
    GivenName: "Max",
    Surname: "Fried"
}, {
    GivenName: "Emerenciana",
    Surname: "Lerma"
}, {
    GivenName: "G Maltzak",
    Surname: "Laggal"
}, {
    GivenName: "Miomira",
    Surname: "Keller"
}, {
    GivenName: "Libuše",
    Surname: "Svobodová"
}, {
    GivenName: "Ada",
    Surname: "Alarcón"
}, {
    GivenName: "ماکان",
    Surname: "موسوی"
}, {
    GivenName: "فرشته",
    Surname: "کریمی"
}, {
    GivenName: "Yakue",
    Surname: "Escalante"
}, {
    GivenName: "Taimi",
    Surname: "Ojala"
}, {
    GivenName: "فریده",
    Surname: "مدیری اصل"
}, {
    GivenName: "穎安",
    Surname: "段"
}, {
    GivenName: "ขัติยะ",
    Surname: "ฤทธิ์ชัย"
}, {
    GivenName: "Furuta",
    Surname: "Hagos"
}, {
    GivenName: "Julie",
    Surname: "Svendsen"
}, {
    GivenName: "Shapa",
    Surname: "Dratchev"
}, {
    GivenName: "Zakiya",
    Surname: "Dratchev"
}, {
    GivenName: "Ada",
    Surname: "Ekström"
}, {
    GivenName: "گلشن",
    Surname: "علوی"
}, {
    GivenName: "Gréta",
    Surname: "Katona"
}, {
    GivenName: "Gofreddo",
    Surname: "Monaldo"
}, {
    GivenName: "Kaarle",
    Surname: "Mantere"
}, {
    GivenName: "Paninnguaq",
    Surname: "Andersen"
}, {
    GivenName: "Maurien",
    Surname: "Mattijssen"
}, {
    GivenName: "Honore",
    Surname: "Duclos"
}, {
    GivenName: "Mohammad",
    Surname: "Halvorsen"
}, {
    GivenName: "Sun",
    Surname: "Ch in"
}, {
    GivenName: "Chelsea",
    Surname: "Nicholls"
}, {
    GivenName: "Rabi",
    Surname: "Nassar"
}];

function n(e, n) {
    return Math.floor(Math.random() * (n - e + 1) + e)
}

function t() {
    var e = new Date,
        n = e.getUTCMonth() + 1;
    return e.getUTCDate() + "-" + (n = "0" + n) + "-" + e.getUTCFullYear()
}
const a = function() {
        var a = [];
        for (i = 0; i < 5; i++) {
            var r = `${e[n(1,e.length)].GivenName}  ${e[n(1,e.length)].Surname}`;
            switch (i) {
                case 0:
                    amount = n(5e3, 1e4);
                    break;
                case 1:
                    amount = n(1e3, 1e4);
                    break;
                case 2:
                    amount = n(1e3, 2e3);
                    break;
                case 3:
                    amount = n(15e3, 3e4);
                    break;
                case 4:
                    amount = n(1e3, 2e4)
            }
            var o = {
                name: r,
                amount: amount
            };
            a.push(o)
        }
        var s = "";
        for (i = 0; i < a.length; i++) {
            var m = t();
            s += `<tr><td>${a[i].name}</td><td>${m}</td><td>$${a[i].amount}</td></tr>`
        }
        return s
    },
    r = function() {
        var a = [];
        for (i = 0; i < 5; i++) {
            var r = `${e[n(1,e.length)].GivenName}  ${e[n(1,e.length)].Surname}`;
            switch (i) {
                case 0:
                    amount = n(1e3, 5e3);
                    break;
                case 1:
                    amount = n(1e3, 1e4);
                    break;
                case 2:
                    amount = n(1e3, 2e3);
                    break;
                case 3:
                    amount = n(1500, 4e3);
                    break;
                case 4:
                    amount = n(1e3, 2e4)
            }
            var o = {
                name: r,
                amount: amount
            };
            a.push(o)
        }
        var s = "";
        for (i = 0; i < a.length; i++) {
            var m = t();
            s += `<tr><td>${a[i].name}</td><td>${m}</td><td>$${a[i].amount}</td></tr>`
        }
        return s
    };
$("#ld_body").html(a), $("#lw_body").html(r)
});