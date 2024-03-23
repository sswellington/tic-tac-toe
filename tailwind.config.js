/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    plugins: [],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            blue: colors.blue,
            emerald: colors.emerald,
            gray: colors.gray,
            indigo: colors.indigo,
            rose: colors.rose,
            yellow: colors.yellow,
            white: colors.white,
            error: {
                DEFAULT: '#ba1a1a',
                light: '#ba1a1a',
                dark: '#ffb4ab',
            },
            on_error: {
                DEFAULT: '#ffffff',
                light: '#ffffff',
                dark: '#690005',
            },
            error_container: {
                DEFAULT: '#ffdad6',
                light: '#ffdad6',
                dark: '#93000a',
            },
            on_error_container: {
                DEFAULT: '#410002',
                light: '#410002',
                dark: '#ffdad6',
            },
        },
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            }
        }
    }
}
