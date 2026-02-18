/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                'brand': {
                    'dark': '#020617',
                    'light': '#f8fafc',
                    'accent': '#6366f1', // Indigo Base
                    'neon': '#00f2ff',   // Cyan Neon
                    'surface': {
                        'light': 'rgba(255, 255, 255, 0.7)',
                        'dark': 'rgba(15, 23, 42, 0.7)',
                    }
                }
            },
            fontFamily: {
                'display': ['Outfit', 'sans-serif'],
                'body': ['Inter', 'sans-serif'],
            },
            animation: {
                'slow-spin': 'spin 10s linear infinite',
                'border-trace': 'border-trace 4s linear infinite',
                'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
            },
            keyframes: {
                'border-trace': {
                    '0%': { 'border-image-source': 'linear-gradient(90deg, #6366f1, #00f2ff, #6366f1)' },
                    '50%': { 'border-image-source': 'linear-gradient(270deg, #6366f1, #00f2ff, #6366f1)' },
                    '100%': { 'border-image-source': 'linear-gradient(90deg, #6366f1, #00f2ff, #6366f1)' },
                },
                'pulse-soft': {
                    '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                    '50%': { opacity: 0.8, transform: 'scale(0.98)' },
                }
            }
        },
    },
    plugins: [],
}
