"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Sparkles,
  ShieldCheck,
  Check,
  Zap,
} from "lucide-react";

interface ShowcaseSectionProps {
  onOpenIntake: () => void;
}

interface ProjectItem {
  id: string;
  number: string;
  title: string;
  client: string;
  category: string;
  turnaroundHours: string;
  turnaroundBadge: string;
  image: string;
  headline: string;
  problemSolved: string;
  deliverables: string[];
  link: string;
  metric: { value: string; label: string };
}

export function ShowcaseSection({ onOpenIntake }: ShowcaseSectionProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("gym");

  const projects: ProjectItem[] = [
    {
      id: "gym",
      number: "01",
      title: "Bajrang Fitness & Gym",
      client: "Bajrang Fitness Haldwani",
      category: "Fitness & Athletics",
      turnaroundHours: "21h",
      turnaroundBadge: "Delivered in 21 Hours",
      image: "/projects/Gym.webp",
      headline: "High-conversion trial pass engine replacing dead PDF schedules.",
      problemSolved:
        "Local gym members were bouncing due to confusing Instagram DMs. Replaced with 1-click WhatsApp trial bookings and mobile trainer bios.",
      deliverables: ["Live Class Timetable", "Trainer Roster", "1-Tap Trial Pass WhatsApp Flow"],
      link: "https://www.google.com",
      metric: { value: "3.4x", label: "Trial Booking Lift" },
    },
    {
      id: "kitchen",
      number: "02",
      title: "Elysian Table Culinary Vision",
      client: "Elysian Table Fine Dining",
      category: "Culinary & Dining",
      turnaroundHours: "24h",
      turnaroundBadge: "Delivered in 24 Hours",
      image: "/projects/kitchen.webp",
      headline: "Chef Alexander Thorne's seasonal culinary storytelling & private dining reservations.",
      problemSolved:
        "High-end diners wanted an authentic kitchen experience. Crafted an editorial narrative with direct table booking and tasting menu previews.",
      deliverables: ["Seasonal Tasting Menu", "Chef's Vision Story", "Direct Table Reservation"],
      link: "https://www.google.com",
      metric: { value: "₹0", label: "Upfront Cost Spent" },
    },
    {
      id: "ecommerce",
      number: "03",
      title: "Velvet Aura Boutique",
      client: "Velvet Aura Retail",
      category: "Fashion & Retail",
      turnaroundHours: "19h",
      turnaroundBadge: "Delivered in 19 Hours",
      image: "/projects/E-commerce.webp",
      headline: "Speed-first mobile lookbook with zero checkout friction.",
      problemSolved:
        "Traditional Shopify stores took 30+ seconds to load on local 4G. Engineered sub-second responsive lookbook with WhatsApp order routing.",
      deliverables: ["Curated Lookbook", "Size Chart Modals", "Instant WhatsApp Cart"],
      link: "https://www.google.com",
      metric: { value: "0.8s", label: "Mobile Page Load" },
    },
    {
      id: "realestate",
      number: "04",
      title: "Prime Horizon Realty",
      client: "Prestige Prime Properties",
      category: "Luxury Real Estate",
      turnaroundHours: "23h",
      turnaroundBadge: "Delivered in 23 Hours",
      image: "/projects/Real-estate.webp",
      headline: "Luxury property listings with floor plan modals & 1-tap site visit reservations.",
      problemSolved:
        "Brokers were losing NRI inquiries. Created a clean typographic listing index with downloadable brochures and scheduled chauffeur site visits.",
      deliverables: ["Interactive Floor Plans", "Locality Metrics", "Chauffeur Visit Booking"],
      link: "https://www.google.com",
      metric: { value: "100%", label: "Verified Leads" },
    },
    {
      id: "jobbase",
      number: "05",
      title: "JobBase Talent Platform",
      client: "JobBase Careers",
      category: "Corporate & SaaS",
      turnaroundHours: "24h",
      turnaroundBadge: "Delivered in 24 Hours",
      image: "/projects/jobbase.webp",
      headline: "Clean recruiting portal with live filterable salary ranges & fast candidate intake.",
      problemSolved:
        "Candidate drop-off was 65% on old job portals. Crafted an editorial quick-apply interface with zero login requirements.",
      deliverables: ["Salary Transparency Tags", "Role Quick-Filter", "One-Step CV Drop"],
      link: "https://www.google.com",
      metric: { value: "24h", label: "Draft to Live" },
    },
    {
      id: "mockup",
      number: "06",
      title: "YourPrepCorner CBT Simulator",
      client: "YourPrepCorner EdTech",
      category: "EdTech & Exam Prep",
      turnaroundHours: "22h",
      turnaroundBadge: "Delivered in 22 Hours",
      image: "/projects/Mockup-Test.webp",
      headline: "Authentic Banking & SSC examination simulator with auto-locking section timers.",
      problemSolved:
        "Students faced test-day panic with confusing mock software. Crafted a crisp, zero-distraction bilingual exam portal.",
      deliverables: ["Live Exam CBT Interface", "Diagnostic Timing", "Bilingual Question Palette"],
      link: "https://www.google.com",
      metric: { value: "60min", label: "Final DNS Launch" },
    },
  ];

  const activeProject =
    projects.find((p) => p.id === selectedProjectId) || projects[0];

  return (
    <section
      id="showcase"
      className="w-full bg-[#FAF8F5] dark:bg-[#07090E] text-[#1C1917] dark:text-slate-100 py-20 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-[#E7E2D8] dark:border-slate-800/80 transition-colors duration-200"
    >
      <div className="w-full space-y-16 sm:space-y-24">
        {/* Section Header: Awwwards Split Frame with Big Index */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-10 border-b border-[#E7E2D8] dark:border-slate-800/80">
          <div className="space-y-4 max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="text-xl font-mono uppercase tracking-widest text-[#78716C] dark:text-slate-400">
                [ 03 / TANGIBLE EVIDENCE ]
              </span>
              <span className="h-px w-10 bg-[#D6D0C4] dark:bg-slate-700" />
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                Proof of Craft • Zero Slop
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-[-0.035em] leading-[0.92] text-[#1C1917] dark:text-white font-[family-name:var(--font-heading)]">
              Crafted in 24 Hours. Tested Before Payment.
            </h2>
          </div>

          <div className="lg:max-w-md space-y-3">
            <p className="text-sm sm:text-base text-[#57534E] dark:text-slate-300 leading-relaxed font-normal">
              Every prototype below was handcrafted with <strong className="text-[#1C1917] dark:text-white font-semibold">AI speed + human designer soul</strong>. The clients tested every button on their own phones before paying a single rupee.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-blue-600 dark:text-blue-400">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span>Select any project row to inspect the case study.</span>
            </div>
          </div>
        </div>

        {/* The Signature Awwwards Split Experience: Left Interactive Stage + Right Editorial Index */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column (Cols 1-7): Large Featured Visual Stage */}
          <div className="lg:col-span-7 xl:col-span-7 w-full sticky top-28 space-y-6">
            <div className="group relative rounded-3xl overflow-hidden border border-[#E7E2D8] dark:border-slate-800 bg-[#FFFFFF] dark:bg-[#0D121D] shadow-2xl transition-all duration-500">
              {/* Browser / Canvas Chrome Header */}
              <div className="px-6 py-4 bg-[#F5F2EB] dark:bg-[#121824] border-b border-[#E7E2D8] dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#E7E2D8] dark:bg-slate-700" />
                  <span className="w-3 h-3 rounded-full bg-[#E7E2D8] dark:bg-slate-700" />
                  <span className="w-3 h-3 rounded-full bg-[#E7E2D8] dark:bg-slate-700" />
                  <span className="ml-3 text-xs font-mono text-[#78716C] dark:text-slate-400 hidden sm:inline">
                    preview.likeitpayit.com/{activeProject.id}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                    {activeProject.turnaroundBadge}
                  </span>
                </div>
              </div>

              {/* Main Visual Image Canvas - Perfect 16:9 Fit without cropping */}
              <div className="relative aspect-[16/9] w-full bg-[#12151C] overflow-hidden flex items-center justify-center">
                <Image
                  key={activeProject.id}
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-contain transition-all duration-500 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />

                {/* Overlaid Gradient Curtain on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6 sm:p-8">
                  <span className="text-white text-xs sm:text-sm font-medium hidden sm:inline-block">
                    Full-fidelity desktop & mobile responsive capture
                  </span>
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#1C1917] font-bold text-xs sm:text-sm shadow-2xl hover:bg-stone-100 transition-transform active:scale-95"
                  >
                    <span>Launch Live Interactive Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Stage Bottom Meta */}
              <div className="p-6 sm:p-8 space-y-5 bg-[#FFFFFF] dark:bg-[#0D121D]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#F0ECE1] dark:border-slate-800">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] dark:text-slate-400">
                      {activeProject.category}
                    </span>
                    <h3 className="text-2xl font-black text-[#1C1917] dark:text-white font-[family-name:var(--font-heading)]">
                      {activeProject.title}
                    </h3>
                  </div>

                  <div className="text-left sm:text-right">
                    <div className="text-2xl sm:text-3xl font-black font-mono text-[#1C1917] dark:text-white">
                      {activeProject.metric.value}
                    </div>
                    <div className="text-[11px] font-mono text-[#78716C] dark:text-slate-400">
                      {activeProject.metric.label}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#57534E] dark:text-slate-300 leading-relaxed font-normal">
                  {activeProject.problemSolved}
                </p>

                {/* Deliverables Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {activeProject.deliverables.map((del, dIdx) => (
                    <span
                      key={dIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-[#FAF8F5] dark:bg-slate-800/80 text-[#1C1917] dark:text-slate-200 border border-[#E7E2D8] dark:border-slate-700/80"
                    >
                      <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      {del}
                    </span>
                  ))}
                </div>

                {/* Primary CTA Row */}
                <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#1C1917] hover:bg-[#292524] dark:bg-white dark:hover:bg-slate-100 text-white dark:text-[#1C1917] text-xs sm:text-sm font-bold tracking-tight shadow-md transition-all active:scale-[0.98]"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={onOpenIntake}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#F5F2EB] dark:bg-slate-800/90 hover:bg-[#EBE6DC] dark:hover:bg-slate-800 border border-[#E7E2D8] dark:border-slate-700 text-[#1C1917] dark:text-white text-xs sm:text-sm font-semibold tracking-tight transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <span>Request Demo Like This</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Cols 8-12): The Awwwards Editorial Index List */}
          <div className="lg:col-span-5 xl:col-span-5 w-full space-y-3">
            <div className="pb-3 border-b border-[#E7E2D8] dark:border-slate-800 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#78716C] dark:text-slate-400">
              <span>PROJECT DIRECTORY</span>
              <span>TIME DELIVERED</span>
            </div>

            {projects.map((project) => {
              const isSelected = selectedProjectId === project.id;
              return (
                <button
                  key={project.id}
                  onClick={() => setSelectedProjectId(project.id)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl transition-all duration-200 border cursor-pointer ${
                    isSelected
                      ? "bg-[#FFFFFF] dark:bg-[#0D121D] border-[#1C1917] dark:border-blue-500 shadow-lg -translate-x-1"
                      : "bg-[#FFFFFF]/50 dark:bg-[#0D121D]/50 border-[#E7E2D8] dark:border-slate-800/80 hover:bg-[#FFFFFF] dark:hover:bg-[#0D121D] hover:border-[#A8A29E]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-bold text-[#78716C] dark:text-slate-400">
                          {project.number}
                        </span>
                        <span className="h-px w-3 bg-[#D6D0C4] dark:bg-slate-700" />
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#78716C] dark:text-slate-400">
                          {project.category}
                        </span>
                      </div>

                      <h4
                        className={`text-lg sm:text-xl font-bold tracking-tight font-[family-name:var(--font-heading)] transition-colors ${
                          isSelected
                            ? "text-[#1C1917] dark:text-white"
                            : "text-[#44403C] dark:text-slate-300"
                        }`}
                      >
                        {project.title}
                      </h4>

                      <p className="text-xs text-[#78716C] dark:text-slate-400 line-clamp-1 font-normal">
                        {project.headline}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                      <span
                        className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg border ${
                          isSelected
                            ? "bg-[#1C1917] text-white dark:bg-blue-600 border-[#1C1917] dark:border-blue-500"
                            : "bg-[#FAF8F5] dark:bg-slate-800 text-[#78716C] dark:text-slate-300 border-[#E7E2D8] dark:border-slate-700"
                        }`}
                      >
                        {project.turnaroundHours}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                      )}
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Quick Summary Pill at bottom of index */}
            <div className="pt-6">
              <div className="p-6 rounded-2xl bg-[#1C1917] dark:bg-[#0D121D] text-white border border-stone-800 dark:border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>The 24-Hour Guarantee</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  Your business can be live in this directory in 24 hours. Send us your name and social link—we build the working prototype at zero cost.
                </p>
                <button
                  onClick={onOpenIntake}
                  className="w-full py-3 rounded-xl bg-white text-[#1C1917] hover:bg-stone-100 font-bold text-xs tracking-tight transition-transform active:scale-98 cursor-pointer"
                >
                  Start Your 24h Test Drive →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
