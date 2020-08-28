webpackJsonp([17], {
    dTiF: function(t, e) {},
    fHeX: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = a("Xxa5"),
            o = a.n(n),
            s = a("exGp"),
            r = a.n(s),
            i = a("n8t0"),
            c = a("hNqL"),
            d = {
                name: "home",
                data: function() {
                    return {
                        userProtocol: !0,
                        planProtocal: !0,
                        disabledTep: !1,
                        routerData: {}
                    }
                },
                created: function() {
                    this.disabled = this.userProtocol ? 0 : 1, this.routerInfo(), this.common.setInitLog({
                        type: 0,
                        step: "init_web_hello"
                    });
                    var t = this;
                    "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style && window.addEventListener("hashchange", function() {
                        var e = window.location.hash.slice(1);
                        t.$route.path !== e && t.$router.replace(e)
                    }, !1)
                },
                components: {
                    CheckBox: i.a,
                    Toast: c.a
                },
                methods: {
                    changeUserProtocol: function() {
                        this.disabledTep = this.userProtocol ? 0 : 1
                    },
                    start: function() {
                        this.disabledTep || this.loginInfo()
                    },
                    loginInfo: function() {
                        var t = this;
                        return r()(o.a.mark(function e() {
                            var a, n, s, r;
                            return o.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = t.common.Encrypt.init(), n = t.common.Encrypt.oldPwd("admin"), s = {
                                            username: "admin",
                                            logtype: 2,
                                            nonce: a,
                                            password: n,
                                            init: 1,
                                            privacy: t.planProtocal ? 1 : 0
                                        }, e.next = 5, t.axios.getLoginInfo(s);
                                    case 5:
                                        (r = e.sent) && r.data && 0 == r.data.code ? (t.common.setCookie("token", r.data.token, 1 / 48), t.$router.push({
                                            path: "/guide"
                                        })) : t.$refs.tip.showTips(r.data.msg || "Произошла неизвестная ошибка, повторите попытку позже");
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, t)
                        }))()
                    },
                    routerInfo: function() {
                        var t = this;
                        return r()(o.a.mark(function e() {
                            var a, n;
                            return o.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.axios.getRouterInfo();
                                    case 2:
                                        a = e.sent, t.routerData = a.data, t.GLOBAL.hardware = a.data.hardware, t.GLOBAL.routerName = t.common.formatSsidName(a.data.name), t.GLOBAL.mac = a.data.mac, t.common.setCookie("mac", a.data.mac, 1 / 48), t.common.setCookie("hardware", a.data.hardware, 1 / 48), n = t.common.formatSsidName(a.data.name), t.common.setCookie("ssid_name", n, 1 / 48);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, t)
                        }))()
                    },
                    agreement: function() {
                        this.$router.push({
                            path: "/agreement2"
                        })
                    },
                    privacy: function() {
                        this.$router.push({
                            path: "/privacy2"
                        })
                    }
                }
            },
            l = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "container"
                    }, [a("div", {
                        staticClass: "title"
                    }, [a("svg", {
                        attrs: {
                            width: "540px",
                            height: "239px",
                            viewBox: "0 0 540 239",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink"
                        }
                    }, [a("defs", [a("linearGradient", {
                        attrs: {
                            x1: "50%",
                            y1: "0%",
                            x2: "42.5843312%",
                            y2: "100%",
                            id: "linearGradient-1"
                        }
                    }, [a("stop", {
                        attrs: {
                            "stop-color": "#3C94FF",
                            offset: "0%"
                        }
                    }), t._v(" "), a("stop", {
                        attrs: {
                            "stop-color": "#73E8FF",
                            offset: "100%"
                        }
                    })], 1)], 1), t._v(" "), a("g", {
                        attrs: {
                            id: "Page-1",
                            stroke: "none",
                            "stroke-width": "1",
                            fill: "none",
                            "fill-rule": "evenodd"
                        }
                    }, [a("g", {
                        attrs: {
                            id: ""
                        }
                    }, [a("path", {
                        attrs: {
                            d: "M433.500224,73.3907018 L433.500224,143.786321 L426.001341,143.786321 L426.001341,3.74385338 L426.001341,-5.1159077e-13 L523.497988,-5.1159077e-13 L523.497988,7.48770675 L433.500224,7.48770675 L433.500224,65.9029951 L510,65.9029951 L510,73.3907018 L433.500224,73.3907018 Z M287.54582,62.8274475 L252.95485,143.786321 L245.288333,143.786321 L187.033974,-5.1159077e-13 L194.700492,-5.1159077e-13 L249.219937,134.894949 L283.810907,53.5873938 L287.695574,44.2311131 L306.613768,-5.1159077e-13 L314.275816,-5.1159077e-13 L291.477425,53.5873938 L324.340635,134.894949 L381.729996,-5.1159077e-13 L389.396513,-5.1159077e-13 L328.075548,143.786321 L320.40903,143.786321 L287.54582,62.8274475 Z M168.001788,143.786321 L175.500671,143.786321 L175.500671,38.9405454 L168.001788,38.9405454 L168.001788,143.786321 Z M168.001788,17.3245418 L168.001788,3.76620474 C168.001788,1.68305767 169.680376,-5.1159077e-13 171.750112,-5.1159077e-13 C173.822083,-5.1159077e-13 175.500671,1.68305767 175.500671,3.76620474 L175.500671,17.3245418 C175.500671,19.4009835 173.822083,21.0885114 171.750112,21.0885114 C169.680376,21.0885114 168.001788,19.4009835 168.001788,17.3245418 Z M403.500224,143.786321 L410.999106,143.786321 L410.999106,40.4403219 L403.500224,40.4403219 L403.500224,143.786321 Z M403.500224,17.2239607 L403.500224,3.74385338 C403.500224,1.67411712 405.178811,-5.1159077e-13 407.250782,-5.1159077e-13 C409.320519,-5.1159077e-13 410.999106,1.67411712 410.999106,3.74385338 L410.999106,17.2239607 C410.999106,19.2892266 409.320519,20.967814 407.250782,20.967814 C405.178811,20.967814 403.500224,19.2892266 403.500224,17.2239607 Z M532.501118,143.786321 L540,143.786321 L540,38.9405454 L532.501118,38.9405454 L532.501118,143.786321 Z M532.501118,17.3245418 L532.501118,3.76620474 C532.501118,1.68305767 534.17747,-5.1159077e-13 536.249441,-5.1159077e-13 C538.319177,-5.1159077e-13 540,1.68305767 540,3.76620474 L540,17.3245418 C540,19.4009835 538.319177,21.0885114 536.249441,21.0885114 C534.17747,21.0885114 532.501118,19.4009835 532.501118,17.3245418 Z M71.2874385,143.786321 L7.50111757,13.4778722 L7.50111757,143.786321 L0,143.786321 L0,-5.1159077e-13 L9.20205633,-5.1159077e-13 L74.8077783,137.183728 L141.041574,-5.1159077e-13 L150,-5.1159077e-13 L150,143.786321 L142.501118,143.786321 L142.501118,12.4988824 L78.2565937,143.786321 L71.2874385,143.786321 Z",
                            id: "Fill-1-Copy",
                            fill: "url(#linearGradient-1)"
                        }
                    }), t._v(" "), a("text", {
                        attrs: {
                            id: "Добро пожаловать!",
                            "font-family": "MI-LANTING--GBK1-Light, MI LANTING",
                            "font-size": "54",
                            "font-weight": "300",
                            fill: "#73E8FF"
                        }
                    }, [a("tspan", {
                        attrs: {
                            x: "1.8",
                            y: "232.4"
                        }
                    }, [t._v("Добро пожаловать!")])])])])])]), t._v(" "), a("div", {
                        staticClass: "footer width100"
                    }, [a("div", {
                        staticClass: "user"
                    }, [a("div", [a("CheckBox", {
                        attrs: {
                            name: "protocal"
                        },
                        on: {
                            change: t.changeUserProtocol
                        },
                        model: {
                            value: t.userProtocol,
                            callback: function(e) {
                                t.userProtocol = e
                            },
                            expression: "userProtocol"
                        }
                    }), t._v(" "), a("span", [t._v("Прочитал и согласен")]), t._v(" "), a("a", {
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: t.agreement
                        }
                    }, [t._v("《Лицензионное соглашение с пользователем》")])], 1), t._v(" "), a("div", [a("CheckBox", {
                        attrs: {
                            name: "protocal"
                        },
                        model: {
                            value: t.planProtocal,
                            callback: function(e) {
                                t.planProtocal = e
                            },
                            expression: "planProtocal"
                        }
                    }), t._v("Согласен\n                  "), a("a", {
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: t.privacy
                        }
                    }, [t._v("《Программа улучшения качества》")])], 1)]), t._v(" "), a("div", {
                        staticClass: "join"
                    }, [a("a", {
                        staticClass: "button",
                        class: {
                            disabled: t.disabledTep
                        },
                        attrs: {
                            href: "javascript:void(0)",
                            disabled: t.disabledTep
                        },
                        on: {
                            click: t.start
                        }
                    }, [t._v("Присоединиться")])]), t._v(" "), a("div", {
                        staticClass: "desc"
                    }, [t._v("\n          Авторские права Xiaomi Mobile Software Co., Ltd.\n      ")])]), t._v(" "), a("Toast", {
                        ref: "tip"
                    })], 1)
                },
                staticRenderFns: []
            };
        var u = a("VU/8")(d, l, !1, function(t) {
            a("dTiF")
        }, "data-v-d0a55786", null);
        e.default = u.exports
    },
    "h+4m": function(t, e) {},
    hNqL: function(t, e, a) {
        "use strict";
        var n = {
                name: "tip",
                props: {},
                data: function() {
                    return {
                        showTip: !1,
                        desc: ""
                    }
                },
                methods: {
                    showTips: function(t) {
                        var e = this;
                        e.showTip = !0, e.desc = t, setTimeout(function() {
                            e.showTip = !1
                        }, 2e3)
                    }
                }
            },
            o = {
                render: function() {
                    var t = this.$createElement;
                    return (this._self._c || t)("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: this.showTip,
                            expression: "showTip"
                        }],
                        staticClass: "wireless_failure"
                    }, [this._v("\n    " + this._s(this.desc) + "\n")])
                },
                staticRenderFns: []
            };
        var s = a("VU/8")(n, o, !1, function(t) {
            a("svRU")
        }, "data-v-77ab80be", null);
        e.a = s.exports
    },
    n8t0: function(t, e, a) {
        "use strict";
        var n = {
                name: "checkbox",
                model: {
                    prop: "checked",
                    event: "change"
                },
                props: {
                    name: {
                        type: String,
                        default: ""
                    },
                    checked: Boolean,
                    value: String
                },
                methods: {
                    onChange: function(t) {
                        this.$emit("change", t.target.checked)
                    }
                },
                watch: {},
                mounted: function() {}
            },
            o = {
                render: function() {
                    var t = this,
                        e = t.$createElement;
                    return (t._self._c || e)("input", {
                        staticClass: "iconfont checkbox",
                        attrs: {
                            name: t.name,
                            type: "checkbox"
                        },
                        domProps: {
                            value: t.value,
                            checked: t.checked
                        },
                        on: {
                            change: function(e) {
                                return t.onChange(e)
                            }
                        }
                    })
                },
                staticRenderFns: []
            };
        var s = a("VU/8")(n, o, !1, function(t) {
            a("h+4m")
        }, null, null);
        e.a = s.exports
    },
    svRU: function(t, e) {}
});