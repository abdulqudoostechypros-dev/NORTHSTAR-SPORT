import OverlayCard from "./OverlayCard";
import Pagination from "./Pagination";
import { SoccerBallIcon } from "./icons";

export default function FeatureBanner() {
  return (
    <section className="wrap py-6 md:py-10">
      <OverlayCard
        icon={SoccerBallIcon}
        from="#2c1a12"
        to="#0a0503"
        tag="Football"
        date="Agence France-Presse · 04 June 2023"
        headline="Lionel Messi leaving Ligue 1 team Paris Saint-Germain, club confirms"
        description="The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals."
        headlineClassName="text-2xl md:text-4xl max-w-3xl"
        className="min-h-[440px]"
      />
      <div className="mt-6 flex justify-end">
        <Pagination current={1} total={4} />
      </div>
    </section>
  );
}
