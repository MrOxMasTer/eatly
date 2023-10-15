import { EmailSubscribe } from '@/features/EmailSubscribe';
import { FrequentQuestions } from '@/widgets/FrequentQuestions';
import { LatestArticles } from '@/widgets/LatestArticles';

const Blog = () => (
    <main>
        <div className="container">
            <EmailSubscribe />
        </div>
        <LatestArticles />
        <FrequentQuestions />
    </main>
);

export default Blog;
