"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface HeroSectionProps {
  onOpenIntake: () => void;
}

export function HeroSection({ onOpenIntake }: HeroSectionProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Accessibility: Respect prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            ".hero-reveal-line",
            ".hero-desc-item",
            ".hero-desc-sub",
            ".hero-cta-card",
          ],
          { yPercent: 0, y: 0, opacity: 1, autoAlpha: 1 }
        );
        return;
      }

      // Master Entrance Timeline: Text emerges upwards into place from beneath overflow mask (silky smooth curve)
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-reveal-line",
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.4,
          stagger: 0.15,
          ease: "power3.out",
        }
      )
        .fromTo(
          ".hero-desc-item",
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.25,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.95"
        )
        .fromTo(
          ".hero-desc-sub",
          { y: 25, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.15,
            ease: "power3.out",
          },
          "-=0.85"
        )
        .fromTo(
          ".hero-cta-card",
          { y: 40, autoAlpha: 0, scale: 0.98 },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 1.25,
            ease: "power3.out",
          },
          "-=0.9"
        );

      // GSAP ScrollTrigger: Smooth editorial parallax scrub on scroll (active on desktop >= 1024px)
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.to(".hero-headline-wrap", {
          yPercent: -14,
          opacity: 0.85,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to(".hero-left-col", {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        gsap.to(".hero-cta-card", {
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.4,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#FAF8F5] dark:bg-[#07090E] text-[#1C1917] dark:text-slate-100 pt-28 sm:pt-36 lg:pt-50 pb-16 sm:pb-20 lg:pb-20 px-5 sm:px-8 lg:px-8 overflow-hidden transition-colors duration-200"
    >
      {/* Subtle Editorial Architectural Grid Canvas (Warm, Grounded, Zero Sci-Fi) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(#1C1917 1px, transparent 1px), radial-gradient(#1C1917 1px, #FAF8F5 1px)",
          backgroundSize: "32px 32px",
          backgroundPosition: "0 0, 16px 16px",
        }}
      />

      <div className="relative z-10 w-full space-y-8 sm:space-y-10 lg:space-y-6">
        {/* Top: MASSIVE Full-Width Headline with Editorial Masked Line Reveals */}
        <div className="hero-headline-wrap w-full will-change-transform">
          <h1 className="text-[11vw] sm:text-[9.5vw] md:text-[8.5vw] lg:text-[7.8vw] xl:text-[8vw] font-medium tracking-[-0.04em] leading-[1.04] sm:leading-[0.98] text-[#1C1917] dark:text-white font-[family-name:var(--font-heading)] w-full">
            <span className="block overflow-hidden pb-1.5 sm:pb-2">
              <span className="hero-reveal-line block will-change-transform">
                Business Growth
              </span>
              <span className="hero-reveal-line block will-change-transform">
                Starts
              </span>
            </span>
            <span className="block overflow-hidden pb-1.5 sm:pb-2">
              <span className="hero-reveal-line block will-change-transform">
                With a Better{" "}
                <span
                  style={{ fontFamily: "var(--font-serif)" }}
                  className="hero-reveal-line block will-change-transform text-[#1a73e8] dark:text-blue-500 italic font-normal tracking-normal pr-1.5 sm:pr-1 inline-block"
                >
                  Website.
                </span>
              </span>
            </span>
          </h1>
        </div>

        {/* Bottom Two-Column Split Layout matching the reference image across full screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-20 items-start w-full">
          {/* Left Column: Phase 1: The Hook (Lead with the shocking disparity) */}
          <div className="hero-left-col lg:col-span-7 xl:col-span-7 flex flex-col justify-between max-w-2xl will-change-transform">
            {/* The Disparity Breakdown */}
            <div>
              {/* The Problem */}
              <div className="overflow-hidden pb-1">
                <p className="hero-desc-item text-sm sm:text-base text-[#44403C] dark:text-slate-200 leading-relaxed font-normal will-change-transform">
                  <strong className="text-[#1C1917] dark:text-white font-semibold">76% of customers</strong> judge a business&apos;s credibility by their website on their phone before ever reaching out.
                </p>
              </div>

              {/* The Pain Point */}
              <div className="overflow-hidden pb-1 mt-3.5 sm:mt-4 mb-4 sm:mb-5">
                <p className="hero-desc-item text-sm sm:text-base text-[#44403C] dark:text-slate-200 leading-relaxed font-normal will-change-transform">
                  <strong className="text-[#1C1917] dark:text-white font-semibold">Your business might be fantastic in real life</strong>, but if your website looks old or broken on a phone, customers leave in 3 seconds. Because of this, <strong className="text-[#1C1917] dark:text-white font-semibold">64% of businesses lose sales every day</strong>.
                </p>
              </div>
            </div>

            {/* Sub-takeaway note */}
            <div className="hero-desc-sub pt-3.5 sm:pt-3 border-t border-[#E7E2D8] dark:border-[#1a73e8]/60 flex items-start sm:items-center gap-2.5 sm:gap-2 text-xs text-[#57534E] dark:text-slate-400">
              <Sparkles className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
              <span className="leading-relaxed sm:leading-normal">Test your custom homepage live first. Pay only when you are 100% satisfied.</span>
            </div>
          </div>

          {/* Right Column: Solution Card with Single Clean CTA */}
          <div className="hero-cta-card lg:col-span-5 xl:col-span-5 w-full will-change-transform">
            <div className="p-5 sm:p-8 rounded-2xl bg-[#FFFFFF] dark:bg-[#0D121D] border border-[#E7E2D8] dark:border-slate-800/90 shadow-sm dark:shadow-xl space-y-5 sm:space-y-6">
              {/* Solution Narrative */}
              <div className="space-y-3 sm:space-y-3.5">
                <p className="text-sm sm:text-base text-[#44403C] dark:text-slate-200 leading-relaxed font-normal">
                  We provide a <strong className="text-[#1C1917] dark:text-white font-semibold">free live demo</strong> of your real homepage in <strong className="text-[#1C1917] dark:text-white font-semibold">24 hours</strong>. Test it on your phone. If you love it, pay and launch. If not, walk away with zero risk and owe nothing.
                </p>
              </div>

              {/* Single Clean CTA Button */}
              <div className="pt-1">
                <button
                  onClick={onOpenIntake}
                  className="w-full group flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 min-h-[48px] rounded-xl sm:rounded-2xl bg-[#1C1917] hover:bg-[#292524] dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold text-sm sm:text-base tracking-tight shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
                >
                  <span className="font-[family-name:var(--font-heading)]">Claim Your Free 24h Demo</span>
                  <div className="w-8 h-8 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center transition-transform group-hover:translate-x-1 shrink-0">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </button>
              </div>

              {/* Sub-note Guarantee */}
              <div className="pt-3 flex flex-row items-center justify-between gap-2 text-[11px] sm:text-xs text-[#57534E] dark:text-slate-400 border-t border-[#E7E2D8] dark:border-slate-800/80">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium whitespace-nowrap">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  Free Upfront • Zero Risk
                </span>
                <span className="text-[#78716C] dark:text-slate-500 whitespace-nowrap">Ready in 24 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
