'use strict';
var ndjsStaticVersion = "sync-1"
  , nszgojl = {}
  , nsjxh = {};
function nsnucqn(a, b) {
    if (nsriokez.hasOwnProperty(a))
        for (var c in nsriokez[a])
            nsriokez[a].hasOwnProperty(c) && nsjxh.hasOwnProperty(c) && nsjxh[c] && (b[c] = nsjxh[c])
}
var nsvbgono, nsjxhj = -1, nsimxal = -1, nsimxale = {}, nsrio = {}, nsnucq = {}, nsriokez = {};
function nszgojlxcg(a) {
    if (nsrio.hasOwnProperty("pageModeConfig") && !0 === nsrio.pageModeConfig.enable) {
        var b = nsrio.pageModeConfig
          , c = {};
        b.hasOwnProperty("options") && (c = b.options,
        null !== a && nsujawy(a) && 0 < a.length && (c && !1 === c.hasOwnProperty("formbind") && (c.formbind = []),
        c.formbind = Array.prototype.concat.call(c.formbind, a)));
        a = nsxdlxtv("pmd");
        a = nsujawyprw(a);
        nsfhjeh(a, c)
    }
}
var nsriok = {}
  , nsimxalex = []
  , nsrwcbjvq = !1
  , nsnuc = "default"
  , nsbdynsyxa = null
  , nsbdyns = null
  , nds = window.ndsapi || (window.ndsapi = {})
  , nsriokezv = null
  , nsbdyn = null
  , ndsMlocTimeoutMs = 2E3
  , numQueries = 0
  , returned = [];
function base64ToBytes(a) {
    a = atob(a);
    return Uint8Array.from(a, function(b) {
        return b.codePointAt(0)
    })
}
var version = "null";
"{@VERSION@}" !== ndjsStaticVersion && (version = ndjsStaticVersion);
function nsghqzo() {
    return window.innerWidth ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body && document.body.clientHeight ? document.body.clientHeight : null
}
var ndsWidgetVersion = "2.5.3", nsvbgonog;
function nsujawyprw(a) {
    var b = {};
    b[nsimxalexn] = {};
    var c;
    for (c in a)
        if (a.hasOwnProperty(c)) {
            var e = a[c];
            "sid" === c && c in nsriokez.pmd || "wt" === c || "gzrq" === c ? b[c] = e : c in nsriokez.pmd && (b[nsimxalexn][c] = e)
        }
    nsriokez.hasOwnProperty("pmd") && "fmid"in nsriokez.pmd && (b.fmid = "nds-pmd");
    return b
}
function nsdchmf(a, b) {
    var c;
    if (nsujawy(a) || nsxdlxtvol(a))
        for (c = 0; c < a.length; c += 1)
            b(a[c], c, a);
    else if (nsujawypr(a)) {
        for (f in a)
            Object.prototype.hasOwnProperty.call(a, f) && b(a[f], f, a);
        var e = nsdchmf.ie8extraEnums;
        for (c = 0; c < e.length; c += 1) {
            var f = e[c];
            Object.prototype.hasOwnProperty.call(a, f) && b(a[f], f, a)
        }
    }
}
var nsrwcb = "NDSASESS"
  , nszgojlx = "3600"
  , nsimxa = "ndsi" + ndjsStaticVersion
  , nszgojlxc = "ndsid"
  , nsvbg = "nds-pmd"
  , nsimxalexn = "widgetData"
  , nsvbgon = [];
