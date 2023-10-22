'use client';

import { motion } from 'framer-motion';
import { useTopDishes } from '../model';
import { CardDishe } from './CardDishe';
import { TDishe } from '@/shared/api';

interface IListDishesProps {
    initData: TDishe[];
}

export const ListDishes = ({ initData }: IListDishesProps) => {
    const { data } = useTopDishes(initData);

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
            className="mt-[60px] grid grid-cols-2 gap-x-5 gap-y-10"
            initial="hidden"
            variants={listVariants}
            viewport={{ amount: 0.2, once: true }}
            whileInView="visible">
            {data?.map((dishe) => (
                <motion.li
                    key={`${dishe.title}${dishe.id}`}
                    variants={itemVariants}>
                    <CardDishe dishe={dishe} />
                </motion.li>
            ))}
        </motion.ul>
    );
};
