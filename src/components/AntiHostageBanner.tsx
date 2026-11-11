"use client";

import React, { useRef, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface AntiHostageBannerProps {
  onOpenIntake: () => void;
}

export function AntiHostageBanner({ onOpenIntake }: AntiHostageBannerProps) {
  const containerRef = useRef<HTMLElement>(null);
  const tabletRef = useRef<HTMLDivElement>(null);
  const torusLeftRef = useRef<HTMLDivElement>(null);
  const torusRightRef = useRef<HTMLDivElement>(null);

  // Smooth full-screen 3D Parallax Tilt Response
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!tabletRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotX = ((y / rect.height) - 0.5) * -10;
    const rotY = ((x / rect.width) - 0.5) * 10;

    gsap.to(tabletRef.current, {
      rotateX: rotX,
      rotateY: rotY,
      duration: 0.6,
      ease: "power2.out",
      transformPerspective: 1200,
    });

    if (torusLeftRef.current) {
      gsap.to(torusLeftRef.current, {
        x: ((x / rect.width) - 0.5) * 30,
        y: ((y / rect.height) - 0.5) * 30,
        duration: 0.7,
        ease: "power2.out",
      });
    }

    if (torusRightRef.current) {
      gsap.to(torusRightRef.current, {
        x: ((x / rect.width) - 0.5) * -40,
        y: ((y / rect.height) - 0.5) * -40,
        duration: 0.7,
        ease: "power2.out",
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (tabletRef.current) {
      gsap.to(tabletRef.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.9,
        ease: "power3.out",
      });
    }
    if (torusLeftRef.current) {
      gsap.to(torusLeftRef.current, {
        x: 0,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      });
    }
    if (torusRightRef.current) {
      gsap.to(torusRightRef.current, {
        x: 0,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      });
    }
  }, []);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      // 1. Entrance Reveal Timeline on Scroll (silky smooth curve)
      const entranceTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
        },
      });

      // Masked Staggered Line Reveal for Left Typography
      entranceTl.fromTo(
        ".banner-reveal-line",
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.45,
          stagger: 0.14,
          ease: "power3.out",
        }
      );

      // Tablet Entrance
      entranceTl.fromTo(
        tabletRef.current,
        { scale: 0.85, y: 60, opacity: 0 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
        },
        "-=1.1"
      );

      // Torus Left Entrance
      entranceTl.fromTo(
        torusLeftRef.current,
        { scale: 0.5, rotate: -40, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=1.15"
      );

      // Torus Right Entrance
      entranceTl.fromTo(
        torusRightRef.current,
        { scale: 0.5, rotate: 45, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=1.25"
      );

      // 2. Multi-Plane Full-Screen Parallax Scrub on Scroll
      const mm = gsap.matchMedia();

      // Desktop: Full dramatic parallax scrub
      mm.add("(min-width: 1024px)", () => {
        gsap.to(torusLeftRef.current, {
          yPercent: -35,
          rotate: 40,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        gsap.to(torusRightRef.current, {
          yPercent: -18,
          rotate: -25,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4,
          },
        });

        gsap.to(tabletRef.current, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.6,
          },
        });
      });

      // Mobile/Tablet: Enhanced parallax scrub + continuous ambient 3D levitation
      mm.add("(max-width: 1023px)", () => {
        gsap.to(torusLeftRef.current, {
          yPercent: -28,
          rotate: 22,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        gsap.to(torusRightRef.current, {
          yPercent: -22,
          rotate: -18,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        // Continuous zero-gravity floating animation on mobile/tablet (compensates for lack of mouse movement)
        gsap.to(".torus-mobile-float-left", {
          y: -14,
          x: 5,
          rotate: 6,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(".torus-mobile-float-right", {
          y: 12,
          x: -6,
          rotate: -8,
          duration: 3.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="anti-hostage"
      onClick={onOpenIntake}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[85vh] sm:min-h-screen flex items-center justify-center bg-[#FAF8F5] dark:bg-[#07090E] text-[#1C1917] dark:text-white transition-colors duration-200 select-none cursor-pointer py-16 sm:py-20 lg:py-0"
    >
      {/* 3D Floating Blue Torus Element (Behind Headline on Mobile/Tablet, Behind Left Text on Desktop) */}
      <div
        ref={torusLeftRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 sm:top-6 md:top-10 lg:top-auto lg:bottom-[5%] -left-14 sm:-left-20 md:-left-24 lg:-left-28 w-72 sm:w-[380px] md:w-[480px] lg:w-[600px] xl:w-[720px] 2xl:w-[800px] aspect-square z-0 will-change-transform"
      >
        <div className="w-full h-full relative torus-mobile-float-left will-change-transform">
          <Image
            src="/blue-torus.png"
            alt="3D Floating Torus"
            fill
            sizes="(max-width: 1024px) 100vw, 720px"
            className="object-contain drop-shadow-[0_20px_40px_rgba(37,99,235,0.2)] lg:drop-shadow-[0_25px_50px_rgba(37,99,235,0.25)] -rotate-12 opacity-70 sm:opacity-85 lg:opacity-100"
          />
        </div>
      </div>

      {/* Full-Bleed Content Flex Container - Clean mobile side margins (px-6 sm:px-10 lg:px-0) */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-0 lg:pl-28 xl:pl-40 2xl:pl-52 lg:pr-8 flex flex-col lg:flex-row items-center justify-between lg:translate-x-4 gap-6 sm:gap-8 lg:gap-6 z-30">

        {/* Left Column: Tightly Fitted to Content (Zero Empty Column Space) */}
        <div className="w-full lg:w-auto flex-shrink-0 z-20 text-left">
          <h2 className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[6.4rem] tracking-[-0.04em] leading-[0.93] font-[family-name:var(--font-magnetik)] z-20">

            {/* Lines 1-3: Bold Weight (No / Awkward / Phone Calls.) */}
            <span className="block overflow-hidden pb-1.5 sm:pb-1">
              <span className="banner-reveal-line block font-normal will-change-transform">
                No
              </span>
            </span>
            <span className="block overflow-hidden pb-1.5 sm:pb-1">
              <span className="banner-reveal-line block font-normal will-change-transform">
                Awkward
              </span>
            </span>
            <span className="block overflow-hidden pb-1.5 sm:pb-1">
              <span className="banner-reveal-line block font-normal will-change-transform">
                Phone Calls.
              </span>
            </span>

            {/* Lines 4-5: Light / Regular Weight (No Sales / Hostage.) */}
            <span className="block overflow-hidden pb-1.5 sm:pb-1 pt-2 sm:pt-4">
              <span className="banner-reveal-line block font-light text-[#1C1917]/90 dark:text-slate-200 will-change-transform z-20">
                No Sales
              </span>
            </span>
            <span className="block overflow-hidden pb-1.5 sm:pb-1">
              <span className="banner-reveal-line block font-light text-[#1C1917]/90 dark:text-slate-200 will-change-transform z-20">
                Pitch.
              </span>
            </span>
          </h2>
        </div>

        {/* Right Column: Tablet sits right next to the text with smaller, refined scale */}
        <div className="flex-1 w-full flex items-center justify-center lg:justify-start lg:-ml-8 xl:-ml-14 2xl:-ml-18 mt-4 sm:mt-6 lg:mt-0">
          <div
            ref={tabletRef}
            className="relative w-full max-w-[460px] sm:max-w-[560px] lg:max-w-[720px] xl:max-w-[820px] aspect-[16/9] will-change-transform transition-transform duration-700 ease-out hover:scale-[1.02]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src="/tablet-showcase-hd.png"
              alt="No Awkward Phone Calls. No Sales Hostage."
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain object-center lg:object-left drop-shadow-2xl"
              priority
            />
          </div>
        </div>

      </div>

      {/* 3D Floating Blue Torus Element (Bleeding from Bottom-Right Corner) */}
      <div
        ref={torusRightRef}
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-54 sm:-bottom-32 md:-bottom-40 lg:-bottom-[360px] xl:-bottom-[420px] -right-16 sm:-right-24 md:-right-28 lg:-right-28 w-96 sm:w-[440px] md:w-[520px] lg:w-[580px] xl:w-[680px] aspect-square z-20 will-change-transform"
      >
        <div className="w-full h-full relative torus-mobile-float-right will-change-transform">
          <Image
            src="/blue-torus.png"
            alt="3D Floating Torus Loop"
            fill
            sizes="680px"
            className="object-contain drop-shadow-[0_20px_45px_rgba(37,99,235,0.25)] lg:drop-shadow-[0_25px_55px_rgba(37,99,235,0.3)] rotate-45 scale-110 opacity-75 sm:opacity-85 lg:opacity-100"
          />
        </div>
      </div>
    </section>
  );
}
