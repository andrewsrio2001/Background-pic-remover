import {
    w as K
} from "./index.e21001b3.js";
import {
    j as X
} from "./singletons.fe2b939d.js";
const L = X("goto");
var z = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    F = {
        exports: {}
    };
(function(c, e) {
    var t = typeof self < "u" ? self : z,
        n = function() {
            function r() {
                this.fetch = !1, this.DOMException = t.DOMException
            }
            return r.prototype = t, new r
        }();
    (function(r) {
        (function(s) {
            var u = {
                searchParams: "URLSearchParams" in r,
                iterable: "Symbol" in r && "iterator" in Symbol,
                blob: "FileReader" in r && "Blob" in r && function() {
                    try {
                        return new Blob, !0
                    } catch {
                        return !1
                    }
                }(),
                formData: "FormData" in r,
                arrayBuffer: "ArrayBuffer" in r
            };

            function f(o) {
                return o && DataView.prototype.isPrototypeOf(o)
            }
            if (u.arrayBuffer) var h = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                p = ArrayBuffer.isView || function(o) {
                    return o && h.indexOf(Object.prototype.toString.call(o)) > -1
                };

            function w(o) {
                if (typeof o != "string" && (o = String(o)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(o)) throw new TypeError("Invalid character in header field name");
                return o.toLowerCase()
            }

            function b(o) {
                return typeof o != "string" && (o = String(o)), o
            }

            function E(o) {
                var a = {
                    next: function() {
                        var y = o.shift();
                        return {
                            done: y === void 0,
                            value: y
                        }
                    }
                };
                return u.iterable && (a[Symbol.iterator] = function() {
                    return a
                }), a
            }

            function v(o) {
                this.map = {}, o instanceof v ? o.forEach(function(a, y) {
                    this.append(y, a)
                }, this) : Array.isArray(o) ? o.forEach(function(a) {
                    this.append(a[0], a[1])
                }, this) : o && Object.getOwnPropertyNames(o).forEach(function(a) {
                    this.append(a, o[a])
                }, this)
            }
            v.prototype.append = function(o, a) {
                o = w(o), a = b(a);
                var y = this.map[o];
                this.map[o] = y ? y + ", " + a : a
            }, v.prototype.delete = function(o) {
                delete this.map[w(o)]
            }, v.prototype.get = function(o) {
                return o = w(o), this.has(o) ? this.map[o] : null
            }, v.prototype.has = function(o) {
                return this.map.hasOwnProperty(w(o))
            }, v.prototype.set = function(o, a) {
                this.map[w(o)] = b(a)
            }, v.prototype.forEach = function(o, a) {
                for (var y in this.map) this.map.hasOwnProperty(y) && o.call(a, this.map[y], y, this)
            }, v.prototype.keys = function() {
                var o = [];
                return this.forEach(function(a, y) {
                    o.push(y)
                }), E(o)
            }, v.prototype.values = function() {
                var o = [];
                return this.forEach(function(a) {
                    o.push(a)
                }), E(o)
            }, v.prototype.entries = function() {
                var o = [];
                return this.forEach(function(a, y) {
                    o.push([y, a])
                }), E(o)
            }, u.iterable && (v.prototype[Symbol.iterator] = v.prototype.entries);

            function I(o) {
                if (o.bodyUsed) return Promise.reject(new TypeError("Already read"));
                o.bodyUsed = !0
            }

            function _(o) {
                return new Promise(function(a, y) {
                    o.onload = function() {
                        a(o.result)
                    }, o.onerror = function() {
                        y(o.error)
                    }
                })
            }

            function B(o) {
                var a = new FileReader,
                    y = _(a);
                return a.readAsArrayBuffer(o), y
            }

            function x(o) {
                var a = new FileReader,
                    y = _(a);
                return a.readAsText(o), y
            }

            function H(o) {
                for (var a = new Uint8Array(o), y = new Array(a.length), R = 0; R < a.length; R++) y[R] = String.fromCharCode(a[R]);
                return y.join("")
            }

            function C(o) {
                if (o.slice) return o.slice(0);
                var a = new Uint8Array(o.byteLength);
                return a.set(new Uint8Array(o)), a.buffer
            }

            function N() {
                return this.bodyUsed = !1, this._initBody = function(o) {
                    this._bodyInit = o, o ? typeof o == "string" ? this._bodyText = o : u.blob && Blob.prototype.isPrototypeOf(o) ? this._bodyBlob = o : u.formData && FormData.prototype.isPrototypeOf(o) ? this._bodyFormData = o : u.searchParams && URLSearchParams.prototype.isPrototypeOf(o) ? this._bodyText = o.toString() : u.arrayBuffer && u.blob && f(o) ? (this._bodyArrayBuffer = C(o.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(o) || p(o)) ? this._bodyArrayBuffer = C(o) : this._bodyText = o = Object.prototype.toString.call(o) : this._bodyText = "", this.headers.get("content-type") || (typeof o == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : u.searchParams && URLSearchParams.prototype.isPrototypeOf(o) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, u.blob && (this.blob = function() {
                    var o = I(this);
                    if (o) return o;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? I(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(B)
                }), this.text = function() {
                    var o = I(this);
                    if (o) return o;
                    if (this._bodyBlob) return x(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(H(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, u.formData && (this.formData = function() {
                    return this.text().then(Q)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }
            var W = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

            function V(o) {
                var a = o.toUpperCase();
                return W.indexOf(a) > -1 ? a : o
            }

            function A(o, a) {
                a = a || {};
                var y = a.body;
                if (o instanceof A) {
                    if (o.bodyUsed) throw new TypeError("Already read");
                    this.url = o.url, this.credentials = o.credentials, a.headers || (this.headers = new v(o.headers)), this.method = o.method, this.mode = o.mode, this.signal = o.signal, !y && o._bodyInit != null && (y = o._bodyInit, o.bodyUsed = !0)
                } else this.url = String(o);
                if (this.credentials = a.credentials || this.credentials || "same-origin", (a.headers || !this.headers) && (this.headers = new v(a.headers)), this.method = V(a.method || this.method || "GET"), this.mode = a.mode || this.mode || null, this.signal = a.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && y) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(y)
            }
            A.prototype.clone = function() {
                return new A(this, {
                    body: this._bodyInit
                })
            };

            function Q(o) {
                var a = new FormData;
                return o.trim().split("&").forEach(function(y) {
                    if (y) {
                        var R = y.split("="),
                            P = R.shift().replace(/\+/g, " "),
                            g = R.join("=").replace(/\+/g, " ");
                        a.append(decodeURIComponent(P), decodeURIComponent(g))
                    }
                }), a
            }

            function G(o) {
                var a = new v,
                    y = o.replace(/\r?\n[\t ]+/g, " ");
                return y.split(/\r?\n/).forEach(function(R) {
                    var P = R.split(":"),
                        g = P.shift().trim();
                    if (g) {
                        var S = P.join(":").trim();
                        a.append(g, S)
                    }
                }), a
            }
            N.call(A.prototype);

            function M(o, a) {
                a || (a = {}), this.type = "default", this.status = a.status === void 0 ? 200 : a.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in a ? a.statusText : "OK", this.headers = new v(a.headers), this.url = a.url || "", this._initBody(o)
            }
            N.call(M.prototype), M.prototype.clone = function() {
                return new M(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new v(this.headers),
                    url: this.url
                })
            }, M.error = function() {
                var o = new M(null, {
                    status: 0,
                    statusText: ""
                });
                return o.type = "error", o
            };
            var J = [301, 302, 303, 307, 308];
            M.redirect = function(o, a) {
                if (J.indexOf(a) === -1) throw new RangeError("Invalid status code");
                return new M(null, {
                    status: a,
                    headers: {
                        location: o
                    }
                })
            }, s.DOMException = r.DOMException;
            try {
                new s.DOMException
            } catch {
                s.DOMException = function(a, y) {
                    this.message = a, this.name = y;
                    var R = Error(a);
                    this.stack = R.stack
                }, s.DOMException.prototype = Object.create(Error.prototype), s.DOMException.prototype.constructor = s.DOMException
            }

            function D(o, a) {
                return new Promise(function(y, R) {
                    var P = new A(o, a);
                    if (P.signal && P.signal.aborted) return R(new s.DOMException("Aborted", "AbortError"));
                    var g = new XMLHttpRequest;

                    function S() {
                        g.abort()
                    }
                    g.onload = function() {
                        var k = {
                            status: g.status,
                            statusText: g.statusText,
                            headers: G(g.getAllResponseHeaders() || "")
                        };
                        k.url = "responseURL" in g ? g.responseURL : k.headers.get("X-Request-URL");
                        var $ = "response" in g ? g.response : g.responseText;
                        y(new M($, k))
                    }, g.onerror = function() {
                        R(new TypeError("Network request failed"))
                    }, g.ontimeout = function() {
                        R(new TypeError("Network request failed"))
                    }, g.onabort = function() {
                        R(new s.DOMException("Aborted", "AbortError"))
                    }, g.open(P.method, P.url, !0), P.credentials === "include" ? g.withCredentials = !0 : P.credentials === "omit" && (g.withCredentials = !1), "responseType" in g && u.blob && (g.responseType = "blob"), P.headers.forEach(function(k, $) {
                        g.setRequestHeader($, k)
                    }), P.signal && (P.signal.addEventListener("abort", S), g.onreadystatechange = function() {
                        g.readyState === 4 && P.signal.removeEventListener("abort", S)
                    }), g.send(typeof P._bodyInit > "u" ? null : P._bodyInit)
                })
            }
            return D.polyfill = !0, r.fetch || (r.fetch = D, r.Headers = v, r.Request = A, r.Response = M), s.Headers = v, s.Request = A, s.Response = M, s.fetch = D, Object.defineProperty(s, "__esModule", {
                value: !0
            }), s
        })({})
    })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
    var i = n;
    e = i.fetch, e.default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, c.exports = e
})(F, F.exports);
var Z = F.exports;

function l(c, e, t, n) {
    function i(r) {
        return r instanceof t ? r : new t(function(s) {
            s(r)
        })
    }
    return new(t || (t = Promise))(function(r, s) {
        function u(p) {
            try {
                h(n.next(p))
            } catch (w) {
                s(w)
            }
        }

        function f(p) {
            try {
                h(n.throw(p))
            } catch (w) {
                s(w)
            }
        }

        function h(p) {
            p.done ? r(p.value) : i(p.value).then(u, f)
        }
        h((n = n.apply(c, e || [])).next())
    })
}
class U {
    constructor(e) {
        this.client = e
    }
    static flatten(e, t = "") {
        let n = {};
        for (const i in e) {
            let r = e[i],
                s = t ? `${t}[${i}]` : i;
            Array.isArray(r) ? n = Object.assign(n, this.flatten(r, s)) : n[s] = r
        }
        return n
    }
}
U.CHUNK_SIZE = 5 * 1024 * 1024;
class m {}
m.equal = (c, e) => m.addQuery(c, "equal", e);
m.notEqual = (c, e) => m.addQuery(c, "notEqual", e);
m.lessThan = (c, e) => m.addQuery(c, "lessThan", e);
m.lessThanEqual = (c, e) => m.addQuery(c, "lessThanEqual", e);
m.greaterThan = (c, e) => m.addQuery(c, "greaterThan", e);
m.greaterThanEqual = (c, e) => m.addQuery(c, "greaterThanEqual", e);
m.isNull = c => `isNull("${c}")`;
m.isNotNull = c => `isNotNull("${c}")`;
m.between = (c, e, t) => `between("${c}", ${m.parseValues(e)}, ${m.parseValues(t)})`;
m.startsWith = (c, e) => m.addQuery(c, "startsWith", e);
m.endsWith = (c, e) => m.addQuery(c, "endsWith", e);
m.select = c => `select([${c.map(e=>`"${e}"`).join(",")}])`;
m.search = (c, e) => m.addQuery(c, "search", e);
m.orderDesc = c => `orderDesc("${c}")`;
m.orderAsc = c => `orderAsc("${c}")`;
m.cursorAfter = c => `cursorAfter("${c}")`;
m.cursorBefore = c => `cursorBefore("${c}")`;
m.limit = c => `limit(${c})`;
m.offset = c => `offset(${c})`;
m.addQuery = (c, e, t) => t instanceof Array ? `${e}("${c}", [${t.map(n=>m.parseValues(n)).join(",")}])` : `${e}("${c}", [${m.parseValues(t)}])`;
m.parseValues = c => typeof c == "string" || c instanceof String ? `"${c}"` : `${c}`;
class d extends Error {
    constructor(e, t = 0, n = "", i = "") {
        super(e), this.name = "AppwriteException", this.message = e, this.code = t, this.type = n, this.response = i
    }
}
class Y {
    constructor() {
        this.config = {
            endpoint: "https://HOSTNAME/v1",
            endpointRealtime: "",
            project: "",
            jwt: "",
            locale: ""
        }, this.headers = {
            "x-sdk-name": "Web",
            "x-sdk-platform": "client",
            "x-sdk-language": "web",
            "x-sdk-version": "13.0.1",
            "X-Appwrite-Response-Format": "1.4.0"
        }, this.realtime = {
            socket: void 0,
            timeout: void 0,
            url: "",
            channels: new Set,
            subscriptions: new Map,
            subscriptionsCounter: 0,
            reconnect: !0,
            reconnectAttempts: 0,
            lastMessage: void 0,
            connect: () => {
                clearTimeout(this.realtime.timeout), this.realtime.timeout = window == null ? void 0 : window.setTimeout(() => {
                    this.realtime.createSocket()
                }, 50)
            },
            getTimeout: () => {
                switch (!0) {
                    case this.realtime.reconnectAttempts < 5:
                        return 1e3;
                    case this.realtime.reconnectAttempts < 15:
                        return 5e3;
                    case this.realtime.reconnectAttempts < 100:
                        return 1e4;
                    default:
                        return 6e4
                }
            },
            createSocket: () => {
                var e, t;
                if (this.realtime.channels.size < 1) return;
                const n = new URLSearchParams;
                n.set("project", this.config.project), this.realtime.channels.forEach(r => {
                    n.append("channels[]", r)
                });
                const i = this.config.endpointRealtime + "/realtime?" + n.toString();
                (i !== this.realtime.url || !this.realtime.socket || ((e = this.realtime.socket) === null || e === void 0 ? void 0 : e.readyState) > WebSocket.OPEN) && (this.realtime.socket && ((t = this.realtime.socket) === null || t === void 0 ? void 0 : t.readyState) < WebSocket.CLOSING && (this.realtime.reconnect = !1, this.realtime.socket.close()), this.realtime.url = i, this.realtime.socket = new WebSocket(i), this.realtime.socket.addEventListener("message", this.realtime.onMessage), this.realtime.socket.addEventListener("open", r => {
                    this.realtime.reconnectAttempts = 0
                }), this.realtime.socket.addEventListener("close", r => {
                    var s, u, f;
                    if (!this.realtime.reconnect || ((u = (s = this.realtime) === null || s === void 0 ? void 0 : s.lastMessage) === null || u === void 0 ? void 0 : u.type) === "error" && ((f = this.realtime) === null || f === void 0 ? void 0 : f.lastMessage.data).code === 1008) {
                        this.realtime.reconnect = !0;
                        return
                    }
                    const h = this.realtime.getTimeout();
                    console.error(`Realtime got disconnected. Reconnect will be attempted in ${h/1e3} seconds.`, r.reason), setTimeout(() => {
                        this.realtime.reconnectAttempts++, this.realtime.createSocket()
                    }, h)
                }))
            },
            onMessage: e => {
                var t, n;
                try {
                    const i = JSON.parse(e.data);
                    switch (this.realtime.lastMessage = i, i.type) {
                        case "connected":
                            const r = JSON.parse((t = window.localStorage.getItem("cookieFallback")) !== null && t !== void 0 ? t : "{}"),
                                s = r == null ? void 0 : r[`a_session_${this.config.project}`],
                                u = i.data;
                            s && !u.user && ((n = this.realtime.socket) === null || n === void 0 || n.send(JSON.stringify({
                                type: "authentication",
                                data: {
                                    session: s
                                }
                            })));
                            break;
                        case "event":
                            let f = i.data;
                            if (f != null && f.channels) {
                                if (!f.channels.some(p => this.realtime.channels.has(p))) return;
                                this.realtime.subscriptions.forEach(p => {
                                    f.channels.some(w => p.channels.includes(w)) && setTimeout(() => p.callback(f))
                                })
                            }
                            break;
                        case "error":
                            throw i.data;
                        default:
                            break
                    }
                } catch (i) {
                    console.error(i)
                }
            },
            cleanUp: e => {
                this.realtime.channels.forEach(t => {
                    e.includes(t) && (Array.from(this.realtime.subscriptions).some(([i, r]) => r.channels.includes(t)) || this.realtime.channels.delete(t))
                })
            }
        }
    }
    setEndpoint(e) {
        return this.config.endpoint = e, this.config.endpointRealtime = this.config.endpointRealtime || this.config.endpoint.replace("https://", "wss://").replace("http://", "ws://"), this
    }
    setEndpointRealtime(e) {
        return this.config.endpointRealtime = e, this
    }
    setProject(e) {
        return this.headers["X-Appwrite-Project"] = e, this.config.project = e, this
    }
    setJWT(e) {
        return this.headers["X-Appwrite-JWT"] = e, this.config.jwt = e, this
    }
    setLocale(e) {
        return this.headers["X-Appwrite-Locale"] = e, this.config.locale = e, this
    }
    subscribe(e, t) {
        let n = typeof e == "string" ? [e] : e;
        n.forEach(r => this.realtime.channels.add(r));
        const i = this.realtime.subscriptionsCounter++;
        return this.realtime.subscriptions.set(i, {
            channels: n,
            callback: t
        }), this.realtime.connect(), () => {
            this.realtime.subscriptions.delete(i), this.realtime.cleanUp(n), this.realtime.connect()
        }
    }
    call(e, t, n = {}, i = {}) {
        var r, s;
        return l(this, void 0, void 0, function*() {
            e = e.toUpperCase(), n = Object.assign({}, this.headers, n);
            let u = {
                method: e,
                headers: n,
                credentials: "include"
            };
            if (typeof window < "u" && window.localStorage && (n["X-Fallback-Cookies"] = (r = window.localStorage.getItem("cookieFallback")) !== null && r !== void 0 ? r : ""), e === "GET")
                for (const [f, h] of Object.entries(U.flatten(i))) t.searchParams.append(f, h);
            else switch (n["content-type"]) {
                case "application/json":
                    u.body = JSON.stringify(i);
                    break;
                case "multipart/form-data":
                    let f = new FormData;
                    for (const h in i) Array.isArray(i[h]) ? i[h].forEach(p => {
                        f.append(h + "[]", p)
                    }) : f.append(h, i[h]);
                    u.body = f, delete n["content-type"];
                    break
            }
            try {
                let f = null;
                const h = yield Z.fetch(t.toString(), u);
                if (!((s = h.headers.get("content-type")) === null || s === void 0) && s.includes("application/json") ? f = yield h.json(): f = {
                        message: yield h.text()
                    }, 400 <= h.status) throw new d(f == null ? void 0 : f.message, h.status, f == null ? void 0 : f.type, f);
                const p = h.headers.get("X-Fallback-Cookies");
                return typeof window < "u" && window.localStorage && p && (window.console.warn("Appwrite is using localStorage for session management. Increase your security by adding a custom domain as your API endpoint."), window.localStorage.setItem("cookieFallback", p)), f
            } catch (f) {
                throw f instanceof d ? f : new d(f.message)
            }
        })
    }
}
class ee extends U {
    constructor(e) {
        super(e)
    }
    get() {
        return l(this, void 0, void 0, function*() {
            const e = "/account",
                t = {},
                n = new URL(this.client.config.endpoint + e);
            return yield this.client.call("get", n, {
                "content-type": "application/json"
            }, t)
        })
    }
    create(e, t, n, i) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "userId"');
            if (typeof t > "u") throw new d('Missing required parameter: "email"');
            if (typeof n > "u") throw new d('Missing required parameter: "password"');
            const r = "/account",
                s = {};
            typeof e < "u" && (s.userId = e), typeof t < "u" && (s.email = t), typeof n < "u" && (s.password = n), typeof i < "u" && (s.name = i);
            const u = new URL(this.client.config.endpoint + r);
            return yield this.client.call("post", u, {
                "content-type": "application/json"
            }, s)
        })
    }
    updateEmail(e, t) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "email"');
            if (typeof t > "u") throw new d('Missing required parameter: "password"');
            const n = "/account/email",
                i = {};
            typeof e < "u" && (i.email = e), typeof t < "u" && (i.password = t);
            const r = new URL(this.client.config.endpoint + n);
            return yield this.client.call("patch", r, {
                "content-type": "application/json"
            }, i)
        })
    }
    listIdentities(e) {
        return l(this, void 0, void 0, function*() {
            const t = "/account/identities",
                n = {};
            typeof e < "u" && (n.queries = e);
            const i = new URL(this.client.config.endpoint + t);
            return yield this.client.call("get", i, {
                "content-type": "application/json"
            }, n)
        })
    }
    deleteIdentity(e) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "identityId"');
            const t = "/account/identities/{identityId}".replace("{identityId}", e),
                n = {},
                i = new URL(this.client.config.endpoint + t);
            return yield this.client.call("delete", i, {
                "content-type": "application/json"
            }, n)
        })
    }
    createJWT() {
        return l(this, void 0, void 0, function*() {
            const e = "/account/jwt",
                t = {},
                n = new URL(this.client.config.endpoint + e);
            return yield this.client.call("post", n, {
                "content-type": "application/json"
            }, t)
        })
    }
    listLogs(e) {
        return l(this, void 0, void 0, function*() {
            const t = "/account/logs",
                n = {};
            typeof e < "u" && (n.queries = e);
            const i = new URL(this.client.config.endpoint + t);
            return yield this.client.call("get", i, {
                "content-type": "application/json"
            }, n)
        })
    }
    updateName(e) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "name"');
            const t = "/account/name",
                n = {};
            typeof e < "u" && (n.name = e);
            const i = new URL(this.client.config.endpoint + t);
            return yield this.client.call("patch", i, {
                "content-type": "application/json"
            }, n)
        })
    }
    updatePassword(e, t) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "password"');
            const n = "/account/password",
                i = {};
            typeof e < "u" && (i.password = e), typeof t < "u" && (i.oldPassword = t);
            const r = new URL(this.client.config.endpoint + n);
            return yield this.client.call("patch", r, {
                "content-type": "application/json"
            }, i)
        })
    }
    updatePhone(e, t) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "phone"');
            if (typeof t > "u") throw new d('Missing required parameter: "password"');
            const n = "/account/phone",
                i = {};
            typeof e < "u" && (i.phone = e), typeof t < "u" && (i.password = t);
            const r = new URL(this.client.config.endpoint + n);
            return yield this.client.call("patch", r, {
                "content-type": "application/json"
            }, i)
        })
    }
    getPrefs() {
        return l(this, void 0, void 0, function*() {
            const e = "/account/prefs",
                t = {},
                n = new URL(this.client.config.endpoint + e);
            return yield this.client.call("get", n, {
                "content-type": "application/json"
            }, t)
        })
    }
    updatePrefs(e) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "prefs"');
            const t = "/account/prefs",
                n = {};
            typeof e < "u" && (n.prefs = e);
            const i = new URL(this.client.config.endpoint + t);
            return yield this.client.call("patch", i, {
                "content-type": "application/json"
            }, n)
        })
    }
    createRecovery(e, t) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "email"');
            if (typeof t > "u") throw new d('Missing required parameter: "url"');
            const n = "/account/recovery",
                i = {};
            typeof e < "u" && (i.email = e), typeof t < "u" && (i.url = t);
            const r = new URL(this.client.config.endpoint + n);
            return yield this.client.call("post", r, {
                "content-type": "application/json"
            }, i)
        })
    }
    updateRecovery(e, t, n, i) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "userId"');
            if (typeof t > "u") throw new d('Missing required parameter: "secret"');
            if (typeof n > "u") throw new d('Missing required parameter: "password"');
            if (typeof i > "u") throw new d('Missing required parameter: "passwordAgain"');
            const r = "/account/recovery",
                s = {};
            typeof e < "u" && (s.userId = e), typeof t < "u" && (s.secret = t), typeof n < "u" && (s.password = n), typeof i < "u" && (s.passwordAgain = i);
            const u = new URL(this.client.config.endpoint + r);
            return yield this.client.call("put", u, {
                "content-type": "application/json"
            }, s)
        })
    }
    listSessions() {
        return l(this, void 0, void 0, function*() {
            const e = "/account/sessions",
                t = {},
                n = new URL(this.client.config.endpoint + e);
            return yield this.client.call("get", n, {
                "content-type": "application/json"
            }, t)
        })
    }
    deleteSessions() {
        return l(this, void 0, void 0, function*() {
            const e = "/account/sessions",
                t = {},
                n = new URL(this.client.config.endpoint + e);
            return yield this.client.call("delete", n, {
                "content-type": "application/json"
            }, t)
        })
    }
    createAnonymousSession() {
        return l(this, void 0, void 0, function*() {
            const e = "/account/sessions/anonymous",
                t = {},
                n = new URL(this.client.config.endpoint + e);
            return yield this.client.call("post", n, {
                "content-type": "application/json"
            }, t)
        })
    }
    createEmailSession(e, t) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "email"');
            if (typeof t > "u") throw new d('Missing required parameter: "password"');
            const n = "/account/sessions/email",
                i = {};
            typeof e < "u" && (i.email = e), typeof t < "u" && (i.password = t);
            const r = new URL(this.client.config.endpoint + n);
            return yield this.client.call("post", r, {
                "content-type": "application/json"
            }, i)
        })
    }
    createMagicURLSession(e, t, n) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "userId"');
            if (typeof t > "u") throw new d('Missing required parameter: "email"');
            const i = "/account/sessions/magic-url",
                r = {};
            typeof e < "u" && (r.userId = e), typeof t < "u" && (r.email = t), typeof n < "u" && (r.url = n);
            const s = new URL(this.client.config.endpoint + i);
            return yield this.client.call("post", s, {
                "content-type": "application/json"
            }, r)
        })
    }
    updateMagicURLSession(e, t) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "userId"');
            if (typeof t > "u") throw new d('Missing required parameter: "secret"');
            const n = "/account/sessions/magic-url",
                i = {};
            typeof e < "u" && (i.userId = e), typeof t < "u" && (i.secret = t);
            const r = new URL(this.client.config.endpoint + n);
            return yield this.client.call("put", r, {
                "content-type": "application/json"
            }, i)
        })
    }
    createOAuth2Session(e, t, n, i) {
        if (typeof e > "u") throw new d('Missing required parameter: "provider"');
        const r = "/account/sessions/oauth2/{provider}".replace("{provider}", e),
            s = {};
        typeof t < "u" && (s.success = t), typeof n < "u" && (s.failure = n), typeof i < "u" && (s.scopes = i);
        const u = new URL(this.client.config.endpoint + r);
        s.project = this.client.config.project;
        for (const [f, h] of Object.entries(U.flatten(s))) u.searchParams.append(f, h);
        if (typeof window < "u" && (window != null && window.location)) window.location.href = u.toString();
        else return u
    }
    createPhoneSession(e, t) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "userId"');
            if (typeof t > "u") throw new d('Missing required parameter: "phone"');
            const n = "/account/sessions/phone",
                i = {};
            typeof e < "u" && (i.userId = e), typeof t < "u" && (i.phone = t);
            const r = new URL(this.client.config.endpoint + n);
            return yield this.client.call("post", r, {
                "content-type": "application/json"
            }, i)
        })
    }
    updatePhoneSession(e, t) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "userId"');
            if (typeof t > "u") throw new d('Missing required parameter: "secret"');
            const n = "/account/sessions/phone",
                i = {};
            typeof e < "u" && (i.userId = e), typeof t < "u" && (i.secret = t);
            const r = new URL(this.client.config.endpoint + n);
            return yield this.client.call("put", r, {
                "content-type": "application/json"
            }, i)
        })
    }
    getSession(e) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "sessionId"');
            const t = "/account/sessions/{sessionId}".replace("{sessionId}", e),
                n = {},
                i = new URL(this.client.config.endpoint + t);
            return yield this.client.call("get", i, {
                "content-type": "application/json"
            }, n)
        })
    }
    updateSession(e) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "sessionId"');
            const t = "/account/sessions/{sessionId}".replace("{sessionId}", e),
                n = {},
                i = new URL(this.client.config.endpoint + t);
            return yield this.client.call("patch", i, {
                "content-type": "application/json"
            }, n)
        })
    }
    deleteSession(e) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "sessionId"');
            const t = "/account/sessions/{sessionId}".replace("{sessionId}", e),
                n = {},
                i = new URL(this.client.config.endpoint + t);
            return yield this.client.call("delete", i, {
                "content-type": "application/json"
            }, n)
        })
    }
    updateStatus() {
        return l(this, void 0, void 0, function*() {
            const e = "/account/status",
                t = {},
                n = new URL(this.client.config.endpoint + e);
            return yield this.client.call("patch", n, {
                "content-type": "application/json"
            }, t)
        })
    }
    createVerification(e) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "url"');
            const t = "/account/verification",
                n = {};
            typeof e < "u" && (n.url = e);
            const i = new URL(this.client.config.endpoint + t);
            return yield this.client.call("post", i, {
                "content-type": "application/json"
            }, n)
        })
    }
    updateVerification(e, t) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "userId"');
            if (typeof t > "u") throw new d('Missing required parameter: "secret"');
            const n = "/account/verification",
                i = {};
            typeof e < "u" && (i.userId = e), typeof t < "u" && (i.secret = t);
            const r = new URL(this.client.config.endpoint + n);
            return yield this.client.call("put", r, {
                "content-type": "application/json"
            }, i)
        })
    }
    createPhoneVerification() {
        return l(this, void 0, void 0, function*() {
            const e = "/account/verification/phone",
                t = {},
                n = new URL(this.client.config.endpoint + e);
            return yield this.client.call("post", n, {
                "content-type": "application/json"
            }, t)
        })
    }
    updatePhoneVerification(e, t) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "userId"');
            if (typeof t > "u") throw new d('Missing required parameter: "secret"');
            const n = "/account/verification/phone",
                i = {};
            typeof e < "u" && (i.userId = e), typeof t < "u" && (i.secret = t);
            const r = new URL(this.client.config.endpoint + n);
            return yield this.client.call("put", r, {
                "content-type": "application/json"
            }, i)
        })
    }
}
class te extends U {
    constructor(e) {
        super(e)
    }
    listDocuments(e, t, n) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "databaseId"');
            if (typeof t > "u") throw new d('Missing required parameter: "collectionId"');
            const i = "/databases/{databaseId}/collections/{collectionId}/documents".replace("{databaseId}", e).replace("{collectionId}", t),
                r = {};
            typeof n < "u" && (r.queries = n);
            const s = new URL(this.client.config.endpoint + i);
            return yield this.client.call("get", s, {
                "content-type": "application/json"
            }, r)
        })
    }
    createDocument(e, t, n, i, r) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "databaseId"');
            if (typeof t > "u") throw new d('Missing required parameter: "collectionId"');
            if (typeof n > "u") throw new d('Missing required parameter: "documentId"');
            if (typeof i > "u") throw new d('Missing required parameter: "data"');
            const s = "/databases/{databaseId}/collections/{collectionId}/documents".replace("{databaseId}", e).replace("{collectionId}", t),
                u = {};
            typeof n < "u" && (u.documentId = n), typeof i < "u" && (u.data = i), typeof r < "u" && (u.permissions = r);
            const f = new URL(this.client.config.endpoint + s);
            return yield this.client.call("post", f, {
                "content-type": "application/json"
            }, u)
        })
    }
    getDocument(e, t, n, i) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "databaseId"');
            if (typeof t > "u") throw new d('Missing required parameter: "collectionId"');
            if (typeof n > "u") throw new d('Missing required parameter: "documentId"');
            const r = "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}", e).replace("{collectionId}", t).replace("{documentId}", n),
                s = {};
            typeof i < "u" && (s.queries = i);
            const u = new URL(this.client.config.endpoint + r);
            return yield this.client.call("get", u, {
                "content-type": "application/json"
            }, s)
        })
    }
    updateDocument(e, t, n, i, r) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "databaseId"');
            if (typeof t > "u") throw new d('Missing required parameter: "collectionId"');
            if (typeof n > "u") throw new d('Missing required parameter: "documentId"');
            const s = "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}", e).replace("{collectionId}", t).replace("{documentId}", n),
                u = {};
            typeof i < "u" && (u.data = i), typeof r < "u" && (u.permissions = r);
            const f = new URL(this.client.config.endpoint + s);
            return yield this.client.call("patch", f, {
                "content-type": "application/json"
            }, u)
        })
    }
    deleteDocument(e, t, n) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "databaseId"');
            if (typeof t > "u") throw new d('Missing required parameter: "collectionId"');
            if (typeof n > "u") throw new d('Missing required parameter: "documentId"');
            const i = "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}", e).replace("{collectionId}", t).replace("{documentId}", n),
                r = {},
                s = new URL(this.client.config.endpoint + i);
            return yield this.client.call("delete", s, {
                "content-type": "application/json"
            }, r)
        })
    }
}
class ne extends U {
    constructor(e) {
        super(e)
    }
    listExecutions(e, t, n) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "functionId"');
            const i = "/functions/{functionId}/executions".replace("{functionId}", e),
                r = {};
            typeof t < "u" && (r.queries = t), typeof n < "u" && (r.search = n);
            const s = new URL(this.client.config.endpoint + i);
            return yield this.client.call("get", s, {
                "content-type": "application/json"
            }, r)
        })
    }
    createExecution(e, t, n, i, r, s) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "functionId"');
            const u = "/functions/{functionId}/executions".replace("{functionId}", e),
                f = {};
            typeof t < "u" && (f.body = t), typeof n < "u" && (f.async = n), typeof i < "u" && (f.path = i), typeof r < "u" && (f.method = r), typeof s < "u" && (f.headers = s);
            const h = new URL(this.client.config.endpoint + u);
            return yield this.client.call("post", h, {
                "content-type": "application/json"
            }, f)
        })
    }
    getExecution(e, t) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "functionId"');
            if (typeof t > "u") throw new d('Missing required parameter: "executionId"');
            const n = "/functions/{functionId}/executions/{executionId}".replace("{functionId}", e).replace("{executionId}", t),
                i = {},
                r = new URL(this.client.config.endpoint + n);
            return yield this.client.call("get", r, {
                "content-type": "application/json"
            }, i)
        })
    }
}
class ie extends U {
    constructor(e) {
        super(e)
    }
    listFiles(e, t, n) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "bucketId"');
            const i = "/storage/buckets/{bucketId}/files".replace("{bucketId}", e),
                r = {};
            typeof t < "u" && (r.queries = t), typeof n < "u" && (r.search = n);
            const s = new URL(this.client.config.endpoint + i);
            return yield this.client.call("get", s, {
                "content-type": "application/json"
            }, r)
        })
    }
    createFile(e, t, n, i, r = s => {}) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "bucketId"');
            if (typeof t > "u") throw new d('Missing required parameter: "fileId"');
            if (typeof n > "u") throw new d('Missing required parameter: "file"');
            const s = "/storage/buckets/{bucketId}/files".replace("{bucketId}", e),
                u = {};
            typeof t < "u" && (u.fileId = t), typeof n < "u" && (u.file = n), typeof i < "u" && (u.permissions = i);
            const f = new URL(this.client.config.endpoint + s);
            if (!(n instanceof File)) throw new d('Parameter "file" has to be a File.');
            const h = n.size;
            if (h <= U.CHUNK_SIZE) return yield this.client.call("post", f, {
                "content-type": "multipart/form-data"
            }, u);
            const p = {
                "content-type": "multipart/form-data"
            };
            let w = 0,
                b;
            if (t != "unique()") try {
                b = yield this.client.call("GET", new URL(this.client.config.endpoint + s + "/" + t), p), w = b.chunksUploaded * U.CHUNK_SIZE
            } catch {}
            for (; w < h;) {
                let E = Math.min(w + U.CHUNK_SIZE - 1, h - 1);
                p["content-range"] = "bytes " + w + "-" + E + "/" + h, b && b.$id && (p["x-appwrite-id"] = b.$id);
                const v = n.slice(w, E + 1);
                u.file = new File([v], n.name), b = yield this.client.call("post", f, p, u), r && r({
                    $id: b.$id,
                    progress: w / h * 100,
                    sizeUploaded: w,
                    chunksTotal: b.chunksTotal,
                    chunksUploaded: b.chunksUploaded
                }), w += U.CHUNK_SIZE
            }
            return b
        })
    }
    getFile(e, t) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "bucketId"');
            if (typeof t > "u") throw new d('Missing required parameter: "fileId"');
            const n = "/storage/buckets/{bucketId}/files/{fileId}".replace("{bucketId}", e).replace("{fileId}", t),
                i = {},
                r = new URL(this.client.config.endpoint + n);
            return yield this.client.call("get", r, {
                "content-type": "application/json"
            }, i)
        })
    }
    updateFile(e, t, n, i) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "bucketId"');
            if (typeof t > "u") throw new d('Missing required parameter: "fileId"');
            const r = "/storage/buckets/{bucketId}/files/{fileId}".replace("{bucketId}", e).replace("{fileId}", t),
                s = {};
            typeof n < "u" && (s.name = n), typeof i < "u" && (s.permissions = i);
            const u = new URL(this.client.config.endpoint + r);
            return yield this.client.call("put", u, {
                "content-type": "application/json"
            }, s)
        })
    }
    deleteFile(e, t) {
        return l(this, void 0, void 0, function*() {
            if (typeof e > "u") throw new d('Missing required parameter: "bucketId"');
            if (typeof t > "u") throw new d('Missing required parameter: "fileId"');
            const n = "/storage/buckets/{bucketId}/files/{fileId}".replace("{bucketId}", e).replace("{fileId}", t),
                i = {},
                r = new URL(this.client.config.endpoint + n);
            return yield this.client.call("delete", r, {
                "content-type": "application/json"
            }, i)
        })
    }
    getFileDownload(e, t) {
        if (typeof e > "u") throw new d('Missing required parameter: "bucketId"');
        if (typeof t > "u") throw new d('Missing required parameter: "fileId"');
        const n = "/storage/buckets/{bucketId}/files/{fileId}/download".replace("{bucketId}", e).replace("{fileId}", t),
            i = {},
            r = new URL(this.client.config.endpoint + n);
        i.project = this.client.config.project;
        for (const [s, u] of Object.entries(U.flatten(i))) r.searchParams.append(s, u);
        return r
    }
    getFilePreview(e, t, n, i, r, s, u, f, h, p, w, b, E) {
        if (typeof e > "u") throw new d('Missing required parameter: "bucketId"');
        if (typeof t > "u") throw new d('Missing required parameter: "fileId"');
        const v = "/storage/buckets/{bucketId}/files/{fileId}/preview".replace("{bucketId}", e).replace("{fileId}", t),
            I = {};
        typeof n < "u" && (I.width = n), typeof i < "u" && (I.height = i), typeof r < "u" && (I.gravity = r), typeof s < "u" && (I.quality = s), typeof u < "u" && (I.borderWidth = u), typeof f < "u" && (I.borderColor = f), typeof h < "u" && (I.borderRadius = h), typeof p < "u" && (I.opacity = p), typeof w < "u" && (I.rotation = w), typeof b < "u" && (I.background = b), typeof E < "u" && (I.output = E);
        const _ = new URL(this.client.config.endpoint + v);
        I.project = this.client.config.project;
        for (const [B, x] of Object.entries(U.flatten(I))) _.searchParams.append(B, x);
        return _
    }
    getFileView(e, t) {
        if (typeof e > "u") throw new d('Missing required parameter: "bucketId"');
        if (typeof t > "u") throw new d('Missing required parameter: "fileId"');
        const n = "/storage/buckets/{bucketId}/files/{fileId}/view".replace("{bucketId}", e).replace("{fileId}", t),
            i = {},
            r = new URL(this.client.config.endpoint + n);
        i.project = this.client.config.project;
        for (const [s, u] of Object.entries(U.flatten(i))) r.searchParams.append(s, u);
        return r
    }
}
class T {}
T.read = c => `read("${c}")`;
T.write = c => `write("${c}")`;
T.create = c => `create("${c}")`;
T.update = c => `update("${c}")`;
T.delete = c => `delete("${c}")`;
class fe {
    static any() {
        return "any"
    }
    static user(e, t = "") {
        return t === "" ? `user:${e}` : `user:${e}/${t}`
    }
    static users(e = "") {
        return e === "" ? "users" : `users/${e}`
    }
    static guests() {
        return "guests"
    }
    static team(e, t = "") {
        return t === "" ? `team:${e}` : `team:${e}/${t}`
    }
    static member(e) {
        return `member:${e}`
    }
    static label(e) {
        return `label:${e}`
    }
}
class oe {
    static custom(e) {
        return e
    }
    static unique() {
        return "unique()"
    }
}
const re = "bgremover",
    le = "images",
    pe = "imagedb",
    he = "output",
    se = "deleteAccount",
    ye = "input",
    O = new Y().setEndpoint("https://cloud.appwrite.io/v1").setProject(re),
    j = new ee(O),
    ae = new ne(O),
    we = new ie(O),
    me = new te(O),
    q = typeof window < "u",
    ce = () => {
        const c = K(null);
        async function e() {
            if (q) try {
                c.set(await j.get())
            } catch {
                c.set(null)
            }
        }
        e();
        async function t(p, w, b) {
            q && (await j.create(oe.unique(), w, b, p), await n(w, b))
        }
        async function n(p, w) {
            q && (await j.createEmailSession(p, w), await e(), L("/app"))
        }
        async function i() {
            q && (await j.createAnonymousSession(), await e(), L("/app"))
        }
        async function r() {
            q && (await j.deleteSession("current"), c.set(null), L("/"))
        }
        async function s(p) {
            q && (await j.createRecovery(p, "https://bgremover.in/auth/reset/complete"), alert("Check your email for a recovery link"), L("/"))
        }
        async function u(p, w, b, E) {
            q && (await j.updateRecovery(p, w, b, E), L("/auth/login"))
        }
        async function f(p, w) {
            q && await j.updatePassword(w, p)
        }
        async function h(p) {
            if (q) {
                var w = await ae.createExecution(se, p, !1);
                return c.set(null), w
            }
        }
        return {
            subscribe: c.subscribe,
            register: t,
            login: n,
            loginAnonymous: i,
            logout: r,
            init: e,
            createRecovery: s,
            updateRecovery: u,
            updatePassword: f,
            deleteAccount: h
        }
    },
    ge = ce();
export {
    oe as I, ye as P, m as Q, fe as R, he as a, T as b, pe as c, me as d, le as e, L as g, we as s, ge as u
};