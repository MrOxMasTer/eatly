import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/header';

export default function DevicesLayout({
    children,
    menuModal,
}: {
    children: React.ReactNode;
    menuModal: React.ReactNode;
}) {
    return (
        <>
            {menuModal}
            <Header />
            {children}
            <Footer />
        </>
    );
}
