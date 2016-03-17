function dialog(t) {
    this.option = {
        unique: !1,
        html: "",
        preventHide: !1,
        modal: !1,
        modalCallback: function() {},
        css: {},
        modalcss: {
            "z-index": 1e3
        },
        titleText: "",
        buttons: [{
            text: "确定",
            callback: function() {}
        }]
    },
    $.extend(this.option, t, !0),
    this.init()
}
function jsAlert(t) {
    jsAlertDialog && jsAlertDialog.remove && jsAlertDialog.remove(),
    jsAlertDialog = new dialog({
        html: '<h3 style="border-bottom: #e6e7ec solid 1px;font-size: 16px;text-align: center;padding: 5px 0;margin: 0 20px;">提示</h3>        <div style="padding:20px 10px 10px;text-align:center;">' + t + "</div>"
    })
}
function goodLocalstorage() {
    this.name = "_meicai_goods_info"
}
function moneyFormat(t) {
    var e = ("" + (t / 100).toFixed(2)).split("."),
    i = {
        yuan: e[0],
        fen: e[1]
    };
    return i
}
function getQueryStringByName(t) {
    var e = location.search.match(new RegExp("[?&]" + t + "=([^&]+)", "i"));
    return null == e || e.length < 1 ? "": e[1].toString()
}
function popupDialog(t, e) {
    var i = $("<div>");
    i.addClass("mask js-mask").css({
        height: $(document).height(),
        width: $(document).width()
    }),
    i.appendTo($("body"));
    var o = "<div>  <div class='dialog-head' style='text-align:center;font-weight:bold;margin-bottom:5px;height:30px;line-height:30px;'>   <span>活动介绍</span>  </div>  <div class='dialog-body p10'>";
    null != t && "" != t && (o = o + "<p style='line-height: 28px;padding: 5px;'><img src='/../../assets/image/ge/icon_cu_small.png' style='vertical-align: middle;'><span style='margin-left:10px;'>" + t + "</span></p>"),
    null != e && "" != e && (o = o + "<p style='line-height: 28px;padding: 5px;'><img src='/../../assets/image/ge/icon_ge_small.png' style='vertical-align: middle;'><span style='margin-left:10px;'>" + e + "</span></p>"),
    o += "  </div>  <div class='dialog-footer' style='table-layout: fixed;display: table;border-collapse: collapse;margin: 10px 0 0 0;width: 100%;'>    <a class='btn-dialog-left js-cancel'>知道了</a>  </div></div>";
    var n = $(o),
    a = ($("body").height() - 300) / 2;
    n.addClass("dialog js-dialog").css({
        width: $(document).width() - 20,
        left: "10px",
        top: a + "px"
    }),
    n.appendTo($("body"));
    var s = n.find(".js-problem-type"),
    r = n.find(".js-quantity-tr");
    s.change(function() {
        var t = $(this);
        "3" == t.val() ? r.removeClass("hide") : r.addClass("hide")
    });
    var c = n.find(".js-cancel");
    n.find(".js-sure");
    c.click(function() {
        $("body").find(".js-mask").remove(),
        $("body").find(".js-dialog").remove()
    })
}
function staticaddcheck() {
    "none" == $("#searchListBlock").css("display") ? baidustatic("添加商品操作", "商品页添加商品") : "block" == $("#searchListBlock").css("display") ? baidustatic("添加商品操作", "搜索页添加商品") : baidustatic("添加商品操作", "购物车添加商品")
}
function staticminuscheck() {
    "none" == $("#searchListBlock").css("display") ? baidustatic("减少商品操作", "商品页减少商品") : "block" == $("#searchListBlock").css("display") ? baidustatic("减少商品操作", "搜索页减少商品") : baidustatic("减少商品操作", "购物车减少商品")
}
function staticfavaddcheck() {
    "none" == $("#searchListBlock").css("display") ? baidustatic("收藏商品操作", "商品页收藏商品") : "block" == $("#searchListBlock").css("display") ? baidustatic("收藏商品操作", "搜索页收藏商品") : baidustatic("收藏商品操作", "购物车收藏商品")
}
function staticfavcancelcheck() {
    "none" == $("#searchListBlock").css("display") ? baidustatic("收藏商品操作", "商品页取消收藏商品") : "block" == $("#searchListBlock").css("display") ? baidustatic("收藏商品操作", "搜索页取消收藏商品") : baidustatic("收藏商品操作", "购物车取消收藏商品")
}
function staticimgclick() {
    "none" == $("#searchListBlock").css("display") ? baidustatic("图片查看操作", "商品页查看图片") : "block" == $("#searchListBlock").css("display") && baidustatic("图片查看操作", "搜索页查看图片")
}
function baidustatic(t, e) {
    _hmt.push(["_trackEvent", t, "click", e])
}
window.onerror = function(t, e, i, o, n) {
    var a = new RegExp("WeixinJSBridge"),
    s = new RegExp("Exception 101"),
    r = window.location.href;
    return "Script error." != t && !e || a.test(t) || s.test(t) ? !0 : void setTimeout(function() {
        n && n.stack && (n = n.stack.toString());
        var a = {
            message: t,
            error_url: e,
            error_line: i,
            userAgent: navigator.userAgent,
            error_col: o,
            error: n,
            webhref: r
        };
        $.ajax({
            type: "post",
            url: "/error/log",
            data: JSON.stringify({
                msg: a
            }),
            dataType: "json",
            contentType: "application/json",
            success: function(t) {}
        })
    },
    0)
},
$(".foot-menu .index a").bind("click",
function() {
    window.isPreview ? location.href = "/index": location.href = "/pageindex/index"
}),
$(".foot-menu .allgoods a").bind("click",
function() {
    window.isPreview ? location.href = "/preview": location.href = "/luCommodityItem/index"
}),
$(".foot-menu .cart a").bind("click",
function() {
    window.isPreview ? location.href = "/cart": location.href = "/cart/index"
}),
$(".foot-menu .home a").bind("click",
function() {
    window.isPreview ? location.href = "/home": location.href = "/home"
}),
dialog.prototype.init = function() {
    var t = this;
    if (this.modal = this.option.modal ? new mask({
        el: $("body"),
        css: t.option.modalcss,
        click: function() {
            t.option.modalCallback.call(t)
        }
    }).show() : $("<div>"), this.dialog = $('<div class="js_dialog"></div>'), t.option.titleText.length) {
        var e = "dialog-close-x",
        i = $('<div class="dialog-title"><a href="javascript:;" class="iconfont ' + e + '">&#xe605;</a><div class="title-text">' + t.option.titleText + "</div></div>");
        this.dialog.append(i),
        i.find("." + e).click(function() {
            t.remove()
        })
    }
    var o = '<section class="popup-d"><div class="info">' + this.option.html + '</div><div class="js-btn-group"></div></section>';
    this.dialog.append(o);
    var n = $(".js-btn-group", this.dialog[0]);
    this.option.noButton && n.hide(),
    this.option.buttons.length && this.option.buttons.forEach(function(e, i) {
        $('<div class="js-btn">').text(e.text).click(function() {
            e.callback = e.callback ||
            function() {},
            e.callback.call(t),
            t.remove()
        }).appendTo(n)
    }),
    n.addClass("js-btn" + this.option.buttons.length),
    $(document.body).append(this.dialog),
    t.locate(),
    this.dialog.css(t.option.css)
},
dialog.prototype.preventHide = function() {
    this.option.preventHide = !0
},
dialog.prototype.enableHide = function() {
    this.option.preventHide = !1
},
dialog.prototype.locate = function(t) {
    t = t || $(window).height() / 2 - this.dialog[0].clientHeight / 2 + document.documentElement.scrollTop + "px",
    this.dialog.css({
        top: t
    })
},
dialog.prototype.hide = function() {
    return this.option.preventHide ? void 0 : (this.dialog.hide(), this.modal.hide(), this)
},
dialog.prototype.remove = function(t) { (t || !this.option.preventHide) && (this.hide(), this.dialog.remove(), this.modal.remove())
};
var jsAlertDialog;
goodLocalstorage.prototype = {
    cloneObj: function(t) {
        var e, i = t.constructor === Array ? [] : {};
        if ("object" == typeof t) {
            if (window.JSON) e = JSON.stringify(t),
            i = JSON.parse(e);
            else for (var o in t) i[o] = "object" == typeof t[o] ? cloneObj(t[o]) : t[o];
            return i
        }
    },
    _getAll: function() {
        return JSON.parse(localStorage.getItem(this.name)) || {}
    },
    _storeAll: function(t) {
        "object" == typeof t && (t = JSON.stringify(t)),
        localStorage.setItem(this.name, t)
    },
    get: function(t) {
        return this._getAll()[t]
    },
    getAll: function() {
        return this._getAll()
    },
    set: function(t, e) {
        var i = this._getAll();
        i[t] = e,
        this._storeAll(i)
    },
    del: function(t) {
        var e = this._getAll();
        delete e[t],
        this._storeAll(e)
    },
    clear: function() {
        this._storeAll({})
    },
    clearCount: function(t, e) {
        var i = this.get(t);
        i && ("promote" == e ? i.ci_sale_info.promote.scount = 0 : "price" == e ? i.ci_sale_info.price.scount = 0 : (i.ci_sale_info.promote.scount = 0, i.ci_sale_info.price.scount = 0, clear0Data(i)), this.set(t, i))
    },
    clear0data: function(t) {
        t.ci_sale_info.is_promote && t.ci_sale_info.price.is_price ? 0 == t.ci_sale_info.promote.scount && 0 == t.ci_sale_info.price.scount && this.del(t.id) : (t.ci_sale_info.is_promote && !t.ci_sale_info.is_price && 0 == t.ci_sale_info.promote.scount && this.del(t.id), t.ci_sale_info.is_price && !t.ci_sale_info.is_promote && 0 == t.ci_sale_info.price.scount && this.del(t.id))
    },
    clear0Datas: function() {
        var t = this.getAll();
        if (t) for (var e in t) {
            var i = t[e];
            this.clear0data(i)
        }
    },
    getItemCount: function(t) {
        var e = this.get(t),
        i = 0,
        o = 0;
        return e && (e.ci_sale_info.is_promote && (i += e.ci_sale_info.promote.scount), e.ci_sale_info.is_price && (o += e.ci_sale_info.price.scount)),
        {
            total: i + o,
            pnum: i,
            nnum: o
        }
    },
    getCount: function() {
        var t = this._getAll(),
        e = 0;
        for (var i in t) if (/^\d+$/g.test(i)) {
            var o = t[i]; (o.ci_sale_info.promote.scount > 0 || o.ci_sale_info.price.scount > 0) && (e += 1)
        }
        return e
    },
    toFixed: function(t) {
        return (t.toFixed(2) + "").length < (t + "").length ? t.toFixed(2) : t
    },
    getNormalTotalPrice: function(t) {
        return this.toFixed(t.ci_sale_info.price.scount * this.getNormalPrice(t))
    },
    getNormalPrice: function(t) {
        var e = t.ci_sale_info.price.value;
        return t.commodity_total_price && (e = t.commodity_total_price),
        parseFloat(this.toFixed(e), 10)
    },
    getPromoteTotalPrice: function(t) {
        return this.toFixed(t.ci_sale_info.promote.scount * this.getPromotePrice(t))
    },
    getPromotePrice: function(t) {
        var e = t.ci_sale_info.promote.value;
        return t.standard_item_num > 0 && t.weight && t.price && (e = t.standard_item_num * t.weight * e),
        parseFloat(this.toFixed(e), 10)
    },
    totalPrice: function() {
        var t = this._getAll(),
        e = 0;
        for (var i in t) if (/^\d+$/g.test(i)) {
            var o = t[i];
            o.ci_sale_info.is_promote && (e += parseFloat(this.getPromoteTotalPrice(o), 10)),
            o.ci_sale_info.is_price && (e += parseFloat(this.getNormalTotalPrice(o), 10))
        }
        return this.toFixed(e)
    },
    getIdsList: function() {
        var t = this._getAll(),
        e = [];
        for (var i in t) / ^\d + $ /g.test(i) && e.push(i);
        return e
    },
    _markOutDate: function(t) {
        this._markPromoteOutdate(t),
        this._markNormalOutdate(t)
    },
    _markPromoteOutdate: function(t) {
        t.ci_sale_info.is_promote = 0,
        t.ci_sale_info.promote && (t.ci_sale_info.promote.outdate = !0)
    },
    _markNormalOutdate: function(t) {
        t.ci_sale_info.is_price = 0,
        t.ci_sale_info.price && (t.ci_sale_info.price.outdate = !0)
    },
    updatePriceData: function(t, e) {
        var i = t.ci_sale_info.price && t.ci_sale_info.price.scount || 0;
        t.ci_sale_info.price = e.ci_sale_info.price,
        t.ci_sale_info.price.scount = i,
        t.price = e.price,
        t.commodity_total_price = e.commodity_total_price
    },
    updatePromoteData: function(t, e) {
        var i = t.ci_sale_info.promote && t.ci_sale_info.promote.scount || 0;
        t.ci_sale_info.promote = e.ci_sale_info.promote,
        t.ci_sale_info.promote.scount = i
    },
    getOutDate: function() {
        var t = this.getAll(),
        e = [];
        for (var i in t) {
            var o = t[i].ci_sale_info;
            o.price.scount > 0 && o.price.outdate && e.push({
                id: t[i].id,
                type: "price"
            }),
            o.promote.scount > 0 && o.promote.outdate && e.push({
                id: t[i].id,
                type: "promote"
            })
        }
        return e
    },
    updateData: function(t) {
        var e = this._getAll();
        for (var i in e) {
            var o = e[i],
            n = null;
            if (/^\d+$/g.test(i)) for (var a = 0,
            s = t.length; s > a; a++) if (i == t[a].id) {
                n = t[a];
                break
            }
            n ? (n.ci_sale_info.is_price != o.ci_sale_info.is_price ? 1 == n.ci_sale_info.is_price ? (o.ci_sale_info.is_price = 1, this.updatePriceData(o, n)) : this._markNormalOutdate(o) : 1 == o.ci_sale_info.is_price && this.updatePriceData(o, n), n.ci_sale_info.is_promote != o.ci_sale_info.is_promote ? 1 == n.ci_sale_info.is_promote ? (o.ci_sale_info.is_promote = 1, this.updatePromoteData(o, n)) : this._markPromoteOutdate(o) : 1 == o.ci_sale_info.is_promote && this.updatePromoteData(o, n)) : this._markOutDate(o)
        }
        e && (this._storeAll(e), this.clear0Datas())
    }
};
var URLParams = function() {
    var t = location.search,
    e = new Object;
    if ( - 1 != t.indexOf("?")) {
        var i = t.substr(1);
        if ( - 1 != i.indexOf("&")) {
            strs = i.split("&");
            for (var o = 0; o < strs.length; o++) e[strs[o].split("=")[0]] = decodeURI(strs[o].split("=")[1])
        } else e[i.split("=")[0]] = decodeURI(i.split("=")[1])
    }
    return e
} (); !
function() {
    function t() {
        var t = URLParams.backdir;
        t && LinkUrlCollection[t] && $(".cart-logo1 a").attr("href", LinkUrlCollection[t].url).text(LinkUrlCollection[t].text)
    }
    function e() {
        if (localStorage) {
            var t = localStorage.getItem("version");
            t && t < version && localStorage.clear(),
            localStorage.setItem("version", version)
        }
    }
    function i() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
    }
    function o() {
        return i() + i() + i() + i() + i() + i() + i() + i()
    }
    window.USERKEY = "userInfo",
    window.version = "3.0",
    window.COL = "collection",
    window.$itemCount = $(".js-item-count"),
    window.$itemTotal = $(".js-item-total"),
    window.$selectedInfo = $(".selected-info-box"),
    window.statusMapping = {
        0 : {
            info: "已取消"
        },
        1 : {
            info: "待确认"
        },
        2 : {
            info: "商家已确认"
        },
        3 : {
            info: "后台确认"
        },
        10 : {
            info: "待采购中"
        },
        11 : {
            info: "采购中"
        },
        12 : {
            info: "已采购"
        },
        20 : {
            info: "待分拣"
        },
        21 : {
            info: "分拣中"
        },
        22 : {
            info: "已分拣"
        },
        30 : {
            info: "待配送"
        },
        31 : {
            info: "配送中"
        },
        32 : {
            info: "已送达"
        },
        40 : {
            info: "待支付"
        },
        41 : {
            info: "已支付"
        },
        50 : {
            info: "完成"
        }
    },
    window.dayMapping = {
        0 : "星期日",
        1 : "星期一",
        2 : "星期二",
        3 : "星期三",
        4 : "星期四",
        5 : "星期五",
        6 : "星期六"
    },
    window.LinkUrlCollection = {
        HOME: {
            url: "/mymeicai/index",
            text: "返回我的门店"
        },
        TALLY: {
            url: "/customOrder/tally",
            text: "返回填写订单"
        }
    },
    t(),
    e(),
    $refresh = $(".js-refresh"),
    $refresh && $refresh.click(function() {
        window.location.href = window.location.href + "?" + o()
    }),
    window.clearCacheItems = function() {
        for (var t in localStorage) PlusMinus.isItemObject(t) && delete localStorage[t]
    },
    window.bindCheckItem = function(t, e) {
        var i = t.parent().find(".js-sale_status");
        if ("0" == i.attr("sale_status").trim()) {
            if (e) {
                var o = "请您在每天" + i.attr("start_sale_time").trim() + "~" + i.attr("end_sale_time").trim() + "之间下单购买";
                alert(o)
            }
            return ! 1
        }
        return ! 0
    };
    var n = [];
    PlusMinus = {
        log: function(t, e, i) {
            i = i || "";
            var o = "",
            n = localStorage.getItem("userInfo");
            n && (n = JSON.parse(n), o = n.id),
            $.ajax({
                type: "post",
                dataType: "json",
                url: "/report/front",
                data: {
                    user: o,
                    request_url: encodeURIComponent(location.href),
                    error_info: e,
                    errno: t,
                    last_cart_info: i
                },
                success: function(t) {}
            })
        },
        toFixed: function(t) {
            var e = (Math.round(100 * Number(t)) / 100).toFixed(2);
            return "00" === e.slice( - 2) && (e = Number(e).toFixed(0)),
            e
        },
        detailHTMLTemple: function(t, e, i) {
            if (t) {
                var o = this,
                a = o.getKeyName(t),
                s = o.getLocateObj(a),
                r = s ? s.count: 0,
                c = "";
                t.sell_brand = t.sell_brand || "",
                t.level = t.level || "",
                c = "" !== t.sell_brand.trim() && "" !== t.level.trim() ? t.sell_brand.trim() + " | " + t.level.trim() : "" === t.sell_brand.trim() ? t.level: t.sell_brand,
                c.length && (c = "(<span class='js-level'>" + c + "</span>)");
                var l = "";
                window.isPreview || (t.is_favorite = t.is_favorite || 0, l = +t.is_favorite > 0 ? "<span class='ml5 font16 js-favorite favorite'></span>": "<span class='ml5 font16 js-favorite unfavorite'></span>");
                var d = "",
                p = null,
                h = null;
                if ( + t.promote_type > 0 && (p = "'" + t.promote_detail + "'"), t.is_next_day && (h = "'" + t.show_next_day_detail + "'"), "0" != t.promote_type && null != t.promote_type && (d = '<a style="padding-right:3px;"  href="javascript:void(0);" onclick="popupDialog(' + p + "," + h + ")\" ><img src='/../../image/ge/icon_cu_ss.png'></a>"), t.is_next_day) {
                    var u = '<a style="padding-right:3px;" href="javascript:void(0);" onclick="popupDialog(' + p + "," + h + ')" ><img src="/../../image/ge/icon_ge_ss.png"> </a>';
                    d += u
                }
                if (null != d && "" != d) {
                    var f = '<a style="font-size:0.8em;position:relative;bottom:3px " href="javascript:void(0);" onclick="popupDialog(' + p + "," + h + ')" >详情</a>';
                    d += f
                }
                var m = "";
                t.subject && "" !== t.subject.trim() && (m = "<div class='js-subject' >" + t.subject.trim() + "</div>");
                var v = t.is_next_day ? !0 : !1,
                g = '<input type="hidden" id="isNextDay" value="' + v + '">',
                _ = this.toFixed(t.commodity_total_price ? t.commodity_total_price: t.price),
                b = "",
                y = "",
                x = "";
                if (t.price_unit != t.unit && t.price_unit || +t.standard_item_num > 1) {
                    b = "<div class='js-price-ref'>平均每" + t.price_unit + this.toFixed(t.price) + "元</div>",
                    t.ci_package && (b = "<div class='js-price-ref'>平均每" + t.price_unit + this.toFixed(t.price) + "元" + t.ci_package.ci_msg + "</div>");
                    var w = ""; + t.standard_item_num > 1 && (w = '<span class="select-count">已选<span class="js-input-echo">' + r + "</span>" + t.format + "</span>"),
                    y = '<div class="price select-price"><input type="hidden" class="js-standard-item-num" value="' + t.standard_item_num + '">' + w + '共<span class="js-chosen-count-con"><span class="js-chosen-count">' + r * parseInt(t.standard_item_num) + "</span>" + t.unit + "</span></div> ",
                    t.price_unit != t.unit && _ != t.price && (x = "<span class='price'>约</span> ")
                }
                t.format = t.format || "";
                var S = '<span class="js-format">' + t.format + "</span>";
                t.standard_item_num && t.standard_item_num > 1 && (b = t.ci_package ? "<div class='js-price-ref'> 每" + t.price_unit + this.toFixed(t.price) + "元" + t.ci_package.ci_msg + "</div>": "<div class='js-price-ref'> 每" + t.price_unit + this.toFixed(t.price) + "元</div>"),
                t.ci_package && (S = '<span class="js-format">' + t.format + t.ci_package.package_msg + "</span>");
                var j = "",
                I = "",
                C = "";
                t.pic ? (I = "http://img.yunshanmeicai.com/" + t.pic + "_thumb.png", C = "http://img.yunshanmeicai.com/" + t.pic + ".png", j = '<div class="ml10 product-img-wrapper"><img  class="product-img" data-src="' + I + '" data-srcOriginal="' + C + '"></div>') : (I = "/../../assets/weixin/image/good_no_img.png", C = "/../../assets/weixin/image/good_no_img_origin.png", j = '<div class="ml10 product-img-wrapper"><img class="product-img" data-src="' + I + '" data-srcOriginal="' + C + '"></div>');
                var M = '<div style="position:absolute;top:0;left:0;background:rgba(0,0,0,0.5);color:#fff;text-align:center;" class="hide js-td1-mask"></div>',
                E = " ";
                t.hasOwnProperty("sale_status") && (E = t.sale_status);
                var k = " ";
                t.hasOwnProperty("start_sale_time") && (k = t.start_sale_time);
                var T = " ";
                t.hasOwnProperty("end_sale_time") && (T = t.end_sale_time);
                var L = ' <a class="js-minus cp font20" style="color:#86a744;font-weight:bold;border: 1px solid;" onclick="staticminuscheck()">－</a><input type="tel" class="js-count tc" pattern="d*" style="width:36px;line-height:18px;" value=' + r + ' /> <input type="hidden" class="js-primary-key" value="' + t.id + '"><input type="hidden" class="promote_type" value="' + (t.promote_type || "") + '"><input type="hidden" class="promote_amount" value="' + (t.promote_amount || 0) + '"><input type="hidden" class="promote_limit" value="' + (t.promote_limit || 0) + '"><input type="hidden" class="js-sale_status" sale_status="' + E + '" start_sale_time="' + k + '" end_sale_time="' + T + '"/><a class="js-plus cp font20" style="color:#21b387;font-weight:bold;border: 1px solid;" onclick="staticaddcheck()">＋</a>',
                B = "43%",
                F = "";
                i && (F = "<td style='width:15%;' class='v-m'><a href='javascript:void(0);' class='js-delete-row'>删除</a></td>", B = "35%"),
                t.outOfDate && (L = "<span class='price'>超出售卖时间</span>", y = ""),
                t.noPrice && (L = "<span class='price'>商品已下架</span>", y = "");
                var P = j + '<div class="modifydiv" style="height:40px;line-height:40px;font-size:16px;">' + L + "</div>" + y;
                if (!e) if (0 == n.length) n.push(t.id);
                else for (var A = n.sort(), D = 0; D < A.length; D++) {
                    if (A[D] == t.id) return "";
                    if ( - 1 == $.inArray(t.id, n)) {
                        n.push(t.id);
                        break
                    }
                    return ""
                }
                n = [];
                var O = '<tr class="calculate" itemname="' + t.class1 + '"><td class="ci_id_info" itemid="' + t.id + '" style="padding-left:15px;position:relative;"><div class="title-con n-cang"><span class="js-c-name">' + (t.name || "") + "</span>" + c + l + "</div>" + (t.alias ? '<span class="js-alias">' + t.alias + "</span>": "") + m + M + '<div class="price-des">' + x + '<span class="js-price price">' + _ + "</span>元/" + S + b + "</div>" + d + g + '  </td>  <td class="v-m" style="width:' + B + ';text-align:center;">' + P + "  </td>" + F + "</tr>";
                return O
            }
        },
        promoteMin: function(t) {
            var e = 0;
            return 2 == t.promote_type ? e = t.daily_limit: 1 == t.promote_type ? e = t.amount: 3 == t.promote_type && (e = Math.min(t.amount, t.daily_limit)),
            e
        },
        validAmount: function(t, e) {
            function i() {
                var e = $(t).closest(".ci_goods");
                return 2 == p.promote_type ? (o(p.daily_limit), s.status ? e.find(".ci-warning").remove() : "/cart/index" == location.pathname || "/preview/cart" == location.pathname ? e.find(".ci-warning").length > 0 ? e.find(".ci-warning").text("超过单店购买上限,最多" + p.daily_limit) : e.prepend("<div class='ci-warning' style='color: #ff0a0a; padding: 0px 0 10px;font-weight: bold; border-bottom: 1px solid #fff;margin-bottom: 10px;'>超过单店购买上限,最多" + p.daily_limit + "</div>") : jsAlert("超过单店购买上限,最多" + p.daily_limit)) : 1 == p.promote_type ? (o(p.amount), s.status ? e.find(".ci-warning").remove() : "/cart/index" == location.pathname || "/preview/cart" == location.pathname ? e.find(".ci-warning").length > 0 ? e.find(".ci-warning").text("超过限购总量,最多" + p.amount) : e.prepend("<div class='ci-warning' style='color: #ff0a0a; padding: 0px 0 10px;font-weight: bold; border-bottom: 1px solid #fff;margin-bottom: 10px;'>超过限购总量,最多" + p.amount + "</div>") : jsAlert("超过限购总量,最多" + p.amount)) : 3 == p.promote_type && (o(h), s.status ? e.find(".ci-warning").remove() : p.daily_limit == h ? "/cart/index" == location.pathname || "/preview/cart" == location.pathname ? e.find(".ci-warning").length > 0 ? e.find(".ci-warning").text("超过单店购买上限,最多" + p.daily_limit) : e.prepend("<div class='ci-warning' style='color: #ff0a0a; padding: 0px 0 10px;font-weight: bold; border-bottom: 1px solid #fff;margin-bottom: 10px;'>超过单店购买上限,最多" + p.daily_limit + "</div>") : jsAlert("超过单店购买上限,最多" + p.daily_limit) : "/cart/index" == location.pathname || "/preview/cart" == location.pathname ? e.find(".ci-warning").length > 0 ? e.find(".ci-warning").text("超过限购总量,最多" + p.amount) : e.prepend("<div class='ci-warning' style='color: #ff0a0a; padding: 0px 0 10px;font-weight: bold; border-bottom: 1px solid #fff;margin-bottom: 10px;'>超过限购总量,最多" + p.amount + "</div>") : jsAlert("超过限购总量,最多" + p.amount)),
                s
            }
            function o(t) {
                e ? n > t && (s.status = !1) : n > t && (s.status = !1)
            }
            var n, a = this,
            s = {
                max: 0,
                status: !0
            },
            r = 999,
            c = $(t).parent().parent(),
            l = c.find(".js-count");
            n = l.length > 0 ? +l.val().trim() : 0;
            var d = c.find(".promote_type");
            if (null != d.val() && 0 != d.val()) {
                var p = {
                    amount: +c.find(".promote_amount").val(),
                    daily_limit: +c.find(".promote_limit").val(),
                    promote_type: +c.find(".promote_type").val()
                },
                h = a.promoteMin(p);
                if (s.max = h, 0 != p.promote_type && null != p.promote_type) {
                    var u = Math.max(p.daily_limit, p.amount);
                    if (0 == u) return jsAlert(1 == p.promote_type ? "超过限购总量,最多" + u: 2 == p.promote_type ? "超过单店购买上限,最多" + u: "超过限购总量,最多" + u),
                    s.status = !1,
                    s
                }
                i()
            } else if (e) {
                if (n > r) return jsAlert("数量不能超过" + r + "！"),
                s.status = !1,
                s.max = r,
                s
            } else if (n > r) return jsAlert("数量不能超过" + r + "！"),
            s.status = !1,
            s.max = r,
            s;
            return s
        },
        bindPlusMinusEvent: function(t, e) {
            var i = this;
            $tr = $(t);
            var o = e.countChangeCallBack ||
            function() {};
            $tr.find(".js-minus").click(function() {
                if (bindCheckItem($(this), !0)) {
                    var t = ($(this).closest(".calculate"), $(this).parent().parent()),
                    e = t.find(".js-count");
                    $(this).closest(".ci_goods").find(".ci-warning").remove();
                    var n = window.parseInt(e.val());
                    if (newVal = n > 0 ? n - 1 : 0, 0 == newVal && cartpage) {
                        var a = confirm("确定要删除吗?");
                        if (a) {
                            var s = $(this).closest(".calculate").find(".js-primary-key").val();
                            void 0 == s && (s = $(this).parent().parent().find("td")[0].getAttribute("itemid"));
                            var r = $(this).closest(".calculate").find(".js-f_activity").val();
                            r && (s = s + "_" + r),
                            i.storeDelete(s);
                            var c = $(this).closest(".si_good");
                            $(this).closest(".calculate").remove();
                            var l = c.find(".calculate");
                            if (0 == l.length && c.remove(), ("/cart/index" == location.pathname || "/cart" == location.pathname || "/preview/cart" == location.pathname) && i.refreshSITotlePriceAndCount(c), PlusMinus.setSelectedInfo(), 0 == PlusMinus.totalCount()) {
                                $(".js-content").empty();
                                var d = ' <div style="padding-top:50px;text-align:center"><img width="160px" src="/assets/weixin/image/no-good.png"><p style="padding-top:28px;color:#bdbdc7;">购物车空空的，快去选购吧！</p><a style="display: block;color: #1eb489;border: 1px solid #1eb489;border-radius: 6px;line-height: 36px;font-size: 14px;margin:22px 14px;"href="/">返回首页</a></div>';
                                $(".js-content").html(d)
                            }
                            return PlusMinus.resetReceiveData(),
                            o(),
                            $(".js-content").scrollTop(10),
                            $(".js-content").scrollTop() > 0 || ($(".showcall").css("position", "fixed"), $(".showcall").css("bottom", "101px")),
                            $(".js-content").scrollTop(0),
                            !1
                        }
                    } else if (e.val(newVal), PlusMinus.storeData(t.parent()), o(), i.resetReceiveData(), "/cart/index" == location.pathname || "/cart" == location.pathname || "/preview/cart" == location.pathname) {
                        var p = $(this).closest(".si_good");
                        PlusMinus.refreshSITotlePriceAndCount(p)
                    }
                }
            }),
            $tr.find(".js-plus").click(function() {
                if (bindCheckItem($(this), !0)) {
                    var t = ($(this).closest(".calculate"), $(this).parent().parent()),
                    e = t.find(".js-count"),
                    n = window.parseInt(e.val());
                    newVal = -1 > n ? 0 : n + 1,
                    e.val(newVal),
                    $(this).closest(".ci_goods").find(".ci-warning").remove();
                    var a = i.validAmount(this, !0);
                    if (!a.status) return void(e.val() > a.max && e.val(a.max));
                    if (PlusMinus.storeData(t.parent()), o(), i.resetReceiveData(), "/cart/index" == location.pathname || "/cart" == location.pathname || "/preview/cart" == location.pathname) {
                        var s = $(this).closest(".si_good");
                        PlusMinus.refreshSITotlePriceAndCount(s)
                    }
                }
            });
            var n;
            $tr.find(".js-count").keypress(function(t) {
                var e = t.keyCode;
                e = String.fromCharCode(e);
                var i = /[0-9]/;
                i.test(e) || (t.returnValue = !1, t.preventDefault && t.preventDefault())
            }).click(function() {
                return n = $(this).val(),
                bindCheckItem($(this), !0) ? void this.setSelectionRange(0, this.value.length) : void $(this).blur()
            }).change(function() {
                var t = i.validAmount(this);
                if (!t.status) return $(this).val(t.max),
                void t.max;
                var e = ($(this).closest(".calculate"), $(this).val().toString().trim());
                if (0 == !cartpage && (0 == e || "" == e && cartpage)) {
                    var a = confirm("确定要删除吗?");
                    if (a) {
                        var s = $(this).closest(".calculate").find(".js-primary-key").val();
                        void 0 == s && (s = $(this).parent().parent().find("td")[0].getAttribute("itemid"));
                        var r = $(this).closest(".calculate").find(".js-f_activity").val();
                        r && (s = s + "_" + r),
                        i.storeDelete(s);
                        var c = $(this).closest(".si_good");
                        $(this).closest(".calculate").remove();
                        var l = c.find(".calculate");
                        if (0 == l.length && c.remove(), PlusMinus.setSelectedInfo(), 0 == PlusMinus.totalCount()) {
                            $(".js-content").empty();
                            var d = ' <div style="padding-top:50px;text-align:center"><img width="160px" src="/assets/weixin/image/no-good.png"><p style="padding-top:28px;color:#bdbdc7;">购物车空空的，快去选购吧！</p><a style="display: block;color: #1eb489;border: 1px solid #1eb489;border-radius: 6px;line-height: 36px;font-size: 14px;margin:22px 14px;"href="/">返回首页</a></div>';
                            $(".js-content").html(d)
                        }
                        return PlusMinus.resetReceiveData(),
                        o(),
                        $(".js-content").scrollTop(10),
                        $(".js-content").scrollTop() > 0 || ($(".showcall").css("position", "fixed"), $(".showcall").css("bottom", "101px")),
                        $(".js-content").scrollTop(0),
                        !1
                    }
                    return $(this).val(n),
                    !1
                }
                if (!/^[0-9]+$/.test(e)) {
                    var p = parseInt(e);
                    return isNaN(p) ? $(this).val(0) : $(this).val(p),
                    alert("请输入整数!"),
                    !1
                }
            }).focus(function() {
                $(this).val().toString().trim()
            }).blur(function() {
                var t = $(this).closest(".calculate"),
                e = $(this).val().toString().trim();
                if (0 != e && (e = e.replace(/\b(0+)/gi, "")), "" === e && $(this).val("0"), $(this).val(e), bindCheckItem($(this), !1) && (PlusMinus.storeData(t), o(), i.resetReceiveData(), "/cart/index" == location.pathname || "/cart" == location.pathname || "/preview/cart" == location.pathname)) {
                    var n = $(this).closest(".si_good");
                    PlusMinus.refreshSITotlePriceAndCount(n)
                }
            }),
            $tr.find(".js-delete-row").click(function() {
                baidustatic("删除商品操作", "购物车删除商品");
                var t = confirm("确定要删除吗?");
                if (t) {
                    var e = $(this).closest(".calculate").find(".js-primary-key").val();
                    void 0 == e && (e = $(this).closest(".calculate").find(".ci_id_info")[0].getAttribute("itemid"));
                    var n = $(this).closest(".calculate").find(".js-f_activity").val();
                    n && (e = e + "_" + n),
                    i.storeDelete(e);
                    var a = $(this).closest(".si_good");
                    $(this).closest(".calculate").remove(),
                    ("/cart/index" == location.pathname || "/preview/cart" == location.pathname) && i.refreshSITotlePriceAndCount(a);
                    var s = a.find(".calculate");
                    if (0 == s.length && a.remove(), PlusMinus.setSelectedInfo(), 0 == PlusMinus.totalCount() && 0 == $(".cart-wrapper ").find(".si_good").length) {
                        $(".js-content").empty();
                        var r = ' <div style="padding-top:50px;text-align:center"><img width="160px" src="/assets/weixin/image/no-good.png"><p style="padding-top:28px;color:#bdbdc7;">购物车空空的，快去选购吧！</p><a style="display: block;color: #1eb489;border: 1px solid #1eb489;border-radius: 6px;line-height: 36px;font-size: 14px;margin:22px 14px;"href="/">返回首页</a></div>';
                        $(".js-content").html(r)
                    }
                    PlusMinus.resetReceiveData(),
                    o(),
                    $(".js-content").scrollTop(10),
                    $(".js-content").scrollTop() > 0 || ($(".showcall").css("position", "fixed"), $(".showcall").css("bottom", "101px")),
                    $(".js-content").scrollTop(0)
                }
            })
        },
        bindAddFavoriteEvent: function(t, e) {
            $tr = $(t),
            $favorite = $tr.find(".js-add-favorite");
            var i = $(document).find(".js-favorite-count");
            $favorite.click(function() {
                $this = $(this);
                var t = $this.hasClass("unfavorite"),
                e = $this.closest("tr").find(".js-primary-key").val().trim(),
                o = (localStorage[window.COL] || "").split(",");
                t ? ($this.removeClass("unfavorite").addClass("favorite").html("取消"), localStorage[window.COL] = (localStorage[window.COL] || "") + "," + e) : ($this.removeClass("favorite").addClass("unfavorite").html("收藏"), localStorage[window.COL] = _.without(o, e).join(","));
                var n = _.chain(localStorage[window.COL].split(",")).without("").uniq().value();
                localStorage[window.COL] = n.join(","),
                i.text(n.length)
            })
        },
        bindToggleFavorite: function(t, e) {
            if (!window.isPreview) {
                e = e ||
                function() {};
                _.each(t.find("tr td:nth-child(1)"),
                function(t) {
                    var i = $(t).find(".n-cang");
                    i.click(function() {
                        $this = $(this);
                        var t = $this.parent().parent().find(".js-primary-key").val(),
                        i = $this.find(".js-favorite"),
                        o = i.hasClass("favorite") > 0 ? "cancel": "add",
                        n = {
                            c_id: t
                        },
                        a = $this.parent().find(".js-td1-mask");
                        if (!a.hasClass("hide")) return void a.addClass("hide");
                        var s = $(this).closest("td");
                        "cancel" == o ? a.removeClass("hide").css({
                            width: s.width(),
                            height: s.height(),
                            "line-height": s.height() + "px"
                        }).text("正在取消收藏...") : a.removeClass("hide").css({
                            width: s.width(),
                            height: s.height(),
                            "line-height": s.height() + "px"
                        }).text("正在收藏...");
                        var r = "/userCollection/" + o;
                        window.isPreview && (r = "/preview/favorite"),
                        $.post(r, n,
                        function(t) {
                            t.status ? ("cancel" == o ? (staticfavaddcheck(), i.removeClass("favorite").addClass("unfavorite")) : (staticfavcancelcheck(), i.removeClass("unfavorite").addClass("favorite")), e(o, i), a.addClass("hide")) : (jsAlert(t.msg), a.addClass("hide"))
                        },
                        "json")
                    })
                })
            }
        },
        isItemObject: function(t) {
            var e = t.match(/^(\d+)(_)?(\d+)?$/);
            return e && e.length && (e = "undefined" != typeof e[3] ? [e[1], e[3]] : [e[1]]),
            e
        },
        storeToLocate: function(t) {
            var e = this;
            if (t.id) {
                var i = this.getKeyName(t);
                localStorage.setItem(i, e.stringifyData(t))
            }
        },
        storeDelete: function(t) {
            var e = this.isItemObject(t);
            if (e && 2 == e.length) for (var i in localStorage) {
                var o = this.isItemObject(i);
                o && 2 == o.length && e[0] == o[0] && localStorage.removeItem(i)
            } else localStorage.removeItem(t)
        },
        getKeyName: function(t) {
            var e = t.id;
            return t.f_activity && (e = t.id + "_" + t.f_activity),
            e
        },
        parseData: function(t) {
            var e;
            try {
                return e = JSON.parse(t)
            } catch(i) {}
        },
        stringifyData: function(t) {
            var e = "";
            try {
                return e = JSON.stringify(t)
            } catch(i) {}
        },
        getLocateStr: function(t) {
            return localStorage.getItem(t) || ""
        },
        getLocateObj: function(t) {
            return this.parseData(this.getLocateStr(t))
        },
        storeData: function(t) {
            var e = t.find(".js-primary-key").val().trim(),
            i = this;
            if ("fav" != $("#mainListBlock").attr("page") || $(".js-content").hasClass("hide")) _.each(data3,
            function(o) {
                if (o.id == e) {
                    var n = t.find(".js-count").val().trim(),
                    a = o;
                    a.count = n,
                    a.id = e,
                    a.outOfDate = !1,
                    a.noPrice = !1;
                    var s = i.getKeyName(a);
                    if (n > 0 ? i.storeToLocate(a) : i.storeDelete(s), t.find(".js-standard-item-num").size() > 0) {
                        var r = parseInt(t.find(".js-standard-item-num").val());
                        t.find(".js-chosen-count").text(r * n)
                    }
                    var c = t.find(".js-input-echo");
                    c.length > 0 && c.text(n),
                    PlusMinus.setSelectedInfo()
                }
            });
            else {
                var o = t.attr("itemname");
                _.each(data3[o],
                function(o) {
                    if (o.id == e) {
                        var n = t.find(".js-count").val().trim(),
                        a = o;
                        a.count = n,
                        a.id = e,
                        a.outOfDate = !1,
                        a.noPrice = !1;
                        var s = i.getKeyName(a);
                        if (n > 0 ? i.storeToLocate(a) : i.storeDelete(s), t.find(".js-standard-item-num").size() > 0) {
                            var r = parseInt(t.find(".js-standard-item-num").val());
                            t.find(".js-chosen-count").text(r * n)
                        }
                        var c = t.find(".js-input-echo");
                        c.length > 0 && c.text(n),
                        PlusMinus.setSelectedInfo()
                    }
                })
            }
        },
        setSelectedInfo: function() {
            $itemCount.html(PlusMinus.totalCount()),
            $itemTotal.html(PlusMinus.totalPrice()),
            window.cartpage || (PlusMinus.totalCount() > 0 ? $selectedInfo.show() : $selectedInfo.hide())
        },
        totalPrice: function() {
            var t = this,
            e = 0;
            for (var i in localStorage) if (t.isItemObject(i) && (obj = t.getLocateObj(i), !obj.outOfDate && !obj.noPrice && !obj.noGood)) {
                var o = obj.price;
                obj.commodity_total_price && obj.price && obj.commodity_total_price != obj.price && (o = obj.commodity_total_price),
                e += parseFloat(PlusMinus.toFixed(parseFloat(obj.count) * parseFloat(o)))
            }
            return Math.round(100 * e) / 100
        },
        totalCount: function() {
            var t = this,
            e = 0;
            for (var i in localStorage) t.isItemObject(i) && e++;
            return e
        },
        resetReceiveData: function() {
            var t = new Date;
            this.isOnlyBermorgen() ? (t.setDate(t.getDate() + 2), $(".js-day").html("后天")) : (t.setDate(t.getDate() + 1), $(".js-day").html("明天"));
            var e = t.getMonth() + 1 > 9 ? t.getMonth() + 1 : "0" + (t.getMonth() + 1),
            i = t.getDate() > 9 ? t.getDate() : "0" + t.getDate(),
            o = t.getFullYear() + "-" + e + "-" + i;
            $(".js-deal-receive-date").val(o)
        },
        isOnlyBermorgen: function() {
            var t = 0,
            e = 0;
            for (var i in localStorage) if (PlusMinus.isItemObject(i)) {
                var o = JSON.parse(localStorage[i]);
                o.is_next_day && null != o.is_next_day && "false" != o.is_next_day && e++,
                t++
            }
            return t == e ? !0 : !1
        },
        getPostId: function() {
            var t = {
                ids: []
            };
            for (var e in localStorage) if (this.isItemObject(e)) {
                var i = this.getLocateObj(e);
                t.ids.push(i.id)
            }
            return t
        },
        getPostData: function() {
            var t = [];
            for (var e in localStorage) if (this.isItemObject(e)) {
                var i = this.getLocateObj(e);
                t.push(i)
            }
            return t
        },
        getIds: function() {
            var t = [];
            for (var e in localStorage) if (this.isItemObject(e)) {
                var i = this.getLocateObj(e);
                t.push(i.id)
            }
            return t
        },
        getOutdate: function(t) {
            var e = [];
            for (var i in localStorage) if (this.isItemObject(i)) {
                var o = {};
                try {
                    o = this.getLocateObj(i);
                    var n = _.find(t,
                    function(t) {
                        return t.id == o.id ? t && t.hasOwnProperty("id") ? 0 !== t.promote_amount ? 1 == t.sale_status && 0 !== t.price: t.noPrice || t.outOfDate ? !1 : 1 == t.promote_type || 3 == t.promote_type ? !1 : !0 : !1 : void 0
                    });
                    n || e.push(o.id)
                } catch(a) {
                    this.log("102", a.message, o)
                }
            }
            return e
        },
        getSIListFromCIList: function(t) {
            var e = {};
            return _.each(t,
            function(t) {
                e["" + t.si_id] ? e["" + t.si_id].push(t) : e[t.si_id.toString()] = [t]
            }),
            e
        },
        lazyLoadProductImg: function(t, e) {
            function i() {
                n.each(function(i, o) {
                    var n = $(this).offset().top,
                    a = $(this);
                    t.hasClass("cart-wrapper") ? a.attr("src", a.attr("data-src")).removeClass("product-img") : e ? a.attr("src", a.attr("data-src")).removeClass("product-img") : s > n && a.attr("src", a.attr("data-src")).removeClass("product-img")
                })
            }
            var o = t,
            n = o.find(".product-img"),
            a = o.offset().top,
            s = a + o.height();
            n.on("click",
            function() {
                var t = $(window).height(),
                e = "/assets/image/common/product-image-loader.gif",
                i = $('<div class="popup-pic-wrapper" style="width:100%; text-align:center; position:fixed; top:0; left:0; z-index:99; background:url(' + e + ") center center no-repeat rgba(204,204,204,.8);  height:" + t + 'px;"><span style="display:inline-block; height:100%; vertical-align: middle;"></span><img src="' + $(this).attr("data-srcOriginal") + '" style="max-width:100%; max-height:100%; vertical-align: middle;"></div>');
                i.appendTo("body"),
                i.on("click",
                function() {
                    $(this).remove()
                }),
                staticimgclick()
            }),
            i(),
            o.unbind("scroll").bind("scroll",
            function() {
                i()
            })
        },
        isTouchDevice: function() {
            try {
                return document.createEvent("TouchEvent"),
                !0
            } catch(t) {
                return ! 1
            }
        },
        touchScroll: function(t) {
            if (this.isTouchDevice()) {
                var e = (document.getElementById(t), 0);
                document.getElementById(t).addEventListener("touchstart",
                function(t) {
                    e = this.scrollTop + t.touches[0].pageY
                },
                !1),
                document.getElementById(t).addEventListener("touchmove",
                function(t) {
                    this.scrollTop = e - t.touches[0].pageY
                },
                !1)
            }
        },
        touchScrollY: function(t) {
            if (this.isTouchDevice()) {
                var e = (document.getElementById(t), 0);
                document.getElementById(t).addEventListener("touchstart",
                function(t) {
                    e = this.scrollLeft + t.touches[0].pageX
                },
                !1),
                document.getElementById(t).addEventListener("touchmove",
                function(t) {
                    this.scrollLeft = e - t.touches[0].pageX
                },
                !1)
            }
        },
        propertyExist: function(t) {
            return t in document.body.style ? !0 : !1
        },
        showLoading: function(t) {
            var e = "loading-con",
            i = $(t),
            o = i.find("." + e);
            if (o.length) o.show();
            else {
                var n = '<div class="' + e + '" style="padding:20px 0;text-align:center;">                </div>';
                i.html(n)
            }
        },
        hideLoading: function(t) {
            var e = "loading-con",
            i = $(t),
            o = i.find("." + e);
            o.length && o.hide()
        },
        isLowerAndriod3: function() {
            var t = navigator.userAgent;
            if (t.indexOf("Android") >= 0) {
                var e = parseFloat(t.slice(t.indexOf("Android") + 8));
                if (3 > e) return ! 0
            }
            return ! 1
        },
        refreshSITotlePriceAndCount: function(t) {
            var e = t.find(".si_unit"),
            i = t.find(".si_price_text").find(".si_vital"),
            o = t.find(".js-primary-key"),
            n = 0,
            a = 0;
            _.each(o,
            function(t) {
                var e = t.value,
                i = JSON.parse(localStorage[e]);
                i.outOfDate || i.noPrice || i.noGood || (n = parseInt(parseInt(n) + i.standard_item_num * parseInt(i.count)), a = i.commodity_total_price ? PlusMinus.toFixed(parseFloat(a) + i.commodity_total_price * parseInt(i.count)) : 0)
            }),
            e.text(n),
            i.text(a)
        }
    },
    PlusMinus.setSelectedInfo()
} ();
var footerActive = {
    reset: function() {
        $(".foot-menu .foot-tab").find("a").removeClass("active")
    },
    active: function(t) {
        this.reset(),
        $(".foot-menu").find("div." + t).find("a").addClass("active")
    },
    activeIndex: function() {
        $(".foot-menu .index span").removeClass("meicai-icon-homepage").addClass("meicai-icon-homepage2"),
        this.active("index")
    },
    activeAllgoods: function() {
        $(".foot-menu .allgoods span").removeClass("meicai-icon-Basket2").addClass("meicai-icon-Basket"),
        this.active("allgoods")
    },
    activeCart: function() {
        $(".foot-menu .cart span").removeClass("meicai-icon-Group2").addClass("meicai-icon-Group"),
        this.active("cart")
    },
    activeHome: function() {
        $(".foot-menu .home span").removeClass("meicai-icon-my").addClass("meicai-icon-my2"),
        this.active("home")
    }
},
FSE = {
    eArr: null,
    actIndex: 0,
    fixedDiv: null,
    IsIE: !!document.all,
    IsPC: function() {
        var t = {
            win: !1,
            mac: !1,
            xll: !1
        },
        e = navigator.platform;
        return t.win = 0 == e.indexOf("Win"),
        t.mac = 0 == e.indexOf("Mac"),
        t.x11 = "X11" == e || 0 == e.indexOf("Linux"),
        t.win || t.mac || t.xll ? !0 : !1
    },
    scrollTop: function() {
        return Math.max(document.body.scrollTop, document.documentElement.scrollTop)
    },
    bind: function(t, e) {
        t.length < 1 || (this.eArr = t, e ? (this.fixedDiv = document.createElement("div"), this.fixedDiv.className = e, this.fixedDiv.style.position = "fixed", this.fixedDiv.id = "_scrollfixed") : (this.fixedDiv = document.createElement("div"), this.fixedDiv.className = "FSE-default", this.fixedDiv.id = "_scrollfixed"), this.IsPC() ? this.IsIE ? window.attachEvent("onscroll", this.active) : window.addEventListener("scroll", this.active, !1) : (window.addEventListener("scroll", this.active, !1), window.addEventListener("touchmove", this.active, !1)))
    },
    unbind: function() {
        this.eArr = null,
        this.actIndex = 0,
        this.fixedDiv = null,
        this.IsPC() ? this.IsIE ? window.detachEvent("onscroll", this.active) : window.removeEventListener("scroll", this.active, !1) : (window.removeEventListener("scroll", this.active, !1), window.removeEventListener("touchmove", this.active, !1))
    },
    active: function() {
        var t = document.getElementById("_scrollfixed");
        if (FSE.scrollTop() < FSE.eArr[FSE.actIndex].offsetTop) {
            if (t) if (0 == FSE.actIndex) document.body.removeChild(t);
            else {
                var e = FSE.eArr[FSE.actIndex].offsetTop - FSE.scrollTop();
                e > FSE.eArr[FSE.actIndex - 1].offsetHeight && (e = FSE.eArr[FSE.actIndex - 1].offsetHeight),
                t.style.top = e - FSE.eArr[FSE.actIndex - 1].offsetHeight + "px",
                t.innerHTML = FSE.eArr[FSE.actIndex - 1].innerHTML,
                FSE.actIndex--
            }
        } else FSE.actIndex < FSE.eArr.length - 1 ? FSE.scrollTop() >= FSE.eArr[FSE.actIndex].offsetTop && FSE.scrollTop() < FSE.eArr[FSE.actIndex + 1].offsetTop ? (t || (t = FSE.fixedDiv, t.style.top = "0px", t.innerHTML = FSE.eArr[FSE.actIndex].innerHTML, document.body.appendChild(t)), FSE.scrollTop() >= FSE.eArr[FSE.actIndex + 1].offsetTop - FSE.eArr[FSE.actIndex].offsetHeight && FSE.scrollTop() < FSE.eArr[FSE.actIndex + 1].offsetTop ? t.style.top = "-" + (FSE.scrollTop() + FSE.eArr[FSE.actIndex].offsetHeight - FSE.eArr[FSE.actIndex + 1].offsetTop) + "px": t.style.top = "0px") : FSE.scrollTop() >= FSE.eArr[FSE.actIndex + 1].offsetTop && (t ? (t.innerHTML = FSE.eArr[FSE.actIndex + 1].innerHTML, t.style.top = "0px") : (t = FSE.fixedDiv, t.style.top = "0px", t.innerHTML = FSE.eArr[FSE.actIndex + 1].innerHTML, document.body.appendChild(t)), FSE.actIndex++) : t || (t = FSE.fixedDiv, t.innerHTML = FSE.eArr[FSE.actIndex].innerHTML, document.body.appendChild(t))
    }
};
Number.prototype.add = function(t) {
    var e, i, o, n, a;
    try {
        e = this.toString().split(".")[1].length
    } catch(s) {
        e = 0
    }
    try {
        i = t.toString().split(".")[1].length
    } catch(s) {
        i = 0
    }
    if (n = Math.abs(e - i), o = Math.pow(10, Math.max(e, i)), n > 0) {
        var r = Math.pow(10, n);
        e > i ? (a = Number(this.toString().replace(".", "")), t = Number(t.toString().replace(".", "")) * r) : (a = Number(this.toString().replace(".", "")) * r, t = Number(t.toString().replace(".", "")))
    } else a = Number(this.toString().replace(".", "")),
    t = Number(t.toString().replace(".", ""));
    return (a + t) / o
},
Number.prototype.sub = function(t) {
    var e, i, o, n;
    try {
        e = this.toString().split(".")[1].length
    } catch(a) {
        e = 0
    }
    try {
        i = t.toString().split(".")[1].length
    } catch(a) {
        i = 0
    }
    return o = Math.pow(10, Math.max(e, i)),
    n = e >= i ? e: i,
    ((this * o - t * o) / o).toFixed(n)
},
Number.prototype.mul = function(t) {
    var e = 0,
    i = this.toString(),
    o = t.toString();
    try {
        e += i.split(".")[1].length
    } catch(n) {}
    try {
        e += o.split(".")[1].length
    } catch(n) {}
    return Number(i.replace(".", "")) * Number(o.replace(".", "")) / Math.pow(10, e)
},
Number.prototype.div = function(arg) {
    var r1, r2, t1 = 0,
    t2 = 0;
    try {
        t1 = this.toString().split(".")[1].length
    } catch(e) {}
    try {
        t2 = arg.toString().split(".")[1].length
    } catch(e) {}
    with(Math) return r1 = Number(this.toString().replace(".", "")),
    r2 = Number(arg.toString().replace(".", "")),
    r1 / r2 * pow(10, t2 - t1)
};
var searchLocalStorage = new goodLocalstorage;
searchLocalStorage.name = "_searchhistory",
searchLocalStorage._getAll = function() {
    return localStorage.getItem(this.name)
},
searchLocalStorage._storeAll = function(t) {
    localStorage.setItem(this.name, t)
};
var Showbo = {};
Showbo.IsIE = !!document.all,
Showbo.IEVersion = function() {
    if (!Showbo.IsIE) return - 1;
    try {
        return parseFloat(/msie ([\d\.]+)/i.exec(navigator.userAgent)[1])
    } catch(t) {
        return - 1
    }
} (),
Showbo.$ = function(t, e) {
    var i;
    if ("string" == typeof t) i = document.getElementById(t);
    else {
        if ("object" != typeof t) return null;
        i = t
    }
    return e ? Showbo.IsIE ? frames[t] : i.contentWindow: i
},
Showbo.isStrict = "CSS1Compat" == document.compatMode,
Showbo.BodyScale = {
    x: 0,
    y: 0,
    tx: 0,
    ty: 0
},
Showbo.getClientHeight = function() {
    return Showbo.isStrict ? document.documentElement.clientHeight: document.body.clientHeight
},
Showbo.getScrollHeight = function() {
    var t = Showbo.isStrict ? document.documentElement.scrollHeight: document.body.scrollHeight;
    return Math.max(t, this.getClientHeight())
},
Showbo.getHeight = function(t) {
    return t ? this.getScrollHeight() : this.getClientHeight()
},
Showbo.getClientWidth = function() {
    return Showbo.isStrict ? document.documentElement.clientWidth: document.body.clientWidth
},
Showbo.getScrollWidth = function() {
    var t = Showbo.isStrict ? document.documentElement.scrollWidth: document.body.scrollWidth;
    return Math.max(t, this.getClientWidth())
},
Showbo.getWidth = function(t) {
    return t ? this.getScrollWidth() : this.getClientWidth()
},
Showbo.initBodyScale = function() {
    Showbo.BodyScale.x = Showbo.getWidth(!1),
    Showbo.BodyScale.y = Showbo.getHeight(!1),
    Showbo.BodyScale.tx = Showbo.getWidth(!0),
    Showbo.BodyScale.ty = Showbo.getHeight(!0)
},
Showbo.Msg = {
    INFO: "info",
    ERROR: "error",
    WARNING: "warning",
    IsInit: !1,
    timer: null,
    dvTitle: null,
    dvCT: null,
    dvBottom: null,
    dvBtns: null,
    lightBox: null,
    dvMsgBox: null,
    defaultWidth: "300",
    moveProcessbar: function() {
        var t = Showbo.$("dvProcessbar"),
        e = t.style.width;
        "" == e ? e = 20 : (e = parseInt(e) + 20, e > 100 && (e = 0)),
        t.style.width = e + "%"
    },
    InitMsg: function(t) {
        var e = '<iframe src="javascript:false" mce_src="javascript:false" style="position:absolute; visibility:inherit; top:0px;left:0px;width:100%; height:100%; z-index:-1;filter=\'progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)\';"></iframe>',
        i = '<div class="top" id="dvMsgTop"><div class="contain"><h2 class="title" id="dvMsgTitle"></h2></div></div><div class="body"><div class="contain"><div class="ct" id="dvMsgCT"></div></div></div><div class="bottom" id="dvMsgBottom"><div class="contain"><div class="callbtn" id="dvMsgBtns"></div></div></div>';
        if (this.dvMsgBox = document.createElement("div"), this.dvMsgBox.id = "dvMsgBox", this.dvMsgBox.innerHTML += i, document.body.appendChild(this.dvMsgBox), this.lightBox = document.createElement("div"), this.lightBox.id = "ShowBolightBox", document.body.appendChild(this.lightBox), Showbo.IsIE && Showbo.IEVersion < 7 && (this.lightBox.innerHTML += e, this.dvMsgBox.innerHTML += e), this.dvBottom = Showbo.$("dvMsgBottom"), this.dvBtns = Showbo.$("dvMsgBtns"), this.dvCT = Showbo.$("dvMsgCT"), this.dvTitle = Showbo.$("dvMsgTitle"), t.title) {
            var o = document.createElement("img");
            o.src = "/assets/weixin/image/cancel-icon.png",
            o.alt = "X",
            o.className = "close",
            o.onclick = function() {
                Showbo.Msg.hide(),
                baidustatic("弹窗关闭", "弹窗关闭按钮")
            },
            Showbo.$("dvMsgTop").appendChild(o)
        } else $("#dvMsgTop").css("display", "none");
        this.IsInit = !0
    },
    checkDOMLast: function() {
        document.body.lastChild != this.lightBox && (document.body.appendChild(this.dvMsgBox), document.body.appendChild(this.lightBox))
    },
    createDiv: function(t) {
        var e = document.createElement("div");
        return e.style.width = t + "%",
        e.style.display = "inline-block",
        e
    },
    createBtn: function(t, e, i, o, n) {
        if ("[object Array]" !== Object.prototype.toString.call(e)) {
            var a = new Array(e);
            e = a
        }
        var s = document.createElement("input");
        return s.type = "button",
        s.className = o,
        s.value = i,
        t.alert && (s.style.width = "100%"),
        s.onclick = function() {
            Showbo.Msg.hide(),
            n && n.apply(this, e)
        },
        s
    },
    alert: function(t) {
        this.show({
            buttons: {
                yes: t.text
            },
            msg: t.content,
            title: t.title,
            alert: !0,
            width: t.width
        })
    },
    confirm: function(t, e, i, o, n, a) {
        this.show({
            buttons: {
                yes: i,
                no: o
            },
            msg: t,
            title: e,
            fn: n,
            width: a
        })
    },
    prompt: function(t, e, i, o) {
        t || (t = "请输入："),
        e || (e = ""),
        i || (i = "msg_txtInput"),
        this.show({
            title: "输入提示",
            msg: t + '<input class="msg_txtInput" type="text" id="' + i + '" value="' + e + '"/>',
            buttons: {
                yes: "确认",
                no: "取消"
            },
            fn: o
        })
    },
    wait: function(t, e) {
        t || (t = "正在处理.."),
        this.show({
            title: e,
            msg: t,
            wait: !0
        })
    },
    operate: function(t, e, i, o) {
        this.show({
            buttons: i,
            msg: t,
            title: e,
            width: o,
            operate: !0
        })
    },
    show: function(t) {
        if (!t) throw "没有指定配置文件！";
        if (Showbo.IsIE ? window.attachEvent("onresize", this.onResize) : window.addEventListener("resize", this.onResize, !1), this.IsInit ? this.checkDOMLast() : this.InitMsg(t), t.width && (this.defaultWidth = t.width), "%" == this.defaultWidth.substr( - 1) ? this.dvMsgBox.style.width = this.defaultWidth: this.dvMsgBox.style.width = this.defaultWidth + "px", this.timer && (clearInterval(this.timer), this.timer = null), this.dvTitle.innerHTML = "", t.title && (this.dvTitle.innerHTML = t.title), this.dvCT.innerHTML = "", this.dvBtns.innerHTML = "", t.wait) t.msg && (this.dvCT.innerHTML = t.msg),
        this.dvCT.innerHTML += '<div class="pro"><div class="bg" id="dvProcessbar"></div></div>',
        this.dvBtns.innerHTML = "",
        this.dvBottom.style.height = "10px",
        this.timer = setInterval(function() {
            Showbo.Msg.moveProcessbar()
        },
        1e3);
        else if (t.operate) { (!t.buttons || t.buttons.length < 1) && (t.buttons = [{
                val: "确定"
            }]),
            ("number" == typeof t.buttons || "string" == typeof t.buttons) && (t.buttons = [{
                val: t.buttons
            }]),
            t.icon && (this.dvCT.innerHTML = '<div class="icon ' + t.icon + '"></div>'),
            t.msg && (this.dvCT.innerHTML += t.msg + '<div class="clear"></div>'),
            this.dvBottom.style.height = "55px";
            for (var e = (100 / t.buttons.length).toFixed(3).substring(0, 5), i = 0; i < t.buttons.length; i++) {
                0 == t.buttons[i].type ? t.buttons[i]["class"] = "showbobtnNo": t.buttons[i]["class"] = "showbobtnYes";
                var o = this.createDiv(e);
                o.appendChild(this.createBtn(t, t.buttons[i].args, t.buttons[i].val, t.buttons[i]["class"], t.buttons[i].fn)),
                this.dvBtns.appendChild(o)
            }
        } else if (t.alert) {
            t.buttons && t.buttons.yes || (t.buttons = {
                yes: "确定"
            }),
            t.msg && (this.dvCT.innerHTML += t.msg + '<div class="clear"></div>'),
            this.dvBottom.style.height = "55px";
            var o = this.createDiv(100);
            o.appendChild(this.createBtn(t, "yes", t.buttons.yes, "showbobtnYes", t.fn)),
            this.dvBtns.appendChild(o)
        } else {
            t.buttons && (t.buttons.yes || t.buttons.no) || (t.buttons = {
                yes: "确定",
                no: "取消"
            }),
            t.buttons.yes || (t.buttons.yes = "确定"),
            t.buttons.no || (t.buttons.no = "取消"),
            t.icon && (this.dvCT.innerHTML = '<div class="icon ' + t.icon + '"></div>'),
            t.msg && (this.dvCT.innerHTML += t.msg + '<div class="clear"></div>'),
            this.dvBottom.style.height = "55px";
            var o = this.createDiv(50);
            o.appendChild(this.createBtn(t, "no", t.buttons.no, "showbobtnNo")),
            this.dvBtns.appendChild(o);
            var o = this.createDiv(50);
            o.appendChild(this.createBtn(t, "yes", t.buttons.yes, "showbobtnYes", t.fn)),
            this.dvBtns.appendChild(o)
        }
        Showbo.initBodyScale(),
        this.dvMsgBox.style.display = "block",
        this.lightBox.style.display = "block",
        this.onResize(!1)
    },
    hide: function() {
        this.dvMsgBox.style.display = "none",
        this.lightBox.style.display = "none",
        this.dvBtns.innerHTML = "",
        this.timer && (clearInterval(this.timer), this.timer = null),
        Showbo.IsIE ? window.detachEvent("onresize", this.onResize) : window.removeEventListener("resize", this.onResize, !1)
    },
    onResize: function(t) {
        t && Showbo.initBodyScale(),
        Showbo.Msg.lightBox.style.width = Showbo.BodyScale.tx + "px",
        Showbo.Msg.lightBox.style.height = Showbo.BodyScale.ty + "px",
        Showbo.Msg.dvMsgBox.style.top = "32%",
        Showbo.Msg.dvMsgBox.style.left = Math.floor((Showbo.BodyScale.x - Showbo.Msg.dvMsgBox.offsetWidth) / 2) + "px",
        Showbo.Msg.dvMsgBox.style.position = "fixed"
    }
};