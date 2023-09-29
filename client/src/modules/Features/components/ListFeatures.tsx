'use client';

import { motion } from 'framer-motion';

import { list } from '../constants/list';

import Feature from './Feature';

const ListDemonsration = () => {
    const listVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        show: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <motion.ul
            className="demonstration text-center"
            initial="hidden"
            variants={listVariants}
            viewport={{ amount: 0.3, once: true }}
            whileInView="show">
            {list.map((feature) => (
                <motion.li key={feature.title} variants={itemVariants}>
                    <Feature feature={feature} />
                </motion.li>
            ))}
        </motion.ul>
    );
};

export default ListDemonsration;
