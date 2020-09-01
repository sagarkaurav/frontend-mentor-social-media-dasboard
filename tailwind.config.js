module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./public/index.html"
    ]
  },
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'primary-text': 'var(--primary-text)',
        'secondary-text': 'var(--secondary-text)',
        'card-bg': 'var(--card-bg)',
        'card-hover-state': 'var(--card-hover-state)'
      }
    },
  },
  variants: {},
  plugins: [],
}
