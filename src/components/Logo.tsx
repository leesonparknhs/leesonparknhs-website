import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = "w-11 h-11", iconOnly = false }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      {/* Actual Uploaded Logo Image */}
      <div className={`relative ${className} overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm shrink-0`}>
        <Image
          src="/images/logo.jpg"
          alt="Leeson Park NHI Logo"
          fill
          sizes="44px"
          className="object-cover"
        />
      </div>

      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none text-left">
          <span className="font-heading font-extrabold tracking-wide text-primary-dark text-base md:text-lg">
            Leeson Park NHI
          </span>
        </div>
      )}
    </div>
  );
}
