/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        parcelCard: '1fr 1fr 1fr 1fr minmax(320px, 1fr)'
      },
      fontSize: {
        '2xs': '0.725rem',
        xxs: '0.5rem'
      }
    }
  }
};
