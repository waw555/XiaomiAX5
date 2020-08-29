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
                }, [this._v("\n        Сброс\n      ")])]), this._v(" "), s("div", {
                    staticClass: "res-desc"
                }, [this._v("\n      Сброс настроек маршрутизатора\n    ")]), this._v(" "), s("div", {
                    staticClass: "res-back"
                }, [this._v("\n      (Находится на задней панели маршрутизатора)\n    ")])])
            }, function() {
                var t = this.$createElement,
                    s = this._self._c || t;
                return s("ul", [s("li", [this._v("Пароль входа в Панель управления в основном совпадает с паролем Wi-Fi, рекомендуем попытаться войти в Панель управления с паролем Wi-Fi.")]), this._v(" "), s("li", [this._v("Если вы забыли пароль, вы можете сбросить его восстановив заводские настройки маршрутизатора. При включенном питании используйте тонкий предмет, чтобы нажать кнопку сброса и удерживать ее в течение 3 секунд. После того как индикаторы начнут мигать, отпустите кнопку.")]), this._v(" "), s("li", {
                    staticClass: "red"
                }, [this._v("Восстановление заводских настроек, приведет к тому, что вы установите все настройки маршрутизатора по умолчанию, а пароль входа также будет установлен в незашифрованном виде, поэтому, пожалуйста, не выполняйте сброс маршрутизатора до заводских настроек без необходимости.")])])
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