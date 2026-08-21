"use client";

import Header from "./Header";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Mail, MapPin, Minus, Plus } from "lucide-react";

const serviceDetails = {
  "editorial-strategy": {
    title: "Editorial strategy",
    intro: "A sharper point of view for the next chapter of your sports story.",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1400&q=85",
    points: ["Audience and channel mapping", "Editorial voice and content systems", "Campaign narratives built to travel"],
  },
  "content-production": {
    title: "Content production",
    intro: "Visual work that carries the feeling of sport beyond the final whistle.",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1400&q=85",
    points: ["Matchday and athlete-led production", "Campaign films, stills, and social formats", "Post-production and creative direction"],
  },
  "audience-growth": {
    title: "Audience growth",
    intro: "Turn attention into a community that keeps showing up.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1400&q=85",
    points: ["Platform strategy and programming", "Distribution, testing, and optimization", "Community-first editorial calendars"],
  },
};

function Shell({ children }) {
  return <main><Header />{children}<Footer /></main>;
}

function Button({ children = "Start a conversation", href = "/contact" }) {
  return <Link href={href} className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 text-sm font-bold text-white transition hover:bg-ink">{children}<ArrowUpRight className="h-4 w-4" /></Link>;
}

export function Intro({ eyebrow, title, description }) {
  return <section className="bg-navy pb-20 pt-36 text-white lg:pb-28 lg:pt-44"><div className="wrap max-w-5xl"><p className="eyebrow">{eyebrow}</p><h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[.98] tracking-[-.05em] sm:text-7xl">{title}</h1>{description && <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65">{description}</p>}</div></section>;
}

export function AboutPage() {
  return <Shell><Intro eyebrow="About Northstar" title="Independent thinking for a fast-moving game." description="We work at the intersection of sports, culture, and media. Our job is to find the human story, give it a clear shape, and help it reach the people who will care." /><section className="wrap grid gap-12 py-20 lg:grid-cols-[.85fr_1.15fr] lg:py-28"><img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=85" alt="Empty stadium seats under daylight" className="h-full min-h-[360px] w-full object-cover" /><div><p className="eyebrow">Our point of view</p><h2 className="display-title mt-4">Sport is never just what happened.</h2><p className="mt-7 text-base leading-8 text-ink-soft">The best work creates a line between the result and the reason it matters. We bring editorial discipline, production craft, and a practical understanding of modern audiences to every brief.</p><div className="mt-10 grid gap-6 border-t border-line pt-7 sm:grid-cols-2"><div><p className="font-display text-xl font-bold">Curious</p><p className="mt-2 text-sm text-muted">We ask better questions before we make more content.</p></div><div><p className="font-display text-xl font-bold">Useful</p><p className="mt-2 text-sm text-muted">Every idea has a job to do and a way to move forward.</p></div></div><div className="mt-10"><Button>Meet us in the work</Button></div></div></section></Shell>;
}

export function ServicesPage() {
  return <Shell><Intro eyebrow="Services" title="A studio for the full sporting story." description="Choose the right starting point, or bring us a bigger question. We shape the team around the work." /><section className="wrap py-20 lg:py-28"><div className="grid gap-5 md:grid-cols-3">{Object.entries(serviceDetails).map(([slug, service], index) => <Link href={`/services/${slug}`} key={slug} className="group bg-white p-7 shadow-[0_12px_40px_rgba(19,34,56,.06)] transition hover:-translate-y-1"><p className="eyebrow">0{index + 1} / Northstar</p><h2 className="mt-20 font-display text-2xl font-bold">{service.title}</h2><p className="mt-4 text-sm leading-relaxed text-ink-soft">{service.intro}</p><span className="mt-8 inline-flex items-center text-sm font-bold text-coral">Explore service <ArrowUpRight className="ml-1 h-4 w-4" /></span></Link>)}</div></section></Shell>;
}

export function ServicePage({ slug }) {
  const service = serviceDetails[slug] || serviceDetails["editorial-strategy"];
  return <Shell><section className="bg-navy py-16 text-white lg:py-24"><div className="wrap grid items-end gap-12 lg:grid-cols-[1fr_.85fr]"><div><p className="eyebrow">Service / Northstar Sport</p><h1 className="mt-5 max-w-3xl font-display text-5xl font-bold leading-[.98] tracking-[-.05em] sm:text-7xl">{service.title}</h1><p className="mt-8 max-w-xl text-lg leading-relaxed text-white/65">{service.intro}</p></div><img src={service.image} alt="Sports scene" className="aspect-[4/3] w-full object-cover" /></div></section><section className="wrap grid gap-12 py-20 lg:grid-cols-[.8fr_1.2fr] lg:py-28"><div><p className="eyebrow">What you get</p><h2 className="display-title mt-4">Make a move with intent.</h2></div><div><p className="text-lg leading-8 text-ink-soft">We build the right level of thinking and making around your objective. The scope can be focused or broad; the standard stays high.</p><ul className="mt-10 divide-y divide-line border-y border-line">{service.points.map(point => <li key={point} className="flex items-center gap-3 py-5 font-semibold"><Check className="h-5 w-5 text-coral" />{point}</li>)}</ul><div className="mt-10"><Button>Discuss this service</Button></div></div></section></Shell>;
}

