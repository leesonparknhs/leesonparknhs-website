"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Gift, UserCheck, Star, HeartHandshake, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { siteContent } from "@/data/siteContent";

export default function CareersPage() {
  const { careers } = siteContent;

  const iconMap: Record<number, React.ReactNode> = {
    0: <Star className="w-5 h-5 text-primary" />,
    1: <HeartHandshake className="w-5 h-5 text-primary" />,
    2: <UserCheck className="w-5 h-5 text-primary" />,
    3: <Gift className="w-5 h-5 text-primary" />,
  };

  return (
    <>
      <Header />
      <main className="flex-1 min-h-screen bg-background-custom pb-20 font-sans">
        {/* Simple Page Header Banner (No Sliders) */}
        <PageHeader
          title="Careers with Us"
          description="Join a growing care team focused on delivering high-quality support in a warm Ranelagh community."
          currentPage="Careers"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Content Blocks (8 columns) */}
            <div className="lg:col-span-8 space-y-12 animate-fade-in">
              {/* Core Intro */}
              <div className="space-y-4">
                <h1 className="text-3xl font-extrabold font-heading text-text-main">
                  {careers.title}
                </h1>
                <p className="text-md font-semibold text-primary">
                  {careers.subtitle}
                </p>
                <p className="text-sm sm:text-base text-muted-text leading-relaxed">
                  {careers.intro}
                </p>
              </div>

              {/* Why Work With Us */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-border-custom shadow-sm space-y-4">
                <h2 className="text-lg sm:text-xl font-bold font-heading text-text-main">
                  Why Work With Us?
                </h2>
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-medium">
                  {careers.whyWorkWithUs}
                </p>
              </div>

              {/* What We Offer Grid */}
              <div className="space-y-6">
                <h2 className="text-lg sm:text-xl font-bold font-heading text-text-main">
                  What We Offer
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {careers.whatWeOffer.map((item, idx) => (
                    <div
                      key={item.title}
                      className="flex gap-4 p-5 bg-white rounded-2xl border border-border-custom border-l-4 border-l-primary shadow-sm"
                    >
                      <div className="p-3 bg-muted-surface rounded-xl text-primary mt-1 shrink-0 h-11 w-11 flex items-center justify-center">
                        {iconMap[idx]}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-text-main text-sm sm:text-base">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-text leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* International Applicants */}
              <div className="bg-gradient-to-br from-white to-slate-50/50 p-6 sm:p-8 rounded-2xl border border-border-custom border-l-4 border-l-primary shadow-sm space-y-6">
                <div className="space-y-3">
                  <h2 className="text-lg sm:text-xl font-bold font-heading text-text-main">
                    {careers.sponsorship.title}
                  </h2>
                  <p className="text-sm sm:text-base text-muted-text leading-relaxed">
                    {careers.sponsorship.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-custom space-y-3">
                  <h3 className="text-xs font-bold text-text-main uppercase tracking-wider">
                    Eligibility Criteria for Work Permits
                  </h3>
                  <ul className="space-y-2.5">
                    {careers.sponsorship.criteria.map((criterion, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-text">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl font-bold shadow-sm transition-all focus-ring text-sm"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Static Image Sidebar (4 columns) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 animate-slide-up">
              {/* Image Frame 1 */}
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-border-custom bg-slate-100">
                <Image
                  src="/images/building_sign.jpg"
                  alt="Leeson Park NHI No. 10 Entrance Sign on Stone Pillar"
                  fill
                  sizes="(max-w-768px) 100vw, 350px"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-slate-900/55 p-3 text-white text-center">
                  <p className="font-heading font-bold text-xs">Our Nursing Care Team</p>
                </div>
              </div>

              {/* Image Frame 2 */}
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-border-custom bg-slate-100">
                <Image
                  src="/images/building_cream.jpg"
                  alt="Leeson Park NHI Cream Facade Annex Building"
                  fill
                  sizes="(max-w-768px) 100vw, 350px"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-slate-900/55 p-3 text-white text-center">
                  <p className="font-heading font-bold text-xs">Compassionate Daily Support</p>
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
