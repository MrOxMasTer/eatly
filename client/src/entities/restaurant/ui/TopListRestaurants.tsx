'use client';

import { TRestaurant } from '@/shared/api';
import { useTopRestaurants } from '../model';
import { ListRestaurants } from './ListRestaurants';

interface ITopListRestaurants {
    initialData: TRestaurant[];
}

export const TopListRestaurants = ({ initialData }: ITopListRestaurants) => {
    const { data } = useTopRestaurants(initialData);

    return <ListRestaurants data={data} />;
};
