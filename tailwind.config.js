/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./lib/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                zlendo: {
                    teal: {
                        DEFAULT: '#00A884',
                        50: '#f0fdf9',
                        100: '#ccfbf1',
                        200: '#99f6e4',
                        300: '#5eead4',
                        400: '#2dd4bf',
                        500: '#00A884', // Primary Realty Color
                        600: '#0d9488',
                        700: '#0f766e',
                        800: '#115e59',
                        900: '#134e4a',
                    },
                    orange: {
                        DEFAULT: '#FF6B00',
                        light: '#FFF0E6',
                        peach: '#FDC091',
                        dark: '#FF4500',
                    },
                    mint: {
                        DEFAULT: '#DBECE8',
                        soft: '#f1f8f6',
                    },
                    grey: {
                        dark: '#4D4D4D',
                        medium: '#717171',
                        light: '#F5F5F5',
                    }
                }
            },
            backgroundImage: {
                'zlendo-gradient': 'linear-gradient(297deg, #FF603A 47.4%, #FDC091 133.17%)',
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
                nunito: ['Nunito', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'soft-pulse': 'soft-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                'soft-pulse': {
                    '0%, 100%': { opacity: '0.4', scale: '1' },
                    '50%': { opacity: '0.6', scale: '1.05' },
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
