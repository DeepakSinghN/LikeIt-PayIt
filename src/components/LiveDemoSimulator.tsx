"use client";

import React, { useState } from "react";
import {
  Smartphone,
  Monitor,
  Star,
  MapPin,
  Clock,
  MessageCircle,
  PhoneCall,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Share2,
} from "lucide-react";

type BusinessType = "bakery" | "dental" | "fitness";
type ViewMode = "mobile" | "desktop";

interface BusinessProfile {
  id: BusinessType;
  tabLabel: string;
  name: string;
  category: string;
  location: string;
  vibe: string;
  rating: string;
  reviewsCount: number;
  tagline: string;
  accentColor: string;
  bgGradient: string;
  badge: string;
  services: { title: string; price?: string; desc: string }[];
  whatsappMessage: string;
  primaryCtaText: string;
  hours: string;
}

const BUSINESSES: Record<BusinessType, BusinessProfile> = {
  bakery: {
    id: "bakery",
    tabLabel: "☕ Artisan Bakery",
    name: "The Sourdough Loft",
    category: "Artisanal Bakery & Specialty Coffee",
    location: "Indiranagar, Bangalore",
    vibe: "Warm & Cozy",
    rating: "4.9",
    reviewsCount: 218,
    tagline: "Slow-fermented sourdough, flaky butter pastries, and roasted single-origin coffees.",
    accentColor: "#D97706", // Amber / Warm caramel
    bgGradient: "from-amber-950/40 via-stone-900 to-stone-950",
    badge: "Baked Fresh Daily at 6:30 AM",
    services: [
      {
        title: "Signature Country Sourdough",
        price: "₹280",
        desc: "36-hour natural fermentation, blistered crust with airy open crumb.",
      },
      {
        title: "Pistachio & Cardamom Croissant",
        price: "₹220",
        desc: "Laminated French butter pastry filled with roasted pistachio praline.",
      },
      {
        title: "Single-Origin Oat Flat White",
        price: "₹240",
        desc: "Medium roast Chikmagalur beans with silky oat milk micro-foam.",
      },
    ],
    whatsappMessage:
      "Hi Sourdough Loft! I saw your menu on your new website and want to reserve 1x Country Sourdough & 1x Pistachio Croissant for pickup today.",
    primaryCtaText: "Order via WhatsApp",
    hours: "Open Today: 7:30 AM – 9:00 PM",
  },
  dental: {
    id: "dental",
    tabLabel: "🏥 Modern Dental Clinic",
    name: "Dr. Neha Dental Studio",
    category: "Aesthetic Dentistry & Clear Aligners",
    location: "Bandra West, Mumbai",
    vibe: "Clinical & Trustworthy",
    rating: "4.9",
    reviewsCount: 342,
    tagline: "Gentle, anxiety-free smile design with cutting-edge 3D digital scanning.",
    accentColor: "#0D9488", // Teal
    bgGradient: "from-teal-950/40 via-slate-900 to-slate-950",
    badge: "Certified Clear Aligner Specialist",
    services: [
      {
        title: "Invisible Clear Aligners",
        price: "Free 3D Scan",
        desc: "Straighten teeth discreetly without metal braces. Digital preview in 1 visit.",
      },
      {
        title: "Single-Session Laser Whitening",
        price: "₹5,500",
        desc: "Up to 6 shades brighter in 45 minutes with zero tooth enamel damage.",
      },
      {
        title: "Painless Dental Implants",
        price: "Consultation",
        desc: "Swiss precision titanium implants with same-day temporary crowns.",
      },
    ],
    whatsappMessage:
      "Hello Dr. Neha's Studio! I'd like to book an appointment for a Free 3D Aligner Scan this week.",
    primaryCtaText: "Book WhatsApp Consult",
    hours: "Mon – Sat: 10:00 AM – 8:00 PM",
  },
  fitness: {
    id: "fitness",
    tabLabel: "⚡ Strength & Gym",
    name: "IronPulse Performance",
    category: "Strength Conditioning & HIIT Club",
    location: "Koramangala, Bangalore",
    vibe: "Bold Energy",
    rating: "4.8",
    reviewsCount: 195,
    tagline: "No boring cardio rows. Pure athletic strength, kettlebells, and expert coaching.",
    accentColor: "#84CC16", // Lime
    bgGradient: "from-lime-950/30 via-neutral-900 to-neutral-950",
    badge: "Capped At 15 Members Per Slot",
    services: [
      {
        title: "Functional Strength & Conditioning",
        price: "Monthly Pass",
        desc: "Periodized barbell strength training paired with high-intensity engine work.",
      },
      {
        title: "Olympic Weightlifting Clinic",
        price: "Weekend Batches",
        desc: "Clean & Jerk and Snatch mechanics instructed by national-level lifters.",
      },
      {
        title: "1-on-1 Transformation Program",
        price: "Custom",
        desc: "Dedicated coach, personalized nutrition plan, and weekly body composition scans.",
      },
    ],
    whatsappMessage:
      "Hey IronPulse team! I want to claim a 1-Day Free Trial Session to check out the gym this weekend.",
    primaryCtaText: "Claim Free 1-Day Pass",
    hours: "Open Daily: 6:00 AM – 10:00 PM",
  },
};

