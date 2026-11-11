"use client";

import React, { useRef } from "react";
import {
  Sparkles,
  Building2,
  ShieldCheck,
  Check,
  X,
  Car,
  Smartphone,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface HybridComparisonSectionProps {
  onOpenIntake: () => void;
}

export function HybridComparisonSection({ onOpenIntake }: HybridComparisonSectionProps) {
  const containerRef = useRef<HTMLElement>(null);

  const comparisonRows = [
    {
      metric: "Delivery Speed",
      ai: "Instant (60 sec), but messy & robotic",
      agency: "4 to 8 weeks (Slow & endless waiting)",
      hybrid: "Ready in 24 Hours (Clean & hand-finished)",
      highlight: true,
    },
    {
      metric: "Upfront Cost & Risk",
      ai: "Monthly subscription before you even see it",
      agency: "Large deposit upfront (non-refundable)",
      hybrid: "Free upfront. $0 deposit. Zero risk.",
      highlight: true,
    },
    {
      metric: "Website Words & Text",
      ai: "Robotic, fake-sounding AI buzzwords",
      agency: "Takes weeks of long briefing meetings",
      hybrid: "Simple, natural words written for real humans",
      highlight: false,
    },
    {
      metric: "How Customers Reach You",
      ai: "Boring contact forms that nobody fills out",
      agency: "Complicated forms sent to unread inboxes",
      hybrid: "1-Tap direct WhatsApp, call & inquiry buttons",
      highlight: false,
    },
    {
      metric: "Looks on Mobile Phones",
      ai: "Broken buttons & cut-off text on phones",
      agency: "Good, but takes weeks of back-and-forth fixes",
      hybrid: "Hand-tested on real iPhone & Android devices",
      highlight: false,
    },
    {
      metric: "If You Don't Like It",
      ai: "Trapped in monthly credit card charges",
      agency: "Your deposit is lost forever with no refund",
      hybrid: "Walk away freely. You owe $0. Zero pressure.",
      highlight: true,
    },
  ];

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            ".comparison-badge-curtain",
            ".comparison-th-curtain",
          ],
          { display: "none" }
        );
        return;
      }

      // 1. Master Section Header Timeline (Smooth masked text reveal)
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".comparison-header",
          start: "top 82%",
        },
      });

      headerTl
        .fromTo(
          ".comparison-reveal-line",
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.35,
            stagger: 0.14,
            ease: "power3.out",
          }
        )
        .fromTo(
          ".comparison-header-p",
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.95"
        );

      // 2. Table & Badge Reveal Timeline
      const tableTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".comparison-table-wrap",
          start: "top 80%",
        },
      });

      tableTl
        .fromTo(
          ".comparison-table-title",
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0, ease: "power3.out" }
        )
        // Curtain Wipe Reveal for "100% Risk Removed" Badge
        .fromTo(
          ".comparison-badge-curtain",
          { xPercent: 0 },
          {
            xPercent: 102,
            duration: 1.05,
            ease: "power3.inOut",
            onComplete: () => {
              gsap.set(".comparison-badge-curtain", { display: "none" });
            },
          },
          "-=0.7"
        )
        // Curtain Wipe Reveal for "LikeItPayIt (Hybrid)" Table Header
        .fromTo(
          ".comparison-th-curtain",
          { xPercent: 0 },
          {
            xPercent: 102,
            duration: 1.15,
            ease: "power3.inOut",
            onComplete: () => {
              gsap.set(".comparison-th-curtain", { display: "none" });
            },
          },
          "-=0.85"
        )
        .fromTo(
          ".comparison-table-row",
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.6"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="comparison"
      ref={containerRef}
      className="w-full bg-[#FAF8F5] dark:bg-[#07090E] text-[#1C1917] dark:text-slate-100 py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 transition-colors duration-200 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Editorial Section Header: Awwwards Split Frame with Masked Text Reveals */}
        <div className="comparison-header flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 lg:gap-10 pb-8 sm:pb-10">
          <div className="space-y-3 sm:space-y-4 max-w-4xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.035em] leading-[1.04] sm:leading-[0.98] text-[#1C1917] dark:text-white font-[family-name:var(--font-heading)]">
              <span className="block overflow-hidden pb-1.5 sm:pb-2">
                <span className="comparison-reveal-line block will-change-transform">
                  AI Speed. Human Soul.
                </span>
              </span>
              <span className="block overflow-hidden pb-1.5 sm:pb-2">
                <span className="comparison-reveal-line block will-change-transform text-[#1a73e8] dark:text-blue-500 font-medium">
                  Zero Bureaucracy.
                </span>
              </span>
            </h2>
          </div>

          <div className="lg:max-w-md space-y-3">
            <div className="overflow-hidden pb-1">
              <p className="comparison-header-p text-sm sm:text-base text-[#57534E] dark:text-slate-300 leading-relaxed font-normal will-change-transform">
                Pure AI website generators feel like plastic, robotic, stiff & generic. Most agencies are slow, arrogant & overpriced.{" "}
                <strong className="text-[#1C1917] dark:text-white font-semibold">
                  We took the best of both worlds & threw away the garbage.
                </strong>
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>Tested live before any payment is ever made</span>
            </div>
          </div>
        </div>

        {/* Detailed Side-by-Side Comparison Matrix Table Wrapper */}
        <div className="comparison-table-wrap rounded-2xl border border-[#E7E2D8] dark:border-slate-800 bg-white dark:bg-[#0B0F19] overflow-hidden shadow-sm">
          <div className="p-4 sm:p-8 border-b border-[#E7E2D8] dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 bg-[#FAF8F5]/50 dark:bg-[#07090E]/50">
            <div className="comparison-table-title will-change-transform">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#78716C] dark:text-slate-400">
                SIDE-BY-SIDE COMPARISON
              </span>
              <h3 className="text-lg sm:text-2xl font-bold text-[#1C1917] dark:text-white font-[family-name:var(--font-heading)]">
                How We Compare to Everyone Else
              </h3>
            </div>

            {/* 100% Risk Removed Badge with Curtain Wipe Reveal */}
            <div className="relative inline-block overflow-hidden rounded-xs self-start sm:self-auto">
              <div className="text-[11px] sm:text-xs font-mono text-[#1C1917] dark:text-white bg-white dark:bg-black px-3 py-1 sm:px-3.5 sm:py-1.5 border border-[#16171B] dark:border-[#FAF8F5] font-semibold">
                100% Risk Removed
              </div>

              {/* Curtain Overlay Div: Sits on top and slides away to reveal the badge */}
              <div
                aria-hidden="true"
                className="comparison-badge-curtain absolute inset-0 bg-[#FAF8F5] dark:bg-[#07090E] pointer-events-none z-10 will-change-transform"
              />
            </div>
          </div>

          {/* Mobile View: Vertical Comparison Cards Stack (sm:hidden) */}
          <div className="sm:hidden divide-y divide-[#E7E2D8] dark:divide-slate-800 p-4 space-y-4">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="pt-4 first:pt-0 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase text-[#1C1917] dark:text-white font-bold">
                    {row.metric}
                  </span>
                  {row.highlight && (
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-200 dark:border-emerald-800">
                      Zero Risk
                    </span>
                  )}
                </div>

                {/* The Winning Hybrid Option */}
                <div className="p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-blue-400">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>LikeItPayIt (Hybrid):</span>
                  </div>
                  <p className="text-xs font-semibold text-[#1C1917] dark:text-white leading-relaxed">
                    {row.hybrid}
                  </p>
                </div>

                {/* Pure AI & Agency Comparison */}
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 rounded-lg bg-[#FAF8F5] dark:bg-slate-900/50 border border-[#E7E2D8] dark:border-slate-800 space-y-0.5">
                    <span className="font-mono text-[10px] text-stone-500 dark:text-slate-400 block font-medium">Pure AI:</span>
                    <span className="text-[#57534E] dark:text-slate-300 block leading-snug">{row.ai}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAF8F5] dark:bg-slate-900/50 border border-[#E7E2D8] dark:border-slate-800 space-y-0.5">
                    <span className="font-mono text-[10px] text-stone-500 dark:text-slate-400 block font-medium">Agency:</span>
                    <span className="text-[#57534E] dark:text-slate-300 block leading-snug">{row.agency}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop & Tablet View: Full Swiss Matrix Table (hidden sm:block) */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-[#F0ECE1] dark:border-slate-800 text-sm font-mono uppercase tracking-wider text-[#78716C] dark:text-slate-400 bg-[#F9F7F2] dark:bg-slate-900/60">
                  <th className="py-4 px-6 w-1/4">What You Get</th>
                  <th className="py-4 px-6 w-1/4 text-stone-500 dark:text-slate-400">Pure AI Builders</th>
                  <th className="py-4 px-6 w-1/4 text-stone-500 dark:text-slate-400">Traditional Agency</th>

                  {/* LikeItPayIt (Hybrid) Header with Curtain Wipe Reveal */}
                  <th className="py-4 px-6 w-1/4 relative overflow-hidden bg-[#1A73E8] dark:bg-slate-800/80">
                    <span className="relative z-0 text-white dark:text-white font-bold block">
                      LikeItPayIt (Hybrid)
                    </span>

                    {/* Curtain Overlay Div: Uncovers the electric blue header on scroll */}
                    <div
                      aria-hidden="true"
                      className="comparison-th-curtain absolute inset-0 bg-[#FAF8F5] dark:bg-[#07090E] pointer-events-none z-10 will-change-transform"
                    />
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0ECE1] dark:divide-slate-800/60 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="comparison-table-row hover:bg-[#FAF8F5] dark:hover:bg-slate-900/30 transition-colors will-change-transform"
                  >
                    <td className="py-4 px-6 font-semibold text-[#1C1917] dark:text-slate-200">
                      {row.metric}
                    </td>
                    <td className="py-4 px-6 text-[#78716C] dark:text-slate-400">
                      {row.ai}
                    </td>
                    <td className="py-4 px-6 text-[#78716C] dark:text-slate-400">
                      {row.agency}
                    </td>
                    <td className="py-4 px-6 font-bold text-[#1C1917] dark:text-white bg-[#FAF8F5]/80 dark:bg-slate-800/40">
                      {row.hybrid}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