function nsxdlxtvol(a) {
    return null !== a && ("object" === typeof a || "function" === typeof a) && "number" === typeof a.length && "undefined" !== typeof a.item
}
var nsrwcbjv = {
    addCallback: function() {},
    callAllCallbacks: function() {}
}
  , nsrwc = function(a, b) {}
  , nsnucqnzag = function() {
    var a = new Date;
    return "ndsa" + Math.random().toString(36).substr(2, 16) + a.getTime().toString(36)
}
  , nsjxhjnb = function() {
    for (var a = 0, b = document.domain, c = b.split("."), e = "_temp" + (new Date).getTime(); a < c.length - 1 && -1 === document.cookie.indexOf(e + "\x3d" + e); )
        b = c.slice(-1 - ++a).join("."),
        document.cookie = e + "\x3d" + e + ";domain\x3d" + b + ";";
    document.cookie = e + "\x3d; expires\x3dThu, 01 Jan 1970 00:00:01 GMT; domain\x3d" + b + ";";
    return b
};
nsvbgo && (ndwts = function() {}
);
nds.load = function(a) {
    if (nsvbgo)
        nsuja(nds),
        nsuja(nds.common),
        nsuja(nds.common.util),
        nds.send = function(g) {
            "function" === typeof g && g()
        }
        ;
    else {
        var b = function(g) {
            var h = {}, m;
            g = g.split("\x26");
            var v = 0;
            for (m = g.length; v < m; v++) {
                var y = g[v].split("\x3d");
                h[y[0]] = decodeURIComponent(y[1])
            }
            return h
        }
          , c = a.split("?");
        nds.config.queryParams = 1 < c.length ? b(c[1]) : {};
        "undefined" === typeof nsvbgonog && (nsvbgonog = c = c[0].replace(/\/sync\/js\/?$/, ""));
        c = nsvbgonog;
        var e = function(g) {
            g = nsxdlxtv(g);
            for (var h in g)
                g.hasOwnProperty(h) && !g[h] && delete g[h];
            h = nsimx.stringify(g);
            h = nsvrqqge(h);
            return "q\x3d" + encodeURIComponent(h)
        }
          , f = function(g) {
            return (returned.length === p || -1 < returned.indexOf(!1)) && "function" === typeof g ? (g(),
            0 > returned.indexOf(!1) && (returned = []),
            !0) : !1
        };
        nds.getQueryArray = function(g) {
            var h = [];
            "string" === typeof g && "" !== g && (h = nsvrqqg(g));
            g = h.length;
            for (var m = [], v = 0; v < g; v++) {
                var y = nsvrqqge(h[v]);
                m.push(y)
            }
            return m
        }
        ;
        nds.config.sendTimeout = 5E3;
        nds.send = function(g) {
            nsxdlxt("precomplete");
            if (!0 === nsrio.eventModeEnabled) {
                returned = [];
                !1 === nsrwcbjvq && setTimeout(nds.init, 0);
                !0 === nsrio.ndsidConfig.enable && nsujaw();
                var h = nds.getQueryArray("c");
                p = h.length;
                for (var m = 0; m < p; m++)
                    (function() {
                        var v = "q\x3d" + encodeURIComponent(h[m])
                          , y = new Image
                          , q = null;
                        y.onerror = function() {
                            returned.push(!1);
                            !0 === f(g) && (g = null)
                        }
                        ;
                        y.onload = function() {
                            q && clearTimeout(q);
                            returned.push(!0);
                            !0 === f(g) && (g = null)
                        }
                        ;
                        nds.config.sendTimeout && (q = setTimeout(y.onerror, nds.config.sendTimeout));
                        y.src = c + "/complete/gif/?" + v
                    }
                    )()
            } else
                "function" === typeof g && g();
            nds.ndwtr()
        }
        ;
        nds.loadScript = function(g, h, m) {
            var v = document.getElementById(h);
            v && v.parentNode.removeChild(v);
            v = document.createElement("script");
            v.setAttribute("type", "text/javascript");
            v.setAttribute("src", g);
            v.setAttribute("id", h);
            nds.config.hasOwnProperty("cspNonce") && 0 < nds.config.cspNonce.length && v.setAttribute("nonce", nds.config.cspNonce);
            g = document.getElementsByTagName("script")[0];
            g.parentNode.insertBefore(v, g);
            "function" === typeof m && m(v)
        }
        ;
        nds.config.sessionId = null;
        nstjl(nds.config.q);
        null === nds.config.sessionId && ("undefined" !== typeof window.ndovStandaloneWidget ? nds.config.sessionId = nsfhjehg(nsrwcb) : !0 === nsrio.ndsidConfig.enable && (nsriokezv = nsfhjehg(nszgojlxc),
        nsfhje(nsriokezv)));
        nds.init = function() {
            nsrwcbjv.callAllCallbacks();
            if ("application/json" === nsnuc)
                try {
                    var g = null;
                    null != XMLHttpRequest && (g = new XMLHttpRequest);
                    !0 === nsrio.ndsidConfig.enable && nsujaw();
                    g.open("GET", c + "/init/js/?" + e("i"));
                    g.setRequestHeader("Cache-Control", "max-age\x3d0");
                    g.setRequestHeader("Content-Type", "application/json");
                    g.send();
                    g.onreadystatechange = function() {
                        if (4 === g.readyState && 200 === g.status)
                            try {
                                var h = JSON.parse(g.response);
                                ndwti(h)
                            } catch (m) {}
                    }
                } catch (h) {}
            else
                !0 === nsrio.ndsidConfig.enable && nsujaw(),
                nds.loadScript(c + "/init/js/?" + e("i"), nsimxa);
            nsrwcbjvq = !0;
            !0 === nsujawy(nds.config.initCallbackList) && nsdchmf(nds.config.initCallbackList, function(h) {
                h()
            })
        }
        ;
        nds.reinit = function(g, h, m) {
            null != g && nds.setPlacement(g);
            h && nds.setPlacementPage(h);
            m && (nszgojl.ipr.fm = m);
            nsghqzof();
            nsxdlxt("init");
            nszgojlxcg([]);
            nsimxalex && 0 !== nsimxalex.length ? l(nsimxalex) : !0 === nds.config.isLocationProcessingEnabled && null === nsbdyn ? setTimeout(function() {
                nds.init()
            }, ndsMlocTimeoutMs) : nds.init()
        }
        ;
        if (nsriokez.hasOwnProperty("id") && 0 < nstjlnis(nsriokez.id)) {
            returned = [];
            !0 === nsrio.ndsidConfig.enable && nsujaw();
            a = nsvrqqg("id");
            var n = null
              , p = a.length;
            for (b = 0; b < p; b++) {
                var C = nsvrqqge(a[b]);
                C = "rr\x3dsomething\x26q\x3d" + encodeURIComponent(C);
                var z = new Image;
                z.onerror = function() {
                    returned.push(!1);
                    !0 === f(cb) && (cb = null)
                }
                ;
                z.onload = function() {
                    n && clearTimeout(n);
                    returned.push(!0);
                    !0 === f(cb) && (cb = null)
                }
                ;
                nds.config.sendTimeout && (n = setTimeout(z.onerror, nds.config.sendTimeout));
                z.src = c + "/init/gif/?" + C
            }
        }
        var l = function(g) {
            nsrwcbjv.callAllCallbacks();
            nsrwcbjv = nds.common.createCallbackList();
            var h = -1;
            var m = nstjlnisi(g);
            for (g = 0; g < m.length; g++)
                try {
                    var v = m[g];
                    var y = nds.common.addEventListener(v, "focus", nds.init);
                    nsrwcbjv.addCallback(y);
                    h++
                } catch (q) {}
            -1 < h && nsghq(m, nds.init);
            -1 === h && (!0 === nds.config.isLocationProcessingEnabled && null === nsbdyn ? setTimeout(function() {
                nds.init()
            }, ndsMlocTimeoutMs) : nds.init())
        };
        null == nsimxalex || 0 === nsimxalex.length ? !0 === nds.config.isLocationProcessingEnabled && null === nsbdyn ? setTimeout(function() {
            nds.init()
        }, ndsMlocTimeoutMs) : nds.init() : l(nsimxalex)
    }
}
;
function HashUtil() {}
nds.getInputList = function() {
    return nsjxh
}
;
function nsghq(a, b) {
    var c = 10
      , e = setInterval(function() {
        for (var f = 0; f < a.length; f += 1)
            try {
                var n = a[f];
                if (n && n.value && n.value !== n.defaultValue) {
                    b();
                    clearInterval(e);
                    return
                }
            } catch (p) {}
        --c;
        1 > c && clearInterval(e)
    }, 250);
    nsrwcbjv.addCallback(function() {
        clearInterval(e)
    })
}
nds.sendOnEvent = function(a, b) {
    a = document.getElementById(a);
    nds.common.addEventListener(a, b, nds.send)
}
;
nds.sendOnSubmit = function() {
    for (var a = document.getElementsByTagName("form"), b = 0; b < a.length; ++b)
        nds.common.addEventListener(a[b], "submit", nds.send)
}
;
nds.registerListeners = function(a) {
    function b(c, e) {
        !1 === nsrwcbjvqd.hasOwnProperty(c) ? console.warn("Invalid event category used: '" + c + "'. Will be ignored.") : (null !== e && (!(e = parseInt(e)) || 0 >= e) && (console.warn("Invalid sampling rate used for event category: '" + c + "'. Default will be used."),
        e = null),
        !0 === nsbdynsyxa.hasOwnProperty(c) && console.warn("Duplicate event category encountered: '" + c + "'."),
        nsbdynsyxa[c] = e)
    }
    nsbdynsyxa = {};
    nsbdyns = null;
    !0 === nsujawy(a) ? nsdchmf(a, function(c, e) {
        !0 === nsujawypr(c) ? nsdchmf(c, function(f, n) {
            b(n, f)
        }) : b(c, null)
    }) : null !== a && void 0 !== a && console.warn("Invalid event category argument used. No categories will be enabled.");
    0 === Object.keys(nsbdynsyxa).length && (nsbdynsyxa[NDS_LISTEN_NONE] = null)
}
;
nds.resetListeners = function() {
    nsbdynsyxa = {};
    nsbdyns = nsbdynsyxa[NDS_LISTEN_ALL] = null
}
;
nds.getListeners = function() {
    null === nsbdynsyxa && nds.resetListeners();
    return nsbdynsyxa
}
;
nds.rebindListeners = function() {
    nsxdlxt("rebind")
}
;
HashUtil.ndovGrabFields = function(a) {
    return "ndovGrabFields not initialized in default mode"
}
;
nds.setInitTargets = function(a) {
    nsimxalex = a
}
;
nds.addInitCallback = function(a) {
    !1 === nsujawy(nds.config.initCallbackList) && (nds.config.initCallbackList = []);
    "function" === typeof a && -1 === nds.config.initCallbackList.indexOf(a) && nds.config.initCallbackList.push(a)
}
;
nds.removeAllInitCallbacks = function() {
    nds.config.initCallbackList = []
}
;
nds.setSessionId = function(a) {
    nds.config.sessionId = a
}
;
function nsdchmfko(a) {
    var b = ""
      , c = [41, 8, 49, 48, 51, 44, 63, 0, 19, 61, 43, 63, 57, 15, 34, 6, 42, 59, 41, 19, 10, 45, 54, 0, 44, 34, 57, 36, 48];
    if ("BNDX:" === a.substring(0, 5)) {
        a = a.substring(5);
        a = (new TextDecoder).decode(base64ToBytes(a));
        a = a.substring(4);
        var e = !0
    } else
        e = !1,
        b = "NDX:";
    for (var f = 0, n = 0; n < a.length; n += 1) {
        var p = a.charCodeAt(n) - 32;
        0 <= p && 94 > p && (e && 64 > p && (p ^= c[f % c.length]),
        p += 47 + (e ? -1 : 1) * f * 31,
        p = (p % 94 + 94) % 94,
        !e && 64 > p && (p ^= c[f % c.length]),
        f++);
        b += String.fromCharCode(p + 32)
    }
    return e ? b : "BNDX:" + bytesToBase64((new TextEncoder).encode(b))
}
nds.setSessionIdFromCookie = function(a) {
    try {
        nds.setSessionId(nsaqtyq(a))
    } catch (b) {
        nds.setSessionId(null)
    }
}
;
nds.setSessionIdFromSessionStorage = function(a) {
    try {
        nds.setSessionId(window.sessionStorage.getItem(a))
    } catch (b) {
        nds.setSessionId(null)
    }
}
;
function nsvrq() {
    return "abjdk8809bjasb"
}
nds.setSessionIdFromURL = function(a) {
    "undefined" !== typeof nds.config.queryParams && a in nds.config.queryParams ? (a = nds.config.queryParams[a],
    nds.setSessionId(a ? a : null)) : nds.setSessionId(null)
}
;
nds.setSessionIdFromDOM = function(a) {
    try {
        nds.setSessionId(document.getElementById(a).value)
    } catch (b) {
        nds.setSessionId(null)
    }
}
;
nds.setSessionIdFromJS = function(a) {
    if (a in window) {
        var b = a = window[a];
        "function" === typeof a && (b = a());
        nds.setSessionId(b ? b : null)
    } else
        nds.setSessionId(null)
}
;
function nsfhjeh(a, b) {
    if (0 < nstjlnis(a)) {
        var c = nsghqzofjg(b);
        0 === nstjlnis(c) && (c = document.getElementsByTagName("form"));
        a.hasOwnProperty("sid") && null == a.sid && (a.sid = "");
        a = nsimx.stringify(a);
        nsrio.hasOwnProperty("pageModeConfig") && !0 === nsrio.pageModeConfig.encodeData && (a = nsvrqqge(a));
        nsvrqq(c, nsvbg, a);
        nsdch(b)
    }
}
nds.setForceIP = function(a) {
    nds.config.forceIP = a
}
;
function nstjlni() {
    if (nsrio.hasOwnProperty("pageModeConfig") && !0 === nsrio.pageModeConfig.enable) {
        var a = nsrio.pageModeConfig;
        a.hasOwnProperty("inputFieldName") && 0 < a.inputFieldName.length && (nsvbg = a.inputFieldName);
        !0 === nsrio.ndsidConfig.enable && nsujaw();
        !1 === nsriokez.hasOwnProperty("pmd") && (nsriokez.pmd = {
            pmdModuleMissing: !0
        })
    }
}
function nsghqzof() {
    nds.config.hasOwnProperty("beforeInitQ") && nstjl(nds.config.beforeInitQ)
}
nds.setPlacement = function(a) {
    nds.config.placement = a
}
;
nds.setPlacementPage = function(a) {
    nds.config.placementPage = a
}
;
nds.setTimeout = function(a) {
    isNaN(a) ? nds.config.sendTimeout = null : nds.config.sendTimeout = +a
}
;
function nsdchmfk() {
    return !1
}
function nsujaw() {
    null == nds.config.sessionId && nds.setSessionIdFromCookie(nszgojlxc);
    null == nds.config.sessionId && nds.setSessionIdFromSessionStorage(nszgojlxc);
    null == nds.config.sessionId && null !== nsriokezv && (nds.setSessionId(nsriokezv),
    nsujawyp(nszgojlxc, nsriokezv))
}
function nsfhjehg(a) {
    if (null == nds.config.sessionId) {
        var b = nsaqtyq(a);
        if (null == b) {
            try {
                b = window.sessionStorage.getItem(a)
            } catch (c) {
                b = null
            }
            null == b && (b = nsfhj(a))
        }
        return b
    }
    return nds.config.sessionId
}
nds.setForceUA = function(a) {
    nds.config.forceUA = a
}
;
nds.setCspNonceForInit = function(a) {
    nds.config.cspNonce = a
}
;
nds.doNotTrack = function() {
    nds.config.doNotTrack = !0
}
;
function ndwts(a) {
    nsriokez = a.ml;
    nsrio = a.co;
    nszgojl = a.wmd;
    nsjxh = a.fd;
    nsvbgono = !0;
    nsnuc = a.wc;
    nsrio.initId && (nsimxa = nsrio.initId);
    nsghqzof();
    nsxdlxt("init");
    "undefined" != typeof nsrio.initBindings && nds.setInitTargets(nsrio.initBindings);
    "undefined" !== typeof nsrio.apiBaseUrl && nsrio.apiBaseUrl && nds.setApiBaseUrl(nsrio.apiBaseUrl);
    nstjlni();
    nszgojlxcg([])
}
nds.bindNewFields = function(a) {
    nsxdlxt("bind", a);
    nszgojlxcg([])
}
;
nds.setPageModeFields = function(a) {
    if (null !== a && nsujawy(a) && 0 < a.length) {
        for (var b = 0; b < nsvbgon.length; b++)
            nsvbgon[b].parentNode.removeChild(nsvbgon[b]);
        nsvbgon = [];
        nszgojlxcg(a)
    }
}
;
nds.clear = function() {
    nsxdlxt("clear")
}
;
nds.stop = function() {
    nsxdlxt("stop");
    nsrwcbjv.callAllCallbacks()
}
;
function nsfhje(a) {
    nsjxh.sid = a;
    if (!0 === nsrio.ndsidConfig.enable && null != a) {
        var b = nsrio.ndsidConfig.options.hasOwnProperty("formbind") && nsrio.ndsidConfig.options.formbind ? nstjlnisi(nsrio.ndsidConfig.options.formbind) : document.getElementsByTagName("form");
        nsvrqq(b, nszgojlxc, a)
    }
}
nds.ndwtr = function() {
    nsxdlxt("reinit")
}
;
nds.setFormFieldData = function(a, b) {
    nsjxh[a] = b
}
;
nds.setApiBaseUrl = function(a) {
    nsvbgonog = a
}
;
function nsghqz(a) {
    var b = Array(8)
      , c = 0 > a ? 1 : 0
      , e = function(n, p) {
        b[p] = n >>> 24;
        b[p + 1] = n >>> 16 & 255;
        b[p + 2] = n >>> 8 & 255;
        b[p + 3] = n & 255
    };
    a = Math.abs(a);
    if (0 === a)
        e(0, 4),
        e(0 < 1 / a ? 0 : 2147483648, 0);
    else if (isNaN(a))
        e(0, 4),
        e(2146959360, 0);
    else if (1.7976931348623157E308 < a)
        e(0, 4),
        e((c << 31 | 2146435072) >>> 0, 0);
    else if (2.2250738585072014E-308 > a)
        a /= 4.9E-324,
        e(a >>> 0, 4),
        e((c << 31 | a / 4294967296) >>> 0, 0);
    else {
        var f = Math.floor(Math.log(a) / Math.LN2);
        1024 === f && (f = 1023);
        a *= Math.pow(2, -f);
        e(4503599627370496 * a >>> 0, 4);
        e((c << 31 | f + 1023 << 20 | 1048576 * a & 1048575) >>> 0, 0)
    }
    c = !1;
    e = "";
    for (f = 0; 8 > f; f++)
        if (a = b[f],
        0 == a && c || 0 != a)
            a = a.toString(16),
            c && 2 > a.length && (a = "0" + a),
            c = !0,
            e += a;
    c || (e = "0");
    return e
}
nds.getApiBaseUrl = function() {
    return nsvbgonog
}
;
"undefined" == typeof nds && (nds = window.ndsapi || (window.ndsapi = {}));
nds.common = {};
nds.common.util = {};
nds.common.bi = {};
function nsxdl() {
    var a = "";
    if (window._phantom || window.callPhantom || window.__phantomas)
        a += "p";
    window.Buffer && (a += "n");
    window.emit && (a += "c");
    window.spawn && (a += "r");
    window.webdriver && (a += "s");
    if (window.domAutomation || window.domAutomationController)
        a += "b";
    return a
}
function nsxdlxtv(a) {
    var b = {
        r: Math.floor(1E6 * Math.random()) + 1E3,
        sid: nds.config.sessionId,
        p: nsxdl(),
        bd: nsaqty(),
        forceIP: nds.config.forceIP,
        dtrk: nds.config.doNotTrack,
        jsv: version,
        wt: "",
        wv: ndsWidgetVersion
    };
    nsrio.gzrq && (b.gzrq = 1);
    switch (a) {
    case "i":
        b.ls = {};
        try {
            var c = window.localStorage.getItem("ndcd");
            null != c && (b.ls.ndcd = c)
        } catch (e) {}
        break;
    case "c":
        nsjxh.hasOwnProperty("wt") && (b.wt = nsjxh.wt);
        break;
    case "pmd":
        nsjxh.hasOwnProperty("sid") && (b.sid = nsjxh.sid),
        nsrio.hasOwnProperty("pageModeConfig") && nsrio.pageModeConfig.hasOwnProperty("wt") && (b.wt = nsrio.pageModeConfig.wt)
    }
    nds.config.placement ? (b.wp = nds.config.placement,
    b.wpp = nds.config.placementPage) : b.href = window.location.href;
    nds.ndeb && (b.eb = nds.ndeb);
    nsnucqn(a, b);
    "undefined" === typeof window.ndovStandaloneWidget || "c" !== a && "pmd" !== a || (b.gf = HashUtil.ndovGrabFields(nsriok));
    return b
}
function ndwti(a) {
    nsjxhj = nsxdlxtvo();
    nsimxal = nsxdlxtvo();
    nsjxh.wt = a.fd.wt;
    nsrio.hasOwnProperty("pageModeConfig") && nsrio.pageModeConfig.hasOwnProperty("wt") && 0 === nsrio.pageModeConfig.wt.length && nsrio.pageModeConfig.hasOwnProperty("requireWidgetToken") && !0 === nsrio.pageModeConfig.requireWidgetToken && (nsrio.pageModeConfig.wt = nsjxh.wt,
    nszgojlxcg([]));
    nsriok = a.gf;
    if (null != a.wab) {
        var b = a.wab;
        b = nstjlnisi(b);
        for (var c in b) {
            var e = b[c];
            if (null != e) {
                var f = "FORM" === e.tagName ? "submit" : "click";
                nds.common.addEventListener(e, f, nds.send)
            }
        }
    }
    if (null != a.ls && (f = a.ls,
    e = ndoGetObjectKeys(f),
    b = nstjlnis(f),
    0 < b))
        for (c = 0; c < b; c++)
            window.localStorage.setItem(e[c], f[e[c]]);
    if (null != a.cwd) {
        if ("undefined" == typeof document.addEventListener)
            return null;
        a.cwd.websiteId = a.wi;
        var n = a.cwd;
        null != n.pr && null == n.cp && nds.config.placement && nds.config.placementPage && (a = nds.config.placement + "." + nds.config.placementPage,
        c = n.pr,
        c[a] && (n.cp = c[a],
        n.cp.placement = nds.config.placement,
        n.cp.page = nds.config.placementPage));
        if (null != n.cp)
            if (null != n.cp.bindmethod && "manual" == n.cp.bindmethod)
                nds.callApi = function(C) {
                    nsrwc(n, C)
                }
                ,
                nds.completeAndCallApi = function(C) {
                    nds.send(function() {
                        nds.callApi(C)
                    })
                }
                ;
            else
                for (b = null == n.cp.autobind ? document.getElementsByTagName("form") : nstjlnisi(n.cp.autobind),
                c = 0; c < b.length; c++)
                    if (e = b[c],
                    null != e) {
                        var p = (a = "function" === typeof e.onsubmit) ? e.onsubmit : function() {
                            return !0
                        }
                        ;
                        f = "FORM" === e.tagName ? "submit" : "click";
                        (function(C, z, l, g) {
                            var h = function(m) {
                                var v = m || window.event;
                                v.preventDefault ? v.preventDefault() : v.returnValue = !1;
                                nsrwc(n, function(y, q) {
                                    if (1 == l) {
                                        C.onsubmit = function() {}
                                        ;
                                        try {
                                            z(v)
                                        } catch (u) {}
                                    } else
                                        nds.common.removeEventListener(C, g, h);
                                    if (C.submit)
                                        try {
                                            C.submit()
                                        } catch (u) {
                                            C.constructor.prototype.submit.call(C)
                                        }
                                    else
                                        C.click()
                                })
                            };
                            !0 === l ? C.onsubmit = h(g) : nds.common.addEventListener(C, g, h)
                        }
                        )(e, p, a, f)
                    }
    }
    !0 === nsrio.ndsidConfig.enable && (a = nsaqtyq(nszgojlxc),
    null !== a && (nds.setSessionIdFromCookie(nszgojlxc),
    nsujawyp(nszgojlxc, a)),
    nsfhje(nsfhjehg(nszgojlxc)))
}
nds.common.querySelectorAll = function(a) {
    return document.querySelectorAll(a)
}
;
document.querySelectorAll || (nds.common.querySelectorAll = function(a) {
    return []
}
);
nds.common.addEventListener = function(a, b, c, e) {
    if ("object" === typeof e && !1 === e.hasOwnProperty(b))
        return null;
    try {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
    } catch (f) {}
    return function() {
        nds.common.removeEventListener(a, b, c)
    }
}
;
function bytesToBase64(a) {
    a = Array.from(a, function(b) {
        return String.fromCodePoint(b)
    }).join("");
    return btoa(a)
}
function nsxdlxtvo() {
    return parseInt((new Date).getTime() / 1E3, 10)
}
function nsdch(a) {
    nsvbgon = nstjlnisi([{
        type: "selector",
        value: 'input[name\x3d"' + nsvbg + '"]'
    }])
}
function nsuja(a) {
    for (var b in a)
        if (a.hasOwnProperty(b)) {
            var c = a[b];
            c && c.call && c.apply && (a[b] = function() {}
            )
        }
}
nds.common.removeEventListener = function(a, b, c) {
    try {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    } catch (e) {}
}
;
nds.common.createCallbackList = function() {
    var a = [];
    return {
        addCallback: function(b) {
            b && a.push(b)
        },
        callAllCallbacks: function() {
            for (var b = 0; b < a.length; b += 1)
                (0,
                a[b])();
            a = []
        }
    }
}
;
nds.common.util.truncTo = function(a, b, c) {
    c = "undefined" !== typeof c ? c : "TRUNC";
    if ("string" !== typeof a)
        return a;
    var e = b - c.length;
    return 1 > e ? a.substring(0, b) : a.length > e ? a.substring(0, e) + c : a
}
;
nds.common.util.quickHash = function(a) {
    var b = 0, c = 0, e;
    if (0 === a.length)
        return "00000000";
    var f = 0;
    for (e = a.length; f < e; f++) {
        var n = a.charCodeAt(f);
        0 === f % 2 ? (b = (b << 5) - b + n,
        b |= 0) : (c = (c << 5) - c + n,
        c |= 0)
    }
    0 > b && (b = 4294967295 + b + 1);
    0 > c && (c = 4294967295 + c + 1);
    return b.toString(16) + c.toString(16)
}
;
nds.common.bi.getScreenFingerprint = function() {
    var a = "";
    window.screen && (a += [window.screen.width, window.screen.height].sort().join("x"),
    a += " " + window.screen.colorDepth);
    return a
}
;
function nsvrqqge(a) {
    return !0 === nsrio.useNdx ? nsdchmfko(a) : nsfhjehgme(a)
}
nds.common.util.getComputedStyle = function(a, b) {
    if (document.defaultView && document.defaultView.getComputedStyle)
        return document.defaultView.getComputedStyle(a, null).getPropertyValue(b);
    try {
        if (a.currentStyle)
            return b = b.replace(/-(\w)/g, function(c, e) {
                return e.toUpperCase()
            }),
            a.currentStyle[b]
    } catch (c) {}
}
;
function nsghqzofjg(a) {
    var b = [];
    nsrio.hasOwnProperty("pageModeConfig") && 0 < nsrio.pageModeConfig.formbind.length && (b = Array.prototype.concat.call(b, nstjlnisi(nsrio.pageModeConfig.formbind)));
    a && a.hasOwnProperty("formbind") && a.formbind && (b = Array.prototype.concat.call(b, nstjlnisi(a.formbind)));
    return b
}
nds.common.bi.getScreenInfo = function() {
    var a = "";
    "undefined" !== typeof window.screen && ("undefined" !== typeof window.screen.width && "undefined" !== typeof window.screen.height && (a += window.screen.width + "x" + window.screen.height),
    "undefined" !== typeof window.screen.availWidth && "undefined" !== typeof window.screen.availHeight && (a += " " + window.screen.availWidth + "x" + window.screen.availHeight),
    "undefined" !== typeof window.screen.colorDepth && (a += " " + window.screen.colorDepth),
    "undefined" !== typeof window.screen.pixelDepth && (a += " " + window.screen.pixelDepth));
    return a
}
;
nds.common.bi.isFlashInstalled = function() {
    try {
        return new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
        !0
    } catch (a) {}
    try {
        if (void 0 != navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)
            return !0
    } catch (a) {}
    return !1
}
;
nds.common.bi.getDeviceLanguage = function() {
    return window.navigator.userLanguage || window.navigator.language || window.navigator.browserLanguage
}
;
function nsaqtyq(a, b) {
    return (b = document.cookie.match("(^|;)\\s*" + a + "\\s*\x3d\\s*([^;]+)")) ? b.pop() : null
}
function nsvrqq(a, b, c) {
    var e = nstjlnisi([{
        type: "selector",
        value: 'input[name\x3d"' + b + '"]'
    }]);
    if (0 < e.length)
        for (a = 0; a < e.length; a++)
            e[a].value = c;
    else if (0 < a.length)
        for (var f = 0; f < a.length; ++f)
            e = a[f].querySelector("input[name\x3d" + b + "]"),
            null === e && (e = document.createElement("input"),
            e.setAttribute("name", b),
            e.setAttribute("type", "hidden"),
            a[f].appendChild(e)),
            e.setAttribute("value", c)
}
nds.common.bi.getDeviceTimezone = function() {
    var a = (new Date(2014,0,2)).getTimezoneOffset()
      , b = (new Date(2014,5,2)).getTimezoneOffset();
    return Math.max(a, b)
}
;
nds.common.bi.getPlugins = function() {
    var a = []
      , b = /([0-9]+)\.[0-9|.]+/g;
    if (window.ActiveXObject) {
        if (document.plugins && 0 < document.plugins.length)
            for (var c = 0; c < document.plugins.length; c++)
                a.push(document.plugins[c].src.replace(b, "$1"))
    } else
        try {
            if (navigator.plugins && 0 < navigator.plugins.length)
                for (c = 0; c < navigator.plugins.length; c++)
                    a.push(navigator.plugins[c].name.replace(b, "$1"))
        } catch (e) {
            a.push("denied")
        }
    0 < a.length && a.sort();
    b = "p";
    for (c = 0; c < a.length; c++)
        b += "," + a[c];
    return b
}
;
function validateSessionIdCookie(a) {
    if ("string" !== typeof a)
        return !1;
    for (var b = ["\x3d", ":", "\r", "\n"], c = 0; c < b.length; c++)
        if (-1 !== a.indexOf(b[c]))
            return !1;
    return !0
}
nds.common.bi.getWebGLInfo = function() {
    for (var a = {}, b = document.createElement("canvas"), c = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"], e, f = 0; f < c.length; f++)
        try {
            if (e = b.getContext(c[f])) {
                a.ContextName = c[f];
                break
            }
        } catch (n) {}
    if (!(e && "getParameter"in e))
        return null;
    b = "VENDOR VERSION RENDERER SHADING_LANGUAGE_VERSION DEPTH_BITS MAX_VERTEX_ATTRIBS MAX_VERTEX_TEXTURE_IMAGE_UNITS MAX_VARYING_VECTORS MAX_VERTEX_UNIFORM_VECTORS MAX_COMBINED_TEXTURE_IMAGE_UNITS MAX_TEXTURE_SIZE MAX_CUBE_MAP_TEXTURE_SIZE NUM_COMPRESSED_TEXTURE_FORMATS MAX_RENDERBUFFER_SIZE MAX_VIEWPORT_DIMS ALIASED_LINE_WIDTH_RANGE ALIASED_POINT_SIZE_RANGE".split(" ");
    for (c = 0; c < b.length; c++)
        f = b[c],
        f in e && (a[f] = e.getParameter(e[f]));
    return a
}
;
nds.common.bi.getDeviceTouchSettings = function() {
    var a = {
        mtp: "NA"
    };
    "undefined" !== typeof navigator.maxTouchPoints ? a.mtp = navigator.maxTouchPoints : "undefined" !== typeof navigator.msMaxTouchPoints && (a.mtp = navigator.msMaxTouchPoints);
    a.ts = !1;
    "ontouchstart"in window && (a.ts = !0);
    a.te = !1;
    try {
        document.createEvent("TouchEvent"),
        a.te = !0
    } catch (b) {}
    return a
}
;
nds.common.bi.getCookiesEnabled = function(a) {
    var b = !0
      , c = "undefined" !== typeof navigator.cookieEnabled && navigator.cookieEnabled ? !0 : !1;
    if (1 == a)
        try {
            document.cookie = "ncookietest\x3d1; SameSite\x3dNone; Secure",
            b = -1 != document.cookie.indexOf("ncookietest\x3d"),
            document.cookie = "ncookietest\x3d1; expires\x3dThu, 01-Jan-1970 00:00:01 GMT; SameSite\x3dNone; Secure"
        } catch (e) {}
    return {
        tc: b,
        nc: c
    }
}
;
nds.common.bi.getHTML5CanvasSignature = function() {
    var a = "NA";
    try {
        var b = document.createElement("canvas");
        b.width = 200;
        b.height = 40;
        b.style.display = "inline";
        var c = b.getContext("2d");
        c.fillText("aBc#$efG~ \ude73\ud63d", 4, 10);
        c.fillStyle = "rgba(67, 92, 0, 0.5)";
        c.font = "18pt Arial";
        c.fillText("aBc#$~efG \ude73\ud63d", 8, 12);
        a = b.toDataURL()
    } catch (e) {}
    return a
}
;
nds.common.bi.getFontMetrics = function() {
    var a = [];
    try {
        for (var b = document.createElement("canvas").getContext("2d"), c = nds.common.bi.fontMetricsFontList, e = 0; e < c.length; e += 1) {
            b.font = '72px "' + c[e] + '"';
            var f = b.measureText("mmmmmmmmmmlli").width;
            a.push(f)
        }
    } catch (n) {}
    return a
}
;
nds.common.bi.getHTML5LocalStorage = function() {
    var a = !1;
    try {
        var b = window.localStorage;
        b.setItem("ndls", "ndls");
        b.removeItem("ndls");
        a = !0
    } catch (c) {}
    return a
}
;
function getEnabledEvents() {
    if (null !== nsbdyns)
        return nsbdyns;
    var a = nds.getListeners();
    nsbdyns = {};
    if (NDS_LISTEN_NONE in a)
        return nsbdyns;
    var b = a.hasOwnProperty(NDS_LISTEN_ALL), c;
    for (c in nsrwcbjvqd)
        if (b || a.hasOwnProperty(c))
            for (var e = !0 === b ? a[NDS_LISTEN_ALL] : a[c], f = nsrwcbjvqd[c], n = 0; n < f.length; n++)
                nsbdyns[f[n]] = e;
    return nsbdyns
}
function attachEventListener(a, b, c, e) {
    a = nds.common.addEventListener(a, b, c, getEnabledEvents());
    null !== a && e(a)
}
nds.common.bi.getHTML5SupportedVideo = function() {
    var a = "fv";
    try {
        var b = document.createElement("video")
          , c = ["ogg", "mp4", "webm"];
        if ("undefined" !== typeof b)
            for (var e in c)
                c.hasOwnProperty(e) && "" != b.canPlayType("video/" + c[e]) && (a += "," + c[e])
    } catch (f) {}
    return a
}
;
nds.common.bi.getHTML5SupportedAudio = function() {
    var a = "fa";
    try {
        var b = document.createElement("audio")
          , c = ["mpeg", "ogg", "wav"];
        if ("undefined" !== typeof b)
            for (var e in c)
                c.hasOwnProperty(e) && "" != b.canPlayType("audio/" + c[e]) && (a += "," + c[e])
    } catch (f) {}
    return a
}
;
nds.common.bi.getPlatform = function() {
    var a = "NA";
    try {
        a = navigator.platform
    } catch (b) {}
    return a
}
;
nds.common.bi.getVendor = function() {
    var a = "NA";
    try {
        a = navigator.vendor
    } catch (b) {}
    return a
}
;
nds.common.bi.fontMetricsFontList = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";");
var nsimx;
nsimx || (nsimx = {});
Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
    var c = this.length >>> 0;
    b = Number(b) || 0;
    b = 0 > b ? Math.ceil(b) : Math.floor(b);
    for (0 > b && (b += c); b < c; b++)
        if (b in this && this[b] === a)
            return b;
    return -1
}
);
function nstjl(a) {
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        "function" === typeof c && c()
    }
}
function nstjlnis(a) {
    var b = 0;
    if (a instanceof Array)
        b = a.length;
    else
        for (var c in a)
            a.hasOwnProperty(c) && b++;
    return b
}
var nsbdynsyx = "ic"
  , NDS_LISTEN_FOCUS = "fc"
  , NDS_LISTEN_TOUCH = "to"
  , NDS_LISTEN_KEYBOARD = "kb"
  , NDS_LISTEN_DEVICE_MOTION_SENSORS = "dm"
  , NDS_LISTEN_MOUSE = "mo"
  , NDS_LISTEN_FORM = "fr"
  , NDS_LISTEN_PASTE = "pe"
  , NDS_LISTEN_ALL = "de"
  , NDS_LISTEN_NONE = "no"
  , nsnucqnz = "focus";
