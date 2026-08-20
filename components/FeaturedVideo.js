import { Play } from "lucide-react";

export default function FeaturedVideo() {
  return (
    <div className="relative h-full min-h-[360px] self-stretch overflow-hidden bg-ink sm:min-h-[480px] lg:min-h-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=82"
        aria-label="Runner moving through a stadium"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-80 transition duration-700 hover:scale-[1.02]"
      >
        <source src="/videos/featured-sports.mp4" type="video/mp4" />
        Your browser does not support the video element.
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,27,46,.1)_30%,rgba(13,27,46,.86)_100%)]" />
      <div className="absolute left-6 top-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-white/75"><span className="h-1.5 w-1.5 rounded-full bg-coral shadow-[0_0_12px_3px_rgba(240,100,73,.6)]" /> Motion study / 01</div>
      <div className="absolute bottom-7 left-7 flex items-center gap-3 text-sm font-bold">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coral shadow-lg">
          <Play className="h-4 w-4 fill-current" />
        </span>
        <span>The featured solution</span>
      </div>
    </div>
  );
}
