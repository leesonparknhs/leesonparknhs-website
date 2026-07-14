"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Heart, Shield, Award } from "lucide-react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { siteContent } from "@/data/siteContent";

export default function ImagingPage() {
  const { imaging } = siteContent;

  return (
    <>
      <Header />
      <main className="flex-1 min-h-screen bg-background-custom pb-20 font-sans">
        {/* Simple Page Header Banner (No Sliders) */}
        <PageHeader
          title="Diagnostics Department"
          description="Elevating healthcare with cutting-edge diagnostic imaging at Leeson Park NHI."
          currentPage="Imaging"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Content Blocks (8 columns) */}
            <div className="lg:col-span-8 space-y-12 animate-fade-in">
              {/* Core Intro */}
              <div className="space-y-4">
                <h1 className="text-3xl font-extrabold font-heading text-text-main">
                  {imaging.title}
                </h1>
                <p className="text-md font-semibold text-primary">
                  {imaging.subtitle}
                </p>
                <p className="text-sm sm:text-base text-muted-text leading-relaxed">
                  {imaging.intro}
                </p>
              </div>

              {/* Objectives */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-border-custom border-l-4 border-l-primary shadow-sm space-y-4">
                <h2 className="text-lg sm:text-xl font-bold font-heading text-text-main">
                  {imaging.objective.title}
                </h2>
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-medium">
                  {imaging.objective.description}
                </p>
              </div>

              {/* Imaging Services */}
              <div className="space-y-6">
                <h2 className="text-lg sm:text-xl font-bold font-heading text-text-main">
                  Our Imaging Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {imaging.services.map((service) => (
                    <div
                      key={service.title}
                      className="bg-white p-5 rounded-2xl border border-border-custom border-l-4 border-l-primary shadow-sm flex items-start gap-3.5"
                    >
                      <div className="p-1.5 bg-muted-surface text-primary rounded-lg shrink-0 mt-0.5">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-text-main text-sm sm:text-base">{service.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-text leading-relaxed mt-1">{service.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location & Facilities */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-border-custom border-l-4 border-l-primary shadow-sm space-y-4">
                <div className="flex items-center gap-3 border-b border-border-custom pb-4">
                  <div className="w-10 h-10 bg-muted-surface rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold font-heading text-text-main">
                    {imaging.facilities.title}
                  </h2>
                </div>
                <p className="text-sm text-muted-text leading-relaxed">
                  {imaging.facilities.description}
                </p>
              </div>

              {/* Recruitment & Sponsorship */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-border-custom border-l-4 border-l-primary shadow-sm space-y-4">
                <div className="flex items-center gap-3 border-b border-border-custom pb-4">
                  <div className="w-10 h-10 bg-muted-surface rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold font-heading text-text-main">
                    {imaging.recruitment.title}
                  </h2>
                </div>
                <p className="text-sm text-muted-text leading-relaxed">
                  {imaging.recruitment.description}
                </p>
              </div>

              {/* QA & Safety */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-border-custom border-l-4 border-l-primary shadow-sm space-y-4">
                <div className="flex items-center gap-3 border-b border-border-custom pb-4">
                  <div className="w-10 h-10 bg-muted-surface rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold font-heading text-text-main">
                    {imaging.safety.title}
                  </h2>
                </div>
                <p className="text-sm text-muted-text leading-relaxed">
                  {imaging.safety.description}
                </p>
              </div>
            </div>

            {/* Right Column: Static Image Sidebar (4 columns) */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 animate-slide-up">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-border-custom bg-slate-100">
                <Image
                  src="/images/building_cream.jpg"
                  alt="Leeson Park NHI Cream Facade Annex Building"
                  fill
                  sizes="(max-w-768px) 100vw, 350px"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-slate-900/55 p-3 text-white text-center">
                  <p className="font-heading font-bold text-xs">Diagnostics Ward & Medical Annex</p>
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
