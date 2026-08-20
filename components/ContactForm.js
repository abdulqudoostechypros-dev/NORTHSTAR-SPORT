"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setError("Please complete all fields before sending.");
      setSubmitted(false);
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || "Unable to send enquiry right now.");
      }

      form.reset();
      setSubmitted(true);
    } catch (submitError) {
      setSubmitted(false);
      setError(submitError.message || "Unable to send enquiry right now.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-5 bg-white p-7 shadow-[0_12px_40px_rgba(19,34,56,.06)]" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold" htmlFor="contact-name">
          Name
          <input id="contact-name" required name="name" autoComplete="name" className="mt-2 w-full border-b border-line bg-transparent px-0 py-3 text-sm outline-none" placeholder="Your name" />
        </label>
        <label className="text-sm font-semibold" htmlFor="contact-email">
          Email
          <input id="contact-email" required type="email" name="email" autoComplete="email" className="mt-2 w-full border-b border-line bg-transparent px-0 py-3 text-sm outline-none" placeholder="you@company.com" />
        </label>
      </div>
      <label className="block text-sm font-semibold" htmlFor="contact-message">
        What can we help with?
        <textarea id="contact-message" required name="message" rows="5" className="mt-2 w-full resize-none border-b border-line bg-transparent px-0 py-3 text-sm outline-none" placeholder="A little context goes a long way." />
      </label>
      <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 text-sm font-bold text-white transition hover:bg-ink disabled:cursor-not-allowed disabled:opacity-70">
        {isSubmitting ? "Sending..." : "Check enquiry"} <ArrowUpRight className="h-4 w-4" />
      </button>
      <p aria-live="polite" className={`text-sm leading-relaxed ${submitted ? "text-aqua" : error ? "text-red-600" : "text-muted"}`}>
        {submitted
          ? "Thanks. Your enquiry has been sent to the admin inbox."
          : error || "This form sends directly through the app backend when email settings are configured."}
      </p>
    </form>
  );
}
