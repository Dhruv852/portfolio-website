/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        colors: {
            // Override ALL default colors with only blue and brown palette
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            black: '#000000',

            // Gray scale (neutral)
            gray: {
                50: '#fafafa',
                100: '#f5f5f5',
                200: '#e5e5e5',
                300: '#d4d4d4',
                400: '#a3a3a3',
                500: '#737373',
                600: '#525252',
                700: '#404040',
                800: '#262626',
                900: '#171717',
            },

            // Blue Pastel Theme
            cream: {
                50: '#FDFCFB',
                100: '#FAF8F5',
                200: '#F5F1EB',
                300: '#F0EBE3',
                400: '#EBE4DA',
                500: '#E6DDD1',
                cloud: '#FAF8F5',
                vanilla: '#F5F1EB',
                almond: '#F0EBE3',
            },

            sky: {
                50: '#F0F7FF',
                100: '#E0EFFF',
                200: '#B8DCFF',
                300: '#A8D5FF',
                400: '#8FC7FF',
                500: '#76B9FF',
            },
            powder: {
                50: '#F2F6FA',
                100: '#E5EDF5',
                200: '#C8DBEB',
                300: '#B5D0E5',
                400: '#A2C5DF',
                500: '#8FBAD9',
            },
            periwinkle: {
                50: '#F3F4FB',
                100: '#E7E9F7',
                200: '#CFD3EF',
                300: '#BFC5E9',
                400: '#AFB7E3',
                500: '#9FA9DD',
            },

            // Brown Accents
            mocha: {
                50: '#F9F6F3',
                100: '#F3EDE7',
                200: '#E7DBCF',
                300: '#D4C2B0',
                400: '#C1A991',
                500: '#AE9072',
                600: '#8B7358',
            },
            cocoa: {
                50: '#F7F4F2',
                100: '#EFE9E5',
                200: '#DFD3CB',
                300: '#C9B5A5',
                400: '#B3977F',
                500: '#9D7959',
                600: '#7E6147',
            },

            blush: {
                50: '#FDF6F5',
                100: '#FBEDEB',
                200: '#F7DBD7',
                300: '#F0C1BA',
                400: '#E9A79D',
                500: '#E28D80',
            },

            text: {
                primary: '#3A3A3A',
                secondary: '#6B6B6B',
                muted: '#9A9A9A',
                divider: '#E0E0E0',
            },

            // Primary/Accent
            primary: {
                50: '#F0F7FF',
                100: '#E0EFFF',
                200: '#B8DCFF',
                300: '#A8D5FF',
                400: '#8FC7FF',
                500: '#76B9FF',
                600: '#5DA0E6',
                700: '#4487CD',
                800: '#2B6EB4',
                900: '#12559B',
            },
            accent: {
                50: '#F9F6F3',
                100: '#F3EDE7',
                200: '#E7DBCF',
                300: '#D4C2B0',
                400: '#C1A991',
                500: '#AE9072',
                600: '#8B7358',
                700: '#68563E',
                800: '#453924',
                900: '#221C0A',
            },
        },
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            fontSize: {
                'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'h1': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
                'h2': ['2.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
                'h3': ['2rem', { lineHeight: '1.4' }],
                'h4': ['1.5rem', { lineHeight: '1.5' }],
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
                '30': '7.5rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            backgroundColor: {
                'blue-light': '#E0EFFF',
                'blue-medium': '#76B9FF',
                'blue-dark': '#4A90E2',
                'brown-light': '#F5F1EB',
                'brown-medium': '#C1A991',
                'brown-dark': '#AE9072',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'gradient': 'gradient 8s linear infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
        },
    },
    plugins: [],
}
