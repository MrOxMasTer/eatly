import { FrequentQuestions } from '@/widgets/FrequentQuestions';

export default function MenuLayout({
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
