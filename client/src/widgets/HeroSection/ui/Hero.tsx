'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

import Food from '../../../../public/images/Food.png';

import { Card } from './Card';

import SvgArrow from '@/shared/assets/svg/SvgArrow';
import { BlockGraphic } from './BlockGraphic';

export const Hero = () => {
    const heroVariants = {
        hidden: {},
        show: {},
    };

    return (
        <motion.div
            className="relative mt-[3.0625rem] py-[2.6875rem]"
            initial="hidden"
            variants={heroVariants}
            viewport={{ amount: 0.8, once: true }}
            whileInView="show">
            <Card />
            <span
                className="relative left-[8px] mx-auto block h-[200px] w-[200px] rounded-full"
                style={{
                    background:
                        'linear-gradient(137deg, #6C5FBC 0%, #5144A0 100%)',
                }}>
                <SvgArrow className="absolute right-[-32.5px] top-[28px] z-[-10]" />
                <Image
                    alt="food"
                    className="absolute right-[11px] mt-[6px]"
                    src={Food}
                />
            </span>
            <BlockGraphic />
        </motion.div>
    );
};
