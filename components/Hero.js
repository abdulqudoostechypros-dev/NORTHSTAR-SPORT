import { RunnerIcon, CarIcon } from "./icons";
import PlaceholderImage from "./PlaceholderImage";
import AthleteSilhouette from "./AthleteSilhouette";

function TodayCard({ icon, from, to, tag, headline }) {
  return (
    <div className="flex gap-4 items-stretch">
      <PlaceholderImage
        icon={icon}
        from={from}
        to={to}
        className="w-24 h-24 shrink-0 rounded-xl"
        iconClassName="w-8 h-8"
      />
      <div className="py-1">
        <p className="text-xs text-muted">{tag}</p>
        <p className="mt-1 text-sm font-semibold text-ink leading-snug">
          {headline}
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      {/* decorative rings */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full border-[40px] border-white/70" />
      <div className="pointer-events-none absolute -left-10 top-24 h-52 w-52 rounded-full bg-white/50" />

      <div className="wrap relative py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="relative">
              <h1 className="font-display uppercase leading-[0.92] text-[13vw] sm:text-6xl md:text-7xl tracking-tight">
                <span className="block text-ink">Top</span>
                <span className="block text-ink">Scorer To</span>
                <span className="block text-line" style={{ color: "#C7C9CE" }}>
                  The Final
                </span>
                <span className="block" style={{ color: "#C7C9CE" }}>
                  Match
                </span>
              </h1>

              <AthleteSilhouette className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[300px] xl:w-[360px] drop-shadow-xl" />
              <AthleteSilhouette className="lg:hidden mt-6 w-48 mx-auto" />
            </div>

            <p className="mt-8 max-w-md text-sm text-ink-soft leading-relaxed">
              The EuroLeague Finals Top Scorer is the individual award for the
              player that gained the highest points in the EuroLeague Finals.
            </p>

            <button className="mt-7 rounded-md bg-ink px-7 py-3.5 text-xs font-semibold tracking-widest text-white uppercase hover:bg-ink-soft transition-colors">
              Continue Reading
            </button>
          </div>

          <div className="lg:col-span-4">
            <span className="inline-block rounded-full bg-line px-4 py-1.5 text-xs text-muted">
              Today
            </span>
            <div className="mt-5 flex flex-col gap-5">
              <TodayCard
                icon={RunnerIcon}
                from="#5b5e64"
                to="#1c1d20"
                tag="Race98 · 03 June 2023"
                headline="Ethiopian runners took the top four spots."
              />
              <TodayCard
                icon={CarIcon}
                from="#8a5a3a"
                to="#241a12"
                tag="INDYCAR · 03 June 2023"
                headline="IndyCar Detroit: Dixon quickest in second practice."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