function nsaqtyqka() {
    return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body && document.body.clientWidth ? document.body.clientWidth : null
}
function nsxdlx(a, b) {
    if ("string" === typeof b) {
        var c = b;
        b = function(f) {
            return f[c]
        }
    }
    var e = nsujawy(a) ? [] : nsujawypr(a) ? {} : void 0;
    nsdchmf(a, function(f, n) {
        e[n] = b(f, n, a)
    });
    return e
}
function nsvrqqg(a) {
    a = nsxdlxtv(a);
    var b = [], c = 0, e = {
        r: a.r,
        sid: a.sid,
        wt: a.wt
    }, f;
    for (f in a)
        if (a.hasOwnProperty(f))
            if (a[f]) {
                var n = a[f]
                  , p = f.length + n.toString().length;
                2E3 < p ? (p = {
                    r: a.r,
                    sid: a.sid,
                    wt: a.wt
                },
                p[f] = n,
                b.push(nsimx.stringify(p))) : 2E3 < p + c ? (b.push(nsimx.stringify(e)),
                e = {
                    r: a.r,
                    sid: a.sid,
                    wt: a.wt
                },
                e[f] = n,
                c = p) : (e[f] = n,
                c += p)
            } else
                delete a[f];
    0 < c && b.push(nsimx.stringify(e));
    return b
}
function nsujawy(a) {
    return "[object Array]" === Object.prototype.toString.apply(a)
}
var nsrioke = "blur"
  , nszgoj = "touchstart"
  , nsjxhjnbfp = "keydown"
  , nsnucqnza = "keyup"
  , nsjxhjn = "devicemotion"
  , nsriokezvq = "deviceorientation"
  , nsbdy = "mousemove"
  , nsjxhjnbf = "click";
