webpackJsonp([32], {
    "6zzU": function(t, e, n) {
        "use strict";
        var o = n("mvHQ"),
            i = n.n(o),
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
                        var o = null;
                        try {
                            o = JSON.parse(e)
                        } catch (t) {
                            o = {
                                defaultname: e
                            }
                        }
                        return (r = new Date).setTime(r.getTime() + 24 * n * 3600 * 1e3), o.expires = r.getTime(), void window.localStorage.setItem(t, i()(o))
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
                            o = n.expires;
                        return null != o && "" != o && (new Date).getTime() - o > 0 ? (window.localStorage.removeItem(t), "") : null == n.defaultname || "" == n.defaultname ? e : n.defaultname
                    } catch (t) {}
                    return e
                }
                if (document.cookie.length > 0) {
                    var i = document.cookie,
                        r = i.indexOf(t);
                    if (-1 == r) return "";
                    var a = i.indexOf(";", r);
                    return (a = -1) && (a = i.length), unescape(i.substring(r + t.length + 1, a))
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
                        var o = document.cookie,
                            i = o.indexOf(name);
                        if (-1 == i) return "";
                        var r = o.indexOf(";", i);
                        return (r = -1) && (r = o.length), unescape(o.substring(i + name.length + 1, r))
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
                    var o = l.a.SHA1(e + this.key).toString(),
                        i = l.a.enc.Hex.parse(this.iv);
                    return l.a.AES.encrypt(o, n, {
                        iv: i,
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
                return e + "小时" + n + "分" + (this.pint(t) - 3600 * e - 60 * n) + "秒"
            },
            secondToDate: function(t) {
                var e, n = parseFloat(t);
                return null !== n && "" !== n && (n > 60 && n < 3600 ? n = this.pint(n / 60) + "分" + this.pint(60 * (parseFloat(n / 60) - this.pint(n / 60, 10))) + "秒" : n >= 3600 && n < 86400 ? n = this.secondToHour(n) : n >= 86400 ? (n -= 3600 * (e = this.pint(n / 86400)) * 24, n = e + "天" + this.secondToHour(n)) : n = this.pint(n) + "秒"), n
            }
        }
    },
    "8d2M": function(t, e) {},
    C6j0: function(t, e) {},
    JzCU: function(t, e, n) {
        "use strict";
        var o = n("C6j0"),
            i = n.n(o),
            r = n("VU/8")(i.a, null, !1, null, null, null);
        e.default = r.exports
    },
    MhDc: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n("7+uW"),
            i = {
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
            }, i, !1, function(t) {
                n("8d2M")
            }, null, null).exports,
            a = n("/ocq");
        o.a.use(a.a);
        var u = new a.a({
            routes: [{
                path: "/",
                redirect: "/login"
            }, {
                path: "/home",
                name: "home",
                component: function(t) {
                    return n.e(21).then(function() {
                        var e = [n("gpVb")];
                        t.apply(null, e)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/choose_inter",
                name: "chooseInter",
                component: function(t) {
                    return n.e(25).then(function() {
                        var e = [n("aQEI")];
                        t.apply(null, e)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pppoe",
                name: "timeTable",
                component: function(t) {
                    return n.e(1).then(function() {
                        var e = [n("Rc8y")];
                        t.apply(null, e)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/dhcp",
                name: "timeTable",
                component: function(t) {
                    return n.e(8).then(function() {
                        var e = [n("Ie3l")];
                        t.apply(null, e)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/set_wifi",
                name: "timeTable",
                component: function(t) {
                    return n.e(5).then(function() {
                        var e = [n("5uqA")];
                        t.apply(null, e)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/operator",
                name: "operator",
                component: function(t) {
                    return n.e(23).then(function() {
                        var e = [n("bEpY")];
                        t.apply(null, e)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/repeater",
                name: "repeater",
                component: function(t) {
                    return n.e(3).then(function() {
                        var e = [n("amZk")];
                        t.apply(null, e)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/forget",
                name: "forget",
                component: function(t) {
                    return n.e(29).then(function() {
                        var e = [n("YCHQ")];
                        t.apply(null, e)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/login",
                name: "login",
                component: function(t) {
                    return n.e(11).then(function() {
                        var e = [n("gjGO")];
                        t.apply(null, e)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/diagnose_desp",
                name: "diagnose_desp",
                component: function(t) {
                    return n.e(14).then(function() {
                        var e = [n("PqVX")];
                        t.apply(null, e)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/status",
                name: "status",
                component: function(t) {
                    return n.e(12).then(function() {
                        var e = [n("t6a8")];
                        t.apply(null, e)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/wan_error",
                name: "wan_error",
                component: function(t) {
                    return n.e(18).then(function() {
                        var e = [n("0QSP")];
                        t.apply(null, e)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/network_error",
                name: "network_error",
                component: function(t) {
                    return n.e(13).then(function() {
                        var e = [n("h1ai")];
                        t.apply(null, e)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/operators",
                name: "operators",
                component: function(t) {
                    return n.e(22).then(function() {
                        var e = [n("W9lk")];
                        t.apply(null, e)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/help",
                name: "help",
                component: function(t) {
                    return n.e(24).then(function() {
                        var e = [n("olkT")];
                        t.apply(null, e)
                    }.bind(this)).catch(n.oe)
                }
            }]
        });
        u.beforeEach(function(t, e, n) {
            "/set_wifi" == t.path ? (document.querySelector("body").style.backgroundColor = "#efefef", document.getElementById("app").style.height = "auto") : (document.querySelector("body").style.backgroundColor = "#1a1c2a", document.getElementById("app").style.height = "100%"), n()
        });
        var c = u,
            s = n("gfkZ"),
            p = n("6zzU"),
            l = n("JzCU"),
            f = (n("j1ja"), n("bw1o")),
            d = n.n(f);
        o.a.use(d.a, {
            validators: {
                ipaddr: function(t, e, n) {
                    return /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/.test(t)
                },
                wifipassword: function(t, e, n) {
                    var o = !/[\u4e00-\u9fa5]/.test(t);
                    return /^[^｀（；＄）｛＼｝]{1,}$/.test(t) & o
                },
                checklength: function(t, e, n) {
                    for (var o = 0, i = 0; i < t.length; i++)
                        if (/[\u4e00-\u9fa5]/.test(t[i]) ? o += 3 : o++, o > 28) return t = t.substr(0, i), !1;
                    return !0
                },
                filterspecialchar: function(t, e, n) {
                    return /^.{1,}$/.test(t)
                },
                checkip: function(t, e, n) {
                    return !!t && /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(t)
                }
            }
        }), o.a.use(s.a), o.a.prototype.GLOBAL = l.default, o.a.config.productionTip = !1, o.a.prototype.common = p.a, console.log(o.a.prototype.axios), o.a.directive("focus", {
            inserted: function(t) {
                t.focus()
            }
        }), new o.a({
            el: "#app",
            router: c,
            components: {
                App: r
            },
            template: "<App/>"
        })
    },
    "W4G+": function(t, e, n) {
        "use strict";
        var o = n("//Fk"),
            i = n.n(o),
            r = n("mtWM"),
            a = n.n(r),
            u = n("mw3O"),
            c = n.n(u),
            s = n("6zzU");
        console.log("production");
        var p = "http://" + window.location.host + "/cgi-bin/luci";

        function l(t, e) {
            var n = t.split("/")[3];
            return new i.a(function(o, i) {
                "login" == n && (a.a.defaults.baseURL = p), s.a.getCookie("token") && "login" != n && (a.a.defaults.baseURL = "http://" + window.location.host + "/cgi-bin/luci/;stok=" + s.a.getCookie("token")), a.a.get(t, {
                    params: e
                }).then(function(t) {
                    o(t)
                }).catch(function(t) {
                    i(t)
                })
            })
        }

        function f(t, e) {
            var n = t.split("/")[3];
            return "login" == n && (a.a.defaults.baseURL = p), s.a.getCookie("token") && "login" != n && (a.a.defaults.baseURL = "http://" + window.location.host + "/cgi-bin/luci/;stok=" + s.a.getCookie("token")), new i.a(function(n, o) {
                a.a.post(t, c.a.stringify(e)).then(function(t) {
                    n(t)
                }).catch(function(t) {
                    o(t)
                })
            })
        }
        a.a.defaults.baseURL = p, a.a.defaults.timeout = 5e4, a.a.interceptors.request.use(function(t) {
            return console.log("request"), t
        }, function(t) {
            return setTimeout(function() {
                console.log("requst error")
            }, 3e3), i.a.reject(t)
        });
        var d = 0;
        a.a.interceptors.response.use(function(t) {
            var e = t.data,
                n = window.location.href.split("#");
            return 401 == e.code && "Invalid token" == e.msg && ++d <= 1 && confirm("登录状态失效，请您重新登录") && (window.location.href = n[0]), t
        }, function(t) {
            return i.a.reject(t)
        }), n.d(e, "b", function() {
            return m
        });
        var m = function(t) {
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
            setLog: m,
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
                    if (t.url) return new i.a(function(e, n) {
                        window._jsonCallBack = function(t) {
                            clearTimeout(o.timer), e(t)
                        };
                        var o = document.createElement("script");
                        o.type = "text/javascript", o.src = "" + t.url, document.getElementsByTagName("head")[0].appendChild(o), o.timer = setTimeout(function() {
                            document.getElementsByTagName("head")[0].removeChild(o), clearTimeout(o.timer), window._jsonCallBack = null, t.fail && t.fail()
                        }, 1e3)
                    });
                    console.error("Axios.JSONP 至少需要一个url参数!")
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
        var o = n("HSQo"),
            i = n.n(o),
            r = n("W4G+");
        e.a = function t(e) {
            t.installed || (t.installed = !0, i()(e.prototype, {
                axios: {
                    get: function() {
                        return r.a
                    }
                }
            }))
        }
    }
}, ["MhDc"]);