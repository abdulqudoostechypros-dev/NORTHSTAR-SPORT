// Small hand-drawn line-icon set used only for placeholder imagery.
// Kept dependency-free and license-free (no external assets, no brand marks).

const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function SoccerBallIcon(props) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <circle cx="24" cy="24" r="15" />
      <path d="M24 13.5 32 19.5 29 29 19 29 16 19.5Z" />
      <path d="M24 13.5V9M32 19.5l4-3M29 29l2.5 4M19 29l-2.5 4M16 19.5l-4-3" />
    </svg>
  );
}

export function BasketballIcon(props) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <circle cx="24" cy="24" r="15" />
      <path d="M9 24h30M24 9v30" />
      <path d="M13 13c4 5 4 17 0 22M35 13c-4 5-4 17 0 22" />
    </svg>
  );
}

export function CarIcon(props) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M8 27l2.5-8A4 4 0 0 1 14.3 16h19.4a4 4 0 0 1 3.8 3l2.5 8" />
      <rect x="6" y="27" width="36" height="9" rx="2" />
      <circle cx="14" cy="36" r="3" />
      <circle cx="34" cy="36" r="3" />
      <path d="M8 31h5M35 31h5M17 21h14" />
    </svg>
  );
}

export function PaddleIcon(props) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <circle cx="20" cy="18" r="11" />
      <path d="M27 26 38 38" />
      <circle cx="35" cy="12" r="3.2" />
    </svg>
  );
}

export function BikeIcon(props) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <circle cx="11" cy="33" r="7" />
      <circle cx="37" cy="33" r="7" />
      <path d="M11 33 19 16h9l9 17M19 16l6 10h12M19 16l-4-6h-5" />
    </svg>
  );
}

export function GloveIcon(props) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M16 22V10.5a3 3 0 0 1 6 0V20M22 20v-8.5a3 3 0 0 1 6 0V20M28 20.5v-6a3 3 0 0 1 6 0V26" />
      <path d="M34 20a3 3 0 0 1 6 0v9c0 6-5 11-11 11h-4c-6 0-10-3-13-8l-3.5-6a2.6 2.6 0 0 1 4.4-2.7L15 27" />
    </svg>
  );
}

export function HorseIcon(props) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M10 38c1-6 3-9 3-14 0-8 6-15 15-15 3 0 4 2 3 4-4 1-6 3-6 6 4 0 8 2 9 6l2 10" />
      <path d="M28 9l5-3 1 5-4 3M14 24l-6-2M33 25v13M20 27v11" />
      <circle cx="30" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function RunnerIcon(props) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <circle cx="27" cy="9" r="3" />
      <path d="M22 16l5-3 5 5 7 2M27 13l-4 8 3 4-2 9M23 21l-9 3M23 25l6 4 2 9M14 24l3 11" />
    </svg>
  );
}

export function FootballAmericanIcon(props) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M10 24c0-8 6.5-14 14-14s14 6 14 14-6.5 14-14 14-14-6-14-14Z" />
      <path d="M15 19h18M15 29h18M20 15v5M28 15v5M20 28v5M28 28v5" />
    </svg>
  );
}

export function ShuttlecockIcon(props) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M24 26 34 40" />
      <path d="M24 26 12 15l6-2 4 8 4-9 6 1-3 9 8-2 1 6-9 3Z" />
      <circle cx="24" cy="26" r="2.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function GolfIcon(props) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M14 40V8l16 6-16 6" />
      <ellipse cx="14" cy="40" rx="9" ry="2.4" />
    </svg>
  );
}

export function CricketIcon(props) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M30 10 14 26" />
      <rect x="9" y="26" width="7" height="14" rx="2" transform="rotate(-45 9 26)" />
      <circle cx="34" cy="14" r="5" />
    </svg>
  );
}

export function CyclingHelmetIcon(props) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <circle cx="24" cy="18" r="10" />
      <path d="M14 18a10 10 0 0 1 20 0M14 20h20M18 27l-3 13M30 27l3 13M14 34h20" />
    </svg>
  );
}

export function TrophyIcon(props) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M16 8h16v8a8 8 0 0 1-16 0Z" />
      <path d="M16 10h-5v3a6 6 0 0 0 5 6M32 10h5v3a6 6 0 0 1-5 6" />
      <path d="M24 24v6M18 40h12M20 34h8l1.5 6h-11Z" />
    </svg>
  );
}

export function SocialFacebook(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 8h-2a2 2 0 0 0-2 2v10M9 13h4" />
      <rect x="4" y="4" width="16" height="16" rx="3" />
    </svg>
  );
}

export function SocialInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="16.2" cy="7.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SocialTwitter(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 7c-.7.4-1.4.6-2.2.7a3.6 3.6 0 0 0 1.6-2 7.2 7.2 0 0 1-2.3.9 3.6 3.6 0 0 0-6.2 3.3A10.2 10.2 0 0 1 3.6 6a3.6 3.6 0 0 0 1.1 4.8c-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.3 3.3 3 3.6-.5.2-1.1.2-1.7.1a3.6 3.6 0 0 0 3.4 2.5A7.3 7.3 0 0 1 2.9 18a10.3 10.3 0 0 0 5.5 1.6c6.6 0 10.2-5.5 10.2-10.2v-.5A7.3 7.3 0 0 0 20 7Z" />
    </svg>
  );
}

export function PersonIcon(props) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <circle cx="24" cy="16" r="7" />
      <path d="M10 40c1.5-9 7-13 14-13s12.5 4 14 13" />
    </svg>
  );
}
