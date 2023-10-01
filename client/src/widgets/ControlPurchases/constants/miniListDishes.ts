export type TMiniDishes = {
    src: string;
    title: string;
    state: string;
    time: string;
};

export const miniListDishes: TMiniDishes[] = [
    {
        src: '/images/miniChikenHell.png',
        title: 'Chicken Hell',
        state: 'On The Way',
        time: '3:09PM',
    },
    {
        src: '/images/miniSweDish.png',
        title: 'Swe Dish',
        state: 'Delivered',
        time: 'Yesterday',
    },
    {
        src: '/images/miniFishHellVeg.png',
        title: 'Fish Hell Veg',
        state: 'Cancelled',
        time: 'Yesterday',
    },
];
