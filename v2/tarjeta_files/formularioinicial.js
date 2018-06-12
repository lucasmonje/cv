function viewLoadPartOne() {
    actualizarEncabezado("<h4><strong>Ingresá<\/strong> tus datos<\/h4><h5>¿Estás buscando una tarjeta? Te guiamos en el proceso para obtener una.<\/h5><h1>Completá tus datos para comenzar con tu solicitud<\/h1>", "#opcIngresoDatos", "headline", !0);
    jsonComboAutocompletable = $.extend(cargarValoresPrimariosAutocomplete("cmbCompania", "divInputAreaCompania", "Compania", "Tu compañía", "8", 0, $("#divCompania").width(), "CompaniaUl"), cargarValoresSecundariosAutocomplete(!1, "", "", "", "", "alpha_spaces_enie", "validarCampos", "", "", !1, ""));
    crearComboboxAutocompletable(JSON.stringify(jsonComboAutocompletable));
    $("#Compania").removeClass("incompleto").addClass("opcional");
    $("#telefonoToken").removeClass("incompleto").addClass("opcional");
    $("#codAreaToken").removeClass("incompleto").addClass("opcional");
    $("#FechaNac").on("input paste", function() {
        var t = $(this),
            n = t.val().match(regEx_Valid_Date);
        n !== null && ($("#DiaNac").val(n[1]), $("#MesNac").val(n[2]), $("#AñoNac").val(n[3]))
    }).on("keyup", function() {
        setTimeout(function() {
            validarCampos()
        })
    });
    $("#telefono_aux").on("keyup", function() {
        var n = $(this).val().substring(0, 4),
            t = n.match(regEx_codArea4digitos) || n.match(regEx_codArea3digitos) || n.match(regEx_codArea2digitos);
        t !== null && $("#CodArea").val(t[0])
    });
    $("a[name='sexos']").each(function(n, t) {
        $(t).on("click", function() {
            var n = $(this).children();
            n.hasClass("active") || ($("a[name='sexos'] > p.active").removeClass("active"), n.addClass("active"), $("#Sexo").val(n.data("value")), $("#Sexo").removeClass("incompleto"), validarCampos())
        })
    });
    $("#FechaNac").mask("00/00/0000");
    $("#Documento").mask("00.000.000.000", {
        reverse: !0
    });
    $("#Documento").on("keyup", function() {
        $("#Dni").val($(this).cleanVal())
    }).on("blur", function() {
        $("#Dni").val($(this).cleanVal());
        $(this).val(formatNmbToMiles($(this).cleanVal(), 0))
    });
    addValidationRules("FormIngreso", validarCampos);
    inputEfects();
    setRules(18, 75);
    $("#FormIngreso").on("submit", function() {
        $("input[type='tel'],input[type='text']").each(function(n, t) {
            t.value = t.value.trim()
        })
    });
    $("#FormIngreso").find("input[type='tel'], input[type='text']").each(function() {
        $(this).on("keydown", function() {
            $(this).data("oldvalue", $(this).val())
        }).on("input", function(n) {
            var t = $(this).data("oldvalue");
            t.length < 1 && difference(t, this.value).replace(/^\s+/, "").length === 0 && (this.value = t, n.preventDefault())
        })
    })
}

function mostrarTerminosCondiciones() {
    document.getElementById("terminos-condiciones-landing").style.display === "none" ? (document.getElementById("terminos-condiciones-landing").style.display = "", document.getElementById("flecha-costado").style.display = "none", document.getElementById("flecha-abajo").style.display = "", document.getElementById("a").scrollIntoView()) : (document.getElementById("terminos-condiciones-landing").style.display = "none", document.getElementById("flecha-costado").style.display = "", document.getElementById("flecha-abajo").style.display = "none")
}

function viewLoadPartTwo() {
    $("#modal-error").on("keyup", function(n) {
        return n.preventDefault(), n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0, !1
    });
    $("html").bind("keypress", function(n) {
        if (n.keyCode === 13) return !1
    });
    inputValidate()
}

function validarCampos() {
    if ($("#handleUno,#handleDos,#handleTres,#handleCuatro").off("blur"), DetectarNavegadorIE()) $(".incompleto").size() === 0 ? getEstadoCaptcha() : deshabilitarBoton();
    else return $(".incompleto").size() === 0 ? (habilitarBoton(), !0) : (deshabilitarBoton(), !1)
}

function habilitarBoton() {
    $("#btn-submit").attr("class", "btn btn-md margin-bottom-60");
    $("#btn-submit").prop("disabled", !1)
}

function deshabilitarBoton() {
    $("#btn-submit").attr("class", "btn btn-md disabled margin-bottom-60");
    $("#btn-submit").prop("disabled", !0)
}

function beforeSubmit() {
    var n = $("#FechaNac");
    if (!validarFecha(parseInt(n.val().split("/")[0]), parseInt(n.val().split("/")[1]) - 1, n.val().split("/")[2], 18, 75)) {
        showErrorModal(MensajeHeaderAlert, "Para poder solicitar una tarjeta de crédito tenés que ser mayor de 18 años y menor de 75 años.<br>");
        habilitarBoton();
        return
    }
    if (!validateRegEx($("#Email").val(), regEx_mail) || validateRegEx($("#Email").val(), regEx_mail_invalid)) {
        showErrorModal(MensajeHeaderAlert, $("#Email").attr("errmsg"));
        habilitarBoton();
        return
    }
    if (!validarTelefonoInicio($("#telefono_aux").val())) {
        showErrorModal(MensajeHeaderAlert, $("#telefono_aux").attr("errmsg"));
        $("#telefono_aux").focus();
        habilitarBoton();
        return
    }
    viewLoadPartTwo();
}

function DetectarNavegadorIE() {
    var n, t;
    return n = navigator.userAgent.indexOf("MSIE") !== -1 ? /MSIE (\d+\.\d+);/ : /Trident.*rv[ :]*(\d+\.\d+)/, n.test(navigator.userAgent) ? (t = RegExp.$1, t >= 5) : void 0
}

function activeOne() {
    document.getElementById("number-one").className === "column-titles desactive" && (document.getElementById("number-one").className = "column-titles active", document.getElementById("number-two").className = "column-titles desactive second etapa-dos")
}

function activeTwo() {
    document.getElementById("number-two").className === "column-titles desactive second etapa-dos" && (document.getElementById("number-two").className = "column-titles active second etapa-dos", document.getElementById("number-one").className = "column-titles desactive")
}

