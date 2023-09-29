import { EmailSubscribe } from '@/modules/EmailSubscribe';
import { FrequentQuestions } from '@/modules/FrequentQuestions';
import { LatestArticles } from '@/modules/LatestArticles';

const Blog = () => (
    <main>
        <EmailSubscribe />
        <LatestArticles />
        <FrequentQuestions />
    </main>
);

export default Blog;
