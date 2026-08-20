import PlaceholderImage from "./PlaceholderImage";
import { SoccerBallIcon, BasketballIcon, CarIcon, PaddleIcon } from "./icons";

const categories = [
  {
    label: ["Football"],
    icon: SoccerBallIcon,
    from: "#1f5c3a",
    to: "#0b2016",
    imageFirst: false,
  },
  {
    label: ["Basket", "Ball"],
    icon: BasketballIcon,
    from: "#b5591f",
    to: "#2c1508",
    imageFirst: true,
  },
  {
    label: ["Car Sport"],
    icon: CarIcon,
    from: "#3d4a5c",
    to: "#0f1216",
    imageFirst: false,
  },
  {
    label: ["Table", "Tennis"],
    icon: PaddleIcon,
    from: "#7a1f2b",
    to: "#100507",
    imageFirst: true,
  },
];

function LabelTile({ lines }) {
  return (
    <div className="h-40 md:h-44 rounded-xl bg-line flex items-center px-6">
      <p className="font-display uppercase leading-[0.95] text-2xl md:text-[28px]" style={{ color: "#9AA0A6" }}>
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
    </div>
  );
}

export default function CategoryGrid() {
  return (
    <section id="category" className="wrap py-14 md:py-20">
      <h2 className="text-lg font-semibold text-ink mb-6">Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {categories.map((cat) => (
          <div key={cat.label.join(" ")} className="flex flex-col gap-5">
            {cat.imageFirst ? (
              <>
                <PlaceholderImage
                  icon={cat.icon}
                  from={cat.from}
                  to={cat.to}
                  className="h-40 md:h-44 rounded-xl"
                  iconClassName="w-9 h-9"
                />
                <LabelTile lines={cat.label} />
              </>
            ) : (
              <>
                <LabelTile lines={cat.label} />
                <PlaceholderImage
                  icon={cat.icon}
                  from={cat.from}
                  to={cat.to}
                  className="h-40 md:h-44 rounded-xl"
                  iconClassName="w-9 h-9"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
