webpackJsonp([24], {
    "4uQT": function(t, e, n) {
        "use strict";
        var v = {
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
            _ = {
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
        var s = n("VU/8")(v, _, !1, function(t) {
            n("Hm6d")
        }, null, null);
        e.a = s.exports
    },
    Hm6d: function(t, e) {},
    lvEr: function(t, e) {},
    olkT: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var v = {
                name: "",
                data: function() {
                    return {
                        step: 1,
                        header: 1
                    }
                },
                components: {
                    Headers: n("4uQT").a
                },
                methods: {
                    handleBack: function(t) {
                        this.step = t
                    }
                }
            },
            _ = {
                render: function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "container"
                    }, [e("Headers", {
                        attrs: {
                            name: "帮助页",
                            step: this.step,
                            fontsize: "index"
                        },
                        on: {
                            goBack: this.handleBack
                        }
                    }), this._v(" "), this._m(0)], 1)
                },
                staticRenderFns: [function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "main"
                    }, [n("p", [t._v("情况一：主路由无法正常访问外网，\n      建议您按照以下步骤排查问题\n    ")]), t._v(" "), n("p", [t._v("1.请检查路由器电源是否接通")]), t._v(" "), n("p", [t._v("2.请确认家中是否有设备设置为静态IP， 如果没有请跳到第3步 ")]), t._v(" "), n("p", [t._v("如果有设备设置为静态IP，建议修改为动态IP（dhcp）并等待3分钟后再次确认网络状态；（设置静态IP有可能引起IP冲突，导致无法访问外网）")]), t._v(" "), n("p", [t._v("3.请确认是否有对主路由在当前时间段设置定时断网、定时关闭Wi-Fi等操作，如有请关闭该设置；如果无此类设置请继续向下排查")]), t._v(" "), n("p", [t._v("4.请确认是否有对当前手机设置定时断网、禁止联网、访问控制、黑名单等操作，如有请关闭该设置；如果无此类设置请继续向下排查 ")]), t._v(" "), n("p", [t._v("5.请检查主路由系统状态灯颜色：")]), t._v(" "), n("p", [t._v("如果主路由不是小米/Redmi路由器请检查系统状态灯是否不亮，如果不亮直接联系主路由的售后 ，如果亮请跳到第6步 ")]), t._v(" "), n("p", [t._v("如果主路由是小米/Redmi路由器则继续排查问题")]), t._v(" "), n("p", [t._v("5.1系统状态灯为蓝色常亮，则说明路由器系统正常运行中，请跳到第6步继续排查问题 ")]), t._v(" "), n("p", [t._v("5.2系统状态灯橙色常亮说明路由器正在重启，请耐心等待5分钟，不要拔下路由器电源")]), t._v(" "), n("p", [t._v("5.3橙色闪烁说明路由器正在升级，请耐心等待5分钟，不要拔下路由器电源")]), t._v(" "), n("p", [t._v("5.4系统状态灯在橙色状态下，如果超过10分钟还是无法恢复蓝灯，可尝试刷机")]), t._v(" "), n("p", [t._v("5.5红色闪烁/常亮说明路由器异常，可尝试刷机")]), t._v(" "), n("p", [t._v("5.6若还是不行，可尝试拔电重启路由器3分钟后 ，重置路由器；重置方法：长按reset键5秒")]), t._v(" "), n("p", [t._v("5.7若还是不行，请联系小米客服400-100-5678")]), t._v(" "), n("p", [t._v("6.请检查路由器WAN或Internet口是否有网线连接，是否插牢")]), t._v(" "), n("p", [t._v("7.请检查网线另一端是否连接在光猫/上级设备的LAN口 ")]), t._v(" "), n("p", [t._v("8.请检查网线是否完好")]), t._v(" "), n("p", [t._v("9.请更换光猫/上级设备的插入网线端口并插牢固")]), t._v(" "), n("p", [t._v("10.请重启光猫/上级设备 ")]), t._v(" "), n("p", [t._v("10.请重启光猫/ 上及设备 上级设备 ")]), t._v(" "), n("p", [t._v("12.若仍然无法上网，请联系您的宽带运营商")]), t._v(" "), n("br"), n("br"), n("br"), t._v(" "), n("p", [t._v("情况二：主路由可以正常访问外网，当前的中继路由外网不通")]), t._v(" "), n("p", [t._v("1.请检查路由器电源是否接通")]), t._v(" "), n("p", [t._v("2.请确认家中是否有设备设置为静态IP，如果没有请跳到第3步 ")]), t._v(" "), n("p", [t._v("如果有设备设置为静态IP，建议修改为动态IP（dhcp）并等待3分钟后再次确认网络状态；（设置静态IP有可能引起IP冲突，导致无法访问外网）")]), t._v(" "), n("p", [t._v("3.请确认是否有对当前手机设置定时断网、禁止联网、访问控制、黑名单等操作，如有请关闭该设置；如果无此类设置请继续向下排查 ")]), t._v(" "), n("p", [t._v("4.如果是有线中继")]), t._v(" "), n("p", [t._v("4.1请检查路由器WAN或Internet口是否有网线连接，是否插牢")]), t._v(" "), n("p", [t._v("4.2请检查网线另一端是否连接在光猫/上级设备的LAN口 ")]), t._v(" "), n("p", [t._v("4.3请检查网线是否完好")]), t._v(" "), n("p", [t._v("4.4请更换光猫/上级设备的插入网线端口并插牢固")]), t._v(" "), n("p", [t._v("5.如果是无线中继")]), t._v(" "), n("p", [t._v("5.1重启路由器，拔电1分钟后再接通电源；")]), t._v(" "), n("p", [t._v("5.2如果依然无法访问外网，请直接重置路由器，重新建立连接；重置方法：长按reset键5秒")]), t._v(" "), n("p", [t._v("6.若还是不行，请联系小米客服"), n("a", {
                        attrs: {
                            href: "tel:400-100-5678"
                        }
                    }, [t._v("400-100-5678")])]), t._v(" "), n("br"), n("br"), n("br")])
                }]
            };
        var s = n("VU/8")(v, _, !1, function(t) {
            n("lvEr")
        }, "data-v-880652a6", null);
        e.default = s.exports
    }
});