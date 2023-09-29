import { instanse } from './instance';

import { TFormMenuLite } from '@/types/formMenu.types';
import { TRestaurant, TRestaurantById } from '@/types/restaurants.types';

// TODO: сделать валидацию всех запросов

export const restaurantsServices = {
    async getRestaurantById(id: string) {
        return instanse
            .get<TRestaurantById>(`/restaurants/${id}`)
            .then((response) => response?.data);
    },

    async getRestaurants() {
        return instanse
            .get<TRestaurant[]>('/restaurants')
            .then((response) => response?.data);
        // .then(SRestaurants.parse);
    },

    async getTopRestaurants() {
        return instanse
            .get<TRestaurant[]>('/restaurants/top')
            .then((response) => response?.data);
        // .then(SRestaurants.parse);
    },

    async getRestaurantsByForm(query: TFormMenuLite) {
        const { category, mostPopular, price, recomended, search } = query;

        return instanse
            .get<TRestaurant[]>('/restaurants/menu', {
                params: {
                    ...(search ? { search } : {}),
                    ...(category ? { category } : {}),
                    ...(mostPopular ? { mostPopular } : {}),
                    ...(price ? { price } : {}),
                    ...(recomended ? { recomended } : {}),
                },
            })
            .then((response) => response?.data)
            .catch((err) => {
                console.log(err);
            });
        // .then(SRestaurants.parse);
    },
};
