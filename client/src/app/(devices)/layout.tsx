import { Header } from '@/modules/Header';

import { Footer } from '@/modules/Footer';

export default function DevicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
