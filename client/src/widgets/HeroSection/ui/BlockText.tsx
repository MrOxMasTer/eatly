'use client';

import { motion } from 'framer-motion';

export const BlockText = () => (
    <>
        <motion.span
            animate={{
                y: 0,
                opacity: 1,
            }}
            className="before:content mx-auto flex w-fit gap-3 text-[9px] font-semibold leading-[120%] tracking-[1.233px] text-uniBlack before:mt-1 before:block before:h-[0.6px] before:w-8 before:bg-uniBlack"
            initial={{
                y: -50,
                opacity: 0,
            }}
            transition={{
                duration: 1,
            }}>
            OVER 1000 USERS
        </motion.span>
        <motion.h2
            animate={{
                y: 0,
                opacity: 1,
            }}
            className="mt-1 text-center text-[46px] font-semibold leading-[120%] tracking-[-1.85px] text-uniBlack"
            initial={{
                y: -50,
                opacity: 0,
            }}
            transition={{
                duration: 1,
            }}>
            Enjoy Foods Over <span className="text-blueViolet">World</span>
        </motion.h2>
        <p className="mt-4 text-center font-inter text-[0.6875rem] leading-[1.075rem] text-doveGray opacity-70">
            Eatly help you set saving goals, earn cash back offers, Go to
            disclaimer for more details and get paychecks up to two days early.
            Get a <span className="text-blueViolet">$20 bonus.</span>
        </p>
    </>
);
