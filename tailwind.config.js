/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070d",
          900: "#0a0e1a",
          800: "#0f1526",
          700: "#161d33",
          600: "#202a47",
        },
        gold: {
          400: "#f4c95d",
          500: "#e8b94a",
          600: "#d4a017",
        },
        azure: {
          400: "#5da9f4",
          500: "#3b82f6",
          600: "#2563eb",
        },
        leaf: {
          400: "#7ee08a",
          500: "#4ade80",
          600: "#22c55e",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at center, var(--tw-gradient-from), transparent 70%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        glow: "0 0 40px rgba(232, 185, 74, 0.25)",
        "glow-blue": "0 0 40px rgba(61, 130, 246, 0.25)",
        "glow-green": "0 0 40px rgba(74, 222, 128, 0.2)",
      },
      keyframes: {
        "grid-move": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "40px 40px" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "flow-line": {
          "0%": { strokeDashoffset: "200" },
          "100%": { strokeDashoffset: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "grid-move": "grid-move 4s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "flow-line": "flow-line 2s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
