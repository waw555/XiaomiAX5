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
                            name: "诊断结果",
                            step: t.step,
                            fontsize: "index"
                        },
                        on: {
                            goBack: t.handleBack
                        }
                    }) : t._e(), t._v(" "), i("div", {
                        staticClass: "main"
                    }, [0 == t.type || 9 == t.type ? i("h3", [t._v("网络通信异常")]) : t._e(), t._v(" "), 1 == t.type || 7 == t.type ? i("h3", [t._v("网关不可达")]) : t._e(), t._v(" "), 2 == t.type ? i("h3", [t._v("DNS解析失败")]) : t._e(), t._v(" "), 3 == t.type ? i("h3", [t._v("同一账号重复登录（错误码678）")]) : t._e(), t._v(" "), 4 == t.type ? i("h3", [t._v("宽带账号异常 "), "none" != t.errorCode ? i("span", [t._v("（错误码" + t._s(t.errorCode) + "）")]) : t._e()]) : t._e(), t._v(" "), 5 == t.type ? i("h3", [t._v("宽带账号或密码错误（错误码691）")]) : t._e(), t._v(" "), 6 == t.type ? i("h3", [t._v("无DHCP Sever")]) : t._e(), t._v(" "), 8 == t.type ? i("h3", [t._v("检测到与上级路由器存在IP冲突")]) : t._e(), t._v(" "), 10 == t.type ? i("h3", [t._v("WAN或Internet口链路不通")]) : t._e(), t._v(" "), i("div", {
                        staticClass: "desc"
                    }, [10 == t.type ? i("ul", [i("li", [t._v("建议您按以下步骤排查问题")]), t._v(" "), i("li", [t._v("1、请检查您是否有配置VPN")]), t._v(" "), i("li", [t._v("2、如果您配置了VPN，则可能是您的VPN链路不通，请检查您的VPN设置")]), t._v(" "), i("li", [t._v("3、如果您没有配置VPN，请检查您的网线是否完好，可以尝试插拔网线再次判断状态")]), t._v(" "), i("li", [t._v("4、插拔网线后仍无法上网，请重启您的路由器")]), t._v(" "), i("li", [t._v("5、若仍然无法上网，请联系你的"), i("a", {
                        on: {
                            click: t.operators
                        }
                    }, [t._v("宽带运营商")])])]) : t._e(), t._v(" "), 9 == t.type ? i("ul", [i("li", [t._v("建议您按以下步骤排查问题")]), t._v(" "), i("li", [t._v("1、请确认网线是否插紧或损坏")]), t._v(" "), i("li", [t._v("2、请检查是否光猫或其他上级设备故障，或尝试重启光猫或其他上级设备")]), t._v(" "), i("li", [t._v("3、请重启路由器，并等待启动完成，蓝灯常亮后再尝试连接")]), t._v(" "), i("li", [t._v("4、请确认您手机的IP地址前三段是否为192.168.31，如果不是请将您的IP设置修改为自动或DHCP。\n            （查看及修改位置：手机设置-无线局域网/WLAN-当前WiFi的详情页-配置IP/IP设置）")]), t._v(" "), t._m(0)]) : t._e(), t._v(" "), 8 == t.type ? i("ul", [i("li", [t._v("建议您按以下步骤排查问题")]), t._v(" "), i("li", [t._v("1、"), i("a", {
                        on: {
                            click: t.gotopcsetting
                        }
                    }, [t._v("切换到有线中继模式")])]), t._v(" "), i("li", [t._v("2、"), i("a", {
                        on: {
                            click: t.avoidipconflict
                        }
                    }, [t._v("避让IP冲突")])]), t._v(" "), i("li", [t._v("3、若以上2种方案均无法解决该问题，建议您重启光猫/上级设备3分钟后再重启路由器")]), t._v(" "), t._m(1)]) : t._e(), t._v(" "), 0 == t.type ? i("ul", [i("li", [t._v("建议您按以下步骤排查问题")]), t._v(" "), i("li", [t._v("1. 请重启路由器，并等待启动完成，蓝灯常亮后再尝试连接")]), t._v(" "), t._m(2)]) : t._e(), t._v(" "), 1 == t.type || 6 == t.type ? i("ul", [i("li", [t._v("建议您按以下步骤排查问题")]), t._v(" "), i("li", [t._v("1、请检查路由器WAN或Internet口是否有网线连接，是否插牢")]), t._v(" "), i("li", [t._v("2、请检查网线另一端是否连接在光猫/上级设备的LAN口")]), t._v(" "), i("li", [t._v("3、请检查网线是否完好")]), t._v(" "), i("li", [t._v("4、请更换光猫/上级设备的插入网线端口并插牢固")]), t._v(" "), i("li", [t._v("5、请重启光猫/上级设备")]), t._v(" "), i("li", [t._v("6、请重启路由器，并等待启动完成（蓝灯常亮）")]), t._v(" "), i("li", [t._v("7、若仍然无法上网，请联系你的"), i("a", {
                        on: {
                            click: t.operators
                        }
                    }, [t._v("宽带运营商")])])]) : t._e(), t._v(" "), 3 == t.type || 4 == t.type ? i("ul", [i("li", [t._v("建议您按以下步骤排查问题")]), t._v(" "), i("li", [t._v("1、拔掉WAN或Internet口网线，将路由器和光猫/家庭网关断电重启，10分钟后重插网线")]), t._v(" "), i("li", [t._v("2、若仍然无法上网，请联系您的"), i("a", {
                        on: {
                            click: t.operators
                        }
                    }, [t._v("宽带运营商")])])]) : t._e()]), t._v(" "), 2 == t.type ? i("ul", [i("li", {
                        staticClass: "desp"
                    }, [t._v("*当前DNS服务器地址为"), t.dns ? i("span", [t._v(t._s(t.dns) + "，与大部分家庭配置不同，")]) : i("span", [t._v("空，")]), t._v("请确认此配置没问题")]), t._v(" "), i("li", [t._v("1、请前往修改DNS配置")]), t._v(" "), i("li", [t._v("2、请重启路由器和光猫/上级设备")]), t._v(" "), i("li", [t._v("3、若仍然无法上网，请联系您的"), i("a", {
                        on: {
                            click: t.operators
                        }
                    }, [t._v("宽带运营商")]), t._v("，确认DNS服务是否正常")])]) : t._e(), t._v(" "), 7 == t.type ? i("ul", [i("li", {
                        staticClass: "desp"
                    }, [t._v("*您当前IP地址与大部分家庭配置不同，请确认此配置没问题")]), t._v(" "), i("li", [t._v("建议您按以下步骤排查问题")]), t._v(" "), i("li", [t._v("1、请前往修改网关配置")]), t._v(" "), i("li", [t._v("2、请重启路由器和光猫/上级设备")]), t._v(" "), i("li", [t._v("3、若仍然无法上网，请联系您的"), i("a", {
                        on: {
                            click: t.operators
                        }
                    }, [t._v("宽带运营商")])])]) : t._e(), t._v(" "), 5 == t.type ? i("ul", [i("li", [t._v("建议您按以下步骤排查问题")]), t._v(" "), i("li", [t._v("请联系您的"), i("a", {
                        on: {
                            click: t.operators
                        }
                    }, [t._v("宽带运营商")]), t._v("，确认账号密码是否正确，以及是否欠费")])]) : t._e(), t._v(" "), 3 == t.type || 4 == t.type || 5 == t.type ? i("ul", {
                        staticClass: "broad-info"
                    }, [i("li", [t._v("当前宽带账号信息如下")]), t._v(" "), i("li", [t._v("宽带账号\n          "), i("div", {
                        staticClass: "broad"
                    }, [t._v("\n            " + t._s(t.name) + "\n          ")])]), t._v(" "), i("li", [t._v("宽带密码\n          "), i("div", {
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
                    }, [t._v("返回主界面")])]) : t._e(), t._v(" "), i("div", {
                        staticClass: "foot"
                    }, [7 == t.type ? i("button", {
                        staticClass: "btn bluewhite bottom20",
                        on: {
                            click: t.gotopcsetting
                        }
                    }, [t._v("前往电脑版修改网关配置")]) : t._e()])]), t._v(" "), t.gotopc || t.avoidip ? i("div", {
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
                    }, [t.gotopc ? i("p", [t._v("访问电脑版")]) : t._e(), t._v(" "), t.gotopc ? i("p", [t._v("使用更多高级功能")]) : t._e(), t._v(" "), t.avoidip ? i("p", [t._v("避让IP冲突")]) : t._e(), t._v(" "), t.avoidip ? i("p", [t._v("执行此操作，局域网IP将会变更为" + t._s(t.ip) + "该过程无线网络会重启，将出现短暂掉线。")]) : t._e()]), t._v(" "), t.gotopc ? i("div", {
                        staticClass: "gotoPCVersion",
                        on: {
                            click: t.gotoPCVersion
                        }
                    }, [t._v("\n         前往电脑版\n       ")]) : t._e(), t._v(" "), t.avoidip ? i("div", {
                        staticClass: "gotoPCVersion",
                        on: {
                            click: t.aviodipconfirm
                        }
                    }, [t._v("\n         确定\n       ")]) : t._e()])]) : t._e(), t._v(" "), i("Toast", {
                        ref: "tip"
                    })], 1)
                },
                staticRenderFns: [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("li", [this._v("5、若仍然无法上网，请联系小米客服 "), e("a", {
                        attrs: {
                            href: "tel:400-100-5678"
                        }
                    }, [this._v("400-100-5678")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("li", [this._v("4、若仍然无法上网，请联系小米客服 "), e("a", {
                        attrs: {
                            href: "tel:400-100-5678"
                        }
                    }, [this._v("400-100-5678")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("li", [this._v("2. 若还是不行，请联系小米客服 "), e("a", {
                        attrs: {
                            href: "tel:400-100-5678"
                        }
                    }, [this._v("400-100-5678")])])
                }]
            };
        var p = i("VU/8")(_, c, !1, function(t) {
            i("NDpP")
        }, "data-v-913bc850", null);
        e.default = p.exports
    }
});