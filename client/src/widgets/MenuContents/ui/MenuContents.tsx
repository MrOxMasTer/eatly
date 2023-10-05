import { TDishe, TRestaurant } from '@/shared/api';
import { dishesServices } from '@/shared/api/dishe/dishes';
import { restaurantsServices } from '@/shared/api/restaurant/restaurants';
import { FormMenu } from './FormMenu';
import { ListMenu } from './ListMenu';

interface IMenuContents {
    selectedSearchParams: { [key: string]: string };
}

const getInitialData = async (selectedSearchParams: {
    [key: string]: string;
}) => {
    console.log(selectedSearchParams);

    const { appearance, ...query } = selectedSearchParams;

    if (appearance === 'restaurants') {
        return restaurantsServices.getRestaurantsByForm<TRestaurant[]>({
            ...query,
            price: Number(selectedSearchParams.price),
        });
    }
    if (appearance === 'dishes') {
        return dishesServices.getDishesByForm<TDishe[]>({
            ...query,
            price: Number(selectedSearchParams.price),
        });
    }

    return undefined;
};

export const MenuContents = async ({ selectedSearchParams }: IMenuContents) => {
    const initialData = await getInitialData(selectedSearchParams);

    return (
        <section>
            <h2 className="visually-hidden">Menu</h2>
            <div className="container">
                <FormMenu selectedSearchParams={selectedSearchParams} />
                <ListMenu
                    initialData={initialData}
                    selectedSearchParams={selectedSearchParams}
                />
            </div>
        </section>
    );
};
