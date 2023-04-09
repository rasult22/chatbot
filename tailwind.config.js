// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter-900': ["Inter_900Black"],
        'inter-400': ["Inter_400Regular"],
        'inter-500': ["Inter_500Medium"],
        'inter-700': ["Inter_700Bold"],
      }
    },
  },
  plugins: [],
}