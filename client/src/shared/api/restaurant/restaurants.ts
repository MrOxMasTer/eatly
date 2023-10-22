// TODO: сделать валидацию всех запросов

import { TRestaurant } from '@/shared/api';
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

    async getTopRestaurants() {
        return api.get<TRestaurant[]>('/restaurants/top');
        // .then(SRestaurants.parse);
    },

    async getRestaurantsByForm(query: TFormMenuLite) {
        const { category, mostPopular, price, recomended, search } = query;

        return api.get<TRestaurant[]>('/restaurants/menu', {
            params: {
                ...(search ? { search } : {}),
                ...(category ? { category } : {}),
                ...(mostPopular ? { mostPopular } : {}),
                ...(price ? { price } : {}),
                ...(recomended ? { recomended } : {}),
            },
        });
        // .then(SRestaurants.parse);
    },
};
