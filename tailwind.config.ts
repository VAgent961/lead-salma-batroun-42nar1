import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
  "primary": "#0F4C5C",
  "secondary": "#D4A373",
  "accent": "#D4A373",
  "background": "#FDFBF7",
  "surface": "#FFFFFF",
  "ink": "#2D3436",
  "muted": "#636E72",
  "dark": "#0A323D"
},
      fontFamily: {
  "heading": [
    "Playfair Display",
    "sans-serif"
  ],
  "body": [
    "Inter",
    "sans-serif"
  ]
},
      fontSize: {},
      spacing: {},
      borderRadius: {},
      boxShadow: {
  "card": "0 4px 12px rgba(0,0,0,0.06)",
  "elevated": "0 10px 30px rgba(0,0,0,0.12)"
},
    },
  },
  plugins: [],
};

export default config;
