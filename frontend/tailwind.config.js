/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        koracart: {
          navy: '#14213D',
          teal: '#12B8A6',
          amber: '#F5A623',
          mist: '#F5F7FA',
        },
      },
      boxShadow: {
        soft: '0 18px 50px rgba(20, 33, 61, 0.08)',
      },
    },
  },
  plugins: [],
}
