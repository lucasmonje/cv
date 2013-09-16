if (typeof (sharethis) == "undefined" || typeof (sharethis) == undefined) {
    window.sharethis = window.sharethis || {
    };
    sharethis.widgets = sharethis.widgets || {
    };
    sharethis.utilities = sharethis.utilities || {
    };
    sharethis.globals = sharethis.globals || {
    };
    sharethis.globals = function () {
        this._stFpc = function () {
            if (!document.domain) {
                return false;
            }
            var g = this._stGetFpc("__unam");
            if (g == false) {
                var c = Math.round(Math.random() * 2147483647);
                c = c.toString(16);
                var h = (new Date()).getTime();
                h = h.toString(16);
                var e = "";
                var a = this._stGetD();
                a = a.split(/\./)[1];
                e = this._stdHash(a) + "-" + h + "-" + c + "-1";
                g = e;
                this._stSetFpc(g);
            }
            else {
                var b = g;
                var f = b.split(/\-/);
                if (f.length == 4) {
                    var d = Number(f[3]);
                    d++;
                    b = f[0] + "-" + f[1] + "-" + f[2] + "-" + d;
                    g = b;
                    this._stSetFpc(g);
                }
            }
            return g;
        };
        this._stSetFpc = function (g) {
            var a = "__unam";
            var c = new Date;
            var j = c.getFullYear();
            var f = c.getMonth() + 9;
            var h = c.getDate();
            var d = a + "=" + escape(g);
            if (j) {
                var b = new Date(j, f, h);
                d += "; expires=" + b.toGMTString();
            }
            var e = this._stGetD();
            d += "; domain=" + escape(e) + ";path=/";
            document.cookie = d;
        };
        this._stGetD = function () {
            var b = document.domain.split(/\./);
            var a = "";
            if (b.length > 1) {
                a = "." + b[b.length - 2] + "." + b[b.length - 1];
            }
            return a;
        };
        this._stGetFpc = function (b) {
            var a = document.cookie.match("(^|;) ?" + b + "=([^;]*)(;|$)");
            if (a) {
                return (unescape(a[2]));
            }
            else {
                return false;
            }
        };
        this._stdHash = function (a) {
            var e = 0, d = 0;
            for (var c = a.length - 1; c >= 0; c--) {
                var b = parseInt(a.charCodeAt(c));
                e = ((e << 8) & 268435455) + b + (b << 12);
                if ((d = e & 161119850) != 0) {
                    e = (e^(d >> 20));
                }
            }
            return e.toString(16);
        };
        this.dbrInfo = function () {
            var a = document.referrer;
            if (a && a.length > 0) {
                var c = /(http:\/\/)(.*?)\/.*/i;
                var b = /(^.*\?)(.*)/ig;
                var f = "";
                var e = a.replace(c, "$2");
                if (e.length > 0) {
                    f += "&refDomain=" + e;
                }
                else {
                    return false;
                }
                var d = a.replace(b, "$2");
                if (d.length > 0) {
                    f += "&refQuery=" + encodeURIComponent(d);
                }
                return f;
            }
            else {
                return"";
            }
        };
        this.initialize = function () {
            if (typeof (SHARETHIS) == "undefined") {
                this.sessionID_time = (new Date()).getTime().toString();
                this.sessionID_rand = Number(Math.random().toPrecision(5).toString().substr(2)).toString();
                this.sessionID = this.sessionID_time + "." + this.sessionID_rand;
                this.fpc = this._stFpc();
                this.pageViewLogged = false;
            }
            else {
                this.fpc = SHARETHIS.fpc;
                this.sessionID = SHARETHIS.sessionID;
                this.pageViewLogged = true;
            }
            this.hostname = location.host;
            this.location = location.pathname;
            this.rurl = this.dbrInfo();
            this.pURL = encodeURIComponent(document.location.href);
            this.ref = document.referrer;
            this.adNum = 0;
            this.discoveryNum = 0;
            this.barPageDoneLoading = 0;
            this.hoverbuttonsNum = 0;
            this.sharebarNum = 0;
            this.pulldownbarNum = 0;
            this.serviceWidgetNum = 0;
        };
        this.initialize();
    };
    sharethis.globals = new sharethis.globals();
    sharethis.widgets.discovery = function (b, c, f) {
        f = (typeof (f) != "undefined") ? f : false;
        if (typeof (stLight) == "undefined" && typeof (SHARETHIS) == "undefined") {
            var a = "";
            if (!typeof (stLight) == "undefined") {
                a = "buttons.js";
            }
            else {
                if (!typeof (SHARETHIS) == "undefined") {
                    a = "sharethis.js";
                }
            }
            var e = "http://l.sharethis.com/pview?event=pview&product=TrendingWidget&version=" + a + "&fpc=" + sharethis.globals.fpc + "&sessionID=" + sharethis.globals.sessionID + "&hostname=" + sharethis.globals.hostname + "&location=" + encodeURIComponent(sharethis.globals.location) + "&publisher=" + c.publisher + "&shareHash=&incomingHash=&refDomain=&refQuery=&url=" + sharethis.globals.pURL + "&sharURL=&source=&title=&ts" + new Date().getTime() + ".0";
            var d = new Image(1, 1);
            d.src = e;
            d.onload = function () {
                return;
            }
        }
        else {
        }
        this.location = "http://sd.sharethis.com/disc/index.661e4c5551ace28fe572c2a49497b4f5.html";
        if (f) {
            this.location = "http://sd.sharethis.com/disc/index-barebones.html";
        }
        this.settings = c;
        this.settings.hostname = sharethis.globals.hostname;
        this.settings.location = sharethis.globals.location;
        this.createQueryString = function () {
            var j = new Array("viewType", "sort", "width", "height", "domain", "type", "src", "topic", "category", "defaultSelection", "theme", "sessionID", "fpc", "pURL", "publisher", "hostname", "location", "ref", "defaultImgUrl", "openContentInNewWindow", "showNoThumbnailArticle");
            var n = new Array("visible", "text");
            var s = new Array("visible");
            var k = new Array("numResults", "maxResults");
            var q = new Array("line0", "line1", "line2");
            var h = new Array("visible");
            var l = new Array();
            var m = new Array("widgetFontFamily", "articleLinkFontSize", "sourceLinkFontSize", "snippetFontSize");
            if (f) {
                j.push("specialStyle");
                h.push("align");
                var g = new Array("visible", "align");
                var u = new Array("everyoneLoadRange");
                var p = new Array("widgetBackgroundColor", "widgetBorder", "articleLinkColor", "sourceLinkColor");
                var r = new Array("visible", "size");
                for (i = 0; i < r.length; i++) {
                    if (this.settings.visualRank != undefined && this.settings.visualRank[r[i]] != undefined) {
                        l.push("visualRank." + r[i] + "=" + encodeURIComponent(this.settings.visualRank[r[i]]));
                    }
                }
                for (i = 0; i < g.length; i++) {
                    if (this.settings.headline != undefined && this.settings.headline[g[i]] != undefined) {
                        l.push("headline." + g[i] + "=" + encodeURIComponent(this.settings.headline[g[i]]));
                    }
                }
            }
            else {
                var u = new Array("everyoneLoadRange", "friendLoadRange", "autoRefreshSpeed", "fetchUpdateSpeed", "firstFetchUpdateSpeed");
                var t = new Array("images", "intAd");
                var p = new Array("headerBackgroundColor", "headerTextColor", "widgetBackgroundColor", "widgetBorder", "articleLinkColor", "sourceLinkColor", "conversationBackgroundColor", "signInPromptBackgroundColor", "signInPromptBorder");
                var o = new Array("like", "comment");
                for (i = 0; i < t.length; i++) {
                    if (this.settings.ad != undefined && this.settings.ad[t[i]] != undefined) {
                        l.push("ad." + t[i] + "=" + encodeURIComponent(this.settings.ad[t[i]]));
                    }
                }
                for (i = 0; i < o.length; i++) {
                    if (this.settings.socialFeatures != undefined && this.settings.socialFeatures[o[i]] != undefined) {
                        l.push("socialFeatures." + o[i] + "=" + encodeURIComponent(this.settings.socialFeatures[o[i]]));
                    }
                }
            }
            for (i = 0; i < j.length; i++) {
                if (this.settings[j[i]] != undefined) {
                    l.push(j[i] + "=" + encodeURIComponent(this.settings[j[i]]));
                }
            }
            for (i = 0; i < n.length; i++) {
                if (this.settings.header != undefined && this.settings.header[n[i]] != undefined) {
                    l.push("header." + n[i] + "=" + encodeURIComponent(this.settings.header[n[i]]));
                }
            }
            for (i = 0; i < s.length; i++) {
                if (this.settings.footer != undefined && this.settings.footer[s[i]] != undefined) {
                    l.push("footer." + s[i] + "=" + encodeURIComponent(this.settings.footer[s[i]]));
                }
            }
            for (i = 0; i < u.length; i++) {
                if (this.settings.realtime != undefined && this.settings.realtime[u[i]] != undefined) {
                    l.push("realtime." + u[i] + "=" + encodeURIComponent(this.settings.realtime[u[i]]));
                }
            }
            for (i = 0; i < k.length; i++) {
                if (this.settings.resultList != undefined && this.settings.resultList[k[i]] != undefined) {
                    l.push("resultList." + k[i] + "=" + encodeURIComponent(this.settings.resultList[k[i]]));
                }
            }
            for (i = 0; i < q.length; i++) {
                if (this.settings.metadata != undefined && this.settings.metadata[q[i]] != undefined) {
                    l.push("metadata." + q[i] + "=" + encodeURIComponent(this.settings.metadata[q[i]]));
                }
            }
            for (i = 0; i < h.length; i++) {
                if (this.settings.image != undefined && this.settings.image[h[i]] != undefined) {
                    l.push("image." + h[i] + "=" + encodeURIComponent(this.settings.image[h[i]]));
                }
            }
            for (i = 0; i < p.length; i++) {
                if (this.settings.customColors != undefined && this.settings.customColors[p[i]] != undefined) {
                    l.push("customColors." + p[i] + "=" + encodeURIComponent(this.settings.customColors[p[i]]));
                }
            }
            for (i = 0; i < m.length; i++) {
                if (this.settings.customStyling != undefined && this.settings.customStyling[m[i]] != undefined) {
                    l.push("customStyling." + m[i] + "=" + encodeURIComponent(this.settings.customStyling[m[i]]));
                }
            }
            return l.join("&");
        };
        this.initialize = function (g, h) {
            try {
                this.frame = document.createElement('<iframe name="stw_discovery' + sharethis.globals.discoveryNum + '" allowTransparency="true" style="body{background:transparent;},display=inline"></iframe>');
            }
            catch (j) {
                this.frame = document.createElement("iframe");
                this.frame.allowTransparency = "true";
                this.frame.setAttribute("allowTransparency", "true");
            }
            this.frame.id = "stw_discovery" + sharethis.globals.discoveryNum;
            this.frame.className = "stw_discovery";
            this.frame.name = "stw_discovery" + sharethis.globals.discoveryNum;
            this.frame.frameBorder = "0";
            this.frame.scrolling = "no";
            this.frame.width = this.settings.width + "px";
            this.frame.height = this.settings.height + "px";
            this.frame.src = this.location + "#" + this.createQueryString() + "&cs";
            g.appendChild(this.frame);
            try {
                window.frames[this.frame.name].location.replace(this.frame.src);
            }
            catch (j) {
            }
            sharethis.globals.discoveryNum++;
        };
        this.initialize(b, c);
    };
    sharethis.widgets.sharebar = function (a) {
        this.initialize = function () {
            if (sharethis.globals.sharebarNum == 0) {
                try {
                    var b = sharethis.utilities.getInternetExplorerVersion();
                    if (b >- 1 && b < 7) {
                        return;
                    }
                    a.hostname = sharethis.globals.hostname;
                    a.location = sharethis.globals.location;
                    sharethis.globals.sharebarOptions = a;
                    if (sharethis.utilities.domUtilities.addListenerCompatible(window, "load", function () {
                        sharethis.globals.barPageDoneLoading = 1;
                    }
                    ) == false) {
                        sharethis.utilities.domUtilities.addListenerCompatible(document, "load", function () {
                            sharethis.globals.barPageDoneLoading = 1;
                        }
                        );
                    }
                    stLight.options( {
                        publisher : a.publisher, autoPosition : "center", onhover : false, loadedFromBar : true
                    }
                    );
                    sharethis.utilities.loadfile("http://sd.sharethis.com/disc/css/bar.f3f6174dda0faea503bd3951701646f0.css", "css", "head", "");
                    sharethis.utilities.loadfile("http://sd.sharethis.com/disc/js/sharebar.c348d35bc8272fa605f1b7de3e146f08.js", "js", "head", "");
                }
                catch (c) {
                    console.log(c);
                }
                sharethis.globals.sharebarNum = 1;
            }
        };
        this.initialize();
    };
    sharethis.widgets.hoverbuttons = function (a) {
        this.initialize = function () {
            if (sharethis.globals.hoverbuttonsNum == 0) {
                try {
                    var b = sharethis.utilities.getInternetExplorerVersion();
                    if (b >- 1 && b < 7) {
                        return;
                    }
                    a.hostname = sharethis.globals.hostname;
                    a.location = sharethis.globals.location;
                    sharethis.globals.hoveringButtonsOptions = a;
                    if (sharethis.utilities.domUtilities.addListenerCompatible(window, "load", function () {
                        sharethis.globals.barPageDoneLoading = 1;
                    }
                    ) == false) {
                        sharethis.utilities.domUtilities.addListenerCompatible(document, "load", function () {
                            sharethis.globals.barPageDoneLoading = 1;
                        }
                        );
                    }
                    stLight.options( {
                        publisher : a.publisher, autoPosition : "center", onhover : false
                    }
                    );
                    sharethis.utilities.loadfile("http://lucasmonje.is-a-geek.com/assets/css/sharethis.hoverbuttons.css", "css", "head", "");
                    sharethis.utilities.loadfile("http://sd.sharethis.com/disc/js/hoverbuttons.486ab4bd935754ea365a515c49697c1c.js", "js", "head", "");
                }
                catch (c) {
                    console.log(c);
                }
                sharethis.globals.hoverbuttonsNum = 1;
            }
        };
        this.initialize();
    };
    sharethis.widgets.serviceWidget = function (a) {
        this.initialize = function () {
            if (sharethis.globals.serviceWidgetNum == 0) {
                try {
                    var b = sharethis.utilities.getInternetExplorerVersion();
                    if (b >- 1 && b < 7) {
                        return;
                    }
                    a.hostname = sharethis.globals.hostname;
                    a.location = sharethis.globals.location;
                    sharethis.globals.serviceWidgetOptions = a;
                    if (sharethis.utilities.domUtilities.addListenerCompatible(window, "load", function () {
                        sharethis.globals.barPageDoneLoading = 1;
                    }
                    ) == false) {
                        sharethis.utilities.domUtilities.addListenerCompatible(document, "load", function () {
                            sharethis.globals.barPageDoneLoading = 1;
                        }
                        );
                    }
                    stLight.options( {
                        publisher : a.publisher, autoPosition : "center", onhover : false
                    }
                    );
                    sharethis.utilities.loadfile("http://sd.sharethis.com/disc/css/serviceWidget-" + a.service + ".css", "css", "head", "");
                    sharethis.utilities.loadfile("http://sd.sharethis.com/disc/js/serviceWidget.js", "js", "head", "");
                }
                catch (c) {
                    console.log(c);
                }
                sharethis.globals.serviceWidgetNum = 1;
            }
        };
        this.initialize();
    };
    sharethis.widgets.pulldownbar = function (a) {
        this.initialize = function () {
            if (sharethis.globals.pulldownbarNum == 0) {
                try {
                    var b = sharethis.utilities.getInternetExplorerVersion();
                    if (b >- 1 && b < 7) {
                        return;
                    }
                    a.hostname = sharethis.globals.hostname;
                    a.location = sharethis.globals.location;
                    sharethis.globals.pulldownbarOptions = a;
                    if (sharethis.utilities.domUtilities.addListenerCompatible(window, "load", function () {
                        sharethis.globals.barPageDoneLoading = 1;
                    }
                    ) == false) {
                        sharethis.utilities.domUtilities.addListenerCompatible(document, "load", function () {
                            sharethis.globals.barPageDoneLoading = 1;
                        }
                        );
                    }
                    stLight.options( {
                        publisher : a.publisher, autoPosition : "center", onhover : false
                    }
                    );
                    sharethis.utilities.loadfile("http://sd.sharethis.com/disc/css/pulldownbar.f3f6174dda0faea503bd3951701646f0.css", "css", "head", "");
                    sharethis.utilities.loadfile("http://sd.sharethis.com/disc/js/pulldownbar.5cb91122d618026207b9bd8d62fca560.js", "js", "head", "");
                }
                catch (c) {
                    console.log(c);
                }
                sharethis.globals.pulldownbarNum = 1;
            }
        };
        this.initialize();
    };
    sharethis.utilities.loadfile = function (a, b, d, e) {
        var c;
        if (b == "js") {
            c = document.createElement("script");
            c.setAttribute("type", "text/javascript");
            c.setAttribute("src", a);
        }
        else {
            if (b == "css") {
                c = document.createElement("link");
                c.setAttribute("rel", "stylesheet");
                c.setAttribute("type", "text/css");
                c.setAttribute("href", a);
            }
        }
        if (e != "" && typeof (e) == "function") {
            c.onload = e;
            c.onreadystatechange = function () {
                if (c.readyState == "loaded" || c.readyState == "complete") {
                    e();
                }
            }
        }
        if (typeof c != "undefined") {
            if (d == "head") {
                document.getElementsByTagName("head")[0].appendChild(c);
            }
            else {
                document.getElementsByTagName("body")[0].appendChild(c);
            }
        }
    };
    sharethis.utilities.domUtilities = function () {
        return {
            addListenerCompatible : function (c, a, b) {
                if (typeof (c.addEventListener) != "undefined") {
                    c.addEventListener(a, b, false);
                    return true;
                }
                else {
                    if (typeof c.attachEvent != "undefined") {
                        c.attachEvent("on" + a, b);
                        return true;
                    }
                }
                return false;
            }
            , removeListenerCompatible : function (c, a, b) {
                if (typeof (c.removeEventListener) != "undefined") {
                    c.removeEventListener(a, b, false);
                    return true;
                }
                else {
                    if (typeof c.detachEvent != "undefined") {
                        c.detachEvent("on" + a, b);
                        return true;
                    }
                }
                return false;
            }
        }
    }
    ();
    sharethis.utilities.getInternetExplorerVersion = function () {
        var c =- 1;
        if (navigator.appName == "Microsoft Internet Explorer") {
            var a = navigator.userAgent;
            var b = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
            if (b.exec(a) != null) {
                c = parseFloat(RegExp.$1);
            }
        }
        return c;
    };
    sharethis.utilities.getOGTags = function (a) {
        var e = document.getElementsByTagName("meta");
        var d = {
        };
        var b = new Array();
        for (var c = 0; c < e.length; c++) {
            if (e[c].getAttribute("property") == "og:title") {
                b.push("og:title=" + encodeURIComponent(e[c].getAttribute("content")));
                if (a) {
                    d.ogtitle = e[c].getAttribute("content");
                }
            }
            else {
                if (e[c].getAttribute("property") == "og:description") {
                    b.push("og:description=" + encodeURIComponent(e[c].getAttribute("content")));
                    if (a) {
                        d.ogdescription = e[c].getAttribute("content");
                    }
                }
                else {
                    if (e[c].getAttribute("name") == "description" || e[c].getAttribute("name") == "Description") {
                        b.push("name:description=" + encodeURIComponent(e[c].getAttribute("content")));
                        if (a) {
                            d.ogaltdescription = e[c].getAttribute("content");
                        }
                    }
                    else {
                        if (e[c].getAttribute("name") == "keywords" || e[c].getAttribute("name") == "Keywords") {
                            b.push("name:keywords=" + encodeURIComponent(e[c].getAttribute("content")));
                            if (a) {
                                d.ogkeywords = e[c].getAttribute("content");
                            }
                        }
                        else {
                            if (e[c].getAttribute("property") == "og:type") {
                                if (a) {
                                    d.ogtype = e[c].getAttribute("content");
                                }
                            }
                            else {
                                if (e[c].getAttribute("property") == "og:url") {
                                    if (a) {
                                        d.ogurl = e[c].getAttribute("content");
                                    }
                                }
                                else {
                                    if (e[c].getAttribute("property") == "og:image") {
                                        if (a) {
                                            d.ogimg = e[c].getAttribute("content");
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (a) {
            return d;
        }
        else {
            return b.join("&");
        }
    };
    sharethis.utilities.prepareShareData = function (c) {
        var f = {
        };
        var e = sharethis.utilities.getOGTags(true);
        var b = e.ogurl ? e.ogurl : document.location.href;
        f.url = c.st_url ? c.st_url : b;
        var h = e.ogtitle ? e.ogtitle : document.title;
        f.title = c.st_title ? c.st_title : h;
        var g = e.ogimg ? e.ogimg : "";
        f.image = g;
        var a = e.ogdescription ? e.ogdescription : "";
        f.summary = e.ogaltdescription ? e.ogaltdescription : a;
        var d = e.ogtype ? e.ogtype : "";
        f.type = d;
        return f;
    };
    sharethis.utilities.initGA = function (b, d, a, c) {
        if ((/sharethis\.com/).test(document.domain) && stlib.cookie.getCookie("st_optout") !== false) {
            return;
        }
        if (typeof (_gat) == "undefined") {
            var e = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
            sharethis.utilities.loadfile(e + "google-analytics.com/ga.js", "js", "head", function () {
                sharethis.utilities.initGACallBack(b, d, a, c);
            }
            );
        }
        else {
            sharethis.utilities.initGACallBack(b, d, a, c);
        }
    };
    sharethis.utilities.initGACallBack = function (c, e, a, d) {
        try {
            sharethis.widgets.pageTracker = _gat._getTracker("UA-1645146-14");
            sharethis.utilities.gaLog(c, e, a, d);
        }
        catch (b) {
        }
    };
    sharethis.utilities.gaLog = function (b, d, a, c) {
        if ((/sharethis\.com/).test(document.domain) && stlib.cookie.getCookie("st_optout") !== false) {
            return;
        }
        if (typeof (sharethis.widgets.pageTracker) != "undefined" && sharethis.widgets.pageTracker != null) {
            sharethis.widgets.pageTracker._trackEvent(b, d, a, c);
        }
    }
};
