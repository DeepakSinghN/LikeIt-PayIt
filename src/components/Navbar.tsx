"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Menu, X, Sun, Moon } from "lucide-react";

interface NavbarProps {
  onOpenIntake: () => void;
}

export function Navbar({ onOpenIntake }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check if dark class exists on documentElement (default is false / light)
    const isDarkNow = document.documentElement.classList.contains("dark");
    setIsDark(isDarkNow);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextIsDark = !root.classList.contains("dark");
    if (nextIsDark) {
      root.classList.add("dark");
      try {
        localStorage.setItem("likeitpayit-theme", "dark");
      } catch (_) { }
      setIsDark(true);
    } else {
      root.classList.remove("dark");
      try {
        localStorage.setItem("likeitpayit-theme", "light");
      } catch (_) { }
      setIsDark(false);
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-transparent pt-6 pb-4 px-6 sm:px-10 lg:px-8 pointer-events-none transition-colors duration-200">
      <div className="w-full flex items-center justify-between pointer-events-auto">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg py-1"
          aria-label="likeitpayit home"
        >
          <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform">
            <Zap className="w-3.5 h-3.5 fill-white" />
          </div>
          <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#1C1917] dark:text-white font-[family-name:var(--font-heading)]">
            LikeItPayIt<span className="text-blue-600">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-[#0F1420]/90 text-xs font-medium text-[#57534E] dark:text-slate-300 transition-colors shadow-sm border border-[#E7E2D8] dark:border-slate-800"
          aria-label="Main Navigation"
        >
          <Link
            href="/"
            className={`px-3.5 py-1.5 rounded-lg transition-colors ${
              pathname === "/"
                ? "text-[#1C1917] dark:text-white bg-slate-200 dark:bg-slate-800/60 font-semibold"
                : "hover:text-[#1C1917] dark:hover:text-white hover:bg-[#EAE4D9]/60 dark:hover:bg-slate-800/40"
            }`}
          >
            Home
          </Link>

          <Link
            href="/local-seo"
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              pathname === "/local-seo"
                ? "text-[#1C1917] dark:text-white bg-slate-200 dark:bg-slate-800/60 font-semibold"
                : "hover:text-[#1C1917] dark:hover:text-white hover:bg-[#EAE4D9]/60 dark:hover:bg-slate-800/40"
            }`}
          >
            Local SEO
          </Link>

          <Link
            href="/#transparency"
            className="px-3 py-1.5 rounded-lg hover:text-[#1C1917] dark:hover:text-white hover:bg-[#EAE4D9]/60 dark:hover:bg-slate-800/40 transition-colors"
          >
            Zero-Risk Pledge
          </Link>

          {/* Theme Switcher Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-1.5 rounded-full text-[#57534E] dark:text-slate-300 hover:text-[#1C1917] dark:hover:text-white hover:bg-[#EAE4D9]/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title={isDark ? "Switch to Warm Sand Light" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={onOpenIntake}
            className="ml-1 px-4 py-1.5 rounded-lg text-white bg-blue-600 hover:bg-blue-500 font-semibold transition-all shadow-sm shadow-blue-600/30 cursor-pointer"
          >
            Get Demo
          </button>
        </nav>

        {/* Mobile Hamburger Button & Theme Toggle (Min 44px touch targets) */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-11 h-11 rounded-xl bg-[#F1ECE4] dark:bg-slate-900 border border-[#E2DBD0] dark:border-slate-800 text-[#57534E] dark:text-slate-300 flex items-center justify-center cursor-pointer transition-colors active:scale-95"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="w-11 h-11 rounded-xl bg-[#F1ECE4] dark:bg-slate-900 border border-[#E2DBD0] dark:border-slate-800 text-[#57534E] dark:text-slate-300 hover:text-[#1C1917] flex items-center justify-center focus:outline-none cursor-pointer transition-colors active:scale-95"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mt-3 p-4 rounded-2xl bg-[#FFFFFF] dark:bg-[#0F1420] border border-[#E7E2D8] dark:border-slate-800 space-y-3 text-sm font-medium shadow-xl">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg font-semibold min-h-[44px] flex items-center ${
              pathname === "/"
                ? "text-[#1C1917] dark:text-white bg-[#F3EFE6] dark:bg-slate-800/60"
                : "text-[#57534E] dark:text-slate-300 hover:text-[#1C1917]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/local-seo"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg font-semibold min-h-[44px] flex items-center ${
              pathname === "/local-seo"
                ? "text-[#1C1917] dark:text-white bg-[#F3EFE6] dark:bg-slate-800/60"
                : "text-[#57534E] dark:text-slate-300 hover:text-[#1C1917]"
            }`}
          >
            Local SEO
          </Link>
          <Link
            href="/#transparency"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-[#57534E] dark:text-slate-300 hover:text-[#1C1917] min-h-[44px] flex items-center"
          >
            Zero-Risk Pledge
          </Link>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenIntake();
            }}
            className="w-full py-3 min-h-[44px] rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md cursor-pointer transition-all active:scale-98 flex items-center justify-center"
          >
            Claim Free Demo in 2 Mins
          </button>
        </div>
      )}
    </header>
  );
}
