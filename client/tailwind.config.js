const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAUILT: '1rem',
                sm: '1.5rem',
                mm: '1.875rem',
                mt: '4rem',
                md: '5rem',
            },
        },
        screens: {
            sm: '320px',
            mm: '375px',
            mt: '768px',
            md: '1440px',
        },
        colors: {
            nobel: '#B7B4B4',
            silverChalice: '#ADADAD',
            black: '#000000',
            white: '#FFF',
            pureWhite: '#F9F9F9',
            gallery: '#EFEFEF',
            lightPrimary: '#DBD9EE',
            primary: '#6C5FBC',
            moodyBlue: '#7C6FCD',
            melrose: '#A596FF',
            blueViolet: '#5C4EAE',
            gigas: '#5144A0',
            doveGray: '#676767',
            spindle: '#C5BFED',
            lavenderGray: '#BBB6D7',
            geyser: '#CBD5E1',
            sun: '#FBAD18',
            mineShaft: '#282828',
            grayDarker: '#8D8D8D',
            gray: '#908F8F',
            silver: '#CBCBCB',
            darkGray: '#ACADB9',
            uniBlack: '#201F1F',
            pickledBluewood: '#334155',
            tuna: '#323142',
            lightGray: '#828282',
            mercury: 'rgba(231, 231, 231, 0.92)',
            lightSilver: 'rgb(197, 197, 197, 0.15)',
            codGray: '#151515',
            woodsmoke: '#18181B',
            grey: '#8E97A6',
            coconutCream: '#F7EDD0',
            mandysPink: '#F7C5BA',
            goldenGrass: '#DAA31A',
            pomegranate: '#FB471D',
            chateauGreen: '#D6EBDE',
            seaGreen: '#309D5B',
            burntSienna: '#F1534E',
            mirage: '#1A202C',
            alabaster: '#FAFAFA',
            cadetBlue: '#A0AEC0',
            spunPearl: '#AAABBA',
            catskillWhite: '#EDF2F7',
            magnolia: '#F4F0FF',
            whiteIce: '#F2FDF6',
            raven: '#70798B',
            salomie: '#FFDE8A',
            buddhaGold: '#D69900',
            mandysPink: '#F7C5BA',
            porsche: '#EDB66B',
            goldenBell: '#E28B14',
            dodgerBlue: '#5A85FF',
            resolutionBlue: '#002073',
            frenchGray: '#C2C3CB',
            japaneseLaurel: '#005a64',
            aluminium: '#A2A3A6',
        },
        fontFamily: {
            eatly: [
                'var(--font-poppins)',
                'var(--font-inter)',
                'var(--font-manrope)',
                'var(--font-roboto)',
            ],
            poppins: 'var(--font-poppins)',
            inter: 'var(--font-inter)',
            pbSans: 'var(--font-publicSans)',
            manrope: 'var(--font-manrope)',
            roboto: 'var(--font-roboto)',
            plsJakSans: 'var(--font-plusJakartaSans)',
            quicksand: 'var(--font-quicksan)',
        },
        extend: {
            content: {
                mobileIllustration: 'url("/images/IllustrationMobile.svg")',
                arrowSwitch: 'url("/images/ArrowSwitch.svg")',
                titleFrequentQuestions:
                    'url("/images/illustrationFrequentQuestions.svg")',
            },
            backgroundImage: {
                heroCard: 'url("/images/illustrationCard.svg")',
                graphic: 'url("/images/illustrationGraphic.svg")',
                features:
                    'url("/images/IllustrationDem1.svg"), url("/images/IllustrationDem2.svg")',
                mobileIllustration: 'url("/images/IllustrationMobile.svg")',
                mobile: 'url("/images/illustrationArrow.svg")',
                controlPurchases: 'url("/images/illustrationArrow.svg")',
                banner: 'url("/images/backgroundBanner.svg")',
                illustrationBanner: 'url("/images/illustrationBanner.svg")',
            },
            backgroundPosition: {
                features: 'left top, right bottom',
                mobile: 'left 40px top 30px',
            },
            keyframes: {
                // Shadcn.ui
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
                'menu-down': {
                    from: {
                        height: 0,
                    },
                    to: { height: '100vh' },
                },
                'menu-up': {
                    from: {
                        height: '100vh',
                    },
                    to: { height: 0 },
                },
                mobile: {
                    '0%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                    '100%': { transform: 'translateY(0)' },
                },
            },
            animation: {
                // Shadcn.ui
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'menu-down': 'menu-down .4s ease-in',
                'menu-up': 'menu-up .4s ease-out',
                mobile: 'mobile 1s ease-in-out infinite',
            },
        },
    },
    plugins: [
        require('tailwindcss-debug-screens'),
        plugin(function ({ addComponents, addVariant, addUtilities }) {
            addComponents({
                '.visually-hidden': {
                    '@apply absolute m--px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0':
                        {},
                    clipPath: 'inset(100%)',
                    clip: 'rect(0 0 0 0)',
                },
            });
        }),
        // Shadcn.ui
        require('tailwindcss-animate'),
    ],
};
