"use client";

import React, { useState } from "react";
import {
  X,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Coffee,
  Stethoscope,
  Dumbbell,
  Crown,
  Briefcase,
  MessageCircle,
  Calendar,
  MapPin,
  FileText,
  Phone,
} from "lucide-react";

interface IntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function IntakeModal({ isOpen, onClose }: IntakeModalProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [businessName, setBusinessName] = useState("");
  const [category, setCategory] = useState("cafe");
  const [location, setLocation] = useState("");
  const [googleMapsUrl, setGoogleMapsUrl] = useState("");
  const [selectedMood, setSelectedMood] = useState("cozy");
  const [primaryGoal, setPrimaryGoal] = useState("whatsapp");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  const moods = [
    {
      id: "cozy",
      icon: Coffee,
      label: "Warm & Cozy",
      desc: "Warm tones, artisanal feel, welcoming typography (Cafes, Bakeries, Bistros)",
      colors: ["#C86446", "#FAF6F0"],
    },
    {
      id: "clinical",
      icon: Stethoscope,
      label: "Clinical Trust",
      desc: "Clean teal & white, accredited medical feel (Dentists, Doctors, Diagnostic)",
      colors: ["#0D9488", "#FFFFFF"],
    },
    {
      id: "bold",
      icon: Dumbbell,
      label: "Bold Energy",
      desc: "Matte dark mode, energetic neon lime (Gyms, CrossFit, Martial Arts)",
      colors: ["#121212", "#A3E635"],
    },
    {
      id: "luxury",
      icon: Crown,
      label: "Luxury Minimal",
      desc: "Champagne gold, refined editorial style (Salons, Spas, High Fashion)",
      colors: ["#D4AF37", "#0B0B0E"],
    },
    {
      id: "professional",
      icon: Briefcase,
      label: "Modern Professional",
      desc: "Deep navy, credible corporate tone (Lawyers, CAs, Consultancies)",
      colors: ["#0F172A", "#3B82F6"],
    },
  ];

  const goals = [
    {
      id: "whatsapp",
      icon: MessageCircle,
      title: "Direct WhatsApp Orders / Queries",
      desc: "1-tap chat button with pre-filled items or questions",
    },
    {
      id: "booking",
      icon: Calendar,
      title: "Book Appointments & Consultations",
      desc: "Quick date & time slot selection for clients",
    },
    {
      id: "menu",
      icon: FileText,
      title: "Explore Digital Menu & Rate Card",
      desc: "Categorized price catalog with crisp photos",
    },
    {
      id: "directions",
      icon: MapPin,
      title: "Get Store Location & Direct Calls",
      desc: "Drive instant footfall via Google Maps integration",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#FAF8F5] dark:bg-[#0B0F17] border border-[#E7E2D8] dark:border-slate-800 p-6 sm:p-8 shadow-2xl text-[#1C1917] dark:text-slate-100 overflow-hidden">
        {/* Top Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#57534E] dark:text-slate-400 hover:text-[#1C1917] dark:hover:text-white hover:bg-[#F1ECE4] dark:hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header & Step Indicator */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold border border-blue-500/20">
                  Step {step} of 4
                </span>
                <span className="text-xs text-[#57534E] dark:text-slate-400">• 2-Minute Request</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1C1917] dark:text-white font-[family-name:var(--font-heading)]">
                {step === 1 && "What is your business called?"}
                {step === 2 && "Pick your desired website vibe"}
                {step === 3 && "What should visitors do first?"}
                {step === 4 && "Where should we send your demo?"}
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] dark:text-slate-400 mt-1">
                {step === 1 && "We'll build your homepage using your authentic local identity."}
                {step === 2 && "Our human designers match your brand feel with typography and colors."}
                {step === 3 && "We will engineer your primary call to action for maximum conversion."}
                {step === 4 && "Zero credit card. Zero spam. We send a private preview link in 24h."}
              </p>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-[#E7E2D8] dark:bg-slate-800 rounded-full mt-4 overflow-hidden">
                <div
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Step 1: Business Identity */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#57534E] dark:text-slate-300 mb-1.5">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Blue Tokai Cafe or Dr. Sharma Dental"
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] dark:bg-slate-900 border border-[#D6CEBE] dark:border-slate-700 text-[#1C1917] dark:text-white placeholder-[#A8A29E] dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#57534E] dark:text-slate-300 mb-1.5">
                      Category *
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] dark:bg-slate-900 border border-[#D6CEBE] dark:border-slate-700 text-[#1C1917] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    >
                      <option value="cafe">Cafe / Bakery / Food</option>
                      <option value="dental">Doctor / Clinic / Health</option>
                      <option value="fitness">Gym / Fitness / Yoga</option>
                      <option value="salon">Salon / Spa / Wellness</option>
                      <option value="services">Lawyer / CA / Professional</option>
                      <option value="retail">Boutique / Local Store</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#57534E] dark:text-slate-300 mb-1.5">
                      City / Area *
                    </label>
                    <input
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Bandra, Mumbai"
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] dark:bg-slate-900 border border-[#D6CEBE] dark:border-slate-700 text-[#1C1917] dark:text-white placeholder-[#A8A29E] dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F5F1E9] dark:bg-blue-950/20 border border-[#E7E2D8] dark:border-blue-900/50">
                  <label className="block text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    Auto-Magic: Google Maps or Instagram Link (Optional)
                  </label>
                  <input
                    type="url"
                    value={googleMapsUrl}
                    onChange={(e) => setGoogleMapsUrl(e.target.value)}
                    placeholder="Paste link to auto-pull your real photos & reviews"
                    className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] dark:bg-slate-900/80 border border-[#D6CEBE] dark:border-slate-700 text-xs text-[#1C1917] dark:text-white placeholder-[#A8A29E] dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <p className="text-[11px] text-[#57534E] dark:text-slate-400 mt-1">
                    Saves you time! We will pull your real logo, ratings, and operating hours automatically.
                  </p>
                </div>
              </div>
            )}

            {/* Step 2: Vibe & Mood Selector */}
            {step === 2 && (
              <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
                {moods.map((mood) => {
                  const Icon = mood.icon;
                  const isSelected = selectedMood === mood.id;
                  return (
                    <div
                      key={mood.id}
                      onClick={() => setSelectedMood(mood.id)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                        isSelected
                          ? "bg-[#F5F1E9] dark:bg-slate-800/80 border-blue-600 shadow-sm"
                          : "bg-[#FFFFFF] dark:bg-slate-900/50 border-[#E7E2D8] dark:border-slate-800 hover:bg-[#F3EFE6] dark:hover:bg-slate-800/40"
                      }`}
                    >
                      <div
                        className={`p-2.5 rounded-xl ${
                          isSelected ? "bg-blue-600 text-white" : "bg-[#EAE4D9] dark:bg-slate-800 text-[#57534E] dark:text-slate-400"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-bold text-[#1C1917] dark:text-white">{mood.label}</p>
                          <div className="flex items-center gap-1">
                            {mood.colors.map((c, i) => (
                              <span
                                key={i}
                                className="w-3.5 h-3.5 rounded-full border border-black/20"
                                style={{ backgroundColor: c }}
                              ></span>
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-[#57534E] dark:text-slate-400 mt-0.5">{mood.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Step 3: Conversion Goal */}
            {step === 3 && (
              <div className="space-y-2.5">
                {goals.map((g) => {
                  const Icon = g.icon;
                  const isSelected = primaryGoal === g.id;
                  return (
                    <div
                      key={g.id}
                      onClick={() => setPrimaryGoal(g.id)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center gap-3.5 ${
                        isSelected
                          ? "bg-[#F5F1E9] dark:bg-slate-800/80 border-blue-600 shadow-sm"
                          : "bg-[#FFFFFF] dark:bg-slate-900/50 border-[#E7E2D8] dark:border-slate-800 hover:bg-[#F3EFE6] dark:hover:bg-slate-800/40"
                      }`}
                    >
                      <div
                        className={`p-2.5 rounded-xl ${
                          isSelected ? "bg-emerald-600 text-white" : "bg-[#EAE4D9] dark:bg-slate-800 text-[#57534E] dark:text-slate-400"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-[#1C1917] dark:text-white">{g.title}</p>
                        <p className="text-xs text-[#57534E] dark:text-slate-400 mt-0.5">{g.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Step 4: Dispatch Channel */}
            {step === 4 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#57534E] dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    WhatsApp Number (To receive private preview link) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] dark:bg-slate-900 border border-[#D6CEBE] dark:border-slate-700 text-[#1C1917] dark:text-white placeholder-[#A8A29E] dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                  <p className="text-[11px] text-[#57534E] dark:text-slate-400 mt-1">
                    Your demo link opens smoothly on mobile so you can test it directly on your phone.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#57534E] dark:text-slate-300 mb-1.5">
                    Email Address (Optional backup)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="owner@yourbusiness.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] dark:bg-slate-900 border border-[#D6CEBE] dark:border-slate-700 text-[#1C1917] dark:text-white placeholder-[#A8A29E] dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-[#F5F1E9] dark:bg-slate-900/60 border border-[#E7E2D8] dark:border-slate-800 text-xs text-[#57534E] dark:text-slate-400 space-y-1">
                  <p className="text-[#1C1917] dark:text-white font-semibold">🤝 The LikeItPayIt Guarantee:</p>
                  <p>• ₹0 charged for your demo. No card info ever asked.</p>
                  <p>• Zero sales harassment. If you don&apos;t like it, you walk away freely.</p>
                </div>
              </div>
            )}

            {/* Footer Navigation Buttons */}
            <div className="mt-7 pt-4 border-t border-[#E7E2D8] dark:border-slate-800 flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#57534E] dark:text-slate-400 hover:text-[#1C1917] dark:hover:text-white hover:bg-[#F1ECE4] dark:hover:bg-slate-800 transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all shadow-md shadow-blue-600/30 cursor-pointer"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex items-center gap-1.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all shadow-lg shadow-emerald-600/30 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  Craft My Free Demo
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-[#1C1917] dark:text-white font-[family-name:var(--font-heading)]">
              Your Demo Is Being Handcrafted!
            </h3>

            <p className="text-sm text-[#57534E] dark:text-slate-300 max-w-md mx-auto leading-relaxed">
              We&apos;ve logged your request for <strong className="text-[#1C1917] dark:text-white">{businessName || "Your Business"}</strong>. Our AI has already begun researching your local assets, and our human UI designer is preparing your custom homepage.
            </p>

            {/* Countdown simulation */}
            <div className="p-4 rounded-2xl bg-[#F5F1E9] dark:bg-slate-900 border border-[#E7E2D8] dark:border-slate-800 max-w-sm mx-auto space-y-1">
              <p className="text-xs uppercase font-semibold text-[#57534E] dark:text-slate-400 flex items-center justify-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                Guaranteed Delivery Window:
              </p>
              <p className="text-2xl font-black text-blue-600 dark:text-blue-400 font-mono">
                23:59:40
              </p>
              <p className="text-[11px] text-[#78716C] dark:text-slate-500">
                You will receive a WhatsApp ping the moment your link is active.
              </p>
            </div>

            <button
              onClick={resetAndClose}
              className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold text-[#1C1917] dark:text-slate-300 hover:text-black dark:hover:text-white bg-[#EAE4D9] hover:bg-[#E0D8CB] dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              Back to Overview
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
