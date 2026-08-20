import PlaceholderImage from "./PlaceholderImage";

export default function OverlayCard({
  icon,
  from,
  to,
  tag,
  date,
  headline,
  description,
  className = "",
  headlineClassName = "text-xl md:text-2xl",
  children,
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <PlaceholderImage
        icon={icon}
        from={from}
        to={to}
        className="absolute inset-0 h-full w-full"
        iconClassName="w-16 h-16"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0) 75%)",
        }}
      />
      {tag && (
        <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-1.5 text-xs font-medium text-ink">
          {tag}
        </span>
      )}
      <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
        {date && <p className="text-xs text-white/70">{date}</p>}
        <h3
          className={`mt-2 font-display uppercase leading-tight text-white ${headlineClassName}`}
        >
          {headline}
        </h3>
        {description && (
          <p className="mt-3 max-w-lg text-sm text-white/80">{description}</p>
        )}
        {children}
      </div>
    </div>
  );
}
