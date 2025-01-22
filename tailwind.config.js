// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '	#000000',      // Customize this value to your primary color
        secondary: '#fff',    // Customize this value to your secondary color
        background: '#f3f4f6',   // Customize for a background color
        mutedForeground: '#6b7280', // Customize for text-muted or similar
      },
    },
  },
  plugins: [],
};
