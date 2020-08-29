webpackJsonp([28], {
    "2ejs": function(r, n, v) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var _ = {
                name: "error",
                data: function() {
                    return {}
                },
                components: {
                    Header: v("teIl").a
                }
            },
            b = {
                render: function() {
                    var r = this.$createElement,
                        n = this._self._c || r;
                    return n("div", {
                        staticClass: "content "
                    }, [n("Header", {
                        attrs: {
                            name: "Лицензионное соглашение"
                        }
                    }), this._v(" "), this._m(0)], 1)
                },
                staticRenderFns: [function() {
                    var r = this,
                        n = r.$createElement,
                        v = r._self._c || n;
                    return v("div", {
                        staticClass: "width100"
                    }, [v("p", {
                        staticClass: "title"
                    }, [r._v("Лицензионное соглашение с пользователем")]), r._v(" "), v("br"), 
						r._v("\n        【Важная информация】"), v("br"), 
						r._v("\n        Переводить данный материал крайне нудно, если очень интересно, можете ознакомиться с материалом на английском языке, на официальном сайте Xiaomi: https://www.mi.com/global/about/agreement/"), v("br"), r._v(" "), v("br"), , v("p", {
                        staticClass: "title"
                    }, [r._v("Политика конфиденциальности")]), 
						r._v("\n        Переводить данный материал крайне нудно, если очень интересно, можете ознакомиться с материалом на английском языке, на официальном сайте Xiaomi: https://www.mi.com/global/about/privacy/"), v("br"), v("br"), 
						r._v(" "), v("br")])
                }]
            };
        var t = v("VU/8")(_, b, !1, function(r) {
            v("ixPq")
        }, "data-v-7fad2e5e", null);
        n.default = t.exports
    },
    SjwP: function(r, n) {},
    ixPq: function(r, n) {},
    teIl: function(r, n, v) {
        "use strict";
        var _ = {
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
            b = {
                render: function() {
                    var r = this.$createElement,
                        n = this._self._c || r;
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
        var t = v("VU/8")(_, b, !1, function(r) {
            v("SjwP")
        }, null, null);
        n.a = t.exports
    }
});