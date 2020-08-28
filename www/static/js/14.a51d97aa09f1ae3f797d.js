webpackJsonp([14], {
    "4uQT": function(t, e, a) {
        "use strict";
        var r = {
                name: "headers",
                props: {
                    name: {
                        type: String,
                        default: ""
                    },
                    controlers: {
                        type: String,
                        default: ""
                    },
                    step: {
                        type: Number,
                        default: 1
                    },
                    fontsize: {
                        type: String,
                        default: "init"
                    }
                },
                data: function() {
                    return {
                        stepMap: 1
                    }
                },
                methods: {
                    back: function() {
                        this.currentStep > 1 ? this.$emit("goBack", --this.currentStep) : 1 == this.currentStep && history.go(-1)
                    }
                },
                computed: {
                    currentStep: {
                        get: function() {
                            return this.stepMap
                        },
                        set: function(t) {
                            this.stepMap = t
                        }
                    }
                },
                watch: {
                    step: function(t) {
                        this.stepMap = t
                    }
                }
            },
            s = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "header"
                    }, [a("div", {
                        staticClass: "title",
                        class: {
                            title26: "index" == t.fontsize
                        }
                    }, [a("span", {
                        staticClass: "iconfont fanhuijian",
                        class: {
                            iconfont26: "index" == t.fontsize
                        },
                        on: {
                            click: t.back
                        }
                    }), t._v(" "), a("h3", {
                        class: {
                            font26: "index" == t.fontsize
                        }
                    }, [t._v(t._s(t.name))])])])
                },
                staticRenderFns: []
            };
        var n = a("VU/8")(r, s, !1, function(t) {
            a("Hm6d")
        }, null, null);
        e.a = n.exports
    },
    Hm6d: function(t, e) {},
    IIYD: function(t, e) {},
    NfPz: function(t, e, a) {
        "use strict";
        var r = {
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
            s = {
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
        var n = a("VU/8")(r, s, !1, function(t) {
            a("IIYD")
        }, "data-v-55665e1a", null);
        e.a = n.exports
    },
    PqVX: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = a("Xxa5"),
            s = a.n(r),
            n = a("exGp"),
            i = a.n(n),
            o = a("4uQT"),
            u = (a("W4G+"), a("NfPz")),
            c = {
                name: "diagnose_desp",
                data: function() {
                    return {
                        count: 0,
                        value: 0,
                        statusText: "路由系统检测中...",
                        interval: null,
                        counter: null,
                        canceled: !1
                    }
                },
                created: function() {
                    var t = this;
                    this.counter = setInterval(function() {
                        t.value >= 99 && clearInterval(t.counter), t.value >= 3 && (t.statusText = "路由系统状态正常"), t.status >= 7 && (t.statusText = "路由器外网检测中..."), t.value >= 17 && (t.statusText = "WAN或Internet口状态检测中..."), t.value >= 27 && (t.statusText = "上网模式检测中..."), t.value >= 37 && (t.statusText = "DNS解析能力检测中..."), t.value++
                    }, 303), this.netDiagnosis()
                },
                components: {
                    Header: o.a,
                    Toast: u.a
                },
                methods: {
                    cancelDiagnosis: function() {
                        this.canceled = !0, this.$router.push({
                            path: "/home"
                        })
                    },
                    netDiagnosis: function() {
                        var t = this;
                        return i()(s.a.mark(function e() {
                            var a;
                            return s.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.axios.netDiagnoseStart();
                                    case 2:
                                        a = e.sent, t.canceled || (a && a.data && 0 == a.data.code ? setTimeout(function() {
                                            t.interval = setInterval(function() {
                                                t.netDiagnosisResult()
                                            }, 5e3)
                                        }, 3e3) : t.$refs.tip.showTips(a.data.msg || "Произошла неизвестная ошибка, повторите попытку позже"));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, t)
                        }))()
                    },
                    netDiagnosisResult: function() {
                        var t = this;
                        return i()(s.a.mark(function e() {
                            var a;
                            return s.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.axios.netDiagnoseResult();
                                    case 2:
                                        if (a = e.sent, t.canceled) {
                                            e.next = 30;
                                            break
                                        }
                                        if (!a || !a.data || 0 != a.data.code) {
                                            e.next = 27;
                                            break
                                        }
                                        if (1 != a.data.status) {
                                            e.next = 10;
                                            break
                                        }
                                        clearInterval(t.interval), t.$router.push({
                                            path: "/network_error",
                                            query: {
                                                type: 0
                                            }
                                        }), e.next = 25;
                                        break;
                                    case 10:
                                        if (2 != a.data.status) {
                                            e.next = 24;
                                            break
                                        }
                                        if (clearInterval(t.interval), !a.data.wan || "down" != a.data.wan) {
                                            e.next = 15;
                                            break
                                        }
                                        return t.$router.push({
                                            path: "/wan_error"
                                        }), e.abrupt("return");
                                    case 15:
                                        if (!a.data.diagnose || 100 != a.data.diagnose) {
                                            e.next = 18;
                                            break
                                        }
                                        return 0 == a.data.dns ? t.$router.push({
                                            path: "/network_error",
                                            query: {
                                                type: 2
                                            }
                                        }) : t.$router.push({
                                            path: "/network_error",
                                            query: {
                                                type: 2,
                                                dns: a.data.dns
                                            }
                                        }), e.abrupt("return");
                                    case 18:
                                        if (114 != a.data.diagnose) {
                                            e.next = 21;
                                            break
                                        }
                                        return t.$router.push({
                                            path: "/network_error",
                                            query: {
                                                type: 10
                                            }
                                        }), e.abrupt("return");
                                    case 21:
                                        a.data.wanmode && ("pppoe" == a.data.wanmode ? 691 == a.data.diagnose ? t.$router.push({
                                            path: "/network_error",
                                            query: {
                                                type: 5
                                            }
                                        }) : 678 == a.data.diagnose ? t.$router.push({
                                            path: "/network_error",
                                            query: {
                                                type: 4,
                                                errorCode: "678"
                                            }
                                        }) : 633 == a.data.diagnose ? t.$router.push({
                                            path: "/network_error",
                                            query: {
                                                type: 4,
                                                errorCode: "633"
                                            }
                                        }) : 101 == a.data.diagnose && t.$router.push({
                                            path: "/network_error",
                                            query: {
                                                type: 4,
                                                errorCode: "none"
                                            }
                                        }) : "dhcp" == a.data.wanmode ? 111 == a.data.diagnose ? t.$router.push({
                                            path: "/network_error",
                                            query: {
                                                type: 6
                                            }
                                        }) : 112 == a.data.diagnose ? t.$router.push({
                                            path: "/network_error",
                                            query: {
                                                type: 1
                                            }
                                        }) : 113 == a.data.diagnose && t.$router.push({
                                            path: "/network_error",
                                            query: {
                                                type: 8
                                            }
                                        }) : t.$router.push({
                                            path: "/network_error",
                                            query: {
                                                type: 7
                                            }
                                        })), e.next = 25;
                                        break;
                                    case 24:
                                        3 == a.data.status && (t.count >= 9 ? clearInterval(t.interval) : t.count++);
                                    case 25:
                                        e.next = 28;
                                        break;
                                    case 27:
                                        t.$refs.tip.showTips(a.data.msg || "Произошла неизвестная ошибка, повторите попытку позже");
                                    case 28:
                                        e.next = 31;
                                        break;
                                    case 30:
                                        clearInterval(t.interval);
                                    case 31:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, t)
                        }))()
                    }
                }
            },
            d = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "container"
                    }, [a("div", {
                        staticClass: "headertop"
                    }, [a("Header", {
                        attrs: {
                            name: "网络诊断中"
                        }
                    })], 1), t._v(" "), a("div", {
                        staticClass: "value"
                    }, [a("div", {
                        staticClass: "wrapper"
                    }), t._v(" "), a("div", {
                        staticClass: "count"
                    }, [a("span", {
                        staticClass: "num"
                    }, [t._v(t._s(t.value) + " "), a("span", {
                        staticClass: "percent"
                    }, [t._v("%")])])])]), t._v(" "), a("div", {
                        staticClass: "router"
                    }, [a("div", {
                        staticClass: "status"
                    }, [t._v(t._s(t.statusText))])]), t._v(" "), a("div", {
                        staticClass: "footer"
                    }, [a("div", {
                        staticClass: "cancel",
                        on: {
                            click: t.cancelDiagnosis
                        }
                    }, [t._v("\n      取消诊断\n    ")]), t._v(" "), a("div", {
                        staticClass: "desc"
                    }, [t._v("诊断过程预计需要50秒，请耐心等待")])]), t._v(" "), a("Toast", {
                        ref: "tip"
                    })], 1)
                },
                staticRenderFns: []
            };
        var p = a("VU/8")(c, d, !1, function(t) {
            a("PtkZ")
        }, "data-v-4231dfd9", null);
        e.default = p.exports
    },
    PtkZ: function(t, e) {}
});