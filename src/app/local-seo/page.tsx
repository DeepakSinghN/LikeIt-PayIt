"use client";

import React, { useState, useRef } from "react";
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
  Layers,
  Code2,
  Share2,
  FileCode,
  Gauge,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  AlertTriangle,
  Lock,
  Unlock,
  Radio,
  Sliders,
  Crosshair,
  Maximize2,
  Info,
  Terminal,
  Activity,
  Award,
  Flame,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { IntakeModal } from "@/components/IntakeModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// ============================================================================
// ANATOMY FIGURE 01: Core Web Vitals Velocity Dynamometer
// Physical test bench measuring latency in milliseconds with dual dial gauges
// ============================================================================
function DynamometerFigure() {
  const [mode, setMode] = useState<"likeit" | "agency">("likeit");
  const isLikeIt = mode === "likeit";

  // Dial needle rotation: LikeIt (0.8s) = ~28 deg, Agency (8.4s) = ~250 deg
  const needleAngle = isLikeIt ? 28 : 252;
  const score = isLikeIt ? 99 : 28;
  const lcp = isLikeIt ? "0.78s" : "8.42s";
  const cls = isLikeIt ? "0.001" : "0.342";
  const fid = isLikeIt ? "12ms" : "284ms";

  return (
    <div className="group relative rounded-3xl bg-white dark:bg-[#0B0F19] border border-[#E7E2D8] dark:border-slate-800 p-6 sm:p-8 shadow-sm flex flex-col justify-between overflow-hidden">
      {/* Top Header Card Frame as per Anatomy guidelines */}
      <div className="flex items-center justify-between border-b border-[#E7E2D8] dark:border-slate-800/80 pb-4 mb-5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-md bg-[#FAF8F5] dark:bg-slate-900 text-[#1C1917] dark:text-slate-200 border border-[#E7E2D8] dark:border-slate-800">
            FIG. 01
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-[#78716C] dark:text-slate-400 font-semibold">
            VELOCITY DYNAMOMETER
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>CALIBRATED : EDGE</span>
        </div>
      </div>

      {/* Concept Description */}
      <div className="space-y-1 mb-5">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917] dark:text-white font-[family-name:var(--font-heading)]">
          Sub-Second Static Compilation vs Sluggish WordPress
        </h3>
        <p className="text-xs sm:text-sm text-[#57534E] dark:text-slate-300 leading-relaxed font-normal">
          Google algorithmically penalizes slow mobile rendering. Our Next.js architecture compiles to edge HTML, executing before rival WordPress themes finish loading database queries.
        </p>
      </div>

      {/* Interactive Machine Switcher */}
      <div className="flex items-center justify-between bg-[#FAF8F5] dark:bg-slate-950/80 p-1.5 rounded-xl border border-[#E7E2D8] dark:border-slate-800 mb-6">
        <button
          onClick={() => setMode("likeit")}
          className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
            isLikeIt
              ? "bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-sm border border-[#E7E2D8] dark:border-slate-800"
              : "text-[#78716C] dark:text-slate-400 hover:text-[#1C1917] dark:hover:text-white"
          }`}
        >
          <Zap className="w-3.5 h-3.5 text-emerald-500" />
          <span>LikeItPayIt Edge (99/100)</span>
        </button>
        <button
          onClick={() => setMode("agency")}
          className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
            !isLikeIt
              ? "bg-white dark:bg-slate-900 text-rose-600 dark:text-rose-400 shadow-sm border border-[#E7E2D8] dark:border-slate-800"
              : "text-[#78716C] dark:text-slate-400 hover:text-[#1C1917] dark:hover:text-white"
          }`}
        >
          <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
          <span>Agency WordPress (28/100)</span>
        </button>
      </div>

      {/* ISOMETRIC TEST BENCH SVG (Crafted as real machine parts) */}
      <div className="relative w-full aspect-[16/10] bg-[#FAF8F5] dark:bg-[#07090E] rounded-2xl border border-[#E7E2D8] dark:border-slate-800/80 p-4 flex items-center justify-center overflow-hidden">
        {/* Architectural subtle grid pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(#1C1917 1px, transparent 1px), linear-gradient(90deg, #1C1917 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <svg
          viewBox="0 0 500 320"
          className="w-full h-full max-h-[290px] drop-shadow-md select-none"
        >
          <defs>
            {/* Gradients for Machined Metallic Parts */}
            <linearGradient id="metal-base-top" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--metal-light, #F0EAE1)" />
              <stop offset="100%" stopColor="var(--metal-dark, #DED5C7)" />
            </linearGradient>
            <linearGradient id="gauge-rim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8C8275" />
              <stop offset="50%" stopColor="#4A443D" />
              <stop offset="100%" stopColor="#1E1B18" />
            </linearGradient>
            <linearGradient id="glass-reflect" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
              <stop offset="40%" stopColor="rgba(255,255,255,0.05)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
            </linearGradient>
          </defs>

          {/* 1. CAST BASE SHADOW (Painter's order: bottom first) */}
          <path
            d="M 60 270 L 260 300 L 440 250 L 240 220 Z"
            fill="currentColor"
            className="text-[#1C1917]/5 dark:text-black/50 blur-[8px]"
          />

          {/* 2. ISOMETRIC MILLED STEEL BASE PLATE */}
          {/* Base bottom extrusion */}
          <path
            d="M 60 255 L 260 285 L 440 235 L 440 245 L 260 295 L 60 265 Z"
            fill="#8F877B"
            className="dark:fill-[#1E2638]"
          />
          {/* Base left extrusion */}
          <path
            d="M 60 255 L 260 285 L 260 295 L 60 265 Z"
            fill="#B3AB9E"
            className="dark:fill-[#2B354C]"
          />
          {/* Base top surface */}
          <path
            d="M 60 255 L 260 225 L 440 255 L 240 285 Z"
            fill="#E5DFD5"
            className="dark:fill-[#161D2C] stroke-[#CFC6B8] dark:stroke-[#2B364E]"
            strokeWidth="1.2"
          />

          {/* 4 Corner Screws on Base */}
          {[
            { cx: 85, cy: 254 },
            { cx: 250, cy: 232 },
            { cx: 415, cy: 254 },
            { cx: 245, cy: 277 },
          ].map((screw, i) => (
            <g key={i}>
              <circle cx={screw.cx} cy={screw.cy} r="3" fill="#9C9487" className="dark:fill-[#384561]" />
              <line x1={screw.cx - 2} y1={screw.cy} x2={screw.cx + 2} y2={screw.cy} stroke="#6E675B" className="dark:stroke-[#1A2234]" strokeWidth="0.8" />
            </g>
          ))}

          {/* Ruler tick marks along front base bevel */}
          {Array.from({ length: 18 }).map((_, i) => {
            const x1 = 80 + i * 9;
            const y1 = 258 + i * 1.35;
            const isMajor = i % 5 === 0;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x1}
                y2={y1 + (isMajor ? 4 : 2)}
                stroke="#9C9487"
                className="dark:stroke-[#475569]"
                strokeWidth={isMajor ? "1" : "0.6"}
              />
            );
          })}

          {/* 3. ISOMETRIC CYLINDRICAL PILLAR (Supporting the Dial) */}
          <path
            d="M 230 180 L 270 180 L 270 240 L 230 240 Z"
            fill="#9C9487"
            className="dark:fill-[#222B3D]"
          />
          <ellipse cx="250" cy="180" rx="20" ry="6" fill="#D5CEBF" className="dark:fill-[#334155]" />
          <ellipse cx="250" cy="240" rx="20" ry="6" fill="#847B6F" className="dark:fill-[#161D2B]" />

          {/* Knurled adjustment knob on the side */}
          <rect x="270" y="195" width="12" height="18" rx="2" fill="#756D62" className="dark:fill-[#4A5568]" />
          {Array.from({ length: 4 }).map((_, i) => (
            <line key={i} x1="270" y1={198 + i * 4} x2="282" y2={198 + i * 4} stroke="#4F483F" className="dark:stroke-[#2D3748]" strokeWidth="0.8" />
          ))}

          {/* 4. THE MAIN PRECISION VELOCITY DIAL GAUGE */}
          {/* Gauge Rear Housing Cast Shadow */}
          <circle cx="250" cy="118" r="74" fill="rgba(0,0,0,0.15)" className="dark:fill-black/40 blur-[4px]" />
          
          {/* Outer Machined Bezel Rim */}
          <circle cx="250" cy="115" r="70" fill="url(#gauge-rim)" />
          <circle cx="250" cy="115" r="66" fill="#D5CEBF" className="dark:fill-[#20293A]" />
          <circle cx="250" cy="115" r="63" fill="#FAF8F5" className="dark:fill-[#0C101B]" />

          {/* Calibrated Tick Marks on Dial Face */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 15 * Math.PI) / 180;
            const r1 = 54;
            const r2 = i % 3 === 0 ? 46 : 50;
            const x1 = 250 + Math.cos(angle) * r1;
            const y1 = 115 + Math.sin(angle) * r1;
            const x2 = 250 + Math.cos(angle) * r2;
            const y2 = 115 + Math.sin(angle) * r2;
            const isDanger = i > 14;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={isDanger ? "#EF4444" : "#10B981"}
                strokeWidth={i % 3 === 0 ? "1.8" : "0.9"}
                strokeOpacity="0.8"
              />
            );
          })}

          {/* Numerical Dial Labels */}
          <text x="250" y="75" textAnchor="middle" className="font-mono text-[9px] fill-[#78716C] dark:fill-slate-400 font-bold">5s</text>
          <text x="290" y="118" textAnchor="middle" className="font-mono text-[9px] fill-[#EF4444] font-bold">8s</text>
          <text x="210" y="118" textAnchor="middle" className="font-mono text-[9px] fill-[#10B981] font-bold">0.8s</text>
          <text x="250" y="148" textAnchor="middle" className="font-mono text-[8px] fill-[#A8A29E] dark:fill-slate-500 uppercase">LATENCY</text>

          {/* Sub-Dial: Google Quality Score (99 vs 28) */}
          <circle cx="250" cy="95" r="14" fill="#E7E2D8" className="dark:fill-slate-900 stroke-[#CFC6B8] dark:stroke-slate-700" strokeWidth="0.8" />
          <text
            x="250"
            y="98"
            textAnchor="middle"
            className={`font-mono text-[10px] font-black transition-colors duration-300 ${
              isLikeIt ? "fill-emerald-600 dark:fill-emerald-400" : "fill-rose-600 dark:fill-rose-400"
            }`}
          >
            {score}
          </text>

          {/* 5. GAUGE NEEDLE WITH SMOOTH PHYSICAL ROTATION */}
          <g
            style={{
              transform: `rotate(${needleAngle}deg)`,
              transformOrigin: "250px 115px",
              transition: "transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            {/* Counterbalance tail */}
            <line x1="250" y1="115" x2="250" y2="132" stroke="#1C1917" className="dark:stroke-slate-300" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="250" cy="130" r="4" fill="#D97706" />
            
            {/* Main needle */}
            <line
              x1="250"
              y1="115"
              x2="250"
              y2="66"
              stroke={isLikeIt ? "#10B981" : "#EF4444"}
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </g>

          {/* Needle Center Pivot Cap */}
          <circle cx="250" cy="115" r="6" fill="#1C1917" className="dark:fill-slate-100" />
          <circle cx="250" cy="115" r="2.5" fill="#D5CEBF" className="dark:fill-slate-400" />

          {/* Dial Glass Lens Reflection Highlight */}
          <circle cx="250" cy="115" r="62" fill="url(#glass-reflect)" pointerEvents="none" />

          {/* 6. REAL TIME DIGITAL TELEMETRY OVERLAY CARD (Lower Left) */}
          <g transform="translate(70, 40)">
            <rect
              width="110"
              height="60"
              rx="8"
              fill="#FFFFFF"
              className="dark:fill-[#0F172A] stroke-[#E7E2D8] dark:stroke-slate-800"
              strokeWidth="1"
            />
            <text x="10" y="18" className="font-mono text-[8px] fill-[#78716C] dark:fill-slate-400 uppercase tracking-wider">
              LCP METRIC
            </text>
            <text
              x="10"
              y="38"
              className={`font-mono text-base font-black ${
                isLikeIt ? "fill-emerald-600 dark:fill-emerald-400" : "fill-rose-600 dark:fill-rose-400"
              }`}
            >
              {lcp}
            </text>
            <text x="10" y="50" className="font-mono text-[8px] fill-[#A8A29E] dark:fill-slate-500">
              TARGET &lt; 1.2s
            </text>
          </g>

          {/* 7. CWV SECONDARY TELEMETRY OVERLAY (Lower Right) */}
          <g transform="translate(320, 40)">
            <rect
              width="110"
              height="60"
              rx="8"
              fill="#FFFFFF"
              className="dark:fill-[#0F172A] stroke-[#E7E2D8] dark:stroke-slate-800"
              strokeWidth="1"
            />
            <text x="10" y="18" className="font-mono text-[8px] fill-[#78716C] dark:fill-slate-400 uppercase tracking-wider">
              CLS SHIFT
            </text>
            <text
              x="10"
              y="38"
              className={`font-mono text-base font-black ${
                isLikeIt ? "fill-emerald-600 dark:fill-emerald-400" : "fill-rose-600 dark:fill-rose-400"
              }`}
            >
              {cls}
            </text>
            <text x="10" y="50" className="font-mono text-[8px] fill-[#A8A29E] dark:fill-slate-500">
              FID : {fid}
            </text>
          </g>
        </svg>

        {/* Live Readout Badge as per Anatomy Card Guidelines */}
        <div className="absolute bottom-3 right-4 px-2.5 py-1 rounded-md bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-[#E7E2D8] dark:border-slate-800 font-mono text-[10px] text-[#57534E] dark:text-slate-300">
          READOUT : <strong className={isLikeIt ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}>{lcp} / {score} PTS</strong>
        </div>
      </div>

      {/* Forensic Verdict Strip */}
      <div className="mt-5 pt-4 border-t border-[#E7E2D8] dark:border-slate-800 flex items-center justify-between text-xs font-mono">
        <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
          <Check className="w-4 h-4" /> TIER 1 PERMANENTLY INCLUDED (₹0)
        </span>
        <span className="text-[#78716C] dark:text-slate-400">
          EDGE HOSTED ON VERCEL
        </span>
      </div>
    </div>
  );
}

