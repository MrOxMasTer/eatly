import { FormMenu } from './FormMenu';

import { TDishe, TRestaurant } from '@/shared/api';
import { dishesServices } from '@/shared/api/dishe/dishes';
import { restaurantsServices } from '@/shared/api/restaurant/restaurants';
import { undefined } from 'zod';
import { TFormMenu } from '../formMenu.types';
import { ListMenu } from './ListMenu';

interface IMenuContents {
    selectedSearchParams: TFormMenu;
}

const getInitialData = async (selectedSearchParams: TFormMenu) => {
    const { appearance, ...query } = selectedSearchParams;

    if (appearance === 'restaurants') {
        return restaurantsServices.getRestaurantsByForm<TRestaurant[]>({
            ...query,
        });
    }
    if (appearance === 'dishes') {
        return dishesServices.getDishesByForm<TDishe[]>({
            ...query,
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