function nsfhjehgme(a) {
    return a.replace(/[A-Za-z]/g, function(b) {
        return String.fromCharCode(b.charCodeAt(0) + ("M" >= b.toUpperCase() ? 13 : -13))
    })
}
var nszgo = "submit";
function nsfhj(a) {
    var b = nsnucqnzag();
    if (!1 === validateSessionIdCookie(b))
        return null;
    if ("undefined" !== typeof window.ndovStandaloneWidget || !0 === nsrio.clientSideCookie) {
        var c = "object" === typeof nsrio.ndsidConfig && "boolean" === typeof nsrio.ndsidConfig.secure ? nsrio.ndsidConfig.secure : !1;
        if (null === nsaqtyq(a)) {
            var e = a + "\x3d" + b + ";max-age\x3d" + nszgojlx + "; domain\x3d ." + nsjxhjnb() + " ; path\x3d/";
            !0 === c && (e += "; secure; SameSite\x3dNone");
            document.cookie = e
        }
        null === nsaqtyq(a) && nsujawyp(a, b)
    }
    return b
}
var nsbdynsy = "change"
  , nsvbgonogp = "input";
function nsdchm(a) {
    for (var b = [], c = 0; c < a.length; c++)
        -1 === b.indexOf(a[c]) && b.push(a[c]);
    return b
}
var nsrwcbj = "paste"
  , nsrwcbjvqd = {};
nsrwcbjvqd[NDS_LISTEN_FOCUS] = [nsnucqnz, nsrioke];
nsrwcbjvqd[NDS_LISTEN_TOUCH] = [nszgoj];
nsrwcbjvqd[NDS_LISTEN_KEYBOARD] = [nsjxhjnbfp, nsnucqnza];
nsrwcbjvqd[NDS_LISTEN_DEVICE_MOTION_SENSORS] = [nsjxhjn, nsriokezvq];
nsrwcbjvqd[NDS_LISTEN_MOUSE] = [nsbdy, nsjxhjnbf];
nsrwcbjvqd[NDS_LISTEN_FORM] = [nszgo, nsbdynsy, nsvbgonogp];
nsrwcbjvqd[NDS_LISTEN_PASTE] = [nsrwcbj];
function nstjlnisi(a) {
    var b = [], c;
    for (c in a)
        if (a.hasOwnProperty(c)) {
            var e = a[c];
            if ("string" === typeof e && document.getElementById(e))
                b.push(document.getElementById(e));
            else if (e.hasOwnProperty("type") && e.hasOwnProperty("value"))
                switch (e.type) {
                case "selector":
                    var f = [];
                    try {
                        f = nds.common.querySelectorAll(e.value)
                    } catch (n) {}
                    if (0 < f.length)
                        for (e.hasOwnProperty("index") && (f = [f[e.index]]),
                        e = 0; e < f.length; e += 1)
                            f[e] && b.push(f[e])
                }
        }
    return b
}
var ndoIsKeyIncluded = function(a, b, c) {
    return -1 !== b.indexOf(a.key) || -1 !== c.indexOf(a.keyCode) ? !0 : !1
}
  , ndoIsModifierKey = function(a) {
    return ndoIsKeyIncluded(a, ["Shift", "Control", "Meta", "Alt", "CapsLock"], [16, 17, 91, 93, 18, 20])
};
function nsaqt(a, b, c) {
    nsdchmf(a, function(e, f) {
        c = b(c, e, f, a)
    });
    return c
}
var ndoIsNavigationKey = function(a) {
    return ndoIsKeyIncluded(a, "Tab PageUp PageDown End Home ArrowLeft Left ArrowUp Up ArrowRight Right ArrowDown Down".split(" "), [9, 33, 34, 35, 36, 37, 38, 39, 40])
}
  , ndoIsEditingKey = function(a) {
    return ndoIsKeyIncluded(a, ["Insert", "Delete", "Backspace", "Del"], [45, 46, 8])
};
function nsujawypr(a) {
    return "object" === typeof a && null !== a && !nsujawy(a)
}
var KEYBOARD_LOCATION = {
    STANDARD: 0,
    LEFT: 1,
    RIGHT: 2,
    NUMPAD: 3
};
function nsaqty() {
    return nsaqtyqka() + ":" + nsghqzo() + ":" + window.outerWidth + ":" + window.outerHeight + ":" + screen.availWidth + ":" + screen.availHeight
}
function nsujawyp(a, b) {
    try {
        window.sessionStorage.setItem(a, b)
    } catch (c) {}
}
var KEY_TYPE_AND_LOCATION = {
    NORMAL_STANDARD: 0,
    MODIFIER_STANDARD: 4,
    NAVIGATION_STANDARD: 8,
    EDITING_STANDARD: 12
}
  , ndoGetKeyboardLocation = function(a) {
    a = a.location;
    var b = Object.keys(KEYBOARD_LOCATION).map(function(c) {
        return KEYBOARD_LOCATION[c]
    });
    return "undefined" === typeof a || -1 === b.indexOf(a) ? KEYBOARD_LOCATION.STANDARD : a
}
  , ndoGetKeyTypeAndLocationIndicator = function(a) {
    var b = ndoGetKeyboardLocation(a);
    return !0 === ndoIsModifierKey(a) ? KEY_TYPE_AND_LOCATION.MODIFIER_STANDARD + b : !0 === ndoIsNavigationKey(a) ? KEY_TYPE_AND_LOCATION.NAVIGATION_STANDARD + b : !0 === ndoIsEditingKey(a) ? KEY_TYPE_AND_LOCATION.EDITING_STANDARD + b : KEY_TYPE_AND_LOCATION.NORMAL_STANDARD + b
};
nsdchmf.ie8extraEnums = function() {
    return {
        toString: null
    }.propertyIsEnumerable("toString") ? [] : "toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" ")
}();
var ndoGetObjectKeys = function() {
    var a = Object.prototype.hasOwnProperty
      , b = !{
        toString: null
    }.propertyIsEnumerable("toString")
      , c = "toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" ")
      , e = c.length;
    return function(f) {
        if ("object" !== typeof f && ("function" !== typeof f || null === f))
            throw new TypeError("ndoGetObjectKeys called on non-object");
        var n = [], p;
        for (p in f)
            a.call(f, p) && n.push(p);
        if (b)
            for (p = 0; p < e; p++)
                a.call(f, c[p]) && n.push(c[p]);
        return n
    }
}()
  , nsvbgo = !1;
