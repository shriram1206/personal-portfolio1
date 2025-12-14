/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Light Mode Colors - using RGB variables for opacity support
                light: {
                    bg: 'rgb(var(--color-light-bg) / <alpha-value>)',
                    surface: 'rgb(var(--color-light-surface) / <alpha-value>)',
                    primary: 'rgb(var(--color-light-primary) / <alpha-value>)',
                    secondary: 'rgb(var(--color-light-secondary) / <alpha-value>)',
                    accent: 'rgb(var(--color-light-accent) / <alpha-value>)',
                    textPrimary: 'rgb(var(--color-light-textPrimary) / <alpha-value>)',
                    textSecondary: 'rgb(var(--color-light-textSecondary) / <alpha-value>)',
                    border: 'rgb(var(--color-light-border) / <alpha-value>)',
                },
                // Dark Mode Colors - using RGB variables for opacity support
                dark: {
                    bg: 'rgb(var(--color-dark-bg) / <alpha-value>)',
                    surface: 'rgb(var(--color-dark-surface) / <alpha-value>)',
                    primary: 'rgb(var(--color-dark-primary) / <alpha-value>)',
                    secondary: 'rgb(var(--color-dark-secondary) / <alpha-value>)',
                    accent: 'rgb(var(--color-dark-accent) / <alpha-value>)',
                    textPrimary: 'rgb(var(--color-dark-textPrimary) / <alpha-value>)',
                    textSecondary: 'rgb(var(--color-dark-textSecondary) / <alpha-value>)',
                    border: 'rgb(var(--color-dark-border) / <alpha-value>)',
                },
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
                heading: ['"Outfit"', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                'soft': '12px',
                'softer': '16px',
            },
            boxShadow: {
                'soft': '0 8px 32px rgba(0, 0, 0, 0.08)',
                'glow': '0 0 24px rgba(168, 181, 255, 0.3)',
                'glow-dark': '0 0 24px rgba(201, 182, 255, 0.3)',
            },
            backdropBlur: {
                'glass': '12px',
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'fadeIn': 'fadeIn 0.5s ease-in',
                'slideUp': 'slideUp 0.5s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
