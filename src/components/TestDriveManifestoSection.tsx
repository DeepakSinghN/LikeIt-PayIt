"use client";

import React, { useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface TestDriveManifestoSectionProps {
  onOpenIntake: () => void;
}

export function TestDriveManifestoSection({ onOpenIntake }: TestDriveManifestoSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const carWrapRef = useRef<HTMLDivElement>(null);
  const wheelsRef = useRef<SVGGElement[]>([]);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      // 1. Master Section Entrance Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
        },
      });

      // Left Column: Editorial Headline Masked Reveals
      tl.fromTo(
        ".manifesto-headline-line",
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.35,
          stagger: 0.12,
          ease: "power3.out",
        }
      )
        // Left Column: Supporting Paragraphs
        .fromTo(
          ".manifesto-p-primary",
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, ease: "power3.out" },
          "-=0.9"
        )
        .fromTo(
          ".manifesto-p-secondary",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
          "-=0.8"
        )
        // Right Column: Wireframe Car Glides into frame
        .fromTo(
          carWrapRef.current,
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.4, ease: "power3.out" },
          "-=1.1"
        )
        // Right Column: Massive "0% ↓" Stat
        .fromTo(
          ".manifesto-stat-num",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
          "-=0.9"
        )
        .fromTo(
          ".manifesto-arrow",
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power2.out" },
          "-=0.7"
        )
        .fromTo(
          ".manifesto-stat-caption",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
          "-=0.7"
        );

      // Continuous Wireframe Parallax on Scroll (calibrated per breakpoint)
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.to(carWrapRef.current, {
          x: -25,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.to(carWrapRef.current, {
          x: -10,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="test-drive"
      ref={containerRef}
      className="w-full bg-[#FAF8F5] dark:bg-[#07090E] text-[#1C1917] dark:text-slate-100 py-16 sm:py-28 lg:py-40 px-5 sm:px-8 lg:px-12 transition-colors duration-200 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-start">

          {/* ================================================================= */}
          {/* LEFT COLUMN: THE EDITORIAL HEADLINE & CORE PRINCIPLE             */}
          {/* ================================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 sm:space-y-16 lg:space-y-36">

            {/* Top: Massive Typographic Statement */}
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.85rem] font-normal tracking-[-0.035em] leading-[1.08] sm:leading-[1.04] text-[#1C1917] dark:text-white font-[family-name:var(--font-heading)]">
                <span className="block overflow-hidden pb-1.5 sm:pb-1">
                  <span className="manifesto-headline-line block will-change-transform">
                    You wouldn&apos;t buy
                  </span>
                </span>
                <span className="block overflow-hidden pb-1.5 sm:pb-1">
                  <span className="manifesto-headline-line block will-change-transform">
                    a car without
                  </span>
                </span>
                <span className="block overflow-hidden pb-1.5 sm:pb-1">
                  <span className="manifesto-headline-line block will-change-transform">
                    test-driving it.
                  </span>
                </span>
                <span className="block overflow-hidden pb-1.5 sm:pb-1 pt-2 sm:pt-4">
                  <span className="manifesto-headline-line block font-[family-name:var(--font-serif)] italic text-[#1a73e8] dark:text-blue-500 font-light will-change-transform">
                    Why pay for a website you haven&apos;t seen?
                  </span>
                </span>
              </h2>
            </div>

            {/* Bottom Left: Two-tier Editorial Explanation */}
            <div className="space-y-4 sm:space-y-5 max-w-xl">
              <p className="manifesto-p-primary text-[15px] sm:text-xl md:text-2xl text-[#1C1917] dark:text-slate-100 font-normal leading-relaxed tracking-tight">
                In everyday life, you always try before you buy — whether it&apos;s trying on clothes or test-driving a car.
              </p>

              <p className="manifesto-p-secondary text-xs sm:text-sm md:text-base text-[#57534E] dark:text-slate-400 font-normal leading-relaxed">
                Yet in web design, most agencies ask for large upfront deposits before you see a single page. We flipped the model: test your live, working website on your own phone first. If you like it, you pay. If not, you walk away owing $0.
              </p>
            </div>
          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: THE WIREFRAME CAR & BIG STAT                       */}
          {/* ================================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10 sm:space-y-20 lg:space-y-36 lg:pl-4 xl:pl-8">

            {/* Top Right: Architectural Moving Wireframe Car with Rotating Wheels */}
            <div
              ref={carWrapRef}
              className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[16/9] flex items-center justify-center mx-auto lg:mx-0 will-change-transform"
            >
              {/* Subtle ambient aura behind wireframe */}
              <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <svg
                viewBox="-120 0 640 260"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto overflow-visible select-none"
              >
                <defs>
                  {/* Subtle linear gradient for technical chassis lines */}
                  <linearGradient id="wireframeStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="currentColor" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.5" />
                  </linearGradient>

                  {/* Volumetric Headlight Beam: Originates at car lens (100%) and smoothly dissolves to 0% */}
                  <linearGradient id="headlightBeam" x1="100%" y1="50%" x2="0%" y2="50%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.75" />
                    <stop offset="25%" stopColor="#1a73e8" stopOpacity="0.45" />
                    <stop offset="65%" stopColor="#1a73e8" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#1a73e8" stopOpacity="0" />
                  </linearGradient>

                  {/* Road Surface Illumination Pool Gradient */}
                  <radialGradient id="roadGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
                    <stop offset="60%" stopColor="#1a73e8" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#1a73e8" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Floating Orbital Blueprint Dots (Matching the reference image style) */}
                <g className="text-[#1C1917]/30 dark:text-slate-500">
                  <circle cx="-50" cy="95" r="1.5" fill="currentColor" />
                  <circle cx="-20" cy="175" r="1.5" fill="currentColor" />
                  <circle cx="65" cy="55" r="1.5" fill="currentColor" />
                  <circle cx="140" cy="35" r="2" fill="currentColor" />
                  <circle cx="280" cy="25" r="1.5" fill="currentColor" />
                  <circle cx="430" cy="45" r="2" fill="currentColor" />
                  <circle cx="485" cy="110" r="1.5" fill="currentColor" />
                  <circle cx="35" cy="140" r="1.5" fill="currentColor" />
                  <circle cx="95" cy="235" r="1.5" fill="currentColor" />
                  <circle cx="420" cy="235" r="2" fill="currentColor" />
                </g>

                {/* Road Surface Light Pool under beam */}
                <ellipse cx="-25" cy="205" rx="75" ry="6" fill="url(#roadGlow)" />

                {/* Volumetric Headlight Beam: Smoothly expands and feathers out completely */}
                <path
                  d="M 48 158
                     C -10 152, -55 146, -100 142
                     C -115 162, -115 185, -105 205
                     C -50 205, 5 202, 45 185
                     Z"
                  fill="url(#headlightBeam)"
                />

                {/* Headlight Projector Lens Bulb & Aura */}
                <circle cx="48" cy="160" r="2.5" fill="#38bdf8" />
                <circle cx="48" cy="160" r="7" fill="#38bdf8" fillOpacity="0.25" />

                {/* Ground / Road Guide Wire */}
                <line
                  x1="-100"
                  y1="205"
                  x2="510"
                  y2="205"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                  className="text-[#1C1917]/25 dark:text-slate-700"
                />

                {/* Main Vehicle Chassis Silhouette (Aerodynamic Luxury GT Coupe) */}
                <g className="text-[#1C1917] dark:text-slate-200" stroke="currentColor">
                  {/* Outer Silhouette */}
                  <path
                    d="M 45 185
                       L 38 172
                       Q 42 152 75 148
                       L 155 125
                       Q 230 78 285 78
                       L 345 80
                       Q 425 105 462 145
                       Q 485 155 480 178
                       L 472 185
                       L 428 185
                       A 36 36 0 0 0 356 185
                       L 190 185
                       A 36 36 0 0 0 118 185
                       Z"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Greenhouse Glass / Roofline Curve */}
                  <path
                    d="M 165 125
                       Q 235 84 285 84
                       L 340 86
                       Q 405 110 435 145"
                    strokeWidth="1.4"
                    strokeOpacity="0.75"
                  />

                  {/* Window Pillar Cut (A-Pillar & B-Pillar) */}
                  <line
                    x1="275"
                    y1="84"
                    x2="280"
                    y2="142"
                    strokeWidth="1.2"
                    strokeOpacity="0.6"
                  />

                  {/* Window Bottom Waistline */}
                  <path
                    d="M 158 140
                       L 435 145"
                    strokeWidth="1.2"
                    strokeOpacity="0.5"
                  />

                  {/* Aerodynamic Side Character Swage Line */}
                  <path
                    d="M 85 152
                       Q 210 156 350 150
                       Q 400 148 465 160"
                    strokeWidth="1.2"
                    strokeDasharray="3 3"
                    strokeOpacity="0.55"
                  />

                  {/* Door Handle Accent */}
                  <line
                    x1="295"
                    y1="152"
                    x2="318"
                    y2="152"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="text-[#1a73e8] dark:text-blue-500"
                  />

                  {/* Front Projector Headlight Accent */}
                  <line
                    x1="45"
                    y1="162"
                    x2="72"
                    y2="157"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="text-[#1a73e8] dark:text-blue-500"
                  />

                  {/* Rear LED Light Accent */}
                  <line
                    x1="468"
                    y1="162"
                    x2="480"
                    y2="170"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="text-rose-500"
                  />
                </g>

                {/* Rotating Front Wheel (x = 154, y = 185, r = 30) */}
                <g className="text-[#1C1917] dark:text-white" stroke="currentColor">
                  {/* Wheel Arch Accent */}
                  <path
                    d="M 112 185 A 42 42 0 0 1 196 185"
                    strokeWidth="1.2"
                    strokeDasharray="2 3"
                    className="text-[#1C1917]/40 dark:text-slate-600"
                  />
                  {/* Outer Rim */}
                  <circle cx="154" cy="185" r="28" strokeWidth="1.8" />
                  <circle cx="154" cy="185" r="18" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="154" cy="185" r="5" fill="currentColor" />

                  {/* Rotating Spokes (CSS animated rotation around center 154 185) */}
                  <g className="animate-[spin_4s_linear_infinite] origin-[154px_185px]">
                    <line x1="154" y1="157" x2="154" y2="213" strokeWidth="1.4" />
                    <line x1="126" y1="185" x2="182" y2="185" strokeWidth="1.4" />
                    <line x1="134" y1="165" x2="174" y2="205" strokeWidth="1.2" />
                    <line x1="134" y1="205" x2="174" y2="165" strokeWidth="1.2" />
                  </g>
                </g>

                {/* Rotating Rear Wheel (x = 392, y = 185, r = 30) */}
                <g className="text-[#1C1917] dark:text-white" stroke="currentColor">
                  {/* Wheel Arch Accent */}
                  <path
                    d="M 350 185 A 42 42 0 0 1 434 185"
                    strokeWidth="1.2"
                    strokeDasharray="2 3"
                    className="text-[#1C1917]/40 dark:text-slate-600"
                  />
                  {/* Outer Rim */}
                  <circle cx="392" cy="185" r="28" strokeWidth="1.8" />
                  <circle cx="392" cy="185" r="18" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="392" cy="185" r="5" fill="currentColor" />

                  {/* Rotating Spokes (CSS animated rotation around center 392 185) */}
                  <g className="animate-[spin_4s_linear_infinite] origin-[392px_185px]">
                    <line x1="392" y1="157" x2="392" y2="213" strokeWidth="1.4" />
                    <line x1="364" y1="185" x2="420" y2="185" strokeWidth="1.4" />
                    <line x1="372" y1="165" x2="412" y2="205" strokeWidth="1.2" />
                    <line x1="372" y1="205" x2="412" y2="165" strokeWidth="1.2" />
                  </g>
                </g>
              </svg>
            </div>

            {/* Bottom Right: Big Stat Matching the Reference Photo (0% ↓) */}
            <div className="space-y-3 sm:space-y-4 pt-2">
              <div className="flex items-baseline gap-2 sm:gap-3">
                {/* Massive 0 Number */}
                <span className="manifesto-stat-num text-6xl sm:text-8xl md:text-9xl font-normal tracking-[-0.05em] leading-none text-[#1C1917] dark:text-white font-[family-name:var(--font-heading)] will-change-transform">
                  0
                </span>

                {/* Percentage Sign */}
                <span className="text-2xl sm:text-4xl md:text-5xl font-light text-[#1C1917] dark:text-white font-mono">
                  %
                </span>

                {/* Clean Downward Arrow matching the reference photo */}
                <div className="manifesto-arrow pl-1 sm:pl-2 will-change-transform">
                  <ArrowDown
                    strokeWidth={1.5}
                    className="w-7 h-7 sm:w-11 sm:h-11 md:w-14 md:h-14 text-[#1C1917] dark:text-white"
                  />
                </div>
              </div>

              {/* Exact Caption Styling matching GCX Sustainability caption */}
              <p className="manifesto-stat-caption text-xs sm:text-sm md:text-base text-[#57534E] dark:text-slate-400 font-normal leading-relaxed max-w-sm pt-1">
                Upfront deposit required to test-drive your live website. Zero financial risk on your side.
              </p>

              {/* Minimalist Action Trigger (Touch-safe 44px) */}
              <div className="pt-2 sm:pt-4">
                <button
                  onClick={onOpenIntake}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-tight text-[#1a73e8] dark:text-blue-400 hover:text-[#1557b0] transition-colors group cursor-pointer min-h-[44px] py-2"
                >
                  <span>Claim Your Free 24h Test Drive</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
