var S = Object.defineProperty;
var C = (e, t, n) => t in e ? S(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var p = (e, t, n) => (C(e, typeof t != "symbol" ? t + "" : t, n), n);
import {
    m as B,
    r as m,
    n as y,
    p as w,
    q as O,
    l as A,
    v as j,
    w as b,
    x as T,
    y as I,
    z as N,
    A as L,
    B as P,
    C as D
} from "./scheduler.0e38629b.js";
let $ = !1;

function q() {
    $ = !0
}

function z() {
    $ = !1
}

function H(e, t, n, i) {
    for (; e < t;) {
        const a = e + (t - e >> 1);
        n(a) <= i ? e = a + 1 : t = a
    }
    return e
}

function M(e) {
    if (e.hydrate_init) return;
    e.hydrate_init = !0;
    let t = e.childNodes;
    if (e.nodeName === "HEAD") {
        const r = [];
        for (let s = 0; s < t.length; s++) {
            const o = t[s];
            o.claim_order !== void 0 && r.push(o)
        }
        t = r
    }
    const n = new Int32Array(t.length + 1),
        i = new Int32Array(t.length);
    n[0] = -1;
    let a = 0;
    for (let r = 0; r < t.length; r++) {
        const s = t[r].claim_order,
            o = (a > 0 && t[n[a]].claim_order <= s ? a + 1 : H(1, a, d => t[n[d]].claim_order, s)) - 1;
        i[r] = n[o] + 1;
        const u = o + 1;
        n[u] = r, a = Math.max(u, a)
    }
    const f = [],
        l = [];
    let c = t.length - 1;
    for (let r = n[a] + 1; r != 0; r = i[r - 1]) {
        for (f.push(t[r - 1]); c >= r; c--) l.push(t[c]);
        c--
    }
    for (; c >= 0; c--) l.push(t[c]);
    f.reverse(), l.sort((r, s) => r.claim_order - s.claim_order);
    for (let r = 0, s = 0; r < l.length; r++) {
        for (; s < f.length && l[r].claim_order >= f[s].claim_order;) s++;
        const o = s < f.length ? f[s] : null;
        e.insertBefore(l[r], o)
    }
}

function R(e, t) {
    if ($) {
        for (M(e), (e.actual_end_child === void 0 || e.actual_end_child !== null && e.actual_end_child.parentNode !== e) && (e.actual_end_child = e.firstChild); e.actual_end_child !== null && e.actual_end_child.claim_order === void 0;) e.actual_end_child = e.actual_end_child.nextSibling;
        t !== e.actual_end_child ? (t.claim_order !== void 0 || t.parentNode !== e) && e.insertBefore(t, e.actual_end_child) : e.actual_end_child = t.nextSibling
    } else(t.parentNode !== e || t.nextSibling !== null) && e.appendChild(t)
}

function se(e, t, n) {
    $ && !n ? R(e, t) : (t.parentNode !== e || t.nextSibling != n) && e.insertBefore(t, n || null)
}

function U(e) {
    e.parentNode && e.parentNode.removeChild(e)
}

function le(e, t) {
    for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t)
}

function V(e) {
    return document.createElement(e)
}

function x(e) {
    return document.createTextNode(e)
}

function ae() {
    return x(" ")
}

function ce() {
    return x("")
}

function fe(e, t, n, i) {
    return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i)
}

function W(e, t, n) {
    n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
}
const F = ["width", "height"];

function ue(e, t) {
    const n = Object.getOwnPropertyDescriptors(e.__proto__);
    for (const i in t) t[i] == null ? e.removeAttribute(i) : i === "style" ? e.style.cssText = t[i] : i === "__value" ? e.value = e[i] = t[i] : n[i] && n[i].set && F.indexOf(i) === -1 ? e[i] = t[i] : W(e, i, t[i])
}

function oe(e) {
    return e.dataset.svelteH
}

function G(e) {
    return Array.from(e.childNodes)
}

function J(e) {
    e.claim_info === void 0 && (e.claim_info = {
        last_index: 0,
        total_claimed: 0
    })
}

function E(e, t, n, i, a = !1) {
    J(e);
    const f = (() => {
        for (let l = e.claim_info.last_index; l < e.length; l++) {
            const c = e[l];
            if (t(c)) {
                const r = n(c);
                return r === void 0 ? e.splice(l, 1) : e[l] = r, a || (e.claim_info.last_index = l), c
            }
        }
        for (let l = e.claim_info.last_index - 1; l >= 0; l--) {
            const c = e[l];
            if (t(c)) {
                const r = n(c);
                return r === void 0 ? e.splice(l, 1) : e[l] = r, a ? r === void 0 && e.claim_info.last_index-- : e.claim_info.last_index = l, c
            }
        }
        return i()
    })();
    return f.claim_order = e.claim_info.total_claimed, e.claim_info.total_claimed += 1, f
}

