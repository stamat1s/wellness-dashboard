/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',    // Tailwind's blue-500
        accent: '#10B981',     // Tailwind's green-500
        soft: '#F3F4F6',       // Tailwind's gray-100
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },  plugins: [],
};
