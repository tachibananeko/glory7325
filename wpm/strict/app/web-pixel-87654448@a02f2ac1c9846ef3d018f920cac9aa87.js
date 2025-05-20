(() => {
    var nt = Object.create;
    var E = Object.defineProperty,
        ot = Object.defineProperties,
        it = Object.getOwnPropertyDescriptor,
        rt = Object.getOwnPropertyDescriptors,
        st = Object.getOwnPropertyNames,
        T = Object.getOwnPropertySymbols,
        at = Object.getPrototypeOf,
        R = Object.prototype.hasOwnProperty,
        ct = Object.prototype.propertyIsEnumerable;
    var _ = (n, t, e) => t in n ? E(n, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : n[t] = e,
        p = (n, t) => {
            for (var e in t || (t = {})) R.call(t, e) && _(n, e, t[e]);
            if (T)
                for (var e of T(t)) ct.call(t, e) && _(n, e, t[e]);
            return n
        },
        v = (n, t) => ot(n, rt(t));
    var s = (n, t) => () => (n && (t = n(n = 0)), t);
    var mt = (n, t) => () => (t || n((t = {
        exports: {}
    }).exports, t), t.exports);
    var dt = (n, t, e, i) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let o of st(t)) !R.call(n, o) && o !== e && E(n, o, {
                get: () => t[o],
                enumerable: !(i = it(t, o)) || i.enumerable
            });
        return n
    };
    var pt = (n, t, e) => (e = n != null ? nt(at(n)) : {}, dt(t || !n || !n.__esModule ? E(e, "default", {
        value: n,
        enumerable: !0
    }) : e, n));
    var r = (n, t, e) => new Promise((i, o) => {
        var m = a => {
                try {
                    f(e.next(a))
                } catch (g) {
                    o(g)
                }
            },
            d = a => {
                try {
                    f(e.throw(a))
                } catch (g) {
                    o(g)
                }
            },
            f = a => a.done ? i(a.value) : Promise.resolve(a.value).then(m, d);
        f((e = e.apply(n, t)).next())
    });
    var U, A = s(() => {
        U = "WebPixel::Render"
    });
    var O, L = s(() => {
        A();
        O = n => shopify.extend(U, n)
    });
    var $ = s(() => {
        L()
    });
    var N = s(() => {
        $()
    });

    function u(n, t) {
        return fetch(n, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(t)
        })
    }

    function y(n, t) {
        let e = new URLSearchParams;
        return Object.entries(t).forEach(([i, o]) => {
            o && e.append(i, o.toString())
        }), fetch(`${n}?${e.toString()}`, {
            method: "GET",
            mode: "cors"
        })
    }
    var h = s(() => {
        "use strict"
    });
    var C, B = s(() => {
        "use strict";
        h();
        C = class {
            constructor(t, e, i) {
                this.settings = t;
                this.omnisendContact = e;
                this.customerPrivacy = i
            }
            sendEvent(t) {
                return r(this, null, function*() {
                    let e = yield this.omnisendContact.getContactIDFromCookie();
                    if (!e) return;
                    let i = this.mapEvent(t, e);
                    yield u(`${this.settings.apiURL}/track`, i)
                })
            }
            mapEvent(t, e) {
                return {
                    eventName: "added product to cart",
                    contact: e ? {
                        ID: e
                    } : void 0,
                    brandID: this.settings.brandID,
                    properties: v(p({}, t.cart), {
                        shopifySource: "web_pixel",
                        shopifyPrivacy: this.customerPrivacy.getPrivacySettingsString()
                    }),
                    origin: "shopify",
                    eventTimestamp: new Date(t.eventTimestamp)
                }
            }
        }
    });
    var V = s(() => {
        "use strict"
    });
    var j = s(() => {
        "use strict";
        B();
        V()
    });
    var w, F = s(() => {
        "use strict";
        w = class {
            constructor(t, e) {
                this.omnisendContact = t;
                this.browser = e
            }
            identify(t) {
                return r(this, null, function*() {
                    let e = (yield this.browser.cookie.get("omnisendContactID")) || "",
                        i = (t == null ? void 0 : t.email) || "",
                        o = (t == null ? void 0 : t.phone) || "";
                    if (o && !this.isInternationalPhone(o) && (o = ""), !i && !o) return;
                    let m = yield this.omnisendContact.identifyContact({
                        email: i,
                        phone: o,
                        currentContactID: e
                    });
                    yield this.omnisendContact.setContactIDCookie(m)
                })
            }
            isInternationalPhone(t) {
                return t.startsWith("+") || t.startsWith("00")
            }
        }
    });
    var P, W = s(() => {
        "use strict";
        P = class {
            constructor(t) {
                this.checkoutContact = t
            }
            handleEvent(t) {
                return r(this, null, function*() {
                    var i, o;
                    let e = (i = t == null ? void 0 : t.data) == null ? void 0 : i.checkout;
                    (o = e == null ? void 0 : e.lineItems) != null && o.length && (yield this.checkoutContact.identify(e))
                })
            }
        }
    });
    var S = s(() => {
        "use strict";
        h()
    });
    var H, X = s(() => {
        "use strict";
        S();
        H = n => ({
            saveCartContact: t => r(void 0, null, function*() {
                yield u(`${n.appURL}/shopify/${n.brandID}/carts/contacts`, {
                    brandID: n.brandID,
                    contactID: t.omnisendContactID,
                    cartToken: t.cartToken,
                    shopifyClientID: t.shopifyClientID
                })
            })
        })
    });
    var l, q = s(() => {
        "use strict";
        X();
        l = class {
            constructor(t, e, i, o) {
                this.settings = t;
                this.checkoutContact = e;
                this.browser = i;
                this.init = o
            }
            handleEvent(t) {
                return r(this, null, function*() {
                    var i, o, m, d;
                    let e = (i = t == null ? void 0 : t.data) == null ? void 0 : i.checkout;
                    (o = e == null ? void 0 : e.lineItems) != null && o.length && (yield this.checkoutContact.identify(e), yield this.saveCheckoutCartContact(((d = (m = this.init.data) == null ? void 0 : m.cart) == null ? void 0 : d.id) || ""))
                })
            }
            saveCheckoutCartContact(t) {
                return r(this, null, function*() {
                    let e = t || (yield this.browser.cookie.get("cart")) || "",
                        i = (yield this.browser.cookie.get("_shopify_y")) || "",
                        o = (yield this.browser.cookie.get("omnisendContactID")) || "";
                    !o || !e || (yield H(this.settings).saveCartContact({
                        omnisendContactID: o,
                        cartToken: e,
                        shopifyClientID: i
                    }))
                })
            }
        }
    });
    var G = s(() => {
        "use strict";
        F();
        W();
        q()
    });
    var I, J = s(() => {
        "use strict";
        h();
        I = class {
            constructor(t, e, i, o) {
                this.settings = t;
                this.cookie = e;
                this.context = i;
                this.customerPrivacy = o
            }
            sendEvent() {
                return r(this, null, function*() {
                    let t = yield this.mapEvent();
                    t.contactID && t.sessionID && (yield y(`${this.settings.trackingURL}/REST/webTracking/v1/event`, t))
                })
            }
            mapEvent() {
                return r(this, null, function*() {
                    let t = yield this.cookie.get("omnisendContactID"), e = yield this.cookie.get("omnisendSessionID"), i = this.getUtmParams(), o = {
                        timestamp: new Date().getTime(),
                        type: "pageview",
                        brandID: this.settings.brandID,
                        shopType: "shopify",
                        shopHostname: this.context.document.location.hostname || "",
                        title: this.context.document.title,
                        url: this.context.document.location.href,
                        sessionID: e,
                        contactID: t,
                        language: this.context.navigator.language,
                        shopifySource: "web_pixel",
                        shopifyPrivacy: this.customerPrivacy.getPrivacySettingsString()
                    };
                    return i.source && (o.utmSource = i.source), i.medium && (o.utmMedium = i.medium), i.campaign && (o.utmCampaign = i.campaign), o
                })
            }
            getUtmParams() {
                let t = new URLSearchParams(this.context.window.location.search);
                return {
                    campaign: t.get("utm_campaign") || void 0,
                    source: t.get("utm_source") || void 0,
                    medium: t.get("utm_medium") || void 0
                }
            }
        }
    });
    var M = s(() => {
        "use strict";
        J()
    });
    var D, Y = s(() => {
        "use strict";
        S();
        D = class {
            constructor(t, e, i, o) {
                this.settings = t;
                this.omnisendContact = e;
                this.init = i;
                this.customerPrivacy = o
            }
            sendEvent(t) {
                return r(this, null, function*() {
                    var i;
                    let e = yield this.mapEvent(t);
                    (i = e.contact) != null && i.id && e.properties.userInfo.sessionID && (yield u(`${this.settings.trackingURL}/REST/webTracking/v2/event`, e))
                })
            }
            mapEvent(t) {
                return r(this, null, function*() {
                    let e = yield this.omnisendContact.getContactIDFromCookie(), i = yield this.omnisendContact.getSessionIDFromCookie(), o = this.init.context;
                    return {
                        eventName: "viewed product",
                        brandID: this.settings.brandID,
                        contact: {
                            id: e
                        },
                        shopInfo: {
                            shopType: "shopify",
                            shopHostname: o.document.location.hostname || ""
                        },
                        properties: {
                            userInfo: {
                                sessionID: i,
                                language: o.navigator.language
                            },
                            utm: this.getUtmParams(),
                            page: {
                                title: o.document.title,
                                url: o.document.location.href
                            },
                            product: t
                        },
                        shopifySource: "web_pixel",
                        shopifyPrivacy: this.customerPrivacy.getPrivacySettingsString()
                    }
                })
            }
            getUtmParams() {
                let t = new URLSearchParams(this.init.context.window.location.search);
                return {
                    campaign: t.get("utm_campaign") || void 0,
                    medium: t.get("utm_medium") || void 0,
                    source: t.get("utm_source") || void 0
                }
            }
        }
    });
    var z = s(() => {
        "use strict";
        Y()
    });
    var K = s(() => {
        "use strict"
    });
    var k, Q = s(() => {
        "use strict";
        h();
        k = class {
            constructor(t, e, i) {
                this.settings = t;
                this.cookie = e;
                this.shopDomain = i
            }
            identifyContact(t) {
                return r(this, null, function*() {
                    var o;
                    return this.settings.trackingURL && ((o = (yield(yield y(`${this.settings.trackingURL}/REST/inShop/v1/identifyContact`, v(p({}, t), {
                        brandID: this.settings.brandID,
                        shopType: "shopify",
                        responseType: "json"
                    }))).json()).data) == null ? void 0 : o.contactID) || ""
                })
            }
            setContactIDCookie(t) {
                return r(this, null, function*() {
                    if (!t) return;
                    let e = 24 * 60 * 60 * 1e3,
                        i = new Date(Date.now() + 30 * e).toUTCString();
                    yield this.cookie.set(`omnisendContactID=${t}; path=/; domain=.${this.shopDomain}; expires=${i}`)
                })
            }
            getContactIDFromCookie() {
                return r(this, null, function*() {
                    return yield this.cookie.get("omnisendContactID")
                })
            }
            getSessionIDFromCookie() {
                return r(this, null, function*() {
                    return yield this.cookie.get("omnisendSessionID")
                })
            }
        }
    });
    var b, Z = s(() => {
        "use strict";
        b = class {
            constructor(t) {
                this.customerPrivacy = t
            }
            getPrivacySettingsString() {
                let t = {
                    analytics: this.customerPrivacy.analyticsProcessingAllowed,
                    marketing: this.customerPrivacy.marketingAllowed,
                    preferences: this.customerPrivacy.preferencesProcessingAllowed,
                    saleOfData: this.customerPrivacy.saleOfDataAllowed
                };
                return this.stringifyPrivacy(t)
            }
            stringifyPrivacy(t) {
                return Object.keys(t).filter(e => t[e]).sort().join(",")
            }
        }
    });
    var tt = s(() => {
        "use strict";
        K();
        Q();
        Z()
    });
    var et = mt(x => {
        "use strict";
        N();
        j();
        G();
        M();
        z();
        tt();
        O(n => {
            let t = p({}, n.settings),
                e = new k(t, n.browser.cookie, n.init.context.document.location.hostname || ""),
                i = new b(n.init.customerPrivacy),
                o = new w(e, n.browser),
                m = new l(t, o, n.browser, n.init),
                d = new P(o);
            n.analytics.subscribe("checkout_started", c => {
                m.handleEvent(c)
            }), n.analytics.subscribe("checkout_contact_info_submitted", c => {
                d.handleEvent(c)
            });
            let f = new I(t, n.browser.cookie, n.init.context, i);
            n.analytics.subscribe("page_viewed", () => r(x, null, function*() {
                yield f.sendEvent()
            }));
            let a = new D(t, e, n.init, i);
            n.analytics.subscribe("omnisend_viewed_product", c => r(x, null, function*() {
                c.customData && (yield a.sendEvent(c.customData))
            }));
            let g = new C(t, e, i);
            n.analytics.subscribe("omnisend_shopify_added_to_cart", c => r(x, null, function*() {
                c.customData && (yield g.sendEvent(c.customData))
            }))
        })
    });
    var ye = pt(et());
})();