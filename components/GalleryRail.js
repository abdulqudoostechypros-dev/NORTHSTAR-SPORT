"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const galleryItems = [
  ["final-seconds", "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=82", "Runner crossing a finish line", "The final seconds", "Focus, pace, and the feeling of getting there."],
  ["before-the-whistle", "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1200&q=82", "Athlete preparing for competition", "Before the whistle", "The details that build a bigger sporting story."],
  ["find-your-rhythm", "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=82", "Runner in motion on a track", "Find your rhythm", "A visual language with energy built into every frame."],
  ["made-for-the-moment", "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=82", "Athlete under stadium lights", "Made for the moment", "Atmosphere, attention, and a reason to keep watching."],
  ["keep-it-moving", "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=82", "Runner moving through a stadium", "Keep it moving", "Stories designed to travel beyond the matchday."],
];

export default function GalleryRail() {
  const railRef = useRef(null);

  function move(direction) {
    railRef.current?.scrollBy({ left: direction * 420, behavior: "smooth" });
  }

  return (
    <div className="relative mt-12">
      <div ref={railRef} className="gallery-rail flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 pr-[12vw] scrollbar-none" aria-label="Illustrative sports gallery">
        {galleryItems.map(([slug, src, alt, title, description], index) => (
          <figure key={src} className={`group relative shrink-0 snap-start overflow-hidden ${index === 0 ? "w-[78vw] sm:w-[58vw] lg:w-[42vw]" : "w-[72vw] sm:w-[42vw] lg:w-[28vw]"}`}>
            <a href={`/portfolio/${slug}`} aria-label={`Open post: ${title}`}><img src={src} alt={alt} className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" /></a>
            {index > 0 && <div className="bg-white px-5 py-5">
              <p className="text-xs font-bold uppercase tracking-[.16em] text-coral">Visual direction / 0{index + 1}</p>
              <h3 className="mt-2 font-display text-xl font-bold text-ink"><a href={`/portfolio/${slug}`} className="transition hover:text-coral">{title}</a></h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
              <a href={`/portfolio/${slug}`} className="mt-4 inline-flex items-center text-sm font-bold text-coral">Read post <ArrowRight className="ml-1 h-4 w-4" /></a>
            </div>}
          </figure>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between gap-5">
        <p className="text-xs text-muted">Drag to explore the gallery</p>
        <div className="flex gap-2">
          <button type="button" onClick={() => move(-1)} aria-label="Scroll gallery left" className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition hover:border-coral hover:text-coral"><ArrowLeft className="h-4 w-4" /></button>
          <button type="button" onClick={() => move(1)} aria-label="Scroll gallery right" className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white transition hover:bg-coral"><ArrowRight className="h-4 w-4" /></button>
        </div>
      </div>
    </div>
  );
}
