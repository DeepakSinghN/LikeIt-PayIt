"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AntiHostageBanner } from "@/components/AntiHostageBanner";
import { ProtocolSection } from "@/components/ProtocolSection";
import { HybridComparisonSection } from "@/components/HybridComparisonSection";
import { TestDriveManifestoSection } from "@/components/TestDriveManifestoSection";
import { LocalSeoSection } from "@/components/LocalSeoSection";
import { Footer } from "@/components/Footer";
import { IntakeModal } from "@/components/IntakeModal";

export default function Home() {
  const [isIntakeOpen, setIsIntakeOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Section 1: Sticky Navigation Bar */}
      <Navbar onOpenIntake={() => setIsIntakeOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Section 2: Storytelling Hero Section */}
        <HeroSection onOpenIntake={() => setIsIntakeOpen(true)} />

        {/* Section 2.5: The Anti-Hostage Sovereign Pledge Showcase */}
        <AntiHostageBanner onOpenIntake={() => setIsIntakeOpen(true)} />

        {/* Section 3: The 24-Hour Zero-Risk Protocol */}
        <ProtocolSection onOpenIntake={() => setIsIntakeOpen(true)} />

        {/* Section 4: The Positioning Battle (AI Speed + Human Soul vs Pure AI vs Agency) */}
        <HybridComparisonSection onOpenIntake={() => setIsIntakeOpen(true)} />

        {/* Section 4.5: The Epiphany Manifesto (The Car Test-Drive Principle) */}
        <TestDriveManifestoSection onOpenIntake={() => setIsIntakeOpen(true)} />

        {/* Section 5: The Local SEO Discovery Engine ("We Hide No Truth") */}
        <LocalSeoSection onOpenIntake={() => setIsIntakeOpen(true)} />
      </main>

      {/* Section 6: Editorial Closing Footer */}
      <Footer onOpenIntake={() => setIsIntakeOpen(true)} />

      {/* 4-Step Interactive Intake Modal */}
      <IntakeModal
        isOpen={isIntakeOpen}
        onClose={() => setIsIntakeOpen(false)}
      />
    </div>
  );
}
