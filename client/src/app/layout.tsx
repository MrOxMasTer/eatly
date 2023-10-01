import './globals.css';

import {
    Inter,
    Manrope,
    Plus_Jakarta_Sans,
    Poppins,
    Public_Sans,
    Quicksand,
    Roboto,
} from 'next/font/google';

import type { Metadata } from 'next';
import type { NextFontWithVariable } from 'next/dist/compiled/@next/font';

import Providers from '@/shared/lib/Providers/QueryClientProviders';

export const metadata: Metadata = {
    title: 'Home',
    description: 'home',
    twitter: {
        card: 'summary_large_image',
        title: 'Vanilla Extract + App Directory',
        description:
            'React Server Components using Next.js and Vanilla Extract',
    },
};

const plusJakartaSans: NextFontWithVariable = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-plusJakartaSans',
    weight: ['500'],
    style: ['normal'],
});

const quicksand: NextFontWithVariable = Quicksand({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-quicksan',
    weight: ['500'],
    style: ['normal'],
});

const manrope: NextFontWithVariable = Manrope({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-manrope',
    weight: ['400', '500', '600', '700', '800'],
    style: ['normal'],
});

const poppins: NextFontWithVariable = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['400', '500', '600', '700', '800'],
    style: ['normal', 'italic'],
});

const roboto: NextFontWithVariable = Roboto({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
    weight: ['400', '700'],
    style: ['normal'],
});

const inter: NextFontWithVariable = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
    weight: ['400', '500', '600', '700'],
    style: ['normal'],
});

const publicSans: NextFontWithVariable = Public_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-publicSans',
    weight: ['700'],
    style: ['normal'],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`debug-screens relative font-eatly ${poppins.variable} ${inter.variable} ${publicSans.variable} ${manrope.variable} ${roboto.variable} ${quicksand.variable} ${plusJakartaSans.variable}`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
