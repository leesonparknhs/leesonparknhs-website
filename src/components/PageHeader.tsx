import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description?: string;
  currentPage: string;
}

export default function PageHeader({ title, description, currentPage }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-primary py-12 lg:py-16 text-white">
      {/* Background decoration */}
      <div className="absolute right-[5%] top-[-20%] opacity-10 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1">
          <path d="M12 2v20M2 12h20" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-xs font-semibold text-slate-350 tracking-wider uppercase" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary-dark transition-colors focus-ring rounded">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-white font-bold">{currentPage}</span>
        </nav>

        {/* Title & description */}
        <div className="max-w-3xl space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-sm sm:text-base text-slate-350 leading-relaxed font-medium">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
