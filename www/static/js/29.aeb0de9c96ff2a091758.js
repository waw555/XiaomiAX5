webpackJsonp([29], {
    XpWj: function(t, s) {},
    YCHQ: function(t, s, i) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        var e = {
            render: function() {
                var t = this.$createElement,
                    s = this._self._c || t;
                return s("div", {
                    staticClass: "container"
                }, [this._m(0), this._v(" "), this._m(1), this._v(" "), s("div", {
                    staticClass: "footer width40"
                }, [s("button", {
                    staticClass: "button",
                    attrs: {
                        type: "submit"
                    },
                    on: {
                        click: this.login
                    }
                }, [this._v("Вход")])])])
            },
            staticRenderFns: [function() {
                var t = this.$createElement,
                    s = this._self._c || t;
                return s("div", {
                    staticClass: "reset"
                }, [s("div", {
                    staticClass: "wrapper"
                }, [s("div", {
                    staticClass: "dot"
                }), this._v(" "), s("div", {
                    staticClass: "res"
                }, [this._v("\n        Reset\n      ")])]), this._v(" "), s("div", {
                    staticClass: "res-desc"
                }, [this._v("\n      重置路由器\n    ")]), this._v(" "), s("div", {
                    staticClass: "res-back"
                }, [this._v("\n      （位于路由器背面）\n    ")])])
            }, function() {
                var t = this.$createElement,
                    s = this._self._c || t;
                return s("ul", [s("li", [this._v("路由器管理密码大多与Пароль Wi-Fi: 一致，建议您尝试用Пароль Wi-Fi: Вход")]), this._v(" "), s("li", [this._v("如果Не хотите запоминать пароль?!，可以将路由器恢复出厂并重新设置：在通电状态下，使用针状物按下复位按钮，并保持3秒钟，待指示灯闪烁后松开，即可恢复出厂设置然后按照说明书重新设置路由器。")]), this._v(" "), s("li", {
                    staticClass: "red"
                }, [this._v("恢复出厂默认设置意味着您将丢失原有的配置数据，并且Вход密码也会初始化未加密状态，所以请不要随意操作复位按钮")])])
            }]
        };
        var n = i("VU/8")({
            name: "forget",
            data: function() {
                return {}
            },
            components: {},
            methods: {
                login: function() {
                    this.$router.push({
                        path: "/login"
                    })
                }
            },
            created: function() {}
        }, e, !1, function(t) {
            i("XpWj")
        }, "data-v-68f697dd", null);
        s.default = n.exports
    }
});