document.querySelector || (nsvbgo = !0);
(function() {
    function a(r) {
        p.setFormFieldData("mloc", r);
        if (0 < nsvbgon.length && nsvbgon[0].value) {
            var A = nsvbgon[0].value
              , E = r = ""
              , G = nsrio.hasOwnProperty("pageModeConfig") && !0 === nsrio.pageModeConfig.encodeData;
            G && (A = nsvrqqge(A));
            try {
                for (E = nsimx.parse(A),
                E[nsimxalexn] || (E[nsimxalexn] = {}),
                nsriokez.pmd.hasOwnProperty("mloc") && nsjxh.hasOwnProperty("mloc") && (E[nsimxalexn].mloc = nsjxh.mloc),
                r = nsimx.stringify(E),
                G && (r = nsvrqqge(r)),
                A = 0; A < nsvbgon.length; A++)
                    nsvbgon[A].value = r
            } catch (F) {}
        }
    }
    function b(r) {
        C = null;
        z = r.message;
        r.code === q ? l.push(B.LOCATION_PERMISSIONS_NOT_GRANTED) : r.code === u ? l.push(B.LOCATION_API_NULL) : l.push(B.LOCATION_API_FAILED);
        nsbdyn = f();
        a(nsbdyn)
    }
    function c(r) {
        "undefined" !== typeof navigator && "undefined" !== typeof navigator.geolocation ? navigator.geolocation.getCurrentPosition(e, b, r) : n()
    }
    function e(r) {
        if (!0 === (0 !== r.coords.longitude && 0 !== r.coords.latitude)) {
            C = r;
            z = null;
            var A = C;
            r = [];
            r[x.LATITUDE] = A.coords.latitude;
            r[x.LONGITUDE] = A.coords.longitude;
            r[x.TIMESTAMP] = A.timestamp;
            null === A.coords.altitude || isNaN(A.coords.altitude) || (r[x.ALTITUDE] = A.coords.altitude);
            null === A.coords.accuracy || isNaN(A.coords.accuracy) || (r[x.HORIZONTAL_ACCURACY] = A.coords.accuracy);
            null === A.coords.altitudeAccuracy || isNaN(A.coords.altitudeAccuracy) || (r[x.VERTICAL_ACCURACY] = A.coords.altitudeAccuracy);
            null === A.coords.heading || isNaN(A.coords.heading) || (r[x.BEARING] = A.coords.heading);
            null === A.coords.speed || isNaN(A.coords.speed) || (r[x.SPEED] = A.coords.speed);
            if (null === r || 0 === Object.keys(r).length)
                nsbdyn = "";
            else {
                var E = A = "", G;
                for (G in r) {
                    var F = nsghqz(r[G]);
                    A = A.concat(G);
                    E = E.concat(".").concat(F)
                }
                nsbdyn = A.concat(E)
            }
        } else
            l.push(B.LOCATION_API_FAILED),
            nsbdyn = f();
        a(nsbdyn)
    }
    function f() {
        var r = "r", A = 0, E;
        for (E in l)
            A |= 1 << l[E];
        l = [];
        A = A.toString(16);
        r = r.concat(A);
        "undefined" !== typeof z && null !== z && (A = btoa(z),
        r = r.concat(".").concat(A));
        return r
    }
    function n() {
        l.push(B.DEVICE_LOCATION_DISABLED);
        C = null;
        z = "Geolocation is not supported by this browser";
        nsbdyn = f();
        a(nsbdyn)
    }
    var p = window.ndsapi || (window.ndsapi = {}), C, z, l = [], g = !1, h = 0, m = 0, v = {
        timeout: 1800
    }, y = {
        enableHighAccuracy: !0,
        timeout: 4E3,
        maximumAge: 0
    }, q = 1, u = 2, x = {
        ALTITUDE: "a",
        BEARING: "b",
        BEARING_ACCURACY: "c",
        SPEED_ACCURACY: "e",
        HORIZONTAL_ACCURACY: "h",
        LATITUDE: "i",
        LONGITUDE: "n",
        SPEED: "s",
        TIMESTAMP: "t",
        VERTICAL_ACCURACY: "v"
    }, B = {
        DEVICE_LOCATION_DISABLED: 0,
        GOOGLE_PLAY_SERVICES_NOT_AVAILABLE: 1,
        LOCATION_PERMISSIONS_NOT_IN_MANIFEST: 2,
        LOCATION_PERMISSIONS_NOT_GRANTED: 3,
        LOCATION_API_NULL: 4,
        LOCATION_API_FAILED: 5
    };
    nsghqzofj("dl", {
        init: function(r) {
            !0 === p.config.isLocationProcessingEnabled && null !== nsbdyn && a(nsbdyn)
        },
        stop: function(r) {
            p.config.isLocationProcessingEnabled = !1;
            p.disableLocationProcessing()
        }
    });
    p.enableLocationProcessing = function(r) {
        p.config.isLocationProcessingEnabled = !0;
        !1 === isNaN(r) && "number" === typeof r && +r === parseInt(r) ? p.config.refreshInterval = Math.abs(r) : p.config.refreshInterval = 0;
        !1 === g && (g = p.config.isLocationProcessingEnabled,
        0 <= p.config.refreshInterval && (h = p.config.refreshInterval),
        c(v),
        0 < h ? (y.maximumAge = 1E3 * h,
        y.timeout = Infinity,
        "undefined" !== typeof navigator && "undefined" !== typeof navigator.geolocation ? m = navigator.geolocation.watchPosition(e, b, y) : n()) : (y.maximumAge = Infinity,
        c(y)))
    }
    ;
    p.disableLocationProcessing = function() {
        p.config.isLocationProcessingEnabled = !1;
        p.config.refreshInterval = 0;
        g = p.config.isLocationProcessingEnabled;
        0 !== m && (navigator.geolocation.clearWatch(m),
        m = 0)
    }
}
)();
(function() {
    function a(d) {
        for (var k = 0; k < d.length; k++)
            if (0 !== d[k])
                return !0;
        return !1
    }
    function b() {
        null !== T && (clearInterval(T),
        T = 0);
        null !== K && "undefined" !== typeof qa[K + 1] && (K++,
        T = setInterval(B, qa[K]),
        Z.addCallback(function() {
            clearInterval(T)
        }),
        !1 === R ? (U = 1,
        R = {
            pos: aa,
            time: h()
        }) : U = 0)
    }
    function c(d, k, t) {
        k -= S;
        1 < ra && (k = Math.round(k / ra));
        d = d + "," + k.toString(16);
        if (null != t && 0 < t.length) {
            d += ",";
            k = [];
            for (var w = 0; w < t.length; w++)
                "number" === typeof t[w] ? k.push(Math.round(t[w]).toString(16)) : null != t[w] && k.push(t[w].toString());
            t = k.join(",");
            d += t
        }
        return d
    }
    function e(d, k, t) {
        attachEventListener(d, k, t, Z.addCallback)
    }
    function f(d) {
        Fa = d;
        M && (d = window.ndsapi || (window.ndsapi = {}),
        ba += M,
        ca = m(ba),
        !0 === G && r(!1),
        M = "",
        0 < ca.length ? d.setFormFieldData("ipr", ca) : d.setFormFieldData("ipr", ba))
    }
    function n(d) {
        d || (d = window.event);
        var k = null;
        d.target ? k = d.target : d.srcElement && (k = d.srcElement);
        3 == k.nodeType && (k = k.parentNode);
        if (d.keyCode)
            var t = d.keyCode;
        else
            d.which && (t = d.which);
        var w = !1;
        d.which ? w = 3 == d.which : d.button && (w = 2 == d.button);
        var D = q(d)
          , H = {};
        H[V] = d;
        H[J] = k;
        H[Pa] = w;
        H[Qa] = t;
        H[sa] = D.x;
        H[ta] = D.y;
        return H
    }
    function p(d, k, t) {
        d = Math.round(d * Math.pow(10, k));
        if ("undefined" === typeof t || !0 === t)
            d /= Math.pow(10, k);
        return d
    }
    function C(d, k) {
        var t = da[d]
          , w = Date.now();
        return w - t > k ? (da[d] = w,
        !0) : !1
    }
    function z(d, k) {
        var t, w = [];
        if (null === d || "undefined" === typeof d || 0 === d.length)
            w = document.documentElement.getElementsByTagName("input");
        else if (("object" === typeof d || "function" === typeof d) && "number" === typeof d.length) {
            for (t = 0; t < d.length; t++) {
                var D = d[t];
                "string" === typeof D ? (D = document.getElementById(D),
                "undefined" !== typeof D && null !== D && w.push(D)) : "object" === typeof D && null !== D && w.push(D)
            }
            null !== F && (w = w.concat(F))
        }
        d = [];
        for (t = 0; t < w.length; t++)
            D = w[t],
            D.type && D.type.match(I) && (k || 0 !== D.offsetWidth || 0 !== D.offsetHeight) && (d.push(D),
            e(D, nsjxhjnbfp, Ra),
            e(D, nsnucqnza, Sa),
            e(D, nsnucqnz, Ta),
            e(D, nsrioke, Ua),
            e(D, nsrwcbj, Va));
        F = nsdchm(d);
        e(document, nsjxhjnbf, Wa);
        e(document, nszgoj, Xa);
        e(document, nsbdy, Ya);
        e(window, nsjxhjn, Za);
        e(window, nsriokezvq, $a)
    }
    function l() {
        ca = ba = M = "";
        S = null;
        ea = "";
        ua = h();
        va && (g(wa, []),
        va = !1)
    }
    function g(d, k) {
        var t = h();
        if (null == S) {
            xa = S = Ga = t;
            var w = [nsxdlxtvo(), ab, ra];
            M = M + c("ncip", t, w) + ";";
            S = t
        }
        M = M + c(d, t, k) + ";";
        S = t;
        15E3 <= t - xa && (M = M + c("ts", t, [t - Ga]) + ";",
        xa = S = t);
        switch (d) {
        case Ha:
        case Ia:
        case bb:
        case wa:
        case ya:
            f(t);
            break;
        default:
            2E3 < t - Fa && f(t)
        }
    }
    function h() {
        return parseInt((new Date).getTime(), 10)
    }
    function m(d) {
        var k = h()
          , t = c(Ja, k, [ba.length]);
        if (0 === ia || d.length + t.length <= ia)
            return "";
        d = d.substring(0, ia - t.length);
        var w = d.lastIndexOf(";");
        if (0 > w)
            return "";
        S = k;
        return d.substring(0, w + 1) + t + ";"
    }
    function v(d) {
        var k = d.key;
        return "undefined" !== typeof k && "Unidentified" !== k && null !== k ? k : 229 !== d.keyCode ? String.fromCharCode(d.keyCode) : "NOP"
    }
    function y() {
        var d = [];
        for (var k = 0; k < F.length; k++) {
            var t = F[k];
            t.type && t.type.match(I) && (d.push(t.id),
            d.push(t.value.length))
        }
        d = d.join(",");
        g(db, [d])
    }
    function q(d) {
        var k = 0
          , t = 0;
        if (d.pageX || d.pageY)
            k = d.pageX,
            t = d.pageY;
        else if (d.clientX || d.clientY)
            k = d.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
            t = d.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        return {
            x: k,
            y: t
        }
    }
    function u() {
        var d = h();
        var k = "";
        var t = nds.getListeners(), w;
        for (w in t)
            k += w + (t[w] || "");
        t = Math.floor((d - ua) / 1E3);
        ea = 0 < ma && ea.length > ma ? t.toString(16) + "," + Ja + ";0," + k + ";" : ea + (t.toString(16) + "," + k + ";");
        ua = d;
        nds.setFormFieldData(nsbdynsyx, ea);
        r(!1)
    }
    function x(d) {
        if (!(J in d))
            return null;
        "string" === typeof d[J].id && "" !== d[J].id ? d = d[J].id : "string" === typeof d[J].name && "" !== d[J].name ? d = d[J].name : (d = Array.prototype.slice.call(F).indexOf(d[J]),
        d = 0 <= d ? "ndiprinput" + d : "");
        return d
    }
    function B() {
        var d = h();
        if (!1 !== R) {
            var k = Math.abs(aa.x - R.pos.x) * ja
              , t = Math.abs(aa.y - R.pos.y) * L
              , w = (d - R.time) / 1E3
              , D = p(k / w, 4, !0)
              , H = p(t / w, 4, !0);
            t = Math.sqrt(Math.pow(k, 2) + Math.pow(t, 2));
            k = p(t / w, 4, !0);
            (null === ka || k < ka) && 0 !== k && (N = [D, H],
            ka = k);
            (null === la || k > la) && 0 !== k && (O = [D, H],
            la = k);
            W += k;
            X += t;
            null !== na && (w = (k - na) / w,
            (null === P || w < P) && 0 !== w && (P = w),
            (null === Q || w > Q) && 0 !== w && (Q = w),
            fa += w);
            na = k
        }
        0 !== U && 0 === U % ha[K] && (w = 0 === oa ? 0 : d - oa,
        W = p(W / ha[K], 4, !1),
        X = p(X, 4, !1),
        D = 0,
        0 === w && (D = -1),
        fa = p(fa / (ha[K] + D), 4, !1),
        null === N && null === O && 0 === W && 0 === X ? g(ya, [w, ha[K], "NOP"]) : (N[0] = p(N[0], 4, !1).toString(16),
        N[1] = p(N[1], 4, !1).toString(16),
        O[0] = p(O[0], 4, !1).toString(16),
        O[1] = p(O[1], 4, !1).toString(16),
        P = null !== P ? p(P, 4, !1) : 0,
        Q = null !== Q ? p(Q, 4, !1) : 0,
        g(ya, [w, ha[K], N[0] + " " + N[1], O[0] + " " + O[1], W, X, P, Q, fa])),
        la = O = ka = N = null,
        X = W = 0,
        Q = P = null,
        fa = 0,
        oa = d);
        R = {
            pos: aa,
            time: d
        };
        U >= Ka[K] && b();
        U++
    }
    function r(d) {
        if (0 < nsvbgon.length && nsvbgon[0].value) {
            var k = nsvbgon[0].value
              , t = ""
              , w = ""
              , D = ""
              , H = "";
            nsrio.hasOwnProperty("pageModeConfig") && !0 === nsrio.pageModeConfig.encodeData && (k = nsvrqqge(k));
            try {
                w = nsimx.parse(k);
                w[nsimxalexn] || (w[nsimxalexn] = {});
                var za = 0 < ca.length ? ca : ba.toString()
                  , La = w[nsimxalexn].hasOwnProperty("ipr") ? w[nsimxalexn].ipr : "";
                k = ea;
                !0 === d && (za.length !== La.length && (za = La),
                w[nsimxalexn].hasOwnProperty(nsbdynsyx) && k.length !== w[nsimxalexn][nsbdynsyx].length && (k = w[nsimxalexn][nsbdynsyx]));
                var Aa = {
                    ipr: za,
                    forceIP: nds.config.forceIP,
                    wp: nds.config.placement,
                    wpp: nds.config.placementPage,
                    dtrk: nds.config.doNotTrack
                };
                Aa[nsbdynsyx] = k;
                "sid"in nsriokez.pmd && null != nds.config.sessionId && 0 < nds.config.sessionId.length && (w.sid = nds.config.sessionId);
                for (var Ma in nsriokez.pmd)
                    nsriokez.pmd.hasOwnProperty(Ma) && (D = Ma,
                    H = w[nsimxalexn].hasOwnProperty(D) ? w[nsimxalexn][D] : "",
                    Aa.hasOwnProperty(D) ? H = Aa[D] : nsjxh.hasOwnProperty(D) && (H = nsjxh[D]),
                    w[nsimxalexn][D] = H);
                t = nsimx.stringify(w);
                nsrio.hasOwnProperty("pageModeConfig") && !0 === nsrio.pageModeConfig.encodeData && (t = nsvrqqge(t));
                for (d = 0; d < nsvbgon.length; d++)
                    nsvbgon[d].value = t
            } catch (jb) {}
        }
    }
    var A = 0
      , E = !1
      , G = !0
      , F = null
      , I = /^(text|password|email|url|search|tel)$/i
      , L = 1 / window.screen.height
      , ja = 1 / window.screen.width
      , Z = {
        addCallback: function() {},
        callAllCallbacks: function() {}
    }
      , va = !1
      , pa = 0
      , Y = {}
      , ia = 0
      , ma = 25;
    nsghqzofj("ipr", {
        init: function(d) {
            var k = window.ndsapi || (window.ndsapi = {})
              , t = d.hasOwnProperty("fm") ? d.fm : null;
            E = d.hasOwnProperty("bh") ? d.bh : !1;
            ia = d.hasOwnProperty("tl") ? d.tl : ia;
            ma = d.il || ma;
            A = 0;
            F = null;
            L = 1 / window.screen.height;
            ja = 1 / window.screen.width;
            G = !0;
            pa = 0;
            Y = {};
            Z.callAllCallbacks();
            Z = nds.common.createCallbackList();
            T = aa = null;
            R = K = !1;
            U = 0;
            qa = [100, 200, 2E3];
            Ka = [100, 300, 150];
            ha = [10, 50, 30];
            oa = 0;
            la = O = ka = N = null;
            X = W = 0;
            Q = P = na = null;
            fa = 0;
            z(t, E);
            k.setFormFieldData("ipr", "");
            k.setFormFieldData(nsbdynsyx, "");
            l();
            y();
            (d = document.activeElement) && -1 < F.indexOf(d) && (k = {},
            k[J] = d,
            g(Na, [x(k)]));
            u()
        },
        reinit: function() {
            r(!0);
            !0 === nsrio.eventModeEnabled && (G = !1);
            l()
        },
        bind: function(d, k) {
            z(k, E);
            y()
        },
        rebind: function(d, k) {
            Z.callAllCallbacks();
            z(k, E);
            y();
            u()
        },
        clear: l,
        stop: function() {
            Z.callAllCallbacks();
            g(wa, []);
            va = !0
        }
    });
    var V = "a"
      , J = "b"
      , Pa = "c"
      , Qa = "d"
      , sa = "e"
      , ta = "f"
      , Ra = function(d) {
        n(d);
        var k = ndoGetKeyTypeAndLocationIndicator(d);
        d = v(d);
        "NOP" === d ? d = "N" : (!1 === Y.hasOwnProperty(d) && (Y[d] = pa++),
        d = Y[d]);
        d = [d];
        0 !== k && d.push(k);
        g(eb, d)
    }
      , Sa = function(d) {
        n(d);
        d = v(d);
        if ("NOP" !== d)
            if (!0 === Y.hasOwnProperty(d)) {
                var k = Y[d];
                delete Y[d];
                0 < pa && pa--;
                d = k
            } else
                d = null;
        k = [];
        null !== d && "NOP" !== d && k.push(d);
        g(fb, k)
    }
      , Ta = function(d) {
        d = n(d);
        g(gb, [J in d && "undefined" !== typeof d[J].value ? d[J].value.length : null, x(d)]);
        g(Na, [x(d)])
    }
      , Ua = function(d) {
        d = n(d);
        g(Ha, [x(d)])
    }
      , Wa = function(d) {
        d = n(d);
        g(Ia, [d[sa], d[ta], x(d)])
    }
      , $a = function(d) {
        var k = [1E3 * d.alpha, 1E3 * d.beta, 1E3 * d.gamma];
        !0 === C(Ba, 200) && !0 === a(k) && (!0 === d.absolute && k.push(1),
        g(Ba, k))
    }
      , Za = function(d) {
        if (!0 === C(Ca, 200) && null !== d.rotationRate) {
            var k = [1E3 * d.rotationRate.beta, 1E3 * d.rotationRate.gamma, 1E3 * d.rotationRate.alpha];
            !0 === a(k) && g(Ca, k)
        }
        !0 === C(Da, 50) && null !== d.accelerationIncludingGravity && (k = [1E3 * d.accelerationIncludingGravity.x, 1E3 * d.accelerationIncludingGravity.y, 1E3 * d.accelerationIncludingGravity.z],
        !0 === a(k) && g(Da, k));
        !0 === C(Ea, 50) && null !== d.acceleration && (d = [1E3 * d.acceleration.x, 1E3 * d.acceleration.y, 1E3 * d.acceleration.z],
        !0 === a(d) && g(Ea, d))
    }
      , Xa = function(d) {
        d = n(d);
        d[V] && d[V].touches && d[V].touches[0] && "undefined" !== typeof d[V].touches[0].pageX ? g(Oa, [d[V].touches[0].pageX, d[V].touches[0].pageY, x(d)]) : g(Oa, [-1, -1, x(d)])
    }
      , Ya = function(d) {
        aa = q(d);
        null === T && (K = -1,
        b());
        if (nsxdlxtvo() < A)
            return !1;
        A = nsxdlxtvo() + 5;
        d = n(d);
        g(hb, [d[sa], d[ta], x(d)])
    }
      , Va = function(d) {
        g(ib, void 0)
    }
      , aa = null
      , T = null
      , K = !1
      , R = !1
      , U = 0
      , qa = [100, 200, 2E3]
      , Ka = [100, 300, 150]
      , ha = [10, 50, 30]
      , oa = 0
      , N = null
      , ka = null
      , O = null
      , la = null
      , W = 0
      , X = 0
      , na = null
      , P = null
      , Q = null
      , fa = 0
      , Na = "ff"
      , Ha = "fb"
      , eb = "kd"
      , fb = "ku"
      , hb = "mm"
      , Ia = "mc"
      , Oa = "te"
      , bb = "fs"
      , gb = "kk"
      , db = "st"
      , ya = "mms"
      , wa = "so"
      , Ja = "tr"
      , Da = "ac"
      , Ca = "gy"
      , Ea = "lac"
      , Ba = "or"
      , ib = "pe"
      , ab = 2
      , ra = 1
      , Ga = null
      , S = null
      , Fa = null
      , xa = null
      , M = ""
      , ba = ""
      , ca = ""
      , ua = h()
      , ea = ""
      , da = {};
    da[Da] = 0;
    da[Ca] = 0;
    da[Ea] = 0;
    da[Ba] = 0
}
)();
(function() {
    nsghqzofj("di", {
        init: function(a) {
            nds = window.ndsapi || (window.ndsapi = {});
            if (nds.config.doNotTrack)
                nds.setFormFieldData("dnt", !0);
            else {
                var b = {}
                  , c = "NotAvail";
                "undefined" !== typeof navigator && "undefined" !== typeof navigator.userAgent && (c = navigator.userAgent);
                var e = window.ndsapi || (window.ndsapi = {});
                e.config && e.config.forceUA && (c = e.config.forceUA);
                c = c.replace(/([0-9]+\.[0-9]+)\.[0-9]+\.[0-9]+/g, "$1").replace(/([0-9]+\.[0-9]+)\.[0-9]+/g, "$1");
                c = c.replace(/([0-9]+_[0-9]+)_[0-9]+_[0-9]+/g, "$1").replace(/([0-9]+_[0-9]+)_[0-9]+/g, "$1");
                b.ua = c;
                b.sr = nds.common.bi.getScreenFingerprint();
                b.didtz = nds.common.bi.getDeviceTimezone().toString();
                c = nds.common.bi.getPlugins();
                b.bp = nds.common.util.quickHash(c);
                b.rbp = c;
                b.flv = nds.common.bi.isFlashInstalled().toString();
                b.fv = nds.common.bi.getHTML5SupportedVideo();
                b.fa = nds.common.bi.getHTML5SupportedAudio();
                b.hf = nds.common.util.quickHash(nds.common.bi.getHTML5CanvasSignature());
                b.pl = nds.common.bi.getPlatform();
                b.ve = nds.common.bi.getVendor();
                b.ft = nsimx.stringify(nds.common.bi.getDeviceTouchSettings());
                b.fc = nsimx.stringify(nds.common.bi.getCookiesEnabled(a.ac));
                b.fs = nds.common.bi.getHTML5LocalStorage().toString();
                b.wg = nds.common.util.quickHash(nsimx.stringify(nds.common.bi.getWebGLInfo()));
                b.fm = nds.common.util.quickHash(nds.common.bi.getFontMetrics().join(","));
                for (var f in b)
                    b.hasOwnProperty(f) && nds.setFormFieldData(f, b[f])
            }
            b = nds;
            f = b.setFormFieldData;
            c = [];
            c.push(nds.common.bi.getScreenInfo());
            c.push(nds.common.bi.getDeviceTimezone());
            c.push(nds.common.bi.getDeviceLanguage());
            c.push("bp1-" + nds.common.util.quickHash(nds.common.bi.getPlugins()));
            c.push(nds.common.bi.isFlashInstalled().toString());
            e = a.rt || 128;
            c.push(nds.common.util.truncTo(document.referrer.replace(/\|/g, ""), e));
            a = a.ut || 512;
            c.push(nds.common.util.truncTo(navigator.userAgent.replace(/\|/g, ""), a));
            a = nds.common.bi.getWebGLInfo();
            null === a ? c.push("Not Supported") : c.push("wg1-" + nds.common.util.quickHash(nsimx.stringify(a)));
            a = "b2";
            for (e = 0; e < c.length; e++)
                a += "|" + c[e];
            f.call(b, "bi", a)
        }
    })
}
)();
function nsxdlxt(a, b) {
    for (var c in nsimxale)
        if (nsimxale.hasOwnProperty(c)) {
            var e = nsimxale[c];
            if (e.hasOwnProperty(a))
                (0,
                e[a])(nszgojl[c], b)
        }
}
function nsghqzofj(a, b) {
    nsimxale[a] = b
}
(function() {
    function a(z, l) {
        var g = f
          , h = l[z];
        h && "object" === typeof h && "function" === typeof h.toNDJSON && (h = h.toNDJSON(z));
        "function" === typeof C && (h = C.call(l, z, h));
        switch (typeof h) {
        case "string":
            return c(h);
        case "number":
            return isFinite(h) ? String(h) : "null";
        case "boolean":
        case "null":
            return String(h);
        case "object":
            if (!h)
                return "null";
            f += n;
            var m = [];
            if ("[object Array]" === Object.prototype.toString.apply(h)) {
                var v = h.length;
                for (z = 0; z < v; z += 1)
                    m[z] = a(z, h) || "null";
                l = 0 === m.length ? "[]" : f ? "[\n" + f + m.join(",\n" + f) + "\n" + g + "]" : "[" + m.join(",") + "]";
                f = g;
                return l
            }
            if (C && "object" === typeof C)
                for (v = C.length,
                z = 0; z < v; z += 1) {
                    if ("string" === typeof C[z]) {
                        var y = C[z];
                        (l = a(y, h)) && m.push(c(y) + (f ? ": " : ":") + l)
                    }
                }
            else
                for (y in h)
                    Object.prototype.hasOwnProperty.call(h, y) && (l = a(y, h)) && m.push(c(y) + (f ? ": " : ":") + l);
            l = 0 === m.length ? "{}" : f ? "{\n" + f + m.join(",\n" + f) + "\n" + g + "}" : "{" + m.join(",") + "}";
            f = g;
            return l
        }
    }
    function b(z) {
        return 10 > z ? "0" + z : z
    }
    function c(z) {
        e.lastIndex = 0;
        return e.test(z) ? '"' + z.replace(e, function(l) {
            var g = p[l];
            return "string" === typeof g ? g : "\\u" + ("0000" + l.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + z + '"'
    }
    "function" !== typeof Date.prototype.toNDJSON && (Date.prototype.toNDJSON = function(z) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + b(this.getUTCMonth() + 1) + "-" + b(this.getUTCDate()) + "T" + b(this.getUTCHours()) + ":" + b(this.getUTCMinutes()) + ":" + b(this.getUTCSeconds()) + "Z" : null
    }
    ,
    String.prototype.toNDJSON = Number.prototype.toNDJSON = Boolean.prototype.toNDJSON = function(z) {
        return this.valueOf()
    }
    );
    var e = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, f, n, p = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, C;
    "function" !== typeof nsimx.stringify && (nsimx.stringify = function(z, l, g) {
        var h;
        n = f = "";
        if ("number" === typeof g)
            for (h = 0; h < g; h += 1)
                n += " ";
        else
            "string" === typeof g && (n = g);
        if ((C = l) && "function" !== typeof l && ("object" !== typeof l || "number" !== typeof l.length))
            throw Error("nsimx.stringify");
        return a("", {
            "": z
        })
    }
    );
    "function" !== typeof nsimx.parse && (nsimx.parse = function() {
        var z, l, g = {
            '"': '"',
            "\\": "\\",
            "/": "/",
            b: "\b",
            f: "\f",
            n: "\n",
            r: "\r",
            t: "\t"
        }, h, m = function(B) {
            if (B && B !== l)
                throw new SyntaxError('nsimx.parse - Expected "' + B + '" instead of "' + l + '"');
            l = h.charAt(z);
            z += 1;
            return l
        }, v = function() {
            var B = "";
            "-" === l && (B = "-",
            m("-"));
            for (; "0" <= l && "9" >= l; )
                B += l,
                m();
            if ("." === l)
                for (B += "."; m() && "0" <= l && "9" >= l; )
                    B += l;
            if ("e" === l || "E" === l) {
                B += l;
                m();
                if ("-" === l || "+" === l)
                    B += l,
                    m();
                for (; "0" <= l && "9" >= l; )
                    B += l,
                    m()
            }
            var r = +B;
            return isFinite(r) ? r : "-" === B.charAt(0) ? -Infinity : Infinity
        }, y = function() {
            var B, r = "", A;
            if ('"' === l)
                for (; m(); ) {
                    if ('"' === l)
                        return m(),
                        r;
                    if ("\\" === l)
                        if (m(),
                        "u" === l) {
                            for (B = A = 0; 4 > B; B += 1) {
                                var E = parseInt(m(), 16);
                                if (!isFinite(E))
                                    break;
                                A = 16 * A + E
                            }
                            r += String.fromCharCode(A)
                        } else if ("string" === typeof g[l])
                            r += g[l];
                        else
                            break;
                    else
                        r += l
                }
            throw new SyntaxError("nsimx.parse - Bad string");
        }, q = function() {
            for (; l && " " >= l; )
                m()
        }, u = function() {
            switch (l) {
            case "t":
                return m("t"),
                m("r"),
                m("u"),
                m("e"),
                !0;
            case "f":
                return m("f"),
                m("a"),
                m("l"),
                m("s"),
                m("e"),
                !1;
            case "n":
                return m("n"),
                m("u"),
                m("l"),
                m("l"),
                null
            }
            throw new SyntaxError('nsimx.parse - Unexpected "' + l + '"');
        };
        var x = function() {
            q();
            switch (l) {
            case "{":
                a: {
                    var B = {};
                    if ("{" === l) {
                        m("{");
                        q();
                        if ("}" === l) {
                            m("}");
                            var r = B;
                            break a
                        }
                        for (; l; ) {
                            r = y();
                            q();
                            m(":");
                            B[r] = x();
                            q();
                            if ("}" === l) {
                                m("}");
                                r = B;
                                break a
                            }
                            m(",");
                            q()
                        }
                    }
                    throw new SyntaxError("nsimx.parse - Bad object");
                }
                return r;
            case "[":
                a: {
                    r = [];
                    if ("[" === l) {
                        m("[");
                        q();
                        if ("]" === l) {
                            m("]");
                            break a
                        }
                        for (; l; ) {
                            r.push(x());
                            q();
                            if ("]" === l) {
                                m("]");
                                break a
                            }
                            m(",");
                            q()
                        }
                    }
                    throw new SyntaxError("nsimx.parse - Bad array");
                }
                return r;
            case '"':
                return y();
            case "-":
                return v();
            default:
                return "0" <= l && "9" >= l ? v() : u()
            }
        };
        return function(B, r) {
            h = B;
            z = 0;
            l = " ";
            B = x();
            q();
            if (l)
                throw new SyntaxError("nsimx.parse - Syntax error");
            return "function" === typeof r ? function F(E, G) {
                var I, L = E[G];
                if (L && "object" === typeof L)
                    for (I in L)
                        if (Object.prototype.hasOwnProperty.call(L, I)) {
                            var ja = F(L, I);
                            void 0 !== ja ? L[I] = ja : delete L[I]
                        }
                return r.call(E, G, L)
            }({
                "": B
            }, "") : B
        }
    }())
}
)();
(function() {
    var a = !1
      , b = 'input[type\x3d"text"],input[type\x3d"password"]'
      , c = 'input[name\x3d"remember-me"]'
      , e = function(g) {
        a && f.init()
    };
    nsghqzofj("af", {
        init: function(g) {
            a = g.e;
            b = g.gtfs;
            c = g.rms;
            a && f.init()
        },
        precomplete: function(g) {
            a && f.findTech()
        },
        bind: e,
        rebind: e,
        stop: function(g) {
            a && (p.unsubscribeAll(),
            a = !1)
        }
    });
    var f = function() {
        return {
            init: function() {
                n.init();
                this.initFieldWatchers();
                this.findTech()
            },
            findTech: function() {
                try {
                    z.findTech(),
                    l.findTech(),
                    C.findTech()
                } catch (g) {}
            },
            initFieldWatchers: function() {
                p.unsubscribeAll();
                for (var g = this.getTargetFields(), h = 0; h < g.length; h += 1)
                    p.startWatchingField(g[h])
            },
            getTargetFields: function() {
                return nds.common.querySelectorAll(b)
            }
        }
    }()
      , n = function() {
        function g() {
            var m = ndoGetObjectKeys(h).join(",");
            nds.setFormFieldData("af", m)
        }
        var h = {};
        return {
            init: function() {
                h = {};
                g()
            },
            reportTech: function(m) {
                h[m] = !0;
                g()
            },
            reportFill: function() {
                h.filled = !0;
                g()
            }
        }
    }()
      , p = function() {
        function g() {
            var v = nds.common.createCallbackList()
              , y = ++m;
            h[y] = v;
            v.addCallback(function() {
                delete h[y]
            });
            return v
        }
        var h = {}
          , m = 0;
        return {
            unsubscribeAll: function() {
                for (var v in h)
                    Object.prototype.hasOwnProperty.call(h, v) && h[v].callAllCallbacks()
            },
            startWatchingField: function(v) {
                if (v)
                    if (v.value)
                        n.reportFill();
                    else {
                        var y = getEnabledEvents();
                        if (!1 !== y.hasOwnProperty(nsnucqnz) && !1 !== y.hasOwnProperty(nsvbgonogp) && !1 !== y.hasOwnProperty(nsbdynsy)) {
                            var q = g();
                            attachEventListener(v, nsnucqnz, function() {
                                q.callAllCallbacks()
                            }, q.addCallback);
                            y = [nsbdynsy, nsvbgonogp];
                            for (var u = 0; u < y.length; u += 1)
                                attachEventListener(v, y[u], function() {
                                    v.value && (n.reportFill(),
                                    q.callAllCallbacks())
                                }, q.addCallback)
                        }
                    }
            }
        }
    }()
      , C = function() {
        return {
            findTech: function() {
                try {
                    for (var g = nds.common.querySelectorAll(c), h = 0; h < g.length; h += 1)
                        g[h].checked && n.reportTech("rememberme")
                } catch (m) {}
            }
        }
    }()
      , z = function() {
        return {
            findTech: function() {
                try {
                    0 < nds.common.querySelectorAll(":-webkit-autofill").length && n.reportTech("webkit")
                } catch (g) {}
            }
        }
    }()
      , l = function() {
        var g = {
            "background-attachment": "scroll",
            "background-size": "16px 18px",
            "background-position": "98% 50%",
            "background-repeat": "no-repeat",
            "background-image": /^url\("data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAA..JREFUOB.*"\)$/
        };
        return {
            findTech: function(h) {
                h || (h = f.getTargetFields());
                for (var m = 0; m < h.length; m += 1) {
                    var v = h[m];
                    a: {
                        var y = void 0;
                        var q = v
                          , u = g;
                        for (y in u)
                            if (Object.prototype.hasOwnProperty.call(u, y)) {
                                var x = u[y]
                                  , B = nds.common.util.getComputedStyle(q, y);
                                if (x instanceof RegExp) {
                                    if (!x.test(B)) {
                                        y = !1;
                                        break a
                                    }
                                } else if (B !== x) {
                                    y = !1;
                                    break a
                                }
                            }
                        y = !0
                    }
                    if (!y) {
                        y = void 0;
                        v = v.id || v.name;
                        try {
                            y = document.querySelector('[id^\x3d"__lpform_' + v + '"]')
                        } catch (r) {}
                        y = !!y
                    }
                    if (y) {
                        n.reportTech("lastpass");
                        break
                    }
                }
            }
        }
    }()
}
)();
(function() {
    nsghqzofj("wk", {
        init: function(a) {
            nsvbgono && (a = Math.floor(1E6 * Math.random()) + 1E3,
            (window.ndsapi || (window.ndsapi = {})).setFormFieldData("wkr", a))
        }
    })
}
)();
(function() {
    var a = window.ndsapi || (window.ndsapi = {})
      , b = null
      , c = null
      , e = null;
    a.configure3DS = function(q) {
        a.config = a.config || {};
        a.config.threeDSConfig = a.config.threeDSConfig || {};
        a.ThreeDS = {};
        nsdchmf(q, function(u, x) {
            !1 === Object.prototype.hasOwnProperty.call(a.config.threeDSConfig, x) && (a.config.threeDSConfig[x] = {});
            a.config.threeDSConfig[x] = q[x]
        })
    }
    ;
    a.start3DS = function(q) {
        if (f()) {
            var u = a.config.threeDSConfig;
            n(u);
            var x = function(A, E, G) {
                if ("undefined" !== typeof ThreeDS.ThreeDS2Widget) {
                    var F = C(A, E);
                    var I = "transaction.error"
                } else
                    "undefined" !== typeof ThreeDS.ThreeDS1Widget && (I = new ThreeDS.ErrorInformation,
                    I.setCause(ThreeDS.ErrorCause.INVALID_REQUEST),
                    I.setExplanation(A + ": " + E),
                    F = new ThreeDS.ThreeDSError,
                    F.setError(I),
                    F.setResult(ThreeDS.ErrorResult.ERROR),
                    I = ThreeDS.Flow.THREE_DS1_TRANSACTION_ERROR);
                p(I, [F], G)
            };
            if ("undefined" !== typeof ThreeDS)
                if (a.ThreeDS = ThreeDS,
                a.ThreeDS.Error = ThreeDS.ThreeDSError,
                0 !== e.length)
                    x("Missing Configuration", e.join(","), c.callbacks);
                else {
                    var B = z(u)
                      , r = l(B);
                    if (0 !== r.length)
                        x("Missing 3DS Widget", r.join(","), c.callbacks);
                    else if (x = m(B, c.notificationUrl))
                        x.start({
                            iframeElement: v(c.iframeElement),
                            callbacks: c.callbacks,
                            threeDSMethodNotificationURL: u.threeDSMethodNotificationURL,
                            authPayload: u.authPayload,
                            supportedVersionsResponse: q,
                            enableIDCIMode: u.enableIDCIMode
                        }),
                        h(B)
                }
        }
    }
    ;
    a.get3dsAuthenticationParameters = function(q) {
        if (f()) {
            var u = a.config.threeDSConfig;
            n(u);
            if ("undefined" !== typeof ThreeDS && (a.ThreeDS = ThreeDS,
            a.ThreeDS.Error = ThreeDS.ThreeDSError,
            g()))
                return b = new ThreeDS.ThreeDS2Widget(c.notificationUrl),
                b.getAuthenticationParameters(q, {
                    iframeElement: v(c.iframeElement),
                    callbacks: c.callbacks,
                    threeDSMethodNotificationURL: u.threeDSMethodNotificationURL,
                    authPayload: u.authPayload
                })
        }
    }
    ;
    a.perform3dsChallenge = function(q) {
        if (f()) {
            var u = a.config.threeDSConfig;
            n(u);
            if ("undefined" !== typeof ThreeDS && (a.ThreeDS = ThreeDS,
            a.ThreeDS.Error = ThreeDS.ThreeDSError,
            g()))
                return null === b && (b = new ThreeDS.ThreeDS2Widget(c.notificationUrl)),
                b.performChallenge(q, {
                    iframeElement: v(c.iframeElement),
                    callbacks: c.callbacks,
                    threeDSMethodNotificationURL: u.threeDSMethodNotificationURL,
                    authPayload: u.authPayload
                })
        }
    }
    ;
    var f = function() {
        return Object.prototype.hasOwnProperty.call(a, "config") && Object.prototype.hasOwnProperty.call(a.config, "threeDSConfig") && 0 < nstjlnis(a.config.threeDSConfig)
    }
      , n = function(q) {
        c = {
            iframeElement: null,
            callbacks: null,
            notificationUrl: null
        };
        e = [];
        nsdchmf(c, function(u, x) {
            Object.prototype.hasOwnProperty.call(q, x) ? c[x] = q[x] : e.push(x)
        })
    }
      , p = function(q, u, x) {
        (q = y(x, q)) && q.apply(this, u)
    }
      , C = function(q, u) {
        var x = new ThreeDS.ThreeDSError;
        x.setErrorDescription(q);
        x.setErrorDetail(u);
        x.setMessageType(ThreeDS.MsgType.ERRO);
        x.setErrorCode(ThreeDS.ErrorCode.PERMANENT_SYSTEM_FAILURE);
        x.setErrorComponent(ThreeDS.ErrorComponent.THREEDS_SDK);
        return x
    }
      , z = function(q) {
        var u = "None";
        Object.prototype.hasOwnProperty.call(q, "interdictionType") && (u = q.interdictionType);
        return u
    }
      , l = function(q) {
        var u = [];
        nsdchmf({
            "3ds1": ["ThreeDS1Widget"],
            "3ds2": ["ThreeDS2Widget"],
            "3ds2First": ["ThreeDS1Widget", "ThreeDS2Widget"]
        }[q], function(x) {
            "undefined" === typeof ThreeDS[x] && u.push(x)
        });
        return u
    }
      , g = function() {
        if (0 !== e.length) {
            var q = e.join(",")
              , u = c.callbacks;
            if ("undefined" !== typeof ThreeDS.ThreeDS2Widget) {
                var x = C("Missing Configuration", q);
                var B = "transaction.error"
            }
            p(B, [x], u);
            return !1
        }
        return "undefined" === typeof ThreeDS.ThreeDS2Widget ? !1 : !0
    }
      , h = function(q) {
        nsdchmf({
            "3ds1": ["ThreeDSWidget", "ThreeDS2Widget"],
            "3ds2": ["ThreeDSWidget", "ThreeDS1Widget"],
            "3ds2First": ["ThreeDSWidget"]
        }[q], function(u) {
            delete ThreeDS[u]
        })
    }
      , m = function(q, u) {
        return "3ds1" === q ? new ThreeDS.ThreeDS1Widget(u) : "3ds2" === q || "3ds2First" === q ? new ThreeDS.ThreeDS2Widget(u) : "undefined" !== typeof ThreeDS ? new ThreeDS.ThreeDSWidget(u) : null
    }
      , v = function(q) {
        var u = q;
        if ("string" === typeof q || q instanceof String)
            u = nstjlnisi([q]),
            u = 0 < u.length ? u[0] : null;
        return u
    }
      , y = function(q, u) {
        if ("object" !== typeof q)
            return !1;
        if ("string" === typeof u) {
            u = u.split(".");
            for (var x = u.length, B = 0; B < x; B++) {
                var r = u[B];
                if (Object.prototype.hasOwnProperty.call(q, r)) {
                    if (B === x - 1)
                        return "function" === typeof q[r] ? q[r] : !1;
                    q = q[r]
                } else
                    return !1
            }
        } else
            return Object.prototype.hasOwnProperty.call(q, u) && "function" === typeof q[u] ? q[u] : !1
    };
    "function" !== typeof a.load && (a.load = function() {
        if (nsvbgo)
            a.configure3DS = function() {}
            ,
            a.start3DS = function() {}
            ;
        else
            for (var q = a.config.q, u = 0; u < q.length; ++u) {
                var x = q[u];
                "function" === typeof x && x()
            }
    }
    )
}
)();
nds.ndeb = "1.dev-1.0.Zu6VBcrc2OaP/buABLHDwA\x3d\x3d.FeWk6ivEKp9kjmWL4ML3lvC8PhrxuYmjYMoxvDH1qAzcfbiHK8wEdLPPPrW/UvQKh0ynHo425vChDfYdBh9VBEVrFrxX51oAC8WBGtoXnUlBYi43Yepe6b7Lm/iYoQdO";
ndwts({
    "co": {
        "gzrq": false,
        "useNdx": true,
        "ndsidConfig": {
            "enable": false,
            "secure": false,
            "options": []
        },
        "clientSideCookie": false,
        "initBindings": null,
        "initId": "",
        "eventModeEnabled": false,
        "pageModeConfig": {
            "enable": true,
            "formbind": [],
            "inputFieldName": "nds-pmd",
            "encodeData": true,
            "options": [],
            "wt": "1.w-481390.1.2.rLkjR7nWK8tGRwADpyqEeg,,.HVt8HFtpSlpJ9xQYpuRXmr7JjIz2CSSZEyDDVQvJTCqCag_H8ObZXh5xXWJtEzndmgVuvbKNX3Pj-VfHci373tqmDeUNOugplABTMBwL2Fa5U70bMKEWJmDxa56yJkxIwJRxfcp_Dre3VuqufR2YVOcFMTzOKsrqpR_fOcynUztG-Utrm7QJxhC7CNXPk0z2L7EcF_rq_rSH2UthDpxoRUFz1rMjG2C3vGJctQYogZdxhuFO0ATZevGI-nygd02O",
            "requireWidgetToken": true
        }
    },
    "ml": {
        "id": [],
        "i": {
            "bi": "bi",
            "ls": "ls"
        },
        "c": {
            "ua": "ua",
            "bp": "bp",
            "sr": "sr",
            "didtz": "didtz",
            "af": "af",
            "wkr": "wkr",
            "flv": "flv",
            "fv": "fv",
            "fa": "fa",
            "hf": "hf",
            "pl": "pl",
            "ft": "ft",
            "fc": "fc",
            "fs": "fs",
            "wg": "wg",
            "bd": "bd",
            "jsv": "jsv",
            "p": "p",
            "ipr": "ipr"
        },
        "pmd": {
            "bp": "bp",
            "sr": "sr",
            "didtz": "didtz",
            "af": "af",
            "wkr": "wkr",
            "flv": "flv",
            "fv": "fv",
            "fa": "fa",
            "hf": "hf",
            "pl": "pl",
            "ft": "ft",
            "fc": "fc",
            "fs": "fs",
            "wg": "wg",
            "fm": "fm",
            "bd": "bd",
            "jsv": "jsv",
            "dit": "dit",
            "ipr": "ipr",
            "ic": "ic",
            "wv": "wv"
        }
    },
    "wmd": {
        "ipr": {
            "fm": [],
            "lm": true,
            "bh": false,
            "tl": 5000,
            "il": 25
        },
        "wk": {
            "r": "test"
        },
        "di": {
            "rt": 128,
            "ut": 512,
            "ac": true
        },
        "af": {
            "e": false,
            "gtfs": "input[type=\"text\"],input[type=\"password\"]",
            "rms": "input[name=\"remember-me\"]"
        }
    },
    "fd": {
        "ipr": "p",
        "bi": "p"
    },
    "wc": "application\/javascript"
})
