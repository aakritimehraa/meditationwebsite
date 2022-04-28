module.exports = {
  mode: 'jit',  // update this line
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
    darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      'hlf': '50%',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}