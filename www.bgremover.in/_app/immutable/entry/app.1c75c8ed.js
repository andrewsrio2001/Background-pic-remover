import {
    s as q,
    a as B,
    o as U,
    t as j,
    b as I
} from "../chunks/scheduler.0e38629b.js";
import {
    S as W,
    i as z,
    s as F,
    e as h,
    c as G,
    a as E,
    t as d,
    b as P,
    d as g,
    f as w,
    g as H,
    h as J,
    j as K,
    k as O,
    l as p,
    m as M,
    n as Q,
    o as X,
    p as D,
    q as v,
    r as k,
    u as T,
    v as R,
    w as L
} from "../chunks/index.dc9dd07b.js";
const Y = "modulepreload",
    Z = function(o, e) {
        return new URL(o, e).href
    },
    V = {},
    m = function(e, n, i) {
        if (!n || n.length === 0) return e();
        const r = document.getElementsByTagName("link");
        return Promise.all(n.map(f => {
            if (f = Z(f, i), f in V) return;
            V[f] = !0;
            const t = f.endsWith(".css"),
                s = t ? '[rel="stylesheet"]' : "";
            if (!!i)
                for (let a = r.length - 1; a >= 0; a--) {
                    const u = r[a];
                    if (u.href === f && (!t || u.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${f}"]${s}`)) return;
            const _ = document.createElement("link");
            if (_.rel = t ? "stylesheet" : Y, t || (_.as = "script", _.crossOrigin = ""), _.href = f, document.head.appendChild(_), t) return new Promise((a, u) => {
                _.addEventListener("load", a), _.addEventListener("error", () => u(new Error(`Unable to preload CSS for ${f}`)))
            })
        })).then(() => e()).catch(f => {
            const t = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (t.payload = f, window.dispatchEvent(t), !t.defaultPrevented) throw f
        })
    },
    se = {};

function $(o) {
    let e, n, i;
    var r = o[1][0];

    function f(t, s) {
        return {
            props: {
                data: t[3],
                form: t[2]
            }
        }
    }
    return r && (e = v(r, f(o)), o[12](e)), {
        c() {
            e && k(e.$$.fragment), n = h()
        },
        l(t) {
            e && T(e.$$.fragment, t), n = h()
        },
        m(t, s) {
            e && R(e, t, s), E(t, n, s), i = !0
        },
        p(t, s) {
            if (s & 2 && r !== (r = t[1][0])) {
                if (e) {
                    D();
                    const l = e;
                    d(l.$$.fragment, 1, 0, () => {
                        L(l, 1)
                    }), P()
                }
                r ? (e = v(r, f(t)), t[12](e), k(e.$$.fragment), g(e.$$.fragment, 1), R(e, n.parentNode, n)) : e = null
            } else if (r) {
                const l = {};
                s & 8 && (l.data = t[3]), s & 4 && (l.form = t[2]), e.$set(l)
            }
        },
        i(t) {
            i || (e && g(e.$$.fragment, t), i = !0)
        },
        o(t) {
            e && d(e.$$.fragment, t), i = !1
        },
        d(t) {
            t && w(n), o[12](null), e && L(e, t)
        }
    }
}

function x(o) {
    let e, n, i;
    var r = o[1][0];

    function f(t, s) {
        return {
            props: {
                data: t[3],
                $$slots: {
                    default: [ee]
                },
                $$scope: {
                    ctx: t
                }
            }
        }
    }
    return r && (e = v(r, f(o)), o[11](e)), {
        c() {
            e && k(e.$$.fragment), n = h()
        },
        l(t) {
            e && T(e.$$.fragment, t), n = h()
        },
        m(t, s) {
            e && R(e, t, s), E(t, n, s), i = !0
        },
        p(t, s) {
            if (s & 2 && r !== (r = t[1][0])) {
                if (e) {
                    D();
                    const l = e;
                    d(l.$$.fragment, 1, 0, () => {
                        L(l, 1)
                    }), P()
                }
                r ? (e = v(r, f(t)), t[11](e), k(e.$$.fragment), g(e.$$.fragment, 1), R(e, n.parentNode, n)) : e = null
            } else if (r) {
                const l = {};
                s & 8 && (l.data = t[3]), s & 8215 && (l.$$scope = {
                    dirty: s,
                    ctx: t
                }), e.$set(l)
            }
        },
        i(t) {
            i || (e && g(e.$$.fragment, t), i = !0)
        },
        o(t) {
            e && d(e.$$.fragment, t), i = !1
        },
        d(t) {
            t && w(n), o[11](null), e && L(e, t)
        }
    }
}

function ee(o) {
    let e, n, i;
    var r = o[1][1];

    function f(t, s) {
        return {
            props: {
                data: t[4],
                form: t[2]
            }
        }
    }
    return r && (e = v(r, f(o)), o[10](e)), {
        c() {
            e && k(e.$$.fragment), n = h()
        },
        l(t) {
            e && T(e.$$.fragment, t), n = h()
        },
        m(t, s) {
            e && R(e, t, s), E(t, n, s), i = !0
        },
        p(t, s) {
            if (s & 2 && r !== (r = t[1][1])) {
                if (e) {
                    D();
                    const l = e;
                    d(l.$$.fragment, 1, 0, () => {
                        L(l, 1)
                    }), P()
                }
                r ? (e = v(r, f(t)), t[10](e), k(e.$$.fragment), g(e.$$.fragment, 1), R(e, n.parentNode, n)) : e = null
            } else if (r) {
                const l = {};
                s & 16 && (l.data = t[4]), s & 4 && (l.form = t[2]), e.$set(l)
            }
        },
        i(t) {
            i || (e && g(e.$$.fragment, t), i = !0)
        },
        o(t) {
            e && d(e.$$.fragment, t), i = !1
        },
        d(t) {
            t && w(n), o[10](null), e && L(e, t)
        }
    }
}

function y(o) {
    let e, n = o[6] && A(o);
    return {
        c() {
            e = H("div"), n && n.c(), this.h()
        },
        l(i) {
            e = J(i, "DIV", {
                id: !0,
                "aria-live": !0,
                "aria-atomic": !0,
                style: !0
            });
            var r = K(e);
            n && n.l(r), r.forEach(w), this.h()
        },
        h() {
            O(e, "id", "svelte-announcer"), O(e, "aria-live", "assertive"), O(e, "aria-atomic", "true"), p(e, "position", "absolute"), p(e, "left", "0"), p(e, "top", "0"), p(e, "clip", "rect(0 0 0 0)"), p(e, "clip-path", "inset(50%)"), p(e, "overflow", "hidden"), p(e, "white-space", "nowrap"), p(e, "width", "1px"), p(e, "height", "1px")
        },
        m(i, r) {
            E(i, e, r), n && n.m(e, null)
        },
        p(i, r) {
            i[6] ? n ? n.p(i, r) : (n = A(i), n.c(), n.m(e, null)) : n && (n.d(1), n = null)
        },
        d(i) {
            i && w(e), n && n.d()
        }
    }
}

function A(o) {
    let e;
    return {
        c() {
            e = M(o[7])
        },
        l(n) {
            e = Q(n, o[7])
        },
        m(n, i) {
            E(n, e, i)
        },
        p(n, i) {
            i & 128 && X(e, n[7])
        },
        d(n) {
            n && w(e)
        }
    }
}

function te(o) {
    let e, n, i, r, f;
    const t = [x, $],
        s = [];

    function l(a, u) {
        return a[1][1] ? 0 : 1
    }
    e = l(o), n = s[e] = t[e](o);
    let _ = o[5] && y(o);
    return {
        c() {
            n.c(), i = F(), _ && _.c(), r = h()
        },
        l(a) {
            n.l(a), i = G(a), _ && _.l(a), r = h()
        },
        m(a, u) {
            s[e].m(a, u), E(a, i, u), _ && _.m(a, u), E(a, r, u), f = !0
        },
        p(a, [u]) {
            let b = e;
            e = l(a), e === b ? s[e].p(a, u) : (D(), d(s[b], 1, 1, () => {
                s[b] = null
            }), P(), n = s[e], n ? n.p(a, u) : (n = s[e] = t[e](a), n.c()), g(n, 1), n.m(i.parentNode, i)), a[5] ? _ ? _.p(a, u) : (_ = y(a), _.c(), _.m(r.parentNode, r)) : _ && (_.d(1), _ = null)
        },
        i(a) {
            f || (g(n), f = !0)
        },
        o(a) {
            d(n), f = !1
        },
        d(a) {
            a && (w(i), w(r)), s[e].d(a), _ && _.d(a)
        }
    }
}

function ne(o, e, n) {
    let {
        stores: i
    } = e, {
        page: r
    } = e, {
        constructors: f
    } = e, {
        components: t = []
    } = e, {
        form: s
    } = e, {
        data_0: l = null
    } = e, {
        data_1: _ = null
    } = e;
    B(i.page.notify);
    let a = !1,
        u = !1,
        b = null;
    U(() => {
        const c = i.page.subscribe(() => {
            a && (n(6, u = !0), j().then(() => {
                n(7, b = document.title || "untitled page")
            }))
        });
        return n(5, a = !0), c
    });

    function N(c) {
        I[c ? "unshift" : "push"](() => {
            t[1] = c, n(0, t)
        })
    }

    function S(c) {
        I[c ? "unshift" : "push"](() => {
            t[0] = c, n(0, t)
        })
    }

    function C(c) {
        I[c ? "unshift" : "push"](() => {
            t[0] = c, n(0, t)
        })
    }
    return o.$$set = c => {
        "stores" in c && n(8, i = c.stores), "page" in c && n(9, r = c.page), "constructors" in c && n(1, f = c.constructors), "components" in c && n(0, t = c.components), "form" in c && n(2, s = c.form), "data_0" in c && n(3, l = c.data_0), "data_1" in c && n(4, _ = c.data_1)
    }, o.$$.update = () => {
        o.$$.dirty & 768 && i.page.set(r)
    }, [t, f, s, l, _, a, u, b, i, r, N, S, C]
}
class oe extends W {
    constructor(e) {
        super(), z(this, e, ne, te, q, {
            stores: 8,
            page: 9,
            constructors: 1,
            components: 0,
            form: 2,
            data_0: 3,
            data_1: 4
        })
    }
}
const ae = [() => m(() =>
        import ("../nodes/0.f45df66c.js"), ["../nodes/0.f45df66c.js", "../chunks/scheduler.0e38629b.js", "../chunks/index.dc9dd07b.js", "../chunks/Toaster.95d05369.js", "../chunks/each.a9b61413.js", "../chunks/index.e21001b3.js", "../assets/Toaster.db50ff62.css", "../assets/0.beb8cd4f.css"],
        import.meta.url), () => m(() =>
        import ("../nodes/1.77544e30.js"), ["../nodes/1.77544e30.js", "../chunks/scheduler.0e38629b.js", "../chunks/index.dc9dd07b.js", "../chunks/stores.cff5975d.js", "../chunks/singletons.fe2b939d.js", "../chunks/index.e21001b3.js"],
        import.meta.url), () => m(() =>
        import ("../nodes/2.e2ed510c.js"), ["../nodes/2.e2ed510c.js", "../chunks/scheduler.0e38629b.js", "../chunks/index.dc9dd07b.js", "../chunks/user.5ed89ddd.js", "../chunks/index.e21001b3.js", "../chunks/singletons.fe2b939d.js", "../assets/2.35c3fb6d.css"],
        import.meta.url), () => m(() =>
        import ("../nodes/3.24799cab.js"), ["../nodes/3.24799cab.js", "../chunks/scheduler.0e38629b.js", "../chunks/index.dc9dd07b.js", "../chunks/user.5ed89ddd.js", "../chunks/index.e21001b3.js", "../chunks/singletons.fe2b939d.js", "../chunks/storage.b47a2378.js", "../chunks/toast.bbf44a00.js", "../chunks/Toaster.95d05369.js", "../chunks/each.a9b61413.js", "../assets/Toaster.db50ff62.css", "../chunks/VerifyLogin.c71d1df0.js", "../assets/VerifyLogin.65014455.css", "../assets/3.5cc0a2c2.css"],
        import.meta.url), () => m(() =>
        import ("../nodes/4.ae26bb6a.js"), ["../nodes/4.ae26bb6a.js", "../chunks/scheduler.0e38629b.js", "../chunks/index.dc9dd07b.js", "../chunks/user.5ed89ddd.js", "../chunks/index.e21001b3.js", "../chunks/singletons.fe2b939d.js", "../chunks/toast.bbf44a00.js", "../chunks/Toaster.95d05369.js", "../chunks/each.a9b61413.js", "../assets/Toaster.db50ff62.css", "../chunks/AlreadyLoggedIn.596670e7.js", "../assets/AlreadyLoggedIn.62b96f80.css", "../assets/4.7be73d66.css"],
        import.meta.url), () => m(() =>
        import ("../nodes/5.78a901a2.js"), ["../nodes/5.78a901a2.js", "../chunks/scheduler.0e38629b.js", "../chunks/index.dc9dd07b.js", "../chunks/user.5ed89ddd.js", "../chunks/index.e21001b3.js", "../chunks/singletons.fe2b939d.js", "../chunks/toast.bbf44a00.js", "../chunks/Toaster.95d05369.js", "../chunks/each.a9b61413.js", "../assets/Toaster.db50ff62.css"],
        import.meta.url), () => m(() =>
        import ("../nodes/6.496ecf5a.js"), ["../nodes/6.496ecf5a.js", "../chunks/scheduler.0e38629b.js", "../chunks/index.dc9dd07b.js", "../chunks/user.5ed89ddd.js", "../chunks/index.e21001b3.js", "../chunks/singletons.fe2b939d.js", "../chunks/toast.bbf44a00.js", "../chunks/Toaster.95d05369.js", "../chunks/each.a9b61413.js", "../assets/Toaster.db50ff62.css", "../chunks/AlreadyLoggedIn.596670e7.js", "../assets/AlreadyLoggedIn.62b96f80.css", "../assets/6.d068f78a.css"],
        import.meta.url), () => m(() =>
        import ("../nodes/7.9d8e5661.js"), ["../nodes/7.9d8e5661.js", "../chunks/scheduler.0e38629b.js", "../chunks/index.dc9dd07b.js", "../chunks/user.5ed89ddd.js", "../chunks/index.e21001b3.js", "../chunks/singletons.fe2b939d.js", "../chunks/toast.bbf44a00.js", "../chunks/Toaster.95d05369.js", "../chunks/each.a9b61413.js", "../assets/Toaster.db50ff62.css"],
        import.meta.url), () => m(() =>
        import ("../nodes/8.d560f4c4.js"), ["../nodes/8.d560f4c4.js", "../chunks/scheduler.0e38629b.js", "../chunks/index.dc9dd07b.js", "../chunks/stores.cff5975d.js", "../chunks/singletons.fe2b939d.js", "../chunks/index.e21001b3.js", "../chunks/user.5ed89ddd.js", "../chunks/toast.bbf44a00.js", "../chunks/Toaster.95d05369.js", "../chunks/each.a9b61413.js", "../assets/Toaster.db50ff62.css"],
        import.meta.url), () => m(() =>
        import ("../nodes/9.844268a6.js"), ["../nodes/9.844268a6.js", "../chunks/storage.b47a2378.js", "../chunks/user.5ed89ddd.js", "../chunks/index.e21001b3.js", "../chunks/scheduler.0e38629b.js", "../chunks/singletons.fe2b939d.js", "../chunks/index.dc9dd07b.js", "../chunks/each.a9b61413.js", "../chunks/VerifyLogin.c71d1df0.js", "../assets/VerifyLogin.65014455.css", "../chunks/IsAnonymous.ca6b1c2b.js", "../assets/AlreadyLoggedIn.62b96f80.css", "../assets/9.af13fb89.css"],
        import.meta.url), () => m(() =>
        import ("../nodes/10.3313f9ec.js"), ["../nodes/10.3313f9ec.js", "../chunks/scheduler.0e38629b.js", "../chunks/index.dc9dd07b.js", "../chunks/user.5ed89ddd.js", "../chunks/index.e21001b3.js", "../chunks/singletons.fe2b939d.js", "../chunks/toast.bbf44a00.js", "../chunks/Toaster.95d05369.js", "../chunks/each.a9b61413.js", "../assets/Toaster.db50ff62.css", "../chunks/VerifyLogin.c71d1df0.js", "../assets/VerifyLogin.65014455.css", "../chunks/IsAnonymous.ca6b1c2b.js", "../assets/AlreadyLoggedIn.62b96f80.css", "../assets/10.8aff46d7.css"],
        import.meta.url)],
    le = [],
    fe = {
        "/": [2],
        "/app": [3],
        "/auth/login": [4],
        "/auth/logout": [5],
        "/auth/register": [6],
        "/auth/reset": [7],
        "/auth/reset/complete": [8],
        "/profile": [9],
        "/profile/settings": [10]
    },
    _e = {
        handleError: ({
            error: o
        }) => {
            console.error(o)
        }
    };
export {
    fe as dictionary, _e as hooks, se as matchers, ae as nodes, oe as root, le as server_loads
};