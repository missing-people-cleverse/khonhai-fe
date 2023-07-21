/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_light_grey: "#F6F6F6",
        bg_white: "#FFFFFF",
        bg_overlay: "#C2C2C2",
        primary: "#455593",
        secondary: "#FD5C63",
        primary_shadow: "#394577",
        secondary_shadow: "#E94F55",
        text_light: "#F2F2F3",
        text_dark_grey: "#3E3D3E",
        text_black: "#232324",
        valid_green: "#0A7923",
        input_border: "#DCDCDC",
        input_boarderko: "#898989",
      },
    },
  },
  plugins: [],
};
