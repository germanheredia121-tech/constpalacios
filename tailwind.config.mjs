/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      colors: {
        sage: {
          DEFAULT: '#4a5d4f',
          light: '#6b7f6e',
          dark: '#2d3b2f',
        },
      },
    },
  },
  plugins: [],
};