// ============================================================================
// ANATOMY FIGURE 02: Knowledge Graph Schema Injector Gantry
// Isometric optical gantry injecting structured JSON-LD into Google's Knowledge Core
// ============================================================================
function SchemaInjectorFigure() {
  const [activeSchemaTab, setActiveSchemaTab] = useState<"geo" | "hours" | "catalog">("geo");

  return (
    <div className="group relative rounded-3xl bg-white dark:bg-[#0B0F19] border border-[#E7E2D8] dark:border-slate-800 p-6 sm:p-8 shadow-sm flex flex-col justify-between overflow-hidden">
      {/* Top Header Card Frame as per Anatomy guidelines */}
      <div className="flex items-center justify-between border-b border-[#E7E2D8] dark:border-slate-800/80 pb-4 mb-5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-md bg-[#FAF8F5] dark:bg-slate-900 text-[#1C1917] dark:text-slate-200 border border-[#E7E2D8] dark:border-slate-800">
            FIG. 02
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-[#78716C] dark:text-slate-400 font-semibold">
            SCHEMA GEO-INJECTOR
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-blue-600 dark:text-blue-400 font-medium">
          <Code2 className="w-3.5 h-3.5" />
          <span>SCHEMA.ORG / JSON-LD</span>
        </div>
      </div>

      {/* Concept Description */}
      <div className="space-y-1 mb-5">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917] dark:text-white font-[family-name:var(--font-heading)]">
          Direct GPS Injection Into Google Knowledge Graph
        </h3>
        <p className="text-xs sm:text-sm text-[#57534E] dark:text-slate-300 leading-relaxed font-normal">
          Google crawlers do not see visual art. They parse structured machine code in your HTML &lt;head&gt; feeding your exact GPS coordinates, operating hours, phone, and menu directly into their database.
        </p>
      </div>

      {/* Schema Property Selector */}
      <div className="flex items-center gap-2 bg-[#FAF8F5] dark:bg-slate-950/80 p-1.5 rounded-xl border border-[#E7E2D8] dark:border-slate-800 mb-4">
        {[
          { id: "geo", label: "Exact GPS Lat/Lng", icon: MapPin },
          { id: "hours", label: "Live Hours & Status", icon: Clock },
          { id: "catalog", label: "Catalog & Pricing", icon: Layers },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSchemaTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSchemaTab(tab.id as any)}
              className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 flex items-center justify-center gap-1.5 ${
                isActive
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm border border-[#E7E2D8] dark:border-slate-800 font-bold"
                  : "text-[#78716C] dark:text-slate-400 hover:text-[#1C1917] dark:hover:text-white"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.id.toUpperCase()}</span>
            </button>
          );
        })}
      </div>

      {/* Terminal View with Code Highlight */}
      <div className="relative rounded-2xl bg-[#1C1917] text-slate-200 p-4 font-mono text-[11px] leading-relaxed border border-slate-700/80 shadow-inner overflow-x-auto min-h-[170px] flex flex-col justify-between">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[10px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="pl-1">INJECTED_METADATA.jsonld</span>
          </div>
          <span className="text-emerald-400 font-semibold">100% CRAWLER VALID</span>
        </div>

        <div className="py-2 space-y-1">
          <div className="text-slate-400">&#123;</div>
          <div className="pl-4 text-emerald-400">&quot;@context&quot;: &quot;https://schema.org&quot;,</div>
          <div className="pl-4 text-blue-400">&quot;@type&quot;: &quot;LocalBusiness&quot;,</div>
          <div className="pl-4 text-amber-300">&quot;name&quot;: &quot;Your Sovereign Enterprise&quot;,</div>

          {activeSchemaTab === "geo" && (
            <div className="bg-blue-950/40 border border-blue-800/60 rounded px-2 py-1 my-1">
              <div className="pl-4 text-purple-300">&quot;geo&quot;: &#123;</div>
              <div className="pl-8 text-emerald-300">&quot;@type&quot;: &quot;GeoCoordinates&quot;,</div>
              <div className="pl-8 text-blue-300">&quot;latitude&quot;: 28.6139, &quot;longitude&quot;: 77.2090</div>
              <div className="pl-4 text-purple-300">&#125;,</div>
            </div>
          )}

          {activeSchemaTab === "hours" && (
            <div className="bg-amber-950/40 border border-amber-800/60 rounded px-2 py-1 my-1">
              <div className="pl-4 text-amber-300">&quot;openingHoursSpecification&quot;: [</div>
              <div className="pl-8 text-slate-200">&#123; &quot;dayOfWeek&quot;: [&quot;Monday&quot;, &quot;Saturday&quot;], &quot;opens&quot;: &quot;09:00&quot;, &quot;closes&quot;: &quot;21:00&quot; &#125;</div>
              <div className="pl-4 text-amber-300">],</div>
            </div>
          )}

          {activeSchemaTab === "catalog" && (
            <div className="bg-purple-950/40 border border-purple-800/60 rounded px-2 py-1 my-1">
              <div className="pl-4 text-purple-300">&quot;hasOfferCatalog&quot;: &#123;</div>
              <div className="pl-8 text-emerald-300">&quot;name&quot;: &quot;Direct Services Catalog&quot;, &quot;priceCurrency&quot;: &quot;INR&quot;</div>
              <div className="pl-4 text-purple-300">&#125;,</div>
            </div>
          )}

          <div className="pl-4 text-slate-400">&quot;telephone&quot;: &quot;+91-XXXXXXXXXX&quot;</div>
          <div className="text-slate-400">&#125;</div>
        </div>

        <div className="pt-2 border-t border-slate-800 flex justify-between text-[10px] text-slate-400">
          <span>PARSED BY GOOGLEBOT-MOBILE</span>
          <span className="text-blue-400 font-mono">0 ERRORS • 0 WARNINGS</span>
        </div>
      </div>

      {/* Forensic Verdict Strip */}
      <div className="mt-5 pt-4 border-t border-[#E7E2D8] dark:border-slate-800 flex items-center justify-between text-xs font-mono">
        <span className="text-blue-600 dark:text-blue-400 font-bold flex items-center gap-1.5">
          <Check className="w-4 h-4" /> HARDCODED IN TIER 1 (₹0)
        </span>
        <span className="text-[#78716C] dark:text-slate-400">
          ZERO THIRD-PARTY SYNC FEES
        </span>
      </div>
    </div>
  );
}

