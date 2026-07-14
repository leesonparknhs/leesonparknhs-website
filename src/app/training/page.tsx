"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Plane, Home, Award, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { siteContent } from "@/data/siteContent";

export default function TrainingPage() {
  const { training } = siteContent;

  const benefitIcons: Record<number, React.ReactNode> = {
    0: <Plane className="w-6 h-6 text-primary" />,
    1: <Home className="w-6 h-6 text-primary" />,
  };

  return (
    <>
      <Header />
      <main className="flex-1 min-h-screen bg-background-custom pb-20 font-sans">
        {/* Simple Page Header Banner (No Sliders) */}
        <PageHeader
          title="Training Pathways"
          description="We offer comprehensive training programs designed to equip you with the skills to excel."
          currentPage="Training"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Content Blocks (8 columns) */}
            <div className="lg:col-span-8 space-y-12 animate-fade-in">
              {/* Main Intro */}
              <div className="space-y-4">
                <h1 className="text-3xl font-extrabold font-heading text-text-main">
                  {training.title}
                </h1>
                <p className="text-md font-semibold text-primary">
                  {training.subtitle}
                </p>
                <p className="text-sm sm:text-base text-muted-text leading-relaxed">
                  {training.intro}
                </p>
              </div>

              {/* Training Programs */}
              <div className="space-y-6">
                <h2 className="text-lg sm:text-xl font-bold font-heading text-text-main">
                  Our Training Includes
                </h2>
                <div className="space-y-6">
                  {training.programs.map((prog) => (
                    <div
                      key={prog.title}
                      className="bg-white p-6 rounded-2xl border border-border-custom border-l-4 border-l-primary shadow-sm space-y-2"
                    >
                      <h3 className="font-extrabold text-primary text-base sm:text-lg">
                        {prog.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                        {prog.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructors & Practical */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-6 sm:p-8 rounded-2xl border border-border-custom border-l-4 border-l-primary shadow-sm">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-muted-surface rounded-xl flex items-center justify-center text-primary">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-text-main text-sm sm:text-base">Expert Instructors</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    {training.whyTrainWithUs.instructors}
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-muted-surface rounded-xl flex items-center justify-center text-primary">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-text-main text-sm sm:text-base">Hands-On Practice</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    {training.whyTrainWithUs.practical}
                  </p>
                </div>
              </div>

              {/* Visa Offer Benefits */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 sm:p-8 rounded-2xl border-l-4 border-l-secondary text-white shadow-lg space-y-6">
                <div className="space-y-2">
                  <h2 className="text-lg sm:text-xl font-bold font-heading text-secondary">
                    {training.benefits.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                    {training.benefits.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
                  {training.benefits.list.map((benefit, idx) => (
                    <div key={benefit.title} className="flex gap-4 items-start">
                      <div className="p-3 bg-slate-850 rounded-xl mt-1 shrink-0">
                        {benefitIcons[idx]}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white">{benefit.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed mt-1">{benefit.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl font-bold shadow-sm transition-all focus-ring text-sm"
                  >
                    <span>Apply for Training</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Static Image Sidebar (4 columns) */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 animate-slide-up">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-border-custom bg-slate-100">
                <Image
                  src="/images/building_brick.jpg"
                  alt="Leeson Park NHI Main Red Brick Entrance Steps"
                  fill
                  sizes="(max-w-768px) 100vw, 350px"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-slate-900/55 p-3 text-white text-center">
                  <p className="font-heading font-bold text-xs">Resident Gardening Care Activities</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
