/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // lub odpowiednie ścieżki
    ],
    safelist: [
        'customCard'
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};