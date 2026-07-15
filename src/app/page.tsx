"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Briefcase, GraduationCap, Microscope, Calendar, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteContent } from "@/data/siteContent";

export default function HomePage() {
  const { home } = siteContent;

  return (
    <>
      <Header />
      <main className="flex-1 min-h-screen bg-background-custom pb-20 font-sans">
        {/* Static Hero Section (Side-by-Side) */}
        <section
          id="hero"
          className="relative bg-gradient-to-b from-slate-50 to-slate-100/50 py-16 lg:py-24 border-b border-border-custom"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Welcome Text */}
              <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-6 animate-fade-in">
                <span className="text-primary font-bold text-xs uppercase tracking-widest bg-muted-surface border border-primary/20 rounded-full px-4 py-1.5 self-center lg:self-start inline-block">
                  Ranelagh Care Facility
                </span>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-text-main leading-tight tracking-tight">
                  {home.welcomeTitle}
                </h1>

                <p className="text-md sm:text-lg font-semibold text-primary">
                  {home.welcomeSubtitle}
                </p>

                <div className="text-sm sm:text-base text-muted-text space-y-4 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                  <p>{home.description1}</p>
                  <p>{home.description2}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl text-base font-bold shadow-sm transition-all focus-ring"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Inquire About Admissions</span>
                  </Link>
                </div>

                {/* Quick Contact Link */}
                <div className="flex justify-center lg:justify-start pt-2">
                  <a
                    href={`tel:${siteContent.phone}`}
                    className="flex items-center gap-2 text-sm font-bold text-text-main hover:text-primary transition-colors focus-ring rounded px-2 py-1"
                  >
                    <Phone className="w-4.5 h-4.5 text-primary" />
                    <span>Contact Reception: {siteContent.phone}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Static Image Frame (Courtyard Patio) */}
              <div className="lg:col-span-5 flex justify-center items-center animate-slide-up">
                <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-border-custom bg-slate-100">
                  <Image
                    src="/images/building_grey.jpg"
                    alt="Leeson Park NHI Main Grey Entrance Arch Doorway"
                    fill
                    priority
                    sizes="(max-w-768px) 100vw, 450px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-slate-900/40 p-4 text-white text-center">
                    <p className="font-heading font-bold text-sm">{siteContent.clinicName}</p>
                    <p className="text-[10px] text-slate-200">Ranelagh, Dublin 6</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-text-main">
              Why Choose Leeson Park NHI?
            </h2>
            <p className="text-sm text-muted-text max-w-md mx-auto">
              Our core values guide our daily service to residents and families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {home.whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-border-custom border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-2.5 bg-muted-surface rounded-xl text-primary mt-1 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-text-main text-base">{item.title}</h3>
                  <p className="text-sm text-muted-text leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Link Cards to Departments */}
        <section className="py-12 bg-slate-50 border-t border-b border-border-custom">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold font-heading text-text-main">
                Explore Our Facility & Work
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Careers Card */}
              <div className="bg-white rounded-2xl border border-border-custom border-l-4 border-l-primary p-6 flex flex-col justify-between shadow-sm hover:shadow transition-shadow">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-muted-surface rounded-xl flex items-center justify-center text-primary">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-text-main">Careers Opportunity</h3>
                  <p className="text-sm text-muted-text leading-relaxed">
                    Join a team where your passion for care meets purpose. We support work permit sponsorship for international recruits.
                  </p>
                </div>
                <div className="pt-6">
                  <Link
                    href="/careers"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-dark"
                  >
                    <span>View Careers Info</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Training Opportunities Card */}
              <div className="bg-white rounded-2xl border border-border-custom border-l-4 border-l-primary p-6 flex flex-col justify-between shadow-sm hover:shadow transition-shadow">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-muted-surface rounded-xl flex items-center justify-center text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-text-main">Training Pathways</h3>
                  <p className="text-sm text-muted-text leading-relaxed">
                    Ongoing learning programs for HCA, nursing, and imaging specialties with flights/accommodation rewards for visa candidates.
                  </p>
                </div>
                <div className="pt-6">
                  <Link
                    href="/training"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-dark"
                  >
                    <span>Explore Training</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Imaging Department Card */}
              <div className="bg-white rounded-2xl border border-border-custom border-l-4 border-l-primary p-6 flex flex-col justify-between shadow-sm hover:shadow transition-shadow">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-muted-surface rounded-xl flex items-center justify-center text-primary">
                    <Microscope className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-text-main">Diagnostics Imaging</h3>
                  <p className="text-sm text-muted-text leading-relaxed">
                    Advanced department rendering ultrasound, X-ray, CT scan, and high-resolution MRI scans at our Annex facility.
                  </p>
                </div>
                <div className="pt-6">
                  <Link
                    href="/imaging"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-dark"
                  >
                    <span>Diagnostics Imaging</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
