! function(e, t) {
    var i = !0;
    e && "undefined" != typeof e.umd && (i = e.umd), i && "object" == typeof exports ? module.exports = t(require("jquery"), require("handlebars"), require("bootstrap")) : i && "function" == typeof define && define.amd ? define("alpaca", ["jquery", "handlebars", "bootstrap"], t) : e.Alpaca = t(e.jQuery, e.Handlebars, e.Bootstrap)
}(this, function($, Handlebars, Bootstrap) {
    return this.HandlebarsPrecompiled = this.HandlebarsPrecompiled || {}, this.HandlebarsPrecompiled["web-display"] = this.HandlebarsPrecompiled["web-display"] || {}, this.HandlebarsPrecompiled["web-display"]["container-array-item"] = Handlebars.template({
            1: function(e, t, i, n) {
                return ""
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s, o = '<script type="text/x-handlebars-template">\n\n    <div>\n        ';
                return r = null != (r = t.itemField || (null != e ? e.itemField : e)) ? r : t.helperMissing, s = {
                    name: "itemField",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.itemField || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + "\n    </div>\n\n</script>\n"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-display"]["container-array"] = Handlebars.template({
            1: function(e, t, i, n) {
                var a, r, s, o = "\n            ";
                return r = null != (r = t.item || (null != e ? e.item : e)) ? r : t.helperMissing, s = {
                    name: "item",
                    hash: {},
                    fn: this.program(2, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.item || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + "\n\n"
            },
            2: function(e, t, i, n) {
                return ""
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a;
                return '<script type="text/x-handlebars-template">\n\n    <div>\n\n' + (null != (a = t.each.call(e, null != e ? e.items : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n    </div>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-display"]["container-object-item"] = Handlebars.template({
            1: function(e, t, i, n) {
                return ""
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s, o = '<script type="text/x-handlebars-template">\n\n    <div>\n        ';
                return r = null != (r = t.itemField || (null != e ? e.itemField : e)) ? r : t.helperMissing, s = {
                    name: "itemField",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.itemField || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + "\n    </div>\n\n</script>\n"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-display"]["container-object"] = Handlebars.template({
            1: function(e, t, i, n) {
                var a, r, s, o = "\n            ";
                return r = null != (r = t.item || (null != e ? e.item : e)) ? r : t.helperMissing, s = {
                    name: "item",
                    hash: {},
                    fn: this.program(2, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.item || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + "\n\n"
            },
            2: function(e, t, i, n) {
                return ""
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a;
                return '<script type="text/x-handlebars-template">\n\n    <div>\n\n' + (null != (a = t.each.call(e, null != e ? e.items : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n    </div>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-display"]["container-table-item"] = Handlebars.template({
            1: function(e, t, i, n) {
                return ""
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a;
                return '<script type="text/x-handlebars-template">\n\n    <tr>\n        ' + (null != (a = (t.itemField || e && e.itemField || t.helperMissing).call(e, "td", {
                    name: "itemField",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n    </tr>\n\n\n</script>\n"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-display"]["container-table"] = Handlebars.template({
            1: function(e, t, i, n) {
                return ""
            },
            3: function(e, t, i, n) {
                var a;
                return "                    <th>" + this.escapeExpression(this.lambda(null != (a = null != e ? e.value : e) ? a.title : a, e)) + "</th>\n"
            },
            5: function(e, t, i, n) {
                var a;
                return "\n                " + (null != (a = (t.item || e && e.item || t.helperMissing).call(e, "tr", {
                    name: "item",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s, o = t.helperMissing,
                    l = '<script type="text/x-handlebars-template">\n\n    <div>\n\n        ';
                return r = null != (r = t.arrayToolbar || (null != e ? e.arrayToolbar : e)) ? r : o, s = {
                    name: "arrayToolbar",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.arrayToolbar || (a = t.blockHelperMissing.call(e, a, s)), null != a && (l += a), l + "\n\n        <table>\n\n            <!-- table headers -->\n            <thead>\n                <tr>\n" + (null != (a = (t.eachProperty || e && e.eachProperty || o).call(e, null != (a = null != (a = null != e ? e.schema : e) ? a.items : a) ? a.properties : a, {
                    name: "eachProperty",
                    hash: {},
                    fn: this.program(3, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "                </tr>\n            </thead>\n\n            <!-- table body -->\n            <tbody>\n" + (null != (a = t.each.call(e, null != e ? e.items : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(5, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "            </tbody>\n\n        </table>\n\n    </div>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-display"]["container-tablerow-item"] = Handlebars.template({
            1: function(e, t, i, n) {
                return ""
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s, o = '<script type="text/x-handlebars-template">\n\n    <td>\n        ';
                return r = null != (r = t.itemField || (null != e ? e.itemField : e)) ? r : t.helperMissing, s = {
                    name: "itemField",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.itemField || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + "\n    </td>\n\n</script>\n"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-display"]["container-tablerow"] = Handlebars.template({
            1: function(e, t, i, n) {
                var a, r, s, o = "            ";
                return r = null != (r = t.item || (null != e ? e.item : e)) ? r : t.helperMissing, s = {
                    name: "item",
                    hash: {},
                    fn: this.program(2, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.item || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + "\n"
            },
            2: function(e, t, i, n) {
                return ""
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a;
                return '<script type="text/x-handlebars-template">\n\n    <div class="alpaca-merge-up">\n\n' + (null != (a = t.each.call(e, null != e ? e.items : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n    </div>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-display"].container = Handlebars.template({
            1: function(e, t, i, n) {
                var a;
                return '        <legend class="' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.labelClass : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(2, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + ' alpaca-container-label">' + (null != (a = this.lambda(null != (a = null != e ? e.options : e) ? a.label : a, e)) ? a : "") + "</legend>\n"
            },
            2: function(e, t, i, n) {
                var a;
                return this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.labelClass : a, e))
            },
            4: function(e, t, i, n) {
                var a;
                return null != (a = t.each.call(e, null != (a = null != e ? e.options : e) ? a.helpers : a, {
                    name: "each",
                    hash: {},
                    fn: this.program(5, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : ""
            },
            5: function(e, t, i, n) {
                var a;
                return '        <p class="alpaca-helper ' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.helperClass : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(6, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + '">\n            <i class="alpaca-icon-helper"></i>\n            ' + (null != (a = this.lambda(e, e)) ? a : "") + "\n        </p>\n"
            },
            6: function(e, t, i, n) {
                var a;
                return this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.helperClass : a, e))
            },
            8: function(e, t, i, n) {
                return ""
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s, o = '<script type="text/x-handlebars-template">\n\n    <div>\n\n' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.label : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n" + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.helpers : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(4, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n        ";
                return r = null != (r = t.container || (null != e ? e.container : e)) ? r : t.helperMissing, s = {
                    name: "container",
                    hash: {},
                    fn: this.program(8, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.container || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + "\n\n    </div>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-display"]["control-any"] = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a;
                return '<script type="text/x-handlebars-template">\n\n    <div>' + (null != (a = (t.str || e && e.str || t.helperMissing).call(e, null != e ? e.data : e, {
                    name: "str",
                    hash: {},
                    data: n
                })) ? a : "") + "</div>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-display"]["control-checkbox"] = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a;
                return '<script type="text/x-handlebars-template">\n\n    <div>' + (null != (a = (t.str || e && e.str || t.helperMissing).call(e, null != e ? e.data : e, {
                    name: "str",
                    hash: {},
                    data: n
                })) ? a : "") + "</div>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-display"]["control-hidden"] = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                return '<script type="text/x-handlebars-template">\n\n</script>'
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-display"]["control-image"] = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r = t.helperMissing,
                    s = "function",
                    o = this.escapeExpression;
                return '<script type="text/x-handlebars-template">\n\n    <div class="alpaca-image-display">\n        <img id="' + o((a = null != (a = t.id || (null != e ? e.id : e)) ? a : r, typeof a === s ? a.call(e, {
                    name: "id",
                    hash: {},
                    data: n
                }) : a)) + '-image" src="' + o((a = null != (a = t.data || (null != e ? e.data : e)) ? a : r, typeof a === s ? a.call(e, {
                    name: "data",
                    hash: {},
                    data: n
                }) : a)) + '">\n    </div>\n\n</script>'
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-display"]["control-password"] = Handlebars.template({
            1: function(e, t, i, n) {
                return ""
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a;
                return '<script type="text/x-handlebars-template">\n\n    <div>' + (null != (a = (t.disguise || e && e.disguise || t.helperMissing).call(e, null != e ? e.data : e, "&bull;", {
                    name: "disguise",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "</div>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-display"]["control-radio"] = Handlebars.template({
            1: function(e, t, i, n, a, r) {
                var s;
                return null != (s = (t.compare || e && e.compare || t.helperMissing).call(e, null != e ? e.value : e, null != r[1] ? r[1].data : r[1], {
                    name: "compare",
                    hash: {},
                    fn: this.program(2, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : ""
            },
            2: function(e, t, i, n) {
                var a, r;
                return "                " + (null != (r = null != (r = t.text || (null != e ? e.text : e)) ? r : t.helperMissing, a = "function" == typeof r ? r.call(e, {
                    name: "text",
                    hash: {},
                    data: n
                }) : r) ? a : "") + "\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n, a, r) {
                var s;
                return '<script type="text/x-handlebars-template">\n\n    <div>\n' + (null != (s = t.each.call(e, null != e ? e.selectOptions : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(1, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "    </div>\n\n</script>\n"
            },
            useData: !0,
            useDepths: !0
        }), this.HandlebarsPrecompiled["web-display"]["control-select"] = Handlebars.template({
            1: function(e, t, i, n, a, r) {
                var s;
                return null != (s = (t.compare || e && e.compare || t.helperMissing).call(e, null != e ? e.value : e, null != r[1] ? r[1].data : r[1], {
                    name: "compare",
                    hash: {},
                    fn: this.program(2, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : ""
            },
            2: function(e, t, i, n) {
                var a, r;
                return "                " + (null != (r = null != (r = t.text || (null != e ? e.text : e)) ? r : t.helperMissing, a = "function" == typeof r ? r.call(e, {
                    name: "text",
                    hash: {},
                    data: n
                }) : r) ? a : "") + "\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n, a, r) {
                var s;
                return '<script type="text/x-handlebars-template">\n\n    <div>\n' + (null != (s = t.each.call(e, null != e ? e.selectOptions : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(1, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "    </div>\n\n</script>\n"
            },
            useData: !0,
            useDepths: !0
        }), this.HandlebarsPrecompiled["web-display"]["control-text"] = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r;
                return '<script type="text/x-handlebars-template">\n\n    <div>' + (null != (r = null != (r = t.data || (null != e ? e.data : e)) ? r : t.helperMissing, a = "function" == typeof r ? r.call(e, {
                    name: "data",
                    hash: {},
                    data: n
                }) : r) ? a : "") + "</div>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-display"]["control-textarea"] = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r;
                return '<script type="text/x-handlebars-template">\n\n    <p>\n        ' + (null != (r = null != (r = t.data || (null != e ? e.data : e)) ? r : t.helperMissing, a = "function" == typeof r ? r.call(e, {
                    name: "data",
                    hash: {},
                    data: n
                }) : r) ? a : "") + "\n    </p>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-display"]["control-url"] = Handlebars.template({
            1: function(e, t, i, n) {
                var a;
                return 'target="' + this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.anchorTarget : a, e)) + '"'
            },
            3: function(e, t, i, n) {
                var a;
                return this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.anchorTitle : a, e))
            },
            5: function(e, t, i, n) {
                var a;
                return this.escapeExpression((a = null != (a = t.data || (null != e ? e.data : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "data",
                    hash: {},
                    data: n
                }) : a))
            },
            7: function(e, t, i, n) {
                var a;
                return "            " + this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.anchorTitle : a, e)) + "\n"
            },
            9: function(e, t, i, n) {
                var a;
                return "            " + this.escapeExpression((a = null != (a = t.data || (null != e ? e.data : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "data",
                    hash: {},
                    data: n
                }) : a)) + "\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r;
                return '<script type="text/x-handlebars-template">\n\n    <div class="alpaca-control-url-anchor-wrapper">\n        <a href="' + this.escapeExpression((r = null != (r = t.data || (null != e ? e.data : e)) ? r : t.helperMissing, "function" == typeof r ? r.call(e, {
                    name: "data",
                    hash: {},
                    data: n
                }) : r)) + '" ' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.anchorTarget : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + ' title="' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.anchorTitle : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(3, n, 0),
                    inverse: this.program(5, n, 0),
                    data: n
                })) ? a : "") + '">\n' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.anchorTitle : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(7, n, 0),
                    inverse: this.program(9, n, 0),
                    data: n
                })) ? a : "") + "        </a>\n    </div>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-display"].control = Handlebars.template({
            1: function(e, t, i, n) {
                var a, r;
                return '        <label class="' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.labelClass : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(2, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + ' alpaca-control-label" for="' + this.escapeExpression((r = null != (r = t.id || (null != e ? e.id : e)) ? r : t.helperMissing, "function" == typeof r ? r.call(e, {
                    name: "id",
                    hash: {},
                    data: n
                }) : r)) + '">' + (null != (a = this.lambda(null != (a = null != e ? e.options : e) ? a.label : a, e)) ? a : "") + "</label>\n"
            },
            2: function(e, t, i, n) {
                var a;
                return this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.labelClass : a, e))
            },
            4: function(e, t, i, n) {
                return ""
            },
            6: function(e, t, i, n) {
                var a;
                return null != (a = t.each.call(e, null != (a = null != e ? e.options : e) ? a.helpers : a, {
                    name: "each",
                    hash: {},
                    fn: this.program(7, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : ""
            },
            7: function(e, t, i, n) {
                var a;
                return '        <p class="' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.helperClass : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(8, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + '">\n            <i class="info-sign"></i>\n            ' + (null != (a = this.lambda(e, e)) ? a : "") + "\n        </p>\n"
            },
            8: function(e, t, i, n) {
                var a;
                return this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.helperClass : a, e))
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s, o = '<script type="text/x-handlebars-template">\n\n    <div>\n\n' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.label : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n        ";
                return r = null != (r = t.control || (null != e ? e.control : e)) ? r : t.helperMissing, s = {
                    name: "control",
                    hash: {},
                    fn: this.program(4, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.control || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + "\n\n" + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.helpers : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(6, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n    </div>\n\n</script>\n"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-display"].form = Handlebars.template({
            1: function(e, t, i, n) {
                return ""
            },
            3: function(e, t, i, n) {
                var a;
                return null != (a = t.each.call(e, null != (a = null != e ? e.options : e) ? a.buttons : a, {
                    name: "each",
                    hash: {},
                    fn: this.program(4, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : ""
            },
            4: function(e, t, i, n) {
                var a, r, s = t.helperMissing,
                    o = "function",
                    l = this.escapeExpression;
                return '            <button data-key="' + l((r = null != (r = t.key || n && n.key) ? r : s, typeof r === o ? r.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : r)) + '" ' + (null != (a = (t.compare || e && e.compare || s).call(e, null != e ? e.type : e, "submit", {
                    name: "compare",
                    hash: {},
                    fn: this.program(5, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = (t.compare || e && e.compare || s).call(e, null != e ? e.type : e, "reset", {
                    name: "compare",
                    hash: {},
                    fn: this.program(7, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + ' class="alpaca-form-button alpaca-form-button-' + l((r = null != (r = t.key || n && n.key) ? r : s, typeof r === o ? r.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : r)) + " " + l((r = null != (r = t.styles || (null != e ? e.styles : e)) ? r : s, typeof r === o ? r.call(e, {
                    name: "styles",
                    hash: {},
                    data: n
                }) : r)) + '" ' + (null != (a = t.each.call(e, null != e ? e.value : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(9, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t.each.call(e, null != e ? e.attributes : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(11, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + ">" + (null != (r = null != (r = t.value || (null != e ? e.value : e)) ? r : s, a = typeof r === o ? r.call(e, {
                    name: "value",
                    hash: {},
                    data: n
                }) : r) ? a : "") + "</button>\n"
            },
            5: function(e, t, i, n) {
                return 'type="submit"'
            },
            7: function(e, t, i, n) {
                return 'type="reset"'
            },
            9: function(e, t, i, n) {
                var a, r = this.escapeExpression;
                return r((a = null != (a = t.key || n && n.key) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : a)) + '="' + r(this.lambda(e, e)) + '"'
            },
            11: function(e, t, i, n) {
                var a, r = this.escapeExpression;
                return " " + r((a = null != (a = t.key || n && n.key) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : a)) + '="' + r(this.lambda(e, e)) + '"'
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s, o = '<script type="text/x-handlebars-template">\n\n    <form role="form">\n\n        ';
                return r = null != (r = t.formItems || (null != e ? e.formItems : e)) ? r : t.helperMissing, s = {
                    name: "formItems",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.formItems || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + '\n\n        <div class="alpaca-form-buttons-container">\n' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.buttons : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(3, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "        </div>\n\n    </form>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-edit"] = this.HandlebarsPrecompiled["web-edit"] || {}, this.HandlebarsPrecompiled["web-edit"]["container-array-actionbar"] = Handlebars.template({
            1: function(e, t, i, n, a, r) {
                var s, o, l = this.escapeExpression;
                return '        <button class="alpaca-array-actionbar-action ' + l(this.lambda(null != (s = null != (s = null != r[1] ? r[1].view : r[1]) ? s.styles : s) ? s.smallButton : s, e)) + '" data-alpaca-array-actionbar-action="' + l((o = null != (o = t.action || (null != e ? e.action : e)) ? o : t.helperMissing, "function" == typeof o ? o.call(e, {
                    name: "action",
                    hash: {},
                    data: n
                }) : o)) + '">\n' + (null != (s = t["if"].call(e, null != e ? e.iconClass : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(2, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "            " + (null != (s = t["if"].call(e, null != e ? e.label : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(4, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "\n        </button>\n"
            },
            2: function(e, t, i, n) {
                return '            <i class="' + this.escapeExpression(this.lambda(null != e ? e.iconClass : e, e)) + '"></i>\n'
            },
            4: function(e, t, i, n) {
                var a, r;
                return null != (r = null != (r = t.label || (null != e ? e.label : e)) ? r : t.helperMissing, a = "function" == typeof r ? r.call(e, {
                    name: "label",
                    hash: {},
                    data: n
                }) : r) ? a : ""
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n, a, r) {
                var s, o, l = t.helperMissing,
                    u = "function",
                    c = this.escapeExpression;
                return '<script type="text/x-handlebars-template">\n\n    <div class="alpaca-array-actionbar alpaca-array-actionbar-' + c((o = null != (o = t.actionbarStyle || (null != e ? e.actionbarStyle : e)) ? o : l, typeof o === u ? o.call(e, {
                    name: "actionbarStyle",
                    hash: {},
                    data: n
                }) : o)) + ' btn-group" data-alpaca-array-actionbar-parent-field-id="' + c((o = null != (o = t.parentFieldId || (null != e ? e.parentFieldId : e)) ? o : l, typeof o === u ? o.call(e, {
                    name: "parentFieldId",
                    hash: {},
                    data: n
                }) : o)) + '" data-alpaca-array-actionbar-field-id="' + c((o = null != (o = t.fieldId || (null != e ? e.fieldId : e)) ? o : l, typeof o === u ? o.call(e, {
                    name: "fieldId",
                    hash: {},
                    data: n
                }) : o)) + '" data-alpaca-array-actionbar-item-index="' + c((o = null != (o = t.itemIndex || (null != e ? e.itemIndex : e)) ? o : l, typeof o === u ? o.call(e, {
                    name: "itemIndex",
                    hash: {},
                    data: n
                }) : o)) + '">\n' + (null != (s = t.each.call(e, null != e ? e.actions : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(1, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "    </div>\n\n</script>"
            },
            useData: !0,
            useDepths: !0
        }), this.HandlebarsPrecompiled["web-edit"]["container-array-item"] = Handlebars.template({
            1: function(e, t, i, n) {
                var a, r, s, o = t.helperMissing,
                    l = "function",
                    u = t.blockHelperMissing,
                    c = '        <div class="pull-left">\n            ';
                return r = null != (r = t.arrayActionbar || (null != e ? e.arrayActionbar : e)) ? r : o, s = {
                    name: "arrayActionbar",
                    hash: {},
                    fn: this.program(2, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = typeof r === l ? r.call(e, s) : r, t.arrayActionbar || (a = u.call(e, a, s)), null != a && (c += a), c += '\n        </div>\n        <div class="pull-right">\n            ', r = null != (r = t.itemField || (null != e ? e.itemField : e)) ? r : o, s = {
                    name: "itemField",
                    hash: {},
                    fn: this.program(2, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = typeof r === l ? r.call(e, s) : r, t.itemField || (a = u.call(e, a, s)), null != a && (c += a), c + '\n        </div>\n        <div class="clear"></div>\n'
            },
            2: function(e, t, i, n) {
                return ""
            },
            4: function(e, t, i, n) {
                var a;
                return null != (a = (t.compare || e && e.compare || t.helperMissing).call(e, null != e ? e.actionbarStyle : e, "right", {
                    name: "compare",
                    hash: {},
                    fn: this.program(5, n, 0),
                    inverse: this.program(7, n, 0),
                    data: n
                })) ? a : ""
            },
            5: function(e, t, i, n) {
                var a, r, s, o = t.helperMissing,
                    l = "function",
                    u = t.blockHelperMissing,
                    c = '            <div class="pull-left">\n                ';
                return r = null != (r = t.itemField || (null != e ? e.itemField : e)) ? r : o, s = {
                    name: "itemField",
                    hash: {},
                    fn: this.program(2, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = typeof r === l ? r.call(e, s) : r, t.itemField || (a = u.call(e, a, s)), null != a && (c += a), c += '\n            </div>\n            <div class="pull-right">\n                ', r = null != (r = t.arrayActionbar || (null != e ? e.arrayActionbar : e)) ? r : o, s = {
                    name: "arrayActionbar",
                    hash: {},
                    fn: this.program(2, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = typeof r === l ? r.call(e, s) : r, t.arrayActionbar || (a = u.call(e, a, s)), null != a && (c += a), c + '\n            </div>\n            <div class="alpaca-clear"></div>\n'
            },
            7: function(e, t, i, n) {
                var a, r, s, o = t.helperMissing,
                    l = "            <div>\n\n" + (null != (a = (t.compare || e && e.compare || o).call(e, null != e ? e.actionbarStyle : e, "top", {
                        name: "compare",
                        hash: {},
                        fn: this.program(8, n, 0),
                        inverse: this.noop,
                        data: n
                    })) ? a : "") + "\n                ";
                return r = null != (r = t.itemField || (null != e ? e.itemField : e)) ? r : o, s = {
                    name: "itemField",
                    hash: {},
                    fn: this.program(2, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.itemField || (a = t.blockHelperMissing.call(e, a, s)), null != a && (l += a), l + "\n\n" + (null != (a = (t.compare || e && e.compare || o).call(e, null != e ? e.actionbarStyle : e, "bottom", {
                    name: "compare",
                    hash: {},
                    fn: this.program(8, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n            </div>\n"
            },
            8: function(e, t, i, n) {
                var a, r, s, o = "                ";
                return r = null != (r = t.arrayActionbar || (null != e ? e.arrayActionbar : e)) ? r : t.helperMissing, s = {
                    name: "arrayActionbar",
                    hash: {},
                    fn: this.program(2, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.arrayActionbar || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + "\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a;
                return '<script type="text/x-handlebars-template">\n\n    <div>\n' + (null != (a = (t.compare || e && e.compare || t.helperMissing).call(e, null != e ? e.actionbarStyle : e, "left", {
                    name: "compare",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.program(4, n, 0),
                    data: n
                })) ? a : "") + "    </div>\n\n</script>\n"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-edit"]["container-array-toolbar"] = Handlebars.template({
            1: function(e, t, i, n) {
                return " btn-group"
            },
            3: function(e, t, i, n, a, r) {
                var s, o = t.helperMissing;
                return "\n" + (null != (s = (t.compare || e && e.compare || o).call(e, null != r[1] ? r[1].toolbarStyle : r[1], "link", {
                    name: "compare",
                    hash: {},
                    fn: this.program(4, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "\n" + (null != (s = (t.compare || e && e.compare || o).call(e, null != r[1] ? r[1].toolbarStyle : r[1], "button", {
                    name: "compare",
                    hash: {},
                    fn: this.program(6, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "\n"
            },
            4: function(e, t, i, n, a, r) {
                var s, o = this.lambda;
                return '                <a href="#" class="alpaca-array-toolbar-action" data-alpaca-array-toolbar-action="' + this.escapeExpression(o(null != r[1] ? r[1].action : r[1], e)) + '">' + (null != (s = o(null != r[1] ? r[1].label : r[1], e)) ? s : "") + "</a>\n"
            },
            6: function(e, t, i, n, a, r) {
                var s, o = this.lambda,
                    l = this.escapeExpression;
                return '                <button class="alpaca-array-toolbar-action ' + l(o(null != (s = null != (s = null != r[2] ? r[2].view : r[2]) ? s.styles : s) ? s.smallButton : s, e)) + '" data-alpaca-array-toolbar-action="' + l(o(null != r[1] ? r[1].action : r[1], e)) + '">\n' + (null != (s = t["if"].call(e, null != r[1] ? r[1].iconClass : r[1], {
                    name: "if",
                    hash: {},
                    fn: this.program(7, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "                    " + (null != (s = t["if"].call(e, null != r[1] ? r[1].label : r[1], {
                    name: "if",
                    hash: {},
                    fn: this.program(9, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "\n                </button>\n"
            },
            7: function(e, t, i, n, a, r) {
                return '                    <i class="' + this.escapeExpression(this.lambda(null != r[1] ? r[1].iconClass : r[1], e)) + '"></i>\n'
            },
            9: function(e, t, i, n, a, r) {
                var s;
                return null != (s = this.lambda(null != r[1] ? r[1].label : r[1], e)) ? s : ""
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n, a, r) {
                var s, o, l = t.helperMissing;
                return '<script type="text/x-handlebars-template">\n\n    <div class="alpaca-array-toolbar" data-alpaca-array-toolbar-field-id="' + this.escapeExpression((o = null != (o = t.id || (null != e ? e.id : e)) ? o : l, "function" == typeof o ? o.call(e, {
                    name: "id",
                    hash: {},
                    data: n
                }) : o)) + '" ' + (null != (s = (t.compare || e && e.compare || l).call(e, null != e ? e.toolbarStyle : e, "button", {
                    name: "compare",
                    hash: {},
                    fn: this.program(1, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + ">\n\n" + (null != (s = t.each.call(e, null != e ? e.actions : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(3, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "\n    </div>\n\n</script>"
            },
            useData: !0,
            useDepths: !0
        }), this.HandlebarsPrecompiled["web-edit"]["container-array"] = Handlebars.template({
            1: function(e, t, i, n) {
                return ""
            },
            3: function(e, t, i, n) {
                var a, r, s, o = "\n            ";
                return r = null != (r = t.item || (null != e ? e.item : e)) ? r : t.helperMissing, s = {
                    name: "item",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.item || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + "\n\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s, o = '<script type="text/x-handlebars-template">\n\n    <div>\n\n        ';
                return r = null != (r = t.arrayToolbar || (null != e ? e.arrayToolbar : e)) ? r : t.helperMissing, s = {
                    name: "arrayToolbar",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.arrayToolbar || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + "\n\n" + (null != (a = t.each.call(e, null != e ? e.items : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(3, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n    </div>\n\n</script>\n"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-edit"]["container-object-item"] = Handlebars.template({
            1: function(e, t, i, n) {
                return ""
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s, o = '<script type="text/x-handlebars-template">\n\n    <div>\n\n        ';
                return r = null != (r = t.itemField || (null != e ? e.itemField : e)) ? r : t.helperMissing, s = {
                    name: "itemField",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.itemField || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + "\n\n    </div>\n\n</script>\n"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-edit"]["container-object"] = Handlebars.template({
            1: function(e, t, i, n) {
                var a, r, s, o = "\n            ";
                return r = null != (r = t.item || (null != e ? e.item : e)) ? r : t.helperMissing, s = {
                    name: "item",
                    hash: {},
                    fn: this.program(2, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.item || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + "\n\n"
            },
            2: function(e, t, i, n) {
                return ""
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a;
                return '<script type="text/x-handlebars-template">\n\n    <div>\n\n' + (null != (a = t.each.call(e, null != e ? e.items : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n    </div>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-edit"]["container-table-item"] = Handlebars.template({
            1: function(e, t, i, n) {
                return ""
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a;
                return '<script type="text/x-handlebars-template">\n\n    <tr>\n        ' + (null != (a = (t.itemField || e && e.itemField || t.helperMissing).call(e, "td", {
                    name: "itemField",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n    </tr>\n\n\n</script>\n"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-edit"]["container-table"] = Handlebars.template({
            1: function(e, t, i, n) {
                return ""
            },
            3: function(e, t, i, n) {
                var a, r, s = t.helperMissing,
                    o = "function";
                return '                    <th data-header-id="' + this.escapeExpression((r = null != (r = t.id || (null != e ? e.id : e)) ? r : s, typeof r === o ? r.call(e, {
                    name: "id",
                    hash: {},
                    data: n
                }) : r)) + '" ' + (null != (a = t["if"].call(e, null != e ? e.hidden : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(4, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + ">" + (null != (r = null != (r = t.title || (null != e ? e.title : e)) ? r : s, a = typeof r === o ? r.call(e, {
                    name: "title",
                    hash: {},
                    data: n
                }) : r) ? a : "") + "</th>\n"
            },
            4: function(e, t, i, n) {
                return 'class="alpaca-table-column-hidden"'
            },
            6: function(e, t, i, n) {
                return "                        <th>Actions</th>\n"
            },
            8: function(e, t, i, n) {
                var a;
                return "\n                " + (null != (a = (t.item || e && e.item || t.helperMissing).call(e, "tr", {
                    name: "item",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s, o = '<script type="text/x-handlebars-template">\n\n    <div>\n\n        ';
                return r = null != (r = t.arrayToolbar || (null != e ? e.arrayToolbar : e)) ? r : t.helperMissing, s = {
                    name: "arrayToolbar",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.arrayToolbar || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + "\n\n        <table>\n\n            <!-- table headers -->\n            <thead>\n                <tr>\n" + (null != (a = t.each.call(e, null != e ? e.headers : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(3, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n" + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.showActionsColumn : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(6, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "                </tr>\n            </thead>\n\n            <!-- table body -->\n            <tbody>\n" + (null != (a = t.each.call(e, null != e ? e.items : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(8, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "            </tbody>\n\n        </table>\n\n    </div>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-edit"]["container-tablerow-item"] = Handlebars.template({
            1: function(e, t, i, n) {
                return ""
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s, o = '<script type="text/x-handlebars-template">\n\n    <td>\n        ';
                return r = null != (r = t.itemField || (null != e ? e.itemField : e)) ? r : t.helperMissing, s = {
                    name: "itemField",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.itemField || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + "\n    </td>\n\n</script>\n"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-edit"]["container-tablerow"] = Handlebars.template({
            1: function(e, t, i, n) {
                var a;
                return null != (a = t["if"].call(e, null != e ? e.hidden : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(2, n, 0),
                    inverse: this.program(4, n, 0),
                    data: n
                })) ? a : ""
            },
            2: function(e, t, i, n) {
                return ""
            },
            4: function(e, t, i, n) {
                var a, r, s, o = "                ";

                return r = null != (r = t.item || (null != e ? e.item : e)) ? r : t.helperMissing, s = {
                    name: "item",
                    hash: {},
                    fn: this.program(2, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.item || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + "\n"
            },
            6: function(e, t, i, n) {
                var a, r, s, o = '            <div class="alpaca-merge-up">\n                ';
                return r = null != (r = t.arrayActionbar || (null != e ? e.arrayActionbar : e)) ? r : t.helperMissing, s = {
                    name: "arrayActionbar",
                    hash: {},
                    fn: this.program(2, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.arrayActionbar || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + "\n            </div>\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a;
                return '<script type="text/x-handlebars-template">\n\n    <div class="alpaca-merge-up">\n\n' + (null != (a = t.each.call(e, null != e ? e.items : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n        <!-- actions cell -->\n" + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.showActionsColumn : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(6, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n    </div>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-edit"].container = Handlebars.template({
            1: function(e, t, i, n) {
                var a;
                return '        <legend class="' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.labelClass : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(2, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + ' alpaca-container-label">' + (null != (a = this.lambda(null != (a = null != e ? e.options : e) ? a.label : a, e)) ? a : "") + "</legend>\n"
            },
            2: function(e, t, i, n) {
                var a;
                return this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.labelClass : a, e))
            },
            4: function(e, t, i, n) {
                var a;
                return null != (a = t.each.call(e, null != (a = null != e ? e.options : e) ? a.helpers : a, {
                    name: "each",
                    hash: {},
                    fn: this.program(5, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : ""
            },
            5: function(e, t, i, n) {
                var a;
                return '        <p class="alpaca-helper ' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.helperClass : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(6, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + '">\n            <i class="alpaca-icon-helper"></i>\n            ' + (null != (a = this.lambda(e, e)) ? a : "") + "\n        </p>\n"
            },
            6: function(e, t, i, n) {
                var a;
                return this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.helperClass : a, e))
            },
            8: function(e, t, i, n) {
                return ""
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s, o = '<script type="text/x-handlebars-template">\n\n    <div>\n\n' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.label : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n" + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.helpers : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(4, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n        ";
                return r = null != (r = t.container || (null != e ? e.container : e)) ? r : t.helperMissing, s = {
                    name: "container",
                    hash: {},
                    fn: this.program(8, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.container || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + "\n\n    </div>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-edit"]["control-any"] = Handlebars.template({
            1: function(e, t, i, n) {
                return 'readonly="readonly"'
            },
            3: function(e, t, i, n) {
                var a;
                return 'name="' + this.escapeExpression((a = null != (a = t.name || (null != e ? e.name : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "name",
                    hash: {},
                    data: n
                }) : a)) + '"'
            },
            5: function(e, t, i, n) {
                var a, r = this.escapeExpression;
                return "data-" + r((a = null != (a = t.key || n && n.key) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : a)) + '="' + r(this.lambda(e, e)) + '"'
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r;
                return '<script type="text/x-handlebars-template">\n\n    <input type="text" id="' + this.escapeExpression((r = null != (r = t.id || (null != e ? e.id : e)) ? r : t.helperMissing, "function" == typeof r ? r.call(e, {
                    name: "id",
                    hash: {},
                    data: n
                }) : r)) + '" size="40" ' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.readonly : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t["if"].call(e, null != e ? e.name : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(3, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t.each.call(e, null != (a = null != e ? e.options : e) ? a.data : a, {
                    name: "each",
                    hash: {},
                    fn: this.program(5, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "/>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-edit"]["control-checkbox"] = Handlebars.template({
            1: function(e, t, i, n, a, r) {
                var s;
                return "\n" + (null != (s = t.each.call(e, null != e ? e.checkboxOptions : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(2, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "\n"
            },
            2: function(e, t, i, n, a, r) {
                var s, o, l = t.helperMissing,
                    u = "function",
                    c = this.escapeExpression;
                return '\n            <div>\n\n                <label>\n\n                    <input type="checkbox" data-checkbox-index="' + c((o = null != (o = t.index || n && n.index) ? o : l, typeof o === u ? o.call(e, {
                    name: "index",
                    hash: {},
                    data: n
                }) : o)) + '" data-checkbox-value="' + c((o = null != (o = t.value || (null != e ? e.value : e)) ? o : l, typeof o === u ? o.call(e, {
                    name: "value",
                    hash: {},
                    data: n
                }) : o)) + '" ' + (null != (s = t["if"].call(e, null != (s = null != r[2] ? r[2].options : r[2]) ? s.readonly : s, {
                    name: "if",
                    hash: {},
                    fn: this.program(3, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + " " + (null != (s = t["if"].call(e, null != e ? e.name : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(5, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + " " + (null != (s = t.each.call(e, null != (s = null != r[2] ? r[2].options : r[2]) ? s.data : s, {
                    name: "each",
                    hash: {},
                    fn: this.program(7, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "/>\n                    " + (null != (o = null != (o = t.text || (null != e ? e.text : e)) ? o : l, s = typeof o === u ? o.call(e, {
                    name: "text",
                    hash: {},
                    data: n
                }) : o) ? s : "") + "\n\n                </label>\n            </div>\n\n"
            },
            3: function(e, t, i, n) {
                return 'readonly="readonly"'
            },
            5: function(e, t, i, n) {
                var a;
                return 'name="' + this.escapeExpression((a = null != (a = t.name || (null != e ? e.name : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "name",
                    hash: {},
                    data: n
                }) : a)) + '"'
            },
            7: function(e, t, i, n) {
                var a, r = t.helperMissing,
                    s = "function",
                    o = this.escapeExpression;
                return "data-" + o((a = null != (a = t.key || n && n.key) ? a : r, typeof a === s ? a.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : a)) + '="' + o((a = null != (a = t.value || (null != e ? e.value : e)) ? a : r, typeof a === s ? a.call(e, {
                    name: "value",
                    hash: {},
                    data: n
                }) : a)) + '"'
            },
            9: function(e, t, i, n) {
                var a;
                return '\n        <div>\n\n            <label>\n\n                <input type="checkbox" ' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.readonly : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(3, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t["if"].call(e, null != e ? e.name : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(5, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t.each.call(e, null != (a = null != e ? e.options : e) ? a.data : a, {
                    name: "each",
                    hash: {},
                    fn: this.program(7, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "/>\n\n                " + (null != (a = this.lambda(null != (a = null != e ? e.options : e) ? a.rightLabel : a, e)) ? a : "") + "\n            </label>\n\n        </div>\n\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n, a, r) {
                var s;
                return '<script type="text/x-handlebars-template">\n\n' + (null != (s = t["if"].call(e, null != (s = null != e ? e.options : e) ? s.multiple : s, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0, a, r),
                    inverse: this.program(9, n, 0, a, r),
                    data: n
                })) ? s : "") + "\n</script>\n"
            },
            useData: !0,
            useDepths: !0
        }), this.HandlebarsPrecompiled["web-edit"]["control-ckeditor"] = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a;
                return '<script type="text/x-handlebars-template">\n\n    <textarea id="' + this.escapeExpression((a = null != (a = t.id || (null != e ? e.id : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "id",
                    hash: {},
                    data: n
                }) : a)) + '" cols="80" rows="10">\n    </textarea>\n\n</script>'
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-edit"]["control-editor"] = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a;
                return '<script type="text/x-handlebars-template">\n\n    <div id="' + this.escapeExpression((a = null != (a = t.id || (null != e ? e.id : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "id",
                    hash: {},
                    data: n
                }) : a)) + '" class="control-field-editor-el"></div>\n\n</script>'
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-edit"]["control-file"] = Handlebars.template({
            1: function(e, t, i, n) {
                var a;
                return 'size="' + this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.size : a, e)) + '"'
            },
            3: function(e, t, i, n) {
                return 'readonly="readonly"'
            },
            5: function(e, t, i, n) {
                var a;
                return 'name="' + this.escapeExpression((a = null != (a = t.name || (null != e ? e.name : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "name",
                    hash: {},
                    data: n
                }) : a)) + '"'
            },
            7: function(e, t, i, n) {
                var a, r = this.escapeExpression;
                return "data-" + r((a = null != (a = t.key || n && n.key) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : a)) + '="' + r(this.lambda(e, e)) + '"'
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r;
                return '<script type="text/x-handlebars-template">\n\n    <input type="file" id="' + this.escapeExpression((r = null != (r = t.id || (null != e ? e.id : e)) ? r : t.helperMissing, "function" == typeof r ? r.call(e, {
                    name: "id",
                    hash: {},
                    data: n
                }) : r)) + '" ' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.size : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.readonly : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(3, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t["if"].call(e, null != e ? e.name : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(5, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t.each.call(e, null != (a = null != e ? e.options : e) ? a.data : a, {
                    name: "each",
                    hash: {},
                    fn: this.program(7, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "/>\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-edit"]["control-hidden"] = Handlebars.template({
            1: function(e, t, i, n) {
                var a;
                return 'name="' + this.escapeExpression((a = null != (a = t.name || (null != e ? e.name : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "name",
                    hash: {},
                    data: n
                }) : a)) + '"'
            },
            3: function(e, t, i, n) {
                var a, r = this.escapeExpression;
                return "data-" + r((a = null != (a = t.key || n && n.key) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : a)) + '="' + r(this.lambda(e, e)) + '"'
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r;
                return '<script type="text/x-handlebars-template">\n\n    <input type="hidden" id="' + this.escapeExpression((r = null != (r = t.id || (null != e ? e.id : e)) ? r : t.helperMissing, "function" == typeof r ? r.call(e, {
                    name: "id",
                    hash: {},
                    data: n
                }) : r)) + '" ' + (null != (a = t["if"].call(e, null != e ? e.name : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t.each.call(e, null != (a = null != e ? e.options : e) ? a.data : a, {
                    name: "each",
                    hash: {},
                    fn: this.program(3, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "/>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-edit"]["control-image"] = Handlebars.template({
            1: function(e, t, i, n) {
                var a;
                return 'placeholder="' + this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.placeholder : a, e)) + '"'
            },
            3: function(e, t, i, n) {
                var a;
                return 'size="' + this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.size : a, e)) + '"'
            },
            5: function(e, t, i, n) {
                return 'readonly="readonly"'
            },
            7: function(e, t, i, n) {
                var a;
                return 'name="' + this.escapeExpression((a = null != (a = t.name || (null != e ? e.name : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "name",
                    hash: {},
                    data: n
                }) : a)) + '"'
            },
            9: function(e, t, i, n) {
                var a, r = this.escapeExpression;
                return "data-" + r((a = null != (a = t.key || n && n.key) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : a)) + '="' + r(this.lambda(e, e)) + '"'
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s = t.helperMissing,
                    o = "function",
                    l = this.escapeExpression;
                return '<script type="text/x-handlebars-template">\n\n    <input type="text" id="' + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : s, typeof r === o ? r.call(e, {
                    name: "id",
                    hash: {},
                    data: n
                }) : r)) + '" ' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.placeholder : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.size : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(3, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.readonly : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(5, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t["if"].call(e, null != e ? e.name : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(7, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t.each.call(e, null != (a = null != e ? e.options : e) ? a.data : a, {
                    name: "each",
                    hash: {},
                    fn: this.program(9, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + '/>\n\n    <div class="alpaca-image-display">\n        <h5>Preview</h5>\n        <img id="' + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : s, typeof r === o ? r.call(e, {
                    name: "id",
                    hash: {},
                    data: n
                }) : r)) + '-image" src="' + l((r = null != (r = t.data || (null != e ? e.data : e)) ? r : s, typeof r === o ? r.call(e, {
                    name: "data",
                    hash: {},
                    data: n
                }) : r)) + '">\n    </div>\n\n</script>'
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-edit"]["control-optiontree"] = Handlebars.template({
            1: function(e, t, i, n) {
                var a;
                return 'placeholder="' + this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.placeholder : a, e)) + '"'
            },
            3: function(e, t, i, n) {
                var a;
                return 'size="' + this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.size : a, e)) + '"'
            },
            5: function(e, t, i, n) {
                return 'readonly="readonly"'
            },
            7: function(e, t, i, n) {
                var a;
                return 'name="' + this.escapeExpression((a = null != (a = t.name || (null != e ? e.name : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "name",
                    hash: {},
                    data: n
                }) : a)) + '"'
            },
            9: function(e, t, i, n) {
                var a, r = this.escapeExpression;
                return "data-" + r((a = null != (a = t.key || n && n.key) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : a)) + '="' + r(this.lambda(e, e)) + '"'
            },
            11: function(e, t, i, n) {
                var a, r = this.escapeExpression;
                return r((a = null != (a = t.key || n && n.key) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : a)) + '="' + r(this.lambda(e, e)) + '"'
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s = t.helperMissing,
                    o = "function",
                    l = this.escapeExpression;
                return '<script type="text/x-handlebars-template">\n\n    <div class="optiontree"></div>\n\n    <input type="' + l((r = null != (r = t.inputType || (null != e ? e.inputType : e)) ? r : s, typeof r === o ? r.call(e, {
                    name: "inputType",
                    hash: {},
                    data: n
                }) : r)) + '" id="' + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : s, typeof r === o ? r.call(e, {
                    name: "id",
                    hash: {},
                    data: n
                }) : r)) + '" ' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.placeholder : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.size : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(3, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.readonly : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(5, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t["if"].call(e, null != e ? e.name : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(7, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t.each.call(e, null != (a = null != e ? e.options : e) ? a.data : a, {
                    name: "each",
                    hash: {},
                    fn: this.program(9, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t.each.call(e, null != (a = null != e ? e.options : e) ? a.attributes : a, {
                    name: "each",
                    hash: {},
                    fn: this.program(11, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "/>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-edit"]["control-password"] = Handlebars.template({
            1: function(e, t, i, n) {
                var a;
                return 'placeholder="' + this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.placeholder : a, e)) + '"'
            },
            3: function(e, t, i, n) {
                var a;
                return 'size="' + this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.size : a, e)) + '"'
            },
            5: function(e, t, i, n) {
                return 'readonly="readonly"'
            },
            7: function(e, t, i, n) {
                var a;
                return 'name="' + this.escapeExpression((a = null != (a = t.name || (null != e ? e.name : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "name",
                    hash: {},
                    data: n
                }) : a)) + '"'
            },
            9: function(e, t, i, n) {
                var a, r = this.escapeExpression;
                return "data-" + r((a = null != (a = t.key || n && n.key) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : a)) + '="' + r(this.lambda(e, e)) + '"'
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r;
                return '<script type="text/x-handlebars-template">\n\n    <input type="password" id="' + this.escapeExpression((r = null != (r = t.id || (null != e ? e.id : e)) ? r : t.helperMissing, "function" == typeof r ? r.call(e, {
                    name: "id",
                    hash: {},
                    data: n
                }) : r)) + '" ' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.placeholder : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.size : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(3, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.readonly : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(5, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t["if"].call(e, null != e ? e.name : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(7, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t.each.call(e, null != (a = null != e ? e.options : e) ? a.data : a, {
                    name: "each",
                    hash: {},
                    fn: this.program(9, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "/>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-edit"]["control-radio"] = Handlebars.template({
            1: function(e, t, i, n) {
                return ""
            },
            3: function(e, t, i, n) {
                var a, r, s = t.helperMissing,
                    o = "function";
                return '    <div class="radio">\n        <label>\n            <input type="radio" ' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.readonly : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(4, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + ' name="' + this.escapeExpression((r = null != (r = t.name || (null != e ? e.name : e)) ? r : s, typeof r === o ? r.call(e, {
                    name: "name",
                    hash: {},
                    data: n
                }) : r)) + '" value=""/>' + (null != (r = null != (r = t.noneLabel || (null != e ? e.noneLabel : e)) ? r : s, a = typeof r === o ? r.call(e, {
                    name: "noneLabel",
                    hash: {},
                    data: n
                }) : r) ? a : "") + "\n        </label>\n    </div>\n"
            },
            4: function(e, t, i, n) {
                return 'readonly="readonly"'
            },
            6: function(e, t, i, n, a, r) {
                var s, o, l = this.escapeExpression,
                    u = t.helperMissing,
                    c = "function";
                return '    <div class="radio">\n        <label>\n            <input type="radio" ' + (null != (s = t["if"].call(e, null != (s = null != r[1] ? r[1].options : r[1]) ? s.readonly : s, {
                    name: "if",
                    hash: {},
                    fn: this.program(4, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + ' name="' + l(this.lambda(null != r[1] ? r[1].name : r[1], e)) + '" value="' + l((o = null != (o = t.value || (null != e ? e.value : e)) ? o : u, typeof o === c ? o.call(e, {
                    name: "value",
                    hash: {},
                    data: n
                }) : o)) + '" ' + (null != (s = (t.compare || e && e.compare || u).call(e, null != e ? e.value : e, null != r[1] ? r[1].data : r[1], {
                    name: "compare",
                    hash: {},
                    fn: this.program(7, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "/>" + (null != (o = null != (o = t.text || (null != e ? e.text : e)) ? o : u, s = typeof o === c ? o.call(e, {
                    name: "text",
                    hash: {},
                    data: n
                }) : o) ? s : "") + "\n        </label>\n    </div>\n"
            },
            7: function(e, t, i, n) {
                return 'checked="checked"'
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n, a, r) {
                var s;
                return '<script type="text/x-handlebars-template">\n\n' + (null != (s = t["if"].call(e, null != e ? e.hideNone : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0, a, r),
                    inverse: this.program(3, n, 0, a, r),
                    data: n
                })) ? s : "") + "\n" + (null != (s = t.each.call(e, null != e ? e.selectOptions : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(6, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "\n</script>"
            },
            useData: !0,
            useDepths: !0
        }), this.HandlebarsPrecompiled["web-edit"]["control-select"] = Handlebars.template({
            1: function(e, t, i, n) {
                return 'readonly="readonly"'
            },
            3: function(e, t, i, n) {
                return 'multiple="multiple"'
            },
            5: function(e, t, i, n) {
                var a;
                return 'size="' + this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.size : a, e)) + '"'
            },
            7: function(e, t, i, n) {
                var a;
                return 'name="' + this.escapeExpression((a = null != (a = t.name || (null != e ? e.name : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "name",
                    hash: {},
                    data: n
                }) : a)) + '"'
            },
            9: function(e, t, i, n, a, r) {
                var s;
                return "\n" + (null != (s = t["if"].call(e, null != e ? e.hideNone : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(10, n, 0, a, r),
                    inverse: this.program(12, n, 0, a, r),
                    data: n
                })) ? s : "") + "\n" + (null != (s = t.each.call(e, null != e ? e.selectOptions : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(14, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "\n"
            },
            10: function(e, t, i, n) {
                return ""
            },
            12: function(e, t, i, n) {
                var a, r;
                return '        <option value="">' + (null != (r = null != (r = t.noneLabel || (null != e ? e.noneLabel : e)) ? r : t.helperMissing, a = "function" == typeof r ? r.call(e, {
                    name: "noneLabel",
                    hash: {},
                    data: n
                }) : r) ? a : "") + "</option>\n"
            },
            14: function(e, t, i, n, a, r) {
                var s, o, l = t.helperMissing,
                    u = "function";
                return '        <option value="' + (null != (o = null != (o = t.value || (null != e ? e.value : e)) ? o : l, s = typeof o === u ? o.call(e, {
                    name: "value",
                    hash: {},
                    data: n
                }) : o) ? s : "") + '" ' + (null != (s = t.each.call(e, null != r[1] ? r[1].data : r[1], {
                    name: "each",
                    hash: {},
                    fn: this.program(15, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + ">" + this.escapeExpression((o = null != (o = t.text || (null != e ? e.text : e)) ? o : l, typeof o === u ? o.call(e, {
                    name: "text",
                    hash: {},
                    data: n
                }) : o)) + "</option>\n"
            },
            15: function(e, t, i, n, a, r) {
                var s;
                return null != (s = (t.compare || e && e.compare || t.helperMissing).call(e, null != e ? e.value : e, null != r[2] ? r[2].value : r[2], {
                    name: "compare",
                    hash: {},
                    fn: this.program(16, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : ""
            },
            16: function(e, t, i, n) {
                return 'selected="selected"'
            },
            18: function(e, t, i, n, a, r) {
                var s;
                return "\n" + (null != (s = t["if"].call(e, null != e ? e.hideNone : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(10, n, 0, a, r),
                    inverse: this.program(12, n, 0, a, r),
                    data: n
                })) ? s : "") + "\n" + (null != (s = t.each.call(e, null != e ? e.selectOptions : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(19, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "\n"
            },
            19: function(e, t, i, n, a, r) {
                var s, o, l = t.helperMissing,
                    u = "function";
                return '        <option value="' + (null != (o = null != (o = t.value || (null != e ? e.value : e)) ? o : l, s = typeof o === u ? o.call(e, {
                    name: "value",
                    hash: {},
                    data: n
                }) : o) ? s : "") + '" ' + (null != (s = (t.compare || e && e.compare || l).call(e, null != e ? e.value : e, null != r[2] ? r[2].data : r[2], {
                    name: "compare",
                    hash: {},
                    fn: this.program(16, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + ">" + this.escapeExpression((o = null != (o = t.text || (null != e ? e.text : e)) ? o : l, typeof o === u ? o.call(e, {
                    name: "text",
                    hash: {},
                    data: n
                }) : o)) + "</option>\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n, a, r) {
                var s, o;
                return '<script type="text/x-handlebars-template">\n\n    <select id="' + this.escapeExpression((o = null != (o = t.id || (null != e ? e.id : e)) ? o : t.helperMissing, "function" == typeof o ? o.call(e, {
                    name: "id",
                    hash: {},
                    data: n
                }) : o)) + '" ' + (null != (s = t["if"].call(e, null != (s = null != e ? e.options : e) ? s.readonly : s, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + " " + (null != (s = t["if"].call(e, null != (s = null != e ? e.options : e) ? s.multiple : s, {
                    name: "if",
                    hash: {},
                    fn: this.program(3, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + " " + (null != (s = t["if"].call(e, null != (s = null != e ? e.options : e) ? s.size : s, {
                    name: "if",
                    hash: {},
                    fn: this.program(5, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + " " + (null != (s = t["if"].call(e, null != e ? e.name : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(7, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + ">\n\n" + (null != (s = t["if"].call(e, null != (s = null != e ? e.options : e) ? s.multiple : s, {
                    name: "if",
                    hash: {},
                    fn: this.program(9, n, 0, a, r),
                    inverse: this.program(18, n, 0, a, r),
                    data: n
                })) ? s : "") + "\n    </select>\n\n</script>"
            },
            useData: !0,
            useDepths: !0
        }), this.HandlebarsPrecompiled["web-edit"]["control-text"] = Handlebars.template({
            1: function(e, t, i, n) {
                var a;
                return 'placeholder="' + this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.placeholder : a, e)) + '"'
            },
            3: function(e, t, i, n) {
                var a;
                return 'size="' + this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.size : a, e)) + '"'
            },
            5: function(e, t, i, n) {
                return 'readonly="readonly"'
            },
            7: function(e, t, i, n) {
                var a;
                return 'name="' + this.escapeExpression((a = null != (a = t.name || (null != e ? e.name : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "name",
                    hash: {},
                    data: n
                }) : a)) + '"'
            },
            9: function(e, t, i, n) {
                var a, r = this.escapeExpression;
                return "data-" + r((a = null != (a = t.key || n && n.key) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : a)) + '="' + r(this.lambda(e, e)) + '"'
            },
            11: function(e, t, i, n) {
                var a, r = this.escapeExpression;
                return r((a = null != (a = t.key || n && n.key) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : a)) + '="' + r(this.lambda(e, e)) + '"'
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s = t.helperMissing,
                    o = "function",
                    l = this.escapeExpression;
                return '<script type="text/x-handlebars-template">\n\n    <input type="' + l((r = null != (r = t.inputType || (null != e ? e.inputType : e)) ? r : s, typeof r === o ? r.call(e, {
                    name: "inputType",
                    hash: {},
                    data: n
                }) : r)) + '" id="' + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : s, typeof r === o ? r.call(e, {
                    name: "id",
                    hash: {},
                    data: n
                }) : r)) + '" ' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.placeholder : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.size : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(3, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.readonly : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(5, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t["if"].call(e, null != e ? e.name : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(7, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t.each.call(e, null != (a = null != e ? e.options : e) ? a.data : a, {
                    name: "each",
                    hash: {},
                    fn: this.program(9, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t.each.call(e, null != (a = null != e ? e.options : e) ? a.attributes : a, {
                    name: "each",
                    hash: {},
                    fn: this.program(11, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "/>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-edit"]["control-textarea"] = Handlebars.template({
            1: function(e, t, i, n) {
                var a;
                return 'placeholder="' + this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.placeholder : a, e)) + '"'
            },
            3: function(e, t, i, n) {
                var a;
                return 'rows="' + this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.rows : a, e)) + '"'
            },
            5: function(e, t, i, n) {
                var a;
                return 'cols="' + this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.cols : a, e)) + '"'
            },
            7: function(e, t, i, n) {
                return 'readonly="readonly"'
            },
            9: function(e, t, i, n) {
                var a;
                return 'name="' + this.escapeExpression((a = null != (a = t.name || (null != e ? e.name : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "name",
                    hash: {},
                    data: n
                }) : a)) + '"'
            },
            11: function(e, t, i, n) {
                var a, r, s = t.helperMissing,
                    o = "function";
                return "data-" + this.escapeExpression((r = null != (r = t.fieldId || (null != e ? e.fieldId : e)) ? r : s, typeof r === o ? r.call(e, {
                    name: "fieldId",
                    hash: {},
                    data: n
                }) : r)) + '="' + (null != (r = null != (r = t.value || (null != e ? e.value : e)) ? r : s, a = typeof r === o ? r.call(e, {
                    name: "value",
                    hash: {},
                    data: n
                }) : r) ? a : "") + '"'
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r;
                return '<script type="text/x-handlebars-template">\n\n    <textarea id="' + this.escapeExpression((r = null != (r = t.id || (null != e ? e.id : e)) ? r : t.helperMissing, "function" == typeof r ? r.call(e, {
                    name: "id",
                    hash: {},
                    data: n
                }) : r)) + '" ' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.placeholder : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.rows : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(3, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.cols : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(5, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.readonly : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(7, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t["if"].call(e, null != e ? e.name : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(9, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t.each.call(e, null != (a = null != e ? e.options : e) ? a.data : a, {
                    name: "each",
                    hash: {},
                    fn: this.program(11, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "/>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-edit"]["control-url"] = Handlebars.template({
            1: function(e, t, i, n) {
                var a;
                return 'placeholder="' + this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.placeholder : a, e)) + '"'
            },
            3: function(e, t, i, n) {
                var a;
                return 'size="' + this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.size : a, e)) + '"'
            },
            5: function(e, t, i, n) {
                return 'readonly="readonly"'
            },
            7: function(e, t, i, n) {
                var a;
                return 'name="' + this.escapeExpression((a = null != (a = t.name || (null != e ? e.name : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "name",
                    hash: {},
                    data: n
                }) : a)) + '"'
            },
            9: function(e, t, i, n) {
                var a, r = this.escapeExpression;
                return "data-" + r((a = null != (a = t.key || n && n.key) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : a)) + '="' + r(this.lambda(e, e)) + '"'
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r;
                return '<script type="text/x-handlebars-template">\n\n    <input type="text" id="' + this.escapeExpression((r = null != (r = t.id || (null != e ? e.id : e)) ? r : t.helperMissing, "function" == typeof r ? r.call(e, {
                    name: "id",
                    hash: {},
                    data: n
                }) : r)) + '" ' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.placeholder : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.size : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(3, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.readonly : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(5, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t["if"].call(e, null != e ? e.name : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(7, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t.each.call(e, null != (a = null != e ? e.options : e) ? a.data : a, {
                    name: "each",
                    hash: {},
                    fn: this.program(9, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "/>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-edit"].control = Handlebars.template({
            1: function(e, t, i, n) {
                var a, r;
                return '        <label class="' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.labelClass : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(2, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + ' alpaca-control-label" for="' + this.escapeExpression((r = null != (r = t.id || (null != e ? e.id : e)) ? r : t.helperMissing, "function" == typeof r ? r.call(e, {
                    name: "id",
                    hash: {},
                    data: n
                }) : r)) + '">' + (null != (a = this.lambda(null != (a = null != e ? e.options : e) ? a.label : a, e)) ? a : "") + "</label>\n"
            },
            2: function(e, t, i, n) {
                var a;
                return this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.labelClass : a, e))
            },
            4: function(e, t, i, n) {
                return ""
            },
            6: function(e, t, i, n) {
                var a;
                return null != (a = t.each.call(e, null != (a = null != e ? e.options : e) ? a.helpers : a, {
                    name: "each",
                    hash: {},
                    fn: this.program(7, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : ""
            },
            7: function(e, t, i, n) {
                var a;
                return '        <p class="' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.helperClass : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(8, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + '">\n            <i class="info-sign"></i>\n            ' + (null != (a = this.lambda(e, e)) ? a : "") + "\n        </p>\n"
            },
            8: function(e, t, i, n) {
                var a;
                return this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.helperClass : a, e))
            },
            10: function(e, t, i, n) {
                var a;
                return null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.buttons : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(11, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : ""
            },
            11: function(e, t, i, n) {
                var a;
                return '            <div class="alpaca-control-buttons-container">\n' + (null != (a = t.each.call(e, null != (a = null != e ? e.options : e) ? a.buttons : a, {
                    name: "each",
                    hash: {},
                    fn: this.program(12, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "            </div>\n"
            },
            12: function(e, t, i, n) {
                var a, r, s = t.helperMissing,
                    o = "function",
                    l = this.escapeExpression;
                return '                <button data-key="' + l((r = null != (r = t.key || n && n.key) ? r : s, typeof r === o ? r.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : r)) + '" type="' + l((r = null != (r = t.type || (null != e ? e.type : e)) ? r : s, typeof r === o ? r.call(e, {
                    name: "type",
                    hash: {},
                    data: n
                }) : r)) + '" class="alpaca-control-button alpaca-control-button-' + l((r = null != (r = t.key || n && n.key) ? r : s, typeof r === o ? r.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : r)) + " " + l((r = null != (r = t.styles || (null != e ? e.styles : e)) ? r : s, typeof r === o ? r.call(e, {
                    name: "styles",
                    hash: {},
                    data: n
                }) : r)) + '" ' + (null != (a = t.each.call(e, null != e ? e.value : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(13, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + ">" + (null != (r = null != (r = t.value || (null != e ? e.value : e)) ? r : s, a = typeof r === o ? r.call(e, {
                    name: "value",
                    hash: {},
                    data: n
                }) : r) ? a : "") + "</button>\n"
            },
            13: function(e, t, i, n) {
                var a, r = t.helperMissing,
                    s = "function",
                    o = this.escapeExpression;
                return o((a = null != (a = t.key || n && n.key) ? a : r, typeof a === s ? a.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : a)) + '="' + o((a = null != (a = t.value || (null != e ? e.value : e)) ? a : r, typeof a === s ? a.call(e, {
                    name: "value",
                    hash: {},
                    data: n
                }) : a)) + '" '
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s, o = '<script type="text/x-handlebars-template">\n\n    <div>\n\n' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.label : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n        ";
                return r = null != (r = t.control || (null != e ? e.control : e)) ? r : t.helperMissing, s = {
                    name: "control",
                    hash: {},
                    fn: this.program(4, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.control || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + "\n\n" + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.helpers : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(6, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n" + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.renderButtons : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(10, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n    </div>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-edit"].form = Handlebars.template({
            1: function(e, t, i, n) {
                return ""
            },
            3: function(e, t, i, n) {
                var a;
                return null != (a = t.each.call(e, null != (a = null != e ? e.options : e) ? a.buttons : a, {
                    name: "each",
                    hash: {},
                    fn: this.program(4, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : ""
            },
            4: function(e, t, i, n) {
                var a, r, s = t.helperMissing,
                    o = "function",
                    l = this.escapeExpression;
                return '                    <button data-key="' + l((r = null != (r = t.key || n && n.key) ? r : s, typeof r === o ? r.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : r)) + '" type="' + l((r = null != (r = t.type || (null != e ? e.type : e)) ? r : s, typeof r === o ? r.call(e, {
                    name: "type",
                    hash: {},
                    data: n
                }) : r)) + '" ' + (null != (a = t["if"].call(e, null != e ? e.id : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(5, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + ' class="alpaca-form-button alpaca-form-button-' + l((r = null != (r = t.key || n && n.key) ? r : s, typeof r === o ? r.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : r)) + " " + l((r = null != (r = t.styles || (null != e ? e.styles : e)) ? r : s, typeof r === o ? r.call(e, {
                    name: "styles",
                    hash: {},
                    data: n
                }) : r)) + '" ' + (null != (a = t.each.call(e, null != e ? e.value : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(7, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + " " + (null != (a = t.each.call(e, null != e ? e.attributes : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(9, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + ">" + (null != (r = null != (r = t.value || (null != e ? e.value : e)) ? r : s, a = typeof r === o ? r.call(e, {
                    name: "value",
                    hash: {},
                    data: n
                }) : r) ? a : "") + "</button>\n"
            },
            5: function(e, t, i, n) {
                var a;
                return 'id="' + this.escapeExpression((a = null != (a = t.id || (null != e ? e.id : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "id",
                    hash: {},
                    data: n
                }) : a)) + '"'
            },
            7: function(e, t, i, n) {
                var a, r = this.escapeExpression;
                return r((a = null != (a = t.key || n && n.key) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : a)) + '="' + r(this.lambda(e, e)) + '"'
            },
            9: function(e, t, i, n) {
                var a, r = this.escapeExpression;
                return " " + r((a = null != (a = t.key || n && n.key) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : a)) + '="' + r(this.lambda(e, e)) + '"'
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s, o = '<script type="text/x-handlebars-template">\n\n    <form role="form">\n\n        ';
                return r = null != (r = t.formItems || (null != e ? e.formItems : e)) ? r : t.helperMissing, s = {
                    name: "formItems",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.formItems || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + '\n\n        <div class="alpaca-form-buttons-container">\n' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.buttons : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(3, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "        </div>\n\n    </form>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-edit"].message = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s = t.helperMissing,
                    o = "function";
                return '<script type="text/x-handlebars-template">\n\n    <div class="alpaca-message alpaca-message-' + (null != (r = null != (r = t.id || (null != e ? e.id : e)) ? r : s, a = typeof r === o ? r.call(e, {
                    name: "id",
                    hash: {},
                    data: n
                }) : r) ? a : "") + '">\n        ' + (null != (r = null != (r = t.message || (null != e ? e.message : e)) ? r : s, a = typeof r === o ? r.call(e, {
                    name: "message",
                    hash: {},
                    data: n
                }) : r) ? a : "") + "\n    </div>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["web-edit"].wizard = Handlebars.template({
            1: function(e, t, i, n) {
                var a;
                return '        <div class="alpaca-wizard-nav">\n            <nav class="navbar navbar-default" role="navigation">\n                <div class="container-fluid alpaca-wizard-back">\n                    <ul class="nav navbar-nav">\n' + (null != (a = t.each.call(e, null != e ? e.steps : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(2, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "                    </ul>\n                </div>\n            </nav>\n        </div>\n"
            },
            2: function(e, t, i, n) {
                var a, r, s = t.helperMissing,
                    o = "function";
                return '                        <li data-alpaca-wizard-step-index="' + this.escapeExpression((r = null != (r = t.index || n && n.index) ? r : s, typeof r === o ? r.call(e, {
                    name: "index",
                    hash: {},
                    data: n
                }) : r)) + '">\n                            <div class="holder">\n                                <div class="title">' + (null != (r = null != (r = t.title || (null != e ? e.title : e)) ? r : s, a = typeof r === o ? r.call(e, {
                    name: "title",
                    hash: {},
                    data: n
                }) : r) ? a : "") + '</div>\n                                <div class="description">' + (null != (r = null != (r = t.description || (null != e ? e.description : e)) ? r : s, a = typeof r === o ? r.call(e, {
                    name: "description",
                    hash: {},
                    data: n
                }) : r) ? a : "") + '</div>\n                            </div>\n                            <div class="chevron"></div>\n                        </li>\n'
            },
            4: function(e, t, i, n) {
                return '        <div class="alpaca-wizard-progress-bar">\n            <div class="progress">\n                <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">\n                </div>\n            </div>\n        </div>\n'
            },
            6: function(e, t, i, n) {
                var a, r;
                return "            <h3>" + (null != (r = null != (r = t.wizardTitle || (null != e ? e.wizardTitle : e)) ? r : t.helperMissing, a = "function" == typeof r ? r.call(e, {
                    name: "wizardTitle",
                    hash: {},
                    data: n
                }) : r) ? a : "") + "</h3>\n"
            },
            8: function(e, t, i, n) {
                var a, r;
                return "            <h4>" + (null != (r = null != (r = t.wizardDescription || (null != e ? e.wizardDescription : e)) ? r : t.helperMissing, a = "function" == typeof r ? r.call(e, {
                    name: "wizardDescription",
                    hash: {},
                    data: n
                }) : r) ? a : "") + "</h4>\n"
            },
            10: function(e, t, i, n, a, r) {
                var s;
                return null != (s = (t.compare || e && e.compare || t.helperMissing).call(e, null != e ? e.align : e, "left", {
                    name: "compare",
                    hash: {},
                    fn: this.program(11, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : ""
            },
            11: function(e, t, i, n, a, r) {
                var s, o, l = t.helperMissing,
                    u = "function",
                    c = this.escapeExpression;
                return '                        <button type="' + c((o = null != (o = t.type || (null != e ? e.type : e)) ? o : l, typeof o === u ? o.call(e, {
                    name: "type",
                    hash: {},
                    data: n
                }) : o)) + '" ' + (null != (s = t["if"].call(e, null != e ? e.id : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(12, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + ' class="' + c(this.lambda(null != (s = null != (s = null != r[2] ? r[2].view : r[2]) ? s.styles : s) ? s.button : s, e)) + '" data-alpaca-wizard-button-key="' + c((o = null != (o = t.key || n && n.key) ? o : l, typeof o === u ? o.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : o)) + '" ' + (null != (s = t.each.call(e, null != e ? e.attributes : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(14, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + ">" + (null != (o = null != (o = t.title || (null != e ? e.title : e)) ? o : l, s = typeof o === u ? o.call(e, {
                    name: "title",
                    hash: {},
                    data: n
                }) : o) ? s : "") + "</button>\n"
            },
            12: function(e, t, i, n) {
                var a;
                return 'id="' + this.escapeExpression((a = null != (a = t.id || (null != e ? e.id : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "id",
                    hash: {},
                    data: n
                }) : a)) + '"'
            },
            14: function(e, t, i, n) {
                var a, r = this.escapeExpression;
                return " " + r((a = null != (a = t.key || n && n.key) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : a)) + '="' + r(this.lambda(e, e)) + '"'
            },
            16: function(e, t, i, n, a, r) {
                var s;
                return null != (s = (t.compare || e && e.compare || t.helperMissing).call(e, null != e ? e.align : e, "right", {
                    name: "compare",
                    hash: {},
                    fn: this.program(11, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : ""
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n, a, r) {
                var s;
                return '<script type="text/x-handlebars-template">\n\n    <div class="alpaca-wizard">\n\n        <!-- nav bar -->\n' + (null != (s = t["if"].call(e, null != e ? e.showSteps : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "\n        <!-- wizard progress bar -->\n" + (null != (s = t["if"].call(e, null != e ? e.showProgressBar : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(4, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "\n" + (null != (s = t["if"].call(e, null != e ? e.wizardTitle : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(6, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + (null != (s = t["if"].call(e, null != e ? e.wizardDescription : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(8, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + '\n        <!-- wizard steps -->\n        <div class="alpaca-wizard-steps">\n\n        </div>\n\n        <!-- wizard buttons -->\n        <div class="alpaca-wizard-buttons">\n\n            <div class="pull-left">\n' + (null != (s = t.each.call(e, null != e ? e.buttons : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(10, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + '            </div>\n\n            <div class="pull-right">\n' + (null != (s = t.each.call(e, null != e ? e.buttons : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(16, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + '            </div>\n\n            <div style="clear:both"></div>\n\n        </div>\n\n    </div>\n\n</script>'
            },
            useData: !0,
            useDepths: !0
        }), this.HandlebarsPrecompiled["bootstrap-display"] = this.HandlebarsPrecompiled["bootstrap-display"] || {}, this.HandlebarsPrecompiled["bootstrap-display"].container = Handlebars.template({
            1: function(e, t, i, n) {
                var a;
                return '        <legend class="' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.labelClass : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(2, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + 'alpaca-container-label">\n\n' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.collapsible : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(4, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n            " + (null != (a = this.lambda(null != (a = null != e ? e.options : e) ? a.label : a, e)) ? a : "") + "\n\n" + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.collapsible : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(6, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n        </legend>\n"
            },
            2: function(e, t, i, n) {
                var a;
                return this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.labelClass : a, e)) + " "
            },
            4: function(e, t, i, n) {
                return '            <span data-toggle="collapse">\n'
            },
            6: function(e, t, i, n) {
                return "            </span>\n"
            },
            8: function(e, t, i, n) {
                var a;
                return null != (a = t.each.call(e, null != (a = null != e ? e.options : e) ? a.helpers : a, {
                    name: "each",
                    hash: {},
                    fn: this.program(9, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : ""
            },
            9: function(e, t, i, n) {
                var a;
                return '        <p class="alpaca-helper help-block ' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.helperClass : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(10, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + '">\n            <i class="alpaca-icon-16 glyphicon glyphicon-info-sign"></i>\n            ' + (null != (a = this.lambda(e, e)) ? a : "") + "\n        </p>\n"
            },
            10: function(e, t, i, n) {
                var a;
                return this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.helperClass : a, e))
            },
            12: function(e, t, i, n) {
                return ""
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s, o = '<script type="text/x-handlebars-template">\n\n    <div>\n\n' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.label : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n" + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.helpers : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(8, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n        ";
                return r = null != (r = t.container || (null != e ? e.container : e)) ? r : t.helperMissing, s = {
                    name: "container",
                    hash: {},
                    fn: this.program(12, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.container || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + "\n\n    </div>\n\n</script>\n"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["bootstrap-display"]["control-radio"] = Handlebars.template({
            1: function(e, t, i, n, a, r) {
                var s;
                return null != (s = (t.compare || e && e.compare || t.helperMissing).call(e, null != e ? e.value : e, null != r[1] ? r[1].data : r[1], {
                    name: "compare",
                    hash: {},
                    fn: this.program(2, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : ""
            },
            2: function(e, t, i, n) {
                var a, r;
                return "                " + (null != (r = null != (r = t.text || (null != e ? e.text : e)) ? r : t.helperMissing, a = "function" == typeof r ? r.call(e, {
                    name: "text",
                    hash: {},
                    data: n
                }) : r) ? a : "") + "\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n, a, r) {
                var s;
                return '<script type="text/x-handlebars-template">\n\n    <div>\n' + (null != (s = t.each.call(e, null != e ? e.selectOptions : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(1, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "    </div>\n\n</script>\n"
            },
            useData: !0,
            useDepths: !0
        }), this.HandlebarsPrecompiled["bootstrap-display"]["control-select"] = Handlebars.template({
            1: function(e, t, i, n, a, r) {
                var s;
                return null != (s = (t.compare || e && e.compare || t.helperMissing).call(e, null != e ? e.value : e, null != r[1] ? r[1].data : r[1], {
                    name: "compare",
                    hash: {},
                    fn: this.program(2, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : ""
            },
            2: function(e, t, i, n) {
                var a, r;
                return "            " + (null != (r = null != (r = t.text || (null != e ? e.text : e)) ? r : t.helperMissing, a = "function" == typeof r ? r.call(e, {
                    name: "text",
                    hash: {},
                    data: n
                }) : r) ? a : "") + "\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n, a, r) {
                var s;
                return '<script type="text/x-handlebars-template">\n\n    <div>\n' + (null != (s = t.each.call(e, null != e ? e.selectOptions : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(1, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "    </div>\n\n</script>\n"
            },
            useData: !0,
            useDepths: !0
        }), this.HandlebarsPrecompiled["bootstrap-display"]["control-upload-partial-download"] = Handlebars.template({
            1: function(e, t, i, n) {
                var a, r = this.lambda,
                    s = this.escapeExpression;
                return '        <td></td>\n        <td class="name">\n            <span>' + s(r(null != (a = null != e ? e.file : e) ? a.name : a, e)) + '</span>\n        </td>\n        <td class="size">\n            <span>' + s(r(null != (a = null != e ? e.file : e) ? a.size : a, e)) + '</span>\n        </td>\n        <td class="error" colspan="2">\n            Error:\n            ' + s(r(null != (a = null != e ? e.file : e) ? a.error : a, e)) + "\n        </td>\n"
            },
            3: function(e, t, i, n) {
                var a, r = this.lambda,
                    s = this.escapeExpression;
                return '        <td class="preview">\n' + (null != (a = t["if"].call(e, null != (a = null != e ? e.file : e) ? a.thumbnailUrl : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(4, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + '        </td>\n        <td class="name">\n            <a href="' + s(r(null != (a = null != e ? e.file : e) ? a.url : a, e)) + '" title="' + s(r(null != (a = null != e ? e.file : e) ? a.name : a, e)) + '" data-gallery="' + s(r(null != (a = null != e ? e.file : e) ? a.thumbnailUrl : a, e)) + 'gallery" download="' + s(r(null != (a = null != e ? e.file : e) ? a.name : a, e)) + '">' + s(r(null != (a = null != e ? e.file : e) ? a.name : a, e)) + '</a>\n        </td>\n        <td class="size"><span>' + s(r(null != (a = null != e ? e.file : e) ? a.size : a, e)) + '</span></td>\n        <td colspan="2"></td>\n'
            },
            4: function(e, t, i, n) {
                var a, r = this.lambda,
                    s = this.escapeExpression;
                return '            <a href="' + s(r(null != (a = null != e ? e.file : e) ? a.url : a, e)) + '" title="' + s(r(null != (a = null != e ? e.file : e) ? a.name : a, e)) + '" data-gallery="gallery" download="' + s(r(null != (a = null != e ? e.file : e) ? a.name : a, e)) + '">\n                <img src="' + s(r(null != (a = null != e ? e.file : e) ? a.thumbnailUrl : a, e)) + '">\n            </a>\n'
            },
            6: function(e, t, i, n, a, r) {
                var s;
                return null != (s = t.each.call(e, null != e ? e.buttons : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(7, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : ""
            },
            7: function(e, t, i, n, a, r) {
                var s;
                return null != (s = t["if"].call(e, null != e ? e.isDelete : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(8, n, 0, a, r),
                    inverse: this.program(10, n, 0, a, r),
                    data: n
                })) ? s : ""
            },
            8: function(e, t, i, n, a, r) {
                var s = this.lambda,
                    o = this.escapeExpression;
                return '                        <button class="delete btn btn-danger" data-file-index="' + o(s(null != r[3] ? r[3].fileIndex : r[3], e)) + '" data-button-key="' + o(s(null != r[1] ? r[1].key : r[1], e)) + '">\n                            <i class="glyphicon glyphicon-trash glyphicon-white"></i>\n                        </button>\n'
            },
            10: function(e, t, i, n, a, r) {
                var s, o, l = t.helperMissing,
                    u = "function",
                    c = this.escapeExpression,
                    p = this.lambda;
                return '                        <button class="' + c((o = null != (o = t.key || (null != e ? e.key : e)) ? o : l, typeof o === u ? o.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : o)) + " btn " + c((o = null != (o = t.buttonClass || (null != e ? e.buttonClass : e)) ? o : l, typeof o === u ? o.call(e, {
                    name: "buttonClass",
                    hash: {},
                    data: n
                }) : o)) + '" data-file-index="' + c(p(null != r[3] ? r[3].fileIndex : r[3], e)) + '" data-button-key="' + c(p(null != r[1] ? r[1].key : r[1], e)) + '">\n' + (null != (s = t["if"].call(e, null != e ? e.iconClass : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(11, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + (null != (s = t["if"].call(e, null != e ? e.label : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(13, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "                        </button>\n"
            },
            11: function(e, t, i, n) {
                var a;
                return '                                <i class="' + this.escapeExpression((a = null != (a = t.iconClass || (null != e ? e.iconClass : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "iconClass",
                    hash: {},
                    data: n
                }) : a)) + '"></i>\n'
            },
            13: function(e, t, i, n) {
                var a;
                return "                                " + this.escapeExpression((a = null != (a = t.label || (null != e ? e.label : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "label",
                    hash: {},
                    data: n
                }) : a)) + "\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n, a, r) {
                var s;
                return '<script type="text/x-handlebars-template">\n\n    <tr class="template-download">\n' + (null != (s = t["if"].call(e, null != (s = null != e ? e.file : e) ? s.error : s, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0, a, r),
                    inverse: this.program(3, n, 0, a, r),
                    data: n
                })) ? s : "") + "        <td>\n" + (null != (s = t["if"].call(e, null != e ? e.buttons : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(6, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "        </td>\n    </tr>\n\n</script>"
            },
            useData: !0,
            useDepths: !0
        }), this.HandlebarsPrecompiled["bootstrap-display"]["control-upload-partial-upload"] = Handlebars.template({
            1: function(e, t, i, n) {
                return '        <td class="preview">\n            <span class="fade"></span>\n        </td>\n'
            },
            3: function(e, t, i, n) {
                return "        <td></td>\n"
            },
            5: function(e, t, i, n) {
                var a;
                return '        <td class="error" colspan="2"><span class="label label-important">Error</span> ' + this.escapeExpression(this.lambda(null != (a = null != e ? e.file : e) ? a.error : a, e)) + "</td>\n"
            },
            7: function(e, t, i, n) {
                var a;
                return null != (a = t["if"].call(e, null != (a = null != e ? e.file : e) ? a.valid : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(8, n, 0),
                    inverse: this.program(15, n, 0),
                    data: n
                })) ? a : ""
            },
            8: function(e, t, i, n) {
                var a;
                return (null != (a = (t.compare || e && e.compare || t.helperMissing).call(e, n && n.index, 0, {
                    name: "compare",
                    hash: {},
                    fn: this.program(9, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + '            <td class="start">\n' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.autoUpload : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(11, n, 0),
                    inverse: this.program(13, n, 0),
                    data: n
                })) ? a : "") + "            </td>\n"
            },
            9: function(e, t, i, n) {
                return '                <td>\n                    <div class="progress progress-success progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">\n                        <div class="progress-bar" style="width:0%;"></div>\n                    </div>\n                </td>\n'
            },
            11: function(e, t, i, n) {
                return ""
            },
            13: function(e, t, i, n) {
                return '                <button class="btn btn-primary"> \\\n                    <i class="glyphicon glyphicon-upload glyphicon-white"></i>\n                    <span>Start</span>\n                </button>\n'
            },
            15: function(e, t, i, n) {
                var a;
                return '            <td></td>\n            <td class="cancel">\n' + (null != (a = (t.compare || e && e.compare || t.helperMissing).call(e, n && n.index, 0, {
                    name: "compare",
                    hash: {},
                    fn: this.program(16, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "            </td>\n"
            },
            16: function(e, t, i, n) {
                return '                <button class="btn btn-warning">\n                    <i class="glyphicon glyphicon-ban-circle glyphicon-white"></i>\n                    <span>Cancel</span>\n                </button>\n'
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r = this.lambda,
                    s = this.escapeExpression;
                return '<script type="text/x-handlebars-template">\n\n    <tr class="template-upload">\n\n' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.showUploadPreview : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.program(3, n, 0),
                    data: n
                })) ? a : "") + '\n        <td class="name"><span>' + s(r(null != (a = null != e ? e.file : e) ? a.name : a, e)) + '</span></td>\n        <td class="size"><span>' + s(r(null != (a = null != e ? e.file : e) ? a.size : a, e)) + "</span></td>\n\n" + (null != (a = t["if"].call(e, null != (a = null != e ? e.file : e) ? a.error : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(5, n, 0),
                    inverse: this.program(7, n, 0),
                    data: n
                })) ? a : "") + "        <td></td>\n    </tr>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["bootstrap-display"]["control-upload"] = Handlebars.template({
            1: function(e, t, i, n) {
                var a;
                return this.escapeExpression((a = null != (a = t.cssClasses || (null != e ? e.cssClasses : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "cssClasses",
                    hash: {},
                    data: n
                }) : a))
            },
            3: function(e, t, i, n) {
                var a;
                return "                        <thead>\n                            <tr>\n" + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.showUploadPreview : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(4, n, 0),
                    inverse: this.program(6, n, 0),
                    data: n
                })) ? a : "") + '                                <td>Name</td>\n                                <td>Size</td>\n                                <td colspan="2"></td><!-- error or start or progress indicator -->\n                                <td>Actions</td>\n                            </tr>\n                        </thead>\n'
            },
            4: function(e, t, i, n) {
                return "                                    <td>Thumbnail</td>\n"
            },
            6: function(e, t, i, n) {
                return "                                    <td></td>\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s = this.escapeExpression,
                    o = t.helperMissing,
                    l = "function";
                return '<script type="text/x-handlebars-template">\n\n    <div class="alpaca-fileupload-container ' + (null != (a = t["if"].call(e, null != e ? e.cssClasses : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + '">\n        <div class="container-fluid">\n            <div class="row alpaca-fileupload-chooserow">\n                <div class="col-md-12">\n                    <div class="btn-group">\n                        <span class="' + s(this.lambda(null != (a = null != (a = null != e ? e.view : e) ? a.styles : a) ? a.button : a, e)) + ' fileinput-button">\n                            <i class="glyphicon glyphicon-upload"></i>\n                            <span class="fileupload-add-button">' + s((r = null != (r = t.chooseButtonLabel || (null != e ? e.chooseButtonLabel : e)) ? r : o, typeof r === l ? r.call(e, {
                    name: "chooseButtonLabel",
                    hash: {},
                    data: n
                }) : r)) + '</span>\n                            <input class="alpaca-fileupload-input" type="file" name="' + s((r = null != (r = t.name || (null != e ? e.name : e)) ? r : o, typeof r === l ? r.call(e, {
                    name: "name",
                    hash: {},
                    data: n
                }) : r)) + '_files">\n                            <input class="alpaca-fileupload-input-hidden" type="hidden" name="' + s((r = null != (r = t.name || (null != e ? e.name : e)) ? r : o, typeof r === l ? r.call(e, {
                    name: "name",
                    hash: {},
                    data: n
                }) : r)) + '_files_hidden">\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <div class="row alpaca-fileupload-well">\n                <div class="col-md-12 fileupload-active-zone">\n                    <table class="table table-striped">\n' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.showHeaders : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(3, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + '                        <tbody class="files">\n                        </tbody>\n                    </table>\n                    <p align="center" class="dropzone-message">' + s((r = null != (r = t.dropZoneMessage || (null != e ? e.dropZoneMessage : e)) ? r : o, typeof r === l ? r.call(e, {
                    name: "dropZoneMessage",
                    hash: {},
                    data: n
                }) : r)) + '</p>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-md-12">\n                    <div id="progress" class="progress">\n                        <div class="progress-bar progress-bar-success"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</script>'
            },
            useData: !0
        }), this.HandlebarsPrecompiled["bootstrap-display"].control = Handlebars.template({
            1: function(e, t, i, n) {
                var a, r;
                return '        <label class="' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.labelClass : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(2, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + ' control-label alpaca-control-label" for="' + this.escapeExpression((r = null != (r = t.id || (null != e ? e.id : e)) ? r : t.helperMissing, "function" == typeof r ? r.call(e, {
                    name: "id",
                    hash: {},
                    data: n
                }) : r)) + '">' + (null != (a = this.lambda(null != (a = null != e ? e.options : e) ? a.label : a, e)) ? a : "") + "</label>\n"
            },
            2: function(e, t, i, n) {
                var a;
                return this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.labelClass : a, e))
            },
            4: function(e, t, i, n) {
                return ""
            },
            6: function(e, t, i, n) {
                var a;
                return null != (a = t.each.call(e, null != (a = null != e ? e.options : e) ? a.helpers : a, {
                    name: "each",
                    hash: {},
                    fn: this.program(7, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : ""
            },
            7: function(e, t, i, n) {
                var a;
                return '        <p class="help-block ' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.helperClass : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(8, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + '">\n            <i class="glyphicon glyphicon-info-sign"></i>\n            ' + (null != (a = this.lambda(e, e)) ? a : "") + "\n        </p>\n"
            },
            8: function(e, t, i, n) {
                var a;
                return this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.helperClass : a, e))
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s, o = '<script type="text/x-handlebars-template">\n\n    <div class="form-group">\n\n' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.label : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n        ";
                return r = null != (r = t.control || (null != e ? e.control : e)) ? r : t.helperMissing, s = {
                    name: "control",
                    hash: {},
                    fn: this.program(4, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.control || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + "\n\n" + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.helpers : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(6, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n    </div>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["bootstrap-display"].message = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r;
                return '<script type="text/x-handlebars-template">\n\n    <div class="help-block">\n        <i class="glyphicon glyphicon-exclamation-sign"></i>&nbsp;' + (null != (r = null != (r = t.message || (null != e ? e.message : e)) ? r : t.helperMissing, a = "function" == typeof r ? r.call(e, {
                    name: "message",
                    hash: {},
                    data: n
                }) : r) ? a : "") + "\n    </div>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["bootstrap-edit"] = this.HandlebarsPrecompiled["bootstrap-edit"] || {}, this.HandlebarsPrecompiled["bootstrap-edit"]["container-grid"] = Handlebars.template({
            1: function(e, t, i, n) {
                return " btn-group"
            },
            3: function(e, t, i, n, a, r) {
                var s, o = t.helperMissing;
                return "\n" + (null != (s = (t.compare || e && e.compare || o).call(e, null != (s = null != r[1] ? r[1].options : r[1]) ? s.toolbarStyle : s, "link", {
                    name: "compare",
                    hash: {},
                    fn: this.program(4, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "\n" + (null != (s = (t.compare || e && e.compare || o).call(e, null != (s = null != r[1] ? r[1].options : r[1]) ? s.toolbarStyle : s, "button", {
                    name: "compare",
                    hash: {},
                    fn: this.program(6, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "\n"
            },
            4: function(e, t, i, n) {
                var a = this.lambda,
                    r = this.escapeExpression;
                return '                <a href="#" class="alpaca-array-toolbar-action" data-array-toolbar-action="' + r(a(null != e ? e.action : e, e)) + '">' + r(a(null != e ? e.label : e, e)) + "</a>\n"
            },
            6: function(e, t, i, n, a, r) {
                var s, o = this.lambda,
                    l = this.escapeExpression;
                return '                <button class="alpaca-array-toolbar-action ' + l(o(null != (s = null != (s = null != r[2] ? r[2].view : r[2]) ? s.styles : s) ? s.button : s, e)) + '" data-array-toolbar-action="' + l(o(null != e ? e.action : e, e)) + '">\n' + (null != (s = t["if"].call(e, null != e ? e.iconClass : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(7, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "                    " + (null != (s = t["if"].call(e, null != e ? e.label : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(9, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "\n                </button>\n"
            },
            7: function(e, t, i, n) {
                return '                    <i class="' + this.escapeExpression(this.lambda(null != e ? e.iconClass : e, e)) + '"></i>\n'
            },
            9: function(e, t, i, n) {
                var a, r;
                return null != (r = null != (r = t.label || (null != e ? e.label : e)) ? r : t.helperMissing, a = "function" == typeof r ? r.call(e, {
                    name: "label",
                    hash: {},
                    data: n
                }) : r) ? a : ""
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n, a, r) {
                var s;
                return '<script type="text/x-handlebars-template">\n\n    <div>\n\n        <div class="alpaca-array-toolbar" ' + (null != (s = (t.compare || e && e.compare || t.helperMissing).call(e, null != (s = null != e ? e.options : e) ? s.toolbarStyle : s, "button", {
                    name: "compare",
                    hash: {},
                    fn: this.program(1, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + ">\n\n" + (null != (s = t.each.call(e, null != e ? e.arrayToolbarActions : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(3, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + '\n        </div>\n\n        <div class="alpaca-container-grid-holder"></div>\n\n    </div>\n\n</script>'
            },
            useData: !0,
            useDepths: !0
        }), this.HandlebarsPrecompiled["bootstrap-edit"].container = Handlebars.template({
            1: function(e, t, i, n) {
                var a;
                return '        <legend class="' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.labelClass : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(2, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + 'alpaca-container-label">\n\n' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.collapsible : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(4, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n            " + (null != (a = this.lambda(null != (a = null != e ? e.options : e) ? a.label : a, e)) ? a : "") + "\n\n" + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.collapsible : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(6, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n        </legend>\n"
            },
            2: function(e, t, i, n) {
                var a;
                return this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.labelClass : a, e)) + " "
            },
            4: function(e, t, i, n) {
                return '            <span data-toggle="collapse">\n'
            },
            6: function(e, t, i, n) {
                return "            </span>\n"
            },
            8: function(e, t, i, n) {
                var a;
                return null != (a = t.each.call(e, null != (a = null != e ? e.options : e) ? a.helpers : a, {
                    name: "each",
                    hash: {},
                    fn: this.program(9, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : ""
            },
            9: function(e, t, i, n) {
                var a;
                return '        <p class="alpaca-helper help-block ' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.helperClass : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(10, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + '">\n            <i class="alpaca-icon-16 glyphicon glyphicon-info-sign"></i>\n            ' + (null != (a = this.lambda(e, e)) ? a : "") + "\n        </p>\n"
            },
            10: function(e, t, i, n) {
                var a;
                return this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.helperClass : a, e))
            },
            12: function(e, t, i, n) {
                return ""
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s, o = '<script type="text/x-handlebars-template">\n\n    <div>\n\n' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.label : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n" + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.helpers : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(8, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n        ";
                return r = null != (r = t.container || (null != e ? e.container : e)) ? r : t.helperMissing, s = {
                    name: "container",
                    hash: {},
                    fn: this.program(12, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.container || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + "\n\n    </div>\n\n</script>\n"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["bootstrap-edit"]["control-upload-partial-download"] = Handlebars.template({
            1: function(e, t, i, n) {
                var a, r = this.lambda,
                    s = this.escapeExpression;
                return '        <td></td>\n        <td class="name">\n            <span>' + s(r(null != (a = null != e ? e.file : e) ? a.name : a, e)) + '</span>\n        </td>\n        <td class="size">\n            <span>' + s(r(null != (a = null != e ? e.file : e) ? a.size : a, e)) + '</span>\n        </td>\n        <td class="error" colspan="2">\n            Error:\n            ' + s(r(null != (a = null != e ? e.file : e) ? a.error : a, e)) + "\n        </td>\n"
            },
            3: function(e, t, i, n) {
                var a, r = this.lambda,
                    s = this.escapeExpression;
                return '        <td class="preview">\n' + (null != (a = t["if"].call(e, null != (a = null != e ? e.file : e) ? a.thumbnailUrl : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(4, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + '        </td>\n        <td class="name">\n            <a href="' + s(r(null != (a = null != e ? e.file : e) ? a.url : a, e)) + '" title="' + s(r(null != (a = null != e ? e.file : e) ? a.name : a, e)) + '" data-gallery="' + s(r(null != (a = null != e ? e.file : e) ? a.thumbnailUrl : a, e)) + 'gallery" download="' + s(r(null != (a = null != e ? e.file : e) ? a.name : a, e)) + '">' + s(r(null != (a = null != e ? e.file : e) ? a.name : a, e)) + '</a>\n        </td>\n        <td class="size"><span>' + s(r(null != (a = null != e ? e.file : e) ? a.size : a, e)) + '</span></td>\n        <td colspan="2"></td>\n'
            },
            4: function(e, t, i, n) {
                var a, r = this.lambda,
                    s = this.escapeExpression;
                return '            <a href="' + s(r(null != (a = null != e ? e.file : e) ? a.url : a, e)) + '" title="' + s(r(null != (a = null != e ? e.file : e) ? a.name : a, e)) + '" data-gallery="gallery" download="' + s(r(null != (a = null != e ? e.file : e) ? a.name : a, e)) + '">\n                <img src="' + s(r(null != (a = null != e ? e.file : e) ? a.thumbnailUrl : a, e)) + '">\n            </a>\n'
            },
            6: function(e, t, i, n, a, r) {
                var s;
                return null != (s = t.each.call(e, null != e ? e.buttons : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(7, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : ""
            },
            7: function(e, t, i, n, a, r) {
                var s;
                return null != (s = t["if"].call(e, null != e ? e.isDelete : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(8, n, 0, a, r),
                    inverse: this.program(10, n, 0, a, r),
                    data: n
                })) ? s : ""
            },
            8: function(e, t, i, n, a, r) {
                var s = this.lambda,
                    o = this.escapeExpression;
                return '                        <button class="delete btn btn-danger" data-file-index="' + o(s(null != r[3] ? r[3].fileIndex : r[3], e)) + '" data-button-key="' + o(s(null != r[1] ? r[1].key : r[1], e)) + '">\n                            <i class="glyphicon glyphicon-trash glyphicon-white"></i>\n                        </button>\n'
            },
            10: function(e, t, i, n, a, r) {
                var s, o, l = t.helperMissing,
                    u = "function",
                    c = this.escapeExpression,
                    p = this.lambda;
                return '                        <button class="' + c((o = null != (o = t.key || (null != e ? e.key : e)) ? o : l, typeof o === u ? o.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : o)) + " btn " + c((o = null != (o = t.buttonClass || (null != e ? e.buttonClass : e)) ? o : l, typeof o === u ? o.call(e, {
                    name: "buttonClass",
                    hash: {},
                    data: n
                }) : o)) + '" data-file-index="' + c(p(null != r[3] ? r[3].fileIndex : r[3], e)) + '" data-button-key="' + c(p(null != r[1] ? r[1].key : r[1], e)) + '">\n' + (null != (s = t["if"].call(e, null != e ? e.iconClass : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(11, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + (null != (s = t["if"].call(e, null != e ? e.label : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(13, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "                        </button>\n"
            },
            11: function(e, t, i, n) {
                var a;
                return '                                <i class="' + this.escapeExpression((a = null != (a = t.iconClass || (null != e ? e.iconClass : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "iconClass",
                    hash: {},
                    data: n
                }) : a)) + '"></i>\n'
            },
            13: function(e, t, i, n) {
                var a;
                return "                                " + this.escapeExpression((a = null != (a = t.label || (null != e ? e.label : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "label",
                    hash: {},
                    data: n
                }) : a)) + "\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n, a, r) {
                var s;
                return '<script type="text/x-handlebars-template">\n\n    <tr class="template-download">\n' + (null != (s = t["if"].call(e, null != (s = null != e ? e.file : e) ? s.error : s, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0, a, r),
                    inverse: this.program(3, n, 0, a, r),
                    data: n
                })) ? s : "") + "        <td>\n" + (null != (s = t["if"].call(e, null != e ? e.buttons : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(6, n, 0, a, r),
                    inverse: this.noop,
                    data: n
                })) ? s : "") + "        </td>\n    </tr>\n\n</script>"
            },
            useData: !0,
            useDepths: !0
        }), this.HandlebarsPrecompiled["bootstrap-edit"]["control-upload-partial-upload"] = Handlebars.template({
            1: function(e, t, i, n) {
                return '        <td class="preview">\n            <span class="fade"></span>\n        </td>\n'
            },
            3: function(e, t, i, n) {
                return "        <td></td>\n"
            },
            5: function(e, t, i, n) {
                var a;
                return '        <td class="error" colspan="2"><span class="label label-important">Error</span> ' + this.escapeExpression(this.lambda(null != (a = null != e ? e.file : e) ? a.error : a, e)) + "</td>\n"
            },
            7: function(e, t, i, n) {
                var a;
                return null != (a = t["if"].call(e, null != (a = null != e ? e.file : e) ? a.valid : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(8, n, 0),
                    inverse: this.program(15, n, 0),
                    data: n
                })) ? a : ""
            },
            8: function(e, t, i, n) {
                var a;
                return (null != (a = (t.compare || e && e.compare || t.helperMissing).call(e, n && n.index, 0, {
                    name: "compare",
                    hash: {},
                    fn: this.program(9, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + '            <td class="start">\n' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.autoUpload : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(11, n, 0),
                    inverse: this.program(13, n, 0),
                    data: n
                })) ? a : "") + "            </td>\n"
            },
            9: function(e, t, i, n) {
                return '                <td>\n                    <div class="progress progress-success progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">\n                        <div class="progress-bar" style="width:0%;"></div>\n                    </div>\n                </td>\n'
            },
            11: function(e, t, i, n) {
                return ""
            },
            13: function(e, t, i, n) {
                return '                <button class="btn btn-primary"> \\\n                    <i class="glyphicon glyphicon-upload glyphicon-white"></i>\n                    <span>Start</span>\n                </button>\n'
            },
            15: function(e, t, i, n) {
                var a;
                return '            <td></td>\n            <td class="cancel">\n' + (null != (a = (t.compare || e && e.compare || t.helperMissing).call(e, n && n.index, 0, {
                    name: "compare",
                    hash: {},
                    fn: this.program(16, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "            </td>\n"
            },
            16: function(e, t, i, n) {
                return '                <button class="btn btn-warning">\n                    <i class="glyphicon glyphicon-ban-circle glyphicon-white"></i>\n                    <span>Cancel</span>\n                </button>\n'
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r = this.lambda,
                    s = this.escapeExpression;
                return '<script type="text/x-handlebars-template">\n\n    <tr class="template-upload">\n\n' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.showUploadPreview : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.program(3, n, 0),
                    data: n
                })) ? a : "") + '\n        <td class="name"><span>' + s(r(null != (a = null != e ? e.file : e) ? a.name : a, e)) + '</span></td>\n        <td class="size"><span>' + s(r(null != (a = null != e ? e.file : e) ? a.size : a, e)) + "</span></td>\n\n" + (null != (a = t["if"].call(e, null != (a = null != e ? e.file : e) ? a.error : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(5, n, 0),
                    inverse: this.program(7, n, 0),
                    data: n
                })) ? a : "") + "        <td></td>\n    </tr>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["bootstrap-edit"]["control-upload"] = Handlebars.template({
            1: function(e, t, i, n) {
                var a;
                return this.escapeExpression((a = null != (a = t.cssClasses || (null != e ? e.cssClasses : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "cssClasses",
                    hash: {},
                    data: n
                }) : a))
            },
            3: function(e, t, i, n) {
                var a;
                return "                        <thead>\n                            <tr>\n" + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.showUploadPreview : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(4, n, 0),
                    inverse: this.program(6, n, 0),
                    data: n
                })) ? a : "") + '                                <td>Name</td>\n                                <td>Size</td>\n                                <td colspan="2"></td><!-- error or start or progress indicator -->\n                                <td>Actions</td>\n                            </tr>\n                        </thead>\n'
            },
            4: function(e, t, i, n) {
                return "                                    <td>Thumbnail</td>\n"
            },
            6: function(e, t, i, n) {
                return "                                    <td></td>\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s = this.escapeExpression,
                    o = t.helperMissing,
                    l = "function";
                return '<script type="text/x-handlebars-template">\n\n    <div class="alpaca-fileupload-container ' + (null != (a = t["if"].call(e, null != e ? e.cssClasses : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + '">\n        <div class="container-fluid">\n            <div class="row alpaca-fileupload-chooserow">\n                <div class="col-md-12">\n                    <div class="btn-group">\n                        <span class="' + s(this.lambda(null != (a = null != (a = null != e ? e.view : e) ? a.styles : a) ? a.button : a, e)) + ' fileinput-button">\n                            <i class="glyphicon glyphicon-upload"></i>\n                            <span class="fileupload-add-button">' + s((r = null != (r = t.chooseButtonLabel || (null != e ? e.chooseButtonLabel : e)) ? r : o, typeof r === l ? r.call(e, {
                    name: "chooseButtonLabel",
                    hash: {},
                    data: n
                }) : r)) + '</span>\n                            <input class="alpaca-fileupload-input" type="file" name="' + s((r = null != (r = t.name || (null != e ? e.name : e)) ? r : o, typeof r === l ? r.call(e, {
                    name: "name",
                    hash: {},
                    data: n
                }) : r)) + '_files">\n                            <input class="alpaca-fileupload-input-hidden" type="hidden" name="' + s((r = null != (r = t.name || (null != e ? e.name : e)) ? r : o, typeof r === l ? r.call(e, {
                    name: "name",
                    hash: {},
                    data: n
                }) : r)) + '_files_hidden">\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <div class="row alpaca-fileupload-well">\n                <div class="col-md-12 fileupload-active-zone">\n                    <table class="table table-striped">\n' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.showHeaders : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(3, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + '                        <tbody class="files">\n                        </tbody>\n                    </table>\n                    <p align="center" class="dropzone-message">' + s((r = null != (r = t.dropZoneMessage || (null != e ? e.dropZoneMessage : e)) ? r : o, typeof r === l ? r.call(e, {
                    name: "dropZoneMessage",
                    hash: {},
                    data: n
                }) : r)) + '</p>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-md-12">\n                    <div id="progress" class="progress">\n                        <div class="progress-bar progress-bar-success"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</script>'
            },
            useData: !0
        }), this.HandlebarsPrecompiled["bootstrap-edit"].control = Handlebars.template({
            1: function(e, t, i, n) {
                var a, r;
                return '        <label class="' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.labelClass : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(2, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + ' control-label alpaca-control-label" for="' + this.escapeExpression((r = null != (r = t.id || (null != e ? e.id : e)) ? r : t.helperMissing, "function" == typeof r ? r.call(e, {
                    name: "id",
                    hash: {},
                    data: n
                }) : r)) + '">' + (null != (a = this.lambda(null != (a = null != e ? e.options : e) ? a.label : a, e)) ? a : "") + "</label>\n"
            },
            2: function(e, t, i, n) {
                var a;
                return this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.labelClass : a, e))
            },
            4: function(e, t, i, n) {
                return ""
            },
            6: function(e, t, i, n) {
                var a;
                return null != (a = t.each.call(e, null != (a = null != e ? e.options : e) ? a.helpers : a, {
                    name: "each",
                    hash: {},
                    fn: this.program(7, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : ""
            },
            7: function(e, t, i, n) {
                var a;
                return '        <p class="help-block ' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.helperClass : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(8, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + '">\n            <i class="glyphicon glyphicon-info-sign"></i>\n            ' + (null != (a = this.lambda(e, e)) ? a : "") + "\n        </p>\n"
            },
            8: function(e, t, i, n) {
                var a;
                return this.escapeExpression(this.lambda(null != (a = null != e ? e.options : e) ? a.helperClass : a, e))
            },
            10: function(e, t, i, n) {
                var a;
                return null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.buttons : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(11, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : ""
            },
            11: function(e, t, i, n) {
                var a;
                return '            <div class="alpaca-control-buttons-container">\n' + (null != (a = t.each.call(e, null != (a = null != e ? e.options : e) ? a.buttons : a, {
                    name: "each",
                    hash: {},
                    fn: this.program(12, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "            </div>\n"
            },
            12: function(e, t, i, n) {
                var a, r, s = t.helperMissing,
                    o = "function",
                    l = this.escapeExpression;
                return '                <button data-key="' + l((r = null != (r = t.key || n && n.key) ? r : s, typeof r === o ? r.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : r)) + '" type="' + l((r = null != (r = t.type || (null != e ? e.type : e)) ? r : s, typeof r === o ? r.call(e, {
                    name: "type",
                    hash: {},
                    data: n
                }) : r)) + '" class="alpaca-control-button alpaca-control-button-' + l((r = null != (r = t.key || n && n.key) ? r : s, typeof r === o ? r.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : r)) + " " + l((r = null != (r = t.styles || (null != e ? e.styles : e)) ? r : s, typeof r === o ? r.call(e, {
                    name: "styles",
                    hash: {},
                    data: n
                }) : r)) + '" ' + (null != (a = t.each.call(e, null != e ? e.value : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(13, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + ">" + (null != (r = null != (r = t.value || (null != e ? e.value : e)) ? r : s, a = typeof r === o ? r.call(e, {
                    name: "value",
                    hash: {},
                    data: n
                }) : r) ? a : "") + "</button>\n"
            },
            13: function(e, t, i, n) {
                var a, r = t.helperMissing,
                    s = "function",
                    o = this.escapeExpression;
                return o((a = null != (a = t.key || n && n.key) ? a : r, typeof a === s ? a.call(e, {
                    name: "key",
                    hash: {},
                    data: n
                }) : a)) + '="' + o((a = null != (a = t.value || (null != e ? e.value : e)) ? a : r, typeof a === s ? a.call(e, {
                    name: "value",
                    hash: {},
                    data: n
                }) : a)) + '" '
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s, o = '<script type="text/x-handlebars-template">\n\n    <div class="form-group">\n\n' + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.label : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n        ";
                return r = null != (r = t.control || (null != e ? e.control : e)) ? r : t.helperMissing, s = {
                    name: "control",
                    hash: {},
                    fn: this.program(4, n, 0),
                    inverse: this.noop,
                    data: n
                }, a = "function" == typeof r ? r.call(e, s) : r, t.control || (a = t.blockHelperMissing.call(e, a, s)), null != a && (o += a), o + "\n\n" + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.helpers : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(6, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n" + (null != (a = t["if"].call(e, null != (a = null != e ? e.options : e) ? a.renderButtons : a, {
                    name: "if",
                    hash: {},
                    fn: this.program(10, n, 0),
                    inverse: this.noop,
                    data: n
                })) ? a : "") + "\n    </div>\n\n</script>"
            },
            useData: !0
        }), this.HandlebarsPrecompiled["bootstrap-edit"].message = Handlebars.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, i, n) {
                var a, r, s = t.helperMissing,
                    o = "function";
                return '<script type="text/x-handlebars-template">\n\n    <div class="help-block alpaca-message alpaca-message-' + (null != (r = null != (r = t.id || (null != e ? e.id : e)) ? r : s, a = typeof r === o ? r.call(e, {
                    name: "id",
                    hash: {},
                    data: n
                }) : r) ? a : "") + '">\n        <i class="glyphicon glyphicon-exclamation-sign"></i>&nbsp;' + (null != (r = null != (r = t.message || (null != e ? e.message : e)) ? r : s, a = typeof r === o ? r.call(e, {
                    name: "message",
                    hash: {},
                    data: n
                }) : r) ? a : "") + "\n    </div>\n\n</script>"
            },
            useData: !0
        }),
        function(e, t) {
            e.Base = t()
        }(this, function() {
            var e = "function",
                t = "object",
                i = "string",
                n = !1,
                a = ["constructor", "toString", "valueOf"],
                r = a.length,
                s = /\bbase\b/,
                o = function() {},
                l = {
                    toSource: null,
                    base: o
                },
                u = function() {};
            return u.extend = function(i, a) {
                var r = u.prototype.extend;
                n = !0;
                var s = new this;
                r.call(s, i), s.base = l.base, n = !1;
                var o = s.constructor,
                    c = s.constructor = function() {
                        n || (this && (this._constructing || this.constructor === c) ? (this._constructing = !0, o.apply(this, arguments), this._constructing = !1) : arguments.length && u.cast.apply(c, arguments))
                    };
                return r.call(c, this), c.ancestor = this, c.prototype = s, c.valueOf = function(e) {
                    return e === t ? c : o.valueOf()
                }, r.call(c, a), typeof c.init === e && c.init(), c
            }, u.prototype.extend = function(o, c) {
                if (typeof o === i && arguments.length > 1) {
                    var p = this[o];
                    if (p && typeof c === e && (!p.valueOf || p.valueOf() !== c.valueOf()) && s.test(c)) {
                        var d = c.valueOf();
                        c = function() {
                            var e, t = this.base || l.base;
                            return this.base = p, e = 0 === arguments.length ? d.call(this) : d.apply(this, arguments), this.base = t, e
                        }, c.valueOf = function(e) {
                            return e === t ? c : d
                        }, c.toString = u.toString
                    }
                    this[o] = c
                } else if (o) {
                    var h = u.prototype.extend;
                    n || typeof this === e || (h = this.extend || h);
                    for (var f, m = n ? 0 : 1; r > m; m++) f = a[m], o[f] !== l[f] && h.call(this, f, o[f]);
                    for (f in o) l[f] || h.call(this, f, o[f])
                }
                return this
            }, u = u.extend({
                base: l.base
            }, {
                ancestor: Object,
                version: "1.1",
                cast: function() {
                    for (var t, i, n = 0, a = arguments.length; a > n; n++) i = arguments[n], t = i.extend || u.prototype.extend, typeof i === e ? (t = i.prototype.extend || u.prototype.extend, t.call(i.prototype, this.prototype), t.call(i, this), i.ancestor = this) : t.call(i, this.prototype);
                    return this
                },
                implement: function() {
                    for (var e = 0; e < arguments.length; e++) this.cast.call(arguments[e], this);
                    return this
                },
                toString: function() {
                    return this.valueOf() + ""
                }
            })
        }),
        function(e) {
            var t = function() {
                var i = t.makeArray(arguments);
                if (0 === i.length) return t.throwDefaultError("You must supply at least one argument.  This argument can either be a DOM element against which Alpaca will generate a form or it can be a function name.  See http://www.alpacajs.org for more details.");
                var n = i[0];
                n && t.isString(n) && (n = e("#" + n));
                var a = null,
                    r = null,
                    s = null,
                    o = null,
                    l = null,
                    u = null,
                    c = null,
                    p = null,
                    d = !1,
                    h = {},
                    f = null,
                    m = null,
                    g = null,
                    v = null,
                    b = function() {
                        var i = null,
                            a = e(n).find(":first");
                        if (a.length > 0) {
                            var r = e(a[0]).attr("data-alpaca-field-id");
                            if (r) {
                                var s = t.fieldInstances[r];
                                s && (i = s)
                            } else {
                                var o = e(a[0]).attr("data-alpaca-form-id");
                                if (o) {
                                    var l = e(a[0]).find(":first");
                                    if (l.length > 0) {
                                        var u = e(l[0]).attr("data-alpaca-field-id");
                                        if (u) {
                                            var s = t.fieldInstances[u];
                                            s && (i = s)
                                        }
                                    }
                                }
                            }
                        }
                        return i
                    },
                    y = ["get", "exists", "destroy"],
                    w = i.length > 1 && t.isString(i[1]) && y.indexOf(i[1]) > -1,
                    x = b();
                if (x || w) {
                    if (w) {
                        var E = i[1];
                        return "get" === E ? x : "exists" === E ? x ? !0 : !1 : "destroy" === E ? void(x && x.destroy()) : t.throwDefaultError("Unknown special function: " + E)
                    }
                    return x
                }
                var F = null;
                if (1 === i.length) {
                    var C = e(n).text();
                    F = JSON.parse(C), e(n).html("")
                } else F = t.isObject(i[1]) ? i[1] : t.isFunction(i[1]) ? i[1]() : {
                    data: i[1]
                };
                if (!F) return t.throwDefaultError("Unable to determine Alpaca configuration");
                a = F.data, r = F.schema, s = F.options, o = F.view, l = F.render, F.callback && (l = F.callback), u = F.postRender, c = F.error, p = F.connector, f = F.dataSource, m = F.schemaSource, g = F.optionsSource, v = F.viewSource, F.ui && (h.ui = F.ui), F.type && (h.type = F.type), t.isEmpty(F.notTopLevel) || (d = F.notTopLevel), t.isEmpty(c) && (c = t.defaultErrorCallback);
                var T = "default",
                    S = {};
                t.isString(p) ? T = p : t.isObject(p) && p.id && (T = p.id, p.config && (S = p.config));
                var O = t.getConnectorClass(T);
                p = new O(T, S);
                var A = p;
                if (d) {
                    var k = t.getConnectorClass("default");
                    A = new k("default")
                }
                s || (s = {});
                var I = function(e) {
                        e.parent || (e.hideInitValidationError || e.refreshValidationState(!0), "view" !== e.view.type && t.fieldApplyFieldAndChildren(e, function(e) {
                            e.hideInitValidationError = !1
                        }))
                    },
                    M = function(e) {
                        e.parent || (e.observableScope = t.generateId()), t.isUndefined(s.focus) && !e.parent && (s.focus = t.defaultFocus), s && s.focus ? window.setTimeout(function() {
                            var t = function(e) {
                                e.suspendBlurFocus = !0, e.focus(), e.suspendBlurFocus = !1
                            };
                            if (s.focus) {
                                if (e.isControlField && e.isAutoFocusable()) t(e);
                                else if (e.isContainerField)
                                    if (s.focus === !0) e.children && e.children.length > 0 && t(e);
                                    else if ("string" == typeof s.focus) {
                                    var i = e.getControlByPath(s.focus);
                                    i && i.isControlField && i.isAutoFocusable() && t(i)
                                }
                                I(e)
                            }
                        }, 500) : I(e), u && u(e)
                    };
                A.loadAll({
                    data: a,
                    schema: r,
                    options: s,
                    view: o,
                    dataSource: f,
                    schemaSource: m,
                    optionsSource: g,
                    viewSource: v
                }, function(e, i, u, d) {
                    return e = e ? e : a, u = u ? u : r, i = i ? i : s, d = d ? d : o, t.isEmpty(e) && t.isEmpty(u) && (t.isEmpty(i) || t.isEmpty(i.type)) && (e = "", t.isEmpty(i) ? i = "text" : s && t.isObject(s) && (i.type = "text")), i.view && (d = i.view), t.init(n, e, i, u, d, h, l, M, p, c)
                }, function(e) {
                    return c(e), null
                })
            };
            t.Fields = {}, t.Connectors = {}, t.Extend = e.extend, t.Create = function() {
                    var t = Array.prototype.slice.call(arguments);
                    return t.unshift({}), e.extend.apply(this, t)
                }, t.Extend(t, {
                    makeArray: function(e) {
                        return Array.prototype.slice.call(e)
                    },
                    isFunction: function(e) {
                        return "[object Function]" === Object.prototype.toString.call(e)
                    },
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isObject: function(e) {
                        return !t.isUndefined(e) && "[object Object]" === Object.prototype.toString.call(e)
                    },
                    isPlainObject: function(t) {
                        return e.isPlainObject(t)
                    },
                    isNumber: function(e) {
                        return "number" == typeof e
                    },
                    isArray: function(e) {
                        return e instanceof Array
                    },
                    isBoolean: function(e) {
                        return "boolean" == typeof e
                    },
                    isUndefined: function(e) {
                        return "undefined" == typeof e
                    },
                    trim: function(e) {
                        var i = e;
                        return i && t.isString(i) && (i = i.replace(/^\s+|\s+$/g, "")), i
                    },
                    safeDomParse: function(i) {
                        if (i && t.isString(i)) {
                            i = t.trim(i);
                            var n = null;
                            try {
                                n = e(i)
                            } catch (a) {
                                i = "<div>" + i + "</div>", n = e(i).children()
                            }
                            return n
                        }
                        return i
                    },
                    isEmpty: function(e, i) {
                        var n = this;
                        if (t.isUndefined(e)) return !0;
                        if (null === e) return !0;
                        if (e && t.isObject(e)) {
                            var a = n.countProperties(e, i);
                            if (0 === a) return !0
                        }
                        return !1
                    },
                    countProperties: function(e, i) {
                        var n = 0;
                        if (e && t.isObject(e))
                            for (var a in e) e.hasOwnProperty(a) && (i ? n++ : "function" != typeof e[a] && n++);
                        return n
                    },
                    copyOf: function(i) {
                        var n = i;
                        if (t.isArray(i)) {
                            n = [];
                            for (var a = 0; a < i.length; a++) n.push(t.copyOf(i[a]))
                        } else if (t.isObject(i)) {
                            if (i instanceof Date) return new Date(i.getTime());
                            if (i instanceof RegExp) return new RegExp(i);
                            if (i.nodeType && "cloneNode" in i) n = i.cloneNode(!0);
                            else if (e.isPlainObject(i)) {
                                n = {};
                                for (var r in i) i.hasOwnProperty(r) && (n[r] = t.copyOf(i[r]))
                            }
                        }
                        return n
                    },
                    cloneObject: function(e) {
                        return t.copyOf(e)
                    },
                    spliceIn: function(e, t, i) {
                        return e.substring(0, t) + i + e.substring(t, e.length)
                    },
                    compactArray: function(e) {
                        var t, i = [],
                            n = e.length;
                        for (t = 0; n > t; t++) lang.isNull(e[t]) || lang.isUndefined(e[t]) || i.push(e[t]);
                        return i
                    },
                    removeAccents: function(e) {
                        return e.replace(/[Ã Ã¡Ã¢Ã£Ã¤Ã¥]/g, "a").replace(/[Ã¨Ã©ÃªÃ«]/g, "e").replace(/[Ã¬Ã­Ã®Ã¯]/g, "i").replace(/[Ã²Ã³Ã´ÃµÃ¶]/g, "o").replace(/[Ã¹ÃºÃ»Ã¼]/g, "u").replace(/[Ã½Ã¿]/g, "y").replace(/[Ã±]/g, "n").replace(/[Ã§]/g, "c").replace(/[Å“]/g, "oe").replace(/[Ã¦]/g, "ae")
                    },
                    indexOf: function(e, i, n) {
                        var a, r = i.length;
                        for (t.isFunction(n) || (n = function(e, t) {
                                return e === t
                            }), a = 0; r > a; a++)
                            if (n.call({}, e, i[a])) return a;
                        return -1
                    },
                    uniqueIdCounter: 0,
                    defaultLocale: "en_US",
                    defaultFocus: !0,
                    setDefaultLocale: function(e) {
                        this.defaultLocale = e
                    },
                    defaultSchemaFieldMapping: {},
                    registerDefaultSchemaFieldMapping: function(e, t) {
                        e && t && (this.defaultSchemaFieldMapping[e] = t)
                    },
                    defaultFormatFieldMapping: {},
                    registerDefaultFormatFieldMapping: function(e, t) {
                        e && t && (this.defaultFormatFieldMapping[e] = t)
                    },
                    getSchemaType: function(e) {
                        var i = null;
                        return t.isEmpty(e) ? i = "string" : t.isArray(e) ? i = "array" : t.isObject(e) ? i = "object" : t.isString(e) ? i = "string" : t.isNumber(e) ? i = "number" : t.isBoolean(e) && (i = "boolean"), i || "object" != typeof e || (i = "object"), i
                    },
                    guessOptionsType: function(e) {
                        var i = null;
                        return i = e && "undefined" != typeof e["enum"] ? e["enum"].length > 3 ? "select" : "radio" : t.defaultSchemaFieldMapping[e.type], e.format && t.defaultFormatFieldMapping[e.format] && (i = t.defaultFormatFieldMapping[e.format]), i
                    },
                    views: {},
                    generateViewId: function() {
                        return "view-" + this.generateId()
                    },
                    registerView: function(e) {
                        var i = e.id;
                        if (!i) return t.throwDefaultError("Cannot register view with missing view id: " + i);
                        var n = this.views[i];
                        if (n) t.mergeObject(n, e);
                        else {
                            this.views[i] = e, e.templates || (e.templates = {});
                            for (var a = t.TemplateEngineRegistry.ids(), r = 0; r < a.length; r++) {
                                var s = a[r],
                                    o = t.TemplateEngineRegistry.find(s);
                                if (o)
                                    for (var l = o.findCacheKeys(i), u = 0; u < l.length; u++) {
                                        var c = t.splitCacheKey(l[u]);
                                        e.templates[c.templateId] = {
                                            type: s,
                                            template: !0,
                                            cacheKey: l[u]
                                        }
                                    }
                            }
                        }
                    },
                    getNormalizedView: function(e) {
                        return this.normalizedViews[e]
                    },
                    lookupNormalizedView: function(e, t) {
                        var i = null;
                        for (var n in this.normalizedViews) {
                            var a = this.normalizedViews[n];
                            if (a.ui === e && a.type === t) {
                                i = n;
                                break
                            }
                        }
                        return i
                    },
                    registerTemplate: function(e, t, i) {
                        i || (i = "base"), this.views[i] || (this.views[i] = {}, this.views[i].id = i), this.views[i].templates || (this.views[i].templates = {}), this.views[i].templates[e] = t
                    },
                    registerTemplates: function(e, t) {
                        for (var i in e) this.registerTemplate(i, e[i], t)
                    },
                    registerMessage: function(e, t, i) {
                        i || (i = "base"), this.views[i] || (this.views[i] = {}, this.views[i].id = i), this.views[i].messages || (this.views[i].messages = {}), this.views[i].messages[e] = t
                    },
                    registerMessages: function(e, t) {
                        for (var i in e) e.hasOwnProperty(i) && this.registerMessage(i, e[i], t)
                    },
                    defaultDateFormat: "MM/DD/YYYY",
                    defaultTimeFormat: "HH:SS",
                    regexps: {
                        email: /^[a-z0-9!\#\$%&'\*\-\/=\?\+\-\^_`\{\|\}~]+(?:\.[a-z0-9!\#\$%&'\*\-\/=\?\+\-\^_`\{\|\}~]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,6}$/i,
                        url: /^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(\:[0-9]{1,5})?(\/.*)?$/i,
                        "intranet-url": /^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*(\:[0-9]{1,5})?(\/.*)?$/i,
                        password: /^[0-9a-zA-Z\x20-\x7E]*$/,
                        date: /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.]\d\d$/,
                        integer: /^([\+\-]?([1-9]\d*)|0)$/,
                        number: /^([\+\-]?((([0-9]+(\.)?)|([0-9]*\.[0-9]+))([eE][+-]?[0-9]+)?))$/,
                        phone: /^(\D?(\d{3})\D?\D?(\d{3})\D?(\d{4}))?$/,
                        ipv4: /^(?:1\d?\d?|2(?:[0-4]\d?|[6789]|5[0-5]?)?|[3-9]\d?|0)(?:\.(?:1\d?\d?|2(?:[0-4]\d?|[6789]|5[0-5]?)?|[3-9]\d?|0)){3}$/,
                        "zipcode-five": /^(\d{5})?$/,
                        "zipcode-nine": /^(\d{5}(-\d{4})?)?$/,
                        whitespace: /^\s+$/
                    },
                    fieldInstances: {},
                    fieldClassRegistry: {},
                    registerFieldClass: function(e, t) {
                        this.fieldClassRegistry[e] = t
                    },
                    getFieldClass: function(e) {
                        return this.fieldClassRegistry[e]
                    },
                    getFieldClassType: function(e) {
                        for (var t in this.fieldClassRegistry)
                            if (this.fieldClassRegistry.hasOwnProperty(t) && this.fieldClassRegistry[t] === e) return t;
                        return null
                    },
                    connectorClassRegistry: {},
                    registerConnectorClass: function(e, t) {
                        this.connectorClassRegistry[e] = t
                    },
                    getConnectorClass: function(e) {
                        return this.connectorClassRegistry[e]
                    },
                    replaceAll: function(e, t, i) {
                        return e.replace(new RegExp(t, "g"), i)
                    },
                    element: function(t, i, n, a) {
                        var r = e("<" + t + "/>");
                        if (i && r.attr(i), n && r.css(n), a)
                            for (var s in a) r.addClass(s)
                    },
                    elementFromTemplate: function(i, n) {
                        var a = i;
                        if (n)
                            for (var r in n) a = t.replaceAll(a, "${" + r + "}", n[r]);
                        return e(a)
                    },
                    generateId: function() {
                        return t.uniqueIdCounter++, "alpaca" + t.uniqueIdCounter
                    },
                    later: function(t, i, n, a, r) {
                        t = t || 0, i = i || {};
                        var s, o, l = n,
                            u = e.makeArray(a);
                        if ("string" == typeof n && (l = i[n]), !l) throw {
                            name: "TypeError",
                            message: "The function is undefined."
                        };
                        return s = function() {
                            l.apply(i, u)
                        }, o = r ? setInterval(s, t) : setTimeout(s, t), {
                            id: o,
                            interval: r,
                            cancel: function() {
                                this.interval ? clearInterval(o) : clearTimeout(o)
                            }
                        }
                    },
                    endsWith: function(e, t) {
                        return -1 !== e.indexOf(t, e.length - t.length)
                    },
                    startsWith: function(e, t) {
                        return e.substr(0, t.length) === t
                    },
                    isUri: function(e) {
                        return t.isString(e) && (t.startsWith(e, "http://") || t.startsWith(e, "https://") || t.startsWith(e, "/") || t.startsWith(e, "./") || t.startsWith(e, "../"))
                    },
                    traverseObject: function(e, i, n) {
                        t.isString(i) && (i = i.split("."));
                        var a = null,
                            r = e,
                            s = null;
                        do s = i.shift(), n && s === n && (s = i.shift()), t.isEmpty(r[s]) ? i = [] : (r = r[s], 0 === i.length && (a = r)); while (i.length > 0);
                        return a
                    },
                    each: function(e, i) {
                        if (t.isArray(e))
                            for (var n = 0; n < e.length; n++) i.apply(e[n]);
                        else if (t.isObject(e))
                            for (var a in e) i.apply(e[a])
                    },
                    merge: function(e, i, n) {
                        e || (e = {});
                        for (var a in i) {
                            var r = !0;
                            n && (r = n(a)), r && (t.isEmpty(i[a]) ? e[a] = i[a] : t.isObject(i[a]) ? (e[a] || (e[a] = {}), e[a] = t.merge(e[a], i[a])) : e[a] = i[a])
                        }
                        return e
                    },
                    mergeObject: function(e, t) {
                        return e || (e = {}), t || (t = {}), this.mergeObject2(t, e), e
                    },
                    mergeObject2: function(i, n) {
                        var a = t.isArray,
                            r = t.isObject,
                            s = t.isUndefined,
                            o = t.copyOf,
                            l = function(t, i) {
                                return a(t) ? a(i) && e.each(t, function(e) {
                                    i.push(o(t[e]))
                                }) : r(t) ? r(i) && e.each(t, function(e) {
                                    i[e] = s(i[e]) ? o(t[e]) : l(t[e], i[e])
                                }) : i = o(t), i
                            };
                        return l(i, n), n
                    },
                    substituteTokens: function(e, i) {
                        if (!t.isEmpty(e))
                            for (var n = 0; n < i.length; n++) {
                                var a = "{" + n + "}",
                                    r = e.indexOf(a);
                                if (r > -1) {
                                    var s = e.substring(0, r) + i[n] + e.substring(r + 3);
                                    e = s
                                }
                            }
                        return e
                    },
                    compareObject: function(e, t) {
                        return equiv(e, t)
                    },
                    compareArrayContent: function(t, i) {
                        var n = t && i && t.length === i.length;
                        if (n)
                            for (var a = t.length - 1; a >= 0; a--) {
                                var r = t[a];
                                if (e.inArray(r, i) < 0) return !1
                            }
                        return n
                    },
                    testRegex: function(e, t) {
                        var i = new RegExp(e);
                        return i.test(t)
                    },
                    isValEmpty: function(i, n) {
                        var a = !1;
                        return t.isEmpty(i, n) ? a = !0 : (t.isString(i) && "" === i && (a = !0), t.isObject(i) && e.isEmptyObject(i) && (a = !0), t.isArray(i) && 0 === i.length && (a = !0), t.isNumber(i) && isNaN(i) && (a = !0)), a
                    },
                    init: function(e, i, n, a, r, s, o, l, u, c) {
                        var p = this;
                        if (t.isObject(r)) {
                            var d = r.id;
                            d || (r.id = this.generateViewId());
                            var h = r.parent;
                            h || (r.parent = "bootstrap-edit"), this.registerView(r), r = r.id
                        }
                        this.compile(function(d) {
                            if (d.errors && d.errors.length > 0) {
                                for (var h = [], f = 0; f < d.errors.length; f++) {
                                    var m = d.errors[f].view,
                                        g = d.errors[f].cacheKey,
                                        v = d.errors[f].err,
                                        b = "The template with cache key: " + g + " for view: " + m + " failed to compile";
                                    v && v.message && (b += ", message: " + v.message, h.push(v.message)), v && (b += ", err: " + JSON.stringify(v)), t.logError(b), delete p.normalizedViews[m], delete p.views[m]
                                }
                                return t.throwErrorWithCallback("View compilation failed, cannot initialize Alpaca. " + h.join(", "), c)
                            }
                            p._init(e, i, n, a, r, s, o, l, u, c)
                        }, c)
                    },
                    _init: function(i, n, a, r, s, o, l, u, c, p) {
                        var d = this,
                            h = t.defaultView || null,
                            f = null;
                        e.mobile && !h && (h = "jquerymobile");
                        var m = "function" == typeof e.fn.modal;
                        m && !h && (h = "bootstrap");
                        var g = "undefined" != typeof e.ui;
                        if (g && !h && (h = "jqueryui"), h && (f = n ? "edit" : "create"), !s) {
                            var v = o.ui,
                                b = o.type;
                            v || (h || (h = t.defaultUI), h && (v = h)), v && (b || (b = f ? f : "edit"), t.logDebug("No view provided but found request for UI: " + v + " and type: " + b), s = this.lookupNormalizedView(v, b), t.logDebug(s ? "Found view: " + s : "No view found for UI: " + v + " and type: " + b))
                        }
                        if (!s) return t.throwErrorWithCallback("A view was not specified and could not be automatically determined.", p);
                        if (t.isString(s) && !this.normalizedViews[s]) return t.throwErrorWithCallback("The desired view: " + s + " could not be loaded.  Please make sure it is loaded and not misspelled.", p);
                        var y = t.createFieldInstance(i, n, a, r, s, c, p);
                        if (y) {
                            e(i).addClass("alpaca-field-rendering"), e(i).addClass("alpaca-hidden"), t.fieldInstances[y.getId()] = y, y.allFieldInstances = function() {
                                return t.fieldInstances
                            }, t.isEmpty(l) && (l = y.view.render), t.isEmpty(u) && (u = y.view.postRender);
                            var w = function() {
                                y.parent || y.getFieldEl().addClass("alpaca-" + d.getNormalizedView(s).type), y.parent || y.getFieldEl().addClass("alpaca-top"), e(i).removeClass("alpaca-field-rendering"), e(i).removeClass("alpaca-hidden"), y._oldFieldEl && e(y._oldFieldEl).remove(), u(y)
                            };
                            t.isEmpty(l) ? y.render(function() {
                                w()
                            }) : l(y, function() {
                                w()
                            }), y.callback = l, y.renderedCallback = u
                        }
                    },
                    createFieldInstance: function(e, i, n, a, r, s, o) {
                        if (t.isValEmpty(n, !0) && (n = {}), t.isValEmpty(a, !0) && (a = {}), n && t.isString(n)) {
                            var l = n;
                            n = {}, n.type = l
                        }
                        n.type || (a.type || (a.type = t.getSchemaType(i)), a.type || (a.type = i && t.isArray(i) ? "array" : "object"), n.type = t.guessOptionsType(a));
                        var u = t.getFieldClass(n.type);
                        return u ? new u(e, i, n, a, r, s, o) : (o({
                            message: "Unable to find field class for type: " + n.type,
                            reason: "FIELD_INSTANTIATION_ERROR"
                        }), null)
                    },
                    parseJSON: function(t) {
                        return t ? e.parseJSON(t) : null
                    },
                    compile: function(i, n) {
                        var a = this,
                            r = {
                                errors: [],
                                count: 0,
                                successCount: 0
                            },
                            s = function(e) {
                                if (0 === r.errors.length)
                                    for (var t in e) a.normalizedViews[t] = e[t];
                                i(r)
                            },
                            o = function(e, t, i, n, a) {
                                var o = i.id;
                                r.count++, t ? r.errors.push({
                                    view: o,
                                    cacheKey: n,
                                    err: t
                                }) : r.successCount++, r.count == a && s(e)
                            },
                            l = function(i, n, a, r, s, l, u) {
                                var c = t.makeCacheKey(n.id, a, r, s),
                                    p = "text/x-handlebars-template";
                                if (l && t.isObject(l) && (p = l.type, l.cacheKey && (c = l.cacheKey), l = l.template), l && "string" == typeof l) {
                                    var d = l.toLowerCase();
                                    if (t.isUri(d));
                                    else if (!l || 0 !== l.indexOf("#") && 0 !== l.indexOf(".")) {
                                        if (l) {
                                            var h = n.templates[l];
                                            h && (l = h)
                                        }
                                    } else {
                                        var f = e(l);
                                        p = e(f).attr("type"), l = e(f).html()
                                    }
                                }
                                if (!p) {
                                    t.logError("Engine type was empty");
                                    var m = new Error("Engine type was empty");
                                    return void o(i, m, n, c, u)
                                }
                                var g = t.TemplateEngineRegistry.find(p);
                                if (!g) {
                                    t.logError("Cannot find template engine for type: " + type);
                                    var m = new Error("Cannot find template engine for type: " + type);
                                    return void o(i, m, n, c, u)
                                }
                                if (l === !0) {
                                    if (g.isCached(c)) return void o(i, null, n, c, u);
                                    var v = "View configuration for view: " + n.id + " claims to have precompiled template for cacheKey: " + c + " but it could not be found";
                                    return t.logError(v), void o(i, new Error(v), n, c, u)
                                }
                                return g.isCached(c) ? void o(i, null, n, c, u) : void g.compile(c, l, function(e) {
                                    o(i, e, n, c, u)
                                })
                            },
                            u = function(e) {
                                var t = [];
                                for (var i in e) {
                                    var n = e[i];
                                    if (n.templates)
                                        for (var a in n.templates) {
                                            var r = n.templates[a];
                                            t.push(function(e, t, i, n, a, r) {
                                                return function(s) {
                                                    l(e, t, i, n, a, r, s)
                                                }
                                            }(e, n, "view", n.id, a, r))
                                        }
                                    if (n.fields)
                                        for (var s in n.fields)
                                            if (n.fields[s].templates)
                                                for (var a in n.fields[s].templates) {
                                                    var r = n.fields[s].templates[a];
                                                    t.push(function(e, t, i, n, a, r) {
                                                        return function(s) {
                                                            l(e, t, i, n, a, r, s)
                                                        }
                                                    }(e, n, "field", s, a, r))
                                                }
                                            if (n.layout && n.layout.template) {
                                                var r = n.layout.template;
                                                t.push(function(e, t, i, n, a, r) {
                                                    return function(s) {
                                                        l(e, t, i, n, a, r, s)
                                                    }
                                                }(e, n, "layout", "layout", "layoutTemplate", r))
                                            }
                                    if (n.globalTemplate) {
                                        var r = n.globalTemplate;
                                        t.push(function(e, t, i, n, a, r) {
                                            return function(s) {
                                                l(e, t, i, n, a, r, s)
                                            }
                                        }(e, n, "global", "global", "globalTemplate", r))
                                    }
                                }
                                for (var o = t.length, u = 0; u < t.length; u++) t[u](o)
                            },
                            c = function() {
                                var e = {},
                                    i = 0;
                                t.normalizedViews || (t.normalizedViews = {}), a.normalizedViews = t.normalizedViews;
                                for (var r in a.views)
                                    if (!t.normalizedViews[r]) {
                                        var o = new t.NormalizedView(r);
                                        if (!o.normalize(a.views)) return t.throwErrorWithCallback("View normalization failed, cannot initialize Alpaca.  Please check the error logs.", n);

                                        e[r] = o, i++
                                    }
                                i > 0 ? u(e) : s(e)
                            };
                        c()
                    },
                    getTemplateDescriptor: function(e, i, n) {
                        var a = null,
                            r = null,
                            s = null;
                        if (e.templates && e.templates[i]) {
                            s = t.makeCacheKey(e.id, "view", e.id, i);
                            var o = e.templates[i];
                            t.isObject(o) && o.cacheKey && (s = o.cacheKey)
                        }
                        if (n && n.path) {
                            var l = n.path;
                            if (e && e.fields && l && l.length > 1) {
                                var u = function(n, a, r) {
                                        if (a != n.length) {
                                            var s = n.slice(),
                                                o = !1,
                                                l = n[a],
                                                c = l.indexOf("[");
                                            c > -1 && (l = l.substring(0, c), o = !0), s[a] = l;
                                            var p = s.join("/");
                                            if (e.fields[p] && e.fields[p].templates && e.fields[p].templates[i]) {
                                                var d = t.makeCacheKey(e.id, "field", p, i);
                                                d && r.push({
                                                    path: p,
                                                    cacheKey: d
                                                })
                                            }
                                            u(n, a + 1, r), o && u(s, a + 1, r)
                                        }
                                    },
                                    c = l.split("/"),
                                    p = [];
                                u(c, 0, p), p.length > 0 && (s = p[0].cacheKey)
                            }
                        }
                        if (("globalTemplate" === i || "global" === i) && (s = t.makeCacheKey(e.id, "global", "global", "globalTemplate")), ("layoutTemplate" === i || "layout" === i) && (s = t.makeCacheKey(e.id, "layout", "layout", "layoutTemplate")), s) {
                            for (var d = t.TemplateEngineRegistry.ids(), h = 0; h < d.length; h++) {
                                var f = d[h],
                                    m = t.TemplateEngineRegistry.find(f);
                                if (m.isCached(s)) {
                                    r = f;
                                    break
                                }
                            }
                            r && (a = {
                                engine: r,
                                cacheKey: s
                            })
                        }
                        return a
                    },
                    tmpl: function(e, i) {
                        var n = t.tmplHtml(e, i);
                        return t.safeDomParse(n)
                    },
                    tmplHtml: function(e, i) {
                        i || (i = {});
                        var n = e.engine,
                            a = t.TemplateEngineRegistry.find(n);
                        if (!a) return t.throwDefaultError("Cannot find template engine for type: " + n);
                        var r = e.cacheKey,
                            s = a.execute(r, i, function(e) {
                                var i = JSON.stringify(e);
                                return e.message && (i = e.message), t.throwDefaultError("The compiled template: " + r + " failed to execute: " + i)
                            });
                        return s
                    }
                }), t.DEBUG = 0, t.INFO = 1, t.WARN = 2, t.ERROR = 3, t.logLevel = t.WARN, t.logDebug = function(e) {
                    t.log(t.DEBUG, e)
                }, t.logInfo = function(e) {
                    t.log(t.INFO, e)
                }, t.logWarn = function(e) {
                    t.log(t.WARN, e)
                }, t.logError = function(e) {
                    t.log(t.ERROR, e)
                }, t.LOG_METHOD_MAP = {
                    0: "debug",
                    1: "info",
                    2: "warn",
                    3: "error"
                }, t.log = function(e, i) {
                    if (t.logLevel <= e) {
                        var n = t.LOG_METHOD_MAP[e];
                        "undefined" != typeof console && console[n] && ("debug" === n ? console.debug(i) : "info" === n ? console.info(i) : "warn" === n ? console.warn(i) : "error" === n ? console.error(i) : console.log(i))
                    }
                }, t.checked = function(e, i) {
                    return t.attrProp(e, "checked", i)
                }, t.disabled = function(e, i) {
                    return t.attrProp(e, "disabled", i)
                }, t.attrProp = function(t, i, n) {
                    return "undefined" != typeof n && (e(t).prop ? e(t).prop(i, n) : n ? e(t).attr(i, n) : e(t).removeAttr(i)), e(t).prop ? e(t).prop(i) : e(t).attr(i)
                }, t.loadRefSchemaOptions = function(e, i, n) {
                    if (i)
                        if ("#" === i) n(e.schema, e.options);
                        else if (0 === i.indexOf("#/")) {
                        for (var a = i.substring(2), r = a.split("/"), s = e.schema, o = 0; o < r.length; o++) {
                            var l = r[o];
                            if (s[l]) s = s[l];
                            else if (s.properties && s.properties[l]) s = s.properties[l];
                            else {
                                if (!s.definitions || !s.definitions[l]) {
                                    s = null;
                                    break
                                }
                                s = s.definitions[l]
                            }
                        }
                        for (var u = e.options, o = 0; o < r.length; o++) {
                            var l = r[o];
                            if (u[l]) u = u[l];
                            else if (u.fields && u.fields[l]) u = u.fields[l];
                            else {
                                if (!u.definitions || !u.definitions[l]) {
                                    u = null;
                                    break
                                }
                                u = u.definitions[l]
                            }
                        }
                        n(s, u)
                    } else if (0 === i.indexOf("#")) {
                        var c = t.resolveReference(e.schema, e.options, i);
                        c ? n(c.schema, c.options) : n()
                    } else {
                        var p = t.pathParts(i);
                        e.connector.loadReferenceSchema(p.path, function(i) {
                            e.connector.loadReferenceOptions(p.path, function(e) {
                                if (p.id) {
                                    var a = t.resolveReference(i, e, p.id);
                                    a && (i = a.schema, e = a.options)
                                }
                                n(i, e)
                            }, function() {
                                n(i)
                            })
                        }, function() {
                            n()
                        })
                    } else n()
                }, t.DEFAULT_ERROR_CALLBACK = function(e) {
                    if (e && e.message) throw t.logError(JSON.stringify(e)), new Error("Alpaca caught an error with the default error handler: " + JSON.stringify(e))
                }, t.defaultErrorCallback = t.DEFAULT_ERROR_CALLBACK, t.throwDefaultError = function(e) {
                    e && t.isObject(e) && (e = JSON.stringify(e));
                    var i = {
                        message: e
                    };
                    t.defaultErrorCallback(i)
                }, t.throwErrorWithCallback = function(e, i) {
                    e && t.isObject(e) && (e = JSON.stringify(e));
                    var n = {
                        message: e
                    };
                    i ? i(n) : t.defaultErrorCallback(n)
                }, t.resolveReference = function(e, i, n) {
                    if (e.id === n || "#" + e.id === n) {
                        var a = {};
                        return e && (a.schema = e), i && (a.options = i), a
                    }
                    if (e.properties)
                        for (var r in e.properties) {
                            var s = e.properties[r],
                                o = null;
                            i && i.fields && i.fields[r] && (o = i.fields[r]);
                            var l = t.resolveReference(s, o, n);
                            if (l) return l
                        } else if (e.items) {
                            var s = e.items,
                                o = null;
                            i && i.items && (o = i.items);
                            var l = t.resolveReference(s, o, n);
                            if (l) return l
                        }
                    return null
                }, e.alpaca = window.Alpaca = t, e.fn.alpaca = function() {
                    var i = t.makeArray(arguments),
                        n = [].concat(this, i),
                        a = t.apply(this, n);
                    return "undefined" == typeof a && (a = e(this)), a
                }, e.fn.outerHTML = function(t) {
                    return t ? e("<div></div>").append(this).html() : e("<div></div>").append(this.clone()).html()
                }, e.fn.swapWith = function(t) {
                    return this.each(function() {
                        var i = e(t).clone(),
                            n = e(this).clone();
                        e(t).replaceWith(n), e(this).replaceWith(i)
                    })
                }, e.fn.attrProp = function(i, n) {
                    return t.attrProp(e(this), i, n)
                }, e.event.special.destroyed = {
                    remove: function(e) {
                        e.handler && e.handler()
                    }
                }, t.pathParts = function(e) {
                    if ("string" != typeof e) return e;
                    var i = e,
                        n = null,
                        a = i.indexOf("#");
                    a > -1 && (n = i.substring(a + 1), i = i.substring(0, a)), t.endsWith(i, "/") && (i = i.substring(0, i.length - 1));
                    var r = {};
                    return r.path = i, n && (r.id = n), r
                }, t.resolveField = function(e, i) {
                    var n = null;
                    if ("string" == typeof i)
                        if (0 === i.indexOf("#/") && propertyId.length > 2);
                        else if ("#" === i || "#/" === i) n = e;
                    else if (0 === i.indexOf("#")) {
                        for (var a = e; a.parent;) a = a.parent;
                        var r = i.substring(1);
                        n = t.resolveFieldByReference(a, r)
                    } else n = e.childrenByPropertyId[i];
                    return n
                }, t.resolveFieldByReference = function(e, i) {
                    if (e.schema && e.schema.id == i) return e;
                    if (e.children && e.children.length > 0)
                        for (var n = 0; n < e.children.length; n++) {
                            var a = e.children[n],
                                r = t.resolveFieldByReference(a, i);
                            if (r) return r
                        }
                    return null
                }, t.anyEquality = function(e, i) {
                    var n = {};
                    if ("object" == typeof e || t.isArray(e))
                        for (var a in e) n[e[a]] = !0;
                    else n[e] = !0;
                    var r = !1;
                    if ("object" == typeof i || t.isArray(i))
                        for (var a in i) {
                            var s = i[a];
                            if (n[s]) {
                                r = !0;
                                break
                            }
                        } else r = n[i];
                    return r
                }, t.series = function(e, t) {
                    async.series(e, function() {
                        t()
                    })
                }, t.parallel = function(e, t) {
                    async.parallel(e, function() {
                        t()
                    })
                }, t.nextTick = function(e) {
                    async.nextTick(function() {
                        e()
                    })
                }, t.compileValidationContext = function(e, t) {
                    var i = [],
                        n = e;
                    do n.isValidationParticipant() || (n = null), n && i.push(n), n && (n = n.parent); while (n);
                    i.reverse();
                    var a = [],
                        r = function(e, t, i) {
                            if (!e || 0 === e.length) return void i();
                            var n = e[0],
                                a = {};
                            a.id = n.getId(), a.field = n, a.path = n.path;
                            var s = n.isValid();
                            n.isContainer() && (s = n.isValid(!0)), a.before = s;
                            var o = function(e, i, n) {
                                var a = e._previouslyValidated;
                                e.validate(), e._validateCustomValidator(function() {
                                    var r = e.isValid();
                                    e.isContainer() && (r = e.isValid(!0)), i.after = r, i.validated = !1, i.invalidated = !1, !s && r ? i.validated = !0 : s && !r ? i.invalidated = !0 : a || r || (i.invalidated = !0), i.container = e.isContainer(), i.valid = i.after, t.push(i), n()
                                })
                            };
                            if (e.length > 1) {
                                var l = e.slice(0);
                                l.shift(), r(l, t, function() {
                                    o(n, a, function() {
                                        i()
                                    })
                                })
                            } else o(n, a, function() {
                                i()
                            })
                        };
                    r(i, a, function() {
                        t(a)
                    })
                }, t.updateValidationStateForContext = function(e, i) {
                    for (var n = 0; n < i.length; n++) {
                        var a = i[n],
                            r = a.field;
                        if (r.getFieldEl().removeClass("alpaca-invalid alpaca-invalid-hidden alpaca-valid"), r.fireCallback("clearValidity"), a.valid) r.getFieldEl().addClass("alpaca-field-valid"), r.fireCallback("valid");
                        else if (r.options.readonly) t.logWarn("The field (id=" + r.getId() + ", title=" + r.getTitle() + ", path=" + r.path + ") is invalid and also read-only");
                        else {
                            var s = !1;
                            r.hideInitValidationError && (s = !0), r.fireCallback("invalid", s), r.getFieldEl().addClass("alpaca-invalid"), s && r.getFieldEl().addClass("alpaca-invalid-hidden")
                        }
                        if (a.validated ? t.later(25, this, function() {
                                r.trigger("validated")
                            }) : a.invalidated && t.later(25, this, function() {
                                r.trigger("invalidated")
                            }), r.options.showMessages && !r.initializing && !r.options.readonly) {
                            var o = [];
                            for (var l in r.validation) r.validation[l].status || o.push({
                                id: l,
                                message: r.validation[l].message
                            });
                            r.displayMessage(o, r.valid)
                        }
                    }
                }, t.fieldApplyFieldAndChildren = function(e, i) {
                    if (i(e), e.children && e.children.length > 0)
                        for (var n = 0; n < e.children.length; n++) t.fieldApplyFieldAndChildren(e.children[n], i)
                }, t.replaceAll = function(e, t, i) {
                    return e.replace(new RegExp(t, "g"), i)
                }, t.asArray = function(e) {
                    if (!t.isArray(e)) {
                        var i = [];
                        return i.push(e), i
                    }
                    return e
                },
                function() {
                    function e(e) {
                        var t = !1;
                        return function() {
                            if (t) throw new Error("Callback was already called.");
                            t = !0, e.apply(n, arguments)
                        }
                    }

                    function t(e) {
                        return e.constructor === String ? "string" : e.constructor === Boolean ? "boolean" : e.constructor === Number ? isNaN(e) ? "nan" : "number" : "undefined" == typeof e ? "undefined" : null === e ? "null" : e instanceof Array ? "array" : e instanceof Date ? "date" : e instanceof RegExp ? "regexp" : "object" == typeof e ? "object" : e instanceof Function ? "function" : void 0
                    }

                    function i(e, i, n) {
                        var a = t(e);
                        return a ? "function" === t(i[a]) ? i[a].apply(i, n) : i[a] : void 0
                    }
                    var n, a, r = {};
                    n = this, null != n && (a = n.async), r.noConflict = function() {
                        return n.async = a, r
                    };
                    var s = function(e, t) {
                            if (e.forEach) return e.forEach(t);
                            for (var i = 0; i < e.length; i += 1) t(e[i], i, e)
                        },
                        o = function(e, t) {
                            if (e.map) return e.map(t);
                            var i = [];
                            return s(e, function(e, n, a) {
                                i.push(t(e, n, a))
                            }), i
                        },
                        l = function(e, t, i) {
                            return e.reduce ? e.reduce(t, i) : (s(e, function(e, n, a) {
                                i = t(i, e, n, a)
                            }), i)
                        },
                        u = function(e) {
                            if (Object.keys) return Object.keys(e);
                            var t = [];
                            for (var i in e) e.hasOwnProperty(i) && t.push(i);
                            return t
                        };
                    "undefined" != typeof process && process.nextTick ? (r.nextTick = process.nextTick, r.setImmediate = "undefined" != typeof setImmediate ? function(e) {
                        setImmediate(e)
                    } : r.nextTick) : "function" == typeof setImmediate ? (r.nextTick = function(e) {
                        setImmediate(e)
                    }, r.setImmediate = r.nextTick) : (r.nextTick = function(e) {
                        setTimeout(e, 0)
                    }, r.setImmediate = r.nextTick), r.each = function(t, i, n) {
                        if (n = n || function() {}, !t.length) return n();
                        var a = 0;
                        s(t, function(r) {
                            i(r, e(function(e) {
                                e ? (n(e), n = function() {}) : (a += 1, a >= t.length && n(null))
                            }))
                        })
                    }, r.forEach = r.each, r.eachSeries = function(e, t, i) {
                        if (i = i || function() {}, !e.length) return i();
                        var n = 0,
                            a = function() {
                                t(e[n], function(t) {
                                    t ? (i(t), i = function() {}) : (n += 1, n >= e.length ? i(null) : a())
                                })
                            };
                        a()
                    }, r.forEachSeries = r.eachSeries, r.eachLimit = function(e, t, i, n) {
                        var a = c(t);
                        a.apply(null, [e, i, n])
                    }, r.forEachLimit = r.eachLimit;
                    var c = function(e) {
                            return function(t, i, n) {
                                if (n = n || function() {}, !t.length || 0 >= e) return n();
                                var a = 0,
                                    r = 0,
                                    s = 0;
                                ! function o() {
                                    if (a >= t.length) return n();
                                    for (; e > s && r < t.length;) r += 1, s += 1, i(t[r - 1], function(e) {
                                        e ? (n(e), n = function() {}) : (a += 1, s -= 1, a >= t.length ? n() : o())
                                    })
                                }()
                            }
                        },
                        p = function(e) {
                            return function() {
                                var t = Array.prototype.slice.call(arguments);
                                return e.apply(null, [r.each].concat(t))
                            }
                        },
                        d = function(e, t) {
                            return function() {
                                var i = Array.prototype.slice.call(arguments);
                                return t.apply(null, [c(e)].concat(i))
                            }
                        },
                        h = function(e) {
                            return function() {
                                var t = Array.prototype.slice.call(arguments);
                                return e.apply(null, [r.eachSeries].concat(t))
                            }
                        },
                        f = function(e, t, i, n) {
                            var a = [];
                            t = o(t, function(e, t) {
                                return {
                                    index: t,
                                    value: e
                                }
                            }), e(t, function(e, t) {
                                i(e.value, function(i, n) {
                                    a[e.index] = n, t(i)
                                })
                            }, function(e) {
                                n(e, a)
                            })
                        };
                    r.map = p(f), r.mapSeries = h(f), r.mapLimit = function(e, t, i, n) {
                        return m(t)(e, i, n)
                    };
                    var m = function(e) {
                        return d(e, f)
                    };
                    r.reduce = function(e, t, i, n) {
                        r.eachSeries(e, function(e, n) {
                            i(t, e, function(e, i) {
                                t = i, n(e)
                            })
                        }, function(e) {
                            n(e, t)
                        })
                    }, r.inject = r.reduce, r.foldl = r.reduce, r.reduceRight = function(e, t, i, n) {
                        var a = o(e, function(e) {
                            return e
                        }).reverse();
                        r.reduce(a, t, i, n)
                    }, r.foldr = r.reduceRight;
                    var g = function(e, t, i, n) {
                        var a = [];
                        t = o(t, function(e, t) {
                            return {
                                index: t,
                                value: e
                            }
                        }), e(t, function(e, t) {
                            i(e.value, function(i) {
                                i && a.push(e), t()
                            })
                        }, function(e) {
                            n(o(a.sort(function(e, t) {
                                return e.index - t.index
                            }), function(e) {
                                return e.value
                            }))
                        })
                    };
                    r.filter = p(g), r.filterSeries = h(g), r.select = r.filter, r.selectSeries = r.filterSeries;
                    var v = function(e, t, i, n) {
                        var a = [];
                        t = o(t, function(e, t) {
                            return {
                                index: t,
                                value: e
                            }
                        }), e(t, function(e, t) {
                            i(e.value, function(i) {
                                i || a.push(e), t()
                            })
                        }, function(e) {
                            n(o(a.sort(function(e, t) {
                                return e.index - t.index
                            }), function(e) {
                                return e.value
                            }))
                        })
                    };
                    r.reject = p(v), r.rejectSeries = h(v);
                    var b = function(e, t, i, n) {
                        e(t, function(e, t) {
                            i(e, function(i) {
                                i ? (n(e), n = function() {}) : t()
                            })
                        }, function(e) {
                            n()
                        })
                    };
                    r.detect = p(b), r.detectSeries = h(b), r.some = function(e, t, i) {
                        r.each(e, function(e, n) {
                            t(e, function(e) {
                                e && (i(!0), i = function() {}), n()
                            })
                        }, function(e) {
                            i(!1)
                        })
                    }, r.any = r.some, r.every = function(e, t, i) {
                        r.each(e, function(e, n) {
                            t(e, function(e) {
                                e || (i(!1), i = function() {}), n()
                            })
                        }, function(e) {
                            i(!0)
                        })
                    }, r.all = r.every, r.sortBy = function(e, t, i) {
                        r.map(e, function(e, i) {
                            t(e, function(t, n) {
                                t ? i(t) : i(null, {
                                    value: e,
                                    criteria: n
                                })
                            })
                        }, function(e, t) {
                            if (e) return i(e);
                            var n = function(e, t) {
                                var i = e.criteria,
                                    n = t.criteria;
                                return n > i ? -1 : i > n ? 1 : 0
                            };
                            i(null, o(t.sort(n), function(e) {
                                return e.value
                            }))
                        })
                    }, r.auto = function(e, t) {
                        t = t || function() {};
                        var i = u(e);
                        if (!i.length) return t(null);
                        var n = {},
                            a = [],
                            o = function(e) {
                                a.unshift(e)
                            },
                            c = function(e) {
                                for (var t = 0; t < a.length; t += 1)
                                    if (a[t] === e) return void a.splice(t, 1)
                            },
                            p = function() {
                                s(a.slice(0), function(e) {
                                    e()
                                })
                            };
                        o(function() {
                            u(n).length === i.length && (t(null, n), t = function() {})
                        }), s(i, function(i) {
                            var a = e[i] instanceof Function ? [e[i]] : e[i],
                                d = function(e) {
                                    var a = Array.prototype.slice.call(arguments, 1);
                                    if (a.length <= 1 && (a = a[0]), e) {
                                        var o = {};
                                        s(u(n), function(e) {
                                            o[e] = n[e]
                                        }), o[i] = a, t(e, o), t = function() {}
                                    } else n[i] = a, r.setImmediate(p)
                                },
                                h = a.slice(0, Math.abs(a.length - 1)) || [],
                                f = function() {
                                    return l(h, function(e, t) {
                                        return e && n.hasOwnProperty(t)
                                    }, !0) && !n.hasOwnProperty(i)
                                };
                            if (f()) a[a.length - 1](d, n);
                            else {
                                var m = function() {
                                    f() && (c(m), a[a.length - 1](d, n))
                                };
                                o(m)
                            }
                        })
                    }, r.waterfall = function(e, t) {
                        if (t = t || function() {}, e.constructor !== Array) {
                            var i = new Error("First argument to waterfall must be an array of functions");
                            return t(i)
                        }
                        if (!e.length) return t();
                        var n = function(e) {
                            return function(i) {
                                if (i) t.apply(null, arguments), t = function() {};
                                else {
                                    var a = Array.prototype.slice.call(arguments, 1),
                                        s = e.next();
                                    a.push(s ? n(s) : t), r.setImmediate(function() {
                                        e.apply(null, a)
                                    })
                                }
                            }
                        };
                        n(r.iterator(e))()
                    };
                    var y = function(e, t, i) {
                        if (i = i || function() {}, t.constructor === Array) e.map(t, function(e, t) {
                            e && e(function(e) {
                                var i = Array.prototype.slice.call(arguments, 1);
                                i.length <= 1 && (i = i[0]), t.call(null, e, i)
                            })
                        }, i);
                        else {
                            var n = {};
                            e.each(u(t), function(e, i) {
                                t[e](function(t) {
                                    var a = Array.prototype.slice.call(arguments, 1);
                                    a.length <= 1 && (a = a[0]), n[e] = a, i(t)
                                })
                            }, function(e) {
                                i(e, n)
                            })
                        }
                    };
                    r.parallel = function(e, t) {
                        y({
                            map: r.map,
                            each: r.each
                        }, e, t)
                    }, r.parallelLimit = function(e, t, i) {
                        y({
                            map: m(t),
                            each: c(t)
                        }, e, i)
                    }, r.series = function(e, t) {
                        if (t = t || function() {}, e.constructor === Array) r.mapSeries(e, function(e, t) {
                            e && e(function(e) {
                                var i = Array.prototype.slice.call(arguments, 1);
                                i.length <= 1 && (i = i[0]), t.call(null, e, i)
                            })
                        }, t);
                        else {
                            var i = {};
                            r.eachSeries(u(e), function(t, n) {
                                e[t](function(e) {
                                    var a = Array.prototype.slice.call(arguments, 1);
                                    a.length <= 1 && (a = a[0]), i[t] = a, n(e)
                                })
                            }, function(e) {
                                t(e, i)
                            })
                        }
                    }, r.iterator = function(e) {
                        var t = function(i) {
                            var n = function() {
                                return e.length && e[i].apply(null, arguments), n.next()
                            };
                            return n.next = function() {
                                return i < e.length - 1 ? t(i + 1) : null
                            }, n
                        };
                        return t(0)
                    }, r.apply = function(e) {
                        var t = Array.prototype.slice.call(arguments, 1);
                        return function() {
                            return e.apply(null, t.concat(Array.prototype.slice.call(arguments)))
                        }
                    };
                    var w = function(e, t, i, n) {
                        var a = [];
                        e(t, function(e, t) {
                            i(e, function(e, i) {
                                a = a.concat(i || []), t(e)
                            })
                        }, function(e) {
                            n(e, a)
                        })
                    };
                    r.concat = p(w), r.concatSeries = h(w), r.whilst = function(e, t, i) {
                        e() ? t(function(n) {
                            return n ? i(n) : void r.whilst(e, t, i)
                        }) : i()
                    }, r.doWhilst = function(e, t, i) {
                        e(function(n) {
                            return n ? i(n) : void(t() ? r.doWhilst(e, t, i) : i())
                        })
                    }, r.until = function(e, t, i) {
                        e() ? i() : t(function(n) {
                            return n ? i(n) : void r.until(e, t, i)
                        })
                    }, r.doUntil = function(e, t, i) {
                        e(function(n) {
                            return n ? i(n) : void(t() ? i() : r.doUntil(e, t, i))
                        })
                    }, r.queue = function(t, i) {
                        function n(e, t, n, a) {
                            t.constructor !== Array && (t = [t]), s(t, function(t) {
                                var s = {
                                    data: t,
                                    callback: "function" == typeof a ? a : null
                                };
                                n ? e.tasks.unshift(s) : e.tasks.push(s), e.saturated && e.tasks.length === i && e.saturated(), r.setImmediate(e.process)
                            })
                        }
                        void 0 === i && (i = 1);
                        var a = 0,
                            o = {
                                tasks: [],
                                concurrency: i,
                                saturated: null,
                                empty: null,
                                drain: null,
                                push: function(e, t) {
                                    n(o, e, !1, t)
                                },
                                unshift: function(e, t) {
                                    n(o, e, !0, t)
                                },
                                process: function() {
                                    if (a < o.concurrency && o.tasks.length) {
                                        var i = o.tasks.shift();
                                        o.empty && 0 === o.tasks.length && o.empty(), a += 1;
                                        var n = function() {
                                                a -= 1, i.callback && i.callback.apply(i, arguments), o.drain && o.tasks.length + a === 0 && o.drain(), o.process()
                                            },
                                            r = e(n);
                                        t(i.data, r)
                                    }
                                },
                                length: function() {
                                    return o.tasks.length
                                },
                                running: function() {
                                    return a
                                }
                            };
                        return o
                    }, r.cargo = function(e, t) {
                        var i = !1,
                            n = [],
                            a = {
                                tasks: n,
                                payload: t,
                                saturated: null,
                                empty: null,
                                drain: null,
                                push: function(e, i) {
                                    e.constructor !== Array && (e = [e]), s(e, function(e) {
                                        n.push({
                                            data: e,
                                            callback: "function" == typeof i ? i : null
                                        }), a.saturated && n.length === t && a.saturated()
                                    }), r.setImmediate(a.process)
                                },
                                process: function l() {
                                    if (!i) {
                                        if (0 === n.length) return void(a.drain && a.drain());
                                        var r = "number" == typeof t ? n.splice(0, t) : n.splice(0),
                                            u = o(r, function(e) {
                                                return e.data
                                            });
                                        a.empty && a.empty(), i = !0, e(u, function() {
                                            i = !1;
                                            var e = arguments;
                                            s(r, function(t) {
                                                t.callback && t.callback.apply(null, e)
                                            }), l()
                                        })
                                    }
                                },
                                length: function() {
                                    return n.length
                                },
                                running: function() {
                                    return i
                                }
                            };
                        return a
                    };
                    var x = function(e) {
                        return function(t) {
                            var i = Array.prototype.slice.call(arguments, 1);
                            t.apply(null, i.concat([function(t) {
                                var i = Array.prototype.slice.call(arguments, 1);
                                "undefined" != typeof console && (t ? console.error && console.error(t) : console[e] && s(i, function(t) {
                                    console[e](t)
                                }))
                            }]))
                        }
                    };
                    r.log = x("log"), r.dir = x("dir"), r.memoize = function(e, t) {
                        var i = {},
                            n = {};
                        t = t || function(e) {
                            return e
                        };
                        var a = function() {
                            var a = Array.prototype.slice.call(arguments),
                                r = a.pop(),
                                s = t.apply(null, a);
                            s in i ? r.apply(null, i[s]) : s in n ? n[s].push(r) : (n[s] = [r], e.apply(null, a.concat([function() {
                                i[s] = arguments;
                                var e = n[s];
                                delete n[s];
                                for (var t = 0, a = e.length; a > t; t++) e[t].apply(null, arguments)
                            }])))
                        };
                        return a.memo = i, a.unmemoized = e, a
                    }, r.unmemoize = function(e) {
                        return function() {
                            return (e.unmemoized || e).apply(null, arguments)
                        }
                    }, r.times = function(e, t, i) {
                        for (var n = [], a = 0; e > a; a++) n.push(a);
                        return r.map(n, t, i)
                    }, r.timesSeries = function(e, t, i) {
                        for (var n = [], a = 0; e > a; a++) n.push(a);
                        return r.mapSeries(n, t, i)
                    }, r.compose = function() {
                        var e = Array.prototype.reverse.call(arguments);
                        return function() {
                            var t = this,
                                i = Array.prototype.slice.call(arguments),
                                n = i.pop();
                            r.reduce(e, i, function(e, i, n) {
                                i.apply(t, e.concat([function() {
                                    var e = arguments[0],
                                        t = Array.prototype.slice.call(arguments, 1);
                                    n(e, t)
                                }]))
                            }, function(e, i) {
                                n.apply(t, [e].concat(i))
                            })
                        }
                    };
                    var E = function(e, t) {
                        var i = function() {
                            var i = this,
                                n = Array.prototype.slice.call(arguments),
                                a = n.pop();
                            return e(t, function(e, t) {
                                e.apply(i, n.concat([t]))
                            }, a)
                        };
                        if (arguments.length > 2) {
                            var n = Array.prototype.slice.call(arguments, 2);
                            return i.apply(this, n)
                        }
                        return i
                    };
                    r.applyEach = p(E), r.applyEachSeries = h(E), r.forever = function(e, t) {
                        function i(n) {
                            if (n) {
                                if (t) return t(n);
                                throw n
                            }
                            e(i)
                        }
                        i()
                    }, n.async = r;
                    n.equiv = function() {
                        var e, n = [],
                            a = function() {
                                function i(e, t) {
                                    return e instanceof t.constructor || t instanceof e.constructor ? t == e : t === e
                                }
                                return {
                                    string: i,
                                    "boolean": i,
                                    number: i,
                                    "null": i,
                                    undefined: i,
                                    nan: function(e) {
                                        return isNaN(e)
                                    },
                                    date: function(e, i) {
                                        return "date" === t(e) && i.valueOf() === e.valueOf()
                                    },
                                    regexp: function(e, i) {
                                        return "regexp" === t(e) && i.source === e.source && i.global === e.global && i.ignoreCase === e.ignoreCase && i.multiline === e.multiline
                                    },
                                    "function": function() {
                                        var e = n[n.length - 1];
                                        return e !== Object && "undefined" != typeof e
                                    },
                                    array: function(i, n) {
                                        var a, r;
                                        if ("array" !== t(i)) return !1;
                                        if (r = n.length, r !== i.length) return !1;
                                        for (a = 0; r > a; a++)
                                            if (!e(n[a], i[a])) return !1;
                                        return !0
                                    },
                                    object: function(t, i) {
                                        var a, r = !0,
                                            s = [],
                                            o = [];
                                        if (i.constructor !== t.constructor) return !1;
                                        n.push(i.constructor);
                                        for (a in i) s.push(a), e(i[a], t[a]) || (r = !1);
                                        n.pop();
                                        for (a in t) o.push(a);
                                        return r && e(s.sort(), o.sort())
                                    }
                                }
                            }();
                        return e = function() {
                            var e = Array.prototype.slice.apply(arguments);
                            return e.length < 2 ? !0 : function(e, n) {
                                return e === n ? !0 : null === e || null === n || "undefined" == typeof e || "undefined" == typeof n || t(e) !== t(n) ? !1 : i(e, a, [n, e])
                            }(e[0], e[1]) && arguments.callee.apply(this, e.splice(1, e.length - 1))
                        }
                    }()
                }(), t.MARKER_CLASS_CONTROL_FIELD = "alpaca-marker-control-field", t.MARKER_CLASS_CONTAINER_FIELD = "alpaca-marker-container-field", t.MARKER_CLASS_CONTAINER_FIELD_ITEM = "alpaca-marker-control-field-item", t.MARKER_DATA_CONTAINER_FIELD_ITEM_KEY = "data-alpaca-container-field-item-key", t.MARKER_CLASS_FORM_ITEMS_FIELD = "alpaca-marker-form-items-field", t.CLASS_CONTAINER = "alpaca-container", t.CLASS_CONTROL = "alpaca-control", t.MARKER_CLASS_INSERT = "alpaca-marker-insert", t.MARKER_DATA_INSERT_KEY = "data-alpaca-marker-insert-key", t.MARKER_CLASS_ARRAY_TOOLBAR = "alpaca-marker-array-field-toolbar", t.MARKER_DATA_ARRAY_TOOLBAR_FIELD_ID = "data-alpaca-array-field-toolbar-field-id", t.MARKER_CLASS_ARRAY_ITEM_ACTIONBAR = "alpaca-marker-array-field-item-actionbar", t.MARKER_DATA_ARRAY_ITEM_KEY = "data-alpaca-marker-array-field-item-key", t.MARKER_DATA_ARRAY_ITEM_PARENT_FIELD_ID = "data-alpaca-marker-array-field-item-parent-field-id", t.MARKER_CLASS_CONTAINER_FIELD_ITEM_FIELD = "alpaca-marker-container-field-item-field", t.makeCacheKey = function(e, t, i, n) {
                    return e + ":" + t + ":" + i + ":" + n
                }, t.splitCacheKey = function(e) {
                    var t = {},
                        i = e.indexOf(":"),
                        n = e.lastIndexOf(":");
                    t.viewId = e.substring(0, i), t.templateId = e.substring(n + 1);
                    var a = e.substring(i + 1, n),
                        r = a.indexOf(":");
                    return t.scopeType = a.substring(0, r), t.scopeId = a.substring(r + 1), t
                }, t.createEmptyDataInstance = function(e) {
                    return e ? "object" === e.type ? {} : "array" === e.type ? [] : "number" === e.type ? -1 : "boolean" === e.type ? !1 : "" : ""
                }, t.animatedSwap = function(t, i, n, a) {
                    "function" == typeof n && (a = n, n = 500);
                    var r = function(t, i, n, a) {
                        var r = e(t),
                            s = e(i),
                            o = r.offset(),
                            l = s.offset(),
                            u = r.clone(),
                            c = s.clone(),
                            p = l.top + s.height() - o.top,
                            d = 0,
                            h = 0,
                            f = l.left + s.width() - o.left,
                            m = 0,
                            g = 0;
                        r.css("opacity", 0), s.css("opacity", 0), u.insertAfter(r).css({
                            position: "absolute",
                            width: r.outerWidth(),
                            height: r.outerHeight()
                        }).offset(o).css("z-index", "999"), c.insertAfter(s).css({
                            position: "absolute",
                            width: s.outerWidth(),
                            height: s.outerHeight()
                        }).offset(l).css("z-index", "999"), o.top !== l.top && (d = p - r.height()), h = p - s.height(), o.left !== l.left && (m = f - r.width()), g = f - s.width(), u.animate({
                            top: "+=" + d + "px",
                            left: "+=" + m + "px"
                        }, n, function() {
                            s.css("opacity", 1), e(this).remove()
                        }), c.animate({
                            top: "-=" + h + "px",
                            left: "-=" + g + "px"
                        }, n, function() {
                            r.css("opacity", 1), e(this).remove()
                        }), window.setTimeout(function() {
                            u.remove(), c.remove(), a()
                        }, n + 1)
                    };
                    r(t, i, n, a)
                }, t.readCookie = function(e) {
                    function t(e) {
                        for (var t = e + "=", i = document.cookie.split(";"), n = 0; n < i.length; n++) {
                            for (var a = i[n];
                                " " == a.charAt(0);) a = a.substring(1, a.length);
                            if (0 == a.indexOf(t)) return a.substring(t.length, a.length)
                        }
                        return null
                    }
                    var i = null;
                    return "undefined" != typeof document && (i = t(e)), i
                }, t.CSRF_TOKEN = null, t.CSRF_COOKIE_NAMES = ["CSRF-TOKEN", "XSRF-TOKEN"], t.CSRF_HEADER_NAME = "X-CSRF-TOKEN"
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.listenerId = function() {
                var e = 0;
                return function() {
                    return "listener-" + e++
                }
            }(), t.subscribe = function() {
                var e = t.makeArray(arguments),
                    i = null,
                    n = null,
                    a = null;
                if (2 == e.length ? (i = "global", n = e.shift(), a = e.shift()) : (i = e.shift(), n = e.shift(), a = e.shift()), n && t.isObject(n) && (n = n.path), !n) return t.logError("Missing observable subscribe id: " + n), null;
                var r = a._lfid;
                r || (r = t.listenerId(), a._lfid = r);
                var s = function(e) {
                    return function() {
                        return a.apply(e, arguments)
                    }
                }(this);
                s._lfid = a._lfid;
                var o = t.ScopedObservables.get(i),
                    l = o.observable(n);
                return l.subscribe(r, s), {
                    scope: i,
                    id: n,
                    listenerId: r
                }
            }, t.unsubscribe = function() {
                var e = t.makeArray(arguments),
                    i = null,
                    n = null,
                    a = null;
                2 == e.length ? (i = "global", n = e.shift(), a = e.shift()) : 3 == e.length && (i = e.shift(), n = e.shift(), a = e.shift());
                var r = a;
                if (t.isFunction(r) && (r = r._lfid), n && t.isObject(n) && (n = n.path), !n) return t.logError("Missing observable id: " + n), null;
                var s = t.ScopedObservables.get(i),
                    o = s.observable(n);
                return o.unsubscribe(r), {
                    scope: i,
                    id: n,
                    listenerId: r
                }
            }, t.observable = function() {
                var e, i, n = t.makeArray(arguments);
                if (1 == n.length ? (e = "global", i = n.shift()) : 2 == n.length && (e = n.shift(), i = n.shift()), i && t.isObject(i) && (i = i.path), i) {
                    var a = t.ScopedObservables.get(e);
                    observable = a.observable(i)
                } else t.logError("Missing observable id: " + JSON.stringify(n));
                return observable
            }, t.clearObservable = function() {
                var e, i, n = t.makeArray(arguments);
                1 == n.length ? (e = "global", i = n.shift()) : 2 == n.length && (e = n.shift(), i = n.shift()), i && t.isObject(i) && (i = i.path), i || t.logError("Missing observable id: " + JSON.stringify(n));
                var a = t.ScopedObservables.get(e),
                    r = a.observable(i);
                r.clear()
            }, t.dependentObservable = function() {
                var e = null,
                    i = null,
                    n = null,
                    a = t.makeArray(arguments);
                if (2 == a.length) e = "global", i = a.shift(), n = a.shift();
                else {
                    if (3 != a.length) return void t.error("Wrong number of arguments");
                    e = a.shift(), i = a.shift(), n = a.shift()
                }
                i && t.isObject(i) && (i = i.path), i || t.logError("Missing observable id: " + JSON.stringify(a));
                var r = t.ScopedObservables.get(e);
                return r.dependentObservable(i, n)
            }
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Observables = Base.extend({
                constructor: function(e) {
                    this.base(), this.scope = e, this.observables = {}
                },
                observable: function(e, i) {
                    if (!this.observables[e]) {
                        var n = new t.Observable(this.scope, e);
                        i && n.set(i), this.observables[e] = n
                    }
                    return this.observables[e]
                },
                dependentObservable: function(e, i) {
                    var n = this;
                    if (!this.observables[e]) {
                        var a = this.observable(e),
                            r = new t.Observables(this.scope);
                        r.observable = function(e, t) {
                            var i = n.observable(e, t);
                            return i.markDependentOnUs(a), i
                        };
                        var s = function() {
                            return i.call(r)
                        };
                        a.setValueFunction(s)
                    }
                    return this.observables[e]
                },
                observables: function() {
                    return this.observables
                }
            })
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Observable = Base.extend({
                constructor: function(t, i) {
                    this.base(), this.id = t + "-" + i, this.value = null, this.subscribers = {}, this.dependentOnUs = {}, this.notifySubscribers = function(t) {
                        var i = this;
                        e.each(this.subscribers, function(e, n) {
                            n(i.value, t)
                        })
                    }, this.notifyDependents = function(t) {
                        e.each(this.dependentOnUs, function(e, t) {
                            t.onDependencyChange()
                        })
                    }, this.valueFunction = null
                },
                setValueFunction: function(e) {
                    this.valueFunction = e, this.onDependencyChange()
                },
                subscribe: function(e, t) {
                    this.isSubscribed(e) || (this.subscribers[e] = t)
                },
                unsubscribe: function(e) {
                    delete this.subscribers[e]
                },
                isSubscribed: function(e) {
                    return this.subscribers[e] ? !0 : !1
                },
                markDependentOnUs: function(e) {
                    this.dependentOnUs[e.id] = e
                },
                onDependencyChange: function() {
                    var e = this.get();
                    if (this.valueFunction) {
                        var t = this.valueFunction();
                        e != t && this.set(t)
                    }
                },
                set: function(e) {
                    var t = this.value;
                    this.value = e, this.notifyDependents(t), this.notifySubscribers(t)
                },
                get: function(e) {
                    var t = this.value;
                    return t || (t = e), t
                },
                clear: function() {
                    var e = this.value;
                    delete this.value, this.notifyDependents(e), this.notifySubscribers(e)
                }
            })
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.ScopedObservables = {}, t.ScopedObservables.map = {}, t.ScopedObservables.get = function(e) {
                return t.ScopedObservables.map[e] || (t.ScopedObservables.map[e] = new t.Observables(e)), t.ScopedObservables.map[e]
            }
        }(jQuery),
        function() {
            Alpaca.TemplateEngineRegistry = function() {
                var e = {};
                return {
                    register: function(t, i) {
                        e[t] = i, i.init()
                    },
                    find: function(t) {
                        var i = null;
                        if (e[t]) i = e[t];
                        else
                            for (var n in e)
                                for (var a = e[n].supportedMimetypes(), r = 0; r < a.length; r++)
                                    if (t.toLowerCase() === a[r].toLowerCase()) {
                                        i = e[n];
                                        break
                                    } return i
                    },
                    ids: function() {
                        var t = [];
                        for (var i in e) t.push(i);
                        return t
                    }
                }
            }()
        }(),
        function(e) {
            Alpaca.AbstractTemplateEngine = Base.extend({
                constructor: function(t) {
                    this.base(), this.id = t, this.cleanup = function(t) {
                        return t && 1 === e(t).length && "script" === e(t)[0].nodeName.toLowerCase() ? e(t).html() : t
                    }
                },
                compile: function(t, i, n) {
                    var a = this,
                        r = "html";
                    if (Alpaca.isString(i)) {
                        var s = i.toLowerCase();
                        Alpaca.isUri(s) ? r = "uri" : (0 === i.indexOf("#") || 0 === i.indexOf(".") || 0 === i.indexOf("[")) && (r = "selector")
                    }
                    if ("selector" === r) a._compile(t, i, function(e) {
                        n(e)
                    });
                    else if ("uri" === r) {
                        var o = a.fileExtension(),
                            l = i; - 1 === l.indexOf("." + o) && (l += "." + o), e.ajax({
                            url: l,
                            dataType: "html",
                            success: function(e, i, r) {
                                e = a.cleanup(e), a._compile(t, e, function(e) {
                                    n(e)
                                })
                            },
                            error: function(e, t) {
                                n({
                                    message: e.responseText,
                                    xhr: e,
                                    code: t
                                }, null)
                            }
                        })
                    } else if ("html" === r) {
                        var u = i;
                        u instanceof jQuery && (u = e(u).outerHTML()), a._compile(t, u, function(e) {
                            n(e)
                        })
                    } else n(new Error("Template engine cannot determine how to handle type: " + r))
                },
                _compile: function(e, t, i) {
                    Alpaca.isEmpty(t) && (t = ""), t = Alpaca.trim(t), 0 === t.toLowerCase().indexOf("<script") || (t = "<script type='" + this.supportedMimetypes()[0] + "'>" + t + "</script>"), Alpaca.logDebug("Compiling template: " + this.id + ", cacheKey: " + e + ", template: " + t), this.doCompile(e, t, i)
                },
                doCompile: function(e, t, i) {},
                execute: function(e, t, i) {
                    Alpaca.logDebug("Executing template for cache key: " + e);
                    var n = this.doExecute(e, t, i);
                    return n = this.cleanup(n)
                },
                doExecute: function(e, t, i) {
                    return null
                },
                fileExtension: function() {
                    return "html"
                },
                supportedMimetypes: function() {
                    return []
                },
                isCached: function(e) {
                    return !1
                },
                findCacheKeys: function(e) {
                    return []
                }
            })
        }(jQuery),
        function($, Handlebars, HandlebarsPrecompiled) {
            var COMPILED_TEMPLATES = {},
                helpers = {};
            helpers.compare = function(e, t, i) {
                if (arguments.length < 3) throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
                var n = i.hash.operator || "==",
                    a = {
                        "==": function(e, t) {
                            return e == t
                        },
                        "===": function(e, t) {
                            return e === t
                        },
                        "!=": function(e, t) {
                            return e != t
                        },
                        "!==": function(e, t) {
                            return e !== t
                        },
                        "<": function(e, t) {
                            return t > e
                        },
                        ">": function(e, t) {
                            return e > t
                        },
                        "<=": function(e, t) {
                            return t >= e
                        },
                        ">=": function(e, t) {
                            return e >= t
                        },
                        "typeof": function(e, t) {
                            return typeof e == t
                        }
                    };
                if (!a[n]) throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + n);
                var r = a[n](e, t);
                return r ? i.fn(this) : i.inverse(this)
            }, helpers.ifnot = function(e, t) {
                return e ? t.inverse(this) : t.fn(this)
            }, helpers.times = function(e, t) {
                for (var i = "", n = 0; e > n; ++n) i += t.fn(n);
                return i
            }, helpers.control = function(e) {
                return "<div class='" + Alpaca.MARKER_CLASS_CONTROL_FIELD + "'></div>"
            }, helpers.container = function(e) {
                return "<div class='" + Alpaca.MARKER_CLASS_CONTAINER_FIELD + "'></div>"
            }, helpers.item = function(e, t) {
                return Alpaca.isObject(e) && (t = e, e = "div"), "<" + e + " class='" + Alpaca.MARKER_CLASS_CONTAINER_FIELD_ITEM + "' " + Alpaca.MARKER_DATA_CONTAINER_FIELD_ITEM_KEY + "='" + this.name + "'></" + e + ">"
            }, helpers.itemField = function(e, t) {
                return Alpaca.isObject(e) && (t = e, e = "div"), "<" + e + " class='" + Alpaca.MARKER_CLASS_CONTAINER_FIELD_ITEM_FIELD + "'></" + e + ">"
            }, helpers.formItems = function(e) {
                return "<div class='" + Alpaca.MARKER_CLASS_FORM_ITEMS_FIELD + "'></div>"
            }, helpers.insert = function(e) {
                return "<div class='" + Alpaca.MARKER_CLASS_INSERT + "' " + Alpaca.MARKER_DATA_INSERT_KEY + "='" + e + "'></div>"
            }, helpers.str = function(e) {
                return e === !1 ? "false" : e === !0 ? "true" : 0 === e ? "0" : "undefined" == typeof e ? "" : null === e ? "" : Alpaca.isString(e) ? e : Alpaca.isNumber(e) ? e : Alpaca.isObject(e) ? JSON.stringify(e, null, "  ") : Alpaca.isArray(e) ? JSON.stringify(e, null, "  ") : e
            }, helpers.arrayToolbar = function(e) {
                return "<div class='" + Alpaca.MARKER_CLASS_ARRAY_TOOLBAR + "' " + Alpaca.MARKER_DATA_ARRAY_TOOLBAR_FIELD_ID + "='" + this.id + "'></div>"
            }, helpers.arrayActionbar = function(e) {
                return "<div class='" + Alpaca.MARKER_CLASS_ARRAY_ITEM_ACTIONBAR + "' " + Alpaca.MARKER_DATA_ARRAY_ITEM_KEY + "='" + this.name + "' " + Alpaca.MARKER_DATA_ARRAY_ITEM_PARENT_FIELD_ID + "='" + this.parentFieldId + "'></div>"
            }, Handlebars.registerHelper("arrayToolbar", helpers.arrayToolbar), Handlebars.registerHelper("arrayActionbar", helpers.arrayActionbar), Handlebars.registerHelper("setIndex", function(e) {
                this.index = Number(e)
            }), Handlebars.registerHelper("eachProperty", function(e, t) {
                var i = "";
                for (var n in e) i += t.fn({
                    key: n,
                    value: e[n]
                });
                return i
            }), Handlebars.registerHelper("uploadErrorMessage", function(e) {
                var t = e;
                return 1 === e ? t = "File exceeds upload_max_filesize" : 2 === e ? t = "File exceeds MAX_FILE_SIZE" : 3 === e ? t = "File was only partially uploaded" : 4 === e ? t = "No File was uploaded" : 5 === e ? t = "Missing a temporary folder" : 6 === e ? t = "Failed to write file to disk" : 7 === e ? t = "File upload stopped by extension" : "maxFileSize" === e ? t = "File is too big" : "minFileSize" === e ? t = "File is too small" : "acceptFileTypes" === e ? t = "Filetype not allowed" : "maxNumberOfFiles" === e ? t = "Max number of files exceeded" : "uploadedBytes" === e ? t = "Uploaded bytes exceed file size" : "emptyResult" === e && (t = "Empty file upload result"), t
            }), Handlebars.registerHelper("disguise", function(e, t) {
                for (var i = "", n = 0; n < e.length; n++) i += t;
                return i
            }), Handlebars.registerHelper("compare", helpers.compare), Handlebars.registerHelper("control", helpers.control), Handlebars.registerHelper("container", helpers.container), Handlebars.registerHelper("item", helpers.item), Handlebars.registerHelper("itemField", helpers.itemField), Handlebars.registerHelper("formItems", helpers.formItems), Handlebars.registerHelper("times", helpers.times), Handlebars.registerHelper("str", helpers.str), Handlebars.registerHelper("with", function(e, t) {
                return t.fn(e)
            }), Handlebars.registerHelper("ifnot", helpers.ifnot);
            var partials = {};
            Alpaca.HandlebarsTemplateEngine = Alpaca.AbstractTemplateEngine.extend({
                fileExtension: function() {
                    return "html"
                },
                supportedMimetypes: function() {
                    return ["text/x-handlebars-template", "text/x-handlebars-tmpl"]
                },
                init: function() {
                    if (HandlebarsPrecompiled)
                        for (var e in HandlebarsPrecompiled) {
                            var t = HandlebarsPrecompiled[e];
                            for (var i in t) {
                                var n = t[i];
                                if ("function" == typeof n) {
                                    var a = Alpaca.makeCacheKey(e, "view", e, i);
                                    COMPILED_TEMPLATES[a] = n
                                }
                            }
                        }
                },
                doCompile: function(cacheKey, html, callback) {
                    var self = this,
                        template = null;
                    try {
                        var functionString = Handlebars.precompile(html);
                        template = eval("(" + functionString + ")"), template = Handlebars.template(template),
                            COMPILED_TEMPLATES[cacheKey] = template
                    } catch (e) {
                        return void callback(e)
                    }
                    callback()
                },
                doExecute: function(e, t, i) {
                    var n = COMPILED_TEMPLATES[e];
                    if (!n) return void i(new Error("Could not find handlebars cached template for key: " + e));
                    var a = null;
                    try {
                        a = n(t)
                    } catch (r) {
                        return i(r), null
                    }
                    return a
                },
                isCached: function(e) {
                    return COMPILED_TEMPLATES[e] ? !0 : !1
                },
                findCacheKeys: function(e) {
                    var t = [];
                    for (var i in COMPILED_TEMPLATES) 0 === i.indexOf(e + ":") && t.push(i);
                    return t
                }
            }), Alpaca.TemplateEngineRegistry.register("handlebars", new Alpaca.HandlebarsTemplateEngine("handlebars"))
        }(jQuery, "undefined" != typeof Handlebars ? Handlebars : window.Handlebars, "undefined" != typeof HandlebarsPrecompiled ? HandlebarsPrecompiled : window.HandlebarsPrecompiled),
        function(e) {
            var t = e.alpaca;
            t.NormalizedView = Base.extend({
                constructor: function(e) {
                    this.id = e
                },
                normalize: function(e) {
                    var i = e[this.id];
                    if (!i) return t.logError("View compilation failed - view not found: " + this.id), !1;
                    for (var n = [], a = i; a;) {
                        n.push(a);
                        var r = a.parent;
                        if (r) {
                            var s = e[a.parent];
                            if (!s) return t.logError("View compilation failed - cannot find parent view: " + r + " for view: " + a.id), !1;
                            a = s
                        } else a = null
                    }
                    n = n.reverse();
                    for (var o = function(e, i, n) {
                            var a = i[n],
                                r = e[n];
                            t.isUndefined(r) || t.isUndefined(a) || t.logDebug("View property: " + n + " already has value: " + r + " and overwriting to: " + a), t.isUndefined(a) || (e[n] = a)
                        }, l = function(e, i, n) {
                            var a = i[n],
                                r = e[n];
                            t.isUndefined(r) || t.isUndefined(a) || t.logDebug("View property: " + n + " already has function, overwriting"), t.isUndefined(a) || (e[n] = a)
                        }, u = function(e, i, n) {
                            var a = i[n];
                            a && (e[n] || (e[n] = {}), t.mergeObject2(a, e[n]))
                        }, c = 0; c < n.length; c++) {
                        var p = n[c];
                        o(this, p, "type"), o(this, p, "ui"), o(this, p, "displayReadonly"), o(this, p, "locale"), l(this, p, "render"), l(this, p, "postRender"), u(this, p, "templates"), u(this, p, "fields"), u(this, p, "layout"), u(this, p, "styles"), u(this, p, "callbacks"), u(this, p, "messages"), o(this, p, "horizontal"), o(this, p, "collapsible"), o(this, p, "legendStyle"), o(this, p, "toolbarStyle"), o(this, p, "buttonStyle"), o(this, p, "toolbarSticky"), o(this, p, "globalTemplate"), u(this, p, "wizard")
                    }
                    return t.logDebug("View compilation complete for view: " + this.id), t.logDebug("Final view: "), t.logDebug(JSON.stringify(this, null, "   ")), !0
                }
            })
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.RuntimeView = Base.extend({
                constructor: function(e, t) {
                    this.field = t, this.setView(e)
                },
                setView: function(e) {
                    e || (e = "web-edit");
                    var i = t.getNormalizedView(e);
                    if (!i) throw new Error("Runtime view for view id: " + e + " could not find a normalized view");
                    for (var n in i) i.hasOwnProperty(n) && (this[n] = i[n])
                },
                getWizard: function() {
                    return this.getViewParam("wizard")
                },
                getGlobalTemplateDescriptor: function() {
                    return this.getTemplateDescriptor("globalTemplate")
                },
                getLayout: function() {
                    var e = this;
                    return {
                        templateDescriptor: this.getTemplateDescriptor("layoutTemplate", e),
                        bindings: this.getViewParam(["layout", "bindings"], !0)
                    }
                },
                getTemplateDescriptor: function(e, i) {
                    return t.getTemplateDescriptor(this, e, i)
                },
                getMessage: function(e, i) {
                    i || (i = t.defaultLocale);
                    var n = this.getViewParam(["messages", i, e]);
                    return t.isEmpty(n) && (n = this.getViewParam(["messages", e])), n
                },
                getViewParam: function(e, i) {
                    var n = this.field.path;
                    if (this.fields && this.fields[n]) {
                        var a = this._getConfigVal(this.fields[n], e);
                        if (!t.isEmpty(a)) return a
                    }
                    if (n && -1 !== n.indexOf("[") && -1 !== n.indexOf("]")) {
                        var r = n.replace(/\[\d+\]/g, "[*]");
                        if (this.fields && this.fields[r]) {
                            var a = this._getConfigVal(this.fields[r], e);
                            if (!t.isEmpty(a)) return a
                        }
                    }
                    if (n && -1 !== n.indexOf("[") && -1 !== n.indexOf("]")) {
                        var r = n.replace(/\[\d+\]/g, "");
                        if (this.fields && this.fields[r]) {
                            var a = this._getConfigVal(this.fields[r], e);
                            if (!t.isEmpty(a)) return a
                        }
                    }
                    return !t.isEmpty(i) && i && "/" !== this.field.path ? null : this._getConfigVal(this, e)
                },
                _getConfigVal: function(e, i) {
                    if (t.isArray(i))
                        for (var n = 0; n < i.length && !t.isEmpty(e); n++) e = e[i[n]];
                    else t.isEmpty(e) || (e = e[i]);
                    return e
                },
                fireCallback: function(e, t, i, n, a, r, s) {
                    this.callbacks && this.callbacks[t] && this.callbacks[t].call(e, i, n, a, r, s)
                },
                applyStyle: function(t, i) {
                    var n = i;
                    n && n.getFieldEl && (n = n.getFieldEl()), n && this.styles && this.styles[t] && e(n).addClass(this.styles[t])
                },
                getStyle: function(e) {
                    return this.styles[e] ? this.styles[e] : ""
                }
            })
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Field = Base.extend({
                constructor: function(e, i, n, a, r, s, o) {
                    var l = this;
                    this.initializing = !0, this.domEl = e, this.parent = null, this.data = i, this.options = n, this.schema = a, this.connector = s, this.errorCallback = function(e) {
                        o ? o(e) : t.defaultErrorCallback.call(l, e)
                    }, this.singleLevelRendering = !1, this.view = new t.RuntimeView(r, this);
                    var u = !1;
                    this.options || (this.options = {}, u = !0), this.id = this.options.id, this.type = this.options.type, this.id || (this.id = t.generateId());
                    var c = !1;
                    if (this.schema || (this.schema = {}, c = !0), this.options.label || null === this.schema.title || (this.options.label = this.schema.title), this.options.helpers || (this.options.helpers = []), this.options.helper) {
                        if (t.isArray(this.options.helper))
                            for (var p = 0; p < this.options.helper.length; p++) this.options.helpers.push(this.options.helper[p]);
                        else this.options.helpers.push(this.options.helper);
                        delete this.options.helper
                    }
                    t.isEmpty(this.options.readonly) && !t.isEmpty(this.schema.readonly) && (this.options.readonly = this.schema.readonly), t.isValEmpty(this.data) && !t.isEmpty(this.schema["default"]) && (this.data = this.schema["default"], this.showingDefaultData = !0), this.path = "/", this.validation = {}, this._events = {}, this.isDisplayOnly = function() {
                        return "view" === l.view.type || "display" == l.view.type
                    }, this.schema && this.schema.id && 0 === this.schema.id.indexOf("#") && (this.schema.id = this.schema.id.substring(1)), this._previouslyValidated = !1, this.updateObservable = function() {
                        this.data ? this.observable(this.path).set(this.data) : this.observable(this.path).clear()
                    }, this.getObservableScope = function() {
                        for (var e = this; !e.isTop();) e = e.parent;
                        var t = e.observableScope;
                        return t || (t = "global"), t
                    }, this.ensureProperType = function(e) {
                        var i = this;
                        return "undefined" != typeof e && (t.isString(e) ? "number" === i.schema.type ? e = parseFloat(e) : "boolean" === i.schema.type && (e = "" === e || "false" === e.toLowerCase() ? !1 : !0) : t.isNumber(e) && ("string" === i.schema.type ? e = "" + e : "boolean" === i.schema.type && (e = -1 === e || 0 === e ? !1 : !0))), e
                    }, this.onConstruct()
                },
                onConstruct: function() {},
                isTop: function() {
                    return !this.parent
                },
                getTemplateDescriptorId: function() {
                    throw new Error("Template descriptor ID was not specified")
                },
                initTemplateDescriptor: function() {
                    var e = this,
                        i = this.view.getTemplateDescriptor(this.getTemplateDescriptorId(), this),
                        n = this.view.getGlobalTemplateDescriptor(),
                        a = this.view.getLayout(),
                        r = !1;
                    this.isTop() && (n ? (this.setTemplateDescriptor(n), this.singleLevelRendering = !0, r = !0) : a && a.templateDescriptor && (this.setTemplateDescriptor(a.templateDescriptor), r = !0)), !r && i && this.setTemplateDescriptor(i);
                    var s = this.getTemplateDescriptor();
                    return s ? void 0 : t.throwErrorWithCallback("Unable to find template descriptor for field: " + e.getFieldType())
                },
                setup: function() {
                    this.initializing || (this.data = this.getValue()), this.initTemplateDescriptor(), t.isUndefined(this.schema.required) && (this.schema.required = !1), t.isUndefined(this.options.validate) && (this.options.validate = !0), t.isUndefined(this.options.disabled) && (this.options.disabled = !1), t.isUndefined(this.options.showMessages) && (this.options.showMessages = !0)
                },
                on: function(e, i) {
                    return t.logDebug("Adding listener for event: " + e), this._events[e] || (this._events[e] = []), this._events[e].push(i), this
                },
                triggerWithPropagation: function(e, t) {
                    this.trigger.call(this, e, t), this.parent && this.parent.triggerWithPropagation.call(this.parent, e, t)
                },
                trigger: function(e, i, n, a, r) {
                    var s = this._events[e];
                    if (s)
                        for (var o = 0; o < s.length; o++) {
                            var l = s[o],
                                u = null;
                            if ("function" == typeof l) {
                                t.logDebug("Firing event: " + e);
                                try {
                                    u = l.call(this, i, n, a, r)
                                } catch (c) {
                                    t.logDebug("The event handler caught an exception: " + e), t.logDebug(c)
                                }
                            }
                        }
                },
                bindData: function() {
                    t.isEmpty(this.data) || this.setValue(this.data)
                },
                render: function(e, i) {
                    e && (t.isString(e) || t.isObject(e)) ? this.view.setView(e) : t.isEmpty(i) && t.isFunction(e) && (i = e), null === this.options.label && this.propertyId && (this.options.label = this.propertyId), this.options.name && (this.name = this.options.name), this.calculateName(), this.setup(), this._render(i)
                },
                calculateName: function() {
                    if (!this.name || this.name && this.nameCalculated)
                        if (this.parent && this.parent.name && this.path) {
                            var e = this.path.substring(this.path.lastIndexOf("/") + 1); - 1 !== e.indexOf("[") && -1 !== e.indexOf("]") && (e = e.substring(e.indexOf("[") + 1, e.indexOf("]"))), e && (this.name = this.parent.name + "_" + e, this.nameCalculated = !0)
                        } else this.path && (this.name = this.path.replace(/\//g, "").replace(/\[/g, "_").replace(/\]/g, ""), this.nameCalculated = !0)
                },
                _render: function(i) {
                    var n = this;
                    if (n.options.form && t.isObject(n.options.form)) {
                        n.options.form.viewType = this.view.type;
                        var a = n.form;
                        a || (a = new t.Form(n.domEl, this.options.form, n.view.id, n.connector, n.errorCallback)), a.render(function(a) {
                            var r = e("<div></div>");
                            n._processRender(r, function() {
                                a.formFieldsContainer.before(n.field), a.formFieldsContainer.remove(), a.topControl = n, n.view.type && "view" !== n.view.type && a.initEvents(), n.form = a, n.postRender(function() {
                                    n.initializing = !1, n.form && n.form.afterInitialize(), i && t.isFunction(i) && i(n)
                                })
                            })
                        })
                    } else this._processRender(n.domEl, function() {
                        n.postRender(function() {
                            n.initializing = !1, i && t.isFunction(i) && i(n)
                        })
                    })
                },
                _processRender: function(e, t) {
                    var i = this;
                    i.renderField(e, function() {
                        i.fireCallback("field"), i.renderFieldElements(function() {
                            t()
                        })
                    })
                },
                renderFieldDomElement: function(e) {
                    var i = this.getTemplateDescriptor();
                    return t.tmpl(i, {
                        id: this.getId(),
                        options: this.options,
                        schema: this.schema,
                        data: e,
                        view: this.view,
                        path: this.path,
                        name: this.name
                    })
                },
                renderField: function(t, i) {
                    var n = this,
                        a = this.data;
                    this.isDisplayOnly() && "object" == typeof a && (a = JSON.stringify(a));
                    var r = n.renderFieldDomElement(a);
                    if (e(r).length > 0) {
                        for (var s = null, o = 0; o < e(r).length; o++) {
                            var l = e(r)[o].nodeName;
                            if (l && (l = l.toLowerCase(), "div" === l || "span" === l)) {
                                s = e(e(r)[o]);
                                break
                            }
                        }
                        s || (s = e(e(r).last())), s && (r = s)
                    }
                    n._oldFieldEl = n.field, this.field = r, this.field.appendTo(t), i()
                },
                renderFieldElements: function(e) {
                    e()
                },
                updateDOMElement: function() {
                    this.field.attr("data-alpaca-field-path", this.getPath()), this.field.attr("data-alpaca-field-name", this.getName()), this.field.removeAttr("name")
                },
                postRender: function(i) {
                    var n = this;
                    if (this.field.addClass("alpaca-field"), this.field.addClass("alpaca-field-" + this.getFieldType()), this.field.attr("data-alpaca-field-id", this.getId()), this.updateDOMElement(), "view" !== this.view.type) {
                        this.isRequired() ? (e(this.field).addClass("alpaca-required"), n.fireCallback("required")) : (e(this.field).addClass("alpaca-optional"), n.fireCallback("optional"));
                        var a = function() {
                            t.disabled(e("input", n.field), !0), t.disabled(e("select", n.field), !0), t.disabled(e(":radio", n.field), !0), t.disabled(e(":checkbox", n.field), !0), e(":radio", n.field).off().click(function(e) {
                                return e.preventDefault(), e.stopImmediatePropagation(), !1
                            }), e(".radio label", n.field).off().click(function(e) {
                                return e.preventDefault(), e.stopImmediatePropagation(), !1
                            }), e("input", n.field).off().click(function(e) {
                                return e.preventDefault(), e.stopImmediatePropagation(), !1
                            })
                        };
                        this.options.readonly && (e(this.field).addClass("alpaca-readonly"), e("input", this.field).attr("readonly", "readonly"), a(), n.fireCallback("readonly")), this.options.disabled && (e(this.field).addClass("alpaca-disabled"), a(), n.fireCallback("disabled"));
                        var r = function(e, i) {
                            if (i) {
                                var n = 0,
                                    a = null;
                                if (t.isArray(i))
                                    for (n = 0; n < i.length; n++) e.addClass(i[n]);
                                else if (i.indexOf(",") > -1)
                                    for (a = i.split(","), n = 0; n < a.length; n++) e.addClass(a[n]);
                                else if (i.indexOf(" ") > -1)
                                    for (a = i.split(" "), n = 0; n < a.length; n++) e.addClass(a[n]);
                                else e.addClass(i)
                            }
                        };
                        r(this.field, this.options.fieldClass), this.options.disabled && (this.disable(), n.fireCallback("disable")), this.view.type && "edit" === this.view.type ? this.bindData() : this.showingDefaultData && this.bindData(), "create" === this.view.type && t.logDebug("Skipping data binding for field: " + this.id + " since view mode is 'create'"), this.view.type && "view" !== this.view.type && this.initEvents()
                    }
                    this.options.hidden && this.field.hide();
                    var s = "create" === this.view.type && !this.refreshed;
                    this.hideInitValidationError = t.isValEmpty(this.options.hideInitValidationError) ? s : this.options.hideInitValidationError, this.view.displayReadonly || e(this.field).find(".alpaca-readonly").hide(), this.options.postRender ? this.options.postRender.call(this, function() {
                        i()
                    }) : i()
                },
                refresh: function(t) {
                    var i = this;
                    i.refreshed = !0;
                    var n = e("<div></div>");
                    e(i.field).before(n), i.domEl = e("<div></div>"), i.setup(), i._render(function() {
                        e(n).before(i.domEl.children()), e(n).remove(), i._oldFieldEl && e(i._oldFieldEl).remove(), t && t()
                    })
                },
                applyStyle: function(e, t) {
                    this.view.applyStyle(e, t)
                },
                fireCallback: function(e, t, i, n, a, r) {
                    this.view.fireCallback(this, e, t, i, n, a, r)
                },
                getFieldEl: function() {
                    return this.field
                },
                getId: function() {
                    return this.id
                },
                getParent: function() {
                    return this.parent
                },
                getPath: function() {
                    return this.path
                },
                getName: function() {
                    return this.name
                },
                isTopLevel: function() {
                    return t.isEmpty(this.parent)
                },
                top: function() {
                    for (var e = this; e.parent;) e = e.parent;
                    return e
                },
                getValue: function() {
                    var e = this,
                        t = this.data;
                    return t = e.ensureProperType(t)
                },
                setValue: function(e) {
                    this.data = e, this.updateObservable(), this.triggerUpdate(), this.isDisplayOnly() && !this.initializing && this.refresh()
                },
                setDefault: function() {},
                getTemplateDescriptor: function() {
                    return this.templateDescriptor
                },
                setTemplateDescriptor: function(e) {
                    this.templateDescriptor = e
                },
                displayMessage: function(i, n) {
                    var a = this;
                    i && t.isObject(i) && (i = [i]), i && t.isString(i) && (i = [{
                        id: "custom",
                        message: i
                    }]), e(this.getFieldEl()).children(".alpaca-message").remove(), i && i.length > 0 && this.options.maxMessages && t.isNumber(this.options.maxMessages) && this.options.maxMessages > -1 && (i = i.slice(0, this.options.maxMessages)), a.fireCallback("removeMessages"), i && i.length > 0 && e.each(i, function(i, n) {
                        var r = !1;
                        a.hideInitValidationError && (r = !0);
                        var s = a.view.getTemplateDescriptor("message");
                        if (s) {
                            var o = t.tmpl(s, {
                                id: n.id,
                                message: n.message,
                                view: a.view
                            });
                            o.addClass("alpaca-message"), r && o.addClass("alpaca-message-hidden"), e(a.getFieldEl()).append(o)
                        }
                        a.fireCallback("addMessage", i, n.id, n.message, r)
                    })
                },
                refreshValidationState: function(e, i) {
                    var n = this,
                        a = [],
                        r = [],
                        s = function(e, i) {
                            return function(n) {
                                t.compileValidationContext(e, function(e) {
                                    i.push(e), n()
                                })
                            }
                        };
                    if (e) {
                        var o = function(e, t) {
                            if (e.isValidationParticipant()) {
                                if (e.children && e.children.length > 0)
                                    for (var i = 0; i < e.children.length; i++) o(e.children[i], t);
                                r.push(s(e, t))
                            }
                        };
                        o(this, a)
                    }
                    r.push(s(this, a)), t.series(r, function(e) {
                        for (var r = {}, s = [], o = 0; o < a.length; o++)
                            for (var l = a[o], u = s.length, c = 0; c < l.length; c++) {
                                var p = l[c],
                                    d = r[p.id];
                                if (d) p.validated && !d.invalidated && (d.validated = !0, d.invalidated = !1, d.valid = p.valid), p.invalidated && (d.invalidated = !0, d.validated = !1, d.valid = p.valid);
                                else {
                                    var h = {};
                                    h.id = p.id, h.path = p.path, h.domEl = p.domEl, h.field = p.field, h.validated = p.validated, h.invalidated = p.invalidated, h.valid = p.valid, s.splice(u, 0, h), r[h.id] = h
                                }
                            }
                        s.reverse(), n.hideInitValidationError || t.updateValidationStateForContext(n.view, s), i && i()
                    })
                },
                getMessage: function(e) {
                    return this.view.getMessage(e, this.view.locale)
                },
                validate: function(e) {
                    var i = !0;
                    if (!this.initializing && this.options.validate) {
                        if (this.children && e)
                            for (var n = 0; n < this.children.length; n++) {
                                var a = this.children[n];
                                a.isValidationParticipant() && a.validate(e)
                            }
                        if (i = this.handleValidate(), !i && t.logLevel == t.DEBUG) {
                            var r = [];
                            for (var s in this.validation) this.validation[s].status || r.push(this.validation[s].message);
                            t.logDebug("Validation failure for field (id=" + this.getId() + ", path=" + this.path + "), messages: " + JSON.stringify(r))
                        }
                    }
                    return this._previouslyValidated = !0, i
                },
                handleValidate: function() {
                    var e = this.validation,
                        i = this._validateOptional();
                    return e.notOptional = {
                        message: i ? "" : this.getMessage("notOptional"),
                        status: i
                    }, i = this._validateDisallow(), e.disallowValue = {
                        message: i ? "" : t.substituteTokens(this.getMessage("disallowValue"), [this.schema.disallow.join(", ")]),
                        status: i
                    }, e.notOptional.status && e.disallowValue.status
                },
                _validateCustomValidator: function(e) {
                    var i = this;
                    this.options.validator && t.isFunction(this.options.validator) ? this.options.validator.call(this, function(t) {
                        i.validation.custom = t, e()
                    }) : e()
                },
                _validateOptional: function() {
                    return this.isRequired() && this.isEmpty() ? !1 : this.options.disallowOnlyEmptySpaces && t.testRegex(t.regexps.whitespace, this.getValue()) ? !1 : !0
                },
                _validateDisallow: function() {
                    if (!t.isValEmpty(this.schema.disallow)) {
                        var i = this.getValue(),
                            n = this.schema.disallow;
                        if (t.isArray(n)) {
                            var a = !0;
                            return e.each(n, function(e, n) {
                                (t.isObject(i) || t.isArray(i) && t.isString(n)) && (n = t.parseJSON(n)), t.compareObject(i, n) && (a = !1)
                            }), a
                        }
                        return (t.isObject(i) || t.isArray(i) && t.isString(n)) && (n = t.parseJSON(n)), !t.compareObject(i, n)
                    }
                    return !0
                },
                triggerUpdate: function() {
                    e(this.field).trigger("fieldupdate")
                },
                disable: function() {},
                enable: function() {},
                focus: function(e) {
                    e && e(this)
                },
                destroy: function() {
                    t.observable(this.path).clear(), t && t.fieldInstances && t.fieldInstances[this.getId()] && delete t.fieldInstances[this.getId()], e(this.field).remove()
                },
                show: function() {
                    this.options && this.options.hidden || (e(this.field).css({
                        display: ""
                    }), this.onShow(), this.fireCallback("show"))
                },
                onShow: function() {},
                hide: function() {
                    e(this.field).css({
                        display: "none"
                    }), this.onHide(), this.fireCallback("hide")
                },
                onHide: function() {},
                isValidationParticipant: function() {
                    return this.isShown()
                },
                isShown: function() {
                    return this.isVisible()
                },
                isVisible: function() {
                    return !this.isHidden()
                },
                isHidden: function() {
                    return "none" === e(this.field).css("display")
                },
                print: function() {
                    this.getFieldEl().printArea && this.getFieldEl().printArea()
                },
                onDependentReveal: function() {},
                onDependentConceal: function() {},
                reload: function() {
                    this.initializing = !0, t.isEmpty(this.callback) ? this.render(this.renderedCallback) : this.callback(this, this.renderedCallback)
                },
                clear: function() {
                    var e = null;
                    this.data && (e = this.data), this.setValue(e)
                },
                isEmpty: function() {
                    return t.isValEmpty(this.getValue())
                },
                isValid: function(t) {
                    if (t && this.children)
                        for (var i = 0; i < this.children.length; i++) {
                            var n = this.children[i];
                            if (n.isValidationParticipant() && !n.isValid(t)) return !1
                        }
                    if (e.isEmptyObject(this.validation)) return !0;
                    for (var a in this.validation)
                        if (!this.validation[a].status) return !1;
                    return !0
                },
                initEvents: function() {
                    var i = this;
                    this.field && (this.field.mouseover(function(e) {
                        i.onMouseOver.call(i, e), i.trigger("mouseover", e)
                    }), this.field.mouseout(function(e) {
                        i.onMouseOut.call(i, e), i.trigger("mouseout", e)
                    }), e.each(this.options, function(e, n) {
                        if (t.startsWith(e, "onField") && t.isFunction(n)) {
                            var a = e.substring(7).toLowerCase();
                            i.field.on(a, function(e) {
                                n.call(i, e)
                            })
                        }
                    }), this.options && this.options.events && e.each(this.options.events, function(e, n) {
                        t.isFunction(n) && i.field.on(e, function(e) {
                            n.call(i, e)
                        })
                    }))
                },
                onFocus: function(t) {
                    e(this.field).removeClass("alpaca-field-empty"), e(this.field).addClass("alpaca-field-focused")
                },
                onBlur: function(t) {
                    var i = e(this.field).hasClass("alpaca-field-focused");
                    e(this.field).removeClass("alpaca-field-focused"), i && this.refreshValidationState(), e(this.field).trigger("fieldblur")
                },
                onChange: function(e) {
                    this.data = this.getValue(), this.updateObservable(), this.triggerUpdate()
                },
                onMouseOver: function(e) {},
                onMouseOut: function(e) {},
                getControlByPath: function(e) {
                    var i = null;
                    if (e) {
                        0 === e.indexOf("/") && (e = e.substring(1)), t.endsWith(e, "/") && (e = e.substring(0, e.length - 1));
                        for (var n = this, a = e.split("/"), r = 0; r < a.length; r++) {
                            var s = a[r];
                            if (0 === s.indexOf("[")) {
                                var o = parseInt(s.substring(1, s.length - 1), 10);
                                n = n.children[o]
                            } else n = n.childrenByPropertyId[s]
                        }
                        i = n
                    }
                    return i
                },
                subscribe: function() {
                    var e = t.makeArray(arguments);
                    return e.unshift(this.getObservableScope()), t.subscribe.apply(this, e)
                },
                unsubscribe: function() {
                    var e = t.makeArray(arguments);
                    return e.unshift(this.getObservableScope()), t.unsubscribe.apply(this, e)
                },
                observable: function() {
                    var e = t.makeArray(arguments);
                    return e.unshift(this.getObservableScope()), t.observable.apply(this, e)
                },
                clearObservable: function() {
                    var e = t.makeArray(arguments);
                    return e.unshift(this.getObservableScope()), t.clearObservable.apply(this, e)
                },
                dependentObservable: function() {
                    var e = t.makeArray(arguments);
                    return e.unshift(this.getObservableScope()), t.dependentObservable.apply(this, e)
                },
                getType: function() {},
                getFieldType: function() {
                    return ""
                },
                getBaseFieldType: function() {
                    var e = null,
                        t = this.constructor.ancestor.prototype;
                    return t && t.getFieldType && (e = t.getFieldType()), e
                },
                isContainer: function() {
                    return !1
                },
                isRequired: function() {
                    var e = !1;
                    if ("boolean" == typeof this.schema.required && (e = this.schema.required), this.parent && this.parent.schema.required && t.isArray(this.parent.schema.required)) {
                        var i = this.parent.schema.required;
                        if (i)
                            for (var n = 0; n < i.length; n++)
                                if (i[n] === this.propertyId) {
                                    e = !0;
                                    break
                                }
                    }
                    return e
                },
                getTitle: function() {},
                getDescription: function() {},
                getSchemaOfSchema: function() {
                    var e = {
                        title: this.getTitle(),
                        description: this.getDescription(),
                        type: "object",
                        properties: {
                            title: {
                                title: "Title",
                                description: "Short description of the property.",
                                type: "string"
                            },
                            description: {
                                title: "Description",
                                description: "Detailed description of the property.",
                                type: "string"
                            },
                            readonly: {
                                title: "Readonly",
                                description: "Indicates that the field is read-only.  A read-only field cannot have it's value changed.  Read-only fields render in a grayed-out or disabled control.  If the field is rendered using a view with the <code>displayReadonly</code> attribute set to false, the read-only field will not appear.",
                                type: "boolean",
                                "default": !1
                            },
                            required: {
                                title: "Required",
                                description: "Indicates whether the field's value is required.  If set to true, the field must take on a valid value and cannnot be left empty or unassigned.",
                                type: "boolean",
                                "default": !1
                            },
                            "default": {
                                title: "Default",
                                description: "The default value to be assigned for this property.  If the data for the field is empty or not provided, this default value will be plugged in for you.  Specify a default value when you want to pre-populate the field's value ahead of time.",
                                type: "any"
                            },
                            type: {
                                title: "Type",
                                description: "Data type of the property.",
                                type: "string",
                                readonly: !0
                            },
                            format: {
                                title: "Format",
                                description: "Data format of the property.",
                                type: "string"
                            },
                            disallow: {
                                title: "Disallowed Values",
                                description: "List of disallowed values for the property.",
                                type: "array"
                            },
                            dependencies: {
                                title: "Dependencies",
                                description: "List of property dependencies.",
                                type: "array"
                            }
                        }
                    };
                    return this.getType && !t.isValEmpty(this.getType()) && (e.properties.type["default"] = this.getType(), e.properties.type["enum"] = [this.getType()]), e
                },
                getOptionsForSchema: function() {
                    return {
                        fields: {
                            title: {
                                helper: "Field short description",
                                type: "text"
                            },
                            description: {
                                helper: "Field detailed description",
                                type: "textarea"
                            },
                            readonly: {
                                helper: "Field will be read only if checked",
                                rightLabel: "This field is read-only",
                                type: "checkbox"
                            },
                            required: {
                                helper: "Field value must be set if checked",
                                rightLabel: "This field is required",
                                type: "checkbox"
                            },
                            "default": {
                                helper: "Field default value",
                                type: "textarea"
                            },
                            type: {
                                helper: "Field data type",
                                type: "text"
                            },
                            format: {
                                type: "select",
                                dataSource: function(e) {
                                    for (var i in t.defaultFormatFieldMapping) this.selectOptions.push({
                                        value: i,
                                        text: i
                                    });
                                    e()
                                }
                            },
                            disallow: {
                                helper: "Disallowed values for the field",
                                itemLabel: "Value",
                                type: "array"
                            },
                            dependencies: {
                                helper: "Field Dependencies",
                                multiple: !0,
                                size: 3,
                                type: "select",
                                dataSource: function(e, t) {
                                    if (e.parent && e.parent.schemaParent && e.parent.schemaParent.parent)
                                        for (var i in e.parent.schemaParent.parent.childrenByPropertyId) i != e.parent.schemaParent.propertyId && e.selectOptions.push({
                                            value: i,
                                            text: i
                                        });
                                    t && t()
                                }
                            }
                        }
                    }
                },
                getSchemaOfOptions: function() {
                    var e = {
                        title: "Options for " + this.getTitle(),
                        description: this.getDescription() + " (Options)",
                        type: "object",
                        properties: {
                            form: {},
                            id: {
                                title: "Field Id",
                                description: "Unique field id. Auto-generated if not provided.",
                                type: "string"
                            },
                            type: {
                                title: "Field Type",
                                description: "Field type.",
                                type: "string",
                                "default": this.getFieldType(),
                                readonly: !0
                            },
                            validate: {
                                title: "Validation",
                                description: "Field validation is required if true.",
                                type: "boolean",
                                "default": !0
                            },
                            showMessages: {
                                title: "Show Messages",
                                description: "Display validation messages if true.",
                                type: "boolean",
                                "default": !0
                            },
                            disabled: {
                                title: "Disabled",
                                description: "Field will be disabled if true.",
                                type: "boolean",
                                "default": !1
                            },
                            readonly: {
                                title: "Readonly",
                                description: "Field will be readonly if true.",
                                type: "boolean",
                                "default": !1
                            },
                            hidden: {
                                title: "Hidden",
                                description: "Field will be hidden if true.",
                                type: "boolean",
                                "default": !1
                            },
                            label: {
                                title: "Label",
                                description: "Field label.",
                                type: "string"
                            },
                            helper: {
                                title: "Helper",
                                description: "Field help message.",
                                type: "string"
                            },
                            helpers: {
                                title: "Helpers",
                                description: "An array of field help messages.  Each message will be displayed on it's own line.",
                                type: "array",
                                items: {
                                    type: "string"
                                }
                            },
                            fieldClass: {
                                title: "CSS class",
                                description: "Specifies one or more CSS classes that should be applied to the dom element for this field once it is rendered.  Supports a single value, comma-delimited values, space-delimited values or values passed in as an array.",
                                type: "string"
                            },
                            hideInitValidationError: {
                                title: "Hide Initial Validation Errors",
                                description: "Hide initial validation errors if true.",
                                type: "boolean",
                                "default": !1
                            },
                            focus: {
                                title: "Focus",
                                description: "If true, the initial focus for the form will be set to the first child element (usually the first field in the form).  If a field name or path is provided, then the specified child field will receive focus.  For example, you might set focus to 'name' (selecting the 'name' field) or you might set it to 'client/name' which picks the 'name' field on the 'client' object.",
                                type: "checkbox",
                                "default": !0
                            },
                            optionLabels: {
                                title: "Enumerated Value Labels",
                                description: "An array of string labels for items in the enum array",
                                type: "array"
                            },
                            view: {
                                title: "Override of the view for this field",
                                description: "Allows for this field to be rendered with a different view (such as 'display' or 'create')",
                                type: "string"
                            }
                        }
                    };
                    return this.isTopLevel() ? e.properties.form = {
                        title: "Form",
                        description: "Options for rendering the FORM tag.",
                        type: "object",
                        properties: {
                            attributes: {
                                title: "Form Attributes",
                                description: "List of attributes for the FORM tag.",
                                type: "object",
                                properties: {
                                    id: {
                                        title: "Id",
                                        description: "Unique form id. Auto-generated if not provided.",
                                        type: "string"
                                    },
                                    action: {
                                        title: "Action",
                                        description: "Form submission endpoint",
                                        type: "string"
                                    },
                                    method: {
                                        title: "Method",
                                        description: "Form submission method",
                                        "enum": ["post", "get"],
                                        type: "string"
                                    },
                                    rubyrails: {
                                        title: "Ruby On Rails",
                                        description: "Ruby on Rails Name Standard",
                                        "enum": ["true", "false"],
                                        type: "string"
                                    },
                                    name: {
                                        title: "Name",
                                        description: "Form name",
                                        type: "string"
                                    },
                                    focus: {
                                        title: "Focus",
                                        description: "Focus Setting",
                                        type: "any"
                                    }
                                }
                            },
                            buttons: {
                                title: "Form Buttons",
                                description: "Configuration for form-bound buttons",
                                type: "object",
                                properties: {
                                    submit: {
                                        type: "object",
                                        title: "Submit Button",
                                        required: !1
                                    },
                                    reset: {
                                        type: "object",
                                        title: "Reset button",
                                        required: !1
                                    }
                                }
                            },
                            toggleSubmitValidState: {
                                title: "Toggle Submit Valid State",
                                description: "Toggle the validity state of the Submit button",
                                type: "boolean",
                                "default": !0
                            }
                        }
                    } : delete e.properties.form, e
                },
                getOptionsForOptions: function() {
                    var e = {
                        type: "object",
                        fields: {
                            id: {
                                type: "text",
                                readonly: !0
                            },
                            type: {
                                type: "text"
                            },
                            validate: {
                                rightLabel: "Enforce validation",
                                type: "checkbox"
                            },
                            showMessages: {
                                rightLabel: "Show validation messages",
                                type: "checkbox"
                            },
                            disabled: {
                                rightLabel: "Disable this field",
                                type: "checkbox"
                            },
                            hidden: {
                                type: "checkbox",
                                rightLabel: "Hide this field"
                            },
                            label: {
                                type: "text"
                            },
                            helper: {
                                type: "textarea"
                            },
                            helpers: {
                                type: "array",
                                items: {
                                    type: "textarea"
                                }
                            },
                            fieldClass: {
                                type: "text"
                            },
                            hideInitValidationError: {
                                rightLabel: "Hide initial validation errors",
                                type: "checkbox"
                            },
                            focus: {
                                type: "checkbox",
                                rightLabel: "Auto-focus first child field"
                            },
                            optionLabels: {
                                type: "array",
                                items: {
                                    type: "string"
                                }
                            },
                            view: {
                                type: "text"
                            }
                        }
                    };
                    return this.isTopLevel() && (e.fields.form = {
                        type: "object",
                        fields: {
                            attributes: {
                                type: "object",
                                fields: {
                                    id: {
                                        type: "text",
                                        readonly: !0
                                    },
                                    action: {
                                        type: "text"
                                    },
                                    method: {
                                        type: "select"
                                    },
                                    name: {
                                        type: "text"
                                    }
                                }
                            }
                        }
                    }), e
                }
            }), t.registerMessages({
                disallowValue: "{0} are disallowed values.",
                notOptional: "This field is not optional."
            })
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.ControlField = t.Field.extend({
                onConstruct: function() {
                    var t = this;
                    this.isControlField = !0, this._getControlVal = function(i) {
                        var n = null;
                        return this.control && (n = e(this.control).val(), i && (n = t.ensureProperType(n))), n
                    }
                },
                setup: function() {
                    var e = this;
                    this.base();
                    var i = e.resolveControlTemplateType();
                    if (!i) return t.throwErrorWithCallback("Unable to find template descriptor for control: " + e.getFieldType());
                    if (this.controlDescriptor = this.view.getTemplateDescriptor("control-" + i, e), "undefined" == typeof this.options.renderButtons && (this.options.renderButtons = !0), this.options.buttons)
                        for (var n in this.options.buttons) this.options.buttons[n].label && (this.options.buttons[n].value = this.options.buttons[n].label), this.options.buttons[n].title && (this.options.buttons[n].value = this.options.buttons[n].title), this.options.buttons[n].type || (this.options.buttons[n].type = "button"), this.options.buttons[n].styles || (this.options.buttons[n].styles = this.view.styles.button)
                },
                getControlEl: function() {
                    return this.control
                },
                resolveControlTemplateType: function() {
                    var e = this,
                        t = !1,
                        i = null,
                        n = this;
                    do
                        if (n.getFieldType) {
                            var a = this.view.getTemplateDescriptor("control-" + n.getFieldType(), e);
                            a ? (i = n.getFieldType(), t = !0) : n = n.constructor.ancestor.prototype
                        } else t = !0;
                    while (!t);
                    return i
                },
                onSetup: function() {},
                isAutoFocusable: function() {
                    return !0
                },
                getTemplateDescriptorId: function() {
                    return "control"
                },
                renderFieldElements: function(i) {
                    var n = this;
                    this.control = e(this.field).find("." + t.MARKER_CLASS_CONTROL_FIELD), this.control.removeClass(t.MARKER_CLASS_CONTROL_FIELD), n.prepareControlModel(function(e) {
                        n.beforeRenderControl(e, function() {
                            n.renderControl(e, function(a) {
                                a && (n.control.replaceWith(a), n.control = a, n.control.addClass(t.CLASS_CONTROL)), n.fireCallback("control"), n.afterRenderControl(e, function() {
                                    i()
                                })
                            })
                        })
                    })
                },
                prepareControlModel: function(e) {
                    var t = {};
                    t.id = this.getId(), t.name = this.name, t.options = this.options, t.schema = this.schema, t.data = this.data, t.required = this.isRequired(), t.view = this.view, e(t)
                },
                beforeRenderControl: function(e, t) {
                    t()
                },
                afterRenderControl: function(t, i) {
                    var n = this;
                    n.firstUpdateObservableFire || "undefined" == typeof n.data || null == n.data || (n.firstUpdateObservableFire = !0, n.updateObservable()), e(this.getFieldEl()).find(".alpaca-control-button").each(function() {
                        e(this).click(function(t) {
                            e(this).attr("button-pushed", !0)
                        });
                        var t = e(this).attr("data-key");
                        if (t) {
                            var i = n.options.buttons[t];
                            i && i.click && e(this).click(function(e, t) {
                                return function(i) {
                                    i.preventDefault(), t.call(e, i)
                                }
                            }(n, i.click))
                        }
                    }), i()
                },
                renderControl: function(e, i) {
                    var n = null;
                    this.controlDescriptor && (n = t.tmpl(this.controlDescriptor, e)), i(n)
                },
                postRender: function(e) {
                    this.base(function() {
                        e()
                    })
                },
                updateDOMElement: function() {
                    this.base(), this.control.attr("name", this.getName())
                },
                setDefault: function() {
                    var e = t.isEmpty(this.schema["default"]) ? "" : this.schema["default"];
                    this.setValue(e)
                },
                getValue: function() {
                    var e = this,
                        t = this.base();
                    return this.isDisplayOnly() || (t = e.getControlValue()), t = e.ensureProperType(t)
                },
                getControlValue: function() {
                    return this._getControlVal(!0)
                },
                _validateEnum: function() {
                    if (this.schema["enum"]) {
                        var i = this.data;
                        return i = this.getValue(), !this.isRequired() && t.isValEmpty(i) ? !0 : e.inArray(i, this.schema["enum"]) > -1 ? !0 : !1
                    }
                    return !0
                },
                handleValidate: function() {
                    var e = this.base(),
                        i = this.validation,
                        n = this._validateEnum(),
                        a = this.schema["enum"];
                    return "object" == typeof this.options.optionLabels && a.length && this.options.optionLabels.length >= a.length && (a = this.options.optionLabels.slice(0, a.length)), i.invalidValueOfEnum = {
                        message: n ? "" : t.substituteTokens(this.getMessage("invalidValueOfEnum"), [a.join(", "), this.data]),
                        status: n
                    }, e && i.invalidValueOfEnum.status
                },
                initEvents: function() {
                    this.base(), this.control && this.control.length > 0 && this.initControlEvents()
                },
                initControlEvents: function() {
                    var e = this,
                        t = this.control;
                    t.click(function(t) {
                        e.onClick.call(e, t), e.trigger("click", t)
                    }), t.change(function(t) {
                        setTimeout(function() {
                            e.onChange.call(e, t), e.triggerWithPropagation("change", t)
                        }, 250)
                    }), t.focus(function(t) {
                        if (e.wasFocused = !0, !e.suspendBlurFocus) {
                            var i = e.onFocus.call(e, t);
                            return i !== !1 && (i = e.trigger("focus", t)), i
                        }
                    }), t.blur(function(t) {
                        if (e.wasBlurred = !0, !e.suspendBlurFocus) {
                            var i = e.onBlur.call(e, t);
                            return i !== !1 && (i = e.trigger("blur", t)), i
                        }
                    }), t.keypress(function(t) {
                        var i = e.onKeyPress.call(e, t);
                        return i !== !1 && (i = e.trigger("keypress", t)), i
                    }), t.keyup(function(t) {
                        var i = e.onKeyUp.call(e, t);
                        return i !== !1 && (i = e.trigger("keyup", t)), i
                    }), t.keydown(function(t) {
                        var i = e.onKeyDown.call(e, t);
                        return i !== !1 && (i = e.trigger("keydown", t)),
                            i
                    })
                },
                onKeyPress: function(e) {
                    var t = this,
                        i = !1;
                    if (t.view.type && "edit" === t.view.type) {
                        var n = this.isValid();
                        n || (i = !0)
                    } else if (t.view.type && "create" === t.view.type) {
                        var n = this.isValid();
                        !n && t.wasBlurred && (i = !0)
                    }
                    i && window.setTimeout(function() {
                        t.refreshValidationState()
                    }, 50)
                },
                onKeyDown: function(e) {},
                onKeyUp: function(e) {},
                onClick: function(e) {},
                disable: function() {
                    this.base(), this.control && this.control.length > 0 && e(this.control).prop("disabled", !0)
                },
                enable: function() {
                    this.base(), this.control && this.control.length > 0 && e(this.control).prop("disabled", !1)
                },
                sortEnum: function() {
                    var e = this;
                    if (e.schema["enum"] && e.schema["enum"].length > 0) {
                        for (var t = [], i = 0; i < e.schema["enum"].length; i++) {
                            var n = e.schema["enum"][i],
                                a = e.schema["enum"][i];
                            e.options && e.options.optionLabels && e.options.optionLabels.length >= i + 1 && (a = e.options.optionLabels[i]), t.push({
                                value: n,
                                text: a
                            })
                        }
                        e.sortSelectableOptions(t), e.schema["enum"] = [], e.options.optionLabels = [];
                        for (var i = 0; i < t.length; i++) e.schema["enum"].push(t[i].value), e.options.optionLabels.push(t[i].text)
                    }
                },
                sortSelectableOptions: function(e) {
                    var t = this,
                        i = function(e, t) {
                            return e.text > t.text ? 1 : e.text < t.text ? -1 : 0
                        },
                        n = i;
                    t.options.sort && "function" == typeof t.options.sort && (n = t.options.sort), e.sort(n)
                },
                getSchemaOfSchema: function() {
                    return t.merge(this.base(), {
                        properties: {
                            "enum": {
                                title: "Enumerated Values",
                                description: "List of specific values for this property",
                                type: "array"
                            }
                        }
                    })
                },
                getOptionsForSchema: function() {
                    return t.merge(this.base(), {
                        fields: {
                            "enum": {
                                itemLabel: "Value",
                                type: "array"
                            }
                        }
                    })
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {
                            name: {
                                title: "Field Name",
                                description: "Field Name.",
                                type: "string"
                            },
                            sort: {
                                title: "Sort Function",
                                description: "Defines an f(a,b) sort function for the array of enumerated values [{text, value}].  This is used to sort enum and optionLabels as well as results that come back from any data sources (for select and radio controls).",
                                type: "function"
                            }
                        }
                    })
                },
                getOptionsForOptions: function() {
                    return t.merge(this.base(), {
                        fields: {
                            name: {
                                type: "text"
                            }
                        }
                    })
                }
            }), t.registerMessages({
                invalidValueOfEnum: "This field should have one of the values in {0}.  Current value is: {1}"
            })
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.ContainerField = t.Field.extend({
                onConstruct: function() {
                    this.isContainerField = !0
                },
                isContainer: function() {
                    return !0
                },
                getContainerEl: function() {
                    return this.container
                },
                getTemplateDescriptorId: function() {
                    return "container"
                },
                resolveContainerTemplateType: function() {
                    var e = !1,
                        t = null,
                        i = this;
                    do
                        if (i.getFieldType) {
                            var n = this.view.getTemplateDescriptor("container-" + i.getFieldType(), this);
                            n ? (t = i.getFieldType(), e = !0) : i = i.constructor.ancestor.prototype
                        } else e = !0;
                    while (!e);
                    return t
                },
                resolveContainerItemTemplateType: function() {
                    var e = !1,
                        t = null,
                        i = this;
                    do
                        if (i.getFieldType) {
                            var n = this.view.getTemplateDescriptor("container-" + i.getFieldType() + "-item", this);
                            n ? (t = i.getFieldType(), e = !0) : i = i.constructor.ancestor.prototype
                        } else e = !0;
                    while (!e);
                    return t
                },
                setup: function() {
                    var e = this;
                    this.base();
                    var i = e.resolveContainerTemplateType();
                    if (!i) return t.throwErrorWithCallback("Unable to find template descriptor for container: " + e.getFieldType());
                    this.containerDescriptor = this.view.getTemplateDescriptor("container-" + i, e);
                    var n = !0;
                    t.isEmpty(this.view.collapsible) || (n = this.view.collapsible), t.isEmpty(this.options.collapsible) || (n = this.options.collapsible), this.options.collapsible = n;
                    var a = "button";
                    t.isEmpty(this.view.legendStyle) || (a = this.view.legendStyle), t.isEmpty(this.options.legendStyle) || (a = this.options.legendStyle), this.options.legendStyle = a, this.lazyLoading = !1, t.isEmpty(this.options.lazyLoading) || (this.lazyLoading = this.options.lazyLoading, this.lazyLoading && (this.options.collapsed = !0)), this.children = [], this.childrenById = {}, this.childrenByPropertyId = {}
                },
                destroy: function() {
                    this.form && (this.form.destroy(!0), delete this.form), t.each(this.children, function() {
                        this.destroy()
                    }), this.base()
                },
                renderFieldElements: function(i) {
                    var n = this;
                    this.container = e(this.field).find("." + t.MARKER_CLASS_CONTAINER_FIELD), this.container.removeClass(t.MARKER_CLASS_CONTAINER_FIELD), n.prepareContainerModel(function(e) {
                        n.beforeRenderContainer(e, function() {
                            n.renderContainer(e, function(a) {
                                a && (n.container.replaceWith(a), n.container = a, n.container.addClass(t.CLASS_CONTAINER)), n.container.addClass(n.view.horizontal ? "alpaca-horizontal" : "alpaca-vertical"), n.fireCallback("container"), n.afterRenderContainer(e, function() {
                                    i()
                                })
                            })
                        })
                    })
                },
                prepareContainerModel: function(e) {
                    var t = this,
                        i = {
                            id: this.getId(),
                            name: this.name,
                            schema: this.schema,
                            options: this.options,
                            view: this.view
                        };
                    t.createItems(function(t) {
                        t || (t = []);
                        for (var n = 0; n < t.length; n++) t[n].containerItemEl || (t[n].containerItemEl = t[n].getFieldEl());
                        i.items = t, e(i)
                    })
                },
                beforeRenderContainer: function(e, t) {
                    t()
                },
                renderContainer: function(e, i) {
                    var n = null;
                    this.containerDescriptor && (n = t.tmpl(this.containerDescriptor, e)), i(n)
                },
                afterRenderContainer: function(e, t) {
                    var i = this;
                    i.beforeApplyCreatedItems(e, function() {
                        i.applyCreatedItems(e, function() {
                            i.afterApplyCreatedItems(e, function() {
                                t()
                            })
                        })
                    })
                },
                postRender: function(e) {
                    this.base(function() {
                        e()
                    })
                },
                initEvents: function() {
                    this.base()
                },
                createItems: function(e) {
                    e()
                },
                beforeApplyCreatedItems: function(e, t) {
                    t()
                },
                applyCreatedItems: function(i, n) {
                    var a = this,
                        r = null;
                    if (a.isTopLevel() && a.view.getLayout() && (r = a.view.getLayout().bindings, !r && a.view.getLayout().templateDescriptor && i.items.length > 0)) {
                        r = {};
                        for (var s = 0; s < i.items.length; s++) {
                            var o = i.items[s].name;
                            r[o] = "[data-alpaca-layout-binding='" + o + "']"
                        }
                    }
                    i.items.length > 0 ? (e(a.container).addClass("alpaca-container-has-items"), e(a.container).attr("data-alpaca-container-item-count", i.items.length)) : (e(a.container).removeClass("alpaca-container-has-items"), e(a.container).removeAttr("data-alpaca-container-item-count"));
                    for (var s = 0; s < i.items.length; s++) {
                        var l = i.items[s],
                            u = e(a.container).find("." + t.MARKER_CLASS_CONTAINER_FIELD_ITEM + "[" + t.MARKER_DATA_CONTAINER_FIELD_ITEM_KEY + "='" + l.name + "']");
                        if (r) {
                            var c = r[l.name];
                            if (c) {
                                var p = e(c, a.field);
                                if (0 == p.length) try {
                                    p = e("#" + c, a.field)
                                } catch (d) {}
                                p.length > 0 && (e(l.containerItemEl).appendTo(p), l.domEl = p)
                            }
                            e(u).remove()
                        } else {
                            var p = e(u).parent();
                            e(u).replaceWith(l.containerItemEl), l.domEl = p
                        }
                        e(l.containerItemEl).addClass("alpaca-container-item"), 0 === s && e(l.containerItemEl).addClass("alpaca-container-item-first"), s + 1 === i.items.length && e(l.containerItemEl).addClass("alpaca-container-item-last"), e(l.containerItemEl).attr("data-alpaca-container-item-index", s), e(l.containerItemEl).attr("data-alpaca-container-item-name", l.name), e(l.containerItemEl).attr("data-alpaca-container-item-parent-field-id", a.getId()), a.registerChild(l, s)
                    }
                    a.options.collapsible && a.fireCallback("collapsible"), a.triggerUpdate(), n()
                },
                afterApplyCreatedItems: function(e, t) {
                    t()
                },
                registerChild: function(e, i) {
                    t.isEmpty(i) ? this.children.push(e) : this.children.splice(i, 0, e), this.childrenById[e.getId()] = e, e.propertyId && (this.childrenByPropertyId[e.propertyId] = e), e.parent = this
                },
                unregisterChild: function(e) {
                    var i = this.children[e];
                    i && (t.isEmpty(e) || this.children.splice(e, 1), delete this.childrenById[i.getId()], i.propertyId && delete this.childrenByPropertyId[i.propertyId], i.parent = null)
                },
                updateDOMElement: function() {
                    var t = this;
                    this.base(), t.children.length > 0 ? (e(t.getContainerEl()).addClass("alpaca-container-has-items"), e(t.getContainerEl()).attr("data-alpaca-container-item-count", t.children.length)) : (e(t.getContainerEl()).removeClass("alpaca-container-has-items"), e(t.getContainerEl()).removeAttr("data-alpaca-container-item-count"));
                    for (var i = 0; i < t.children.length; i++) {
                        var n = t.children[i];
                        n.path || (n.path = "array" === n.schema.type ? t.path + "[" + i + "]" : t.path + "/" + n.propertyId), n.calculateName(), e(n.containerItemEl).removeClass("alpaca-container-item-first"), e(n.containerItemEl).removeClass("alpaca-container-item-last"), e(n.containerItemEl).removeClass("alpaca-container-item-index"), e(n.containerItemEl).removeClass("alpaca-container-item-key"), e(n.containerItemEl).addClass("alpaca-container-item"), 0 === i && e(n.containerItemEl).addClass("alpaca-container-item-first"), i + 1 === t.children.length && e(n.containerItemEl).addClass("alpaca-container-item-last"), e(n.containerItemEl).attr("data-alpaca-container-item-index", i), e(n.containerItemEl).attr("data-alpaca-container-item-name", n.name), e(n.containerItemEl).attr("data-alpaca-container-item-parent-field-id", t.getId()), n.updateDOMElement()
                    }
                },
                handleRepositionDOMRefresh: function() {
                    var e = this;
                    e.getParent() ? e.getParent().updateDOMElement() : e.updateDOMElement()
                },
                onDependentReveal: function() {
                    for (var e = 0; e < this.children.length; e++) this.children[e].onDependentReveal()
                },
                onDependentConceal: function() {
                    for (var e = 0; e < this.children.length; e++) this.children[e].onDependentConceal()
                },
                focus: function(t) {
                    var i = this;
                    if (this.isDisplayOnly()) return void(t && t());
                    this.base();
                    var n = -1,
                        a = new Array(this.children.length),
                        r = this.getContainerEl();
                    this.form && (r = this.form.getFormEl());
                    var s = 0;
                    e(r).find(".alpaca-container-item[data-alpaca-container-item-parent-field-id='" + this.getId() + "']").each(function() {
                        var t = e(this).attr("data-alpaca-container-item-index");
                        a[s] = i.children[t], s++
                    });
                    for (var o = 0; o < a.length; o++)
                        if (a[o] && !a[o].isValid(!0) && a[o].isControlField && a[o].isAutoFocusable() && !a[o].options.readonly) {
                            n = o;
                            break
                        } - 1 === n && a.length > 0 && (n = 0), n > -1 && (a[n].focus(), t && t(a[n]))
                },
                disable: function() {
                    this.base();
                    for (var e = 0; e < this.children.length; e++) this.children[e].disable()
                },
                enable: function() {
                    this.base();
                    for (var e = 0; e < this.children.length; e++) this.children[e].enable()
                },
                getValue: function() {
                    var e = this,
                        t = e.getContainerValue();
                    return e.isDisplayOnly() && t && (t = JSON.stringify(t, null, "  ")), t
                },
                getContainerValue: function() {
                    return null
                },
                firstChild: function() {
                    var e = null;
                    return this.children.length > 0 && (e = this.children[0]), e
                },
                lastChild: function() {
                    var e = null;
                    return this.children.length > 0 && (e = this.children[this.children.length - 1]), e
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {
                            lazyLoading: {
                                title: "Lazy Loading",
                                description: "Child fields will only be rendered when the fieldset is expanded if this option is set true.",
                                type: "boolean",
                                "default": !1
                            },
                            collapsible: {
                                title: "Collapsible",
                                description: "Field set is collapsible if true.",
                                type: "boolean",
                                "default": !0
                            },
                            collapsed: {
                                title: "Collapsed",
                                description: "Field set is initially collapsed if true.",
                                type: "boolean",
                                "default": !1
                            },
                            legendStyle: {
                                title: "Legend Style",
                                description: "Field set legend style.",
                                type: "string",
                                "enum": ["button", "link"],
                                "default": "button"
                            },
                            animate: {
                                title: "Animate movements and transitions",
                                description: "Up and down transitions will be animated",
                                type: "boolean",
                                "default": !0
                            }
                        }
                    })
                },
                getOptionsForOptions: function() {
                    return t.merge(this.base(), {
                        fields: {
                            lazyLoading: {
                                rightLabel: "Lazy loading child fields ?",
                                helper: "Lazy loading will be enabled if checked.",
                                type: "checkbox"
                            },
                            collapsible: {
                                rightLabel: "Field set collapsible ?",
                                helper: "Field set is collapsible if checked.",
                                type: "checkbox"
                            },
                            collapsed: {
                                rightLabel: "Field set initially collapsed ?",
                                description: "Field set is initially collapsed if checked.",
                                type: "checkbox"
                            },
                            legendStyle: {
                                type: "select"
                            },
                            animate: {
                                rightLabel: "Animate movements and transitions",
                                type: "checkbox"
                            }
                        }
                    })
                }
            })
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Form = Base.extend({
                constructor: function(e, i, n, a, r) {
                    if (this.domEl = e, this.parent = null, this.connector = a, this.errorCallback = r, this.options = i, this.attributes = this.options.attributes ? this.options.attributes : {}, this.options.buttons) {
                        this.options.buttons.submit && (this.options.buttons.submit.type || (this.options.buttons.submit.type = "submit"), this.options.buttons.submit.name || (this.options.buttons.submit.name = "submit"), this.options.buttons.submit.value || (this.options.buttons.submit.value = "Submit")), this.options.buttons.reset && (this.options.buttons.reset.type || (this.options.buttons.reset.type = "reset"), this.options.buttons.reset.name || (this.options.buttons.reset.name = "reset"), this.options.buttons.reset.value || (this.options.buttons.reset.value = "Reset"));
                        for (var s in this.options.buttons) this.options.buttons[s].label && (this.options.buttons[s].value = this.options.buttons[s].label), this.options.buttons[s].title && (this.options.buttons[s].value = this.options.buttons[s].title), this.options.buttons[s].type || (this.options.buttons[s].type = "button")
                    }
                    this.attributes.id ? this.id = this.attributes.id : (this.id = t.generateId(), this.attributes.id = this.id), this.options.buttons && this.options.buttons.submit && t.isUndefined(this.options.toggleSubmitValidState) && (this.options.toggleSubmitValidState = !0), this.viewType = i.viewType, this.view = new t.RuntimeView(n, this);
                    for (var s in this.options.buttons) this.options.buttons[s].styles || (this.options.buttons[s].styles = this.view.styles.button)
                },
                render: function(e) {
                    var t = this;
                    this.form && this.form.remove(), this.processRender(this.domEl, function() {
                        t.form.appendTo(t.container), t.form.addClass("alpaca-form"), t.fireCallback("form"), e(t)
                    })
                },
                afterInitialize: function() {
                    var e = this;
                    e.options.toggleSubmitValidState && e.adjustSubmitButtonState()
                },
                isFormValid: function() {
                    this.topControl.validate(!0);
                    var e = this.topControl.isValid(!0);
                    return e
                },
                isValid: function() {
                    return this.isFormValid()
                },
                validate: function(e) {
                    return this.topControl.validate(e)
                },
                enableSubmitButton: function() {
                    if (e(".alpaca-form-button-submit").attrProp("disabled", !1), e.mobile) try {
                        e(".alpaca-form-button-submit").button("refresh")
                    } catch (t) {}
                },
                disableSubmitButton: function() {
                    if (e(".alpaca-form-button-submit").attrProp("disabled", !0), e.mobile) try {
                        e(".alpaca-form-button-submit").button("refresh")
                    } catch (t) {}
                },
                adjustSubmitButtonState: function() {
                    this.disableSubmitButton(), this.isFormValid() && this.enableSubmitButton()
                },
                processRender: function(i, n) {
                    var a = this;
                    if (this.formDescriptor = this.view.getTemplateDescriptor("form"), !this.formDescriptor) return t.throwErrorWithCallback("Could not find template descriptor: form");
                    var r = t.tmpl(this.formDescriptor, {
                        id: this.getId(),
                        options: this.options,
                        view: this.view
                    });
                    r.appendTo(i), this.form = r, this.formFieldsContainer = e(this.form).find("." + t.MARKER_CLASS_FORM_ITEMS_FIELD), this.formFieldsContainer.removeClass(t.MARKER_CLASS_FORM_ITEMS_FIELD), t.isEmpty(this.form.attr("id")) && this.form.attr("id", this.getId() + "-form-outer"), t.isEmpty(this.form.attr("data-alpaca-form-id")) && this.form.attr("data-alpaca-form-id", this.getId()), e(i).find("form").attr(this.attributes), this.buttons = {}, e(i).find(".alpaca-form-button").each(function() {
                        e(this).click(function(t) {
                            e(this).attr("button-pushed", !0)
                        });
                        var t = e(this).attr("data-key");
                        if (t) {
                            var i = a.options.buttons[t];
                            i && i.click && e(this).click(function(e, t) {
                                return function(i) {
                                    i.preventDefault(), t.call(e, i)
                                }
                            }(a, i.click))
                        }
                    }), n()
                },
                getId: function() {
                    return this.id
                },
                getType: function() {
                    return this.type
                },
                getParent: function() {
                    return this.parent
                },
                getValue: function() {
                    return this.topControl.getValue()
                },
                setValue: function(e) {
                    this.topControl.setValue(e)
                },
                initEvents: function() {
                    var t = this,
                        i = e(this.domEl).find("form"),
                        n = this.getValue();
                    e(i).submit(n, function(e) {
                        return t.onSubmit(e, t)
                    }), this.options.toggleSubmitValidState && (e(t.topControl.getFieldEl()).bind("fieldupdate", function() {
                        t.adjustSubmitButtonState()
                    }), e(t.topControl.getFieldEl()).bind("fieldkeyup", function() {
                        t.adjustSubmitButtonState()
                    }), e(t.topControl.getFieldEl()).bind("fieldblur", function() {
                        t.adjustSubmitButtonState()
                    }))
                },
                getButtonEl: function(t) {
                    return e(this.domEl).find(".alpaca-form-button-" + t)
                },
                onSubmit: function(e, i) {
                    if (!this.isFormValid()) return e.stopPropagation(), this.refreshValidationState(!0), !1;
                    if (this.submitHandler) {
                        e.stopPropagation();
                        var n = this.submitHandler(e, i);
                        return t.isUndefined(n) && (n = !1), n
                    }
                },
                registerSubmitHandler: function(e) {
                    t.isFunction(e) && (this.submitHandler = e)
                },
                refreshValidationState: function(e, t) {
                    this.topControl.refreshValidationState(e, t)
                },
                disable: function() {
                    this.topControl.disable()
                },
                enable: function() {
                    this.topControl.enable()
                },
                focus: function(e) {
                    this.topControl.focus(function(t) {
                        e && e(t)
                    })
                },
                destroy: function(e) {
                    this.getFormEl().remove(), !e && this.parent && this.parent.destroy()
                },
                show: function() {
                    this.getFormEl().css({
                        display: ""
                    })
                },
                hide: function() {
                    this.getFormEl().css({
                        display: "none"
                    })
                },
                clear: function(e) {
                    this.topControl.clear(e)
                },
                isEmpty: function() {
                    return this.topControl.isEmpty()
                },
                fireCallback: function(e, t, i, n, a, r) {
                    this.view.fireCallback(this, e, t, i, n, a, r)
                },
                getFormEl: function() {
                    return this.form
                },
                submit: function() {
                    this.form.submit()
                },
                ajaxSubmit: function(i) {
                    var n = this;
                    i || (i = {}), i.url = n.options.attributes.action, i.type = n.options.attributes.method, i.data || (i.data = this.getValue()), i.dataType || (i.dataType = "json"), i.headers || (i.headers = {});
                    var a = n.determineCsrfToken();
                    return a && (i.headers[t.CSRF_HEADER_NAME] = a), e.ajax(i)
                },
                determineCsrfToken: function() {
                    var e = t.CSRF_TOKEN;
                    if (!e)
                        for (var i = 0; i < t.CSRF_COOKIE_NAMES.length; i++) {
                            var n = t.CSRF_COOKIE_NAMES[i],
                                a = t.readCookie(n);
                            if (a) {
                                e = a;
                                break
                            }
                        }
                    return e
                }
            })
        }(jQuery),
        function(e) {
            var t = e.alpaca,
                i = 36e5;
            t.Connector = Base.extend({
                constructor: function(e, a) {
                    this.id = e, this.config = a, this.isUri = function(e) {
                        return !t.isEmpty(e) && t.isUri(e)
                    }, this.cache = new n("URL", !0, i)
                },
                connect: function(e, t) {
                    e()
                },
                loadTemplate: function(e, i, n) {
                    t.isEmpty(e) ? n({
                        message: "Empty data source.",
                        reason: "TEMPLATE_LOADING_ERROR"
                    }) : t.isUri(e) ? this.loadUri(e, !1, function(e) {
                        i && t.isFunction(i) && i(e)
                    }, function(e) {
                        n && t.isFunction(n) && n(e)
                    }) : i(e)
                },
                loadData: function(e, t, i, n) {
                    return this._handleLoadJsonResource(e, i, n)
                },
                loadSchema: function(e, t, i, n) {
                    return this._handleLoadJsonResource(e, i, n)
                },
                loadOptions: function(e, t, i, n) {
                    return this._handleLoadJsonResource(e, i, n)
                },
                loadView: function(e, t, i, n) {
                    return this._handleLoadJsonResource(e, i, n)
                },
                loadAll: function(e, i, n) {
                    var a = this,
                        r = function() {
                            var r = e.dataSource,
                                s = e.schemaSource,
                                o = e.optionsSource,
                                l = e.viewSource;
                            s || "string" != typeof e.schema || (s = e.schema), o || "string" != typeof e.options || (o = e.options), l || "string" != typeof e.view || (l = e.view);
                            var u = {},
                                c = 0,
                                p = 0,
                                d = function() {
                                    c === p && i && t.isFunction(i) && i(u.data, u.options, u.schema, u.view)
                                },
                                h = function(e) {
                                    n && t.isFunction(n) && n(e)
                                };
                            if (r && p++, s && p++, o && p++, l && p++, 0 === p) return void d();
                            var f = function(e, i, n) {
                                u[e] = i, n && ("object" == typeof u[e] && "object" == typeof n ? t.mergeObject(u[e], n) : u[e] = n)
                            };
                            r && a.loadData(r, e, function(t) {
                                f("data", e.data, t), c++, d()
                            }, h), s && a.loadSchema(s, e, function(t) {
                                f("schema", e.schema, t), c++, d()
                            }, h), o && a.loadOptions(o, e, function(t) {
                                f("options", e.options, t), c++, d()
                            }, h), l && a.loadView(l, e, function(t) {
                                f("view", e.view, t), c++, d()
                            }, h)
                        },
                        s = function(e) {
                            n && t.isFunction(n) && n(e)
                        };
                    a.connect(r, s)
                },
                loadJson: function(e, t, i) {
                    this.loadUri(e, !0, t, i)
                },
                buildAjaxConfig: function(e, t) {
                    var i = {
                        url: e,
                        type: "get"
                    };
                    return i.dataType = t ? "json" : "text", i
                },
                loadUri: function(i, n, a, r) {
                    var s = this,
                        o = s.buildAjaxConfig(i, n);
                    o.success = function(e) {
                        s.cache.put(i, e), a && t.isFunction(a) && a(e)
                    }, o.error = function(e, n, a) {
                        r && t.isFunction(r) && r({
                            message: "Unable to load data from uri : " + i,
                            stage: "DATA_LOADING_ERROR",
                            details: {
                                jqXHR: e,
                                textStatus: n,
                                errorThrown: a
                            }
                        })
                    };
                    var l = s.cache.get(i);
                    l !== !1 && a && t.isFunction(a) ? a(l) : e.ajax(o)
                },
                loadReferenceSchema: function(e, t, i) {
                    return this._handleLoadJsonResource(e, t, i)
                },
                loadReferenceOptions: function(e, t, i) {
                    return this._handleLoadJsonResource(e, t, i)
                },
                _handleLoadJsonResource: function(e, t, i) {
                    this.isUri(e) ? this.loadJson(e, function(e) {
                        t(e)
                    }, i) : t(e)
                }
            }), t.registerConnectorClass("default", t.Connector);
            var n = function(e, t, i) {
                switch (this.on = t ? !0 : !1, null != i && (this.defaultLifetime = i), this.type = e, this.type) {
                    case "URL":
                        this.put = this.put_url;
                        break;
                    case "GET":
                        this.put = this.put_GET
                }
            };
            n.prototype.on = !1, n.prototype.type = void 0, n.prototype.defaultLifetime = 18e5, n.prototype.items = {}, n.prototype.put_url = function(e, t, i) {
                null == i && (i = this.defaultLifetime);
                var n = this.make_key(e);
                return this.items[n] = {}, this.items[n].key = n, this.items[n].url = e, this.items[n].response = t, this.items[n].expire = (new Date).getTime() + i, !0
            }, n.prototype.put_GET = function(e, t, i, n) {
                null == n && (n = this.defaultLifetime);
                var a = this.make_key(e, [t]);
                return this.items[a] = {}, this.items[a].key = a, this.items[a].url = e, this.items[a].data = t, this.items[a].response = i, this.items[a].expire = (new Date).getTime() + n, !0
            }, n.prototype.get = function(e, t) {
                var i = this.make_key(e, t);
                return null == this.items[i] ? !1 : this.items[i].expire < (new Date).getTime() ? !1 : this.items[i].response
            }, n.prototype.make_key = function(e, t) {
                var i = e;
                switch (this.type) {
                    case "URL":
                        break;
                    case "GET":
                        i += this.stringify(t[0])
                }
                return i
            }, n.prototype.flush = function() {
                return cache.items = {}, !0
            }, n.prototype.stringify = function(e, t, i) {
                var n;
                if (gap = "", indent = "", "number" == typeof i)
                    for (n = 0; i > n; n += 1) indent += " ";
                else "string" == typeof i && (indent = i);
                if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
                return this.str("", {
                    "": e
                })
            }, n.prototype.quote = function(e) {
                var t = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                return t.lastIndex = 0, t.test(e) ? '"' + e.replace(t, function(e) {
                    var t = meta[e];
                    return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + e + '"'
            }, n.prototype.str = function(e, t) {
                var i, n, a, r, s, o = gap,
                    l = t[e];
                switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(e)), "function" == typeof rep && (l = rep.call(t, e, l)), typeof l) {
                    case "string":
                        return this.quote(l);
                    case "number":
                        return isFinite(l) ? String(l) : "null";
                    case "boolean":
                    case "null":
                        return String(l);
                    case "object":
                        if (!l) return "null";
                        if (gap += indent, s = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                            for (r = l.length, i = 0; r > i; i += 1) s[i] = this.str(i, l) || "null";
                            return a = 0 === s.length ? "[]" : gap ? "[\n" + gap + s.join(",\n" + gap) + "\n" + o + "]" : "[" + s.join(",") + "]", gap = o, a
                        }
                        if (rep && "object" == typeof rep)
                            for (r = rep.length, i = 0; r > i; i += 1) n = rep[i], "string" == typeof n && (a = this.str(n, l), a && s.push(this.quote(n) + (gap ? ": " : ":") + a));
                        else
                            for (n in l) Object.hasOwnProperty.call(l, n) && (a = this.str(n, l), a && s.push(this.quote(n) + (gap ? ": " : ":") + a));
                        return a = 0 === s.length ? "{}" : gap ? "{\n" + gap + s.join(",\n" + gap) + "\n" + o + "}" : "{" + s.join(",") + "}", gap = o, a
                }
            }
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.CloudCmsConnector = t.Connector.extend({
                connect: function(e, i) {
                    var n = this;
                    Gitana.connect(this.config, function(a) {
                        return a ? void i(a) : (n.gitana = this, void n.gitana.datastore("content").readBranch("master").then(function() {
                            n.branch = this, n.bindHelperFunctions(n.branch), t.branch = n.branch, e()
                        }))
                    })
                },
                bindHelperFunctions: function(e) {
                    e.loadAlpacaSchema || (e.loadAlpacaSchema = function(t, i, n) {
                        var a = function() {
                                return e.getUri() + "/alpaca/schema"
                            },
                            r = {};
                        return r.id = t, this.chainGetResponse(this, a, r).then(function(e) {
                            n.call(this, null, e)
                        })
                    }), e.loadAlpacaOptions || (e.loadAlpacaOptions = function(t, i, n) {
                        var a = function() {
                                return e.getUri() + "/alpaca/options"
                            },
                            r = {};
                        return r.schemaId = i.schemaSource, r.id = t, this.chainGetResponse(this, a, r).then(function(e) {
                            n.call(this, null, e)
                        })
                    }), e.loadAlpacaData || (e.loadAlpacaData = function(t, i, n) {
                        var a = function() {
                                return e.getUri() + "/alpaca/data"
                            },
                            r = {};
                        return r.id = t, this.chainGetResponse(this, a, r).then(function(e) {
                            n.call(this, null, e)
                        })
                    })
                },
                loadData: function(e, t, i, n) {
                    var a = this;
                    a.branch.loadAlpacaData(e, t, function(e, t) {
                        if (e) return void n(e);
                        var a = null;
                        t && (a = JSON.parse(JSON.stringify(t))), i(a)
                    })
                },
                loadSchema: function(e, t, i, n) {
                    var a = this;
                    a.branch.loadAlpacaSchema(e, t, function(e, t) {
                        return e ? void n(e) : void i(t)
                    })
                },
                loadOptions: function(e, t, i, n) {
                    var a = this;
                    a.branch.loadAlpacaOptions(e, t, function(e, t) {
                        return e ? void n(e) : (t || (t = {}), t.form.buttons = {
                            submit: {
                                title: "Submit",
                                click: function(e) {
                                    var t = this,
                                        i = this.getValue();
                                    i || (i = {});
                                    var n = this.ajaxSubmit({
                                        xhrFields: {
                                            withCredentials: !0
                                        },
                                        crossDomain: !0,
                                        processData: !1,
                                        data: JSON.stringify(i),
                                        contentType: "application/json; charset=utf-8"
                                    });
                                    n.done(function() {
                                        t.topControl.trigger("formSubmitSuccess")
                                    }), n.fail(function() {
                                        t.topControl.trigger("formSubmitFail")
                                    })
                                }
                            }
                        }, "undefined" == typeof t.focus && (t.focus = !0), t.form.attributes.action = a.config.baseURL + t.form.attributes.action, void i(t))
                    })
                },
                loadReferenceSchema: function(e, t, i) {
                    var n = this;
                    return n.loadSchema(e, t, i)
                },
                loadReferenceOptions: function(e, t, i) {
                    var n = this;
                    return n.loadOptions(e, t, i)
                }
            }), t.registerConnectorClass("cloudcms", t.CloudCmsConnector)
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.TextField = t.ControlField.extend({
                getFieldType: function() {
                    return "text"
                },
                setup: function() {
                    this.base(), this.inputType || (this.inputType = "text"), this.options.inputType && (this.inputType = this.options.inputType), this.options.data || (this.options.data = {}), this.options.attributes || (this.options.attributes = {}), "undefined" == typeof this.options.allowOptionalEmpty && (this.options.allowOptionalEmpty = !0), this.options.autocomplete && "string" == typeof this.options.autocomplete && (this.options.autocomplete = "on" === this.options.autocomplete.toLowerCase() ? !0 : "true" === this.options.autocomplete.toLowerCase() ? !0 : "yes" === this.options.autocomplete.toLowerCase() ? !0 : !1), "undefined" == typeof this.options.autocomplete && (this.options.autocomplete = !1), "undefined" == typeof this.options.disallowEmptySpaces && (this.options.disallowEmptySpaces = !1), "undefined" == typeof this.options.disallowOnlyEmptySpaces && (this.options.disallowOnlyEmptySpaces = !1)
                },
                destroy: function() {
                    this.base(), this.control && this.control.typeahead && this.options.typeahead && e(this.control).typeahead("destroy")
                },
                postRender: function(e) {
                    var t = this;
                    this.base(function() {
                        t.control && (t.applyAutocomplete(), t.applyMask(), t.applyTypeAhead(), t.updateMaxLengthIndicator()), e()
                    })
                },
                applyAutocomplete: function() {
                    var t = this;
                    "undefined" != typeof t.options.autocomplete && (e(t.field).addClass("alpaca-autocomplete"), e(t.control).attr("autocomplete", t.options.autocomplete ? "on" : "off"), t.fireCallback("autocomplete"))
                },
                applyMask: function() {
                    var e = this;
                    e.control.mask && e.options.maskString && e.control.mask(e.options.maskString)
                },
                applyTypeAhead: function() {
                    var i = this;
                    if (i.control.typeahead && i.options.typeahead && !t.isEmpty(i.options.typeahead)) {
                        var n = i.options.typeahead.config;
                        n || (n = {});
                        var a = i.options.typeahead.datasets;
                        a || (a = {}), a.name || (a.name = i.getId());
                        var r = i.options.typeahead.events;
                        if (r || (r = {}), "local" === a.type || "remote" === a.type || "prefetch" === a.type) {
                            var s = {
                                datumTokenizer: function(e) {
                                    var t = "";
                                    for (var i in e)(e.hasOwnProperty(i) || e[i]) && (t += " " + e[i]);
                                    return Bloodhound.tokenizers.whitespace(t)
                                },
                                queryTokenizer: Bloodhound.tokenizers.whitespace
                            };
                            if ("local" === a.type) {
                                var o = [];
                                if ("function" == typeof a.source) s.local = a.source;
                                else {
                                    for (var l = 0; l < a.source.length; l++) {
                                        var u = a.source[l];
                                        "string" == typeof u && (u = {
                                            value: u
                                        }), o.push(u)
                                    }
                                    s.local = o
                                }
                                a.local && (s.local = a.local)
                            }
                            "prefetch" === a.type && (s.prefetch = {
                                url: a.source
                            }, a.filter && (s.prefetch.filter = a.filter)), "remote" === a.type && (s.remote = {
                                url: a.source
                            }, a.filter && (s.remote.filter = a.filter), a.replace && (s.remote.replace = a.replace));
                            var c = new Bloodhound(s);
                            c.initialize(), a.source = c.ttAdapter()
                        }
                        if (a.templates)
                            for (var p in a.templates) {
                                var d = a.templates[p];
                                "string" == typeof d && (a.templates[p] = Handlebars.compile(d))
                            }
                        e(i.control).typeahead(n, a), e(i.control).on("typeahead:autocompleted", function(t, n) {
                            i.setValue(n.value), e(i.control).change()
                        }), e(i.control).on("typeahead:selected", function(t, n) {
                            i.setValue(n.value), e(i.control).change()
                        }), r && (r.autocompleted && e(i.control).on("typeahead:autocompleted", function(e, t) {
                            r.autocompleted(e, t)
                        }), r.selected && e(i.control).on("typeahead:selected", function(e, t) {
                            r.selected(e, t)
                        }));
                        var h = e(i.control);
                        e(i.control).change(function() {
                            var t = e(this).val(),
                                i = e(h).typeahead("val");
                            i !== t && e(h).typeahead("val", i)
                        }), e(i.field).find("span.twitter-typeahead").first().css("display", "block"), e(i.field).find("span.twitter-typeahead input.tt-input").first().css("background-color", "")
                    }
                },
                prepareControlModel: function(e) {
                    var t = this;
                    this.base(function(i) {
                        i.inputType = t.inputType, e(i)
                    })
                },
                updateMaxLengthIndicator: function() {
                    var i = this,
                        n = !1,
                        a = "";
                    if (!t.isEmpty(i.schema.maxLength) && i.options.showMaxLengthIndicator) {
                        var r = i.getValue() || "",
                            s = i.schema.maxLength - r.length;
                        s >= 0 ? a = "You have " + s + " characters remaining" : (a = "Your message is too long by " + -1 * s + " characters", n = !0);
                        var o = e(i.field).find(".alpaca-field-text-max-length-indicator");
                        0 === o.length && (o = e("<p class='alpaca-field-text-max-length-indicator'></p>"), e(i.control).after(o)), e(o).html(a), e(o).removeClass("err"), n && e(o).addClass("err")
                    }
                },
                getControlValue: function() {
                    var t = this,
                        i = this._getControlVal(!0);
                    if (t.control.mask && t.options.maskString) {
                        var n = e(this.control).data(e.mask.dataName);
                        n && (i = n(), i = t.ensureProperType(i))
                    }
                    return i
                },
                setValue: function(e) {
                    this.control && this.control.length > 0 && this.control.val(t.isEmpty(e) ? "" : e), this.base(e), this.updateMaxLengthIndicator()
                },
                handleValidate: function() {
                    var e = this.base(),
                        i = this.validation,
                        n = this._validatePattern();
                    return i.invalidPattern = {
                        message: n ? "" : t.substituteTokens(this.getMessage("invalidPattern"), [this.schema.pattern]),
                        status: n
                    }, n = this._validateMaxLength(), i.stringTooLong = {
                        message: n ? "" : t.substituteTokens(this.getMessage("stringTooLong"), [this.schema.maxLength]),
                        status: n
                    }, n = this._validateMinLength(), i.stringTooShort = {
                        message: n ? "" : t.substituteTokens(this.getMessage("stringTooShort"), [this.schema.minLength]),
                        status: n
                    }, e && i.invalidPattern.status && i.stringTooLong.status && i.stringTooShort.status
                },
                _validatePattern: function() {
                    if (this.schema.pattern) {
                        var e = this.getValue();
                        if ("" === e && this.options.allowOptionalEmpty && !this.isRequired()) return !0;
                        if (t.isEmpty(e) && (e = ""), "string" == typeof e && !e.match(this.schema.pattern)) return !1
                    }
                    return !0
                },
                _validateMinLength: function() {
                    if (!t.isEmpty(this.schema.minLength)) {
                        var e = this.getValue();
                        if (e !== e && (e = ""), "" === e && this.options.allowOptionalEmpty && !this.isRequired()) return !0;
                        if (t.isEmpty(e) && (e = ""), ("" + e).length < this.schema.minLength) return !1
                    }
                    return !0
                },
                _validateMaxLength: function() {
                    if (!t.isEmpty(this.schema.maxLength)) {
                        var e = this.getValue();
                        if ("" === e && this.options.allowOptionalEmpty && !this.isRequired()) return !0;
                        if (t.isEmpty(e) && (e = ""), ("" + e).length > this.schema.maxLength) return !1
                    }
                    return !0
                },
                focus: function(t) {
                    if (this.control && this.control.length > 0) {
                        var i = e(this.control).get(0);
                        try {
                            var n = i.value ? i.value.length : 0;
                            i.selectionStart = n, i.selectionEnd = n
                        } catch (a) {}
                        i.focus(), t && t(this)
                    }
                },
                getType: function() {
                    return "string"
                },
                onKeyPress: function(e) {
                    var i = this;
                    if (9 !== e.keyCode && 37 !== e.keyCode && 38 !== e.keyCode && 39 !== e.keyCode && 40 !== e.keyCode) {
                        if (8 === e.keyCode) {
                            if (!t.isEmpty(i.schema.minLength) && (i.options.constrainLengths || i.options.constrainMinLength)) {
                                var n = i.getValue() || "";
                                n.length <= i.schema.minLength && (e.preventDefault(), e.stopImmediatePropagation())
                            }
                        } else if (!t.isEmpty(i.schema.maxLength) && (i.options.constrainLengths || i.options.constrainMaxLength)) {
                            var n = i.getValue() || "";
                            n.length >= i.schema.maxLength && (e.preventDefault(), e.stopImmediatePropagation())
                        }
                        32 === e.keyCode && i.options.disallowEmptySpaces && (e.preventDefault(), e.stopImmediatePropagation())
                    }
                },
                onKeyUp: function(t) {
                    var i = this;
                    i.updateMaxLengthIndicator(), e(this.field).trigger("fieldkeyup")
                },
                getTitle: function() {
                    return "Single-Line Text"
                },
                getDescription: function() {
                    return "Text field for single-line text."
                },
                getSchemaOfSchema: function() {
                    return t.merge(this.base(), {
                        properties: {
                            minLength: {
                                title: "Minimal Length",
                                description: "Minimal length of the property value.",
                                type: "number"
                            },
                            maxLength: {
                                title: "Maximum Length",
                                description: "Maximum length of the property value.",
                                type: "number"
                            },
                            pattern: {
                                title: "Pattern",
                                description: "Regular expression for the property value.",
                                type: "string"
                            }
                        }
                    })
                },
                getOptionsForSchema: function() {
                    return t.merge(this.base(), {
                        fields: {
                            "default": {
                                helper: "Field default value",
                                type: "text"
                            },
                            minLength: {
                                type: "integer"
                            },
                            maxLength: {
                                type: "integer"
                            },
                            pattern: {
                                type: "text"
                            }
                        }
                    })
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {
                            size: {
                                title: "Field Size",
                                description: "Field size.",
                                type: "number",
                                "default": 40
                            },
                            maskString: {
                                title: "Mask Expression",
                                description: "Expression for the field mask. Field masking will be enabled if not empty.",
                                type: "string"
                            },
                            placeholder: {
                                title: "Field Placeholder",
                                description: "Field placeholder.",
                                type: "string"
                            },
                            typeahead: {
                                title: "Type Ahead",
                                description: "Provides configuration for the $.typeahead plugin if it is available.  For full configuration options, see: https://github.com/twitter/typeahead.js"
                            },
                            allowOptionalEmpty: {
                                title: "Allow Optional Empty",
                                description: "Allows this non-required field to validate when the value is empty"
                            },
                            inputType: {
                                title: "HTML5 Input Type",
                                description: "Allows for the override of the underlying HTML5 input type.  If not specified, an assumed value is provided based on the kind of input control (i.e. 'text', 'date', 'email' and so forth)",
                                type: "string"
                            },
                            data: {
                                title: "Data attributes for the underlying DOM input control",
                                description: "Allows you to specify a key/value map of data attributes that will be added as DOM attribuets for the underlying input control.  The data attributes will be added as data-{name}='{value}'.",
                                type: "object"
                            },
                            autocomplete: {
                                title: "HTML autocomplete attribute for the underlying DOM input control",
                                description: "Allows you to specify the autocomplete attribute for the underlying input control whether or not field should have autocomplete enabled.",
                                type: "string"
                            },
                            disallowEmptySpaces: {
                                title: "Disallow Empty Spaces",
                                description: "Whether to disallow the entry of empty spaces in the text",
                                type: "boolean",
                                "default": !1
                            },
                            disallowOnlyEmptySpaces: {
                                title: "Disallow Only Empty Spaces",
                                description: "Whether to disallow the entry of only empty spaces in the text",
                                type: "boolean",
                                "default": !1
                            }
                        }
                    })
                },
                getOptionsForOptions: function() {
                    return t.merge(this.base(), {
                        fields: {
                            size: {
                                type: "integer"
                            },
                            maskString: {
                                helper: "a - an alpha character;9 - a numeric character;* - an alphanumeric character",
                                type: "text"
                            },
                            typeahead: {
                                type: "object"
                            },
                            allowOptionalEmpty: {
                                type: "checkbox"
                            },
                            inputType: {
                                type: "text"
                            },
                            data: {
                                type: "object"
                            }
                        }
                    })
                }
            }), t.registerMessages({
                invalidPattern: "This field should have pattern {0}",
                stringTooShort: "This field should contain at least {0} numbers or characters",
                stringTooLong: "This field should contain at most {0} numbers or characters"
            }), t.registerFieldClass("text", t.Fields.TextField), t.registerDefaultSchemaFieldMapping("string", "text")
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.TextAreaField = t.Fields.TextField.extend({
                getFieldType: function() {
                    return "textarea"
                },
                setup: function() {
                    this.base(), this.options.rows || (this.options.rows = 5), this.options.cols || (this.options.cols = 40)
                },
                handleValidate: function() {
                    var e = this.base(),
                        i = this.validation,
                        n = this._validateWordCount();
                    return i.wordLimitExceeded = {
                        message: n ? "" : t.substituteTokens(this.getMessage("wordLimitExceeded"), [this.options.wordlimit]),
                        status: n
                    }, e && i.wordLimitExceeded.status
                },
                _validateWordCount: function() {
                    if (this.options.wordlimit && this.options.wordlimit > -1) {
                        var e = this.data;
                        if (e) {
                            var t = e.split(" ").length;
                            if (t > this.options.wordlimit) return !1
                        }
                    }
                    return !0
                },
                getTitle: function() {
                    return "Multi-Line Text"
                },
                getDescription: function() {
                    return "Textarea field for multiple line text."
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {
                            rows: {
                                title: "Rows",
                                description: "Number of rows",
                                type: "number",
                                "default": 5
                            },
                            cols: {
                                title: "Columns",
                                description: "Number of columns",
                                type: "number",
                                "default": 40
                            },
                            wordlimit: {
                                title: "Word Limit",
                                description: "Limits the number of words allowed in the text area.",
                                type: "number",
                                "default": -1
                            }
                        }
                    })
                },
                getOptionsForOptions: function() {
                    return t.merge(this.base(), {
                        fields: {
                            rows: {
                                type: "integer"
                            },
                            cols: {
                                type: "integer"
                            },
                            wordlimit: {
                                type: "integer"
                            }
                        }
                    })
                }
            }), t.registerMessages({
                wordLimitExceeded: "The maximum word limit of {0} has been exceeded."
            }), t.registerFieldClass("textarea", t.Fields.TextAreaField)
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.CheckBoxField = t.ControlField.extend({
                getFieldType: function() {
                    return "checkbox"
                },
                setup: function() {
                    var i = this;
                    i.base(), this.options.rightLabel || (this.options.rightLabel = ""), "undefined" == typeof i.options.multiple && ("array" === i.schema.type ? i.options.multiple = !0 : "undefined" != typeof i.schema["enum"] && (i.options.multiple = !0)), i.checkboxOptions = [], i.options.multiple && e.each(i.getEnum(), function(e, n) {
                        var a = n;
                        i.options.optionLabels && (t.isEmpty(i.options.optionLabels[e]) ? t.isEmpty(i.options.optionLabels[n]) || (a = i.options.optionLabels[n]) : a = i.options.optionLabels[e]), i.checkboxOptions.push({
                            value: n,
                            text: a
                        })
                    })
                },
                getEnum: function() {
                    var e = [];
                    return this.schema && this.schema["enum"] && (e = this.schema["enum"]), e
                },
                onClick: function(e) {
                    this.refreshValidationState()
                },
                prepareControlModel: function(e) {
                    var t = this;
                    this.base(function(i) {
                        i.checkboxOptions = t.checkboxOptions, e(i)
                    })
                },
                postRender: function(t) {
                    var i = this;
                    this.base(function() {
                        if (i.data && "undefined" != typeof i.data && i.setValue(i.data), e(i.getFieldEl()).find("input:checkbox").change(function(e) {
                                i.triggerWithPropagation("change")
                            }), i.options.multiple && (e(i.getFieldEl()).find("input:checkbox").prop("checked", !1), i.data)) {
                            var n = i.data;
                            if ("string" == typeof i.data) {
                                n = i.data.split(",");
                                for (var a = 0; a < n.length; a++) n[a] = e.trim(n[a])
                            }
                            for (var r in n) e(i.getFieldEl()).find('input:checkbox[data-checkbox-value="' + n[r] + '"]').prop("checked", !0)
                        }
                        t()
                    })
                },
                getControlValue: function() {
                    var i = this,
                        n = null;
                    if (i.options.multiple) {
                        for (var a = [], r = 0; r < i.checkboxOptions.length; r++) {
                            var s = e(i.getFieldEl()).find("input[data-checkbox-index='" + r + "']");
                            if (t.checked(s)) {
                                var o = e(s).attr("data-checkbox-value");
                                a.push(o)
                            }
                        }
                        "array" === i.schema.type ? n = a : "string" === i.schema.type && (n = a.join(","))
                    } else {
                        var l = e(i.getFieldEl()).find("input");
                        n = l.length > 0 ? t.checked(e(l[0])) : !1
                    }
                    return n
                },
                setValue: function(i) {
                    var n = this,
                        a = function(i) {
                            t.isString(i) && (i = "true" === i);
                            var a = e(n.getFieldEl()).find("input");
                            a.length > 0 && t.checked(e(a[0]), i)
                        },
                        r = function(a) {
                            "string" == typeof a && (a = a.split(","));
                            for (var r = 0; r < a.length; r++) a[r] = t.trim(a[r]);
                            t.checked(e(n.getFieldEl()).find("input[data-checkbox-value]"), !1);
                            for (var s = 0; s < a.length; s++) {
                                var o = e(n.getFieldEl()).find('input[data-checkbox-value="' + a[s] + '"]');
                                o.length > 0 && t.checked(e(o[0]), i)
                            }
                        },
                        s = !1;
                    n.options.multiple ? "string" == typeof i ? (r(i), s = !0) : t.isArray(i) && (r(i), s = !0) : "boolean" == typeof i ? (a(i), s = !0) : "string" == typeof i && (a(i), s = !0), !s && i && t.logError("CheckboxField cannot set value for schema.type=" + n.schema.type + " and value=" + i), this.base(i)
                },
                _validateEnum: function() {
                    var e = this;
                    if (!e.options.multiple) return !0;
                    var i = e.getValue();
                    return !e.isRequired() && t.isValEmpty(i) ? !0 : ("string" == typeof i && (i = i.split(",")), t.anyEquality(i, e.schema["enum"]))
                },
                disable: function() {
                    e(this.control).find("input").each(function() {
                        e(this).disabled = !0, e(this).prop("disabled", !0)
                    })
                },
                enable: function() {
                    e(this.control).find("input").each(function() {
                        e(this).disabled = !1, e(this).prop("disabled", !1)
                    })
                },
                getType: function() {
                    return "boolean"
                },
                getTitle: function() {
                    return "Checkbox Field"
                },
                getDescription: function() {
                    return "Checkbox Field for boolean (true/false), string ('true', 'false' or comma-delimited string of values) or data array."
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {
                            rightLabel: {
                                title: "Option Label",
                                description: "Optional right-hand side label for single checkbox field.",
                                type: "string"
                            },
                            multiple: {
                                title: "Multiple",
                                description: "Whether to render multiple checkboxes for multi-valued type (such as an array or a comma-delimited string)",
                                type: "boolean"
                            }
                        }
                    })
                },
                getOptionsForOptions: function() {
                    return t.merge(this.base(), {
                        fields: {
                            rightLabel: {
                                type: "text"
                            },
                            multiple: {
                                type: "checkbox"
                            }
                        }
                    })
                }
            }), t.registerFieldClass("checkbox", t.Fields.CheckBoxField), t.registerDefaultSchemaFieldMapping("boolean", "checkbox")
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.FileField = t.Fields.TextField.extend({
                getFieldType: function() {
                    return "file"
                },
                setValue: function(e) {
                    this.data = e, this.data = e, this.updateObservable(), this.triggerUpdate()
                },
                getControlValue: function() {
                    return this.data
                },
                onChange: function(e) {
                    this.base(e), this.options.selectionHandler && this.processSelectionHandler(e.target.files)
                },
                processSelectionHandler: function(e) {
                    if (e && e.length > 0 && "undefined" != typeof FileReader) {
                        var t = [],
                            i = 0,
                            n = new FileReader;
                        n.onload = function() {
                            var n = this;
                            return function(a) {
                                var r = a.target.result;
                                t.push(r), i++, i === e.length && n.options.selectionHandler.call(n, e, t)
                            }
                        }.call(this);
                        for (var a = 0; a < e.length; a++) n.readAsDataURL(e[a])
                    }
                },
                getTitle: function() {
                    return "File Field"
                },
                getDescription: function() {
                    return "Field for uploading files."
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {
                            selectionHandler: {
                                title: "Selection Handler",
                                description: "Function that should be called when files are selected.  Requires HTML5.",
                                type: "boolean",
                                "default": !1
                            }
                        }
                    })
                },
                getOptionsForOptions: function() {
                    return t.merge(this.base(), {
                        fields: {
                            selectionHandler: {
                                type: "checkbox"
                            }
                        }
                    })
                }
            }), t.registerFieldClass("file", t.Fields.FileField)
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.ListField = t.ControlField.extend({
                setup: function() {
                    var i = this;
                    i.base(), i.selectOptions = [], i.getEnum() && (i.sortEnum(), e.each(i.getEnum(), function(e, n) {
                        var a = n;
                        i.options.optionLabels && (t.isEmpty(i.options.optionLabels[e]) ? t.isEmpty(i.options.optionLabels[n]) || (a = i.options.optionLabels[n]) : a = i.options.optionLabels[e]), i.selectOptions.push({
                            value: n,
                            text: a
                        })
                    })), i.isRequired() && !i.data && i.options.removeDefaultNone === !0 && i.schema["enum"] && i.schema["enum"].length > 0 && (i.data = i.schema["enum"][0])
                },
                prepareControlModel: function(e) {
                    var t = this;
                    this.base(function(i) {
                        i.noneLabel = t.getMessage("noneLabel"), "undefined" != typeof t.options.noneLabel && (i.noneLabel = t.options.noneLabel), i.hideNone = t.isRequired(), "undefined" != typeof t.options.removeDefaultNone && (i.hideNone = t.options.removeDefaultNone), e(i)
                    })
                },
                getEnum: function() {
                    return this.schema && this.schema["enum"] ? this.schema["enum"] : void 0
                },
                convertValue: function(i) {
                    var n = this;
                    return t.isArray(i) ? e.each(i, function(t, a) {
                        e.each(n.selectOptions, function(e, n) {
                            n.value === a && (i[t] = n.value)
                        })
                    }) : e.each(this.selectOptions, function(e, t) {
                        t.value === i && (i = t.value)
                    }), i
                },
                beforeRenderControl: function(i, n) {
                    var a = this;
                    this.base(i, function() {
                        if (a.options.dataSource) {
                            a.selectOptions = [];
                            var r = function() {
                                a.sortSelectableOptions(a.selectOptions), a.schema["enum"] = [], a.options.optionLabels = [];
                                for (var e = 0; e < a.selectOptions.length; e++) a.schema["enum"].push(a.selectOptions[e].value), a.options.optionLabels.push(a.selectOptions[e].text);
                                i.selectOptions = a.selectOptions, n()
                            };
                            if (t.isFunction(a.options.dataSource)) a.options.dataSource.call(a, function(e) {
                                if (t.isArray(e)) {
                                    for (var i = 0; i < e.length; i++) "string" == typeof e[i] ? a.selectOptions.push({
                                        text: e[i],
                                        value: e[i]
                                    }) : t.isObject(e[i]) && a.selectOptions.push(e[i]);
                                    r()
                                } else if (t.isObject(e)) {
                                    for (var n in e) a.selectOptions.push({
                                        text: n,
                                        value: e[n]
                                    });
                                    r()
                                } else r()
                            });
                            else if (t.isUri(a.options.dataSource)) e.ajax({
                                url: a.options.dataSource,
                                type: "get",
                                dataType: "json",
                                success: function(i) {
                                    var n = i;
                                    a.options.dsTransformer && t.isFunction(a.options.dsTransformer) && (n = a.options.dsTransformer(n)), n && (t.isObject(n) ? (e.each(n, function(e, t) {
                                        a.selectOptions.push({
                                            value: e,
                                            text: t
                                        })
                                    }), r()) : t.isArray(n) && (e.each(n, function(e, t) {
                                        a.selectOptions.push({
                                            value: t.value,
                                            text: t.text
                                        })
                                    }), r()))
                                },
                                error: function(e, t, i) {
                                    a.errorCallback({
                                        message: "Unable to load data from uri : " + a.options.dataSource,
                                        stage: "DATASOURCE_LOADING_ERROR",
                                        details: {
                                            jqXHR: e,
                                            textStatus: t,
                                            errorThrown: i
                                        }
                                    })
                                }
                            });
                            else if (t.isArray(a.options.dataSource)) {
                                for (var s = 0; s < a.options.dataSource.length; s++) "string" == typeof a.options.dataSource[s] ? a.selectOptions.push({
                                    text: a.options.dataSource[s],
                                    value: a.options.dataSource[s]
                                }) : t.isObject(a.options.dataSource[s]) && a.selectOptions.push(a.options.dataSource[s]);
                                r()
                            } else if (t.isObject(a.options.dataSource)) {
                                for (var o in a.options.dataSource) a.selectOptions.push({
                                    text: a.options.dataSource[o],
                                    value: o
                                });
                                r()
                            } else n()
                        } else n()
                    })
                },
                getSchemaOfSchema: function() {
                    return t.merge(this.base(), {
                        properties: {
                            "enum": {
                                title: "Enumeration",
                                description: "List of field value options",
                                type: "array",
                                required: !0
                            }
                        }
                    })
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {
                            optionLabels: {
                                title: "Option Labels",
                                description: "Labels for options. It can either be a map object or an array field that maps labels to items defined by enum schema property one by one.",
                                type: "array"
                            },
                            dataSource: {
                                title: "Option Datasource",
                                description: "Datasource for generating list of options.  This can be a string or a function.  If a string, it is considered to be a URI to a service that produces a object containing key/value pairs or an array of elements of structure {'text': '', 'value': ''}.  This can also be a function that is called to produce the same list.",
                                type: "string"
                            },
                            removeDefaultNone: {
                                title: "Remove Default None",
                                description: "If true, the default 'None' option will not be shown.",
                                type: "boolean",
                                "default": !1
                            },
                            noneLabel: {
                                title: "None Label",
                                description: "The label to use for the 'None' option in a list (select, radio or otherwise).",
                                type: "string",
                                "default": "None"
                            },
                            hideNone: {
                                title: "Hide None",
                                description: "Whether to hide the None option from a list (select, radio or otherwise).  This will be true if the field is required and false otherwise.",
                                type: "boolean",
                                "default": !1
                            }
                        }
                    })
                },
                getOptionsForOptions: function() {
                    return t.merge(this.base(), {
                        fields: {
                            optionLabels: {
                                itemLabel: "Label",
                                type: "array"
                            },
                            dataSource: {
                                type: "text"
                            },
                            removeDefaultNone: {
                                type: "checkbox",
                                rightLabel: "Remove Default None"
                            },
                            noneLabel: {
                                type: "text"
                            },
                            hideNone: {
                                type: "checkbox",
                                rightLabel: "Hide the 'None' option from the list"
                            }
                        }
                    })
                }
            }), t.registerMessages({
                noneLabel: "None"
            })
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.RadioField = t.Fields.ListField.extend({
                getFieldType: function() {
                    return "radio"
                },
                setup: function() {
                    this.base(), this.options.name ? this.name = this.options.name : this.name || (this.name = this.getId() + "-name"), t.isUndefined(this.options.emptySelectFirst) && (this.options.emptySelectFirst = !1), t.isUndefined(this.options.vertical) && (this.options.vertical = !0)
                },
                getControlValue: function() {
                    var t = this,
                        i = null;
                    return e(this.control).find(":checked").each(function() {
                        i = e(this).val(), i = t.ensureProperType(i)
                    }), i
                },
                setValue: function(i) {
                    var n = this;
                    e(this.control).find("input").each(function() {
                        t.checked(e(this), null)
                    }), "undefined" != typeof i && t.checked(e(n.control).find('input[value="' + i + '"]'), "checked"), this.options.emptySelectFirst && 0 === e(this.control).find("input:checked").length && t.checked(e(n.control).find("input:radio").first(), "checked"), this.base(i)
                },
                initControlEvents: function() {
                    var t = this;
                    t.base();
                    var i = e(this.control).find("input");
                    i.focus(function(e) {
                        t.suspendBlurFocus || (t.onFocus.call(t, e), t.trigger("focus", e))
                    }), i.blur(function(e) {
                        t.suspendBlurFocus || (t.onBlur.call(t, e), t.trigger("blur", e))
                    })
                },
                prepareControlModel: function(e) {
                    var t = this;
                    this.base(function(i) {
                        i.selectOptions = t.selectOptions, i.removeDefaultNone = t.options.removeDefaultNone, e(i)
                    })
                },
                afterRenderControl: function(i, n) {
                    var a = this;
                    this.base(i, function() {
                        a.options.emptySelectFirst && a.selectOptions && a.selectOptions.length > 0 && (a.data = a.selectOptions[0].value, 0 === e("input:radio:checked", a.control).length && t.checked(e(a.control).find('input:radio[value="' + a.data + '"]'), "checked")), a.options.vertical ? e(a.control).css("display", "block") : e(a.control).css("display", "inline-block"), n()
                    })
                },
                onClick: function(t) {
                    var i = this,
                        n = i.getValue();
                    this.base(t);
                    var a = e(t.currentTarget).find("input").val();
                    "undefined" != typeof a && (i.setValue(a), i.refreshValidationState(), n !== a && i.trigger("change"))
                },
                disable: function() {
                    this.base(), this.getFieldEl().addClass("disabled")
                },
                enable: function() {
                    this.base(), this.getFieldEl().removeClass("disabled")
                },
                getTitle: function() {
                    return "Radio Group Field"
                },
                getDescription: function() {
                    return "Radio Group Field with list of options."
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {
                            name: {
                                title: "Field name",
                                description: "Field name.",
                                type: "string"
                            },
                            emptySelectFirst: {
                                title: "Empty Select First",
                                description: "If the data is empty, then automatically select the first item in the list.",
                                type: "boolean",
                                "default": !1
                            },
                            vertical: {
                                title: "Position the radio selector items vertically",
                                description: "By default, radio controls are stacked vertically.  Set to false if you'd like radio controls to lay out horizontally.",
                                type: "boolean",
                                "default": !0
                            }
                        }
                    })
                }
            }), t.registerFieldClass("radio", t.Fields.RadioField)
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.SelectField = t.Fields.ListField.extend({
                getFieldType: function() {
                    return "select"
                },
                setup: function() {
                    this.base()
                },
                getControlValue: function() {
                    var e = this._getControlVal(!0);
                    return "undefined" == typeof e && (e = this.data), this.convertValue(e)
                },
                setValue: function(e) {
                    t.isArray(e) ? t.compareArrayContent(e, this.getValue()) || (!t.isEmpty(e) && this.control && this.control.val(e), this.base(e)) : e !== this.getValue() && (this.control && "undefined" != typeof e && null != e && this.control.val(e), this.base(e))
                },
                getEnum: function() {
                    if (this.schema) {
                        if (this.schema["enum"]) return this.schema["enum"];
                        if (this.schema.type && "array" === this.schema.type && this.schema.items && this.schema.items["enum"]) return this.schema.items["enum"]
                    }
                },
                initControlEvents: function() {
                    var e = this;
                    if (e.base(), e.options.multiple) {
                        var t = this.control.parent().find("button.multiselect");
                        t.focus(function(t) {
                            e.suspendBlurFocus || (e.onFocus.call(e, t), e.trigger("focus", t))
                        }), t.blur(function(t) {
                            e.suspendBlurFocus || (e.onBlur.call(e, t), e.trigger("blur", t))
                        })
                    }
                },
                beforeRenderControl: function(e, t) {
                    var i = this;
                    this.base(e, function() {
                        i.schema.type && "array" === i.schema.type && (i.options.multiple = !0), t()
                    })
                },
                prepareControlModel: function(e) {
                    var t = this;
                    this.base(function(i) {
                        i.selectOptions = t.selectOptions, e(i)
                    })
                },
                afterRenderControl: function(i, n) {
                    var a = this;
                    this.base(i, function() {
                        if (t.isUndefined(a.data) && a.options.emptySelectFirst && a.selectOptions && a.selectOptions.length > 0 && (a.data = a.selectOptions[0].value), a.data && a.setValue(a.data), a.options.multiple && e.fn.multiselect) {
                            var i = null;
                            i = a.options.multiselect ? a.options.multiselect : {}, i.nonSelectedText || (i.nonSelectedText = "None", a.options.noneLabel && (i.nonSelectedText = a.options.noneLabel)), a.options.hideNone && delete i.nonSelectedText, e(a.getControlEl()).multiselect(i)
                        }
                        n()
                    })
                },
                _validateEnum: function() {
                    var i = this;
                    if (this.schema["enum"]) {
                        var n = this.data;
                        if (!this.isRequired() && t.isValEmpty(n)) return !0;
                        if (this.options.multiple) {
                            var a = !0;
                            return n || (n = []), t.isArray(n) || t.isObject(n) || (n = [n]), e.each(n, function(t, n) {
                                return e.inArray(n, i.schema["enum"]) <= -1 ? (a = !1, !1) : void 0
                            }), a
                        }
                        return e.inArray(n, this.schema["enum"]) > -1
                    }
                    return !0
                },
                onChange: function(e) {
                    this.base(e);
                    var i = this;
                    t.later(25, this, function() {
                        var e = i.getValue();
                        i.setValue(e), i.refreshValidationState()
                    })
                },
                _validateMinItems: function() {
                    return this.schema.items && this.schema.items.minItems && e(":selected", this.control).length < this.schema.items.minItems ? !1 : !0
                },
                _validateMaxItems: function() {
                    return this.schema.items && this.schema.items.maxItems && e(":selected", this.control).length > this.schema.items.maxItems ? !1 : !0
                },
                handleValidate: function() {
                    var e = this.base(),
                        i = this.validation,
                        n = this._validateMaxItems();
                    return i.tooManyItems = {
                        message: n ? "" : t.substituteTokens(this.getMessage("tooManyItems"), [this.schema.items.maxItems]),
                        status: n
                    }, n = this._validateMinItems(), i.notEnoughItems = {
                        message: n ? "" : t.substituteTokens(this.getMessage("notEnoughItems"), [this.schema.items.minItems]),
                        status: n
                    }, e && i.tooManyItems.status && i.notEnoughItems.status
                },
                focus: function(t) {
                    if (this.control && this.control.length > 0) {
                        var i = e(this.control).get(0);
                        i.focus(), t && t(this)
                    }
                },
                getTitle: function() {
                    return "Select Field"
                },
                getDescription: function() {
                    return "Select Field"
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {
                            multiple: {
                                title: "Mulitple Selection",
                                description: "Allow multiple selection if true.",
                                type: "boolean",
                                "default": !1
                            },
                            size: {
                                title: "Displayed Options",
                                description: "Number of options to be shown.",
                                type: "number"
                            },
                            emptySelectFirst: {
                                title: "Empty Select First",
                                description: "If the data is empty, then automatically select the first item in the list.",
                                type: "boolean",
                                "default": !1
                            },
                            multiselect: {
                                title: "Multiselect Plugin Settings",
                                description: "Multiselect plugin properties - http://davidstutz.github.io/bootstrap-multiselect",
                                type: "any"
                            }
                        }
                    })
                },
                getOptionsForOptions: function() {
                    return t.merge(this.base(), {
                        fields: {
                            multiple: {
                                rightLabel: "Allow multiple selection ?",
                                helper: "Allow multiple selection if checked",
                                type: "checkbox"
                            },
                            size: {
                                type: "integer"
                            },
                            emptySelectFirst: {
                                type: "checkbox",
                                rightLabel: "Empty Select First"
                            },
                            multiselect: {
                                type: "object",
                                rightLabel: "Multiselect plugin properties - http://davidstutz.github.io/bootstrap-multiselect"
                            }
                        }
                    })
                }
            }), t.registerFieldClass("select", t.Fields.SelectField)
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.NumberField = t.Fields.TextField.extend({
                setup: function() {
                    this.base(), "undefined" == typeof this.options.numericEntry && (this.options.numericEntry = !1)
                },
                getFieldType: function() {
                    return "number"
                },
                postRender: function(e) {
                    var t = this;
                    this.base(function() {
                        t.control && t.on("keypress", function(e) {
                            var i = e.charCode || e.keyCode || 0,
                                n = !0;
                            return t.options.numericEntry && (n = n && i >= 48 && 57 >= i), n || (e.preventDefault(), e.stopImmediatePropagation()), n
                        }), e()
                    })
                },
                getControlValue: function() {
                    var e = this._getControlVal(!0);
                    return "undefined" == typeof e || "" == e ? e : parseFloat(e)
                },
                handleValidate: function() {
                    var e = this.base(),
                        i = this.validation,
                        n = this._validateNumber();
                    return i.stringNotANumber = {
                        message: n ? "" : this.getMessage("stringNotANumber"),
                        status: n
                    }, n = this._validateDivisibleBy(), i.stringDivisibleBy = {
                        message: n ? "" : t.substituteTokens(this.getMessage("stringDivisibleBy"), [this.schema.divisibleBy]),
                        status: n
                    }, n = this._validateMaximum(), i.stringValueTooLarge = {
                        message: "",
                        status: n
                    }, n || (i.stringValueTooLarge.message = this.schema.exclusiveMaximum ? t.substituteTokens(this.getMessage("stringValueTooLargeExclusive"), [this.schema.maximum]) : t.substituteTokens(this.getMessage("stringValueTooLarge"), [this.schema.maximum])), n = this._validateMinimum(), i.stringValueTooSmall = {
                        message: "",
                        status: n
                    }, n || (i.stringValueTooSmall.message = this.schema.exclusiveMinimum ? t.substituteTokens(this.getMessage("stringValueTooSmallExclusive"), [this.schema.minimum]) : t.substituteTokens(this.getMessage("stringValueTooSmall"), [this.schema.minimum])), n = this._validateMultipleOf(), i.stringValueNotMultipleOf = {
                        message: "",
                        status: n
                    }, n || (i.stringValueNotMultipleOf.message = t.substituteTokens(this.getMessage("stringValueNotMultipleOf"), [this.schema.multipleOf])), e && i.stringNotANumber.status && i.stringDivisibleBy.status && i.stringValueTooLarge.status && i.stringValueTooSmall.status && i.stringValueNotMultipleOf.status && i.invalidPattern.status && i.stringTooLong.status && i.stringTooShort.status
                },
                _validateNumber: function() {
                    var e = this._getControlVal();
                    if ("number" == typeof e && (e = "" + e), t.isValEmpty(e)) return !0;
                    var i = t.testRegex(t.regexps.number, e);
                    if (!i) return !1;
                    var n = this.getValue();
                    return isNaN(n) ? !1 : !0
                },
                _validateDivisibleBy: function() {
                    var e = this.getValue();
                    return t.isEmpty(this.schema.divisibleBy) || e % this.schema.divisibleBy === 0 ? !0 : !1
                },
                _validateMaximum: function() {
                    var e = this.getValue();
                    if (!t.isEmpty(this.schema.maximum)) {
                        if (e > this.schema.maximum) return !1;
                        if (!t.isEmpty(this.schema.exclusiveMaximum) && e == this.schema.maximum && this.schema.exclusiveMaximum) return !1
                    }
                    return !0
                },
                _validateMinimum: function() {
                    var e = this.getValue();
                    if (!t.isEmpty(this.schema.minimum)) {
                        if (e < this.schema.minimum) return !1;
                        if (!t.isEmpty(this.schema.exclusiveMinimum) && e == this.schema.minimum && this.schema.exclusiveMinimum) return !1
                    }
                    return !0
                },
                _validateMultipleOf: function() {
                    var e = this.getValue();
                    return !t.isEmpty(this.schema.multipleOf) && e && 0 !== this.schema.multipleOf ? !1 : !0
                },
                getType: function() {
                    return "number"
                },
                onKeyPress: function(e) {
                    var i = this;
                    if (9 !== e.keyCode && 37 !== e.keyCode && 38 !== e.keyCode && 39 !== e.keyCode && 40 !== e.keyCode) {
                        if (8 === e.keyCode) {
                            if (!t.isEmpty(i.schema.minLength) && (i.options.constrainLengths || i.options.constrainMinLength)) {
                                var n = i.getValue() || "";
                                t.isNumber(n) && (n = n.toString()), n.length <= i.schema.minLength && (e.preventDefault(), e.stopImmediatePropagation())
                            }
                        } else if (!t.isEmpty(i.schema.maxLength) && (i.options.constrainLengths || i.options.constrainMaxLength)) {
                            var n = i.getValue() || "";
                            t.isNumber(n) && (n = n.toString()), n.length >= i.schema.maxLength && (e.preventDefault(), e.stopImmediatePropagation())
                        }
                        32 === e.keyCode && i.options.disallowEmptySpaces && (e.preventDefault(), e.stopImmediatePropagation())
                    }
                },
                onKeyUp: function(t) {
                    var i = this;
                    i.updateMaxLengthIndicator(), e(this.field).trigger("fieldkeyup")
                },
                getSchemaOfSchema: function() {
                    return t.merge(this.base(), {
                        properties: {
                            multipleOf: {
                                title: "Multiple Of",
                                description: "Property value must be a multiple of the multipleOf schema property such that division by this value yields an interger (mod zero).",
                                type: "number"
                            },
                            minimum: {
                                title: "Minimum",
                                description: "Minimum value of the property.",
                                type: "number"
                            },
                            maximum: {
                                title: "Maximum",
                                description: "Maximum value of the property.",
                                type: "number"
                            },
                            exclusiveMinimum: {
                                title: "Exclusive Minimum",
                                description: "Property value can not equal the number defined by the minimum schema property.",
                                type: "boolean",
                                "default": !1
                            },
                            exclusiveMaximum: {
                                title: "Exclusive Maximum",
                                description: "Property value can not equal the number defined by the maximum schema property.",
                                type: "boolean",
                                "default": !1
                            }
                        }
                    })
                },
                getOptionsForSchema: function() {
                    return t.merge(this.base(), {
                        fields: {
                            multipleOf: {
                                title: "Multiple Of",
                                description: "The value must be a integral multiple of the property",
                                type: "number"
                            },
                            minimum: {
                                title: "Minimum",
                                description: "Minimum value of the property",
                                type: "number"
                            },
                            maximum: {
                                title: "Maximum",
                                description: "Maximum value of the property",
                                type: "number"
                            },
                            exclusiveMinimum: {
                                rightLabel: "Exclusive minimum ?",
                                helper: "Field value must be greater than but not equal to this number if checked",
                                type: "checkbox"
                            },
                            exclusiveMaximum: {
                                rightLabel: "Exclusive Maximum ?",
                                helper: "Field value must be less than but not equal to this number if checked",
                                type: "checkbox"
                            }
                        }
                    })
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {
                            numericEntry: {
                                title: "Numeric Entry",
                                description: "Whether to constrain data entry key presses to numeric values (0-9)",
                                type: "boolean",
                                "default": !1
                            }
                        }
                    })
                },
                getTitle: function() {
                    return "Number Field"
                },
                getDescription: function() {
                    return "Field for float numbers."
                }
            }), t.registerMessages({
                stringValueTooSmall: "The minimum value for this field is {0}",
                stringValueTooLarge: "The maximum value for this field is {0}",
                stringValueTooSmallExclusive: "Value of this field must be greater than {0}",
                stringValueTooLargeExclusive: "Value of this field must be less than {0}",
                stringDivisibleBy: "The value must be divisible by {0}",
                stringNotANumber: "This value is not a number.",
                stringValueNotMultipleOf: "This value is not a multiple of {0}"
            }), t.registerFieldClass("number", t.Fields.NumberField), t.registerDefaultSchemaFieldMapping("number", "number")
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.ArrayField = t.ContainerField.extend({
                getFieldType: function() {
                    return "array"
                },
                setup: function() {
                    var i = this;
                    this.base();
                    var n = i.resolveContainerItemTemplateType();
                    if (!n) return t.throwErrorWithCallback("Unable to find template descriptor for container item: " + i.getFieldType());
                    this.containerItemTemplateDescriptor = i.view.getTemplateDescriptor("container-" + n + "-item", i), this.options.toolbarStyle || (this.options.toolbarStyle = t.isEmpty(this.view.toolbarStyle) ? "button" : this.view.toolbarStyle), this.options.toolbarStyle || (this.options.toolbarStyle = "button"), this.options.actionbarStyle || (this.options.actionbarStyle = t.isEmpty(this.view.actionbarStyle) ? "top" : this.view.actionbarStyle), this.options.actionbarStyle || (this.options.actionbarStyle = "top"), this.schema.items || (this.schema.items = {}), this.options.items || (this.options.items = {}), this.schema.items.maxItems && (this.schema.maxItems = this.schema.items.maxItems, delete this.schema.items.maxItems), this.schema.items.minItems && (this.schema.minItems = this.schema.items.minItems, delete this.schema.items.minItems), this.schema.items.uniqueItems && (this.schema.uniqueItems = this.schema.items.uniqueItems, delete this.schema.items.uniqueItems), this.options.rubyrails = !1, this.parent && this.parent.options && this.parent.options.form && this.parent.options.form.attributes && (t.isEmpty(this.parent.options.form.attributes.rubyrails) || (this.options.rubyrails = !0));
                    var a = void 0;
                    if (t.isEmpty(this.view.toolbarSticky) || (a = this.view.toolbarSticky), t.isEmpty(this.options.toolbarSticky) || (a = this.options.toolbarSticky), this.options.toolbarSticky = a, "undefined" == typeof i.options.hideToolbarWithChildren && (i.options.hideToolbarWithChildren = !0), this.schema.items && this.schema.uniqueItems && t.mergeObject(this.options, {
                            forceRevalidation: !0
                        }), "undefined" == typeof this.data && (this.data = []), null == this.data && (this.data = []), "" == this.data && (this.data = []), t.isString(this.data)) try {
                        var r = t.parseJSON(this.data);
                        if (!t.isArray(r) && !t.isObject(r)) return void t.logWarn("ArrayField parsed string data but it was not an array: " + this.data);
                        this.data = r
                    } catch (s) {
                        this.data = [this.data]
                    }
                    if (!t.isArray(this.data) && !t.isObject(this.data)) return void t.logWarn("ArrayField data is not an array: " + JSON.stringify(this.data, null, "  "));
                    var o = function(e, t, n) {
                            var a = i.findAction(e, t);
                            a || (a = {
                                core: !0
                            }, e.push(a));
                            for (var r in n) a[r] || (a[r] = n[r])
                        },
                        l = function(e, t) {
                            var i = 0;
                            do "undefined" == typeof e[i].enabled && (e[i].enabled = !0), t || delete e[i].label, e[i].enabled ? i++ : e.splice(i, 1); while (i < e.length);
                            e.sort(function(e, t) {
                                return e.core && !t.core ? -1 : !e.core && t.core ? 1 : 0
                            })
                        };
                    if (i.toolbar = {}, i.options.toolbar)
                        for (var u in i.options.toolbar) i.toolbar[u] = i.options.toolbar[u];
                    if ("undefined" == typeof i.toolbar.showLabels && (i.toolbar.showLabels = !0), i.toolbar.actions || (i.toolbar.actions = []), o(i.toolbar.actions, "add", {
                            label: i.getMessage("addItemButtonLabel"),
                            action: "add",
                            iconClass: i.view.getStyle("addIcon"),
                            click: function(e, t) {
                                i.handleToolBarAddItemClick(function(e) {})
                            }
                        }), l(i.toolbar.actions, i.toolbar.showLabels), i.actionbar = {}, i.options.actionbar)
                        for (var c in i.options.actionbar) i.actionbar[c] = i.options.actionbar[c];
                    "undefined" == typeof i.actionbar.showLabels && (i.actionbar.showLabels = !1), i.actionbar.actions || (i.actionbar.actions = []), o(i.actionbar.actions, "add", {
                        label: i.getMessage("addButtonLabel"),
                        action: "add",
                        iconClass: i.view.getStyle("addIcon"),
                        click: function(e, t, n) {
                            i.handleActionBarAddItemClick(n, function(e) {})
                        }
                    }), o(i.actionbar.actions, "remove", {
                        label: i.getMessage("removeButtonLabel"),
                        action: "remove",
                        iconClass: i.view.getStyle("removeIcon"),
                        click: function(e, t, n) {
                            i.handleActionBarRemoveItemClick(n, function(e) {})
                        }
                    }), o(i.actionbar.actions, "up", {
                        label: i.getMessage("upButtonLabel"),
                        action: "up",
                        iconClass: i.view.getStyle("upIcon"),
                        click: function(e, t, n) {
                            i.handleActionBarMoveItemUpClick(n, function() {})
                        }
                    }), o(i.actionbar.actions, "down", {
                        label: i.getMessage("downButtonLabel"),
                        action: "down",
                        iconClass: i.view.getStyle("downIcon"),
                        click: function(e, t, n) {
                            i.handleActionBarMoveItemDownClick(n, function() {})
                        }
                    }), l(i.actionbar.actions, i.actionbar.showLabels);
                    var p = this.data.length,
                        d = e.extend(!0, {}, this.data);
                    d.length = p, this.data = Array.prototype.slice.call(d)
                },
                setValue: function(e) {
                    var i = this;
                    if (e && t.isArray(e)) {
                        var n = 0;
                        do
                            if (n < i.children.length) {
                                var a = i.children[n];
                                e.length > n ? (a.setValue(e[n]), n++) : i.removeItem(n)
                            }
                        while (n < i.children.length);
                        n < e.length && i.resolveItemSchemaOptions(function(a, r, s) {
                            if (a || t.logDebug("Unable to resolve schema for item: " + n), s) return t.throwErrorWithCallback("Circular reference detected for schema: " + JSON.stringify(a), i.errorCallback);
                            for (var o = []; n < e.length;) {
                                var l = function(e, n) {
                                    return function(s) {
                                        i.addItem(e, a, r, n[e], function() {
                                            t.nextTick(function() {
                                                s()
                                            })
                                        })
                                    }
                                }(n, e[n]);
                                o.push(l), n++
                            }
                            t.series(o, function() {})
                        })
                    }
                },
                getContainerValue: function() {
                    if (0 === this.children.length && !this.isRequired()) return [];
                    for (var e = [], t = 0; t < this.children.length; t++) {
                        var i = this.children[t].getValue();
                        i !== i && (i = void 0), "undefined" != typeof i && e.push(i)
                    }
                    return e
                },
                createItems: function(e) {
                    var i = this,
                        n = [];
                    i.data && i.data.length > 0 ? i.resolveItemSchemaOptions(function(a, r, s) {
                        if (s) return t.throwErrorWithCallback("Circular reference detected for schema: " + JSON.stringify(a), i.errorCallback);
                        for (var o = [], l = 0; l < i.data.length; l++) {
                            var u = i.data[l],
                                c = function(e, s) {
                                    return function(o) {
                                        i.createItem(e, a, r, s, function(e) {
                                            n.push(e), t.nextTick(function() {
                                                o()
                                            })
                                        })
                                    }
                                }(l, u);
                            o.push(c)
                        }
                        t.series(o, function(t) {
                            e(n)
                        })
                    }) : e(n)
                },
                createItem: function(i, n, a, r, s) {
                    var o = this;
                    if (o._validateEqualMaxItems()) {
                        var l = e("<div></div>");
                        l.alpaca({
                            data: r,
                            options: a,
                            schema: n,
                            view: this.view.id ? this.view.id : this.view,
                            connector: this.connector,
                            error: function(e) {
                                o.destroy(), o.errorCallback.call(o, e)
                            },
                            notTopLevel: !0,
                            render: function(e, t) {
                                e.parent = o, e.path = o.path + "[" + i + "]", e.render(null, function() {
                                    o.refreshValidationState(), o.updatePathAndName(), o.triggerUpdate(), t && t()
                                })
                            },
                            postRender: function(i) {
                                var n = t.tmpl(o.containerItemTemplateDescriptor, {
                                        id: o.getId(),
                                        name: i.name,
                                        parentFieldId: o.getId(),
                                        actionbarStyle: o.options.actionbarStyle,
                                        view: o.view,
                                        data: r
                                    }),
                                    a = e(n).find("." + t.MARKER_CLASS_CONTAINER_FIELD_ITEM_FIELD);
                                return 0 === a.length && e(n).hasClass(t.MARKER_CLASS_CONTAINER_FIELD_ITEM_FIELD) && (a = e(n)), 0 === a.length ? void o.errorCallback.call(o, {
                                    message: "Cannot find insertion point for field: " + o.getId()
                                }) : (e(a).before(i.getFieldEl()), e(a).remove(), i.containerItemEl = n, t.fieldApplyFieldAndChildren(i, function(e) {
                                        e.hideInitValidationError = !1
                                    }), t.isFunction(o.options.items.postRender) && o.options.items.postRender.call(i, a),
                                    void(s && s(i)))
                            }
                        })
                    }
                },
                resolveItemSchemaOptions: function(e) {
                    var i, n = this,
                        a = function(t, i, a) {
                            n.options.readonly && (i.readonly = !0), e(t, i, a)
                        };
                    !i && n.options && n.options.fields && n.options.fields.item && (i = n.options.fields.item), !i && n.options && n.options.items && (i = n.options.items);
                    var r;
                    if (n.schema && n.schema.items && (r = n.schema.items), r && r.$ref) {
                        for (var s = r.$ref, o = this, l = [o]; o.parent;) o = o.parent, l.push(o);
                        var u = r,
                            c = i;
                        t.loadRefSchemaOptions(o, s, function(e, i) {
                            for (var n = 0, r = 0; r < l.length; r++) l[r].schema && (l[r].schema.id === s || l[r].schema.id === "#" + s ? n++ : l[r].schema.$ref === s && n++);
                            var o = n > 10,
                                p = {};
                            u && t.mergeObject(p, u), e && t.mergeObject(p, e), delete p.id;
                            var d = {};
                            c && t.mergeObject(d, c), i && t.mergeObject(d, i), t.nextTick(function() {
                                a(p, d, o)
                            })
                        })
                    } else t.nextTick(function() {
                        a(r, i)
                    })
                },
                handleValidate: function() {
                    var e = this.base(),
                        i = this.validation,
                        n = this._validateUniqueItems();
                    return i.valueNotUnique = {
                        message: n ? "" : this.getMessage("valueNotUnique"),
                        status: n
                    }, n = this._validateMaxItems(), i.tooManyItems = {
                        message: n ? "" : t.substituteTokens(this.getMessage("tooManyItems"), [this.schema.maxItems]),
                        status: n
                    }, n = this._validateMinItems(), i.notEnoughItems = {
                        message: n ? "" : t.substituteTokens(this.getMessage("notEnoughItems"), [this.schema.minItems]),
                        status: n
                    }, e && i.valueNotUnique.status && i.tooManyItems.status && i.notEnoughItems.status
                },
                _validateEqualMaxItems: function() {
                    return this.schema.maxItems && this.schema.maxItems >= 0 && this.getSize() >= this.schema.maxItems ? !1 : !0
                },
                _validateEqualMinItems: function() {
                    return this.schema.minItems && this.schema.minItems >= 0 && this.getSize() <= this.schema.minItems ? !1 : !0
                },
                _validateMinItems: function() {
                    return this.schema.minItems && this.schema.minItems >= 0 && this.getSize() < this.schema.minItems ? !1 : !0
                },
                _validateMaxItems: function() {
                    return this.schema.maxItems && this.schema.maxItems >= 0 && this.getSize() > this.schema.maxItems ? !1 : !0
                },
                _validateUniqueItems: function() {
                    if (this.schema.items && this.schema.uniqueItems)
                        for (var e = {}, t = 0, i = this.children.length; i > t; ++t) {
                            if (e.hasOwnProperty(this.children[t])) return !1;
                            e[this.children[t]] = !0
                        }
                    return !0
                },
                findAction: function(t, i) {
                    var n = null;
                    return e.each(t, function(e, t) {
                        t.action == i && (n = t)
                    }), n
                },
                postRender: function(e) {
                    var t = this;
                    this.base(function() {
                        t.updateToolbars(), e()
                    })
                },
                getSize: function() {
                    return this.children.length
                },
                updatePathAndName: function() {
                    var i = function(n) {
                        n.children && e.each(n.children, function(a, r) {
                            n.prePath && t.startsWith(r.path, n.prePath) && (r.prePath = r.path, r.path = r.path.replace(n.prePath, n.path)), n.preName && t.startsWith(r.name, n.preName) && (r.preName = r.name, r.name = r.name.replace(n.preName, n.name), r.field && e(r.field).attr("name", r.name)), i(r)
                        })
                    };
                    this.children && this.children.length > 0 && e.each(this.children, function(t, n) {
                        var a = n.path.lastIndexOf("/"),
                            r = n.path.substring(a + 1);
                        r.indexOf("[") < 0 && r.indexOf("]") < 0 && (r = r.substring(r.indexOf("[") + 1, r.indexOf("]"))), r !== t && (n.prePath = n.path, n.path = n.path.substring(0, a) + "/[" + t + "]"), n.nameCalculated && (n.preName = n.name, n.parent && n.parent.name && n.path ? n.name = n.parent.name + "_" + t : n.path && (n.name = n.path.replace(/\//g, "").replace(/\[/g, "_").replace(/\]/g, "")), this.parent.options.rubyrails ? e(n.field).attr("name", n.parent.name) : e(n.field).attr("name", n.name)), n.prePath || (n.prePath = n.path), i(n)
                    })
                },
                updateToolbars: function() {
                    var t = this;
                    if ("display" !== this.view.type && !this.schema.readonly) {
                        t.toolbar && (t.fireCallback("arrayToolbar", !0), t.fireCallback("arrayToolbar")), t.actionbar && (t.fireCallback("arrayActionbars", !0), t.fireCallback("arrayActionbars"));
                        var i = e(this.getFieldEl()).find(".alpaca-array-toolbar[data-alpaca-array-toolbar-field-id='" + t.getId() + "']");
                        if (this.children.length > 0 && t.options.hideToolbarWithChildren ? e(i).hide() : (e(i).show(), e(i).find("[data-alpaca-array-toolbar-action]").each(function() {
                                var i = e(this).attr("data-alpaca-array-toolbar-action"),
                                    n = t.findAction(t.toolbar.actions, i);
                                n && e(this).off().click(function(e) {
                                    e.preventDefault(), n.click.call(t, i, n)
                                })
                            })), "undefined" == typeof this.options.toolbarSticky || null === this.options.toolbarSticky) {
                            var n = this.getFieldEl().find(".alpaca-container-item[data-alpaca-container-item-parent-field-id='" + t.getId() + "']");
                            e(n).each(function(i) {
                                var n = e(t.getFieldEl()).find(".alpaca-array-actionbar[data-alpaca-array-actionbar-parent-field-id='" + t.getId() + "'][data-alpaca-array-actionbar-item-index='" + i + "']");
                                n && n.length > 0 && (e(this).hover(function() {
                                    e(n).show()
                                }, function() {
                                    e(n).hide()
                                }), e(n).hide())
                            })
                        } else this.options.toolbarSticky ? e(t.getFieldEl()).find(".alpaca-array-actionbar[data-alpaca-array-actionbar-parent-field-id='" + t.getId() + "']").show() : this.options.toolbarSticky || e(t.getFieldEl()).find(".alpaca-array-actionbar[data-alpaca-array-actionbar-parent-field-id='" + t.getId() + "']").hide();
                        var a = e(t.getFieldEl()).find(".alpaca-array-actionbar[data-alpaca-array-actionbar-parent-field-id='" + t.getId() + "']");
                        e(a).each(function() {
                            var i = e(this).attr("data-alpaca-array-actionbar-item-index");
                            "string" == typeof i && (i = parseInt(i, 10)), e(this).find("[data-alpaca-array-actionbar-action]").each(function() {
                                var n = e(this).attr("data-alpaca-array-actionbar-action"),
                                    a = t.findAction(t.actionbar.actions, n);
                                a && e(this).off().click(function(e) {
                                    e.preventDefault(), a.click.call(t, n, a, i)
                                })
                            }), t._validateEqualMaxItems() ? (e(this).find("[data-alpaca-array-toolbar-action='add']").each(function(i) {
                                e(this).removeClass("alpaca-button-disabled"), t.fireCallback("enableButton", this)
                            }), e(this).find("[data-alpaca-array-actionbar-action='add']").each(function(i) {
                                e(this).removeClass("alpaca-button-disabled"), t.fireCallback("enableButton", this)
                            })) : (e(this).find("[data-alpaca-array-toolbar-action='add']").each(function(i) {
                                e(this).addClass("alpaca-button-disabled"), t.fireCallback("disableButton", this)
                            }), e(this).find("[data-alpaca-array-actionbar-action='add']").each(function(i) {
                                e(this).addClass("alpaca-button-disabled"), t.fireCallback("disableButton", this)
                            })), e(this).find("[data-alpaca-array-actionbar-action='remove']").each(t._validateEqualMinItems() ? function(i) {
                                e(this).removeClass("alpaca-button-disabled"), t.fireCallback("enableButton", this)
                            } : function(i) {
                                e(this).addClass("alpaca-button-disabled"), t.fireCallback("disableButton", this)
                            })
                        }), e(a).first().find("[data-alpaca-array-actionbar-action='up']").each(function() {
                            e(this).addClass("alpaca-button-disabled"), t.fireCallback("disableButton", this)
                        }), e(a).last().find("[data-alpaca-array-actionbar-action='down']").each(function() {
                            e(this).addClass("alpaca-button-disabled"), t.fireCallback("disableButton", this)
                        })
                    }
                },
                doResolveItemContainer: function() {
                    var t = this;
                    return e(t.container)
                },
                handleToolBarAddItemClick: function(e) {
                    var i = this;
                    i.resolveItemSchemaOptions(function(n, a, r) {
                        if (r) return t.throwErrorWithCallback("Circular reference detected for schema: " + JSON.stringify(n), i.errorCallback);
                        var s = i.children.length,
                            o = t.createEmptyDataInstance(n);
                        i.addItem(s, n, a, o, function(t) {
                            e && e(t)
                        })
                    })
                },
                handleActionBarAddItemClick: function(e, i) {
                    var n = this;
                    n.resolveItemSchemaOptions(function(a, r, s) {
                        if (s) return t.throwErrorWithCallback("Circular reference detected for schema: " + JSON.stringify(a), n.errorCallback);
                        var o = t.createEmptyDataInstance(a);
                        n.addItem(e + 1, a, r, o, function(e) {
                            i && i(e)
                        })
                    })
                },
                handleActionBarRemoveItemClick: function(e, t) {
                    var i = this;
                    i.removeItem(e, function() {
                        t && t()
                    })
                },
                handleActionBarMoveItemUpClick: function(e, t) {
                    var i = this;
                    i.moveItem(e, e - 1, i.options.animate, function() {
                        t && t()
                    })
                },
                handleActionBarMoveItemDownClick: function(e, t) {
                    var i = this;
                    i.moveItem(e, e + 1, i.options.animate, function() {
                        t && t()
                    })
                },
                doAddItem: function(t, i) {
                    var n = this,
                        a = n.doResolveItemContainer();
                    if (0 === t) e(a).append(i.containerItemEl);
                    else {
                        var r = a.children("[data-alpaca-container-item-index='" + (t - 1) + "']");
                        r && r.length > 0 && r.after(i.containerItemEl)
                    }
                    n.doAfterAddItem(i)
                },
                doAfterAddItem: function(e) {},
                addItem: function(e, t, i, n, a) {
                    var r = this;
                    r._validateEqualMaxItems() && r.createItem(e, t, i, n, function(t) {
                        r.registerChild(t, e), r.doAddItem(e, t), r.handleRepositionDOMRefresh(), r.updateToolbars(), r.refreshValidationState(), r.trigger("add", t), r.triggerUpdate(), a && a(t)
                    })
                },
                doRemoveItem: function(e) {
                    var t = this,
                        i = t.doResolveItemContainer();
                    i.children(".alpaca-container-item[data-alpaca-container-item-index='" + e + "']").remove()
                },
                removeItem: function(e, t) {
                    var i = this;
                    this._validateEqualMinItems() && (i.unregisterChild(e), i.doRemoveItem(e), i.handleRepositionDOMRefresh(), i.updateToolbars(), i.refreshValidationState(), i.trigger("remove", e), i.triggerUpdate(), t && t())
                },
                moveItem: function(i, n, a, r) {
                    var s = this;
                    if ("function" == typeof a && (r = a, a = s.options.animate), "undefined" == typeof a && (a = s.options.animate ? s.options.animate : !0), "string" == typeof i && (i = parseInt(i, 10)), "string" == typeof n && (n = parseInt(n, 10)), 0 > n && (n = 0), n >= s.children.length && (n = s.children.length - 1), -1 !== n && i !== n) {
                        var o = s.children[n];
                        if (o) {
                            var l = s.getId(),
                                u = s.getContainerEl().find(".alpaca-container-item[data-alpaca-container-item-index='" + i + "'][data-alpaca-container-item-parent-field-id='" + l + "']"),
                                c = s.getContainerEl().find(".alpaca-container-item[data-alpaca-container-item-index='" + n + "'][data-alpaca-container-item-parent-field-id='" + l + "']"),
                                p = e("<div class='tempMarker1'></div>");
                            u.before(p);
                            var d = e("<div class='tempMarker2'></div>");
                            c.before(d);
                            var h = function() {
                                    for (var t = [], a = 0; a < s.children.length; a++) t[a] = a === i ? s.children[n] : a === n ? s.children[i] : s.children[a];
                                    s.children = t, p.replaceWith(c), d.replaceWith(u), s.handleRepositionDOMRefresh(), e(u).find(".alpaca-container-item[data-alpaca-array-actionbar-item-index='" + i + "'][data-alpaca-container-item-parent-field-id='" + s.getId() + "']").attr("data-alpaca-array-actionbar-item-index", n), e(c).find(".alpaca-container-item[data-alpaca-array-actionbar-item-index='" + n + "'][data-alpaca-container-item-parent-field-id='" + s.getId() + "']").attr("data-alpaca-array-actionbar-item-index", i), s.updateToolbars(), s.refreshValidationState(), s.triggerUpdate(), s.trigger("move"), r && r()
                                },
                                f = 0;
                            a && (f = 500), t.animatedSwap(u, c, f, function() {
                                h()
                            })
                        }
                    }
                },
                getType: function() {
                    return "array"
                },
                getTitle: function() {
                    return "Array Field"
                },
                getDescription: function() {
                    return "Field for list of items with same data type or structure."
                },
                getSchemaOfSchema: function() {
                    var e = {
                        properties: {
                            items: {
                                title: "Array Items",
                                description: "Schema for array items.",
                                type: "object"
                            },
                            minItems: {
                                title: "Minimum Items",
                                description: "Minimum number of items.",
                                type: "number"
                            },
                            maxItems: {
                                title: "Maximum Items",
                                description: "Maximum number of items.",
                                type: "number"
                            },
                            uniqueItems: {
                                title: "Items Unique",
                                description: "Item values should be unique if true.",
                                type: "boolean",
                                "default": !1
                            }
                        }
                    };
                    return this.children && this.children[0] && t.merge(e.properties.items.properties, this.children[0].getSchemaOfSchema()), t.merge(this.base(), e)
                },
                getOptionsForSchema: function() {
                    return t.merge(this.base(), {
                        fields: {
                            items: {
                                type: "object"
                            },
                            minItems: {
                                type: "integer"
                            },
                            maxItems: {
                                type: "integer"
                            },
                            uniqueItems: {
                                type: "checkbox"
                            }
                        }
                    })
                },
                getSchemaOfOptions: function() {
                    var e = {
                        properties: {
                            toolbarSticky: {
                                title: "Sticky Toolbar",
                                description: "If true, the array item toolbar will always be enabled.  If false, the toolbar is always disabled.  If undefined or null, the toolbar will appear when hovered over.",
                                type: "boolean",
                                "default": void 0
                            },
                            toolbarStyle: {
                                title: "Toolbar Style",
                                description: "The kind of top-level toolbar to render for the array field.  Either 'button' or 'link'.",
                                type: "string",
                                "default": "button"
                            },
                            actionbarStyle: {
                                title: "Actionbar Style",
                                description: "The kind of actionbar to render for each item in the array.  Either 'top', 'bottom', 'left', or 'right'.",
                                type: "string",
                                "default": "top"
                            },
                            toolbar: {
                                type: "object",
                                title: "Toolbar Configuration",
                                properties: {
                                    showLabels: {
                                        type: "boolean",
                                        "default": !0,
                                        title: "Whether to show labels next to actions"
                                    },
                                    actions: {
                                        type: "array",
                                        title: "Toolbar Actions Configuration",
                                        items: {
                                            action: {
                                                type: "string",
                                                title: "Action Key"
                                            },
                                            label: {
                                                type: "string",
                                                title: "Action Label"
                                            },
                                            iconClass: {
                                                type: "string",
                                                title: "Action CSS Classes for Icon"
                                            },
                                            click: {
                                                type: "function",
                                                title: "Action Click Handler"
                                            },
                                            enabled: {
                                                type: "boolean",
                                                title: "Whether to enable the action",
                                                "default": !0
                                            }
                                        }
                                    }
                                }
                            },
                            actionbar: {
                                type: "object",
                                properties: {
                                    showLabels: {
                                        type: "boolean",
                                        "default": !1,
                                        title: "Whether to show labels next to actions"
                                    },
                                    actions: {
                                        type: "array",
                                        title: "Actions Bar Actions Configuration",
                                        items: {
                                            action: {
                                                type: "string",
                                                title: "Action Key"
                                            },
                                            label: {
                                                type: "string",
                                                title: "Action Label"
                                            },
                                            iconClass: {
                                                type: "string",
                                                title: "Action CSS Classes for Icon"
                                            },
                                            click: {
                                                type: "function",
                                                title: "Action Click Handler"
                                            },
                                            enabled: {
                                                type: "boolean",
                                                title: "Whether to enable the action",
                                                "default": !0
                                            }
                                        }
                                    }
                                }
                            },
                            hideToolbarWithChildren: {
                                type: "boolean",
                                title: "Hide Toolbar with Children",
                                description: "Indicates whether to hide the top toolbar when child elements are available.",
                                "default": !0
                            }
                        }
                    };
                    return this.children && this.children[0] && t.merge(e.properties.items.properties, this.children[0].getSchemaOfSchema()), t.merge(this.base(), e)
                },
                getOptionsForOptions: function() {
                    return t.merge(this.base(), {
                        fields: {
                            toolbarSticky: {
                                type: "checkbox"
                            },
                            items: {
                                type: "object",
                                fields: {}
                            }
                        }
                    })
                }
            }), t.registerMessages({
                notEnoughItems: "The minimum number of items is {0}",
                tooManyItems: "The maximum number of items is {0}",
                valueNotUnique: "Values are not unique",
                notAnArray: "This value is not an Array"
            }), t.registerFieldClass("array", t.Fields.ArrayField), t.registerDefaultSchemaFieldMapping("array", "array"), t.registerMessages({
                addItemButtonLabel: "Add New Item",
                addButtonLabel: "Add",
                removeButtonLabel: "Remove",
                upButtonLabel: "Up",
                downButtonLabel: "Down"
            })
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.ObjectField = t.ContainerField.extend({
                getFieldType: function() {
                    return "object"
                },
                setup: function() {
                    var e = this;
                    this.base();
                    var i = e.resolveContainerItemTemplateType();
                    if (!i) {
                        {
                            e.resolveContainerItemTemplateType()
                        }
                        return t.throwErrorWithCallback("Unable to find template descriptor for container item: " + e.getFieldType())
                    }
                    if (this.containerItemTemplateDescriptor = e.view.getTemplateDescriptor("container-" + i + "-item", e), !t.isEmpty(this.data) && "" !== this.data && !t.isObject(this.data)) {
                        if (!t.isString(this.data)) return;
                        try {
                            if (this.data = t.parseJSON(this.data), !t.isObject(this.data)) return void t.logWarn("ObjectField parsed data but it was not an object: " + JSON.stringify(this.data))
                        } catch (n) {
                            return
                        }
                    }
                },
                setValue: function(e) {
                    if (e || (e = {}), t.isObject(e)) {
                        var i = {};
                        for (var n in this.childrenById) {
                            var a = this.childrenById[n].propertyId;
                            i[a] = this.childrenById[n]
                        }
                        var r = {};
                        for (var s in e) e.hasOwnProperty(s) && (r[s] = e[s]);
                        for (var a in r) {
                            var o = i[a];
                            o && (o.setValue(r[a]), delete i[a], delete r[a])
                        }
                        for (var a in i) {
                            var o = i[a];
                            o.setValue(null)
                        }
                    }
                },
                getContainerValue: function() {
                    if (0 === this.children.length && !this.isRequired()) return {};
                    for (var e = {}, i = 0; i < this.children.length; i++) {
                        var n = this.children[i].propertyId,
                            a = this.children[i].getValue();
                        if (a !== a && (a = void 0), "undefined" != typeof a && this.determineAllDependenciesValid(n)) {
                            var r = null;
                            "boolean" == typeof a ? r = a ? !0 : !1 : t.isArray(a) || t.isObject(a) || t.isNumber(a) ? r = a : (a || 0 === a) && (r = a), null !== r && (e[n] = r)
                        }
                    }
                    return e
                },
                afterRenderContainer: function(e, i) {
                    var n = this;
                    this.base(e, function() {
                        if (n.isTopLevel() && n.view) {
                            n.wizardConfigs = n.view.getWizard(), "undefined" != typeof n.wizardConfigs && (n.wizardConfigs && n.wizardConfigs !== !0 || (n.wizardConfigs = {}));
                            var e = n.view.getLayout().templateDescriptor;
                            n.wizardConfigs && t.isObject(n.wizardConfigs) && (!e || n.wizardConfigs.bindings ? n.autoWizard() : n.wizard())
                        }
                        i()
                    })
                },
                createItems: function(e) {
                    var i = this,
                        n = [],
                        a = {};
                    for (var r in i.data) a[r] = r;
                    var s = i.data;
                    i.schema && i.schema.properties && (s = i.schema.properties);
                    var o = function() {
                            var i = [];
                            for (var r in a) i.push(r);
                            i.length > 0 && t.logDebug("There were " + i.length + " extra data keys that were not part of the schema " + JSON.stringify(i)), e(n)
                        },
                        l = [];
                    for (var u in s) {
                        var c = null;
                        i.data && i.data.hasOwnProperty(u) && (c = i.data[u]);
                        var p = function(e, a, r) {
                            return function(s) {
                                i.resolvePropertySchemaOptions(e, function(o, l, u) {
                                    return u ? t.throwErrorWithCallback("Circular reference detected for schema: " + JSON.stringify(o), i.errorCallback) : (o || t.logDebug("Unable to resolve schema for property: " + e), void i.createItem(e, o, l, a, null, function(i) {
                                        n.push(i), delete r[e], t.nextTick(function() {
                                            s()
                                        })
                                    }))
                                })
                            }
                        }(u, c, a);
                        l.push(p)
                    }
                    t.series(l, function(e) {
                        for (var t = !1, i = 0; i < n.length; i++)
                            if ("undefined" != typeof n[i].options.order) {
                                t = !0;
                                break
                            }
                        t && n.sort(function(e, t) {
                            var i = e.options.order;
                            i || (i = 0);
                            var n = t.options.order;
                            return n || (n = 0), i - n
                        }), o()
                    })
                },
                createItem: function(i, n, a, r, s, o) {
                    var l = this,
                        u = e("<div></div>");
                    u.alpaca({
                        data: r,
                        options: a,
                        schema: n,
                        view: this.view.id ? this.view.id : this.view,
                        connector: this.connector,
                        error: function(e) {
                            l.destroy(), l.errorCallback.call(l, e)
                        },
                        notTopLevel: !0,
                        render: function(e, t) {
                            e.parent = l, e.propertyId = i, e.path = "/" !== l.path ? l.path + "/" + i : l.path + i, e.render(null, function() {
                                t()
                            })
                        },
                        postRender: function(i) {
                            var n = t.tmpl(l.containerItemTemplateDescriptor, {
                                    id: l.getId(),
                                    name: i.name,
                                    parentFieldId: l.getId(),
                                    actionbarStyle: l.options.actionbarStyle,
                                    view: l.view,
                                    data: r
                                }),
                                a = e(n).find("." + t.MARKER_CLASS_CONTAINER_FIELD_ITEM_FIELD);
                            return 0 === a.length && e(n).hasClass(t.MARKER_CLASS_CONTAINER_FIELD_ITEM_FIELD) && (a = e(n)), 0 === a.length ? void l.errorCallback.call(l, {
                                message: "Cannot find insertion point for field: " + l.getId()
                            }) : (e(a).before(i.getFieldEl()), e(a).remove(), i.containerItemEl = n, t.fieldApplyFieldAndChildren(i, function(e) {
                                e.hideInitValidationError = !1
                            }), void(o && o(i)))
                        }
                    })
                },
                resolvePropertySchemaOptions: function(e, i) {
                    var n = this,
                        a = function(e, t, a) {
                            n.options.readonly && (t.readonly = !0), i(e, t, a)
                        },
                        r = null;
                    n.schema && n.schema.properties && n.schema.properties[e] && (r = n.schema.properties[e]);
                    var s = {};
                    if (n.options && n.options.fields && n.options.fields[e] && (s = n.options.fields[e]), r && r.$ref) {
                        for (var o = r.$ref, l = this, u = [l]; l.parent;) l = l.parent, u.push(l);
                        var c = r,
                            p = s;
                        t.loadRefSchemaOptions(l, o, function(e, i) {
                            for (var n = 0, r = 0; r < u.length; r++) u[r].schema && (u[r].schema.id === o || u[r].schema.id === "#" + o ? n++ : u[r].schema.$ref === o && n++);
                            var s = n > 1,
                                l = {};
                            c && t.mergeObject(l, c), e && t.mergeObject(l, e), c && c.id && (l.id = c.id);
                            var d = {};
                            p && t.mergeObject(d, p), i && t.mergeObject(d, i), t.nextTick(function() {
                                a(l, d, s)
                            })
                        })
                    } else t.nextTick(function() {
                        a(r, s)
                    })
                },
                applyCreatedItems: function(e, t) {
                    var i = this;
                    this.base(e, function() {
                        var n = function(a) {
                            if (a === e.items.length) return void t();
                            var r = e.items[a],
                                s = r.propertyId;
                            i.showOrHidePropertyBasedOnDependencies(s), i.bindDependencyFieldUpdateEvent(s), i.refreshDependentFieldStates(s), n(a + 1)
                        };
                        n(0)
                    })
                },
                handleValidate: function() {
                    var e = this.base(),
                        i = this.validation,
                        n = this._validateMaxProperties();
                    return i.tooManyProperties = {
                        message: n ? "" : t.substituteTokens(this.getMessage("tooManyProperties"), [this.schema.maxProperties]),
                        status: n
                    }, n = this._validateMinProperties(), i.tooFewProperties = {
                        message: n ? "" : t.substituteTokens(this.getMessage("tooManyItems"), [this.schema.items.minProperties]),
                        status: n
                    }, e && i.tooManyProperties.status && i.tooFewProperties.status
                },
                _validateMaxProperties: function() {
                    if ("undefined" == typeof this.schema.maxProperties) return !0;
                    var e = this.schema.maxProperties,
                        t = 0;
                    for (var i in this.data) t++;
                    return e >= t
                },
                _validateMinProperties: function() {
                    if ("undefined" == typeof this.schema.minProperties) return !0;
                    var e = this.schema.minProperties,
                        t = 0;
                    for (var i in this.data) t++;
                    return t >= e
                },
                showOrHidePropertyBasedOnDependencies: function(e) {
                    var i = this,
                        n = this.childrenByPropertyId[e];
                    if (!n) return t.throwErrorWithCallback("Missing property: " + e, i.errorCallback);
                    var a = this.determineAllDependenciesValid(e);
                    a ? (n.show(), n.onDependentReveal()) : (n.hide(), n.onDependentConceal()), n.getFieldEl().trigger("fieldupdate")
                },
                getChildDependencies: function(e) {
                    var t = null;
                    if (this.schema.dependencies && (t = this.schema.dependencies[e]), !t) {
                        var i = this.childrenByPropertyId[e];
                        i && (t = i.schema.dependencies)
                    }
                    return t
                },
                getChildConditionalDependencies: function(e) {
                    var t = null,
                        i = this.childrenByPropertyId[e];
                    return i && (t = i.options.dependencies), t
                },
                determineAllDependenciesValid: function(i) {
                    var n = this,
                        a = this.childrenByPropertyId[i];
                    if (!a) return t.throwErrorWithCallback("Missing property: " + i, n.errorCallback);
                    var r = n.getChildDependencies(i);
                    if (!r) return !0;
                    var s = !0;
                    return t.isString(r) ? s = n.determineSingleDependencyValid(i, r) : t.isArray(r) && e.each(r, function(e, t) {
                        s = s && n.determineSingleDependencyValid(i, t)
                    }), s
                },
                bindDependencyFieldUpdateEvent: function(i) {
                    var n = this,
                        a = this.childrenByPropertyId[i];
                    if (!a) return t.throwErrorWithCallback("Missing property: " + i, n.errorCallback);
                    var r = n.getChildDependencies(i);
                    if (!r) return !0;
                    var s = function(e, i) {
                        var r = t.resolveField(n, i);
                        r && (r.getFieldEl().bind("fieldupdate", function(e, t, i, a) {
                            return function(t) {
                                n.showOrHidePropertyBasedOnDependencies(i), e.getFieldEl().trigger("fieldupdate")
                            }
                        }(a, r, e, i)), r.getFieldEl().trigger("fieldupdate"))
                    };
                    t.isString(r) ? s(i, r) : t.isArray(r) && e.each(r, function(e, t) {
                        s(i, t)
                    })
                },
                refreshDependentFieldStates: function(i) {
                    var n = this,
                        a = this.childrenByPropertyId[i];
                    if (!a) return t.throwErrorWithCallback("Missing property: " + i, n.errorCallback);
                    var r = n.getChildDependencies(i);
                    if (!r) return !0;
                    var s = function(e) {
                        var i = t.resolveField(n, e);
                        i && i.getFieldEl().trigger("fieldupdate")
                    };
                    t.isString(r) ? s(r) : t.isArray(r) && e.each(r, function(e, t) {
                        s(t)
                    })
                },
                determineSingleDependencyValid: function(e, i) {
                    var n = this,
                        a = t.resolveField(n, i);
                    if (!a) return !1;
                    var r = a.data,
                        s = !1,
                        o = this.getChildConditionalDependencies(e);
                    if (o && 0 !== o.length) {
                        "boolean" !== a.getType() || r || (r = !1);
                        var l = o[i];
                        !t.isEmpty(l) && t.isFunction(l) ? s = l.call(this, r) : (s = !0, t.isArray(l) ? t.anyEquality(r, l) || (s = !1) : t.isEmpty(l) || t.anyEquality(l, r) || (s = !1))
                    } else s = "boolean" !== a.getType() || this.childrenByPropertyId[e].options.dependencies || r ? !t.isValEmpty(a.data) : !1;
                    return a && a.isHidden() && (s = !1), s
                },
                getIndex: function(e) {
                    if (t.isEmpty(e)) return -1;
                    for (var i = 0; i < this.children.length; i++) {
                        var n = this.children[i].propertyId;
                        if (n == e) return i
                    }
                    return -1
                },
                addItem: function(e, t, i, n, a, r) {
                    var s = this;
                    this.createItem(e, t, i, n, a, function(e) {
                        var t = null;
                        if (a && s.childrenById[a])
                            for (var i = 0; i < s.children.length; i++)
                                if (s.children[i].getId() == a) {
                                    t = i;
                                    break
                                }
                        s.registerChild(e, null != t ? t + 1 : null), s.doAddItem(t, e), s.handleRepositionDOMRefresh(), s.refreshValidationState(!0, function() {
                            s.trigger("add", e), s.triggerUpdate(), r && r()
                        })
                    })
                },
                doAddItem: function(t, i) {
                    var n = this;
                    if (t) {
                        var a = n.getContainerEl().children("[data-alpaca-container-item-index='" + t + "']");
                        a && a.length > 0 && a.after(i.containerItemEl)
                    } else e(n.container).append(i.containerItemEl);
                    n.doAfterAddItem(i)
                },
                doAfterAddItem: function(e) {},
                doResolveItemContainer: function() {
                    var t = this;
                    return e(t.container)
                },
                removeItem: function(t, i) {
                    var n = this,
                        a = this.childrenByPropertyId[t];
                    a ? (this.children = e.grep(this.children, function(e, i) {
                        return e.propertyId !== t
                    }), delete this.childrenByPropertyId[t], delete this.childrenById[a.getId()], n.doRemoveItem(a), this.refreshValidationState(!0, function() {
                        n.handleRepositionDOMRefresh(), n.trigger("remove", a), n.triggerUpdate(), i && i()
                    })) : i()
                },
                doRemoveItem: function(e) {
                    var t = this,
                        i = t.doResolveItemContainer();
                    i.children(".alpaca-container-item[data-alpaca-container-item-name='" + e.name + "']").remove(), e.destroy()
                },
                wizard: function() {
                    var i = this,
                        n = this.wizardConfigs.steps;
                    n || (n = []);
                    var a = this.wizardConfigs.title,
                        r = this.wizardConfigs.description,
                        s = this.wizardConfigs.buttons;
                    s || (s = {}), s.previous || (s.previous = {}), s.previous.title || (s.previous.title = "Previous"), s.previous.align || (s.previous.align = "left"), s.previous.type || (s.previous.type = "button"), s.next || (s.next = {}), s.next.title || (s.next.title = "Next"), s.next.align || (s.next.align = "right"), s.next.type || (s.next.type = "button"), this.wizardConfigs.hideSubmitButton || (s.submit || (s.submit = {}), s.submit.title || (s.submit.title = "Submit"), s.submit.align || (s.submit.align = "right"), s.submit.type || (s.submit.type = "button"));
                    for (var o in s) s[o].type || (s[o].type = "button");
                    var l = this.wizardConfigs.showSteps;
                    "undefined" == typeof l && (l = !0);
                    var u = this.wizardConfigs.showProgressBar,
                        c = this.wizardConfigs.validation;
                    "undefined" == typeof c && (c = !0);
                    var a = e(this.field).attr("data-alpaca-wizard-title"),
                        r = e(this.field).attr("data-alpaca-wizard-description"),
                        p = e(this.field).attr("data-alpaca-wizard-validation");
                    "undefined" != typeof p && (c = p ? !0 : !1);
                    var d = e(this.field).attr("data-alpaca-wizard-show-steps");
                    "undefined" != typeof d && (l = d ? !0 : !1);
                    var h = e(this.field).attr("data-alpaca-wizard-show-progress-bar");
                    "undefined" != typeof h && (u = h ? !0 : !1);
                    var f = e(this.field).find("[data-alpaca-wizard-role='step']");
                    0 == n.length && f.each(function(t) {
                        var i = {},
                            a = e(this).attr("data-alpaca-wizard-step-title");
                        "undefined" != typeof a && (i.title = a), i.title || (i.title = "Step " + t);
                        var r = e(this).attr("data-alpaca-wizard-step-description");
                        "undefined" != typeof r && (i.description = r), i.description || (i.description = "Step " + t), n.push(i)
                    }), "undefined" == typeof u && n.length > 1 && (u = !0);
                    var m = {};
                    m.wizardTitle = a, m.wizardDescription = r, m.showSteps = l, m.performValidation = c, m.steps = n, m.buttons = s, m.schema = i.schema, m.options = i.options, m.data = i.data, m.showProgressBar = u, m.markAllStepsVisited = this.wizardConfigs.markAllStepsVisited, m.view = i.view;
                    var g = i.view.getTemplateDescriptor("wizard", i);
                    if (g) {
                        var v = t.tmpl(g, m);
                        e(i.field).append(v);
                        var b = e(v).find(".alpaca-wizard-nav"),
                            y = e(v).find(".alpaca-wizard-steps"),
                            w = e(v).find(".alpaca-wizard-buttons"),
                            x = e(v).find(".alpaca-wizard-progress-bar");
                        e(y).append(f),
                            function(n, a, r, s) {
                                var o = 0,
                                    l = e(r).find("[data-alpaca-wizard-button-key='previous']"),
                                    u = e(r).find("[data-alpaca-wizard-button-key='next']"),
                                    c = e(r).find("[data-alpaca-wizard-button-key='submit']"),
                                    p = function() {
                                        if (s.showSteps) {
                                            if (s.visits || (s.visits = {}), s.markAllStepsVisited)
                                                for (var t = e(n).find("[data-alpaca-wizard-step-index]"), i = 0; i < t.length; i++) s.visits[i] = !0;
                                            s.visits[o] = !0;
                                            var t = e(n).find("[data-alpaca-wizard-step-index]");
                                            e(t).removeClass("disabled"), e(t).removeClass("completed"), e(t).removeClass("active"), e(t).removeClass("visited");
                                            for (var i = 0; i < t.length; i++) o > i ? e(n).find("[data-alpaca-wizard-step-index='" + i + "']").addClass("completed") : i === o ? e(n).find("[data-alpaca-wizard-step-index='" + i + "']").addClass("active") : s.visits && s.visits[i] || e(n).find("[data-alpaca-wizard-step-index='" + i + "']").addClass("disabled"), s.visits && s.visits[i] && e(n).find("[data-alpaca-wizard-step-index='" + i + "']").addClass("visited")
                                        }
                                        if (s.showProgressBar) {
                                            var r = o + 1,
                                                p = s.steps.length + 1,
                                                d = parseInt(r / p * 100, 10) + "%";
                                            e(x).find(".progress-bar").attr("aria-valuemax", p), e(x).find(".progress-bar").attr("aria-valuenow", r), e(x).find(".progress-bar").css("width", d)
                                        }
                                        l.hide(), u.hide(), c.hide(), 1 == s.steps.length ? c.show() : s.steps.length > 1 && (o > 0 && l.show(), u.show(), 0 == o ? u.show() : o == s.steps.length - 1 && (u.hide(), c.show())), e(a).find("[data-alpaca-wizard-role='step']").hide(), e(e(a).find("[data-alpaca-wizard-role='step']")[o]).show()
                                    },
                                    d = function(n, r) {
                                        if (!s.performValidation) return void r(!0);
                                        var l = [],
                                            u = e(e(a).find("[data-alpaca-wizard-role='step']")[o]);
                                        e(u).find(".alpaca-field").each(function() {
                                            var t = e(this).attr("data-alpaca-field-id");
                                            if (t) {
                                                var n = i.childrenById[t];
                                                n && l.push(n)
                                            }
                                        });
                                        for (var c = [], p = 0; p < l.length; p++) c.push(function(e) {
                                            return function(t) {
                                                e.refreshValidationState(!0, function() {
                                                    t()
                                                })
                                            }
                                        }(l[p]));
                                        t.series(c, function() {
                                            for (var e = !0, t = 0; t < l.length; t++) e = e && l[t].isValid(!0);
                                            var a = s.buttons[n];
                                            a && a.validate ? a.validate.call(i, function(t) {
                                                e = e && t, r(e)
                                            }) : r(e)
                                        })
                                    };
                                e(l).click(function(e) {
                                    if (e.preventDefault(), o >= 1) {
                                        var t = s.buttons.previous;
                                        t && t.click && t.click.call(i, e), o--, p()
                                    }
                                }), e(u).click(function(e) {
                                    e.preventDefault(), o + 1 <= s.steps.length - 1 && d("next", function(t) {
                                        if (t) {
                                            var n = s.buttons.next;
                                            n && n.click && n.click.call(i, e), o++, p()
                                        } else window.setTimeout(function() {
                                            i.focus(function(e) {})
                                        }, 250)
                                    })
                                }), e(c).click(function(e) {
                                    e.preventDefault(), o === s.steps.length - 1 && d("submit", function(t) {
                                        if (t) {
                                            var n = s.buttons.submit;
                                            n && (n.click ? n.click.call(i, e) : i.form && i.form.submit())
                                        } else window.setTimeout(function() {
                                            i.focus(function(e) {})
                                        }, 250)
                                    })
                                }), e(r).find("[data-alpaca-wizard-button-key]").each(function() {
                                    var t = e(this).attr("data-alpaca-wizard-button-key");
                                    if ("submit" != t && "next" != t && "previous" != t) {
                                        var n = s.buttons[t];
                                        n && n.click && e(this).click(function(e) {
                                            return function(t) {
                                                e.click.call(i, t)
                                            }
                                        }(n))
                                    }
                                }), e(n).find("[data-alpaca-wizard-step-index]").click(function(t) {
                                    t.preventDefault();
                                    var i = e(this).attr("data-alpaca-wizard-step-index");
                                    i && (i = parseInt(i, 10), (i == o || s.visits && s.visits[i]) && (o > i ? (o = i, p()) : i > o && d(null, function(e) {
                                        e && (o = i, p())
                                    })))
                                }), i.on("moveToStep", function(e) {
                                    var t = e.index,
                                        i = e.skipValidation;
                                    "undefined" != typeof t && t <= s.steps.length - 1 && (i ? (o = t, p()) : d(null, function(e) {
                                        e && (o = t, p())
                                    }))
                                }), i.on("advanceOrSubmit", function(t) {
                                    d(null, function(t) {
                                        t && (o === s.steps.length - 1 ? e(c).click() : e(u).click())
                                    })
                                }), p()
                            }(b, y, w, m)
                    }
                },
                autoWizard: function() {
                    var t = this.wizardConfigs.bindings;
                    t || (t = {});
                    for (var i in this.childrenByPropertyId) t.hasOwnProperty(i) || (t[i] = 1);
                    var n = !0;
                    e(this.field).find("[data-alpaca-wizard-role='step']").length > 0 && (n = !1);
                    var a = 1,
                        r = [];
                    do {
                        r = [];
                        for (var i in t) t[i] === a && this.childrenByPropertyId && this.childrenByPropertyId[i] && r.push(this.childrenByPropertyId[i]);
                        if (r.length > 0) {
                            var s = null;
                            n ? (s = e('<div data-alpaca-wizard-role="step"></div>'), e(this.field).append(s)) : s = e(e(this.field).find("[data-alpaca-wizard-role='step']")[a - 1]);
                            for (var o = !1, l = 0; l < r.length; l++)
                                if ("undefined" != typeof r[l].options.order) {
                                    o = !0;
                                    break
                                }
                            o && r.sort(function(e, t) {
                                var i = e.options.order;
                                i || (i = 0);
                                var n = t.options.order;
                                return n || (n = 0), i - n
                            });
                            for (var l = 0; l < r.length; l++) e(s).append(r[l].containerItemEl);
                            a++
                        }
                    } while (r.length > 0);
                    this.wizard(), 0 === e(this.container).children().length && e(this.container).css("display", "none")
                },
                getType: function() {
                    return "object"
                },
                moveItem: function(i, n, a, r) {
                    var s = this;
                    if ("function" == typeof a && (r = a, a = s.options.animate), "undefined" == typeof a && (a = s.options.animate ? s.options.animate : !0), "string" == typeof i && (i = parseInt(i, 10)), "string" == typeof n && (n = parseInt(n, 10)), 0 > n && (n = 0), n >= s.children.length && (n = s.children.length - 1), -1 !== n) {
                        var o = s.children[n];
                        if (o) {
                            var l = s.getContainerEl().children("[data-alpaca-container-item-index='" + i + "']"),
                                u = s.getContainerEl().children("[data-alpaca-container-item-index='" + n + "']"),
                                c = e("<div class='tempMarker1'></div>");
                            l.before(c);
                            var p = e("<div class='tempMarker2'></div>");
                            u.before(p);
                            var d = function() {
                                for (var t = [], a = 0; a < s.children.length; a++) t[a] = a === i ? s.children[n] : a === n ? s.children[i] : s.children[a];
                                s.children = t, c.replaceWith(u), p.replaceWith(l), s.handleRepositionDOMRefresh(), e(l).find("[data-alpaca-array-actionbar-item-index='" + i + "']").attr("data-alpaca-array-actionbar-item-index", n), e(u).find("[data-alpaca-array-actionbar-item-index='" + n + "']").attr("data-alpaca-array-actionbar-item-index", i), s.refreshValidationState(), s.triggerUpdate(), s.trigger("move"), r && r()
                            };
                            a ? t.animatedSwap(l, u, 500, function() {
                                d()
                            }) : d()
                        }
                    }
                },
                getTitle: function() {
                    return "Object Field"
                },
                getDescription: function() {
                    return "Object field for containing other fields"
                },
                getSchemaOfSchema: function() {
                    var e = {
                            properties: {
                                properties: {
                                    title: "Properties",
                                    description: "List of child properties.",
                                    type: "object"
                                },
                                maxProperties: {
                                    type: "number",
                                    title: "Maximum Number Properties",
                                    description: "The maximum number of properties that this object is allowed to have"
                                },
                                minProperties: {
                                    type: "number",
                                    title: "Minimum Number of Properties",
                                    description: "The minimum number of properties that this object is required to have"
                                }
                            }
                        },
                        i = e.properties.properties;
                    if (i.properties = {}, this.children)
                        for (var n = 0; n < this.children.length; n++) {
                            var a = this.children[n].propertyId;
                            i.properties[a] = this.children[n].getSchemaOfSchema(), i.properties[a].title = a + " :: " + i.properties[a].title
                        }
                    return t.merge(this.base(), e)
                },
                getSchemaOfOptions: function() {
                    var e = t.merge(this.base(), {
                            properties: {},
                            order: {
                                type: "number",
                                title: "Order",
                                description: "Allows for optional specification of the index of this field in the properties array."
                            }
                        }),
                        i = {
                            properties: {
                                fields: {
                                    title: "Field Options",
                                    description: "List of options for child fields.",
                                    type: "object"
                                }
                            }
                        },
                        n = i.properties.fields;
                    if (n.properties = {}, this.children)
                        for (var a = 0; a < this.children.length; a++) {
                            var r = this.children[a].propertyId;
                            n.properties[r] = this.children[a].getSchemaOfOptions(), n.properties[r].title = r + " :: " + n.properties[r].title
                        }
                    return t.merge(e, i)
                }
            }), t.registerMessages({
                tooManyProperties: "The maximum number of properties ({0}) has been exceeded.",
                tooFewProperties: "There are not enough properties ({0} are required)"
            }), t.registerFieldClass("object", t.Fields.ObjectField), t.registerDefaultSchemaFieldMapping("object", "object")
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.AnyField = t.ControlField.extend({
                getFieldType: function() {
                    return "any"
                },
                setup: function() {
                    this.base()
                },
                getControlValue: function() {
                    return this._getControlVal(!0)
                },
                setValue: function(e) {
                    this.control.val(t.isEmpty(e) ? "" : e),
                        this.base(e)
                },
                disable: function() {
                    this.control.disabled = !0
                },
                enable: function() {
                    this.control.disabled = !1
                },
                focus: function(e) {
                    this.control.focus(), e && e(this)
                },
                getType: function() {
                    return "any"
                },
                getTitle: function() {
                    return "Any Field"
                },
                getDescription: function() {
                    return "Any field."
                },
                getSchemaOfSchema: function() {
                    return t.merge(this.base(), {
                        properties: {}
                    })
                },
                getOptionsForSchema: function() {
                    return t.merge(this.base(), {
                        fields: {}
                    })
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {}
                    })
                },
                getOptionsForOptions: function() {
                    return t.merge(this.base(), {
                        fields: {}
                    })
                }
            }), t.registerFieldClass("any", t.Fields.AnyField), t.registerDefaultSchemaFieldMapping("any", "any")
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.HiddenField = t.ControlField.extend({
                getFieldType: function() {
                    return "hidden"
                },
                setup: function() {
                    this.base()
                },
                getControlValue: function() {
                    return this._getControlVal(!0)
                },
                setValue: function(e) {
                    this.getControlEl().val(t.isEmpty(e) ? "" : e), this.base(e)
                },
                getType: function() {
                    return "string"
                },
                getTitle: function() {
                    return "Hidden"
                },
                getDescription: function() {
                    return "Field for a hidden HTML input"
                }
            }), t.registerFieldClass("hidden", t.Fields.HiddenField)
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.AddressField = t.Fields.ObjectField.extend({
                getFieldType: function() {
                    return "address"
                },
                setup: function() {
                    this.base(), void 0 === this.data && (this.data = {
                        street: ["", ""]
                    }), this.schema = {
                        title: "Home Address",
                        type: "object",
                        properties: {
                            street: {
                                title: "Street",
                                type: "array",
                                items: {
                                    type: "string",
                                    maxLength: 30,
                                    minItems: 0,
                                    maxItems: 3
                                }
                            },
                            city: {
                                title: "City",
                                type: "string"
                            },
                            state: {
                                title: "State",
                                type: "string",
                                "enum": ["AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY"]
                            },
                            zip: {
                                title: "Zip Code",
                                type: "string",
                                pattern: /^(\d{5}(-\d{4})?)?$/
                            }
                        }
                    }, t.merge(this.options, {
                        fields: {
                            zip: {
                                maskString: "99999",
                                size: 5
                            },
                            state: {
                                optionLabels: ["ALABAMA", "ALASKA", "AMERICANSAMOA", "ARIZONA", "ARKANSAS", "CALIFORNIA", "COLORADO", "CONNECTICUT", "DELAWARE", "DISTRICTOFCOLUMBIA", "FEDERATEDSTATESOFMICRONESIA", "FLORIDA", "GEORGIA", "GUAM", "HAWAII", "IDAHO", "ILLINOIS", "INDIANA", "IOWA", "KANSAS", "KENTUCKY", "LOUISIANA", "MAINE", "MARSHALLISLANDS", "MARYLAND", "MASSACHUSETTS", "MICHIGAN", "MINNESOTA", "MISSISSIPPI", "MISSOURI", "MONTANA", "NEBRASKA", "NEVADA", "NEWHAMPSHIRE", "NEWJERSEY", "NEWMEXICO", "NEWYORK", "NORTHCAROLINA", "NORTHDAKOTA", "NORTHERNMARIANAISLANDS", "OHIO", "OKLAHOMA", "OREGON", "PALAU", "PENNSYLVANIA", "PUERTORICO", "RHODEISLAND", "SOUTHCAROLINA", "SOUTHDAKOTA", "TENNESSEE", "TEXAS", "UTAH", "VERMONT", "VIRGINISLANDS", "VIRGINIA", "WASHINGTON", "WESTVIRGINIA", "WISCONSIN", "WYOMING"]
                            }
                        }
                    }), t.isEmpty(this.options.addressValidation) && (this.options.addressValidation = !0)
                },
                isContainer: function() {
                    return !1
                },
                getAddress: function() {
                    var t = this.getValue();
                    "view" === this.view.type && (t = this.data);
                    var i = "";
                    return t && (t.street && e.each(t.street, function(e, t) {
                        i += t + " "
                    }), t.city && (i += t.city + " "), t.state && (i += t.state + " "), t.zip && (i += t.zip)), i
                },
                afterRenderContainer: function(t, i) {
                    var n = this;
                    this.base(t, function() {
                        var t = n.getContainerEl();
                        if (e(t).addClass("alpaca-addressfield"), n.options.addressValidation && !n.isDisplayOnly()) {
                            e('<div style="clear:both;"></div>').appendTo(t);
                            var a = e('<div class="alpaca-form-button">Show Google Map</div>').appendTo(t);
                            a.button && a.button({
                                text: !0
                            }), a.click(function() {
                                if (google && google.maps) {
                                    var t = new google.maps.Geocoder,
                                        i = n.getAddress();
                                    t && t.geocode({
                                        address: i
                                    }, function(t, i) {
                                        if (i === google.maps.GeocoderStatus.OK) {
                                            var a = n.getId() + "-map-canvas";
                                            0 === e("#" + a).length && e("<div id='" + a + "' class='alpaca-field-address-mapcanvas'></div>").appendTo(n.getFieldEl()); {
                                                var r = new google.maps.Map(document.getElementById(n.getId() + "-map-canvas"), {
                                                    zoom: 10,
                                                    center: t[0].geometry.location,
                                                    mapTypeId: google.maps.MapTypeId.ROADMAP
                                                });
                                                new google.maps.Marker({
                                                    map: r,
                                                    position: t[0].geometry.location
                                                })
                                            }
                                        } else n.displayMessage("Geocoding failed: " + i)
                                    })
                                } else n.displayMessage("Google Map API is not installed.")
                            }).wrap("<small/>"), n.options.showMapOnLoad && a.click()
                        }
                        i()
                    })
                },
                getType: function() {
                    return "any"
                },
                getTitle: function() {
                    return "Address"
                },
                getDescription: function() {
                    return "Standard US Address with Street, City, State and Zip. Also comes with support for Google map."
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {
                            validateAddress: {
                                title: "Address Validation",
                                description: "Enable address validation if true",
                                type: "boolean",
                                "default": !0
                            },
                            showMapOnLoad: {
                                title: "Whether to show the map when first loaded",
                                type: "boolean"
                            }
                        }
                    })
                },
                getOptionsForOptions: function() {
                    return t.merge(this.base(), {
                        fields: {
                            validateAddress: {
                                helper: "Address validation if checked",
                                rightLabel: "Enable Google Map for address validation?",
                                type: "checkbox"
                            }
                        }
                    })
                }
            }), t.registerFieldClass("address", t.Fields.AddressField)
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.CKEditorField = t.Fields.TextAreaField.extend({
                getFieldType: function() {
                    return "ckeditor"
                },
                setup: function() {
                    this.data || (this.data = ""), this.base(), "undefined" == typeof this.options.ckeditor && (this.options.ckeditor = {})
                },
                afterRenderControl: function(t, i) {
                    var n = this;
                    this.base(t, function() {
                        !n.isDisplayOnly() && n.control && "undefined" != typeof CKEDITOR && setTimeout(function() {
                            n.editor = CKEDITOR.replace(e(n.control)[0], n.options.ckeditor)
                        }, 500), e(n.control).bind("destroyed", function() {
                            if (n.editor) {
                                n.editor.removeAllListeners();
                                try {
                                    n.editor.destroy(!1)
                                } catch (e) {}
                                n.editor = null
                            }
                        }), i()
                    })
                },
                initControlEvents: function() {
                    var e = this;
                    setTimeout(function() {
                        e.editor && (e.editor.on("click", function(t) {
                            e.onClick.call(e, t), e.trigger("click", t)
                        }), e.editor.on("change", function(t) {
                            e.onChange(), e.triggerWithPropagation("change", t)
                        }), e.editor.on("blur", function(t) {
                            e.onBlur(), e.trigger("blur", t)
                        }), e.editor.on("focus", function(t) {
                            e.onFocus.call(e, t), e.trigger("focus", t)
                        }), e.editor.on("key", function(t) {
                            e.onKeyPress.call(e, t), e.trigger("keypress", t)
                        }))
                    }, 525)
                },
                setValue: function(e) {
                    var t = this;
                    this.base(e), t.editor && t.editor.setData(e)
                },
                getControlValue: function() {
                    var e = this,
                        t = null;
                    return e.editor && (t = e.editor.getData()), t
                },
                destroy: function() {
                    var e = this;
                    e.editor && (e.editor.destroy(), e.editor = null), this.base()
                },
                getTitle: function() {
                    return "CK Editor"
                },
                getDescription: function() {
                    return "Provides an instance of a CK Editor control for use in editing HTML."
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {
                            ckeditor: {
                                title: "CK Editor options",
                                description: "Use this entry to provide configuration options to the underlying CKEditor plugin.",
                                type: "any"
                            }
                        }
                    })
                },
                getOptionsForOptions: function() {
                    return t.merge(this.base(), {
                        fields: {
                            ckeditor: {
                                type: "any"
                            }
                        }
                    })
                }
            }), t.registerFieldClass("ckeditor", t.Fields.CKEditorField)
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.ColorField = t.Fields.TextField.extend({
                setup: function() {
                    this.inputType = "color", this.base()
                },
                getFieldType: function() {
                    return "color"
                },
                getType: function() {
                    return "string"
                },
                getTitle: function() {
                    return "Color Field"
                },
                getDescription: function() {
                    return "A color picker for selecting hexadecimal color values"
                }
            }), t.registerFieldClass("color", t.Fields.ColorField), t.registerDefaultSchemaFieldMapping("color", "color")
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.CountryField = t.Fields.SelectField.extend({
                getFieldType: function() {
                    return "country"
                },
                setup: function() {
                    t.isUndefined(this.options.capitalize) && (this.options.capitalize = !1), this.schema["enum"] = [], this.options.optionLabels = [];
                    var e = this.getMessage("countries");
                    if (e)
                        for (var i in e) {
                            this.schema["enum"].push(i);
                            var n = e[i];
                            this.options.capitalize && (n = n.toUpperCase()), this.options.optionLabels.push(n)
                        }
                    this.base()
                },
                getTitle: function() {
                    return "Country Field"
                },
                getDescription: function() {
                    return "Provides a dropdown selector of countries keyed by their ISO3 code.  The names of the countries are read from the I18N bundle for the current locale."
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {
                            capitalize: {
                                title: "Capitalize",
                                description: "Whether the values should be capitalized",
                                type: "boolean",
                                "default": !1,
                                readonly: !0
                            }
                        }
                    })
                },
                getOptionsForOptions: function() {
                    return t.merge(this.base(), {
                        fields: {
                            capitalize: {
                                type: "checkbox"
                            }
                        }
                    })
                }
            }), t.registerFieldClass("country", t.Fields.CountryField), t.registerDefaultFormatFieldMapping("country", "country")
        }(jQuery),
        function(e) {
            var t = function() {
                    var e = {
                        up: Math.ceil,
                        down: function(e) {
                            return ~~e
                        },
                        nearest: Math.round
                    };
                    return function(t) {
                        return e[t]
                    }
                }(),
                i = e.alpaca;
            i.Fields.CurrencyField = i.Fields.TextField.extend({
                constructor: function(e, t, i, n, a, r, s) {
                    i = i || {};
                    var o = this.getSchemaOfPriceFormatOptions().properties;
                    for (var l in o) {
                        var u = o[l];
                        l in i || (i[l] = u["default"] || void 0)
                    }
                    "undefined" != typeof t && (t = "" + parseFloat(t).toFixed(i.centsLimit)), this.base(e, t, i, n, a, r, s)
                },
                getFieldType: function() {
                    return "currency"
                },
                afterRenderControl: function(t, i) {
                    var n = this,
                        a = this.getControlEl();
                    this.base(t, function() {
                        e(a).priceFormat(n.options), i()
                    })
                },
                getControlValue: function() {
                    var i = this.getControlEl(),
                        n = e(i).is("input") ? i.val() : i.html();
                    if (this.options.unmask || "none" !== this.options.round) {
                        var a = function() {
                            var e = "";
                            for (var t in n) {
                                var i = n[t];
                                isNaN(i) ? i === this.options.centsSeparator && (e += ".") : e += i
                            }
                            return parseFloat(e)
                        }.bind(this)();
                        if ("none" !== this.options.round && (a = t(this.options.round)(a), !this.options.unmask)) {
                            for (var r = [], s = "" + a, o = 0, l = 0; o < n.length; o++) r.push(isNaN(n[o]) ? n[o] : s[l++] || 0);
                            return r.join("")
                        }
                        return a
                    }
                    return n
                },
                getTitle: function() {
                    return "Currency Field"
                },
                getDescription: function() {
                    return "Provides an automatically formatted and configurable input for entering currency amounts."
                },
                getSchemaOfPriceFormatOptions: function() {
                    return {
                        properties: {
                            allowNegative: {
                                title: "Allow Negative",
                                description: "Determines if negative numbers are allowed.",
                                type: "boolean",
                                "default": !1
                            },
                            centsLimit: {
                                title: "Cents Limit",
                                description: "The limit of fractional digits.",
                                type: "number",
                                "default": 2,
                                minimum: 0
                            },
                            centsSeparator: {
                                title: "Cents Separator",
                                description: "The separator between whole and fractional amounts.",
                                type: "text",
                                "default": "."
                            },
                            clearPrefix: {
                                title: "Clear Prefix",
                                description: "Determines if the prefix is cleared on blur.",
                                type: "boolean",
                                "default": !1
                            },
                            clearSuffix: {
                                title: "Clear Suffix",
                                description: "Determines if the suffix is cleared on blur.",
                                type: "boolean",
                                "default": !1
                            },
                            insertPlusSign: {
                                title: "Plus Sign",
                                description: "Determines if a plus sign should be inserted for positive values.",
                                type: "boolean",
                                "default": !1
                            },
                            limit: {
                                title: "Limit",
                                description: "A limit of the length of the field.",
                                type: "number",
                                "default": void 0,
                                minimum: 0
                            },
                            prefix: {
                                title: "Prefix",
                                description: "The prefix if any for the field.",
                                type: "text",
                                "default": "$"
                            },
                            round: {
                                title: "Round",
                                description: "Determines if the field is rounded. (Rounding is done when getValue is called and is not reflected in the UI)",
                                type: "string",
                                "enum": ["up", "down", "nearest", "none"],
                                "default": "none"
                            },
                            suffix: {
                                title: "Suffix",
                                description: "The suffix if any for the field.",
                                type: "text",
                                "default": ""
                            },
                            thousandsSeparator: {
                                title: "Thousands Separator",
                                description: "The separator between thousands.",
                                type: "string",
                                "default": ","
                            },
                            unmask: {
                                title: "Unmask",
                                description: "If true then the resulting value for this field will be unmasked.  That is, the resulting value will be a float instead of a string (with the prefix, suffix, etc. removed).",
                                type: "boolean",
                                "default": !0
                            }
                        }
                    }
                },
                getSchemaOfOptions: function() {
                    return i.merge(this.base(), this.getSchemaOfPriceFormatOptions())
                },
                getOptionsForOptions: function() {
                    return i.merge(this.base(), {
                        fields: {
                            allowNegative: {
                                type: "checkbox"
                            },
                            centsLimit: {
                                type: "number"
                            },
                            centsSeparator: {
                                type: "text"
                            },
                            clearPrefix: {
                                type: "checkbox"
                            },
                            clearSuffix: {
                                type: "checkbox"
                            },
                            insertPlusSign: {
                                type: "checkbox"
                            },
                            limit: {
                                type: "number"
                            },
                            prefix: {
                                type: "text"
                            },
                            round: {
                                type: "select"
                            },
                            suffix: {
                                type: "text"
                            },
                            thousandsSeparator: {
                                type: "string"
                            },
                            unmask: {
                                type: "checkbox"
                            }
                        }
                    })
                }
            }), i.registerFieldClass("currency", i.Fields.CurrencyField)
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.DateField = t.Fields.TextField.extend({
                getFieldType: function() {
                    return "date"
                },
                getDefaultFormat: function() {
                    return "MM/DD/YYYY"
                },
                getDefaultExtraFormats: function() {
                    return []
                },
                setup: function() {
                    var e = this;
                    if (this.base(), e.options.picker || (e.options.picker = {}), "undefined" == typeof e.options.picker.useCurrent && (e.options.picker.useCurrent = !1), e.options.picker.format && (e.options.dateFormat = e.options.picker.format), e.options.dateFormat || (e.options.dateFormat = e.getDefaultFormat()), e.options.picker.format || (e.options.picker.format = e.options.dateFormat), e.options.picker.locale || (e.options.picker.locale = "en_US"), e.options.picker.dayViewHeaderFormat || (e.options.picker.dayViewHeaderFormat = "MMMM YYYY"), !e.options.picker.extraFormats) {
                        var t = e.getDefaultExtraFormats();
                        t && (e.options.picker.extraFormats = t)
                    }
                    "undefined" == typeof e.options.manualEntry && (e.options.manualEntry = !1)
                },
                onKeyPress: function(e) {
                    return this.options.manualEntry ? (e.preventDefault(), void e.stopImmediatePropagation()) : void this.base(e)
                },
                onKeyDown: function(e) {
                    return this.options.manualEntry ? (e.preventDefault(), void e.stopImmediatePropagation()) : void this.base(e)
                },
                afterRenderControl: function(t, i) {
                    var n = this;
                    this.base(t, function() {
                        "display" !== n.view.type && e.fn.datetimepicker && (n.getControlEl().datetimepicker(n.options.picker), n.picker = n.getControlEl().data("DateTimePicker"), n.picker && n.options.dateFormat && n.picker.format(n.options.dateFormat), n.picker && (n.options.dateFormat = n.picker.format()), n.getFieldEl().on("dp.change", function(e) {
                            setTimeout(function() {
                                n.onChange.call(n, e), n.triggerWithPropagation("change", e)
                            }, 250)
                        })), i()
                    })
                },
                setManualEntry: function(e) {
                    this.options.manualEntry = e
                },
                getDate: function() {
                    var e = this,
                        t = null;
                    try {
                        t = e.picker ? e.picker.date() ? e.picker.date()._d : null : new Date(this.getValue())
                    } catch (i) {
                        console.error(i)
                    }
                    return t
                },
                date: function() {
                    return this.getDate()
                },
                onChange: function(e) {
                    this.base(), this.refreshValidationState()
                },
                isAutoFocusable: function() {
                    return !1
                },
                handleValidate: function() {
                    var e = this.base(),
                        i = this.validation,
                        n = this._validateDateFormat();
                    return i.invalidDate = {
                        message: n ? "" : t.substituteTokens(this.getMessage("invalidDate"), [this.options.dateFormat]),
                        status: n
                    }, e && i.invalidDate.status
                },
                _validateDateFormat: function() {
                    var e = this,
                        t = !0;
                    if (e.options.dateFormat) {
                        var i = e.getValue();
                        if (i || e.isRequired()) {
                            var n = [];
                            if (n.push(e.options.dateFormat), e.options.picker && e.options.picker.extraFormats)
                                for (var a = 0; a < e.options.picker.extraFormats.length; a++) n.push(e.options.picker.extraFormats[a]);
                            for (var a = 0; a < n.length; a++) t = t || moment(i, e.options.dateFormat, !0).isValid()
                        }
                    }
                    return t
                },
                setValue: function(e) {
                    var t = this;
                    this.base(e), this.picker && moment(e, t.options.dateFormat, !0).isValid() && this.picker.date(e)
                },
                destroy: function() {
                    this.base(), this.picker = null
                },
                getTitle: function() {
                    return "Date Field"
                },
                getDescription: function() {
                    return "Date Field"
                },
                getSchemaOfSchema: function() {
                    return t.merge(this.base(), {
                        properties: {
                            format: {
                                title: "Format",
                                description: "Property data format",
                                type: "string",
                                "default": "date",
                                "enum": ["date"],
                                readonly: !0
                            }
                        }
                    })
                },
                getOptionsForSchema: function() {
                    return t.merge(this.base(), {
                        fields: {
                            format: {
                                type: "text"
                            }
                        }
                    })
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {
                            dateFormat: {
                                title: "Date Format",
                                description: "Date format (using moment.js format)",
                                type: "string"
                            },
                            picker: {
                                title: "DatetimePicker options",
                                description: "Options that are supported by the <a href='http://eonasdan.github.io/bootstrap-datetimepicker/'>Bootstrap DateTime Picker</a>.",
                                type: "any"
                            }
                        }
                    })
                },
                getOptionsForOptions: function() {
                    return t.merge(this.base(), {
                        fields: {
                            dateFormat: {
                                type: "text"
                            },
                            picker: {
                                type: "any"
                            }
                        }
                    })
                }
            }), t.registerMessages({
                invalidDate: "Invalid date for format {0}"
            }), t.registerFieldClass("date", t.Fields.DateField), t.registerDefaultFormatFieldMapping("date", "date")
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.DatetimeField = t.Fields.DateField.extend({
                getFieldType: function() {
                    return "datetime"
                },
                getDefaultFormat: function() {
                    return "MM/DD/YYYY HH:mm:ss"
                },
                getDefaultExtraFormats: function() {
                    return ["MM/DD/YYYY hh:mm:ss a", "MM/DD/YYYY HH:mm", "MM/DD/YYYY"]
                },
                setup: function() {
                    this.base()
                },
                getTitle: function() {
                    return "Datetime Field"
                },
                getDescription: function() {
                    return "Datetime Field based on <a href='http://eonasdan.github.io/bootstrap-datetimepicker/'>Bootstrap DateTime Picker</a>."
                }
            }), t.registerFieldClass("datetime", t.Fields.DatetimeField), t.registerDefaultFormatFieldMapping("datetime", "datetime"), t.registerDefaultFormatFieldMapping("date-time", "datetime")
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.EditorField = t.Fields.TextField.extend({
                getFieldType: function() {
                    return "editor"
                },
                setup: function() {
                    var e = this;
                    this.base(), e.options.aceTheme || (e.options.aceTheme = "ace/theme/chrome"), e.options.aceMode || (e.options.aceMode = "ace/mode/json"), "undefined" == typeof e.options.beautify && (e.options.beautify = !0), e.options.beautify && this.data && ("ace/mode/json" === e.options.aceMode && (t.isObject(this.data) ? this.data = JSON.stringify(this.data, null, "    ") : t.isString(this.data) && (this.data = JSON.stringify(JSON.parse(this.data), null, "    "))), "ace/mode/html" === e.options.aceMode && "undefined" != typeof html_beautify && (this.data = html_beautify(this.data)), "ace/mode/css" === e.options.aceMode && "undefined" != typeof css_beautify && (this.data = css_beautify(this.data)), "ace/mode/javascript" === e.options.aceMode && "undefined" != typeof js_beautify && (this.data = js_beautify(this.data))), "ace/mode/json" === e.options.aceMode && (this.data && "{}" !== this.data || (this.data = "{\n	\n}"))
                },
                afterRenderControl: function(i, n) {
                    var a = this;
                    this.base(i, function() {
                        if (a.control) {
                            var i = a.options.aceHeight;
                            i && e(a.control).css("height", i);
                            var r = a.options.aceWidth;
                            r || (r = "100%"), e(a.control).css("width", r)
                        }
                        var s = e(a.control)[0];
                        if (!ace && window.ace && (ace = window.ace), ace) {
                            a.editor = ace.edit(s), a.editor.setOptions({
                                maxLines: 1 / 0
                            }), a.editor.getSession().setUseWrapMode(!0);
                            var o = a.options.aceTheme;
                            a.editor.setTheme(o);
                            var l = a.options.aceMode;
                            if (a.editor.getSession().setMode(l), a.editor.renderer.setHScrollBarAlwaysVisible(!1), a.editor.setShowPrintMargin(!1), a.editor.setValue(a.data), a.editor.clearSelection(), a.editor.getSession().getUndoManager().reset(), a.options.aceFitContentHeight) {
                                var u = function() {
                                    var t = !1;
                                    0 === a.editor.renderer.lineHeight && (t = !0, a.editor.renderer.lineHeight = 16);
                                    var i = a.editor.getSession().getScreenLength() * a.editor.renderer.lineHeight + a.editor.renderer.scrollBar.getWidth();
                                    e(a.control).height(i.toString() + "px"), a.editor.resize(), t && window.setTimeout(function() {
                                        a.editor.clearSelection()
                                    }, 100)
                                };
                                u(), a.editor.getSession().on("change", u)
                            }
                            a.schema.readonly && a.editor.setReadOnly(!0), e(s).bind("destroyed", function() {
                                a.editor && (a.editor.destroy(), a.editor = null)
                            })
                        } else t.logError("Editor Field is missing the 'ace' Cloud 9 Editor");
                        n()
                    })
                },
                destroy: function() {
                    this.editor && (this.editor.destroy(), this.editor = null), this.base()
                },
                getEditor: function() {
                    return this.editor
                },
                handleValidate: function() {
                    var e = this.base(),
                        i = this.validation,
                        n = this._validateWordCount();
                    i.wordLimitExceeded = {
                        message: n ? "" : t.substituteTokens(this.getMessage("wordLimitExceeded"), [this.options.wordlimit]),
                        status: n
                    };
                    var a = this._validateEditorAnnotations();
                    return i.editorAnnotationsExist = {
                        message: a ? "" : this.getMessage("editorAnnotationsExist"),
                        status: a
                    }, e && i.wordLimitExceeded.status && i.editorAnnotationsExist.status
                },
                _validateEditorAnnotations: function() {
                    if (this.editor) {
                        var e = this.editor.getSession().getAnnotations();
                        if (e && e.length > 0) return !1
                    }
                    return !0
                },
                _validateWordCount: function() {
                    if (this.options.wordlimit && this.options.wordlimit > -1) {
                        var e = this.editor.getValue();
                        if (e) {
                            var t = e.split(" ").length;
                            if (t > this.options.wordlimit) return !1
                        }
                    }
                    return !0
                },
                onDependentReveal: function() {
                    this.editor && this.editor.resize()
                },
                setValue: function(e) {
                    var i = this;
                    this.editor && ("object" == i.schema.type && t.isObject(e) && (e = JSON.stringify(e, null, "    ")), this.editor.setValue(e), i.editor.clearSelection()), this.base(e)
                },
                getControlValue: function() {
                    var e = null;
                    return this.editor && (e = this.editor.getValue()), "object" == this.schema.type && (e = e ? JSON.parse(e) : {}), e
                },
                getTitle: function() {
                    return "Editor"
                },
                getDescription: function() {
                    return "Editor"
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {
                            aceTheme: {
                                title: "ACE Editor Theme",
                                description: "Specifies the theme to set onto the editor instance",
                                type: "string",
                                "default": "ace/theme/twilight"
                            },
                            aceMode: {
                                title: "ACE Editor Mode",
                                description: "Specifies the mode to set onto the editor instance",
                                type: "string",
                                "default": "ace/mode/javascript"
                            },
                            aceWidth: {
                                title: "ACE Editor Height",
                                description: "Specifies the width of the wrapping div around the editor",
                                type: "string",
                                "default": "100%"
                            },
                            aceHeight: {
                                title: "ACE Editor Height",
                                description: "Specifies the height of the wrapping div around the editor",
                                type: "string",
                                "default": "300px"
                            },
                            aceFitContentHeight: {
                                title: "ACE Fit Content Height",
                                description: "Configures the ACE Editor to auto-fit its height to the contents of the editor",
                                type: "boolean",
                                "default": !1
                            },
                            wordlimit: {
                                title: "Word Limit",
                                description: "Limits the number of words allowed in the text area.",
                                type: "number",
                                "default": -1
                            }
                        }
                    })
                },
                getOptionsForOptions: function() {
                    return t.merge(this.base(), {
                        fields: {
                            aceTheme: {
                                type: "text"
                            },
                            aceMode: {
                                type: "text"
                            },
                            wordlimit: {
                                type: "integer"
                            }
                        }
                    })
                }
            }), t.registerMessages({
                wordLimitExceeded: "The maximum word limit of {0} has been exceeded.",
                editorAnnotationsExist: "The editor has errors in it that must be corrected"
            }), t.registerFieldClass("editor", t.Fields.EditorField)
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.EmailField = t.Fields.TextField.extend({
                getFieldType: function() {
                    return "email"
                },
                setup: function() {
                    this.inputType = "email", this.base(), this.schema.pattern || (this.schema.pattern = t.regexps.email)
                },
                handleValidate: function() {
                    var e = this.base(),
                        t = this.validation;
                    return t.invalidPattern.status || (t.invalidPattern.message = this.getMessage("invalidEmail")), e
                },
                getTitle: function() {
                    return "Email Field"
                },
                getDescription: function() {
                    return "Email Field."
                },
                getSchemaOfSchema: function() {
                    var e = this.schema && this.schema.pattern ? this.schema.pattern : t.regexps.email;
                    return t.merge(this.base(), {
                        properties: {
                            pattern: {
                                title: "Pattern",
                                description: "Field Pattern in Regular Expression",
                                type: "string",
                                "default": e,
                                "enum": [e],
                                readonly: !0
                            },
                            format: {
                                title: "Format",
                                description: "Property data format",
                                type: "string",
                                "default": "email",
                                "enum": ["email"],
                                readonly: !0
                            }
                        }
                    })
                },
                getOptionsForSchema: function() {
                    return t.merge(this.base(), {
                        fields: {
                            format: {
                                type: "text"
                            }
                        }
                    })
                }
            }), t.registerMessages({
                invalidEmail: "Invalid Email address e.g. info@cloudcms.com"
            }), t.registerFieldClass("email", t.Fields.EmailField), t.registerDefaultFormatFieldMapping("email", "email")
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.GridField = t.Fields.ArrayField.extend({
                getFieldType: function() {
                    return "grid"
                },
                setup: function() {
                    this.base(), "undefined" == typeof this.options.grid && (this.options.grid = {})
                },
                afterRenderContainer: function(t, i) {
                    var n = this;
                    this.base(t, function() {
                        var t = [],
                            a = [];
                        for (var r in n.options.fields) {
                            var s = n.options.fields[r],
                                o = r;
                            s.label && (o = s.label), a.push(o)
                        }
                        t.push(a);
                        for (var l = 0; l < n.data.length; l++) {
                            var u = [];
                            for (var c in n.data[l]) u.push(n.data[l][c]);
                            t.push(u)
                        }
                        var p = e(n.container).find(".alpaca-container-grid-holder"),
                            d = n.options.grid;
                        d.data = t, e(p).handsontable(d), i()
                    })
                },
                getType: function() {
                    return "array"
                },
                getTitle: function() {
                    return "Grid Field"
                },
                getDescription: function() {
                    return "Renders array items into a grid"
                }
            }), t.registerFieldClass("grid", t.Fields.GridField)
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.ImageField = t.Fields.TextField.extend({
                getFieldType: function() {
                    return "image"
                },
                getTitle: function() {
                    return "Image Field"
                },
                getDescription: function() {
                    return "Image Field."
                }
            }), t.registerFieldClass("image", t.Fields.ImageField)
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.IntegerField = t.Fields.NumberField.extend({
                getFieldType: function() {
                    return "integer"
                },
                getControlValue: function() {
                    var e = this.base();
                    return "undefined" == typeof e || "" == e ? e : parseInt(e, 10)
                },
                onChange: function(e) {
                    this.base(), this.slider && this.slider.slider("value", this.getValue())
                },
                postRender: function(i) {
                    var n = this;
                    this.base(function() {
                        n.options.slider && (t.isEmpty(n.schema.maximum) || t.isEmpty(n.schema.minimum) || n.control && (n.control.after('<div id="slider"></div>'), n.slider = e("#slider", n.control.parent()).slider({
                            value: n.getValue(),
                            min: n.schema.minimum,
                            max: n.schema.maximum,
                            slide: function(e, t) {
                                n.setValue(t.value), n.refreshValidationState()
                            }
                        }))), i()
                    })
                },
                handleValidate: function() {
                    var e = this.base(),
                        t = this.validation,
                        i = this._validateInteger();
                    return t.stringNotANumber = {
                        message: i ? "" : this.getMessage("stringNotAnInteger"),
                        status: i
                    }, e
                },
                _validateInteger: function() {
                    var e = this._getControlVal();
                    if ("number" == typeof e && (e = "" + e), t.isValEmpty(e)) return !0;
                    var i = t.testRegex(t.regexps.integer, e);
                    if (!i) return !1;
                    var n = this.getValue();
                    return isNaN(n) ? !1 : !0
                },
                getType: function() {
                    return "integer"
                },
                getTitle: function() {
                    return "Integer Field"
                },
                getDescription: function() {
                    return "Field for integers."
                },
                getSchemaOfSchema: function() {
                    return t.merge(this.base(), {
                        properties: {
                            minimum: {
                                title: "Minimum",
                                description: "Minimum value of the property.",
                                type: "integer"
                            },
                            maximum: {
                                title: "Maximum",
                                description: "Maximum value of the property.",
                                type: "integer"
                            },
                            divisibleBy: {
                                title: "Divisible By",
                                description: "Property value must be divisible by this number.",
                                type: "integer"
                            }
                        }
                    })
                },
                getOptionsForSchema: function() {
                    return t.merge(this.base(), {
                        fields: {
                            minimum: {
                                helper: "Minimum value of the field.",
                                type: "integer"
                            },
                            maximum: {
                                helper: "Maximum value of the field.",
                                type: "integer"
                            },
                            divisibleBy: {
                                helper: "Property value must be divisible by this number.",
                                type: "integer"
                            }
                        }
                    })
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {
                            slider: {
                                title: "Slider",
                                description: "Generate jQuery UI slider control with the field if true.",
                                type: "boolean",
                                "default": !1
                            }
                        }
                    })
                },
                getOptionsForOptions: function() {
                    return t.merge(this.base(), {
                        fields: {
                            slider: {
                                rightLabel: "Slider control ?",
                                helper: "Generate slider control if selected.",
                                type: "checkbox"
                            }
                        }
                    })
                }
            }), t.registerMessages({
                stringNotAnInteger: "This value is not an integer."
            }), t.registerFieldClass("integer", t.Fields.IntegerField), t.registerDefaultSchemaFieldMapping("integer", "integer")
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.IPv4Field = t.Fields.TextField.extend({
                getFieldType: function() {
                    return "ipv4"
                },
                setup: function() {
                    this.base(), this.schema.pattern || (this.schema.pattern = t.regexps.ipv4)
                },
                handleValidate: function() {
                    var e = this.base(),
                        t = this.validation;
                    return t.invalidPattern.status || (t.invalidPattern.message = this.getMessage("invalidIPv4")), e
                },
                getTitle: function() {
                    return "IP Address Field"
                },
                getDescription: function() {
                    return "IP Address Field."
                },
                getSchemaOfSchema: function() {
                    var e = this.schema && this.schema.pattern ? this.schema.pattern : t.regexps.ipv4;
                    return t.merge(this.base(), {
                        properties: {
                            pattern: {
                                title: "Pattern",
                                description: "Field Pattern in Regular Expression",
                                type: "string",
                                "default": e,
                                readonly: !0
                            },
                            format: {
                                title: "Format",
                                description: "Property data format",
                                type: "string",
                                "enum": ["ip-address"],
                                "default": "ip-address",
                                readonly: !0
                            }
                        }
                    })
                },
                getOptionsForSchema: function() {
                    return t.merge(this.base(), {
                        fields: {
                            format: {
                                type: "text"
                            }
                        }
                    })
                }
            }), t.registerMessages({
                invalidIPv4: "Invalid IPv4 address, e.g. 192.168.0.1"
            }), t.registerFieldClass("ipv4", t.Fields.IPv4Field), t.registerDefaultFormatFieldMapping("ip-address", "ipv4")
        }(jQuery),
        function(e) {
            function t(e) {
                if ("string" == typeof e.data) {
                    var t = e.handler,
                        i = e.data.toLowerCase().split(" ");
                    e.handler = function(e) {
                        if (this === e.target || !/textarea|select/i.test(e.target.nodeName) && "text" !== e.target.type) {
                            var n = "keypress" !== e.type && jQuery.hotkeys.specialKeys[e.which],
                                a = String.fromCharCode(e.which).toLowerCase(),
                                r = "",
                                s = {};
                            e.altKey && "alt" !== n && (r += "alt+"), e.ctrlKey && "ctrl" !== n && (r += "ctrl+"), e.metaKey && !e.ctrlKey && "meta" !== n && (r += "meta+"), e.shiftKey && "shift" !== n && (r += "shift+"), n ? s[r + n] = !0 : (s[r + a] = !0, s[r + jQuery.hotkeys.shiftNums[a]] = !0, "shift+" === r && (s[jQuery.hotkeys.shiftNums[a]] = !0));
                            for (var o = 0, l = i.length; l > o; o++)
                                if (s[i[o]]) return t.apply(this, arguments)
                        }
                    }
                }
            }
            var i = e.alpaca;
            i.Fields.JSONField = i.Fields.TextAreaField.extend({
                getFieldType: function() {
                    return "json"
                },
                setValue: function(e) {
                    (i.isObject(e) || "object" == typeof e) && (e = JSON.stringify(e, null, 3)), this.base(e)
                },
                getControlValue: function() {
                    var e = this.base();
                    return e && i.isString(e) && (e = JSON.parse(e)), e
                },
                handleValidate: function() {
                    var e = this.base(),
                        t = this.validation,
                        i = this._validateJSON();
                    return t.stringNotAJSON = {
                        message: i.status ? "" : this.getMessage("stringNotAJSON") + " " + i.message,
                        status: i.status
                    }, e && t.stringNotAJSON.status
                },
                _validateJSON: function() {
                    var e = this.control.val();
                    if (i.isValEmpty(e)) return {
                        status: !0
                    };
                    try {
                        var t = JSON.parse(e);
                        return this.setValue(JSON.stringify(t, null, 3)), {
                            status: !0
                        }
                    } catch (n) {
                        return {
                            status: !1,
                            message: n.message
                        }
                    }
                },
                afterRenderControl: function(e, t) {
                    var i = this;
                    this.base(e, function() {
                        i.control && (i.control.bind("keypress", function(e) {
                            var t = e.keyCode || e.wich;
                            34 === t && i.control.insertAtCaret('"'), 123 === t && i.control.insertAtCaret("}"), 91 === t && i.control.insertAtCaret("]")
                        }), i.control.bind("keypress", "Ctrl+l", function() {
                            i.getFieldEl().removeClass("alpaca-field-focused"), i.refreshValidationState()
                        }), i.control.attr("title", "Type Ctrl+L to format and validate the JSON string.")), t()
                    })
                },
                getTitle: function() {
                    return "JSON Editor"
                },
                getDescription: function() {
                    return "Editor for JSON objects with basic validation and formatting."
                }
            }), i.registerMessages({
                stringNotAJSON: "This value is not a valid JSON string."
            }), i.registerFieldClass("json", i.Fields.JSONField), e.fn.insertAtCaret = function(e) {
                return this.each(function() {
                    if (document.selection) this.focus(), sel = document.selection.createRange(), sel.text = e, this.focus();
                    else if (this.selectionStart || "0" == this.selectionStart) {
                        var t = this.selectionStart,
                            i = this.selectionEnd,
                            n = this.scrollTop;
                        this.value = this.value.substring(0, t) + e + this.value.substring(i, this.value.length), this.focus(), this.selectionStart = t, this.selectionEnd = t, this.scrollTop = n
                    } else this.value += e, this.focus()
                })
            }, jQuery.hotkeys = {
                version: "0.8",
                specialKeys: {
                    8: "backspace",
                    9: "tab",
                    13: "return",
                    16: "shift",
                    17: "ctrl",
                    18: "alt",
                    19: "pause",
                    20: "capslock",
                    27: "esc",
                    32: "space",
                    33: "pageup",
                    34: "pagedown",
                    35: "end",
                    36: "home",
                    37: "left",
                    38: "up",
                    39: "right",
                    40: "down",
                    45: "insert",
                    46: "del",
                    96: "0",
                    97: "1",
                    98: "2",
                    99: "3",
                    100: "4",
                    101: "5",
                    102: "6",
                    103: "7",
                    104: "8",
                    105: "9",
                    106: "*",
                    107: "+",
                    109: "-",
                    110: ".",
                    111: "/",
                    112: "f1",
                    113: "f2",
                    114: "f3",
                    115: "f4",
                    116: "f5",
                    117: "f6",
                    118: "f7",
                    119: "f8",
                    120: "f9",
                    121: "f10",
                    122: "f11",
                    123: "f12",
                    144: "numlock",
                    145: "scroll",
                    191: "/",
                    224: "meta"
                },
                shiftNums: {
                    "`": "~",
                    1: "!",
                    2: "@",
                    3: "#",
                    4: "$",
                    5: "%",
                    6: "^",
                    7: "&",
                    8: "*",
                    9: "(",
                    0: ")",
                    "-": "_",
                    "=": "+",
                    ";": ": ",
                    "'": '"',
                    ",": "<",
                    ".": ">",
                    "/": "?",
                    "\\": "|"
                }
            }, jQuery.each(["keydown", "keyup", "keypress"], function() {
                jQuery.event.special[this] = {
                    add: t
                }
            })
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.LowerCaseField = t.Fields.TextField.extend({
                getFieldType: function() {
                    return "lowercase"
                },
                setup: function() {
                    this.base(), this.data && (this.data = this.data.toLowerCase())
                },
                setValue: function(e) {
                    var t = e.toLowerCase();
                    t != this.getValue() && this.base(t)
                },
                onKeyPress: function(e) {
                    this.base(e);
                    var i = this;
                    t.later(25, this, function() {
                        var e = i.getValue();
                        i.setValue(e)
                    })
                },
                getTitle: function() {
                    return "Lowercase Text"
                },
                getDescription: function() {
                    return "Text field for lowercase text."
                }
            }), t.registerFieldClass("lowercase", t.Fields.LowerCaseField), t.registerDefaultFormatFieldMapping("lowercase", "lowercase")
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.MapField = t.Fields.ArrayField.extend({
                getFieldType: function() {
                    return "map"
                },
                getType: function() {
                    return "object"
                },
                setup: function() {
                    if (this.data && t.isObject(this.data)) {
                        var i = [];
                        e.each(this.data, function(e, n) {
                            var a = t.copyOf(n);
                            a._key = e, i.push(a)
                        }), this.data = i
                    }
                    this.base(), t.mergeObject(this.options, {
                        forceRevalidation: !0
                    }), t.isEmpty(this.data)
                },
                getContainerValue: function() {
                    if (0 !== this.children.length || this.isRequired()) {
                        for (var e = {}, t = 0; t < this.children.length; t++) {
                            var i = this.children[t].getValue(),
                                n = i._key;
                            n && (delete i._key, e[n] = i)
                        }
                        return e
                    }
                },
                handleValidate: function() {
                    var e = this.base(),
                        t = this.validation,
                        i = this._validateMapKeysNotEmpty();
                    t.keyMissing = {
                        message: i ? "" : this.getMessage("keyMissing"),
                        status: i
                    };
                    var n = this._validateMapKeysUnique();
                    return t.keyNotUnique = {
                        message: n ? "" : this.getMessage("keyNotUnique"),
                        status: n
                    }, e && t.keyMissing.status && t.keyNotUnique.status
                },
                _validateMapKeysNotEmpty: function() {
                    for (var e = !0, t = 0; t < this.children.length; t++) {
                        var i = this.children[t].getValue(),
                            n = i._key;
                        if (!n) {
                            e = !1;
                            break
                        }
                    }
                    return e
                },
                _validateMapKeysUnique: function() {
                    for (var e = !0, t = {}, i = 0; i < this.children.length; i++) {
                        var n = this.children[i].getValue(),
                            a = n._key;
                        t[a] && (e = !1), t[a] = a
                    }
                    return e
                },
                getTitle: function() {
                    return "Map Field"
                },
                getDescription: function() {
                    return "Field for objects with key/value pairs that share the same schema for values."
                }
            }), t.registerFieldClass("map", t.Fields.MapField), t.registerMessages({
                keyNotUnique: "Keys of map field are not unique.",
                keyMissing: "Map contains an empty key."
            })
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.OptionTreeField = t.Fields.TextField.extend({
                getFieldType: function() {
                    return "optiontree"
                },
                setup: function() {
                    var e = this;
                    this.base(), this.options.tree || (this.options.tree = {}), this.options.tree.selectors || (this.options.tree.selectors = {}), this.options.tree.order || (this.options.tree.order = []);
                    for (var i in this.options.tree.selectors) {
                        if (!this.options.tree.selectors[i].schema) return void t.logError("OptionTree selector for: " + i + " is missing schema");
                        this.options.tree.selectors[i].options || (this.options.tree.selectors[i].options = {})
                    }
                    this.options.tree.data || (this.options.tree.data = []);
                    for (var n = 0; n < this.options.tree.data.length; n++) {
                        var a = this.options.tree.data[n];
                        if (a.attributes)
                            for (var i in a.attributes) this.options.tree.selectors[i] || (this.options.tree.selectors[i] = {}), this.options.tree.selectors[i].label || (this.options.tree.selectors[i].options.noneLabel = "Choose..."), this.options.tree.selectors[i].type || (this.options.tree.selectors[i].options.type = "select")
                    }
                    if (!e.options.tree.order) {
                        e.options.tree.order = [];
                        for (var i in e.options.tree.selectors) e.options.tree.order.push(e.options.tree.selectors[i])
                    }
                    "undefined" == typeof e.options.tree.horizontal && (e.options.tree.horizontal = !0), this.locationValueLists = {}, this.locationValues = {};
                    for (var n = 0; n < e.options.tree.data.length; n++)
                        if (e.options.tree.data[n].attributes) {
                            var r = "root";
                            for (var i in e.options.tree.data[n].attributes) {
                                var s = e.options.tree.data[n].attributes[i],
                                    o = this.locationValueLists[r];
                                o || (o = [], this.locationValueLists[r] = o);
                                for (var l = !1, u = 0; u < o.length; u++)
                                    if (o[u].value === s) {
                                        l = !0;
                                        break
                                    }
                                l || o.push({
                                    text: s,
                                    value: s
                                }), r.length > 0 && (r += "~"), r += i + "=" + s
                            }
                            this.locationValues[r] = e.options.tree.data[n].value
                        }
                    this.currentAttributes = {}, this.controls = {}
                },
                toLocation: function(e) {
                    var t = "root";
                    for (var i in e) {
                        var n = e[i];
                        t.length > 0 && (t += "~"), t += i + "=" + n
                    }
                    return t
                },
                existsLocationWithPrefix: function(e) {
                    var t = !1;
                    for (var i in this.locationValueLists)
                        if (i.indexOf(e) > -1) {
                            t = !0;
                            break
                        }
                    return t
                },
                afterRenderControl: function(t, i) {
                    var n = this;
                    n.optionTreeHolder = e(n.field).find(".optiontree"), n.options.tree.horizontal && e(n.field).addClass("optiontree-horizontal"), this.base(t, function() {
                        n.refreshOptionTreeControls(function() {
                            i()
                        })
                    })
                },
                refreshOptionTreeControls: function(i) {
                    var n = this;
                    for (var a in n.controls) n.controls[a].hide();
                    for (var r = 0, s = 0; s < n.options.tree.order.length; s++) {
                        var o = n.options.tree.order[s];
                        "undefined" != typeof n.currentAttributes[o] && null !== n.currentAttributes[o] && "" !== n.currentAttributes[o] && r++
                    }
                    var l = "root",
                        u = [],
                        c = 0,
                        s = 0;
                    do {
                        if (s < n.options.tree.order.length) {
                            var o = n.options.tree.order[s],
                                p = s == n.options.tree.order.length - 1 || n.existsLocationWithPrefix(l + "~" + o + "=");
                            if (p)
                                if (r >= c) {
                                    if (n.controls[o]) n.controls[o].show(), l += "~" + o + "=" + n.currentAttributes[o];
                                    else {
                                        var d = n.options.tree.selectors[o],
                                            h = s + 1 === n.options.tree.order.length,
                                            f = function(t, i, a, r, s, o) {
                                                return function(l) {
                                                    var u = a.schema,
                                                        c = a.options;
                                                    c || (c = {}), c.type || (c.type = "select"), "select" === c.type && (c.dataSource = function(e) {
                                                        var t = n.toLocation(n.currentAttributes),
                                                            i = n.locationValueLists[t];
                                                        e(i)
                                                    });
                                                    var p = e("<div class='optiontree-selector'></div>");
                                                    e(p).alpaca({
                                                        schema: u,
                                                        options: c,
                                                        postRender: function(a) {
                                                            r[i] = a, e(s).append(p), a.selectorId = i, a.on("change", function() {
                                                                var e = this.selectorId;
                                                                n.currentAttributes[e] = this.getValue();
                                                                for (var i = 0; i < n.options.tree.order.length; i++)
                                                                    if (i > t) {
                                                                        var e = n.options.tree.order[i];
                                                                        delete n.currentAttributes[e], r[e] && (r[e].destroy(), delete r[e])
                                                                    }
                                                                if (o) {
                                                                    for (var a = null, i = 0; i < n.options.tree.data.length; i++) {
                                                                        var s = !0,
                                                                            l = n.options.tree.data[i].attributes;
                                                                        for (var u in n.currentAttributes)
                                                                            if (l[u] !== n.currentAttributes[u]) {
                                                                                s = !1;
                                                                                break
                                                                            }
                                                                        s && (a = n.options.tree.data[i].value)
                                                                    }
                                                                    a && n.setValue(a)
                                                                }
                                                                n.refreshOptionTreeControls()
                                                            }), a.show(), l()
                                                        }
                                                    })
                                                }
                                            }(s, o, d, n.controls, n.optionTreeHolder, h);
                                        u.push(f), l += "~" + o + "=" + n.currentAttributes[o]
                                    }
                                    c++
                                } else n.controls[o] && (n.controls[o].destroy(), delete n.controls[o]);
                            else n.controls[o] && (n.controls[o].destroy(), delete n.controls[o])
                        }
                        s++
                    } while (s < n.options.tree.order.length);
                    t.series(u, function() {
                        i && i()
                    })
                },
                getType: function() {
                    return "any"
                },
                getTitle: function() {
                    return "Option Tree"
                },
                getDescription: function() {
                    return "Option Tree"
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {
                            tree: {
                                type: "object",
                                properties: {
                                    options: {
                                        type: "object"
                                    },
                                    order: {
                                        type: "array",
                                        items: {
                                            type: "string"
                                        }
                                    },
                                    data: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                value: {
                                                    type: "any"
                                                },
                                                attributes: {
                                                    type: "object"
                                                }
                                            }
                                        }
                                    },
                                    horizontal: {
                                        type: "boolean"
                                    }
                                }
                            }
                        }
                    })
                },
                getOptionsForOptions: function() {
                    return t.merge(this.base(), {
                        fields: {}
                    })
                }
            }), t.registerFieldClass("optiontree", t.Fields.OptionTreeField)
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.PasswordField = t.Fields.TextField.extend({
                getFieldType: function() {
                    return "password"
                },
                setup: function() {
                    this.base(), this.schema.pattern || (this.schema.pattern = t.regexps.password)
                },
                handleValidate: function() {
                    var e = this.base(),
                        t = this.validation;
                    return t.invalidPattern.status || (t.invalidPattern.message = this.getMessage("invalidPassword")), e
                },
                getTitle: function() {
                    return "Password Field"
                },
                getDescription: function() {
                    return "Password Field."
                },
                getSchemaOfSchema: function() {
                    var e = this.schema && this.schema.pattern ? this.schema.pattern : /^[0-9a-zA-Z\x20-\x7E]*$/;
                    return t.merge(this.base(), {
                        properties: {
                            pattern: {
                                title: "Pattern",
                                description: "Field Pattern in Regular Expression",
                                type: "string",
                                "default": this.schema.pattern,
                                "enum": [e],
                                readonly: !0
                            },
                            format: {
                                title: "Format",
                                description: "Property data format",
                                type: "string",
                                "default": "password",
                                "enum": ["password"],
                                readonly: !0
                            }
                        }
                    })
                },
                getOptionsForSchema: function() {
                    return t.merge(this.base(), {
                        fields: {
                            format: {
                                type: "text"
                            }
                        }
                    })
                }
            }), t.registerMessages({
                invalidPassword: "Invalid Password"
            }), t.registerFieldClass("password", t.Fields.PasswordField), t.registerDefaultFormatFieldMapping("password", "password")
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.PersonalNameField = t.Fields.TextField.extend({
                getFieldType: function() {
                    return "personalname"
                },
                setValue: function(e) {
                    for (var t = "", i = 0; i < e.length; i++) t += 0 === i ? e.charAt(i).toUpperCase() : " " === e.charAt(i - 1) || "-" === e.charAt(i - 1) || "'" === e.charAt(i - 1) ? e.charAt(i).toUpperCase() : e.charAt(i);
                    t != this.getValue() && this.base(t)
                },
                onKeyPress: function(e) {
                    this.base(e);
                    var i = this;
                    t.later(25, this, function() {
                        var e = i.getValue();
                        i.setValue(e)
                    })
                },
                getTitle: function() {
                    return "Personal Name"
                },
                getDescription: function() {
                    return "Text Field for personal name with captical letter for first letter & after hyphen, space or apostrophe."
                }
            }), t.registerFieldClass("personalname", t.Fields.PersonalNameField)
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.PhoneField = t.Fields.TextField.extend({
                setup: function() {
                    this.inputType = "tel", this.base(), this.schema.pattern || (this.schema.pattern = t.regexps.phone), t.isEmpty(this.options.maskString) && (this.options.maskString = "(999) 999-9999")
                },
                postRender: function(e) {
                    this.base(function() {
                        e()
                    })
                },
                handleValidate: function() {
                    var e = this.base(),
                        t = this.validation;
                    return t.invalidPattern.status || (t.invalidPattern.message = this.getMessage("invalidPhone")), e
                },
                getFieldType: function() {
                    return "phone"
                },
                getTitle: function() {
                    return "Phone Field"
                },
                getDescription: function() {
                    return "Phone Field."
                },
                getSchemaOfSchema: function() {
                    var e = this.schema && this.schema.pattern ? this.schema.pattern : t.regexps.phone;
                    return t.merge(this.base(), {
                        properties: {
                            pattern: {
                                title: "Pattern",
                                description: "Field Pattern in Regular Expression",
                                type: "string",
                                "default": e,
                                "enum": [e],
                                readonly: !0
                            },
                            format: {
                                title: "Format",
                                description: "Property data format",
                                type: "string",
                                "default": "phone",
                                "enum": ["phone"],
                                readonly: !0
                            }
                        }
                    })
                },
                getOptionsForSchema: function() {
                    return t.merge(this.base(), {
                        fields: {
                            format: {
                                type: "text"
                            }
                        }
                    })
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {
                            maskString: {
                                title: "Field Mask String",
                                description: "Expression for field mask",
                                type: "string",
                                "default": "(999) 999-9999"
                            }
                        }
                    })
                }
            }), t.registerMessages({
                invalidPhone: "Invalid Phone Number, e.g. (123) 456-9999"
            }), t.registerFieldClass("phone", t.Fields.PhoneField), t.registerDefaultFormatFieldMapping("phone", "phone")
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.SearchField = t.Fields.TextField.extend({
                setup: function() {
                    this.inputType = "search", this.base(), this.options.attributes.results = 5
                },
                getFieldType: function() {
                    return "search"
                },
                getType: function() {
                    return "string"
                },
                getTitle: function() {
                    return "Search Field"
                },
                getDescription: function() {
                    return "A search box field"
                }
            }), t.registerFieldClass("search", t.Fields.SearchField), t.registerDefaultSchemaFieldMapping("search", "search")
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.usHoldings = {}, t.usHoldings.territories = {
                "American Samoa": "AS",
                "District Of Columbia": "DC",
                "Federated States Of Micronesia": "FM",
                Guam: "GU",
                "Marshall Islands": "MH",
                "Northern Mariana Islands": "MP",
                Palau: "PW",
                "Puerto Rico": "PR",
                "Virgin Islands": "VI"
            }, t.usHoldings.states = {
                Alabama: "AL",
                Alaska: "AK",
                Arizona: "AZ",
                Arkansas: "AR",
                California: "CA",
                Colorado: "CO",
                Connecticut: "CT",
                Delaware: "DE",
                Florida: "FL",
                Georgia: "GA",
                Hawaii: "HI",
                Idaho: "ID",
                Illinois: "IL",
                Indiana: "IN",
                Iowa: "IA",
                Kansas: "KS",
                Kentucky: "KY",
                Louisiana: "LA",
                Maine: "ME",
                Maryland: "MD",
                Massachusetts: "MA",
                Michigan: "MI",
                Minnesota: "MN",
                Mississippi: "MS",
                Missouri: "MO",
                Montana: "MT",
                Nebraska: "NE",
                Nevada: "NV",
                "New Hampshire": "NH",
                "New Jersey": "NJ",
                "New Mexico": "NM",
                "New York": "NY",
                "North Carolina": "NC",
                "North Dakota": "ND",
                Ohio: "OH",
                Oklahoma: "OK",
                Oregon: "OR",
                Pennsylvania: "PA",
                "Rhode Island": "RI",
                "South Carolina": "SC",
                "South Dakota": "SD",
                Tennessee: "TN",
                Texas: "TX",
                Utah: "UT",
                Vermont: "VT",
                Virginia: "VA",
                Washington: "WA",
                "West Virginia": "WV",
                Wisconsin: "WI",
                Wyoming: "WY"
            }, t.Fields.StateField = t.Fields.SelectField.extend({
                getFieldType: function() {
                    return "state"
                },
                setup: function() {
                    t.isUndefined(this.options.capitalize) && (this.options.capitalize = !1), t.isUndefined(this.options.includeStates) && (this.options.includeStates = !0), t.isUndefined(this.options.includeTerritories) && (this.options.includeTerritories = !0), t.isUndefined(this.options.format) && (this.options.format = "name"), "name" === this.options.format || "code" === this.options.format || (t.logError("The configured state format: " + this.options.format + " is not a legal value [name, code]"), this.options.format = "name");
                    var e = t.retrieveUSHoldings(this.options.includeStates, this.options.includeTerritories, "code" === this.options.format, this.options.capitalize);
                    this.schema["enum"] = e.keys, this.options.optionLabels = e.values, this.base()
                },
                getTitle: function() {
                    return "State Field"
                },
                getDescription: function() {
                    return "Provides a dropdown selector of states and/or territories in the United States, keyed by their two-character code."
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {
                            format: {
                                title: "Format",
                                description: "How to represent the state values in the selector",
                                type: "string",
                                "default": "name",
                                "enum": ["name", "code"],
                                readonly: !0
                            },
                            capitalize: {
                                title: "Capitalize",
                                description: "Whether the values should be capitalized",
                                type: "boolean",
                                "default": !1,
                                readonly: !0
                            },
                            includeStates: {
                                title: "Include States",
                                description: "Whether to include the states of the United States",
                                type: "boolean",
                                "default": !0,
                                readonly: !0
                            },
                            includeTerritories: {
                                title: "Include Territories",
                                description: "Whether to include the territories of the United States",
                                type: "boolean",
                                "default": !0,
                                readonly: !0
                            }
                        }
                    })
                },
                getOptionsForOptions: function() {
                    return t.merge(this.base(), {
                        fields: {
                            format: {
                                type: "text"
                            },
                            capitalize: {
                                type: "checkbox"
                            },
                            includeStates: {
                                type: "checkbox"
                            },
                            includeTerritories: {
                                type: "checkbox"
                            }
                        }
                    })
                }
            }), t.registerFieldClass("state", t.Fields.StateField), t.registerDefaultFormatFieldMapping("state", "state"), t.retrieveUSHoldings = function() {
                return function(i, n, a, r) {
                    var s = {
                            keys: [],
                            values: []
                        },
                        o = e.extend({}, i ? t.usHoldings.states : {}, n ? t.usHoldings.territories : {}),
                        l = Object.keys(o);
                    l.sort();
                    for (var u in l) {
                        var c = l[u],
                            p = o[c],
                            d = a ? p : c;
                        r && (d = d.toUpperCase()), s.keys.push(p), s.values.push(d)
                    }
                    return s
                }
            }()
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.TableField = t.Fields.ArrayField.extend({
                setup: function() {
                    var i = this;
                    i.options || (i.options = {}), "undefined" == typeof i.options.animate && (i.options.animate = !1), "undefined" == typeof this.options.toolbarSticky && (this.options.toolbarSticky = !0), this.base(), this.options.items.type || (this.options.items.type = "tablerow"), this.options.datatable && (this.options.datatables = this.options.datatable), "undefined" == typeof this.options.datatables && (this.options.datatables = {
                        paging: !1,
                        lengthChange: !1,
                        info: !1,
                        searching: !1,
                        ordering: !0
                    }), "undefined" == typeof this.options.showActionsColumn && (this.options.showActionsColumn = !0, this.options.readonly && (this.options.showActionsColumn = !1), this.isDisplayOnly() && (this.options.showActionsColumn = !1)), this.options.datatables.columns = [], e.fn.dataTableExt && !e.fn.DataTable.ext.type.search.alpaca && (e.fn.DataTable.ext.order.alpaca = function(i, n) {
                        return this.api().column(n, {
                            order: "index"
                        }).nodes().map(function(i, n) {
                            var a = e(i).children().attr("data-alpaca-field-id");
                            return t.fieldInstances[a].getValue()
                        })
                    }, e.fn.dataTableExt.afnFiltering.push(function(i, n, a, r, s) {
                        var o = e(i.nTableWrapper).find(".dataTables_filter input[type='search']").val();
                        if (!o) return !0;
                        o = "" + o, o = e.trim(o), o = o.toLowerCase();
                        for (var l = !1, u = 0; u < r.length; u++) {
                            var c = r[u];
                            if (c) {
                                var p = c.indexOf("data-alpaca-field-id=");
                                if (p > -1) {
                                    var d = e(c).attr("data-alpaca-field-id"),
                                        h = t.fieldInstances[d].getValue();
                                    if (h && (h = "" + h, h = h.toLowerCase(), h.indexOf(o) > -1)) {
                                        l = !0;
                                        break
                                    }
                                }
                            }
                        }
                        return l
                    }))
                },
                getFieldType: function() {
                    return "table"
                },
                prepareContainerModel: function(e) {
                    var t = this;
                    t.base(function(i) {
                        if (i.headers = [], t.schema.items && t.schema.items.properties)
                            for (var n in t.schema.items.properties) {
                                var a = {};
                                a.id = n, a.title = t.schema.items.properties[n].title, a.hidden = !1, t.options.items && t.options.items.fields && t.options.items.fields[n] && (t.options.items.fields[n].label && (a.title = t.options.items.fields[n].label), "hidden" === t.options.items.fields[n].type && (a.hidden = !0)), i.headers.push(a)
                            }
                        e(i)
                    })
                },
                afterRenderContainer: function(t, i) {
                    var n = this;
                    this.base(t, function() {
                        n.cleanupDomInjections();
                        var t = e(this.container).find("table");
                        if (n.applyStyle("table", t), n.options.datatables && e.fn.DataTable) {
                            for (var a in n.schema.items.properties) n.options.datatables.columns.push({
                                orderable: !0,
                                orderDataType: "alpaca"
                            });
                            n.options.showActionsColumn && n.options.datatables.columns.push({
                                orderable: !1,
                                name: "actions"
                            }), e(this.container).find("table").DataTable(n.options.datatables)
                        }
                        e(t).find("thead > tr > th[data-header-id]").each(function() {
                            var t = e(this).attr("data-header-id"),
                                i = n.schema.items.properties[t],
                                a = null;
                            n.options.items.fields && n.options.items.fields[t] && (a = n.options.items.fields[t]), i.required || a && a.required ? n.fireCallback("tableHeaderRequired", i, a, this) : n.fireCallback("tableHeaderOptional", i, a, this)
                        }), i()
                    }.bind(n))
                },
                cleanupDomInjections: function() {
                    var i = function(t) {
                        var i = e(t).parent(),
                            n = e(t).children(),
                            a = e(t).attr("class").split(/\s+/);
                        e.each(a, function(t, n) {
                            "alpaca-merge-up" === n || e(i).addClass(n)
                        }), e.each(e(t)[0].attributes, function() {
                            this.name && 0 === this.name.indexOf("data-") && e(i).attr(this.name, this.value)
                        }), n.length > 0 ? e(t).replaceWith(n) : e(t).remove()
                    };
                    this.getFieldEl().find("tr > .alpaca-field").each(function() {
                        i(this)
                    }), this.getFieldEl().find("tr > .alpaca-container").each(function() {
                        i(this)
                    });
                    var n = this.getFieldEl().find("." + t.MARKER_CLASS_ARRAY_ITEM_ACTIONBAR);
                    n.length > 0 && n.each(function() {
                        var t = e("<td class='actionbar' nowrap='nowrap'></td>");
                        e(this).before(t), e(t).append(this)
                    }), this.getFieldEl().find(".alpaca-merge-up").each(function() {
                        i(this)
                    })
                },
                doResolveItemContainer: function() {
                    var t = this;
                    return e(t.container).find("table tbody")
                },
                doAfterAddItem: function(e) {
                    var t = this;
                    t.cleanupDomInjections()
                },
                doAfterRemoveItem: function(e) {
                    var t = this;
                    t.cleanupDomInjections()
                },
                getType: function() {
                    return "array"
                },
                getTitle: function() {
                    return "Table Field"
                },
                getDescription: function() {
                    return "Renders array items into a table"
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {
                            datatables: {
                                title: "DataTables Configuration",
                                description: "Optional configuration to be passed to the underlying DataTables Plugin.",
                                type: "object"
                            },
                            showActionsColumn: {
                                title: "Show Actions Column",
                                "default": !0,
                                description: "Whether to show or hide the actions column.",
                                type: "boolean"
                            }
                        }
                    })
                },
                getOptionsForOptions: function() {
                    return t.merge(this.base(), {
                        fields: {
                            datatables: {
                                type: "object"
                            },
                            showActionsColumn: {
                                type: "checkbox"
                            }
                        }
                    })
                }
            }), t.registerFieldClass("table", t.Fields.TableField)
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.TableRowField = t.Fields.ObjectField.extend({
                prepareContainerModel: function(e) {
                    var t = this;
                    this.base(function(i) {
                        i.options.showActionsColumn = t.parent.options.showActionsColumn;
                        for (var n = 0; n < i.items.length; n++) "hidden" === i.items[n].options.type && (i.items[n].hidden = !0);
                        e(i)
                    })
                },
                getFieldType: function() {
                    return "tablerow"
                },
                getType: function() {
                    return "object"
                },
                getTitle: function() {
                    return "Table Row Field"
                },
                getDescription: function() {
                    return "Renders object items into a table row"
                }
            }), t.registerFieldClass("tablerow", t.Fields.TableRowField)
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.TagField = t.Fields.LowerCaseField.extend({
                getFieldType: function() {
                    return "tag"
                },
                setup: function() {
                    this.base(), this.options.separator || (this.options.separator = ",")
                },
                getControlValue: function() {
                    var e = this.base();
                    return "" === e ? [] : e.split(this.options.separator)
                },
                setValue: function(e) {
                    return "" !== e ? e ? void this.base(e.join(this.options.separator)) : void this.base("") : void 0
                },
                onBlur: function(t) {
                    this.base(t);
                    var i = this.getValue(),
                        n = [];
                    e.each(i, function(e, t) {
                        "" !== t.trim() && n.push(t.trim())
                    }), this.setValue(n)
                },
                getTitle: function() {
                    return "Tag Field"
                },
                getDescription: function() {
                    return "Text field for entering list of tags separated by delimiter."
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {
                            separator: {
                                title: "Separator",
                                description: "Separator used to split tags.",
                                type: "string",
                                "default": ","
                            }
                        }
                    })
                },
                getOptionsForOptions: function() {
                    return t.merge(this.base(), {
                        fields: {
                            separator: {
                                type: "text"
                            }
                        }
                    })
                }
            }), t.registerFieldClass("tag", t.Fields.TagField)
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.TimeField = t.Fields.DateField.extend({
                getFieldType: function() {
                    return "time"
                },
                getDefaultFormat: function() {
                    return "h:mm:ss a"
                },
                setup: function() {
                    this.base()
                },
                getTitle: function() {
                    return "Time Field"
                },
                getDescription: function() {
                    return "Time Field"
                }
            }), t.registerMessages({
                invalidTime: "Invalid time"
            }), t.registerFieldClass("time", t.Fields.TimeField), t.registerDefaultFormatFieldMapping("time", "time")
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.TinyMCEField = t.Fields.TextAreaField.extend({
                getFieldType: function() {
                    return "tinymce"
                },
                setup: function() {
                    var e = this;
                    this.data || (this.data = ""), e.options.toolbar || (e.options.toolbar = "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"), this.base()
                },
                setValue: function(e) {
                    var t = this;
                    this.base(e), t.editor && t.editor.setContent(e)
                },
                getControlValue: function() {
                    var e = this,
                        t = null;
                    return e.editor && (t = e.editor.getContent()), t
                },
                initControlEvents: function() {
                    var e = this;
                    setTimeout(function() {
                        e.editor && (e.editor.on("click", function(t) {
                            e.onClick.call(e, t), e.trigger("click", t)
                        }), e.editor.on("change", function(t) {
                            e.onChange(), e.triggerWithPropagation("change", t)
                        }), e.editor.on("blur", function(t) {
                            e.onBlur(), e.trigger("blur", t)
                        }), e.editor.on("focus", function(t) {
                            e.onFocus.call(e, t), e.trigger("focus", t)
                        }), e.editor.on("keypress", function(t) {
                            e.onKeyPress.call(e, t), e.trigger("keypress", t)
                        }), e.editor.on("keyup", function(t) {
                            e.onKeyUp.call(e, t), e.trigger("keyup", t)
                        }), e.editor.on("keydown", function(t) {
                            e.onKeyDown.call(e, t), e.trigger("keydown", t)
                        }))
                    }, 525)
                },
                afterRenderControl: function(e, t) {
                    var i = this;
                    this.base(e, function() {
                        if (!i.isDisplayOnly() && i.control && "undefined" != typeof tinyMCE) {
                            var e = i.control[0].id;
                            setTimeout(function() {
                                tinyMCE.init({
                                    init_instance_callback: function(e) {
                                        i.editor = e, t()
                                    },
                                    selector: "#" + e,
                                    toolbar: i.options.toolbar
                                })
                            }, 500)
                        }
                    })
                },
                destroy: function() {
                    var e = this;
                    e.editor && (e.editor.remove(), e.editor = null), this.base()
                },
                getTitle: function() {
                    return "TinyMCE Editor"
                },
                getDescription: function() {
                    return "Provides an instance of a TinyMCE control for use in editing HTML."
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {
                            toolbar: {
                                title: "TinyMCE toolbar options",
                                description: "Toolbar options for TinyMCE plugin.",
                                type: "string"
                            }
                        }
                    })
                },
                getOptionsForOptions: function() {
                    return t.merge(this.base(), {
                        fields: {
                            toolbar: {
                                type: "text"
                            }
                        }
                    })
                }
            }), t.registerFieldClass("tinymce", t.Fields.TinyMCEField)
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.UploadField = t.Fields.TextField.extend({
                    constructor: function(i, n, a, r, s, o) {
                        var l = this;
                        this.base(i, n, a, r, s, o), this.wrapTemplate = function(i) {
                            return function(n) {
                                for (var a = n.files, r = n.formatFileSize, s = n.options, o = [], u = 0; u < a.length; u++) {
                                    var c = {};
                                    c.options = l.options, c.file = t.cloneObject(a[u]), c.size = r(c.size), c.buttons = l.options.buttons, c.view = l.view, c.fileIndex = u;
                                    var p = t.tmpl(l.view.getTemplateDescriptor(i), c, l);
                                    o.push(p[0])
                                }
                                return o = e(o), e(o).each(function() {
                                    s.fileupload && s.fileupload.autoUpload && e(this).find("button.start").css("display", "none"), l.handleWrapRow(this, s);
                                    var t = e(this);
                                    e(this).find("button.delete").on("click", function() {
                                        var i = e(t).find("button.delete"),
                                            n = e(i).attr("data-file-index"),
                                            r = a[n];
                                        l.onFileDelete.call(l, t, i, r), l.triggerWithPropagation("change"), setTimeout(function() {
                                            l.refreshUIState()
                                        }, 200)
                                    })
                                }), e(o)
                            }
                        }
                    },
                    getFieldType: function() {
                        return "upload"
                    },
                    setup: function() {
                        var e = this;
                        this.base(), e.options.renderButtons = !1, e.options.buttons || (e.options.buttons = []), e.options.hideDeleteButton || e.options.buttons.push({
                            key: "delete",
                            isDelete: !0
                        }), "undefined" == typeof e.options.multiple && (e.options.multiple = !1), "undefined" == typeof e.options.showUploadPreview && (e.options.showUploadPreview = !0), "undefined" == typeof e.options.showHeaders && (e.options.showHeaders = !0), e.data || (e.data = []), e.options.upload || (e.options.upload = {}), "undefined" == typeof e.options.maxNumberOfFiles && (e.options.upload.maxNumberOfFiles ? (e.options.maxNumberOfFiles = e.options.upload.maxNumberOfFiles, 1 === e.options.maxNumberOfFiles ? e.options.multiple = !1 : e.options.maxNumberOfFiles > 1 && (e.options.multiple = !0)) : (e.options.maxNumberOfFiles = 1, "boolean" == typeof e.options.multiple && e.options.multiple && (e.options.maxNumberOfFiles = -1)), e.options.maxNumberOfFiles && (e.options.upload.maxNumberOfFiles = e.options.maxNumberOfFiles)), "undefined" == typeof e.options.maxFileSize && (e.options.maxFileSize = e.options.upload.maxFileSize ? e.options.upload.maxFileSize : -1, e.options.maxFileSize && (e.options.upload.maxFileSize = e.options.maxFileSize)), "undefined" == typeof e.options.fileTypes && (e.options.fileTypes = e.options.upload.acceptFileTypes ? e.options.upload.acceptFileTypes : null, e.options.fileTypes && (e.options.upload.acceptFileTypes = e.options.fileTypes)), e.options.errorHandler || (e.options.errorHandler = function(e) {
                            alert(e.join("\n"))
                        });
                        var i = e.determineCsrfToken();
                        i && (e.options.upload || (e.options.upload = {}), e.options.upload.headers || (e.options.upload.headers = {}), e.options.upload.headers[t.CSRF_HEADER_NAME] = i)
                    },
                    determineCsrfToken: function() {
                        var e = t.CSRF_TOKEN;
                        if (!e)
                            for (var i = 0; i < t.CSRF_COOKIE_NAMES.length; i++) {
                                var n = t.CSRF_COOKIE_NAMES[i],
                                    a = t.readCookie(n);
                                if (a) {
                                    e = a;
                                    break
                                }
                            }
                        return e
                    },
                    prepareControlModel: function(e) {
                        var t = this;
                        t.base(function(i) {
                            i.chooseButtonLabel = t.options.chooseButtonLabel, i.chooseButtonLabel || (i.chooseButtonLabel = t.getMessage("chooseFiles"), 1 === t.options.maxNumberOfFiles && (i.chooseButtonLabel = t.getMessage("chooseFile"))), i.dropZoneMessage = t.options.dropZoneMessage, i.dropZoneMessage || (i.dropZoneMessage = t.getMessage("dropZoneSingle"), 1 === i.maxNumberOfFiles && (i.dropZoneMessage = t.getMessage("dropZoneMultiple"))), e(i)
                        })
                    },
                    afterRenderControl: function(t, i) {
                        var n = this;
                        this.base(t, function() {
                            n.handlePostRender(function() {
                                n.isDisplayOnly() && (e(n.control).find("button").hide(), e(n.control).find(".btn").hide(), e(n.control).find(".alpaca-fileupload-chooserow").hide(), e(n.control).find(".dropzone-message").hide()), i()
                            })
                        })
                    },
                    getUploadTemplate: function() {
                        return this.wrapTemplate("control-upload-partial-upload")
                    },
                    getDownloadTemplate: function() {
                        return this.wrapTemplate("control-upload-partial-download")
                    },
                    handlePostRender: function(t) {
                        var i = this,
                            n = this.control,
                            a = {};
                        if (a.dataType = "json", a.uploadTemplateId = null, a.uploadTemplate = this.getUploadTemplate(), a.downloadTemplateId = null, a.downloadTemplate = this.getDownloadTemplate(), a.filesContainer = e(n).find(".files"), a.dropZone = e(n).find(".fileupload-active-zone"), a.url = "/", a.method = "post", a.showUploadPreview = i.options.showUploadPreview, i.options.upload)
                            for (var r in i.options.upload) a[r] = i.options.upload[r];
                        i.options.multiple && (e(n).find(".alpaca-fileupload-input").attr("multiple", !0), e(n).find(".alpaca-fileupload-input").attr("name", i.name + "_files[]")), e(n).find(".progress").css("display", "none"), a.progressall = function(t, i) {
                            var a = !1;
                            if (i.loaded < i.total && (a = !0), a) {
                                e(n).find(".progress").css("display", "block");
                                var r = parseInt(i.loaded / i.total * 100, 10);
                                e("#progress .progress-bar").css("width", r + "%")
                            } else e(n).find(".progress").css("display", "none")
                        }, a.add = function(e, t) {
                            var n = [],
                                a = 0;
                            do {
                                var r = !1;
                                if (a < t.originalFiles.length) {
                                    if (i.options.fileTypes) {
                                        var s = i.options.fileTypes;
                                        "string" == typeof i.options.fileTypes && (s = new RegExp(i.options.fileTypes)), s.test(t.originalFiles[a].type) || (n.push("Not an accepted file type: " + t.originalFiles[a].type), r = !0)
                                    }
                                    i.options.maxFileSize > -1 && t.originalFiles[a].size > i.options.maxFileSize && (n.push("Filesize is too big: " + t.originalFiles[a].size), r = !0)
                                }
                                r ? a++ : a++
                            } while (a < t.originalFiles.length);
                            n.length > 0 ? i.options.errorHandler(n) : t.submit()
                        }, i.applyConfiguration(a);
                        var s = i.fileUpload = e(n).find(".alpaca-fileupload-input").fileupload(a);
                        s.bindFirst("fileuploaddone", function(e, t) {
                            var n = i.options.enhanceFiles;
                            n ? n(a, t) : i.enhanceFiles(a, t), t.files = t.result.files, setTimeout(function() {
                                i.refreshUIState()
                            }, 250)
                        }), s.bindFirst("fileuploadsubmit", function(t, n) {
                            i.options.properties && e.each(n.files, function(e, t) {
                                for (var a in i.options.properties) {
                                    var r = "property" + e + "__" + a,
                                        s = i.options.properties[a];
                                    s = i.applyTokenSubstitutions(s, e, t), n.formData || (n.formData = {}), n.formData[r] = s
                                }
                            }), i.options.parameters && e.each(n.files, function(e, t) {
                                for (var a in i.options.parameters) {
                                    var r = "param" + e + "__" + a,
                                        s = i.options.parameters[a];
                                    s = i.applyTokenSubstitutions(s, e, t), n.formData || (n.formData = {}), n.formData[r] = s
                                }
                            })
                        }), s.bind("fileuploaddone", function(e, t) {
                            var n = i.getValue(),
                                a = function(e) {
                                    return e === t.files.length ? void i.setValue(n) : void i.convertFileToDescriptor(t.files[e], function(t, i) {
                                        i && n.push(i), a(e + 1)
                                    })
                                };
                            a(0)
                        }), s.bind("fileuploadfail", function(e, t) {
                            t.errorThrown && i.onUploadFail(t)
                        }), s.bind("fileuploadalways", function(e, t) {
                            i.refreshUIState()
                        }), i.applyBindings(s, n), i.preload(s, n, function(a) {
                            if (a) {
                                var r = e(i.control).find(".alpaca-fileupload-input");
                                e(r).fileupload("option", "done").call(r, e.Event("done"), {
                                    result: {
                                        files: a
                                    }
                                }), i.afterPreload(s, n, a, function() {
                                    t()
                                })
                            } else t()
                        }), "undefined" != typeof document && e(document).bind("drop dragover", function(e) {
                            e.preventDefault()
                        })
                    },
                    handleWrapRow: function(e, t) {},
                    applyTokenSubstitutions: function(e, t, i) {
                        var n = {
                                index: t,
                                name: i.name,
                                size: i.size,
                                url: i.url,
                                thumbnailUrl: i.thumbnailUrl
                            },
                            a = -1,
                            r = 0;
                        do
                            if (a = e.indexOf("{", r), a > -1) {
                                var s = e.indexOf("}", a);
                                if (s > -1) {
                                    var o = e.substring(a + car.length, s),
                                        l = n[o];
                                    l && (e = e.substring(0, a) + l + e.substring(s + 1)), r = s + 1
                                }
                            }
                        while (a > -1);
                        return e
                    },
                    removeValue: function(e) {
                        for (var t = this, i = t.getValue(), n = 0; n < i.length; n++)
                            if (i[n].id == e) {
                                i.splice(n, 1);
                                break
                            }
                        t.setValue(i)
                    },
                    applyConfiguration: function(e) {},
                    applyBindings: function(e) {},
                    convertFileToDescriptor: function(e, t) {
                        var i = {
                            id: e.id,
                            name: e.name,
                            size: e.size,
                            url: e.url,
                            thumbnailUrl: e.thumbnailUrl,
                            deleteUrl: e.deleteUrl,
                            deleteType: e.deleteType
                        };
                        t(null, i)
                    },
                    convertDescriptorToFile: function(e, t) {
                        var i = {
                            id: e.id,
                            name: e.name,
                            size: e.size,
                            url: e.url,
                            thumbnailUrl: e.thumbnailUrl,
                            deleteUrl: e.deleteUrl,
                            deleteType: e.deleteType
                        };
                        t(null, i)
                    },
                    enhanceFiles: function(e, t) {},
                    preload: function(e, t, i) {
                        var n = this,
                            a = [],
                            r = n.getValue(),
                            s = function(e) {
                                return e == r.length ? void i(a) : void n.convertDescriptorToFile(r[e], function(t, i) {
                                    i && a.push(i), s(e + 1)
                                })
                            };
                        s(0)
                    },
                    afterPreload: function(e, t, i, n) {
                        var a = this;
                        a.refreshUIState(), n()
                    },
                    getControlValue: function() {
                        return this.data
                    },
                    setValue: function(e) {
                        e || (e = []), this.data = e, this.updateObservable(), this.triggerUpdate()
                    },
                    reload: function(t) {
                        var i = this,
                            n = this.getValue(),
                            a = [],
                            r = function(s) {
                                if (s === n.length) {
                                    var o = e(i.control).find(".alpaca-fileupload-input");
                                    return e(o).fileupload("option", "done").call(o, e.Event("done"), {
                                        result: {
                                            files: a
                                        }
                                    }), i.refreshValidationState(), void t()
                                }
                                i.convertDescriptorToFile(n[s], function(e, t) {
                                    t && a.push(t), r(s + 1)
                                })
                            };
                        r(0)
                    },
                    plugin: function() {
                        var t = this;
                        return e(t.control).find(".alpaca-fileupload-input").data().blueimpFileupload
                    },
                    refreshUIState: function() {
                        var e = this,
                            t = e.plugin();
                        if (t) {
                            var i = e.options.maxNumberOfFiles;
                            e.refreshButtons(t.options.getNumberOfFiles && t.options.getNumberOfFiles() >= i ? !1 : !0)
                        }
                    },
                    refreshButtons: function(t) {
                        var i = this;
                        e(i.control).find(".btn.fileinput-button").prop("disabled", !0), e(i.control).find(".btn.fileinput-button").attr("disabled", "disabled"), e(i.control).find(".fileupload-active-zone p.dropzone-message").css("display", "none"), t && (e(i.control).find(".btn.fileinput-button").prop("disabled", !1), e(i.control).find(".btn.fileinput-button").attr("disabled", null), e(i.control).find(".fileupload-active-zone p.dropzone-message").css("display", "block"))
                    },
                    onFileDelete: function(i, n, a) {
                        var r = this,
                            s = a.deleteUrl,
                            o = a.deleteType,
                            l = {
                                method: o,
                                url: s,
                                headers: {}
                            },
                            u = r.determineCsrfToken();
                        u && (l.headers[t.CSRF_HEADER_NAME] = u), e.ajax(l)
                    },
                    onUploadFail: function(e) {
                        for (var t = this, i = 0; i < e.files.length; i++) e.files[i].error = e.errorThrown;
                        t.options.uploadFailHandler && t.options.uploadFailHandler.call(t, e)
                    },
                    disable: function() {
                        e(this.field).find(".fileinput-button").prop("disabled", !0), e(this.field).find(".fileinput-button").attr("disabled", "disabled"), e(this.field).find(".alpaca-fileupload-well").css("visibility", "hidden")
                    },
                    enable: function() {
                        e(this.field).find(".fileinput-button").prop("disabled", !1), e(this.field).find(".fileinput-button").removeAttr("disabled"), e(this.field).find(".alpaca-fileupload-well").css("visibility", "visible")
                    },
                    getTitle: function() {
                        return "Upload Field"
                    },
                    getDescription: function() {
                        return "Provides an upload field with support for thumbnail preview"
                    },
                    getType: function() {
                        return "array"
                    },
                    getSchemaOfOptions: function() {
                        return t.merge(this.base(), {
                            properties: {
                                maxNumberOfFiles: {
                                    title: "Maximum Number of Files",
                                    description: "The maximum number of files to allow to be uploaded.  If greater than zero, the maximum number will be constrained.  If -1, then no limit is imposed.",
                                    type: "number",
                                    "default": 1
                                },
                                maxFileSize: {
                                    title: "Maximum File Size (in bytes)",
                                    description: "The maximum file size allowed per upload.  If greater than zero, the maximum file size will be limited to the given size in bytes.  If -1, then no limit is imposed.",
                                    type: "number",
                                    "default": -1
                                },
                                fileTypes: {
                                    title: "File Types",
                                    description: "A regular expression limiting the file types that can be uploaded based on filename",
                                    type: "string"
                                },
                                multiple: {
                                    title: "Multiple",
                                    description: "Whether to allow multiple file uploads.  If maxNumberOfFiles is not specified, multiple will toggle between 1 and unlimited.",
                                    type: "boolean",
                                    "default": !1
                                },
                                showUploadPreview: {
                                    title: "Show Upload Preview",
                                    description: "Whether to show thumbnails for uploaded assets (requires preview support)",
                                    type: "boolean",
                                    "default": !0
                                },
                                errorHandler: {
                                    title: "Error Handler",
                                    description: "Optional function handler to be called when there is an error uploading one or more files.  This handler is typically used to instantiate a modal or other UI element to inform the end user.",
                                    type: "function"
                                },
                                uploadFailHandler: {
                                    title: "Upload Fail Handler",
                                    description: "Optional function handler to be called when one or more files fails to upload.  This function is responsible for parsing the underlying xHR request and populating the error message state.",
                                    type: "function"
                                }
                            }
                        })
                    }
                }), t.registerFieldClass("upload", t.Fields.UploadField),
                t.registerMessages({
                    chooseFile: "Choose file...",
                    chooseFiles: "Choose files...",
                    dropZoneSingle: "Click the Choose button or Drag and Drop a file here to upload...",
                    dropZoneMultiple: "Click the Choose button or Drag and Drop files here to upload..."
                }),
                function(e) {
                    function t(t) {
                        return o ? t.data("events") : e._data(t[0]).events
                    }

                    function i(e, i, n) {
                        var a = t(e),
                            r = a[i];
                        if (!o) {
                            var s = n ? r.splice(r.delegateCount - 1, 1)[0] : r.pop();
                            return void r.splice(n ? 0 : r.delegateCount || 0, 0, s)
                        }
                        n ? a.live.unshift(a.live.pop()) : r.unshift(r.pop())
                    }

                    function n(t, n, a) {
                        var r = n.split(/\s+/);
                        t.each(function() {
                            for (var t = 0; t < r.length; ++t) {
                                var n = e.trim(r[t]).match(/[^\.]+/i)[0];
                                i(e(this), n, a)
                            }
                        })
                    }
                    var a = e.fn.jquery.split("."),
                        r = parseInt(a[0]),
                        s = parseInt(a[1]),
                        o = 1 > r || 1 === r && 7 > s;
                    e.fn.bindFirst = function() {
                        var t = e.makeArray(arguments),
                            i = t.shift();
                        return i && (e.fn.bind.apply(this, arguments), n(this, i)), this
                    }
                }(e)
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.UpperCaseField = t.Fields.TextField.extend({
                getFieldType: function() {
                    return "uppercase"
                },
                setup: function() {
                    this.base(), this.data && (this.data = this.data.toUpperCase())
                },
                setValue: function(e) {
                    var i = null;
                    e && t.isString(e) && (i = e.toUpperCase()), i != this.getValue() && this.base(i)
                },
                onKeyPress: function(e) {
                    this.base(e);
                    var i = this;
                    t.later(25, this, function() {
                        var e = i.getValue();
                        i.setValue(e)
                    })
                },
                getTitle: function() {
                    return "Uppercase Text"
                },
                getDescription: function() {
                    return "Text field for uppercase text."
                }
            }), t.registerFieldClass("uppercase", t.Fields.UpperCaseField), t.registerDefaultFormatFieldMapping("uppercase", "uppercase")
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.URLField = t.Fields.TextField.extend({
                getFieldType: function() {
                    return "url"
                },
                setup: function() {
                    this.inputType = "url", this.base(), "undefined" == typeof this.options.allowIntranet && (this.options.allowIntranet = !1), this.schema.pattern = this.options.allowIntranet ? t.regexps["intranet-url"] : t.regexps.url, this.schema.format = "uri"
                },
                handleValidate: function() {
                    var e = this.base(),
                        t = this.validation;
                    return t.invalidPattern.status || (t.invalidPattern.message = this.getMessage("invalidURLFormat")), e
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {
                            allowIntranet: {
                                title: "Allow intranet",
                                description: "Allows URLs with unqualified hostnames"
                            }
                        }
                    })
                },
                getOptionsForOptions: function() {
                    return t.merge(this.base(), {
                        fields: {
                            allowIntranet: {
                                type: "checkbox"
                            }
                        }
                    })
                },
                getTitle: function() {
                    return "URL Field"
                },
                getDescription: function() {
                    return "Provides a text control with validation for an internet web address."
                }
            }), t.registerMessages({
                invalidURLFormat: "The URL provided is not a valid web address."
            }), t.registerFieldClass("url", t.Fields.URLField), t.registerDefaultFormatFieldMapping("url", "url")
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.Fields.ZipcodeField = t.Fields.TextField.extend({
                getFieldType: function() {
                    return "zipcode"
                },
                setup: function() {
                    this.base(), this.options.format = this.options.format ? this.options.format : "nine", "nine" === this.options.format ? this.schema.pattern = t.regexps["zipcode-nine"] : "five" === this.options.format ? this.schema.pattern = t.regexps["zipcode-five"] : (t.logError("The configured zipcode format: " + this.options.format + " is not a legal value [five, nine]"), this.options.format = "nine", this.schema.pattern = t.regexps["zipcode-nine"]), "nine" === this.options.format ? this.options.maskString = "99999-9999" : "five" === this.options.format && (this.options.maskString = "99999")
                },
                handleValidate: function() {
                    var e = this.base(),
                        t = this.validation;
                    return t.invalidPattern.status || ("nine" === this.options.format ? t.invalidPattern.message = this.getMessage("invalidZipcodeFormatNine") : "five" === this.options.format && (t.invalidPattern.message = this.getMessage("invalidZipcodeFormatFive"))), e
                },
                getSchemaOfOptions: function() {
                    return t.merge(this.base(), {
                        properties: {
                            format: {
                                title: "Format",
                                description: "How to represent the zipcode field",
                                type: "string",
                                "default": "five",
                                "enum": ["five", "nine"],
                                readonly: !0
                            }
                        }
                    })
                },
                getOptionsForOptions: function() {
                    return t.merge(this.base(), {
                        fields: {
                            format: {
                                type: "text"
                            }
                        }
                    })
                },
                getTitle: function() {
                    return "Zipcode Field"
                },
                getDescription: function() {
                    return "Provides a five or nine-digital US zipcode control with validation."
                }
            }), t.registerMessages({
                invalidZipcodeFormatFive: "Invalid Five-Digit Zipcode (#####)",
                invalidZipcodeFormatNine: "Invalid Nine-Digit Zipcode (#####-####)"
            }), t.registerFieldClass("zipcode", t.Fields.ZipcodeField), t.registerDefaultFormatFieldMapping("zipcode", "zipcode")
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.registerView({
                id: "base",
                title: "Abstract base view",
                messages: {
                    countries: {
                        afg: "Afghanistan",
                        ala: "Aland Islands",
                        alb: "Albania",
                        dza: "Algeria",
                        asm: "American Samoa",
                        and: "Andorra",
                        ago: "Angola",
                        aia: "Anguilla",
                        ata: "Antarctica",
                        atg: "Antigua and Barbuda",
                        arg: "Argentina",
                        arm: "Armenia",
                        abw: "Aruba",
                        aus: "Australia",
                        aut: "Austria",
                        aze: "Azerbaijan",
                        bhs: "Bahamas",
                        bhr: "Bahrain",
                        bgd: "Bangladesh",
                        brb: "Barbados",
                        blr: "Belarus",
                        bel: "Belgium",
                        blz: "Belize",
                        ben: "Benin",
                        bmu: "Bermuda",
                        btn: "Bhutan",
                        bol: "Bolivia",
                        bih: "Bosnia and Herzegovina",
                        bwa: "Botswana",
                        bvt: "Bouvet Island",
                        bra: "Brazil",
                        iot: "British Indian Ocean Territory",
                        brn: "Brunei Darussalam",
                        bgr: "Bulgaria",
                        bfa: "Burkina Faso",
                        bdi: "Burundi",
                        khm: "Cambodia",
                        cmr: "Cameroon",
                        can: "Canada",
                        cpv: "Cape Verde",
                        cym: "Cayman Islands",
                        caf: "Central African Republic",
                        tcd: "Chad",
                        chl: "Chile",
                        chn: "China",
                        cxr: "Christmas Island",
                        cck: "Cocos (Keeling), Islands",
                        col: "Colombia",
                        com: "Comoros",
                        cog: "Congo",
                        cod: "Congo, the Democratic Republic of the",
                        cok: "Cook Islands",
                        cri: "Costa Rica",
                        hrv: "Croatia",
                        cub: "Cuba",
                        cyp: "Cyprus",
                        cze: "Czech Republic",
                        civ: "Cote d'Ivoire",
                        dnk: "Denmark",
                        dji: "Djibouti",
                        dma: "Dominica",
                        dom: "Dominican Republic",
                        ecu: "Ecuador",
                        egy: "Egypt",
                        slv: "El Salvador",
                        gnq: "Equatorial Guinea",
                        eri: "Eritrea",
                        est: "Estonia",
                        eth: "Ethiopia",
                        flk: "Falkland Islands (Malvinas),",
                        fro: "Faroe Islands",
                        fji: "Fiji",
                        fin: "Finland",
                        fra: "France",
                        guf: "French Guiana",
                        pyf: "French Polynesia",
                        atf: "French Southern Territories",
                        gab: "Gabon",
                        gmb: "Gambia",
                        geo: "Georgia",
                        deu: "Germany",
                        gha: "Ghana",
                        gib: "Gibraltar",
                        grc: "Greece",
                        grl: "Greenland",
                        grd: "Grenada",
                        glp: "Guadeloupe",
                        gum: "Guam",
                        gtm: "Guatemala",
                        ggy: "Guernsey",
                        gin: "Guinea",
                        gnb: "Guinea-Bissau",
                        guy: "Guyana",
                        hti: "Haiti",
                        hmd: "Heard Island and McDonald Islands",
                        vat: "Holy See (Vatican City State),",
                        hnd: "Honduras",
                        hkg: "Hong Kong",
                        hun: "Hungary",
                        isl: "Iceland",
                        ind: "India",
                        idn: "Indonesia",
                        irn: "Iran, Islamic Republic of",
                        irq: "Iraq",
                        irl: "Ireland",
                        imn: "Isle of Man",
                        isr: "Israel",
                        ita: "Italy",
                        jam: "Jamaica",
                        jpn: "Japan",
                        jey: "Jersey",
                        jor: "Jordan",
                        kaz: "Kazakhstan",
                        ken: "Kenya",
                        kir: "Kiribati",
                        prk: "Korea, Democratic People's Republic of",
                        kor: "Korea, Republic of",
                        kwt: "Kuwait",
                        kgz: "Kyrgyzstan",
                        lao: "Lao People's Democratic Republic",
                        lva: "Latvia",
                        lbn: "Lebanon",
                        lso: "Lesotho",
                        lbr: "Liberia",
                        lby: "Libyan Arab Jamahiriya",
                        lie: "Liechtenstein",
                        ltu: "Lithuania",
                        lux: "Luxembourg",
                        mac: "Macao",
                        mkd: "Macedonia, the former Yugoslav Republic of",
                        mdg: "Madagascar",
                        mwi: "Malawi",
                        mys: "Malaysia",
                        mdv: "Maldives",
                        mli: "Mali",
                        mlt: "Malta",
                        mhl: "Marshall Islands",
                        mtq: "Martinique",
                        mrt: "Mauritania",
                        mus: "Mauritius",
                        myt: "Mayotte",
                        mex: "Mexico",
                        fsm: "Micronesia, Federated States of",
                        mda: "Moldova, Republic of",
                        mco: "Monaco",
                        mng: "Mongolia",
                        mne: "Montenegro",
                        msr: "Montserrat",
                        mar: "Morocco",
                        moz: "Mozambique",
                        mmr: "Myanmar",
                        nam: "Namibia",
                        nru: "Nauru",
                        npl: "Nepal",
                        nld: "Netherlands",
                        ant: "Netherlands Antilles",
                        ncl: "New Caledonia",
                        nzl: "New Zealand",
                        nic: "Nicaragua",
                        ner: "Niger",
                        nga: "Nigeria",
                        niu: "Niue",
                        nfk: "Norfolk Island",
                        mnp: "Northern Mariana Islands",
                        nor: "Norway",
                        omn: "Oman",
                        pak: "Pakistan",
                        plw: "Palau",
                        pse: "Palestinian Territory, Occupied",
                        pan: "Panama",
                        png: "Papua New Guinea",
                        pry: "Paraguay",
                        per: "Peru",
                        phl: "Philippines",
                        pcn: "Pitcairn",
                        pol: "Poland",
                        prt: "Portugal",
                        pri: "Puerto Rico",
                        qat: "Qatar",
                        rou: "Romania",
                        rus: "Russian Federation",
                        rwa: "Rwanda",
                        reu: "Reunion",
                        blm: "Saint Barthelemy",
                        shn: "Saint Helena",
                        kna: "Saint Kitts and Nevis",
                        lca: "Saint Lucia",
                        maf: "Saint Martin (French part)",
                        spm: "Saint Pierre and Miquelon",
                        vct: "Saint Vincent and the Grenadines",
                        wsm: "Samoa",
                        smr: "San Marino",
                        stp: "Sao Tome and Principe",
                        sau: "Saudi Arabia",
                        sen: "Senegal",
                        srb: "Serbia",
                        syc: "Seychelles",
                        sle: "Sierra Leone",
                        sgp: "Singapore",
                        svk: "Slovakia",
                        svn: "Slovenia",
                        slb: "Solomon Islands",
                        som: "Somalia",
                        zaf: "South Africa",
                        sgs: "South Georgia and the South Sandwich Islands",
                        esp: "Spain",
                        lka: "Sri Lanka",
                        sdn: "Sudan",
                        sur: "Suriname",
                        sjm: "Svalbard and Jan Mayen",
                        swz: "Swaziland",
                        swe: "Sweden",
                        che: "Switzerland",
                        syr: "Syrian Arab Republic",
                        twn: "Taiwan, Province of China",
                        tjk: "Tajikistan",
                        tza: "Tanzania, United Republic of",
                        tha: "Thailand",
                        tls: "Timor-Leste",
                        tgo: "Togo",
                        tkl: "Tokelau",
                        ton: "Tonga",
                        tto: "Trinidad and Tobago",
                        tun: "Tunisia",
                        tur: "Turkey",
                        tkm: "Turkmenistan",
                        tca: "Turks and Caicos Islands",
                        tuv: "Tuvalu",
                        uga: "Uganda",
                        ukr: "Ukraine",
                        are: "United Arab Emirates",
                        gbr: "United Kingdom",
                        usa: "United States",
                        umi: "United States Minor Outlying Islands",
                        ury: "Uruguay",
                        uzb: "Uzbekistan",
                        vut: "Vanuatu",
                        ven: "Venezuela",
                        vnm: "Viet Nam",
                        vgb: "Virgin Islands, British",
                        vir: "Virgin Islands, U.S.",
                        wlf: "Wallis and Futuna",
                        esh: "Western Sahara",
                        yem: "Yemen",
                        zmb: "Zambia",
                        zwe: "Zimbabwe"
                    },
                    empty: "",
                    required: "This field is required",
                    valid: "",
                    invalid: "This field is invalid",
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    timeUnits: {
                        SECOND: "seconds",
                        MINUTE: "minutes",
                        HOUR: "hours",
                        DAY: "days",
                        MONTH: "months",
                        YEAR: "years"
                    }
                }
            })
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.registerView({
                id: "base",
                messages: {
                    zh_CN: {
                        required: "&#27492;&#22495;&#24517;&#39035;",
                        invalid: "&#27492;&#22495;&#19981;&#21512;&#26684;",
                        months: ["&#19968;&#26376;", "&#20108;&#26376;", "&#19977;&#26376;", "&#22235;&#26376;", "&#20116;&#26376;", "&#20845;&#26376;", "&#19971;&#26376;", "&#20843;&#26376;", "&#20061;&#26376;", "&#21313;&#26376;", "&#21313;&#19968;&#26376;", "&#21313;&#20108;&#26376;"],
                        timeUnits: {
                            SECOND: "&#31186;",
                            MINUTE: "&#20998;",
                            HOUR: "&#26102;",
                            DAY: "&#26085;",
                            MONTH: "&#26376;",
                            YEAR: "&#24180;"
                        },
                        notOptional: "&#27492;&#22495;&#38750;&#20219;&#36873;",
                        disallowValue: "&#38750;&#27861;&#36755;&#20837;&#21253;&#25324; {0}.",
                        invalidValueOfEnum: "&#20801;&#35768;&#36755;&#20837;&#21253;&#25324; {0}. [{1}]",
                        notEnoughItems: "&#26368;&#23567;&#20010;&#25968; {0}",
                        tooManyItems: "&#26368;&#22823;&#20010;&#25968; {0}",
                        valueNotUnique: "&#36755;&#20837;&#20540;&#19981;&#29420;&#29305;",
                        notAnArray: "&#19981;&#26159;&#25968;&#32452;",
                        invalidDate: "&#26085;&#26399;&#26684;&#24335;&#22240;&#35813;&#26159; {0}",
                        invalidEmail: "&#20234;&#22969;&#20799;&#26684;&#24335;&#19981;&#23545;, ex: info@cloudcms.com",
                        stringNotAnInteger: "&#19981;&#26159;&#25972;&#25968;.",
                        invalidIPv4: "&#19981;&#26159;&#21512;&#27861;IP&#22320;&#22336;, ex: 192.168.0.1",
                        stringValueTooSmall: "&#26368;&#23567;&#20540;&#26159; {0}",
                        stringValueTooLarge: "&#26368;&#22823;&#20540;&#26159; {0}",
                        stringValueTooSmallExclusive: "&#20540;&#24517;&#39035;&#22823;&#20110; {0}",
                        stringValueTooLargeExclusive: "&#20540;&#24517;&#39035;&#23567;&#20110; {0}",
                        stringDivisibleBy: "&#20540;&#24517;&#39035;&#33021;&#34987; {0} &#25972;&#38500;",
                        stringNotANumber: "&#19981;&#26159;&#25968;&#23383;.",
                        invalidPassword: "&#38750;&#27861;&#23494;&#30721;",
                        invalidPhone: "&#38750;&#27861;&#30005;&#35805;&#21495;&#30721;, ex: (123) 456-9999",
                        invalidPattern: "&#27492;&#22495;&#39035;&#26377;&#26684;&#24335; {0}",
                        stringTooShort: "&#27492;&#22495;&#33267;&#23569;&#38271;&#24230; {0}",
                        stringTooLong: "&#27492;&#22495;&#26368;&#22810;&#38271;&#24230; {0}"
                    }
                }
            })
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.registerView({
                id: "base",
                messages: {
                    es_ES: {
                        required: "Este campo es obligatorio",
                        invalid: "Este campo es invÃ¡lido",
                        months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                        timeUnits: {
                            SECOND: "segundos",
                            MINUTE: "minutos",
                            HOUR: "horas",
                            DAY: "dÃ­as",
                            MONTH: "meses",
                            YEAR: "aÃ±os"
                        },
                        notOptional: "Este campo no es opcional.",
                        disallowValue: "{0} son los valores rechazados.",
                        invalidValueOfEnum: "Este campo debe tener uno de los valores adentro {0}. [{1}]",
                        notEnoughItems: "El nÃºmero mÃ­nimo de artÃ­culos es {0}",
                        tooManyItems: "El nÃºmero mÃ¡ximo de artÃ­culos es {0}",
                        valueNotUnique: "Los valores no son Ãºnicos",
                        notAnArray: "Este valor no es un arsenal",
                        invalidDate: "Fecha invÃ¡lida para el formato {0}",
                        invalidEmail: "Email address invÃ¡lido, ex: info@cloudcms.com",
                        stringNotAnInteger: "Este valor no es un nÃºmero entero.",
                        invalidIPv4: "DirecciÃ³n invÃ¡lida IPv4, ex: 192.168.0.1",
                        stringValueTooSmall: "El valor mÃ­nimo para este campo es {0}",
                        stringValueTooLarge: "El valor mÃ¡ximo para este campo es {0}",
                        stringValueTooSmallExclusive: "El valor de este campo debe ser mayor que {0}",
                        stringValueTooLargeExclusive: "El valor de este campo debe ser menos que {0}",
                        stringDivisibleBy: "El valor debe ser divisible cerca {0}",
                        stringNotANumber: "Este valor no es un nÃºmero.",
                        invalidPassword: "ContraseÃ±a invÃ¡lida",
                        invalidPhone: "NÃºmero de telÃ©fono invÃ¡lido, ex: (123) 456-9999",
                        invalidPattern: "Este campo debe tener patrÃ³n {0}",
                        stringTooShort: "Este campo debe contener por lo menos {0} nÃºmeros o caracteres",
                        stringTooLong: "Este campo debe contener a lo mÃ¡s {0} nÃºmeros o caracteres",
                        noneLabel: "Ninguno",
                        addItemButtonLabel: "AÃ±adir",
                        addButtonLabel: "AÃ±adir",
                        removeButtonLabel: "Quitar",
                        upButtonLabel: "Arriba",
                        downButtonLabel: "Abajo"
                    }
                }
            })
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.registerView({
                id: "base",
                messages: {
                    fr_FR: {
                        required: "Ce champ est requis",
                        invalid: "Ce champ est invalide",
                        months: ["Janvier", "FÃ©vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "AoÃ»t", "Septembre", "Octobre", "Novembre", "DÃ©cembre"],
                        timeUnits: {
                            SECOND: "secondes",
                            MINUTE: "minutes",
                            HOUR: "heures",
                            DAY: "jours",
                            MONTH: "mois",
                            YEAR: "annÃ©es"
                        },
                        notOptional: "Ce champ n'est pas optionnel.",
                        disallowValue: "{0} sont des valeurs interdites.",
                        invalidValueOfEnum: "Ce champ doit prendre une des valeurs suivantes : {0}. [{1}]",
                        notEnoughItems: "Le nombre minimum d'Ã©lÃ©ments est {0}",
                        tooManyItems: "Le nombre maximum d'Ã©lÃ©ments est {0}",
                        valueNotUnique: "Les valeurs sont uniques",
                        notAnArray: "Cette valeur n'est pas une liste",
                        invalidDate: "Cette date ne correspond pas au format {0}",
                        invalidEmail: "Adresse de courriel invalide, ex: info@cloudcms.com",
                        stringNotAnInteger: "Cette valeur n'est pas un nombre entier.",
                        invalidIPv4: "Adresse IPv4 invalide, ex: 192.168.0.1",
                        stringValueTooSmall: "La valeur minimale pour ce champ est {0}",
                        stringValueTooLarge: "La valeur maximale pour ce champ est {0}",
                        stringValueTooSmallExclusive: "La valeur doit-Ãªtre supÃ©rieure Ã  {0}",
                        stringValueTooLargeExclusive: "La valeur doit-Ãªtre infÃ©rieure Ã  {0}",
                        stringDivisibleBy: "La valeur doit-Ãªtre divisible par {0}",
                        stringNotANumber: "Cette valeur n'est pas un nombre.",
                        invalidPassword: "Mot de passe invalide",
                        invalidPhone: "NumÃ©ro de tÃ©lÃ©phone invalide, ex: (123) 456-9999",
                        invalidPattern: "Ce champ doit correspondre au motif {0}",
                        stringTooShort: "Ce champ doit contenir au moins {0} caractÃ¨res",
                        stringTooLong: "Ce champ doit contenir au plus {0} caractÃ¨res"
                    }
                }
            })
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.registerView({
                id: "base",
                messages: {
                    hr_HR: {
                        required: "Polje je obavezno",
                        invalid: "PogreÅ¡na vrijednost",
                        months: ["SijeÄanj", "VeljaÄa", "OÅ¾ujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
                        timeUnits: {
                            SECOND: "sekunda",
                            MINUTE: "minuta",
                            HOUR: "sati",
                            DAY: "dan",
                            MONTH: "mjesec",
                            YEAR: "godina"
                        },
                        notOptional: "Polje nije opciono.",
                        disallowValue: "{0} vrijednost nije dozvoljena.",
                        invalidValueOfEnum: "MoguÄ‡e vrijednosti : {0}. [{1}]",
                        notEnoughItems: "Odaberite najmanje {0}",
                        tooManyItems: "Odaberite najviÅ¡e {0}",
                        valueNotUnique: "Vrijednost nije jedinstvena",
                        notAnArray: "Vrijednost nije popis",
                        invalidDate: "Datum nije u formatu {0}",
                        invalidEmail: "E-mail adresa nije u ispravnom formatu, npr: ime.prezime@internet.com",
                        stringNotAnInteger: "Vrijednost nije cijeli broj.",
                        invalidIPv4: "IPv4 adresa nije ispravna, npr: 192.168.0.1",
                        stringValueTooSmall: "Vrijednost je ispod dopuÅ¡tenog {0}",
                        stringValueTooLarge: "Vrijednost je iznad dopuÅ¡tenog {0}",
                        stringValueTooSmallExclusive: "Vrijednost mora biti veÄ‡a od {0}",
                        stringValueTooLargeExclusive: "Vrijednost mora biti manja od {0}",
                        stringDivisibleBy: "Vrijednost mora biti djeljiva sa {0}",
                        stringNotANumber: "Vrijednost nije broj.",
                        invalidPassword: "Neispravna lozinka",
                        invalidPhone: "Telefon nije ispravan, npr: (123) 456-9999",
                        invalidPattern: "PogreÅ¡an uzorak {0}",
                        stringTooShort: "Polje mora imati namjanje {0} znakova",
                        stringTooLong: "Polje mora imati najviÅ¡e {0} znakova"
                    }
                }
            })
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.registerView({
                id: "base",
                messages: {
                    it_IT: {
                        required: "Questo campo Ã¨ obbligatorio",
                        invalid: "Questo campo Ã¨ invalido",
                        months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                        timeUnits: {
                            SECOND: "secondi",
                            MINUTE: "minuti",
                            HOUR: "ore",
                            DAY: "giorni",
                            MONTH: "mesi",
                            YEAR: "anni"
                        },
                        notOptional: "Questo campo non Ã¨ opzionale",
                        disallowValue: "{0} sono valori invalidi",
                        invalidValueOfEnum: "Questo campo deve avere uno dei seguenti valori {0} (valore attuale: {1})",
                        notEnoughItems: "Il numero minimo di elementi richiesti Ã¨ {0}",
                        tooManyItems: "Il numero massimo di elementi ammessi Ã¨ {0}",
                        valueNotUnique: "I valori non sono univoci",
                        notAnArray: "Questo valore non Ã¨ di tipo array",
                        invalidDate: "Data invalida per il formato {0}",
                        invalidEmail: "Indirizzo email invalido, si attendono valori del tipo: info@cloudcms.com",
                        stringNotAnInteger: "Questo valore non Ã¨ un numero intero",
                        invalidIPv4: "Indirizzo IPv4 invalido, si attendono valori del tipo: 192.168.0.1",
                        stringValueTooSmall: "Il valore minimo per questo campo Ã¨ {0}",
                        stringValueTooLarge: "Il valore massimo per questo campo Ã¨ {0}",
                        stringValueTooSmallExclusive: "Il valore di questo campo deve essere maggiore di {0}",
                        stringValueTooLargeExclusive: "Il valore di questo campo deve essere minore di {0}",
                        stringDivisibleBy: "Il valore di questo campo deve essere divisibile per {0}",
                        stringNotANumber: "Questo valore non Ã¨ un numero",
                        invalidPassword: "Password invalida",
                        invalidPhone: "Numero di telefono invalido, si attendono valori del tipo: (123) 456-9999",
                        invalidPattern: "Questo campo deve avere la seguente struttura: {0}",
                        stringTooShort: "Questo campo non deve contenere meno di {0} caratteri",
                        stringTooLong: "Questo campo non deve contenere piÃ¹ di {0} caratteri",
                        noneLabel: "Nessuno",
                        addItemButtonLabel: "Aggiungi",
                        addButtonLabel: "Aggiungi",
                        removeButtonLabel: "Rimuovi",
                        upButtonLabel: "Su",
                        downButtonLabel: "GiÃ¹"
                    }
                }
            })
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.registerView({
                id: "base",
                messages: {
                    ja_JP: {
                        required: "ã“ã®é …ç›®ã¯å¿…é ˆã§ã™",
                        invalid: "ã“ã®é …ç›®ã¯æ­£ã—ã„å€¤ã§ã¯ã‚ã‚Šã¾ã›ã‚“",
                        months: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ"],
                        timeUnits: {
                            SECOND: "ç§’",
                            MINUTE: "åˆ†",
                            HOUR: "æ™‚",
                            DAY: "æ—¥",
                            MONTH: "æœˆ",
                            YEAR: "å¹´"
                        },
                        notOptional: "ã“ã®é …ç›®ã¯ä»»æ„ã®å›žç­”é …ç›®ã§ã¯ã‚ã‚Šã¾ã›ã‚“",
                        disallowValue: "{0} ã¯ç¦æ­¢ã•ã‚Œã¦ã„ã‚‹å€¤ã§ã™",
                        invalidValueOfEnum: "ã“ã®é …ç›®ã¯ {0} ã®ä¸­ã‹ã‚‰é¸ã°ãªã‘ã‚Œã°ãªã‚Šã¾ã›ã‚“ã€‚ç¾åœ¨ã®å€¤ã¯ {1} ã§ã™",
                        notEnoughItems: "é …ç›®æ•°ã¯ {0} ä»¥ä¸Šå¿…è¦ã§ã™",
                        tooManyItems: "é …ç›®æ•°ã¯ {0} ä»¥ä¸‹ã§ãªã‘ã‚Œã°ãªã‚Šã¾ã›ã‚“",
                        valueNotUnique: "å€¤ãŒä¸€æ„ã§ã¯ã‚ã‚Šã¾ã›ã‚“",
                        notAnArray: "ã“ã®é …ç›®ã®å€¤ãŒé…åˆ—ã§ã‚ã‚Šã¾ã›ã‚“",
                        stringValueTooSmall: "ã“ã®é …ç›®ã®æœ€å°å€¤ã¯ {0} ã§ã™",
                        stringValueTooLarge: "ã“ã®é …ç›®ã®æœ€å¤§å€¤ã¯ {0} ã§ã™",
                        stringValueTooSmallExclusive: "ã“ã®é …ç›®ã®å€¤ã¯ {0} ã‚ˆã‚Šå°ã•ããªã‘ã‚Œã°ãªã‚Šã¾ã›ã‚“",
                        stringValueTooLargeExclusive: "ã“ã®é …ç›®ã®å€¤ã¯ {0} ã‚ˆã‚Šå¤§ãããªã‘ã‚Œã°ãªã‚Šã¾ã›ã‚“",
                        stringDivisibleBy: "å€¤ã¯ {0} ã«ã‚ˆã£ã¦å‰²ã‚Šåˆ‡ã‚Œãªã‘ã‚Œã°ãªã‚Šã¾ã›ã‚“",
                        stringNotANumber: "ã“ã®é …ç›®ã®å€¤ãŒæ•°å€¤ã§ã¯ã‚ã‚Šã¾ã›ã‚“",
                        stringValueNotMultipleOf: "å€¤ãŒ {0} ã®å€æ•°ã§ã¯ã‚ã‚Šã¾ã›ã‚“",
                        stringNotAnInteger: "ã“ã®é …ç›®ã®å€¤ãŒæ•´æ•°ã§ã¯ã‚ã‚Šã¾ã›ã‚“",
                        stringNotAJSON: "å€¤ãŒæ­£ã—ã„ JSON å½¢å¼ã®æ–‡å­—åˆ—ã§ã¯ã‚ã‚Šã¾ã›ã‚“",
                        stringTooShort: "ã“ã®é …ç›®ã¯ {0} æ–‡å­—ä»¥ä¸Šå¿…è¦ã§ã™",
                        stringTooLong: "ã“ã®é …ç›®ã¯ {0} æ–‡å­—ä»¥ä¸‹ã§ãªã‘ã‚Œã°ãªã‚Šã¾ã›ã‚“",
                        invalidTime: "æ™‚é–“ãŒæ­£ã—ãã‚ã‚Šã¾ã›ã‚“",
                        invalidDate: "æ—¥ä»˜ãŒ {0} ã§ã¯ã‚ã‚Šã¾ã›ã‚“",
                        invalidEmail: "ãƒ¡ãƒ¼ãƒ«ã‚¢ãƒ‰ãƒ¬ã‚¹ãŒæ­£ã—ãã‚ã‚Šã¾ã›ã‚“ã€‚ä¾‹ãˆã° info@cloudcms.com ã®ã‚ˆã†ãªå½¢å¼ã§ã™",
                        invalidIPv4: "IPv4 ã‚¢ãƒ‰ãƒ¬ã‚¹ãŒæ­£ã—ãã‚ã‚Šã¾ã›ã‚“ã€‚ä¾‹ãˆã° 192.168.0.1 ã®ã‚ˆã†ãªå½¢å¼ã§ã™",
                        invalidPassword: "ãƒ‘ã‚¹ãƒ¯ãƒ¼ãƒ‰ãŒæ­£ã—ãã‚ã‚Šã¾ã›ã‚“",
                        invalidPhone: "é›»è©±ç•ªå·ãŒæ­£ã—ãã‚ã‚Šã¾ã›ã‚“ã€‚ä¾‹ãˆã° (123) 456-9999 ã®ã‚ˆã†ãªå½¢å¼ã§ã™",
                        invalidPattern: "ã“ã®é …ç›®ã¯ {0} ã®ãƒ‘ã‚¿ãƒ¼ãƒ³ã§ãªã‘ã‚Œã°ãªã‚Šã¾ã›ã‚“",
                        invalidURLFormat: "URL ãŒæ­£ã—ã„å½¢å¼ã§ã¯ã‚ã‚Šã¾ã›ã‚“",
                        keyMissing: "åœ°å›³ãŒç©ºã®ã‚­ãƒ¼ã‚’å«ã‚“ã§ã„ã¾ã™",
                        keyNotUnique: "åœ°å›³ã®ã‚­ãƒ¼ãŒä¸€æ„ã§ã¯ã‚ã‚Šã¾ã›ã‚“",
                        ObjecttooFewProperties: "ãƒ—ãƒ­ãƒ‘ãƒ†ã‚£ãŒè¶³ã‚Šã¾ã›ã‚“ ({0} ãŒå¿…è¦ã§ã™)",
                        tooManyProperties: "ãƒ—ãƒ­ãƒ‘ãƒ†ã‚£ ({0}) ã®æœ€å¤§æ•°ã‚’è¶…ãˆã¦ã„ã¾ã™",
                        wordLimitExceeded: "{0} ã®å˜èªžæ•°ã®åˆ¶é™ã‚’è¶…ãˆã¦ã„ã¾ã™",
                        editorAnnotationsExist: "ã‚¨ãƒ‡ã‚£ã‚¿ãŒä¿®æ­£ã™ã¹ãã‚¨ãƒ©ãƒ¼ã‚’å ±å‘Šã—ã¦ã„ã¾ã™",
                        invalidZipcodeFormatFive: "5æ¡ã® Zipcode (#####) ã§ã¯ã‚ã‚Šã¾ã›ã‚“",
                        invalidZipcodeFormatNine: "9æ¡ã® Zipcode (#####-####) ã§ã¯ã‚ã‚Šã¾ã›ã‚“"
                    }
                }
            })
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.registerView({
                id: "base",
                messages: {
                    pl_PL: {
                        required: "To pole jest wymagane",
                        invalid: "To pole jest nieprawidÅ‚owe",
                        months: ["StyczeÅ„", "Luty", "Marzec", "KwiecieÅ„", "Maj", "Czerwiec", "Lipiec", "SierpieÅ„", "WrzesieÅ„", "PaÅºdziernik", "Listopad", "GrudzieÅ„"],
                        timeUnits: {
                            SECOND: "sekundy",
                            MINUTE: "minuty",
                            HOUR: "godziny",
                            DAY: "dni",
                            MONTH: "miesiÄ…ce",
                            YEAR: "lata"
                        },
                        notOptional: "To pole nie jest opcjonalne",
                        disallowValue: "Ta wartoÅ›Ä‡ nie jest dozwolona: {0}",
                        invalidValueOfEnum: "To pole powinno zawieraÄ‡ jednÄ… z nastÄ™pujÄ…cych wartoÅ›ci: {0}. [{1}]",
                        notEnoughItems: "Minimalna liczba elementÃ³w wynosi {0}",
                        tooManyItems: "Maksymalna liczba elementÃ³w wynosi {0}",
                        valueNotUnique: "Te wartoÅ›ci nie sÄ… unikalne",
                        notAnArray: "Ta wartoÅ›Ä‡ nie jest tablicÄ…",
                        invalidDate: "Niepoprawny format daty: {0}",
                        invalidEmail: "Niepoprawny adres email, n.p.: info@cloudcms.com",
                        stringNotAnInteger: "Ta wartoÅ›Ä‡ nie jest liczbÄ… caÅ‚kowitÄ…",
                        invalidIPv4: "Niepoprawny adres IPv4, n.p.: 192.168.0.1",
                        stringValueTooSmall: "Minimalna wartoÅ›Ä‡ dla tego pola wynosi {0}",
                        stringValueTooLarge: "Maksymalna wartoÅ›Ä‡ dla tego pola wynosi {0}",
                        stringValueTooSmallExclusive: "WartoÅ›Ä‡ dla tego pola musi byÄ‡ wiÄ™ksza niÅ¼ {0}",
                        stringValueTooLargeExclusive: "WartoÅ›Ä‡ dla tego pola musi byÄ‡ mniejsza niÅ¼ {0}",
                        stringDivisibleBy: "WartoÅ›Ä‡ musi byÄ‡ podzielna przez {0}",
                        stringNotANumber: "WartoÅ›Ä‡ nie jest liczbÄ…",
                        invalidPassword: "Niepoprawne hasÅ‚o",
                        invalidPhone: "Niepoprawny numer telefonu, n.p.: (123) 456-9999",
                        invalidPattern: "To pole powinno mieÄ‡ format {0}",
                        stringTooShort: "To pole powinno zawieraÄ‡ co najmniej {0} znakÃ³w",
                        stringTooLong: "To pole powinno zawieraÄ‡ najwyÅ¼ej {0} znakÃ³w"
                    }
                }
            })
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.registerView({
                id: "base",
                messages: {
                    pt_BR: {
                        required: "Este campo Ã© obrigatÃ³rio",
                        invalid: "Este campo Ã© invÃ¡lido",
                        months: ["Janeiro", "Fevereiro", "MarÃ§o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                        timeUnits: {
                            SECOND: "segundos",
                            MINUTE: "minutos",
                            HOUR: "horas",
                            DAY: "dias",
                            MONTH: "meses",
                            YEAR: "anos"
                        },
                        notOptional: "Este campo nÃ£o Ã© opcional.",
                        disallowValue: "{0} sÃ£o valores proibidas.",
                        invalidValueOfEnum: "Este campo deve ter um dos seguintes valores: {0}. [{1}]",
                        notEnoughItems: "O nÃºmero mÃ­nimo de elementos Ã© {0}",
                        tooManyItems: "O nÃºmero mÃ¡ximo de elementos Ã© {0}",
                        valueNotUnique: "Os valores nÃ£o sÃ£o Ãºnicos",
                        notAnArray: "Este valor nÃ£o Ã© uma lista",
                        invalidDate: "Esta data nÃ£o tem o formato {0}",
                        invalidEmail: "EndereÃ§o de email invÃ¡lida, ex: info@cloudcms.com",
                        stringNotAnInteger: "Este valor nÃ£o Ã© um nÃºmero inteiro.",
                        invalidIPv4: "EndereÃ§o IPv4 invÃ¡lida, ex: 192.168.0.1",
                        stringValueTooSmall: "O valor mÃ­nimo para este campo Ã© {0}",
                        stringValueTooLarge: "O valor mÃ¡ximo para este campo Ã© {0}",
                        stringValueTooSmallExclusive: "O valor deste campo deve ser maior que {0}",
                        stringValueTooLargeExclusive: "O valor deste campo deve ser menor que {0}",
                        stringDivisibleBy: "O valor deve ser divisÃ­vel por {0}",
                        stringNotANumber: "Este valor nÃ£o Ã© um nÃºmero.",
                        invalidPassword: "Senha invÃ¡lida",
                        invalidPhone: "NÃºmero de telefone invÃ¡lido, ex: (123) 456-9999",
                        invalidPattern: "Este campo deve ter o padrÃ£o {0}",
                        stringTooShort: "Este campo deve incluir pelo menos {0} caracteres",
                        stringTooLong: "Este campo pode incluir no mÃ¡ximo {0} caracteres"
                    }
                }
            })
        }(jQuery),
        function(e) {
            var t = e.alpaca;
            t.registerView({
                id: "base",
                messages: {
                    de_AT: {
                        required: "Eingabe erforderlich",
                        invalid: "Eingabe invalid",
                        months: ["JÃ¤nner", "Februar", "MÃ¤rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                        timeUnits: {
                            SECOND: "Sekunden",
                            MINUTE: "Minuten",
                            HOUR: "Stunden",
                            DAY: "Tage",
                            MONTH: "Monate",
                            YEAR: "Jahre"
                        },
                        notOptional: "Dieses Feld ist nicht optional",
                        disallowValue: "Diese Werte sind nicht erlaubt: {0}",
                        invalidValueOfEnum: "Diese Feld sollte einen der folgenden Werte enthalten: {0}. [{1}]",
                        notEnoughItems: "Die Mindestanzahl von Elementen ist {0}",
                        tooManyItems: "Die Maximalanzahl von Elementen ist {0}",
                        valueNotUnique: "Diese Werte sind nicht eindeutig",
                        notAnArray: "Keine Liste von Werten",
                        invalidDate: "Falsches Datumsformat: {0}",
                        invalidEmail: "UngÃ¼ltige e-Mail Adresse, z.B.: info@cloudcms.com",
                        stringNotAnInteger: "Eingabe ist keine Ganz Zahl.",
                        invalidIPv4: "UngÃ¼ltige IPv4 Adresse, z.B.: 192.168.0.1",
                        stringValueTooSmall: "Die Mindestanzahl von Zeichen ist {0}",
                        stringValueTooLarge: "Die Maximalanzahl von Zeichen ist {0}",
                        stringValueTooSmallExclusive: "Die Anzahl der Zeichen muss grÃ¶ÃŸer sein als {0}",
                        stringValueTooLargeExclusive: "Die Anzahl der Zeichen muss kleiner sein als {0}",
                        stringDivisibleBy: "Der Wert muss durch {0} dividierbar sein",
                        stringNotANumber: "Die Eingabe ist keine Zahl",
                        invalidPassword: "UngÃ¼ltiges Passwort.",
                        invalidPhone: "UngÃ¼ltige Telefonnummer, z.B.: (123) 456-9999",
                        invalidPattern: "Diese Feld stimmt nicht mit folgender Vorgabe Ã¼berein {0}",
                        stringTooShort: "Dieses Feld sollte mindestens {0} Zeichen enthalten",
                        stringTooLong: "Dieses Feld sollte hÃ¶chstens {0} Zeichen enthalten"
                    }
                }
            })
        }(jQuery),
        function(e) {
            var t = e.alpaca,
                i = {};
            i.field = function() {}, i.control = function() {}, i.container = function() {}, i.form = function() {}, i.required = function() {}, i.optional = function() {}, i.readonly = function() {}, i.disabled = function() {}, i.enabled = function() {}, i.clearValidity = function() {}, i.invalid = function(e) {}, i.valid = function() {}, i.addMessage = function(e, t, i, n) {}, i.removeMessages = function() {}, i.enableButton = function(e) {}, i.disableButton = function(e) {}, i.arrayToolbar = function(i) {
                var n = this;
                if (i) {
                    var a = e(n.getFieldEl()).find(".alpaca-array-toolbar[data-alpaca-array-toolbar-field-id='" + n.getId() + "']");
                    if (a.length > 0) {
                        var r = e("<div class='" + t.MARKER_CLASS_ARRAY_TOOLBAR + "' " + t.MARKER_DATA_ARRAY_TOOLBAR_FIELD_ID + "='" + n.getId() + "'></div>");
                        a.before(r), a.remove()
                    }
                } else {
                    var r = e(n.getContainerEl()).find("." + t.MARKER_CLASS_ARRAY_TOOLBAR + "[" + t.MARKER_DATA_ARRAY_TOOLBAR_FIELD_ID + "='" + n.getId() + "']");
                    if (r.length > 0) {
                        var s = n.view.getTemplateDescriptor("container-array-toolbar", n);
                        if (s) {
                            var o = t.tmpl(s, {
                                actions: n.toolbar.actions,
                                id: n.getId(),
                                toolbarStyle: n.options.toolbarStyle,
                                view: n.view
                            });
                            e(r).before(o), e(r).remove()
                        }
                    }
                }
            }, i.arrayActionbars = function(i) {
                for (var n = this, a = 0; a < n.children.length; a++) {
                    var r = n.children[a],
                        s = r.getId();
                    if (i) {
                        var o = e(n.getFieldEl()).find(".alpaca-array-actionbar[data-alpaca-array-actionbar-field-id='" + s + "']");
                        if (o.length > 0) {
                            var l = e("<div class='" + t.MARKER_CLASS_ARRAY_ITEM_ACTIONBAR + "' " + t.MARKER_DATA_ARRAY_ITEM_KEY + "='" + r.name + "'></div>");
                            o.before(l), o.remove()
                        }
                    } else {
                        var l = e(n.getFieldEl()).find("." + t.MARKER_CLASS_ARRAY_ITEM_ACTIONBAR + "[" + t.MARKER_DATA_ARRAY_ITEM_KEY + "='" + r.name + "']");
                        if (l.length > 0) {
                            var u = n.view.getTemplateDescriptor("container-array-actionbar", n);
                            if (u) {
                                var c = t.tmpl(u, {
                                    actions: n.actionbar.actions,
                                    name: r.name,
                                    parentFieldId: n.getId(),
                                    fieldId: r.getId(),
                                    itemIndex: a,
                                    actionbarStyle: n.options.actionbarStyle,
                                    view: n.view
                                });
                                e(l).before(c), e(l).remove()
                            }
                        }
                    }
                }
            }, i.autocomplete = function() {};
            var n = {};
            n.button = "", n.smallButton = "", n.addIcon = "", n.removeIcon = "", n.upIcon = "", n.downIcon = "", n.expandedIcon = "", n.collapsedIcon = "", n.table = "", t.registerView({
                id: "web-display",
                parent: "base",
                type: "display",
                ui: "web",
                title: "Default HTML5 display view",
                displayReadonly: !0,
                templates: {},
                callbacks: i,
                styles: n,
                horizontal: !1
            }), t.registerView({
                id: "web-display-horizontal",
                parent: "web-display",
                horizontal: !0
            }), t.registerView({
                id: "web-edit",
                parent: "base",
                type: "edit",
                ui: "web",
                title: "Default HTML5 edit view",
                displayReadonly: !0,
                templates: {},
                callbacks: i,
                styles: n,
                horizontal: !1
            }), t.registerView({
                id: "web-edit-horizontal",
                parent: "web-edit",
                horizontal: !0
            }), t.registerView({
                id: "web-create",
                parent: "web-edit",
                type: "create",
                title: "Default HTML5 create view",
                displayReadonly: !1,
                templates: {},
                horizontal: !1
            }), t.registerView({
                id: "web-create-horizontal",
                parent: "web-create",
                horizontal: !0
            })
        }(jQuery),
        function(e) {
            var t = e.alpaca,
                i = {};
            i.button = "btn btn-default", i.smallButton = "btn btn-default btn-sm", i.addIcon = "glyphicon glyphicon-plus-sign", i.removeIcon = "glyphicon glyphicon-minus-sign", i.upIcon = "glyphicon glyphicon-chevron-up", i.downIcon = "glyphicon glyphicon-chevron-down", i.expandedIcon = "glyphicon glyphicon-circle-arrow-down", i.collapsedIcon = "glyphicon glyphicon-circle-arrow-right", i.table = "table table-striped table-bordered table-hover";
            var n = {};
            n.required = function() {
                var t = this.getFieldEl(),
                    i = e(t).find("label.alpaca-control-label");
                e('<span class="alpaca-icon-required glyphicon glyphicon-star"></span>').prependTo(i)
            }, n.invalid = function() {
                this.isControlField && e(this.getFieldEl()).addClass("has-error")
            }, n.valid = function() {
                e(this.getFieldEl()).removeClass("has-error")
            }, n.control = function() {
                var t = this.getFieldEl(),
                    i = this.getControlEl();
                if (e(t).find("input").addClass("form-control"), e(t).find("textarea").addClass("form-control"), e(t).find("select").addClass("form-control"), e(t).find("input[type=checkbox]").removeClass("form-control"), e(t).find("input[type=file]").removeClass("form-control"), e(t).find("input[type=radio]").removeClass("form-control"), "color" === this.inputType && e(t).find("input").removeClass("form-control"), e(t).find("input[type=checkbox]").parent().parent().addClass("checkbox"), e(t).find("input[type=radio]").parent().parent().addClass("radio"), e(t).parents("form").hasClass("form-inline") && (e(t).find("input[type=checkbox]").parent().addClass("checkbox-inline"), e(t).find("input[type=radio]").parent().addClass("radio-inline")), e(t).find("label.alpaca-control-label").addClass("control-label"), this.view.horizontal) {
                    e(t).find("label.alpaca-control-label").addClass("col-sm-3");
                    var n = e("<div></div>");
                    n.addClass("col-sm-9"), e(i).after(n), n.append(i), e(t).append("<div style='clear:both;'></div>")
                }
            }, n.container = function() {
                var t = this.getContainerEl();
                this.view.horizontal && e(t).addClass("form-horizontal")
            }, n.form = function() {
                this.getFormEl()
            }, n.enableButton = function(t) {
                e(t).removeAttr("disabled")
            }, n.disableButton = function(t) {
                e(t).attr("disabled", "disabled")
            }, n.collapsible = function() {
                var i = this.getFieldEl(),
                    n = e(i).find("legend").first(),
                    a = e("[data-toggle='collapse']", n);
                if (e(a).length > 0) {
                    var r = this.getContainerEl(),
                        s = e(r).attr("id");
                    s || (s = t.generateId(), e(r).attr("id", s)), e(r).addClass("collapse in"), e(a).attr("data-target") || e(a).attr("data-target", "#" + s), e(a).mouseover(function(t) {
                        e(this).css("cursor", "pointer")
                    })
                }
            }, n.tableHeaderRequired = function(t, i, n) {
                e('<span class="alpaca-icon-required glyphicon glyphicon-star"></span>').prependTo(n)
            }, n.tableHeaderOptional = function(e, t, i) {}, t.registerView({
                id: "bootstrap-display",
                parent: "web-display",
                type: "display",
                ui: "bootstrap",
                title: "Display View for Bootstrap 3",
                displayReadonly: !0,
                callbacks: n,
                styles: i,
                templates: {}
            }), t.registerView({
                id: "bootstrap-display-horizontal",
                parent: "bootstrap-display",
                horizontal: !0
            }), t.registerView({
                id: "bootstrap-edit",
                parent: "web-edit",
                type: "edit",
                ui: "bootstrap",
                title: "Edit View for Bootstrap 3",
                displayReadonly: !0,
                callbacks: n,
                styles: i,
                templates: {}
            }), t.registerView({
                id: "bootstrap-edit-horizontal",
                parent: "bootstrap-edit",
                horizontal: !0
            }), t.registerView({
                id: "bootstrap-create",
                parent: "bootstrap-edit",
                title: "Create View for Bootstrap 3",
                type: "create",
                displayReadonly: !1
            }), t.registerView({
                id: "bootstrap-create-horizontal",
                parent: "bootstrap-create",
                horizontal: !0
            })
        }(jQuery), Alpaca.defaultView = "bootstrap", Alpaca
});