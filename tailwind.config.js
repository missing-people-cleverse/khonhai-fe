/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1150px",

      xxl: "1300px",

      xxxl: "1600px",
    },
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

// z-[800] flex justify-center fixed mt-[-50px] ml-[120px] max-lg:ml-[0] max-lg:w-8/12 max-md:w-10/12 max-md:ml-[-80px] max-md:mt-[-100px]

// max-lg:w-9/12 max-lg:ml-[100px] max-md:mt-[-68rem] max-md:ml-[75px] xxxl:ml-[320px]
// z-[800] w-100% h-100% fixed mt-[-600px]

// location.pathname === "/content"
//               ? "z-[800] flex justify-center fixed mt-[-50px] ml-[120px] max-lg:ml-[0] max-lg:w-8/12 max-md:w-10/12 max-md:ml-[-80px] max-md:mt-[-100px]"
//               : "z-[800] flex justify-center fixed mt-[20px] max-lg:mt-[10px] max-lg:w-9/12 max-md:w-10/12"
