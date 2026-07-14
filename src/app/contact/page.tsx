import React from "react";
import type { Metadata } from "next";

import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us & Request Appointments | Leeson Park Nursing Home",
  description: "Get in touch with Leeson Park Nursing Home in Dublin 6. Submit a secure online appointment request, view our phone, email, map, and operating hours.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <PageHeader
        title="Contact Us"
        description="Reach out directly to our Gloucester administration team for careers, training, or admissions inquiries."
        currentPage="Contact Us"
      />
      <main className="flex-1">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
