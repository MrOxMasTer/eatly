'use client';

import { motion } from 'framer-motion';

import { match } from 'ts-pattern';

import { useTopDishes } from '@/hooks/useTopDishes';
import ItemDishes from '@/ui/ItemDishes';
import SkeletonItemDishes from '@/ui/SkeletonItemDishes';

const ListDishes = () => {
    const { data, status } = useTopDishes();

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
                    <ul className="mt-[60px] grid grid-cols-2 gap-x-5 gap-y-10">
                        {[1, 2, 3, 4].map((item) => (
                            <motion.li key={item} variants={skeletItemVariants}>
                                <SkeletonItemDishes />
                            </motion.li>
                        ))}
                    </ul>
                ))
                .with('success', () => (
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
                                <ItemDishes dishe={dishe} />
                            </motion.li>
                        ))}
                    </motion.ul>
                ))
                .otherwise(() => null)}
        </>
    );
};

export default ListDishes;
