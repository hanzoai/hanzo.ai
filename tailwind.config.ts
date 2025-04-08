import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0A0A0A",
        },
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0A0A0A",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        serif: ["Georgia", "serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.85rem" }],
        "2xl": ["1.618rem", { lineHeight: "2.1rem" }],
        "3xl": ["2.618rem", { lineHeight: "2.75rem" }],
        "4xl": ["4.236rem", { lineHeight: "1.15" }],
        "5xl": ["6.854rem", { lineHeight: "1.1" }],
        "6xl": ["11.089rem", { lineHeight: "1" }],
      },
      spacing: {
        "golden-1": "0.25rem",
        "golden-2": "0.405rem",
        "golden-3": "0.654rem",
        "golden-4": "1.059rem",
        "golden-5": "1.713rem",
        "golden-6": "2.772rem",
        "golden-7": "4.487rem",
        "golden-8": "7.26rem",
        "golden-9": "11.749rem",
      },
      lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        golden: "1.618",
      },
      width: {
        "golden-sm": "38.2%",
        "golden-lg": "61.8%",
      },
      height: {
        "golden-sm": "38.2%",
        "golden-lg": "61.8%",
      },
      gap: {
        "golden-1": "0.25rem",
        "golden-2": "0.405rem",
        "golden-3": "0.654rem",
        "golden-4": "1.059rem",
        "golden-5": "1.713rem",
      },
      padding: {
        "golden-1": "0.25rem",
        "golden-2": "0.405rem",
        "golden-3": "0.654rem",
        "golden-4": "1.059rem",
        "golden-5": "1.713rem",
      },
      margin: {
        "golden-1": "0.25rem",
        "golden-2": "0.405rem",
        "golden-3": "0.654rem",
        "golden-4": "1.059rem",
        "golden-5": "1.713rem",
      },
      gridTemplateColumns: {
        golden: "38.2% 61.8%",
      },
      gridTemplateRows: {
        golden: "38.2% 61.8%",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-down": {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up-fade": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-down": "fade-down 0.5s ease-out",
        "slide-up-fade": "slide-up-fade 0.3s ease-out",
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
} satisfies Config;