// ============================================================================
// ANATOMY FIGURE 03: 5KM Catchment Radar & 3-Pack Intercept Station
// Isometric sonar chamber tracking local customer queries and capturing Position #1
// ============================================================================
function MapRadarFigure() {
  const [radiusKm, setRadiusKm] = useState<number>(5);

  return (
    <div className="group relative rounded-3xl bg-white dark:bg-[#0B0F19] border border-[#E7E2D8] dark:border-slate-800 p-6 sm:p-8 shadow-sm flex flex-col justify-between overflow-hidden">
      {/* Top Header Card Frame as per Anatomy guidelines */}
      <div className="flex items-center justify-between border-b border-[#E7E2D8] dark:border-slate-800/80 pb-4 mb-5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-md bg-[#FAF8F5] dark:bg-slate-900 text-[#1C1917] dark:text-slate-200 border border-[#E7E2D8] dark:border-slate-800">
            FIG. 03
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-[#78716C] dark:text-slate-400 font-semibold">
            5KM CATCHMENT RADAR
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-purple-600 dark:text-purple-400 font-medium">
          <Crosshair className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "6s" }} />
          <span>RADIAL SWEEP : ACTIVE</span>
        </div>
      </div>

      {/* Concept Description */}
      <div className="space-y-1 mb-5">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917] dark:text-white font-[family-name:var(--font-heading)]">
          Google Maps Local 3-Pack Interception
        </h3>
        <p className="text-xs sm:text-sm text-[#57534E] dark:text-slate-300 leading-relaxed font-normal">
          78% of mobile searches with local intent visit a business within 24 hours. Our engine matches your physical address NAP signals so you claim the top 3-Pack spot in your immediate neighborhood.
        </p>
      </div>

      {/* Interactive Radius Slider */}
      <div className="bg-[#FAF8F5] dark:bg-slate-950/80 p-3 rounded-xl border border-[#E7E2D8] dark:border-slate-800 mb-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-mono text-[#57534E] dark:text-slate-300">
          <Sliders className="w-3.5 h-3.5 text-purple-500" />
          <span>Scan Radius:</span>
        </div>
        <div className="flex-1 max-w-[200px] flex items-center gap-2">
          <input
            type="range"
            min="1"
            max="10"
            value={radiusKm}
            onChange={(e) => setRadiusKm(Number(e.target.value))}
            className="w-full accent-purple-600 cursor-pointer"
          />
          <span className="font-mono text-xs font-bold text-purple-600 dark:text-purple-400 w-12 text-right">
            {radiusKm}.0 km
          </span>
        </div>
      </div>

      {/* ISOMETRIC RADAR SCANNER SVG */}
      <div className="relative w-full aspect-[16/10] bg-[#FAF8F5] dark:bg-[#07090E] rounded-2xl border border-[#E7E2D8] dark:border-slate-800/80 p-4 flex items-center justify-center overflow-hidden">
        <svg
          viewBox="0 0 500 300"
          className="w-full h-full max-h-[280px] drop-shadow-md select-none"
        >
          {/* Base Radar Ellipse Shadows */}
          <ellipse cx="250" cy="180" rx="190" ry="85" fill="none" stroke="#D5CEBF" className="dark:stroke-slate-800" strokeWidth="1" strokeDasharray="3 3" />
          <ellipse cx="250" cy="180" rx="130" ry="58" fill="none" stroke="#C5BEAE" className="dark:stroke-slate-700" strokeWidth="1.2" />
          <ellipse cx="250" cy="180" rx="70" ry="32" fill="none" stroke="#9C9487" className="dark:stroke-slate-600" strokeWidth="1.4" />

          {/* Sweeping Sonar Conical Beam */}
          <path
            d="M 250 180 L 390 120 A 190 85 0 0 0 350 105 Z"
            fill="url(#radar-beam)"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="radar-beam" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.4)" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.0)" />
            </linearGradient>
          </defs>

          {/* Center Station: Your Verified Business Pin (Elevated Podium) */}
          <g transform="translate(250, 180)">
            {/* Base socket */}
            <ellipse cx="0" cy="0" rx="18" ry="8" fill="#1C1917" className="dark:fill-slate-900" />
            <ellipse cx="0" cy="-3" rx="14" ry="6" fill="#8B5CF6" />
            
            {/* Standing Pin Pillar */}
            <line x1="0" y1="-3" x2="0" y2="-45" stroke="#8B5CF6" strokeWidth="2.5" />
            <circle cx="0" cy="-45" r="14" fill="#8B5CF6" className="animate-pulse" />
            <circle cx="0" cy="-45" r="7" fill="#FFFFFF" />
            
            {/* Rank #1 Crown Badge */}
            <rect x="18" y="-55" width="70" height="22" rx="4" fill="#FFFFFF" className="dark:fill-[#0F172A] stroke-purple-400" strokeWidth="1" />
            <text x="24" y="-40" className="font-mono text-[9px] font-bold fill-purple-600 dark:fill-purple-400">
              ★ RANK #1
            </text>
          </g>

          {/* Competitor Rival Pin 2 (Trailing Behind) */}
          <g transform="translate(360, 150)">
            <ellipse cx="0" cy="0" rx="8" ry="4" fill="#9C9487" className="dark:fill-slate-800" />
            <line x1="0" y1="0" x2="0" y2="-20" stroke="#9C9487" className="dark:stroke-slate-600" strokeWidth="1.5" />
            <circle cx="0" cy="-20" r="6" fill="#D97706" />
            <text x="10" y="-16" className="font-mono text-[8px] fill-[#78716C] dark:fill-slate-400">Rival #2</text>
          </g>

          {/* Competitor Rival Pin 3 (Unoptimized Agency Site) */}
          <g transform="translate(140, 195)">
            <ellipse cx="0" cy="0" rx="8" ry="4" fill="#9C9487" className="dark:fill-slate-800" />
            <line x1="0" y1="0" x2="0" y2="-20" stroke="#9C9487" className="dark:stroke-slate-600" strokeWidth="1.5" />
            <circle cx="0" cy="-20" r="6" fill="#EF4444" />
            <text x="10" y="-16" className="font-mono text-[8px] fill-[#78716C] dark:fill-slate-400">Rival #3</text>
          </g>

          {/* Live Mobile Customer Intercept Signals */}
          {[
            { x: 210, y: 155, label: "Near Me Search" },
            { x: 310, y: 210, label: "Direction Query" },
            { x: 190, y: 220, label: "Call Button Tap" },
          ].map((pt, i) => (
            <g key={i}>
              <circle cx={pt.x} cy={pt.y} r="3" fill="#10B981" />
              <line x1={pt.x} y1={pt.y} x2={250} y2={135} stroke="#10B981" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />
            </g>
          ))}
        </svg>

        {/* Live Readout Badge */}
        <div className="absolute bottom-3 right-4 px-2.5 py-1 rounded-md bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-[#E7E2D8] dark:border-slate-800 font-mono text-[10px] text-[#57534E] dark:text-slate-300">
          INTERCEPT RADIUS : <strong className="text-purple-600 dark:text-purple-400">{radiusKm}.0 KM ACTIVE</strong>
        </div>
      </div>

      {/* Forensic Verdict Strip */}
      <div className="mt-5 pt-4 border-t border-[#E7E2D8] dark:border-slate-800 flex items-center justify-between text-xs font-mono">
        <span className="text-purple-700 dark:text-purple-400 font-bold flex items-center gap-1.5">
          <Check className="w-4 h-4" /> TIER 1 BRAND QUERY INCLUDED (₹0)
        </span>
        <span className="text-[#78716C] dark:text-slate-400">
          TIER 2 FOR 5KM TAKEOVER
        </span>
      </div>
    </div>
  );
}

