/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-00": "#fff",
        red: "#eb1700",
        darkslateblue: "#2b2c4e",
        "gray-400": "#929fa5",
        "gray-900": "#191d1f",
        forestgreen: "#43a945",
        "gray-500": "#77878f",
        "gray-600": "#5f6c72",
        black: "#000",
        whitesmoke: {
          "100": "#f2f4f5",
          "200": "#f2f2f2",
        },
        gray1: {
          "100": "#191c1f",
          "200": "rgba(255, 255, 255, 0.8)",
        },
      },
      spacing: {},
      fontFamily: {
        comforter: "Comforter",
      },
      borderRadius: {
        "8xs": "5px",
        "9xs-8": "3.8px",
        "81xl": "100px",
      },
    },
    fontSize: {
      mini: "15px",
      xl: "20px",
      "mid-5": "17.5px",
      "mid-9": "17.9px",
      "base-3": "15.3px",
      base: "16px",
      "21xl": "40px",
      "4xl-4": "23.4px",
      sm: "14px",
      "5xl": "24px",
      "22xl": "41px",
      lg: "18px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
