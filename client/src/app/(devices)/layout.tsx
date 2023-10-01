import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/header';

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