// ============================================================================
// ANATOMY FIGURE 04: Social OpenGraph Card Minting Press
// Precision card stamping apparatus that renders 1200x630 pixel viral preview cards
// ============================================================================
function OpenGraphFigure() {
  const [copied, setCopied] = useState(false);

  return (
    <div className="group relative rounded-3xl bg-white dark:bg-[#0B0F19] border border-[#E7E2D8] dark:border-slate-800 p-6 sm:p-8 shadow-sm flex flex-col justify-between overflow-hidden">
      {/* Top Header Card Frame as per Anatomy guidelines */}
      <div className="flex items-center justify-between border-b border-[#E7E2D8] dark:border-slate-800/80 pb-4 mb-5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-md bg-[#FAF8F5] dark:bg-slate-900 text-[#1C1917] dark:text-slate-200 border border-[#E7E2D8] dark:border-slate-800">
            FIG. 04
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-[#78716C] dark:text-slate-400 font-semibold">
            VIRAL OPENGRAPH PRESS
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-amber-600 dark:text-amber-400 font-medium">
          <Share2 className="w-3.5 h-3.5" />
          <span>1200 × 630 PIXELS</span>
        </div>
      </div>

      {/* Concept Description */}
      <div className="space-y-1 mb-5">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917] dark:text-white font-[family-name:var(--font-heading)]">
          WhatsApp &amp; Social High-Conversion Cards
        </h3>
        <p className="text-xs sm:text-sm text-[#57534E] dark:text-slate-300 leading-relaxed font-normal">
          When an existing customer recommends your business on WhatsApp, typical agency websites show an ugly broken gray link. LikeItPayIt pre-renders rich media cards with verified checkmarks and direct 1-tap call buttons.
        </p>
      </div>

      {/* Live Social Card Simulation */}
      <div className="bg-[#FAF8F5] dark:bg-slate-950/80 rounded-2xl p-4 sm:p-5 border border-[#E7E2D8] dark:border-slate-800 space-y-3">
        <div className="text-[11px] font-mono text-[#78716C] dark:text-slate-400 flex items-center justify-between">
          <span>WHATSAPP CHAT INCOMING PREVIEW:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">● VIRAL READY</span>
        </div>

        {/* WhatsApp Simulated Bubble */}
        <div className="max-w-[340px] bg-[#E1F3D8] dark:bg-[#075E54]/30 rounded-2xl p-3 border border-emerald-300/60 dark:border-emerald-700/50 shadow-sm space-y-2">
          {/* Card Image Banner */}
          <div className="w-full aspect-[1.91/1] bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 rounded-xl p-4 flex flex-col justify-between text-white relative overflow-hidden border border-slate-700">
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-bold">VERIFIED</span>
              <span className="text-slate-300">likeitpayit.com</span>
            </div>
            <div>
              <div className="text-xs font-bold leading-tight">Your Business Brand Name</div>
              <div className="text-[10px] text-slate-300 line-clamp-1">Fast, reliable local services with zero upfront cost.</div>
            </div>
          </div>

          {/* WhatsApp Text Below Card */}
          <div className="text-xs text-slate-800 dark:text-slate-200">
            Hey! Check out this link, they are verified and offer direct WhatsApp booking.
          </div>
          <div className="text-[10px] text-slate-500 text-right">12:44 PM ✓✓</div>
        </div>
      </div>

      {/* Forensic Verdict Strip */}
      <div className="mt-5 pt-4 border-t border-[#E7E2D8] dark:border-slate-800 flex items-center justify-between text-xs font-mono">
        <span className="text-amber-700 dark:text-amber-400 font-bold flex items-center gap-1.5">
          <Check className="w-4 h-4" /> TIER 1 PRE-CONFIGURED (₹0)
        </span>
        <span className="text-[#78716C] dark:text-slate-400">
          ZERO BROKEN THUMBNAILS
        </span>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT: /local-seo
// ============================================================================
export default function LocalSeoPage() {
  const [isIntakeOpen, setIsIntakeOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "tier1" | "tier2">("all");
  const [selectedSignal, setSelectedSignal] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // The 8 Forensic Transparency Ledger Rows
  const transparencyRows = [
    {
      id: 1,
      signal: "Core Web Vitals Load Speed",
      category: "TECHNICAL FOUNDATION",
      detail: "Google PageSpeed performance, Largest Contentful Paint (LCP) & mobile rendering velocity.",
      tier1: "0.8s Instant (Sub-second static compilation)",
      tier1Status: "included",
      tier2: "Continuous Edge CDN & dynamic asset caching",
      tier2Status: "addon",
      scamNote: "Agencies sell bloated WordPress themes requiring ₹5,000/mo caching plugins that still score under 50.",
      truthNote: "Hardcoded Next.js static generation naturally scores 99/100 with zero plugins needed.",
      metricProof: "0.78s LCP on real 4G mobile devices.",
    },
    {
      id: 2,
      signal: "LocalBusiness JSON-LD Schema",
      category: "KNOWLEDGE GRAPH",
      detail: "Structured machine code feeding Google's Knowledge Graph exact GPS pins, operating hours & catalog.",
      tier1: "100% Hardcoded (Exact GPS pins, hours & catalog)",
      tier1Status: "included",
      tier2: "Dynamic seasonal event & promotional schema sync",
      tier2Status: "addon",
      scamNote: "Agencies rarely inject machine schema, causing Google to mix up your business with rivals 2km away.",
      truthNote: "Directly embedded in <head> so Google's crawler reads your verified location coordinates on day one.",
      metricProof: "100% Rich Results Test pass rate.",
    },
    {
      id: 3,
      signal: "OpenGraph Social Previews",
      category: "VIRAL CONVERSION",
      detail: "High-res cards when your link is shared on WhatsApp, Instagram, or iMessage.",
      tier1: "Custom visual preview cards pre-configured",
      tier1Status: "included",
      tier2: "A/B tested seasonal social preview campaigns",
      tier2Status: "addon",
      scamNote: "Agency sites show ugly broken gray placeholder boxes when shared on WhatsApp.",
      truthNote: "Every LikeItPayIt site includes pre-rendered 1200x630px high-conversion cards.",
      metricProof: "Instant preview card rendering on iOS & Android.",
    },
    {
      id: 4,
      signal: "Search Console XML Sitemap",
      category: "INDEXING SPEED",
      detail: "Automated indexing so Google crawls and discovers every page without delay.",
      tier1: "Auto-generated & verified search indexing",
      tier1Status: "included",
      tier2: "Weekly crawl anomaly monitoring & index health logs",
      tier2Status: "addon",
      scamNote: "Agencies charge 3-month 'indexing fees' to simply click Submit in Google Search Console.",
      truthNote: "Automated sitemap.xml generated during build, pinging Google crawlers automatically upon launch.",
      metricProof: "Immediate index discovery via Google Indexing API.",
    },
    {
      id: 5,
      signal: "Google Maps Local 3-Pack",
      category: "5KM CATCHMENT",
      detail: "Capturing the top 3 map pins in your 5km neighborhood radius for high-intent 'near me' terms.",
      tier1: "Rank #1 for direct brand name & direct address queries",
      tier1Status: "included",
      tier2: "Active 5km Takeover: Outranking neighboring rivals for competitive terms",
      tier2Status: "addon",
      scamNote: "Agencies promise #1 rankings overnight using black-hat spam tactics that risk Google suspension.",
      truthNote: "We align your NAP (Name, Address, Phone) with Google Business Profile for legitimate authority.",
      metricProof: "Verified NAP consistency score of 100%.",
    },
    {
      id: 6,
      signal: "Local Directory Citations",
      category: "AUTHORITY SIGNALS",
      detail: "Synchronized NAP listings across Justdial, Sulekha, IndiaMART & Indian local directories.",
      tier1: "Standard Search Engine Registration",
      tier1Status: "included",
      tier2: "40+ Local directory citation building & review management",
      tier2Status: "addon",
      scamNote: "Agencies outsource to cheap link farms that ruin domain reputation.",
      truthNote: "Tier 1 ensures verified directory indexing; Tier 2 provides hyper-local manual citations.",
      metricProof: "Clean organic authority with zero spam toxic links.",
    },
    {
      id: 7,
      signal: "Monthly Lead Attribution Audit",
      category: "ROI TRANSPARENCY",
      detail: "Transparent reporting showing actual customer WhatsApp chats and phone calls generated.",
      tier1: "Direct 1-tap WhatsApp & phone buttons wired directly to you",
      tier1Status: "included",
      tier2: "Transparent monthly ROI ledger: Verified calls & WhatsApp walk-ins",
      tier2Status: "addon",
      scamNote: "Agencies send 30-page PDF reports filled with vanity 'impressions' but zero actual revenue proof.",
      truthNote: "Every visitor converts directly to your personal WhatsApp or phone. You verify every single inquiry yourself.",
      metricProof: "100% direct customer chat transparency.",
    },
    {
      id: 8,
      signal: "The Financial Investment",
      category: "HONOR PLEDGE",
      detail: "Upfront deposit or ongoing recurring commitment.",
      tier1: "₹0 Extra (100% Free with Every Demo & Launch)",
      tier1Status: "included-highlight",
      tier2: "Optional Growth Add-On (Zero lock-in contract)",
      tier2Status: "addon-highlight",
      scamNote: "12-month lock-in contracts with automatic credit card renewals and hostage clauses.",
      truthNote: "Tier 1 is permanently yours with zero recurring bills. Tier 2 is cancel-anytime monthly autonomy.",
      metricProof: "Zero financial hostage risk guaranteed.",
    },
  ];

  const filteredRows = transparencyRows.filter((row) => {
    if (activeTab === "tier1") return row.tier1Status.includes("included");
    if (activeTab === "tier2") return row.tier2Status.includes("addon");
    return true;
  });

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(".ledger-line", { scaleX: 1 });
        return;
      }

      // Hero Timeline
      const tl = gsap.timeline();
      tl.fromTo(
        ".ledger-hero-reveal",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );

      // Hairline Dividers Reveal
      gsap.fromTo(
        ".ledger-line",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.0,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".ledger-table-section",
            start: "top 85%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col bg-[#FAF8F5] dark:bg-[#07090E] text-[#1C1917] dark:text-slate-100 transition-colors duration-200 font-[family-name:var(--font-magnetik)] selection:bg-blue-600 selection:text-white"
    >
      {/* Sticky Global Navbar */}
      <Navbar onOpenIntake={() => setIsIntakeOpen(true)} />

      {/* Main Content */}
      <main className="flex-1 pt-32 sm:pt-40 pb-28 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* Subtle Architectural Dot-Grid Background Texture */}
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

        <div className="relative z-10 max-w-7xl mx-auto space-y-24 sm:space-y-32">

          {/* ========================================================
              SECTION 1: HERO MANIFESTO & RADICAL TRANSPARENCY
             ======================================================== */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Breadcrumb / Specification Badge */}
            <div className="ledger-hero-reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium uppercase tracking-widest bg-white dark:bg-slate-900 text-[#78716C] dark:text-slate-300 border border-[#E7E2D8] dark:border-slate-800 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>SYS.ARCH // SPECIFICATION 04 — LOCAL SEO ENGINE</span>
            </div>

            {/* Monumental Headline in Magnetik font */}
            <div className="ledger-hero-reveal space-y-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] leading-[0.94] text-[#1C1917] dark:text-white font-[family-name:var(--font-heading)] uppercase">
                WE HIDE <br />
                <span className="font-[family-name:var(--font-serif)] italic font-normal tracking-normal text-[#1a73e8] dark:text-blue-400 lowercase inline-block mt-1">
                  no truth.
                </span>
              </h1>
            </div>

            {/* Editorial Subheading */}
            <p className="ledger-hero-reveal max-w-2xl mx-auto text-base sm:text-lg text-[#57534E] dark:text-slate-300 font-normal leading-relaxed pt-2 font-[family-name:var(--font-magnetik)]">
              Traditional web agencies charge <strong className="text-[#1C1917] dark:text-white font-semibold">₹25,000/month</strong> for mysterious &quot;SEO retainers&quot; and send automated 30-page vanity reports. Here is the exact, unvarnished physical truth of what is <strong className="text-emerald-700 dark:text-emerald-400 font-semibold">100% Free &amp; Built In</strong> versus what exists as an <strong className="text-blue-600 dark:text-blue-400 font-semibold">Optional Hyper-Local Scale Upgrade</strong>.
            </p>

            {/* Quick Proof Pillars Bar */}
            <div className="ledger-hero-reveal pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-[#78716C] dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                ₹0 Upfront Deposit
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                0.8s Sub-Second LCP
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                Rank #1 Local 3-Pack
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                100% Code Ownership
              </span>
            </div>
          </div>

          {/* ========================================================
              SECTION 2: ANATOMY OF TECHNICAL DISCOVERY (4 PHYSICAL RIGS)
             ======================================================== */}
          <div className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
                FORENSIC ANATOMY // 4 TECHNICAL SIGNALS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] dark:text-white tracking-tight font-[family-name:var(--font-heading)]">
                The Anatomy of Local Discovery
              </h2>
              <p className="text-sm text-[#57534E] dark:text-slate-400">
                Four physical engineering layers that turn a website from a dead brochure into an active customer acquisition instrument.
              </p>
            </div>

            {/* 4 Bespoke Anatomy Figures */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              <DynamometerFigure />
              <SchemaInjectorFigure />
              <MapRadarFigure />
              <OpenGraphFigure />
            </div>
          </div>

          {/* ========================================================
              SECTION 3: THE SWISS HAIRLINE TRANSPARENCY LEDGER MATRIX
             ======================================================== */}
          <div className="ledger-table-section space-y-8 pt-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E7E2D8] dark:border-slate-800">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">
                  PART 3 // SPECIFICATION BREAKDOWN
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1C1917] dark:text-white tracking-tight font-[family-name:var(--font-heading)]">
                  The Pure Hairline Swiss Ledger
                </h2>
                <p className="text-sm text-[#57534E] dark:text-slate-400 max-w-xl">
                  Click any signal below to inspect the forensic audit: what agencies charge you for vs what LikeItPayIt builds by default.
                </p>
              </div>

              {/* Matrix Filter Tabs */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white dark:bg-slate-900 border border-[#E7E2D8] dark:border-slate-800 text-xs font-mono">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === "all"
                      ? "bg-[#FAF8F5] dark:bg-slate-800 text-[#1C1917] dark:text-white font-bold shadow-sm"
                      : "text-[#78716C] dark:text-slate-400 hover:text-[#1C1917] dark:hover:text-white"
                  }`}
                >
                  All Signals ({transparencyRows.length})
                </button>
                <button
                  onClick={() => setActiveTab("tier1")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === "tier1"
                      ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-bold shadow-sm"
                      : "text-[#78716C] dark:text-slate-400 hover:text-[#1C1917] dark:hover:text-white"
                  }`}
                >
                  Tier 1 Free (₹0)
                </button>
                <button
                  onClick={() => setActiveTab("tier2")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === "tier2"
                      ? "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 font-bold shadow-sm"
                      : "text-[#78716C] dark:text-slate-400 hover:text-[#1C1917] dark:hover:text-white"
                  }`}
                >
                  Tier 2 Scale Add-On
                </button>
              </div>
            </div>

            {/* The Hairline Matrix Table */}
            <div className="rounded-2xl border border-[#E7E2D8] dark:border-slate-800 bg-white dark:bg-[#0B0F19] overflow-hidden shadow-sm">
              {/* Table Column Header */}
              <div className="grid grid-cols-12 px-6 py-4 bg-[#FAF8F5] dark:bg-[#07090E] border-b border-[#E7E2D8] dark:border-slate-800 text-xs font-mono font-bold uppercase tracking-wider text-[#78716C] dark:text-slate-400">
                <div className="col-span-12 md:col-span-4">Technical Signal</div>
                <div className="hidden md:block col-span-4 text-emerald-700 dark:text-emerald-400">
                  Tier 1: Included (₹0 Free)
                </div>
                <div className="hidden md:block col-span-3 text-blue-600 dark:text-blue-400">
                  Tier 2: Scale Add-On
                </div>
                <div className="hidden md:block col-span-1 text-right">Audit</div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-[#E7E2D8] dark:divide-slate-800">
                {filteredRows.map((row) => {
                  const isSelected = selectedSignal === row.id;

                  return (
                    <div
                      key={row.id}
                      className="transition-colors duration-150 hover:bg-[#FAF8F5]/60 dark:hover:bg-slate-900/30"
                    >
                      {/* Main Clickable Row */}
                      <button
                        onClick={() => setSelectedSignal(isSelected ? null : row.id)}
                        className="w-full text-left grid grid-cols-12 px-6 py-4 items-center gap-4"
                      >
                        {/* Column 1: Signal Title & Category */}
                        <div className="col-span-12 md:col-span-4 space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] text-[#A8A29E] dark:text-slate-500">
                              #{String(row.id).padStart(2, "0")}
                            </span>
                            <span className="font-mono text-[10px] uppercase font-bold text-blue-600 dark:text-blue-400">
                              {row.category}
                            </span>
                          </div>
                          <div className="font-bold text-sm sm:text-base text-[#1C1917] dark:text-white font-[family-name:var(--font-heading)]">
                            {row.signal}
                          </div>
                          <div className="text-xs text-[#78716C] dark:text-slate-400 md:hidden pt-1">
                            {row.detail}
                          </div>
                        </div>

                        {/* Column 2: Tier 1 (Free) */}
                        <div className="col-span-12 md:col-span-4 text-xs font-mono">
                          <span className="inline-block md:hidden text-[10px] uppercase text-emerald-600 font-bold mr-2">
                            TIER 1 (FREE):
                          </span>
                          <span className="text-emerald-700 dark:text-emerald-400 font-medium flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            {row.tier1}
                          </span>
                        </div>

                        {/* Column 3: Tier 2 (Add-on) */}
                        <div className="col-span-12 md:col-span-3 text-xs font-mono">
                          <span className="inline-block md:hidden text-[10px] uppercase text-blue-500 font-bold mr-2">
                            TIER 2 (SCALE):
                          </span>
                          <span className="text-[#57534E] dark:text-slate-300">
                            {row.tier2}
                          </span>
                        </div>

                        {/* Column 4: Expand Trigger Icon */}
                        <div className="col-span-12 md:col-span-1 flex justify-end">
                          <div className="w-7 h-7 rounded-full bg-[#FAF8F5] dark:bg-slate-800 flex items-center justify-center text-[#78716C] dark:text-slate-300 border border-[#E7E2D8] dark:border-slate-700">
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isSelected ? "rotate-180 text-blue-600 dark:text-blue-400" : ""
                              }`}
                            />
                          </div>
                        </div>
                      </button>

                      {/* Expandable Forensic Breakdown Drawer */}
                      {isSelected && (
                        <div className="px-6 pb-6 pt-2 bg-[#FAF8F5]/80 dark:bg-slate-950/60 border-t border-[#E7E2D8] dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
                          {/* Left: What Traditional Agencies Do */}
                          <div className="rounded-xl p-4 bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 space-y-2">
                            <div className="flex items-center gap-2 text-xs font-mono text-rose-700 dark:text-rose-400 font-bold">
                              <AlertTriangle className="w-3.5 h-3.5" />
                              <span>WHAT TRADITIONAL AGENCIES DO (THE RETAINER TRAP)</span>
                            </div>
                            <p className="text-xs text-[#57534E] dark:text-slate-300 leading-relaxed">
                              {row.scamNote}
                            </p>
                          </div>

                          {/* Right: What LikeItPayIt Builds */}
                          <div className="rounded-xl p-4 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 space-y-2">
                            <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold">
                              <ShieldCheck className="w-3.5 h-3.5" />
                              <span>WHAT LIKEITPAYIT BUILDS (THE SOVEREIGN TRUTH)</span>
                            </div>
                            <p className="text-xs text-[#57534E] dark:text-slate-300 leading-relaxed">
                              {row.truthNote}
                            </p>
                            <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 pt-1">
                              <strong>PROOF : </strong> {row.metricProof}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ========================================================
              SECTION 4: THE HALL OF HONOR (AGENCY TRAP VS LIKEITPAYIT)
             ======================================================== */}
          <div className="space-y-10 pt-4">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-bold">
                SOVEREIGN PROTOCOL // CODE OF ETHICS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] dark:text-white tracking-tight font-[family-name:var(--font-heading)]">
                The Hall of Honor
              </h2>
              <p className="text-sm text-[#57534E] dark:text-slate-400">
                How our Zero-Risk Sovereign Model directly disrupts the traditional agency retainer playbook.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Agency Playbook Card */}
              <div className="rounded-3xl p-8 bg-white dark:bg-[#0B0F19] border border-rose-200/80 dark:border-rose-900/40 shadow-sm space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-rose-100 dark:border-rose-900/40">
                  <span className="font-mono text-xs uppercase px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 font-bold border border-rose-200 dark:border-rose-800">
                    TRADITIONAL AGENCY
                  </span>
                  <span className="font-mono text-xs text-rose-500 font-bold">RETAINER HOSTAGE</span>
                </div>

                <div className="space-y-4">
                  {[
                    "₹25,000 to ₹50,000/month recurring mandatory retainers.",
                    "12-month lock-in contracts with painful cancellation penalties.",
                    "Hostage control: If you stop paying, your website & domain are shut down.",
                    "Generic WordPress themes loaded with 40+ insecure third-party plugins.",
                    "30-page vanity PDF reports showing useless impressions instead of cash calls.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#57534E] dark:text-slate-300">
                      <Minus className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* LikeItPayIt Sovereign Model Card */}
              <div className="rounded-3xl p-8 bg-white dark:bg-[#0B0F19] border border-emerald-300/80 dark:border-emerald-800/60 shadow-md space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-emerald-100 dark:border-emerald-800/40">
                  <span className="font-mono text-xs uppercase px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-200 dark:border-emerald-800">
                    THE LIKEITPAYIT WAY
                  </span>
                  <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold">SOVEREIGN OWNERSHIP</span>
                </div>

                <div className="space-y-4">
                  {[
                    "₹0 Upfront deposit. Test drive your custom engine live before spending one rupee.",
                    "100% Code & Asset Ownership: GitHub repository and hosting transferred to you.",
                    "Zero mandatory monthly retainers. Tier 1 technical SEO is permanently free.",
                    "Hand-compiled Next.js Edge architecture scoring 99/100 Core Web Vitals.",
                    "Direct 1-tap WhatsApp and phone calls wired directly to your mobile phone.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#1C1917] dark:text-white font-medium">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              SECTION 5: CLOSING HERO CALL-TO-ACTION
             ======================================================== */}
          <div className="rounded-3xl bg-gradient-to-br from-[#1C1917] to-[#0A0D14] text-white p-8 sm:p-12 lg:p-16 text-center space-y-8 shadow-xl relative overflow-hidden">
            {/* Subtle Aura Accent */}
            <div
              aria-hidden="true"
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-500/20 blur-[120px] pointer-events-none rounded-full"
            />

            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold">
                THE ZERO-RISK TEST DRIVE PLEDGE
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight font-[family-name:var(--font-heading)] leading-tight">
                Inspect Your Custom Engine Live. <br />
                <span className="font-[family-name:var(--font-serif)] italic font-normal text-blue-400 lowercase">
                  pay only if you love it.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                We build your custom production prototype with verified schema, 0.8s load speed, and Local SEO foundation first. If you don&apos;t love it, you pay zero.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => setIsIntakeOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-mono text-xs uppercase tracking-wider font-bold bg-white text-[#1C1917] hover:bg-slate-100 transition-all duration-200 shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <span>REQUEST FREE PROTOTYPE DEMO</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/#transparency"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition-all duration-200"
              >
                Return to Homepage
              </Link>
            </div>

            <div className="relative z-10 text-[11px] font-mono text-slate-400">
              NO CREDIT CARD REQUIRED • ZERO LOCK-IN • 100% SOVEREIGN OWNERSHIP
            </div>
          </div>

        </div>
      </main>

      {/* Editorial Closing Footer */}
      <Footer onOpenIntake={() => setIsIntakeOpen(true)} />

      {/* Booking / Intake Modal */}
      <IntakeModal
        isOpen={isIntakeOpen}
        onClose={() => setIsIntakeOpen(false)}
      />
    </div>
  );
}
