import PlaceholderImage from "./PlaceholderImage";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BasketballIcon, ShuttlecockIcon } from "./icons";

function HockeyIcon(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M10 40 30 8c2-3 6-2 6 1 0 1-.4 2-1 3L20 40" />
      <ellipse cx="34" cy="30" rx="7" ry="4" transform="rotate(-30 34 30)" />
    </svg>
  );
}

const articles = [
  {
    tag: "Basketball",
    icon: BasketballIcon,
    from: "#3a3d42",
    to: "#0e0f11",
    author: "Jake Will.",
    initials: "JW",
    color: "#4B5563",
    date: "04 June 2023",
    headline: "5 Exercises Basketball Players Should Be Using To Develop Strength",
    description:
      "This article was written by Jake Wilholte from Healthlisted.com. Strength in basketball isn't all about a massive body mass or ripped muscles.",
  },
  {
    tag: "Hockey",
    icon: HockeyIcon,
    from: "#1f4a6b",
    to: "#060f16",
    author: "Foxi.zacon",
    initials: "FZ",
    color: "#2563EB",
    date: "03 June 2023",
    headline: "Golden Knights out to fulfill owner's quest to win Stanley Cup in 6th year",
    description:
      "The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday.",
  },
  {
    tag: "Badminton",
    icon: ShuttlecockIcon,
    from: "#3a3d42",
    to: "#0e0f11",
    author: "Bong Lozada",
    initials: "BL",
    color: "#0EA5A5",
    date: "01 June 2023",
    headline: "'Outdoor' Badminton Gets Support From Local Federation",
    description:
      "The Badminton World Federation is developing Air Badminton and the country's governing body, Philippine Badminton Association.",
  },
];

export default function SportsArticles() {
  return (
    <section id="articles" className="wrap py-6 md:py-10 pb-20">
      <h2 className="text-lg font-semibold text-ink mb-6">Sports Article</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((a) => (
          <article key={a.headline}>
            <div className="relative">
              <PlaceholderImage
                icon={a.icon}
                from={a.from}
                to={a.to}
                className="h-52 rounded-xl"
                iconClassName="w-10 h-10"
              />
              <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-ink">
                {a.tag}
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold text-white"
                style={{ backgroundColor: a.color }}
              >
                {a.initials}
              </span>
              <span className="text-sm text-ink-soft">{a.author}</span>
            </div>
            <p className="mt-2 text-xs text-muted">{a.date}</p>
            <h3 className="mt-2 text-base font-semibold text-ink leading-snug">
              {a.headline}
            </h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              {a.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 flex gap-3">
        <button
          aria-label="Previous"
          className="flex h-10 w-10 items-center justify-center rounded-md bg-line text-muted hover:bg-ink/10 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          aria-label="Next"
          className="flex h-10 w-10 items-center justify-center rounded-md bg-ink text-white hover:bg-ink-soft transition-colors"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
