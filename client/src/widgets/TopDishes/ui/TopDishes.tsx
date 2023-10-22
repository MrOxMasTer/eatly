import { ListDishes } from '@/entities/dishe/ui/ListDishes';
import { dishesServices } from '@/shared/api/dishe/dishes';
import { ViewAll } from '@/shared/ui/ViewAll';

export const TopDishes = async () => {
    const { data } = await dishesServices.getTopDishes();

    return (
        <section className="border-t border-solid border-silver">
            <div className="container py-[66px] ">
                <h2 className="mt-[1.125rem] text-center text-[1.875rem] font-semibold leading-[120%] text-tuna">
                    Our Top <span className="text-primary">Dishes</span>
                </h2>
                <ListDishes initData={data} />
                <ViewAll className="ml-auto mt-[60px] w-fit" href="/" />
            </div>
        </section>
    );
};
