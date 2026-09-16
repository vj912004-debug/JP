import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2f7a3e",
          light: "#c8e86a",
          dark: "#1f5a2c",
        },
        lime: {
          DEFAULT: "#c8e86a",
          dark: "#b3d44f",
        },
        navy: {
          DEFAULT: "#1e3d28",
          mid: "#2f7a3e",
          deep: "#14261a",
        },
        peacock: "#5a9a4a",
        steel: {
          DEFAULT: "#5c6b62",
          light: "#8a968e",
        },
        line: "#e3e8df",
        blue: {
          950: "#14261a",
          900: "#1e3d28",
          800: "#2f5a38",
          700: "#2f7a3e",
          600: "#3d8b4a",
          100: "#e4f0dc",
          50: "#f0f6ea",
        },
        orange: {
          900: "#1f5a2c",
          800: "#2f7a3e",
          700: "#3d8b4a",
          600: "#2f7a3e",
          500: "#4c9a58",
          300: "#c8e86a",
          100: "#eef6e4",
        },
        dark: {
          950: "#14261a",
          900: "#1a2e20",
          800: "#1e3d28",
          700: "#2f5a38",
          600: "#2f7a3e",
        },
        surface: {
          DEFAULT: "#f6f7f2",
          primary: "#f6f7f2",
          secondary: "#eef2ea",
          muted: "#e7ece3",
          blue: "#f0f6ea",
          dark: "#14261a",
          brand: "#2f7a3e",
          card: "#ffffff",
        },
        ink: {
          DEFAULT: "#14261a",
          primary: "#14261a",
          secondary: "#3d4f43",
          muted: "#5c6b62",
          subtle: "#8a968e",
          blue: "#1e3d28",
          orange: "#2f7a3e",
        },
        hairline: {
          light: "#e3e8df",
          medium: "#cfd8c8",
          blue: "#c5d6b8",
          orange: "#d4ed9a",
          dark: "#2f5a38",
        },
      },
      fontFamily: {
        display: ["var(--font-heading)", "Fraunces", "Georgia", "serif"],
        sans: ["var(--font-body)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero-mobile": ["40px", { lineHeight: "1.06", letterSpacing: "-0.03em" }],
        hero: ["68px", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "h2-mobile": ["32px", { lineHeight: "1.18", letterSpacing: "-0.02em" }],
        h2: ["48px", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "h3-mobile": ["24px", { lineHeight: "1.22" }],
        h3: ["32px", { lineHeight: "1.2" }],
        "h4-mobile": ["20px", { lineHeight: "1.28" }],
        h4: ["24px", { lineHeight: "1.25" }],
        "stat-mobile": ["36px", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        stat: ["56px", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        container: "80rem",
      },
      borderRadius: {
        xs: "12px",
        btn: "9999px",
        card: "22px",
        block: "28px",
      },
      boxShadow: {
        subtle: "0 8px 24px rgba(20, 38, 26, 0.06)",
        card: "0 16px 40px -28px rgba(20, 38, 26, 0.18)",
        "card-hover": "0 22px 44px -24px rgba(20, 38, 26, 0.2)",
        "orange-glow": "0 12px 28px -12px rgba(47, 122, 62, 0.35)",
        "blue-glow": "0 12px 28px -14px rgba(30, 61, 40, 0.25)",
        molten: "0 0 0 1px rgba(47, 122, 62, 0.12), 0 12px 32px rgba(47, 122, 62, 0.12)",
      },
      backgroundImage: {
        "grad-blue": "linear-gradient(135deg, #2f7a3e 0%, #1e3d28 100%)",
        "grad-dark-blue": "linear-gradient(160deg, #14261a 0%, #2f7a3e 120%)",
        "grad-orange": "linear-gradient(135deg, #c8e86a 0%, #2f7a3e 100%)",
        "grad-steel": "linear-gradient(135deg, #14261a 0%, #1e3d28 48%, #2f7a3e 100%)",
        "grad-mesh":
          "radial-gradient(ellipse at 20% 0%, rgba(200,232,106,0.35), transparent 46%), radial-gradient(ellipse at 90% 80%, rgba(47,122,62,0.12), transparent 42%)",
      },
      transitionTimingFunction: {
        engineered: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "line-grow": {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.08)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.55" },
          "100%": { transform: "scale(1.7)", opacity: "0" },
        },
        spark: {
          "0%, 100%": { opacity: "0", transform: "translateY(8px) scale(0.6)" },
          "40%": { opacity: "1", transform: "translateY(-6px) scale(1)" },
          "70%": { opacity: "0.2", transform: "translateY(-14px) scale(0.8)" },
        },
        shine: {
          "0%": { transform: "translateX(-130%) skewX(-16deg)" },
          "100%": { transform: "translateX(240%) skewX(-16deg)" },
        },
        "cta-ring": {
          "0%": { opacity: "0.65", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(1.18)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "line-grow": "line-grow 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
        marquee: "marquee 32s linear infinite",
        "marquee-fast": "marquee 18s linear infinite",
        "marquee-slow": "marquee 42s linear infinite reverse",
        float: "float 5.5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3.6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.2s ease-out infinite",
        spark: "spark 3.2s ease-in-out infinite",
        shine: "shine 1.15s ease-in-out",
        "cta-ring": "cta-ring 2.6s ease-out infinite",
        "gradient-shift": "gradient-shift 10s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
