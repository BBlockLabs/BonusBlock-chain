const defaultTheme = require('tailwindcss/defaultTheme');
const typographyPlugin = require('./src/tailwindcss.plugins/typography');

module.exports = {
    darkMode: ['class', '[data-theme="dark"]'],
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            sans: [...defaultTheme.fontFamily.sans],
        },
        extend: {
            colors: {
                'dark-blue': {
                    DEFAULT: '#1E1C4E',
                },
                black: {
                    DEFAULT: '#060612',
                    warm: '#1f1f29',
                },
                gray: {
                    100: '#F7F7F7',
                    200: '#dddddd',
                    300: '#a5a5a5',
                    400: '#3a3a3a',
                    DEFAULT: '#555555',
                    600: '#808080',
                    800: '#999999',
                    900: '#1f1f29',
                },
                yellow: {
                    DEFAULT: '#F5BF5B',
                },
            },
            boxShadow: {
                card: '16px 32px 128px -8px rgba(0, 0, 0, 0.07)',
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1.5rem',
                lg: '2rem',
            },
        },
    },
    plugins: [typographyPlugin],
};
