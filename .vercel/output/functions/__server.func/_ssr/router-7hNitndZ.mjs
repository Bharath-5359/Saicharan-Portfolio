import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { M as Menu, X, A as Award, S as Sparkles, T as Target, C as ChartColumn, B as Briefcase, a as Mail, L as Linkedin, b as MapPin, c as ArrowUpRight, d as Megaphone, e as Search, F as Funnel, f as TrendingUp, P as Palette, g as Facebook, h as FileText, i as ChartLine } from "../_libs/lucide-react.mjs";
import { m as motion, u as useScroll, a as useTransform, b as useSpring } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-ZfJfKIRK.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Portfolio Polish enhances an existing website by adding new marketing case studies and a horizontally scrolling professional highlights showcase." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Portfolio Polish enhances an existing website by adding new marketing case studies and a horizontally scrolling professional highlights showcase." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "twitter:description", content: "Portfolio Polish enhances an existing website by adding new marketing case studies and a horizontally scrolling professional highlights showcase." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e61fcedb-1b98-428c-80f7-4749ea41fcfb/id-preview-17ff090f--cbaa49dc-0c5c-48a3-9b69-2f31836c74ea.lovable.app-1780597556835.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e61fcedb-1b98-428c-80f7-4749ea41fcfb/id-preview-17ff090f--cbaa49dc-0c5c-48a3-9b69-2f31836c74ea.lovable.app-1780597556835.png" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const FadeIn = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = "div",
  className,
  style
}) => {
  const MotionComponent = motion.create(as);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    MotionComponent,
    {
      initial: { opacity: 0, x, y },
      whileInView: { opacity: 1, x: 0, y: 0 },
      viewport: { once: true, margin: "50px", amount: 0 },
      transition: {
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1]
      },
      className,
      style,
      children
    }
  );
};
const introVideo = "/assets/intro-xGzE0Z_G.mp4";
const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#highlights" },
  { label: "Experience", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];
