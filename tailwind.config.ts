import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A202C',
        secondary: '#2D3748',
        accent: '#38B2AC',
      },
    },
  },
  plugins: [],
};

export default config;
