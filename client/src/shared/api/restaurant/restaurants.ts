// TODO: сделать валидацию всех запросов

import { TFormMenuLite } from '@/widgets/MenuContents/formMenu.types';
import { api } from '../api';

export const restaurantsServices = {
    async getRestaurantById<T>(id: string) {
        return api
            .get<T>(`/restaurants/${id}`)
            .then((response) => response?.data);
    },

    async getRestaurants<T>() {
        return api.get<T>('/restaurants').then((response) => response?.data);
        // .then(SRestaurants.parse);
    },

    async getTopRestaurants<T>() {
        return api
            .get<T>('/restaurants/top')
            .then((response) => response?.data);
        // .then(SRestaurants.parse);
    },

    async getRestaurantsByForm<T>(query: TFormMenuLite) {
        const { category, mostPopular, price, recomended, search } = query;

        return api
            .get<T>('/restaurants/menu', {
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
