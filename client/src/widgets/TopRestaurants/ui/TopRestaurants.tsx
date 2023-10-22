import { TopListRestaurants } from '@/entities/restaurant/ui/TopListRestaurants';
import { restaurantsServices } from '@/shared/api/restaurant/restaurants';
import { ViewAll } from '@/shared/ui/ViewAll';

export const TopRestaurants = async ({
    className = '',
    ...props
}: {
    className?: string;
}) => {
    const { data } = await restaurantsServices.getTopRestaurants();

    return (
        <section className={className} {...props}>
            <div className="container py-[66px]">
                <h2 className="mt-[1.125rem] text-center text-[1.875rem] font-semibold leading-[120%] text-tuna">
                    Our Top <span className="text-primary">Restaurants</span>
                </h2>
                <TopListRestaurants initialData={data} />
                <ViewAll className="ml-auto mt-[60px] w-fit" href="/" />
            </div>
        </section>
    );
};
