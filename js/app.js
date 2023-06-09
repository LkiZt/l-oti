(() => {
  "use strict";
  let e = (e, t = 500, s = 0) => {
      e.classList.contains("_slide") ||
        (e.classList.add("_slide"),
        (e.style.transitionProperty = "height, margin, padding"),
        (e.style.transitionDuration = t + "ms"),
        (e.style.height = `${e.offsetHeight}px`),
        e.offsetHeight,
        (e.style.overflow = "hidden"),
        (e.style.height = s ? `${s}px` : "0px"),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        window.setTimeout(() => {
          (e.hidden = !s),
            !s && e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            !s && e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("_slide");
        }, t));
    },
    t = (e, t = 500, s = 0) => {
      if (!e.classList.contains("_slide")) {
        e.classList.add("_slide"),
          (e.hidden = !e.hidden && null),
          s && e.style.removeProperty("height");
        let i = e.offsetHeight;
        (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          e.offsetHeight,
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = i + "px"),
          e.style.removeProperty("padding-top"),
          e.style.removeProperty("padding-bottom"),
          e.style.removeProperty("margin-top"),
          e.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            e.style.removeProperty("height"),
              e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t);
      }
    },
    s = !0,
    i = (e = 500) => {
      let t = document.querySelector("body");
      if (s) {
        let i = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < i.length; e++) {
            i[e].style.paddingRight = "0px";
          }
          (t.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (s = !1),
          setTimeout(function () {
            s = !0;
          }, e);
      }
    };
  function r(e) {
    setTimeout(() => {
      window.FLS && console.log(e);
    }, 0);
  }
  function a(e, t) {
    const s = Array.from(e).filter(function (e, s, i) {
      if (e.dataset[t]) return e.dataset[t].split(",")[0];
    });
    if (s.length) {
      const e = [];
      s.forEach((s) => {
        const i = {},
          r = s.dataset[t].split(",");
        (i.value = r[0]),
          (i.type = r[1] ? r[1].trim() : "max"),
          (i.item = s),
          e.push(i);
      });
      let i = e.map(function (e) {
        return (
          "(" + e.type + "-width: " + e.value + "px)," + e.value + "," + e.type
        );
      });
      i = (function (e) {
        return e.filter(function (e, t, s) {
          return s.indexOf(e) === t;
        });
      })(i);
      const r = [];
      if (i.length)
        return (
          i.forEach((t) => {
            const s = t.split(","),
              i = s[1],
              a = s[2],
              n = window.matchMedia(s[0]),
              o = e.filter(function (e) {
                if (e.value === i && e.type === a) return !0;
              });
            r.push({ itemsArray: o, matchMedia: n });
          }),
          r
        );
    }
  }
  let n = (e, t = !1, s = 500, a = 0) => {
    const n = document.querySelector(e);
    if (n) {
      let o = "",
        l = 0;
      t &&
        ((o = "header.header"), (l = document.querySelector(o).offsetHeight));
      let d = {
        speedAsDuration: !0,
        speed: s,
        header: o,
        offset: a,
        easing: "easeOutQuad",
      };
      if (
        (document.documentElement.classList.contains("menu-open") &&
          (i(), document.documentElement.classList.remove("menu-open")),
        "undefined" != typeof SmoothScroll)
      )
        new SmoothScroll().animateScroll(n, "", d);
      else {
        let e = n.getBoundingClientRect().top + scrollY;
        window.scrollTo({ top: l ? e - l : e, behavior: "smooth" });
      }
      r(`[gotoBlock]: Юхуу...едем к ${e}`);
    } else r(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
  };
  function o(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function l(e = {}, t = {}) {
    Object.keys(t).forEach((s) => {
      void 0 === e[s]
        ? (e[s] = t[s])
        : o(t[s]) && o(e[s]) && Object.keys(t[s]).length > 0 && l(e[s], t[s]);
    });
  }
  const d = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function c() {
    const e = "undefined" != typeof document ? document : {};
    return l(e, d), e;
  }
  const p = {
    document: d,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function u() {
    const e = "undefined" != typeof window ? window : {};
    return l(e, p), e;
  }
  function h(e, t = 0) {
    return setTimeout(e, t);
  }
  function m() {
    return Date.now();
  }
  function f(e, t = "x") {
    const s = u();
    let i, r, a;
    const n = (function (e) {
      const t = u();
      let s;
      return (
        t.getComputedStyle && (s = t.getComputedStyle(e, null)),
        !s && e.currentStyle && (s = e.currentStyle),
        s || (s = e.style),
        s
      );
    })(e);
    return (
      s.WebKitCSSMatrix
        ? ((r = n.transform || n.webkitTransform),
          r.split(",").length > 6 &&
            (r = r
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (a = new s.WebKitCSSMatrix("none" === r ? "" : r)))
        : ((a =
            n.MozTransform ||
            n.OTransform ||
            n.MsTransform ||
            n.msTransform ||
            n.transform ||
            n
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = a.toString().split(","))),
      "x" === t &&
        (r = s.WebKitCSSMatrix
          ? a.m41
          : 16 === i.length
          ? parseFloat(i[12])
          : parseFloat(i[4])),
      "y" === t &&
        (r = s.WebKitCSSMatrix
          ? a.m42
          : 16 === i.length
          ? parseFloat(i[13])
          : parseFloat(i[5])),
      r || 0
    );
  }
  function v(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function g(...e) {
    const t = Object(e[0]),
      s = ["__proto__", "constructor", "prototype"];
    for (let r = 1; r < e.length; r += 1) {
      const a = e[r];
      if (
        null != a &&
        ((i = a),
        !("undefined" != typeof window && void 0 !== window.HTMLElement
          ? i instanceof HTMLElement
          : i && (1 === i.nodeType || 11 === i.nodeType)))
      ) {
        const e = Object.keys(Object(a)).filter((e) => s.indexOf(e) < 0);
        for (let s = 0, i = e.length; s < i; s += 1) {
          const i = e[s],
            r = Object.getOwnPropertyDescriptor(a, i);
          void 0 !== r &&
            r.enumerable &&
            (v(t[i]) && v(a[i])
              ? a[i].__swiper__
                ? (t[i] = a[i])
                : g(t[i], a[i])
              : !v(t[i]) && v(a[i])
              ? ((t[i] = {}), a[i].__swiper__ ? (t[i] = a[i]) : g(t[i], a[i]))
              : (t[i] = a[i]));
        }
      }
    }
    var i;
    return t;
  }
  function w(e, t, s) {
    e.style.setProperty(t, s);
  }
  function S({ swiper: e, targetPosition: t, side: s }) {
    const i = u(),
      r = -e.translate;
    let a,
      n = null;
    const o = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      i.cancelAnimationFrame(e.cssModeFrameID);
    const l = t > r ? "next" : "prev",
      d = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
      c = () => {
        (a = new Date().getTime()), null === n && (n = a);
        const l = Math.max(Math.min((a - n) / o, 1), 0),
          p = 0.5 - Math.cos(l * Math.PI) / 2;
        let u = r + p * (t - r);
        if ((d(u, t) && (u = t), e.wrapperEl.scrollTo({ [s]: u }), d(u, t)))
          return (
            (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [s]: u });
            }),
            void i.cancelAnimationFrame(e.cssModeFrameID)
          );
        e.cssModeFrameID = i.requestAnimationFrame(c);
      };
    c();
  }
  function b(e, t = "") {
    return [...e.children].filter((e) => e.matches(t));
  }
  function T(e, t) {
    return u().getComputedStyle(e, null).getPropertyValue(t);
  }
  function y(e) {
    let t,
      s = e;
    if (s) {
      for (t = 0; null !== (s = s.previousSibling); )
        1 === s.nodeType && (t += 1);
      return t;
    }
  }
  function x(e, t, s) {
    const i = u();
    return s
      ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
          parseFloat(
            i
              .getComputedStyle(e, null)
              .getPropertyValue("width" === t ? "margin-right" : "margin-top")
          ) +
          parseFloat(
            i
              .getComputedStyle(e, null)
              .getPropertyValue("width" === t ? "margin-left" : "margin-bottom")
          )
      : e.offsetWidth;
  }
  let E, M, C;
  function P() {
    return (
      E ||
        (E = (function () {
          const e = u(),
            t = c();
          return {
            smoothScroll:
              t.documentElement &&
              t.documentElement.style &&
              "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
          };
        })()),
      E
    );
  }
  function L(e = {}) {
    return (
      M ||
        (M = (function ({ userAgent: e } = {}) {
          const t = P(),
            s = u(),
            i = s.navigator.platform,
            r = e || s.navigator.userAgent,
            a = { ios: !1, android: !1 },
            n = s.screen.width,
            o = s.screen.height,
            l = r.match(/(Android);?[\s\/]+([\d.]+)?/);
          let d = r.match(/(iPad).*OS\s([\d_]+)/);
          const c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
            p = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            h = "Win32" === i;
          let m = "MacIntel" === i;
          return (
            !d &&
              m &&
              t.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${n}x${o}`) >= 0 &&
              ((d = r.match(/(Version)\/([\d.]+)/)),
              d || (d = [0, 1, "13_0_0"]),
              (m = !1)),
            l && !h && ((a.os = "android"), (a.android = !0)),
            (d || p || c) && ((a.os = "ios"), (a.ios = !0)),
            a
          );
        })(e)),
      M
    );
  }
  function A() {
    return (
      C ||
        (C = (function () {
          const e = u();
          let t = !1;
          function s() {
            const t = e.navigator.userAgent.toLowerCase();
            return (
              t.indexOf("safari") >= 0 &&
              t.indexOf("chrome") < 0 &&
              t.indexOf("android") < 0
            );
          }
          if (s()) {
            const s = String(e.navigator.userAgent);
            if (s.includes("Version/")) {
              const [e, i] = s
                .split("Version/")[1]
                .split(" ")[0]
                .split(".")
                .map((e) => Number(e));
              t = e < 16 || (16 === e && i < 2);
            }
          }
          return {
            isSafari: t || s(),
            needPerspectiveFix: t,
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      C
    );
  }
  const k = {
    on(e, t, s) {
      const i = this;
      if (!i.eventsListeners || i.destroyed) return i;
      if ("function" != typeof t) return i;
      const r = s ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          i.eventsListeners[e] || (i.eventsListeners[e] = []),
            i.eventsListeners[e][r](t);
        }),
        i
      );
    },
    once(e, t, s) {
      const i = this;
      if (!i.eventsListeners || i.destroyed) return i;
      if ("function" != typeof t) return i;
      function r(...s) {
        i.off(e, r), r.__emitterProxy && delete r.__emitterProxy, t.apply(i, s);
      }
      return (r.__emitterProxy = t), i.on(e, r, s);
    },
    onAny(e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof e) return s;
      const i = t ? "unshift" : "push";
      return (
        s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return !s.eventsListeners || s.destroyed
        ? s
        : s.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (s.eventsListeners[e] = [])
              : s.eventsListeners[e] &&
                s.eventsListeners[e].forEach((i, r) => {
                  (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                    s.eventsListeners[e].splice(r, 1);
                });
          }),
          s)
        : s;
    },
    emit(...e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsListeners) return t;
      let s, i, r;
      "string" == typeof e[0] || Array.isArray(e[0])
        ? ((s = e[0]), (i = e.slice(1, e.length)), (r = t))
        : ((s = e[0].events), (i = e[0].data), (r = e[0].context || t)),
        i.unshift(r);
      return (
        (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
          t.eventsAnyListeners &&
            t.eventsAnyListeners.length &&
            t.eventsAnyListeners.forEach((t) => {
              t.apply(r, [e, ...i]);
            }),
            t.eventsListeners &&
              t.eventsListeners[e] &&
              t.eventsListeners[e].forEach((e) => {
                e.apply(r, i);
              });
        }),
        t
      );
    },
  };
  const I = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const s = t.closest(
        e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
      );
      if (s) {
        const t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
        t && t.remove();
      }
    },
    O = (e, t) => {
      if (!e.slides[t]) return;
      const s = e.slides[t].querySelector('[loading="lazy"]');
      s && s.removeAttribute("loading");
    },
    _ = (e) => {
      if (!e || e.destroyed || !e.params) return;
      let t = e.params.lazyPreloadPrevNext;
      const s = e.slides.length;
      if (!s || !t || t < 0) return;
      t = Math.min(t, s);
      const i =
          "auto" === e.params.slidesPerView
            ? e.slidesPerViewDynamic()
            : Math.ceil(e.params.slidesPerView),
        r = e.activeIndex,
        a = r + i - 1;
      if (e.params.rewind)
        for (let i = r - t; i <= a + t; i += 1) {
          const t = ((i % s) + s) % s;
          t !== r && t > a && O(e, t);
        }
      else
        for (let i = Math.max(a - t, 0); i <= Math.min(a + t, s - 1); i += 1)
          i !== r && i > a && O(e, i);
    };
  const z = {
    updateSize: function () {
      const e = this;
      let t, s;
      const i = e.el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : i.clientWidth),
        (s =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : i.clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === s && e.isVertical()) ||
          ((t =
            t -
            parseInt(T(i, "padding-left") || 0, 10) -
            parseInt(T(i, "padding-right") || 0, 10)),
          (s =
            s -
            parseInt(T(i, "padding-top") || 0, 10) -
            parseInt(T(i, "padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(s) && (s = 0),
          Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[t];
      }
      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }
      const i = e.params,
        {
          wrapperEl: r,
          slidesEl: a,
          size: n,
          rtlTranslate: o,
          wrongRTL: l,
        } = e,
        d = e.virtual && i.virtual.enabled,
        c = d ? e.virtual.slides.length : e.slides.length,
        p = b(a, `.${e.params.slideClass}, swiper-slide`),
        u = d ? e.virtual.slides.length : p.length;
      let h = [];
      const m = [],
        f = [];
      let v = i.slidesOffsetBefore;
      "function" == typeof v && (v = i.slidesOffsetBefore.call(e));
      let g = i.slidesOffsetAfter;
      "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
      const S = e.snapGrid.length,
        y = e.slidesGrid.length;
      let E = i.spaceBetween,
        M = -v,
        C = 0,
        P = 0;
      if (void 0 === n) return;
      "string" == typeof E && E.indexOf("%") >= 0
        ? (E = (parseFloat(E.replace("%", "")) / 100) * n)
        : "string" == typeof E && (E = parseFloat(E)),
        (e.virtualSize = -E),
        p.forEach((e) => {
          o ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
            (e.style.marginBottom = ""),
            (e.style.marginTop = "");
        }),
        i.centeredSlides &&
          i.cssMode &&
          (w(r, "--swiper-centered-offset-before", ""),
          w(r, "--swiper-centered-offset-after", ""));
      const L = i.grid && i.grid.rows > 1 && e.grid;
      let A;
      L && e.grid.initSlides(u);
      const k =
        "auto" === i.slidesPerView &&
        i.breakpoints &&
        Object.keys(i.breakpoints).filter(
          (e) => void 0 !== i.breakpoints[e].slidesPerView
        ).length > 0;
      for (let r = 0; r < u; r += 1) {
        let a;
        if (
          ((A = 0),
          p[r] && (a = p[r]),
          L && e.grid.updateSlide(r, a, u, t),
          !p[r] || "none" !== T(a, "display"))
        ) {
          if ("auto" === i.slidesPerView) {
            k && (p[r].style[t("width")] = "");
            const n = getComputedStyle(a),
              o = a.style.transform,
              l = a.style.webkitTransform;
            if (
              (o && (a.style.transform = "none"),
              l && (a.style.webkitTransform = "none"),
              i.roundLengths)
            )
              A = e.isHorizontal() ? x(a, "width", !0) : x(a, "height", !0);
            else {
              const e = s(n, "width"),
                t = s(n, "padding-left"),
                i = s(n, "padding-right"),
                r = s(n, "margin-left"),
                o = s(n, "margin-right"),
                l = n.getPropertyValue("box-sizing");
              if (l && "border-box" === l) A = e + r + o;
              else {
                const { clientWidth: s, offsetWidth: n } = a;
                A = e + t + i + r + o + (n - s);
              }
            }
            o && (a.style.transform = o),
              l && (a.style.webkitTransform = l),
              i.roundLengths && (A = Math.floor(A));
          } else
            (A = (n - (i.slidesPerView - 1) * E) / i.slidesPerView),
              i.roundLengths && (A = Math.floor(A)),
              p[r] && (p[r].style[t("width")] = `${A}px`);
          p[r] && (p[r].swiperSlideSize = A),
            f.push(A),
            i.centeredSlides
              ? ((M = M + A / 2 + C / 2 + E),
                0 === C && 0 !== r && (M = M - n / 2 - E),
                0 === r && (M = M - n / 2 - E),
                Math.abs(M) < 0.001 && (M = 0),
                i.roundLengths && (M = Math.floor(M)),
                P % i.slidesPerGroup == 0 && h.push(M),
                m.push(M))
              : (i.roundLengths && (M = Math.floor(M)),
                (P - Math.min(e.params.slidesPerGroupSkip, P)) %
                  e.params.slidesPerGroup ==
                  0 && h.push(M),
                m.push(M),
                (M = M + A + E)),
            (e.virtualSize += A + E),
            (C = A),
            (P += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, n) + g),
        o &&
          l &&
          ("slide" === i.effect || "coverflow" === i.effect) &&
          (r.style.width = `${e.virtualSize + E}px`),
        i.setWrapperSize && (r.style[t("width")] = `${e.virtualSize + E}px`),
        L && e.grid.updateWrapperSize(A, h, t),
        !i.centeredSlides)
      ) {
        const t = [];
        for (let s = 0; s < h.length; s += 1) {
          let r = h[s];
          i.roundLengths && (r = Math.floor(r)),
            h[s] <= e.virtualSize - n && t.push(r);
        }
        (h = t),
          Math.floor(e.virtualSize - n) - Math.floor(h[h.length - 1]) > 1 &&
            h.push(e.virtualSize - n);
      }
      if (d && i.loop) {
        const t = f[0] + E;
        if (i.slidesPerGroup > 1) {
          const s = Math.ceil(
              (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                i.slidesPerGroup
            ),
            r = t * i.slidesPerGroup;
          for (let e = 0; e < s; e += 1) h.push(h[h.length - 1] + r);
        }
        for (
          let s = 0;
          s < e.virtual.slidesBefore + e.virtual.slidesAfter;
          s += 1
        )
          1 === i.slidesPerGroup && h.push(h[h.length - 1] + t),
            m.push(m[m.length - 1] + t),
            (e.virtualSize += t);
      }
      if ((0 === h.length && (h = [0]), 0 !== E)) {
        const s = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
        p.filter(
          (e, t) => !(i.cssMode && !i.loop) || t !== p.length - 1
        ).forEach((e) => {
          e.style[s] = `${E}px`;
        });
      }
      if (i.centeredSlides && i.centeredSlidesBounds) {
        let e = 0;
        f.forEach((t) => {
          e += t + (E || 0);
        }),
          (e -= E);
        const t = e - n;
        h = h.map((e) => (e < 0 ? -v : e > t ? t + g : e));
      }
      if (i.centerInsufficientSlides) {
        let e = 0;
        if (
          (f.forEach((t) => {
            e += t + (E || 0);
          }),
          (e -= E),
          e < n)
        ) {
          const t = (n - e) / 2;
          h.forEach((e, s) => {
            h[s] = e - t;
          }),
            m.forEach((e, s) => {
              m[s] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: p,
          snapGrid: h,
          slidesGrid: m,
          slidesSizesGrid: f,
        }),
        i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
      ) {
        w(r, "--swiper-centered-offset-before", -h[0] + "px"),
          w(
            r,
            "--swiper-centered-offset-after",
            e.size / 2 - f[f.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + s));
      }
      if (
        (u !== c && e.emit("slidesLengthChange"),
        h.length !== S &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        m.length !== y && e.emit("slidesGridLengthChange"),
        i.watchSlidesProgress && e.updateSlidesOffset(),
        !(d || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
      ) {
        const t = `${i.containerModifierClass}backface-hidden`,
          s = e.el.classList.contains(t);
        u <= i.maxBackfaceHiddenSlides
          ? s || e.el.classList.add(t)
          : s && e.el.classList.remove(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        i = t.virtual && t.params.virtual.enabled;
      let r,
        a = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const n = (e) => (i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          (t.visibleSlides || []).forEach((e) => {
            s.push(e);
          });
        else
          for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
            const e = t.activeIndex + r;
            if (e > t.slides.length && !i) break;
            s.push(n(e));
          }
      else s.push(n(t.activeIndex));
      for (r = 0; r < s.length; r += 1)
        if (void 0 !== s[r]) {
          const e = s[r].offsetHeight;
          a = e > a ? e : a;
        }
      (a || 0 === a) && (t.wrapperEl.style.height = `${a}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides,
        s = e.isElement
          ? e.isHorizontal()
            ? e.wrapperEl.offsetLeft
            : e.wrapperEl.offsetTop
          : 0;
      for (let i = 0; i < t.length; i += 1)
        t[i].swiperSlideOffset =
          (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
          s -
          e.cssOverflowAdjustment();
    },
    updateSlidesProgress: function (e = (this && this.translate) || 0) {
      const t = this,
        s = t.params,
        { slides: i, rtlTranslate: r, snapGrid: a } = t;
      if (0 === i.length) return;
      void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
      let n = -e;
      r && (n = e),
        i.forEach((e) => {
          e.classList.remove(s.slideVisibleClass);
        }),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      let o = s.spaceBetween;
      "string" == typeof o && o.indexOf("%") >= 0
        ? (o = (parseFloat(o.replace("%", "")) / 100) * t.size)
        : "string" == typeof o && (o = parseFloat(o));
      for (let e = 0; e < i.length; e += 1) {
        const l = i[e];
        let d = l.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
        const c =
            (n + (s.centeredSlides ? t.minTranslate() : 0) - d) /
            (l.swiperSlideSize + o),
          p =
            (n - a[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) /
            (l.swiperSlideSize + o),
          u = -(n - d),
          h = u + t.slidesSizesGrid[e];
        ((u >= 0 && u < t.size - 1) ||
          (h > 1 && h <= t.size) ||
          (u <= 0 && h >= t.size)) &&
          (t.visibleSlides.push(l),
          t.visibleSlidesIndexes.push(e),
          i[e].classList.add(s.slideVisibleClass)),
          (l.progress = r ? -c : c),
          (l.originalProgress = r ? -p : p);
      }
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * s) || 0;
      }
      const s = t.params,
        i = t.maxTranslate() - t.minTranslate();
      let { progress: r, isBeginning: a, isEnd: n, progressLoop: o } = t;
      const l = a,
        d = n;
      if (0 === i) (r = 0), (a = !0), (n = !0);
      else {
        r = (e - t.minTranslate()) / i;
        const s = Math.abs(e - t.minTranslate()) < 1,
          o = Math.abs(e - t.maxTranslate()) < 1;
        (a = s || r <= 0), (n = o || r >= 1), s && (r = 0), o && (r = 1);
      }
      if (s.loop) {
        const s = t.getSlideIndexByData(0),
          i = t.getSlideIndexByData(t.slides.length - 1),
          r = t.slidesGrid[s],
          a = t.slidesGrid[i],
          n = t.slidesGrid[t.slidesGrid.length - 1],
          l = Math.abs(e);
        (o = l >= r ? (l - r) / n : (l + n - a) / n), o > 1 && (o -= 1);
      }
      Object.assign(t, {
        progress: r,
        progressLoop: o,
        isBeginning: a,
        isEnd: n,
      }),
        (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
          t.updateSlidesProgress(e),
        a && !l && t.emit("reachBeginning toEdge"),
        n && !d && t.emit("reachEnd toEdge"),
        ((l && !a) || (d && !n)) && t.emit("fromEdge"),
        t.emit("progress", r);
    },
    updateSlidesClasses: function () {
      const e = this,
        { slides: t, params: s, slidesEl: i, activeIndex: r } = e,
        a = e.virtual && s.virtual.enabled,
        n = (e) => b(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
      let o;
      if (
        (t.forEach((e) => {
          e.classList.remove(
            s.slideActiveClass,
            s.slideNextClass,
            s.slidePrevClass
          );
        }),
        a)
      )
        if (s.loop) {
          let t = r - e.virtual.slidesBefore;
          t < 0 && (t = e.virtual.slides.length + t),
            t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
            (o = n(`[data-swiper-slide-index="${t}"]`));
        } else o = n(`[data-swiper-slide-index="${r}"]`);
      else o = t[r];
      if (o) {
        o.classList.add(s.slideActiveClass);
        let e = (function (e, t) {
          const s = [];
          for (; e.nextElementSibling; ) {
            const i = e.nextElementSibling;
            t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
          }
          return s;
        })(o, `.${s.slideClass}, swiper-slide`)[0];
        s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass);
        let i = (function (e, t) {
          const s = [];
          for (; e.previousElementSibling; ) {
            const i = e.previousElementSibling;
            t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
          }
          return s;
        })(o, `.${s.slideClass}, swiper-slide`)[0];
        s.loop && 0 === !i && (i = t[t.length - 1]),
          i && i.classList.add(s.slidePrevClass);
      }
      e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
          snapGrid: i,
          params: r,
          activeIndex: a,
          realIndex: n,
          snapIndex: o,
        } = t;
      let l,
        d = e;
      const c = (e) => {
        let s = e - t.virtual.slidesBefore;
        return (
          s < 0 && (s = t.virtual.slides.length + s),
          s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
          s
        );
      };
      if (
        (void 0 === d &&
          (d = (function (e) {
            const { slidesGrid: t, params: s } = e,
              i = e.rtlTranslate ? e.translate : -e.translate;
            let r;
            for (let e = 0; e < t.length; e += 1)
              void 0 !== t[e + 1]
                ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                  ? (r = e)
                  : i >= t[e] && i < t[e + 1] && (r = e + 1)
                : i >= t[e] && (r = e);
            return (
              s.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r
            );
          })(t)),
        i.indexOf(s) >= 0)
      )
        l = i.indexOf(s);
      else {
        const e = Math.min(r.slidesPerGroupSkip, d);
        l = e + Math.floor((d - e) / r.slidesPerGroup);
      }
      if ((l >= i.length && (l = i.length - 1), d === a))
        return (
          l !== o && ((t.snapIndex = l), t.emit("snapIndexChange")),
          void (
            t.params.loop &&
            t.virtual &&
            t.params.virtual.enabled &&
            (t.realIndex = c(d))
          )
        );
      let p;
      (p =
        t.virtual && r.virtual.enabled && r.loop
          ? c(d)
          : t.slides[d]
          ? parseInt(
              t.slides[d].getAttribute("data-swiper-slide-index") || d,
              10
            )
          : d),
        Object.assign(t, {
          previousSnapIndex: o,
          snapIndex: l,
          previousRealIndex: n,
          realIndex: p,
          previousIndex: a,
          activeIndex: d,
        }),
        t.initialized && _(t),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        n !== p && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        s = t.params,
        i = e.closest(`.${s.slideClass}, swiper-slide`);
      let r,
        a = !1;
      if (i)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === i) {
            (a = !0), (r = e);
            break;
          }
      if (!i || !a)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = i),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              i.getAttribute("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = r),
        s.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  const G = {
    getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
      const { params: t, rtlTranslate: s, translate: i, wrapperEl: r } = this;
      if (t.virtualTranslate) return s ? -i : i;
      if (t.cssMode) return i;
      let a = f(r, e);
      return (a += this.cssOverflowAdjustment()), s && (a = -a), a || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
        { rtlTranslate: i, params: r, wrapperEl: a, progress: n } = s;
      let o,
        l = 0,
        d = 0;
      s.isHorizontal() ? (l = i ? -e : e) : (d = e),
        r.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
        (s.previousTranslate = s.translate),
        (s.translate = s.isHorizontal() ? l : d),
        r.cssMode
          ? (a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
              ? -l
              : -d)
          : r.virtualTranslate ||
            (s.isHorizontal()
              ? (l -= s.cssOverflowAdjustment())
              : (d -= s.cssOverflowAdjustment()),
            (a.style.transform = `translate3d(${l}px, ${d}px, 0px)`));
      const c = s.maxTranslate() - s.minTranslate();
      (o = 0 === c ? 0 : (e - s.minTranslate()) / c),
        o !== n && s.updateProgress(e),
        s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e = 0, t = this.params.speed, s = !0, i = !0, r) {
      const a = this,
        { params: n, wrapperEl: o } = a;
      if (a.animating && n.preventInteractionOnTransition) return !1;
      const l = a.minTranslate(),
        d = a.maxTranslate();
      let c;
      if (
        ((c = i && e > l ? l : i && e < d ? d : e),
        a.updateProgress(c),
        n.cssMode)
      ) {
        const e = a.isHorizontal();
        if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
        else {
          if (!a.support.smoothScroll)
            return (
              S({ swiper: a, targetPosition: -c, side: e ? "left" : "top" }), !0
            );
          o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (a.setTransition(0),
            a.setTranslate(c),
            s &&
              (a.emit("beforeTransitionStart", t, r), a.emit("transitionEnd")))
          : (a.setTransition(t),
            a.setTranslate(c),
            s &&
              (a.emit("beforeTransitionStart", t, r),
              a.emit("transitionStart")),
            a.animating ||
              ((a.animating = !0),
              a.onTranslateToWrapperTransitionEnd ||
                (a.onTranslateToWrapperTransitionEnd = function (e) {
                  a &&
                    !a.destroyed &&
                    e.target === this &&
                    (a.wrapperEl.removeEventListener(
                      "transitionend",
                      a.onTranslateToWrapperTransitionEnd
                    ),
                    (a.onTranslateToWrapperTransitionEnd = null),
                    delete a.onTranslateToWrapperTransitionEnd,
                    s && a.emit("transitionEnd"));
                }),
              a.wrapperEl.addEventListener(
                "transitionend",
                a.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function D({ swiper: e, runCallbacks: t, direction: s, step: i }) {
    const { activeIndex: r, previousIndex: a } = e;
    let n = s;
    if (
      (n || (n = r > a ? "next" : r < a ? "prev" : "reset"),
      e.emit(`transition${i}`),
      t && r !== a)
    ) {
      if ("reset" === n) return void e.emit(`slideResetTransition${i}`);
      e.emit(`slideChangeTransition${i}`),
        "next" === n
          ? e.emit(`slideNextTransition${i}`)
          : e.emit(`slidePrevTransition${i}`);
    }
  }
  const B = {
    slideTo: function (e = 0, t = this.params.speed, s = !0, i, r) {
      "string" == typeof e && (e = parseInt(e, 10));
      const a = this;
      let n = e;
      n < 0 && (n = 0);
      const {
        params: o,
        snapGrid: l,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: p,
        rtlTranslate: u,
        wrapperEl: h,
        enabled: m,
      } = a;
      if ((a.animating && o.preventInteractionOnTransition) || (!m && !i && !r))
        return !1;
      const f = Math.min(a.params.slidesPerGroupSkip, n);
      let v = f + Math.floor((n - f) / a.params.slidesPerGroup);
      v >= l.length && (v = l.length - 1);
      const g = -l[v];
      if (o.normalizeSlideIndex)
        for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * g),
            s = Math.floor(100 * d[e]),
            i = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1]
            ? t >= s && t < i - (i - s) / 2
              ? (n = e)
              : t >= s && t < i && (n = e + 1)
            : t >= s && (n = e);
        }
      if (a.initialized && n !== p) {
        if (!a.allowSlideNext && g < a.translate && g < a.minTranslate())
          return !1;
        if (
          !a.allowSlidePrev &&
          g > a.translate &&
          g > a.maxTranslate() &&
          (p || 0) !== n
        )
          return !1;
      }
      let w;
      if (
        (n !== (c || 0) && s && a.emit("beforeSlideChangeStart"),
        a.updateProgress(g),
        (w = n > p ? "next" : n < p ? "prev" : "reset"),
        (u && -g === a.translate) || (!u && g === a.translate))
      )
        return (
          a.updateActiveIndex(n),
          o.autoHeight && a.updateAutoHeight(),
          a.updateSlidesClasses(),
          "slide" !== o.effect && a.setTranslate(g),
          "reset" !== w && (a.transitionStart(s, w), a.transitionEnd(s, w)),
          !1
        );
      if (o.cssMode) {
        const e = a.isHorizontal(),
          s = u ? g : -g;
        if (0 === t) {
          const t = a.virtual && a.params.virtual.enabled;
          t &&
            ((a.wrapperEl.style.scrollSnapType = "none"),
            (a._immediateVirtual = !0)),
            t && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0
              ? ((a._cssModeVirtualInitialSet = !0),
                requestAnimationFrame(() => {
                  h[e ? "scrollLeft" : "scrollTop"] = s;
                }))
              : (h[e ? "scrollLeft" : "scrollTop"] = s),
            t &&
              requestAnimationFrame(() => {
                (a.wrapperEl.style.scrollSnapType = ""),
                  (a._immediateVirtual = !1);
              });
        } else {
          if (!a.support.smoothScroll)
            return (
              S({ swiper: a, targetPosition: s, side: e ? "left" : "top" }), !0
            );
          h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
        }
        return !0;
      }
      return (
        a.setTransition(t),
        a.setTranslate(g),
        a.updateActiveIndex(n),
        a.updateSlidesClasses(),
        a.emit("beforeTransitionStart", t, i),
        a.transitionStart(s, w),
        0 === t
          ? a.transitionEnd(s, w)
          : a.animating ||
            ((a.animating = !0),
            a.onSlideToWrapperTransitionEnd ||
              (a.onSlideToWrapperTransitionEnd = function (e) {
                a &&
                  !a.destroyed &&
                  e.target === this &&
                  (a.wrapperEl.removeEventListener(
                    "transitionend",
                    a.onSlideToWrapperTransitionEnd
                  ),
                  (a.onSlideToWrapperTransitionEnd = null),
                  delete a.onSlideToWrapperTransitionEnd,
                  a.transitionEnd(s, w));
              }),
            a.wrapperEl.addEventListener(
              "transitionend",
              a.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
      if ("string" == typeof e) {
        e = parseInt(e, 10);
      }
      const r = this;
      let a = e;
      return (
        r.params.loop &&
          (r.virtual && r.params.virtual.enabled
            ? (a += r.virtual.slidesBefore)
            : (a = r.getSlideIndexByData(a))),
        r.slideTo(a, t, s, i)
      );
    },
    slideNext: function (e = this.params.speed, t = !0, s) {
      const i = this,
        { enabled: r, params: a, animating: n } = i;
      if (!r) return i;
      let o = a.slidesPerGroup;
      "auto" === a.slidesPerView &&
        1 === a.slidesPerGroup &&
        a.slidesPerGroupAuto &&
        (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
      const l = i.activeIndex < a.slidesPerGroupSkip ? 1 : o,
        d = i.virtual && a.virtual.enabled;
      if (a.loop) {
        if (n && !d && a.loopPreventsSliding) return !1;
        i.loopFix({ direction: "next" }),
          (i._clientLeft = i.wrapperEl.clientLeft);
      }
      return a.rewind && i.isEnd
        ? i.slideTo(0, e, t, s)
        : i.slideTo(i.activeIndex + l, e, t, s);
    },
    slidePrev: function (e = this.params.speed, t = !0, s) {
      const i = this,
        {
          params: r,
          snapGrid: a,
          slidesGrid: n,
          rtlTranslate: o,
          enabled: l,
          animating: d,
        } = i;
      if (!l) return i;
      const c = i.virtual && r.virtual.enabled;
      if (r.loop) {
        if (d && !c && r.loopPreventsSliding) return !1;
        i.loopFix({ direction: "prev" }),
          (i._clientLeft = i.wrapperEl.clientLeft);
      }
      function p(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const u = p(o ? i.translate : -i.translate),
        h = a.map((e) => p(e));
      let m = a[h.indexOf(u) - 1];
      if (void 0 === m && r.cssMode) {
        let e;
        a.forEach((t, s) => {
          u >= t && (e = s);
        }),
          void 0 !== e && (m = a[e > 0 ? e - 1 : e]);
      }
      let f = 0;
      if (
        (void 0 !== m &&
          ((f = n.indexOf(m)),
          f < 0 && (f = i.activeIndex - 1),
          "auto" === r.slidesPerView &&
            1 === r.slidesPerGroup &&
            r.slidesPerGroupAuto &&
            ((f = f - i.slidesPerViewDynamic("previous", !0) + 1),
            (f = Math.max(f, 0)))),
        r.rewind && i.isBeginning)
      ) {
        const r =
          i.params.virtual && i.params.virtual.enabled && i.virtual
            ? i.virtual.slides.length - 1
            : i.slides.length - 1;
        return i.slideTo(r, e, t, s);
      }
      return i.slideTo(f, e, t, s);
    },
    slideReset: function (e = this.params.speed, t = !0, s) {
      return this.slideTo(this.activeIndex, e, t, s);
    },
    slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
      const r = this;
      let a = r.activeIndex;
      const n = Math.min(r.params.slidesPerGroupSkip, a),
        o = n + Math.floor((a - n) / r.params.slidesPerGroup),
        l = r.rtlTranslate ? r.translate : -r.translate;
      if (l >= r.snapGrid[o]) {
        const e = r.snapGrid[o];
        l - e > (r.snapGrid[o + 1] - e) * i && (a += r.params.slidesPerGroup);
      } else {
        const e = r.snapGrid[o - 1];
        l - e <= (r.snapGrid[o] - e) * i && (a -= r.params.slidesPerGroup);
      }
      return (
        (a = Math.max(a, 0)),
        (a = Math.min(a, r.slidesGrid.length - 1)),
        r.slideTo(a, e, t, s)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, slidesEl: s } = e,
        i =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let r,
        a = e.clickedIndex;
      const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
      if (t.loop) {
        if (e.animating) return;
        (r = parseInt(
          e.clickedSlide.getAttribute("data-swiper-slide-index"),
          10
        )),
          t.centeredSlides
            ? a < e.loopedSlides - i / 2 ||
              a > e.slides.length - e.loopedSlides + i / 2
              ? (e.loopFix(),
                (a = e.getSlideIndex(
                  b(s, `${n}[data-swiper-slide-index="${r}"]`)[0]
                )),
                h(() => {
                  e.slideTo(a);
                }))
              : e.slideTo(a)
            : a > e.slides.length - i
            ? (e.loopFix(),
              (a = e.getSlideIndex(
                b(s, `${n}[data-swiper-slide-index="${r}"]`)[0]
              )),
              h(() => {
                e.slideTo(a);
              }))
            : e.slideTo(a);
      } else e.slideTo(a);
    },
  };
  const V = {
    loopCreate: function (e) {
      const t = this,
        { params: s, slidesEl: i } = t;
      if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
      b(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
        e.setAttribute("data-swiper-slide-index", t);
      }),
        t.loopFix({
          slideRealIndex: e,
          direction: s.centeredSlides ? void 0 : "next",
        });
    },
    loopFix: function ({
      slideRealIndex: e,
      slideTo: t = !0,
      direction: s,
      setTranslate: i,
      activeSlideIndex: r,
      byController: a,
      byMousewheel: n,
    } = {}) {
      const o = this;
      if (!o.params.loop) return;
      o.emit("beforeLoopFix");
      const {
        slides: l,
        allowSlidePrev: d,
        allowSlideNext: c,
        slidesEl: p,
        params: u,
      } = o;
      if (
        ((o.allowSlidePrev = !0),
        (o.allowSlideNext = !0),
        o.virtual && u.virtual.enabled)
      )
        return (
          t &&
            (u.centeredSlides || 0 !== o.snapIndex
              ? u.centeredSlides && o.snapIndex < u.slidesPerView
                ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
                : o.snapIndex === o.snapGrid.length - 1 &&
                  o.slideTo(o.virtual.slidesBefore, 0, !1, !0)
              : o.slideTo(o.virtual.slides.length, 0, !1, !0)),
          (o.allowSlidePrev = d),
          (o.allowSlideNext = c),
          void o.emit("loopFix")
        );
      const h =
        "auto" === u.slidesPerView
          ? o.slidesPerViewDynamic()
          : Math.ceil(parseFloat(u.slidesPerView, 10));
      let m = u.loopedSlides || h;
      m % u.slidesPerGroup != 0 &&
        (m += u.slidesPerGroup - (m % u.slidesPerGroup)),
        (o.loopedSlides = m);
      const f = [],
        v = [];
      let g = o.activeIndex;
      void 0 === r
        ? (r = o.getSlideIndex(
            o.slides.filter((e) => e.classList.contains(u.slideActiveClass))[0]
          ))
        : (g = r);
      const w = "next" === s || !s,
        S = "prev" === s || !s;
      let b = 0,
        T = 0;
      if (r < m) {
        b = Math.max(m - r, u.slidesPerGroup);
        for (let e = 0; e < m - r; e += 1) {
          const t = e - Math.floor(e / l.length) * l.length;
          f.push(l.length - t - 1);
        }
      } else if (r > o.slides.length - 2 * m) {
        T = Math.max(r - (o.slides.length - 2 * m), u.slidesPerGroup);
        for (let e = 0; e < T; e += 1) {
          const t = e - Math.floor(e / l.length) * l.length;
          v.push(t);
        }
      }
      if (
        (S &&
          f.forEach((e) => {
            (o.slides[e].swiperLoopMoveDOM = !0),
              p.prepend(o.slides[e]),
              (o.slides[e].swiperLoopMoveDOM = !1);
          }),
        w &&
          v.forEach((e) => {
            (o.slides[e].swiperLoopMoveDOM = !0),
              p.append(o.slides[e]),
              (o.slides[e].swiperLoopMoveDOM = !1);
          }),
        o.recalcSlides(),
        "auto" === u.slidesPerView && o.updateSlides(),
        u.watchSlidesProgress && o.updateSlidesOffset(),
        t)
      )
        if (f.length > 0 && S)
          if (void 0 === e) {
            const e = o.slidesGrid[g],
              t = o.slidesGrid[g + b] - e;
            n
              ? o.setTranslate(o.translate - t)
              : (o.slideTo(g + b, 0, !1, !0),
                i && (o.touches[o.isHorizontal() ? "startX" : "startY"] += t));
          } else i && o.slideToLoop(e, 0, !1, !0);
        else if (v.length > 0 && w)
          if (void 0 === e) {
            const e = o.slidesGrid[g],
              t = o.slidesGrid[g - T] - e;
            n
              ? o.setTranslate(o.translate - t)
              : (o.slideTo(g - T, 0, !1, !0),
                i && (o.touches[o.isHorizontal() ? "startX" : "startY"] += t));
          } else o.slideToLoop(e, 0, !1, !0);
      if (
        ((o.allowSlidePrev = d),
        (o.allowSlideNext = c),
        o.controller && o.controller.control && !a)
      ) {
        const t = {
          slideRealIndex: e,
          slideTo: !1,
          direction: s,
          setTranslate: i,
          activeSlideIndex: r,
          byController: !0,
        };
        Array.isArray(o.controller.control)
          ? o.controller.control.forEach((e) => {
              !e.destroyed && e.params.loop && e.loopFix(t);
            })
          : o.controller.control instanceof o.constructor &&
            o.controller.control.params.loop &&
            o.controller.control.loopFix(t);
      }
      o.emit("loopFix");
    },
    loopDestroy: function () {
      const e = this,
        { params: t, slidesEl: s } = e;
      if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
      e.recalcSlides();
      const i = [];
      e.slides.forEach((e) => {
        const t =
          void 0 === e.swiperSlideIndex
            ? 1 * e.getAttribute("data-swiper-slide-index")
            : e.swiperSlideIndex;
        i[t] = e;
      }),
        e.slides.forEach((e) => {
          e.removeAttribute("data-swiper-slide-index");
        }),
        i.forEach((e) => {
          s.append(e);
        }),
        e.recalcSlides(),
        e.slideTo(e.realIndex, 0);
    },
  };
  function $(e) {
    const t = this,
      s = c(),
      i = u(),
      r = t.touchEventsData;
    r.evCache.push(e);
    const { params: a, touches: n, enabled: o } = t;
    if (!o) return;
    if (!a.simulateTouch && "mouse" === e.pointerType) return;
    if (t.animating && a.preventInteractionOnTransition) return;
    !t.animating && a.cssMode && a.loop && t.loopFix();
    let l = e;
    l.originalEvent && (l = l.originalEvent);
    let d = l.target;
    if ("wrapper" === a.touchEventsTarget && !t.wrapperEl.contains(d)) return;
    if ("which" in l && 3 === l.which) return;
    if ("button" in l && l.button > 0) return;
    if (r.isTouched && r.isMoved) return;
    const p = !!a.noSwipingClass && "" !== a.noSwipingClass,
      h = e.composedPath ? e.composedPath() : e.path;
    p && l.target && l.target.shadowRoot && h && (d = h[0]);
    const f = a.noSwipingSelector
        ? a.noSwipingSelector
        : `.${a.noSwipingClass}`,
      v = !(!l.target || !l.target.shadowRoot);
    if (
      a.noSwiping &&
      (v
        ? (function (e, t = this) {
            return (function t(s) {
              if (!s || s === c() || s === u()) return null;
              s.assignedSlot && (s = s.assignedSlot);
              const i = s.closest(e);
              return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
            })(t);
          })(f, d)
        : d.closest(f))
    )
      return void (t.allowClick = !0);
    if (a.swipeHandler && !d.closest(a.swipeHandler)) return;
    (n.currentX = l.pageX), (n.currentY = l.pageY);
    const g = n.currentX,
      w = n.currentY,
      S = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
      b = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
    if (S && (g <= b || g >= i.innerWidth - b)) {
      if ("prevent" !== S) return;
      e.preventDefault();
    }
    Object.assign(r, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (n.startX = g),
      (n.startY = w),
      (r.touchStartTime = m()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      a.threshold > 0 && (r.allowThresholdMove = !1);
    let T = !0;
    d.matches(r.focusableElements) &&
      ((T = !1), "SELECT" === d.nodeName && (r.isTouched = !1)),
      s.activeElement &&
        s.activeElement.matches(r.focusableElements) &&
        s.activeElement !== d &&
        s.activeElement.blur();
    const y = T && t.allowTouchMove && a.touchStartPreventDefault;
    (!a.touchStartForcePreventDefault && !y) ||
      d.isContentEditable ||
      l.preventDefault(),
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !a.cssMode &&
        t.freeMode.onTouchStart(),
      t.emit("touchStart", l);
  }
  function F(e) {
    const t = c(),
      s = this,
      i = s.touchEventsData,
      { params: r, touches: a, rtlTranslate: n, enabled: o } = s;
    if (!o) return;
    if (!r.simulateTouch && "mouse" === e.pointerType) return;
    let l = e;
    if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
      return void (
        i.startMoving &&
        i.isScrolling &&
        s.emit("touchMoveOpposite", l)
      );
    const d = i.evCache.findIndex((e) => e.pointerId === l.pointerId);
    d >= 0 && (i.evCache[d] = l);
    const p = i.evCache.length > 1 ? i.evCache[0] : l,
      u = p.pageX,
      h = p.pageY;
    if (l.preventedByNestedSwiper) return (a.startX = u), void (a.startY = h);
    if (!s.allowTouchMove)
      return (
        l.target.matches(i.focusableElements) || (s.allowClick = !1),
        void (
          i.isTouched &&
          (Object.assign(a, {
            startX: u,
            startY: h,
            prevX: s.touches.currentX,
            prevY: s.touches.currentY,
            currentX: u,
            currentY: h,
          }),
          (i.touchStartTime = m()))
        )
      );
    if (r.touchReleaseOnEdges && !r.loop)
      if (s.isVertical()) {
        if (
          (h < a.startY && s.translate <= s.maxTranslate()) ||
          (h > a.startY && s.translate >= s.minTranslate())
        )
          return (i.isTouched = !1), void (i.isMoved = !1);
      } else if (
        (u < a.startX && s.translate <= s.maxTranslate()) ||
        (u > a.startX && s.translate >= s.minTranslate())
      )
        return;
    if (
      t.activeElement &&
      l.target === t.activeElement &&
      l.target.matches(i.focusableElements)
    )
      return (i.isMoved = !0), void (s.allowClick = !1);
    if (
      (i.allowTouchCallbacks && s.emit("touchMove", l),
      l.targetTouches && l.targetTouches.length > 1)
    )
      return;
    (a.currentX = u), (a.currentY = h);
    const f = a.currentX - a.startX,
      v = a.currentY - a.startY;
    if (s.params.threshold && Math.sqrt(f ** 2 + v ** 2) < s.params.threshold)
      return;
    if (void 0 === i.isScrolling) {
      let e;
      (s.isHorizontal() && a.currentY === a.startY) ||
      (s.isVertical() && a.currentX === a.startX)
        ? (i.isScrolling = !1)
        : f * f + v * v >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(v), Math.abs(f))) / Math.PI),
          (i.isScrolling = s.isHorizontal()
            ? e > r.touchAngle
            : 90 - e > r.touchAngle));
    }
    if (
      (i.isScrolling && s.emit("touchMoveOpposite", l),
      void 0 === i.startMoving &&
        ((a.currentX === a.startX && a.currentY === a.startY) ||
          (i.startMoving = !0)),
      i.isScrolling ||
        (s.zoom &&
          s.params.zoom &&
          s.params.zoom.enabled &&
          i.evCache.length > 1))
    )
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    (s.allowClick = !1),
      !r.cssMode && l.cancelable && l.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && l.stopPropagation();
    let g = s.isHorizontal() ? f : v,
      w = s.isHorizontal()
        ? a.currentX - a.previousX
        : a.currentY - a.previousY;
    r.oneWayMovement &&
      ((g = Math.abs(g) * (n ? 1 : -1)), (w = Math.abs(w) * (n ? 1 : -1))),
      (a.diff = g),
      (g *= r.touchRatio),
      n && ((g = -g), (w = -w));
    const S = s.touchesDirection;
    (s.swipeDirection = g > 0 ? "prev" : "next"),
      (s.touchesDirection = w > 0 ? "prev" : "next");
    const b = s.params.loop && !r.cssMode;
    if (!i.isMoved) {
      if (
        (b && s.loopFix({ direction: s.swipeDirection }),
        (i.startTranslate = s.getTranslate()),
        s.setTransition(0),
        s.animating)
      ) {
        const e = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
        });
        s.wrapperEl.dispatchEvent(e);
      }
      (i.allowMomentumBounce = !1),
        !r.grabCursor ||
          (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
          s.setGrabCursor(!0),
        s.emit("sliderFirstMove", l);
    }
    let T;
    i.isMoved &&
      S !== s.touchesDirection &&
      b &&
      Math.abs(g) >= 1 &&
      (s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }), (T = !0)),
      s.emit("sliderMove", l),
      (i.isMoved = !0),
      (i.currentTranslate = g + i.startTranslate);
    let y = !0,
      x = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (x = 0),
      g > 0
        ? (b &&
            !T &&
            i.currentTranslate >
              (r.centeredSlides
                ? s.minTranslate() - s.size / 2
                : s.minTranslate()) &&
            s.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          i.currentTranslate > s.minTranslate() &&
            ((y = !1),
            r.resistance &&
              (i.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + i.startTranslate + g) ** x)))
        : g < 0 &&
          (b &&
            !T &&
            i.currentTranslate <
              (r.centeredSlides
                ? s.maxTranslate() + s.size / 2
                : s.maxTranslate()) &&
            s.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                s.slides.length -
                ("auto" === r.slidesPerView
                  ? s.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(r.slidesPerView, 10))),
            }),
          i.currentTranslate < s.maxTranslate() &&
            ((y = !1),
            r.resistance &&
              (i.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - i.startTranslate - g) ** x))),
      y && (l.preventedByNestedSwiper = !0),
      !s.allowSlideNext &&
        "next" === s.swipeDirection &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev &&
        "prev" === s.swipeDirection &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      s.allowSlidePrev ||
        s.allowSlideNext ||
        (i.currentTranslate = i.startTranslate),
      r.threshold > 0)
    ) {
      if (!(Math.abs(g) > r.threshold || i.allowThresholdMove))
        return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (a.startX = a.currentX),
          (a.startY = a.currentY),
          (i.currentTranslate = i.startTranslate),
          void (a.diff = s.isHorizontal()
            ? a.currentX - a.startX
            : a.currentY - a.startY)
        );
    }
    r.followFinger &&
      !r.cssMode &&
      (((r.freeMode && r.freeMode.enabled && s.freeMode) ||
        r.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
      s.params.freeMode &&
        r.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
      s.updateProgress(i.currentTranslate),
      s.setTranslate(i.currentTranslate));
  }
  function H(e) {
    const t = this,
      s = t.touchEventsData,
      i = s.evCache.findIndex((t) => t.pointerId === e.pointerId);
    if (
      (i >= 0 && s.evCache.splice(i, 1),
      ["pointercancel", "pointerout", "pointerleave"].includes(e.type))
    ) {
      if (
        !(
          "pointercancel" === e.type &&
          (t.browser.isSafari || t.browser.isWebView)
        )
      )
        return;
    }
    const {
      params: r,
      touches: a,
      rtlTranslate: n,
      slidesGrid: o,
      enabled: l,
    } = t;
    if (!l) return;
    if (!r.simulateTouch && "mouse" === e.pointerType) return;
    let d = e;
    if (
      (d.originalEvent && (d = d.originalEvent),
      s.allowTouchCallbacks && t.emit("touchEnd", d),
      (s.allowTouchCallbacks = !1),
      !s.isTouched)
    )
      return (
        s.isMoved && r.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        void (s.startMoving = !1)
      );
    r.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const c = m(),
      p = c - s.touchStartTime;
    if (t.allowClick) {
      const e = d.path || (d.composedPath && d.composedPath());
      t.updateClickedSlide((e && e[0]) || d.target),
        t.emit("tap click", d),
        p < 300 &&
          c - s.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", d);
    }
    if (
      ((s.lastClickTime = m()),
      h(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        0 === a.diff ||
        s.currentTranslate === s.startTranslate)
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let u;
    if (
      ((s.isTouched = !1),
      (s.isMoved = !1),
      (s.startMoving = !1),
      (u = r.followFinger
        ? n
          ? t.translate
          : -t.translate
        : -s.currentTranslate),
      r.cssMode)
    )
      return;
    if (t.params.freeMode && r.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: u });
    let f = 0,
      v = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < o.length;
      e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
    ) {
      const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      void 0 !== o[e + t]
        ? u >= o[e] && u < o[e + t] && ((f = e), (v = o[e + t] - o[e]))
        : u >= o[e] && ((f = e), (v = o[o.length - 1] - o[o.length - 2]));
    }
    let g = null,
      w = null;
    r.rewind &&
      (t.isBeginning
        ? (w =
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (g = 0));
    const S = (u - o[f]) / v,
      b = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    if (p > r.longSwipesMs) {
      if (!r.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (S >= r.longSwipesRatio
          ? t.slideTo(r.rewind && t.isEnd ? g : f + b)
          : t.slideTo(f)),
        "prev" === t.swipeDirection &&
          (S > 1 - r.longSwipesRatio
            ? t.slideTo(f + b)
            : null !== w && S < 0 && Math.abs(S) > r.longSwipesRatio
            ? t.slideTo(w)
            : t.slideTo(f));
    } else {
      if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl)
        ? d.target === t.navigation.nextEl
          ? t.slideTo(f + b)
          : t.slideTo(f)
        : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : f + b),
          "prev" === t.swipeDirection && t.slideTo(null !== w ? w : f));
    }
  }
  function N() {
    const e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: r, snapGrid: a } = e,
      n = e.virtual && e.params.virtual.enabled;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses();
    const o = n && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
    !e.isEnd ||
    e.isBeginning ||
    e.params.centeredSlides ||
    o
      ? e.params.loop && !n
        ? e.slideToLoop(e.realIndex, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0)
      : e.slideTo(e.slides.length - 1, 0, !1, !0),
      e.autoplay &&
        e.autoplay.running &&
        e.autoplay.paused &&
        (clearTimeout(e.autoplay.resizeTimeout),
        (e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.resume();
        }, 500))),
      (e.allowSlidePrev = r),
      (e.allowSlideNext = i),
      e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
  }
  function j(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function q() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
    if (!i) return;
    let r;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const a = e.maxTranslate() - e.minTranslate();
    (r = 0 === a ? 0 : (e.translate - e.minTranslate()) / a),
      r !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  function R(e) {
    const t = this;
    I(t, e.target),
      t.params.cssMode ||
        ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
        t.update();
  }
  let W = !1;
  function Y() {}
  const X = (e, t) => {
    const s = c(),
      { params: i, el: r, wrapperEl: a, device: n } = e,
      o = !!i.nested,
      l = "on" === t ? "addEventListener" : "removeEventListener",
      d = t;
    r[l]("pointerdown", e.onTouchStart, { passive: !1 }),
      s[l]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
      s[l]("pointerup", e.onTouchEnd, { passive: !0 }),
      s[l]("pointercancel", e.onTouchEnd, { passive: !0 }),
      s[l]("pointerout", e.onTouchEnd, { passive: !0 }),
      s[l]("pointerleave", e.onTouchEnd, { passive: !0 }),
      (i.preventClicks || i.preventClicksPropagation) &&
        r[l]("click", e.onClick, !0),
      i.cssMode && a[l]("scroll", e.onScroll),
      i.updateOnWindowResize
        ? e[d](
            n.ios || n.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            N,
            !0
          )
        : e[d]("observerUpdate", N, !0),
      r[l]("load", e.onLoad, { capture: !0 });
  };
  const U = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  const K = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function Q(e, t) {
    return function (s = {}) {
      const i = Object.keys(s)[0],
        r = s[i];
      "object" == typeof r && null !== r
        ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
            !0 === e[i] &&
            (e[i] = { auto: !0 }),
          i in e && "enabled" in r
            ? (!0 === e[i] && (e[i] = { enabled: !0 }),
              "object" != typeof e[i] ||
                "enabled" in e[i] ||
                (e[i].enabled = !0),
              e[i] || (e[i] = { enabled: !1 }),
              g(t, s))
            : g(t, s))
        : g(t, s);
    };
  }
  const J = {
      eventsEmitter: k,
      update: z,
      translate: G,
      transition: {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`),
            s.emit("setTransition", e, t);
        },
        transitionStart: function (e = !0, t) {
          const s = this,
            { params: i } = s;
          i.cssMode ||
            (i.autoHeight && s.updateAutoHeight(),
            D({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e = !0, t) {
          const s = this,
            { params: i } = s;
          (s.animating = !1),
            i.cssMode ||
              (s.setTransition(0),
              D({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: B,
      loop: V,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const s =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          t.isElement && (t.__preventObserver__ = !0),
            (s.style.cursor = "move"),
            (s.style.cursor = e ? "grabbing" : "grab"),
            t.isElement &&
              requestAnimationFrame(() => {
                t.__preventObserver__ = !1;
              });
        },
        unsetGrabCursor: function () {
          const e = this;
          (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e.isElement && (e.__preventObserver__ = !0),
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = ""),
            e.isElement &&
              requestAnimationFrame(() => {
                e.__preventObserver__ = !1;
              }));
        },
      },
      events: {
        attachEvents: function () {
          const e = this,
            t = c(),
            { params: s } = e;
          (e.onTouchStart = $.bind(e)),
            (e.onTouchMove = F.bind(e)),
            (e.onTouchEnd = H.bind(e)),
            s.cssMode && (e.onScroll = q.bind(e)),
            (e.onClick = j.bind(e)),
            (e.onLoad = R.bind(e)),
            W || (t.addEventListener("touchstart", Y), (W = !0)),
            X(e, "on");
        },
        detachEvents: function () {
          X(this, "off");
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          const e = this,
            { realIndex: t, initialized: s, params: i, el: r } = e,
            a = i.breakpoints;
          if (!a || (a && 0 === Object.keys(a).length)) return;
          const n = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
          if (!n || e.currentBreakpoint === n) return;
          const o = (n in a ? a[n] : void 0) || e.originalParams,
            l = U(e, i),
            d = U(e, o),
            c = i.enabled;
          l && !d
            ? (r.classList.remove(
                `${i.containerModifierClass}grid`,
                `${i.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !l &&
              d &&
              (r.classList.add(`${i.containerModifierClass}grid`),
              ((o.grid.fill && "column" === o.grid.fill) ||
                (!o.grid.fill && "column" === i.grid.fill)) &&
                r.classList.add(`${i.containerModifierClass}grid-column`),
              e.emitContainerClasses()),
            ["navigation", "pagination", "scrollbar"].forEach((t) => {
              const s = i[t] && i[t].enabled,
                r = o[t] && o[t].enabled;
              s && !r && e[t].disable(), !s && r && e[t].enable();
            });
          const p = o.direction && o.direction !== i.direction,
            u = i.loop && (o.slidesPerView !== i.slidesPerView || p);
          p && s && e.changeDirection(), g(e.params, o);
          const h = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            c && !h ? e.disable() : !c && h && e.enable(),
            (e.currentBreakpoint = n),
            e.emit("_beforeBreakpoint", o),
            u && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
            e.emit("breakpoint", o);
        },
        getBreakpoint: function (e, t = "window", s) {
          if (!e || ("container" === t && !s)) return;
          let i = !1;
          const r = u(),
            a = "window" === t ? r.innerHeight : s.clientHeight,
            n = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: a * t, point: e };
              }
              return { value: e, point: e };
            });
          n.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < n.length; e += 1) {
            const { point: a, value: o } = n[e];
            "window" === t
              ? r.matchMedia(`(min-width: ${o}px)`).matches && (i = a)
              : o <= s.clientWidth && (i = a);
          }
          return i || "max";
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: s } = e,
            { slidesOffsetBefore: i } = s;
          if (i) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: {
        addClasses: function () {
          const e = this,
            { classNames: t, params: s, rtl: i, el: r, device: a } = e,
            n = (function (e, t) {
              const s = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((i) => {
                        e[i] && s.push(t + i);
                      })
                    : "string" == typeof e && s.push(t + e);
                }),
                s
              );
            })(
              [
                "initialized",
                s.direction,
                { "free-mode": e.params.freeMode && s.freeMode.enabled },
                { autoheight: s.autoHeight },
                { rtl: i },
                { grid: s.grid && s.grid.rows > 1 },
                {
                  "grid-column":
                    s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                },
                { android: a.android },
                { ios: a.ios },
                { "css-mode": s.cssMode },
                { centered: s.cssMode && s.centeredSlides },
                { "watch-progress": s.watchSlidesProgress },
              ],
              s.containerModifierClass
            );
          t.push(...n), r.classList.add(...t), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { el: e, classNames: t } = this;
          e.classList.remove(...t), this.emitContainerClasses();
        },
      },
    },
    Z = {};
  class ee {
    constructor(...e) {
      let t, s;
      1 === e.length &&
      e[0].constructor &&
      "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
        ? (s = e[0])
        : ([t, s] = e),
        s || (s = {}),
        (s = g({}, s)),
        t && !s.el && (s.el = t);
      const i = c();
      if (
        s.el &&
        "string" == typeof s.el &&
        i.querySelectorAll(s.el).length > 1
      ) {
        const e = [];
        return (
          i.querySelectorAll(s.el).forEach((t) => {
            const i = g({}, s, { el: t });
            e.push(new ee(i));
          }),
          e
        );
      }
      const r = this;
      (r.__swiper__ = !0),
        (r.support = P()),
        (r.device = L({ userAgent: s.userAgent })),
        (r.browser = A()),
        (r.eventsListeners = {}),
        (r.eventsAnyListeners = []),
        (r.modules = [...r.__modules__]),
        s.modules && Array.isArray(s.modules) && r.modules.push(...s.modules);
      const a = {};
      r.modules.forEach((e) => {
        e({
          params: s,
          swiper: r,
          extendParams: Q(s, a),
          on: r.on.bind(r),
          once: r.once.bind(r),
          off: r.off.bind(r),
          emit: r.emit.bind(r),
        });
      });
      const n = g({}, K, a);
      return (
        (r.params = g({}, n, Z, s)),
        (r.originalParams = g({}, r.params)),
        (r.passedParams = g({}, s)),
        r.params &&
          r.params.on &&
          Object.keys(r.params.on).forEach((e) => {
            r.on(e, r.params.on[e]);
          }),
        r.params && r.params.onAny && r.onAny(r.params.onAny),
        Object.assign(r, {
          enabled: r.params.enabled,
          el: t,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === r.params.direction,
          isVertical: () => "vertical" === r.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: r.params.allowSlideNext,
          allowSlidePrev: r.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: r.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            evCache: [],
          },
          allowClick: !0,
          allowTouchMove: r.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        r.emit("_swiper"),
        r.params.init && r.init(),
        r
      );
    }
    getSlideIndex(e) {
      const { slidesEl: t, params: s } = this,
        i = y(b(t, `.${s.slideClass}, swiper-slide`)[0]);
      return y(e) - i;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(
        this.slides.filter(
          (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
        )[0]
      );
    }
    recalcSlides() {
      const { slidesEl: e, params: t } = this;
      this.slides = b(e, `.${t.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const i = s.minTranslate(),
        r = (s.maxTranslate() - i) * e + i;
      s.translateTo(r, void 0 === t ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((s) => {
        const i = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e = "current", t = !1) {
      const {
        params: s,
        slides: i,
        slidesGrid: r,
        slidesSizesGrid: a,
        size: n,
        activeIndex: o,
      } = this;
      let l = 1;
      if (s.centeredSlides) {
        let e,
          t = i[o].swiperSlideSize;
        for (let s = o + 1; s < i.length; s += 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (l += 1), t > n && (e = !0));
        for (let s = o - 1; s >= 0; s -= 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (l += 1), t > n && (e = !0));
      } else if ("current" === e)
        for (let e = o + 1; e < i.length; e += 1) {
          (t ? r[e] + a[e] - r[o] < n : r[e] - r[o] < n) && (l += 1);
        }
      else
        for (let e = o - 1; e >= 0; e -= 1) {
          r[o] - r[e] < n && (l += 1);
        }
      return l;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;
      function i() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let r;
      if (
        (s.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
          t.complete && I(e, t);
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled)
      )
        i(), e.params.autoHeight && e.updateAutoHeight();
      else {
        if (
          ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) &&
          e.isEnd &&
          !e.params.centeredSlides
        ) {
          const t =
            e.virtual && e.params.virtual.enabled ? e.virtual.slides : e.slides;
          r = e.slideTo(t.length - 1, 0, !1, !0);
        } else r = e.slideTo(e.activeIndex, 0, !1, !0);
        r || i();
      }
      s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t = !0) {
      const s = this,
        i = s.params.direction;
      return (
        e || (e = "horizontal" === i ? "vertical" : "horizontal"),
        e === i ||
          ("horizontal" !== e && "vertical" !== e) ||
          (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
          s.el.classList.add(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.forEach((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          s.emit("changeDirection"),
          t && s.update()),
        s
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && "rtl" === e) ||
        (!t.rtl && "ltr" === e) ||
        ((t.rtl = "rtl" === e),
        (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
        t.rtl
          ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "rtl"))
          : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let s = e || t.params.el;
      if (("string" == typeof s && (s = document.querySelector(s)), !s))
        return !1;
      (s.swiper = t), s.shadowEl && (t.isElement = !0);
      const i = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let r = (() => {
        if (s && s.shadowRoot && s.shadowRoot.querySelector) {
          return s.shadowRoot.querySelector(i());
        }
        return b(s, i())[0];
      })();
      return (
        !r &&
          t.params.createElements &&
          ((r = (function (e, t = []) {
            const s = document.createElement(e);
            return s.classList.add(...(Array.isArray(t) ? t : [t])), s;
          })("div", t.params.wrapperClass)),
          s.append(r),
          b(s, `.${t.params.slideClass}`).forEach((e) => {
            r.append(e);
          })),
        Object.assign(t, {
          el: s,
          wrapperEl: r,
          slidesEl: t.isElement ? s : r,
          mounted: !0,
          rtl: "rtl" === s.dir.toLowerCase() || "rtl" === T(s, "direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === s.dir.toLowerCase() || "rtl" === T(s, "direction")),
          wrongRTL: "-webkit-box" === T(r, "display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.loop && t.virtual && t.params.virtual.enabled
            ? t.slideTo(
                t.params.initialSlide + t.virtual.slidesBefore,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.params.loop && t.loopCreate(),
          t.attachEvents(),
          [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
            e.complete
              ? I(t, e)
              : e.addEventListener("load", (e) => {
                  I(t, e.target);
                });
          }),
          _(t),
          (t.initialized = !0),
          _(t),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e = !0, t = !0) {
      const s = this,
        { params: i, el: r, wrapperEl: a, slides: n } = s;
      return (
        void 0 === s.params ||
          s.destroyed ||
          (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          i.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            r.removeAttribute("style"),
            a.removeAttribute("style"),
            n &&
              n.length &&
              n.forEach((e) => {
                e.classList.remove(
                  i.slideVisibleClass,
                  i.slideActiveClass,
                  i.slideNextClass,
                  i.slidePrevClass
                ),
                  e.removeAttribute("style"),
                  e.removeAttribute("data-swiper-slide-index");
              })),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
            ((s.el.swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      g(Z, e);
    }
    static get extendedDefaults() {
      return Z;
    }
    static get defaults() {
      return K;
    }
    static installModule(e) {
      ee.prototype.__modules__ || (ee.prototype.__modules__ = []);
      const t = ee.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => ee.installModule(e)), ee)
        : (ee.installModule(e), ee);
    }
  }
  Object.keys(J).forEach((e) => {
    Object.keys(J[e]).forEach((t) => {
      ee.prototype[t] = J[e][t];
    });
  }),
    ee.use([
      function ({ swiper: e, on: t, emit: s }) {
        const i = u();
        let r = null,
          a = null;
        const n = () => {
            e &&
              !e.destroyed &&
              e.initialized &&
              (s("beforeResize"), s("resize"));
          },
          o = () => {
            e && !e.destroyed && e.initialized && s("orientationchange");
          };
        t("init", () => {
          e.params.resizeObserver && void 0 !== i.ResizeObserver
            ? e &&
              !e.destroyed &&
              e.initialized &&
              ((r = new ResizeObserver((t) => {
                a = i.requestAnimationFrame(() => {
                  const { width: s, height: i } = e;
                  let r = s,
                    a = i;
                  t.forEach(
                    ({ contentBoxSize: t, contentRect: s, target: i }) => {
                      (i && i !== e.el) ||
                        ((r = s ? s.width : (t[0] || t).inlineSize),
                        (a = s ? s.height : (t[0] || t).blockSize));
                    }
                  ),
                    (r === s && a === i) || n();
                });
              })),
              r.observe(e.el))
            : (i.addEventListener("resize", n),
              i.addEventListener("orientationchange", o));
        }),
          t("destroy", () => {
            a && i.cancelAnimationFrame(a),
              r && r.unobserve && e.el && (r.unobserve(e.el), (r = null)),
              i.removeEventListener("resize", n),
              i.removeEventListener("orientationchange", o);
          });
      },
      function ({ swiper: e, extendParams: t, on: s, emit: i }) {
        const r = [],
          a = u(),
          n = (t, s = {}) => {
            const n = new (a.MutationObserver || a.WebkitMutationObserver)(
              (t) => {
                if (e.__preventObserver__) return;
                if (1 === t.length) return void i("observerUpdate", t[0]);
                const s = function () {
                  i("observerUpdate", t[0]);
                };
                a.requestAnimationFrame
                  ? a.requestAnimationFrame(s)
                  : a.setTimeout(s, 0);
              }
            );
            n.observe(t, {
              attributes: void 0 === s.attributes || s.attributes,
              childList: void 0 === s.childList || s.childList,
              characterData: void 0 === s.characterData || s.characterData,
            }),
              r.push(n);
          };
        t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          s("init", () => {
            if (e.params.observer) {
              if (e.params.observeParents) {
                const t = (function (e, t) {
                  const s = [];
                  let i = e.parentElement;
                  for (; i; )
                    t ? i.matches(t) && s.push(i) : s.push(i),
                      (i = i.parentElement);
                  return s;
                })(e.el);
                for (let e = 0; e < t.length; e += 1) n(t[e]);
              }
              n(e.el, { childList: e.params.observeSlideChildren }),
                n(e.wrapperEl, { attributes: !1 });
            }
          }),
          s("destroy", () => {
            r.forEach((e) => {
              e.disconnect();
            }),
              r.splice(0, r.length);
          });
      },
    ]);
  const te = ee;
  function se() {
    let e = document.querySelectorAll(
      '[class*="__swiper"]:not(.swiper-wrapper)'
    );
    e &&
      e.forEach((e) => {
        e.parentElement.classList.add("swiper"),
          e.classList.add("swiper-wrapper");
        for (const t of e.children) t.classList.add("swiper-slide");
      });
  }
  window.addEventListener("load", function (e) {
    se(),
      document.querySelector(".swiper") &&
        new te(".swiper", {
          slidesPerView: 4,
          spaceBetween: 0,
          autoHeight: !0,
          speed: 800,
          loop: !0,
          on: {},
        });
  });
  let ie = !1;
  setTimeout(() => {
    if (ie) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      const s = document.querySelectorAll("[data-tabs]");
      let i = [];
      if (s.length > 0) {
        const e = location.hash.replace("#", "");
        e.startsWith("tab-") && (i = e.replace("tab-", "").split("-")),
          s.forEach((e, t) => {
            e.classList.add("_tab-init"),
              e.setAttribute("data-tabs-index", t),
              e.addEventListener("click", n),
              (function (e) {
                const t = e.querySelectorAll("[data-tabs-titles]>*"),
                  s = e.querySelectorAll("[data-tabs-body]>*"),
                  r = e.dataset.tabsIndex,
                  a = i[0] == r;
                if (a) {
                  e.querySelector(
                    "[data-tabs-titles]>._tab-active"
                  ).classList.remove("_tab-active");
                }
                s.length > 0 &&
                  s.forEach((e, s) => {
                    t[s].setAttribute("data-tabs-title", ""),
                      e.setAttribute("data-tabs-item", ""),
                      a && s == i[1] && t[s].classList.add("_tab-active"),
                      (e.hidden = !t[s].classList.contains("_tab-active"));
                  });
              })(e);
          });
        let t = a(s, "tabs");
        t &&
          t.length &&
          t.forEach((e) => {
            e.matchMedia.addEventListener("change", function () {
              r(e.itemsArray, e.matchMedia);
            }),
              r(e.itemsArray, e.matchMedia);
          });
      }
      function r(e, t) {
        e.forEach((e) => {
          const s = (e = e.item).querySelector("[data-tabs-titles]"),
            i = e.querySelectorAll("[data-tabs-title]"),
            r = e.querySelector("[data-tabs-body]");
          e.querySelectorAll("[data-tabs-item]").forEach((a, n) => {
            t.matches
              ? (r.append(i[n]), r.append(a), e.classList.add("_tab-spoller"))
              : (s.append(i[n]), e.classList.remove("_tab-spoller"));
          });
        });
      }
      function n(s) {
        const i = s.target;
        if (i.closest("[data-tabs-title]")) {
          const r = i.closest("[data-tabs-title]"),
            a = r.closest("[data-tabs]");
          if (
            !r.classList.contains("_tab-active") &&
            !a.querySelectorAll("._slide").length
          ) {
            const s = a.querySelector("[data-tabs-title]._tab-active");
            s && s.classList.remove("_tab-active"),
              r.classList.add("_tab-active"),
              (function (s) {
                const i = s.querySelectorAll("[data-tabs-title]"),
                  r = s.querySelectorAll("[data-tabs-item]"),
                  a = s.dataset.tabsIndex,
                  n = (function (e) {
                    if (e.hasAttribute("data-tabs-animate"))
                      return e.dataset.tabsAnimate > 0
                        ? e.dataset.tabsAnimate
                        : 500;
                  })(s);
                r.length > 0 &&
                  r.forEach((s, r) => {
                    i[r].classList.contains("_tab-active")
                      ? (n ? t(s, n) : (s.hidden = !1),
                        s.closest(".popup") ||
                          (location.hash = `tab-${a}-${r}`))
                      : n
                      ? e(s, n)
                      : (s.hidden = !0);
                  });
              })(a);
          }
          s.preventDefault();
        }
      }
    })(),
    (function () {
      function e(e) {
        if ("click" === e.type) {
          const t = e.target;
          if (t.closest("[data-goto]")) {
            const s = t.closest("[data-goto]"),
              i = s.dataset.goto ? s.dataset.goto : "",
              r = !!s.hasAttribute("data-goto-header"),
              a = s.dataset.gotoSpeed ? s.dataset.gotoSpeed : "500";
            n(i, r, a), e.preventDefault();
          }
        } else if ("watcherCallback" === e.type && e.detail) {
          const t = e.detail.entry,
            s = t.target;
          if ("navigator" === s.dataset.watch) {
            const e = s.id,
              i =
                (document.querySelector("[data-goto]._navigator-active"),
                document.querySelector(`[data-goto="${e}"]`));
            t.isIntersecting
              ? i && i.classList.add("_navigator-active")
              : i && i.classList.remove("_navigator-active");
          }
        }
      }
      document.addEventListener("click", e),
        document.addEventListener("watcherCallback", e);
    })(),
    (function () {
      ie = !0;
      const e = document.querySelector("header.header"),
        t = e.hasAttribute("data-scroll-show"),
        s = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
        i = e.dataset.scroll ? e.dataset.scroll : 1;
      let r,
        a = 0;
      document.addEventListener("windowScroll", function (n) {
        const o = window.scrollY;
        clearTimeout(r),
          o >= i
            ? (!e.classList.contains("_header-scroll") &&
                e.classList.add("_header-scroll"),
              t &&
                (o > a
                  ? e.classList.contains("_header-show") &&
                    e.classList.remove("_header-show")
                  : !e.classList.contains("_header-show") &&
                    e.classList.add("_header-show"),
                (r = setTimeout(() => {
                  !e.classList.contains("_header-show") &&
                    e.classList.add("_header-show");
                }, s))))
            : (e.classList.contains("_header-scroll") &&
                e.classList.remove("_header-scroll"),
              t &&
                e.classList.contains("_header-show") &&
                e.classList.remove("_header-show")),
          (a = o <= 0 ? 0 : o);
      });
    })();
})();
