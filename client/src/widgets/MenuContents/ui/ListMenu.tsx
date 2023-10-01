import { match } from 'ts-pattern';

import { CardDishe, SkeletonDishe } from '@/entities/dishe/ui';
import { CardRestaurant, SkeletonRestaurant } from '@/entities/restaurant/ui';
import { TDishe, TRestaurant } from '@/shared/api';
import { QueryStatus } from '@tanstack/react-query';

interface IListMenuProps {
    data: TDishe[] | TRestaurant[];
    appearance: string;
    status: QueryStatus;
}

export const ListMenu = ({ data, appearance, status }: IListMenuProps) => (
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
                        <SkeletonDishe />
                    </li>
                )),
            )
            .with(['restaurants', 'loading'], () =>
                [3, 2, 1].map((item) => (
                    <li key={item}>
                        <SkeletonRestaurant />
                    </li>
                )),
            )
            .with(
                ['dishes', 'success'],
                () =>
                    data?.map((dishe) => (
                        <li key={`${dishe.title}${dishe.id}`}>
                            <CardDishe dishe={dishe} />
                        </li>
                    )),
            )
            .with(
                ['restaurants', 'success'],
                () =>
                    data?.map((restaurant) => (
                        <li key={`${restaurant.title}${restaurant.id}`}>
                            <CardRestaurant restaurant={restaurant} />
                        </li>
                    )),
            )
            .otherwise(() => null)}
    </ul>
);