export function WhyPage() {
  const values = ["Clear thinking before busywork", "Craft that respects the audience", "A calm, senior team around the brief", "Honest feedback and useful momentum"];
  return <Shell><Intro eyebrow="Why Northstar" title="A partner with a point of view." description="You do not need more noise around your sport. You need a team that can see the signal, make a smart call, and follow through." /><section className="wrap grid gap-12 py-20 lg:grid-cols-2 lg:py-28"><div><p className="eyebrow">How we work</p><h2 className="display-title mt-4">Good collaboration feels like progress.</h2></div><div className="divide-y divide-line border-y border-line">{values.map((value, index) => <div className="flex gap-5 py-6" key={value}><span className="font-display text-sm text-coral">0{index + 1}</span><p className="font-display text-xl font-bold">{value}</p></div>)}</div></section></Shell>;
}

export function PortfolioPage() {
  const fallbackWork = ["A new language for matchday", "The long way to the finish line", "Inside the training ground", "A season in full colour"].map((title, index) => ({ title, slug: "final-seconds", category: "Case study", image: `https://images.unsplash.com/photo-${["1517466787929-bc90951d0974", "1530549387789-4c1017266635", "1526232761682-d26e03ac148e", "1461896836934-ffe607ba8211"][index]}?auto=format&fit=crop&w=1400&q=85`, alt: "Sports moment" }));
  const [work, setWork] = useState(fallbackWork);

  useLayoutEffect(() => {
    fetch("/api/posts/public").then(response => response.ok ? response.json() : []).then(managedWork => {
      if (managedWork.length) setWork(managedWork);
    }).catch(() => {});
  }, []);

  return <Shell><Intro eyebrow="Portfolio / Selected work" title="Built for the moments people remember." description="A selection of ways we have helped sports stories find their shape. The work is the proof; the context is the point." /><section className="wrap grid gap-5 py-20 sm:grid-cols-2 lg:py-28">{work.map((item, index) => <Link href={`/portfolio/${item.slug}`} key={`${item.slug}-${item.title}`} className={index === 0 ? "sm:col-span-2" : ""}><img src={item.image} alt={item.alt} className={`w-full object-cover ${index === 0 ? "aspect-[2/1]" : "aspect-[4/3]"}`} /><p className="eyebrow mt-5">{item.category} / 0{index + 1}</p><h2 className="mt-2 font-display text-2xl font-bold">{item.title}</h2></Link>)}</section></Shell>;
}

export function TestimonialsPage() {
  return <Shell><Intro eyebrow="Testimonials" title="The work speaks. The people behind it do too." description="We do not publish invented endorsements. This page is intentionally simple until real partners choose to share their words." /><section className="wrap py-20 lg:py-28"><div className="mx-auto max-w-3xl border-l-4 border-coral pl-7"><p className="font-display text-3xl font-bold leading-tight text-ink sm:text-5xl">“The strongest partnership starts with an honest question: what are we really trying to say?”</p><p className="mt-7 text-sm text-muted">Northstar principle, not a client quote.</p></div><div className="mt-20 text-center"><Button>Start your own story</Button></div></section></Shell>;
}

function FAQItem({ question, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (contentRef.current) {
      const nextHeight = contentRef.current.scrollHeight + 12;
      setHeight(nextHeight);
    }
  }, [question, isOpen]);

  return (
    <div className="group border-b border-line py-6">
      <button
        type="button"
        className="faq-summary flex w-full cursor-pointer items-center justify-between gap-4 text-left font-display text-xl font-bold"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className="faq-toggle relative flex h-8 w-8 shrink-0 items-center justify-center">
          <Plus className="faq-icon faq-plus h-5 w-5" />
          <Minus className="faq-icon faq-minus h-5 w-5" />
        </span>
      </button>

      <div
        className="faq-panel"
        style={{
          maxHeight: isOpen ? `${height}px` : "0px",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(-8px)"
        }}
      >
        <div ref={contentRef} className="faq-panel-inner">
          <p className="max-w-2xl pt-4 text-base leading-7 text-ink-soft">
            We shape the answer around the brief, the team already in place, and the outcome you need. A short conversation is the quickest way to make that specific.
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQPage() {
  const questions = ["What kind of sports organisations do you work with?", "Can you join an existing team?", "How does a project usually begin?", "Do you work outside sports?", "Where is Northstar based?"];
  const [openIndex, setOpenIndex] = useState(0);

  return <Shell><Intro eyebrow="FAQ" title="The useful answers, up front." description="A few practical notes before we meet. If your question is not here, send it through." /><section className="wrap max-w-4xl py-20 lg:py-28">{questions.map((question, index) => <FAQItem key={question} question={question} isOpen={openIndex === index} onToggle={() => setOpenIndex(current => current === index ? -1 : index)} />)}</section></Shell>;
}

export function ContactPage() {
  return <Shell><Intro eyebrow="Contact" title="Bring us the question behind the brief." description="Tell us what you are building, changing, or trying to understand. We will come back with a useful next step." /><section className="wrap grid gap-14 py-20 lg:grid-cols-[.7fr_1.3fr] lg:py-28"><div><p className="eyebrow">Get in touch</p><h2 className="display-title mt-4">Start with a useful conversation.</h2><div className="mt-10 flex flex-col gap-4 text-sm text-ink-soft"><p className="flex items-center gap-3"><Mail className="h-4 w-4 text-coral" /> Use the enquiry form and include a little context.</p><p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-coral" /> Built for sport, everywhere.</p></div></div><ContactForm /></section></Shell>;
}
