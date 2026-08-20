import PlaceholderImage from "./PlaceholderImage";
import OverlayCard from "./OverlayCard";
import { TrophyIcon, GolfIcon, CricketIcon } from "./icons";

const miniNews = [
  {
    from: "#7a2333",
    to: "#170406",
    tag: "#Taekwondo · 12 July 2023",
    headline: "Baku 2023 Taekwondo Championships",
  },
  {
    from: "#2c5a3e",
    to: "#0a150e",
    tag: "#Golf · 20 July 2023",
    headline: "Open Championship Royal Liverpool Golf",
  },
  {
    from: "#7a4a23",
    to: "#170e04",
    tag: "#Cricket · 27 July 2023",
    headline: "Ireland Tour of England Test 2023",
  },
];

const clubs = [
  { rank: 1, name: "Manchester City", ini: "MC", color: "#6CABDD", gp: 38, w: 29, d: 6, l: 3, f: 99, a: 26, gd: 73 },
  { rank: 2, name: "Liverpool", ini: "LP", color: "#C8102E", gp: 38, w: 28, d: 8, l: 2, f: 94, a: 26, gd: 68 },
  { rank: 3, name: "Chelsea", ini: "CH", color: "#034694", gp: 38, w: 21, d: 11, l: 6, f: 76, a: 33, gd: 43 },
  { rank: 4, name: "Tottenham Hotspur", ini: "TH", color: "#132257", gp: 38, w: 22, d: 5, l: 11, f: 69, a: 40, gd: 29 },
  { rank: 5, name: "Arsenal", ini: "AR", color: "#EF0107", gp: 38, w: 22, d: 3, l: 13, f: 61, a: 48, gd: 13 },
  { rank: 6, name: "Manchester United", ini: "MU", color: "#DA291C", gp: 38, w: 16, d: 10, l: 12, f: 57, a: 57, gd: 0 },
];

export default function RecentRanking() {
  return (
    <section id="recent" className="wrap py-14 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-lg font-semibold text-ink mb-5">Recent News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            <OverlayCard
              icon={TrophyIcon}
              from="#8a5a1f"
              to="#160e04"
              date="Day 5 Highlights"
              headline="Baku 2023 World Taekwondo Championships"
              headlineClassName="text-base"
              className="sm:col-span-3 min-h-[280px]"
            />
            <div className="sm:col-span-2 rounded-xl bg-surface p-4 flex flex-col">
              <div className="flex flex-col gap-4">
                {miniNews.map((item) => (
                  <div key={item.headline} className="flex gap-3">
                    <PlaceholderImage
                      icon={item.headline.includes("Golf") ? GolfIcon : CricketIcon}
                      from={item.from}
                      to={item.to}
                      className="w-12 h-12 shrink-0 rounded-md"
                      iconClassName="w-5 h-5"
                    />
                    <div>
                      <p className="text-[11px] text-muted">{item.tag}</p>
                      <p className="mt-1 text-xs font-semibold text-ink leading-snug">
                        {item.headline}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 self-start rounded-md bg-line px-5 py-2 text-xs font-medium text-ink-soft hover:bg-ink hover:text-white transition-colors">
                More →
              </button>
            </div>
          </div>
        </div>

        <div id="ranking">
          <h2 className="text-lg font-semibold text-ink mb-5">Clubs Ranking</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs text-muted">
                  <th className="pb-3 pl-2 font-medium">Club</th>
                  <th className="pb-3 px-2 font-medium text-center">GP</th>
                  <th className="pb-3 px-2 font-medium text-center">W</th>
                  <th className="pb-3 px-2 font-medium text-center">D</th>
                  <th className="pb-3 px-2 font-medium text-center">L</th>
                  <th className="pb-3 px-2 font-medium text-center">F</th>
                  <th className="pb-3 px-2 font-medium text-center">A</th>
                  <th className="pb-3 px-2 font-medium text-center">GD</th>
                </tr>
              </thead>
              <tbody>
                {clubs.map((c) => (
                  <tr key={c.name} className="border-t border-line">
                    <td className="py-3 pl-2">
                      <div className="flex items-center gap-3">
                        <span className="text-muted w-4">{c.rank}</span>
                        <span
                          className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white shrink-0"
                          style={{ backgroundColor: c.color }}
                        >
                          {c.ini}
                        </span>
                        <span className="font-medium text-ink whitespace-nowrap">
                          {c.name}
                        </span>
                      </div>
                    </td>
                    <td className="text-center px-2 text-ink-soft">{c.gp}</td>
                    <td className="text-center px-2 text-ink-soft">{c.w}</td>
                    <td className="text-center px-2 text-ink-soft">{c.d}</td>
                    <td className="text-center px-2 text-ink-soft">{c.l}</td>
                    <td className="text-center px-2 text-ink-soft">{c.f}</td>
                    <td className="text-center px-2 text-ink-soft">{c.a}</td>
                    <td className="text-center px-2 text-ink-soft">{c.gd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
