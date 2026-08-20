import Header from "./Header";
import Footer from "./Footer";
import GalleryRail from "./GalleryRail";
import FeaturedVideo from "./FeaturedVideo";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Minus,
  Plus,
  Compass,
  Eye,
  Film,
  Layers3,
  MessageCircle,
  Play,
  Sparkles,
  Target,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Compass,
    title: "Editorial strategy",
    description: "Find the angle, audience, and rhythm that gives a sports story a longer life.",
    benefit: "Sharper stories",
    href: "/services/editorial-strategy",
  },
  {
    number: "02",
    icon: Film,
    title: "Content production",
    description: "From matchday capture to campaign worlds, make work with real energy.",
    benefit: "Work people feel",
    href: "/services/content-production",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Audience growth",
    description: "Build a following that stays for the full season, not just the highlight reel.",
    benefit: "A lasting audience",
    href: "/services/audience-growth",
  },
];

const process = [
  ["01", "Contact us", "Bring the question behind the brief."],
  ["02", "Find the angle", "We listen, challenge, and define the opportunity."],
  ["03", "Make the plan", "The right team and a clear route forward."],
  ["04", "Make it move", "We create, refine, and put the work into the world."],
];

const faqs = [
  ["What kind of sports organisations do you work with?", "We work with sports organisations, brands, publishers, and teams that want clearer thinking and more meaningful creative work."],
  ["Can you join an existing team?", "Yes. We can lead a focused project or add strategy, creative, and production capacity to a team already in motion."],
  ["How does a project usually begin?", "It starts with a short conversation about the goal, the audience, and what is currently getting in the way. From there, we recommend a useful next step."],
  ["Do you work outside sports?", "Sport is our focus because that is where our point of view is strongest. We are open to adjacent culture and media briefs when the fit is clear."],
  ["Where is Northstar based?", "Northstar is built to work across markets and time zones. Email is the best first point of contact."],
];

