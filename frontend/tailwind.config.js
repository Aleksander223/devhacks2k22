/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [{
      light: {
        "primary": "#8518B7",
        "secondary": "#A8E773",
        "accent": "#5D0084",
        "neutral": "#3D4451",
        "base-100": "#FFFFFF",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
      },
    }, "dark"],
    darkTheme: "dark"
  },
  plugins: [require("daisyui")]
}
