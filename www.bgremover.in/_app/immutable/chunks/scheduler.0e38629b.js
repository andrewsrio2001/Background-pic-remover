function y() {}

function v(t, n) {
    for (const e in n) t[e] = n[e];
    return t
}

function j(t) {
    return t()
}

function B() {
    return Object.create(null)
}

function E(t) {
    t.forEach(j)
}

function q(t) {
    return typeof t == "function"
}

function C(t, n) {
    return t != t ? n == n : t !== n || t && typeof t == "object" || typeof t == "function"
}
let i;

function F(t, n) {
    return t === n ? !0 : (i || (i = document.createElement("a")), i.href = n, t === i.href)
}

function P(t) {
    return Object.keys(t).length === 0
}

function m(t, ...n) {
    if (t == null) {
        for (const r of n) r(void 0);
        return y
    }
    const e = t.subscribe(...n);
    return e.unsubscribe ? () => e.unsubscribe() : e
}

function S(t) {
    let n;
    return m(t, e => n = e)(), n
}

function U(t, n, e) {
    t.$$.on_destroy.push(m(n, e))
}

function D(t, n, e, r) {
    if (t) {
        const o = x(t, n, e, r);
        return t[0](o)
    }
}

function x(t, n, e, r) {
    return t[1] && r ? v(e.ctx.slice(), t[1](r(n))) : e.ctx
}

function G(t, n, e, r) {
    if (t[2] && r) {
        const o = t[2](r(e));
        if (n.dirty === void 0) return o;
        if (typeof o == "object") {
            const l = [],
                _ = Math.max(n.dirty.length, o.length);
            for (let s = 0; s < _; s += 1) l[s] = n.dirty[s] | o[s];
            return l
        }
        return n.dirty | o
    }
    return n.dirty
}

function H(t, n, e, r, o, l) {
    if (o) {
        const _ = x(n, e, r, l);
        t.p(_, o)
    }
}

function I(t) {
    if (t.ctx.length > 32) {
        const n = [],
            e = t.ctx.length / 32;
        for (let r = 0; r < e; r++) n[r] = -1;
        return n
    }
    return -1
}

function J(t) {
    return t && q(t.destroy) ? t.destroy : y
}
const K = ["", !0, 1, "true", "contenteditable"];
let f;

function d(t) {
    f = t
}

function k() {
    if (!f) throw new Error("Function called outside component initialization");
    return f
}

function L(t) {
    k().$$.on_mount.push(t)
}

function N(t) {
    k().$$.after_update.push(t)
}
const a = [],
    b = [];
let c = [];
const g = [],
    w = Promise.resolve();
let p = !1;

function O() {
    p || (p = !0, w.then(M))
}

function Q() {
    return O(), w
}

function z(t) {
    c.push(t)
}
const h = new Set;
let u = 0;

function M() {
    if (u !== 0) return;
    const t = f;
    do {
        try {
            for (; u < a.length;) {
                const n = a[u];
                u++, d(n), A(n.$$)
            }
        } catch (n) {
            throw a.length = 0, u = 0, n
        }
        for (d(null), a.length = 0, u = 0; b.length;) b.pop()();
        for (let n = 0; n < c.length; n += 1) {
            const e = c[n];
            h.has(e) || (h.add(e), e())
        }
        c.length = 0
    } while (a.length);
    for (; g.length;) g.pop()();
    p = !1, h.clear(), d(t)
}

function A(t) {
    if (t.fragment !== null) {
        t.update(), E(t.before_update);
        const n = t.dirty;
        t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(z)
    }
}

function R(t) {
    const n = [],
        e = [];
    c.forEach(r => t.indexOf(r) === -1 ? n.push(r) : e.push(r)), e.forEach(r => r()), c = n
}
export {
    j as A, a as B, O as C, N as a, b, D as c, G as d, U as e, F as f, I as g, S as h, J as i, v as j, m as k, q as l, K as m, y as n, L as o, B as p, M as q, E as r, C as s, Q as t, H as u, P as v, z as w, R as x, f as y, d as z
};