const HeroSection = () => {
  const sectionRef = reactExports.useRef(null);
  const videoRef = reactExports.useRef(null);
  const [muted, setMuted] = reactExports.useState(true);
  const [showSoundHint, setShowSoundHint] = reactExports.useState(true);
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setShowSoundHint(false), 5e3);
    return () => clearTimeout(t);
  }, []);
  reactExports.useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          const v = videoRef.current;
          if (v && !v.muted) {
            v.muted = true;
            setMuted(true);
          }
        }
      },
      { threshold: 0, rootMargin: "-50% 0px 0px 0px" }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  reactExports.useEffect(() => {
    let fired = false;
    const goToAbout = () => {
      if (fired) return;
      fired = true;
      const about = document.getElementById("about");
      if (about) about.scrollIntoView({ behavior: "auto", block: "start" });
    };
    const onWheel = (e) => {
      if (fired) return;
      if (e.deltaY <= 0) return;
      if (window.scrollY > 50) return;
      e.preventDefault();
      goToAbout();
    };
    const onKey = (e) => {
      if (fired) return;
      if (window.scrollY > 50) return;
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        goToAbout();
      }
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
    };
  }, []);
  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    setShowSoundHint(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref: sectionRef, className: "relative h-screen w-full overflow-hidden bg-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "video",
      {
        ref: videoRef,
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        preload: "auto",
        className: "absolute inset-0 h-full w-full object-cover",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: introVideo, type: "video/mp4" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex h-full flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0, y: -20, className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden md:flex items-center gap-5 sm:gap-8 md:gap-10", children: NAV_LINKS.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: link.href,
            className: "text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-white/80 transition hover:text-white",
            children: link.label
          }
        ) }, link.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#contact",
              className: "hidden sm:inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 sm:px-5 sm:py-2.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md transition hover:bg-white/20 hover:scale-[1.03]",
              children: "Email me"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setMenuOpen(true),
              "aria-label": "Open menu",
              className: "md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 18 })
            }
          )
        ] })
      ] }) }),
      menuOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col animate-fade-in", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium uppercase tracking-[0.35em] text-white/60", children: "Menu" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setMenuOpen(false),
              "aria-label": "Close menu",
              className: "flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-1 flex-col items-center justify-center gap-8", children: NAV_LINKS.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: link.href,
            onClick: () => setMenuOpen(false),
            className: "text-2xl font-black uppercase tracking-tight text-white hover:text-white/70 transition",
            children: link.label
          }
        ) }, link.label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-7xl px-6 md:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.3, y: 20, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-[10px] sm:text-xs font-medium uppercase tracking-[0.35em] text-white/60", children: "Portfolio · 2026" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.5, y: 40, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "h1",
          {
            className: "font-black uppercase leading-[0.88] tracking-tight text-white",
            style: { fontSize: "clamp(3.2rem, 12vw, 11rem)" },
            children: [
              "Chandra Sai",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Charan"
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.85, y: 20, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 md:mt-7 text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-[0.3em] text-white/75", children: "Digital Marketing Specialist · Hyderabad, India" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-10 md:pb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 1.1, y: 20, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#about", "aria-label": "Scroll to next section", className: "group flex flex-col items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.35em] text-white/70 transition group-hover:text-white", children: "Scroll" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-12 w-px overflow-hidden bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "absolute inset-x-0 top-0 h-1/2 w-full bg-white",
              style: { animation: "scrollLine 1.8s ease-in-out infinite" }
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 1.1, y: 20, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          showSoundHint && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "hidden sm:inline text-[10px] font-medium uppercase tracking-[0.25em] text-white/80",
              style: { animation: "pulseFade 2s ease-in-out infinite" },
              children: "Tap for sound"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: toggleMute,
              "aria-label": muted ? "Unmute video" : "Mute video",
              className: "flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 hover:scale-110",
              children: muted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "23", y1: "9", x2: "17", y2: "15" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "17", y1: "9", x2: "23", y2: "15" })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" })
              ] })
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        @keyframes pulseFade {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      ` })
  ] });
};
const ABOUT_PARAGRAPHS = [
  "I'm a Digital Marketing Specialist passionate about building growth-focused marketing systems that help businesses attract, engage, and convert the right audience.",
  "Currently, I work as a Digital Marketing Intern at Humanity Founder, where I create content, manage campaigns, support influencer collaborations, and contribute to brand growth initiatives.",
  "My experience includes lead generation, performance marketing, conversion-focused funnels, and digital strategies designed to drive measurable business results.",
  "I believe successful marketing combines creativity, strategy, and analytics. My goal is to help brands grow through impactful campaigns, stronger customer connections, and sustainable digital growth."
];
const containerVariants$1 = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};
const paragraphVariants$1 = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
};
const AboutSection = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "about",
      className: "relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 sm:px-8 md:px-10 py-20",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-10 sm:gap-14 md:gap-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0, y: 40, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "hero-heading whitespace-nowrap text-center font-black uppercase leading-none tracking-tight",
            style: { fontSize: "clamp(1rem, 12vw, 140px)" },
            children: "About me"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            variants: containerVariants$1,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, margin: "-80px" },
            className: "flex w-full flex-col gap-5 sm:gap-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  variants: paragraphVariants$1,
                  className: "text-xs sm:text-sm uppercase tracking-[0.3em] text-[#D7E2EA]/50",
                  children: "Who I am"
                }
              ),
              ABOUT_PARAGRAPHS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.p,
                {
                  variants: paragraphVariants$1,
                  className: "font-light leading-relaxed text-[#D7E2EA]/85",
                  style: { fontSize: "clamp(0.95rem, 1.25vw, 1.15rem)" },
                  children: p
                },
                i
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: paragraphVariants$1, className: "pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "/resume.pdf",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#D7E2EA] backdrop-blur-md transition hover:bg-[#D7E2EA]/10 hover:scale-[1.03]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "7 10 12 15 17 10" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
                    ] }),
                    "Download Resume"
                  ]
                }
              ) })
            ]
          }
        )
      ] })
    }
  );
};
const GoogleMark = () => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className: "h-4 w-4 shrink-0 opacity-70", fill: "currentColor", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.4 14.6 2.5 12 2.5 6.8 2.5 2.6 6.7 2.6 12s4.2 9.5 9.4 9.5c5.4 0 9-3.8 9-9.2 0-.6-.1-1.1-.2-1.6H12z" }) });
const HubSpotMark = () => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className: "h-4 w-4 shrink-0 opacity-70", fill: "currentColor", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18.6 8.6V6.1a1.7 1.7 0 1 0-1.6 0v2.5a4.9 4.9 0 0 0-2.4.9L7.9 4.4a1.9 1.9 0 1 0-1 1.3l6.5 5.1a4.9 4.9 0 0 0-.8 2.7 4.9 4.9 0 0 0 .3 1.7l-2 .8a2.1 2.1 0 1 0 .6 1.5l2-.8a4.9 4.9 0 1 0 5.1-8.1zm-1.2 7.6a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4z" }) });
const certIcon = (name) => {
  if (name.toLowerCase().includes("google")) return /* @__PURE__ */ jsxRuntimeExports.jsx(GoogleMark, {});
  if (name.toLowerCase().includes("hubspot")) return /* @__PURE__ */ jsxRuntimeExports.jsx(HubSpotMark, {});
  return null;
};
const ITEM_ICONS = {
  // Why Hire Me
  "Performance Marketing Focus": Target,
  "Lead Generation Expertise": Funnel,
  "Data-Driven Decision Making": ChartLine,
  "Content Marketing Experience": FileText,
  "Influencer Marketing Experience": Megaphone,
  "Conversion Funnel Optimization": TrendingUp,
  // Tools I Work With
  "Google Ads": Target,
  "Meta Ads": Facebook,
  "Google Analytics": ChartColumn,
  "Canva": Palette,
  "ChatGPT": Sparkles,
  "HubSpot": Briefcase,
  // Current Focus
  "Performance Marketing": TrendingUp,
  "Lead Generation Systems": Funnel,
  "SEO Content Strategy": Search,
  "Influencer Outreach": Megaphone,
  "Email Marketing": Mail
};
const ItemIcon = ({ name }) => {
  const Icon = ITEM_ICONS[name];
  if (!Icon) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 15, strokeWidth: 1.5, className: "shrink-0 opacity-70" });
};
const COLUMNS = [
  {
    number: "01",
    icon: Award,
    label: "Certifications",
    tagline: "Industry-recognized credentials in Google & HubSpot ecosystems.",
    items: [
      "Google Ads Search Certification",
      "Google Ads Display Certification",
      "Google Ads Video Certification",
      "Google Ads Shopping Certification",
      "HubSpot Digital Marketing Certification",
      "HubSpot SEO Certification",
      "HubSpot Social Media Marketing Certification"
    ]
  },
  {
    number: "05",
    icon: Sparkles,
    label: "Why Hire Me",
    tagline: "A growth-focused operator blending strategy, creative, and analytics.",
    items: [
      "Performance Marketing Focus",
      "Lead Generation Expertise",
      "Data-Driven Decision Making",
      "Content Marketing Experience",
      "Influencer Marketing Experience",
      "Conversion Funnel Optimization"
    ]
  },
  {
    number: "03",
    icon: Target,
    label: "Current Focus",
    tagline: "Where I am sharpening my craft and delivering measurable impact.",
    items: [
      "Performance Marketing",
      "Lead Generation Systems",
      "SEO Content Strategy",
      "Influencer Outreach",
      "Email Marketing"
    ]
  },
  {
    number: "04",
    icon: ChartColumn,
    label: "Tools I Work With",
    tagline: "Day-to-day stack used across campaigns, analytics, and creative.",
    items: [
      "Google Ads",
      "Meta Ads",
      "Google Analytics",
      "Canva",
      "ChatGPT",
      "HubSpot"
    ]
  },
  {
    number: "02",
    icon: Briefcase,
    label: "What I Do",
    tagline: "End-to-end growth execution across paid, organic, and AI workflows.",
    items: [
      "Performance Marketing — Google Ads | Meta Ads | Campaign Strategy",
      "Lead Generation — Lead Generation | Funnel Building | Lead Qualification",
      "Digital Marketing — Content Marketing | Influencer Marketing | Email Marketing",
      "SEO & Analytics — SEO | Keyword Research | Google Analytics",
      "Tools & AI — Canva | ChatGPT | AI Image Generation"
    ]
  }
];
const HighlightCard = ({ column }) => {
  const Icon = column.icon;
  const showItemIcons = column.label === "Why Hire Me" || column.label === "Tools I Work With" || column.label === "Current Focus";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      className: "shrink-0 origin-top flex flex-col gap-6 sm:gap-8 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8 md:p-10 w-[85vw] sm:w-[60vw] md:w-[48vw] lg:w-[42vw] h-[62vh] max-h-[560px]",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-start gap-4 sm:gap-6 md:gap-8 min-w-0 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "shrink-0 font-black text-[#D7E2EA] leading-none",
              style: { fontSize: "clamp(2.5rem, 7vw, 110px)" },
              children: column.number
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:gap-3 pt-1 sm:pt-3 md:pt-4 min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "font-medium uppercase text-[#D7E2EA] leading-tight",
                style: { fontSize: "clamp(1.1rem, 2.2vw, 2.1rem)" },
                children: column.label
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-light leading-relaxed text-[#D7E2EA]/70 max-w-2xl",
                style: { fontSize: "clamp(0.8rem, 1.3vw, 1rem)" },
                children: column.tagline
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "hidden sm:flex h-14 w-14 md:h-16 md:w-16 shrink-0 items-center justify-center border border-[#D7E2EA]/25 bg-[#0C0C0C]",
              style: { borderRadius: "8px" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 26, strokeWidth: 1.4, className: "text-[#D7E2EA]" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto min-h-0 pr-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col", children: column.items.map((item, i) => {
          const icon = column.label === "Certifications" ? certIcon(item) : showItemIcons ? /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIcon, { name: item }) : null;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "group flex items-baseline gap-4 sm:gap-6 border-t border-[#D7E2EA]/10 py-3 sm:py-4 last:border-b transition-colors duration-300 hover:border-[#D7E2EA]/40",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#D7E2EA]/35 w-8 shrink-0 transition-colors duration-300 group-hover:text-[#D7E2EA]/70", children: String(i + 1).padStart(2, "0") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "font-light text-[#D7E2EA]/85 leading-snug transition-colors duration-300 group-hover:text-[#D7E2EA] flex items-center gap-2.5",
                    style: { fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)" },
                    children: [
                      icon,
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
                    ]
                  }
                )
              ]
            },
            item
          );
        }) }) })
      ]
    }
  );
};
const ProfessionalHighlightsSection = () => {
  const containerRef = reactExports.useRef(null);
  const trackRef = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);
  const xSmooth = useSpring(x, { damping: 32, stiffness: 110, mass: 0.4 });
  const orderedColumns = [
    COLUMNS[0],
    COLUMNS[4],
    COLUMNS[2],
    COLUMNS[3],
    COLUMNS[1]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "highlights",
      ref: containerRef,
      className: "relative z-10 w-full bg-[#0C0C0C]",
      style: { height: `${COLUMNS.length * 80}vh` },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 h-screen w-full overflow-hidden flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 sm:px-6 md:px-10 pt-10 sm:pt-12 md:pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { y: 40, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "hero-heading text-center font-black uppercase tracking-tight leading-none mb-6 sm:mb-8 md:mb-10",
            style: { fontSize: "clamp(2rem, 6vw, 88px)" },
            children: "Highlights"
          }
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center min-h-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            ref: trackRef,
            style: { x: xSmooth, touchAction: "pan-y" },
            className: "flex gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-10 will-change-transform",
            children: [
              orderedColumns.map((column, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(HighlightCard, { column, index: i }, column.number)),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 w-4 sm:w-6 md:w-10", "aria-hidden": true })
            ]
          }
        ) })
      ] })
    }
  );
};
const RESPONSIBILITIES = [
  {
    number: "01",
    title: "Social Media Management",
    description: "Planning content calendars, managing brand pages, and engaging communities to grow reach and consistent presence across platforms."
  },
  {
    number: "02",
    title: "Content Creation",
    description: "Producing on-brand creatives, short-form copy, and campaign assets that connect with the target audience and drive engagement."
  },
  {
    number: "03",
    title: "Google Ads Campaign Management",
    description: "Setting up, optimizing, and scaling Search, Display, and Video campaigns to deliver qualified traffic and improve ROAS."
  },
  {
    number: "04",
    title: "Meta Ads Campaign Management",
    description: "Running performance campaigns on Facebook and Instagram — audience targeting, creative testing, and full-funnel optimization."
  },
  {
    number: "05",
    title: "Influencer Outreach",
    description: "Identifying aligned creators, managing communications, and coordinating collaborations that expand brand visibility and trust."
  },
  {
    number: "06",
    title: "Brand Partnerships",
    description: "Supporting collaboration opportunities with creators and partners to amplify campaigns and unlock new audience segments."
  },
  {
    number: "07",
    title: "Strategic Outreach",
    description: "Building structured outbound and engagement strategies that nurture leads and convert interest into long-term relationships."
  },
  {
    number: "08",
    title: "Audience Growth Initiatives",
    description: "Launching growth-focused initiatives across organic and paid channels to consistently expand the right audience and improve retention."
  }
];
const ServicesSection = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "services",
      style: { backgroundColor: "#D7E2EA" },
      className: "relative w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { y: 40, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "text-center font-black uppercase text-[#0C0C0C] mb-6 sm:mb-8 leading-none",
            style: { fontSize: "clamp(3rem, 12vw, 100px)" },
            children: "Experience"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl", children: RESPONSIBILITIES.map((service, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.1, y: 30, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-row items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12",
            style: {
              borderTop: "1px solid rgba(12, 12, 12, 0.15)",
              ...i === RESPONSIBILITIES.length - 1 ? { borderBottom: "1px solid rgba(12, 12, 12, 0.15)" } : {}
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "shrink-0 font-black text-[#0C0C0C] leading-none",
                  style: { fontSize: "clamp(3rem, 10vw, 140px)" },
                  children: service.number
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex flex-col gap-3 sm:gap-4 md:gap-5 pt-2 sm:pt-3 md:pt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h3",
                  {
                    className: "font-medium uppercase text-[#0C0C0C] leading-tight relative inline-block w-fit",
                    style: { fontSize: "clamp(1rem, 2.2vw, 2.1rem)" },
                    children: [
                      service.title,
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 -bottom-1 h-px w-0 bg-[#0C0C0C]/60 transition-all duration-500 group-hover:w-full" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-light leading-relaxed text-[#0C0C0C] max-w-2xl",
                    style: {
                      fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                      opacity: 0.6
                    },
                    children: service.description
                  }
                )
              ] })
            ]
          }
        ) }, service.number)) })
      ]
    }
  );
};
const PROJECTS = [
  {
    number: "01",
    category: "Lead Generation · Performance Marketing",
    name: "Real Estate Lead Generation System",
    description: "Built a structured lead generation system using Google Ads and conversion-focused funnels to attract high-intent buyers, improve lead quality, and guide prospects from initial interest to final conversion.",
    col1Image1: "/realestate-ads.jpg",
    col1Image2: "/realestate-funnel.jpg",
    col2Image: "/realestate-hero.jpg",
    caseStudyUrl: "/case-studies/real-estate.pdf"
  },
  {
    number: "02",
    category: "Lead Generation · Conversion Funnels",
    name: "Gym Lead Generation & Conversion System",
    description: "Developed a complete lead generation and conversion funnel focused on audience acquisition, offer positioning, lead qualification, follow-up systems, and membership conversion optimization.",
    col1Image1: "/gym-dashboard.jpg",
    col1Image2: "/gym-funnel.jpg",
    col2Image: "/gym-hero.jpg",
    caseStudyUrl: "/case-studies/gym.pdf"
  },
  {
    number: "03",
    category: "Influencer Marketing · Partnerships",
    name: "Influencer Outreach Campaign",
    description: "Developed influencer outreach strategies focused on identifying relevant creators, building partnerships, managing communication, and increasing brand visibility through collaboration campaigns.",
    col1Image1: "/influencer-dashboard.jpg",
    col1Image2: "/influencer-workflow.jpg",
    col2Image: "/influencer-hero.jpg",
    caseStudyUrl: "/case-studies/influencer.pdf"
  },
  {
    number: "04",
    category: "SEO · Content Strategy",
    name: "SEO Blog Strategy",
    description: "Created SEO-focused content strategies including keyword research, content planning, blog optimization, internal linking structure, and organic traffic growth planning.",
    col1Image1: "/seo-dashboard.jpg",
    col1Image2: "/seo-strategy.jpg",
    col2Image: "/seo-hero.jpg",
    caseStudyUrl: "/case-studies/seo.pdf"
  },
  {
    number: "05",
    category: "Email Marketing · Automation",
    name: "Email Marketing System",
    description: "Built structured email marketing workflows focused on lead nurturing, audience engagement, follow-up automation, and conversion-focused communication strategies.",
    col1Image1: "/email-workflow.jpg",
    col1Image2: "/email-analytics.jpg",
    col2Image: "/email-hero.jpg",
    caseStudyUrl: "/case-studies/email.pdf"
  },
  {
    number: "06",
    category: "Content Marketing · Audience Growth · Brand Awareness",
    name: "Content Marketing Strategy",
    description: "Built a content marketing strategy focused on audience growth, brand awareness, content planning across social channels, and performance analysis to drive consistent engagement.",
    col1Image1: "/content-dashboard.jpg",
    col1Image2: "/content-strategy.jpg",
    col2Image: "/content-hero.jpg",
    caseStudyUrl: "/case-studies/content.pdf"
  }
];
const ProjectCard = ({ project, index, total }) => {
  const cardRef = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"]
  });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref: cardRef,
      className: "sticky top-24 md:top-32 h-[85vh] w-full",
      style: { top: `${96 + index * 28}px` },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.article,
        {
          style: { scale },
          className: "origin-top mx-auto h-full w-full flex flex-col gap-4 sm:gap-6 md:gap-8 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-start gap-3 sm:gap-6 md:gap-10 min-w-0 w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "shrink-0 font-black text-[#D7E2EA] leading-none",
                  style: { fontSize: "clamp(2.5rem, 10vw, 140px)" },
                  children: project.number
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 sm:gap-3 pt-1 sm:pt-3 md:pt-4 min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-light uppercase tracking-widest text-[#D7E2EA]/60",
                    style: { fontSize: "clamp(0.65rem, 1.2vw, 1rem)" },
                    children: project.category
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-medium uppercase text-[#D7E2EA] leading-tight",
                    style: { fontSize: "clamp(1.1rem, 2.2vw, 2.1rem)" },
                    children: project.name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-light leading-relaxed text-[#D7E2EA]/70 max-w-2xl mt-1 sm:mt-2",
                    style: { fontSize: "clamp(0.8rem, 1.3vw, 1rem)" },
                    children: project.description
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: project.caseStudyUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "mt-3 sm:mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#D7E2EA]/25 bg-[#D7E2EA]/5 px-5 sm:px-6 py-2 sm:py-2.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-[#D7E2EA] transition hover:bg-[#D7E2EA]/15 hover:scale-[1.03]",
                    children: [
                      "Explore Case Study",
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "12 5 19 12 12 19" })
                      ] })
                    ]
                  }
                )
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[40%_60%] gap-3 sm:gap-4 md:gap-5 flex-1 min-h-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:gap-4 md:gap-5 min-h-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]",
                    style: { height: "clamp(130px, 16vw, 230px)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: project.col1Image1,
                        alt: `${project.name} preview 1`,
                        className: "h-full w-full object-cover",
                        loading: "lazy",
                        draggable: false
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]",
                    style: { height: "clamp(160px, 22vw, 340px)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: project.col1Image2,
                        alt: `${project.name} preview 2`,
                        className: "h-full w-full object-cover",
                        loading: "lazy",
                        draggable: false
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: project.col2Image,
                  alt: `${project.name} preview 3`,
                  className: "h-full w-full object-cover",
                  loading: "lazy",
                  draggable: false
                }
              ) })
            ] })
          ]
        }
      )
    }
  );
};
const ProjectsSection = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "projects",
      className: "relative z-10 -mt-10 sm:-mt-12 md:-mt-14 w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-[#0C0C0C] px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { y: 40, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "hero-heading text-center font-black uppercase tracking-tight leading-none mb-16 sm:mb-20 md:mb-28",
            style: { fontSize: "clamp(3rem, 12vw, 160px)" },
            children: "Projects"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl", children: PROJECTS.map((project, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProjectCard,
          {
            project,
            index: i,
            total: PROJECTS.length
          },
          project.number
        )) })
      ]
    }
  );
};
const PARAGRAPHS = [
  "I focus on combining performance marketing, lead generation, content strategy, and influencer outreach to create growth-focused marketing systems that drive measurable business results."
];
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};
const paragraphVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
};
const WhatMakesMeDifferentSection = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "what-makes-me-different",
      className: "relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 sm:px-8 md:px-10 py-20",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-10 sm:gap-14 md:gap-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0, y: 40, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "hero-heading text-center font-black uppercase leading-none tracking-tight",
            style: { fontSize: "clamp(1.75rem, 9vw, 100px)" },
            children: "What Makes Me Different"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            variants: containerVariants,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, margin: "-80px" },
            className: "flex w-full flex-col gap-5 sm:gap-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  variants: paragraphVariants,
                  className: "text-xs sm:text-sm uppercase tracking-[1em] text-[#D7E2EA]/50",
                  children: "My Edge"
                }
              ),
              PARAGRAPHS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.p,
                {
                  variants: paragraphVariants,
                  className: "font-light leading-relaxed text-[#D7E2EA]/85",
                  style: { fontSize: "clamp(1.7rem, 1.25vw, 1.15rem)" },
                  children: p
                },
                i
              ))
            ]
          }
        )
      ] })
    }
  );
};
const CONTACT_METHODS = [
  {
    icon: Mail,
    label: "Email",
    value: "saicharan5359@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=saicharan5359@gmail.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect With Me",
    href: "https://www.linkedin.com/in/chandra-sai-charan142936"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
    href: "https://www.google.com/maps/place/Hyderabad"
  }
];
const ContactSection = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "contact",
      className: "relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { y: 40, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "hero-heading text-center font-black uppercase tracking-tight leading-none mb-4",
            style: { fontSize: "clamp(3rem, 12vw, 160px)" },
            children: "Get In Touch"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.15, y: 20, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-center font-light uppercase tracking-widest text-[#D7E2EA]/60 mb-12 sm:mb-16 md:mb-20",
            style: { fontSize: "clamp(0.85rem, 1.4vw, 1.1rem)" },
            children: "Pick whichever channel suits you"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6", children: CONTACT_METHODS.map((method, i) => {
          const Icon = method.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.1, y: 30, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: method.href,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group relative flex h-full flex-col justify-between gap-8 sm:gap-10 border-2 border-[#D7E2EA]/20 bg-[#111111] p-6 sm:p-8 transition-all duration-300 hover:border-[#D7E2EA] cursor-pointer",
              style: { borderRadius: "6px" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "border border-[#D7E2EA]/20 p-3 sm:p-3.5 transition-colors duration-300 group-hover:border-[#D7E2EA]",
                      style: { borderRadius: "4px" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Icon,
                        {
                          className: "text-[#D7E2EA]",
                          size: 22,
                          strokeWidth: 1.5
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ArrowUpRight,
                    {
                      className: "text-[#D7E2EA]/40 transition-all duration-300 group-hover:text-[#D7E2EA] group-hover:-rotate-12",
                      size: 22,
                      strokeWidth: 1.5
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-light uppercase tracking-widest text-[#D7E2EA]/50",
                      style: { fontSize: "clamp(0.7rem, 1.1vw, 0.9rem)" },
                      children: method.label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-medium text-[#D7E2EA] break-all",
                      style: { fontSize: "clamp(1rem, 1.8vw, 1.4rem)" },
                      children: method.value
                    }
                  )
                ] })
              ]
            }
          ) }, method.label);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.4, y: 20, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-20 sm:mt-24 md:mt-28 flex max-w-5xl flex-col items-center gap-3 border-t border-[#D7E2EA]/10 pt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-light uppercase tracking-widest text-[#D7E2EA]/50",
              style: { fontSize: "clamp(0.7rem, 1.1vw, 0.9rem)" },
              children: "© 2026 Chandra Sai Charan Ramagiri"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-light uppercase tracking-widest text-[#D7E2EA]/50",
              style: { fontSize: "clamp(0.7rem, 1.1vw, 0.9rem)" },
              children: "Based in Hyderabad, India"
            }
          )
        ] }) })
      ]
    }
  );
};
function Preloader({ onFinish }) {
  const [progress, setProgress] = reactExports.useState(0);
  const [showWelcome, setShowWelcome] = reactExports.useState(false);
  const [fadeOut, setFadeOut] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShowWelcome(true);
          }, 300);
          setTimeout(() => {
            setFadeOut(true);
          }, 1800);
          setTimeout(() => {
            onFinish();
          }, 2500);
          return 100;
        }
        return prev + 1;
      });
    }, 25);
    return () => clearInterval(interval);
  }, [onFinish]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `fixed inset-0 z-[99999] bg-black transition-opacity duration-700 ${fadeOut ? "opacity-0" : "opacity-100"}`,
      children: [
        !showWelcome && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 left-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white text-xl font-medium tracking-wider", children: "CSC" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 right-8 text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/40 text-[10px] uppercase tracking-[0.5em] mb-2", children: "Digital Marketing Specialist" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: "text-white font-extralight leading-none",
                style: {
                  fontSize: "clamp(4rem, 8vw, 8rem)"
                },
                children: progress
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-full h-[2px] bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full bg-white transition-all duration-100",
              style: {
                width: `${progress}%`
              }
            }
          ) })
        ] }),
        showWelcome && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "text-white font-black uppercase animate-pulse",
              style: {
                fontSize: "clamp(4rem, 10vw, 8rem)",
                letterSpacing: "-0.04em"
              },
              children: "WELCOME"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-white/60 uppercase tracking-[0.4em] text-sm", children: "Chandra Sai Charan Ramagiri" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[#D7E2EA] uppercase tracking-[0.4em] text-xs", children: "Digital Marketing Specialist" })
        ] })
      ]
    }
  );
}
const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Chandra Sai Charan Ramagiri - Digital Marketing Specialist"
      },
      {
        name: "description",
        content: "Portfolio of Chandra Sai Charan Ramagiri - Digital Marketing Specialist in Hyderabad."
      },
      {
        property: "og:title",
        content: "Chandra Sai Charan Ramagiri - Digital Marketing Specialist"
      },
      {
        property: "og:description",
        content: "Portfolio of Chandra Sai Charan Ramagiri - Digital Marketing Specialist in Hyderabad."
      }
    ]
  }),
  component: Index
});
function Index() {
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Preloader,
      {
        onFinish: () => {
          setLoading(false);
        }
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "main",
    {
      className: "relative w-full",
      style: {
        overflowX: "clip",
        background: "#0C0C0C"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AboutSection, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ProfessionalHighlightsSection, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesSection, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectsSection, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(WhatMakesMeDifferentSection, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSection, {})
      ]
    }
  );
}
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
