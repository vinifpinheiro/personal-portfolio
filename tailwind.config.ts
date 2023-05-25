/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["media", "class"],
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: "#ffffff",
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      red: colors.red,
      sky: colors.sky,
      rose: colors.rose,
      yellow: colors.yellow,
      purple: colors.purple,
      blue: colors.blue,
    },
  },
  plugins: [
    // require("@tailwindcss/forms"),
    // require("daisyui"),
    // require("@tailwindcss/container-queries"),
    require("tailwindcss-animate"),
  ],
};