export function LiveDemoSimulator() {
  const [activeBusinessKey, setActiveBusinessKey] = useState<BusinessType>("bakery");
  const [viewMode, setViewMode] = useState<ViewMode>("mobile");
  const [simulatedChatOpen, setSimulatedChatOpen] = useState(false);

  const business = BUSINESSES[activeBusinessKey];

  return (
    <div
      id="demo-simulator"
      className="relative w-full max-w-5xl mx-auto rounded-3xl border border-[#E7E2D8] dark:border-slate-800 bg-gradient-to-b from-[#F5F1E9] to-[#FAF8F5] dark:from-[#0E131F] dark:to-[#07090E] p-4 sm:p-7 shadow-xl dark:shadow-2xl dark:shadow-blue-950/20 text-[#1C1917] dark:text-slate-100 transition-colors"
    >
      {/* Sandbox Controller Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#E7E2D8] dark:border-slate-800/80">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-600 dark:text-emerald-400">
              Interactive Live Demo Sandbox
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#57534E] dark:text-slate-400">
            Click tabs below to test how different local businesses look in 24 hours:
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#EAE4D9]/80 dark:bg-slate-900/90 border border-[#DDD5C7] dark:border-slate-800 self-stretch sm:self-auto justify-center">
          <button
            onClick={() => setViewMode("mobile")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              viewMode === "mobile"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-[#57534E] dark:text-slate-400 hover:text-[#1C1917] dark:hover:text-white"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile (85% Traffic)</span>
          </button>
          <button
            onClick={() => setViewMode("desktop")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              viewMode === "desktop"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-[#57534E] dark:text-slate-400 hover:text-[#1C1917] dark:hover:text-white"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Full Width</span>
          </button>
        </div>
      </div>

      {/* Business Niche Selector Tabs */}
      <div className="flex items-center gap-2 py-4 overflow-x-auto no-scrollbar">
        {(Object.keys(BUSINESSES) as BusinessType[]).map((key) => {
          const item = BUSINESSES[key];
          const isSelected = activeBusinessKey === key;
          return (
            <button
              key={key}
              onClick={() => {
                setActiveBusinessKey(key);
                setSimulatedChatOpen(false);
              }}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 border cursor-pointer ${
                isSelected
                  ? "bg-[#FFFFFF] dark:bg-slate-800 text-[#1C1917] dark:text-white border-blue-600 shadow-sm"
                  : "bg-[#EFEAE1]/70 dark:bg-slate-900/50 text-[#57534E] dark:text-slate-400 border-[#E2DBD0] dark:border-slate-800/80 hover:bg-[#EAE4D9] dark:hover:bg-slate-800/50 hover:text-[#1C1917] dark:hover:text-slate-200"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Simulated Device Frame */}
      <div className="relative mt-2 flex justify-center items-center py-4">
        {/* Decorative subtle background glow */}
        <div
          className="absolute inset-0 blur-3xl opacity-15 pointer-events-none rounded-full"
          style={{ backgroundColor: business.accentColor }}
        ></div>

        <div
          className={`relative transition-all duration-300 w-full ${
            viewMode === "mobile"
              ? "max-w-[390px] border-[10px] border-slate-900 rounded-[44px] shadow-2xl shadow-black overflow-hidden ring-1 ring-slate-700/50"
              : "max-w-4xl border border-slate-800 rounded-2xl shadow-xl overflow-hidden"
          }`}
        >
          {/* Simulated Mobile Speaker & Camera Notch */}
          {viewMode === "mobile" && (
            <div className="bg-slate-950 pt-2 pb-1.5 flex justify-center items-center">
              <div className="w-24 h-4 bg-slate-900 rounded-full flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                <div className="w-8 h-1 rounded-full bg-slate-800"></div>
              </div>
            </div>
          )}

          {/* Simulated Website Content Window */}
          <div
            className={`w-full bg-gradient-to-b ${business.bgGradient} text-slate-100 flex flex-col max-h-[580px] overflow-y-auto`}
          >
            {/* Demo Bar inside the site */}
            <div className="w-full bg-blue-600/90 text-white text-[11px] font-medium py-1.5 px-3 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Live 24h Demo • Custom Domain Ready
              </span>
              <span className="text-[10px] bg-black/20 px-1.5 py-0.5 rounded">
                Preview Only
              </span>
            </div>

            {/* Simulated Business Header */}
            <div className="p-5 sm:p-7 border-b border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-white backdrop-blur-sm"
                  style={{ borderColor: business.accentColor }}
                >
                  {business.badge}
                </span>

                <div className="flex items-center gap-1 text-xs text-amber-300 font-bold bg-black/40 px-2 py-1 rounded-lg">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{business.rating}</span>
                  <span className="text-slate-400 font-normal">({business.reviewsCount})</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-[family-name:var(--font-heading)]">
                {business.name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {business.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400 pt-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>{business.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{business.hours}</span>
                </div>
              </div>

              {/* Primary Interactive CTA button */}
              <div className="pt-2">
                <button
                  onClick={() => setSimulatedChatOpen(true)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-white shadow-lg transition-transform active:scale-95"
                  style={{ backgroundColor: business.accentColor }}
                >
                  <MessageCircle className="w-4 h-4 fill-white text-white" />
                  <span>{business.primaryCtaText}</span>
                </button>
                <p className="text-[10px] text-center text-slate-400 mt-1.5">
                  👆 Tap to test the live WhatsApp ordering experience
                </p>
              </div>
            </div>

            {/* Featured Menu / Offerings Section */}
            <div className="p-5 sm:p-7 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400">
                  Popular Highlights
                </h4>
                <span className="text-[11px] text-blue-400 flex items-center gap-0.5">
                  View All <ChevronRight className="w-3 h-3" />
                </span>
              </div>

              <div className="space-y-2.5">
                {business.services.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-white/15 transition-all flex items-start justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="text-xs text-slate-400 line-clamp-2">{item.desc}</p>
                    </div>
                    {item.price && (
                      <span className="text-xs font-bold px-2 py-1 rounded bg-white/10 text-white whitespace-nowrap">
                        {item.price}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Verified Trust Strip */}
              <div className="mt-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Verified Google Maps Listing</span>
                </div>
                <span className="text-[11px] font-semibold text-slate-300">
                  Instant Directions →
                </span>
              </div>
            </div>
          </div>

          {/* Simulated WhatsApp Chat Dialog (Triggered on click) */}
          {simulatedChatOpen && (
            <div className="absolute inset-x-2 bottom-3 p-4 rounded-2xl bg-[#111B21] border border-emerald-500/40 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-200">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs font-bold">
                    WA
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">WhatsApp Direct Lead</p>
                    <p className="text-[10px] text-emerald-400">Pre-formatted message ready</p>
                  </div>
                </div>
                <button
                  onClick={() => setSimulatedChatOpen(false)}
                  className="text-xs text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800"
                >
                  ✕ Close
                </button>
              </div>

              <div className="mt-3 p-3 rounded-xl bg-[#202C33] text-xs text-slate-200 leading-relaxed font-sans border border-slate-700/60">
                <p className="text-[11px] text-emerald-300 font-semibold mb-1">
                  Incoming Customer Message:
                </p>
                &ldquo;{business.whatsappMessage}&rdquo;
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Direct to business phone
                </span>
                <span className="text-slate-400">Zero commissions</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Insight Badges under the preview */}
      <div className="mt-6 pt-5 border-t border-[#E7E2D8] dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center sm:text-left">
        <div className="p-3.5 rounded-2xl bg-[#FFFFFF] dark:bg-slate-900/60 border border-[#E7E2D8] dark:border-slate-800 shadow-sm">
          <p className="text-xs font-bold text-[#1C1917] dark:text-white flex items-center gap-1.5 justify-center sm:justify-start">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            85% Mobile-First
          </p>
          <p className="text-[11px] text-[#57534E] dark:text-slate-400 mt-1">
            Engineered for thumb taps, fast mobile loading, and zero horizontal scroll bugs.
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#FFFFFF] dark:bg-slate-900/60 border border-[#E7E2D8] dark:border-slate-800 shadow-sm">
          <p className="text-xs font-bold text-[#1C1917] dark:text-white flex items-center gap-1.5 justify-center sm:justify-start">
            <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
            1-Tap WhatsApp Conversion
          </p>
          <p className="text-[11px] text-[#57534E] dark:text-slate-400 mt-1">
            Eliminates complex forms. Customers message you directly on WhatsApp.
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#FFFFFF] dark:bg-slate-900/60 border border-[#E7E2D8] dark:border-slate-800 shadow-sm">
          <p className="text-xs font-bold text-[#1C1917] dark:text-white flex items-center gap-1.5 justify-center sm:justify-start">
            <span className="w-2 h-2 rounded-full bg-amber-600 dark:bg-amber-400"></span>
            AI Speed + Human Polish
          </p>
          <p className="text-[11px] text-[#57534E] dark:text-slate-400 mt-1">
            AI scrapes your Google data in seconds; our human designers refine layout & copy.
          </p>
        </div>
      </div>
    </div>
  );
}
