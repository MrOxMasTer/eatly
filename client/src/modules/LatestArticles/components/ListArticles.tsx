import { TArticles } from '../latestArticles.types';

import ItemArticles from './ItemArticles';

interface IListArticlesProps {
    data: TArticles[];
}

const ListArticles = () => {
    const b = 4;

    return (
        <ul className="my-[3.6875rem] grid gap-y-[3.125rem] px-[2.1875rem]">
            {[1, 2, 3].map((item) => (
                <ItemArticles />
            ))}
        </ul>
    );
};

export default ListArticles;
