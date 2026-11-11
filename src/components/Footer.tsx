"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  Zap,
  ArrowRight,
  ArrowUp,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Clock,
  Globe2,
  ExternalLink,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface FooterProps {
  onOpenIntake: () => void;
}

export function Footer({ onOpenIntake }: FooterProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [currentTime, setCurrentTime] = useState<string>("");

  // Live UTC World Clock Ticker for global relevance & alive feeling
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utcString = now.toLocaleTimeString("en-US", {
        timeZone: "UTC",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setCurrentTime(`${utcString} UTC`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      // 1. Entrance timeline for Footer CTA banner
      const ctaTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".footer-cta-card",
          start: "top 82%",
        },
      });

      ctaTl
        .fromTo(
          ".footer-reveal-line",
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.25,
            stagger: 0.12,
            ease: "power3.out",
          }
        )
        .fromTo(
          ".footer-cta-sub",
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
          "-=0.8"
        )
        .fromTo(
          ".footer-cta-action",
          { scale: 0.96, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.1, ease: "power3.out" },
          "-=0.7"
        );

      // 2. Hairline divider animation
      gsap.fromTo(
        ".footer-hairline",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".footer-hairline",
            start: "top 88%",
          },
        }
      );

      // 3. Grid Columns Stagger
      gsap.fromTo(
        ".footer-grid-col",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".footer-grid",
            start: "top 85%",
          },
        }
      );

      // 4. Subtle Parallax on Bottom Big Brand Typographic Monolith
      gsap.fromTo(
        ".footer-brand-monolith",
        { yPercent: 20, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".footer-brand-monolith",
            start: "top 95%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <footer
      ref={containerRef}
      role="contentinfo"
      aria-label="Site Footer"
      className="relative w-full bg-[#141210] dark:bg-[#05070B] text-[#FAF8F5] dark:text-slate-100 pt-16 sm:pt-24 lg:pt-32 pb-10 sm:pb-14 px-5 sm:px-8 lg:px-12 transition-colors duration-200 overflow-hidden"
    >
      {/* Background Architectural Canvas Grid Lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(#FAF8F5 1px, transparent 1px), radial-gradient(#FAF8F5 1px, #141210 1px)",
          backgroundSize: "36px 36px",
          backgroundPosition: "0 0, 18px 18px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {/* ================================================================= */}
        {/* ACT 1: THE GRAND FINAL CALL TO ACTION (AWWWARDS EDITORIAL POSTER) */}
        {/* ================================================================= */}
        <div className="footer-cta-card rounded-2xl sm:rounded-3xl border border-[#2B2724] dark:border-slate-800/80 bg-[#1C1917]/70 dark:bg-[#0B0F19]/80 backdrop-blur-md p-6 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-600/10 dark:bg-blue-600/15 blur-3xl"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12">
            {/* Left Headline Area */}
            <div className="space-y-4 sm:space-y-5 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Zero Risk • Handcrafted in 24 Hours</span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.035em] leading-[1.05] sm:leading-[0.98] font-[family-name:var(--font-heading)] text-white">
                <span className="block overflow-hidden pb-1 sm:pb-2">
                  <span className="footer-reveal-line block will-change-transform">
                    See your business on a
                  </span>
                </span>
                <span className="block overflow-hidden pb-1 sm:pb-2">
                  <span className="footer-reveal-line block will-change-transform text-[#1a73e8] dark:text-blue-400">
                    better website.
                  </span>
                </span>
                <span className="block overflow-hidden pb-1 sm:pb-2">
                  <span className="footer-reveal-line block font-[family-name:var(--font-serif)] italic font-light text-stone-300 dark:text-slate-300">
                    Test-drive it tomorrow.
                  </span>
                </span>
              </h2>

              <p className="footer-cta-sub text-xs sm:text-base md:text-lg text-stone-400 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
                No credit cards. No sales meetings. No upfront deposits. Give us your business name and test your live, working homepage on your phone in 24 hours. If you like it, pay and launch. If not, walk away owing $0.
              </p>
            </div>

            {/* Right Action Block */}
            <div className="footer-cta-action flex flex-col gap-3 sm:gap-4 flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={onOpenIntake}
                className="group inline-flex items-center justify-center gap-3 px-7 sm:px-9 py-4 sm:py-5 min-h-[52px] rounded-xl sm:rounded-2xl bg-[#FAF8F5] hover:bg-white text-[#1C1917] font-bold text-sm sm:text-base tracking-tight shadow-xl hover:shadow-2xl transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Request Your Free 24h Demo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </button>

              <div className="flex items-center justify-center sm:justify-start gap-2 text-[11px] sm:text-xs font-mono text-stone-400 dark:text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>$0 upfront • Ready in 24 hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="footer-hairline h-[1px] w-full bg-[#2B2724] dark:bg-slate-800 will-change-transform origin-left" />

        {/* ================================================================= */}
        {/* ACT 2: ARCHITECTURAL 4-COLUMN SUBSTANTIVE GRID                    */}
        {/* ================================================================= */}
        <div className="footer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-10 text-stone-300">
          {/* Column 1: Brand & Manifesto (lg:col-span-4) */}
          <div className="footer-grid-col lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
              aria-label="LikeItPayIt Home"
            >
              <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform">
                <Zap className="w-3.5 h-3.5 fill-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white font-[family-name:var(--font-heading)]">
                LikeItPayIt<span className="text-blue-500">.</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-stone-400 dark:text-slate-300 leading-relaxed font-normal max-w-sm">
              We flipped the agency model. In real life, you try before you buy. We hand-build your custom, high-speed website first so you can test it before spending a single dollar.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-mono text-stone-400 dark:text-slate-400">
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Zero Upfront Risk</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">100% Client Ownership</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">No Lock-in</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (lg:col-span-3) */}
          <div className="footer-grid-col lg:col-span-3 space-y-3.5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="#anti-hostage"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 focus:outline-none focus-visible:underline"
                >
                  <span>The Anti-Hostage Pledge</span>
                </a>
              </li>
              <li>
                <a
                  href="#protocol"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 focus:outline-none focus-visible:underline"
                >
                  <span>How It Works (3 Steps)</span>
                </a>
              </li>
              <li>
                <a
                  href="#comparison"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 focus:outline-none focus-visible:underline"
                >
                  <span>Comparison Matrix</span>
                </a>
              </li>
              <li>
                <a
                  href="#test-drive"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 focus:outline-none focus-visible:underline"
                >
                  <span>The Test-Drive Principle</span>
                </a>
              </li>
              <li>
                <Link
                  href="/local-seo"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 text-blue-400 font-medium focus:outline-none focus-visible:underline"
                >
                  <span>Local SEO &amp; Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Inquiry Channels (lg:col-span-3) */}
          <div className="footer-grid-col lg:col-span-3 space-y-3.5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Get Started
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={onOpenIntake}
                  className="text-left hover:text-white transition-colors inline-flex items-center gap-1.5 text-emerald-400 font-medium cursor-pointer"
                >
                  <span>Request Your 24h Free Demo →</span>
                </button>
              </li>
              <li>
                <span className="text-stone-400 block text-xs">
                  Turnaround: <strong className="text-white font-medium">24 Hours Sharp</strong>
                </span>
              </li>
              <li>
                <span className="text-stone-400 block text-xs">
                  Monthly retainers: <strong className="text-white font-medium">$0 (Zero)</strong>
                </span>
              </li>
              <li>
                <span className="text-stone-400 block text-xs">
                  Coverage: <strong className="text-white font-medium">Worldwide / Global</strong>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Global Standards & Live Status (lg:col-span-2) */}
          <div className="footer-grid-col lg:col-span-2 space-y-3.5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Live Edge Status
            </h3>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>100% Operational</span>
              </div>
              <div className="flex items-center gap-1.5 text-stone-400">
                <Clock className="w-3.5 h-3.5" />
                <span>{currentTime || "UTC Live"}</span>
              </div>
              <div className="flex items-center gap-1.5 text-stone-400">
                <Globe2 className="w-3.5 h-3.5" />
                <span>Next.js Edge Global</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* ACT 3: MASSIVE ARCHITECTURAL DISPLAY MONOLITH ("LIKE IT PAY IT")  */}
        {/* ================================================================= */}
        <div className="relative pt-6 sm:pt-10 select-none pointer-events-none">
            {/* Subtle Ambient Radial Backlight Glow */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-blue-600/15 via-blue-500/5 to-transparent blur-3xl pointer-events-none"
            />

            <div className="footer-brand-monolith text-center font-[family-name:var(--font-heading)] font-black text-[12vw] sm:text-[12.8vw] tracking-tighter leading-none uppercase whitespace-nowrap will-change-transform">
              <span className="bg-gradient-to-b from-white/35 via-white/20 to-white/10 bg-clip-text text-transparent">
                LIKE IT
              </span>
              <span className="inline-block mx-[0.18em] text-[#1a73e8] dark:text-blue-500 drop-shadow-[0_0_30px_rgba(26,115,232,0.9)]">
                •
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-[#1a73e8] to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(37,99,235,0.4)]">
                PAY IT
              </span>
            </div>
          </div>

          {/* ================================================================= */}
          {/* ACT 4: UTILITY BASELINE & BACK TO TOP                             */}
          {/* ================================================================= */}
          <div className="pt-6 border-t border-[#2B2724] dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-400 dark:text-slate-400">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-center sm:text-left">
              <span>© 2026 LikeItPayIt. All rights reserved.</span>
              <span>•</span>
              <span>No upfront payment. Try before you buy.</span>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white transition-all active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
    </footer>
  );
}
