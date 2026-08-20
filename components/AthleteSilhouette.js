export default function AthleteSilhouette({ className = "" }) {
  return (
    <svg
      viewBox="0 0 400 520"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of a basketball player jumping to dunk"
    >
      <defs>
        <linearGradient id="athleteFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3a3c40" />
          <stop offset="100%" stopColor="#101114" />
        </linearGradient>
      </defs>

      <g fill="url(#athleteFill)">
        {/* trailing leg */}
        <rect x="0" y="0" width="34" height="175" rx="17" transform="translate(150,300) rotate(-58)" />
        {/* front bent leg */}
        <rect x="0" y="0" width="36" height="150" rx="18" transform="translate(178,330) rotate(48)" />
        {/* torso */}
        <rect x="0" y="0" width="86" height="160" rx="40" transform="translate(148,175) rotate(-8)" />
        {/* head */}
        <circle cx="207" cy="95" r="34" />
        {/* trailing arm */}
        <rect x="0" y="0" width="26" height="140" rx="13" transform="translate(150,190) rotate(-140)" />
        {/* reaching arm */}
        <rect x="0" y="0" width="28" height="165" rx="14" transform="translate(235,165) rotate(35)" />
      </g>

      {/* ball */}
      <g transform="translate(330,255)">
        <circle r="34" fill="url(#athleteFill)" />
        <g stroke="#ffffff" strokeOpacity="0.35" strokeWidth="2" fill="none">
          <path d="M-34 0H34M0 -34V34" />
          <path d="M-24 -24C-10 -10 10 -10 24 -24M-24 24C-10 10 10 10 24 24" />
        </g>
      </g>
    </svg>
  );
}
