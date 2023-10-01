import { EmailSubscribe } from '@/features/EmailSubscribe';
import { FrequentQuestions } from '@/widgets/FrequentQuestions';
import { LatestArticles } from '@/widgets/LatestArticles';

const Blog = () => (
    <main>
        <EmailSubscribe />
        <LatestArticles />
        <FrequentQuestions />
    </main>
);

export default Blog;
