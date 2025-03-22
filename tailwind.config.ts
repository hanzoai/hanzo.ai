import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
      },
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
        display: ["CalSans Semibold", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        serif: ["Georgia", "serif"],
      },
      // Updated font sizes based on golden ratio (1.618)
      fontSize: {
        // Base size is 1rem (16px)
        xs: ["0.75rem", { lineHeight: "1rem" }],                  // 12px
        sm: ["0.875rem", { lineHeight: "1.25rem" }],              // 14px
        base: ["1rem", { lineHeight: "1.5rem" }],                 // 16px (base)
        lg: ["1.125rem", { lineHeight: "1.75rem" }],              // 18px
        xl: ["1.25rem", { lineHeight: "1.85rem" }],               // 20px
        "2xl": ["1.618rem", { lineHeight: "2.1rem" }],            // ~26px
        "3xl": ["2.618rem", { lineHeight: "2.75rem" }],           // ~42px
        "4xl": ["4.236rem", { lineHeight: "1.15" }],              // ~68px
        "5xl": ["6.854rem", { lineHeight: "1.1" }],               // ~110px
        "6xl": ["11.089rem", { lineHeight: "1" }],                // ~177px
      },
      // Spacing system based on golden ratio
      spacing: {
        // Base size is 4 (0.25rem or 4px)
        // Standard Tailwind: 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5...
        // Adding golden ratio increments
        "golden-1": "0.25rem",      // 4px (base unit)
        "golden-2": "0.405rem",     // ~6.5px
        "golden-3": "0.654rem",     // ~10.5px
        "golden-4": "1.059rem",     // ~17px
        "golden-5": "1.713rem",     // ~27.5px
        "golden-6": "2.772rem",     // ~44.5px
        "golden-7": "4.487rem",     // ~72px
        "golden-8": "7.26rem",      // ~116px
        "golden-9": "11.749rem",    // ~188px
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
      // Golden ratio for width and height
      width: {
        "golden-sm": "38.2%",       // 0.382 = 1 - (1 / 1.618)
        "golden-lg": "61.8%",       // 0.618 = 1 / 1.618
      },
      height: {
        "golden-sm": "38.2%",       // 0.382 = 1 - (1 / 1.618)
        "golden-lg": "61.8%",       // 0.618 = 1 / 1.618
      },
      // Golden ratio-based grid gaps
      gap: {
        "golden-1": "0.25rem",      // 4px (base unit)
        "golden-2": "0.405rem",     // ~6.5px
        "golden-3": "0.654rem",     // ~10.5px
        "golden-4": "1.059rem",     // ~17px
        "golden-5": "1.713rem",     // ~27.5px
      },
      padding: {
        "golden-1": "0.25rem",      // 4px (base unit)
        "golden-2": "0.405rem",     // ~6.5px
        "golden-3": "0.654rem",     // ~10.5px
        "golden-4": "1.059rem",     // ~17px
        "golden-5": "1.713rem",     // ~27.5px
      },
      margin: {
        "golden-1": "0.25rem",      // 4px (base unit)
        "golden-2": "0.405rem",     // ~6.5px
        "golden-3": "0.654rem",     // ~10.5px
        "golden-4": "1.059rem",     // ~17px
        "golden-5": "1.713rem",     // ~27.5px
      },
      gridTemplateColumns: {
        "golden": "38.2% 61.8%",    // Golden ratio split
      },
      gridTemplateRows: {
        "golden": "38.2% 61.8%",    // Golden ratio split
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-up-fade": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-down": "fade-down 0.5s ease-out",
        "slide-up-fade": "slide-up-fade 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
