(function() {
    function t(t) {
        function n(n, e, r, i, o, u) {
            for (; o >= 0 && u > o; o += t) {
                var a = i ? i[o] : o;
                r = e(r, n[a], a, n)
            }
            return r
        }
        return function(e, r, i, o) {
            r = y(r, o, 4);
            var u = !E(e) && v.keys(e),
            a = (u || e).length,
            s = t > 0 ? 0 : a - 1;
            return arguments.length < 3 && (i = e[u ? u[s] : s], s += t),
            n(e, r, i, u, s, a)
        }
    }
    function n(t) {
        return function(n, e, r) {
            e = b(e, r);
            for (var i = null != n && n.length,
            o = t > 0 ? 0 : i - 1; o >= 0 && i > o; o += t) if (e(n[o], o, n)) return o;
            return - 1
        }
    }
    function e(t, n) {
        var e = A.length,
        r = t.constructor,
        i = v.isFunction(r) && r.prototype || u,
        o = "constructor";
        for (v.has(t, o) && !v.contains(n, o) && n.push(o); e--;) o = A[e],
        o in t && t[o] !== i[o] && !v.contains(n, o) && n.push(o)
    }
    var r = this,
    i = r._,
    o = Array.prototype,
    u = Object.prototype,
    a = Function.prototype,
    s = o.push,
    c = o.slice,
    l = u.toString,
    f = u.hasOwnProperty,
    h = Array.isArray,
    p = Object.keys,
    d = a.bind,
    m = Object.create,
    g = function() {},
    v = function(t) {
        return t instanceof v ? t: this instanceof v ? void(this._wrapped = t) : new v(t)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = v), exports._ = v) : r._ = v,
    v.VERSION = "1.8.2";
    var y = function(t, n, e) {
        if (void 0 === n) return t;
        switch (null == e ? 3 : e) {
        case 1:
            return function(e) {
                return t.call(n, e)
            };
        case 2:
            return function(e, r) {
                return t.call(n, e, r)
            };
        case 3:
            return function(e, r, i) {
                return t.call(n, e, r, i)
            };
        case 4:
            return function(e, r, i, o) {
                return t.call(n, e, r, i, o)
            }
        }
        return function() {
            return t.apply(n, arguments)
        }
    },
    b = function(t, n, e) {
        return null == t ? v.identity: v.isFunction(t) ? y(t, n, e) : v.isObject(t) ? v.matcher(t) : v.property(t)
    };
    v.iteratee = function(t, n) {
        return b(t, n, 1 / 0)
    };
    var x = function(t, n) {
        return function(e) {
            var r = arguments.length;
            if (2 > r || null == e) return e;
            for (var i = 1; r > i; i++) for (var o = arguments[i], u = t(o), a = u.length, s = 0; a > s; s++) {
                var c = u[s];
                n && void 0 !== e[c] || (e[c] = o[c])
            }
            return e
        }
    },
    w = function(t) {
        if (!v.isObject(t)) return {};
        if (m) return m(t);
        g.prototype = t;
        var n = new g;
        return g.prototype = null,
        n
    },
    j = Math.pow(2, 53) - 1,
    E = function(t) {
        var n = null != t && t.length;
        return "number" == typeof n && n >= 0 && j >= n
    };
    v.each = v.forEach = function(t, n, e) {
        n = y(n, e);
        var r, i;
        if (E(t)) for (r = 0, i = t.length; i > r; r++) n(t[r], r, t);
        else {
            var o = v.keys(t);
            for (r = 0, i = o.length; i > r; r++) n(t[o[r]], o[r], t)
        }
        return t
    },
    v.map = v.collect = function(t, n, e) {
        n = b(n, e);
        for (var r = !E(t) && v.keys(t), i = (r || t).length, o = Array(i), u = 0; i > u; u++) {
            var a = r ? r[u] : u;
            o[u] = n(t[a], a, t)
        }
        return o
    },
    v.reduce = v.foldl = v.inject = t(1),
    v.reduceRight = v.foldr = t( - 1),
    v.find = v.detect = function(t, n, e) {
        var r;
        return r = E(t) ? v.findIndex(t, n, e) : v.findKey(t, n, e),
        void 0 !== r && -1 !== r ? t[r] : void 0
    },
    v.filter = v.select = function(t, n, e) {
        var r = [];
        return n = b(n, e),
        v.each(t,
        function(t, e, i) {
            n(t, e, i) && r.push(t)
        }),
        r
    },
    v.reject = function(t, n, e) {
        return v.filter(t, v.negate(b(n)), e)
    },
    v.every = v.all = function(t, n, e) {
        n = b(n, e);
        for (var r = !E(t) && v.keys(t), i = (r || t).length, o = 0; i > o; o++) {
            var u = r ? r[o] : o;
            if (!n(t[u], u, t)) return ! 1
        }
        return ! 0
    },
    v.some = v.any = function(t, n, e) {
        n = b(n, e);
        for (var r = !E(t) && v.keys(t), i = (r || t).length, o = 0; i > o; o++) {
            var u = r ? r[o] : o;
            if (n(t[u], u, t)) return ! 0
        }
        return ! 1
    },
    v.contains = v.includes = v.include = function(t, n, e) {
        return E(t) || (t = v.values(t)),
        v.indexOf(t, n, "number" == typeof e && e) >= 0
    },
    v.invoke = function(t, n) {
        var e = c.call(arguments, 2),
        r = v.isFunction(n);
        return v.map(t,
        function(t) {
            var i = r ? n: t[n];
            return null == i ? i: i.apply(t, e)
        })
    },
    v.pluck = function(t, n) {
        return v.map(t, v.property(n))
    },
    v.where = function(t, n) {
        return v.filter(t, v.matcher(n))
    },
    v.findWhere = function(t, n) {
        return v.find(t, v.matcher(n))
    },
    v.max = function(t, n, e) {
        var r, i, o = -(1 / 0),
        u = -(1 / 0);
        if (null == n && null != t) {
            t = E(t) ? t: v.values(t);
            for (var a = 0,
            s = t.length; s > a; a++) r = t[a],
            r > o && (o = r)
        } else n = b(n, e),
        v.each(t,
        function(t, e, r) {
            i = n(t, e, r),
            (i > u || i === -(1 / 0) && o === -(1 / 0)) && (o = t, u = i)
        });
        return o
    },
    v.min = function(t, n, e) {
        var r, i, o = 1 / 0,
        u = 1 / 0;
        if (null == n && null != t) {
            t = E(t) ? t: v.values(t);
            for (var a = 0,
            s = t.length; s > a; a++) r = t[a],
            o > r && (o = r)
        } else n = b(n, e),
        v.each(t,
        function(t, e, r) {
            i = n(t, e, r),
            (u > i || i === 1 / 0 && o === 1 / 0) && (o = t, u = i)
        });
        return o
    },
    v.shuffle = function(t) {
        for (var n, e = E(t) ? t: v.values(t), r = e.length, i = Array(r), o = 0; r > o; o++) n = v.random(0, o),
        n !== o && (i[o] = i[n]),
        i[n] = e[o];
        return i
    },
    v.sample = function(t, n, e) {
        return null == n || e ? (E(t) || (t = v.values(t)), t[v.random(t.length - 1)]) : v.shuffle(t).slice(0, Math.max(0, n))
    },
    v.sortBy = function(t, n, e) {
        return n = b(n, e),
        v.pluck(v.map(t,
        function(t, e, r) {
            return {
                value: t,
                index: e,
                criteria: n(t, e, r)
            }
        }).sort(function(t, n) {
            var e = t.criteria,
            r = n.criteria;
            if (e !== r) {
                if (e > r || void 0 === e) return 1;
                if (r > e || void 0 === r) return - 1
            }
            return t.index - n.index
        }), "value")
    };
    var T = function(t) {
        return function(n, e, r) {
            var i = {};
            return e = b(e, r),
            v.each(n,
            function(r, o) {
                var u = e(r, o, n);
                t(i, r, u)
            }),
            i
        }
    };
    v.groupBy = T(function(t, n, e) {
        v.has(t, e) ? t[e].push(n) : t[e] = [n]
    }),
    v.indexBy = T(function(t, n, e) {
        t[e] = n
    }),
    v.countBy = T(function(t, n, e) {
        v.has(t, e) ? t[e]++:t[e] = 1
    }),
    v.toArray = function(t) {
        return t ? v.isArray(t) ? c.call(t) : E(t) ? v.map(t, v.identity) : v.values(t) : []
    },
    v.size = function(t) {
        return null == t ? 0 : E(t) ? t.length: v.keys(t).length
    },
    v.partition = function(t, n, e) {
        n = b(n, e);
        var r = [],
        i = [];
        return v.each(t,
        function(t, e, o) { (n(t, e, o) ? r: i).push(t)
        }),
        [r, i]
    },
    v.first = v.head = v.take = function(t, n, e) {
        return null == t ? void 0 : null == n || e ? t[0] : v.initial(t, t.length - n)
    },
    v.initial = function(t, n, e) {
        return c.call(t, 0, Math.max(0, t.length - (null == n || e ? 1 : n)))
    },
    v.last = function(t, n, e) {
        return null == t ? void 0 : null == n || e ? t[t.length - 1] : v.rest(t, Math.max(0, t.length - n))
    },
    v.rest = v.tail = v.drop = function(t, n, e) {
        return c.call(t, null == n || e ? 1 : n)
    },
    v.compact = function(t) {
        return v.filter(t, v.identity)
    };
    var O = function(t, n, e, r) {
        for (var i = [], o = 0, u = r || 0, a = t && t.length; a > u; u++) {
            var s = t[u];
            if (E(s) && (v.isArray(s) || v.isArguments(s))) {
                n || (s = O(s, n, e));
                var c = 0,
                l = s.length;
                for (i.length += l; l > c;) i[o++] = s[c++]
            } else e || (i[o++] = s)
        }
        return i
    };
    v.flatten = function(t, n) {
        return O(t, n, !1)
    },
    v.without = function(t) {
        return v.difference(t, c.call(arguments, 1))
    },
    v.uniq = v.unique = function(t, n, e, r) {
        if (null == t) return [];
        v.isBoolean(n) || (r = e, e = n, n = !1),
        null != e && (e = b(e, r));
        for (var i = [], o = [], u = 0, a = t.length; a > u; u++) {
            var s = t[u],
            c = e ? e(s, u, t) : s;
            n ? (u && o === c || i.push(s), o = c) : e ? v.contains(o, c) || (o.push(c), i.push(s)) : v.contains(i, s) || i.push(s)
        }
        return i
    },
    v.union = function() {
        return v.uniq(O(arguments, !0, !0))
    },
    v.intersection = function(t) {
        if (null == t) return [];
        for (var n = [], e = arguments.length, r = 0, i = t.length; i > r; r++) {
            var o = t[r];
            if (!v.contains(n, o)) {
                for (var u = 1; e > u && v.contains(arguments[u], o); u++);
                u === e && n.push(o)
            }
        }
        return n
    },
    v.difference = function(t) {
        var n = O(arguments, !0, !0, 1);
        return v.filter(t,
        function(t) {
            return ! v.contains(n, t)
        })
    },
    v.zip = function() {
        return v.unzip(arguments)
    },
    v.unzip = function(t) {
        for (var n = t && v.max(t, "length").length || 0, e = Array(n), r = 0; n > r; r++) e[r] = v.pluck(t, r);
        return e
    },
    v.object = function(t, n) {
        for (var e = {},
        r = 0,
        i = t && t.length; i > r; r++) n ? e[t[r]] = n[r] : e[t[r][0]] = t[r][1];
        return e
    },
    v.indexOf = function(t, n, e) {
        var r = 0,
        i = t && t.length;
        if ("number" == typeof e) r = 0 > e ? Math.max(0, i + e) : e;
        else if (e && i) return r = v.sortedIndex(t, n),
        t[r] === n ? r: -1;
        if (n !== n) return v.findIndex(c.call(t, r), v.isNaN);
        for (; i > r; r++) if (t[r] === n) return r;
        return - 1
    },
    v.lastIndexOf = function(t, n, e) {
        var r = t ? t.length: 0;
        if ("number" == typeof e && (r = 0 > e ? r + e + 1 : Math.min(r, e + 1)), n !== n) return v.findLastIndex(c.call(t, 0, r), v.isNaN);
        for (; --r >= 0;) if (t[r] === n) return r;
        return - 1
    },
    v.findIndex = n(1),
    v.findLastIndex = n( - 1),
    v.sortedIndex = function(t, n, e, r) {
        e = b(e, r, 1);
        for (var i = e(n), o = 0, u = t.length; u > o;) {
            var a = Math.floor((o + u) / 2);
            e(t[a]) < i ? o = a + 1 : u = a
        }
        return o
    },
    v.range = function(t, n, e) {
        arguments.length <= 1 && (n = t || 0, t = 0),
        e = e || 1;
        for (var r = Math.max(Math.ceil((n - t) / e), 0), i = Array(r), o = 0; r > o; o++, t += e) i[o] = t;
        return i
    };
    var _ = function(t, n, e, r, i) {
        if (! (r instanceof n)) return t.apply(e, i);
        var o = w(t.prototype),
        u = t.apply(o, i);
        return v.isObject(u) ? u: o
    };
    v.bind = function(t, n) {
        if (d && t.bind === d) return d.apply(t, c.call(arguments, 1));
        if (!v.isFunction(t)) throw new TypeError("Bind must be called on a function");
        var e = c.call(arguments, 2),
        r = function() {
            return _(t, r, n, this, e.concat(c.call(arguments)))
        };
        return r
    },
    v.partial = function(t) {
        var n = c.call(arguments, 1),
        e = function() {
            for (var r = 0,
            i = n.length,
            o = Array(i), u = 0; i > u; u++) o[u] = n[u] === v ? arguments[r++] : n[u];
            for (; r < arguments.length;) o.push(arguments[r++]);
            return _(t, e, this, this, o)
        };
        return e
    },
    v.bindAll = function(t) {
        var n, e, r = arguments.length;
        if (1 >= r) throw new Error("bindAll must be passed function names");
        for (n = 1; r > n; n++) e = arguments[n],
        t[e] = v.bind(t[e], t);
        return t
    },
    v.memoize = function(t, n) {
        var e = function(r) {
            var i = e.cache,
            o = "" + (n ? n.apply(this, arguments) : r);
            return v.has(i, o) || (i[o] = t.apply(this, arguments)),
            i[o]
        };
        return e.cache = {},
        e
    },
    v.delay = function(t, n) {
        var e = c.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, e)
        },
        n)
    },
    v.defer = v.partial(v.delay, v, 1),
    v.throttle = function(t, n, e) {
        var r, i, o, u = null,
        a = 0;
        e || (e = {});
        var s = function() {
            a = e.leading === !1 ? 0 : v.now(),
            u = null,
            o = t.apply(r, i),
            u || (r = i = null)
        };
        return function() {
            var c = v.now();
            a || e.leading !== !1 || (a = c);
            var l = n - (c - a);
            return r = this,
            i = arguments,
            0 >= l || l > n ? (u && (clearTimeout(u), u = null), a = c, o = t.apply(r, i), u || (r = i = null)) : u || e.trailing === !1 || (u = setTimeout(s, l)),
            o
        }
    },
    v.debounce = function(t, n, e) {
        var r, i, o, u, a, s = function() {
            var c = v.now() - u;
            n > c && c >= 0 ? r = setTimeout(s, n - c) : (r = null, e || (a = t.apply(o, i), r || (o = i = null)))
        };
        return function() {
            o = this,
            i = arguments,
            u = v.now();
            var c = e && !r;
            return r || (r = setTimeout(s, n)),
            c && (a = t.apply(o, i), o = i = null),
            a
        }
    },
    v.wrap = function(t, n) {
        return v.partial(n, t)
    },
    v.negate = function(t) {
        return function() {
            return ! t.apply(this, arguments)
        }
    },
    v.compose = function() {
        var t = arguments,
        n = t.length - 1;
        return function() {
            for (var e = n,
            r = t[n].apply(this, arguments); e--;) r = t[e].call(this, r);
            return r
        }
    },
    v.after = function(t, n) {
        return function() {
            return--t < 1 ? n.apply(this, arguments) : void 0
        }
    },
    v.before = function(t, n) {
        var e;
        return function() {
            return--t > 0 && (e = n.apply(this, arguments)),
            1 >= t && (n = null),
            e
        }
    },
    v.once = v.partial(v.before, 2);
    var S = !{
        toString: null
    }.propertyIsEnumerable("toString"),
    A = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    v.keys = function(t) {
        if (!v.isObject(t)) return [];
        if (p) return p(t);
        var n = [];
        for (var r in t) v.has(t, r) && n.push(r);
        return S && e(t, n),
        n
    },
    v.allKeys = function(t) {
        if (!v.isObject(t)) return [];
        var n = [];
        for (var r in t) n.push(r);
        return S && e(t, n),
        n
    },
    v.values = function(t) {
        for (var n = v.keys(t), e = n.length, r = Array(e), i = 0; e > i; i++) r[i] = t[n[i]];
        return r
    },
    v.mapObject = function(t, n, e) {
        n = b(n, e);
        for (var r, i = v.keys(t), o = i.length, u = {},
        a = 0; o > a; a++) r = i[a],
        u[r] = n(t[r], r, t);
        return u
    },
    v.pairs = function(t) {
        for (var n = v.keys(t), e = n.length, r = Array(e), i = 0; e > i; i++) r[i] = [n[i], t[n[i]]];
        return r
    },
    v.invert = function(t) {
        for (var n = {},
        e = v.keys(t), r = 0, i = e.length; i > r; r++) n[t[e[r]]] = e[r];
        return n
    },
    v.functions = v.methods = function(t) {
        var n = [];
        for (var e in t) v.isFunction(t[e]) && n.push(e);
        return n.sort()
    },
    v.extend = x(v.allKeys),
    v.extendOwn = v.assign = x(v.keys),
    v.findKey = function(t, n, e) {
        n = b(n, e);
        for (var r, i = v.keys(t), o = 0, u = i.length; u > o; o++) if (r = i[o], n(t[r], r, t)) return r
    },
    v.pick = function(t, n, e) {
        var r, i, o = {},
        u = t;
        if (null == u) return o;
        v.isFunction(n) ? (i = v.allKeys(u), r = y(n, e)) : (i = O(arguments, !1, !1, 1), r = function(t, n, e) {
            return n in e
        },
        u = Object(u));
        for (var a = 0,
        s = i.length; s > a; a++) {
            var c = i[a],
            l = u[c];
            r(l, c, u) && (o[c] = l)
        }
        return o
    },
    v.omit = function(t, n, e) {
        if (v.isFunction(n)) n = v.negate(n);
        else {
            var r = v.map(O(arguments, !1, !1, 1), String);
            n = function(t, n) {
                return ! v.contains(r, n)
            }
        }
        return v.pick(t, n, e)
    },
    v.defaults = x(v.allKeys, !0),
    v.create = function(t, n) {
        var e = w(t);
        return n && v.extendOwn(e, n),
        e
    },
    v.clone = function(t) {
        return v.isObject(t) ? v.isArray(t) ? t.slice() : v.extend({},
        t) : t
    },
    v.tap = function(t, n) {
        return n(t),
        t
    },
    v.isMatch = function(t, n) {
        var e = v.keys(n),
        r = e.length;
        if (null == t) return ! r;
        for (var i = Object(t), o = 0; r > o; o++) {
            var u = e[o];
            if (n[u] !== i[u] || !(u in i)) return ! 1
        }
        return ! 0
    };
    var N = function(t, n, e, r) {
        if (t === n) return 0 !== t || 1 / t === 1 / n;
        if (null == t || null == n) return t === n;
        t instanceof v && (t = t._wrapped),
        n instanceof v && (n = n._wrapped);
        var i = l.call(t);
        if (i !== l.call(n)) return ! 1;
        switch (i) {
        case "[object RegExp]":
        case "[object String]":
            return "" + t == "" + n;
        case "[object Number]":
            return + t !== +t ? +n !== +n: 0 === +t ? 1 / +t === 1 / n: +t === +n;
        case "[object Date]":
        case "[object Boolean]":
            return + t === +n
        }
        var o = "[object Array]" === i;
        if (!o) {
            if ("object" != typeof t || "object" != typeof n) return ! 1;
            var u = t.constructor,
            a = n.constructor;
            if (u !== a && !(v.isFunction(u) && u instanceof u && v.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in n) return ! 1
        }
        e = e || [],
        r = r || [];
        for (var s = e.length; s--;) if (e[s] === t) return r[s] === n;
        if (e.push(t), r.push(n), o) {
            if (s = t.length, s !== n.length) return ! 1;
            for (; s--;) if (!N(t[s], n[s], e, r)) return ! 1
        } else {
            var c, f = v.keys(t);
            if (s = f.length, v.keys(n).length !== s) return ! 1;
            for (; s--;) if (c = f[s], !v.has(n, c) || !N(t[c], n[c], e, r)) return ! 1
        }
        return e.pop(),
        r.pop(),
        !0
    };
    v.isEqual = function(t, n) {
        return N(t, n)
    },
    v.isEmpty = function(t) {
        return null == t ? !0 : E(t) && (v.isArray(t) || v.isString(t) || v.isArguments(t)) ? 0 === t.length: 0 === v.keys(t).length
    },
    v.isElement = function(t) {
        return ! (!t || 1 !== t.nodeType)
    },
    v.isArray = h ||
    function(t) {
        return "[object Array]" === l.call(t)
    },
    v.isObject = function(t) {
        var n = typeof t;
        return "function" === n || "object" === n && !!t
    },
    v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"],
    function(t) {
        v["is" + t] = function(n) {
            return l.call(n) === "[object " + t + "]"
        }
    }),
    v.isArguments(arguments) || (v.isArguments = function(t) {
        return v.has(t, "callee")
    }),
    "function" != typeof / . / &&"object" != typeof Int8Array && (v.isFunction = function(t) {
        return "function" == typeof t || !1
    }),
    v.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    },
    v.isNaN = function(t) {
        return v.isNumber(t) && t !== +t
    },
    v.isBoolean = function(t) {
        return t === !0 || t === !1 || "[object Boolean]" === l.call(t)
    },
    v.isNull = function(t) {
        return null === t
    },
    v.isUndefined = function(t) {
        return void 0 === t
    },
    v.has = function(t, n) {
        return null != t && f.call(t, n)
    },
    v.noConflict = function() {
        return r._ = i,
        this
    },
    v.identity = function(t) {
        return t
    },
    v.constant = function(t) {
        return function() {
            return t
        }
    },
    v.noop = function() {},
    v.property = function(t) {
        return function(n) {
            return null == n ? void 0 : n[t]
        }
    },
    v.propertyOf = function(t) {
        return null == t ?
        function() {}: function(n) {
            return t[n]
        }
    },
    v.matcher = v.matches = function(t) {
        return t = v.extendOwn({},
        t),
        function(n) {
            return v.isMatch(n, t)
        }
    },
    v.times = function(t, n, e) {
        var r = Array(Math.max(0, t));
        n = y(n, e, 1);
        for (var i = 0; t > i; i++) r[i] = n(i);
        return r
    },
    v.random = function(t, n) {
        return null == n && (n = t, t = 0),
        t + Math.floor(Math.random() * (n - t + 1))
    },
    v.now = Date.now ||
    function() {
        return (new Date).getTime()
    };
    var C = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    },
    k = v.invert(C),
    P = function(t) {
        var n = function(n) {
            return t[n]
        },
        e = "(?:" + v.keys(t).join("|") + ")",
        r = RegExp(e),
        i = RegExp(e, "g");
        return function(t) {
            return t = null == t ? "": "" + t,
            r.test(t) ? t.replace(i, n) : t
        }
    };
    v.escape = P(C),
    v.unescape = P(k),
    v.result = function(t, n, e) {
        var r = null == t ? void 0 : t[n];
        return void 0 === r && (r = e),
        v.isFunction(r) ? r.call(t) : r
    };
    var F = 0;
    v.uniqueId = function(t) {
        var n = ++F + "";
        return t ? t + n: n
    },
    v.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var M = /(.)^/,
    L = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    },
    Z = /\\|'|\r|\n|\u2028|\u2029/g,
    B = function(t) {
        return "\\" + L[t]
    };
    v.template = function(t, n, e) { ! n && e && (n = e),
        n = v.defaults({},
        n, v.templateSettings);
        var r = RegExp([(n.escape || M).source, (n.interpolate || M).source, (n.evaluate || M).source].join("|") + "|$", "g"),
        i = 0,
        o = "__p+='";
        t.replace(r,
        function(n, e, r, u, a) {
            return o += t.slice(i, a).replace(Z, B),
            i = a + n.length,
            e ? o += "'+\n((__t=(" + e + "))==null?'':_.escape(__t))+\n'": r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'": u && (o += "';\n" + u + "\n__p+='"),
            n
        }),
        o += "';\n",
        n.variable || (o = "with(obj||{}){\n" + o + "}\n"),
        o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            var u = new Function(n.variable || "obj", "_", o)
        } catch(a) {
            throw a.source = o,
            a
        }
        var s = function(t) {
            return u.call(this, t, v)
        },
        c = n.variable || "obj";
        return s.source = "function(" + c + "){\n" + o + "}",
        s
    },
    v.chain = function(t) {
        var n = v(t);
        return n._chain = !0,
        n
    };
    var D = function(t, n) {
        return t._chain ? v(n).chain() : n
    };
    v.mixin = function(t) {
        v.each(v.functions(t),
        function(n) {
            var e = v[n] = t[n];
            v.prototype[n] = function() {
                var t = [this._wrapped];
                return s.apply(t, arguments),
                D(this, e.apply(v, t))
            }
        })
    },
    v.mixin(v),
    v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
    function(t) {
        var n = o[t];
        v.prototype[t] = function() {
            var e = this._wrapped;
            return n.apply(e, arguments),
            "shift" !== t && "splice" !== t || 0 !== e.length || delete e[0],
            D(this, e)
        }
    }),
    v.each(["concat", "join", "slice"],
    function(t) {
        var n = o[t];
        v.prototype[t] = function() {
            return D(this, n.apply(this._wrapped, arguments))
        }
    }),
    v.prototype.value = function() {
        return this._wrapped
    },
    v.prototype.valueOf = v.prototype.toJSON = v.prototype.value,
    v.prototype.toString = function() {
        return "" + this._wrapped
    },
    "function" == typeof define && define.amd && define("underscore", [],
    function() {
        return v
    })
}).call(this);
var Zepto = function() {
    function t(t) {
        return null == t ? String(t) : U[V.call(t)] || "object"
    }
    function n(n) {
        return "function" == t(n)
    }
    function e(t) {
        return null != t && t == t.window
    }
    function r(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
    }
    function i(n) {
        return "object" == t(n)
    }
    function o(t) {
        return i(t) && !e(t) && Object.getPrototypeOf(t) == Object.prototype
    }
    function u(t) {
        return "number" == typeof t.length
    }
    function a(t) {
        return N.call(t,
        function(t) {
            return null != t
        })
    }
    function s(t) {
        return t.length > 0 ? E.fn.concat.apply([], t) : t
    }
    function c(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }
    function l(t) {
        return t in P ? P[t] : P[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }
    function f(t, n) {
        return "number" != typeof n || F[c(t)] ? n: n + "px"
    }
    function h(t) {
        var n, e;
        return k[t] || (n = C.createElement(t), C.body.appendChild(n), e = getComputedStyle(n, "").getPropertyValue("display"), n.parentNode.removeChild(n), "none" == e && (e = "block"), k[t] = e),
        k[t]
    }
    function p(t) {
        return "children" in t ? A.call(t.children) : E.map(t.childNodes,
        function(t) {
            return 1 == t.nodeType ? t: void 0
        })
    }
    function d(t, n, e) {
        for (j in n) e && (o(n[j]) || Y(n[j])) ? (o(n[j]) && !o(t[j]) && (t[j] = {}), Y(n[j]) && !Y(t[j]) && (t[j] = []), d(t[j], n[j], e)) : n[j] !== w && (t[j] = n[j])
    }
    function m(t, n) {
        return null == n ? E(t) : E(t).filter(n)
    }
    function g(t, e, r, i) {
        return n(e) ? e.call(t, r, i) : e
    }
    function v(t, n, e) {
        null == e ? t.removeAttribute(n) : t.setAttribute(n, e)
    }
    function y(t, n) {
        var e = t.className || "",
        r = e && e.baseVal !== w;
        return n === w ? r ? e.baseVal: e: void(r ? e.baseVal = n: t.className = n)
    }
    function b(t) {
        try {
            return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null: +t + "" == t ? +t: /^[\[\{]/.test(t) ? E.parseJSON(t) : t) : t
        } catch(n) {
            return t
        }
    }
    function x(t, n) {
        n(t);
        for (var e = 0,
        r = t.childNodes.length; r > e; e++) x(t.childNodes[e], n)
    }
    var w, j, E, T, O, _, S = [],
    A = S.slice,
    N = S.filter,
    C = window.document,
    k = {},
    P = {},
    F = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    },
    M = /^\s*<(\w+|!)[^>]*>/,
    L = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    Z = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    B = /^(?:body|html)$/i,
    D = /([A-Z])/g,
    $ = ["val", "css", "html", "text", "data", "width", "height", "offset"],
    I = ["after", "prepend", "before", "append"],
    R = C.createElement("table"),
    z = C.createElement("tr"),
    q = {
        tr: C.createElement("tbody"),
        tbody: R,
        thead: R,
        tfoot: R,
        td: z,
        th: z,
        "*": C.createElement("div")
    },
    H = /complete|loaded|interactive/,
    X = /^[\w-]*$/,
    U = {},
    V = U.toString,
    J = {},
    W = C.createElement("div"),
    K = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    },
    Y = Array.isArray ||
    function(t) {
        return t instanceof Array
    };
    return J.matches = function(t, n) {
        if (!n || !t || 1 !== t.nodeType) return ! 1;
        var e = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (e) return e.call(t, n);
        var r, i = t.parentNode,
        o = !i;
        return o && (i = W).appendChild(t),
        r = ~J.qsa(i, n).indexOf(t),
        o && W.removeChild(t),
        r
    },
    O = function(t) {
        return t.replace(/-+(.)?/g,
        function(t, n) {
            return n ? n.toUpperCase() : ""
        })
    },
    _ = function(t) {
        return N.call(t,
        function(n, e) {
            return t.indexOf(n) == e
        })
    },
    J.fragment = function(t, n, e) {
        var r, i, u;
        return L.test(t) && (r = E(C.createElement(RegExp.$1))),
        r || (t.replace && (t = t.replace(Z, "<$1></$2>")), n === w && (n = M.test(t) && RegExp.$1), n in q || (n = "*"), u = q[n], u.innerHTML = "" + t, r = E.each(A.call(u.childNodes),
        function() {
            u.removeChild(this)
        })),
        o(e) && (i = E(r), E.each(e,
        function(t, n) {
            $.indexOf(t) > -1 ? i[t](n) : i.attr(t, n)
        })),
        r
    },
    J.Z = function(t, n) {
        return t = t || [],
        t.__proto__ = E.fn,
        t.selector = n || "",
        t
    },
    J.isZ = function(t) {
        return t instanceof J.Z
    },
    J.init = function(t, e) {
        var r;
        if (!t) return J.Z();
        if ("string" == typeof t) if (t = t.trim(), "<" == t[0] && M.test(t)) r = J.fragment(t, RegExp.$1, e),
        t = null;
        else {
            if (e !== w) return E(e).find(t);
            r = J.qsa(C, t)
        } else {
            if (n(t)) return E(C).ready(t);
            if (J.isZ(t)) return t;
            if (Y(t)) r = a(t);
            else if (i(t)) r = [t],
            t = null;
            else if (M.test(t)) r = J.fragment(t.trim(), RegExp.$1, e),
            t = null;
            else {
                if (e !== w) return E(e).find(t);
                r = J.qsa(C, t)
            }
        }
        return J.Z(r, t)
    },
    E = function(t, n) {
        return J.init(t, n)
    },
    E.extend = function(t) {
        var n, e = A.call(arguments, 1);
        return "boolean" == typeof t && (n = t, t = e.shift()),
        e.forEach(function(e) {
            d(t, e, n)
        }),
        t
    },
    J.qsa = function(t, n) {
        var e, i = "#" == n[0],
        o = !i && "." == n[0],
        u = i || o ? n.slice(1) : n,
        a = X.test(u);
        return r(t) && a && i ? (e = t.getElementById(u)) ? [e] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : A.call(a && !i ? o ? t.getElementsByClassName(u) : t.getElementsByTagName(n) : t.querySelectorAll(n))
    },
    E.contains = C.documentElement.contains ?
    function(t, n) {
        return t !== n && t.contains(n)
    }: function(t, n) {
        for (; n && (n = n.parentNode);) if (n === t) return ! 0;
        return ! 1
    },
    E.type = t,
    E.isFunction = n,
    E.isWindow = e,
    E.isArray = Y,
    E.isPlainObject = o,
    E.isEmptyObject = function(t) {
        var n;
        for (n in t) return ! 1;
        return ! 0
    },
    E.inArray = function(t, n, e) {
        return S.indexOf.call(n, t, e)
    },
    E.camelCase = O,
    E.trim = function(t) {
        return null == t ? "": String.prototype.trim.call(t)
    },
    E.uuid = 0,
    E.support = {},
    E.expr = {},
    E.map = function(t, n) {
        var e, r, i, o = [];
        if (u(t)) for (r = 0; r < t.length; r++) e = n(t[r], r),
        null != e && o.push(e);
        else for (i in t) e = n(t[i], i),
        null != e && o.push(e);
        return s(o)
    },
    E.each = function(t, n) {
        var e, r;
        if (u(t)) {
            for (e = 0; e < t.length; e++) if (n.call(t[e], e, t[e]) === !1) return t
        } else for (r in t) if (n.call(t[r], r, t[r]) === !1) return t;
        return t
    },
    E.grep = function(t, n) {
        return N.call(t, n)
    },
    window.JSON && (E.parseJSON = JSON.parse),
    E.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(t, n) {
        U["[object " + n + "]"] = n.toLowerCase()
    }),
    E.fn = {
        forEach: S.forEach,
        reduce: S.reduce,
        push: S.push,
        sort: S.sort,
        indexOf: S.indexOf,
        concat: S.concat,
        map: function(t) {
            return E(E.map(this,
            function(n, e) {
                return t.call(n, e, n)
            }))
        },
        slice: function() {
            return E(A.apply(this, arguments))
        },
        ready: function(t) {
            return H.test(C.readyState) && C.body ? t(E) : C.addEventListener("DOMContentLoaded",
            function() {
                t(E)
            },
            !1),
            this
        },
        get: function(t) {
            return t === w ? A.call(this) : this[t >= 0 ? t: t + this.length]
        },
        toArray: function() {
            return this.get()
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function(t) {
            return S.every.call(this,
            function(n, e) {
                return t.call(n, e, n) !== !1
            }),
            this
        },
        filter: function(t) {
            return n(t) ? this.not(this.not(t)) : E(N.call(this,
            function(n) {
                return J.matches(n, t)
            }))
        },
        add: function(t, n) {
            return E(_(this.concat(E(t, n))))
        },
        is: function(t) {
            return this.length > 0 && J.matches(this[0], t)
        },
        not: function(t) {
            var e = [];
            if (n(t) && t.call !== w) this.each(function(n) {
                t.call(this, n) || e.push(this)
            });
            else {
                var r = "string" == typeof t ? this.filter(t) : u(t) && n(t.item) ? A.call(t) : E(t);
                this.forEach(function(t) {
                    r.indexOf(t) < 0 && e.push(t)
                })
            }
            return E(e)
        },
        has: function(t) {
            return this.filter(function() {
                return i(t) ? E.contains(this, t) : E(this).find(t).size()
            })
        },
        eq: function(t) {
            return - 1 === t ? this.slice(t) : this.slice(t, +t + 1)
        },
        first: function() {
            var t = this[0];
            return t && !i(t) ? t: E(t)
        },
        last: function() {
            var t = this[this.length - 1];
            return t && !i(t) ? t: E(t)
        },
        find: function(t) {
            var n, e = this;
            return n = t ? "object" == typeof t ? E(t).filter(function() {
                var t = this;
                return S.some.call(e,
                function(n) {
                    return E.contains(n, t)
                })
            }) : 1 == this.length ? E(J.qsa(this[0], t)) : this.map(function() {
                return J.qsa(this, t)
            }) : E()
        },
        closest: function(t, n) {
            var e = this[0],
            i = !1;
            for ("object" == typeof t && (i = E(t)); e && !(i ? i.indexOf(e) >= 0 : J.matches(e, t));) e = e !== n && !r(e) && e.parentNode;
            return E(e)
        },
        parents: function(t) {
            for (var n = [], e = this; e.length > 0;) e = E.map(e,
            function(t) {
                return (t = t.parentNode) && !r(t) && n.indexOf(t) < 0 ? (n.push(t), t) : void 0
            });
            return m(n, t)
        },
        parent: function(t) {
            return m(_(this.pluck("parentNode")), t)
        },
        children: function(t) {
            return m(this.map(function() {
                return p(this)
            }), t)
        },
        contents: function() {
            return this.map(function() {
                return A.call(this.childNodes)
            })
        },
        siblings: function(t) {
            return m(this.map(function(t, n) {
                return N.call(p(n.parentNode),
                function(t) {
                    return t !== n
                })
            }), t)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(t) {
            return E.map(this,
            function(n) {
                return n[t]
            })
        },
        show: function() {
            return this.each(function() {
                "none" == this.style.display && (this.style.display = ""),
                "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
            })
        },
        replaceWith: function(t) {
            return this.before(t).remove()
        },
        wrap: function(t) {
            var e = n(t);
            if (this[0] && !e) var r = E(t).get(0),
            i = r.parentNode || this.length > 1;
            return this.each(function(n) {
                E(this).wrapAll(e ? t.call(this, n) : i ? r.cloneNode(!0) : r)
            })
        },
        wrapAll: function(t) {
            if (this[0]) {
                E(this[0]).before(t = E(t));
                for (var n; (n = t.children()).length;) t = n.first();
                E(t).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            var e = n(t);
            return this.each(function(n) {
                var r = E(this),
                i = r.contents(),
                o = e ? t.call(this, n) : t;
                i.length ? i.wrapAll(o) : r.append(o)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                E(this).replaceWith(E(this).children())
            }),
            this
        },
        clone: function() {
            return this.map(function() {
                return this.cloneNode(!0)
            })
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(t) {
            return this.each(function() {
                var n = E(this); (t === w ? "none" == n.css("display") : t) ? n.show() : n.hide()
            })
        },
        prev: function(t) {
            return E(this.pluck("previousElementSibling")).filter(t || "*")
        },
        next: function(t) {
            return E(this.pluck("nextElementSibling")).filter(t || "*")
        },
        html: function(t) {
            return 0 in arguments ? this.each(function(n) {
                var e = this.innerHTML;
                E(this).empty().append(g(this, t, n, e))
            }) : 0 in this ? this[0].innerHTML: null
        },
        text: function(t) {
            return 0 in arguments ? this.each(function(n) {
                var e = g(this, t, n, this.textContent);
                this.textContent = null == e ? "": "" + e
            }) : 0 in this ? this[0].textContent: null
        },
        attr: function(t, n) {
            var e;
            return "string" != typeof t || 1 in arguments ? this.each(function(e) {
                if (1 === this.nodeType) if (i(t)) for (j in t) v(this, j, t[j]);
                else v(this, t, g(this, n, e, this.getAttribute(t)))
            }) : this.length && 1 === this[0].nodeType ? !(e = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : e: w
        },
        removeAttr: function(t) {
            return this.each(function() {
                1 === this.nodeType && t.split(" ").forEach(function(t) {
                    v(this, t)
                },
                this)
            })
        },
        prop: function(t, n) {
            return t = K[t] || t,
            1 in arguments ? this.each(function(e) {
                this[t] = g(this, n, e, this[t])
            }) : this[0] && this[0][t]
        },
        data: function(t, n) {
            var e = "data-" + t.replace(D, "-$1").toLowerCase(),
            r = 1 in arguments ? this.attr(e, n) : this.attr(e);
            return null !== r ? b(r) : w
        },
        val: function(t) {
            return 0 in arguments ? this.each(function(n) {
                this.value = g(this, t, n, this.value)
            }) : this[0] && (this[0].multiple ? E(this[0]).find("option").filter(function() {
                return this.selected
            }).pluck("value") : this[0].value)
        },
        offset: function(t) {
            if (t) return this.each(function(n) {
                var e = E(this),
                r = g(this, t, n, e.offset()),
                i = e.offsetParent().offset(),
                o = {
                    top: r.top - i.top,
                    left: r.left - i.left
                };
                "static" == e.css("position") && (o.position = "relative"),
                e.css(o)
            });
            if (!this.length) return null;
            var n = this[0].getBoundingClientRect();
            return {
                left: n.left + window.pageXOffset,
                top: n.top + window.pageYOffset,
                width: Math.round(n.width),
                height: Math.round(n.height)
            }
        },
        css: function(n, e) {
            if (arguments.length < 2) {
                var r, i = this[0];
                if (!i) return;
                if (r = getComputedStyle(i, ""), "string" == typeof n) return i.style[O(n)] || r.getPropertyValue(n);
                if (Y(n)) {
                    var o = {};
                    return E.each(n,
                    function(t, n) {
                        o[n] = i.style[O(n)] || r.getPropertyValue(n)
                    }),
                    o
                }
            }
            var u = "";
            if ("string" == t(n)) e || 0 === e ? u = c(n) + ":" + f(n, e) : this.each(function() {
                this.style.removeProperty(c(n))
            });
            else for (j in n) n[j] || 0 === n[j] ? u += c(j) + ":" + f(j, n[j]) + ";": this.each(function() {
                this.style.removeProperty(c(j))
            });
            return this.each(function() {
                this.style.cssText += ";" + u
            })
        },
        index: function(t) {
            return t ? this.indexOf(E(t)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(t) {
            return t ? S.some.call(this,
            function(t) {
                return this.test(y(t))
            },
            l(t)) : !1
        },
        addClass: function(t) {
            return t ? this.each(function(n) {
                if ("className" in this) {
                    T = [];
                    var e = y(this),
                    r = g(this, t, n, e);
                    r.split(/\s+/g).forEach(function(t) {
                        E(this).hasClass(t) || T.push(t)
                    },
                    this),
                    T.length && y(this, e + (e ? " ": "") + T.join(" "))
                }
            }) : this
        },
        removeClass: function(t) {
            return this.each(function(n) {
                if ("className" in this) {
                    if (t === w) return y(this, "");
                    T = y(this),
                    g(this, t, n, T).split(/\s+/g).forEach(function(t) {
                        T = T.replace(l(t), " ")
                    }),
                    y(this, T.trim())
                }
            })
        },
        toggleClass: function(t, n) {
            return t ? this.each(function(e) {
                var r = E(this),
                i = g(this, t, e, y(this));
                i.split(/\s+/g).forEach(function(t) { (n === w ? !r.hasClass(t) : n) ? r.addClass(t) : r.removeClass(t)
                })
            }) : this
        },
        scrollTop: function(t) {
            if (this.length) {
                var n = "scrollTop" in this[0];
                return t === w ? n ? this[0].scrollTop: this[0].pageYOffset: this.each(n ?
                function() {
                    this.scrollTop = t
                }: function() {
                    this.scrollTo(this.scrollX, t)
                })
            }
        },
        scrollLeft: function(t) {
            if (this.length) {
                var n = "scrollLeft" in this[0];
                return t === w ? n ? this[0].scrollLeft: this[0].pageXOffset: this.each(n ?
                function() {
                    this.scrollLeft = t
                }: function() {
                    this.scrollTo(t, this.scrollY)
                })
            }
        },
        position: function() {
            if (this.length) {
                var t = this[0],
                n = this.offsetParent(),
                e = this.offset(),
                r = B.test(n[0].nodeName) ? {
                    top: 0,
                    left: 0
                }: n.offset();
                return e.top -= parseFloat(E(t).css("margin-top")) || 0,
                e.left -= parseFloat(E(t).css("margin-left")) || 0,
                r.top += parseFloat(E(n[0]).css("border-top-width")) || 0,
                r.left += parseFloat(E(n[0]).css("border-left-width")) || 0,
                {
                    top: e.top - r.top,
                    left: e.left - r.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || C.body; t && !B.test(t.nodeName) && "static" == E(t).css("position");) t = t.offsetParent;
                return t
            })
        }
    },
    E.fn.detach = E.fn.remove,
    ["width", "height"].forEach(function(t) {
        var n = t.replace(/./,
        function(t) {
            return t[0].toUpperCase()
        });
        E.fn[t] = function(i) {
            var o, u = this[0];
            return i === w ? e(u) ? u["inner" + n] : r(u) ? u.documentElement["scroll" + n] : (o = this.offset()) && o[t] : this.each(function(n) {
                u = E(this),
                u.css(t, g(this, i, n, u[t]()))
            })
        }
    }),
    I.forEach(function(n, e) {
        var r = e % 2;
        E.fn[n] = function() {
            var n, i, o = E.map(arguments,
            function(e) {
                return n = t(e),
                "object" == n || "array" == n || null == e ? e: J.fragment(e)
            }),
            u = this.length > 1;
            return o.length < 1 ? this: this.each(function(t, n) {
                i = r ? n: n.parentNode,
                n = 0 == e ? n.nextSibling: 1 == e ? n.firstChild: 2 == e ? n: null;
                var a = E.contains(C.documentElement, i);
                o.forEach(function(t) {
                    if (u) t = t.cloneNode(!0);
                    else if (!i) return E(t).remove();
                    i.insertBefore(t, n),
                    a && x(t,
                    function(t) {
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                    })
                })
            })
        },
        E.fn[r ? n + "To": "insert" + (e ? "Before": "After")] = function(t) {
            return E(t)[n](this),
            this
        }
    }),
    J.Z.prototype = E.fn,
    J.uniq = _,
    J.deserializeValue = b,
    E.zepto = J,
    E
} ();
window.Zepto = Zepto,
void 0 === window.$ && (window.$ = Zepto),
function(t) {
    function n(t) {
        return t._zid || (t._zid = h++)
    }
    function e(t, e, o, u) {
        if (e = r(e), e.ns) var a = i(e.ns);
        return (g[n(t)] || []).filter(function(t) {
            return t && (!e.e || t.e == e.e) && (!e.ns || a.test(t.ns)) && (!o || n(t.fn) === n(o)) && (!u || t.sel == u)
        })
    }
    function r(t) {
        var n = ("" + t).split(".");
        return {
            e: n[0],
            ns: n.slice(1).sort().join(" ")
        }
    }
    function i(t) {
        return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
    }
    function o(t, n) {
        return t.del && !y && t.e in b || !!n
    }
    function u(t) {
        return x[t] || y && b[t] || t
    }
    function a(e, i, a, s, l, h, p) {
        var d = n(e),
        m = g[d] || (g[d] = []);
        i.split(/\s/).forEach(function(n) {
            if ("ready" == n) return t(document).ready(a);
            var i = r(n);
            i.fn = a,
            i.sel = l,
            i.e in x && (a = function(n) {
                var e = n.relatedTarget;
                return ! e || e !== this && !t.contains(this, e) ? i.fn.apply(this, arguments) : void 0
            }),
            i.del = h;
            var d = h || a;
            i.proxy = function(t) {
                if (t = c(t), !t.isImmediatePropagationStopped()) {
                    t.data = s;
                    var n = d.apply(e, t._args == f ? [t] : [t].concat(t._args));
                    return n === !1 && (t.preventDefault(), t.stopPropagation()),
                    n
                }
            },
            i.i = m.length,
            m.push(i),
            "addEventListener" in e && e.addEventListener(u(i.e), i.proxy, o(i, p))
        })
    }
    function s(t, r, i, a, s) {
        var c = n(t); (r || "").split(/\s/).forEach(function(n) {
            e(t, n, i, a).forEach(function(n) {
                delete g[c][n.i],
                "removeEventListener" in t && t.removeEventListener(u(n.e), n.proxy, o(n, s))
            })
        })
    }
    function c(n, e) {
        return (e || !n.isDefaultPrevented) && (e || (e = n), t.each(T,
        function(t, r) {
            var i = e[t];
            n[t] = function() {
                return this[r] = w,
                i && i.apply(e, arguments)
            },
            n[r] = j
        }), (e.defaultPrevented !== f ? e.defaultPrevented: "returnValue" in e ? e.returnValue === !1 : e.getPreventDefault && e.getPreventDefault()) && (n.isDefaultPrevented = w)),
        n
    }
    function l(t) {
        var n, e = {
            originalEvent: t
        };
        for (n in t) E.test(n) || t[n] === f || (e[n] = t[n]);
        return c(e, t)
    }
    var f, h = 1,
    p = Array.prototype.slice,
    d = t.isFunction,
    m = function(t) {
        return "string" == typeof t
    },
    g = {},
    v = {},
    y = "onfocusin" in window,
    b = {
        focus: "focusin",
        blur: "focusout"
    },
    x = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    v.click = v.mousedown = v.mouseup = v.mousemove = "MouseEvents",
    t.event = {
        add: a,
        remove: s
    },
    t.proxy = function(e, r) {
        var i = 2 in arguments && p.call(arguments, 2);
        if (d(e)) {
            var o = function() {
                return e.apply(r, i ? i.concat(p.call(arguments)) : arguments)
            };
            return o._zid = n(e),
            o
        }
        if (m(r)) return i ? (i.unshift(e[r], e), t.proxy.apply(null, i)) : t.proxy(e[r], e);
        throw new TypeError("expected function")
    },
    t.fn.bind = function(t, n, e) {
        return this.on(t, n, e)
    },
    t.fn.unbind = function(t, n) {
        return this.off(t, n)
    },
    t.fn.one = function(t, n, e, r) {
        return this.on(t, n, e, r, 1)
    };
    var w = function() {
        return ! 0
    },
    j = function() {
        return ! 1
    },
    E = /^([A-Z]|returnValue$|layer[XY]$)/,
    T = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    t.fn.delegate = function(t, n, e) {
        return this.on(n, t, e)
    },
    t.fn.undelegate = function(t, n, e) {
        return this.off(n, t, e)
    },
    t.fn.live = function(n, e) {
        return t(document.body).delegate(this.selector, n, e),
        this
    },
    t.fn.die = function(n, e) {
        return t(document.body).undelegate(this.selector, n, e),
        this
    },
    t.fn.on = function(n, e, r, i, o) {
        var u, c, h = this;
        return n && !m(n) ? (t.each(n,
        function(t, n) {
            h.on(t, e, r, n, o)
        }), h) : (m(e) || d(i) || i === !1 || (i = r, r = e, e = f), (d(r) || r === !1) && (i = r, r = f), i === !1 && (i = j), h.each(function(f, h) {
            o && (u = function(t) {
                return s(h, t.type, i),
                i.apply(this, arguments)
            }),
            e && (c = function(n) {
                var r, o = t(n.target).closest(e, h).get(0);
                return o && o !== h ? (r = t.extend(l(n), {
                    currentTarget: o,
                    liveFired: h
                }), (u || i).apply(o, [r].concat(p.call(arguments, 1)))) : void 0
            }),
            a(h, n, i, r, e, c || u)
        }))
    },
    t.fn.off = function(n, e, r) {
        var i = this;
        return n && !m(n) ? (t.each(n,
        function(t, n) {
            i.off(t, e, n)
        }), i) : (m(e) || d(r) || r === !1 || (r = e, e = f), r === !1 && (r = j), i.each(function() {
            s(this, n, r, e)
        }))
    },
    t.fn.trigger = function(n, e) {
        return n = m(n) || t.isPlainObject(n) ? t.Event(n) : c(n),
        n._args = e,
        this.each(function() {
            n.type in b && "function" == typeof this[n.type] ? this[n.type]() : "dispatchEvent" in this ? this.dispatchEvent(n) : t(this).triggerHandler(n, e)
        })
    },
    t.fn.triggerHandler = function(n, r) {
        var i, o;
        return this.each(function(u, a) {
            i = l(m(n) ? t.Event(n) : n),
            i._args = r,
            i.target = a,
            t.each(e(a, n.type || n),
            function(t, n) {
                return o = n.proxy(i),
                i.isImmediatePropagationStopped() ? !1 : void 0
            })
        }),
        o
    },
    "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(n) {
        t.fn[n] = function(t) {
            return 0 in arguments ? this.bind(n, t) : this.trigger(n)
        }
    }),
    t.Event = function(t, n) {
        m(t) || (n = t, t = n.type);
        var e = document.createEvent(v[t] || "Events"),
        r = !0;
        if (n) for (var i in n)"bubbles" == i ? r = !!n[i] : e[i] = n[i];
        return e.initEvent(t, r, !0),
        c(e)
    }
} (Zepto),
function(t) {
    function n(n, e, r) {
        var i = t.Event(e);
        return t(n).trigger(i, r),
        !i.isDefaultPrevented()
    }
    function e(t, e, r, i) {
        return t.global ? n(e || y, r, i) : void 0
    }
    function r(n) {
        n.global && 0 === t.active++&&e(n, null, "ajaxStart")
    }
    function i(n) {
        n.global && !--t.active && e(n, null, "ajaxStop")
    }
    function o(t, n) {
        var r = n.context;
        return n.beforeSend.call(r, t, n) === !1 || e(n, r, "ajaxBeforeSend", [t, n]) === !1 ? !1 : void e(n, r, "ajaxSend", [t, n])
    }
    function u(t, n, r, i) {
        var o = r.context,
        u = "success";
        r.success.call(o, t, u, n),
        i && i.resolveWith(o, [t, u, n]),
        e(r, o, "ajaxSuccess", [n, r, t]),
        s(u, n, r)
    }
    function a(t, n, r, i, o) {
        var u = i.context;
        i.error.call(u, r, n, t),
        o && o.rejectWith(u, [r, n, t]),
        e(i, u, "ajaxError", [r, i, t || n]),
        s(n, r, i)
    }
    function s(t, n, r) {
        var o = r.context;
        r.complete.call(o, n, t),
        e(r, o, "ajaxComplete", [n, r]),
        i(r)
    }
    function c() {}
    function l(t) {
        return t && (t = t.split(";", 2)[0]),
        t && (t == E ? "html": t == j ? "json": x.test(t) ? "script": w.test(t) && "xml") || "text"
    }
    function f(t, n) {
        return "" == n ? t: (t + "&" + n).replace(/[&?]{1,2}/, "?")
    }
    function h(n) {
        n.processData && n.data && "string" != t.type(n.data) && (n.data = t.param(n.data, n.traditional)),
        !n.data || n.type && "GET" != n.type.toUpperCase() || (n.url = f(n.url, n.data), n.data = void 0)
    }
    function p(n, e, r, i) {
        return t.isFunction(e) && (i = r, r = e, e = void 0),
        t.isFunction(r) || (i = r, r = void 0),
        {
            url: n,
            data: e,
            success: r,
            dataType: i
        }
    }
    function d(n, e, r, i) {
        var o, u = t.isArray(e),
        a = t.isPlainObject(e);
        t.each(e,
        function(e, s) {
            o = t.type(s),
            i && (e = r ? i: i + "[" + (a || "object" == o || "array" == o ? e: "") + "]"),
            !i && u ? n.add(s.name, s.value) : "array" == o || !r && "object" == o ? d(n, s, r, e) : n.add(e, s)
        })
    }
    var m, g, v = 0,
    y = window.document,
    b = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    x = /^(?:text|application)\/javascript/i,
    w = /^(?:text|application)\/xml/i,
    j = "application/json",
    E = "text/html",
    T = /^\s*$/,
    O = y.createElement("a");
    O.href = window.location.href,
    t.active = 0,
    t.ajaxJSONP = function(n, e) {
        if (! ("type" in n)) return t.ajax(n);
        var r, i, s = n.jsonpCallback,
        c = (t.isFunction(s) ? s() : s) || "jsonp" + ++v,
        l = y.createElement("script"),
        f = window[c],
        h = function(n) {
            t(l).triggerHandler("error", n || "abort")
        },
        p = {
            abort: h
        };
        return e && e.promise(p),
        t(l).on("load error",
        function(o, s) {
            clearTimeout(i),
            t(l).off().remove(),
            "error" != o.type && r ? u(r[0], p, n, e) : a(null, s || "error", p, n, e),
            window[c] = f,
            r && t.isFunction(f) && f(r[0]),
            f = r = void 0
        }),
        o(p, n) === !1 ? (h("abort"), p) : (window[c] = function() {
            r = arguments
        },
        l.src = n.url.replace(/\?(.+)=\?/, "?$1=" + c), y.head.appendChild(l), n.timeout > 0 && (i = setTimeout(function() {
            h("timeout")
        },
        n.timeout)), p)
    },
    t.ajaxSettings = {
        type: "GET",
        beforeSend: c,
        success: c,
        error: c,
        complete: c,
        context: null,
        global: !0,
        xhr: function() {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: j,
            xml: "application/xml, text/xml",
            html: E,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    },
    t.ajax = function(n) {
        var e, i = t.extend({},
        n || {}),
        s = t.Deferred && t.Deferred();
        for (m in t.ajaxSettings) void 0 === i[m] && (i[m] = t.ajaxSettings[m]);
        r(i),
        i.crossDomain || (e = y.createElement("a"), e.href = i.url, e.href = e.href, i.crossDomain = O.protocol + "//" + O.host != e.protocol + "//" + e.host),
        i.url || (i.url = window.location.toString()),
        h(i);
        var p = i.dataType,
        d = /\?.+=\?/.test(i.url);
        if (d && (p = "jsonp"), i.cache !== !1 && (n && n.cache === !0 || "script" != p && "jsonp" != p) || (i.url = f(i.url, "_=" + Date.now())), "jsonp" == p) return d || (i.url = f(i.url, i.jsonp ? i.jsonp + "=?": i.jsonp === !1 ? "": "callback=?")),
        t.ajaxJSONP(i, s);
        var v, b = i.accepts[p],
        x = {},
        w = function(t, n) {
            x[t.toLowerCase()] = [t, n]
        },
        j = /^([\w-]+:)\/\//.test(i.url) ? RegExp.$1: window.location.protocol,
        E = i.xhr(),
        _ = E.setRequestHeader;
        if (s && s.promise(E), i.crossDomain || w("X-Requested-With", "XMLHttpRequest"), w("Accept", b || "*/*"), (b = i.mimeType || b) && (b.indexOf(",") > -1 && (b = b.split(",", 2)[0]), E.overrideMimeType && E.overrideMimeType(b)), (i.contentType || i.contentType !== !1 && i.data && "GET" != i.type.toUpperCase()) && w("Content-Type", i.contentType || "application/x-www-form-urlencoded"), i.headers) for (g in i.headers) w(g, i.headers[g]);
        if (E.setRequestHeader = w, E.onreadystatechange = function() {
            if (4 == E.readyState) {
                E.onreadystatechange = c,
                clearTimeout(v);
                var n, e = !1;
                if (E.status >= 200 && E.status < 300 || 304 == E.status || 0 == E.status && "file:" == j) {
                    p = p || l(i.mimeType || E.getResponseHeader("content-type")),
                    n = E.responseText;
                    try {
                        "script" == p ? (1, eval)(n) : "xml" == p ? n = E.responseXML: "json" == p && (n = T.test(n) ? null: t.parseJSON(n))
                    } catch(r) {
                        e = r
                    }
                    e ? a(e, "parsererror", E, i, s) : u(n, E, i, s)
                } else a(E.statusText || null, E.status ? "error": "abort", E, i, s)
            }
        },
        o(E, i) === !1) return E.abort(),
        a(null, "abort", E, i, s),
        E;
        if (i.xhrFields) for (g in i.xhrFields) E[g] = i.xhrFields[g];
        var S = "async" in i ? i.async: !0;
        E.open(i.type, i.url, S, i.username, i.password);
        for (g in x) _.apply(E, x[g]);
        return i.timeout > 0 && (v = setTimeout(function() {
            E.onreadystatechange = c,
            E.abort(),
            a(null, "timeout", E, i, s)
        },
        i.timeout)),
        E.send(i.data ? i.data: null),
        E
    },
    t.get = function() {
        return t.ajax(p.apply(null, arguments))
    },
    t.post = function() {
        var n = p.apply(null, arguments);
        return n.type = "POST",
        t.ajax(n)
    },
    t.getJSON = function() {
        var n = p.apply(null, arguments);
        return n.dataType = "json",
        t.ajax(n)
    },
    t.fn.load = function(n, e, r) {
        if (!this.length) return this;
        var i, o = this,
        u = n.split(/\s/),
        a = p(n, e, r),
        s = a.success;
        return u.length > 1 && (a.url = u[0], i = u[1]),
        a.success = function(n) {
            o.html(i ? t("<div>").html(n.replace(b, "")).find(i) : n),
            s && s.apply(o, arguments)
        },
        t.ajax(a),
        this
    };
    var _ = encodeURIComponent;
    t.param = function(n, e) {
        var r = [];
        return r.add = function(n, e) {
            t.isFunction(e) && (e = e()),
            null == e && (e = ""),
            this.push(_(n) + "=" + _(e))
        },
        d(r, n, e),
        r.join("&").replace(/%20/g, "+")
    }
} (Zepto),
function(t) {
    t.fn.serializeArray = function() {
        var n, e, r = [],
        i = function(t) {
            return t.forEach ? t.forEach(i) : void r.push({
                name: n,
                value: t
            })
        };
        return this[0] && t.each(this[0].elements,
        function(r, o) {
            e = o.type,
            n = o.name,
            n && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != e && "reset" != e && "button" != e && "file" != e && ("radio" != e && "checkbox" != e || o.checked) && i(t(o).val())
        }),
        r
    },
    t.fn.serialize = function() {
        var t = [];
        return this.serializeArray().forEach(function(n) {
            t.push(encodeURIComponent(n.name) + "=" + encodeURIComponent(n.value))
        }),
        t.join("&")
    },
    t.fn.submit = function(n) {
        if (0 in arguments) this.bind("submit", n);
        else if (this.length) {
            var e = t.Event("submit");
            this.eq(0).trigger(e),
            e.isDefaultPrevented() || this.get(0).submit()
        }
        return this
    }
} (Zepto),
function(t) {
    "__proto__" in {} || t.extend(t.zepto, {
        Z: function(n, e) {
            return n = n || [],
            t.extend(n, t.fn),
            n.selector = e || "",
            n.__Z = !0,
            n
        },
        isZ: function(n) {
            return "array" === t.type(n) && "__Z" in n
        }
    });
    try {
        getComputedStyle(void 0)
    } catch(n) {
        var e = getComputedStyle;
        window.getComputedStyle = function(t) {
            try {
                return e(t)
            } catch(n) {
                return null
            }
        }
    }
} (Zepto),
function(t, n) {
    function e(t) {
        return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
    }
    function r(t) {
        return i ? i + t: t.toLowerCase()
    }
    var i, o, u, a, s, c, l, f, h, p, d = "",
    m = {
        Webkit: "webkit",
        Moz: "",
        O: "o"
    },
    g = document.createElement("div"),
    v = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
    y = {};
    t.each(m,
    function(t, e) {
        return g.style[t + "TransitionProperty"] !== n ? (d = "-" + t.toLowerCase() + "-", i = e, !1) : void 0
    }),
    o = d + "transform",
    y[u = d + "transition-property"] = y[a = d + "transition-duration"] = y[c = d + "transition-delay"] = y[s = d + "transition-timing-function"] = y[l = d + "animation-name"] = y[f = d + "animation-duration"] = y[p = d + "animation-delay"] = y[h = d + "animation-timing-function"] = "",
    t.fx = {
        off: i === n && g.style.transitionProperty === n,
        speeds: {
            _default: 400,
            fast: 200,
            slow: 600
        },
        cssPrefix: d,
        transitionEnd: r("TransitionEnd"),
        animationEnd: r("AnimationEnd")
    },
    t.fn.animate = function(e, r, i, o, u) {
        return t.isFunction(r) && (o = r, i = n, r = n),
        t.isFunction(i) && (o = i, i = n),
        t.isPlainObject(r) && (i = r.easing, o = r.complete, u = r.delay, r = r.duration),
        r && (r = ("number" == typeof r ? r: t.fx.speeds[r] || t.fx.speeds._default) / 1e3),
        u && (u = parseFloat(u) / 1e3),
        this.anim(e, r, i, o, u)
    },
    t.fn.anim = function(r, i, d, m, g) {
        var b, x, w, j = {},
        E = "",
        T = this,
        O = t.fx.transitionEnd,
        _ = !1;
        if (i === n && (i = t.fx.speeds._default / 1e3), g === n && (g = 0), t.fx.off && (i = 0), "string" == typeof r) j[l] = r,
        j[f] = i + "s",
        j[p] = g + "s",
        j[h] = d || "linear",
        O = t.fx.animationEnd;
        else {
            x = [];
            for (b in r) v.test(b) ? E += b + "(" + r[b] + ") ": (j[b] = r[b], x.push(e(b)));
            E && (j[o] = E, x.push(o)),
            i > 0 && "object" == typeof r && (j[u] = x.join(", "), j[a] = i + "s", j[c] = g + "s", j[s] = d || "linear")
        }
        return w = function(n) {
            if ("undefined" != typeof n) {
                if (n.target !== n.currentTarget) return;
                t(n.target).unbind(O, w)
            } else t(this).unbind(O, w);
            _ = !0,
            t(this).css(y),
            m && m.call(this)
        },
        i > 0 && (this.bind(O, w), setTimeout(function() {
            _ || w.call(T)
        },
        1e3 * (i + g) + 25)),
        this.size() && this.get(0).clientLeft,
        this.css(j),
        0 >= i && setTimeout(function() {
            T.each(function() {
                w.call(this)
            })
        },
        0),
        this
    },
    g = null
} (Zepto),
function(t, n) {
    function e(e, r, i, o, u) {
        "function" != typeof r || u || (u = r, r = n);
        var a = {
            opacity: i
        };
        return o && (a.scale = o, e.css(t.fx.cssPrefix + "transform-origin", "0 0")),
        e.animate(a, r, null, u)
    }
    function r(n, r, i, o) {
        return e(n, r, 0, i,
        function() {
            u.call(t(this)),
            o && o.call(this)
        })
    }
    var i = window.document,
    o = (i.documentElement, t.fn.show),
    u = t.fn.hide,
    a = t.fn.toggle;
    t.fn.showEX = function(t, r) {
        return o.call(this),
        t === n ? t = 0 : this.css("opacity", 0),
        e(this, t, 1, "1,1", r)
    },
    t.fn.hideEX = function(t, e) {
        return t === n ? u.call(this) : r(this, t, "0,0", e)
    },
    t.fn.toggleEX = function(e, r) {
        return e === n || "boolean" == typeof e ? a.call(this, e) : this.each(function() {
            var n = t(this);
            n["none" == n.css("display") ? "show": "hide"](e, r)
        })
    },
    t.fn.fadeTo = function(t, n, r) {
        return e(this, t, n, null, r)
    },
    t.fn.fadeIn = function(t, n) {
        var e = this.css("opacity");
        return e > 0 ? this.css("opacity", 0) : e = 1,
        o.call(this).fadeTo(t, e, n)
    },
    t.fn.fadeOut = function(t, n) {
        return r(this, t, null, n)
    },
    t.fn.fadeToggle = function(n, e) {
        return this.each(function() {
            var r = t(this);
            r[0 == r.css("opacity") || "none" == r.css("display") ? "fadeIn": "fadeOut"](n, e)
        })
    }
} (Zepto),
function(t) {
    t.fn.slideDown = function(t, n) {
        if (1 == arguments.length && "function" == typeof t && (n = t, t = void 0), 2 == arguments.length && "function" == typeof t) {
            var e = t;
            t = n,
            n = e,
            e = void 0
        }
        var r = this,
        i = r.css("position");
        this.css({
            visibility: "hidden"
        }),
        this.css("display", "block");
        var o = r.css("margin-top"),
        u = r.css("margin-bottom"),
        a = r.css("padding-top"),
        s = r.css("padding-bottom"),
        c = r.css("height");
        this.css({
            position: i,
            visibility: "visible",
            overflow: "hidden",
            height: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 0,
            paddingBottom: 0
        }),
        r.animate({
            height: c,
            marginTop: o,
            marginBottom: u,
            paddingTop: a,
            paddingBottom: s
        },
        {
            duration: t,
            queue: !1,
            complete: function() {
                r.css({
                    height: ""
                }),
                void 0 !== n && n()
            }
        })
    },
    t.fn.slideUp = function(t, n) {
        if (1 == arguments.length && "function" == typeof t && (n = t, t = void 0), 2 == arguments.length && "function" == typeof t) {
            var e = t;
            t = n,
            n = e
        }
        if (this.height() > 0) {
            var r = this,
            i = (r.css("position"), r.css("height")),
            o = r.css("margin-top"),
            u = r.css("margin-bottom"),
            a = r.css("padding-top"),
            s = r.css("padding-bottom");
            this.css({
                visibility: "visible",
                overflow: "hidden",
                height: i,
                marginTop: o,
                marginBottom: u,
                paddingTop: a,
                paddingBottom: s
            }),
            r.animate({
                height: 0,
                marginTop: 0,
                marginBottom: 0,
                paddingTop: 0,
                paddingBottom: 0
            },
            {
                duration: t,
                queue: !1,
                complete: function() {
                    r.hide(),
                    r.css({
                        visibility: "visible",
                        overflow: "hidden",
                        height: "",
                        marginTop: o,
                        marginBottom: u,
                        paddingTop: a,
                        paddingBottom: s
                    }),
                    void 0 !== n && n()
                }
            })
        }
    },
    t.fn.slideToggle = function(t, n) {
        0 == this.height() ? this.slideDown(t, n) : this.slideUp(t, n)
    }
} (Zepto);