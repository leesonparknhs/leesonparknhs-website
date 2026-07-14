"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { siteContent } from "../data/siteContent";
import Logo from "./Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Monitor scroll to apply box-shadow to header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Careers", href: "/careers" },
    { label: "Training Opportunities", href: "/training" },
    { label: "Imaging Department", href: "/imaging" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-border-custom"
          : "bg-surface/90 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="focus-ring rounded-md block"
            >
              <Logo className="w-9 h-9" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors focus-ring rounded-md px-2 py-1 relative ${
                    isActive ? "text-primary font-bold" : "text-text-main hover:text-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-[-4px] left-2 right-2 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Call to Actions (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${siteContent.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors focus-ring rounded-md px-2 py-1"
            >
              <Phone className="w-4 h-4" />
              <span>Call Clinic</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:shadow transition-all focus-ring"
            >
              <Calendar className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile Menu Button & Compact CTA */}
          <div className="flex items-center space-x-3 md:hidden">
            {/* Quick Call Button (Mobile) */}
            <a
              href={`tel:${siteContent.phone.replace(/\s+/g, "")}`}
              className="flex items-center justify-center p-2.5 rounded-full bg-muted-surface text-primary hover:bg-primary/10 transition-all focus-ring"
              aria-label="Call Clinic"
            >
              <Phone className="w-5 h-5" />
            </a>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2.5 rounded-lg text-text-main hover:bg-slate-100 hover:text-primary transition-all focus-ring"
              aria-controls="mobile-navigation"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-out Menu Panel */}
      <div
        id="mobile-navigation"
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-border-custom shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible h-0"
        }`}
        aria-hidden={!isOpen}
      >
        <nav className="px-4 pt-2 pb-6 space-y-2 flex flex-col bg-white">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-lg text-base font-medium transition-all focus-ring ${
                  isActive ? "bg-muted-surface text-primary font-bold" : "text-text-main hover:bg-muted-surface hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-border-custom flex flex-col gap-3">
            <a
              href={`tel:${siteContent.phone.replace(/\s+/g, "")}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-primary text-primary text-center font-semibold hover:bg-muted-surface transition-all focus-ring"
            >
              <Phone className="w-4 h-4" />
              <span>Call Clinic</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-white text-center font-semibold hover:bg-primary-dark shadow-sm transition-all focus-ring"
            >
              <Calendar className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
