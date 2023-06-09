/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{tsx,jsx,js}',
  '.src/pages/**/*.{tsx,jsx,js}',

];
export const theme = {
  extend: {
    gradientColorStops: (theme) => ({
      'purple': '#6c5ce7',
      'pink': '#fd79a8',
    }),
  },

  theme: {
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    }
  }
};

export const plugins = [];
