import { miniListDishes } from '../constants/miniListDishes';
import { MiniListCardDishes } from './MiniListCardDishes';

export const MiniListDishes = () => (
    <ul className="mt-[26.5px] grid gap-2.5">
        {miniListDishes.map((dishe) => (
            <MiniListCardDishes dishe={dishe} />
        ))}
    </ul>
);
