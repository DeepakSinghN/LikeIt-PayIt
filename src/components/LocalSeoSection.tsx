"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  Compass,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Zap,
  TrendingUp,
  Cpu,
  MapPin,
  Clock,
  Sparkles,
  Check,
  Minus,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface LocalSeoSectionProps {
  onOpenIntake: () => void;
}

export function LocalSeoSection({ onOpenIntake }: LocalSeoSectionProps) {
  const containerRef = useRef<HTMLElement>(null);

  // 3 Architectural Technical Pillars: How We Help
  const technicalPillars = [
    {
      number: "01",
      badge: "GOOGLE SEARCH & MAPS",
      title: "Show Up First When People Search Nearby",
      headlineDesc: "Be the first business local customers see on Google Maps and Search.",
      howWeHelp:
        "When someone nearby searches for what you sell, Google shows local businesses first. We set up your website with the right local data and map tags so Google clearly understands your business and puts you in front of ready-to-buy customers.",
      meta: "GOOGLE MAPS READY • NEARBY CUSTOMERS",
    },
    {
      number: "02",
      badge: "INSTANT LOAD SPEED",
      title: "Opens in Under 1 Second on Any Phone",
      headlineDesc: "Fast websites win customers. Slow websites lose them before they open.",
      howWeHelp:
        "Most customers leave a website if it takes more than 3 seconds to open. We build clean, lightweight websites that load in less than a second on any phone, anywhere in the world. Google loves fast websites and gives them higher search ranks.",
      meta: "OPENS IN < 1 SECOND • 99/100 SPEED SCORE",
    },
    {
      number: "03",
      badge: "DIRECT CUSTOMER CONTACT",
      title: "Get Direct Calls & Messages Fast",
      headlineDesc: "No long forms that get lost. Customers can contact you in one tap.",
      howWeHelp:
        "We place easy 1-tap Call, WhatsApp, and message buttons right where visitors look. Instead of filling out boring contact forms that sit in an unread inbox, customers can reach you directly on your phone and start doing business with you.",
      meta: "1-TAP CALL & CHAT • ZERO MONTHLY FEES",
    },
  ];

  // The Forensic Transparency Matrix Rows (No bulky cards — pure hairline Swiss ledger)
  const transparencyLedgerRows = [
    {
      signal: "Core Web Vitals Load Speed",
      detail: "Google PageSpeed performance & mobile render velocity",
      tier1: "0.8s Instant (Sub-second static compilation)",
      tier1Status: "included",
      tier2: "Continuous Edge CDN & dynamic asset caching",
      tier2Status: "addon",
    },
    {
      signal: "LocalBusiness JSON-LD Schema",
      detail: "Structured machine code feeding Google's Knowledge Graph",
      tier1: "100% Hardcoded (Exact GPS pins, hours & catalog)",
      tier1Status: "included",
      tier2: "Dynamic seasonal event & promotional schema sync",
      tier2Status: "addon",
    },
    {
      signal: "OpenGraph Social Previews",
      detail: "High-res cards when your link is shared on WhatsApp or Instagram",
      tier1: "Custom visual preview cards pre-configured",
      tier1Status: "included",
      tier2: "A/B tested seasonal social preview campaigns",
      tier2Status: "addon",
    },
    {
      signal: "Search Console XML Sitemap",
      detail: "Automated indexing so Google crawls every page without delay",
      tier1: "Auto-generated & verified search indexing",
      tier1Status: "included",
      tier2: "Weekly crawl anomaly monitoring & index health logs",
      tier2Status: "addon",
    },
    {
      signal: "Google Maps Local 3-Pack",
      detail: "Capturing the top 3 map pins in your 5km neighborhood radius",
      tier1: "Rank #1 for direct brand name & direct address queries",
      tier1Status: "included",
      tier2: "Active 5km Takeover: Outranking neighboring rivals for 'near me' money terms",
      tier2Status: "addon",
    },
    {
      signal: "Local Directory Citations",
      detail: "Synchronized NAP listings across Justdial, Sulekha & Indian directories",
      tier1: "Basic search registration",
      tier1Status: "included",
      tier2: "40+ Local directory citation building & review management",
      tier2Status: "addon",
    },
    {
      signal: "Monthly Lead Attribution Audit",
      detail: "Transparent monthly reporting showing actual customer calls generated",
      tier1: "Direct 1-tap WhatsApp & phone buttons wired directly to you",
      tier1Status: "included",
      tier2: "Transparent monthly ROI ledger: Verified calls & WhatsApp walk-ins",
      tier2Status: "addon",
    },
    {
      signal: "The Financial Investment",
      detail: "Upfront deposit or ongoing recurring commitment",
      tier1: "₹0 Extra (100% Free with Every Demo)",
      tier1Status: "included-highlight",
      tier2: "Optional Growth Add-On (Zero lock-in contract)",
      tier2Status: "addon-highlight",
    },
  ];

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(".seo-btn-curtain", { display: "none" });
        gsap.set(".seo-bar-without", { width: "56.25%" });
        gsap.set(".seo-bar-with", { width: "97.5%" });
        gsap.set(".seo-pillar-line", { scaleX: 1 });
        gsap.set(".seo-pillar-content", { y: 0, opacity: 1 });
        const elWithout = containerRef.current?.querySelector(".seo-counter-without");
        const elWith = containerRef.current?.querySelector(".seo-counter-with");
        if (elWithout) elWithout.textContent = "45";
        if (elWith) elWith.textContent = "78";
        return;
      }

      // 1. Master Section Header Timeline (Cinematic masked reveal)
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".seo-header",
          start: "top 82%",
        },
      });

      headerTl
        .fromTo(
          ".seo-reveal-line",
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.35,
            stagger: 0.12,
            ease: "power3.out",
          }
        )
        .fromTo(
          ".seo-header-p",
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.9"
        );

      // 2. Local SEO vs Without SEO Comparison Chart Animation
      const chartTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".seo-chart-container",
          start: "top 80%",
        },
      });

      // Subtle chart container entrance
      chartTl.fromTo(
        ".seo-chart-container",
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power2.out" }
      );

      // Animate "Without SEO" purple bar from left (to 56.25%, representing 45 on 0-80 scale)
      chartTl.fromTo(
        ".seo-bar-without",
        { width: "0%" },
        {
          width: "56.25%",
          duration: 1.4,
          ease: "power3.out",
        },
        "-=0.4"
      );

      // Animate "With SEO" amber bar from left (surging further to 97.5%, representing 78 on 0-80 scale)
      chartTl.fromTo(
        ".seo-bar-with",
        { width: "0%" },
        {
          width: "97.5%",
          duration: 1.8,
          ease: "power3.out",
        },
        "-=1.1"
      );

      // Live animated numerical counters matching the scale (0 -> 45 and 0 -> 78)
      const counterWithout = { val: 0 };
      const counterWith = { val: 0 };
      const elWithout = containerRef.current?.querySelector(".seo-counter-without");
      const elWith = containerRef.current?.querySelector(".seo-counter-with");

      if (elWithout) {
        chartTl.to(
          counterWithout,
          {
            val: 45,
            duration: 1.4,
            ease: "power3.out",
            onUpdate: () => {
              elWithout.textContent = Math.round(counterWithout.val).toString();
            },
          },
          "<"
        );
      }

      if (elWith) {
        chartTl.to(
          counterWith,
          {
            val: 78,
            duration: 1.8,
            ease: "power3.out",
            onUpdate: () => {
              elWith.textContent = Math.round(counterWith.val).toString();
            },
          },
          "<"
        );
      }

      // 3. Architectural Pillars: Sequential Waterfall Dropdown Reveal (Pillar 1 -> Pillar 2 -> Pillar 3)
      const pillarsTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".seo-pillars-grid",
          start: "top 80%",
        },
      });

      const pillarCols = gsap.utils.toArray<HTMLElement>(".seo-pillar-col");
      pillarCols.forEach((col, index) => {
        const line = col.querySelector(".seo-pillar-line");
        const content = col.querySelector(".seo-pillar-content");

        if (line && content) {
          pillarsTl
            // Top hairline line sweeps smoothly Left-to-Right
            .fromTo(
              line,
              { scaleX: 0, transformOrigin: "left center" },
              {
                scaleX: 1,
                duration: 0.7,
                ease: "power2.out",
              },
              index === 0 ? 0 : "+=0.15"
            )
            // Pillar content drops down smoothly out of the hairline like a luxury shade/dropdown
            .fromTo(
              content,
              { y: -35, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
              },
              "-=0.15"
            );
        }
      });

      // 4. Transparency Gateway Banner Reveal
      gsap.fromTo(
        ".seo-transparency-gateway",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".seo-transparency-gateway",
            start: "top 85%",
          },
        }
      );

      // 4. Curtain Wipe Reveal on Footer CTA Button
      gsap.fromTo(
        ".seo-btn-curtain",
        { xPercent: 0 },
        {
          xPercent: 102,
          duration: 1.05,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".seo-cta-wrap",
            start: "top 88%",
          },
          onComplete: () => {
            gsap.set(".seo-btn-curtain", { display: "none" });
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="seo-engine"
      className="relative w-full bg-[#FAF8F5] dark:bg-[#07090E] text-[#1C1917] dark:text-slate-100 py-16 sm:py-28 md:py-36 px-5 sm:px-8 lg:px-12 transition-colors duration-200 overflow-hidden"
    >
      {/* Subtle Architectural Dot-Grid Texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(#1C1917 1px, transparent 1px), radial-gradient(#1C1917 1px, #FAF8F5 1px)",
          backgroundSize: "32px 32px",
          backgroundPosition: "0 0, 16px 16px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16 sm:space-y-24 md:space-y-32">
        {/* ========================================================
            PART 1: MONUMENTAL EDITORIAL CURTAIN REVEAL HEADING
           ======================================================== */}
        <div className="seo-header relative pt-2 sm:pt-4 text-center max-w-5xl mx-auto space-y-6 sm:space-y-8">
          <div className="space-y-2 ">
            <div className="overflow-hidden pb-1">
              <h2 className="seo-reveal-line text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.04em] leading-[1.04] sm:leading-[0.94] text-[#1C1917] dark:text-white font-[family-name:var(--font-heading)] ">
                Don’t let rivals steal
              </h2>
            </div>
            <div className=" pb-1">
              <h2 className="seo-reveal-line text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.04em] leading-[1.04] sm:leading-[0.94] text-[#1C1917] dark:text-white font-[family-name:var(--font-heading)] ">
                Customers Standing
              </h2>
            </div>
            <div className="overflow-hidden pb-1.5 sm:pb-1">
              <h2 className="seo-reveal-line text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[-0.04em] leading-[1.04] sm:leading-[0.94]">
                <span className="font-[family-name:var(--font-serif)] italic font-light tracking-normal text-[#1a73e8] dark:text-blue-400 lowercase inline-block mt-1">
                  500 meters away.
                </span>
              </h2>
            </div>
          </div>

          <div className="overflow-hidden">
            <p className="seo-header-p max-w-2xl mx-auto text-sm sm:text-lg text-[#57534E] dark:text-slate-300 font-normal leading-relaxed pt-1 sm:pt-2">
              Design makes people <strong className="text-[#1C1917] dark:text-white font-semibold">trust your business</strong>.
              Local SEO makes your neighborhood <strong className="text-[#1C1917] dark:text-white font-semibold">walk through your door</strong>.
            </p>
          </div>
        </div>

        {/* ========================================================
            PART 1.5: WITH SEO VS WITHOUT SEO DYNAMIC COMPARISON CHART
            (Matching the Reference Data Visualization)
           ======================================================== */}
        <div className="seo-chart-container relative w-full bg-white/80 dark:bg-[#0B0F19]/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-10 md:p-12 pr-4 sm:pr-14 md:pr-16 border border-[#E7E2D8] dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]">

          {/* Chart Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 sm:mb-12 pb-4 sm:pb-5 border-b border-[#E7E2D8]/70 dark:border-slate-800/70">
            <div>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#78716C] dark:text-slate-400 font-medium">
                LOCAL VISITOR-TO-SALE METRICS
              </span>
              <h3 className="text-sm sm:text-xl font-normal text-[#1C1917] dark:text-white mt-0.5 font-[family-name:var(--font-magnetik)]">
                Visitor-to-Customer Conversion Rate
              </h3>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-mono text-[#78716C] dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A992F6]" />
                Without SEO
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F6B365]" />
                With SEO
              </span>
            </div>
          </div>

          {/* Chart Canvas & Grid */}
          <div className="flex items-stretch">
            {/* Left Axis Labels Column */}
            <div className="w-24 sm:w-44 md:w-52 flex-shrink-0 pr-2 sm:pr-8 flex flex-col justify-between">
              {/* Row 1 Label: Without SEO */}
              <div className="h-16 sm:h-28 md:h-32 flex items-center justify-end text-right">
                <span className="text-xs sm:text-lg md:text-xl font-medium text-[#1C1917] dark:text-white tracking-tight font-[family-name:var(--font-magnetik)] leading-tight">
                  Without SEO
                </span>
              </div>

              {/* Horizontal Divider Spacing with generous breathing room */}
              <div className="my-4 sm:my-8 h-[1px] w-full" />

              {/* Row 2 Label: With SEO */}
              <div className="h-16 sm:h-28 md:h-32 flex items-center justify-end text-right">
                <span className="text-xs sm:text-lg md:text-xl font-medium text-[#1C1917] dark:text-white tracking-tight font-[family-name:var(--font-magnetik)] leading-tight">
                  With SEO
                </span>
              </div>

              {/* Bottom Scale Spacing */}
              <div className="h-8" />
            </div>

            {/* Right Chart Area */}
            <div className="flex-1 relative">
              {/* Vertical Grid Lines (0%, 20%, 40%, 60%, 80%) */}
              <div className="absolute inset-0 bottom-8 pointer-events-none">
                {/* 0 Vertical Line */}
                <div className="absolute left-0 top-0 bottom-0 border-l border-[#D6D3CD] dark:border-slate-700 z-0" />
                {/* 20 Vertical Line */}
                <div className="absolute left-[25%] top-0 bottom-0 border-l border-[#E7E2D8] dark:border-slate-800/80 z-0" />
                {/* 40 Vertical Line */}
                <div className="absolute left-[50%] top-0 bottom-0 border-l border-[#E7E2D8] dark:border-slate-800/80 z-0" />
                {/* 60 Vertical Line */}
                <div className="absolute left-[75%] top-0 bottom-0 border-l border-[#E7E2D8] dark:border-slate-800/80 z-0" />
                {/* 80 Vertical Line */}
                <div className="absolute left-[100%] top-0 bottom-0 border-l border-[#E7E2D8] dark:border-slate-800/80 z-0" />
              </div>

              {/* Horizontal Bars */}
              <div className="relative z-10 flex flex-col">
                {/* Row 1: Without SEO Purple Bar */}
                <div className="h-16 sm:h-28 md:h-32 flex items-center relative">
                  <div
                    className="seo-bar-without h-full bg-[#A992F6] dark:bg-[#9D84EB] rounded-r-xl sm:rounded-r-[32px] flex items-center justify-end pr-2.5 sm:pr-6 shadow-sm will-change-[width]"
                    style={{ width: "0%" }}
                  >
                    <span className="font-mono font-bold text-white text-xs sm:text-base md:text-lg flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                      <span><span className="seo-counter-without">35</span>%</span>
                      <span className="hidden sm:inline text-white/85 text-[10px] sm:text-xs md:text-sm font-normal">Conversion Rate</span>
                    </span>
                  </div>
                </div>

                {/* Hairline Divider with generous breathing room between the two charts */}
                <div className="my-4 sm:my-8 h-[1px] bg-[#E7E2D8] dark:bg-slate-800/80 w-full" />

                {/* Row 2: With SEO Amber Bar */}
                <div className="h-16 sm:h-28 md:h-32 flex items-center relative">
                  <div
                    className="seo-bar-with h-full bg-[#F6B365] dark:bg-[#ECA34F] rounded-r-xl sm:rounded-r-[32px] flex items-center justify-end pr-2.5 sm:pr-6 shadow-sm will-change-[width]"
                    style={{ width: "0%" }}
                  >
                    <span className="font-mono font-bold text-white text-xs sm:text-base md:text-lg flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                      <span><span className="seo-counter-with">78</span>%</span>
                      <span className="hidden sm:inline text-white/85 text-[10px] sm:text-xs md:text-sm font-normal">Conversion Rate</span>
                    </span>
                  </div>
                </div>

                {/* Bottom Horizontal Scale Ticks & Numbers */}
                <div className="h-8 relative mt-3 text-[#78716C] dark:text-slate-400 font-mono text-[11px] sm:text-sm select-none">
                  <span className="absolute left-0 -translate-x-1/2">0%</span>
                  <span className="absolute left-[25%] -translate-x-1/2">20%</span>
                  <span className="absolute left-[50%] -translate-x-1/2">40%</span>
                  <span className="absolute left-[75%] -translate-x-1/2">60%</span>
                  <span className="absolute left-[100%] -translate-x-1/2">80%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Insights Note */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#E7E2D8]/70 dark:border-slate-800/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-[#78716C] dark:text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[#1C1917] dark:text-white font-semibold">+73% HIGHER SALES CONVERSION</span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#57534E] dark:text-slate-300">
              78% of local search visitors convert into paying customers when intercepted through Google Maps 3-Pack &amp; JSON-LD Schema.
            </p>
          </div>
        </div>

        {/* ========================================================
            PART 2: HOW WE HELP & WHY WE ARE BETTER (3 PILLARS)
           ======================================================== */}
        <div className="seo-pillars-grid grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {technicalPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="seo-pillar-col relative flex flex-col justify-between"
            >
              {/* Top Animated Hairline: Sweeps smoothly Left-to-Right */}
              <div className="seo-pillar-line h-[2px] w-full bg-[#1C1917] dark:bg-slate-200 origin-left will-change-transform" />

              {/* Pillar Content Mask: reveals downward like a solid block out of the top line */}
              <div className="overflow-hidden flex-1 flex flex-col justify-between">
                <div className="seo-pillar-content flex flex-col justify-between h-full pt-6 sm:pt-7 pb-4 space-y-6 will-change-transform">
                  <div className="space-y-4">
                    {/* Column Top: Number & Tag */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-4xl sm:text-5xl font-light text-[#A8A29E] dark:text-slate-600">
                        {pillar.number}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF8F5] dark:bg-slate-900 border border-[#E7E2D8] dark:border-slate-800 text-[#78716C] dark:text-slate-300 font-medium">
                        {pillar.badge}
                      </span>
                    </div>

                    {/* Title & Core Sub-line */}
                    <div className="space-y-1.5">
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917] dark:text-white font-[family-name:var(--font-heading)]">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#1a73e8] dark:text-blue-400 leading-snug">
                        {pillar.headlineDesc}
                      </p>
                    </div>

                    {/* How We Help Narrative */}
                    <p className="text-xs sm:text-sm text-[#57534E] dark:text-slate-300 leading-relaxed font-normal">
                      {pillar.howWeHelp}
                    </p>
                  </div>

                  {/* Bottom Metadata Footnote */}
                  <div className="pt-3 border-t border-[#E7E2D8] dark:border-slate-800 text-[11px] font-mono text-[#78716C] dark:text-slate-400 flex items-center justify-between">
                    <span>{pillar.meta}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================
            PART 3: 100% HONEST BREAKDOWN (TRANSPARENCY GATEWAY)
           ======================================================== */}
        <div id="transparency" className="pt-2 sm:pt-4">
          <div className="seo-transparency-gateway bg-white dark:bg-[#0B0F19] rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-[#E7E2D8] dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-3 sm:space-y-4 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-emerald-700 dark:text-emerald-400">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                100% Honest &amp; Transparent • Zero Monthly Contracts
              </span>
              <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1917] dark:text-white font-[family-name:var(--font-heading)] leading-snug sm:leading-tight">
                The Truth Most Web Agencies Won&apos;t Tell You
              </h3>
              <p className="text-xs sm:text-base text-[#57534E] dark:text-slate-300 leading-relaxed font-normal">
                Most agencies charge expensive monthly fees for basic SEO that should be done from day one. We build fast speed, Google Maps tags & clean code directly into your website for free. You own your site 100%.
              </p>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-[11px] sm:text-xs font-mono text-[#78716C] dark:text-slate-400 pt-1">
                <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Built-In Free on Day One
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Google Search &amp; Maps Ready
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> You Own 100% of Your Website
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 flex-shrink-0 w-full md:w-auto">
              <Link
                href="/local-seo"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 min-h-[48px] rounded-xl sm:rounded-2xl bg-[#1C1917] hover:bg-[#292524] text-white dark:bg-white dark:text-[#1C1917] dark:hover:bg-stone-100 font-bold text-sm tracking-tight shadow-md hover:shadow-xl transition-all active:scale-[0.98] w-full md:w-auto"
              >
                <span>See What&apos;s Included (Full List)</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-center text-[10px] sm:text-[11px] font-mono text-[#78716C] dark:text-slate-400">
                Full side-by-side feature comparison
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 4: REASSURANCE FOOTER & SIGNATURE CURTAIN CTA
           ======================================================== */}
        <div className="seo-cta-wrap text-center max-w-2xl mx-auto space-y-5 sm:space-y-6 pt-2 sm:pt-4">
          <p className="text-xs sm:text-base text-[#57534E] dark:text-slate-300 leading-relaxed font-normal">
            Ready to see your business on a fast, modern website built to bring you real customers? Give us your business name and test-drive your free demo in 24 hours.
          </p>

          <div className="relative inline-block overflow-hidden rounded-2xl w-full sm:w-auto">
            <button
              onClick={onOpenIntake}
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 min-h-[48px] rounded-xl sm:rounded-2xl bg-[#1C1917] hover:bg-[#292524] text-white dark:bg-white dark:text-[#1C1917] dark:hover:bg-stone-100 font-bold text-sm sm:text-base tracking-tight shadow-xl hover:shadow-2xl transition-all active:scale-[0.98] cursor-pointer"
            >
              <span>Request Your Free 24h Demo</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* GSAP Curtain Wipe Layer matching ProtocolSection */}
            <div
              className="seo-btn-curtain absolute inset-0 bg-[#FAF8F5] dark:bg-[#07090E] pointer-events-none z-10"
              aria-hidden="true"
            />
          </div>

          <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-mono text-[#78716C] dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Search setup is included with every website • No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
