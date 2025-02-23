module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#56F699",
          "base-content": "#A3A6C2",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#56F699",
          "base-content": "#A3A6C2",
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  theme: {
    extend: {
      colors: {
        primary: '#56F699',
        default: '#A3A6C2',
      },
    },
  },
};