function captchaLoad(n) {
    var t, i;
    $("#CaptchaOriginal").css("display", "block");
    t = $("#CaptchaOriginal").find("a");
    t.addClass("reload-captcha");
    $("#CaptchaInputText").wrap("<div class='inputArea'><\/div>");
    $("#CaptchaInputText").parent().wrap("<div id=\"inputwrapperCaptcha\" class='inputWrapper'><\/div>");
    $("#inputwrapperCaptcha").wrap('<div id="captchaBootstrap" class="col-xs-12 col-sm-4 col-md-3 col-lg-3 padding-left-none"><\/div>');
    $('<div class="inputUnderline"><\/div>').insertAfter("#CaptchaInputText");
    $('<label for="password" class="inputLabel">C&oacute;digo<\/label>').insertAfter("#CaptchaInputText");
    $("#CaptchaInputText").addClass("numbers initial-form form-control hidden-control incompleto");
    $("#captchaBootstrap").prev().remove();
    $("#captchaBootstrap").prev().remove();
    $("#CaptchaOriginal").data("name", "El código");
    $("#inputwrapperCaptcha").after('<label id="CaptchaInputText-error" class="mensaje-error" textcontent="El código es inválido" for="CaptchaOriginal" style="display: none; "><i class="fa fa-exclamation-circle"><\/i> El código es inválido<\/label>');
    $("#CaptchaInputText").blur(function() {
        validarCaptcha(captchaValid)
    });
    i = document.getElementById("btn-submit");
    i.onclick = n
}
var jsonComboAutocompletable, recaptchaHabilitado, validoCaptcha, captchaValid;
! function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.moment = t()
}(this, function() {
    "use strict";

    function i() {
        return he.apply(null, arguments)
    }

    function so(n) {
        he = n
    }

    function at(n) {
        return n instanceof Array || "[object Array]" === Object.prototype.toString.call(n)
    }

    function li(n) {
        return n instanceof Date || "[object Date]" === Object.prototype.toString.call(n)
    }

    function yu(n, t) {
        for (var r = [], i = 0; i < n.length; ++i) r.push(t(n[i], i));
        return r
    }

    function nt(n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }

    function vt(n, t) {
        for (var i in t) nt(t, i) && (n[i] = t[i]);
        return nt(t, "toString") && (n.toString = t.toString), nt(t, "valueOf") && (n.valueOf = t.valueOf), n
    }

    function dt(n, t, i, r) {
        return af(n, t, i, r, !0).utc()
    }

    function ho() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function e(n) {
        return null == n._pf && (n._pf = ho()), n._pf
    }

    function or(n) {
        if (null == n._isValid) {
            var t = e(n);
            n._isValid = !(isNaN(n._d.getTime()) || !(t.overflow < 0) || t.empty || t.invalidMonth || t.invalidWeekday || t.nullInput || t.invalidFormat || t.userInvalidated);
            n._strict && (n._isValid = n._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)
        }
        return n._isValid
    }

    function ai(n) {
        var t = dt(NaN);
        return null != n ? vt(e(t), n) : e(t).userInvalidated = !0, t
    }

    function y(n) {
        return void 0 === n
    }

    function sr(n, t) {
        var u, i, r;
        if (y(t._isAMomentObject) || (n._isAMomentObject = t._isAMomentObject), y(t._i) || (n._i = t._i), y(t._f) || (n._f = t._f), y(t._l) || (n._l = t._l), y(t._strict) || (n._strict = t._strict), y(t._tzm) || (n._tzm = t._tzm), y(t._isUTC) || (n._isUTC = t._isUTC), y(t._offset) || (n._offset = t._offset), y(t._pf) || (n._pf = e(t)), y(t._locale) || (n._locale = t._locale), iu.length > 0)
            for (u in iu) i = iu[u], r = t[i], y(r) || (n[i] = r);
        return n
    }

    function ui(n) {
        sr(this, n);
        this._d = new Date(null != n._d ? n._d.getTime() : NaN);
        ru === !1 && (ru = !0, i.updateOffset(this), ru = !1)
    }

    function et(n) {
        return n instanceof ui || null != n && null != n._isAMomentObject
    }

    function p(n) {
        return 0 > n ? Math.ceil(n) : Math.floor(n)
    }

    function f(n) {
        var t = +n,
            i = 0;
        return 0 !== t && isFinite(t) && (i = p(t)), i
    }

    function pu(n, t, i) {
        for (var e = Math.min(n.length, t.length), o = Math.abs(n.length - t.length), u = 0, r = 0; e > r; r++)(i && n[r] !== t[r] || !i && f(n[r]) !== f(t[r])) && u++;
        return u + o
    }

    function wu(n) {
        i.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + n)
    }

    function b(n, t) {
        var i = !0;
        return vt(function() {
            return i && (wu(n + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), i = !1), t.apply(this, arguments)
        }, t)
    }

    function hr(n, t) {
        ce[n] || (wu(t), ce[n] = !0)
    }

    function ot(n) {
        return n instanceof Function || "[object Function]" === Object.prototype.toString.call(n)
    }

    function bu(n) {
        return "[object Object]" === Object.prototype.toString.call(n)
    }

    function co(n) {
        var t, i;
        for (i in n) t = n[i], ot(t) ? this[i] = t : this["_" + i] = t;
        this._config = n;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }

    function cr(n, t) {
        var i, r = vt({}, n);
        for (i in t) nt(t, i) && (bu(n[i]) && bu(t[i]) ? (r[i] = {}, vt(r[i], n[i]), vt(r[i], t[i])) : null != t[i] ? r[i] = t[i] : delete r[i]);
        return r
    }

    function lr(n) {
        null != n && this.set(n)
    }

    function ku(n) {
        return n ? n.toLowerCase().replace("_", "-") : n
    }

    function lo(n) {
        for (var i, t, f, r, u = 0; u < n.length;) {
            for (r = ku(n[u]).split("-"), i = r.length, t = ku(n[u + 1]), t = t ? t.split("-") : null; i > 0;) {
                if (f = du(r.slice(0, i).join("-"))) return f;
                if (t && t.length >= i && pu(r, t, !0) >= i - 1) break;
                i--
            }
            u++
        }
        return null
    }

    function du(n) {
        var t = null;
        if (!l[n] && "undefined" != typeof module && module && module.exports) try {
            t = gi._abbr;
            require("./locale/" + n);
            gt(t)
        } catch (i) {}
        return l[n]
    }

    function gt(n, t) {
        var i;
        return n && (i = y(t) ? yt(n) : gu(n, t), i && (gi = i)), gi._abbr
    }

    function gu(n, t) {
        return null !== t ? (t.abbr = n, null != l[n] ? (hr("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"), t = cr(l[n]._config, t)) : null != t.parentLocale && (null != l[t.parentLocale] ? t = cr(l[t.parentLocale]._config, t) : hr("parentLocaleUndefined", "specified parentLocale is not defined yet")), l[n] = new lr(t), gt(n), l[n]) : (delete l[n], null)
    }

    function ao(n, t) {
        if (null != t) {
            var i;
            null != l[n] && (t = cr(l[n]._config, t));
            i = new lr(t);
            i.parentLocale = l[n];
            l[n] = i;
            gt(n)
        } else null != l[n] && (null != l[n].parentLocale ? l[n] = l[n].parentLocale : null != l[n] && delete l[n]);
        return l[n]
    }

    function yt(n) {
        var t;
        if (n && n._locale && n._locale._abbr && (n = n._locale._abbr), !n) return gi;
        if (!at(n)) {
            if (t = du(n)) return t;
            n = [n]
        }
        return lo(n)
    }

    function vo() {
        return Object.keys(l)
    }

    function v(n, t) {
        var i = n.toLowerCase();
        hi[i] = hi[i + "s"] = hi[t] = n
    }

    function k(n) {
        if ("string" == typeof n) return hi[n] || hi[n.toLowerCase()]
    }

    function nf(n) {
        var i, t, r = {};
        for (t in n) nt(n, t) && (i = k(t), i && (r[i] = n[t]));
        return r
    }

    function ni(n, t) {
        return function(r) {
            return null != r ? (tf(this, n, r), i.updateOffset(this, t), this) : vi(this, n)
        }
    }

    function vi(n, t) {
        return n.isValid() ? n._d["get" + (n._isUTC ? "UTC" : "") + t]() : NaN
    }

    function tf(n, t, i) {
        n.isValid() && n._d["set" + (n._isUTC ? "UTC" : "") + t](i)
    }

    function rf(n, t) {
        var i;
        if ("object" == typeof n)
            for (i in n) this.set(i, n[i]);
        else if (n = k(n), ot(this[n])) return this[n](t);
        return this
    }

    function it(n, t, i) {
        var r = "" + Math.abs(n),
            u = t - r.length,
            f = n >= 0;
        return (f ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, u)).toString().substr(1) + r
    }

    function r(n, t, i, r) {
        var u = r;
        "string" == typeof r && (u = function() {
            return this[r]()
        });
        n && (ii[n] = u);
        t && (ii[t[0]] = function() {
            return it(u.apply(this, arguments), t[1], t[2])
        });
        i && (ii[i] = function() {
            return this.localeData().ordinal(u.apply(this, arguments), n)
        })
    }

    function yo(n) {
        return n.match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "")
    }

    function po(n) {
        for (var i = n.match(le), t = 0, r = i.length; r > t; t++) i[t] = ii[i[t]] ? ii[i[t]] : yo(i[t]);
        return function(u) {
            var f = "";
            for (t = 0; r > t; t++) f += i[t] instanceof Function ? i[t].call(u, n) : i[t];
            return f
        }
    }

    function ar(n, t) {
        return n.isValid() ? (t = uf(t, n.localeData()), uu[t] = uu[t] || po(t), uu[t](n)) : n.localeData().invalidDate()
    }

    function uf(n, t) {
        function r(n) {
            return t.longDateFormat(n) || n
        }
        var i = 5;
        for (nr.lastIndex = 0; i >= 0 && nr.test(n);) n = n.replace(nr, r), nr.lastIndex = 0, i -= 1;
        return n
    }

    function t(n, t, i) {
        ou[n] = ot(t) ? t : function(n) {
            return n && i ? i : t
        }
    }

    function wo(n, t) {
        return nt(ou, n) ? ou[n](t._strict, t._locale) : new RegExp(bo(n))
    }

    function bo(n) {
        return yi(n.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(n, t, i, r, u) {
            return t || i || r || u
        }))
    }

    function yi(n) {
        return n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function s(n, t) {
        var i, r = t;
        for ("string" == typeof n && (n = [n]), "number" == typeof t && (r = function(n, i) {
                i[t] = f(n)
            }), i = 0; i < n.length; i++) su[n[i]] = r
    }

    function fi(n, t) {
        s(n, function(n, i, r, u) {
            r._w = r._w || {};
            t(n, r._w, r, u)
        })
    }

    function ko(n, t, i) {
        null != t && nt(su, n) && su[n](t, i._a, i, n)
    }

    function vr(n, t) {
        return new Date(Date.UTC(n, t + 1, 0)).getUTCDate()
    }

    function go(n, t) {
        return at(this._months) ? this._months[n.month()] : this._months[we.test(t) ? "format" : "standalone"][n.month()]
    }

    function ns(n, t) {
        return at(this._monthsShort) ? this._monthsShort[n.month()] : this._monthsShort[we.test(t) ? "format" : "standalone"][n.month()]
    }

    function ts(n, t, i) {
        var r, u, f;
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; 12 > r; r++)
            if ((u = dt([2e3, r]), i && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(u, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(u, "").replace(".", "") + "$", "i")), i || this._monthsParse[r] || (f = "^" + this.months(u, "") + "|^" + this.monthsShort(u, ""), this._monthsParse[r] = new RegExp(f.replace(".", ""), "i")), i && "MMMM" === t && this._longMonthsParse[r].test(n)) || i && "MMM" === t && this._shortMonthsParse[r].test(n) || !i && this._monthsParse[r].test(n)) return r
    }

    function ff(n, t) {
        var i;
        if (!n.isValid()) return n;
        if ("string" == typeof t)
            if (/^\d+$/.test(t)) t = f(t);
            else if (t = n.localeData().monthsParse(t), "number" != typeof t) return n;
        return i = Math.min(n.date(), vr(n.year(), t)), n._d["set" + (n._isUTC ? "UTC" : "") + "Month"](t, i), n
    }

    function ef(n) {
        return null != n ? (ff(this, n), i.updateOffset(this, !0), this) : vi(this, "Month")
    }

    function is() {
        return vr(this.year(), this.month())
    }

    function rs(n) {
        return this._monthsParseExact ? (nt(this, "_monthsRegex") || of .call(this), n ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && n ? this._monthsShortStrictRegex : this._monthsShortRegex
    }

    function us(n) {
        return this._monthsParseExact ? (nt(this, "_monthsRegex") || of .call(this), n ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && n ? this._monthsStrictRegex : this._monthsRegex
    }

    function of () {
        function f(n, t) {
            return t.length - n.length
        }
        for (var i, r = [], u = [], t = [], n = 0; 12 > n; n++) i = dt([2e3, n]), r.push(this.monthsShort(i, "")), u.push(this.months(i, "")), t.push(this.months(i, "")), t.push(this.monthsShort(i, ""));
        for (r.sort(f), u.sort(f), t.sort(f), n = 0; 12 > n; n++) r[n] = yi(r[n]), u[n] = yi(u[n]), t[n] = yi(t[n]);
        this._monthsRegex = new RegExp("^(" + t.join("|") + ")", "i");
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp("^(" + u.join("|") + ")$", "i");
        this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")$", "i")
    }

    function yr(n) {
        var i, t = n._a;
        return t && -2 === e(n).overflow && (i = t[rt] < 0 || t[rt] > 11 ? rt : t[tt] < 1 || t[tt] > vr(t[d], t[rt]) ? tt : t[a] < 0 || t[a] > 24 || 24 === t[a] && (0 !== t[g] || 0 !== t[ut] || 0 !== t[kt]) ? a : t[g] < 0 || t[g] > 59 ? g : t[ut] < 0 || t[ut] > 59 ? ut : t[kt] < 0 || t[kt] > 999 ? kt : -1, e(n)._overflowDayOfYear && (d > i || i > tt) && (i = tt), e(n)._overflowWeeks && -1 === i && (i = rv), e(n)._overflowWeekday && -1 === i && (i = uv), e(n).overflow = i), n
    }

    function sf(n) {
        var t, r, o, f, u, s, h = n._i,
            i = hv.exec(h) || cv.exec(h);
        if (i) {
            for (e(n).iso = !0, t = 0, r = er.length; r > t; t++)
                if (er[t][1].exec(i[1])) {
                    f = er[t][0];
                    o = er[t][2] !== !1;
                    break
                }
            if (null == f) return void(n._isValid = !1);
            if (i[3]) {
                for (t = 0, r = hu.length; r > t; t++)
                    if (hu[t][1].exec(i[3])) {
                        u = (i[2] || " ") + hu[t][0];
                        break
                    }
                if (null == u) return void(n._isValid = !1)
            }
            if (!o && null != u) return void(n._isValid = !1);
            if (i[4]) {
                if (!lv.exec(i[4])) return void(n._isValid = !1);
                s = "Z"
            }
            n._f = f + (u || "") + (s || "");
            wr(n)
        } else n._isValid = !1
    }

    function fs(n) {
        var t = av.exec(n._i);
        return null !== t ? void(n._d = new Date(+t[1])) : (sf(n), void(n._isValid === !1 && (delete n._isValid, i.createFromInputFallback(n))))
    }

    function es(n, t, i, r, u, f, e) {
        var o = new Date(n, t, i, r, u, f, e);
        return 100 > n && n >= 0 && isFinite(o.getFullYear()) && o.setFullYear(n), o
    }

    function pi(n) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return 100 > n && n >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(n), t
    }

    function ei(n) {
        return hf(n) ? 366 : 365
    }

    function hf(n) {
        return n % 4 == 0 && n % 100 != 0 || n % 400 == 0
    }

    function os() {
        return hf(this.year())
    }

    function wi(n, t, i) {
        var r = 7 + t - i,
            u = (7 + pi(n, 0, r).getUTCDay() - t) % 7;
        return -u + r - 1
    }

    function cf(n, t, i, r, u) {
        var f, o, s = (7 + i - r) % 7,
            h = wi(n, r, u),
            e = 1 + 7 * (t - 1) + s + h;
        return 0 >= e ? (f = n - 1, o = ei(f) + e) : e > ei(n) ? (f = n + 1, o = e - ei(n)) : (f = n, o = e), {
            year: f,
            dayOfYear: o
        }
    }

    function oi(n, t, i) {
        var f, r, e = wi(n.year(), t, i),
            u = Math.floor((n.dayOfYear() - e - 1) / 7) + 1;
        return 1 > u ? (r = n.year() - 1, f = u + pt(r, t, i)) : u > pt(n.year(), t, i) ? (f = u - pt(n.year(), t, i), r = n.year() + 1) : (r = n.year(), f = u), {
            week: f,
            year: r
        }
    }

    function pt(n, t, i) {
        var r = wi(n, t, i),
            u = wi(n + 1, t, i);
        return (ei(n) - r + u) / 7
    }

    function ti(n, t, i) {
        return null != n ? n : null != t ? t : i
    }

    function ss(n) {
        var t = new Date(i.now());
        return n._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
    }

    function pr(n) {
        var t, i, r, u, f = [];
        if (!n._d) {
            for (r = ss(n), n._w && null == n._a[tt] && null == n._a[rt] && hs(n), n._dayOfYear && (u = ti(n._a[d], r[d]), n._dayOfYear > ei(u) && (e(n)._overflowDayOfYear = !0), i = pi(u, 0, n._dayOfYear), n._a[rt] = i.getUTCMonth(), n._a[tt] = i.getUTCDate()), t = 0; 3 > t && null == n._a[t]; ++t) n._a[t] = f[t] = r[t];
            for (; 7 > t; t++) n._a[t] = f[t] = null == n._a[t] ? 2 === t ? 1 : 0 : n._a[t];
            24 === n._a[a] && 0 === n._a[g] && 0 === n._a[ut] && 0 === n._a[kt] && (n._nextDay = !0, n._a[a] = 0);
            n._d = (n._useUTC ? pi : es).apply(null, f);
            null != n._tzm && n._d.setUTCMinutes(n._d.getUTCMinutes() - n._tzm);
            n._nextDay && (n._a[a] = 24)
        }
    }

    function hs(n) {
        var t, o, u, i, r, f, c, s;
        t = n._w;
        null != t.GG || null != t.W || null != t.E ? (r = 1, f = 4, o = ti(t.GG, n._a[d], oi(h(), 1, 4).year), u = ti(t.W, 1), i = ti(t.E, 1), (1 > i || i > 7) && (s = !0)) : (r = n._locale._week.dow, f = n._locale._week.doy, o = ti(t.gg, n._a[d], oi(h(), r, f).year), u = ti(t.w, 1), null != t.d ? (i = t.d, (0 > i || i > 6) && (s = !0)) : null != t.e ? (i = t.e + r, (t.e < 0 || t.e > 6) && (s = !0)) : i = r);
        1 > u || u > pt(o, r, f) ? e(n)._overflowWeeks = !0 : null != s ? e(n)._overflowWeekday = !0 : (c = cf(o, u, i, r, f), n._a[d] = c.year, n._dayOfYear = c.dayOfYear)
    }

    function wr(n) {
        if (n._f === i.ISO_8601) return void sf(n);
        n._a = [];
        e(n).empty = !0;
        for (var t, u, s, r = "" + n._i, c = r.length, h = 0, o = uf(n._f, n._locale).match(le) || [], f = 0; f < o.length; f++) u = o[f], t = (r.match(wo(u, n)) || [])[0], t && (s = r.substr(0, r.indexOf(t)), s.length > 0 && e(n).unusedInput.push(s), r = r.slice(r.indexOf(t) + t.length), h += t.length), ii[u] ? (t ? e(n).empty = !1 : e(n).unusedTokens.push(u), ko(u, t, n)) : n._strict && !t && e(n).unusedTokens.push(u);
        e(n).charsLeftOver = c - h;
        r.length > 0 && e(n).unusedInput.push(r);
        e(n).bigHour === !0 && n._a[a] <= 12 && n._a[a] > 0 && (e(n).bigHour = void 0);
        n._a[a] = cs(n._locale, n._a[a], n._meridiem);
        pr(n);
        yr(n)
    }

    function cs(n, t, i) {
        var r;
        return null == i ? t : null != n.meridiemHour ? n.meridiemHour(t, i) : null != n.isPM ? (r = n.isPM(i), r && 12 > t && (t += 12), r || 12 !== t || (t = 0), t) : t
    }

    function ls(n) {
        var t, f, u, r, i;
        if (0 === n._f.length) return e(n).invalidFormat = !0, void(n._d = new Date(NaN));
        for (r = 0; r < n._f.length; r++) i = 0, t = sr({}, n), null != n._useUTC && (t._useUTC = n._useUTC), t._f = n._f[r], wr(t), or(t) && (i += e(t).charsLeftOver, i += 10 * e(t).unusedTokens.length, e(t).score = i, (null == u || u > i) && (u = i, f = t));
        vt(n, f || t)
    }

    function as(n) {
        if (!n._d) {
            var t = nf(n._i);
            n._a = yu([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(n) {
                return n && parseInt(n, 10)
            });
            pr(n)
        }
    }

    function vs(n) {
        var t = new ui(yr(lf(n)));
        return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
    }

    function lf(n) {
        var t = n._i,
            i = n._f;
        return n._locale = n._locale || yt(n._l), null === t || void 0 === i && "" === t ? ai({
            nullInput: !0
        }) : ("string" == typeof t && (n._i = t = n._locale.preparse(t)), et(t) ? new ui(yr(t)) : (at(i) ? ls(n) : i ? wr(n) : li(t) ? n._d = t : ys(n), or(n) || (n._d = null), n))
    }

    function ys(n) {
        var t = n._i;
        void 0 === t ? n._d = new Date(i.now()) : li(t) ? n._d = new Date(+t) : "string" == typeof t ? fs(n) : at(t) ? (n._a = yu(t.slice(0), function(n) {
            return parseInt(n, 10)
        }), pr(n)) : "object" == typeof t ? as(n) : "number" == typeof t ? n._d = new Date(t) : i.createFromInputFallback(n)
    }

    function af(n, t, i, r, u) {
        var f = {};
        return "boolean" == typeof i && (r = i, i = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = u, f._l = i, f._i = n, f._f = t, f._strict = r, vs(f)
    }

    function h(n, t, i, r) {
        return af(n, t, i, r, !1)
    }

    function vf(n, t) {
        var r, i;
        if (1 === t.length && at(t[0]) && (t = t[0]), !t.length) return h();
        for (r = t[0], i = 1; i < t.length; ++i)(!t[i].isValid() || t[i][n](r)) && (r = t[i]);
        return r
    }

    function ps() {
        var n = [].slice.call(arguments, 0);
        return vf("isBefore", n)
    }

    function ws() {
        var n = [].slice.call(arguments, 0);
        return vf("isAfter", n)
    }

    function bi(n) {
        var t = nf(n),
            i = t.year || 0,
            r = t.quarter || 0,
            u = t.month || 0,
            f = t.week || 0,
            e = t.day || 0,
            o = t.hour || 0,
            s = t.minute || 0,
            h = t.second || 0,
            c = t.millisecond || 0;
        this._milliseconds = +c + 1e3 * h + 6e4 * s + 36e5 * o;
        this._days = +e + 7 * f;
        this._months = +u + 3 * r + 12 * i;
        this._data = {};
        this._locale = yt();
        this._bubble()
    }

    function br(n) {
        return n instanceof bi
    }

    function yf(n, t) {
        r(n, 0, 0, function() {
            var n = this.utcOffset(),
                i = "+";
            return 0 > n && (n = -n, i = "-"), i + it(~~(n / 60), 2) + t + it(~~n % 60, 2)
        })
    }

    function kr(n, t) {
        var r = (t || "").match(n) || [],
            e = r[r.length - 1] || [],
            i = (e + "").match(be) || ["-", 0, 0],
            u = +(60 * i[1]) + f(i[2]);
        return "+" === i[0] ? u : -u
    }

    function dr(n, t) {
        var r, u;
        return t._isUTC ? (r = t.clone(), u = (et(n) || li(n) ? +n : +h(n)) - +r, r._d.setTime(+r._d + u), i.updateOffset(r, !1), r) : h(n).local()
    }

    function gr(n) {
        return 15 * -Math.round(n._d.getTimezoneOffset() / 15)
    }

    function bs(n, t) {
        var r, u = this._offset || 0;
        return this.isValid() ? null != n ? ("string" == typeof n ? n = kr(fr, n) : Math.abs(n) < 16 && (n = 60 * n), !this._isUTC && t && (r = gr(this)), this._offset = n, this._isUTC = !0, null != r && this.add(r, "m"), u !== n && (!t || this._changeInProgress ? df(this, st(n - u, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, i.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? u : gr(this) : null != n ? this : NaN
    }

    function ks(n, t) {
        return null != n ? ("string" != typeof n && (n = -n), this.utcOffset(n, t), this) : -this.utcOffset()
    }

    function ds(n) {
        return this.utcOffset(0, n)
    }

    function gs(n) {
        return this._isUTC && (this.utcOffset(0, n), this._isUTC = !1, n && this.subtract(gr(this), "m")), this
    }

    function nh() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(kr(iv, this._i)), this
    }

    function th(n) {
        return this.isValid() ? (n = n ? h(n).utcOffset() : 0, (this.utcOffset() - n) % 60 == 0) : !1
    }

    function ih() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function rh() {
        var n, t;
        return y(this._isDSTShifted) ? (n = {}, (sr(n, this), n = lf(n), n._a) ? (t = n._isUTC ? dt(n._a) : h(n._a), this._isDSTShifted = this.isValid() && pu(n._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted) : this._isDSTShifted
    }

    function uh() {
        return this.isValid() ? !this._isUTC : !1
    }

    function fh() {
        return this.isValid() ? this._isUTC : !1
    }

    function pf() {
        return this.isValid() ? this._isUTC && 0 === this._offset : !1
    }

    function st(n, t) {
        var u, e, o, i = n,
            r = null;
        return br(n) ? i = {
            ms: n._milliseconds,
            d: n._days,
            M: n._months
        } : "number" == typeof n ? (i = {}, t ? i[t] = n : i.milliseconds = n) : (r = ke.exec(n)) ? (u = "-" === r[1] ? -1 : 1, i = {
            y: 0,
            d: f(r[tt]) * u,
            h: f(r[a]) * u,
            m: f(r[g]) * u,
            s: f(r[ut]) * u,
            ms: f(r[kt]) * u
        }) : (r = de.exec(n)) ? (u = "-" === r[1] ? -1 : 1, i = {
            y: wt(r[2], u),
            M: wt(r[3], u),
            w: wt(r[4], u),
            d: wt(r[5], u),
            h: wt(r[6], u),
            m: wt(r[7], u),
            s: wt(r[8], u)
        }) : null == i ? i = {} : "object" == typeof i && ("from" in i || "to" in i) && (o = eh(h(i.from), h(i.to)), i = {}, i.ms = o.milliseconds, i.M = o.months), e = new bi(i), br(n) && nt(n, "_locale") && (e._locale = n._locale), e
    }

    function wt(n, t) {
        var i = n && parseFloat(n.replace(",", "."));
        return (isNaN(i) ? 0 : i) * t
    }

    function wf(n, t) {
        var i = {
            milliseconds: 0,
            months: 0
        };
        return i.months = t.month() - n.month() + 12 * (t.year() - n.year()), n.clone().add(i.months, "M").isAfter(t) && --i.months, i.milliseconds = +t - +n.clone().add(i.months, "M"), i
    }

    function eh(n, t) {
        var i;
        return n.isValid() && t.isValid() ? (t = dr(t, n), n.isBefore(t) ? i = wf(n, t) : (i = wf(t, n), i.milliseconds = -i.milliseconds, i.months = -i.months), i) : {
            milliseconds: 0,
            months: 0
        }
    }

    function bf(n) {
        return 0 > n ? -1 * Math.round(-1 * n) : Math.round(n)
    }

    function kf(n, t) {
        return function(i, r) {
            var u, f;
            return null === r || isNaN(+r) || (hr(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), f = i, i = r, r = f), i = "string" == typeof i ? +i : i, u = st(i, r), df(this, u, n), this
        }
    }

    function df(n, t, r, u) {
        var o = t._milliseconds,
            f = bf(t._days),
            e = bf(t._months);
        n.isValid() && (u = null == u ? !0 : u, o && n._d.setTime(+n._d + o * r), f && tf(n, "Date", vi(n, "Date") + f * r), e && ff(n, vi(n, "Month") + e * r), u && i.updateOffset(n, f || e))
    }

    function oh(n, t) {
        var u = n || h(),
            f = dr(u, this).startOf("day"),
            i = this.diff(f, "days", !0),
            r = -6 > i ? "sameElse" : -1 > i ? "lastWeek" : 0 > i ? "lastDay" : 1 > i ? "sameDay" : 2 > i ? "nextDay" : 7 > i ? "nextWeek" : "sameElse",
            e = t && (ot(t[r]) ? t[r]() : t[r]);
        return this.format(e || this.localeData().calendar(r, this, h(u)))
    }

    function sh() {
        return new ui(this)
    }

    function hh(n, t) {
        var i = et(n) ? n : h(n);
        return this.isValid() && i.isValid() ? (t = k(y(t) ? "millisecond" : t), "millisecond" === t ? +this > +i : +i < +this.clone().startOf(t)) : !1
    }

    function ch(n, t) {
        var i = et(n) ? n : h(n);
        return this.isValid() && i.isValid() ? (t = k(y(t) ? "millisecond" : t), "millisecond" === t ? +i > +this : +this.clone().endOf(t) < +i) : !1
    }

    function lh(n, t, i) {
        return this.isAfter(n, i) && this.isBefore(t, i)
    }

    function ah(n, t) {
        var i, r = et(n) ? n : h(n);
        return this.isValid() && r.isValid() ? (t = k(t || "millisecond"), "millisecond" === t ? +this == +r : (i = +r, +this.clone().startOf(t) <= i && i <= +this.clone().endOf(t))) : !1
    }

    function vh(n, t) {
        return this.isSame(n, t) || this.isAfter(n, t)
    }

    function yh(n, t) {
        return this.isSame(n, t) || this.isBefore(n, t)
    }

    function ph(n, t, i) {
        var f, e, r, u;
        return this.isValid() ? (f = dr(n, this), f.isValid() ? (e = 6e4 * (f.utcOffset() - this.utcOffset()), t = k(t), "year" === t || "month" === t || "quarter" === t ? (u = wh(this, f), "quarter" === t ? u /= 3 : "year" === t && (u /= 12)) : (r = this - f, u = "second" === t ? r / 1e3 : "minute" === t ? r / 6e4 : "hour" === t ? r / 36e5 : "day" === t ? (r - e) / 864e5 : "week" === t ? (r - e) / 6048e5 : r), i ? u : p(u)) : NaN) : NaN
    }

    function wh(n, t) {
        var r, f, u = 12 * (t.year() - n.year()) + (t.month() - n.month()),
            i = n.clone().add(u, "months");
        return 0 > t - i ? (r = n.clone().add(u - 1, "months"), f = (t - i) / (i - r)) : (r = n.clone().add(u + 1, "months"), f = (t - i) / (r - i)), -(u + f)
    }

    function bh() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function kh() {
        var n = this.clone().utc();
        return 0 < n.year() && n.year() <= 9999 ? ot(Date.prototype.toISOString) ? this.toDate().toISOString() : ar(n, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : ar(n, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function dh(n) {
        var t = ar(this, n || i.defaultFormat);
        return this.localeData().postformat(t)
    }

    function gh(n, t) {
        return this.isValid() && (et(n) && n.isValid() || h(n).isValid()) ? st({
            to: this,
            from: n
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }

    function nc(n) {
        return this.from(h(), n)
    }

    function tc(n, t) {
        return this.isValid() && (et(n) && n.isValid() || h(n).isValid()) ? st({
            from: this,
            to: n
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }

    function ic(n) {
        return this.to(h(), n)
    }

    function gf(n) {
        var t;
        return void 0 === n ? this._locale._abbr : (t = yt(n), null != t && (this._locale = t), this)
    }

    function ne() {
        return this._locale
    }

    function rc(n) {
        switch (n = k(n)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === n && this.weekday(0), "isoWeek" === n && this.isoWeekday(1), "quarter" === n && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function uc(n) {
        return n = k(n), void 0 === n || "millisecond" === n ? this : this.startOf(n).add(1, "isoWeek" === n ? "week" : n).subtract(1, "ms")
    }

    function fc() {
        return +this._d - 6e4 * (this._offset || 0)
    }

    function ec() {
        return Math.floor(+this / 1e3)
    }

    function oc() {
        return this._offset ? new Date(+this) : this._d
    }

    function sc() {
        var n = this;
        return [n.year(), n.month(), n.date(), n.hour(), n.minute(), n.second(), n.millisecond()]
    }

    function hc() {
        var n = this;
        return {
            years: n.year(),
            months: n.month(),
            date: n.date(),
            hours: n.hours(),
            minutes: n.minutes(),
            seconds: n.seconds(),
            milliseconds: n.milliseconds()
        }
    }

    function cc() {
        return this.isValid() ? this.toISOString() : null
    }

    function lc() {
        return or(this)
    }

    function ac() {
        return vt({}, e(this))
    }

    function vc() {
        return e(this).overflow
    }

    function yc() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }

    function ki(n, t) {
        r(0, [n, n.length], 0, t)
    }

    function pc(n) {
        return te.call(this, n, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function wc(n) {
        return te.call(this, n, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function bc() {
        return pt(this.year(), 1, 4)
    }

    function kc() {
        var n = this.localeData()._week;
        return pt(this.year(), n.dow, n.doy)
    }

    function te(n, t, i, r, u) {
        var f;
        return null == n ? oi(this, r, u).year : (f = pt(n, r, u), t > f && (t = f), dc.call(this, n, t, i, r, u))
    }

    function dc(n, t, i, r, u) {
        var e = cf(n, t, i, r, u),
            f = pi(e.year, 0, e.dayOfYear);
        return this.year(f.getUTCFullYear()), this.month(f.getUTCMonth()), this.date(f.getUTCDate()), this
    }

    function gc(n) {
        return null == n ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (n - 1) + this.month() % 3)
    }

    function nl(n) {
        return oi(n, this._week.dow, this._week.doy).week
    }

    function tl() {
        return this._week.dow
    }

    function il() {
        return this._week.doy
    }

    function rl(n) {
        var t = this.localeData().week(this);
        return null == n ? t : this.add(7 * (n - t), "d")
    }

    function ul(n) {
        var t = oi(this, 1, 4).week;
        return null == n ? t : this.add(7 * (n - t), "d")
    }

    function fl(n, t) {
        return "string" != typeof n ? n : isNaN(n) ? (n = t.weekdaysParse(n), "number" == typeof n ? n : null) : parseInt(n, 10)
    }

    function el(n, t) {
        return at(this._weekdays) ? this._weekdays[n.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][n.day()]
    }

    function ol(n) {
        return this._weekdaysShort[n.day()]
    }

    function sl(n) {
        return this._weekdaysMin[n.day()]
    }

    function hl(n, t, i) {
        var r, u, f;
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; 7 > r; r++)
            if ((u = h([2e3, 1]).day(r), i && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(u, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(u, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(u, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[r] || (f = "^" + this.weekdays(u, "") + "|^" + this.weekdaysShort(u, "") + "|^" + this.weekdaysMin(u, ""), this._weekdaysParse[r] = new RegExp(f.replace(".", ""), "i")), i && "dddd" === t && this._fullWeekdaysParse[r].test(n)) || i && "ddd" === t && this._shortWeekdaysParse[r].test(n) || i && "dd" === t && this._minWeekdaysParse[r].test(n) || !i && this._weekdaysParse[r].test(n)) return r
    }

    function cl(n) {
        if (!this.isValid()) return null != n ? this : NaN;
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != n ? (n = fl(n, this.localeData()), this.add(n - t, "d")) : t
    }

    function ll(n) {
        if (!this.isValid()) return null != n ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == n ? t : this.add(n - t, "d")
    }

    function al(n) {
        return this.isValid() ? null == n ? this.day() || 7 : this.day(this.day() % 7 ? n : n - 7) : null != n ? this : NaN
    }

    function vl(n) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == n ? t : this.add(n - t, "d")
    }

    function nu() {
        return this.hours() % 12 || 12
    }

    function ie(n, t) {
        r(n, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }

    function re(n, t) {
        return t._meridiemParse
    }

    function yl(n) {
        return "p" === (n + "").toLowerCase().charAt(0)
    }

    function pl(n, t, i) {
        return n > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
    }

    function wl(n, t) {
        t[kt] = f(1e3 * ("0." + n))
    }

    function bl() {
        return this._isUTC ? "UTC" : ""
    }

    function kl() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function dl(n) {
        return h(1e3 * n)
    }

    function gl() {
        return h.apply(null, arguments).parseZone()
    }

    function na(n, t, i) {
        var r = this._calendar[n];
        return ot(r) ? r.call(t, i) : r
    }

    function ta(n) {
        var t = this._longDateFormat[n],
            i = this._longDateFormat[n.toUpperCase()];
        return t || !i ? t : (this._longDateFormat[n] = i.replace(/MMMM|MM|DD|dddd/g, function(n) {
            return n.slice(1)
        }), this._longDateFormat[n])
    }

    function ia() {
        return this._invalidDate
    }

    function ra(n) {
        return this._ordinal.replace("%d", n)
    }

    function ue(n) {
        return n
    }

    function ua(n, t, i, r) {
        var u = this._relativeTime[i];
        return ot(u) ? u(n, t, i, r) : u.replace(/%d/i, n)
    }

    function fa(n, t) {
        var i = this._relativeTime[n > 0 ? "future" : "past"];
        return ot(i) ? i(t) : i.replace(/%s/i, t)
    }

    function fe(n, t, i, r) {
        var u = yt(),
            f = dt().set(r, t);
        return u[i](f, n)
    }

    function si(n, t, i, r, u) {
        if ("number" == typeof n && (t = n, n = void 0), n = n || "", null != t) return fe(n, t, i, u);
        for (var e = [], f = 0; r > f; f++) e[f] = fe(n, f, i, u);
        return e
    }

    function ea(n, t) {
        return si(n, t, "months", 12, "month")
    }

    function oa(n, t) {
        return si(n, t, "monthsShort", 12, "month")
    }

    function sa(n, t) {
        return si(n, t, "weekdays", 7, "day")
    }

    function ha(n, t) {
        return si(n, t, "weekdaysShort", 7, "day")
    }

    function ca(n, t) {
        return si(n, t, "weekdaysMin", 7, "day")
    }

    function la() {
        var n = this._data;
        return this._milliseconds = ft(this._milliseconds), this._days = ft(this._days), this._months = ft(this._months), n.milliseconds = ft(n.milliseconds), n.seconds = ft(n.seconds), n.minutes = ft(n.minutes), n.hours = ft(n.hours), n.months = ft(n.months), n.years = ft(n.years), this
    }

    function ee(n, t, i, r) {
        var u = st(t, i);
        return n._milliseconds += r * u._milliseconds, n._days += r * u._days, n._months += r * u._months, n._bubble()
    }

    function aa(n, t) {
        return ee(this, n, t, 1)
    }

    function va(n, t) {
        return ee(this, n, t, -1)
    }

    function oe(n) {
        return 0 > n ? Math.floor(n) : Math.ceil(n)
    }

    function ya() {
        var u, f, e, s, o, r = this._milliseconds,
            n = this._days,
            t = this._months,
            i = this._data;
        return r >= 0 && n >= 0 && t >= 0 || 0 >= r && 0 >= n && 0 >= t || (r += 864e5 * oe(tu(t) + n), n = 0, t = 0), i.milliseconds = r % 1e3, u = p(r / 1e3), i.seconds = u % 60, f = p(u / 60), i.minutes = f % 60, e = p(f / 60), i.hours = e % 24, n += p(e / 24), o = p(se(n)), t += o, n -= oe(tu(o)), s = p(t / 12), t %= 12, i.days = n, i.months = t, i.years = s, this
    }

    function se(n) {
        return 4800 * n / 146097
    }

    function tu(n) {
        return 146097 * n / 4800
    }

    function pa(n) {
        var t, r, i = this._milliseconds;
        if (n = k(n), "month" === n || "year" === n) return t = this._days + i / 864e5, r = this._months + se(t), "month" === n ? r : r / 12;
        switch (t = this._days + Math.round(tu(this._months)), n) {
            case "week":
                return t / 7 + i / 6048e5;
            case "day":
                return t + i / 864e5;
            case "hour":
                return 24 * t + i / 36e5;
            case "minute":
                return 1440 * t + i / 6e4;
            case "second":
                return 86400 * t + i / 1e3;
            case "millisecond":
                return Math.floor(864e5 * t) + i;
            default:
                throw new Error("Unknown unit " + n);
        }
    }

    function wa() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * f(this._months / 12)
    }

    function ht(n) {
        return function() {
            return this.as(n)
        }
    }

    function ba(n) {
        return n = k(n), this[n + "s"]()
    }

    function bt(n) {
        return function() {
            return this._data[n]
        }
    }

    function ka() {
        return p(this.days() / 7)
    }

    function da(n, t, i, r, u) {
        return u.relativeTime(t || 1, !!i, n, r)
    }

    function ga(n, t, i) {
        var r = st(n).abs(),
            h = ri(r.as("s")),
            f = ri(r.as("m")),
            e = ri(r.as("h")),
            o = ri(r.as("d")),
            s = ri(r.as("M")),
            c = ri(r.as("y")),
            u = h < lt.s && ["s", h] || 1 >= f && ["m"] || f < lt.m && ["mm", f] || 1 >= e && ["h"] || e < lt.h && ["hh", e] || 1 >= o && ["d"] || o < lt.d && ["dd", o] || 1 >= s && ["M"] || s < lt.M && ["MM", s] || 1 >= c && ["y"] || ["yy", c];
        return u[2] = t, u[3] = +n > 0, u[4] = i, da.apply(null, u)
    }

    function nv(n, t) {
        return void 0 === lt[n] ? !1 : void 0 === t ? lt[n] : (lt[n] = t, !0)
    }

    function tv(n) {
        var t = this.localeData(),
            i = ga(this, !n, t);
        return n && (i = t.pastFuture(+this, i)), t.postformat(i)
    }

    function di() {
        var n, e, o, t = vu(this._milliseconds) / 1e3,
            a = vu(this._days),
            i = vu(this._months);
        n = p(t / 60);
        e = p(n / 60);
        t %= 60;
        n %= 60;
        o = p(i / 12);
        i %= 12;
        var s = o,
            h = i,
            c = a,
            r = e,
            u = n,
            f = t,
            l = this.asSeconds();
        return l ? (0 > l ? "-" : "") + "P" + (s ? s + "Y" : "") + (h ? h + "M" : "") + (c ? c + "D" : "") + (r || u || f ? "T" : "") + (r ? r + "H" : "") + (u ? u + "M" : "") + (f ? f + "S" : "") : "P0D"
    }
    var he, iu = i.momentProperties = [],
        ru = !1,
        ce = {},
        cu, be, ke, de, ge, no, lu, to, au, io, ro, uo, fo, ct, eo, n;
    i.suppressDeprecationWarnings = !1;
    var gi, l = {},
        hi = {},
        le = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        nr = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        uu = {},
        ii = {},
        ae = /\d/,
        w = /\d\d/,
        ve = /\d{3}/,
        fu = /\d{4}/,
        tr = /[+-]?\d{6}/,
        c = /\d\d?/,
        ye = /\d\d\d\d?/,
        pe = /\d\d\d\d\d\d?/,
        ir = /\d{1,3}/,
        eu = /\d{1,4}/,
        rr = /[+-]?\d{1,6}/,
        ur = /[+-]?\d+/,
        iv = /Z|[+-]\d\d:?\d\d/gi,
        fr = /Z|[+-]\d\d(?::?\d\d)?/gi,
        ci = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        ou = {},
        su = {},
        d = 0,
        rt = 1,
        tt = 2,
        a = 3,
        g = 4,
        ut = 5,
        kt = 6,
        rv = 7,
        uv = 8;
    r("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    });
    r("MMM", 0, 0, function(n) {
        return this.localeData().monthsShort(this, n)
    });
    r("MMMM", 0, 0, function(n) {
        return this.localeData().months(this, n)
    });
    v("month", "M");
    t("M", c);
    t("MM", c, w);
    t("MMM", function(n, t) {
        return t.monthsShortRegex(n)
    });
    t("MMMM", function(n, t) {
        return t.monthsRegex(n)
    });
    s(["M", "MM"], function(n, t) {
        t[rt] = f(n) - 1
    });
    s(["MMM", "MMMM"], function(n, t, i, r) {
        var u = i._locale.monthsParse(n, r, i._strict);
        null != u ? t[rt] = u : e(i).invalidMonth = n
    });
    var we = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
        fv = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ev = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        ov = ci,
        sv = ci,
        hv = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
        cv = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
        lv = /Z|[+-]\d\d(?::?\d\d)?/,
        er = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        hu = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        av = /^\/?Date\((\-?\d+)/i;
    i.createFromInputFallback = b("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(n) {
        n._d = new Date(n._i + (n._useUTC ? " UTC" : ""))
    });
    r("Y", 0, 0, function() {
        var n = this.year();
        return 9999 >= n ? "" + n : "+" + n
    });
    r(0, ["YY", 2], 0, function() {
        return this.year() % 100
    });
    r(0, ["YYYY", 4], 0, "year");
    r(0, ["YYYYY", 5], 0, "year");
    r(0, ["YYYYYY", 6, !0], 0, "year");
    v("year", "y");
    t("Y", ur);
    t("YY", c, w);
    t("YYYY", eu, fu);
    t("YYYYY", rr, tr);
    t("YYYYYY", rr, tr);
    s(["YYYYY", "YYYYYY"], d);
    s("YYYY", function(n, t) {
        t[d] = 2 === n.length ? i.parseTwoDigitYear(n) : f(n)
    });
    s("YY", function(n, t) {
        t[d] = i.parseTwoDigitYear(n)
    });
    s("Y", function(n, t) {
        t[d] = parseInt(n, 10)
    });
    i.parseTwoDigitYear = function(n) {
        return f(n) + (f(n) > 68 ? 1900 : 2e3)
    };
    cu = ni("FullYear", !1);
    i.ISO_8601 = function() {};
    var vv = b("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
            var n = h.apply(null, arguments);
            return this.isValid() && n.isValid() ? this > n ? this : n : ai()
        }),
        yv = b("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
            var n = h.apply(null, arguments);
            return this.isValid() && n.isValid() ? n > this ? this : n : ai()
        }),
        pv = function() {
            return Date.now ? Date.now() : +new Date
        };
    yf("Z", ":");
    yf("ZZ", "");
    t("Z", fr);
    t("ZZ", fr);
    s(["Z", "ZZ"], function(n, t, i) {
        i._useUTC = !0;
        i._tzm = kr(fr, n)
    });
    be = /([\+\-]|\d\d)/gi;
    i.updateOffset = function() {};
    ke = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/;
    de = /^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$/;
    st.fn = bi.prototype;
    ge = kf(1, "add");
    no = kf(-1, "subtract");
    i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    lu = b("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(n) {
        return void 0 === n ? this.localeData() : this.locale(n)
    });
    r(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    });
    r(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    });
    ki("gggg", "weekYear");
    ki("ggggg", "weekYear");
    ki("GGGG", "isoWeekYear");
    ki("GGGGG", "isoWeekYear");
    v("weekYear", "gg");
    v("isoWeekYear", "GG");
    t("G", ur);
    t("g", ur);
    t("GG", c, w);
    t("gg", c, w);
    t("GGGG", eu, fu);
    t("gggg", eu, fu);
    t("GGGGG", rr, tr);
    t("ggggg", rr, tr);
    fi(["gggg", "ggggg", "GGGG", "GGGGG"], function(n, t, i, r) {
        t[r.substr(0, 2)] = f(n)
    });
    fi(["gg", "GG"], function(n, t, r, u) {
        t[u] = i.parseTwoDigitYear(n)
    });
    r("Q", 0, "Qo", "quarter");
    v("quarter", "Q");
    t("Q", ae);
    s("Q", function(n, t) {
        t[rt] = 3 * (f(n) - 1)
    });
    r("w", ["ww", 2], "wo", "week");
    r("W", ["WW", 2], "Wo", "isoWeek");
    v("week", "w");
    v("isoWeek", "W");
    t("w", c);
    t("ww", c, w);
    t("W", c);
    t("WW", c, w);
    fi(["w", "ww", "W", "WW"], function(n, t, i, r) {
        t[r.substr(0, 1)] = f(n)
    });
    to = {
        dow: 0,
        doy: 6
    };
    r("D", ["DD", 2], "Do", "date");
    v("date", "D");
    t("D", c);
    t("DD", c, w);
    t("Do", function(n, t) {
        return n ? t._ordinalParse : t._ordinalParseLenient
    });
    s(["D", "DD"], tt);
    s("Do", function(n, t) {
        t[tt] = f(n.match(c)[0], 10)
    });
    au = ni("Date", !0);
    r("d", 0, "do", "day");
    r("dd", 0, 0, function(n) {
        return this.localeData().weekdaysMin(this, n)
    });
    r("ddd", 0, 0, function(n) {
        return this.localeData().weekdaysShort(this, n)
    });
    r("dddd", 0, 0, function(n) {
        return this.localeData().weekdays(this, n)
    });
    r("e", 0, 0, "weekday");
    r("E", 0, 0, "isoWeekday");
    v("day", "d");
    v("weekday", "e");
    v("isoWeekday", "E");
    t("d", c);
    t("e", c);
    t("E", c);
    t("dd", ci);
    t("ddd", ci);
    t("dddd", ci);
    fi(["dd", "ddd", "dddd"], function(n, t, i, r) {
        var u = i._locale.weekdaysParse(n, r, i._strict);
        null != u ? t.d = u : e(i).invalidWeekday = n
    });
    fi(["d", "e", "E"], function(n, t, i, r) {
        t[r] = f(n)
    });
    var wv = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        bv = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        kv = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    for (r("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), v("dayOfYear", "DDD"), t("DDD", ir), t("DDDD", ve), s(["DDD", "DDDD"], function(n, t, i) {
            i._dayOfYear = f(n)
        }), r("H", ["HH", 2], 0, "hour"), r("h", ["hh", 2], 0, nu), r("hmm", 0, 0, function() {
            return "" + nu.apply(this) + it(this.minutes(), 2)
        }), r("hmmss", 0, 0, function() {
            return "" + nu.apply(this) + it(this.minutes(), 2) + it(this.seconds(), 2)
        }), r("Hmm", 0, 0, function() {
            return "" + this.hours() + it(this.minutes(), 2)
        }), r("Hmmss", 0, 0, function() {
            return "" + this.hours() + it(this.minutes(), 2) + it(this.seconds(), 2)
        }), ie("a", !0), ie("A", !1), v("hour", "h"), t("a", re), t("A", re), t("H", c), t("h", c), t("HH", c, w), t("hh", c, w), t("hmm", ye), t("hmmss", pe), t("Hmm", ye), t("Hmmss", pe), s(["H", "HH"], a), s(["a", "A"], function(n, t, i) {
            i._isPm = i._locale.isPM(n);
            i._meridiem = n
        }), s(["h", "hh"], function(n, t, i) {
            t[a] = f(n);
            e(i).bigHour = !0
        }), s("hmm", function(n, t, i) {
            var r = n.length - 2;
            t[a] = f(n.substr(0, r));
            t[g] = f(n.substr(r));
            e(i).bigHour = !0
        }), s("hmmss", function(n, t, i) {
            var r = n.length - 4,
                u = n.length - 2;
            t[a] = f(n.substr(0, r));
            t[g] = f(n.substr(r, 2));
            t[ut] = f(n.substr(u));
            e(i).bigHour = !0
        }), s("Hmm", function(n, t) {
            var i = n.length - 2;
            t[a] = f(n.substr(0, i));
            t[g] = f(n.substr(i))
        }), s("Hmmss", function(n, t) {
            var i = n.length - 4,
                r = n.length - 2;
            t[a] = f(n.substr(0, i));
            t[g] = f(n.substr(i, 2));
            t[ut] = f(n.substr(r))
        }), io = /[ap]\.?m?\.?/i, ro = ni("Hours", !0), r("m", ["mm", 2], 0, "minute"), v("minute", "m"), t("m", c), t("mm", c, w), s(["m", "mm"], g), uo = ni("Minutes", !1), r("s", ["ss", 2], 0, "second"), v("second", "s"), t("s", c), t("ss", c, w), s(["s", "ss"], ut), fo = ni("Seconds", !1), r("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), r(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), r(0, ["SSS", 3], 0, "millisecond"), r(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
        }), r(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
        }), r(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
        }), r(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
        }), r(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
        }), r(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
        }), v("millisecond", "ms"), t("S", ir, ae), t("SS", ir, w), t("SSS", ir, ve), ct = "SSSS"; ct.length <= 9; ct += "S") t(ct, /\d+/);
    for (ct = "S"; ct.length <= 9; ct += "S") s(ct, wl);
    eo = ni("Milliseconds", !1);
    r("z", 0, 0, "zoneAbbr");
    r("zz", 0, 0, "zoneName");
    n = ui.prototype;
    n.add = ge;
    n.calendar = oh;
    n.clone = sh;
    n.diff = ph;
    n.endOf = uc;
    n.format = dh;
    n.from = gh;
    n.fromNow = nc;
    n.to = tc;
    n.toNow = ic;
    n.get = rf;
    n.invalidAt = vc;
    n.isAfter = hh;
    n.isBefore = ch;
    n.isBetween = lh;
    n.isSame = ah;
    n.isSameOrAfter = vh;
    n.isSameOrBefore = yh;
    n.isValid = lc;
    n.lang = lu;
    n.locale = gf;
    n.localeData = ne;
    n.max = yv;
    n.min = vv;
    n.parsingFlags = ac;
    n.set = rf;
    n.startOf = rc;
    n.subtract = no;
    n.toArray = sc;
    n.toObject = hc;
    n.toDate = oc;
    n.toISOString = kh;
    n.toJSON = cc;
    n.toString = bh;
    n.unix = ec;
    n.valueOf = fc;
    n.creationData = yc;
    n.year = cu;
    n.isLeapYear = os;
    n.weekYear = pc;
    n.isoWeekYear = wc;
    n.quarter = n.quarters = gc;
    n.month = ef;
    n.daysInMonth = is;
    n.week = n.weeks = rl;
    n.isoWeek = n.isoWeeks = ul;
    n.weeksInYear = kc;
    n.isoWeeksInYear = bc;
    n.date = au;
    n.day = n.days = cl;
    n.weekday = ll;
    n.isoWeekday = al;
    n.dayOfYear = vl;
    n.hour = n.hours = ro;
    n.minute = n.minutes = uo;
    n.second = n.seconds = fo;
    n.millisecond = n.milliseconds = eo;
    n.utcOffset = bs;
    n.utc = ds;
    n.local = gs;
    n.parseZone = nh;
    n.hasAlignedHourOffset = th;
    n.isDST = ih;
    n.isDSTShifted = rh;
    n.isLocal = uh;
    n.isUtcOffset = fh;
    n.isUtc = pf;
    n.isUTC = pf;
    n.zoneAbbr = bl;
    n.zoneName = kl;
    n.dates = b("dates accessor is deprecated. Use date instead.", au);
    n.months = b("months accessor is deprecated. Use month instead", ef);
    n.years = b("years accessor is deprecated. Use year instead", cu);
    n.zone = b("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", ks);
    var oo = n,
        u = lr.prototype;
    u._calendar = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    };
    u.calendar = na;
    u._longDateFormat = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    };
    u.longDateFormat = ta;
    u._invalidDate = "Invalid date";
    u.invalidDate = ia;
    u._ordinal = "%d";
    u.ordinal = ra;
    u._ordinalParse = /\d{1,2}/;
    u.preparse = ue;
    u.postformat = ue;
    u._relativeTime = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    };
    u.relativeTime = ua;
    u.pastFuture = fa;
    u.set = co;
    u.months = go;
    u._months = fv;
    u.monthsShort = ns;
    u._monthsShort = ev;
    u.monthsParse = ts;
    u._monthsRegex = sv;
    u.monthsRegex = us;
    u._monthsShortRegex = ov;
    u.monthsShortRegex = rs;
    u.week = nl;
    u._week = to;
    u.firstDayOfYear = il;
    u.firstDayOfWeek = tl;
    u.weekdays = el;
    u._weekdays = wv;
    u.weekdaysMin = sl;
    u._weekdaysMin = kv;
    u.weekdaysShort = ol;
    u._weekdaysShort = bv;
    u.weekdaysParse = hl;
    u.isPM = yl;
    u._meridiemParse = io;
    u.meridiem = pl;
    gt("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(n) {
            var t = n % 10,
                i = 1 === f(n % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return n + i
        }
    });
    i.lang = b("moment.lang is deprecated. Use moment.locale instead.", gt);
    i.langData = b("moment.langData is deprecated. Use moment.localeData instead.", yt);
    var ft = Math.abs,
        dv = ht("ms"),
        gv = ht("s"),
        ny = ht("m"),
        ty = ht("h"),
        iy = ht("d"),
        ry = ht("w"),
        uy = ht("M"),
        fy = ht("y"),
        ey = bt("milliseconds"),
        oy = bt("seconds"),
        sy = bt("minutes"),
        hy = bt("hours"),
        cy = bt("days"),
        ly = bt("months"),
        ay = bt("years"),
        ri = Math.round,
        lt = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        },
        vu = Math.abs,
        o = bi.prototype;
    return o.abs = la, o.add = aa, o.subtract = va, o.as = pa, o.asMilliseconds = dv, o.asSeconds = gv, o.asMinutes = ny, o.asHours = ty, o.asDays = iy, o.asWeeks = ry, o.asMonths = uy, o.asYears = fy, o.valueOf = wa, o._bubble = ya, o.get = ba, o.milliseconds = ey, o.seconds = oy, o.minutes = sy, o.hours = hy, o.days = cy, o.weeks = ka, o.months = ly, o.years = ay, o.humanize = tv, o.toISOString = di, o.toString = di, o.toJSON = di, o.locale = gf, o.localeData = ne, o.toIsoString = b("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", di), o.lang = lu, r("X", 0, 0, "unix"), r("x", 0, 0, "valueOf"), t("x", ur), t("X", /[+-]?\d+(\.\d{1,3})?/), s("X", function(n, t, i) {
        i._d = new Date(1e3 * parseFloat(n, 10))
    }), s("x", function(n, t, i) {
        i._d = new Date(f(n))
    }), i.version = "2.12.0", so(h), i.fn = oo, i.min = ps, i.max = ws, i.now = pv, i.utc = dt, i.unix = dl, i.months = ea, i.isDate = li, i.locale = gt, i.invalid = ai, i.duration = st, i.isMoment = et, i.weekdays = sa, i.parseZone = gl, i.localeData = yt, i.isDuration = br, i.monthsShort = oa, i.weekdaysMin = ca, i.defineLocale = gu, i.updateLocale = ao, i.locales = vo, i.weekdaysShort = ha, i.normalizeUnits = k, i.relativeTimeThreshold = nv, i.prototype = oo, i
});
captchaValid = function(n) {
    n ? ($("#CaptchaInputText").prop("disabled", "true"), $("#CaptchaInputText").off("blur"), $("#CaptchaOriginal > a").removeAttr("href").css("cursor", "pointer").removeAttr("onclick")) : ($("#CaptchaInputText").val("").parent().removeClass("typed"), $("#CaptchaInputText").valid());
    validarCampos()
}
