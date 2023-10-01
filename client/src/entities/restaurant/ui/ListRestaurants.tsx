'use client';

import { motion } from 'framer-motion';
import { match } from 'ts-pattern';
import { useTopRestaurants } from '../model';
import { CardRestaurant } from './CardRestaurant';
import { SkeletonRestaurant } from './SkeletonRestaurant';

export const ListRestaurants = () => {
    const { data, status } = useTopRestaurants();

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

    const skeletItemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
        exit: { opacity: 0 },
    };

    return (
        <>
            {match(status)
                .with('loading', () => (
                    <ul className="mt-[3.6875rem] grid gap-10">
                        {[1, 2, 3].map((item) => (
                            <motion.li key={item} variants={skeletItemVariants}>
                                <SkeletonRestaurant />
                            </motion.li>
                        ))}
                    </ul>
                ))
                .with('success', () => (
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
                ))
                .otherwise(() => null)}
        </>
    );
};
