import {
    s as m,
    c as u,
    u as _,
    g as c,
    d as p
} from "../chunks/scheduler.0e38629b.js";
import {
    S as $,
    i as d,
    r as g,
    s as y,
    u as v,
    c as w,
    v as S,
    a as T,
    d as l,
    t as f,
    f as b,
    w as q
} from "../chunks/index.dc9dd07b.js";
import {
    T as C
} from "../chunks/Toaster.95d05369.js";

function L(n) {
    let e, o, a;
    e = new C({});
    const r = n[1].default,
        s = u(r, n, n[0], null);
    return {
        c() {
            g(e.$$.fragment), o = y(), s && s.c()
        },
        l(t) {
            v(e.$$.fragment, t), o = w(t), s && s.l(t)
        },
        m(t, i) {
            S(e, t, i), T(t, o, i), s && s.m(t, i), a = !0
        },
        p(t, [i]) {
            s && s.p && (!a || i & 1) && _(s, r, t, t[0], a ? p(r, t[0], i, null) : c(t[0]), null)
        },
        i(t) {
            a || (l(e.$$.fragment, t), l(s, t), a = !0)
        },
        o(t) {
            f(e.$$.fragment, t), f(s, t), a = !1
        },
        d(t) {
            t && b(o), q(e, t), s && s.d(t)
        }
    }
}

function h(n, e, o) {
    let {
        $$slots: a = {},
        $$scope: r
    } = e;
    return n.$$set = s => {
        "$$scope" in s && o(0, r = s.$$scope)
    }, [r, a]
}
class A extends $ {
    constructor(e) {
        super(), d(this, e, h, L, m, {})
    }
}
export {
    A as component
};