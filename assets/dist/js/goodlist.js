$(document).ready(function() {
    function i(i) {
        var e = $(".js-search-content-detail");
        if ("" == i) return jsAlert("老板，你还没输入搜索内容~"),
        !1;
        $("#searchGuess").addClass("hide"),
        $("#searchPanel").addClass("hide"),
        $("#searchListBlock").removeClass("hide"),
        $("#search-item-loading").show();
        var a = [],
        s = searchLocalStorage._getAll();
        if (null == s) a.push(i);
        else {
            var c = s.split(","),
            n = $.inArray(i, c);
            n >= 0 ? (c.splice(n, 1), 0 == c.length ? a.push(i) : (a.push(c), a.push(i))) : (a.push(c), a.push(i)),
            c.length >= 15 && c.splice(0, 1)
        }
        searchLocalStorage._storeAll(a),
        PlusMinus.showLoading($("#searchListBlock .js-search-content-detail")),
        t(i, e)
    }
    function t(i, t) {
        var a;
        a = window.isPreview ? {
            keyword: i,
            city_id: previewcity
        }: {
            keyword: i
        },
        $.ajax({
            type: "get",
            url: "/Commodity/search",
            dataType: "json",
            data: a,
            error: function(i, t, e) {
                return "timeout" == t && alert("网络有问题，刷新尝试下~"),
                !1
            },
            success: function(i) {
                i.status ? (window.data3 = i.data, e(i, t)) : jsAlert(i.msg)
            }
        })
    }
    function e(i, t) {
        var e = "";
        0 != i.data.length ? _.each(i.data,
        function(i) {
            e += PlusMinus.detailHTMLTemple(i, !1, !1)
        }) : e = '<div style="margin:20% 10px;"><div style="text-align: center;"><img src="/assets/weixin/image/icon_nodishes.png" width="87px"><p style="color:#a5a5a5;font-size: 14px;margin-top:22px;">抱歉，没有找到符合条件的菜品 !</p></div></div>',
        t.html(e),
        $("#search-item-loading").hide(),
        o($("#searchListBlock")),
        PlusMinus.lazyLoadProductImg($("#searchListBlock")),
        u(t)
    }
    function a() {
        var i = PlusMinus.totalCount(),
        t = $(".js-go-cart");
        0 == i ? window.isPreview || t.attr("href", "javascript:void(0)").unbind("click").click(function() {
            alert("品类数为0,请添加菜品！")
        }) : window.isPreview ? t.attr("href", "/preview/cart").unbind("click") : t.attr("href", "/cart/index").unbind("click")
    }
    function s(i, t) {
        var e, a = "",
        s = "";
        e = window.isPreview ? {
            parent_id: t,
            city_id: previewcity
        }: {
            parent_id: t
        },
        $.ajax({
            type: "get",
            url: "/category/list",
            async: !1,
            dataType: "json",
            data: e,
            error: function(i, t, e) {
                return "timeout" == t && alert("网络有问题，刷新尝试下~"),
                !1
            },
            success: function(t) {
                t.status ? t.data ? (_.each(_.keys(t.data),
                function(e) {
                    a += "<li ccat2id='" + e + "' pid='" + t.data[e].id + "' class='cp' style='word-wrap:break-word' onclick=\"baidustatic('二级菜单点击操作','一级菜单 " + i + " 下的2级菜单 " + t.data[e].name + " 的点击数');\">" + t.data[e].name + "<i class='menu-triangle'></i></li>"
                }), window.data2 = t.data) : (s += n("抱歉，此分类暂时没有商品"), b.html(s), x = !1, $("#item-loading").hide()) : jsAlert(t.msg)
            }
        });
        var r = $("#subCategoryBlock");
        if (k.html(a), o(r), _.each(k.find("li"),
        function(t) {
            try {
                cateDetailAjax.abort()
            } catch(e) {}
            var a = k.children("li");
            a.click(function() {
                $this = $(this),
                c(w),
                w = $this;
                var t = $this.attr("ccat2id");
                if (0 == t) {
                    var e = localStorage.getItem("notice");
                    e ? $(".js-notice").show().find("p").text(e) : $(".js-notice").hide().find("p").text("")
                } else $(".js-notice").hide();
                $this = w = $(this),
                ccat2 = $this.text().trim(),
                $this.addClass("active"),
                PlusMinus.showLoading(b),
                l(i, ccat2, t, $this.attr("pid")),
                $this.find(".menu-triangle").css("display", "inline-block"),
                $this.siblings(".cp").find(".menu-triangle").css("display", "none")
            })
        }), URLParams.class2 && f) if ($firstCategory = k.find("li[pid='" + URLParams.class2 + "']"), $firstCategory.length) {
            w = $firstCategory;
            for (var d = 0,
            u = 0; u < w.index() + 1; u++) d += k.find("li[ccat2id='" + u + "']").height();
            $firstCategory.click(),
            f = !1,
            $("#subCategoryBlock").addClass("androidFix").scrollTop(d - $(window).height() + 180).removeClass("androidFix")
        } else $firstCategory = $(k.find("li")[0]),
        $firstCategory && (w = $firstCategory, $firstCategory.click()),
        f = !1;
        else $firstCategory = $(k.find("li")[0]),
        $firstCategory && (w = $firstCategory, $firstCategory.click()),
        f = !1
    }
    function c(i) {
        i && i.removeClass("active")
    }
    function n(i) {
        return '<div style="text-align: center;color: #999;padding: 20px 0;">' + i + "</div>"
    }
    function o(i) {
        i[0] && (con = i[0]),
        con.scrollTop = 0,
        i.removeClass("scroll-y"),
        setTimeout(function() {
            i.addClass("scroll-y")
        },
        0)
    }
    function l(i, t, e, a) {
        r(a,
        function(e) {
            d(i, t, a, e)
        })
    }
    function r(i, t) {
        if (!x) {
            x = !0;
            try {
                cateDetailAjax.abort()
            } catch(e) {}
            $("#item-loading").show();
            var a, s, c;
            if (0 == i) {
                if ( - 1e3 == $(".menu .active").attr("pid")) a = "/Commodity/list",
                s = $(".menu .active").attr("pid");
                else {
                    if (0 == $(".menu .active").attr("pid")) return ! 1;
                    a = "/Commodity/Promotes",
                    s = $(".menu .active").attr("pid")
                }
                c = window.isPreview ? {
                    category_id: s,
                    city_id: previewcity
                }: {
                    category_id: s
                },
                -998 == $(".menu .active").attr("pid") && (window.isPreview ? (a = "/commodity/seckill", c = {
                    city_id: previewcity,
                    tab_id: i
                }) : (a = "/commodity/seckill", c = {
                    tab_id: i
                }))
            } else - 998 == $(".menu .active").attr("pid") ? window.isPreview ? (a = "/commodity/seckill", c = {
                city_id: previewcity,
                tab_id: i
            }) : (a = "/commodity/seckill", c = {
                tab_id: i
            }) : (s = i, c = window.isPreview ? {
                category_id: s,
                city_id: previewcity
            }: {
                category_id: s
            },
            a = "/Commodity/list");
            cateDetailAjax = $.ajax({
                type: "get",
                dataType: "json",
                url: a,
                data: c,
                error: function(i, t, e) {
                    return "timeout" == t && alert("网络有问题，刷新尝试下~"),
                    !1
                },
                success: function(i) {
                    i.status ? (t(i.data), window.data3 = i.data) : jsAlert(i.msg)
                },
                complete: function() {
                    x = !1,
                    $("#item-loading").hide()
                }
            })
        }
    }
    function d(i, t, e, a) {
        var s = a,
        c = "";
        s && s.length ? _.each(s,
        function(i) {
            c += PlusMinus.detailHTMLTemple(i, !0)
        }) : c += n("抱歉，此分类暂时没有商品"),
        b.html(c),
        u(b),
        PlusMinus.lazyLoadProductImg($("#mainListBlock"))
    }
    function u(i) {
        var t = {
            countChangeCallBack: a
        };
        _.each(i.find("tr"),
        function(i) {
            PlusMinus.bindPlusMinusEvent(i, t)
        }),
        PlusMinus.bindToggleFavorite(i)
    }
    function h() {
        b.html("");
        try {
            cateDetailAjax.abort()
        } catch(i) {}
        $("#item-loading").show();
        var t = new Array;
        _.each(data,
        function(i) {
            t.push(i.name)
        }),
        $.ajax({
            type: "get",
            dataType: "json",
            url: "/Commodity/uclist",
            error: function(i, t, e) {
                return "timeout" == t && alert("网络有问题，刷新尝试下~"),
                !1
            },
            success: function(i) {
                if (i.status) {
                    window.data3 = i.data;
                    var e = "",
                    a = "",
                    s = 0;
                    if ("" != data3) for (var c = 0; c < t.length; c++) {
                        var o = t[c];
                        if (data3[o] && 0 != data3[o].length) {
                            item = data3[o],
                            a = item[0].class1,
                            e = e + '<tr class="menu2"><td colspan="2" style="padding:0;border-bottom:0;height:100%;"><div style="height:30px;text-align:left;line-height:30px;color:#fff;"><div class="fav_menu" style="display:inline-block;height:100%;padding:0 10px;background-color:#21b387;">' + a + '</span></div><div style="display:inline-block;"><div class="fav_line" style="height:1px; background-color:#ddd; position:absolute;margin-top:-6px;"></div></div></td></tr>',
                            s += item.length;
                            var l = 0;
                            _.each(item,
                            function(i) {
                                if (l++, l != item.length) e += PlusMinus.detailHTMLTemple(i, !0);
                                else {
                                    var t = PlusMinus.detailHTMLTemple(i, !0),
                                    a = t.indexOf(" style="),
                                    s = t.indexOf("v-m");
                                    t = t.substring(0, a + 8) + "border-bottom:0;" + t.substring(a + 8, s + 12) + "border-bottom:0;" + t.substring(s + 12, t.length),
                                    e += t
                                }
                            })
                        }
                    } else e += n('<div style="margin:50px 0 20px 0"><img src="/assets/weixin/image/fav.png" width="70px"></div><div>您还没有收藏商品</div>');
                    favnummenu = "",
                    e = favnummenu + e,
                    b.html(e),
                    line_width = $(window).width() - $(".fav_menu").width() - 6,
                    $(".fav_line").css("width", line_width),
                    u(b),
                    PlusMinus.lazyLoadProductImg($("#mainListBlock"))
                } else jsAlert(i.msg)
            },
            complete: function() {
                x = !1,
                $("#item-loading").hide()
            }
        })
    }
    function p() {
        var i = "<li pid='0' onclick=\"baidustatic('一级菜单点击操作','一级菜单我的收藏点击数');\">我的收藏</li>";
        if (_.each(_.keys(data),
        function(t) {
            i += "<li ccat1id='" + t + "' pid='" + data[t].id + "' onclick=\"baidustatic('一级菜单点击操作','一级菜单 " + data[t].name + " 的点击数');\">" + data[t].name + "</li>"
        }), j.append($(i)), j.children("li").click(function(i) {
            try {
                cateDetailAjax.abort()
            } catch(i) {}
            var t = $(this);
            if (c(y), $this = y = $(this), ccat1 = $this.text().trim(), $this.addClass("active"), "0" == $(this).attr("pid")) {
                if (window.isPreview) return window.location.href = "/account/login?sucurl=/luCommodityItem/index?class1=0",
                !1;
                h(),
                $("#subCategoryBlock").hide(),
                $("#mainListBlock").css("width", "100%"),
                $("#mainListBlock").css("overflow-x", "hidden"),
                $("#mainListBlock").attr("page", "fav")
            } else s(ccat1, t.attr("pid")),
            $("#subCategoryBlock").show(),
            $("#mainListBlock").css("width", "75%"),
            $("#mainListBlock").attr("page", "normal")
        }), URLParams.class1 && f) {
            var t = j.find("li[pid='" + URLParams.class1 + "']");
            if (t.length) {
                y = t,
                t.click();
                var e;
                e = 0 == URLParams.class1 ? 0 : 76;
                for (var a = 0; a < t.index() - 1; a++) e += j.find("li[ccat1id='" + a + "']").width();
                $(".js-menu-bar").scrollLeft(e)
            } else t = $(j.find("li")[1]),
            y = t,
            t.click()
        } else {
            var t = $(j.find("li")[1]);
            t && (y = t, t.click())
        }
    }
    function m(i) {
        var t = "<div style='margin:0 8px;color:#4d4d4d;font-size:16px;'><p style='line-height:30px;'>尊敬的老板：</p><p style='line-height:32px;padding-bottom:10px;'>您有￥" + i / 100 + "的欠款，记得及时还款哦!</p><div>";
        Showbo.Msg.alert({
            content: t,
            title: !1,
            text: "知道了",
            width: "95%"
        })
    }
    function g() {
        var i = $(".js-notice");
        $.ajax({
            type: "get",
            url: "/notice/getnotice",
            dataType: "json",
            success: function(t) {
                if (1 == t.status && t.data) {
                    var e = t.data;
                    localStorage.setItem("notice", e),
                    i.find("p").text(e),
                    i.addClass("active").show()
                } else localStorage.setItem("notice", ""),
                i.removeClass("active").hide()
            }
        })
    }
    window.onerror = function(i, t, e, a, s) {
        var c = new RegExp("WeixinJSBridge"),
        n = new RegExp("Exception 101"),
        o = window.location.href;
        return "Script error." != i && !t || c.test(i) || n.test(i) ? !0 : void setTimeout(function() {
            s && s.stack && (s = s.stack.toString());
            var c = {
                message: i,
                error_url: t,
                error_line: e,
                userAgent: navigator.userAgent,
                error_col: a,
                error: s,
                webhref: o
            };
            $.ajax({
                type: "post",
                url: "/error/log",
                data: JSON.stringify({
                    msg: c
                }),
                dataType: "json",
                contentType: "application/json",
                success: function(i) {}
            })
        },
        0)
    },
    window.data = firstmenu;
    var v = "maskHasShowed",
    f = !0;
    localStorage.getItem(v) ? $(".menu-mask").css("display", "none") : ($(".menu-mask").css("display", "block"), $(".menu-mask").on("touchstart click",
    function() {
        $(this).hide()
    }), localStorage.setItem(v, 1), localStorage.setItem("version", version)),
    window.isPreview || g();
    var y, w, k = $(".js-category"),
    b = $(".js-category-detail"),
    j = $(".menu");
    $(".js-content").css("height", $(window).height() - $(".js-menu-bar").height() - $(".js-footer").height() - $(".js-menu-bar").height() + "px"),
    $(".js-search-content").css("height", $(window).height() - 90),
    $itemCount.html(PlusMinus.totalCount()),
    $itemTotal.html(PlusMinus.totalPrice()),
    PlusMinus.isLowerAndriod3() && (PlusMinus.touchScroll("subCategoryBlock"), PlusMinus.touchScroll("mainListBlock"), PlusMinus.touchScroll("searchListBlock"), PlusMinus.touchScrollY("ma-menu-bar")),
    a(),
    $(".js-search").on("click",
    function(i) {
        var t = searchLocalStorage._getAll();
        if ("" !== $(".js-search").val() ? $("#searchcancel").css("display", "block") : $("#searchcancel").css("display", "none"), null === t);
        else {
            if ($(".js-content").hasClass("hide")) return ! 1;
            $("#searchPanel .his-search .veg").html("");
            var e = t.split(",");
            e = e.reverse(),
            _.each(e,
            function(i) {
                $("#searchPanel .his-search .veg").append('<span class="veg-panel his-veg">' + i + "</span>")
            })
        }
        $(".arrow-l-div").css("display", "none"),
        $(".arrow-r-div").css("display", "none"),
        $(".logo").css("display", "none"),
        $(".js-search-input-block").css("float", "left"),
        $("#searchListBlock").addClass("hide"),
        $(".js-menu-bar").css("display", "none"),
        $(".js-content").addClass("hide"),
        $("#searchPanel").removeClass("hide"),
        $(".js-search-back-block").css("display", "inline-block"),
        $(".js-search-input-block").removeClass("logo-div"),
        $(".js-search-input-block").css("display", "inline-block"),
        $(".js-search-input-block").addClass("js-search-input-width"),
        $(".js-search-input-block .js-search").attr("placeholder", "请输入菜品名称、品牌"),
        $(".js-search-btn").css("display", "inline-block"),
        document.title = "搜索",
        i.stopPropagation()
    }),
    $(".js-search").on("input",
    function(i) {
        $("#searchcancel").css("display", "block");
        var t = $(this).val();
        "" == t && $("#searchcancel").css("display", "none")
    }),
    $("#searchcancel").live("click",
    function(i) {
        $(".js-search").val(""),
        $("#searchcancel").css("display", "none"),
        i.stopPropagation()
    }),
    $(".js-search").on("blur",
    function() {
        var i;
        i = setTimeout(function() {
            $("#searchcancel").css("display", "none")
        },
        100)
    }),
    $(".js-search").on("focus",
    function() {
        var i = $(this).text();
        "" != i && $("#searchcancel").css("display", "block")
    }),
    $("#searchPanel").delegate("span", "click",
    function() {
        var t = $(this).text();
        $(".js-search").val(t),
        i(t)
    }),
    $("#search-btn").click(function() {
        var t = $(".js-search").val().trim();
        i(t)
    }),
    $("#clean-history").click(function(i) {
        $("#searchPanel .his-search .veg").html(""),
        localStorage.removeItem("_searchhistory")
    }),
    $(".js-search-back-block a").click(function() {
        $(".js-menu-bar").css("display", "inline-block"),
        $(".js-content").removeClass("hide"),
        $(".js-search-content").addClass("hide"),
        $(".logo").css("display", "inline-block"),
        $(".js-search-input-block").css("float", "none"),
        $("#searchcancel").css("display", "none"),
        $(".arrow-l-div").css("display", "inline-block"),
        $(".arrow-r-div").css("display", "inline-block"),
        $(".js-search-back-block").css("display", "none"),
        $(".js-search-btn").css("display", "none"),
        $(".js-search-input-block").addClass("logo-div"),
        $(".js-search-input-block").removeClass("js-search-input-width"),
        $(".js-search-input-block").css("display", "block"),
        $(".js-search-input-block .js-search").attr("placeholder", "输入菜名搜索"),
        $(".js-search-input-block .js-search").val(""),
        0 != $(".menu .active").attr("pid") ? $(".js-category .active").click() : $(".menu .active").click(),
        document.title = "美菜商城"
    });
    var x = !1;
    p(),
    !window.isPreview && debtmoney > 0 && m(debtmoney),
    !window.isPreview && debtmoney < 0 && $.ajax({
        type: "post",
        url: "/LuCommodityItem/MoveBalance",
        data: {},
        dataType: "json",
        success: function(i) {}
    }),
    $(".icon-down").on("click",
    function() {
        $(".js-notice").toggleClass("active")
    })
});