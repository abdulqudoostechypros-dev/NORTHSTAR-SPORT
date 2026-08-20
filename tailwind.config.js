/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#132238",
        "ink-soft": "#536176",
        muted: "#718096",
        line: "#dce4ed",
        surface: "#edf3f8",
        coral: "#f06449",
        aqua: "#3cb7a5",
        navy: "#0d1b2e",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        wrap: "1280px",
      },
    },
  },
  plugins: [],
};
