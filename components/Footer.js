import { SocialFacebook, SocialInstagram, SocialTwitter } from "./icons";

const socials = [
  { icon: SocialFacebook, label: "Facebook", href: "https://www.facebook.com/" },
  { icon: SocialInstagram, label: "Instagram", href: "https://www.instagram.com/" },
  { icon: SocialTwitter, label: "Twitter", href: "https://x.com/" },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-navy text-white">
      <div className="wrap py-12">
        <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div><p className="font-display text-xl font-bold">NORTHSTAR<span className="text-coral">/</span>SPORT</p><p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">Independent sports intelligence and creative services for the stories worth following.</p><div className="mt-5 flex gap-2">{socials.map(({ icon: Icon, label, href }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`Open ${label}`} title={`Open ${label}`} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-coral hover:text-coral"><Icon className="h-4 w-4" /></a>)}</div></div>
          <div><p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-white/40">Explore</p><div className="flex flex-col gap-3 text-sm text-white/70"><a href="/about">About</a><a href="/services">Services</a><a href="/portfolio">Portfolio</a></div></div>
          <div><p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-white/40">Connect</p><div className="flex flex-col gap-3 text-sm text-white/70"><a href="/why-choose-us">Why Northstar</a><a href="/faq">FAQ</a><a href="/contact">Contact</a></div></div>
          <div><p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-white/40">Connect</p><p className="text-sm leading-relaxed text-white/70">Use the contact form<br />to start a conversation.</p><a href="/contact" className="mt-3 inline-flex text-sm font-semibold text-coral">Contact Northstar <span className="ml-1">↗</span></a></div>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-white/40 sm:flex-row">
          <span>© 2026 Northstar Sport. All rights reserved.</span>
          <div className="flex flex-wrap gap-5"><a href="/privacy" className="transition hover:text-white">Privacy Policy</a><a href="/cookies" className="transition hover:text-white">Cookie Policy</a><a href="/terms" className="transition hover:text-white">Terms</a><span>Independent by design.</span></div>
        </div>
      </div>
    </footer>
  );
}
