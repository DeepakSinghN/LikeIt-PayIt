"use client";

import React, { useRef } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ProtocolSectionProps {
  onOpenIntake: () => void;
}

export function ProtocolSection({ onOpenIntake }: ProtocolSectionProps) {
  const containerRef = useRef<HTMLElement>(null);

  const protocolSteps = [
    {
      stepNumber: "01",
      title: "Step 1: The 60-Second Request",
      desc: "Share your business name, website, or social media profile. That's all we need. No long forms, no sales calls, no credit card required, and zero upfront commitment.",
      meta: "Free to Request • Takes 60 Seconds • No Card Needed",
    },
    {
      stepNumber: "02",
      title: "Step 2: We Build It in 24 Hours",
      desc: "We research your business and competitors. Then, our designers hand-build a fast, modern homepage tailored for your customers with clean design, great mobile layout, and easy contact buttons.",
      meta: "Fast 24-Hour Turnaround • Handcrafted Design • 100% Custom",
    },
    {
      stepNumber: "03",
      title: "Step 3: Test Drive on Your Phone",
      desc: "We send you a private live link to test on your phone. Tap every button and explore how it looks. If you love it, pay a simple flat price and launch. If not, walk away freely. You owe $0 and there is zero pressure.",
      meta: "You Are in Total Control • Pay Only If You Love It • 100% Free to Walk Away",
    },
  ];

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(".protocol-btn-curtain", { display: "none" });
        return;
      }

      // Master Header Timeline for synchronized masked reveal
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".protocol-header",
          start: "top 82%",
        },
      });

      // 1. Reveal Header Title lines from below mask (smooth, cinematic curve)
      headerTl.fromTo(
        ".protocol-reveal-line",
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.35,
          stagger: 0.14,
          ease: "power3.out",
        }
      );

      // 2. Reveal Right Column Narrative Paragraph from below mask
      headerTl.fromTo(
        ".protocol-header-p",
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.95"
      );

      // 3. Curtain Wipe Reveal: The overlay div uncovers the stationary button by sliding away to the right
      headerTl.fromTo(
        ".protocol-btn-curtain",
        { xPercent: 0 },
        {
          xPercent: 102,
          duration: 1.05,
          ease: "power3.inOut",
          onComplete: () => {
            gsap.set(".protocol-btn-curtain", { display: "none" });
          },
        },
        "-=0.8"
      );

      // 4. Reveal Header Hairline Divider smoothly from left to right with intentional delay
      headerTl.fromTo(
        ".protocol-header-line",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.4,
          delay: 0.25,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // Reveal Each Protocol Row as user scrolls
      const rows = gsap.utils.toArray<HTMLElement>(".protocol-row");
      rows.forEach((row) => {
        const line = row.querySelector(".protocol-row-line");
        const title = row.querySelector(".protocol-row-title");
        const desc = row.querySelector(".protocol-row-desc");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 88%",
          },
        });

        if (title) {
          tl.fromTo(
            title,
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 1.25, ease: "power3.out" }
          );
        }

        if (desc) {
          tl.fromTo(
            desc,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
            "-=0.9"
          );
        }

        // Animate Hairline Divider: Smooth Left-to-Right Reveal with intentional delay
        if (line) {
          gsap.fromTo(
            line,
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
              duration: 1.3,
              delay: 0.3,
              ease: "power2.out",
              scrollTrigger: {
                trigger: line,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="protocol"
      ref={containerRef}
      className="relative w-full bg-[#FAF8F5] dark:bg-[#07090E] text-[#1C1917] dark:text-slate-100 py-16 sm:py-24 md:py-36 px-5 sm:px-8 lg:px-12 transition-colors duration-200 font-[family-name:var(--font-magnetik)] overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto space-y-6 sm:space-y-10">

        {/* Top Header Row matching the exact reference layout */}
        <div className="protocol-header relative grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start pb-6 sm:pb-8">

          {/* Left Column: Big Editorial Headline */}
          <div className="lg:col-span-7 xl:col-span-7">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.03em] leading-[1.08] sm:leading-[1.05] text-[#1C1917] dark:text-white font-[family-name:var(--font-heading)]">
              <span className="block overflow-hidden pb-1.5 sm:pb-1">
                <span className="protocol-reveal-line block will-change-transform">
                  From Zero to a Live
                </span>
              </span>
              <span className="block overflow-hidden pb-1.5 sm:pb-1">
                <span className="protocol-reveal-line block will-change-transform">
                  Working Homepage
                </span>
              </span>
              <span className="block overflow-hidden pb-1.5 sm:pb-1">
                <span className="protocol-reveal-line block will-change-transform text-[#1a73e8] dark:text-blue-500 font-medium">
                  in 24 Hours.
                </span>
              </span>
            </h2>
          </div>

          {/* Right Column: Supporting narrative and minimal button with masked reveals */}
          <div className="protocol-header-right lg:col-span-5 xl:col-span-5 space-y-5 lg:pt-2">
            <div className="overflow-hidden pb-1">
              <p className="protocol-header-p text-sm sm:text-lg text-[#1C1917]/80 dark:text-slate-300 leading-relaxed font-normal sm:font-thin font-[family-name:var(--font-magnetik)] will-change-transform">
                Whether trying on clothes or test-driving a car, you <strong className="font-semibold sm:font-normal text-[#1C1917] dark:text-white">always try before you buy</strong>. Getting a website should be <strong className="font-semibold sm:font-normal text-[#1C1917] dark:text-white">no different</strong>.
              </p>
            </div>

            <div>
              <div className="relative inline-block overflow-hidden rounded-lg">
                <button
                  onClick={onOpenIntake}
                  className="inline-flex items-center gap-2 px-5 py-3 sm:py-2.5 min-h-[44px] rounded-lg bg-[#1C1917] hover:bg-[#292524] text-white dark:bg-white dark:text-[#1C1917] dark:hover:bg-stone-200 font-semibold text-xs sm:text-sm tracking-tight transition-all active:scale-[0.98] cursor-pointer shadow-sm font-[family-name:var(--font-magnetik)]"
                >
                  <span>Claim Your Free Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {/* Curtain Overlay Div: Sits on top of the button and slides off to reveal it */}
                <div
                  aria-hidden="true"
                  className="protocol-btn-curtain absolute inset-0 bg-[#FAF8F5] dark:bg-[#07090E] pointer-events-none z-10 will-change-transform"
                />
              </div>
            </div>
          </div>

          {/* Animated Hairline Divider */}
          <div className="protocol-header-line hidden absolute bottom-0 left-0 right-0 h-[1px] bg-[#1C1917]/70 dark:bg-slate-800 will-change-transform origin-left" />
        </div>

        {/* The Repeating Minimalist Rows matching Image 1 (Mobile) and Image 2 (Desktop) */}
        <div className="space-y-0">
          {protocolSteps.map((step, index) => (
            <div
              key={step.stepNumber}
              className="protocol-row relative py-8 sm:py-14 md:py-20 group"
            >


              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-28 items-start">

                {/* Left Column: Bullet point + Row Title */}
                <div className="lg:col-span-5 xl:col-span-5">
                  <div className="overflow-hidden pb-1">
                    <div className="protocol-row-title flex items-center gap-3.5 will-change-transform">
                      {/* Black/White Solid Bullet Dot matching reference */}
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1C1917] dark:bg-white inline-block flex-shrink-0" />

                      <h3 className="text-xl sm:text-2xl md:text-3xl font-medium sm:font-thin tracking-tight text-[#1C1917] dark:text-white font-[family-name:var(--font-magnetik)]">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Right Column: Narrative explanation + Metadata proof badge */}
                <div className="protocol-row-desc lg:col-span-7 xl:col-span-7 space-y-3 will-change-transform lg:pt-1">
                  <p className="text-[14px] sm:text-base md:text-lg text-[#1C1917]/90 dark:text-white/90 leading-relaxed tracking-wide font-normal sm:font-thin font-[family-name:var(--font-magnetik)]">
                    {step.desc}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-[#78716C] dark:text-slate-400">
                    <span className="inline-block">{step.meta}</span>
                  </div>
                </div>
              </div>



              {/* Animated Hairline Divider */}
              <div className="protocol-row-line absolute bottom-0 left-0 right-0 h-[1px] bg-[#1C1917]/70 dark:bg-slate-800 will-change-transform origin-left" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
