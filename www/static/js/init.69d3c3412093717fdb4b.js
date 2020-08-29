webpackJsonp([31], {
    "6zzU": function(t, e, n) {
        "use strict";
        var i = n("mvHQ"),
            o = n.n(i),
            r = n("Xxa5"),
            a = n.n(r),
            u = n("exGp"),
            c = n.n(u),
            s = n("W4G+"),
            p = n("Av7u"),
            l = n.n(p);
        e.a = {
            goBack: function(t) {
                t.$router.back(-1)
            },
            detectDevice: function() {
                var t = function() {
                    var t = navigator.userAgent;
                    navigator.appVersion;
                    return {
                        trident: t.indexOf("Trident") > -1,
                        presto: t.indexOf("Presto") > -1,
                        webKit: t.indexOf("AppleWebKit") > -1,
                        gecko: t.indexOf("Gecko") > -1 && -1 == t.indexOf("KHTML"),
                        mobile: !!t.match(/AppleWebKit.*Mobile.*/),
                        ios: !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                        android: t.indexOf("Android") > -1 || t.indexOf("Linux") > -1,
                        iPhone: t.indexOf("iPhone") > -1,
                        iPad: t.indexOf("iPad") > -1,
                        webApp: -1 == t.indexOf("Safari")
                    }
                }();
                (navigator.browserLanguage || navigator.language).toLowerCase();
                return t.mobile || t.ios || t.android || t.iPhone || t.iPad ? t.ios ? "ios" : "android" : "notmobile"
            },
            setInitLog: function(t) {
                var e = this;
                return c()(a.a.mark(function n() {
                    return a.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Object(s.b)(t);
                            case 2:
                                e.sent.data.code;
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }, n, e)
                }))()
            },
            setCookie: function(t, e, n) {
                if (window.localStorage) {
                    if (null != n && 0 != n) {
                        var i = null;
                        try {
                            i = JSON.parse(e)
                        } catch (t) {
                            i = {
                                defaultname: e
                            }
                        }
                        return (r = new Date).setTime(r.getTime() + 24 * n * 3600 * 1e3), i.expires = r.getTime(), void window.localStorage.setItem(t, o()(i))
                    }
                    window.localStorage.setItem(t, e)
                } else {
                    var r;
                    if (n < 0) return (r = new Date).setTime(r.getTime() - 1e3), void(document.cookie = t + "=" + escape(e) + ";expires=" + r.toUTCString());
                    if (n > 0)(r = new Date).setTime(r.getTime() + 24 * n * 3600 * 1e3), document.cookie = t + "=" + escape(e) + ";expires=" + r.toUTCString() + ";path=/";
                    else document.cookie = t + "=" + escape(e) + ";path=/"
                }
            },
            getCookie: function(t) {
                if (window.localStorage) {
                    var e = window.localStorage.getItem(t);
                    if (null != e && "" != e) try {
                        var n = JSON.parse(e),
                            i = n.expires;
                        return null != i && "" != i && (new Date).getTime() - i > 0 ? (window.localStorage.removeItem(t), "") : null == n.defaultname || "" == n.defaultname ? e : n.defaultname
                    } catch (t) {}
                    return e
                }
                if (document.cookie.length > 0) {
                    var o = document.cookie,
                        r = o.indexOf(t);
                    if (-1 == r) return "";
                    var a = o.indexOf(";", r);
                    return (a = -1) && (a = o.length), unescape(o.substring(r + t.length + 1, a))
                }
                return ""
            },
            Encrypt: {
                key: "a2ffa5c9be07488bbb04a3a47d3c5f6a",
                iv: "64175472480004614961023454661220",
                nonce: null,
                getCookie: function() {
                    if (window.localStorage) {
                        var t = window.localStorage.getItem(name);
                        if (null != t && "" != t) try {
                            var e = JSON.parse(t),
                                n = e.expires;
                            return null != n && "" != n && (new Date).getTime() - n > 0 ? (window.localStorage.removeItem(name), "") : null == e.defaultname || "" == e.defaultname ? t : e.defaultname
                        } catch (t) {}
                        return t
                    }
                    if (document.cookie.length > 0) {
                        var i = document.cookie,
                            o = i.indexOf(name);
                        if (-1 == o) return "";
                        var r = i.indexOf(";", o);
                        return (r = -1) && (r = i.length), unescape(i.substring(o + name.length + 1, r))
                    }
                    return ""
                },
                init: function() {
                    var t = this.nonceCreat();
                    return this.nonce = t, this.nonce
                },
                nonceCreat: function() {
                    return [0, this.getCookie("mac") || "", Math.floor((new Date).getTime() / 1e3), Math.floor(1e4 * Math.random())].join("_")
                },
                oldPwd: function(t) {
                    return l.a.SHA1(this.nonce + l.a.SHA1(t + this.key).toString()).toString()
                },
                newPwd: function(t, e) {
                    var n = l.a.SHA1(t + this.key).toString();
                    n = (n = l.a.enc.Hex.parse(n).toString()).substr(0, 32), n = l.a.enc.Hex.parse(n);
                    var i = l.a.SHA1(e + this.key).toString(),
                        o = l.a.enc.Hex.parse(this.iv);
                    return l.a.AES.encrypt(i, n, {
                        iv: o,
                        mode: l.a.mode.CBC,
                        padding: l.a.pad.Pkcs7
                    }).toString()
                }
            },
            formatSsidName: function(t) {
                var e = t.split("_");
                3 == e.length && ("Xiaomi" != e[0] && "Redmi" != e[0] || parseInt("FFFF", 16) - parseInt(e[1], 16) == parseInt(e[2], 16) && (t = e[0] + "_" + e[1]));
                return t
            },
            pint: function(t) {
                return parseInt(t, 10)
            },
            secondToHour: function(t) {
                var e = this.pint(t / 3600),
                    n = this.pint(60 * (parseFloat(t / 3600) - e));
                return e + " ч " + n + " м " + (this.pint(t) - 3600 * e - 60 * n) + "с "
            },
            secondToDate: function(t) {
                var e, n = parseFloat(t);
                return null !== n && "" !== n && (n > 60 && n < 3600 ? n = this.pint(n / 60) + " м " + this.pint(60 * (parseFloat(n / 60) - this.pint(n / 60, 10))) + " с " : n >= 3600 && n < 86400 ? n = this.secondToHour(n) : n >= 86400 ? (n -= 3600 * (e = this.pint(n / 86400)) * 24, n = e + " д " + this.secondToHour(n)) : n = this.pint(n) + " ч "), n
            }
        }
    },
    C6j0: function(t, e) {},
    JzCU: function(t, e, n) {
        "use strict";
        var i = n("C6j0"),
            o = n.n(i),
            r = n("VU/8")(o.a, null, !1, null, null, null);
        e.default = r.exports
    },
    OGCp: function(t, e) {},
    R1Gk: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n("7+uW"),
            o = {
                render: function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        attrs: {
                            id: "app"
                        }
                    }, [e("router-view")], 1)
                },
                staticRenderFns: []
            };
        var r = n("VU/8")({
                name: "App"
            }, o, !1, function(t) {
                n("OGCp")
            }, null, null).exports,
            a = n("/ocq");
        i.a.use(a.a);
        var u = new a.a({
                routes: [{
                    path: "/",
                    redirect: "/home"
                }, {
                    path: "/dhcp",
                    name: "timeTable",
                    component: function(t) {
                        return n.e(0).then(function() {
                            var e = [n("r9pp")];
                            t.apply(null, e)
                        }.bind(this)).catch(n.oe)
                    }
                }, {
                    path: "/cannot_find_mode",
                    name: "cannot_find_mode",
                    component: function(t) {
                        return n.e(16).then(function() {
                            var e = [n("DdHY")];
                            t.apply(null, e)
                        }.bind(this)).catch(n.oe)
                    }
                }, {
                    path: "/wired",
                    name: "wired",
                    component: function(t) {
                        return n.e(6).then(function() {
                            var e = [n("qbeB")];
                            t.apply(null, e)
                        }.bind(this)).catch(n.oe)
                    }
                }, {
                    path: "/wireless",
                    name: "wireless",
                    component: function(t) {
                        return n.e(2).then(function() {
                            var e = [n("TUNY")];
                            t.apply(null, e)
                        }.bind(this)).catch(n.oe)
                    }
                }, {
                    path: "/wifi_complete",
                    name: "wifi_complete",
                    component: function(t) {
                        return n.e(20).then(function() {
                            var e = [n("u/6M")];
                            t.apply(null, e)
                        }.bind(this)).catch(n.oe)
                    }
                }, {
                    path: "/static",
                    name: "staic",
                    component: function(t) {
                        return n.e(7).then(function() {
                            var e = [n("Nc/T")];
                            t.apply(null, e)
                        }.bind(this)).catch(n.oe)
                    }
                }, {
                    path: "/error1",
                    name: "error1",
                    component: function(t) {
                        return n.e(9).then(function() {
                            var e = [n("vQ0D")];
                            t.apply(null, e)
                        }.bind(this)).catch(n.oe)
                    }
                }, {
                    path: "/home",
                    name: "home",
                    component: function(t) {
                        return n.e(17).then(function() {
                            var e = [n("fHeX")];
                            t.apply(null, e)
                        }.bind(this)).catch(n.oe)
                    }
                }, {
                    path: "/error2",
                    name: "error2",
                    component: function(t) {
                        return n.e(15).then(function() {
                            var e = [n("kDQt")];
                            t.apply(null, e)
                        }.bind(this)).catch(n.oe)
                    }
                }, {
                    path: "/guide",
                    name: "guide",
                    component: function(t) {
                        return n.e(4).then(function() {
                            var e = [n("DbKA")];
                            t.apply(null, e)
                        }.bind(this)).catch(n.oe)
                    }
                }, {
                    path: "/operators",
                    name: "operators",
                    component: function(t) {
                        return n.e(27).then(function() {
                            var e = [n("M1eb")];
                            t.apply(null, e)
                        }.bind(this)).catch(n.oe)
                    }
                }, {
                    path: "/get_from_old_router",
                    name: "get_from_old_router",
                    component: function(t) {
                        return n.e(10).then(function() {
                            var e = [n("Q74/")];
                            t.apply(null, e)
                        }.bind(this)).catch(n.oe)
                    }
                }, {
                    path: "/download",
                    name: "download",
                    component: function(t) {
                        return n.e(19).then(function() {
                            var e = [n("mQzm")];
                            t.apply(null, e)
                        }.bind(this)).catch(n.oe)
                    }
                }, {
                    path: "/agreement2",
                    name: "agreement2",
                    component: function(t) {
                        return n.e(28).then(function() {
                            var e = [n("2ejs")];
                            t.apply(null, e)
                        }.bind(this)).catch(n.oe)
                    }
                }, {
                    path: "/privacy2",
                    name: "privacy2",
                    component: function(t) {
                        return n.e(26).then(function() {
                            var e = [n("1auw")];
                            t.apply(null, e)
                        }.bind(this)).catch(n.oe)
                    }
                }]
            }),
            c = n("gfkZ"),
            s = n("6zzU"),
            p = n("JzCU"),
            l = (n("j1ja"), n("bw1o")),
            f = n.n(l);
        i.a.use(f.a, {
            validators: {
                ipaddr: function(t, e, n) {
                    return /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/.test(t)
                },
                wifipassword: function(t, e, n) {
                    var i = !/[\u4e00-\u9fa5]/.test(t);
                    return /^[^｀（；＄）｛＼｝]{1,}$/.test(t) & i
                },
                checklength: function(t, e, n) {
                    for (var i = 0, o = 0; o < t.length; o++)
                        if (/[\u4e00-\u9fa5]/.test(t[o]) ? i += 3 : i++, i > 28) return t = t.substr(0, o), !1;
                    return !0
                },
                filterspecialchar: function(t, e, n) {
                    return /^.{1,}$/.test(t)
                }
            }
        }), i.a.use(c.a), i.a.prototype.GLOBAL = p.default, i.a.config.productionTip = !1, i.a.prototype.common = s.a, console.log(i.a.prototype.axios), i.a.directive("focus", {
            inserted: function(t) {
                t.focus()
            }
        }), i.a.directive("filterSpecialChar", {
            update: function(t, e, n) {
                e.value;
                var i = e.modifiers;
                try {
                    if (!t.value) return !1;
                    t.value = t.value.replace(/[`;|$&\\{}]/g, ""), t.dispatchEvent(new Event(i.lazy ? "change" : "input"))
                } catch (t) {}
            }
        }), new i.a({
            el: "#app",
            router: u,
            components: {
                App: r
            },
            template: "<App/>"
        })
    },
    "W4G+": function(t, e, n) {
        "use strict";
        var i = n("//Fk"),
            o = n.n(i),
            r = n("mtWM"),
            a = n.n(r),
            u = n("mw3O"),
            c = n.n(u),
            s = n("6zzU");
        console.log("production");
        var p = "http://" + window.location.host + "/cgi-bin/luci";

        function l(t, e) {
            var n = t.split("/")[3];
            return new o.a(function(i, o) {
                "login" == n && (a.a.defaults.baseURL = p), s.a.getCookie("token") && "login" != n && (a.a.defaults.baseURL = "http://" + window.location.host + "/cgi-bin/luci/;stok=" + s.a.getCookie("token")), a.a.get(t, {
                    params: e
                }).then(function(t) {
                    i(t)
                }).catch(function(t) {
                    o(t)
                })
            })
        }

        function f(t, e) {
            var n = t.split("/")[3];
            return "login" == n && (a.a.defaults.baseURL = p), s.a.getCookie("token") && "login" != n && (a.a.defaults.baseURL = "http://" + window.location.host + "/cgi-bin/luci/;stok=" + s.a.getCookie("token")), new o.a(function(n, i) {
                a.a.post(t, c.a.stringify(e)).then(function(t) {
                    n(t)
                }).catch(function(t) {
                    i(t)
                })
            })
        }
        a.a.defaults.baseURL = p, a.a.defaults.timeout = 5e4, a.a.interceptors.request.use(function(t) {
            return console.log("request"), t
        }, function(t) {
            return setTimeout(function() {
                console.log("requst error")
            }, 3e3), o.a.reject(t)
        });
        var m = 0;
        a.a.interceptors.response.use(function(t) {
            var e = t.data,
                n = window.location.href.split("#");
            return 401 == e.code && "Invalid token" == e.msg && ++m <= 1 && confirm("Сессия истекла, пожалуйста выполните вход.") && (window.location.href = n[0]), t
        }, function(t) {
            return o.a.reject(t)
        }), n.d(e, "b", function() {
            return d
        });
        var d = function(t) {
            return l("/api/misystem/set_log", t)
        };
        e.a = {
            get: l,
            post: f,
            getRouterInfo: function(t) {
                return l("/api/misystem/router_info", t)
            },
            getLoginInfo: function(t) {
                return l("/api/xqsystem/login", t)
            },
            getLoginDesp: function(t) {
                return f("/api/xqsystem/login", t)
            },
            setPrivacy: function(t) {
                return l("/api/xqsystem/set_privacy_new", t)
            },
            getWanType: function(t) {
                return l("/api/xqnetwork/check_wan_type", t)
            },
            getPppoeStatus: function(t) {
                return l("/api/misystem/pppoe_status", t)
            },
            setRouterNormal: function(t) {
                return f("/api/misystem/set_router_normal", t)
            },
            getPppoeCatch: function(t) {
                return l("/api/xqnetwork/pppoe_catch", t)
            },
            postRouterLanap: function(t) {
                return f("/api/misystem/set_router_lanap_init", t)
            },
            getWifiList: function(t) {
                return l("/api/xqnetwork/wifi_list", t)
            },
            setLog: d,
            postWireless: function(t) {
                return f("/api/misystem/set_router_wifiap_init", t)
            },
            postWirelessSet: function(t) {
                return f("/api/xqnetwork/set_wifi_ap", t)
            },
            getWanLink: function(t) {
                return l("/api/xqnetwork/wan_link", t)
            },
            setDHCP: function(t) {
                return f("/api/misystem/set_router_normal", t)
            },
            setWanNew: function(t) {
                return f("/api/xqnetwork/set_wan_new", t)
            },
            getConfigResult: function(t) {
                return l("/api/misystem/get_config_result", t)
            },
            getIPconflict: function(t) {
                return f("/api/misystem/check_ip_conflict", t)
            },
            upgrade: function(t) {
                return l("/api/misystem/vas_switch", t)
            },
            getIsAP: function(t) {
                return l("/api/xqnetwork/get_is_ap", t)
            },
            getRouterStatus: function(t) {
                return l("/api/misystem/status", t)
            },
            getNetPppoeStatus: function(t) {
                return l("/api/xqnetwork/pppoe_status", t)
            },
            getNettb: function(t) {
                return function(t) {
                    if (t.url) return new o.a(function(e, n) {
                        window._jsonCallBack = function(t) {
                            clearTimeout(i.timer), e(t)
                        };
                        var i = document.createElement("script");
                        i.type = "text/javascript", i.src = "" + t.url, document.getElementsByTagName("head")[0].appendChild(i), i.timer = setTimeout(function() {
                            document.getElementsByTagName("head")[0].removeChild(i), clearTimeout(i.timer), window._jsonCallBack = null, t.fail && t.fail()
                        }, 1e3)
                    });
                    console.error("Требуется хотя бы 1 параметр Axios.JSONP!")
                }(t)
            },
            netDiagnoseStart: function(t) {
                return l("/api/misystem/net_diagnose_start", t)
            },
            netDiagnoseResult: function(t) {
                return l("/api/misystem/net_diagnose_result", t)
            },
            newDhcp: function(t) {
                return f("/api/xqnetwork/set_wan", t)
            },
            wifiDetailAll: function(t) {
                return l("/api/xqnetwork/wifi_detail_all", t)
            },
            postWifi: function(t) {
                return f("/api/xqnetwork/set_wifi", t)
            },
            postWifiTwo: function(t) {
                return f("/api/xqnetwork/set_all_wifi", t)
            },
            postWifiTwoTest: function(t) {
                return f("/api/xqnetwork/wifi_detail_all_two", t)
            },
            getConflictIp: function(t) {
                return l("/api/misystem/messages", t)
            },
            postConflictReq: function(t) {
                return f("/api/misystem/r_ip_conflict", t)
            },
            getWifiStatus: function(t) {
                return f("/api/misystem/get_netwan_mode", t)
            }
        }
    },
    gfkZ: function(t, e, n) {
        "use strict";
        var i = n("HSQo"),
            o = n.n(i),
            r = n("W4G+");
        e.a = function t(e) {
            t.installed || (t.installed = !0, o()(e.prototype, {
                axios: {
                    get: function() {
                        return r.a
                    }
                }
            }))
        }
    }
}, ["R1Gk"]);