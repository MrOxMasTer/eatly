import { TDishe } from '@/shared/api';
import { dishesServices } from '@/shared/api/dishe/dishes';
import { ViewAll } from '@/shared/ui/ViewAll';
import { ListDishes } from '../../../entities/dishe/ui/ListDishes';

export const TopDishes = async () => {
    const initialData = await dishesServices.getTopDishes<TDishe[]>();

    return (
        <section className="border-t border-solid border-silver">
            <div className="container py-[66px] ">
                <h2 className="mt-[1.125rem] text-center text-[1.875rem] font-semibold leading-[120%] text-tuna">
                    Our Top <span className="text-primary">Dishes</span>
                </h2>
                <ListDishes initialData={initialData} />
                <ViewAll className="ml-auto mt-[60px] w-fit" href="/" />
            </div>
        </section>
    );
};
