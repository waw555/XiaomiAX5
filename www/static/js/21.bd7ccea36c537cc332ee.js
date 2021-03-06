webpackJsonp([21], {
    IIYD: function(t, s) {},
    LMeT: function(t, s) {},
    NfPz: function(t, s, i) {
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
                        var s = this;
                        s.showTip = !0, s.desc = t, setTimeout(function() {
                            s.showTip = !1
                        }, 2e3)
                    }
                }
            },
            e = {
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
        var a = i("VU/8")(n, e, !1, function(t) {
            i("IIYD")
        }, "data-v-55665e1a", null);
        s.a = a.exports
    },
    gpVb: function(t, s, i) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        var n = i("Xxa5"),
            e = i.n(n),
            a = i("exGp"),
            o = i.n(a),
            c = {
                name: "home",
                data: function() {
                    return {
                        status: 1,
                        gotopc: 0,
                        times: 1,
                        button_text: "Диагностика сети",
                        network_type: 0
                    }
                },
                created: function() {
                    this.netDiagnosis(), this.getWanType()
                },
                components: {
                    Toast: i("NfPz").a
                },
                methods: {
                    getWanType: function() {
                        var t = this;
                        return o()(e.a.mark(function s() {
                            var i;
                            return e.a.wrap(function(s) {
                                for (;;) switch (s.prev = s.next) {
                                    case 0:
                                        return s.next = 2, t.axios.getWifiStatus();
                                    case 2:
                                        (i = s.sent).data && ("wifiapmode" == i.data.mode ? (t.button_text = "Справка", t.network_type = 1) : "lanapmode" == i.data.mode && (t.button_text = "Справка", t.network_type = 1));
                                    case 4:
                                    case "end":
                                        return s.stop()
                                }
                            }, s, t)
                        }))()
                    },
                    netDiagnosis: function() {
                        var t = this,
                            s = {
                                url: "http://api.miwifi.com/data2/rom_network_detection?callback=_jsonCallBack",
                                fail: function() {
                                    t.times >= 2 ? t.status = 0 : (t.times++, t.netDiagnosis())
                                }
                            };
                        this.axios.getNettb(s).then(function(s) {
                            s && 0 == s.code && (t.status = 1)
                        }).catch(function() {})
                    },
                    runStatus: function() {
                        this.$router.push({
                            path: "/status"
                        })
                    },
                    more: function() {
                        this.gotopc = 1
                    },
                    setWifi: function() {
                        this.$router.push({
                            path: "/set_wifi"
                        })
                    },
                    setPppoe: function() {
                        this.$router.push({
                            path: "/choose_inter"
                        })
                    },
                    operator: function() {
                        this.$router.push({
                            path: "/operator"
                        })
                    },
                    close: function() {
                        this.gotopc = 0
                    },
                    downloadEvent: function() {
                        var t = "",
                            s = this.common.detectDevice();
                        "ios" == s ? t = "https://itunes.apple.com/cn/app/id859962702?mt=8&ls=1" : "android" == s && (t = "http://bigota.miwifi.com/xiaoqiang/client/xqapp.apk"), window.location.href = t
                    },
                    diagnose: function() {
                        1 == this.network_type ? this.$router.push({
                            path: "/help"
                        }) : this.$router.push({
                            path: "/diagnose_desp"
                        })
                    },
                    gotoPCVersion: function() {
                        var t = window.location.host,
                            s = window.location.protocol;
                        window.location.href = s + "//" + t + "/cgi-bin/luci/web?goto=pc"
                    }
                }
            },
            r = {
                render: function() {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("div", {
                        staticClass: "container"
                    }, [i("div", {
                        staticClass: "wrap"
                    }, [0 == t.status ? i("div", {
                        staticClass: "wrong"
                    }, [t._m(0), t._v(" "), t._m(1), t._v(" "), i("div", {
                        staticClass: "diag"
                    }, [i("div", {
                        staticClass: "desc"
                    }, [t._v("\n          Рекомендуется выполнить диагностику сети для выявления проблем.\n        ")]), t._v(" "), i("div", {
                        staticClass: "btn",
                        on: {
                            click: t.diagnose
                        }
                    }, [t._v("\n          " + t._s(t.button_text) + "\n        ")])])]) : t._e(), t._v(" "), 1 == t.status ? i("div", {
                        staticClass: "right"
                    }, [i("div", {
                        staticClass: "wrapper"
                    }, [i("div", {
                        staticClass: "inner",
                        on: {
                            click: t.runStatus
                        }
                    }, [i("div", {
                        staticClass: "correct"
                    }, [t._v("\n          В сети\n          ")]), t._v(" "), t._m(2)])])]) : t._e()]), t._v(" "), i("div", {
                        staticClass: "bottom"
                    }, [i("div", {
                        staticClass: "more",
                        on: {
                            click: t.more
                        }
                    }, [t._v("\n        Расширенные функции"), i("span", {
                        staticClass: "iconfont icon-fanhui"
                    })]), t._v(" "), i("div", {
                        staticClass: "info"
                    }, [i("ul", [i("li", {
                        on: {
                            click: t.setWifi
                        }
                    }, [i("i", {
                        staticClass: "wifi"
                    }), t._v(" "), i("div", {
                        staticClass: "desc"
                    }, [t._v("\n              Wi-Fi\n            ")])]), t._v(" "), i("li", {
                        on: {
                            click: t.setPppoe
                        }
                    }, [i("i", {
                        staticClass: "setting"
                    }), t._v(" "), i("div", {
                        staticClass: "desc"
                    }, [t._v("\n              Интернет\n            ")])]), t._v(" "), i("li", {
                        on: {
                            click: t.operator
                        }
                    }, [i("i", {
                        staticClass: "user"
                    }), t._v(" "), i("div", {
                        staticClass: "desc"
                    }, [t._v("\n              Учетная запись\n            ")])])])]), t._v(" "), i("div", {
                        staticClass: "footer"
                    }, [i("span", {
                        staticClass: "download",
                        on: {
                            click: t.downloadEvent
                        }
                    }, [t._v("Скачать приложение Xiaomi WiFi")]), i("span", {
                        staticClass: "desc"
                    }, [t._v("Расширенные функции")])])]), t._v(" "), t.gotopc ? i("div", {
                        staticClass: "senior"
                    }, [i("div", {
                        staticClass: "mask"
                    }), t._v(" "), i("div", {
                        staticClass: "dialog"
                    }, [i("i", {
                        staticClass: "close iconfont  icon-close",
                        on: {
                            click: t.close
                        }
                    }), t._v(" "), t._m(3), t._v(" "), i("div", {
                        staticClass: "gotoPCVersion",
                        on: {
                            click: t.gotoPCVersion
                        }
                    }, [t._v("\n            Перейти к версии для ПК\n          ")])])]) : t._e(), t._v(" "), i("Toast", {
                        ref: "tip"
                    })], 1)
                },
                staticRenderFns: [function() {
                    var t = this.$createElement,
                        s = this._self._c || t;
                    return s("div", {
                        staticClass: "status"
                    }, [this._v("\n        Проблемы с сетью\n        "), s("div", [this._v("Маршрутизатор работает стабильно")])])
                }, function() {
                    var t = this.$createElement,
                        s = this._self._c || t;
                    return s("div", {
                        staticClass: "reason"
                    }, [s("div", {
                        staticClass: "title"
                    }, [this._v("\n          Причиной выхода из строя внешней сети может быть：\n\n        ")]), this._v(" "), s("ul", [s("li", [this._v("Не подключен сетевой кабель. Неправильные имя пользователя или пароль")]), this._v(" "), s("li", [this._v("IP адрес не получен, неправильный адрес сервера DNS")])])])
                }, function() {
                    var t = this.$createElement,
                        s = this._self._c || t;
                    return s("div", {
                        staticClass: "desp"
                    }, [this._v("\n            Подробнее"), s("span", {
                        staticClass: "iconfont icon-fanhui"
                    })])
                }, function() {
                    var t = this.$createElement,
                        s = this._self._c || t;
                    return s("div", {
                        staticClass: "content"
                    }, [s("p", [this._v("Используйте версию для ПК")]), this._v(" "), s("p", [this._v("Используйте расширенные функции")])])
                }]
            };
        var l = i("VU/8")(c, r, !1, function(t) {
            i("LMeT")
        }, "data-v-7360223e", null);
        s.default = l.exports
    }
});