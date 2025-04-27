/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  safelist: [
    // Add any classes that might be dynamically created
    "bg-primary",
    "text-white",
    "hover:bg-primary-dark",
    "bg-secondary",
    "hover:bg-secondary-dark",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        "primary-dark": "#4338CA",
        secondary: "#10B981",
        "secondary-dark": "#059669",
        accent: "#F59E0B",
        dark: "#1F2937",
        light: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
