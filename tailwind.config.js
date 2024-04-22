/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        rise: {
          '0%': { transform: 'translateY(100%)', opacity: 0.5 },
          '100%': { transform: 'translateY(-100%)', opacity: 0 },
        },
      },
      animation: {
        rise: 'rise 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
