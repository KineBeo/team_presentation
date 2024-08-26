import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/HeroSection.png')",
        "blog-pattern": "url('/images/Blog.jpg')",
        "blog-pattern-2": "url('/images/blog2.webp')",
        "blog-pattern-3": "url('/images/welcome-to-nginx.socialImage.png')",
        "topic-pattern-1": "url('/images/topic1.jpg')",
      },
    },
    screens: {
      mobile: {
        min: "100px",
        max: "550px",
      },
      tablet: {
        min: "550px",
        max: "750px",
      },
      "mini-laptop": {
        min: "750px",
        max: "874px",
      },
      laptop: {
        min: "874px",
        max: "1280px",
      },
      desktop: {
        min: "1280px",
      },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  darkMode: "class",
  plugins: [nextui(), flowbite.plugin()],
};
export default config;
