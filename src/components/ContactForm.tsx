"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, MapPin, Clock, CheckCircle2, MessageSquare, AlertTriangle, Calendar } from "lucide-react";
import { siteContent } from "../data/siteContent";

// Form Schema Validation via Zod
const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." }),
  phone: z
    .string()
    .min(6, { message: "Phone number must be at least 6 digits." })
    .regex(/^[+0-9\s-]+$/, { message: "Please enter a valid phone number format." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .optional()
    .or(z.literal("")),
  preferredDate: z
    .string()
    .optional()
    .or(z.literal("")),
  service: z
    .string()
    .min(1, { message: "Please select a service." }),
  message: z
    .string()
    .optional()
    .or(z.literal("")),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      preferredDate: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${siteContent.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: data.fullName,
          Phone: data.phone,
          Email: data.email || "N/A",
          "Preferred Date": data.preferredDate || "N/A",
          "Inquiry / Department": data.service || "General Inquiry",
          Message: data.message,
        }),
      });
      if (response.ok) {
        setSubmittedData(data);
        setIsSubmitted(true);
        reset();
      } else {
        alert(`Form submission failed. Please try again or email us directly at: ${siteContent.email}`);
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert(`Submission error. Please try again or email us directly at: ${siteContent.email}`);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-muted-surface border border-primary/20 rounded-full px-4 py-1.5 inline-block">
            Book Appointment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-text-main">
            Contact & Appointment Requests
          </h2>
          <p className="text-base text-muted-text">
            Submit a booking request using the secure form below. For urgent matters or direct consultation inquiries, feel free to contact our administrative team via call or WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Contact info cards */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="bg-white p-8 rounded-3xl border border-border-custom border-l-4 border-l-primary shadow-sm space-y-6">
              <h3 className="text-xl font-bold font-heading text-text-main pb-4 border-b border-slate-100">
                Clinic Details
              </h3>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-muted-surface rounded-xl text-primary mt-1 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-muted-text uppercase tracking-wider">Address</h4>
                    <p className="text-sm font-semibold text-text-main mt-0.5">{siteContent.location}</p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-muted-surface rounded-xl text-primary mt-1 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-muted-text uppercase tracking-wider">Phone</h4>
                    <a
                      href={`tel:${siteContent.phone.replace(/\s+/g, "")}`}
                      className="text-sm font-bold text-primary hover:underline transition-colors block mt-0.5"
                    >
                      {siteContent.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-muted-surface rounded-xl text-primary mt-1 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-muted-text uppercase tracking-wider">Email</h4>
                    <a
                      href={`mailto:${siteContent.email}`}
                      className="text-sm font-bold text-primary hover:underline transition-colors block mt-0.5"
                    >
                      {siteContent.email}
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-muted-surface rounded-xl text-primary mt-1 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-muted-text uppercase tracking-wider">Opening Hours</h4>
                    <p className="text-sm font-semibold text-text-main mt-0.5">{siteContent.openingHours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form Container */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-border-custom border-l-4 border-l-primary shadow-sm">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="text-xs font-bold text-text-main uppercase tracking-wider">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      {...register("fullName")}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus-ring ${
                        errors.fullName ? "border-rose-400 bg-rose-50/20" : "border-slate-200 hover:border-slate-300"
                      }`}
                      placeholder="e.g. Liam O'Connor"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-500 font-semibold mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-text-main uppercase tracking-wider">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus-ring ${
                        errors.phone ? "border-rose-400 bg-rose-50/20" : "border-slate-200 hover:border-slate-300"
                      }`}
                      placeholder="e.g. +353 87 123 4567"
                    />
                    {errors.phone && (
                      <p className="text-xs text-rose-500 font-semibold mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-text-main uppercase tracking-wider">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus-ring ${
                        errors.email ? "border-rose-400 bg-rose-50/20" : "border-slate-200 hover:border-slate-300"
                      }`}
                      placeholder="e.g. liam@example.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 font-semibold mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-1.5">
                    <label htmlFor="preferredDate" className="text-xs font-bold text-text-main uppercase tracking-wider">
                      Preferred Date <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      {...register("preferredDate")}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm hover:border-slate-300 transition-all focus-ring"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div className="space-y-1.5">
                  <label htmlFor="service" className="text-xs font-bold text-text-main uppercase tracking-wider">
                    Inquiry Type <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="service"
                    {...register("service")}
                    className={`w-full px-4 py-3 rounded-xl border text-sm bg-white transition-all focus-ring ${
                      errors.service ? "border-rose-400 bg-rose-50/20" : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <option value="">-- Please Select an Inquiry Type --</option>
                    <option value="Admissions Inquiry">Admissions / General Inquiry</option>
                    <option value="Careers / Job Application">Careers / Job Application</option>
                    <option value="HCA Training Program">HCA Training Program</option>
                    <option value="Staff Nurse Position">Staff Nurse Position</option>
                    <option value="Radiography Careers">Radiography Careers</option>
                    <option value="Diagnostics Imaging Department">Diagnostics Imaging Department</option>
                    <option value="Other Query">Other Query</option>
                  </select>
                  {errors.service && (
                    <p className="text-xs text-rose-500 font-semibold mt-1">{errors.service.message}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-text-main uppercase tracking-wider">
                    Additional Message <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm hover:border-slate-300 transition-all focus-ring"
                    placeholder="Provide any context that will help us prepare (avoid sensitive medical information here)..."
                  />
                </div>

                {/* Privacy disclaimer */}
                <div className="p-4 bg-muted-surface border border-primary/10 rounded-2xl">
                  <p className="text-xs leading-relaxed text-primary-dark">
                    {siteContent.privacyPolicyNote}
                  </p>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold shadow-md hover:shadow-lg transition-all focus-ring flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Scheduling Request...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      <span>Submit Appointment Request</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success Screen State */
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-6 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-primary/15 text-primary flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-text-main font-heading">
                    Request Received Successfully
                  </h3>
                  <p className="text-sm text-muted-text max-w-md">
                    Thank you, <span className="font-semibold text-text-main">{submittedData?.fullName}</span>. 
                    Our care administration team will review your details and contact you shortly at 
                    <span className="font-semibold text-text-main"> {submittedData?.phone}</span> to follow up on your inquiry.
                  </p>
                </div>

                {/* Request Summary Card */}
                <div className="bg-slate-50 border border-border-custom p-6 rounded-2xl w-full max-w-md text-left space-y-3 text-sm">
                  <h4 className="font-bold text-text-main uppercase tracking-wider text-xs border-b pb-2 border-slate-200">
                    Inquiry Summary
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-muted-text font-medium text-xs">Inquiry Type:</span>
                    <span className="col-span-2 text-text-main font-semibold text-xs">{submittedData?.service}</span>

                    {submittedData?.preferredDate && (
                      <>
                        <span className="text-muted-text font-medium text-xs">Date requested:</span>
                        <span className="col-span-2 text-text-main font-semibold text-xs">{submittedData?.preferredDate}</span>
                      </>
                    )}

                    {submittedData?.email && (
                      <>
                        <span className="text-muted-text font-medium text-xs">Email:</span>
                        <span className="col-span-2 text-text-main font-semibold text-xs">{submittedData?.email}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="pt-4 w-full max-w-xs mx-auto">
                  <button
                    onClick={resetForm}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-text-main py-3.5 rounded-xl font-bold transition-all focus-ring text-sm"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
