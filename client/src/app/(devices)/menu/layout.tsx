import { FrequentQuestions } from '@/widgets/FrequentQuestions';

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
