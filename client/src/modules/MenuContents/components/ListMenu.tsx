import { match } from 'ts-pattern';

import { QueryStatus } from '@tanstack/react-query';

import { TDishe } from '@/types/dishes.types';
import { TRestaurant } from '@/types/restaurants.types';
import ItemDishes from '@/ui/ItemDishes';
import ItemRestaurants from '@/ui/ItemRestaurants';
import SkeletonItemDishes from '@/ui/SkeletonItemDishes';
import SkeletonItemRestaurants from '@/ui/SkeletonItemRestaurants';

interface IListMenuProps {
    data: TDishe[] | TRestaurant[];
    appearance: string;
    status: QueryStatus;
}

const ListMenu = ({ data, appearance, status }: IListMenuProps) => (
    <ul
        className={`my-10 grid ${
            appearance === 'dishes'
                ? 'grid-cols-2 gap-x-5 gap-y-10'
                : 'gap-y-10'
        }`}>
        {match([appearance, status])
            .with(['dishes', 'loading'], () =>
                [1, 2, 3, 4].map((item) => (
                    <li key={item}>
                        <SkeletonItemDishes />
                    </li>
                )),
            )
            .with(['restaurants', 'loading'], () =>
                [3, 2, 1].map((item) => (
                    <li key={item}>
                        <SkeletonItemRestaurants />
                    </li>
                )),
            )
            .with(
                ['dishes', 'success'],
                () =>
                    data?.map((dishe) => (
                        <li key={`${dishe.title}${dishe.id}`}>
                            <ItemDishes dishe={dishe} />
                        </li>
                    )),
            )
            .with(
                ['restaurants', 'success'],
                () =>
                    data?.map((restaurant) => (
                        <li key={`${restaurant.title}${restaurant.id}`}>
                            <ItemRestaurants restaurant={restaurant} />
                        </li>
                    )),
            )
            .otherwise(() => null)}
    </ul>
);

export default ListMenu;
