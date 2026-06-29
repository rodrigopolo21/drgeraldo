import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Premium medical palette (briefing)
        ink: {
          DEFAULT: "#0B1120", // Background principal
          soft: "#111827",    // Background secundário
        },
        brand: {
          deep: "#1E3A8A",    // Azul institucional
          DEFAULT: "#2563EB", // Azul destaque
          light: "#3B82F6",
        },
        danger: {
          DEFAULT: "#EF4444", // Vermelho problema
          light: "#F87171",
        },
        slatey: {
          DEFAULT: "#475569", // Cinza premium
          light: "#CBD5E1",   // Cinza claro
        },
        regen: {
          DEFAULT: "#10B981", // Accent regenerativo (healing)
          soft: "#34D399",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        stat: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.875rem, 3.5vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      backgroundImage: {
        "premium-gradient":
          "radial-gradient(120% 120% at 50% 0%, #111827 0%, #0B1120 55%, #0B1120 100%)",
        "brand-glow":
          "radial-gradient(60% 60% at 50% 40%, rgba(37,99,235,0.28) 0%, rgba(37,99,235,0) 70%)",
        "danger-glow":
          "radial-gradient(60% 60% at 50% 40%, rgba(239,68,68,0.28) 0%, rgba(239,68,68,0) 70%)",
        "regen-glow":
          "radial-gradient(50% 50% at 50% 50%, rgba(16,185,129,0.22) 0%, rgba(16,185,129,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(37,99,235,0.45)",
        "glow-lg": "0 0 80px -20px rgba(37,99,235,0.5)",
        "glow-regen": "0 0 40px -10px rgba(16,185,129,0.45)",
        premium: "0 24px 60px -24px rgba(0,0,0,0.7)",
        "card-hover": "0 30px 70px -30px rgba(37,99,235,0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-22px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "0.6" },
          "70%": { transform: "scale(1.3)", opacity: "0" },
          "100%": { transform: "scale(1.3)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        marquee: "marquee 40s linear infinite",
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
