"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { label: "About", href: "/about" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Portfolio / Gallery", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
];

const services = [
  { label: "Editorial strategy", href: "/services/editorial-strategy" },
  { label: "Content production", href: "/services/content-production" },
  { label: "Audience growth", href: "/services/audience-growth" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = isHome && !scrolled && !open;
  const isActive = (href) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${light ? "border-white/15 bg-transparent text-white" : "border-line/90 bg-[#f7f9fc]/95 text-ink shadow-[0_5px_25px_rgba(19,34,56,.06)] backdrop-blur"}`}>
      <div className="wrap flex min-h-[72px] items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Northstar Sport home">
          <span className={`flex h-9 w-9 items-center justify-center rounded-full font-display text-sm ${light ? "bg-coral text-white" : "bg-ink text-white"}`}>N</span>
          <span className="font-display text-lg font-bold tracking-tight">NORTHSTAR<span className="text-coral">/</span>SPORT</span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
          <Link href="/" className={`text-sm font-semibold transition-colors ${isActive("/") ? "text-coral" : light ? "text-white/75 hover:text-white" : "text-ink-soft hover:text-coral"}`}>Home</Link>
          <div className="group relative">
            <Link href="/services" className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors ${pathname.startsWith("/services") ? "text-coral" : light ? "text-white/75 hover:text-white" : "text-ink-soft hover:text-coral"}`}>Services <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" /></Link>
            <div className="invisible absolute right-0 top-full w-60 translate-y-2 border border-line bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-4 group-hover:opacity-100">
              <Link href="/services" className="block px-3 py-2.5 text-sm font-semibold text-ink hover:bg-surface">All services</Link>
              {services.map((service) => <Link key={service.href} href={service.href} className="block px-3 py-2.5 text-sm text-ink-soft hover:bg-surface hover:text-coral">{service.label}</Link>)}
            </div>
          </div>
          {links.map((link) => <Link key={link.href} href={link.href} className={`text-sm font-semibold transition-colors ${isActive(link.href) ? "text-coral" : light ? "text-white/75 hover:text-white" : "text-ink-soft hover:text-coral"}`}>{link.label}</Link>)}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className={`hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition sm:flex ${light ? "bg-white text-ink hover:bg-coral hover:text-white" : "bg-coral text-white hover:bg-ink"}`}>Start a conversation <ArrowUpRight className="h-4 w-4" /></Link>
          <button className={`rounded-full p-2 xl:hidden ${light ? "text-white" : "text-ink"}`} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
        </div>
      </div>

      {open && <nav id="mobile-menu" className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-line bg-[#f7f9fc] px-5 pb-6 pt-4 text-ink shadow-xl sm:px-8 xl:hidden" aria-label="Mobile navigation">
        <Link href="/" onClick={() => setOpen(false)} className="block border-b border-line py-3 text-sm font-semibold">Home</Link>
        <p className="pb-1 pt-4 text-[11px] font-bold uppercase tracking-[.18em] text-coral">Services</p>
        <Link href="/services" onClick={() => setOpen(false)} className="block py-2 text-sm font-semibold">All services</Link>
        {services.map((service) => <Link key={service.href} href={service.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-ink-soft">{service.label}</Link>)}
        {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block border-t border-line py-3 text-sm font-semibold">{link.label}</Link>)}
        <Link href="/contact" onClick={() => setOpen(false)} className="mt-4 flex items-center justify-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-bold text-white">Start a conversation <ArrowUpRight className="h-4 w-4" /></Link>
      </nav>}
    </header>
  );
}
