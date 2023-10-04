import { Banner } from '@/shared/ui/Banner';
import { MenuContents } from '@/widgets/MenuContents';
import { TFormMenu } from '@/widgets/MenuContents/formMenu.types';
import { TopDishes } from '@/widgets/TopDishes';
import { TopRestaurants } from '@/widgets/TopRestaurants';

export default function Menu({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const selectedSearchParams: TFormMenu = {
        category: (searchParams.category as string) || '',
        recomended: (searchParams.recomended as string) || '',
        mostPopular: (searchParams.mostPopular as string) || '',
        price: Number(searchParams.price) || 0,
        search: (searchParams.search as string) || '',
        appearance: (searchParams.appearance as string) || '',
    };

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
