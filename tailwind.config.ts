import { defineConfig } from 'windicss/helpers';
import defaultTheme from 'tailwindcss/defaultTheme';
import { neutral as trueGray } from 'tailwindcss/colors';

export default defineConfig({
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/keep-react/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray,
      },
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
  presets: [require('keep-react/preset')],
});
