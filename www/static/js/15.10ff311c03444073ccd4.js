webpackJsonp([15], {
    "+rtS": function(t, e) {},
    PkfQ: function(t, e, r) {
        "use strict";
        var s = {
                name: "subtitle",
                props: {
                    name: {
                        type: String,
                        default: ""
                    }
                }
            },
            i = {
                render: function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "sub_title"
                    }, [e("span"), this._v(" "), e("h4", [this._v(this._s(this.name))])])
                },
                staticRenderFns: []
            };
        var n = r("VU/8")(s, i, !1, function(t) {
            r("XjfA")
        }, "data-v-0608f019", null);
        e.a = n.exports
    },
    SjwP: function(t, e) {},
    XjfA: function(t, e) {},
    kDQt: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = r("teIl"),
            i = r("PkfQ"),
            n = {
                name: "error2",
                data: function() {
                    return {
                        typeList: ['宽带账号上网<span style="opacity: .4"> PPPOE</span>', '自动获取IP<span style="opacity: .4"> DHCP</span>', "静态IP", "Wi-Fi中继", "有线中继"],
                        mapTypeLink: [{
                            path: "/guide",
                            query: {
                                type: 1
                            }
                        }, {
                            path: "/dhcp",
                            query: {
                                step: 2,
                                from: "error2"
                            }
                        }, "/static", "/wireless", "/wired"],
                        errortip: !1,
                        error_desc: ""
                    }
                },
                created: function() {
                    var t = this;
                    if (this.$route.query.from) {
                        this.errortip = !0, "wireless" === this.$route.query.from ? this.error_desc = "需中继Wi-Fi的密码错误，无线中继模式配置失败，请重新选择模式" : "dhcp" === this.$route.query.from ? this.error_desc = "dhcp配置失败，请重新选择模式" : "wired" === this.$route.query.from ? this.error_desc = "有线中继配置失败，请重新选择模式" : "static" === this.$route.query.from && (this.error_desc = "静态IP配置失败，请重新选择模式");
                        var e = this.$router.history.current.path;
                        this.$router.push({
                            path: e
                        }), setTimeout(function() {
                            t.errortip = !1
                        }, 3e3)
                    }
                },
                components: {
                    Header: s.a,
                    Subtitle: i.a
                }
            },
            a = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "container"
                    }, [r("Header", {
                        attrs: {
                            name: "选择配置类型"
                        }
                    }), t._v(" "), r("div", {
                        staticClass: "main width100"
                    }, [r("Subtitle", {
                        attrs: {
                            name: "请选择上网连接类型"
                        }
                    }), t._v(" "), r("ul", t._l(t.typeList, function(e, s) {
                        return r("router-link", {
                            key: s,
                            staticClass: "iconfont",
                            attrs: {
                                tag: "li",
                                to: t.mapTypeLink[s]
                            },
                            domProps: {
                                innerHTML: t._s(e)
                            }
                        })
                    }), 1)], 1), t._v(" "), r("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.errortip,
                            expression: "errortip"
                        }],
                        staticClass: "wireless_failure"
                    }, [t._v("\n      " + t._s(t.error_desc) + "\n\n  ")])], 1)
                },
                staticRenderFns: []
            };
        var o = r("VU/8")(n, a, !1, function(t) {
            r("+rtS")
        }, "data-v-9e9674de", null);
        e.default = o.exports
    },
    teIl: function(t, e, r) {
        "use strict";
        var s = {
                name: "headers",
                data: function() {
                    return {}
                },
                props: {
                    name: {
                        type: String,
                        default: ""
                    },
                    step: {
                        type: Number,
                        default: 1
                    }
                },
                methods: {
                    back: function() {
                        this.currentStep > 1 ? this.$emit("goBack", --this.currentStep) : 1 == this.currentStep && history.go(-1)
                    }
                },
                computed: {
                    currentStep: function() {
                        return this.step
                    }
                },
                mounted: function() {}
            },
            i = {
                render: function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "header"
                    }, [e("div", {
                        staticClass: "title"
                    }, [e("span", {
                        staticClass: "iconfont fanhuijian",
                        on: {
                            click: this.back
                        }
                    }), this._v(" "), e("h3", [this._v(this._s(this.name))])])])
                },
                staticRenderFns: []
            };
        var n = r("VU/8")(s, i, !1, function(t) {
            r("SjwP")
        }, null, null);
        e.a = n.exports
    }
});