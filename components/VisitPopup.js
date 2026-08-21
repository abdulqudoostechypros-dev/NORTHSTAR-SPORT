"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import Link from "next/link";

export default function VisitPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = window.sessionStorage.getItem("northstar-welcome-dismissed") === "true";
    } catch {
      dismissed = false;
    }

    if (dismissed) return undefined;

    const timer = window.setTimeout(() => {
      try {
        window.sessionStorage.setItem("northstar-welcome-dismissed", "true");
      } catch {
        // Continue showing the popup when storage is unavailable.
      }
      setVisible(true);
    }, 900);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-navy/35 p-4 backdrop-blur-[2px] sm:items-center" role="presentation">
      <section role="dialog" aria-modal="true" aria-labelledby="visit-popup-title" className="reveal relative w-full max-w-lg bg-white p-7 text-ink shadow-2xl sm:p-9">
        <button type="button" onClick={() => setVisible(false)} aria-label="Close welcome message" className="absolute right-4 top-4 rounded-full p-2 text-muted transition hover:bg-surface hover:text-ink"><X className="h-5 w-5" /></button>
        <p className="eyebrow">Welcome to Northstar</p>
        <h2 id="visit-popup-title" className="mt-4 max-w-sm font-display text-3xl font-bold leading-tight">Find the signal behind the score.</h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">Explore our approach to sports intelligence, content production, and audience growth, or start with a conversation about your next brief.</p>
        <div className="mt-7 flex flex-wrap items-center gap-3"><Link href="/contact" onClick={() => setVisible(false)} className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-bold text-white transition hover:bg-ink">Start a conversation <ArrowUpRight className="h-4 w-4" /></Link><button type="button" onClick={() => setVisible(false)} className="rounded-full border border-line px-5 py-3 text-sm font-bold text-ink-soft transition hover:border-ink hover:text-ink">Hide for this visit</button></div>
      </section>
    </div>
  );
}
