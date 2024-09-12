import { renderUrlImage } from "./utils/log-helper";
import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        "100": "100% 100%",
      },
      backgroundPosition: {
        "50_0": "50% 0",
      },
      backgroundImage: {
        "icon-menu": renderUrlImage("/assets/images/icon-menu.png"),
        "icon-close-menu": renderUrlImage("/assets/images/icon-close-menu.png"),
        "chevron-right": renderUrlImage("/assets/images/chevron-right.png"),

        "arr-down": renderUrlImage("/assets/images/arr-down.png"),
        "bg-org": renderUrlImage("/assets/images/bg-org.png"),
        "arr-circle": renderUrlImage("/assets/images/arr-circle.png"),
      },
      screens: {
        desktop: "1700px",
      },
      animation: {
        pusle: "pusle 0.8s linear infinite",
        move: "move 1.2s linear infinite",
        flash: "flash 1s linear infinite",
        bounce: "bounce 1s linear 0.1s infinite alternate",
        zoomIn: "zoomIn 1s linear",
      },
      keyframes: {
        pusle: {
          "0%, 100%": { transform: "scale(100%)" },
          "50%": { transform: "scale(90%)" },
        },
        flash: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        move: {
          "0%": { transform: "translate(0) rotate(0)" },
          "25%": { transform: "translate(3px, 3px) rotate(3deg)" },
          "50%": { transform: "translate(0) rotate(0)" },
          "75%": { transform: "translate(-3px, 3px) rotate(-3deg)" },
          "100%": { transform: "translate(0) rotate(0)" },
        },
        bounce: {
          "0%": { transform: "translateY(-5px)" },
          "100%": { transform: "translateY(5px)" },
        },
        zoomIn: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        utmavo: ["UTM-AVO", "sans-serif"], // Định nghĩa font mới ở đây
        utbanqueb: ["UTM-BANQUEB", "sans-serif"], // Định nghĩa font mới ở đây
      },
    },
  },
  plugins: [],
};
export default config;
