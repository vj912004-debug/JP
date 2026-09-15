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
        // Brand blue
        blue: {
          950: "#062E6F",
          900: "#0D47A1",
          800: "#1565C0",
          700: "#1976D2",
          600: "#2196F3",
          100: "#BBDEFB",
          50: "#E3F2FD",
        },
        // Industrial orange
        orange: {
          900: "#9A3412",
          800: "#C2410C",
          700: "#EA580C",
          600: "#F97316",
          500: "#FB923C",
          300: "#FDBA74",
          100: "#FFEDD5",
        },
        // Dark industrial
        dark: {
          950: "#07111F",
          900: "#0B1728",
          800: "#10233D",
          700: "#17365D",
          600: "#234B75",
        },
        // Backgrounds
        surface: {
          primary: "#F8FAFC",
          secondary: "#F1F5F9",
          blue: "#E3F2FD",
          dark: "#07111F",
          brand: "#0D47A1",
        },
        // Text
        ink: {
          primary: "#111827",
          secondary: "#374151",
          muted: "#6B7280",
          subtle: "#9CA3AF",
          blue: "#0D47A1",
          orange: "#F97316",
        },
        // Borders
        hairline: {
          light: "#E5E7EB",
          medium: "#CBD5E1",
          blue: "#BFDBFE",
          orange: "#FED7AA",
          dark: "#1E3A5F",
        },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
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
        container: "1360px",
      },
      borderRadius: {
        xs: "6px",
        btn: "8px",
        card: "14px",
        block: "16px",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(7, 17, 31, 0.06), 0 1px 1px rgba(7,17,31,0.04)",
        card: "0 4px 16px rgba(7, 17, 31, 0.06)",
        "card-hover": "0 12px 28px rgba(7, 17, 31, 0.12)",
        "orange-glow": "0 8px 24px rgba(249, 115, 22, 0.25)",
        "blue-glow": "0 10px 32px rgba(13, 71, 161, 0.28)",
        "molten": "0 0 0 1px rgba(249, 115, 22, 0.18), 0 12px 40px rgba(249, 115, 22, 0.22)",
      },
      backgroundImage: {
        "grad-blue": "linear-gradient(135deg, #0D47A1 0%, #1976D2 100%)",
        "grad-dark-blue": "linear-gradient(160deg, #07111F 0%, #0D47A1 120%)",
        "grad-orange": "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
        "grad-steel": "linear-gradient(135deg, #07111F 0%, #17365D 48%, #0D47A1 100%)",
        "grad-mesh":
          "radial-gradient(ellipse at 20% 0%, rgba(249,115,22,0.18), transparent 46%), radial-gradient(ellipse at 90% 80%, rgba(25,118,210,0.22), transparent 42%)",
      },
      transitionTimingFunction: {
        engineered: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "line-grow": {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
        "count-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
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
        scan: {
          "0%": { transform: "translateY(-120%)" },
          "100%": { transform: "translateY(220%)" },
        },
        shine: {
          "0%": { transform: "translateX(-130%) skewX(-16deg)" },
          "100%": { transform: "translateX(240%) skewX(-16deg)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "line-grow": "line-grow 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        marquee: "marquee 32s linear infinite",
        "marquee-fast": "marquee 18s linear infinite",
        float: "float 5.5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3.6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.2s ease-out infinite",
        spark: "spark 3.2s ease-in-out infinite",
        scan: "scan 5.5s linear infinite",
        shine: "shine 1.15s ease-in-out",
        "gradient-shift": "gradient-shift 10s ease infinite",
        "spin-slow": "spin-slow 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
