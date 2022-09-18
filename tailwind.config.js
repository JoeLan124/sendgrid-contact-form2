module.exports = {
  purge: ["**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      // boxShadow: {
      //   white: " 0px 0px 50px rgba(255, 255, 255, 0.4)",
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
