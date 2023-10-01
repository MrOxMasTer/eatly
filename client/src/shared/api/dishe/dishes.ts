// TODO: сделать валидацию всех запросов

import { TFormMenuLite } from '@/widgets/MenuContents/formMenu.types';
import { instanse } from '../instance';
import { TDishe } from './models';

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
