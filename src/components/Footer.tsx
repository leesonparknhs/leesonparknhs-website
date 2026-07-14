import React from "react";
import Link from "next/link";
import { ShieldAlert, ArrowUp } from "lucide-react";
import { siteContent } from "../data/siteContent";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Careers", href: "/careers" },
    { label: "Training Opportunities", href: "/training" },
    { label: "Imaging Department", href: "/imaging" },
    { label: "Contact Us", href: "/contact" },
  ];

  const departmentLinks = [
    { label: "HCA Training", href: "/training" },
    { label: "Staff Nurse Development", href: "/training" },
    { label: "Imaging Department", href: "/imaging" },
    { label: "Sponsorship (CoS)", href: "/careers" },
    { label: "Careers Opportunities", href: "/careers" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <Logo className="w-9 h-9" />
            </div>
            <p className="text-xs leading-relaxed max-w-sm">
              Providing compassionate, patient-centred medical consultations,
              diagnostics, and preventive care. Dedicated to clear communication
              and professional continuity of care.
            </p>
            <div className="inline-flex items-center gap-1.5 bg-slate-800 rounded-xl px-4 py-2 border border-slate-700/50">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                Registered Practice
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors focus-ring rounded-md py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Departments (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Departments
            </h4>
            <ul className="space-y-2.5 text-sm">
              {departmentLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors focus-ring rounded-md py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Contact & Location
            </h4>
            <div className="space-y-3 text-sm">
              <p className="leading-snug">
                <span className="font-semibold text-slate-300 block">
                  Address:
                </span>
                {siteContent.location}
              </p>
              <p>
                <span className="font-semibold text-slate-300 block">
                  Phone:
                </span>
                <a
                  href={`tel:${siteContent.phone.replace(/\s+/g, "")}`}
                  className="hover:text-primary transition-all focus-ring rounded-md"
                >
                  {siteContent.phone}
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-300 block">
                  Email:
                </span>
                <a
                  href={`mailto:${siteContent.email}`}
                  className="hover:text-primary transition-all focus-ring rounded-md"
                >
                  {siteContent.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Lower footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Dynamic Copyright & Disclaimer links */}
          <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
            <p className="text-xs">
              © {currentYear} {siteContent.clinicName}. All rights reserved.
              Registered in Ireland.
            </p>
            <p className="text-[11px] text-slate-500">
              Designed by{" "}
              <a
                href="https://www.boffinstechnology.com.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-primary transition-colors font-semibold focus-ring rounded px-0.5"
              >
                Boffins Technology LTD
              </a>
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px]">
              <Link
                href="/patient-info"
                className="hover:underline hover:text-slate-200 focus-ring rounded-md"
              >
                Disclaimer
              </Link>
              <span className="text-slate-700">|</span>
              <Link
                href="/contact"
                className="hover:underline hover:text-slate-200 focus-ring rounded-md"
              >
                Privacy Policy
              </Link>
              <span className="text-slate-700">|</span>
              <Link
                href="/contact"
                className="hover:underline hover:text-slate-200 focus-ring rounded-md"
              >
                Terms of Use
              </Link>
            </div>
          </div>

          {/* Scroll to Top */}
          <div>
            <a
              href="#hero"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-all shadow-md hover:shadow-lg focus-ring"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Emergency footer disclaimer */}
        <div className="mt-8 p-4 bg-slate-800/40 border border-slate-800 rounded-2xl flex gap-3 items-start max-w-4xl mx-auto">
          <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] leading-relaxed">
            <span className="font-bold text-slate-300">Medical Notice:</span>{" "}
            Information on this website is of a general educational nature. For
            personalized medical decisions, consult a healthcare provider. In
            the event of a medical emergency, call emergency services
            immediately.
          </p>
        </div>
      </div>
    </footer>
  );
}
