export default function PlaceholderImage({
  icon: Icon,
  from = "#3A3D42",
  to = "#17181B",
  className = "",
  iconClassName = "w-10 h-10",
  grayscale = false,
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, ${from}, ${to})`,
        filter: grayscale ? "grayscale(1)" : undefined,
      }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)",
        }}
      />
      {Icon ? (
        <Icon className={`relative text-white/70 ${iconClassName}`} />
      ) : null}
    </div>
  );
}
