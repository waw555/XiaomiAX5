webpackJsonp([13], {
    "4uQT": function(t, e, i) {
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
            n = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "header"
                    }, [i("div", {
                        staticClass: "title",
                        class: {
                            title26: "index" == t.fontsize
                        }
                    }, [i("span", {
                        staticClass: "iconfont fanhuijian",
                        class: {
                            iconfont26: "index" == t.fontsize
                        },
                        on: {
                            click: t.back
                        }
                    }), t._v(" "), i("h3", {
                        class: {
                            font26: "index" == t.fontsize
                        }
                    }, [t._v(t._s(t.name))])])])
                },
                staticRenderFns: []
            };
        var a = i("VU/8")(s, n, !1, function(t) {
            i("Hm6d")
        }, null, null);
        e.a = a.exports
    },
    Hm6d: function(t, e) {},
    IIYD: function(t, e) {},
    NDpP: function(t, e) {},
    NfPz: function(t, e, i) {
        "use strict";
        var s = {
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
        var a = i("VU/8")(s, n, !1, function(t) {
            i("IIYD")
        }, "data-v-55665e1a", null);
        e.a = a.exports
    },
    h1ai: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = i("Xxa5"),
            n = i.n(s),
            a = i("exGp"),
            o = i.n(a),
            r = i("4uQT"),
            v = i("NfPz"),
            _ = {
                name: "",
                data: function() {
                    return {
                        step: 1,
                        type: 4,
                        dns: "",
                        gotopc: 0,
                        avoidip: 0,
                        errorCode: "",
                        header: 0,
                        ip: "",
                        name: "",
                        password: ""
                    }
                },
                components: {
                    Headers: r.a,
                    Toast: v.a
                },
                methods: {
                    handleBack: function(t) {
                        this.step = t
                    },
                    gotopcsetting: function() {
                        this.gotopc = 1
                    },
                    avoidipconflict: function() {
                        this.avoidip = 1
                    },
                    aviodipconfirm: function() {
                        var t = this;
                        return o()(n.a.mark(function e() {
                            var i;
                            return n.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.axios.postConflictReq();
                                    case 2:
                                        0 != (i = e.sent).data.code ? alert(i.data.msg) : (t.avoidip = 0, t.$refs.tip.showTips("请求发送成功"));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, t)
                        }))()
                    },
                    operators: function() {
                        this.$router.push({
                            path: "/operators"
                        })
                    },
                    returnHome: function() {
                        this.$router.push({
                            path: "/home"
                        })
                    },
                    retry: function() {
                        this.$router.push({
                            path: "/diagnose_desp"
                        })
                    },
                    close: function() {
                        this.gotopc = 0, this.avoidip = 0
                    },
                    gotoPCVersion: function() {
                        var t = window.location.host,
                            e = window.location.protocol;
                        window.location.href = e + "//" + t + "/cgi-bin/luci/web?goto=pc"
                    },
                    getWanDetail: function() {
                        var t = this;
                        return o()(n.a.mark(function e() {
                            var i;
                            return n.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.axios.getPppoeStatus();
                                    case 2:
                                        0 == (i = e.sent).data.code && (t.name = i.data.pppoename || "...", t.password = i.data.password || "...");
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, t)
                        }))()
                    },
                    getIP: function() {
                        var t = this;
                        return o()(n.a.mark(function e() {
                            var i, s;
                            return n.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.axios.getConflictIp();
                                    case 2:
                                        if (0 == (i = e.sent).data.code)
                                            for (s = i.data.messages.length - 1; s >= 0; s--) 4 == i.data.messages[s].type && (t.ip = i.data.messages[s].data.ip);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, t)
                        }))()
                    }
                },
                created: function() {
                    this.type = this.$route.query.type, this.errorCode = this.$route.query.errorCode, this.dns = this.$route.query.dns, 3 != this.type && 4 != this.type && 5 != this.type || this.getWanDetail(), 8 == this.type && this.getIP(), 0 == this.$route.query.header ? this.header = 0 : this.header = 1
                }
            },
            c = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "container"
                    }, [t.header ? i("Headers", {
                        attrs: {
                            name: "Результат диагностики",
                            step: t.step,
                            fontsize: "index"
                        },
                        on: {
                            goBack: t.handleBack
                        }
                    }) : t._e(), t._v(" "), i("div", {
                        staticClass: "main"
                    }, [0 == t.type || 9 == t.type ? i("h3", [t._v("Плохая связь")]) : t._e(), t._v(" "), 1 == t.type || 7 == t.type ? i("h3", [t._v("Шлюз недоступен")]) : t._e(), t._v(" "), 2 == t.type ? i("h3", [t._v("Ошибка сервера DNS")]) : t._e(), t._v(" "), 3 == t.type ? i("h3", [t._v("Уже выполнено подключение с Вашей учетной записью (Код ошибки: 678)")]) : t._e(), t._v(" "), 4 == t.type ? i("h3", [t._v("Неверное Имя пользователя "), "none" != t.errorCode ? i("span", [t._v("（Код ошибки" + t._s(t.errorCode) + "）")]) : t._e()]) : t._e(), t._v(" "), 5 == t.type ? i("h3", [t._v("неверное Имя пользователя или пароль （Код ошибки: 691）")]) : t._e(), t._v(" "), 6 == t.type ? i("h3", [t._v("Нет DHCP сервера")]) : t._e(), t._v(" "), 8 == t.type ? i("h3", [t._v("Обнаружен конфликт IP адресов  с другим устройством")]) : t._e(), t._v(" "), 10 == t.type ? i("h3", [t._v("WAN порт или LAN порт, не работают.")]) : t._e(), t._v(" "), i("div", {
                        staticClass: "desc"
                    }, [10 == t.type ? i("ul", [i("li", [t._v("Мы предлагаем вам выполнить следующие действия, чтобы устранить проблему.")]), t._v(" "), i("li", [t._v("1. Проверьте, не включен ли VPN.")]), t._v(" "), i("li", [t._v("2. Если вы включили VPN, ваша VPN сервер может не работать, проверьте настройки VPN.")]), t._v(" "), i("li", [t._v("3. Если вы не включели VPN, проверьте, в рабочем ли состоянии ваш сетевой кабель, вы можете попробовать подключить заведомо исправный сетевой кабель и попробовать еще раз.")]), t._v(" "), i("li", [t._v("4. Если после подключения сетевого кабеля вы по-прежнему не можете выйти в Интернет. Перезагрузите маршрутизатор.")]), t._v(" "), i("li", [t._v("5. Если вы по-прежнему не можете выйти в Интернет, обратитесь к своему "), i("a", {
                        on: {
                            click: t.operators
                        }
                    }, [t._v("Провайдеру")])])]) : t._e(), t._v(" "), 9 == t.type ? i("ul", [i("li", [
						t._v("Мы предлагаем вам выполнить следующие действия, чтобы устранить проблему.")]), t._v(" "), i("li", [
						t._v("1. Обратите внимание, правильно ли подключен сетевой кабель и нет ли повреждений сетевого кабеля")]), t._v(" "), i("li", [
						t._v("2. Проверьте, исправно ли оборудование, к которомы вы подключаетесь")]), t._v(" "), i("li", [
						t._v("3. Перезагрузите маршрутизатор и дождитесь пока загорится синий индикатор. Попробуйте подключиться снова.")]), t._v(" "), i("li", [t._v("4. Пожалуйста, укажите, являются ли первые три сегмента IP-адреса вашего устройства 192.168.31. Если нет, измените настройки IP на автоматические или DHCP.")]), t._v(" "), t._m(0)]) : t._e(), t._v(" "), 8 == t.type ? i("ul", [i("li", [t._v("Мы предлагаем вам выполнить следующие действия, чтобы устранить проблему.")]), t._v(" "), i("li", [t._v("1、"), i("a", {
                        on: {
                            click: t.gotopcsetting
                        }
                    }, [t._v("1. Переключиться на режим Точка доступа")])]), t._v(" "), i("li", [t._v("2、"), i("a", {
                        on: {
                            click: t.avoidipconflict
                        }
                    }, [t._v("2. Избегайте конфликта IP адресов")])]), t._v(" "), i("li", [
						t._v("3. Если ни одно из двух вышеупомянутых решений не может решить проблему, рекомендуется перезагрузить вышестоящее устройство на 3 минуты раньше, запуска вашего маршрутизатора.")]), t._v(" "), t._m(1)]) : t._e(), t._v(" "), 0 == t.type ? i("ul", [i("li", [
						t._v("Мы предлагаем вам выполнить следующие действия, чтобы устранить проблему.")]), t._v(" "), i("li", [
						t._v("1. Перезагрузите маршрутизатор и дождитесь пока загорится синий индикатор. Попробуйте подключиться снова.")]), t._v(" "), t._m(2)]) : t._e(), t._v(" "), 1 == t.type || 6 == t.type ? i("ul", [i("li", [
						t._v("Мы предлагаем вам выполнить следующие действия, чтобы устранить проблему.")]), t._v(" "), i("li", [
						t._v("1. Пожалуйста, проверьте, подключен ли сетевой кабель к WAN порту или LAN порту маршрутизатора")]), t._v(" "), i("li", [
						t._v("2. Убедитесь, что другой конец сетевого кабеля подключен к вышестоящему устройству")]), t._v(" "), i("li", [
						t._v("3. Убедитесь, что сетевой кабель в рабочем состоянии.")]), t._v(" "), i("li", [
						t._v("4. Поменяйте порт для подключения сетевого кабеля вышестоящего устройства")]), t._v(" "), i("li", [
						t._v("5. Перезагрузите вышестоящее устройство")]), t._v(" "), i("li", [
						t._v("6. Перезагрузите маршрутизатор и дождитесь пока загорится синий индикатор. Попробуйте подключиться снова.")]), t._v(" "), i("li", [
						t._v("7. Если вы по-прежнему не можете выйти в Интернет, обратитесь к своему "), i("a", {
                        on: {
                            click: t.operators
                        }
                    }, [t._v("Провайдеру")])])]) : t._e(), t._v(" "), 3 == t.type || 4 == t.type ? i("ul", [i("li", [t._v("Мы предлагаем вам выполнить следующие действия, чтобы устранить проблему.")]), t._v(" "), i("li", [
						t._v("1. Отключите сетевой кабель от WAN порта или LAN порта, выключите маршрутизато. Подождите 10 минут и снова включите маршрутизатор. Попробуйте подключиться.")]), t._v(" "), i("li", [
						t._v("2. Если вы по-прежнему не можете получить доступ к Интернету, Обратитесь к своему "), i("a", {
                        on: {
                            click: t.operators
                        }
                    }, [t._v("Провайдеру")])])]) : t._e()]), t._v(" "), 2 == t.type ? i("ul", [i("li", {
                        staticClass: "desp"
                    }, [t._v("* Текущий адрес DNS сервера"), t.dns ? i("span", [t._v(t._s(t.dns) + "，отличается от большинства стандартных конфигураций")]) : i("span", [t._v("，")]), t._v("Проверьте конфигурацию.")]), t._v(" "), i("li", [t._v("1. Проверьте параметры DNS сервера.")]), t._v(" "), i("li", [t._v("2. Перезагрузите маршрутизатор и вышестоящее устройство.")]), t._v(" "), i("li", [t._v("3. Если вы по-прежнему не можете выйти в Интернет, обратитесь к своему "), i("a", {
                        on: {
                            click: t.operators
                        }
                    }, [t._v("Провайдеру")]), t._v("，для проверки сервера DNS")])]) : t._e(), t._v(" "), 7 == t.type ? i("ul", [i("li", {
                        staticClass: "desp"
                    }, [t._v("* Текущий IP адрес отличается от большинства стандартных конфигураций，Проверьте конфигурацию.")]), t._v(" "), i("li", [t._v("Мы предлагаем вам выполнить следующие действия, чтобы устранить проблему.")]), t._v(" "), i("li", [t._v("1. Проверьте параметры IP адреса")]), t._v(" "), i("li", [t._v("2. Перезагрузите маршрутизатор и вышестоящее устройство.")]), t._v(" "), i("li", [t._v("3. Если вы по-прежнему не можете выйти в Интернет, обратитесь к своему "), i("a", {
                        on: {
                            click: t.operators
                        }
                    }, [t._v("Провайдеру")])])]) : t._e(), t._v(" "), 5 == t.type ? i("ul", [i("li", [t._v("Мы предлагаем вам выполнить следующие действия, чтобы устранить проблему.")]), t._v(" "), i("li", [t._v("Обратитесь к своему "), i("a", {
                        on: {
                            click: t.operators
                        }
                    }, [t._v("Провайдеру")]), t._v("，для проверки учетной записи и наличия задолженности.")])]) : t._e(), t._v(" "), 3 == t.type || 4 == t.type || 5 == t.type ? i("ul", {
                        staticClass: "broad-info"
                    }, [i("li", [t._v("Информация об учетной записи")]), t._v(" "), i("li", [t._v("Имя пользователя\n          "), i("div", {
                        staticClass: "broad"
                    }, [t._v("\n            " + t._s(t.name) + "\n          ")])]), t._v(" "), i("li", [t._v("Пароль\n          "), i("div", {
                        staticClass: "broad"
                    }, [t._v("\n            " + t._s(t.password) + "\n          ")])])]) : t._e(), t._v(" "), 0 == t.type || 1 == t.type || 2 == t.type || 3 == t.type || 4 == t.type || 5 == t.type || 6 == t.type || 8 == t.type || 10 == t.type ? i("div", {
                        staticClass: "foot"
                    }, [i("button", {
                        staticClass: "btn bluewhite",
                        class: {
                            whiteblue: 0 == t.type
                        },
                        on: {
                            click: t.returnHome
                        }
                    }, [t._v("На Главную")])]) : t._e(), t._v(" "), i("div", {
                        staticClass: "foot"
                    }, [7 == t.type ? i("button", {
                        staticClass: "btn bluewhite bottom20",
                        on: {
                            click: t.gotopcsetting
                        }
                    }, [t._v("Перейдите к версии для компьютера, чтобы изменить параметры шлюза.")]) : t._e()])]), t._v(" "), t.gotopc || t.avoidip ? i("div", {
                        staticClass: "senior",
                        class: {
                            avoid: t.avoidip
                        }
                    }, [i("div", {
                        staticClass: "mask"
                    }), t._v(" "), i("div", {
                        staticClass: "dialog"
                    }, [i("i", {
                        staticClass: "close iconfont  icon-close",
                        on: {
                            click: t.close
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "content"
                    }, [t.gotopc ? i("p", [t._v("Используйте версию для ПК")]) : t._e(), t._v(" "), t.gotopc ? i("p", [t._v("Используйте расширенные функции")]) : t._e(), t._v(" "), t.avoidip ? i("p", [t._v("Избегайте конфликта IP адресов")]) : t._e(), t._v(" "), t.avoidip ? i("p", [t._v("LAN IP адрес маршрутизатора будет изменен" + t._s(t.ip) + "Во время этого процесса беспроводная сеть перезапустится, и произойдет короткое отключение.")]) : t._e()]), t._v(" "), t.gotopc ? i("div", {
                        staticClass: "gotoPCVersion",
                        on: {
                            click: t.gotoPCVersion
                        }
                    }, [t._v("\n         Перейти к версии для ПК\n       ")]) : t._e(), t._v(" "), t.avoidip ? i("div", {
                        staticClass: "gotoPCVersion",
                        on: {
                            click: t.aviodipconfirm
                        }
                    }, [t._v("\n         Подтвердить\n       ")]) : t._e()])]) : t._e(), t._v(" "), i("Toast", {
                        ref: "tip"
                    })], 1)
                },
                staticRenderFns: [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("li", [this._v("5. Если вы по-прежнему не можете выйти в Интернет, обратитесь в центр обслуживания клиентов Xiaomi."), e("a", {
                        attrs: {
                            href: "tel: 8-800-505-70-77"
                        }
                    }, [this._v("8-800-505-70-77")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("li", [this._v("4. Если вы по-прежнему не можете выйти в Интернет, обратитесь в центр обслуживания клиентов Xiaomi. "), e("a", {
                        attrs: {
                            href: "tel: 8-800-505-70-77"
                        }
                    }, [this._v("8-800-505-70-77")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("li", [this._v("2. Если вы по-прежнему не можете выйти в Интернет, обратитесь в центр обслуживания клиентов Xiaomi. "), e("a", {
                        attrs: {
                            href: "tel: 8-800-505-70-77"
                        }
                    }, [this._v("8-800-505-70-77")])])
                }]
            };
        var p = i("VU/8")(_, c, !1, function(t) {
            i("NDpP")
        }, "data-v-913bc850", null);
        e.default = p.exports
    }
});