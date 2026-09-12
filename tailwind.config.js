/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0a",
          soft: "#131313",
          raised: "#1c1c1c",
        },
        blade: "#e8e6df",
        crimson: {
          DEFAULT: "#a1272e",
          bright: "#c8353d",
          deep: "#6d1a1f",
        },
        gold: {
          DEFAULT: "#b8933f",
          soft: "#8a6f34",
        },
        mist: "#6b6a63",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        wider2: "0.18em",
      },
    },
  },
  plugins: [],
};
