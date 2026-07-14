import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { siteContent } from "../data/siteContent";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteContent.clinicName,
  description: "Welcome to MH Nursing Homes Gloucester, providing exceptional healthcare, support, and professional nursing care for seniors in a warm environment.",
  keywords: [
    "nursing home Gloucester",
    "MH Nursing Homes",
    "care home Gloucestershire",
    "senior healthcare Gloucester",
    "assisted living UK",
    "healthcare assistant jobs UK",
  ],
  openGraph: {
    title: siteContent.clinicName,
    description: "Welcome to MH Nursing Homes Gloucester, providing exceptional healthcare, support, and professional nursing care for seniors in a warm environment.",
    url: "https://www.mhnursinghomes.co.uk",
    type: "website",
    siteName: siteContent.clinicName,
  },
};

export default function RootLayout({
  children,
  header,
  footer,
}: Readonly<{
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}>) {
  // Structured data schema JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NursingHome",
        "@id": "https://www.mhnursinghomes.co.uk/#nursinghome",
        "name": siteContent.clinicName,
        "url": "https://www.mhnursinghomes.co.uk",
        "telephone": siteContent.phone.replace(/\s+/g, ""),
        "image": "https://www.mhnursinghomes.co.uk/images/clinic_lobby.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Gloucester Annex Facility",
          "addressLocality": "Gloucester",
          "addressRegion": "Gloucestershire",
          "addressCountry": "GB"
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${raleway.variable} h-full scroll-smooth antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 font-sans text-text-main">
        {children}
      </body>
    </html>
  );
}
