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
    const { appearance, ...query } = selectedSearchParams;

    if (appearance === 'restaurants') {
        const res = await restaurantsServices.getRestaurantsByForm({
            ...query,
            price: Number(selectedSearchParams.price),
        });

        return res;
    }
    if (appearance === 'dishes') {
        const res = await dishesServices.getDishesByForm({
            ...query,
            price: Number(selectedSearchParams.price),
        });

        return res;
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
