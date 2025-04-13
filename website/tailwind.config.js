/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(220, 15%, 20%)',
        primary: {
          DEFAULT: 'hsl(210, 80%, 45%)',
          foreground: 'hsl(0, 0%, 100%)',
        },
        border: 'hsl(220, 13%, 91%)',
        muted: {
          DEFAULT: 'hsl(220, 15%, 96%)',
          foreground: 'hsl(220, 10%, 45%)',
        },
      },
    },
  },
  plugins: [],
}
