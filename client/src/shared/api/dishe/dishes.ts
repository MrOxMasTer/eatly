// TODO: сделать валидацию всех запросов

import { TFormMenuLite } from '@/widgets/MenuContents/formMenu.types';
import { api } from '../api';

export const dishesServices = {
    async getDishes<T>() {
        return api.get<T>('/dishes').then((response) => response?.data);
        // .then(SRestaurants.parse);
    },

    async getTopDishes<T>() {
        return api.get<T>('/dishes/top').then((response) => response?.data);
        // .then(SRestaurants.parse);
    },

    async getDishesByForm<T>(query: TFormMenuLite) {
        const { category, mostPopular, price, recomended, search } = query;

        return api
            .get<T>('/dishes/menu', {
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
