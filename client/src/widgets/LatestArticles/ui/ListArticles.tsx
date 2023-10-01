import { ItemArticles } from './ItemArticles';

export const ListArticles = () => {
    const b = 4;

    return (
        <ul className="my-[3.6875rem] grid gap-y-[3.125rem] px-[2.1875rem]">
            {[1, 2, 3].map((item) => (
                <ItemArticles />
            ))}
        </ul>
    );
};
