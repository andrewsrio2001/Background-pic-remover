import {
    t as dt,
    h as V,
    s as ft,
    i as I,
    n as X,
    e as R,
    j as K,
    r as pt
} from "./scheduler.0e38629b.js";
import {
    S as ht,
    i as _t,
    g as S,
    h as P,
    j as L,
    f as A,
    k as st,
    a as rt,
    m as z,
    s as U,
    n as J,
    c as j,
    l as $,
    C as k,
    D as F,
    x as v,
    E as Q
} from "./index.dc9dd07b.js";
import {
    e as Y,
    u as yt,
    d as mt
} from "./each.a9b61413.js";
import {
    d as at,
    w as it,
    r as ct,
    a as bt
} from "./index.e21001b3.js";

function q(n, t) {
    const e = {},
        o = {},
        i = {
            $$scope: 1
        };
    let s = n.length;
    for (; s--;) {
        const u = n[s],
            a = t[s];
        if (a) {
            for (const r in u) r in a || (o[r] = 1);
            for (const r in a) i[r] || (e[r] = a[r], i[r] = 1);
            n[s] = a
        } else
            for (const r in u) i[r] = 1
    }
    for (const u in o) u in e || (e[u] = void 0);
    return e
}

function Et(n) {
    return Object.keys(n).reduce((t, e) => n[e] === void 0 ? t : t + `${e}:${n[e]};`, "")
}
Et({
    position: "absolute",
    opacity: 0,
    "pointer-events": "none",
    margin: 0,
    transform: "translateX(-100%)"
});

function Z(n) {
    function t(e) {
        return e(n), () => {}
    }
    return {
        subscribe: t
    }
}
const M = n => new Proxy(n, {
        get(t, e, o) {
            return Reflect.get(t, e, o)
        },
        ownKeys(t) {
            return Reflect.ownKeys(t).filter(e => e !== "action")
        }
    }),
    x = n => typeof n == "function";

function O(n, t) {
    const {
        stores: e,
        action: o,
        returned: i
    } = t ? ? {}, s = (() => {
        if (e && i) return at(e, a => {
            const r = i(a);
            if (x(r)) {
                const c = (...y) => M({ ...r(...y),
                    [`data-melt-${n}`]: "",
                    action: o ? ? w
                });
                return c.action = o ? ? w, c
            }
            return M({ ...r,
                [`data-melt-${n}`]: "",
                action: o ? ? w
            })
        }); {
            const a = i,
                r = a == null ? void 0 : a();
            if (x(r)) {
                const c = (...y) => M({ ...r(...y),
                    [`data-melt-${n}`]: "",
                    action: o ? ? w
                });
                return c.action = o ? ? w, Z(c)
            }
            return Z(M({ ...r,
                [`data-melt-${n}`]: "",
                action: o ? ? w
            }))
        }
    })(), u = o ? ? (() => {});
    return u.subscribe = s.subscribe, u
}

function vt(n) {
    const t = s => s ? `${n}-${s}` : n,
        e = s => `data-melt-${n}${s?`-${s}`:""}`,
        o = s => `[data-melt-${n}${s?`-${s}`:""}]`;
    return {
        name: t,
        attribute: e,
        selector: o,
        getEl: s => document.querySelector(o(s))
    }
}

function lt(n) {
    return n instanceof HTMLElement
}

function tt(n) {
    return n.pointerType === "touch"
}

function et(...n) {
    return (...t) => {
        for (const e of n) typeof e == "function" && e(...t)
    }
}

function w() {}

function ut(n, t, e, o) {
    const i = Array.isArray(t) ? t : [t];
    return i.forEach(s => n.addEventListener(s, e, o)), () => {
        i.forEach(s => n.removeEventListener(s, e, o))
    }
}

function H(n, t, e, o) {
    const i = Array.isArray(t) ? t : [t];
    if (typeof e == "function") {
        const s = gt(u => e(u));
        return i.forEach(u => n.addEventListener(u, s, o)), () => {
            i.forEach(u => n.removeEventListener(u, s, o))
        }
    }
    return () => void 0
}

