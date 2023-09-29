import { FrequentQuestions } from '@/modules/FrequentQuestions';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            {children}
            <FrequentQuestions />
        </main>
    );
}
