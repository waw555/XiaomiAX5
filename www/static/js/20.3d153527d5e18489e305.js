webpackJsonp([20], {
    PkfQ: function(s, t, e) {
        "use strict";
        var i = {
                name: "subtitle",
                props: {
                    name: {
                        type: String,
                        default: ""
                    }
                }
            },
            a = {
                render: function() {
                    var s = this.$createElement,
                        t = this._self._c || s;
                    return t("div", {
                        staticClass: "sub_title"
                    }, [t("span"), this._v(" "), t("h4", [this._v(this._s(this.name))])])
                },
                staticRenderFns: []
            };
        var r = e("VU/8")(i, a, !1, function(s) {
            e("XjfA")
        }, "data-v-0608f019", null);
        t.a = r.exports
    },
    XjfA: function(s, t) {},
    rZov: function(s, t) {},
    "u/6M": function(s, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = e("PkfQ"),
            a = {
                name: "wifi_complete",
                props: {
                    types: {
                        type: Number,
                        default: 1
                    },
                    resultData: {
                        type: Object,
                        default: {}
                    },
                    adminPassword: {
                        type: String,
                        default: ""
                    },
                    wireless: {
                        type: Boolean,
                        default: !1
                    }
                },
                components: {
                    Subtitle: i.a
                },
                created: function() {
                    2 != this.types && (this.adminPassword = this.GLOBAL.adminPassword, this.$route.query && (this.resultData = this.$route.query))
                }
            },
            r = {
                render: function() {
                    var s = this,
                        t = s.$createElement,
                        e = s._self._c || t;
                    return e("div", {
                        staticClass: "container complete"
                    }, [e("div", {
                        staticClass: "header",
                        class: {
                            headerhas5g: !s.resultData.ssid5g_ssid
                        },
                        attrs: {
                            id: "header"
                        }
                    }, [e("div", {
                        staticClass: "iconfont icon-duigou",
                        attrs: {
                            id: "title"
                        }
                    }), s._v(" "), e("p", [s._v("配置完成，Wi-Fi重启中")]), s._v(" "), e("p", [s._v("再次连接Wi-Fi即可访问互联网")]), s._v(" "), s.wireless ? e("p", {
                        staticClass: "fail"
                    }, [s._v("若搜不到以下新Wi-Fi，则表示中继连接失败，请重新配置")]) : s._e()]), s._v(" "), e("div", {
                        ref: "con",
                        staticClass: "form  width100",
                        class: {
                            formhas5G: !s.resultData.ssid5g_ssid
                        },
                        attrs: {
                            id: "content"
                        }
                    }, [e("Subtitle", {
                        attrs: {
                            name: "您的Wi-Fi密码如下，建议截图保存"
                        }
                    }), s._v(" "), e("div", {
                        staticClass: "wifi_item"
                    }, [s._m(0), s._v(" "), e("h3", [s._v(s._s(s.resultData.ssid2g_ssid))]), s._v(" "), e("p", [s._v("Wi-Fi密码")]), s._v(" "), e("h3", [s._v(s._s(s.resultData.ssid2g_passwd))])]), s._v(" "), s.resultData.ssid5g_ssid ? e("div", {
                        staticClass: "wifi_item wifi_item2"
                    }, [s._m(1), s._v(" "), e("h3", [s._v(s._s(s.resultData.ssid5g_ssid))]), s._v(" "), e("p", [s._v("Wi-Fi密码")]), s._v(" "), e("h3", [s._v(s._s(s.resultData.ssid5g_passwd))])]) : s._e(), s._v(" "), e("div", {
                        staticClass: "wifi_item3"
                    }, [e("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !s.wireless,
                            expression: "!wireless"
                        }]
                    }, [s._v("管理后台：  " + s._s(s.resultData.lan_ip))]), s._v(" "), e("p", [s._v("管理密码：  " + s._s(s.adminPassword))]), s._v(" "), e("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: s.wireless,
                            expression: "wireless"
                        }]
                    }, [s._v("推荐安装小米WiFi APP,随时随地管理您的路由")])])], 1)])
                },
                staticRenderFns: [function() {
                    var s = this.$createElement,
                        t = this._self._c || s;
                    return t("p", [t("span", [this._v("2.4G")]), this._v("  Wi-Fi")])
                }, function() {
                    var s = this.$createElement,
                        t = this._self._c || s;
                    return t("p", [t("span", [this._v("5G")]), this._v("  Wi-Fi")])
                }]
            };
        var n = e("VU/8")(a, r, !1, function(s) {
            e("rZov")
        }, "data-v-66e23d97", null);
        t.default = n.exports
    }
});