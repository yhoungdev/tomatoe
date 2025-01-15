/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        tomato: {
          50: "#FFF5F5",
          100: "#FFE3E3",
          500: "#FF6B6B",
          600: "#B82100",
          700: "#A31D00",
          900: "#1D0706",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
