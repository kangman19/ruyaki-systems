import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Graphite dark palette — rich, warm-toned blacks
        // Titanium Slate: matte cool metallic surfaces
        canvas: "#0E131D",
        recessed: "#090E17",
        surface: "#171C25",
        "surface-2": "#1E2430",
        "surface-3": "#262C3B",
        "surface-4": "#343944",
        border: "rgba(255,255,255,0.10)",
        "border-bright": "rgba(255,255,255,0.20)",

        // Accent system. NOTE: "gold" token names are kept to avoid renaming hundreds
        // of classes; their values are now the Titanium Slate teal (#00CEC8).
        gold: {
          DEFAULT: "#00CEC8",
          bright: "#5EEAE4",
          dim: "#009E99",
          hover: "#00B5AF",
          glow: "rgba(0,206,200,0.20)",
          "glow-strong": "rgba(0,206,200,0.35)",
        },
        sage: {
          DEFAULT: "#5EEAE4",
          bright: "#99F0EC",
          dim: "#00B5AF",
          glow: "rgba(94,234,228,0.15)",
        },
        // Off-spec Tailwind defaults used in a few sections, pulled into the palette
        teal: "#00CEC8",
        lime: "#5EEAE4",
        indigo: "#94A3B8",
        amber: {
          DEFAULT: "#94A3B8",
          dim: "#64748B",
          glow: "rgba(148,163,184,0.15)",
        },

        // Text hierarchy
        "text-bright": "#FFFFFF",
        "text-primary": "#F1F5F9",
        "text-secondary": "#94A3B8",
        "text-muted": "#64748B",
        "text-accent": "#00CEC8",
        "on-primary": "#041A19",
      },
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Titanium Slate scale: hero 48-56px, H1 32-36px, H2 22-24px, body 15-18px, label 11-12px
        "display-xl": ["clamp(2.5rem, 5vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-lg": ["clamp(1.875rem, 3.2vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-md": ["clamp(1.375rem, 2.2vw, 1.5rem)", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["1.0625rem", { lineHeight: "1.65" }],
        "body-md": ["0.9375rem", { lineHeight: "1.6" }],
        "label": ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.05em" }],
      },
      borderRadius: {
        // Architectural discipline: strict 4-8px corners (pills/dots keep rounded-full)
        xl: "0.375rem",
        "2xl": "0.375rem",
        "3xl": "0.5rem",
        "4xl": "0.5rem",
        xl2: "0.375rem",
        xl3: "0.5rem",
      },
      boxShadow: {
        "gold-sm": "0 0 20px rgba(0,206,200,0.2)",
        "gold-md": "0 0 40px rgba(0,206,200,0.25)",
        "gold-lg": "0 0 80px rgba(0,206,200,0.2)",
        "sage-sm": "0 0 20px rgba(123,158,135,0.2)",
        "card": "0 4px 24px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)",
        "soft": "0 1px 2px rgba(10,10,11,0.1), 0 16px 40px -16px rgba(10,10,11,0.4)",
        "lift": "0 24px 60px -20px rgba(0,206,200,0.25)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "scan-line": "scanLine 3s linear infinite",
        "blink": "blink 1s step-end infinite",
        "floaty": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
