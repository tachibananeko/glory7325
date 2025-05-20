function PointerEventsPolyfill(t) {
    if (this.options = {
            selector: "*",
            mouseEvents: ["click", "dblclick", "mousedown", "mouseup"],
            usePolyfillIf: function() {
                if ("Microsoft Internet Explorer" == navigator.appName && (null != navigator.userAgent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/) && 11 > parseFloat(RegExp.$1))) return !0;
                return !1
            }
        }, t) {
        var e = this;
        $.each(t, function(t, i) {
            e.options[t] = i
        })
    }
    this.options.usePolyfillIf() && this.register_mouse_events()
}! function(t) {
    var e = {
        url: !1,
        callback: !1,
        target: !1,
        duration: 120,
        on: "mouseover",
        touch: !0,
        onZoomIn: !1,
        onZoomOut: !1,
        magnify: 1
    };
    t.zoom = function(e, i, n, o) {
        var s, r, a, l, c, h, d, u = t(e),
            f = u.css("position"),
            p = t(i);
        return u.css("position", /(absolute|fixed)/.test(f) ? f : "relative"), u.css("overflow", "hidden"), n.style.width = n.style.height = "", t(n).addClass("zoomImg").css({
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0,
            width: n.width * o,
            height: n.height * o,
            border: "none",
            maxWidth: "none",
            maxHeight: "none"
        }).appendTo(e), {
            init: function() {
                r = u.outerWidth(), s = u.outerHeight(), i === u[0] ? (l = r, a = s) : (l = p.outerWidth(), a = p.outerHeight()), c = (n.width - r) / l, h = (n.height - s) / a, d = p.offset()
            },
            move: function(t) {
                var e = t.pageX - d.left,
                    i = t.pageY - d.top;
                i = Math.max(Math.min(i, a), 0), e = Math.max(Math.min(e, l), 0), n.style.left = e * -c + "px", n.style.top = i * -h + "px"
            }
        }
    }, t.fn.zoom = function(i) {
        return this.each(function() {
            var n, o, s, r = t.extend({}, e, i || {}),
                a = r.target || this,
                l = this,
                c = t(l),
                h = t(a),
                d = document.createElement("img"),
                u = t(d),
                f = "mousemove.zoom",
                p = !1,
                g = !1;
            (r.url || ((n = c.find("img"))[0] && (r.url = n.data("src") || n.attr("src")), r.url)) && (o = h.css("position"), s = h.css("overflow"), c.one("zoom.destroy", function() {
                c.off(".zoom"), h.css("position", o), h.css("overflow", s), u.remove()
            }), d.onload = function() {
                var e = t.zoom(a, l, d, r.magnify);

                function i(i) {
                    e.init(), e.move(i), u.stop().fadeTo(t.support.opacity ? r.duration : 0, 1, !!t.isFunction(r.onZoomIn) && r.onZoomIn.call(d))
                }

                function n() {
                    u.stop().fadeTo(r.duration, 0, !!t.isFunction(r.onZoomOut) && r.onZoomOut.call(d))
                }
                "grab" === r.on ? c.on("mousedown.zoom", function(o) {
                    1 === o.which && (t(document).one("mouseup.zoom", function() {
                        n(), t(document).off(f, e.move)
                    }), i(o), t(document).on(f, e.move), o.preventDefault())
                }) : "click" === r.on ? c.on("click.zoom", function(o) {
                    return p ? void 0 : (p = !0, i(o), t(document).on(f, e.move), t(document).one("click.zoom", function() {
                        n(), p = !1, t(document).off(f, e.move)
                    }), !1)
                }) : "toggle" === r.on ? c.on("click.zoom", function(t) {
                    p ? n() : i(t), p = !p
                }) : "mouseover" === r.on && (e.init(), c.on("mouseenter.zoom", i).on("mouseleave.zoom", n).on(f, e.move)), r.touch && c.on("touchstart.zoom", function(t) {
                    t.preventDefault(), g ? (g = !1, n()) : (g = !0, i(t.originalEvent.touches[0] || t.originalEvent.changedTouches[0]))
                }).on("touchmove.zoom", function(t) {
                    t.preventDefault(), e.move(t.originalEvent.touches[0] || t.originalEvent.changedTouches[0])
                }).on("touchend.zoom", function(t) {
                    t.preventDefault(), g && (g = !1, n())
                }), t.isFunction(r.callback) && r.callback.call(d)
            }, d.src = r.url)
        })
    }, t.fn.zoom.defaults = e
}(window.jQuery),
function(t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : t.jquery_mmenu_js = e(t.jQuery)
}(this, function(t) {
    var e, i, n, o, s, r, a, l;
    return l = "7.2.2", (e = t)[a = "mmenu"] && e[a].version > l || (e[a] = function(t, e, i) {
            return this.$menu = t, this._api = ["bind", "getInstance", "initPanels", "openPanel", "closePanel", "closeAllPanels", "setSelected"], this.opts = e, this.conf = i, this.vars = {}, this.cbck = {}, this.mtch = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initWrappers(), this._initAddons(), this._initExtensions(), this._initHooks(), this._initMenu(), this._initPanels(), this._initOpened(), this._initAnchors(), this._initMatchMedia(), "function" == typeof this.___debug && this.___debug(), this
        }, e[a].version = l, e[a].uniqueId = 0, e[a].wrappers = {}, e[a].addons = {}, e[a].defaults = {
            hooks: {},
            extensions: [],
            wrappers: [],
            navbar: {
                add: !0,
                title: "Menu",
                titleLink: "parent"
            },
            onClick: {
                setSelected: !0
            },
            slidingSubmenus: !0
        }, e[a].configuration = {
            classNames: {
                divider: "Divider",
                inset: "Inset",
                nolistview: "NoListview",
                nopanel: "NoPanel",
                panel: "Panel",
                selected: "Selected",
                spacer: "Spacer",
                vertical: "Vertical"
            },
            clone: !1,
            language: null,
            openingInterval: 25,
            panelNodetype: "ul, ol, div",
            transitionDuration: 400
        }, e[a].prototype = {
            getInstance: function() {
                return this
            },
            initPanels: function(t) {
                this._initPanels(t)
            },
            openPanel: function(t, i) {
                if (this.trigger("openPanel:before", t), t && t.length && (t.is("." + n.panel) || (t = t.closest("." + n.panel)), t.is("." + n.panel))) {
                    var s = this;
                    if ("boolean" != typeof i && (i = !0), t.parent("." + n.listitem + "_vertical").length) t.parents("." + n.listitem + "_vertical").addClass(n.listitem + "_opened").children("." + n.panel).removeClass(n.hidden), this.openPanel(t.parents("." + n.panel).not(function() {
                        return e(this).parent("." + n.listitem + "_vertical").length
                    }).first()), this.trigger("openPanel:start", t), this.trigger("openPanel:finish", t);
                    else {
                        if (t.hasClass(n.panel + "_opened")) return;
                        var r = this.$pnls.children("." + n.panel),
                            l = this.$pnls.children("." + n.panel + "_opened");
                        if (!e[a].support.csstransitions) return l.addClass(n.hidden).removeClass(n.panel + "_opened"), t.removeClass(n.hidden).addClass(n.panel + "_opened"), this.trigger("openPanel:start", t), void this.trigger("openPanel:finish", t);
                        r.not(t).removeClass(n.panel + "_opened-parent");
                        for (var c = t.data(o.parent); c;)(c = c.closest("." + n.panel)).parent("." + n.listitem + "_vertical").length || c.addClass(n.panel + "_opened-parent"), c = c.data(o.parent);
                        r.removeClass(n.panel + "_highest").not(l).not(t).addClass(n.hidden), t.removeClass(n.hidden);
                        var h = function() {
                                l.removeClass(n.panel + "_opened"), t.addClass(n.panel + "_opened"), t.hasClass(n.panel + "_opened-parent") ? (l.addClass(n.panel + "_highest"), t.removeClass(n.panel + "_opened-parent")) : (l.addClass(n.panel + "_opened-parent"), t.addClass(n.panel + "_highest")), s.trigger("openPanel:start", t)
                            },
                            d = function() {
                                l.removeClass(n.panel + "_highest").addClass(n.hidden), t.removeClass(n.panel + "_highest"), s.trigger("openPanel:finish", t)
                            };
                        i && !t.hasClass(n.panel + "_noanimation") ? setTimeout(function() {
                            s.__transitionend(t, function() {
                                d()
                            }, s.conf.transitionDuration), h()
                        }, s.conf.openingInterval) : (h(), d())
                    }
                    this.trigger("openPanel:after", t)
                }
            },
            closePanel: function(t) {
                this.trigger("closePanel:before", t);
                var e = t.parent();
                e.hasClass(n.listitem + "_vertical") && (e.removeClass(n.listitem + "_opened"), t.addClass(n.hidden), this.trigger("closePanel", t)), this.trigger("closePanel:after", t)
            },
            closeAllPanels: function(t) {
                this.trigger("closeAllPanels:before"), this.$pnls.find("." + n.listview).children().removeClass(n.listitem + "_selected").filter("." + n.listitem + "_vertical").removeClass(n.listitem + "_opened");
                var e = this.$pnls.children("." + n.panel),
                    i = t && t.length ? t : e.first();
                this.$pnls.children("." + n.panel).not(i).removeClass(n.panel + "_opened").removeClass(n.panel + "_opened-parent").removeClass(n.panel + "_highest").addClass(n.hidden), this.openPanel(i, !1), this.trigger("closeAllPanels:after")
            },
            togglePanel: function(t) {
                var e = t.parent();
                e.hasClass(n.listitem + "_vertical") && this[e.hasClass(n.listitem + "_opened") ? "closePanel" : "openPanel"](t)
            },
            setSelected: function(t) {
                this.trigger("setSelected:before", t), this.$menu.find("." + n.listitem + "_selected").removeClass(n.listitem + "_selected"), t.addClass(n.listitem + "_selected"), this.trigger("setSelected:after", t)
            },
            bind: function(t, e) {
                this.cbck[t] = this.cbck[t] || [], this.cbck[t].push(e)
            },
            trigger: function() {
                var t = Array.prototype.slice.call(arguments),
                    e = t.shift();
                if (this.cbck[e])
                    for (var i = 0, n = this.cbck[e].length; i < n; i++) this.cbck[e][i].apply(this, t)
            },
            matchMedia: function(t, e, i) {
                var n = {
                    yes: e,
                    no: i
                };
                this.mtch[t] = this.mtch[t] || [], this.mtch[t].push(n)
            },
            i18n: function(t) {
                return e[a].i18n(t, this.conf.language)
            },
            _initHooks: function() {
                for (var t in this.opts.hooks) this.bind(t, this.opts.hooks[t])
            },
            _initWrappers: function() {
                this.trigger("initWrappers:before");
                for (var t = 0; t < this.opts.wrappers.length; t++) {
                    var i = e[a].wrappers[this.opts.wrappers[t]];
                    "function" == typeof i && i.call(this)
                }
                this.trigger("initWrappers:after")
            },
            _initAddons: function() {
                var t;
                for (t in this.trigger("initAddons:before"), e[a].addons) e[a].addons[t].add.call(this), e[a].addons[t].add = function() {};
                for (t in e[a].addons) e[a].addons[t].setup.call(this);
                this.trigger("initAddons:after")
            },
            _initExtensions: function() {
                this.trigger("initExtensions:before");
                var t = this;
                for (var e in this.opts.extensions.constructor === Array && (this.opts.extensions = {
                        all: this.opts.extensions
                    }), this.opts.extensions) this.opts.extensions[e] = this.opts.extensions[e].length ? n.menu + "_" + this.opts.extensions[e].join(" " + n.menu + "_") : "", this.opts.extensions[e] && function(e) {
                    t.matchMedia(e, function() {
                        this.$menu.addClass(this.opts.extensions[e])
                    }, function() {
                        this.$menu.removeClass(this.opts.extensions[e])
                    })
                }(e);
                this.trigger("initExtensions:after")
            },
            _initMenu: function() {
                this.trigger("initMenu:before"), this.conf.clone && (this.$orig = this.$menu, this.$menu = this.$orig.clone(), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function() {
                    e(this).attr("id", n.mm(e(this).attr("id")))
                })), this.$menu.attr("id", this.$menu.attr("id") || this.__getUniqueId()), this.$pnls = e('<div class="' + n.panels + '" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu), this.$menu.addClass(n.menu).parent().addClass(n.wrapper), this.trigger("initMenu:after")
            },
            _initPanels: function(t) {
                this.trigger("initPanels:before", t), t = t || this.$pnls.children(this.conf.panelNodetype);
                var i = e(),
                    o = this,
                    s = function(t) {
                        t.filter(o.conf.panelNodetype).each(function(t) {
                            var r = o._initPanel(e(this));
                            if (r) {
                                o._initNavbar(r), o._initListview(r), i = i.add(r);
                                var a = r.children("." + n.listview).children("li").children(o.conf.panelNodetype).add(r.children("." + o.conf.classNames.panel));
                                a.length && s(a)
                            }
                        })
                    };
                s(t), this.trigger("initPanels:after", i)
            },
            _initPanel: function(t) {
                if (this.trigger("initPanel:before", t), t.hasClass(n.panel)) return t;
                if (this.__refactorClass(t, this.conf.classNames.panel, n.panel), this.__refactorClass(t, this.conf.classNames.nopanel, n.nopanel), this.__refactorClass(t, this.conf.classNames.inset, n.listview + "_inset"), t.filter("." + n.listview + "_inset").addClass(n.nopanel), t.hasClass(n.nopanel)) return !1;
                var e = t.hasClass(this.conf.classNames.vertical) || !this.opts.slidingSubmenus;
                t.removeClass(this.conf.classNames.vertical);
                var i = t.attr("id") || this.__getUniqueId();
                t.is("ul, ol") && (t.removeAttr("id"), t.wrap("<div />"), t = t.parent()), t.attr("id", i), t.addClass(n.panel + " " + n.hidden);
                var s = t.parent("li");
                return e ? s.addClass(n.listitem + "_vertical") : t.appendTo(this.$pnls), s.length && (s.data(o.child, t), t.data(o.parent, s)), this.trigger("initPanel:after", t), t
            },
            _initNavbar: function(t) {
                if (this.trigger("initNavbar:before", t), !t.children("." + n.navbar).length) {
                    var i = t.data(o.parent),
                        s = e('<div class="' + n.navbar + '" />'),
                        r = this.__getPanelTitle(t, this.opts.navbar.title),
                        a = "";
                    if (i && i.length) {
                        if (i.hasClass(n.listitem + "_vertical")) return;
                        if (i.parent().is("." + n.listview)) var l = i.children("a, span").not("." + n.btn + "_next");
                        else l = i.closest("." + n.panel).find('a[href="#' + t.attr("id") + '"]');
                        var c = (i = (l = l.first()).closest("." + n.panel)).attr("id");
                        switch (r = this.__getPanelTitle(t, e("<span>" + l.text() + "</span>").text()), this.opts.navbar.titleLink) {
                            case "anchor":
                                a = l.attr("href");
                                break;
                            case "parent":
                                a = "#" + c
                        }
                        s.append('<a class="' + n.btn + " " + n.btn + "_prev " + n.navbar + '__btn" href="#' + c + '" />')
                    } else if (!this.opts.navbar.title) return;
                    this.opts.navbar.add && t.addClass(n.panel + "_has-navbar"), s.append('<a class="' + n.navbar + '__title"' + (a.length ? ' href="' + a + '"' : "") + ">" + r + "</a>").prependTo(t), this.trigger("initNavbar:after", t)
                }
            },
            _initListview: function(t) {
                this.trigger("initListview:before", t);
                var i = this.__childAddBack(t, "ul, ol");
                this.__refactorClass(i, this.conf.classNames.nolistview, n.nolistview);
                var s = i.not("." + n.nolistview).addClass(n.listview).children().addClass(n.listitem);
                this.__refactorClass(s, this.conf.classNames.selected, n.listitem + "_selected"), this.__refactorClass(s, this.conf.classNames.divider, n.listitem + "_divider"), this.__refactorClass(s, this.conf.classNames.spacer, n.listitem + "_spacer"), s.children("a, span").not("." + n.btn).addClass(n.listitem + "__text");
                var r = t.data(o.parent);
                if (r && r.is("." + n.listitem) && !r.children("." + n.btn).length) {
                    var a = r.children("a, span").first(),
                        l = e('<a class="' + n.btn + " " + n.btn + "_next " + n.listitem + '__btn" href="#' + t.attr("id") + '" />');
                    l.insertAfter(a), a.is("span") && (l.addClass(n.listitem + "__text").html(a.html()), a.remove())
                }
                this.trigger("initListview:after", t)
            },
            _initOpened: function() {
                this.trigger("initOpened:before");
                var t = this.$pnls.find("." + n.listitem + "_selected").removeClass(n.listitem + "_selected").last().addClass(n.listitem + "_selected"),
                    e = t.length ? t.closest("." + n.panel) : this.$pnls.children("." + n.panel).first();
                this.openPanel(e, !1), this.trigger("initOpened:after")
            },
            _initAnchors: function() {
                this.trigger("initAnchors:before");
                var t = this;
                r.$body.on(s.click + "-oncanvas", "a[href]", function(i) {
                    var o = e(this),
                        s = o.attr("href"),
                        r = t.$menu.find(o).length,
                        l = o.is("." + n.listitem + " > a"),
                        c = o.is('[rel="external"]') || o.is('[target="_blank"]');
                    if (r && 1 < s.length && "#" == s.slice(0, 1)) try {
                        var h = t.$menu.find(s);
                        if (h.is("." + n.panel)) return t[o.parent().hasClass(n.listitem + "_vertical") ? "togglePanel" : "openPanel"](h), void i.preventDefault()
                    } catch (i) {}
                    var d = {
                        close: null,
                        setSelected: null,
                        preventDefault: "#" == s.slice(0, 1)
                    };
                    for (var u in e[a].addons) {
                        var f = e[a].addons[u].clickAnchor.call(t, o, r, l, c);
                        if (f) {
                            if ("boolean" == typeof f) return void i.preventDefault();
                            "object" == typeof f && (d = e.extend({}, d, f))
                        }
                    }
                    r && l && !c && (t.__valueOrFn(o, t.opts.onClick.setSelected, d.setSelected) && t.setSelected(e(i.target).parent()), t.__valueOrFn(o, t.opts.onClick.preventDefault, d.preventDefault) && i.preventDefault(), t.__valueOrFn(o, t.opts.onClick.close, d.close) && t.opts.offCanvas && "function" == typeof t.close && t.close())
                }), this.trigger("initAnchors:after")
            },
            _initMatchMedia: function() {
                var t = this;
                for (var e in this.mtch) ! function() {
                    var i = e,
                        n = window.matchMedia(i);
                    t._fireMatchMedia(i, n), n.addListener(function(e) {
                        t._fireMatchMedia(i, e)
                    })
                }()
            },
            _fireMatchMedia: function(t, e) {
                for (var i = e.matches ? "yes" : "no", n = 0; n < this.mtch[t].length; n++) this.mtch[t][n][i].call(this)
            },
            _getOriginalMenuId: function() {
                var t = this.$menu.attr("id");
                return this.conf.clone && t && t.length && (t = n.umm(t)), t
            },
            __api: function() {
                var t = this,
                    i = {};
                return e.each(this._api, function(e) {
                    var n = this;
                    i[n] = function() {
                        var e = t[n].apply(t, arguments);
                        return void 0 === e ? i : e
                    }
                }), i
            },
            __valueOrFn: function(t, e, i) {
                if ("function" == typeof e) {
                    var n = e.call(t[0]);
                    if (void 0 !== n) return n
                }
                return "function" != typeof e && void 0 !== e || void 0 === i ? e : i
            },
            __getPanelTitle: function(t, i) {
                var n;
                return "function" == typeof this.opts.navbar.title && (n = this.opts.navbar.title.call(t[0])), void 0 === n && (n = t.data(o.title)), void 0 !== n ? n : "string" == typeof i ? this.i18n(i) : this.i18n(e[a].defaults.navbar.title)
            },
            __refactorClass: function(t, e, i) {
                return t.filter("." + e).removeClass(e).addClass(i)
            },
            __findAddBack: function(t, e) {
                return t.find(e).add(t.filter(e))
            },
            __childAddBack: function(t, e) {
                return t.children(e).add(t.filter(e))
            },
            __filterListItems: function(t) {
                return t.not("." + n.listitem + "_divider").not("." + n.hidden)
            },
            __filterListItemAnchors: function(t) {
                return this.__filterListItems(t).children("a").not("." + n.btn + "_next")
            },
            __openPanelWoAnimation: function(t) {
                t.hasClass(n.panel + "_noanimation") || (t.addClass(n.panel + "_noanimation"), this.__transitionend(t, function() {
                    t.removeClass(n.panel + "_noanimation")
                }, this.conf.openingInterval), this.openPanel(t))
            },
            __transitionend: function(t, e, i) {
                var n = !1,
                    o = function(i) {
                        void 0 !== i && i.target != t[0] || (n || (t.off(s.transitionend), t.off(s.webkitTransitionEnd), e.call(t[0])), n = !0)
                    };
                t.on(s.transitionend, o), t.on(s.webkitTransitionEnd, o), setTimeout(o, 1.1 * i)
            },
            __getUniqueId: function() {
                return n.mm(e[a].uniqueId++)
            }
        }, e.fn[a] = function(t, i) {
            e[a].glbl || (r = {
                $wndw: e(window),
                $docu: e(document),
                $html: e("html"),
                $body: e("body")
            }, n = {}, o = {}, s = {}, e.each([n, o, s], function(t, e) {
                e.add = function(t) {
                    for (var i = 0, n = (t = t.split(" ")).length; i < n; i++) e[t[i]] = e.mm(t[i])
                }
            }), n.mm = function(t) {
                return "mm-" + t
            }, n.add("wrapper menu panels panel nopanel navbar listview nolistview listitem btn hidden"), n.umm = function(t) {
                return "mm-" == t.slice(0, 3) && (t = t.slice(3)), t
            }, o.mm = function(t) {
                return "mm-" + t
            }, o.add("parent child title"), s.mm = function(t) {
                return t + ".mm"
            }, s.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"), e[a]._c = n, e[a]._d = o, e[a]._e = s, e[a].glbl = r), t = e.extend(!0, {}, e[a].defaults, t), i = e.extend(!0, {}, e[a].configuration, i);
            var l = e();
            return this.each(function() {
                var n = e(this);
                if (!n.data(a)) {
                    var o = new e[a](n, t, i);
                    o.$menu.data(a, o.__api()), l = l.add(o.$menu)
                }
            }), l
        }, e[a].i18n = (i = {}, function(t, n) {
            switch (typeof t) {
                case "object":
                    return "string" == typeof n && (void 0 === i[n] && (i[n] = {}), e.extend(i[n], t)), i;
                case "string":
                    return "string" == typeof n && void 0 !== i[n] && i[n][t] || t;
                case "undefined":
                default:
                    return i
            }
        }), e[a].support = {
            touch: "ontouchstart" in window || navigator.msMaxTouchPoints || !1,
            csstransitions: "undefined" == typeof Modernizr || void 0 === Modernizr.csstransitions || Modernizr.csstransitions
        }),
        function(t) {
            var e, i, n, o, s = "mmenu",
                r = "offCanvas";
            t[s].addons[r] = {
                setup: function() {
                    if (this.opts[r]) {
                        var i = this.opts[r],
                            n = this.conf[r];
                        o = t[s].glbl, this._api = t.merge(this._api, ["open", "close", "setPage"]), "object" != typeof i && (i = {}), i = this.opts[r] = t.extend(!0, {}, t[s].defaults[r], i), "string" != typeof n.page.selector && (n.page.selector = "> " + n.page.nodetype), this.vars.opened = !1;
                        var a = [e.menu + "_offcanvas"];
                        this.bind("initMenu:after", function() {
                            var t = this;
                            this._initBlocker(), this.setPage(o.$page), this["_initWindow_" + r](), this.$menu.addClass(a.join(" ")).parent("." + e.wrapper).removeClass(e.wrapper), this.$menu[n.menu.insertMethod](n.menu.insertSelector);
                            var i = window.location.hash;
                            if (i) {
                                var s = this._getOriginalMenuId();
                                s && s == i.slice(1) && setTimeout(function() {
                                    t.open()
                                }, 1e3)
                            }
                        }), this.bind("setPage:after", function(t) {
                            o.$blck && o.$blck.children("a").attr("href", "#" + t.attr("id"))
                        }), this.bind("open:start:sr-aria", function() {
                            this.__sr_aria(this.$menu, "hidden", !1)
                        }), this.bind("close:finish:sr-aria", function() {
                            this.__sr_aria(this.$menu, "hidden", !0)
                        }), this.bind("initMenu:after:sr-aria", function() {
                            this.__sr_aria(this.$menu, "hidden", !0)
                        }), this.bind("initBlocker:after:sr-text", function() {
                            o.$blck.children("a").html(this.__sr_text(this.i18n(this.conf.screenReader.text.closeMenu)))
                        })
                    }
                },
                add: function() {
                    e = t[s]._c, i = t[s]._d, n = t[s]._e, e.add("slideout page no-csstransforms3d"), i.add("style")
                },
                clickAnchor: function(t, i) {
                    var n = this;
                    if (this.opts[r]) {
                        var s = this._getOriginalMenuId();
                        if (s && t.is('[href="#' + s + '"]')) {
                            if (i) return this.open(), !0;
                            var a = t.closest("." + e.menu);
                            if (a.length) {
                                var l = a.data("mmenu");
                                if (l && l.close) return l.close(), n.__transitionend(a, function() {
                                    n.open()
                                }, n.conf.transitionDuration), !0
                            }
                            return this.open(), !0
                        }
                        if (o.$page) return (s = o.$page.first().attr("id")) && t.is('[href="#' + s + '"]') ? (this.close(), !0) : void 0
                    }
                }
            }, t[s].defaults[r] = {
                blockUI: !0,
                moveBackground: !0
            }, t[s].configuration[r] = {
                menu: {
                    insertMethod: "prependTo",
                    insertSelector: "body"
                },
                page: {
                    nodetype: "div",
                    selector: null,
                    noSelector: [],
                    wrapIfNeeded: !0
                }
            }, t[s].prototype.open = function() {
                if (this.trigger("open:before"), !this.vars.opened) {
                    var t = this;
                    this._openSetup(), setTimeout(function() {
                        t._openFinish()
                    }, this.conf.openingInterval), this.trigger("open:after")
                }
            }, t[s].prototype._openSetup = function() {
                var s = this,
                    a = this.opts[r];
                this.closeAllOthers(), o.$page.each(function() {
                    t(this).data(i.style, t(this).attr("style") || "")
                }), o.$wndw.trigger(n.resize + "-" + r, [!0]);
                var l = [e.wrapper + "_opened"];
                a.blockUI && l.push(e.wrapper + "_blocking"), "modal" == a.blockUI && l.push(e.wrapper + "_modal"), a.moveBackground && l.push(e.wrapper + "_background"), o.$html.addClass(l.join(" ")), setTimeout(function() {
                    s.vars.opened = !0
                }, this.conf.openingInterval), this.$menu.addClass(e.menu + "_opened")
            }, t[s].prototype._openFinish = function() {
                var t = this;
                this.__transitionend(o.$page.first(), function() {
                    t.trigger("open:finish")
                }, this.conf.transitionDuration), this.trigger("open:start"), o.$html.addClass(e.wrapper + "_opening")
            }, t[s].prototype.close = function() {
                if (this.trigger("close:before"), this.vars.opened) {
                    var n = this;
                    this.__transitionend(o.$page.first(), function() {
                        n.$menu.removeClass(e.menu + "_opened");
                        var s = [e.wrapper + "_opened", e.wrapper + "_blocking", e.wrapper + "_modal", e.wrapper + "_background"];
                        o.$html.removeClass(s.join(" ")), o.$page.each(function() {
                            var e = t(this).data(i.style);
                            t(this).attr("style", e)
                        }), n.vars.opened = !1, n.trigger("close:finish")
                    }, this.conf.transitionDuration), this.trigger("close:start"), o.$html.removeClass(e.wrapper + "_opening"), this.trigger("close:after")
                }
            }, t[s].prototype.closeAllOthers = function() {
                o.$body.find("." + e.menu + "_offcanvas").not(this.$menu).each(function() {
                    var e = t(this).data(s);
                    e && e.close && e.close()
                })
            }, t[s].prototype.setPage = function(i) {
                this.trigger("setPage:before", i);
                var n = this,
                    s = this.conf[r];
                i && i.length || (i = o.$body.find(s.page.selector).not("." + e.menu).not("." + e.wrapper + "__blocker"), s.page.noSelector.length && (i = i.not(s.page.noSelector.join(", "))), 1 < i.length && s.page.wrapIfNeeded && (i = i.wrapAll("<" + this.conf[r].page.nodetype + " />").parent())), i.addClass(e.page + " " + e.slideout).each(function() {
                    t(this).attr("id", t(this).attr("id") || n.__getUniqueId())
                }), o.$page = i, this.trigger("setPage:after", i)
            }, t[s].prototype["_initWindow_" + r] = function() {
                o.$wndw.off(n.keydown + "-" + r).on(n.keydown + "-" + r, function(t) {
                    if (o.$html.hasClass(e.wrapper + "_opened") && 9 == t.keyCode) return t.preventDefault(), !1
                });
                var t = 0;
                o.$wndw.off(n.resize + "-" + r).on(n.resize + "-" + r, function(i, n) {
                    if (1 == o.$page.length && (n || o.$html.hasClass(e.wrapper + "_opened"))) {
                        var s = o.$wndw.height();
                        (n || s != t) && (t = s, o.$page.css("minHeight", s))
                    }
                })
            }, t[s].prototype._initBlocker = function() {
                var i = this,
                    s = this.opts[r],
                    a = this.conf[r];
                this.trigger("initBlocker:before"), s.blockUI && (o.$blck || (o.$blck = t('<div class="' + e.wrapper + "__blocker " + e.slideout + '" />').append("<a />")), o.$blck.appendTo(a.menu.insertSelector).off(n.touchstart + "-" + r + " " + n.touchmove + "-" + r).on(n.touchstart + "-" + r + " " + n.touchmove + "-" + r, function(t) {
                    t.preventDefault(), t.stopPropagation(), o.$blck.trigger(n.mousedown + "-" + r)
                }).off(n.mousedown + "-" + r).on(n.mousedown + "-" + r, function(t) {
                    t.preventDefault(), o.$html.hasClass(e.wrapper + "_modal") || (i.closeAllOthers(), i.close())
                }), this.trigger("initBlocker:after"))
            }
        }(t),
        function(t) {
            var e, i, n = "mmenu",
                o = "screenReader";
            t[n].addons[o] = {
                setup: function() {
                    var s = this,
                        r = this.opts[o],
                        a = this.conf[o];
                    t[n].glbl, "boolean" == typeof r && (r = {
                        aria: r,
                        text: r
                    }), "object" != typeof r && (r = {}), (r = this.opts[o] = t.extend(!0, {}, t[n].defaults[o], r)).aria && (this.bind("initAddons:after", function() {
                        this.bind("initMenu:after", function() {
                            this.trigger("initMenu:after:sr-aria")
                        }), this.bind("initNavbar:after", function() {
                            this.trigger("initNavbar:after:sr-aria", arguments[0])
                        }), this.bind("openPanel:start", function() {
                            this.trigger("openPanel:start:sr-aria", arguments[0])
                        }), this.bind("close:start", function() {
                            this.trigger("close:start:sr-aria")
                        }), this.bind("close:finish", function() {
                            this.trigger("close:finish:sr-aria")
                        }), this.bind("open:start", function() {
                            this.trigger("open:start:sr-aria")
                        }), this.bind("initOpened:after", function() {
                            this.trigger("initOpened:after:sr-aria")
                        })
                    }), this.bind("updateListview", function() {
                        this.$pnls.find("." + e.listview).children().each(function() {
                            s.__sr_aria(t(this), "hidden", t(this).is("." + e.hidden))
                        })
                    }), this.bind("openPanel:start", function(t) {
                        var i = this.$menu.find("." + e.panel).not(t).not(t.parents("." + e.panel)),
                            n = t.add(t.find("." + e.listitem + "_vertical ." + e.listitem + "_opened").children("." + e.panel));
                        this.__sr_aria(i, "hidden", !0), this.__sr_aria(n, "hidden", !1)
                    }), this.bind("closePanel", function(t) {
                        this.__sr_aria(t, "hidden", !0)
                    }), this.bind("initPanels:after", function(i) {
                        var n = i.find("." + e.btn).each(function() {
                            s.__sr_aria(t(this), "owns", t(this).attr("href").replace("#", ""))
                        });
                        this.__sr_aria(n, "haspopup", !0)
                    }), this.bind("initNavbar:after", function(t) {
                        var i = t.children("." + e.navbar);
                        this.__sr_aria(i, "hidden", !t.hasClass(e.panel + "_has-navbar"))
                    }), r.text && "parent" == this.opts.navbar.titleLink && this.bind("initNavbar:after", function(t) {
                        var i = t.children("." + e.navbar),
                            n = !!i.children("." + e.btn + "_prev").length;
                        this.__sr_aria(i.children("." + e.title), "hidden", n)
                    })), r.text && (this.bind("initAddons:after", function() {
                        this.bind("setPage:after", function() {
                            this.trigger("setPage:after:sr-text", arguments[0])
                        }), this.bind("initBlocker:after", function() {
                            this.trigger("initBlocker:after:sr-text")
                        })
                    }), this.bind("initNavbar:after", function(t) {
                        var i = t.children("." + e.navbar),
                            n = this.i18n(a.text.closeSubmenu);
                        i.children("." + e.btn + "_prev").html(this.__sr_text(n))
                    }), this.bind("initListview:after", function(t) {
                        var n = t.data(i.parent);
                        if (n && n.length) {
                            var o = n.children("." + e.btn + "_next"),
                                r = this.i18n(a.text[o.parent().is("." + e.listitem + "_vertical") ? "toggleSubmenu" : "openSubmenu"]);
                            o.append(s.__sr_text(r))
                        }
                    }))
                },
                add: function() {
                    e = t[n]._c, i = t[n]._d, t[n]._e, e.add("sronly")
                },
                clickAnchor: function(t, e) {}
            }, t[n].defaults[o] = {
                aria: !0,
                text: !0
            }, t[n].configuration[o] = {
                text: {
                    closeMenu: "Close menu",
                    closeSubmenu: "Close submenu",
                    openSubmenu: "Open submenu",
                    toggleSubmenu: "Toggle submenu"
                }
            }, t[n].prototype.__sr_aria = function(t, e, i) {
                t.prop("aria-" + e, i)[i ? "attr" : "removeAttr"]("aria-" + e, i)
            }, t[n].prototype.__sr_role = function(t, e) {
                t.prop("role", e)[e ? "attr" : "removeAttr"]("role", e)
            }, t[n].prototype.__sr_text = function(t) {
                return '<span class="' + e.sronly + '">' + t + "</span>"
            }
        }(t),
        function(t) {
            var e, i, n, o = "mmenu",
                s = "scrollBugFix";
            t[o].addons[s] = {
                setup: function() {
                    var i = this.opts[s];
                    this.conf[s], n = t[o].glbl, t[o].support.touch && this.opts.offCanvas && this.opts.offCanvas.blockUI && ("boolean" == typeof i && (i = {
                        fix: i
                    }), "object" != typeof i && (i = {}), (i = this.opts[s] = t.extend(!0, {}, t[o].defaults[s], i)).fix && (this.bind("open:start", function() {
                        this.$pnls.children("." + e.panel + "_opened").scrollTop(0)
                    }), this.bind("initMenu:after", function() {
                        this["_initWindow_" + s]()
                    })))
                },
                add: function() {
                    e = t[o]._c, t[o]._d, i = t[o]._e
                },
                clickAnchor: function(t, e) {}
            }, t[o].defaults[s] = {
                fix: !0
            }, t[o].prototype["_initWindow_" + s] = function() {
                var o = this;
                t(document).off(i.touchmove + "-" + s).on(i.touchmove + "-" + s, function(t) {
                    n.$html.hasClass(e.wrapper + "_opened") && t.preventDefault()
                });
                var r = !1;
                n.$body.off(i.touchstart + "-" + s).on(i.touchstart + "-" + s, "." + e.panels + "> ." + e.panel, function(t) {
                    n.$html.hasClass(e.wrapper + "_opened") && (r || (r = !0, 0 === t.currentTarget.scrollTop ? t.currentTarget.scrollTop = 1 : t.currentTarget.scrollHeight === t.currentTarget.scrollTop + t.currentTarget.offsetHeight && (t.currentTarget.scrollTop -= 1), r = !1))
                }).off(i.touchmove + "-" + s).on(i.touchmove + "-" + s, "." + e.panels + "> ." + e.panel, function(i) {
                    n.$html.hasClass(e.wrapper + "_opened") && t(this)[0].scrollHeight > t(this).innerHeight() && i.stopPropagation()
                }), n.$wndw.off(i.orientationchange + "-" + s).on(i.orientationchange + "-" + s, function() {
                    o.$pnls.children("." + e.panel + "_opened").scrollTop(0).css({
                        "-webkit-overflow-scrolling": "auto"
                    }).css({
                        "-webkit-overflow-scrolling": "touch"
                    })
                })
            }
        }(t),
        function(t) {
            var e, i = "mmenu",
                n = "navbars";
            t[i].addons[n] = {
                setup: function() {
                    var o = this,
                        s = this.opts[n],
                        r = this.conf[n];
                    if (t[i].glbl, void 0 !== s) {
                        s instanceof Array || (s = [s]);
                        var a = {},
                            l = {};
                        s.length && (t.each(s, function(c) {
                            var h = s[c];
                            "boolean" == typeof h && h && (h = {}), "object" != typeof h && (h = {}), void 0 === h.content && (h.content = ["prev", "title"]), h.content instanceof Array || (h.content = [h.content]), h = t.extend(!0, {}, o.opts.navbar, h);
                            var d = t('<div class="' + e.navbar + '" />'),
                                u = h.height;
                            "number" != typeof u ? u = 1 : 1 < (u = Math.min(4, Math.max(1, u))) && d.addClass(e.navbar + "_size-" + u);
                            var f = h.position;
                            switch (f) {
                                case "bottom":
                                    break;
                                default:
                                    f = "top"
                            }
                            a[f] || (a[f] = 0), a[f] += u, l[f] || (l[f] = t('<div class="' + e.navbars + "_" + f + '" />')), l[f].append(d);
                            for (var p = 0, g = h.content.length; p < g; p++) {
                                var m = t[i].addons[n][h.content[p]] || null;
                                m ? m.call(o, d, h, r) : ((m = h.content[p]) instanceof t || (m = t(h.content[p])), d.append(m))
                            }
                            var v = t[i].addons[n][h.type] || null;
                            v && v.call(o, d, h, r), d.children("." + e.btn).length && d.addClass(e.navbar + "_has-btns")
                        }), this.bind("initMenu:after", function() {
                            for (var t in a) this.$menu.addClass(e.menu + "_navbar_" + t + "-" + a[t]), this.$menu["bottom" == t ? "append" : "prepend"](l[t])
                        }))
                    }
                },
                add: function() {
                    e = t[i]._c, t[i]._d, t[i]._e, e.add(n)
                },
                clickAnchor: function(t, e) {}
            }, t[i].configuration[n] = {
                breadcrumbs: {
                    separator: "/",
                    removeFirst: !1
                }
            }, t[i].configuration.classNames[n] = {}
        }(t),
        function(t) {
            var e = "mmenu",
                i = "navbars";
            t[e].addons[i].tabs = function(n, o, s) {
                var r = t[e]._c,
                    a = t[e]._d,
                    l = t[e]._e,
                    c = this,
                    h = n.children("a");
                n.addClass(r.navbar + "_tabs").parent().addClass(r.navbars + "_has-tabs"), h.on(l.click + "-" + i, function(e) {
                    e.preventDefault();
                    var i = t(this);
                    if (i.hasClass(r.navbar + "__tab_selected")) e.stopImmediatePropagation();
                    else try {
                        c.openPanel(t(i.attr("href")), !1), e.stopImmediatePropagation()
                    } catch (e) {}
                }), this.bind("openPanel:start", function t(e) {
                    h.removeClass(r.navbar + "__tab_selected");
                    var i = h.filter('[href="#' + e.attr("id") + '"]');
                    if (i.length) i.addClass(r.navbar + "__tab_selected");
                    else {
                        var n = e.data(a.parent);
                        n && n.length && t(n.closest("." + r.panel))
                    }
                })
            }
        }(t), !0
}),
function(t) {
    var e = !1;
    if ("function" == typeof define && define.amd && (define(t), e = !0), "object" == typeof exports && (module.exports = t(), e = !0), !e) {
        var i = window.Cookies,
            n = window.Cookies = t();
        n.noConflict = function() {
            return window.Cookies = i, n
        }
    }
}(function() {
    function t() {
        for (var t = 0, e = {}; t < arguments.length; t++) {
            var i = arguments[t];
            for (var n in i) e[n] = i[n]
        }
        return e
    }
    return function e(i) {
        function n(e, o, s) {
            var r;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if ("number" == typeof(s = t({
                            path: "/"
                        }, n.defaults, s)).expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * s.expires), s.expires = a
                    }
                    s.expires = s.expires ? s.expires.toUTCString() : "";
                    try {
                        r = JSON.stringify(o), /^[\{\[]/.test(r) && (o = r)
                    } catch (t) {}
                    o = i.write ? i.write(o, e) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = (e = (e = encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var l = "";
                    for (var c in s) s[c] && (l += "; " + c, !0 !== s[c] && (l += "=" + s[c]));
                    return document.cookie = e + "=" + o + l
                }
                e || (r = {});
                for (var h = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < h.length; u++) {
                    var f = h[u].split("="),
                        p = f.slice(1).join("=");
                    '"' === p.charAt(0) && (p = p.slice(1, -1));
                    try {
                        var g = f[0].replace(d, decodeURIComponent);
                        if (p = i.read ? i.read(p, g) : i(p, g) || p.replace(d, decodeURIComponent), this.json) try {
                            p = JSON.parse(p)
                        } catch (t) {}
                        if (e === g) {
                            r = p;
                            break
                        }
                        e || (r[g] = p)
                    } catch (t) {}
                }
                return r
            }
        }
        return n.set = n, n.get = function(t) {
            return n.call(n, t)
        }, n.getJSON = function() {
            return n.apply({
                json: !0
            }, [].slice.call(arguments))
        }, n.defaults = {}, n.remove = function(e, i) {
            n(e, "", t(i, {
                expires: -1
            }))
        }, n.withConverter = e, n
    }(function() {})
}),
function() {
    "use strict";

    function t(n) {
        if (!n) throw new Error("No options passed to Waypoint constructor");
        if (!n.element) throw new Error("No element option passed to Waypoint constructor");
        if (!n.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, n), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }
    var e = 0,
        i = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function() {
        return this.enabled = !1, this
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function() {
        return this.group.next(this)
    }, t.prototype.previous = function() {
        return this.group.previous(this)
    }, t.invokeAll = function(t) {
        var e = [];
        for (var n in i) e.push(i[n]);
        for (var o = 0, s = e.length; s > o; o++) e[o][t]()
    }, t.destroyAll = function() {
        t.invokeAll("destroy")
    }, t.disableAll = function() {
        t.invokeAll("disable")
    }, t.enableAll = function() {
        t.invokeAll("enable")
    }, t.refreshAll = function() {
        t.Context.refreshAll()
    }, t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = o.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, n[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var i = 0,
        n = {},
        o = window.Waypoint,
        s = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete n[this.key])
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(), e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0, o.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || o.isTouch) && (e.didScroll = !0, o.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function() {
        o.Context.refreshAll()
    }, e.prototype.handleScroll = function() {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var i in e) {
            var n = e[i],
                o = n.newScroll > n.oldScroll ? n.forward : n.backward;
            for (var s in this.waypoints[i]) {
                var r = this.waypoints[i][s],
                    a = n.oldScroll < r.triggerPoint,
                    l = n.newScroll >= r.triggerPoint;
                (a && l || !a && !l) && (r.queueTrigger(o), t[r.group.id] = r.group)
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, e.prototype.innerHeight = function() {
        return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function() {
        return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var n = 0, o = t.length; o > n; n++) t[n].destroy()
    }, e.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            n = {};
        for (var s in this.handleScroll(), t = {
                horizontal: {
                    contextOffset: e ? 0 : i.left,
                    contextScroll: e ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: e ? 0 : i.top,
                    contextScroll: e ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            }) {
            var r = t[s];
            for (var a in this.waypoints[s]) {
                var l, c, h, d, u = this.waypoints[s][a],
                    f = u.options.offset,
                    p = u.triggerPoint,
                    g = 0,
                    m = null == p;
                u.element !== u.element.window && (g = u.adapter.offset()[r.offsetProp]), "function" == typeof f ? f = f.apply(u) : "string" == typeof f && (f = parseFloat(f), u.options.offset.indexOf("%") > -1 && (f = Math.ceil(r.contextDimension * f / 100))), l = r.contextScroll - r.contextOffset, u.triggerPoint = g + l - f, c = p < r.oldScroll, h = u.triggerPoint >= r.oldScroll, d = !c && !h, !m && (c && h) ? (u.queueTrigger(r.backward), n[u.group.id] = u.group) : !m && d ? (u.queueTrigger(r.forward), n[u.group.id] = u.group) : m && r.oldScroll >= u.triggerPoint && (u.queueTrigger(r.forward), n[u.group.id] = u.group)
            }
        }
        return o.requestAnimationFrame(function() {
            for (var t in n) n[t].flushTriggers()
        }), this
    }, e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function() {
        for (var t in n) n[t].refresh()
    }, e.findByElement = function(t) {
        return n[t.waypointContextKey]
    }, window.onload = function() {
        s && s(), e.refreshAll()
    }, o.requestAnimationFrame = function(e) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
    }, o.Context = e
}(),
function() {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this
    }
    var n = {
            vertical: {},
            horizontal: {}
        },
        o = window.Waypoint;
    i.prototype.add = function(t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var n = this.triggerQueues[i],
                o = "up" === i || "left" === i;
            n.sort(o ? e : t);
            for (var s = 0, r = n.length; r > s; s += 1) {
                var a = n[s];
                (a.options.continuous || s === n.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = o.Adapter.inArray(e, this.waypoints);
        return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = o.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function(t) {
        var e = o.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function() {
        return this.waypoints[0]
    }, i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function(t) {
        return n[t.axis][t.name] || new i(t)
    }, o.Group = i
}(),
function() {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }
    var e = window.jQuery,
        i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
        t.prototype[i] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function(i, n) {
        t[n] = e[n]
    }), i.adapters.push({
        name: "jquery",
        Adapter: t
    }), i.Adapter = t
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var i = [],
                n = arguments[0];
            return t.isFunction(arguments[0]) && ((n = t.extend({}, arguments[1])).handler = arguments[0]), this.each(function() {
                var o = t.extend({}, n, {
                    element: this
                });
                "string" == typeof o.context && (o.context = t(this).closest(o.context)[0]), i.push(new e(o))
            }), i
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}(),
function() {
    "use strict";

    function t(n) {
        this.options = e.extend({}, t.defaults, n), this.container = this.options.element, "auto" !== this.options.container && (this.container = this.options.container), this.$container = e(this.container), this.$more = e(this.options.more), this.$more.length && (this.setupHandler(), this.waypoint = new i(this.options))
    }
    var e = window.jQuery,
        i = window.Waypoint;
    t.prototype.setupHandler = function() {
        this.options.handler = e.proxy(function() {
            this.options.onBeforePageLoad(), this.destroy(), this.$container.addClass(this.options.loadingClass), e.get(e(this.options.more).attr("href"), e.proxy(function(t) {
                var n = e(e.parseHTML(t)),
                    o = n.find(this.options.more),
                    s = n.find(this.options.items);
                s.length || (s = n.filter(this.options.items)), this.$container.append(s), this.$container.removeClass(this.options.loadingClass), o.length || (o = n.filter(this.options.more)), o.length ? (this.$more.replaceWith(o), this.$more = o, this.waypoint = new i(this.options)) : this.$more.remove(), this.options.onAfterPageLoad(s)
            }, this))
        }, this)
    }, t.prototype.destroy = function() {
        this.waypoint && this.waypoint.destroy()
    }, t.defaults = {
        container: "auto",
        items: ".infinite-item",
        more: ".infinite-more-link",
        offset: "bottom-in-view",
        loadingClass: "infinite-loading",
        onBeforePageLoad: e.noop,
        onAfterPageLoad: e.noop
    }, i.Infinite = t
}(),
function(t) {
    t.fn.mediaWrapper = function(e) {
        var i = t.extend({
            intrinsic: !0,
            baseWidth: 16,
            baseHeight: 9
        }, e);
        return this.each(function() {
            var e;
            e = 1 == i.intrinsic && "" !== t(this).attr("width") && "" !== t(this).attr("height") ? t(this).attr("height") / t(this).attr("width") * 100 : i.baseHeight / i.baseWidth * 100, t(this).wrap('<div class="mediaWrapper" style="position: relative; width: 100%; height: 0; padding: ' + e + '% 0 0 0; " />').css({
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0"
            })
        })
    }
}(jQuery), PointerEventsPolyfill.initialize = function(t) {
        return null == PointerEventsPolyfill.singleton && (PointerEventsPolyfill.singleton = new PointerEventsPolyfill(t)), PointerEventsPolyfill.singleton
    }, PointerEventsPolyfill.prototype.register_mouse_events = function() {
        $(document).on(this.options.mouseEvents.join(" "), this.options.selector, function(t) {
            if ("none" == $(this).css("pointer-events")) {
                var e = $(this).css("display");
                $(this).css("display", "none");
                var i = document.elementFromPoint(t.clientX, t.clientY);
                return e ? $(this).css("display", e) : $(this).css("display", ""), t.target = i, $(i).trigger(t), !1
            }
            return !0
        })
    },
    function(t, e) {
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
    }(window, function(t, e) {
        "use strict";

        function i(i, s, a) {
            (a = a || e || t.jQuery) && (s.prototype.option || (s.prototype.option = function(t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
            }), a.fn[i] = function(t) {
                return "string" == typeof t ? function(t, e, n) {
                    var o, s = "$()." + i + '("' + e + '")';
                    return t.each(function(t, l) {
                        var c = a.data(l, i);
                        if (c) {
                            var h = c[e];
                            if (h && "_" != e.charAt(0)) {
                                var d = h.apply(c, n);
                                o = void 0 === o ? d : o
                            } else r(s + " is not a valid method")
                        } else r(i + " not initialized. Cannot call methods, i.e. " + s)
                    }), void 0 !== o ? o : t
                }(this, t, o.call(arguments, 1)) : (function(t, e) {
                    t.each(function(t, n) {
                        var o = a.data(n, i);
                        o ? (o.option(e), o._init()) : (o = new s(n, e), a.data(n, i, o))
                    })
                }(this, t), this)
            }, n(a))
        }

        function n(t) {
            !t || t && t.bridget || (t.bridget = i)
        }
        var o = Array.prototype.slice,
            s = t.console,
            r = void 0 === s ? function() {} : function(t) {
                s.error(t)
            };
        return n(e || t.jQuery), i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    n = i[t] = i[t] || [];
                return -1 == n.indexOf(e) && n.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {};
                return (i[t] = i[t] || {})[e] = !0, this
            }
        }, e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                i = i.slice(0), e = e || [];
                for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                    var s = i[o];
                    n && n[s] && (this.off(t, s), delete n[s]), s.apply(this, e)
                }
                return this
            }
        }, e.allOff = function() {
            delete this._events, delete this._onceEvents
        }, t
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function() {
        "use strict";

        function t(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e
        }

        function e(t) {
            var e = getComputedStyle(t);
            return e || s("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
        }

        function i() {
            if (!l) {
                l = !0;
                var i = document.createElement("div");
                i.style.width = "200px", i.style.padding = "1px 2px 3px 4px", i.style.borderStyle = "solid", i.style.borderWidth = "1px 2px 3px 4px", i.style.boxSizing = "border-box";
                var s = document.body || document.documentElement;
                s.appendChild(i);
                var r = e(i);
                o = 200 == Math.round(t(r.width)), n.isBoxSizeOuter = o, s.removeChild(i)
            }
        }

        function n(n) {
            if (i(), "string" == typeof n && (n = document.querySelector(n)), n && "object" == typeof n && n.nodeType) {
                var s = e(n);
                if ("none" == s.display) return function() {
                    for (var t = {
                            width: 0,
                            height: 0,
                            innerWidth: 0,
                            innerHeight: 0,
                            outerWidth: 0,
                            outerHeight: 0
                        }, e = 0; e < a; e++) t[r[e]] = 0;
                    return t
                }();
                var l = {};
                l.width = n.offsetWidth, l.height = n.offsetHeight;
                for (var c = l.isBorderBox = "border-box" == s.boxSizing, h = 0; h < a; h++) {
                    var d = r[h],
                        u = s[d],
                        f = parseFloat(u);
                    l[d] = isNaN(f) ? 0 : f
                }
                var p = l.paddingLeft + l.paddingRight,
                    g = l.paddingTop + l.paddingBottom,
                    m = l.marginLeft + l.marginRight,
                    v = l.marginTop + l.marginBottom,
                    y = l.borderLeftWidth + l.borderRightWidth,
                    b = l.borderTopWidth + l.borderBottomWidth,
                    w = c && o,
                    x = t(s.width);
                !1 !== x && (l.width = x + (w ? 0 : p + y));
                var C = t(s.height);
                return !1 !== C && (l.height = C + (w ? 0 : g + b)), l.innerWidth = l.width - (p + y), l.innerHeight = l.height - (g + b), l.outerWidth = l.width + m, l.outerHeight = l.height + v, l
            }
        }
        var o, s = "undefined" == typeof console ? function() {} : function(t) {
                console.error(t)
            },
            r = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            a = r.length,
            l = !1;
        return n
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function() {
        "use strict";
        var t = function() {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var n = e[i] + "MatchesSelector";
                if (t[n]) return n
            }
        }();
        return function(e, i) {
            return e[t](i)
        }
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, function(t, e) {
        var i = {
                extend: function(t, e) {
                    for (var i in e) t[i] = e[i];
                    return t
                },
                modulo: function(t, e) {
                    return (t % e + e) % e
                }
            },
            n = Array.prototype.slice;
        i.makeArray = function(t) {
            return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? n.call(t) : [t]
        }, i.removeFrom = function(t, e) {
            var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
        }, i.getParent = function(t, i) {
            for (; t.parentNode && t != document.body;)
                if (t = t.parentNode, e(t, i)) return t
        }, i.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, i.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, i.filterFindElements = function(t, n) {
            t = i.makeArray(t);
            var o = [];
            return t.forEach(function(t) {
                if (t instanceof HTMLElement) {
                    if (!n) return void o.push(t);
                    e(t, n) && o.push(t);
                    for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++) o.push(i[s])
                }
            }), o
        }, i.debounceMethod = function(t, e, i) {
            i = i || 100;
            var n = t.prototype[e],
                o = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[o];
                clearTimeout(t);
                var e = arguments,
                    s = this;
                this[o] = setTimeout(function() {
                    n.apply(s, e), delete s[o]
                }, i)
            }
        }, i.docReady = function(t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
        }, i.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var o = t.console;
        return i.htmlInit = function(e, n) {
            i.docReady(function() {
                var s = i.toDashed(n),
                    r = "data-" + s,
                    a = document.querySelectorAll("[" + r + "]"),
                    l = document.querySelectorAll(".js-" + s),
                    c = i.makeArray(a).concat(i.makeArray(l)),
                    h = r + "-options",
                    d = t.jQuery;
                c.forEach(function(t) {
                    var i, s = t.getAttribute(r) || t.getAttribute(h);
                    try {
                        i = s && JSON.parse(s)
                    } catch (e) {
                        return void(o && o.error("Error parsing " + r + " on " + t.className + ": " + e))
                    }
                    var a = new e(t, i);
                    d && d.data(t, n, a)
                })
            })
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("get-size")) : (t.Flickity = t.Flickity || {}, t.Flickity.Cell = e(t, t.getSize))
    }(window, function(t, e) {
        function i(t, e) {
            this.element = t, this.parent = e, this.create()
        }
        var n = i.prototype;
        return n.create = function() {
            this.element.style.position = "absolute", this.element.setAttribute("aria-selected", "false"), this.x = 0, this.shift = 0
        }, n.destroy = function() {
            this.element.style.position = "";
            var t = this.parent.originSide;
            this.element.removeAttribute("aria-selected"), this.element.style[t] = ""
        }, n.getSize = function() {
            this.size = e(this.element)
        }, n.setPosition = function(t) {
            this.x = t, this.updateTarget(), this.renderPosition(t)
        }, n.updateTarget = n.setDefaultTarget = function() {
            var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
            this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
        }, n.renderPosition = function(t) {
            var e = this.parent.originSide;
            this.element.style[e] = this.parent.getPositionValue(t)
        }, n.wrapShift = function(t) {
            this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t)
        }, n.remove = function() {
            this.element.parentNode.removeChild(this.element)
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {}, t.Flickity.Slide = e())
    }(window, function() {
        "use strict";

        function t(t) {
            this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, this.height = 0
        }
        var e = t.prototype;
        return e.addCell = function(t) {
            if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length) {
                this.x = t.x;
                var e = this.isOriginLeft ? "marginLeft" : "marginRight";
                this.firstMargin = t.size[e]
            }
        }, e.updateTarget = function() {
            var t = this.isOriginLeft ? "marginRight" : "marginLeft",
                e = this.getLastCell(),
                i = e ? e.size[t] : 0,
                n = this.outerWidth - (this.firstMargin + i);
            this.target = this.x + this.firstMargin + n * this.parent.cellAlign
        }, e.getLastCell = function() {
            return this.cells[this.cells.length - 1]
        }, e.select = function() {
            this.changeSelected(!0)
        }, e.unselect = function() {
            this.changeSelected(!1)
        }, e.changeSelected = function(t) {
            var e = t ? "add" : "remove";
            this.cells.forEach(function(i) {
                i.element.classList[e]("is-selected"), i.element.setAttribute("aria-selected", t.toString())
            })
        }, e.getCellElements = function() {
            return this.cells.map(function(t) {
                return t.element
            })
        }, t
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {}, t.Flickity.animatePrototype = e(t, t.fizzyUIUtils))
    }(window, function(t, e) {
        var i = {
            startAnimation: function() {
                this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
            },
            animate: function() {
                this.applyDragForce(), this.applySelectedAttraction();
                var t = this.x;
                if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
                    var e = this;
                    requestAnimationFrame(function() {
                        e.animate()
                    })
                }
            },
            positionSlider: function() {
                var t = this.x;
                this.options.wrapAround && this.cells.length > 1 && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), t += this.cursorPosition, t = this.options.rightToLeft ? -t : t;
                var i = this.getPositionValue(t);
                this.slider.style.transform = this.isAnimating ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")";
                var n = this.slides[0];
                if (n) {
                    var o = -this.x - n.target,
                        s = o / this.slidesWidth;
                    this.dispatchEvent("scroll", null, [s, o])
                }
            },
            positionSliderAtSelected: function() {
                this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider())
            },
            getPositionValue: function(t) {
                return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
            },
            settle: function(t) {
                this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]))
            },
            shiftWrapCells: function(t) {
                var e = this.cursorPosition + t;
                this._shiftCells(this.beforeShiftCells, e, -1);
                var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
                this._shiftCells(this.afterShiftCells, i, 1)
            },
            _shiftCells: function(t, e, i) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n],
                        s = e > 0 ? i : 0;
                    o.wrapShift(s), e -= o.size.outerWidth
                }
            },
            _unshiftCells: function(t) {
                if (t && t.length)
                    for (var e = 0; e < t.length; e++) t[e].wrapShift(0)
            },
            integratePhysics: function() {
                this.x += this.velocity, this.velocity *= this.getFrictionFactor()
            },
            applyForce: function(t) {
                this.velocity += t
            },
            getFrictionFactor: function() {
                return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
            },
            getRestingPosition: function() {
                return this.x + this.velocity / (1 - this.getFrictionFactor())
            },
            applyDragForce: function() {
                if (this.isDraggable && this.isPointerDown) {
                    var t = this.dragX - this.x - this.velocity;
                    this.applyForce(t)
                }
            },
            applySelectedAttraction: function() {
                if (!(this.isDraggable && this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
                    var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
                    this.applyForce(t)
                }
            }
        };
        return i
    }),
    function(t, e) {
        if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function(i, n, o, s, r, a) {
            return e(t, i, n, o, s, r, a)
        });
        else if ("object" == typeof module && module.exports) module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
        else {
            var i = t.Flickity;
            t.Flickity = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, i.Cell, i.Slide, i.animatePrototype)
        }
    }(window, function(t, e, i, n, o, s, r) {
        function a(t, e) {
            for (t = n.makeArray(t); t.length;) e.appendChild(t.shift())
        }

        function l(t, e) {
            var i = n.getQueryElement(t);
            if (i) {
                if (this.element = i, this.element.flickityGUID) {
                    var o = f[this.element.flickityGUID];
                    return o.option(e), o
                }
                c && (this.$element = c(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e), this._create()
            } else d && d.error("Bad element for Flickity: " + (i || t))
        }
        var c = t.jQuery,
            h = t.getComputedStyle,
            d = t.console,
            u = 0,
            f = {};
        l.defaults = {
            accessibility: !0,
            cellAlign: "center",
            freeScrollFriction: .075,
            friction: .28,
            namespaceJQueryEvents: !0,
            percentPosition: !0,
            resize: !0,
            selectedAttraction: .025,
            setGallerySize: !0
        }, l.createMethods = [];
        var p = l.prototype;
        n.extend(p, e.prototype), p._create = function() {
            var e = this.guid = ++u;
            for (var i in this.element.flickityGUID = e, f[e] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this), this.options.on) {
                var n = this.options.on[i];
                this.on(i, n)
            }
            l.createMethods.forEach(function(t) {
                this[t]()
            }, this), this.options.watchCSS ? this.watchCSS() : this.activate()
        }, p.option = function(t) {
            n.extend(this.options, t)
        }, p.activate = function() {
            if (!this.isActive) {
                this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), a(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate");
                var t, e = this.options.initialIndex;
                t = this.isInitActivated ? this.selectedIndex : void 0 !== e && this.cells[e] ? e : 0, this.select(t, !1, !0), this.isInitActivated = !0, this.dispatchEvent("ready")
            }
        }, p._createSlider = function() {
            var t = document.createElement("div");
            t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
        }, p._filterFindCellElements = function(t) {
            return n.filterFindElements(t, this.options.cellSelector)
        }, p.reloadCells = function() {
            this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
        }, p._makeCells = function(t) {
            return this._filterFindCellElements(t).map(function(t) {
                return new o(t, this)
            }, this)
        }, p.getLastCell = function() {
            return this.cells[this.cells.length - 1]
        }, p.getLastSlide = function() {
            return this.slides[this.slides.length - 1]
        }, p.positionCells = function() {
            this._sizeCells(this.cells), this._positionCells(0)
        }, p._positionCells = function(t) {
            t = t || 0, this.maxCellHeight = t && this.maxCellHeight || 0;
            var e = 0;
            if (t > 0) {
                var i = this.cells[t - 1];
                e = i.x + i.size.outerWidth
            }
            for (var n = this.cells.length, o = t; o < n; o++) {
                var s = this.cells[o];
                s.setPosition(e), e += s.size.outerWidth, this.maxCellHeight = Math.max(s.size.outerHeight, this.maxCellHeight)
            }
            this.slideableWidth = e, this.updateSlides(), this._containSlides(), this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0
        }, p._sizeCells = function(t) {
            t.forEach(function(t) {
                t.getSize()
            })
        }, p.updateSlides = function() {
            if (this.slides = [], this.cells.length) {
                var t = new s(this);
                this.slides.push(t);
                var e = "left" == this.originSide ? "marginRight" : "marginLeft",
                    i = this._getCanCellFit();
                this.cells.forEach(function(n, o) {
                    if (t.cells.length) {
                        var r = t.outerWidth - t.firstMargin + (n.size.outerWidth - n.size[e]);
                        i.call(this, o, r) ? t.addCell(n) : (t.updateTarget(), t = new s(this), this.slides.push(t), t.addCell(n))
                    } else t.addCell(n)
                }, this), t.updateTarget(), this.updateSelectedSlide()
            }
        }, p._getCanCellFit = function() {
            var t = this.options.groupCells;
            if (!t) return function() {
                return !1
            };
            if ("number" == typeof t) {
                var e = parseInt(t, 10);
                return function(t) {
                    return t % e != 0
                }
            }
            var i = "string" == typeof t && t.match(/^(\d+)%$/),
                n = i ? parseInt(i[1], 10) / 100 : 1;
            return function(t, e) {
                return e <= (this.size.innerWidth + 1) * n
            }
        }, p._init = p.reposition = function() {
            this.positionCells(), this.positionSliderAtSelected()
        }, p.getSize = function() {
            this.size = i(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
        };
        var g = {
            center: {
                left: .5,
                right: .5
            },
            left: {
                left: 0,
                right: 1
            },
            right: {
                right: 0,
                left: 1
            }
        };
        return p.setCellAlign = function() {
            var t = g[this.options.cellAlign];
            this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
        }, p.setGallerySize = function() {
            if (this.options.setGallerySize) {
                var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
                this.viewport.style.height = t + "px"
            }
        }, p._getWrapShiftCells = function() {
            if (this.options.wrapAround) {
                this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
                var t = this.cursorPosition,
                    e = this.cells.length - 1;
                this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1)
            }
        }, p._getGapCells = function(t, e, i) {
            for (var n = []; t > 0;) {
                var o = this.cells[e];
                if (!o) break;
                n.push(o), e += i, t -= o.size.outerWidth
            }
            return n
        }, p._containSlides = function() {
            if (this.options.contain && !this.options.wrapAround && this.cells.length) {
                var t = this.options.rightToLeft,
                    e = t ? "marginRight" : "marginLeft",
                    i = t ? "marginLeft" : "marginRight",
                    n = this.slideableWidth - this.getLastCell().size[i],
                    o = n < this.size.innerWidth,
                    s = this.cursorPosition + this.cells[0].size[e],
                    r = n - this.size.innerWidth * (1 - this.cellAlign);
                this.slides.forEach(function(t) {
                    o ? t.target = n * this.cellAlign : (t.target = Math.max(t.target, s), t.target = Math.min(t.target, r))
                }, this)
            }
        }, p.dispatchEvent = function(t, e, i) {
            var n = e ? [e].concat(i) : i;
            if (this.emitEvent(t, n), c && this.$element) {
                var o = t += this.options.namespaceJQueryEvents ? ".flickity" : "";
                if (e) {
                    var s = c.Event(e);
                    s.type = t, o = s
                }
                this.$element.trigger(o, i)
            }
        }, p.select = function(t, e, i) {
            if (this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = n.modulo(t, this.slides.length)), this.slides[t])) {
                var o = this.selectedIndex;
                this.selectedIndex = t, this.updateSelectedSlide(), i ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [t]), t != o && this.dispatchEvent("change", null, [t]), this.dispatchEvent("cellSelect")
            }
        }, p._wrapSelect = function(t) {
            var e = this.slides.length;
            if (!(this.options.wrapAround && e > 1)) return t;
            var i = n.modulo(t, e),
                o = Math.abs(i - this.selectedIndex),
                s = Math.abs(i + e - this.selectedIndex),
                r = Math.abs(i - e - this.selectedIndex);
            !this.isDragSelect && s < o ? t += e : !this.isDragSelect && r < o && (t -= e), t < 0 ? this.x -= this.slideableWidth : t >= e && (this.x += this.slideableWidth)
        }, p.previous = function(t, e) {
            this.select(this.selectedIndex - 1, t, e)
        }, p.next = function(t, e) {
            this.select(this.selectedIndex + 1, t, e)
        }, p.updateSelectedSlide = function() {
            var t = this.slides[this.selectedIndex];
            t && (this.unselectSelectedSlide(), this.selectedSlide = t, t.select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0])
        }, p.unselectSelectedSlide = function() {
            this.selectedSlide && this.selectedSlide.unselect()
        }, p.selectCell = function(t, e, i) {
            var n = this.queryCell(t);
            if (n) {
                var o = this.getCellSlideIndex(n);
                this.select(o, e, i)
            }
        }, p.getCellSlideIndex = function(t) {
            for (var e = 0; e < this.slides.length; e++) {
                if (-1 != this.slides[e].cells.indexOf(t)) return e
            }
        }, p.getCell = function(t) {
            for (var e = 0; e < this.cells.length; e++) {
                var i = this.cells[e];
                if (i.element == t) return i
            }
        }, p.getCells = function(t) {
            t = n.makeArray(t);
            var e = [];
            return t.forEach(function(t) {
                var i = this.getCell(t);
                i && e.push(i)
            }, this), e
        }, p.getCellElements = function() {
            return this.cells.map(function(t) {
                return t.element
            })
        }, p.getParentCell = function(t) {
            var e = this.getCell(t);
            return e || (t = n.getParent(t, ".flickity-slider > *"), this.getCell(t))
        }, p.getAdjacentCellElements = function(t, e) {
            if (!t) return this.selectedSlide.getCellElements();
            e = void 0 === e ? this.selectedIndex : e;
            var i = this.slides.length;
            if (1 + 2 * t >= i) return this.getCellElements();
            for (var o = [], s = e - t; s <= e + t; s++) {
                var r = this.options.wrapAround ? n.modulo(s, i) : s,
                    a = this.slides[r];
                a && (o = o.concat(a.getCellElements()))
            }
            return o
        }, p.queryCell = function(t) {
            return "number" == typeof t ? this.cells[t] : ("string" == typeof t && (t = this.element.querySelector(t)), this.getCell(t))
        }, p.uiChange = function() {
            this.emitEvent("uiChange")
        }, p.childUIPointerDown = function(t) {
            this.emitEvent("childUIPointerDown", [t])
        }, p.onresize = function() {
            this.watchCSS(), this.resize()
        }, n.debounceMethod(l, "onresize", 150), p.resize = function() {
            if (this.isActive) {
                this.getSize(), this.options.wrapAround && (this.x = n.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
                var t = this.selectedElements && this.selectedElements[0];
                this.selectCell(t, !1, !0)
            }
        }, p.watchCSS = function() {
            this.options.watchCSS && (-1 != h(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
        }, p.onkeydown = function(t) {
            var e = document.activeElement && document.activeElement != this.element;
            if (this.options.accessibility && !e) {
                var i = l.keyboardHandlers[t.keyCode];
                i && i.call(this)
            }
        }, l.keyboardHandlers = {
            37: function() {
                var t = this.options.rightToLeft ? "next" : "previous";
                this.uiChange(), this[t]()
            },
            39: function() {
                var t = this.options.rightToLeft ? "previous" : "next";
                this.uiChange(), this[t]()
            }
        }, p.focus = function() {
            var e = t.pageYOffset;
            this.element.focus({
                preventScroll: !0
            }), t.pageYOffset != e && t.scrollTo(t.pageXOffset, e)
        }, p.deactivate = function() {
            this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach(function(t) {
                t.destroy()
            }), this.element.removeChild(this.viewport), a(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
        }, p.destroy = function() {
            this.deactivate(), t.removeEventListener("resize", this), this.emitEvent("destroy"), c && this.$element && c.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete f[this.guid]
        }, n.extend(p, r), l.data = function(t) {
            var e = (t = n.getQueryElement(t)) && t.flickityGUID;
            return e && f[e]
        }, n.htmlInit(l, "flickity"), c && c.bridget && c.bridget("flickity", l), l.setJQuery = function(t) {
            c = t
        }, l.Cell = o, l
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.Unipointer = e(t, t.EvEmitter)
    }(window, function(t, e) {
        function i() {}
        var n = i.prototype = Object.create(e.prototype);
        n.bindStartEvent = function(t) {
            this._bindStartEvent(t, !0)
        }, n.unbindStartEvent = function(t) {
            this._bindStartEvent(t, !1)
        }, n._bindStartEvent = function(e, i) {
            var n = (i = void 0 === i || i) ? "addEventListener" : "removeEventListener",
                o = "mousedown";
            t.PointerEvent ? o = "pointerdown" : "ontouchstart" in t && (o = "touchstart"), e[n](o, this)
        }, n.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.getTouch = function(t) {
            for (var e = 0; e < t.length; e++) {
                var i = t[e];
                if (i.identifier == this.pointerIdentifier) return i
            }
        }, n.onmousedown = function(t) {
            var e = t.button;
            e && 0 !== e && 1 !== e || this._pointerDown(t, t)
        }, n.ontouchstart = function(t) {
            this._pointerDown(t, t.changedTouches[0])
        }, n.onpointerdown = function(t) {
            this._pointerDown(t, t)
        }, n._pointerDown = function(t, e) {
            t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
        }, n.pointerDown = function(t, e) {
            this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
        };
        var o = {
            mousedown: ["mousemove", "mouseup"],
            touchstart: ["touchmove", "touchend", "touchcancel"],
            pointerdown: ["pointermove", "pointerup", "pointercancel"]
        };
        return n._bindPostStartEvents = function(e) {
            if (e) {
                var i = o[e.type];
                i.forEach(function(e) {
                    t.addEventListener(e, this)
                }, this), this._boundPointerEvents = i
            }
        }, n._unbindPostStartEvents = function() {
            this._boundPointerEvents && (this._boundPointerEvents.forEach(function(e) {
                t.removeEventListener(e, this)
            }, this), delete this._boundPointerEvents)
        }, n.onmousemove = function(t) {
            this._pointerMove(t, t)
        }, n.onpointermove = function(t) {
            t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
        }, n.ontouchmove = function(t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerMove(t, e)
        }, n._pointerMove = function(t, e) {
            this.pointerMove(t, e)
        }, n.pointerMove = function(t, e) {
            this.emitEvent("pointerMove", [t, e])
        }, n.onmouseup = function(t) {
            this._pointerUp(t, t)
        }, n.onpointerup = function(t) {
            t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
        }, n.ontouchend = function(t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerUp(t, e)
        }, n._pointerUp = function(t, e) {
            this._pointerDone(), this.pointerUp(t, e)
        }, n.pointerUp = function(t, e) {
            this.emitEvent("pointerUp", [t, e])
        }, n._pointerDone = function() {
            this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone()
        }, n._pointerReset = function() {
            this.isPointerDown = !1, delete this.pointerIdentifier
        }, n.pointerDone = function() {}, n.onpointercancel = function(t) {
            t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
        }, n.ontouchcancel = function(t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerCancel(t, e)
        }, n._pointerCancel = function(t, e) {
            this._pointerDone(), this.pointerCancel(t, e)
        }, n.pointerCancel = function(t, e) {
            this.emitEvent("pointerCancel", [t, e])
        }, i.getPointerPoint = function(t) {
            return {
                x: t.pageX,
                y: t.pageY
            }
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("unipointer")) : t.Unidragger = e(t, t.Unipointer)
    }(window, function(t, e) {
        function i() {}
        var n = i.prototype = Object.create(e.prototype);
        n.bindHandles = function() {
            this._bindHandles(!0)
        }, n.unbindHandles = function() {
            this._bindHandles(!1)
        }, n._bindHandles = function(e) {
            for (var i = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener", n = e ? this._touchActionValue : "", o = 0; o < this.handles.length; o++) {
                var s = this.handles[o];
                this._bindStartEvent(s, e), s[i]("click", this), t.PointerEvent && (s.style.touchAction = n)
            }
        }, n._touchActionValue = "none", n.pointerDown = function(t, e) {
            this.okayPointerDown(t) && (this.pointerDownPointer = e, t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]))
        };
        var o = {
                TEXTAREA: !0,
                INPUT: !0,
                SELECT: !0,
                OPTION: !0
            },
            s = {
                radio: !0,
                checkbox: !0,
                button: !0,
                submit: !0,
                image: !0,
                file: !0
            };
        return n.okayPointerDown = function(t) {
            var e = o[t.target.nodeName],
                i = s[t.target.type],
                n = !e || i;
            return n || this._pointerReset(), n
        }, n.pointerDownBlur = function() {
            var t = document.activeElement;
            t && t.blur && t != document.body && t.blur()
        }, n.pointerMove = function(t, e) {
            var i = this._dragPointerMove(t, e);
            this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i)
        }, n._dragPointerMove = function(t, e) {
            var i = {
                x: e.pageX - this.pointerDownPointer.pageX,
                y: e.pageY - this.pointerDownPointer.pageY
            };
            return !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i
        }, n.hasDragStarted = function(t) {
            return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
        }, n.pointerUp = function(t, e) {
            this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
        }, n._dragPointerUp = function(t, e) {
            this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
        }, n._dragStart = function(t, e) {
            this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(t, e)
        }, n.dragStart = function(t, e) {
            this.emitEvent("dragStart", [t, e])
        }, n._dragMove = function(t, e, i) {
            this.isDragging && this.dragMove(t, e, i)
        }, n.dragMove = function(t, e, i) {
            t.preventDefault(), this.emitEvent("dragMove", [t, e, i])
        }, n._dragEnd = function(t, e) {
            this.isDragging = !1, setTimeout(function() {
                delete this.isPreventingClicks
            }.bind(this)), this.dragEnd(t, e)
        }, n.dragEnd = function(t, e) {
            this.emitEvent("dragEnd", [t, e])
        }, n.onclick = function(t) {
            this.isPreventingClicks && t.preventDefault()
        }, n._staticClick = function(t, e) {
            this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function() {
                delete this.isIgnoringMouseUp
            }.bind(this), 400)))
        }, n.staticClick = function(t, e) {
            this.emitEvent("staticClick", [t, e])
        }, i.getPointerPoint = e.getPointerPoint, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function(i, n, o) {
            return e(t, i, n, o)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.Flickity, t.Unidragger, t.fizzyUIUtils)
    }(window, function(t, e, i, n) {
        function o() {
            return {
                x: t.pageXOffset,
                y: t.pageYOffset
            }
        }
        n.extend(e.defaults, {
            draggable: ">1",
            dragThreshold: 3
        }), e.createMethods.push("_createDrag");
        var s = e.prototype;
        n.extend(s, i.prototype), s._touchActionValue = "pan-y";
        var r = "createTouch" in document,
            a = !1;
        s._createDrag = function() {
            this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("childUIPointerDown", this._childUIPointerDownDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable), r && !a && (t.addEventListener("touchmove", function() {}), a = !0)
        }, s.onActivateDrag = function() {
            this.handles = [this.viewport], this.bindHandles(), this.updateDraggable()
        }, s.onDeactivateDrag = function() {
            this.unbindHandles(), this.element.classList.remove("is-draggable")
        }, s.updateDraggable = function() {
            ">1" == this.options.draggable ? this.isDraggable = this.slides.length > 1 : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
        }, s.bindDrag = function() {
            this.options.draggable = !0, this.updateDraggable()
        }, s.unbindDrag = function() {
            this.options.draggable = !1, this.updateDraggable()
        }, s._uiChangeDrag = function() {
            delete this.isFreeScrolling
        }, s._childUIPointerDownDrag = function(t) {
            t.preventDefault(), this.pointerDownFocus(t)
        }, s.pointerDown = function(e, i) {
            this.isDraggable ? this.okayPointerDown(e) && (this._pointerDownPreventDefault(e), this.pointerDownFocus(e), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = o(), t.addEventListener("scroll", this), this._pointerDownDefault(e, i)) : this._pointerDownDefault(e, i)
        }, s._pointerDownDefault = function(t, e) {
            this.pointerDownPointer = e, this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [e])
        };
        var l = {
            INPUT: !0,
            TEXTAREA: !0,
            SELECT: !0
        };
        return s.pointerDownFocus = function(t) {
            l[t.target.nodeName] || this.focus()
        }, s._pointerDownPreventDefault = function(t) {
            var e = "touchstart" == t.type,
                i = "touch" == t.pointerType,
                n = l[t.target.nodeName];
            e || i || n || t.preventDefault()
        }, s.hasDragStarted = function(t) {
            return Math.abs(t.x) > this.options.dragThreshold
        }, s.pointerUp = function(t, e) {
            delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e)
        }, s.pointerDone = function() {
            t.removeEventListener("scroll", this), delete this.pointerDownScroll
        }, s.dragStart = function(e, i) {
            this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), t.removeEventListener("scroll", this), this.dispatchEvent("dragStart", e, [i]))
        }, s.pointerMove = function(t, e) {
            var i = this._dragPointerMove(t, e);
            this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i)
        }, s.dragMove = function(t, e, i) {
            if (this.isDraggable) {
                t.preventDefault(), this.previousDragX = this.dragX;
                var n = this.options.rightToLeft ? -1 : 1;
                this.options.wrapAround && (i.x = i.x % this.slideableWidth);
                var o = this.dragStartPosition + i.x * n;
                if (!this.options.wrapAround && this.slides.length) {
                    var s = Math.max(-this.slides[0].target, this.dragStartPosition);
                    o = o > s ? .5 * (o + s) : o;
                    var r = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                    o = o < r ? .5 * (o + r) : o
                }
                this.dragX = o, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, i])
            }
        }, s.dragEnd = function(t, e) {
            if (this.isDraggable) {
                this.options.freeScroll && (this.isFreeScrolling = !0);
                var i = this.dragEndRestingSelect();
                if (this.options.freeScroll && !this.options.wrapAround) {
                    var n = this.getRestingPosition();
                    this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target
                } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
                delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(i), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e])
            }
        }, s.dragEndRestingSelect = function() {
            var t = this.getRestingPosition(),
                e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
                i = this._getClosestResting(t, e, 1),
                n = this._getClosestResting(t, e, -1);
            return i.distance < n.distance ? i.index : n.index
        }, s._getClosestResting = function(t, e, i) {
            for (var n = this.selectedIndex, o = 1 / 0, s = this.options.contain && !this.options.wrapAround ? function(t, e) {
                    return t <= e
                } : function(t, e) {
                    return t < e
                }; s(e, o) && (n += i, o = e, null !== (e = this.getSlideDistance(-t, n)));) e = Math.abs(e);
            return {
                distance: o,
                index: n - i
            }
        }, s.getSlideDistance = function(t, e) {
            var i = this.slides.length,
                o = this.options.wrapAround && i > 1,
                s = o ? n.modulo(e, i) : e,
                r = this.slides[s];
            if (!r) return null;
            var a = o ? this.slideableWidth * Math.floor(e / i) : 0;
            return t - (r.target + a)
        }, s.dragEndBoostSelect = function() {
            if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100) return 0;
            var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
                e = this.previousDragX - this.dragX;
            return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0
        }, s.staticClick = function(t, e) {
            var i = this.getParentCell(t.target),
                n = i && i.element,
                o = i && this.cells.indexOf(i);
            this.dispatchEvent("staticClick", t, [e, n, o])
        }, s.onscroll = function() {
            var t = o(),
                e = this.pointerDownScroll.x - t.x,
                i = this.pointerDownScroll.y - t.y;
            (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone()
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("tap-listener/tap-listener", ["unipointer/unipointer"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("unipointer")) : t.TapListener = e(t, t.Unipointer)
    }(window, function(t, e) {
        function i(t) {
            this.bindTap(t)
        }
        var n = i.prototype = Object.create(e.prototype);
        return n.bindTap = function(t) {
            t && (this.unbindTap(), this.tapElement = t, this._bindStartEvent(t, !0))
        }, n.unbindTap = function() {
            this.tapElement && (this._bindStartEvent(this.tapElement, !0), delete this.tapElement)
        }, n.pointerUp = function(i, n) {
            if (!this.isIgnoringMouseUp || "mouseup" != i.type) {
                var o = e.getPointerPoint(n),
                    s = this.tapElement.getBoundingClientRect(),
                    r = t.pageXOffset,
                    a = t.pageYOffset;
                if (o.x >= s.left + r && o.x <= s.right + r && o.y >= s.top + a && o.y <= s.bottom + a && this.emitEvent("tap", [i, n]), "mouseup" != i.type) {
                    this.isIgnoringMouseUp = !0;
                    var l = this;
                    setTimeout(function() {
                        delete l.isIgnoringMouseUp
                    }, 400)
                }
            }
        }, n.destroy = function() {
            this.pointerDone(), this.unbindTap()
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(i, n, o) {
            return e(t, i, n, o)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils)
    }(window, function(t, e, i, n) {
        "use strict";

        function o(t, e) {
            this.direction = t, this.parent = e, this._create()
        }
        var s = "http://www.w3.org/2000/svg";
        o.prototype = Object.create(i.prototype), o.prototype._create = function() {
            this.isEnabled = !0, this.isPrevious = -1 == this.direction;
            var t = this.parent.options.rightToLeft ? 1 : -1;
            this.isLeft = this.direction == t;
            var e = this.element = document.createElement("button");
            e.className = "flickity-button flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
            var i = this.createSVG();
            e.appendChild(i), this.on("tap", this.onTap), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
        }, o.prototype.activate = function() {
            this.bindTap(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element)
        }, o.prototype.deactivate = function() {
            this.parent.element.removeChild(this.element), i.prototype.destroy.call(this), this.element.removeEventListener("click", this)
        }, o.prototype.createSVG = function() {
            var t = document.createElementNS(s, "svg");
            t.setAttribute("class", "flickity-button-icon"), t.setAttribute("viewBox", "0 0 100 100");
            var e = document.createElementNS(s, "path"),
                i = function(t) {
                    return "string" == typeof t ? t : "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z"
                }(this.parent.options.arrowShape);
            return e.setAttribute("d", i), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t
        }, o.prototype.onTap = function() {
            if (this.isEnabled) {
                this.parent.uiChange();
                var t = this.isPrevious ? "previous" : "next";
                this.parent[t]()
            }
        }, o.prototype.handleEvent = n.handleEvent, o.prototype.onclick = function(t) {
            var e = document.activeElement;
            e && e == this.element && this.onTap(t, t)
        }, o.prototype.enable = function() {
            this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
        }, o.prototype.disable = function() {
            this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
        }, o.prototype.update = function() {
            var t = this.parent.slides;
            if (this.parent.options.wrapAround && t.length > 1) this.enable();
            else {
                var e = t.length ? t.length - 1 : 0,
                    i = this.isPrevious ? 0 : e;
                this[this.parent.selectedIndex == i ? "disable" : "enable"]()
            }
        }, o.prototype.destroy = function() {
            this.deactivate()
        }, n.extend(e.defaults, {
            prevNextButtons: !0,
            arrowShape: {
                x0: 10,
                x1: 60,
                y1: 50,
                x2: 70,
                y2: 40,
                x3: 30
            }
        }), e.createMethods.push("_createPrevNextButtons");
        var r = e.prototype;
        return r._createPrevNextButtons = function() {
            this.options.prevNextButtons && (this.prevButton = new o(-1, this), this.nextButton = new o(1, this), this.on("activate", this.activatePrevNextButtons))
        }, r.activatePrevNextButtons = function() {
            this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
        }, r.deactivatePrevNextButtons = function() {
            this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
        }, e.PrevNextButton = o, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(i, n, o) {
            return e(t, i, n, o)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils)
    }(window, function(t, e, i, n) {
        function o(t) {
            this.parent = t, this._create()
        }
        o.prototype = new i, o.prototype._create = function() {
            this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.on("tap", this.onTap), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
        }, o.prototype.activate = function() {
            this.setDots(), this.bindTap(this.holder), this.parent.element.appendChild(this.holder)
        }, o.prototype.deactivate = function() {
            this.parent.element.removeChild(this.holder), i.prototype.destroy.call(this)
        }, o.prototype.setDots = function() {
            var t = this.parent.slides.length - this.dots.length;
            t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t)
        }, o.prototype.addDots = function(t) {
            for (var e = document.createDocumentFragment(), i = [], n = this.dots.length, o = n + t, s = n; s < o; s++) {
                var r = document.createElement("li");
                r.className = "dot", r.setAttribute("aria-label", "Page dot " + (s + 1)), e.appendChild(r), i.push(r)
            }
            this.holder.appendChild(e), this.dots = this.dots.concat(i)
        }, o.prototype.removeDots = function(t) {
            this.dots.splice(this.dots.length - t, t).forEach(function(t) {
                this.holder.removeChild(t)
            }, this)
        }, o.prototype.updateSelected = function() {
            this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"))
        }, o.prototype.onTap = function(t) {
            var e = t.target;
            if ("LI" == e.nodeName) {
                this.parent.uiChange();
                var i = this.dots.indexOf(e);
                this.parent.select(i)
            }
        }, o.prototype.destroy = function() {
            this.deactivate()
        }, e.PageDots = o, n.extend(e.defaults, {
            pageDots: !0
        }), e.createMethods.push("_createPageDots");
        var s = e.prototype;
        return s._createPageDots = function() {
            this.options.pageDots && (this.pageDots = new o(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
        }, s.activatePageDots = function() {
            this.pageDots.activate()
        }, s.updateSelectedPageDots = function() {
            this.pageDots.updateSelected()
        }, s.updatePageDots = function() {
            this.pageDots.setDots()
        }, s.deactivatePageDots = function() {
            this.pageDots.deactivate()
        }, e.PageDots = o, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function(t, i, n) {
            return e(t, i, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity)
    }(window, function(t, e, i) {
        function n(t) {
            this.parent = t, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this)
        }
        n.prototype = Object.create(t.prototype), n.prototype.play = function() {
            if ("playing" != this.state) {
                if (document.hidden) return void document.addEventListener("visibilitychange", this.onVisibilityPlay);
                this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()
            }
        }, n.prototype.tick = function() {
            if ("playing" == this.state) {
                var t = this.parent.options.autoPlay;
                t = "number" == typeof t ? t : 3e3;
                var e = this;
                this.clear(), this.timeout = setTimeout(function() {
                    e.parent.next(!0), e.tick()
                }, t)
            }
        }, n.prototype.stop = function() {
            this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange)
        }, n.prototype.clear = function() {
            clearTimeout(this.timeout)
        }, n.prototype.pause = function() {
            "playing" == this.state && (this.state = "paused", this.clear())
        }, n.prototype.unpause = function() {
            "paused" == this.state && this.play()
        }, n.prototype.visibilityChange = function() {
            this[document.hidden ? "pause" : "unpause"]()
        }, n.prototype.visibilityPlay = function() {
            this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay)
        }, e.extend(i.defaults, {
            pauseAutoPlayOnHover: !0
        }), i.createMethods.push("_createPlayer");
        var o = i.prototype;
        return o._createPlayer = function() {
            this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
        }, o.activatePlayer = function() {
            this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
        }, o.playPlayer = function() {
            this.player.play()
        }, o.stopPlayer = function() {
            this.player.stop()
        }, o.pausePlayer = function() {
            this.player.pause()
        }, o.unpausePlayer = function() {
            this.player.unpause()
        }, o.deactivatePlayer = function() {
            this.player.stop(), this.element.removeEventListener("mouseenter", this)
        }, o.onmouseenter = function() {
            this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
        }, o.onmouseleave = function() {
            this.player.unpause(), this.element.removeEventListener("mouseleave", this)
        }, i.Player = n, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils)
    }(window, function(t, e, i) {
        var n = e.prototype;
        return n.insert = function(t, e) {
            var i = this._makeCells(t);
            if (i && i.length) {
                var n = this.cells.length;
                e = void 0 === e ? n : e;
                var o = function(t) {
                        var e = document.createDocumentFragment();
                        return t.forEach(function(t) {
                            e.appendChild(t.element)
                        }), e
                    }(i),
                    s = e == n;
                if (s) this.slider.appendChild(o);
                else {
                    var r = this.cells[e].element;
                    this.slider.insertBefore(o, r)
                }
                if (0 === e) this.cells = i.concat(this.cells);
                else if (s) this.cells = this.cells.concat(i);
                else {
                    var a = this.cells.splice(e, n - e);
                    this.cells = this.cells.concat(i).concat(a)
                }
                this._sizeCells(i), this.cellChange(e, !0)
            }
        }, n.append = function(t) {
            this.insert(t, this.cells.length)
        }, n.prepend = function(t) {
            this.insert(t, 0)
        }, n.remove = function(t) {
            var e = this.getCells(t);
            if (e && e.length) {
                var n = this.cells.length - 1;
                e.forEach(function(t) {
                    t.remove();
                    var e = this.cells.indexOf(t);
                    n = Math.min(e, n), i.removeFrom(this.cells, t)
                }, this), this.cellChange(n, !0)
            }
        }, n.cellSizeChange = function(t) {
            var e = this.getCell(t);
            if (e) {
                e.getSize();
                var i = this.cells.indexOf(e);
                this.cellChange(i)
            }
        }, n.cellChange = function(t, e) {
            var i = this.selectedElement;
            this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize();
            var n = this.getCell(i);
            n && (this.selectedIndex = this.getCellSlideIndex(n)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [t]), this.select(this.selectedIndex), e && this.positionSliderAtSelected()
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils)
    }(window, function(t, e, i) {
        "use strict";

        function n(t) {
            if ("IMG" == t.nodeName) {
                var e = t.getAttribute("data-flickity-lazyload"),
                    n = t.getAttribute("data-flickity-lazyload-src"),
                    o = t.getAttribute("data-flickity-lazyload-srcset");
                if (e || n || o) return [t]
            }
            var s = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
            return i.makeArray(s)
        }

        function o(t, e) {
            this.img = t, this.flickity = e, this.load()
        }
        e.createMethods.push("_createLazyload");
        var s = e.prototype;
        return s._createLazyload = function() {
            this.on("select", this.lazyLoad)
        }, s.lazyLoad = function() {
            var t = this.options.lazyLoad;
            if (t) {
                var e = "number" == typeof t ? t : 0,
                    i = this.getAdjacentCellElements(e),
                    s = [];
                i.forEach(function(t) {
                    var e = n(t);
                    s = s.concat(e)
                }), s.forEach(function(t) {
                    new o(t, this)
                }, this)
            }
        }, o.prototype.handleEvent = i.handleEvent, o.prototype.load = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this);
            var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
                e = this.img.getAttribute("data-flickity-lazyload-srcset");
            this.img.src = t, e && this.img.setAttribute("srcset", e), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset")
        }, o.prototype.onload = function(t) {
            this.complete(t, "flickity-lazyloaded")
        }, o.prototype.onerror = function(t) {
            this.complete(t, "flickity-lazyerror")
        }, o.prototype.complete = function(t, e) {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
            var i = this.flickity.getParentCell(this.img),
                n = i && i.element;
            this.flickity.cellSizeChange(n), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, n)
        }, e.LazyLoader = o, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == typeof module && module.exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
    }(window, function(t) {
        return t
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils)
    }(window, function(t, e) {
        t.createMethods.push("_createAsNavFor");
        var i = t.prototype;
        return i._createAsNavFor = function() {
            this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
            var t = this.options.asNavFor;
            if (t) {
                var e = this;
                setTimeout(function() {
                    e.setNavCompanion(t)
                })
            }
        }, i.setNavCompanion = function(i) {
            i = e.getQueryElement(i);
            var n = t.data(i);
            if (n && n != this) {
                this.navCompanion = n;
                var o = this;
                this.onNavCompanionSelect = function() {
                    o.navCompanionSelect()
                }, n.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0)
            }
        }, i.navCompanionSelect = function(t) {
            if (this.navCompanion) {
                var e = this.navCompanion.selectedCells[0],
                    i = this.navCompanion.cells.indexOf(e),
                    n = i + this.navCompanion.selectedCells.length - 1,
                    o = Math.floor(function(t, e, i) {
                        return (e - t) * i + t
                    }(i, n, this.navCompanion.cellAlign));
                if (this.selectCell(o, !1, t), this.removeNavSelectedElements(), !(o >= this.cells.length)) {
                    var s = this.cells.slice(i, n + 1);
                    this.navSelectedElements = s.map(function(t) {
                        return t.element
                    }), this.changeNavSelectedClass("add")
                }
            }
        }, i.changeNavSelectedClass = function(t) {
            this.navSelectedElements.forEach(function(e) {
                e.classList[t]("is-nav-selected")
            })
        }, i.activateAsNavFor = function() {
            this.navCompanionSelect(!0)
        }, i.removeNavSelectedElements = function() {
            this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements)
        }, i.onNavStaticClick = function(t, e, i, n) {
            "number" == typeof n && this.navCompanion.selectCell(n)
        }, i.deactivateAsNavFor = function() {
            this.removeNavSelectedElements()
        }, i.destroyAsNavFor = function() {
            this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
        }, t
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function i(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function n(t, e, o) {
            if (!(this instanceof n)) return new n(t, e, o);
            var s = t;
            return "string" == typeof t && (s = document.querySelectorAll(t)), s ? (this.elements = function(t) {
                return Array.isArray(t) ? t : "object" == typeof t && "number" == typeof t.length ? l.call(t) : [t]
            }(s), this.options = i({}, this.options), "function" == typeof e ? o = e : i(this.options, e), o && this.on("always", o), this.getImages(), r && (this.jqDeferred = new r.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || t))
        }

        function o(t) {
            this.img = t
        }

        function s(t, e) {
            this.url = t, this.element = e, this.img = new Image
        }
        var r = t.jQuery,
            a = t.console,
            l = Array.prototype.slice;
        n.prototype = Object.create(e.prototype), n.prototype.options = {}, n.prototype.getImages = function() {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, n.prototype.addElementImages = function(t) {
            "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && c[e]) {
                for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                    var o = i[n];
                    this.addImage(o)
                }
                if ("string" == typeof this.options.background) {
                    var s = t.querySelectorAll(this.options.background);
                    for (n = 0; n < s.length; n++) {
                        var r = s[n];
                        this.addElementBackgroundImages(r)
                    }
                }
            }
        };
        var c = {
            1: !0,
            9: !0,
            11: !0
        };
        return n.prototype.addElementBackgroundImages = function(t) {
            var e = getComputedStyle(t);
            if (e)
                for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                    var o = n && n[2];
                    o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
                }
        }, n.prototype.addImage = function(t) {
            var e = new o(t);
            this.images.push(e)
        }, n.prototype.addBackground = function(t, e) {
            var i = new s(t, e);
            this.images.push(i)
        }, n.prototype.check = function() {
            function t(t, i, n) {
                setTimeout(function() {
                    e.progress(t, i, n)
                })
            }
            var e = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) {
                e.once("progress", t), e.check()
            }) : void this.complete()
        }, n.prototype.progress = function(t, e, i) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, t, e)
        }, n.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this)
            }
        }, o.prototype = Object.create(e.prototype), o.prototype.check = function() {
            return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
        }, o.prototype.getIsImageComplete = function() {
            return this.img.complete && this.img.naturalWidth
        }, o.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
        }, o.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, o.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, o.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, o.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, s.prototype = Object.create(o.prototype), s.prototype.check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, s.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, s.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
        }, n.makeJQueryPlugin = function(e) {
            (e = e || t.jQuery) && ((r = e).fn.imagesLoaded = function(t, e) {
                return new n(this, t, e).jqDeferred.promise(r(this))
            })
        }, n.makeJQueryPlugin(), n
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("flickity"), require("imagesloaded")) : t.Flickity = e(t, t.Flickity, t.imagesLoaded)
    }(window, function(t, e, i) {
        "use strict";
        e.createMethods.push("_createImagesLoaded");
        var n = e.prototype;
        return n._createImagesLoaded = function() {
            this.on("activate", this.imagesLoaded)
        }, n.imagesLoaded = function() {
            if (this.options.imagesLoaded) {
                var t = this;
                i(this.slider).on("progress", function(e, i) {
                    var n = t.getParentCell(i.img);
                    t.cellSizeChange(n && n.element), t.options.freeScroll || t.positionSliderAtSelected()
                })
            }
        }, e
    }),
    function(t, e, i) {
        function n(t, e) {
            return typeof t === e
        }

        function o() {
            return "function" != typeof e.createElement ? e.createElement(arguments[0]) : d ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
        }

        function s() {
            var t = e.body;
            return t || ((t = o(d ? "svg" : "body")).fake = !0), t
        }
        var r = [],
            a = [],
            l = {
                _version: "3.3.1",
                _config: {
                    classPrefix: "",
                    enableClasses: !0,
                    enableJSClass: !0,
                    usePrefixes: !0
                },
                _q: [],
                on: function(t, e) {
                    var i = this;
                    setTimeout(function() {
                        e(i[t])
                    }, 0)
                },
                addTest: function(t, e, i) {
                    a.push({
                        name: t,
                        fn: e,
                        options: i
                    })
                },
                addAsyncTest: function(t) {
                    a.push({
                        name: null,
                        fn: t
                    })
                }
            },
            c = function() {};
        c.prototype = l, c = new c;
        var h = e.documentElement,
            d = "svg" === h.nodeName.toLowerCase(),
            u = l._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
        l._prefixes = u;
        var f = l.testStyles = function(t, i, n, r) {
            var a, l, c, d, u = "modernizr",
                f = o("div"),
                p = s();
            if (parseInt(n, 10))
                for (; n--;)(c = o("div")).id = r ? r[n] : u + (n + 1), f.appendChild(c);
            return (a = o("style")).type = "text/css", a.id = "s" + u, (p.fake ? p : f).appendChild(a), p.appendChild(f), a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(e.createTextNode(t)), f.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", d = h.style.overflow, h.style.overflow = "hidden", h.appendChild(p)), l = i(f, t), p.fake ? (p.parentNode.removeChild(p), h.style.overflow = d, h.offsetHeight) : f.parentNode.removeChild(f), !!l
        };
        c.addTest("touchevents", function() {
                var i;
                if ("ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch) i = !0;
                else {
                    var n = ["@media (", u.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                    f(n, function(t) {
                        i = 9 === t.offsetTop
                    })
                }
                return i
            }),
            function() {
                var t, e, i, o, s, l;
                for (var h in a)
                    if (a.hasOwnProperty(h)) {
                        if (t = [], (e = a[h]).name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                            for (i = 0; i < e.options.aliases.length; i++) t.push(e.options.aliases[i].toLowerCase());
                        for (o = n(e.fn, "function") ? e.fn() : e.fn, s = 0; s < t.length; s++) 1 === (l = t[s].split(".")).length ? c[l[0]] = o : (!c[l[0]] || c[l[0]] instanceof Boolean || (c[l[0]] = new Boolean(c[l[0]])), c[l[0]][l[1]] = o), r.push((o ? "" : "no-") + l.join("-"))
                    }
            }(),
            function(t) {
                var e = h.className,
                    i = c._config.classPrefix || "";
                if (d && (e = e.baseVal), c._config.enableJSClass) {
                    var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
                    e = e.replace(n, "$1" + i + "js$2")
                }
                c._config.enableClasses && (e += " " + i + t.join(" " + i), d ? h.className.baseVal = e : h.className = e)
            }(r), delete l.addTest, delete l.addAsyncTest;
        for (var p = 0; p < c._q.length; p++) c._q[p]();
        t.Modernizr = c
    }(window, document),
    function(t, e) {
        "function" == typeof define && define.amd ? define([], function() {
            return e()
        }) : "object" == typeof exports ? module.exports = e() : t.Headhesive = e()
    }(this, function() {
        "use strict";
        var t = function(e, i) {
                for (var n in i) i.hasOwnProperty(n) && (e[n] = "object" == typeof i[n] ? t(e[n], i[n]) : i[n]);
                return e
            },
            e = function(t, e) {
                var i, n, o, s = Date.now || function() {
                        return (new Date).getTime()
                    },
                    r = null,
                    a = 0,
                    l = function() {
                        a = s(), r = null, o = t.apply(i, n), i = n = null
                    };
                return function() {
                    var c = s(),
                        h = e - (c - a);
                    return i = this, n = arguments, 0 >= h ? (clearTimeout(r), r = null, a = c, o = t.apply(i, n), i = n = null) : r || (r = setTimeout(l, h)), o
                }
            },
            i = function(e, i) {
                "querySelector" in document && "addEventListener" in window && (this.visible = !1, this.options = {
                    offset: 300,
                    offsetSide: "top",
                    classes: {
                        clone: "headhesive",
                        stick: "headhesive--stick",
                        unstick: "headhesive--unstick"
                    },
                    throttle: 250,
                    onInit: function() {},
                    onStick: function() {},
                    onUnstick: function() {},
                    onDestroy: function() {}
                }, this.elem = "string" == typeof e ? document.querySelector(e) : e, this.options = t(this.options, i), this.init())
            };
        return i.prototype = {
            constructor: i,
            init: function() {
                if (this.clonedElem = this.elem.cloneNode(!0), this.clonedElem.className += " " + this.options.classes.clone, document.body.insertBefore(this.clonedElem, document.body.firstChild), "number" == typeof this.options.offset) this.scrollOffset = this.options.offset;
                else {
                    if ("string" != typeof this.options.offset) throw new Error("Invalid offset: " + this.options.offset);
                    this._setScrollOffset()
                }
                this._throttleUpdate = e(this.update.bind(this), this.options.throttle), this._throttleScrollOffset = e(this._setScrollOffset.bind(this), this.options.throttle), window.addEventListener("scroll", this._throttleUpdate, !1), window.addEventListener("resize", this._throttleScrollOffset, !1), this.options.onInit.call(this)
            },
            _setScrollOffset: function() {
                "string" == typeof this.options.offset && (this.scrollOffset = function(t, e) {
                    for (var i = 0, n = t.offsetHeight; t;) i += t.offsetTop, t = t.offsetParent;
                    return "bottom" === e && (i += n), i
                }(document.querySelector(this.options.offset), this.options.offsetSide))
            },
            destroy: function() {
                document.body.removeChild(this.clonedElem), window.removeEventListener("scroll", this._throttleUpdate), window.removeEventListener("resize", this._throttleScrollOffset), this.options.onDestroy.call(this)
            },
            stick: function() {
                this.visible || (this.clonedElem.className = this.clonedElem.className.replace(new RegExp("(^|\\s)*" + this.options.classes.unstick + "(\\s|$)*", "g"), ""), this.clonedElem.className += " " + this.options.classes.stick, this.visible = !0, this.options.onStick.call(this))
            },
            unstick: function() {
                this.visible && (this.clonedElem.className = this.clonedElem.className.replace(new RegExp("(^|\\s)*" + this.options.classes.stick + "(\\s|$)*", "g"), ""), this.clonedElem.className += " " + this.options.classes.unstick, this.visible = !1, this.options.onUnstick.call(this))
            },
            update: function() {
                (void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop) > this.scrollOffset ? this.stick() : this.unstick()
            }
        }, i
    }),
    function() {
        var t = function() {
            function t(t) {
                return decodeURIComponent(t.replace(/\+/g, " "))
            }

            function e(t, e) {
                var i = t.charAt(0),
                    n = e.split(i);
                return i === t ? n : n[(t = parseInt(t.substring(1), 10)) < 0 ? n.length + t : t - 1]
            }

            function i(e, i) {
                for (var n = e.charAt(0), o = i.split("&"), s = [], r = {}, a = [], l = e.substring(1), c = 0, h = o.length; c < h; c++)
                    if ((s = o[c].match(/(.*?)=(.*)/)) || (s = [o[c], o[c], ""]), "" !== s[1].replace(/\s/g, "")) {
                        if (s[2] = t(s[2] || ""), l === s[1]) return s[2];
                        (a = s[1].match(/(.*)\[([0-9]+)\]/)) ? (r[a[1]] = r[a[1]] || [], r[a[1]][a[2]] = s[2]) : r[s[1]] = s[2]
                    }
                return n === e ? r : r[l]
            }
            return function(t, n) {
                var o, s = {};
                if ("tld?" !== t) {
                    if (n = n || window.location.toString(), !t) return n;
                    if (t = t.toString(), o = n.match(/^mailto:([^\/].+)/)) s.protocol = "mailto", s.email = o[1];
                    else {
                        if ((o = n.match(/(.*?)\/#\!(.*)/)) && (n = o[1] + o[2]), (o = n.match(/(.*?)#(.*)/)) && (s.hash = o[2], n = o[1]), s.hash && t.match(/^#/)) return i(t, s.hash);
                        if ((o = n.match(/(.*?)\?(.*)/)) && (s.query = o[2], n = o[1]), s.query && t.match(/^\?/)) return i(t, s.query);
                        if ((o = n.match(/(.*?)\:?\/\/(.*)/)) && (s.protocol = o[1].toLowerCase(), n = o[2]), (o = n.match(/(.*?)(\/.*)/)) && (s.path = o[2], n = o[1]), s.path = (s.path || "").replace(/^([^\/])/, "/$1"), t.match(/^[\-0-9]+$/) && (t = t.replace(/^([^\/])/, "/$1")), t.match(/^\//)) return e(t, s.path.substring(1));
                        if ((o = e("/-1", s.path.substring(1))) && (o = o.match(/(.*?)\.(.*)/)) && (s.file = o[0], s.filename = o[1], s.fileext = o[2]), (o = n.match(/(.*)\:([0-9]+)$/)) && (s.port = o[2], n = o[1]), (o = n.match(/(.*?)@(.*)/)) && (s.auth = o[1], n = o[2]), s.auth && (o = s.auth.match(/(.*)\:(.*)/), s.user = o ? o[1] : s.auth, s.pass = o ? o[2] : void 0), s.hostname = n.toLowerCase(), "." === t.charAt(0)) return e(t, s.hostname);
                        s.port = s.port || ("https" === s.protocol ? "443" : "80"), s.protocol = s.protocol || ("443" === s.port ? "https" : "http")
                    }
                    return t in s ? s[t] : "{}" === t ? s : void 0
                }
            }
        }();
        "function" == typeof window.define && window.define.amd ? window.define("js-url", [], function() {
            return t
        }) : (void 0 !== window.jQuery && window.jQuery.extend({
            url: function(t, e) {
                return window.url(t, e)
            }
        }), window.url = t)
    }();
var objectFitImages = function() {
    "use strict";

    function t(t, e, i) {
        var n = function(t, e) {
            return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + t + "' height='" + e + "'%3E%3C/svg%3E"
        }(e || 1, i || 0);
        u.call(t, "src") !== n && f.call(t, "src", n)
    }

    function e(t, i) {
        t.naturalWidth ? i(t) : setTimeout(e, 100, t, i)
    }

    function i(i) {
        var o = function(t) {
                for (var e, i = getComputedStyle(t).fontFamily, n = {}; null !== (e = r.exec(i));) n[e[1]] = e[2];
                return n
            }(i),
            a = i[s];
        if (o["object-fit"] = o["object-fit"] || "fill", !a.img) {
            if ("fill" === o["object-fit"]) return;
            if (!a.skipTest && l && !o["object-position"]) return
        }
        if (!a.img) {
            a.img = new Image(i.width, i.height), a.img.srcset = u.call(i, "data-ofi-srcset") || i.srcset, a.img.src = u.call(i, "data-ofi-src") || i.src, f.call(i, "data-ofi-src", i.src), i.srcset && f.call(i, "data-ofi-srcset", i.srcset), t(i, i.naturalWidth || i.width, i.naturalHeight || i.height), i.srcset && (i.srcset = "");
            try {
                n(i)
            } catch (i) {
                window.console && console.warn("https://bit.ly/ofi-old-browser")
            }
        }(function(t) {
            if (t.srcset && !d && window.picturefill) {
                var e = window.picturefill._;
                t[e.ns] && t[e.ns].evaled || e.fillImg(t, {
                    reselect: !0
                }), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, {
                    reselect: !0
                })), t.currentSrc = t[e.ns].curSrc || t.src
            }
        })(a.img), i.style.backgroundImage = 'url("' + (a.img.currentSrc || a.img.src).replace(/"/g, '\\"') + '")', i.style.backgroundPosition = o["object-position"] || "center", i.style.backgroundRepeat = "no-repeat", i.style.backgroundOrigin = "content-box", /scale-down/.test(o["object-fit"]) ? e(a.img, function() {
            a.img.naturalWidth > i.width || a.img.naturalHeight > i.height ? i.style.backgroundSize = "contain" : i.style.backgroundSize = "auto"
        }) : i.style.backgroundSize = o["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), e(a.img, function(e) {
            t(i, e.naturalWidth, e.naturalHeight)
        })
    }

    function n(t) {
        var e = {
            get: function(e) {
                return t[s].img[e || "src"]
            },
            set: function(e, n) {
                return t[s].img[n || "src"] = e, f.call(t, "data-ofi-" + n, e), i(t), e
            }
        };
        Object.defineProperty(t, "src", e), Object.defineProperty(t, "currentSrc", {
            get: function() {
                return e.get("currentSrc")
            }
        }), Object.defineProperty(t, "srcset", {
            get: function() {
                return e.get("srcset")
            },
            set: function(t) {
                return e.set(t, "srcset")
            }
        })
    }

    function o(t, e) {
        var n = !p && !t;
        if (e = e || {}, t = t || "img", c && !e.skipTest || !h) return !1;
        "img" === t ? t = document.getElementsByTagName("img") : "string" == typeof t ? t = document.querySelectorAll(t) : "length" in t || (t = [t]);
        for (var r = 0; r < t.length; r++) t[r][s] = t[r][s] || {
            skipTest: e.skipTest
        }, i(t[r]);
        n && (document.body.addEventListener("load", function(t) {
            "IMG" === t.target.tagName && o(t.target, {
                skipTest: e.skipTest
            })
        }, !0), p = !0, t = "img"), e.watchMQ && window.addEventListener("resize", o.bind(null, t, {
            skipTest: e.skipTest
        }))
    }
    var s = "bfred-it:object-fit-images",
        r = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,
        a = "undefined" == typeof Image ? {
            style: {
                "object-position": 1
            }
        } : new Image,
        l = "object-fit" in a.style,
        c = "object-position" in a.style,
        h = "background-size" in a.style,
        d = "string" == typeof a.currentSrc,
        u = a.getAttribute,
        f = a.setAttribute,
        p = !1;
    return o.supportsObjectFit = l, o.supportsObjectPosition = c,
        function() {
            function t(t, e) {
                return t[s] && t[s].img && ("src" === e || "srcset" === e) ? t[s].img : t
            }
            c || (HTMLImageElement.prototype.getAttribute = function(e) {
                return u.call(t(this, e), e)
            }, HTMLImageElement.prototype.setAttribute = function(e, i) {
                return f.call(t(this, e), e, String(i))
            })
        }(), o
}();
! function(t) {
    t.extend(t.expr[":"], {
        "off-top": function(e) {
            return t(e).offset().top < t(window).scrollTop()
        },
        "off-right": function(e) {
            return t(e).offset().left + t(e).outerWidth() - t(window).scrollLeft() > t(window).width()
        },
        "off-bottom": function(e) {
            return t(e).offset().top + t(e).outerHeight() - t(window).scrollTop() > t(window).height()
        },
        "off-left": function(e) {
            return t(e).offset().left < t(window).scrollLeft()
        },
        "off-screen": function(e) {
            return t(e).is(":off-top, :off-right, :off-bottom, :off-left")
        }
    })
}(jQuery),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.lazyframe = e()
}(this, function() {
    "use strict";
    var t = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
        }
        return t
    };
    return function() {
        function e(t) {
            var e = this;
            if (t instanceof HTMLElement != 0 && !t.classList.contains("lazyframe--loaded")) {
                var n = {
                    el: t,
                    settings: i(t)
                };
                n.el.addEventListener("click", function() {
                    n.el.appendChild(n.iframe);
                    var i = t.querySelectorAll("iframe");
                    n.settings.onAppend.call(e, i[0])
                }), r.lazyload ? s(n) : o(n, n.settings.thumbnail)
            }
        }

        function i(e) {
            var i = Array.prototype.slice.apply(e.attributes).filter(function(t) {
                    return "" !== t.value
                }).reduce(function(t, e) {
                    return t[0 === e.name.indexOf("data-") ? e.name.split("data-")[1] : e.name] = e.value, t
                }, {}),
                o = t({}, r, i, {
                    y: e.offsetTop,
                    parameters: n(i.src)
                });
            if (o.vendor) {
                var s = o.src.match(c.regex[o.vendor]);
                o.id = c.condition[o.vendor](s)
            }
            return o
        }

        function n(t) {
            var e = t.split("?");
            return e[1] ? -1 !== (e = e[1]).indexOf("autoplay") ? e : e + "&autoplay=1" : "autoplay=1"
        }

        function o(t) {
            var e = this;
            ! function(t) {
                return !(!t.vendor || t.title && t.thumbnail || ("youtube" === t.vendor || "youtube_nocookie" === t.vendor) && !t.apikey)
            }(t.settings) ? s(t, !0): function(t, e) {
                var i = c.endpoints[t.settings.vendor](t.settings),
                    n = new XMLHttpRequest;
                n.open("GET", i, !0), n.onload = function() {
                    if (n.status >= 200 && n.status < 400) {
                        var i = JSON.parse(n.responseText);
                        e(null, [i, t])
                    } else e(!0)
                }, n.onerror = function() {
                    e(!0)
                }, n.send()
            }(t, function(i, n) {
                if (!i) {
                    var o = n[0],
                        r = n[1];
                    if (r.settings.title || (r.settings.title = c.response[r.settings.vendor].title(o)), !r.settings.thumbnail) {
                        var a = c.response[r.settings.vendor].thumbnail(o);
                        r.settings.thumbnail = a, t.settings.onThumbnailLoad.call(e, a)
                    }
                    s(r, !0)
                }
            })
        }

        function s(t, e) {
            if (t.iframe = function(t) {
                    var e = document.createDocumentFragment(),
                        i = document.createElement("iframe");
                    if (t.vendor && (t.src = c.src[t.vendor](t)), i.setAttribute("id", "lazyframe-" + t.id), i.setAttribute("src", t.src), i.setAttribute("frameborder", 0), i.setAttribute("allowfullscreen", ""), "vine" === t.vendor) {
                        var n = document.createElement("script");
                        n.setAttribute("src", "https://platform.vine.co/static/scripts/embed.js"), e.appendChild(n)
                    }
                    return e.appendChild(i), e
                }(t.settings), t.settings.thumbnail && e && (t.el.style.backgroundImage = "url(" + t.settings.thumbnail + ")"), t.settings.title && 0 === t.el.children.length) {
                var i = document.createDocumentFragment(),
                    n = document.createElement("span");
                n.className = "lazyframe__title", n.innerHTML = t.settings.title, i.appendChild(n), t.el.appendChild(i)
            }
            r.lazyload || (t.el.classList.add("lazyframe--loaded"), t.settings.onLoad.call(this, t), a.push(t)), t.settings.initialized || a.push(t)
        }
        var r = void 0,
            a = [],
            l = {
                vendor: void 0,
                id: void 0,
                src: void 0,
                thumbnail: void 0,
                title: void 0,
                apikey: void 0,
                initialized: !1,
                parameters: void 0,
                y: void 0,
                debounce: 250,
                lazyload: !0,
                initinview: !1,
                onLoad: function(t) {},
                onAppend: function(t) {},
                onThumbnailLoad: function(t) {}
            },
            c = {
                regex: {
                    youtube_nocookie: /(?:youtube-nocookie\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=)))([a-zA-Z0-9_-]{6,11})/,
                    youtube: /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/,
                    vimeo: /vimeo\.com\/(?:video\/)?([0-9]*)(?:\?|)/,
                    vine: /vine.co\/v\/(.*)/
                },
                condition: {
                    youtube: function(t) {
                        return !(!t || 11 != t[1].length) && t[1]
                    },
                    youtube_nocookie: function(t) {
                        return !(!t || 11 != t[1].length) && t[1]
                    },
                    vimeo: function(t) {
                        return !!(t && 9 === t[1].length || 8 === t[1].length) && t[1]
                    },
                    vine: function(t) {
                        return !(!t || 11 !== t[1].length) && t[1]
                    }
                },
                src: {
                    youtube: function(t) {
                        return "https://www.youtube.com/embed/" + t.id + "/?" + t.parameters
                    },
                    youtube_nocookie: function(t) {
                        return "https://www.youtube-nocookie.com/embed/" + t.id + "/?" + t.parameters
                    },
                    vimeo: function(t) {
                        return "https://player.vimeo.com/video/" + t.id + "/?" + t.parameters
                    },
                    vine: function(t) {
                        return "https://vine.co/v/" + t.id + "/embed/simple"
                    }
                },
                endpoints: {
                    youtube: function(t) {
                        return "https://www.googleapis.com/youtube/v3/videos?id=" + t.id + "&key=" + t.apikey + "&fields=items(snippet(title,thumbnails))&part=snippet"
                    },
                    youtube_nocookie: function(t) {
                        return "https://www.googleapis.com/youtube/v3/videos?id=" + t.id + "&key=" + t.apikey + "&fields=items(snippet(title,thumbnails))&part=snippet"
                    },
                    vimeo: function(t) {
                        return "https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/" + t.id
                    },
                    vine: function(t) {
                        return "https://vine.co/oembed.json?url=https%3A%2F%2Fvine.co%2Fv%2F" + t.id
                    }
                },
                response: {
                    youtube: {
                        title: function(t) {
                            return t.items[0].snippet.title
                        },
                        thumbnail: function(t) {
                            var e = t.items[0].snippet.thumbnails;
                            return (e.maxres || e.standard || e.high || e.medium || e.default).url
                        }
                    },
                    youtube_nocookie: {
                        title: function(t) {
                            return t.items[0].snippet.title
                        },
                        thumbnail: function(t) {
                            var e = t.items[0].snippet.thumbnails;
                            return (e.maxres || e.standard || e.high || e.medium || e.default).url
                        }
                    },
                    vimeo: {
                        title: function(t) {
                            return t.title
                        },
                        thumbnail: function(t) {
                            return t.thumbnail_url
                        }
                    },
                    vine: {
                        title: function(t) {
                            return t.title
                        },
                        thumbnail: function(t) {
                            return t.thumbnail_url
                        }
                    }
                }
            };
        return function(i) {
            if (r = t({}, l, arguments.length <= 1 ? void 0 : arguments[1]), "string" == typeof i)
                for (var n = document.querySelectorAll(i), s = 0; s < n.length; s++) e(n[s]);
            else if (void 0 === i.length) e(i);
            else if (i.length > 1)
                for (var c = 0; c < i.length; c++) e(i[c]);
            else e(i[0]);
            r.lazyload && function() {
                var t = this,
                    e = window.innerHeight,
                    i = a.length,
                    n = function(e, n) {
                        e.settings.initialized = !0, e.el.classList.add("lazyframe--loaded"), i--, o(e), e.settings.initinview && e.el.click(), e.settings.onLoad.call(t, e)
                    };
                a.filter(function(t) {
                    return t.settings.y < e
                }).forEach(n);
                var s = function(t, e, i) {
                        var n = void 0;
                        return function() {
                            var o = this,
                                s = arguments,
                                r = i;
                            clearTimeout(n), n = setTimeout(function() {
                                n = null, t.apply(o, s)
                            }, e), r && t.apply(o, s)
                        }
                    }(function() {
                        c = l < window.pageYOffset, l = window.pageYOffset, c && a.filter(function(t) {
                            return t.settings.y < e + l && !1 === t.settings.initialized
                        }).forEach(n), 0 === i && window.removeEventListener("scroll", s, !1)
                    }, r.debounce),
                    l = 0,
                    c = !1;
                window.addEventListener("scroll", s, !1)
            }()
        }
    }()
}),
function(t, e, i, n) {
    "use strict";

    function o(t, e) {
        var n, o, s, r = [],
            a = 0;
        t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = f(t.data.options, e)), n = e.$target || i(t.currentTarget).trigger("blur"), (s = i.fancybox.getInstance()) && s.$trigger && s.$trigger.is(n) || (e.selector ? r = i(e.selector) : (o = n.attr("data-fancybox") || "") ? r = (r = t.data ? t.data.items : []).length ? r.filter('[data-fancybox="' + o + '"]') : i('[data-fancybox="' + o + '"]') : r = [n], (a = i(r).index(n)) < 0 && (a = 0), (s = i.fancybox.open(r, e, a)).$trigger = n))
    }
    if (t.console = t.console || {
            info: function(t) {}
        }, i) {
        if (i.fn.fancybox) return void console.info("fancyBox already initialized");
        var s = {
                closeExisting: !1,
                loop: !1,
                gutter: 50,
                keyboard: !0,
                preventCaptionOverlap: !0,
                arrows: !0,
                infobar: !0,
                smallBtn: "auto",
                toolbar: "auto",
                buttons: ["zoom", "slideShow", "thumbs", "close"],
                idleTime: 3,
                protect: !1,
                modal: !1,
                image: {
                    preload: !1
                },
                ajax: {
                    settings: {
                        data: {
                            fancybox: !0
                        }
                    }
                },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: {
                        scrolling: "auto"
                    }
                },
                video: {
                    tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                    format: "",
                    autoStart: !0
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                btnTpl: {
                    download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                    smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
                },
                parentEl: "body",
                hideScrollbar: !0,
                autoFocus: !0,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {
                    autoStart: !1
                },
                touch: {
                    vertical: !0,
                    momentum: !0
                },
                hash: null,
                media: {},
                slideShow: {
                    autoStart: !1,
                    speed: 3e3
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                },
                wheel: "auto",
                onInit: i.noop,
                beforeLoad: i.noop,
                afterLoad: i.noop,
                beforeShow: i.noop,
                afterShow: i.noop,
                beforeClose: i.noop,
                afterClose: i.noop,
                onActivate: i.noop,
                onDeactivate: i.noop,
                clickContent: function(t, e) {
                    return "image" === t.type && "zoom"
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    preventCaptionOverlap: !1,
                    idleTime: !1,
                    clickContent: function(t, e) {
                        return "image" === t.type && "toggleControls"
                    },
                    clickSlide: function(t, e) {
                        return "image" === t.type ? "toggleControls" : "close"
                    },
                    dblclickContent: function(t, e) {
                        return "image" === t.type && "zoom"
                    },
                    dblclickSlide: function(t, e) {
                        return "image" === t.type && "zoom"
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom"
                    },
                    de: {
                        CLOSE: "Schlie&szlig;en",
                        NEXT: "Weiter",
                        PREV: "Zur&uuml;ck",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "Vergr&ouml;&szlig;ern"
                    }
                }
            },
            r = i(t),
            a = i(e),
            l = 0,
            c = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                return t.setTimeout(e, 1e3 / 60)
            },
            h = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
                t.clearTimeout(e)
            },
            d = function() {
                var t, i = e.createElement("fakeelement"),
                    n = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (t in n)
                    if (void 0 !== i.style[t]) return n[t];
                return "transitionend"
            }(),
            u = function(t) {
                return t && t.length && t[0].offsetHeight
            },
            f = function(t, e) {
                var n = i.extend(!0, {}, t, e);
                return i.each(e, function(t, e) {
                    i.isArray(e) && (n[t] = e)
                }), n
            },
            p = function(t) {
                var n, o;
                return !(!t || t.ownerDocument !== e) && (i(".fancybox-container").css("pointer-events", "none"), n = {
                    x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                    y: t.getBoundingClientRect().top + t.offsetHeight / 2
                }, o = e.elementFromPoint(n.x, n.y) === t, i(".fancybox-container").css("pointer-events", ""), o)
            },
            g = function(t, e, n) {
                var o = this;
                o.opts = f({
                    index: n
                }, i.fancybox.defaults), i.isPlainObject(e) && (o.opts = f(o.opts, e)), i.fancybox.isMobile && (o.opts = f(o.opts, o.opts.mobile)), o.id = o.opts.id || ++l, o.currIndex = parseInt(o.opts.index, 10) || 0, o.prevIndex = null, o.prevPos = null, o.currPos = 0, o.firstRun = !0, o.group = [], o.slides = {}, o.addContent(t), o.group.length && o.init()
            };
        i.extend(g.prototype, {
                init: function() {
                    var n, o, s = this,
                        r = s.group[s.currIndex].opts;
                    r.closeExisting && i.fancybox.close(!0), i("body").addClass("fancybox-active"), !i.fancybox.getInstance() && !1 !== r.hideScrollbar && !i.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), i("body").addClass("compensate-for-scrollbar")), o = "", i.each(r.buttons, function(t, e) {
                        o += r.btnTpl[e] || ""
                    }), n = i(s.translate(s, r.baseTpl.replace("{{buttons}}", o).replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight))).attr("id", "fancybox-container-" + s.id).addClass(r.baseClass).data("FancyBox", s).appendTo(r.parentEl), s.$refs = {
                        container: n
                    }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(t) {
                        s.$refs[t] = n.find(".fancybox-" + t)
                    }), s.trigger("onInit"), s.activate(), s.jumpTo(s.currIndex)
                },
                translate: function(t, e) {
                    var i = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                    return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                        return void 0 === i[e] ? t : i[e]
                    })
                },
                addContent: function(t) {
                    var e, n = this,
                        o = i.makeArray(t);
                    i.each(o, function(t, e) {
                        var o, s, r, a, l, c = {},
                            h = {};
                        i.isPlainObject(e) ? (c = e, h = e.opts || e) : "object" === i.type(e) && i(e).length ? (h = (o = i(e)).data() || {}, (h = i.extend(!0, {}, h, h.options)).$orig = o, c.src = n.opts.src || h.src || o.attr("href"), c.type || c.src || (c.type = "inline", c.src = e)) : c = {
                            type: "html",
                            src: e + ""
                        }, c.opts = i.extend(!0, {}, n.opts, h), i.isArray(h.buttons) && (c.opts.buttons = h.buttons), i.fancybox.isMobile && c.opts.mobile && (c.opts = f(c.opts, c.opts.mobile)), s = c.type || c.opts.type, a = c.src || "", !s && a && ((r = a.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (s = "video", c.opts.video.format || (c.opts.video.format = "video/" + ("ogv" === r[1] ? "ogg" : r[1]))) : a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : a.match(/\.(pdf)((\?|#).*)?$/i) ? (s = "iframe", c = i.extend(!0, c, {
                            contentType: "pdf",
                            opts: {
                                iframe: {
                                    preload: !1
                                }
                            }
                        })) : "#" === a.charAt(0) && (s = "inline")), s ? c.type = s : n.trigger("objectNeedsType", c), c.contentType || (c.contentType = i.inArray(c.type, ["html", "inline", "ajax"]) > -1 ? "html" : c.type), c.index = n.group.length, "auto" == c.opts.smallBtn && (c.opts.smallBtn = i.inArray(c.type, ["html", "inline", "ajax"]) > -1), "auto" === c.opts.toolbar && (c.opts.toolbar = !c.opts.smallBtn), c.$thumb = c.opts.$thumb || null, c.opts.$trigger && c.index === n.opts.index && (c.$thumb = c.opts.$trigger.find("img:first"), c.$thumb.length && (c.opts.$orig = c.opts.$trigger)), c.$thumb && c.$thumb.length || !c.opts.$orig || (c.$thumb = c.opts.$orig.find("img:first")), c.$thumb && !c.$thumb.length && (c.$thumb = null), c.thumb = c.opts.thumb || (c.$thumb ? c.$thumb[0].src : null), "function" === i.type(c.opts.caption) && (c.opts.caption = c.opts.caption.apply(e, [n, c])), "function" === i.type(n.opts.caption) && (c.opts.caption = n.opts.caption.apply(e, [n, c])), c.opts.caption instanceof i || (c.opts.caption = void 0 === c.opts.caption ? "" : c.opts.caption + ""), "ajax" === c.type && ((l = a.split(/\s+/, 2)).length > 1 && (c.src = l.shift(), c.opts.filter = l.shift())), c.opts.modal && (c.opts = i.extend(!0, c.opts, {
                            trapFocus: !0,
                            infobar: 0,
                            toolbar: 0,
                            smallBtn: 0,
                            keyboard: 0,
                            slideShow: 0,
                            fullScreen: 0,
                            thumbs: 0,
                            touch: 0,
                            clickContent: !1,
                            clickSlide: !1,
                            clickOutside: !1,
                            dblclickContent: !1,
                            dblclickSlide: !1,
                            dblclickOutside: !1
                        })), n.group.push(c)
                    }), Object.keys(n.slides).length && (n.updateControls(), (e = n.Thumbs) && e.isActive && (e.create(), e.focus()))
                },
                addEvents: function() {
                    var e = this;
                    e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                        t.stopPropagation(), t.preventDefault(), e.close(t)
                    }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(t) {
                        t.stopPropagation(), t.preventDefault(), e.previous()
                    }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(t) {
                        t.stopPropagation(), t.preventDefault(), e.next()
                    }).on("click.fb", "[data-fancybox-zoom]", function(t) {
                        e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                    }), r.on("orientationchange.fb resize.fb", function(t) {
                        t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && h(e.requestId), e.requestId = c(function() {
                            e.update(t)
                        })) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout(function() {
                            e.$refs.stage.show(), e.update(t)
                        }, i.fancybox.isMobile ? 600 : 250))
                    }), a.on("keydown.fb", function(t) {
                        var n = (i.fancybox ? i.fancybox.getInstance() : null).current,
                            o = t.keyCode || t.which;
                        if (9 != o) return !n.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || i(t.target).is("input,textarea,video,audio") ? void 0 : 8 === o || 27 === o ? (t.preventDefault(), void e.close(t)) : 37 === o || 38 === o ? (t.preventDefault(), void e.previous()) : 39 === o || 40 === o ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, o);
                        n.opts.trapFocus && e.focus(t)
                    }), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, a.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(t) {
                        e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1
                    }), e.idleInterval = t.setInterval(function() {
                        ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls())
                    }, 1e3))
                },
                removeEvents: function() {
                    var e = this;
                    r.off("orientationchange.fb resize.fb"), a.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
                },
                previous: function(t) {
                    return this.jumpTo(this.currPos - 1, t)
                },
                next: function(t) {
                    return this.jumpTo(this.currPos + 1, t)
                },
                jumpTo: function(t, e) {
                    var n, o, s, r, a, l, c, h, d, f = this,
                        p = f.group.length;
                    if (!(f.isDragging || f.isClosing || f.isAnimating && f.firstRun)) {
                        if (t = parseInt(t, 10), !(s = f.current ? f.current.opts.loop : f.opts.loop) && (t < 0 || t >= p)) return !1;
                        if (n = f.firstRun = !Object.keys(f.slides).length, a = f.current, f.prevIndex = f.currIndex, f.prevPos = f.currPos, r = f.createSlide(t), p > 1 && ((s || r.index < p - 1) && f.createSlide(t + 1), (s || r.index > 0) && f.createSlide(t - 1)), f.current = r, f.currIndex = r.index, f.currPos = r.pos, f.trigger("beforeShow", n), f.updateControls(), r.forcedDuration = void 0, i.isNumeric(e) ? r.forcedDuration = e : e = r.opts[n ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), o = f.isMoved(r), r.$slide.addClass("fancybox-slide--current"), n) return r.opts.animationEffect && e && f.$refs.container.css("transition-duration", e + "ms"), f.$refs.container.addClass("fancybox-is-open").trigger("focus"), f.loadSlide(r), void f.preload("image");
                        l = i.fancybox.getTranslate(a.$slide), c = i.fancybox.getTranslate(f.$refs.stage), i.each(f.slides, function(t, e) {
                            i.fancybox.stop(e.$slide, !0)
                        }), a.pos !== r.pos && (a.isComplete = !1), a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), o ? (d = l.left - (a.pos * l.width + a.pos * a.opts.gutter), i.each(f.slides, function(t, n) {
                            n.$slide.removeClass("fancybox-animated").removeClass(function(t, e) {
                                return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                            });
                            var o = n.pos * l.width + n.pos * n.opts.gutter;
                            i.fancybox.setTranslate(n.$slide, {
                                top: 0,
                                left: o - c.left + d
                            }), n.pos !== r.pos && n.$slide.addClass("fancybox-slide--" + (n.pos > r.pos ? "next" : "previous")), u(n.$slide), i.fancybox.animate(n.$slide, {
                                top: 0,
                                left: (n.pos - r.pos) * l.width + (n.pos - r.pos) * n.opts.gutter
                            }, e, function() {
                                n.$slide.css({
                                    transform: "",
                                    opacity: ""
                                }).removeClass("fancybox-slide--next fancybox-slide--previous"), n.pos === f.currPos && f.complete()
                            })
                        })) : e && r.opts.transitionEffect && (h = "fancybox-animated fancybox-fx-" + r.opts.transitionEffect, a.$slide.addClass("fancybox-slide--" + (a.pos > r.pos ? "next" : "previous")), i.fancybox.animate(a.$slide, h, e, function() {
                            a.$slide.removeClass(h).removeClass("fancybox-slide--next fancybox-slide--previous")
                        }, !1)), r.isLoaded ? f.revealContent(r) : f.loadSlide(r), f.preload("image")
                    }
                },
                createSlide: function(t) {
                    var e, n, o = this;
                    return n = (n = t % o.group.length) < 0 ? o.group.length + n : n, !o.slides[t] && o.group[n] && (e = i('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage), o.slides[t] = i.extend(!0, {}, o.group[n], {
                        pos: t,
                        $slide: e,
                        isLoaded: !1
                    }), o.updateSlide(o.slides[t])), o.slides[t]
                },
                scaleToActual: function(t, e, n) {
                    var o, s, r, a, l, c = this,
                        h = c.current,
                        d = h.$content,
                        u = i.fancybox.getTranslate(h.$slide).width,
                        f = i.fancybox.getTranslate(h.$slide).height,
                        p = h.width,
                        g = h.height;
                    c.isAnimating || c.isMoved() || !d || "image" != h.type || !h.isLoaded || h.hasError || (c.isAnimating = !0, i.fancybox.stop(d), t = void 0 === t ? .5 * u : t, e = void 0 === e ? .5 * f : e, (o = i.fancybox.getTranslate(d)).top -= i.fancybox.getTranslate(h.$slide).top, o.left -= i.fancybox.getTranslate(h.$slide).left, a = p / o.width, l = g / o.height, s = .5 * u - .5 * p, r = .5 * f - .5 * g, p > u && ((s = o.left * a - (t * a - t)) > 0 && (s = 0), s < u - p && (s = u - p)), g > f && ((r = o.top * l - (e * l - e)) > 0 && (r = 0), r < f - g && (r = f - g)), c.updateCursor(p, g), i.fancybox.animate(d, {
                        top: r,
                        left: s,
                        scaleX: a,
                        scaleY: l
                    }, n || 366, function() {
                        c.isAnimating = !1
                    }), c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop())
                },
                scaleToFit: function(t) {
                    var e, n = this,
                        o = n.current,
                        s = o.$content;
                    n.isAnimating || n.isMoved() || !s || "image" != o.type || !o.isLoaded || o.hasError || (n.isAnimating = !0, i.fancybox.stop(s), e = n.getFitPos(o), n.updateCursor(e.width, e.height), i.fancybox.animate(s, {
                        top: e.top,
                        left: e.left,
                        scaleX: e.width / s.width(),
                        scaleY: e.height / s.height()
                    }, t || 366, function() {
                        n.isAnimating = !1
                    }))
                },
                getFitPos: function(t) {
                    var e, n, o, s, r = t.$content,
                        a = t.$slide,
                        l = t.width || t.opts.width,
                        c = t.height || t.opts.height,
                        h = {};
                    return !!(t.isLoaded && r && r.length) && (e = i.fancybox.getTranslate(this.$refs.stage).width, n = i.fancybox.getTranslate(this.$refs.stage).height, e -= parseFloat(a.css("paddingLeft")) + parseFloat(a.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")), n -= parseFloat(a.css("paddingTop")) + parseFloat(a.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")), l && c || (l = e, c = n), (l *= o = Math.min(1, e / l, n / c)) > e - .5 && (l = e), (c *= o) > n - .5 && (c = n), "image" === t.type ? (h.top = Math.floor(.5 * (n - c)) + parseFloat(a.css("paddingTop")), h.left = Math.floor(.5 * (e - l)) + parseFloat(a.css("paddingLeft"))) : "video" === t.contentType && (c > l / (s = t.opts.width && t.opts.height ? l / c : t.opts.ratio || 16 / 9) ? c = l / s : l > c * s && (l = c * s)), h.width = l, h.height = c, h)
                },
                update: function(t) {
                    var e = this;
                    i.each(e.slides, function(i, n) {
                        e.updateSlide(n, t)
                    })
                },
                updateSlide: function(t, e) {
                    var n = this,
                        o = t && t.$content,
                        s = t.width || t.opts.width,
                        r = t.height || t.opts.height,
                        a = t.$slide;
                    n.adjustCaption(t), o && (s || r || "video" === t.contentType) && !t.hasError && (i.fancybox.stop(o), i.fancybox.setTranslate(o, n.getFitPos(t)), t.pos === n.currPos && (n.isAnimating = !1, n.updateCursor())), n.adjustLayout(t), a.length && (a.trigger("refresh"), t.pos === n.currPos && n.$refs.toolbar.add(n.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", a.get(0).scrollHeight > a.get(0).clientHeight)), n.trigger("onUpdate", t, e)
                },
                centerSlide: function(t) {
                    var e = this,
                        n = e.current,
                        o = n.$slide;
                    !e.isClosing && n && (o.siblings().css({
                        transform: "",
                        opacity: ""
                    }), o.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), i.fancybox.animate(o, {
                        top: 0,
                        left: 0,
                        opacity: 1
                    }, void 0 === t ? 0 : t, function() {
                        o.css({
                            transform: "",
                            opacity: ""
                        }), n.isComplete || e.complete()
                    }, !1))
                },
                isMoved: function(t) {
                    var e, n, o = t || this.current;
                    return !!o && (n = i.fancybox.getTranslate(this.$refs.stage), e = i.fancybox.getTranslate(o.$slide), !o.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - n.top) > .5 || Math.abs(e.left - n.left) > .5))
                },
                updateCursor: function(t, e) {
                    var n, o, s = this,
                        r = s.current,
                        a = s.$refs.container;
                    r && !s.isClosing && s.Guestures && (a.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), o = !!(n = s.canPan(t, e)) || s.isZoomable(), a.toggleClass("fancybox-is-zoomable", o), i("[data-fancybox-zoom]").prop("disabled", !o), n ? a.addClass("fancybox-can-pan") : o && ("zoom" === r.opts.clickContent || i.isFunction(r.opts.clickContent) && "zoom" == r.opts.clickContent(r)) ? a.addClass("fancybox-can-zoomIn") : r.opts.touch && (r.opts.touch.vertical || s.group.length > 1) && "video" !== r.contentType && a.addClass("fancybox-can-swipe"))
                },
                isZoomable: function() {
                    var t, e = this,
                        i = e.current;
                    if (i && !e.isClosing && "image" === i.type && !i.hasError) {
                        if (!i.isLoaded) return !0;
                        if ((t = e.getFitPos(i)) && (i.width > t.width || i.height > t.height)) return !0
                    }
                    return !1
                },
                isScaledDown: function(t, e) {
                    var n = !1,
                        o = this.current,
                        s = o.$content;
                    return void 0 !== t && void 0 !== e ? n = t < o.width && e < o.height : s && (n = (n = i.fancybox.getTranslate(s)).width < o.width && n.height < o.height), n
                },
                canPan: function(t, e) {
                    var n = this.current,
                        o = null,
                        s = !1;
                    return "image" === n.type && (n.isComplete || t && e) && !n.hasError && (s = this.getFitPos(n), void 0 !== t && void 0 !== e ? o = {
                        width: t,
                        height: e
                    } : n.isComplete && (o = i.fancybox.getTranslate(n.$content)), o && s && (s = Math.abs(o.width - s.width) > 1.5 || Math.abs(o.height - s.height) > 1.5)), s
                },
                loadSlide: function(t) {
                    var e, n, o, s = this;
                    if (!t.isLoading && !t.isLoaded) {
                        if (t.isLoading = !0, !1 === s.trigger("beforeLoad", t)) return t.isLoading = !1, !1;
                        switch (e = t.type, (n = t.$slide).off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
                            case "image":
                                s.setImage(t);
                                break;
                            case "iframe":
                                s.setIframe(t);
                                break;
                            case "html":
                                s.setContent(t, t.src || t.content);
                                break;
                            case "video":
                                s.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                                break;
                            case "inline":
                                i(t.src).length ? s.setContent(t, i(t.src)) : s.setError(t);
                                break;
                            case "ajax":
                                s.showLoading(t), o = i.ajax(i.extend({}, t.opts.ajax.settings, {
                                    url: t.src,
                                    success: function(e, i) {
                                        "success" === i && s.setContent(t, e)
                                    },
                                    error: function(e, i) {
                                        e && "abort" !== i && s.setError(t)
                                    }
                                })), n.one("onReset", function() {
                                    o.abort()
                                });
                                break;
                            default:
                                s.setError(t)
                        }
                        return !0
                    }
                },
                setImage: function(t) {
                    var n, o = this;
                    setTimeout(function() {
                        var e = t.$image;
                        o.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || o.showLoading(t)
                    }, 50), o.checkSrcset(t), t.$content = i('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, (n = e.createElement("img")).onerror = function() {
                        i(this).remove(), t.$ghost = null
                    }, n.onload = function() {
                        o.afterLoad(t)
                    }, t.$ghost = i(n).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), o.setBigImage(t)
                },
                checkSrcset: function(e) {
                    var i, n, o, s, r = e.opts.srcset || e.opts.image.srcset;
                    if (r) {
                        o = t.devicePixelRatio || 1, s = t.innerWidth * o, (n = r.split(",").map(function(t) {
                            var e = {};
                            return t.trim().split(/\s+/).forEach(function(t, i) {
                                var n = parseInt(t.substring(0, t.length - 1), 10);
                                if (0 === i) return e.url = t;
                                n && (e.value = n, e.postfix = t[t.length - 1])
                            }), e
                        })).sort(function(t, e) {
                            return t.value - e.value
                        });
                        for (var a = 0; a < n.length; a++) {
                            var l = n[a];
                            if ("w" === l.postfix && l.value >= s || "x" === l.postfix && l.value >= o) {
                                i = l;
                                break
                            }
                        }!i && n.length && (i = n[n.length - 1]), i && (e.src = i.url, e.width && e.height && "w" == i.postfix && (e.height = e.width / e.height * i.value, e.width = i.value), e.opts.srcset = r)
                    }
                },
                setBigImage: function(t) {
                    var n = this,
                        o = e.createElement("img"),
                        s = i(o);
                    t.$image = s.one("error", function() {
                        n.setError(t)
                    }).one("load", function() {
                        var e;
                        t.$ghost || (n.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), n.afterLoad(t)), n.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (t.width / t.height > 1 && r.width() / r.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), s.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function() {
                            t.$ghost && !n.isClosing && t.$ghost.hide()
                        }, Math.min(300, Math.max(1e3, t.height / 1600))), n.hideLoading(t))
                    }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (o.complete || "complete" == o.readyState) && s.naturalWidth && s.naturalHeight ? s.trigger("load") : o.error && s.trigger("error")
                },
                resolveImageSlideSize: function(t, e, i) {
                    var n = parseInt(t.opts.width, 10),
                        o = parseInt(t.opts.height, 10);
                    t.width = e, t.height = i, n > 0 && (t.width = n, t.height = Math.floor(n * i / e)), o > 0 && (t.width = Math.floor(o * e / i), t.height = o)
                },
                setIframe: function(t) {
                    var e, n = this,
                        o = t.opts.iframe,
                        s = t.$slide;
                    t.$content = i('<div class="fancybox-content' + (o.preload ? " fancybox-is-hidden" : "") + '"></div>').css(o.css).appendTo(s), s.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = i(o.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(o.attr).appendTo(t.$content), o.preload ? (n.showLoading(t), e.on("load.fb error.fb", function(e) {
                        this.isReady = 1, t.$slide.trigger("refresh"), n.afterLoad(t)
                    }), s.on("refresh.fb", function() {
                        var i, n = t.$content,
                            r = o.css.width,
                            a = o.css.height;
                        if (1 === e[0].isReady) {
                            try {
                                i = e.contents().find("body")
                            } catch (t) {}
                            i && i.length && i.children().length && (s.css("overflow", "visible"), n.css({
                                width: "100%",
                                "max-width": "100%",
                                height: "9999px"
                            }), void 0 === r && (r = Math.ceil(Math.max(i[0].clientWidth, i.outerWidth(!0)))), n.css("width", r || "").css("max-width", ""), void 0 === a && (a = Math.ceil(Math.max(i[0].clientHeight, i.outerHeight(!0)))), n.css("height", a || ""), s.css("overflow", "auto")), n.removeClass("fancybox-is-hidden")
                        }
                    })) : n.afterLoad(t), e.attr("src", t.src), s.one("onReset", function() {
                        try {
                            i(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                        } catch (t) {}
                        i(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1
                    })
                },
                setContent: function(t, e) {
                    var n = this;
                    n.isClosing || (n.hideLoading(t), t.$content && i.fancybox.stop(t.$content), t.$slide.empty(), function(t) {
                        return t && t.hasOwnProperty && t instanceof i
                    }(e) && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = i("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === i.type(e) && (e = i("<div>").append(i.trim(e)).contents()), t.opts.filter && (e = i("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function() {
                        i(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (i(this).empty(), t.isLoaded = !1, t.isRevealed = !1)
                    }), i(e).appendTo(t.$slide), i(e).is("video,audio") && (i(e).addClass("fancybox-video"), i(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || i(e).attr("width"), t.opts.height = t.opts.height || i(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), n.afterLoad(t))
                },
                setError: function(t) {
                    t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
                },
                showLoading: function(t) {
                    var e = this;
                    (t = t || e.current) && !t.$spinner && (t.$spinner = i(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
                },
                hideLoading: function(t) {
                    (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner)
                },
                afterLoad: function(t) {
                    var e = this;
                    e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = i(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                        return 2 == t.button && t.preventDefault(), !0
                    }), "image" === t.type && i('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.adjustCaption(t), e.adjustLayout(t), t.pos === e.currPos && e.updateCursor(), e.revealContent(t))
                },
                adjustCaption: function(t) {
                    var e, i = this,
                        n = t || i.current,
                        o = n.opts.caption,
                        s = n.opts.preventCaptionOverlap,
                        r = i.$refs.caption,
                        a = !1;
                    r.toggleClass("fancybox-caption--separate", s), s && o && o.length && (n.pos !== i.currPos ? ((e = r.clone().appendTo(r.parent())).children().eq(0).empty().html(o), a = e.outerHeight(!0), e.empty().remove()) : i.$caption && (a = i.$caption.outerHeight(!0)), n.$slide.css("padding-bottom", a || ""))
                },
                adjustLayout: function(t) {
                    var e, i, n, o, s = t || this.current;
                    s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""), s.$content.outerHeight() > s.$slide.height() + .5 && (n = s.$slide[0].style["padding-bottom"], o = s.$slide.css("padding-bottom"), parseFloat(o) > 0 && (e = s.$slide[0].scrollHeight, s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (i = o), s.$slide.css("padding-bottom", n))), s.$content.css("margin-bottom", i))
                },
                revealContent: function(t) {
                    var e, n, o, s, r = this,
                        a = t.$slide,
                        l = !1,
                        c = !1,
                        h = r.isMoved(t),
                        d = t.isRevealed;
                    return t.isRevealed = !0, e = t.opts[r.firstRun ? "animationEffect" : "transitionEffect"], o = t.opts[r.firstRun ? "animationDuration" : "transitionDuration"], o = parseInt(void 0 === t.forcedDuration ? o : t.forcedDuration, 10), !h && t.pos === r.currPos && o || (e = !1), "zoom" === e && (t.pos === r.currPos && o && "image" === t.type && !t.hasError && (c = r.getThumbPos(t)) ? l = r.getFitPos(t) : e = "fade"), "zoom" === e ? (r.isAnimating = !0, l.scaleX = l.width / c.width, l.scaleY = l.height / c.height, "auto" == (s = t.opts.zoomOpacity) && (s = Math.abs(t.width / t.height - c.width / c.height) > .1), s && (c.opacity = .1, l.opacity = 1), i.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), c), u(t.$content), void i.fancybox.animate(t.$content, l, o, function() {
                        r.isAnimating = !1, r.complete()
                    })) : (r.updateSlide(t), e ? (i.fancybox.stop(a), n = "fancybox-slide--" + (t.pos >= r.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, a.addClass(n).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), u(a), "image" !== t.type && t.$content.hide().show(0), void i.fancybox.animate(a, "fancybox-slide--current", o, function() {
                        a.removeClass(n).css({
                            transform: "",
                            opacity: ""
                        }), t.pos === r.currPos && r.complete()
                    }, !0)) : (t.$content.removeClass("fancybox-is-hidden"), d || !h || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void(t.pos === r.currPos && r.complete())))
                },
                getThumbPos: function(t) {
                    var e, n, o, s, r, a = !1,
                        l = t.$thumb;
                    return !(!l || !p(l[0])) && (e = i.fancybox.getTranslate(l), n = parseFloat(l.css("border-top-width") || 0), o = parseFloat(l.css("border-right-width") || 0), s = parseFloat(l.css("border-bottom-width") || 0), r = parseFloat(l.css("border-left-width") || 0), a = {
                        top: e.top + n,
                        left: e.left + r,
                        width: e.width - o - r,
                        height: e.height - n - s,
                        scaleX: 1,
                        scaleY: 1
                    }, e.width > 0 && e.height > 0 && a)
                },
                complete: function() {
                    var t, e = this,
                        n = e.current,
                        o = {};
                    !e.isMoved() && n.isLoaded && (n.isComplete || (n.isComplete = !0, n.$slide.siblings().trigger("onReset"), e.preload("inline"), u(n.$slide), n.$slide.addClass("fancybox-slide--complete"), i.each(e.slides, function(t, n) {
                        n.pos >= e.currPos - 1 && n.pos <= e.currPos + 1 ? o[n.pos] = n : n && (i.fancybox.stop(n.$slide), n.$slide.off().remove())
                    }), e.slides = o), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), n.opts.video.autoStart && n.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function() {
                        this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next()
                    }), n.opts.autoFocus && "html" === n.contentType && ((t = n.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : e.focus(null, !0)), n.$slide.scrollTop(0).scrollLeft(0))
                },
                preload: function(t) {
                    var e, i, n = this;
                    n.group.length < 2 || (i = n.slides[n.currPos + 1], (e = n.slides[n.currPos - 1]) && e.type === t && n.loadSlide(e), i && i.type === t && n.loadSlide(i))
                },
                focus: function(t, n) {
                    var o, s, r = this,
                        a = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                    r.isClosing || ((o = (o = !t && r.current && r.current.isComplete ? r.current.$slide.find("*:visible" + (n ? ":not(.fancybox-close-small)" : "")) : r.$refs.container.find("*:visible")).filter(a).filter(function() {
                        return "hidden" !== i(this).css("visibility") && !i(this).hasClass("disabled")
                    })).length ? (s = o.index(e.activeElement), t && t.shiftKey ? (s < 0 || 0 == s) && (t.preventDefault(), o.eq(o.length - 1).trigger("focus")) : (s < 0 || s == o.length - 1) && (t && t.preventDefault(), o.eq(0).trigger("focus"))) : r.$refs.container.trigger("focus"))
                },
                activate: function() {
                    var t = this;
                    i(".fancybox-container").each(function() {
                        var e = i(this).data("FancyBox");
                        e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
                    }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
                },
                close: function(t, e) {
                    var n, o, s, r, a, l, h, d = this,
                        f = d.current,
                        p = function() {
                            d.cleanUp(t)
                        };
                    return !(d.isClosing || (d.isClosing = !0, !1 === d.trigger("beforeClose", t) ? (d.isClosing = !1, c(function() {
                        d.update()
                    }), 1) : (d.removeEvents(), s = f.$content, n = f.opts.animationEffect, o = i.isNumeric(e) ? e : n ? f.opts.animationDuration : 0, f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? i.fancybox.stop(f.$slide) : n = !1, f.$slide.siblings().trigger("onReset").remove(), o && d.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", o + "ms"), d.hideLoading(f), d.hideControls(!0), d.updateCursor(), "zoom" !== n || s && o && "image" === f.type && !d.isMoved() && !f.hasError && (h = d.getThumbPos(f)) || (n = "fade"), "zoom" === n ? (i.fancybox.stop(s), r = i.fancybox.getTranslate(s), l = {
                        top: r.top,
                        left: r.left,
                        scaleX: r.width / h.width,
                        scaleY: r.height / h.height,
                        width: h.width,
                        height: h.height
                    }, a = f.opts.zoomOpacity, "auto" == a && (a = Math.abs(f.width / f.height - h.width / h.height) > .1), a && (h.opacity = 0), i.fancybox.setTranslate(s, l), u(s), i.fancybox.animate(s, h, o, p), 0) : (n && o ? i.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + n, o, p) : !0 === t ? setTimeout(p, o) : p(), 0))))
                },
                cleanUp: function(e) {
                    var n, o, s, r = this,
                        a = r.current.opts.$orig;
                    r.current.$slide.trigger("onReset"), r.$refs.container.empty().remove(), r.trigger("afterClose", e), r.current.opts.backFocus && (a && a.length && a.is(":visible") || (a = r.$trigger), a && a.length && (o = t.scrollX, s = t.scrollY, a.trigger("focus"), i("html, body").scrollTop(s).scrollLeft(o))), r.current = null, (n = i.fancybox.getInstance()) ? n.activate() : (i("body").removeClass("fancybox-active compensate-for-scrollbar"), i("#fancybox-style-noscroll").remove())
                },
                trigger: function(t, e) {
                    var n, o = Array.prototype.slice.call(arguments, 1),
                        s = this,
                        r = e && e.opts ? e : s.current;
                    if (r ? o.unshift(r) : r = s, o.unshift(s), i.isFunction(r.opts[t]) && (n = r.opts[t].apply(r, o)), !1 === n) return n;
                    "afterClose" !== t && s.$refs ? s.$refs.container.trigger(t + ".fb", o) : a.trigger(t + ".fb", o)
                },
                updateControls: function() {
                    var t = this,
                        n = t.current,
                        o = n.index,
                        s = t.$refs.container,
                        r = t.$refs.caption,
                        a = n.opts.caption;
                    n.$slide.trigger("refresh"), a && a.length ? (t.$caption = r, r.children().eq(0).html(a)) : t.$caption = null, t.hasHiddenControls || t.isIdle || t.showControls(), s.find("[data-fancybox-count]").html(t.group.length), s.find("[data-fancybox-index]").html(o + 1), s.find("[data-fancybox-prev]").prop("disabled", !n.opts.loop && o <= 0), s.find("[data-fancybox-next]").prop("disabled", !n.opts.loop && o >= t.group.length - 1), "image" === n.type ? s.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", n.opts.image.src || n.src).show() : n.opts.toolbar && s.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), i(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus")
                },
                hideControls: function(t) {
                    var e = ["infobar", "toolbar", "nav"];
                    !t && this.current.opts.preventCaptionOverlap || e.push("caption"), this.$refs.container.removeClass(e.map(function(t) {
                        return "fancybox-show-" + t
                    }).join(" ")), this.hasHiddenControls = !0
                },
                showControls: function() {
                    var t = this,
                        e = t.current ? t.current.opts : t.opts,
                        i = t.$refs.container;
                    t.hasHiddenControls = !1, t.idleSecondsCounter = 0, i.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal)
                },
                toggleControls: function() {
                    this.hasHiddenControls ? this.showControls() : this.hideControls()
                }
            }), i.fancybox = {
                version: "3.5.6",
                defaults: s,
                getInstance: function(t) {
                    var e = i('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                        n = Array.prototype.slice.call(arguments, 1);
                    return e instanceof g && ("string" === i.type(t) ? e[t].apply(e, n) : "function" === i.type(t) && t.apply(e, n), e)
                },
                open: function(t, e, i) {
                    return new g(t, e, i)
                },
                close: function(t) {
                    var e = this.getInstance();
                    e && (e.close(), !0 === t && this.close(t))
                },
                destroy: function() {
                    this.close(!0), a.add("body").off("click.fb-start", "**")
                },
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                use3d: function() {
                    var i = e.createElement("div");
                    return t.getComputedStyle && t.getComputedStyle(i) && t.getComputedStyle(i).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
                }(),
                getTranslate: function(t) {
                    var e;
                    return !(!t || !t.length) && {
                        top: (e = t[0].getBoundingClientRect()).top || 0,
                        left: e.left || 0,
                        width: e.width,
                        height: e.height,
                        opacity: parseFloat(t.css("opacity"))
                    }
                },
                setTranslate: function(t, e) {
                    var i = "",
                        n = {};
                    if (t && e) return void 0 === e.left && void 0 === e.top || (i = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY ? i += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (i += " scaleX(" + e.scaleX + ")"), i.length && (n.transform = i), void 0 !== e.opacity && (n.opacity = e.opacity), void 0 !== e.width && (n.width = e.width), void 0 !== e.height && (n.height = e.height), t.css(n)
                },
                animate: function(t, e, n, o, s) {
                    var r, a = this;
                    i.isFunction(n) && (o = n, n = null), a.stop(t), r = a.getTranslate(t), t.on(d, function(l) {
                        (!l || !l.originalEvent || t.is(l.originalEvent.target) && "z-index" != l.originalEvent.propertyName) && (a.stop(t), i.isNumeric(n) && t.css("transition-duration", ""), i.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && a.setTranslate(t, {
                            top: e.top,
                            left: e.left,
                            width: r.width * e.scaleX,
                            height: r.height * e.scaleY,
                            scaleX: 1,
                            scaleY: 1
                        }) : !0 !== s && t.removeClass(e), i.isFunction(o) && o(l))
                    }), i.isNumeric(n) && t.css("transition-duration", n + "ms"), i.isPlainObject(e) ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), i.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function() {
                        t.trigger(d)
                    }, n + 33))
                },
                stop: function(t, e) {
                    t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(d), t.off(d).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
                }
            }, i.fn.fancybox = function(t) {
                var e;
                return (e = (t = t || {}).selector || !1) ? i("body").off("click.fb-start", e).on("click.fb-start", e, {
                    options: t
                }, o) : this.off("click.fb-start").on("click.fb-start", {
                    items: this,
                    options: t
                }, o), this
            }, a.on("click.fb-start", "[data-fancybox]", o), a.on("click.fb-start", "[data-fancybox-trigger]", function(t) {
                i('[data-fancybox="' + i(this).attr("data-fancybox-trigger") + '"]').eq(i(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                    $trigger: i(this)
                })
            }),
            function() {
                var t = null;
                a.on("mousedown mouseup focus blur", ".fancybox-button", function(e) {
                    switch (e.type) {
                        case "mousedown":
                            t = i(this);
                            break;
                        case "mouseup":
                            t = null;
                            break;
                        case "focusin":
                            i(".fancybox-button").removeClass("fancybox-focus"), i(this).is(t) || i(this).is("[disabled]") || i(this).addClass("fancybox-focus");
                            break;
                        case "focusout":
                            i(".fancybox-button").removeClass("fancybox-focus")
                    }
                })
            }()
    }
}(window, document, jQuery),
function(t) {
    "use strict";
    var e = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "https://www.youtube-nocookie.com/embed/$4",
                thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function(t) {
                    return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                }
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function(t) {
                    return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                }
            }
        },
        i = function(e, i, n) {
            if (e) return n = n || "", "object" === t.type(n) && (n = t.param(n, !0)), t.each(i, function(t, i) {
                e = e.replace("$" + t, i || "")
            }), n.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + n), e
        };
    t(document).on("objectNeedsType.fb", function(n, o, s) {
        var r, a, l, c, h, d, u, f = s.src || "",
            p = !1;
        r = t.extend(!0, {}, e, s.opts.media), t.each(r, function(e, n) {
            if (l = f.match(n.matcher)) {
                if (p = n.type, u = e, d = {}, n.paramPlace && l[n.paramPlace]) {
                    "?" == (h = l[n.paramPlace])[0] && (h = h.substring(1)), h = h.split("&");
                    for (var o = 0; o < h.length; ++o) {
                        var r = h[o].split("=", 2);
                        2 == r.length && (d[r[0]] = decodeURIComponent(r[1].replace(/\+/g, " ")))
                    }
                }
                return c = t.extend(!0, {}, n.params, s.opts[e], d), f = "function" === t.type(n.url) ? n.url.call(this, l, c, s) : i(n.url, l, c), a = "function" === t.type(n.thumb) ? n.thumb.call(this, l, c, s) : i(n.thumb, l), "youtube" === e ? f = f.replace(/&t=((\d+)m)?(\d+)s/, function(t, e, i, n) {
                    return "&start=" + ((i ? 60 * parseInt(i, 10) : 0) + parseInt(n, 10))
                }) : "vimeo" === e && (f = f.replace("&%23", "#")), !1
            }
        }), p ? (s.opts.thumb || s.opts.$thumb && s.opts.$thumb.length || (s.opts.thumb = a), "iframe" === p && (s.opts = t.extend(!0, s.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        })), t.extend(s, {
            type: p,
            src: f,
            origSrc: s.src,
            contentSource: u,
            contentType: "image" === p ? "image" : "gmap_place" == u || "gmap_search" == u ? "map" : "video"
        })) : f && (s.type = s.opts.defaultType)
    });
    var n = {
        youtube: {
            src: "https://www.youtube.com/iframe_api",
            class: "YT",
            loading: !1,
            loaded: !1
        },
        vimeo: {
            src: "https://player.vimeo.com/api/player.js",
            class: "Vimeo",
            loading: !1,
            loaded: !1
        },
        load: function(t) {
            var e, i = this;
            this[t].loaded ? setTimeout(function() {
                i.done(t)
            }) : this[t].loading || (this[t].loading = !0, (e = document.createElement("script")).type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function() {
                i[t].loaded = !0, i.done(t)
            } : e.onload = function() {
                i[t].loaded = !0, i.done(t)
            }, document.body.appendChild(e))
        },
        done: function(e) {
            var i, n;
            "youtube" === e && delete window.onYouTubeIframeAPIReady, (i = t.fancybox.getInstance()) && (n = i.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? new YT.Player(n.attr("id"), {
                events: {
                    onStateChange: function(t) {
                        0 == t.data && i.next()
                    }
                }
            }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(n).on("ended", function() {
                i.next()
            }))
        }
    };
    t(document).on({
        "afterShow.fb": function(t, e, i) {
            e.group.length > 1 && ("youtube" === i.contentSource || "vimeo" === i.contentSource) && n.load(i.contentSource)
        }
    })
}(jQuery),
function(t, e, i) {
    "use strict";
    var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
            return t.setTimeout(e, 1e3 / 60)
        },
        o = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
            t.clearTimeout(e)
        },
        s = function(e) {
            var i = [];
            for (var n in e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) e[n].pageX ? i.push({
                x: e[n].pageX,
                y: e[n].pageY
            }) : e[n].clientX && i.push({
                x: e[n].clientX,
                y: e[n].clientY
            });
            return i
        },
        r = function(t, e, i) {
            return e && t ? "x" === i ? t.x - e.x : "y" === i ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
        },
        a = function(t) {
            if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || i.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
            for (var e = 0, n = t[0].attributes, o = n.length; e < o; e++)
                if ("data-fancybox-" === n[e].nodeName.substr(0, 14)) return !0;
            return !1
        },
        l = function(e) {
            var i = t.getComputedStyle(e)["overflow-y"],
                n = t.getComputedStyle(e)["overflow-x"],
                o = ("scroll" === i || "auto" === i) && e.scrollHeight > e.clientHeight,
                s = ("scroll" === n || "auto" === n) && e.scrollWidth > e.clientWidth;
            return o || s
        },
        c = function(t) {
            for (var e = !1; !(e = l(t.get(0))) && ((t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body")););
            return e
        },
        h = function(t) {
            var e = this;
            e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", i.proxy(e, "ontouchstart"))
        };
    h.prototype.destroy = function() {
        var t = this;
        t.$container.off(".fb.touch"), i(e).off(".fb.touch"), t.requestId && (o(t.requestId), t.requestId = null), t.tapped && (clearTimeout(t.tapped), t.tapped = null)
    }, h.prototype.ontouchstart = function(n) {
        var o = this,
            l = i(n.target),
            h = o.instance,
            d = h.current,
            u = d.$slide,
            f = d.$content,
            p = "touchstart" == n.type;
        if (p && o.$container.off("mousedown.fb.touch"), (!n.originalEvent || 2 != n.originalEvent.button) && u.length && l.length && !a(l) && !a(l.parent()) && (l.is("img") || !(n.originalEvent.clientX > l[0].clientWidth + l.offset().left))) {
            if (!d || h.isAnimating || d.$slide.hasClass("fancybox-animated")) return n.stopPropagation(), void n.preventDefault();
            o.realPoints = o.startPoints = s(n), o.startPoints.length && (d.touch && n.stopPropagation(), o.startEvent = n, o.canTap = !0, o.$target = l, o.$content = f, o.opts = d.opts.touch, o.isPanning = !1, o.isSwiping = !1, o.isZooming = !1, o.isScrolling = !1, o.canPan = h.canPan(), o.startTime = (new Date).getTime(), o.distanceX = o.distanceY = o.distance = 0, o.canvasWidth = Math.round(u[0].clientWidth), o.canvasHeight = Math.round(u[0].clientHeight), o.contentLastPos = null, o.contentStartPos = i.fancybox.getTranslate(o.$content) || {
                top: 0,
                left: 0
            }, o.sliderStartPos = i.fancybox.getTranslate(u), o.stagePos = i.fancybox.getTranslate(h.$refs.stage), o.sliderStartPos.top -= o.stagePos.top, o.sliderStartPos.left -= o.stagePos.left, o.contentStartPos.top -= o.stagePos.top, o.contentStartPos.left -= o.stagePos.left, i(e).off(".fb.touch").on(p ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", i.proxy(o, "ontouchend")).on(p ? "touchmove.fb.touch" : "mousemove.fb.touch", i.proxy(o, "ontouchmove")), i.fancybox.isMobile && e.addEventListener("scroll", o.onscroll, !0), ((o.opts || o.canPan) && (l.is(o.$stage) || o.$stage.find(l).length) || (l.is(".fancybox-image") && n.preventDefault(), i.fancybox.isMobile && l.parents(".fancybox-caption").length)) && (o.isScrollable = c(l) || c(l.parent()), i.fancybox.isMobile && o.isScrollable || n.preventDefault(), (1 === o.startPoints.length || d.hasError) && (o.canPan ? (i.fancybox.stop(o.$content), o.isPanning = !0) : o.isSwiping = !0, o.$container.addClass("fancybox-is-grabbing")), 2 === o.startPoints.length && "image" === d.type && (d.isLoaded || d.$ghost) && (o.canTap = !1, o.isSwiping = !1, o.isPanning = !1, o.isZooming = !0, i.fancybox.stop(o.$content), o.centerPointStartX = .5 * (o.startPoints[0].x + o.startPoints[1].x) - i(t).scrollLeft(), o.centerPointStartY = .5 * (o.startPoints[0].y + o.startPoints[1].y) - i(t).scrollTop(), o.percentageOfImageAtPinchPointX = (o.centerPointStartX - o.contentStartPos.left) / o.contentStartPos.width, o.percentageOfImageAtPinchPointY = (o.centerPointStartY - o.contentStartPos.top) / o.contentStartPos.height, o.startDistanceBetweenFingers = r(o.startPoints[0], o.startPoints[1]))))
        }
    }, h.prototype.onscroll = function(t) {
        this.isScrolling = !0, e.removeEventListener("scroll", this.onscroll, !0)
    }, h.prototype.ontouchmove = function(t) {
        var e = this;
        return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void(e.canTap = !1) : (e.newPoints = s(t), void((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = r(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = r(e.newPoints[0], e.startPoints[0], "y"), e.distance = r(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
    }, h.prototype.onSwipe = function(e) {
        var s, r = this,
            a = r.instance,
            l = r.isSwiping,
            c = r.sliderStartPos.left || 0;
        if (!0 !== l) "x" == l && (r.distanceX > 0 && (r.instance.group.length < 2 || 0 === r.instance.current.index && !r.instance.current.opts.loop) ? c += Math.pow(r.distanceX, .8) : r.distanceX < 0 && (r.instance.group.length < 2 || r.instance.current.index === r.instance.group.length - 1 && !r.instance.current.opts.loop) ? c -= Math.pow(-r.distanceX, .8) : c += r.distanceX), r.sliderLastPos = {
            top: "x" == l ? 0 : r.sliderStartPos.top + r.distanceY,
            left: c
        }, r.requestId && (o(r.requestId), r.requestId = null), r.requestId = n(function() {
            r.sliderLastPos && (i.each(r.instance.slides, function(t, e) {
                var n = e.pos - r.instance.currPos;
                i.fancybox.setTranslate(e.$slide, {
                    top: r.sliderLastPos.top,
                    left: r.sliderLastPos.left + n * r.canvasWidth + n * e.opts.gutter
                })
            }), r.$container.addClass("fancybox-is-sliding"))
        });
        else if (Math.abs(r.distance) > 10) {
            if (r.canTap = !1, a.group.length < 2 && r.opts.vertical ? r.isSwiping = "y" : a.isDragging || !1 === r.opts.vertical || "auto" === r.opts.vertical && i(t).width() > 800 ? r.isSwiping = "x" : (s = Math.abs(180 * Math.atan2(r.distanceY, r.distanceX) / Math.PI), r.isSwiping = s > 45 && s < 135 ? "y" : "x"), "y" === r.isSwiping && i.fancybox.isMobile && r.isScrollable) return void(r.isScrolling = !0);
            a.isDragging = r.isSwiping, r.startPoints = r.newPoints, i.each(a.slides, function(t, e) {
                var n, o;
                i.fancybox.stop(e.$slide), n = i.fancybox.getTranslate(e.$slide), o = i.fancybox.getTranslate(a.$refs.stage), e.$slide.css({
                    transform: "",
                    opacity: "",
                    "transition-duration": ""
                }).removeClass("fancybox-animated").removeClass(function(t, e) {
                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                }), e.pos === a.current.pos && (r.sliderStartPos.top = n.top - o.top, r.sliderStartPos.left = n.left - o.left), i.fancybox.setTranslate(e.$slide, {
                    top: n.top - o.top,
                    left: n.left - o.left
                })
            }), a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop()
        }
    }, h.prototype.onPan = function() {
        var t = this;
        r(t.newPoints[0], t.realPoints[0]) < (i.fancybox.isMobile ? 10 : 5) ? t.startPoints = t.newPoints : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && o(t.requestId), t.requestId = n(function() {
            i.fancybox.setTranslate(t.$content, t.contentLastPos)
        }))
    }, h.prototype.limitMovement = function() {
        var t, e, i, n, o, s, r = this,
            a = r.canvasWidth,
            l = r.canvasHeight,
            c = r.distanceX,
            h = r.distanceY,
            d = r.contentStartPos,
            u = d.left,
            f = d.top,
            p = d.width,
            g = d.height;
        return o = p > a ? u + c : u, s = f + h, t = Math.max(0, .5 * a - .5 * p), e = Math.max(0, .5 * l - .5 * g), i = Math.min(a - p, .5 * a - .5 * p), n = Math.min(l - g, .5 * l - .5 * g), c > 0 && o > t && (o = t - 1 + Math.pow(-t + u + c, .8) || 0), c < 0 && o < i && (o = i + 1 - Math.pow(i - u - c, .8) || 0), h > 0 && s > e && (s = e - 1 + Math.pow(-e + f + h, .8) || 0), h < 0 && s < n && (s = n + 1 - Math.pow(n - f - h, .8) || 0), {
            top: s,
            left: o
        }
    }, h.prototype.limitPosition = function(t, e, i, n) {
        var o = this.canvasWidth,
            s = this.canvasHeight;
        return i > o ? t = (t = t > 0 ? 0 : t) < o - i ? o - i : t : t = Math.max(0, o / 2 - i / 2), n > s ? e = (e = e > 0 ? 0 : e) < s - n ? s - n : e : e = Math.max(0, s / 2 - n / 2), {
            top: e,
            left: t
        }
    }, h.prototype.onZoom = function() {
        var e = this,
            s = e.contentStartPos,
            a = s.width,
            l = s.height,
            c = s.left,
            h = s.top,
            d = r(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
            u = Math.floor(a * d),
            f = Math.floor(l * d),
            p = (a - u) * e.percentageOfImageAtPinchPointX,
            g = (l - f) * e.percentageOfImageAtPinchPointY,
            m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - i(t).scrollLeft(),
            v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - i(t).scrollTop(),
            y = m - e.centerPointStartX,
            b = {
                top: h + (g + (v - e.centerPointStartY)),
                left: c + (p + y),
                scaleX: d,
                scaleY: d
            };
        e.canTap = !1, e.newWidth = u, e.newHeight = f, e.contentLastPos = b, e.requestId && o(e.requestId), e.requestId = n(function() {
            i.fancybox.setTranslate(e.$content, e.contentLastPos)
        })
    }, h.prototype.ontouchend = function(t) {
        var n = this,
            r = n.isSwiping,
            a = n.isPanning,
            l = n.isZooming,
            c = n.isScrolling;
        if (n.endPoints = s(t), n.dMs = Math.max((new Date).getTime() - n.startTime, 1), n.$container.removeClass("fancybox-is-grabbing"), i(e).off(".fb.touch"), e.removeEventListener("scroll", n.onscroll, !0), n.requestId && (o(n.requestId), n.requestId = null), n.isSwiping = !1, n.isPanning = !1, n.isZooming = !1, n.isScrolling = !1, n.instance.isDragging = !1, n.canTap) return n.onTap(t);
        n.speed = 100, n.velocityX = n.distanceX / n.dMs * .5, n.velocityY = n.distanceY / n.dMs * .5, a ? n.endPanning() : l ? n.endZooming() : n.endSwiping(r, c)
    }, h.prototype.endSwiping = function(t, e) {
        var n = this,
            o = !1,
            s = n.instance.group.length,
            r = Math.abs(n.distanceX),
            a = "x" == t && s > 1 && (n.dMs > 130 && r > 10 || r > 50);
        n.sliderLastPos = null, "y" == t && !e && Math.abs(n.distanceY) > 50 ? (i.fancybox.animate(n.instance.current.$slide, {
            top: n.sliderStartPos.top + n.distanceY + 150 * n.velocityY,
            opacity: 0
        }, 200), o = n.instance.close(!0, 250)) : a && n.distanceX > 0 ? o = n.instance.previous(300) : a && n.distanceX < 0 && (o = n.instance.next(300)), !1 !== o || "x" != t && "y" != t || n.instance.centerSlide(200), n.$container.removeClass("fancybox-is-sliding")
    }, h.prototype.endPanning = function() {
        var t, e, n, o = this;
        o.contentLastPos && (!1 === o.opts.momentum || o.dMs > 350 ? (t = o.contentLastPos.left, e = o.contentLastPos.top) : (t = o.contentLastPos.left + 500 * o.velocityX, e = o.contentLastPos.top + 500 * o.velocityY), (n = o.limitPosition(t, e, o.contentStartPos.width, o.contentStartPos.height)).width = o.contentStartPos.width, n.height = o.contentStartPos.height, i.fancybox.animate(o.$content, n, 366))
    }, h.prototype.endZooming = function() {
        var t, e, n, o, s = this,
            r = s.instance.current,
            a = s.newWidth,
            l = s.newHeight;
        s.contentLastPos && (t = s.contentLastPos.left, o = {
            top: e = s.contentLastPos.top,
            left: t,
            width: a,
            height: l,
            scaleX: 1,
            scaleY: 1
        }, i.fancybox.setTranslate(s.$content, o), a < s.canvasWidth && l < s.canvasHeight ? s.instance.scaleToFit(150) : a > r.width || l > r.height ? s.instance.scaleToActual(s.centerPointStartX, s.centerPointStartY, 150) : (n = s.limitPosition(t, e, a, l), i.fancybox.animate(s.$content, n, 150)))
    }, h.prototype.onTap = function(e) {
        var n, o = this,
            r = i(e.target),
            a = o.instance,
            l = a.current,
            c = e && s(e) || o.startPoints,
            h = c[0] ? c[0].x - i(t).scrollLeft() - o.stagePos.left : 0,
            d = c[0] ? c[0].y - i(t).scrollTop() - o.stagePos.top : 0,
            u = function(t) {
                var n = l.opts[t];
                if (i.isFunction(n) && (n = n.apply(a, [l, e])), n) switch (n) {
                    case "close":
                        a.close(o.startEvent);
                        break;
                    case "toggleControls":
                        a.toggleControls();
                        break;
                    case "next":
                        a.next();
                        break;
                    case "nextOrClose":
                        a.group.length > 1 ? a.next() : a.close(o.startEvent);
                        break;
                    case "zoom":
                        "image" == l.type && (l.isLoaded || l.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(h, d) : a.group.length < 2 && a.close(o.startEvent))
                }
            };
        if ((!e.originalEvent || 2 != e.originalEvent.button) && (r.is("img") || !(h > r[0].clientWidth + r.offset().left))) {
            if (r.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) n = "Outside";
            else if (r.is(".fancybox-slide")) n = "Slide";
            else {
                if (!a.current.$content || !a.current.$content.find(r).addBack().filter(r).length) return;
                n = "Content"
            }
            if (o.tapped) {
                if (clearTimeout(o.tapped), o.tapped = null, Math.abs(h - o.tapX) > 50 || Math.abs(d - o.tapY) > 50) return this;
                u("dblclick" + n)
            } else o.tapX = h, o.tapY = d, l.opts["dblclick" + n] && l.opts["dblclick" + n] !== l.opts["click" + n] ? o.tapped = setTimeout(function() {
                o.tapped = null, a.isAnimating || u("click" + n)
            }, 500) : u("click" + n);
            return this
        }
    }, i(e).on("onActivate.fb", function(t, e) {
        e && !e.Guestures && (e.Guestures = new h(e))
    }).on("beforeClose.fb", function(t, e) {
        e && e.Guestures && e.Guestures.destroy()
    })
}(window, document, jQuery),
function(t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3,
            progress: !0
        }
    });
    var i = function(t) {
        this.instance = t, this.init()
    };
    e.extend(i.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var t = this,
                i = t.instance,
                n = i.group[i.currIndex].opts.slideShow;
            t.$button = i.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                t.toggle()
            }), i.group.length < 2 || !n ? t.$button.hide() : n.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(i.$refs.inner))
        },
        set: function(t) {
            var i = this,
                n = i.instance,
                o = n.current;
            o && (!0 === t || o.opts.loop || n.currIndex < n.group.length - 1) ? i.isActive && "video" !== o.contentType && (i.$progress && e.fancybox.animate(i.$progress.show(), {
                scaleX: 1
            }, o.opts.slideShow.speed), i.timer = setTimeout(function() {
                n.current.opts.loop || n.current.index != n.group.length - 1 ? n.next() : n.jumpTo(0)
            }, o.opts.slideShow.speed)) : (i.stop(), n.idleSecondsCounter = 0, n.showControls())
        },
        clear: function() {
            var t = this;
            clearTimeout(t.timer), t.timer = null, t.$progress && t.$progress.removeAttr("style").hide()
        },
        start: function() {
            var t = this,
                e = t.instance.current;
            e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0))
        },
        stop: function() {
            var t = this,
                e = t.instance.current;
            t.clear(), t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1, t.instance.trigger("onSlideShowChange", !1), t.$progress && t.$progress.removeAttr("style").hide()
        },
        toggle: function() {
            var t = this;
            t.isActive ? t.stop() : t.start()
        }
    }), e(t).on({
        "onInit.fb": function(t, e) {
            e && !e.SlideShow && (e.SlideShow = new i(e))
        },
        "beforeShow.fb": function(t, e, i, n) {
            var o = e && e.SlideShow;
            n ? o && i.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear()
        },
        "afterShow.fb": function(t, e, i) {
            var n = e && e.SlideShow;
            n && n.isActive && n.set()
        },
        "afterKeydown.fb": function(i, n, o, s, r) {
            var a = n && n.SlideShow;
            !a || !o.opts.slideShow || 80 !== r && 32 !== r || e(t.activeElement).is("button,a,input") || (s.preventDefault(), a.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(t, e) {
            var i = e && e.SlideShow;
            i && i.stop()
        }
    }), e(t).on("visibilitychange", function() {
        var i = e.fancybox.getInstance(),
            n = i && i.SlideShow;
        n && n.isActive && (t.hidden ? n.clear() : n.set())
    })
}(document, jQuery),
function(t, e) {
    "use strict";
    var i = function() {
        for (var e = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ], i = {}, n = 0; n < e.length; n++) {
            var o = e[n];
            if (o && o[1] in t) {
                for (var s = 0; s < o.length; s++) i[e[0][s]] = o[s];
                return i
            }
        }
        return !1
    }();
    if (i) {
        var n = {
            request: function(e) {
                (e = e || t.documentElement)[i.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                t[i.exitFullscreen]()
            },
            toggle: function(e) {
                e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
            },
            isFullscreen: function() {
                return Boolean(t[i.fullscreenElement])
            },
            enabled: function() {
                return Boolean(t[i.fullscreenEnabled])
            }
        };
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
            },
            fullScreen: {
                autoStart: !1
            }
        }), e(t).on(i.fullscreenchange, function() {
            var t = n.isFullscreen(),
                i = e.fancybox.getInstance();
            i && (i.current && "image" === i.current.type && i.isAnimating && (i.isAnimating = !1, i.update(!0, !0, 0), i.isComplete || i.complete()), i.trigger("onFullscreenChange", t), i.$refs.container.toggleClass("fancybox-is-fullscreen", t), i.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
        })
    }
    e(t).on({
        "onInit.fb": function(t, e) {
            i ? e && e.group[e.currIndex].opts.fullScreen ? (e.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                t.stopPropagation(), t.preventDefault(), n.toggle()
            }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && n.request(), e.FullScreen = n) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
        },
        "afterKeydown.fb": function(t, e, i, n, o) {
            e && e.FullScreen && 70 === o && (n.preventDefault(), e.FullScreen.toggle())
        },
        "beforeClose.fb": function(t, e) {
            e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && n.exit()
        }
    })
}(document, jQuery),
function(t, e) {
    "use strict";
    var i = "fancybox-thumbs";
    e.fancybox.defaults = e.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, e.fancybox.defaults);
    var n = function(t) {
        this.init(t)
    };
    e.extend(n.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(t) {
            var e = this,
                i = t.group,
                n = 0;
            e.instance = t, e.opts = i[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
            for (var o = 0, s = i.length; o < s && (i[o].thumb && n++, !(n > 1)); o++);
            n > 1 && e.opts ? (e.$button.removeAttr("style").on("click", function() {
                e.toggle()
            }), e.isActive = !0) : e.$button.hide()
        },
        create: function() {
            var t, n = this,
                o = n.instance,
                s = n.opts.parentEl,
                r = [];
            n.$grid || (n.$grid = e('<div class="' + i + " " + i + "-" + n.opts.axis + '"></div>').appendTo(o.$refs.container.find(s).addBack().filter(s)), n.$grid.on("click", "a", function() {
                o.jumpTo(e(this).attr("data-index"))
            })), n.$list || (n.$list = e('<div class="' + i + '__list">').appendTo(n.$grid)), e.each(o.group, function(e, i) {
                (t = i.thumb) || "image" !== i.type || (t = i.src), r.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
            }), n.$list[0].innerHTML = r.join(""), "x" === n.opts.axis && n.$list.width(parseInt(n.$grid.css("padding-right"), 10) + o.group.length * n.$list.children().eq(0).outerWidth(!0))
        },
        focus: function(t) {
            var e, i, n = this,
                o = n.$list,
                s = n.$grid;
            n.instance.current && (i = (e = o.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + n.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === n.opts.axis && (i.top < 0 || i.top > o.height() - e.outerHeight()) ? o.stop().animate({
                scrollTop: o.scrollTop() + i.top
            }, t) : "x" === n.opts.axis && (i.left < s.scrollLeft() || i.left > s.scrollLeft() + (s.width() - e.outerWidth())) && o.parent().stop().animate({
                scrollLeft: i.left
            }, t))
        },
        update: function() {
            var t = this;
            t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update()
        },
        hide: function() {
            this.isVisible = !1, this.update()
        },
        show: function() {
            this.isVisible = !0, this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible, this.update()
        }
    }), e(t).on({
        "onInit.fb": function(t, e) {
            var i;
            e && !e.Thumbs && ((i = new n(e)).isActive && !0 === i.opts.autoStart && i.show())
        },
        "beforeShow.fb": function(t, e, i, n) {
            var o = e && e.Thumbs;
            o && o.isVisible && o.focus(n ? 0 : 250)
        },
        "afterKeydown.fb": function(t, e, i, n, o) {
            var s = e && e.Thumbs;
            s && s.isActive && 71 === o && (n.preventDefault(), s.toggle())
        },
        "beforeClose.fb": function(t, e) {
            var i = e && e.Thumbs;
            i && i.isVisible && !1 !== i.opts.hideOnClose && i.$grid.hide()
        }
    })
}(document, jQuery),
function(t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
        },
        share: {
            url: function(t, e) {
                return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
    }), e(t).on("click", "[data-fancybox-share]", function() {
        var t, i, n = e.fancybox.getInstance(),
            o = n.current || null;
        o && ("function" === e.type(o.opts.share.url) && (t = o.opts.share.url.apply(o, [n, o])), i = o.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === o.type ? encodeURIComponent(o.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, function(t) {
            var e = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            };
            return String(t).replace(/[&<>"'`=\/]/g, function(t) {
                return e[t]
            })
        }(t)).replace(/\{\{descr\}\}/g, n.$caption ? encodeURIComponent(n.$caption.text()) : ""), e.fancybox.open({
            src: n.translate(n, i),
            type: "html",
            opts: {
                touch: !1,
                animationEffect: !1,
                afterLoad: function(t, e) {
                    n.$refs.container.one("beforeClose.fb", function() {
                        t.close(null, 0)
                    }), e.$content.find(".fancybox-share__button").click(function() {
                        return window.open(this.href, "Share", "width=550, height=450"), !1
                    })
                },
                mobile: {
                    autoFocus: !1
                }
            }
        }))
    })
}(document, jQuery),
function(t, e, i) {
    "use strict";

    function n() {
        var e = t.location.hash.substr(1),
            i = e.split("-"),
            n = i.length > 1 && /^\+?\d+$/.test(i[i.length - 1]) && parseInt(i.pop(-1), 10) || 1;
        return {
            hash: e,
            index: n < 1 ? 1 : n,
            gallery: i.join("-")
        }
    }

    function o(t) {
        "" !== t.gallery && i("[data-fancybox='" + i.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
    }

    function s(t) {
        var e, i;
        return !!t && ("" !== (i = (e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && i)
    }
    i.escapeSelector || (i.escapeSelector = function(t) {
        return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(t, e) {
            return e ? "\0" === t ? "ï¿½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        })
    }), i(function() {
        !1 !== i.fancybox.defaults.hash && (i(e).on({
            "onInit.fb": function(t, e) {
                var i, o;
                !1 !== e.group[e.currIndex].opts.hash && (i = n(), (o = s(e)) && i.gallery && o == i.gallery && (e.currIndex = i.index - 1))
            },
            "beforeShow.fb": function(i, n, o, r) {
                var a;
                o && !1 !== o.opts.hash && (a = s(n)) && (n.currentHash = a + (n.group.length > 1 ? "-" + (o.index + 1) : ""), t.location.hash !== "#" + n.currentHash && (r && !n.origHash && (n.origHash = t.location.hash), n.hashTimer && clearTimeout(n.hashTimer), n.hashTimer = setTimeout(function() {
                    "replaceState" in t.history ? (t.history[r ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + n.currentHash), r && (n.hasCreatedHistory = !0)) : t.location.hash = n.currentHash, n.hashTimer = null
                }, 300)))
            },
            "beforeClose.fb": function(i, n, o) {
                o && !1 !== o.opts.hash && (clearTimeout(n.hashTimer), n.currentHash && n.hasCreatedHistory ? t.history.back() : n.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (n.origHash || "")) : t.location.hash = n.origHash), n.currentHash = null)
            }
        }), i(t).on("hashchange.fb", function() {
            var t = n(),
                e = null;
            i.each(i(".fancybox-container").get().reverse(), function(t, n) {
                var o = i(n).data("FancyBox");
                if (o && o.currentHash) return e = o, !1
            }), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && o(t)
        }), setTimeout(function() {
            i.fancybox.getInstance() || o(n())
        }, 50))
    })
}(window, document, jQuery),
function(t, e) {
    "use strict";
    var i = (new Date).getTime();
    e(t).on({
        "onInit.fb": function(t, e, n) {
            e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(t) {
                var n = e.current,
                    o = (new Date).getTime();
                e.group.length < 2 || !1 === n.opts.wheel || "auto" === n.opts.wheel && "image" !== n.type || (t.preventDefault(), t.stopPropagation(), n.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, o - i < 250 || (i = o, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}(document, jQuery);