import { Inter, Playfair_Display } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const COLORS = {
  primary: {
    dark: "#2A2F23", // Dark green
    main: "#3F4833", // Olive green
    light: "#8A9A7C", // Sage green
  },
  secondary: {
    main: "#D9D9D6", // Light gray
    dark: "#AEAEAA", // Medium gray
  },
  text: {
    primary: "#2A2F23",
    secondary: "#4A4A4A",
    light: "#FFFFFF",
  },
  background: {
    light: "#FFFFFF",
    subtle: "#F8F8F6",
    dark: "#2A2F23",
  },
  accent: {
    gold: "#BFA984",
  },
};

export const BREAKPOINTS = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const SPACING = {
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  "2xl": "3rem", // 48px
  "3xl": "4rem", // 64px
  "4xl": "6rem", // 96px
};

export const SHADOWS = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
};

export const TRANSITIONS = {
  DEFAULT: "all 0.3s ease",
  FAST: "all 0.15s ease",
  SLOW: "all 0.5s ease",
};

export const BORDER_RADIUS = {
  sm: "0.125rem", // 2px
  md: "0.25rem", // 4px
  lg: "0.5rem", // 8px
  xl: "1rem", // 16px
  full: "9999px",
};