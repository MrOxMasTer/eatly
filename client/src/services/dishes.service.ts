import { instanse } from './instance';

import { TDishe } from '@/types/dishes.types';
import { TFormMenuLite } from '@/types/formMenu.types';

// TODO: сделать валидацию всех запросов

export const dishesServices = {
    async getDishes() {
        return instanse
            .get<TDishe[]>('/dishes')
            .then((response) => response?.data);
        // .then(SRestaurants.parse);
    },

    async getTopDishes() {
        return instanse
            .get<TDishe[]>('/dishes/top')
            .then((response) => response?.data);
        // .then(SRestaurants.parse);
    },

    async getDishesByForm(query: TFormMenuLite) {
        const { category, mostPopular, price, recomended, search } = query;

        return instanse
            .get<TDishe[]>('/dishes/menu', {
                params: {
                    ...(search ? { search } : {}),
                    ...(category ? { category } : {}),
                    ...(mostPopular ? { mostPopular } : {}),
                    ...(price ? { price } : {}),
                    ...(recomended ? { recomended } : {}),
                },
            })
            .then((response) => response?.data);
        // .then(SRestaurants.parse);
    },
};