function wt(n) {
    const t = n.currentTarget;
    if (!lt(t)) return null;
    const e = new CustomEvent(`m-${n.type}`, {
        detail: {
            originalEvent: n
        },
        cancelable: !0
    });
    return t.dispatchEvent(e), e
}

function gt(n) {
    return t => {
        const e = wt(t);
        if (!(e != null && e.defaultPrevented)) return n(t)
    }
}
let At = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",
    Tt = (n = 21) => {
        let t = "",
            e = n;
        for (; e--;) t += At[Math.random() * 64 | 0];
        return t
    };

function B() {
    return Tt(10)
}
const G = {
    ALT: "Alt",
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
    ARROW_UP: "ArrowUp",
    BACKSPACE: "Backspace",
    CAPS_LOCK: "CapsLock",
    CONTROL: "Control",
    DELETE: "Delete",
    END: "End",
    ENTER: "Enter",
    ESCAPE: "Escape",
    F1: "F1",
    F10: "F10",
    F11: "F11",
    F12: "F12",
    F2: "F2",
    F3: "F3",
    F4: "F4",
    F5: "F5",
    F6: "F6",
    F7: "F7",
    F8: "F8",
    F9: "F9",
    HOME: "Home",
    META: "Meta",
    PAGE_DOWN: "PageDown",
    PAGE_UP: "PageUp",
    SHIFT: "Shift",
    SPACE: " ",
    TAB: "Tab",
    CTRL: "Control",
    ASTERISK: "*",
    A: "a",
    P: "p"
};

function kt(n) {
    const t = {};
    return Object.keys(n).forEach(e => {
        const o = e,
            i = n[o];
        t[o] = it(i)
    }), t
}
ct(void 0, n => {
    function t(o) {
        n(o), n(void 0)
    }
    return ut(document, "pointerup", t, {
        passive: !1,
        capture: !0
    })
});
ct(void 0, n => {
    function t(o) {
        o && o.key === G.ESCAPE && n(o), n(void 0)
    }
    return ut(document, "keydown", t, {
        passive: !1,
        capture: !0
    })
});
const Ft = (n, t = "body") => {
        let e;
        if (!lt(t) && typeof t != "string") return {
            destroy: w
        };
        async function o(s) {
            if (t = s, typeof t == "string") {
                if (e = document.querySelector(t), e === null && (await dt(), e = document.querySelector(t)), e === null) throw new Error(`No element found matching css selector: "${t}"`)
            } else if (t instanceof HTMLElement) e = t;
            else throw new TypeError(`Unknown portal target type: ${t===null?"null":typeof t}. Allowed types: string (CSS selector) or HTMLElement.`);
            n.dataset.portal = "", e.appendChild(n), n.hidden = !1
        }

        function i() {
            n.remove()
        }
        return o(t), {
            update: o,
            destroy: i
        }
    },
    {
        name: W
    } = vt("toast"),
    Dt = {
        closeDelay: 5e3,
        type: "foreground"
    };

