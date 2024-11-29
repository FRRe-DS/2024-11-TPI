/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Activa el modo oscuro basado en clases
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Esto asegura que Tailwind escanea tus archivos React y TypeScript
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        '3xl': "1920px",
      },
      colors: {
        primary: "#338ef7",
        secondary: "#7828C8",
        // Tus colores personalizados ya son bastante completos
        white: "#FFFFFF",
        black: "#000000",
        // Mantengo tus colores existentes
        blue: {
          50: "#e6f1fe",
          100: "#cce3fd",
          200: "#99c7fb",
          300: "#66aaf9",
          400: "#338ef7",
          500: "#006FEE",
          600: "#005bc4",
          700: "#004493",
          800: "#002e62",
          900: "#001731",
        },
        // Añadir más colores si es necesario
      },
      transitionProperty: {
        height: "height",
      },
      animation: {
        fade: "fadeIn 2s ease-in-out",
        blob: "blob 7s infinite",
        'text-gradient': 'gradient 6s ease infinite',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(30px, -20px) scale(1.1)" },
        },
        gradient: {
          '0%': { color: '#e64a19' }, // Naranja oscuro
          '20%': { color: '#f57c00' }, // Naranja fuerte
          '40%': { color: '#fbc02d' }, // Amarillo intenso
          '60%': { color: '#388e3c' }, // Verde fuerte
          '80%': { color: '#1976d2' }, // Azul intenso
          '100%': { color: '#7b1fa2' }, // Morado intenso
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#006FEE",
          secondary: "#7828C8",
          accent: "#17C964",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
        dark: {
          primary: "#338ef7",
          secondary: "#AE7EDE",
          accent: "#45D483",
          neutral: "#191D24",
          "base-100": "#2A2E37",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar-hide"),
  ],
  corePlugins: {
    preflight: false,
  },
};