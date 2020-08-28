webpackJsonp([9], {
    "3Lva": function(t, e, s) {
        t.exports = s.p + "static/img/error_tip.5f72041.png"
    },
    CXqk: function(t, e) {},
    SjwP: function(t, e) {},
    hNqL: function(t, e, s) {
        "use strict";
        var i = {
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
            n = {
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
        var r = s("VU/8")(i, n, !1, function(t) {
            s("svRU")
        }, "data-v-77ab80be", null);
        e.a = r.exports
    },
    svRU: function(t, e) {},
    teIl: function(t, e, s) {
        "use strict";
        var i = {
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
            n = {
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
        var r = s("VU/8")(i, n, !1, function(t) {
            s("SjwP")
        }, null, null);
        e.a = r.exports
    },
    vQ0D: function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = s("teIl"),
            n = s("hNqL"),
            r = {
                name: "error",
                data: function() {
                    return {}
                },
                components: {
                    Header: i.a,
                    Toast: n.a
                },
                methods: {
                    check: function() {
                        this.common.setInitLog({
                            type: 0,
                            step: "nocable_retry"
                        }), "wired" == this.$route.query.from ? this.$router.push({
                            path: "/wired",
                            query: {
                                from: "error1"
                            }
                        }) : "guide" == this.$route.query.from && this.$router.push({
                            path: "/guide",
                            query: {
                                from: "error1"
                            }
                        })
                    },
                    rechoose: function() {
                        this.common.setInitLog({
                            type: 0,
                            step: "nocable_rechoose"
                        }), this.$router.push({
                            path: "/error2"
                        })
                    }
                },
                created: function() {
                    this.common.setInitLog({
                        type: 0,
                        step: "init_web_nocable"
                    })
                }
            },
            a = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "container"
                    }, [s("div", {
                        staticClass: "headertop"
                    }, [s("Header", {
                        attrs: {
                            name: "Мастер настройки"
                        }
                    }), t._v(" "), t._m(0)], 1), t._v(" "), s("div", {
                        staticClass: "content width100"
                    }, [s("h4", {
                        staticClass: "iconfont"
                    }, [t._v("Сетевой кабель не определяется")]), t._v(" "), t._m(1), t._v(" "), s("p", {
                        staticClass: "button",
                        on: {
                            click: t.check
                        }
                    }, [t._v("Перепроверить")]), t._v(" "), s("p", {
                        staticClass: "setmode"
                    }, [t._v("Вы также можете "), s("a", {
                        on: {
                            click: t.rechoose
                        }
                    }, [t._v("не подключать сетевой кабель и продолжить настройку")])])]), t._v(" "), s("Toast", {
                        ref: "tip"
                    })], 1)
                },
                staticRenderFns: [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "main width100 error1_pad"
                    }, [e("img", {
                        attrs: {
                            src: s("3Lva")
                        }
                    }), this._v(" "), e("div", {
                        staticClass: "img_text "
                    }, [e("p", [this._v("Оптический или сетевой кабель")]), this._v(" "), e("p", [this._v("Redmi Xiaomi AX5")])])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("ul", [e("li", [this._v("1. Убедитель что WAN порт, подключен к Инетрнету с помощью сетевого кабеля.")]), this._v(" "), e("li", [this._v("2. Убедитесь, что сетевой кабель исправен и не имеет повреждений.")]), this._v(" "), e("li", [this._v("3. Если вы по-прежнему не можете получить доступ в Интернет, обратитесь к своему Провайдеру.")])])
                }]
            };
        var o = s("VU/8")(r, a, !1, function(t) {
            s("CXqk")
        }, "data-v-2fbeb0fa", null);
        e.default = o.exports
    }
});