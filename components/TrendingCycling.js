import PlaceholderImage from "./PlaceholderImage";
import OverlayCard from "./OverlayCard";
import { HorseIcon, BikeIcon, GloveIcon, CyclingHelmetIcon } from "./icons";

const items = [
  {
    icon: HorseIcon,
    from: "#4a6b3a",
    to: "#101b0a",
    tag: "Race98 · 03 June 2023",
    headline: "6-Year-Old Horse Dies at Belmont Park After Race Injury",
    description:
      "NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week's...",
  },
  {
    icon: BikeIcon,
    from: "#2c5570",
    to: "#0a1620",
    tag: "Jony.Ls · 03 June 2023",
    headline: "Savilia Blunk Embraces Longer Season With World Cup",
    description:
      "Last year, Savilia Blunk took a more conservative approach to her first season as an Elite Class athlete, skipping some...",
  },
  {
    icon: GloveIcon,
    from: "#6b1f2e",
    to: "#160406",
    tag: "King.F · 03 June 2023",
    headline: "Ryan Garcia is fighting again, this time on social media",
    description:
      "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on...",
  },
];

export default function TrendingCycling() {
  return (
    <section id="trending" className="wrap py-6 md:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-xl bg-surface p-6 md:p-7">
          <h2 className="text-lg font-semibold text-ink mb-5">Trending News</h2>
          <div className="flex flex-col gap-5">
            {items.map((item) => (
              <div key={item.headline} className="flex gap-4">
                <PlaceholderImage
                  icon={item.icon}
                  from={item.from}
                  to={item.to}
                  className="w-20 h-16 shrink-0 rounded-lg"
                  iconClassName="w-6 h-6"
                />
                <div>
                  <p className="text-xs text-muted">{item.tag}</p>
                  <p className="mt-1 text-sm font-semibold text-ink leading-snug">
                    {item.headline}
                  </p>
                  <p className="mt-1 text-xs text-muted line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <OverlayCard
          icon={CyclingHelmetIcon}
          from="#4a4d52"
          to="#111214"
          tag="Cycling"
          date="Debits · 03 June 2023"
          headline="Discover the member benefits of USA Cycling!"
          className="min-h-[380px] lg:min-h-full"
        />
      </div>
    </section>
  );
}
