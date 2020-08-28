webpackJsonp([26], {
    "1auw": function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = {
                name: "privacy",
                data: function() {
                    return {}
                },
                components: {
                    Header: e("teIl").a
                }
            },
            i = {
                render: function() {
                    var t = this.$createElement,
                        n = this._self._c || t;
                    return n("div", {
                        staticClass: "content "
                    }, [n("Header", {
                        attrs: {
                            name: "用户体验改善计划"
                        }
                    }), this._v(" "), this._m(0)], 1)
                },
                staticRenderFns: [function() {
                    var t = this,
                        n = t.$createElement,
                        e = t._self._c || n;
                    return e("div", {
                        staticClass: "width100"
                    }, [e("p", {
                        staticClass: "title"
                    }, [t._v("\n            重要Подсказка\n        ")]), t._v(" "), e("p", [t._v("\n            小米通讯技术有限公司（以下简称“小米”或“我们”）诚挚的邀请您加入“Redmi路由器系列产品用户体验改进计划”。为了更Принять为您提供新一代智能路由器所带来的美好智能生活，我们会根据需要对产品的各项功能的使用情况进行统计，进而通过这些统计数据更Принять完善Redmi路由器系列产品。请放心，我们像您一样厌恶个人隐私的泄露，所有统计数据仅包括您在使用Redmi路由器过程中的使用频率、方式等，这些数据以匿名的方式保存，绝不涉及用户的个人隐私数据。\n        ")]), t._v(" "), e("p", {
                        staticClass: "title"
                    }, [t._v("\n            1. 本计划的加入与退出\n        ")]), t._v(" "), e("p", [t._v("\n            您可以根据自己的意愿在本页面最下部选择是否加入本计划，加入该计划之后您可以随时退出。可以通过Redmi路由器手机APP的“设置”选项找到本计划的加入与退出入口。\n        ")]), t._v(" "), e("p", {
                        staticClass: "title"
                    }, [t._v("\n            2. 本计划的范围\n        ")]), t._v(" "), e("p", [t._v("\n            您加入计划之后所提供的匿名统计数据对于我们更Принять改善Redmi路由器的兼容性、稳定性、易用性，具体包括：\n        ")]), t._v(" "), e("p", {
                        staticClass: "strong indent"
                    }, [t._v("\n            1. 帮助您更及时的更新到Redmi路由器MiWiFi操作系统（ROM）、Redmi路由器手机应用（APP）的最新版本，更及时的修复各种可能出现的问题；\n        ")]), t._v(" "), e("p", {
                        staticClass: "strong indent"
                    }, [t._v("\n            2. 更Принять适配您的网络服务供应商（ISP）所提供的各种不同网络接入服务（ADSL、光纤等）；\n        ")]), t._v(" "), e("p", {
                        staticClass: "strong indent"
                    }, [t._v("\n            3. 帮助您更Принять了解您的网络、硬盘使用情况，确保您的Redmi路由器持续稳定的为您提供服务；\n        ")]), t._v(" "), e("p", {
                        staticClass: "strong indent"
                    }, [t._v("\n            4. 更Принять让Redmi路由器手机应用（APP）工作在您的手机上，并获得更流畅的操作体验；\n        ")]), t._v(" "), e("p", {
                        staticClass: "strong indent"
                    }, [t._v("\n            5. 帮助您更Принять使用Redmi路由器周边的其他智能Дом居设备，改善这些设备与Redmi路由器联动的相关功能；\n        ")]), t._v(" "), e("p", {
                        staticClass: "strong indent"
                    }, [t._v("\n            6. 更Принять为路由器插件系统（游戏加速、网页加速、广告拦截等）的开发者提供匿名统计信息，帮助开发者们改进插件，让您获得更Принять体验；\n        ")]), t._v(" "), e("p", {
                        staticClass: "title"
                    }, [t._v("\n            3. 本计划的更新\n        ")]), t._v(" "), e("p", [t._v("\n            根据Redmi路由器系列产品的不断改进与更新，我们有可能会对本计划进行修改，届时将会在Redmi路由器手机应用（APP）或路由器管理后台（web）的方式通知您。如果您没有改变之前的用户体验改进计划状态，即表示您接受我们的修改并且继续加入本计划。\n        ")]), t._v(" "), e("p", {
                        staticClass: "tar"
                    }, [t._v("\n            小米通讯技术有限公司 "), e("br"), t._v("2014年10月\n        ")])])
                }]
            };
        var a = e("VU/8")(s, i, !1, function(t) {
            e("6ydG")
        }, "data-v-7a43573d", null);
        n.default = a.exports
    },
    "6ydG": function(t, n) {},
    SjwP: function(t, n) {},
    teIl: function(t, n, e) {
        "use strict";
        var s = {
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
            i = {
                render: function() {
                    var t = this.$createElement,
                        n = this._self._c || t;
                    return n("div", {
                        staticClass: "header"
                    }, [n("div", {
                        staticClass: "title"
                    }, [n("span", {
                        staticClass: "iconfont fanhuijian",
                        on: {
                            click: this.back
                        }
                    }), this._v(" "), n("h3", [this._v(this._s(this.name))])])])
                },
                staticRenderFns: []
            };
        var a = e("VU/8")(s, i, !1, function(t) {
            e("SjwP")
        }, null, null);
        n.a = a.exports
    }
});