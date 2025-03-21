module.exports = {
  darkMode: "class", 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        dark: "#171717",
        light: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
