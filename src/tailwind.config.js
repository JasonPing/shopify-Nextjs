module.exports = {
  mode: "jit",
  purge: ["./base/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: {
          light: "#F87171",
          DEFAULT: "#EF4444",
          dark: "#B91C1C",
        },
        secondary: {
          light: "#e0e6ed",
          DEFAULT: "#c0ccda",
          dark: "#3c4858",
        },
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [],
};
