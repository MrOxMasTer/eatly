import { Banner } from '@/shared/ui/Banner';
import { MenuContents } from '@/widgets/MenuContents';
import { listMostPopular } from '@/widgets/MenuContents/constants/listMostPopular';
import { arrayRecomended } from '@/widgets/MenuContents/constants/listRecomended';
import { TopDishes } from '@/widgets/TopDishes';
import { TopRestaurants } from '@/widgets/TopRestaurants';

export default function Menu({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const selectedSearchParams = {
        category: (searchParams.category as string) || '',
        recomended: (searchParams.recomended as string) || arrayRecomended[0],
        mostPopular: (searchParams.mostPopular as string) || listMostPopular[0],
        price: (searchParams.price as string) || '',
        search: (searchParams.search as string) || '',
        appearance: (searchParams.appearance as string) || '',
    };

    console.log(selectedSearchParams);

    return (
        <>
            <div className="container">
                <Banner />
            </div>
            <MenuContents selectedSearchParams={selectedSearchParams} />
            <TopRestaurants />
            <TopDishes />
        </>
    );
}