function Ct(n) {
    const t = { ...Dt,
            ...n
        },
        e = kt(t),
        {
            closeDelay: o,
            type: i
        } = e,
        s = it(new Map),
        u = l => {
            const f = {
                    closeDelay: V(o),
                    type: V(i),
                    ...l
                },
                d = {
                    content: B(),
                    title: B(),
                    description: B()
                },
                p = f.closeDelay === 0 ? null : window.setTimeout(() => {
                    a(d.content)
                }, f.closeDelay),
                h = () => {
                    const {
                        createdAt: b,
                        pauseDuration: _,
                        closeDelay: m,
                        pausedAt: g
                    } = E;
                    return m === 0 ? 0 : g ? 100 * (g - b - _) / m : 100 * (performance.now() - b - _) / m
                },
                E = {
                    id: d.content,
                    ids: d,
                    ...f,
                    timeout: p,
                    createdAt: performance.now(),
                    pauseDuration: 0,
                    getPercentage: h
                };
            return s.update(b => (b.set(d.content, E), new Map(b))), E
        },
        a = l => {
            s.update(f => (f.delete(l), new Map(f)))
        },
        r = (l, f) => {
            s.update(d => {
                const p = d.get(l);
                return p ? (d.set(l, { ...p,
                    data: f
                }), new Map(d)) : d
            })
        },
        c = O(W("content"), {
            stores: s,
            returned: l => f => {
                const d = l.get(f);
                if (!d) return null;
                const { ...p
                } = d;
                return {
                    id: f,
                    role: "alert",
                    "aria-describedby": p.ids.description,
                    "aria-labelledby": p.ids.title,
                    "aria-live": p.type === "foreground" ? "assertive" : "polite",
                    tabindex: -1
                }
            },
            action: l => {
                let f = w;
                return f = et(H(l, "pointerenter", d => {
                    tt(d) || s.update(p => {
                        const h = p.get(l.id);
                        return !h || h.closeDelay === 0 ? p : (h.timeout !== null && window.clearTimeout(h.timeout), h.pausedAt = performance.now(), new Map(p))
                    })
                }), H(l, "pointerleave", d => {
                    tt(d) || s.update(p => {
                        const h = p.get(l.id);
                        if (!h || h.closeDelay === 0) return p;
                        const E = h.pausedAt ? ? h.createdAt,
                            b = E - h.createdAt - h.pauseDuration,
                            _ = h.closeDelay - b;
                        return h.timeout = window.setTimeout(() => {
                            a(l.id)
                        }, _), h.pauseDuration += performance.now() - E, h.pausedAt = void 0, new Map(p)
                    })
                }), () => {
                    a(l.id)
                }), {
                    destroy: f
                }
            }
        }),
        y = O(W("title"), {
            stores: s,
            returned: l => f => {
                const d = l.get(f);
                return d ? {
                    id: d.ids.title
                } : null
            }
        }),
        T = O(W("description"), {
            stores: s,
            returned: l => f => {
                const d = l.get(f);
                return d ? {
                    id: d.ids.description
                } : null
            }
        }),
        D = O(W("close"), {
            returned: () => l => ({
                type: "button",
                "data-id": l
            }),
            action: l => {
                function f() {
                    l.dataset.id && a(l.dataset.id)
                }
                return {
                    destroy: et(H(l, "click", () => {
                        f()
                    }), H(l, "keydown", p => {
                        p.key !== G.ENTER && p.key !== G.SPACE || (p.preventDefault(), f())
                    }))
                }
            }
        }),
        C = at(s, l => Array.from(l.values()));
    return {
        elements: {
            content: c,
            title: y,
            description: T,
            close: D
        },
        states: {
            toasts: bt(C)
        },
        helpers: {
            addToast: u,
            removeToast: a,
            updateToast: r
        },
        actions: {
            portal: Ft
        },
        options: e
    }
}

function nt(n, t, e) {
    const o = n.slice();
    o[4] = t[e].id, o[5] = t[e].data;
    const i = o[1](o[4]);
    o[6] = i;
    const s = o[2](o[4]);
    o[7] = s;
    const u = o[3](o[4]);
    return o[8] = u, o
}

