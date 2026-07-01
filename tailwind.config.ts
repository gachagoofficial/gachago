import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        drawzy: {
          black: "#070707",
          charcoal: "#101010",
          panel: "#161616",
          soft: "#1d1d1d",
          orange: "#F46A1F",
          glow: "#ff8a3d",
          gold: "#c8a96b",
          mute: "#a0a0a0",
        },
      },
      fontFamily: {
        sans: ["Inter", "Noto Sans KR", "Pretendard", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
      },
      boxShadow: {
        orange: "0 0 60px rgba(244, 106, 31, .24)",
        luxury: "0 26px 90px rgba(0, 0, 0, .58)",
      },
    },
  },
  plugins: [],
};
export default config;
