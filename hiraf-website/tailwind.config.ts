import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // The ONLY three brand colors allowed across the site.
        teal: {
          DEFAULT: "#2E4F4F", // التيل الداكن — primary
          dark: "#23403F",
          deep: "#1A3231",
        },
        gold: {
          DEFAULT: "#D88935", // الذهبي — secondary
          soft: "#E0A05C",
        },
        beige: {
          DEFAULT: "#FCF6F6", // البيج الفاتح — background
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans Arabic"', '"Tajawal"', "system-ui", "sans-serif"],
        heading: ['"IBM Plex Sans Arabic"', '"Cairo"', "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-teal": "linear-gradient(135deg, #2E4F4F 0%, #D88935 100%)",
        "teal-gold": "linear-gradient(135deg, #D88935 0%, #2E4F4F 100%)",
      },
      boxShadow: {
        gold: "0 10px 40px -10px rgba(216, 137, 53, 0.45)",
        "gold-lg": "0 20px 60px -15px rgba(216, 137, 53, 0.55)",
        soft: "0 12px 40px -12px rgba(46, 79, 79, 0.25)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(20px, -30px) scale(1.05)" },
        },
        "float-slower": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-25px, 20px) scale(1.08)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "float-slow": "float-slow 14s ease-in-out infinite",
        "float-slower": "float-slower 18s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