function K(e, t, n, i) {
    return E(e, a => a.nodeName === t, a => {
        const f = [];
        for (let l = 0; l < a.attributes.length; l++) {
            const c = a.attributes[l];
            n[c.name] || f.push(c.name)
        }
        f.forEach(l => a.removeAttribute(l))
    }, () => i(t))
}

function _e(e, t, n) {
    return K(e, t, n, V)
}

function Q(e, t) {
    return E(e, n => n.nodeType === 3, n => {
        const i = "" + t;
        if (n.data.startsWith(i)) {
            if (n.data.length !== i.length) return n.splitText(i.length)
        } else n.data = i
    }, () => x(t), !0)
}

function de(e) {
    return Q(e, " ")
}

function X(e, t) {
    t = "" + t, e.data !== t && (e.data = t)
}

function Y(e, t) {
    t = "" + t, e.wholeText !== t && (e.data = t)
}

function he(e, t, n) {
    ~B.indexOf(n) ? Y(e, t) : X(e, t)
}

function me(e, t) {
    e.value = t ? ? ""
}

function $e(e, t, n, i) {
    n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, i ? "important" : "")
}

function pe(e, t, n) {
    e.classList.toggle(t, !!n)
}

function ye(e, t) {
    return new e(t)
}
const h = new Set;
let _;

function xe() {
    _ = {
        r: 0,
        c: [],
        p: _
    }
}

function ge() {
    _.r || m(_.c), _ = _.p
}

function Z(e, t) {
    e && e.i && (h.delete(e), e.i(t))
}

function ve(e, t, n, i) {
    if (e && e.o) {
        if (h.has(e)) return;
        h.add(e), _.c.push(() => {
            h.delete(e), i && (n && e.d(1), i())
        }), e.o(t)
    } else i && i()
}

function we(e) {
    e && e.c()
}

function be(e, t) {
    e && e.l(t)
}

function k(e, t, n) {
    const {
        fragment: i,
        after_update: a
    } = e.$$;
    i && i.m(t, n), b(() => {
        const f = e.$$.on_mount.map(L).filter(A);
        e.$$.on_destroy ? e.$$.on_destroy.push(...f) : m(f), e.$$.on_mount = []
    }), a.forEach(b)
}

function ee(e, t) {
    const n = e.$$;
    n.fragment !== null && (T(n.after_update), m(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = [])
}

function te(e, t) {
    e.$$.dirty[0] === -1 && (P.push(e), D(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
}

function Ne(e, t, n, i, a, f, l = null, c = [-1]) {
    const r = I;
    N(e);
    const s = e.$$ = {
        fragment: null,
        ctx: [],
        props: f,
        update: y,
        not_equal: a,
        bound: w(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(t.context || (r ? r.$$.context : [])),
        callbacks: w(),
        dirty: c,
        skip_bound: !1,
        root: t.target || r.$$.root
    };
    l && l(s.root);
    let o = !1;
    if (s.ctx = n ? n(e, t.props || {}, (u, d, ...g) => {
            const v = g.length ? g[0] : d;
            return s.ctx && a(s.ctx[u], s.ctx[u] = v) && (!s.skip_bound && s.bound[u] && s.bound[u](v), o && te(e, u)), d
        }) : [], s.update(), o = !0, m(s.before_update), s.fragment = i ? i(s.ctx) : !1, t.target) {
        if (t.hydrate) {
            q();
            const u = G(t.target);
            s.fragment && s.fragment.l(u), u.forEach(U)
        } else s.fragment && s.fragment.c();
        t.intro && Z(e.$$.fragment), k(e, t.target, t.anchor), z(), O()
    }
    N(r)
}
class Ae {
    constructor() {
        p(this, "$$");
        p(this, "$$set")
    }
    $destroy() {
        ee(this, 1), this.$destroy = y
    }
    $on(t, n) {
        if (!A(n)) return y;
        const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return i.push(n), () => {
            const a = i.indexOf(n);
            a !== -1 && i.splice(a, 1)
        }
    }
    $set(t) {
        this.$$set && !j(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
    }
}
const ne = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(ne);
export {
    me as A, le as B, ue as C, pe as D, he as E, Ae as S, se as a, ge as b, de as c, Z as d, ce as e, U as f, V as g, _e as h, Ne as i, G as j, W as k, $e as l, x as m, Q as n, X as o, xe as p, ye as q, we as r, ae as s, ve as t, be as u, k as v, ee as w, R as x, oe as y, fe as z
};