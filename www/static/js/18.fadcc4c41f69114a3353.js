webpackJsonp([18], {
    "0QSP": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = {
                name: "",
                data: function() {
                    return {
                        step: 1,
                        errorImgRedmi: n("fad2")
                    }
                },
                components: {
                    Headers: n("4uQT").a
                },
                methods: {
                    handleBack: function(t) {
                        this.step = t
                    },
                    retry: function() {
                        this.$router.push({
                            path: "/home"
                        })
                    },
                    operators: function() {
                        this.$router.push({
                            path: "/operators"
                        })
                    }
                }
            },
            i = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "wrapper"
                    }, [n("div", {
                        staticClass: "container"
                    }, [n("div", {
                        staticClass: "main"
                    }, [n("Headers", {
                        attrs: {
                            name: "Диагностика сети",
                            step: t.step,
                            fontsize: "index"
                        },
                        on: {
                            goBack: t.handleBack
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "top"
                    }, [n("img", {
                        attrs: {
                            src: t.errorImgRedmi,
                            alt: ""
                        }
                    })])], 1), t._v(" "), n("div", {
                        staticClass: "bottom"
                    }, [n("h3", [t._v("Сетевой кабель не определяется")]), t._v(" "), n("p", [
						t._v("Мы предлагаем вам выполнить следующие действия, чтобы устранить проблему.")]), t._v(" "), n("ul", [n("li", [
						t._v("1. Убедитесь, что WAN порт или LAN порт подключен сетевым кабелем к LAN порту вышестоящего устройства.")]), t._v(" "), n("li", [
						t._v("2. Убедитесь, что сетевой кабель исправен.")]), t._v(" "), n("li", [
						t._v("3. Убедитесь, что вышестоящее оборудование работает исправно, попробуйте перезагрузить вышестоящее оборудование перед подключением к Wi-Fi сети.")]), t._v(" "), n("li", [
						t._v("4. Если вы по-прежнему не можете получить доступ к Интернету, обратитесь к своему  "), n("a", {
                        on: {
                            click: t.operators
                        }
                    }, [t._v("Провайдеру")])])]), t._v(" "), n("button", {
                        staticClass: "foot",
                        on: {
                            click: t.retry
                        }
                    }, [t._v("На Главную")])])])])
                },
                staticRenderFns: []
            };
        var a = n("VU/8")(s, i, !1, function(t) {
            n("r0NU")
        }, "data-v-1dbf7bf9", null);
        e.default = a.exports
    },
    "4uQT": function(t, e, n) {
        "use strict";
        var s = {
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
            i = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "header"
                    }, [n("div", {
                        staticClass: "title",
                        class: {
                            title26: "index" == t.fontsize
                        }
                    }, [n("span", {
                        staticClass: "iconfont fanhuijian",
                        class: {
                            iconfont26: "index" == t.fontsize
                        },
                        on: {
                            click: t.back
                        }
                    }), t._v(" "), n("h3", {
                        class: {
                            font26: "index" == t.fontsize
                        }
                    }, [t._v(t._s(t.name))])])])
                },
                staticRenderFns: []
            };
        var a = n("VU/8")(s, i, !1, function(t) {
            n("Hm6d")
        }, null, null);
        e.a = a.exports
    },
    Hm6d: function(t, e) {},
    fad2: function(t, e, n) {
        t.exports = n.p + "static/img/error_tip_redmi.ae2f57f.png"
    },
    r0NU: function(t, e) {}
});