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
                    }), s._v(" "), e("p", [s._v("Настройка завершена, производится перезагрузка Wi-Fi сети.")]), s._v(" "), e("p", [s._v("Подключитесь к Wi-Fi еще раз, чтобы получить доступ к Интернету.")]), s._v(" "), s.wireless ? e("p", {
                        staticClass: "fail"
                    }, [s._v("Если следующее подключение к сети Wi-Fi не произойдет, это означает, что соединение с ретранслятором не удалось, измените конфигурацию подключения к Инетрнету.")]) : s._e()]), s._v(" "), e("div", {
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
                            name: "Это Ваш пароль доступа к Wi-Fi сети, сделайте скриншот, запомните или сохраните пароль в надежном месте."
                        }
                    }), s._v(" "), e("div", {
                        staticClass: "wifi_item"
                    }, [s._m(0), s._v(" "), e("h3", [s._v(s._s(s.resultData.ssid2g_ssid))]), s._v(" "), e("p", [s._v("Пароль Wi-Fi: ")]), s._v(" "), e("h3", [s._v(s._s(s.resultData.ssid2g_passwd))])]), s._v(" "), s.resultData.ssid5g_ssid ? e("div", {
                        staticClass: "wifi_item wifi_item2"
                    }, [s._m(1), s._v(" "), e("h3", [s._v(s._s(s.resultData.ssid5g_ssid))]), s._v(" "), e("p", [s._v("Пароль Wi-Fi: ")]), s._v(" "), e("h3", [s._v(s._s(s.resultData.ssid5g_passwd))])]) : s._e(), s._v(" "), e("div", {
                        staticClass: "wifi_item3"
                    }, [e("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !s.wireless,
                            expression: "!wireless"
                        }]
                    }, [s._v("Адрес Панели управления:   " + s._s(s.resultData.lan_ip))]), s._v(" "), e("p", [s._v("Пароль доступа к Панели управления:   " + s._s(s.adminPassword))]), s._v(" "), e("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: s.wireless,
                            expression: "wireless"
                        }]
                    }, [s._v("Рекомендуется установить приложение Xiaomi WiFi, чтобы управлять маршрутизатором в любое время и в любом месте.")])])], 1)])
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