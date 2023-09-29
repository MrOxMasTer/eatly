'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

import FoodMini from '../../../../public/images/FoodMini.png';

const Card = () => {
    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.8 } },
    };

    return (
        <motion.div
            className="absolute right-[16px] top-[13px] z-10 min-h-[42.46px] min-w-[156px] rounded-[8px] bg-white"
            style={{
                boxShadow: '-4.67px 5.84px 9.73px rgba(0, 0, 0, 0.15)',
            }}
            variants={cardVariants}>
            <div className="hero-card relative px-[7px] pb-[2px] pt-[1px] after:bg-heroCard">
                <div className="relative flex gap-[8.6px]">
                    <Image
                        alt="Food"
                        className="tra my-auto h-[38.51px] w-[34.93px]"
                        src={FoodMini}
                    />
                    <div>
                        <h3 className="mt-[6px] text-[9px] font-semibold leading-[140%] text-tuna">
                            Chicken Hell
                        </h3>
                        <span className="mt-1 block text-[4.7px] font-medium leading-[140%]">
                            On The Way
                        </span>
                    </div>
                    <span className="absolute bottom-0 right-0 mb-1 text-[5px] font-medium leading-[140%] text-darkGray">
                        3:09 PM
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default Card;
