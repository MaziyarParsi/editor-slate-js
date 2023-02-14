 /** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily:{
        vazir:['Vazirmatn']
      },
      backgroundColor: {
        primary:'var(--color-bg-primary)',
        primaryDark:'var(--color-bg-primary-dark)',
        primaryHover:'var(--color-bg-primary-hover)',
        primaryHoverDark:'var(--color-bg-primary-hover-dark)',
        secondary: 'var(--color-bg-secondary)',
        secondaryDark:'var(--color-bg-secondary)',
        teritary: 'var(--color-bg-teritary)',
        teritaryDark:'var(--color-bg-teritary-dark)',
        secondaryHover:'var(--color-bg-secondary-hover)',
        secondaryHoverDark:'var(--color-bg-secondary-hover-dark)',
        teritaryHover:'var(--color-bg-teritary-hover)',
        teritaryHoverDark:'var(--color-bg-teritary-hover-dark)',
        DarkGray:'var(--color-bg-gray)',
        main:'var(--color-bg-main)',
        mainDark:'var(--color-bg-main-dark)',
        alt:'var(--color-bg-alt)',
        altDark:'var(--color-bg-alt-dark)',
        tableNext:'#606060',
        tableNextDark:'#8c8c8c'
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        primaryDark:'var(--color-text-primary-dark)',
        secondary:'var(--color-text-secondary)',
        secondaryDark:'var(--color-text-secondary-dark)',
        accent: 'var(--color-text-accent)',
        mainDark:'var(--color-text-main-dark)',
        main:'var(--color-text-main)'
      },
    },
  },
  plugins: [],
}
