'use client';

import { TRestaurant } from '@/shared/api';
import { motion } from 'framer-motion';
import { CardRestaurant } from './CardRestaurant';

interface IListRestaurants {
    data: TRestaurant[];
}

export const ListRestaurants = ({ data }: IListRestaurants) => {
    const listVariants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
        exit: { opacity: 0 },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
        exit: { opacity: 0 },
    };

    return (
        <motion.ul
            className="mt-[59px] grid gap-10"
            initial="hidden"
            variants={listVariants}
            viewport={{ amount: 0.4, once: true }}
            whileInView="visible">
            {data?.map((restaurant) => (
                <motion.li
                    key={`${restaurant.title}${restaurant.id}`}
                    variants={itemVariants}>
                    <CardRestaurant restaurant={restaurant} />
                </motion.li>
            ))}
        </motion.ul>
    );
};