function LinkButton({ children, href = "/contact", secondary = false }) {
  return <a href={href} className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition ${secondary ? "border border-ink/20 text-ink hover:border-coral hover:text-coral" : "bg-coral text-white hover:bg-white hover:text-ink"}`}>{children}<ArrowUpRight className="h-4 w-4" /></a>;
}

function SectionIntro({ eyebrow, title, description, href, linkLabel }) {
  return <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div className="max-w-2xl"><p className="eyebrow">{eyebrow}</p><h2 className="display-title mt-4">{title}</h2>{description && <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">{description}</p>}</div>{href && <a href={href} className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-coral transition hover:text-ink">{linkLabel}<ArrowUpRight className="h-4 w-4" /></a>}</div>;
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />

      <section className="relative flex min-h-[760px] items-end overflow-hidden bg-navy text-white sm:min-h-[780px] lg:min-h-[850px]">
        <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1800&q=82" alt="Runner moving through a stadium at dusk" className="absolute inset-0 h-full w-full object-cover object-center opacity-35" fetchPriority="high" />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,#0d1b2e_8%,rgba(13,27,46,.93)_35%,rgba(13,27,46,.48)_72%,rgba(13,27,46,.7))]" />
        <div className="absolute -right-40 top-32 h-[520px] w-[520px] rounded-full border border-aqua/20" />
        <div className="absolute -right-20 top-52 h-[360px] w-[360px] rounded-full border border-coral/20" />
        <div className="wrap relative grid w-full items-end gap-12 pb-20 pt-40 lg:grid-cols-[1.05fr_.95fr] lg:pb-28">
          <div className="reveal max-w-3xl">
            <p className="eyebrow">Independent sports intelligence + creative</p>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[.96] tracking-[-.06em] sm:text-7xl lg:text-[6.5rem]">Make your next<br /><span className="text-coral">move matter.</span></h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/72 sm:text-xl">Northstar helps sports organisations, brands, and publishers turn complex moments into clear stories, magnetic content, and lasting audience value.</p>
            <div className="mt-9 flex flex-wrap gap-3"><LinkButton>Talk to Northstar</LinkButton><a href="#journey" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10">See how we work <ArrowDown className="h-4 w-4" /></a></div>
            <div className="mt-12 flex items-center gap-3 text-sm text-white/60"><span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25"><Play className="h-3 w-3 fill-current" /></span> Strategy, story, and momentum for the modern game.</div>
          </div>
          <div className="hero-signal relative mx-auto hidden h-[440px] w-full max-w-[430px] justify-self-end lg:block" aria-label="Northstar live signal monitor">
            <div className="absolute inset-7 overflow-hidden border border-white/20 bg-navy/50 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80" alt="Runner moving through a stadium" className="h-full w-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(13,27,46,.25),rgba(13,27,46,.86))]" />
              <div className="hero-scan absolute inset-x-0 top-0 h-px bg-aqua shadow-[0_0_18px_4px_rgba(60,183,165,.65)]" />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[.2em] text-white/60"><span>Northstar signal</span><span className="flex items-center gap-2 text-aqua"><i className="h-1.5 w-1.5 rounded-full bg-aqua shadow-[0_0_10px_3px_rgba(60,183,165,.7)]" /> Live brief</span></div>
                <div><p className="text-xs font-bold uppercase tracking-[.18em] text-coral">Signal / 01</p><p className="mt-3 max-w-[230px] font-display text-3xl font-bold leading-tight">Find the moment worth moving.</p></div>
              </div>
            </div>
            <div className="hero-orbit absolute right-0 top-8 flex h-24 w-24 items-center justify-center rounded-full border border-aqua/50 bg-navy/80 shadow-xl"><div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-xs font-bold text-aqua">N<span className="text-white">/</span>S</div></div>
            <div className="absolute -bottom-3 left-0 w-48 border border-white/15 bg-navy/90 p-4 shadow-xl"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-white/45">Current focus</p><p className="mt-2 font-display text-sm font-bold text-white">Strategy → Story → Reach</p><div className="mt-3 h-1 overflow-hidden bg-white/15"><div className="hero-progress h-full w-2/3 bg-coral" /></div></div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white" aria-label="Northstar strengths">
        <div className="wrap grid divide-y divide-line py-2 sm:grid-cols-3 sm:divide-x sm:divide-y-0"><div className="flex items-center gap-4 py-5 sm:px-6 sm:first:pl-0"><Sparkles className="h-5 w-5 text-coral" /><div><p className="font-display text-sm font-bold">Independent by design</p><p className="mt-1 text-xs text-muted">Clear thinking, no house style.</p></div></div><div className="flex items-center gap-4 py-5 sm:px-6"><Target className="h-5 w-5 text-aqua" /><div><p className="font-display text-sm font-bold">Built around the brief</p><p className="mt-1 text-xs text-muted">The right team for the real question.</p></div></div><div className="flex items-center gap-4 py-5 sm:px-6 sm:last:pr-0"><Eye className="h-5 w-5 text-coral" /><div><p className="font-display text-sm font-bold">Audience-aware work</p><p className="mt-1 text-xs text-muted">Made to be useful beyond launch day.</p></div></div></div>
      </section>

      <section className="wrap grid gap-12 py-20 lg:grid-cols-[.9fr_1.1fr] lg:py-28">
        <div className="relative"><img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80" alt="Stadium seats facing a bright sports field" className="aspect-[4/5] w-full object-cover" loading="lazy" /><div className="absolute -bottom-5 -right-4 bg-aqua px-5 py-4 font-display text-sm font-bold text-navy sm:-right-8">Sport is never just what happened.</div></div>
        <div className="self-center"><p className="eyebrow">A better starting point</p><h2 className="display-title mt-4">The story behind the score is where the value lives.</h2><p className="mt-7 max-w-xl text-base leading-8 text-ink-soft">We work at the intersection of sports, culture, and media. Our job is to find the human truth, give it a clear shape, and help it reach the people who will care.</p><div className="mt-9 grid gap-5 border-t border-line pt-6 sm:grid-cols-2"><div><p className="font-display text-lg font-bold">Curious</p><p className="mt-2 text-sm leading-relaxed text-muted">We ask better questions before we make more content.</p></div><div><p className="font-display text-lg font-bold">Useful</p><p className="mt-2 text-sm leading-relaxed text-muted">Every idea has a job to do and a way to move forward.</p></div></div><div className="mt-9"><LinkButton href="/about" secondary>About Northstar</LinkButton></div></div>
      </section>

      <section className="bg-surface py-20 lg:py-28" id="services"><div className="wrap"><SectionIntro eyebrow="Services" title="A studio for the full sporting story." description="Choose the right starting point, or bring us a bigger question. We shape the team around the work." href="/services" linkLabel="View all services" /><div className="mt-12 grid gap-5 md:grid-cols-3">{services.map(({ number: number, icon: Icon, title, description, benefit, href }) => <a href={href} key={title} className="group flex min-h-[390px] flex-col bg-white p-7 shadow-[0_12px_40px_rgba(19,34,56,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(19,34,56,.12)]"><div className="flex items-start justify-between"><span className="font-display text-sm font-bold text-coral">{number}</span><Icon className="h-7 w-7 text-ink transition group-hover:text-coral" /></div><div className="mt-auto"><p className="text-xs font-bold uppercase tracking-[.14em] text-aqua">{benefit}</p><h3 className="mt-3 font-display text-2xl font-bold">{title}</h3><p className="mt-4 text-sm leading-relaxed text-ink-soft">{description}</p><span className="mt-7 inline-flex items-center text-sm font-bold text-ink group-hover:text-coral">Learn more <ArrowUpRight className="ml-1 h-4 w-4" /></span></div></a>)}</div></div></section>

      <section className="wrap py-20 lg:py-28"><div className="grid overflow-hidden bg-navy text-white lg:grid-cols-[1fr_1fr]"><FeaturedVideo /><div className="p-8 sm:p-12 lg:p-16"><p className="eyebrow">Core offering / Content production</p><h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-[-.04em] sm:text-5xl">Make the feeling travel.</h2><p className="mt-6 text-base leading-relaxed text-white/68">A strong sports story should move at the speed of the moment without losing the detail that makes it matter. We bring strategy, direction, and production craft together.</p><ul className="mt-8 space-y-4 text-sm text-white/80"><li className="flex items-center gap-3"><Check className="h-4 w-4 text-aqua" /> Matchday and athlete-led formats</li><li className="flex items-center gap-3"><Check className="h-4 w-4 text-aqua" /> Campaign films, stills, and social assets</li><li className="flex items-center gap-3"><Check className="h-4 w-4 text-aqua" /> A clear creative system for the season</li></ul><div className="mt-9"><LinkButton href="/services/content-production">Explore content production</LinkButton></div></div></div></section>

      <section className="bg-white py-20 lg:py-28" id="why-choose-us"><div className="wrap"><SectionIntro eyebrow="Why choose us" title="A partner with a point of view." description="You do not need more noise around your sport. You need a team that can see the signal, make a smart call, and follow through." href="/why-choose-us" linkLabel="Our approach" /><div className="mt-12 grid gap-px overflow-hidden bg-line sm:grid-cols-2 lg:grid-cols-4">{[[Compass, "Clear thinking", "A considered point of view before busywork."], [Layers3, "Built around you", "The right level of team for the real brief."], [MessageCircle, "Open dialogue", "Honest feedback keeps good work moving."], [Target, "Attention to detail", "Craft that respects the audience and the moment."]].map(([Icon, title, copy]) => <div className="bg-white p-7" key={title}><Icon className="h-7 w-7 text-coral" /><h3 className="mt-12 font-display text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-ink-soft">{copy}</p></div>)}</div></div></section>

      <section className="wrap py-20 lg:py-28" id="journey"><SectionIntro eyebrow="How it works" title="A clear route from question to momentum." description="The work stays collaborative and practical from the first conversation to the final handoff." /><div className="relative mt-14 grid gap-8 md:grid-cols-4 md:gap-0">{process.map(([number, title, copy], index) => <div className="relative pr-5" key={number}><div className="mb-6 flex items-center gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-white">{number}</span>{index < process.length - 1 && <span className="hidden h-px w-full bg-line md:block" />}</div><h3 className="font-display text-xl font-bold">{title}</h3><p className="mt-3 max-w-[210px] text-sm leading-relaxed text-ink-soft">{copy}</p></div>)}</div><div className="mt-10"><LinkButton href="/contact" secondary>Start with a conversation</LinkButton></div></section>

      <section className="bg-surface py-20 lg:py-28" id="portfolio"><div className="wrap"><SectionIntro eyebrow="Visual showcase" title="Built for the moments people remember." description="A visual reference for the energy, focus, and human detail we bring to sports work. These images are illustrative, not presented as Northstar client projects." href="/portfolio" linkLabel="View full portfolio" /><GalleryRail /></div></section>

      <section className="wrap grid gap-12 py-20 lg:grid-cols-2 lg:py-28"><div className="self-center"><p className="eyebrow">Customer outcomes</p><h2 className="display-title mt-4">More clarity. More connection. More room to move.</h2><p className="mt-7 max-w-xl text-base leading-8 text-ink-soft">The outcome is not content for content's sake. It is a stronger point of view, a more useful conversation with your audience, and work your team can keep building on.</p><div className="mt-9 grid gap-5 sm:grid-cols-2"><div className="border-l-2 border-coral pl-4"><p className="font-display text-lg font-bold">Know what to say</p><p className="mt-2 text-sm leading-relaxed text-muted">A story with a shape people can follow.</p></div><div className="border-l-2 border-aqua pl-4"><p className="font-display text-lg font-bold">Know where to take it</p><p className="mt-2 text-sm leading-relaxed text-muted">A plan that gives the next move somewhere to land.</p></div></div></div><div className="relative"><img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=82" alt="Team preparing together before a sporting event" className="aspect-[4/3] w-full object-cover" loading="lazy" /><div className="absolute -bottom-4 -left-4 bg-coral p-5 font-display text-sm font-bold text-white sm:-left-7">The useful kind of momentum.</div></div></section>

      <section className="bg-white py-20 lg:py-28" id="faq"><div className="wrap grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">FAQ</p><h2 className="display-title mt-4">Useful answers, up front.</h2><p className="mt-6 text-base leading-relaxed text-ink-soft">Still have a question? We are happy to make the next step specific.</p><a href="/faq" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-coral">View all FAQs <ArrowRight className="h-4 w-4" /></a></div><div className="divide-y divide-line border-y border-line">{faqs.map(([question, answer], index) => <details key={question} className="group py-5" open={index === 0}><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-bold">{question}<Plus className="h-5 w-5 shrink-0 group-open:hidden" /><Minus className="hidden h-5 w-5 shrink-0 group-open:block" /></summary><div className="faq-answer"><p className="max-w-2xl pt-4 text-base leading-7 text-ink-soft">{answer}</p></div></details>)}</div></div></section>

      <section className="relative overflow-hidden bg-coral py-20 text-white lg:py-28"><div className="absolute -right-24 -top-36 h-[520px] w-[520px] rounded-full border border-white/20" /><div className="wrap relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end"><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-white/70">Ready to move?</p><h2 className="mt-5 font-display text-5xl font-bold leading-[.98] tracking-[-.05em] sm:text-7xl">Bring us the question behind the brief.</h2><p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80">Tell us what you are building, changing, or trying to understand. We will come back with a useful next step.</p></div><div className="flex shrink-0 flex-wrap gap-3"><a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-ink transition hover:bg-ink hover:text-white">Start a conversation <ArrowUpRight className="h-4 w-4" /></a><a href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">View contact options</a></div></div></section>

      <Footer />
    </main>
  );
}
