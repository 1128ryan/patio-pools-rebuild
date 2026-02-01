"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface ContactFormProps {
  heading?: string;
  subtitle?: string;
}

export function ContactForm({
  heading = "Get a Free Quote",
  subtitle = "Fill out the form below and we'll get back to you within 24 hours.",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zipCode: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    // For static export, this would need a form service like Formspree, Netlify Forms, etc.
    alert("Thank you! We'll be in touch within 24 hours.");
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg sm:p-8">
      <h3 className="font-heading text-2xl font-bold text-navy uppercase tracking-wide">
        {heading}
      </h3>
      <p className="mt-1 text-sm text-navy-mid">{subtitle}</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-lg border border-gray px-4 py-2.5 text-navy focus:border-blue focus:ring-1 focus:ring-blue outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-lg border border-gray px-4 py-2.5 text-navy focus:border-blue focus:ring-1 focus:ring-blue outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full rounded-lg border border-gray px-4 py-2.5 text-navy focus:border-blue focus:ring-1 focus:ring-blue outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-navy mb-1">
              Zip Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              required
              value={formData.zipCode}
              onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
              className="w-full rounded-lg border border-gray px-4 py-2.5 text-navy focus:border-blue focus:ring-1 focus:ring-blue outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-navy mb-1">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full rounded-lg border border-gray px-4 py-2.5 text-navy focus:border-blue focus:ring-1 focus:ring-blue outline-none transition-colors"
          >
            <option value="">Select a service...</option>
            <option value="new-pool">New Pool Construction</option>
            <option value="renovation">Pool Renovation</option>
            <option value="cleaning">Pool Cleaning</option>
            <option value="repair">Pool Repair & Maintenance</option>
            <option value="spa">Spa / Hot Tub Purchase</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full rounded-lg border border-gray px-4 py-2.5 text-navy focus:border-blue focus:ring-1 focus:ring-blue outline-none transition-colors resize-y"
          />
        </div>

        <Button type="submit" variant="primary" size="lg" className="w-full">
          Submit Request
        </Button>
      </form>
    </div>
  );
}
