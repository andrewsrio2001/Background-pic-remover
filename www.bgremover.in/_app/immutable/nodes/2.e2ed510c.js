import {
    s as G,
    f as H,
    n as O,
    e as N
} from "../chunks/scheduler.0e38629b.js";
import {
    S as U,
    i as $,
    g as f,
    s as x,
    h as v,
    j as E,
    c as k,
    y as m,
    f as C,
    k as a,
    a as q,
    x as d,
    z as S
} from "../chunks/index.dc9dd07b.js";
import {
    u as I,
    g as R
} from "../chunks/user.5ed89ddd.js";

function j(i) {
    let t, s = "Login",
        n, r;
    return {
        c() {
            t = f("button"), t.textContent = s, this.h()
        },
        l(e) {
            t = v(e, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), m(t) !== "svelte-kzpaic" && (t.textContent = s), this.h()
        },
        h() {
            a(t, "class", "svelte-16u53xv")
        },
        m(e, h) {
            q(e, t, h), n || (r = S(t, "click", i[2]), n = !0)
        },
        d(e) {
            e && C(t), n = !1, r()
        }
    }
}

function A(i) {
    let t, s = "Get Started",
        n, r;
    return {
        c() {
            t = f("button"), t.textContent = s, this.h()
        },
        l(e) {
            t = v(e, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), m(t) !== "svelte-1az326z" && (t.textContent = s), this.h()
        },
        h() {
            a(t, "class", "svelte-16u53xv")
        },
        m(e, h) {
            q(e, t, h), n || (r = S(t, "click", i[1]), n = !0)
        },
        d(e) {
            e && C(t), n = !1, r()
        }
    }
}

function F(i) {
    let t, s, n, r, e, h = "Background Remover",
        b, _, B = "Remove the background from your headshot!",
        y, p, o, T = "Find Us On GitHub";

    function z(c, l) {
        return c[0] ? A : j
    }
    let g = z(i),
        u = g(i);
    return {
        c() {
            t = f("section"), s = f("img"), r = x(), e = f("h1"), e.textContent = h, b = x(), _ = f("h2"), _.textContent = B, y = x(), u.c(), p = x(), o = f("a"), o.textContent = T, this.h()
        },
        l(c) {
            t = v(c, "SECTION", {
                id: !0,
                class: !0
            });
            var l = E(t);
            s = v(l, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), r = k(l), e = v(l, "H1", {
                class: !0,
                "data-svelte-h": !0
            }), m(e) !== "svelte-19q2dk2" && (e.textContent = h), b = k(l), _ = v(l, "H2", {
                class: !0,
                "data-svelte-h": !0
            }), m(_) !== "svelte-1uq3fur" && (_.textContent = B), y = k(l), u.l(l), p = k(l), o = v(l, "A", {
                href: !0,
                target: !0,
                rel: !0,
                class: !0,
                "data-svelte-h": !0
            }), m(o) !== "svelte-avqg77" && (o.textContent = T), l.forEach(C), this.h()
        },
        h() {
            H(s.src, n = "logo.png") || a(s, "src", n), a(s, "alt", "Background Remover"), a(s, "class", "svelte-16u53xv"), a(e, "class", "svelte-16u53xv"), a(_, "class", "svelte-16u53xv"), a(o, "href", "http://github.com/adityaoberai/BackgroundRemover"), a(o, "target", "_blank"), a(o, "rel", "noopener noreferrer"), a(o, "class", "svelte-16u53xv"), a(t, "id", "intro"), a(t, "class", "svelte-16u53xv")
        },
        m(c, l) {
            q(c, t, l), d(t, s), d(t, r), d(t, e), d(t, b), d(t, _), d(t, y), u.m(t, null), d(t, p), d(t, o)
        },
        p(c, [l]) {
            g !== (g = z(c)) && (u.d(1), u = g(c), u && (u.c(), u.m(t, p)))
        },
        i: O,
        o: O,
        d(c) {
            c && C(t), u.d()
        }
    }
}

function L(i, t, s) {
    let n;
    return N(i, I, h => s(0, n = h)), [n, () => R("/app"), () => R("/auth/login")]
}
class D extends U {
    constructor(t) {
        super(), $(this, t, L, F, G, {})
    }
}
export {
    D as component
};