function ot(n, t) {
    let e, o, i = t[5].title + "",
        s, u, a, r, c, y = t[5].description + "",
        T, D, C, l, f = [t[7]],
        d = {};
    for (let _ = 0; _ < f.length; _ += 1) d = K(d, f[_]);
    let p = [t[6]],
        h = {};
    for (let _ = 0; _ < p.length; _ += 1) h = K(h, p[_]);
    let E = [{
            class: "toastContainer"
        }, t[8]],
        b = {};
    for (let _ = 0; _ < E.length; _ += 1) b = K(b, E[_]);
    return {
        key: n,
        first: null,
        c() {
            e = S("div"), o = S("h3"), s = z(i), u = U(), a = S("span"), r = U(), c = S("div"), T = z(y), D = U(), this.h()
        },
        l(_) {
            e = P(_, "DIV", {
                class: !0
            });
            var m = L(e);
            o = P(m, "H3", {});
            var g = L(o);
            s = J(g, i), u = j(g), a = P(g, "SPAN", {
                class: !0
            }), L(a).forEach(A), g.forEach(A), r = j(m), c = P(m, "DIV", {});
            var N = L(c);
            T = J(N, y), N.forEach(A), D = j(m), m.forEach(A), this.h()
        },
        h() {
            st(a, "class", "svelte-d7cbg4"), $(a, "color", t[5].color), k(o, d), $(o, "color", t[5].color), F(o, "svelte-d7cbg4", !0), k(c, h), F(c, "svelte-d7cbg4", !0), k(e, b), F(e, "svelte-d7cbg4", !0), this.first = e
        },
        m(_, m) {
            rt(_, e, m), v(e, o), v(o, s), v(o, u), v(o, a), v(e, r), v(e, c), v(c, T), v(e, D), C || (l = [I(t[7].action(o)), I(t[6].action(c)), I(t[8].action(e))], C = !0)
        },
        p(_, m) {
            t = _, m & 1 && i !== (i = t[5].title + "") && Q(s, i, d.contenteditable), m & 1 && $(a, "color", t[5].color), k(o, d = q(f, [m & 5 && t[7]])), $(o, "color", t[5].color), F(o, "svelte-d7cbg4", !0), m & 1 && y !== (y = t[5].description + "") && Q(T, y, h.contenteditable), k(c, h = q(p, [m & 3 && t[6]])), F(c, "svelte-d7cbg4", !0), k(e, b = q(E, [{
                class: "toastContainer"
            }, m & 9 && t[8]])), F(e, "svelte-d7cbg4", !0)
        },
        d(_) {
            _ && A(e), C = !1, pt(l)
        }
    }
}

function St(n) {
    let t, e = [],
        o = new Map,
        i, s, u = Y(n[0]);
    const a = r => r[4];
    for (let r = 0; r < u.length; r += 1) {
        let c = nt(n, u, r),
            y = a(c);
        o.set(y, e[r] = ot(y, c))
    }
    return {
        c() {
            t = S("div");
            for (let r = 0; r < e.length; r += 1) e[r].c();
            this.h()
        },
        l(r) {
            t = P(r, "DIV", {
                class: !0
            });
            var c = L(t);
            for (let y = 0; y < e.length; y += 1) e[y].l(c);
            c.forEach(A), this.h()
        },
        h() {
            st(t, "class", "toastPortal svelte-d7cbg4")
        },
        m(r, c) {
            rt(r, t, c);
            for (let y = 0; y < e.length; y += 1) e[y] && e[y].m(t, null);
            i || (s = I(Ot.call(null, t)), i = !0)
        },
        p(r, [c]) {
            c & 15 && (u = Y(r[0]), e = yt(e, c, a, 1, r, u, o, t, mt, ot, null, nt))
        },
        i: X,
        o: X,
        d(r) {
            r && A(t);
            for (let c = 0; c < e.length; c += 1) e[c].d();
            i = !1, s()
        }
    }
}
const {
    elements: {
        content: Pt,
        title: Lt,
        description: Rt
    },
    helpers: $t,
    states: {
        toasts: Mt
    },
    actions: {
        portal: Ot
    }
} = Ct(), Ut = $t.addToast;

function Ht(n, t, e) {
    let o, i, s, u;
    return R(n, Mt, a => e(0, o = a)), R(n, Rt, a => e(1, i = a)), R(n, Lt, a => e(2, s = a)), R(n, Pt, a => e(3, u = a)), [o, i, s, u]
}
class jt extends ht {
    constructor(t) {
        super(), _t(this, t, Ht, St, ft, {})
    }
}
export {
    jt as T, Ut as a
};