// TODO: сделать валидацию всех запросов

import { TFormMenuLite } from '@/widgets/MenuContents/formMenu.types';
import { api } from '../api';
import { TDishe } from './models';

export const dishesServices = {
    async getDishes<T>() {
        return api.get<T>('/dishes').then((response) => response?.data);
        // .then(SRestaurants.parse);
    },

    async getTopDishes() {
        return api.get<TDishe[]>('/dishes/top');
    },

    async getDishesByForm(query: TFormMenuLite) {
        const { category, mostPopular, price, recomended, search } = query;

        return api.get<TDishe[]>('/dishes/menu', {
            params: {
                ...(search ? { search } : {}),
                ...(category ? { category } : {}),
                ...(mostPopular ? { mostPopular } : {}),
                ...(price ? { price } : {}),
                ...(recomended ? { recomended } : {}),
            },
        });
    },
};
