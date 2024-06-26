import SvgBack from '@/shared/assets/svg/SvgBack';
import { ListArticles } from './ListArticles';

export const LatestArticles = () => {
    return (
        <section>
            <div className="container">
                <h2 className="text-center text-[1.625rem] font-semibold leading-[120%] tracking-[-1.14px]">
                    Latest <span className="text-primary">Articles</span>
                </h2>
                <ListArticles />
                <SvgBack />
            </div>
        </section>
    );
};
